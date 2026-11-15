/**
 * Pure level-label helpers, split out of collections.ts (D-450) so they can be
 * unit-tested without astro:content. collections.ts re-exports them.
 */
/**
 * Display label for a resource's `level` values.
 *
 * Two independent things can mark a resource as AS-only, and both must be
 * honoured or an AS resource silently reads as "A LEVELS" on the page:
 *
 * 1. `stage` -- 9701-style combined "AS & A Level" syllabuses (one
 *    qualification, `qualifications: ["a-level"]`, split by topic depth).
 * 2. `qualifications` including `"as-level"` -- AQA's genuinely separate,
 *    standalone AS Level qualification. This is NOT a 9701 stage split, so
 *    these resources correctly never set `stage` (validate-academic-
 *    content.mjs's stage-consistency check rejects `stage` on a resource
 *    whose syllabusTopics aren't themselves stage-tagged, which AQA's
 *    as-level taxonomy never is) -- yet they still declare
 *    `level: ["a-levels"]`, per LEVEL_FOR_QUALIFICATION's deliberate
 *    reuse of that bucket (src/utils/academic/index.ts). Before this fix,
 *    resourceLevelLabel had no way to see (2) at all and fell through to
 *    the generic branch, rendering every AQA AS-only resource as
 *    "A LEVELS" everywhere this label appears (resource cards, related
 *    resources, board/qualification hub pages). Found live on
 *    /boards/aqa/as-level/business/, 2026-09-08.
 *
 * Only 'a-levels' is stage-sensitive; every other level displays as before.
 */
/**
 * D-450 (owner decision OQ-4, 15 Nov 2026) -- boards whose AS is a SEPARATE
 * qualification with its own code (AQA since 2015: AS Chemistry 7404 /
 * A-level 7405, AS Biology 7401 / A-level 7402). On those boards `stage: AS`
 * on an `a-level` resource means "the AS-content part of the linear A
 * Level", not the AS Level qualification, so it must not share the
 * "AS LEVEL" label and search-filter value with the standalone AQA AS
 * resources (qualifications: ["as-level"]). Cambridge, OxfordAQA and Pearson
 * International A Levels certificate the AS from the same syllabus
 * (matrix.ts, OxfordAQA note), so "AS LEVEL" stays correct there.
 */
export const SEPARATE_AS_QUALIFICATION_BOARDS: readonly string[] = ['aqa'];

export const resourceLevelLabel = (
  levels: readonly string[],
  stage?: 'AS' | 'A',
  qualifications?: readonly string[],
  boards?: readonly string[],
): string => {
  const effectiveStage = stage ?? (qualifications?.includes('as-level') ? 'AS' : undefined);
  const asContentOfALevel = stage === 'AS' && !qualifications?.includes('as-level')
    && !!boards?.some((b) => SEPARATE_AS_QUALIFICATION_BOARDS.includes(b));
  return levels
    .map((l) => {
      if (l === 'a-levels' && asContentOfALevel) return 'A LEVEL (AS CONTENT)';
      if (l === 'a-levels' && effectiveStage === 'AS') return 'AS LEVEL';
      if (l === 'a-levels' && effectiveStage === 'A') return 'A LEVEL';
      return l.replace(/-/g, ' ').toUpperCase();
    })
    .join(', ');
};

/**
 * D-397: the reading form of resourceLevelLabel() for visible card text
 * ("IGCSE, O Level" rather than "IGCSE, O LEVELS"). resourceLevelLabel()
 * itself is unchanged because its output is also the Pagefind "Level"
 * filter value, checked by validate-rendered-academic-labels.mjs.
 */
const LEVEL_DISPLAY: Record<string, string> = {
  'O LEVELS': 'O Level',
  'A LEVELS': 'A Level',
  'A LEVEL': 'A Level',
  'AS LEVEL': 'AS Level',
  'A LEVEL (AS CONTENT)': 'A Level (AS content)',
  FOUNDATION: 'Foundation',
};
export const levelDisplay = (label: string): string =>
  label
    .split(', ')
    .map((part) => LEVEL_DISPLAY[part] ?? part)
    .join(', ');
