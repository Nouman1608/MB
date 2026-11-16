import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-geography-population-density-distribution';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
// wrap text to a pixel width (approximate Inter metrics)
const wrap = (s, w, size = 17, bold = false) => {
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
const tag = (x, y, s, o = {}) => { const size = o.size || 15, w = String(s).length * size * ((o.weight || 700) >= 600 ? 0.6 : 0.55) + 12; const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w + 6 : x - 6; return `<rect x="${x0}" y="${y - size * 0.95}" width="${w}" height="${size * 1.35}" rx="5" fill="${o.bg || '#ffffff'}" opacity="${o.op || 0.92}"/>` + t(x, y, s, { size, weight: o.weight || 700, anchor: o.anchor || 'start', fill: o.fill || C.ink }); };
// bulleted list, each item wrapped to width w; returns {svg, h}
const bullets = (x, y, items, w, o = {}) => {
  const size = o.size || 16.5, lh = o.lh || Math.round(size * 1.3), gap = o.gap ?? 8; let s = '', yy = y;
  for (const it of items) { const ls = wrap(it, w - 18, size); s += t(x, yy, o.mark || '•', { size: o.mark ? size + 3 : size, fill: o.bullet || o.fill || C.ink, weight: 700 }) + tl(x + 16, yy, ls, { size, fill: o.fill || C.ink }, lh); yy += ls.length * lh + gap; }
  return { svg: s, h: yy - y };
};
const turbine = (x, y, s = 1) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 60 * s}" stroke="${C.ink}" stroke-width="${3 * s}"/>` + [0, 120, 240].map((a) => { const r = (a - 90) * Math.PI / 180; return `<line x1="${x}" y1="${y - 60 * s}" x2="${x + Math.cos(r) * 30 * s}" y2="${y - 60 * s + Math.sin(r) * 30 * s}" stroke="${C.ink}" stroke-width="${3.5 * s}" stroke-linecap="round"/>`; }).join('') + `<circle cx="${x}" cy="${y - 60 * s}" r="${4 * s}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`;
const flame = (x, y, s = 1) => `<path d="M${x - 22 * s},${y} l44,${-8 * s} M${x - 22 * s},${y - 8 * s} l44,${8 * s}" stroke="${C.rockDark}" stroke-width="${6 * s}" stroke-linecap="round"/><path d="M${x},${y - 10 * s} q-16,-14 -6,-34 q2,12 8,14 q-2,-16 10,-26 q-2,20 8,30 q4,10 -4,16 z" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.6"/>`;
const steam = (x, y, n = 2, gap = 18, col = C.muted) => { let s = ''; for (let i = 0; i < n; i++) s += path(`M${x + i * gap},${y} q-8,-12 0,-24 q8,-12 0,-24`, { stroke: col, w: 3 }); return s; };
// ---- end helpers ----

// deterministic pseudo-random
let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
const dots = (pts, r = 4, fill = C.ink) => pts.map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${fill}"/>`).join('');

