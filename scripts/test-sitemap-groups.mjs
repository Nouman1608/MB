#!/usr/bin/env node
/**
 * D-516 -- the split sitemap, checked on the built site.
 *
 * The sitemap is one index (dist/sitemap-index.xml) and one child file per
 * page type (src/utils/seo/sitemap-groups.ts). This reads the built files
 * and checks that splitting them lost nothing and broke nothing:
 *
 *   [1] the index is well formed and every file it lists exists;
 *       no child sitemap exists that the index leaves out
 *   [2] every URL is in the file its group says, and in one file only
 *   [3] every child is within the protocol limits (50,000 URLs, 50 MB)
 *   [4] every URL is on the site's own origin, has no query string or
 *       fragment, and has a built page whose canonical is that same URL
 *   [5] every built page that is indexable (no noindex, canonical to
 *       itself) is in the sitemap -- nothing eligible was dropped
 *   [6] lastmod values are real dates, none in the future, and are not
 *       one build date stamped on everything
 *   [7] robots.txt names the index, and the old single-file address
 *       redirects to it
 *   [8] every child sitemap has a <lastmod> in the index, and every practice
 *       URL has one (audit round 3, item 49)
 *
 * [0] runs first and needs no build: the real-date sources for the practice
 * and translated pages (src/utils/seo/sitemap-lastmod.ts) give a date for
 * every practice page that is built and for every translated legal page, and
 * the localized-date parser reads what the pages display.
 *
 * Needs a fresh dist/ (run `npm run build` first). Part of `npm run audit:all`.
 * test-sitemap-noindex.mjs separately checks that no listed page is noindexed.
 *
 * Run: node --experimental-strip-types scripts/test-sitemap-groups.mjs
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { readSitemapFiles, SITE } from './lib/sitemap.mjs';
import { sitemapGroup, SITEMAP_GROUPS, SITEMAP_GROUP_DESCRIPTIONS } from '../src/utils/seo/sitemap-groups.ts';
import { practiceLastmods, localizedLastmods, parseLocalizedDate } from '../src/utils/seo/sitemap-lastmod.ts';
import { flagshipSpecs } from '../src/utils/academic/index.ts';
import { practiceQuestionsForCode } from '../src/utils/practice/bank.ts';
import { DIAGNOSTIC_SETS, diagnosticPath } from '../src/data/diagnostics.ts';
import { LEGAL_COPY } from '../src/i18n/pages/legal.ts';
import { TRANSLATED_LOCALES } from '../src/i18n/routes.ts';

const DIST = 'dist';
const MAX_URLS = 50_000;
const MAX_BYTES = 50 * 1024 * 1024;

let problems = 0;
const shown = new Map();
const fail = (kind, msg) => {
  problems++;
  const n = (shown.get(kind) ?? 0) + 1;
  shown.set(kind, n);
  if (n <= 10) console.error(`  ✗ ${msg}`);
  if (n === 11) console.error(`  ✗ ... more "${kind}" problems not shown`);
};
const ok = (msg) => console.log(`  ✓ ${msg}`);

console.log('Split sitemap check\n');

// [0] lastmod sources for the practice and localized groups (no build needed)
{
  const resourceDates = new Map();
  for (const f of readdirSync('src/content/resources').filter((x) => x.endsWith('.md'))) {
    const fm = readFileSync(join('src/content/resources', f), 'utf8').split('---')[1] ?? '';
    const d = fm.match(/^updatedDate:\s*(\S+)/m)?.[1] ?? fm.match(/^publishedDate:\s*(\S+)/m)?.[1];
    if (d) resourceDates.set(`/resources/${f.replace(/\.md$/, '')}/`, new Date(d).toISOString());
  }
  const practice = practiceLastmods((p) => resourceDates.get(p));
  const builtPractice = [
    '/practice/',
    ...flagshipSpecs().filter((s) => practiceQuestionsForCode(s.code).length > 0).map((s) => `/practice/${s.code}/`),
    ...DIAGNOSTIC_SETS.map(diagnosticPath),
  ];
  for (const p of builtPractice) if (!practice.get(p)) fail('source', `${p} gets no lastmod from its question-bank sources`);
  for (const [p, iso] of practice) if (Date.parse(iso) > Date.now() + 86_400_000) fail('source', `${p} lastmod ${iso} is in the future`);

  const english = new Map([['/articles/', '2026-01-02T00:00:00.000Z'], ['/resources/', '2026-01-03T00:00:00.000Z'], ['/', '2026-01-04T00:00:00.000Z']]);
  const localized = localizedLastmods((p) => english.get(p));
  for (const l of TRANSLATED_LOCALES) {
    if (localized.get(`/${l}/articles/`) !== english.get('/articles/')) fail('source', `/${l}/articles/ should take the English /articles/ lastmod`);
    if (localized.has(`/${l}/`)) fail('source', `/${l}/ must not take the English home's lastmod (it does not list resources)`);
    if (localized.has(`/${l}/about/`)) fail('source', `/${l}/about/ has no real date and must carry no lastmod`);
  }
  for (const [key, byLocale] of Object.entries(LEGAL_COPY)) {
    const dates = TRANSLATED_LOCALES.map((l) => localized.get(`/${l}/legal/${key}/`));
    if (dates.some((d) => !d)) fail('source', `a translated legal/${key} page's "last updated" text could not be read: ${TRANSLATED_LOCALES.map((l) => byLocale[l].lastUpdated).join(' | ')}`);
    else if (new Set(dates).size !== 1) fail('source', `translated legal/${key} pages show different dates: ${dates.join(', ')}`);
  }
  const cases = [['17 نوفمبر 2026', 'ar', '2026-11-17'], ['23 ستمبر 2026', 'ur', '2026-09-23'], ['১৭ আগস্ট ২০২৬', 'bn', '2026-08-17'], ['31 فبراير 2026', 'ar', undefined], ['17 November 2026', 'ar', undefined]];
  for (const [text, locale, want] of cases) {
    const got = parseLocalizedDate(text, locale)?.slice(0, 10);
    if (got !== want) fail('source', `parseLocalizedDate(${JSON.stringify(text)}, ${locale}) = ${got}, want ${want}`);
  }
  if (!shown.has('source')) ok(`lastmod sources: all ${builtPractice.length} practice page(s) dated from their question-bank resources; ${Object.keys(LEGAL_COPY).length * TRANSLATED_LOCALES.length} translated legal page(s) dated from the date they display; translated directories follow their English page`);
}

// [1] index and files
let files;
try {
  files = readSitemapFiles(DIST);
} catch (e) {
  console.error(`  ✗ ${e.message}`);
  process.exit(1);
}
const indexXml = readFileSync(join(DIST, 'sitemap-index.xml'), 'utf8');
if (!/^<\?xml[^>]*\?>\s*<sitemapindex xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/.test(indexXml)) fail('index', 'sitemap-index.xml is not a <sitemapindex> in the sitemap namespace');
const onDisk = readdirSync(DIST).filter((f) => /^sitemap-.+\.xml$/.test(f) && f !== 'sitemap-index.xml');
for (const f of onDisk) if (!files.some((x) => x.file === f)) fail('index', `dist/${f} exists but the index does not list it`);
if (existsSync(join(DIST, 'sitemap-0.xml'))) fail('index', 'dist/sitemap-0.xml still exists: the single-file sitemap should be gone');
if (problems === 0) ok(`sitemap-index.xml lists ${files.length} child sitemap(s), all present`);

// [2] grouping, [3] limits
const seen = new Map();
const counts = new Map();
for (const f of files) {
  const group = f.file.match(/^sitemap-(.+)-\d+\.xml$/)?.[1];
  if (!group || !SITEMAP_GROUPS.includes(group)) { fail('group', `${f.file} is not one of the known groups (${SITEMAP_GROUPS.join(', ')})`); continue; }
  if (!/<urlset[^>]*xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/.test(f.xml)) fail('xml', `${f.file} is not a <urlset> in the sitemap namespace`);
  const bytes = statSync(join(DIST, f.file)).size;
  if (f.urls.length === 0) fail('limits', `${f.file} is empty`);
  if (f.urls.length > MAX_URLS) fail('limits', `${f.file} has ${f.urls.length} URLs (limit ${MAX_URLS})`);
  if (bytes > MAX_BYTES) fail('limits', `${f.file} is ${bytes} bytes (limit ${MAX_BYTES})`);
  counts.set(group, { urls: (counts.get(group)?.urls ?? 0) + f.urls.length, bytes: (counts.get(group)?.bytes ?? 0) + bytes });
  for (const { loc } of f.urls) {
    if (!loc) { fail('xml', `${f.file} has a <url> with no <loc>`); continue; }
    if (seen.has(loc)) fail('duplicate', `${loc} is in both ${seen.get(loc)} and ${f.file}`);
    seen.set(loc, f.file);
    const expected = sitemapGroup(new URL(loc).pathname);
    if (expected !== group) fail('group', `${loc} is in ${f.file} but belongs to the "${expected}" group`);
  }
}
if (!shown.has('duplicate')) ok(`${seen.size} URL(s), each in exactly one child sitemap`);
if (!shown.has('group')) ok('every URL is in the file its group says');
if (!shown.has('limits')) ok(`every child is within ${MAX_URLS.toLocaleString('en')} URLs and 50 MB`);

// [4] each URL: own origin, clean, built, self-canonical
const canonicalOf = (html) => html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)?.[1];
const htmlFor = (loc) => join(DIST, new URL(loc).pathname, 'index.html');
for (const loc of seen.keys()) {
  if (!loc.startsWith(`${SITE}/`)) { fail('url', `${loc} is not on ${SITE}`); continue; }
  if (/[?#]/.test(loc)) { fail('url', `${loc} has a query string or fragment`); continue; }
  if (!loc.endsWith('/')) fail('url', `${loc} has no trailing slash (the site redirects those)`);
  let html;
  try { html = readFileSync(htmlFor(loc), 'utf8'); } catch { fail('built', `${loc} has no built page`); continue; }
  const canonical = canonicalOf(html);
  if (canonical !== loc) fail('canonical', `${loc} is in the sitemap but its canonical is ${canonical ?? 'missing'}`);
}
if (!['url', 'built', 'canonical'].some((k) => shown.has(k))) ok('every URL is a clean, built, self-canonical page on the site');

// [5] nothing eligible left out
function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) { if (entry.name !== 'pagefind' && entry.name !== '_astro') walk(join(dir, entry.name), out); }
    else if (entry.name === 'index.html') out.push(join(dir, entry.name));
  }
  return out;
}
let indexable = 0;
for (const file of walk(DIST)) {
  const head = readFileSync(file, 'utf8').slice(0, 6000);
  const path = `/${file.slice(DIST.length + 1).replace(/\\/g, '/').replace(/index\.html$/, '')}`;
  const url = `${SITE}${path}`;
  if (/name="robots"\s+content="noindex/i.test(head)) continue;
  if (canonicalOf(head) !== url) continue; // no canonical (the 404 page) or canonical elsewhere
  indexable++;
  if (!seen.has(url)) fail('missing', `${url} is indexable and self-canonical but is in no sitemap`);
}
if (!shown.has('missing')) ok(`all ${indexable} indexable, self-canonical built page(s) are in the sitemap`);

// [6] lastmod
const now = Date.now();
const lastmods = files.flatMap((f) => f.urls.map((u) => u.lastmod).filter(Boolean));
for (const f of files) for (const u of f.urls) {
  if (!u.lastmod) continue;
  const t = Date.parse(u.lastmod);
  if (Number.isNaN(t)) fail('lastmod', `${u.loc} has an unreadable lastmod "${u.lastmod}"`);
  else if (t > now + 86_400_000) fail('lastmod', `${u.loc} has a lastmod in the future (${u.lastmod})`);
}
const distinctDays = new Set(lastmods.map((d) => d.slice(0, 10)));
if (lastmods.length > 100 && distinctDays.size < 5) fail('lastmod', `${lastmods.length} lastmod values but only ${distinctDays.size} distinct day(s): this looks like one build date stamped on everything`);
if (!shown.has('lastmod')) ok(`${lastmods.length} lastmod value(s) across ${distinctDays.size} distinct day(s), none in the future; ${seen.size - lastmods.length} URL(s) carry none`);

// [7] robots.txt and the old address
const robots = readFileSync(join(DIST, 'robots.txt'), 'utf8');
const sitemapLines = robots.split(/\r?\n/).filter((l) => /^sitemap:/i.test(l)).map((l) => l.replace(/^sitemap:\s*/i, '').trim());
if (sitemapLines.length !== 1 || sitemapLines[0] !== `${SITE}/sitemap-index.xml`) fail('robots', `robots.txt should name exactly ${SITE}/sitemap-index.xml (found: ${sitemapLines.join(', ') || 'none'})`);
const redirects = readFileSync(join(DIST, '_redirects'), 'utf8');
for (const old of ['/sitemap.xml', '/sitemap-0.xml']) {
  if (!new RegExp(`^${old.replace(/[.]/g, '\\.')}\\s+/sitemap-index\\.xml\\s+301\\s*$`, 'm').test(redirects)) fail('robots', `_redirects has no 301 from ${old} to /sitemap-index.xml`);
}
if (!shown.has('robots')) ok('robots.txt names the index; /sitemap.xml and /sitemap-0.xml redirect to it');

