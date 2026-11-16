import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-o-level-geography-climate-natural-vegetation';
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
// ---- end helpers ----

// 01 Rising air at the Equator, sinking air near the Tropics
{
  const G = 470;
  const sky = `<rect x="30" y="115" width="840" height="${G - 115}" rx="14" fill="${C.tealLight}"/>`;
  const ground = `<rect x="30" y="${G}" width="230" height="46" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<rect x="260" y="${G}" width="380" height="46" fill="#a9c48f" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<rect x="640" y="${G}" width="230" height="46" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const up = [405, 450, 495].map((x) => arrow(x, G - 12, x, 250, { color: C.rust, w: 7, marker: 'ahR' })).join('');
  const down = [135, 765].map((x) => arrow(x, 175, x, G - 14, { color: C.rust, w: 7, marker: 'ahR' })).join('');
  const top = arrow(350, 150, 175, 150, { w: 4 }) + arrow(550, 150, 725, 150, { w: 4 });
  const trades = arrow(175, G - 22, 360, G - 22, { color: C.tealDark, w: 5, marker: 'ahT' }) + arrow(725, G - 22, 540, G - 22, { color: C.tealDark, w: 5, marker: 'ahT' });
  const body = sky + ground + cloud(450, 205, 1.25, '#ffffff') + rain(355, 250, 3, 16, 22) + rain(515, 250, 3, 16, 22) + up + down + top + trades +
    t(268, G - 36, 'trade winds', { size: 16, weight: 700, fill: C.tealDark, anchor: 'middle' }) +
    t(632, G - 36, 'trade winds', { size: 16, weight: 700, fill: C.tealDark, anchor: 'middle' }) +
    tl(525, 318, ['Heated air rises, cools;', 'water vapour condenses', 'into cumulonimbus cloud', 'and heavy rain falls'], { size: 17, fill: C.ink }, 23) +
    tl(165, 205, ['Air sinks, warms and', 'holds its moisture:', 'clouds rarely form'], { size: 17, fill: C.ink }, 23) +
    tl(735, 205, ['Air sinks', 'and warms:', 'clear skies'], { size: 17, fill: C.ink, anchor: 'end' }, 23) +
    t(450, G + 30, 'LOW PRESSURE', { size: 17, weight: 700, anchor: 'middle' }) +
    t(145, G + 30, 'HIGH PRESSURE', { size: 17, weight: 700, anchor: 'middle' }) +
    t(755, G + 30, 'HIGH PRESSURE', { size: 17, weight: 700, anchor: 'middle' }) +
    line(450, G + 46, 450, G + 62, { w: 2.5 }) +
    t(450, G + 86, 'Equator', { size: 19, weight: 700, anchor: 'middle' }) +
    t(450, G + 110, 'Equatorial climate', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
    t(450, G + 132, 'within about 5–10° of the Equator', { size: 16, anchor: 'middle', fill: C.muted }) +
    t(145, G + 86, 'Near the Tropic', { size: 19, weight: 700, anchor: 'middle' }) +
    t(145, G + 110, 'Hot desert climate', { size: 17, anchor: 'middle', fill: C.rust, weight: 600 }) +
    t(145, G + 132, 'about 15–30° from it', { size: 16, anchor: 'middle', fill: C.muted }) +
    t(755, G + 86, 'Near the Tropic', { size: 19, weight: 700, anchor: 'middle' }) +
    t(755, G + 110, 'Hot desert climate', { size: 17, anchor: 'middle', fill: C.rust, weight: 600 }) +
    t(755, G + 132, 'about 15–30° from it', { size: 16, anchor: 'middle', fill: C.muted });
  add('01-rising-and-sinking-air',
    svg(900, 630, 'Why it rains at the Equator and not in the deserts', body, 'Schematic side view, not to scale'),
    'Side view from one Tropic to the other. At the Equator heated air rises in a low-pressure belt where the trade winds converge, cools and forms cumulonimbus cloud and heavy rain. Near the Tropics the air sinks in high-pressure belts, warms and holds its moisture, so skies stay clear over the hot deserts.',
    'Rising air at the Equator brings daily rain; the same air sinks near the Tropics and keeps deserts dry.',
    '## The equatorial climate and why it happens');
}

// 02 A day of convection rainfall
{
  const W = 410, H = 300;
  const scene = (x, y, k) => {
    let s = `<rect x="${x + 20}" y="${y + 60}" width="${W - 40}" height="150" rx="10" fill="${k === 3 ? '#d7dde0' : C.tealLight}"/>` +
      `<rect x="${x + 20}" y="${y + 190}" width="${W - 40}" height="20" fill="#a9c48f" stroke="${C.ink}" stroke-width="2"/>`;
    if (k === 0) s += sun(x + 80, y + 160, 20) + t(x + 260, y + 130, 'clear sky', { size: 16, fill: C.muted, anchor: 'middle', italic: true });
    if (k === 1) s += sun(x + 205, y + 100, 24) + [150, 205, 260].map((a) => path(`M${x + a},${y + 185} q6,-10 0,-20 q-6,-10 0,-20`, { stroke: C.rust, w: 3 })).join('');
    if (k === 2) s += [150, 205, 260].map((a) => arrow(x + a, y + 185, x + a, y + 120, { color: C.rust, w: 5, marker: 'ahR' })).join('') + cloud(x + 205, y + 98, 0.7) + sun(x + 340, y + 95, 18);
    if (k === 3) s += cloud(x + 205, y + 105, 1.05, '#9aa6b2') + rain(x + 140, y + 135, 8, 18, 30) +
      path(`M${x + 330},${y + 125} l-14,26 l12,0 l-12,26`, { stroke: C.mustard, w: 4 });
    return s;
  };
  const cell = (x, y, n, title, txt, k) => panel(x, y, W, H) + badge(x + 34, y + 34, 18, n, k === 3 ? C.mustard : C.cream) + t(x + 64, y + 41, title, { size: 21, weight: 700 }) + scene(x, y, k) +
    para(x + 24, y + 240, txt, W - 48, { size: 16.5, fill: C.muted }).svg;
  add('02-convection-rainfall-day',
    svg(900, 760, 'Convection rainfall: an equatorial day',
      cell(30, 110, '1', 'Morning', 'Skies are often clear in the early part of the day.', 0) +
      cell(460, 110, '2', 'The ground heats up', 'The high midday Sun heats the ground and the air above it.', 1) +
      cell(30, 430, '3', 'Warm air rises', 'Rising air cools, water vapour condenses and towering clouds build.', 2) +
      cell(460, 430, '4', 'Afternoon storm', 'Cumulonimbus clouds give heavy thunderstorms, almost every day.', 3)),
    'Four panels of one equatorial day. Clear morning sky; the high Sun heats the ground; warm air rises, cools and condenses into towering clouds; heavy afternoon thunderstorms fall from cumulonimbus clouds.',
    'Heating, rising, cooling, condensing: convection gives rain almost every afternoon.',
    '## The equatorial climate and why it happens');
}

// 03 Why the Atacama is dry (W-E cross-section)
{
  const G = 470;
  const land = `M250,${G - 10} L460,${G - 20} L560,${G - 120} L640,${G - 270} L700,${G - 150} L790,${G - 60} L870,${G - 40} L870,${G + 30} L250,${G + 30} Z`;
  const body = `<rect x="30" y="115" width="840" height="${G - 85}" rx="14" fill="${C.tealLight}"/>` +
    `<rect x="30" y="${G - 10}" width="222" height="40" fill="${C.teal}"/>` + line(30, G - 10, 252, G - 10, { color: C.tealDark }) +
    `<path d="${land}" fill="${C.sand}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
    `<path d="M700,${G - 150} L790,${G - 60} L870,${G - 40} L870,${G + 30} L700,${G + 30} Z" fill="#a9c48f" opacity="0.9"/>` + path(`M640,${G - 270} L700,${G - 150} L790,${G - 60} L870,${G - 40}`, { w: 3 }) +
    `<rect x="40" y="${G - 52}" width="400" height="34" rx="17" fill="#ffffff" opacity="0.75"/>` +
    t(240, G - 30, 'fog, not rain', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(140, G + 22, 'cold current', { size: 15, weight: 700, anchor: 'middle', fill: C.blue }) +
    t(355, G + 22, 'Atacama desert', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) +
    t(630, G - 140, 'Andes', { size: 18, weight: 700, anchor: 'middle' }) +
    // moist air from the east rising over the Andes
    path(`M860,${G - 80} Q760,${G - 110} 700,${G - 210} Q670,${G - 270} 640,${G - 300}`, { stroke: C.tealDark, w: 5, extra: 'marker-end="url(#ahT)"' }) +
    cloud(745, 250, 0.6) + rain(718, 272, 4, 16, 20) +
    path(`M620,${G - 300} Q570,${G - 250} 520,${G - 150}`, { stroke: C.rust, w: 5, extra: 'marker-end="url(#ahR)"' }) +
    tl(760, 165, ['moist air', 'from the east'], { size: 16, weight: 700, fill: C.tealDark, anchor: 'middle' }, 20) +
    tl(805, G - 8, ['windward', 'side: rain'], { size: 15, weight: 700, fill: C.ink, anchor: 'middle' }, 19) +
    tl(500, 262, ['rain shadow:', 'air arrives dry'], { size: 16, weight: 700, fill: C.rust, anchor: 'end' }, 20) +
    // sinking air
    [150, 230, 310].map((x) => arrow(x, 135, x, 215, { color: C.rust, w: 5, marker: 'ahR' })).join('') +
    tl(230, 245, ['high pressure:', 'air sinks and warms'], { size: 16, weight: 700, anchor: 'middle', fill: C.rust }, 20) +
    tl(140, 330, ['cold ocean water', 'cools the air: stable,', 'little water vapour'], { size: 16, anchor: 'middle', fill: C.blue }, 20) +
    t(48, 145, 'W', { size: 18, weight: 700, fill: C.muted }) + t(852, 145, 'E', { size: 18, weight: 700, fill: C.muted, anchor: 'end' }) +
    t(450, 555, 'Five reasons hot deserts are dry', { size: 20, weight: 700, anchor: 'middle' }) +
    [['Sinking air', 'high pressure'], ['Dry trade winds', 'crossed land first'], ['Far from the sea', 'continental interior'], ['Cold current', 'fog, not rain'], ['Rain shadow', 'mountains block air']]
      .map(([a, b], i) => rrect(30 + i * 170, 575, 158, 76, C.cream, C.olive) + t(109 + i * 170, 606, a, { size: 16.5, weight: 700, anchor: 'middle' }) + t(109 + i * 170, 632, b, { size: 15, anchor: 'middle', fill: C.muted })).join('');
  add('03-atacama-cross-section',
    svg(900, 680, 'Why the Atacama gets almost no rain', body, 'Schematic west–east cross-section, not to scale'),
    'West to east cross-section from the Pacific to the Andes. Sinking air under high pressure warms over the desert; a cold current offshore cools the air so it gives fog, not rain; moist air from the east rises and rains on the far side of the Andes, so the Atacama lies in a rain shadow. Below, five factors: sinking air, dry trade winds, distance from the sea, cold currents and rain shadow.',
    'Several factors usually combine to make a hot desert; the Atacama has three at once.',
    '## The hot desert climate and why it happens');
}

// 04 Describing a climatic graph: answer structure
{
  const steps = [
    ['Overall statement', 'Temperatures are high all year. Rainfall is heavy, with every month getting at least 100 mm.'],
    ['Maximum and minimum, with months', '28 °C in March, April and October; 26 °C in June and July. Rain peaks at 300 mm in April, lowest 100 mm in August.'],
    ['Range or total', 'Annual temperature range 2 °C. Total rainfall 2,520 mm.'],
    ['Seasonal pattern', 'A wetter period around April and a less wet one around August, but no dry season.'],
  ];
  let b = '', y = 115;
  steps.forEach(([h, ex], i) => {
    b += panel(30, y, 840, 112) + badge(72, y + 56, 22, String(i + 1), i === 0 ? C.mustard : C.cream) +
      t(112, y + 36, h, { size: 20, weight: 700 }) + para(112, y + 64, ex, 730, { size: 17, fill: C.muted }).svg;
    if (i < 3) b += arrow(72, y + 80, 72, y + 122, { w: 3 });
    y += 126;
  });
  b += panel(30, y + 8, 840, 150, C.cream, C.olive) + t(60, y + 46, 'Asked to explain? Attach a factor to each feature', { size: 20, weight: 700 }) +
    t(60, y + 82, 'High temperatures', { size: 17, weight: 700 }) + arrow(240, y + 76, 300, y + 76, { w: 3 }) + t(312, y + 82, 'high Sun angle all year', { size: 17, fill: C.muted }) +
    t(60, y + 120, 'Rain in every month', { size: 17, weight: 700 }) + arrow(240, y + 114, 300, y + 114, { w: 3 }) + t(312, y + 120, 'low pressure and convection', { size: 17, fill: C.muted });
  add('04-describing-climatic-graph',
    svg(900, y + 180, 'Describing a climatic graph in four moves', b, 'Example: the illustrative equatorial station in the worked example'),
    'Four numbered steps for describing a climatic graph, each with wording from the equatorial example: an overall statement, the maximum and minimum with months, the range or total, and the seasonal pattern. A final box shows how to explain: high Sun angle for high temperatures, low pressure and convection for rain every month.',
    'Overall picture, extremes with months, range or total, then the seasonal pattern.',
    '## Worked example: describing a climatic graph');
}

// 05 Rainforest layers and plant adaptations
{
  const G = 530, lg = '#a9c48f';
  const crown = (cx, cy, rx, ry, f = C.grass) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${f}" stroke="${C.ink}" stroke-width="2.2"/>`;
  const trunk = (x, y1, w = 10) => `<rect x="${x - w / 2}" y="${y1}" width="${w}" height="${G - y1}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
  let d = `<rect x="50" y="125" width="490" height="${G - 125}" rx="10" fill="${C.tealLight}"/>`;
  d += `<rect x="50" y="${G - 70}" width="490" height="70" fill="#c9d3c4"/>`;
  d += trunk(150, 170, 14) + trunk(420, 185, 14);
  d += [100, 250, 330, 490].map((x) => trunk(x, 290, 9)).join('');
  d += [190, 300, 455].map((x) => trunk(x, 440, 7)).join('');
  d += [80, 135, 190, 245, 300, 355, 410, 465, 515].map((x, i) => crown(x, 268 + (i % 2) * 10, 40, 30)).join('');
  d += crown(150, 160, 62, 30) + crown(420, 175, 55, 27);
  d += [190, 300, 455].map((x) => crown(x, 432, 26, 18, lg)).join('');
  d += `<path d="M120,${G} L144,${G - 55} L144,${G} Z M180,${G} L156,${G - 55} L156,${G} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2" stroke-linejoin="round"/>`;
  d += path(`M250,${G} q10,-20 0,-40 q-10,-20 0,-40 q10,-20 0,-40 q-10,-20 0,-40 q10,-20 0,-40 q-10,-20 0,-40`, { stroke: C.olive, w: 3.5 });
  d += `<path d="M414,372 q-16,-14 -20,-2 q8,6 20,2 z M426,372 q16,-14 20,-2 q-8,6 -20,2 z M420,372 q-4,-18 0,-22 q4,4 0,22 z" fill="${C.grass}" stroke="${C.ink}" stroke-width="1.6"/>`;
  d += `<rect x="50" y="${G}" width="490" height="12" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
  d += tag(192, G - 14, 'buttress roots') + tag(264, 476, 'liana', { fill: C.olive }) + tag(450, 378, 'epiphyte', { fill: C.tealDark });
  const lab = (y, name, desc, ly) => line(545, ly, 575, ly, { dash: '5 5', color: C.muted }) + t(585, y, name, { size: 20, weight: 700 }) + para(585, y + 24, desc, 270, { size: 16, fill: C.muted }).svg;
  d += lab(150, 'Emergents', 'rise above the rest, up to about 50 m', 158);
  d += lab(258, 'Canopy', 'dense, almost continuous roof; intercepts most light and rain', 268);
  d += lab(410, 'Understorey', 'younger trees and shrubs adapted to shade', 432);
  d += lab(498, 'Forest floor', 'dark, with little undergrowth', 505);
  const cards = [
    ['Drip tips', 'Leaves shed water quickly, so fungi and algae cannot grow.'],
    ['Buttress roots', 'Support very tall trees in shallow soil.'],
    ['Lianas and epiphytes', 'Reach the light without growing a trunk of their own.'],
    ['Thin, smooth bark', 'Enough, because there is no cold season.'],
  ];
  let c = t(450, 600, 'Plant adaptations', { size: 22, weight: 700, anchor: 'middle' });
  cards.forEach(([h, b], i) => { c += card(30 + (i % 2) * 430, 620 + Math.floor(i / 2) * 118, 410, 106, h, b, { ts: 19, bs: 16.5 }); });
  add('05-rainforest-layers',
    svg(900, 870, 'Layers of the tropical rainforest', panel(30, 110, 840, 450) + d + c, ),
    'Cross-section of a rainforest with four layers: emergent trees up to about 50 m, a dense continuous canopy, an understorey of young trees and shrubs, and a dark forest floor. Buttress roots, a liana and an epiphyte are labelled. Below, four adaptations: drip tips, buttress roots, lianas and epiphytes, and thin smooth bark.',
    'Four layers, each with plants adapted to how much light reaches it.',
    '## The tropical rainforest ecosystem');
}

// 06 Nutrient cycle: intact forest vs after clearance
{
  const ring = (cx, cy, r, label, o = {}) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${o.fill || C.teal}" stroke="${C.ink}" stroke-width="2.5"${o.dash ? ' stroke-dasharray="8 6"' : ''}/>` + t(cx, cy + 6, label, { size: o.size || 18, weight: 700, anchor: 'middle', fill: o.tf || C.ink });
  const link = (a, b, ra, rb, o = {}) => { const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy); return arrow(a[0] + (dx * (ra + 6)) / L, a[1] + (dy * (ra + 6)) / L, b[0] - (dx * (rb + 8)) / L, b[1] - (dy * (rb + 8)) / L, { w: o.w || 4, color: o.color || C.ink, marker: o.marker || 'ah', dash: o.dash }); };
  const P = (x0) => {
    const B = [x0 + 205, 250], L = [x0 + 95, 430], S = [x0 + 315, 430];
    return { B, L, S };
  };
  const a = P(30), b = P(460);
  let s = panel(30, 110, 410, 560) + t(235, 150, 'Intact forest', { size: 23, weight: 700, anchor: 'middle' });
  s += ring(...a.B, 80, 'Biomass', { fill: '#a9c48f', size: 21 }) + ring(...a.L, 34, 'Litter', { fill: C.sand, size: 16 }) + ring(...a.S, 38, 'Soil', { fill: C.rock, size: 16 });
  s += link(a.B, a.L, 80, 34) + link(a.L, a.S, 34, 38) + link(a.S, a.B, 38, 80, { color: C.tealDark, marker: 'ahT' });
  s += t(80, 330, 'leaf fall', { size: 16, weight: 600 }) + t(205, 470, 'decays in weeks', { size: 16, weight: 600, anchor: 'middle' }) + tl(330, 320, ['shallow', 'roots take', 'it back up'], { size: 16, weight: 600, fill: C.tealDark }, 20);
  s += arrow(345, 470, 345, 530, { color: C.rust, w: 4, marker: 'ahR' }) + t(362, 520, 'leaching', { size: 15, weight: 700, fill: C.rust });
  s += para(55, 580, 'Most nutrients are stored in the trees. The cycle is fast, so the soil itself stays poor.', 360, { size: 16.5, fill: C.ink }).svg;
  s += panel(460, 110, 410, 560) + t(665, 150, 'After clearance', { size: 23, weight: 700, anchor: 'middle', fill: C.rust });
  s += ring(...b.B, 80, 'removed', { fill: '#ffffff', dash: true, size: 19, tf: C.muted }) + ring(...b.L, 20, '', { fill: C.sand, dash: true }) + ring(...b.S, 30, 'Soil', { fill: C.rock, size: 16 });
  s += cloud(810, 215, 0.42) + rain(785, 233, 4, 14, 26) + t(800, 300, 'heavy rain', { size: 15, weight: 600, anchor: 'middle', fill: C.blue });
  s += arrow(b.S[0] + 10, 466, b.S[0] + 10, 545, { color: C.rust, w: 9, marker: 'ahR' }) + t(b.S[0] + 30, 520, 'leached', { size: 15, weight: 700, fill: C.rust });
  s += arrow(b.S[0] - 40, 440, b.S[0] - 120, 520, { color: C.olive, w: 6, marker: 'ahO' }) + t(b.S[0] - 125, 545, 'eroded', { size: 15, weight: 700, fill: C.olive, anchor: 'middle' });
  s += t(b.L[0], b.L[1] + 45, 'little litter', { size: 15, anchor: 'middle', fill: C.muted });
  s += para(485, 580, 'With the nutrient store gone, soils become infertile within a few years.', 360, { size: 16.5, fill: C.ink }).svg;
  s += t(450, 700, 'Circle size shows the size of each store (illustrative)', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('06-nutrient-cycle',
    svg(900, 720, 'Where the rainforest keeps its nutrients', s),
    'Two nutrient-cycle diagrams. In intact forest the biomass store is large and litter and soil stores are small; leaves fall, decay within weeks and are taken back up by shallow roots, while some nutrients are leached. After clearance the biomass store is gone and heavy rain erodes and leaches the soil, which becomes infertile within a few years.',
    'The nutrients live in the trees, so removing the trees removes the fertility.',
    '## The tropical rainforest ecosystem');
}

// 07 Desert plant adaptations and ephemerals
{
  const G = 330;
  let s = panel(30, 110, 470, 590) + t(265, 148, 'A desert succulent', { size: 22, weight: 700, anchor: 'middle' });
  s += `<rect x="50" y="165" width="430" height="${G - 165}" rx="8" fill="${C.cream}"/>` + sun(95, 205, 20);
  s += `<rect x="50" y="${G}" width="430" height="300" fill="${C.sand}"/>` + line(50, G, 480, G, { w: 3 });
  s += `<rect x="50" y="590" width="430" height="40" fill="${C.teal}"/>` + t(265, 616, 'groundwater', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += path(`M265,${G} L265,592`, { stroke: C.rockDark, w: 5 }) + path(`M265,${G + 6} Q190,${G + 20} 80,${G + 18} M265,${G + 6} Q340,${G + 24} 450,${G + 20} M265,${G + 6} Q200,${G + 36} 120,${G + 44} M265,${G + 6} Q330,${G + 40} 410,${G + 48}`, { stroke: C.rockDark, w: 3 });
  s += `<rect x="240" y="190" width="50" height="${G - 190}" rx="25" fill="${C.grass}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<path d="M240,270 L215,270 Q205,270 205,258 L205,225 Q205,212 217,212 Q229,212 229,225 L229,250 L240,250 Z" fill="${C.grass}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<path d="M290,285 L312,285 Q322,285 322,273 L322,245 Q322,232 310,232 Q298,232 298,245 L298,265 L290,265 Z" fill="${C.grass}" stroke="${C.ink}" stroke-width="2.5"/>`;
  for (let yy = 205; yy < G - 10; yy += 22) s += line(240, yy, 230, yy - 5, { w: 1.6 }) + line(290, yy + 10, 300, yy + 5, { w: 1.6 });
  s += t(340, 200, 'spines or small,', { size: 16, weight: 700 }) + t(340, 220, 'waxy leaves:', { size: 16, weight: 700 }) + t(340, 240, 'less transpiration', { size: 16 });
  s += t(122, 270, 'succulent', { size: 16, weight: 700, anchor: 'middle' }) + t(122, 290, 'stem stores', { size: 16, anchor: 'middle' }) + t(122, 310, 'water', { size: 16, anchor: 'middle' });
  s += tag(265, 402, 'wide, shallow roots catch', { size: 16, anchor: 'middle', bg: C.sand, op: 1 }) + tag(265, 423, 'brief rain before it evaporates', { size: 16, weight: 400, anchor: 'middle', bg: C.sand, op: 1 });
  s += t(285, 520, 'long tap root', { size: 16, weight: 700 }) + t(285, 540, 'reaches groundwater', { size: 16 });
  s += t(265, 675, 'Every feature gets or saves water.', { size: 16.5, anchor: 'middle', fill: C.muted, italic: true });
  // ephemerals cycle
  s += panel(520, 110, 350, 590) + t(695, 148, 'Ephemerals', { size: 22, weight: 700, anchor: 'middle' }) + t(695, 172, 'wait as seeds for rain', { size: 16, anchor: 'middle', fill: C.muted });
  const st = [['Seeds lie in the soil', C.cream], ['Rain falls', C.tealLight], ['Germinate and flower', '#d8e3c6'], ['Set seed within weeks', C.cream]];
  st.forEach(([lbl, f], i) => { const y = 200 + i * 118; s += rrect(560, y, 270, 70, f, C.ink, 2.5, 12) + t(695, y + 42, lbl, { size: 18, weight: 700, anchor: 'middle' }); if (i < 3) s += arrow(695, y + 72, 695, y + 114, { w: 3.5 }); });
  s += path(`M832,589 Q858,589 858,560 L858,265 Q858,235 836,235`, { w: 3.5, stroke: C.tealDark, extra: 'stroke-dasharray="9 7" marker-end="url(#ahT)"' });
  s += t(695, 680, 'then wait for the next rain', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  // animals strip
  s += panel(30, 720, 840, 124, C.cream, C.olive) + t(60, 756, 'Animals avoid the heat and save water', { size: 18, weight: 700 }) +
    t(60, 788, 'Many are nocturnal or live in burrows · the fennec fox loses heat through its large ears', { size: 16, fill: C.muted }) +
    t(60, 816, 'The camel can go long periods without drinking and has wide feet for soft sand', { size: 16, fill: C.muted });
  add('07-desert-adaptations',
    svg(900, 870, 'Surviving in the hot desert', s),
    'A desert succulent with a water-storing stem, spines or small waxy leaves, wide shallow roots near the surface and a long tap root down to groundwater. Beside it, the ephemeral cycle: seeds lie in the soil, rain falls, they germinate and flower, and set seed within weeks. A strip notes animals that are nocturnal or burrow, the fennec fox and the camel.',
    'Desert plants either reach water, catch it fast, store it or wait for it.',
    '## The hot desert ecosystem');
}

// 08 Deforestation: causes and chain of effects
{
  const causes = [['Cattle ranching', 'largest single cause'], ['Commercial farming', 'especially soya'], ['Logging', 'valuable hardwoods'], ['Mining', 'e.g. Carajás iron ore'], ['Road building', 'Trans-Amazonian Highway'], ['Hydroelectric dams', 'Belo Monte, Xingu River']];
  let s = t(30, 138, 'Causes (Amazon)', { size: 19, weight: 700, fill: C.muted });
  causes.forEach(([a, b], i) => { const x = 30 + (i % 3) * 283, y = 152 + Math.floor(i / 3) * 84; s += rrect(x, y, 272, 72, '#ffffff', C.panelEdge, 2.5, 12) + t(x + 18, y + 31, a, { size: 18, weight: 700 }) + t(x + 18, y + 56, b, { size: 15.5, fill: C.muted }); });
  s += arrow(450, 322, 450, 352, { w: 4 });
  s += rrect(30, 356, 840, 56, C.mustard, C.ink, 2.5, 12) + t(450, 392, 'Forest cleared: the canopy is removed', { size: 21, weight: 700, anchor: 'middle' });
  const heads = [['The soil chain', 30], ['Environment', 315], ['Climate and people', 600]];
  heads.forEach(([h, x]) => { s += arrow(x + 135, 414, x + 135, 438, { w: 3 }) + t(x + 135, 462, h, { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }); });
  const o = { ts: 18.5, bs: 16 };
  s += flowDown(30, 478, 270, 92, 24, [['Soil exposed', 'to heavy rain with no canopy'], ['Eroded and leached', 'nutrient store already gone'], ['Infertile', 'within a few years']], o);
  s += card(315, 478, 270, 92, 'Rivers silted', 'eroded soil washes in; flood risk rises', o) +
    card(315, 594, 270, 92, 'Habitats lost', 'species lost too', o) +
    card(315, 710, 270, 92, 'Less transpiration', 'can reduce local rainfall', o);
  s += card(600, 478, 270, 92, 'CO₂ released', 'from burning and decay: enhanced greenhouse effect', o) +
    card(600, 594, 270, 92, 'Indigenous peoples', 'lose land and ways of life', { ...o, edge: C.rust }) +
    card(600, 710, 270, 92, 'But also', 'jobs, export income and roads: weigh the effects', { ...o, fill: C.cream, edge: C.olive });
  add('08-deforestation-chain',
    svg(900, 830, 'Deforestation: from causes to consequences', s),
    'Six causes of Amazon deforestation (cattle ranching, soya farming, logging, mining, roads and hydroelectric dams) lead to clearance of the canopy. Effects follow: soil is exposed, eroded and leached and becomes infertile within a few years; rivers silt and flood risk rises; habitats are lost; less transpiration can reduce rainfall; carbon dioxide is released; indigenous peoples lose land; but jobs, export income and roads are gained.',
    'Give effects as a chain, and weigh the costs against the gains.',
    '## Deforestation of tropical rainforest');
}
