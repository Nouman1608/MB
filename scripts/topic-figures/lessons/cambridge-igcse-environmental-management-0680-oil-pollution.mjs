import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-oil-pollution';
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
  why: '## Why oil behaves as it does',
  causes: '## Causes (3.5.1)',
  imp: '## Impacts (3.5.2)',
  prev: '## Prevention strategies (3.5.3)',
  min: '## Strategies to minimise impacts (3.5.4)',
  scen: '## Worked example: matching a strategy to a scenario',
  calc: '## Worked example: a short calculation',
};
const wave = (x1, x2, y, col = C.tealDark) => { let d = `M${x1},${y}`; for (let x = x1; x < x2; x += 40) d += ` q10,-7 20,0 q10,7 20,0`; return path(d, { stroke: col, w: 2.5 }); };
const OIL = '#2b2b2b';
const slick = (x, y, w, h = 10) => `<path d="M${x},${y} q${w * 0.1},-${h} ${w * 0.25},-${h * 0.4} q${w * 0.2},-${h * 0.7} ${w * 0.4},-${h * 0.3} q${w * 0.2},-${h * 0.6} ${w * 0.35},${h * 0.7} Z" fill="${OIL}"/>`;
const tanker = (x, y, s = 1) => `<path d="M${x},${y - 22 * s} L${x + 200 * s},${y - 22 * s} L${x + 180 * s},${y + 14 * s} L${x + 14 * s},${y + 14 * s} Z" fill="#3a4660" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/><rect x="${x + 18 * s}" y="${y - 52 * s}" width="${34 * s}" height="${30 * s}" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/><rect x="${x + 28 * s}" y="${y - 66 * s}" width="${10 * s}" height="${14 * s}" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.6"/>`;

