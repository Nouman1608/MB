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

export const slug = 'cambridge-igcse-physics-0625-electromagnetic-effects-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const ahd = (x, y, a, c = C.ink, s = 9) => { const p = (dx, dy) => `${(x + dx * Math.cos(a) - dy * Math.sin(a)).toFixed(1)},${(y + dx * Math.sin(a) + dy * Math.cos(a)).toFixed(1)}`; return `<path d="M${p(s, 0)} L${p(-s, -s * 0.75)} L${p(-s, s * 0.75)} Z" fill="${c}"/>`; };
const pole = (x, y, w, h, n) => rect(x, y, w, h, n === 'N' ? C.rust : C.tealDark, C.ink, 3, 6) + t(x + w / 2, y + h / 2 + 11, n, { size: 30, weight: 700, anchor: 'middle', fill: '#ffffff' });
const into = (x, y, r = 14) => circ(x, y, r, C.panel, C.ink, 3) + W(x - r * 0.6, y - r * 0.6, x + r * 0.6, y + r * 0.6, C.ink, 3) + W(x - r * 0.6, y + r * 0.6, x + r * 0.6, y - r * 0.6, C.ink, 3);
const outof = (x, y, r = 14) => circ(x, y, r, C.panel, C.ink, 3) + dot(x, y, 4.5);

