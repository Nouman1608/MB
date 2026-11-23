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

export const slug = 'cambridge-igcse-physics-0625-motion';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 Average speed of a bus
{
  const sc = 1200; // px per hour
  const x0 = 80;
  let s = rect(x0, 200, 0.2 * sc, 60, C.teal, C.ink, 2.5, 6) + rect(x0 + 0.2 * sc, 200, 0.3 * sc, 60, C.cream, C.ink, 2.5, 6);
  s += t(x0 + 0.1 * sc, 236, '12 km at 60 km/h', { size: 17, weight: 700, anchor: 'middle' }) + t(x0 + 0.35 * sc, 236, '12 km at 40 km/h', { size: 17, weight: 700, anchor: 'middle' });
  s += dim(x0, 290, x0 + 0.2 * sc, 290, '12 / 60 = 0.20 h', { ly: 318 }) + dim(x0 + 0.2 * sc, 290, x0 + 0.5 * sc, 290, '12 / 40 = 0.30 h', { ly: 318 });
  s += t(x0, 180, 'time →', { size: 16, fill: C.muted });
  add('01-average-speed-bus',
    svg(900, 520, 'Average speed: total distance ÷ total time',
      panel(30, 110, 840, 250) + s +
      note(30, 375, 520, 120, ['average speed = 24 km / 0.50 h', '= 48 km/h'], { size: 22, weight: 700, fill: C.tealLight, edge: C.tealDark, lh: 34 }) +
      note(570, 375, 300, 120, ['not (60 + 40) ÷ 2 = 50:', 'the bus spends longer', 'at the lower speed'], { size: 17, lh: 25, fill: C.cream, edge: C.rust })),
    'A bus covers 12 km at 60 km/h in 0.20 h, then 12 km at 40 km/h in 0.30 h; the bars are drawn to scale in time. The average speed is 24 km ÷ 0.50 h = 48 km/h, not 50 km/h, because more time is spent at the lower speed.',
    'Average the journey, not the speeds: total distance ÷ total time.',
    '## Speed, velocity and average speed');
}

// 02 Shapes of distance-time and speed-time graphs
{
  const mini = (x, y, kind, label) => {
    let s = arrow(x, y + 120, x, y, { w: 2.5 }) + arrow(x, y + 120, x + 170, y + 120, { w: 2.5 });
    const d = { flat: `M${x + 5},${y + 80} L${x + 160},${y + 80}`, zero: `M${x + 5},${y + 118} L${x + 160},${y + 118}`, line: `M${x + 5},${y + 115} L${x + 155},${y + 20}`, up: `M${x + 5},${y + 115} Q${x + 110},${y + 112} ${x + 155},${y + 15}`, down: `M${x + 5},${y + 115} Q${x + 50},${y + 25} ${x + 155},${y + 22}`, fall: `M${x + 5},${y + 20} L${x + 155},${y + 115}` }[kind];
    return s + path(d, { stroke: C.tealDark, w: 4 }) + t(x + 85, y + 148, label, { size: 17, weight: 700, anchor: 'middle' });
  };
  const xs = [70, 270, 470, 670];
  add('02-motion-graph-shapes',
    svg(900, 640, 'Reading the two kinds of motion graph',
      panel(30, 110, 840, 240) + t(55, 145, 'Distance–time: gradient = speed', { size: 19, weight: 700, fill: C.tealDark }) + t(50, 225, 'd', { size: 16, fill: C.muted, italic: true }) +
      mini(xs[0], 165, 'flat', 'at rest') + mini(xs[1], 165, 'line', 'constant speed') + mini(xs[2], 165, 'up', 'accelerating') + mini(xs[3], 165, 'down', 'decelerating') +
      panel(30, 365, 840, 240) + t(55, 400, 'Speed–time: gradient = acceleration, area = distance', { size: 19, weight: 700, fill: C.rust }) + t(50, 480, 'v', { size: 16, fill: C.muted, italic: true }) +
      mini(xs[0], 420, 'zero', 'at rest') + mini(xs[1], 420, 'flat', 'constant speed') + mini(xs[2], 420, 'line', 'accelerating') + mini(xs[3], 420, 'fall', 'decelerating') +
      t(450, 628, 'A horizontal line means stopped on a distance–time graph but steady speed on a speed–time graph.', { size: 16, anchor: 'middle', fill: C.muted })),
    'Top row, distance–time graphs: horizontal means at rest, a straight slope means constant speed, a curve getting steeper means accelerating and a curve getting less steep means decelerating. Bottom row, speed–time graphs: a line along the time axis means at rest, horizontal above it means constant speed, a rising straight line means constant acceleration and a falling one constant deceleration.',
    'Same shape, different meaning: always check which graph you are reading.',
    '## Speed–time graphs');
}

