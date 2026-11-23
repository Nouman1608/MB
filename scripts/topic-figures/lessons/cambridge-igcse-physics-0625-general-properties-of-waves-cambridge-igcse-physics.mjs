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

export const slug = 'cambridge-igcse-physics-0625-general-properties-of-waves';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const clip = (id, x, y, w, h, body) => `<defs><clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}"/></clipPath></defs><g clip-path="url(#${id})">${body}</g>`;
const WF = (x1, y1, x2, y2, c = C.tealDark, w = 3.5) => W(x1, y1, x2, y2, c, w);
const arc = (cx, cy, r, a1, a2, c = C.tealDark, w = 3.5) => { const p = (a) => `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`; return `<path d="M${p(a1)} A${r},${r} 0 0 1 ${p(a2)}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`; };

// 01 Features of a wave
{
  const x0 = 100, y0 = 300, A = 80, lam = 280;
  let s = W(x0 - 10, y0, 740, y0, C.muted, 2).replace('stroke-linecap="round"', 'stroke-dasharray="8 6"') + t(752, y0 + 6, 'rest position', { size: 16, fill: C.muted });
  s += path(sine(x0, x0 + 2.25 * lam, y0, A, lam), { stroke: C.tealDark, w: 4 });
  const cr1 = x0 + lam / 4, cr2 = cr1 + lam, tr = x0 + 0.75 * lam;
  s += dot(cr1, y0 - A, 7, C.rust) + dot(cr2, y0 - A, 7, C.rust) + t(cr1 - 14, y0 - A + 4, 'crest (peak)', { size: 17, weight: 700, anchor: 'end', fill: C.rust }) + dot(tr, y0 + A, 7, C.blue) + t(tr, y0 + A + 30, 'trough', { size: 17, weight: 700, anchor: 'middle', fill: C.blue });
  s += dim(cr1, y0 - A - 50, cr2, y0 - A - 50, 'wavelength λ', { ly: y0 - A - 60 }) + W(cr1, y0 - A - 58, cr1, y0 - A - 8, C.muted, 1.5) + W(cr2, y0 - A - 58, cr2, y0 - A - 8, C.muted, 1.5);
  s += dim(cr2 + 70, y0, cr2 + 70, y0 - A, '') + W(cr2, y0 - A, cr2 + 80, y0 - A, C.muted, 1.5) + t(cr2 + 82, y0 - A / 2 + 6, 'amplitude', { size: 17, weight: 700 });
  s += t(450, 440, 'amplitude: rest position to crest, not crest to trough', { size: 17, anchor: 'middle', fill: C.muted });
  // wavefront plan view
  let p = '';
  for (let k = 0; k < 7; k++) p += WF(160 + k * 70, 520, 160 + k * 70, 680);
  p += dim(160 + 2 * 70, 700, 160 + 3 * 70, 700, 'λ', { ly: 730 }) + arrow(660, 600, 790, 600, { w: 4 }) + t(725, 585, 'direction', { size: 16, anchor: 'middle' }) + t(60, 560, 'wave-', { size: 17, weight: 700, fill: C.tealDark }) + t(60, 582, 'fronts', { size: 17, weight: 700, fill: C.tealDark });
  add('01-describing-a-wave',
    svg(900, 780, 'Describing a wave',
      panel(30, 110, 840, 350) + s + panel(30, 475, 840, 280) + t(450, 505, 'Seen from above: each line joins crests', { size: 17, anchor: 'middle', fill: C.muted }) + p),
    'A transverse wave drawn against a dashed rest position, with crests and a trough marked. The wavelength is the distance between neighbouring crests and the amplitude is from the rest position to a crest. Below, straight wavefronts seen from above are one wavelength apart.',
    'Wavelength is crest to neighbouring crest; amplitude is rest position to crest.',
    '## Describing a wave');
}

