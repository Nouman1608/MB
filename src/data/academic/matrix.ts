/**
 * MASTER ACADEMIC MATRIX — Board x Qualification x Subject.
 *
 * The single source of truth for which academic combinations Marlbridge may
 * present. Routes are generated ONLY from rows with status 'ACTIVE'.
 *
 * Status meanings:
 *   ACTIVE        Verified currently offered. A dedicated course page exists on
 *                 the Learners Academy site (evidence tier A).
 *   FUTURE        In the model, deliberately not offered yet. Never public.
 *   UNKNOWN       Source material is ambiguous or contradictory. Never public
 *                 until a human confirms it. DO NOT resolve by inference.
 *   NOT_SUPPORTED Verified as not offered.
 *
 * Evidence tiers used when assigning status:
 *   Tier A — a board/qualification/subject course URL exists in the Learners
 *            Academy navigation, corroborated by the subject page's
 *            "Choose your exam board" block and syllabus code. => ACTIVE
 *   Tier B — a subject page states levels and boards separately, with no
 *            per-combination course page. Combining them would be a cartesian
 *            guess, which is exactly what we were told not to do. => UNKNOWN
 *
 * Adding a row by hand is not enough to publish it: see
 * scripts/validate-academic-matrix.mjs and src/utils/academic/index.ts.
 */
import type { BoardSlug } from './boards';
import type { QualificationSlug } from './qualifications';

export type CombinationStatus = 'ACTIVE' | 'FUTURE' | 'UNKNOWN' | 'NOT_SUPPORTED';

export interface Combination {
  board: string;
  boardSlug: BoardSlug;
  qualification: string;
  qualificationSlug: QualificationSlug;
  subject: string;
  subjectSlug: string;
  status: CombinationStatus;
  /** URL or description of the evidence. Required for ACTIVE. */
  source: string;
  notes?: string;
}

const LA = 'https://learnersacademy.com.pk';

/** Tier A: a live course page exists for each of these. */
const ACTIVE_SOURCE: Record<string, string> = {
  'a-level': `${LA}/a-levels`,
  'igcse': `${LA}/igcse`,
  'o-level': `${LA}/o-levels`,
};

const BOARD_NAMES: Record<BoardSlug, string> = {
  cambridge: 'Cambridge',
  edexcel: 'Pearson Edexcel',
  aqa: 'AQA',
  ocr: 'OCR',
};

const QUAL_NAMES: Record<QualificationSlug, string> = {
  'igcse': 'IGCSE',
  'o-level': 'O Level',
  'gcse': 'GCSE',
  'as-level': 'AS Level',
  'a-level': 'A Level',
};

const SUBJECT_NAMES: Record<string, string> = {
  accounting: 'Accounting', biology: 'Biology', business: 'Business',
  chemistry: 'Chemistry', commerce: 'Commerce', 'computer-science': 'Computer Science',
  economics: 'Economics', 'english-language': 'English Language',
  'english-literature': 'English Literature', 'environmental-management': 'Environmental Management',
  geography: 'Geography', 'global-perspectives': 'Global Perspectives', ict: 'ICT',
  islamiyat: 'Islamiyat', law: 'Law', mathematics: 'Mathematics',
  'pakistan-studies': 'Pakistan Studies', physics: 'Physics', psychology: 'Psychology',
  sociology: 'Sociology', statistics: 'Statistics', 'urdu-language': 'Urdu Language',
  'urdu-literature': 'Urdu Literature', 'world-history': 'World History',
};

function rows(
  boardSlug: BoardSlug,
  qualificationSlug: QualificationSlug,
  subjectSlugs: readonly string[],
  status: CombinationStatus,
  source: string,
  notes?: string,
): Combination[] {
  return subjectSlugs.map((subjectSlug) => ({
    board: BOARD_NAMES[boardSlug],
    boardSlug,
    qualification: QUAL_NAMES[qualificationSlug],
    qualificationSlug,
    subject: SUBJECT_NAMES[subjectSlug] ?? subjectSlug,
    subjectSlug,
    status,
    source,
    ...(notes ? { notes } : {}),
  }));
}

// ---------------------------------------------------------------------------
// ACTIVE — Tier A evidence. Each has a live course page on the source site.
// ---------------------------------------------------------------------------

const AQA_IGCSE_NOTE =
  'CONFLICT-01: grouped under "IGCSE" by Learners Academy, but the syllabus codes quoted on subject pages (e.g. Chemistry 8462) are AQA GCSE codes. AQA does not currently offer an IGCSE. Kept ACTIVE because the course pages are live and sold as such, but the qualification label needs confirmation — it may need to move to GCSE.';

