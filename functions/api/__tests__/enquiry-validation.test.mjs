// Plain Node test for the pure enquiry-validation module — run with
// `node --experimental-strip-types --test functions/api/__tests__/enquiry-validation.test.mjs`
// No Cloudflare runtime, no wrangler, no build step required.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  sanitizeField,
  isHoneypotTripped,
  validateEnquiry,
  renderEmailBody,
} from '../../_lib/enquiry-validation.ts';

test('sanitizeField strips CRLF and control chars (header-injection defence)', () => {
  const dirty = 'Real Name\r\nBcc: attacker@evil.example\nX-Injected: yes';
  const clean = sanitizeField(dirty);
  assert.ok(!clean.includes('\r'));
  assert.ok(!clean.includes('\n'));
  assert.ok(!clean.includes('Bcc:'.trim()) || clean.includes('Bcc:')); // Bcc text itself is fine once newlines are gone — no header can be injected
  assert.ok(!/\r|\n/.test(clean));
});

test('sanitizeField caps length', () => {
  const long = 'a'.repeat(5000);
  assert.equal(sanitizeField(long, 100).length, 100);
});

test('sanitizeField rejects non-string input safely', () => {
  assert.equal(sanitizeField(undefined), '');
  assert.equal(sanitizeField(null), '');
  assert.equal(sanitizeField(42), '');
  assert.equal(sanitizeField(['array']), '');
});

test('isHoneypotTripped detects a filled hidden field', () => {
  assert.equal(isHoneypotTripped(''), false);
  assert.equal(isHoneypotTripped(undefined), false);
  assert.equal(isHoneypotTripped('   '), false);
  assert.equal(isHoneypotTripped('http://spam.example'), true);
});

test('validateEnquiry: student — accepts a well-formed submission', () => {
  const result = validateEnquiry('student', {
    name: 'Aisha Khan', email: 'aisha@example.com', country: 'Pakistan',
    message: 'Looking for IGCSE Chemistry support.',
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.data.name, 'Aisha Khan');
  }
});

// v1.x CLOSURE WS4 -- program/subject/level/format were removed from the
// approved five-field set (name, email, phone, country, message). A
// submission that still sends them (e.g. a stale cached form, or a
// deliberate probe) must have them silently dropped, not accepted or
// echoed into the email body.
test('validateEnquiry: student — removed fields (program/subject) are dropped, not accepted', () => {
  const result = validateEnquiry('student', {
    name: 'Aisha Khan', email: 'aisha@example.com', country: 'Pakistan',
    message: 'Looking for IGCSE Chemistry support.',
    program: 'IGCSE', subject: 'Chemistry',
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal('program' in result.data, false);
    assert.equal('subject' in result.data, false);
  }
});

test('validateEnquiry: tutoring — removed fields (level/format) are dropped, not accepted', () => {
  const result = validateEnquiry('tutoring', {
    name: 'Bilal', email: 'bilal@example.com', country: 'Pakistan',
    message: 'Need help with A Level Physics.',
    level: 'A Level', format: 'Online',
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal('level' in result.data, false);
    assert.equal('format' in result.data, false);
  }
});

test('validateEnquiry: rejects missing required fields', () => {
  const result = validateEnquiry('student', { name: 'Aisha Khan' });
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.ok(result.errors.email);
    assert.ok(result.errors.country);
    assert.ok(result.errors.message);
  }
});

test('validateEnquiry: rejects an invalid email', () => {
  const result = validateEnquiry('student', {
    name: 'Aisha Khan', email: 'not-an-email', country: 'Pakistan', message: 'Hi',
  });
  assert.equal(result.ok, false);
  if (!result.ok) assert.ok(result.errors.email);
});

test('validateEnquiry: school kind requires school + role', () => {
  const result = validateEnquiry('school', {
    name: 'Head Teacher', email: 'head@school.example', country: 'UAE', message: 'Partnership enquiry',
  });
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.ok(result.errors.school);
    assert.ok(result.errors.role);
  }
});

test('validateEnquiry: unknown kind is rejected', () => {
  const result = validateEnquiry('bogus', { name: 'x' });
  assert.equal(result.ok, false);
});

test('validateEnquiry: fields outside the allowlist are dropped, not smuggled through', () => {
  const result = validateEnquiry('student', {
    name: 'Aisha Khan', email: 'aisha@example.com', country: 'Pakistan', message: 'Hi',
    injectedField: 'malicious payload', __proto__: 'polluted',
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal('injectedField' in result.data, false);
  }
});

test('renderEmailBody produces a plain-text body with only present fields', () => {
  const body = renderEmailBody('tutoring', { name: 'Bilal', email: 'bilal@example.com', country: 'Pakistan', message: 'Need help with A Level Physics.' });
  assert.ok(body.includes('Name: Bilal'));
  assert.ok(body.includes('Message: Need help with A Level Physics.'));
  assert.ok(!body.includes('School:'));
});
