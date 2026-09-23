/**
 * D-286 -- the revision-plan scheduler. Pure functions, no DOM, no network:
 * the same input always gives the same plan, and the whole thing runs in the
 * student's browser. Unit tested in src/scripts/__tests__/planner-engine.test.mjs.
 *
 * THE RULES (also printed on /revision-planner/ under "How the plan is made",
 * so a student can see why a session is where it is):
 *
 *  1. Time. Each day's free minutes are cut into sessions of the chosen
 *     length with the chosen break between them:
 *     sessions = floor((minutes + break) / (session + break)).
 *  2. Catch-up. In any week with three or more sessions, the last session of
 *     the week is kept free for catch-up.
 *  3. What each topic needs, from the student's own confidence (1-5):
 *       1 -> learn, practise, revise, practise   (4 sessions)
 *       2 -> learn, practise, revise             (3)
 *       3 or not rated -> practise, revise       (2)
 *       4 or 5 -> revise                         (1)
 *     "I find this difficult" treats the topic as confidence 2 at most and
 *     moves it up the queue.
 *  4. Spacing. A topic's next session is at least 2 days after "learn" and
 *     3 days after "practise", so revision is spread out, not crammed.
 *  5. Priority. Each session goes to the subject under most time pressure:
 *     sessions still needed / sessions left before its exam (or before the
 *     end of the plan if the date is unknown). Within a subject, weaker and
 *     "difficult" topics go first.
 *  6. Variety. The same subject is not given two sessions in a row on one
 *     day when another subject has work, and learn / practise / revise are
 *     alternated where possible.
 *  7. Final fortnight. In the 14 days before a subject's exam, every other
 *     session for that subject is mixed exam-style practice.
 *  8. No session is planned for a subject on or after its exam date.
 *  9. If the time available cannot fit everything, the plan says so, per
 *     subject, and lists what was left out -- it never silently drops work.
 *
 * Nothing here predicts a grade or invents a date. Exam dates come only from
 * the student.
 */

export type TaskKind = 'learn' | 'practice' | 'review' | 'mixed' | 'catchup';

export interface Link {
  t: string;
  u: string;
}

export interface TopicInput {
  slug: string;
  name: string;
  /** 1 (very weak) .. 5 (confident); null = not rated. */
  confidence: number | null;
  difficult: boolean;
  learn: Link[];
  practice: Link[];
  review: Link[];
}

export interface SubjectInput {
  id: string;
  label: string;
  /** YYYY-MM-DD, or null when the student does not know it yet. */
  examDate: string | null;
  topics: TopicInput[];
  /** Links used for mixed practice and for courses with no topic list. */
  practiceLinks: Link[];
  checklist?: string;
}

export interface PlanInput {
  /** YYYY-MM-DD, first day of the plan. */
  start: string;
  /** Free minutes per weekday, Monday first. */
  weekdayMinutes: number[];
  sessionMinutes: number;
  breakMinutes: number;
  /** Plan length when no exam date is known. */
  horizonWeeks: number;
  subjects: SubjectInput[];
}

export interface Session {
  id: string;
  kind: TaskKind;
  subjectId?: string;
  subjectLabel?: string;
  topicSlug?: string;
  topicName?: string;
  title: string;
  links: Link[];
  minutes: number;
  done: boolean;
  /** Set when the student edits the session by hand. */
  note?: string;
}

export interface PlanDay {
  date: string;
  sessions: Session[];
}

export interface PlanWeek {
  start: string;
  days: PlanDay[];
}

export interface SubjectSummary {
  id: string;
  label: string;
  examDate: string | null;
  needed: number;
  scheduled: number;
  /** Tasks that did not fit, e.g. "Organic chemistry — revise". */
  unscheduled: string[];
}

export interface Plan {
  generatedAt: string;
  start: string;
  end: string;
  weeks: PlanWeek[];
  totalSessions: number;
  studyMinutes: number;
  subjects: SubjectSummary[];
  warnings: string[];
  fits: boolean;
}

export const MAX_PLAN_WEEKS = 20;
const FINAL_PHASE_DAYS = 14;
const SPACING_AFTER: Partial<Record<TaskKind, number>> = { learn: 2, practice: 3, review: 3 };

const TASKS_BY_CONFIDENCE: Record<number, TaskKind[]> = {
  1: ['learn', 'practice', 'review', 'practice'],
  2: ['learn', 'practice', 'review'],
  3: ['practice', 'review'],
  4: ['review'],
  5: ['review'],
};

const KIND_LABEL: Record<TaskKind, string> = {
  learn: 'Learn',
  practice: 'Practise',
  review: 'Revise',
  mixed: 'Mixed exam-style practice',
  catchup: 'Catch-up',
};