// 01 What happens to spilled oil
{
  let b = '';
  const sy = 260, by = 520;
  b += `<rect x="30" y="${sy}" width="840" height="${by - sy}" fill="${C.teal}"/>` + `<path d="M30,${by} L870,${by} L870,${by + 40} L30,${by + 40} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<path d="M720,${sy} Q790,${sy + 60} 870,${sy + 70} L870,${sy - 50} L760,${sy - 50} Q740,${sy - 20} 720,${sy} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  b += wave(30, 720, sy);
  b += tanker(70, sy, 0.9);
  b += `<path d="M260,${sy} L700,${sy} L700,${sy + 7} L260,${sy + 7} Z" fill="${OIL}"/>`;
  // evaporation
  for (let i = 0; i < 3; i++) b += path(`M${330 + i * 26},${sy - 10} q-8,-14 0,-28 q8,-14 0,-28`, { stroke: C.muted, w: 3 });
  // droplets / emulsion
  for (let i = 0; i < 14; i++) b += circ(470 + (i % 7) * 18, sy + 30 + Math.floor(i / 7) * 22 + (i % 2) * 6, 4, OIL, OIL, 1);
  // sinking residues
  for (let i = 0; i < 5; i++) b += circ(610 + i * 8, sy + 70 + i * 34, 6, OIL, OIL, 1);
  b += `<ellipse cx="640" cy="${by - 2}" rx="40" ry="7" fill="${OIL}"/>`;
  // tar on shore
  b += `<ellipse cx="775" cy="${sy + 4}" rx="22" ry="5" fill="${OIL}"/><ellipse cx="815" cy="${sy + 20}" rx="16" ry="4" fill="${OIL}"/>`;
  b += arrow(640, 150, 760, 150, { w: 4 }) + t(625, 156, 'wind and currents', { size: 16.5, weight: 600, anchor: 'end' });
  const lab = [[1, 300, sy + 50], [2, 350, sy - 92], [3, 520, sy + 110], [4, 670, sy + 160], [5, 790, sy - 70]];
  lab.forEach(([n, x, y]) => (b += badge(x, y, 17, String(n), C.mustard)));
  b += t(860, by + 28, 'schematic, not to scale', { size: 15, anchor: 'end', italic: true });
  const key = [['Floats and spreads', 'less dense than water: a thin slick moved by wind and currents'], ['Evaporates', 'lighter parts, in the first days'], ['Emulsion or droplets', 'waves whip it into a thick emulsion or break it up'], ['Sinks', 'some heavier residues'], ['Washes ashore as tar', 'sticky, does not mix with water, coats what it touches']];
  key.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * 430, y = 590 + Math.floor(i / 2) * 80;
    b += badge(x + 20, y + 20, 16, String(i + 1), C.mustard) + t(x + 46, y + 26, h, { size: 18, weight: 700 }) + tl(x + 46, y + 50, wrap(d, 370, 15.5), { size: 15.5, fill: C.muted }, 19);
  });
  add('01-fate-of-spilled-oil',
    svg(900, 830, 'What happens to spilled oil', b),
    'A cross-section, not to scale. Oil from a tanker floats and spreads as a thin slick driven by wind and currents; lighter parts evaporate in the first days; waves make an emulsion or break it into droplets; heavier residues sink; some washes ashore as tar.',
    'Oil floats, spreads, evaporates, breaks up and sinks or strands: its properties explain the impacts.',
    H2.why);
}

// 02 Five causes
{
  let b = '';
  const sy = 330, by = 560, ly = 290;
  b += `<rect x="30" y="${sy}" width="840" height="${by - sy}" fill="${C.teal}"/>` + `<rect x="30" y="${by}" width="840" height="40" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<path d="M30,${ly} L290,${ly} L350,${by} L30,${by} Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  b += wave(300, 870, sy);
  // onshore oilfield draining to a river
  b += `<path d="M70,${ly} l18,-60 l18,60" fill="none" stroke="${C.ink}" stroke-width="2.5"/>` + line(88, ly - 60, 88, ly, { w: 2.5 }) + line(74, ly - 20, 102, ly - 20, { w: 2 });
  b += path(`M120,${ly + 4} L284,${ly + 4} L300,${sy + 2}`, { stroke: C.blue, w: 7 }) + t(200, ly + 30, 'river', { size: 15, weight: 600, anchor: 'middle', fill: C.blue });
  b += circ(112, ly - 8, 5, OIL, OIL, 1) + circ(130, ly + 4, 5, OIL, OIL, 1) + circ(240, ly + 4, 4, OIL, OIL, 1);
  // refinery
  b += `<rect x="175" y="${ly - 52}" width="80" height="52" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2"/><circle cx="195" cy="${ly - 62}" r="13" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2"/><rect x="235" y="${ly - 92}" width="10" height="40" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.8"/>`;
  b += path(`M255,${ly - 20} L300,${ly - 20} Q312,${ly - 20} 314,${sy + 4}`, { stroke: OIL, w: 4 }) + circ(316, sy + 12, 5, OIL, OIL, 1);
  // pipeline on sea bed to platform
  b += path(`M340,${by - 8} L612,${by - 8} L612,${sy - 30}`, { stroke: C.rockDark, w: 8 }) + circ(470, by - 22, 7, OIL, OIL, 1) + circ(480, by - 38, 5, OIL, OIL, 1) + circ(486, by - 52, 4, OIL, OIL, 1);
  // platform
  b += `<rect x="580" y="${sy - 50}" width="80" height="20" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2"/>` + line(592, sy - 30, 592, by, { w: 3 }) + line(648, sy - 30, 648, by, { w: 3 }) + `<path d="M604,${sy - 50} l16,-56 l16,56" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += slick(650, sy + 2, 60, 10);
  // tank washing ship
  b += `<path d="M395,${sy - 14} L525,${sy - 14} L512,${sy + 10} L408,${sy + 10} Z" fill="#3a4660" stroke="${C.ink}" stroke-width="2.2"/>` + path(`M500,${sy - 4} q18,0 24,24`, { stroke: OIL, w: 4 }) + slick(515, sy + 4, 50, 8);
  // tanker aground
  b += `<path d="M720,${by} Q760,${sy + 30} 800,${sy + 22} Q850,${sy + 30} 870,${by} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>` + `<g transform="rotate(-6 780 ${sy})">${tanker(700, sy, 0.7)}</g>` + slick(735, sy + 12, 130, 10);
  const bd = [[1, 88, ly - 95], [1, 620, sy - 135], [2, 470, by - 80], [3, 780, sy - 85], [4, 460, sy - 50], [5, 215, ly - 125]];
  bd.forEach(([n, x, y]) => (b += badge(x, y, 17, String(n), C.mustard)));
  b += t(860, by + 28, 'schematic, not to scale', { size: 15, anchor: 'end', italic: true });
  const key = [['Oil extraction', 'blowouts and leaks at platforms and wells; land oilfields drain to rivers'], ['Pipelines', 'corrosion, damage or poor maintenance, even under the sea bed'], ['Shipping', 'ships run aground, collide or sink; fuel leaks'], ['Cleaning tanks at sea', 'oily washing water pumped overboard'], ['Refineries', 'leaks, spills and oily wastewater']];
  key.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * 430, y = 625 + Math.floor(i / 2) * 80;
    b += badge(x + 20, y + 20, 16, String(i + 1), C.mustard) + t(x + 46, y + 26, h, { size: 18, weight: 700 }) + tl(x + 46, y + 50, wrap(d, 370, 15.5), { size: 15.5, fill: C.muted }, 19);
  });
  b += t(450, 878, 'Big accidents make headlines, but frequent small releases add a great deal of oil over time.', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  add('02-five-causes',
    svg(900, 905, 'Five causes of oil pollution', b),
    'A coastal scene, not to scale, with five numbered sources: oil extraction at a sea platform and at a land oilfield that drains into a river; a leaking pipeline on the sea bed; a tanker aground on rocks; a ship pumping oily tank-washing water overboard; and a coastal refinery. Frequent small releases add a great deal of oil over time.',
    'Oil reaches the sea from extraction, pipelines, shipping, tank cleaning and refineries.',
    H2.causes);
}

