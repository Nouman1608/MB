import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-tropical-cyclones';
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
  names: '## One storm, three names (6.2.1 a)',
  where: '## Where and why they form (6.2.1 b to d)',
  imp: '## Impacts on people and the environment (6.2.2)',
  man: '## Managing the impacts (6.2.3)',
  disc: '## Discussing the strategies (6.2.4)',
  we1: '## Worked example 1: can a cyclone form here?',
};
const yes = (cx, cy) => circ(cx, cy, 15, C.tealDark, C.tealDark) + path(`M${cx - 7},${cy} l5,6 l10,-12`, { stroke: '#ffffff', w: 3.5 });
const no = (cx, cy) => circ(cx, cy, 15, C.rust, C.rust) + path(`M${cx - 6},${cy - 6} l12,12 M${cx + 6},${cy - 6} l-12,12`, { stroke: '#ffffff', w: 3.5 });
const spiral = (cx, cy, r, col = C.ink) => path(`M${cx},${cy} m0,-${r * 0.2} a${r * 0.2},${r * 0.2} 0 1,1 -${r * 0.2},${r * 0.2} M${cx - r * 0.35},${cy} q0,-${r * 0.6} ${r * 0.6},-${r * 0.55} M${cx + r * 0.35},${cy} q0,${r * 0.6} -${r * 0.6},${r * 0.55} M${cx},${cy - r * 0.6} q${r * 0.8},0 ${r * 0.95},${r * 0.5} M${cx},${cy + r * 0.6} q-${r * 0.8},0 -${r * 0.95},-${r * 0.5}`, { stroke: col, w: 4 });

