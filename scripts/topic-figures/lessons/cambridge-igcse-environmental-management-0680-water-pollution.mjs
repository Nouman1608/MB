import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-water-pollution';
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
  src: '## Sources of water pollution',
  imp: '## Impacts on people and the environment',
  str: '## Strategies for improving water quality',
  we1: '## Worked example 1: interpreting biomagnification data',
};
const fish = (x, y, s = 1, fill = C.blue, dir = 1) => `<path d="M${x - 16 * s * dir},${y} Q${x},${y - 10 * s} ${x + 14 * s * dir},${y} Q${x},${y + 10 * s} ${x - 16 * s * dir},${y} Z M${x + 12 * s * dir},${y} L${x + 24 * s * dir},${y - 8 * s} L${x + 24 * s * dir},${y + 8 * s} Z" fill="${fill}" stroke="${C.ink}" stroke-width="1.6" stroke-linejoin="round"/>`;

// 01 Five sources into one river
{
  let b = '';
  b += `<rect x="30" y="110" width="840" height="470" rx="14" fill="#e3ecd9"/>`;
  const river = 'M30,470 C200,430 300,520 450,480 C600,440 700,510 870,470';
  b += path(river, { stroke: C.ink, w: 46 }) + path(river, { stroke: C.teal, w: 40 });
  b += t(840, 478, 'river', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
  // 1 domestic: houses
  b += house(70, 250, 1.3) + house(130, 262, 1.1) + arrow(120, 300, 150, 440, { color: C.rust, w: 3.5, marker: 'ahR' });
  // 2 sewage: pipe
  b += path('M250,250 L250,330 L280,400', { stroke: C.rockDark, w: 10 }) + `<rect x="230" y="220" width="40" height="34" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + arrow(282, 404, 292, 444, { color: C.rust, w: 3.5, marker: 'ahR' });
  // 3 plastic litter
  [[380, 330, C.blue], [410, 360, C.mustard], [360, 390, C.rust], [430, 400, C.tealDark]].forEach(([x, y, c]) => (b += `<rect x="${x}" y="${y}" width="18" height="11" rx="2" fill="${c}" stroke="${C.ink}" stroke-width="1.5"/>`));
  [[470, 470], [520, 462], [600, 455]].forEach(([x, y], i) => (b += `<rect x="${x}" y="${y}" width="15" height="9" rx="2" fill="${[C.blue, C.mustard, C.rust][i]}" stroke="${C.ink}" stroke-width="1.5"/>`));
  // 4 industry
  b += factory(560, 320, 1.4) + path('M620,320 L620,400 L640,440', { stroke: C.olive, w: 6 }) + arrow(640, 440, 646, 452, { color: C.rust, w: 3.5, marker: 'ahR' });
  // 5 agriculture field
  b += `<path d="M700,280 L860,250 L860,380 L700,400 Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>`;
  for (let i = 0; i < 5; i++) b += line(712 + i * 30, 395 - i * 4, 712 + i * 30 + 20, 262 - i * 4 + 20, { color: C.grass, w: 3 });
  b += arrow(760, 405, 740, 450, { color: C.rust, w: 3.5, marker: 'ahR' }) + t(780, 432, 'runoff', { size: 15, weight: 600, fill: C.rust });
  b += path('M820,385 L820,520', { stroke: C.blue, w: 2.5, extra: 'stroke-dasharray="5 5"' }) + t(828, 545, 'leaching', { size: 15, weight: 600, fill: C.blue });
  const bd = [[1, 100, 200], [2, 250, 190], [3, 400, 300], [4, 600, 220], [5, 780, 230]];
  bd.forEach(([n, x, y]) => (b += badge(x, y, 17, String(n), C.mustard)));
  b += t(60, 140, 'schematic, not to scale', { size: 15, fill: C.muted, italic: true });
  const key = [
    ['Domestic waste', 'detergents (phosphates), food waste, oils, chemicals, litter'],
    ['Sewage', 'disease-causing bacteria and organic matter; leaks and storm overflows'],
    ['Plastic waste', 'litter, landfill and drains; slow to decompose, carried to the sea'],
    ['Industrial processes', 'heavy metals (mercury, lead), solvents, acids, heated water'],
    ['Agricultural practices', 'nitrate and phosphate fertilisers, manure, slurry, pesticides'],
  ];
  key.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * 430, y = 610 + Math.floor(i / 2) * 76;
    b += badge(x + 20, y + 20, 16, String(i + 1), C.mustard) + t(x + 46, y + 26, h, { size: 18, weight: 700 }) + tl(x + 46, y + 50, wrap(d, 370, 15.5), { size: 15.5, fill: C.muted }, 19);
  });
  add('01-five-sources',
    svg(900, 840, 'Five sources of water pollution', b),
    'A schematic catchment, not to scale, with five numbered sources draining to one river: domestic waste from houses, sewage from a pipe, plastic litter, industrial wastewater from a factory, and fertiliser, manure and pesticides from farmland, reaching the river by runoff over the surface and by leaching through the soil.',
    'Domestic waste, sewage, plastic, industry and farming all drain to the same river.',
    H2.src);
}

