/**
 * v1.2 WS2 — replaces the single ambiguous `status` field that used to live
 * directly on `subjects`/`programs` frontmatter (available / coming-soon /
 * resources-only). That one field silently conflated four separate facts:
 * does the awarding body currently offer this, does Marlbridge actually
 * teach it, are resources actually published for it, and is enrolment
 * currently open. A page could claim "available" while its own body copy
 * said teaching wasn't offered yet (the GCSE programme page did exactly
 * this against 17 ACTIVE GCSE matrix combinations) with nothing to catch
 * the contradiction.
 *
 * The one fact that is a genuine, non-derivable business decision —
 * `marlbridgeTeaches` — is still authored in frontmatter (see
 * content.config.ts), because only Marlbridge can decide it and it cannot
 * be inferred from the matrix alone (the matrix's ACTIVE status already
 * requires Marlbridge sign-off per matrix.ts's own evidence hierarchy, but
 * a subject/programme page spans several board+qualification rows and the
 * page-level claim is a separate, explicit editorial decision).
 *
 * The other three are DERIVED here, never hand-claimed:
 *   - awardingBodyOffers  from the matrix's boardOfferingStatus rows
 *   - resourcesAvailable  from an actual resource count
 *   - enrolmentOpen       from marlbridgeTeaches + whether a working
 *                          enrolment path exists (see WS3 — today there is
 *                          no automated enrolment, only an enquiry route)
 */
import { getCollection } from 'astro:content';
import { MATRIX } from '../../data/academic/matrix';
import { SUBJECTS as CANONICAL_SUBJECTS } from '../../data/academic/subjects';

export type MarlbridgeTeaches = 'teaching' | 'planned' | 'not-teaching' | 'not-confirmed';
export type AwardingBodyOffers = 'current' | 'legacy' | 'unverified' | 'not-offered';
export type EnrolmentOpen = 'enquire' | 'waitlist' | 'closed' | 'not-applicable';

/**
 * Content-collection id (e.g. 'english', 'geography') -> the matrix
 * subjectSlug(s) it represents. Mirrors the exact mapping already used by
 * scripts/validate-academic-content.mjs and validate-commercial-claims.mjs,
 * kept in step deliberately rather than re-derived differently in three
 * places.
 */
const matrixSlugsForContentId = new Map<string, string[]>();
for (const s of CANONICAL_SUBJECTS) {
  const hub = s.hubId ?? s.slug;
  if (!matrixSlugsForContentId.has(hub)) matrixSlugsForContentId.set(hub, []);
  matrixSlugsForContentId.get(hub)!.push(s.slug);
}
export const matrixSlugsFor = (contentId: string): string[] =>
  matrixSlugsForContentId.get(contentId) ?? [contentId];

/** Does at least one board currently, verifiably offer this subject? */
export function awardingBodyOffersFor(subjectContentId: string): AwardingBodyOffers {
  const slugs = matrixSlugsFor(subjectContentId);
  const rows = MATRIX.filter((c) => slugs.includes(c.subjectSlug));
  if (rows.length === 0) return 'unverified';
  if (rows.some((r) => r.boardOfferingStatus === 'ACTIVE')) return 'current';
  if (rows.some((r) => r.boardOfferingStatus === 'FUTURE')) return 'legacy';
  return 'not-offered';
}

/** How many ACTIVE (Marlbridge-approved) matrix combinations exist for this subject. */
export function activeCombinationCountFor(subjectContentId: string): number {
  const slugs = matrixSlugsFor(subjectContentId);
  return MATRIX.filter((c) => slugs.includes(c.subjectSlug) && c.marlbridgeStatus === 'ACTIVE').length;
}

/** For a qualification-level programme (igcse/gcse/o-level/as-level/a-level). */
export function activeCombinationCountForQualification(qualificationSlug: string): number {
  return MATRIX.filter((c) => c.qualificationSlug === qualificationSlug && c.marlbridgeStatus === 'ACTIVE').length;
}

/**
 * Real resource count for a subject hub — never a manual claim. Counts
 * resources whose `subject` reference resolves to this content id.
 */
export async function resourcesAvailableFor(subjectContentId: string): Promise<{ count: number; available: boolean }> {
  const resources = await getCollection('resources');
  const count = resources.filter((r) => r.data.subject.id === subjectContentId).length;
  return { count, available: count > 0 };
}

export function enrolmentOpenFor(teaches: MarlbridgeTeaches): EnrolmentOpen {
  // No automated enrolment path exists anywhere on the site today (see WS3)
  // — every currently-taught subject/programme routes to a human enquiry,
  // never to instant registration, so 'enquire' is the honest ceiling.
  if (teaches === 'teaching') return 'enquire';
  if (teaches === 'planned') return 'waitlist';
  return 'not-applicable';
}

/**
 * Legacy-shaped label for templates that still render a single badge.
 * Computed from the real fields above rather than hand-set, so it can no
 * longer silently drift out of sync with either the matrix or the actual
 * resource count.
 */
export function derivedStatus(
  teaches: MarlbridgeTeaches,
  hasResources: boolean,
): 'available' | 'resources-only' | 'coming-soon' {
  if (teaches === 'teaching') return 'available';
  if (hasResources) return 'resources-only';
  return 'coming-soon';
}