export const kindLabel = (k: TaskKind): string => KIND_LABEL[k];

/* ---------- dates (all UTC arithmetic on YYYY-MM-DD strings) ---------- */

export function parseDate(s: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const d = new Date(`${s}T00:00:00Z`);
  return Number.isNaN(d.valueOf()) ? null : d;
}
export const fmt = (d: Date): string => d.toISOString().slice(0, 10);
export const addDays = (s: string, n: number): string => {
  const d = parseDate(s)!;
  d.setUTCDate(d.getUTCDate() + n);
  return fmt(d);
};
export const daysBetween = (a: string, b: string): number =>
  Math.round((parseDate(b)!.valueOf() - parseDate(a)!.valueOf()) / 86_400_000);
/** 0 = Monday .. 6 = Sunday. */
export const weekdayIndex = (s: string): number => (parseDate(s)!.getUTCDay() + 6) % 7;

export function sessionsPerDay(minutes: number, sessionMinutes: number, breakMinutes: number): number {
  if (minutes <= 0 || sessionMinutes <= 0) return 0;
  return Math.max(0, Math.floor((minutes + breakMinutes) / (sessionMinutes + breakMinutes)));
}

/* ---------- demand ---------- */

export function effectiveConfidence(t: Pick<TopicInput, 'confidence' | 'difficult'>): number {
  const c = t.confidence ?? 3;
  return t.difficult ? Math.min(c, 2) : c;
}

export function topicWeight(t: Pick<TopicInput, 'confidence' | 'difficult'>): number {
  return 6 - effectiveConfidence(t) + (t.difficult ? 1 : 0);
}

interface Task {
  subject: SubjectInput;
  topic: TopicInput | null;
  kinds: TaskKind[];
  next: number;
  earliest: string;
  weight: number;
}

function buildTasks(s: SubjectInput): Task[] {
  if (s.topics.length === 0) {
    // No topic record for this course: plan whole-course work instead of
    // inventing topics. Eight cycles of practise-then-revise from the checklist.
    const generic: TopicInput = {
      slug: '_course',
      name: 'Next topic on your syllabus checklist',
      confidence: 3,
      difficult: false,
      learn: [],
      practice: s.practiceLinks,
      review: [],
    };
    return Array.from({ length: 8 }, () => ({ subject: s, topic: generic, kinds: ['practice', 'review'] as TaskKind[], next: 0, earliest: '', weight: 3 }));
  }
  return s.topics.map((t) => ({
    subject: s,
    topic: t,
    kinds: TASKS_BY_CONFIDENCE[effectiveConfidence(t)] ?? TASKS_BY_CONFIDENCE[3],
    next: 0,
    earliest: '',
    weight: topicWeight(t),
  }));
}

function linksFor(kind: TaskKind, topic: TopicInput | null, s: SubjectInput): Link[] {
  const pick = (xs: Link[] | undefined, n = 2) => (xs ?? []).slice(0, n);
  let out: Link[] = [];
  if (topic) {
    if (kind === 'learn') out = pick(topic.learn).length ? pick(topic.learn) : pick(topic.review);
    else if (kind === 'practice') out = pick(topic.practice).length ? pick(topic.practice) : pick(s.practiceLinks, 1);
    else if (kind === 'review') out = pick(topic.review).length ? pick(topic.review) : pick(topic.learn, 1);
  }
  if (kind === 'mixed') out = pick(s.practiceLinks, 2);
  if (out.length === 0 && s.checklist) out = [{ t: 'Syllabus checklist', u: s.checklist }];
  return out;
}

/* ---------- the scheduler ---------- */

