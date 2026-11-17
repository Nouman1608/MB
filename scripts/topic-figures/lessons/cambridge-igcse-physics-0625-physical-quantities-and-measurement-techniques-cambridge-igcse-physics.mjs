import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- local helpers (physics) ----
const W = (x1, y1, x2, y2, c = C.ink, w = 3) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
const poly = (pts, c = C.ink, w = 3, fill = 'none') => `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="${fill}" stroke="${c}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"/>`;
const rect = (x, y, w, h, fill = C.panel, edge = C.ink, sw = 3, rx = 0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const circ = (cx, cy, r, fill = C.panel, edge = C.ink, sw = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const dot = (x, y, r = 5, c = C.ink) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const rot = (x, y, deg, s) => (deg ? `<g transform="rotate(${deg} ${x} ${y})">${s}</g>` : s);
// wrap text to lines of max n chars
const wrap = (s, n) => { const L = []; let cur = ''; for (const w of s.split(' ')) { if ((cur + ' ' + w).trim().length > n) { L.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); } if (cur) L.push(cur); return L; };
// boxed note: cream or teal
const note = (x, y, w, h, lines, { fill = C.cream, edge = C.olive, size = 18, weight = 600, color = C.ink, lh = 25, anchor = 'middle' } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` +
  tl(anchor === 'middle' ? x + w / 2 : x + 18, y + h / 2 - ((lines.length - 1) * lh) / 2 + size * 0.35, lines, { size, weight, fill: color, anchor }, lh);
// calculation box: title + lines (monospace-free, Inter)
const calc = (x, y, w, title, lines, { lh = 30, size = 19, fill = C.tealLight, edge = C.tealDark } = {}) => {
  const h = 58 + lines.length * lh;
  return { h, s: `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + t(x + 20, y + 36, title, { size: 20, weight: 700, fill: C.tealDark }) +
    lines.map((l, i) => { const s0 = typeof l === 'string' ? l : l[0]; const ind = s0.length - s0.trimStart().length; return typeof l === 'string' ? t(x + 20 + ind * 10, y + 70 + i * lh, s0.trim(), { size }) : t(x + 20 + ind * 10, y + 70 + i * lh, s0.trim(), { size, weight: l[1] || 700, fill: l[2] || C.ink }); }).join('') };
};

// ---- circuit symbols: centred at (x,y), horizontal span 2*hw, rotate 90 for vertical ----
// each returns svg incl. its own short leads to x-hw..x+hw. Default hw = 35.
const cs = {
  cell: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 5, y) + W(x + 7, y, x + hw, y) + W(x - 5, y - 24, x - 5, y + 24, C.ink, 3) + W(x + 7, y - 12, x + 7, y + 12, C.ink, 7)),
  battery: (x, y, deg = 0, hw = 50) => rot(x, y, deg, W(x - hw, y, x - 22, y) + W(x + 24, y, x + hw, y) + W(x - 22, y - 24, x - 22, y + 24) + W(x - 10, y - 12, x - 10, y + 12, C.ink, 7) + W(x + 12, y - 24, x + 12, y + 24) + W(x + 24, y - 12, x + 24, y + 12, C.ink, 7) + W(x - 10, y, x + 12, y, C.ink, 2.5).replace('/>', ' stroke-dasharray="3 4"/>')),
  resistor: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 26, y) + W(x + 26, y, x + hw, y) + rect(x - 26, y - 11, 52, 22)),
  varres: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 26, y) + W(x + 26, y, x + hw, y) + rect(x - 26, y - 11, 52, 22) + arrow(x - 26, y + 24, x + 26, y - 26, { w: 2.5 })),
  thermistor: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 26, y) + W(x + 26, y, x + hw, y) + rect(x - 26, y - 11, 52, 22) + poly([[x - 38, y + 22], [x - 24, y + 22], [x + 26, y - 24]], C.ink, 2.5)),
  ldr: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 26, y) + W(x + 26, y, x + hw, y) + rect(x - 26, y - 11, 52, 22) + arrow(x - 30, y - 46, x - 10, y - 18, { w: 2.5 }) + arrow(x - 6, y - 46, x + 14, y - 18, { w: 2.5 })),
  fuse: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 26, y) + W(x + 26, y, x + hw, y) + rect(x - 26, y - 10, 52, 20) + W(x - 26, y, x + 26, y, C.ink, 2.5)),
  heater: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 30, y) + W(x + 30, y, x + hw, y) + rect(x - 30, y - 11, 60, 22) + [-15, 0, 15].map((d) => W(x + d, y - 11, x + d, y + 11, C.ink, 2.5)).join('')),
  lamp: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 18, y) + W(x + 18, y, x + hw, y)) + circ(x, y, 18) + W(x - 12.7, y - 12.7, x + 12.7, y + 12.7, C.ink, 2.5) + W(x - 12.7, y + 12.7, x + 12.7, y - 12.7, C.ink, 2.5),
  meter: (x, y, letter, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 19, y) + W(x + 19, y, x + hw, y)) + circ(x, y, 19) + t(x, y + 7, letter, { size: 20, weight: 700, anchor: 'middle' }),
  ammeter: (x, y, deg = 0, hw = 35) => cs.meter(x, y, 'A', deg, hw),
  voltmeter: (x, y, deg = 0, hw = 35) => cs.meter(x, y, 'V', deg, hw),
  motor: (x, y, deg = 0, hw = 35) => cs.meter(x, y, 'M', deg, hw),
  gen: (x, y, deg = 0, hw = 35) => cs.meter(x, y, 'G', deg, hw),
  ac: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 19, y) + W(x + 19, y, x + hw, y)) + circ(x, y, 19) + path(`M${x - 10},${y} q5,-10 10,0 q5,10 10,0`, { w: 2.5 }),
  switchOpen: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 20, y) + W(x + 20, y, x + hw, y) + circ(x - 20, y, 4, C.panel, C.ink, 2.5) + circ(x + 20, y, 4, C.panel, C.ink, 2.5) + W(x - 17, y - 3, x + 18, y - 22)),
  switchClosed: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 20, y) + W(x + 20, y, x + hw, y) + circ(x - 20, y, 4, C.panel, C.ink, 2.5) + circ(x + 20, y, 4, C.panel, C.ink, 2.5) + W(x - 17, y - 2, x + 17, y - 2)),
  diode: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x + hw, y) + `<path d="M${x - 13},${y - 15} L${x + 13},${y} L${x - 13},${y + 15} Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + W(x + 13, y - 15, x + 13, y + 15)),
  led: (x, y, deg = 0, hw = 35) => rot(x, y, deg, cs.diode(x, y, 0, hw) + arrow(x + 2, y - 20, x + 18, y - 40, { w: 2.5 }) + arrow(x + 14, y - 16, x + 30, y - 36, { w: 2.5 })),
  earth: (x, y) => W(x, y, x, y + 16) + W(x - 18, y + 16, x + 18, y + 16) + W(x - 11, y + 24, x + 11, y + 24) + W(x - 5, y + 32, x + 5, y + 32),
};
// wire path through points (orthogonal)
const wire = (pts, c = C.ink, w = 3) => poly(pts, c, w);
// junction dot
const jn = (x, y) => dot(x, y, 6);

// ---- graph axes ----
// returns {s, X(v), Y(v)}; origin at (x0, y0) bottom-left; width w, height h; xmax, ymax; ticks arrays
const axes = (x0, y0, w, h, { xmax, ymax, xmin = 0, ymin = 0, xt = [], yt = [], xl = '', yl = '', grid = true, size = 16, xfmt = (v) => v, yfmt = (v) => v } = {}) => {
  const X = (v) => x0 + ((v - xmin) / (xmax - xmin)) * w, Y = (v) => y0 - ((v - ymin) / (ymax - ymin)) * h;
  let s = '';
  if (grid) { s += xt.map((v) => W(X(v), y0, X(v), y0 - h, '#dde5e3', 1.5)).join('') + yt.map((v) => W(x0, Y(v), x0 + w, Y(v), '#dde5e3', 1.5)).join(''); }
  const yz = ymin < 0 ? Y(0) : y0;
  s += arrow(x0, y0 + (ymin < 0 ? 0 : 0), x0, y0 - h - 22, { w: 2.5 }) + arrow(x0, yz, x0 + w + 22, yz, { w: 2.5 });
  s += xt.map((v) => W(X(v), yz, X(v), yz + 7, C.ink, 2) + t(X(v), yz + 27, xfmt(v), { size, anchor: 'middle', fill: C.muted })).join('');
  s += yt.map((v) => W(x0 - 7, Y(v), x0, Y(v), C.ink, 2) + t(x0 - 12, Y(v) + 6, yfmt(v), { size, anchor: 'end', fill: C.muted })).join('');
  if (xl) s += t(x0 + w / 2, yz + 58, xl, { size: 18, anchor: 'middle', weight: 600 });
  if (yl) s += `<text x="${x0 - 62}" y="${y0 - h / 2}" font-size="18" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x0 - 62} ${y0 - h / 2})">${yl}</text>`;
  return { s, X, Y };
};
// sine wave path from x1 to x2 about y0, amplitude a, wavelength lam, phase
const sine = (x1, x2, y0, a, lam, ph = 0, step = 3) => { let d = ''; for (let x = x1; x <= x2 + 0.01; x += step) d += (d ? 'L' : 'M') + x.toFixed(1) + ',' + (y0 - a * Math.sin(((x - x1) / lam) * 2 * Math.PI + ph)).toFixed(1); return d; };
// double-headed dimension arrow with label
const dim = (x1, y1, x2, y2, label, { color = C.ink, lx, ly, size = 17, anchor = 'middle', weight = 700 } = {}) => {
  const mk = color === C.tealDark ? 'ahT' : color === C.rust ? 'ahR' : color === C.olive ? 'ahO' : 'ah';
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="2.5" marker-start="url(#${mk})" marker-end="url(#${mk})"/>` + (label ? t(lx ?? (x1 + x2) / 2, ly ?? (y1 + y2) / 2 - 8, label, { size, anchor, weight, fill: color }) : '');
};
// header strip inside a panel
const head = (x, y, w, s, fill = C.teal) => `<rect x="${x}" y="${y}" width="${w}" height="44" rx="12" fill="${fill}"/><rect x="${x}" y="${y + 30}" width="${w}" height="14" fill="${fill}"/>` + t(x + w / 2, y + 30, s, { size: 20, weight: 700, anchor: 'middle' });

// place a symbol on an existing wire: masks the wire under its span first (bg = panel colour)
const put = (sym, x, y, deg = 0, hw = 35, bg = C.panel) => (deg % 180 ? W(x, y - hw + 2, x, y + hw - 2, bg, 9) : W(x - hw + 2, y, x + hw - 2, y, bg, 9)).replace('stroke-linecap="round"', 'stroke-linecap="butt"') + cs[sym](x, y, deg, hw);
// current-direction arrowhead on a wire
const cur = (x, y, dir = 'r', c = C.rust, s = 9) => { const d = { r: [[s, 0], [-s, -s * 0.8], [-s, s * 0.8]], l: [[-s, 0], [s, -s * 0.8], [s, s * 0.8]], u: [[0, -s], [-s * 0.8, s], [s * 0.8, s]], d: [[0, s], [-s * 0.8, -s], [s * 0.8, -s]] }[dir]; return `<path d="M${x + d[0][0]},${y + d[0][1]} L${x + d[1][0]},${y + d[1][1]} L${x + d[2][0]},${y + d[2][1]} Z" fill="${c}"/>`; };
const ext = (x, y, s = 'Extended only') => `<rect x="${x}" y="${y}" width="${s.length * 9.6 + 24}" height="30" rx="15" fill="${C.olive}"/>` + t(x + 12, y + 21, s, { size: 16, weight: 700, fill: '#ffffff' });
const rays = (x, y, r1 = 26, r2 = 40, c = C.mustard) => [0, 45, 90, 135, 180, 225, 270, 315].map((a) => { const q = (a * Math.PI) / 180; return W(x + r1 * Math.cos(q), y + r1 * Math.sin(q), x + r2 * Math.cos(q), y + r2 * Math.sin(q), c, 4); }).join('');

export const slug = 'cambridge-igcse-physics-0625-physical-quantities-and-measurement-techniques-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const ruler = (x, y, w, cmPx, from = 0, to = 10) => { let s = rect(x, y, w, 40, C.cream, C.ink, 2.5, 3); for (let c = from; c <= to + 0.001; c += 0.1) { const xx = x + 10 + (c - from) * cmPx; const big = Math.abs(c - Math.round(c)) < 0.01; const half = Math.abs(c * 10 % 10 - 5) < 0.01; s += W(xx, y, xx, y + (big ? 18 : half ? 12 : 7), C.ink, big ? 2 : 1.2); if (big) s += t(xx, y + 34, String(Math.round(c)), { size: 15, anchor: 'middle' }); } return s; };
const eye = (x, y, dir = 1) => `<path d="M${x - 18 * dir},${y} q${18 * dir},-14 ${36 * dir},0 q${-18 * dir},14 ${-36 * dir},0 z" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + dot(x, y, 4);

// 01 Using a ruler
{
  const cm = 60;
  let s = ruler(60, 260, 400, cm, 0, 6.3);
  s += rect(70 + 1.0 * cm, 210, 3.4 * cm, 50, C.tealLight, C.tealDark, 2.5, 3) + t(70 + 2.7 * cm, 242, 'object', { size: 16, anchor: 'middle', weight: 600 });
  s += W(70 + 1.0 * cm, 200, 70 + 1.0 * cm, 262, C.rust, 1.5) + W(70 + 4.4 * cm, 200, 70 + 4.4 * cm, 262, C.rust, 1.5);
  s += t(260, 340, 'start at 1.0 cm, end at 4.4 cm', { size: 16, anchor: 'middle' }) + t(260, 364, 'length = 4.4 − 1.0 = 3.4 cm', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  s += t(260, 170, 'worn zero end? start at another mark and subtract', { size: 15, anchor: 'middle', fill: C.muted });
  // parallax
  let p = ruler(500, 300, 340, 60, 0, 5.3) + rect(510 + 60 * 2.0, 270, 4, 30, C.rust, C.rust, 1);
  p += eye(630, 200) + arrow(630, 214, 630, 266, { w: 2.5, color: C.tealDark, marker: 'ahT' }) + t(652, 205, 'straight down: correct', { size: 15, weight: 700, fill: C.tealDark });
  p += eye(525, 250) + arrow(540, 258, 612, 270, { w: 2.5, color: C.rust, marker: 'ahR', dash: '6 5' }) + t(500, 228, 'parallax error', { size: 15, weight: 700, fill: C.rust });
  // ball between blocks
  let b = ruler(500, 470, 340, 60, 0, 5.3) + rect(510 + 60 * 1.0 - 28, 395, 28, 75, C.rock, C.ink, 2.5) + rect(510 + 60 * 3.5, 395, 28, 75, C.rock, C.ink, 2.5) + circ(510 + 60 * 2.25, 433, 37, C.mustard, C.ink, 2.5) + t(670, 380, 'diameter of a ball: gap between two blocks', { size: 15, anchor: 'middle', fill: C.muted });
  add('01-using-a-ruler',
    svg(900, 600, 'Measuring a length with a ruler',
      panel(30, 110, 440, 460) + t(250, 145, 'Zero end', { size: 20, weight: 700, anchor: 'middle' }) + s +
      tl(60, 440, ['Read to the nearest millimetre:', 'write 23.4 cm or 234 mm.', 'For a curved path, lay a thread', 'along it, then straighten it', 'against the ruler.'], { size: 16 }, 23) +
      panel(480, 110, 390, 460) + t(675, 145, 'Parallax and awkward shapes', { size: 20, weight: 700, anchor: 'middle' }) + p + b),
    'An object is measured from the 1.0 cm mark to the 4.4 cm mark, giving 3.4 cm, as a way round a worn zero end. An eye looking straight down at the scale reads correctly while one looking from the side gives a parallax error. A ball\'s diameter is the gap between two blocks placed against it at right angles to the ruler.',
    'Subtract the start reading, look straight down, and use blocks for round objects.',
    '## Measuring a length with a ruler');
}

// 02 Reading a measuring cylinder
{
  const cyl = (x, y, w, h, lvl, marks, lbl) => { let s = rect(x, y, w, h, '#ffffff', C.ink, 3, 6); const ly = y + h - lvl * h; s += `<rect x="${x + 2}" y="${ly}" width="${w - 4}" height="${y + h - ly - 2}" fill="${C.teal}"/>` + path(`M${x + 2},${ly - 6} Q${x + w / 2},${ly + 8} ${x + w - 2},${ly - 6}`, { stroke: C.tealDark, w: 2.5 }); for (let i = 1; i < marks; i++) { const my = y + h - (i * h) / marks; s += W(x, my, x + (i % 2 ? 12 : 22), my, C.ink, 1.6); } return s + rect(x - 14, y + h, w + 28, 10, C.panel, C.ink, 3, 3) + t(x + w / 2, y + h + 40, lbl, { size: 16, anchor: 'middle', weight: 600 }); };
  add('02-meniscus-and-cylinder-choice',
    svg(900, 610, 'Reading a measuring cylinder',
      panel(30, 110, 410, 470) + cyl(110, 160, 90, 320, 0.55, 20, 'level bench') +
      eye(330, 160 + 320 - 0.55 * 320 + 2, -1) + W(205, 304, 310, 304, C.tealDark, 2).replace('stroke-linecap="round"', 'stroke-dasharray="6 5"') +
      t(330, 270, 'eye level with the', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark }) + t(330, 340, 'bottom of the meniscus', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark }) +
      panel(460, 110, 410, 470) + t(665, 145, 'Choose the smallest cylinder', { size: 19, weight: 700, anchor: 'middle' }) +
      cyl(520, 200, 60, 260, 0.72, 50, '') + cyl(720, 200, 100, 260, 0.072, 50, '') +
      t(550, 500, '25 cm³ cylinder', { size: 16, anchor: 'middle', weight: 700 }) + t(550, 522, 'marks every 0.5 cm³', { size: 15, anchor: 'middle', fill: C.muted }) +
      t(770, 500, '250 cm³ cylinder', { size: 16, anchor: 'middle', weight: 700 }) + t(770, 522, 'marks every 5 cm³', { size: 15, anchor: 'middle', fill: C.muted }) +
      t(665, 556, '18 cm³ is read more precisely on the left', { size: 16, anchor: 'middle', weight: 700, fill: C.rust })),
    'Left: a measuring cylinder on a level bench, read with the eye level with the bottom of the curved meniscus. Right: 18 cm³ of water in a 25 cm³ cylinder marked every 0.5 cm³ and in a 250 cm³ cylinder marked every 5 cm³; the smaller cylinder gives the more precise reading.',
    'Read the bottom of the meniscus at eye level, in the smallest suitable cylinder.',
    '## Measuring a volume with a measuring cylinder');
}

