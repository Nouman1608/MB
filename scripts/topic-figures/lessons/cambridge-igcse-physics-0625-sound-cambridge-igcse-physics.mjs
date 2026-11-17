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

export const slug = 'cambridge-igcse-physics-0625-sound-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 Compressions and rarefactions
{
  let s = `<path d="M70,230 L110,230 L150,190 L150,370 L110,330 L70,330 Z" fill="${C.ink}"/>` + t(110, 400, 'loudspeaker', { size: 15, anchor: 'middle', fill: C.muted });
  s += arrow(160, 280, 190, 280, { w: 3, color: C.rust, marker: 'ahR' }) + arrow(190, 300, 160, 300, { w: 3, color: C.rust, marker: 'ahR' });
  const lam = 160; let x = 200;
  const xs = []; while (x < 840) { const ph = Math.cos(((x - 240) / lam) * 2 * Math.PI); xs.push(x); x += 13 - 7 * ph; }
  xs.forEach((xx) => { s += W(xx, 200, xx, 360, C.tealDark, 2.5); });
  [240, 400, 560, 720].forEach((c) => { s += t(c, 190, 'C', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }); });
  [320, 480, 640, 800].forEach((r) => { s += t(r, 190, 'R', { size: 18, weight: 700, anchor: 'middle', fill: C.blue }); });
  s += dim(400, 390, 560, 390, 'wavelength', { ly: 418 });
  s += arrow(600, 450, 800, 450, { w: 4 }) + t(590, 456, 'direction of travel', { size: 16, weight: 600, anchor: 'end' });
  s += t(160, 455, 'particles vibrate back and forth along this line', { size: 15, fill: C.muted });
  add('01-compressions-rarefactions',
    svg(900, 600, 'Sound: a longitudinal wave',
      panel(30, 110, 840, 370) + s +
      note(30, 495, 410, 80, ['C = compression:', 'particles close, higher pressure'], { size: 16, lh: 24, fill: C.cream, edge: C.rust }) +
      note(460, 495, 410, 80, ['R = rarefaction:', 'particles spread, lower pressure'], { size: 16, lh: 24, fill: C.tealLight, edge: C.blue }) + ext(30, 72)),
    'A vibrating loudspeaker cone sends a series of compressions (particles close together, higher pressure) and rarefactions (particles spread out, lower pressure) through the air. The particles vibrate back and forth along the direction of travel. The wavelength is from the centre of one compression to the centre of the next.',
    'Compressions and rarefactions travel; the particles only vibrate in place.',
    '## How sound is produced and travels');
}

// 02 Bell in a vacuum jar
{
  const jar = (x, airLevel, lbl, sub) => {
    let s = `<path d="M${x},440 L${x},230 Q${x},170 ${x + 90},170 Q${x + 180},170 ${x + 180},230 L${x + 180},440" fill="${airLevel ? C.tealLight : '#ffffff'}" stroke="${C.ink}" stroke-width="3"/>` + rect(x - 30, 440, 240, 18, C.rock, C.ink, 2.5, 3);
    if (airLevel) { let seed = 7; for (let i = 0; i < 30; i++) { seed = (seed * 9301 + 49297) % 233280; const u = seed / 233280; seed = (seed * 9301 + 49297) % 233280; const v = seed / 233280; s += dot(x + 15 + u * 150, 200 + v * 230, 3, C.tealDark); } }
    s += circ(x + 90, 330, 34, C.mustard, C.ink, 2.5) + W(x + 90, 230, x + 90, 296, C.ink, 2.5) + circ(x + 128, 318, 8, C.ink, C.ink, 1);
    s += W(x + 180, 450, x + 240, 450, C.ink, 4) + t(x + 90, 490, lbl, { size: 18, weight: 700, anchor: 'middle' }) + t(x + 90, 514, sub, { size: 16, anchor: 'middle', fill: C.muted });
    return s;
  };
  add('02-bell-in-a-vacuum',
    svg(900, 620, 'Sound needs a medium',
      panel(30, 110, 840, 440) + jar(110, true, 'air in the jar', 'bell heard') + jar(540, false, 'air pumped out', 'hardly heard, still seen') +
      t(820, 440, 'to pump', { size: 15, fill: C.muted, anchor: 'end' }) +
      note(30, 560, 840, 44, ['No particles to pass on the vibration; light still crosses the vacuum.'], { size: 17, fill: C.cream })),
    'An electric bell rings inside a sealed glass jar. With air in the jar it is heard; as a vacuum pump removes the air the sound fades until it can hardly be heard, although the hammer can still be seen striking the bell.',
    'Sound is passed on by particles, so it cannot cross a vacuum.',
    '## How sound is produced and travels');
}

