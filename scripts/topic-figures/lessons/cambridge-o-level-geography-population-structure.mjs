import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-o-level-geography-population-structure';
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
const flame = (x, y, s = 1) => `<path d="M${x - 22 * s},${y} l44,${-8 * s} M${x - 22 * s},${y - 8 * s} l44,${8 * s}" stroke="${C.rockDark}" stroke-width="${6 * s}" stroke-linecap="round"/><path d="M${x},${y - 10 * s} q-16,-14 -6,-34 q2,12 8,14 q-2,-16 10,-26 q-2,20 8,30 q4,10 -4,16 z" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.6"/>`;
const steam = (x, y, n = 2, gap = 18, col = C.muted) => { let s = ''; for (let i = 0; i < n; i++) s += path(`M${x + i * gap},${y} q-8,-12 0,-24 q8,-12 0,-24`, { stroke: col, w: 3 }); return s; };
// ---- end helpers ----

// pyramid: male widths m[], female widths f[] (bottom band first)
const pyr = (cx, yBase, bh, m, f = m, o = {}) => {
  let s = '';
  m.forEach((w, i) => { const y = yBase - (i + 1) * bh; s += `<rect x="${cx - 3 - w}" y="${y}" width="${w}" height="${bh - 2}" fill="${o.mc || C.teal}" stroke="${C.ink}" stroke-width="1.4"/>`; });
  f.forEach((w, i) => { const y = yBase - (i + 1) * bh; s += `<rect x="${cx + 3}" y="${y}" width="${w}" height="${bh - 2}" fill="${o.fc || C.cream}" stroke="${C.ink}" stroke-width="1.4"/>`; });
  return s + line(cx, yBase - m.length * bh - 4, cx, yBase + 2, { w: 2 });
};

