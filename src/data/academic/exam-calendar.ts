/**
 * Exam calendar -- architecture + verified data. v2.0 AUTHORITY/PRACTICE/
 * TOOLS/GROWTH MEGA PROGRAMME WS13.
 *
 * Design decision: this file holds two genuinely different kinds of fact,
 * kept in two separate structures so neither goes stale silently:
 *
 * 1. CAMBRIDGE_EXAM_SERIES -- evergreen, structural facts about how
 *    Cambridge's three annual exam series work (which series exists, and
 *    which administrative zones each one serves). This does not need
 *    refreshing every series.
 *
 * 2. EXAM_SERIES_KEY_DATES -- specific, dated facts (entry deadlines,
 *    exam period, results-release dates) for one named series at a time.
 *    Each record is a snapshot: it carries its own officialSourceUrl and
 *    verifiedOn, exactly like the assessments.ts convention, so it is
 *    obvious when a record needs re-verifying for a later series. This
 *    file intentionally does NOT attempt to hold every future series --
 *    only the one currently most relevant to a visitor, refreshed as each
 *    series passes. A per-subject, per-paper exam timetable is
 *    deliberately NOT modelled here: Cambridge's own paper-level
 *    timetables vary by administrative zone and are the wrong shape for a
 *    single page to reproduce reliably -- see the page's own explicit
 *    link back to Cambridge's own timetable instead.
 */

export interface CambridgeExamSeries {
  readonly label: string;
  readonly months: string;
  readonly availability: string;
}

/**
 * Sourced from Cambridge's own Exams Officers' Guide pages
 * (cambridgeinternational.org/exam-administration/), verified 2026-08-29.
 * The March series' India/Romania-only scope is stated directly on
 * Cambridge's own "Exams Officers' Guide for the March series" page.
 */
export const CAMBRIDGE_EXAM_SERIES: readonly CambridgeExamSeries[] = [
  {
    label: 'May/June',
    months: 'May and June',
    availability: 'The main global series -- offered in every administrative zone Cambridge serves.',
  },
  {
    label: 'October/November',
    months: 'Late September to mid-November',
    availability: 'The second major global series -- offered in every administrative zone.',
  },
  {
    label: 'February/March',
    months: 'February and March',
    availability: 'Offered only in specific administrative zones -- Cambridge itself names India and Romania as the zones this series serves.',
  },
] as const;

export interface ResultsRelease {
  readonly qualificationGroup: string;
  readonly date: string;
}

export interface ExamSeriesKeyDates {
  readonly seriesLabel: string;
  readonly seriesSlug: string;
  readonly finalEntriesDeadline: string;
  readonly lateEntriesDeadline?: string;
  readonly examPeriodStart: string;
  readonly examPeriodEnd: string;
  readonly resultsReleased: readonly ResultsRelease[];
  readonly enquiriesAboutResultsDeadline?: string;
  readonly accessToScriptsDeadline?: string;
  readonly officialSourceUrl: string;
  readonly verifiedOn: string;
}

/**
 * Currently holds only the next upcoming series relative to this build.
 * When a later series becomes the relevant "upcoming" one, add a new
 * record here (and update src/pages/exam-calendar/index.astro's featured
 * series if it doesn't already just pick the nearest future one) rather
 * than editing this record in place -- keeps a genuine, dated history.
 */
export const EXAM_SERIES_KEY_DATES: readonly ExamSeriesKeyDates[] = [
  {
    seriesLabel: 'October/November 2026',
    seriesSlug: 'november-2026',
    finalEntriesDeadline: '16 August 2026',
    lateEntriesDeadline: '21 September 2026',
    examPeriodStart: 'Late September 2026',
    examPeriodEnd: 'Mid-November 2026',
    resultsReleased: [
      { qualificationGroup: 'Cambridge International AS & A Level', date: '7 January 2027' },
      { qualificationGroup: 'Cambridge IGCSE and Cambridge O Level', date: '14 January 2027' },
    ],
    enquiriesAboutResultsDeadline: '26 February 2027',
    accessToScriptsDeadline: '12 March 2027',
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/746006-key-dates-for-november-2026-series-international-.pdf',
    verifiedOn: '2026-08-29',
  },
] as const;