// 01 Motor effect vs induction, with hand rules
{
  const row = (y, title, a, b, c, out, fill) => `<rect x="30" y="${y}" width="840" height="96" rx="14" fill="${fill}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + t(55, y + 38, title, { size: 21, weight: 700 }) +
    t(55, y + 72, `${a}  +  ${b}  →  ${c}`, { size: 19 }) + t(845, y + 72, out, { size: 17, anchor: 'end', fill: C.muted });
  const axes3 = (ox, oy, hand, lbls) => {
    // up arrow, right/left arrow, oblique "away" arrow
    let s = arrow(ox, oy, ox, oy - 110, { w: 4, color: C.rust, marker: 'ahR' }) + arrow(ox, oy, ox + 70, oy - 55, { w: 4, color: C.tealDark, marker: 'ahT' });
    const sx = hand === 'L' ? 1 : -1;
    s += arrow(ox, oy, ox + sx * 120, oy, { w: 4, color: C.olive, marker: 'ahO' });
    s += hand === 'L' ? t(ox + 10, oy - 118, lbls[0], { size: 17, weight: 700, fill: C.rust }) : t(ox - 10, oy - 100, lbls[0], { size: 17, weight: 700, fill: C.rust, anchor: 'end' });
    s += hand === 'L' ? t(ox + 78, oy - 60, lbls[1], { size: 17, weight: 700, fill: C.tealDark }) : t(ox + 60, oy + 32, lbls[1], { size: 17, weight: 700, fill: C.tealDark, anchor: 'end' });
    s += t(ox + sx * 130, oy + 6, lbls[2], { size: 17, weight: 700, fill: C.olive, anchor: hand === 'L' ? 'start' : 'end' });
    return s + dot(ox, oy, 6);
  };
  add('01-motor-effect-vs-induction',
    svg(900, 690, 'Two effects that mirror each other',
      row(110, 'Motor effect', 'current', 'magnetic field', 'force (motion)', 'electrical → kinetic', C.tealLight) +
      row(220, 'Electromagnetic induction', 'motion', 'magnetic field', 'induced e.m.f. (current)', 'kinetic → electrical', C.cream) +
      ext(30, 334) +
      panel(30, 375, 410, 285) + t(235, 410, 'LEFT hand: motors', { size: 20, weight: 700, anchor: 'middle' }) +
      axes3(90, 580, 'L', ['thumb: motion (thrust)', 'first finger: Field', 'second: Current']) +
      panel(460, 375, 410, 285) + t(665, 410, 'RIGHT hand: generators', { size: 20, weight: 700, anchor: 'middle' }) +
      axes3(760, 580, 'R', ['thumb: motion', 'first: Field', 'second: Current']) +
      t(235, 645, 'field drawn going into the page', { size: 15, anchor: 'middle', fill: C.muted }) + t(665, 645, 'field drawn going into the page', { size: 15, anchor: 'middle', fill: C.muted })),
    'Motor effect: current plus magnetic field gives a force, transferring electrical energy to kinetic. Induction: motion plus magnetic field gives an induced e.m.f., transferring kinetic energy to electrical. For Extended, the left-hand rule (motors) and right-hand rule (generators) both use the first finger for field and second finger for current, with the thumb for motion; the two rules give opposite current directions for the same field and motion.',
    'Left hand for motors, right hand for generators: First finger Field, seCond finger Current, thumb motion.',
    '## Two effects that mirror each other');
}

// 02 Induction: magnet in and out of a coil
{
  const scene = (L, inward) => {
    const cy = 260, cx = L + 230;
    let s = '';
    // coil (side view)
    for (let i = 0; i < 6; i++) { const x = cx + i * 18; s += `<ellipse cx="${x}" cy="${cy}" rx="8" ry="44" fill="none" stroke="${C.olive}" stroke-width="4"/>`; }
    s += W(cx + 100, cy + 44, cx + 140, cy + 44, C.ink, 2.5) + W(cx + 140, cy + 44, cx + 140, cy + 120, C.ink, 2.5) + W(cx + 140, cy + 120, cx - 40, cy + 120, C.ink, 2.5) + W(cx - 40, cy + 120, cx - 40, cy + 44, C.ink, 2.5) + W(cx - 40, cy + 44, cx - 10, cy + 44, C.ink, 2.5);
    // galvanometer
    s += circ(cx + 50, cy + 120, 24, C.panel) + W(cx + 50, cy + 132, cx + 50 + (inward ? 12 : -12), cy + 104, C.rust, 3) + t(cx + 50, cy + 165, 'meter', { size: 15, anchor: 'middle', fill: C.muted });
    // magnet
    const mx = inward ? L + 40 : L + 20;
    s += pole(mx, cy - 22, 70, 44, 'S').replace(/font-size="30"/, 'font-size="22"').replace(/y="\d+(\.\d+)?" font-size="22"/, `y="${cy + 8}" font-size="22"`) + pole(mx + 70, cy - 22, 70, 44, 'N').replace(/font-size="30"/, 'font-size="22"').replace(/y="\d+(\.\d+)?" font-size="22"/, `y="${cy + 8}" font-size="22"`);
    s += inward ? arrow(L + 60, cy - 50, L + 160, cy - 50, { w: 4 }) : arrow(L + 140, cy - 50, L + 40, cy - 50, { w: 4 });
    s += t(cx - 10, cy - 64, inward ? 'N' : 'S', { size: 24, weight: 700, anchor: 'middle', fill: inward ? C.rust : C.tealDark });
    return s;
  };
  add('02-induction-magnet-and-coil',
    svg(900, 700, 'Inducing a current with a magnet',
      panel(30, 110, 410, 420) + t(235, 148, 'Push N pole in', { size: 21, weight: 700, anchor: 'middle' }) + scene(30, true) +
      t(235, 470, 'induced N pole repels the magnet', { size: 17, anchor: 'middle', weight: 600, fill: C.rust }) + t(235, 495, 'meter deflects one way', { size: 17, anchor: 'middle', fill: C.muted }) +
      panel(460, 110, 410, 420) + t(665, 148, 'Pull N pole out', { size: 21, weight: 700, anchor: 'middle' }) + scene(460, false) +
      t(665, 470, 'induced S pole attracts the magnet', { size: 17, anchor: 'middle', weight: 600, fill: C.tealDark }) + t(665, 495, 'meter deflects the other way', { size: 17, anchor: 'middle', fill: C.muted }) +
      t(450, 92, 'Extended: the induced e.m.f. opposes the change causing it', { size: 18, anchor: 'middle', fill: C.olive, weight: 700 }) +
      panel(30, 550, 840, 125) + t(60, 588, 'Bigger induced e.m.f.:', { size: 19, weight: 700 }) + t(60, 622, 'move faster  •  stronger magnet  •  more turns on the coil', { size: 19 }) +
      t(60, 655, 'None if there is no relative movement, or a wire moves parallel to the field lines.', { size: 17, fill: C.muted })),
    'A bar magnet is pushed, N pole first, into a coil connected to a meter: the near end of the coil becomes an N pole that repels the magnet. Pulling it out makes the near end an S pole that attracts it, and the meter deflects the other way. A bigger e.m.f. comes from faster movement, a stronger magnet or more turns.',
    'The induced current always opposes the movement that causes it.',
    '## Electromagnetic induction');
}

// 03 a.c. generator output vs coil position (Extended)
{
  const x0 = 120, x1 = 800, y0 = 400, A = 110, per = (x1 - x0) / 1;
  const X = (f) => x0 + f * (x1 - x0);
  let g = arrow(x0, y0 + 150, x0, y0 - 160, { w: 2.5 }) + arrow(x0, y0, x1 + 25, y0, { w: 2.5 }) + t(x1 + 25, y0 + 44, 'time', { size: 17, anchor: 'end', weight: 600 }) +
    `<text x="${x0 - 22}" y="${y0}" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x0 - 22} ${y0})">e.m.f.</text>`;
  g += path(sine(X(0), X(1), y0, A, per), { stroke: C.tealDark, w: 4 });
  g += path(sine(X(0), X(1), y0, A * 1.3, per / 2), { stroke: C.olive, w: 2.5, extra: 'stroke-dasharray="8 6"' });
  // coil icons: N|coil|S mini scenes
  const icon = (f, vertical, lbl) => { const cx = X(f), cy = 168; return rect(cx - 52, cy - 14, 14, 28, C.rust, C.ink, 1.5, 2) + rect(cx + 38, cy - 14, 14, 28, C.tealDark, C.ink, 1.5, 2) + (vertical ? W(cx, cy - 22, cx, cy + 22, C.ink, 5) : W(cx - 24, cy, cx + 24, cy, C.ink, 5)) + t(cx, cy + 46, lbl, { size: 15, anchor: 'middle', weight: 600, fill: vertical ? C.muted : C.rust }) + W(cx, cy + 56, cx, lbl === 'trough' ? y0 + A - 6 : y0 - (vertical ? 6 : A + 6), C.muted, 1.5).replace('stroke-linecap="round"', 'stroke-dasharray="4 4"'); };
  g += icon(0, true, 'zero') + icon(0.25, false, 'peak') + icon(0.5, true, 'zero') + icon(0.75, false, 'trough') + icon(1, true, 'zero');
  add('03-ac-generator-emf-time',
    svg(900, 720, 'a.c. generator: e.m.f. and coil position',
      ext(30, 72) + panel(30, 110, 840, 450) + g +
      t(140, 128 + 0, '', {}) +
panel(30, 575, 840, 125) + t(60, 610, 'Coil parallel to the field: sides cut lines fastest → peak e.m.f.', { size: 18 }) +
      t(60, 642, 'Coil perpendicular to the field: sides move along the lines → zero.', { size: 18 }) + `<line x1="60" y1="${672}" x2="110" y2="672" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="8 6"/>` + t(122, 678, 'spinning faster: higher peaks and more cycles per second', { size: 18, fill: C.olive, weight: 600 })),
    'An e.m.f.–time graph for one turn of a coil between N and S poles. The e.m.f. is zero when the coil is perpendicular to the field and at a peak or trough when it is parallel to the field. A dashed curve for faster spinning has higher peaks and more cycles in the same time.',
    'Peaks when the coil is parallel to the field, zero when perpendicular.',
    '## The a.c. generator (Extended only)');
}

