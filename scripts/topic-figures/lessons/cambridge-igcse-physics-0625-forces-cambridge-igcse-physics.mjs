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

export const slug = 'cambridge-igcse-physics-0625-forces';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const ahd = (x, y, a, c = C.ink, s = 9) => { const p = (dx, dy) => `${(x + dx * Math.cos(a) - dy * Math.sin(a)).toFixed(1)},${(y + dx * Math.sin(a) + dy * Math.cos(a)).toFixed(1)}`; return `<path d="M${p(s, 0)} L${p(-s, -s * 0.75)} L${p(-s, s * 0.75)} Z" fill="${c}"/>`; };
// force arrow with label
const F = (x1, y1, x2, y2, lbl, col = C.rust, lx, ly, anchor = 'middle') => arrow(x1, y1, x2, y2, { w: 6, color: col, marker: col === C.tealDark ? 'ahT' : col === C.olive ? 'ahO' : 'ahR' }) + t(lx ?? (x1 + x2) / 2, ly ?? (y1 + y2) / 2 - 14, lbl, { size: 18, weight: 700, fill: col, anchor });
const car = (x, y, s = 1) => `<path d="M${x},${y} l0,-${30 * s} l${40 * s},0 l${25 * s},-${28 * s} l${80 * s},0 l${30 * s},${28 * s} l${35 * s},0 l0,${30 * s} z" fill="${C.teal}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + circ(x + 45 * s, y, 16 * s, C.ink, C.ink, 2) + circ(x + 165 * s, y, 16 * s, C.ink, C.ink, 2);

// 01 Load-extension graph
{
  const data = [[0, 0], [1.6, 1], [3.2, 2], [4.8, 3], [6.4, 4], [8.3, 5], [10.8, 6]];
  const g = axes(140, 560, 560, 400, { xmax: 12, ymax: 7, xt: [0, 2, 4, 6, 8, 10, 12], yt: [0, 1, 2, 3, 4, 5, 6, 7], xl: 'extension / cm', yl: 'load / N' });
  let s = g.s;
  s += W(g.X(0), g.Y(0), g.X(6.4), g.Y(4), C.tealDark, 4) + path(`M${g.X(6.4)},${g.Y(4)} Q${g.X(7.6)},${g.Y(4.7)} ${g.X(8.3)},${g.Y(5)} T${g.X(10.8)},${g.Y(6)}`, { stroke: C.tealDark, w: 4 });
  s += data.map(([x, y]) => `<path d="M${g.X(x) - 7},${g.Y(y) - 7} l14,14 m0,-14 l-14,14" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  s += circ(g.X(6.4), g.Y(4), 11, 'none', C.rust, 3) + arrow(g.X(6.4) + 80, g.Y(4) + 90, g.X(6.4) + 14, g.Y(4) + 12, { w: 3, color: C.rust, marker: 'ahR' }) + tl(g.X(6.4) + 50, g.Y(4) + 112, ['limit of proportionality', '(about 4.0 N)'], { size: 17, weight: 700, fill: C.rust }, 22);
  s += t(g.X(1.2), g.Y(3.3), 'straight line through 0:', { size: 17, fill: C.tealDark, weight: 600 }) + t(g.X(1.2), g.Y(3.3) + 22, '1.6 cm per 1.0 N', { size: 17, fill: C.tealDark, weight: 600 });
  add('01-load-extension-graph',
    svg(900, 760, 'Stretching a spring: load against extension',
      panel(30, 110, 840, 520) + s +
      note(30, 645, 840, 90, ['Extended: k = F / x = 4.0 N ÷ 0.064 m = 63 N/m (62.5 N/m)', 'On this graph (load on y) the gradient of the straight part is k.'], { size: 19, lh: 30, fill: C.tealLight, edge: C.tealDark })),
    'Load against extension for a spring of original length 15.0 cm: points at 1.6, 3.2, 4.8 and 6.4 cm for 1.0 to 4.0 N lie on a straight line through the origin, then 8.3 cm at 5.0 N and 10.8 cm at 6.0 N curve away. The limit of proportionality is at about 4.0 N, and k = 4.0 ÷ 0.064 = 63 N/m.',
    'Straight through the origin up to the limit of proportionality, then curving.',
    '## Effects of forces (1.5.1)');
}