// 01 Latitude band and regional names
{
  let b = '';
  const x0 = 140, x1 = 860, yE = 360, k = 5; // px per degree
  b += `<rect x="${x0}" y="${yE - 45 * k}" width="${x1 - x0}" height="${90 * k}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="${x0}" y="${yE - 30 * k}" width="${x1 - x0}" height="${25 * k}" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/><rect x="${x0}" y="${yE + 5 * k}" width="${x1 - x0}" height="${25 * k}" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
  b += line(x0, yE, x1, yE, { w: 3, color: C.ink, dash: '12 6' });
  [[30, '30° N'], [5, '5° N'], [0, 'Equator 0°'], [-5, '5° S'], [-30, '30° S']].forEach(([d, l]) => (b += line(x0 - 10, yE - d * k, x0, yE - d * k, { w: 2.5 }) + t(x0 - 16, yE - d * k + 6, l, { size: 16, weight: 700, anchor: 'end' })));
  b += t(500, yE - 17.5 * k + 6, 'cyclones form here: 5° to 30° N', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += t(500, yE + 17.5 * k + 6, 'cyclones form here: 5° to 30° S', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += tag(500, yE + 6, 'too close to the Equator: air does not spin', { size: 15.5, anchor: 'middle', fill: C.ink, bg: C.tealLight, op: 1 });
  b += t(500, yE - 37 * k, 'beyond about 30°: sea usually too cool', { size: 15.5, anchor: 'middle', fill: C.muted, weight: 600 });
  b += t(500, yE + 39 * k, 'beyond about 30°: sea usually too cool', { size: 15.5, anchor: 'middle', fill: C.muted, weight: 600 });
  b += t(860, yE - 45 * k - 10, 'schematic latitude band, not a map', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  const yb = yE + 45 * k + 40;
  b += t(450, yb, 'Same storm, regional names', { size: 19, weight: 700, anchor: 'middle' });
  const nm = [['Hurricane', 'North Atlantic and north-east Pacific'], ['Typhoon', 'north-west Pacific'], ['Cyclone', 'Indian Ocean and South Pacific']];
  nm.forEach(([h, d], i) => (b += card(30 + i * 285, yb + 18, 270, 100, h, d, { fill: '#ffffff', edge: C.ink, ts: 20, bs: 16, center: true })));
  b += t(450, yb + 150, 'Weaker systems are called tropical storms. The same conditions and strategies apply.', { size: 16, anchor: 'middle', fill: C.muted });
  add('01-latitude-and-names',
    svg(900, yb + 175, 'Where tropical cyclones form', b),
    'A schematic latitude band, not a map. Tropical cyclones form between 5° and 30° north and south of the Equator; closer than 5° the air does not spin and beyond about 30° the sea is usually too cool. The same storm is called a hurricane over the North Atlantic and north-east Pacific, a typhoon over the north-west Pacific and a cyclone over the Indian Ocean and South Pacific.',
    'Between 5° and 30° of the Equator; hurricane, typhoon and cyclone are the same storm.',
    H2.names);
}

// 02 Three conditions
{
  let b = '';
  const items = [['Latitude', '5° to 30°', 'north or south of the Equator', 'Earth’s rotation makes the air spin'], ['Ocean temperature', '≥ 27 °C', 'at least', 'warm water evaporates fast, supplying heat and moisture'], ['Ocean depth', '≥ 60 m', 'of warm water, at least', 'storm cannot stir up cold water and cut off its energy']];
  items.forEach(([h, v, q, why], i) => {
    const x = 30 + i * 285;
    b += panel(x, 110, 270, 290) + t(x + 135, 148, h, { size: 19, weight: 700, anchor: 'middle' });
    b += rrect(x + 30, 166, 210, 76, C.mustard, C.olive, 3, 14) + t(x + 135, 218, v, { size: 32, weight: 700, anchor: 'middle' });
    b += t(x + 135, 270, q, { size: 16, anchor: 'middle', fill: C.muted });
    b += tl(x + 135, 316, wrap(why, 230, 16), { size: 16, anchor: 'middle', weight: 600 }, 21);
  });
  // depth cross-section
  b += panel(30, 420, 840, 260);
  b += `<rect x="60" y="470" width="780" height="180" fill="#9fc1bd"/>` + `<rect x="60" y="470" width="780" height="90" fill="${C.teal}"/>`;
  b += `<rect x="60" y="470" width="780" height="90" fill="url(#warm)" opacity="0.0"/>`;
  b += line(60, 470, 840, 470, { w: 3, color: C.tealDark });
  b += line(60, 560, 840, 560, { w: 2.5, color: C.ink, dash: '8 6' });
  b += tag(450, 520, 'warm layer at least 27 °C', { size: 16.5, anchor: 'middle', fill: C.olive, bg: C.cream, op: 1 }) + tag(450, 612, 'cooler water below', { size: 16.5, anchor: 'middle', fill: C.ink });
  b += arrow(110, 476, 110, 552, { w: 3 }) + arrow(110, 552, 110, 478, { w: 3 }) + t(126, 520, 'at least 60 m', { size: 16.5, weight: 700 });
  b += cloud(700, 450, 0.55, '#ffffff');
  b += t(840, 455 - 0, '', {});
  b += t(450, 668, 'not to scale', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('02-three-conditions',
    svg(900, 705, 'Three conditions, exact numbers', b),
    'Three cards give the syllabus values: latitude between 5° and 30° north or south, ocean temperature at least 27 °C and a warm layer at least 60 m deep. A cross-section shows a warm surface layer at least 60 m deep over cooler water below.',
    'Learn the numbers: 5° to 30°, at least 27 °C, at least 60 m.',
    H2.where);
}

// 03 Growth and decay
{
  let b = '';
  const sy = 520;
  b += `<rect x="30" y="110" width="840" height="${sy - 110}" rx="14" fill="#eef1f8"/>`;
  b += `<rect x="30" y="${sy}" width="560" height="50" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + `<path d="M590,${sy} L870,${sy - 30} L870,${sy + 50} L590,${sy + 50} Z" fill="#a77b52" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(300, sy + 33, 'warm sea, at least 27 °C', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(730, sy + 33, 'land', { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' });
  // cloud walls
  const wall = (x) => `<path d="M${x - 60},${sy - 10} Q${x - 80},${sy - 200} ${x - 30},${sy - 300} Q${x},${sy - 340} ${x + 30},${sy - 300} Q${x + 80},${sy - 200} ${x + 60},${sy - 10} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += wall(165) + wall(455);
  b += t(300, sy - 160, 'EYE', { size: 18, weight: 700, anchor: 'middle' }) + t(300, sy - 138, 'calm, clear', { size: 15.5, anchor: 'middle', fill: C.muted });
  // rising arrows inside walls
  b += arrow(165, sy - 30, 165, sy - 270, { color: C.rust, w: 4, marker: 'ahR' }) + arrow(455, sy - 30, 455, sy - 270, { color: C.rust, w: 4, marker: 'ahR' });
  // inflow arrows at surface
  b += arrow(36, sy - 20, 98, sy - 20, { w: 3.5 }) + arrow(586, sy - 20, 524, sy - 20, { w: 3.5 });
  // outflow at top
  b += arrow(135, sy - 330, 60, sy - 350, { w: 3 }) + arrow(485, sy - 330, 560, sy - 350, { w: 3 });
  const lab = [[1, 60, sy - 50], [2, 125, sy - 150], [3, 215, sy - 280], [4, 640, sy - 110]];
  lab.forEach(([n, x, y]) => (b += badge(x, y, 16, String(n), C.mustard)));
  // spiral inset
  b += circ(720, 230, 70, '#ffffff', C.ink, 2.5) + spiral(720, 230, 60, C.tealDark) + t(720, 326, 'from above: spins', { size: 15.5, anchor: 'middle', weight: 600 });
  // decay over land
  b += arrow(600, sy - 70, 720, sy - 70, { w: 3.5, dash: '8 6' }) + tl(730, sy - 76, ['over land:', 'weakens'], { size: 16, weight: 700, fill: C.rust }, 20);
  b += t(860, 132, 'schematic, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  const key = [
    'Warm, moist air rises from the sea, creating very low pressure.',
    'It cools; water vapour condenses into towering clouds, releasing heat that makes the air rise faster.',
    'More air is drawn in across the sea and Earth’s rotation makes it spiral; a calm eye forms, ringed by the strongest winds and heaviest rain.',
    'Over land or cooler water it loses its warm, moist air supply, and friction slows the winds.',
  ];
  let y = 610;
  key.forEach((s, i) => { const L = wrap(s, 760, 16.5); b += badge(50, y - 6, 15, String(i + 1), C.mustard) + tl(78, y, L, { size: 16.5 }, 21); y += L.length * 21 + 12; });
  add('03-growth-and-decay',
    svg(900, y + 10, 'How a tropical cyclone grows and dies', b),
    'A schematic cross-section over warm sea. Warm, moist air rises, creating very low pressure; it cools and condenses into towering clouds, releasing heat that drives faster rising; more air is drawn in and spirals because of Earth’s rotation, around a calm, clear eye. Over land the storm loses its supply of warm, moist air and friction slows it.',
    'Warm sea feeds rising, condensing air; over land the supply is cut and the storm weakens.',
    H2.where);
}

