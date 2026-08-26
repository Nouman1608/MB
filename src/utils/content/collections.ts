import { getCollection, type CollectionEntry } from 'astro:content';

/** The only place templates read collections from. */
export const getPrograms = async (): Promise<CollectionEntry<'programs'>[]> =>
  (await getCollection('programs')).sort((a, b) => a.data.order - b.data.order);

export const getSubjects = async (): Promise<CollectionEntry<'subjects'>[]> =>
  (await getCollection('subjects')).sort((a, b) => a.data.order - b.data.order);

/**
 * QIGT programme -- resources previously had NO publication-state gating
 * at all: every file in src/content/resources/ was built and indexed
 * regardless of `reviewStatus`. `draft` resources are excluded from
 * routing entirely (matching `getArticles()`'s existing `draft` boolean
 * behaviour below) since draft content is not ready to be public.
 * `archived` resources are NOT excluded here -- their page must keep
 * resolving so old links/bookmarks don't 404 -- but the page templates
 * (resources/[slug].astro, articles/[slug].astro) derive `noindex` from
 * `reviewStatus === 'archived'` and astro.config.mjs's sitemap filter
 * excludes them, so an archived resource is reachable but not indexed.
 */
export const getResources = async (
  { includeDrafts = false } = {},
): Promise<CollectionEntry<'resources'>[]> =>
  (await getCollection('resources'))
    .filter((r) => includeDrafts || r.data.reviewStatus !== 'draft')
    .sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());

/**
 * QIGT programme -- articles carry TWO separate draft signals: the
 * original boolean `draft` field, and `reviewStatus`'s own `'draft'`
 * enum value (added later for resources/articles alike, for a single
 * shared publication-state model). They were never reconciled, so an
 * article with `reviewStatus: "draft"` but the boolean left at its
 * `false` default would previously have published anyway. Both signals
 * are now honoured -- either one hides the article -- so the two
 * mechanisms cannot silently disagree while the older boolean field
 * still exists for any code that depends on it.
 */
export const getArticles = async (
  { includeDrafts = false } = {},
): Promise<CollectionEntry<'articles'>[]> =>
  (await getCollection('articles'))
    .filter((a) => includeDrafts || (!a.data.draft && a.data.reviewStatus !== 'draft'))
    .sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());

/**
 * QIGT programme -- authors also carry a `publicationState` field
 * (draft|published) that, like resources' reviewStatus, was declared in
 * the schema but never actually enforced anywhere: getStaticPaths for
 * /authors/[slug] and the /tutoring faculty list both read every author
 * regardless of state. No author is currently draft, so this was latent
 * rather than actively wrong, but the same "declared state with no
 * enforcement" gap applies here as it did to resources/articles.
 */
export const getAuthors = async (
  { includeDrafts = false } = {},
): Promise<CollectionEntry<'authors'>[]> =>
  (await getCollection('authors')).filter(
    (a) => includeDrafts || a.data.publicationState !== 'draft',
  );

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

/**
 * v1.2 WS2: keyed by the real `marlbridgeTeaches` business field (see
 * src/utils/content/status.ts), not the old single `status` claim.
 */
export const availabilityLabel = {
  'teaching': 'Teaching now',
  'planned': 'Planned',
  'not-teaching': 'Not taught',
  'not-confirmed': 'Not confirmed',
} as const;

export const availabilityTone = {
  'teaching': 'success',
  'planned': 'gold',
  'not-teaching': 'neutral',
  'not-confirmed': 'neutral',
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
