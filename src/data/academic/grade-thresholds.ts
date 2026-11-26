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
 * table). Edexcel English Language B (4EB1) is not included: the site's Edexcel English Language resources are all
 * for 4EA1 (A). The Cambridge scope notes below apply to the Cambridge
 * records only.
 *
 * D-543h (26 Nov 2026): Pearson Edexcel International AS and A Level (IAL) June
 * 2026 added for the subjects the site marks ACTIVE for Edexcel A Level and
 * that Pearson's "Grade Boundaries - June 2026 - International A Level"
 * document covers (accounting, biology, business, chemistry, economics, English
 * Literature, law, mathematics, physics). IAL is modular, so those records carry
 * `units` (per-unit raw boundaries, AS and A2) instead of `rows`, with the
 * 'edexcel-ial' grade scale; UMS boundaries are fixed percentages and only the
 * UMS maximum is kept. Every Pearson record carries sourceDocument and
 * sourcePage (PDF page).
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

/** Which grade columns a record uses. Defaults from the board: Cambridge -> 'cambridge', Pearson Edexcel -> 'edexcel-9-1'. */
export type GradeScaleName = 'cambridge' | 'edexcel-9-1' | 'edexcel-ial';

/** Pearson Edexcel International AS and A Level (IAL): A* to E (A* is a theoretical boundary printed for A2 units and the overall A Level; AS units are A to E). */
export const IAL_GRADES: readonly Grade[] = ['A*', 'A', 'B', 'C', 'D', 'E'];

export const GRADE_SCALES: Record<GradeScaleName, readonly Grade[]> = {
  cambridge: GRADE_SCALE_BY_BOARD.Cambridge,
  'edexcel-9-1': GRADE_SCALE_BY_BOARD['Pearson Edexcel'],
  'edexcel-ial': IAL_GRADES,
};

/** The grade scale a record uses (its own `scale`, else its board's default). */
export function scaleOf(g: { readonly board: ExamBoard; readonly scale?: GradeScaleName }): GradeScaleName {
  return g.scale ?? (g.board === 'Cambridge' ? 'cambridge' : 'edexcel-9-1');
}

/**
 * One Pearson Edexcel IAL unit (D-543h): its published RAW grade boundaries.
 * The matching UMS boundaries are fixed percentages of `maxUms` (AS: A 80%, B 70%, C 60%, D 50%, E 40%; A2 adds A* at 90%), so only the UMS maximum is kept.
 * "Unit 1A"-style variants are separate units with their own boundaries.
 */
export interface IalUnitThreshold {
  /** Unit code, e.g. WAC11. */
  readonly unit: string;
  /** Unit number and title as Pearson prints it, e.g. "Unit 1: The Accounting System and Costing". */
  readonly label: string;
  readonly level: 'AS' | 'A2';
  readonly maxRaw: number;
  readonly maxUms: number;
  /** Raw-mark boundaries keyed A* (A2 only), A, B, C, D, E. */
  readonly raw: Partial<Record<Grade, number>>;
}

export interface GradeThresholdRow {
  readonly combination: string;
  readonly maxMark: number;
  readonly thresholds: Partial<Record<Grade, number>>;
}

