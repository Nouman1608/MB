import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { rtlBlocksPlugin } from './src/utils/markdown/hast-rtl-blocks.mjs';
import { partBreaksPlugin } from './src/utils/markdown/hast-part-breaks.mjs';
import { alignedBlocksPlugin } from './src/utils/markdown/hast-aligned-blocks.mjs';
import { tableScrollPlugin } from './src/utils/markdown/hast-table-scroll.mjs';
import tailwindcss from '@tailwindcss/vite';
import typographicDashes from './src/integrations/typographic-dashes.mjs';
import { readdirSync, readFileSync } from 'node:fs';
import { activeOnly, academicHubPath, LEVEL_FOR_QUALIFICATION } from './src/utils/academic/index.ts';
import { subjectBySlug } from './src/data/academic/subjects.ts';
import { topicsFor } from './src/data/academic/syllabus-topics.ts';
import { isIndexableAcademicPage } from './src/utils/seo/indexability.ts';
import { bodyWordCount } from './src/utils/seo/word-count.ts';
import { EN_PATH, TRANSLATED_LOCALES } from './src/i18n/routes.ts';
import { sitemapGroup, SITEMAP_GROUPS } from './src/utils/seo/sitemap-groups.ts';
import { practiceLastmods, localizedLastmods } from './src/utils/seo/sitemap-lastmod.ts';
import { AP_LIBRARY_PUBLIC, AP_LIBRARY_BASE } from './src/data/ap/config.ts';
import { FLASHCARD_DECKS, flashcardsPath } from './src/data/flashcards/index.ts';
import { apFlashcardCourses, apFlashcardsPath, apUnitsWithCards, apDeckUpdated } from './src/data/ap-flashcards/index.ts';

/**
 * lastmod lookup for the sitemap (Phase 6 — technical SEO / crawlability).
 *
 * @astrojs/sitemap does not read content-collection dates on its own, so
 * every URL was previously written to sitemap-0.xml with no <lastmod> at
 * all. This reads updatedDate (falling back to publishedDate) directly out
 * of each resource/article's frontmatter and keys it by the page path, so
 * genuinely dated content gets a genuine <lastmod> instead of none. Pages
 * with no real date (hubs, subjects, programs, static pages) are left
 * without lastmod rather than given a fabricated one.
 */
function buildLastmodMap() {
  const map = new Map();
  const collections = [
    { dir: 'src/content/resources', urlPrefix: '/resources/' },
    { dir: 'src/content/articles', urlPrefix: '/articles/' },
  ];
  for (const { dir, urlPrefix } of collections) {
    let files;
    try {
      files = readdirSync(new URL(dir + '/', import.meta.url)).filter((f) => f.endsWith('.md'));
    } catch {
      continue;
    }
    for (const file of files) {
      const raw = readFileSync(new URL(`${dir}/${file}`, import.meta.url), 'utf-8');
      const frontmatter = raw.split('---')[1] ?? '';
      const updated = frontmatter.match(/^updatedDate:\s*(\S+)/m)?.[1];
      const published = frontmatter.match(/^publishedDate:\s*(\S+)/m)?.[1];
      const date = updated ?? published;
      if (!date) continue;
      const slug = file.replace(/\.md$/, '');
      map.set(`${urlPrefix}${slug}/`, new Date(date).toISOString());
    }
  }
  // D-390 -- advanced-course (AP) library pages: updatedDate from their frontmatter.
  try {
    const base = new URL('src/content/ap-resources/', import.meta.url);
    for (const course of readdirSync(base)) {
      for (const file of readdirSync(new URL(`${course}/`, base)).filter((f) => f.endsWith('.md'))) {
        const fm = readFileSync(new URL(`${course}/${file}`, base), 'utf-8').split('---')[1] ?? '';
        const date = fm.match(/^updatedDate:\s*(\S+)/m)?.[1];
        if (date) map.set(`${AP_LIBRARY_BASE}${course}/${file.replace(/\.md$/, '')}/`, new Date(date).toISOString());
      }
    }
  } catch { /* no AP library */ }
  // Advanced-course flashcard hubs and unit pages: the deck's `updated` (or its parent's, if later).
  for (const c of apFlashcardCourses()) {
    const date = apDeckUpdated(c.slug);
    if (!date) continue;
    const iso = new Date(date).toISOString();
    map.set(apFlashcardsPath(c.slug), iso);
    for (const { unit } of apUnitsWithCards(c.slug)) map.set(apFlashcardsPath(c.slug, unit.number), iso);
  }
  // Flashcard decks: the deck's `updated` date covers its hub and every topic page.
  for (const deck of FLASHCARD_DECKS) {
    if (!deck.updated || Number.isNaN(Date.parse(deck.updated))) continue;
    const iso = new Date(deck.updated).toISOString();
    map.set(flashcardsPath(deck), iso);
    for (const topic of new Set(deck.cards.map((c) => c.topic))) map.set(flashcardsPath(deck, topic), iso);
  }
  return map;
}

