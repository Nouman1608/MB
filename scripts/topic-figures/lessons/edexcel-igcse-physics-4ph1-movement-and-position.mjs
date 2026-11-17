import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-movement-and-position';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const vtext = (x, y, s, size = 16) => `<text x="${x}" y="${y}" font-size="${size}" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x} ${y})">${s}</text>`;
// small axes with arrowheads; returns svg
const miniAxes = (ox, oy, w, h, yl, xl = 'time') => arrow(ox, oy, ox + w, oy, { w: 2.5 }) + arrow(ox, oy, ox, oy - h, { w: 2.5 }) + t(ox + w - 4, oy + 22, xl, { size: 15, anchor: 'end', fill: C.muted }) + vtext(ox - 12, oy - h / 2, yl, 15);

// 01 Average speed is not the average of speeds
{
  let b = panel(30, 110, 840, 300);
  const x0 = 70, x1 = 830, S = (x1 - x0) / 60; // px per km
  b += t(60, 148, 'One journey of 60 km in two parts', { size: 20, weight: 700 });
  b += box(x0, 190, 30 * S, 60, C.teal, C.tealDark, 6) + box(x0 + 30 * S, 190, 30 * S, 60, C.cream, C.olive, 6);
  b += t(x0 + 15 * S, 218, '30 km at 60 km/h', { size: 18, weight: 700, anchor: 'middle' }) + t(x0 + 15 * S, 240, 'time = 30 ÷ 60 = 0.50 h', { size: 16, anchor: 'middle' });
  b += t(x0 + 45 * S, 218, '30 km at 30 km/h', { size: 18, weight: 700, anchor: 'middle' }) + t(x0 + 45 * S, 240, 'time = 30 ÷ 30 = 1.0 h', { size: 16, anchor: 'middle' });
  b += t(450, 290, 'Same distance, but the slow part takes twice as long', { size: 17, anchor: 'middle', fill: C.muted });
  // time bar
  const T = (x1 - x0) / 1.5;
  b += box(x0, 320, 0.5 * T, 50, C.teal, C.tealDark, 6) + box(x0 + 0.5 * T, 320, 1.0 * T, 50, C.cream, C.olive, 6);
  b += t(x0 + 0.25 * T, 352, '0.50 h', { size: 17, weight: 700, anchor: 'middle' }) + t(x0 + T, 352, '1.0 h', { size: 17, weight: 700, anchor: 'middle' });
  b += t(x0 - 10, 304, 'time:', { size: 15, fill: C.muted }).replace(`x="${x0 - 10}"`, `x="${x0}"`);
  b += t(x0, 182, 'distance:', { size: 15, fill: C.muted });
  // result
  b += panel(30, 430, 410, 190, C.tealLight, C.tealDark) + t(235, 470, '✓ Correct', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(235, 512, 'total distance ÷ total time', { size: 17, anchor: 'middle' }) + t(235, 550, '60 km ÷ 1.5 h', { size: 20, anchor: 'middle' }) + t(235, 592, '= 40 km/h', { size: 26, weight: 700, anchor: 'middle' });
  b += panel(460, 430, 410, 190, '#fbeee6', C.rust) + t(665, 470, '✗ Wrong', { size: 21, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(665, 512, 'average of the two speeds', { size: 17, anchor: 'middle' }) + t(665, 550, '(60 + 30) ÷ 2', { size: 20, anchor: 'middle' }) + t(665, 592, '= 45 km/h', { size: 26, weight: 700, anchor: 'middle', fill: C.rust });
  add('01-average-speed',
    svg(900, 640, 'Average speed = total distance ÷ total time', b),
    'A 60 km journey: 30 km at 60 km/h takes 0.50 h and 30 km at 30 km/h takes 1.0 h. Total distance divided by total time gives 60 km ÷ 1.5 h = 40 km/h; averaging the two speeds wrongly gives 45 km/h.',
    'Divide total distance by total time; never average the speeds.',
    '## Speed, velocity and acceleration');
}

// 02 Distance-time graph shapes
{
  const shapes = [
    ['Horizontal', 'stationary', (ox, oy) => ln(ox + 6, oy - 60, ox + 170, oy - 60, { color: C.rust, w: 4 })],
    ['Straight, sloping up', 'constant speed', (ox, oy) => ln(ox + 4, oy - 4, ox + 170, oy - 80, { color: C.rust, w: 4 })],
    ['Steeper straight line', 'greater constant speed', (ox, oy) => ln(ox + 4, oy - 4, ox + 170, oy - 80, { color: C.muted, w: 2.5, dash: '6 5' }) + ln(ox + 4, oy - 4, ox + 95, oy - 125, { color: C.rust, w: 4 })],
    ['Curve getting steeper', 'speeding up', (ox, oy) => path(`M${ox + 4},${oy - 4} Q${ox + 120},${oy - 10} ${ox + 170},${oy - 125}`, { stroke: C.rust, w: 4 })],
    ['Curve getting less steep', 'slowing down', (ox, oy) => path(`M${ox + 4},${oy - 4} Q${ox + 40},${oy - 120} ${ox + 170},${oy - 125}`, { stroke: C.rust, w: 4 })],
  ];
  let b = '';
  shapes.forEach(([name, mean, draw], i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 30 + col * 285, y = 110 + row * 290;
    b += panel(x, y, 270, 275);
    const ox = x + 50, oy = y + 185;
    b += miniAxes(ox, oy, 200, 150, 'distance') + draw(ox, oy);
    b += t(x + 135, y + 232, name, { size: 17, weight: 700, anchor: 'middle' }) + t(x + 135, y + 258, mean, { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  });
  b += panel(600, 400, 270, 275, C.cream, C.olive);
  b += t(735, 442, 'Gradient = speed', { size: 21, weight: 700, anchor: 'middle' });
  b += tl(625, 482, ['gradient =', 'change in distance', '÷ change in time', '', 'Steeper line,', 'greater speed.'], { size: 17 }, 25);
  b += t(450, 705, 'Distance on the vertical axis, time on the horizontal axis.', { size: 17, anchor: 'middle', fill: C.muted });
  add('02-distance-time-shapes',
    svg(900, 725, 'Reading distance−time graphs', b),
    'Five distance against time sketches: a horizontal line means stationary; a straight upward slope means constant speed; a steeper straight line means a greater constant speed; a curve getting steeper means speeding up; a curve getting less steep means slowing down. The gradient is the speed.',
    'On a distance−time graph the gradient is the speed.',
    '## Distance−time graphs (1.3)');
}

// 03 Tangent to find instantaneous speed
{
  let b = panel(30, 110, 840, 530);
  const ox = 120, oy = 540, W = 470, H = 380;
  b += arrow(ox, oy, ox + W, oy, { w: 3 }) + arrow(ox, oy, ox, oy - H, { w: 3 });
  b += t(ox + W / 2, oy + 36, 'time / s', { size: 17, weight: 600, anchor: 'middle' }) + vtext(ox - 30, oy - H / 2, 'distance / m', 17);
  // curve y = k x^2 style (getting steeper)
  const f = (u) => 330 * u * u; // u in 0..1 -> px
  const pts = []; for (let i = 0; i <= 40; i++) { const u = i / 40; pts.push(`${ox + u * 420},${oy - f(u) * 1.0}`); }
  b += path(`M${pts.join(' L')}`, { stroke: C.rust, w: 4 });
  const u0 = 0.75, px = ox + u0 * 420, py = oy - f(u0), m = 2 * 330 * u0 / 420; // slope px/px
  const xa = px - 110, xb = px + 110;
  const ya = py + m * 110, yb = py - m * 110;
  b += ln(xa, ya, xb, yb, { color: C.tealDark, w: 3.5 });
  b += circ(px, py, 7, C.mustard, C.ink, 2.5);
  // gradient triangle
  b += ln(xa + 10, ya - m * 10, xb - 10, ya - m * 10, { color: C.ink, w: 2.5, dash: '7 5' }) + ln(xb - 10, ya - m * 10, xb - 10, yb + m * 10, { color: C.ink, w: 2.5, dash: '7 5' });
  b += circ(xa + 10, ya - m * 10, 5, C.ink, C.ink, 1) + circ(xb - 10, yb + m * 10, 5, C.ink, C.ink, 1);
  b += t((xa + xb) / 2, ya - m * 10 + 28, 'change in time', { size: 16, weight: 700, anchor: 'middle' });
  b += t(xb + 2, (ya + yb) / 2 + 10, 'change in', { size: 16, weight: 700 }) + t(xb + 2, (ya + yb) / 2 + 30, 'distance', { size: 16, weight: 700 });
  b += t(px - 22, py - 14, 'point', { size: 16, weight: 600, anchor: 'end' });
  b += t(xb - 30, yb - 12, 'tangent', { size: 17, weight: 700, fill: C.tealDark, anchor: 'end' });
  b += box(655, 150, 195, 420, C.cream, C.olive, 12);
  b += tl(673, 190, ['1. Draw a tangent', 'touching the curve', 'at the point.', '', '2. Pick two points', 'on it, far apart.', '', '3. speed =', 'change in distance', '÷ change in time'], { size: 17 }, 25);
  b += t(450, 622, 'A curve getting steeper: the object is speeding up.', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-tangent-gradient',
    svg(900, 660, 'Speed at one instant: the tangent', b),
    'A distance against time curve that gets steeper. A tangent touches the curve at one point, and a large triangle drawn on the tangent gives change in distance divided by change in time, which is the speed at that instant.',
    'For a curve, the speed at an instant is the gradient of the tangent there.',
    '## Distance−time graphs (1.3)');
}

// 04 Velocity-time graph shapes + d-t vs v-t
{
  const shapes = [
    ['Horizontal', 'constant velocity', (ox, oy) => ln(ox + 6, oy - 70, ox + 170, oy - 70, { color: C.blue, w: 4 })],
    ['Straight, sloping up', 'constant acceleration', (ox, oy) => ln(ox + 4, oy - 4, ox + 170, oy - 120, { color: C.blue, w: 4 })],
    ['Straight, sloping down', 'constant deceleration', (ox, oy) => ln(ox + 4, oy - 120, ox + 170, oy - 4, { color: C.blue, w: 4 })],
    ['Curve getting less steep', 'acceleration decreasing', (ox, oy) => path(`M${ox + 4},${oy - 4} Q${ox + 50},${oy - 120} ${ox + 170},${oy - 125}`, { stroke: C.blue, w: 4 })],
    ['Line on the time axis', 'stationary', (ox, oy) => ln(ox + 4, oy - 2, ox + 175, oy - 2, { color: C.blue, w: 6 })],
  ];
  let b = '';
  shapes.forEach(([name, mean, draw], i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 30 + col * 285, y = 110 + row * 290;
    b += panel(x, y, 270, 275);
    const ox = x + 50, oy = y + 185;
    b += miniAxes(ox, oy, 200, 150, 'velocity') + draw(ox, oy);
    b += t(x + 135, y + 232, name, { size: 17, weight: 700, anchor: 'middle' }) + t(x + 135, y + 258, mean, { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  });
  b += panel(600, 400, 270, 275, C.cream, C.olive);
  b += t(735, 440, 'Gradient', { size: 20, weight: 700, anchor: 'middle' }) + t(735, 466, '= acceleration', { size: 18, anchor: 'middle' });
  b += t(735, 512, 'Area under line', { size: 20, weight: 700, anchor: 'middle' }) + t(735, 538, '= distance travelled', { size: 18, anchor: 'middle' });
  b += ln(625, 562, 845, 562, { color: C.olive, w: 1.5 });
  b += tl(735, 592, ['A horizontal line on a', 'v−t graph: moving', 'steadily, not stationary.'], { size: 16, anchor: 'middle', fill: C.rust, weight: 600 }, 22);
  add('04-velocity-time-shapes',
    svg(900, 700, 'Reading velocity−time graphs', b),
    'Five velocity against time sketches: horizontal means constant velocity; a straight upward slope means constant acceleration; a straight downward slope means constant deceleration; a curve getting less steep means acceleration decreasing; a line on the time axis means stationary. The gradient is the acceleration and the area under the line is the distance.',
    'On a velocity−time graph the gradient is acceleration and the area is distance.',
    '## Velocity−time graphs (1.7 to 1.9)');
}

// 05 Bus worked example
{
  let b = panel(30, 110, 840, 450);
  const ox = 110, oy = 470, sx = 20, sy = 24; // px per s, px per m/s
  // grid
  for (let s = 0; s <= 36; s += 2) b += ln(ox + s * sx, oy, ox + s * sx, oy - 14 * sy, { color: C.tealLight, w: 1 });
  for (let v = 0; v <= 14; v += 2) b += ln(ox, oy - v * sy, ox + 36 * sx, oy - v * sy, { color: C.tealLight, w: 1 });
  const P = [[0, 0], [8, 12], [28, 12], [34, 0]].map(([s, v]) => [ox + s * sx, oy - v * sy]);
  b += `<path d="M${P[0]} L${P[1]} L${P[1][0]},${oy} Z" fill="${C.teal}"/>`;
  b += `<rect x="${P[1][0]}" y="${P[1][1]}" width="${20 * sx}" height="${12 * sy}" fill="${C.cream}"/>`;
  b += `<path d="M${P[2]} L${P[3]} L${P[2][0]},${oy} Z" fill="${C.teal}"/>`;
  b += path(`M${P.map((p) => p.join(',')).join(' L')}`, { stroke: C.blue, w: 4 });
  b += ln(ox, oy, ox + 36 * sx + 10, oy, { w: 3 }) + ln(ox, oy, ox, oy - 14 * sy - 6, { w: 3 });
  [0, 8, 28, 34].forEach((s) => (b += t(ox + s * sx, oy + 24, String(s), { size: 15, anchor: 'middle', fill: C.muted })));
  [0, 4, 8, 12].forEach((v) => (b += t(ox - 10, oy - v * sy + 5, String(v), { size: 15, anchor: 'end', fill: C.muted })));
  b += t(ox + 18 * sx, oy + 50, 'time / s', { size: 17, weight: 600, anchor: 'middle' }) + vtext(ox - 44, oy - 7 * sy, 'velocity / (m/s)', 17);
  b += t(ox + 5.6 * sx, oy - 3 * sy, '48 m', { size: 18, weight: 700, anchor: 'middle' });
  b += t(ox + 18 * sx, oy - 5.5 * sy, '240 m', { size: 22, weight: 700, anchor: 'middle' });
  b += t(ox + 30 * sx, oy - 3 * sy, '36 m', { size: 18, weight: 700, anchor: 'middle' });
  b += t(ox + 2 * sx, oy - 9.2 * sy, 'gradient', { size: 15, weight: 700, fill: C.blue }) + t(ox + 2 * sx, oy - 8.5 * sy + 1, '= 1.5 m/s²', { size: 15, weight: 700, fill: C.blue });
  b += t(ox + 31.2 * sx, oy - 13 * sy, 'gradient', { size: 15, weight: 700, fill: C.blue, anchor: 'middle' }) + t(ox + 31.2 * sx, oy - 12.3 * sy + 1, '= −2.0 m/s²', { size: 15, weight: 700, fill: C.blue, anchor: 'middle' });
  b += panel(30, 580, 840, 230, C.cream, C.olive);
  b += t(60, 616, 'Gradients (acceleration)', { size: 19, weight: 700 });
  b += tl(60, 648, ['(12 − 0) ÷ 8.0 = 1.5 m/s²', '(0 − 12) ÷ 6.0 = −2.0 m/s²', '= deceleration of 2.0 m/s²'], { size: 17 }, 27);
  b += t(470, 616, 'Areas (distance)', { size: 19, weight: 700 });
  b += tl(470, 648, ['½ × 8.0 × 12 = 48 m', '20 × 12 = 240 m', '½ × 6.0 × 12 = 36 m'], { size: 17 }, 27);
  b += t(470, 735, 'total = 324 m', { size: 18, weight: 700 });
  b += ln(60, 755, 840, 755, { color: C.olive, w: 1.5 });
  b += t(450, 790, 'average speed = 324 ÷ 34 = 9.5 m/s (2 s.f.)', { size: 19, weight: 700, anchor: 'middle' });
  add('05-bus-velocity-time',
    svg(900, 830, 'Worked example: the bus journey', b),
    'Velocity against time for a bus: from rest to 12 m/s in 8.0 s, steady at 12 m/s for 20 s, then to rest in 6.0 s. The gradients are 1.5 m/s² and −2.0 m/s². The areas are 48 m, 240 m and 36 m, a total of 324 m, so the average speed is 324 ÷ 34 = 9.5 m/s.',
    'Gradients give the accelerations; the three areas add up to the 324 m travelled.',
    '## Worked example 1: reading a velocity−time graph');
}

// 06 Choosing v^2 = u^2 + 2as
{
  let b = panel(30, 110, 840, 230);
  b += box(330, 135, 240, 60, C.cream, C.olive, 12) + t(450, 172, 'Is time given or asked for?', { size: 17, weight: 700, anchor: 'middle' });
  b += arrow(370, 195, 230, 245, { w: 3 }) + arrow(530, 195, 670, 245, { w: 3 });
  b += t(285, 222, 'yes', { size: 16, weight: 700, anchor: 'end', fill: C.muted }) + t(615, 222, 'no, only distance', { size: 16, weight: 700, fill: C.muted });
  b += box(80, 250, 300, 70, C.tealLight, C.tealDark, 12) + t(230, 294, 'a = (v − u) ÷ t', { size: 22, weight: 700, anchor: 'middle' });
  b += box(520, 250, 300, 70, C.mustard, C.ink, 12) + t(670, 294, 'v² = u² + 2as', { size: 22, weight: 700, anchor: 'middle' });
  b += t(450, 365, 'v² = u² + 2as needs constant acceleration. Write u, v, a and s first, with signs.', { size: 16, anchor: 'middle', fill: C.muted });
  const card = (x, title, lines, ans) => panel(x, 390, 410, 300) + t(x + 24, 428, title, { size: 20, weight: 700 }) + tl(x + 24, 470, lines, { size: 17 }, 30) + box(x + 20, 622, 370, 46, C.tealLight, C.tealDark, 10) + t(x + 205, 653, ans, { size: 19, weight: 700, anchor: 'middle' });
  b += card(30, 'Braking to rest', ['u = 25 m/s,  v = 0', 'a = −5.0 m/s²  (deceleration)', '0² = 25² + 2 × (−5.0) × s', '0 = 625 − 10s', 's = 625 ÷ 10'], 's = 62.5 m, about 63 m');
  b += card(460, 'Ball dropped from rest', ['u = 0,  s = 1.8 m', 'a = 10 m/s²  (no air resistance)', 'v² = 0² + 2 × 10 × 1.8', 'v² = 36', 'v = √36  (do not forget the root)'], 'v = 6.0 m/s');
  add('06-v-squared-equation',
    svg(900, 710, 'When to use v² = u² + 2as', b),
    'A decision: if time is given or asked for, use a = (v − u) ÷ t; if only distance is involved, use v² = u² + 2as. A car braking from 25 m/s at 5.0 m/s² stops in 625 ÷ 10 = 62.5 m. A ball dropped 1.8 m reaches v² = 2 × 10 × 1.8 = 36, so v = 6.0 m/s.',
    'No time in the question? Use v² = u² + 2as, with signs and a square root at the end.',
    '## Using v² = u² + 2as (1.10)');
}

// 07 Practical: toy car down a ramp
{
  let b = panel(30, 110, 840, 400);
  // ramp then floor
  const rx0 = 70, ry0 = 220, rx1 = 300, ry1 = 380;
  b += `<path d="M${rx0},${ry0} L${rx1},${ry1} L${rx0},${ry1} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += ln(rx0 - 10, ry1, 850, ry1, { w: 3 });
  // car at top of ramp
  const ang = Math.atan2(ry1 - ry0, rx1 - rx0) * 180 / Math.PI;
  b += `<g transform="translate(${rx0 + 40},${ry0 + 28}) rotate(${ang})"><rect x="-22" y="-26" width="48" height="20" rx="5" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/><circle cx="-12" cy="-4" r="6" fill="${C.ink}"/><circle cx="16" cy="-4" r="6" fill="${C.ink}"/></g>`;
  b += t(rx0, ry0 - 40, 'release from rest', { size: 16, weight: 700 }) + t(rx0, ry0 - 20, '(do not push)', { size: 16, weight: 700 });
  // marks every 0.50 m on floor
  const marks = [0, 1, 2, 3, 4];
  marks.forEach((k) => { const x = rx1 + 20 + k * 120; b += ln(x, ry1 - 30, x, ry1 + 10, { color: C.tealDark, w: 3 }) + t(x, ry1 + 34, k === 0 ? '0' : `${(k * 0.5).toFixed(2)} m`.replace('.00', '.0'), { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }); });
  b += t(rx1 + 260, ry1 + 64, 'marks every 0.50 m (metre rule)', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  // light gates
  [2, 4].forEach((k) => { const x = rx1 + 20 + k * 120; b += box(x - 8, ry1 - 120, 16, 70, C.panel, C.ink, 3, 2.5) + ln(x, ry1 - 50, x, ry1 - 30, { color: C.rust, w: 2, dash: '3 3' }); });
  b += box(640, 150, 150, 52, C.cream, C.olive, 8) + t(715, 182, 'data logger', { size: 16, weight: 700, anchor: 'middle' });
  b += path(`M${rx1 + 260},${ry1 - 120} Q${rx1 + 270},180 640,176`, { w: 2, stroke: C.muted }) + path(`M${rx1 + 500},${ry1 - 120} Q${rx1 + 500},${210} 790,190`, { w: 2, stroke: C.muted });
  b += t(rx1 + 230, ry1 - 130, 'light gates', { size: 16, weight: 700, anchor: 'end' });
  b += t(450, 490, 'Stopwatch method: time to each mark, repeat 3 times, use the mean.', { size: 16, anchor: 'middle', fill: C.muted });
  // improvements
  b += panel(30, 530, 410, 200, '#fbeee6', C.rust) + t(60, 568, 'Problem: reaction time', { size: 19, weight: 700, fill: C.rust });
  b += tl(60, 602, ['Starting and stopping a', 'stopwatch by hand adds an', 'error to every reading. It', 'matters most for short times,', 'such as a ball falling 1–2 m.'], { size: 17 }, 25);
  b += panel(460, 530, 410, 200, C.tealLight, C.tealDark) + t(490, 568, 'Better methods', { size: 19, weight: 700, fill: C.tealDark });
  b += tl(490, 602, ['•', '•', '', '•'], { size: 17 }, 25) + tl(508, 602, ['light gates and a data logger', 'film beside a metre rule and', 'step through frame by frame', 'repeat and average to reduce', 'random errors'], { size: 17 }, 25);
  b += panel(30, 750, 840, 160, C.cream, C.olive);
  b += t(60, 786, 'Ramp height investigation', { size: 19, weight: 700 });
  b += tl(60, 818, ['Independent variable: ramp height', 'Dependent variable: average speed (from distance and time)', 'Control variables: the car, the ramp surface, the release point'], { size: 17 }, 28);
  add('07-toy-car-practical',
    svg(900, 930, 'Practical: a toy car down a ramp', b),
    'A toy car is released from rest at the top of a ramp and rolls along the floor past marks every 0.50 m, timed by stopwatch or by light gates connected to a data logger. Hand timing adds reaction-time error; light gates, video frame by frame, and repeating and averaging improve the results. For ramp height, the independent variable is height, the dependent is average speed, and the car, surface and release point are controlled.',
    'Light gates or video remove reaction-time error from the timings.',
    '## The practical: motion of everyday objects (1.5)');
}
