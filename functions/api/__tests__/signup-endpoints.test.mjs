// D-286 -- tests for the newsletter (double opt-in) and workshop
// registration endpoints, with a mocked fetch and an in-memory KV.
// Run: node --experimental-strip-types --test functions/api/__tests__/signup-endpoints.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { onSubscribePost, onSubscribeConfirm, onUnsubscribe } from '../subscribe.ts';
import { onWorkshopRegisterPost } from '../workshop-register.ts';
import { validateSubscribe, validateRegister } from '../../_lib/signup-validation.ts';
import { signToken, verifyToken } from '../../_lib/signed-token.ts';

const ORIGIN = 'https://marlbridge.com';
const kv = () => { const m = new Map(); return { m, get: async (k) => m.get(k) ?? null, put: async (k, v) => { m.set(k, v); } }; };
const post = (path, fields, headers = {}) => {
  const f = new FormData();
  for (const [k, v] of Object.entries(fields)) (Array.isArray(v) ? v : [v]).forEach((x) => f.append(k, x));
  return new Request(`${ORIGIN}${path}`, { method: 'POST', body: f, headers: { Origin: ORIGIN, 'CF-Connecting-IP': '203.0.113.9', ...headers } });
};
const recorder = (status = 200) => {
  const calls = [];
  const fn = async (url, init) => { calls.push({ url: String(url), init, body: init?.body && typeof init.body === 'string' ? JSON.parse(init.body) : undefined }); return new Response(JSON.stringify({ id: 'x', success: true }), { status }); };
  return { calls, fn };
};
const fullEnv = (extra = {}) => ({ RESEND_API_KEY: 'k', RESEND_CONTACTS_API_KEY: 'c', SUBSCRIBE_SIGNING_SECRET: 's'.repeat(40), ENQUIRY_RATE_LIMIT: kv(), ...extra });

test('validateSubscribe: requires consent, qualification and a valid email; caps courses', () => {
  assert.equal(validateSubscribe({ email: 'a@b.co', qualification: 'igcse', consent: 'yes', courses: [] }).ok, true);
  const bad = validateSubscribe({ email: 'nope', qualification: 'x', consent: '', courses: Array(7).fill('cambridge/igcse/chemistry') });
  assert.equal(bad.ok, false);
  assert.ok(bad.errors.email && bad.errors.qualification && bad.errors.consent);
  assert.equal(validateSubscribe({ email: 'a@b.co', qualification: 'igcse', consent: 'yes', courses: ['<script>'] }).ok, false);
});

test('validateRegister: rejects unknown role and bad slug', () => {
  assert.equal(validateRegister({ email: 'a@b.co', name: 'A', workshop: 'good-slug', country: 'PK', role: 'student' }).ok, true);
  assert.equal(validateRegister({ email: 'a@b.co', name: 'A', workshop: '../x', country: 'PK', role: 'admin' }).ok, false);
});

test('tokens are encrypted, authentic and expire', async () => {
  const t = await signToken({ e: 'person@example.com', exp: Date.now() + 1000 }, 'secret-1');
  assert.ok(!t.includes('person'));
  assert.ok(!Buffer.from(t.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('latin1').includes('person@example.com'));
  assert.equal((await verifyToken(t, 'secret-1')).e, 'person@example.com');
  assert.equal(await verifyToken(t, 'secret-2'), null);
  assert.equal(await verifyToken(t, 'secret-1', Date.now() + 5000), null);
  assert.equal(await verifyToken(t.slice(0, -2) + 'AA', 'secret-1'), null);
});

test('subscribe: 503 (never a false success) until configured', async () => {
  const res = await onSubscribePost({ request: post('/api/subscribe', { email: 'a@b.co', qualification: 'igcse', consent: 'yes' }), env: {} });
  assert.equal(res.status, 503);
  assert.equal((await res.json()).ok, false);
});

test('subscribe: sends a confirmation email and reports pending, not subscribed', async () => {
  const r = recorder();
  const res = await onSubscribePost({ request: post('/api/subscribe', { email: 'A@B.co', qualification: 'igcse', consent: 'yes', courses: ['cambridge/igcse/chemistry'] }), env: fullEnv(), fetchImpl: r.fn });
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { ok: true, pending: true });
  assert.equal(r.calls.length, 1);
  assert.match(r.calls[0].url, /api\.resend\.com\/emails/);
  assert.deepEqual(r.calls[0].body.to, ['a@b.co']);
  assert.match(r.calls[0].body.text, /\/api\/subscribe\/confirm\?t=/);
  assert.ok(!r.calls[0].body.text.includes('a@b.co'), 'address is not readable in the link');
});

