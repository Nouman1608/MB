import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-plastic-pollution';
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
  five: '## The five descriptions',
  imp: '## Impacts on marine ecosystems (3.6.6)',
  str: '## Strategies for managing the impacts (3.6.7)',
  we1: '## Worked example 1: decomposition data',
  we2: '## Worked example 2: an annotated model answer',
};
const fish = (x, y, s = 1, fill = C.blue, dir = 1) => `<path d="M${x - 16 * s * dir},${y} Q${x},${y - 10 * s} ${x + 14 * s * dir},${y} Q${x},${y + 10 * s} ${x - 16 * s * dir},${y} Z M${x + 12 * s * dir},${y} L${x + 24 * s * dir},${y - 8 * s} L${x + 24 * s * dir},${y + 8 * s} Z" fill="${fill}" stroke="${C.ink}" stroke-width="1.6" stroke-linejoin="round"/>`;
const dots = (x, y, n, w = 40, h = 20, col = C.rust) => { let s = ''; for (let i = 0; i < n; i++) s += circ(x + ((i * 13) % Math.max(w, 1)), y + ((i * 7) % Math.max(h, 1)), 2.8, col, col, 0.5); return s; };

// 01 Two questions: raw material and end of life
{
  let b = '';
  const gx = 250, gy = 170, cw = 300, ch = 170;
  b += t(gx + cw, 132, 'What happens at end of life?', { size: 19, weight: 700, anchor: 'middle' });
  b += t(gx + cw / 2, 158, 'biodegradable', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(gx + cw * 1.5, 158, 'non-biodegradable', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += `<text x="58" y="${gy + ch}" font-size="19" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 58 ${gy + ch})">What is it made from?</text>`;
  b += tl(160, gy + ch / 2 - 6, ['fossil fuels', '(crude oil,', 'natural gas)'], { size: 16.5, weight: 700, anchor: 'middle' }, 21);
  b += tl(160, gy + ch * 1.5 - 6, ['biological', 'materials (plant', 'starch, sugar)'], { size: 16.5, weight: 700, anchor: 'middle' }, 21);
  const cell = (c, r, fill, edge) => rrect(gx + c * cw + 6, gy + r * ch + 6, cw - 12, ch - 12, fill, edge, 2.5, 12);
  b += cell(0, 0, '#f4f6f6', C.panelEdge) + cell(1, 0, '#fbf1ea', C.rust) + cell(0, 1, '#eef5f4', C.tealDark) + cell(1, 1, '#eef5f4', C.tealDark);
  b += tl(gx + cw / 2, gy + 70, ['conventional plastics', 'are generally', 'non-biodegradable'], { size: 15.5, anchor: 'middle', fill: C.muted }, 20);
  b += t(gx + cw * 1.5, gy + 64, 'Conventional plastics', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) + tl(gx + cw * 1.5, gy + 94, ['made from fossil fuels;', 'generally non-biodegradable'], { size: 16, anchor: 'middle' }, 21);
  b += t(gx + cw / 2, gy + ch + 64, 'Bioplastic', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + tl(gx + cw / 2, gy + ch + 94, ['that is biodegradable'], { size: 16, anchor: 'middle' }, 21);
  b += t(gx + cw * 1.5, gy + ch + 64, 'Bioplastic', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + tl(gx + cw * 1.5, gy + ch + 94, ['that is non-biodegradable,', 'e.g. from sugar cane'], { size: 16, anchor: 'middle' }, 21);
  b += `<rect x="${gx + 2}" y="${gy + ch + 2}" width="${cw * 2 - 4}" height="${ch - 4}" rx="14" fill="none" stroke="${C.tealDark}" stroke-width="4" stroke-dasharray="12 7"/>`;
  b += panel(30, 530, 840, 95, C.cream, C.olive);
  b += t(450, 568, '“Bioplastic” does NOT mean “biodegradable”.', { size: 21, weight: 700, anchor: 'middle' });
  b += t(450, 600, 'Bioplastics can be either: some are as persistent as conventional plastics.', { size: 17, anchor: 'middle' });
  add('01-made-from-vs-end-of-life',
    svg(900, 650, 'Two questions about any plastic', b),
    'A two-by-two grid. Rows ask what a plastic is made from: fossil fuels or biological materials. Columns ask what happens at end of life: biodegradable or non-biodegradable. Conventional plastics are made from fossil fuels and are generally non-biodegradable. Bioplastics, made from biological materials, fill both columns: they can be biodegradable or non-biodegradable.',
    'Raw material and end of life are separate questions: a bioplastic can be non-biodegradable.',
    H2.five);
}

// 02 How biodegradable plastics decompose
{
  let b = '';
  b += rrect(40, 140, 200, 120, '#ffffff', C.ink, 2.5, 12) + t(140, 190, 'Biodegradable', { size: 18, weight: 700, anchor: 'middle' }) + t(140, 216, 'plastic', { size: 18, weight: 700, anchor: 'middle' }) + t(140, 242, '(designed to decompose)', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(244, 200, 330, 200, { w: 6 });
  b += rrect(336, 140, 210, 120, C.cream, C.olive, 2.5, 12) + t(441, 182, 'bacteria', { size: 19, weight: 700, anchor: 'middle' }) + t(441, 208, 'and fungi', { size: 19, weight: 700, anchor: 'middle' }) + t(441, 238, 'in water or soil', { size: 15.5, anchor: 'middle', fill: C.muted });
  b += arrow(550, 200, 620, 200, { w: 6 });
  ['water', 'biomass', 'carbon dioxide', 'methane*'].forEach((s, i) => (b += pill(628, 116 + i * 46, 230, 38, s, { fill: '#eef5f4', edge: C.tealDark, size: 16.5 })));
  b += t(860, 316, '*where oxygen is scarce, e.g. deep in landfill', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += t(450, 368, 'The RATE depends on biotic and abiotic factors', { size: 20, weight: 700, anchor: 'middle' });
  b += card(30, 386, 260, 130, 'Biotic', 'the number and type of bacteria and fungi present', { fill: '#ffffff', edge: C.tealDark, tfill: C.tealDark, ts: 19, bs: 16.5, bfill: C.ink });
  b += card(306, 386, 564, 130, 'Abiotic', 'temperature, moisture, oxygen availability, light and the thickness of the item', { fill: '#ffffff', edge: C.olive, tfill: C.olive, ts: 19, bs: 16.5, bfill: C.ink });
  b += card(30, 536, 410, 106, 'Fast: industrial composting', 'warm, moist, controlled conditions', { fill: '#eef5f4', edge: C.tealDark, tfill: C.tealDark, ts: 18.5, bs: 16.5, bfill: C.ink });
  b += card(460, 536, 410, 106, 'Slow: deep in the sea', 'cold, dark, low oxygen: a “biodegradable” bag may persist a long time', { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, ts: 18.5, bs: 16.5, bfill: C.ink });
  add('02-biodegradation',
    svg(900, 665, 'How biodegradable plastics break down', b),
    'A biodegradable plastic is decomposed by bacteria and fungi in water or soil into water, biomass, carbon dioxide and, where oxygen is scarce, methane. The rate depends on biotic factors (the decomposers present) and abiotic factors (temperature, moisture, oxygen, light, thickness): fast in industrial composting, slow in cold, dark, deep sea water.',
    'Decomposers turn biodegradable plastic into water, biomass, CO2 and methane, at a rate set by conditions.',
    H2.five);
}

// 03 Two routes to microplastics
{
  let b = '';
  b += panel(30, 110, 410, 330, '#fbf1ea', C.rust) + t(235, 146, 'Route 1: breakdown', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
  // bottle breaking into pieces
  b += `<rect x="70" y="190" width="56" height="120" rx="14" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/><rect x="86" y="172" width="24" height="20" rx="4" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += arrow(140, 250, 190, 250, { w: 3.5 });
  b += `<path d="M205,225 l26,-6 l6,24 l-24,10 z M245,260 l22,4 l-6,22 l-20,-6 z M210,275 l16,2 l-4,16 l-14,-4 z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`;
  b += arrow(282, 250, 320, 250, { w: 3.5 });
  for (let i = 0; i < 16; i++) b += `<rect x="${335 + (i % 4) * 18}" y="${222 + Math.floor(i / 4) * 16}" width="7" height="6" fill="${C.tealDark}"/>`;
  b += tl(235, 352, ['sunlight, waves and abrasion break', 'non-biodegradable plastics into', 'ever smaller fragments'], { size: 16.5, anchor: 'middle' }, 22);
  b += panel(460, 110, 410, 330, '#eef5f4', C.tealDark) + t(665, 146, 'Route 2: made small', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += `<rect x="520" y="200" width="70" height="100" rx="10" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/><rect x="532" y="182" width="46" height="20" rx="4" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
  for (let i = 0; i < 12; i++) b += circ(534 + (i % 4) * 14, 228 + Math.floor(i / 4) * 18, 3.5, C.tealDark, C.tealDark, 1);
  b += circ(720, 250, 46, '#ffffff', C.ink, 2.5) + circ(720, 250, 30, C.tealLight, C.ink, 2) + path('M700,240 q10,-12 20,0 q10,12 20,0 M700,258 q10,-12 20,0 q10,12 20,0', { stroke: C.blue, w: 2.5 });
  b += t(545, 326, 'cosmetics, scrubs,', { size: 15.5, anchor: 'middle', fill: C.muted }) + t(545, 345, 'cleaning products', { size: 15.5, anchor: 'middle', fill: C.muted });
  b += t(745, 326, 'fibres shed when', { size: 15.5, anchor: 'middle', fill: C.muted }) + t(745, 345, 'washing synthetic clothes', { size: 15.5, anchor: 'middle', fill: C.muted });
  b += tl(665, 392, ['used in commercial products'], { size: 16.5, anchor: 'middle', weight: 600 }, 22);
  // 5 mm scale
  b += panel(30, 460, 840, 160, C.cream, C.olive);
  b += t(60, 498, 'Microplastics: less than 5 mm long', { size: 20, weight: 700 });
  b += line(70, 560, 270, 560, { w: 3 }) + line(70, 548, 70, 572, { w: 3 }) + line(270, 548, 270, 572, { w: 3 }) + t(170, 594, '5 mm (enlarged)', { size: 15.5, anchor: 'middle', fill: C.muted });
  for (let i = 0; i < 6; i++) b += `<rect x="${90 + i * 28}" y="${530}" width="${10 + (i % 3) * 4}" height="8" fill="${C.tealDark}"/>`;
  b += tl(330, 538, ['small enough to pass through many filters', 'and to be eaten by plankton'], { size: 17 }, 24);
  add('03-microplastic-sources',
    svg(900, 645, 'Two routes to microplastics', b),
    'Route 1: sunlight, waves and abrasion break non-biodegradable plastic, such as a bottle, into ever smaller fragments. Route 2: tiny particles are made for commercial products such as cosmetics, scrubs and cleaning products, and fibres are shed when synthetic clothes are washed. Microplastics are less than 5 mm long, small enough to pass through filters and be eaten by plankton.',
    'Microplastics come from breakdown of larger plastic and from products made with them.',
    H2.five);
}

// 04 Four impacts
{
  let b = '';
  const W = 410, Hh = 270;
  const box = (x, y, n, h, d) => panel(x, y, W, Hh) + badge(x + 30, y + 34, 18, n, C.mustard) + t(x + 60, y + 42, h, { size: 20, weight: 700 }) + tl(x + 24, y + 186, wrap(d, W - 48, 16), { size: 16, fill: C.muted }, 21);
  // 1 visual
  let y = 110;
  b += box(30, y, '1', 'Visual pollution', 'litter spoils coasts, reduces tourism and coastal value; clean-ups cost councils money');
  b += `<rect x="60" y="${y + 70}" width="350" height="50" fill="${C.tealLight}"/><rect x="60" y="${y + 120}" width="350" height="34" fill="${C.sand}"/>`;
  [[100, 130], [170, 136], [250, 128], [320, 138], [140, 110], [290, 96]].forEach(([x, yy], i) => (b += `<rect x="${x}" y="${y + yy}" width="${16 + (i % 3) * 4}" height="10" rx="2" fill="${[C.rust, C.blue, C.mustard, C.tealDark, '#ffffff', C.rust][i]}" stroke="${C.ink}" stroke-width="1.5"/>`));
  // 2 entanglement
  b += box(460, y, '2', 'Entanglement', 'nets, ropes, straps and loops trap turtles, seals, seabirds, fish and whales; lost nets keep catching for years');
  b += `<rect x="490" y="${y + 70}" width="350" height="84" fill="${C.tealLight}"/>`;
  for (let i = 0; i < 7; i++) b += line(540 + i * 40, y + 74, 520 + i * 44, y + 150, { color: C.muted, w: 1.5 });
  b += path(`M500,${y + 90} Q660,${y + 120} 830,${y + 86} M505,${y + 130} Q660,${y + 150} 830,${y + 124}`, { stroke: C.muted, w: 2 });
  b += `<ellipse cx="665" cy="${y + 112}" rx="34" ry="21" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>` + circ(704, y + 106, 9, C.grass);
  // 3 mistaken
  y = 400;
  b += box(30, y, '3', 'Mistaken for food', 'bags look like jellyfish to turtles; fragments look like prey; swallowed plastic blocks the gut, so the animal feels full and starves');
  b += `<rect x="60" y="${y + 66}" width="350" height="94" fill="${C.tealLight}"/>`;
  b += `<path d="M110,${y + 96} q30,-28 60,0 l0,8 q-30,6 -60,0 z" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + path(`M120,${y + 104} q-4,26 6,40 M140,${y + 104} q4,26 -4,40 M160,${y + 104} q-4,26 6,40`, { stroke: C.muted, w: 2 });
  b += `<path d="M285,${y + 96} q25,-26 50,0 l0,8 q-25,5 -50,0 z" fill="${C.rust}" opacity="0.75" stroke="${C.ink}" stroke-width="2"/>` + path(`M293,${y + 104} q-3,26 5,40 M310,${y + 104} q3,26 -3,40 M327,${y + 104} q-3,26 5,40`, { stroke: C.rust, w: 2 });
  b += t(222, y + 122, 'looks like', { size: 15.5, anchor: 'middle', weight: 600 }) + tag(140, y + 156, 'bag', { size: 15, anchor: 'middle', bg: C.tealLight, op: 1 }) + tag(310, y + 156, 'jellyfish', { size: 15, anchor: 'middle', bg: C.tealLight, op: 1 });
  // 4 bio
  b += box(460, y, '4', 'Bioaccumulation, biomagnification', 'plastic and absorbed toxic chemicals build up in an organism, then concentrate up the food chain to people who eat seafood');
  b += circ(510, y + 110, 7, C.tealLight) + dots(505, y + 106, 1, 6, 6) + arrow(522, y + 110, 552, y + 110, { w: 2.5 }) + fish(585, y + 110, 1, C.tealLight) + dots(574, y + 106, 3, 18, 8) + arrow(614, y + 110, 646, y + 110, { w: 2.5 }) + fish(690, y + 110, 1.6, C.tealLight) + dots(670, y + 102, 8, 34, 16) + arrow(734, y + 110, 764, y + 110, { w: 2.5 }) + person(800, y + 132, 1.1, C.ink);
  b += t(510, y + 152, 'plankton', { size: 15, anchor: 'middle', fill: C.muted }) + t(585, y + 152, 'fish', { size: 15, anchor: 'middle', fill: C.muted }) + t(690, y + 152, 'predator', { size: 15, anchor: 'middle', fill: C.muted }) + t(800, y + 152, 'people', { size: 15, anchor: 'middle', fill: C.muted });
  add('04-four-impacts',
    svg(900, 695, 'Four impacts on marine ecosystems', b),
    'Four panels. Visual pollution: litter on a beach spoils coasts and tourism. Entanglement: nets, ropes and loops trap turtles, seals, seabirds, fish and whales. Mistaken for food: a floating bag looks like a jellyfish to a turtle. Bioaccumulation and biomagnification: plastic and its chemicals build up from plankton to fish to predators and people.',
    'Plastic harms marine life by looks, by trapping, by being eaten and by building up in food chains.',
    H2.imp);
}

// 05 Strategies along the path to the sea
{
  let b = '';
  const stage = [['Plastic used', 230], ['Plastic thrown away', 420], ['Plastic reaches rivers and sea', 610]];
  const ys = 140;
  b += rrect(40, ys, 220, 70, '#ffffff', C.ink, 2.5, 12) + t(150, ys + 43, 'Plastic used', { size: 18, weight: 700, anchor: 'middle' });
  b += arrow(264, ys + 35, 336, ys + 35, { w: 5 });
  b += rrect(340, ys, 220, 70, '#ffffff', C.ink, 2.5, 12) + t(450, ys + 43, 'Plastic waste', { size: 18, weight: 700, anchor: 'middle' });
  b += arrow(564, ys + 35, 636, ys + 35, { w: 5 });
  b += rrect(640, ys, 220, 70, C.teal, C.ink, 2.5, 12) + t(750, ys + 34, 'Rivers', { size: 18, weight: 700, anchor: 'middle' }) + t(750, ys + 56, 'and the sea', { size: 18, weight: 700, anchor: 'middle' });
  b += carrow(`M150,${ys + 112} L150,${ys + 76}`, { w: 3, color: C.tealDark, marker: 'ahT' }) + carrow(`M600,${ys + 112} L600,${ys + 40}`, { w: 3, color: C.tealDark, marker: 'ahT' });
  b += card(30, 262, 400, 170, 'Reduce the total used', '', { fill: '#eef5f4', edge: C.tealDark, tfill: C.tealDark, ts: 19 });
  b += bullets(50, 330, ['Alternative packaging: paper, card, glass, metal, reusable', 'Avoid single-use plastics: charges or bans on bags, straws, cutlery, cups'], 360, { size: 16 }).svg;
  b += card(470, 262, 400, 170, 'Stop it leaking out', '', { fill: '#eef5f4', edge: C.tealDark, tfill: C.tealDark, ts: 19 });
  b += bullets(490, 330, ['Safe disposal: bins, collection, managed landfill, nets on drains', 'Recycling: collected, sorted, made into new products'], 360, { size: 16 }).svg;
  b += panel(30, 452, 840, 90, C.cream, C.olive) + t(60, 488, 'Legislation and enforcement backs all of these up', { size: 19, weight: 700 }) + t(60, 516, 'e.g. bans on microbeads, dumping at sea or littering, with fines', { size: 16.5 });
  b += t(450, 580, 'Limits: behaviour change, cost and infrastructure, hard-to-recycle plastics,', { size: 16, anchor: 'middle', fill: C.muted }) + t(450, 602, 'and plastic crosses borders on ocean currents.', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-strategies-path',
    svg(900, 625, 'Where each strategy acts', b),
    'Plastic moves from use, to waste, to rivers and the sea. Alternative packaging and avoiding single-use plastics reduce the total used; safe disposal and recycling stop waste leaking to rivers and the sea; legislation and enforcement, such as bans on microbeads, dumping and littering, back them all up.',
    'Cut the amount used, stop waste leaking out, and back both with laws.',
    H2.str);
}

// 06 Decomposition data
{
  let b = panel(30, 110, 520, 500);
  const x0 = 120, y0 = 520, k = 5; // px per %
  b += line(x0, y0, 530, y0, { w: 3 }) + line(x0, y0, x0, y0 - 70 * k, { w: 3 });
  for (let v = 0; v <= 70; v += 10) b += line(x0 - 8, y0 - v * k, x0, y0 - v * k, { w: 2.5 }) + t(x0 - 14, y0 - v * k + 6, String(v), { size: 15.5, anchor: 'end' }) + (v ? line(x0 + 2, y0 - v * k, 530, y0 - v * k, { color: '#e3e9e8', w: 1.5 }) : '');
  b += `<text x="58" y="${y0 - 170}" font-size="16" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 58 ${y0 - 170})">mass lost in 12 weeks (%)</text>`;
  const bars = [[150, 60, C.tealDark, 'A', 'soil'], [230, 10, C.teal, 'A', 'seawater'], [350, 0, C.rust, 'B', 'soil'], [430, 0, C.rust, 'B', 'seawater']];
  bars.forEach(([x, v, f, p, c]) => { b += `<rect x="${x}" y="${y0 - v * k}" width="66" height="${Math.max(v * k, 2)}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x + 33, y0 - v * k - 10, v + '%', { size: 18, weight: 700, anchor: 'middle' }) + t(x + 33, y0 + 26, c, { size: 15.5, anchor: 'middle' }); });
  b += t(222, y0 + 52, 'Plastic A', { size: 17, weight: 700, anchor: 'middle' }) + t(422, y0 + 52, 'Plastic B', { size: 17, weight: 700, anchor: 'middle' });
  b += t(540, 140, 'invented data', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += panel(570, 110, 300, 500);
  b += t(592, 148, 'Calculations', { size: 19, weight: 700 }) + tl(592, 178, ['A in soil: (5.0 − 2.0) ÷ 5.0', '× 100 = 60%', 'A in seawater: (5.0 − 4.5)', '÷ 5.0 × 100 = 10%'], { size: 16 }, 22);
  b += t(592, 290, 'Interpret', { size: 19, weight: 700, fill: C.tealDark }) + tl(592, 318, wrap('A is biodegradable: six times faster in soil, with more decomposers and warmth. B lost nothing: non-biodegradable.', 255, 16), { size: 16 }, 21);
  b += t(592, 470, 'Evaluate', { size: 19, weight: 700, fill: C.rust }) + tl(592, 498, wrap('one strip per condition: repeat; measure temperature in both', 255, 16), { size: 16 }, 21);
  add('06-decomposition-data',
    svg(900, 635, 'Worked example: which plastic decomposes?', b),
    'A bar chart of mass lost in 12 weeks. Plastic A lost 60% in moist soil and 10% in cold seawater; plastic B lost nothing in either. A behaves as a biodegradable plastic, decomposing six times faster in soil; B behaves as non-biodegradable. Repeats and temperature records would improve the test.',
    'Plastic A lost 60% in soil but 10% in cold seawater; B lost nothing.',
    H2.we1);
}

// 07 Microplastics to a seabird
{
  let b = '';
  const steps = [
    ['Microplastics eaten', 'plankton and small fish mistake them for food', 2],
    ['Build-up in each fish', 'toxic chemicals on the plastic accumulate over time (bioaccumulation)', 6],
    ['Seabird eats many fish', 'concentration in the bird is much higher than in any one fish (biomagnification)', 14],
    ['Harm to the bird', 'damaged health and reduced breeding success', 0],
  ];
  steps.forEach(([h, d, n], i) => {
    const y = 110 + i * 130;
    b += rrect(30, y, 840, 110, i === 3 ? C.cream : '#ffffff', i === 3 ? C.olive : C.panelEdge, 2.5, 14);
    b += badge(70, y + 55, 22, String(i + 1), C.mustard);
    b += t(110, y + 44, h, { size: 20, weight: 700 }) + t(110 + h.length * 11.4 + 14, y + 44, '[1 mark]', { size: 16, weight: 700, fill: C.olive }) + tl(110, y + 74, wrap(d, 520, 16.5), { size: 16.5, fill: C.muted }, 21);
    if (i === 0) b += circ(720, y + 55, 10, C.tealLight) + dots(715, y + 50, 2, 10, 10) + fish(790, y + 55, 1.2, C.tealLight) + dots(778, y + 50, 2, 20, 8);
    if (i === 1) b += fish(750, y + 55, 2, C.tealLight) + dots(728, y + 45, 6, 40, 20);
    if (i === 2) b += `<path d="M700,${y + 70} q30,-40 70,-20 l40,-20 l-14,22 q30,10 10,30 q-50,10 -106,-12 z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>` + dots(735, y + 55, 12, 46, 18);
    if (i < 3) b += arrow(450, y + 112, 450, y + 128, { w: 3 });
  });
  b += t(450, 650, 'Each step names the organism and the process, and the answer ends with an effect on the bird.', { size: 16, anchor: 'middle', fill: C.muted });
  add('07-microplastics-seabird',
    svg(900, 675, 'How microplastics harm a seabird', b),
    'Four steps, each worth a mark. Plankton and small fish mistake microplastics for food; toxic chemicals on the plastic build up in each fish (bioaccumulation); the seabird eats many fish so its concentration is much higher (biomagnification); the bird’s health and breeding success suffer. Dots show rising concentration.',
    'Four marks: eaten, accumulates, magnifies, harms the bird.',
    H2.we2);
}
