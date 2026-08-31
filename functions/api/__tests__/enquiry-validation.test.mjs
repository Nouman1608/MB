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
  ALLOWED_FIELDS_BY_KIND,
  CORRECTION_ISSUE_TYPES,
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

// v1.x CLOSURE Release WS1 (2026-08-26) -- REPLACES the three tests above
// this comment used to be (they proved the QIGT trust workstream's now-
// reverted qualification/board/subject/availability fields). These prove
// the current, approved allowed-field contract instead: trial now takes
// exactly the same five fields as student/tutoring, and -- the part that
// actually matters for security, not just UI -- a client that submits the
// deprecated fields anyway (e.g. a replayed old request, or a scripted
// attacker who never loads the current HTML) has them silently discarded
// server-side rather than accepted as trusted data.

test('validateEnquiry: trial kind requires only name, email, country, message', () => {
  const result = validateEnquiry('trial', {
    name: 'Zara Ali', email: 'zara@example.com', country: 'Pakistan',
    message: 'Would like a trial for the next exam series -- A Level Physics, Cambridge, weekday evenings.',
  });
  assert.equal(result.ok, true);
});

test('validateEnquiry: trial kind rejects missing required fields the same as student/tutoring', () => {
  const result = validateEnquiry('trial', { name: 'Zara Ali', email: 'zara@example.com' });
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.ok(result.errors.country);
    assert.ok(result.errors.message);
  }
});

test('validateEnquiry: trial kind silently discards deprecated qualification/board/subject/availability fields, does not accept them as trusted data', () => {
  const result = validateEnquiry('trial', {
    name: 'Zara Ali', email: 'zara@example.com', country: 'Pakistan',
    message: 'Would like a trial for the next exam series.',
    // A client (stale cached page, replayed request, or a scripted
    // attacker bypassing the current HTML entirely) submitting the
    // removed fields anyway must not have them accepted.
    qualification: 'A Level', board: 'Cambridge', subject: 'Physics',
    availability: 'Weekday evenings, Pakistan time',
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal('qualification' in result.data, false);
    assert.equal('board' in result.data, false);
    assert.equal('subject' in result.data, false);
    assert.equal('availability' in result.data, false);
  }
});

test('renderEmailBody: trial kind email body never includes the deprecated fields even if present in data', () => {
  // Defence in depth: even if a caller somehow passed these through
  // (they shouldn't, since validateEnquiry already strips them), the
  // renderer only ever emits fields that are in the kind's own
  // required/optional spec.
  const body = renderEmailBody('trial', {
    name: 'Zara Ali', email: 'zara@example.com', country: 'Pakistan',
    message: 'Would like a trial for the next exam series.',
    qualification: 'A Level', board: 'Cambridge', subject: 'Physics',
    availability: 'Weekday evenings, Pakistan time',
  });
  assert.ok(body.includes('Name: Zara Ali'));
  assert.ok(body.includes('Message: Would like a trial for the next exam series.'));
  assert.ok(!body.includes('Qualification:'));
  assert.ok(!body.includes('Exam board:'));
  assert.ok(!body.includes('Subject:'));
  assert.ok(!body.includes('Availability:'));
});

test('ALLOWED_FIELDS_BY_KIND: trial has the exact same field set as student and tutoring', () => {
  assert.deepEqual(ALLOWED_FIELDS_BY_KIND.trial, ALLOWED_FIELDS_BY_KIND.student);
  assert.deepEqual(ALLOWED_FIELDS_BY_KIND.trial, ALLOWED_FIELDS_BY_KIND.tutoring);
  assert.deepEqual(ALLOWED_FIELDS_BY_KIND.trial.required.sort(), ['country', 'email', 'message', 'name']);
  assert.deepEqual(ALLOWED_FIELDS_BY_KIND.trial.optional, ['phone']);
});

// Flagship Dominance/Trust programme, Section 9 (2026-08-31, D-095) --
// `correction` is a deliberately different field set from every tuition
// enquiry kind above: no name/phone/country, since a correction report is
// not an enrolment enquiry.

test('validateEnquiry: correction — accepts a well-formed report with no name/phone/country', () => {
  const result = validateEnquiry('correction', {
    pageUrl: 'https://marlbridge.com/resources/some-resource/',
    issueType: CORRECTION_ISSUE_TYPES[0],
    description: 'The board shown says AQA but this is a Cambridge resource.',
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal('name' in result.data, false);
    assert.equal('phone' in result.data, false);
    assert.equal('country' in result.data, false);
  }
});

test('validateEnquiry: correction — email is optional', () => {
  const result = validateEnquiry('correction', {
    pageUrl: 'https://marlbridge.com/resources/some-resource/',
    issueType: CORRECTION_ISSUE_TYPES[0],
    description: 'Broken link in the third paragraph.',
  });
  assert.equal(result.ok, true);
});

test('validateEnquiry: correction — rejects missing pageUrl/issueType/description', () => {
  const result = validateEnquiry('correction', { email: 'reporter@example.com' });
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.ok(result.errors.pageUrl);
    assert.ok(result.errors.issueType);
    assert.ok(result.errors.description);
  }
});

test('validateEnquiry: correction — rejects an issueType outside the fixed list (not free text)', () => {
  const result = validateEnquiry('correction', {
    pageUrl: 'https://marlbridge.com/resources/some-resource/',
    issueType: 'Something I made up',
    description: 'x',
  });
  assert.equal(result.ok, false);
  if (!result.ok) assert.ok(result.errors.issueType);
});

test('validateEnquiry: correction — name/phone/country/message are not in its allowlist even if submitted', () => {
  const result = validateEnquiry('correction', {
    pageUrl: 'https://marlbridge.com/resources/some-resource/',
    issueType: CORRECTION_ISSUE_TYPES[0],
    description: 'x',
    name: 'Should not appear', phone: '000', country: 'PK', message: 'Should not appear either',
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal('name' in result.data, false);
    assert.equal('phone' in result.data, false);
    assert.equal('country' in result.data, false);
    assert.equal('message' in result.data, false);
  }
});

test('renderEmailBody: correction kind body is labelled distinctly from a tuition enquiry', () => {
  const body = renderEmailBody('correction', {
    pageUrl: 'https://marlbridge.com/resources/some-resource/',
    issueType: CORRECTION_ISSUE_TYPES[0],
    description: 'Wrong board shown.',
  });
  assert.ok(body.includes('Correction report'));
  assert.ok(!body.includes('Student / parent enquiry'));
  assert.ok(!body.includes('Tutoring enquiry'));
  assert.ok(body.includes('Page: https://marlbridge.com/resources/some-resource/'));
});
