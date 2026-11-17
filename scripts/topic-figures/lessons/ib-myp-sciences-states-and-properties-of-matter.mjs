import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-sciences-states-and-properties-of-matter';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { if ((out[out.length - 1] + ' ' + w).trim().length > n) out.push(w); else out[out.length - 1] = (out[out.length - 1] + ' ' + w).trim(); } return out; };
const P = (x, y, f = C.teal, r = 13) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
const axes = (ox, oy, w, h, xl, yl, size = 16, off = 24) => `<line x1="${ox}" y1="${oy}" x2="${ox + w}" y2="${oy}" stroke="${C.ink}" stroke-width="3"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h}" stroke="${C.ink}" stroke-width="3"/>` +
  t(ox + w / 2, oy + 34, xl, { size, weight: 600, anchor: 'middle' }) +
  `<text x="${ox - off}" y="${oy - h / 2}" font-size="${size}" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${ox - off} ${oy - h / 2})">${yl}</text>`;
const flame = (x, y) => `<path d="M${x},${y} q-14,-18 -2,-38 q4,14 10,6 q6,14 -8,32 Z" fill="${C.mustard}" stroke="${C.rust}" stroke-width="2"/>`;

// 01 Particle model: solid, liquid, gas
{
  let b = '';
  const box = (x) => `<rect x="${x + 30}" y="152" width="210" height="190" rx="6" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`;
  const cols = [['Solid', 30], ['Liquid', 315], ['Gas', 600]];
  cols.forEach(([n, x]) => { b += panel(x, 110, 270, 560) + t(x + 135, 138, n, { size: 21, weight: 700, anchor: 'middle' }) + box(x); });
  // solid grid
  for (let r = 0; r < 6; r++) for (let c = 0; c < 7; c++) b += P(30 + 30 + 18 + c * 26 + 4, 150 + 190 - 16 - r * 26 - 30, C.teal);
  // vibration marks on two particles
  // liquid
  const L = [[352, 322], [378, 324], [404, 320], [431, 323], [458, 322], [484, 324], [510, 321], [365, 299], [391, 297], [420, 300], [446, 298], [473, 300], [499, 297], [354, 275], [380, 272], [408, 276], [434, 273], [461, 276], [488, 272], [512, 276], [368, 250], [396, 249], [424, 251], [452, 250], [478, 249], [504, 252]];
  L.forEach(([x, y]) => { b += P(x, y, C.cream); });
  // gas
  const G = [[665, 185, 30], [770, 180, 160], [815, 240, 250], [680, 300, -60], [800, 315, -20], [725, 245, -80], [745, 300, 180]];
  G.forEach(([x, y, a]) => { const r = (a * Math.PI) / 180; b += P(x, y, '#f6d9c6') + arrow(x + 15 * Math.cos(r), y + 15 * Math.sin(r), x + 38 * Math.cos(r), y + 38 * Math.sin(r), { w: 2.2 }); });
  const rows = [
    ['close, regular', 'close, random', 'far apart, random'],
    ['vibrate in place', 'slide past each other', 'move fast, all directions'],
    ['strong forces', 'weaker forces', 'very weak forces'],
    ['fixed shape', 'shape of container', 'fills container'],
    ['fixed volume', 'fixed volume', 'fills container'],
    ['almost no compression', 'almost no compression', 'compresses easily'],
  ];
  rows.forEach((r, i) => { r.forEach((s, j) => { b += t(30 + j * 285 + 135, 380 + i * 46, s, { size: 16, weight: i === 1 ? 700 : 500, anchor: 'middle', fill: i === 5 && j === 2 ? C.rust : C.ink }); }); });
  b += t(450, 700, 'Temperature is linked to the average kinetic energy of the particles.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('01-particle-model',
    svg(900, 720, 'The particle model of the three states', b),
    'Particle diagrams: a solid has particles touching in a regular pattern, vibrating in place; a liquid has particles touching but random, sliding past each other; a gas has particles far apart, moving fast in all directions. Below each are its forces, shape, volume and how easily it compresses: only the gas compresses easily.',
    'Gases compress because their particles are far apart; solids and liquids are already touching.',
    '## The particle model');
}

