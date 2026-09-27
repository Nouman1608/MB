/**
 * B16 (27 Sep 2026) -- per-question tier from an explicit label in the
 * question text.
 *
 * A practice question's tier is otherwise derived from the syllabus
 * subtopics its FILE is mapped to ("hardest tier wins", client-questions.ts).
 * Most IGCSE subtopics hold both Core and Supplement outcomes, so a question
 * that tests only Supplement content was tagged 'both' and shown to Core
 * students. Pages already label such questions item by item, checked
 * against the syllabus (D-339, D-358), e.g.
 *
 *   **4.** *(0620 Extended, 5070 required)* Define an acid ...
 *   **3.** *(Extended)* Find the length of the arc ...
 *
 * This reads that label. Rules (deliberately narrow, never a guess):
 * - A label at the START of the question (optionally after a "(a)" part
 *   marker) makes the whole question Extended-only: 'supplement'.
 * - A label naming a different syllabus code is ignored (a 0620 label means
 *   nothing to another code's bank).
 * - A full label that appears only LATER in the question (on one part)
 *   means the question mixes Core and Extended parts: 'both'.
 * - Partial notes such as "*(The sign of ΔH is 0620 Extended, ...)*" are
 *   not full labels and are ignored, so the derived tier stands.
 * Only ever called for tiered syllabuses.
 */

/** A full Extended label: *(Extended)*, *(0620 Extended, 5070 required)*, *(Extended, E1.13)*, *(0620 Extended only, 5070 required)*. */
const LABEL = /\*\((?:(\d{4}) )?Extended(?: only)?(?:, (?:\d{4} required|[CE]\d+(?:\.\d+)*))?\)\*/g;

/** Strip the leading "**n.**" number and an optional "**(a)**" / "(a)" part marker. */
function stripLead(md: string): string {
  return md
    .replace(/^\s*\*\*\d+\.\*\*\s*/, '')
    .replace(/^\s*\*\*\d+\.\s+(?=\S)/, '**')
    .replace(/^\s*(?:\*\*)?\([a-z]\)(?:\*\*)?\s*/, '');
}

export type ExplicitTier = 'supplement' | 'both' | undefined;

export function explicitTierFromLabel(questionMarkdown: string, code: string): ExplicitTier {
  const md = stripLead(questionMarkdown);
  let first = true;
  let sawLater = false;
  LABEL.lastIndex = 0;
  for (const m of md.matchAll(LABEL)) {
    const labelCode = m[1];
    const applies = !labelCode || labelCode === code;
    if (applies && m.index === 0 && first) return 'supplement';
    if (applies) sawLater = true;
    first = false;
  }
  return sawLater ? 'both' : undefined;
}

/**
 * D-370 follow-up (28 Sep 2026) -- tier NAMES by syllabus.
 *
 * The tier machinery was built for Cambridge IGCSE (Core / Extended, data
 * values 'core' / 'supplement' / 'both' and the page's tier=core and
 * 'core' / 'extended' choice values). AQA GCSE and Pearson Edexcel
 * International GCSE are tiered Foundation / Higher instead. The data values
 * are unchanged (analytics and URLs keep them); only the words shown to
 * students are mapped here: 'core' means the lower tier (Core or
 * Foundation), 'supplement' the upper-tier-only content (Extended or Higher).
 * A tiered syllabus with no scheme here gets no tier wording at all (the
 * practice page fails the build rather than guess).
 */
export type TierScheme = 'core-extended' | 'foundation-higher';
export interface TierNames { lower: string; upper: string }
export const TIER_NAMES: Readonly<Record<TierScheme, TierNames>> = {
  'core-extended': { lower: 'Core', upper: 'Extended' },
  'foundation-higher': { lower: 'Foundation', upper: 'Higher' },
};

/** Tier scheme of a tiered syllabus, by board and qualification; null when not known. */
export function tierSchemeFor(boardSlug: string, qualificationSlug: string): TierScheme | null {
  if (boardSlug === 'cambridge' && qualificationSlug === 'igcse') return 'core-extended';
  if ((boardSlug === 'aqa' || boardSlug === 'ocr') && qualificationSlug === 'gcse') return 'foundation-higher';
  if (boardSlug === 'edexcel' && qualificationSlug === 'igcse') return 'foundation-higher';
  return null;
}

/**
 * D-370 follow-up -- per-question "Higher tier only" labels, for
 * Foundation/Higher syllabuses only (AQA marks such content "(HT only)" in
 * its specifications; Pearson's 4MA1 lists it under "Higher Tier only" or in
 * the Higher Tier content alone). Practice pages label Higher-only questions
 * and parts item by item, in these forms (emphasis markers are ignored):
 *
 *   **5.** (Higher tier only) A light meter reads ...
 *   **7.** **(Higher, A18)** Solve the quadratic equation ...
 *   **9.** (non-calculator, **Higher tier only**) Points A, B, C and D ...
 *   **(b)** **Higher tier only.** Triangle T has vertices ...
 *
 * Same position rule as the Extended reader, but narrower: only a label
 * straight after the question number (before any part) makes the whole
 * question Higher-only ('supplement'); a label on a part, including part
 * (a), means the question mixes tiers ('both'). Anything else ("(Both
 * tiers; (b) and (c) Higher tier only)", "(Higher extends to circles)") is
 * not a label.
 */
