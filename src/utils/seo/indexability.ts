/**
 * The ONLY sanctioned way to decide whether an academic hub page
 * (/boards/{board}/{qualification}/{subject}/) is indexable.
 *
 * Phase 1 of the Aug 2026 SEO remediation. Before this file existed, the
 * page template computed its own `isThin` guard (`resources.length === 0
 * && !hasSyllabusTopics`) and the sitemap had no matching exclusion at all
 * -- so every ACTIVE combination shipped a <loc> entry regardless of
 * whether the page carried a noindex tag. That is a direct contributor to
 * "Crawled - currently not indexed" / "Discovered - currently not
 * indexed" in Search Console: Google is told via the sitemap that a URL
 * is worth crawling, then told via robots meta not to index it once it
 * gets there.
 *
 * This function is deliberately framework-free (no astro:content import)
 * so it can be called from two different data-fetching contexts that
 * cannot share a runtime:
 *   - the page template itself, at render time, via astro:content
 *     (src/pages/boards/[board]/[qualification]/[subject].astro)
 *   - astro.config.mjs, at sitemap-generation time, which runs before the
 *     content layer exists and reads resource frontmatter directly off
 *     disk (see buildIndexabilityExclusions() in astro.config.mjs, which
 *     mirrors the existing buildLastmodMap() pattern already there)
 *
 * Both callers reduce their resources down to the same plain shape
 * (IndexabilityInput) and get the same decision back. That is what makes
 * this "one canonical rule" rather than two independently maintained
 * copies of the same business logic.
 *
 * The old bar for indexability was effectively `resources.length >= 1`
 * (or syllabus topics present). That bar is too low: as of the Aug 2026
 * baseline, 39 of 160 ACTIVE combinations have exactly one resource, and
 * while the median resource is 737 words, plenty run well under that. A
 * single 120-word stub "counts" as a resource but is not substantial
 * original guidance -- indexing that page just so Google can mark it thin
 * is worse than honestly noindexing it until it has real content.
 *
 * The word-count threshold below (400) is not a new number invented for
 * this task -- it matches the "expansion queue" cutoff already used by
 * scripts/academic-coverage-report-v2.mjs to flag resources needing more
 * depth. Reusing it here means "indexable" and "not flagged for
 * expansion" describe the same underlying quality bar sitewide, instead
 * of two different numbers meaning approximately the same thing.
 */

/**
 * Resource types that represent genuine Marlbridge-authored guidance for
 * a specific board+qualification+subject combination. Past papers are
 * official third-party material we host access/guidance around, not
 * original Marlbridge writing, so they never count toward this bar (see
 * the "no copied past papers" guardrail). Learning articles are not
 * written against a single combination, so they are out of scope for
 * this per-combination decision too.
 */
export const QUALIFYING_RESOURCE_TYPES = [
  'study-guides',
  'revision-notes',
  'subject-guides',
  'practice-questions',
  'exam-preparation',
] as const;

export type QualifyingResourceType = (typeof QUALIFYING_RESOURCE_TYPES)[number];

/** Matches the "expansion queue" threshold in academic-coverage-report-v2.mjs. */
export const SUBSTANTIAL_WORD_THRESHOLD = 400;

export interface IndexabilityResourceInput {
  resourceType: string;
  /** Word count of the resource body (frontmatter excluded). */
  wordCount: number;
}

export interface IndexabilityInput {
  /** Every resource already filtered to this exact combination (subject + level + board). */
  resources: IndexabilityResourceInput[];
  /** Whether the awarding body's syllabus topics have been transcribed for this combination. */
  hasSyllabusTopics: boolean;
}

export interface IndexabilityResult {
  indexable: boolean;
  reason: string;
  uniqueResourceCount: number;
  totalQualifyingWordCount: number;
  hasPublishedTaxonomy: boolean;
  hasSubstantialOriginalGuidance: boolean;
}

export function isIndexableAcademicPage(input: IndexabilityInput): IndexabilityResult {
  const qualifying = input.resources.filter((r) =>
    (QUALIFYING_RESOURCE_TYPES as readonly string[]).includes(r.resourceType),
  );
  const uniqueResourceCount = qualifying.length;
  const totalQualifyingWordCount = qualifying.reduce((sum, r) => sum + r.wordCount, 0);
  const hasPublishedTaxonomy = input.hasSyllabusTopics;
  const hasSubstantialOriginalGuidance = totalQualifyingWordCount >= SUBSTANTIAL_WORD_THRESHOLD;

  // Substantial original guidance is the bar on its own -- a page with a
  // full syllabus topic list but zero real Marlbridge writing is still a
  // thin search result, and syllabus-topics-alone was exactly the old
  // loophole this policy closes. Published taxonomy is recorded on the
  // result for reporting, but does not by itself make a page indexable.
  if (hasSubstantialOriginalGuidance) {
    return {
      indexable: true,
      reason: `${uniqueResourceCount} original Marlbridge resource(s) totalling ${totalQualifyingWordCount} words`,
      uniqueResourceCount,
      totalQualifyingWordCount,
      hasPublishedTaxonomy,
      hasSubstantialOriginalGuidance,
    };
  }

  return {
    indexable: false,
    reason:
      uniqueResourceCount === 0
        ? 'No original Marlbridge resource published for this combination'
        : `Only ${totalQualifyingWordCount} words of original Marlbridge guidance across ${uniqueResourceCount} resource(s) -- below the ${SUBSTANTIAL_WORD_THRESHOLD}-word substantial-content threshold`,
    uniqueResourceCount,
    totalQualifyingWordCount,
    hasPublishedTaxonomy,
    hasSubstantialOriginalGuidance,
  };
}