// 02 Resultant force along a line; balanced forces
{
  const p1 = panel(30, 110, 840, 230) + t(60, 148, 'Tug of war', { size: 20, weight: 700 }) +
    rect(330, 214, 240, 10, '#c9a36b', C.ink, 2) + F(330, 219, 120, 219, '850 N', C.rust, 225, 200) + F(570, 219, 760, 219, '780 N', C.tealDark, 665, 200) +
    note(250, 255, 400, 60, ['resultant = 850 − 780 = 70 N to the left'], { size: 19, weight: 700 });
  const p2 = panel(30, 360, 840, 250) + t(60, 398, 'Car at a steady 25 m/s on a straight road', { size: 20, weight: 700 }) +
    car(340, 520) + F(560, 490, 720, 490, 'driving force', C.tealDark, 640, 470) + F(330, 490, 170, 490, 'resistive forces', C.rust, 250, 470) +
    t(450, 585, 'equal and opposite: resultant zero, so constant velocity (not "not moving")', { size: 17, anchor: 'middle', fill: C.muted });
  add('02-resultant-and-balanced',
    svg(900, 640, 'Resultant force along a line', p1 + p2),
    'In a tug of war, 850 N to the left and 780 N to the right give a resultant of 70 N to the left. A car cruising at a steady 25 m/s has a driving force equal to the resistive forces, so the resultant is zero and its velocity stays constant.',
    'Opposite forces subtract; a zero resultant means constant velocity, not necessarily rest.',
    '## Effects of forces (1.5.1)');
}

// 03 F = ma (Extended)
{
  const row = (y, title, fwd, back, res, acc) => panel(30, y, 840, 220) + t(60, y + 38, title, { size: 20, weight: 700 }) +
    car(330, y + 150) + (fwd ? F(560, y + 120, 720, y + 120, fwd, C.tealDark, 640, y + 100) : '') + F(320, y + 120, back[1], y + 120, back[0], C.rust, (320 + back[1]) / 2, y + 100) +
    t(60, y + 200, res, { size: 18, weight: 700 }) + t(840, y + 200, acc, { size: 18, weight: 700, anchor: 'end', fill: C.rust }) +
    arrow(600, y + 175, 680, y + 175, { w: 2.5 }) + t(690, y + 181, 'moving', { size: 15, fill: C.muted });
  add('03-f-equals-ma',
    svg(900, 600, 'Resultant force = mass × acceleration',
      ext(30, 72) + row(110, '1200 kg car speeding up', '3000 N', ['600 N', 260], 'resultant = 3000 − 600 = 2400 N forwards', 'a = 2400 / 1200 = 2.0 m/s² forwards') +
      row(345, 'Braking', '', ['resultant 4800 N', 100], 'a = 4800 / 1200 = 4.0 m/s² backwards', 'decelerating, still moving forwards')),
    'A 1200 kg car with 3000 N driving force and 600 N resistive forces has a resultant of 2400 N forwards and accelerates at 2.0 m/s² forwards. When braking with a resultant of 4800 N backwards it accelerates at 4.0 m/s² backwards, decelerating while still moving forwards.',
    'Use the resultant force; the acceleration is in the same direction as it.',
    '## Effects of forces (1.5.1)');
}