// 02 Diffusion tube
{
  let b = panel(30, 110, 840, 330);
  const ty = 240, x1 = 120, x2 = 780;
  b += `<rect x="${x1}" y="${ty - 22}" width="${x2 - x1}" height="44" rx="6" fill="#f3f8fa" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="${x1 - 40}" y="${ty - 28}" width="44" height="56" rx="6" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${x2 - 4}" y="${ty - 28}" width="44" height="56" rx="6" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const ring = x1 + (x2 - x1) * 0.6;
  b += `<rect x="${ring - 10}" y="${ty - 20}" width="20" height="40" fill="#fff" stroke="${C.muted}" stroke-width="2"/>`;
  b += t(x1 - 18, ty - 44, 'cotton wool soaked in', { size: 15, anchor: 'start', fill: C.muted }).replace(`x="${x1 - 18}"`, `x="${x1 - 40}"`) + t(x1 - 40, ty + 60, 'ammonia', { size: 18, weight: 700 });
  b += t(x2 + 40, ty - 44, 'cotton wool soaked in', { size: 15, anchor: 'end', fill: C.muted }) + t(x2 + 40, ty + 60, 'hydrogen chloride', { size: 18, weight: 700, anchor: 'end' });
  b += arrow(x1 + 20, ty - 60, ring - 30, ty - 60, { w: 6, color: C.tealDark, marker: 'ahT' }) + t((x1 + ring) / 2, ty - 74, 'lighter: moves faster, travels further', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += arrow(x2 - 20, ty - 60, ring + 30, ty - 60, { w: 3, color: C.rust, marker: 'ahR' }) + t((x2 + ring) / 2 + 10, ty - 74, 'heavier: slower', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  b += `<line x1="${ring}" y1="${ty + 24}" x2="${ring}" y2="${ty + 88}" stroke="${C.ink}" stroke-width="1.8"/>` + t(ring, ty + 108, 'white ring of ammonium chloride', { size: 16, weight: 700, anchor: 'middle' }) + t(ring, ty + 128, 'forms nearer the hydrogen chloride end', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 460, 840, 120, C.cream, C.olive) + t(60, 496, 'Diffusion: net movement from higher to lower concentration by random motion.', { size: 17, weight: 700 }) +
    t(60, 528, 'Fast in gases, slower in liquids, extremely slow in solids.', { size: 16 }) + t(60, 556, 'Faster at higher temperature and for lighter particles.', { size: 16 });
  add('02-diffusion-tube',
    svg(900, 600, 'Diffusion in a tube', b),
    'A glass tube has cotton wool soaked in ammonia at one end and hydrogen chloride at the other. Ammonia particles are lighter and move faster, so the white ring of ammonium chloride forms nearer the hydrogen chloride end. Diffusion is fastest in gases, faster at higher temperature and for lighter particles.',
    'The ring forms nearer the heavier gas, because lighter particles diffuse faster.',
    '## The particle model');
}

// 03 Changes of state
{
  let b = '';
  const S = [450, 190], L = [700, 560], G = [200, 560];
  const st = ([x, y], n, f) => `<circle cx="${x}" cy="${y}" r="78" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + t(x, y + 9, n, { size: 26, weight: 700, anchor: 'middle' });
  b += st(S, 'Solid', C.teal) + st(L, 'Liquid', C.cream) + st(G, 'Gas', '#f6d9c6');
  const arc = (a, c, off, col, mk, lbl, lx, ly, anchor = 'middle') => {
    const dx = c[0] - a[0], dy = c[1] - a[1], Ln = Math.hypot(dx, dy), ux = dx / Ln, uy = dy / Ln, px = -uy * off, py = ux * off;
    return `<line x1="${a[0] + ux * 88 + px}" y1="${a[1] + uy * 88 + py}" x2="${c[0] - ux * 92 + px}" y2="${c[1] - uy * 92 + py}" stroke="${col}" stroke-width="4" marker-end="url(#${mk})"/>` + t(lx, ly, lbl, { size: 18, weight: 700, anchor, fill: col });
  };
  b += arc(S, L, -14, C.rust, 'ahR', 'melting', 660, 350, 'start') + arc(L, S, -14, C.tealDark, 'ahT', 'freezing', 575, 425, 'end');
  b += arc(L, G, -14, C.rust, 'ahR', 'boiling / evaporation', 450, 680) + arc(G, L, -14, C.tealDark, 'ahT', 'condensation', 450, 530);
  b += arc(S, G, 14, C.rust, 'ahR', 'sublimation', 240, 350, 'end') + arc(G, S, 14, C.tealDark, 'ahT', 'deposition', 325, 425, 'start');
  b += `<rect x="40" y="120" width="230" height="80" rx="12" fill="#fff" stroke="${C.panelEdge}" stroke-width="2"/>` +
    `<line x1="58" y1="148" x2="98" y2="148" stroke="${C.rust}" stroke-width="4" marker-end="url(#ahR)"/>` + t(108, 154, 'energy absorbed', { size: 16, weight: 600 }) +
    `<line x1="58" y1="180" x2="98" y2="180" stroke="${C.tealDark}" stroke-width="4" marker-end="url(#ahT)"/>` + t(108, 186, 'energy released', { size: 16, weight: 600 });
  b += panel(30, 720, 840, 90, C.cream, C.olive) + t(450, 756, 'During a change of state the temperature stays constant:', { size: 17, weight: 700, anchor: 'middle' }) +
    t(450, 784, 'energy overcomes forces between particles instead of speeding them up.', { size: 16, anchor: 'middle' });
  add('03-changes-of-state',
    svg(900, 830, 'Changes of state', b),
    'A triangle of solid, liquid and gas. Melting, boiling or evaporation, and sublimation absorb energy; freezing, condensation and deposition release it. During any change of state the temperature stays constant because the energy overcomes forces between particles.',
    'Changes towards gas absorb energy; changes towards solid release it.',
    '## Changes of state');
}

