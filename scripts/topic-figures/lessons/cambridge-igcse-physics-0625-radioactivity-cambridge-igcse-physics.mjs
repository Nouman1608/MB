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

export const slug = 'cambridge-igcse-physics-0625-radioactivity-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// nuclide symbol: A over Z to the left of the symbol; (x,y) = baseline at left edge of symbol
const nuc = (x, y, A, Z, S, col = C.ink, size = 34) => t(x - 4, y - size * 0.52, A, { size: size * 0.5, weight: 700, anchor: 'end', fill: col }) + t(x - 4, y + size * 0.12, Z, { size: size * 0.5, weight: 700, anchor: 'end', fill: col }) + t(x, y, S, { size, weight: 700, fill: col });

// 01 Background radiation and count rate
{
  const src = ['radon gas in the air', 'rocks and buildings', 'food and drink', 'cosmic rays from space'];
  let s = ''; src.forEach((x0, i) => { const x = 50 + i * 205; s += `<rect x="${x}" y="160" width="190" height="80" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + tl(x + 95, 193, wrap(x0, 16), { size: 17, weight: 700, anchor: 'middle' }, 22); });
  let d = rect(80, 330, 130, 50, '#ffffff', C.ink, 3, 6) + t(145, 362, 'detector', { size: 16, anchor: 'middle' }) + W(210, 355, 300, 355, C.ink, 3) + rect(300, 320, 170, 70, C.ink, C.ink, 2, 8) + t(385, 365, '1350', { size: 26, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(385, 410, 'counter', { size: 16, anchor: 'middle' });
  const k = calc(500, 290, 370, 'Count rate', ['1350 counts in 5.0 minutes', ['= 270 counts/minute', 700, C.rust], ['= 4.5 counts/s', 700, C.rust]], { lh: 32 });
  add('01-background-and-count-rate',
    svg(900, 560, 'Background radiation and count rate',
      panel(30, 110, 840, 150) + t(60, 145, 'Main sources of background radiation', { size: 19, weight: 700 }) + s +
      panel(30, 275, 455, 160) + d + k.s +
      ext(30, 455) + panel(30, 495, 840, 45) + t(200, 477, 'measure the background with the source removed and subtract it from every reading', { size: 16 }) + t(450, 524, 'corrected count rate = measured count rate − background count rate', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark })),
    'The main sources of background radiation are radon gas in the air, rocks and buildings, food and drink, and cosmic rays. A detector connected to a counter recording 1350 counts in 5.0 minutes gives a count rate of 270 counts per minute, or 4.5 counts per second. For Extended, the background count rate is subtracted to give the corrected count rate.',
    'Count rate = counts ÷ time; subtract background to correct it.',
    '## Background radiation and count rate');
}

// 02 Decay equations (Extended)
{
  const row = (y, title, l, r1, r2, chk) => panel(30, y, 840, 170) + t(60, y + 38, title, { size: 20, weight: 700 }) + l + t(305, y + 102, '→', { size: 34, weight: 700, anchor: 'middle' }) + r1 + t(560, y + 102, '+', { size: 34, weight: 700, anchor: 'middle' }) + r2 + t(450, y + 150, chk, { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  add('02-decay-equations',
    svg(900, 620, 'Balancing decay equations',
      ext(30, 72) +
      row(110, 'α decay: radon-222', nuc(190, 212, '222', '86', 'Rn'), nuc(420, 212, '218', '84', 'Po'), nuc(640, 212, '4', '2', 'He', C.rust), 'top: 222 = 218 + 4;  bottom: 86 = 84 + 2;  so A − 4, Z − 2') +
      row(295, 'β decay: strontium-90', nuc(190, 397, '90', '38', 'Sr'), nuc(420, 397, '90', '39', 'Y'), nuc(650, 397, '0', '−1', 'e', C.rust), 'top: 90 = 90 + 0;  bottom: 38 = 39 + (−1);  so A same, Z + 1') +
      panel(30, 480, 840, 115) + t(60, 518, 'In β decay a neutron in the nucleus changes:', { size: 18, weight: 700 }) +
      t(450, 570, 'neutron  →  proton  +  electron (emitted)', { size: 22, weight: 700, anchor: 'middle', fill: C.rust })),
    'Radon-222 (Z = 86) emits an alpha particle, helium-4, and becomes polonium-218 (Z = 84): 222 = 218 + 4 and 86 = 84 + 2. Strontium-90 (Z = 38) emits a beta particle (an electron) and becomes yttrium-90 (Z = 39): 90 = 90 + 0 and 38 = 39 − 1. In beta decay a neutron changes into a proton and an electron.',
    'Nucleon numbers and proton numbers must balance on both sides.',
    '## Radioactive decay');
}

// 03 Half-life with background
{
  const g = axes(140, 560, 640, 380, { xmax: 12, ymax: 700, xt: [0, 3, 6, 9, 12], yt: [0, 100, 200, 300, 400, 500, 600, 700], xl: 'time / hours', yl: 'count rate / counts per minute' });
  let d = ''; for (let tt = 0; tt <= 12.001; tt += 0.1) d += (d ? 'L' : 'M') + g.X(tt).toFixed(1) + ',' + g.Y(20 + 640 * Math.pow(0.5, tt / 3)).toFixed(1);
  let s = g.s + path(d, { stroke: C.tealDark, w: 4 }) + W(g.X(0), g.Y(20), g.X(12), g.Y(20), C.rust, 2.5).replace('stroke-linecap="round"', 'stroke-dasharray="8 6"') + t(g.X(1.5), g.Y(20) - 8, 'background: 20 counts per minute', { size: 16, weight: 700, fill: C.rust });
  [[0, 660], [3, 340], [6, 180], [9, 100]].forEach(([tt, c]) => { s += circ(g.X(tt), g.Y(c), 7, C.mustard, C.ink, 2) + t(g.X(tt) + 12, g.Y(c) - 10, `${c} (${c - 20})`, { size: 15, weight: 700 }); });
  const k = calc(470, 140, 390, 'Worked example 2', ['corrected: 660 − 20 = 640', '100 − 20 = 80', '640 → 320 → 160 → 80', '= 3 half-lives in 9.0 h', ['half-life = 9.0 / 3 = 3.0 h', 700, C.rust]], { lh: 28, size: 17 });
  add('03-half-life-with-background',
    svg(900, 720, 'Half-life: subtract the background first',
      ext(30, 72) + panel(30, 110, 840, 530) + s + k.s +
      note(30, 650, 840, 50, ['Labels: measured (corrected). The raw 660 → 100 is not a whole number of halvings.'], { size: 16, fill: C.cream })),
    'A decay curve of measured count rate against time that levels off at the background of 20 counts per minute. Measured readings of 660, 340, 180 and 100 counts per minute at 0, 3, 6 and 9 hours correspond to corrected values of 640, 320, 160 and 80, three halvings in 9.0 hours, so the half-life is 3.0 hours.',
    'Correct for background, then count the halvings.',
    '## Half-life');
}

// 04 Safety: time, distance, shielding
{
  const card = (x, title, art, l1, l2) => panel(x, 110, 270, 360) + t(x + 135, 150, title, { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark }) + art + t(x + 135, 410, l1, { size: 16, anchor: 'middle' }) + t(x + 135, 434, l2, { size: 16, anchor: 'middle' });
  const clock = circ(165, 260, 60, '#ffffff', C.ink, 3) + W(165, 260, 165, 215, C.ink, 4) + W(165, 260, 200, 260, C.ink, 4) + path('M165,200 A60,60 0 0 1 217,230', { stroke: C.rust, w: 8 });
  const dist = rect(340, 280, 36, 26, C.mustard, C.ink, 2.5, 4) + W(376, 293, 470, 270, C.ink, 4) + W(470, 270, 490, 262, C.ink, 4) + W(470, 270, 492, 280, C.ink, 4) + t(440, 250, 'tongs', { size: 15, fill: C.muted }) + circ(540, 250, 20, '#e8c9a8', C.ink, 2) + dim(360, 340, 540, 340, 'arm\'s length', { ly: 368 });
  const shield = rect(680, 220, 140, 120, '#6b7280', C.ink, 3, 6) + rect(700, 240, 100, 80, C.panel, C.ink, 2, 4) + rect(732, 266, 36, 26, C.mustard, C.ink, 2.5, 4) + t(750, 360, 'lead-lined box', { size: 15, anchor: 'middle', fill: C.muted });
  add('04-safety-time-distance-shielding',
    svg(900, 600, 'Handling radioactive sources safely',
      card(30, 'Time', clock, 'use the source for the', 'shortest time possible') +
      card(315, 'Distance', dist, 'tongs, held away from the body,', 'pointed away from people') +
      card(600, 'Shielding', shield, 'stored in lead-lined containers,', 'locked, labelled cupboard') +
      ext(30, 488) + note(30, 525, 840, 56, ['Every precaution reduces the time, increases the distance, or adds shielding.'], { size: 18, fill: C.cream })),
    'Three ways to reduce exposure to ionising radiation: use the source for the shortest time possible; handle it with tongs, held away from the body and pointed away from people; and store it in a lead-lined container in a locked, labelled cupboard.',
    'Less time, more distance, more shielding: less exposure.',
    '## Safety precautions');
}
