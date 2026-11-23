import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-sustainable-management-of-rocks-ores';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
// wrap text to a pixel width (approximate Inter metrics)
const wrap = (s, w, size = 17, bold = false) => {
  size = Math.max(MIN, size);
  const max = Math.max(4, Math.floor(w / (size * (bold ? 0.57 : 0.53))));
  const out = [''];
  for (const word of String(s).split(' ')) {
    const cur = out[out.length - 1];
    if (cur && (cur + ' ' + word).length > max) out.push(word); else out[out.length - 1] = cur ? cur + ' ' + word : word;
  }
  return out;
};
// text block wrapped to width; returns {svg, h}
const para = (x, y, s, w, opts = {}) => {
  const size = opts.size || 17, lh = opts.lh || Math.round(size * 1.32);
  const lines = wrap(s, w, size, (opts.weight || 400) >= 600);
  return { svg: tl(x, y, lines, opts, lh), h: lines.length * lh, n: lines.length };
};
// card: panel with bold title and wrapped body; body text starts below title
const card = (x, y, w, h, title, body, o = {}) => {
  const fill = o.fill || C.panel, edge = o.edge || C.panelEdge, ts = o.ts || 20, bs = o.bs || 16.5, pad = o.pad || 18;
  const anchor = o.center ? 'middle' : 'start', tx = o.center ? x + w / 2 : x + pad;
  let s = panel(x, y, w, h, fill, edge);
  let cy = y + pad + ts * 0.85 + (o.top || 0);
  if (title) { const tt = wrap(title, w - 2 * pad, ts, true); s += tl(tx, cy, tt, { size: ts, weight: 700, anchor, fill: o.tfill || C.ink }, ts * 1.25); cy += (tt.length - 1) * ts * 1.25 + bs * 1.55; }
  if (body) { const bl = Array.isArray(body) ? body : wrap(body, w - 2 * pad, bs); s += tl(tx, cy, bl, { size: bs, anchor, fill: o.bfill || C.muted }, bs * 1.32); }
  return s;
};
const pill = (x, y, w, h, label, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2.5"/>` +
  t(x + w / 2, y + h / 2 + (o.size || 17) * 0.36, label, { size: o.size || 17, weight: o.weight || 700, anchor: 'middle', fill: o.color || C.ink });
const rrect = (x, y, w, h, fill, edge = C.ink, sw = 2.5, rx = 10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const circ = (cx, cy, r, fill, edge = C.ink, sw = 2.5) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const line = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.color || C.ink}" stroke-width="${o.w || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const sun = (cx, cy, r = 22) => { let s = ''; for (let i = 0; i < 8; i++) { const a = (i * Math.PI) / 4; s += line(cx + Math.cos(a) * (r + 6), cy + Math.sin(a) * (r + 6), cx + Math.cos(a) * (r + 15), cy + Math.sin(a) * (r + 15), { color: C.olive, w: 3 }); } return s + circ(cx, cy, r, C.mustard, C.olive, 2.5); };
const cloud = (cx, cy, s = 1, fill = '#ffffff') => `<path d="M${cx - 60 * s},${cy + 20 * s} Q${cx - 80 * s},${cy + 20 * s} ${cx - 78 * s},${cy} Q${cx - 76 * s},${cy - 22 * s} ${cx - 50 * s},${cy - 18 * s} Q${cx - 40 * s},${cy - 48 * s} ${cx - 5 * s},${cy - 42 * s} Q${cx + 25 * s},${cy - 60 * s} ${cx + 45 * s},${cy - 25 * s} Q${cx + 80 * s},${cy - 25 * s} ${cx + 78 * s},${cy + 2 * s} Q${cx + 80 * s},${cy + 20 * s} ${cx + 60 * s},${cy + 20 * s} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
const rain = (x, y, n = 4, gap = 18, len = 18, color = C.blue) => { let s = ''; for (let i = 0; i < n; i++) s += line(x + i * gap, y + (i % 2) * 8, x + i * gap - 5, y + (i % 2) * 8 + len, { color, w: 2.5 }); return s; };
const house = (x, y, s = 1, roof = C.rust) => `<rect x="${x}" y="${y}" width="${30 * s}" height="${24 * s}" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2"/><path d="M${x - 3 * s},${y} L${x + 15 * s},${y - 13 * s} L${x + 33 * s},${y} Z" fill="${roof}" stroke="${C.ink}" stroke-width="2"/>`;
const tree = (x, y, s = 1, fill = C.grass) => `<rect x="${x - 3 * s}" y="${y - 18 * s}" width="${6 * s}" height="${18 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.8"/><circle cx="${x}" cy="${y - 30 * s}" r="${16 * s}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
const person = (x, y, s = 1, fill = C.tealDark) => `<circle cx="${x}" cy="${y - 34 * s}" r="${7 * s}" fill="${fill}"/><path d="M${x - 9 * s},${y} L${x - 9 * s},${y - 16 * s} Q${x - 9 * s},${y - 25 * s} ${x},${y - 25 * s} Q${x + 9 * s},${y - 25 * s} ${x + 9 * s},${y - 16 * s} L${x + 9 * s},${y} Z" fill="${fill}"/>`;
const factory = (x, y, s = 1) => `<path d="M${x},${y} L${x},${y - 30 * s} L${x + 20 * s},${y - 42 * s} L${x + 20 * s},${y - 30 * s} L${x + 40 * s},${y - 42 * s} L${x + 40 * s},${y - 30 * s} L${x + 60 * s},${y - 42 * s} L${x + 60 * s},${y} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2" stroke-linejoin="round"/><rect x="${x + 45 * s}" y="${y - 66 * s}" width="${9 * s}" height="${30 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
// vertical flow of boxes with arrows between; items: [title, body]
const flowDown = (x, y, w, hs, gap, items, o = {}) => {
  let s = '', cy = y;
  items.forEach((it, i) => {
    const h = Array.isArray(hs) ? hs[i] : hs;
    s += card(x, cy, w, h, it[0], it[1], { ...o, ...(it[2] || {}) });
    if (i < items.length - 1) s += arrow(x + w / 2, cy + h + 3, x + w / 2, cy + h + gap - 4, { w: 3.5 });
    cy += h + gap;
  });
  return s;
};
// horizontal flow of boxes
const flowRight = (x, y, ws, h, gap, items, o = {}) => {
  let s = '', cx = x;
  items.forEach((it, i) => {
    const w = Array.isArray(ws) ? ws[i] : ws;
    s += card(cx, y, w, h, it[0], it[1], { ...o, ...(it[2] || {}) });
    if (i < items.length - 1) s += arrow(cx + w + 3, y + h / 2, cx + w + gap - 4, y + h / 2, { w: 3.5 });
    cx += w + gap;
  });
  return s;
};
// label with a soft white backing so it reads over lines
const tag = (x, y, s, o = {}) => { const size = Math.max(MIN, o.size || 15), w = String(s).length * size * ((o.weight || 700) >= 600 ? 0.6 : 0.55) + 12; const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w + 6 : x - 6; return `<rect x="${x0}" y="${y - size * 0.95}" width="${w}" height="${size * 1.35}" rx="5" fill="${o.bg || '#ffffff'}" opacity="${o.op || 0.92}"/>` + t(x, y, s, { size, weight: o.weight || 700, anchor: o.anchor || 'start', fill: o.fill || C.ink }); };
// bulleted list, each item wrapped to width w; returns {svg, h}
const bullets = (x, y, items, w, o = {}) => {
  const size = Math.max(MIN, o.size || 16.5), lh = o.lh || Math.round(size * 1.3), gap = o.gap ?? 8; let s = '', yy = y;
  for (const it of items) { const ls = wrap(it, w - 18, size); s += t(x, yy, o.mark || '•', { size: o.mark ? size + 3 : size, fill: o.bullet || o.fill || C.ink, weight: 700 }) + tl(x + 16, yy, ls, { size, fill: o.fill || C.ink }, lh); yy += ls.length * lh + gap; }
  return { svg: s, h: yy - y };
};
const turbine = (x, y, s = 1) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 60 * s}" stroke="${C.ink}" stroke-width="${3 * s}"/>` + [0, 120, 240].map((a) => { const r = (a - 90) * Math.PI / 180; return `<line x1="${x}" y1="${y - 60 * s}" x2="${x + Math.cos(r) * 30 * s}" y2="${y - 60 * s + Math.sin(r) * 30 * s}" stroke="${C.ink}" stroke-width="${3.5 * s}" stroke-linecap="round"/>`; }).join('') + `<circle cx="${x}" cy="${y - 60 * s}" r="${4 * s}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`;
// curved or multi-point arrow along an SVG path
const carrow = (d, o = {}) => `<path d="${d}" fill="none" stroke="${o.color || C.ink}" stroke-width="${o.w || 3.5}" stroke-linejoin="round" stroke-linecap="round" marker-end="url(#${o.marker || 'ah'})"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
// horizontal bar chart helper: axis box with ticks; returns svg
const hbar = (x, y, w, h, fill, edge = C.ink) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${edge}" stroke-width="2"/>`;
// ---- end helpers ----

const H2 = {
  fin: '## Why rocks, ores and minerals are finite',
  seven: '## The seven strategies',
  we1: '## Worked example 1: how long will a reserve last?',
  we2: '## Worked example 2: does making recycling easier work?',
};

// 01 Rates and dispersal
{
  let b = '';
  b += panel(30, 110, 840, 230);
  b += t(60, 148, 'A finite resource is about RATES', { size: 20, weight: 700 });
  b += t(60, 196, 'Replaced', { size: 18, weight: 700, fill: C.tealDark }) + t(60, 218, 'by the rock cycle', { size: 15.5, fill: C.muted });
  b += `<rect x="240" y="180" width="18" height="34" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + t(272, 204, 'over millions of years', { size: 17, weight: 600, fill: C.tealDark });
  b += t(60, 276, 'Extracted', { size: 18, weight: 700, fill: C.rust }) + t(60, 298, 'by people', { size: 15.5, fill: C.muted });
  b += `<rect x="240" y="260" width="600" height="34" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>` + t(540, 284, 'tonnes per day', { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += t(840, 148, 'bar lengths illustrative', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  // dispersal
  b += panel(30, 360, 840, 300);
  b += t(60, 398, 'Metals are not destroyed when used: they are spread out', { size: 20, weight: 700 });
  b += `<rect x="70" y="430" width="200" height="140" rx="10" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`;
  for (let i = 0; i < 12; i++) b += circ(110 + (i % 4) * 36, 465 + Math.floor(i / 4) * 34, 9, C.mustard, C.olive, 1.5);
  b += t(170, 598, 'concentrated ore', { size: 17, weight: 700, anchor: 'middle' }) + t(170, 620, 'easier to recover', { size: 15.5, anchor: 'middle', fill: C.tealDark });
  b += arrow(290, 500, 380, 500, { w: 5 }) + t(335, 486, 'use', { size: 16, anchor: 'middle', weight: 600 });
  const sinks = [['products', 400], ['waste', 560], ['landfill', 720]];
  sinks.forEach(([s, x], i) => { b += `<rect x="${x}" y="430" width="140" height="140" rx="10" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`; for (let k = 0; k < 4; k++) b += circ(x + 22 + ((k * 47 + i * 13) % 100), 455 + ((k * 31 + i * 19) % 90), 6, C.mustard, C.olive, 1.5); b += t(x + 70, 598, s, { size: 17, weight: 700, anchor: 'middle' }); });
  b += t(630, 626, 'much harder to recover', { size: 15.5, anchor: 'middle', fill: C.rust });
  b += t(450, 690, 'That is why reuse and recycling are part of the answer.', { size: 17, weight: 600, anchor: 'middle' });
  add('01-rates-and-dispersal',
    svg(900, 715, 'Why rocks, ores and minerals are finite', b),
    'Top: rock is replaced by the rock cycle over millions of years but extracted at tonnes per day, so use far outpaces replacement. Bottom: metal concentrated in ore is spread out by use into products, waste and landfill, where it is much harder to recover.',
    'Use is far faster than replacement, and used metal ends up spread out and hard to recover.',
    H2.fin);
}

// 02 Reduce, reuse, recycle
{
  let b = '';
  const lanes = [
    ['Reduce', 'use less in the first place', ['thinner drinks cans', 'lighter car parts', 'longer-lasting goods', 'buy fewer replacements'], '#eef5f4', C.tealDark],
    ['Reuse', 'use the object again, without processing', ['reclaimed bricks and building stone', 'refillable glass bottles', 'repaired electronics', 'second-hand machinery'], C.cream, C.olive],
    ['Recycle', 'process waste into raw material again', ['melt aluminium cans or steel', 'recover copper from cables', 'crush old concrete for aggregate'], '#fbf1ea', C.rust],
  ];
  lanes.forEach(([h, d, ex, f, e], i) => {
    const x = 30 + i * 285;
    b += panel(x, 110, 270, 330, f, e) + t(x + 135, 150, h, { size: 24, weight: 700, anchor: 'middle', fill: e });
    b += tl(x + 135, 180, wrap(d, 230, 16.5), { size: 16.5, anchor: 'middle', weight: 600 }, 21);
    b += t(x + 22, 252, 'Examples', { size: 16, weight: 700, fill: C.muted });
    b += bullets(x + 22, 280, ex, 236, { size: 16, gap: 6 }).svg;
  });
  b += panel(30, 460, 840, 90, '#ffffff', C.ink);
  b += t(450, 496, 'Reuse keeps the object; recycling breaks it down into raw material.', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 524, 'Reduce and reuse are the cheapest: no new extraction or processing.', { size: 16.5, anchor: 'middle', fill: C.muted });
  add('02-reduce-reuse-recycle',
    svg(900, 575, 'Reduce, reuse, recycle: not the same', b),
    'Three columns. Reduce: use less, such as thinner cans, lighter car parts and longer-lasting goods. Reuse: use the object again without processing, such as reclaimed bricks, refillable bottles and repaired electronics. Recycle: process waste into raw material, such as melting cans, recovering copper and crushing concrete.',
    'Reuse keeps the object; recycling turns it back into raw material.',
    H2.seven);
}

// 03 Recycling conditions
{
  let b = '';
  const c = [['Accessibility', 'collection points close by, or collection from homes and businesses'], ['Ease', 'simple sorting, clearly labelled bins, products easy to separate'], ['Education', 'people know what can be recycled, how to prepare it and why it matters']];
  c.forEach(([h, d], i) => { const x = 30 + i * 285; b += card(x, 110, 270, 130, h, d, { fill: '#eef5f4', edge: C.tealDark, tfill: C.tealDark, ts: 20, bs: 16.5, bfill: C.ink }); b += arrow(x + 135, 244, 450 + (i - 1) * 60, 288, { w: 3.5 }); });
  b += pill(250, 294, 400, 56, 'more material recycled', { fill: C.tealDark, edge: C.tealDark, color: '#ffffff', size: 19 });
  b += panel(30, 374, 410, 214, '#ffffff', C.tealDark) + t(54, 410, 'Benefits', { size: 19, weight: 700, fill: C.tealDark }) + bullets(54, 442, ['less demand for new ore: less mining, habitat loss and mining waste', 'usually less energy than new ore', 'less waste to landfill'], 370, { size: 16.5, gap: 5 }).svg;
  b += panel(460, 374, 410, 214, '#ffffff', C.rust) + t(484, 410, 'Limitations', { size: 19, weight: 700, fill: C.rust }) + bullets(484, 442, ['collection, transport and sorting cost money and use energy', 'mixed materials (phones) hard to separate', 'contamination lowers quality', 'can only supply what is thrown away'], 370, { size: 16.5, gap: 5 }).svg;
  add('03-recycling-conditions',
    svg(900, 612, 'What makes people recycle?', b),
    'Accessibility (nearby collection), ease (simple sorting and labelled bins) and education (knowing what, how and why) all lead to more material being recycled. Recycling reduces demand for new ore, usually saves energy and cuts landfill, but costs money and energy, struggles with mixed materials and contamination, and can only supply what is thrown away.',
    'Accessibility, ease and education decide how much is actually recycled.',
    H2.seven);
}

// 04 Seven strategies: one benefit, one limitation
{
  let b = '';
  b += t(330, 136, 'Benefit', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(670, 136, 'Limitation', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  const rows = [
    ['Reduce and reuse', 'cheapest: no new extraction or processing', 'depends on changing habits'],
    ['Recycling', 'less new ore, mining and landfill', 'can only supply what is thrown away'],
    ['Efficient extraction', 'more from each deposit; less waste', 'expensive; still uses up the deposit'],
    ['Avoiding depletion', 'keeps the resource for future generations', 'less income, jobs and supply now'],
    ['Legislation', 'applies to everyone; fast, large-scale change', 'no effect unless enforced'],
    ['Enforcement', 'turns laws into real change; deters illegal mining', 'costly; remote areas hard to police'],
    ['Alternative materials', 'less demand for a scarce mineral', 'alternative may be finite or harmful'],
  ];
  rows.forEach(([s, ben, lim], i) => {
    const y = 152 + i * 74;
    b += `<rect x="30" y="${y}" width="190" height="64" rx="12" fill="${C.ink}"/>` + tl(125, y + (wrap(s, 170, 16.5, true).length > 1 ? 28 : 38), wrap(s, 170, 16.5, true), { size: 16.5, weight: 700, anchor: 'middle', fill: '#ffffff' }, 20);
    b += rrect(230, y, 300, 64, '#eef5f4', C.tealDark, 2.5, 12) + tl(246, y + (wrap(ben, 270, 15.5).length > 1 ? 28 : 38), wrap(ben, 270, 15.5), { size: 15.5 }, 19);
    b += rrect(540, y, 330, 64, '#fbf1ea', C.rust, 2.5, 12) + tl(556, y + (wrap(lim, 300, 15.5).length > 1 ? 28 : 38), wrap(lim, 300, 15.5), { size: 15.5 }, 19);
  });
  b += t(450, 690, 'In a discuss answer, develop each point with “so” or “because”, then judge.', { size: 16.5, anchor: 'middle', fill: C.muted });
  add('04-seven-strategies-weighed',
    svg(900, 715, 'Seven strategies weighed up', b),
    'One benefit and one limitation for each of the seven strategies: reduce and reuse, recycling, efficient extraction, avoiding depletion, legislation, enforcement and alternative materials. For example, legislation applies to everyone but has no effect unless enforced.',
    'Every strategy has a benefit and a limitation; legislation needs enforcement to work.',
    H2.seven);
}

// 05 Alternative materials
{
  let b = '';
  const rows = [['copper telecom cables', 'fibre-optic cables (glass)'], ['copper pipes', 'plastic pipes'], ['newly quarried rock', 'recycled crushed concrete']];
  b += t(220, 136, 'Scarce material', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + t(680, 136, 'Alternative', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([a, z], i) => {
    const y = 152 + i * 92;
    b += rrect(30, y, 380, 72, '#fbf1ea', C.rust, 2.5, 12) + t(220, y + 44, a, { size: 18, weight: 700, anchor: 'middle' });
    b += arrow(416, y + 36, 484, y + 36, { w: 5 });
    b += rrect(490, y, 380, 72, '#eef5f4', C.tealDark, 2.5, 12) + t(680, y + 44, z, { size: 18, weight: 700, anchor: 'middle' });
  });
  b += panel(30, 440, 410, 160, '#ffffff', C.tealDark) + t(54, 476, 'Benefits', { size: 19, weight: 700, fill: C.tealDark }) + bullets(54, 508, ['less demand for a scarce mineral', 'may be lighter, cheaper or better'], 370, { size: 16.5, gap: 5 }).svg;
  b += panel(460, 440, 410, 160, '#ffffff', C.rust) + t(484, 476, 'Limitations', { size: 19, weight: 700, fill: C.rust }) + bullets(484, 508, ['may itself be finite or harmful: plastics are made from petroleum', 'may cost more or perform less well', 'switching may need new equipment'], 370, { size: 16.5, gap: 5 }).svg;
  add('05-alternative-materials',
    svg(900, 625, 'Alternative materials', b),
    'Three swaps: fibre-optic glass cables replace copper telecom cables, plastic pipes replace copper pipes, and recycled crushed concrete replaces newly quarried rock. Alternatives cut demand for scarce minerals and may be lighter or cheaper, but may themselves be finite or harmful, cost more or need new equipment.',
    'Swapping materials eases demand for scarce minerals, but the substitute has its own costs.',
    H2.seven);
}

// 06 Reserve lifetime graph
{
  let b = panel(30, 110, 560, 520);
  const x0 = 120, y0 = 530, xk = 9.5, yk = 0.6; // px per year, px per Mt
  b += line(x0, y0, x0 + 45 * xk, y0, { w: 3 }) + line(x0, y0, x0, y0 - 650 * yk, { w: 3 });
  for (let v = 0; v <= 600; v += 100) b += line(x0 - 8, y0 - v * yk, x0, y0 - v * yk, { w: 2.5 }) + t(x0 - 14, y0 - v * yk + 6, String(v), { size: 15.5, anchor: 'end' }) + (v ? line(x0 + 2, y0 - v * yk, x0 + 45 * xk, y0 - v * yk, { color: '#e3e9e8', w: 1.5 }) : '');
  for (let yr = 0; yr <= 40; yr += 10) b += line(x0 + yr * xk, y0, x0 + yr * xk, y0 + 8, { w: 2.5 }) + t(x0 + yr * xk, y0 + 28, String(yr), { size: 15.5, anchor: 'middle' });
  b += t(x0 + 22 * xk, y0 + 56, 'years from now', { size: 16, anchor: 'middle', fill: C.muted });
  b += `<text x="58" y="${y0 - 180}" font-size="16" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 58 ${y0 - 180})">reserve left (million tonnes)</text>`;
  b += path(`M${x0},${y0 - 600 * yk} L${x0 + 30 * xk},${y0}`, { stroke: C.rust, w: 4.5 }) + path(`M${x0},${y0 - 600 * yk} L${x0 + 40 * xk},${y0}`, { stroke: C.tealDark, w: 4.5 });
  b += circ(x0 + 30 * xk, y0, 7, C.rust) + circ(x0 + 40 * xk, y0, 7, C.tealDark);
  b += t(x0 + 16, y0 - 60, '20 Mt a year: 30 years', { size: 16, weight: 700, fill: C.rust }) + tag(x0 + 250, y0 - 190, '15 Mt a year: 40 years', { size: 16, fill: C.tealDark });
  b += t(580, 140, 'invented figures', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += panel(610, 110, 260, 520);
  b += t(632, 148, 'Current rate', { size: 18, weight: 700, fill: C.rust }) + t(632, 176, '600 ÷ 20 = 30 years', { size: 16.5 });
  b += t(632, 226, 'A quarter met by', { size: 18, weight: 700, fill: C.tealDark }) + t(632, 248, 'recycling and reduction', { size: 18, weight: 700, fill: C.tealDark }) + tl(632, 276, ['20 × 0.75 = 15 Mt a year', '600 ÷ 15 = 40 years'], { size: 16.5 }, 23);
  b += tl(632, 360, wrap('Strategies extend the reserve but do not make it renewable.', 220, 16), { size: 16, weight: 600 }, 21);
  b += tl(632, 456, wrap('Assumes demand stays the same: if it rises, the reserve runs out sooner.', 220, 16), { size: 16, fill: C.muted }, 21);
  add('06-reserve-lifetime',
    svg(900, 655, 'Worked example: how long will the reserve last?', b),
    'A graph of a 600 million tonne reserve. Extracting 20 million tonnes a year empties it in 30 years; if recycling and reduction meet a quarter of demand, extraction falls to 15 million tonnes a year and it lasts 40 years. The estimate assumes demand stays the same.',
    'Cutting extraction from 20 to 15 Mt a year stretches the reserve from 30 to 40 years.',
    H2.we1);
}

// 07 Recycling scheme
{
  let b = panel(30, 110, 840, 300);
  const x0 = 200, w = 640, k = w / 18000;
  const bar = (y, rec, lab, pct) => t(x0 - 16, y + 34, lab, { size: 18, weight: 700, anchor: 'end' }) + `<rect x="${x0}" y="${y}" width="${w}" height="54" fill="#e6ebea" stroke="${C.ink}" stroke-width="2.5"/><rect x="${x0}" y="${y}" width="${rec * k}" height="54" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x0 + rec * k / 2, y + 34, `${rec.toLocaleString('en-GB')} t = ${pct}`, { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += t(60, 148, 'Metal waste: 18,000 t a year', { size: 19, weight: 700 }) + t(840, 148, 'invented figures', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += bar(176, 4500, 'Before', '25%') + bar(256, 7200, 'After', '40%');
  b += t(x0 + 7200 * k + 16, 290, 'not recycled: 60%', { size: 16.5, weight: 600, fill: C.muted });
  b += t(60, 372, 'Kerbside collection made recycling more accessible and easier.', { size: 17 });
  b += panel(30, 430, 410, 115, C.cream, C.olive) + t(54, 468, 'Mass recycled rose by', { size: 18, weight: 700 }) + t(54, 498, '(7,200 − 4,500) ÷ 4,500', { size: 17 }) + t(54, 524, '× 100 = 60%', { size: 17 });
  b += panel(460, 430, 410, 115, '#eef5f4', C.tealDark) + tl(484, 468, wrap('60% of the metal is still not recycled, so education is needed as well.', 360, 17), { size: 17, weight: 600 }, 23);
  add('07-recycling-scheme',
    svg(900, 570, 'Worked example: does easier recycling work?', b),
    'Two bars out of 18,000 tonnes of metal waste. Before a kerbside scheme 4,500 tonnes (25%) were recycled; after it, 7,200 tonnes (40%). The mass recycled rose by 60%, but 60% of the metal is still not recycled, suggesting education is also needed.',
    'Recycling rose from 25% to 40%, a 60% increase in mass, but most metal is still not recycled.',
    H2.we2);
}
