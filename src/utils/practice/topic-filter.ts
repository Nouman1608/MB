/**
 * B9 (2026-09-27) -- "Retest this topic": the practice page's topic filter.
 *
 * /practice/{code}/?topic=<key> shows only the questions tagged with that
 * topic. A key is either
 *   - a subtopic key exactly as the question bank carries it
 *     (`{topicSlug}/{subtopicSlug}`, ClientQuestion.topics[].key), or
 *   - a topic slug (`{topicSlug}`), matching every subtopic of that topic --
 *     the level the 10-minute diagnostics report results at.
 * Only keys that occur in the code's own bank are valid; anything else is
 * ignored and the page shows the whole bank.
 *
 * `tier=core` (tiered syllabuses only) additionally leaves out Extended-only
 * questions (tier 'supplement'), the same rule the page's Core diagnostic
 * pool uses. Questions with no tier tag stay in, as they do there.
 *
 * Review fix (27 Sep 2026): many tiered banks carry no tier tags at all
 * (every 0610 and 0625 question; 28 of 115 on 0580), so `tier=core` would
 * remove nothing while the page said "Core only". The Core filter therefore
 * only applies to a topic that has at least one Extended-only question
 * (`coreFilterApplies`); retest links add tier=core only then, the page
 * ignores tier=core otherwise, and when the Core pool still holds untagged
 * questions the page says so (`coreFilterNote`) instead of "Core only".
 *
 * Pure, so it can be unit-tested with plain node
 * (src/utils/practice/__tests__/topic-filter.test.mjs). The practice page's
 * inline script cannot import modules, so it carries a one-line copy of
 * `questionMatchesTopic`; that test checks the copy has not drifted.
 */

export interface TopicTaggedQuestion {
  topics: readonly { key: string; label: string }[];
  tier?: 'core' | 'supplement' | 'both';
}

export interface TopicFilterEntry {
  label: string;
  /** Questions in the bank on this topic. */
  count: number;
  /** Of those, questions a Core candidate is shown (tier is not 'supplement'). */
  coreCount: number;
  /** Questions tagged Extended-only (tier 'supplement'). */
  supplementCount: number;
  /** Questions with no tier tag (kept in a Core pool, but not known to be Core). */
  untaggedCount: number;
}

export function questionMatchesTopic(q: TopicTaggedQuestion, key: string): boolean {
  return q.topics.some((t) => t.key === key || t.key.indexOf(key + '/') === 0);
}

const isCoreSafe = (q: TopicTaggedQuestion) => q.tier !== 'supplement';

/**
 * Every valid filter key for a bank, with a display label and counts.
 * `topicNames` maps a topic slug to its syllabus name (from
 * syllabus-topics.ts); without one the slug is shown with spaces.
 */
export function topicFilterIndex(
  questions: readonly TopicTaggedQuestion[],
  topicNames: Readonly<Record<string, string>> = {},
): Record<string, TopicFilterEntry> {
  const out: Record<string, TopicFilterEntry> = {};
  const add = (key: string, label: string, q: TopicTaggedQuestion, seen: Set<string>) => {
    if (seen.has(key)) return; // count each question once per key
    seen.add(key);
    const e = Object.prototype.hasOwnProperty.call(out, key) ? out[key] : (out[key] = { label, count: 0, coreCount: 0, supplementCount: 0, untaggedCount: 0 });
    e.count++;
    if (isCoreSafe(q)) e.coreCount++;
    if (q.tier === 'supplement') e.supplementCount++;
    if (!q.tier) e.untaggedCount++;
  };
  for (const q of questions) {
    const seen = new Set<string>();
    for (const t of q.topics) {
      const slash = t.key.indexOf('/');
      if (slash <= 0) continue; // not a topic/subtopic key
      const topicSlug = t.key.slice(0, slash);
      add(t.key, t.label, q, seen);
      add(topicSlug, topicNames[topicSlug] ?? topicSlug.replace(/-/g, ' '), q, seen);
    }
  }
  return out;
}

/** The key to filter by, or null when the parameter is missing or not a key of this bank. */
export function resolveTopicFilter(param: string | null | undefined, index: Readonly<Record<string, unknown>>): string | null {
  if (typeof param !== 'string' || param === '') return null;
  return Object.prototype.hasOwnProperty.call(index, param) ? param : null;
}

/**
 * Whether "Core only" means anything for this topic: it must have at least
 * one question tagged Extended-only for tier=core to leave anything out.
 */
export function coreFilterApplies(entry: Pick<TopicFilterEntry, 'supplementCount'> | undefined): boolean {
  return !!entry && entry.supplementCount > 0;
}

/**
 * The banner's wording for a Core-filtered pool: "Core only" when every
 * question left is tagged Core (or Core and Extended); otherwise it says how
 * many are not yet tagged, rather than claiming they are Core.
 * D-370 follow-up: `names` gives the syllabus's own tier names
 * (question-tier.ts TIER_NAMES), so a Foundation/Higher course reads
 * "Foundation only" / "Higher-only questions left out; ...", never Core.
 */
export function coreFilterNote(untaggedInPool: number, names: { lower: string; upper: string } = { lower: 'Core', upper: 'Extended' }): string {
  return untaggedInPool > 0
    ? `${names.upper}-only questions left out; ${untaggedInPool} not yet tagged ${names.lower} or ${names.upper}`
    : `${names.lower} only`;
}

export function questionsForTopic<Q extends TopicTaggedQuestion>(questions: readonly Q[], key: string, opts: { coreOnly?: boolean } = {}): Q[] {
  return questions.filter((q) => questionMatchesTopic(q, key) && (!opts.coreOnly || isCoreSafe(q)));
}

export function retestPath(code: string, key: string, opts: { coreOnly?: boolean } = {}): string {
  return `/practice/${code}/?topic=${encodeURIComponent(key)}${opts.coreOnly ? '&tier=core' : ''}`;
}

/** A retest link is only worth offering when it opens more than the one question just answered. */
export const RETEST_MIN_QUESTIONS = 2;

/**
 * M9 (27 Sep 2026) -- the topic a 10-minute diagnostic reports a question
 * under (its result line, recommendations and "Retest this topic" link).
 *
 * A question's topic tags are its practice FILE's syllabusTopics, so a file
 * written across two topics tags every question with both, and the first
 * tag used to decide. That reported the 0580 Extended set's histogram
 * question (from the statistics-and-probability Extended file) as
 * Probability, with a Probability retest link. A set may name the topic for
 * such a question (DiagnosticSet.topicOverrides); the override must be one
 * of the question's own mapped topics, otherwise this returns null and the
 * caller fails the build. Without an override the first mapped topic is
 * used, as before; null when the question has no topic tag.
 */
export function reportTopicSlug(q: Pick<TopicTaggedQuestion, 'topics'>, override?: string): string | null {
  const slugs = q.topics.map((t) => t.key.split('/')[0]).filter((s) => s !== '');
  if (override !== undefined) return slugs.includes(override) ? override : null;
  return slugs[0] ?? null;
}
