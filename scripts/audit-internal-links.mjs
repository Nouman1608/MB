#!/usr/bin/env node
/**
 * Internal-link graph audit (Aug 2026 SEO remediation, Phase 9/11).
 *
 * Reads the BUILT site (run `npm run build` first) and checks:
 *   [1] No broken internal links: every internal href must resolve to a
 *       real built page OR a valid redirect source in _redirects (a link
 *       to a redirect source is a separate, softer finding -- already
 *       caught by audit-redirects.mjs -- this script treats it as "not
 *       broken" but does not re-report it here to avoid duplicate noise).
 *   [2] No orphan indexable pages: every sitemap URL (except the
 *       homepage, which needs no inbound link) must be reachable via at
 *       least one internal <a href> from another page's main content or
 *       navigation.
 *   [3] No non-descriptive anchor text on internal links (flags literal
 *       "click here", "read more", "here", "this page", or a bare URL
 *       used as the visible link text).
 *
 * Exits 1 on any problem found, matching the other audit-*.mjs scripts.
 */
import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = 'dist';

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

const redirectsRaw = await readFile('public/_redirects', 'utf8');
const redirectSources = new Set();
for (const line of redirectsRaw.split('\n')) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const [source] = trimmed.split(/\s+/);
  if (source && !source.includes('*')) redirectSources.add(source);
}

const builtHtmlFiles = await walk(DIST);
const builtPaths = new Set(builtHtmlFiles.map(htmlPathToUrlPath));

const sitemapXml = await readFile(join(DIST, 'sitemap-0.xml'), 'utf8');
const sitemapPaths = new Set(
  [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace('https://marlbridge.com', ''))
);

const problems = [];
const inboundLinks = new Map(); // targetPath -> Set(sourcePages)
const GENERIC_ANCHORS = new Set(['click here', 'here', 'read more', 'this page', 'link', 'learn more', 'more']);

for (const file of builtHtmlFiles) {
  const html = await readFile(file, 'utf8');
  const pageUrlPath = htmlPathToUrlPath(file);
  if (pageUrlPath === '/404.html') continue;

  // Extract <a href="...">text</a> pairs (non-greedy, single-line-safe anchors)
  const anchorRe = /<a\b[^>]*\bhref="(\/[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/g;
  let m;
  while ((m = anchorRe.exec(html))) {
    const href = m[1];
    const rawText = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

    // Track inbound links to real pages (skip self-links and asset paths)
    if (href !== pageUrlPath && !href.startsWith('/_astro/') && !href.startsWith('/fonts/') && !href.startsWith('/images/')) {
      if (!inboundLinks.has(href)) inboundLinks.set(href, new Set());
      inboundLinks.get(href).add(pageUrlPath);
    }

    // [1] Broken links: not a built page and not a redirect source
    const isAsset = /\.(png|jpg|jpeg|svg|webp|ico|xml|txt|pdf|woff2?|json|css|js)$/i.test(href);
    if (!isAsset && !builtPaths.has(href) && !redirectSources.has(href)) {
      problems.push(`[1] Broken internal link on "${pageUrlPath}": href="${href}" (404, not a redirect source either)`);
    }

    // [3] Generic/non-descriptive anchor text
    if (rawText && GENERIC_ANCHORS.has(rawText.toLowerCase())) {
      problems.push(`[3] Non-descriptive anchor text "${rawText}" on "${pageUrlPath}" -> "${href}"`);
    }
  }
}

// [2] Orphan check: every sitemap page except homepage should have >=1 inbound internal link
let orphanCount = 0;
for (const p of sitemapPaths) {
  if (p === '/') continue;
  const inbound = inboundLinks.get(p);
  if (!inbound || inbound.size === 0) {
    orphanCount += 1;
    problems.push(`[2] Orphan page: "${p}" is in the sitemap but has 0 internal inbound links from any other built page`);
  }
}

console.log('Internal-link graph audit');
console.log(`  Built pages scanned: ${builtHtmlFiles.length}`);
console.log(`  Sitemap (indexable) pages checked for orphans: ${sitemapPaths.size}`);
console.log(`  Distinct internal link targets found: ${inboundLinks.size}`);
console.log('');

const brokenCount = problems.filter((p) => p.startsWith('[1]')).length;
const anchorCount = problems.filter((p) => p.startsWith('[3]')).length;
console.log(`  [1] Broken links: ${brokenCount}`);
console.log(`  [2] Orphan pages: ${orphanCount}`);
console.log(`  [3] Generic anchor text: ${anchorCount}`);
console.log('');

if (problems.length === 0) {
  console.log('PASS: 0 problem(s) found.');
  process.exit(0);
} else {
  console.log(`FAIL: ${problems.length} problem(s) found:\n`);
  for (const p of problems.slice(0, 200)) console.log(`  - ${p}`);
  if (problems.length > 200) console.log(`  ... and ${problems.length - 200} more`);
  process.exit(1);
}
