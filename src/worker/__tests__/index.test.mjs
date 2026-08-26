// v1.x CLOSURE WS3 -- plain Node test for the Worker's own routing, no
// wrangler/Miniflare runtime required, matching the existing convention in
// functions/api/__tests__/*.test.mjs. Run with:
// node --experimental-strip-types --test src/worker/__tests__/index.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import worker from '../index.ts';

/** A minimal stub of the ASSETS binding that records whether it was called
 * and with what request, and returns a distinguishable marker response so
 * tests can tell "the worker delegated to assets" apart from "the worker
 * returned its own response" without a real asset store. */
function makeEnv() {
  const calls = [];
  return {
    calls,
    env: {
      ASSETS: {
        async fetch(request) {
          calls.push(request);
          return new Response('stub-asset-body', { status: 200 });
        },
      },
    },
  };
}

test('www.marlbridge.com root redirects once to the apex root, 301', async () => {
  const { env, calls } = makeEnv();
  const res = await worker.fetch(new Request('https://www.marlbridge.com/'), env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), 'https://marlbridge.com/');
  assert.equal(calls.length, 0, 'must not touch the asset binding for a www request');
});

test('www.marlbridge.com preserves path and query string in the redirect', async () => {
  const { env } = makeEnv();
  const res = await worker.fetch(
    new Request('https://www.marlbridge.com/resources/a-arenes-and-halogenoarenes/?utm_source=test&x=1'),
    env,
  );
  assert.equal(res.status, 301);
  assert.equal(
    res.headers.get('location'),
    'https://marlbridge.com/resources/a-arenes-and-halogenoarenes/?utm_source=test&x=1',
  );
});

test('www.marlbridge.com pricing path redirects to the apex equivalent', async () => {
  const { env } = makeEnv();
  const res = await worker.fetch(new Request('https://www.marlbridge.com/pricing/'), env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), 'https://marlbridge.com/pricing/');
});

test('a single hop: redirecting the Location header again does not redirect further', async () => {
  const { env } = makeEnv();
  const first = await worker.fetch(new Request('https://www.marlbridge.com/pricing/'), env);
  const location = first.headers.get('location');
  const second = await worker.fetch(new Request(location), env);
  assert.notEqual(second.status, 301, 'the apex URL the redirect points at must not itself redirect (no loop)');
});

test('the bare apex domain is never redirected and falls through to assets', async () => {
  const { env, calls } = makeEnv();
  const res = await worker.fetch(new Request('https://marlbridge.com/'), env);
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1, 'apex requests must reach the asset binding');
});

test('a www request never reaches the assets binding', async () => {
  const { env, calls } = makeEnv();
  await worker.fetch(new Request('https://www.marlbridge.com/authors/iftikhar-azeemi/'), env);
  assert.equal(calls.length, 0);
});

test('/api/enquiry on the apex domain still routes to the enquiry handler, not assets', async () => {
  const { env, calls } = makeEnv();
  const res = await worker.fetch(new Request('https://marlbridge.com/api/enquiry', { method: 'GET' }), env);
  assert.equal(calls.length, 0, '/api/enquiry must not fall through to the asset binding');
  assert.ok(res.status === 200 || res.status === 405, 'enquiry GET handler responded (exact status covered by its own tests)');
});

test('an unrelated host (e.g. a preview/staging domain) is left untouched, not redirected', async () => {
  const { env, calls } = makeEnv();
  const res = await worker.fetch(new Request('https://mb-preview.pages.dev/'), env);
  assert.notEqual(res.status, 301, 'only the literal www.marlbridge.com host should ever be redirected');
  assert.equal(calls.length, 1);
});
