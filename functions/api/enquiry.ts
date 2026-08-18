/**
 * POST /api/enquiry — Cloudflare Pages Function.
 *
 * v1.2 WS3. Marlbridge is deployed on Cloudflare Pages already (confirmed
 * throughout this project's deploy history), so this is a Pages Function
 * living alongside the static Astro build — it adds one dynamic endpoint
 * without requiring an Astro SSR adapter or any change to the existing
 * fully-static site output.
 *
 * Defence in depth, all safely implementable from the repository alone:
 *   - same-origin check (Origin/Referer against the real site origin)
 *   - strict field allowlist + length caps + header-injection stripping
 *     (functions/_lib/enquiry-validation.ts, framework-agnostic + unit
 *     tested — see functions/api/__tests__)
 *   - honeypot field (`website`) — a tripped honeypot returns a FAKE
 *     success so an automated submitter has no signal it was caught
 *   - payload size limit
 *   - Cloudflare Turnstile verification — ONLY runs if a
 *     `TURNSTILE_SECRET_KEY` binding exists; otherwise this check is
 *     skipped and documented as a release blocker (no Turnstile site/
 *     secret key could be provisioned from inside this repository)
 *   - rate limiting via a `ENQUIRY_RATE_LIMIT` KV binding — ONLY runs if
 *     that binding exists; otherwise skipped and documented the same way
 *   - email dispatch via a `ENQUIRY_EMAIL` Email Routing send binding
 *     (Cloudflare's own native email-sending capability — no third-party
 *     paid service, no fabricated API key). If that binding is not
 *     configured, returns a truthful 503 rather than pretending to send.
 *
 * Required Cloudflare Pages dashboard configuration for this to go live
 * (documented here AND in the v1.2 final report — none of it can be done
 * from this repository):
 *   1. Cloudflare Email Routing enabled on the marlbridge.com zone, with
 *      hello@marlbridge.com verified as a destination address.
 *   2. A `send_email` binding named `ENQUIRY_EMAIL` added to the Pages
 *      project (Settings -> Functions -> Email bindings), addressed to
 *      hello@marlbridge.com.
 *   3. (Strongly recommended, not yet configured) A Turnstile site
 *      created in the Cloudflare dashboard; its secret key added as the
 *      `TURNSTILE_SECRET_KEY` Pages environment variable/secret, and its
 *      site key wired into EnquiryForm.astro's Turnstile widget.
 *   4. (Recommended) A KV namespace bound as `ENQUIRY_RATE_LIMIT` for
 *      distributed rate limiting across Cloudflare's edge.
 * Until (1)+(2) exist, this endpoint validates and rejects spam correctly
 * but cannot actually deliver an email — it returns a truthful "not
 * connected yet" response rather than a false success.
 */
import {
  validateEnquiry,
  isHoneypotTripped,
  renderEmailBody,
  type EnquiryKind,
} from '../_lib/enquiry-validation';

const SITE_ORIGIN = 'https://marlbridge.com';
const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT_MAX_PER_HOUR = 5;

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

// Minimal local shape for the two Cloudflare bindings this function may
// use, kept local rather than depending on @cloudflare/workers-types so
// this one file doesn't pull a new dependency into the project.
interface KVLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, opts?: { expirationTtl?: number }): Promise<void>;
}
interface SendEmailLike {
  send(message: unknown): Promise<void>;
}
interface Env {
  TURNSTILE_SECRET_KEY?: string;
  ENQUIRY_RATE_LIMIT?: KVLike;
  ENQUIRY_EMAIL?: SendEmailLike;
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

  if (!env.ENQUIRY_EMAIL) {
    // Truthful — matches the existing "not connected yet" message shape
    // rather than claiming success. See the required-configuration list
    // in this file's header comment and the v1.2 final report.
    return jsonResponse(503, {
      ok: false,
      message: 'Online enquiries are not connected yet. Please email hello@marlbridge.com.',
    });
  }

  try {
    const body = renderEmailBody(kind, result.data);
    // Cloudflare Email Routing send binding. Kept intentionally minimal —
    // the exact message-construction call is finalised once the binding
    // is configured and can be tested against a real Cloudflare
    // environment (not possible from this repository/sandbox).
    await env.ENQUIRY_EMAIL.send({
      to: 'hello@marlbridge.com',
      subject: `Marlbridge enquiry — ${result.data.name ?? 'unknown'}`,
      replyTo: result.data.email,
      text: body,
    });
  } catch {
    return jsonResponse(502, { ok: false, message: 'Something went wrong sending your enquiry. Please try again, or email us.' });
  }

  return jsonResponse(200, { ok: true });
};

export const onRequestGet = async (): Promise<Response> => jsonResponse(405, { ok: false, message: 'Method not allowed.' });