// 03 Audible range and ultrasound
{
  const X = (f) => 80 + (Math.log10(f) - 1) * 170; // 10 Hz .. ~ 10^5.5
  let s = `<rect x="${X(20)}" y="220" width="${X(20000) - X(20)}" height="60" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + `<rect x="${X(20000)}" y="220" width="${X(300000) - X(20000)}" height="60" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  s += t((X(20) + X(20000)) / 2, 257, 'audible to humans', { size: 19, weight: 700, anchor: 'middle' }) + t((X(20000) + X(300000)) / 2, 257, 'ultrasound', { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
  s += arrow(X(10), 300, X(300000) + 20, 300, { w: 2.5 }) + [[20, '20 Hz'], [20000, '20 000 Hz (20 kHz)']].map(([f, l]) => W(X(f), 290, X(f), 310, C.ink, 2.5) + t(X(f), 334, l, { size: 16, weight: 700, anchor: 'middle' })).join('') + t(X(300000), 334, 'frequency', { size: 15, anchor: 'end', fill: C.muted });
  s += t(450, 190, 'frequency scale not linear', { size: 15, anchor: 'middle', fill: C.muted });
  const k = calc(30, 380, 840, 'Wavelength with v = 340 m/s (λ = v / f)', ['20 Hz:  λ = 340 / 20 = 17 m', '20 000 Hz:  λ = 340 / 20 000 = 0.017 m (1.7 cm)'], { lh: 32 });
  add('03-audible-range',
    svg(900, 380 + k.h + 30, 'The audible range and ultrasound',
      panel(30, 110, 840, 250) + t(60, 150, 'Ultrasound is still sound: a longitudinal mechanical wave above 20 kHz', { size: 17, weight: 600 }) + s + k.s),
    'A frequency scale: humans hear from about 20 Hz to 20 000 Hz, and sound above 20 kHz is ultrasound. With a speed of 340 m/s, a 20 Hz sound has a wavelength of 17 m and a 20 000 Hz sound 0.017 m.',
    'Humans hear 20 Hz to 20 kHz; ultrasound is above 20 kHz.',
    '## The audible range and ultrasound');
}

// 04 Loudness and pitch traces
{
  const tr = (x, y, a, n, title, sub, col = C.tealDark) => {
    let s = panel(x, y, 410, 200) + t(x + 20, y + 32, title, { size: 18, weight: 700 }) + t(x + 390, y + 32, sub, { size: 16, anchor: 'end', fill: C.muted });
    s += W(x + 20, y + 120, x + 390, y + 120, '#dde5e3', 1.5) + path(sine(x + 25, x + 385, y + 120, a, 360 / n), { stroke: col, w: 3.5 });
    return s;
  };
  add('04-loudness-and-pitch',
    svg(900, 600, 'Loudness and pitch on a trace',
      tr(30, 110, 30, 3, 'Original', '') + tr(460, 110, 60, 3, 'Louder', 'larger amplitude, same spacing', C.rust) +
      tr(30, 325, 30, 6, 'Higher pitch', 'higher frequency', C.blue) + tr(460, 325, 60, 6, 'Louder and higher', 'both changed', C.olive) +
      note(30, 540, 840, 44, ['Compare peak height for loudness and the number of waves across the same width for pitch.'], { size: 17, fill: C.cream })),
    'Four traces on the same scales. Compared with the original, a louder sound has taller peaks with the same spacing; a higher-pitched sound has more waves across the same width with the same height; a louder, higher sound has both.',
    'Amplitude sets loudness; frequency sets pitch.',
    '## Loudness and pitch');
}

// 05 Measuring the speed of sound: echo method
{
  let s = rect(760, 150, 40, 210, C.rock, C.ink, 3) + t(780, 380, 'wall', { size: 16, anchor: 'middle', fill: C.muted }) + circ(110, 250, 18, '#e8c9a8', C.ink, 2.5) + rect(96, 268, 28, 70, C.tealLight, C.ink, 2.5, 6) + t(110, 360, 'clapper', { size: 15, anchor: 'middle', fill: C.muted });
  s += arrow(140, 230, 750, 230, { w: 4, color: C.rust, marker: 'ahR' }) + arrow(750, 280, 140, 280, { w: 4, color: C.tealDark, marker: 'ahT' }) + t(445, 220, 'to the wall: 85 m', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + t(445, 306, 'echo back: 85 m', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  const k = calc(30, 400, 840, 'Worked example 1: clap in time with the echoes, 20 intervals in 10.2 s', ['one interval = 10.2 / 20 = 0.51 s', 'distance = 2 × 85 = 170 m', ['speed = 170 / 0.51 = 333 m/s  (330 m/s to 2 s.f.)', 700, C.rust], ['forgetting the 2 gives 167 m/s: clearly wrong', 600, C.muted]], { lh: 32 });
  add('05-echo-speed-of-sound',
    svg(900, 400 + k.h + 90, 'Measuring the speed of sound with echoes',
      panel(30, 110, 840, 270) + s + k.s +
      note(30, 400 + k.h + 15, 840, 60, ['Other method: two observers at least 100 m apart; start on seeing the action, stop on hearing it.'], { size: 17, fill: C.tealLight, edge: C.tealDark })),
    'A student 85 m from a wall claps; the sound travels 85 m to the wall and 85 m back. Timing 20 intervals between claps that coincide with echoes gives 10.2 s, so each interval is 0.51 s and the speed is 170 / 0.51 = 333 m/s.',
    'An echo travels there and back: double the distance.',
    '## Measuring the speed of sound in air');
}

// 06 Ultrasound flaw detection (Extended)
{
  let s = rect(120, 180, 600, 90, '#c9ced4', C.ink, 3, 4) + rect(70, 200, 50, 50, C.tealDark, C.ink, 2.5, 4) + t(95, 290, 'probe', { size: 15, anchor: 'middle', fill: C.muted });
  s += path('M360,190 l8,22 l-10,14 l8,22 l-6,14', { stroke: C.rust, w: 3.5 }) + t(360, 165, 'flaw', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  s += dim(120, 300, 360, 300, '0.12 m', { ly: 326 }) + dim(120, 345, 720, 345, '0.30 m', { ly: 371 });
  // trace
  const g = axes(120, 560, 640, 120, { xmax: 1.2, ymax: 1, xt: [0, 0.4, 0.8, 1.2], yt: [], xl: 'time / 10⁻⁴ s', grid: false, xfmt: (v) => v.toFixed(1) });
  let tr = g.s;
  const pulse = (tt, h, col) => path(`M${g.X(tt) - 8},560 L${g.X(tt)},${560 - h} L${g.X(tt) + 8},560`, { stroke: col, w: 3, fill: 'none' });
  tr += pulse(0.0, 110, C.ink) + pulse(0.4, 50, C.rust) + pulse(1.0, 90, C.tealDark);
  tr += t(g.X(0.4), 560 - 60, 'flaw echo 4.0 × 10⁻⁵ s', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + t(g.X(1.0), 560 - 100, 'far end 1.0 × 10⁻⁴ s', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  const k = calc(30, 640, 840, 'Worked example 2', ['speed = (2 × 0.30) / 1.0 × 10⁻⁴ = 6000 m/s', ['flaw depth = (6000 × 4.0 × 10⁻⁵) / 2 = 0.12 m from the end', 700, C.rust]], { lh: 32 });
  add('06-ultrasound-flaw',
    svg(900, 640 + k.h + 30, 'Ultrasound finds a hidden flaw',
      ext(30, 72) + panel(30, 110, 840, 510) + s + tr + k.s),
    'An ultrasound probe on one end of a 0.30 m steel section receives an echo from the far end after 1.0 × 10⁻⁴ s and a smaller, earlier echo after 4.0 × 10⁻⁵ s. The speed is 2 × 0.30 / 1.0 × 10⁻⁴ = 6000 m/s, so the flaw is 6000 × 4.0 × 10⁻⁵ / 2 = 0.12 m from the end.',
    'distance = speed × time ÷ 2; an earlier, extra echo means a flaw.',
    '## Uses of ultrasound (Extended only)');
}
