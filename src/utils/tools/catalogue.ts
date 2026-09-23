/**
 * Revision-tools round (2026-09-23, D-286) -- the course catalogue the free
 * revision tools read.
 *
 * One build-time function turns data this repository already holds (the
 * academic matrix, syllabus records, syllabus topics, the resources
 * collection, the practice bank and the diagnostics list) into two shapes:
 *
 *   catalogueIndex()  -- every published board x qualification x subject,
 *                        with its syllabus code and the tool links that
 *                        really exist for it. Small; used by the homepage
 *                        syllabus finder, the planner and the trial form.
 *   courseDetail(c)   -- one combination's syllabus topics, each with the
 *                        resources mapped to it, grouped by how a student
 *                        uses them (learn / practise / revise). Served as
 *                        /tools-data/{board}/{qualification}/{subject}.json
 *                        and fetched only when a student picks that course.
 *
 * Nothing is invented here: a link is emitted only when its page is built
 * (hub always; checklist only where a current topic record exists, matching
 * the checklist route's own getStaticPaths; practice only for flagship codes
 * with questions; diagnostic only for sets in src/data/diagnostics.ts), and
 * topics come only from syllabus-topics.ts. A combination with no topic
 * record says so (`topics: []`) and the tools fall back to whole-course
 * resources rather than guessing topics.
 */
import type { CollectionEntry } from 'astro:content';
import { activeOnly, academicHubPath, offersClasses, isFlagshipCode, type Combination } from '../academic';
import { resourcesForCombination, STUDY_KIND, type StudyKind } from '../academic/combination-resources';
import { syllabusFor } from '../../data/academic/syllabuses';
import { topicsFor } from '../../data/academic/syllabus-topics';
import { QUALIFICATIONS } from '../../data/academic/qualifications';
import { practiceQuestionsForCode } from '../practice/bank';
import { DIAGNOSTIC_SETS, diagnosticPath } from '../../data/diagnostics';
import { tuitionPageFor } from '../../data/tuition-pages';
import { routes } from '../urls/routes';

export interface CatalogueEntry {
  /** 'board/qualification/subject' -- stable key, also the tools-data path. */
  id: string;
  q: string;
  qs: string;
  b: string;
  bs: string;
  s: string;
  ss: string;
  /** Official syllabus code, only where verified. */
  code?: string;
  /** Official syllabus title, only where verified. */
  title?: string;
  hub: string;
  checklist?: string;
  practice?: string;
  diagnostics?: { label: string; url: string }[];
  /** Hub carries a tuition section (D-286). */
  tuition?: boolean;
  /** Classes are offered (false = resources only). */
  classes: boolean;
  /** Published resources for this combination. */
  n: number;
  /** A syllabus topic record exists (so topics can be rated). */
  topics: boolean;
}

export interface CourseResourceLink {
  t: string;
  u: string;
  k: StudyKind;
}

export interface CourseTopic {
  slug: string;
  name: string;
  number: string;
  stage?: 'AS' | 'A';
  res: CourseResourceLink[];
}

export interface CourseDetail {
  id: string;
  code?: string;
  topics: CourseTopic[];
  /** Resources for the course that are not mapped to a single topic (max 8). */
  general: CourseResourceLink[];
}

const QUAL_ORDER = QUALIFICATIONS.map((q) => q.slug as string);

const idFor = (c: Combination) => `${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}`;

export function catalogueIndex(allResources: readonly CollectionEntry<'resources'>[]): CatalogueEntry[] {
  return activeOnly()
    .map((c): CatalogueEntry => {
      const syllabus = syllabusFor(c.boardSlug, c.qualificationSlug, c.subjectSlug);
      const topicRecord = topicsFor(c.boardSlug, c.qualificationSlug, c.subjectSlug);
      const code = syllabus?.code;
      const hasPractice = !!code && isFlagshipCode(code) && practiceQuestionsForCode(code).length > 0;
      const diagnostics = DIAGNOSTIC_SETS
        .filter((d) => d.boardSlug === c.boardSlug && d.qualificationSlug === c.qualificationSlug && d.subjectSlug === c.subjectSlug)
        .map((d) => ({ label: d.scopeLabel, url: diagnosticPath(d) }));
      return {
        id: idFor(c),
        q: c.qualification,
        qs: c.qualificationSlug,
        b: c.board,
        bs: c.boardSlug,
        s: c.subject,
        ss: c.subjectSlug,
        ...(code ? { code } : {}),
        ...(syllabus ? { title: syllabus.officialTitle } : {}),
        hub: academicHubPath(c),
        ...(topicRecord ? { checklist: `${routes.checklists}${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}/` } : {}),
        ...(hasPractice ? { practice: `/practice/${code}/` } : {}),
        ...(diagnostics.length ? { diagnostics } : {}),
        ...(tuitionPageFor(c.boardSlug, c.qualificationSlug, c.subjectSlug) ? { tuition: true } : {}),
        classes: offersClasses(c),
        n: resourcesForCombination(c, allResources).length,
        topics: !!topicRecord,
      };
    })
    .sort((a, b) =>
      QUAL_ORDER.indexOf(a.qs) - QUAL_ORDER.indexOf(b.qs) || a.b.localeCompare(b.b) || a.s.localeCompare(b.s));
}

/** Order resources the way a student would want them: guides, then notes, then practice. */
const KIND_ORDER: Record<StudyKind, number> = { learn: 0, review: 1, practice: 2 };

export function courseDetail(c: Combination, allResources: readonly CollectionEntry<'resources'>[]): CourseDetail {
  const resources = resourcesForCombination(c, allResources);
  const syllabus = syllabusFor(c.boardSlug, c.qualificationSlug, c.subjectSlug);
  const topicRecord = topicsFor(c.boardSlug, c.qualificationSlug, c.subjectSlug);
  const link = (r: CollectionEntry<'resources'>): CourseResourceLink => ({
    t: r.data.title,
    u: routes.resource(r.id),
    k: STUDY_KIND[r.data.resourceType],
  });
  const sortLinks = (xs: CourseResourceLink[]) => xs.sort((a, b) => KIND_ORDER[a.k] - KIND_ORDER[b.k] || a.t.localeCompare(b.t));

  const mapped = new Set<string>();
  const topics: CourseTopic[] = (topicRecord?.topics ?? []).map((t) => {
    const rs = resources.filter((r) =>
      r.data.syllabusTopics.some((m) => m.qualification === c.qualificationSlug && m.topic === t.slug));
    rs.forEach((r) => mapped.add(r.id));
    return {
      slug: t.slug,
      name: t.name,
      number: String(t.number),
      ...(t.stage ? { stage: t.stage } : {}),
      res: sortLinks(rs.map(link)),
    };
  });
  const general = sortLinks(resources.filter((r) => !mapped.has(r.id)).map(link)).slice(0, 8);
  return { id: idFor(c), ...(syllabus ? { code: syllabus.code } : {}), topics, general };
}
