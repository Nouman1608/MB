// functions/_lib/__tests__/gsc-refresh.test.mjs
//
// Integration test for runGscRefresh() (functions/_lib/gsc-refresh.ts),
// following the same pattern as
// functions/api/__tests__/enquiry-resend-integration.test.mjs: mock
// global.fetch (covers both the OAuth token exchange and every
// searchAnalytics.query call) and a minimal in-memory D1Database, so the
// real orchestration logic -- looping dates/dimensions, building D1
// statements, chunking batches, writing the refresh log -- is proven
// correct without ever hitting Google or a real database.
//
// Run with:
//   node --experimental-strip-types --test functions/_lib/__tests__/gsc-refresh.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runGscRefresh } from '../gsc-refresh.ts';

const FAKE_KEY = {
  client_email: 'test@example.iam.gserviceaccount.com',
  // Not a real key -- getAccessToken() is never reached with a real
  // signature in this test because fetch is mocked before any network
  // call happens; only well-formed JSON is required at this layer, and
  // crypto.subtle.importKey does need a structurally valid PKCS8 PEM, so a
  // real (test-only, throwaway) 2048-bit key is generated at module load
  // below rather than hand-typing one.
};

function withMockFetch(handler, fn) {
  return async (...args) => {
    const original = global.fetch;
    global.fetch = handler;
    try {
      return await fn(...args);
    } finally {
      global.fetch = original;
    }
  };
}

// Minimal in-memory D1Database: prepare().bind() returns a statement
// object the fake batch() can execute against an in-memory row store.
function makeFakeDb() {
  const tables = { gsc_snapshots: [], gsc_refresh_log: [] };

  function prepare(sql) {
    return {
      _sql: sql,
      bind(...values) {
        return { sql, values };
      },
    };
  }

  async function batch(statements) {
    for (const stmt of statements) {
      if (stmt.sql.includes('INSERT OR REPLACE INTO gsc_snapshots')) {
        const [date, dimension, key, clicks, impressions, ctr, position, fetched_at] = stmt.values;
        const existingIdx = tables.gsc_snapshots.findIndex(
          (r) => r.date === date && r.dimension === dimension && r.key === key,
        );
        const row = { date, dimension, key, clicks, impressions, ctr, position, fetched_at };
        if (existingIdx >= 0) tables.gsc_snapshots[existingIdx] = row;
        else tables.gsc_snapshots.push(row);
      } else if (stmt.sql.includes('INSERT INTO gsc_refresh_log')) {
        const [run_at, date_range_start, date_range_end, dimension, row_count, status, detail] = stmt.values;
        tables.gsc_refresh_log.push({ run_at, date_range_start, date_range_end, dimension, row_count, status, detail });
      }
    }
    return statements.map(() => ({ success: true }));
  }

  return { prepare, batch, _tables: tables };
}

// Generates a real (throwaway, test-only) PKCS8 private key so
// crypto.subtle.importKey inside getAccessToken() succeeds -- the mocked
// fetch below never actually verifies the signature (nothing does, in
// this test double), but the JWT-signing step still runs for real.
async function makeTestServiceAccountJson() {
  const keyPair = await crypto.subtle.generateKey(
    { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
    true,
    ['sign', 'verify'],
  );
  const pkcs8 = await crypto.subtle.exportKey('pkcs8', keyPair.privateKey);
  const b64 = Buffer.from(pkcs8).toString('base64');
  const pem = `-----BEGIN PRIVATE KEY-----\n${b64.match(/.{1,64}/g).join('\n')}\n-----END PRIVATE KEY-----\n`;
  return JSON.stringify({ client_email: FAKE_KEY.client_email, private_key: pem });
}

test('runGscRefresh: happy path writes snapshot rows and a refresh-log row per dimension', async () => {
  const serviceAccountJson = await makeTestServiceAccountJson();
  const db = makeFakeDb();

  let tokenCalls = 0;
  let queryCalls = 0;

  await withMockFetch(async (url, init) => {
    const u = String(url);
    if (u.includes('oauth2.googleapis.com/token')) {
      tokenCalls += 1;
      return new Response(JSON.stringify({ access_token: 'fake-token' }), { status: 200 });
    }
    if (u.includes('searchAnalytics/query')) {
      queryCalls += 1;
      const body = JSON.parse(init.body);
      // Return one row per call so we can assert exact counts below.
      return new Response(
        JSON.stringify({
          rows: [{ keys: [`sample-${body.dimensions[0]}-${body.startDate}`], clicks: 1, impressions: 2, ctr: 0.5, position: 10 }],
        }),
        { status: 200 },
      );
    }
    throw new Error(`Unexpected fetch in test: ${u}`);
  }, async () => {
    const result = await runGscRefresh({ GSC_SERVICE_ACCOUNT_JSON: serviceAccountJson, DB: db });

    assert.equal(result.ok, true);
    assert.equal(result.lookbackDays, 7);
    assert.equal(tokenCalls, 1, 'access token should be fetched exactly once per run, then reused');
    assert.equal(queryCalls, 14, '7 days x 2 dimensions = 14 searchAnalytics.query calls');
    assert.equal(db._tables.gsc_snapshots.length, 14, 'one row per day per dimension in this fixture');
    assert.equal(db._tables.gsc_refresh_log.length, 2, 'one refresh_log row per dimension per run');
    assert.ok(db._tables.gsc_refresh_log.every((r) => r.status === 'ok'));
  })();
});

test('runGscRefresh: missing DB binding fails fast without calling Google at all', async () => {
  let fetchCalled = false;
  await withMockFetch(async () => {
    fetchCalled = true;
    throw new Error('should not be called');
  }, async () => {
    const result = await runGscRefresh({ GSC_SERVICE_ACCOUNT_JSON: '{}' });
    assert.equal(result.ok, false);
    assert.match(result.message ?? '', /DB \(D1\) binding/);
  })();
  assert.equal(fetchCalled, false);
});

test('runGscRefresh: missing service-account secret fails fast', async () => {
  const db = makeFakeDb();
  const result = await runGscRefresh({ DB: db });
  assert.equal(result.ok, false);
  assert.match(result.message ?? '', /GSC_SERVICE_ACCOUNT_JSON/);
});

test('runGscRefresh: a per-day API failure is recorded, not thrown, and other days still succeed', async () => {
  const serviceAccountJson = await makeTestServiceAccountJson();
  const db = makeFakeDb();
  let call = 0;

  await withMockFetch(async (url, init) => {
    const u = String(url);
    if (u.includes('oauth2.googleapis.com/token')) {
      return new Response(JSON.stringify({ access_token: 'fake-token' }), { status: 200 });
    }
    if (u.includes('searchAnalytics/query')) {
      call += 1;
      if (call === 2) return new Response('server error', { status: 500 });
      return new Response(JSON.stringify({ rows: [] }), { status: 200 });
    }
    throw new Error(`Unexpected fetch in test: ${u}`);
  }, async () => {
    const result = await runGscRefresh({ GSC_SERVICE_ACCOUNT_JSON: serviceAccountJson, DB: db });
    assert.equal(result.ok, false, 'one failed day should mark the overall run as not fully ok');
    const withErrors = result.dimensions.find((d) => d.errors.length > 0);
    assert.ok(withErrors, 'the dimension containing the failed call should record an error');
    assert.equal(withErrors.daysFailed, 1);
  })();
});
