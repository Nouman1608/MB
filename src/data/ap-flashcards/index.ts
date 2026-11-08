/**
 * Advanced-course (AP) flashcards -- registry of published decks and helpers.
 * Add a deck by writing src/data/ap-flashcards/<course-slug>.ts (see types.ts)
 * and running `npm run generate:ap-flashcards`;
 * scripts/validate-ap-flashcards.mjs (part of validate:academic) checks it.
 *
 * Pages are one per course (the hub) and one per unit:
 *   /advanced-course-resources/<course>/flashcards/
 *   /advanced-course-resources/<course>/flashcards/unit-<n>/
 *
 * Inheritance: a deck with `inheritsFrom` (Calculus BC -> calculus-ab) shows
 * the parent deck's cards for every topic number the two frameworks share,
 * and its own cards only for the topics the parent framework lacks.
 */
import type { ApFlashcard, ApFlashcardDeck } from './types.ts';
import { GENERATED_AP_DECKS } from './decks.generated.ts';
import { AP_COURSES, apCourseBySlug, apTopicNumbers, type ApCourse, type ApUnit } from '../ap/frameworks.ts';
import { AP_LIBRARY_BASE } from '../ap/config.ts';

export type { ApFlashcard, ApFlashcardDeck };

/** A card as shown on a page: `course` is the deck it was written in (the parent for inherited cards). */
export type ApResolvedCard = ApFlashcard & { course: string };

export const AP_FLASHCARD_DECKS: readonly ApFlashcardDeck[] = GENERATED_AP_DECKS;

export const apDeckFor = (course: string, decks: readonly ApFlashcardDeck[] = AP_FLASHCARD_DECKS): ApFlashcardDeck | undefined =>
  decks.find((d) => d.course === course);

/** Courses with a deck of their own, in library order. Only these get flashcard pages. */
export const apFlashcardCourses = (decks: readonly ApFlashcardDeck[] = AP_FLASHCARD_DECKS): ApCourse[] =>
  AP_COURSES.filter((c) => decks.some((d) => d.course === c.slug));

/** Route segment for a unit page. */
export const apUnitSegment = (unit: number): string => `unit-${unit}`;

export const apFlashcardsPath = (course: string, unit?: number): string =>
  `${AP_LIBRARY_BASE}${course}/flashcards/${unit === undefined ? '' : `${apUnitSegment(unit)}/`}`;

/**
 * Topic numbers a deck takes from its parent: those in both the child's and
 * the parent's framework. Empty for a deck without `inheritsFrom`.
 */
export function apInheritedTopics(deck: ApFlashcardDeck): Set<string> {
  if (!deck.inheritsFrom) return new Set();
  const child = apCourseBySlug(deck.course);
  const parent = apCourseBySlug(deck.inheritsFrom);
  if (!child || !parent) return new Set();
  const own = new Set(apTopicNumbers(child));
  return new Set(apTopicNumbers(parent).filter((n) => own.has(n)));
}

const cardN = (c: ApFlashcard): number => Number(c.id.slice(c.id.lastIndexOf('-') + 1)) || 0;

/**
 * Cards for one topic of a course, resolving inheritance: an inherited topic
 * shows the parent deck's cards (none if the parent has no deck yet).
 */
export function apCardsForTopic(course: string, topic: string, decks: readonly ApFlashcardDeck[] = AP_FLASHCARD_DECKS): ApResolvedCard[] {
  const deck = apDeckFor(course, decks);
  if (!deck) return [];
  const from = deck.inheritsFrom && apInheritedTopics(deck).has(topic) ? apDeckFor(deck.inheritsFrom, decks) : deck;
  if (!from) return [];
  return from.cards.filter((c) => c.topic === topic).sort((a, b) => cardN(a) - cardN(b)).map((c) => ({ ...c, course: from.course }));
}

/** Cards for one unit, in framework topic order. */
export function apCardsForUnit(course: string, unit: number, decks: readonly ApFlashcardDeck[] = AP_FLASHCARD_DECKS): ApResolvedCard[] {
  const u = apCourseBySlug(course)?.units.find((x) => x.number === unit);
  return u ? u.topics.flatMap((t) => apCardsForTopic(course, t.number, decks)) : [];
}

/** Every card shown for a course, in framework order. */
export function apCardsForCourse(course: string, decks: readonly ApFlashcardDeck[] = AP_FLASHCARD_DECKS): ApResolvedCard[] {
  const c = apCourseBySlug(course);
  return c ? c.units.flatMap((u) => apCardsForUnit(course, u.number, decks)) : [];
}

/** Units of a course that have at least one card (these get a page), with their counts. */
export function apUnitsWithCards(course: string, decks: readonly ApFlashcardDeck[] = AP_FLASHCARD_DECKS): { unit: ApUnit; count: number }[] {
  const c = apCourseBySlug(course);
  if (!c || !apDeckFor(course, decks)) return [];
  return c.units.map((unit) => ({ unit, count: apCardsForUnit(course, unit.number, decks).length })).filter((x) => x.count > 0);
}

/** Latest `updated` date of the deck and, when it inherits, its parent deck. */
export function apDeckUpdated(course: string, decks: readonly ApFlashcardDeck[] = AP_FLASHCARD_DECKS): string | undefined {
  const deck = apDeckFor(course, decks);
  if (!deck) return undefined;
  const parent = deck.inheritsFrom ? apDeckFor(deck.inheritsFrom, decks) : undefined;
  return [deck.updated, parent?.updated].filter((d): d is string => Boolean(d)).sort().pop();
}

/**
 * Browser storage id (key mb-flashcards-<id>, see /legal/cookies/). Prefixed
 * so it can never clash with a syllabus deck's code (mb-flashcards-0620).
 */
export const apDeckStorageId = (course: string): string => `adv-${course}`;
