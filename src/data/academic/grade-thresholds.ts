/**
 * Grade-threshold explorer -- data. v2.0 AUTHORITY/PRACTICE/TOOLS/GROWTH
 * MEGA PROGRAMME WS14. Expanded under the Post-v2.0 Quality Closure, WS6
 * (2026-08-30) -- see that entry below and docs/decision-log.md for why.
 *
 * "Grade thresholds" (grade boundaries) are the minimum raw/weighted mark
 * needed for each grade in a given exam series -- Cambridge publishes a
 * dedicated PDF per syllabus per series. This file holds the SYLLABUS-
 * level threshold table (the headline "what mark do I need for a B"
 * numbers) for the five flagship specifications only, for the most
 * recently completed series (June 2026) -- every number here is copied
 * verbatim from Cambridge's own official grade-threshold PDF for that
 * syllabus and series, fetched directly, not estimated, averaged or
 * reconstructed from memory.
 *
 * Post-v2.0 Quality Closure WS6 (2026-08-30): the original version of this
 * file (v2.0 WS14) reproduced only the single FIRST-listed, "most standard"
 * paper-combination route per tier, with a caveat that other real routes
 * existed in the official PDF but weren't shown. That is exactly the
 * "representative route presented as universally applicable" problem this
 * workstream exists to fix -- a learner whose own paper combination wasn't
 * the one reproduced here had no way to select their own exact route on
 * this page; they had to already know to distrust the table and go find
 * the PDF themselves. Re-fetched all five official PDFs directly and
 * transcribed every syllabus-level route combination they publish for
 * standard (single-series) assessment:
 *   - IGCSE Chemistry (0620) and Physics (0625): all 16 Core/Extended
 *     paper-combination routes each, plus the standalone Component 50
 *     route -- 17 rows per subject, i.e. every route Cambridge publishes
 *     for these two syllabuses at this series. Component 50's own
 *     official functional name (e.g. whether it is a practical-test
 *     variant) is not asserted here -- the grade-threshold PDF itself
 *     gives only the bare component number, and per this workstream's own
 *     instruction to use the official neutral identifier when a label
 *     cannot be reverified, "Component 50" is used as-is rather than
 *     guessing at a functional label the source document does not state.
 *   - IGCSE Mathematics (0580): all 6 Core/Extended combination routes
 *     (Cambridge publishes fewer paper-set variants for this syllabus)
 *     plus Component 50 -- 7 rows, again every route published. As with
 *     0620/0625's Component 50 above, no functional label is asserted for
 *     it beyond its bare component number, for the same reason.
 *   - AS & A Level Chemistry (9701) and Physics (9702): all 8 full-A-Level
 *     "linear assessment" (single-series) routes and all 8 AS-Level-only
 *     routes, per subject -- 16 rows per subject.
 * NOT included: Cambridge's "staged assessment" routes for 9701/9702 (where
 * AS papers are sat in one series and A2 papers in a later one -- roughly
 * 20 further route combinations per subject). Reproducing those correctly
 * would require verifying a much larger, easily-mistranscribed table for a
 * narrower audience (staged entry is the less common path); rather than
 * risk a transcription error or silently omit them the way the original
 * version did for ALL non-representative routes, they are explicitly named
 * and excluded here, with a direct link to the official PDF, which lists
 * every staged route in full. See STAGED_ASSESSMENT_NOTE below.
 *
 * D-541 (25 Nov 2026): the model now carries a `board` field and a 9-to-1
 * grade scale, and holds Pearson Edexcel International GCSE overall
 * (whole-qualification) boundaries for June 2026, copied from Pearson's own
 * "International GCSE (9-1) June 2026" grade-boundaries PDF. Every number was
 * placed by its printed column position under the PDF's 9..1 header (this
 * matters for 4MA1, where Foundation prints grades 5-1 and Higher 9-3 in one
 * table). Edexcel IAL (unit-based, raw and UMS) is NOT included: out of scope
 * until its unit structure is designed. Edexcel English Language B (4EB1) is
 * not included either: the site's Edexcel English Language resources are all
 * for 4EA1 (A). The Cambridge scope notes below apply to the Cambridge
 * records only.
 *
 * Scope, stated honestly (also stated on the page itself):
 * - Cambridge: only the 5 flagship specs are covered, matching this programme's
 *   established flagship-first strategy (see D-065 and onward). This
 *   workstream deepened coverage of these 5 specs; it did not add new
 *   boards, qualifications or series, per its own bounded scope.
 * - Only the June 2026 series is covered -- the most recently completed
 *   series as of this build. Thresholds are set independently each
 *   series (they are NOT the same from series to series), so this is a
 *   dated snapshot, not a standing "the" grade boundary.
 * - Component-level thresholds (per individual paper) are NOT included --
 *   only syllabus-level (overall grade) thresholds, since that is what
 *   the vast majority of visitors actually want to check.
 */

export type Grade = 'A*' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'a' | 'b' | 'c' | 'd' | 'e'
  // Pearson Edexcel International GCSE (9 to 1), D-541.
  | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2' | '1';

