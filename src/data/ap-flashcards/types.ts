/**
 * Flashcard decks for the advanced-course (AP) library.
 *
 * AP courses are not in src/data/academic/syllabus-topics.ts, so they cannot
 * use the board/qualification/subject decks in src/data/flashcards/. Each deck
 * here is keyed by an AP course slug from src/data/ap/frameworks.ts and each
 * card sits on one framework topic number (for example '3.4').
 *
 * Rules (enforced by scripts/validate-ap-flashcards.mjs):
 * - `course` is a slug in AP_COURSES; `topic` is a topic number in that
 *   course's framework. Card ids are `<topic>-<n>` and permanent.
 * - Every topic of the course has cards, except a deck that sets
 *   `inheritsFrom`: then only the topics the parent course lacks need cards
 *   here, and the parent's cards are shown for the shared topics.
 * - Plain text only (rendered with textContent); Unicode for symbols.
 *   Front at most 180 characters, back at most 420.
 * - No College Board trademarks in card text ("AP", "Advanced Placement");
 *   name the course neutrally, as the AP library pages do.
 * - origin 'resource' cards name the AP library resource they restate in
 *   `source` (its file path under src/content/ap-resources/ without .md,
 *   e.g. 'chemistry/1-1-moles-molar-mass-revision-notes'), and that
 *   resource must be on the same topic.
 */

export interface ApFlashcard {
  /** `<topic number>-<n>`, permanent (browser progress is keyed by it). */
  id: string;
  /** Framework topic number, e.g. '1.1'. */
  topic: string;
  front: string;
  back: string;
  origin: 'authored' | 'resource';
  /** Required when origin is 'resource'. */
  source?: string;
}

export interface ApFlashcardDeck {
  /** AP course slug from AP_COURSES. */
  course: string;
  author: 'marlbridge-academic-team';
  /** ISO date the deck was last written. */
  updated: string;
  /** Course slug whose cards are reused for shared topics (Calculus BC -> calculus-ab). */
  inheritsFrom?: string;
  cards: readonly ApFlashcard[];
}
