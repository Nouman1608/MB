import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-units-forces-and-motion';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const chip = (x, y, w, h, s, fill, edge, size = 20) => box(x, y, w, h, fill, edge, 10, 2.5) + t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight: 700, anchor: 'middle' });

// 01 Base and derived units
{
  let b = panel(30, 110, 840, 150, C.tealLight, C.tealDark);
  b += t(60, 146, 'Base units', { size: 20, weight: 700, fill: C.tealDark });
  [['kg', 'mass'], ['m', 'distance'], ['s', 'time']].forEach(([u, q], i) => (b += chip(190 + i * 230, 160, 130, 54, u, C.panel, C.tealDark, 24) + t(255 + i * 230, 238, q, { size: 16, anchor: 'middle', fill: C.muted })));
  const D = [
    ['m/s', 'speed, velocity', 'distance ÷ time', false],
    ['m/s²', 'acceleration', 'change in velocity ÷ time', false],
    ['N', 'force (incl. weight)', 'mass × acceleration', false],
    ['N/kg', 'gravitational field strength g', 'weight ÷ mass', false],
    ['Nm', 'moment of a force', 'force × perpendicular distance', true],
    ['kg m/s', 'momentum', 'mass × velocity', true],
  ];
  b += t(60, 300, 'Derived units: built the same way the equation is', { size: 20, weight: 700 });
  D.forEach(([u, q, how, P], i) => {
    const col = i % 2, row = Math.floor(i / 2), x = 30 + col * 425, y = 320 + row * 120;
    b += panel(x, y, 415, 106, P ? C.cream : C.panel, P ? C.olive : C.panelEdge);
    b += chip(x + 16, y + 22, 120, 60, u, C.panel, C.ink, 22);
    b += t(x + 152, y + 44, q, { size: 17, weight: 700 }) + t(x + 152, y + 74, how, { size: 16, fill: C.blue });
    if (P) b += box(x + 352, y + 10, 50, 26, C.olive, C.olive, 6, 0) + t(x + 377, y + 29, 'P', { size: 16, weight: 700, anchor: 'middle', fill: '#fff' });
  });
  b += t(450, 700, 'P = Physics only (statement 1.2P, assessed on Paper 2P)', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
  add('01-base-and-derived',
    svg(900, 725, 'Base units and derived units', b),
    'Three base units: kilogram for mass, metre for distance and second for time. Six derived units: m/s for speed (distance ÷ time), m/s² for acceleration (change in velocity ÷ time), N for force (mass × acceleration), N/kg for g (weight ÷ mass), and the Physics-only Nm for moment (force × perpendicular distance) and kg m/s for momentum (mass × velocity).',
    'Three base units; the other six are built from them like their equations.',
    '## The nine units and what they measure');
}

// 02 How the derived units are built: chains
{
  const rows = [
    ['newton', '1 N = 1 kg × 1 m/s² = 1 kg m/s²', 'resultant force giving 1 kg an acceleration of 1 m/s²'],
    ['g', 'N/kg = (kg m/s²) / kg = m/s²', 'g = 10 N/kg near Earth; free fall at 10 m/s²'],
    ['moment (P)', 'N × m = Nm', 'distances must be in metres'],
    ['momentum (P)', 'kg × m/s = kg m/s  (= N s)', 'give kg m/s unless asked otherwise'],
  ];
  let b = '';
  rows.forEach(([n, eq, note], i) => {
    const y = 110 + i * 112;
    b += panel(30, y, 840, 100);
    b += t(60, y + 40, n, { size: 18, weight: 700, fill: C.tealDark });
    b += t(60, y + 76, eq, { size: 22, weight: 700 });
    b += t(840, y + 40, note, { size: 15, anchor: 'end', fill: C.muted });
  });
  b += panel(30, 560, 840, 90, C.cream, C.olive);
  b += t(450, 598, 'N/kg and m/s² are the same unit.', { size: 19, weight: 700, anchor: 'middle' });
  b += t(450, 628, 'Use N/kg for g in W = m × g; use m/s² when describing an acceleration.', { size: 17, anchor: 'middle' });
  add('02-derived-unit-chains',
    svg(900, 670, 'How the derived units are built', b),
    'One newton is 1 kg × 1 m/s² = 1 kg m/s². So N/kg = (kg m/s²)/kg = m/s², which is why g = 10 N/kg and free fall is at 10 m/s². A moment is N × m = Nm, and momentum is kg × m/s = kg m/s, the same as N s.',
    'Since 1 N = 1 kg m/s², N/kg and m/s² are the same unit.',
    '## How the derived units are built');
}

// 03 Meaning of m/s^2
{
  let b = panel(30, 110, 840, 460);
  b += t(60, 148, 'An acceleration of 3 m/s²: the velocity rises by 3 m/s in each second', { size: 19, weight: 700 });
  const S = 18, base = 460, top = (k) => base - (60 + 3 * k * S);
  for (let k = 0; k < 5; k++) {
    const x = 90 + k * 160;
    b += box(x, top(k), 80, base - top(k), C.teal, C.tealDark, 4, 2);
    b += t(x + 40, base + 30, k === 0 ? 'u' : `u + ${3 * k}`, { size: 19, weight: 700, anchor: 'middle', fill: C.blue });
    b += t(x + 40, base + 54, k === 0 ? 'start' : `after ${k} s`, { size: 15, anchor: 'middle', fill: C.muted });
    if (k < 4) b += arrow(x + 86, top(k) - 8, x + 154, top(k + 1) - 8, { color: C.rust, marker: 'ahR', w: 3 }) + t(x + 114, top(k) - 44, '+3 m/s', { size: 15, weight: 700, anchor: 'end', fill: C.rust });
  }
  b += t(450, 548, 'Velocity in m/s divided by time in s gives (m/s)/s = m/s².', { size: 17, anchor: 'middle', fill: C.muted });
  add('03-meaning-of-ms2',
    svg(900, 590, 'Reading m/s²: per second, every second', b),
    'Bars show a velocity u, then u + 3, u + 6, u + 9 and u + 12 m/s after 1, 2, 3 and 4 seconds: an acceleration of 3 m/s² adds 3 m/s to the velocity in each second.',
    'm/s² means the velocity changes by that many m/s every second.',
    '## How the derived units are built');
}

// 04 Conversions
{
  const conv = [
    ['850 g', '÷ 1000', '0.850 kg'],
    ['35 cm', '÷ 100', '0.35 m'],
    ['12 mm', '÷ 1000', '0.012 m'],
    ['1.6 km', '× 1000', '1600 m'],
    ['2.5 min', '× 60', '150 s'],
    ['1.5 h', '× 3600', '5400 s'],
    ['90 km/h', '÷ 3.6', '25 m/s'],
    ['1.2 tonnes', '× 1000', '1200 kg'],
  ];
  let b = '';
  conv.forEach(([a, f, c], i) => {
    const col = i % 2, row = Math.floor(i / 2), x = 30 + col * 425, y = 110 + row * 92;
    const up = f.startsWith('×');
    b += box(x, y, 415, 78, C.panel, C.panelEdge, 12, 2);
    b += box(x + 14, y + 14, 130, 50, up ? C.cream : C.tealLight, up ? C.olive : C.tealDark, 8, 2) + t(x + 79, y + 46, a, { size: 18, weight: 700, anchor: 'middle' });
    b += arrow(x + 150, y + 39, x + 278, y + 39, { w: 3 }) + t(x + 212, y + 30, f, { size: 16, weight: 700, anchor: 'middle', fill: C.blue });
    b += t(x + 400, y + 46, c, { size: 19, weight: 700, anchor: 'end' });
  });
  b += panel(30, 490, 840, 150, C.cream, C.olive);
  b += t(60, 528, 'km/h to m/s', { size: 19, weight: 700 });
  b += t(60, 562, '1 km/h = 1000 m ÷ 3600 s ≈ 0.28 m/s, so divide by 3.6.', { size: 18 });
  b += t(60, 598, 'A speed in m/s is always a smaller number than the same speed in km/h.', { size: 18, weight: 600, fill: C.olive });
  b += t(450, 668, 'Convert first, then substitute, then calculate.', { size: 17, anchor: 'middle', fill: C.muted });
  add('04-conversions',
    svg(900, 690, 'Convert before you substitute', b),
    'Conversions: 850 g = 0.850 kg, 35 cm = 0.35 m, 12 mm = 0.012 m, 1.6 km = 1600 m, 2.5 min = 150 s, 1.5 h = 5400 s, 90 km/h = 25 m/s and 1.2 tonnes = 1200 kg. 1 km/h = 1000 m ÷ 3600 s, about 0.28 m/s, so km/h values are divided by 3.6.',
    'Everyday units go into kg, m and s before any equation.',
    '## Converting data before you substitute');
}

// 05 Unit checks on equations
{
  const rows = [
    ['v² = u² + 2as', 'left (m/s)² = m²/s²', 'right m²/s² + (m/s²) × m = m²/s²', true],
    ['v = u² + 2as', 'left m/s', 'right m²/s²', false],
    ['F = (mv − mu) ÷ t', 'top kg × m/s = kg m/s', '÷ s gives kg m/s² = N', true],
  ];
  let b = '';
  rows.forEach(([eq, l, r, ok], i) => {
    const y = 110 + i * 140;
    b += box(30, y, 840, 124, ok ? C.panel : '#fbeee6', ok ? C.panelEdge : C.rust, 14);
    b += t(60, y + 46, eq, { size: 23, weight: 700 }) + t(840, y + 48, ok ? '✓ consistent' : '✗ units do not match', { size: 19, weight: 700, anchor: 'end', fill: ok ? C.tealDark : C.rust });
    b += t(60, y + 92, l, { size: 18, fill: C.blue, weight: 600 }) + t(390, y + 92, r, { size: 18, fill: C.blue, weight: 600 });
  });
  b += panel(30, 540, 840, 120, C.cream, C.olive);
  b += t(60, 578, 'Checks on answers', { size: 19, weight: 700 });
  b += t(60, 610, '"Acceleration" in m/s? You forgot to divide by a time.', { size: 17 });
  b += t(60, 638, '"Moment" in N? You forgot the distance.', { size: 17 });
  add('05-unit-checks',
    svg(900, 680, 'Using units to check an equation', b),
    'Unit checks. v² = u² + 2as has m²/s² on both sides, so it is consistent. v = u² + 2as has m/s on the left but m²/s² on the right, so it is wrong. F = (mv − mu) ÷ t gives kg m/s ÷ s = kg m/s², a newton. An acceleration in m/s or a moment in N signals a missing step.',
    'Both sides of a correct equation have the same units.',
    '## Using units to check an equation');
}

// 06 Worked example: trolley
{
  let b = panel(30, 110, 840, 170);
  // trolley
  b += box(80, 170, 140, 50, C.rust, C.ink, 6) + circ(105, 230, 13, C.ink, C.ink, 1) + circ(195, 230, 13, C.ink, C.ink, 1) + ln(60, 243, 840, 243, { w: 3 });
  b += t(150, 202, '600 g', { size: 18, weight: 700, anchor: 'middle', fill: '#fff' });
  b += arrow(240, 195, 400, 195, { color: C.tealDark, marker: 'ahT', w: 4 }) + t(320, 182, 'from rest to 1.8 m/s', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }).replace('y="182"', 'y="180"');
  b += t(470, 170, 'in 1.2 s', { size: 17, weight: 700 }) + t(470, 205, 'first: m = 600 g = 0.600 kg', { size: 17, weight: 700, fill: C.rust });
  const step = (y, lab, w, ans) => panel(30, y, 840, 104) + t(60, y + 40, lab, { size: 18, weight: 700, fill: C.tealDark }) + t(60, y + 76, w, { size: 19 }) + box(610, y + 26, 240, 52, C.tealLight, C.tealDark, 10) + t(730, y + 61, ans, { size: 20, weight: 700, anchor: 'middle' });
  b += step(300, '(a) acceleration', 'a = (v − u) / t = (1.8 − 0) / 1.2', '1.5 m/s²');
  b += step(416, '(b) resultant force', 'F = m × a = 0.600 × 1.5', '0.90 N');
  b += step(532, '(c) momentum (P)', 'p = m × v = 0.600 × 1.8 = 1.08', '≈ 1.1 kg m/s');
  b += panel(30, 650, 840, 80, '#fbeee6', C.rust) + t(450, 697, '✗ Substituting 600: F = 900 N, a thousand times too large for a toy trolley', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  add('06-trolley-example',
    svg(900, 750, 'Worked example: a chain of calculations', b),
    'A 600 g trolley goes from rest to 1.8 m/s in 1.2 s. With m = 0.600 kg: acceleration = 1.8 / 1.2 = 1.5 m/s²; force = 0.600 × 1.5 = 0.90 N; momentum = 0.600 × 1.8 = 1.08, about 1.1 kg m/s. Substituting 600 would give 900 N, a thousand times too large.',
    'Convert the mass once, then each answer carries its own unit.',
    '## Worked example 1: a chain of calculations');
}

// 07 Spanner moment
{
  let b = panel(30, 110, 840, 330);
  const nx = 170, ny = 300, L = 500;
  // nut (hexagon)
  let hex = ''; for (let k = 0; k < 6; k++) { const a = (k * Math.PI) / 3; hex += `${k ? 'L' : 'M'}${(nx + 34 * Math.cos(a)).toFixed(1)},${(ny + 34 * Math.sin(a)).toFixed(1)} `; }
  b += path(hex + 'Z', { fill: C.rock, w: 3 }) + circ(nx, ny, 5, C.ink, C.ink, 1) + t(nx, ny + 62, 'nut (pivot)', { size: 16, weight: 700, anchor: 'middle' });
  b += `<rect x="${nx + 30}" y="${ny - 16}" width="${L - 30}" height="32" rx="14" fill="#c9d3e3" stroke="${C.ink}" stroke-width="3"/>`;
  const xe = nx + L - 10;
  b += arrow(xe, ny + 115, xe, ny + 20, { color: C.rust, marker: 'ahR', w: 6 });
  b += t(nx + L + 6, ny + 95, '40 N', { size: 22, weight: 700, fill: C.rust });
  b += path(`M${xe - 16},${ny + 16} L${xe - 16},${ny + 32} L${xe - 3},${ny + 32}`, { w: 2 });
  b += ln(nx, ny - 60, nx + L - 10, ny - 60, { w: 2 }) + ln(nx, ny - 70, nx, ny - 50, { w: 2 }) + ln(nx + L - 10, ny - 70, nx + L - 10, ny - 50, { w: 2 });
  b += t(nx + (L - 10) / 2, ny - 72, 'perpendicular distance 25 cm = 0.25 m', { size: 17, weight: 700, anchor: 'middle' });
  b += panel(30, 460, 840, 160, C.cream, C.olive);
  b += t(60, 500, 'moment = force × perpendicular distance', { size: 19, weight: 700 });
  b += t(60, 540, '= 40 × 0.25 = 10 Nm', { size: 24, weight: 700, fill: C.tealDark });
  b += t(60, 590, '✗ 40 × 25 = 1000: that is newton centimetres, not Nm.', { size: 17, fill: C.rust, weight: 600 });
  add('07-spanner-moment',
    svg(900, 640, 'Worked example: moment with centimetres', b),
    'A spanner 25 cm long with a 40 N force at right angles to its end. Converting 25 cm to 0.25 m, the moment about the nut is 40 × 0.25 = 10 Nm; using 25 directly gives 1000, a value in newton centimetres.',
    'Convert centimetres to metres so the moment comes out in Nm.',
    '## Worked example 2: moments with centimetres');
}
