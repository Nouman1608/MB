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

export const slug = 'cambridge-igcse-physics-0625-mass-and-weight';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const ahd = (x, y, a, c = C.ink, s = 9) => { const p = (dx, dy) => `${(x + dx * Math.cos(a) - dy * Math.sin(a)).toFixed(1)},${(y + dx * Math.sin(a) + dy * Math.cos(a)).toFixed(1)}`; return `<path d="M${p(s, 0)} L${p(-s, -s * 0.75)} L${p(-s, s * 0.75)} Z" fill="${c}"/>`; };
const rover = (x, y) => rect(x - 60, y - 50, 120, 40, C.cream, C.ink, 3, 8) + rect(x - 20, y - 80, 40, 30, '#ffffff', C.ink, 2.5, 4) + [-40, 0, 40].map((d) => circ(x + d, y - 4, 13, C.ink, C.ink, 2)).join('');
const newtonMeter = (x, y, h, reading) => rect(x - 22, y, 44, h, '#ffffff', C.ink, 3, 8) + [0.2, 0.4, 0.6, 0.8].map((f) => W(x - 22, y + f * h, x - 10, y + f * h, C.ink, 2)).join('') + W(x, y - 30, x, y, C.ink, 3) + W(x, y + h, x, y + h + 30, C.ink, 3) + W(x - 6, y + reading * h, x + 18, y + reading * h, C.rust, 4);

