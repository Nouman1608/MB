/**
 * D-286 / B8 (2026-09-27) -- the "Next steps" computation for a resource
 * page, extracted from src/components/tools/ResourceNextSteps.astro so the
 * same links can also feed the compact "On this topic" line near the top of
 * the page (only ~13% of readers scroll to 90%, where Next steps sits).
 *
 * Pure: no astro:content, no file-system access. Everything it needs is
 * resolved by the caller (src/utils/content/resource-next-steps.ts) and
 * passed in, so it can be unit-tested with plain node
 * (src/utils/content/__tests__/next-steps.test.mjs).
 *
 * The rules are exactly the ones ResourceNextSteps.astro used:
 *   - the course is the resource's own (resolved by the caller from the
 *     active matrix), never a guessed one;
 *   - same-topic links come from the resource's own syllabusTopics mapping,
 *     preferring resources on the same subtopic(s) and falling back to the
 *     topic, and never the page itself;
 *   - then the course's 10-minute diagnostic (or, without one, the
 *     self-check practice bank), the checklist or hub, and the planner.
 */

export type StudyKind = 'learn' | 'review' | 'practice';

export interface TopicMapping {
  qualification: string;
  topic: string;
  subtopic?: string;
}

export interface CandidateResource {
  id: string;
  title: string;
  /** STUDY_KIND of the resource's type; undefined for types that are not study material. */
  kind: StudyKind | undefined;
  syllabusTopics: readonly TopicMapping[];
}

export interface NextStepsCourse {
  boardSlug: string;
  qualificationSlug: string;
  subjectSlug: string;
  board: string;
  qualification: string;
  subject: string;
}

export interface NextStepsInput {
  resourceId: string;
  kind: StudyKind | undefined;
  syllabusTopics: readonly TopicMapping[];
  /** The resource's own course, or undefined when it maps to no single course. */
  course?: NextStepsCourse;
  /** Syllabus code of that course, if known. */
  code?: string;
  /** Topic list of the course's syllabus-topics record; undefined when the course has no record. */
  topics?: readonly { slug: string; name: string }[];
  /** Every resource of the course (the page itself may be included; it is excluded here). */
  courseResources: readonly CandidateResource[];
  /** The course's first 10-minute diagnostic set, if any. */
  diagnostic?: { href: string; code: string; scopeLabel: string };
  /** True when the course code is a flagship code with self-check practice questions. */
  selfCheckPractice: boolean;
  resourceHref: (id: string) => string;
  checklistsBase: string;
  /** Syllabus hub of the course (used when it has no topic record). */
  hubHref?: string;
}

export type StepKind = StudyKind | 'diagnostic' | 'practice_tool' | 'checklist' | 'hub' | 'planner';

export interface Step {
  href: string;
  label: string;
  detail: string;
  kind: StepKind;
  /** For same-topic study links: the linked resource's title. */
  resourceTitle?: string;
}