test('subscribe: missing consent is rejected with a field error', async () => {
  const res = await onSubscribePost({ request: post('/api/subscribe', { email: 'a@b.co', qualification: 'igcse' }), env: fullEnv(), fetchImpl: recorder().fn });
  assert.equal(res.status, 400);
  assert.ok((await res.json()).errors.consent);
});

test('subscribe: provider failure is reported, not hidden', async () => {
  const res = await onSubscribePost({ request: post('/api/subscribe', { email: 'a@b.co', qualification: 'igcse', consent: 'yes' }), env: fullEnv(), fetchImpl: recorder(500).fn });
  assert.equal(res.status, 502);
});

test('subscribe: cross-origin posts are refused', async () => {
  const res = await onSubscribePost({ request: post('/api/subscribe', { email: 'a@b.co', qualification: 'igcse', consent: 'yes' }, { Origin: 'https://evil.example' }), env: fullEnv(), fetchImpl: recorder().fn });
  assert.equal(res.status, 403);
});

test('confirm: adds the contact only with a valid token, then redirects to confirmed', async () => {
  const env = fullEnv();
  const t = await signToken({ e: 'a@b.co', q: 'igcse', c: ['cambridge/igcse/chemistry'], exp: Date.now() + 60000 }, env.SUBSCRIBE_SIGNING_SECRET);
  const r = recorder();
  const res = await onSubscribeConfirm({ request: new Request(`${ORIGIN}/api/subscribe/confirm?t=${t}`), env, fetchImpl: r.fn });
  assert.equal(res.status, 303);
  assert.equal(res.headers.get('Location'), `${ORIGIN}/subscribe/confirmed/?s=1`);
  const contact = r.calls.find((c) => c.url === 'https://api.resend.com/contacts');
  assert.equal(contact.body.email, 'a@b.co');
  assert.equal(contact.body.unsubscribed, false);
  assert.equal(contact.body.properties.subjects, 'cambridge/igcse/chemistry');
  assert.ok(r.calls.some((c) => /emails$/.test(c.url) && /unsubscribe\?t=/.test(c.body.text)), 'welcome email carries an unsubscribe link');

  const bad = await onSubscribeConfirm({ request: new Request(`${ORIGIN}/api/subscribe/confirm?t=garbage`), env, fetchImpl: r.fn });
  assert.match(bad.headers.get('Location'), /\/subscribe\/error\//);
});

test('confirm: when Resend rejects the contact the visitor sees the error page, not confirmed', async () => {
  const env = fullEnv();
  const t = await signToken({ e: 'a@b.co', q: 'igcse', c: [], exp: Date.now() + 60000 }, env.SUBSCRIBE_SIGNING_SECRET);
  const res = await onSubscribeConfirm({ request: new Request(`${ORIGIN}/api/subscribe/confirm?t=${t}`), env, fetchImpl: recorder(422).fn });
  assert.match(res.headers.get('Location'), /\/subscribe\/error\//);
});

test('unsubscribe: marks the contact unsubscribed', async () => {
  const env = fullEnv();
  const t = await signToken({ e: 'a@b.co', exp: Date.now() + 60000 }, env.SUBSCRIBE_SIGNING_SECRET);
  const r = recorder();
  const res = await onUnsubscribe({ request: new Request(`${ORIGIN}/api/subscribe/unsubscribe?t=${t}`), env, fetchImpl: r.fn });
  assert.equal(res.headers.get('Location'), `${ORIGIN}/subscribe/unsubscribed/`);
  assert.equal(r.calls[0].init.method, 'PATCH');
  assert.equal(r.calls[0].body.unsubscribed, true);
});

/* ---------- workshops ---------- */

const facts = (over = {}) => ({ slug: 'mole-workshop', title: 'Mole workshop', startsAt: '2030-01-01T15:00:00Z', durationMinutes: 60, status: 'scheduled', registration: { status: 'open', capacity: 2 }, teacher: 'Nouman Ahmed', format: 'Online', ...over });
const assets = (f) => ({ fetch: async (req) => (new URL(req.url).pathname === `/workshops/${f.slug}/registration.json` ? new Response(JSON.stringify(f)) : new Response('nf', { status: 404 })) });
const reg = (over = {}) => post('/api/workshop-register', { name: 'Sara', email: 'sara@example.com', country: 'UAE', role: 'student', workshop: 'mole-workshop', ...over });

test('workshop: registers, emails registrant and owner, then blocks the duplicate without re-sending', async () => {
  const env = { RESEND_API_KEY: 'k', ENQUIRY_RATE_LIMIT: kv(), ASSETS: assets(facts()) };
  const r = recorder();
  const res = await onWorkshopRegisterPost({ request: reg(), env, fetchImpl: r.fn, now: Date.parse('2029-12-01') });
  assert.equal(res.status, 200);
  assert.equal(r.calls.length, 2);
  assert.deepEqual(r.calls[0].body.to, ['sara@example.com']);
  assert.match(r.calls[0].body.text, /UTC/);
  assert.match(r.calls[0].body.text, /Pakistan time/);
  const again = await onWorkshopRegisterPost({ request: reg(), env, fetchImpl: r.fn, now: Date.parse('2029-12-01') });
  assert.equal(again.status, 200);
  assert.equal((await again.json()).duplicate, true);
  assert.equal(r.calls.length, 2, 'no second email');
  assert.ok([...env.ENQUIRY_RATE_LIMIT.m.keys()].every((k) => !k.includes('sara@')), 'KV never stores the address');
});

test('workshop: capacity, closed, started and unknown workshops are refused', async () => {
  const env = { RESEND_API_KEY: 'k', ENQUIRY_RATE_LIMIT: kv(), ASSETS: assets(facts({ registration: { status: 'open', capacity: 1 } })) };
  const now = Date.parse('2029-12-01');
  assert.equal((await onWorkshopRegisterPost({ request: reg(), env, fetchImpl: recorder().fn, now })).status, 200);
  assert.equal((await onWorkshopRegisterPost({ request: reg({ email: 'b@example.com' }), env, fetchImpl: recorder().fn, now })).status, 409);
  const closed = { RESEND_API_KEY: 'k', ENQUIRY_RATE_LIMIT: kv(), ASSETS: assets(facts({ registration: { status: 'closed' } })) };
  assert.equal((await onWorkshopRegisterPost({ request: reg(), env: closed, fetchImpl: recorder().fn, now })).status, 409);
  const started = { RESEND_API_KEY: 'k', ENQUIRY_RATE_LIMIT: kv(), ASSETS: assets(facts()) };
  assert.equal((await onWorkshopRegisterPost({ request: reg(), env: started, fetchImpl: recorder().fn, now: Date.parse('2031-01-01') })).status, 409);
  assert.equal((await onWorkshopRegisterPost({ request: reg({ workshop: 'no-such-thing' }), env: started, fetchImpl: recorder().fn, now })).status, 404);
});

test('workshop: email failure is reported and does not mark the person registered', async () => {
  const env = { RESEND_API_KEY: 'k', ENQUIRY_RATE_LIMIT: kv(), ASSETS: assets(facts()) };
  const res = await onWorkshopRegisterPost({ request: reg(), env, fetchImpl: recorder(500).fn, now: Date.parse('2029-12-01') });
  assert.equal(res.status, 502);
  assert.equal([...env.ENQUIRY_RATE_LIMIT.m.keys()].filter((k) => k.startsWith('ws:reg:')).length, 0);
});

test('workshop: refuses rather than overbooks when KV is missing', async () => {
  const res = await onWorkshopRegisterPost({ request: reg(), env: { RESEND_API_KEY: 'k', ASSETS: assets(facts()) }, fetchImpl: recorder().fn });
  assert.equal(res.status, 503);
});
