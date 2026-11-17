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

export const slug = 'cambridge-igcse-physics-0625-stars-and-the-universe-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const ahd = (x, y, a, c = C.ink, s = 9) => { const p = (dx, dy) => `${(x + dx * Math.cos(a) - dy * Math.sin(a)).toFixed(1)},${(y + dx * Math.sin(a) + dy * Math.cos(a)).toFixed(1)}`; return `<path d="M${p(s, 0)} L${p(-s, -s * 0.75)} L${p(-s, s * 0.75)} Z" fill="${c}"/>`; };

// 01 The Sun as a star + stable-star balance
{
  let s = circ(220, 330, 120, C.mustard, C.ink, 3) + t(220, 322, 'the Sun', { size: 22, weight: 700, anchor: 'middle' }) + t(220, 348, 'medium-sized star', { size: 16, anchor: 'middle' });
  s += t(220, 480, 'mostly hydrogen and helium', { size: 17, weight: 700, anchor: 'middle' });
  [['infrared', -30, C.rust], ['visible light', 0, C.olive], ['ultraviolet', 30, C.blue]].forEach(([l, dy, col], i) => { s += path(sine(350, 520, 330 + dy * 2.4, 8, 40 - i * 10), { stroke: col, w: 3 }) + arrow(520, 330 + dy * 2.4, 545, 330 + dy * 2.4, { w: 3, color: col, marker: col === C.rust ? 'ahR' : col === C.olive ? 'ahO' : 'ah' }) + t(560, 336 + dy * 2.4, l, { size: 18, weight: 700, fill: col }); });
  s += t(640, 200, 'radiates mostly:', { size: 17, weight: 600, anchor: 'middle' });
  // stable star balance
  let b = circ(220, 667, 55, C.mustard, C.ink, 3) + circ(220, 667, 18, C.rust, C.ink, 2);
  [0, 90, 180, 270].forEach((g) => { const q = (g * Math.PI) / 180; b += arrow(220 + 100 * Math.cos(q), 667 + 100 * Math.sin(q), 220 + 61 * Math.cos(q), 667 + 61 * Math.sin(q), { w: 4, color: C.tealDark, marker: 'ahT' }) + arrow(220 + 22 * Math.cos(q + 0.78), 667 + 22 * Math.sin(q + 0.78), 220 + 50 * Math.cos(q + 0.78), 667 + 50 * Math.sin(q + 0.78), { w: 4, color: C.rust, marker: 'ahR' }); });
  b += tl(420, 610, ['inward: gravitational attraction', 'outward: force due to the high', 'temperature in the centre'], { size: 17 }, 24) + t(420, 690, 'balanced → stable star', { size: 18, weight: 700, fill: C.tealDark });
  add('01-the-sun-and-stability',
    svg(900, 800, 'The Sun: a medium-sized star',
      panel(30, 110, 840, 400) + s + ext(30, 525) + panel(30, 560, 840, 215) + b +
      t(420, 740, 'fusion of hydrogen into helium keeps the centre hot', { size: 16, fill: C.muted })),
    'The Sun is a medium-sized star made mostly of hydrogen and helium, radiating mostly infrared, visible light and ultraviolet. For Extended, in a stable star the inward gravitational attraction is balanced by an outward force due to the high temperature at the centre, kept hot by fusion of hydrogen into helium.',
    'Infrared, visible and ultraviolet: the Sun\'s three main outputs.',
    '## The Sun as a star');
}

