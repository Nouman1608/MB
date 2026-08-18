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
  oxfordaqa: 'OxfordAQA',
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
 * Marlbridge's owner has confirmed (2026-08-18, MARLBRIDGE v1.0 master
 * directive) that Marlbridge currently teaches all supported subjects across
 * all supported boards represented by the Marlbridge offering. Teaching
 * status is independent of resource-library coverage — a subject can be
 * marlbridgeStatus ACTIVE with partial resource coverage. See the coverage
 * dashboard for per-subject resource completeness, never this field.
 */
const OWNER_TEACHES_ALL =
  'Learners Academy teaches this. Owner-authorized as an active Marlbridge teaching offering 2026-08-18 (MARLBRIDGE v1.0 directive: Marlbridge teaches all supported subjects across all supported boards). Resource-library coverage for this combination is tracked separately and may be partial.';

/** Verified from AQA's own site. Codes seen on aqa.org.uk subject pages. */
const AQA_GCSE_CODES: Record<string, string> = {
  biology: '8461', chemistry: '8462', business: '8132',
  'english-language': '8700', 'world-history': '8145', mathematics: '8300',
  // Verified 2026-08-18 (v1.0 WS5) — previously flagged "NOT yet
  // individually verified" and left out of this object entirely, meaning
  // these four ACTIVE rows had no code recorded at all.
  economics: '8136', physics: '8463', psychology: '8182', sociology: '8192',
};

const AQA_ALEVEL_CODES: Record<string, string> = {
  biology: '7402', chemistry: '7405', physics: '7408',
  psychology: '7182', sociology: '7192', business: '7132', economics: '7136',
  // Verified 2026-08-18 at aqa.org.uk/subjects/accounting: A-level Accounting
  // 7127 is live (next exam 17 May 2027, current specification for first
  // teaching 2017). Not withdrawn — resolves the prior "needs checking" note.
  accounting: '7127',
  // Verified 2026-08-19 at aqa.org.uk/subjects/mathematics/a-level/mathematics-7357:
  // live specification code, first teaching 2017.
  mathematics: '7357',
};

/** Verified at ocr.org.uk GCSE qualification pages, 2026-08-18. */
const OCR_GCSE_CODES: Record<string, string> = {
  chemistry: 'J248', physics: 'J249', biology: 'J247', mathematics: 'J560',
  business: 'J204', economics: 'J205',
};

/**
 * Verified at ocr.org.uk AS/A-Level qualification pages, 2026-08-18. Each is
 * the A Level (not AS) specification code, matching how other boards' A
 * Level rows record the full A Level code rather than the AS sibling.
 */
const OCR_ALEVEL_CODES: Record<string, string> = {
  chemistry: 'H432', physics: 'H556', biology: 'H420', mathematics: 'H240',
  business: 'H431', economics: 'H460',
};

/**
 * OxfordAQA — International GCSE codes. Verified directly against live
 * oxfordaqa.com qualification pages, 2026-08-18 (v1.0 WS4). A prior
 * unverified snapshot table was explicitly discarded; every code below
 * traces to a page fetch on this date. World History and Sociology are
 * newly launched for 2026 (first teaching September 2026).
 */
const OXFORDAQA_IGCSE_CODES: Record<string, string> = {
  accounting: '9215', business: '9225', 'computer-science': '9210', economics: '9214',
  mathematics: '9260', biology: '9201', chemistry: '9202', physics: '9203',
  'english-language': '9270', 'english-literature': '9275', geography: '9230',
  'world-history': '9245', islamiyat: '9237', 'pakistan-studies': '9236',
  psychology: '9218', sociology: '9292', 'urdu-language': '9264',
};

/**
 * OxfordAQA — International AS and A-level codes (OxfordAQA publishes AS
 * and A-level as one combined qualification family per subject, like
 * Cambridge — not as a separate AS route like AQA). Verified 2026-08-18
 * (v1.0 WS4). Business is mid-transition: 9625 is being withdrawn (final
 * AS exams 2026, final A2 exams 2027) while 9725 is the revised
 * replacement (first teaching September 2026, first AS exams 2027, first
 * A2 exams 2028) — both are recorded together rather than silently
 * picking one, matching the "primary / alt" convention used elsewhere in
 * this file (e.g. AQA AS Business 7131/7137, Cambridge IGCSE English
 * Literature 0475/0992).
 */
