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
  lamp: (x, y, deg = 0, hw = 35) => W(x - hw, y, x - 18, y) + W(x + 18, y, x + hw, y) + circ(x, y, 18) + W(x - 12.7, y - 12.7, x + 12.7, y + 12.7, C.ink, 2.5) + W(x - 12.7, y + 12.7, x + 12.7, y - 12.7, C.ink, 2.5),
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

export const slug = 'cambridge-igcse-physics-0625-density';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// oblique cuboid: front face at (x,y,w,h), depth offset dx,dy
const box3d = (x, y, w, h, dx, dy, fill = C.cream) =>
  `<path d="M${x},${y} L${x + dx},${y - dy} L${x + w + dx},${y - dy} L${x + w},${y} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
  `<path d="M${x + w},${y} L${x + w + dx},${y - dy} L${x + w + dx},${y + h - dy} L${x + w},${y + h} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
  rect(x, y, w, h, fill, C.ink, 3);
const balance = (cx, y, reading, bw = 240) => rect(cx - bw / 2 + 10, y, bw - 20, 18, C.rock, C.ink, 3, 4) + rect(cx - bw / 2, y + 18, bw, 56, C.panel, C.ink, 3, 8) +
  rect(cx - 60, y + 30, 120, 34, C.ink, C.ink, 2, 5) + t(cx, y + 56, reading, { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' });
// measuring cylinder: x,y top-left, w,h; level fraction; liquid colour
const cyl = (x, y, w, h, lvl, liq = C.teal, marks = 10) => {
  let s = rect(x, y, w, h, '#ffffff', C.ink, 3, 6);
  const ly = y + h - lvl * h;
  s += `<rect x="${x + 2}" y="${ly}" width="${w - 4}" height="${y + h - ly - 2}" fill="${liq}"/>` + path(`M${x + 2},${ly - 4} Q${x + w / 2},${ly + 6} ${x + w - 2},${ly - 4}`, { stroke: C.tealDark, w: 2.5 });
  for (let i = 1; i < marks; i++) { const my = y + h - (i * h) / marks; s += W(x, my, x + (i % 2 ? 12 : 20), my, C.ink, 2); }
  return s + rect(x - 14, y + h, w + 28, 10, C.panel, C.ink, 3, 3);
};

// 01 Equation and units
{
  const tx = 230, ty = 140; // triangle apex
  const tri = `<path d="M${tx},${ty} L${tx + 150},${ty + 250} L${tx - 150},${ty + 250} Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5" stroke-linejoin="round"/>` +
    W(tx - 76, ty + 127, tx + 76, ty + 127, C.ink, 3) + W(tx, ty + 127, tx, ty + 250, C.ink, 3) +
    t(tx, ty + 105, 'm', { size: 46, weight: 700, anchor: 'middle', italic: true }) + t(tx - 60, ty + 210, 'ρ', { size: 46, weight: 700, anchor: 'middle', italic: true }) + t(tx + 60, ty + 210, 'V', { size: 46, weight: 700, anchor: 'middle', italic: true });
  const eqs = [['ρ = m / V', 'density = mass ÷ volume'], ['m = ρ V', 'mass = density × volume'], ['V = m / ρ', 'volume = mass ÷ density']];
  let eq = '';
  eqs.forEach(([a, b], i) => { eq += t(60, 470 + i * 52, a, { size: 24, weight: 700 }) + t(200, 470 + i * 52, b, { size: 18, fill: C.muted }); });
  const R = 480;
  const pair = (y, m, v, r) => rect(R, y, 380, 62, C.tealLight, C.tealDark, 2.5, 12) + t(R + 20, y + 39, `${m} and ${v}`, { size: 19, weight: 600 }) + arrow(R + 175, y + 32, R + 230, y + 32, { w: 3 }) + t(R + 245, y + 40, r, { size: 22, weight: 700, fill: C.tealDark });
  add('01-density-equation-units',
    svg(900, 660, 'Density: mass per unit volume',
      panel(30, 110, 410, 520) + tri +
      panel(460, 110, 410, 520) + t(R + 10, 150, 'Keep the units matched', { size: 21, weight: 700 }) +
      pair(170, 'kg', 'm³', 'kg/m³') + pair(245, 'g', 'cm³', 'g/cm³') +
      t(R + 10, 360, 'Converting g/cm³ to kg/m³', { size: 21, weight: 700 }) +
      t(R + 10, 398, '1 g = 0.001 kg', { size: 19 }) + t(R + 10, 428, '1 cm³ = 0.000 001 m³', { size: 19 }) +
      t(R + 10, 466, '1 g/cm³ = 0.001 ÷ 0.000 001', { size: 19 }) + t(R + 88, 496, '= 1000 kg/m³', { size: 22, weight: 700, fill: C.rust }) +
      note(R, 528, 380, 80, ['Water: about 1.0 g/cm³', '= 1000 kg/m³'], { size: 19 }) + eq),
    'A formula triangle with m on top and ρ and V below gives ρ = m/V, m = ρV and V = m/ρ. Beside it, kilograms with cubic metres give kg/m³ and grams with cubic centimetres give g/cm³, and 1 g/cm³ = 0.001 ÷ 0.000 001 = 1000 kg/m³; water is about 1.0 g/cm³ or 1000 kg/m³.',
    'ρ = m/V, with mass and volume in matching units; 1 g/cm³ = 1000 kg/m³.',
    '## Density and its units');
}

// 02 Cutting a block does not change density
{
  const blk = (x, w, lbl) => box3d(x, 230, w, 150, 50, 40, '#e3b98f') + t(x + w / 2, 430, lbl[0], { size: 20, weight: 700, anchor: 'middle' }) + t(x + w / 2, 460, lbl[1], { size: 19, anchor: 'middle', fill: C.muted }) + t(x + w / 2, 490, lbl[2], { size: 19, anchor: 'middle', fill: C.muted });
  add('02-density-is-a-material-property',
    svg(900, 620, 'Cut the block: the density stays the same',
      panel(30, 110, 840, 480) +
      blk(80, 220, ['whole copper block', 'mass m, volume V', 'density m / V']) +
      arrow(395, 300, 470, 300, { w: 4 }) + t(432, 280, 'cut', { size: 18, anchor: 'middle', weight: 600 }) +
      blk(510, 100, ['each half', 'm/2 and V/2', '']) + blk(680, 100, ['', '', '']) +
      t(680, 490, 'density = (m/2) ÷ (V/2) = m / V', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) +
      note(80, 515, 740, 52, ['Density belongs to the material, so it can help identify the material.'], { size: 19 })),
    'A copper block of mass m and volume V is cut into two halves. Each half has mass m/2 and volume V/2, so its density (m/2) ÷ (V/2) is still m/V.',
    'Halving mass and volume together leaves the density unchanged.',
    '## Density and its units');
}

// 03 Worked example 1: paving slab
{
  const c = calc(470, 140, 400, 'Worked example 1', ['V = 0.60 × 0.40 × 0.050', ['   = 0.012 m³'], 'm = ρ V = 2400 × 0.012', ['   = 28.8 kg'], 'W = m g = 28.8 × 9.8', ['   = 282 N  (about 280 N)', 700, C.rust]], { lh: 34 });
  add('03-slab-worked-example',
    svg(900, 520, 'Mass and weight of a concrete slab',
      panel(30, 110, 420, 380) + box3d(100, 260, 240, 40, 80, 70, C.rock) +
      dim(100, 330, 340, 330, '0.60 m', { ly: 360 }) + dim(354, 302, 425, 240, '') + t(384, 305, '0.40 m', { size: 17, weight: 700 }) +
      dim(80, 262, 80, 298, '') + t(36, 230, '0.050 m', { size: 17, weight: 700 }) +
      t(240, 165, 'concrete: ρ = 2400 kg/m³', { size: 18, weight: 600, anchor: 'middle' }) + t(240, 420, 'g = 9.8 N/kg', { size: 18, anchor: 'middle', fill: C.muted }) +
      t(240, 455, 'metres → m³ → pairs with kg/m³', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 }) + c.s),
    'A concrete slab 0.60 m by 0.40 m by 0.050 m with density 2400 kg/m³. Its volume is 0.012 m³, its mass 2400 × 0.012 = 28.8 kg and its weight 28.8 × 9.8 = 282 N.',
    'Find the volume in m³ first, then m = ρV, then W = mg.',
    '## Density and its units');
}

// 04 Regular solid and liquid
{
  const L = 30, R = 460;
  const cl = calc(L + 20, 470, 370, 'Calculation', ['V = 5.0 × 3.0 × 2.0 = 30 cm³', 'ρ = 255 / 30', ['   = 8.5 g/cm³ = 8500 kg/m³', 700, C.rust]], { lh: 32, size: 18 });
  const cr = calc(R + 20, 470, 370, 'Calculation', ['mass = 126.4 − 86.4 = 40.0 g', 'ρ = 40.0 / 50.0', ['   = 0.800 g/cm³', 700, C.rust]], { lh: 32, size: 18 });
  add('04-regular-solid-and-liquid',
    svg(900, 700, 'Finding density: regular solid and liquid',
      panel(L, 110, 410, 560) + head(L, 110, 410, 'Brass cuboid') +
      box3d(L + 110, 310, 150, 70, 50, 40, '#e3b98f') + t(L + 185, 302, '5.0 cm', { size: 17, weight: 700, anchor: 'middle' }) + t(L + 318, 296, '3.0 cm', { size: 17, weight: 700 }) + t(L + 100, 352, '2.0 cm', { size: 17, weight: 700, anchor: 'end' }) +
      t(L + 205, 200, 'ruler gives the sides', { size: 17, anchor: 'middle', fill: C.muted }) +
      balance(L + 205, 380, '255 g', 260) + cl.s +
      panel(R, 110, 410, 560) + head(R, 110, 410, 'A liquid') +
      cyl(R + 70, 200, 70, 170, 0) + balance(R + 105, 390, '86.4 g', 180) +
      cyl(R + 270, 200, 70, 170, 0.62) + balance(R + 305, 390, '126.4 g', 180) +
      t(R + 105, 190, 'empty', { size: 17, anchor: 'middle', weight: 600 }) + t(R + 305, 190, '50.0 cm³ liquid', { size: 17, anchor: 'middle', weight: 600 }) + cr.s),
    'Left: a brass cuboid 5.0 cm by 3.0 cm by 2.0 cm on a balance reading 255 g; V = 30 cm³ and ρ = 255/30 = 8.5 g/cm³ = 8500 kg/m³. Right: an empty measuring cylinder reads 86.4 g and 126.4 g with 50.0 cm³ of liquid, so the liquid has mass 40.0 g and density 0.800 g/cm³.',
    'Volume from a ruler or a measuring cylinder; mass from a balance; then ρ = m/V.',
    '## The three experiments');
}

// 05 Displacement methods
{
  const L = 30, R = 460;
  const stone = (x, y) => `<path d="M${x - 22},${y} l10,-16 l22,-2 l14,14 l-6,18 l-26,4 z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  // method A
  let a = cyl(L + 60, 190, 80, 240, 0.4) + cyl(L + 250, 190, 80, 240, 0.58) + W(L + 290, 190 - 30, L + 290, 190 + 240 - 0.25 * 240 - 20, C.ink, 2) + stone(L + 290, 190 + 240 - 0.2 * 240);
  a += `<rect x="${L + 252}" y="${190 + 240 - 0.58 * 240}" width="76" height="${0.18 * 240}" fill="${C.mustard}" opacity="0.55"/>`;
  a += dim(L + 352, 190 + 240 - 0.58 * 240, L + 352, 190 + 240 - 0.4 * 240, '') + t(L + 362, 190 + 240 - 0.49 * 240 + 6, 'rise', { size: 17, weight: 700 });
  a += W(L + 140, 190 + 240 - 0.4 * 240, L + 252, 190 + 240 - 0.4 * 240, C.muted, 2).replace('/>', ' stroke-dasharray="6 5"/>');
  a += t(L + 100, 470, 'before', { size: 18, weight: 600, anchor: 'middle' }) + t(L + 290, 470, 'object on thread', { size: 18, weight: 600, anchor: 'middle' }) + t(L + 290, 492, 'fully covered', { size: 18, weight: 600, anchor: 'middle' });
  // method B: overflow can
  const cx = R + 30, cy = 230, cw = 130, ch = 200;
  let b = `<path d="M${cx},${cy} L${cx},${cy + ch} L${cx + cw},${cy + ch} L${cx + cw},${cy}" fill="none" stroke="${C.ink}" stroke-width="3"/>` +
    `<rect x="${cx + 2}" y="${cy + 30}" width="${cw - 4}" height="${ch - 32}" fill="${C.teal}"/>` +
    `<path d="M${cx + cw},${cy + 30} L${cx + cw + 70},${cy + 60} L${cx + cw + 70},${cy + 72} L${cx + cw},${cy + 44}" fill="${C.teal}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
    W(cx + 65, 160, cx + 65, cy + 120, C.ink, 2) + stone(cx + 65, cy + 140) +
    path(`M${cx + cw + 72},${cy + 74} q4,30 0,70`, { stroke: C.tealDark, w: 4 }) +
    cyl(cx + cw + 40, cy + 120, 64, 150, 0.35) +
    t(cx + 65, cy + ch + 40, 'displacement can', { size: 18, weight: 600, anchor: 'middle' }) + tl(cx + cw + 120, cy + 160, ['water', 'collected', '= object', 'volume'], { size: 18, weight: 700, fill: C.rust }, 24);
  add('05-volume-by-displacement',
    svg(900, 760, 'Volume of an irregular solid that sinks',
      panel(L, 110, 410, 420) + head(L, 110, 410, 'A: measuring cylinder') + a +
      panel(R, 110, 410, 420) + head(R, 110, 410, 'B: displacement (overflow) can') + b +
      t(L + 205, 515, 'volume = rise in reading', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) +
      panel(30, 550, 840, 180) + t(60, 590, 'Precautions', { size: 21, weight: 700 }) +
      tl(60, 625, ['• lower it gently: no splashes', '• fully under the water', '• fill the can until it stops dripping first'], { size: 18 }, 30) +
      tl(470, 625, ['• tap off air bubbles', '• find the mass before it gets wet', '• only for objects that sink'], { size: 18 }, 30)),
    'Method A: a stone on a thread is lowered into a part-filled measuring cylinder and its volume is the rise in the reading. Method B: the stone is lowered into a full displacement can and the water that runs out of the spout into a measuring cylinder equals its volume. Precautions are listed below.',
    'The object\'s volume is the rise in level, or the volume of water pushed out.',
    '## The three experiments');
}

// 06 Floating and sinking
{
  const tx = 60, ty = 200, tw = 520, th = 300, wl = ty + 60;
  const obj = (x, w, h, sub, fill, lbl, d) => { const y = sub >= 1 ? ty + th - h - 3 : wl - h * (1 - sub); return rect(x, y, w, h, fill, C.ink, 3, 4) + t(x + w / 2, sub >= 1 ? y - 12 : y - 14, lbl, { size: 17, weight: 700, anchor: 'middle' }) + t(x + w / 2, sub >= 1 ? y - 32 : y - 34, d + ' g/cm³', { size: 16, anchor: 'middle', fill: C.muted }); };
  add('06-float-or-sink',
    svg(900, 600, 'Float or sink? Compare the densities',
      panel(30, 110, 840, 460) +
      `<rect x="${tx}" y="${wl}" width="${tw}" height="${ty + th - wl}" fill="${C.teal}"/>` + `<path d="M${tx},${ty} L${tx},${ty + th} L${tx + tw},${ty + th} L${tx + tw},${ty}" fill="none" stroke="${C.ink}" stroke-width="3.5"/>` +
      W(tx, wl, tx + tw, wl, C.tealDark, 2.5) + t(tx + 20, ty + th - 16, 'water 1.0 g/cm³', { size: 18, weight: 700, fill: C.tealDark }) +
      obj(tx + 30, 90, 70, 0.92, '#ffffff', 'ice', '0.92') + obj(tx + 160, 100, 50, 0.5, '#d9b27a', 'pine', '0.50') +
      obj(tx + 290, 80, 50, 1, '#e3b98f', 'brass', '8.5') + obj(tx + 410, 80, 50, 1, C.mustard, 'plastic', '1.2') +
      note(610, 170, 240, 150, ['less dense than', 'the liquid', '→ FLOATS'], { fill: C.tealLight, edge: C.tealDark, size: 19 }) +
      note(610, 340, 240, 150, ['denser than', 'the liquid', '→ SINKS'], { fill: C.cream, edge: C.rust, size: 19 }) +
      t(450, 545, 'Given mass and volume? Work out ρ = m/V first, then compare.', { size: 18, anchor: 'middle', weight: 600 })),
    'A tank of water of density 1.0 g/cm³. Ice (0.92 g/cm³) and a pine block (0.50 g/cm³) float, while brass (8.5 g/cm³) and plastic of density 1.2 g/cm³ rest on the bottom.',
    'An object floats if it is less dense than the liquid and sinks if it is denser.',
    '## Floating and sinking');
}

// 07 Liquid layers (Extended)
{
  const jx = 110, jy = 160, jw = 260, jh = 390;
  const lay = (y, h, fill, lbl) => `<rect x="${jx + 3}" y="${y}" width="${jw - 6}" height="${h}" fill="${fill}"/>` + t(jx + jw / 2, y + h / 2 + 7, lbl, { size: 19, weight: 700, anchor: 'middle' });
  const y1 = jy + 50, y2 = y1 + 110, y3 = y2 + 110;
  const sx = 560, sy = (d) => 200 + ((d - 0.8) / 0.5) * 360; // denser lower, like the jar
  add('07-liquid-layers',
    svg(900, 640, 'Liquids that do not mix form layers',
      t(450, 92, 'Extended only', { size: 18, anchor: 'middle', fill: C.rust, weight: 700 }) +
      panel(30, 110, 840, 500) +
      lay(y1, 110, '#f2e7b8', 'Y  0.86 g/cm³') + lay(y2, 110, C.tealLight, 'water  1.00 g/cm³') + lay(y3, jy + jh - y3 - 3, '#d9a37a', 'X  1.26 g/cm³') +
      `<path d="M${jx},${jy} L${jx},${jy + jh} L${jx + jw},${jy + jh} L${jx + jw},${jy}" fill="none" stroke="${C.ink}" stroke-width="3.5"/>` +
      W(jx, y2, jx + jw, y2, C.ink, 1.5) + W(jx, y3, jx + jw, y3, C.ink, 1.5) +
      circ(jx + 205, y2 + 2, 12, C.rust, C.ink, 2.5) + arrow(jx + 300, y2 - 40, jx + 222, y2 - 16, { w: 3 }) + t(jx + 290, y2 - 50, 'bead 0.95', { size: 17, weight: 700, fill: C.rust }) +
      t(jx + jw / 2, jy + jh + 32, 'densest at the bottom', { size: 17, anchor: 'middle', fill: C.muted }) +
      // density scale
      arrow(sx, 170, sx, 580, { w: 2.5 }) + t(sx, 155, 'density / g/cm³ (increasing downwards)', { size: 17, anchor: 'middle', weight: 600 }) +
      [[0.86, 'Y'], [1.0, 'water'], [1.26, 'X']].map(([d, n]) => W(sx - 8, sy(d), sx + 8, sy(d), C.ink, 3) + t(sx - 16, sy(d) + 6, d.toFixed(2), { size: 17, anchor: 'end' }) + t(sx + 18, sy(d) + 6, n, { size: 18, weight: 700 })).join('') +
      circ(sx, sy(0.95), 9, C.rust, C.ink, 2) + t(sx + 18, sy(0.95) + 6, 'bead 0.95', { size: 18, weight: 700, fill: C.rust }) +
      note(600, 440, 250, 110, ['bead: denser than Y,', 'so sinks through Y;', 'less dense than water,', 'so floats on it'], { size: 16, lh: 22, weight: 600 })),
    'A jar holds three liquids that do not mix: Y (0.86 g/cm³) on top, water (1.00 g/cm³) in the middle and X (1.26 g/cm³) at the bottom. A bead of density 0.95 g/cm³ sinks through Y but floats on the water, so it rests at the Y–water boundary.',
    'Layers stack in order of density; an object settles between a less dense and a denser liquid.',
    '## Floating and sinking');
}
