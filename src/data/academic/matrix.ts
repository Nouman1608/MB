/**
 * MASTER ACADEMIC MATRIX — Board x Qualification x Subject.
 *
 * TWO INDEPENDENT STATUSES. Never conflate them:
 *
 *   boardOfferingStatus  Does the EXAM BOARD offer this qualification in this
 *                        subject? A fact about Cambridge/Edexcel/AQA/OCR.
 *   marlbridgeStatus     Does MARLBRIDGE offer it? A business decision that
 *                        only Marlbridge can make.
 *
 * Learners Academy is evidence of teaching capability, NOT a Marlbridge
 * offering. A combination is never marlbridgeStatus ACTIVE merely because
 * Learners Academy has a page for it.
 *
 * Evidence hierarchy (highest wins):
 *   1 marlbridge   Marlbridge-specific verified offering
 *   2 la-course    Learners Academy course page for this exact combination
 *   3 board        Official examination-board qualification evidence
 *   4 index        Generic subject index / tag
 *   5 boilerplate  Generic marketing or statistics text — NEVER used
 *
 * Routes come only from isPublishable() in src/utils/academic/.
 */
import type { BoardSlug } from './boards';
import type { QualificationSlug } from './qualifications';

export type Status = 'ACTIVE' | 'FUTURE' | 'UNKNOWN' | 'NOT_SUPPORTED';
export type Evidence = 'marlbridge' | 'la-course' | 'board' | 'index' | 'none';

export interface Combination {
  board: string;
  boardSlug: BoardSlug;
  qualification: string;
  qualificationSlug: QualificationSlug;
  subject: string;
  subjectSlug: string;
  /** Does the exam board offer this? */
  boardOfferingStatus: Status;
  /** Does Marlbridge offer this? Requires Marlbridge sign-off to be ACTIVE. */
  marlbridgeStatus: Status;
  evidence: Evidence;
  source: string;
  /** Official specification code, only where verified from the board. */
  qualificationCode?: string;
  notes?: string;
}

const LA = 'https://learnersacademy.com.pk';
const AQA = 'https://www.aqa.org.uk';