// 01 Density vs distribution
{
  const N = 60; seed = 11;
  let s = '';
  const box = (x, title) => panel(x, 110, 410, 380) + t(x + 205, 146, title, { size: 20, weight: 700, anchor: 'middle' }) + `<rect x="${x + 25}" y="165" width="360" height="240" rx="6" fill="#d8e3c6" stroke="${C.ink}" stroke-width="2"/>`;
  s += box(30, 'Country X: even spread');
  const even = []; for (let i = 0; i < 10; i++) for (let j = 0; j < 6; j++) even.push([75 + i * 34 + (rnd() - 0.5) * 18, 190 + j * 38 + (rnd() - 0.5) * 16]);
  s += dots(even);
  s += box(460, 'Country Y: clustered in a valley');
  s += path('M520,165 Q600,260 700,300 Q780,330 845,405', { stroke: C.blue, w: 7 });
  const cl = []; for (let i = 0; i < N - 4; i++) { const u = rnd(); const bx = 520 + 325 * u, by = 165 + 240 * (u < 0.55 ? (u / 0.55) * (135 / 240) : (135 + (u - 0.55) / 0.45 * 105) / 240); cl.push([bx + (rnd() - 0.5) * 50, Math.min(398, Math.max(172, by + (rnd() - 0.5) * 50))]); }
  cl.push([520, 380], [800, 190], [610, 380], [760, 200]);
  s += dots(cl);
  s += t(65, 440, 'Same area, same population,', { size: 17, weight: 700 }) + t(65, 466, 'so the same average density', { size: 17, weight: 700 });
  s += t(495, 440, 'Density = population ÷ area (km²)', { size: 17, weight: 700 }) + t(495, 466, 'but the distribution is very different', { size: 17, fill: C.rust, weight: 700 });
  s += t(450, 540, 'Words for describing distribution', { size: 20, weight: 700, anchor: 'middle' });
  const words = ['uneven', 'clustered', 'linear', 'dispersed', 'sparse', 'dense'];
  words.forEach((w, i) => {
    const x = 30 + i * 142, y = 560; seed = 100 + i;
    s += rrect(x, y, 130, 130, '#ffffff', C.panelEdge, 2.5, 10) + `<rect x="${x + 12}" y="${y + 12}" width="106" height="76" rx="4" fill="#d8e3c6"/>`;
    let p = [];
    if (w === 'uneven') { for (let k = 0; k < 12; k++) p.push([x + 20 + rnd() * 40, y + 20 + rnd() * 60]); p.push([x + 90, y + 40], [x + 105, y + 70]); }
    if (w === 'clustered') for (let k = 0; k < 14; k++) p.push([x + 65 + (rnd() - 0.5) * 34, y + 50 + (rnd() - 0.5) * 34]);
    if (w === 'linear') { s += line(x + 14, y + 80, x + 116, y + 22, { color: C.blue, w: 3 }); for (let k = 0; k < 10; k++) { const u = k / 9; p.push([x + 18 + u * 94 + (rnd() - 0.5) * 6, y + 76 - u * 52 + (rnd() - 0.5) * 10]); } }
    if (w === 'dispersed') for (let i2 = 0; i2 < 4; i2++) for (let j2 = 0; j2 < 3; j2++) p.push([x + 25 + i2 * 27 + (rnd() - 0.5) * 10, y + 28 + j2 * 22 + (rnd() - 0.5) * 8]);
    if (w === 'sparse') p.push([x + 30, y + 35], [x + 85, y + 60], [x + 55, y + 75]);
    if (w === 'dense') for (let i2 = 0; i2 < 8; i2++) for (let j2 = 0; j2 < 5; j2++) p.push([x + 20 + i2 * 13 + (rnd() - 0.5) * 4, y + 22 + j2 * 14 + (rnd() - 0.5) * 4]);
    s += dots(p, 3.2) + t(x + 65, y + 114, w, { size: 17, weight: 700, anchor: 'middle' });
  });
  add('01-density-vs-distribution',
    svg(900, 715, 'Density is a number; distribution is a pattern', s),
    'Two countries with the same area and the same number of people, so the same average density. In country X the dots are spread evenly; in country Y almost all are clustered along a river valley. Below, six small dot maps illustrate the words uneven, clustered, linear, dispersed, sparse and dense.',
    'The same average density can hide very different distributions.',
    '## Key idea 1: density and distribution are not the same');
}

