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

export const slug = 'cambridge-igcse-physics-0625-pressure-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const box3d = (x, y, w, h, dx, dy, fill = C.cream, hl = '') =>
  `<path d="M${x},${y} L${x + dx},${y - dy} L${x + w + dx},${y - dy} L${x + w},${y} Z" fill="${hl === 'top' ? C.mustard : C.sand}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
  `<path d="M${x + w},${y} L${x + w + dx},${y - dy} L${x + w + dx},${y + h - dy} L${x + w},${y + h} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + rect(x, y, w, h, fill, C.ink, 3);

// 01 Converting cm2 to m2
{
  let g = rect(80, 150, 300, 300, C.tealLight, C.ink, 3);
  for (let i = 1; i < 10; i++) g += W(80 + i * 30, 150, 80 + i * 30, 450, C.tealDark, 1) + W(80, 150 + i * 30, 380, 150 + i * 30, C.tealDark, 1);
  g += rect(80, 150, 30, 30, C.mustard, C.ink, 2) + dim(80, 480, 380, 480, '1 m = 100 cm', { ly: 508 }) + t(392, 310, '1 m', { size: 17, weight: 700 });
  g += t(230, 556, '(each small square here stands for 10 cm × 10 cm)', { size: 15, anchor: 'middle', fill: C.muted });
  add('01-area-conversion',
    svg(900, 600, 'Converting areas to m²',
      panel(30, 110, 840, 470) + g +
      note(530, 150, 320, 110, ['1 m² = 100 × 100', '= 10 000 cm²'], { size: 22, weight: 700, fill: C.cream, lh: 34 }) +
      note(530, 280, 320, 90, ['1 m² = 1000 × 1000', '= 1 000 000 mm²'], { size: 19, fill: '#ffffff', edge: C.panelEdge, lh: 28 }) +
      note(530, 390, 320, 110, ['25 cm² = 25 ÷ 10 000', '= 0.0025 m²', '(divide by 10 000, not 100)'], { size: 18, fill: C.tealLight, edge: C.tealDark, lh: 27 })),
    'A one-metre square is 100 cm along each side, so it contains 100 × 100 = 10 000 square centimetres; similarly 1 m² = 1 000 000 mm². So 25 cm² = 25 ÷ 10 000 = 0.0025 m².',
    'A square metre holds 10 000 square centimetres, not 100.',
    '## Pressure = force ÷ area');
}

// 02 Flat shoes vs stiletto heel
{
  const k1 = calc(30, 380, 410, 'Flat shoes, 300 cm²', ['A = 300 / 10 000 = 0.030 m²', 'p = 600 / 0.030', ['= 20 000 Pa', 700, C.tealDark]], { lh: 32 });
  const k2 = calc(460, 380, 410, 'One heel, 1.0 cm²', ['A = 1.0 / 10 000 = 0.000 10 m²', 'p = 600 / 0.000 10', ['= 6 000 000 Pa', 700, C.rust]], { lh: 32, fill: C.cream, edge: C.rust });
  const foot = (x, area) => `<path d="M${x},300 L${x + 230},300 L${x + 230},280 Q${x + 200},230 ${x + 120},240 L${x + 20},250 Q${x - 5},260 ${x},300 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>` + area;
  add('02-shoe-and-heel-pressure',
    svg(900, 380 + k1.h + 90, 'Same force, smaller area, bigger pressure',
      panel(30, 110, 410, 250) + panel(460, 110, 410, 250) +
      arrow(235, 140, 235, 225, { w: 6, color: C.rust, marker: 'ahR' }) + t(250, 175, '600 N', { size: 18, weight: 700, fill: C.rust }) +
      foot(120, `<rect x="120" y="300" width="230" height="10" fill="${C.tealDark}"/>`) + W(60, 312, 410, 312, C.ink, 3) +
      arrow(665, 140, 665, 225, { w: 6, color: C.rust, marker: 'ahR' }) + t(680, 175, '600 N', { size: 18, weight: 700, fill: C.rust }) +
      `<path d="M560,262 L760,262 L760,244 Q730,206 650,216 L590,228 Q560,236 560,262 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>` + W(578, 262, 580, 309, C.ink, 5) + W(490, 312, 840, 312, C.ink, 3) + t(580, 340, 'only the heel touches the floor', { size: 15, fill: C.muted }) +
      k1.s + k2.s +
      note(30, 380 + k1.h + 15, 840, 56, ['Area 300 times smaller → pressure 300 times larger: enough to dent a wooden floor.'], { size: 18 })),
    'A 600 N person in flat shoes (300 cm² = 0.030 m²) exerts 20 000 Pa on the floor. Balanced on one stiletto heel of 1.0 cm² (0.000 10 m²) the same force gives 6 000 000 Pa, 300 times more.',
    'Same force on 1/300 of the area gives 300 times the pressure.',
    '## Pressure = force ÷ area');
}

