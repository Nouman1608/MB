import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';
import { activeOnly, academicHubPath, LEVEL_FOR_QUALIFICATION } from './src/utils/academic/index.ts';
import { subjectBySlug } from './src/data/academic/subjects.ts';
import { topicsFor } from './src/data/academic/syllabus-topics.ts';
import { isIndexableAcademicPage } from './src/utils/seo/indexability.ts';

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
  return map;
}

const lastmodBySlug = buildLastmodMap();

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
    const body = parts.slice(2).join('---');
    const resourceType = frontmatter.match(/^resourceType:\s*"?([\w-]+)"?/m)?.[1];
    const subject = frontmatter.match(/^subject:\s*"?([\w-]+)"?/m)?.[1];
    const levelLine = frontmatter.match(/^level:\s*\[(.*?)\]/m)?.[1] ?? '';
    const level = levelLine.split(',').map((s) => s.trim().replace(/['"]/g, '')).filter(Boolean);
    const boardsLine = frontmatter.match(/^boards:\s*\[(.*?)\]/m)?.[1] ?? '';
    const boards = boardsLine.split(',').map((s) => s.trim().replace(/['"]/g, '')).filter(Boolean);
    const wordCount = body.trim().split(/\s+/).filter(Boolean).length;
    if (!resourceType || !subject) continue;
    resourceRecords.push({ resourceType, subject, level, boards, wordCount });
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
  integrations: [
    sitemap({
      // Excluded: private/internal routes, plus every academic hub page
      // that isIndexableAcademicPage() has marked non-indexable (see
      // buildIndexabilityExclusions() above) -- keeping the sitemap and
      // the page's own robots meta in agreement.
      filter: (page) => {
        if (page.includes('/styleguide')) return false;
        const path = new URL(page).pathname;
        if (noindexAcademicPaths.has(path)) return false;
        if (archivedContentPaths.has(path)) return false;
        return true;
      },
      serialize(item) {
        const path = new URL(item.url).pathname;
        const lastmod = lastmodBySlug.get(path);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
