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
import { join } from 'node:path';

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
  files = walk('dist');
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
 * D-515 -- author references. An Article or LearningResource names its
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
const declaredAuthors = new Map(); // @id -> { type, name, url }
const profileNames = new Set();
for (const f of files) {
  const rel = f.replace(/\\/g, '/');
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
  else if (!files.some((f) => f.replace(/\\/g, '/') === `dist${author.url.slice(SITE.length)}index.html`)) problems.push({ path, issue: `author url has no built page: ${author.url}` });
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

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const path = f.replace(/^dist/, '').replace(/index\.html$/, '') || '/';
  const nodes = jsonLdOf(html);
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
console.log(`Title agreement (<title>, og:title, twitter:title, WebPage name): ${titleSetsChecked} pages checked.`);

if (problems.length) {
  console.log(`\nProblems:`);
  for (const p of problems.slice(0, 50)) console.log(`  ✗ ${p.path} -- ${p.issue}${p.snippet ? ` (${p.snippet})` : ''}`);
  if (problems.length > 50) console.log(`  ... and ${problems.length - 50} more`);
}

console.log(`\n${problems.length === 0 ? 'PASS' : 'FAIL'}: ${problems.length} problem(s) found.`);
process.exit(problems.length === 0 ? 0 : 1);
