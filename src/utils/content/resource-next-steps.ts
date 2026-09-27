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
import { computeNextSteps, type Step } from './next-steps';

export interface ResourceNextStepsPlan {
  course: Combination | undefined;
  steps: Step[];
}

export async function resourceNextSteps(resource: CollectionEntry<'resources'>): Promise<ResourceNextStepsPlan> {
  const d = resource.data;
  const all = await getResources();
  const index = combinationIndex(activeOnly(), all);
  const course: Combination | undefined = (index.byResource.get(resource.id) ?? []).find((c) =>
    d.qualifications.includes(c.qualificationSlug as never) && d.boards.includes(c.boardSlug as never));
  const courseResources = course ? (index.byCourse.get(`${course.boardSlug}/${course.qualificationSlug}/${course.subjectSlug}`) ?? []) : [];
  const code = course ? syllabusFor(course.boardSlug, course.qualificationSlug, course.subjectSlug, d.syllabusCodes)?.code : undefined;
  const diag = course ? DIAGNOSTIC_SETS.find((s) => s.boardSlug === course.boardSlug && s.qualificationSlug === course.qualificationSlug && s.subjectSlug === course.subjectSlug) : undefined;
  const steps = computeNextSteps({
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
  return { course, steps };
}
