// Show what an agent needs to place existing figures on a revision-notes (or other) page:
// the page's heading outline with a short excerpt of each section, and the candidate figures
// from the matched study guide(s): src, the lesson heading it sits under, alt and caption.
//
// Usage: node scripts/topic-figures/rn-context.mjs <page-slug> [extra-source-slug ...]
// Candidates come from docs/reports/topic-images/revision-notes/candidates.json plus any extra slugs.
import fs from 'node:fs';
import path from 'node:path';

const R = 'src/content/resources';
const DIR = 'docs/reports/topic-images/revision-notes';
const [slug, ...extra] = process.argv.slice(2);
if (!slug) { console.error('usage: rn-context.mjs <page-slug> [extra-source-slug ...]'); process.exit(1); }

const level = (l) => (/^(#{1,6})\s/.exec(l) || [])[1]?.length || 0;
function sections(md) {
  const lines = md.split('\n');
  let start = 0;
  if (lines[0] === '---') start = lines.indexOf('---', 1) + 1;
  const out = [];
  let inFence = false, cur = null;
  for (let i = start; i < lines.length; i++) {
    if (/^\s*(```|~~~)/.test(lines[i])) inFence = !inFence;
    if (!inFence && level(lines[i])) { cur = { heading: lines[i].trim(), text: [] }; out.push(cur); }
    else if (cur) cur.text.push(lines[i]);
  }
  return out;
}
function figuresOf(md) {
  const figs = [];
  for (const s of sections(md)) {
    const body = s.text.join('\n');
    for (const m of body.matchAll(/<figure class="topic-figure">[^]*?<\/figure>/g)) {
      const src = /<img src="([^"]+)"/.exec(m[0])?.[1];
      const alt = /alt="([^"]*)"/.exec(m[0])?.[1] || '';
      const cap = /<figcaption>([^]*?)<\/figcaption>/.exec(m[0])?.[1] || '';
      if (src) figs.push({ src, under: s.heading, alt, cap });
    }
  }
  return figs;
}

const page = path.join(R, `${slug}.md`);
const md = fs.readFileSync(page, 'utf8');
const title = /^title:\s*"?(.*?)"?\s*$/m.exec(md)?.[1];
console.log(`PAGE ${slug}\nTITLE ${title}\n\nOUTLINE (heading: excerpt)`);
for (const s of sections(md)) {
  const txt = s.text.join(' ').replace(/<figure[^]*?<\/figure>/g, '[figure]').replace(/\s+/g, ' ').trim();
  console.log(`${s.heading}\n    ${txt.slice(0, 220)}${txt.length > 220 ? '…' : ''}`);
}
const already = new Set(figuresOf(md).map((f) => f.src));
const cands = JSON.parse(fs.readFileSync(path.join(DIR, 'candidates.json'), 'utf8'))[slug] || [];
const sources = [...new Set([...cands, ...extra])];
console.log(`\nCANDIDATE FIGURES from: ${sources.join(', ') || '(none)'}`);
for (const src of sources) {
  const f = path.join(R, `${src}.md`);
  if (!fs.existsSync(f)) { console.log(`  (no file for ${src})`); continue; }
  console.log(`\n== ${src}`);
  for (const g of figuresOf(fs.readFileSync(f, 'utf8'))) {
    console.log(`- ${g.src}${already.has(g.src) ? '  [ALREADY ON PAGE]' : ''}\n    under: ${g.under}\n    alt: ${g.alt}\n    caption: ${g.cap}`);
  }
}
