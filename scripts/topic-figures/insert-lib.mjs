// Shared insertion logic: put <figure> blocks at the END of the section named by their heading
// (the site's convention: figures close their section, stacked in order, before the next heading
// of the same or higher level). Figures whose image URL is already on the page are skipped.
import fs from 'node:fs';

const level = (l) => (/^(#{1,6})\s/.exec(l) || [])[1]?.length || 0;

// blocks: [{ after: '## Heading', figure: '<figure ...>...</figure>', src: 'https://img...' }]
// Returns { inserted, skipped, problems }. Writes the file unless dry.
export function insertIntoFile(file, blocks, { dry = false } = {}) {
  const md = fs.readFileSync(file, 'utf8');
  const problems = [];
  let skipped = 0;
  const byHeading = new Map();
  const seen = new Set();
  for (const b of blocks) {
    if (md.includes(b.src) || seen.has(b.src)) { skipped++; continue; }
    seen.add(b.src);
    if (!byHeading.has(b.after)) byHeading.set(b.after, []);
    byHeading.get(b.after).push(b.figure);
  }
  if (!byHeading.size) return { inserted: 0, skipped, problems };

  const lines = md.split('\n');
  let start = 0;
  if (lines[0] === '---') start = lines.indexOf('---', 1) + 1;
  let inFence = false;
  const headIdx = [];
  for (let i = start; i < lines.length; i++) {
    if (/^\s*(```|~~~)/.test(lines[i])) inFence = !inFence;
    if (!inFence && level(lines[i])) headIdx.push(i);
  }
  const plan = [];
  for (const [heading, figs] of byHeading) {
    const h = headIdx.find((i) => lines[i].trim() === heading.trim());
    if (h === undefined) { problems.push(`heading not found: ${heading}`); continue; }
    const lv = level(lines[h]);
    const next = headIdx.find((i) => i > h && level(lines[i]) <= lv);
    let end = next === undefined ? lines.length : next;
    while (end > h + 1 && !lines[end - 1].trim()) end--; // back over trailing blank lines
    plan.push({ end, figs });
  }
  plan.sort((a, b) => b.end - a.end);
  let inserted = 0;
  for (const { end, figs } of plan) {
    const chunk = figs.flatMap((f) => ['', f]);
    if (end < lines.length && lines[end].trim()) chunk.push('');
    lines.splice(end, 0, ...chunk);
    inserted += figs.length;
  }
  const out = lines.join('\n').replace(/\n{3,}(<figure class="topic-figure">)/g, '\n\n$1');
  if (!dry && inserted) fs.writeFileSync(file, out);
  return { inserted, skipped, problems };
}
