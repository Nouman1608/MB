/**
 * Flashcards (D-438) -- the data model.
 *
 * WHAT A DECK IS. One deck per course (board x qualification x subject), keyed
 * to the CURRENT syllabus series in src/data/academic/syllabus-topics.ts. Every
 * card belongs to exactly one subtopic of that syllabus (or, where the syllabus
 * itemises no subtopics, to one topic), so the topic and subtopic pages can
 * filter cards exactly, the same way resources map to `syllabusTopics`.
 *
 * WHERE CARDS COME FROM ("hybrid", owner decision 5 Nov 2026):
 *   'revision-notes'  The card restates a term/definition already published in
 *                     one of the course's revision notes. `source` names that
 *                     resource, and scripts/flashcard-candidates.mjs is the
 *                     tool that finds such candidates. The card is still read
 *                     and placed on a subtopic by a person.
 *   'authored'        Written for the deck. Most cards, because about three in
 *                     four revision-notes pages are prose with no term/
 *                     definition pattern to extract.
 *
 * REVIEW. A deck says plainly that it has not been reviewed as a deck by a
 * subject teacher until `deckReview` is filled in -- and that is never filled
 * in advance (same rule as DiagnosticSet.setReview).
 *
 * TEXT. Fronts and backs are PLAIN TEXT rendered with textContent, never HTML,
 * so no card can inject markup. Use Unicode for chemistry and maths (H₂O, CO₂,
 * Fe³⁺, →, ⇌, ≥). A '\n' becomes a line break (the card uses white-space:
 * pre-line). scripts/validate-flashcards.mjs enforces all of this.
 */

export interface Flashcard {
  /**
   * Stable id within the deck, e.g. '2.4-1' (subtopic number, card number).
   * Saved progress in the browser is keyed by it, so never renumber an
   * existing card -- append a new number instead.
   */
  id: string;
  /** Topic slug from syllabus-topics.ts. */
  topic: string;
  /** Subtopic slug from syllabus-topics.ts; required whenever the topic has subtopics. */
  subtopic?: string;
  /** The prompt: a term, a question or a cue. Short. */
  front: string;
  /** The answer, as a student should be able to say it. */
  back: string;
  /**
   * Tiered decks only: 'upper' marks a card on content for the UPPER tier of
   * the deck's `tierScheme` only (Extended/Supplement, Higher tier, HL or MYP
   * Extended), so students on the lower tier can hide it. On a Core/Extended
   * syllabus it must not be set on a subtopic whose outcomes are all Core.
   */
  tier?: 'upper';
  origin: 'authored' | 'revision-notes';
  /** Resource id (file name without .md) the card restates; required when origin is 'revision-notes'. */
  source?: string;
}

export type TierScheme = 'core-extended' | 'foundation-higher' | 'sl-hl' | 'standard-extended';

/** Words shown for each scheme: the filter ("Core only") and the badge on an upper-tier card. */
export const TIER_LABELS: Record<TierScheme, { lower: string; upper: string; badge: string }> = {
  'core-extended': { lower: 'Core', upper: 'Extended (Supplement)', badge: 'Extended' },
  'foundation-higher': { lower: 'Foundation', upper: 'Higher tier', badge: 'Higher' },
  'sl-hl': { lower: 'SL', upper: 'HL', badge: 'HL' },
  'standard-extended': { lower: 'Standard', upper: 'Extended', badge: 'Extended' },
};

export interface FlashcardDeck {
  boardSlug: string;
  qualificationSlug: string;
  subjectSlug: string;
  syllabusCode: string;
  /** Must equal the current SyllabusVersion.syllabusSeries -- a deck never silently spans series. */
  syllabusSeries: string;
  /**
   * Set when the syllabus has two tiers and some cards are upper-tier only:
   *   'core-extended'      Cambridge IGCSE Core / Extended (Supplement)
   *   'foundation-higher'  GCSE / International GCSE Foundation / Higher tier
   *   'sl-hl'              IB Diploma SL / HL
   *   'standard-extended'  IB MYP Mathematics standard / extended
   * Requires the SyllabusVersion to be `tiered`.
   */
  tierScheme?: TierScheme;
  /** Author profile slug (src/content/authors/). */
  author: string;
  /** ISO date the deck was published or last materially changed. */
  updated: string;
  /** Filled ONLY after a named subject teacher has reviewed the whole deck. */
  deckReview?: { reviewerSlug: string; reviewedOn: string };
  cards: readonly Flashcard[];
}