const lastmodBySlug = buildLastmodMap();

/**
 * Nov 2026 SEO audit (A7) -- lastmod for index pages. A hub or listing page
 * changes when something it lists changes, so its lastmod is the newest real
 * updatedDate/publishedDate among the pages it lists (never the build date).
 * `bump` keeps the later of two ISO dates for a path.
 */
function bump(map, path, iso) {
  if (!iso) return;
  const prev = map.get(path);
  if (!prev || iso > prev) map.set(path, iso);
}

/** Frontmatter field as a plain string, or undefined. */
function fmField(frontmatter, name) {
  return frontmatter.match(new RegExp(String.raw`^${name}:\s*"?([^"\n]+?)"?\s*$`, 'm'))?.[1];
}

function buildIndexLastmods() {
  const idx = new Map();
  for (const [dir, prefix] of [['src/content/resources', '/resources/'], ['src/content/articles', '/articles/']]) {
    let files = [];
    try { files = readdirSync(new URL(dir + '/', import.meta.url)).filter((f) => f.endsWith('.md')); } catch { continue; }
    for (const file of files) {
      const slug = file.replace(/\.md$/, '');
      const iso = lastmodBySlug.get(`${prefix}${slug}/`);
      if (!iso) continue;
      const fm = (readFileSync(new URL(`${dir}/${file}`, import.meta.url), 'utf-8').split('---')[1]) ?? '';
      bump(idx, prefix, iso);
      bump(idx, '/', iso);
      const type = fmField(fm, 'resourceType');
      if (prefix === '/resources/' && type) bump(idx, `/resources/${type}/`, iso);
      const subject = fmField(fm, 'subject');
      if (prefix === '/resources/' && type && subject) bump(idx, `/resources/${type}/${subject}/`, iso);
      const author = fmField(fm, 'author');
      if (author) { bump(idx, `/authors/${author}/`, iso); bump(idx, `/authors/${author}/resources/`, iso); bump(idx, '/authors/', iso); }
    }
  }
  // Advanced-course library: a course hub and the library index take the newest page under them.
  for (const [path, iso] of lastmodBySlug) {
    if (!path.startsWith(AP_LIBRARY_BASE)) continue;
    const course = path.slice(AP_LIBRARY_BASE.length).split('/')[0];
    if (!course) continue;
    bump(idx, AP_LIBRARY_BASE, iso);
    bump(idx, `${AP_LIBRARY_BASE}${course}/`, iso);
  }
  // /flashcards/ changes when any deck does.
  for (const deck of FLASHCARD_DECKS) {
    if (deck.updated && !Number.isNaN(Date.parse(deck.updated))) bump(idx, '/flashcards/', new Date(deck.updated).toISOString());
  }
  // A teacher's profile page was last changed when its facts were last checked.
  try {
    for (const file of readdirSync(new URL('src/content/authors/', import.meta.url)).filter((f) => f.endsWith('.md'))) {
      const fm = readFileSync(new URL(`src/content/authors/${file}`, import.meta.url), 'utf-8').split('---')[1] ?? '';
      const verified = fmField(fm, 'verifiedOn');
      if (verified && !Number.isNaN(Date.parse(verified))) {
        const slug = file.replace(/\.md$/, '');
        bump(idx, `/authors/${slug}/`, new Date(verified).toISOString());
      }
    }
  } catch { /* no authors */ }
  return idx;
}
const indexLastmods = buildIndexLastmods();

/**
 * Audit round 3 (item 49) -- the practice and translated pages had no lastmod, so
 * sitemap-practice-0.xml and sitemap-localized-0.xml had none in the index. Real
 * dates only (rules in src/utils/seo/sitemap-lastmod.ts): practice pages take the
 * dates of the resources their questions come from (and a diagnostic set's review
 * date); translated legal pages their own "last updated" date; translated
 * directories their English counterpart's lastmod. Never the build date.
 */