// [8] every child has a lastmod in the index (the newest lastmod of its URLs), and every practice URL is dated
const indexEntries = [...indexXml.matchAll(/<sitemap>([\s\S]*?)<\/sitemap>/g)].map((m) => ({
  loc: m[1].match(/<loc>([^<]+)<\/loc>/)?.[1], lastmod: m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1],
}));
for (const e of indexEntries) {
  if (!e.lastmod) { fail('index-lastmod', `${e.loc} has no <lastmod> in sitemap-index.xml`); continue; }
  const child = files.find((f) => f.url === e.loc);
  const newest = child?.urls.map((u) => u.lastmod).filter(Boolean).sort().pop();
  if (newest && newest !== e.lastmod) fail('index-lastmod', `${e.loc} index lastmod ${e.lastmod} is not the newest of its URLs (${newest})`);
}
for (const f of files) {
  if (!/^sitemap-practice-/.test(f.file)) continue;
  for (const u of f.urls) if (!u.lastmod) fail('index-lastmod', `${u.loc} (practice) has no lastmod`);
}
if (!shown.has('index-lastmod')) ok(`all ${indexEntries.length} child sitemap(s) have a <lastmod> in the index; every practice URL is dated`);

console.log('\n  Group              URLs     Size      Contents');
for (const g of SITEMAP_GROUPS) {
  const c = counts.get(g);
  if (!c) continue;
  console.log(`  ${g.padEnd(17)} ${String(c.urls).padStart(6)}  ${(c.bytes / 1024).toFixed(0).padStart(6)} KB  ${SITEMAP_GROUP_DESCRIPTIONS[g]}`);
}
console.log(`  ${'total'.padEnd(17)} ${String(seen.size).padStart(6)}`);

console.log(`\n${problems === 0 ? 'PASS' : 'FAIL'}: ${problems} problem(s) found.`);
process.exit(problems === 0 ? 0 : 1);