// 03 Brick on different faces
{
  const k = calc(470, 140, 400, 'Worked example 2', ['W = 2.4 × 9.8 = 23.5 N', 'end face 50 cm² = 0.0050 m²', ['p = 23.5 / 0.0050 = 4700 Pa', 700, C.rust], 'big face 200 cm² = 0.020 m²', ['p = 23.5 / 0.020 = 1200 Pa', 700, C.tealDark]], { lh: 32, size: 18 });
  add('03-brick-faces',
    svg(900, 520, 'One brick, two pressures',
      panel(30, 110, 420, 380) +
      box3d(70, 340, 160, 40, 50, 40, '#d9a37a') + t(150, 410, 'flat: 20 × 10 cm', { size: 16, weight: 700, anchor: 'middle' }) + t(150, 432, 'smallest pressure', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 700 }) +
      box3d(320, 220, 40, 160, 25, 20, '#d9a37a') + t(350, 410, 'on end: 10 × 5.0 cm', { size: 16, weight: 700, anchor: 'middle' }) + t(350, 432, 'largest pressure', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 }) +
      W(50, 381, 430, 381, C.ink, 3) + t(240, 150, 'mass 2.4 kg, 20 cm × 10 cm × 5.0 cm', { size: 16, anchor: 'middle', fill: C.muted }) + t(240, 470, 'same weight on every face', { size: 16, anchor: 'middle', fill: C.muted }) +
      k.s),
    'A 2.4 kg brick measuring 20 cm × 10 cm × 5.0 cm weighs 23.5 N. Standing on its 10 cm × 5.0 cm end (0.0050 m²) it exerts 4700 Pa; lying on its 20 cm × 10 cm face (0.020 m²) it exerts about 1200 Pa.',
    'The weight stays the same; the face in contact sets the pressure.',
    '## Pressure = force ÷ area');
}

// 04 Drawing pin
{
  let s = rect(300, 300, 300, 120, '#d9b27a', C.ink, 3) + rect(380, 170, 140, 18, C.mustard, C.ink, 3, 4) + `<path d="M440,188 L450,330 L460,188 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<path d="M380,140 Q450,110 520,140 L520,168 L380,168 Z" fill="#e8c9a8" stroke="${C.ink}" stroke-width="2.5"/>` + t(372, 150, 'thumb', { size: 15, anchor: 'end', fill: C.muted });
  s += t(330, 440, 'board', { size: 15, fill: C.muted });
  s += arrow(560, 200, 525, 182, { w: 3 }) + tl(570, 200, ['large head: low pressure,', 'no pain'], { size: 17, weight: 700, fill: C.tealDark }, 22);
  s += arrow(615, 325, 458, 326, { w: 3 }) + tl(625, 320, ['tiny point: high', 'pressure, the pin', 'goes in'], { size: 17, weight: 700, fill: C.rust }, 22);
  const ex = [['large area → low pressure', 'snowshoes, skis, wide tractor tyres, bag straps, foundations', C.tealLight, C.tealDark], ['small area → high pressure', 'knife blade, drawing pin, needle, nail, football studs', C.cream, C.rust]];
  let e = ''; ex.forEach(([h, l, f, c], i) => { const y = 480 + i * 80; e += `<rect x="30" y="${y}" width="840" height="68" rx="12" fill="${f}" stroke="${c}" stroke-width="2"/>` + t(55, y + 28, h, { size: 18, weight: 700, fill: c }) + t(55, y + 54, l, { size: 16 }); });
  add('04-drawing-pin-and-examples',
    svg(900, 660, 'Same force, different areas',
      panel(30, 110, 840, 355) + t(60, 150, 'A drawing pin', { size: 20, weight: 700 }) + s + e),
    'A thumb pushes a drawing pin into a board. The same force acts on the large head, giving a low pressure on the thumb, and on the tiny point, giving a high pressure that drives the pin in. Large areas such as snowshoes and tractor tyres lower the pressure; small areas such as knife blades and needles raise it.',
    'For the same force, a smaller area gives a larger pressure.',
    '## Everyday examples');
}

