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

export const slug = 'cambridge-igcse-physics-0625-thermal-properties-and-temperature';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const pt = (x, y, r = 9, f = '#ffffff') => circ(x, y, r, f, C.tealDark, 2);

// 01 Expansion: gases most, solids least
{
  const row = (y, lbl, len, col, note0) => t(60, y + 30, lbl, { size: 20, weight: 700 }) + rect(200, y + 6, 300, 36, C.panelEdge, C.ink, 2, 6) + rect(200, y + 6, 300 + len, 36, col, C.ink, 2, 6) + rect(200, y + 6, 300, 36, 'none', C.ink, 2.5, 6).replace('stroke-width="2.5"', 'stroke-width="2.5" stroke-dasharray="6 4"') + t(510 + len + 8, y + 31, note0, { size: 16, weight: 700 });
  add('01-expansion-order',
    svg(900, 600, 'Thermal expansion: gas > liquid > solid',
      panel(30, 110, 840, 260) + t(450, 145, 'same temperature rise, constant pressure (sizes illustrative)', { size: 16, anchor: 'middle', fill: C.muted }) +
      row(165, 'solid', 8, C.rock, 'least') + row(225, 'liquid', 40, C.teal, 'more') + row(285, 'gas', 150, C.cream, 'most') +
      ext(30, 385) + panel(30, 425, 840, 150) +
      tl(60, 465, ['Solid: strong forces hold particles in fixed positions; they vibrate further apart only slightly.', 'Liquid: particles close but forces weaker, so they move apart more easily.', 'Gas: particles far apart, very weak forces; they push the walls or a piston out much more.'], { size: 16 }, 34)),
    'Bars show that for the same temperature rise at constant pressure a solid expands least, a liquid more and a gas most. For Extended: strong forces hold solid particles in place; liquid particles are close but less strongly held; gas particles are far apart with very weak forces.',
    'Weaker forces between particles mean more expansion.',
    '## Thermal expansion (2.2.1)');
}

// 02 Applications of expansion
{
  const card = (x, y, w, h, title) => panel(x, y, w, h) + t(x + 20, y + 34, title, { size: 18, weight: 700 });
  // rail gap
  let a = card(30, 110, 410, 230, 'Gaps in railway tracks') + rect(60, 220, 160, 26, C.rock, C.ink, 2.5) + rect(236, 220, 170, 26, C.rock, C.ink, 2.5) + arrow(228, 290, 228, 252, { w: 2.5 }) + t(228, 306, 'gap', { size: 15, anchor: 'middle', weight: 700 }) + t(235, 196, 'rails lengthen on hot days', { size: 15, anchor: 'middle', fill: C.muted }) + t(235, 330, 'without gaps the rails would buckle', { size: 15, anchor: 'middle', fill: C.muted });
  // bimetallic strip
  let b = card(460, 110, 410, 230, 'Bimetallic strip (thermostat)') + rect(480, 180, 20, 90, C.ink, C.ink, 1) +
    path('M500,200 Q640,200 760,255', { stroke: C.rust, w: 12 }) + path('M500,212 Q635,212 754,266', { stroke: C.blue, w: 12 }) +
    path('M500,206 L780,206', { stroke: C.muted, w: 2, extra: 'stroke-dasharray="6 5"' }) + t(790, 210, 'cold', { size: 15, fill: C.muted }) + t(640, 275, 'hot: bends', { size: 15, weight: 700 }) +
    t(560, 305, 'top metal expands more, so the strip', { size: 15, fill: C.muted }) + t(560, 325, 'bends and opens or closes a switch', { size: 15, fill: C.muted });
  // thermometer
  let c = card(30, 355, 410, 230, 'Liquid-in-glass thermometer') + rect(90, 470, 280, 20, '#ffffff', C.ink, 2.5, 10) + circ(85, 480, 22, C.rust, C.ink, 2.5) + rect(85, 474, 170, 12, C.rust, C.rust, 1, 4) + arrow(260, 452, 320, 452, { w: 3, color: C.rust, marker: 'ahR' }) + t(235, 530, 'liquid expands more than the glass', { size: 15, anchor: 'middle', fill: C.muted }) + t(235, 552, 'and rises up the narrow tube', { size: 15, anchor: 'middle', fill: C.muted });
  // cables
  let d = card(460, 355, 410, 230, 'Overhead power cables') + rect(500, 420, 12, 120, C.rockDark, C.ink, 2) + rect(818, 420, 12, 120, C.rockDark, C.ink, 2) + path('M512,425 Q665,505 818,425', { stroke: C.ink, w: 3 }) + path('M512,425 Q665,450 818,425', { stroke: C.muted, w: 2, extra: 'stroke-dasharray="6 5"' }) + t(665, 522, 'hung slack', { size: 15, anchor: 'middle', weight: 700 }) + t(665, 565, 'contract on cold days: tight cables could snap', { size: 15, anchor: 'middle', fill: C.muted });
  add('02-expansion-applications',
    svg(900, 610, 'Allowing for expansion', a + b + c + d),
    'Four applications: gaps between rails allow them to lengthen on hot days without buckling; a bimetallic strip bends when heated because one metal expands more, operating a switch; the liquid in a thermometer expands more than the glass and rises up the tube; overhead cables are hung slack so they can contract in cold weather without snapping.',
    'Engineers leave room for expansion, or use it.',
    '## Thermal expansion (2.2.1)');
}

