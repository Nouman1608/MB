// Apply docs/reports/topic-images/regeneration/mapping.csv to the pages:
// - where a page shows the old image, swap that <figure> to the new image (new src and height);
//   alt and caption stay as the page has them unless alt-changes.csv gives new wording;
// - where the old image is not on the page (pictures removed in the audit), insert the new figure
//   at the end of the section named by the set's "place after" heading, if the page has it.
// Idempotent: pages already showing the new image are skipped.
//
// Usage: node scripts/topic-figures/apply-regeneration.mjs [--dry-run]
import fs from 'node:fs';
import path from 'node:path';
import { insertIntoFile } from './insert-lib.mjs';

const DIR = 'docs/reports/topic-images/regeneration';
const SETS = path.join(DIR, 'sets');
const HOST = 'https://img.marlbridge.com/';
const dry = process.argv.includes('--dry-run');

function csv(file) {
  const text = fs.readFileSync(file, 'utf8');
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; } else if (c === '"') q = false; else cell += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; row.push(cell); rows.push(row); row = []; cell = ''; }
    else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows.filter((r) => r.length > 1);
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// new image -> { height, alt, caption, after, figureHtml }
const info = new Map();
for (const set of fs.readdirSync(SETS)) {
  const dir = path.join(SETS, set);
  const html = fs.readFileSync(path.join(dir, 'figures.html'), 'utf8');
  const blocks = new Map();
  for (const m of html.matchAll(/<!-- place after: (.*?) -->\s*(<figure class="topic-figure">[^]*?<\/figure>)/g)) {
    const src = /<img src="([^"]+)"/.exec(m[2])[1];
    blocks.set(src.replace(HOST, ''), { after: m[1].trim(), figure: m[2] });
  }
  for (const f of JSON.parse(fs.readFileSync(path.join(dir, 'figures.json'), 'utf8'))) {
    info.set(f.file, { ...f, ...(blocks.get(f.file) || {}) });
  }
}
// Pages whose own headings differ from the lesson heading the set was drawn for.
const AFTER = {
  'aqa-gcse-biology-8461-transport-in-cells-revision-notes': {
    'biology-transport-in-cells--01-villus.webp': '### Exchange surfaces',
    'biology-transport-in-cells--02-osmosis.webp': '## 4.1.3.2 Osmosis',
    'biology-transport-in-cells--03-active-transport.webp': '## 4.1.3.3 Active transport',
  },
  'cambridge-a-level-economics-efficiency-market-failure-and-externalities-revision-notes': {
    'economics-efficiency-and-market-failure--01-allocative-efficiency.webp': '## Productive and allocative efficiency (7.3.1, 7.3.2)',
    'economics-efficiency-and-market-failure--02-monopoly-welfare-loss.webp': '## Productive and allocative efficiency (7.3.1, 7.3.2)',
    'economics-efficiency-and-market-failure--03-bypass-cost-benefit.webp': '### Worked reminder: a bypass (CU millions, invented figures)',
  },
};
const altFix = new Map(csv(path.join(DIR, 'alt-changes.csv')).map((r) => [r.old_image, r]));

let swapped = 0, inserted = 0, already = 0, pagesChanged = new Set();
const problems = [];
for (const row of csv(path.join(DIR, 'mapping.csv'))) {
  const { old_image: oldImg, new_image: newImg } = row;
  const n = info.get(newImg);
  if (!n) { problems.push(`no built file for ${newImg}`); continue; }
  const fix = altFix.get(oldImg);
  for (const slug of row.pages_to_update.split(';').filter(Boolean)) {
    const file = `src/content/resources/${slug}.md`;
    if (!fs.existsSync(file)) { problems.push(`${slug}: page not found`); continue; }
    let md = fs.readFileSync(file, 'utf8');
    if (md.includes(HOST + newImg)) { already++; continue; }
    if (md.includes(HOST + oldImg)) {
      const re = new RegExp(`<figure class="topic-figure">\\s*<img src="${(HOST + oldImg).replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')}"[^]*?</figure>`, 'g');
      let count = 0;
      md = md.replace(re, (block) => {
        count++;
        let b = block.replace(HOST + oldImg, HOST + newImg).replace(/ height="\d+"/, ` height="${n.height}"`);
        if (fix) {
          b = b.replace(/ alt="[^"]*"/, ` alt="${esc(fix.new_alt)}"`).replace(/<figcaption>[^]*?<\/figcaption>/, `<figcaption>${esc(fix.new_caption)}</figcaption>`);
        }
        return b;
      });
      if (!count) { problems.push(`${slug}: old image found but not inside a topic-figure block: ${oldImg}`); continue; }
      swapped += count; pagesChanged.add(slug);
      if (!dry) fs.writeFileSync(file, md);
    } else {
      // picture was removed from the page: insert the new figure under its heading
      if (!n.figure || !n.after) { problems.push(`${slug}: ${oldImg} not on page and no placement for ${newImg}`); continue; }
      const after = AFTER[slug]?.[newImg] || n.after;
      const r = insertIntoFile(file, [{ after, figure: n.figure, src: HOST + newImg }], { dry });
      if (r.problems.length) problems.push(...r.problems.map((p) => `${slug}: ${p} (${newImg})`));
      if (r.inserted) { inserted += r.inserted; pagesChanged.add(slug); }
    }
  }
}
console.log(`${dry ? '[dry run] ' : ''}figures swapped: ${swapped}, inserted: ${inserted}, already new: ${already}, pages changed: ${pagesChanged.size}`);
if (problems.length) console.log(`problems (${problems.length}):\n  ` + problems.join('\n  '));
