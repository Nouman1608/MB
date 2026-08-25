#!/usr/bin/env node
/**
 * Canonical / redirect health audit (Aug 2026 SEO remediation, Phase 6/11).
 *
 * Reads the BUILT site (run `npm run build` first) and public/_redirects,
 * and checks:
 *   [1] No sitemap URL is also a redirect source (a page can't be both
 *       indexable and redirecting away from itself).
 *   [2] No redirect chains: a redirect's target must not itself be the
 *       source of another redirect (should resolve in one hop). Also
 *       flags true A->B->A loops as a distinct, more severe case.
 *   [3] Every static (non-wildcard) redirect target resolves to a real
 *       built page (no redirect pointing at a 404).
 *   [4] No internal link in the built HTML points at a URL that is
 *       itself a redirect source (links should point straight at the
 *       final destination, not bounce through a 301).
 *   [5] No duplicate canonical URLs: two different built pages should
 *       never emit the same <link rel="canonical"> href (canonical is
 *       generated from each page's own path, so this also catches any
 *       accidental hard-coded/copy-pasted path prop).
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
  // dist/foo/bar/index.html -> /foo/bar/
  // dist/404.html -> /404.html (not a real route)
  let p = '/' + relative(DIST, file).replace(/\\/g, '/');
  if (p.endsWith('/index.html')) p = p.slice(0, -('index.html'.length));
  return p;
}

// --- Parse public/_redirects ---
const redirectsRaw = await readFile('public/_redirects', 'utf8');
const rules = []; // { source, target, code, isWildcard }
for (const line of redirectsRaw.split('\n')) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const parts = trimmed.split(/\s+/);
  if (parts.length < 3) continue;
  const [source, target, code] = parts;
  rules.push({ source, target, code, isWildcard: source.includes('*') || target.includes(':splat') });
}
const staticRules = rules.filter((r) => !r.isWildcard);
const sourceSet = new Set(staticRules.map((r) => r.source));

const problems = [];

// [0] _redirects maintainability: Cloudflare Pages caps a _redirects file
// at 2,000 static + 100 dynamic (2,100 combined) rules -- warn well before
// that ceiling so growth doesn't silently start dropping rules in
// production (see community-reported cases of this happening with no
// build-time error). Cloudflare docs: developers.cloudflare.com/pages/configuration/redirects/
const STATIC_CEILING = 2000;
const DYNAMIC_CEILING = 100;
const WARN_THRESHOLD = 0.85; // warn at 85% of ceiling
const dynamicRuleCount = rules.length - staticRules.length;
if (staticRules.length >= STATIC_CEILING) {
  problems.push(`[0] _redirects has ${staticRules.length} static rules, at or over Cloudflare's ${STATIC_CEILING}-rule ceiling -- rules will be silently dropped. Migrate overflow to Cloudflare Bulk Redirects.`);
} else if (staticRules.length >= STATIC_CEILING * WARN_THRESHOLD) {
  console.warn(`WARN: [0] _redirects has ${staticRules.length}/${STATIC_CEILING} static rules (${Math.round((staticRules.length / STATIC_CEILING) * 100)}%) -- approaching Cloudflare's ceiling. Plan a migration to Bulk Redirects before it's hit.`);
}
if (dynamicRuleCount >= DYNAMIC_CEILING) {
  problems.push(`[0] _redirects has ${dynamicRuleCount} dynamic/wildcard rules, at or over Cloudflare's ${DYNAMIC_CEILING}-rule ceiling.`);
}


// --- Load sitemap URLs ---
const sitemapXml = await readFile(join(DIST, 'sitemap-0.xml'), 'utf8');
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const sitemapPaths = new Set(sitemapUrls.map((u) => u.replace(SITE, '')));

// [1] No sitemap URL is also a redirect source
for (const p of sitemapPaths) {
  if (sourceSet.has(p)) {
    problems.push(`[1] Sitemap URL "${p}" is ALSO a redirect source in _redirects (page can't be indexable and redirecting)`);
  }
}

// [2] Redirect chains / loops (static rules only -- wildcard target chains are intentional catch-alls)
for (const rule of staticRules) {
  if (sourceSet.has(rule.target)) {
    const next = staticRules.find((r) => r.source === rule.target);
    if (next && next.target === rule.source) {
      problems.push(`[2] Redirect LOOP: "${rule.source}" -> "${rule.target}" -> "${next.target}" (back to start)`);
    } else {
      problems.push(`[2] Redirect CHAIN: "${rule.source}" -> "${rule.target}" -> "${next?.target}" (should be a single hop)`);
    }
  }
}

// [3] Static redirect targets resolve to a real built page
const builtHtmlFiles = await walk(DIST);
const builtPaths = new Set(builtHtmlFiles.map(htmlPathToUrlPath));
for (const rule of staticRules) {
  const targetPath = rule.target.split(/[?#]/)[0];
  if (!builtPaths.has(targetPath) && !builtPaths.has(targetPath.replace(/\/$/, '') + '/')) {
    problems.push(`[3] Redirect target does not resolve to a built page: "${rule.source}" -> "${rule.target}"`);
  }
}

// [4] Internal links pointing at redirect sources, [5] duplicate canonicals
const canonicalToPages = new Map(); // canonical href -> [pageUrlPath, ...]
const linkToRedirectFindings = new Map(); // sourcePath -> Set(pagesLinkingToIt)

for (const file of builtHtmlFiles) {
  const html = await readFile(file, 'utf8');
  const pageUrlPath = htmlPathToUrlPath(file);
  if (pageUrlPath === '/404.html') continue;

  const canonMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (canonMatch) {
    const href = canonMatch[1];
    if (!canonicalToPages.has(href)) canonicalToPages.set(href, []);
    canonicalToPages.get(href).push(pageUrlPath);
  }

  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (sourceSet.has(href)) {
      if (!linkToRedirectFindings.has(href)) linkToRedirectFindings.set(href, new Set());
      linkToRedirectFindings.get(href).add(pageUrlPath);
    }
  }
}

for (const [redirectSource, linkingPages] of linkToRedirectFindings) {
  const rule = staticRules.find((r) => r.source === redirectSource);
  for (const page of linkingPages) {
    problems.push(`[4] Internal link on "${page}" points to redirect source "${redirectSource}" (should link directly to "${rule?.target}")`);
  }
}

for (const [href, pages] of canonicalToPages) {
  const uniquePages = [...new Set(pages)];
  if (uniquePages.length > 1) {
    problems.push(`[5] Duplicate canonical "${href}" emitted by ${uniquePages.length} different pages: ${uniquePages.join(', ')}`);
  }
}

// --- Report ---
console.log('Canonical / redirect health audit');
console.log(`  Sitemap URLs: ${sitemapPaths.size}`);
console.log(`  Redirect rules: ${rules.length} (${staticRules.length} static, ${rules.length - staticRules.length} wildcard)`);
console.log(`  Built pages scanned: ${builtHtmlFiles.length}`);
console.log('');

if (problems.length === 0) {
  console.log('PASS: 0 problem(s) found.');
  process.exit(0);
} else {
  console.log(`FAIL: ${problems.length} problem(s) found:\n`);
  for (const p of problems) console.log(`  - ${p}`);
  process.exit(1);
}
