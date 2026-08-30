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
 *   [7] Post-v2.0 Quality Closure WS3 -- no built page anywhere on the site
 *       renders internal engineering commentary: decision-log references,
 *       workstream/task IDs, script or source-file paths, or phrasing like
 *       "pass the ... validator". This is the safeguard for the exact
 *       failure mode found live on /boards/edexcel/a-level/law/: a data
 *       record's public-facing `notes` field explained, in prose, that a
 *       wrong spec code was being kept "to ... pass the assessment
 *       validator's code-consistency check", and named
 *       `docs/decision-log.md D-056` directly. That specific leak is fixed
 *       (see WS2/WS3 in the decision log), and the `notes`/`internalNotes`
 *       field split in `assessments.ts` is the primary fix -- this check is
 *       the independent, whole-site backstop in case the same mistake
 *       happens again anywhere else. The pattern list is deliberately
 *       narrow (exact internal-path shapes and phrasing, not everyday
 *       words like "check" or "validate" alone) specifically so it does not
 *       become an overbroad keyword filter that flags legitimate content --
 *       see INTERNAL_NOTE_PATTERNS below and its accompanying rationale.
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

// Filter on the normalized URL path (forward-slash, OS-independent) rather
// than the raw filesystem path -- path.join() uses the OS-native separator
// (backslash on Windows), so a hardcoded 'boards/' substring check against
// the raw path silently matched zero files on Windows, making this whole
// audit a no-op there (hubPagesChecked stayed 0 and it always "passed").
const builtHtmlFiles = await walk(DIST);
const problems = [];
let hubPagesChecked = 0;

for (const file of builtHtmlFiles) {
  const pageUrlPath = htmlPathToUrlPath(file);
  // Only academic hub pages live under /boards/.../.../.../
  const segments = pageUrlPath.split('/').filter(Boolean);
  if (segments[0] !== 'boards' || segments.length !== 4) continue;
  const html = await readFile(file, 'utf8');
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

// [7] Internal engineering notes must never render on any public page.
// Each pattern targets a specific SHAPE that only shows up in engineering
// commentary, never in learner-facing prose about law, chemistry, exam
// technique, etc. -- deliberately not single common words like "check",
// "validate" or "notes", which appear constantly in legitimate content
// (e.g. "check your working", "revision notes") and would make this an
// overbroad filter rather than a targeted one.
const INTERNAL_NOTE_PATTERNS = [
  { re: /docs\/decision-log\.md/i, label: 'decision-log.md file path' },
  { re: /\bD-0\d{2,3}\b/, label: 'decision-log entry ID (D-0NN)' },
  { re: /\bWS\d{1,2}\b/, label: 'workstream ID (WSN)' },
  { re: /src\/data\/academic\//, label: 'source file path' },
  { re: /\bscripts\/[a-z-]+\.mjs\b/, label: 'validator/script file path' },
  { re: /pass(es|ing)? the [a-z-]+ validator/i, label: 'phrasing describing a value chosen to satisfy a validator' },
  { re: /code-consistency check/i, label: 'internal validator-check name' },
  // Bare internal-dataset filenames referenced without their directory
  // prefix (src/data/academic/ already catches the prefixed form above).
  // Added after Post-v2.0 WS3 cleanup found several `notes` fields citing
  // "syllabuses.ts", "assessments.ts" or "matrix.ts" by bare name as the
  // source of a cross-reference -- the same class of leak as a full path,
  // just missing the directory, so it slipped past the original pattern.
  { re: /\b(?:syllabuses|syllabus-topics|assessments|matrix)\.ts\b/, label: 'internal dataset filename' },
  { re: /\bNO_ASSESSMENT_RECORD\b/, label: 'internal sentinel/enum value' },
];
const excludedFromNoteScan = new Set(['/search/']); // Pagefind's own index page can legitimately mention file-path-shaped strings in indexed snippets
for (const file of builtHtmlFiles) {
  const pageUrlPath = htmlPathToUrlPath(file);
  if (excludedFromNoteScan.has(pageUrlPath)) continue;
  const html = await readFile(file, 'utf8');
  // Strip <script>/<style> blocks and HTML comments first -- JSON-LD, build
  // tooling, and source comments (e.g. the font-loading strategy note in
  // every page's <head>, "<!-- v1.x CLOSURE WS6 -- self-hosted ... -->")
  // can legitimately reference source-ish-looking strings that are never
  // visible to a reader or a search snippet. Caught by actually running
  // this check against a real build during Post-v2.0 Quality Closure WS3 --
  // an early version without the comment-strip flagged that font comment
  // on nearly every page, which is exactly the overbroad-filter failure
  // mode this check must avoid. Only genuinely rendered, reader-visible
  // text should ever trip this check.
  const visibleHtml = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  for (const { re, label } of INTERNAL_NOTE_PATTERNS) {
    const match = visibleHtml.match(re);
    if (match) {
      problems.push(`[7] "${pageUrlPath}" renders what looks like an internal note (${label}): "${match[0]}"`);
    }
  }
}

console.log('Content-integrity safeguard (indexability / metadata-honesty / self-canonical / internal-note leakage)');
console.log(`  Academic hub pages checked: ${hubPagesChecked}`);
console.log(`  Total pages scanned for internal-note leakage: ${builtHtmlFiles.length}`);
console.log('');

if (problems.length === 0) {
  console.log('PASS: 0 problem(s) found.');
  process.exit(0);
} else {
  console.log(`FAIL: ${problems.length} problem(s) found:\n`);
  for (const p of problems) console.log(`  - ${p}`);
  process.exit(1);
}
