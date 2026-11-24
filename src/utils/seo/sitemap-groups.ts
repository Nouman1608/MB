/**
 * Which child sitemap a URL belongs to.
 *
 * The site publishes one sitemap index (/sitemap-index.xml) and one child
 * file per group below (/sitemap-<group>-0.xml), so Search Console reports
 * submitted and indexed counts per page type instead of one figure for the
 * whole site. Every URL belongs to exactly one group: astro.config.mjs
 * builds its `chunks` from this function, and scripts/test-sitemap-groups.mjs
 * checks the built files against it.
 *
 * Which URLs are in the sitemap at all is decided elsewhere (the `filter`
 * in astro.config.mjs). This only sorts the ones that are.
 *
 * `pages` is the sitemap integration's own name for "everything not placed
 * in a named group": the home page, tuition and regional landing pages,
 * programmes, tools, workshops and legal pages.
 */
export const SITEMAP_GROUPS = [
  'pages',
  'courses',
  'resources',
  'practice',
  'flashcards',
  'advanced-courses',
  'articles',
  'authors',
  'author-archives',
  'localized',
] as const;

export type SitemapGroup = (typeof SITEMAP_GROUPS)[number];

/** What each group holds, for the test output and the docs. */
export const SITEMAP_GROUP_DESCRIPTIONS: Record<SitemapGroup, string> = {
  pages: 'Home, tuition, pricing, regional landing pages, programmes, tools and legal pages',
  courses: 'Board, qualification, subject and course hubs, checklists, past-paper pages and resource listings',
  resources: 'Study guides, revision notes, practice sets and other single resources',
  practice: 'Practice-question banks and diagnostics',
  flashcards: 'Flashcard decks and per-topic flashcard pages',
  'advanced-courses': 'Advanced-course study library',
  articles: 'Learning Journal articles',
  authors: 'Teacher and author profiles',
  'author-archives': "Paginated lists of an author's resources",
  localized: 'Arabic, Urdu and Bengali pages',
};

const RESOURCE_TYPES = new Set([
  'study-guides', 'revision-notes', 'past-papers', 'practice-questions',
  'exam-preparation', 'subject-guides', 'learning-articles',
]);

/** `path` is the URL pathname, with leading and trailing slash. */
export function sitemapGroup(path: string): SitemapGroup {
  const seg = path.split('/').filter(Boolean);
  const [first, second, third] = seg;
  if (first === 'ar' || first === 'ur' || first === 'bn') return 'localized';
  if (first === 'authors') return third === 'resources' ? 'author-archives' : 'authors';
  if (first === 'articles') return seg.length > 1 ? 'articles' : 'pages';
  if (first === 'advanced-course-resources') return 'advanced-courses';
  if (first === 'flashcards') return 'flashcards';
  if (first === 'practice') return 'practice';
  if (first === 'resources') {
    // /resources/ and /resources/<type>/<subject>/ are listings; /resources/<slug>/ is a resource.
    if (seg.length === 1) return 'courses';
    if (seg.length === 3 && RESOURCE_TYPES.has(second)) return 'courses';
    return 'resources';
  }
  if (first === 'boards' || first === 'levels' || first === 'subjects' || first === 'checklists' || first === 'past-papers') return 'courses';
  return 'pages';
}