// 02 Eutrophication in six linked steps
{
  let b = '';
  const steps = [
    ['Nutrients arrive', 'nitrate and phosphate ions leach from fields or come in sewage and runoff'],
    ['Algal bloom', 'algae and surface plants grow rapidly'],
    ['Light blocked', 'plants lower in the water cannot photosynthesise and die'],
    ['Algae die', 'in large numbers as they run short of nutrients'],
    ['Bacteria decompose', 'their population rises; their RESPIRATION uses up dissolved oxygen'],
    ['Fish die or leave', 'oxygen falls too low for aerobic animals'],
  ];
  steps.forEach(([h, d], i) => {
    const y = 110 + i * 92, hot = i === 4;
    b += rrect(30, y, 560, 78, hot ? C.cream : '#ffffff', hot ? C.olive : C.panelEdge, 2.5, 12) + badge(66, y + 39, 20, String(i + 1), C.mustard);
    b += t(100, y + 32, h, { size: 19, weight: 700 }) + tl(100, y + 56, wrap(d, 470, 15.5), { size: 15.5, fill: C.muted }, 19);
    if (i < 5) b += arrow(310, y + 80, 310, y + 90, { w: 3 });
  });
  // shortcut for organic content
  b += carrow('M594,149 C700,149 720,480 596,480', { color: C.rust, w: 3.5, marker: 'ahR', dash: '9 6' });
  b += rrect(640, 250, 230, 150, '#fbf1ea', C.rust, 2.5, 12) + tl(660, 282, ['Organic content', '(sewage, manure,', 'food waste):'], { size: 16.5, weight: 700, fill: C.rust }, 21) + tl(660, 350, ['bacteria feed on it', 'directly, so oxygen can', 'fall before a bloom'], { size: 15.5 }, 19);
  // oxygen gauge
  b += panel(30, 670, 840, 80, '#eef5f4', C.tealDark) + t(450, 704, 'Marks are for the links, especially “bacteria decompose” and', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 728, '“respiration uses oxygen”. Living algae are not the marked step.', { size: 17, weight: 700, anchor: 'middle' });
  add('02-eutrophication-steps',
    svg(900, 775, 'Eutrophication: six linked steps', b),
    'Six linked steps: nitrate and phosphate ions arrive; algae grow rapidly into a bloom; the bloom blocks light so plants below die; the algae die; bacteria decompose the dead material and their respiration uses up dissolved oxygen; fish die or leave. A side arrow shows that organic content such as sewage feeds bacteria directly, so oxygen can fall before a bloom forms.',
    'Nutrients, bloom, light blocked, algae die, bacteria use the oxygen, fish die.',
    H2.imp);
}