/** The exam board a record's numbers come from; it decides the grade scale (GRADE_SCALE_BY_BOARD). */
export type ExamBoard = 'Cambridge' | 'Pearson Edexcel';

/** Grades shown as table columns for each board, best to worst. Cambridge: A*-G plus the AS-only a-e; Edexcel IGCSE: 9 to 1. */
export const GRADE_SCALE_BY_BOARD: Record<ExamBoard, readonly Grade[]> = {
  Cambridge: ['A*', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'a', 'b', 'c', 'd', 'e'],
  'Pearson Edexcel': ['9', '8', '7', '6', '5', '4', '3', '2', '1'],
};

/** Board display order on the page and in the drop-down. */
export const BOARD_ORDER: readonly ExamBoard[] = ['Cambridge', 'Pearson Edexcel'];

export interface GradeThresholdRow {
  readonly combination: string;
  readonly maxMark: number;
  readonly thresholds: Partial<Record<Grade, number>>;
}

export interface SyllabusGradeThresholds {
  readonly board: ExamBoard;
  readonly code: string;
  readonly subjectLabel: string;
  readonly qualificationLabel: string;
  readonly series: string;
  readonly rows: readonly GradeThresholdRow[];
  readonly note?: string;
  readonly officialSourceUrl: string;
  readonly verifiedOn: string;
}

const ALL_ROUTES_NOTE =
  'Every syllabus-level paper-combination route Cambridge published for this syllabus and series is shown below -- select your own exact combination by its component (paper) numbers rather than assuming a single representative route applies to you. See the official PDF to confirm which combination applies to your entry.';

const EDEXCEL_SOURCE_URL = 'https://qualifications.pearson.com/en/support/support-topics/results-certification/grade-boundaries.html';

const EDEXCEL_NOTE =
  "These are Pearson's overall (whole-qualification) grade boundaries, in raw marks out of the maximum shown, for the June 2026 series. Each row is one paper combination exactly as Pearson prints it; select your own papers by their codes. A dash means Pearson publishes no boundary for that grade on that row. Pearson's document gives the overall boundaries only, not boundaries for individual papers. Grade U is below the lowest boundary shown.";

const EDEXCEL_MATHS_TIER_NOTE =
  'Foundation and Higher are different tiers and Pearson publishes different grades for each: the Foundation rows give boundaries for grades 5 to 1 only and the Higher rows give grades 9 to 3 only, so each tier shows dashes for the grades it does not award.';

const STAGED_ASSESSMENT_NOTE =
  "This table covers every standard (single-series) route Cambridge published for this syllabus and series. It does NOT include \"staged assessment\" routes, where the AS papers were sat in an earlier series and the A2 papers in a later one -- Cambridge publishes roughly 20 further combination rows for that path, which this table does not reproduce. If you sat your papers in a staged (multi-series) pattern, use the official PDF linked below, which lists every staged route in full.";

/*
 * ---------------------------------------------------------------------------
 * HOW TO ADD THE NOVEMBER 2026 THRESHOLDS (audit 3 item 44, 25 Nov 2026)
 * ---------------------------------------------------------------------------
 * Cambridge publishes November-series grade thresholds with the results
 * (November 2026 results: 7 January 2027 for AS & A Level, 14 January 2027
 * for IGCSE and O Level, per src/data/academic/exam-calendar.ts). Not before.
 *
 * For each syllabus, ADD one record (do not edit the June 2026 one: each
 * series is its own dated snapshot), with every row copied from Cambridge's
 * own "<syllabus> November 2026 grade threshold table" PDF:
 *
 *   {
 *     code: '0620', subjectLabel: 'Chemistry', qualificationLabel: 'IGCSE',
 *     series: 'November 2026',
 *     rows: [ { combination: 'Core (Components ...)', maxMark: ..., thresholds: { C: ..., ... } }, ... ],
 *     note: ALL_ROUTES_NOTE,                  // STAGED_ASSESSMENT_NOTE for 9701/9702
 *     officialSourceUrl: '<the November 2026 PDF>',
 *     verifiedOn: '<the day you read it, YYYY-MM-DD>',
 *   },
 *
 * Nothing else changes: the page groups records by code, shows the newest
 * series first under the same drop-down entry, and builds its title,
 * description and lead from the series present (seriesCovered()). Then run
 * node --experimental-strip-types scripts/validate-grade-thresholds.mjs
 * (series format, routes, mark sanity, sources). The page also fails the
 * build if two records share a code and series (thresholdProblems()).
 * A syllabus with no November 2026 PDF simply keeps June 2026 only.
 *
 * HOW TO ADD A PEARSON EDEXCEL INTERNATIONAL GCSE SERIES (D-541)
 * Same shape with `board: 'Pearson Edexcel'`, thresholds keyed '9'..'1' (quoted
 * strings; omit U and any grade Pearson does not print for that row), one row
 * per printed paper combination, maxMark = the printed Max Mark. Match each
 * number to its grade by its column under the 9..1 header, not by its order in
 * the row: tiered rows (4MA1) print fewer numbers. Use the series' own PDF
 * for officialSourceUrl if Pearson publishes one at a stable address.
 */
