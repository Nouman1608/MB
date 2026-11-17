import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-human-population-size';
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
  eq: '## The population equation',
  factors: '## Factors that change populations (7.2.1)',
  impacts: '## Impacts of population growth (7.2.2)',
  we1: '## Worked example 1: population change',
  we2: '## Worked example 2: is the country urbanising?',
};

// 01 Population equation as a tank with inflows and outflows
{
  const tx = 350, ty = 150, tw = 200, th = 240;
  let b = '';
  b += `<rect x="${tx}" y="${ty + 55}" width="${tw}" height="${th - 55}" fill="${C.teal}"/>`;
  b += line(tx, ty + 55, tx + tw, ty + 55, { color: C.tealDark, w: 2.5 });
  b += path(`M${tx},${ty} L${tx},${ty + th} L${tx + tw},${ty + th} L${tx + tw},${ty}`, { w: 4 });
  for (let i = 0; i < 5; i++) b += person(392 + i * 29, ty + 140, 0.9, C.tealDark);
  b += t(450, ty + 180, 'Population', { size: 22, weight: 700, anchor: 'middle' });
  b += t(450, ty + 206, 'of a place', { size: 17, anchor: 'middle', fill: C.ink });
  b += t(155, 136, 'IN: adds people', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  b += t(745, 136, 'OUT: removes people', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  const side = (x, y, title, sub, fill, edge) => card(x, y, 230, 88, title, sub, { fill, edge, ts: 21, bs: 16.5 });
  b += side(40, 160, 'Births', 'people are born', C.tealLight, C.tealDark) + arrow(274, 204, 342, 204, { w: 6, color: C.tealDark, marker: 'ahT' });
  b += side(40, 290, 'Immigrants', 'people move in', C.cream, C.olive) + arrow(274, 334, 342, 334, { w: 6, color: C.olive, marker: 'ahO' });
  b += side(630, 160, 'Deaths', 'people die', C.tealLight, C.tealDark) + arrow(556, 204, 624, 204, { w: 6, color: C.tealDark, marker: 'ahT' });
  b += side(630, 290, 'Emigrants', 'people move out', C.cream, C.olive) + arrow(556, 334, 624, 334, { w: 6, color: C.olive, marker: 'ahO' });
  // the two brackets
  b += card(40, 430, 380, 110, 'Natural change', 'births − deaths', { fill: C.tealLight, edge: C.tealDark, center: true, ts: 22, bs: 20, bfill: C.ink });
  b += card(480, 430, 380, 110, 'Net migration', 'immigrants − emigrants', { fill: C.cream, edge: C.olive, center: true, ts: 22, bs: 20, bfill: C.ink });
  b += t(450, 498, '+', { size: 40, weight: 700, anchor: 'middle' });
  b += arrow(230, 546, 230, 584, { w: 3.5 }) + arrow(670, 546, 670, 584, { w: 3.5 });
  b += panel(40, 590, 820, 80, C.panel, C.ink);
  b += t(450, 628, 'Population change = (births − deaths) + (immigrants − emigrants)', { size: 21, weight: 700, anchor: 'middle' });
  b += t(450, 655, 'Every factor in 7.2.1 works through one of the two brackets.', { size: 16.5, anchor: 'middle', fill: C.muted });
  add('01-population-equation',
    svg(900, 700, 'Three ways a population changes', b),
    'A tank labelled population has two inflows, births and immigrants, and two outflows, deaths and emigrants. Births minus deaths is natural change; immigrants minus emigrants is net migration; together they give population change.',
    'Population change = natural change (births − deaths) + net migration (immigrants − emigrants).',
    H2.eq);
}

// 02 Fertility: replacement level and high/low factors
{
  let b = panel(30, 110, 840, 200);
  const x0 = 100, sc = 132, ax = 250; // 0..5 children per woman
  const xr = x0 + 2.1 * sc;
  b += `<rect x="${x0}" y="175" width="${xr - x0}" height="62" fill="${C.cream}"/><rect x="${xr}" y="175" width="${x0 + 5 * sc - xr}" height="62" fill="${C.tealLight}"/>`;
  b += t((x0 + xr) / 2, 200, 'below 2.1: eventually', { size: 16.5, weight: 600, anchor: 'middle', fill: C.olive }) + t((x0 + xr) / 2, 222, 'shrinks (without migration)', { size: 16.5, weight: 600, anchor: 'middle', fill: C.olive });
  b += t((xr + x0 + 5 * sc) / 2, 212, 'above 2.1: population tends to grow', { size: 16.5, weight: 600, anchor: 'middle', fill: C.tealDark });
  b += line(x0, ax, x0 + 5 * sc, ax, { w: 3 });
  for (let i = 0; i <= 5; i++) b += line(x0 + i * sc, ax, x0 + i * sc, ax + 8, { w: 2.5 }) + t(x0 + i * sc, ax + 28, String(i), { size: 16, anchor: 'middle' });
  b += `<line x1="${xr}" y1="160" x2="${xr}" y2="${ax}" stroke="${C.ink}" stroke-width="4"/>` + circ(xr, ax, 7, C.mustard);
  b += t(xr, 152, 'about 2.1 = replacement level', { size: 17, weight: 700, anchor: 'middle' });
  b += t(x0 + 5 * sc + 14, ax + 6, 'children', { size: 15, fill: C.muted }) + t(x0 + 5 * sc + 14, ax + 24, 'per woman', { size: 15, fill: C.muted });
  const hi = bullets(58, 402, ['many children die young, so parents have more to ensure some survive', 'children work on farms or support parents in old age', 'contraception hard to obtain or not accepted', 'girls leave education early and marry young', 'traditions value large families'], 370, { size: 17 });
  const lo = bullets(498, 402, ['children are expensive to raise and educate', 'women stay longer in education and have careers', 'contraception widely available', 'people marry and start families later', 'pensions and healthcare: parents do not rely on children in old age'], 370, { size: 17 });
  b += panel(30, 330, 410, 300, '#fbf6e2', C.olive) + t(58, 368, 'Fertility tends to be HIGH where…', { size: 20, weight: 700, fill: C.olive }) + hi.svg;
  b += panel(460, 330, 410, 300, '#eef5f4', C.tealDark) + t(488, 368, 'Fertility tends to be LOW where…', { size: 20, weight: 700, fill: C.tealDark }) + lo.svg;
  add('02-fertility-high-low',
    svg(900, 660, 'Birth rates: children per woman', b),
    'A scale of children per woman marks about 2.1 as replacement level: above it a population tends to grow, below it, without migration, it eventually shrinks. Two lists give the conditions where fertility tends to be high and where it tends to be low.',
    'About 2.1 children per woman replaces each generation; local conditions push fertility above or below it.',
    H2.factors);
}

// 03 Life expectancy and the gap that drives growth
{
  let b = '';
  const up = bullets(58, 208, ['better healthcare and vaccination', 'clean water and sanitation', 'a reliable food supply', 'safer housing and working conditions'], 360, { size: 17.5 });
  const dn = bullets(488, 208, ['famine', 'war', 'epidemics', 'poverty'], 360, { size: 17.5 });
  b += panel(30, 110, 410, 220, '#eef5f4', C.tealDark) + t(58, 148, 'Life expectancy RISES,', { size: 20, weight: 700, fill: C.tealDark }) + t(58, 172, 'death rate falls, with:', { size: 18, fill: C.tealDark, weight: 600 }) + up.svg;
  b += panel(460, 110, 410, 220, '#fbf1ea', C.rust) + t(488, 148, 'Life expectancy FALLS,', { size: 20, weight: 700, fill: C.rust }) + t(488, 172, 'death rate rises, with:', { size: 18, fill: C.rust, weight: 600 }) + dn.svg;
  // schematic graph
  b += panel(30, 350, 840, 340);
  const gx = 120, gy = 395, gw = 560, gh = 220;
  b += line(gx, gy, gx, gy + gh, { w: 3 }) + line(gx, gy + gh, gx + gw, gy + gh, { w: 3 });
  b += t(gx - 14, gy + gh / 2, 'rate', { size: 16, anchor: 'end', fill: C.muted }) + t(gx + gw, gy + gh + 28, 'time →', { size: 16, anchor: 'end', fill: C.muted });
  const birth = `M${gx},${gy + 30} C${gx + 200},${gy + 32} ${gx + 400},${gy + 50} ${gx + gw},${gy + 70}`;
  const death = `M${gx},${gy + 45} C${gx + 150},${gy + 60} ${gx + 250},${gy + 175} ${gx + gw},${gy + 190}`;
  b += `<path d="${birth} L${gx + gw},${gy + 190} C${gx + 250},${gy + 175} ${gx + 150},${gy + 60} ${gx},${gy + 45} Z" fill="${C.cream}" opacity="0.9"/>`;
  b += path(birth, { stroke: C.olive, w: 4.5 }) + path(death, { stroke: C.rust, w: 4.5 });
  b += t(gx + gw + 12, gy + 76, 'birth rate', { size: 17, weight: 700, fill: C.olive });
  b += t(gx + gw + 12, gy + 190, 'death rate', { size: 17, weight: 700, fill: C.rust });
  b += t(gx + gw + 12, gy + 212, 'falls faster', { size: 16, fill: C.rust });
  b += tag(gx + 380, gy + 128, 'gap = natural increase', { size: 16, anchor: 'middle', fill: C.olive, bg: C.cream });
  b += t(450, 674, 'When death rates fall faster than birth rates, populations grow quickly.', { size: 17, weight: 600, anchor: 'middle' });
  b += t(840, 378, 'schematic', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  add('03-life-expectancy-death-rates',
    svg(900, 715, 'Death rates: life expectancy', b),
    'Better healthcare and vaccination, clean water and sanitation, reliable food and safer housing and work raise life expectancy; famine, war, epidemics and poverty lower it. A schematic graph shows the death rate falling faster than the birth rate, widening the gap of natural increase.',
    'When the death rate falls faster than the birth rate, the gap widens and the population grows quickly.',
    H2.factors);
}

// 04 Push and pull migration
{
  let b = '';
  b += panel(30, 110, 330, 360, '#fbf1ea', C.rust);
  b += t(195, 146, 'Place people leave', { size: 20, weight: 700, anchor: 'middle' });
  b += t(195, 170, 'emigration = leaving', { size: 16.5, anchor: 'middle', fill: C.rust, weight: 600 });
  b += t(56, 210, 'PUSH factors drive people away', { size: 17, weight: 700, fill: C.rust });
  b += bullets(56, 242, ['unemployment', 'poverty', 'war', 'persecution', 'natural hazards', 'drought', 'lack of services'], 290, { size: 17, gap: 4 }).svg;
  b += panel(540, 110, 330, 360, '#eef5f4', C.tealDark);
  b += t(705, 146, 'Place people go to', { size: 20, weight: 700, anchor: 'middle' });
  b += t(705, 170, 'immigration = arriving', { size: 16.5, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += t(566, 210, 'PULL factors attract people', { size: 17, weight: 700, fill: C.tealDark });
  b += bullets(566, 242, ['jobs', 'higher wages', 'safety', 'better healthcare and education', 'family already living there'], 290, { size: 17, gap: 4 }).svg;
  b += arrow(368, 300, 530, 300, { w: 9 });
  for (let i = 0; i < 3; i++) b += person(415 + i * 34, 278, 1, C.ink);
  b += t(450, 340, 'migrants:', { size: 16.5, weight: 700, anchor: 'middle' }) + tl(450, 362, ['most often', 'young working-', 'age adults'], { size: 16, anchor: 'middle', fill: C.muted }, 21);
  b += card(30, 490, 400, 98, 'Origin', 'working-age population falls', { fill: C.panel, edge: C.rust, ts: 19, bs: 17 });
  b += card(470, 490, 400, 98, 'Destination', 'working-age population rises, and so do future births', { fill: C.panel, edge: C.tealDark, ts: 19, bs: 17 });
  b += t(450, 622, 'Migration changes the structure as well as the size of both populations.', { size: 17, weight: 600, anchor: 'middle' });
  add('04-push-pull-migration',
    svg(900, 650, 'Migration: push and pull factors', b),
    'Push factors such as unemployment, poverty, war, persecution, natural hazards, drought and lack of services drive people from one place; pull factors such as jobs, higher wages, safety, better healthcare and education and family attract them to another. Migrants are most often young working-age adults, so the working population falls where they leave and rises, with future births, where they arrive.',
    'Push factors act on the place people leave; pull factors act on the place they go to.',
    H2.factors);
}

// 05 Rural-urban migration and urbanisation
{
  let b = '';
  const gy = 280;
  b += `<rect x="30" y="110" width="840" height="${gy - 110}" fill="#e7efe4"/>`;
  b += `<rect x="30" y="${gy}" width="840" height="20" fill="${C.rock}"/>` + line(30, gy, 870, gy, { w: 2.5 });
  // countryside
  for (let i = 0; i < 4; i++) b += `<rect x="${50 + i * 62}" y="${gy - 18}" width="54" height="18" fill="${i % 2 ? C.sand : '#a9c48f'}" stroke="${C.ink}" stroke-width="1.8"/>`;
  b += house(110, gy - 50, 1) + house(200, gy - 46, 0.9) + tree(80, gy - 18, 0.9) + tree(280, gy - 18, 1);
  b += t(180, 142, 'Countryside', { size: 21, weight: 700, anchor: 'middle' });
  // city
  const bl = [[560, 70], [600, 105], [650, 85], [700, 118], [750, 80], [795, 100]];
  for (const [x, h] of bl) { b += `<rect x="${x}" y="${gy - h}" width="40" height="${h}" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2"/>`; for (let r = gy - h + 12; r < gy - 12; r += 22) b += `<rect x="${x + 9}" y="${r}" width="8" height="10" fill="${C.teal}"/><rect x="${x + 23}" y="${r}" width="8" height="10" fill="${C.teal}"/>`; }
  b += t(700, 142, 'Town or city', { size: 21, weight: 700, anchor: 'middle' });
  b += arrow(330, 215, 535, 215, { w: 9 }) + t(432, 196, 'rural-urban', { size: 17, weight: 700, anchor: 'middle' }) + t(432, 248, 'migration', { size: 17, weight: 700, anchor: 'middle' });
  b += card(30, 320, 400, 165, 'Rural PUSH factors', ['• low farm incomes', '• few jobs', '• poor services', '• land degraded by drought or erosion'], { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, bfill: C.ink, ts: 19, bs: 17 });
  b += card(470, 320, 400, 165, 'Urban PULL factors', ['• factory, service and informal jobs', '• schools and hospitals', '• the perception of a better life'], { fill: '#eef5f4', edge: C.tealDark, tfill: C.tealDark, bfill: C.ink, ts: 19, bs: 17 });
  b += panel(30, 505, 840, 200, C.cream, C.olive);
  b += t(60, 543, 'Urbanisation = an increase in the PROPORTION of a country’s', { size: 19, weight: 700 }) + t(60, 569, 'population living in urban areas. It happens through:', { size: 19, weight: 700 });
  b += pill(60, 591, 330, 46, 'rural-urban migration', { fill: '#ffffff' }) + t(425, 622, '+', { size: 30, weight: 700, anchor: 'middle' }) + pill(460, 591, 380, 46, 'natural increase in cities', { fill: '#ffffff' });
  b += t(650, 665, 'often high: migrants are young adults', { size: 16, anchor: 'middle', fill: C.muted }) + t(650, 686, 'who start families there', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-rural-urban-urbanisation',
    svg(900, 735, 'From countryside to city', b),
    'Rural push factors (low farm incomes, few jobs, poor services, land degraded by drought or erosion) and urban pull factors (factory, service and informal jobs, schools, hospitals, the perception of a better life) drive rural-urban migration. Urbanisation, a rising proportion of people in urban areas, comes from this migration plus natural increase in cities.',
    'Urbanisation grows through rural-urban migration and natural increase among young city migrants.',
    H2.factors);
}

// 06 Twelve impacts in three groups
{
  let b = '';
  const cw = 266, gap = 21, ch = 96;
  const chip = (x, y, name, det, fill, edge) => `<rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="12" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` +
    tl(x + 14, y + 30, Array.isArray(name) ? name : [name], { size: 17, weight: 700 }, 21) + tl(x + 14, y + 30 + (Array.isArray(name) ? name.length : 1) * 21 + 2, det, { size: 15.5, fill: C.muted }, 19);
  const row = (y, head, items, fill, edge, col) => {
    let s = t(30, y, head, { size: 20, weight: 700, fill: col });
    items.forEach((it, i) => { const r = Math.floor(i / 3), c = i % 3; s += chip(30 + c * (cw + gap), y + 14 + r * (ch + 12), it[0], it[1], fill, edge); });
    return s;
  };
  b += row(130, 'Where people live', [
    ['Informal settlements', ['scrap-built homes, often on', 'steep slopes or floodplains']],
    ['Megacities', ['cities of more than', '10 million people']],
    ['Availability of land', ['farmland and natural', 'habitats are built over']]], '#fbf6e2', C.olive, C.olive);
  b += row(272, 'Resources and services', [
    ['Resources', ['more demand for food,', 'timber, minerals and fuel']],
    ['Energy usage', ['more homes, transport', 'and industry']],
    ['Water supply', ['demand can exceed rivers,', 'reservoirs and aquifers']],
    ['Sanitation', ['sewage enters rivers', 'and spreads disease']],
    ['Management of waste', ['more waste than can be', 'collected: dumped or burned']],
    ['Facilities, infrastructure', ['schools, hospitals, roads and', 'transport overcrowded']]], '#eef5f4', C.tealDark, C.tealDark);
  b += row(522, 'Environment and economy', [
    ['Pollution (six types)', ['air, land, light, noise,', 'visual and water']],
    ['Traffic congestion', ['delays, accidents and', 'air pollution']],
    ['Employment', ['new jobs, but unemployment if', 'workers outgrow the jobs']]], '#fbf1ea', C.rust, C.rust);
  b += t(450, 682, 'Link impacts to the environment, for example:', { size: 17, anchor: 'middle', fill: C.muted });
  b += pill(70, 700, 230, 46, 'population growth', { fill: '#ffffff', edge: C.ink }) + arrow(304, 723, 352, 723) + pill(358, 700, 180, 46, 'more waste', { fill: '#ffffff', edge: C.ink }) + arrow(542, 723, 590, 723) + pill(596, 700, 234, 46, 'land and water pollution', { fill: '#ffffff', edge: C.ink, size: 16.5 });
  add('06-twelve-impacts',
    svg(900, 775, 'Twelve impacts of population growth', b),
    'The twelve syllabus impacts in three groups. Where people live: informal settlements, megacities, availability of land. Resources and services: resources, energy usage, water supply, sanitation, management of waste, facilities and infrastructure. Environment and economy: six types of pollution, traffic congestion, changes in employment. An example chain links population growth to more waste and to land and water pollution.',
    'Learn the twelve impacts in three groups, and link each one to an environmental effect.',
    H2.impacts);
}

// 07 Worked example 1 as a waterfall chart
{
  let b = panel(30, 110, 840, 450);
  const x0 = 130, y0 = 480, k = 5; // 5 px per 1,000
  b += line(x0, y0, 845, y0, { w: 3 }) + line(x0, y0, x0, y0 - 64 * k, { w: 3 });
  for (let v = 0; v <= 60; v += 10) b += line(x0 - 8, y0 - v * k, x0, y0 - v * k, { w: 2.5 }) + t(x0 - 14, y0 - v * k + 6, String(v), { size: 16, anchor: 'end' }) + (v ? line(x0 + 2, y0 - v * k, 845, y0 - v * k, { color: '#e3e9e8', w: 1.5 }) : '');
  b += `<text x="58" y="${y0 - 150}" font-size="16" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 58 ${y0 - 150})">people (thousands)</text>`;
  const bars = [
    ['Births', 0, 60, C.teal, '+60,000'], ['Deaths', 40, 60, '#e9c2a8', '−20,000'], ['Natural', 0, 40, C.tealDark, '+40,000', 'change'],
    ['Immigrants', 40, 55, C.cream, '+15,000'], ['Emigrants', 50, 55, '#e9c2a8', '−5,000'], ['Total', 0, 50, C.mustard, '+50,000', 'change'],
  ];
  const bw = 80, step = 116;
  bars.forEach(([lab, lo, hi, fill, val, lab2], i) => {
    const x = x0 + 30 + i * step;
    b += `<rect x="${x}" y="${y0 - hi * k}" width="${bw}" height="${(hi - lo) * k}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += t(x + bw / 2, y0 - hi * k - 10, val, { size: 17, weight: 700, anchor: 'middle', fill: val.startsWith('−') ? C.rust : C.ink });
    b += t(x + bw / 2, y0 + 26, lab, { size: 16, weight: 600, anchor: 'middle' }) + (lab2 ? t(x + bw / 2, y0 + 46, lab2, { size: 16, weight: 600, anchor: 'middle' }) : '');
    if (i < bars.length - 1) { const nxt = [60, 40, 40, 55, 50][i]; b += line(x + bw, y0 - nxt * k, x + step, y0 - nxt * k, { dash: '5 4', w: 2, color: C.muted }); }
  });
  b += t(840, 140, 'invented data: a city of 2,000,000', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += panel(30, 580, 840, 130, C.cream, C.olive);
  b += t(60, 620, 'Growth = 50,000 ÷ 2,000,000 × 100 = 2.5% in the year', { size: 19, weight: 700 });
  b += t(60, 652, 'Share from natural change = 40,000 ÷ 50,000 × 100 = 80%', { size: 19, weight: 700 });
  b += t(60, 684, 'Work out natural change and net migration first, then combine.', { size: 17, fill: C.muted });
  add('07-worked-example-waterfall',
    svg(900, 740, 'Worked example: one year in a city', b),
    'A waterfall chart: 60,000 births minus 20,000 deaths gives natural change of +40,000; 15,000 immigrants minus 5,000 emigrants adds +10,000, for a total change of +50,000. On 2,000,000 people that is 2.5% growth, 80% of it from natural change.',
    'Natural change +40,000 plus net migration +10,000 gives +50,000, or 2.5% growth.',
    H2.we1);
}

// 08 Worked example 2: urban share in two censuses
{
  let b = panel(30, 110, 480, 560);
  const x0 = 120, y0 = 590, k = 30; // px per million
  b += line(x0, y0, 490, y0, { w: 3 }) + line(x0, y0, x0, y0 - 14 * k, { w: 3 });
  for (let v = 0; v <= 14; v += 2) b += line(x0 - 8, y0 - v * k, x0, y0 - v * k, { w: 2.5 }) + t(x0 - 14, y0 - v * k + 6, String(v), { size: 16, anchor: 'end' });
  b += `<text x="58" y="${y0 - 210}" font-size="16" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 58 ${y0 - 210})">population (millions)</text>`;
  const col = (x, urb, tot, lab, pct) => {
    const rur = tot - urb, w = 120;
    return `<rect x="${x}" y="${y0 - urb * k}" width="${w}" height="${urb * k}" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<rect x="${x}" y="${y0 - tot * k}" width="${w}" height="${rur * k}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` +
      t(x + w / 2, y0 - urb * k / 2 - 2, `${urb} m`, { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(x + w / 2, y0 - urb * k / 2 + 20, pct, { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' }) +
      t(x + w / 2, y0 - urb * k - rur * k / 2 + 6, `${rur} m`, { size: 18, weight: 700, anchor: 'middle', fill: C.olive }) +
      t(x + w / 2, y0 - tot * k - 12, `total ${tot.toFixed(1)} m`, { size: 16.5, weight: 600, anchor: 'middle' }) +
      t(x + w / 2, y0 + 28, lab, { size: 16.5, weight: 600, anchor: 'middle' });
  };
  b += col(165, 3.6, 9, 'First census', '40%') + col(335, 6.3, 12.6, 'Second census', '50%');
  b += rrect(140, 130, 20, 20, C.tealDark, C.ink, 2, 3) + t(168, 146, 'urban', { size: 16 }) + rrect(250, 130, 20, 20, C.cream, C.ink, 2, 3) + t(278, 146, 'rural', { size: 16 });
  b += t(490, 146, 'invented data', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += panel(530, 110, 340, 560, C.panel, C.panelEdge);
  b += t(556, 150, 'Urban share', { size: 21, weight: 700 });
  b += tl(556, 188, ['3.6 m ÷ 9.0 m × 100', '= 40%'], { size: 18 }, 26) + tl(556, 262, ['6.3 m ÷ 12.6 m × 100', '= 50%'], { size: 18 }, 26);
  b += rrect(556, 320, 290, 60, C.tealLight, C.tealDark, 2.5, 10) + t(701, 357, '40% → 50%: urbanising', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += para(556, 418, 'The rural population also grew, from 5.4 m to 6.3 m.', 290, { size: 17 }).svg;
  b += para(556, 490, 'Urbanisation is about the proportion living in urban areas, not about rural areas emptying.', 290, { size: 17, weight: 600 }).svg;
  add('08-worked-example-urban-share',
    svg(900, 700, 'Worked example: is the country urbanising?', b),
    'Stacked bars for two censuses. First: 3.6 million urban out of 9.0 million, 40%. Second: 6.3 million urban out of 12.6 million, 50%. The rural population also grew, from 5.4 to 6.3 million, yet the country is urbanising because the urban share rose.',
    'The urban share rose from 40% to 50% even though the rural population grew too.',
    H2.we2);
}