// 02 Counting wavefronts and the wave equation
{
  let s = '';
  const x0 = 90, sp = 70;
  for (let k = 0; k < 10; k++) s += WF(x0 + k * sp, 190, x0 + k * sp, 300) + t(x0 + k * sp, 180, String(k + 1), { size: 15, anchor: 'middle', fill: C.muted });
  for (let k = 0; k < 9; k++) s += t(x0 + k * sp + sp / 2, 252, String(k + 1), { size: 16, anchor: 'middle', weight: 700, fill: C.rust });
  s += dim(x0, 325, x0 + 9 * sp, 325, '18 cm', { ly: 352 });
  const k1 = calc(30, 400, 410, 'Worked example 1', ['10 wavefronts → 9 gaps', 'λ = 18 / 9 = 2.0 cm = 0.020 m', 'v = f λ = 12 × 0.020', ['   = 0.24 m/s', 700, C.rust]], { lh: 32, size: 18 });
  const k2 = calc(460, 400, 410, 'Worked example 2', ['sound: λ = 340 / 680 = 0.50 m', 'radio: f = 3.0 × 10⁸ / 3.0', ['   = 1.0 × 10⁸ Hz'], 'water: v = 0.25 × 20 = 5.0 m/s'], { lh: 32, size: 18 });
  add('02-wave-equation-counting',
    svg(900, 400 + k1.h + 30, 'v = f λ: count the gaps, not the lines',
      panel(30, 110, 840, 270) + t(450, 148, 'Ripple tank: dipper at 12 Hz', { size: 18, anchor: 'middle', weight: 600 }) + s + k1.s + k2.s),
    'Ten wavefronts span 18 cm with nine gaps between them, so λ = 2.0 cm = 0.020 m and, at 12 Hz, v = 12 × 0.020 = 0.24 m/s. Other examples: sound at 340 m/s and 680 Hz has λ = 0.50 m; radio of λ 3.0 m has f = 1.0 × 10⁸ Hz; water waves of 0.25 Hz and 20 m travel at 5.0 m/s.',
    'n wavefronts have n − 1 gaps; then v = fλ in m, Hz and m/s.',
    '## The wave equation');
}

// 03 Transverse vs longitudinal
{
  let r = path(sine(80, 820, 255, 45, 245), { stroke: C.tealDark, w: 4 });
  for (let x = 80; x <= 820; x += 35) { const y = 255 - 45 * Math.sin(((x - 80) / 245) * 2 * Math.PI); r += circ(x, y, 6, C.mustard, C.ink, 1.5); }
  const px = 80 + 245 * 1.5 + 0; r += circ(px, 255 - 45 * Math.sin(((px - 80) / 245) * 2 * Math.PI), 9, C.rust, C.ink, 2);
  r += dim(px + 30, 200, px + 310 - 280, 312, '') + t(px + 30, 188, 'vibration', { size: 17, weight: 700, fill: C.rust, anchor: 'middle' });
  r += arrow(80, 333, 260, 333, { w: 5, color: C.tealDark, marker: 'ahT' }) + t(275, 339, 'direction of travel', { size: 17, weight: 700, fill: C.tealDark });
  let sp = '';
  const xs = []; let x = 80; while (x < 820) { const ph = Math.sin(((x - 80) / 220) * 2 * Math.PI); xs.push(x); x += 18 + 10 * ph; }
  xs.forEach((xx, i) => { sp += W(xx, 470, xx, 560, i === 20 ? C.rust : C.ink, i === 20 ? 5 : 3); });
  sp += dim(xs[20] - 40, 450, xs[20] + 40, 450, '') + t(xs[20] + 50, 456, 'vibration', { size: 17, weight: 700, fill: C.rust });
  sp += arrow(80, 600, 260, 600, { w: 5, color: C.tealDark, marker: 'ahT' }) + t(275, 606, 'direction of travel', { size: 17, weight: 700, fill: C.tealDark });
  add('03-transverse-longitudinal',
    svg(900, 740, 'Transverse and longitudinal waves',
      panel(30, 110, 840, 245) + t(55, 145, 'Transverse: vibration at right angles to travel', { size: 20, weight: 700 }) + r +
      panel(30, 365, 840, 260) + t(55, 400, 'Longitudinal: vibration parallel to travel', { size: 20, weight: 700 }) + sp +
      note(30, 640, 410, 80, ['electromagnetic radiation, water', 'waves, seismic S-waves'], { size: 17, fill: C.tealLight, edge: C.tealDark, lh: 24 }) +
      note(460, 640, 410, 80, ['sound waves,', 'seismic P-waves'], { size: 17, fill: C.cream, lh: 24 })),
    'A transverse wave on a rope: each point vibrates up and down, at right angles to the direction the wave travels; examples are electromagnetic radiation, water waves and seismic S-waves. A longitudinal wave on a spring: each coil vibrates back and forth along the direction of travel; examples are sound and seismic P-waves.',
    'Transverse: vibration across the direction of travel. Longitudinal: along it.',
    '## Transverse and longitudinal waves');
}