// 04 Circular motion (Extended)
{
  const cx = 250, cy = 360, r = 170;
  let s = circ(cx, cy, r, 'none', C.muted, 2).replace('/>', ' stroke-dasharray="8 6"/>') + dot(cx, cy, 6) + t(cx, cy + 28, 'centre', { size: 16, anchor: 'middle', fill: C.muted });
  const pts = [-0.9, 0.6, 2.4];
  pts.forEach((a) => { const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a); s += arrow(x, y, x + (cx - x) * 0.45, y + (cy - y) * 0.45, { w: 5, color: C.rust, marker: 'ahR' }); s += arrow(x, y, x + 80 * Math.sin(a), y - 80 * Math.cos(a), { w: 4, color: C.tealDark, marker: 'ahT' }); s += circ(x, y, 13, C.mustard, C.ink, 2.5); });
  s += t(60, 600, 'force (towards the centre)', { size: 17, weight: 700, fill: C.rust }) + t(300, 600, 'velocity', { size: 17, weight: 700, fill: C.tealDark });
  const rel = [['mass, radius same', 'larger force → larger speed'], ['mass, speed same', 'larger force → smaller radius'], ['speed, radius same', 'larger mass → needs larger force']];
  let rs = '';
  rel.forEach(([a, b], i) => { const y = 150 + i * 120; rs += `<rect x="480" y="${y}" width="370" height="100" rx="12" fill="${i === 1 ? C.cream : C.tealLight}" stroke="${C.panelEdge}" stroke-width="2"/>` + t(500, y + 38, a, { size: 17, fill: C.muted }) + t(500, y + 72, b, { size: 19, weight: 700 }); });
  add('04-circular-motion',
    svg(900, 650, 'Moving in a circle',
      ext(30, 72) + panel(30, 110, 430, 510) + s + panel(470, 110, 400, 510) + rs + t(665, 535, 'Examples: string tension, tyre', { size: 16, anchor: 'middle', fill: C.muted }) + t(665, 558, 'friction on a roundabout,', { size: 16, anchor: 'middle', fill: C.muted }) + t(665, 581, 'gravity on a satellite', { size: 16, anchor: 'middle', fill: C.muted })),
    'An object moving round a circle at three points: the velocity is along the tangent and the force acts at right angles to it, towards the centre. With mass and radius fixed, a larger force means a larger speed; with mass and speed fixed, a larger force means a smaller radius; a larger mass needs a larger force for the same speed and radius.',
    'A force towards the centre changes the direction of the velocity, not the speed.',
    '## Effects of forces (1.5.1)');
}

