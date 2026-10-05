/**
 * Navigation round (6 Oct 2026) -- one course's resources, arranged the way a
 * student looks for them: by official syllabus topic, and within a topic by
 * what the resource is for (study guide, revision notes, practice questions).
 *
 * Built from the same two sources every other course surface uses:
 *   - resourcesForCombination() decides which resources belong to the course
 *     (combination-resources.ts), so the course page, the revision tools and
 *     the "Next steps" links cannot disagree;
 *   - topicsFor() gives the official topic list (syllabus-topics.ts).
 * A resource mapped to several topics is listed under each. Resources that
 * belong to the course but are not mapped to any of its topics are kept in
 * `wholeCourse`, so no resource drops off the course page.
 */
import type { CollectionEntry } from 'astro:content';
import type { Combination } from '../../data/academic/matrix';
import { topicsFor, type SyllabusTopic } from '../../data/academic/syllabus-topics';
import { resourcesForCombination, STUDY_KIND, type StudyKind } from './combination-resources';

export const KIND_ORDER: readonly StudyKind[] = ['learn', 'review', 'practice'];

/** Heading for each group, as students name these resources. */
export const KIND_LABEL: Record<StudyKind, string> = {
  learn: 'Study guides',
  review: 'Revision notes',
  practice: 'Practice questions',
};

export interface CourseResourceItem {
  id: string;
  title: string;
  description: string;
  resourceType: CollectionEntry<'resources'>['data']['resourceType'];
  kind: StudyKind;
}

export type KindGroups = Record<StudyKind, CourseResourceItem[]>;

export interface CourseTopicEntry {
  topic: SyllabusTopic;
  groups: KindGroups;
  count: number;
}

export interface CourseTopics {
  /** Official topics in syllabus order; empty when the course has no topic record. */
  topics: CourseTopicEntry[];
  /** Course resources not mapped to any listed topic. */
  wholeCourse: KindGroups;
  wholeCourseCount: number;
  total: number;
}

const emptyGroups = (): KindGroups => ({ learn: [], review: [], practice: [] });

function group(items: CourseResourceItem[]): KindGroups {
  const g = emptyGroups();
  for (const it of items) g[it.kind].push(it);
  for (const k of KIND_ORDER) g[k].sort((a, b) => a.title.localeCompare(b.title));
  return g;
}

export function courseTopics(c: Combination, allResources: readonly CollectionEntry<'resources'>[]): CourseTopics {
  const resources = resourcesForCombination(c, allResources);
  const record = topicsFor(c.boardSlug, c.qualificationSlug, c.subjectSlug);
  const item = (r: CollectionEntry<'resources'>): CourseResourceItem => ({
    id: r.id,
    title: r.data.title,
    description: r.data.description,
    resourceType: r.data.resourceType,
    kind: STUDY_KIND[r.data.resourceType],
  });
  const mapped = new Set<string>();
  const topics = (record?.topics ?? []).map((t) => {
    const rs = resources.filter((r) =>
      r.data.syllabusTopics.some((m) => m.qualification === c.qualificationSlug && m.topic === t.slug));
    rs.forEach((r) => mapped.add(r.id));
    return { topic: t, groups: group(rs.map(item)), count: rs.length };
  });
  const rest = resources.filter((r) => !mapped.has(r.id)).map(item);
  return { topics, wholeCourse: group(rest), wholeCourseCount: rest.length, total: resources.length };
}

/** Anchor id of a topic on its course page, e.g. #topic-atoms-elements-and-compounds. */
export const topicAnchor = (topicSlug: string) => `topic-${topicSlug}`;