// 01 Rover on Earth and Mars
{
  const sc = 140 / 8820;
  const side = (x, place, g, W0, lbl) => panel(x, 110, 410, 420) + t(x + 205, 148, place, { size: 22, weight: 700, anchor: 'middle' }) + t(x + 205, 176, `g = ${g} N/kg`, { size: 18, anchor: 'middle', fill: C.muted }) +
    `<rect x="${x + 20}" y="330" width="370" height="16" fill="${C.rock}"/>` + rover(x + 205, 330) + t(x + 205, 230, 'mass 900 kg', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    arrow(x + 205, 300, x + 205, 300 + W0 * sc, { w: 7, color: C.rust, marker: 'ahR' }) + t(x + 222, Math.max(300 + W0 * sc + 4, 372), lbl, { size: 19, weight: 700, fill: C.rust }) +
    t(x + 205, 500, `W = 900 × ${g} = ${W0} N`, { size: 18, weight: 700, anchor: 'middle' });
  add('01-rover-earth-mars',
    svg(900, 640, 'Same mass, different weight',
      side(30, 'Earth', '9.8', 8820, '≈ 8800 N') + side(460, 'Mars', '3.7', 3330, '≈ 3300 N') +
      note(30, 545, 840, 70, ['Mass (kg) is the same everywhere; weight (N) = m g changes with g.'], { size: 19, fill: C.cream })),
    'A 900 kg rover on the Earth (g = 9.8 N/kg) has a weight of 8820 N, about 8800 N; on Mars (g = 3.7 N/kg) its weight is 3330 N, about 3300 N. The weight arrows are drawn to scale; the mass is 900 kg in both places.',
    'Mass stays the same; weight depends on the gravitational field strength.',
    '## Gravitational field strength, g');
}

// 02 Finding g on a new moon
{
  const k = calc(400, 130, 470, 'Worked example 2', ['g = W / m = 4.0 / 2.5', ['   = 1.6 N/kg', 700, C.rust], 'astronaut: W = 70 × 1.6', ['   = 112 N  ≈ 110 N', 700, C.rust]], { lh: 34 });
  add('02-finding-g-on-a-moon',
    svg(900, 500, 'Finding g from a force and a mass',
      panel(30, 110, 350, 360) + W(80, 140, 330, 140, C.ink, 5) + newtonMeter(205, 175, 150, 0.4) + t(240, 238, '4.0 N', { size: 19, weight: 700, fill: C.rust }) +
      rect(170, 355, 70, 60, C.rockDark, C.ink, 3, 4) + t(205, 392, '2.5 kg', { size: 16, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(205, 450, 'newton meter on the moon', { size: 16, anchor: 'middle', fill: C.muted }) +
      k.s + note(400, 130 + k.h + 20, 470, 470 - 130 - k.h - 20, ['g = 9.8 N/kg near the Earth is the same', 'as the free-fall acceleration 9.8 m/s²:', '1 N/kg = 1 m/s².'], { size: 17, lh: 26, fill: C.tealLight, edge: C.tealDark })),
    'A 2.5 kg mass hangs from a newton meter reading 4.0 N on a newly explored moon, so g = 4.0 / 2.5 = 1.6 N/kg and a 70 kg astronaut there weighs 70 × 1.6 = 112 N, about 110 N. Near the Earth g = 9.8 N/kg, equivalent to a free-fall acceleration of 9.8 m/s².',
    'g = W/m: a force divided by a mass, in N/kg.',
    '## Gravitational field strength, g');
}

// 03 Beam balance vs spring balance
{
  const beam = (x) => { const cx = x + 205; return `<path d="M${cx - 30},450 L${cx},300 L${cx + 30},450 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>` + rect(cx - 160, 292, 320, 12, '#d9b27a', C.ink, 2.5, 3) +
    W(cx - 150, 304, cx - 150, 360, C.ink, 2) + W(cx + 150, 304, cx + 150, 360, C.ink, 2) + path(`M${cx - 195},360 Q${cx - 150},390 ${cx - 105},360 Z`, { fill: '#ffffff' }) + path(`M${cx + 105},360 Q${cx + 150},390 ${cx + 195},360 Z`, { fill: '#ffffff' }) +
    circ(cx - 150, 345, 16, C.mustard, C.ink, 2.5) + rect(cx + 136, 335, 28, 26, C.rockDark, C.ink, 2.5, 3) + t(cx - 150, 410, 'unknown', { size: 15, anchor: 'middle', fill: C.muted }) + t(cx + 150, 410, 'standard', { size: 15, anchor: 'middle', fill: C.muted }) + t(cx + 150, 428, 'masses', { size: 15, anchor: 'middle', fill: C.muted }); };
  add('03-beam-and-spring-balance',
    svg(900, 640, 'Comparing and measuring with balances',
      panel(30, 110, 410, 500) + t(235, 148, 'Beam balance', { size: 21, weight: 700, anchor: 'middle' }) + beam(30) +
      tl(60, 470, ['Level when the two weights are equal;', 'same g on both sides, so the masses', 'are equal. Same result on the Moon.'], { size: 17 }, 25) +
      panel(460, 110, 410, 500) + t(665, 148, 'Spring balance (newton meter)', { size: 21, weight: 700, anchor: 'middle' }) +
      W(500, 190, 830, 190, C.ink, 5) + newtonMeter(580, 225, 150, 0.7) + rect(555, 405, 50, 40, C.mustard, C.ink, 2.5, 4) + t(580, 470, 'Earth', { size: 17, weight: 700, anchor: 'middle' }) +
      newtonMeter(750, 225, 150, 0.12) + rect(725, 405, 50, 40, C.mustard, C.ink, 2.5, 4) + t(750, 470, 'Moon', { size: 17, weight: 700, anchor: 'middle' }) +
      tl(490, 525, ['Reads weight in newtons directly;', 'the same object gives a smaller', 'reading on the Moon.'], { size: 17 }, 25)),
    'A beam balance with an unknown object in one pan and standard masses in the other is level when their weights are equal; because both pans are in the same field, the masses are equal too, even on the Moon. A spring balance reads weight directly, so the same object gives a smaller reading on the Moon than on the Earth.',
    'A beam balance compares weights and so masses; a spring balance reads weight.',
    '## Measuring and comparing: balances');
}

// 04 Finding g in the lab
{
  const g = axes(150, 560, 560, 380, { xmax: 0.6, ymax: 6, xt: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6], yt: [0, 1, 2, 3, 4, 5, 6], xl: 'mass / kg', yl: 'weight / N' });
  let s = g.s + W(g.X(0), g.Y(0), g.X(0.58), g.Y(0.58 * 9.8), C.tealDark, 4);
  [0.1, 0.2, 0.3, 0.4, 0.5].forEach((m) => { s += `<path d="M${g.X(m) - 7},${g.Y(m * 9.8) - 7} l14,14 m0,-14 l-14,14" stroke="${C.ink}" stroke-width="2.5"/>`; });
  s += W(g.X(0), g.Y(0), g.X(0.5), g.Y(0), C.rust, 3) + W(g.X(0.5), g.Y(0), g.X(0.5), g.Y(4.9), C.rust, 3).replace('stroke-linecap="round"', 'stroke-dasharray="7 5"') + t(g.X(0.5) + 12, g.Y(2.45), '4.9 N', { size: 18, weight: 700, fill: C.rust }) + t(g.X(0.25), g.Y(0) - 12, '0.50 kg', { size: 18, weight: 700, fill: C.rust, anchor: 'middle' });
  add('04-finding-g-graph',
    svg(900, 740, 'Weight against mass: the gradient is g',
      panel(30, 110, 840, 520) + t(200, 160, 'masses 100 g to 500 g on a newton meter', { size: 17, fill: C.muted }) + s +
      note(30, 645, 840, 70, ['gradient = 4.9 N ÷ 0.50 kg = 9.8 N/kg  (convert g to kg first)'], { size: 20, weight: 700, fill: C.tealLight, edge: C.tealDark })),
    'Weight plotted against mass for 0.10 to 0.50 kg gives a straight line through the origin. A gradient triangle from the origin to 0.50 kg rises 4.9 N, so g = 4.9 ÷ 0.50 = 9.8 N/kg.',
    'Plot weight against mass in kilograms; the gradient is g.',
    '## Measuring and comparing: balances');
}

// 05 Weight as the effect of a field (Extended)
{
  const cx = 300, cy = 370, R = 110;
  let s = '';
  for (let k = 0; k < 16; k++) { const a = (k / 16) * 2 * Math.PI; s += W(cx + 230 * Math.cos(a), cy + 230 * Math.sin(a), cx + (R + 6) * Math.cos(a), cy + (R + 6) * Math.sin(a), C.tealDark, 2) + ahd(cx + 160 * Math.cos(a), cy + 160 * Math.sin(a), a + Math.PI, C.tealDark, 8); }
  s += circ(cx, cy, R, '#a9c48f', C.ink, 3) + t(cx, cy + 7, 'planet', { size: 18, weight: 700, anchor: 'middle' });
  s += rect(cx - 12, cy - R - 26, 24, 24, C.mustard, C.ink, 2) + arrow(cx, cy - R - 2, cx, cy - R + 38, { w: 5, color: C.rust, marker: 'ahR' });
  s += rect(cx - 12, cy + R + 2, 24, 24, C.mustard, C.ink, 2) + arrow(cx, cy + R + 2, cx, cy + R - 38, { w: 5, color: C.rust, marker: 'ahR' });
  s += circ(cx + 150, cy - 200, 10, C.cream, C.ink, 2) + arrow(cx + 150, cy - 200, cx + 134, cy - 179, { w: 3.5, color: C.rust, marker: 'ahR' }) + (t(cx + 136, cy - 214, 'satellite: smaller', { size: 15, weight: 700, fill: C.rust, anchor: 'end' }) + t(cx + 136, cy - 196, 'weight, not zero', { size: 15, weight: 700, fill: C.rust, anchor: 'end' })).replace(/<text/g, '<text paint-order="stroke" stroke="#ffffff" stroke-width="5"');
  const pts = ['A field is a region where a mass feels a force.', 'Weight W = m g points along the field, towards the centre.', 'Every kilogram at one place feels the same force: 1 kg and 10 kg balls have weights in the ratio 1 : 10 and fall with the same acceleration.', 'The field weakens with distance from the body.'];
  let tx = ''; let y = 170; pts.forEach((p0) => { const L = wrap(p0, 30); tx += tl(600, y, L, { size: 17 }, 23); y += L.length * 23 + 18; });
  add('05-gravitational-field',
    svg(900, 660, 'Weight: the effect of a gravitational field',
      ext(30, 72) + panel(30, 110, 840, 520) + s + `<rect x="580" y="130" width="275" height="480" rx="12" fill="${C.cream}"/>` + tx),
    'Field lines point inwards from all directions to the centre of a planet. Objects on opposite sides have weight arrows pointing in opposite directions, each towards the centre. A satellite further away has a smaller weight, but not zero.',
    'Any mass in a gravitational field is pulled along the field with force W = mg.',
    '## Weight as the effect of a gravitational field (Extended only)');
}