const OXFORDAQA_ALEVEL_CODES: Record<string, string> = {
  accounting: '9615', business: '9625 / 9725', 'computer-science': '9645', economics: '9640',
  mathematics: '9660', biology: '9610', chemistry: '9620', physics: '9630',
  'english-language': '9670', 'english-literature': '9675', geography: '9635',
  psychology: '9685', sociology: '9690',
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
    notes: OWNER_TEACHES_ALL,
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
    notes: OWNER_TEACHES_ALL,
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
      // Verified at cambridgeinternational.org 2026-08-18 (WS2 reconciliation).
      commerce: '7100', statistics: '4040',
    },
    notes: OWNER_TEACHES_ALL,
  }),

  // =========================================================================
  // PEARSON EDEXCEL
  // =========================================================================
  ...rows('edexcel', 'a-level', [
    'accounting', 'biology', 'business', 'chemistry', 'economics', 'law',
    'mathematics', 'physics', 'urdu-language',
  ], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'la-course',
    source: `${LA}/a-levels/edexcel/`, codes: { chemistry: 'YCH11', physics: 'YPH11', mathematics: 'YMA01', biology: 'YBI11', business: 'YBS11', economics: 'YEC11' },
    notes: `${OWNER_TEACHES_ALL} Edexcel A Level here is International A Level (IAL).`,
  }),

  ...rows('edexcel', 'igcse', [
    'biology', 'chemistry', 'economics', 'english-language', 'world-history',
    'mathematics', 'physics',
  ], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'la-course',
    source: `${LA}/igcse/edexcel/`, codes: { chemistry: '4CH1', physics: '4PH1', mathematics: '4MA1', biology: '4BI1', economics: '4EC1' },
    notes: `${OWNER_TEACHES_ALL} Edexcel International GCSE — genuinely IGCSE, unlike AQA.`,
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
    notes: 'RECLASSIFIED from IGCSE to GCSE. AQA offers no IGCSE. All ten codes verified directly at aqa.org.uk 2026-08-18 (v1.0 WS5) — economics (8136), physics (8463), psychology (8182) and sociology (8192) were previously unverified and are now confirmed live specification codes, closing a gap flagged in an earlier session.',
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
    notes: `${OWNER_TEACHES_ALL} AQA A-level Accounting (7127) verified live at aqa.org.uk 2026-08-18 — not withdrawn.`,
  }),

  // AQA AS Level — AQA runs AS as a separate qualification (Business AS 7131/7137
  // verified). Whether Marlbridge or LA teaches AS distinctly is unconfirmed.
  ...rows('aqa', 'as-level', ['business'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: `${AQA}/subjects/business — verified 2026-08-18 (v1.0 WS5)`, codes: { business: '7131 / 7137' },
    notes: `${OWNER_TEACHES_ALL} Board offers AS as a distinct qualification. Representative row — AS exists across most AQA subjects.`,
  }),

  // =========================================================================
  // RECONCILED 2026-08-18 — WS2 (business status migration) + source
  // reconciliation. These combinations previously carried marlbridgeStatus
  // UNKNOWN because the only evidence was an ambiguous Learners Academy
  // subject-index tag with no board-specific course page. Each row below was
  // independently re-verified directly against the awarding body's own site
  // (cambridgeinternational.org / qualifications.pearson.com / aqa.org.uk,
  // 2026-08-18) to confirm the qualification is real and current before
  // marlbridgeStatus was flipped to ACTIVE under the owner's 2026-08-18
  // authorization (OWNER_TEACHES_ALL). Evidence tier is 'board' (not
  // 'la-course') because Learners Academy's board-specific course page for
  // these exact combinations still was not found — only the underlying
  // academic qualification was confirmed. Two subjects (Urdu Literature) do
  // not exist as an awarding-body qualification distinct from Urdu Language
  // and are recorded NOT_SUPPORTED rather than fabricated.
  // =========================================================================

  // --- English Literature ---------------------------------------------
  ...rows('cambridge', 'igcse', ['english-literature'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/english-literature-0475/ — verified 2026-08-18',
    codes: { 'english-literature': '0475 / 0992' },
    notes: `${OWNER_TEACHES_ALL} Cambridge offers this content-identical qualification under two codes differing only in grading scale: 0475 (Literature in English, A*-G) and 0992 (IGCSE (9-1) Literature in English, 9-1). Both current.`,
  }),
  ...rows('cambridge', 'a-level', ['english-literature'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-english-literature-9695/ — verified 2026-08-18',
    codes: { 'english-literature': '9695' },
    notes: OWNER_TEACHES_ALL,
  }),
  ...rows('edexcel', 'igcse', ['english-literature'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-literature-2016.html — verified 2026-08-18',
    codes: { 'english-literature': '4ET1 / 4XET1' },
    notes: `${OWNER_TEACHES_ALL} Two current parallel routes: 4ET1 (2016 spec, linear) and 4XET1 (2023 spec, modular — non-UK schools only). Neither superseded.`,
  }),
  ...rows('edexcel', 'a-level', ['english-literature'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/english-literature-2015.html — verified 2026-08-18',
    codes: { 'english-literature': 'YET01' },
    notes: `${OWNER_TEACHES_ALL} International Advanced Level (YET01); International AS sibling is XET01. Edexcel A Level here is International A Level (IAL), consistent with other Edexcel A Level rows.`,
  }),
  ...rows('aqa', 'gcse', ['english-literature'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: `${AQA}/subjects`, codes: { 'english-literature': '8702' },
    notes: `${OWNER_TEACHES_ALL} AQA GCSE English Literature 8702.`,
  }),
  ...rows('aqa', 'a-level', ['english-literature'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: `${AQA}/subjects/english/a-level/english-7712/specification — verified 2026-08-18`,
    codes: { 'english-literature': '7712 / 7717' },
    notes: `${OWNER_TEACHES_ALL} AQA offers two distinct, non-interchangeable specifications: Literature A (7712) and Literature B (7717) — never silently collapsed to one.`,
  }),

  // --- Pakistan Studies / Islamiyat (Cambridge only) --------------------
  ...rows('cambridge', 'igcse', ['pakistan-studies'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-pakistan-studies-0448/ — verified 2026-08-18',
    codes: { 'pakistan-studies': '0448' }, notes: OWNER_TEACHES_ALL,
  }),
  ...rows('cambridge', 'o-level', ['pakistan-studies'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-pakistan-studies-2059/ — verified 2026-08-18',
    codes: { 'pakistan-studies': '2059' }, notes: OWNER_TEACHES_ALL,
  }),
  ...rows('cambridge', 'igcse', ['islamiyat'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-islamiyat-0493/ — verified 2026-08-18',
    codes: { islamiyat: '0493' }, notes: OWNER_TEACHES_ALL,
  }),
  ...rows('cambridge', 'o-level', ['islamiyat'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-islamiyat-2058/ — verified 2026-08-18',
    codes: { islamiyat: '2058' },
    notes: `${OWNER_TEACHES_ALL} Cambridge's official title is "Islamiyat" (not "Islamic Studies") at O Level.`,
  }),

  // --- Geography / Global Perspectives / Environmental Management -------
  ...rows('cambridge', 'igcse', ['geography'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-geography-0460/ — verified 2026-08-18',
    codes: { geography: '0460 / 0976' },
    notes: `${OWNER_TEACHES_ALL} 0460 (A*-G) and 0976 (9-1 grading) are content-identical parallel variants, both current.`,
  }),
  ...rows('cambridge', 'o-level', ['geography'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/Images/718204-2027-2029-syllabus.pdf — verified 2026-08-18 (syllabus cover page fetched directly)',
    codes: { geography: '2217' }, notes: OWNER_TEACHES_ALL,
  }),
  ...rows('cambridge', 'a-level', ['geography'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-geography-9696/ — verified 2026-08-18',
    codes: { geography: '9696' }, notes: OWNER_TEACHES_ALL,
  }),
  ...rows('cambridge', 'igcse', ['global-perspectives'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-global-perspectives-0457/ — verified 2026-08-18',
    codes: { 'global-perspectives': '0457' }, notes: OWNER_TEACHES_ALL,
  }),
  ...rows('cambridge', 'a-level', ['global-perspectives'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-global-perspectives-and-research-9239/ — verified 2026-08-18',
    codes: { 'global-perspectives': '9239' },
    notes: `${OWNER_TEACHES_ALL} Official title is "Global Perspectives & Research" at this level — differs from the plain "Global Perspectives" IGCSE title. Do not conflate.`,
  }),
  ...rows('cambridge', 'igcse', ['environmental-management'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-environmental-management-0680/ — verified 2026-08-18',
    codes: { 'environmental-management': '0680' }, notes: OWNER_TEACHES_ALL,
  }),
  ...rows('cambridge', 'o-level', ['environmental-management'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-environmental-management-5014/ — verified 2026-08-18',
    codes: { 'environmental-management': '5014' }, notes: OWNER_TEACHES_ALL,
  }),
  // Cambridge Environmental Management also exists at AS Level only (8291,
  // no full A2/A Level component) — a distinct qualification tier not
  // previously modelled. Not added here to keep this reconciliation commit
  // to resolving existing UNKNOWN rows; tracked as a follow-up scope
  // decision for a future workstream, not fabricated into this commit.

  // --- Urdu Language (Urdu Literature does not exist as its own
  //     qualification at Cambridge — recorded NOT_SUPPORTED below) --------
  ...rows('cambridge', 'igcse', ['urdu-language'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/Images/664633-2025-2027-syllabus.pdf — verified 2026-08-18 (syllabus cover page fetched directly)',
    codes: { 'urdu-language': '0539' },
    notes: `${OWNER_TEACHES_ALL} Official title is "Urdu as a Second Language" (0539) — the only Urdu IGCSE Cambridge offers; there is no separate Urdu First Language IGCSE (First Language Urdu exists only at O Level).`,
  }),
  ...rows('cambridge', 'o-level', ['urdu-language'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-urdu-first-language-3247/ — verified 2026-08-18',
    codes: { 'urdu-language': '3247 / 3248' },
    notes: `${OWNER_TEACHES_ALL} Two distinct current O Level specifications: Urdu - First Language (3247) and Urdu - Second Language (3248) — never silently collapsed to one.`,
  }),
  ...rows('cambridge', 'igcse', ['urdu-literature'], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/ — Urdu qualifications catalogue checked 2026-08-18, no "Urdu Literature" title found at IGCSE',
    notes: 'Cambridge does not offer a qualification titled "Urdu Literature" distinct from Urdu Language at IGCSE. Literature content is embedded within Urdu - First Language. Not fabricated.',
  }),
  ...rows('cambridge', 'o-level', ['urdu-literature'], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/ — Urdu qualifications catalogue checked 2026-08-18, no "Urdu Literature" title found at O Level',
    notes: 'Cambridge does not offer a qualification titled "Urdu Literature" distinct from Urdu Language at O Level (a combined "Urdu Language & Literature" exists only at Pakistan-only AS/A Level, 9866 — out of scope here). Not fabricated.',
  }),

  // --- Statistics / Commerce (Cambridge IGCSE — O Level rows already
  //     carry these subjects with codes added above in the la-course block;
  //     A Level does not exist for either subject as a standalone title) --
  ...rows('cambridge', 'igcse', ['statistics'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-statistics-0479/ — verified 2026-08-18',
    codes: { statistics: '0479' }, notes: OWNER_TEACHES_ALL,
  }),
  ...rows('cambridge', 'igcse', ['commerce'], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/Images/745979-2028-syllabus.pdf — verified 2026-08-18 (syllabus cover page fetched directly)',
    codes: { commerce: '0715' },
    notes: `${OWNER_TEACHES_ALL} Recently introduced qualification (earliest available exam series 2028); not available in all administrative zones per its own syllabus.`,
  }),
  ...rows('cambridge', 'a-level', ['statistics'], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/ — Mathematics/Further Mathematics catalogues checked 2026-08-18',
    notes: 'No standalone Cambridge International AS & A Level Statistics qualification exists. Statistics is delivered as Probability & Statistics components within AS & A Level Mathematics (9709) and Further Mathematics (9231). Not fabricated as its own title.',
  }),
  ...rows('cambridge', 'a-level', ['commerce'], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'board',
    source: 'https://www.cambridgeinternational.org/ — Business/Commerce catalogues checked 2026-08-18',
    notes: 'No Cambridge International AS & A Level Commerce qualification exists. Cambridge\'s own progression guidance directs O Level Commerce (7100) students to AS & A Level Business (9609) instead. Not fabricated.',
  }),

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
  // All codes and board summaries verified directly at ocr.org.uk (Cambridge
  // OCR) qualification pages, 2026-08-18. OCR offers GCSE and AS/A-Level only
  // — no O-Level, no IGCSE — so only those two qualification tiers appear
  // below. OCR does NOT offer Accounting at either level (confirmed absent
  // from ocr.org.uk's full GCSE and AS/A-Level subject catalogues) —
  // recorded as NOT_SUPPORTED rather than left as a silent gap.
  // =========================================================================
  ...rows('ocr', 'gcse', [
    'chemistry', 'physics', 'biology', 'mathematics', 'business', 'economics',
  ], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.ocr.org.uk/qualifications/gcse/ — verified 2026-08-18, spot-re-verified 2026-08-18 (v1.0 WS3)',
    codes: OCR_GCSE_CODES,
    notes: `${OWNER_TEACHES_ALL} GCSE Chemistry J248 spot-re-verified current (live June 2024 exam-series papers found on ocr.org.uk). See syllabuses.ts for verified board summaries.`,
  }),
  ...rows('ocr', 'a-level', [
    'chemistry', 'physics', 'biology', 'mathematics', 'business', 'economics',
  ], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.ocr.org.uk/qualifications/as-and-a-level/ — verified 2026-08-18, spot-re-verified 2026-08-18 (v1.0 WS3)',
    codes: OCR_ALEVEL_CODES,
    notes: `${OWNER_TEACHES_ALL} Business H431 is the current code (final first teach September 2025, final assessment summer 2027); OCR's replacement A Level Business (H436) has first teach September 2026, which has not yet begun, so H431 remains current and H436 is deliberately not recorded here. See syllabuses.ts for verified board summaries.`,
  }),
  ...rows('ocr', 'gcse', ['accounting'], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'board',
    source: 'https://www.ocr.org.uk/qualifications/gcse/ — full subject catalogue checked 2026-08-18, Accounting absent',
    notes: 'OCR does not offer GCSE Accounting.',
  }),
  ...rows('ocr', 'a-level', ['accounting'], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'board',
    source: 'https://www.ocr.org.uk/qualifications/as-and-a-level/ — full subject catalogue checked 2026-08-18, Accounting absent',
    notes: 'OCR does not offer A Level Accounting.',
  }),

  // =========================================================================
  // OXFORDAQA — new board integration, v1.0 WS4, 2026-08-18. A fully
  // separate awarding body from AQA (see boards.ts) — never merged. Only
  // three qualification families exist: International GCSE (mapped to the
  // 'igcse' slug, consistent with how Edexcel's International GCSE also
  // uses 'igcse') and International AS and A-level (mapped to 'a-level',
  // consistent with how Cambridge and Edexcel's International A Level also
  // use 'a-level' for a combined AS+A2 qualification family). OxfordAQA
  // does not offer O Level, UK GCSE or UK A-level — those combinations are
  // deliberately never modelled here. Every code below is independently
  // re-verified against a live oxfordaqa.com qualification page fetch,
  // 2026-08-18 — the prior unverified snapshot table supplied for this
  // integration was explicitly discarded rather than trusted.
  // =========================================================================
  ...rows('oxfordaqa', 'igcse', [
    'accounting', 'business', 'computer-science', 'economics', 'mathematics',
    'biology', 'chemistry', 'physics', 'english-language', 'english-literature',
    'geography', 'world-history', 'islamiyat', 'pakistan-studies', 'psychology',
    'sociology', 'urdu-language',
  ], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.oxfordaqa.com/qualifications/ — each subject\'s own qualification page fetched and verified 2026-08-18 (v1.0 WS4)',
    codes: OXFORDAQA_IGCSE_CODES,
    notes: `${OWNER_TEACHES_ALL} International GCSE History (9245) and Sociology (9292) are newly launched for 2026 (first teaching September 2026, first exams May/June 2028) — recorded as current, not legacy. English Literature (9275) was revised for 2026 (new set texts) but keeps the same code. Islamiyat is OxfordAQA's own exact title (not "Islamic Studies").`,
  }),
  ...rows('oxfordaqa', 'a-level', [
    'accounting', 'business', 'computer-science', 'economics', 'mathematics',
    'biology', 'chemistry', 'physics', 'english-language', 'english-literature',
    'geography', 'psychology', 'sociology',
  ], {
    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'board',
    source: 'https://www.oxfordaqa.com/qualifications/ — each subject\'s own qualification page fetched and verified 2026-08-18 (v1.0 WS4)',
    codes: OXFORDAQA_ALEVEL_CODES,
    notes: `${OWNER_TEACHES_ALL} International AS and A-level Sociology (9690) is newly launched for 2026 (first teaching September 2026). Business is mid-transition between legacy 9625 and revised 9725 — see OXFORDAQA_ALEVEL_CODES comment; both codes recorded rather than one silently chosen.`,
  }),
  // Verified absent at International AS/A-level — recorded rather than left
  // as a silent gap, per the same discipline used for Cambridge/OCR above.
  ...rows('oxfordaqa', 'a-level', ['islamiyat'], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'board',
    source: 'https://www.oxfordaqa.com/subjects/islamiat/ — subject hub checked 2026-08-18, lists International GCSE Islamiat (9237) only',
    notes: 'OxfordAQA does not offer Islamiat at AS or A-level — International GCSE (9237) is the only level offered.',
  }),
  ...rows('oxfordaqa', 'a-level', ['pakistan-studies'], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'board',
    source: 'https://www.oxfordaqa.com/subjects/pakistan-studies/ — subject hub checked 2026-08-18, lists International GCSE Pakistan Studies (9236) only',
    notes: 'OxfordAQA does not offer Pakistan Studies at AS or A-level — International GCSE (9236) is the only level offered.',
  }),
  ...rows('oxfordaqa', 'a-level', ['urdu-language'], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'board',
    source: 'https://www.oxfordaqa.com/subjects/languages/ — Languages subject hub checked 2026-08-18, lists International GCSE Urdu (9264) only',
    notes: 'OxfordAQA does not offer Urdu at AS or A-level — International GCSE (9264) is the only level offered.',
  }),
  ...rows('oxfordaqa', 'igcse', ['urdu-literature'], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'board',
    source: 'https://www.oxfordaqa.com/subjects/languages/ — Languages subject hub checked 2026-08-18, no "Urdu Literature" title found',
    notes: 'OxfordAQA does not offer a qualification titled "Urdu Literature" distinct from Urdu at any level. Not fabricated.',
  }),
  ...rows('oxfordaqa', 'a-level', ['urdu-literature'], {
    boardOfferingStatus: 'NOT_SUPPORTED', marlbridgeStatus: 'NOT_SUPPORTED', evidence: 'board',
    source: 'https://www.oxfordaqa.com/subjects/languages/ — Languages subject hub checked 2026-08-18, no "Urdu Literature" title found',
    notes: 'OxfordAQA does not offer a qualification titled "Urdu Literature" distinct from Urdu at any level. Not fabricated.',
  }),

  // =========================================================================
  // HIGHEST-TIER APPROVED SCOPE — signed off 2026-08-17.
  // These three Chemistry rows carry evidence: 'marlbridge' — a
  // Marlbridge-specific approval, the strongest evidence tier in this file —
  // distinct from the 'board'/'la-course' evidence used elsewhere. They are
  // NOT the only marlbridgeStatus ACTIVE rows in this file (see WS2,
  // 2026-08-18: marlbridgeStatus ACTIVE now also covers every other
  // verified, currently-offered combination per the owner's teach-all
  // authorization). Codes, titles and summaries verified against
  // cambridgeinternational.org (see syllabuses.ts).
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
