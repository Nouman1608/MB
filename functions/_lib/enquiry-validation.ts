/**
 * Pure, framework-agnostic enquiry-form validation and sanitization.
 *
 * Deliberately has zero dependency on the Cloudflare Workers runtime (no
 * `Request`/`env`/KV/etc.) so it can be unit-tested with plain Node — see
 * functions/api/__tests__/enquiry-validation.test.mjs. functions/api/
 * enquiry.ts (the actual Pages Function) imports this and adds the
 * runtime-specific concerns (headers, KV rate limiting, Turnstile, email
 * dispatch) around it.
 */

export type EnquiryKind = 'student' | 'tutoring' | 'school' | 'trial' | 'correction';

/**
 * Section 9 of the Flagship Dominance/Trust programme brief (2026-08-31,
 * D-095) asks for a corrections/error-report system "distinguishable from
 * tuition enquiries." Rather than build a second, parallel form-handling
 * pipeline, `correction` reuses this exact same validated, spam-hardened
 * endpoint (same-origin check, honeypot, Turnstile, rate limiting, Resend
 * delivery) as its own EnquiryKind, with its own field set below and its
 * own subject line (functions/api/enquiry.ts) and GA4 event name (a plain
 * `report_correction` custom event, NOT `generate_lead` -- a correction
 * report is not a sales lead, and no new GA4 KEY event is starred here
 * without the owner's explicit approval, matching this repo's established
 * practice for whatsapp_click, D-080).
 */
const ISSUE_TYPES = [
  'Wrong subject, board or qualification shown',
  'Outdated or incorrect syllabus information',
  'Factual error in the content',
  'Broken link or missing content',
  'Something else',
] as const;

/**
 * The exact field set EnquiryForm.astro renders for each kind. Anything
 * submitted outside this allowlist is silently dropped before it ever
 * reaches the email body — a payload cannot smuggle extra fields in.
 */
const FIELDS_BY_KIND: Record<EnquiryKind, { required: string[]; optional: string[] }> = {
  // v1.x CLOSURE WS4 -- reduced to the approved five fields (name, email,
  // phone, country, message). program/subject/level/format were removed
  // from student and tutoring enquiries; visitors are asked in the
  // message hint to mention programme, board, subject and level there
  // instead. The school-partnership form is deliberately NOT reduced --
  // school/role are organisation-identifying fields a school enquiry
  // genuinely needs, not enrolment metadata (see the note above
  // FIELDS_BY_KIND).
  student: {
    required: ['name', 'email', 'country', 'message'],
    optional: ['phone'],
  },
  tutoring: {
    required: ['name', 'email', 'country', 'message'],
    optional: ['phone'],
  },
  school: {
    required: ['name', 'school', 'role', 'email', 'country', 'message'],
    optional: ['phone'],
  },
  // D-286 (2026-09-23, owner brief of that date) -- the trial request is
  // structured again. This deliberately REVERSES the v1.x CLOSURE WS1
  // five-field rule for the trial kind ONLY (student, tutoring and school
  // are unchanged): the owner asked for qualification, exam board (with
  // "Not sure"), subject, group / one-to-one preference (with "Help me
  // decide"), country, time zone, preferred availability, contact details
  // and an OPTIONAL message. Every structured value is checked against an
  // allow-list or a strict pattern below (TRIAL_RULES), so nothing a client
  // invents reaches the email as trusted data.
  //
  // `message` stays accepted and can stand in for the structured choice:
  // a request needs EITHER a subject OR a message. That keeps the
  // translated /ar/ /ur/ /bn/ trial pages, which still use the five-field
  // form, working unchanged.
  //
  // D-291 (2026-09-23, owner request after seeing the live form) -- the
  // visible form was shortened: no qualification dropdown, no time zone,
  // and the subject is typed by the student. `qualification` survives only
  // as a hidden value filled from ?course / ?program, and `timezone` stays
  // allow-listed so an older cached page still submits cleanly.
  trial: {
    required: ['name', 'email', 'country'],
    optional: ['phone', 'qualification', 'board', 'subject', 'course', 'format', 'timezone', 'availability', 'teacher', 'source', 'message'],
  },
  // Deliberately NOT name/phone/country -- a correction report is not a
  // tuition enquiry and shouldn't ask for enrolment-shaped fields. pageUrl
  // is auto-captured client-side (CorrectionForm.astro) but still a real,
  // editable, required field so it degrades honestly if JS is off.
  correction: {
    required: ['pageUrl', 'issueType', 'description'],
    optional: ['email'],
  },
};

