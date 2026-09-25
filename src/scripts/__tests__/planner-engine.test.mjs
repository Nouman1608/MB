// D-286 -- unit tests for the revision-plan scheduler.
// Run: node --experimental-strip-types --test src/scripts/__tests__/planner-engine.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generatePlan, sessionsPerDay, addDays, weekdayIndex, effectiveConfidence } from '../planner-engine.ts';

const L = (t) => [{ t, u: `/resources/${t}/` }];
const topic = (slug, confidence = null, difficult = false) => ({
  slug, name: slug.toUpperCase(), confidence, difficult,
  learn: L(`${slug}-guide`), practice: L(`${slug}-practice`), review: L(`${slug}-notes`),
});
const subject = (id, examDate, topics) => ({ id, label: id, examDate, topics, practiceLinks: L(`${id}-mixed`), checklist: `/checklists/${id}/` });
const base = (over = {}) => ({
  start: '2026-10-05', // a Monday
  weekdayMinutes: [60, 60, 60, 60, 60, 120, 0],
  sessionMinutes: 45, breakMinutes: 10, horizonWeeks: 6,
  subjects: [subject('chem', null, [topic('a', 1), topic('b', 3), topic('c', 5)])],
  ...over,
});
const all = (plan) => plan.weeks.flatMap((w) => w.days.flatMap((d) => d.sessions.map((s) => ({ ...s, date: d.date }))));

test('sessionsPerDay applies breaks between sessions', () => {
  assert.equal(sessionsPerDay(60, 45, 10), 1);
  assert.equal(sessionsPerDay(100, 45, 10), 2);
  assert.equal(sessionsPerDay(120, 45, 10), 2);
  assert.equal(sessionsPerDay(0, 45, 10), 0);
  assert.equal(sessionsPerDay(30, 45, 10), 0);
});

test('date helpers', () => {
  assert.equal(addDays('2026-10-31', 1), '2026-11-01');
  assert.equal(weekdayIndex('2026-10-05'), 0); // Monday
  assert.equal(weekdayIndex('2026-10-11'), 6); // Sunday
});

test('difficult caps confidence at 2', () => {
  assert.equal(effectiveConfidence({ confidence: 5, difficult: true }), 2);
  assert.equal(effectiveConfidence({ confidence: null, difficult: false }), 3);
});

test('plan fits available time and never exceeds it', () => {
  const plan = generatePlan(base(), new Date('2026-10-05T08:00:00Z'));
  for (const w of plan.weeks) for (const d of w.days) {
    const cap = sessionsPerDay(base().weekdayMinutes[weekdayIndex(d.date)], 45, 10);
    assert.ok(d.sessions.length <= cap, `${d.date} has ${d.sessions.length} > ${cap}`);
  }
  assert.equal(plan.end, addDays('2026-10-05', 6 * 7 - 1));
  assert.ok(plan.fits);
});

test('weak topic gets learn -> practise -> revise in order, spaced', () => {
  const plan = generatePlan(base(), new Date('2026-10-05T08:00:00Z'));
  const a = all(plan).filter((s) => s.topicSlug === 'a' && !s.title.includes('(extra)'));
  assert.deepEqual(a.slice(0, 4).map((s) => s.kind), ['learn', 'practice', 'review', 'practice']);
  assert.ok(a[1].date >= addDays(a[0].date, 2));
  assert.ok(a[2].date >= addDays(a[1].date, 3));
});

test('weakest topics are scheduled first', () => {
  const plan = generatePlan(base(), new Date('2026-10-05T08:00:00Z'));
  const first = all(plan).find((s) => s.subjectId);
  assert.equal(first.topicSlug, 'a');
});

test('each week with 3+ sessions keeps a catch-up slot', () => {
  const plan = generatePlan(base(), new Date('2026-10-05T08:00:00Z'));
  for (const w of plan.weeks) {
    const n = w.days.reduce((m, d) => m + d.sessions.length, 0);
    if (n >= 3) assert.ok(w.days.some((d) => d.sessions.some((s) => s.kind === 'catchup')), `week ${w.start}`);
  }
});

test('no session for a subject on or after its exam, and the plan ends before the last exam', () => {
  const input = base({ subjects: [subject('chem', '2026-10-20', [topic('a', 2)]), subject('phys', '2026-11-02', [topic('x', 2)])] });
  const plan = generatePlan(input, new Date('2026-10-05T08:00:00Z'));
  assert.equal(plan.end, '2026-11-01');
  for (const s of all(plan)) if (s.subjectId === 'chem') assert.ok(s.date < '2026-10-20');
});

