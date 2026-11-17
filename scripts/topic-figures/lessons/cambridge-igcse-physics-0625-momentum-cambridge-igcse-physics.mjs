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

export const slug = 'cambridge-igcse-physics-0625-momentum-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const trolley = (x, y, w, m, fill = C.tealLight) => rect(x, y - 50, w, 44, fill, C.ink, 3, 6) + circ(x + 18, y - 4, 9, C.ink, C.ink, 1) + circ(x + w - 18, y - 4, 9, C.ink, C.ink, 1) + t(x + w / 2, y - 22, m, { size: 17, weight: 700, anchor: 'middle' });
const vel = (x, y, len, lbl, col = C.rust) => arrow(x, y, x + len, y, { w: 5, color: col, marker: col === C.rust ? 'ahR' : 'ahT' }) + t(x + len / 2, y - 12, lbl, { size: 17, weight: 700, anchor: 'middle', fill: col });
const posDir = (x, y) => arrow(x, y, x + 70, y, { w: 3 }) + t(x + 80, y + 6, '+ positive', { size: 16, weight: 600 });
const ground = (x1, x2, y) => W(x1, y + 5, x2, y + 5, C.ink, 3);

// 01 Ball rebounding from a wall
{
  const wall = (x) => rect(x, 160, 24, 200, C.rock, C.ink, 3);
  let s = wall(380) + circ(330, 270, 20, C.mustard, C.ink, 3) + vel(170, 270, 120, '+20 m/s') + t(240, 330, 'before: 0.15 × 20 = +3.0 kg m/s', { size: 16, anchor: 'middle', weight: 600 });
  s += wall(820) + circ(770, 270, 20, C.mustard, C.ink, 3) + vel(745, 270, -90, '−15 m/s', C.tealDark) + t(660, 330, 'after: 0.15 × (−15) = −2.25 kg m/s', { size: 16, anchor: 'middle', weight: 600 });
  s += posDir(60, 140);
  const k = calc(30, 400, 840, 'Worked example 1 (contact 0.010 s)', ['Δp = −2.25 − 3.0 = −5.25 kg m/s', 'impulse on ball = 5.25 N s, away from the wall', ['average force = 5.25 / 0.010 = 525 N  (about 530 N)', 700, C.rust], ['not 0.15 × (20 − 15): that ignores the reversal', 600, C.muted]], { lh: 32 });
  add('01-ball-rebound-impulse',
    svg(900, 400 + k.h + 30, 'Impulse when a ball rebounds',
      ext(30, 72) + panel(30, 110, 840, 270) + s + k.s),
    'A 0.15 kg ball hits a wall at +20 m/s (momentum +3.0 kg m/s) and rebounds at −15 m/s (−2.25 kg m/s). The change in momentum is −5.25 kg m/s, an impulse of 5.25 N s away from the wall; over 0.010 s the average force is 525 N.',
    'A rebound reverses the velocity, so the change in momentum is the sum of the two sizes.',
    '## Impulse');
}

// 02 Trolleys that stick together
{
  let b = posDir(60, 150) + t(60, 205, 'Before', { size: 20, weight: 700 }) + ground(60, 840, 300) + trolley(250, 300, 110, '0.40 kg') + trolley(470, 300, 130, '0.60 kg', C.cream) + vel(250, 225, 110, '5.0 m/s') + vel(600, 225, -80, '2.0 m/s', C.tealDark);
  let a = t(60, 375, 'After: stuck together', { size: 20, weight: 700 }) + ground(60, 840, 470) + trolley(380, 470, 110, '0.40 kg') + trolley(490, 470, 130, '0.60 kg', C.cream) + vel(500, 395, 60, 'v = ?');
  const k = calc(30, 530, 840, 'Worked example 2 (right is positive)', ['before: (0.40 × 5.0) + (0.60 × −2.0) = 2.0 − 1.2 = 0.80 kg m/s', 'after: (0.40 + 0.60) × v = 1.00 v', ['v = 0.80 m/s to the right', 700, C.rust], ['kinetic energy: 6.2 J before, 0.32 J after (not conserved)', 600, C.muted]], { lh: 32 });
  add('02-trolleys-stick-together',
    svg(900, 530 + k.h + 30, 'Conservation of momentum: a collision',
      ext(30, 72) + panel(30, 110, 840, 400) + a + b + k.s),
    'A 0.40 kg trolley moving right at 5.0 m/s meets a 0.60 kg trolley moving left at 2.0 m/s and they stick together. Total momentum before is 2.0 − 1.2 = 0.80 kg m/s, so afterwards the 1.00 kg pair moves at 0.80 m/s to the right. Kinetic energy falls from 6.2 J to 0.32 J.',
    'Total momentum before equals total momentum after; signs show direction.',
    '## Conservation of momentum');
}

