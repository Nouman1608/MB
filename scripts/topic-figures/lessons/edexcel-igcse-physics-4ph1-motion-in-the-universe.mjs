import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-motion-in-the-universe';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3, extra = '') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" ${extra}/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const sun = (cx, cy, r) => circ(cx, cy, r, C.mustard, C.olive, 3);
const ell = (cx, cy, rx, ry, { stroke = C.ink, w = 2.5, dash = '', fill = 'none' } = {}) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// 01 Scale of the universe
{
  const pw = 186, gap = 32, y = 110, ph = 400;
  const xs = [0, 1, 2, 3].map((i) => 30 + i * (pw + gap));
  let b = '';
  const icons = [
    (cx, cy) => circ(cx, cy, 44, C.blue, C.ink, 3) + `<path d="M${cx - 30},${cy - 18} q14,-10 26,2 q10,12 -4,22 q-14,6 -22,-6 z" fill="${C.grass}"/>` + `<path d="M${cx + 8},${cy + 10} q16,-6 22,8 q-6,14 -20,6 z" fill="${C.grass}"/>`,
    (cx, cy) => [30, 50, 70].map((r) => ell(cx, cy, r, r * 0.55, { stroke: C.muted, w: 1.8 })).join('') + sun(cx, cy, 14) + circ(cx + 30, cy, 5, C.blue, C.ink, 1.5) + circ(cx - 36, cy + 30, 6, C.rust, C.ink, 1.5) + circ(cx + 45, cy - 30, 8, C.rock, C.ink, 1.5),
    (cx, cy) => {
      let o = '';
      for (let arm = 0; arm < 2; arm++) for (let k = 0; k < 26; k++) { const th = k * 0.28 + arm * Math.PI, r = 8 + k * 2.7; o += circ(cx + r * Math.cos(th), cy + r * Math.sin(th) * 0.62, 2.6, C.ink, 'none', 0); }
      o += circ(cx, cy, 9, C.mustard, 'none', 0);
      const th = 25 * 0.28, r = 8 + 25 * 2.7; const sx = cx + r * Math.cos(th), sy = cy + r * Math.sin(th) * 0.62;
      return o + circ(sx, sy, 7, C.rust, C.ink, 2) + ln(sx, sy + 7, cx + 30, cy + 62, { color: C.rust, w: 2 }) + t(cx, cy + 80, 'our solar system', { size: 15, weight: 600, fill: C.rust, anchor: 'middle' });
    },
    (cx, cy) => [[-60, -40, 20], [-15, -55, -30], [35, -40, 40], [65, -5, -10], [-55, 10, 60], [-10, 0, 10], [40, 30, -40], [-35, 50, 30], [15, 55, -20], [70, 50, 15], [-75, -10, -50]].map(([dx, dy, a]) => `<ellipse cx="${cx + dx}" cy="${cy + dy}" rx="13" ry="6" transform="rotate(${a} ${cx + dx} ${cy + dy})" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="1.8"/>`).join(''),
  ];
  const names = ['Planet', 'Solar system', 'Galaxy', 'Universe'];
  const desc = [
    ['such as Earth,', 'orbiting a star'],
    ['the Sun with its', 'planets, moons,', 'dwarf planets,', 'asteroids and', 'comets'],
    ['billions of stars', 'held together by', 'gravity; ours is', 'the Milky Way'],
    ['billions of', 'galaxies'],
  ];
  xs.forEach((x, i) => {
    b += panel(x, y, pw, ph, i === 3 ? C.cream : C.panel, i === 3 ? C.olive : C.panelEdge);
    b += badge(x + 30, y + 32, 18, String(i + 1), C.cream);
    b += icons[i](x + pw / 2, y + 140);
    b += t(x + pw / 2, y + 262, names[i], { size: 21, weight: 700, anchor: 'middle' });
    b += tl(x + pw / 2, y + 292, desc[i], { size: 16, anchor: 'middle', fill: (i === 2 || i === 3) ? C.ink : C.muted, weight: (i === 2 || i === 3) ? 600 : 400 }, 21);
    if (i < 3) b += arrow(x + pw + 3, y + 140, x + pw + gap - 3, y + 140, { w: 3.5 });
  });
  b += arrow(60, 560, 840, 560, { color: C.tealDark, marker: 'ahT', w: 5 });
  b += t(60, 548, 'smallest', { size: 17, weight: 700, fill: C.tealDark }) + t(840, 548, 'largest', { size: 17, weight: 700, fill: C.tealDark, anchor: 'end' });
  b += t(450, 600, 'Each one is part of the next. Use "billions" for both the galaxy and the universe.', { size: 17, anchor: 'middle', fill: C.muted });
  add('01-scale-of-the-universe',
    svg(900, 630, 'From planet to universe', b, ''),
    'Four panels in order of size: a planet such as Earth orbiting a star; the solar system of the Sun with its planets, moons, dwarf planets, asteroids and comets; a galaxy of billions of stars, our Milky Way, with our solar system marked; and the universe of billions of galaxies.',
    'Planet, solar system, galaxy, universe: each is part of the next.',
    '## The scale of the universe (8.2)');
}

