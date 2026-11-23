/**
 * Exam calendar status logic (D4). Pure functions, no build-time "today".
 * Used in the browser by src/pages/exam-calendar/index.astro (inline script)
 * and by scripts/test-exam-calendar-status.mjs with fixed dates.
 *
 * All dates are ISO yyyy-mm-dd strings compared as whole calendar days.
 */

export const WARNING_WINDOW_DAYS = 14;

function dayNumber(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return Math.round(Date.UTC(y, m - 1, d) / 86400000);
}

/** Whole days from `todayIso` to `targetIso` (negative if target is past). */
export function daysUntil(todayIso, targetIso) {
  return dayNumber(targetIso) - dayNumber(todayIso);
}

/** Local calendar date of a Date object as yyyy-mm-dd. */
export function toLocalIso(date) {
  const p = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
}

/**
 * Phase of one series relative to today:
 * upcoming | in-progress | awaiting-results | results-out
 */
export function seriesPhase(todayIso, s) {
  if (daysUntil(todayIso, s.examStartIso) > 0) return 'upcoming';
  if (daysUntil(todayIso, s.examEndIso) >= 0) return 'in-progress';
  if (daysUntil(todayIso, s.resultsIso) > 0) return 'awaiting-results';
  return 'results-out';
}

/**
 * Labels for an ordered list of series. The first series still upcoming is
 * "Next series"; any later upcoming one is "Later series".
 */
export function seriesLabels(todayIso, list) {
  let nextTaken = false;
  return list.map((s) => {
    const phase = seriesPhase(todayIso, s);
    let label;
    if (phase === 'in-progress') label = 'Exams in progress now';
    else if (phase === 'awaiting-results') label = 'Exams over, results pending';
    else if (phase === 'results-out') label = 'Results released';
    else if (!nextTaken) { label = 'Next series'; nextTaken = true; }
    else label = 'Later series';
    return { phase, label };
  });
}

/**
 * Warnings for entry deadlines (final, late) that are today or within
 * WARNING_WINDOW_DAYS days. Past deadlines return a "passed" note only when
 * the series' exams have not yet started (still relevant to a visitor).
 */
export function deadlineWarnings(todayIso, s) {
  const out = [];
  const items = [
    ['Final entries deadline', s.finalEntriesDeadlineIso, s.finalEntriesDeadline],
    ['Late entries deadline', s.lateEntriesDeadlineIso, s.lateEntriesDeadline],
  ];
  for (const [name, iso, text] of items) {
    if (!iso) continue;
    const n = daysUntil(todayIso, iso);
    if (n >= 0 && n <= WARNING_WINDOW_DAYS) {
      const when = n === 0 ? 'today' : n === 1 ? 'tomorrow' : `in ${n} days`;
      out.push({ kind: 'soon', days: n, text: `${name} is ${when} (${text}). Confirm entries with your exams officer now.` });
    }
  }
  return out;
}
