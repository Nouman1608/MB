import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-geography-rivers';
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

// 01 How a river changes downstream
{
  let s = panel(30, 110, 840, 230) + `<rect x="45" y="125" width="810" height="200" rx="10" fill="${C.tealLight}"/>`;
  s += `<path d="M60,150 Q200,290 450,300 Q650,306 780,312 L780,325 L60,325 Z" fill="${C.rock}"/>` + `<rect x="780" y="300" width="75" height="25" fill="${C.teal}"/>` + path('M60,150 Q200,290 450,300 Q650,306 780,312', { stroke: C.blue, w: 5 });
  s += t(70, 145, 'source', { size: 16, weight: 700 }) + t(840, 292, 'mouth', { size: 16, weight: 700, anchor: 'end' }) + t(150, 315, 'upper course', { size: 15, anchor: 'middle', fill: C.muted }) + t(420, 290, 'middle course', { size: 15, anchor: 'middle', fill: C.muted }) + t(680, 296, 'lower course', { size: 15, anchor: 'middle', fill: C.muted });
  s += tag(450, 175, 'long profile: gradient decreases downstream', { size: 16, anchor: 'middle', fill: C.ink, bg: C.tealLight, op: 1 });
  const xs = [[60, 26, 22, 'large, angular'], [330, 60, 38, 'smaller'], [600, 105, 52, 'small, rounded']];
  xs.forEach(([x, hw, d, lab], i) => {
    const cx = x + 120;
    s += panel(x, 360, 240, 170) + `<path d="M${x + 15},390 L${cx - hw - 20},390 L${cx - hw},392 Q${cx},${392 + d * 2} ${cx + hw},392 L${cx + hw + 20},390 L${x + 225},390 L${x + 225},460 L${x + 15},460 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<path d="M${cx - hw},392 Q${cx},${392 + d * 2} ${cx + hw},392 Z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>`;
    if (i === 0) s += `<path d="M${x + 60},485 l16,-8 l12,10 l-6,14 l-18,2 z M${x + 100},482 l20,-4 l6,14 l-14,10 l-14,-6 z M${x + 145},486 l14,-6 l10,12 l-12,10 l-12,-4 z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.6"/>`;
    if (i === 1) s += [70, 100, 130, 160].map((a) => `<ellipse cx="${x + a}" cy="490" rx="10" ry="8" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.6"/>`).join('');
    if (i === 2) s += [60, 80, 100, 120, 140, 160, 180].map((a) => circ(x + a, 490, 5, C.rockDark, C.ink, 1.4)).join('');
    s += t(cx, 520, 'load: ' + lab, { size: 14.5, anchor: 'middle', fill: C.muted });
  });
  s += arrow(305, 445, 325, 445, { w: 3 }) + arrow(575, 445, 595, 445, { w: 3 });
  const ch = [['Width', '↑'], ['Depth', '↑'], ['Discharge', '↑'], ['Velocity', '↑ usually'], ['Gradient', '↓'], ['Load size', '↓ and rounder']];
  ch.forEach(([a, b], i) => { const x = 30 + (i % 3) * 283, y = 550 + Math.floor(i / 3) * 62; s += rrect(x, y, 272, 52, b.startsWith('↑') ? C.tealLight : C.cream, b.startsWith('↑') ? C.tealDark : C.olive, 2, 26) + t(x + 22, y + 33, a, { size: 17, weight: 700 }) + t(x + 252, y + 33, b, { size: 17, weight: 700, anchor: 'end', fill: b.startsWith('↑') ? C.tealDark : C.olive }); });
  s += panel(30, 684, 840, 70, C.cream, C.olive) + t(450, 714, 'Why velocity usually rises: a wider, deeper, smoother channel', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 738, 'loses less energy to friction, even though the gradient is gentler.', { size: 16, anchor: 'middle' });
  add('01-downstream-changes',
    svg(900, 775, 'How a river changes from source to mouth', s, 'Schematic, not to scale'),
    'A long profile falls steeply near the source and gently towards the mouth. Three channel cross-sections get wider and deeper downstream while the load changes from large angular pieces to small rounded ones. Chips show width, depth, discharge and usually velocity increasing, and gradient and load size decreasing. A note explains that velocity rises because the larger, smoother channel loses less energy to friction.',
    'Downstream: bigger, deeper, usually faster, gentler, with finer load.',
    '## River characteristics downstream');
}

