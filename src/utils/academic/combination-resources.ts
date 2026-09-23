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

export const hubSlugFor = (c: Pick<Combination, 'subjectSlug'>): string =>
  subjectBySlug(c.subjectSlug)?.hubId ?? c.subjectSlug;

export function resourcesForCombination(
  c: Combination,
  allResources: readonly CollectionEntry<'resources'>[],
): CollectionEntry<'resources'>[] {
  const hubSlug = hubSlugFor(c);
  const levelKey = LEVEL_FOR_QUALIFICATION[c.qualificationSlug];
  return allResources.filter(
    (r) =>
      r.data.subject.id === hubSlug &&
      r.data.level.includes(levelKey as never) &&
      (r.data.boards.length === 0 || r.data.boards.includes(c.boardSlug as never)),
  );
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
