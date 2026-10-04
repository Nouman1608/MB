/**
 * Read helpers for the advanced-course (AP) library. See src/data/ap/config.ts for the
 * publication switch and docs/ap-library/ for the editorial rules.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { AP_COURSES, apCourseBySlug, type ApCourse } from '../../data/ap/frameworks';
import { AP_LIBRARY_BASE, AP_LIBRARY_PUBLIC, AP_MARK_IN_METADATA, apLibraryBuilt } from '../../data/ap/config';

export type ApEntry = CollectionEntry<'apResources'>;

export { apLibraryBuilt, AP_LIBRARY_PUBLIC };

/** Every library page is noindex until the library is public. */
export const apNoindex = (): boolean => !AP_LIBRARY_PUBLIC;

export async function getApResources(): Promise<ApEntry[]> {
  if (!apLibraryBuilt()) return [];
  return (await getCollection('apResources')).filter((e) => e.data.editorialStatus !== 'planned');
}

export const apResourcesForCourse = async (course: string) =>
  (await getApResources()).filter((e) => e.data.course === course).sort(apSort);

const TYPE_ORDER = ['study-guide', 'revision-notes', 'practice-questions', 'worked-solutions', 'topic-checklist', 'unit-diagnostic', 'unit-review', 'exam-skills'];
const topicKey = (t: string | undefined) => (t ? t.split('.').map(Number) : [99, 99]);
export function apSort(a: ApEntry, b: ApEntry): number {
  const [au, at] = topicKey(a.data.topics[0]);
  const [bu, bt] = topicKey(b.data.topics[0]);
  return a.data.unit - b.data.unit || au - bu || at - bt || TYPE_ORDER.indexOf(a.data.resourceType) - TYPE_ORDER.indexOf(b.data.resourceType);
}

/** Route segment for one resource: the file name inside the course folder. */
export const apResourceSlug = (e: ApEntry): string => e.id.split('/').pop()!;

export const apUrls = {
  index: AP_LIBRARY_BASE,
  course: (slug: string) => `${AP_LIBRARY_BASE}${slug}/`,
  resource: (e: ApEntry) => `${AP_LIBRARY_BASE}${e.data.course}/${apResourceSlug(e)}/`,
};

export const apTypeLabel: Record<string, string> = {
  'study-guide': 'Study guide',
  'revision-notes': 'Revision notes',
  'practice-questions': 'Practice questions',
  'worked-solutions': 'Worked solutions',
  'topic-checklist': 'Topic checklist',
  'unit-diagnostic': 'Unit diagnostic',
  'unit-review': 'Unit review',
  'exam-skills': 'Exam skills',
};

export const apDifficultyLabel: Record<string, string> = {
  foundation: 'Foundation', core: 'Core', stretch: 'Stretch', mixed: 'Mixed (foundation to stretch)',
};

export const apCalculatorLabel: Record<string, string> = {
  'none-needed': 'No calculator needed',
  'not-permitted': 'Calculator not permitted (practise without one)',
  'four-function': 'Four-function calculator',
  scientific: 'Scientific calculator',
  graphing: 'Graphing calculator',
  mixed: 'Mixed: some parts with, some without a calculator',
};

export const apStatusLabel: Record<string, string> = {
  planned: 'Planned',
  drafted: 'Drafted, awaiting AP-teacher review',
  'in-review': 'With an AP teacher for review',
  reviewed: 'Reviewed',
  published: 'Published',
};

/**
 * Visible course name. Headings use the referential form College Board's guidelines
 * give ("Marlbridge guide to AP® Chemistry"); body copy may use "AP® Chemistry".
 */
export const apVisibleName = (c: ApCourse): string => c.officialName.replace(/^AP /, 'AP® ');

/** Name for <title>, meta description, Open Graph and JSON-LD (see AP_MARK_IN_METADATA). */
export const apMetaName = (c: ApCourse): string =>
  AP_MARK_IN_METADATA ? c.officialName : `${c.name} (advanced course)`;

export const apCourse = (slug: string): ApCourse => {
  const c = apCourseBySlug(slug);
  if (!c) throw new Error(`Unknown AP course slug: ${slug}`);
  return c;
};

export const apCoursesForSubject = (subjectId: string): readonly ApCourse[] =>
  AP_COURSES.filter((c) => c.subjectHubs.includes(subjectId));

export const apFamilyLabel: Record<ApCourse['family'], string> = {
  chemistry: 'Chemistry', biology: 'Biology', physics: 'Physics', maths: 'Mathematics and statistics', economics: 'Economics',
};

export const formatExamDate = (iso: string): string =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const formatDay = (d: Date): string =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** schema.org LearningResource node -- neutral names only (see AP_MARK_IN_METADATA). */
export function apLearningResourceNode(e: ApEntry, path: string, absolute: (p: string) => string) {
  const c = apCourse(e.data.course);
  return {
    '@type': 'LearningResource',
    '@id': absolute(path) + '#resource',
    name: e.data.title,
    description: e.data.description,
    url: absolute(path),
    learningResourceType: apTypeLabel[e.data.resourceType],
    educationalLevel: 'Upper secondary (introductory college level)',
    inLanguage: 'en',
    isAccessibleForFree: true,
    timeRequired: `PT${e.data.studyMinutes}M`,
    teaches: e.data.learningObjectives,
    about: { '@type': 'Thing', name: apMetaName(c) },
    datePublished: e.data.publishedDate.toISOString(),
    dateModified: e.data.updatedDate.toISOString(),
    version: e.data.version,
    author: { '@type': 'Organization', name: 'Marlbridge Academic Team' },
    publisher: { '@id': absolute('/#organization') },
    mainEntityOfPage: { '@id': absolute(path) + '#webpage' },
  };
}
