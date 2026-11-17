import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-stellar-evolution';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const vtext = (x, y, s, size = 16) => `<text x="${x}" y="${y}" font-size="${size}" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x} ${y})">${s}</text>`;
// star colours (drawn colours only, not data)
const SC = { red: '#c8553d', orange: '#e08a3c', yellow: '#e8c547', white: '#f4f1e6', blue: '#6f9bd6' };
const star = (cx, cy, r, col) => circ(cx, cy, r, col, C.ink, 2.5);
const nebula = (cx, cy) => [[-30, -8, 26], [0, -22, 28], [28, -6, 26], [-12, 16, 24], [18, 18, 22]].map(([dx, dy, r]) => `<circle cx="${cx + dx}" cy="${cy + dy}" r="${r}" fill="#c9d3e3" stroke="${C.muted}" stroke-width="2" opacity="0.9"/>`).join('') + [[-20, -10], [10, 5], [25, -18], [-5, 22]].map(([dx, dy]) => `<circle cx="${cx + dx}" cy="${cy + dy}" r="2.5" fill="${C.ink}"/>`).join('');
const burst = (cx, cy, r) => { let p = ''; for (let i = 0; i < 16; i++) { const a = (i * Math.PI) / 8, rr = i % 2 ? r * 0.45 : r; p += `${i ? 'L' : 'M'}${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)} `; } return `<path d="${p}Z" fill="${SC.yellow}" stroke="${C.rust}" stroke-width="2.5"/>`; };

// 01 Colour and surface temperature
{
  let b = panel(30, 110, 840, 400);
  const cols = [['red', SC.red], ['orange', SC.orange], ['yellow', SC.yellow], ['white', SC.white], ['blue', SC.blue]];
  cols.forEach(([n, c], i) => { const x = 120 + i * 165; b += star(x, 250, 46, c) + t(x, 330, n, { size: 20, weight: 700, anchor: 'middle' }); });
  b += t(120, 370, 'about 3000 K', { size: 16, anchor: 'middle', fill: C.muted }) + t(120, 392, 'coolest', { size: 16, weight: 700, anchor: 'middle', fill: SC.red });
  b += t(450, 370, 'the Sun:', { size: 16, anchor: 'middle', fill: C.muted }) + t(450, 392, 'about 5800 K', { size: 16, weight: 700, anchor: 'middle' });
  b += t(780, 370, 'above 10 000 K', { size: 16, anchor: 'middle', fill: C.muted }) + t(780, 392, 'hottest', { size: 16, weight: 700, anchor: 'middle', fill: C.blue });
  b += arrow(120, 440, 780, 440, { w: 5 }) + t(450, 475, 'surface temperature increases', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 160, 'Temperatures approximate: they show the trend', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 530, 840, 150, C.cream, C.olive);
  b += t(60, 568, 'Like heated metal: dull red → orange → yellow → white as it gets hotter.', { size: 17, weight: 700 });
  b += tl(60, 600, ['A hotter object emits more of its radiation at shorter wavelengths, so its light', 'shifts from the red end of the spectrum towards the blue end. Colour shows the', 'surface temperature, not the distance or size of the star.'], { size: 16 }, 24);
  add('01-colour-temperature',
    svg(900, 700, 'Star colour shows surface temperature', b),
    'Five stars from coolest to hottest: red at about 3000 K, orange, yellow (the Sun, about 5800 K), white, and blue above 10 000 K. Hotter objects emit more radiation at shorter wavelengths, so their light shifts from red towards blue.',
    'Red stars are coolest and blue stars hottest; the Sun is yellow.',
    '## Colour and surface temperature (8.7, 8.8)');
}

