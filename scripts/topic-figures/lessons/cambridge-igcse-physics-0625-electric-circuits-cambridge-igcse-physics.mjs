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

export const slug = 'cambridge-igcse-physics-0625-electric-circuits-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 Component behaviour: diode forward/reverse, thermistor and LDR trends
{
  const loop = (L, rev) => {
    const l = L + 70, r = L + 340, tp = 220, bt = 360;
    let s = wire([[l, tp], [r, tp], [r, bt], [l, bt], [l, tp]]);
    s += put('cell', l, (tp + bt) / 2, 90) + put('diode', L + 200, tp, rev ? 180 : 0) + put('lamp', r, (tp + bt) / 2, 90);
    s += t(l - 22, tp + 52, '+', { size: 20, weight: 700, anchor: 'middle' });
    if (!rev) s += rays(r, (tp + bt) / 2) + cur(L + 120, tp, 'r') + cur(L + 280, tp, 'r') + cur(r, bt - 20, 'd') + cur(L + 200, bt, 'l') + t(L + 205, 400, 'current flows the way the triangle points', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
    else s += t(L + 205, 400, 'no current: acts like an open switch', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
    s += t(r + 46, (tp + bt) / 2 + 6, rev ? 'off' : 'on', { size: 18, weight: 700, fill: rev ? C.muted : C.olive });
    return s;
  };
  const card = (x, sym, name, l1, l2) => panel(x, 470, 410, 160) + cs[sym](x + 70, 560) + t(x + 140, 520, name, { size: 20, weight: 700 }) +
    t(x + 140, 556, l1, { size: 18 }) + t(x + 140, 586, l2, { size: 18, weight: 700, fill: C.rust });
  add('01-diode-thermistor-ldr',
    svg(900, 660, 'How some components behave',
      panel(30, 110, 410, 330) + t(54, 152, 'Diode forward', { size: 21, weight: 700 }) + ext(270, 128) + loop(30, false) +
      panel(460, 110, 410, 330) + t(484, 152, 'Diode reversed', { size: 21, weight: 700 }) + ext(700, 128) + loop(460, true) +
      card(30, 'thermistor', 'NTC thermistor', 'temperature increases', '→ resistance decreases') +
      card(460, 'ldr', 'LDR', 'light intensity increases', '→ resistance decreases')),
    'Two circuits with a cell, a diode and a lamp. With the diode pointing the way the current flows the lamp is on; reversed, no current flows and the lamp stays off. Below, an NTC thermistor\'s resistance decreases as temperature increases and an LDR\'s resistance decreases as light intensity increases.',
    'A diode conducts one way only; thermistor and LDR resistance both fall as temperature or light increases.',
    '## How components behave');
}

// 02 Series worked example
{
  const l = 110, r = 790, tp = 200, bt = 380;
  let c = wire([[l, tp], [r, tp], [r, bt], [l, bt], [l, tp]]);
  c += put('battery', l, 290, 90, 50) + t(l - 34, 250, '+', { size: 20, weight: 700, anchor: 'middle' }) + t(l - 30, 296, '12 V', { size: 19, weight: 700, anchor: 'end' });
  [[290, '10 Ω', '2.0 V'], [450, '20 Ω', '4.0 V'], [610, '30 Ω', '6.0 V']].forEach(([x, R, V]) => {
    c += put('resistor', x, tp) + t(x, tp - 26, R, { size: 19, weight: 700, anchor: 'middle' }) + t(x, tp + 44, V, { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  });
  c += put('ammeter', 450, bt) + t(450, bt + 50, '0.20 A everywhere', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  c += cur(200, tp, 'r') + cur(700, tp, 'r') + cur(r, 290, 'd') + cur(620, bt, 'l') + cur(280, bt, 'l') + cur(l, 220, 'u');
  const k = calc(30, 470, 840, 'Worked example 1', ['total R = 10 + 20 + 30 = 60 Ω', 'I = V / R = 12 / 60 = 0.20 A  (same through all three)', 'V = I R:  0.20 × 10 = 2.0 V,  0.20 × 20 = 4.0 V,  0.20 × 30 = 6.0 V', ['check: 2.0 + 4.0 + 6.0 = 12 V', 700, C.tealDark]], { lh: 32 });
  add('02-series-worked-example',
    svg(900, 470 + k.h + 30, 'Series circuit: one current, shared p.d.',
      panel(30, 110, 840, 340) + c + t(450, tp + 72, 'p.d. across each resistor (V = IR)', { size: 16, anchor: 'middle', fill: C.tealDark }) + k.s),
    'A 12 V battery in series with 10 Ω, 20 Ω and 30 Ω resistors and an ammeter. The current is 0.20 A everywhere and the p.d.s are 2.0 V, 4.0 V and 6.0 V, which add up to 12 V.',
    'In series the current is the same everywhere and the largest resistor takes the largest p.d.',
    '## Series circuits');
}

// 03 Cells in series: a reversed cell subtracts
{
  const y = 260;
  let s = W(150, y, 750, y);
  s += put('cell', 250, y) + put('cell', 450, y, 180) + put('cell', 650, y);
  s += [[250, '+1.5 V', C.tealDark], [450, '−1.5 V', C.rust], [650, '+1.5 V', C.tealDark]].map(([x, v, col]) => t(x, y + 64, v, { size: 21, weight: 700, anchor: 'middle', fill: col })).join('');
  s += t(450, y - 50, 'reversed', { size: 18, anchor: 'middle', weight: 700, fill: C.rust });
  add('03-reversed-cell',
    svg(900, 470, 'Three 1.5 V cells, one turned round',
      panel(30, 110, 840, 330) + s + t(450, 160, 'Cells facing the same way add; a reversed cell opposes them', { size: 18, anchor: 'middle', fill: C.muted }) +
      note(200, 360, 500, 56, ['total e.m.f. = 1.5 + 1.5 − 1.5 = 1.5 V'], { size: 21, weight: 700 })),
    'Three 1.5 V cells in a row with the middle one reversed. The two cells facing the same way give +1.5 V each and the reversed one −1.5 V, so the total e.m.f. is 1.5 V.',
    'A reversed cell subtracts its e.m.f. from the total.',
    '## Series circuits');
}

// 04 Parallel worked example (Extended)
{
  const l = 80, tp = 210, bt = 430, j1 = 340, j2 = 460;
  let c = wire([[l, tp], [j2, tp], [j2, bt], [l, bt], [l, tp]]) + wire([[j1, tp], [j1, bt]]);
  c += put('battery', l, 320, 90, 50) + t(l - 34, 280, '+', { size: 20, weight: 700, anchor: 'middle' }) + t(l + 30, 326, '12 V', { size: 19, weight: 700 });
  c += put('resistor', 210, tp) + t(210, tp - 26, '4.0 Ω', { size: 19, weight: 700, anchor: 'middle' }) + t(210, tp + 44, '6.0 V', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  c += put('resistor', j1, 320, 90) + t(j1 - 26, 316, '6.0 Ω', { size: 18, weight: 700, anchor: 'end' }) + put('resistor', j2, 320, 90) + t(j2 + 26, 316, '12 Ω', { size: 18, weight: 700 });
  c += jn(j1, tp) + jn(j1, bt);
  c += cur(140, tp, 'r') + t(130, tp - 18, '1.5 A', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  c += cur(j1, 255, 'd') + t(j1 - 14, 262, '1.0 A', { size: 18, weight: 700, anchor: 'end', fill: C.rust });
  c += cur(400, tp, 'r') + cur(j2, 255, 'd') + t(j2 + 14, 262, '0.50 A', { size: 18, weight: 700, fill: C.rust });
  c += cur(210, bt, 'l') + t(210, bt + 30, '1.5 A', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  c += t(j2 + 14, 352, '6.0 V', { size: 18, weight: 700, fill: C.tealDark }) + t(j1 - 26, 344, '6.0 V', { size: 18, weight: 700, anchor: 'end', fill: C.tealDark });
  const k = calc(590, 130, 270, 'Step by step', ['1/R = 1/6.0 + 1/12', '      = 3/12', ['R pair = 4.0 Ω'], 'total = 4.0 + 4.0', ['      = 8.0 Ω'], 'I = 12 / 8.0', ['   = 1.5 A'], '4.0 Ω: 1.5 × 4.0 = 6.0 V', 'pair: 12 − 6.0 = 6.0 V', '6.0/6.0 = 1.0 A', '6.0/12 = 0.50 A', ['1.0 + 0.50 = 1.5 A ✓', 700, C.tealDark]], { lh: 30, size: 18 });
  add('04-parallel-worked-example',
    svg(900, 130 + k.h + 30, 'Series resistor plus a parallel pair',
      ext(30, 72) + panel(30, 130, 545, k.h) + c +
      note(60, 485, 485, 70, ['4.0 Ω is less than both 6.0 Ω and 12 Ω,', 'as a parallel pair must be'], { size: 17, fill: C.cream }) + k.s),
    'A 12 V supply drives 1.5 A through a 4.0 Ω resistor, which takes 6.0 V. The remaining 6.0 V is across both parallel branches, so 1.0 A flows through 6.0 Ω and 0.50 A through 12 Ω; the pair is equivalent to 4.0 Ω and the total is 8.0 Ω.',
    'Find the pair\'s resistance, then the supply current, then share out the p.d. and the current.',
    '## Parallel circuits');
}

// 05 Potential divider: fixed ratio and LDR action
{
  const div = (L, top, botSym, lblTop, lblBot, vTop, vBot, sup = '6.0 V') => {
    const l = L + 70, r = L + 230, tp = 170, bt = 450;
    let s = wire([[l, tp], [r, tp], [r, bt], [l, bt], [l, tp]]);
    s += put('battery', l, 310, 90, 50) + t(l - 34, 270, '+', { size: 20, weight: 700, anchor: 'middle' }) + t(l + 28, 316, sup, { size: 18, weight: 700 });
    s += put(top, r, 240, 90) + put(botSym, r, 380, 90) + jn(r, 310);
    s += t(r + 26, 236, lblTop, { size: 18, weight: 700 }) + (botSym === 'ldr' ? t(r - 26, 386, lblBot, { size: 18, weight: 700, anchor: 'end' }) : t(r + 26, 376, lblBot, { size: 18, weight: 700 }));
    s += dim(r + 125, tp + 6, r + 125, 304, '') + dim(r + 125, 316, r + 125, bt - 6, '');
    s += t(r + 137, 246, vTop, { size: 18, weight: 700, fill: C.tealDark }) + (vBot === 'output' ? t(r + 125, bt + 30, vBot, { size: 18, weight: 700, fill: C.tealDark, anchor: 'middle' }) : t(r + 137, 386, vBot, { size: 18, weight: 700, fill: C.tealDark }));
    return s;
  };
  const steps = ['gets darker', 'LDR resistance rises', 'LDR takes a larger share of supply p.d.', 'output p.d. across LDR rises'];
  const R = 460;
  let chain = '';
  steps.forEach((s0, i) => { const y = 490 + i * 54; chain += `<rect x="${R + 20}" y="${y}" width="370" height="38" rx="10" fill="${i === 3 ? C.cream : C.tealLight}" stroke="${i === 3 ? C.olive : C.tealDark}" stroke-width="2"/>` + t(R + 205, y + 26, s0, { size: 17, weight: 600, anchor: 'middle' }) + (i < 3 ? arrow(R + 205, y + 38, R + 205, y + 54, { w: 2.5 }) : ''); });
  add('05-potential-divider',
    svg(900, 730, 'Potential dividers share the supply p.d.',
      panel(30, 110, 410, 590) + t(235, 150, 'Fixed divider', { size: 21, weight: 700, anchor: 'middle' }) +
      div(30, 'resistor', 'resistor', 'R₁ 1.2 kΩ', 'R₂ 3.6 kΩ', 'V₁', 'V₂') +
      note(50, 500, 370, 180, ['R₁ : R₂ = 1.2 : 3.6 = 1 : 3', 'V₁ = 6.0 × 1/4 = 1.5 V', 'V₂ = 6.0 × 3/4 = 4.5 V', 'no need to find the current'], { size: 18, lh: 34, fill: C.tealLight, edge: C.tealDark }) +
      panel(R, 110, 410, 590) + t(R + 205, 150, 'LDR as R₂', { size: 21, weight: 700, anchor: 'middle' }) +
      div(R, 'resistor', 'ldr', 'fixed', 'LDR', '', 'output', '') + chain +
      ext(30, 72)),
    'Left: a 6.0 V supply across 1.2 kΩ and 3.6 kΩ in series; the ratio 1 : 3 gives 1.5 V and 4.5 V. Right: with an LDR in place of the lower resistor, getting darker raises the LDR\'s resistance, so it takes a larger share of the supply p.d. and the output across it rises.',
    'The larger resistance takes the larger share of the supply p.d.: R₁/R₂ = V₁/V₂.',
    '## Potential dividers');
}