// 04 Reflection and refraction in a ripple tank
{
  // reflection
  const P = [235, 470], ang = (40 * Math.PI) / 180, lam = 40, L = 50;
  let rf = W(60, 470, 410, 470, C.ink, 6) + t(235, 500, 'plane barrier', { size: 16, anchor: 'middle', fill: C.muted });
  const din = [Math.sin(ang), Math.cos(ang)], dout = [Math.sin(ang), -Math.cos(ang)];
  for (let k = 1.6; k < 6; k++) { const c = [P[0] - k * lam * din[0], P[1] - k * lam * din[1]]; rf += WF(c[0] - L * din[1], c[1] + L * din[0], c[0] + L * din[1], c[1] - L * din[0]); }
  for (let k = 1.6; k < 6; k++) { const c = [P[0] + k * lam * dout[0], P[1] + k * lam * dout[1]]; rf += WF(c[0] - L * dout[1], c[1] + L * dout[0], c[0] + L * dout[1], c[1] - L * dout[0], C.rust); }
  rf += W(P[0], 470, P[0], 220, C.muted, 2).replace('stroke-linecap="round"', 'stroke-dasharray="6 5"') + t(P[0], 212, 'normal', { size: 15, anchor: 'middle', fill: C.muted });
  rf += arrow(P[0] - 6.5 * lam * din[0], P[1] - 6.5 * lam * din[1], P[0] - 5.6 * lam * din[0], P[1] - 5.6 * lam * din[1], { w: 3 }) + arrow(P[0] + 5.6 * lam * dout[0], P[1] + 5.6 * lam * dout[1], P[0] + 6.5 * lam * dout[0], P[1] + 6.5 * lam * dout[1], { w: 3 });
  rf += t(235, 540, 'equal angles either side of the normal;', { size: 16, anchor: 'middle' }) + t(235, 562, 'v, λ and f unchanged', { size: 16, anchor: 'middle', weight: 700 });
  // refraction
  const bx = 660, i = (40 * Math.PI) / 180, r = Math.asin(Math.sin(i) * 0.18 / 0.24), l1 = 40, l2 = 30, s0 = l1 / Math.sin(i);
  let rr = `<rect x="${bx}" y="165" width="190" height="365" fill="${C.tealLight}"/>` + W(bx, 165, bx, 530, C.ink, 2.5);
  let lines = '';
  for (let k = -6; k < 14; k++) { const y = 150 + k * s0; lines += WF(bx, y, bx - 400 * Math.sin(i), y + 400 * Math.cos(i)); lines += WF(bx, y, bx + 400 * Math.sin(r), y - 400 * Math.cos(r)); }
  rr += clip('rfc', 470, 165, 380, 365, lines);
  rr += arrow(500, 420, 500 + 60 * Math.cos(i), 420 + 60 * Math.sin(i), { w: 3.5 }) + arrow(740, 330, 740 + 60 * Math.cos(r), 330 + 60 * Math.sin(r), { w: 3.5 }) + note(520, 180, 90, 32, ['deep'], { size: 16, fill: '#ffffff', edge: C.ink }) + note(710, 180, 100, 32, ['shallow'], { size: 16, fill: '#ffffff', edge: C.ink });
  rr += t(660, 556, 'slower in shallow water: λ shorter, f the same', { size: 16, anchor: 'middle', weight: 700 });
  const k = calc(30, 590, 840, 'Worked example 3: 12 Hz waves', ['deep, 0.24 m/s:  λ = 0.24 / 12 = 0.020 m = 2.0 cm', 'shallow, 0.18 m/s:  λ = 0.18 / 12 = 0.015 m = 1.5 cm'], { lh: 32 });
  add('04-reflection-refraction',
    svg(900, 590 + k.h + 30, 'Reflection and refraction of water waves',
      panel(30, 110, 410, 465) + t(235, 148, 'Reflection', { size: 20, weight: 700, anchor: 'middle' }) + rf +
      panel(460, 110, 410, 465) + rr + t(665, 140, 'Refraction', { size: 20, weight: 700, anchor: 'middle' }) + k.s),
    'Left: straight wavefronts hit a plane barrier and reflect at the same angle on the other side of the normal, with speed, wavelength and frequency unchanged. Right: wavefronts entering shallower water slow down, so they are closer together and change direction; the frequency stays the same. At 12 Hz the wavelength is 2.0 cm in deep water (0.24 m/s) and 1.5 cm in shallow water (0.18 m/s).',
    'Reflection changes only direction; refraction changes speed and wavelength, not frequency.',
    '## Reflection, refraction and diffraction');
}

