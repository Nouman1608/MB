/**
 * B8 (2026-09-27) -- resolves everything computeNextSteps() needs for one
 * resource page, so ResourceNextSteps.astro (the "Next steps" block at the
 * foot) and the resource page's "On this topic" line share one computation.
 *
 * The course is resolved from the resource's own boards / qualifications /
 * subject against the ACTIVE matrix, through resourcesForCombination (the
 * same rule the hub uses), so a link is never offered for a course this
 * resource does not belong to.
 */
import type { CollectionEntry } from 'astro:content';
import { activeOnly, academicHubPath, isFlagshipCode, type Combination } from '../academic';
import { combinationIndex, STUDY_KIND } from '../academic/combination-resources';
import { syllabusFor } from '../../data/academic/syllabuses';
import { topicsFor } from '../../data/academic/syllabus-topics';
import { DIAGNOSTIC_SETS, diagnosticPath } from '../../data/diagnostics';
import { practiceQuestionsForCode } from '../practice/bank';
import { getResources } from './collections';
import { routes } from '../urls/routes';
import { computeNextSteps, isExtendedOnly, type Step } from './next-steps';

export interface ResourceNextStepsPlan {
  course: Combination | undefined;
  steps: Step[];
}

/**
 * Navigation round (6 Oct 2026) -- one plan per course the resource belongs
 * to. A resource can serve two courses (55 Cambridge pages cover both IGCSE
 * 0620 and O Level 5070); the page renders a plan for each and shows the one
 * matching the student's chosen course (scripts/course-context.ts), so an
 * O Level student is not sent to IGCSE practice. The first plan is the
 * resource's primary course: the one matching the first syllabus code it
 * declares, otherwise the first course it belongs to.
 */
export interface ResourceCoursePlan extends ResourceNextStepsPlan {
  course: Combination;
  id: string;
  code?: string;
  /** e.g. "Cambridge IGCSE Chemistry (0620)" */
  label: string;
  hubHref: string;
  /** The course topic this resource is mapped to, if any. */
  topic?: { slug: string; name: string; number: string };
}

export async function resourceCoursePlans(resource: CollectionEntry<'resources'>): Promise<ResourceCoursePlan[]> {
  const d = resource.data;
  const all = await getResources();
  const index = combinationIndex(activeOnly(), all);
  const courses = (index.byResource.get(resource.id) ?? []).filter((c) =>
    d.qualifications.includes(c.qualificationSlug as never) && d.boards.includes(c.boardSlug as never));
  const codeOf = (c: Combination) => syllabusFor(c.boardSlug, c.qualificationSlug, c.subjectSlug, d.syllabusCodes)?.code;
  const primaryCode = d.syllabusCodes[0];
  const ordered = [...courses].sort((a, b) => Number(codeOf(b) === primaryCode) - Number(codeOf(a) === primaryCode));
  return ordered.map((course) => {
    const code = codeOf(course);
    const record = topicsFor(course.boardSlug, course.qualificationSlug, course.subjectSlug);
    const mapping = d.syllabusTopics.find((m) => m.qualification === course.qualificationSlug && record?.topics.some((t) => t.slug === m.topic));
    const t = mapping ? record!.topics.find((x) => x.slug === mapping.topic)! : undefined;
    const showCode = course.boardSlug !== 'ib' && !!code && /\d/.test(code);
    return {
      course,
      id: `${course.boardSlug}/${course.qualificationSlug}/${course.subjectSlug}`,
      code: showCode ? code : undefined,
      label: `${course.boardSlug === 'ib' ? course.qualification : `${course.board} ${course.qualification}`} ${course.subject}${showCode ? ` (${code})` : ''}`,
      hubHref: academicHubPath(course),
      ...(t ? { topic: { slug: t.slug, name: t.name, number: String(t.number) } } : {}),
      steps: planFor(resource, course, index.byCourse.get(`${course.boardSlug}/${course.qualificationSlug}/${course.subjectSlug}`) ?? []),
    };
  });
}

export async function resourceNextSteps(resource: CollectionEntry<'resources'>): Promise<ResourceNextStepsPlan> {
  const plans = await resourceCoursePlans(resource);
  if (plans.length) return { course: plans[0].course, steps: plans[0].steps };
  return { course: undefined, steps: planFor(resource, undefined, []) };
}

function planFor(resource: CollectionEntry<'resources'>, course: Combination | undefined, courseResources: readonly CollectionEntry<'resources'>[]): Step[] {
  const d = resource.data;
  const code = course ? syllabusFor(course.boardSlug, course.qualificationSlug, course.subjectSlug, d.syllabusCodes)?.code : undefined;
  const courseSets = course ? DIAGNOSTIC_SETS.filter((s) => s.boardSlug === course.boardSlug && s.qualificationSlug === course.qualificationSlug && s.subjectSlug === course.subjectSlug) : [];
  // D-362 -- owner decision (27 Sep 2026): a page whose syllabus points for
  // this course are ALL Extended-only (verified 'supplement' tier) sends
  // "Test yourself" to the course's Extended diagnostic, when one exists,
  // instead of the first (Core) set.
  const topicRecords = course ? topicsFor(course.boardSlug, course.qualificationSlug, course.subjectSlug) : undefined;
  const extendedOnly = !!topicRecords?.tiered && isExtendedOnly(d.syllabusTopics, course?.qualificationSlug, topicRecords.topics);
  const diag = (extendedOnly ? courseSets.find((s) => s.tier === 'extended') : undefined) ?? courseSets[0];
  return computeNextSteps({
    resourceId: resource.id,
    kind: STUDY_KIND[d.resourceType],
    syllabusTopics: d.syllabusTopics,
    course,
    code,
    topics: course ? topicsFor(course.boardSlug, course.qualificationSlug, course.subjectSlug)?.topics : undefined,
    courseResources: courseResources.map((r) => ({ id: r.id, title: r.data.title, kind: STUDY_KIND[r.data.resourceType], syllabusTopics: r.data.syllabusTopics })),
    diagnostic: diag ? { href: diagnosticPath(diag), code: diag.code, scopeLabel: diag.scopeLabel } : undefined,
    selfCheckPractice: !diag && !!code && isFlagshipCode(code) && practiceQuestionsForCode(code).length > 0,
    resourceHref: (id) => routes.resource(id),
    checklistsBase: routes.checklists,
    hubHref: course ? academicHubPath(course) : undefined,
  });
}
