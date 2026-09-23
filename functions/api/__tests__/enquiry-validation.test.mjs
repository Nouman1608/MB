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

// D-286 (2026-09-23) -- the trial kind is structured again, by owner
// decision (see functions/_lib/enquiry-validation.ts). These replace the
// v1.x CLOSURE WS1 tests that proved the five-field trial contract. The
// security property they protected is kept: every structured value is
// allow-listed, and anything outside the lists is dropped, never trusted.

test('validateEnquiry: trial accepts a structured request with no message', () => {
  const result = validateEnquiry('trial', {
    name: 'Zara Ali', email: 'zara@example.com', phone: '+971 50 123 4567', country: 'United Arab Emirates',
    qualification: 'a-level', board: 'cambridge', subject: 'Physics (9702)', course: 'cambridge/a-level/physics',
    format: 'help-me-decide', timezone: 'Asia/Dubai', availability: 'weekday-evening,weekend-morning', source: 'diagnostic',
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.data.qualification, 'a-level');
    assert.equal(result.data.availability, 'weekday-evening,weekend-morning');
  }
});

test('validateEnquiry: trial still accepts the five-field form (translated pages): message instead of choices', () => {
  const result = validateEnquiry('trial', {
    name: 'Zara Ali', email: 'zara@example.com', country: 'Pakistan',
    message: 'Would like a trial for the next exam series -- A Level Physics, Cambridge, weekday evenings.',
  });
  assert.equal(result.ok, true);
});

// D-291 -- the shortened form: a typed subject alone is enough (no
// qualification dropdown, no time zone).
test('validateEnquiry: trial accepts the short form (typed subject, no qualification or time zone)', () => {
  const result = validateEnquiry('trial', {
    name: 'Zara Ali', email: 'zara@example.com', phone: '0323 9149918', country: 'Pakistan',
    subject: 'O Level Maths', board: 'not-sure', format: 'help-me-decide', source: 'trial-page',
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.data.subject, 'O Level Maths');
    assert.equal('qualification' in result.data, false);
  }
});

test('validateEnquiry: trial needs either a subject or a message', () => {
  const result = validateEnquiry('trial', { name: 'Zara Ali', email: 'zara@example.com', country: 'Pakistan' });
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.ok(result.errors.subject);
    assert.equal('qualification' in result.errors, false);
  }
  const tooLong = validateEnquiry('trial', { name: 'Z', email: 'z@example.com', country: 'PK', subject: 'x'.repeat(301) });
  assert.equal(tooLong.ok, false);
  if (!tooLong.ok) assert.ok(tooLong.errors.subject);
  const missing = validateEnquiry('trial', { name: 'Zara Ali', email: 'zara@example.com' });
  assert.equal(missing.ok, false);
  if (!missing.ok) assert.ok(missing.errors.country);
});

test('validateEnquiry: trial drops out-of-list values instead of trusting them', () => {
  const result = validateEnquiry('trial', {
    name: 'Zara Ali', email: 'zara@example.com', country: 'Pakistan', message: 'Help please',
    board: 'made-up-board', availability: 'midnight', teacher: '<b>x</b>', source: 'ad-campaign', course: '../../etc',
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    for (const f of ['board', 'availability', 'teacher', 'source', 'course']) assert.equal(f in result.data, false, f);
  }
  // qualification is now a hidden value: a tampered one is dropped, not shown as an error
  const badQual = validateEnquiry('trial', { name: 'Z', email: 'z@example.com', phone: '03001234567', country: 'PK', board: 'not-sure', format: 'group', qualification: 'phd', subject: 'x' });
  assert.equal(badQual.ok, true);
  if (badQual.ok) assert.equal('qualification' in badQual.data, false);
  const badFormat = validateEnquiry('trial', { name: 'Z', email: 'z@example.com', country: 'PK', subject: 'x', format: 'weekly' });
  assert.equal(badFormat.ok, false);
});

// D-293 -- every visible field on the English form is compulsory.
test('validateEnquiry: trial with a typed subject also needs board, format and phone', () => {
  const r = validateEnquiry('trial', { name: 'Z', email: 'z@example.com', country: 'PK', subject: 'A Level Maths' });
  assert.equal(r.ok, false);
  if (!r.ok) {
    assert.ok(r.errors.board);
    assert.ok(r.errors.format);
    assert.ok(r.errors.phone);
  }
  const badBoard = validateEnquiry('trial', { name: 'Z', email: 'z@example.com', phone: '03001234567', country: 'PK', subject: 'A Level Maths', board: 'made-up', format: 'group' });
  assert.equal(badBoard.ok, false);
  if (!badBoard.ok) assert.ok(badBoard.errors.board);
  const shortPhone = validateEnquiry('trial', { name: 'Z', email: 'z@example.com', phone: '12345', country: 'PK', subject: 'A Level Maths', board: 'cambridge', format: 'group' });
  assert.equal(shortPhone.ok, false);
  if (!shortPhone.ok) assert.ok(shortPhone.errors.phone);
  // The translated five-field forms (no subject) keep phone optional.
  const translated = validateEnquiry('trial', { name: 'Z', email: 'z@example.com', country: 'PK', message: 'A Level Maths please' });
  assert.equal(translated.ok, true);
});

test('renderEmailBody: trial shows readable choices and says it is a request, not a booking', () => {
  const body = renderEmailBody('trial', {
    name: 'Zara Ali', email: 'zara@example.com', country: 'Pakistan',
    qualification: 'igcse', board: 'not-sure', subject: 'Chemistry (0620)', format: 'one-to-one', availability: 'weekend-morning',
  });
  assert.ok(body.includes('Qualification: IGCSE'));
  assert.ok(body.includes('Exam board: Not sure'));
  assert.ok(body.includes('Group or one-to-one: One-to-one'));
  assert.ok(body.includes('Preferred times: weekend morning'));
  assert.ok(body.includes('not a confirmed booking'));
});

test('ALLOWED_FIELDS_BY_KIND: only the trial kind changed; student and tutoring keep five fields', () => {
  assert.deepEqual(ALLOWED_FIELDS_BY_KIND.student, ALLOWED_FIELDS_BY_KIND.tutoring);
  assert.deepEqual(ALLOWED_FIELDS_BY_KIND.student.required.sort(), ['country', 'email', 'message', 'name']);
  assert.deepEqual(ALLOWED_FIELDS_BY_KIND.trial.required.sort(), ['country', 'email', 'name']);
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
