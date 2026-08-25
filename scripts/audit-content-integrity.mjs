#!/usr/bin/env node
/**
 * Content-integrity safeguard (Aug 2026 SEO remediation, Phase 11,
 * items 4/5/6 of the 14-test list in Section 15 of the brief).
 *
 * Reads the BUILT site (run `npm run build` first) and checks:
 *   [4] No indexable academic hub page claims zero original resources.
 *       isIndexableAcademicPage() already gates this at sitemap-generation
 *       time (astro.config.mjs excludes any page that fails the
 *       substantial-original-guidance rule from the sitemap) -- this is
 *       an INDEPENDENT re-check from the built output's own rendered
 *       meta description, which uses the literal fallback phrase "no
 *       original Marlbridge resource yet" only when resources.length===0
 *       (see the description generator in
 *       src/pages/boards/[board]/[qualification]/[subject].astro). If
 *       any page rendering that phrase is ALSO present in the sitemap,
 *       the two independently-derived signals disagree and something is
 *       wrong (same "catch drift regardless of cause" design as
 *       test-sitemap-noindex.mjs).
 *   [5] No page's meta description implies resources exist ("N original
 *       resources...") when the page's own body actually lists zero
 *       resource cards -- cross-checks the claimed count in the
 *       description against the real count of resource-card links
 *       rendered in the page body.
 *   [6] No indexable page's self-canonical URL is itself a redirect
 *       source in _redirects (canonical is generated from each page's
 *       own path, so this should be structurally impossible, but is
 *       checked explicitly and independently of audit-redirects.mjs's
 *       sitemap-vs-redirect-source check, which uses a different code
 *       path).
 *
 * Exits 1 on any problem found, matching the other audit-*.mjs scripts.
 */
import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = 'dist';
const SITE = 'https://marlbridge.com';

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

function htmlPathToUrlPath(file) {
  let p = '/' + relative(DIST, file).replace(/\\/g, '/');
  if (p.endsWith('/index.html')) p = p.slice(0, -('index.html'.length));
  return p;
}

const sitemapXml = await readFile(join(DIST, 'sitemap-0.xml'), 'utf8');
const sitemapPaths = new Set(
  [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, ''))
);

const redirectsRaw = await readFile('public/_redirects', 'utf8');
const redirectSources = new Set();
for (const line of redirectsRaw.split('\n')) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const [source] = trimmed.split(/\s+/);
  if (source && !source.includes('*')) redirectSources.add(source);
}

const builtHtmlFiles = (await walk(DIST)).filter((f) => f.includes(join(DIST, 'boards') + '/') || f.includes('boards/'));
const problems = [];
let hubPagesChecked = 0;

for (const file of builtHtmlFiles) {
  const html = await readFile(file, 'utf8');
  const pageUrlPath = htmlPathToUrlPath(file);
  // Only academic hub pages live under /boards/.../.../.../
  const segments = pageUrlPath.split('/').filter(Boolean);
  if (segments[0] !== 'boards' || segments.length !== 4) continue;
  hubPagesChecked += 1;
  const isIndexable = sitemapPaths.has(pageUrlPath);

  // [4] Zero-resource fallback phrase + indexable = contradiction
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  const description = descMatch ? descMatch[1] : '';
  const claimsNoResources = description.includes('no original Marlbridge resource yet');
  if (claimsNoResources && isIndexable) {
    problems.push(`[4] "${pageUrlPath}" is indexable (in sitemap) but its own meta description says "no original Marlbridge resource yet" -- contradicts the substantial-original-guidance rule.`);
  }

  // [5] Claimed resource count in description vs. real resource-card count in body
  const claimMatch = description.match(/(\d+) original resources?/);
  if (claimMatch) {
    const claimedCount = parseInt(claimMatch[1], 10);
    // Resource cards render as links to /resources/<slug>/ within the page body
    const resourceLinkMatches = [...html.matchAll(/href="\/resources\/([a-z0-9-]+)\/"/g)];
    const uniqueResourceLinks = new Set(resourceLinkMatches.map((m) => m[1]));
    if (uniqueResourceLinks.size === 0 && claimedCount > 0) {
      problems.push(`[5] "${pageUrlPath}" description claims ${claimedCount} original resource(s) but the page body links to 0 distinct /resources/ pages.`);
    }
  }

  // [6] Self-canonical must not be a redirect source
  const canonMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (canonMatch) {
    const canonicalPath = canonMatch[1].replace(SITE, '');
    if (redirectSources.has(canonicalPath)) {
      problems.push(`[6] "${pageUrlPath}" self-canonical ("${canonicalPath}") is itself a redirect source in _redirects.`);
    }
  }
}

console.log('Content-integrity safeguard (indexability / metadata-honesty / self-canonical)');
console.log(`  Academic hub pages checked: ${hubPagesChecked}`);
console.log('');

if (problems.length === 0) {
  console.log('PASS: 0 problem(s) found.');
  process.exit(0);
} else {
  console.log(`FAIL: ${problems.length} problem(s) found:\n`);
  for (const p of problems) console.log(`  - ${p}`);
  process.exit(1);
}
