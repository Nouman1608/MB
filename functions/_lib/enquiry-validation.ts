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

export type EnquiryKind = 'student' | 'tutoring' | 'school' | 'trial';

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
  // v1.x CLOSURE Release WS1 (2026-08-26) -- REVERSES the QIGT trust
  // workstream's earlier change (Aug 2026), which had added qualification/
  // board/subject as structured required fields plus an optional
  // availability field, specifically so a trial request could be routed to
  // the right teacher without relying on free text. This release's
  // approved business decision is stricter and explicit: "Student enquiry
  // forms must contain only: Name, Email, Phone, Country, Message,"
  // with programme/board/subject/level/availability left to the student to
  // write in the message itself (see the updated message-hint copy in
  // EnquiryForm.astro). Reverting here rather than layering a second
  // convention on top of the first -- one allowlist, one behaviour, for
  // every non-school enquiry kind. Confirmed directly with the owner
  // before applying (docs/decision-log.md, v1.x Closure WS0/WS1).
  trial: {
    required: ['name', 'email', 'country', 'message'],
    optional: ['phone'],
  },
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

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }
  return { ok: true, data };
}

const KIND_LABEL: Record<EnquiryKind, string> = {
  student: 'Student / parent enquiry',
  tutoring: 'Tutoring enquiry',
  school: 'School enquiry',
  trial: 'Free trial class request',
};

const FIELD_LABEL: Record<string, string> = {
  name: 'Name', school: 'School', role: 'Role', email: 'Email', phone: 'Phone',
  country: 'Country', message: 'Message',
  qualification: 'Qualification', board: 'Exam board', subject: 'Subject',
  availability: 'Availability',
};

/** Plain-text email body. Every value was already sanitized by validateEnquiry. */
export function renderEmailBody(kind: EnquiryKind, data: Record<string, string>): string {
  const spec = FIELDS_BY_KIND[kind];
  const lines = [`${KIND_LABEL[kind]} via marlbridge.com`, ''];
  for (const field of [...spec.required, ...spec.optional]) {
    if (data[field]) lines.push(`${FIELD_LABEL[field] ?? field}: ${data[field]}`);
  }
  return lines.join('\n');
}

export const ALLOWED_FIELDS_BY_KIND = FIELDS_BY_KIND;