// 04 Field of a wire and of a solenoid
{
  const wx = 230, wy = 330;
  let w = '';
  [40, 72, 112, 160].forEach((r, i) => { w += circ(wx, wy, r, 'none', C.tealDark, 2.5); w += ahd(wx - r, wy, Math.PI / 2, C.tealDark) + ahd(wx + r, wy, -Math.PI / 2, C.tealDark); });
  w += outof(wx, wy, 16) + t(wx, wy + 200, 'current out of the page', { size: 16, anchor: 'middle', fill: C.muted }) + t(wx, wy + 222, 'field: anticlockwise circles', { size: 16, anchor: 'middle', fill: C.muted });
  // solenoid
  const sx0 = 540, sx1 = 760, sy = 330, rh = 55;
  let s = '';
  for (let x = sx0; x <= sx1; x += 22) s += path(`M${x},${sy - rh} q-14,${rh} 0,${2 * rh}`, { stroke: C.olive, w: 3.5 }) + path(`M${x},${sy - rh} q14,${rh} 0,${2 * rh}`, { stroke: C.olive, w: 1.5, extra: 'stroke-dasharray="4 4" opacity="0.6"' });
  s += ahd(sx0 + 66 - 6, sy + 8, Math.PI / 2 + 0.25, C.rust, 8) + ahd(sx0 + 132 - 6, sy + 8, Math.PI / 2 + 0.25, C.rust, 8);
  [-28, 0, 28].forEach((d) => { s += W(sx0 - 20, sy + d, sx1 + 20, sy + d, C.tealDark, 2.5) + ahd(sx0 + 120, sy + d, 0, C.tealDark); });
  [[60, 1], [95, 1]].forEach(([h]) => { s += path(`M${sx1 + 20},${sy - 14} C${sx1 + 90},${sy - h} ${sx1 + 40},${sy - h - 40} ${(sx0 + sx1) / 2},${sy - h - 40} C${sx0 - 40},${sy - h - 40} ${sx0 - 90},${sy - h} ${sx0 - 20},${sy - 14}`, { stroke: C.tealDark, w: 2.5 }) + ahd((sx0 + sx1) / 2, sy - h - 40, Math.PI, C.tealDark); s += path(`M${sx1 + 20},${sy + 14} C${sx1 + 90},${sy + h} ${sx1 + 40},${sy + h + 40} ${(sx0 + sx1) / 2},${sy + h + 40} C${sx0 - 40},${sy + h + 40} ${sx0 - 90},${sy + h} ${sx0 - 20},${sy + 14}`, { stroke: C.tealDark, w: 2.5 }) + ahd((sx0 + sx1) / 2, sy + h + 40, Math.PI, C.tealDark); });
  s += t(sx1 + 70, sy + 10, 'N', { size: 30, weight: 700, fill: C.rust, anchor: 'middle' }) + t(sx0 - 70, sy + 10, 'S', { size: 30, weight: 700, fill: C.tealDark, anchor: 'middle' });
  s += t(650, 560, 'front of each turn: current downwards', { size: 16, anchor: 'middle', fill: C.rust }) + t(650, 582, 'grip rule: thumb points to N', { size: 16, anchor: 'middle', fill: C.muted });
  add('04-wire-and-solenoid-fields',
    svg(900, 720, 'Magnetic field of a current',
      panel(30, 110, 400, 500) + t(230, 148, 'Straight wire (end view)', { size: 20, weight: 700, anchor: 'middle' }) + w +
      panel(450, 110, 420, 500) + t(660, 148, 'Solenoid', { size: 20, weight: 700, anchor: 'middle' }) + s +
      panel(30, 625, 840, 75) + ext(50, 648) + t(210, 670, 'Strongest near the wire; strong and uniform inside a solenoid;', { size: 17 }) + t(210, 692, 'more current → stronger field; reverse the current → field reverses.', { size: 17 }).replace('y="692"', 'y="690"')),
    'End view of a straight wire with current out of the page, surrounded by anticlockwise concentric circles that get further apart with distance. A solenoid with current flowing down the front of each turn has strong, parallel field lines inside running from S to N and a bar-magnet-like field outside, with the N pole at the right-hand end.',
    'Right-hand grip rule: thumb along the current for a wire; thumb to the N pole for a solenoid.',
    '## Magnetic effect of a current');
}

