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

/** Combine the subtopic-derived tier with an explicit label ('supplement' wins; a part-level label makes an untagged or core question 'both'). */
export function combineTier(
  derived: 'core' | 'supplement' | 'both' | undefined,
  explicit: ExplicitTier,
): 'core' | 'supplement' | 'both' | undefined {
  if (explicit === 'supplement') return 'supplement';
  if (explicit === 'both') return derived === 'supplement' ? 'supplement' : 'both';
  return derived;
}
