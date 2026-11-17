import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-water-sources-and-supply';
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
  src: '## Sources of fresh water',
  avail: '## Comparing the availability of potable water',
  dam: '## Multipurpose dams',
  we: '## Worked example: how long will a reservoir last?',
};

// 01 Four sources of fresh water
{
  let b = '';
  const gy = 330;
  b += `<rect x="30" y="110" width="840" height="${gy - 110}" rx="14" fill="#eef1f8"/>`;
  b += cloud(150, 160, 0.8, '#ffffff') + rain(110, 185, 5, 18, 18);
  // land with layers
  b += `<path d="M30,${gy} L620,${gy} L660,${gy + 10} L870,${gy + 10} L870,560 L30,560 Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  b += `<rect x="30" y="${gy + 50}" width="590" height="90" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>`;
  for (let i = 0; i < 26; i++) b += circ(50 + (i % 13) * 44, gy + 70 + Math.floor(i / 13) * 40, 4, C.blue, C.blue, 1);
  b += `<rect x="30" y="${gy + 140}" width="590" height="90" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
  b += tag(470, gy + 104, 'aquifer: permeable rock holding ground water', { size: 15.5, anchor: 'middle', fill: C.blue });
  b += t(470, gy + 192, 'impermeable rock', { size: 15.5, weight: 700, anchor: 'middle', fill: '#ffffff' });
  // house with roof collection
  b += house(90, gy - 40, 1.6) + `<rect x="150" y="${gy - 34}" width="22" height="34" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`;
  // well
  b += `<rect x="250" y="${gy - 24}" width="34" height="24" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + line(267, gy, 267, gy + 110, { w: 4, color: C.ink });
  // river / reservoir
  b += `<path d="M360,${gy} Q420,${gy + 34} 480,${gy} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
  b += tag(420, gy + 36, 'lake or river', { size: 15, anchor: 'middle', fill: C.tealDark, bg: '#d8e3c6', op: 1 }) + tag(267, gy - 34, 'well', { size: 15, anchor: 'middle', bg: '#eef1f8', op: 1 }) + tag(630, gy - 60, 'desalination', { size: 15, anchor: 'middle', bg: '#eef1f8', op: 1 });
  // sea and desal plant
  b += `<rect x="660" y="${gy + 10}" width="210" height="150" fill="${C.teal}"/>` + line(660, gy + 10, 870, gy + 10, { color: C.tealDark, w: 2.5 });
  b += `<rect x="600" y="${gy - 50}" width="60" height="50" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2"/>` + path(`M660,${gy - 10} L700,${gy - 10} L700,${gy + 40}`, { stroke: C.rockDark, w: 6 });
  b += t(765, gy + 70, 'ocean', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  const bd = [[1, 210, 200], [2, 420, 290], [3, 300, 280], [4, 690, 250]];
  bd.forEach(([n, x, y]) => (b += badge(x, y, 17, String(n), C.mustard)));
  b += t(860, 132, 'schematic, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  const key = [['Atmosphere', 'rain and snow: collected from roofs and surfaces; snowmelt feeds rivers'], ['Surface water', 'rivers, lakes and reservoirs: pumped or piped; reservoirs store water behind dams'], ['Ground water', 'aquifers and wells: wells and boreholes drilled into permeable rock'], ['Oceans', 'desalination plants remove salt from seawater']];
  key.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * 430, y = 590 + Math.floor(i / 2) * 80;
    b += badge(x + 20, y + 20, 16, String(i + 1), C.mustard) + t(x + 46, y + 26, h, { size: 18, weight: 700 }) + tl(x + 46, y + 50, wrap(d, 370, 15.5), { size: 15.5, fill: C.muted }, 19);
  });
  add('01-four-sources',
    svg(900, 770, 'Four sources of fresh water', b),
    'A schematic cross-section, not to scale. 1: the atmosphere, with rain collected from a roof. 2: surface water in a river and a reservoir behind a dam. 3: ground water reached by a well drilled into an aquifer of permeable rock above impermeable rock. 4: the ocean, used by a desalination plant.',
    'Fresh water comes from the atmosphere, surface water, ground water and, by desalination, the ocean.',
    H2.src);
}