export function generatePlan(input: PlanInput, now: Date = new Date()): Plan {
  const warnings: string[] = [];
  const start = parseDate(input.start) ? input.start : fmt(now);
  const perDay = input.weekdayMinutes.map((m) => sessionsPerDay(m, input.sessionMinutes, input.breakMinutes));

  // Subjects whose exam has already happened cannot be planned.
  const subjects = input.subjects.filter((s) => {
    if (s.examDate && (!parseDate(s.examDate) || s.examDate <= start)) {
      warnings.push(`${s.label}: the exam date ${s.examDate} is not after the plan's start date, so no sessions were planned for it. Check the date.`);
      return false;
    }
    return true;
  });

  const known = subjects.map((s) => s.examDate).filter((d): d is string => !!d).sort();
  const horizonEnd = addDays(start, Math.max(1, Math.min(input.horizonWeeks, MAX_PLAN_WEEKS)) * 7 - 1);
  // With no dates, the plan runs for the chosen number of weeks. With dates,
  // it runs to the day before the last exam -- but never shorter than the
  // chosen weeks while a subject without a date is still in the plan.
  const hasUnknown = subjects.some((s) => !s.examDate);
  const lastKnownEve = known.length ? addDays(known[known.length - 1], -1) : null;
  let end = !lastKnownEve ? horizonEnd : hasUnknown && horizonEnd > lastKnownEve ? horizonEnd : lastKnownEve;
  const cap = addDays(start, MAX_PLAN_WEEKS * 7 - 1);
  if (end > cap) {
    end = cap;
    warnings.push(`This plan covers the next ${MAX_PLAN_WEEKS} weeks. Your last exam is later than that, so make a fresh plan nearer the time.`);
  }
  if (end < start) end = start;

  const days: string[] = [];
  for (let d = start; d <= end; d = addDays(d, 1)) days.push(d);

  // Slot grid, with the last slot of each week (>= 3 slots) kept for catch-up.
  const slotCount = days.map((d) => perDay[weekdayIndex(d)] ?? 0);
  const catchup = new Set<string>();
  {
    let weekSlots: { day: number; slot: number }[] = [];
    const flush = () => {
      if (weekSlots.length >= 3) {
        const last = weekSlots[weekSlots.length - 1];
        catchup.add(`${last.day}:${last.slot}`);
      }
      weekSlots = [];
    };
    days.forEach((d, i) => {
      if (i > 0 && weekdayIndex(d) === 0) flush();
      for (let k = 0; k < slotCount[i]; k++) weekSlots.push({ day: i, slot: k });
    });
    flush();
  }

  // Study slots remaining from day index i (inclusive) up to and excluding exam day.
  const studySlotsFrom = (i: number, lastDate: string): number => {
    let n = 0;
    for (let j = i; j < days.length && days[j] <= lastDate; j++) {
      for (let k = 0; k < slotCount[j]; k++) if (!catchup.has(`${j}:${k}`)) n++;
    }
    return n;
  };

  const lastStudyDay = (s: SubjectInput) => (s.examDate ? addDays(s.examDate, -1) : end);

  // A subject with no exam date is not under the same pressure as one whose
  // exam is inside the plan: measure its remaining time against at least the
  // chosen number of weeks, projecting average weekly slots past the plan end.
  const weeklySlots = Math.max(1, perDay.reduce((a, b) => a + b, 0) - (perDay.reduce((a, b) => a + b, 0) >= 3 ? 1 : 0));
  const capacityFor = (s: SubjectInput, i: number): number => {
    const inPlan = studySlotsFrom(i, lastStudyDay(s));
    if (s.examDate) return inPlan;
    const target = horizonEnd > end ? horizonEnd : end;
    const beyondDays = Math.max(0, daysBetween(end, target));
    return inPlan + Math.round((beyondDays / 7) * weeklySlots);
  };

  const tasksBySubject = new Map<string, Task[]>();
  for (const s of subjects) tasksBySubject.set(s.id, buildTasks(s));
  const needed = new Map<string, number>();
  for (const s of subjects) needed.set(s.id, tasksBySubject.get(s.id)!.reduce((n, t) => n + t.kinds.length, 0));
  const scheduled = new Map<string, number>(subjects.map((s) => [s.id, 0]));
  const lastKindBySubject = new Map<string, TaskKind>();

  const remaining = (s: SubjectInput) => tasksBySubject.get(s.id)!.reduce((n, t) => n + (t.kinds.length - t.next), 0);

  let seq = 0;
  const makeId = () => `s${++seq}`;
  const weeks: PlanWeek[] = [];
  let studyMinutes = 0;

  days.forEach((date, i) => {
    if (i === 0 || weekdayIndex(date) === 0) weeks.push({ start: date, days: [] });
    const day: PlanDay = { date, sessions: [] };
    let prevSubject: string | undefined;
    let prevKind: TaskKind | undefined;

    for (let k = 0; k < slotCount[i]; k++) {
      if (catchup.has(`${i}:${k}`)) {
        day.sessions.push({
          id: makeId(), kind: 'catchup', title: 'Catch-up: finish anything you missed this week, or rest',
          links: [], minutes: input.sessionMinutes, done: false,
        });
        prevSubject = undefined;
        continue;
      }
      const open = subjects.filter((s) => date <= lastStudyDay(s));
      if (open.length === 0) break;

      // Rule 5 + 6: pressure, with a penalty for repeating the previous subject.
      const scored = open.map((s) => {
        const left = remaining(s);
        const capacity = Math.max(1, capacityFor(s, i));
        let score = left / capacity;
        const inFinal = !!s.examDate && daysBetween(date, s.examDate) <= FINAL_PHASE_DAYS;
        if (inFinal) score += 0.5;
        if (s.id === prevSubject && open.length > 1) score *= 0.5;
        const available = tasksBySubject.get(s.id)!.some((t) => t.next < t.kinds.length && (!t.earliest || t.earliest <= date));
        return { s, score, available, inFinal };
      }).sort((a, b) => b.score - a.score || a.s.label.localeCompare(b.s.label));

      const pick = scored.find((x) => x.available || x.inFinal) ?? scored[0];
      const s = pick.s;

      // Rule 7: alternate mixed practice in the final fortnight.
      let kind: TaskKind;
      let task: Task | undefined;
      if (pick.inFinal && lastKindBySubject.get(s.id) !== 'mixed') {
        kind = 'mixed';
      } else {
        const candidates = tasksBySubject.get(s.id)!
          .filter((t) => t.next < t.kinds.length && (!t.earliest || t.earliest <= date))
          .sort((a, b) => b.weight - a.weight);
        task = candidates.find((t) => t.kinds[t.next] !== prevKind) ?? candidates[0];
        if (task) kind = task.kinds[task.next];
        else {
          // Everything for this subject is waiting on spacing or done:
          // revise the weakest topic again rather than leave the slot empty.
          const weakest = [...tasksBySubject.get(s.id)!].sort((a, b) => b.weight - a.weight)[0];
          kind = 'review';
          day.sessions.push({
            id: makeId(), kind, subjectId: s.id, subjectLabel: s.label,
            topicSlug: weakest?.topic?.slug, topicName: weakest?.topic?.name,
            title: `${kindLabel(kind)}: ${weakest?.topic?.name ?? 'your weakest topic so far'} (extra)`,
            links: linksFor(kind, weakest?.topic ?? null, s), minutes: input.sessionMinutes, done: false,
          });
          studyMinutes += input.sessionMinutes;
          prevSubject = s.id; prevKind = kind; lastKindBySubject.set(s.id, kind);
          continue;
        }
      }

      const topic = task?.topic ?? null;
      day.sessions.push({
        id: makeId(), kind, subjectId: s.id, subjectLabel: s.label,
        topicSlug: topic?.slug, topicName: topic?.name,
        title: kind === 'mixed' ? `${kindLabel(kind)} across ${s.label}` : `${kindLabel(kind)}: ${topic?.name ?? ''}`,
        links: linksFor(kind, topic, s), minutes: input.sessionMinutes, done: false,
      });
      studyMinutes += input.sessionMinutes;
      if (task) {
        const spacing = SPACING_AFTER[kind] ?? 2;
        task.next += 1;
        task.earliest = addDays(date, spacing);
        scheduled.set(s.id, (scheduled.get(s.id) ?? 0) + 1);
      }
      prevSubject = s.id;
      prevKind = kind;
      lastKindBySubject.set(s.id, kind);
    }
    weeks[weeks.length - 1].days.push(day);
  });

  const summaries: SubjectSummary[] = subjects.map((s) => {
    const left: string[] = [];
    for (const t of tasksBySubject.get(s.id)!) {
      for (let j = t.next; j < t.kinds.length; j++) left.push(`${t.topic?.name ?? 'Course work'} — ${kindLabel(t.kinds[j]).toLowerCase()}`);
    }
    return { id: s.id, label: s.label, examDate: s.examDate, needed: needed.get(s.id) ?? 0, scheduled: scheduled.get(s.id) ?? 0, unscheduled: left };
  });

  const totalSessions = weeks.reduce((n, w) => n + w.days.reduce((m, d) => m + d.sessions.length, 0), 0);
  if (perDay.every((n) => n === 0)) {
    warnings.push('No study time was entered, or each day is shorter than one session. Add minutes to at least one day, or choose a shorter session.');
  }
  for (const s of summaries) {
    if (s.unscheduled.length > 0) {
      const short = s.needed - s.scheduled;
      const by = s.examDate ? `before the exam on ${s.examDate}` : 'in this plan';
      warnings.push(
        `${s.label}: ${s.scheduled} of the ${s.needed} sessions it needs fit ${by}. About ${short} more ${short === 1 ? 'session is' : 'sessions are'} needed — roughly ${Math.ceil((short * (input.sessionMinutes + input.breakMinutes)) / 60)} more hours. Add study time, start earlier, or rate topics you already know well as 4 or 5.`,
      );
    }
  }
  const fits = summaries.every((s) => s.unscheduled.length === 0) && totalSessions > 0;

  return {
    generatedAt: now.toISOString(),
    start,
    end,
    weeks,
    totalSessions,
    studyMinutes,
    subjects: summaries,
    warnings,
    fits,
  };
}
