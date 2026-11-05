/**
 * Flashcards (D-438) -- registry of published decks and the URL helpers.
 * Add a deck by writing src/data/flashcards/<code>.ts and listing it here;
 * scripts/validate-flashcards.mjs (part of validate:academic) checks it.
 */
import type { FlashcardDeck, Flashcard } from './types.ts';
import { DECK_0620 } from './0620.ts';

export type { FlashcardDeck, Flashcard };

export const FLASHCARD_DECKS: readonly FlashcardDeck[] = [DECK_0620];

const key = (b: string, q: string, s: string) => `${b}/${q}/${s}`;

export const deckFor = (boardSlug: string, qualificationSlug: string, subjectSlug: string): FlashcardDeck | undefined =>
  FLASHCARD_DECKS.find((d) => key(d.boardSlug, d.qualificationSlug, d.subjectSlug) === key(boardSlug, qualificationSlug, subjectSlug));

export const flashcardsPath = (d: Pick<FlashcardDeck, 'boardSlug' | 'qualificationSlug' | 'subjectSlug'>, topicSlug?: string): string =>
  `/flashcards/${d.boardSlug}/${d.qualificationSlug}/${d.subjectSlug}/${topicSlug ? `${topicSlug}/` : ''}`;

export const cardsForTopic = (d: FlashcardDeck, topicSlug: string): Flashcard[] => d.cards.filter((c) => c.topic === topicSlug);

/** Topic slug -> card count, for the hub's per-topic links. */
export const topicCardCounts = (d: FlashcardDeck): Record<string, number> =>
  d.cards.reduce<Record<string, number>>((m, c) => ((m[c.topic] = (m[c.topic] ?? 0) + 1), m), {});