// 02 Waterfall and gorge
{
  const st = (x0, k) => {
    const edge = x0 + (k === 2 ? 120 : 170), under = k === 0 ? 0 : 34, pool = k === 0 ? 14 : 26;
    let s = panel(x0, 110, 270, 400) + `<rect x="${x0 + 12}" y="125" width="246" height="300" rx="8" fill="${C.tealLight}"/>`;
    s += `<path d="M${x0 + 12},245 L${edge - under},245 L${edge - under},330 L${x0 + 258},330 L${x0 + 258},425 L${x0 + 12},425 Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<rect x="${x0 + 12}" y="205" width="${edge - x0 - 12}" height="40" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<rect x="${x0 + 12}" y="196" width="${edge - x0 - 12}" height="9" fill="${C.teal}"/>` + path(`M${edge},200 Q${edge + 14},210 ${edge + 16},330`, { stroke: C.blue, w: 6 });
    s += `<path d="M${edge - under - 6},330 Q${edge + 16},${330 + pool * 2} ${edge + 46},330 Z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>` + `<rect x="${edge + 46}" y="322" width="${x0 + 258 - edge - 46}" height="8" fill="${C.teal}"/>`;
    if (k === 2) s += `<rect x="${x0 + 170 - 50}" y="205" width="50" height="40" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>` + `<path d="M${x0 + 150},336 l14,-10 l14,8 l-4,12 z M${x0 + 182},338 l10,-12 l14,6 l-4,10 z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.6"/>` + arrow(x0 + 170, 185, x0 + 128, 185, { w: 3, color: C.rust, marker: 'ahR' });
    if (k === 1) s += tag(edge - 4, 268, 'overhang', { size: 14, anchor: 'end', bg: C.tealLight, op: 1 });
    s += tag(x0 + 20, 228, 'hard rock', { size: 13.5, fill: '#ffffff', bg: C.rockDark, op: 1 }) + tag(x0 + 20, 290, 'soft rock', { size: 13.5, bg: C.sand, op: 1 });
    return s;
  };
  let s = st(30, 0) + st(315, 1) + st(600, 2);
  const cap = [['1', 'Hard rock over soft', 'Soft rock erodes faster; a plunge pool forms by hydraulic action and abrasion.'], ['2', 'Undercutting', 'The soft rock is undercut, leaving an overhang of hard rock; the pool deepens.'], ['3', 'Collapse and retreat', 'The overhang collapses; the waterfall retreats upstream, leaving a steep-sided gorge.']];
  cap.forEach(([n, h, d], i) => { const x = 30 + i * 285; s += badge(x + 30, 150, 16, n, i === 2 ? C.mustard : C.cream) + t(x + 54, 157, h, { size: 17, weight: 700 }) + tl(x + 18, 446, wrap(d, 236, 15), { size: 15 }, 19); });
  s += tag(828, 180, 'retreat', { size: 14, anchor: 'end', fill: C.rust, bg: C.tealLight, op: 1 });
  add('02-waterfall-gorge',
    svg(900, 530, 'How a waterfall and gorge form', s, 'Schematic side views, not to scale'),
    'Three side views. 1: a band of hard rock lies over softer rock; the soft rock erodes faster and a plunge pool forms. 2: the soft rock is undercut, leaving an overhang of hard rock, and the plunge pool deepens. 3: the overhang collapses into the pool and the waterfall retreats upstream, leaving a steep-sided gorge; the old position is dashed.',
    'Undercut, overhang, collapse, retreat: repeated, it cuts a gorge.',
    '## How the landforms form');
}