const practiceAndLocalizedLastmods = new Map([
  ...practiceLastmods((path) => lastmodBySlug.get(path)),
  ...localizedLastmods((path) => lastmodBySlug.get(path) ?? indexLastmods.get(path)),
]);

/**
 * Sitemap exclusion for non-indexable academic hub pages (Phase 2 -- Aug
 * 2026 SEO remediation).
 *
 * Before this existed, every ACTIVE board+qualification+subject
 * combination got a <loc> entry in the sitemap regardless of whether its
 * page actually carried a noindex tag (see the "indexability" block in
 * src/pages/boards/[board]/[qualification]/[subject].astro). Search
 * Console's own guidance is explicit that a sitemap should only list
 * indexable URLs -- listing a noindexed URL sends Google a contradictory
 * signal and is a direct, avoidable contributor to "Crawled - currently
 * not indexed".
 *
 * This reads the exact same resource data the page template reads (via
 * plain fs, since astro.config.mjs runs before the content layer exists)
 * and calls the exact same isIndexableAcademicPage() decision function --
 * not a re-implementation of the rule, the same function -- so the
 * sitemap and the rendered robots meta cannot drift apart. A build-time
 * test (scripts/test-sitemap-noindex.mjs) verifies this held after every
 * build by checking the built dist/ directly.
 */