export function computeNextSteps(input: NextStepsInput): Step[] {
  const { course, code, kind } = input;
  const steps: Step[] = [];
  if (course) {
    const mapping = input.syllabusTopics.find((m) => m.qualification === course.qualificationSlug);
    if (mapping) {
      const topicName = input.topics?.find((t) => t.slug === mapping.topic)?.name;
      // Prefer resources on the same subtopic(s) as this one; fall back to the topic.
      const mySubs = new Set(input.syllabusTopics
        .filter((m) => m.qualification === course.qualificationSlug && m.subtopic)
        .map((m) => `${m.topic}/${m.subtopic}`));
      const others = input.courseResources.filter((r) => r.id !== input.resourceId);
      const sameSub = others.filter((r) => r.syllabusTopics.some((m) => m.qualification === course.qualificationSlug && m.subtopic && mySubs.has(`${m.topic}/${m.subtopic}`)));
      const sameTopic = others.filter((r) => r.syllabusTopics.some((m) => m.qualification === course.qualificationSlug && m.topic === mapping.topic));
      const want: StudyKind[] = kind === 'learn' ? ['practice', 'review'] : kind === 'review' ? ['practice', 'learn'] : ['review', 'learn'];
      for (const k of want) {
        const r = sameSub.find((x) => x.kind === k) ?? sameTopic.find((x) => x.kind === k);
        if (r) steps.push({
          href: input.resourceHref(r.id),
          label: k === 'practice' ? 'Practise this topic' : k === 'review' ? 'Revision notes for this topic' : 'Study guide for this topic',
          detail: topicName ? `${topicName}: ${r.title}` : r.title,
          kind: k,
          resourceTitle: r.title,
        });
      }
    }
    const diag = input.diagnostic;
    if (diag) steps.push({ href: diag.href, label: 'Test yourself in 10 minutes', detail: `${diag.code} diagnostic: ${diag.scopeLabel}`, kind: 'diagnostic' });
    else if (code && input.selfCheckPractice) steps.push({ href: `/practice/${code}/`, label: 'Self-check practice', detail: `${code} questions with worked answers`, kind: 'practice_tool' });
    if (input.topics) {
      steps.push({ href: `${input.checklistsBase}${course.boardSlug}/${course.qualificationSlug}/${course.subjectSlug}/`, label: 'Tick it off your checklist', detail: `Printable ${code ?? ''} syllabus checklist`.replace('  ', ' '), kind: 'checklist' });
    } else {
      steps.push({ href: input.hubHref ?? '', label: 'All topics for this syllabus', detail: `${course.board} ${course.qualification} ${course.subject}${code ? ` (${code})` : ''}`, kind: 'hub' });
    }
  }
  const planHref = course ? `/revision-planner/?course=${encodeURIComponent(`${course.boardSlug}/${course.qualificationSlug}/${course.subjectSlug}`)}` : '/revision-planner/';
  steps.push({ href: planHref, label: 'Plan your revision', detail: 'A free weekly plan that puts weak topics first', kind: 'planner' });
  return steps;
}

export interface OnThisTopicLink {
  href: string;
  label: string;
  /** Resource title (or diagnostic scope) for a tooltip / accessible description. */
  title: string;
  kind: StudyKind | 'diagnostic';
}

const ON_THIS_TOPIC_ORDER: readonly OnThisTopicLink['kind'][] = ['learn', 'review', 'practice', 'diagnostic'];
const ON_THIS_TOPIC_LABEL: Record<OnThisTopicLink['kind'], string> = {
  learn: 'Study guide',
  review: 'Revision notes',
  practice: 'Practice questions',
  diagnostic: 'Test yourself',
};

/**
 * B8 -- the compact "On this topic" line: the same-topic study links from
 * the Next steps (learn / review / practice), then the diagnostic as "Test
 * yourself". Empty (so the caller omits the line) when there is no
 * same-topic link: a diagnostic alone is not "on this topic". A link to
 * `selfHref` is never returned.
 */
export function onThisTopicLinks(steps: readonly Step[], selfHref: string): OnThisTopicLink[] {
  const usable = steps.filter((s) => s.href !== selfHref);
  const topical = usable.filter((s) => s.kind === 'learn' || s.kind === 'review' || s.kind === 'practice');
  if (topical.length === 0) return [];
  const diag = usable.find((s) => s.kind === 'diagnostic');
  const picked = [...topical, ...(diag ? [diag] : [])] as (Step & { kind: OnThisTopicLink['kind'] })[];
  const seen = new Set<string>();
  return picked
    .filter((s) => (seen.has(s.href) ? false : (seen.add(s.href), true)))
    .sort((a, b) => ON_THIS_TOPIC_ORDER.indexOf(a.kind) - ON_THIS_TOPIC_ORDER.indexOf(b.kind))
    .map((s) => ({
      href: s.href,
      label: ON_THIS_TOPIC_LABEL[s.kind],
      title: s.resourceTitle ?? s.detail,
      kind: s.kind,
    }));
}
