// Hand-added "reused" figures in figures.html: <!-- reused from <slug> --> + <!-- place after: ... --> + <figure>.
// Accepts the two comments in either order, keeps one block per image (preferring one with a placement note),
// and writes them back in a single normal form.
export function keptReuseBlocks(html) {
  const re = /(?:<!-- place after: ([^\n]*?) -->\s*)?<!-- reused from ([^\n]*?) -->\s*(?:<!-- place after: ([^\n]*?) -->\s*)?(<figure[\s\S]*?<\/figure>)/g;
  const bySrc = new Map();
  for (const m of html.matchAll(re)) {
    const place = m[3] || m[1] || '';
    const from = m[2];
    const fig = m[4];
    const src = (/<img src="([^"]+)"/.exec(fig) || [])[1] || fig;
    const prev = bySrc.get(src);
    if (!prev || (!prev.place && place)) bySrc.set(src, { place, from, fig });
  }
  let out = '';
  for (const { place, from, fig } of bySrc.values()) {
    out += `\n<!-- reused from ${from} -->\n${place ? `<!-- place after: ${place} -->\n` : ''}${fig}\n`;
  }
  return out;
}

// One-off cleanup: node reuse-blocks.mjs <generated-dir>  (rewrites each figures.html: generated part + deduped reuse blocks)
if (process.argv[1] && process.argv[1].endsWith('reuse-blocks.mjs') && process.argv[2]) {
  const fs = await import('node:fs');
  const path = await import('node:path');
  for (const slug of fs.readdirSync(process.argv[2])) {
    const p = path.join(process.argv[2], slug, 'figures.html');
    if (!fs.existsSync(p)) continue;
    const html = fs.readFileSync(p, 'utf8');
    const first = html.search(/(?:<!-- place after: [^\n]*-->\s*)?<!-- reused from /);
    if (first < 0) continue;
    // keep the generated part only if it is before the first reuse block
    const base = html.slice(0, first).replace(/\s+$/, '\n');
    const fixed = base + keptReuseBlocks(html);
    if (fixed !== html) { fs.writeFileSync(p, fixed); console.log('cleaned', slug); }
  }
}
