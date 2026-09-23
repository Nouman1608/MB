/**
 * D-286 -- optional revision emails: double opt-in subscription.
 *
 *   POST /api/subscribe               validate -> email a signed confirm link
 *   GET  /api/subscribe/confirm?t=    verify -> add the contact in Resend
 *                                     -> 303 to /subscribe/confirmed/
 *   GET|POST /api/subscribe/unsubscribe?t=  verify -> mark unsubscribed
 *
 * Nobody is added to a list until they click the confirmation link, and the
 * site says "subscribed" only after Resend accepted the contact. Until the
 * three settings below exist the endpoint answers 503 and the public form
 * stays hidden (src/data/newsletter.ts), so the feature cannot look like it
 * works when it does not:
 *   RESEND_API_KEY             (existing) sends the confirmation email
 *   RESEND_CONTACTS_API_KEY    a Resend key with full access (contacts)
 *   SUBSCRIBE_SIGNING_SECRET   a long random string that signs the links
 * Optional: RESEND_NEWSLETTER_SEGMENT_ID puts confirmed contacts in a segment.
 * Resend also needs two contact properties, `qualification` and `subjects`
 * (text), created before launch -- see docs/growth/newsletter-setup.md.
 *
 * This endpoint never sends a campaign. Campaigns are sent by a person from
 * Resend (Broadcasts), which adds its own unsubscribe link.
 */
import { validateSubscribe, isHoneypotTripped } from '../_lib/signup-validation.ts';
import { signToken, verifyToken } from '../_lib/signed-token.ts';
import { sendEmail, upsertContact, unsubscribeContact } from '../_lib/resend-client.ts';

const SITE_ORIGIN = 'https://marlbridge.com';
const CONFIRM_TTL_MS = 48 * 60 * 60 * 1000;
const UNSUB_TTL_MS = 5 * 365 * 24 * 60 * 60 * 1000;
const MAX_BODY_BYTES = 8_000;
const RATE_LIMIT_PER_HOUR = 5;

interface KVLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, opts?: { expirationTtl?: number }): Promise<void>;
}
export interface SubscribeEnv {
  RESEND_API_KEY?: string;
  RESEND_CONTACTS_API_KEY?: string;
  SUBSCRIBE_SIGNING_SECRET?: string;
  RESEND_NEWSLETTER_SEGMENT_ID?: string;
  TURNSTILE_SECRET_KEY?: string;
  ENQUIRY_RATE_LIMIT?: KVLike;
}

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
const redirect = (path: string) => new Response(null, { status: 303, headers: { Location: `${SITE_ORIGIN}${path}`, 'Cache-Control': 'no-store' } });

export const newsletterConfigured = (env: SubscribeEnv): boolean =>
  !!(env.RESEND_API_KEY && env.RESEND_CONTACTS_API_KEY && env.SUBSCRIBE_SIGNING_SECRET);

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get('Origin');
  if (origin) return origin === SITE_ORIGIN;
  const referer = request.headers.get('Referer');
  return Boolean(referer && referer.startsWith(SITE_ORIGIN));
}

async function verifyTurnstile(secret: string, token: string, ip: string | null, fetchImpl: typeof fetch): Promise<boolean> {
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set('remoteip', ip);
    const res = await fetchImpl('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
    return Boolean(((await res.json()) as { success?: boolean }).success);
  } catch {
    return false;
  }
}

async function rateLimited(kv: KVLike | undefined, ip: string | null): Promise<boolean> {
  if (!kv || !ip) return false; // fails open, like the enquiry limit (D-152)
  const key = `subscribe:${ip}:${new Date().toISOString().slice(0, 13)}`;
  const n = Number((await kv.get(key)) ?? '0');
  if (n >= RATE_LIMIT_PER_HOUR) return true;
  await kv.put(key, String(n + 1), { expirationTtl: 3600 });
  return false;
}