// 03 Measuring multiples
{
  const card = (x, title, art, l1, l2) => panel(x, 110, 270, 430) + t(x + 135, 148, title, { size: 19, weight: 700, anchor: 'middle' }) + art + t(x + 135, 470, l1, { size: 17, anchor: 'middle' }) + t(x + 135, 505, l2, { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  let coins = ''; for (let i = 0; i < 20; i++) coins += `<ellipse cx="135" cy="${400 - i * 10}" rx="50" ry="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`;
  coins = `<g transform="translate(-30,0)">${coins}</g>` + dim(175, 408, 175, 202, '') + t(185, 310, '37.0 mm', { size: 16, weight: 700 }) + t(105, 180, '20 coins', { size: 16, anchor: 'middle', fill: C.muted });
  let wire = rect(330, 300, 210, 24, C.sand, C.ink, 2.5, 4); for (let i = 0; i < 30; i++) wire += `<ellipse cx="${375 + i * 4}" cy="312" rx="2" ry="18" fill="none" stroke="${C.rust}" stroke-width="2"/>`;
  wire += dim(373, 360, 495, 360, '12.0 mm', { ly: 390 }) + t(435, 270, '30 touching turns', { size: 16, anchor: 'middle', fill: C.muted }) + t(435, 345, 'pencil', { size: 15, anchor: 'middle', fill: C.muted });
  let drip = rect(680, 190, 70, 26, C.rock, C.ink, 2.5, 4) + rect(705, 216, 20, 30, C.rock, C.ink, 2.5, 2);
  [270, 320, 370].forEach((y) => { drip += `<path d="M715,${y - 12} q8,12 0,18 q-8,-6 0,-18 z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>`; });
  drip += t(735, 410, 'count "zero", then 10 more', { size: 15, fill: C.muted, anchor: 'middle' });
  add('03-measuring-multiples',
    svg(900, 570, 'Measure many, then divide',
      card(30, 'Coin thickness', coins, '37.0 mm ÷ 20', '= 1.85 mm') + card(315, 'Wire diameter', wire, '12.0 mm ÷ 30', '= 0.40 mm') + card(600, 'Time between drips', drip, '6.5 s ÷ 10 intervals', '= 0.65 s')),
    'Three examples of measuring multiples. A stack of 20 coins is 37.0 mm tall, so one coin is 1.85 mm thick. Thirty touching turns of wire on a pencil span 12.0 mm, so the wire is 0.40 mm across. Timing from drip "zero" to the tenth drip gives 6.5 s for 10 intervals, or 0.65 s each.',
    'Dividing a multiple shares the measuring uncertainty between all the items.',
    '## Measuring multiples');
}

// 04 Pendulum period
{
  const px = 300, py = 150, L = 300, A = (20 * Math.PI) / 180;
  const pos = (a) => [px + L * Math.sin(a), py + L * Math.cos(a)];
  let s = W(200, py, 400, py, C.ink, 5) + W(px, py, px, py + L + 60, C.muted, 2).replace('stroke-linecap="round"', 'stroke-dasharray="6 5"');
  [-A, A].forEach((a) => { const [x, y] = pos(a); s += W(px, py, x, y, C.muted, 1.5) + circ(x, y, 16, '#ffffff', C.muted, 2); });
  const [bx, by] = pos(-A); s += W(px, py, bx, by, C.ink, 2.5) + circ(bx, by, 16, C.mustard, C.ink, 2.5);
  s += rect(px - 4, py + L + 30, 8, 40, C.rust, C.rust, 1) + t(px, py + L + 98, 'fiducial mark at the centre', { size: 16, weight: 700, fill: C.rust, anchor: 'middle' });
  const arcP = (a1, a2, r, yo) => { const p1 = [px + r * Math.sin(a1), py + r * Math.cos(a1) + yo], p2 = [px + r * Math.sin(a2), py + r * Math.cos(a2) + yo]; return `M${p1[0].toFixed(1)},${p1[1].toFixed(1)} A${r},${r} 0 0 0 ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`; };
  s += path(arcP(-A, A, L + 40, 0), { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' }) + path(arcP(A, -A, L + 64, 0).replace(' 0 0 0 ', ' 0 0 1 '), { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' });
  s += t(px, py + L + 138, 'one oscillation = across and back again', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  const steps = ['Release from a small distance to one side', 'Start timing as the bob passes the mark, counting "zero"', 'Count passes in the same direction', 'Time 20 oscillations; repeat; take the mean', 'Period = mean time ÷ 20'];
  let st = ''; steps.forEach((x, i) => { const y = 160 + i * 84; st += badge(560, y + 18, 18, String(i + 1), i === 4 ? C.mustard : C.cream) + tl(592, y + 12, wrap(x, 26), { size: 17, weight: i === 4 ? 700 : 400 }, 22); });
  add('04-pendulum-period',
    svg(900, 640, 'Timing the period of a pendulum',
      panel(30, 110, 500, 500) + s + panel(540, 110, 330, 500) + st),
    'A pendulum swinging between two positions either side of a fiducial mark below its centre. One oscillation is a swing across and back again. Release the bob a small distance to one side, start timing as it passes the mark counting "zero", count passes in the same direction, time 20 oscillations, repeat, and divide the mean time by 20.',
    'Time many oscillations from the centre mark, then divide.',
    '## Measuring multiples');
}

// 05 Resultant of two vectors at right angles (Extended)
{
  // boat: across = up (3.0), current = right (1.2); scale 80 px per m/s
  const s1 = 80, ox = 120, oy = 480;
  let b = `<rect x="60" y="180" width="380" height="330" fill="${C.tealLight}"/>` + W(60, 180, 440, 180, C.grass, 5) + W(60, 510, 440, 510, C.grass, 5) + t(430, 200, 'river bank', { size: 14, anchor: 'end', fill: C.muted });
  b += arrow(ox, oy, ox, oy - 3.0 * s1, { w: 5, color: C.ink }) + t(ox - 10, oy - 120, '3.0 m/s', { size: 17, weight: 700, anchor: 'end' }).replace(/x="\d+"/, `x="${ox - 10}"`);
  b += arrow(ox, oy - 3.0 * s1, ox + 1.2 * s1, oy - 3.0 * s1, { w: 5, color: C.tealDark, marker: 'ahT' }) + t(ox + 48, oy - 3.0 * s1 - 12, '1.2 m/s current', { size: 16, weight: 700, fill: C.tealDark });
  b += arrow(ox, oy, ox + 1.2 * s1, oy - 3.0 * s1, { w: 6, color: C.rust, marker: 'ahR' }) + t(ox + 70, oy - 90, '3.2 m/s', { size: 18, weight: 700, fill: C.rust });
  b += path(`M${ox},${oy - 60} A60,60 0 0 1 ${(ox + 60 * Math.sin(0.3805)).toFixed(1)},${(oy - 60 * Math.cos(0.3805)).toFixed(1)}`, { stroke: C.ink, w: 2 }) + t(ox + 30, oy - 36, '22°', { size: 16, weight: 700 });
  const k1 = calc(30, 560, 410, 'By calculation', ['v² = 3.0² + 1.2² = 10.44', ['v = 3.2 m/s', 700, C.rust], 'tan θ = 1.2 / 3.0 = 0.40', ['θ = 22° downstream from', 700, C.rust], ['straight across', 700, C.rust]], { lh: 30, size: 17 });
  // crate: 1 cm = 100 N; draw 1 cm = 50 px
  const s2 = 0.5, cx = 520, cy = 470;
  let c = arrow(cx, cy, cx + 600 * s2, cy, { w: 5 }) + t(cx + 150, cy + 28, '600 N east (6.0 cm)', { size: 16, weight: 700, anchor: 'middle' });
  c += arrow(cx + 300, cy, cx + 300, cy - 450 * s2, { w: 5, color: C.tealDark, marker: 'ahT' }) + t(cx + 290, cy - 110, '450 N north', { size: 16, weight: 700, fill: C.tealDark, anchor: 'end' }) + t(cx + 290, cy - 90, '(4.5 cm)', { size: 16, fill: C.tealDark, anchor: 'end' });
  c += arrow(cx, cy, cx + 300, cy - 225, { w: 6, color: C.rust, marker: 'ahR' }) + t(cx + 110, cy - 140, '7.5 cm → 750 N', { size: 17, weight: 700, fill: C.rust, anchor: 'middle' });
  c += path(`M${cx + 70},${cy} A70,70 0 0 0 ${(cx + 70 * 0.8).toFixed(1)},${(cy - 70 * 0.6).toFixed(1)}`, { stroke: C.ink, w: 2 }) + t(cx + 80, cy - 18, '37°', { size: 16, weight: 700 });
  const k2 = calc(460, 560, 410, 'Scale drawing: 1 cm = 100 N', ['tip to tail at 90°', 'resultant 7.5 cm', ['= 750 N at 37° north of east', 700, C.rust], 'check: √(600² + 450²) = 750 N'], { lh: 30, size: 17 });
  add('05-resultant-vectors',
    svg(900, 560 + Math.max(k1.h, k2.h) + 30, 'Resultant of two vectors at right angles',
      ext(30, 72) + panel(30, 110, 410, 430) + t(235, 145, 'Boat crossing a river', { size: 19, weight: 700, anchor: 'middle' }) + b +
      panel(460, 110, 410, 430) + t(665, 145, 'Two ropes on a crate', { size: 19, weight: 700, anchor: 'middle' }) + c + k1.s + k2.s),
    'Left: a boat heading across a river at 3.0 m/s with a 1.2 m/s current has a resultant velocity of 3.2 m/s at 22° downstream from straight across. Right: forces of 600 N east and 450 N north drawn tip to tail at 1 cm to 100 N give a 7.5 cm resultant, 750 N at 37° north of east.',
    'Draw the vectors tip to tail; use Pythagoras and tan θ, and always state the reference direction.',
    '## Scalars and vectors (Extended only)');
}
