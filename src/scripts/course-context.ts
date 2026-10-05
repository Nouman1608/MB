/**
 * Navigation round (6 Oct 2026) -- the student's chosen course, kept in this
 * browser so it carries across course, topic and resource pages without
 * putting anything in a URL (course pages and resource pages keep one
 * canonical address each; no ?course= variants are created for search
 * engines to crawl).
 *
 * Stored under `mb-course` in localStorage (listed on /legal/cookies/). Only
 * public catalogue values are stored: the course id
 * (board/qualification/subject), its display label, its page path and its
 * syllabus code. Every read is validated and every access is wrapped, so a
 * private window, blocked storage or a hand-edited value simply means "no
 * course chosen".
 */
export interface StoredCourse {
  id: string;
  label: string;
  hub: string;
  code?: string;
}

export const COURSE_KEY = 'mb-course';
const ID_RE = /^[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+$/;

export function isValidCourse(v: unknown): v is StoredCourse {
  if (!v || typeof v !== 'object') return false;
  const o = v as Record<string, unknown>;
  return typeof o.id === 'string' && ID_RE.test(o.id)
    && typeof o.label === 'string' && o.label.length > 0 && o.label.length < 200
    && typeof o.hub === 'string' && o.hub === `/boards/${o.id}/`
    && (o.code === undefined || (typeof o.code === 'string' && o.code.length < 80));
}

export function getCourse(): StoredCourse | null {
  try {
    const raw = window.localStorage.getItem(COURSE_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw);
    return isValidCourse(v) ? v : null;
  } catch {
    return null;
  }
}

export function setCourse(c: StoredCourse): void {
  if (!isValidCourse(c)) return;
  try {
    window.localStorage.setItem(COURSE_KEY, JSON.stringify({ id: c.id, label: c.label, hub: c.hub, ...(c.code ? { code: c.code } : {}) }));
  } catch {
    /* storage unavailable: the course simply is not remembered */
  }
}

export function clearCourse(): void {
  try {
    window.localStorage.removeItem(COURSE_KEY);
  } catch {
    /* nothing to clear */
  }
}
