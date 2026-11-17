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

export const slug = 'cambridge-igcse-physics-0625-electromagnetic-spectrum-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const ahd = (x, y, a, c = C.ink, s = 9) => { const p = (dx, dy) => `${(x + dx * Math.cos(a) - dy * Math.sin(a)).toFixed(1)},${(y + dx * Math.sin(a) + dy * Math.cos(a)).toFixed(1)}`; return `<path d="M${p(s, 0)} L${p(-s, -s * 0.75)} L${p(-s, s * 0.75)} Z" fill="${c}"/>`; };
const acw = (cx, cy, r, th, c) => ahd(cx + r * Math.cos(th), cy + r * Math.sin(th), Math.atan2(-Math.cos(th), Math.sin(th)), c, 10);
// 01 Harmful effects
{
  const rows = [['Microwaves', 'internal heating of body cells', C.cream, 'heating'], ['Infrared', 'skin burns', C.cream, 'heating'], ['Ultraviolet', 'damage to surface cells and eyes → skin cancer, eye conditions', C.tealLight, 'surface'], ['X-rays', 'mutation or damage to cells in the body', C.teal, 'inside'], ['Gamma rays', 'mutation or damage to cells in the body', C.teal, 'inside']];
  let s = '';
  rows.forEach(([r, h, f], i) => { const y = 150 + i * 78; s += `<rect x="190" y="${y}" width="500" height="64" rx="12" fill="${f}" stroke="${C.panelEdge}" stroke-width="2"/>` + t(212, y + 40, r, { size: 20, weight: 700 }) + tl(360, y + (h.length > 42 ? 28 : 40), wrap(h, 42), { size: 16 }, 22); });
  const brace = (y1, y2, lbl, col) => path(`M708,${y1} q14,0 14,14 L722,${(y1 + y2) / 2 - 8} l10,8 l-10,8 L722,${y2 - 14} q0,14 -14,14`, { stroke: col, w: 3 }) + tl(744, (y1 + y2) / 2 - 4, lbl, { size: 17, weight: 700, fill: col }, 22);
  s += brace(150, 292, ['harm by', 'heating'], C.olive) + brace(306, 370, ['surface', '(skin, eyes)'], C.tealDark) + brace(384, 526, ['reach cells', 'inside body'], C.rust);
  s += arrow(150, 150, 150, 520, { w: 4 }) + `<text x="128" y="335" font-size="18" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 128 335)">frequency increases</text>`;
  add('01-harmful-effects',
    svg(900, 600, 'Harmful effects of excessive exposure', panel(30, 110, 840, 460) + s),
    'Microwaves cause internal heating of body cells and infrared causes skin burns: both harm by heating. Ultraviolet damages surface cells and eyes, leading to skin cancer and eye conditions. X-rays and gamma rays cause mutation or damage to cells inside the body.',
    'Lower frequencies harm by heating; ultraviolet, X-rays and gamma rays damage cells directly.',
    '## Harmful effects of excessive exposure');
}

// 02 Wavelength from frequency (Extended)
{
  const a = calc(30, 330, 410, 'Radio, 100 MHz', ['λ = v / f', '= 3.0 × 10⁸ / (100 × 10⁶)', ['= 3.0 m', 700, C.rust]], { lh: 32 });
  const b = calc(460, 330, 410, 'Microwave, 2.45 GHz', ['λ = 3.0 × 10⁸ / (2.45 × 10⁹)', '= 0.122 m', ['about 12 cm', 700, C.rust]], { lh: 32 });
  add('02-wavelength-from-frequency',
    svg(900, 330 + a.h + 100, 'Same speed, so higher f means shorter λ',
      ext(30, 72) + panel(30, 110, 840, 200) +
      t(60, 150, 'radio', { size: 18, weight: 700 }) + path(sine(190, 840, 175, 22, 340), { stroke: C.tealDark, w: 3.5 }) +
      t(60, 255, 'microwave', { size: 18, weight: 700 }) + path(sine(190, 840, 255, 22, 56), { stroke: C.rust, w: 3.5 }) +
      t(450, 296, 'not to scale', { size: 15, anchor: 'middle', fill: C.muted }) +
      a.s + b.s +
      note(30, 330 + a.h + 20, 840, 64, ['v = fλ with v = 3.0 × 10⁸ m/s.  M = 10⁶, G = 10⁹, k = 10³'], { size: 19, fill: C.cream })),
    'A radio wave of 100 MHz has wavelength 3.0 × 10⁸ / (100 × 10⁶) = 3.0 m. A 2.45 GHz microwave has wavelength 3.0 × 10⁸ / (2.45 × 10⁹) = 0.122 m, about 12 cm. All electromagnetic waves travel at 3.0 × 10⁸ m/s in a vacuum.',
    'With the speed fixed, frequency and wavelength change in opposite directions.',
    '## Speed of electromagnetic waves');
}