export const HIGHER_LABEL = /\((?:(?:non-calculator|calculator allowed|calculator-free), )?(?:Higher(?: [Tt]ier)?(?: only)?|HT only)(?:, [A-Z]\d+[a-z]?)?\)|(?<![\w(])Higher tier only\.(?=\s)/g;

export function explicitHigherTierFromLabel(questionMarkdown: string): ExplicitTier {
  const md = questionMarkdown.replace(/\*/g, '').replace(/^\s*\d+\.\s*/, '');
  HIGHER_LABEL.lastIndex = 0;
  let sawAny = false;
  for (const m of md.matchAll(HIGHER_LABEL)) {
    if (m.index === 0) return 'supplement';
    sawAny = true;
  }
  return sawAny ? 'both' : undefined;
}

/**
 * Practice files on Foundation/Higher syllabuses whose questions have been
 * checked item by item against the board's specification (D-370 follow-up,
 * 28 Sep 2026: AQA 8300/8461/8462/8463 specification PDFs from
 * filestore.aqa.org.uk, Pearson 4MA1 specification Issue 2 from
 * qualifications.pearson.com). In these files every Higher-only question or
 * part carries a label, so an unlabelled question is on content both tiers
 * study ('both'); it is never called Foundation-only. A file not listed here
 * keeps undefined for unlabelled questions ("not yet tagged"), so a new
 * practice file is not assumed checked. A file must be re-checked before it
 * is added.
 */
export const HIGHER_LABELS_CHECKED: ReadonlySet<string> = new Set([
  // 4MA1
  'edexcel-igcse-mathematics-algebraic-manipulation-practice',
  'edexcel-igcse-mathematics-number-practice',
  'edexcel-igcse-maths-4ma1-geometry-and-trigonometry-practice',
  'edexcel-igcse-maths-4ma1-sequences-functions-and-graphs-practice',
  'edexcel-igcse-maths-4ma1-statistics-and-probability-practice',
  'edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry-practice',
  // 8300
  'aqa-gcse-mathematics-algebra-practice',
  'aqa-gcse-mathematics-number-practice',
  'aqa-gcse-maths-8300-geometry-and-measures-practice',
  'aqa-gcse-maths-8300-probability-practice',
  'aqa-gcse-maths-8300-ratio-proportion-and-rates-of-change-practice',
  'aqa-gcse-maths-8300-statistics-practice',
  // 8461
  'aqa-gcse-biology-8461-bioenergetics-practice',
  'aqa-gcse-biology-8461-ecology-practice',
  'aqa-gcse-biology-8461-homeostasis-and-response-practice',
  'aqa-gcse-biology-8461-infection-and-response-practice',
  'aqa-gcse-biology-8461-inheritance-variation-and-evolution-practice',
  'aqa-gcse-biology-8461-key-ideas-practice',
  'aqa-gcse-biology-cell-biology-practice',
  'aqa-gcse-biology-enzymes-digestive-practice',
  // 8462
  'aqa-gcse-chemistry-8462-chemical-analysis-practice',
  'aqa-gcse-chemistry-8462-chemical-changes-practice',
  'aqa-gcse-chemistry-8462-chemistry-of-the-atmosphere-practice',
  'aqa-gcse-chemistry-8462-energy-changes-practice',
  'aqa-gcse-chemistry-8462-key-ideas-practice',
  'aqa-gcse-chemistry-8462-organic-chemistry-practice',
  'aqa-gcse-chemistry-8462-quantitative-chemistry-practice',
  'aqa-gcse-chemistry-8462-the-rate-and-extent-of-chemical-change-practice',
  'aqa-gcse-chemistry-8462-using-resources-practice',
  'aqa-gcse-chemistry-atomic-structure-practice',
  'aqa-gcse-chemistry-ionic-bonding-practice',
  // 8463
  'aqa-gcse-physics-8463-atomic-structure-practice',
  'aqa-gcse-physics-8463-electricity-practice',
  'aqa-gcse-physics-8463-forces-practice',
  'aqa-gcse-physics-8463-magnetism-and-electromagnetism-practice',
  'aqa-gcse-physics-8463-particle-model-of-matter-practice',
  'aqa-gcse-physics-8463-space-physics-practice',
  'aqa-gcse-physics-8463-waves-practice',
  'aqa-gcse-physics-energy-changes-practice',
  'aqa-gcse-physics-energy-practice',
  'aqa-gcse-physics-national-and-global-energy-resources-practice',
]);

/** Tier of a question on a Foundation/Higher syllabus: its Higher label, else 'both' in a checked file, else undefined. */
export function foundationHigherTier(questionMarkdown: string, resourceSlug: string): ExplicitTier {
  return explicitHigherTierFromLabel(questionMarkdown) ?? (HIGHER_LABELS_CHECKED.has(resourceSlug) ? 'both' : undefined);
}

/** Combine the subtopic-derived tier with an explicit label ('supplement' wins; a part-level label makes an untagged or core question 'both'). */
export function combineTier(
  derived: 'core' | 'supplement' | 'both' | undefined,
  explicit: ExplicitTier,
): 'core' | 'supplement' | 'both' | undefined {
  if (explicit === 'supplement') return 'supplement';
  if (explicit === 'both') return derived === 'supplement' ? 'supplement' : 'both';
  return derived;
}
