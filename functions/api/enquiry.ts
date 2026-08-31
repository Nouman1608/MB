/**
 * POST /api/enquiry — Cloudflare Pages Function.
 *
 * v1.2 WS3 built this endpoint's validation/security shell (same-origin
 * check, strict field allowlist, honeypot, size limit, Turnstile gate,
 * rate limiting) against a Cloudflare Email Routing send binding that was
 * never actually configured, so it correctly returned an honest 503
 * rather than a false success.
 *
 * MARLBRIDGE v1.x WS1 replaces that unconfigured binding with Resend
 * (owner-confirmed: RESEND_API_KEY is already set as a Cloudflare Pages
 * secret). Email is sent via Resend's HTTP API rather than Cloudflare
 * Email Routing:
 *   - From: hello@marlbridge.com (the site's public, verified sender —
 *     same address already shown to visitors everywhere via
 *     src/utils/forms/submit.ts's FALLBACK_EMAIL)
 *   - To: the owner's confirmed private inbox for enquiry delivery (never
 *     shown publicly — kept as a named constant in this file, not an env
 *     var, since it's a routing decision rather than a secret)
 *   - Reply-To: the visitor's own validated email address, so replying
 *     goes straight back to them, never appearing to come from Marlbridge
 *
 * Defence in depth, unchanged from v1.2 WS3:
 *   - same-origin check (Origin/Referer against the real site origin)
 *   - strict field allowlist + length caps + header-injection stripping
 *     (functions/_lib/enquiry-validation.ts, framework-agnostic + unit
 *     tested — see functions/api/__tests__)
 *   - honeypot field (`website`) — a tripped honeypot returns a FAKE
 *     success so an automated submitter has no signal it was caught
 *   - payload size limit
 *   - Cloudflare Turnstile verification — ONLY runs if a
 *     `TURNSTILE_SECRET_KEY` binding exists. Owner-confirmed as
 *     configured server-side (v1.x WS1); the site key still needs to be
 *     wired into EnquiryForm.astro's widget once provided (it is a public
 *     value, not a secret, but has not yet been supplied) — see the v1.x
 *     decision log.
 *   - rate limiting via a `ENQUIRY_RATE_LIMIT` KV binding — ONLY runs if
 *     that binding exists; otherwise skipped and documented as a release
 *     follow-up rather than pretended
 *
 * Required Cloudflare Pages configuration for this to go live:
 *   1. `RESEND_API_KEY` — Pages environment variable/secret. Owner has
 *      confirmed this is already set.
 *   2. hello@marlbridge.com verified as a sending domain/address in Resend
 *      (SPF/DKIM configured on the marlbridge.com DNS zone — owner-
 *      confirmed as set up; DMARC recommended but not verified from this
 *      repository).
 *   3. `TURNSTILE_SECRET_KEY` — Pages environment variable/secret.
 *      Owner-confirmed as already set.
 *   4. The Turnstile SITE key (public, not secret) still needs to be
 *      supplied and wired into EnquiryForm.astro — pending in the v1.x
 *      decision log.
 *   5. (Recommended, optional) A KV namespace bound as
 *      `ENQUIRY_RATE_LIMIT` for distributed rate limiting across
 *      Cloudflare's edge — not yet configured; skipped honestly rather
 *      than blocking the release.
 * Until (1) exists, this endpoint validates and rejects spam correctly but
 * cannot actually deliver an email — it returns a truthful "not connected
 * yet" response rather than a false success.
 */
import {
  validateEnquiry,
  isHoneypotTripped,
  renderEmailBody,
  type EnquiryKind,
} from '../_lib/enquiry-validation.ts';

const SITE_ORIGIN = 'https://marlbridge.com';
const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT_MAX_PER_HOUR = 5;

/** Public sender shown to visitors everywhere — see FALLBACK_EMAIL in
 * src/utils/forms/submit.ts, the single source for that address. Kept as
 * a literal here (rather than importing from the Astro-side module) since
 * this file is a standalone Cloudflare Function with its own build step. */
const ENQUIRY_SENDER = 'Marlbridge <hello@marlbridge.com>';

/** Private delivery inbox for enquiry notifications, confirmed by the
 * owner directly (v1.x decision log, WS1). Never shown to visitors —
 * distinct from ENQUIRY_SENDER, which is the public-facing address. Not a
 * secret (an email address is a routing decision, not a credential), so
 * it is safe to keep as a plain constant rather than an env var. */
const ENQUIRY_RECIPIENT = 'noumanahmed1989@gmail.com';

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get('Origin');
  if (origin) return origin === SITE_ORIGIN;
  // Some legitimate same-origin form posts (no-JS fallback, some browsers)
  // omit Origin but always send Referer; fall back to that.
  const referer = request.headers.get('Referer');
  return Boolean(referer && referer.startsWith(SITE_ORIGIN));
}

