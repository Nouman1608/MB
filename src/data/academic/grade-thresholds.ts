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
 * Scope, stated honestly (also stated on the page itself):
 * - Only the 5 flagship specs are covered, matching this programme's
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

export type Grade = 'A*' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'a' | 'b' | 'c' | 'd' | 'e';

export interface GradeThresholdRow {
  readonly combination: string;
  readonly maxMark: number;
  readonly thresholds: Partial<Record<Grade, number>>;
}

export interface SyllabusGradeThresholds {
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

const STAGED_ASSESSMENT_NOTE =
  "This table covers every standard (single-series) route Cambridge published for this syllabus and series. It does NOT include \"staged assessment\" routes, where the AS papers were sat in an earlier series and the A2 papers in a later one -- Cambridge publishes roughly 20 further combination rows for that path, which this table does not reproduce. If you sat your papers in a staged (multi-series) pattern, use the official PDF linked below, which lists every staged route in full.";

export const GRADE_THRESHOLDS: readonly SyllabusGradeThresholds[] = [
  {
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
] as const;
