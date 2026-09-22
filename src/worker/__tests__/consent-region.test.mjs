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