// 03 Seven groups: physical, toxic, knock-on
{
  let b = '';
  const cols = [[230, 'Physical', C.ink], [445, 'Toxic or lethal', C.rust], [660, 'Knock-on', C.tealDark]];
  const colW = 192;
  b += `<rect x="30" y="110" width="840" height="50" rx="10" fill="${C.ink}"/>` + t(50, 142, 'Group', { size: 18, weight: 700, fill: '#ffffff' });
  cols.forEach(([x, h]) => (b += t(x, 142, h, { size: 18, weight: 700, fill: '#ffffff' })));
  const rows = [
    ['Birds', 'feathers matted: lose waterproofing, insulation and buoyancy', 'swallow oil while preening', 'oiled eggs may fail to hatch'],
    ['Marine mammals', 'oil coats fur, cutting insulation', 'inhale fumes when they surface to breathe', 'poisoned by feeding on contaminated prey'],
    ['Fish', 'gills coated: less oxygen taken up', 'eggs and larvae near the surface killed', 'fisheries close; income lost'],
    ['Crustaceans', 'smothered by sinking or stranded oil', 'absorb toxic compounds', 'survivors may be unsafe to eat'],
    ['Seaweeds', 'coating blocks light and gas exchange', 'photosynthesis falls; die back', 'less food and shelter for others'],
    ['Coral reefs', 'smothered; light blocked to algae in coral', 'toxins kill coral polyps', 'damage spreads through reef food web'],
    ['Beaches', 'oil and tar coat sand and rocks', 'shore organisms killed', 'tourists leave; clean-up disturbs'],
  ];
  rows.forEach(([g, p, tx, k], i) => {
    const y = 170 + i * 84;
    b += `<rect x="30" y="${y}" width="840" height="76" rx="10" fill="${i % 2 ? '#ffffff' : '#eef3f2'}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    b += t(50, y + 44, g, { size: 18, weight: 700 });
    [p, tx, k].forEach((s, j) => { const L = wrap(s, colW, 15.5); b += tl(cols[j][0], y + (L.length === 1 ? 44 : L.length === 2 ? 34 : 24), L, { size: 15.5, fill: j === 1 ? C.rust : j === 2 ? C.tealDark : C.ink }, 19); });
  });
  b += t(450, 790, 'For each group give a physical effect, a toxic effect, then a knock-on effect.', { size: 17, weight: 600, anchor: 'middle' });
  add('03-seven-groups-impacts',
    svg(900, 815, 'Impacts on the seven named groups', b),
    'A grid of the seven syllabus groups with a physical, a toxic or lethal, and a knock-on effect for each: birds, marine mammals, fish, crustaceans, seaweeds, coral reefs and beaches. For example, oil mats birds’ feathers, is swallowed during preening and stops oiled eggs hatching.',
    'Physical, toxic, knock-on: three effects to give for each of the seven groups.',
    H2.imp);
}

// 04 Double hull and MARPOL
{
  let b = '';
  const hull = (x, title, dbl) => {
    let s = panel(x, 110, 410, 330) + t(x + 205, 148, title, { size: 20, weight: 700, anchor: 'middle' });
    const cx = x + 205, top = 190, w = 260, h = 160;
    s += `<rect x="${x + 20}" y="${top + 70}" width="370" height="${h + 0}" fill="${C.teal}"/>`;
    s += `<path d="M${cx - w / 2},${top} L${cx + w / 2},${top} L${cx + w / 2 - 20},${top + h} L${cx - w / 2 + 20},${top + h} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>`;
    if (dbl) s += `<path d="M${cx - w / 2 + 26},${top + 14} L${cx + w / 2 - 26},${top + 14} L${cx + w / 2 - 40},${top + h - 22} L${cx - w / 2 + 40},${top + h - 22} Z" fill="${OIL}" stroke="${C.ink}" stroke-width="3.5"/>`;
    else s += `<path d="M${cx - w / 2 + 3},${top + 3} L${cx + w / 2 - 3},${top + 3} L${cx + w / 2 - 22},${top + h - 3} L${cx - w / 2 + 22},${top + h - 3} Z" fill="${OIL}"/>`;
    // hole on right lower side
    s += `<path d="M${cx + w / 2 - 12},${top + 98} l14,8 l-10,10 l12,10" fill="none" stroke="${C.rust}" stroke-width="5"/>`;
    s += path(`M${cx + w / 2 - 14},${top + 115} l-16,0`, { stroke: C.panel, w: 0 });
    if (!dbl) { for (let i = 0; i < 6; i++) s += circ(cx + w / 2 + 10 + i * 9, top + 112 + (i % 2) * 10, 5, OIL, OIL, 1); s += t(cx, top + h + 45, 'oil escapes', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }); }
    else s += t(cx, top + h + 45, 'inner hull keeps oil in', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + tag(cx, top + 30 - 30, 'gap', { size: 15, anchor: 'middle' });
    s += t(cx + w / 2 + 10, top + 85, 'holed', { size: 15.5, weight: 700, fill: C.rust });
    return s;
  };
  b += hull(30, 'Single hull', false) + hull(460, 'Double hull', true);
  b += t(450, 476, 'Double hulls do not prevent accidents: they reduce the oil released.', { size: 17, weight: 600, anchor: 'middle' });
  b += panel(30, 500, 840, 200, C.cream, C.olive);
  b += t(60, 538, 'MARPOL: an international convention (through the IMO), not a clean-up', { size: 18.5, weight: 700 });
  const st = ['restricts what ships may discharge', 'oily waste kept on board', 'unloaded at port facilities', 'records kept for inspectors'];
  st.forEach((s, i) => { const x = 50 + i * 205; b += rrect(x, 560, 190, 110, '#ffffff', C.olive, 2.5, 12) + tl(x + 95, 605, wrap(s, 160, 16.5), { size: 16.5, anchor: 'middle', weight: 600 }, 22); if (i < 3) b += arrow(x + 192, 615, x + 203, 615, { w: 3 }); });
  add('04-double-hull-marpol',
    svg(900, 725, 'Double hulls and MARPOL', b),
    'Two tanker cross-sections, each holed in the outer hull. In the single-hulled tanker oil escapes; in the double-hulled tanker the inner hull, separated by a gap, keeps the oil in. Below, MARPOL is shown as an international convention that restricts discharges, requires oily waste to be kept on board and unloaded at port, and requires records for inspectors.',
    'A double hull reduces the oil released if the outer hull is holed; MARPOL controls what ships discharge.',
    H2.prev);
}

// 05 Minimise strategies vs recurring limitations
{
  let b = panel(30, 110, 840, 520);
  const cx = [400, 520, 640, 770];
  const heads = ['Weather', 'Toxicity', 'Waste or', 'Cost or'];
  const heads2 = ['', '', 'pollution', 'slow'];
  heads.forEach((h, i) => (b += t(cx[i], 150, h, { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + (heads2[i] ? t(cx[i], 170, heads2[i], { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) : '')));
  b += t(60, 160, 'Strategy and how it works', { size: 17, weight: 700, fill: C.muted });
  const mk = (x, y, on) => (on ? circ(x, y, 13, C.rust, C.rust) : circ(x, y, 6, '#d6dedd', '#d6dedd', 1));
  const rows = [
    ['Improved navigation', 'satellites, radar, charts avoid hazards', [0, 0, 0, 1]],
    ['Booms and sorbents', 'contain, steer or soak up oil', [1, 0, 1, 0]],
    ['Detergent sprays', 'break slick into droplets', [0, 1, 0, 0]],
    ['Skimmers', 'lift oil off the surface', [1, 0, 0, 1]],
    ['Controlled burning', 'set surface oil alight', [1, 0, 1, 0]],
  ];
  rows.forEach(([n, d, m], i) => {
    const y = 190 + i * 84;
    if (i % 2 === 0) b += `<rect x="40" y="${y}" width="820" height="84" fill="#f1f5f4"/>`;
    b += t(60, y + 36, n, { size: 18, weight: 700 }) + t(60, y + 62, d, { size: 15.5, fill: C.muted });
    m.forEach((on, j) => (b += mk(cx[j], y + 42, on)));
  });
  b += t(450, 655, 'Limitations noted in the lesson', { size: 15.5, anchor: 'middle', fill: C.muted });
  const notes = [['high waves, strong currents, rough water; burning needs calm', C.rust], ['detergents toxic; dispersed oil reaches fish and sea-bed life', C.rust], ['used sorbents are oily waste; burning makes smoke and CO2', C.rust], ['equipment and training cost; skimmers slow', C.rust]];
  b += bullets(40, 690, notes.map((n, i) => ['Weather', 'Toxicity', 'Waste', 'Cost'][i] + ': ' + n[0]), 820, { size: 16 }).svg;
  add('05-minimise-limitations',
    svg(900, 815, 'Limiting the damage: what holds each method back', b),
    'A grid of five strategies against four recurring limitations. Improved navigation is limited by cost and human error; booms and sorbents by weather and oily waste; detergent sprays by toxicity; skimmers by rough water and slowness; controlled burning by the need for calm conditions and by smoke and carbon dioxide.',
    'Weather, toxicity and waste recur as the limitations of clean-up methods.',
    H2.min);
}

// 06 Scenario plan
{
  let b = '';
  const sy = 110;
  b += `<rect x="30" y="${sy}" width="840" height="300" rx="14" fill="${C.teal}"/>`;
  b += `<path d="M30,${sy} L870,${sy} L870,${sy + 80} Q700,${sy + 100} 600,${sy + 70} Q450,${sy + 30} 300,${sy + 75} Q150,${sy + 110} 30,${sy + 80} Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<path d="M300,${sy + 75} Q370,${sy + 55} 440,${sy + 55} L440,${sy + 66} Q370,${sy + 66} 300,${sy + 86} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.5"/>`;
  b += t(250, sy + 50, 'tourist beach', { size: 16.5, weight: 700 });
  b += `<path d="M560,${sy + 125} q30,-14 60,0 q30,-14 60,0 q-30,14 -60,0 q-30,14 -60,0 Z" fill="${C.rust}" opacity="0.8" stroke="${C.ink}" stroke-width="2"/>` + t(620, sy + 160, 'coral reef', { size: 16.5, weight: 700, anchor: 'middle' });
  b += `<g transform="rotate(-12 430 ${sy + 215})">${tanker(350, sy + 215, 0.7)}</g>` + slick(400, sy + 240, 180, 14);
  b += t(450, sy + 272, 'tanker aground in a storm', { size: 16.5, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += `<line x1="480" y1="${sy + 190}" x2="590" y2="${sy + 140}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 5"/>` + tag(548, sy + 182, '5 km', { size: 16, anchor: 'middle' });
  b += t(860, sy + 290, 'not to scale', { size: 15, anchor: 'end', italic: true, fill: C.ink });
  b += t(60, sy + 150, 'rough seas', { size: 16.5, weight: 700, fill: C.ink }) + t(60, sy + 172, 'for 3 days', { size: 16.5, weight: 700, fill: C.ink });
  // decision cards
  const cards = [
    ['Ruled out by weather', 'booms and skimmers work poorly in rough seas; burning needs calm', '#fbf1ea', C.rust],
    ['Risky here', 'detergent sprays work in rough water but push oil down towards the reef', C.cream, C.olive],
    ['Sensible plan', 'booms at the beach and reef entrance when possible; sorbents on the shore; skim once calm', '#eef5f4', C.tealDark],
  ];
  cards.forEach(([h, d, f, e], i) => (b += card(30 + i * 285, 430, 270, 160, h, d, { fill: f, edge: e, tfill: e, bfill: C.ink, ts: 19, bs: 16.5 })));
  b += t(450, 625, 'Prevention lesson: better navigation and a double hull might have stopped or reduced the spill.', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  add('06-scenario-plan',
    svg(900, 650, 'Worked example: choosing a response', b),
    'A schematic map: a tanker aground in a storm 5 km from a coral reef and a tourist beach, with rough seas for three days. Booms, skimmers and burning are ruled out by the weather; detergent sprays would push oil towards the reef; the plan is booms at the beach and reef entrance when possible, sorbents on the shore and skimming once calm.',
    'Let the weather and location in the question decide which methods you choose.',
    H2.scen);
}

// 07 Recovery calculation
{
  let b = panel(30, 110, 840, 330);
  const x0 = 60, w = 780, k = w / 6000;
  const seg = [[1800, C.tealDark, 'skimming', '1,800 t', '#ffffff'], [900, C.teal, 'sorbents', '900 t', C.ink], [3300, '#d6dedd', 'not recovered', '3,300 t', C.ink]];
  let x = x0;
  seg.forEach(([v, f, l, vl, tc]) => { b += `<rect x="${x}" y="200" width="${v * k}" height="80" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`; b += t(x + (v * k) / 2, 236, vl, { size: 19, weight: 700, anchor: 'middle', fill: tc }) + t(x + (v * k) / 2, 260, l, { size: 16, anchor: 'middle', fill: tc }); x += v * k; });
  b += t(x0, 180, 'spill: 6,000 tonnes', { size: 18, weight: 700 });
  b += path(`M${x0},300 L${x0},312 L${x0 + 2700 * k},312 L${x0 + 2700 * k},300`, { w: 2.5 }) + t(x0 + 1350 * k, 340, 'recovered 2,700 t = 45%', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(840, 140, 'invented figures', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += t(x0, 400, '2,700 ÷ 6,000 × 100 = 45%', { size: 19, weight: 700 });
  b += panel(30, 460, 840, 120, C.cream, C.olive);
  b += t(60, 498, 'Where could the rest have gone?', { size: 19, weight: 700 });
  ['evaporation', 'dispersal into the water', 'sinking', 'stranding on beaches'].forEach((s, i) => (b += pill(60 + [0, 175, 425, 560][i], 514, [160, 235, 120, 230][i], 44, s, { fill: '#ffffff', size: 16 })));
  add('07-recovery-calculation',
    svg(900, 605, 'Worked example: how much was recovered?', b),
    'A bar for a 6,000-tonne spill split into 1,800 tonnes skimmed, 900 tonnes taken up by sorbents and 3,300 tonnes not recovered. 2,700 out of 6,000 is 45%. The rest may have evaporated, dispersed into the water, sunk or stranded on beaches.',
    'Skimming and sorbents recovered 2,700 of 6,000 tonnes: 45%.',
    H2.calc);
}