// 05 Moments: door and see-saw
{
  const door = (y, d, mom) => { const hx = 90, L = 330; return rect(hx, y, L, 22, '#d9b27a', C.ink, 2.5, 3) + dot(hx, y + 11, 8) + t(hx - 14, y + 17, 'hinge', { size: 15, anchor: 'end', fill: C.muted }) +
    F(hx + d * 400, y - 60, hx + d * 400, y - 4, '', C.rust) + t(hx + d * 400 + 10, y - 40, '15 N', { size: 17, weight: 700, fill: C.rust }) + dim(hx, y + 40, hx + d * 400, y + 40, `${d.toFixed(2)} m`, { ly: y + 70 }) + t(440, y + 18, mom, { size: 19, weight: 700, fill: C.tealDark }); };
  const sx = 450, sy = 625;
  let ss = `<path d="M${sx - 25},${sy + 60} L${sx},${sy + 10} L${sx + 25},${sy + 60} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>` + rect(sx - 330, sy - 2, 660, 12, '#d9b27a', C.ink, 2.5, 3);
  ss += F(sx - 300, sy - 70, sx - 300, sy - 6, '', C.rust) + t(sx - 300, sy - 80, '300 N', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + F(sx + 200, sy - 70, sx + 200, sy - 6, '', C.rust) + t(sx + 200, sy - 80, '450 N', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  ss += dim(sx - 300, sy + 34, sx, sy + 34, '1.5 m', { ly: sy + 62 }) + dim(sx, sy + 34, sx + 200, sy + 34, 'd = 1.0 m', { ly: sy + 62 });
  add('05-moments-door-seesaw',
    svg(900, 820, 'Moment = force × perpendicular distance',
      panel(30, 110, 840, 335) + t(60, 148, 'Pushing a door (seen from above)', { size: 20, weight: 700 }) + door(220, 0.8, '15 × 0.80 = 12 N m') + door(350, 0.2, '15 × 0.20 = 3.0 N m') +
      panel(30, 460, 840, 330) + t(60, 498, 'Balancing a see-saw (principle of moments)', { size: 20, weight: 700 }) + ss +
      t(450, 768, 'anticlockwise 300 × 1.5 = 450 N m = clockwise 450 × d, so d = 1.0 m', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark })),
    'A 15 N push on a door 0.80 m from the hinge gives a moment of 12 N m; at 0.20 m it gives only 3.0 N m. On a see-saw, a 300 N child 1.5 m from the pivot is balanced by a 450 N child 1.0 m from the pivot on the other side, since 300 × 1.5 = 450 × 1.0 = 450 N m.',
    'The further from the pivot, the bigger the turning effect; balance means equal moments.',
    '## Turning effect of forces (1.5.2)');
}

// 06 Metre rule, several forces (Extended)
{
  const x0 = 100, sc = 7; // 1 cm = 7 px
  const X = (cm) => x0 + cm * sc;
  let s = rect(X(0), 300, 100 * sc, 26, C.cream, C.ink, 2.5, 3);
  for (let c = 0; c <= 100; c += 10) s += W(X(c), 300, X(c), c % 50 ? 312 : 318, C.ink, 2) + t(X(c), 346, String(c), { size: 15, anchor: 'middle', fill: C.muted });
  s += `<path d="M${X(50) - 22},${390} L${X(50)},${326} L${X(50) + 22},${390} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>`;
  s += F(X(10), 200, X(10), 296, '', C.rust) + t(X(10), 188, '2.0 N', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) +
    F(X(30), 200, X(30), 296, '', C.rust) + t(X(30), 188, '1.0 N', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) +
    F(X(80), 200, X(80), 296, '', C.tealDark) + t(X(80), 188, 'W', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += dim(X(10), 420, X(50), 420, '0.40 m', { ly: 448 }) + dim(X(30), 470, X(50), 470, '0.20 m', { ly: 498 }) + dim(X(50), 420, X(80), 420, '0.30 m', { ly: 448 });
  const k = calc(30, 560, 840, 'Worked example 3', ['anticlockwise: (2.0 × 0.40) + (1.0 × 0.20) = 0.80 + 0.20 = 1.00 N m', 'clockwise: W × 0.30', ['balance: W = 1.00 / 0.30 = 3.3 N', 700, C.rust]], { lh: 32 });
  add('06-metre-rule-moments',
    svg(900, 560 + k.h + 30, 'Several forces on each side',
      ext(30, 72) + panel(30, 110, 840, 430) + t(60, 148, 'Uniform metre rule pivoted at 50 cm: its own weight has no moment', { size: 18, weight: 600 }) + s + k.s),
    'A uniform metre rule pivoted at the 50 cm mark carries 2.0 N at 10 cm (0.40 m from the pivot) and 1.0 N at 30 cm (0.20 m) on one side and W at 80 cm (0.30 m) on the other. Anticlockwise moments total 1.00 N m, so W = 1.00 / 0.30 = 3.3 N.',
    'Add all the moments on each side, then set clockwise equal to anticlockwise.',
    '## Turning effect of forces (1.5.2)');
}

// 07 Stability
{
  const block = (x, w, h, tilt, out) => {
    // tilted about bottom-right corner (x+w, base)
    const base = 520, a = (tilt * Math.PI) / 180;
    const P = (px, py) => { const dx = px - (x + w), dy = py - base; return [x + w + dx * Math.cos(a) - dy * Math.sin(a), base + dx * Math.sin(a) + dy * Math.cos(a)]; };
    const pts = [P(x, base), P(x + w, base), P(x + w, base - h), P(x, base - h)];
    const cg = P(x + w / 2, base - h / 2);
    return `<polygon points="${pts.map((p) => p.join(',')).join(' ')}" fill="${out ? C.cream : C.tealLight}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + dot(cg[0], cg[1], 7, C.rust) +
      arrow(cg[0], cg[1], cg[0], cg[1] + 70, { w: 4, color: C.rust, marker: 'ahR' }) + W(cg[0], cg[1], cg[0], base, C.rust, 2).replace('stroke-linecap="round"', 'stroke-dasharray="5 5"') + dot(x + w, base, 6);
  };
  add('07-stability',
    svg(900, 680, 'Stability: where does the weight line fall?',
      panel(30, 110, 410, 540) + t(235, 150, 'Short, wide: tips back', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark }) + W(60, 520, 410, 520, C.ink, 3) + block(120, 200, 130, 20, false) +
      tl(60, 570, ['line through centre of gravity', 'stays inside the base: weight\'s', 'moment turns it back'], { size: 16 }, 22) +
      panel(460, 110, 410, 540) + t(665, 150, 'Tall, narrow: tips over', { size: 20, weight: 700, anchor: 'middle', fill: C.rust }) + W(490, 520, 840, 520, C.ink, 3) + block(640, 80, 280, 20, true) +
      tl(490, 570, ['line falls outside the base: weight\'s', 'moment turns it further over'], { size: 16 }, 22) +
      t(450, 92, 'Same tilt. Low centre of gravity and wide base = more stable.', { size: 18, anchor: 'middle', fill: C.muted })),
    'A short, wide block and a tall, narrow block are tilted by the same angle about one bottom edge. For the wide block, the vertical line through its centre of gravity stays inside the base, so its weight turns it back. For the tall block the line falls outside the base and its weight tips it over.',
    'An object topples when the line of its weight passes outside its base.',
    '## Centre of gravity (1.5.3)');
}
