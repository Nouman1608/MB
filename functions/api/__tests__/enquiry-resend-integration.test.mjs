// Integration test for the actual Cloudflare Pages Function
// (functions/api/enquiry.ts), not just the pure validation module.
// Exercises the real onRequestPost handler end-to-end with a mocked
// global fetch (covers both the Turnstile siteverify call and the
// Resend API call), so the Resend wiring added in MARLBRIDGE v1.x WS1
// is proven correct without ever hitting a real network or a real key.
//
// Run with:
//   node --experimental-strip-types --test functions/api/__tests__/enquiry-resend-integration.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost } from '../enquiry.ts';

const ORIGIN = 'https://marlbridge.com';

function makeRequest(fields, headers = {}) {
  const form = new FormData();
  for (const [k, v] of Object.entries(fields)) form.set(k, v);
  return new Request('https://marlbridge.com/api/enquiry', {
    method: 'POST',
    body: form,
    headers: { Origin: ORIGIN, 'CF-Connecting-IP': '203.0.113.7', ...headers },
  });
}

function validStudentFields(extra = {}) {
  return {
    website: '', // honeypot, left empty by a real visitor
    enquiryKind: 'student',
    name: 'Amina Test',
    email: 'amina@example.com',
    country: 'Pakistan',
    message: 'Interested in IGCSE Chemistry tuition.',
    ...extra,
  };
}

// Installs a fetch mock for the duration of one test, then restores the
// original global.fetch — never leaks a mock into another test file.
function withMockFetch(handler, fn) {
  return async () => {
    const original = globalThis.fetch;
    const calls = [];
    globalThis.fetch = async (url, init) => {
      calls.push({ url: String(url), init });
      return handler(String(url), init);
    };
    try {
      await fn(calls);
    } finally {
      globalThis.fetch = original;
    }
  };
}

test(
  'onRequestPost sends via Resend with correct from/to/reply-to when RESEND_API_KEY is set',
  withMockFetch(
    (url) => {
      if (url === 'https://api.resend.com/emails') {
        return new Response(JSON.stringify({ id: 'mock-id' }), { status: 200 });
      }
      throw new Error(`Unexpected fetch to ${url}`);
    },
    async (calls) => {
      const request = makeRequest(validStudentFields());
      const env = { RESEND_API_KEY: 'test-key-not-real' };
      const response = await onRequestPost({ request, env });
      const json = await response.json();

      assert.equal(response.status, 200);
      assert.equal(json.ok, true);

      const resendCall = calls.find((c) => c.url === 'https://api.resend.com/emails');
      assert.ok(resendCall, 'expected a call to the Resend API');
      assert.equal(resendCall.init.headers.Authorization, 'Bearer test-key-not-real');
      const body = JSON.parse(resendCall.init.body);
      assert.equal(body.from, 'Marlbridge <hello@marlbridge.com>');
      assert.deepEqual(body.to, ['noumanahmed1989@gmail.com']);
      assert.equal(body.reply_to, 'amina@example.com');
      assert.match(body.subject, /Amina Test/);
      assert.match(body.text, /Interested in IGCSE Chemistry tuition/);
    },
  ),
);

test('onRequestPost returns an honest 503 when RESEND_API_KEY is missing (never a false success)', async () => {
  const request = makeRequest(validStudentFields());
  const response = await onRequestPost({ request, env: {} });
  const json = await response.json();
  assert.equal(response.status, 503);
  assert.equal(json.ok, false);
  assert.match(json.message, /not connected yet/);
});

test(
  'onRequestPost returns 502 (not a false success) when Resend responds with an error',
  withMockFetch(
    () => new Response('rate limited', { status: 429 }),
    async () => {
      const request = makeRequest(validStudentFields());
      const response = await onRequestPost({ request, env: { RESEND_API_KEY: 'test-key' } });
      const json = await response.json();
      assert.equal(response.status, 502);
      assert.equal(json.ok, false);
    },
  ),
);

test(
  'onRequestPost verifies Turnstile server-side before attempting Resend when TURNSTILE_SECRET_KEY is set',
  withMockFetch(
    (url) => {
      if (url === 'https://challenges.cloudflare.com/turnstile/v0/siteverify') {
        return new Response(JSON.stringify({ success: false }), { status: 200 });
      }
      throw new Error(`Unexpected fetch to ${url} — Resend should not be called when Turnstile fails`);
    },
    async () => {
      const request = makeRequest(validStudentFields({ 'cf-turnstile-response': 'bad-token' }));
      const env = { RESEND_API_KEY: 'test-key', TURNSTILE_SECRET_KEY: 'test-secret' };
      const response = await onRequestPost({ request, env });
      const json = await response.json();
      assert.equal(response.status, 400);
      assert.equal(json.ok, false);
      assert.match(json.message, /Verification failed/);
    },
  ),
);

test(
  'onRequestPost succeeds when Turnstile verification passes',
  withMockFetch(
    (url) => {
      if (url === 'https://challenges.cloudflare.com/turnstile/v0/siteverify') {
        return new Response(JSON.stringify({ success: true }), { status: 200 });
      }
      if (url === 'https://api.resend.com/emails') {
        return new Response(JSON.stringify({ id: 'mock-id' }), { status: 200 });
      }
      throw new Error(`Unexpected fetch to ${url}`);
    },
    async () => {
      const request = makeRequest(validStudentFields({ 'cf-turnstile-response': 'good-token' }));
      const env = { RESEND_API_KEY: 'test-key', TURNSTILE_SECRET_KEY: 'test-secret' };
      const response = await onRequestPost({ request, env });
      const json = await response.json();
      assert.equal(response.status, 200);
      assert.equal(json.ok, true);
    },
  ),
);

test('onRequestPost rejects cross-origin submissions before ever calling Resend', async () => {
  const request = makeRequest(validStudentFields(), { Origin: 'https://evil.example' });
  const response = await onRequestPost({ request, env: { RESEND_API_KEY: 'test-key' } });
  const json = await response.json();
  assert.equal(response.status, 403);
  assert.equal(json.ok, false);
});

test('onRequestPost honeypot trip returns fake success without calling Resend', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async (url) => {
    throw new Error(`Should never call fetch (${url}) when honeypot is tripped`);
  };
  try {
    const request = makeRequest(validStudentFields({ website: 'http://spambot.example' }));
    const response = await onRequestPost({ request, env: { RESEND_API_KEY: 'test-key' } });
    const json = await response.json();
    assert.equal(response.status, 200);
    assert.equal(json.ok, true);
  } finally {
    globalThis.fetch = original;
  }
});