// 05 Pressure in liquids
{
  let s = `<path d="M90,160 L90,500 L300,500 L300,160" fill="none" stroke="${C.ink}" stroke-width="4"/>` + `<rect x="92" y="190" width="206" height="308" fill="${C.teal}"/>`;
  [[250, 40], [350, 85], [450, 130]].forEach(([y, r]) => { s += path(`M300,${y} Q${300 + r * 0.7},${y} ${300 + r},${y + 45}`, { stroke: C.tealDark, w: 4 }); });
  s += t(195, 530, 'deeper hole: faster jet', { size: 16, anchor: 'middle', weight: 700 });
  // dam
  let d = `<path d="M560,180 L620,180 L700,500 L560,500 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>` + `<rect x="470" y="200" width="88" height="298" fill="${C.teal}"/>` + W(470, 500, 840, 500, C.ink, 3);
  [250, 340, 430].forEach((y, i) => { d += arrow(490, y, 520 + i * 12, y, { w: 3 + i * 1.5, color: C.rust, marker: 'ahR' }); });
  d += t(660, 530, 'dam: thicker at the bottom', { size: 16, anchor: 'middle', weight: 700 });
  // all directions
  let a = circ(760, 300, 6, C.ink) + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => { const q = (g * Math.PI) / 180; return arrow(760, 300, 760 + 40 * Math.cos(q), 300 + 40 * Math.sin(q), { w: 2.5, color: C.tealDark, marker: 'ahT' }); }).join('') + t(760, 370, 'acts in all', { size: 15, anchor: 'middle' }) + t(760, 390, 'directions', { size: 15, anchor: 'middle' });
  add('05-liquid-pressure-depth',
    svg(900, 660, 'Pressure in a liquid increases with depth',
      panel(30, 110, 840, 450) + s + d + a +
      note(30, 575, 840, 64, ['Greater with depth and with density; not affected by the container\'s shape or width.'], { size: 18, fill: C.cream })),
    'Water squirts furthest from the lowest of three holes in a tall container, because pressure increases with depth. A dam is thicker at the bottom where the water pressure is greatest. At a point in a liquid the pressure acts in all directions.',
    'Deeper or denser liquid means more pressure; shape does not matter.',
    '## Pressure in liquids');
}

// 06 Δp = ρgΔh (Extended)
{
  let s = `<rect x="60" y="170" width="380" height="330" fill="${C.teal}"/>` + W(60, 170, 440, 170, C.tealDark, 3) + t(70, 160, 'sea surface', { size: 15, fill: C.tealDark });
  s += circ(300, 450, 16, C.mustard, C.ink, 2.5) + dim(380, 172, 380, 448, '') + t(392, 316, '25 m', { size: 18, weight: 700 }) + t(300, 488, 'diver', { size: 15, anchor: 'middle' });
  s += t(80, 200, 'ρ = 1030 kg/m³', { size: 16, weight: 700, fill: C.ink });
  const k1 = calc(470, 140, 400, 'Worked example 3', ['Δp = ρ g Δh = 1030 × 9.8 × 25', ['= 252 350 Pa ≈ 2.5 × 10⁵ Pa', 700, C.rust], 'total pressure: add the', 'atmosphere\'s pressure'], { lh: 30, size: 17 });
  const k2 = calc(470, 140 + k1.h + 14, 400, 'Examples 4 and 5', ['0.40 m of oil: 800 × 9.8 × 0.40 ≈ 3100 Pa', '0.40 m of water: 1000 × 9.8 × 0.40 ≈ 3900 Pa', ['49 000 Pa in water: Δh = 49 000 / 9800 = 5.0 m', 600, C.olive]], { lh: 30, size: 16 });
  add('06-delta-p-rho-g-h',
    svg(900, Math.max(540, 140 + k1.h + 14 + k2.h + 30), 'Δp = ρ g Δh',
      ext(30, 72) + panel(30, 110, 430, 420) + s + k1.s + k2.s),
    'A diver 25 m below the surface of sea water of density 1030 kg/m³ experiences an extra pressure of 1030 × 9.8 × 25 = 252 350 Pa, about 2.5 × 10⁵ Pa, on top of atmospheric pressure. At 0.40 m the pressure due to oil (800 kg/m³) is about 3100 Pa and due to water about 3900 Pa; 49 000 Pa in water is reached at 5.0 m.',
    'Use the vertical depth below the surface and density in kg/m³.',
    '## Δp = ρgΔh (Extended only)');
}
