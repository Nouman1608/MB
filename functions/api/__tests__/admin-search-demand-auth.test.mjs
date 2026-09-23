// D-295 -- /api/admin/search-demand must fail closed without the owner's
// ADMIN_API_KEY secret and must reject a missing or wrong key.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestGet, onRequestPost } from '../admin/search-demand.ts';

const KEY = 'test-admin-key-0123456789abcdef';
const req = (headers = {}, method = 'GET') =>
  new Request('https://marlbridge.com/api/admin/search-demand', { method, headers });

test('GET returns 503 when ADMIN_API_KEY is not set, even with a header', async () => {
  const res = await onRequestGet({ env: {}, request: req({ Authorization: `Bearer ${KEY}` }) });
  assert.equal(res.status, 503);
});

test('GET returns 503 when ADMIN_API_KEY is too short to be safe', async () => {
  const res = await onRequestGet({ env: { ADMIN_API_KEY: 'short' }, request: req({ Authorization: 'Bearer short' }) });
  assert.equal(res.status, 503);
});

test('GET returns 401 with no key and with a wrong key', async () => {
  const env = { ADMIN_API_KEY: KEY };
  assert.equal((await onRequestGet({ env, request: req() })).status, 401);
  assert.equal((await onRequestGet({ env, request: req({ Authorization: 'Bearer wrong-key-wrong-key-wrong' }) })).status, 401);
  assert.equal((await onRequestGet({ env, request: req({ Authorization: KEY }) })).status, 401);
});

test('GET with the right key reaches the handler (503 for missing DB, not 401)', async () => {
  const res = await onRequestGet({ env: { ADMIN_API_KEY: KEY }, request: req({ Authorization: `Bearer ${KEY}` }) });
  assert.equal(res.status, 503);
  const body = await res.json();
  assert.match(body.message, /DB/);
});

test('POST (Google refresh) is refused without the key and never runs', async () => {
  const res = await onRequestPost({ env: { ADMIN_API_KEY: KEY }, request: req({}, 'POST') });
  assert.equal(res.status, 401);
});
