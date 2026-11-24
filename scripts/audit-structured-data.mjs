#!/usr/bin/env node
/**
 * Phase 10 safeguard (Aug 2026 SEO remediation) -- structured-data
 * (JSON-LD) validation across the whole built site.
 *
 * Confirms every page ships at least one JSON-LD block, every block
 * parses as valid JSON, and every typed node -- including nodes nested
 * inside an `@graph` wrapper, which a naive check would wrongly flag as
 * "no @type" by looking at the wrapper object instead of its contents --
 * declares an `@type` and its wrapper declares `@context`.
 *
 * Requires a fresh `dist/` (run `npm run build` first). Not part of
 * `npm run validate:academic` for that reason -- run explicitly via
 * `npm run audit:structured-data`, or as part of the pre-release QA gate.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

// Optional first argument: a build folder other than ./dist (for example a
// baseline build in another worktree): node scripts/audit-structured-data.mjs ../x/dist
const DIST = process.argv[2] ?? 'dist';
// Every path below is reported as dist/<route>/index.html whatever folder was scanned.
const norm = (f) => 'dist/' + relative(DIST, f).split(sep).join('/');

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (entry === 'index.html') out.push(p);
  }
  return out;
}

function typedNodes(item) {
  // A @graph wrapper holds an array of typed nodes under one shared
  // @context; a plain node is its own single typed node.
  if (Array.isArray(item['@graph'])) return item['@graph'];
  return [item];
}

let files;
try {
  files = walk(DIST);
} catch {
  console.error('dist/ not found -- run `npm run build` first.');
  process.exit(1);
}

let checked = 0;
let totalBlocks = 0;
let totalNodes = 0;
const problems = [];
const typeCounts = {};

/**
 * D-516 -- author references. An Article or LearningResource names its
 * author as a Person or Organization carrying the `@id` and `url` of that
 * author's profile page. Checked against the built profile pages:
 *   - the URL is absolute, on this site, and a built /authors/<id>/ page
 *   - that page declares a node with the same `@id`, `@type` and name
 *     (so "the author of this page" and "the entity on that profile" are
 *     one thing, and a Person is never an Organization elsewhere)
 *   - an author whose name is a profile's name is not left unlinked
 * and, on every page, that the WebPage node, <title>, og:title and
 * twitter:title all carry the same title.
 */
const SITE = 'https://marlbridge.com';
const jsonLdOf = (html) => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(([, raw]) => {
  try { const p = JSON.parse(raw); return (Array.isArray(p) ? p : [p]).flatMap(typedNodes); } catch { return []; }
});
const builtPaths = new Set(files.map(norm)); // O(1) lookup instead of scanning every page per author reference
const declaredAuthors = new Map(); // @id -> { type, name, url }
const profileNames = new Set();
for (const f of files) {
  const rel = norm(f);
  if (!/^dist\/authors\/[^/]+\/index\.html$/.test(rel)) continue;
  for (const node of jsonLdOf(readFileSync(f, 'utf8'))) {
    if ((node['@type'] === 'Person' || node['@type'] === 'Organization') && typeof node['@id'] === 'string' && node['@id'].includes('/authors/')) {
      if (declaredAuthors.has(node['@id'])) problems.push({ path: rel, issue: `author entity ${node['@id']} is declared twice` });
      declaredAuthors.set(node['@id'], { type: node['@type'], name: node.name, url: node.url });
      profileNames.add(node.name);
    }
  }
}
let authorRefs = 0;
let authorRefsLinked = 0;
function checkAuthor(path, author) {
  authorRefs++;
  if (!author || typeof author !== 'object' || !author['@type'] || !author.name) {
    problems.push({ path, issue: 'author is not a typed, named Person or Organization', snippet: JSON.stringify(author).slice(0, 150) });
    return;
  }
  if (!author['@id'] && !author.url) {
    if (profileNames.has(author.name)) problems.push({ path, issue: `author "${author.name}" has a profile page but is not linked to it` });
    return;
  }
  authorRefsLinked++;
  const declared = declaredAuthors.get(author['@id']);
  if (!author.url?.startsWith(`${SITE}/authors/`)) problems.push({ path, issue: `author url is not an absolute profile URL: ${author.url}` });
  else if (!builtPaths.has(`dist${author.url.slice(SITE.length)}index.html`)) problems.push({ path, issue: `author url has no built page: ${author.url}` });
  if (!declared) problems.push({ path, issue: `author @id is not declared by any profile page: ${author['@id']}` });
  else {
    if (declared.type !== author['@type']) problems.push({ path, issue: `author "${author.name}" is ${author['@type']} here but ${declared.type} on the profile` });
    if (declared.name !== author.name) problems.push({ path, issue: `author name "${author.name}" differs from the profile's "${declared.name}"` });
    if (declared.url !== author.url) problems.push({ path, issue: `author url ${author.url} differs from the profile's ${declared.url}` });
  }
}
const decode = (s) => s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
let titleSetsChecked = 0;