// 05 Force on a conductor: reversing current and field
{
  const cell = (x, y, cur0, fieldRight, force, lbl) => {
    let s = panel(x, y, 200, 250) + t(x + 100, y + 34, lbl, { size: 17, weight: 700, anchor: 'middle' });
    s += pole(x + 14, y + 90, 36, 70, fieldRight ? 'N' : 'S').replace(/font-size="30"/, 'font-size="22"') + pole(x + 150, y + 90, 36, 70, fieldRight ? 'S' : 'N').replace(/font-size="30"/, 'font-size="22"');
    s += arrow(fieldRight ? x + 58 : x + 142, y + 200, fieldRight ? x + 142 : x + 58, y + 200, { w: 2.5, color: C.tealDark, marker: 'ahT' }) + t(x + 100, y + 230, 'field', { size: 15, anchor: 'middle', fill: C.tealDark });
    s += (cur0 ? into(x + 100, y + 125) : outof(x + 100, y + 125));
    s += force === 'up' ? arrow(x + 100, y + 105, x + 100, y + 55, { w: 5, color: C.rust, marker: 'ahR' }) : arrow(x + 100, y + 145, x + 100, y + 190, { w: 5, color: C.rust, marker: 'ahR' });
    return s;
  };
  add('05-force-on-conductor',
    svg(900, 560, 'Force on a current-carrying wire',
      cell(30, 110, true, true, 'down', 'start') + cell(243, 110, false, true, 'up', 'current reversed') + cell(456, 110, true, false, 'up', 'field reversed') + cell(669, 110, false, false, 'down', 'both reversed') +
      into(70, 393, 11) + t(90, 400, 'current into the page', { size: 17, fill: C.muted }) + outof(320, 393, 11) + t(340, 400, 'current out of the page', { size: 17, fill: C.muted }) + arrow(580, 393, 620, 393, { w: 4, color: C.rust, marker: 'ahR' }) + t(632, 400, 'force on the wire', { size: 17, fill: C.muted }) +
      note(30, 420, 840, 115, ['Force is at right angles to both the current and the field; none if the wire is parallel to the field.', 'Extended: a beam of electrons counts as a current opposite to their motion;', 'apply the left-hand rule to that current.'], { size: 17, lh: 28, fill: C.tealLight, edge: C.tealDark })),
    'Four end views of a wire between magnetic poles. Reversing the current reverses the force, reversing the field reverses the force, and reversing both leaves the force unchanged. For Extended, an electron beam is treated as a current in the opposite direction to the electrons\' motion.',
    'Reverse one of current or field and the force reverses; reverse both and it does not.',
    '## Force on a current-carrying conductor');
}

