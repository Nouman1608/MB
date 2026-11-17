import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-soil-erosion';
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
  how: '## How water and wind remove soil',
  imp: '## Impacts of soil erosion (2.3.2)',
  str: '## Strategies to reduce soil erosion (2.3.3)',
  bl: '## Benefits and limitations to weigh',
  we1: '## Worked example 1: interpreting erosion plot data',
};
const SOIL = '#a77b52';

// 01 Water and wind erosion
{
  let b = '';
  // water panel
  b += panel(30, 110, 410, 510) + t(235, 148, 'Water erosion', { size: 22, weight: 700, anchor: 'middle', fill: C.blue });
  b += `<rect x="50" y="165" width="370" height="250" fill="#e9eef6"/>`;
  b += `<path d="M50,240 L420,370 L420,415 L50,415 Z" fill="${SOIL}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += cloud(150, 190, 0.8, '#ffffff') + rain(110, 215, 5, 18, 16);
  // splash
  b += path('M150,262 l-8,-12 M150,262 l0,-14 M150,262 l8,-12', { stroke: C.blue, w: 2.5 }) + circ(138, 252, 3, SOIL, SOIL, 1) + circ(162, 250, 3, SOIL, SOIL, 1);
  b += carrow('M190,284 Q280,318 360,346', { color: C.blue, w: 5 });
  for (let i = 0; i < 5; i++) b += circ(215 + i * 32, 292 + i * 11, 4, SOIL, C.ink, 1);
  b += `<path d="M300,340 l12,24 l12,-20" fill="#e9eef6" stroke="${C.ink}" stroke-width="2"/>`;
  b += badge(175, 238, 15, '1', C.mustard) + badge(280, 300, 15, '2', C.mustard) + badge(338, 378, 15, '3', C.mustard);
  b += bullets(50, 448, ['1 Raindrop impact knocks particles loose on bare ground', '2 Surface run-off: rain falls faster than it soaks in, carrying particles; faster on slopes', '3 Run-off cuts channels that deepen into gullies'], 370, { size: 16, mark: ' ' }).svg;
  // wind panel
  b += panel(460, 110, 410, 510) + t(665, 148, 'Wind erosion', { size: 22, weight: 700, anchor: 'middle', fill: C.olive });
  b += `<rect x="480" y="165" width="370" height="250" fill="#f6efd8"/>` + `<rect x="480" y="345" width="370" height="70" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += arrow(500, 230, 640, 230, { w: 7, color: C.olive, marker: 'ahO' }) + arrow(500, 270, 600, 270, { w: 5, color: C.olive, marker: 'ahO' });
  for (let i = 0; i < 14; i++) b += circ(640 + (i * 29) % 190, 250 + (i * 17) % 80, 2.5, SOIL, SOIL, 0.5);
  for (let i = 0; i < 8; i++) b += circ(500 + i * 44, 360, 6, C.rockDark, C.ink, 1.2);
  b += tag(760, 200, 'fine particles lifted', { size: 15.5, anchor: 'middle', fill: C.olive });
  b += tag(665, 392, 'coarser, less fertile soil left', { size: 15.5, anchor: 'middle', fill: C.ink });
  b += t(490, 456, 'Happens where soil is', { size: 17, weight: 700 });
  ['dry', 'loose', 'fine'].forEach((s, i) => (b += pill(490 + i * 120, 470, 108, 40, s, { fill: C.cream, size: 16.5 })));
  b += tl(490, 540, ['and the land is flat and open with', 'strong winds. The lightest particles', 'carried away include much of the', 'organic matter.'], { size: 16 }, 21);
  b += panel(30, 640, 840, 70, '#eef5f4', C.tealDark) + t(450, 682, 'Both depend on unprotected soil: plants shield the surface and roots hold it together.', { size: 17, weight: 700, anchor: 'middle' });
  add('01-water-and-wind-erosion',
    svg(900, 735, 'How water and wind remove soil', b),
    'Left: on a bare slope, raindrops knock soil loose, run-off carries the particles downhill faster on steeper ground, and channels deepen into gullies. Right: on flat, open land with dry, loose, fine soil, strong wind lifts the finest particles, including much of the organic matter, leaving coarser, less fertile soil. Both happen where soil is unprotected by plants.',
    'Water erodes by raindrop impact, run-off and gullies; wind lifts the finest, most fertile particles.',
    H2.how);
}

