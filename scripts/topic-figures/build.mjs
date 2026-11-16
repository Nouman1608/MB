// Build one lesson's topic figures: SVG -> 1800 px WebP (shown at 900 px) + figures.html with house <figure> markup.
// Usage (from repo root): node scripts/topic-figures/build.mjs scripts/topic-figures/lessons/<slug>.mjs docs/reports/topic-images/generated
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const [, , mod, outRoot] = process.argv;
const { slug, figures } = await import(path.resolve(mod));
const dir = path.join(outRoot, slug);
fs.mkdirSync(path.join(dir, 'svg'), { recursive: true });
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
let html = `<!-- Figures for ${slug}. Upload the .webp files to https://img.marlbridge.com/ and paste each block after the heading shown. -->\n`;
const manifest = [];
for (const f of figures) {
  const file = `${slug}--${f.name}`;
  fs.writeFileSync(path.join(dir, 'svg', `${file}.svg`), f.svg);
  const [, w, h] = /viewBox="0 0 (\d+) (\d+)"/.exec(f.svg).map(Number);
  const height = Math.round((h * 900) / w);
  await sharp(Buffer.from(f.svg), { density: 72 * (1800 / w) }).resize(1800).webp({ quality: 88, effort: 6 }).toFile(path.join(dir, `${file}.webp`));
  html += `\n<!-- place after: ${f.after} -->\n<figure class="topic-figure">\n  <img src="https://img.marlbridge.com/${file}.webp" width="900" height="${height}" alt="${esc(f.alt)}" loading="lazy">\n  <figcaption>${esc(f.caption)}</figcaption>\n</figure>\n`;
  manifest.push({ file: `${file}.webp`, width: 900, height, after: f.after, alt: f.alt, caption: f.caption, bytes: fs.statSync(path.join(dir, `${file}.webp`)).size });
}
fs.writeFileSync(path.join(dir, 'figures.html'), html);
fs.writeFileSync(path.join(dir, 'figures.json'), JSON.stringify(manifest, null, 1));
console.log(manifest.map((m) => `${m.file} 900x${m.height} ${(m.bytes / 1024).toFixed(0)}KB`).join('\n'));
