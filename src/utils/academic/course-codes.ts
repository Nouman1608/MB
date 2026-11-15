/**
 * Every syllabus / specification code a published course answers to.
 *
 * Moved here unchanged from combination-resources.ts (D-461) so that plain
 * node scripts can import it: that file's other imports are extensionless
 * and reach `astro:content`, which only the Astro build resolves. It is
 * still the one definition; combination-resources.ts re-exports it.
 *
 * The codes are: each Syllabus record for the combination (a record may
 * print two codes, e.g. "0450 / 0264", and a combination may hold two
 * records, e.g. O Level Urdu 3247 and 3248), plus the codes of its assessment
 * records, which include a replacement specification that is already
 * announced (e.g. AQA 7132 and 7138). Empty when no record exists: the code
 * check is then skipped by resourcesForCombination().
 */
import type { Combination } from '../../data/academic/matrix';
import { SYLLABUSES } from '../../data/academic/syllabuses.ts';
import { assessmentsFor } from '../../data/academic/assessments.ts';
import { normaliseCode } from './syllabus-codes.ts';

const codeCache = new Map<string, Set<string>>();
export function courseCodes(c: Pick<Combination, 'boardSlug' | 'qualificationSlug' | 'subjectSlug'>): Set<string> {
  const key = `${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}`;
  let set = codeCache.get(key);
  if (set) return set;
  const subjectSlug = c.subjectSlug === 'english' ? 'english-language' : c.subjectSlug;
  const raw = [
    ...SYLLABUSES.filter((x) => x.boardSlug === c.boardSlug && x.qualificationSlug === c.qualificationSlug && x.subjectSlug === subjectSlug).map((x) => x.code),
    ...assessmentsFor(c.boardSlug, c.qualificationSlug, c.subjectSlug).map((a) => a.code),
  ];
  set = new Set(raw.flatMap((code) => code.split(' / ')).map(normaliseCode).filter(Boolean));
  codeCache.set(key, set);
  return set;
}
