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
 *
 * Post-audit remediation (4 Oct 2026): the calculator tag may also come
 * AFTER the tier word inside the same brackets ("(Higher, non-calculator)",
 * "(Higher, calculator)"), and a separate calculator tag may come BEFORE the
 * label ("(non-calculator) (Higher)"). Both forms appear in the D-383 AQA
 * 8300 pages and both mean the whole question is Higher-only; before this fix
 * the first was not read at all and the second was read as a part label
 * ('both'). Only the exact calculator wordings below are accepted, so prose
 * such as "(Higher extends to circles)" is still not a label.
 */
const CALC_TAG = '(?:non-calculator|calculator(?: allowed)?|calculator-free)';
export const HIGHER_LABEL = new RegExp(
  `\\((?:${CALC_TAG}, )?(?:Higher(?: [Tt]ier)?(?: only)?|HT only)(?:, [A-Z]\\d+[a-z]?)?(?:, ${CALC_TAG})?\\)|(?<![\\w(])Higher tier only\\.(?=\\s)`,
  'g',
);
/** A standalone calculator tag at the very start of a question, e.g. "(non-calculator)". */
const LEADING_CALC_TAG = new RegExp(`^\\(${CALC_TAG}\\)[ \\t]*`);

export function explicitHigherTierFromLabel(questionMarkdown: string): ExplicitTier {
  const md = questionMarkdown.replace(/\*/g, '').replace(/^\s*\d+\.\s*/, '').replace(LEADING_CALC_TAG, '');
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
 *
 * Entries marked 2026-10-04 (post-audit remediation, decision log D-386):
 * the 28 practice files added by D-382 to D-384 were checked question by
 * question against the same official specifications (Pearson 4MA1 Issue 2;
 * AQA 8300 v1.0, 8461 and 8462 from filestore.aqa.org.uk), downloaded on
 * 4 Oct 2026. Eight questions had their label moved from the whole question
 * to the Higher-only parts (4MA1 simultaneous equations Q9 and Q12, use of
 * symbols Q11, percentages Q7; 8300 measures Q10, sequences Q12; 8461 cell
 * structure Q12), and the reader above was fixed for the "(Higher,
 * non-calculator)" and "(non-calculator) (Higher)" forms. Every other label
 * matched the specification. The per-question review is recorded in
 * docs/reports/academic-review/tier-label-review-2026-10-04.md.
 */