export async function onSubscribePost(ctx: { request: Request; env: SubscribeEnv; fetchImpl?: typeof fetch }): Promise<Response> {
  const { request, env } = ctx;
  const fetchImpl = ctx.fetchImpl ?? fetch;
  if (!newsletterConfigured(env)) return json(503, { ok: false, message: 'Revision emails are not available yet.' });
  if (!isSameOrigin(request)) return json(403, { ok: false, message: 'Request rejected.' });
  if (Number(request.headers.get('Content-Length') ?? '0') > MAX_BODY_BYTES) return json(413, { ok: false, message: 'Submission too large.' });

  let form: FormData;
  try { form = await request.formData(); } catch { return json(400, { ok: false, message: 'Could not read submission.' }); }
  if (isHoneypotTripped(form.get('website'))) return json(200, { ok: true, pending: true });

  const raw: Record<string, unknown> = { courses: form.getAll('courses') };
  for (const k of ['email', 'qualification', 'consent', 'source']) raw[k] = form.get(k) ?? undefined;
  const result = validateSubscribe(raw);
  if (!result.ok) return json(400, { ok: false, message: 'Please check the highlighted fields.', errors: result.errors });

  const ip = request.headers.get('CF-Connecting-IP');
  if (env.TURNSTILE_SECRET_KEY) {
    const token = form.get('cf-turnstile-response') as string | null;
    if (!token || !(await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token, ip, fetchImpl))) {
      return json(400, { ok: false, message: 'Verification failed. Please try again.' });
    }
  }
  if (await rateLimited(env.ENQUIRY_RATE_LIMIT, ip)) return json(429, { ok: false, message: 'Too many attempts. Please try again later.' });

  const { email, qualification, courses } = result.data;
  const token = await signToken({ e: email, q: qualification, c: courses, exp: Date.now() + CONFIRM_TTL_MS }, env.SUBSCRIBE_SIGNING_SECRET!);
  const confirmUrl = `${SITE_ORIGIN}/api/subscribe/confirm?t=${encodeURIComponent(token)}`;
  try {
    await sendEmail(env.RESEND_API_KEY!, {
      to: [email],
      subject: 'Confirm your Marlbridge revision emails',
      text: [
        'Please confirm that you want revision emails from Marlbridge.',
        '',
        `Confirm: ${confirmUrl}`,
        '',
        'You will receive occasional practice questions, explanations and links to free resources for the qualification and subjects you chose. You can unsubscribe from any email.',
        '',
        'If you did not ask for this, ignore this email and you will not be added. The link expires in 48 hours.',
        '',
        'Marlbridge — marlbridge.com',
      ].join('\n'),
    }, fetchImpl);
  } catch {
    return json(502, { ok: false, message: 'We could not send the confirmation email. Please try again later.' });
  }
  return json(200, { ok: true, pending: true });
}

export async function onSubscribeConfirm(ctx: { request: Request; env: SubscribeEnv; fetchImpl?: typeof fetch }): Promise<Response> {
  const { request, env } = ctx;
  if (!newsletterConfigured(env)) return redirect('/subscribe/error/');
  const t = new URL(request.url).searchParams.get('t') ?? '';
  const p = await verifyToken<{ e: string; q: string; c: string[]; exp: number }>(t, env.SUBSCRIBE_SIGNING_SECRET!);
  if (!p) return redirect('/subscribe/error/?reason=expired');
  try {
    await upsertContact(env.RESEND_CONTACTS_API_KEY!, {
      email: p.e,
      segmentId: env.RESEND_NEWSLETTER_SEGMENT_ID || undefined,
      // The visitor's own choices, so emails can be matched to them. These two
      // contact properties must exist in Resend first (docs/growth/newsletter-setup.md).
      properties: { qualification: p.q, subjects: p.c.join(',') },
    }, ctx.fetchImpl ?? fetch);
  } catch {
    return redirect('/subscribe/error/');
  }
  // A short "you're subscribed" note carrying this person's own unsubscribe
  // link. Best effort: the subscription already succeeded, so a failure here
  // does not turn it into an error.
  try {
    const unsub = await signToken({ e: p.e, exp: Date.now() + UNSUB_TTL_MS }, env.SUBSCRIBE_SIGNING_SECRET!);
    const unsubUrl = `${SITE_ORIGIN}/api/subscribe/unsubscribe?t=${encodeURIComponent(unsub)}`;
    await sendEmail(env.RESEND_API_KEY!, {
      to: [p.e],
      subject: 'You are subscribed to Marlbridge revision emails',
      text: [
        'Thank you for confirming. You will receive occasional practice questions, explanations and links to free resources.',
        '',
        `Unsubscribe at any time: ${unsubUrl}`,
        '',
        'Marlbridge — marlbridge.com',
      ].join('\n'),
      headers: { 'List-Unsubscribe': `<${unsubUrl}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' },
    }, ctx.fetchImpl ?? fetch);
  } catch { /* see comment above */ }
  return redirect('/subscribe/confirmed/?s=1');
}

export async function onUnsubscribe(ctx: { request: Request; env: SubscribeEnv; fetchImpl?: typeof fetch }): Promise<Response> {
  const { request, env } = ctx;
  if (!env.RESEND_CONTACTS_API_KEY || !env.SUBSCRIBE_SIGNING_SECRET) return redirect('/subscribe/error/');
  const t = new URL(request.url).searchParams.get('t') ?? '';
  const p = await verifyToken<{ e: string; exp: number }>(t, env.SUBSCRIBE_SIGNING_SECRET);
  if (!p) return redirect('/subscribe/error/?reason=link');
  try {
    await unsubscribeContact(env.RESEND_CONTACTS_API_KEY, p.e, ctx.fetchImpl ?? fetch);
  } catch {
    return redirect('/subscribe/error/');
  }
  return request.method === 'POST' ? new Response(null, { status: 204 }) : redirect('/subscribe/unsubscribed/');
}