export const GRADE_THRESHOLDS: readonly SyllabusGradeThresholds[] = [
  {
    board: 'Cambridge',
    code: '0620',
    subjectLabel: 'Chemistry',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Core (Components 11, 31, 51)', maxMark: 200, thresholds: { C: 105, D: 88, E: 72, F: 55, G: 38 } },
      { combination: 'Core (Components 11, 31, 61)', maxMark: 200, thresholds: { C: 107, D: 90, E: 73, F: 56, G: 39 } },
      { combination: 'Core (Components 12, 32, 52)', maxMark: 200, thresholds: { C: 107, D: 89, E: 71, F: 53, G: 35 } },
      { combination: 'Core (Components 12, 32, 62)', maxMark: 200, thresholds: { C: 108, D: 89, E: 71, F: 53, G: 35 } },
      { combination: 'Core (Components 13, 33, 53)', maxMark: 200, thresholds: { C: 106, D: 89, E: 72, F: 56, G: 40 } },
      { combination: 'Core (Components 13, 33, 63)', maxMark: 200, thresholds: { C: 107, D: 90, E: 73, F: 57, G: 41 } },
      { combination: 'Core (Components 17, 31, 51)', maxMark: 200, thresholds: { C: 105, D: 88, E: 72, F: 55, G: 38 } },
      { combination: 'Core (Components 17, 31, 61)', maxMark: 200, thresholds: { C: 107, D: 90, E: 73, F: 56, G: 39 } },
      { combination: 'Extended (Components 21, 41, 51)', maxMark: 200, thresholds: { 'A*': 173, A: 147, B: 119, C: 91, D: 78, E: 66, F: 53, G: 40 } },
      { combination: 'Extended (Components 21, 41, 61)', maxMark: 200, thresholds: { 'A*': 175, A: 150, B: 121, C: 93, D: 80, E: 67, F: 54, G: 41 } },
      { combination: 'Extended (Components 22, 42, 52)', maxMark: 200, thresholds: { 'A*': 168, A: 138, B: 108, C: 79, D: 68, E: 57, F: 46, G: 35 } },
      { combination: 'Extended (Components 22, 42, 62)', maxMark: 200, thresholds: { 'A*': 169, A: 139, B: 109, C: 80, D: 68, E: 57, F: 46, G: 35 } },
      { combination: 'Extended (Components 23, 43, 53)', maxMark: 200, thresholds: { 'A*': 172, A: 144, B: 116, C: 89, D: 76, E: 64, F: 53, G: 42 } },
      { combination: 'Extended (Components 23, 43, 63)', maxMark: 200, thresholds: { 'A*': 172, A: 145, B: 117, C: 90, D: 77, E: 65, F: 54, G: 43 } },
      { combination: 'Extended (Components 27, 41, 51)', maxMark: 200, thresholds: { 'A*': 173, A: 147, B: 119, C: 91, D: 78, E: 66, F: 53, G: 40 } },
      { combination: 'Extended (Components 27, 41, 61)', maxMark: 200, thresholds: { 'A*': 175, A: 150, B: 121, C: 93, D: 80, E: 67, F: 54, G: 41 } },
      { combination: 'Component 50', maxMark: 90, thresholds: { 'A*': 81, A: 75, B: 66, C: 57, D: 50, E: 43, F: 35, G: 27 } },
    ],
    note: ALL_ROUTES_NOTE,
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/762856-chemistry-0620-june-2026-grade-threshold-table.pdf',
    verifiedOn: '2026-08-30',
  },
  {
    board: 'Cambridge',
    code: '0625',
    subjectLabel: 'Physics',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Core (Components 11, 31, 51)', maxMark: 200, thresholds: { C: 105, D: 91, E: 78, F: 64, G: 50 } },
      { combination: 'Core (Components 11, 31, 61)', maxMark: 200, thresholds: { C: 107, D: 93, E: 80, F: 65, G: 50 } },
      { combination: 'Core (Components 12, 32, 52)', maxMark: 200, thresholds: { C: 114, D: 99, E: 85, F: 70, G: 55 } },
      { combination: 'Core (Components 12, 32, 62)', maxMark: 200, thresholds: { C: 114, D: 99, E: 84, F: 68, G: 52 } },
      { combination: 'Core (Components 13, 33, 53)', maxMark: 200, thresholds: { C: 114, D: 99, E: 85, F: 70, G: 55 } },
      { combination: 'Core (Components 13, 33, 63)', maxMark: 200, thresholds: { C: 113, D: 99, E: 85, F: 69, G: 53 } },
      { combination: 'Core (Components 17, 31, 51)', maxMark: 200, thresholds: { C: 105, D: 91, E: 78, F: 64, G: 50 } },
      { combination: 'Core (Components 17, 31, 61)', maxMark: 200, thresholds: { C: 107, D: 93, E: 80, F: 65, G: 50 } },
      { combination: 'Extended (Components 21, 41, 51)', maxMark: 200, thresholds: { 'A*': 162, A: 137, B: 112, C: 88, D: 77, E: 67, F: 57, G: 47 } },
      { combination: 'Extended (Components 21, 41, 61)', maxMark: 200, thresholds: { 'A*': 165, A: 140, B: 115, C: 90, D: 79, E: 69, F: 58, G: 47 } },
      { combination: 'Extended (Components 22, 42, 52)', maxMark: 200, thresholds: { 'A*': 160, A: 133, B: 106, C: 80, D: 71, E: 62, F: 53, G: 44 } },
      { combination: 'Extended (Components 22, 42, 62)', maxMark: 200, thresholds: { 'A*': 161, A: 134, B: 107, C: 80, D: 70, E: 61, F: 51, G: 41 } },
      { combination: 'Extended (Components 23, 43, 53)', maxMark: 200, thresholds: { 'A*': 159, A: 135, B: 111, C: 88, D: 78, E: 69, F: 59, G: 49 } },
      { combination: 'Extended (Components 23, 43, 63)', maxMark: 200, thresholds: { 'A*': 156, A: 133, B: 110, C: 87, D: 78, E: 69, F: 58, G: 47 } },
      { combination: 'Extended (Components 27, 41, 51)', maxMark: 200, thresholds: { 'A*': 162, A: 137, B: 112, C: 88, D: 77, E: 67, F: 57, G: 47 } },
      { combination: 'Extended (Components 27, 41, 61)', maxMark: 200, thresholds: { 'A*': 165, A: 140, B: 115, C: 90, D: 79, E: 69, F: 58, G: 47 } },
      { combination: 'Component 50', maxMark: 90, thresholds: { 'A*': 81, A: 75, B: 64, C: 54, D: 47, E: 41, F: 34, G: 27 } },
    ],
    note: ALL_ROUTES_NOTE,
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/762857-physics-0625-june-2026-grade-threshold-table.pdf',
    verifiedOn: '2026-08-30',
  },
  {
    board: 'Cambridge',
    code: '0580',
    subjectLabel: 'Mathematics',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Core (Components 11, 31)', maxMark: 160, thresholds: { C: 82, D: 68, E: 55, F: 42, G: 29 } },
      { combination: 'Core (Components 12, 32)', maxMark: 160, thresholds: { C: 83, D: 67, E: 52, F: 37, G: 22 } },
      { combination: 'Core (Components 13, 33)', maxMark: 160, thresholds: { C: 83, D: 69, E: 55, F: 42, G: 29 } },
      { combination: 'Extended (Components 21, 41)', maxMark: 200, thresholds: { 'A*': 162, A: 138, B: 114, C: 90, D: 73, E: 56 } },
      { combination: 'Extended (Components 22, 42)', maxMark: 200, thresholds: { 'A*': 177, A: 154, B: 120, C: 87, D: 68, E: 49 } },
      { combination: 'Extended (Components 23, 43)', maxMark: 200, thresholds: { 'A*': 177, A: 154, B: 124, C: 94, D: 71, E: 49 } },
      { combination: 'Component 50', maxMark: 90, thresholds: { 'A*': 82, A: 75, B: 63, C: 52, D: 45, E: 39, F: 33, G: 27 } },
    ],
    note: `${ALL_ROUTES_NOTE} Extended has no F or G grade on any route -- Extended is capped at grade E as the lowest available grade.`,
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/762852-mathematics-without-coursework-0580-june-2026-grade-threshold-table.pdf',
    verifiedOn: '2026-08-30',
  },
  {
    board: 'Cambridge',
    code: '9701',
    subjectLabel: 'Chemistry',
    qualificationLabel: 'AS & A Level',
    series: 'June 2026',
    rows: [
      { combination: 'Full A Level (Components 11, 21, 31, 41, 51)', maxMark: 260, thresholds: { 'A*': 209, A: 185, B: 161, C: 133, D: 106, E: 79 } },
      { combination: 'Full A Level (Components 11, 21, 32, 41, 51)', maxMark: 260, thresholds: { 'A*': 207, A: 183, B: 159, C: 132, D: 105, E: 79 } },
      { combination: 'Full A Level (Components 12, 22, 33, 42, 52)', maxMark: 260, thresholds: { 'A*': 201, A: 168, B: 135, C: 110, D: 86, E: 62 } },
      { combination: 'Full A Level (Components 12, 22, 34, 42, 52)', maxMark: 260, thresholds: { 'A*': 205, A: 171, B: 137, C: 112, D: 87, E: 62 } },
      { combination: 'Full A Level (Components 13, 23, 35, 43, 53)', maxMark: 260, thresholds: { 'A*': 201, A: 175, B: 149, C: 124, D: 99, E: 74 } },
      { combination: 'Full A Level (Components 14, 24, 37, 44, 54)', maxMark: 260, thresholds: { 'A*': 215, A: 184, B: 153, C: 125, D: 98, E: 71 } },
      { combination: 'Full A Level (Components 14, 24, 38, 44, 54)', maxMark: 260, thresholds: { 'A*': 219, A: 187, B: 155, C: 127, D: 99, E: 71 } },
      { combination: 'Full A Level (Components 50, 60)', maxMark: 150, thresholds: { 'A*': 137, A: 124, B: 108, C: 89, D: 70, E: 51 } },
      { combination: 'AS Level only (Components 11, 21, 31)', maxMark: 130, thresholds: { a: 93, b: 80, c: 65, d: 51, e: 37 } },
      { combination: 'AS Level only (Components 11, 21, 32)', maxMark: 130, thresholds: { a: 91, b: 78, c: 64, d: 50, e: 37 } },
      { combination: 'AS Level only (Components 12, 22, 33)', maxMark: 130, thresholds: { a: 79, b: 62, c: 51, d: 41, e: 31 } },
      { combination: 'AS Level only (Components 12, 22, 34)', maxMark: 130, thresholds: { a: 82, b: 64, c: 53, d: 42, e: 31 } },
      { combination: 'AS Level only (Components 13, 23, 35)', maxMark: 130, thresholds: { a: 83, b: 68, c: 56, d: 44, e: 32 } },
      { combination: 'AS Level only (Components 14, 24, 37)', maxMark: 130, thresholds: { a: 92, b: 76, c: 63, d: 50, e: 37 } },
      { combination: 'AS Level only (Components 14, 24, 38)', maxMark: 130, thresholds: { a: 95, b: 78, c: 64, d: 50, e: 37 } },
      { combination: 'AS Level only (Component 50)', maxMark: 75, thresholds: { a: 63, b: 54, c: 45, d: 36, e: 27 } },
    ],
    note: STAGED_ASSESSMENT_NOTE,
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/761525-chemistry-9701-june-2026-grade-threshold-table.pdf',
    verifiedOn: '2026-08-30',
  },
  {
    board: 'Cambridge',
    code: '9702',
    subjectLabel: 'Physics',
    qualificationLabel: 'AS & A Level',
    series: 'June 2026',
    rows: [
      { combination: 'Full A Level (Components 11, 21, 31, 41, 51)', maxMark: 260, thresholds: { 'A*': 198, A: 177, B: 156, C: 132, D: 108, E: 84 } },
      { combination: 'Full A Level (Components 11, 21, 32, 41, 51)', maxMark: 260, thresholds: { 'A*': 196, A: 176, B: 156, C: 132, D: 108, E: 84 } },
      { combination: 'Full A Level (Components 12, 22, 33, 42, 52)', maxMark: 260, thresholds: { 'A*': 203, A: 177, B: 151, C: 126, D: 101, E: 76 } },
      { combination: 'Full A Level (Components 12, 22, 34, 42, 52)', maxMark: 260, thresholds: { 'A*': 202, A: 176, B: 150, C: 125, D: 100, E: 76 } },
      { combination: 'Full A Level (Components 13, 23, 35, 43, 53)', maxMark: 260, thresholds: { 'A*': 196, A: 174, B: 152, C: 127, D: 103, E: 79 } },
      { combination: 'Full A Level (Components 14, 24, 37, 44, 54)', maxMark: 260, thresholds: { 'A*': 210, A: 186, B: 162, C: 136, D: 110, E: 84 } },
      { combination: 'Full A Level (Components 14, 24, 38, 44, 54)', maxMark: 260, thresholds: { 'A*': 209, A: 185, B: 161, C: 135, D: 109, E: 84 } },
      { combination: 'Full A Level (Components 50, 60)', maxMark: 150, thresholds: { 'A*': 124, A: 114, B: 104, C: 84, D: 64, E: 45 } },
      { combination: 'AS Level only (Components 11, 21, 31)', maxMark: 130, thresholds: { a: 97, b: 86, c: 75, d: 64, e: 53 } },
      { combination: 'AS Level only (Components 11, 21, 32)', maxMark: 130, thresholds: { a: 96, b: 86, c: 75, d: 64, e: 53 } },
      { combination: 'AS Level only (Components 12, 22, 33)', maxMark: 130, thresholds: { a: 95, b: 83, c: 71, d: 59, e: 47 } },
      { combination: 'AS Level only (Components 12, 22, 34)', maxMark: 130, thresholds: { a: 94, b: 82, c: 70, d: 58, e: 47 } },
      { combination: 'AS Level only (Components 13, 23, 35)', maxMark: 130, thresholds: { a: 94, b: 82, c: 70, d: 59, e: 48 } },
      { combination: 'AS Level only (Components 14, 24, 37)', maxMark: 130, thresholds: { a: 104, b: 93, c: 80, d: 67, e: 55 } },
      { combination: 'AS Level only (Components 14, 24, 38)', maxMark: 130, thresholds: { a: 103, b: 92, c: 79, d: 67, e: 55 } },
      { combination: 'AS Level only (Component 50)', maxMark: 75, thresholds: { a: 59, b: 54, c: 45, d: 36, e: 27 } },
    ],
    note: STAGED_ASSESSMENT_NOTE,
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/761526-physics-9702-june-2026-grade-threshold-table.pdf',
    verifiedOn: '2026-08-30',
  },
  {
    board: 'Pearson Edexcel',
    code: '4AC1',
    subjectLabel: 'Accounting',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Papers 01 and 02', maxMark: 150, thresholds: { '9': 133, '8': 121, '7': 109, '6': 98, '5': 87, '4': 76, '3': 57, '2': 39, '1': 21 } },
      { combination: 'Papers 01R and 02R', maxMark: 150, thresholds: { '9': 131, '8': 116, '7': 101, '6': 91, '5': 81, '4': 72, '3': 53, '2': 34, '1': 16 } },
    ],
    note: EDEXCEL_NOTE,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-25',
  },
  {
    board: 'Pearson Edexcel',
    code: '4BI1',
    subjectLabel: 'Biology',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Papers 1B and 2B', maxMark: 180, thresholds: { '9': 142, '8': 127, '7': 112, '6': 97, '5': 82, '4': 67, '3': 55, '2': 43, '1': 32 } },
      { combination: 'Papers 1BR and 2BR', maxMark: 180, thresholds: { '9': 146, '8': 131, '7': 117, '6': 104, '5': 92, '4': 80, '3': 64, '2': 49, '1': 34 } },
    ],
    note: EDEXCEL_NOTE,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-25',
  },
  {
    board: 'Pearson Edexcel',
    code: '4BS1',
    subjectLabel: 'Business',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Papers 01 and 02', maxMark: 160, thresholds: { '9': 133, '8': 124, '7': 115, '6': 103, '5': 92, '4': 81, '3': 70, '2': 59, '1': 48 } },
      { combination: 'Papers 01R and 02R', maxMark: 160, thresholds: { '9': 137, '8': 129, '7': 122, '6': 110, '5': 98, '4': 87, '3': 72, '2': 58, '1': 44 } },
      { combination: 'Papers 1C and 2C', maxMark: 160, thresholds: { '9': 133, '8': 124, '7': 115, '6': 103, '5': 92, '4': 81, '3': 70, '2': 59, '1': 48 } },
      { combination: 'Papers 1C and 02', maxMark: 160, thresholds: { '9': 133, '8': 124, '7': 115, '6': 103, '5': 92, '4': 81, '3': 70, '2': 59, '1': 48 } },
      { combination: 'Papers 1CR and 2CR', maxMark: 160, thresholds: { '9': 137, '8': 129, '7': 122, '6': 110, '5': 98, '4': 87, '3': 72, '2': 58, '1': 44 } },
    ],
    note: EDEXCEL_NOTE,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-25',
  },
  {
    board: 'Pearson Edexcel',
    code: '4CH1',
    subjectLabel: 'Chemistry',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Papers 1C and 2C', maxMark: 180, thresholds: { '9': 141, '8': 122, '7': 103, '6': 90, '5': 78, '4': 66, '3': 53, '2': 41, '1': 29 } },
      { combination: 'Papers 1CR and 2CR', maxMark: 180, thresholds: { '9': 150, '8': 130, '7': 111, '6': 99, '5': 88, '4': 77, '3': 61, '2': 46, '1': 31 } },
    ],
    note: EDEXCEL_NOTE,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-25',
  },
  {
    board: 'Pearson Edexcel',
    code: '4EC1',
    subjectLabel: 'Economics',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Papers 01 and 02', maxMark: 160, thresholds: { '9': 122, '8': 112, '7': 102, '6': 93, '5': 85, '4': 77, '3': 64, '2': 51, '1': 38 } },
      { combination: 'Papers 01R and 02R', maxMark: 160, thresholds: { '9': 121, '8': 111, '7': 101, '6': 94, '5': 87, '4': 81, '3': 69, '2': 57, '1': 45 } },
      { combination: 'Papers 1C and 2C', maxMark: 160, thresholds: { '9': 122, '8': 112, '7': 102, '6': 93, '5': 85, '4': 77, '3': 64, '2': 51, '1': 38 } },
      { combination: 'Papers 1CR and 2CR', maxMark: 160, thresholds: { '9': 121, '8': 111, '7': 101, '6': 94, '5': 87, '4': 81, '3': 69, '2': 57, '1': 45 } },
    ],
    note: EDEXCEL_NOTE,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-25',
  },
  {
    board: 'Pearson Edexcel',
    code: '4EA1',
    subjectLabel: 'English Language A',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Papers 01 and 02', maxMark: 150, thresholds: { '9': 113, '8': 105, '7': 98, '6': 88, '5': 78, '4': 69, '3': 51, '2': 34, '1': 17 } },
      { combination: 'Papers 01 and 03', maxMark: 150, thresholds: { '9': 123, '8': 115, '7': 108, '6': 97, '5': 87, '4': 77, '3': 59, '2': 41, '1': 24 } },
      { combination: 'Papers 01R and 02R', maxMark: 150, thresholds: { '9': 116, '8': 108, '7': 100, '6': 91, '5': 82, '4': 73, '3': 54, '2': 35, '1': 17 } },
      { combination: 'Papers 01R and 03', maxMark: 150, thresholds: { '9': 126, '8': 118, '7': 110, '6': 100, '5': 90, '4': 80, '3': 61, '2': 42, '1': 24 } },
      { combination: 'Papers 01 and 03T', maxMark: 150, thresholds: { '9': 123, '8': 115, '7': 108, '6': 97, '5': 87, '4': 77, '3': 59, '2': 41, '1': 24 } },
      { combination: 'Papers 01R and 03T', maxMark: 150, thresholds: { '9': 126, '8': 118, '7': 110, '6': 100, '5': 90, '4': 80, '3': 61, '2': 42, '1': 24 } },
      { combination: 'Papers 1C and 2C', maxMark: 150, thresholds: { '9': 113, '8': 105, '7': 98, '6': 88, '5': 78, '4': 69, '3': 51, '2': 34, '1': 17 } },
      { combination: 'Papers 02 and 1C', maxMark: 150, thresholds: { '9': 113, '8': 105, '7': 98, '6': 88, '5': 78, '4': 69, '3': 51, '2': 34, '1': 17 } },
      { combination: 'Papers 01 and 2C', maxMark: 150, thresholds: { '9': 113, '8': 105, '7': 98, '6': 88, '5': 78, '4': 69, '3': 51, '2': 34, '1': 17 } },
      { combination: 'Papers 03 and 1C', maxMark: 150, thresholds: { '9': 123, '8': 115, '7': 108, '6': 97, '5': 87, '4': 77, '3': 59, '2': 41, '1': 24 } },
      { combination: 'Papers 1CR and 2CR', maxMark: 150, thresholds: { '9': 116, '8': 108, '7': 100, '6': 91, '5': 82, '4': 73, '3': 54, '2': 35, '1': 17 } },
      { combination: 'Papers 03 and 1CR', maxMark: 150, thresholds: { '9': 126, '8': 118, '7': 110, '6': 100, '5': 90, '4': 80, '3': 61, '2': 42, '1': 24 } },
      { combination: 'Papers 03T and 1C', maxMark: 150, thresholds: { '9': 123, '8': 115, '7': 108, '6': 97, '5': 87, '4': 77, '3': 59, '2': 41, '1': 24 } },
    ],
    note: EDEXCEL_NOTE,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-25',
  },
  {
    board: 'Pearson Edexcel',
    code: '4ET1',
    subjectLabel: 'English Literature',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Papers 01 and 02', maxMark: 150, thresholds: { '9': 121, '8': 113, '7': 106, '6': 93, '5': 81, '4': 69, '3': 52, '2': 36, '1': 20 } },
      { combination: 'Papers 01 and 03', maxMark: 150, thresholds: { '9': 125, '8': 116, '7': 108, '6': 96, '5': 84, '4': 72, '3': 55, '2': 38, '1': 22 } },
      { combination: 'Papers 01R and 02R', maxMark: 150, thresholds: { '9': 123, '8': 115, '7': 108, '6': 94, '5': 81, '4': 68, '3': 51, '2': 35, '1': 19 } },
      { combination: 'Papers 01R and 03', maxMark: 150, thresholds: { '9': 127, '8': 118, '7': 109, '6': 96, '5': 84, '4': 72, '3': 55, '2': 38, '1': 22 } },
      { combination: 'Papers 01 and 03T', maxMark: 150, thresholds: { '9': 125, '8': 116, '7': 108, '6': 96, '5': 84, '4': 72, '3': 55, '2': 38, '1': 22 } },
      { combination: 'Papers 1C and 2C', maxMark: 150, thresholds: { '9': 121, '8': 113, '7': 106, '6': 93, '5': 81, '4': 69, '3': 52, '2': 36, '1': 20 } },
      { combination: 'Papers 02 and 1C', maxMark: 150, thresholds: { '9': 121, '8': 113, '7': 106, '6': 93, '5': 81, '4': 69, '3': 52, '2': 36, '1': 20 } },
      { combination: 'Papers 01 and 2C', maxMark: 150, thresholds: { '9': 121, '8': 113, '7': 106, '6': 93, '5': 81, '4': 69, '3': 52, '2': 36, '1': 20 } },
      { combination: 'Papers 03 and 1C', maxMark: 150, thresholds: { '9': 125, '8': 116, '7': 108, '6': 96, '5': 84, '4': 72, '3': 55, '2': 38, '1': 22 } },
      { combination: 'Papers 1CR and 2CR', maxMark: 150, thresholds: { '9': 123, '8': 115, '7': 108, '6': 94, '5': 81, '4': 68, '3': 51, '2': 35, '1': 19 } },
      { combination: 'Papers 03 and 1CR', maxMark: 150, thresholds: { '9': 127, '8': 118, '7': 109, '6': 96, '5': 84, '4': 72, '3': 55, '2': 38, '1': 22 } },
    ],
    note: EDEXCEL_NOTE,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-25',
  },
  {
    board: 'Pearson Edexcel',
    code: '4HI1',
    subjectLabel: 'History',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Papers 01 and 02', maxMark: 120, thresholds: { '9': 99, '8': 91, '7': 83, '6': 74, '5': 66, '4': 58, '3': 43, '2': 28, '1': 14 } },
      { combination: 'Papers 01R and 02R', maxMark: 120, thresholds: { '9': 94, '8': 84, '7': 75, '6': 66, '5': 57, '4': 49, '3': 36, '2': 24, '1': 12 } },
      { combination: 'Papers 1C and 2C', maxMark: 120, thresholds: { '9': 99, '8': 91, '7': 83, '6': 74, '5': 66, '4': 58, '3': 43, '2': 28, '1': 14 } },
      { combination: 'Papers 1C and 02', maxMark: 120, thresholds: { '9': 99, '8': 91, '7': 83, '6': 74, '5': 66, '4': 58, '3': 43, '2': 28, '1': 14 } },
      { combination: 'Papers 1CR and 2CR', maxMark: 120, thresholds: { '9': 94, '8': 84, '7': 75, '6': 66, '5': 57, '4': 49, '3': 36, '2': 24, '1': 12 } },
    ],
    note: EDEXCEL_NOTE,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-25',
  },
  {
    board: 'Pearson Edexcel',
    code: '4MA1',
    subjectLabel: 'Mathematics A',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Foundation (Papers 1F and 2F)', maxMark: 200, thresholds: { '5': 148, '4': 125, '3': 90, '2': 56, '1': 22 } },
      { combination: 'Higher (Papers 1H and 2H)', maxMark: 200, thresholds: { '9': 165, '8': 138, '7': 111, '6': 87, '5': 64, '4': 41, '3': 29 } },
      { combination: 'Foundation (Papers 1FR and 2FR)', maxMark: 200, thresholds: { '5': 147, '4': 125, '3': 90, '2': 55, '1': 21 } },
      { combination: 'Higher (Papers 1HR and 2HR)', maxMark: 200, thresholds: { '9': 171, '8': 145, '7': 119, '6': 94, '5': 69, '4': 45, '3': 33 } },
    ],
    note: `${EDEXCEL_NOTE} ${EDEXCEL_MATHS_TIER_NOTE}`,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-25',
  },
  {
    board: 'Pearson Edexcel',
    code: '4PH1',
    subjectLabel: 'Physics',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Papers 1P and 2P', maxMark: 180, thresholds: { '9': 138, '8': 121, '7': 105, '6': 94, '5': 83, '4': 72, '3': 60, '2': 49, '1': 38 } },
      { combination: 'Papers 1PR and 2PR', maxMark: 180, thresholds: { '9': 134, '8': 116, '7': 99, '6': 88, '5': 77, '4': 67, '3': 56, '2': 45, '1': 35 } },
    ],
    note: EDEXCEL_NOTE,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-25',
  },
] as const;