// 02 Scale and the light-year
{
  let s = `<ellipse cx="230" cy="300" rx="180" ry="60" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + `<ellipse cx="230" cy="300" rx="70" ry="22" fill="${C.sand}"/>` + dot(300, 312, 6, C.rust) + arrow(330, 360, 304, 318, { w: 2.5, color: C.rust, marker: 'ahR' }) + t(334, 378, 'the Sun', { size: 16, weight: 700, fill: C.rust });
  s += dim(50, 390, 410, 390, 'Milky Way: about 100 000 light-years across', { ly: 420, size: 16 });
  s += t(230, 200, 'one galaxy: many billions of stars', { size: 17, weight: 600, anchor: 'middle' });
  let seed = 4; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  let g = ''; for (let i = 0; i < 18; i++) { const x = 480 + rnd() * 360, y = 180 + rnd() * 200; g += `<ellipse cx="${x}" cy="${y}" rx="${10 + rnd() * 14}" ry="${4 + rnd() * 5}" fill="${C.cream}" stroke="${C.olive}" stroke-width="1.5" transform="rotate(${rnd() * 180} ${x} ${y})"/>`; }
  g += t(660, 420, 'the Universe: many billions of galaxies', { size: 17, weight: 600, anchor: 'middle' });
  const k = calc(30, 460, 840, 'Light-year: the distance light travels in space in one year (a distance, not a time)', [['Extended: 1 light-year = 9.5 × 10¹⁵ m', 700, C.olive], 'Sirius, 8.6 light-years: 8.6 × 9.5 × 10¹⁵ = 8.2 × 10¹⁶ m', 'Milky Way: 100 000 × 9.5 × 10¹⁵ = 9.5 × 10²⁰ m', '4.0 × 10¹⁷ m ÷ 9.5 × 10¹⁵ = 42 light-years'], { lh: 30, size: 18 });
  add('02-galaxies-and-light-years',
    svg(900, 460 + k.h + 30, 'Stars, galaxies and the light-year',
      panel(30, 110, 840, 330) + s + g + k.s),
    'The Sun is one of many billions of stars in the Milky Way galaxy, which is about 100 000 light-years across; the Milky Way is one of many billions of galaxies. A light-year is the distance light travels in a year, 9.5 × 10¹⁵ m (Extended), so Sirius at 8.6 light-years is 8.2 × 10¹⁶ m away.',
    'A light-year measures distance: about 9.5 × 10¹⁵ m.',
    '## Scale: galaxies and light-years');
}

// 03 Redshift and CMBR
{
  const band = (y, lbl, shift) => {
    let s = rect(140, y, 660, 60, '#ffffff', C.ink, 2.5, 4);
    const steps = 30; for (let i = 0; i < steps; i++) { const cols = [C.blue, C.tealDark, C.grass, C.mustard, C.rust]; const c = cols[Math.min(4, Math.floor((i / steps) * 5))]; s += `<rect x="${142 + i * 22}" y="${y + 2}" width="22" height="56" fill="${c}" opacity="0.35"/>`; }
    [220, 330, 470, 560].forEach((x) => { s += W(x + shift, y + 2, x + shift, y + 58, C.ink, 4); });
    return s + t(125, y + 36, lbl, { size: 17, weight: 700, anchor: 'end' });
  };
  let s = band(170, 'Earth source', 0) + band(270, 'distant galaxy', 70);
  [220, 330, 470, 560].forEach((x) => { s += arrow(x, 246, x + 66, 262, { w: 2, color: C.rust, marker: 'ahR' }); });
  s += t(140, 360, '← shorter wavelength', { size: 15, fill: C.muted }) + t(800, 360, 'longer wavelength →', { size: 15, fill: C.muted, anchor: 'end' });
  s += t(470, 395, 'lines shifted to longer wavelengths: the galaxy is receding', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  let c = path(sine(80, 380, 520, 20, 50), { stroke: C.olive, w: 3 }) + arrow(400, 520, 470, 520, { w: 3 }) + path(sine(490, 840, 520, 20, 170), { stroke: C.tealDark, w: 3 });
  c += t(230, 570, 'produced shortly after the Universe formed', { size: 15, anchor: 'middle', fill: C.muted }) + t(665, 570, 'now microwaves, from all directions', { size: 15, anchor: 'middle', fill: C.muted });
  add('03-redshift-and-cmbr',
    svg(900, 680, 'Redshift: evidence for an expanding Universe',
      panel(30, 110, 840, 310) + s + ext(30, 435) + panel(30, 470, 840, 120) + c +
      note(30, 605, 840, 56, ['Galaxies moving apart now were closer in the past: support for the Big Bang Theory.'], { size: 18, fill: C.cream })),
    'Absorption lines in light from an Earth source and from a distant galaxy: the galaxy\'s lines are shifted towards longer wavelengths, showing that it is receding. For Extended, the cosmic microwave background radiation was produced shortly after the Universe formed and has been stretched into the microwave region by expansion. Both support the Big Bang Theory.',
    'Redshift means a longer observed wavelength from a receding galaxy.',
    '## Redshift and the expanding Universe');
}

// 04 Hubble constant (Extended)
{
  const g = axes(150, 470, 380, 300, { xmax: 3, ymax: 6.6, xt: [0, 1, 2, 3], yt: [0, 2, 4, 6], xl: 'distance d / 10²⁴ m', yl: 'speed v / 10⁶ m/s' });
  let s = g.s + W(g.X(0), g.Y(0), g.X(3), g.Y(6.6), C.tealDark, 4) + circ(g.X(2), g.Y(4.4), 8, C.mustard, C.ink, 2) + W(g.X(2), g.Y(4.4), g.X(2), g.Y(0), C.rust, 2).replace('stroke-linecap="round"', 'stroke-dasharray="6 5"') + W(g.X(0), g.Y(4.4), g.X(2), g.Y(4.4), C.rust, 2).replace('stroke-linecap="round"', 'stroke-dasharray="6 5"') + t(g.X(2) + 14, g.Y(4.4) + 22, '(2.0, 4.4)', { size: 16, weight: 700, fill: C.rust });
  s += t(g.X(0.3), g.Y(6.2), 'gradient = H₀ = v / d', { size: 17, weight: 700, fill: C.tealDark });
  const k = calc(560, 130, 310, 'Worked example', ['v = 4.4 × 10⁶ m/s', 'd = v / H₀', '= 4.4 × 10⁶ / 2.2 × 10⁻¹⁸', ['= 2.0 × 10²⁴ m', 700, C.rust], '÷ 9.5 × 10¹⁵ m per ly', ['= 2.1 × 10⁸ light-years', 700, C.rust]], { lh: 30, size: 17 });
  add('04-hubble-constant',
    svg(900, 640, 'The Hubble constant',
      ext(30, 72) + panel(30, 110, 520, 440) + s + k.s +
      note(560, 130 + k.h + 14, 310, 550 - 130 - k.h - 14, ['v from redshift;', 'd from supernova', 'brightness'], { size: 17, lh: 26, fill: C.tealLight, edge: C.tealDark }) +
      note(30, 565, 840, 56, ['Age of the Universe ≈ d / v = 1 / H₀ = 4.5 × 10¹⁷ s ≈ 1.4 × 10¹⁰ years'], { size: 19, weight: 700, fill: C.cream })),
    'Recession speed against distance is a straight line through the origin with gradient H₀ = 2.2 × 10⁻¹⁸ per second. A galaxy receding at 4.4 × 10⁶ m/s is 2.0 × 10²⁴ m away, about 2.1 × 10⁸ light-years. 1/H₀ = 4.5 × 10¹⁷ s, about 1.4 × 10¹⁰ years, estimates the age of the Universe.',
    'v is proportional to d; 1/H₀ estimates the age of the Universe.',
    '## The Hubble constant (Extended only)');
}
