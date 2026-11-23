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

export const slug = 'cambridge-igcse-physics-0625-transfer-of-thermal-energy';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const flame = (x, y, s = 1) => `<path d="M${x},${y} q${-14 * s},${-18 * s} 0,${-46 * s} q${14 * s},${28 * s} 0,${46 * s} z" fill="${C.mustard}" stroke="${C.rust}" stroke-width="2.5"/>`;
const loopArrow = (d, col = C.rust) => path(d, { stroke: col, w: 4, extra: `marker-end="url(#${col === C.rust ? 'ahR' : col === C.tealDark ? 'ahT' : 'ah'})"` });

// 01 Water is a poor conductor
{
  const tx = 330, ty = 140, tw = 70, th = 380;
  let s = `<path d="M${tx},${ty} L${tx},${ty + th - 30} Q${tx},${ty + th} ${tx + tw / 2},${ty + th} Q${tx + tw},${ty + th} ${tx + tw},${ty + th - 30} L${tx + tw},${ty}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
  s += rect(tx + 14, ty + th - 62, 42, 34, '#ffffff', C.blue, 2.5, 4) + path(`M${tx + 14},${ty + th - 50} l42,0 M${tx + 14},${ty + th - 40} l42,0 M${tx + 28},${ty + th - 62} l0,34 M${tx + 42},${ty + th - 62} l0,34`, { stroke: C.muted, w: 1.5 });
  s += flame(tx - 20, ty + 120, 1.1) + t(tx - 40, ty + 150, 'heat near the top', { size: 16, weight: 700, anchor: 'end', fill: C.rust });
  [[tx + 20, ty + 40], [tx + 45, ty + 25], [tx + 30, ty + 70]].forEach(([x, y]) => { s += circ(x, y, 6, '#ffffff', C.tealDark, 1.5); });
  s += t(tx + tw + 20, ty + 50, 'water boils here', { size: 16, weight: 700 }) + t(tx + tw + 20, ty + th - 40, 'ice in wire gauze stays', { size: 16, weight: 700 }) + t(tx + tw + 20, ty + th - 18, 'unmelted for some time', { size: 16, weight: 700 });
  add('01-water-poor-conductor',
    svg(900, 680, 'Water is a poor conductor',
      panel(30, 110, 840, 440) + s +
      note(30, 565, 840, 92, ['Heating at the top stops convection: hot water stays up there.', 'Energy can reach the ice only by conduction through the water, and it does so very slowly.'], { size: 17, lh: 28, fill: C.cream })),
    'A test tube of cold water with ice wrapped in wire gauze at the bottom is heated near the top. The water at the top boils while the ice stays unmelted for some time, because convection is prevented and conduction through water is very slow.',
    'Boiling water above, unmelted ice below: water conducts poorly.',
    '## Conduction (2.3.1)');
}

// 02 Lattice vibrations and free electrons (Extended)
{
  const lattice = (x0, electrons) => { let s = ''; for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) { const x = x0 + 30 + c * 42, y = 210 + r * 42; const hot = c < 2; s += circ(x, y, 13, hot ? C.rust : C.tealLight, C.ink, 2); if (hot) s += path(`M${x - 20},${y} l-5,0 M${x + 20},${y} l5,0`, { stroke: C.rust, w: 2 }); } if (electrons) { [[60, 230], [140, 270], [230, 210], [300, 290], [180, 320], [330, 230]].forEach(([dx, y], i) => { s += circ(x0 + dx + 21, y + 21 - 21, 5, C.blue, C.blue, 1) + arrow(x0 + dx + 27, y, x0 + dx + 47, y - 4 + (i % 2) * 8, { w: 2, color: C.blue }); }); } return s; };
  add('02-lattice-and-free-electrons',
    svg(900, 560, 'How solids conduct',
      ext(30, 72) + panel(30, 110, 410, 330) + t(235, 148, 'All solids: lattice vibrations', { size: 18, weight: 700, anchor: 'middle' }) + lattice(40, false) + t(235, 400, 'vibrations passed to neighbours: slow', { size: 16, anchor: 'middle' }) + t(90, 182, 'hot end', { size: 15, weight: 700, fill: C.rust }) +
      panel(460, 110, 410, 330) + t(665, 148, 'Metals: plus free electrons', { size: 18, weight: 700, anchor: 'middle' }) + lattice(470, true) + t(665, 400, 'electrons carry energy quickly: fast', { size: 16, anchor: 'middle' }) + t(520, 182, 'hot end', { size: 15, weight: 700, fill: C.rust }) +
      note(30, 455, 840, 82, ['Gases and most liquids: particles further apart, no lattice, no free electrons: poor conductors.', 'Glass, brick, concrete, stone: between insulators (foam, wool) and metals.'], { size: 16, lh: 26, fill: C.cream })),
    'Left: in any solid, heated particles at the hot end vibrate more and pass the vibrations along the lattice, which is slow. Right: in a metal, free electrons also gain kinetic energy and carry it quickly to colder regions, so metals conduct best. Gases and most liquids conduct poorly.',
    'Lattice vibrations in all solids; free electrons make metals fast.',
    '## Conduction (2.3.1)');
}

// 03 Convection: chimney box
{
  let s = rect(140, 260, 440, 220, '#eef2f4', C.ink, 3, 4) + rect(200, 170, 60, 90, '#eef2f4', C.ink, 3) + rect(460, 170, 60, 90, '#eef2f4', C.ink, 3);
  s += rect(482, 420, 16, 50, '#ffffff', C.ink, 2) + flame(490, 418, 0.8) + t(490, 500, 'candle', { size: 15, anchor: 'middle', fill: C.muted });
  s += rect(195, 120, 70, 14, C.rockDark, C.ink, 2) + t(275, 131, 'smouldering paper', { size: 15, fill: C.muted }) + path('M230,138 q-8,-10 0,-20 q8,-10 0,-20', { stroke: C.muted, w: 2.5 });
  s += loopArrow('M230,150 L230,380 Q230,420 280,420 L440,420 Q490,420 490,370 L490,150', C.muted);
  s += t(240, 330, 'cool air', { size: 15, weight: 700 }) + t(530, 220, 'warm air', { size: 15, weight: 700 });
  const steps = ['air above the candle is heated and expands', 'its density decreases, so it rises', 'cooler, denser air sinks to replace it', 'a convection current forms'];
  let st = ''; steps.forEach((x, i) => { st += badge(640, 180 + i * 80, 16, String(i + 1), C.cream) + tl(666, 174 + i * 80, wrap(x, 22), { size: 16 }, 21); });
  add('03-convection-chimney-box',
    svg(900, 580, 'Convection in air',
      panel(30, 110, 580, 420) + s + panel(620, 110, 250, 420) + st +
      t(320, 555, 'smoke is drawn down one chimney and up the other', { size: 16, anchor: 'middle', fill: C.muted })),
    'A box with a glass front and two chimneys has a lit candle under one chimney. Smoke from smouldering paper held over the other chimney is drawn down it, across the box and up the chimney above the candle, because air heated by the candle expands, becomes less dense and rises while cooler, denser air sinks to replace it.',
    'Heated fluid expands, becomes less dense and rises; cooler fluid sinks.',
    '## Convection (2.3.2)');
}

// 04 Radiation and surfaces
{
  const surf = (x, title, fill, edge, rows) => panel(x, 110, 410, 230) + rect(x + 20, 150, 120, 150, fill, edge, 3, 6) + t(x + 160, 170, title, { size: 19, weight: 700 }) + rows.map(([k, v], i) => t(x + 160, 210 + i * 32, k, { size: 17 }) + t(x + 390, 210 + i * 32, v, { size: 17, weight: 700, anchor: 'end', fill: v === 'best' ? C.rust : C.tealDark })).join('');
  const can = (x, fill, edge, lbl) => rect(x, 470, 70, 100, fill, edge, 3, 4) + rect(x + 25, 430, 8, 80, '#ffffff', C.ink, 1.5, 3) + t(x + 35, 595, lbl, { size: 15, anchor: 'middle', weight: 700 });
  add('04-radiation-surfaces',
    svg(900, 700, 'Thermal radiation: infrared',
      surf(30, 'dull black', C.ink, C.ink, [['absorbing', 'best'], ['emitting', 'best'], ['reflecting', 'worst']]) +
      surf(460, 'shiny white/silver', '#f4f6f6', C.muted, [['absorbing', 'worst'], ['emitting', 'worst'], ['reflecting', 'best']]) +
      ext(30, 355) + panel(30, 395, 840, 280) +
      t(60, 425, 'Emitters: same hot water', { size: 17, weight: 700 }) + can(80, C.ink, C.ink, 'black: cools faster') + can(250, '#e8ebee', C.muted, 'shiny') +
      t(480, 425, 'Absorbers: same cold water, same distance', { size: 17, weight: 700 }) + can(560, C.ink, C.ink, 'black: warms faster') + can(760, '#e8ebee', C.muted, 'shiny') +
      rect(690, 470, 24, 60, C.mustard, C.ink, 2.5, 4) + t(702, 555, 'lamp', { size: 14, anchor: 'middle', fill: C.muted }) + arrow(686, 490, 640, 490, { w: 2.5, color: C.rust, marker: 'ahR' }) + arrow(718, 490, 755, 490, { w: 2.5, color: C.rust, marker: 'ahR' }) +
      t(450, 655, 'Keep volume, starting temperature, distance, can size and lids the same.', { size: 16, anchor: 'middle', fill: C.muted })),
    'Dull black surfaces are the best absorbers and emitters of infrared and the worst reflectors; shiny white or silver surfaces are the reverse. For Extended: two identical cans of hot water, one black and one shiny, show the black can cools faster; two cans of cold water equidistant from an infrared lamp show the black can warms faster.',
    'Dull black absorbs and emits best; shiny reflects best.',
    '## Radiation (2.3.3)');
}

// 05 Heating a room
{
  let s = rect(80, 140, 520, 340, '#ffffff', C.ink, 4, 2) + rect(100, 400, 70, 60, C.rust, C.ink, 2.5, 4) + t(135, 437, 'heater', { size: 14, weight: 700, anchor: 'middle', fill: '#ffffff' });
  s += loopArrow('M135,390 L135,190 Q135,165 165,165 L530,165 Q570,165 570,200 L570,420 Q570,450 540,450 L210,450', C.rust);
  s += t(150, 290, 'warm air rises', { size: 16, weight: 700, fill: C.rust }) + t(340, 195, 'moves across the ceiling', { size: 15, anchor: 'middle' }) + t(555, 310, 'cools and sinks', { size: 16, weight: 700, anchor: 'end', fill: C.blue }) + t(380, 440, 'returns along the floor', { size: 15, anchor: 'middle' });
  const k = note(620, 140, 250, 340, ['Heater low down:', 'air next to it is', 'heated, expands,', 'becomes less dense', 'and rises; cooler,', 'denser air sinks', 'to replace it.', '', 'Air conditioner', 'high up: cool, dense', 'air sinks.'], { size: 16, lh: 26, fill: C.cream });
  add('05-heating-a-room',
    svg(900, 510, 'Heating a room by convection', s + k),
    'A heater near the floor warms the air next to it; the air expands, becomes less dense and rises to the ceiling, moves across, cools and sinks on the far side, and returns along the floor, so a convection current heats the whole room. An air conditioner is placed high up because cool, dense air sinks.',
    'Put heaters low and coolers high to drive a convection current.',
    '## Consequences and applications (2.3.4)');
}

// 06 Vacuum flask (Extended)
{
  const fx = 190, fy = 170;
  let s = rect(fx - 10, fy + 30, 260, 340, '#eef2f4', C.ink, 3, 30) + rect(fx + 20, fy + 50, 200, 300, '#ffffff', C.muted, 4, 22) + rect(fx + 36, fy + 66, 168, 268, C.teal, C.muted, 4, 14) + rect(fx + 70, fy, 100, 60, C.rockDark, C.ink, 3, 8);
  s += path(`M${fx + 21},${fy + 120} L${fx + 35},${fy + 120}`, { stroke: C.ink, w: 1 });
  const lab = (y, x2, txt, sub) => arrow(500, y, x2, y, { w: 2.5 }) + t(510, y + 6, txt, { size: 17, weight: 700 }) + t(510, y + 28, sub, { size: 15, fill: C.muted });
  s += lab(200, fx + 175, 'stopper', 'reduces convection and evaporation') + lab(300, fx + 228, 'vacuum between double walls', 'stops conduction and convection') + lab(400, fx + 212, 'silvered walls', 'reflect infrared: reduce radiation');
  add('06-vacuum-flask',
    svg(900, 600, 'A vacuum flask reduces all three',
      ext(30, 72) + panel(30, 110, 840, 460) + s),
    'A vacuum flask: the stopper reduces convection and evaporation from the top, the vacuum between the double walls stops conduction and convection, and the silvered walls reflect infrared back to reduce radiation.',
    'Each feature of the flask blocks a different transfer process.',
    '## Consequences and applications (2.3.4)');
}