const SERIES_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** Sort key for "June 2026", "October/November 2026": year, then the last month named. */
export function seriesSortKey(series: string): number {
  const m = /^(.+)\s(\d{4})$/.exec(series);
  if (!m) return 0;
  const months = m[1].split('/').map((x) => SERIES_MONTHS.indexOf(x)).filter((x) => x >= 0);
  return Number(m[2]) * 100 + (months.length > 0 ? Math.max(...months) + 1 : 0);
}

export interface SyllabusThresholdGroup {
  readonly board: ExamBoard;
  readonly code: string;
  readonly subjectLabel: string;
  readonly qualificationLabel: string;
  /** Newest series first. */
  readonly records: readonly SyllabusGradeThresholds[];
}

/** One entry per syllabus code, in the order codes first appear in GRADE_THRESHOLDS; each code's series newest first. */
export function thresholdsByCode(list: readonly SyllabusGradeThresholds[] = GRADE_THRESHOLDS): SyllabusThresholdGroup[] {
  const codes = [...new Set(list.map((g) => g.code))];
  return codes.map((code) => {
    const records = list.filter((g) => g.code === code).sort((a, b) => seriesSortKey(b.series) - seriesSortKey(a.series));
    return { board: records[0].board, code, subjectLabel: records[0].subjectLabel, qualificationLabel: records[0].qualificationLabel, records };
  });
}

