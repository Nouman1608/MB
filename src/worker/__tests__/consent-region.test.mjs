// D-280 -- run with:
// node --experimental-strip-types --test src/worker/__tests__/consent-region.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { consentRegionFor, applyConsentRegion, OPT_IN_COUNTRIES } from '../consent-region.ts';

test('UK, EEA and Switzerland get the banner (opt-in)', () => {
  for (const cc of ['GB', 'DE', 'FR', 'IE', 'IT', 'NO', 'IS', 'CH', 'JE']) {
    assert.equal(consentRegionFor(cc), 'optin', cc);
  }
});

test('Pakistan, the Gulf and the rest of the world get analytics by default', () => {
  for (const cc of ['PK', 'IN', 'US', 'MY', 'KE', 'SA', 'AE', 'QA', 'BH', 'OM', 'KW', 'pk']) {
    assert.equal(consentRegionFor(cc), 'optout', cc);
  }
});

test('unknown, missing, Tor and malformed countries fall back to the banner', () => {
  for (const cc of [undefined, null, '', 'XX', 'T1', 'GBR', '1A']) {
    assert.equal(consentRegionFor(cc), 'optin', String(cc));
  }
});

test('all 27 EU states are in the list', () => {
  const eu = ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE'];
  for (const cc of eu) assert.ok(OPT_IN_COUNTRIES.has(cc), cc);
});

test('non-HTML responses are returned untouched', () => {
  const req = new Request('https://marlbridge.com/robots.txt');
  Object.defineProperty(req, 'cf', { value: { country: 'PK' } });
  const res = new Response('User-agent: *', { headers: { 'content-type': 'text/plain' } });
  assert.equal(applyConsentRegion(req, res), res);
});

test('HTML for a UK visitor is returned untouched', () => {
  const req = new Request('https://marlbridge.com/');
  Object.defineProperty(req, 'cf', { value: { country: 'GB' } });
  const res = new Response('<html></html>', { headers: { 'content-type': 'text/html' } });
  assert.equal(applyConsentRegion(req, res), res);
});

test('HTML for a Pakistan visitor goes through HTMLRewriter and sets the marker', () => {
  const seen = [];
  globalThis.HTMLRewriter = class {
    on(selector, handlers) { seen.push(selector); this.h = handlers; return this; }
    transform(response) {
      const attrs = {};
      this.h.element({ setAttribute: (k, v) => { attrs[k] = v; } });
      seen.push(attrs);
      return response;
    }
  };
  try {
    const req = new Request('https://marlbridge.com/');
    Object.defineProperty(req, 'cf', { value: { country: 'PK' } });
    const res = new Response('<html></html>', { headers: { 'content-type': 'text/html; charset=utf-8' } });
    applyConsentRegion(req, res);
    assert.deepEqual(seen, ['html', { 'data-mb-consent-region': 'optout' }]);
  } finally {
    delete globalThis.HTMLRewriter;
  }
});

// D-349 (audit R-06) -- the rewritten page keeps a (region-specific) ETag,
// and a repeat request with that tag gets a 304.
import { optoutEtag, ifNoneMatchHits } from '../consent-region.ts';

test('optout ETag is weak and derived from the asset tag', () => {
  assert.equal(optoutEtag('"abc123"'), 'W/"abc123-optout"');
  assert.equal(optoutEtag('W/"abc123"'), 'W/"abc123-optout"');
});

test('If-None-Match uses weak comparison and accepts lists and *', () => {
  const tag = 'W/"abc-optout"';
  assert.equal(ifNoneMatchHits(null, tag), false);
  assert.equal(ifNoneMatchHits('"abc-optout"', tag), true);
  assert.equal(ifNoneMatchHits('"x", W/"abc-optout"', tag), true);
  assert.equal(ifNoneMatchHits('"abc"', tag), false);
  assert.equal(ifNoneMatchHits('*', tag), true);
});

test('Pakistan visitor: rewritten HTML carries the optout ETag; a matching If-None-Match gets 304', () => {
  globalThis.HTMLRewriter = class {
    on() { return this; }
    transform(response) { return new Response(response.body, response); }
  };
  try {
    const first = new Request('https://marlbridge.com/trial/');
    Object.defineProperty(first, 'cf', { value: { country: 'PK' } });
    const asset = () => new Response('<html></html>', { status: 200, headers: { 'content-type': 'text/html', etag: '"abc"' } });
    const r1 = applyConsentRegion(first, asset());
    assert.equal(r1.status, 200);
    assert.equal(r1.headers.get('etag'), 'W/"abc-optout"');

    const second = new Request('https://marlbridge.com/trial/', { headers: { 'if-none-match': r1.headers.get('etag') } });
    Object.defineProperty(second, 'cf', { value: { country: 'PK' } });
    const r2 = applyConsentRegion(second, asset());
    assert.equal(r2.status, 304);
    assert.equal(r2.headers.get('etag'), 'W/"abc-optout"');

    const changed = new Request('https://marlbridge.com/trial/', { headers: { 'if-none-match': 'W/"old-optout"' } });
    Object.defineProperty(changed, 'cf', { value: { country: 'PK' } });
    assert.equal(applyConsentRegion(changed, asset()).status, 200);
  } finally {
    delete globalThis.HTMLRewriter;
  }
});