// 02 Why g varies
{
  let b = panel(30, 110, 470, 420);
  b += t(265, 146, 'g at the surface', { size: 21, weight: 700, anchor: 'middle' });
  const ox = 110, oy = 470, S = 11; // px per N/kg
  for (let v = 0; v <= 25; v += 5) b += ln(ox - 6, oy - v * S, ox, oy - v * S, { w: 2 }) + t(ox - 12, oy - v * S + 6, String(v), { size: 15, anchor: 'end', fill: C.muted }) + (v ? ln(ox, oy - v * S, 470, oy - v * S, { color: C.panelEdge, w: 1.2 }) : '');
  b += ln(ox, oy, 470, oy, { w: 3 }) + ln(ox, oy, ox, oy - 25 * S - 10, { w: 3 });
  b += `<text x="58" y="${oy - 12.5 * S}" font-size="16" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 58 ${oy - 12.5 * S})">g / N/kg</text>`;
  [['Moon', 1.6, C.rock, 'about 1.6'], ['Earth', 10, C.teal, 'about 10'], ['Jupiter', 25, C.mustard, 'about 25']].forEach(([n, v, f, lab], i) => {
    const x = 150 + i * 105;
    b += box(x, oy - v * S, 70, v * S, f, C.ink, 0, 2.5) + t(x + 35, oy + 24, n, { size: 17, weight: 700, anchor: 'middle' }) + t(x + 35, oy - v * S - 10, lab, { size: 16, weight: 600, anchor: 'middle' });
  });
  b += t(465, oy + 24, '(cloud tops)', { size: 15, anchor: 'end', fill: C.muted }).replace('x="465"', 'x="395"').replace('text-anchor="end"', 'text-anchor="middle"').replace(`y="${oy + 24}"`, `y="${oy + 44}"`);
  // factors panel
  b += panel(520, 110, 350, 420, C.cream, C.olive);
  b += t(695, 146, 'g depends on', { size: 21, weight: 700, anchor: 'middle' });
  b += circ(590, 220, 26, C.rock) + circ(800, 220, 44, C.teal) + arrow(630, 220, 742, 220, { w: 3.5 });
  b += tl(695, 290, ['1. mass of the planet', 'or moon: more mass,', 'larger g'], { size: 17, anchor: 'middle' }, 23);
  b += circ(575, 400, 16, C.teal) + circ(640, 400, 4, C.ink) + circ(800, 400, 4, C.ink) + ln(591, 400, 636, 400, { w: 2, dash: '4 4' }) + ln(591, 412, 796, 412, { w: 2, dash: '4 4' }).replace(/y1="412"/, 'y1="400"').replace(/y2="412"/, 'y2="400"');
  b += tl(695, 450, ['2. distance from the centre:', 'further away, smaller g'], { size: 17, anchor: 'middle' }, 23);
  // height panel
  b += panel(30, 550, 840, 250);
  b += `<path d="M30,800 L30,690 Q300,650 450,650 Q600,650 870,690 L870,800 Z" fill="${C.teal}" opacity="0.6"/>`;
  b += `<path d="M330,654 L380,610 L430,651 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  b += t(450, 770, 'Earth', { size: 19, weight: 700, anchor: 'middle' });
  const g = (x, y, L, c) => arrow(x, y, x, y + L, { color: c, marker: c === C.rust ? 'ahR' : 'ah', w: 4 });
  b += circ(160, 668, 6, C.ink, 'none', 0) + g(160, 674, 60, C.rust) + tl(180, 626, ['surface:', 'about 10 N/kg'], { size: 16, weight: 600 }, 20);
  b += circ(380, 604, 6, C.ink, 'none', 0) + g(380, 610, 54, C.rust).replace(/y2="664"/, 'y2="664"') + tl(445, 590, ['mountain top:', 'a little smaller'], { size: 16, weight: 600 }, 20);
  b += box(680, 590, 26, 14, C.panel, C.ink, 2, 2) + ln(668, 597, 718, 597, { w: 2 }) + g(693, 606, 22, C.rust) + tl(728, 596, ['distant satellite:', 'much smaller,', 'never zero'], { size: 16, weight: 600 }, 20);
  b += t(450, 790, '', {});
  add('02-why-g-varies',
    svg(900, 900, 'Why g varies', b + panel(30, 815, 840, 70, C.tealLight, C.tealDark) + t(450, 858, 'Same mass everywhere, but weight W = m × g changes with g', { size: 19, weight: 700, anchor: 'middle' })),
    'A bar chart of g at the surface: about 1.6 N/kg on the Moon, about 10 N/kg on Earth and about 25 N/kg at Jupiter\'s cloud tops. g is larger for more massive bodies and smaller further from the centre, so it falls a little at a mountain top and much more at a distant satellite, but is never zero.',
    'g depends on the mass of the planet and the distance from its centre.',
    '## Why g varies (8.3)');
}

// 03 Gravity causes orbits
{
  const cx = 250, cy = 400, R = 170;
  let b = panel(30, 110, 840, 520);
  b += circ(cx, cy, R, 'none', C.muted, 2.5, 'stroke-dasharray="9 7"');
  b += circ(cx, cy, 48, C.teal) + t(cx, cy - 2, 'larger', { size: 16, weight: 700, anchor: 'middle' }) + t(cx, cy + 17, 'body', { size: 16, weight: 700, anchor: 'middle' });
  const px = cx, py = cy - R;
  b += ln(px, py, 505, py, { color: C.muted, w: 2.5, dash: '4 7' });
  b += t(505, py + 26, 'if gravity vanished:', { size: 15, fill: C.muted, italic: true, anchor: 'end' }) + t(505, py + 45, 'a straight line', { size: 15, fill: C.muted, italic: true, anchor: 'end' });
  b += arrow(px, py, px + 130, py, { color: C.tealDark, marker: 'ahT', w: 6 }) + t(px + 70, py - 14, 'velocity', { size: 18, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += arrow(px, py, px, py + 95, { color: C.rust, marker: 'ahR', w: 6 }) + t(px - 14, py + 78, 'gravity', { size: 18, weight: 700, fill: C.rust, anchor: 'end' });
  b += path(`M${px},${py + 18} L${px + 18},${py + 18} L${px + 18},${py}`, { w: 2 });
  b += circ(px, py, 14, C.rock);
  b += t(cx, cy + R + 30, 'steady speed, changing direction', { size: 15, anchor: 'middle', fill: C.muted });
  b += box(530, 150, 315, 450, C.cream, C.olive, 12);
  const pts = [['The only force is gravity,', 'towards the centre of', 'the orbit.'], ['It acts at 90° to the', 'motion: it changes the', 'direction, not the speed.'], ['Velocity keeps changing,', 'so the body is accelerating', 'towards the centre.'], ['There is no outward', '"centrifugal force".']];
  let yy = 192;
  pts.forEach((L) => { b += t(552, yy, '•', { size: 17, weight: 700 }) + tl(570, yy, L, { size: 17 }, 25); yy += L.length * 25 + 26; });
  const pairs = [['Moon', 'a planet'], ['Planet', 'the Sun'], ['Satellite', 'the Earth'], ['Comet', 'the Sun']];
  pairs.forEach(([a1, b1], i) => {
    const x = 30 + i * 213;
    b += box(x, 650, 201, 96, C.tealLight, C.tealDark, 12) + t(x + 100, 683, `${a1} orbits ${b1}`, { size: 16, weight: 700, anchor: 'middle' }) + t(x + 100, 712, 'pulled by the gravity', { size: 15, anchor: 'middle', fill: C.muted }) + t(x + 100, 732, `of ${b1}`, { size: 15, anchor: 'middle', fill: C.muted });
  });
  add('03-gravity-causes-orbits',
    svg(900, 770, 'Gravity keeps a body in orbit', b),
    'A body on a circular orbit has its velocity along the tangent and the gravitational force pointing to the centre, at 90 degrees to the velocity. A dashed line shows it would travel in a straight line if gravity vanished. Below: a moon orbits a planet, a planet and a comet orbit the Sun, and a satellite orbits the Earth, each pulled by the gravity of the larger body.',
    'Gravity towards the centre changes the direction of motion, so the body keeps orbiting.',
    '## Gravity causes orbits (8.4)');
}

// 04 Comparing orbits
{
  let b = panel(30, 110, 410, 330) + t(235, 146, 'Planet around the Sun', { size: 20, weight: 700, anchor: 'middle' });
  b += ell(235, 278, 125, 112, { stroke: C.tealDark, w: 3 }) + sun(235, 278, 22) + circ(360, 278, 11, C.blue, C.ink, 2.5);
  b += tl(235, 420, ['nearly circular'], { size: 17, anchor: 'middle', fill: C.tealDark, weight: 700 });
  b += panel(460, 110, 410, 330) + t(665, 146, 'Moon around a planet', { size: 20, weight: 700, anchor: 'middle' });
  b += ell(665, 278, 110, 104, { stroke: C.tealDark, w: 3 }) + circ(665, 278, 26, C.blue, C.ink, 3) + circ(775, 278, 9, C.rock, C.ink, 2.5);
  b += t(665, 420, 'nearly circular', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 700 });
  // comet
  b += panel(30, 460, 840, 400) + t(60, 496, 'Comet around the Sun', { size: 20, weight: 700 }) + t(60, 520, 'highly elliptical (very elongated)', { size: 17, fill: C.rust, weight: 700 });
  const ecx = 420, ecy = 690, A = 320, e = 0.88, B = A * Math.sqrt(1 - e * e), F = A * e;
  b += ell(ecx, ecy, A, B, { stroke: C.rust, w: 3 });
  const sx = ecx + F;
  b += sun(sx, ecy, 18) + t(sx - 28, ecy + 6, 'Sun', { size: 16, weight: 700, anchor: 'end' });
  b += circ(ecx + A, ecy, 8, C.panel, C.ink, 2.5) + arrow(ecx + A, ecy - 6, ecx + A, ecy - 120, { color: C.tealDark, marker: 'ahT', w: 5 });
  b += tl(ecx + A + 14, ecy - 70, ['fastest', 'when closest', 'to the Sun'], { size: 16, weight: 700, fill: C.tealDark }, 20);
  b += circ(ecx - A, ecy, 8, C.panel, C.ink, 2.5) + arrow(ecx - A, ecy + 6, ecx - A, ecy + 34, { color: C.tealDark, marker: 'ahT', w: 5 });
  b += tl(ecx - A + 20, ecy + 6, ['slowest, far', 'from the Sun'], { size: 16, weight: 700, fill: C.tealDark }, 20);
  b += t(450, 882, 'Planets and moons: distance and speed nearly constant. Comets: both change greatly.', { size: 17, anchor: 'middle', fill: C.muted });
  add('04-comparing-orbits',
    svg(900, 905, 'Planet, moon and comet orbits', b),
    'A planet orbits the Sun and a moon orbits a planet, both on nearly circular paths. A comet orbits the Sun on a highly elliptical path; its velocity arrow is long where it is closest to the Sun, where it moves fastest, and short at the far end, where it moves slowest.',
    'Planet and moon orbits are nearly circular; comet orbits are highly elliptical.',
    '## Comparing orbits (8.5)');
}

// 05 Comet energy transfers
{
  let b = panel(30, 110, 840, 470);
  const ecx = 420, ecy = 335, A = 300, e = 0.88, B = A * Math.sqrt(1 - e * e), F = A * e, sx = ecx + F;
  b += ell(ecx, ecy, A, B, { stroke: C.rust, w: 3, dash: '' });
  b += sun(sx, ecy, 18);
  // direction arrows on the orbit (anticlockwise on screen: lower half moving right toward the Sun)
  const pt = (th) => [ecx + A * Math.cos(th), ecy - B * Math.sin(th)];
  const seg = (t1, t2, c, m) => { const [x1, y1] = pt(t1), [x2, y2] = pt(t2); return arrow(x1, y1, x2, y2, { color: c, marker: m, w: 4 }); };
  b += seg(-2.1, -1.8, C.tealDark, 'ahT') + seg(-0.95, -0.65, C.tealDark, 'ahT');
  b += seg(0.65, 0.95, C.olive, 'ahO') + seg(1.8, 2.1, C.olive, 'ahO');
  b += t(sx - 26, ecy + 6, 'Sun', { size: 16, weight: 700, anchor: 'end' });
  b += circ(ecx - A, ecy, 8, C.panel) + circ(ecx + A, ecy, 8, C.panel);
  b += t(420, ecy + B + 40, 'moving towards the Sun: gravity does work, GPE → KE, speeds up', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += t(420, ecy - B - 20, 'moving away: KE → GPE, slows down', { size: 17, weight: 700, fill: C.olive, anchor: 'middle' });
  // energy bars
  const bars = (x, y, ke, gpe, title) => box(x, y, 250, 150, C.panel, C.panelEdge, 10) + t(x + 125, y + 30, title, { size: 17, weight: 700, anchor: 'middle' }) +
    box(x + 30, y + 48, gpe * 1.6, 30, C.cream, C.olive, 4, 2) + t(x + 36 + gpe * 1.6, y + 70, 'GPE', { size: 16, weight: 700 }) +
    box(x + 30, y + 95, ke * 1.6, 30, C.teal, C.tealDark, 4, 2) + t(x + 36 + ke * 1.6, y + 117, 'KE', { size: 16, weight: 700 });
  b += panel(30, 600, 840, 200, C.cream, C.olive);
  b += bars(60, 625, 20, 100, 'Far from the Sun') + bars(590, 625, 100, 20, 'Closest to the Sun');
  b += arrow(330, 700, 570, 700, { w: 4 }) + t(450, 690, 'GPE transferred to KE', { size: 16, weight: 700, anchor: 'middle' }) + t(450, 728, '(bar lengths illustrative)', { size: 15, anchor: 'middle', fill: C.muted });
  add('05-comet-energy',
    svg(900, 820, 'Why a comet speeds up near the Sun', b),
    'A comet on a highly elliptical orbit. Moving towards the Sun, gravity does work and gravitational potential energy is transferred to kinetic energy, so it speeds up; moving away, kinetic energy is transferred back and it slows down. Illustrative bars show large GPE and small KE far away, and the reverse at the closest point.',
    'Falling towards the Sun turns GPE into KE, so the comet is fastest at its closest point.',
    '## Comparing orbits (8.5)');
}

// 06 v = 2 pi r / T
{
  const cx = 230, cy = 370, R = 160;
  let b = panel(30, 110, 840, 540);
  b += circ(cx, cy, R, 'none', C.tealDark, 4);
  b += circ(cx, cy, 34, C.teal) + ln(cx, cy, cx + R, cy, { w: 3 }) + t(cx + R / 2 + 8, cy - 12, 'r', { size: 22, weight: 700, italic: true });
  b += circ(cx + R, cy, 12, C.rock);
  b += t(cx, cy - R - 20, 'one orbit: distance 2πr', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(cx, cy + R + 36, 'in one time period T', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(cx, cy + R + 62, 'r measured from the centre', { size: 15, anchor: 'middle', fill: C.muted });
  b += box(450, 150, 390, 110, C.cream, C.olive, 12);
  b += t(645, 200, 'orbital speed', { size: 18, anchor: 'middle', fill: C.muted }) + t(645, 240, 'v = 2πr / T', { size: 32, weight: 700, anchor: 'middle' });
  b += box(450, 280, 185, 70, C.tealLight, C.tealDark, 10) + t(542, 324, 'T = 2πr / v', { size: 22, weight: 700, anchor: 'middle' });
  b += box(655, 280, 185, 70, C.tealLight, C.tealDark, 10) + t(747, 324, 'r = vT / 2π', { size: 22, weight: 700, anchor: 'middle' });
  b += tl(470, 400, ['v  orbital speed in m/s', 'r  orbital radius in m', 'T  time period in s'], { size: 18 }, 30);
  b += box(450, 500, 390, 120, C.panel, C.rust, 12);
  b += t(470, 535, 'Convert first:', { size: 18, weight: 700, fill: C.rust });
  b += t(470, 568, '1 day = 24 × 3600 = 86 400 s', { size: 18 });
  b += t(470, 600, 'T in days × 86 400 = T in s', { size: 18 });
  add('06-orbital-speed-equation',
    svg(900, 670, 'Orbital speed: v = 2πr / T', b),
    'A circular orbit of radius r measured from the centre. In one time period T the body travels the circumference 2πr, so v = 2πr / T, which rearranges to T = 2πr / v and r = vT / 2π. v is in m/s, r in m and T in s; a time in days is multiplied by 86 400 to give seconds.',
    'Orbital speed is one circumference, 2πr, divided by one time period, T.',
    '## Orbital speed (8.6)');
}

// 07 Worked examples
{
  const card = (x, title, lines) => panel(x, 110, 410, 290) + t(x + 24, 148, title, { size: 21, weight: 700 }) + lines.map((s, i) => t(x + 24, 190 + i * 30, s, { size: 17, weight: /^   = (1\.02|2\.4 )/.test(s) ? 700 : 400 })).join('');
  let b = card(30, 'Example 1: the Moon', ['r = 3.84 × 10⁸ m,  T = 27.3 days', 'T = 27.3 × 86 400', '   = 2.36 × 10⁶ s', 'v = 2π × 3.84 × 10⁸ / 2.36 × 10⁶', '   = 1.02 × 10³ m/s', '   (about 1 km/s)']);
  b += card(460, 'Example 2: Mars', ['r = 2.28 × 10¹¹ m,  T = 687 days', 'T = 687 × 86 400', '   = 5.94 × 10⁷ s', 'v = 2π × 2.28 × 10¹¹ / 5.94 × 10⁷', '   = 2.4 × 10⁴ m/s']);
  b += panel(30, 420, 840, 250, C.cream, C.olive) + t(60, 458, 'Mars compared with Earth (orbiting the Sun)', { size: 20, weight: 700 });
  const S = 500 / 3.0e4;
  b += t(170, 513, 'Earth', { size: 18, weight: 700, anchor: 'end' }) + box(190, 488, 3.0e4 * S, 36, C.teal, C.tealDark, 4, 2) + t(200 + 3.0e4 * S, 513, '3.0 × 10⁴ m/s', { size: 17, weight: 600 });
  b += t(170, 573, 'Mars', { size: 18, weight: 700, anchor: 'end' }) + box(190, 548, 2.4e4 * S, 36, C.rust, C.ink, 4, 2) + t(200 + 2.4e4 * S, 573, '2.4 × 10⁴ m/s', { size: 17, weight: 600 });
  b += t(60, 640, 'Further from the Sun → weaker field → Mars moves more slowly.', { size: 18, fill: C.olive, weight: 700 });
  add('07-orbital-speed-worked',
    svg(900, 690, 'Worked examples: v = 2πr / T', b),
    'The Moon: T = 27.3 × 86 400 = 2.36 × 10⁶ s, so v = 2π × 3.84 × 10⁸ / 2.36 × 10⁶ = 1.02 × 10³ m/s. Mars: T = 687 × 86 400 = 5.94 × 10⁷ s, so v = 2π × 2.28 × 10¹¹ / 5.94 × 10⁷ = 2.4 × 10⁴ m/s, slower than Earth\'s 3.0 × 10⁴ m/s.',
    'Convert days to seconds first; Mars, further out, moves more slowly than Earth.',
    '## Worked examples');
}
