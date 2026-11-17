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

export const slug = 'cambridge-igcse-physics-0625-kinetic-particle-model-of-matter-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const ahd = (x, y, a, c = C.ink, s = 9) => { const p = (dx, dy) => `${(x + dx * Math.cos(a) - dy * Math.sin(a)).toFixed(1)},${(y + dx * Math.sin(a) + dy * Math.cos(a)).toFixed(1)}`; return `<path d="M${p(s, 0)} L${p(-s, -s * 0.75)} L${p(-s, s * 0.75)} Z" fill="${c}"/>`; };
const pt = (x, y, r = 11) => circ(x, y, r, '#ffffff', C.tealDark, 2.5);
const mv = (x, y, a, L = 34) => arrow(x + 12 * Math.cos(a), y + 12 * Math.sin(a), x + L * Math.cos(a), y + L * Math.sin(a), { w: 3, color: C.olive, marker: 'ahO' });

// 01 States and changes of state
{
  const box = (x, name, rows) => panel(x, 110, 260, 250) + t(x + 130, 150, name, { size: 22, weight: 700, anchor: 'middle' }) + rows.map(([k, v], i) => t(x + 20, 190 + i * 40, k, { size: 16, fill: C.muted }) + t(x + 240, 190 + i * 40, v, { size: 17, weight: 700, anchor: 'end' })).join('');
  const st = (x, lbl, fill) => `<rect x="${x}" y="470" width="190" height="70" rx="35" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x + 95, 513, lbl, { size: 22, weight: 700, anchor: 'middle' });
  const arcU = (x1, x2, lbl, col) => path(`M${x1},465 Q${(x1 + x2) / 2},395 ${x2},465`, { stroke: col, w: 3.5, extra: `marker-end="url(#${col === C.rust ? 'ahR' : 'ah'})"` }) + t((x1 + x2) / 2, 410, lbl, { size: 18, weight: 700, anchor: 'middle', fill: col });
  const arcD = (x1, x2, lbl, col) => path(`M${x1},545 Q${(x1 + x2) / 2},615 ${x2},545`, { stroke: col, w: 3.5, extra: `marker-end="url(#${col === C.blue ? 'ah' : 'ah'})"` }) + t((x1 + x2) / 2, 620, lbl, { size: 18, weight: 700, anchor: 'middle', fill: col });
  add('01-states-and-changes',
    svg(900, 660, 'Solids, liquids and gases',
      box(30, 'Solid', [['shape', 'fixed'], ['volume', 'fixed'], ['flows?', 'no'], ['compressible?', 'almost not']]) +
      box(320, 'Liquid', [['shape', 'of container'], ['volume', 'fixed'], ['flows?', 'yes'], ['compressible?', 'almost not']]) +
      box(610, 'Gas', [['shape', 'fills container'], ['volume', 'fills container'], ['flows?', 'yes'], ['compressible?', 'easily']]) +
      st(80, 'solid', C.cream) + st(355, 'liquid', C.tealLight) + st(630, 'gas', '#ffffff') +
      arcU(230, 395, 'melting', C.rust) + arcU(505, 670, 'boiling / evaporation', C.rust) +
      arcD(395, 230, 'solidification', C.blue) + arcD(670, 505, 'condensation', C.blue)),
    'Solids have a fixed shape and volume, do not flow and are almost incompressible; liquids take the shape of their container, have a fixed volume and flow; gases fill their container, flow and are easily compressed. Melting turns solid to liquid and solidification reverses it; boiling or evaporation turns liquid to gas and condensation reverses it.',
    'Four named changes of state link the three states.',
    '## States of matter (2.1.1)');
}

// 02 Gas pressure from collisions
{
  let s = rect(60, 160, 420, 330, C.tealLight, C.ink, 4, 6);
  const ps = [[140, 230, -0.6], [260, 300, 2.6], [360, 220, 0.4], [180, 400, 1.2], [320, 420, -2.2], [420, 330, 0.1]];
  ps.forEach(([x, y, a]) => { s += pt(x, y) + mv(x, y, a); });
  // collision at right wall
  s += path('M420,330 L476,300 L420,262', { stroke: C.rust, w: 2.5, extra: 'stroke-dasharray="6 5"' }) + arrow(484, 300, 530, 300, { w: 5, color: C.rust, marker: 'ahR' }) + t(540, 306, 'push on wall', { size: 17, weight: 700, fill: C.rust });
  add('02-gas-pressure-collisions',
    svg(900, 600, 'Where gas pressure comes from',
      panel(30, 110, 840, 460) + s +
      tl(540, 190, ['Particles move fast,', 'randomly, in straight', 'lines between collisions.'], { size: 17 }, 24) +
      note(540, 360, 310, 110, ['More frequent or harder', 'collisions with the walls', '→ larger pressure'], { size: 17, lh: 25, fill: C.tealLight, edge: C.tealDark }) +
      ext(60, 505) + t(230, 527, 'each rebound changes momentum: force ÷ wall area = pressure', { size: 17 })),
    'Gas particles in a box move fast and randomly; one rebounds from the right-hand wall and pushes on it. Many collisions each second produce the pressure; more frequent or harder collisions give a larger pressure. For Extended, the force from the collisions divided by the wall area is the pressure.',
    'Pressure comes from particles colliding with the walls, not with each other.',
    '## Gas pressure');
}

// 03 Brownian motion
{
  // apparatus
  let a = rect(80, 330, 150, 80, '#eef2f4', C.ink, 3, 4) + t(155, 376, 'smoke cell', { size: 16, anchor: 'middle' });
  a += rect(140, 190, 30, 110, C.panel, C.ink, 3, 4) + rect(132, 300, 46, 20, C.rock, C.ink, 2.5, 3) + t(185, 210, 'microscope', { size: 16 });
  a += `<path d="M300,345 L330,330 L330,410 L300,395 Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + arrow(298, 370, 240, 370, { w: 3, color: C.olive, marker: 'ahO' }) + t(300, 440, 'light from the side', { size: 16, anchor: 'middle' });
  // zigzag
  let zz = '', x = 590, y = 330, d = `M${x},${y}`, seed = 3;
  const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  for (let i = 0; i < 14; i++) { const ang = rnd() * 2 * Math.PI, L = 45 + rnd() * 45; let nx = x + L * Math.cos(ang), ny = y + L * Math.sin(ang); if (nx < 490 || nx > 830) nx = x - L * Math.cos(ang); if (ny < 185 || ny > 470) ny = y - L * Math.sin(ang); x = nx; y = ny; d += ` L${x.toFixed(0)},${y.toFixed(0)}`; }
  zz += path(d, { stroke: C.olive, w: 2.5 }) + circ(x, y, 9, C.mustard, C.ink, 2) + circ(590, 330, 5, C.muted, C.muted, 1);
  zz += t(645, 505, 'random, jerky, zigzag path of a bright speck', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
  // explanation inset
  let e = circ(220, 640, 34, C.mustard, C.ink, 2.5) + t(220, 646, 'smoke', { size: 15, anchor: 'middle', weight: 700 });
  [[-1.0, 1], [0.3, 1], [1.2, 1], [2.3, 1], [3.1, 1], [-2.4, 1], [-0.1, 1.6], [0.9, 1.5]].forEach(([q], i) => { const r = 62 + (i % 2) * 10; const px = 220 + r * Math.cos(q), py = 640 + r * Math.sin(q); e += dot(px, py, 4.5, C.tealDark) + arrow(px, py, 220 + 42 * Math.cos(q), 640 + 42 * Math.sin(q), { w: 2, color: C.tealDark, marker: 'ahT' }); });
  e += arrow(262, 640, 320, 618, { w: 4, color: C.rust, marker: 'ahR' }) + t(330, 615, 'net push', { size: 16, weight: 700, fill: C.rust });
  add('03-brownian-motion',
    svg(900, 770, 'Brownian motion: evidence for moving particles',
      panel(30, 110, 400, 420) + t(230, 150, 'Set-up', { size: 20, weight: 700, anchor: 'middle' }) + a +
      panel(450, 110, 420, 420) + t(660, 150, 'What you see', { size: 20, weight: 700, anchor: 'middle' }) + zz +
      panel(30, 545, 840, 200) + e +
      tl(420, 600, ['Fast, randomly moving air molecules (too small', 'to see) hit the smoke particle from all sides.', 'At each instant more hit one side, so it is', 'pushed in a random direction.'], { size: 17 }, 25)),
    'Smoke in a small glass cell is lit from the side and viewed through a microscope. Each smoke particle appears as a bright speck moving in a random, jerky, zigzag path. Fast-moving air molecules, too small to see, hit it unevenly from all sides, so the net push keeps changing direction.',
    'Uneven hits from invisible, fast-moving molecules jostle the visible smoke particles.',
    '## Brownian motion');
}

// 04 Pressure changes and the kelvin scale
{
  const boxP = (x, w, n, fast, lbl, res) => { let s = rect(x, 170, w, 200, C.tealLight, C.ink, 3.5, 4); const pts = [[0.2, 0.25], [0.7, 0.3], [0.45, 0.6], [0.15, 0.8], [0.8, 0.75], [0.55, 0.15]]; pts.slice(0, n).forEach(([u, v], i) => { const px = x + 20 + u * (w - 40), py = 190 + v * 160; s += pt(px, py, 9) + mv(px, py, i * 1.9, fast ? 44 : 28); }); return s + t(x + w / 2, 400, lbl, { size: 17, weight: 700, anchor: 'middle' }) + t(x + w / 2, 424, res, { size: 16, anchor: 'middle', fill: C.rust, weight: 700 }); };
  const T = [[-273, 0, 'absolute zero'], [-196, 77, ''], [0, 273, 'water freezes'], [37, 310, 'body'], [100, 373, 'water boils']];
  const Y = (c) => 700 - ((c + 273) / 373) * 200;
  let k = W(330, 500, 330, 700, C.ink, 3) + W(430, 500, 430, 700, C.ink, 3) + t(330, 490, '°C', { size: 18, weight: 700, anchor: 'middle' }) + t(430, 490, 'K', { size: 18, weight: 700, anchor: 'middle' });
  T.forEach(([c, kk, n]) => { const y = Y(c); k += W(320, y, 440, y, C.muted, 1.5) + t(315, y + 6, String(c).replace('-', '−'), { size: 16, anchor: 'end' }) + t(445, y + 6, String(kk), { size: 16 }) + (n ? t(500, y + 6, n, { size: 15, fill: C.muted }) : ''); });
  add('04-pressure-and-kelvin',
    svg(900, 760, 'Gas pressure, temperature and volume',
      panel(30, 110, 840, 330) + t(450, 146, 'Fixed mass of gas', { size: 19, weight: 700, anchor: 'middle' }) +
      boxP(60, 220, 6, false, 'start', '') + boxP(330, 220, 6, true, 'hotter, same volume', 'faster: more and harder hits') + boxP(600, 150, 6, false, 'smaller, same temp.', 'more hits per area') +
      t(620, 120, '', {}) +
      panel(30, 455, 840, 280) + t(60, 492, 'Kelvin scale', { size: 20, weight: 700 }) + t(60, 525, 'T (K) = θ (°C) + 273', { size: 20, weight: 700, fill: C.tealDark }) +
      t(60, 560, 'a change of 25 °C', { size: 16, fill: C.muted }) + t(60, 582, 'is a change of 25 K', { size: 16, fill: C.muted }) + k),
    'Three boxes of the same gas particles: heated at constant volume they move faster and hit the walls more often and harder; squeezed into a smaller volume at constant temperature they hit each unit area more often. Both raise the pressure. Below, a °C scale beside a kelvin scale: −273 °C is 0 K, −196 °C is 77 K, 0 °C is 273 K, 37 °C is 310 K and 100 °C is 373 K.',
    'Hotter or squeezed, the walls are hit more often: higher pressure. Add 273 to convert °C to K.',
    '## Gases and the absolute scale of temperature (2.1.3)');
}

// 05 pV = constant (Extended)
{
  const g1 = axes(110, 520, 300, 300, { xmax: 70, ymax: 300, xt: [0, 20, 40, 60], yt: [0, 100, 200, 300], xl: 'V / cm³', yl: 'p / kPa' });
  let d = ''; for (let v = 20; v <= 70; v += 1) d += (d ? 'L' : 'M') + g1.X(v).toFixed(1) + ',' + g1.Y(6000 / v).toFixed(1);
  let s1 = g1.s + path(d, { stroke: C.tealDark, w: 4 }) + dot(g1.X(60), g1.Y(100), 7, C.rust) + dot(g1.X(24), g1.Y(250), 7, C.rust) + t(g1.X(60), g1.Y(100) - 16, '60, 100', { size: 15, anchor: 'middle', weight: 700, fill: C.rust }) + t(g1.X(24) + 12, g1.Y(250) - 8, '24, 250', { size: 15, weight: 700, fill: C.rust });
  const g2 = axes(560, 520, 280, 300, { xmax: 0.05, ymax: 300, xt: [0, 0.02, 0.04], yt: [0, 100, 200, 300], xl: '1/V / cm⁻³', yl: 'p / kPa', xfmt: (v) => v });
  let s2 = g2.s + W(g2.X(0), g2.Y(0), g2.X(0.05), g2.Y(300), C.tealDark, 4) + dot(g2.X(1 / 60), g2.Y(100), 7, C.rust) + dot(g2.X(1 / 24), g2.Y(250), 7, C.rust);
  const k = calc(30, 600, 840, 'Worked examples', ['syringe: 100 × 60 = p₂ × 24, so p₂ = 6000 / 24 = 250 kPa', 'bubble: V₂ = (3.0 × 10⁵ × 2.0) / 1.0 × 10⁵ = 6.0 cm³'], { lh: 32 });
  add('05-pv-constant',
    svg(900, 600 + k.h + 30, 'p V = constant at constant temperature',
      ext(30, 72) + panel(30, 110, 840, 475) + s1 + s2 + t(260, 165, 'p against V: curve', { size: 17, weight: 700, anchor: 'middle' }) + t(700, 165, 'p against 1/V: straight line', { size: 17, weight: 700, anchor: 'middle' }) + k.s),
    'For a fixed mass of gas at constant temperature, p against V is a falling curve that never meets the axes, through (60 cm³, 100 kPa) and (24 cm³, 250 kPa); p against 1/V is a straight line through the origin. In the syringe example 100 × 60 = p₂ × 24 gives 250 kPa; a 2.0 cm³ bubble at 3.0 × 10⁵ Pa becomes 6.0 cm³ at 1.0 × 10⁵ Pa.',
    'Halve the volume and the pressure doubles; p against 1/V is a straight line.',
    '## Gases and the absolute scale of temperature (2.1.3)');
}
