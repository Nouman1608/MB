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

const OLD_SLUG = ['cambridge-igcse-mathematics-0580-introduction-to-algebra', 'cambridge', 'igcse', 'maths'].join('-');

test('a renamed resource slug 301s to its new URL, keeping the query string', async () => {
  const { env, calls } = makeEnv();
  const res = await worker.fetch(
    new Request(`https://marlbridge.com/resources/${OLD_SLUG}/?x=1`), // built from parts so slug rewrites do not touch it
    env,
  );
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), 'https://marlbridge.com/resources/cambridge-igcse-mathematics-0580-introduction-to-algebra/?x=1');
  assert.equal(calls.length, 0);
});

test('a current resource slug is not redirected', async () => {
  const { env, calls } = makeEnv();
  const res = await worker.fetch(new Request('https://marlbridge.com/resources/cambridge-igcse-mathematics-0580-introduction-to-algebra/'), env);
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1);
});

// Audit round 3 (item 48): an old slug on the www host used to take two hops
// (www -> apex old slug -> apex new slug). It now goes straight to the new slug.
test('an old resource slug on www 301s once to the new slug on the apex', async () => {
  const { env, calls } = makeEnv();
  const res = await worker.fetch(new Request(`https://www.marlbridge.com/resources/${OLD_SLUG}/?x=1`), env);
  assert.equal(res.status, 301);
  const location = res.headers.get('location');
  assert.equal(location, 'https://marlbridge.com/resources/cambridge-igcse-mathematics-0580-introduction-to-algebra/?x=1');
  assert.equal(calls.length, 0);
  const second = await worker.fetch(new Request(location), env);
  assert.equal(second.status, 200, 'the new URL must not redirect again');
});

test('an old resource slug without the trailing slash 301s to the new slug with it', async () => {
  const { env } = makeEnv();
  const old = ['ib', 'ib-dp-biology', 'dp-biology', 'ib-dp-biology-1-a1-1'].join('-');
  const res = await worker.fetch(new Request(`https://marlbridge.com/resources/${old}`), env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), 'https://marlbridge.com/resources/ib-dp-biology-1-a1-1/');
});

test('a non-GET request to an old slug on www still only changes the host', async () => {
  const { env } = makeEnv();
  const res = await worker.fetch(new Request(`https://www.marlbridge.com/resources/${OLD_SLUG}/`, { method: 'POST' }), env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), `https://marlbridge.com/resources/${OLD_SLUG}/`);
});