/**
 * Nov 2026 SEO round (S1.3) -- site policy checks on every page's structured data:
 *   - no rating, review or postal-address markup anywhere (the 4.6/5 Google
 *     rating belongs to Learners Academy, and the address is visible text only);
 *   - a visible breadcrumb has a BreadcrumbList, and the reverse;
 *   - Article / LearningResource carry headline, dates (modified not before
 *     published), author and publisher; a "Marlbridge Academic Team" byline is
 *     an Organization, never a Person;
 *   - FAQPage questions are visible on the page; Course names its provider and
 *     never claims an educationalCredentialAwarded.
 */
const FORBIDDEN_KEYS = new Set(['aggregateRating', 'review', 'reviews', 'reviewRating', 'ratingValue', 'ratingCount', 'reviewCount', 'bestRating', 'address', 'streetAddress', 'postalCode', 'addressLocality']);
const FORBIDDEN_TYPES = new Set(['AggregateRating', 'Review', 'Rating', 'PostalAddress']);
const policyCounts = { breadcrumbVisible: 0, breadcrumbSchema: 0, faq: 0, course: 0, articles: 0 };
function findForbidden(value, hits = []) {
  if (Array.isArray(value)) { for (const v of value) findForbidden(v, hits); return hits; }
  if (!value || typeof value !== 'object') return hits;
  for (const [k, v] of Object.entries(value)) {
    if (FORBIDDEN_KEYS.has(k)) hits.push(k);
    if (k === '@type' && [].concat(v).some((t) => FORBIDDEN_TYPES.has(t))) hits.push(`@type ${v}`);
    findForbidden(v, hits);
  }
  return hits;
}
function checkPolicy(path, html, nodes) {
  const forbidden = findForbidden(nodes);
  if (forbidden.length) problems.push({ path, issue: `rating/review/address markup: ${[...new Set(forbidden)].join(', ')}` });

  const visibleCrumb = /<nav[^>]*aria-label="Breadcrumb"/i.test(html);
  const crumbNode = nodes.find((n) => n['@type'] === 'BreadcrumbList');
  if (visibleCrumb) policyCounts.breadcrumbVisible++;
  if (crumbNode) policyCounts.breadcrumbSchema++;
  if (visibleCrumb && !crumbNode) problems.push({ path, issue: 'visible breadcrumb but no BreadcrumbList in the structured data' });
  if (crumbNode && !visibleCrumb) problems.push({ path, issue: 'BreadcrumbList in the structured data but no visible breadcrumb' });
  if (crumbNode) {
    const items = crumbNode.itemListElement ?? [];
    items.forEach((it, i) => {
      if (it.position !== i + 1 || !it.name || !String(it.item ?? '').startsWith(`${SITE}/`)) problems.push({ path, issue: `BreadcrumbList item ${i + 1} is malformed`, snippet: JSON.stringify(it).slice(0, 120) });
    });
  }

  for (const node of nodes) {
    const type = node['@type'];
    if (type === 'Article' || type === 'LearningResource') {
      policyCounts.articles++;
      if (type === 'Article' && !node.headline) problems.push({ path, issue: 'Article has no headline' });
      if (type === 'LearningResource' && !node.name) problems.push({ path, issue: 'LearningResource has no name' });
      const pub = Date.parse(node.datePublished ?? '');
      const mod = Date.parse(node.dateModified ?? '');
      if (Number.isNaN(pub)) problems.push({ path, issue: `${type} datePublished is missing or not a date: ${node.datePublished}` });
      if (Number.isNaN(mod)) problems.push({ path, issue: `${type} dateModified is missing or not a date: ${node.dateModified}` });
      if (!Number.isNaN(pub) && !Number.isNaN(mod) && mod < pub) problems.push({ path, issue: `${type} dateModified is before datePublished` });
      if (!node.publisher) problems.push({ path, issue: `${type} has no publisher` });
      for (const a of [].concat(node.author ?? [])) {
        if (/^Marlbridge Academic Team$/i.test(a.name ?? '') && a['@type'] !== 'Organization') problems.push({ path, issue: `byline "Marlbridge Academic Team" is a ${a['@type']}, not an Organization` });
      }
      if (html.match(/<meta property="article:modified_time" content="([^"]+)"/)?.[1] && node.dateModified
        && Date.parse(html.match(/<meta property="article:modified_time" content="([^"]+)"/)[1]) !== mod) problems.push({ path, issue: 'article:modified_time differs from dateModified' });
    }
    if (type === 'FAQPage') {
      policyCounts.faq++;
      const body = decode(html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ');
      for (const q of node.mainEntity ?? []) {
        const name = String(q.name ?? '').replace(/\s+/g, ' ').trim();
        if (!name || !q.acceptedAnswer?.text) problems.push({ path, issue: 'FAQPage question without a name or an answer' });
        else if (!body.includes(name)) problems.push({ path, issue: `FAQPage question is not visible on the page: "${name.slice(0, 80)}"` });
      }
    }
    if (type === 'Course') {
      policyCounts.course++;
      if (!node.name || !node.provider) problems.push({ path, issue: 'Course without a name or a provider' });
      if (node.educationalCredentialAwarded) problems.push({ path, issue: 'Course claims educationalCredentialAwarded' });
    }
  }
}

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const path = norm(f).replace(/^dist/, '').replace(/index\.html$/, '') || '/';
  const nodes = jsonLdOf(html);
  checkPolicy(path, html, nodes);
  for (const node of nodes) {
    if (node['@type'] !== 'Article' && node['@type'] !== 'LearningResource') continue;
    if (node.author === undefined) { problems.push({ path, issue: `${node['@type']} has no author` }); continue; }
    for (const a of Array.isArray(node.author) ? node.author : [node.author]) checkAuthor(path, a);
  }
  const pageTitle = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const webPage = nodes.find((n) => n['@type'] === 'WebPage');
  if (pageTitle !== undefined && webPage) {
    titleSetsChecked++;
    const title = decode(pageTitle.trim());
    const og = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"/)?.[1];
    const tw = html.match(/<meta\s+name="twitter:title"\s+content="([^"]*)"/)?.[1];
    if (webPage.name !== title) problems.push({ path, issue: `WebPage name "${webPage.name}" differs from <title> "${title}"` });
    if (og === undefined || decode(og) !== title) problems.push({ path, issue: `og:title "${og}" differs from <title> "${title}"` });
    if (tw === undefined || decode(tw) !== title) problems.push({ path, issue: `twitter:title "${tw}" differs from <title> "${title}"` });
  }
  if (blocks.length === 0) {
    problems.push({ path, issue: 'no JSON-LD block on page' });
    continue;
  }
  checked++;
  for (const [, raw] of blocks) {
    totalBlocks++;
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      problems.push({ path, issue: `invalid JSON: ${e.message}` });
      continue;
    }
    const wrappers = Array.isArray(parsed) ? parsed : [parsed];
    for (const wrapper of wrappers) {
      if (!wrapper['@context']) problems.push({ path, issue: 'missing @context on wrapper' });
      for (const node of typedNodes(wrapper)) {
        totalNodes++;
        if (!node['@type']) {
          problems.push({ path, issue: 'missing @type on a graph node', snippet: JSON.stringify(node).slice(0, 150) });
        } else {
          const t = Array.isArray(node['@type']) ? node['@type'].join('+') : node['@type'];
          typeCounts[t] = (typeCounts[t] || 0) + 1;
        }
      }
    }
  }
}

