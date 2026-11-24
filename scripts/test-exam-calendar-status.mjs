import assert from 'node:assert/strict';
import { seriesLabels, deadlineWarnings, daysUntil } from '../src/data/academic/exam-calendar-status.mjs';

const nov = { examStartIso: '2026-09-21', examEndIso: '2026-11-20', resultsIso: '2027-01-07',
  finalEntriesDeadlineIso: '2026-08-16', finalEntriesDeadline: '16 August 2026',
  lateEntriesDeadlineIso: '2026-09-21', lateEntriesDeadline: '21 September 2026' };
const mar = { examStartIso: '2027-02-03', examEndIso: '2027-03-04', resultsIso: '2027-05-13',
  finalEntriesDeadlineIso: '2026-11-27', finalEntriesDeadline: '27 November 2026',
  lateEntriesDeadlineIso: '2026-12-14', lateEntriesDeadline: '14 December 2026' };
const jun = { examStartIso: '2027-04-26', examEndIso: '2027-06-12' }; // no entry/results dates
const list = [nov, mar];

assert.equal(daysUntil('2026-11-23', '2026-11-27'), 4);
let l = seriesLabels('2026-11-23', list).map((x) => x.label);
assert.deepEqual(l, ['Exams over, results pending', 'Next series']);
assert.deepEqual(seriesLabels('2026-10-05', list).map((x) => x.label), ['Exams in progress now', 'Next series']);
assert.deepEqual(seriesLabels('2026-08-01', list).map((x) => x.label), ['Next series', 'Later series']);
assert.deepEqual(seriesLabels('2027-01-08', list).map((x) => x.label), ['Results released', 'Next series']);

let w = deadlineWarnings('2026-11-23', mar);
assert.equal(w.length, 1);
assert.match(w[0].text, /Final entries deadline is in 4 days \(27 November 2026\)/);
assert.equal(deadlineWarnings('2026-11-23', nov).length, 0);
assert.equal(deadlineWarnings('2026-11-12', mar).length, 0);   // 15 days: outside window
assert.equal(deadlineWarnings('2026-11-13', mar).length, 1);   // 14 days: inside
assert.match(deadlineWarnings('2026-11-27', mar)[0].text, /today/);
assert.equal(deadlineWarnings('2026-11-28', mar).length, 0);   // passed
assert.equal(deadlineWarnings('2026-12-10', mar).length, 1);   // late deadline in 4 days
const l3 = (d) => seriesLabels(d, [nov, mar, jun]).map((x) => x.label);
assert.deepEqual(l3('2026-11-23'), ['Exams over, results pending', 'Next series', 'Later series']);
assert.deepEqual(l3('2027-05-10'), ['Results released', 'Exams over, results pending', 'Exams in progress now']);
assert.deepEqual(l3('2027-06-20'), ['Results released', 'Results released', 'Exams over, results pending']);
assert.equal(deadlineWarnings('2026-11-23', jun).length, 0);
console.log('exam-calendar status tests passed');

// Data file must compile and every series must be renderable (catches syntax errors the .mjs import misses).
const data = await import('../src/data/academic/exam-calendar.ts');
assert.ok(data.EXAM_SERIES_KEY_DATES.length >= 3);
for (const s of data.EXAM_SERIES_KEY_DATES) {
  assert.ok(s.seriesLabel && s.examPeriodStart && s.examPeriodEnd && s.examStartIso && s.examEndIso, s.seriesLabel);
  assert.ok(s.officialSourceUrl.startsWith('https://'), s.seriesLabel);
}
assert.ok(data.EXAM_SERIES_KEY_DATES.some((s) => s.seriesLabel === 'May/June 2027'));
assert.deepEqual(data.examSeriesProblems(), [], 'exam-calendar.ts record problems');
const rows = data.EXAM_SERIES_KEY_DATES.map((s) => s);
assert.deepEqual(seriesLabels('2026-11-23', rows).map((x) => x.label), ['Exams over, results pending', 'Next series', 'Later series']);
console.log('exam-calendar data compiles; all series valid');