// 04 Heating curve and energy
{
  let b = panel(30, 110, 840, 470);
  const ox = 170, oy = 480, W = 660, H = 320;
  b += axes(ox, oy, W, H, 'time (heated steadily)', 'temperature', 16, 135);
  // segments: solid warm 0-60, melt 60-180 (120s), liquid warm 180-260, boil 260-860 compressed
  const sx = 0.62; // px per s for first part
  const pts = [[0, 0], [60, 70], [180, 70], [260, 210], [860, 210]];
  const X = (s) => ox + 10 + s * (W - 30) / 860, Y = (v) => oy - 20 - v * 1.3;
  b += path('M' + pts.map(([s, v]) => `${X(s).toFixed(1)},${Y(v)}`).join(' L'), { stroke: C.rust, w: 4 });
  b += `<line x1="${ox}" y1="${Y(70)}" x2="${X(60)}" y2="${Y(70)}" stroke="${C.muted}" stroke-width="1.8" stroke-dasharray="5 5"/>` + t(ox - 8, Y(70) + 5, 'melting point', { size: 15, anchor: 'end' });
  b += `<line x1="${ox}" y1="${Y(210)}" x2="${X(260)}" y2="${Y(210)}" stroke="${C.muted}" stroke-width="1.8" stroke-dasharray="5 5"/>` + t(ox - 8, Y(210) + 5, 'boiling point', { size: 15, anchor: 'end' });
  b += t(X(30) + 12, Y(12), 'solid', { size: 15, weight: 700 }) + t(X(120), Y(70) + 26, 'melting', { size: 16, weight: 700, anchor: 'middle' }) + t(X(120), Y(70) + 46, 'solid + liquid', { size: 15, anchor: 'middle', fill: C.muted });
  b += t(X(220) + 14, Y(140), 'liquid', { size: 15, weight: 700 }) + t(X(560), Y(210) + 26, 'boiling: liquid + gas', { size: 16, weight: 700, anchor: 'middle' });
  b += `<line x1="${X(60)}" y1="${Y(70) - 22}" x2="${X(180)}" y2="${Y(70) - 22}" stroke="${C.ink}" stroke-width="2" marker-start="url(#ah)" marker-end="url(#ah)"/>` + t(X(120), Y(70) - 32, '120 s', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += `<line x1="${X(260)}" y1="${Y(210) - 22}" x2="${X(860)}" y2="${Y(210) - 22}" stroke="${C.ink}" stroke-width="2" marker-start="url(#ah)" marker-end="url(#ah)"/>` + t(X(560), Y(210) - 32, '600 s', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(X(600), Y(80), 'sloping: particles gain kinetic energy', { size: 15, anchor: 'middle', fill: C.muted }) + t(X(600), Y(80) + 20, 'flat: energy overcomes forces', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 600, 840, 130, C.cream, C.olive) + t(60, 638, 'With a 100 W heater (energy = power × time):', { size: 18, weight: 700 });
  b += t(60, 672, 'melting: 100 × 120 = 12 000 J', { size: 17 }) + t(400, 672, 'boiling: 100 × 600 = 60 000 J', { size: 17 }) + t(60, 708, 'Boiling needs 5 times as much: it separates the particles completely.', { size: 17, weight: 700, fill: C.olive });
  add('04-heating-curve',
    svg(900, 750, 'Reading a heating curve', b, 'Plateau lengths to scale; temperatures not given'),
    'A heating curve: temperature rises while the solid warms, stays flat for 120 s while it melts, rises while the liquid warms, then stays flat for 600 s while it boils. With a 100 W heater, melting takes 12 000 J and boiling 60 000 J, five times as much, because boiling separates the particles completely.',
    'Flat sections are changes of state; the longer boiling plateau shows boiling needs more energy.',
    '## Heating and cooling curves');
}

// 05 Density: block and displacement
{
  let b = panel(30, 110, 410, 470) + panel(460, 110, 410, 470);
  b += t(235, 148, 'Regular block', { size: 21, weight: 700, anchor: 'middle' }) + t(665, 148, 'Irregular object', { size: 21, weight: 700, anchor: 'middle' });
  // block 6x3x2 drawn 30 px/cm
  const bx = 90, by = 300, u = 32;
  b += `<path d="M${bx},${by} L${bx + 6 * u},${by} L${bx + 6 * u},${by - 2 * u} L${bx},${by - 2 * u} Z" fill="#c7cdd6" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<path d="M${bx},${by - 2 * u} L${bx + 1.5 * u},${by - 2 * u - 1.2 * u} L${bx + 7.5 * u},${by - 2 * u - 1.2 * u} L${bx + 6 * u},${by - 2 * u} Z" fill="#dde1e7" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<path d="M${bx + 6 * u},${by} L${bx + 7.5 * u},${by - 1.2 * u} L${bx + 7.5 * u},${by - 3.2 * u} L${bx + 6 * u},${by - 2 * u} Z" fill="#b3bac6" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(bx + 3 * u, by + 26, '6.0 cm', { size: 15, anchor: 'middle', weight: 600 }) + t(bx - 8, by - u, '2.0 cm', { size: 15, anchor: 'end', weight: 600 }) + t(bx + 7.2 * u + 10, by - 2.4 * u, '3.0 cm', { size: 15, weight: 600 });
  b += tl(60, 370, ['V = 6.0 × 3.0 × 2.0 = 36 cm³', 'ρ = 97.2 ÷ 36 = 2.7 g/cm³', '= 2700 kg/m³'], { size: 17, weight: 600 }, 28);
  b += t(60, 470, 'Sinks in water: 2.7 > 1.00 g/cm³', { size: 16, weight: 700, fill: C.rust });
  b += t(60, 500, 'mass 97.2 g', { size: 15, fill: C.muted });
  // measuring cylinders
  const cyl = (x, level, obj, lbl) => {
    let o = `<rect x="${x}" y="190" width="70" height="230" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`;
    const y = 410 - (level - 40) * 6.5;
    o += `<rect x="${x + 2}" y="${y}" width="66" height="${418 - y}" fill="${C.tealLight}"/>` + path(`M${x + 2},${y} Q${x + 35},${y + 8} ${x + 68},${y}`, { stroke: C.tealDark, w: 2.5 });
    for (let v = 45; v <= 70; v += 5) { const yy = 410 - (v - 40) * 6.5; o += `<line x1="${x}" y1="${yy}" x2="${x + 14}" y2="${yy}" stroke="${C.ink}" stroke-width="1.8"/>`; }
    if (obj) o += `<line x1="${x + 35}" y1="180" x2="${x + 35}" y2="388" stroke="${C.ink}" stroke-width="1.5"/><path d="M${x + 22},388 L${x + 48},384 L${x + 52},408 L${x + 20},412 Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
    return o + t(x + 35, 446, lbl, { size: 16, weight: 700, anchor: 'middle' });
  };
  b += cyl(520, 50, false, '50.0 cm³') + cyl(690, 62.5, true, '62.5 cm³') + arrow(600, 300, 680, 300, { w: 3 });
  b += t(665, 482, 'V = 62.5 − 50.0 = 12.5 cm³', { size: 17, weight: 600, anchor: 'middle' }) + t(665, 512, 'ρ = 112.5 ÷ 12.5 = 9.0 g/cm³', { size: 17, weight: 600, anchor: 'middle' });
  b += t(665, 548, 'read the bottom of the meniscus', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 600, 840, 90, C.cream, C.olive) + t(450, 638, 'ρ = m ÷ V', { size: 22, weight: 700, anchor: 'middle' }) + t(450, 668, 'Floats if less dense than the liquid; ice (0.92 g/cm³) floats on water (1.00 g/cm³).', { size: 16, anchor: 'middle' });
  add('05-density-measurement',
    svg(900, 710, 'Measuring density', b),
    'Left: a 6.0 × 3.0 × 2.0 cm block of mass 97.2 g has volume 36 cm³ and density 2.7 g/cm³ (2700 kg/m³), so it sinks in water. Right: an ornament of mass 112.5 g raises the water in a measuring cylinder from 50.0 to 62.5 cm³, a volume of 12.5 cm³ and a density of 9.0 g/cm³.',
    'Measure or displace to find the volume, then divide mass by volume.',
    '## Density');
}

// 06 Gas behaviour
{
  const cases = [
    ['Heat it, volume fixed', 'sealed can', 'faster particles, more frequent and harder collisions', 'pressure rises', 'heat'],
    ['Squash it, temperature fixed', 'syringe', 'same speed, less space: more collisions per second', 'pressure rises', 'squash'],
    ['Heat it, pressure the same', 'balloon', 'faster particles push the walls out', 'volume increases', 'grow'],
    ['Cool it', 'balloon in a freezer', 'slower particles, fewer and softer collisions', 'balloon shrinks', 'shrink'],
  ];
  let b = '';
  cases.forEach(([h, eg, why, res, kind], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 300;
    b += panel(x, y, 410, 284) + t(x + 22, y + 36, h, { size: 19, weight: 700 }) + t(x + 22, y + 58, eg, { size: 15, fill: C.muted, italic: true });
    const cx = x + 100, cy = y + 150;
    const parts = (n, sp, w, hgt, ln) => { let o = ''; const pos = [[-0.6, -0.5, 30], [0.3, -0.6, 160], [0.6, 0.2, 230], [-0.2, 0.5, 300], [-0.7, 0.3, 100], [0.1, 0, 60], [0.5, -0.1, 260]]; pos.slice(0, n).forEach(([a, c, ang]) => { const px = cx + a * w * 0.62, py = cy + c * hgt * 0.62, r = (ang * Math.PI) / 180; const ex = px + (9 + ln) * Math.cos(r), ey = py + (9 + ln) * Math.sin(r), hx = Math.cos(r), hy = Math.sin(r); o += P(px, py, '#f6d9c6', 7) + `<line x1="${px + 8 * hx}" y1="${py + 8 * hy}" x2="${ex - 4 * hx}" y2="${ey - 4 * hy}" stroke="${C.ink}" stroke-width="2"/><path d="M${ex + 3 * hx},${ey + 3 * hy} L${ex - 5 * hx - 4 * hy},${ey - 5 * hy + 4 * hx} L${ex - 5 * hx + 4 * hy},${ey - 5 * hy - 4 * hx} Z" fill="${C.ink}"/>`; }); return o; };
    if (kind === 'heat') b += `<rect x="${cx - 60}" y="${cy - 60}" width="120" height="120" rx="8" fill="#fff" stroke="${C.ink}" stroke-width="3"/>` + parts(6, 0, 120, 120, 14) + flame(cx - 12, cy + 105) + flame(cx + 18, cy + 105);
    if (kind === 'squash') b += `<rect x="${cx - 70}" y="${cy - 40}" width="110" height="80" fill="#fff" stroke="${C.ink}" stroke-width="3"/><rect x="${cx + 40}" y="${cy - 38}" width="10" height="76" fill="${C.ink}"/><line x1="${cx + 50}" y1="${cy}" x2="${cx + 90}" y2="${cy}" stroke="${C.ink}" stroke-width="5"/>` + arrow(cx + 120, cy - 52, cx + 70, cy - 52, { w: 3.5 }) + parts(6, 0, 110, 80, 10).replace(new RegExp(`cx="${(cx).toFixed(1)}"`, 'g'), `cx="${cx}"`);
    if (kind === 'grow') b += `<circle cx="${cx}" cy="${cy}" r="70" fill="#fff" stroke="${C.ink}" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="50" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>` + parts(5, 0, 130, 130, 16);
    if (kind === 'shrink') b += `<circle cx="${cx}" cy="${cy}" r="45" fill="#fff" stroke="${C.ink}" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="65" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>` + parts(5, 0, 80, 80, 8);
    b += tl(x + 200, y + 120, wrap(why, 22), { size: 15 }, 20);
    b += `<rect x="${x + 196}" y="${y + 214}" width="190" height="40" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + t(x + 291, y + 240, res, { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  });
  b += t(450, 720, 'Explain in steps: particle speed → collisions → pressure. Particles never get bigger.', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  add('06-gas-pressure',
    svg(900, 740, 'Explaining gas behaviour', b),
    'Four cases for a fixed amount of gas. Heating a sealed can makes particles faster, with more frequent, harder collisions, so pressure rises. Squashing a syringe gives more collisions per second, so pressure rises. Heating a balloon pushes its walls out, so volume increases. Cooling a balloon slows the particles, so it shrinks.',
    'Pressure comes from particles hitting the walls: change their speed or space and the pressure changes.',
    '## Gas behaviour (qualitative)');
}

// 07 Filtration and simple distillation
{
  let b = panel(30, 110, 300, 520) + t(180, 148, 'Filtration', { size: 21, weight: 700, anchor: 'middle' }) + t(180, 172, 'sand from water', { size: 15, anchor: 'middle', fill: C.muted });
  b += `<path d="M110,220 L250,220 L195,320 L195,370 L165,370 L165,320 Z" fill="#fff" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  b += `<path d="M122,226 L238,226 L182,312 Z" fill="${C.sand}" stroke="${C.muted}" stroke-width="1.5" stroke-dasharray="4 3"/>`;
  [[150, 236], [170, 250], [195, 240], [210, 232], [180, 270]].forEach(([x, y]) => { b += `<circle cx="${x}" cy="${y}" r="5" fill="${C.rockDark}"/>`; });
  b += `<path d="M120,430 L120,560 Q120,575 135,575 L225,575 Q240,575 240,560 L240,430" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/><rect x="122" y="510" width="116" height="63" fill="${C.tealLight}"/>`;
  [[180, 390], [180, 420], [180, 450]].forEach(([x, y]) => { b += `<circle cx="${x}" cy="${y}" r="3.5" fill="${C.blue}"/>`; });
  b += t(260, 240, 'residue', { size: 15, weight: 700 }) + t(260, 260, '(sand)', { size: 15, fill: C.muted }) + t(250, 540, 'filtrate', { size: 15, weight: 700 }).replace('x="250"', 'x="245"');
  b += tl(50, 600, ['Grains too big for the paper.'], { size: 15, fill: C.muted }, 20);
  // distillation
  b += panel(350, 110, 520, 520) + t(610, 148, 'Simple distillation', { size: 21, weight: 700, anchor: 'middle' }) + t(610, 172, 'pure water from seawater', { size: 15, anchor: 'middle', fill: C.muted });
  const fx = 450, fy = 400;
  b += `<circle cx="${fx}" cy="${fy}" r="60" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/><path d="M${fx - 58},${fy + 18} A60,60 0 0 0 ${fx + 58},${fy + 18} Z" fill="${C.tealLight}"/>`;
  b += `<rect x="${fx - 14}" y="${fy - 140}" width="28" height="86" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/><rect x="${fx - 16}" y="${fy - 150}" width="32" height="14" rx="3" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<line x1="${fx}" y1="${fy - 190}" x2="${fx}" y2="${fy - 110}" stroke="${C.ink}" stroke-width="4"/><circle cx="${fx}" cy="${fy - 108}" r="5" fill="${C.rust}"/>` + t(fx - 12, fy - 190, 'thermometer', { size: 15, weight: 600, anchor: 'end' });
  b += `<line x1="${fx + 14}" y1="${fy - 110}" x2="${fx + 260}" y2="${fy - 10}" stroke="${C.ink}" stroke-width="12"/><line x1="${fx + 14}" y1="${fy - 110}" x2="${fx + 260}" y2="${fy - 10}" stroke="#fff" stroke-width="7"/>`;
  // condenser jacket
  const cx1 = fx + 80, cy1 = fy - 82, cx2 = fx + 220, cy2 = fy - 26;
  b += `<line x1="${cx1}" y1="${cy1}" x2="${cx2}" y2="${cy2}" stroke="${C.ink}" stroke-width="34" stroke-linecap="butt"/><line x1="${cx1}" y1="${cy1}" x2="${cx2}" y2="${cy2}" stroke="${C.tealLight}" stroke-width="29" stroke-linecap="butt"/><line x1="${cx1}" y1="${cy1}" x2="${cx2}" y2="${cy2}" stroke="${C.ink}" stroke-width="12"/><line x1="${cx1}" y1="${cy1}" x2="${cx2}" y2="${cy2}" stroke="#fff" stroke-width="7"/>`;
  b += arrow(cx2 - 10, cy2 + 60, cx2 - 10, cy2 + 18, { w: 3, color: C.blue }) + t(cx2 - 18, cy2 + 70, 'cold water in', { size: 15, weight: 600, fill: C.blue, anchor: 'end' });
  b += arrow(cx1 + 10, cy1 - 18, cx1 + 10, cy1 - 60, { w: 3, color: C.blue }) + t(cx1 + 18, cy1 - 64, 'water out', { size: 15, weight: 600, fill: C.blue });
  b += t((cx1 + cx2) / 2 + 30, (cy1 + cy2) / 2 - 30, 'condenser', { size: 15, weight: 700 });
  b += `<path d="M${fx + 230},${fy + 20} L${fx + 230},${fy + 130} Q${fx + 230},${fy + 145} ${fx + 245},${fy + 145} L${fx + 315},${fy + 145} Q${fx + 330},${fy + 145} ${fx + 330},${fy + 130} L${fx + 330},${fy + 20}" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/><rect x="${fx + 232}" y="${fy + 100}" width="96" height="43" fill="#dbeaf6"/>`;
  b += t(fx + 280, fy + 172, 'pure water', { size: 15, weight: 700, anchor: 'middle' });
  b += flame(fx - 8, fy + 112) + flame(fx + 18, fy + 112) + t(fx, fy + 140, 'heat', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 });
  b += t(fx - 70, fy + 4, 'seawater', { size: 15, weight: 700, anchor: 'end' });
  b += tl(370, 600, ['Water boils, vapour condenses; salt stays in the flask.'], { size: 15, fill: C.muted }, 20);
  add('07-filtration-distillation',
    svg(900, 650, 'Two separation methods', b),
    'Left: filtration through a filter funnel, with sand left as residue on the paper and water passing through as filtrate. Right: simple distillation of seawater. The flask is heated, a thermometer sits at the side arm, vapour passes through a water-cooled condenser with cold water in at the lower end, and pure water collects in a beaker while salt stays behind.',
    'Filtration removes insoluble solids; distillation recovers the solvent from a solution.',
    '## Mixtures and separation');
}

// 08 Chromatography Rf
{
  let b = panel(30, 110, 840, 500);
  const px = 140, pw = 180, top = 140, base = 520, sc = 36; // 36 px per cm
  b += `<rect x="${px - 40}" y="${top}" width="${pw + 80}" height="${base - top + 60}" rx="6" fill="#f3f8fa" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="${px - 38}" y="${base + 20}" width="${pw + 76}" height="38" fill="${C.tealLight}"/>` + t(px + pw + 50, base + 44, 'solvent', { size: 15, weight: 600 });
  b += `<rect x="${px}" y="${top + 10}" width="${pw}" height="${base - top + 40}" fill="#fff" stroke="${C.ink}" stroke-width="2"/>`;
  const front = base - 9.0 * sc;
  b += `<rect x="${px + 1}" y="${front}" width="${pw - 2}" height="${base + 49 - front}" fill="#eef4f6"/>`;
  b += `<line x1="${px}" y1="${front}" x2="${px + pw}" y2="${front}" stroke="${C.blue}" stroke-width="2.5" stroke-dasharray="8 5"/>` + t(px + pw + 50, front + 5, 'solvent front', { size: 15, weight: 700, fill: C.blue });
  b += `<line x1="${px}" y1="${base}" x2="${px + pw}" y2="${base}" stroke="${C.muted}" stroke-width="2"/>` + t(px + pw + 50, base + 5, 'pencil baseline', { size: 15, weight: 700 });
  const sx = px + 60, sx2 = px + 130;
  b += `<circle cx="${sx}" cy="${base}" r="7" fill="${C.ink}"/>` + `<ellipse cx="${sx}" cy="${base - 3.6 * sc}" rx="11" ry="8" fill="${C.blue}"/>` + `<ellipse cx="${sx}" cy="${base - 6.3 * sc}" rx="11" ry="8" fill="${C.rust}"/>`;
  b += t(sx, base + 18, 'ink', { size: 14, anchor: 'middle' }).replace('font-size="14"', 'font-size="15"');
  b += `<circle cx="${sx2}" cy="${base}" r="7" fill="${C.ink}"/>` + `<ellipse cx="${sx2}" cy="${base - 6.3 * sc}" rx="11" ry="8" fill="${C.rust}"/>` + t(sx2, base + 18, 'ref.', { size: 15, anchor: 'middle' });
  const dim = (x, y1, y2, lbl, col) => `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${col}" stroke-width="2.5" marker-start="url(#ah)" marker-end="url(#ah)"/>` + t(x - 8, (y1 + y2) / 2 + 5, lbl, { size: 15, weight: 700, anchor: 'end', fill: col });
  b += dim(px - 14, base, front, '9.0 cm', C.blue);
  b += `<line x1="${sx - 22}" y1="${base}" x2="${sx - 22}" y2="${base - 3.6 * sc}" stroke="${C.ink}" stroke-width="2" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  b += t(sx - 28, base - 1.8 * sc + 5, '3.6', { size: 15, weight: 700, anchor: 'end' });
  b += `<line x1="${sx + 22}" y1="${base}" x2="${sx + 22}" y2="${base - 6.3 * sc}" stroke="${C.rust}" stroke-width="2" marker-start="url(#ahR)" marker-end="url(#ahR)"/>`;
  b += t(sx + 30, base - 4.6 * sc, '6.3', { size: 15, weight: 700, fill: C.rust });
  // right working
  const rx = 520;
  b += t(rx, 170, 'Rf = spot distance ÷ solvent distance', { size: 18, weight: 700 }) + t(rx, 196, 'both measured from the baseline', { size: 15, fill: C.muted });
  b += `<rect x="${rx}" y="220" width="320" height="56" rx="10" fill="${C.tealLight}"/>` + t(rx + 16, 255, 'blue: 3.6 ÷ 9.0 = 0.40', { size: 18, weight: 700 });
  b += `<rect x="${rx}" y="290" width="320" height="56" rx="10" fill="#f6d9c6"/>` + t(rx + 16, 325, 'red: 6.3 ÷ 9.0 = 0.70', { size: 18, weight: 700 });
  b += tl(rx, 390, ['Two spots: the ink is a mixture', 'of at least two dyes.', '', 'A reference with the same Rf', '(same solvent and paper) is', 'the same substance.'], { size: 16 }, 22);
  b += t(450, 595, 'Baseline in pencil and above the solvent, so spots do not wash away.', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 });
  add('08-chromatography-rf',
    svg(900, 630, 'Chromatography and Rf values', b),
    'A chromatogram with a pencil baseline above the solvent. The solvent front moved 9.0 cm; an ink separated into spots at 3.6 cm and 6.3 cm, giving Rf values of 0.40 and 0.70, so the ink contains at least two dyes. A reference spot level with the 6.3 cm spot would be the same substance.',
    'Rf = spot distance ÷ solvent distance, both from the baseline; a pure substance gives one spot.',
    '## Mixtures and separation');
}