// 03 Meander and levée cross-sections
{
  let s = panel(30, 110, 840, 300) + t(55, 148, 'Across a meander bend (A–B)', { size: 20, weight: 700 });
  s += `<rect x="690" y="125" width="160" height="120" rx="8" fill="#d8e3c6"/>` + path('M700,140 Q770,140 780,190 Q790,235 840,235', { stroke: C.blue, w: 12 }) + line(735, 205, 810, 160, { w: 2, dash: '5 4' }) + t(728, 222, 'A', { size: 15, weight: 700 }) + t(815, 156, 'B', { size: 15, weight: 700 }) + t(770, 262, 'plan view', { size: 13.5, anchor: 'middle', fill: C.muted, italic: true });
  const G = 200;
  s += `<path d="M60,${G} L170,${G} L180,${G + 150} Q260,${G + 160} 340,${G + 110} Q450,${G + 50} 560,${G + 10} L640,${G} L640,${G + 185} L60,${G + 185} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  s += `<path d="M180,${G + 22} L180,${G + 150} Q260,${G + 160} 340,${G + 110} Q420,${G + 60} 480,${G + 22} Z" fill="${C.teal}"/>` + line(180, G + 22, 480, G + 22, { color: C.tealDark, w: 2.5 });
  s += `<path d="M340,${G + 110} Q450,${G + 50} 560,${G + 10} L480,${G + 22} Q420,${G + 60} 340,${G + 110} Z" fill="${C.sand}"/>`;
  s += arrow(250, G + 70, 195, G + 70, { w: 5, color: C.rust, marker: 'ahR' }) + tag(212, G + 102, 'fastest, deepest', { size: 14, fill: C.rust, bg: C.teal, op: 1 });
  s += t(80, G - 12, 'A', { size: 16, weight: 700 }) + t(625, G - 12, 'B', { size: 16, weight: 700 });
  s += tag(70, G + 40, 'river cliff:', { size: 15, fill: C.rust, bg: C.rock, op: 1 }) + tag(70, G + 59, 'erosion', { size: 15, weight: 400, bg: C.rock, op: 1 });
  s += tag(500, G + 70, 'slip-off slope:', { size: 15, fill: C.olive, bg: C.rock, op: 1 }) + tag(500, G + 89, 'deposition', { size: 15, weight: 400, bg: C.rock, op: 1 });
  s += panel(30, 426, 840, 330) + t(55, 464, 'Flood plain and levées', { size: 20, weight: 700 });
  const L = 640;
  s += line(60, L - 90, 840, L - 90, { w: 2.5, color: C.blue, dash: '10 7' }) + t(835, L - 100, 'flood water spreads out', { size: 15, anchor: 'end', fill: C.blue, weight: 600 });
  s += `<rect x="60" y="${L}" width="780" height="70" fill="${C.rock}"/>`;
  s += `<path d="M60,${L} L330,${L - 6} Q370,${L - 12} 390,${L - 40} L400,${L - 40} L405,${L + 40} L495,${L + 40} L500,${L - 40} L510,${L - 40} Q530,${L - 12} 570,${L - 6} L840,${L} L840,${L + 4} L60,${L + 4} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>`;
  s += `<path d="M300,${L - 2} Q360,${L - 8} 390,${L - 40} L400,${L - 40} L400,${L} Z M600,${L - 2} Q540,${L - 8} 510,${L - 40} L500,${L - 40} L500,${L} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.5"/>`;
  s += `<rect x="405" y="${L - 30}" width="90" height="70" fill="${C.teal}"/>`;
  s += tag(395, L - 66, 'levée', { size: 15, anchor: 'end', bg: C.panel, op: 1 }) + tag(505, L - 66, 'levée', { size: 15, bg: C.panel, op: 1 });
  s += tag(80, L + 34, 'fine silt (alluvium) carried further', { size: 14.5, bg: C.rock, op: 1 }) + tag(820, L + 34, 'flat flood plain', { size: 14.5, anchor: 'end', bg: C.rock, op: 1 });
  s += para(55, 495, 'Water leaving the channel loses energy at once: the coarsest material drops on the banks, finer silt further away. Repeated floods build levées.', 790, { size: 16 }).svg;
  add('03-meander-levee-sections',
    svg(900, 775, 'Two cross-sections to learn', s, 'Schematic, not to scale'),
    'Top: a cross-section from A to B across a meander bend. The deepest, fastest water is against the outer bank, forming a steep river cliff by erosion; the inner bank is a gentle slip-off slope of deposited material. Bottom: a flood plain cross-section. Flood water spreads out and drops the coarsest material on the banks, building levées, and carries fine silt further across the flat flood plain.',
    'Erosion on the outside, deposition inside; coarse load on the banks, fine silt beyond.',
    '## How the landforms form');
}