// 03 Cyclist speed-time worked example
{
  const g = axes(120, 470, 680, 300, { xmax: 48, ymax: 10, xt: [0, 10, 20, 30, 40, 44], yt: [0, 2, 4, 6, 8, 10], xl: 'time / s', yl: 'speed / m/s' });
  let s = g.s;
  s += `<path d="M${g.X(0)},${g.Y(0)} L${g.X(10)},${g.Y(8)} L${g.X(10)},${g.Y(0)} Z" fill="${C.cream}"/>` + `<path d="M${g.X(10)},${g.Y(0)} L${g.X(10)},${g.Y(8)} L${g.X(40)},${g.Y(8)} L${g.X(40)},${g.Y(0)} Z" fill="${C.tealLight}"/>` + `<path d="M${g.X(40)},${g.Y(0)} L${g.X(40)},${g.Y(8)} L${g.X(44)},${g.Y(0)} Z" fill="${C.sand}"/>`;
  s += poly([[g.X(0), g.Y(0)], [g.X(10), g.Y(8)], [g.X(40), g.Y(8)], [g.X(44), g.Y(0)]], C.tealDark, 4);
  s += t(g.X(7), g.Y(2), '40 m', { size: 18, weight: 700, anchor: 'middle' }) + t(g.X(25), g.Y(4), '240 m', { size: 20, weight: 700, anchor: 'middle' }) + t(g.X(41.3), g.Y(1.6), '16 m', { size: 15, weight: 700, anchor: 'middle' });
  s += t(g.X(0.5), g.Y(9.2), 'a = 0.80 m/s²', { size: 16, weight: 700, fill: C.olive }) + t(g.X(42), g.Y(9.2), 'a = −2.0 m/s²', { size: 16, weight: 700, fill: C.olive, anchor: 'middle' });
  const k = calc(30, 560, 840, 'Worked example 2', ['½ × 10 × 8.0 = 40 m;   30 × 8.0 = 240 m;   ½ × 4.0 × 8.0 = 16 m', 'total distance = 296 m in 44 s', ['average speed = 296 / 44 = 6.7 m/s', 700, C.rust], ['Extended: (8.0 − 0) ÷ 10 = 0.80 m/s²;  (0 − 8.0) ÷ 4.0 = −2.0 m/s²', 600, C.olive]], { lh: 32 });
  add('03-cyclist-speed-time',
    svg(900, 560 + k.h + 30, 'Distance from the area under a speed–time graph',
      panel(30, 110, 840, 430) + s + k.s),
    'Speed–time graph of a cyclist: speeding up from rest to 8.0 m/s in 10 s, steady for 30 s, then slowing to rest in 4.0 s. The areas are 40 m, 240 m and 16 m, total 296 m in 44 s, so the average speed is 6.7 m/s. For Extended, the gradients give accelerations of 0.80 m/s² and −2.0 m/s².',
    'Area under a speed–time graph = distance; gradient = acceleration.',
    '## Speed–time graphs');
}

// 04 Free fall and terminal velocity (Extended)
{
  const g = axes(110, 520, 420, 360, { xmax: 10, ymax: 10, xt: [], yt: [], xl: 'time', yl: 'speed', grid: false });
  let s = g.s + W(g.X(0), g.Y(0), g.X(4.2), g.Y(10), C.muted, 3).replace('stroke-linecap="round"', 'stroke-dasharray="8 6"') + t(g.X(4.3), g.Y(9.6), 'no air resistance:', { size: 15, fill: C.muted }) + t(g.X(4.3), g.Y(9.6) + 19, 'gradient 9.8 m/s²', { size: 15, fill: C.muted });
  let d = ''; for (let tt = 0; tt <= 10.01; tt += 0.1) { const v = 7 * (1 - Math.exp(-tt / 1.8)); d += (d ? 'L' : 'M') + g.X(tt).toFixed(1) + ',' + g.Y(v).toFixed(1); }
  s += path(d, { stroke: C.tealDark, w: 4 }) + W(g.X(0), g.Y(7), g.X(10), g.Y(7), C.tealDark, 1.5).replace('stroke-linecap="round"', 'stroke-dasharray="4 5"') + t(g.X(10), g.Y(7) - 10, 'terminal velocity', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
  const pts = [[0.4, 'A'], [2.2, 'B'], [8, 'C']];
  pts.forEach(([tt, L]) => { const v = 7 * (1 - Math.exp(-tt / 1.8)); s += circ(g.X(tt), g.Y(v), 13, C.mustard, C.ink, 2) + t(g.X(tt), g.Y(v) + 6, L, { size: 15, weight: 700, anchor: 'middle' }); });
  const fd = (x, y, drag, L, txt) => circ(x, y, 18, C.cream, C.ink, 2.5) + t(x, y + 6, L, { size: 16, weight: 700, anchor: 'middle' }) + arrow(x, y + 18, x, y + 68, { w: 5, color: C.rust, marker: 'ahR' }) + (drag ? arrow(x, y - 18, x, y - 18 - drag, { w: 5, color: C.tealDark, marker: 'ahT' }) : '') + tl(x + 34, y - 6, txt, { size: 15 }, 19);
  add('04-terminal-velocity',
    svg(900, 640, 'Falling with air resistance',
      ext(30, 72) + panel(30, 110, 520, 500) + s +
      panel(570, 110, 300, 500) + t(720, 145, 'weight (red), drag (teal)', { size: 15, anchor: 'middle', fill: C.muted }) +
      W(590, 270, 850, 270, C.panelEdge, 2) + W(590, 430, 850, 430, C.panelEdge, 2) + fd(620, 180, 8, 'A', ['slow: tiny drag,', 'acceleration ≈ g']) + fd(620, 340, 28, 'B', ['drag grows:', 'acceleration falls']) + fd(620, 520, 50, 'C', ['drag = weight:', 'zero resultant,', 'constant speed'])),
    'Speed–time graph of an object falling through air. Without air resistance the line would be straight with gradient 9.8 m/s². With drag, at A the object is slow and accelerates at nearly g; at B drag has grown so the acceleration is smaller and the curve flattens; at C drag equals weight, the resultant force is zero and it falls at terminal velocity.',
    'Drag rises with speed until it equals weight: then the speed stays constant.',
    '## Free fall and terminal velocity');
}