/** D-286 -- allowed values for the structured trial fields. */
export const TRIAL_QUALIFICATIONS = ['igcse', 'o-level', 'gcse', 'as-level', 'a-level', 'ib-myp', 'ib-dp', 'ielts', 'sat', 'not-sure'] as const;
export const TRIAL_BOARDS = ['cambridge', 'edexcel', 'aqa', 'ocr', 'oxfordaqa', 'ib', 'not-sure'] as const;
export const TRIAL_FORMATS = ['group', 'one-to-one', 'help-me-decide'] as const;
export const TRIAL_AVAILABILITY = [
  'weekday-morning', 'weekday-afternoon', 'weekday-evening',
  'weekend-morning', 'weekend-afternoon', 'weekend-evening',
] as const;
export const TRIAL_SOURCES = ['home', 'trial-page', 'teacher', 'tuition-page', 'diagnostic', 'resource', 'planner', 'practice', 'program', 'pricing', 'region', 'other'] as const;

const TRIAL_RULES: Record<string, (v: string) => boolean> = {
  qualification: (v) => (TRIAL_QUALIFICATIONS as readonly string[]).includes(v),
  board: (v) => (TRIAL_BOARDS as readonly string[]).includes(v),
  format: (v) => (TRIAL_FORMATS as readonly string[]).includes(v),
  course: (v) => /^[a-z0-9-]{2,20}\/[a-z0-9-]{2,20}\/[a-z0-9-]{2,60}$/.test(v),
  timezone: (v) => /^[A-Za-z_+\-/0-9: ]{2,60}$/.test(v),
  availability: (v) => v.split(',').every((x) => (TRIAL_AVAILABILITY as readonly string[]).includes(x.trim())),
  teacher: (v) => /^[a-z0-9-]{3,60}$/.test(v),
  source: (v) => (TRIAL_SOURCES as readonly string[]).includes(v),
  subject: (v) => v.length <= 300,
};

const MAX_FIELD_LENGTH = 2000;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Strips characters that could be used for email-header injection (CRLF,
 * other control characters) from any field that could end up in an email
 * header or a header-adjacent context, trims whitespace, and caps length.
 * Applied to every field, not just the ones we expect to be short, since
 * an attacker controls what's actually submitted regardless of what the
 * form's HTML asks for.
 */
export function sanitizeField(value: unknown, maxLength = MAX_FIELD_LENGTH): string {
  if (typeof value !== 'string') return '';
  // eslint-disable-next-line no-control-regex
  const stripped = value.replace(/[\r\n\x00-\x08\x0B\x0C\x0E-\x1F]/g, ' ').trim();
  return stripped.slice(0, maxLength);
}

export interface ValidationSuccess {
  ok: true;
  data: Record<string, string>;
}
export interface ValidationFailure {
  ok: false;
  errors: Record<string, string>;
}

/**
 * `honeypotValue` is the value of a hidden field real users never see or
 * fill in (see the `website` field added to EnquiryForm.astro). A non-empty
 * value means an automated submission — the caller should return a fake
 * success response rather than a rejection, so the bot doesn't learn the
 * honeypot was detected and adapt.
 */
export function isHoneypotTripped(honeypotValue: unknown): boolean {
  return typeof honeypotValue === 'string' && honeypotValue.trim().length > 0;
}