// 04 Managing flooding
{
  let s = panel(30, 110, 840, 440) + `<rect x="45" y="125" width="810" height="410" rx="10" fill="#d8e3c6"/>`;
  s += path('M60,170 Q160,180 220,230 Q300,300 420,320 Q560,340 640,420 Q700,480 850,500', { stroke: C.blue, w: 12 });
  s += `<ellipse cx="200" cy="215" rx="60" ry="32" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>` + `<rect x="246" y="222" width="14" height="44" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2" transform="rotate(-35 253 244)"/>`;
  [[80, 300], [110, 330], [140, 300], [90, 360], [130, 380], [60, 250]].forEach(([x, y]) => { s += tree(x, y, 0.7); });
  s += path('M440,322 Q520,250 640,300 Q690,330 660,425', { stroke: C.blue, w: 6, extra: 'stroke-dasharray="12 6"' });
  [[470, 380], [505, 395], [540, 410], [490, 430]].forEach(([x, y]) => { s += house(x, y, 0.75); });
  s += path('M455,360 Q540,380 600,420', { stroke: C.ink, w: 6 });
  s += `<ellipse cx="760" cy="420" rx="60" ry="26" fill="${C.teal}" opacity="0.6" stroke="${C.tealDark}" stroke-width="2" stroke-dasharray="6 4"/>`;
  [[720, 300], [760, 280], [800, 305]].forEach(([x, y]) => { s += house(x, y, 0.75); });
  s += `<rect x="300" y="420" width="40" height="30" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/><path d="M305,425 L335,425 L320,447 Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>` + line(320, 450, 320, 470, { w: 3 });
  const lab = (x, y, a, b, col) => tag(x, y, a, { size: 15.5, fill: col }) + tag(x, y + 19, b, { size: 13.5, weight: 400 });
  s += lab(255, 150, 'Dam and reservoir', 'stores water, releases it slowly', C.rust);
  s += lab(55, 470, 'Afforestation', 'more interception, slower runoff', C.tealDark);
  s += lab(520, 220, 'Flood relief channel', 'diverts excess water', C.rust);
  s += lab(560, 470, 'Embankments', 'more channel capacity', C.rust);
  s += lab(660, 485, 'Wetland restored', 'stores floodwater', C.tealDark);
  s += lab(640, 240, 'Zoning', 'homes on higher, safer land', C.tealDark);
  s += lab(260, 500, 'Warning systems', 'and flood shelters', C.tealDark);
  s += card(30, 570, 410, 130, 'Hard engineering', 'Dams, embankments, straightening and dredging, relief channels: expensive; can move the problem downstream.', { fill: '#f6e6dc', edge: C.rust, ts: 18.5, bs: 15.5, tfill: C.rust });
  s += card(460, 570, 410, 130, 'Soft and other measures', 'Afforestation, zoning, wetlands, warnings: cheaper, more sustainable, less protection from the largest floods.', { fill: C.tealLight, edge: C.tealDark, ts: 18.5, bs: 15.5, tfill: C.tealDark });
  add('04-flood-management',
    svg(900, 720, 'Managing river flooding', s, 'Schematic plan of a valley, not to scale'),
    'A schematic valley plan. Hard engineering (rust labels): a dam and reservoir upstream, a flood relief channel around a town and embankments along the river. Soft measures (teal labels): afforestation of slopes, a restored wetland, zoning that keeps homes on higher land, and warning systems. Below, hard engineering is expensive and can move the problem downstream; soft measures are cheaper and more sustainable but protect less against the largest floods.',
    'Hard engineering controls the river; soft measures work with it.',
    '## Managing river flooding');
}

