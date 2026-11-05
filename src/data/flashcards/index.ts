/**
 * Flashcards (D-438) -- registry of published decks and the URL helpers.
 * Add a deck by writing src/data/flashcards/<board>-<qualification>-<subject>.ts
 * and running `npm run generate:flashcards`; scripts/validate-flashcards.mjs
 * (part of validate:academic) checks it.
 */
import type { FlashcardDeck, Flashcard } from './types.ts';
import { GENERATED_DECKS } from './decks.generated.ts';

export type { FlashcardDeck, Flashcard };
export { TIER_LABELS } from './types.ts';

export const FLASHCARD_DECKS: readonly FlashcardDeck[] = GENERATED_DECKS;

const key = (b: string, q: string, s: string) => `${b}/${q}/${s}`;

export const deckFor = (boardSlug: string, qualificationSlug: string, subjectSlug: string): FlashcardDeck | undefined =>
  FLASHCARD_DECKS.find((d) => key(d.boardSlug, d.qualificationSlug, d.subjectSlug) === key(boardSlug, qualificationSlug, subjectSlug));

export const flashcardsPath = (d: Pick<FlashcardDeck, 'boardSlug' | 'qualificationSlug' | 'subjectSlug'>, topicSlug?: string): string =>
  `/flashcards/${d.boardSlug}/${d.qualificationSlug}/${d.subjectSlug}/${topicSlug ? `${topicSlug}/` : ''}`;

export const cardsForTopic = (d: FlashcardDeck, topicSlug: string): Flashcard[] => d.cards.filter((c) => c.topic === topicSlug);

/** Topic slug -> card count, for the hub's per-topic links. */
export const topicCardCounts = (d: FlashcardDeck): Record<string, number> =>
  d.cards.reduce<Record<string, number>>((m, c) => ((m[c.topic] = (m[c.topic] ?? 0) + 1), m), {});

/**
 * Browser storage key for a deck's progress. Keyed by syllabus code so it is
 * readable on /legal/cookies/ (mb-flashcards-0620); codes such as
 * "DP Economics" or "9625 / 9725" are reduced to [a-z0-9-].
 */
export const deckStorageId = (d: FlashcardDeck): string =>
  d.syllabusCode.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** "(0620)" style code suffix for titles -- only for a real short code, not "DP Economics". */
export const codeSuffix = (d: FlashcardDeck): string =>
  /^[A-Z0-9]{3,6}$/.test(d.syllabusCode) ? ` (${d.syllabusCode})` : '';