export interface SyllabusGradeThresholds {
  readonly board: ExamBoard;
  /** Optional override of the board's default grade scale (the Edexcel IAL records use 'edexcel-ial'). */
  readonly scale?: GradeScaleName;
  readonly code: string;
  readonly subjectLabel: string;
  readonly qualificationLabel: string;
  readonly series: string;
  readonly rows: readonly GradeThresholdRow[];
  /** Per-unit raw boundaries (Pearson Edexcel IAL records); `rows` is then empty. */
  readonly units?: readonly IalUnitThreshold[];
  readonly note?: string;
  /** Title of the board document the numbers were copied from (required for Pearson Edexcel records). */
  readonly sourceDocument?: string;
  /** PDF page of that document the numbers are on (required for Pearson Edexcel records). */
  readonly sourcePage?: number;
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

const IGCSE_SOURCE_DOCUMENT = 'Grade Boundaries - June 2026 - International GCSE (9-1)';
const IAL_SOURCE_DOCUMENT = 'Grade Boundaries - June 2026 - International A Level';

const IAL_NOTE =
  "Pearson's International AS and A Level qualifications are modular, so boundaries are published per unit, in raw marks out of the maximum shown. Each unit is also reported on the uniform (UMS) scale, where the boundaries are fixed percentages of the UMS maximum shown (AS: A 80%, B 70%, C 60%, D 50%, E 40%; A2 units also A* 90%), so only the raw boundaries, which change every series, are tabulated. A unit labelled with a letter after the number (for example Unit 1A) is a separate paper with its own boundaries; choose the one you sat. The A* boundary on an A2 unit is a theoretical boundary, because A* is awarded on the overall A Level only. Overall AS and A Level (cash-in) boundaries are published in UMS only and are fixed percentages, so they are not repeated here. Grade U is below the lowest boundary shown.";

const IAL_LAW_NOTE =
  "Pearson publishes one overall raw-mark boundary set for International A Level Law (YLA1), for the June 2026 series, rather than per-unit boundaries. Grade U is below the lowest boundary shown.";

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
    sourceDocument: IGCSE_SOURCE_DOCUMENT,
    sourcePage: 3,
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
    sourceDocument: IGCSE_SOURCE_DOCUMENT,
    sourcePage: 3,
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
    sourceDocument: IGCSE_SOURCE_DOCUMENT,
    sourcePage: 4,
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
    sourceDocument: IGCSE_SOURCE_DOCUMENT,
    sourcePage: 4,
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
    sourceDocument: IGCSE_SOURCE_DOCUMENT,
    sourcePage: 4,
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
    sourceDocument: IGCSE_SOURCE_DOCUMENT,
    sourcePage: 5,
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
    sourceDocument: IGCSE_SOURCE_DOCUMENT,
    sourcePage: 6,
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
    sourceDocument: IGCSE_SOURCE_DOCUMENT,
    sourcePage: 7,
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
    sourceDocument: IGCSE_SOURCE_DOCUMENT,
    sourcePage: 8,
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
    sourceDocument: IGCSE_SOURCE_DOCUMENT,
    sourcePage: 9,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-25',
  },
  {
    board: 'Pearson Edexcel',
    scale: 'edexcel-ial',
    code: 'YAC11',
    subjectLabel: 'Accounting',
    qualificationLabel: 'IAL',
    series: 'June 2026',
    rows: [],
    units: [
      { unit: 'WAC11', label: 'Unit 1: The Accounting System and Costing', level: 'AS', maxRaw: 200, maxUms: 300, raw: { A: 127, B: 108, C: 89, D: 70, E: 51 } },
      { unit: 'WAC11', label: 'Unit 1A: The Accounting System and Costing', level: 'AS', maxRaw: 200, maxUms: 300, raw: { A: 127, B: 108, C: 89, D: 71, E: 53 } },
      { unit: 'WAC12', label: 'Unit 2: Corporate and Management Accounting', level: 'A2', maxRaw: 200, maxUms: 300, raw: { 'A*': 181, A: 163, B: 143, C: 124, D: 105, E: 86 } },
      { unit: 'WAC12', label: 'Unit 2A: Corporate and Management Accounting', level: 'A2', maxRaw: 200, maxUms: 300, raw: { 'A*': 170, A: 151, B: 132, C: 113, D: 95, E: 77 } },
    ],
    note: IAL_NOTE,
    sourceDocument: IAL_SOURCE_DOCUMENT,
    sourcePage: 3,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-26',
  },
  {
    board: 'Pearson Edexcel',
    scale: 'edexcel-ial',
    code: 'YBI11',
    subjectLabel: 'Biology',
    qualificationLabel: 'IAL',
    series: 'June 2026',
    rows: [],
    units: [
      { unit: 'WBI11', label: 'Unit 1: Molecules, Diet, Transport and Health', level: 'AS', maxRaw: 80, maxUms: 120, raw: { A: 58, B: 51, C: 45, D: 39, E: 33 } },
      { unit: 'WBI11', label: 'Unit 1A: Molecules, Diet, Transport and Health', level: 'AS', maxRaw: 80, maxUms: 120, raw: { A: 58, B: 51, C: 45, D: 39, E: 33 } },
      { unit: 'WBI12', label: 'Unit 2: Cells, Development, Biodiversity and Conservation', level: 'AS', maxRaw: 80, maxUms: 120, raw: { A: 58, B: 51, C: 44, D: 37, E: 31 } },
      { unit: 'WBI12', label: 'Unit 2A: Cells, Development, Biodiversity and Conservation', level: 'AS', maxRaw: 80, maxUms: 120, raw: { A: 57, B: 50, C: 43, D: 37, E: 31 } },
      { unit: 'WBI13', label: 'Unit 3: Practical Skills in Biology I', level: 'AS', maxRaw: 50, maxUms: 60, raw: { A: 36, B: 31, C: 26, D: 21, E: 17 } },
      { unit: 'WBI13', label: 'Unit 3A: Practical Skills in Biology I', level: 'AS', maxRaw: 50, maxUms: 60, raw: { A: 38, B: 33, C: 28, D: 24, E: 20 } },
      { unit: 'WBI14', label: 'Unit 4: Energy, Environment, Microbiology and Immunity', level: 'A2', maxRaw: 90, maxUms: 120, raw: { 'A*': 62, A: 56, B: 50, C: 44, D: 38, E: 32 } },
      { unit: 'WBI14', label: 'Unit 4A: Energy, Environment, Microbiology and Immunity', level: 'A2', maxRaw: 90, maxUms: 120, raw: { 'A*': 63, A: 57, B: 51, C: 45, D: 39, E: 33 } },
      { unit: 'WBI15', label: 'Unit 5: Respiration, Internal Environment, Coordination and Gene Technology', level: 'A2', maxRaw: 90, maxUms: 120, raw: { 'A*': 72, A: 64, B: 56, C: 48, D: 40, E: 33 } },
      { unit: 'WBI15', label: 'Unit 5A: Respiration, Internal Environment, Coordination and Gene Technology', level: 'A2', maxRaw: 90, maxUms: 120, raw: { 'A*': 72, A: 64, B: 56, C: 48, D: 41, E: 34 } },
      { unit: 'WBI16', label: 'Unit 6: Practical Skills in Biology II', level: 'A2', maxRaw: 50, maxUms: 60, raw: { 'A*': 45, A: 41, B: 36, C: 31, D: 26, E: 22 } },
      { unit: 'WBI16', label: 'Unit 6A: Practical Skills in Biology II', level: 'A2', maxRaw: 50, maxUms: 60, raw: { 'A*': 45, A: 40, B: 35, C: 30, D: 25, E: 21 } },
    ],
    note: IAL_NOTE,
    sourceDocument: IAL_SOURCE_DOCUMENT,
    sourcePage: 4,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-26',
  },
  {
    board: 'Pearson Edexcel',
    scale: 'edexcel-ial',
    code: 'YBS11',
    subjectLabel: 'Business',
    qualificationLabel: 'IAL',
    series: 'June 2026',
    rows: [],
    units: [
      { unit: 'WBS11', label: 'Unit 1: Marketing and People', level: 'AS', maxRaw: 80, maxUms: 100, raw: { A: 58, B: 52, C: 47, D: 42, E: 37 } },
      { unit: 'WBS12', label: 'Unit 2: Managing Business Activities', level: 'AS', maxRaw: 80, maxUms: 100, raw: { A: 58, B: 52, C: 46, D: 41, E: 36 } },
      { unit: 'WBS13', label: 'Unit 3: Business Decisions And Strategy', level: 'A2', maxRaw: 80, maxUms: 100, raw: { 'A*': 54, A: 49, B: 44, C: 39, D: 35, E: 31 } },
      { unit: 'WBS14', label: 'Unit 4: Global Business', level: 'A2', maxRaw: 80, maxUms: 100, raw: { 'A*': 63, A: 56, B: 49, C: 43, D: 37, E: 31 } },
    ],
    note: IAL_NOTE,
    sourceDocument: IAL_SOURCE_DOCUMENT,
    sourcePage: 4,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-26',
  },
  {
    board: 'Pearson Edexcel',
    scale: 'edexcel-ial',
    code: 'YCH11',
    subjectLabel: 'Chemistry',
    qualificationLabel: 'IAL',
    series: 'June 2026',
    rows: [],
    units: [
      { unit: 'WCH11', label: 'Unit 1: Structure, Bonding and Introduction to Organic Chemistry', level: 'AS', maxRaw: 80, maxUms: 120, raw: { A: 59, B: 52, C: 45, D: 38, E: 31 } },
      { unit: 'WCH11', label: 'Unit 1A: Structure, Bonding and Introduction to Organic Chemistry', level: 'AS', maxRaw: 80, maxUms: 120, raw: { A: 60, B: 52, C: 44, D: 37, E: 30 } },
      { unit: 'WCH12', label: 'Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohol', level: 'AS', maxRaw: 80, maxUms: 120, raw: { A: 65, B: 56, C: 48, D: 40, E: 32 } },
      { unit: 'WCH12', label: 'Unit 2A: Energetics, Group Chemistry, Halogenoalkanes and Alcohol', level: 'AS', maxRaw: 80, maxUms: 120, raw: { A: 49, B: 42, C: 36, D: 30, E: 24 } },
      { unit: 'WCH13', label: 'Unit 3: Practical Skills in Chemistry I', level: 'AS', maxRaw: 50, maxUms: 60, raw: { A: 40, B: 34, C: 28, D: 22, E: 16 } },
      { unit: 'WCH13', label: 'Unit 3A: Practical Skills in Chemistry I', level: 'AS', maxRaw: 50, maxUms: 60, raw: { A: 31, B: 27, C: 23, D: 19, E: 16 } },
      { unit: 'WCH14', label: 'Unit 4: Rates, Equilibria and Further Organic Chemistry', level: 'A2', maxRaw: 90, maxUms: 120, raw: { 'A*': 74, A: 66, B: 58, C: 50, D: 42, E: 34 } },
      { unit: 'WCH14', label: 'Unit 4A: Rates, Equilibria and Further Organic Chemistry', level: 'A2', maxRaw: 90, maxUms: 120, raw: { 'A*': 69, A: 61, B: 53, C: 45, D: 38, E: 31 } },
      { unit: 'WCH15', label: 'Unit 5: Transition Metals and Organic Nitrogen Chemistry', level: 'A2', maxRaw: 90, maxUms: 120, raw: { 'A*': 77, A: 68, B: 59, C: 51, D: 43, E: 35 } },
      { unit: 'WCH15', label: 'Unit 5A: Transition Metals and Organic Nitrogen Chemistry', level: 'A2', maxRaw: 90, maxUms: 120, raw: { 'A*': 82, A: 74, B: 66, C: 58, D: 51, E: 44 } },
      { unit: 'WCH16', label: 'Unit 6: Practical Skills in Chemistry II', level: 'A2', maxRaw: 50, maxUms: 60, raw: { 'A*': 41, A: 37, B: 33, C: 30, D: 27, E: 24 } },
      { unit: 'WCH16', label: 'Unit 6A: Practical Skills in Chemistry II', level: 'A2', maxRaw: 50, maxUms: 60, raw: { 'A*': 36, A: 32, B: 28, C: 25, D: 22, E: 19 } },
    ],
    note: IAL_NOTE,
    sourceDocument: IAL_SOURCE_DOCUMENT,
    sourcePage: 5,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-26',
  },
  {
    board: 'Pearson Edexcel',
    scale: 'edexcel-ial',
    code: 'YEC11',
    subjectLabel: 'Economics',
    qualificationLabel: 'IAL',
    series: 'June 2026',
    rows: [],
    units: [
      { unit: 'WEC11', label: 'Unit 1: Markets in Action', level: 'AS', maxRaw: 80, maxUms: 100, raw: { A: 59, B: 53, C: 47, D: 41, E: 35 } },
      { unit: 'WEC11', label: 'Unit 1A: Markets in Action', level: 'AS', maxRaw: 80, maxUms: 100, raw: { A: 52, B: 45, C: 39, D: 33, E: 27 } },
      { unit: 'WEC12', label: 'Unit 2: Macroeconomic Performance and Policy', level: 'AS', maxRaw: 80, maxUms: 100, raw: { A: 53, B: 47, C: 41, D: 36, E: 31 } },
      { unit: 'WEC12', label: 'Unit 2A: Macroeconomic Performance and Policy', level: 'AS', maxRaw: 80, maxUms: 100, raw: { A: 52, B: 45, C: 39, D: 33, E: 27 } },
      { unit: 'WEC13', label: 'Unit 3: Business Behaviour', level: 'A2', maxRaw: 80, maxUms: 100, raw: { 'A*': 61, A: 55, B: 49, C: 44, D: 39, E: 34 } },
      { unit: 'WEC13', label: 'Unit 3A: Business Behaviour', level: 'A2', maxRaw: 80, maxUms: 100, raw: { 'A*': 61, A: 55, B: 49, C: 43, D: 37, E: 32 } },
      { unit: 'WEC14', label: 'Unit 4: Developments in the Global Economy', level: 'A2', maxRaw: 80, maxUms: 100, raw: { 'A*': 60, A: 54, B: 48, C: 42, D: 36, E: 31 } },
      { unit: 'WEC14', label: 'Unit 4A: Developments in the Global Economy', level: 'A2', maxRaw: 80, maxUms: 100, raw: { 'A*': 59, A: 54, B: 49, C: 44, D: 39, E: 35 } },
    ],
    note: IAL_NOTE,
    sourceDocument: IAL_SOURCE_DOCUMENT,
    sourcePage: 6,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-26',
  },
  {
    board: 'Pearson Edexcel',
    scale: 'edexcel-ial',
    code: 'YET01',
    subjectLabel: 'English Literature',
    qualificationLabel: 'IAL',
    series: 'June 2026',
    rows: [],
    units: [
      { unit: 'WET01', label: 'Unit 1: Post-2000 Poetry and Prose', level: 'AS', maxRaw: 50, maxUms: 100, raw: { A: 31, B: 27, C: 24, D: 21, E: 18 } },
      { unit: 'WET01', label: 'Unit 1C: Post-2000 Poetry and Prose', level: 'AS', maxRaw: 50, maxUms: 100, raw: { A: 31, B: 27, C: 24, D: 21, E: 18 } },
      { unit: 'WET02', label: 'Unit 2: Drama', level: 'AS', maxRaw: 50, maxUms: 100, raw: { A: 31, B: 27, C: 24, D: 21, E: 18 } },
      { unit: 'WET02', label: 'Unit 2C: Drama', level: 'AS', maxRaw: 50, maxUms: 100, raw: { A: 31, B: 27, C: 24, D: 21, E: 18 } },
      { unit: 'WET03', label: 'Unit 3: Poetry and Prose', level: 'A2', maxRaw: 50, maxUms: 100, raw: { 'A*': 33, A: 29, B: 25, C: 22, D: 19, E: 16 } },
      { unit: 'WET03', label: 'Unit 3C: Poetry and Prose', level: 'A2', maxRaw: 50, maxUms: 100, raw: { 'A*': 33, A: 29, B: 25, C: 22, D: 19, E: 16 } },
      { unit: 'WET04', label: 'Unit 4: Shakespeare and Pre-1900 Poetry', level: 'A2', maxRaw: 50, maxUms: 100, raw: { 'A*': 39, A: 35, B: 31, C: 27, D: 23, E: 20 } },
      { unit: 'WET04', label: 'Unit 4C: Shakespeare and Pre-1900 Poetry', level: 'A2', maxRaw: 50, maxUms: 100, raw: { 'A*': 39, A: 35, B: 31, C: 27, D: 23, E: 20 } },
    ],
    note: IAL_NOTE,
    sourceDocument: IAL_SOURCE_DOCUMENT,
    sourcePage: 7,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-26',
  },
  {
    board: 'Pearson Edexcel',
    scale: 'edexcel-ial',
    code: 'YMA01',
    subjectLabel: 'Mathematics',
    qualificationLabel: 'IAL',
    series: 'June 2026',
    rows: [],
    units: [
      { unit: 'WME01', label: 'Unit 1: Mechanics 1', level: 'AS', maxRaw: 75, maxUms: 100, raw: { A: 57, B: 50, C: 43, D: 36, E: 29 } },
      { unit: 'WME01', label: 'Unit 1A: Mechanics 1', level: 'AS', maxRaw: 75, maxUms: 100, raw: { A: 57, B: 49, C: 41, D: 33, E: 25 } },
      { unit: 'WST01', label: 'Unit 1: Statistics 1', level: 'AS', maxRaw: 75, maxUms: 100, raw: { A: 65, B: 56, C: 47, D: 39, E: 31 } },
      { unit: 'WST01', label: 'Unit 1A: Statistics 1', level: 'AS', maxRaw: 75, maxUms: 100, raw: { A: 55, B: 46, C: 37, D: 28, E: 20 } },
      { unit: 'WDM11', label: 'Unit 1: Decision Mathematics 1', level: 'AS', maxRaw: 75, maxUms: 100, raw: { A: 58, B: 51, C: 44, D: 38, E: 32 } },
      { unit: 'WDM11', label: 'Unit 1A: Decision Mathematics 1', level: 'AS', maxRaw: 75, maxUms: 100, raw: { A: 49, B: 43, C: 37, D: 31, E: 25 } },
      { unit: 'WMA11', label: 'Unit 1: Pure Mathematics 1', level: 'AS', maxRaw: 75, maxUms: 100, raw: { A: 54, B: 47, C: 40, D: 33, E: 26 } },
      { unit: 'WMA11', label: 'Unit 1A: Pure Mathematics 1', level: 'AS', maxRaw: 75, maxUms: 100, raw: { A: 46, B: 40, C: 34, D: 28, E: 22 } },
      { unit: 'WMA12', label: 'Unit 2: Pure Mathematics 2', level: 'AS', maxRaw: 75, maxUms: 100, raw: { A: 48, B: 42, C: 36, D: 31, E: 26 } },
      { unit: 'WMA12', label: 'Unit 2A: Pure Mathematics 2', level: 'AS', maxRaw: 75, maxUms: 100, raw: { A: 56, B: 49, C: 43, D: 37, E: 31 } },
      { unit: 'WME02', label: 'Unit 2: Mechanics 2', level: 'A2', maxRaw: 75, maxUms: 100, raw: { 'A*': 58, A: 52, B: 46, C: 40, D: 34, E: 28 } },
      { unit: 'WME02', label: 'Unit 2A: Mechanics 2', level: 'A2', maxRaw: 75, maxUms: 100, raw: { 'A*': 55, A: 49, B: 43, C: 37, D: 32, E: 27 } },
      { unit: 'WST02', label: 'Unit 2: Statistics 2', level: 'A2', maxRaw: 75, maxUms: 100, raw: { 'A*': 68, A: 61, B: 53, C: 46, D: 39, E: 32 } },
      { unit: 'WST02', label: 'Unit 2A: Statistics 2', level: 'A2', maxRaw: 75, maxUms: 100, raw: { 'A*': 67, A: 59, B: 50, C: 41, D: 33, E: 25 } },
      { unit: 'WMA13', label: 'Unit 3: Pure Mathematics 3', level: 'A2', maxRaw: 75, maxUms: 100, raw: { 'A*': 63, A: 57, B: 51, C: 45, D: 39, E: 33 } },
      { unit: 'WMA13', label: 'Unit 3A: Pure Mathematics 3', level: 'A2', maxRaw: 75, maxUms: 100, raw: { 'A*': 61, A: 55, B: 49, C: 43, D: 37, E: 32 } },
      { unit: 'WMA14', label: 'Unit 4: Pure Mathematics 4', level: 'A2', maxRaw: 75, maxUms: 100, raw: { 'A*': 65, A: 58, B: 51, C: 44, D: 37, E: 31 } },
      { unit: 'WMA14', label: 'Unit 4A: Pure Mathematics 4', level: 'A2', maxRaw: 75, maxUms: 100, raw: { 'A*': 66, A: 58, B: 50, C: 42, D: 34, E: 27 } },
    ],
    note: IAL_NOTE,
    sourceDocument: IAL_SOURCE_DOCUMENT,
    sourcePage: 13,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-26',
  },
  {
    board: 'Pearson Edexcel',
    scale: 'edexcel-ial',
    code: 'YPH11',
    subjectLabel: 'Physics',
    qualificationLabel: 'IAL',
    series: 'June 2026',
    rows: [],
    units: [
      { unit: 'WPH11', label: 'Unit 1: Mechanics and Materials', level: 'AS', maxRaw: 80, maxUms: 120, raw: { A: 60, B: 53, C: 46, D: 39, E: 32 } },
      { unit: 'WPH11', label: 'Unit 1A: Mechanics and Materials', level: 'AS', maxRaw: 80, maxUms: 120, raw: { A: 60, B: 53, C: 46, D: 39, E: 33 } },
      { unit: 'WPH12', label: 'Unit 2: Waves and Electricity', level: 'AS', maxRaw: 80, maxUms: 120, raw: { A: 61, B: 54, C: 47, D: 40, E: 33 } },
      { unit: 'WPH12', label: 'Unit 2A: Waves and Electricity', level: 'AS', maxRaw: 80, maxUms: 120, raw: { A: 55, B: 49, C: 43, D: 37, E: 31 } },
      { unit: 'WPH13', label: 'Unit 3: Practical Skills in Physics I', level: 'AS', maxRaw: 50, maxUms: 60, raw: { A: 35, B: 31, C: 27, D: 23, E: 19 } },
      { unit: 'WPH13', label: 'Unit 3A: Practical Skills in Physics I', level: 'AS', maxRaw: 50, maxUms: 60, raw: { A: 38, B: 33, C: 28, D: 24, E: 20 } },
      { unit: 'WPH14', label: 'Unit 4: Further Mechanics, Fields and Particles', level: 'A2', maxRaw: 90, maxUms: 120, raw: { 'A*': 83, A: 76, B: 66, C: 56, D: 47, E: 38 } },
      { unit: 'WPH14', label: 'Unit 4A: Further Mechanics, Fields and Particles', level: 'A2', maxRaw: 90, maxUms: 120, raw: { 'A*': 80, A: 71, B: 62, C: 53, D: 45, E: 37 } },
      { unit: 'WPH15', label: 'Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology', level: 'A2', maxRaw: 90, maxUms: 120, raw: { 'A*': 81, A: 73, B: 65, C: 57, D: 49, E: 41 } },
      { unit: 'WPH15', label: 'Unit 5A: Thermodynamics, Radiation, Oscillations and Cosmology', level: 'A2', maxRaw: 90, maxUms: 120, raw: { 'A*': 78, A: 70, B: 62, C: 54, D: 46, E: 39 } },
      { unit: 'WPH16', label: 'Unit 6: Practical Skills in Physics II', level: 'A2', maxRaw: 50, maxUms: 60, raw: { 'A*': 43, A: 38, B: 33, C: 28, D: 24, E: 20 } },
      { unit: 'WPH16', label: 'Unit 6A: Practical Skills in Physics II', level: 'A2', maxRaw: 50, maxUms: 60, raw: { 'A*': 44, A: 39, B: 34, C: 29, D: 24, E: 20 } },
    ],
    note: IAL_NOTE,
    sourceDocument: IAL_SOURCE_DOCUMENT,
    sourcePage: 14,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-26',
  },
  {
    board: 'Pearson Edexcel',
    scale: 'edexcel-ial',
    code: 'YLA1',
    subjectLabel: 'Law',
    qualificationLabel: 'IAL',
    series: 'June 2026',
    rows: [
      { combination: 'Papers 01 and 02', maxMark: 200, thresholds: { 'A*': 119, A: 108, B: 97, C: 86, D: 75, E: 65 } },
    ],
    note: IAL_LAW_NOTE,
    sourceDocument: IAL_SOURCE_DOCUMENT,
    sourcePage: 12,
    officialSourceUrl: EDEXCEL_SOURCE_URL,
    verifiedOn: '2026-11-26',
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
  for (const g of list) {
    if (g.board === 'Cambridge') continue;
    if (!g.sourceDocument || !g.sourcePage) out.push(`${g.code} ${g.series}: a ${g.board} record needs sourceDocument and sourcePage`);
  }
  const labels = new Map<string, string>();
  for (const g of list) {
    const l = `${g.board} ${g.qualificationLabel} ${g.subjectLabel}`;
    if (labels.has(g.code) && labels.get(g.code) !== l) out.push(`${g.code}: labelled "${labels.get(g.code)}" and "${l}" in different records`);
    labels.set(g.code, l);
  }
  return out;
}