// 02 Comparing availability
{
  let b = '';
  const rows = [
    ['Water-rich region', 'high rainfall through the year; large rivers or lakes; plentiful aquifers', 'Water-poor region', 'low or unreliable rainfall; high evaporation in hot climates; few permanent rivers'],
    ['Urban', 'treatment works and piped supplies: many people in a small area make infrastructure worth building', 'Rural', 'wells, rivers or rainwater, maybe untreated; people may walk long distances to collect water'],
    ['Wealthier countries', 'afford reservoirs, treatment works, pipes and sewage treatment; wastewater cleaned before release', 'Many lower-income countries', 'fewer people with piped potable water; untreated sewage may enter rivers used for drinking'],
  ];
  rows.forEach(([h1, d1, h2, d2], i) => {
    const y = 110 + i * 144;
    b += card(30, y, 395, 128, h1, d1, { fill: '#eef5f4', edge: C.tealDark, tfill: C.tealDark, ts: 19, bs: 16, bfill: C.ink });
    b += card(475, y, 395, 128, h2, d2, { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, ts: 19, bs: 16, bfill: C.ink });
    b += circ(450, y + 64, 22, '#ffffff', C.ink, 2.5) + t(450, y + 70, 'vs', { size: 16, weight: 700, anchor: 'middle' });
  });
  b += panel(30, 548, 840, 100, C.cream, C.olive);
  b += t(60, 584, 'Availability also depends on how many people share the water.', { size: 17.5, weight: 700 });
  b += t(60, 614, 'Fast-growing cities can outstrip infrastructure, leaving informal settlements without safe water.', { size: 16 });
  b += t(60, 636, 'Compare with “whereas” and give a reason for each difference.', { size: 16, fill: C.muted });
  add('02-availability-compared',
    svg(900, 670, 'Who has potable water?', b),
    'Three comparisons. Water-rich regions have high, year-round rainfall, large rivers or aquifers, whereas water-poor regions have low or unreliable rain, high evaporation and few permanent rivers. Urban areas usually have piped, treated supplies, whereas rural areas may rely on untreated wells or rivers. Wealthier countries afford treatment and sewage works, whereas in many lower-income countries untreated sewage may enter rivers used for drinking.',
    'Rainfall, settlement type and wealth decide who has safe drinking water.',
    H2.avail);
}