// 02 Life of a Sun-like star
{
  const stages = [
    ['Nebula', 'cloud of gas (mostly', 'hydrogen) and dust', (x, y) => nebula(x, y)],
    ['Main sequence star', 'hydrogen fuses to', 'helium; stable (the Sun now)', (x, y) => star(x, y, 30, SC.yellow)],
    ['Red giant', 'outer layers expand', 'and cool', (x, y) => star(x, y, 50, SC.red)],
    ['White dwarf', 'hot, dense core;', 'slowly cools and fades', (x, y) => star(x, y, 12, SC.white)],
  ];
  const causes = ['gravity pulls material together; it heats up', 'hydrogen in the core runs out', 'outer layers drift away into space'];
  let b = '';
  stages.forEach(([n, l1, l2, ic], i) => {
    const y = 110 + i * 180;
    b += panel(30, y, 840, 130);
    b += ic(150, y + 65);
    b += badge(270, y + 48, 20, String(i + 1), C.cream) + t(305, y + 56, n, { size: 22, weight: 700 });
    b += tl(305, y + 90, [l1 + ' ' + l2], { size: 18, fill: C.muted });
    if (i < 3) b += arrow(150, y + 132, 150, y + 178, { color: C.tealDark, marker: 'ahT', w: 4 }) + t(180, y + 162, causes[i], { size: 17, weight: 700, fill: C.tealDark });
  });
  add('02-sun-like-star',
    svg(900, 800, 'The life of a star like the Sun', b),
    'Four stages in order. A nebula of gas and dust collapses under gravity and heats up. A main sequence star fuses hydrogen into helium and is stable; the Sun is at this stage. When the core hydrogen runs out it becomes a red giant whose outer layers expand and cool. The outer layers drift away, leaving a white dwarf that slowly cools and fades.',
    'Nebula, main sequence, red giant, white dwarf, with a cause for each change.',
    '## A star like the Sun (8.9)');
}

// 03 Main-sequence balance
{
  let b = panel(30, 110, 840, 470);
  const cx = 300, cy = 340;
  b += star(cx, cy, 120, SC.yellow) + circ(cx, cy, 40, '#f0d77a', C.olive, 2) + t(cx, cy + 6, 'core', { size: 16, weight: 700, anchor: 'middle' });
  [0, 1, 2, 3, 4, 5, 6, 7].forEach((k) => {
    const a = (k * Math.PI) / 4 + Math.PI / 8, c = Math.cos(a), s = Math.sin(a);
    b += arrow(cx + c * 200, cy + s * 200, cx + c * 128, cy + s * 128, { color: C.blue, w: 5 }).replace('url(#ah)', 'url(#ah)');
    b += arrow(cx + c * 70, cy + s * 70, cx + c * 112, cy + s * 112, { color: C.rust, marker: 'ahR', w: 5 });
  });
  b += box(560, 160, 280, 120, C.tealLight, C.tealDark, 12) + t(580, 196, 'Gravity', { size: 21, weight: 700, fill: C.blue }) + tl(580, 226, ['pulls the star\'s material', 'inwards'], { size: 17 }, 23);
  b += box(560, 300, 280, 120, '#fbeee6', C.rust, 12) + t(580, 336, 'Pressure', { size: 21, weight: 700, fill: C.rust }) + tl(580, 366, ['from energy released by', 'fusion pushes outwards'], { size: 17 }, 23);
  b += box(560, 440, 280, 110, C.cream, C.olive, 12) + tl(580, 476, ['Balanced: the star is', 'stable for a very long', 'time.'], { size: 17, weight: 700 }, 23);
  b += t(300, 560, 'When core hydrogen runs out, the balance is lost.', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-main-sequence-balance',
    svg(900, 600, 'Why a main sequence star is stable', b),
    'A star with arrows pointing inwards for gravity and outwards for the pressure from energy released by fusion in the core. The two are balanced, so the star stays stable for a very long time; the balance is lost when the core hydrogen runs out.',
    'Inward gravity balances outward pressure from fusion energy.',
    '## A star like the Sun (8.9)');
}