// 05 Case study: the Nile and the Aswan High Dam
{
  const G = 360;
  let s = panel(30, 110, 840, 330) + `<rect x="45" y="125" width="810" height="${G - 125}" rx="10" fill="${C.cream}"/>` + sun(90, 170, 18);
  s += `<path d="M45,${G} L45,250 L330,250 L330,${G} Z" fill="${C.teal}"/>` + `<rect x="330" y="215" width="34" height="${G - 215}" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<rect x="45" y="${G}" width="810" height="60" fill="${C.sand}"/>` + `<path d="M364,${G - 18} L760,${G - 18} L780,${G - 10} L855,${G - 10} L855,${G} L364,${G} Z" fill="${C.teal}"/>`;
  for (let i = 0; i < 12; i++) s += circ(120 + i * 18, G - 12 - (i % 3) * 8, 3.5, C.rockDark, C.ink, 1);
  [[430, G - 18], [470, G - 18], [520, G - 18], [570, G - 18], [620, G - 18], [670, G - 18]].forEach(([x, y]) => { s += path(`M${x},${y} l-5,-20 M${x},${y} l0,-24 M${x},${y} l5,-20`, { stroke: C.grass, w: 2.4 }); });
  s += line(364, 230, 420, 190, { w: 2.5 }) + path('M420,190 l8,-12 l-2,10 l8,-2 l-10,14', { stroke: C.mustard, w: 3 });
  s += tag(60, 275, 'Lake Nasser', { size: 16, fill: C.tealDark, bg: C.teal, op: 1 }) + tag(60, 335, 'silt trapped', { size: 14.5, fill: C.rockDark, bg: C.teal, op: 1 });
  s += tag(347, 205, 'Aswan High Dam (1970)', { size: 15.5, anchor: 'middle' });
  s += tag(430, 180, 'hydro-electric power', { size: 14.5 });
  s += tag(550, 300, 'year-round irrigation', { size: 15.5, fill: C.grass, anchor: 'middle' });
  s += tag(845, 320, 'delta coast no longer', { size: 14.5, anchor: 'end', fill: C.rust }) + tag(845, 339, 'replenished with silt', { size: 14.5, anchor: 'end', fill: C.rust, weight: 400 });
  s += t(60, 405, 'south (upstream)', { size: 14.5, fill: C.muted }) + t(845, 405, 'north (to the delta and sea)', { size: 14.5, fill: C.muted, anchor: 'end' });
  s += card(30, 460, 270, 176, 'Opportunities', 'Water for irrigation in a desert; fertile alluvium on the flood plain and delta; transport and tourism.', { ts: 18.5, bs: 15.5, fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark });
  s += card(315, 460, 270, 176, 'Hazard before the dam', 'The annual flood was unreliable: too high in some years (crops and homes destroyed), too low in others.', { ts: 18.5, bs: 15.5, fill: '#f6e6dc', edge: C.rust, tfill: C.rust });
  s += card(600, 460, 270, 176, 'Evaluation', 'Flood controlled and power generated, but silt is trapped: farmers rely on artificial fertiliser.', { ts: 18.5, bs: 15.5, fill: C.cream, edge: C.olive });
  add('05-nile-aswan',
    svg(900, 660, 'Case study: the River Nile and the Aswan High Dam', s, 'Schematic side view, not to scale'),
    'A schematic side view from south to north. Lake Nasser lies behind the Aswan High Dam, completed in 1970, where silt is trapped. The dam generates hydro-electric power and releases water for year-round irrigation downstream, but the delta coast is no longer replenished with silt. Below: opportunities of irrigation, fertile soils, transport and tourism; the unreliable flood before the dam; and an evaluation noting farmers now rely on artificial fertiliser.',
    'The dam tamed the flood, but trapped the silt that fed the land.',
    '## Worked example 2: case-study plan');
}