// 03 Acid rain in rivers and lakes
{
  let b = '';
  b += `<rect x="30" y="110" width="840" height="330" rx="14" fill="#eef1f8"/>`;
  b += cloud(200, 170, 0.9, '#ffffff') + cloud(560, 160, 0.8, '#ffffff') + rain(150, 200, 6, 18, 18, C.rust) + rain(520, 190, 5, 18, 18, C.rust);
  b += t(380, 180, 'acid rain falls on the catchment', { size: 16.5, weight: 700, anchor: 'middle', fill: C.rust });
  b += `<path d="M30,300 Q200,280 300,330 L600,330 Q700,280 870,300 L870,440 L30,440 Z" fill="#a77b52" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<path d="M300,330 L600,330 Q560,420 450,425 Q340,420 300,330 Z" fill="#b8c9b0" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(450, 360, 'lake becomes more acidic', { size: 16.5, weight: 700, anchor: 'middle' });
  b += fish(410, 395, 1.1, C.muted) + fish(490, 400, 1, C.muted, -1);
  b += t(160, 380, 'soil', { size: 16, weight: 700, fill: '#ffffff' }) + arrow(200, 380, 300, 370, { color: C.olive, w: 3, marker: 'ahO' }) + t(160, 410, 'releases aluminium', { size: 15, fill: '#ffffff', weight: 600 });
  const eff = [['Fish, eggs and invertebrates', 'many cannot survive below certain pH values (e.g. insect larvae, snails)'], ['Food web disrupted', 'as populations fall'], ['Aluminium', 'released from soils into lakes damages fish gills']];
  eff.forEach(([h, d], i) => (b += card(30 + i * 285, 460, 270, 140, h, d, { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, ts: 18, bs: 16, bfill: C.ink })));
  b += t(450, 630, 'How acid rain forms belongs to sub-topic 4.3.', { size: 15.5, anchor: 'middle', fill: C.muted });
  add('03-acid-rain-lakes',
    svg(900, 655, 'Acid rain in rivers and lakes', b),
    'Acid rain falls on a catchment and the lake becomes more acidic. Many fish, eggs and invertebrates such as insect larvae and snails cannot survive below certain pH values, so populations fall and the food web is disrupted. Acidic water also releases aluminium from soils into lakes, which damages fish gills.',
    'Acidic water kills sensitive species and releases aluminium that damages fish gills.',
    H2.imp);
}

// 04 Biomagnification data on a log scale
{
  let b = panel(30, 110, 840, 450);
  const rows = [['Water', 0.00005, '0.00005'], ['Plankton', 0.04, '0.04'], ['Small fish', 0.5, '0.5'], ['Large fish', 2.0, '2.0'], ['Fish-eating bird', 25, '25']];
  const x0 = 220, x1 = 820, lmin = -5, lmax = 2, sx = (v) => x0 + ((Math.log10(v) - lmin) / (lmax - lmin)) * (x1 - x0);
  for (let e = lmin; e <= lmax; e++) { const x = sx(10 ** e); b += line(x, 140, x, 460, { color: '#e3e9e8', w: 1.5 }) + t(x, 488, e < 0 ? (10 ** e).toFixed(-e).replace(/0+$/, '').replace(/\.$/, '') : String(10 ** e), { size: 15, anchor: 'middle' }); }
  b += line(x0, 460, x1, 460, { w: 3 }) + line(x0, 140, x0, 460, { w: 3 });
  b += t((x0 + x1) / 2, 520, 'pesticide concentration, parts per million (log scale: each line ×10)', { size: 16, anchor: 'middle', fill: C.muted });
  rows.forEach(([n, v, lab], i) => {
    const y = 158 + i * 60, w = sx(v) - x0;
    b += t(x0 - 14, y + 27, n, { size: 17, weight: 700, anchor: 'end' });
    b += `<rect x="${x0}" y="${y}" width="${Math.max(w, 3)}" height="40" fill="${i === 4 ? C.rust : i === 0 ? C.teal : C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
    b += t(x0 + w + 10, y + 27, lab, { size: 17, weight: 700 });
  });
  b += t(860, 136, 'invented data', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += panel(30, 580, 840, 150, C.cream, C.olive);
  b += t(60, 618, 'Bird ÷ water = 25 ÷ 0.00005 = 500,000 times more concentrated', { size: 19, weight: 700 });
  b += tl(60, 650, ['Not broken down or excreted, so each organism stores it (bioaccumulation).', 'Each consumer eats many from the level below, so it rises at each', 'trophic level (biomagnification). The bird at the top has the most.'], { size: 16.5 }, 23);
  add('04-biomagnification-data',
    svg(900, 755, 'Worked example: biomagnification in an estuary', b),
    'A log-scale bar chart of pesticide concentration in parts per million: water 0.00005, plankton 0.04, small fish 0.5, large fish 2.0 and fish-eating bird 25. The bird’s concentration is 500,000 times that of the water because the pesticide is stored in each organism and increases at each trophic level.',
    'The bird holds the pesticide at 500,000 times the concentration in the water.',
    H2.we1);
}

