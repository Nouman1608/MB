import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-sciences-forces';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const chip = (x, y, w, h, s, fill, { size = 17, weight = 700, edge = C.ink } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${edge}" stroke-width="2.2"/>` + t(x + w / 2, y + h / 2 + size * 0.35, s, { size, weight, anchor: 'middle' });
const force = (x1, y1, x2, y2, col = C.rust, mk = 'ahR', w = 5) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${w}" marker-end="url(#${mk})"/>`;
const axes = (ox, oy, w, h, xl, yl, size = 16) => `<line x1="${ox}" y1="${oy}" x2="${ox + w}" y2="${oy}" stroke="${C.ink}" stroke-width="3"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h}" stroke="${C.ink}" stroke-width="3"/>` +
  t(ox + w / 2, oy + 30, xl, { size, weight: 600, anchor: 'middle' }) +
  `<text x="${ox - 16}" y="${oy - h / 2}" font-size="${size}" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${ox - 16} ${oy - h / 2})">${yl}</text>`;

// 01 Types of force + free-body diagram
{
  let b = panel(30, 110, 840, 230);
  b += t(60, 150, 'Contact forces', { size: 20, weight: 700, fill: C.tealDark }) + t(60, 172, 'act only when objects touch', { size: 15, fill: C.muted });
  ['friction', 'air resistance / drag', 'tension', 'normal force', 'upthrust'].forEach((s, i) => { const w = [120, 210, 110, 160, 120][i], x = [60, 192, 414, 536, 708][i]; b += chip(x, 190, w, 44, s, C.tealLight, { size: 16, edge: C.tealDark }); });
  b += t(60, 276, 'Non-contact forces', { size: 20, weight: 700, fill: C.olive }) + t(260, 276, 'act across a gap', { size: 15, fill: C.muted });
  ['gravitational (weight)', 'magnetic', 'electrostatic'].forEach((s, i) => { const w = [230, 130, 150][i], x = [60, 302, 444][i]; b += chip(x, 292, w, 40, s, C.cream, { size: 16, edge: C.olive }); });
  // FBD book on table
  b += panel(30, 360, 410, 420) + t(235, 398, 'A book resting on a table', { size: 20, weight: 700, anchor: 'middle' });
  b += `<rect x="70" y="540" width="330" height="20" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/><rect x="90" y="560" width="14" height="110" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/><rect x="366" y="560" width="14" height="110" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<rect x="175" y="500" width="120" height="40" rx="4" fill="${C.blue}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += panel(460, 360, 410, 420) + t(665, 398, 'Its free-body diagram', { size: 20, weight: 700, anchor: 'middle' });
  b += `<rect x="625" y="555" width="80" height="50" rx="4" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`;
  b += force(665, 555, 665, 445, C.tealDark, 'ahT') + t(680, 470, 'normal force', { size: 17, weight: 700, fill: C.tealDark }) + t(680, 492, '(table on book)', { size: 15, fill: C.muted });
  b += force(665, 605, 665, 715, C.rust, 'ahR') + t(680, 690, 'weight', { size: 17, weight: 700, fill: C.rust }) + t(680, 712, '(Earth on book)', { size: 15, fill: C.muted });
  b += tl(490, 745, ['One object; only forces acting on it.'], { size: 15, fill: C.muted }, 20);
  b += tl(60, 715, ['Equal arrows on the right: balanced', 'forces, so the book stays at rest.'], { size: 16, fill: C.muted }, 21);
  b += panel(30, 800, 840, 90, C.cream, C.olive) + t(60, 836, 'Mass and weight:', { size: 18, weight: 700 }) + t(230, 836, 'W = m × g.  A 60 kg astronaut weighs 588 N on Earth (g = 9.8 N/kg)', { size: 16 }) + t(230, 864, 'and 96 N on the Moon (g = 1.6 N/kg); her mass is 60 kg in both places.', { size: 16 });
  add('01-forces-and-free-body',
    svg(900, 910, 'Forces and free-body diagrams', b),
    'Contact forces (friction, air resistance or drag, tension, normal force, upthrust) and non-contact forces (gravitational, magnetic, electrostatic). A book on a table is drawn as a box with an upward normal force from the table and an equal downward weight from the Earth. A 60 kg astronaut weighs 588 N on Earth and 96 N on the Moon.',
    'A free-body diagram shows one object and only the forces acting on it.',
    '## Types of force');
}

// 02 Resultant force and F = ma
{
  const row = (y, title, obj, fwd, back, fl, bl, res, extra) => {
    const S = 300 / fwd;
    let o = panel(30, y, 840, 260) + t(60, y + 40, title, { size: 21, weight: 700 });
    const cx = 450, cy = y + 120;
    o += obj(cx, cy);
    o += force(cx + 60, cy, cx + 60 + fwd * S, cy, C.tealDark, 'ahT', 7) + t(cx + 60 + (fwd * S) / 2, cy + 36, `${fl} ${fwd} N`, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    o += force(cx - 60, cy, cx - 60 - back * S, cy, C.rust, 'ahR', 7) + t(cx - 70, cy + 36, `${bl} ${back} N`, { size: 17, weight: 700, anchor: 'end', fill: C.rust });
    o += `<rect x="60" y="${y + 180}" width="780" height="62" rx="10" fill="${C.cream}"/>` + t(80, y + 205, `Resultant = ${fwd} − ${back} = ${res} N forward`, { size: 18, weight: 700 }) + (extra ? t(80, y + 230, extra, { size: 17, fill: C.olive, weight: 700 }) : '');
    return o;
  };
  const boat = (x, y) => path(`M${x - 60},${y - 10} L${x + 60},${y - 10} L${x + 40},${y + 22} L${x - 50},${y + 22} Z`, { fill: '#fff', w: 3 }) + `<line x1="${x - 70}" y1="${y + 10}" x2="${x + 70}" y2="${y + 10}" stroke="${C.tealDark}" stroke-width="2" stroke-dasharray="6 5"/>`;
  const car = (x, y) => `<rect x="${x - 60}" y="${y - 22}" width="120" height="36" rx="8" fill="#fff" stroke="${C.ink}" stroke-width="3"/><path d="M${x - 35},${y - 22} L${x - 20},${y - 42} L${x + 25},${y - 42} L${x + 40},${y - 22}" fill="#fff" stroke="${C.ink}" stroke-width="3"/><circle cx="${x - 32}" cy="${y + 18}" r="12" fill="${C.ink}"/><circle cx="${x + 32}" cy="${y + 18}" r="12" fill="${C.ink}"/>`;
  let b = row(110, 'Boat', boat, 850, 320, 'engine', 'water resistance', 530, '');
  b += row(390, 'Car of mass 1200 kg', car, 3000, 600, 'driving', 'friction + air', 2400, 'F = ma, so a = 2400 ÷ 1200 = 2.0 m/s²  (use the resultant, not 3000 N)');
  b += t(450, 680, 'Arrow lengths are drawn to scale within each diagram.', { size: 15, anchor: 'middle', fill: C.muted });
  add('02-resultant-force-fma',
    svg(900, 700, 'Resultant force', b),
    'A boat with an 850 N engine force forward and 320 N water resistance back has a resultant of 530 N forward. A 1200 kg car with a 3000 N driving force and 600 N of friction and air resistance has a resultant of 2400 N, so its acceleration is 2400 ÷ 1200 = 2.0 m/s².',
    'Subtract opposing forces first; only the resultant goes into F = ma.',
    '## Resultant force');
}

// 03 Third-law pairs
{
  let b = panel(30, 110, 410, 520, '#fbeee6', C.rust) + t(235, 150, '✗ Not a third-law pair', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
  b += `<rect x="70" y="420" width="330" height="18" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="185" y="380" width="100" height="40" rx="4" fill="${C.blue}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += force(235, 380, 235, 260, C.tealDark, 'ahT') + t(250, 290, 'normal force on book', { size: 15, weight: 700, fill: C.tealDark });
  b += force(235, 420, 235, 540, C.rust, 'ahR') + t(250, 520, 'weight of book', { size: 15, weight: 700, fill: C.rust });
  b += tl(60, 580, ['Both act on the same object (the book)', 'and are different types of force.'], { size: 15, fill: C.muted }, 20);
  b += panel(460, 110, 410, 520, '#eaf3f1', C.tealDark) + t(665, 150, '✓ A third-law pair', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += `<path d="M500,560 Q665,470 830,560 L830,600 L500,600 Z" fill="#a9c48f" stroke="${C.ink}" stroke-width="2.5"/>` + t(665, 585, 'Earth', { size: 18, weight: 700, anchor: 'middle' });
  b += `<rect x="615" y="255" width="100" height="40" rx="4" fill="${C.blue}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += force(665, 295, 665, 385, C.rust, 'ahR') + t(680, 345, 'Earth pulls book', { size: 15, weight: 700, fill: C.rust });
  b += force(665, 510, 665, 420, C.rust, 'ahR') + t(680, 470, 'book pulls Earth', { size: 15, weight: 700, fill: C.rust });
  b += tl(490, 210, ['Equal size, opposite direction,', 'same type (gravity), on', 'different objects.'], { size: 15, fill: C.muted }, 20).replace(/y="210"/, 'y="190"').replace(/y="230"/, 'y="210"').replace(/y="250"/, 'y="230"');
  b += panel(30, 650, 840, 120, C.cream, C.olive);
  b += t(60, 688, 'First law:', { size: 17, weight: 700 }) + t(160, 688, 'no resultant force → stays at rest or keeps a constant velocity.', { size: 16 });
  b += t(60, 718, 'Second law:', { size: 17, weight: 700 }) + t(175, 718, 'a resultant force causes acceleration, F = m × a.', { size: 16 });
  b += t(60, 748, 'Third law:', { size: 17, weight: 700 }) + t(160, 748, 'A on B is equal and opposite to B on A; they never cancel.', { size: 16 });
  add('03-third-law-pairs',
    svg(900, 790, 'Newton’s third law: spot the pair', b),
    'Left: a book’s weight and the table’s normal force both act on the book and are different types, so they are not a third-law pair. Right: the Earth pulls the book down and the book pulls the Earth up with an equal gravitational force; they act on different objects, so they are a pair. Below, the three laws in one line each.',
    'Third-law pairs act on different objects and are the same type of force.',
    '## Newton\'s three laws');
}

// 04 Terminal velocity
{
  let b = panel(30, 110, 520, 560);
  const ox = 90, oy = 560, W = 420, H = 360;
  b += axes(ox, oy, W, H, 'time', 'velocity (downwards)');
  const v = (x) => (x < 210 ? 300 * (1 - Math.exp(-x / 55)) : 110 + (300 * (1 - Math.exp(-210 / 55)) - 110) * Math.exp(-(x - 210) / 25));
  let d = `M${ox},${oy}`; for (let x = 2; x <= W - 10; x += 2) d += ` L${ox + x},${(oy - v(x)).toFixed(1)}`;
  b += path(d, { stroke: C.tealDark, w: 4 });
  const pts = [[8, '1'], [70, '2'], [170, '3'], [222, '4'], [360, '5']];
  pts.forEach(([x, n]) => { b += badge(ox + x, oy - v(x) - (n === '1' ? 26 : 30), 15, n, n === '3' || n === '5' ? C.mustard : C.cream); });
  b += `<line x1="${ox + 210}" y1="${oy - H + 10}" x2="${ox + 210}" y2="${oy}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>` + t(ox + 216, oy - H + 26, 'parachute opens', { size: 15, fill: C.muted, weight: 600 });
  // right: free-body cards
  const cards = [
    ['1', 'weight > drag: accelerates', 10, 60],
    ['2', 'faster, so drag grows', 35, 60],
    ['3', 'drag = weight: terminal velocity', 60, 60],
    ['4', 'parachute: drag > weight, slows', 95, 60],
    ['5', 'drag = weight: lower terminal velocity', 60, 60],
  ];
  cards.forEach(([n, s, dr, wgt], i) => {
    const y = 110 + i * 112;
    b += panel(570, y, 300, 100) + badge(600, y + 50, 15, n, n === '3' || n === '5' ? C.mustard : C.cream);
    const cx = 660, cy = y + 50;
    b += `<circle cx="${cx}" cy="${cy}" r="9" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += force(cx, cy + 9, cx, cy + 9 + wgt * 0.6, C.rust, 'ahR', 4) + force(cx, cy - 9, cx, cy - 9 - dr * 0.4, C.tealDark, 'ahT', 4);
    const L = []; let cur = ''; for (const w2 of s.split(' ')) { if ((cur + ' ' + w2).trim().length > 18) { L.push(cur); cur = w2; } else cur = (cur + ' ' + w2).trim(); } L.push(cur); b += tl(700, cy - (L.length - 1) * 10 + 6, L, { size: 15, weight: 600 }, 20);
  });
  b += `<line x1="590" y1="690" x2="620" y2="690" stroke="${C.tealDark}" stroke-width="4" marker-end="url(#ahT)"/>` + t(630, 696, 'air resistance', { size: 15 }) + `<line x1="750" y1="690" x2="780" y2="690" stroke="${C.rust}" stroke-width="4" marker-end="url(#ahR)"/>` + t(790, 696, 'weight', { size: 15 });
  b += t(290, 700, 'Shape only: no values', { size: 15, anchor: 'middle', fill: C.muted });
  add('04-terminal-velocity',
    svg(900, 720, 'A skydiver reaching terminal velocity', b),
    'A velocity-time curve for a skydiver rises steeply, levels off at terminal velocity, then drops sharply when the parachute opens and levels at a lower terminal velocity. Free-body diagrams show weight constant while air resistance grows until it equals weight, jumps above weight when the parachute opens, then falls back to equal weight.',
    'Terminal velocity is reached when air resistance has grown to equal weight.',
    '## Newton\'s three laws');
}

// 05 Motion graphs
{
  let b = '';
  const mini = (x, title, d, note) => panel(x, 110, 270, 272) + t(x + 135, 145, title, { size: 18, weight: 700, anchor: 'middle' }) + axes(x + 50, 310, 190, 130, 'time', 'distance', 15) + path(d, { stroke: C.tealDark, w: 4 }) + t(x + 135, 366, note, { size: 15, anchor: 'middle', fill: C.muted });
  b += mini(30, 'Stationary', 'M80,240 L270,240', 'horizontal line');
  b += mini(315, 'Constant speed', 'M365,305 L545,195', 'straight slope: gradient = speed');
  b += mini(600, 'Speeding up', 'M650,308 Q760,300 830,190', 'curve getting steeper');
  b += panel(30, 400, 840, 440);
  b += t(60, 438, 'Velocity-time graph: a tram', { size: 20, weight: 700 });
  const ox = 110, oy = 770, sx = 32, sy = 22;
  const X = (s) => ox + s * sx, Y = (v) => oy - v * sy;
  b += `<path d="M${X(0)},${Y(0)} L${X(4)},${Y(12)} L${X(4)},${Y(0)} Z" fill="${C.teal}" opacity="0.8"/><path d="M${X(4)},${Y(12)} L${X(10)},${Y(12)} L${X(10)},${Y(0)} L${X(4)},${Y(0)} Z" fill="${C.cream}"/><path d="M${X(10)},${Y(12)} L${X(13)},${Y(0)} L${X(10)},${Y(0)} Z" fill="${C.teal}" opacity="0.8"/>`;
  b += axes(ox, oy, 14 * sx, 13 * sy + 10, 'time (s)', 'velocity (m/s)');
  [0, 4, 10, 13].forEach((s) => { b += t(X(s), oy + 22, String(s), { size: 15, anchor: 'middle' }); });
  b += t(ox - 10, Y(12) + 5, '12', { size: 15, anchor: 'end' }) + `<line x1="${ox - 5}" y1="${Y(12)}" x2="${ox}" y2="${Y(12)}" stroke="${C.ink}" stroke-width="2"/>`;
  b += path(`M${X(0)},${Y(0)} L${X(4)},${Y(12)} L${X(10)},${Y(12)} L${X(13)},${Y(0)}`, { stroke: C.ink, w: 4 });
  b += t(X(2.9), Y(3), '24 m', { size: 17, weight: 700, anchor: 'middle' }) + t(X(7), Y(5), '72 m', { size: 19, weight: 700, anchor: 'middle' }) + t(X(10.95), Y(3), '18 m', { size: 17, weight: 700, anchor: 'middle' });
  b += t(X(3) - 14, Y(9), 'a = 3.0', { size: 15, weight: 700, anchor: 'end', fill: C.tealDark }) + t(X(7), Y(12) - 12, 'a = 0', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(X(10.75) + 12, Y(9), 'a = −4.0', { size: 15, weight: 700, fill: C.rust });
  b += `<rect x="${X(14) + 30}" y="500" width="250" height="190" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
  b += tl(X(14) + 46, 535, ['gradient = acceleration', '(a in m/s²)', 'area = distance', 'total = 114 m', 'average speed', '= 114 ÷ 13 = 8.77 m/s'], { size: 16, weight: 600 }, 24);
  add('05-motion-graphs',
    svg(900, 860, 'Reading motion graphs', b),
    'Three distance-time graphs: a horizontal line for stationary, a straight slope for constant speed and a steepening curve for speeding up. Below, a tram’s velocity-time graph rises to 12 m/s in 4 s (3.0 m/s²), stays at 12 m/s until 10 s, then falls to 0 at 13 s (−4.0 m/s²). The areas 24 m, 72 m and 18 m give 114 m, an average speed of 8.77 m/s.',
    'Gradient gives speed or acceleration; the area under a velocity-time graph gives distance.',
    '## Graphs of motion');
}

// 06 Pressure
{
  let b = panel(30, 110, 410, 380) + panel(460, 110, 410, 380);
  b += t(235, 148, 'Boots', { size: 21, weight: 700, anchor: 'middle' }) + t(665, 148, 'Snowshoes', { size: 21, weight: 700, anchor: 'middle' });
  const snow = (x) => `<rect x="${x}" y="320" width="370" height="70" fill="#eef4f7" stroke="${C.panelEdge}" stroke-width="2"/>`;
  b += snow(50) + snow(480);
  b += `<rect x="205" y="290" width="60" height="44" rx="8" fill="${C.olive}" stroke="${C.ink}" stroke-width="2.5"/>` + path('M205,334 L265,334 L262,350 L208,350 Z', { fill: '#ccd8de', w: 0 });
  b += `<ellipse cx="665" cy="312" rx="130" ry="14" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/><rect x="635" y="270" width="60" height="40" rx="8" fill="${C.olive}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += force(235, 180, 235, 282, C.rust, 'ahR', 5) + t(250, 210, '600 N', { size: 17, weight: 700, fill: C.rust });
  b += force(665, 180, 665, 262, C.rust, 'ahR', 5) + t(680, 210, '600 N', { size: 17, weight: 700, fill: C.rust });
  b += t(235, 420, 'p = 600 ÷ 0.030', { size: 18, anchor: 'middle' }) + t(235, 452, '= 20 000 Pa', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(665, 420, 'p = 600 ÷ 0.24', { size: 18, anchor: 'middle' }) + t(665, 452, '= 2 500 Pa', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(235, 382, 'area 0.030 m²: sinks', { size: 15, anchor: 'middle', fill: C.muted }) + t(665, 382, 'area 0.24 m²: 8× less pressure', { size: 15, anchor: 'middle', fill: C.muted });
  // dam
  b += panel(30, 510, 840, 330) + t(60, 548, 'Pressure in a liquid rises with depth', { size: 20, weight: 700 });
  b += `<rect x="70" y="590" width="330" height="220" fill="${C.teal}"/>` + `<line x1="70" y1="590" x2="400" y2="590" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  b += `<path d="M400,570 L450,570 L540,810 L400,810 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + t(470, 760, 'dam', { size: 17, weight: 700, anchor: 'middle' });
  [610, 660, 710, 760, 800].forEach((y, i) => { b += force(400 - 20 - (y - 590) * 0.5, y, 396, y, C.blue, 'ah', 3); });
  b += t(70, 580, 'longer arrows: more pressure', { size: 15, fill: C.blue, weight: 700 });
  b += tl(570, 600, ['p = h × ρ × g', '', 'At 5.0 m in fresh water:', '5.0 × 1000 × 9.8', '= 49 000 Pa', '', 'So dam walls are thicker', 'at the bottom.'], { size: 17, weight: 600 }, 24);
  add('06-pressure',
    svg(900, 860, 'Pressure: force spread over area', b),
    'A 600 N walker presses on snow through boots of area 0.030 m², giving 20 000 Pa, or snowshoes of 0.24 m², giving 2 500 Pa, eight times less. Below, water pushes on a dam with arrows that lengthen with depth; at 5.0 m in fresh water the extra pressure is 5.0 × 1000 × 9.8 = 49 000 Pa, so the dam is thicker at the base.',
    'Spread a force over more area for less pressure; liquid pressure grows with depth.',
    '## Pressure');
}

// 07 Moments: seesaw
{
  let b = panel(30, 110, 840, 400);
  const px = 450, py = 330, sc = 160; // 160 px per m
  b += `<path d="M${px - 40},${py + 110} L${px + 40},${py + 110} L${px},${py + 8} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += `<rect x="${px - 2.3 * sc}" y="${py - 8}" width="${4.6 * sc}" height="16" rx="4" fill="#c79a62" stroke="${C.ink}" stroke-width="2.5"/>`;
  const kid = (x, col) => `<circle cx="${x}" cy="${py - 60}" r="14" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${x - 16}" y="${py - 46}" width="32" height="38" rx="8" fill="${col}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const xl = px - 2.0 * sc, xr = px + 1.5 * sc;
  b += kid(xl, C.teal) + kid(xr, C.mustard);
  b += force(xl, py + 8, xl, py + 100, C.rust, 'ahR', 5) + t(xl + 12, py + 90, '300 N', { size: 18, weight: 700, fill: C.rust });
  b += force(xr, py + 8, xr, py + 120, C.rust, 'ahR', 5) + t(xr + 12, py + 110, '400 N', { size: 18, weight: 700, fill: C.rust });
  b += `<line x1="${xl}" y1="${py - 100}" x2="${px}" y2="${py - 100}" stroke="${C.ink}" stroke-width="2.5" marker-start="url(#ah)" marker-end="url(#ah)"/>` + t((xl + px) / 2, py - 112, '2.0 m', { size: 18, weight: 700, anchor: 'middle' });
  b += `<line x1="${px}" y1="${py - 100}" x2="${xr}" y2="${py - 100}" stroke="${C.ink}" stroke-width="2.5" marker-start="url(#ah)" marker-end="url(#ah)"/>` + t((xr + px) / 2, py - 112, 'd = 1.5 m', { size: 18, weight: 700, anchor: 'middle' });
  b += `<line x1="${px}" y1="${py - 130}" x2="${px}" y2="${py}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="5 5"/>` + t(px, py + 135, 'pivot', { size: 16, anchor: 'middle', fill: C.muted });
  b += path(`M${px - 70},${py + 60} A70,70 0 0 1 ${px - 70},${py - 60}`, { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' }).replace(`M${px - 70},${py + 60} A70,70 0 0 1 ${px - 70},${py - 60}`, `M${px - 110},${py - 50} Q${px - 150},${py} ${px - 110},${py + 50}`);
  b += t(px - 150, py + 80, 'anticlockwise', { size: 15, fill: C.tealDark, weight: 700, anchor: 'middle' });
  b += path(`M${px + 110},${py - 50} Q${px + 150},${py} ${px + 110},${py + 50}`, { stroke: C.olive, w: 3, extra: 'marker-end="url(#ahO)"' }) + t(px + 150, py + 80, 'clockwise', { size: 15, fill: C.olive, weight: 700, anchor: 'middle' });
  b += panel(30, 530, 840, 200, C.cream, C.olive);
  b += t(60, 568, 'Principle of moments (in balance):', { size: 19, weight: 700 }) + t(60, 600, 'total anticlockwise moment = total clockwise moment', { size: 17, fill: C.muted });
  b += t(60, 644, '300 × 2.0 = 400 × d', { size: 22, weight: 700 }) + t(60, 684, '600 = 400d   →   d = 1.5 m', { size: 22, weight: 700, fill: C.tealDark });
  b += tl(520, 644, ['moment = F × d', '(d at right angles to the', 'force, from the pivot)'], { size: 16, fill: C.muted }, 22);
  add('07-moments-seesaw',
    svg(900, 750, 'Balancing a seesaw', b),
    'A seesaw pivoted at its centre: a 300 N child sits 2.0 m to the left and a 400 N child 1.5 m to the right. The anticlockwise moment, 300 × 2.0 = 600 N m, equals the clockwise moment, 400 × 1.5 = 600 N m, so the seesaw balances.',
    'The heavier child balances the seesaw by sitting closer to the pivot.',
    '## Moments');
}
