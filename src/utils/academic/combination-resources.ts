/**
 * Revision-tools round (2026-09-23, D-286) -- the one definition of "the
 * resources that belong to this board x qualification x subject".
 *
 * This filter used to live only inside the academic hub template
 * (src/pages/boards/[board]/[qualification]/[subject].astro). The free
 * revision tools added in D-286 (the homepage syllabus finder, the revision
 * planner, the diagnostics and the tuition sections) need exactly the same
 * answer, so it is extracted here and the hub now calls it too -- two
 * copies could drift and send a student from the planner to a resource the
 * hub itself would not list for their course.
 *
 * The rules are unchanged from the hub (see the long comment that used to
 * sit there, kept in the hub's git history):
 *   - resources reference the subjects CONTENT id (the registry's hubId),
 *     not the matrix subjectSlug;
 *   - the resource's `level` must include this qualification's level key;
 *   - a resource must be board-agnostic (boards: []) or tagged with this
 *     board, so e.g. an AQA-only resource never appears for OxfordAQA.
 */
import type { CollectionEntry } from 'astro:content';
import type { Combination } from '../../data/academic/matrix';
import { subjectBySlug } from '../../data/academic/subjects';
import { LEVEL_FOR_QUALIFICATION } from './index';
import { SYLLABUSES } from '../../data/academic/syllabuses';
import { assessmentsFor } from '../../data/academic/assessments';
import { normaliseCode, codeMatches } from './syllabus-codes.ts';

export { normaliseCode, codeMatches };

/**
 * Every syllabus / specification code a published course answers to: each
 * Syllabus record for the combination (a record may print two codes, e.g.
 * "0450 / 0264", and a combination may hold two records, e.g. O Level Urdu
 * 3247 and 3248), plus the codes of its assessment records, which include a
 * replacement specification that is already announced (e.g. AQA 7132 and
 * 7138). Empty when no record exists: the code check is then skipped.
 */
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


export const hubSlugFor = (c: Pick<Combination, 'subjectSlug'>): string =>
  subjectBySlug(c.subjectSlug)?.hubId ?? c.subjectSlug;

export function resourcesForCombination(
  c: Combination,
  allResources: readonly CollectionEntry<'resources'>[],
): CollectionEntry<'resources'>[] {
  const hubSlug = hubSlugFor(c);
  const levelKey = LEVEL_FOR_QUALIFICATION[c.qualificationSlug];
  const codes = courseCodes(c);
  return allResources.filter(
    (r) =>
      r.data.subject.id === hubSlug &&
      r.data.level.includes(levelKey as never) &&
      (r.data.boards.length === 0 || r.data.boards.includes(c.boardSlug as never)) &&
      // Navigation round (6 Oct 2026): a resource that names its
      // qualification(s) belongs only to those. The level key alone cannot
      // tell AS Level from A Level (both are 'a-levels'), so AQA AS Business
      // (7131/7137) pages were listed on the A-level Business (7132) hub and
      // the reverse. Resources with no qualifications tagged are unaffected.
      (r.data.qualifications.length === 0 || r.data.qualifications.includes(c.qualificationSlug as never)) &&
      // D-396: and a resource that names its syllabus code(s) must name one
      // of this course's codes. Board, qualification and subject alone cannot
      // tell apart two syllabuses that share them.
      (r.data.syllabusCodes.length === 0 || codes.size === 0 || r.data.syllabusCodes.some((rc) => codeMatches(rc, codes))),
  );
}

/**
 * Navigation round (6 Oct 2026) -- do two resources belong to the same
 * course? Used for the "Previous / Next" topic sequence and the "Related
 * resources" list on a resource page, which used to match on the topic NAME
 * alone, so e.g. "Organic chemistry" linked AQA GCSE, Edexcel IGCSE and
 * Cambridge pages together. Same subject; boards overlap (or either is
 * board-agnostic); qualifications overlap (or either is untagged).
 */
export function sameCourse(a: CollectionEntry<'resources'>, b: CollectionEntry<'resources'>): boolean {
  if (a.data.subject.id !== b.data.subject.id) return false;
  const overlap = (x: readonly string[], y: readonly string[]) => x.length === 0 || y.length === 0 || x.some((v) => y.includes(v));
  return overlap(a.data.boards, b.data.boards)
    && overlap(a.data.qualifications, b.data.qualifications)
    && a.data.level.some((l) => b.data.level.includes(l))
    // Two syllabuses can share board, qualification and subject (Cambridge
    // O Level Urdu First Language 3247 / Second Language 3248), so declared
    // codes must overlap too.
    && overlap(a.data.syllabusCodes.map(normaliseCode), b.data.syllabusCodes.map(normaliseCode));
}

/** How a revision tool uses a resource type: learn it, practise it, or revise it. */
export type StudyKind = 'learn' | 'practice' | 'review';

export const STUDY_KIND: Record<CollectionEntry<'resources'>['data']['resourceType'], StudyKind> = {
  'study-guides': 'learn',
  'subject-guides': 'learn',
  'learning-articles': 'learn',
  'revision-notes': 'review',
  'practice-questions': 'practice',
  'past-papers': 'practice',
  'exam-preparation': 'practice',
};

/**
 * resource id -> the published combinations it belongs to, and
 * combination key -> its resources. Built once per build (the resources
 * collection does not change during a build) so per-page lookups on the
 * 1,600+ resource pages stay cheap.
 */
let indexCache: { byResource: Map<string, Combination[]>; byCourse: Map<string, CollectionEntry<'resources'>[]> } | null = null;

export function combinationIndex(
  combinations: readonly Combination[],
  allResources: readonly CollectionEntry<'resources'>[],
) {
  if (indexCache) return indexCache;
  const byResource = new Map<string, Combination[]>();
  const byCourse = new Map<string, CollectionEntry<'resources'>[]>();
  for (const c of combinations) {
    const rs = resourcesForCombination(c, allResources);
    byCourse.set(`${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}`, rs);
    for (const r of rs) {
      const list = byResource.get(r.id) ?? [];
      list.push(c);
      byResource.set(r.id, list);
    }
  }
  indexCache = { byResource, byCourse };
  return indexCache;
}
