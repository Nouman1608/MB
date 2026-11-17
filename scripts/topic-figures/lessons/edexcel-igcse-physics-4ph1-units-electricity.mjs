import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-units-electricity';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const meter = (cx, cy, L) => circ(cx, cy, 20, C.panel, C.ink, 3) + t(cx, cy + 7, L, { size: 19, weight: 700, anchor: 'middle' });

// 01 Seven units
{
  const U = [
    ['A', 'ampere', 'current, I', 'Q = I × t'],
    ['C', 'coulomb', 'charge, Q', 'Q = I × t'],
    ['J', 'joule', 'energy transferred, E', 'E = I × V × t,  E = Q × V'],
    ['Ω', 'ohm', 'resistance, R', 'V = I × R'],
    ['s', 'second', 'time, t', 'Q = I × t,  E = I × V × t'],
    ['V', 'volt', 'voltage (p.d.), V', 'V = I × R,  E = Q × V'],
    ['W', 'watt', 'power, P', 'P = I × V'],
  ];
  let b = box(30, 110, 840, 46, C.ink, C.ink, 10, 0) + t(90, 140, 'Unit', { size: 17, weight: 700, fill: '#fff', anchor: 'middle' }) + t(170, 140, 'Name', { size: 17, weight: 700, fill: '#fff' }) + t(330, 140, 'Quantity', { size: 17, weight: 700, fill: '#fff' }) + t(580, 140, 'Equation that links it', { size: 17, weight: 700, fill: '#fff' });
  U.forEach(([s, n, q, e], i) => {
    const y = 164 + i * 66;
    b += box(30, y, 840, 58, i % 2 ? C.panel : '#f8faf9', C.panelEdge, 8, 1.5);
    b += box(60, y + 9, 60, 40, C.tealLight, C.tealDark, 8, 2) + t(90, y + 37, s, { size: 22, weight: 700, anchor: 'middle' });
    b += t(170, y + 36, n, { size: 18, weight: 700 }) + t(330, y + 36, q, { size: 17 }) + t(580, y + 36, e, { size: 17, fill: C.blue, weight: 600 });
  });
  b += panel(30, 640, 840, 110, C.cream, C.olive);
  b += t(60, 676, 'V = 6.0 V: the first V is the quantity (voltage), the second is the unit (volt).', { size: 17, weight: 700 });
  b += t(60, 708, 'W is the unit watt here, but the symbol for weight in Topic 1. Read in context.', { size: 17 });
  add('01-seven-units',
    svg(900, 770, 'The seven units of electricity', b),
    'A table of the seven units: ampere (A) for current, Q = I × t; coulomb (C) for charge; joule (J) for energy, E = I × V × t and E = Q × V; ohm (Ω) for resistance, V = I × R; second (s) for time; volt (V) for voltage; watt (W) for power, P = I × V. V is both the quantity and the unit.',
    'Seven units, each tied to a quantity and an equation.',
    '## The seven units');
}

// 02 How the units are built from each other
{
  const defs = [
    ['1 A', '= 1 C/s', 'one coulomb passing a point each second', C.tealDark],
    ['1 V', '= 1 J/C', 'one joule transferred for each coulomb', C.rust],
    ['1 Ω', '= 1 V/A', 'one volt drives one ampere through it', C.blue],
    ['1 W', '= 1 J/s', 'one joule transferred each second', C.olive],
    ['1 J', '= 1 A × 1 V × 1 s', 'energy = current × voltage × time', C.ink],
  ];
  let b = '';
  defs.forEach(([a, c, m, col], i) => {
    const y = 110 + i * 100;
    b += panel(30, y, 840, 88);
    b += t(70, y + 56, a, { size: 28, weight: 700, fill: col }) + t(160, y + 56, c, { size: 28, weight: 700, fill: col });
    b += t(840, y + 54, m, { size: 17, anchor: 'end', fill: C.muted });
  });
  b += panel(30, 620, 840, 130, C.cream, C.olive);
  b += t(450, 660, 'Why a watt is an ampere times a volt', { size: 19, weight: 700, anchor: 'middle' });
  b += t(450, 705, '1 A × 1 V = (1 C/s) × (1 J/C) = 1 J/s = 1 W', { size: 24, weight: 700, anchor: 'middle' });
  b += t(450, 736, 'the coulombs cancel', { size: 15, anchor: 'middle', fill: C.rust });
  add('02-unit-definitions',
    svg(900, 770, 'Each unit in terms of the others', b),
    'Five definitions: 1 A = 1 C/s; 1 V = 1 J/C; 1 Ω = 1 V/A; 1 W = 1 J/s; 1 J = 1 A × 1 V × 1 s. A watt is an ampere times a volt because (1 C/s) × (1 J/C) = 1 J/s, with the coulombs cancelling.',
    'Ampere, volt, ohm and watt are each a ratio of other units.',
    '## What each unit means');
}