// 03 Satellites
{
  const ex = 220, ey = 330;
  let g = circ(ex, ey, 60, '#a9c48f', C.ink, 3) + t(ex, ey + 6, 'Earth', { size: 17, weight: 700, anchor: 'middle' });
  g += `<circle cx="${ex}" cy="${ey}" r="85" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>` + `<circle cx="${ex}" cy="${ey}" r="160" fill="none" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  g += rect(ex + 153, ey - 7, 14, 14, C.mustard, C.ink, 2) + t(ex + 150, ey + 36, 'geostationary', { size: 16, weight: 700, fill: C.tealDark, anchor: 'middle' }).replace('<text', '<text paint-order="stroke" stroke="#ffffff" stroke-width="6"');
  g += rect(ex - 92, ey - 67, 12, 12, C.rust, C.ink, 2) + t(ex - 86, ey - 82, 'low orbit', { size: 16, weight: 700, fill: C.rust, anchor: 'middle' }).replace('<text', '<text paint-order="stroke" stroke="#ffffff" stroke-width="6"');
  g += acw(ex, ey, 160, Math.PI / 2 + 0.5, C.tealDark) + acw(ex, ey, 160, -Math.PI / 2 - 0.5, C.tealDark) + acw(ex, ey, 85, Math.PI * 0.9, C.muted) + path(`M${ex - 40},${ey + 72} A82,82 0 0 0 ${ex + 40},${ey + 72}`, { stroke: C.ink, w: 2.5 }).replace('/>', ' marker-end="url(#ah)"/>') + t(ex, ey + 112, 'Earth rotates', { size: 15, anchor: 'middle', fill: C.muted }).replace('<text', '<text paint-order="stroke" stroke="#ffffff" stroke-width="6"');
  g += t(ex, ey + 195, 'not to scale; Earth seen from above a pole', { size: 15, anchor: 'middle', fill: C.muted });
  const k = calc(470, 470, 400, 'Worked example 2 (Extended)', ['up 3.6 × 10⁷ m, down 3.6 × 10⁷ m', 'distance = 7.2 × 10⁷ m', 't = 7.2 × 10⁷ / 3.0 × 10⁸', ['= 0.24 s', 700, C.rust]], { lh: 30, size: 18 });
  add('03-satellites',
    svg(900, 470 + k.h + 30, 'Satellite communication: mainly microwaves',
      panel(30, 110, 420, 470 + k.h - 110) + g +
      note(470, 110, 400, 168, ['Geostationary: once every', '24 hours above the equator,', 'same direction as the Earth', 'rotates; a fixed dish points at it'], { size: 17, lh: 26, fill: C.tealLight, edge: C.tealDark, anchor: 'start' }) +
      note(470, 292, 400, 160, ['Low orbit: close, so a short', 'signal path, but it moves across', 'the sky, so a network of many', 'satellites is needed'], { size: 17, lh: 26, fill: C.cream, edge: C.rust, anchor: 'start' }) + k.s),
    'Plan view of the Earth with a low orbit satellite close in and a geostationary satellite much further out, orbiting once every 24 hours above the equator in the direction the Earth rotates. For a geostationary satellite 3.6 × 10⁷ m up, a signal up and back down travels 7.2 × 10⁷ m and takes 7.2 × 10⁷ / 3.0 × 10⁸ = 0.24 s.',
    'Geostationary satellites stay over one point; low orbit satellites are closer but need a network.',
    '## Satellites');
}

// 04 Analogue vs digital (Extended)
{
  let seed = 7; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280 - 0.5; };
  const bits = [1, 0, 1, 1, 0, 0];
  const dig = (x, y, w, amp, noise) => { let d = ''; const n = bits.length; for (let i = 0; i <= w; i += 3) { const b = bits[Math.min(n - 1, Math.floor((i / w) * n))]; d += (d ? 'L' : 'M') + (x + i) + ',' + (y - (b ? amp : -amp) + noise * rnd() * 2).toFixed(1); } return path(d, { stroke: C.tealDark, w: 3 }); };
  const ana = (x, y, w, amp, noise) => { let d = ''; for (let i = 0; i <= w; i += 3) { const ph = i / w; const v = Math.sin(ph * 2 * Math.PI * 1.5) * 0.7 + Math.sin(ph * 2 * Math.PI * 3.2) * 0.3; d += (d ? 'L' : 'M') + (x + i) + ',' + (y - amp * v + noise * rnd() * 2).toFixed(1); } return path(d, { stroke: C.tealDark, w: 3 }); };
  const row = (y, title, f, endLbl, endCol) => panel(30, y, 840, 190) + t(55, y + 36, title, { size: 20, weight: 700 }) +
    f(60, y + 115, 200, 45, 0) + arrow(275, y + 115, 325, y + 115, { w: 3 }) + f(340, y + 115, 200, 18, 6) + arrow(555, y + 115, 605, y + 115, { w: 3 }) + f(620, y + 115, 200, 45, endCol === C.rust ? 14 : 0) +
    t(160, y + 178, 'sent', { size: 16, anchor: 'middle', fill: C.muted }) + t(440, y + 178, 'weakened, with noise', { size: 16, anchor: 'middle', fill: C.muted }) + t(720, y + 178, endLbl, { size: 16, anchor: 'middle', weight: 700, fill: endCol });
  add('04-analogue-vs-digital',
    svg(900, 620, 'Why digital signals keep their quality',
      ext(30, 72) + row(110, 'Analogue: varies continuously', ana, 'amplified: noise too', C.rust) +
      row(315, 'Digital: only two values (1 and 0)', dig, 'regenerated: clean 1s and 0s', C.tealDark) +
      note(30, 520, 840, 76, ['Benefits of digital: higher rate of data transmission, and greater range', 'because the signal is accurately regenerated at each repeater.'], { size: 18, lh: 26, fill: C.cream })),
    'An analogue signal varies continuously; after travelling it is weaker and noisy, and amplifying it amplifies the noise too. A digital signal has only two values; after travelling it is weak and noisy, but it can be regenerated as clean 1s and 0s because the receiver only decides between two values.',
    'Digital signals can be regenerated, so noise is removed and range increases.',
    '## Digital and analogue signals (Extended only)');
}