// 03 Multipurpose dam: weigh it up
{
  let b = '';
  const gy = 380;
  b += `<rect x="30" y="110" width="840" height="300" rx="14" fill="#eef1f8"/>`;
  b += `<rect x="30" y="200" width="300" height="${gy - 200 + 30}" fill="${C.teal}"/>` + line(30, 200, 330, 200, { color: C.tealDark, w: 2.5 });
  b += `<path d="M30,${gy + 30} L30,${gy - 50} Q200,${gy - 4} 330,${gy + 4} L330,${gy + 30} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<path d="M330,180 L370,180 L400,${gy + 30} L330,${gy + 30} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="400" y="${gy + 4}" width="470" height="26" fill="#d8e3c6"/>`;
  b += t(180, 240, 'reservoir', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  for (let i = 0; i < 5; i++) b += `<ellipse cx="${110 + i * 42}" cy="${gy - 8 + i * 2}" rx="16" ry="6" fill="${C.olive}" opacity="0.7"/>`;
  b += t(200, gy - 30, 'silt trapped', { size: 15.5, weight: 700, anchor: 'middle', fill: C.olive });
  b += path(`M400,${gy + 14} L870,${gy + 14}`, { stroke: C.blue, w: 10 });
  b += t(560, gy - 50, 'river downstream:', { size: 15.5, weight: 600, anchor: 'middle', fill: C.blue }) + t(560, gy - 26, 'steadier flow, less silt', { size: 15.5, weight: 600, anchor: 'middle', fill: C.blue });
  b += house(700, gy - 22, 1.1) + house(750, gy - 20, 1) + house(800, gy - 22, 1.1) + t(760, gy - 50, 'towns protected from floods', { size: 15.5, anchor: 'middle', weight: 600 });
  b += t(860, 132, 'schematic, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += panel(30, 430, 410, 270, '#eef5f4', C.tealDark) + t(54, 468, 'Benefits', { size: 20, weight: 700, fill: C.tealDark });
  b += bullets(54, 500, ['water supply, energy and flood control in one project', 'renewable electricity, no emissions in use', 'reliable irrigation raises crop yields', 'jobs in construction, tourism, fishing', 'towns downstream protected from floods'], 370, { size: 16, gap: 6 }).svg;
  b += panel(460, 430, 410, 270, '#fbf1ea', C.rust) + t(484, 468, 'Limitations', { size: 20, weight: 700, fill: C.rust });
  b += bullets(484, 500, ['very high cost; may need foreign loans', 'flooded land displaces people; farmland and habitats lost', 'silt trapped: reservoir fills; downstream farms lose fertile deposits', 'blocks fish migration; changes ecosystems downstream', 'evaporation losses; disputes with countries downstream'], 370, { size: 16, gap: 6 }).svg;
  add('03-dam-weighed',
    svg(900, 725, 'A multipurpose dam: weighing it up', b),
    'A schematic dam and reservoir with silt trapped behind the dam and a steadier river protecting towns downstream. Benefits: water, energy and flood control together; renewable electricity; reliable irrigation; jobs; flood protection. Limitations: very high cost; people displaced and land flooded; silt fills the reservoir and is lost to farms downstream; fish migration blocked; evaporation and disputes downstream.',
    'A dam brings water, power and flood control, but floods land, traps silt and changes the river.',
    H2.dam);
}

// 04 Reservoir worked example
{
  let b = panel(30, 110, 560, 520);
  const x0 = 120, y0 = 530, xk = 1.25, yk = 30; // px per day, px per million m3
  b += line(x0, y0, x0 + 330 * xk, y0, { w: 3 }) + line(x0, y0, x0, y0 - 13 * yk, { w: 3 });
  for (let v = 0; v <= 12; v += 2) b += line(x0 - 8, y0 - v * yk, x0, y0 - v * yk, { w: 2.5 }) + t(x0 - 14, y0 - v * yk + 6, String(v), { size: 15.5, anchor: 'end' }) + (v ? line(x0 + 2, y0 - v * yk, x0 + 330 * xk, y0 - v * yk, { color: '#e3e9e8', w: 1.5 }) : '');
  for (let d = 0; d <= 300; d += 60) b += line(x0 + d * xk, y0, x0 + d * xk, y0 + 8, { w: 2.5 }) + t(x0 + d * xk, y0 + 28, String(d), { size: 15.5, anchor: 'middle' });
  b += t(x0 + 165 * xk, y0 + 56, 'days with no rainfall', { size: 16, anchor: 'middle', fill: C.muted });
  b += `<text x="58" y="${y0 - 180}" font-size="16" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 58 ${y0 - 180})">water stored (million m³)</text>`;
  b += path(`M${x0},${y0 - 12 * yk} L${x0 + 300 * xk},${y0}`, { stroke: C.tealDark, w: 4.5 }) + path(`M${x0},${y0 - 12 * yk} L${x0 + 240 * xk},${y0}`, { stroke: C.rust, w: 4.5 });
  b += circ(x0 + 300 * xk, y0, 7, C.tealDark) + circ(x0 + 240 * xk, y0, 7, C.rust);
  b += t(x0 + 160 * xk, y0 - 7.2 * yk, '40,000 m³ a day', { size: 16, weight: 700, fill: C.tealDark }) + t(x0 + 22, y0 - 2 * yk, '50,000 m³ a day', { size: 16, weight: 700, fill: C.rust });
  b += t(580, 140, 'invented figures', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += panel(610, 110, 260, 520);
  b += t(632, 148, 'Now', { size: 18, weight: 700, fill: C.tealDark }) + tl(632, 174, ['12,000,000 ÷ 40,000', '= 300 days'], { size: 16.5 }, 22);
  b += t(632, 248, 'Population +25%', { size: 18, weight: 700, fill: C.rust }) + tl(632, 274, ['40,000 × 1.25 = 50,000', '12,000,000 ÷ 50,000', '= 240 days'], { size: 16.5 }, 22);
  b += rrect(628, 360, 224, 70, C.cream, C.olive, 2.5, 10) + t(740, 402, '60 days shorter', { size: 19, weight: 700, anchor: 'middle' });
  b += tl(632, 470, wrap('Growing cities seek new sources, such as desalination or extra reservoirs, or reduce demand.', 220, 16), { size: 16 }, 21);
  add('04-reservoir-days',
    svg(900, 655, 'Worked example: how long will the reservoir last?', b),
    'A graph of a 12 million cubic metre reservoir emptying with no rain. At 40,000 cubic metres a day it lasts 300 days; after 25% population growth, at 50,000 a day, it lasts 240 days, 60 days fewer.',
    'A 25% rise in demand cuts the reservoir’s life from 300 to 240 days.',
    H2.we);
}
