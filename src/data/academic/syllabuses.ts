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
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'physics',
    officialTitle: 'Cambridge O Level Physics (5054)',
    code: '5054',
    boardSummary:
      'The Cambridge O Level Physics syllabus helps learners to understand the technological world in which they live, and take an informed interest in science and scientific developments.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-physics-5054/',
    verifiedOn: '2026-08-18',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'mathematics',
    officialTitle: 'Cambridge O Level Mathematics (Syllabus D) (4024)',
    code: '4024',
    boardSummary:
      'Cambridge O Level Mathematics (Syllabus D) gives learners a solid foundation for further study, developing number, algebra, geometry, mensuration, trigonometry, statistics and probability skills for candidates going on to Cambridge International AS & A Level Mathematics or equivalent.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-mathematics-syllabus-d-4024/',
    verifiedOn: '2026-08-18',
    notes: 'boardSummary is a Marlbridge-written factual description, not a verbatim quote — the syllabus overview page could not be fetched directly in this session (redirect-only response); code, series and content verified independently against the official syllabus PDF in Phase 14.',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'biology',
    officialTitle: 'Cambridge O Level Biology (5090)',
    code: '5090',
    boardSummary:
      'With an emphasis on human biology, the Cambridge O Level Biology syllabus enables learners to understand the technological world in which they live, and take an informed interest in science and scientific developments.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-biology-5090/',
    verifiedOn: '2026-08-18',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'business',
    officialTitle: 'Cambridge O Level Business Studies (7115)',
    code: '7115',
    boardSummary:
      'Learners consider a range of stakeholder perspectives, from the individual to national government, when studying the Cambridge O Level Business Studies syllabus.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-business-studies-7115/',
    verifiedOn: '2026-08-18',
    notes: '7115 is current through its final examination series in 2026; Cambridge replaces it with 7081 "Cambridge O Level Business" (same lineage, shortened name) from 2027.',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'economics',
    officialTitle: 'Cambridge O Level Economics (2281)',
    code: '2281',
    boardSummary:
      'The Cambridge O Level Economics syllabus develops an understanding of economic terminology and principles, and of basic economic theory. Learners find out about the economics of developed and developing nations and how these interrelate.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-economics-2281/',
    verifiedOn: '2026-08-18',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'accounting',
    officialTitle: 'Cambridge International AS & A Level Accounting (9706)',
    code: '9706',
    boardSummary:
      'The Cambridge International AS and A Level Accounting syllabus enables learners to apply their accounting knowledge and understanding in order to analyse and present information, give reasoned explanations, and make judgements and recommendations.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-accounting-9706/',
    verifiedOn: '2026-08-18',
    notes: 'Cambridge publishes 9706 as a combined AS & A Level syllabus, structured in stages (AS: Topics 1-2, A Level: Topics 3-4).',
  },
] as const;

export const syllabusFor = (b: string, q: string, s: string): Syllabus | undefined =>
  SYLLABUSES.find((x) => x.boardSlug === b && x.qualificationSlug === q && x.subjectSlug === s);