// 01 Reading a pyramid
{
  const m = [118, 110, 100, 92, 70, 76, 64, 50, 36, 20], f = [112, 106, 98, 90, 68, 74, 64, 54, 42, 28];
  const cx = 330, yb = 560, bh = 38;
  let s = panel(30, 110, 840, 520) + pyr(cx, yb, bh, m, f);
  s += line(cx - 150, yb + 6, cx + 150, yb + 6, { w: 2 }) + t(cx - 80, yb + 32, 'males', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(cx + 80, yb + 32, 'females', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  s += t(cx, yb + 58, 'axis: numbers or % of population — read it first', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 });
  s += t(cx - 160, yb - 10, 'youngest', { size: 14, anchor: 'end', fill: C.muted }) + t(cx - 160, yb - 9 * bh - 10, 'oldest', { size: 14, anchor: 'end', fill: C.muted });
  const call = (y, ty, h, b, col, x0) => line(x0, y, 520, ty - 6, { w: 1.8, color: col }) + circ(x0, y, 4.5, col, col, 1) + t(530, ty, h, { size: 18, weight: 700, fill: col }) + t(530, ty + 23, b, { size: 15.5, fill: C.muted });
  s += call(yb - bh / 2, 520, 'Width of the base', 'birth rate in recent years', C.tealDark, cx + 118);
  s += call(yb - 6.5 * bh, 330, 'How fast the sides narrow', 'death rate and life expectancy', C.ink, cx + 70);
  s += call(yb - 9.5 * bh, 180, 'Width of the top', 'share of elderly; more women than men', C.olive, cx + 30);
  s += call(yb - 4.5 * bh, 425, 'Bulges and notches', 'past baby booms, wars, epidemics, migration', C.rust, cx + 72);
  add('01-reading-a-pyramid',
    svg(900, 650, 'What each part of a pyramid tells you', s, 'Schematic pyramid, males left and females right'),
    'A schematic population pyramid with males on the left and females on the right, youngest at the bottom. Callouts: the width of the base shows recent birth rates; how fast the sides narrow shows the death rate and life expectancy; the width of the top shows the share of elderly people; bulges and notches record past baby booms, wars, epidemics or migration. A note says to read whether the axis shows numbers or percentages first.',
    'Base, sides, top and irregularities each tell a different story.',
    '## Key idea 1: what a pyramid shows');
}

// 02 Four typical structures
{
  const P = [
    ['Youthful', 'low income, e.g. Niger', [100, 88, 76, 64, 53, 43, 34, 25, 17, 10], null, 'Wide base, concave sides: high birth rate, lower life expectancy.'],
    ['Transitional', 'middle income', [64, 70, 78, 80, 72, 60, 48, 36, 24, 13], null, 'Base narrowing as births fall; a bulge of young adults.'],
    ['Ageing', 'high income, e.g. Japan', [44, 48, 52, 56, 60, 62, 62, 58, 50, 34], [42, 46, 50, 55, 59, 62, 64, 62, 58, 44], 'Narrow base, near-vertical sides, wide top: low births, long lives.'],
    ['Migration-shaped', 'receiving, e.g. UAE', [46, 44, 50, 104, 116, 96, 40, 24, 14, 8], [44, 42, 40, 38, 34, 30, 26, 20, 14, 8], 'Far more men than women aged 20–49: male migrant workers.'],
  ];
  let s = '';
  P.forEach(([h, sub, m, f, d], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 400;
    s += panel(x, y, 410, 384) + t(x + 22, y + 38, h, { size: 21, weight: 700 }) + t(x + 22, y + 62, sub, { size: 15.5, fill: C.muted });
    s += pyr(x + 205, y + 300, 21, m.map((v) => v * 1.35), (f || m).map((v) => v * 1.35));
    s += tl(x + 22, y + 334, wrap(d, 370, 15.5), { size: 15.5 }, 20);
  });
  s += t(450, 925, 'Schematic shapes; males left (teal), females right (cream)', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('02-four-structures',
    svg(900, 945, 'Four population structures', s),
    'Four schematic pyramids. Youthful (low income, such as Niger): wide base and concave sides. Transitional (middle income): the base is narrowing and there is a bulge of young adults. Ageing (high income, such as Japan): narrow base, near-vertical sides and a wide top with more older women. Migration-shaped (a receiving country such as the UAE): far more men than women aged 20 to 49 because most migrant workers are men.',
    'The shape records birth rates, death rates and migration.',
    '## Key idea 2: structures at different levels of development');
}

// 03 Dependency ratio: Country A vs Country B
{
  const C2 = [['Country A', 43, 54, 3, '85.2', '79.6', '5.6', 'almost all children'], ['Country B', 12, 59, 29, '69.5', '20.3', '49.2', 'mostly elderly']];
  let s = panel(30, 110, 840, 100, C.cream, C.olive) + t(450, 148, 'Dependency ratio = (0–14 + 65 and over) ÷ (15–64) × 100', { size: 19, weight: 700, anchor: 'middle' }) + t(450, 180, 'Split it: youth = 0–14 ÷ 15–64 × 100 · old-age = 65+ ÷ 15–64 × 100', { size: 16.5, anchor: 'middle', fill: C.muted });
  C2.forEach(([n, a, b, c, dr, y, o, note], i) => {
    const y0 = 235 + i * 250, W = 700;
    s += panel(30, y0, 840, 232) + t(55, y0 + 38, n, { size: 21, weight: 700 }) + t(845, y0 + 38, 'dependants: ' + note, { size: 16, anchor: 'end', fill: i ? C.olive : C.tealDark, weight: 700 });
    let x = 120; [[a, '0–14', C.tealDark, '#ffffff'], [b, '15–64', '#ffffff', C.ink], [c, '65+', C.mustard, C.ink]].forEach(([v, l, col, tc]) => { const w = (v / 100) * W; s += `<rect x="${x}" y="${y0 + 60}" width="${w}" height="50" fill="${col}" stroke="${C.ink}" stroke-width="2"/>` + (w > 40 ? t(x + w / 2, y0 + 92, v + '%', { size: 17, weight: 700, anchor: 'middle', fill: tc }) : t(x + w + 8, y0 + 92, v + '%', { size: 17, weight: 700 })) + t(x + w / 2, y0 + 130, l, { size: 14.5, anchor: 'middle', fill: C.muted }); x += w; });
    s += rrect(55, y0 + 150, 250, 64, C.tealLight, C.tealDark, 2, 10) + t(180, y0 + 175, 'Dependency ratio', { size: 15, anchor: 'middle', fill: C.muted, weight: 700 }) + t(180, y0 + 202, dr, { size: 22, weight: 700, anchor: 'middle' });
    s += rrect(325, y0 + 150, 250, 64, '#ffffff', C.panelEdge, 2, 10) + t(450, y0 + 175, 'Youth', { size: 15, anchor: 'middle', fill: C.muted, weight: 700 }) + t(450, y0 + 202, y, { size: 22, weight: 700, anchor: 'middle' });
    s += rrect(595, y0 + 150, 250, 64, '#ffffff', C.panelEdge, 2, 10) + t(720, y0 + 175, 'Old-age', { size: 15, anchor: 'middle', fill: C.muted, weight: 700 }) + t(720, y0 + 202, o, { size: 22, weight: 700, anchor: 'middle' });
  });
  s += t(450, 755, 'Similar totals can hide opposite problems: always split the ratio.', { size: 17, anchor: 'middle', fill: C.rust, weight: 700 });
  add('03-dependency-ratio',
    svg(900, 780, 'Dependency ratio: who depends on whom?', s, 'Illustrative data from the worked example'),
    'The dependency ratio formula, with youth and old-age versions. Country A has 43 per cent aged 0 to 14, 54 per cent aged 15 to 64 and 3 per cent aged 65 and over: a dependency ratio of 85.2, youth 79.6 and old-age 5.6. Country B has 12, 59 and 29 per cent: a ratio of 69.5, youth 20.3 and old-age 49.2.',
    'A’s dependants are children; B’s are elderly. Same idea, opposite consequences.',
    '## Worked example: two countries compared');
}

// 04 Implications and responses
{
  let s = card(30, 115, 410, 290, 'Youthful population', null, { fill: C.tealLight, edge: C.tealDark, ts: 21, tfill: C.tealDark }) + bullets(55, 180, ['Demand for schools, teachers, maternal and child health care, vaccination', 'Future need for jobs and housing; unemployment or emigration if the economy lags', 'Population momentum: growth continues as many reach childbearing age'], 365, { size: 16.5, gap: 12 }).svg;
  s += card(460, 115, 410, 290, 'Ageing population', null, { fill: '#f6e6dc', edge: C.rust, ts: 21, tfill: C.rust }) + bullets(485, 180, ['Rising costs of pensions, health and residential care, paid by a shrinking workforce', 'Labour shortages, especially in care and manual work', 'Fewer pupils: some schools close or merge', 'But: older people give childcare, volunteer, and spend savings'], 365, { size: 16.5, gap: 12 }).svg;
  s += t(450, 448, 'Responses', { size: 21, weight: 700, anchor: 'middle' });
  s += card(30, 468, 410, 140, 'For youth dependency', 'Invest in education and family planning; create jobs for the young adults to come.', { ts: 18, bs: 16.5 });
  s += card(460, 468, 410, 140, 'For ageing', 'Raise retirement age; more women and older people in work; pro-natalist incentives; immigration; technology. Japan: skilled-worker visa (2019), care robots.', { ts: 18, bs: 16.5 });
  add('04-implications',
    svg(900, 630, 'What a high dependent population means', s),
    'Youthful populations need schools, teachers and child health care, then jobs and housing, and keep growing through population momentum. Ageing populations face rising pension and care costs, labour shortages and fewer pupils, but older people also provide childcare, volunteering and spending. Responses: education, family planning and job creation for youth; later retirement, more workers, pro-natalist incentives, immigration and technology for ageing, as in Japan.',
    'Name the type of dependency before giving consequences and responses.',
    '## Key idea 4: implications of a high dependent population');
}

// 05 Describe, explain, implication
{
  const rows = [['Wide base', 'High birth rate', 'Demand for schools and child health care'], ['Wide top, near-vertical sides', 'Low birth rate, long life expectancy', 'Pension and care costs; labour shortages'], ['Bulge of young adults, base narrowing', 'Births were high, now falling', 'A demographic dividend, if there are jobs']];
  let s = '';
  ['Describe the shape', 'Explain it', 'Say what it means'].forEach((h, i) => { s += rrect(30 + i * 290, 115, 260, 50, [C.ink, C.tealDark, C.olive][i], C.ink, 2, 25) + t(160 + i * 290, 147, h, { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }); });
  rows.forEach((r, j) => { const y = 185 + j * 100; r.forEach((c, i) => { s += rrect(30 + i * 290, y, 260, 84, '#ffffff', C.panelEdge, 2.5, 12) + tl(160 + i * 290, y + 46 - (wrap(c, 230, 16.5).length - 1) * 11, wrap(c, 230, 16.5), { size: 16.5, anchor: 'middle' }, 22); if (i < 2) s += arrow(292 + i * 290, y + 42, 318 + i * 290, y + 42, { w: 3.5 }); }); });
  add('05-describe-explain-implication',
    svg(900, 500, 'The pyramid answer chain', s),
    'Three columns: describe the shape, explain it, say what it means. A wide base means a high birth rate and demand for schools and child health care. A wide top with near-vertical sides means low births and long lives, bringing pension and care costs and labour shortages. A bulge of young adults above a narrowing base means births were high and are now falling, giving a possible demographic dividend if there are jobs.',
    'Describe the shape, explain it, then give the implication.',
    '## Exam technique');
}