// 03 Meaning of a volt
{
  let b = panel(30, 110, 840, 480);
  const row = (y, label, J, cellW) => {
    let o = '';
    // cell symbol
    o += box(60, y - 40, 150, 80, C.cream, C.olive, 10);
    if (cellW === 2) o += ln(92, y - 22, 92, y + 22, { w: 4 }) + ln(106, y - 12, 106, y + 12, { w: 7 }) + ln(106, y, 128, y, { w: 3, dash: '4 4' }) + ln(128, y - 22, 128, y + 22, { w: 4 }) + ln(142, y - 12, 142, y + 12, { w: 7 }) + ln(70, y, 92, y, { w: 3 }) + ln(142, y, 200, y, { w: 3 });
    else o += ln(110, y - 22, 110, y + 22, { w: 4 }) + ln(126, y - 12, 126, y + 12, { w: 7 }) + ln(70, y, 110, y, { w: 3 }) + ln(126, y, 200, y, { w: 3 });
    o += t(135, y + 64, label, { size: 18, weight: 700, anchor: 'middle' });
    o += arrow(220, y, 300, y, { w: 3 });
    for (let k = 0; k < 4; k++) {
      const x = 340 + k * 130;
      o += circ(x, y, 26, C.tealLight, C.tealDark, 2.5) + t(x, y + 6, '1 C', { size: 16, weight: 700, anchor: 'middle' });
      o += box(x - 34, y - 72, 68, 30, '#fbeee6', C.rust, 8, 2) + t(x, y - 51, `${J} J`, { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    }
    return o;
  };
  b += t(450, 150, 'Every coulomb passing through gains energy', { size: 19, weight: 700, anchor: 'middle' });
  b += row(260, '9 V battery', '9', 2);
  b += row(450, '1.5 V cell', '1.5', 1);
  b += t(450, 565, 'Coulombs drawn as packets of charge for illustration.', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 610, 840, 90, C.cream, C.olive) + t(450, 652, '"1 volt": one joule of energy is transferred per coulomb', { size: 19, weight: 700, anchor: 'middle' }) + t(450, 680, 'of charge passing.', { size: 19, weight: 700, anchor: 'middle' });
  add('03-volt-meaning',
    svg(900, 720, 'What a volt means', b),
    'A 9 V battery gives 9 J to every coulomb of charge that passes through it, and a 1.5 V cell gives 1.5 J to each coulomb. One volt means one joule transferred per coulomb.',
    'Voltage is energy per coulomb: a 9 V battery gives each coulomb 9 J.',
    '## What each unit means');
}

// 04 Prefix ladder
{
  const P = [
    ['M', 'mega', '× 10⁶', '1.5 MJ = 1 500 000 J', C.cream, C.olive],
    ['k', 'kilo', '× 10³', '2.2 kΩ = 2200 Ω;  3.0 kW = 3000 W', C.cream, C.olive],
    ['', 'base unit', '× 1', 'A, C, J, Ω, s, V, W', C.panel, C.ink],
    ['m', 'milli', '× 10⁻³', '250 mA = 0.250 A', C.tealLight, C.tealDark],
    ['μ', 'micro', '× 10⁻⁶', '40 μA = 4.0 × 10⁻⁵ A', C.tealLight, C.tealDark],
  ];
  let b = '';
  P.forEach(([s, n, m, ex, f, e], i) => {
    const y = 110 + i * 100;
    b += box(30, y, 840, 86, f, e, 12);
    b += t(90, y + 56, s || '—', { size: 30, weight: 700, anchor: 'middle' });
    b += t(150, y + 38, n, { size: 19, weight: 700 }) + t(150, y + 66, m, { size: 19, fill: C.blue, weight: 700 });
    b += t(840, y + 54, ex, { size: 18, anchor: 'end' });
  });
  b += t(450, 618, 'Convert to the base unit before substituting. Copy capital and small letters exactly:', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(450, 644, 'mA is a thousandth of an ampere; MΩ is a million ohms.', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(30, 670, 840, 70, '#fbeee6', C.rust) + t(450, 713, 'Times in seconds:  5 minutes = 300 s;  2 hours = 7200 s', { size: 19, weight: 700, anchor: 'middle' });
  add('04-prefixes',
    svg(900, 760, 'Prefixes: convert to the base unit', b),
    'A ladder of prefixes: mega (M, × 10⁶), as in 1.5 MJ = 1 500 000 J; kilo (k, × 10³), as in 2.2 kΩ = 2200 Ω and 3.0 kW = 3000 W; the base unit; milli (m, × 10⁻³), as in 250 mA = 0.250 A; micro (μ, × 10⁻⁶), as in 40 μA = 4.0 × 10⁻⁵ A. Times convert to seconds: 5 minutes = 300 s, 2 hours = 7200 s.',
    'Big prefixes multiply up, small ones divide down; case matters.',
    '## Prefixes you will meet');
}

// 05 Worked example: kettle
{
  let b = panel(30, 110, 840, 330);
  // circuit: AC supply left, ammeter top, heater right, voltmeter across heater
  const L = 200, R = 600, T = 170, B = 380;
  b += ln(L, T, R, T) + ln(L, B, R, B) + ln(L, T, L, 245) + ln(L, 305, L, B) + ln(R, T, R, 235) + ln(R, 315, R, B);
  b += circ(L, 275, 30, C.panel, C.ink, 3) + path(`M${L - 16},275 q8,-14 16,0 q8,14 16,0`, { w: 2.5 });
  b += t(L - 42, 270, '230 V', { size: 17, weight: 700, anchor: 'end' }) + t(L - 42, 292, 'mains', { size: 15, anchor: 'end', fill: C.muted });
  b += meter(400, T, 'A') + t(400, T - 30, '9.0 A', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += `<rect x="${R - 16}" y="235" width="32" height="80" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>`;
  b += t(R - 26, 280, 'heater', { size: 15, anchor: 'end', fill: C.muted });
  b += ln(R, 205, 730, 205) + ln(730, 205, 730, 255) + meter(730, 275, 'V') + ln(730, 295, 730, 345) + ln(730, 345, R, 345);
  b += circ(R, 205, 4, C.ink, C.ink, 1) + circ(R, 345, 4, C.ink, C.ink, 1);
  b += t(762, 281, '230 V', { size: 17, weight: 700 });
  b += t(400, 420, 'switched on for 2.5 minutes', { size: 17, weight: 600, anchor: 'middle' });
  b += panel(30, 460, 410, 230, C.cream, C.olive) + t(60, 498, '(a) Power in kW', { size: 19, weight: 700 });
  b += tl(60, 536, ['P = I × V', '  = 9.0 × 230 = 2070 W', '÷ 1000 → 2.07 kW'], { size: 18 }, 32);
  b += box(50, 628, 370, 46, C.tealLight, C.tealDark, 10) + t(235, 659, '≈ 2.1 kW', { size: 20, weight: 700, anchor: 'middle' });
  b += panel(460, 460, 410, 230, C.cream, C.olive) + t(490, 498, '(b) Energy in kJ', { size: 19, weight: 700 });
  b += tl(490, 536, ['t = 2.5 × 60 = 150 s', 'E = I × V × t = 9.0 × 230 × 150', '  = 310 500 J'], { size: 18 }, 32);
  b += box(480, 628, 370, 46, C.tealLight, C.tealDark, 10) + t(665, 659, '≈ 3.1 × 10⁵ J = 310 kJ', { size: 20, weight: 700, anchor: 'middle' });
  add('05-kettle-example',
    svg(900, 710, 'Worked example: a kettle', b),
    'A kettle heater on 230 V mains with an ammeter reading 9.0 A and a voltmeter across the heater, switched on for 2.5 minutes. Power P = 9.0 × 230 = 2070 W ≈ 2.1 kW. With t = 150 s, energy E = 9.0 × 230 × 150 = 310 500 J ≈ 310 kJ.',
    'Convert minutes to seconds first, and W to kW and J to kJ at the end.',
    '## Worked example 1: a kettle');
}

// 06 Worked example: sensor, small current
{
  let b = panel(30, 110, 840, 260);
  b += t(60, 150, 'A sensor draws 20 mA from a 5.0 V supply', { size: 20, weight: 700 });
  b += box(60, 180, 360, 64, C.tealLight, C.tealDark, 12) + t(240, 221, 'I = 20 mA = 0.020 A', { size: 21, weight: 700, anchor: 'middle' });
  b += box(480, 180, 360, 64, C.tealLight, C.tealDark, 12) + t(660, 221, 't = 1 hour = 3600 s', { size: 21, weight: 700, anchor: 'middle' });
  b += t(240, 280, '÷ 1000 for milli', { size: 16, anchor: 'middle', fill: C.muted }) + t(660, 280, '× 60 × 60', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(450, 345, 'Convert first, then substitute.', { size: 17, anchor: 'middle', fill: C.muted });
  b += panel(30, 390, 410, 170, C.panel, C.tealDark) + t(60, 428, 'Resistance', { size: 19, weight: 700, fill: C.tealDark });
  b += tl(60, 466, ['R = V / I = 5.0 / 0.020'], { size: 18 }) + t(60, 520, 'R = 250 Ω', { size: 24, weight: 700 });
  b += panel(460, 390, 410, 170, C.panel, C.tealDark) + t(490, 428, 'Charge in 1 hour', { size: 19, weight: 700, fill: C.tealDark });
  b += tl(490, 466, ['Q = I × t = 0.020 × 3600'], { size: 18 }) + t(490, 520, 'Q = 72 C', { size: 24, weight: 700 });
  b += panel(30, 580, 840, 90, '#fbeee6', C.rust);
  b += t(450, 618, '✗ Using 20 instead of 0.020: R = 5.0 / 20 = 0.25 Ω', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(450, 648, 'a thousand times too small', { size: 17, anchor: 'middle' });
  add('06-sensor-example',
    svg(900, 690, 'Worked example: a small current', b),
    'A sensor draws 20 mA from a 5.0 V supply. Converting, I = 0.020 A and 1 hour = 3600 s. R = 5.0 / 0.020 = 250 Ω and Q = 0.020 × 3600 = 72 C. Using 20 instead of 0.020 gives 0.25 Ω, a thousand times too small.',
    'Convert mA to A before dividing, or the answer is a thousand times out.',
    '## Worked example 2: a small current');
}

// 07 Checking with units
{
  const rows = [
    ['E = Q × V', 'C × J/C', '= J', true],
    ['E = I × V × t', '(C/s) × (J/C) × s', '= J', true],
    ['P = I × V', '(C/s) × (J/C)', '= J/s = W', true],
    ['"R" = V × I', 'V × A', '= W, not Ω', false],
  ];
  let b = '';
  rows.forEach(([eq, u, r, ok], i) => {
    const y = 110 + i * 110;
    b += box(30, y, 840, 96, ok ? C.panel : '#fbeee6', ok ? C.panelEdge : C.rust, 14);
    b += t(60, y + 58, eq, { size: 22, weight: 700 });
    b += t(300, y + 58, u, { size: 21, fill: C.blue, weight: 600 });
    b += t(610, y + 58, r, { size: 22, weight: 700, fill: ok ? C.tealDark : C.rust });
    b += t(840, y + 60, ok ? '✓' : '✗', { size: 28, weight: 700, anchor: 'end', fill: ok ? C.tealDark : C.rust });
  });
  b += panel(30, 560, 840, 80, C.cream, C.olive) + t(450, 608, 'If the unit is wrong, the equation was rearranged wrongly.', { size: 19, weight: 700, anchor: 'middle' });
  add('07-unit-checks',
    svg(900, 660, 'Checking an answer with units', b),
    'Unit checks: E = Q × V gives C × J/C = J; E = I × V × t gives (C/s) × (J/C) × s = J; P = I × V gives (C/s) × (J/C) = J/s = W. A "resistance" calculated as V × I has the unit W, not Ω, so it was rearranged wrongly.',
    'Work the units through the equation: they must give the unit of the answer.',
    '## Checking with units');
}
