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

export const slug = 'cambridge-igcse-physics-0625-the-nuclear-model-of-the-atom';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const nuc = (x, y, A, Z, S, col = C.ink, size = 34) => t(x - 4, y - size * 0.52, A, { size: size * 0.5, weight: 700, anchor: 'end', fill: col }) + t(x - 4, y + size * 0.12, Z, { size: size * 0.5, weight: 700, anchor: 'end', fill: col }) + t(x, y, S, { size, weight: 700, fill: col });
const P = (x, y, r = 11) => circ(x, y, r, C.rust, C.ink, 1.8) + t(x, y + 5, '+', { size: 15, weight: 700, anchor: 'middle', fill: '#ffffff' });
const N = (x, y, r = 11) => circ(x, y, r, '#c9ced4', C.ink, 1.8);
const E = (x, y, r = 9) => circ(x, y, r, C.tealDark, C.ink, 1.5) + t(x, y + 5, '−', { size: 15, weight: 700, anchor: 'middle', fill: '#ffffff' });

// 01 Ions and counting particles
{
  const atom = (cx, cy, ne, title, sub, col) => { let s = circ(cx, cy, 80, 'none', C.panelEdge, 2).replace('/>', ' stroke-dasharray="6 5"/>') + P(cx - 8, cy - 6) + P(cx + 9, cy + 4) + N(cx + 6, cy - 12) + N(cx - 9, cy + 10);
    for (let i = 0; i < ne; i++) { const q = (i / Math.max(ne, 1)) * 2 * Math.PI - Math.PI / 2; s += E(cx + 80 * Math.cos(q), cy + 80 * Math.sin(q)); }
    return s + t(cx, cy + 120, title, { size: 18, weight: 700, anchor: 'middle', fill: col }) + t(cx, cy + 144, sub, { size: 15, anchor: 'middle', fill: C.muted }); };
  let s = atom(165, 260, 2, 'neutral atom', '2 protons, 2 electrons', C.ink) + atom(450, 260, 0, 'positive ion, +2', 'lost 2 electrons', C.rust) + atom(735, 260, 4, 'negative ion, −2', 'gained 2 electrons', C.tealDark);
  s += t(450, 150, 'the nucleus never changes when an ion forms', { size: 16, anchor: 'middle', fill: C.muted });
  const k1 = calc(30, 460, 410, 'Strontium-90 atom', ['protons = Z = 38', 'neutrons = A − Z = 90 − 38 = 52', ['electrons = 38 (neutral)', 700, C.rust]], { lh: 30, size: 17 });
  const k2 = calc(460, 460, 410, 'Sulfur-32 ion, charge −2', ['protons = 16', 'neutrons = 32 − 16 = 16', ['electrons = 16 + 2 = 18', 700, C.rust]], { lh: 30, size: 17 });
  add('01-ions-and-counting',
    svg(900, 460 + k1.h + 30, 'Atoms, ions and counting particles',
      panel(30, 110, 840, 330) + s + k1.s + k2.s),
    'Simplified atoms with two protons: a neutral atom has two electrons, a positive ion of charge +2 has lost both, and a negative ion of charge −2 has gained two; the nucleus is unchanged. Strontium-90 (Z = 38) has 38 protons, 52 neutrons and 38 electrons; the sulfur-32 ion of charge −2 has 16 protons, 16 neutrons and 18 electrons.',
    'Ions form by losing or gaining electrons; neutrons = A − Z.',
    '## Ions');
}

// 02 Nuclide notation
{
  let s = nuc(380, 320, '23', '11', 'Na', C.ink, 110);
  s += arrow(260, 205, 330, 240, { w: 3, color: C.rust, marker: 'ahR' }) + tl(70, 190, ['A = nucleon number:', 'protons + neutrons'], { size: 19, weight: 700, fill: C.rust }, 26);
  s += arrow(260, 350, 330, 340, { w: 3, color: C.tealDark, marker: 'ahT' }) + tl(70, 340, ['Z = proton number:', 'fixes the element'], { size: 19, weight: 700, fill: C.tealDark }, 26);
  s += arrow(580, 250, 520, 270, { w: 3 }) + tl(590, 245, ['X = chemical', 'symbol'], { size: 19, weight: 700 }, 26);
  s += note(560, 330, 290, 70, ['neutrons = A − Z', '= 23 − 11 = 12'], { size: 19, weight: 700, fill: C.cream, lh: 28 });
  add('02-nuclide-notation',
    svg(900, 600, 'Reading nuclide notation',
      panel(30, 110, 840, 330) + s + ext(30, 455) +
      panel(30, 495, 840, 85) + nuc(110, 548, '56', '26', 'Fe', C.ink, 36) + t(190, 535, 'relative charge of the nucleus = Z = +26', { size: 18, weight: 600 }) + t(190, 563, 'relative mass of the nucleus = A = 56', { size: 18, weight: 600 })),
    'Sodium-23 in nuclide notation: the nucleon number A = 23 (protons plus neutrons) at the top, the proton number Z = 11 at the bottom, then the symbol Na, so it has 23 − 11 = 12 neutrons. For Extended, iron-56 with Z = 26 has a nucleus of relative charge +26 and relative mass 56.',
    'A on top, Z underneath; neutrons = A − Z.',
    '## Nuclide notation');
}