// 02 Why some places are crowded and others empty
{
  const G = 430;
  let s = panel(30, 110, 840, 400) + `<rect x="45" y="125" width="810" height="${G - 125}" rx="10" fill="${C.tealLight}"/>`;
  s += `<path d="M45,${G} L45,250 L90,200 L130,240 L170,180 L215,235 L250,${G} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` + `<path d="M75,215 L90,200 L105,215 Z M155,195 L170,180 L185,195 Z" fill="#ffffff"/>`;
  s += `<rect x="250" y="${G - 8}" width="330" height="8" fill="#a9c48f"/>` + `<rect x="580" y="${G - 8}" width="150" height="8" fill="${C.sand}"/><rect x="730" y="${G - 14}" width="125" height="14" fill="${C.teal}"/>`;
  s += path(`M250,${G - 4} Q420,${G + 2} 580,${G - 4} Q680,${G - 6} 730,${G - 10}`, { stroke: C.blue, w: 6 });
  s += `<rect x="45" y="${G}" width="810" height="60" fill="#b9ab88"/>` + line(45, G, 855, G, { w: 2.5 });
  [270, 300, 330, 360, 395, 430, 470, 520].forEach((x, i) => { s += house(x, G - 34 - (i % 2) * 6, 0.8); });
  s += factory(640, G - 10, 0.75) + house(600, G - 30, 0.8) + house(690, G - 50, 0.7) + rrect(735, G - 30, 40, 16, '#ffffff', C.ink, 2, 4);
  s += house(130, G - 30, 0.6);
  s += tag(148, 156, 'Sparse: high, steep, cold', { size: 15, anchor: 'middle', fill: C.rust });
  s += tag(148, 330, 'people in valleys', { size: 14, anchor: 'middle', weight: 400 });
  s += tag(400, 300, 'Dense: flat, fertile lowland', { size: 15, anchor: 'middle', fill: C.tealDark }) + tag(400, 320, 'river water, alluvial soil', { size: 14, anchor: 'middle', weight: 400 });
  s += tag(700, 300, 'Dense: port, jobs, trade', { size: 15, anchor: 'middle', fill: C.tealDark }) + tag(700, 320, 'industry and services', { size: 14, anchor: 'middle', weight: 400 });
  s += tag(450, G + 38, 'Schematic landscape, not to scale', { size: 14, anchor: 'middle', weight: 400, bg: '#b9ab88', op: 1, fill: '#ffffff' });
  const phys = ['Relief: flat lowland vs steep, high land', 'Climate: moderate, reliable rain vs extremes', 'Water and soils: rivers, fertile alluvium vs dry, thin soils', 'Vegetation: cleared land vs dense forest'];
  const hum = ['Economic: jobs, ports, trade vs remoteness', 'Transport: good links vs isolation', 'Political: capitals, stability vs conflict', 'History: old cities and farming regions'];
  s += card(30, 530, 410, 210, 'Physical factors', null, { fill: C.cream, edge: C.olive, ts: 19 }) + bullets(50, 590, phys, 375, { size: 15.5, gap: 8 }).svg;
  s += card(460, 530, 410, 210, 'Human factors', null, { fill: C.tealLight, edge: C.tealDark, ts: 19 }) + bullets(480, 590, hum, 375, { size: 15.5, gap: 8 }).svg;
  s += panel(30, 760, 840, 76, '#ffffff', C.panelEdge) + t(55, 792, 'Exceptions: technology (irrigation, air conditioning, desalination) lets desert cities grow;', { size: 16 }) + t(55, 816, 'a resource such as a mine creates a dense pocket in a sparse region.', { size: 16 });
  add('02-population-factors',
    svg(900, 856, 'Why people live where they do', s),
    'A schematic landscape: sparse settlement on high, steep, cold mountains with people only in valleys; dense settlement on a flat, fertile, well-watered river lowland; and a dense port city with industry and trade. Below, physical factors (relief, climate, water and soils, vegetation) and human factors (economic, transport, political, historical). A note adds that technology and resources create exceptions.',
    'Separate physical from human factors, and say how each affects where people live.',
    '## Key idea 3: factors, organised');
}