// 05 Sewage treatment sequence
{
  let b = '';
  const st = [['Screen', 'solid objects and grit removed'], ['Settle', 'solids settle in tanks'], ['Bacteria', 'break down organic matter in well-aerated tanks'], ['Further treatment', 'can remove nitrates and phosphates']];
  st.forEach(([h, d], i) => {
    const x = 30 + i * 213, y = 120;
    b += panel(x, y, 195, 300, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge) + badge(x + 97, y + 36, 20, String(i + 1), C.mustard) + t(x + 97, y + 90, h, { size: 19, weight: 700, anchor: 'middle' });
    const ax = x + 25, ay = y + 110, aw = 145, ah = 80;
    b += `<rect x="${ax}" y="${ay}" width="${aw}" height="${ah}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`;
    if (i === 0) { for (let k = 0; k < 5; k++) b += line(ax + 50 + k * 12, ay, ax + 50 + k * 12, ay + ah, { w: 3 }); b += `<rect x="${ax + 14}" y="${ay + 30}" width="20" height="10" fill="${C.rockDark}"/>`; }
    if (i === 1) { for (let k = 0; k < 9; k++) b += circ(ax + 12 + k * 15, ay + ah - 8, 6, '#a77b52', C.ink, 1); }
    if (i === 2) { for (let k = 0; k < 10; k++) b += circ(ax + 14 + (k % 5) * 28, ay + 18 + Math.floor(k / 5) * 34 + (k % 2) * 8, 5, '#ffffff', C.tealDark, 2); }
    if (i === 3) { b += t(ax + aw / 2, ay + 34, 'NO₃⁻  PO₄³⁻', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }); b += path(`M${ax + 30},${ay + 50} l85,22 M${ax + 115},${ay + 50} l-85,22`, { stroke: C.rust, w: 3 }); }
    b += tl(x + 97, y + 230, wrap(d, 165, 16), { size: 16, anchor: 'middle' }, 21);
    if (i < 3) b += arrow(x + 197, y + 150, x + 210, y + 150, { w: 3 });
  });
  b += t(450, 460, 'Cleaned water returned to a river or the sea', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += card(30, 485, 410, 110, 'Benefit', 'removes pathogens and organic matter; protects rivers; nutrient removal reduces eutrophication downstream', { fill: '#eef5f4', edge: C.tealDark, tfill: C.tealDark, ts: 18, bs: 15.5, bfill: C.ink });
  b += card(460, 485, 410, 110, 'Limitation', 'expensive to build and run; works can overflow in storms', { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, ts: 18, bs: 15.5, bfill: C.ink });
  add('05-sewage-treatment',
    svg(900, 620, 'Treating sewage before it reaches a river', b),
    'Four stages: screening removes solid objects and grit; solids settle in tanks; bacteria break down organic matter in well-aerated tanks; further treatment can remove nitrates and phosphates. Treatment protects rivers and reduces eutrophication downstream, but is expensive and can overflow in storms.',
    'Screen, settle, let aerated bacteria break down organic matter, then strip out nutrients.',
    H2.str);
}

// 06 Match strategy to source and impact
{
  let b = '';
  b += t(165, 132, 'Source', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + t(450, 132, 'Impact', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + t(735, 132, 'Strategy that fits', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  const rows = [
    ['Sewage', 'Cholera', 'Improved sanitation; treatment of sewage'],
    ['Fertilisers, sewage, detergents', 'Eutrophication', 'Sewage treatment removing nitrates and phosphates; limits on fertiliser near rivers; buffer strips'],
    ['Industrial processes', 'Toxic accumulation, biomagnification', 'Legislation: discharge limits, permits, on-site treatment, fines'],
    ['Pesticides', 'Bioaccumulation, biomagnification', 'Banning the most persistent pesticides'],
  ];
  rows.forEach(([s, im, st], i) => {
    const y = 148 + i * 118;
    const box = (x, w, txt, f, e, bold) => rrect(x, y, w, 100, f, e, 2.5, 12) + tl(x + w / 2, y + 50 - (wrap(txt, w - 28, 16.5, bold).length - 1) * 10.5 + 6, wrap(txt, w - 28, 16.5, bold), { size: 16.5, weight: bold ? 700 : 400, anchor: 'middle' }, 21);
    b += box(30, 250, s, '#ffffff', C.ink, true) + arrow(284, y + 50, 316, y + 50, { w: 3.5 }) + box(320, 260, im, '#fbf1ea', C.rust, true) + arrow(584, y + 50, 616, y + 50, { w: 3.5 }) + box(620, 250, st, '#eef5f4', C.tealDark, false);
  });
  b += t(450, 640, 'Match the strategy to the source in the question: sewage treatment', { size: 16.5, anchor: 'middle', fill: C.muted }) + t(450, 664, 'does not answer an industrial pollution question.', { size: 16.5, anchor: 'middle', fill: C.muted });
  add('06-match-strategies',
    svg(900, 690, 'Match the strategy to the source', b),
    'Four rows link source, impact and strategy. Sewage causes cholera: improved sanitation and sewage treatment. Fertilisers, sewage and detergents cause eutrophication: nutrient removal at treatment works, limits on fertiliser near rivers and buffer strips. Industry causes toxic accumulation: legislation with discharge limits, permits, on-site treatment and fines. Pesticides bioaccumulate: banning the most persistent ones.',
    'Each source needs its own strategy; sewage treatment does not fix industrial pollution.',
    H2.str);
}