// 06 Transformer worked example
{
  const cx = 110, cy = 170, cw = 340, ch = 300, th = 50;
  let s = `<path d="M${cx},${cy} h${cw} v${ch} h${-cw} Z M${cx + th},${cy + th} v${ch - 2 * th} h${cw - 2 * th} v${-(ch - 2 * th)} Z" fill="#a9b0b8" fill-rule="evenodd" stroke="${C.ink}" stroke-width="3"/>`;
  const coil = (x, n, col) => { let o = ''; for (let i = 0; i < n; i++) { const y = cy + th + 14 + i * ((ch - 2 * th - 28) / (n - 1)); o += `<rect x="${x - 34}" y="${y - 5}" width="${th + 18}" height="10" rx="5" fill="${col}" stroke="${C.ink}" stroke-width="1.5"/>`; } return o; };
  s += coil(cx + th / 2 + 8, 10, C.mustard) + coil(cx + cw - th / 2 + 8, 5, C.rust);
  s += W(cx - 50, cy + 110, cx - 9, cy + 110, C.ink, 3) + W(cx - 50, cy + 190, cx - 9, cy + 190, C.ink, 3) + cs.ac(cx - 50, cy + 150, 90, 40);
  s += W(cx + cw + 25, cy + 120, cx + cw + 70, cy + 120, C.ink, 3) + W(cx + cw + 25, cy + 180, cx + cw + 70, cy + 180, C.ink, 3);
  s += t(cx + th / 2, cy + ch + 34, 'primary', { size: 17, anchor: 'middle', weight: 700 }) + t(cx + th / 2, cy + ch + 56, '2300 turns, 230 V', { size: 16, anchor: 'middle' });
  s += t(cx + cw - th / 2, cy + ch + 34, 'secondary', { size: 17, anchor: 'middle', weight: 700 }) + t(cx + cw - th / 2, cy + ch + 56, 'Ns turns, 6.0 V, 0.50 A', { size: 16, anchor: 'middle' });
  s += t(cx + cw / 2, cy - 14, 'soft-iron core', { size: 17, anchor: 'middle', fill: C.muted, weight: 600 });
  const k = calc(570, 330, 300, 'Worked example 1', ['Vp / Vs = Np / Ns', 'Ns = 2300 × 6.0 / 230', ['   = 60 turns', 700, C.rust], 'Extended: IpVp = IsVs', 'Ip = (0.50 × 6.0) / 230', ['   = 0.013 A', 700, C.rust]], { lh: 30, size: 18 });
  add('06-transformer-worked-example',
    svg(900, 330 + k.h + 30, 'Step-down transformer: a phone charger',
      panel(30, 110, 525, 330 + k.h - 110) + s + k.s +
      note(570, 110, 300, 200, ['a.c. in primary →', 'changing field in core →', 'induced e.m.f. in secondary', '(d.c. gives a steady field:', 'no e.m.f.)'], { size: 16, lh: 26, fill: C.cream })),
    'A soft-iron core with a primary coil of 2300 turns on 230 V a.c. and a secondary coil giving 6.0 V at 0.50 A. Ns = 2300 × 6.0 / 230 = 60 turns, and for Extended Ip = (0.50 × 6.0) / 230 = 0.013 A. An alternating current makes a changing field in the core that induces an e.m.f. in the secondary.',
    'Vp/Vs = Np/Ns; with 100% efficiency IpVp = IsVs, so stepping voltage down steps current up.',
    '## The transformer');
}