function buildIndexabilityExclusions() {
  const resourceRecords = [];
  let files;
  try {
    files = readdirSync(new URL('src/content/resources/', import.meta.url)).filter((f) => f.endsWith('.md'));
  } catch {
    files = [];
  }
  for (const file of files) {
    const raw = readFileSync(new URL(`src/content/resources/${file}`, import.meta.url), 'utf-8');
    const parts = raw.split('---');
    const frontmatter = parts[1] ?? '';
    const resourceType = frontmatter.match(/^resourceType:\s*"?([\w-]+)"?/m)?.[1];
    const subject = frontmatter.match(/^subject:\s*"?([\w-]+)"?/m)?.[1];
    const levelLine = frontmatter.match(/^level:\s*\[(.*?)\]/m)?.[1] ?? '';
    const level = levelLine.split(',').map((s) => s.trim().replace(/['"]/g, '')).filter(Boolean);
    const boardsLine = frontmatter.match(/^boards:\s*\[(.*?)\]/m)?.[1] ?? '';
    const boards = boardsLine.split(',').map((s) => s.trim().replace(/['"]/g, '')).filter(Boolean);
    const wordCount = bodyWordCount(raw); // D-440: the same function the hub page uses
    if (!resourceType || !subject) continue;
    resourceRecords.push({ resourceType, subject, level, boards, wordCount, iso: lastmodBySlug.get(`/resources/${file.replace(/\.md$/, '')}/`) });
  }

  const excluded = new Set();
  for (const c of activeOnly()) {
    const hubSlug = subjectBySlug(c.subjectSlug)?.hubId ?? c.subjectSlug;
    const levelKey = LEVEL_FOR_QUALIFICATION[c.qualificationSlug];
    const matching = resourceRecords.filter(
      (r) =>
        r.subject === hubSlug &&
        r.level.includes(levelKey) &&
        (r.boards.length === 0 || r.boards.includes(c.boardSlug)),
    );
    const hasSyllabusTopics = (topicsFor(c.boardSlug, c.qualificationSlug, c.subjectSlug)?.topics ?? []).length > 0;
    const result = isIndexableAcademicPage({
      resources: matching.map((r) => ({ resourceType: r.resourceType, wordCount: r.wordCount })),
      hasSyllabusTopics,
    });
    if (!result.indexable) excluded.add(academicHubPath(c));
    // A course page changes when the resources listed on it change.
    const newest = matching.reduce((m, r) => (r.iso && (!m || r.iso > m) ? r.iso : m), undefined);
    if (newest) {
      const hub = academicHubPath(c);
      const parts = hub.split('/').filter(Boolean); // boards, board, qualification, subject
      for (const root of ['boards', 'checklists']) {
        for (let n = 1; n <= parts.length; n++) bump(indexLastmods, `/${[root, ...parts.slice(1, n)].join('/')}/`, newest);
      }
      bump(indexLastmods, `/subjects/${hubSlug}/`, newest);
    }
  }
  return excluded;
}

const noindexAcademicPaths = buildIndexabilityExclusions();

/**
 * QIGT programme -- sitemap exclusion for `archived` resources/articles.
 *
 * A `draft` resource/article is excluded from getStaticPaths entirely
 * (see src/utils/content/collections.ts), so it never becomes a route and
 * therefore can never appear in the sitemap -- no extra handling needed
 * here. An `archived` one is different: its page DOES still build (so
 * old links/bookmarks keep resolving instead of 404ing), but it must not
 * be indexable. The page templates
 * (resources/[slug].astro, articles/[slug].astro) derive `noindex` from
 * `reviewStatus === 'archived'`, and this function independently derives
 * the matching set of paths from the same frontmatter (plain fs, same
 * reason as buildIndexabilityExclusions() above) so the sitemap agrees --
 * verified by the same scripts/test-sitemap-noindex.mjs safeguard that
 * already checks this for academic hub pages.
 */
function buildArchivedContentExclusions() {
  const excluded = new Set();
  const collections = [
    { dir: 'src/content/resources', urlPrefix: '/resources/' },
    { dir: 'src/content/articles', urlPrefix: '/articles/' },
  ];
  for (const { dir, urlPrefix } of collections) {
    let files;
    try {
      files = readdirSync(new URL(dir + '/', import.meta.url)).filter((f) => f.endsWith('.md'));
    } catch {
      continue;
    }
    for (const file of files) {
      const raw = readFileSync(new URL(`${dir}/${file}`, import.meta.url), 'utf-8');
      const frontmatter = raw.split('---')[1] ?? '';
      const reviewStatus = frontmatter.match(/^reviewStatus:\s*"?([\w-]+)"?/m)?.[1];
      if (reviewStatus !== 'archived') continue;
      const slug = file.replace(/\.md$/, '');
      excluded.add(`${urlPrefix}${slug}/`);
    }
  }
  return excluded;
}

const archivedContentPaths = buildArchivedContentExclusions();

/**
 * D-286 -- workshops. Only a PUBLISHED workshop page belongs in the sitemap,
 * and the /workshops/ listing only once at least one is published (until
 * then it is noindexed and linked from nowhere). Read with plain fs, like
 * the exclusions above, because this runs before the content layer exists.
 */
function buildWorkshopSitemapRules() {
  const published = new Set();
  let files = [];
  try {
    files = readdirSync(new URL('src/content/workshops/', import.meta.url)).filter((f) => f.endsWith('.md'));
  } catch {
    files = [];
  }
  for (const file of files) {
    const frontmatter = readFileSync(new URL(`src/content/workshops/${file}`, import.meta.url), 'utf-8').split('---')[1] ?? '';
    if (/^publicationState:\s*"?published"?\s*$/m.test(frontmatter)) published.add(`/workshops/${file.replace(/\.md$/, '')}/`);
  }
  return published;
}
const publishedWorkshopPaths = buildWorkshopSitemapRules();


/**
 * D-516 -- one child sitemap per page type (sitemap-resources-0.xml,
 * sitemap-courses-0.xml, ...) under the same /sitemap-index.xml, so Search
 * Console reports submitted and indexed counts per type. sitemapGroup()
 * gives every URL exactly one group; the integration writes whatever no
 * named group claims to sitemap-pages-0.xml, which is the "pages" group.
 * The filter and the lastmod values below are unchanged: this decides which
 * file a URL is written to, not whether it is listed.
 * scripts/test-sitemap-groups.mjs checks the built files.
 */
const sitemapChunks = Object.fromEntries(
  SITEMAP_GROUPS.filter((group) => group !== 'pages').map((group) => [
    group,
    (item) => (sitemapGroup(new URL(item.url).pathname) === group ? item : undefined),
  ]),
);

/** hreflang for the pages that have ar/ur/bn counterparts (src/i18n/routes.ts), same rule as Meta.astro. */
const enPathToKey = new Map(Object.values(EN_PATH).map((p) => [p, p]));
function hreflangLinks(origin, path) {
  const enPath = path.replace(/^\/(?:ar|ur|bn)(?=\/)/, '');
  if (!enPathToKey.has(enPath) || enPath === '/search/') return undefined;
  return [
    { lang: 'en', url: origin + enPath },
    ...TRANSLATED_LOCALES.map((l) => ({ lang: l, url: origin + '/' + l + enPath })),
    { lang: 'x-default', url: origin + enPath },
  ];
}

export default defineConfig({
  site: 'https://marlbridge.com',
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory' },
  /**
   * Astro 7 changed the default from `true` (HTML-aware whitespace
   * compression, preserving a single space between inline elements per the
   * HTML spec) to `'jsx'` (strips inter-element whitespace the way React
   * does). This site's templates rely on the old behavior in many places
   * (e.g. "7 resources" + "IGCSE" rendered as adjacent inline elements) —
   * the new default silently ran words together sitewide. Pinned to `true`
   * to keep the pre-upgrade rendering, verified via a full before/after
   * text-content diff during the Astro 5->7 upgrade.
   */
  compressHTML: true,
  /**
   * Default Sätteri processor (same features as Astro's default `satteri()`),
   * plus one hast plugin that marks Arabic-script text blocks right-to-left
   * (Qur'an and Hadith passages, Urdu exam text). See
   * src/utils/markdown/hast-rtl-blocks.mjs. (D-257.) Two more wrap what would
   * otherwise run off a phone screen or run together: question parts
   * (hast-part-breaks.mjs, D-500) and tables (hast-table-scroll.mjs, D-518).
   */
  markdown: {
    // Resource pages use fenced blocks for formulas and worked calculations
    // as well as programming examples. A dark code theme made ordinary study
    // steps look like terminal output, so use a light reading surface.
    syntaxHighlight: { type: 'shiki' },
    shikiConfig: { theme: 'github-light' },
    processor: satteri({ hastPlugins: [rtlBlocksPlugin, partBreaksPlugin, tableScrollPlugin, alignedBlocksPlugin] }),
  },
  integrations: [
    typographicDashes(),
    sitemap({
      // news/image/video namespaces are not used by any entry; xhtml carries hreflang.
      namespaces: { news: false, image: false, video: false, xhtml: true },
      // Excluded: private/internal routes, plus every academic hub page
      // that isIndexableAcademicPage() has marked non-indexable (see
      // buildIndexabilityExclusions() above) -- keeping the sitemap and
      // the page's own robots meta in agreement.
      filter: (page) => {
        if (page.includes('/styleguide')) return false;
        const path = new URL(page).pathname;
        // QIGT programme -- /search/ is a hand-written utility page (not a
        // content-collection entry), noindexed directly in
        // src/pages/search/index.astro because Pagefind results render
        // entirely client-side and the page has no fixed unique content of
        // its own. Excluded here to keep it out of the sitemap too.
        if (path === '/search/') return false;
        // v1.x CLOSURE WS2 -- the translated /ar/, /ur/, /bn/ search shells
        // carry the same noindex tag and the same "no fixed unique content"
        // rationale as the English /search/ page (Pagefind renders results
        // entirely client-side) -- excluded from the sitemap for the same
        // reason, not just the English one.
        if (/^\/(ar|ur|bn)\/search\/$/.test(path)) return false;
        // Flagship Dominance/Trust Programme, Section 13 -- /admin/ is a
        // gated internal route (practice-question gap dashboard and any
        // future internal reporting page under this prefix), noindexed at
        // the page level and never linked from the site. Excluded here for
        // the same reason as /search/ above: keep the sitemap and the
        // page's own robots meta in agreement, and don't advertise an
        // internal-only URL in a file search engines actively crawl.
        if (path.startsWith('/admin/')) return false;
        // Nov 2026 SEO audit -- page 2 onward of an author's resource list renders
        // noindex (src/pages/authors/[slug]/resources/[...page].astro), so it is kept
        // out of the sitemap too. Page 1 (no number in the path) stays listed.
        if (/^\/authors\/[^/]+\/resources\/\d+\/$/.test(path)) return false;
        if (noindexAcademicPaths.has(path)) return false;
        if (archivedContentPaths.has(path)) return false;
        // D-286: confirmation/unsubscribe/error pages are noindexed utility pages.
        if (path.startsWith('/subscribe/')) return false;
        // Advanced-course (AP) library: noindexed preview until AP_LIBRARY_PUBLIC (src/data/ap/config.ts).
        if (path.startsWith(AP_LIBRARY_BASE)) return AP_LIBRARY_PUBLIC;
        if (path === '/workshops/') return publishedWorkshopPaths.size > 0;
        if (path.startsWith('/workshops/')) return publishedWorkshopPaths.has(path);
        return true;
      },
      serialize(item) {
        const path = new URL(item.url).pathname;
        const lastmod = lastmodBySlug.get(path) ?? indexLastmods.get(path) ?? practiceAndLocalizedLastmods.get(path);
        const links = hreflangLinks(new URL(item.url).origin, path);
        return { ...item, ...(lastmod ? { lastmod } : {}), ...(links ? { links } : {}) };
      },
      chunks: sitemapChunks,
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
