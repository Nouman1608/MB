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

export const slug = 'cambridge-igcse-physics-0625-electrical-quantities-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// small arrowhead at (x,y) pointing at angle a (radians)
const ahd = (x, y, a, c = C.ink, s = 9) => { const p = (dx, dy) => `${(x + dx * Math.cos(a) - dy * Math.sin(a)).toFixed(1)},${(y + dx * Math.sin(a) + dy * Math.cos(a)).toFixed(1)}`; return `<path d="M${p(s, 0)} L${p(-s, -s * 0.75)} L${p(-s, s * 0.75)} Z" fill="${c}"/>`; };
const chg = (x, y, sign, r = 13) => circ(x, y, r, sign === '+' ? C.rust : C.tealDark, C.ink, 2) + t(x, y + 6, sign === '+' ? '+' : '−', { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' });

// 01 How the quantities connect
{
  const box = (x, w, top, unit, l1, l2, fill) => `<rect x="${x}" y="150" width="${w}" height="170" rx="14" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` +
    t(x + w / 2, 192, top, { size: 22, weight: 700, anchor: 'middle' }) + t(x + w / 2, 230, l1, { size: 18, anchor: 'middle' }) + t(x + w / 2, 256, l2, { size: 18, anchor: 'middle' }) + t(x + w / 2, 298, unit, { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('01-quantities-connect',
    svg(900, 600, 'Current × p.d. = power',
      box(30, 240, 'Current I', 'A = C/s', 'charge passing', 'each second', C.tealLight) +
      t(300, 248, '×', { size: 44, weight: 700, anchor: 'middle' }) +
      box(330, 240, 'p.d. V', 'V = J/C', 'energy transferred', 'by each coulomb', C.cream) +
      t(600, 248, '=', { size: 44, weight: 700, anchor: 'middle' }) +
      box(630, 240, 'Power P', 'W = J/s', 'energy transferred', 'each second', C.teal) +
      arrow(750, 330, 750, 380, { w: 3 }) + note(560, 385, 310, 70, ['× time t:  E = IVt  (J)'], { size: 21, weight: 700, fill: '#ffffff', edge: C.ink }) +
      t(60, 420, 'P = IV', { size: 26, weight: 700 }) + t(60, 455, 'E = IVt', { size: 26, weight: 700 }) +
      panel(30, 480, 840, 95) + ext(50, 494) +
      t(60, 556, 'I = Q/t  (Q = It)', { size: 20, weight: 600 }) + t(330, 556, 'V = W/Q and E = W/Q', { size: 20, weight: 600 }) + t(660, 556, '1 V = 1 J/C', { size: 20, weight: 600 })),
    'Current (charge per second, in amperes) times p.d. (energy per coulomb, in volts) gives power (energy per second, in watts), so P = IV; multiplying by time gives E = IVt. For Extended: I = Q/t, V = W/Q and one volt is one joule per coulomb.',
    'Charge per second × energy per coulomb = energy per second.',
    '## The quantities and how they connect');
}

// 02 Charging by friction
{
  const body = (x, y, w, h, fill, label, plus, minus) => {
    let s = rect(x, y, w, h, fill, C.ink, 3, 10) + t(x + w / 2, y + h + 28, label, { size: 18, weight: 600, anchor: 'middle' });
    const n = plus + minus; let i = 0;
    for (let k = 0; k < plus; k++, i++) s += t(x + 22 + (i * (w - 44)) / Math.max(1, n - 1), y + h / 2 + 7, '+', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
    for (let k = 0; k < minus; k++, i++) s += t(x + 22 + (i * (w - 44)) / Math.max(1, n - 1), y + h / 2 + 7, '−', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
    return s;
  };
  add('02-charging-by-friction',
    svg(900, 640, 'Charging by rubbing: only electrons move',
      panel(30, 110, 410, 300) + t(235, 150, 'Before: both neutral', { size: 20, weight: 700, anchor: 'middle' }) +
      body(60, 190, 350, 46, C.cream, 'insulating rod', 4, 4) + body(60, 300, 350, 46, C.tealLight, 'cloth', 4, 4) +
      panel(460, 110, 410, 300) + t(665, 150, 'After rubbing', { size: 20, weight: 700, anchor: 'middle' }) +
      body(490, 190, 350, 46, C.cream, 'gained electrons → negative', 4, 6) + body(490, 300, 350, 46, C.tealLight, 'lost electrons → positive', 4, 2) +
      
      panel(30, 430, 840, 180) + t(60, 470, 'Forces between charges', { size: 20, weight: 700 }) +
      chg(110, 540, '+') + chg(190, 540, '+') + arrow(95, 540, 60, 540, { w: 3 }) + arrow(205, 540, 240, 540, { w: 3 }) + t(150, 590, 'like: repel', { size: 18, anchor: 'middle', weight: 600 }) +
      chg(340, 540, '−') + chg(420, 540, '−') + arrow(325, 540, 290, 540, { w: 3 }) + arrow(435, 540, 470, 540, { w: 3 }) + t(380, 590, 'like: repel', { size: 18, anchor: 'middle', weight: 600 }) +
      chg(570, 540, '+') + chg(700, 540, '−') + arrow(587, 540, 622, 540, { w: 3 }) + arrow(683, 540, 648, 540, { w: 3 }) + t(635, 590, 'unlike: attract', { size: 18, anchor: 'middle', weight: 600 })),
    'Before rubbing, an insulating rod and a cloth each hold equal positive and negative charge. Rubbing moves electrons only: the material that gains electrons becomes negative and the one that loses them becomes positive. Below, like charges repel and unlike charges attract.',
    'Electrons move from one material to the other; positive charges stay put.',
    '## Charge and electric fields');
}

// 03 Electric field patterns (Extended)
{
  const radial = (cx, cy, r0, r1, out, n = 12) => { let s = ''; for (let i = 0; i < n; i++) { const a = (i / n) * 2 * Math.PI; const x0 = cx + r0 * Math.cos(a), y0 = cy + r0 * Math.sin(a), x1 = cx + r1 * Math.cos(a), y1 = cy + r1 * Math.sin(a); s += W(x0, y0, x1, y1, C.ink, 2.5); const m = (r0 + r1) / 2 + 8; s += ahd(cx + m * Math.cos(a), cy + m * Math.sin(a), out ? a : a + Math.PI); } return s; };
  const pc = 175, nc = 450, sc = 725, cy = 265;
  let plates = '';
  const py1 = 520, py2 = 680;
  plates += rect(200, py1 - 14, 500, 14, C.rust, C.ink, 2.5) + rect(200, py2, 500, 14, C.tealDark, C.ink, 2.5);
  for (let i = 0; i < 9; i++) { const x = 230 + i * 55; plates += W(x, py1, x, py2) + ahd(x, (py1 + py2) / 2, Math.PI / 2); }
  plates += t(715, py1 - 2, '+ + + +', { size: 20, weight: 700, fill: C.rust }) + t(715, py2 + 14, '− − − −', { size: 20, weight: 700, fill: C.tealDark });
  add('03-electric-field-patterns',
    svg(900, 790, 'Electric field patterns',
      ext(30, 72) +
      panel(30, 110, 840, 330) +
      radial(pc, cy, 16, 105, true) + chg(pc, cy, '+', 15) + t(pc, 425, 'positive point charge: outwards', { size: 17, anchor: 'middle', weight: 600 }) +
      radial(nc, cy, 16, 105, false) + chg(nc, cy, '−', 15) + t(nc, 425, 'negative point charge: inwards', { size: 17, anchor: 'middle', weight: 600 }) +
      radial(sc, cy, 48, 112, true) + circ(sc, cy, 48, C.cream, C.ink, 3) + t(sc, cy + 9, '+', { size: 30, weight: 700, anchor: 'middle', fill: C.rust }) + t(sc, 412, 'charged sphere: radial, at', { size: 17, anchor: 'middle', weight: 600 }) + t(sc, 432, 'right angles to surface', { size: 17, anchor: 'middle', weight: 600 }) +
      panel(30, 460, 840, 300) + plates + t(450, 740, 'parallel plates: straight, parallel, evenly spaced, + to −', { size: 18, anchor: 'middle', weight: 600 }) +
      t(sc, 405, '', {})),
    'Field lines point radially outwards from a positive point charge and inwards to a negative one. A charged conducting sphere has radial lines starting at its surface, at right angles to it. Between oppositely charged parallel plates the lines are straight, parallel and evenly spaced, from the positive to the negative plate.',
    'Field direction is the direction of the force on a positive charge.',
    '## Charge and electric fields');
}

// 04 Measuring resistance: meters in place
{
  const l = 120, r = 560, tp = 190, bt = 380;
  let c = wire([[l, tp], [r, tp], [r, bt], [l, bt], [l, tp]]);
  c += put('battery', l, 285, 90, 50) + t(l - 34, 245, '+', { size: 20, weight: 700, anchor: 'middle' });
  c += put('ammeter', 260, tp) + t(260, tp - 32, 'ammeter in series', { size: 17, anchor: 'middle', weight: 600 }) + t(260, tp + 48, '0.50 A', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  c += put('lamp', 420, bt) + wire([[360, bt], [360, 300], [480, 300], [480, bt]]) + jn(360, bt) + jn(480, bt) + put('voltmeter', 420, 300);
  c += t(420, 266, 'voltmeter in parallel', { size: 17, anchor: 'middle', weight: 600 }) + t(420, 348, '6.0 V', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  c += cur(180, tp, 'r') + cur(r, 285, 'd') + cur(250, bt, 'l');
  c += t(420, bt + 46, 'lamp', { size: 17, anchor: 'middle', fill: C.muted });
  add('04-measuring-resistance',
    svg(900, 560, 'Measuring resistance: R = V / I',
      panel(30, 110, 570, 420) + c + t(330, 480, 'current arrows: conventional, + to −', { size: 16, anchor: 'middle', fill: C.rust }) +
      calc(620, 110, 250, 'Calculation', ['R = V / I', '= 6.0 / 0.50', ['= 12 Ω', 700, C.rust]], { lh: 34 }).s +
      note(620, 300, 250, 160, ['Extended:', 'conventional current', '+ to −; electrons', 'move − to +'], { size: 17, lh: 28, fill: C.cream })),
    'A battery, an ammeter in series and a lamp with a voltmeter connected across it. The ammeter reads 0.50 A and the voltmeter 6.0 V, so R = 6.0 / 0.50 = 12 Ω. Conventional current is drawn from + to −, while electrons move from − to +.',
    'Ammeter in series, voltmeter in parallel, then R = V/I.',
    '## Resistance');
}

// 05 Resistance of a wire: two scale factors (Extended)
{
  const bar = (y, len, th, lbl, R, col) => `<rect x="70" y="${y - th / 2}" width="${len}" height="${th}" rx="${th / 2}" fill="${col}" stroke="${C.ink}" stroke-width="2.5"/>` + t(70, y - th / 2 - 12, lbl, { size: 18, weight: 600 }) + t(820, y + 8, R, { size: 24, weight: 700, anchor: 'end', fill: C.rust });
  add('05-wire-resistance-scaling',
    svg(900, 640, 'Longer: more resistance. Thicker: less.',
      ext(30, 72) + panel(30, 110, 840, 500) +
      bar(185, 200, 12, '2.0 m, 0.50 mm²', '3.4 Ω', '#d9a37a') +
      arrow(170, 210, 170, 280, { w: 3 }) + t(190, 252, 'length × 5.0/2.0 = × 2.5, so R × 2.5:  3.4 × 2.5', { size: 18, fill: C.tealDark, weight: 600 }) +
      bar(330, 500, 12, '5.0 m, 0.50 mm²', '8.5 Ω', '#d9a37a') +
      arrow(170, 355, 170, 425, { w: 3 }) + t(190, 397, 'area × 1.0/0.50 = × 2, so R ÷ 2:  8.5 ÷ 2', { size: 18, fill: C.tealDark, weight: 600 }) +
      bar(480, 500, 24, '5.0 m, 1.0 mm²', '4.25 → 4.3 Ω', '#d9a37a') +
      note(70, 535, 750, 52, ['R ∝ length;  R ∝ 1 / cross-sectional area'], { size: 20, weight: 700, fill: C.tealLight, edge: C.tealDark })),
    'A 2.0 m wire of area 0.50 mm² has resistance 3.4 Ω. Making it 5.0 m long multiplies R by 2.5 to 8.5 Ω; doubling the area to 1.0 mm² halves it to 4.25 Ω, about 4.3 Ω.',
    'Apply each change as its own scale factor: length directly, area inversely.',
    '## Resistance');
}

// 06 I-V graphs (Extended)
{
  const g = (x, y, w, h, fn, title, l1, l2, neg = true) => {
    const ox = neg ? x + w / 2 : x + w * 0.3, oy = y + h / 2 + (neg ? 0 : h * 0.25);
    let s = arrow(x, oy, x + w, oy, { w: 2.5 }) + arrow(ox, y + h, ox, y, { w: 2.5 }) + t(x + w + 4, oy + 26, 'V / V', { size: 16, anchor: 'end', weight: 600 }) + t(ox + 10, y + 12, 'I / A', { size: 16, weight: 600 });
    let d = ''; for (let v = -1; v <= 1.0001; v += 0.02) { const iv = fn(v); if (iv === null) continue; const px = ox + v * (neg ? w / 2 - 20 : ox - x - 10), py = oy - iv * (h / 2 - 22); d += (d ? 'L' : 'M') + px.toFixed(1) + ',' + py.toFixed(1); }
    return s + path(d, { stroke: C.tealDark, w: 4 }) + t(x + w / 2, y + h + 38, title, { size: 20, weight: 700, anchor: 'middle' }) + tl(x + w / 2, y + h + 66, [l1, l2], { size: 16, anchor: 'middle', fill: C.muted }, 21);
  };
  const lamp = (v) => Math.sign(v) * Math.pow(Math.abs(v), 0.5) * 0.95;
  const diode = (v) => (v < 0.55 ? 0 : Math.min(1.05, Math.pow((v - 0.55) / 0.3, 2)));
  add('06-iv-graphs',
    svg(900, 540, 'I–V graphs: the gradient shows resistance',
      ext(30, 72) + panel(30, 110, 840, 400) +
      g(60, 140, 240, 240, (v) => v * 0.85, 'Resistor', 'straight line through 0;', 'R constant') +
      g(330, 140, 240, 240, lamp, 'Filament lamp', 'less steep as it heats;', 'R increases') +
      g(600, 140, 240, 240, (v) => (v < 0 ? 0.0 : diode(v)), 'Diode', 'reverse: almost no current;', 'forward: steep after threshold')),
    'Three sketch I–V graphs with current on the vertical axis. A resistor gives a straight line through the origin. A filament lamp gives a curve through the origin that gets less steep at higher p.d., in both directions. A diode passes almost no current in reverse and, forwards, almost none until a small threshold p.d., then the current rises steeply.',
    'With I on the vertical axis, steeper means lower resistance.',
    '## Resistance');
}

// 07 Kettle: joules route and kW h route
{
  const a = calc(30, 210, 410, 'Energy in joules: W and s', ['E = P t', '= 2200 × (3.0 × 60)', '= 2200 × 180', ['= 396 000 J  (4.0 × 10⁵ J)', 700, C.rust]], { lh: 34 });
  const b = calc(460, 210, 410, 'Energy in kW h: kW and h', ['E = 2.2 kW × (3.0 / 60) h', '= 2.2 × 0.050 = 0.11 kW h', 'cost = 0.11 × 28', ['= 3.1 cents', 700, C.rust]], { lh: 34, fill: C.cream, edge: C.olive });
  add('07-kettle-two-unit-routes',
    svg(900, 210 + a.h + 110, 'A 2.2 kW kettle for 3.0 minutes on 230 V',
      note(30, 110, 840, 76, ['Current:  I = P / V = 2200 / 230 = 9.6 A'], { size: 22, weight: 700, fill: '#ffffff', edge: C.panelEdge }) +
      a.s + b.s + note(30, 210 + a.h + 20, 840, 64, ['Never mix the routes: kW × seconds gives a meaningless number.'], { size: 19, fill: C.tealLight, edge: C.tealDark })),
    'A 2.2 kW kettle on 230 V draws 2200 / 230 = 9.6 A. Over 3.0 minutes it transfers 2200 × 180 = 396 000 J; in kilowatt-hours that is 2.2 × 0.050 = 0.11 kW h, costing 0.11 × 28 = 3.1 cents at 28 cents per kW h.',
    'Use watts and seconds for joules; kilowatts and hours for kW h.',
    '## Electrical energy and power');
}