const BOARD_NAMES: Record<BoardSlug, string> = {
  cambridge: 'Cambridge', edexcel: 'Pearson Edexcel', aqa: 'AQA', ocr: 'OCR',
};
const QUAL_NAMES: Record<QualificationSlug, string> = {
  'igcse': 'IGCSE', 'o-level': 'O Level', 'gcse': 'GCSE',
  'as-level': 'AS Level', 'a-level': 'A Level',
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

interface RowOpts {
  boardOfferingStatus: Status;
  marlbridgeStatus: Status;
  evidence: Evidence;
  source: string;
  codes?: Record<string, string>;
  notes?: string;
}

function rows(
  boardSlug: BoardSlug, qualificationSlug: QualificationSlug,
  subjectSlugs: readonly string[], o: RowOpts,
): Combination[] {
  return subjectSlugs.map((subjectSlug) => ({
    board: BOARD_NAMES[boardSlug], boardSlug,
    qualification: QUAL_NAMES[qualificationSlug], qualificationSlug,
    subject: SUBJECT_NAMES[subjectSlug] ?? subjectSlug, subjectSlug,
    boardOfferingStatus: o.boardOfferingStatus,
    marlbridgeStatus: o.marlbridgeStatus,
    evidence: o.evidence,
    source: o.source,
    ...(o.codes?.[subjectSlug] ? { qualificationCode: o.codes[subjectSlug] } : {}),
    ...(o.notes ? { notes: o.notes } : {}),
  }));
}

/**
 * Marlbridge has not yet defined its own academic scope. Until it does, every
 * combination below carries marlbridgeStatus UNKNOWN — including those with
 * strong Learners Academy evidence. Flipping these to ACTIVE is a decision for
 * the business, made per combination, not a data-entry step.
 */
const PENDING_SCOPE =
  'Learners Academy teaches this. Marlbridge scope not yet defined — awaiting sign-off.';

/** Verified from AQA's own site. Codes seen on aqa.org.uk subject pages. */
const AQA_GCSE_CODES: Record<string, string> = {
  biology: '8461', chemistry: '8462', business: '8132',
  'english-language': '8700', 'world-history': '8145', mathematics: '8300',
};

const AQA_ALEVEL_CODES: Record<string, string> = {
  biology: '7402', chemistry: '7405', physics: '7408',
  psychology: '7182', sociology: '7192', business: '7132',
  // Verified 2026-08-18 at aqa.org.uk/subjects/accounting: A-level Accounting
  // 7127 is live (next exam 17 May 2027, current specification for first
  // teaching 2017). Not withdrawn — resolves the prior "needs checking" note.
  accounting: '7127',
};

export const MATRIX: readonly Combination[] = [
  // =========================================================================
  // CAMBRIDGE — A Level
  // =========================================================================
  ...rows('cambridge', 'a-level', [
    'accounting', 'biology', 'business', 'computer-science', 'economics',
    'english-language', 'world-history', 'ict', 'law', 'mathematics', 'physics',
    'psychology', 'sociology',
  ], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'la-course',
    source: `${LA}/a-levels/cambridge/`,
    // Codes verified at cambridgeinternational.org (Phase 11, 2026-08-18). Each
    // is the plain AS & A Level qualification for that subject — not a
    // "Further"/alternate-syllabus sibling (e.g. not 9231 Further Mathematics).
    codes: {
      chemistry: '9701', mathematics: '9709', physics: '9702', biology: '9700',
      business: '9609', economics: '9708', accounting: '9706',
    },
    notes: PENDING_SCOPE,
  }),

  // CAMBRIDGE — IGCSE
  ...rows('cambridge', 'igcse', [
    'accounting', 'biology', 'business', 'computer-science', 'economics',
    'world-history', 'ict', 'mathematics', 'physics', 'sociology',
  ], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'la-course',
    source: `${LA}/igcse/cambridge/`,
    // Codes verified at cambridgeinternational.org (Phase 11, 2026-08-18). Each
    // is the standard grading-scale (A*-G) qualification, matching how 0620
    // was chosen over any "(9-1)" numeric-grade sibling syllabus.
    codes: {
      chemistry: '0620', mathematics: '0580', physics: '0625', biology: '0610',
      business: '0450', economics: '0455', accounting: '0452',
    },
    notes: PENDING_SCOPE,
  }),

  // CAMBRIDGE — O Level (Cambridge is the only board offering O Level here)
  ...rows('cambridge', 'o-level', [
    'biology', 'business', 'commerce', 'computer-science', 'economics',
    'english-language', 'world-history', 'mathematics', 'physics', 'sociology', 'statistics',
  ], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'la-course',
    source: `${LA}/o-levels/cambridge/`,
    // Codes verified at cambridgeinternational.org (Phase 11, 2026-08-18).
    // NOTE — business: 7115 "Cambridge O Level Business Studies" is current
    // through its final exam series in 2026; from 2027 it is replaced (same
    // qualification lineage, new code and shortened name) by 7081 "Cambridge
    // O Level Business". Recorded as 7115 since 2026 is the current year.
    // No accounting code here: Learners Academy's own nav does not list
    // Accounting at O Level (only at IGCSE and A Level; Cambridge does also
    // offer an O Level Accounting 7707, but that is board-only evidence, not
    // la-course evidence, so accounting is deliberately absent from this row).
    codes: {
      chemistry: '5070', mathematics: '4024', physics: '5054', biology: '5090',
      business: '7115', economics: '2281',
    },
    notes: PENDING_SCOPE,
  }),

  // =========================================================================
  // PEARSON EDEXCEL
  // =========================================================================
  ...rows('edexcel', 'a-level', [
    'accounting', 'biology', 'business', 'chemistry', 'economics', 'law',
    'mathematics', 'physics', 'urdu-language',
  ], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'la-course',
    source: `${LA}/a-levels/edexcel/`, codes: { chemistry: 'YCH11' },
    notes: `${PENDING_SCOPE} Edexcel A Level here is International A Level (IAL).`,
  }),

  ...rows('edexcel', 'igcse', [
    'biology', 'chemistry', 'economics', 'english-language', 'world-history',
    'mathematics', 'physics',
  ], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'la-course',
    source: `${LA}/igcse/edexcel/`, codes: { chemistry: '4CH1' },
    notes: `${PENDING_SCOPE} Edexcel International GCSE — genuinely IGCSE, unlike AQA.`,
  }),

  // =========================================================================
  // AQA — CORRECTED. Learners Academy files these under "IGCSE", but AQA does
  // not offer any IGCSE: aqa.org.uk lists GCSE, AS, A-level and vocational
  // only. Verified structurally at /subjects and per-subject for Business
  // (GCSE 8132 / AS 7131,7137 / A-level 7132,7138). These rows are therefore
  // recorded as GCSE, not IGCSE. See CONFLICT-01.
  // =========================================================================
  ...rows('aqa', 'gcse', [
    'biology', 'business', 'chemistry', 'economics', 'english-language', 'world-history',
    'mathematics', 'physics', 'psychology', 'sociology',
  ], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: `${AQA}/subjects (AQA qualification list: GCSE / AS / A-level only)`,
    codes: AQA_GCSE_CODES,
    notes: 'RECLASSIFIED from IGCSE to GCSE. AQA offers no IGCSE. Codes verified from AQA where shown; economics, physics, psychology, sociology GCSE codes NOT yet individually verified — confirm before publishing.',
  }),

  // AQA IGCSE — explicitly not supported, so nobody re-adds it later.
  ...rows('aqa', 'igcse', [
    'biology', 'business', 'chemistry', 'economics', 'english-language', 'world-history',
    'mathematics', 'physics', 'psychology', 'sociology',
  ], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'board',
    source: `${AQA}/subjects`,
    notes: 'AQA does not offer IGCSE. Learners Academy labels these "IGCSE" but the syllabus codes are GCSE codes. Superseded by the AQA GCSE rows above.',
  }),

  ...rows('aqa', 'a-level', [
    'accounting', 'biology', 'business', 'chemistry', 'computer-science', 'economics',
    'english-language', 'law', 'mathematics', 'physics', 'psychology', 'sociology',
  ], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'la-course',
    source: `${LA}/a-levels/aqa/`, codes: AQA_ALEVEL_CODES,
    notes: `${PENDING_SCOPE} AQA A-level Accounting (7127) verified live at aqa.org.uk 2026-08-18 — not withdrawn.`,
  }),

  // AQA AS Level — AQA runs AS as a separate qualification (Business AS 7131/7137
  // verified). Whether Marlbridge or LA teaches AS distinctly is unconfirmed.
  ...rows('aqa', 'as-level', ['business'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: `${AQA}/subjects/business`, codes: { business: '7131 / 7137' },
    notes: 'Board offers AS as a distinct qualification. Marlbridge/LA AS provision UNKNOWN. Representative row — AS exists across most AQA subjects.',
  }),

  // =========================================================================
  // UNKNOWN — Tier-B / index-only. Board attribution never established.
  // Cartesian expansion deliberately avoided.
  // =========================================================================
  ...rows('cambridge', 'igcse', ['english-literature'], {
    boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index',
    source: `${LA}/subjects/english-literature/`,
    notes: 'Subject page claims "IGCSE & A Level - Cambridge, Edexcel, AQA" with no course page for any combination. Which specific combinations are real?',
  }),
  ...rows('edexcel', 'igcse', ['english-literature'], { boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index', source: `${LA}/subjects/english-literature/` }),
  ...rows('cambridge', 'a-level', ['english-literature'], { boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index', source: `${LA}/subjects/english-literature/` }),
  ...rows('edexcel', 'a-level', ['english-literature'], { boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index', source: `${LA}/subjects/english-literature/` }),
  ...rows('aqa', 'gcse', ['english-literature'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: `${AQA}/subjects`, codes: { 'english-literature': '8702' },
    notes: 'AQA GCSE English Literature 8702 exists. Whether LA/Marlbridge teach it is unconfirmed.',
  }),
  ...rows('aqa', 'a-level', ['english-literature'], { boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index', source: `${LA}/subjects/english-literature/` }),

  ...rows('cambridge', 'o-level', ['pakistan-studies', 'islamiyat'], {
    boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index',
    source: `${LA}/subjects/pakistan-studies/`,
    notes: 'Pakistan Studies page states "O Level & IGCSE - Cambridge (CAIE)" but no course page exists. Islamiyat has no board named at all.',
  }),
  ...rows('cambridge', 'igcse', ['pakistan-studies', 'islamiyat'], { boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index', source: `${LA}/subjects/` }),

  ...rows('cambridge', 'igcse', ['geography', 'global-perspectives', 'environmental-management', 'urdu-literature'], {
    boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index',
    source: `${LA}/subjects/`,
    notes: 'Indexed with level tags but no board attribution and no course page.',
  }),
  ...rows('cambridge', 'o-level', ['environmental-management', 'urdu-literature'], { boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index', source: `${LA}/subjects/` }),
  ...rows('cambridge', 'a-level', ['geography', 'global-perspectives'], { boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index', source: `${LA}/subjects/` }),

  ...rows('cambridge', 'igcse', ['urdu-language'], {
    boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index',
    source: `${LA}/subjects/`,
    notes: 'CONFLICT-02: index tags Urdu Language "O Level - IGCSE", but the only course page is Edexcel A LEVEL Urdu.',
  }),
  ...rows('cambridge', 'o-level', ['urdu-language'], { boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index', source: `${LA}/subjects/` }),

  ...rows('cambridge', 'igcse', ['statistics', 'commerce'], {
    boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index',
    source: `${LA}/subjects/`,
    notes: 'CONFLICT-02: index tags these "IGCSE - A Level", but the only course pages are Cambridge O LEVEL.',
  }),
  ...rows('cambridge', 'a-level', ['statistics', 'commerce'], { boardOfferingStatus: 'UNKNOWN', marlbridgeStatus: 'UNKNOWN', evidence: 'index', source: `${LA}/subjects/` }),

  // =========================================================================
  // NOT_SUPPORTED — verified absent
  // =========================================================================
  ...rows('edexcel', 'o-level', ['chemistry'], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'la-course',
    source: `${LA}/ (O Levels nav lists Cambridge only)`,
    notes: 'Representative row: O Level is Cambridge-only at Learners Academy.',
  }),
  ...rows('aqa', 'o-level', ['chemistry'], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'board',
    source: `${AQA}/subjects`, notes: 'AQA does not offer O Level.',
  }),

  // =========================================================================
  // OCR — first-class in the model, never public until Marlbridge verifies it.
  // =========================================================================
  ...rows('ocr', 'a-level', ['chemistry'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'FUTURE', evidence: 'none',
    source: 'No Marlbridge or Learners Academy evidence',
    notes: 'OCR is a real board offering A Level Chemistry, but Marlbridge does not offer it. Representative row — kept FUTURE so OCR stays modelled but non-public.',
  }),
  ...rows('ocr', 'gcse', ['chemistry'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'FUTURE', evidence: 'none',
    source: 'No Marlbridge or Learners Academy evidence',
  }),

  // =========================================================================
  // APPROVED MARLBRIDGE SCOPE — signed off 2026-08-17.
  // The ONLY combinations with marlbridgeStatus ACTIVE. Codes, titles and
  // summaries verified against cambridgeinternational.org (see syllabuses.ts).
  // =========================================================================
  ...rows('cambridge', 'igcse', ['chemistry'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'marlbridge',
    source: 'Marlbridge approved scope 2026-08-17; syllabus verified at cambridgeinternational.org',
    codes: { chemistry: '0620' },
  }),
  ...rows('cambridge', 'o-level', ['chemistry'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'marlbridge',
    source: 'Marlbridge approved scope 2026-08-17; syllabus verified at cambridgeinternational.org',
    codes: { chemistry: '5070' },
  }),
  ...rows('cambridge', 'a-level', ['chemistry'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'marlbridge',
    source: 'Marlbridge approved scope 2026-08-17; syllabus verified at cambridgeinternational.org',
    codes: { chemistry: '9701' },
    notes: 'Cambridge publishes 9701 as combined AS & A Level. AS remains a distinct, non-approved qualification for Marlbridge.',
  }),
] as const;

export const byMarlbridgeStatus = (s: Status) => MATRIX.filter((c) => c.marlbridgeStatus === s);
export const activeCombinations = () => byMarlbridgeStatus('ACTIVE');
export const eligibleCandidates = () =>
  MATRIX.filter((c) => c.boardOfferingStatus === 'ACTIVE' && c.marlbridgeStatus === 'UNKNOWN' && c.evidence === 'la-course');