test('final fortnight alternates mixed exam-style practice', () => {
  const input = base({ subjects: [subject('chem', '2026-10-16', [topic('a', 4), topic('b', 4)])] });
  const plan = generatePlan(input, new Date('2026-10-05T08:00:00Z'));
  const kinds = all(plan).filter((s) => s.subjectId).map((s) => s.kind);
  assert.ok(kinds.includes('mixed'));
  for (let i = 1; i < kinds.length; i++) assert.ok(!(kinds[i] === 'mixed' && kinds[i - 1] === 'mixed'));
});

test('alternates subjects within a day when both have work', () => {
  const input = base({ weekdayMinutes: [110, 110, 110, 110, 110, 0, 0], subjects: [subject('chem', null, [topic('a', 1), topic('b', 1)]), subject('phys', null, [topic('x', 1), topic('y', 1)])] });
  const plan = generatePlan(input, new Date('2026-10-05T08:00:00Z'));
  const d0 = plan.weeks[0].days[0].sessions;
  assert.equal(d0.length, 2);
  assert.notEqual(d0[0].subjectId, d0[1].subjectId);
});

test('reports insufficient time and lists what did not fit', () => {
  const many = Array.from({ length: 30 }, (_, i) => topic(`t${i}`, 1));
  const input = base({ weekdayMinutes: [45, 0, 0, 0, 0, 0, 0], subjects: [subject('chem', '2026-10-30', many)] });
  const plan = generatePlan(input, new Date('2026-10-05T08:00:00Z'));
  assert.equal(plan.fits, false);
  assert.ok(plan.subjects[0].unscheduled.length > 0);
  assert.ok(plan.warnings.some((w) => w.includes('sessions it needs')));
});

test('exam date in the past is refused with a warning, not scheduled', () => {
  const input = base({ subjects: [subject('chem', '2026-09-01', [topic('a')])] });
  const plan = generatePlan(input, new Date('2026-10-05T08:00:00Z'));
  assert.equal(plan.totalSessions, 0);
  assert.ok(plan.warnings[0].includes('not after'));
  // D-332 -- a plan with no plannable subject must not claim to fit.
  assert.equal(plan.subjects.length, 0);
  assert.equal(plan.fits, false);
});

test('no time entered produces a clear warning', () => {
  const plan = generatePlan(base({ weekdayMinutes: [0, 0, 0, 0, 0, 0, 0] }), new Date('2026-10-05T08:00:00Z'));
  assert.equal(plan.totalSessions, 0);
  assert.equal(plan.fits, false);
  assert.ok(plan.warnings.some((w) => w.includes('No study time')));
});

test('course without a topic list gets checklist-based sessions, not invented topics', () => {
  const plan = generatePlan(base({ subjects: [subject('hist', null, [])] }), new Date('2026-10-05T08:00:00Z'));
  const s = all(plan).find((x) => x.subjectId === 'hist');
  assert.match(s.title, /syllabus checklist/i);
});

test('plans are capped at 20 weeks with a warning', () => {
  const plan = generatePlan(base({ subjects: [subject('chem', '2027-06-01', [topic('a')])] }), new Date('2026-10-05T08:00:00Z'));
  assert.equal(plan.weeks.length <= 21, true);
  assert.ok(plan.warnings.some((w) => w.includes('20 weeks')));
});

test('deterministic: same input, same plan', () => {
  const a = generatePlan(base(), new Date('2026-10-05T08:00:00Z'));
  const b = generatePlan(base(), new Date('2026-10-05T08:00:00Z'));
  assert.deepEqual(a, b);
});

test('every task links to a real resource or the checklist', () => {
  const plan = generatePlan(base(), new Date('2026-10-05T08:00:00Z'));
  for (const s of all(plan)) if (s.kind !== 'catchup') assert.ok(s.links.length > 0, s.title);
});

test('a subject with an exam date is prioritised over one without', () => {
  const t = Array.from({ length: 10 }, (_, i) => topic(`t${i}`, 2));
  const input = base({ horizonWeeks: 12, subjects: [subject('chem', '2026-10-30', t), subject('phys', null, t.map((x) => ({ ...x, slug: 'p' + x.slug })))] });
  const plan = generatePlan(input, new Date('2026-10-05T08:00:00Z'));
  const firstWeek = plan.weeks[0].days.flatMap((d) => d.sessions).filter((s) => s.subjectId);
  const chem = firstWeek.filter((s) => s.subjectId === 'chem').length;
  const phys = firstWeek.filter((s) => s.subjectId === 'phys').length;
  assert.ok(chem > phys, `chem ${chem} vs phys ${phys}`);
  // The undated subject keeps being planned after the dated exam.
  assert.ok(all(plan).some((s) => s.subjectId === 'phys' && s.date > '2026-10-30'));
});
