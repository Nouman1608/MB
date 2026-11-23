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

export const slug = 'cambridge-igcse-physics-0625-energy-work-and-power';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// flow chain of boxes
const chain = (x, y, items, { w = 180, h = 70, gap = 50, size = 17 } = {}) => items.map(([lbl, fill, sub], i) => {
  const bx = x + i * (w + gap);
  return `<rect x="${bx}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + tl(bx + w / 2, y + h / 2 - (wrap(lbl, 18).length - 1) * 11 + 6, wrap(lbl, 18), { size, weight: 700, anchor: 'middle' }, 22) +
    (sub ? t(bx + w / 2, y + h + 22, sub, { size: 15, anchor: 'middle', fill: C.muted }) : '') + (i < items.length - 1 ? arrow(bx + w + 4, y + h / 2, bx + w + gap - 4, y + h / 2, { w: 3 }) : '');
}).join('');

// 01 Stores and an energy transfer chain
{
  const stores = ['kinetic', 'gravitational potential', 'chemical', 'elastic (strain)', 'nuclear', 'electrostatic', 'internal (thermal)'];
  let s = '';
  { let x = 50, row = 0; stores.forEach((st, i) => { const w = st.length * 9.2 + 30; if (i === 5) { x = 50; row = 1; } s += `<rect x="${x}" y="${160 + row * 52}" width="${w}" height="40" rx="20" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + t(x + w / 2, 186 + row * 52, st, { size: 16, weight: 600, anchor: 'middle' }); x += w + 14; }); }
  const ways = ['forces (mechanical work)', 'electrical current (electrical work)', 'heating', 'waves (electromagnetic, sound)'];
  let wv = '';
  ways.forEach((wy, i) => { wv += t(60 + (i % 2) * 400, 338 + Math.floor(i / 2) * 30, '• ' + wy, { size: 17 }); });
  add('01-stores-and-transfers',
    svg(900, 700, 'Energy stores and how energy is transferred',
      panel(30, 110, 840, 160) + t(60, 145, 'Stores', { size: 20, weight: 700 }) + s +
      panel(30, 280, 840, 110) + t(60, 306, 'Transferred between stores by', { size: 20, weight: 700 }) + wv +
      panel(30, 400, 840, 270) + t(60, 436, 'Example: a battery-powered fan', { size: 20, weight: 700 }) +
      chain(60, 470, [['chemical store of the battery', C.cream], ['electrical current', '#ffffff'], ['forces of the motor on the blades', '#ffffff']], { w: 230, gap: 40, h: 76 }) +
      arrow(735, 546, 735, 580, { w: 3 }) +
      `<rect x="540" y="584" width="300" height="34" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + t(690, 607, 'kinetic store of blades and air', { size: 16, weight: 700, anchor: 'middle' }) +
      `<rect x="540" y="624" width="300" height="34" rx="10" fill="${C.sand}" stroke="${C.olive}" stroke-width="2"/>` + t(690, 647, 'internal store of the motor', { size: 16, weight: 700, anchor: 'middle' }) +
      t(60, 610, 'Total energy is the same before and after:', { size: 17, fill: C.muted }) + t(60, 634, 'it is transferred, never created or destroyed.', { size: 17, fill: C.muted })),
    'Seven energy stores: kinetic, gravitational potential, chemical, elastic, nuclear, electrostatic and internal. Energy moves between them by forces, electrical current, heating and waves. In a battery-powered fan, energy leaves the chemical store, is transferred by an electrical current and then the motor\'s forces, and ends in the kinetic store of the blades and air and the internal store of the motor.',
    'Name the store energy leaves, how it is transferred and the store it goes to.',
    '## Stores, transfers and conservation (1.7.1)');
}

// 02 Kinetic energy and speed (Extended)
{
  const sc = 600 / 540000;
  const bar = (y, v, e, lbl) => t(60, y + 32, v, { size: 21, weight: 700 }) + rect(200, y, e * sc, 46, C.teal, C.tealDark, 2.5, 6) + t(210 + e * sc, y + 32, lbl, { size: 19, weight: 700, fill: C.rust });
  add('02-kinetic-energy-speed',
    svg(900, 470, 'Double the speed, four times the kinetic energy',
      ext(30, 72) + panel(30, 110, 840, 330) + t(60, 150, 'A 1200 kg car:  Ek = ½ m v²', { size: 20, weight: 700 }) +
      bar(180, '15 m/s', 135000, '') + t(200 + 135000 * sc + 14, 212, '½ × 1200 × 15² = 135 000 J', { size: 18, weight: 700, fill: C.rust }) +
      bar(260, '30 m/s', 540000, '') + t(800, 334, '½ × 1200 × 30² = 540 000 J', { size: 18, weight: 700, fill: C.rust, anchor: 'end' }) +
      [1, 2, 3].map((k) => W(200 + 135000 * k * sc, 260, 200 + 135000 * k * sc, 306, '#ffffff', 2).replace('stroke-linecap="round"', 'stroke-dasharray="5 4"')).join('') +
      t(450, 376, 'v is squared: 2² = 4, so 540 000 J = 4 × 135 000 J', { size: 19, anchor: 'middle', weight: 600 }) +
      t(450, 410, 'That is why braking distances rise so steeply with speed.', { size: 17, anchor: 'middle', fill: C.muted })),
    'Bars for a 1200 kg car: at 15 m/s its kinetic energy is 135 000 J; at 30 m/s it is 540 000 J, four equal parts of the first bar, because v is squared.',
    'Kinetic energy depends on speed squared.',
    '## Stores, transfers and conservation (1.7.1)');
}

// 03 Skier Sankey (Extended)
{
  const k = 200 / 26460, uw = 12000 * k, ww = 14460 * k, y0 = 200, xs = 420, ri = 30, ro = ri + ww;
  const yb = y0 + 200;
  let s = `<rect x="70" y="${y0}" width="${xs - 70}" height="200" fill="${C.cream}" stroke="none"/>`;
  s += `<path d="M${xs},${y0} L740,${y0} L740,${y0 - 18} L800,${y0 + uw / 2} L740,${y0 + uw + 18} L740,${y0 + uw} L${xs},${y0 + uw} Z" fill="${C.teal}"/>`;
  s += `<path d="M${xs},${y0 + uw} A${ro},${ro} 0 0 1 ${xs + ro},${yb + ri} L${xs + ro},560 L${xs + ro + 18},560 L${xs + (ri + ro) / 2},610 L${xs + ri - 18},560 L${xs + ri},560 L${xs + ri},${yb + ri} A${ri},${ri} 0 0 0 ${xs},${yb} Z" fill="${C.rock}"/>`;
  s += t(90, y0 + 92, 'ΔEp lost', { size: 19, weight: 700 }) + t(90, y0 + 120, '60 × 9.8 × 45', { size: 18 }) + t(90, y0 + 148, '= 26 460 J', { size: 19, weight: 700, fill: C.rust });
  s += t(500, y0 + 38, 'kinetic: ½ × 60 × 20² = 12 000 J', { size: 18, weight: 700 });
  s += t(xs + ro + 30, 470, '14 460 J', { size: 20, weight: 700, fill: C.rust }) + tl(xs + ro + 30, 498, ['by friction and air', 'resistance to the internal', 'store of snow, skis, air'], { size: 16, fill: C.muted }, 21);
  add('03-skier-sankey',
    svg(900, 740, 'A 60 kg skier: where 26 460 J goes',
      ext(30, 72) + panel(30, 110, 840, 600) + t(60, 150, 'Starts at rest, 45 m high; 20 m/s at the bottom (g = 9.8 N/kg)', { size: 18, weight: 600 }) + s +
      note(60, 625, 390, 66, ['Widths are in proportion:', '12 000 + 14 460 = 26 460 J'], { size: 17, lh: 24 })),
    'A Sankey diagram for a 60 kg skier descending 45 m. The 26 460 J of gravitational potential energy lost splits into 12 000 J of kinetic energy at 20 m/s and 14 460 J transferred by friction and air resistance to the internal store of the snow, skis and air. Arrow widths are in proportion.',
    'Energy in = useful out + wasted out; the arrow widths add up.',
    '## Stores, transfers and conservation (1.7.1)');
}

// 04 Work lifting a box
{
  const shelfY = 250, floorY = 470;
  let s = W(60, floorY, 520, floorY, C.ink, 4) + rect(330, shelfY, 190, 14, C.rockDark, C.ink, 2.5) + W(510, shelfY + 14, 510, floorY, C.ink, 4);
  s += rect(140, floorY - 70, 90, 70, '#d9b27a', C.ink, 3, 4).replace('/>', ' stroke-dasharray="7 5" opacity="0.6"/>') + t(185, floorY - 28, '25 kg', { size: 17, weight: 700, anchor: 'middle' });
  s += rect(380, shelfY - 70, 90, 70, '#d9b27a', C.ink, 3, 4) + t(425, shelfY - 28, '25 kg', { size: 17, weight: 700, anchor: 'middle' });
  s += path(`M185,${floorY - 80} C185,${shelfY - 60} 260,${shelfY - 100} 370,${shelfY - 60}`, { stroke: C.muted, w: 2.5, extra: 'stroke-dasharray="6 5"' });
  s += dim(555, shelfY, 555, floorY, '') + t(555, shelfY - 12, '1.2 m', { size: 19, weight: 700, anchor: 'middle' });
  s += arrow(250, 430, 250, 340, { w: 5, color: C.tealDark, marker: 'ahT' }) + t(262, 380, 'lifting force', { size: 17, weight: 700, fill: C.tealDark }) + t(262, 402, '= weight = 245 N', { size: 17, weight: 700, fill: C.tealDark });
  const k = calc(620, 130, 250, 'Worked example 3', ['F = 25 × 9.8', ['   = 245 N'], 'W = F d', '= 245 × 1.2', ['= 294 J', 700, C.rust]], { lh: 32, size: 18 });
  add('04-work-lifting-a-box',
    svg(900, 620, 'Work done lifting a box: W = F d',
      panel(30, 110, 570, 400) + s + k.s +
      note(620, 360, 250, 150, ['GPE store of', 'the box rises', 'by 294 J'], { size: 18, fill: C.tealLight, edge: C.tealDark }) +
      note(30, 525, 840, 68, ['Carrying it sideways at a steady height: force and motion at right angles, so no work against gravity.'], { size: 17, fill: C.cream })),
    'A 25 kg box is lifted steadily onto a shelf 1.2 m high. The lifting force equals its weight, 25 × 9.8 = 245 N, so the work done is 245 × 1.2 = 294 J and its gravitational potential store rises by 294 J.',
    'Use the weight in newtons, not the mass, as the force in W = Fd.',
    '## Work (1.7.2)');
}

// 05 How resources generate electricity
{
  const bx = (x, y, w, h, lbl, fill) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x + w / 2, y + h / 2 + 7, lbl, { size: 19, weight: 700, anchor: 'middle' });
  const src = (y, lines, fill) => `<rect x="50" y="${y}" width="270" height="${lines.length * 24 + 20}" rx="10" fill="${fill}" stroke="${C.panelEdge}" stroke-width="2"/>` + tl(66, y + 30, lines, { size: 16 }, 24);
  add('05-resources-to-electricity',
    svg(900, 710, 'From resource to electricity',
      panel(30, 110, 840, 430) +
      src(130, ['fossil fuels, biofuels,', 'nuclear fuel, geothermal'], C.cream) + arrow(320, 165, 385, 165, { w: 3 }) +
      bx(390, 140, 150, 56, 'boiler', C.sand) + t(475, 240, 'steam', { size: 16, fill: C.muted }) + arrow(465, 196, 465, 270, { w: 3 }) +
      src(250, ['hydroelectric, tides,', 'waves: moving water'], C.tealLight) + arrow(320, 288, 385, 288, { w: 3 }) +
      src(345, ['wind: moving air'], C.tealLight) + arrow(320, 367, 395, 315, { w: 3 }) +
      bx(390, 272, 150, 56, 'turbine', C.teal) + arrow(540, 300, 600, 300, { w: 3 }) + bx(600, 272, 150, 56, 'generator', C.teal) + arrow(750, 300, 810, 300, { w: 3 }) + t(800, 266, 'electricity', { size: 16, anchor: 'middle', weight: 700 }) +
      src(420, ['solar cells: light straight', 'to electricity, no turbine'], C.cream) + path('M320,450 L790,450 L790,318', { stroke: C.ink, w: 3, extra: 'stroke-dasharray="7 5" marker-end="url(#ah)"' }) +
      t(560, 500, 'Solar panels only heat water: no electricity.', { size: 16, anchor: 'middle', fill: C.muted }) +
      ext(30, 555) + panel(30, 595, 840, 90) + t(60, 630, 'The Sun is the main source for all resources except geothermal, nuclear and tidal.', { size: 17, weight: 600 }) +
      t(60, 660, 'The Sun releases energy by nuclear fusion.', { size: 17 })),
    'Fossil fuels, biofuels, nuclear fuel and geothermal energy heat water in a boiler to make steam, which drives a turbine. Moving water (hydroelectric, tides, waves) and wind turn the turbine directly. The turbine turns a generator. Solar cells transfer light straight to electricity with no turbine. For Extended, the Sun is the main source except for geothermal, nuclear and tidal.',
    'Most resources turn a turbine and generator; they differ in what turns the turbine.',
    '## Energy resources (1.7.3)');
}

// 06 Crane power and efficiency
{
  const k = calc(30, 110, 840, 'Worked example 4: crane lifts 400 kg through 12 m in 20 s', ['work done on load = ΔEp = 400 × 9.8 × 12 = 47 040 J', 'useful power output = 47 040 / 20 = 2352 W  ≈ 2.4 kW', ['(Extended) efficiency = 2352 / 3500 × 100% = 67%', 700, C.rust]], { lh: 34 });
  const y = 110 + k.h + 30, bw = 760, uw = (2352 / 3500) * bw;
  add('06-crane-power-efficiency',
    svg(900, y + 250, 'Power and efficiency of a crane',
      k.s + panel(30, y, 840, 220) + t(60, y + 40, 'Motor takes 3.5 kW = 3500 W from the supply', { size: 19, weight: 700 }) +
      rect(60, y + 60, uw, 56, C.teal, C.tealDark, 2.5, 6) + rect(60 + uw, y + 60, bw - uw, 56, C.rock, C.rockDark, 2.5, 6) +
      t(60 + uw / 2, y + 95, 'useful 2352 W (67%)', { size: 18, weight: 700, anchor: 'middle' }) + t(60 + uw + (bw - uw) / 2, y + 95, 'wasted', { size: 18, weight: 700, anchor: 'middle' }) +
      t(60, y + 150, 'P = W / t = ΔE / t;  1 W = 1 J/s', { size: 18, weight: 600 }) +
      t(60, y + 185, 'Example 5: 2.4 kW kettle for 2.5 min: E = 2400 × 150 = 360 000 J = 360 kJ', { size: 17, fill: C.muted })),
    'A crane lifts 400 kg through 12 m in 20 s: the work done is 47 040 J and the useful power output is 2352 W, about 2.4 kW. Its motor takes 3500 W, so the efficiency is 67%. A 2.4 kW kettle running for 150 s transfers 360 000 J.',
    'Power is energy transferred per second; efficiency compares useful output with input.',
    '## Power (1.7.4)');
}