/** The series the data holds, newest first, e.g. ['November 2026', 'June 2026']. */
export function seriesCovered(list: readonly SyllabusGradeThresholds[] = GRADE_THRESHOLDS): string[] {
  return [...new Set(list.map((g) => g.series))].sort((a, b) => seriesSortKey(b) - seriesSortKey(a));
}

/** "June 2026"; "November 2026 and June 2026". */
export const seriesPhrase = (series: readonly string[]): string =>
  series.length <= 1 ? series.join('') : `${series.slice(0, -1).join(', ')} and ${series[series.length - 1]}`;

/** Two records for the same syllabus and series would show two tables for one series. */
export function thresholdProblems(list: readonly SyllabusGradeThresholds[] = GRADE_THRESHOLDS): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const g of list) {
    const key = `${g.code} ${g.series}`;
    if (seen.has(key)) out.push(`${key}: two records for the same syllabus and series`);
    seen.add(key);
    if (seriesSortKey(g.series) === 0) out.push(`${key}: series is not "<Month> <YYYY>"`);
  }
  for (const g of list) {
    if (!(BOARD_ORDER as readonly string[]).includes(g.board)) out.push(`${g.code} ${g.series}: board "${g.board}" is not one of ${BOARD_ORDER.join(', ')}`);
  }
  const labels = new Map<string, string>();
  for (const g of list) {
    const l = `${g.board} ${g.qualificationLabel} ${g.subjectLabel}`;
    if (labels.has(g.code) && labels.get(g.code) !== l) out.push(`${g.code}: labelled "${labels.get(g.code)}" and "${l}" in different records`);
    labels.set(g.code, l);
  }
  return out;
}