// 03 Pakistan: an uneven distribution (schematic)
{
  seed = 31;
  let s = panel(30, 110, 840, 560) + `<rect x="45" y="125" width="810" height="530" rx="10" fill="#efe6c8"/>`;
  s += `<path d="M45,560 L300,560 Q340,575 360,600 L420,655 L45,655 Z" fill="${C.teal}"/>` + t(140, 625, 'Arabian Sea', { size: 15, weight: 600, fill: C.tealDark });
  // northern mountains
  s += `<rect x="420" y="135" width="420" height="105" rx="10" fill="${C.rock}" opacity="0.7"/>`;
  [450, 520, 600, 680, 760].forEach((x) => { s += `<path d="M${x},215 L${x + 30},160 L${x + 60},215 Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.8"/><path d="M${x + 20},178 L${x + 30},160 L${x + 40},178 Z" fill="#ffffff"/>`; });
  s += dots([[500, 225], [655, 228], [735, 222]], 3.5);
  // Balochistan
  s += `<rect x="60" y="250" width="330" height="290" rx="12" fill="${C.sand}" stroke="${C.olive}" stroke-width="2" stroke-dasharray="8 6"/>`;
  s += dots([[110, 300], [240, 330], [160, 420], [310, 460], [210, 500], [120, 480]], 3.5);
  // Punjab
  s += `<rect x="560" y="255" width="270" height="170" rx="12" fill="#d8e3c6" stroke="${C.grass}" stroke-width="2" stroke-dasharray="8 6"/>`;
  const pj = []; for (let i = 0; i < 70; i++) pj.push([575 + rnd() * 240, 268 + rnd() * 145]); s += dots(pj, 3.2);
  // Indus
  s += path('M600,200 Q590,300 540,380 Q480,470 430,540 Q405,575 395,605', { stroke: C.blue, w: 7 });
  const RP = [[595, 300], [540, 380], [430, 540], [398, 598]]; const ind = []; for (let i = 0; i < 40; i++) { const u = rnd() * 2.999, k = Math.floor(u), f = u - k; const x = RP[k][0] + (RP[k + 1][0] - RP[k][0]) * f, y = RP[k][1] + (RP[k + 1][1] - RP[k][1]) * f; ind.push([x + (rnd() - 0.5) * 30, y + (rnd() - 0.5) * 14]); } s += dots(ind, 3.2);
  const ka = []; for (let i = 0; i < 26; i++) ka.push([360 + (rnd() - 0.5) * 40, 590 + (rnd() - 0.5) * 30]); s += dots(ka, 3.2);
  s += tag(560, 152, 'Northern mountains: sparse', { size: 15, fill: C.rust, anchor: 'middle' });
  s += tag(80, 278, 'Balochistan: sparse', { size: 16, fill: C.rust }) + tag(80, 520, 'largest province by area,', { size: 14.5, weight: 400 }) + tag(80, 539, 'well under a tenth of people', { size: 14.5, weight: 400 });
  s += tag(580, 448, 'Punjab plains: dense', { size: 16, fill: C.tealDark }) + tag(580, 467, 'about half of all people;', { size: 14.5, weight: 400 }) + tag(580, 486, 'Lahore, Faisalabad', { size: 14.5, weight: 400 });
  s += tag(445, 400, 'Indus valley', { size: 16, fill: C.blue });
  s += tag(415, 625, 'Karachi: largest city, main port', { size: 16, fill: C.tealDark });
  s += t(845, 645, 'Schematic, not a map', { size: 14.5, anchor: 'end', fill: C.muted, italic: true });
  const why = [['Why dense', 'flat land, fertile alluvium, irrigation from the Indus; port and industry at Karachi', C.tealLight, C.tealDark], ['Why sparse', 'dry, rugged plateau; little water, poor soils, far from markets; steep, cold mountains', '#f6e6dc', C.rust]];
  why.forEach(([a, b, f, e], i) => { s += card(30 + i * 430, 690, 410, 118, a, b, { fill: f, edge: e, ts: 18.5, bs: 16, tfill: e }); });
  add('03-pakistan-distribution',
    svg(900, 830, 'Case study: Pakistan’s uneven distribution', s),
    'A schematic diagram of Pakistan with one dot per group of people. Dots crowd the Punjab plains (about half the population, with Lahore and Faisalabad), line the Indus valley and cluster at Karachi on the coast. Balochistan, the largest province by area with well under a tenth of the people, and the northern mountains have very few dots. Below, reasons for dense and sparse areas.',
    'People crowd onto flat, watered, fertile land and the port; dry plateau and mountains stay sparse.',
    '## Case study material');
}