// 03 Hydrogen isotopes
{
  const iso = (cx, n, lbl, sub) => { let s = circ(cx, 290, 90, 'none', C.panelEdge, 2).replace('/>', ' stroke-dasharray="6 5"/>') + P(cx - (n ? 8 : 0), 290); for (let i = 0; i < n; i++) s += N(cx + 10 + i * 4, 290 + (i ? 16 : -12)); s += E(cx + 90 * Math.cos(-0.6), 290 + 90 * Math.sin(-0.6)); return s + nuc(cx - 6, 440, String(1 + n), '1', 'H', C.ink, 34) + t(cx, 480, lbl, { size: 17, weight: 700, anchor: 'middle' }) + t(cx, 504, sub, { size: 15, anchor: 'middle', fill: C.muted }); };
  add('03-hydrogen-isotopes',
    svg(900, 600, 'Isotopes: same protons, different neutrons',
      panel(30, 110, 840, 420) + t(450, 160, 'three isotopes of hydrogen', { size: 17, anchor: 'middle', fill: C.muted }) +
      iso(180, 0, 'no neutrons', '1 proton, 1 electron') + iso(450, 1, 'one neutron', '1 proton, 1 electron') + iso(720, 2, 'two neutrons', '1 proton, 1 electron') +
      note(30, 540, 840, 44, ['Different Z means a different element, never an isotope.'], { size: 17, fill: C.cream })),
    'Three isotopes of hydrogen, each with one proton and one electron: hydrogen-1 has no neutrons, hydrogen-2 has one and hydrogen-3 has two. Same proton number, different nucleon numbers.',
    'Isotopes share a proton number but differ in neutron number.',
    '## Isotopes');
}

// 04 Fission and fusion (Extended)
{
  const blob = (cx, cy, r, fill) => circ(cx, cy, r, fill, C.ink, 2.5);
  let f = blob(80, 230, 10, '#c9ced4') + arrow(95, 230, 135, 230, { w: 3 }) + blob(190, 230, 46, C.cream) + t(190, 236, 'U-235', { size: 15, weight: 700, anchor: 'middle' }) + arrow(245, 230, 300, 230, { w: 4 });
  f += blob(360, 195, 38, C.tealLight) + t(360, 201, 'Xe-140', { size: 14, weight: 700, anchor: 'middle' }) + blob(360, 285, 32, C.tealLight) + t(360, 291, 'Sr-94', { size: 14, weight: 700, anchor: 'middle' }) + blob(430, 225, 10, '#c9ced4') + blob(430, 255, 10, '#c9ced4') + arrow(443, 222, 465, 212, { w: 2.5 }) + arrow(443, 258, 465, 268, { w: 2.5 });
  f = `<g transform="translate(-30,0)">${f}</g>`;
  f += t(50, 260, 'neutron', { size: 14, anchor: 'middle', fill: C.muted });
  let u = blob(560, 205, 18, C.cream) + t(560, 210, '²H', { size: 14, weight: 700, anchor: 'middle' }) + blob(560, 265, 22, C.cream) + t(560, 270, '³H', { size: 14, weight: 700, anchor: 'middle' }) + arrow(595, 235, 660, 235, { w: 4 }) + blob(720, 235, 30, C.tealLight) + t(720, 240, '⁴He', { size: 15, weight: 700, anchor: 'middle' }) + blob(790, 235, 10, '#c9ced4') + arrow(803, 235, 835, 235, { w: 2.5 });
  const k1 = calc(30, 340, 410, 'Fission: splitting', ['²³⁵₉₂U + ¹₀n → ¹⁴⁰₅₄Xe + ⁹⁴₃₈Sr + 2 ¹₀n'.replace(/[₀-₉]/g, ''), 'top: 235 + 1 = 236 = 140 + 94 + 2', 'bottom: 92 + 0 = 92 = 54 + 38 + 0'], { lh: 30, size: 17 });
  const k2 = calc(460, 340, 410, 'Fusion: joining', ['²H + ³H → ⁴He + ¹n', 'top: 2 + 3 = 5 = 4 + 1', 'bottom: 1 + 1 = 2 = 2 + 0'], { lh: 30, size: 17, fill: C.cream, edge: C.olive });
  add('04-fission-and-fusion',
    svg(900, 340 + k1.h + 100, 'Fission and fusion',
      ext(30, 72) + panel(30, 110, 410, 210) + t(235, 145, 'Fission', { size: 20, weight: 700, anchor: 'middle' }) + f +
      panel(460, 110, 410, 210) + t(665, 145, 'Fusion', { size: 20, weight: 700, anchor: 'middle' }) + u + k1.s + k2.s +
      note(30, 340 + k1.h + 16, 840, 64, ['In both, the products have slightly less mass: the lost mass is released as energy,', 'mostly kinetic energy of the products.'], { size: 17, lh: 25 })),
    'Fission: uranium-235 absorbs a neutron and splits into xenon-140, strontium-94 and two neutrons; nucleon numbers 235 + 1 = 140 + 94 + 2 and proton numbers 92 = 54 + 38. Fusion: hydrogen-2 and hydrogen-3 join into helium-4 and a neutron; 2 + 3 = 4 + 1 and 1 + 1 = 2 + 0. In both the products have slightly less mass and energy is released.',
    'Fission splits a large nucleus; fusion joins light ones; both release energy.',
    '## Fission and fusion (Extended only)');
}
