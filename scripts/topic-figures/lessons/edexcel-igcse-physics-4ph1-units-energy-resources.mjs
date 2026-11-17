import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-units-energy-resources';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;

// 01 Quantity and unit
{
  const R = [
    ['mass', 'm', 'kilogram', 'kg', 'GPE = mgh,  KE = ½mv²'],
    ['energy, work done', 'E, W', 'joule', 'J', 'stores, Sankey diagrams'],
    ['distance, height', 'd, h', 'metre', 'm', 'W = F × d,  GPE = mgh'],
    ['speed', 'v', 'metre/second', 'm/s', 'KE = ½mv²'],
    ['g (or acceleration)', 'g', 'metre/second² (= N/kg)', 'm/s²', 'GPE = mgh'],
    ['force', 'F', 'newton', 'N', 'W = F × d'],
    ['time', 't', 'second', 's', 'P = W / t'],
    ['power', 'P', 'watt', 'W', 'P = W / t'],
    ['efficiency', '—', 'no unit', '—', 'decimal or %'],
  ];
  let b = box(30, 110, 840, 46, C.ink, C.ink, 10, 0) + t(50, 140, 'Quantity', { size: 17, weight: 700, fill: '#fff' }) + t(250, 140, 'Symbol', { size: 17, weight: 700, fill: '#fff' }) + t(340, 140, 'Unit', { size: 17, weight: 700, fill: '#fff' }) + t(600, 140, 'Unit symbol', { size: 17, weight: 700, fill: '#fff', anchor: 'middle' }) + t(680, 140, 'Used in', { size: 17, weight: 700, fill: '#fff' });
  R.forEach(([q, s, u, us, w], i) => {
    const y = 164 + i * 56;
    b += box(30, y, 840, 50, i === 8 ? C.cream : i % 2 ? C.panel : '#f8faf9', C.panelEdge, 8, 1.5);
    b += t(50, y + 32, q, { size: 17, weight: 700 }) + t(250, y + 32, s, { size: 17, italic: s !== '—', fill: C.blue });
    b += t(340, y + 32, u, { size: 16 }) + t(600, y + 33, us, { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(680, y + 32, w, { size: 15, fill: C.muted });
  });
  b += panel(30, 680, 840, 110, '#fbeee6', C.rust);
  b += t(60, 716, 'Same letter, two jobs: read it from its position.', { size: 18, weight: 700, fill: C.rust });
  b += t(60, 748, 'W = work done in W = F × d, but W = watt after a number.', { size: 17 });
  b += t(60, 774, 'm = mass in an equation, but m = metre after a number.', { size: 17 });
  add('01-quantities-and-units',
    svg(900, 810, 'Topic 4 quantities and their units', b),
    'A table pairing each quantity with its unit: mass in kilograms (kg), energy and work done in joules (J), distance and height in metres (m), speed in m/s, g in m/s² (the same as N/kg), force in newtons (N), time in seconds (s), power in watts (W), and efficiency with no unit. W can mean work done or watt, and m can mean mass or metre.',
    'Each quantity has one unit; W and m each have two meanings.',
    '## Which unit goes with which quantity');
}

// 02 How the units connect
{
  const rows = [
    ['W = F × d', '1 J = 1 N × 1 m', 'one newton metre'],
    ['P = W / t', '1 W = 1 J / 1 s', 'one joule per second'],
    ['F = m × a', '1 N = 1 kg × 1 m/s²', ''],
    ['KE = ½ × m × v²', 'kg × (m/s)² = kg m²/s² = N m = J', ''],
    ['GPE = m × g × h', 'kg × m/s² × m = N × m = J', ''],
  ];
  let b = '';
  rows.forEach(([eq, u, n], i) => {
    const y = 110 + i * 98;
    b += panel(30, y, 840, 86, i >= 3 ? C.tealLight : C.panel, i >= 3 ? C.tealDark : C.panelEdge);
    b += t(60, y + 52, eq, { size: 21, weight: 700 });
    b += t(320, y + 52, u, { size: 20, weight: 600, fill: C.blue });
    if (n) b += t(840, y + 52, n, { size: 15, anchor: 'end', fill: C.muted });
  });
  b += panel(30, 610, 840, 110, C.cream, C.olive);
  b += t(450, 650, 'KE and GPE both come out in joules, so one store can transfer into the other.', { size: 17, weight: 700, anchor: 'middle' });
  b += t(450, 684, 'An energy in kg m/s or kg m²/s means the equation was misused (e.g. v not squared).', { size: 17, anchor: 'middle', fill: C.rust });
  add('02-units-connect',
    svg(900, 740, 'How the units connect', b),
    'Unit links: 1 J = 1 N × 1 m; 1 W = 1 J / 1 s; 1 N = 1 kg × 1 m/s². For kinetic energy, kg × (m/s)² = kg m²/s² = N m = J; for gravitational potential energy, kg × m/s² × m = N × m = J. Both stores are in joules.',
    'Every Topic 4 unit can be built from the others, so units can be checked.',
    '## How the units connect');
}

// 03 Conversions
{
  const conv = [
    ['250 mJ', '× 10⁻³', '0.25 J'],
    ['3.5 kJ', '× 10³', '3500 J'],
    ['2.2 kW', '× 10³', '2200 W'],
    ['1.8 MJ', '× 10⁶', '1.8 × 10⁶ J'],
    ['500 g', '÷ 1000', '0.500 kg'],
    ['45 cm', '÷ 100', '0.45 m'],
    ['minutes', '× 60', 'seconds'],
    ['hours', '× 3600', 'seconds'],
    ['72 km/h', '÷ 3.6', '20 m/s'],
  ];
  let b = '';
  conv.forEach(([a, f, c], i) => {
    const col = i < 4 ? 0 : 1, row = i < 4 ? i : i - 4;
    const x = 30 + col * 425, y = 110 + row * 92 + (col === 0 ? 46 : 0);
    const fill = i < 4 ? C.cream : C.tealLight, edge = i < 4 ? C.olive : C.tealDark;
    b += box(x, y, 415, 78, C.panel, C.panelEdge, 12, 2);
    b += box(x + 14, y + 14, 120, 50, fill, edge, 8, 2) + t(x + 74, y + 46, a, { size: 18, weight: 700, anchor: 'middle' });
    b += ln(x + 140, y + 39, x + 262, y + 39, { w: 3 }) + `<path d="M${x + 262},${y + 32} L${x + 276},${y + 39} L${x + 262},${y + 46} Z" fill="${C.ink}"/>`;
    b += t(x + 206, y + 30, f, { size: 16, weight: 700, anchor: 'middle', fill: C.blue });
    b += t(x + 400, y + 46, c, { size: 18, weight: 700, anchor: 'end' });
  });
  b += t(235, 140, 'Prefixes', { size: 19, weight: 700, anchor: 'middle', fill: C.olive }) + t(235, 530, 'm (milli) is tiny; M (mega) is huge.', { size: 16, anchor: 'middle', fill: C.muted }).replace('y="530"', 'y="532"');
  b += t(660, 588, 'km/h → m/s: × 1000 ÷ 3600 = ÷ 3.6', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(30, 610, 840, 70, C.cream, C.olive) + t(450, 652, 'Convert every value to the base unit before you substitute.', { size: 19, weight: 700, anchor: 'middle' });
  add('03-conversions',
    svg(900, 700, 'Convert to base units first', b),
    'Prefix conversions: 250 mJ = 0.25 J, 3.5 kJ = 3500 J, 2.2 kW = 2200 W, 1.8 MJ = 1.8 × 10⁶ J. Other conversions: 500 g ÷ 1000 = 0.500 kg, 45 cm ÷ 100 = 0.45 m, minutes × 60 and hours × 3600 give seconds, and 72 km/h ÷ 3.6 = 20 m/s.',
    'Grams, centimetres, minutes, km/h and prefixed units all convert before substituting.',
    '## Prefixes and conversions');
}

// 04 KE worked example: why converting km/h matters
{
  let b = panel(30, 110, 840, 300);
  b += t(60, 148, 'Car: m = 1200 kg, speed 72 km/h. Find KE in kJ.', { size: 20, weight: 700 });
  b += tl(60, 190, ['v = 72 / 3.6 = 20 m/s', 'KE = ½ × m × v² = 0.5 × 1200 × 20²', '     = 0.5 × 1200 × 400 = 240 000 J', '240 000 J ÷ 1000'], { size: 19 }, 34);
  b += box(560, 300, 290, 60, C.tealLight, C.tealDark, 10) + t(705, 339, 'KE = 240 kJ', { size: 24, weight: 700, anchor: 'middle' });
  b += panel(30, 430, 840, 300, '#fbeee6', C.rust);
  b += t(60, 468, '✗ Substituting 72 directly', { size: 20, weight: 700, fill: C.rust });
  b += t(60, 504, '0.5 × 1200 × 72² = 3 110 400 J: almost thirteen times too big, because v is squared', { size: 17 });
  const S = 760 / 3110400;
  b += t(60, 560, 'correct', { size: 16, weight: 700, fill: C.tealDark }) + box(60, 570, Math.max(240000 * S, 4), 34, C.tealDark, C.tealDark, 3, 0) + t(60 + 240000 * S + 10, 595, '240 000 J', { size: 16, weight: 700 });
  b += t(60, 640, 'wrong', { size: 16, weight: 700, fill: C.rust }) + box(60, 650, 3110400 * S, 34, C.rust, C.rust, 3, 0) + t(820, 675, '3 110 400 J', { size: 16, weight: 700, fill: '#ffffff', anchor: 'end' });
  b += t(450, 715, 'Bars drawn to scale.', { size: 15, anchor: 'middle', fill: C.muted });
  add('04-ke-kmh-example',
    svg(900, 750, 'Worked example: speed in km/h', b),
    'A 1200 kg car at 72 km/h: v = 72 / 3.6 = 20 m/s, so KE = 0.5 × 1200 × 20² = 240 000 J = 240 kJ. Substituting 72 directly gives 3 110 400 J, almost thirteen times too big, shown by bars drawn to scale.',
    'Convert km/h to m/s before squaring, or the error is squared too.',
    '## Worked examples');
}

// 05 Worked examples 2 and 3
{
  const card = (x, title, given, lines, ans) => panel(x, 110, 410, 420) + t(x + 24, 148, title, { size: 20, weight: 700 }) + tl(x + 24, 182, given, { size: 16, fill: C.muted }, 22) +
    tl(x + 24, 270, lines, { size: 18 }, 34) + box(x + 20, 450, 370, 58, C.tealLight, C.tealDark, 10) + t(x + 205, 488, ans, { size: 22, weight: 700, anchor: 'middle' });
  let b = card(30, 'Lift motor', ['useful power 4.5 kW for 2.0 minutes;', 'find the energy in MJ'], ['P = 4.5 kW = 4500 W', 't = 2.0 × 60 = 120 s', 'E = P × t', '  = 4500 × 120', '  = 540 000 J'], '0.54 MJ');
  b += card(460, 'Climber', ['75 kg, gains 300 m in 25 minutes,', 'g = 10 N/kg; find the average power'], ['GPE = m × g × h', '  = 75 × 10 × 300 = 225 000 J', 't = 25 × 60 = 1500 s', 'P = W / t', '  = 225 000 / 1500'], '150 W');
  b += panel(30, 550, 840, 80, C.cream, C.olive) + t(450, 598, 'A rucksack of 8000 g would become 8.0 kg before entering the equation.', { size: 18, weight: 700, anchor: 'middle' });
  add('05-power-time-examples',
    svg(900, 650, 'Worked examples: kW, minutes and power', b),
    'A lift motor with useful power 4.5 kW = 4500 W runs for 2.0 × 60 = 120 s, transferring 540 000 J = 0.54 MJ. A 75 kg climber gains 75 × 10 × 300 = 225 000 J of GPE in 1500 s, an average power of 150 W.',
    'Convert kW to W and minutes to seconds on separate lines first.',
    '## Worked examples');
}

// 06 Checking with units
{
  let b = panel(30, 110, 840, 300);
  b += t(60, 148, 'Rearranging KE = ½ × m × v² for v', { size: 20, weight: 700 });
  b += box(60, 170, 380, 220, C.tealLight, C.tealDark, 12) + t(250, 210, '✓ v = √(2 × KE / m)', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += tl(80, 254, ['units inside the root: J/kg', '= (kg m²/s²) / kg = m²/s²', '√(m²/s²) = m/s'], { size: 17 }, 30);
  b += t(250, 370, 'a speed', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += box(460, 170, 380, 220, '#fbeee6', C.rust, 12) + t(650, 210, '✗ v = √(KE × m / 2)', { size: 21, weight: 700, anchor: 'middle', fill: C.rust });
  b += tl(480, 254, ['units: √(kg m²/s² × kg)', '= kg m/s'], { size: 17 }, 30);
  b += t(650, 370, 'not a speed at all', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  b += panel(30, 430, 840, 230, C.cream, C.olive);
  b += t(60, 468, 'Energy and power: a rate is something per second', { size: 20, weight: 700 });
  b += box(60, 490, 360, 64, C.panel, C.olive, 10) + t(240, 531, 'J ÷ s = W', { size: 26, weight: 700, anchor: 'middle' });
  b += box(480, 490, 360, 64, C.panel, C.olive, 10) + t(660, 531, 'W × s = J', { size: 26, weight: 700, anchor: 'middle' });
  b += t(60, 596, 'A 2 kW heater transfers 2 kJ every second. kW is a power; kJ is an energy.', { size: 17 });
  b += t(60, 630, 'Efficiency is J ÷ J: no unit. Write 0.35 or 35%, never "35 J".', { size: 17 });
  add('06-unit-checks',
    svg(900, 680, 'Checking with units', b),
    'Rearranging KE = ½mv²: v = √(2 × KE / m) has units √(J/kg) = √(m²/s²) = m/s, a speed, while the wrong v = √(KE × m / 2) gives kg m/s. J ÷ s = W and W × s = J, so a 2 kW heater transfers 2 kJ each second; efficiency is J ÷ J and has no unit.',
    'If the units of a rearranged equation do not give the right quantity, it is wrong.',
    '## Checking an answer with units');
}
