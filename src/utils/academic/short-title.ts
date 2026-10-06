/**
 * D-397 -- shorter resource titles where the page already gives the
 * context. Under a course page's topic heading, "Cambridge IGCSE Chemistry
 * 0620: Elements, compounds and mixtures -- Study Guide" reads as
 * "Elements, compounds and mixtures": the course is in the page heading,
 * the type is the column it sits in.
 *
 * Pure and conservative. It only removes
 *   - a leading "<course>:" prefix when that prefix names the board,
 *     qualification, subject or syllabus code of the course shown, and
 *   - a trailing resource-type suffix ("-- Study Guide", ": Revision Notes",
 *     "— Practice Questions", "(Practice)" ...).
 * It never returns an empty string: if nothing would be left, the original
 * title is returned. The full title stays on the resource page itself.
 */
export interface ShortTitleContext {
  board?: string;
  qualification?: string;
  subject?: string;
  code?: string;
}

const COURSE_WORDS = /\b(Cambridge|Pearson|Edexcel|AQA|OxfordAQA|OCR|IB|IGCSE|GCSE|O Level|A[ -]Level|AS[ -]Level|AS|IAL|International A Level|International|DP|MYP)\b/i;
const TYPE_SUFFIX = /\s*(?:--|[-–—:|])?\s*\(?(?:study guide|revision notes?|practice questions?|practice set|practice|exam preparation|notes)\)?\s*$/i;

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function shortTitle(title: string, ctx: ShortTitleContext = {}): string {
  let t = title.trim();
  const colon = t.search(/:\s/);
  if (colon > 0) {
    const prefix = t.slice(0, colon);
    const names = [ctx.board, ctx.qualification, ctx.subject, ctx.code].filter((x): x is string => !!x && x.length > 1);
    const namesCourse = names.some((n) => new RegExp(`\\b${escape(n)}\\b`, 'i').test(prefix));
    if (namesCourse || (COURSE_WORDS.test(prefix) && prefix.split(/\s+/).length <= 7)) {
      const rest = t.slice(colon + 1).trim();
      if (rest) t = rest;
    }
  }
  const stripped = t.replace(TYPE_SUFFIX, '').replace(/[\s,;:–—-]+$/, '').trim();
  if (stripped.length >= 3) t = stripped;
  return t || title;
}