// 04 Three processes, ten impacts
{
  let b = '';
  const proc = [['Strong winds', C.ink, 160], ['Heavy rainfall', C.blue, 450], ['Storm surge', C.tealDark, 740]];
  b += t(450, 128, 'The three physical processes behind the impacts', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  proc.forEach(([p, c, x]) => (b += pill(x - 125, 140, 250, 34, p, { fill: c, edge: c, color: '#ffffff', size: 17 })));
  const imp = [
    ['Buildings and infrastructure', 'roofs, power lines, coastal roads', [0, 2]],
    ['Loss of crops', 'flattened; salt from sea water', [0, 2]],
    ['Livestock and habitats', 'animals drown; mangroves, reefs', [1, 2]],
    ['Evacuation', 'people and livestock move inland', [0, 1, 2]],
    ['Flooding', 'rain on land, surge at coast', [1, 2]],
    ['Landslides', 'saturated soil on steep slopes', [1]],
    ['Contaminated drinking water', 'sea water and sewage in wells', [1, 2]],
    ['Water-related disease', 'cholera, diarrhoea, mosquitoes', [1, 2]],
    ['Financial losses', 'rebuilding, harvests, tourism', [0, 1, 2]],
    ['Human health', 'debris injuries, drowning, stress', [0, 1, 2]],
  ];
  imp.forEach(([h, d, src], i) => {
    const x = 30 + (i % 2) * 430, y = 196 + Math.floor(i / 2) * 82;
    b += rrect(x, y, 410, 70, '#ffffff', C.panelEdge, 2, 10) + t(x + 16, y + 28, h, { size: 17, weight: 700 }) + t(x + 16, y + 52, d, { size: 15.5, fill: C.muted });
  });
  b += panel(30, 618, 840, 140, C.cream, C.olive);
  b += t(60, 656, 'Make the chain clear, for example:', { size: 17, weight: 700 });
  const ch = ['storm surge', 'sea water floods farmland', 'salt left in soil', 'crops fail for more than one season', 'food shortages, lost income'];
  ch.forEach((c, i) => { const x = 46 + i * 166, w = 146; const L = wrap(c, 140, 15, true); b += rrect(x, 680, w, 66, '#ffffff', C.olive, 2, 10) + tl(x + w / 2, 680 + (L.length > 2 ? 21 : L.length > 1 ? 29 : 38), L, { size: 15, weight: 600, anchor: 'middle' }, 18); if (i < ch.length - 1) b += arrow(x + w + 2, 715, x + w + 17, 715, { w: 2.5 }); });
  add('04-three-processes-ten-impacts',
    svg(900, 780, 'Three processes, ten impacts', b),
    'Strong winds, heavy rainfall and storm surge drive the ten syllabus impacts: damage to buildings and infrastructure, loss of crops, livestock and habitats, evacuation, flooding, landslides, contaminated drinking water, water-related disease, financial losses and human health. An example chain: storm surge floods farmland, leaves salt in the soil, crops fail for more than one season, causing food shortages and lost income.',
    'Link every impact to wind, rain or storm surge, then follow the chain to people.',
    H2.imp);
}

// 05 Before, during, after
{
  let b = '';
  const cols = [
    ['Before', C.tealDark, '#eef5f4', [['Monitoring and warning', 'satellites, radar, aircraft; warnings days ahead by radio, phone, sirens'], ['Structure of buildings', 'roof straps, shutters, raised floors, stronger frames'], ['Disaster preparation', 'plans, drills, stores of food, water, medicine; rescue teams']]],
    ['During', C.olive, '#fbf6e2', [['Evacuation', 'people and livestock inland or to higher ground'], ['Shelters', 'strong raised buildings, e.g. along Bangladesh’s low coast']]],
    ['After', C.rust, '#fbf1ea', [['Rebuilding', 'ideally to stronger standards'], ['International aid', 'money, food, temporary housing, water purification, medical teams']]],
  ];
  cols.forEach(([h, e, f, items], i) => {
    const x = 30 + i * 285;
    b += `<path d="M${x},110 L${x + 255},110 L${x + 275},140 L${x + 255},170 L${x},170 Z" fill="${e}"/>` + t(x + 128, 148, h, { size: 21, weight: 700, anchor: 'middle', fill: '#ffffff' });
    items.forEach(([n, d], j) => { const y = 186 + j * 128; b += rrect(x, y, 270, 116, f, e, 2.5, 12) + tl(x + 16, y + 30, wrap(n, 240, 17.5, true), { size: 17.5, weight: 700 }, 22) + tl(x + 16, y + 30 + wrap(n, 240, 17.5, true).length * 22 + 4, wrap(d, 240, 15.5), { size: 15.5, fill: C.ink }, 20); });
  });
  b += panel(30, 580, 840, 76, C.cream, C.olive) + t(450, 614, 'Strategies depend on each other: a warning only saves lives if people', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 638, 'have a plan, transport and a shelter to go to.', { size: 17, weight: 700, anchor: 'middle' });
  b += t(450, 690, 'Land use zoning is NOT one of the seven cyclone strategies.', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  add('05-before-during-after',
    svg(900, 715, 'Seven strategies: before, during, after', b),
    'Before the cyclone: monitoring and warning, stronger building structure and disaster preparation. During: evacuation and shelters, such as Bangladesh’s raised cyclone shelters. After: rebuilding to stronger standards and international aid. The strategies depend on each other, and land use zoning is not one of the cyclone strategies.',
    'Prepare before, protect people during, rebuild and receive aid after.',
    H2.man);
}

// 06 Worked example: which location
{
  let b = panel(30, 110, 840, 420);
  const cx = [110, 280, 450, 620, 780];
  ['Location', 'Latitude', 'Sea temp.', 'Warm depth', 'Cyclone?'].forEach((h, i) => (b += t(cx[i], 150, h, { size: 17, weight: 700, anchor: 'middle', fill: C.muted })));
  b += t(cx[1], 172, '5° to 30°', { size: 15, anchor: 'middle', fill: C.olive }) + t(cx[2], 172, '≥ 27 °C', { size: 15, anchor: 'middle', fill: C.olive }) + t(cx[3], 172, '≥ 60 m', { size: 15, anchor: 'middle', fill: C.olive });
  const rows = [['A', '2° N', 0, '29 °C', 1, '80 m', 1, 'too close to the Equator'], ['B', '15° S', 1, '28 °C', 1, '90 m', 1, 'meets all three'], ['C', '22° N', 1, '25 °C', 0, '70 m', 1, 'sea below 27 °C'], ['D', '18° N', 1, '28 °C', 1, '40 m', 0, 'warm layer under 60 m']];
  rows.forEach(([l, la, ok1, te, ok2, de, ok3, why], i) => {
    const y = 190 + i * 82, all = ok1 && ok2 && ok3;
    b += `<rect x="40" y="${y}" width="820" height="74" rx="10" fill="${all ? C.tealLight : i % 2 ? '#ffffff' : '#f1f5f4'}"/>`;
    b += badge(cx[0], y + 37, 20, l, all ? C.mustard : '#ffffff');
    [[la, ok1], [te, ok2], [de, ok3]].forEach(([v, ok], j) => (b += t(cx[j + 1] - 12, y + 43, v, { size: 18, weight: 700, anchor: 'middle', fill: ok ? C.ink : C.rust }) + (ok ? yes(cx[j + 1] + 50, y + 37) : no(cx[j + 1] + 50, y + 37))));
    b += t(cx[4], y + 34, all ? 'YES' : 'No', { size: 18, weight: 700, anchor: 'middle', fill: all ? C.tealDark : C.rust }) + t(cx[4], y + 58, why, { size: 15, anchor: 'middle', fill: C.muted });
  });
  b += t(840, 515, 'invented data', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += t(450, 566, 'Only B meets all three. State the condition each other location fails, with the number.', { size: 16.5, anchor: 'middle', weight: 600 });
  add('06-which-location',
    svg(900, 595, 'Worked example: can a cyclone form here?', b),
    'A checklist grid for four invented ocean locations. A at 2° N fails latitude. B at 15° S, 28 °C and 90 m meets all three conditions. C fails with sea at 25 °C. D fails because its warm layer is only 40 m deep.',
    'Only location B meets all three conditions; name the condition each other one fails.',
    H2.we1);
}
