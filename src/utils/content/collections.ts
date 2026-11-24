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
): Promise<CollectionEntry<'resources'>[]> => {
  const key = includeDrafts ? 'all' : 'published';
  const cached = BUILD_CACHE && sortedResources.get(key);
  if (cached) return [...cached];
  const sorted = (await allResourceEntries())
    .filter((r) => includeDrafts || r.data.reviewStatus !== 'draft')
    .sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());
  if (BUILD_CACHE) sortedResources.set(key, sorted);
  return [...sorted];
};

/**
 * The ONE site-wide resource total (SEO audit S4.3). Every page that states how many
 * resources Marlbridge has published (About, editorial policy, /resources/ hub and its
 * description) reads it from here, so the figure cannot drift between pages: each
 * resource is counted once, however many courses list it. Per-course and per-subject
 * counts stay separate; a resource listed under two courses is counted once here.
 * Same rule as getResources(): every entry whose reviewStatus is not 'draft'.
 */
export const getPublishedResourceTotal = async (): Promise<number> =>
  (await allResourceEntries()).filter((r) => r.data.reviewStatus !== 'draft').length;

/**
 * D-501 -- build-time cache for the resources collection. Astro's
 * getCollection() rebuilds every entry object on each call, and a resource
 * page called it (directly or through getResources()) about five times, each
 * time also re-sorting. With 16,000+ resources that per-page work grew with
 * the collection and took about 65% of the build's CPU time, pushing the
 * Cloudflare build past its 20-minute limit. The collection cannot change
 * during a production build, so it is read once and shared. Dev keeps reading
 * fresh so edits show up without a restart. Callers get a fresh array (the
 * entries are shared), so sorting or filtering the result is safe; mutating an
 * entry is not, and no caller does.
 */
const BUILD_CACHE = !import.meta.env.DEV;
let resourceEntries: Promise<CollectionEntry<'resources'>[]> | undefined;
const sortedResources = new Map<string, CollectionEntry<'resources'>[]>();

/** Every resource entry, drafts included, in collection order (cached for the build). */
export async function allResourceEntries(): Promise<CollectionEntry<'resources'>[]> {
  if (!BUILD_CACHE) return getCollection('resources');
  resourceEntries ??= getCollection('resources');
  return [...(await resourceEntries)];
}

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

export { resourceLevelLabel, levelDisplay, SEPARATE_AS_QUALIFICATION_BOARDS } from './level-label';

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