// 03 Pushing apart and bouncing
{
  let s1 = panel(30, 110, 410, 380) + t(235, 148, 'Example 3: skaters push apart', { size: 18, weight: 700, anchor: 'middle' }) +
    t(235, 182, 'at rest together: total momentum 0', { size: 16, anchor: 'middle', fill: C.muted }) +
    circ(185, 260, 30, C.tealLight, C.ink, 3) + t(185, 266, '60 kg', { size: 15, weight: 700, anchor: 'middle' }) + circ(285, 260, 24, C.cream, C.ink, 3) + t(285, 266, '40 kg', { size: 15, weight: 700, anchor: 'middle' }) +
    vel(150, 320, -70, 'v = ?', C.tealDark) + vel(310, 320, 80, '1.5 m/s') +
    tl(55, 380, ['(40 × 1.5) + (60 × v) = 0', '60 + 60 v = 0  →  v = −1.0 m/s'], { size: 17 }, 26) + t(55, 450, '1.0 m/s the opposite way', { size: 17, weight: 700, fill: C.rust });
  let s2 = panel(460, 110, 410, 380) + t(665, 148, 'Example 4: one trolley bounces', { size: 18, weight: 700, anchor: 'middle' }) +
    trolley(490, 250, 90, '2.0 kg') + vel(490, 190, 80, '3.0 m/s') + trolley(700, 250, 120, '4.0 kg', C.cream) + t(760, 190, 'at rest', { size: 16, anchor: 'middle', fill: C.muted }) +
    t(665, 290, 'after', { size: 16, anchor: 'middle', fill: C.muted, weight: 700 }) +
    vel(560, 320, -60, 'v = ?', C.tealDark) + vel(720, 320, 60, '2.0 m/s') +
    tl(485, 380, ['6.0 = 2.0 v + 4.0 × 2.0', '2.0 v = −2.0  →  v = −1.0 m/s'], { size: 17 }, 26) + t(485, 450, 'bounces back at 1.0 m/s', { size: 17, weight: 700, fill: C.rust });
  add('03-push-apart-and-bounce',
    svg(900, 560, 'Momentum before = momentum after',
      ext(30, 72) + s1 + s2 + t(450, 530, 'Recoil works the same way: cannon and shell, rocket and exhaust gas.', { size: 17, anchor: 'middle', fill: C.muted })),
    'Left: 60 kg and 40 kg skaters at rest push apart; the 40 kg skater moves at 1.5 m/s, so the 60 kg skater moves at 1.0 m/s the opposite way and the total stays zero. Right: a 2.0 kg trolley at 3.0 m/s hits a stationary 4.0 kg trolley, which moves off at 2.0 m/s; the 2.0 kg trolley bounces back at 1.0 m/s.',
    'Starting from rest, the momenta after are equal and opposite.',
    '## Conservation of momentum');
}

// 04 Airbag: longer time, smaller force
{
  const bar = (y, lbl, dt, F, w) => t(60, y + 30, lbl, { size: 19, weight: 700 }) + t(60, y + 56, `Δt = ${dt}`, { size: 17, fill: C.muted }) + rect(300, y + 8, w, 44, C.rust, C.ink, 2, 6) + t(310 + w, y + 38, `F = 70 / ${dt} = ${F}`, { size: 18, weight: 700, anchor: w > 400 ? 'end' : 'start', fill: w > 400 ? '#ffffff' : C.rust }).replace(/x="[\d.]+"/, `x="${w > 400 ? 300 + w - 12 : 310 + w}"`);
  const steps = [['longer', 'stopping time'], ['same change', 'in momentum'], ['smaller rate of', 'change of momentum'], ['smaller force', 'F = Δp/Δt']];
  let ch = ''; steps.forEach((s0, i) => { const x = 40 + i * 210; ch += `<rect x="${x}" y="470" width="190" height="66" rx="12" fill="${i === 3 ? C.cream : C.tealLight}" stroke="${i === 3 ? C.olive : C.tealDark}" stroke-width="2"/>` + tl(x + 95, 497, s0, { size: 16, weight: 700, anchor: 'middle' }, 20) + (i < 3 ? arrow(x + 192, 503, x + 208, 503, { w: 2.5 }) : ''); });
  add('04-airbag-force',
    svg(900, 640, 'Stretching the stopping time',
      ext(30, 72) + panel(30, 110, 840, 330) + t(60, 150, '5.0 kg head stopped from 14 m/s:  Δp = 5.0 × 14 = 70 kg m/s', { size: 19, weight: 700 }) +
      bar(180, 'hard dashboard', '0.010 s', '7000 N', 540) + bar(290, 'airbag', '0.10 s', '700 N', 54) +
      t(450, 415, 'force bars to scale', { size: 15, anchor: 'middle', fill: C.muted }) + ch +
      t(450, 590, 'Crumple zones, seat belts, helmets, crash mats and bending the knees all work this way.', { size: 17, anchor: 'middle', fill: C.muted })),
    'A 5.0 kg head moving at 14 m/s has a change in momentum of 70 kg m/s when stopped. Against a hard dashboard in 0.010 s the force is 7000 N; with an airbag over 0.10 s it is 700 N. The bars are to scale. Longer stopping time, same change in momentum, smaller force.',
    'Same change in momentum over ten times the time: one tenth of the force.',
    '## Resultant force and rate of change of momentum');
}