// 03 Specific heat capacity examples
{
  const k1 = calc(30, 150, 410, 'Worked example 1', ['0.50 kg of water, 20 °C → 80 °C', 'c = 4200 J/(kg °C)', 'Δθ = 80 − 20 = 60 °C', 'ΔE = m c Δθ = 0.50 × 4200 × 60', ['= 126 000 J', 700, C.rust]], { lh: 32, size: 18 });
  const k2 = calc(460, 150, 410, 'Worked example 2', ['2.0 kg metal, c = 450 J/(kg °C)', 'receives 18 000 J', 'Δθ = ΔE / (m c)', '= 18 000 / (2.0 × 450)', ['= 20 °C', 700, C.rust]], { lh: 32, size: 18 });
  add('03-specific-heat-capacity',
    svg(900, 150 + k1.h + 140, 'Specific heat capacity: ΔE = m c Δθ',
      t(450, 100, 'c = energy per unit mass per unit temperature increase, J/(kg °C)', { size: 18, anchor: 'middle', fill: C.muted }) + k1.s + k2.s +
      note(30, 150 + k1.h + 20, 840, 90, ['Use the temperature change Δθ and mass in kg.', 'Water (about 4200 J/(kg °C)) needs far more energy per °C than metals.'], { size: 18, lh: 28, fill: C.cream })),
    'Heating 0.50 kg of water from 20 °C to 80 °C needs 0.50 × 4200 × 60 = 126 000 J. A 2.0 kg metal block with c = 450 J/(kg °C) given 18 000 J warms by 18 000 / (2.0 × 450) = 20 °C.',
    'Energy = mass × specific heat capacity × temperature change.',
    '## Specific heat capacity (2.2.2)');
}