// 05 Diffraction (Extended)
{
  const lam = 30;
  const pan = (x, title, sub) => panel(x, 110, 270, 460) + t(x + 135, 145, title, { size: 18, weight: 700, anchor: 'middle' }) + t(x + 135, 168, sub, { size: 15, anchor: 'middle', fill: C.muted });
  // narrow gap
  const g1 = (x) => { const bx = x + 100, cy = 360, gh = 16; let s = rect(bx - 5, 185, 10, cy - gh - 185, C.ink, C.ink, 1) + rect(bx - 5, cy + gh, 10, 540 - cy - gh, C.ink, C.ink, 1); for (let k = 1; k < 4; k++) s += WF(bx - k * lam, 200, bx - k * lam, 525); for (let k = 1; k < 6; k++) s += arc(bx, cy, k * lam, -1.35, 1.35); return s; };
  const g2 = (x) => { const bx = x + 100, cy = 360, gh = 90; let s = rect(bx - 5, 185, 10, cy - gh - 185, C.ink, C.ink, 1) + rect(bx - 5, cy + gh, 10, 540 - cy - gh, C.ink, C.ink, 1); for (let k = 1; k < 4; k++) s += WF(bx - k * lam, 200, bx - k * lam, 525); for (let k = 1; k < 6; k++) { s += WF(bx + k * lam, cy - gh, bx + k * lam, cy + gh) + arc(bx, cy - gh, k * lam, -0.35, 0) + arc(bx, cy + gh, k * lam, 0, 0.35); } return s; };
  const g3 = (x) => { const bx = x + 100, ey = 330; let s = rect(bx - 5, 185, 10, ey - 185, C.ink, C.ink, 1); for (let k = 1; k < 4; k++) s += WF(bx - k * lam, 200, bx - k * lam, 525); for (let k = 1; k < 6; k++) s += WF(bx + k * lam, ey, bx + k * lam, 525) + arc(bx, ey, k * lam, -1.0, 0); s += t(bx + 12, 200, 'shadow', { size: 15, fill: C.muted }); return s; };
  add('05-diffraction-gap-edge',
    svg(900, 710, 'Diffraction: spreading at a gap or an edge',
      ext(30, 72) + pan(30, 'Gap ≈ wavelength', 'strong spreading, near semicircles') + g1(30) +
      pan(315, 'Gap ≫ wavelength', 'mostly straight, slight spreading') + g2(315) +
      pan(600, 'At an edge', 'waves bend into the shadow') + g3(600) +
      note(30, 585, 840, 100, ['Longer wavelength or narrower gap → more diffraction.', 'Longer wavelengths bend further round an edge.', 'Wavefront spacing (λ), frequency and speed are unchanged.'], { size: 17, lh: 26, fill: C.cream })),
    'Three plan views of straight water wavefronts. Through a gap about one wavelength wide they spread into nearly semicircular wavefronts. Through a gap much wider than the wavelength they pass mostly straight with slight spreading at the edges. Past a single edge they curve round into the shadow region. The spacing of the wavefronts stays the same.',
    'Diffraction is greatest when the gap is about the size of the wavelength.',
    '## Reflection, refraction and diffraction');
}