console.log(`Structured-data audit -- ${files.length} pages scanned, ${checked} with JSON-LD.`);
console.log(`Total JSON-LD blocks: ${totalBlocks}, total typed nodes: ${totalNodes}\n`);
console.log('Type distribution:');
for (const [type, count] of Object.entries(typeCounts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${type}: ${count}`);
}
console.log(`\nAuthor references: ${authorRefs} on Article/LearningResource nodes, ${authorRefsLinked} linked to one of ${declaredAuthors.size} profile entities, ${authorRefs - authorRefsLinked} named without a profile.`);
console.log(`Policy checks: ${policyCounts.breadcrumbVisible} pages with a visible breadcrumb, ${policyCounts.breadcrumbSchema} with a BreadcrumbList; ${policyCounts.articles} Article/LearningResource, ${policyCounts.faq} FAQPage, ${policyCounts.course} Course nodes.`);
console.log(`Title agreement (<title>, og:title, twitter:title, WebPage name): ${titleSetsChecked} pages checked.`);

if (problems.length) {
  console.log(`\nProblems:`);
  const kinds = new Map();
  for (const p of problems) { const k = p.issue.replace(/[:"].*$/, '').replace(/d+/g, 'N'); kinds.set(k, (kinds.get(k) ?? 0) + 1); }
  console.log('  By kind:'); for (const [k, n] of [...kinds].sort((a, b) => b[1] - a[1])) console.log(`    ${n} x ${k}`);
  for (const p of problems.slice(0, 50)) console.log(`  ✗ ${p.path} -- ${p.issue}${p.snippet ? ` (${p.snippet})` : ''}`);
  if (problems.length > 50) console.log(`  ... and ${problems.length - 50} more`);
}

console.log(`\n${problems.length === 0 ? 'PASS' : 'FAIL'}: ${problems.length} problem(s) found.`);
process.exit(problems.length === 0 ? 0 : 1);