// 04 Liquid experiment (Extended)
{
  let s = `<path d="M110,260 L130,470 L290,470 L310,260" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>` + `<path d="M118,300 L132,465 L288,465 L302,300 Z" fill="${C.teal}"/>` + rect(100, 248, 220, 14, C.sand, C.ink, 2, 4) + t(210, 244, 'lid', { size: 14, anchor: 'middle', fill: C.muted });
  s += rect(160, 200, 16, 240, C.rockDark, C.ink, 2, 4) + t(150, 196, 'heater', { size: 15, anchor: 'end' }) + rect(240, 180, 10, 250, '#ffffff', C.ink, 2, 5) + circ(245, 432, 9, C.rust, C.ink, 2) + rect(242, 330, 6, 100, C.rust, C.rust, 1) + t(260, 190, 'thermometer', { size: 15 });
  s += rect(400, 220, 150, 80, C.ink, C.ink, 2, 8) + t(475, 268, '12 600 J', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(475, 320, 'joulemeter', { size: 15, anchor: 'middle' }) + path('M168,200 L168,160 L475,160 L475,220', { stroke: C.ink, w: 2.5 });
  s += rect(330, 400, 170, 60, '#ffffff', C.ink, 2.5, 6) + t(415, 437, 'balance', { size: 15, anchor: 'middle', fill: C.muted }) + t(415, 490, 'mass of water = 0.40 kg', { size: 16, anchor: 'middle', weight: 700 });
  const k = calc(590, 140, 280, 'Sample results', ['ΔE = 12 600 J', 'm = 0.40 kg', 'Δθ = 7.2 °C', 'c = 12 600 / (0.40 × 7.2)', ['= 4375 J/(kg °C)', 700, C.rust], ['≈ 4400 J/(kg °C)', 700, C.rust]], { lh: 30, size: 17 });
  add('04-liquid-shc-experiment',
    svg(900, 640, 'Measuring the specific heat capacity of water',
      ext(30, 72) + panel(30, 110, 545, 400) + s + k.s +
      note(30, 525, 840, 90, ['Stir; record the highest temperature after switching off. The value is above 4200 J/(kg °C)', 'because some energy heated the beaker and surroundings: use a lid and insulation.'], { size: 16, lh: 26, fill: C.cream })),
    'An insulated beaker of 0.40 kg of water with an immersion heater connected to a joulemeter, a thermometer and a lid. 12 600 J raises the temperature by 7.2 °C, giving c = 12 600 / (0.40 × 7.2) = 4375 J/(kg °C), about 4400, higher than 4200 because some energy heats the beaker and surroundings.',
    'Measure mass, energy and temperature rise; energy losses make c come out too high.',
    '## Specific heat capacity (2.2.2)');
}

// 05 Evaporation
{
  let s = rect(80, 300, 340, 150, C.teal, C.ink, 3, 4) + W(80, 300, 420, 300, C.tealDark, 3);
  const ps = [[120, 340, 2], [180, 380, 1], [240, 350, 1], [300, 410, 2], [360, 360, 1], [150, 420, 1], [260, 430, 2], [380, 425, 1], [210, 320, 1], [330, 325, 1]];
  ps.forEach(([x, y, sp]) => { s += pt(x, y, 9) + arrow(x + 10, y, x + 10 + sp * 14, y - sp * 8, { w: 2, color: C.olive, marker: 'ahO' }); });
  [[200, 255], [320, 235]].forEach(([x, y]) => { s += circ(x, y, 9, C.mustard, C.ink, 2) + arrow(x, y - 10, x + 8, y - 45, { w: 3, color: C.rust, marker: 'ahR' }); });
  s += t(250, 165, 'most energetic particles escape from the surface', { size: 16, anchor: 'middle', weight: 700, fill: C.rust });
  s += t(250, 480, 'average KE of those left falls: liquid cools', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark });
  const f = ['higher temperature', 'larger surface area', 'air moving over the surface'];
  let r = t(480, 165, 'Faster evaporation (Extended):', { size: 18, weight: 700 });
  f.forEach((x, i) => { r += `<rect x="480" y="${185 + i * 62}" width="370" height="50" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + t(500, 217 + i * 62, x, { size: 17, weight: 600 }); });
  r += tl(480, 395, ['Cooling an object (Extended): the liquid', 'cools, then the warmer object conducts', 'energy to it, e.g. sweat on skin.'], { size: 16 }, 23);
  add('05-evaporation',
    svg(900, 540, 'Evaporation causes cooling',
      panel(30, 110, 840, 400) + s + r),
    'Particles in a liquid move at a range of speeds; the most energetic ones near the surface escape, so the average kinetic energy of those left falls and the liquid cools. For Extended, evaporation is faster at higher temperature, with a larger surface area and with air moving over the surface, and an object in contact with an evaporating liquid cools too.',
    'The fastest particles leave, so the liquid left behind is cooler.',
    '## Melting, boiling and evaporation (2.2.3)');
}
