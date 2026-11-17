import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-the-atmosphere';
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
  str: '## Structure of the atmosphere (4.1.1 a and b)',
  comp: '## Composition of clean air (4.1.1 c)',
  clim: '## Climate (4.1.2)',
  ghe: '## The natural greenhouse effect (4.1.3)',
  we1: '## Worked example 1: composition calculations',
  diag: '## Interpreting diagrams',
};
const SOIL = '#a77b52';

// 01 Four layers
{
  let b = '';
  const layers = [['Thermosphere', 'the highest of the four', '#e6e9f2'], ['Mesosphere', 'above the stratosphere', '#e9eef6'], ['Stratosphere', 'ozone layer in the LOWER stratosphere', '#eef3f7'], ['Troposphere', 'where we live; almost all weather', '#f3f6f5']];
  const top = 110, hh = 130;
  layers.forEach(([n, d, f], i) => {
    const y = top + i * hh;
    b += `<rect x="30" y="${y}" width="840" height="${hh}" fill="${f}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += badge(70, y + hh / 2, 20, String(4 - i), C.mustard);
    b += t(110, y + hh / 2 - 4, n, { size: 22, weight: 700 }) + t(110, y + hh / 2 + 22, d, { size: 16.5, fill: C.muted });
  });
  // ozone band in lower stratosphere
  const sy = top + 2 * hh;
  b += `<rect x="470" y="${sy + 78}" width="390" height="34" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + t(665, sy + 101, 'ozone layer', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  // UV arrows
  [560, 640, 720].forEach((x, i) => (b += arrow(x, top + 20, x, sy + 72, { color: C.olive, w: 3.5, marker: 'ahO' })));
  b += arrow(800, top + 20, 800, top + 4 * hh - 6, { color: C.olive, w: 2.5, marker: 'ahO', dash: '6 6' });
  b += tag(680, top + 50, 'Sun’s ultraviolet radiation', { size: 15.5, anchor: 'middle', fill: C.olive });
  b += tag(790, top + 4 * hh - 70, 'less UV reaches the surface', { size: 15.5, anchor: 'end', fill: C.ink });
  // ground with weather
  const gy = top + 4 * hh;
  b += `<rect x="30" y="${gy}" width="840" height="34" fill="${C.grass}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += cloud(470, gy - 70, 0.6, '#ffffff') + rain(440, gy - 55, 4, 16, 14);
  b += house(560, gy - 24, 1) + tree(530, gy, 0.9);
  b += t(450, gy + 66, 'Order from the surface up: Troposphere, Stratosphere, Mesosphere, Thermosphere (T, S, M, T).', { size: 16.5, anchor: 'middle', weight: 600 });
  b += t(450, top + 2 * hh - 14, 'not to scale', { size: 15, anchor: 'start', fill: C.muted, italic: true });
  add('01-four-layers',
    svg(900, gy + 90, 'Four layers of the atmosphere', b),
    'A schematic column, not to scale. From the surface up: troposphere, where we live and almost all weather happens; stratosphere, with the ozone layer in its lower part absorbing much of the Sun’s ultraviolet radiation; mesosphere; and thermosphere, the highest of the four.',
    'Troposphere, stratosphere, mesosphere, thermosphere: the ozone layer is in the lower stratosphere.',
    H2.str);
}

// 02 Weather vs climate
{
  let b = panel(30, 110, 840, 400);
  const x0 = 110, y0 = 440, gw = 720, gh = 260;
  b += line(x0, y0, x0 + gw, y0, { w: 3 }) + line(x0, y0, x0, y0 - gh, { w: 3 });
  b += `<text x="64" y="${y0 - gh / 2}" font-size="16" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 64 ${y0 - gh / 2})">summer temperature</text>`;
  b += t(x0 + gw, y0 + 28, 'years →', { size: 16, anchor: 'end', fill: C.muted });
  let d = '', pts = [];
  for (let i = 0; i <= 40; i++) { const x = x0 + 10 + i * 17.5; const trend = y0 - 90 - i * 2.2; const n = Math.sin(i * 2.7) * 22 + Math.cos(i * 1.3) * 14; pts.push([x, trend + n]); }
  d = 'M' + pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' L');
  b += path(d, { stroke: C.muted, w: 2 });
  pts.forEach(([x, y]) => (b += circ(x, y, 3.5, C.muted, C.muted, 1)));
  b += path(`M${x0 + 10},${y0 - 90} L${x0 + 10 + 40 * 17.5},${y0 - 90 - 40 * 2.2}`, { stroke: C.tealDark, w: 5 });
  // highlight one hot year
  const [hx, hy] = pts.reduce((a, p) => (p[1] < a[1] ? p : a), pts[0]);
  b += circ(hx, hy, 9, 'none', C.rust, 3);
  b += tag(hx - 10, hy - 18, 'one very hot summer = weather', { size: 15.5, anchor: 'end', fill: C.rust });
  b += tag(x0 + 300, y0 - 70, 'average rising over decades = change in climate', { size: 15.5, anchor: 'start', fill: C.tealDark });
  b += t(840, 140, 'schematic', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += card(30, 530, 410, 140, 'Weather', 'the condition of the atmosphere at a given time: temperature, rainfall, wind, cloud cover, humidity', { fill: '#ffffff', edge: C.panelEdge, ts: 19, bs: 16 });
  b += card(460, 530, 410, 140, 'Climate', 'the weather conditions in a location based on the weather over many years (often 30)', { fill: '#eef5f4', edge: C.tealDark, tfill: C.tealDark, ts: 19, bs: 16, bfill: C.ink });
  add('02-weather-vs-climate',
    svg(900, 695, 'Weather or climate?', b),
    'A schematic graph of summer temperatures over many years. Each dot is one year’s weather and jumps up and down; one very hot summer is weather. The trend line through them, rising over decades, is a change in climate. Climate is the weather conditions in a location based on the weather over many years.',
    'One hot summer is weather; a rising average over decades is a change in climate.',
    H2.clim);
}

// 03 Five-step natural greenhouse effect
{
  let b = '';
  const gy = 600, ly = 300;
  b += `<rect x="30" y="110" width="840" height="${gy - 110}" rx="14" fill="#eef1f8"/>`;
  b += `<rect x="30" y="${gy}" width="500" height="60" fill="${SOIL}" stroke="${C.ink}" stroke-width="2.5"/><rect x="530" y="${gy}" width="340" height="60" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(280, gy + 38, 'land', { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(700, gy + 38, 'ocean', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += sun(90, 160, 30);
  // greenhouse gas layer
  b += `<rect x="40" y="${ly - 26}" width="820" height="52" rx="10" fill="${C.tealLight}" opacity="0.8" stroke="${C.tealDark}" stroke-width="2" stroke-dasharray="8 6"/>`;
  for (let i = 0; i < 26; i++) b += circ(60 + i * 31, ly + (i % 2 ? 10 : -10), 5, C.tealDark, C.tealDark, 1);
  b += tag(650, ly + 52, 'greenhouse gases and clouds', { size: 16, anchor: 'end', fill: C.tealDark, bg: '#eef1f8', op: 1 });
  b += cloud(560, 210, 0.7, '#ffffff');
  // 1: solar passes through
  b += arrow(130, 190, 300, gy - 6, { color: C.mustard, w: 6, marker: 'ahO' });
  b += arrow(150, 180, 520, 198, { color: C.mustard, w: 6, marker: 'ahO' });
  // 3: reflected from cloud and surface
  b += arrow(560, 175, 640, 125, { color: C.mustard, w: 4, marker: 'ahO' });
  b += arrow(330, gy - 10, 420, 130, { color: C.mustard, w: 3.5, marker: 'ahO', dash: '8 6' });
  // 4: infrared from surface, absorbed & re-emitted
  b += path(`M680,${gy - 4} q-12,-40 0,-80 q12,-40 0,-80 q-12,-40 0,-${gy - ly - 186}`, { stroke: C.rust, w: 4, extra: `marker-end="url(#ahR)"` });
  b += arrow(760, ly + 30, 760, gy - 8, { color: C.rust, w: 4, marker: 'ahR' });
  // badges
  b += badge(210, 380, 17, '1', C.mustard) + badge(250, gy - 34, 17, '2', C.mustard) + badge(640, 160, 17, '3', C.mustard) + badge(412, 400, 17, '3', C.mustard) + badge(712, 460, 17, '4', C.mustard) + badge(790, 470, 17, '4', C.mustard);
  b += t(860, 130, 'not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  const key = [
    ['Solar radiation passes through the atmosphere', C.olive],
    ['Some is absorbed by land and oceans, heating the Earth', C.olive],
    ['Some is reflected back into space (clouds, ice, light surfaces)', C.olive],
    ['Heat (infrared) from the surface is absorbed and re-emitted back to the surface by greenhouse gases and clouds', C.rust],
    ['This natural process warms the Earth enough to support life', C.tealDark],
  ];
  let y = 700;
  key.forEach(([s, c], i) => { const L = wrap(s, 760, 17); b += badge(52, y - 6, 15, String(i + 1), C.mustard) + tl(80, y, L, { size: 17, fill: i === 4 ? C.tealDark : C.ink, weight: i === 4 ? 700 : 400 }, 22); y += L.length * 22 + 14; });
  b += panel(30, y + 4, 840, 64, C.cream, C.olive) + t(450, y + 44, 'Without it: about −18 °C average. With it: about 15 °C.', { size: 18, weight: 700, anchor: 'middle' });
  add('03-natural-greenhouse-steps',
    svg(900, y + 92, 'The natural greenhouse effect in five steps', b),
    'A schematic cross-section. 1: solar radiation passes through the atmosphere. 2: some is absorbed by land and oceans, heating the Earth. 3: some is reflected back to space by clouds and light surfaces. 4: heat given off by the surface is absorbed by greenhouse gases and clouds and re-emitted back to the surface. 5: this keeps the Earth warm enough for life, about 15 °C instead of about −18 °C.',
    'Pass through, absorb, reflect, absorb and re-emit, warm enough for life: one mark per step.',
    H2.ghe);
}

// 04 Pie chart worked example
{
  let b = panel(30, 110, 440, 470);
  const cx = 250, cy = 330, r = 170;
  const seg = [[78, C.tealLight, 'Nitrogen'], [21, C.cream, 'Oxygen'], [1, C.rust, 'Other']];
  let a0 = -90;
  seg.forEach(([p, f]) => { const a1 = a0 + p * 3.6; const large = p > 50 ? 1 : 0; const x1 = cx + r * Math.cos(a0 * Math.PI / 180), y1 = cy + r * Math.sin(a0 * Math.PI / 180), x2 = cx + r * Math.cos(a1 * Math.PI / 180), y2 = cy + r * Math.sin(a1 * Math.PI / 180); b += `<path d="M${cx},${cy} L${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 ${large} 1 ${x2.toFixed(1)},${y2.toFixed(1)} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`; a0 = a1; });
  b += t(cx + 40, cy + 40, 'Nitrogen', { size: 20, weight: 700, anchor: 'middle' }) + t(cx + 40, cy + 66, '78% → 281°', { size: 17, anchor: 'middle' });
  b += t(cx - 90, cy - 70, 'Oxygen', { size: 18, weight: 700, anchor: 'middle' }) + t(cx - 90, cy - 46, '21% → 76°', { size: 16.5, anchor: 'middle' });
  b += line(cx - 6, cy - r + 2, cx - 30, 132, { w: 2 }) + t(cx - 34, 140, 'other gases 1% → 4°', { size: 15.5, anchor: 'end', weight: 600 });
  b += t(250, 556, 'Each 1% = 360 ÷ 100 = 3.6°', { size: 17, weight: 700, anchor: 'middle' });
  b += panel(490, 110, 380, 470);
  b += t(512, 148, '500 cm³ of clean air', { size: 19, weight: 700 });
  b += tl(512, 186, ['Nitrogen = 500 × 78 ÷ 100', '= 390 cm³', '', 'Oxygen = 500 × 21 ÷ 100', '= 105 cm³', '', 'Other = 500 − 390 − 105', '= 5 cm³ (1%)'], { size: 17 }, 25);
  b += rrect(510, 410, 340, 150, C.cream, C.olive, 2.5, 10);
  b += t(528, 442, 'Pie chart angles', { size: 17, weight: 700 }) + tl(528, 470, ['78 × 3.6 = 280.8° ≈ 281°', '21 × 3.6 = 75.6° ≈ 76°', '1 × 3.6 = 3.6° ≈ 4°', 'check: 280.8 + 75.6 + 3.6 = 360'], { size: 16 }, 22);
  add('04-composition-pie',
    svg(900, 605, 'Worked example: composition of clean air', b),
    'A pie chart of clean air: nitrogen 78% (about 281°), oxygen 21% (about 76°) and other gases 1% (about 4°), using 3.6° per 1%. In a 500 cm³ sample there are 390 cm³ of nitrogen, 105 cm³ of oxygen and 5 cm³ of other gases.',
    'Each 1% is 3.6°: nitrogen 281°, oxygen 76°, other gases 4°.',
    H2.we1);
}

// 05 Reading arrows on exam diagrams
{
  let b = '';
  const W = 270, H = 330;
  const pan = (x, title, sub, art) => panel(x, 110, W, H) + t(x + W / 2, 148, title, { size: 20, weight: 700, anchor: 'middle' }) + tl(x + W / 2, 380, wrap(sub, W - 40, 16), { size: 16, anchor: 'middle', fill: C.muted }, 21) + art;
  const ground = (x) => `<rect x="${x + 20}" y="310" width="${W - 40}" height="30" fill="${SOIL}" stroke="${C.ink}" stroke-width="2"/>`;
  const gas = (x) => `<rect x="${x + 20}" y="180" width="${W - 40}" height="34" rx="8" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2" stroke-dasharray="6 5"/>`;
  b += pan(30, 'Reflection', 'arrows bouncing off clouds or ice', ground(30) + cloud(165, 250, 0.55, '#ffffff') + arrow(70, 180, 140, 236, { color: C.mustard, w: 4, marker: 'ahO' }) + arrow(190, 236, 255, 180, { color: C.mustard, w: 4, marker: 'ahO' }));
  b += pan(315, 'Absorption', 'arrows ending at the ground or sea', ground(315) + arrow(380, 180, 450, 304, { color: C.mustard, w: 4, marker: 'ahO' }) + arrow(450, 180, 520, 304, { color: C.mustard, w: 4, marker: 'ahO' }));
  b += pan(600, 'Absorbed and re-emitted', 'arrows leave the surface, then turn back from the gas layer', ground(600) + gas(600) + arrow(690, 306, 690, 220, { color: C.rust, w: 4, marker: 'ahR' }) + arrow(780, 220, 780, 304, { color: C.rust, w: 4, marker: 'ahR' }) + path('M690,218 Q735,190 780,218', { stroke: C.rust, w: 4 }));
  b += panel(30, 460, 840, 110, C.cream, C.olive);
  b += t(60, 498, 'Greenhouse gases ABSORB and RE-EMIT heat; they do not “reflect” it.', { size: 18, weight: 700 });
  b += t(60, 528, 'Roughly 30% of incoming solar radiation is reflected to space overall;', { size: 16.5 }) + t(60, 552, 'if a question gives figures, use those, and check each stage adds up.', { size: 16.5 });
  add('05-reading-arrows',
    svg(900, 595, 'Reading greenhouse diagrams', b),
    'Three panels explain arrow types. Reflection: arrows bounce off clouds or ice. Absorption: arrows end at the ground or sea. Absorption and re-emission: arrows leave the surface and turn back from the greenhouse gas layer. Greenhouse gases absorb and re-emit heat rather than reflect it; roughly 30% of incoming solar radiation is reflected overall.',
    'Bounce off = reflected; end at the surface = absorbed; turn back from the gas layer = re-emitted.',
    H2.diag);
}