export const HIGHER_LABELS_CHECKED: ReadonlySet<string> = new Set([
  // 4MA1
  'edexcel-igcse-mathematics-number-practice',
  'edexcel-igcse-maths-4ma1-geometry-and-trigonometry-practice',
  'edexcel-igcse-maths-4ma1-sequences-functions-and-graphs-practice',
  'edexcel-igcse-maths-4ma1-statistics-and-probability-practice',
  'edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry-practice',
  'edexcel-igcse-maths-4ma1-applying-number-and-calculators-practice',  // 2026-10-04
  'edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form-practice',  // 2026-10-04
  'edexcel-igcse-maths-4ma1-expressions-formulae-and-linear-equations-practice',  // 2026-10-04
  'edexcel-igcse-maths-4ma1-fractions-and-decimals-practice',  // 2026-10-04
  'edexcel-igcse-maths-4ma1-inequalities-practice',  // 2026-10-04
  'edexcel-igcse-maths-4ma1-integers-powers-and-roots-practice',  // 2026-10-04
  'edexcel-igcse-maths-4ma1-percentages-ratio-and-proportion-practice',  // 2026-10-04
  'edexcel-igcse-maths-4ma1-proportion-practice',  // 2026-10-04
  'edexcel-igcse-maths-4ma1-quadratic-equations-practice',  // 2026-10-04
  'edexcel-igcse-maths-4ma1-set-language-and-notation-practice',  // 2026-10-04
  'edexcel-igcse-maths-4ma1-simultaneous-linear-equations-practice',  // 2026-10-04
  'edexcel-igcse-maths-4ma1-use-of-symbols-and-algebraic-manipulation-practice',  // 2026-10-04
  // 2026-11-18 (D-500): new subtopic files checked against the 4MA1 specification (Issue 2):
  // vectors labelled (5.1 is Higher only), four labels added or moved to parts, one removed.
  'edexcel-igcse-mathematics-4ma1-algebraic-manipulation-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-angles-lines-and-triangles-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-applying-number-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-calculus-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-circle-properties-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-construction-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-decimals-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-degree-of-accuracy-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-electronic-calculators-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-expressions-and-formulae-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-fractions-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-function-notation-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-geometrical-reasoning-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-graphical-representation-of-data-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-graphs-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-integers-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-linear-equations-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-measures-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-percentages-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-polygons-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-powers-and-roots-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-probability-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-ratio-and-proportion-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-sequences-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-standard-form-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-statistical-measures-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-symmetry-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-transformation-geometry-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-trigonometry-and-pythagoras-theorem-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-use-of-symbols-practice',  // 2026-11-18
  'edexcel-igcse-mathematics-4ma1-mensuration-of-2d-shapes-practice',  // 2026-11-20
  'edexcel-igcse-mathematics-4ma1-3d-shapes-and-volume-practice',  // 2026-11-20
  'edexcel-igcse-mathematics-4ma1-similarity-practice',  // 2026-11-20
  'edexcel-igcse-mathematics-4ma1-vectors-practice',  // 2026-11-18
  // 8300
  'aqa-gcse-mathematics-algebra-practice',
  'aqa-gcse-mathematics-number-practice',
  'aqa-gcse-maths-8300-geometry-and-measures-practice',
  'aqa-gcse-maths-8300-probability-practice',
  'aqa-gcse-maths-8300-ratio-proportion-and-rates-of-change-practice',
  'aqa-gcse-maths-8300-statistics-practice',
  'aqa-gcse-maths-8300-fractions-decimals-and-percentages-practice',  // 2026-10-04
  'aqa-gcse-maths-8300-graphs-practice',  // 2026-10-04
  'aqa-gcse-maths-8300-measures-and-accuracy-practice',  // 2026-10-04
  'aqa-gcse-maths-8300-notation-vocabulary-and-manipulation-practice',  // 2026-10-04
  'aqa-gcse-maths-8300-sequences-practice',  // 2026-10-04
  'aqa-gcse-maths-8300-solving-equations-and-inequalities-practice',  // 2026-10-04
  'aqa-gcse-maths-8300-structure-and-calculation-practice',  // 2026-10-04
  // 8461
  'aqa-gcse-biology-8461-bioenergetics-practice',
  'aqa-gcse-biology-8461-ecology-practice',
  'aqa-gcse-biology-8461-homeostasis-and-response-practice',
  'aqa-gcse-biology-8461-infection-and-response-practice',
  'aqa-gcse-biology-8461-inheritance-variation-and-evolution-practice',
  'aqa-gcse-biology-8461-key-ideas-practice',
  'aqa-gcse-biology-cell-biology-practice',
  'aqa-gcse-biology-enzymes-digestive-practice',
  'aqa-gcse-biology-8461-cell-division-practice',  // 2026-10-04
  'aqa-gcse-biology-8461-cell-structure-practice',  // 2026-10-04
  'aqa-gcse-biology-8461-principles-of-organisation-heart-and-blood-vessels-practice',  // 2026-10-04
  'aqa-gcse-biology-8461-transport-in-cells-practice',  // 2026-10-04
  // 2026-11-08: 4.2.2.6-4.2.2.8 and 4.2.3.1-4.2.3.2 carry no (HT only) statement in the
  // 8461 specification, so every question in these two files is both tiers.
  'aqa-gcse-biology-8461-health-lifestyle-and-cancer-practice',  // 2026-11-08
  'aqa-gcse-biology-8461-plant-tissues-and-organ-system-practice',  // 2026-11-08
  // 2026-11-18 (D-500): new subtopic files, each checked question by question against the 8461 specification.
  'aqa-gcse-biology-8461-adaptations-interdependence-and-competition-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-biodiversity-and-the-effect-of-human-interaction-on-ecosystems-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-blood-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-cancer-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-classification-of-living-organisms-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-communicable-diseases-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-coronary-heart-disease-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-food-production-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-health-issues-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-homeostasis-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-hormonal-coordination-in-humans-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-monoclonal-antibodies-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-organisation-of-an-ecosystem-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-photosynthesis-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-plant-disease-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-plant-hormones-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-plant-organ-system-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-plant-tissues-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-principles-of-organisation-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-reproduction-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-respiration-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-the-development-of-understanding-of-genetics-and-evolution-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-the-effect-of-lifestyle-on-some-non-communicable-diseases-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-the-heart-and-blood-vessels-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-the-human-nervous-system-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-trophic-levels-in-an-ecosystem-practice',  // 2026-11-18
  'aqa-gcse-biology-8461-variation-and-evolution-practice',  // 2026-11-18
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
  'aqa-gcse-chemistry-8462-atomic-structure-practice',
  'aqa-gcse-chemistry-ionic-bonding-practice',
  'aqa-gcse-chemistry-8462-atomic-structure-practice',  // 2026-10-04
  'aqa-gcse-chemistry-8462-chemical-bonds-and-ionic-compounds-practice',  // 2026-10-04
  'aqa-gcse-chemistry-8462-covalent-and-metallic-bonding-practice',  // 2026-10-04
  'aqa-gcse-chemistry-8462-properties-of-transition-metals-practice',  // 2026-10-04
  'aqa-gcse-chemistry-8462-the-periodic-table-practice',  // 2026-10-04
  // 2026-11-18 (D-500): new subtopic files checked against the 8462 specification.
  'aqa-gcse-chemistry-8462-chemical-bonds-practice',  // 2026-11-18
  'aqa-gcse-chemistry-8462-covalent-bonding-practice',  // 2026-11-18
  'aqa-gcse-chemistry-8462-ionic-compounds-practice',  // 2026-11-18
  'aqa-gcse-chemistry-8462-metallic-bonding-practice',  // 2026-11-18
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
  // 2026-11-18 (D-500): new subtopic files checked against the 8463 specification; momentum and
  // induced-potential labels added, five whole-question labels moved onto their Higher parts.
  'aqa-gcse-physics-8463-atoms-and-isotopes-aqa-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-atoms-and-nuclear-radiation-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-black-body-radiation-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-changes-of-state-and-the-particle-model-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-current-potential-difference-and-resistance-aqa-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-domestic-uses-and-safety-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-electromagnetic-waves-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-energy-transfers-aqa-electricity-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-forces-and-elasticity-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-forces-and-motion-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-forces-and-their-interactions-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-hazards-and-uses-of-radioactive-emissions-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-induced-potential-transformers-and-the-national-grid-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-internal-energy-and-energy-transfers-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-moments-levers-and-gears-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-momentum-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-nuclear-fission-and-fusion-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-particle-model-and-pressure-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-permanent-and-induced-magnetism-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-pressure-and-pressure-differences-in-fluids-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-red-shift-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-series-and-parallel-circuits-aqa-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-solar-system-orbital-motions-satellites-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-static-electricity-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-the-motor-effect-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-waves-in-air-fluids-and-solids-practice',  // 2026-11-18
  'aqa-gcse-physics-8463-work-done-and-energy-transfer-aqa-practice',  // 2026-11-18
  'aqa-gcse-chemistry-8462-amount-of-substance-and-masses-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-carbon-compounds-as-fuels-and-feedstock-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-carbon-dioxide-and-methane-as-greenhouse-gases-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-chemical-cells-and-fuel-cells-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-chemical-measurements-conservation-of-mass-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-common-atmospheric-pollutants-and-their-sources-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-concentrations-in-mol-dm3-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-diamond-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-electrolysis-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-exothermic-and-endothermic-reactions-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-giant-covalent-structures-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-graphene-and-fullerenes-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-graphite-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-identification-of-common-gases-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-identification-of-ions-by-chemical-and-spectroscopic-means-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-life-cycle-assessment-and-recycling-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-metals-as-conductors-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-polymers-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-properties-of-ionic-compounds-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-properties-of-metals-and-alloys-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-properties-of-small-molecules-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-purity-formulations-and-chromatography-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-rate-of-reaction-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-reactions-of-acids-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-reactions-of-alkenes-and-alcohols-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-reactivity-of-metals-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-reversible-reactions-and-dynamic-equilibrium-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-sizes-of-particles-and-their-properties-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-state-symbols-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-synthetic-and-naturally-occurring-polymers-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-the-composition-and-evolution-of-the-earths-atmosphere-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-the-haber-process-and-the-use-of-npk-fertilisers-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-three-states-of-matter-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-uses-of-nanoparticles-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-using-materials-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-using-the-earths-resources-and-obtaining-potable-water-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-volumes-of-gases-practice',  // 2026-11-20
  'aqa-gcse-chemistry-8462-yield-and-atom-economy-practice',  // 2026-11-20
  'aqa-gcse-maths-8300-mensuration-and-calculation-practice',  // 2026-11-20
  'aqa-gcse-maths-8300-properties-and-constructions-practice',  // 2026-11-20
  'aqa-gcse-maths-8300-vectors-practice',  // 2026-11-20
]);

/**
 * Files in a Foundation/Higher bank that are NOT in HIGHER_LABELS_CHECKED.
 * Any result is a build-blocking gap: an unchecked file's unlabelled
 * questions would otherwise show as "not yet tagged". Pure, so the guard
 * itself is unit tested with synthetic input (question-tier.test.mjs).
 */
export function uncheckedTieredFiles(
  questions: ReadonlyArray<{ resourceSlug: string }>,
  checked: ReadonlySet<string> = HIGHER_LABELS_CHECKED,
): string[] {
  return [...new Set(questions.map((q) => q.resourceSlug))].filter((slug) => !checked.has(slug)).sort();
}

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