// 02 Silting of rivers
{
  let b = '';
  const sec = (x, title, silted) => {
    let s = panel(x, 110, 410, 330) + t(x + 205, 148, title, { size: 20, weight: 700, anchor: 'middle', fill: silted ? C.rust : C.tealDark });
    const top = 200, deep = 360;
    s += `<path d="M${x + 20},${top} L${x + 90},${top} Q${x + 120},${deep} ${x + 205},${deep} Q${x + 290},${deep} ${x + 320},${top} L${x + 390},${top} L${x + 390},410 L${x + 20},410 Z" fill="${SOIL}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const ch = `M${x + 96},${top + 20} Q${x + 125},${deep - 4} ${x + 205},${deep - 4} Q${x + 285},${deep - 4} ${x + 314},${top + 20} Z`;
    s += `<clipPath id="ch${x}"><path d="${ch}"/></clipPath>`;
    s += `<path d="${ch}" fill="${silted ? '#9fb7a9' : C.teal}"/>`;
    if (silted) { s += `<rect x="${x + 90}" y="300" width="230" height="70" fill="${C.sand}" clip-path="url(#ch${x})"/>` + line(x + 120, 300, x + 290, 300, { w: 2, color: C.ink }); for (let i = 0; i < 18; i++) s += circ(x + 130 + (i * 23) % 150, top + 34 + (i * 11) % 50, 2, SOIL, SOIL, 0.5); s += tag(x + 205, 336, 'silt on the river bed', { size: 15.5, anchor: 'middle', bg: C.sand, op: 1 }); }
    s += line(x + 96, top + 20, x + 314, top + 20, { color: C.tealDark, w: 2.5 });
    s += t(x + 205, top - 10, silted ? 'shallower channel, cloudy water' : 'deep channel, clear water', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
    return s;
  };
  b += sec(30, 'Before', false) + sec(460, 'After eroded soil arrives', true);
  b += t(450, 476, 'Effects of silting', { size: 20, weight: 700, anchor: 'middle' });
  const eff = [['Holds less water', 'so flooding is more likely'], ['Reservoirs silt up', 'so they store less water'], ['Cloudy water', 'blocks light, harming aquatic plants and animals']];
  eff.forEach(([h, d], i) => (b += card(30 + i * 285, 494, 270, 100, h, d, { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, ts: 18.5, bs: 16, bfill: C.ink })));
  add('02-silting-of-rivers',
    svg(900, 620, 'Silting of rivers', b),
    'Two river cross-sections. Before: a deep channel with clear water. After eroded soil arrives: silt fills the bottom of the channel, making it shallower and the water cloudy. As a result the river holds less water, so flooding is more likely; reservoirs store less water; and cloudy water blocks light, harming aquatic life.',
    'Silt makes channels shallower and water cloudier: more flooding, less storage, harm to aquatic life.',
    H2.imp);
}

// 03 From field to community
{
  let b = '';
  const steps = [
    ['Soil erosion', 'fertile topsoil removed', C.cream, C.olive],
    ['Lower crop yield', 'soil holds fewer nutrients and less water', '#ffffff', C.panelEdge],
    ['Malnutrition and famine', 'too little food where people rely on local harvests', '#ffffff', C.panelEdge],
    ['Displacement of people', 'they move to towns or other farmland, spreading the pressure', '#fbf1ea', C.rust],
  ];
  steps.forEach(([h, d, f, e], i) => {
    const y = 110 + i * 120;
    b += rrect(150, y, 600, 96, f, e, 2.5, 14) + badge(196, y + 48, 22, String(i + 1), C.mustard) + t(236, y + 42, h, { size: 21, weight: 700 }) + t(236, y + 72, d, { size: 16.5, fill: C.muted });
    if (i < 3) b += arrow(450, y + 99, 450, y + 116, { w: 3.5 });
  });
  b += t(450, 620, 'Show the links between impacts to strengthen an extended answer.', { size: 17, anchor: 'middle', fill: C.muted });
  add('03-field-to-community',
    svg(900, 645, 'From the field to the community', b),
    'A chain of impacts: soil erosion removes fertile topsoil, so crop yields fall; where people rely on local harvests this causes malnutrition and famine; people are then displaced to towns or other farmland, spreading the pressure elsewhere.',
    'Erosion → lower yield → malnutrition → displacement.',
    H2.imp);
}

// 04 Matching strategy to cause
{
  let b = '';
  const rows = [
    ['Steep slopes and water erosion', ['terracing', 'contour ploughing', 'bunds']],
    ['Flat, dry, windy land', ['wind breaks', 'bunds', 'vegetation cover']],
    ['Bare soil after harvest', ['maintain vegetation cover', 'mulch or crop residue']],
    ['Weak structure after years of monoculture', ['add organic matter']],
  ];
  b += t(180, 136, 'Problem', { size: 18, weight: 700, anchor: 'middle', fill: C.muted }) + t(610, 136, 'Strategies that fit', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  rows.forEach(([p, ss], i) => {
    const y = 154 + i * 106;
    b += rrect(30, y, 300, 86, '#fbf1ea', C.rust, 2.5, 12) + tl(180, y + (wrap(p, 270, 18, true).length > 1 ? 36 : 50), wrap(p, 270, 18, true), { size: 18, weight: 700, anchor: 'middle' }, 23);
    b += arrow(334, y + 43, 364, y + 43, { w: 4 });
    let x = 372;
    ss.forEach((s) => { const w = s.length * 8.8 + 30; b += pill(x, y + 21, w, 44, s, { fill: '#eef5f4', edge: C.tealDark, size: 15.5 }); x += w + 10; });
  });
  b += panel(30, 590, 840, 70, C.cream, C.olive) + t(450, 632, 'Never recommend wind breaks for a water problem on a steep slope.', { size: 18, weight: 700, anchor: 'middle' });
  add('04-match-strategy-to-cause',
    svg(900, 685, 'Match the strategy to the cause', b),
    'Four problems matched to strategies. Steep slopes and water erosion: terracing, contour ploughing, bunds. Flat, dry, windy land: wind breaks, bunds, vegetation cover. Bare soil after harvest: maintain vegetation cover, mulch or crop residue. Weak soil structure after monoculture: add organic matter.',
    'Choose strategies that fit the slope, wind, cover and soil structure in the question.',
    H2.str);
}

// 05 Benefits and limitations
{
  let b = '';
  b += t(330, 136, 'Benefit', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(670, 136, 'Limitation', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  const rows = [
    ['Terracing', 'works well on steep slopes', 'much labour to build and maintain; walls can collapse if neglected'],
    ['Contour ploughing', 'cheap', 'less effective on very steep slopes or in very heavy rain'],
    ['Wind breaks', 'also provide wood and habitat', 'use land that could grow crops; take years to grow'],
    ['Vegetation cover', 'cheap and effective', 'cover crops may compete with the main crop for water'],
    ['Organic matter', 'improves fertility as well as structure', 'bulky; needs a supply of manure or residue'],
  ];
  rows.forEach(([s, ben, lim], i) => {
    const y = 152 + i * 96;
    b += `<rect x="30" y="${y}" width="170" height="84" rx="12" fill="${C.ink}"/>` + tl(115, y + (s.includes(' ') && s.length > 12 ? 37 : 48), s.length > 12 ? s.split(' ') : [s], { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' }, 21);
    b += rrect(210, y, 240, 84, '#eef5f4', C.tealDark, 2.5, 12) + tl(230, y + (wrap(ben, 205, 16).length > 1 ? 36 : 48), wrap(ben, 205, 16), { size: 16 }, 21);
    b += rrect(460, y, 410, 84, '#fbf1ea', C.rust, 2.5, 12) + tl(480, y + (wrap(lim, 375, 16).length > 1 ? 36 : 48), wrap(lim, 375, 16), { size: 16 }, 21);
  });
  add('05-benefits-limitations',
    svg(900, 650, 'Weighing up five strategies', b),
    'Benefits and limitations of five strategies. Terracing works on steep slopes but needs much labour and can collapse. Contour ploughing is cheap but weaker on very steep slopes or in heavy rain. Wind breaks give wood and habitat but take land and years to grow. Vegetation cover is cheap and effective but may compete for water. Organic matter improves fertility but is bulky and needs a supply.',
    'Each strategy has a cost: labour, land, water or supply.',
    H2.bl);
}

// 06 Erosion plot data
{
  let b = panel(30, 110, 560, 520);
  const x0 = 120, y0 = 500, k = 28; // px per kg
  b += line(x0, y0, 570, y0, { w: 3 }) + line(x0, y0, x0, y0 - 13 * k, { w: 3 });
  for (let v = 0; v <= 12; v += 2) b += line(x0 - 8, y0 - v * k, x0, y0 - v * k, { w: 2.5 }) + t(x0 - 14, y0 - v * k + 6, String(v), { size: 15.5, anchor: 'end' }) + (v ? line(x0 + 2, y0 - v * k, 570, y0 - v * k, { color: '#e3e9e8', w: 1.5 }) : '');
  b += `<text x="58" y="${y0 - 170}" font-size="16" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 58 ${y0 - 170})">soil lost (kg per m²)</text>`;
  const bars = [[1, 12.0, SOIL, ['Bare,', 'up-down']], [2, 5.4, C.mustard, ['Contour', 'ploughed']], [3, 1.8, C.teal, ['Terraced']], [4, 0.6, C.grass, ['Grass', 'cover']]];
  bars.forEach(([p, v, f, lab], i) => {
    const x = 150 + i * 105;
    b += `<rect x="${x}" y="${y0 - v * k}" width="72" height="${v * k}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x + 36, y0 - v * k - 10, v.toFixed(1), { size: 18, weight: 700, anchor: 'middle' });
    b += tl(x + 36, y0 + 26, lab, { size: 15.5, anchor: 'middle', weight: 600 }, 19);
  });
  b += t(580, 140, 'invented data, same slope', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += panel(610, 110, 260, 520);
  b += t(632, 148, 'Contour vs bare', { size: 17, weight: 700 }) + tl(632, 174, ['(12.0 − 5.4) ÷ 12.0', '× 100 = 55% less'], { size: 16 }, 21);
  b += t(632, 236, 'Grass vs bare', { size: 17, weight: 700 }) + tl(632, 262, ['(12.0 − 0.6) ÷ 12.0', '× 100 = 95% less'], { size: 16 }, 21);
  b += t(632, 324, 'Ratio', { size: 17, weight: 700 }) + tl(632, 350, ['12.0 ÷ 0.6 = 20 times', 'as much from bare soil'], { size: 16 }, 21);
  b += tl(632, 416, wrap('Grass protects best: roots bind, leaves intercept rain. Terracing is next and still lets crops grow.', 220, 16), { size: 16, fill: C.tealDark, weight: 600 }, 21);
  b += tl(632, 560, wrap('Repeat over several years: one wet year may skew results.', 220, 15.5), { size: 15.5, fill: C.muted }, 20);
  add('06-erosion-plot-data',
    svg(900, 655, 'Worked example: soil lost from four plots', b),
    'A bar chart of soil lost in one year from four plots on the same slope: bare soil ploughed up and down slope 12.0 kg per square metre, contour ploughed 5.4, terraced 1.8 and permanent grass 0.6. Contour ploughing cuts loss by 55% and grass by 95%; bare soil loses 20 times as much as grass.',
    'Grass cover cut soil loss by 95%, terracing came next, contour ploughing by 55%.',
    H2.we1);
}
