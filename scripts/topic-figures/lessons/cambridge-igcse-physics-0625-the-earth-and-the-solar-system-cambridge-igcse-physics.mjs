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

export const slug = 'cambridge-igcse-physics-0625-the-earth-and-the-solar-system';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const ahd = (x, y, a, c = C.ink, s = 9) => { const p = (dx, dy) => `${(x + dx * Math.cos(a) - dy * Math.sin(a)).toFixed(1)},${(y + dx * Math.sin(a) + dy * Math.cos(a)).toFixed(1)}`; return `<path d="M${p(s, 0)} L${p(-s, -s * 0.75)} L${p(-s, s * 0.75)} Z" fill="${c}"/>`; };
// half-lit disc: lit side towards angle a (radians, screen)
const halfLit = (cx, cy, r, a, dark = '#4a5568') => { const p = (q) => `${(cx + r * Math.cos(q)).toFixed(1)},${(cy + r * Math.sin(q)).toFixed(1)}`; return circ(cx, cy, r, dark, C.ink, 2) + `<path d="M${p(a - Math.PI / 2)} A${r},${r} 0 0 1 ${p(a + Math.PI / 2)} Z" fill="#fff6c8"/>` + circ(cx, cy, r, 'none', C.ink, 2); };

// 01 Seasons and day/night
{
  const tilt = 23 * Math.PI / 180; // drawn tilt, not labelled
  const earth = (cx, cy, northTowardsSun, sunSide) => {
    const ax = -Math.sin(tilt), ay = -Math.cos(tilt);
    let s = halfLit(cx, cy, 52, sunSide === 'right' ? 0 : Math.PI);
    s += W(cx - 75 * ax, cy - 75 * ay, cx + 75 * ax, cy + 75 * ay, C.ink, 3) + ahd(cx + 75 * ax, cy + 75 * ay, Math.atan2(ay, ax), C.ink, 8) + t(cx + 80 * ax - 6, cy + 80 * ay - 4, 'N', { size: 16, weight: 700, anchor: 'end' });
    return s;
  };
  let s = circ(450, 300, 50, C.mustard, C.ink, 3) + t(450, 306, 'Sun', { size: 18, weight: 700, anchor: 'middle' });
  s += `<ellipse cx="450" cy="300" rx="320" ry="80" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="7 6"/>`;
  s += earth(130, 300, false, 'right') + earth(770, 300, true, 'left');
  s += t(130, 410, 'north tilted away:', { size: 16, weight: 700, anchor: 'middle' }) + t(130, 432, 'northern winter', { size: 16, weight: 700, anchor: 'middle', fill: C.blue });
  s += t(770, 410, 'north tilted towards:', { size: 16, weight: 700, anchor: 'middle' }) + t(770, 432, 'northern summer', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  s += t(450, 200, 'axis keeps pointing the same way in space', { size: 16, anchor: 'middle', fill: C.muted });
  const rows = [['Earth rotates on its axis', 'about 24 hours', 'day and night; Sun rises east, sets west'], ['Earth orbits the Sun (axis tilted)', 'about 365 days', 'the seasons'], ['Moon orbits the Earth', 'about one month', 'phases of the Moon']];
  let tb = ''; rows.forEach(([a, b, c], i) => { const y = 480 + i * 44; tb += `<rect x="30" y="${y}" width="840" height="38" rx="8" fill="${i % 2 ? C.tealLight : C.cream}"/>` + t(45, y + 25, a, { size: 16, weight: 700 }) + t(345, y + 25, b, { size: 16 }) + t(490, y + 25, c, { size: 16 }); });
  add('01-seasons-and-cycles',
    svg(900, 630, 'Three motions, three cycles',
      panel(30, 110, 840, 350) + s + tb),
    'The Earth at two opposite points of its orbit with its axis tilted the same way in space. When the north is tilted towards the Sun it is northern summer; half an orbit later it is tilted away: northern winter. Below: rotation in about 24 hours gives day and night, the orbit in about 365 days gives the seasons, and the Moon\'s orbit in about one month gives its phases.',
    'The tilt, not the distance from the Sun, causes the seasons.',
    '## Three motions, three cycles');
}

// 02 Phases of the Moon
{
  let s = circ(450, 330, 30, '#a9c48f', C.ink, 2.5) + t(450, 336, 'Earth', { size: 14, weight: 700, anchor: 'middle' });
  s += `<circle cx="450" cy="330" r="150" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 6"/>`;
  for (let k = 0; k < 4; k++) s += arrow(70, 200 + k * 50, 160, 200 + k * 50, { w: 3, color: C.mustard, marker: 'ahO' });
  s += t(70, 180, 'sunlight', { size: 16, weight: 700, fill: C.olive });
  // moon positions: angle measured from the Sun direction (Sun on the left): position = Earth + 150*(cos(pi - q)...)
  const P = [[300, 330, 'new Moon', 'nothing lit seen', 0], [450, 180, 'first quarter', 'half the disc', 1], [600, 330, 'full Moon', 'whole disc lit', 2], [450, 480, 'half the disc', '(decreasing)', 3]];
  P.forEach(([x, y, l1, l2, k]) => {
    s += halfLit(x, y, 22, Math.PI);
    const lx = x + (k === 0 ? -10 : k === 2 ? 0 : 0), ly = y + (k === 1 ? -40 : k === 3 ? 50 : 50);
    s += t(lx, ly, l1, { size: 15, weight: 700, anchor: 'middle' }).replace('<text', '<text paint-order="stroke" stroke="#ffffff" stroke-width="6"');
  });
  s += ahd(450 + 150 * Math.cos(-2.35), 330 + 150 * Math.sin(-2.35), -2.35 + Math.PI / 2, C.ink, 10) + ahd(450 + 150 * Math.cos(-0.8), 330 + 150 * Math.sin(-0.8), -0.8 + Math.PI / 2, C.ink, 10) + ahd(450 + 150 * Math.cos(0.8), 330 + 150 * Math.sin(0.8), 0.8 + Math.PI / 2, C.ink, 10) + ahd(450 + 150 * Math.cos(2.35), 330 + 150 * Math.sin(2.35), 2.35 + Math.PI / 2, C.ink, 10);
  // as seen from Earth
  const seen = (x, y, frac, lbl) => { let o = circ(x, y, 26, '#4a5568', C.ink, 2); if (frac === 1) o = circ(x, y, 26, '#fff6c8', C.ink, 2); else if (frac === 0.5) o += `<path d="M${x},${y - 26} A26,26 0 0 1 ${x},${y + 26} Z" fill="#fff6c8"/>` + circ(x, y, 26, 'none', C.ink, 2); else if (frac === -0.5) o += `<path d="M${x},${y - 26} A26,26 0 0 0 ${x},${y + 26} Z" fill="#fff6c8"/>` + circ(x, y, 26, 'none', C.ink, 2); return o + t(x, y + 50, lbl, { size: 15, anchor: 'middle' }); };
  let v = t(780, 160, 'seen from Earth', { size: 16, weight: 700, anchor: 'middle' }) + seen(780, 210, 0, 'new') + seen(780, 300, 0.5, 'half (increasing)') + seen(780, 390, 1, 'full') + seen(780, 480, -0.5, 'half (decreasing)');
  add('02-phases-of-the-moon',
    svg(900, 640, 'Phases of the Moon',
      panel(30, 110, 660, 470) + s + panel(700, 110, 170, 470) + v +
      note(30, 590, 840, 40, ['One half of the Moon is always lit; we see different amounts of it over about one month.'], { size: 16, fill: C.cream })),
    'Sunlight from the left lights one half of the Moon at every point of its orbit round the Earth. At new Moon, between the Earth and the Sun, none of the lit half is seen; a quarter of the way round, half the disc; at full Moon, with the Earth between, the whole disc; then half again as it decreases.',
    'Phases come from how much of the always-lit half faces the Earth.',
    '## Three motions, three cycles');
}

// 03 Accretion model
{
  const stage = (x, title) => panel(x, 110, 270, 340) + t(x + 135, 145, title, { size: 18, weight: 700, anchor: 'middle' });
  let seed = 9; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  let a = ''; for (let i = 0; i < 60; i++) { const r = 95 * Math.sqrt(rnd()), q = rnd() * 2 * Math.PI; a += dot(165 + r * Math.cos(q), 290 + r * Math.sin(q), 3, i % 3 ? C.muted : C.rockDark); }
  a += [0, 1, 2, 3].map((k) => { const q = (k * Math.PI) / 2; return arrow(165 + 125 * Math.cos(q), 290 + 125 * Math.sin(q), 165 + 102 * Math.cos(q), 290 + 102 * Math.sin(q), { w: 3 }); }).join('');
  a += t(165, 425, 'gravity pulls it together', { size: 15, anchor: 'middle' });
  let b = `<ellipse cx="450" cy="290" rx="120" ry="34" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + circ(450, 290, 16, C.mustard, C.ink, 2) + path('M560,250 A120,40 0 0 0 340,250', { stroke: C.ink, w: 2.5, extra: 'marker-end="url(#ah)"' });
  b += t(450, 400, 'rotating: flattens into an', { size: 15, anchor: 'middle' }) + t(450, 422, 'accretion disc', { size: 15, anchor: 'middle', weight: 700 });
  let c = circ(640, 290, 20, C.mustard, C.ink, 2) + `<rect x="665" y="200" width="70" height="180" fill="${C.cream}" opacity="0.8"/>` + `<rect x="735" y="200" width="115" height="180" fill="${C.tealLight}"/>` + t(700, 220, 'hot', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + t(792, 220, 'cold', { size: 15, weight: 700, anchor: 'middle', fill: C.blue });
  [[680, 4], [700, 4], [718, 3]].forEach(([x, r]) => { c += circ(x, 290, r + 2, C.rockDark, C.ink, 1.5); });
  [[760, 14], [810, 12]].forEach(([x, r]) => { c += circ(x, 290, r, C.sand, C.ink, 1.5); });
  c += t(700, 410, 'rocky', { size: 15, weight: 700, anchor: 'middle' }) + t(790, 410, 'gaseous', { size: 15, weight: 700, anchor: 'middle' });
  add('03-accretion-model',
    svg(900, 640, 'Why inner planets are rocky and outer ones gaseous',
      stage(30, '1. Cloud of gas and dust') + a + stage(315, '2. Spinning disc') + b + stage(600, '3. Planets form') + c +
      arrow(300, 280, 314, 280, { w: 3 }) + arrow(585, 280, 599, 280, { w: 3 }) +
      note(30, 465, 840, 150, ['The cloud contained many elements, not just hydrogen and helium.', 'Near the Sun it was hot: light gases could not stay, so small rocky planets formed.', 'Further out it was cold: gases and ices were plentiful, large cores attracted', 'huge amounts of gas and became gas giants.'], { size: 17, lh: 28, fill: C.tealLight, edge: C.tealDark, anchor: 'start' })),
    'An interstellar cloud of gas and dust containing many elements collapses under gravity, rotates and flattens into an accretion disc around the young Sun. Near the Sun it is hot, so only rock and metal collect into small rocky planets; further out it is cold, so large cores gather gas and become gas giants.',
    'Gravity, many elements and a rotating disc, hot near the Sun and cold far away.',
    '## The accretion model');
}

// 04 Moon's orbital speed (Extended)
{
  let s = circ(230, 330, 26, '#a9c48f', C.ink, 2.5) + t(230, 378, 'Earth', { size: 15, weight: 700, anchor: 'middle' }) + `<circle cx="230" cy="330" r="160" fill="none" stroke="${C.muted}" stroke-width="2.5"/>` + circ(230 + 160 * Math.cos(-0.7), 330 + 160 * Math.sin(-0.7), 14, '#d9dee3', C.ink, 2);
  s += dim(230, 330, 230 - 160, 330, '') + t(150, 320, 'r', { size: 20, weight: 700, anchor: 'middle', italic: true });
  
  s += t(230, 525, 'one orbit: distance 2πr in time T', { size: 16, anchor: 'middle', fill: C.muted });
  const k = calc(440, 130, 430, 'Worked example 1', ['r = 3.8 × 10⁸ m, T = 27.3 days', 'T = 27.3 × 24 × 3600', '   = 2.36 × 10⁶ s', 'v = 2πr / T', '= (2π × 3.8 × 10⁸) / 2.36 × 10⁶', ['= 1.0 × 10³ m/s (about 1 km/s)', 700, C.rust]], { lh: 32, size: 18 });
  add('04-moon-orbital-speed',
    svg(900, 600, 'Average orbital speed: v = 2πr / T',
      ext(30, 72) + panel(30, 110, 400, 450) + s + k.s + note(440, 130 + k.h + 16, 430, 560 - 130 - k.h - 16, ['Convert T to seconds first:', '1 day = 86 400 s'], { size: 18, fill: C.cream, lh: 28 })),
    'The Moon orbits the Earth at an average radius of 3.8 × 10⁸ m in 27.3 days, which is 2.36 × 10⁶ s. Its average orbital speed is v = 2πr/T = 1.0 × 10³ m/s, about 1 km/s.',
    'Distance round the orbit is 2πr; divide by the period in seconds.',
    '## Average orbital speed (Extended only)');
}

// 05 Jupiter: light time and orbital speed
{
  let s = circ(90, 300, 40, C.mustard, C.ink, 3) + t(90, 306, 'Sun', { size: 16, weight: 700, anchor: 'middle' }) + circ(800, 300, 30, C.sand, C.ink, 2.5) + t(800, 350, 'Jupiter', { size: 16, weight: 700, anchor: 'middle' });
  s += path(sine(135, 760, 300, 8, 30), { stroke: C.olive, w: 2.5 }) + arrow(750, 300, 766, 300, { w: 2.5, color: C.olive, marker: 'ahO' }) + dim(135, 250, 765, 250, '7.8 × 10¹¹ m', { ly: 238 });
  s += circ(300, 300, 8, '#a9c48f', C.ink, 1.5) + t(300, 336, 'Earth', { size: 14, anchor: 'middle', fill: C.muted });
  const a = calc(30, 400, 410, '(a) Core: light travel time', ['t = d / v = 7.8 × 10¹¹ / 3.0 × 10⁸', ['= 2600 s (about 43 minutes)', 700, C.rust]], { lh: 32, size: 17 });
  const b = calc(460, 400, 410, '(b) Extended: orbital speed', ['T = 12 × 365 × 86 400 = 3.78 × 10⁸ s', 'v = 2π × 7.8 × 10¹¹ / 3.78 × 10⁸', ['= 1.3 × 10⁴ m/s', 700, C.rust]], { lh: 32, size: 17, fill: C.cream, edge: C.olive });
  add('05-jupiter-light-and-speed',
    svg(900, 400 + Math.max(a.h, b.h) + 100, 'Jupiter: further out, slower',
      panel(30, 110, 840, 270) + t(450, 150, 'not to scale', { size: 15, anchor: 'middle', fill: C.muted }) + s + a.s + b.s +
      note(30, 400 + Math.max(a.h, b.h) + 16, 840, 60, ['Earth orbits at about 3 × 10⁴ m/s: the Sun\'s field and orbital speeds decrease with distance.'], { size: 17, fill: C.tealLight, edge: C.tealDark })),
    'Jupiter orbits at 7.8 × 10¹¹ m from the Sun. Sunlight takes 7.8 × 10¹¹ / 3.0 × 10⁸ = 2600 s, about 43 minutes, to reach it. With a period of 12 years (3.78 × 10⁸ s) its orbital speed is 1.3 × 10⁴ m/s, slower than the Earth\'s 3 × 10⁴ m/s.',
    'Further from the Sun: weaker field, lower orbital speed, longer period.',
    '## Gravity in the Solar System');
}
