import { getCollection, type CollectionEntry } from 'astro:content';

/** The only place templates read collections from. */
export const getPrograms = async (): Promise<CollectionEntry<'programs'>[]> =>
  (await getCollection('programs')).sort((a, b) => a.data.order - b.data.order);

export const getSubjects = async (): Promise<CollectionEntry<'subjects'>[]> =>
  (await getCollection('subjects')).sort((a, b) => a.data.order - b.data.order);

export const getResources = async (): Promise<CollectionEntry<'resources'>[]> =>
  (await getCollection('resources')).sort(
    (a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf(),
  );

export const getArticles = async (
  { includeDrafts = false } = {},
): Promise<CollectionEntry<'articles'>[]> =>
  (await getCollection('articles'))
    .filter((a) => includeDrafts || !a.data.draft)
    .sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());

export const getAuthors = async (): Promise<CollectionEntry<'authors'>[]> =>
  getCollection('authors');

export const readingTime = (body: string): number =>
  Math.max(1, Math.round(body.trim().split(/\s+/).length / 200));

/**
 * Display label for a resource's `level` values, honouring `stage` for 9701
 * so an AS-only resource never reads as "A LEVELS" on the page. Only
 * 'a-levels' is stage-sensitive; every other level displays as before.
 */
export const resourceLevelLabel = (
  levels: readonly string[],
  stage?: 'AS' | 'A',
): string =>
  levels
    .map((l) => {
      if (l === 'a-levels' && stage === 'AS') return 'AS LEVEL';
      if (l === 'a-levels' && stage === 'A') return 'A LEVEL';
      return l.replace(/-/g, ' ').toUpperCase();
    })
    .join(', ');

export const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);

export const availabilityLabel = {
  'available': 'Teaching now',
  'coming-soon': 'Coming soon',
  'resources-only': 'Resources',
} as const;

export const availabilityTone = {
  'available': 'success',
  'coming-soon': 'neutral',
  'resources-only': 'gold',
} as const;

export const resourceCategoryMeta = {
  'study-guides': { title: 'Study Guides', description: 'Topic explanations written to be read once and understood.' },
  'revision-notes': { title: 'Revision Notes', description: 'Condensed notes for the final weeks before an examination.' },
  'past-papers': { title: 'Past Papers', description: 'Organised by board, subject and session, with guidance on using them well.' },
  'practice-questions': { title: 'Practice Questions', description: 'Question sets by topic, with worked solutions.' },
  'exam-preparation': { title: 'Exam Preparation', description: 'Timetables, technique and how marks are actually awarded.' },
  'subject-guides': { title: 'Subject Guides', description: 'What a subject covers at each level, and how to choose.' },
  'learning-articles': { title: 'Learning Articles', description: 'Study method, memory and independent work.' },
} as const;

export type ResourceCategory = keyof typeof resourceCategoryMeta;
