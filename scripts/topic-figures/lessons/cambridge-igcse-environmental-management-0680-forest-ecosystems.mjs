// Topic figures for cambridge-igcse-environmental-management-0680-forest-ecosystems
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

export const slug = 'cambridge-igcse-environmental-management-0680-forest-ecosystems';

// 01 Causes of deforestation on one schematic map
{
  let s = rect(30, 110, 840, 520, '#a9c48f', { stroke: C.ink, sw: 2.5, rx: 14 });
  for (let i = 0; i < 60; i++) { const x = 60 + ((i * 137) % 790), y = 135 + ((i * 89) % 470); s += `<circle cx="${x}" cy="${y}" r="9" fill="${C.grass}" opacity="0.8"/>`; }
  // reservoir (HEP) top right
  s += `<path d="M600,130 Q760,120 850,170 L850,300 Q760,330 690,280 Q630,240 600,130 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + rect(680, 282, 60, 12, C.rockDark, { stroke: C.ink, sw: 2 });
  s += t(760, 215, 'reservoir floods', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(760, 235, 'the valley', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(672, 294, 'HEP dam', { size: 15, weight: 700, anchor: 'end' });
  // road
  s += path('M30,470 Q300,440 450,400 Q560,370 620,520 L640,630', { stroke: C.ink, w: 10 }) + path('M30,470 Q300,440 450,400 Q560,370 620,520 L640,630', { stroke: C.sand, w: 5 });
  // fishbone clearings along road
  [[120, 455], [200, 445], [280, 432], [360, 418]].forEach(([x, y], i) => { s += rect(x - 22, y - (i % 2 ? 70 : -12), 44, 58, C.cream, { stroke: C.olive, sw: 2 }); });
  s += t(445, 482, 'farms and settlers follow the road:', { size: 16, weight: 700, anchor: 'middle' }) + t(445, 502, 'clearance far wider than the road', { size: 16, weight: 700, anchor: 'middle' });
  // settlement
  [[470, 350], [495, 342], [485, 368]].forEach(([x, y]) => { s += rect(x, y, 18, 14, C.panel, { stroke: C.ink, sw: 1.5 }); });
  s += t(500, 330, 'settlement', { size: 15, weight: 700, anchor: 'middle' });
  // mine
  s += `<ellipse cx="675" cy="560" rx="62" ry="38" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/><ellipse cx="675" cy="560" rx="36" ry="18" fill="${C.rockDark}"/>` + t(750, 556, 'mine', { size: 16, weight: 700 }) + t(750, 576, '+ waste tips', { size: 15, weight: 600 });
  // commercial plantation
  s += rect(80, 150, 250, 150, C.cream, { stroke: C.olive, sw: 2.5 }); for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) s += `<circle cx="${100 + c * 30}" cy="${175 + r * 32}" r="7" fill="${C.olive}"/>`;
  s += t(205, 320, 'commercial farming: ranching,', { size: 15, weight: 700, anchor: 'middle' }) + t(205, 338, 'oil palm, soya for export', { size: 15, weight: 700, anchor: 'middle' });
  // logging track
  s += path('M450,400 L420,250 L470,170', { stroke: C.rockDark, w: 4, extra: 'stroke-dasharray="10 6"' }) + t(480, 200, 'logging track', { size: 15, weight: 700 });
  // subsistence plot
  s += rect(60, 560, 50, 40, C.cream, { stroke: C.olive, sw: 2 }) + t(122, 586, 'small subsistence plot', { size: 15, weight: 700 });
  s += t(858, 620, 'Not to scale', { size: 15, italic: true, fill: C.ink, anchor: 'end' });
  const cc = 'Climate change: hotter, longer dry seasons bring drought and wildfire, so forest can be lost without anyone cutting it.';
  s += card(30, 650, 840, { body: cc, bsize: 16, fill: C.panel, edge: C.panelEdge });
  add('01-causes-map',
    svg(900, 650 + cardH(840, { body: cc, bsize: 16 }) + 30, 'Six causes of deforestation', s),
    'Schematic map of a forest. A road brings a settlement and a fishbone of farm clearings; a logging track, a commercial plantation, a small subsistence plot, a mine with waste tips and a reservoir behind an HEP dam each remove forest. A note adds climate change through drought and wildfire.',
    'Causes link up: a road opens the forest to logging, farming and settlement.',
    '## Causes of deforestation (5.2.1)');
}

// 02 Impacts as linked chains
{
  let s = card(330, 110, 240, { title: 'Deforestation', tsize: 21, center: true, h: 56, fill: C.rock, edge: C.ink });
  const cols = [
    ['Habitat loss', 'Loss of biodiversity', 'Genetic depletion'],
    ['Less interception and uptake; bare soil', 'Soil erosion (and desertification)', 'Silting and flooding'],
    ['Less transpiration', 'Less water vapour recycled', 'Changes to rainfall patterns'],
    ['Trees burned or rot', 'Carbon released as CO₂; fewer trees absorb it', 'Global warming'],
  ];
  const cw = 195, gx = 20;
  cols.forEach((items, c) => {
    const x = 30 + c * (cw + gx);
    s += parrow([[450, 166], [450, 186], [x + cw / 2, 186], [x + cw / 2, 206]], { w: 3 });
    items.forEach((it, i) => { const y = 210 + i * 130; s += card(x, y, cw, { title: it, tsize: 16, center: true, h: 94, pad: 12, fill: i === 2 ? C.cream : C.panel, edge: i === 2 ? C.olive : C.panelEdge }); if (i < 2) s += arrow(x + cw / 2, y + 96, x + cw / 2, y + 126, { w: 3 }); });
  });
  add('02-impact-chains',
    svg(900, 630, 'Impacts of deforestation as chains', s),
    'Four chains from deforestation. Habitat loss leads to loss of biodiversity and genetic depletion. Less interception and bare soil lead to soil erosion and desertification, then silting and flooding. Less transpiration means less water vapour recycled and changes to rainfall. Burning or rotting trees release carbon dioxide, causing global warming.',
    'Explain each impact as a chain, not as a single word.',
    '## Impacts of deforestation (5.2.2)');
}

// 03 Sustainable management definition
{
  let s = '';
  const cx = 450, cy = 330;
  const node = (x, y, l, f) => `<circle cx="${x}" cy="${y}" r="78" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + t(x, y + 7, l, { size: 20, weight: 700, anchor: 'middle' });
  s += path(`M${cx},${cy - 150} L${cx - 170},${cy + 100} L${cx + 170},${cy + 100} Z`, { w: 3, stroke: C.olive, extra: 'stroke-dasharray="10 7"' });
  s += node(cx, cy - 150, 'Environment', C.tealLight) + node(cx - 170, cy + 100, 'Wildlife', C.teal) + node(cx + 170, cy + 100, 'Humans', C.cream);
  s += t(cx, cy + 22, 'balance', { size: 20, weight: 700, anchor: 'middle', fill: C.olive });
  s += arrow(cx + 270, cy - 30, cx + 380, cy - 30, { w: 5, color: C.tealDark, marker: 'ahT' }) + t(cx + 325, cy - 50, 'future', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(cx + 325, cy, 'generations', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  const def = 'Sustainable management of forests: balancing the needs of the environment, wildlife and humans while conserving forests for future generations.';
  s += card(30, 540, 840, { body: def, bsize: 18, bweight: 600, fill: C.cream, edge: C.olive, center: true });
  s += t(450, 540 + cardH(840, { body: def, bsize: 18, bweight: 600 }) + 28, 'Leaving out humans turns it into simple preservation.', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  add('03-sustainable-management',
    svg(900, 540 + cardH(840, { body: def, bsize: 18, bweight: 600 }) + 50, 'Sustainable forest management', s.replace(`fill="${C.grass}" stroke="${C.ink}" stroke-width="3"/><text x="280"`, `fill="${C.grass}" stroke="${C.ink}" stroke-width="3"/><text x="280"`)),
    'Three circles, environment, wildlife and humans, joined in a triangle labelled balance, with an arrow towards future generations. Below is the syllabus definition of sustainable management of forests.',
    'All three groups, plus future generations: leave one out and the definition fails.',
    '## Defining sustainable management (5.2.3)');
}

// 04 Forest and the water cycle
{
  const G = 450;
  let s = panel(30, 110, 410, 470) + panel(460, 110, 410, 470);
  s += t(235, 148, 'Forest', { size: 21, weight: 700, anchor: 'middle' }) + t(665, 148, 'Cleared land', { size: 21, weight: 700, anchor: 'middle' });
  const ground = (x) => `<path d="M${x + 2},${G} L${x + 408},${G + 40} L${x + 408},${G + 128} L${x + 2},${G + 128} Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += ground(30) + ground(460);
  // forest trees
  [[110, 1.6], [230, 1.9], [340, 1.5]].forEach(([x, k]) => { s += tree(x, G + (x - 30) * 0.1, k); });
  for (let i = 0; i < 9; i++) { const x = 60 + i * 42; s += line(x, 172 + (i % 2) * 12, x - 5, 192 + (i % 2) * 12, C.blue, 2.5); }
  s += t(110, 344, 'interception', { size: 15, weight: 700, fill: C.blue, anchor: 'middle' });
  s += arrow(245, 350, 280, 270, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + t(250, 258, 'transpiration', { size: 15, weight: 700, fill: C.tealDark });
  s += path(`M230,${G + 20} l-14,40 M230,${G + 20} l0,48 M230,${G + 20} l14,40`, { stroke: C.rockDark, w: 3 }) + t(250, G + 104, 'water uptake', { size: 15, weight: 700 });
  s += arrow(110, G + 20, 110, G + 80, { w: 3, color: C.blue }) + t(56, G + 106, 'soaks in', { size: 15, weight: 600, fill: C.blue });
  s += arrow(320, G + 34, 400, G + 42, { w: 2.5, color: C.rust, marker: 'ahR' }) + t(330, G + 66, 'little run-off', { size: 15, weight: 700, fill: C.rust });
  // cleared
  for (let i = 0; i < 9; i++) { const x = 490 + i * 42; s += line(x, 172 + (i % 2) * 12, x - 5, 192 + (i % 2) * 12, C.blue, 2.5); }
  s += [530, 600].map((x) => rect(x, G + (x - 460) * 0.1 - 10, 14, 10, C.rockDark, { stroke: C.ink, sw: 1.5 })).join('') + t(570, G - 20, 'stumps', { size: 15, anchor: 'middle', fill: C.muted });
  s += arrow(560, G + 2 - 20 + 40, 840, G + 34, { w: 6, color: C.rust, marker: 'ahR' });
  s += t(560, 360, 'more surface run-off,', { size: 16, weight: 700, fill: C.rust }) + t(560, 380, 'reaching rivers faster', { size: 16, weight: 700, fill: C.rust });
  s += t(560, 300, 'no canopy: rain hits', { size: 15, weight: 600 }) + t(560, 318, 'bare soil', { size: 15, weight: 600 });
  s += line(820, G + 70, 860, G + 70, C.olive, 0) + t(665, G + 96, 'topsoil washed away', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  s += notToScale(858, 568);
  const k = 'Interception and uptake slow water on its way to rivers, so floods are lower and later; roots and leaf litter protect the soil.';
  s += card(30, 600, 840, { body: k, bsize: 17, fill: C.cream, edge: C.olive });
  add('04-forest-water-cycle',
    svg(900, 600 + cardH(840, { body: k, bsize: 17 }) + 30, 'Forests in the water cycle', s),
    'Two slopes side by side. In the forest, leaves intercept rain, roots take up water, trees transpire and water soaks into the soil, so there is little run-off. On cleared land with only stumps, rain hits bare soil and much more runs off quickly to rivers, washing topsoil away.',
    'Interception, uptake, transpiration and less run-off: the forest services that clearance removes.',
    '## Why forests need sustainable management (5.2.4)');
}

// 05 Rate of forest loss
{
  const ch = chart(150, 140, 560, 360, { xmin: 0, xmax: 60, ymin: 0, ymax: 6000, xticks: [0, 6, 20, 40, 60], yticks: [0, 1000, 2000, 3000, 4000, 5000, 6000], xlabel: 'Years after first survey', ylabel: 'Forest area (km²)', yfmt: (v) => v.toLocaleString('en-GB') });
  let s = ch.svg;
  s += line(ch.X(0), ch.Y(5400), ch.X(6), ch.Y(4860), C.grass, 5) + line(ch.X(6), ch.Y(4860), ch.X(60), ch.Y(0), C.rust, 3, '10 7');
  s += dot(ch.X(0), ch.Y(5400), 8, C.grass) + dot(ch.X(6), ch.Y(4860), 8, C.grass) + dot(ch.X(60), ch.Y(0), 7, C.rust);
  s += t(ch.X(0) + 14, ch.Y(5400) - 12, '5,400', { size: 17, weight: 700 }) + t(ch.X(6) + 14, ch.Y(4860) - 8, '4,860', { size: 17, weight: 700 });
  s += t(ch.X(8), ch.Y(1500), 'if 90 km² a year continued:', { size: 16, weight: 600, fill: C.rust }) + t(ch.X(8), ch.Y(1500) + 20, '54 more years', { size: 16, weight: 700, fill: C.rust });
  s += panel(730, 150, 140, 320) + t(745, 182, 'Lost', { size: 16, weight: 700 }) + t(745, 204, '540 km²', { size: 17 }) + t(745, 246, '% lost', { size: 16, weight: 700 }) + t(745, 268, '10%', { size: 17 }) + t(745, 310, 'Rate', { size: 16, weight: 700 }) + t(745, 332, '90 km²/yr', { size: 17 }) + para(745, 380, 'Assumes a constant rate: unlikely once roads arrive.', 115, { size: 15, fill: C.muted });
  s += t(450, 600, 'Invented figures: two surveys six years apart.', { size: 15, italic: true, fill: C.muted, anchor: 'middle' });
  add('05-rate-of-loss',
    svg(900, 625, 'Rate of forest loss', s),
    'Graph of forest area: 5,400 km² at the first survey and 4,860 km² six years later, a loss of 540 km² or 10%, at 90 km² a year. A dashed line extends the trend to zero after 54 more years, marked as an assumption.',
    'Loss, percentage and rate: then state the assumption behind any projection.',
    '## Worked example 1: rate of forest loss');
}
