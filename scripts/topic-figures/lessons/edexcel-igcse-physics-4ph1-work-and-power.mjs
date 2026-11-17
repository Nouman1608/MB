import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-work-and-power';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const person = (x, y, s = 1) => circ(x, y - 78 * s, 16 * s, C.cream, C.ink, 3) + ln(x, y - 62 * s, x, y - 20 * s, { w: 4 }) + ln(x, y - 20 * s, x - 14 * s, y + 20 * s, { w: 4 }) + ln(x, y - 20 * s, x + 14 * s, y + 20 * s, { w: 4 });

// 01 When is work done?
{
  let b = panel(30, 110, 840, 220);
  b += t(60, 148, '1. Pushing a trolley 15 m with a steady 120 N force', { size: 19, weight: 700, fill: C.tealDark });
  b += ln(60, 275, 840, 275, { w: 3 });
  b += box(130, 215, 110, 50, C.rock, C.ink, 6) + circ(150, 268, 8, C.ink, C.ink, 1) + circ(220, 268, 8, C.ink, C.ink, 1);
  b += arrow(70, 240, 126, 240, { color: C.rust, marker: 'ahR', w: 5 }) + t(70, 226, '120 N', { size: 16, weight: 700, fill: C.rust });
  b += arrow(250, 300, 700, 300, { color: C.tealDark, marker: 'ahT', w: 3 }) + t(475, 292, 'moves 15 m in the direction of the force', { size: 15, weight: 600, anchor: 'middle', fill: C.tealDark }).replace('y="292"', 'y="320"');
  b += box(560, 175, 280, 70, C.tealLight, C.tealDark, 10) + t(700, 218, 'W = 120 × 15 = 1800 J', { size: 20, weight: 700, anchor: 'middle' });
  const card = (x, title, draw, l1, l2) => panel(x, 350, 410, 300, '#fbeee6', C.rust) + t(x + 24, 388, title, { size: 19, weight: 700, fill: C.rust }) + draw + tl(x + 24, 590, [l1, l2], { size: 16 }, 22);
  // holding still
  let d1 = person(150, 540) + box(185, 470, 50, 40, C.mustard, C.ink, 4) + ln(150, 490, 185, 490, { w: 4 });
  d1 += arrow(260, 505, 260, 445, { color: C.rust, marker: 'ahR', w: 4 }) + t(275, 480, 'force up', { size: 15, weight: 700, fill: C.rust }) + t(330, 525, 'no movement', { size: 15, weight: 700 }) + ln(40, 560, 430, 560, { w: 2 }).replace('x1="40"', 'x1="50"');
  b += card(30, '2. Holding a bag still', d1, 'The bag does not move, so no work is', 'done on it (even though your arm tires).');
  // carrying along level
  let d2 = person(560, 540) + box(595, 470, 50, 40, C.mustard, C.ink, 4) + ln(560, 490, 595, 490, { w: 4 });
  d2 += arrow(620, 465, 620, 420, { color: C.rust, marker: 'ahR', w: 4 }) + t(635, 432, 'force up', { size: 15, weight: 700, fill: C.rust });
  d2 += arrow(670, 490, 830, 490, { color: C.tealDark, marker: 'ahT', w: 4 }) + t(750, 478, 'motion', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  d2 += t(750, 520, 'at 90°', { size: 15, weight: 700, anchor: 'middle' }) + ln(470, 560, 860, 560, { w: 2 });
  b += card(460, '3. Carrying it along a level floor', d2, 'Your upward force is at right angles to', 'the motion: no work on the bag.');
  b += t(450, 680, 'Work is done only when a force moves something in the direction of the force.', { size: 17, anchor: 'middle', weight: 600 });
  add('01-when-is-work-done',
    svg(900, 705, 'When is work done?', b),
    'Three cases. Pushing a trolley 15 m with a steady 120 N force does 120 × 15 = 1800 J of work. Holding a bag still does no work on it, because it does not move. Carrying a bag along a level floor does no work on it, because the upward force is at right angles to the motion.',
    'Work needs movement in the direction of the force.',
    '## Work done is energy transferred (4.11, 4.12)');
}

// 02 KE depends on v squared
{
  let b = panel(30, 110, 840, 400);
  const base = 440, unit = 60;
  const bar = (x, mult, label, sub, col) => box(x, base - mult * unit, 150, mult * unit, col, C.ink, 4, 2.5) + t(x + 75, base - mult * unit - 12, `${mult} × KE`, { size: 19, weight: 700, anchor: 'middle' }) + t(x + 75, base + 30, label, { size: 17, weight: 700, anchor: 'middle' }) + t(x + 75, base + 54, sub, { size: 15, anchor: 'middle', fill: C.muted });
  b += bar(100, 1, 'starting point', 'mass m, speed v', C.teal);
  b += bar(370, 2, 'double the mass', '2m, v', C.cream);
  b += bar(640, 4, 'double the speed', 'm, 2v', C.mustard);
  b += ln(80, base, 820, base, { w: 3 });
  b += t(450, 160, 'KE = ½ × m × v²', { size: 26, weight: 700, anchor: 'middle' });
  b += panel(30, 530, 840, 90, C.cream, C.olive) + t(450, 570, 'Speed is squared: doubling the speed multiplies the KE by four;', { size: 18, weight: 700, anchor: 'middle' }) + t(450, 598, 'doubling the mass only doubles it.', { size: 18, weight: 700, anchor: 'middle' });
  add('02-ke-speed-squared',
    svg(900, 640, 'Kinetic energy and speed squared', b),
    'Bars comparing kinetic energy: starting with mass m and speed v as one unit, doubling the mass gives twice the KE, while doubling the speed gives four times the KE, because KE = ½ × m × v².',
    'Double the speed and the kinetic energy goes up four times.',
    '## Gravitational potential energy and kinetic energy (4.13, 4.14)');
}

// 03 Falling and rising balls
{
  const side = (x, title) => panel(x, 110, 410, 560) + t(x + 205, 148, title, { size: 20, weight: 700, anchor: 'middle' });
  let b = side(30, 'Dropped from 5.0 m');
  const gx = 30, top = 200, bot = 520;
  b += ln(gx + 40, bot, gx + 380, bot, { w: 3 });
  b += circ(gx + 120, top, 16, C.rust, C.ink, 2.5) + circ(gx + 120, bot - 16, 16, C.rust, C.ink, 2.5).replace(/fill="[^"]+"/, `fill="#f0c9b6"`);
  b += arrow(gx + 120, top + 24, gx + 120, bot - 40, { color: C.ink, w: 3, dash: '6 6' });
  b += ln(gx + 60, top, gx + 60, bot, { w: 2 }) + ln(gx + 50, top, gx + 70, top, { w: 2 }) + ln(gx + 50, bot, gx + 70, bot, { w: 2 }) + t(gx + 52, (top + bot) / 2, '5.0 m', { size: 17, weight: 700, anchor: 'end' }).replace(`x="${gx + 52}"`, `x="${gx + 54}"`);
  b += t(gx + 150, top + 6, 'GPE', { size: 17, weight: 700, fill: C.olive }) + t(gx + 150, bot - 10, 'KE', { size: 17, weight: 700, fill: C.tealDark });
  b += tl(gx + 200, 250, ['m × g × h = ½ × m × v²', 'm cancels:', 'g × h = ½ × v²', '10 × 5.0 = 0.5 × v²', 'v² = 100'], { size: 16 }, 30);
  b += box(gx + 20, 560, 370, 56, C.tealLight, C.tealDark, 10) + t(gx + 205, 596, 'v = √100 = 10 m/s', { size: 21, weight: 700, anchor: 'middle' });
  b += t(gx + 205, 645, 'g = 10 N/kg; air resistance ignored', { size: 15, anchor: 'middle', fill: C.muted });
  b += side(460, 'Thrown up at 8.0 m/s');
  const hx = 460;
  b += ln(hx + 40, bot, hx + 380, bot, { w: 3 });
  b += circ(hx + 120, bot - 16, 16, C.rust, C.ink, 2.5).replace(/fill="[^"]+"/, `fill="#f0c9b6"`) + circ(hx + 120, top, 16, C.rust, C.ink, 2.5);
  b += arrow(hx + 120, bot - 40, hx + 120, top + 24, { w: 3, dash: '6 6' });
  b += ln(hx + 60, top, hx + 60, bot, { w: 2 }) + ln(hx + 50, top, hx + 70, top, { w: 2 }) + ln(hx + 50, bot, hx + 70, bot, { w: 2 }) + t(hx + 54, (top + bot) / 2, 'h ?', { size: 17, weight: 700, anchor: 'end' });
  b += t(hx + 150, bot - 10, 'KE', { size: 17, weight: 700, fill: C.tealDark }) + t(hx + 150, top + 6, 'GPE', { size: 17, weight: 700, fill: C.olive });
  b += tl(hx + 200, 250, ['½ × v² = g × h', 'h = v² / (2 × g)', '  = 8.0² / 20', '  = 64 / 20'], { size: 16 }, 30);
  b += box(hx + 20, 560, 370, 56, C.tealLight, C.tealDark, 10) + t(hx + 205, 596, 'h = 3.2 m', { size: 21, weight: 700, anchor: 'middle' });
  b += t(hx + 205, 645, 'top of the rise: all KE now GPE', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 690, 840, 80, C.cream, C.olive) + t(450, 737, 'Loss in GPE = gain in KE. Mass cancels, so all objects dropped from one height match speed.', { size: 17, weight: 700, anchor: 'middle' });
  add('03-falling-and-rising',
    svg(900, 790, 'GPE and KE: falling and rising', b),
    'A ball dropped from 5.0 m transfers GPE to KE: g × h = ½ × v² gives 10 × 5.0 = 0.5 × v², v² = 100, so v = 10 m/s. A ball thrown up at 8.0 m/s rises until its KE is all GPE: h = 8.0² / 20 = 3.2 m. Mass cancels when air resistance is ignored.',
    'Loss in GPE equals gain in KE, and the mass cancels.',
    '## Conservation links GPE, KE and work (4.15)');
}

// 04 Roller coaster: work against friction
{
  let b = panel(30, 110, 840, 290);
  // track profile
  b += path('M60,170 L120,170 Q260,170 330,330 Q360,370 420,370 L840,370', { w: 4, stroke: C.ink });
  b += box(90, 146, 50, 24, C.rust, C.ink, 5, 2) + t(115, 140, 'at rest', { size: 15, weight: 700, anchor: 'middle' }).replace('y="140"', 'y="136"');
  b += box(700, 346, 50, 24, C.rust, C.ink, 5, 2) + arrow(756, 352, 820, 352, { color: C.tealDark, marker: 'ahT', w: 4 }) + t(780, 336, '18 m/s', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += ln(500, 170, 500, 370, { w: 2 }) + ln(490, 170, 510, 170, { w: 2 }) + ln(490, 370, 510, 370, { w: 2 }) + ln(140, 170, 490, 170, { color: C.muted, w: 1.5, dash: '5 5' }) + t(512, 276, '20 m drop', { size: 17, weight: 700 });
  b += t(600, 160, 'mass 500 kg', { size: 17, weight: 700 }) + t(600, 186, 'track 250 m long', { size: 17, weight: 700 }) + t(600, 212, 'g = 10 N/kg', { size: 15, fill: C.muted });
  b += panel(30, 420, 840, 300, C.cream, C.olive);
  b += t(60, 458, 'Where the 100 000 J went (bar to scale)', { size: 19, weight: 700 });
  const S = 780 / 100000;
  b += box(60, 478, 100000 * S, 48, C.olive, C.ink, 4, 2) + t(75, 509, 'GPE lost = 500 × 10 × 20 = 100 000 J', { size: 17, weight: 700, fill: '#fff' });
  b += box(60, 538, 81000 * S, 48, C.teal, C.tealDark, 4, 2) + box(60 + 81000 * S, 538, 19000 * S, 48, '#f3d5cc', C.rust, 4, 2);
  b += t(75, 569, 'KE gained = ½ × 500 × 18² = 81 000 J', { size: 17, weight: 700 }) + t(60 + 90500 * S, 569, '19 000 J', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(60, 620, 'work done against friction = 100 000 − 81 000 = 19 000 J  (to the thermal store)', { size: 17 });
  b += t(60, 660, 'average friction force = W / d = 19 000 / 250 =', { size: 18, weight: 700 }) + t(540, 660, '76 N', { size: 22, weight: 700, fill: C.rust });
  b += t(60, 698, 'Energy is conserved: none is destroyed.', { size: 16, fill: C.muted });
  add('04-roller-coaster',
    svg(900, 740, 'Worked example: when friction does work', b),
    'A 500 kg roller-coaster car starts at rest at the top of a 20 m drop and reaches 18 m/s at the bottom of a 250 m track. GPE lost is 100 000 J; KE gained is 81 000 J; so 19 000 J of work is done against friction, transferred to the thermal store. The average friction force is 19 000 / 250 = 76 N.',
    'GPE lost minus KE gained gives the work done against friction.',
    '## Conservation links GPE, KE and work (4.15)');
}

// 05 Braking distance
{
  let b = panel(30, 110, 840, 270);
  b += t(60, 148, '1000 kg car at 15 m/s, constant braking force 4500 N', { size: 19, weight: 700 });
  b += tl(60, 190, ['KE = ½ × 1000 × 15² = 112 500 J', 'work done by brakes = KE:  F × d = 112 500', 'd = 112 500 / 4500'], { size: 18 }, 34);
  b += box(580, 270, 260, 60, C.tealLight, C.tealDark, 10) + t(710, 309, 'd = 25 m', { size: 24, weight: 700, anchor: 'middle' });
  b += panel(30, 400, 840, 250, C.cream, C.olive);
  b += t(60, 438, 'Same force, double the speed: braking distance (bars to scale)', { size: 18, weight: 700 });
  const S = 640 / 100;
  b += t(60, 494, '15 m/s', { size: 18, weight: 700 }) + box(160, 470, 25 * S, 40, C.teal, C.tealDark, 4, 2) + t(170 + 25 * S, 497, '25 m', { size: 18, weight: 700 });
  b += t(60, 564, '30 m/s', { size: 18, weight: 700 }) + box(160, 540, 100 * S, 40, C.rust, C.ink, 4, 2) + t(150 + 100 * S, 567, '100 m', { size: 18, weight: 700, anchor: 'end', fill: '#fff' });
  b += t(60, 624, 'KE depends on v², so 2 × speed gives 4 × KE and 4 × the distance.', { size: 17, fill: C.olive, weight: 700 });
  add('05-braking-distance',
    svg(900, 670, 'Worked example: braking distance', b),
    'A 1000 kg car at 15 m/s has KE = 112 500 J. The brakes do this much work, so with a 4500 N force the braking distance is 112 500 / 4500 = 25 m. Doubling the speed to 30 m/s with the same force gives four times the distance, 100 m, shown by bars to scale.',
    'Braking distance grows with speed squared: twice as fast, four times as far.',
    '## Conservation links GPE, KE and work (4.15)');
}

// 06 Power: running up stairs
{
  let b = panel(30, 110, 840, 360);
  // staircase
  const x0 = 120, y0 = 430, n = 6, sw = 60, sh = 36;
  let d = `M${x0},${y0}`; for (let k = 0; k < n; k++) d += ` v${-sh} h${sw}`; d += ` V${y0} Z`;
  b += path(d, { fill: C.rock, w: 3 });
  b += person(x0 + n * sw - 30, y0 - n * sh, 0.8);
  b += ln(x0 + n * sw + 40, y0, x0 + n * sw + 40, y0 - n * sh, { w: 2.5 }) + ln(x0 + n * sw + 30, y0, x0 + n * sw + 50, y0, { w: 2.5 }) + ln(x0 + n * sw + 30, y0 - n * sh, x0 + n * sw + 50, y0 - n * sh, { w: 2.5 });
  b += t(x0 + n * sw + 56, y0 - (n * sh) / 2, 'vertical height 4.5 m', { size: 17, weight: 700 });
  b += t(x0 + n * sw + 56, y0 - (n * sh) / 2 + 24, '(not the slope length)', { size: 15, fill: C.muted });
  b += t(x0 + 70, 170, '60 kg student, 5.4 s', { size: 18, weight: 700 }).replace(`x="${x0 + 70}"`, `x="${x0}"`);
  b += panel(30, 490, 410, 230, C.cream, C.olive) + t(60, 528, 'Calculation', { size: 19, weight: 700 });
  b += tl(60, 566, ['W = m × g × h', '  = 60 × 10 × 4.5 = 2700 J', 'P = W / t = 2700 / 5.4'], { size: 18 }, 32);
  b += box(50, 660, 370, 46, C.tealLight, C.tealDark, 10) + t(235, 691, 'P = 500 W', { size: 22, weight: 700, anchor: 'middle' });
  b += panel(460, 490, 410, 230, C.tealLight, C.tealDark) + t(490, 528, 'Measure it yourself', { size: 19, weight: 700 });
  b += tl(490, 566, ['bathroom scale: mass', 'tape measure: vertical height', 'stopwatch: time'], { size: 17 }, 30);
  b += tl(490, 666, ['This is the power to gain GPE; the', 'body\'s total power is higher.'], { size: 15, fill: C.muted }, 20);
  b += t(450, 750, 'Power = energy transferred per second: 1 W = 1 J/s.', { size: 17, anchor: 'middle', weight: 600 });
  add('06-stairs-power',
    svg(900, 775, 'Worked example: power running up stairs', b),
    'A 60 kg student runs up stairs with a vertical height of 4.5 m in 5.4 s. Work against gravity = 60 × 10 × 4.5 = 2700 J, so power = 2700 / 5.4 = 500 W. To measure it, use a bathroom scale for mass, a tape measure for the vertical height and a stopwatch for the time.',
    'Power is work done divided by time: 2700 J in 5.4 s is 500 W.',
    '## Power is a rate (4.16, 4.17)');
}

// 07 Choosing the right equation
{
  const R = [
    ['a force and a distance in its direction', 'W = F × d'],
    ['a mass and a change in height', 'GPE = m × g × h'],
    ['a mass and a speed', 'KE = ½ × m × v²'],
    ['energy or work and a time', 'P = W / t'],
    ['a fall or rise; find a speed or height', 'm × g × h = ½ × m × v²'],
    ['speed lost to braking or friction over a distance', 'F × d = ½ × m × v²'],
  ];
  let b = box(30, 110, 840, 46, C.ink, C.ink, 10, 0) + t(60, 140, 'The question gives you…', { size: 17, weight: 700, fill: '#fff' }) + t(600, 140, 'Use', { size: 17, weight: 700, fill: '#fff' });
  R.forEach(([g, e], i) => {
    const y = 166 + i * 72;
    b += box(30, y, 840, 62, i >= 4 ? C.cream : C.panel, i >= 4 ? C.olive : C.panelEdge, 10, 2);
    b += t(60, y + 38, g, { size: 17 });
    b += arrow(520, y + 31, 580, y + 31, { w: 3 });
    b += t(600, y + 39, e, { size: 20, weight: 700, fill: C.tealDark });
  });
  b += t(450, 618, 'Work, GPE and KE are in joules (J); power is in watts (W).', { size: 16, anchor: 'middle', fill: C.muted });
  add('07-choose-equation',
    svg(900, 640, 'Choosing the right equation', b),
    'A guide: force and distance in its direction, use W = F × d; mass and change in height, GPE = m × g × h; mass and speed, KE = ½ × m × v²; energy and time, P = W / t; a fall or rise asking for speed or height, m × g × h = ½ × m × v²; speed lost to braking or friction over a distance, F × d = ½ × m × v².',
    'Match what the question gives you to the equation that uses it.',
    '## Choosing the right equation');
}
