/**
 * D-286 -- pure validation for the two new public forms: the revision-email
 * subscription and workshop registration. No Workers runtime dependency, so
 * it is unit tested with plain Node (functions/api/__tests__/signup-validation.test.mjs).
 *
 * Both reuse the enquiry form's sanitiser and email rule, so all three forms
 * treat input the same way.
 */
import { sanitizeField, isHoneypotTripped } from './enquiry-validation.ts';

export { isHoneypotTripped };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const QUALIFICATION_SLUGS = ['igcse', 'o-level', 'gcse', 'as-level', 'a-level', 'ib-myp', 'ib-dp'] as const;
const COURSE_ID_RE = /^[a-z0-9-]{2,20}\/[a-z0-9-]{2,20}\/[a-z0-9-]{2,60}$/;
const SLUG_RE = /^[a-z0-9-]{3,80}$/;
export const MAX_COURSES = 6;

export interface SubscribeData { email: string; qualification: string; courses: string[]; source: string }
export interface RegisterData { email: string; name: string; workshop: string; country: string; role: 'student' | 'parent' | 'teacher' | 'other' }
type Result<T> = { ok: true; data: T } | { ok: false; errors: Record<string, string> };

const getAll = (raw: Record<string, unknown>, key: string): unknown[] => {
  const v = raw[key];
  return Array.isArray(v) ? v : v === undefined ? [] : [v];
};

export function validateSubscribe(raw: Record<string, unknown>): Result<SubscribeData> {
  const errors: Record<string, string> = {};
  const email = sanitizeField(raw.email, 254).toLowerCase();
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';
  const qualification = sanitizeField(raw.qualification, 20);
  if (!(QUALIFICATION_SLUGS as readonly string[]).includes(qualification)) errors.qualification = 'Please choose your qualification.';
  const courses = [...new Set(getAll(raw, 'courses').map((c) => sanitizeField(c, 110)).filter(Boolean))];
  if (courses.length > MAX_COURSES) errors.courses = `Choose up to ${MAX_COURSES} subjects.`;
  if (courses.some((c) => !COURSE_ID_RE.test(c))) errors.courses = 'Please choose subjects from the list.';
  if (sanitizeField(raw.consent, 10) !== 'yes') errors.consent = 'Please tick the box to agree to receive these emails.';
  const source = sanitizeField(raw.source, 40).replace(/[^a-z0-9_-]/gi, '') || 'unknown';
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data: { email, qualification, courses, source } };
}

export function validateRegister(raw: Record<string, unknown>): Result<RegisterData> {
  const errors: Record<string, string> = {};
  const email = sanitizeField(raw.email, 254).toLowerCase();
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';
  const name = sanitizeField(raw.name, 120);
  if (!name) errors.name = 'Please enter your name.';
  const workshop = sanitizeField(raw.workshop, 80);
  if (!SLUG_RE.test(workshop)) errors.workshop = 'Unknown workshop.';
  const country = sanitizeField(raw.country, 80);
  if (!country) errors.country = 'Please enter your country.';
  const role = sanitizeField(raw.role, 20) as RegisterData['role'];
  if (!['student', 'parent', 'teacher', 'other'].includes(role)) errors.role = 'Please choose who is registering.';
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data: { email, name, workshop, country, role } };
}