export function validateEnquiry(
  kind: EnquiryKind,
  raw: Record<string, unknown>,
): ValidationSuccess | ValidationFailure {
  const spec = FIELDS_BY_KIND[kind];
  if (!spec) {
    return { ok: false, errors: { kind: 'Unrecognised enquiry type.' } };
  }

  const errors: Record<string, string> = {};
  const data: Record<string, string> = {};

  for (const field of [...spec.required, ...spec.optional]) {
    const maxLength = field === 'message' ? MAX_MESSAGE_LENGTH : MAX_FIELD_LENGTH;
    const clean = sanitizeField(raw[field], maxLength);
    if (spec.required.includes(field) && clean.length === 0) {
      errors[field] = 'This field is required.';
      continue;
    }
    if (clean.length > 0) data[field] = clean;
  }

  if (data.email && !EMAIL_RE.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (kind === 'trial') {
    for (const [field, ok] of Object.entries(TRIAL_RULES)) {
      if (data[field] !== undefined && !ok(data[field])) {
        // An out-of-list value is a tampered or stale client: drop it rather
        // than reject the whole request, except where the visitor must fix it.
        if (field === 'format') errors[field] = 'Please choose one of the listed options.';
        else if (field === 'subject') errors[field] = 'Please keep the subjects under 300 characters.';
        else delete data[field];
      }
    }
    if (!data.subject && !data.message && !errors.subject) {
      errors.subject = 'Please tell us which subjects you need help with.';
    }
  }

  if (kind === 'correction' && data.issueType && !(ISSUE_TYPES as readonly string[]).includes(data.issueType)) {
    errors.issueType = 'Please choose one of the listed issue types.';
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }
  return { ok: true, data };
}

export const CORRECTION_ISSUE_TYPES = ISSUE_TYPES;

const KIND_LABEL: Record<EnquiryKind, string> = {
  student: 'Student / parent enquiry',
  tutoring: 'Tutoring enquiry',
  school: 'School enquiry',
  trial: 'Free trial class request',
  correction: 'Correction report (not a tuition enquiry)',
};

const FIELD_LABEL: Record<string, string> = {
  name: 'Name', school: 'School', role: 'Role', email: 'Email', phone: 'Phone',
  country: 'Country', message: 'Message',
  qualification: 'Qualification', board: 'Exam board', subject: 'Subjects',
  availability: 'Preferred times', course: 'Course id', format: 'Group or one-to-one',
  timezone: 'Time zone', teacher: 'Teacher asked for', source: 'Came from',
  pageUrl: 'Page', issueType: 'Issue type', description: 'What looks wrong',
};

/** Plain-text email body. Every value was already sanitized by validateEnquiry. */
/** D-286 -- readable values for the structured trial fields in the owner's email. */
const VALUE_LABEL: Record<string, Record<string, string>> = {
  qualification: { igcse: 'IGCSE', 'o-level': 'O Level', gcse: 'GCSE', 'as-level': 'AS Level', 'a-level': 'A Level', 'ib-myp': 'IB MYP', 'ib-dp': 'IB Diploma', ielts: 'IELTS', sat: 'SAT', 'not-sure': 'Not sure' },
  board: { cambridge: 'Cambridge', edexcel: 'Pearson Edexcel', aqa: 'AQA', ocr: 'OCR', oxfordaqa: 'OxfordAQA', ib: 'IB', 'not-sure': 'Not sure' },
  format: { group: 'Group classes', 'one-to-one': 'One-to-one', 'help-me-decide': 'Help me decide' },
};
const readable = (field: string, value: string): string => {
  if (field === 'availability') return value.split(',').map((x) => x.trim().replace('-', ' ')).join(', ');
  return VALUE_LABEL[field]?.[value] ?? value;
};

export function renderEmailBody(kind: EnquiryKind, data: Record<string, string>): string {
  const spec = FIELDS_BY_KIND[kind];
  const lines = [`${KIND_LABEL[kind]} via marlbridge.com`, ''];
  for (const field of [...spec.required, ...spec.optional]) {
    if (data[field]) lines.push(`${FIELD_LABEL[field] ?? field}: ${readable(field, data[field])}`);
  }
  if (kind === 'trial') lines.push('', 'This is a request for a free trial class, not a confirmed booking.');
  return lines.join('\n');
}

export const ALLOWED_FIELDS_BY_KIND = FIELDS_BY_KIND;
