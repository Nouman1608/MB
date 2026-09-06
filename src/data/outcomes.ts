/**
 * Conversion & Trust round (2026-09-06, D-144).
 *
 * Student outcomes, case studies and testimonials.
 *
 * THIS ARRAY IS INTENTIONALLY EMPTY. As of 2026-09-06 Marlbridge holds no
 * testimonial, case study or results record that has been (a) collected
 * from a real, identified student or parent and (b) given explicit
 * permission to publish. The programme record has carried "Testimonials:
 * none exist yet" since August 2026 and nothing has changed that.
 *
 * The rendering component (components/sections/StudentOutcomes.astro)
 * therefore renders NOTHING AT ALL while this array is empty -- no heading,
 * no "coming soon", no sample card, no placeholder. A visible empty state
 * would advertise the absence of evidence on the page that most needs it.
 *
 * TO PUBLISH A REAL ONE, all of the following must be true first:
 *   1. The student or parent has given written permission to publish, and
 *      that permission is on file.
 *   2. Anyone under 18 has parent/guardian consent, not their own.
 *   3. Every factual element -- grade, timeframe, qualification, board --
 *      is one Marlbridge can evidence if challenged.
 *   4. `consentOnFile` is set true only by someone who has seen the consent.
 *
 * Never populate this file with composite, representative, illustrative or
 * AI-written examples. An invented testimonial is the single fastest way to
 * destroy the trust every other part of this codebase is built to protect.
 */
export interface Outcome {
  /** Attribution as the person agreed to it (may be a first name only). */
  readonly attribution: string;
  /** Qualification and board, e.g. "Cambridge IGCSE Mathematics (0580)". */
  readonly course: string;
  /** Where the student started, in their own or the teacher's words. */
  readonly startingPoint: string;
  /** How long the support ran, e.g. "7 months". */
  readonly timeframe: string;
  /** What support was given -- format, frequency, subjects. */
  readonly support: string;
  /** The outcome, stated exactly as it can be evidenced. */
  readonly outcome: string;
  /** Exam series year, so a reader can date the result. */
  readonly year: number;
  /** Set true only by someone who has personally seen the signed consent. */
  readonly consentOnFile: boolean;
}

export const OUTCOMES: readonly Outcome[] = [];

/** Published outcomes are those, and only those, with consent on file. */
export const publishedOutcomes = (): readonly Outcome[] =>
  OUTCOMES.filter((o) => o.consentOnFile);