async function verifyTurnstile(secretKey: string, token: string, ip: string | null): Promise<boolean> {
  try {
    const body = new URLSearchParams({ secret: secretKey, response: token });
    if (ip) body.set('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    const result = (await res.json()) as { success?: boolean };
    return Boolean(result.success);
  } catch {
    // Fail closed: if we cannot reach Turnstile, treat as unverified rather
    // than silently letting the submission through.
    return false;
  }
}

async function checkRateLimit(kv: KVLike | undefined, ip: string | null): Promise<boolean> {
  if (!kv || !ip) return true; // no binding configured yet — documented gap, not a false block
  const key = `enquiry:${ip}:${new Date().toISOString().slice(0, 13)}`; // per-IP, per-hour bucket
  const current = Number((await kv.get(key)) ?? '0');
  if (current >= RATE_LIMIT_MAX_PER_HOUR) return false;
  await kv.put(key, String(current + 1), { expirationTtl: 3600 });
  return true;
}

/**
 * Sends the enquiry via the Resend HTTP API (https://resend.com/docs/api-reference/emails/send-email).
 * Kept as a plain fetch() call rather than adding the `resend` npm
 * dependency, matching this project's established pattern of not pulling
 * in a new dependency for a single Cloudflare Function call (see the
 * earlier decision to hand-write Cloudflare binding types instead of
 * depending on @cloudflare/workers-types).
 *
 * Throws on any non-2xx response so the caller's existing try/catch
 * produces the honest 502 failure path already in place.
 */
async function sendViaResend(apiKey: string, opts: { subject: string; text: string; replyTo?: string }): Promise<void> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: ENQUIRY_SENDER,
      to: [ENQUIRY_RECIPIENT],
      subject: opts.subject,
      text: opts.text,
      ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend API responded ${res.status}`);
  }
}

// Minimal local shape for the Cloudflare bindings this function may use,
// kept local rather than depending on @cloudflare/workers-types so this
// one file doesn't pull a new dependency into the project.
interface KVLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, opts?: { expirationTtl?: number }): Promise<void>;
}
interface Env {
  TURNSTILE_SECRET_KEY?: string;
  ENQUIRY_RATE_LIMIT?: KVLike;
  RESEND_API_KEY?: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }): Promise<Response> => {
  const { request, env } = context;

  if (!isSameOrigin(request)) {
    return jsonResponse(403, { ok: false, message: 'Request rejected.' });
  }

  const contentLength = Number(request.headers.get('Content-Length') ?? '0');
  if (contentLength > MAX_BODY_BYTES) {
    return jsonResponse(413, { ok: false, message: 'Submission too large.' });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return jsonResponse(400, { ok: false, message: 'Could not read submission.' });
  }

  if (isHoneypotTripped(form.get('website'))) {
    // Fake success — never signal detection to an automated submitter.
    return jsonResponse(200, { ok: true });
  }

  const kind = (form.get('enquiryKind') as string) as EnquiryKind;
  const raw: Record<string, unknown> = {};
  for (const [key, value] of form as unknown as Iterable<[string, FormDataEntryValue]>) raw[key] = value;

  const result = validateEnquiry(kind, raw);
  if (!result.ok) {
    return jsonResponse(400, { ok: false, message: 'Please check the highlighted fields.', errors: result.errors });
  }

  const ip = request.headers.get('CF-Connecting-IP');

  const turnstileToken = form.get('cf-turnstile-response') as string | null;
  if (env.TURNSTILE_SECRET_KEY) {
    if (!turnstileToken || !(await verifyTurnstile(env.TURNSTILE_SECRET_KEY, turnstileToken, ip))) {
      return jsonResponse(400, { ok: false, message: 'Verification failed. Please try again.' });
    }
  }

  if (!(await checkRateLimit(env.ENQUIRY_RATE_LIMIT, ip))) {
    return jsonResponse(429, { ok: false, message: 'Too many submissions. Please try again later, or email us directly.' });
  }

  if (!env.RESEND_API_KEY) {
    // Truthful — matches the "not connected yet" message shape rather
    // than claiming success. See the required-configuration list in this
    // file's header comment and the v1.x decision log.
    return jsonResponse(503, {
      ok: false,
      message: 'Online enquiries are not connected yet. Please email hello@marlbridge.com.',
    });
  }

  try {
    const body = renderEmailBody(kind, result.data);
    // Corrections are labelled distinctly (D-095, Flagship Dominance/Trust
    // programme) -- they have no `name` field, and the point of Section 9's
    // "distinguishable from tuition enquiries" requirement is exactly that
    // the owner's inbox should never confuse the two at a glance.
    const subject = kind === 'correction'
      ? `Marlbridge correction report — ${result.data.issueType ?? 'unspecified'}`
      : `Marlbridge enquiry — ${result.data.name ?? 'unknown'}`;
    await sendViaResend(env.RESEND_API_KEY, {
      subject,
      text: body,
      replyTo: typeof result.data.email === 'string' ? result.data.email : undefined,
    });
  } catch {
    return jsonResponse(502, { ok: false, message: 'Something went wrong sending your enquiry. Please try again, or email us.' });
  }

  return jsonResponse(200, { ok: true });
};

export const onRequestGet = async (): Promise<Response> => jsonResponse(405, { ok: false, message: 'Method not allowed.' });
