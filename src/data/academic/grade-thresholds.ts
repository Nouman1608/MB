/**
 * Grade-threshold explorer -- data. v2.0 AUTHORITY/PRACTICE/TOOLS/GROWTH
 * MEGA PROGRAMME WS14.
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
 * Scope, stated honestly (also stated on the page itself):
 * - Only the 5 flagship specs are covered, matching this programme's
 *   established flagship-first strategy (see D-065 and onward).
 * - Only the June 2026 series is covered -- the most recently completed
 *   series as of this build. Thresholds are set independently each
 *   series (they are NOT the same from series to series), so this is a
 *   dated snapshot, not a standing "the" grade boundary.
 * - Cambridge's own PDF lists several possible paper-combination routes
 *   for most tiers (e.g. Core can be papers 11+31+51, or 11+31+61, or
 *   12+32+52, and so on -- each combination gets its own, slightly
 *   different, row of thresholds). Only the FIRST-listed, most standard
 *   combination for each tier is reproduced here verbatim, not an average
 *   across routes -- averaging would produce a number Cambridge never
 *   actually published. Every other real combination is in the full
 *   official PDF, linked from the page.
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

const MULTI_ROUTE_NOTE =
  "Cambridge's official PDF lists several other valid paper-combination routes for each tier, each with its own (very similar) set of thresholds -- only the single most standard route per tier is shown here, exactly as published. See the official PDF for your specific paper combination.";

export const GRADE_THRESHOLDS: readonly SyllabusGradeThresholds[] = [
  {
    code: '0620',
    subjectLabel: 'Chemistry',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Core (Components 11, 31, 51)', maxMark: 200, thresholds: { C: 105, D: 88, E: 72, F: 55, G: 38 } },
      { combination: 'Extended (Components 21, 41, 51)', maxMark: 200, thresholds: { 'A*': 173, A: 147, B: 119, C: 91, D: 78, E: 66, F: 53, G: 40 } },
      { combination: 'Practical alternative (Component 50)', maxMark: 90, thresholds: { 'A*': 81, A: 75, B: 66, C: 57, D: 50, E: 43, F: 35, G: 27 } },
    ],
    note: MULTI_ROUTE_NOTE,
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/762856-chemistry-0620-june-2026-grade-threshold-table.pdf',
    verifiedOn: '2026-08-29',
  },
  {
    code: '0625',
    subjectLabel: 'Physics',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Core (Components 11, 31, 51)', maxMark: 200, thresholds: { C: 105, D: 91, E: 78, F: 64, G: 50 } },
      { combination: 'Extended (Components 21, 41, 51)', maxMark: 200, thresholds: { 'A*': 162, A: 137, B: 112, C: 88, D: 77, E: 67, F: 57, G: 47 } },
      { combination: 'Practical alternative (Component 50)', maxMark: 90, thresholds: { 'A*': 81, A: 75, B: 64, C: 54, D: 47, E: 41, F: 34, G: 27 } },
    ],
    note: MULTI_ROUTE_NOTE,
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/762857-physics-0625-june-2026-grade-threshold-table.pdf',
    verifiedOn: '2026-08-29',
  },
  {
    code: '0580',
    subjectLabel: 'Mathematics',
    qualificationLabel: 'IGCSE',
    series: 'June 2026',
    rows: [
      { combination: 'Core (Components 11, 31)', maxMark: 160, thresholds: { C: 82, D: 68, E: 55, F: 42, G: 29 } },
      { combination: 'Extended (Components 21, 41)', maxMark: 200, thresholds: { 'A*': 162, A: 138, B: 114, C: 90, D: 73, E: 56 } },
      { combination: 'Practical/oral alternative (Component 50)', maxMark: 90, thresholds: { 'A*': 82, A: 75, B: 63, C: 52, D: 45, E: 39, F: 33, G: 27 } },
    ],
    note: `${MULTI_ROUTE_NOTE} Extended has no F or G grade on this route -- Extended is capped at grade E as the lowest available grade.`,
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/762852-mathematics-without-coursework-0580-june-2026-grade-threshold-table.pdf',
    verifiedOn: '2026-08-29',
  },
  {
    code: '9701',
    subjectLabel: 'Chemistry',
    qualificationLabel: 'AS & A Level',
    series: 'June 2026',
    rows: [
      { combination: 'Full A Level, linear assessment (Components 11, 21, 31, 41, 51)', maxMark: 260, thresholds: { 'A*': 209, A: 185, B: 161, C: 133, D: 106, E: 79 } },
      { combination: 'AS Level only (Components 11, 21, 31)', maxMark: 130, thresholds: { a: 93, b: 80, c: 65, d: 51, e: 37 } },
    ],
    note: "Cambridge's official PDF also lists several staged-assessment routes (where AS papers are taken in an earlier series and A2 papers in a later one) -- only the single most standard full-A-Level and AS-Level routes are shown here, exactly as published.",
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/761525-chemistry-9701-june-2026-grade-threshold-table.pdf',
    verifiedOn: '2026-08-29',
  },
  {
    code: '9702',
    subjectLabel: 'Physics',
    qualificationLabel: 'AS & A Level',
    series: 'June 2026',
    rows: [
      { combination: 'Full A Level, linear assessment (Components 11, 21, 31, 41, 51)', maxMark: 260, thresholds: { 'A*': 198, A: 177, B: 156, C: 132, D: 108, E: 84 } },
      { combination: 'AS Level only (Components 11, 21, 31)', maxMark: 130, thresholds: { a: 97, b: 86, c: 75, d: 64, e: 53 } },
    ],
    note: "Cambridge's official PDF also lists several staged-assessment routes (where AS papers are taken in an earlier series and A2 papers in a later one) -- only the single most standard full-A-Level and AS-Level routes are shown here, exactly as published.",
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/761526-physics-9702-june-2026-grade-threshold-table.pdf',
    verifiedOn: '2026-08-29',
  },
] as const;
