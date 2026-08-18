#!/usr/bin/env node
/**
 * SITE ARCHITECTURE AUDIT — reporting only. Never fails the build and is not
 * part of `npm run validate:academic`.
 *
 * Introduced in Phase 17 (Cross-Subject Academic Architecture Audit) as the
 * durable version of the one-off audit that phase ran. Run this against a
 * fresh `dist/` build (after `npm run build`) whenever adding subjects,
 * resources, or navigation, to catch:
 *
 *   - Redirect rules that are ambiguous, chained, looping, or dangling
 *   - Canonical tags that don't point to their own page
 *   - Pages missing from the sitemap, or sitemap entries with no real page
 *   - Invalid JSON-LD (including @graph-shaped blocks)
 *   - Pages with zero inbound internal links ("orphans" — reachable only by
 *     direct URL or search-engine crawl, never by clicking through the site)
 *   - Broken internal links
 *
 * The generated /404 page is expected to be unlinked and absent from the
 * sitemap — that's correct, not a bug — so it's excluded from those checks.
 *
 * Usage (from repo root, after `npm run build`):
 *   node scripts/site-architecture-audit.mjs
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist');
if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

let problems = [];
let notes = [];
const fail = (s, m) => problems.push(`[${s}] ${m}`);
const note = (s, m) => notes.push(`[${s}] ${m}`);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (entry.endsWith('.html')) out.push(p);
  }
  return out;
}

const files = walk(DIST);
const urlOf = (f) => '/' + f.replace(DIST + '/', '').replace(/index\.html$/, '');
const allPageUrls = new Set(files.map(urlOf));
// The build's own 404 page: expected to be unlinked and unindexed. Not a bug.
const isNotFoundPage = (url) => url === '/404.html' || url === '/404/';

console.log('='.repeat(78));
console.log('SITE ARCHITECTURE AUDIT');
console.log('='.repeat(78));
console.log(`Scanning ${files.length} built pages.`);

// ---------------------------------------------------------------------------
// A. Redirects file: ambiguous, chains, loops, dangling targets
// ---------------------------------------------------------------------------
console.log('\n[A] Redirects audit (public/_redirects)');
const redirectsRaw = readFileSync(join(ROOT, 'public/_redirects'), 'utf-8');
const redirectLines = redirectsRaw.split('\n').filter((l) => l.trim() && !l.trim().startsWith('#'));
const redirects = redirectLines
  .map((line) => {
    const parts = line.trim().split(/\s+/);
    return parts.length < 2 ? null : { from: parts[0], to: parts[1], code: parts[2] ?? '301' };
  })
  .filter(Boolean);
console.log(`  ${redirects.length} redirect rules.`);

const fromMap = new Map();
for (const r of redirects) {
  if (fromMap.has(r.from) && fromMap.get(r.from) !== r.to) {
    fail('A-ambiguous-redirect', `"${r.from}" redirects to both "${fromMap.get(r.from)}" and "${r.to}"`);
  }
  fromMap.set(r.from, r.to);
}

const exactSeen = new Map();
for (const r of redirects) {
  const key = `${r.from}::${r.to}`;
  exactSeen.set(key, (exactSeen.get(key) ?? 0) + 1);
}
let exactDupes = 0;
for (const [key, count] of exactSeen) if (count > 1) { exactDupes++; note('A-exact-duplicate-rule', `${key} listed ${count} times`); }

let chains = 0;
for (const r of redirects) {
  if (r.from.includes('*') || r.to.includes(':splat')) continue;
  const toBase = r.to.split('#')[0];
  if (fromMap.has(toBase) && fromMap.get(toBase) !== toBase) {
    chains++;
    fail('A-redirect-chain', `"${r.from}" -> "${r.to}" -> "${fromMap.get(toBase)}" (should point directly to the final destination)`);
  }
}

for (const r of redirects) {
  if (r.from === r.to) fail('A-redirect-loop', `"${r.from}" redirects to itself`);
}

// Dangling: strip any #fragment before checking the target page exists — a
// redirect to /page/#section is valid as long as /page/ is a real page.
let dangling = 0;
for (const r of redirects) {
  if (r.from.includes('*') || r.to.includes(':splat')) continue;
  const toBase = r.to.split('#')[0];
  if (!allPageUrls.has(toBase)) {
    dangling++;
    fail('A-dangling-redirect', `"${r.from}" -> "${r.to}" but "${toBase}" is not a built page`);
  }
}
console.log(`  Ambiguous: ${problems.filter((p) => p.includes('A-ambiguous')).length}, Chains: ${chains}, Loops: ${problems.filter((p) => p.includes('A-redirect-loop')).length}, Dangling: ${dangling}, Exact duplicate rules: ${exactDupes}`);

// ---------------------------------------------------------------------------
// B. Canonicals: self-referential
// ---------------------------------------------------------------------------
console.log('\n[B] Canonical URL audit');
let canonicalMismatches = 0;
for (const f of files) {
  const url = urlOf(f);
  if (isNotFoundPage(url)) continue;
  const html = readFileSync(f, 'utf-8');
  const canonMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
  if (!canonMatch) { fail('B-missing-canonical', `${url}: no canonical tag`); continue; }
  const canonPath = canonMatch[1].replace(/^https?:\/\/[^/]+/, '');
  if (canonPath !== url) {
    canonicalMismatches++;
    fail('B-canonical-mismatch', `${url}: canonical points to "${canonPath}" instead of itself`);
  }
}
console.log(`  ${canonicalMismatches} canonical mismatches (excluding /404).`);

// ---------------------------------------------------------------------------
// C. Sitemap completeness
// ---------------------------------------------------------------------------
console.log('\n[C] Sitemap completeness');
const sitemapFiles = readdirSync(DIST).filter((f) => /^sitemap.*\.xml$/.test(f));
let sitemapUrls = new Set();
for (const sf of sitemapFiles) {
  const xml = readFileSync(join(DIST, sf), 'utf-8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const loc of locs) {
    if (loc.endsWith('.xml')) continue;
    sitemapUrls.add(loc.replace(/^https?:\/\/[^/]+/, ''));
  }
}
console.log(`  Sitemap files: ${sitemapFiles.join(', ')}. ${sitemapUrls.size} URLs listed.`);

let missingFromSitemap = 0;
for (const url of allPageUrls) {
  if (isNotFoundPage(url) || url.includes('/_astro/')) continue;
  if (!sitemapUrls.has(url)) { missingFromSitemap++; fail('C-missing-from-sitemap', `${url}: built page not listed in sitemap`); }
}
let phantomInSitemap = 0;
for (const url of sitemapUrls) {
  if (!allPageUrls.has(url)) { phantomInSitemap++; fail('C-phantom-in-sitemap', `${url}: listed in sitemap but no built page exists`); }
}
console.log(`  Missing from sitemap: ${missingFromSitemap}. Phantom sitemap entries: ${phantomInSitemap}.`);

// ---------------------------------------------------------------------------
// D. JSON-LD validity — handles both single-object and @graph-shaped blocks
// ---------------------------------------------------------------------------
console.log('\n[D] JSON-LD validity');
let jsonLdBlocks = 0, jsonLdParseErrors = 0;
const jsonLdTypeCounts = new Map();
for (const f of files) {
  const url = urlOf(f);
  const html = readFileSync(f, 'utf-8');
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const b of blocks) {
    jsonLdBlocks++;
    let parsed;
    try {
      parsed = JSON.parse(b[1]);
    } catch (e) {
      jsonLdParseErrors++;
      fail('D-jsonld-parse-error', `${url}: JSON-LD block failed to parse: ${e.message}`);
      continue;
    }
    if (!parsed['@context']) fail('D-jsonld-no-context', `${url}: JSON-LD block missing @context`);
    const nodes = Array.isArray(parsed['@graph']) ? parsed['@graph'] : [parsed];
    for (const node of nodes) {
      const type = node['@type'] ?? '(no @type)';
      jsonLdTypeCounts.set(type, (jsonLdTypeCounts.get(type) ?? 0) + 1);
      if (type === '(no @type)') fail('D-jsonld-node-no-type', `${url}: a JSON-LD node has no @type`);
    }
  }
}
console.log(`  ${jsonLdBlocks} JSON-LD blocks across ${files.length} pages. ${jsonLdParseErrors} parse errors.`);
console.log(`  Node types seen: ${[...jsonLdTypeCounts.entries()].map(([t, c]) => `${t}=${c}`).join(', ')}`);

// ---------------------------------------------------------------------------
// E. Breadcrumbs (heuristic, informational only)
// ---------------------------------------------------------------------------
console.log('\n[E] Breadcrumb consistency (informational)');
let missingVisibleBreadcrumb = 0, missingBreadcrumbSchema = 0;
for (const f of files) {
  const url = urlOf(f);
  if (url === '/' || isNotFoundPage(url)) continue;
  const html = readFileSync(f, 'utf-8');
  const hasVisibleCrumb = /aria-label="[Bb]readcrumb"|class="[^"]*breadcrumb/i.test(html);
  const hasCrumbSchema = /"@type"\s*:\s*"BreadcrumbList"/.test(html);
  if (!hasVisibleCrumb) { missingVisibleBreadcrumb++; note('E-no-visible-breadcrumb', `${url}: no visible breadcrumb markup detected`); }
  if (!hasCrumbSchema) { missingBreadcrumbSchema++; note('E-no-breadcrumb-schema', `${url}: no BreadcrumbList JSON-LD detected`); }
}
console.log(`  Pages missing visible breadcrumb: ${missingVisibleBreadcrumb}. Missing BreadcrumbList schema: ${missingBreadcrumbSchema}.`);

// ---------------------------------------------------------------------------
// F. Full internal link graph + orphan detection
// ---------------------------------------------------------------------------
console.log('\n[F] Internal link graph + orphan detection');
const inLinks = new Map();
for (const url of allPageUrls) inLinks.set(url, new Set());

let totalBrokenLinks = 0;
const brokenTargets = new Set();
const assetExt = /\.(woff2?|ttf|otf|png|jpe?g|svg|ico|xml|txt|webmanifest|json|css|js)$/;
for (const f of files) {
  const url = urlOf(f);
  const html = readFileSync(f, 'utf-8');
  const hrefs = [...html.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1].split('?')[0]);
  for (const href of hrefs) {
    if (assetExt.test(href)) continue;
    const normalized = href.endsWith('/') ? href : href + '/';
    const target = allPageUrls.has(normalized) ? normalized : (allPageUrls.has(href) ? href : null);
    if (!target) { totalBrokenLinks++; brokenTargets.add(href); continue; }
    inLinks.get(target).add(url);
  }
}
console.log(`  Broken internal link instances: ${totalBrokenLinks}. Unique broken targets: ${brokenTargets.size}.`);
for (const t of brokenTargets) fail('F-broken-link', `unresolved internal link target: ${t}`);

let orphans = [];
for (const [url, referrers] of inLinks) {
  if (url === '/' || isNotFoundPage(url)) continue;
  const externalReferrers = [...referrers].filter((r) => r !== url);
  if (externalReferrers.length === 0) orphans.push(url);
}
console.log(`  Orphan pages (zero inbound internal links, excluding home and /404): ${orphans.length}`);
for (const o of orphans) fail('F-orphan-page', `${o}: no other page links to it`);

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
console.log('\n' + '='.repeat(78));
console.log(`SUMMARY: ${problems.length} problem(s), ${notes.length} informational note(s)`);
console.log('='.repeat(78));
if (problems.length) {
  console.log('\nPROBLEMS:');
  for (const p of problems) console.log(`  - ${p}`);
} else {
  console.log('\nNo technical architecture problems found.');
}
if (notes.length) {
  console.log(`\n${notes.length} informational note(s) (not failures):`);
  for (const n of notes) console.log(`  . ${n}`);
}
console.log('\nReporting tool only — does not fail the build, not run by npm run validate:academic.');
process.exit(0);