// 07 Transmission losses (Extended)
{
  const bx = 340, bw = 500; // 20 MW = bw
  const bar = (y, lbl, I, loss, lossW, lossTxt) => t(60, y + 30, lbl, { size: 22, weight: 700 }) + t(60, y + 58, I, { size: 16, fill: C.muted }) +
    rect(bx, y, bw, 50, C.tealLight, C.tealDark, 2, 6) + rect(bx + bw - Math.max(lossW, 3), y, Math.max(lossW, 3), 50, C.rust, C.rust, 1, 0) + t(bx + 12, y + 32, '20 MW sent', { size: 17, weight: 600 }) +
    t(bx + bw, y + 78, loss, { size: 18, weight: 700, anchor: 'end', fill: C.rust }) + t(bx + bw, y + 100, lossTxt, { size: 16, anchor: 'end', fill: C.muted });
  add('07-transmission-losses',
    svg(900, 640, 'Why transmit at high voltage',
      ext(30, 72) + panel(30, 110, 840, 330) + t(60, 150, '20 MW through cables of total resistance 5.0 Ω', { size: 19, weight: 600 }) +
      bar(190, '400 kV', 'I = 20 × 10⁶ / 400 × 10³ = 50 A', 'loss = 50² × 5.0 = 12 500 W (12.5 kW)', 0, 'a tiny sliver') +
      bar(310, '20 kV', 'I = 20 × 10⁶ / 20 × 10³ = 1000 A', 'loss = 1000² × 5.0 = 5.0 × 10⁶ W (5.0 MW)', bw / 4, 'a quarter of the power sent') +
      note(30, 460, 840, 150, ['Voltage × 20 → current ÷ 20 → loss ÷ 20² = 400', 'Use P = I²R with the current in the cables.', 'Smaller current: less energy wasted heating the cables; thinner cables.'], { size: 19, lh: 34, fill: C.cream })),
    'Sending 20 MW through 5.0 Ω cables: at 400 kV the current is 50 A and the loss is 12.5 kW, a tiny fraction; at 20 kV the current is 1000 A and the loss is 5.0 MW, a quarter of the power sent. Twenty times the voltage gives one twentieth of the current and one four-hundredth of the loss.',
    'Higher voltage, smaller current, much smaller I²R loss in the cables.',
    '## The transformer');
}
