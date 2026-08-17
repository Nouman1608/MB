/**
 * Verified syllabus facts, taken from the awarding body's own pages.
 *
 * ONLY facts published by the board go here: official qualification title,
 * specification code, the board's own summary sentence, and the canonical
 * syllabus URL. Paper structures, topic lists, assessment weightings and
 * grade boundaries are NOT recorded unless read from the official syllabus
 * document — never paraphrased from memory or a third-party tutoring site.
 */
export interface Syllabus {
  boardSlug: string;
  qualificationSlug: string;
  subjectSlug: string;
  /** Exact official title as published by the board. */
  officialTitle: string;
  code: string;
  /** The board's own description. Quoted and attributed on the page. */
  boardSummary: string;
  officialUrl: string;
  verifiedOn: string;
  notes?: string;
}

export const SYLLABUSES: readonly Syllabus[] = [
  {
    boardSlug: 'cambridge', qualificationSlug: 'igcse', subjectSlug: 'chemistry',
    officialTitle: 'Cambridge IGCSE Chemistry (0620)',
    code: '0620',
    boardSummary:
      'The Cambridge IGCSE Chemistry syllabus enables learners to understand the technological world in which they live, and take an informed interest in science and scientific developments.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/view/cambridge-igcse-chemistry-0620/',
    verifiedOn: '2026-08-17',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'chemistry',
    officialTitle: 'Cambridge O Level Chemistry (5070)',
    code: '5070',
    boardSummary:
      'The Cambridge O Level Chemistry syllabus helps learners to understand the technological world in which they live, and take an informed interest in science and scientific developments.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/view/cambridge-o-level-chemistry-5070/',
    verifiedOn: '2026-08-17',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'chemistry',
    officialTitle: 'Cambridge International AS & A Level Chemistry (9701)',
    code: '9701',
    boardSummary:
      'Cambridge International AS & A Level Chemistry builds on the skills acquired at Cambridge IGCSE (or equivalent level).',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/view/cambridge-international-as-and-a-level-chemistry-9701/',
    verifiedOn: '2026-08-17',
    notes: 'Cambridge publishes 9701 as a combined AS & A Level syllabus. Marlbridge treats AS Level as a distinct qualification; AS provision is not yet an approved Marlbridge offering.',
  },
] as const;

export const syllabusFor = (b: string, q: string, s: string): Syllabus | undefined =>
  SYLLABUSES.find((x) => x.boardSlug === b && x.qualificationSlug === q && x.subjectSlug === s);