// 04 Egypt and Brazil
{
  seed = 51;
  let s = panel(30, 110, 410, 560) + t(235, 146, 'Egypt: a physical control', { size: 19, weight: 700, anchor: 'middle' });
  s += `<rect x="50" y="165" width="370" height="400" rx="8" fill="${C.sand}"/>` + `<rect x="50" y="165" width="370" height="30" fill="${C.teal}"/>` + t(235, 186, 'Mediterranean Sea', { size: 14.5, anchor: 'middle', fill: C.tealDark, weight: 600 });
  s += `<path d="M200,195 L270,195 L242,260 L228,260 Z" fill="#a9c48f"/>` + path('M235,560 Q245,450 232,360 Q228,300 235,260', { stroke: C.blue, w: 5 });
  const eg = []; for (let i = 0; i < 40; i++) eg.push([205 + rnd() * 60, 200 + rnd() * 55]); for (let i = 0; i < 40; i++) { const y = 265 + rnd() * 290; eg.push([234 + (rnd() - 0.5) * 18 + (y > 450 ? 8 : 0), y]); }
  s += dots(eg, 3) + dots([[110, 400], [360, 330]], 3);
  s += t(110, 300, 'desert', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 }) + t(360, 470, 'desert', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
  s += tag(275, 230, 'delta', { size: 15 }) + tag(250, 420, 'Nile valley', { size: 15, fill: C.blue });
  s += para(55, 595, 'The great majority live in the Nile valley and delta, only a few per cent of the land.', 365, { size: 16 }).svg;
  s += panel(460, 110, 410, 560) + t(665, 146, 'Brazil: a human response', { size: 19, weight: 700, anchor: 'middle' });
  s += `<rect x="480" y="165" width="370" height="400" rx="8" fill="#a9c48f"/>` + `<path d="M850,165 L850,565 L700,565 Q770,480 790,400 Q805,300 822,165 Z" fill="${C.teal}"/>` + t(845, 480, 'Atlantic', { size: 14.5, anchor: 'end', fill: C.tealDark, weight: 600 });
  const br = []; for (let i = 0; i < 55; i++) { const y = 230 + rnd() * 310; const xc = 820 - (y < 400 ? 40 : 75) - (y - 165) * 0.08; br.push([xc - rnd() * 60 + 20, y]); } for (let i = 0; i < 25; i++) br.push([670 + rnd() * 50, 440 + rnd() * 70]);
  s += dots(br, 3) + dots([[540, 220], [610, 300], [560, 390], [650, 240]], 3);
  s += tag(560, 260, 'Amazon interior:', { size: 15 }) + tag(560, 279, 'sparse', { size: 15, fill: C.rust });
  s += `<path d="M640,395 l6,14 l15,1 l-12,9 l4,15 l-13,-8 l-13,8 l4,-15 l-12,-9 l15,-1 z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + tag(600, 450, 'Brasília (1960)', { size: 15, anchor: 'middle' });
  s += arrow(700, 460, 668, 420, { w: 3, dash: '7 5' }) + tag(590, 540, 'south-east: dense', { size: 15, fill: C.tealDark });
  s += para(485, 595, 'New capital Brasília was built partly to draw people and development inland.', 365, { size: 16 }).svg;
  s += t(450, 695, 'Both schematic, not to scale', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('04-egypt-brazil',
    svg(900, 715, 'Two contrasts for global-scale answers', s),
    'Two schematic diagrams. Egypt: dots crowd the Nile valley and delta, while the desert on either side is almost empty. Brazil: dots line the Atlantic coast, especially the south-east, while the Amazon interior is sparse; a star marks Brasília, the capital inaugurated in 1960 partly to draw people inland.',
    'Water controls Egypt’s pattern; Brazil built a capital to change its pattern.',
    '## Case study material');
}

// 05 Worked example: three districts
{
  const D = [['Riverside', 1560000, 1300, '1,200', C.tealDark], ['Hill Country', 210000, 7000, '30', C.teal], ['Dry Plateau', 48000, 16000, '3', C.sand]];
  const W = 640, x0 = 200;
  let s = panel(30, 110, 840, 250) + t(55, 168, 'Share of', { size: 17, weight: 700 }) + t(55, 190, 'LAND', { size: 17, weight: 700, fill: C.olive });
  let x = x0; D.forEach(([n, p, a, d, col]) => { const w = (a / 24300) * W; s += `<rect x="${x}" y="150" width="${w}" height="44" fill="${col}" stroke="${C.ink}" stroke-width="2"/>`; x += w; });
  s += t(55, 268, 'Share of', { size: 17, weight: 700 }) + t(55, 290, 'PEOPLE', { size: 17, weight: 700, fill: C.tealDark });
  x = x0; D.forEach(([n, p, a, d, col]) => { const w = (p / 1818000) * W; s += `<rect x="${x}" y="250" width="${w}" height="44" fill="${col}" stroke="${C.ink}" stroke-width="2"/>`; x += w; });
  s += tag(x0 + 2, 140, 'Riverside ≈ 5%', { size: 15, fill: C.tealDark, bg: C.panel, op: 1 }) + t(x0 + 330, 316, 'Riverside ≈ 86% of the people', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += t(x0 + W - 4, 216, 'Dry Plateau: most of the land', { size: 15, anchor: 'end', fill: C.olive, weight: 600 });
  s += t(450, 345, 'Key:  dark teal = Riverside · light teal = Hill Country · sand = Dry Plateau', { size: 14.5, anchor: 'middle', fill: C.muted });
  s += t(450, 400, 'Density = population ÷ area (people per km²)', { size: 19, weight: 700, anchor: 'middle' });
  D.forEach(([n, p, a, d, col], i) => { const xx = 30 + i * 213; s += rrect(xx, 420, 201, 120, '#ffffff', C.panelEdge, 2.5, 12) + `<rect x="${xx}" y="420" width="201" height="10" rx="5" fill="${col}"/>` + t(xx + 100, 458, n, { size: 17, weight: 700, anchor: 'middle' }) + t(xx + 100, 500, d, { size: 28, weight: 700, anchor: 'middle' }) + t(xx + 100, 526, `${p.toLocaleString('en-GB')} ÷ ${a.toLocaleString('en-GB')}`, { size: 14, anchor: 'middle', fill: C.muted }); });
  s += rrect(669, 420, 201, 120, C.cream, C.olive, 2.5, 12) + t(769, 458, 'Whole region', { size: 17, weight: 700, anchor: 'middle' }) + t(769, 500, '≈ 75', { size: 28, weight: 700, anchor: 'middle' }) + t(769, 526, 'describes no district well', { size: 14, anchor: 'middle', fill: C.rust, weight: 600 });
  add('05-district-densities',
    svg(900, 565, 'Worked example: averages hide the pattern', s, 'Illustrative data for three districts of one region'),
    'Two stacked bars compare shares of land and people. Riverside has about 5 per cent of the land but about 86 per cent of the people; the Dry Plateau has most of the land but few people. Densities: Riverside 1,200, Hill Country 30 and Dry Plateau 3 people per square kilometre, while the regional average of about 75 describes none of them well.',
    'A regional average of 75 hides densities of 1,200, 30 and 3.',
    '## Worked example: density and description');
}