export const MATRIX: readonly Combination[] = [
  // A Level
  ...rows('cambridge', 'a-level', [
    'accounting', 'biology', 'business', 'chemistry', 'computer-science', 'economics',
    'english-language', 'world-history', 'ict', 'law', 'mathematics', 'physics',
    'psychology', 'sociology',
  ], 'ACTIVE', `${ACTIVE_SOURCE['a-level']}/cambridge/`),

  ...rows('edexcel', 'a-level', [
    'accounting', 'biology', 'business', 'chemistry', 'economics', 'law',
    'mathematics', 'physics', 'urdu-language',
  ], 'ACTIVE', `${ACTIVE_SOURCE['a-level']}/edexcel/`),

  ...rows('aqa', 'a-level', [
    'accounting', 'biology', 'business', 'chemistry', 'computer-science', 'economics',
    'english-language', 'law', 'mathematics', 'physics', 'psychology', 'sociology',
  ], 'ACTIVE', `${ACTIVE_SOURCE['a-level']}/aqa/`),

  // IGCSE
  ...rows('cambridge', 'igcse', [
    'accounting', 'biology', 'business', 'chemistry', 'computer-science', 'economics',
    'world-history', 'ict', 'mathematics', 'physics', 'sociology',
  ], 'ACTIVE', `${ACTIVE_SOURCE['igcse']}/cambridge/`),

  ...rows('edexcel', 'igcse', [
    'biology', 'chemistry', 'economics', 'english-language', 'world-history',
    'mathematics', 'physics',
  ], 'ACTIVE', `${ACTIVE_SOURCE['igcse']}/edexcel/`),

  ...rows('aqa', 'igcse', [
    'biology', 'business', 'chemistry', 'economics', 'english-language', 'world-history',
    'mathematics', 'physics', 'psychology', 'sociology',
  ], 'ACTIVE', `${ACTIVE_SOURCE['igcse']}/aqa/`, AQA_IGCSE_NOTE),

  // O Level — Cambridge only
  ...rows('cambridge', 'o-level', [
    'biology', 'business', 'chemistry', 'commerce', 'computer-science', 'economics',
    'english-language', 'world-history', 'mathematics', 'physics', 'sociology', 'statistics',
  ], 'ACTIVE', `${ACTIVE_SOURCE['o-level']}/cambridge/`),

  // -------------------------------------------------------------------------
  // UNKNOWN — Tier B. Subject page names levels and boards separately with no
  // per-combination course page. Listed board-agnostically as 'cambridge'
  // placeholder rows would be a guess, so each claimed board is recorded
  // explicitly as UNKNOWN and must be confirmed or deleted.
  // -------------------------------------------------------------------------

  ...rows('cambridge', 'igcse', ['english-literature'], 'UNKNOWN',
    `${LA}/subjects/english-literature/`,
    'Subject page claims "IGCSE & A Level - Cambridge, Edexcel, AQA" but no course page exists for any combination. Which of the 6 implied combinations are real?'),
  ...rows('edexcel', 'igcse', ['english-literature'], 'UNKNOWN', `${LA}/subjects/english-literature/`),
  ...rows('aqa', 'igcse', ['english-literature'], 'UNKNOWN', `${LA}/subjects/english-literature/`),
  ...rows('cambridge', 'a-level', ['english-literature'], 'UNKNOWN', `${LA}/subjects/english-literature/`),
  ...rows('edexcel', 'a-level', ['english-literature'], 'UNKNOWN', `${LA}/subjects/english-literature/`),
  ...rows('aqa', 'a-level', ['english-literature'], 'UNKNOWN', `${LA}/subjects/english-literature/`),

  ...rows('cambridge', 'o-level', ['pakistan-studies', 'islamiyat'], 'UNKNOWN',
    `${LA}/subjects/pakistan-studies/`,
    'Pakistan Studies page states "O Level & IGCSE - Cambridge (CAIE)" but no course page exists. Islamiyat is indexed as "O Level - IGCSE" with no board named.'),
  ...rows('cambridge', 'igcse', ['pakistan-studies', 'islamiyat'], 'UNKNOWN', `${LA}/subjects/`),

  ...rows('cambridge', 'igcse', ['geography', 'global-perspectives', 'environmental-management', 'urdu-literature'], 'UNKNOWN',
    `${LA}/subjects/`,
    'Listed in the /subjects/ index with level tags but no board attribution and no course page. Board(s) unconfirmed.'),
  ...rows('cambridge', 'o-level', ['environmental-management', 'urdu-literature'], 'UNKNOWN', `${LA}/subjects/`),
  ...rows('cambridge', 'a-level', ['geography', 'global-perspectives'], 'UNKNOWN', `${LA}/subjects/`),

  ...rows('cambridge', 'o-level', ['urdu-language'], 'UNKNOWN',
    `${LA}/subjects/`,
    'CONFLICT-02: the /subjects/ index tags Urdu Language as "O Level - IGCSE", but the only course page in the nav is Edexcel A LEVEL Urdu. The index tag and the nav disagree.'),
  ...rows('cambridge', 'igcse', ['urdu-language'], 'UNKNOWN', `${LA}/subjects/`),

  ...rows('cambridge', 'igcse', ['statistics', 'commerce'], 'UNKNOWN',
    `${LA}/subjects/`,
    'CONFLICT-02: the /subjects/ index tags these "IGCSE - A Level", but the only course pages are Cambridge O LEVEL. The index tag and the nav disagree.'),
  ...rows('cambridge', 'a-level', ['statistics', 'commerce'], 'UNKNOWN', `${LA}/subjects/`),

  // -------------------------------------------------------------------------
  // NOT_SUPPORTED — verified absent from the source.
  // -------------------------------------------------------------------------
  ...rows('edexcel', 'o-level', ['chemistry'], 'NOT_SUPPORTED',
    `${LA}/ (O Levels nav lists Cambridge only)`,
    'Representative row. Learners Academy offers O Level through Cambridge only; no Edexcel or AQA O Level exists.'),
  ...rows('aqa', 'o-level', ['chemistry'], 'NOT_SUPPORTED',
    `${LA}/ (O Levels nav lists Cambridge only)`),
] as const;

export const activeCombinations = () => MATRIX.filter((c) => c.status === 'ACTIVE');
export const unknownCombinations = () => MATRIX.filter((c) => c.status === 'UNKNOWN');
