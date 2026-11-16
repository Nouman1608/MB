// Insert generated topic figures into their lesson pages.
// For each slug folder in docs/reports/topic-images/generated, reads figures.html and places every
// <figure> at the END of the section named by its "place after" heading (the site's convention:
// figures close their section, stacked in order, before the next heading of the same or higher level).
// Idempotent: a figure whose image URL is already on the page is skipped.
//
// Usage: node scripts/topic-figures/insert-figures.mjs [--dry-run] [slug ...]
import fs from 'node:fs';
import path from 'node:path';

const GEN = 'docs/reports/topic-images/generated';
const args = process.argv.slice(2);
const dry = args.includes('--dry-run');
const only = new Set(args.filter((a) => !a.startsWith('--')));

// slug -> lesson markdown path. Lessons: src/content/resources/<slug>.md.
// AP study guides: src/content/ap-resources/<course>/<stem>.md, slug "ap-<course>-<stem>".
const AP = 'src/content/ap-resources';
const apCourses = fs.readdirSync(AP).filter((c) => fs.statSync(path.join(AP, c)).isDirectory()).sort((a, b) => b.length - a.length);
const fileBySlug = { get(slug) {
  if (slug.startsWith('ap-')) {
    for (const c of apCourses) {
      if (slug.startsWith(`ap-${c}-`)) return path.join(AP, c, `${slug.slice(c.length + 4)}.md`);
    }
  }
  return `src/content/resources/${slug}.md`;
} };

function parseBlocks(html) {
  const blocks = [];
  const re = /((?:<!--[^]*?-->\s*)*)(<figure class="topic-figure">[^]*?<\/figure>)/g;
  for (const m of html.matchAll(re)) {
    const place = /<!-- place after: (.*?) -->/.exec(m[1]);
    const src = /<img src="([^"]+)"/.exec(m[2]);
    if (place && src) blocks.push({ after: place[1].trim(), figure: m[2].trim(), src: src[1] });
  }
  return blocks;
}

const level = (l) => (/^(#{1,6})\s/.exec(l) || [])[1]?.length || 0;
let pages = 0, inserted = 0, skipped = 0;
const problems = [];

for (const slug of fs.readdirSync(GEN).sort()) {
  if (only.size && !only.has(slug)) continue;
  const htmlPath = path.join(GEN, slug, 'figures.html');
  if (!fs.existsSync(htmlPath)) continue;
  const file = fileBySlug.get(slug);
  if (!file || !fs.existsSync(file)) { problems.push(`${slug}: lesson file not found`); continue; }
  let md = fs.readFileSync(file, 'utf8');
  const blocks = parseBlocks(fs.readFileSync(htmlPath, 'utf8'));

  // group new figures by heading, preserving order
  const byHeading = new Map();
  for (const b of blocks) {
    if (md.includes(b.src)) { skipped++; continue; }
    if (!byHeading.has(b.after)) byHeading.set(b.after, []);
    byHeading.get(b.after).push(b.figure);
  }
  if (!byHeading.size) continue;

  const lines = md.split('\n');
  // body starts after frontmatter
  let start = 0;
  if (lines[0] === '---') start = lines.indexOf('---', 1) + 1;
  let inFence = false;
  const headIdx = [];
  for (let i = start; i < lines.length; i++) {
    if (/^\s*(```|~~~)/.test(lines[i])) inFence = !inFence;
    if (!inFence && level(lines[i])) headIdx.push(i);
  }
  // compute insertion point (end of section) for each heading; insert from the bottom up
  const plan = [];
  for (const [heading, figs] of byHeading) {
    const h = headIdx.find((i) => lines[i].trim() === heading);
    if (h === undefined) { problems.push(`${slug}: heading not found: ${heading}`); continue; }
    const lv = level(lines[h]);
    const next = headIdx.find((i) => i > h && level(lines[i]) <= lv);
    let end = next === undefined ? lines.length : next;
    while (end > h + 1 && !lines[end - 1].trim()) end--; // back over trailing blank lines
    plan.push({ end, figs });
  }
  plan.sort((a, b) => b.end - a.end);
  for (const { end, figs } of plan) {
    // one blank line before each figure; keep the section's existing blank line before the next heading
    const chunk = figs.flatMap((f) => ['', f]);
    if (end < lines.length && lines[end].trim()) chunk.push('');
    lines.splice(end, 0, ...chunk);
    inserted += figs.length;
  }
  const out = lines.join('\n').replace(/\n{3,}(<figure class="topic-figure">)/g, '\n\n$1');
  if (!dry) fs.writeFileSync(file, out);
  pages++;
}
console.log(`${dry ? '[dry run] ' : ''}pages changed: ${pages}, figures inserted: ${inserted}, already present: ${skipped}`);
if (problems.length) console.log('problems:\n  ' + problems.join('\n  '));