// 04 Mass decides the fate
{
  let b = panel(30, 110, 840, 740);
  const node = (x, y, icon, label, sub, r = 36) => icon(x, y) + t(x, y + r + 24, label, { size: 18, weight: 700, anchor: 'middle' }) + (sub ? t(x, y + r + 46, sub, { size: 15, anchor: 'middle', fill: C.muted }) : '');
  b += node(450, 175, nebula, 'Nebula', '');
  b += arrow(420, 265, 245, 315, { w: 3.5 }) + arrow(480, 265, 655, 315, { w: 3.5 });
  b += t(240, 140, 'Similar mass to the Sun', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(660, 140, 'Much more massive', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  // left column
  const L = 240, R = 660;
  b += node(L, 360, (x, y) => star(x, y, 22, SC.yellow), 'Main sequence star', 'long lifetime');
  b += arrow(L, 455, L, 495, { w: 3.5 });
  b += node(L, 545, (x, y) => star(x, y, 38, SC.red), 'Red giant', '', 40);
  b += arrow(L, 630, L, 700, { w: 3.5 });
  b += node(L, 730, (x, y) => star(x, y, 10, SC.white), 'White dwarf', 'cools and fades', 12);
  // right column
  b += node(R, 360, (x, y) => star(x, y, 30, SC.blue), 'Main sequence star', 'hotter, brighter, shorter life');
  b += arrow(R, 455, R, 490, { w: 3.5 });
  b += node(R, 545, (x, y) => star(x, y, 50, SC.red), 'Red supergiant', '', 52);
  b += arrow(R, 630, R, 660, { w: 3.5 });
  b += burst(R, 700, 36) + t(R + 50, 706, 'Supernova', { size: 18, weight: 700 });
  b += arrow(R - 20, 742, R - 90, 770, { w: 3 }) + arrow(R + 20, 742, R + 90, 770, { w: 3 });
  b += circ(R - 110, 785, 8, C.ink, C.ink, 1) + t(R - 110, 820, 'neutron star', { size: 16, weight: 700, anchor: 'middle' });
  b += circ(R + 110, 785, 14, '#111', C.olive, 3) + t(R + 110, 820, 'black hole', { size: 16, weight: 700, anchor: 'middle' });
  b += path(`M${R + 40},${690} C860,660 860,220 530,172`, { stroke: C.tealDark, w: 2.5, extra: 'stroke-dasharray="8 6" marker-end="url(#ahT)"' });
  b += tl(805, 470, ['material', 'can form', 'new nebulae'], { size: 15, fill: C.tealDark, anchor: 'end', weight: 600 }, 19);
  b += ln(450, 330, 450, 830, { color: C.panelEdge, w: 2, dash: '5 6' });
  add('04-mass-decides-fate',
    svg(900, 870, 'Mass decides the fate of a star', b),
    'Two paths from a nebula. A star of similar mass to the Sun becomes a main sequence star with a long lifetime, then a red giant, then a white dwarf. A much more massive star is hotter and brighter with a shorter main sequence life, becomes a red supergiant, explodes as a supernova whose material can form new nebulae, and leaves a neutron star or, for the most massive, a black hole.',
    'Sun-like stars end as white dwarfs; much more massive stars as neutron stars or black holes.',
    '## A star more massive than the Sun (8.10)');
}

// 05 Absolute magnitude
{
  let b = panel(30, 110, 840, 330);
  b += t(60, 148, 'Apparent brightness depends on light given out and distance', { size: 19, weight: 700 });
  b += circ(90, 280, 22, C.teal, C.ink, 3) + t(90, 320, 'Earth', { size: 16, weight: 700, anchor: 'middle' });
  b += star(300, 240, 12, SC.yellow) + t(300, 210, 'dim star, nearby', { size: 16, weight: 600, anchor: 'middle' });
  b += star(760, 300, 28, SC.blue) + t(760, 252, 'powerful star, far away', { size: 16, weight: 600, anchor: 'middle' });
  b += ln(118, 274, 285, 244, { color: C.muted, w: 2, dash: '6 5' }) + ln(118, 284, 730, 300, { color: C.muted, w: 2, dash: '6 5' });
  b += tl(60, 380, ['From Earth the dim star can look brighter. To compare fairly, imagine every star', 'at the same standard distance, 10 parsecs (about 32.6 light-years).'], { size: 17 }, 25);
  b += panel(30, 460, 840, 300, C.cream, C.olive);
  b += t(60, 498, 'Absolute magnitude: brightness at the standard distance', { size: 19, weight: 700 });
  const x0 = 110, x1 = 790, m0 = -5, m1 = 10, X = (m) => x0 + ((m - m0) / (m1 - m0)) * (x1 - x0);
  b += ln(x0 - 20, 600, x1 + 20, 600, { w: 3 });
  [-5, 0, 5, 10].forEach((m) => (b += ln(X(m), 590, X(m), 610, { w: 3 }) + t(X(m), 640, m > 0 ? `+${m}` : m < 0 ? `−${-m}` : '0', { size: 19, weight: 700, anchor: 'middle' })));
  b += star(X(-5), 556, 22, SC.white) + star(X(5), 562, 12, SC.yellow) + t(X(5), 534, 'the Sun ≈ +5', { size: 16, weight: 700, anchor: 'middle' }) + star(X(10), 566, 6, SC.red);
  b += arrow(x1, 680, x0, 680, { color: C.olive, marker: 'ahO', w: 4 }) + t(450, 706, 'smaller (more negative) number = brighter star', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += t(450, 738, 'The very brightest stars have negative absolute magnitudes.', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-absolute-magnitude',
    svg(900, 780, 'Absolute magnitude (Physics only)', b),
    'A dim nearby star can look brighter from Earth than a powerful distant star, so stars are compared at a standard distance of 10 parsecs. On the absolute magnitude scale from −5 to +10, smaller numbers mean brighter stars; the Sun is about +5 and the brightest stars are negative.',
    'Absolute magnitude compares stars at one distance; smaller numbers are brighter.',
    '## Absolute magnitude (8.11P)');
}

// HR helpers
const HR = (ox, oy, W, H) => {
  const lt = (T) => Math.log10(T);
  const X = (T) => ox + ((lt(20000) - lt(T)) / (lt(20000) - lt(2500))) * W;
  const Y = (M) => oy - H + ((M + 8) / 23) * H; // -8 at top, +15 at bottom
  return { X, Y };
};
const hrAxes = (ox, oy, W, H, { X, Y }) => {
  let o = `<rect x="${ox}" y="${oy - H}" width="${W}" height="${H}" fill="#fbfcfc"/>`;
  [-5, 0, 5, 10, 15].forEach((m) => (o += ln(ox - 6, Y(m), ox, Y(m), { w: 2 }) + t(ox - 12, Y(m) + 5, m > 0 ? `+${m}` : m < 0 ? `−${-m}` : '0', { size: 15, anchor: 'end', fill: C.muted })));
  [10000, 6000, 4000, 3000].forEach((T) => (o += ln(X(T), oy, X(T), oy + 6, { w: 2 }) + t(X(T), oy + 24, T === 10000 ? '10 000' : String(T), { size: 15, anchor: 'middle', fill: C.muted })));
  o += ln(ox, oy, ox + W, oy, { w: 3 }) + ln(ox, oy, ox, oy - H, { w: 3 });
  o += t(ox + W / 2, oy + 52, 'surface temperature / K   (hot on the left)', { size: 17, weight: 600, anchor: 'middle' });
  o += vtext(ox - 52, oy - H / 2, 'absolute magnitude (brighter at the top)', 16);
  // colour strip
  const cs = [SC.blue, SC.white, SC.yellow, SC.orange, SC.red];
  cs.forEach((c, i) => (o += `<rect x="${ox + (i * W) / 5}" y="${oy + 64}" width="${W / 5}" height="14" fill="${c}" stroke="${C.ink}" stroke-width="1"/>`));
  return o;
};
let clipN = 0;
const msBand = ({ X, Y }, ox, oy, W, H) => {
  const id = `hrclip${++clipN}`;
  const P = [[20000, -4.5], [10000, 1], [5800, 5], [4000, 8.5], [2600, 13]].map(([T, M]) => `${X(T).toFixed(1)},${Y(M).toFixed(1)}`);
  return `<clipPath id="${id}"><rect x="${ox}" y="${oy - H}" width="${W}" height="${H}"/></clipPath><g clip-path="url(#${id})">` + path(`M${P.join(' L')}`, { stroke: C.teal, w: 34, extra: 'opacity="0.85"' }) + '</g>';
};

// 06 HR diagram: main components
{
  const ox = 140, oy = 650, W = 520, H = 500;
  const g = HR(ox, oy, W, H);
  let b = panel(30, 110, 840, 680);
  b += hrAxes(ox, oy, W, H, g);
  b += msBand(g, ox, oy, W, H);
  b += `<rect x="${ox + 10}" y="${g.Y(-7.8)}" width="${W - 20}" height="${g.Y(-5.6) - g.Y(-7.8)}" rx="16" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + t(ox + W / 2, g.Y(-6.5), 'supergiants', { size: 17, weight: 700, anchor: 'middle' });
  b += `<ellipse cx="${g.X(3600)}" cy="${g.Y(-1)}" rx="80" ry="42" fill="#f3d5cc" stroke="${C.rust}" stroke-width="2"/>` + t(g.X(3600), g.Y(-1) + 6, 'red giants', { size: 17, weight: 700, anchor: 'middle' });
  b += `<ellipse cx="${g.X(11000)}" cy="${g.Y(12.5)}" rx="90" ry="34" fill="#e6eef8" stroke="${C.blue}" stroke-width="2"/>` + t(g.X(11000), g.Y(12.5) + 6, 'white dwarfs', { size: 17, weight: 700, anchor: 'middle' });
  b += t(g.X(12000) + 6, g.Y(-2.2), 'main sequence', { size: 17, weight: 700, fill: C.tealDark, anchor: 'start' }).replace(/x="[\d.]+"/, `x="${(g.X(9000)).toFixed(1)}"`).replace(/y="[\d.]+"/, `y="${g.Y(-0.5).toFixed(1)}"`);
  const sx = g.X(5800), sy = g.Y(5);
  b += path(`M${sx + 10},${sy - 12} Q${g.X(4300)},${g.Y(2)} ${g.X(3800) - 18},${g.Y(-1) + 32}`, { stroke: C.rust, w: 3, extra: 'marker-end="url(#ahR)" stroke-dasharray="8 5"' });
  b += path(`M${g.X(3600) - 70},${g.Y(-1) + 30} Q${g.X(7000)},${g.Y(6)} ${g.X(10000) + 50},${g.Y(12.5) - 30}`, { stroke: C.rust, w: 3, extra: 'marker-end="url(#ahR)" stroke-dasharray="8 5"' });
  b += star(sx, sy, 11, SC.yellow) + t(sx + 4, sy + 34, 'Sun', { size: 17, weight: 700 });
  b += box(690, 170, 160, 400, C.cream, C.olive, 12);
  b += tl(706, 204, ['The Sun\'s path', '(dashed):', '', 'main sequence', 'now', '↓', 'up and right to', 'red giant', '↓', 'down and left', 'to white dwarf'], { size: 16 }, 26);
  add('06-hr-diagram',
    svg(900, 810, 'The Hertzsprung–Russell diagram (Physics only)', b),
    'An HR diagram with absolute magnitude on the vertical axis, brighter at the top, and surface temperature on the horizontal axis, hot and blue on the left, cool and red on the right. The main sequence runs diagonally from top left to bottom right with the Sun near the middle; red giants sit above it on the right, supergiants across the top and white dwarfs below it on the left. The Sun will move up and right to the red giants, then down and left to the white dwarfs.',
    'Hot on the left, bright at the top: four regions to label.',
    '## The Hertzsprung–Russell diagram (8.12P)');
}

// 07 Worked example: classify P, Q, R
{
  const ox = 140, oy = 560, W = 440, H = 420;
  const g = HR(ox, oy, W, H);
  let b = panel(30, 110, 840, 590);
  b += hrAxes(ox, oy, W, H, g).replace('surface temperature / K   (hot on the left)', 'surface temperature / K (hot on the left)');
  b += msBand(g, ox, oy, W, H);
  const pts = [['P', 4000, -2, SC.orange], ['Q', 10000, 12, SC.white], ['R', 6000, 5, SC.yellow]];
  pts.forEach(([n, T, M, c]) => {
    b += ln(g.X(T), oy, g.X(T), g.Y(M), { color: C.muted, w: 1.5, dash: '4 4' }) + ln(ox, g.Y(M), g.X(T), g.Y(M), { color: C.muted, w: 1.5, dash: '4 4' });
    b += star(g.X(T), g.Y(M), 13, c) + t(g.X(T) + 18, g.Y(M) - 12, n, { size: 21, weight: 700 });
  });
  const card = (y, n, l1, l2, edge) => box(610, y, 240, 120, C.panel, edge, 12) + t(630, y + 34, n, { size: 20, weight: 700 }) + tl(630, y + 66, [l1, l2], { size: 16 }, 24);
  b += card(140, 'P: red giant', '4000 K, −2', 'cool (red) but very bright', C.rust);
  b += card(305, 'Q: white dwarf', '10 000 K, +12', 'hot but very dim', C.blue);
  b += card(470, 'R: main sequence', '6000 K, +5', 'similar to the Sun', C.tealDark);
  b += t(450, 682, 'Illustrative data from the lesson.', { size: 15, anchor: 'middle', fill: C.muted });
  add('07-classify-stars',
    svg(900, 720, 'Worked example: classifying stars', b),
    'Three stars plotted on an HR diagram. P at 4000 K and absolute magnitude −2 lies above the main sequence on the right: a red giant, cool but very bright. Q at 10 000 K and +12 lies below it on the left: a white dwarf, hot but very dim. R at 6000 K and +5 lies on the main sequence, similar to the Sun.',
    'Position on the HR diagram classifies a star.',
    '## Worked example: using HR positions');
}
