#!/usr/bin/env node
/**
 * Phase 2 safeguard (Aug 2026 SEO remediation) — the sitemap must never
 * list a URL whose own page renders `<meta name="robots" content="noindex...">`.
 *
 * This does not re-implement isIndexableAcademicPage() or re-derive which
 * pages "should" be excluded — it reads the real, already-built dist/
 * output and cross-checks two things that were generated independently
 * (astro.config.mjs's sitemap filter vs. each page's own <PageLayout
 * noindex={...}> render) and asserts they agree. That is a stronger check
 * than testing the decision function in isolation, because it catches
 * drift regardless of *why* the two disagreed — a bug in the sitemap
 * exclusion logic, a bug in the page's own noindex prop, a build script
 * reading stale data, or a future change to either that forgets the other
 * exists.
 *
 * Not part of `npm run validate:academic` (requires a build first) — run
 * explicitly as `node scripts/test-sitemap-noindex.mjs` after `npm run
 * build`, and as part of the pre-release QA gate alongside
 * test-cross-board-regression.mjs and test-negative-validation-suite.mjs.
 */
import { readFile, readdir } from 'node:fs/promises';

let problems = 0;
const fail = (msg) => { console.error(`  ✗ ${msg}`); problems++; };
const ok = (msg) => console.log(`  ✓ ${msg}`);

async function sitemapFiles() {
  const entries = await readdir('dist');
  return entries.filter((f) => /^sitemap-\d+\.xml$/.test(f));
}

async function sitemapUrls() {
  const files = await sitemapFiles();
  if (files.length === 0) {
    fail('No dist/sitemap-*.xml found — did the build run and did @astrojs/sitemap generate anything?');
    return [];
  }
  const urls = [];
  for (const file of files) {
    const xml = await readFile(`dist/${file}`, 'utf8');
    const matches = xml.match(/<loc>(.*?)<\/loc>/g) ?? [];
    for (const m of matches) urls.push(m.replace(/<\/?loc>/g, ''));
  }
  return urls;
}

function urlToDistPath(url) {
  const path = new URL(url).pathname;
  // build.format: 'directory' -> every route is a folder with index.html,
  // except the handful of top-level files (e.g. /robots.txt) which are not
  // expected to appear in the sitemap in the first place.
  const trimmed = path.endsWith('/') ? path : `${path}/`;
  return `dist${trimmed}index.html`;
}

async function main() {
  console.log('Sitemap / noindex agreement check\n');

  const urls = await sitemapUrls();
  if (urls.length === 0) {
    console.error('\nNo sitemap URLs to check — treating as a failure (an empty sitemap is itself a regression).');
    process.exit(1);
  }
  ok(`${urls.length} URL(s) found across dist/sitemap-*.xml`);

  let checked = 0;
  let missing = 0;
  for (const url of urls) {
    const distPath = urlToDistPath(url);
    let html;
    try {
      html = await readFile(distPath, 'utf8');
    } catch {
      missing++;
      fail(`${url} is in the sitemap but ${distPath} does not exist in the build`);
      continue;
    }
    checked++;
    if (/name="robots"\s+content="noindex/i.test(html)) {
      fail(`${url} is in the sitemap but its own page renders a noindex robots meta tag (${distPath})`);
    }
  }
  if (missing === 0) ok(`All ${checked} sitemap URL(s) resolved to a built page`);
  if (problems === 0) ok(`All ${checked} sitemap URL(s) are indexable (no noindex found)`);

  console.log(`\n${problems === 0 ? 'PASS' : 'FAIL'}: ${problems} problem(s) found across ${checked} sitemap URL(s).`);
  process.exit(problems === 0 ? 0 : 1);
}

main();
