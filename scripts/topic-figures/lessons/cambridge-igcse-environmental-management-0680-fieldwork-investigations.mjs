// Topic figures for cambridge-igcse-environmental-management-0680-fieldwork-investigations
import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- local helpers (kept inside this lesson file on purpose) ----
const esc = (s) => String(s).replace(/&(?![a-z#0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tw = (s, size, weight = 400) => String(s).replace(/&[a-z#0-9]+;/g, 'x').length * size * (weight >= 600 ? 0.575 : 0.535);
const wrap = (s, size, width, weight = 400) => {
  const lines = [''];
  for (const w of String(s).split(' ')) {
    const cur = lines[lines.length - 1];
    const cand = cur ? cur + ' ' + w : w;
    if (cur && tw(cand, size, weight) > width) lines.push(w); else lines[lines.length - 1] = cand;
  }
  return lines;
};
// wrapped paragraph; returns svg string. ph() gives its height.
const para = (x, y, s, width, o = {}) => {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  return tl(x, y, wrap(s, size, width, o.weight).map(esc), { ...o, size }, lh);
};
const ph = (s, width, o = {}) => { const size = o.size || 17, lh = o.lh || Math.round(size * 1.32); return wrap(s, size, width, o.weight).length * lh; };
// card: optional title + body text (string, or array of strings = separate paragraphs/bullets)
const cardLayout = (w, o) => {
  const pad = o.pad ?? 18, ts = o.tsize || 20, bs = o.bsize || 17, inner = w - 2 * pad;
  const tLines = o.title ? wrap(o.title, ts, inner, 700) : [];
  const body = o.body == null ? [] : Array.isArray(o.body) ? o.body : [o.body];
  const blh = Math.round(bs * 1.32), tlh = Math.round(ts * 1.25);
  const bLines = body.map((b) => wrap((o.bullet ? '• ' : '') + b, bs, inner - (o.bullet ? 0 : 0), o.bweight));
  const contentH = tLines.length * tlh + (tLines.length && body.length ? 8 : 0) + bLines.reduce((a, l) => a + l.length * blh, 0) + Math.max(0, body.length - 1) * (o.gap ?? 6);
  return { pad, ts, bs, inner, tLines, bLines, blh, tlh, contentH, h: contentH + 2 * pad - 4 + (o.top || 0) };
};
const cardH = (w, o) => cardLayout(w, o).h;
const card = (x, y, w, o = {}) => {
  const L = cardLayout(w, o);
  const h = o.h || L.h;
  const anchor = o.center ? 'middle' : 'start';
  const tx = o.center ? x + w / 2 : x + L.pad;
  let yy = y + (o.top || 0) + L.pad + L.ts * 0.78 + (o.vcenter === false ? 0 : (h - L.h) / 2);
  if (!o.title) yy = yy - L.ts * 0.78 + L.bs * 0.78;
  let s = o.noBox ? '' : `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${o.fill || C.panel}" stroke="${o.edge || C.panelEdge}" stroke-width="${o.ew ?? 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
  L.tLines.forEach((ln) => { s += t(tx, yy, esc(ln), { size: L.ts, weight: 700, fill: o.tfill || C.ink, anchor }); yy += L.tlh; });
  if (L.tLines.length && L.bLines.length) yy += 8;
  L.bLines.forEach((lines, i) => { lines.forEach((ln) => { s += t(tx, yy, esc(ln), { size: L.bs, fill: o.bfill || C.ink, anchor, weight: o.bweight || 400 }); yy += L.blh; }); yy += o.gap ?? 6; });
  return s;
};
// rounded tag sized to its text
const tag = (x, y, s, o = {}) => {
  const size = o.size || 16, w = tw(s, size, o.weight || 600) + 24, h = size + 14;
  const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w : x;
  return `<rect x="${x0}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2"/>` + t(x0 + w / 2, y + size * 0.36, esc(s), { size, weight: o.weight || 600, anchor: 'middle', fill: o.color || C.ink });
};
// curved arrow (quadratic)
const carrow = (x1, y1, cx, cy, x2, y2, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="M${x1},${y1} Q${cx},${cy} ${x2},${y2}" fill="none" stroke="${color}" stroke-width="${w}" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// poly-line arrow through points
const parrow = (pts, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linejoin="round" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const notToScale = (x, y, anchor = 'end') => t(x, y, 'Not to scale', { size: 15, italic: true, fill: C.muted, anchor });
// simple chart frame: returns {svg, X, Y}
const chart = (x0, y0, w, h, { xmin, xmax, ymin, ymax, xticks, yticks, xlabel, ylabel, xfmt = (v) => v, yfmt = (v) => v, grid = true }) => {
  const X = (v) => x0 + ((v - xmin) / (xmax - xmin)) * w;
  const Y = (v) => y0 + h - ((v - ymin) / (ymax - ymin)) * h;
  let s = `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="${C.panel}"/>`;
  for (const v of yticks) s += (grid ? `<line x1="${x0}" y1="${Y(v)}" x2="${x0 + w}" y2="${Y(v)}" stroke="${C.panelEdge}" stroke-width="1.5"/>` : '') + `<line x1="${x0 - 7}" y1="${Y(v)}" x2="${x0}" y2="${Y(v)}" stroke="${C.ink}" stroke-width="2"/>` + t(x0 - 12, Y(v) + 6, yfmt(v), { size: 16, anchor: 'end' });
  for (const v of xticks) s += `<line x1="${X(v)}" y1="${y0 + h}" x2="${X(v)}" y2="${y0 + h + 7}" stroke="${C.ink}" stroke-width="2"/>` + t(X(v), y0 + h + 28, xfmt(v), { size: 16, anchor: 'middle' });
  s += `<path d="M${x0},${y0} L${x0},${y0 + h} L${x0 + w},${y0 + h}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  if (xlabel) s += t(x0 + w / 2, y0 + h + 60, esc(xlabel), { size: 17, weight: 600, anchor: 'middle' });
  if (ylabel) s += `<text x="0" y="0" transform="translate(${x0 - 62},${y0 + h / 2}) rotate(-90)" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle">${esc(ylabel)}</text>`;
  return { svg: s, X, Y };
};
const dot = (x, y, r = 7, fill = C.tealDark) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
const line = (x1, y1, x2, y2, color = C.ink, w = 2.5, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const rect = (x, y, w, h, fill, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 0}" fill="${fill}"${o.stroke ? ` stroke="${o.stroke}" stroke-width="${o.sw ?? 2.5}"` : ''}${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.op ? ` opacity="${o.op}"` : ''}/>`;
const tree = (x, y, s = 1) => `<rect x="${x - 4 * s}" y="${y - 22 * s}" width="${8 * s}" height="${22 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x}" cy="${y - 38 * s}" r="${22 * s}" fill="${C.grass}" stroke="${C.ink}" stroke-width="2.5"/>`;
const cloud = (cx, cy, w, h, fill = C.tealLight) => {
  const rx = w / 2, ry = h / 2;
  return `<path d="M${cx - rx},${cy + ry} Q${cx - rx - ry * 0.9},${cy + ry} ${cx - rx},${cy} Q${cx - rx + 5},${cy - ry * 1.2} ${cx - rx * 0.45},${cy - ry * 0.85} Q${cx - rx * 0.2},${cy - ry * 1.9} ${cx + rx * 0.25},${cy - ry * 1.1} Q${cx + rx * 0.75},${cy - ry * 1.6} ${cx + rx * 0.85},${cy - ry * 0.3} Q${cx + rx + ry * 0.9},${cy - ry * 0.2} ${cx + rx},${cy + ry} Z" fill="${fill}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
};

export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

export const slug = 'cambridge-igcse-environmental-management-0680-fieldwork-investigations';

// 01 Nine stages of an investigation
{
  const st = [
    ['Aims and hypotheses', 'testable prediction naming both variables'],
    ['Plan methods', 'strategy, technique; pilot study'],
    ['Measured and control variables', 'record one; keep others the same'],
    ['Independent and dependent', 'chosen variable; responding variable'],
    ['Repeats and replicates', 'reduce chance; allow a mean'],
    ['Record data', 'table drawn first; units in headings'],
    ['Analyse data', 'means, percentages, suitable graph'],
    ['Anomalies', 'check, exclude or repeat, and say so'],
    ['Conclusions', 'support the hypothesis? quote figures'],
  ];
  let s = '';
  const cw = 270, ch = 104, gx = 15, gy = 34;
  const pos = (i) => { const r = Math.floor(i / 3), c = r % 2 === 0 ? i % 3 : 2 - (i % 3); return [30 + c * (cw + gx), 110 + r * (ch + gy)]; };
  st.forEach(([a, b], i) => {
    const [x, y] = pos(i);
    const hl = i === 0 || i === 8;
    s += rect(x, y, cw, ch, hl ? C.cream : C.panel, { stroke: hl ? C.olive : C.panelEdge, sw: 2.5, rx: 12 }) + card(x + 34, y, cw - 34, { title: a, body: b, tsize: 17, bsize: 15, h: ch, pad: 12, noBox: true });
    s += badge(x + 24, y + 30, 15, String(i + 1), C.mustard);
    if (i < 8) { const [nx, ny] = pos(i + 1); if (ny === y) s += arrow(nx > x ? x + cw + 2 : x - 2, y + ch / 2, nx > x ? nx - 3 : nx + cw + 3, y + ch / 2, { w: 3 }); else s += arrow(x + cw / 2, y + ch + 2, x + cw / 2, ny - 3, { w: 3 }); }
  });
  add('01-scientific-method',
    svg(900, 110 + 3 * ch + 2 * gy + 30, 'Nine stages of one investigation', s),
    'A snaking flow of nine numbered stages: aims and hypotheses, plan methods, measured and control variables, independent and dependent variables, repeats and replicates, record data, analyse data, identify anomalies, and form conclusions.',
    'Each stage of the scientific method feeds the next, from hypothesis to conclusion.',
    '## The scientific method, step by step (5.4.1)');
}

// 02 Variables in the beetle investigation
{
  let s = '';
  s += card(30, 120, 300, { title: 'Independent variable', body: 'what you choose: habitat type (woodland or grassland)', tsize: 19, bsize: 16, h: 120, fill: C.tealLight, edge: C.tealDark });
  s += card(570, 120, 300, { title: 'Dependent variable', body: 'what responds and is measured: number of beetles', tsize: 19, bsize: 16, h: 120, fill: C.cream, edge: C.olive });
  s += arrow(336, 180, 564, 180, { w: 5 }) + t(450, 168, 'affects', { size: 17, weight: 700, anchor: 'middle' });
  s += rect(30, 280, 840, 150, C.panel, { stroke: C.ink, sw: 2.5, rx: 14, dash: '9 6' }) + t(54, 316, 'Control variables: kept the same so they do not affect the result', { size: 19, weight: 700 });
  ['trap size', 'time left out', 'time of day'].forEach((v, i) => { s += tag(54 + i * 200, 370, v, { size: 17, fill: C.panel, edge: C.ink }); });
  const rh = cardH(410, { title: 'Replicates', body: 'extra samples at different places in the same conditions, e.g. five traps per habitat', tsize: 18, bsize: 16 });
  s += card(30, 460, 410, { title: 'Repeats', body: 'the same measurement taken again in the same way', tsize: 18, bsize: 16, h: rh });
  s += card(460, 460, 410, { title: 'Replicates', body: 'extra samples at different places in the same conditions, e.g. five traps per habitat', tsize: 18, bsize: 16, h: rh });
  s += t(450, 460 + rh + 34, 'Hypothesis: more ground beetles will be caught in woodland than in grassland.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('02-variables',
    svg(900, 460 + rh + 60, 'Variables in a pitfall-trap investigation', s),
    'Habitat type, the independent variable, affects the number of beetles, the dependent variable. Trap size, time left out and time of day are control variables kept the same. Below, repeats are measurements taken again; replicates are extra samples at different places.',
    'Change one variable, measure one, and keep the rest the same.',
    '## The scientific method, step by step (5.4.1)');
}

// 03 Random vs systematic sampling (plan views)
{
  let s = panel(30, 110, 410, 470) + panel(460, 110, 410, 470);
  s += t(235, 148, 'Random sampling', { size: 21, weight: 700, anchor: 'middle' }) + t(665, 148, 'Systematic sampling', { size: 21, weight: 700, anchor: 'middle' });
  // grid
  const gx0 = 85, gy0 = 175, gs = 300;
  s += rect(gx0, gy0, gs, gs, '#e4eedd');
  for (let i = 0; i <= 10; i++) { s += line(gx0 + i * 30, gy0, gx0 + i * 30, gy0 + gs, C.panelEdge, 1) + line(gx0, gy0 + i * 30, gx0 + gs, gy0 + i * 30, C.panelEdge, 1); }
  s += line(gx0, gy0 + gs, gx0 + gs, gy0 + gs, C.ink, 4) + line(gx0, gy0, gx0, gy0 + gs, C.ink, 4);
  [[2, 7], [7, 2], [5, 5], [8, 8], [1, 3], [4, 9], [9, 4], [6, 1]].forEach(([a, b]) => { s += rect(gx0 + a * 30, gy0 + b * 30 - 30, 30, 30, C.mustard, { stroke: C.ink, sw: 2 }); });
  s += t(gx0 + gs / 2, gy0 + gs + 26, 'tape measure', { size: 15, anchor: 'middle', fill: C.muted });
  s += para(54, 548, 'Random number pairs as coordinates: no bias.', 370, { size: 16 });
  // transect from path
  const tx = 520, ty0 = 180, th = 330;
  s += rect(tx - 20, ty0, 340, th, '#e4eedd') + rect(tx - 20, ty0, 340, 44, C.sand) + t(tx + 150, ty0 + 28, 'footpath', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  s += line(tx + 60, ty0 + 44, tx + 60, ty0 + th, C.ink, 3);
  for (let i = 0; i < 7; i++) { const y = ty0 + 50 + i * 40; s += rect(tx + 46, y, 28, 28, C.mustard, { stroke: C.ink, sw: 2 }); }
  s += t(tx + 100, ty0 + 80, '0.5 m quadrat', { size: 15, weight: 600 }) + t(tx + 100, ty0 + 100, 'every 2 m', { size: 15, weight: 600 });
  s += t(tx + 100, ty0 + 200, 'transect at right', { size: 15, weight: 600 }) + t(tx + 100, ty0 + 220, 'angles to the path', { size: 15, weight: 600 });
  s += arrow(tx + 270, ty0 + 70, tx + 270, ty0 + th - 10, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + t(tx + 258, ty0 + th - 30, 'gradient', { size: 15, anchor: 'end', weight: 700, fill: C.tealDark });
  s += para(484, 548, 'Regular intervals: shows change along a gradient.', 370, { size: 16 });
  const tip = 'Compare two similar areas → random. A gradient (path, river bank, shore) → systematic.';
  s += card(30, 600, 840, { body: tip, bsize: 17, bweight: 600, fill: C.cream, edge: C.olive, center: true });
  add('03-random-systematic',
    svg(900, 600 + cardH(840, { body: tip, bsize: 17, bweight: 600 }) + 30, 'Where to sample: random or systematic', s),
    'Left: a grid laid out with two tape measures, with quadrats at randomly chosen coordinates. Right: a transect at right angles to a footpath with a 0.5 m quadrat every 2 m, sampling the gradient away from the path.',
    'Random for comparing similar areas; systematic for change along a gradient.',
    '## Sampling strategies (5.4.2 and 5.4.3)');
}

// 04 Match the technique to the organism
{
  const items = [
    ['Pitfall trap', 'ground-living invertebrates such as beetles', 'pit'],
    ['Pooter', 'very small invertebrates on plants or soil', 'poo'],
    ['Sweep net', 'insects and spiders in long grass', 'net'],
    ['Quadrat', 'plants and slow-moving animals', 'quad'],
    ['Transect', 'change along a gradient', 'tran'],
    ['Aerial photos and drones', 'herds, nesting colonies, vegetation cover', 'drone'],
    ['Automated sampling', 'shy or night-active animals; long periods', 'cam'],
  ];
  const icon = (k, x, y) => {
    if (k === 'pit') return rect(x, y + 20, 80, 40, C.cream) + rect(x + 26, y + 20, 28, 34, C.panel, { stroke: C.ink, sw: 2.5 }) + line(x, y + 20, x + 80, y + 20, C.ink, 2.5) + rect(x + 18, y + 4, 44, 6, C.rockDark, { stroke: C.ink, sw: 1.5 }) + line(x + 22, y + 10, x + 22, y + 20, C.ink, 2) + line(x + 58, y + 10, x + 58, y + 20, C.ink, 2);
    if (k === 'poo') return rect(x + 20, y + 20, 34, 28, C.panel, { stroke: C.ink, sw: 2.5, rx: 6 }) + path(`M${x + 54},${y + 28} L${x + 78},${y + 8} M${x + 20},${y + 34} L${x},${y + 52}`, { w: 3 });
    if (k === 'net') return path(`M${x + 10},${y + 56} L${x + 44},${y + 24}`, { w: 3.5 }) + `<ellipse cx="${x + 56}" cy="${y + 18}" rx="20" ry="14" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x + 50},${y + 30} Q${x + 70},${y + 56} ${x + 76},${y + 26}`, { w: 2, stroke: C.muted });
    if (k === 'quad') return rect(x + 12, y + 4, 56, 56, 'none', { stroke: C.ink, sw: 3.5 }) + line(x + 40, y + 4, x + 40, y + 60, C.muted, 1.5) + line(x + 12, y + 32, x + 68, y + 32, C.muted, 1.5);
    if (k === 'tran') return line(x, y + 32, x + 80, y + 32, C.ink, 3) + [0, 1, 2].map((i) => rect(x + 4 + i * 28, y + 22, 18, 18, C.mustard, { stroke: C.ink, sw: 1.5 })).join('');
    if (k === 'drone') return rect(x + 28, y + 24, 24, 14, C.ink, { rx: 3 }) + line(x + 8, y + 22, x + 72, y + 22, C.ink, 2.5) + `<ellipse cx="${x + 8}" cy="${y + 18}" rx="10" ry="3" fill="${C.muted}"/><ellipse cx="${x + 72}" cy="${y + 18}" rx="10" ry="3" fill="${C.muted}"/>` + path(`M${x + 40},${y + 40} L${x + 26},${y + 62} M${x + 40},${y + 40} L${x + 54},${y + 62}`, { w: 1.5, stroke: C.muted, extra: 'stroke-dasharray="4 4"' });
    return rect(x + 22, y + 16, 40, 34, C.rockDark, { stroke: C.ink, sw: 2.5, rx: 5 }) + `<circle cx="${x + 42}" cy="${y + 33}" r="9" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + line(x + 42, y + 50, x + 42, y + 64, C.ink, 3);
  };
  let s = '';
  items.forEach(([a, b, k], i) => {
    const c = i % 2, r = Math.floor(i / 2), x = 30 + c * 430, y = 110 + r * 112;
    s += panel(x, y, 410, 98) + icon(k, x + 16, y + 18) + t(x + 112, y + 40, a, { size: 18, weight: 700 }) + para(x + 112, y + 64, b, 284, { size: 15, fill: C.muted });
  });
  s += card(460, 110 + 3 * 112, 410, { body: 'Match the technique to the organism, then give a benefit and a limitation.', bsize: 16, fill: C.cream, edge: C.olive, h: 98 });
  add('04-sampling-techniques',
    svg(900, 110 + 4 * 112 + 16, 'Seven sampling techniques', s),
    'Seven cards with simple drawings: a pitfall trap for ground beetles, a pooter for very small invertebrates, a sweep net for insects in long grass, a quadrat for plants, a transect for gradients, a drone for herds and vegetation cover, and a camera trap for shy or night-active animals.',
    'Pick the technique that fits the organism and where it lives.',
    '## Sampling techniques (5.4.4 and 5.4.5)');
}

// 05 Anomaly and mean
{
  const ch = chart(150, 130, 520, 360, { xmin: 0.5, xmax: 5.5, ymin: 0, ymax: 24, xticks: [1, 2, 3, 4, 5], yticks: [0, 4, 8, 12, 16, 20, 24], xlabel: 'Trap number', ylabel: 'Beetles caught in 24 hours', xfmt: (v) => v });
  let s = ch.svg;
  const d = [4, 6, 5, 21, 5];
  d.forEach((v, i) => { s += rect(ch.X(i + 1) - 30, ch.Y(v), 60, ch.Y(0) - ch.Y(v), i === 3 ? C.rust : C.teal, { stroke: C.ink, sw: 2 }) + t(ch.X(i + 1), ch.Y(0) - 12, String(v), { size: 18, weight: 700, anchor: 'middle', fill: i === 3 ? C.panel : C.ink }); });
  s += line(ch.X(0.5), ch.Y(8.2), ch.X(5.5), ch.Y(8.2), C.rust, 3, '10 6') + line(ch.X(0.5), ch.Y(5), ch.X(5.5), ch.Y(5), C.tealDark, 3);
  s += t(ch.X(5.5) - 4, ch.Y(8.2) - 8, 'mean 8.2', { size: 15, weight: 700, anchor: 'end', fill: C.rust });
  s += t(ch.X(4), ch.Y(21) - 10, 'anomaly', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  s += panel(690, 150, 180, 330);
  s += t(706, 184, 'Mean with 21', { size: 16, weight: 700, fill: C.rust }) + t(706, 208, '41 ÷ 5 = 8.2', { size: 17 });
  s += t(706, 260, 'Mean without 21', { size: 16, weight: 700, fill: C.tealDark }) + t(706, 284, '20 ÷ 4 = 5.0', { size: 17 });
  s += para(706, 336, 'The second mean better represents the woodland. Say it was excluded; repeat that trap.', 150, { size: 15, fill: C.muted });
  s += t(450, 600, 'Invented data: five pitfall traps in woodland.', { size: 15, italic: true, fill: C.muted, anchor: 'middle' });
  add('05-anomaly-mean',
    svg(900, 625, 'Spotting an anomaly', s),
    'Bar chart of beetles in five pitfall traps: 4, 6, 5, 21 and 5. The value 21 is marked as an anomaly. A dashed line shows the mean including it, 8.2; a solid line shows the mean excluding it, 5.0.',
    'One anomaly can drag a mean far from the typical value.',
    '## Worked example 1: an anomaly and a mean');
}
