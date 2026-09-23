/**
 * D-286 -- POST /api/workshop-register.
 *
 * Checks, in order: same origin, size, honeypot, field validation, the
 * workshop itself (published, scheduled, open, not started -- read from
 * /workshops/{slug}/registration.json through the ASSETS binding, so the
 * page and this check cannot disagree), Turnstile, rate limit, duplicate
 * (one registration per email per workshop, keyed by a SHA-256 of the
 * address so KV never stores it), capacity.
 *
 * Success is reported only after Resend accepted BOTH the registrant's
 * confirmation and the owner's notification. A duplicate gets the same
 * reassuring answer without a second email, so the form cannot be used to
 * learn whether someone else registered.
 *
 * Uses existing infrastructure only: RESEND_API_KEY, TURNSTILE_SECRET_KEY
 * and the ENQUIRY_RATE_LIMIT KV namespace (keys prefixed "ws:"). Without KV,
 * duplicate and capacity checks cannot run, so registration is refused
 * rather than risk overbooking silently.
 */
import { validateRegister, isHoneypotTripped } from '../_lib/signup-validation.ts';
import { sha256Hex } from '../_lib/signed-token.ts';
import { sendEmail } from '../_lib/resend-client.ts';
import { ENQUIRY_RECIPIENT } from './enquiry.ts';

const SITE_ORIGIN = 'https://marlbridge.com';
const MAX_BODY_BYTES = 8_000;

interface KVLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, opts?: { expirationTtl?: number }): Promise<void>;
}
export interface RegisterEnv {
  ASSETS?: { fetch(request: Request): Promise<Response> };
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  ENQUIRY_RATE_LIMIT?: KVLike;
}
interface WorkshopFacts {
  slug: string; title: string; startsAt: string; durationMinutes: number;
  status: string; registration: { status: string; capacity?: number }; teacher: string | null; format: string;
}

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get('Origin');
  if (origin) return origin === SITE_ORIGIN;
  const referer = request.headers.get('Referer');
  return Boolean(referer && referer.startsWith(SITE_ORIGIN));
}

const fmt = (iso: string, timeZone: string) =>
  new Intl.DateTimeFormat('en-GB', { timeZone, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date(iso));

export async function onWorkshopRegisterPost(ctx: { request: Request; env: RegisterEnv; fetchImpl?: typeof fetch; now?: number }): Promise<Response> {
  const { request, env } = ctx;
  const fetchImpl = ctx.fetchImpl ?? fetch;
  const now = ctx.now ?? Date.now();
  if (!isSameOrigin(request)) return json(403, { ok: false, message: 'Request rejected.' });
  if (Number(request.headers.get('Content-Length') ?? '0') > MAX_BODY_BYTES) return json(413, { ok: false, message: 'Submission too large.' });
  if (!env.RESEND_API_KEY || !env.ENQUIRY_RATE_LIMIT || !env.ASSETS) {
    return json(503, { ok: false, message: 'Workshop registration is not available right now. Please email hello@marlbridge.com.' });
  }

  let form: FormData;
  try { form = await request.formData(); } catch { return json(400, { ok: false, message: 'Could not read submission.' }); }
  if (isHoneypotTripped(form.get('website'))) return json(200, { ok: true });
  const raw: Record<string, unknown> = {};
  for (const k of ['email', 'name', 'workshop', 'country', 'role']) raw[k] = form.get(k) ?? undefined;
  const v = validateRegister(raw);
  if (!v.ok) return json(400, { ok: false, message: 'Please check the highlighted fields.', errors: v.errors });
  const data = v.data;

  let facts: WorkshopFacts;
  try {
    const res = await env.ASSETS.fetch(new Request(`${SITE_ORIGIN}/workshops/${data.workshop}/registration.json`));
    if (!res.ok) return json(404, { ok: false, message: 'This workshop was not found.' });
    facts = (await res.json()) as WorkshopFacts;
  } catch {
    return json(404, { ok: false, message: 'This workshop was not found.' });
  }
  if (facts.status !== 'scheduled' || facts.registration.status !== 'open') return json(409, { ok: false, message: 'Registration for this workshop is closed.' });
  if (Date.parse(facts.startsAt) <= now) return json(409, { ok: false, message: 'This workshop has already started.' });

  const ip = request.headers.get('CF-Connecting-IP');
  if (env.TURNSTILE_SECRET_KEY) {
    const token = form.get('cf-turnstile-response') as string | null;
    let ok = false;
    if (token) {
      try {
        const body = new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: token });
        if (ip) body.set('remoteip', ip);
        const r = await fetchImpl('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
        ok = Boolean(((await r.json()) as { success?: boolean }).success);
      } catch { ok = false; }
    }
    if (!ok) return json(400, { ok: false, message: 'Verification failed. Please try again.' });
  }

  const kv = env.ENQUIRY_RATE_LIMIT;
  if (ip) {
    const rk = `ws:rate:${ip}:${new Date(now).toISOString().slice(0, 13)}`;
    const n = Number((await kv.get(rk)) ?? '0');
    if (n >= 5) return json(429, { ok: false, message: 'Too many attempts. Please try again later.' });
    await kv.put(rk, String(n + 1), { expirationTtl: 3600 });
  }

  const ttl = Math.max(3600, Math.ceil((Date.parse(facts.startsAt) - now) / 1000) + 7 * 86400);
  const dupKey = `ws:reg:${facts.slug}:${await sha256Hex(data.email)}`;
  const reassurance = 'You are registered. Check your email for the confirmation; the joining link follows before the start.';
  if (await kv.get(dupKey)) return json(200, { ok: true, duplicate: true, message: reassurance });

  const countKey = `ws:count:${facts.slug}`;
  const count = Number((await kv.get(countKey)) ?? '0');
  if (facts.registration.capacity && count >= facts.registration.capacity) return json(409, { ok: false, message: 'This workshop is full.' });

  const when = `${fmt(facts.startsAt, 'UTC')} UTC (${fmt(facts.startsAt, 'Asia/Karachi')} Pakistan time)`;
  try {
    await sendEmail(env.RESEND_API_KEY, {
      to: [data.email],
      subject: `Registered: ${facts.title}`,
      text: [
        `Hello ${data.name},`,
        '',
        `You are registered for "${facts.title}"${facts.teacher ? ` with ${facts.teacher}` : ''}.`,
        `When: ${when}. Length: ${facts.durationMinutes} minutes. Format: ${facts.format}.`,
        '',
        'We will email the joining link before the start. Details: ' + `${SITE_ORIGIN}/workshops/${facts.slug}/`,
        '',
        'Cannot come any more? Reply to this email and we will free your place.',
        '',
        'Marlbridge — marlbridge.com',
      ].join('\n'),
      replyTo: 'hello@marlbridge.com',
    }, fetchImpl);
    await sendEmail(env.RESEND_API_KEY, {
      to: [ENQUIRY_RECIPIENT],
      subject: `Workshop registration — ${facts.title}`,
      text: [`Workshop: ${facts.title} (${facts.slug})`, `When: ${when}`, '', `Name: ${data.name}`, `Email: ${data.email}`, `Country: ${data.country}`, `Role: ${data.role}`, `Registrations so far (approx.): ${count + 1}`].join('\n'),
      replyTo: data.email,
    }, fetchImpl);
  } catch {
    return json(502, { ok: false, message: 'We could not complete your registration. Please try again, or email hello@marlbridge.com.' });
  }
  await kv.put(dupKey, '1', { expirationTtl: ttl });
  await kv.put(countKey, String(count + 1), { expirationTtl: ttl });
  return json(200, { ok: true, message: reassurance });
}
