import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-change-of-state';
export const figures = [];

// ---- local helpers (kept in this file; shared style lives in ../style.mjs) ----
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });
const ln = (x1, y1, x2, y2, { c = C.ink, w = 3, dash = '', cap = 'round' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="${cap}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const rect = (x, y, w, h, { fill = 'none', stroke = C.ink, sw = 3, rx = 0, extra = '' } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
const circ = (cx, cy, r, { fill = C.panel, stroke = C.ink, sw = 3 } = {}) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
// word-wrap to roughly n characters per line
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { const cur = out[out.length - 1]; if (cur && (cur + ' ' + w).length > n) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w; } return out; };
// text block that wraps to a pixel width
const para = (x, y, s, width, opts = {}, lh) => { const size = opts.size || 18; const lines = Array.isArray(s) ? s : wrap(s, Math.floor(width / (size * 0.54))); return tl(x, y, lines, opts, lh || size * 1.32); };
const nLines = (s, width, size = 18) => (Array.isArray(s) ? s.length : wrap(s, Math.floor(width / (size * 0.54))).length);
// card: panel with a bold title and wrapped body
const card = (x, y, w, h, title, body, { fill = C.panel, edge = C.panelEdge, size = 17, tsize = 21, tfill = C.ink, bfill = C.muted, pad = 22 } = {}) =>
  panel(x, y, w, h, fill, edge) + (title ? t(x + pad, y + pad + tsize * 0.8, title, { size: tsize, weight: 700, fill: tfill }) : '') +
  (body ? para(x + pad, y + pad + (title ? tsize * 0.8 + size * 1.55 : size), body, w - 2 * pad, { size, fill: bfill }) : '');
// axes with arrowheads; origin at (x0, y0) bottom-left; labels with units
const axes = (x0, y0, w, h, xlab, ylab, { size = 17 } = {}) =>
  arrow(x0, y0, x0 + w, y0, { w: 3 }) + arrow(x0, y0, x0, y0 - h, { w: 3 }) +
  t(x0 + w, y0 + 34, xlab, { size, anchor: 'end', weight: 600 }) +
  `<text x="${x0 - 22}" y="${y0 - h / 2}" font-size="${size}" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x0 - 22} ${y0 - h / 2})">${ylab}</text>`;
// ---- circuit symbols (centred at x, y; horizontal unless v = true). bg masks the wire under a gap. ----
const rot = (x, y, v, s) => (v ? `<g transform="rotate(90 ${x} ${y})">${s}</g>` : s);
const sCell = (x, y, { v = false, bg = C.panel } = {}) => rot(x, y, v,
  rect(x - 8, y - 26, 16, 52, { fill: bg, stroke: 'none', sw: 0 }) + ln(x - 7, y - 24, x - 7, y + 24, { w: 3, cap: 'butt' }) + ln(x + 7, y - 12, x + 7, y + 12, { w: 7, cap: 'butt' }));
const sBattery = (x, y, { v = false, bg = C.panel } = {}) => rot(x, y, v,
  rect(x - 26, y - 26, 52, 52, { fill: bg, stroke: 'none', sw: 0 }) + ln(x - 21, y - 24, x - 21, y + 24, { w: 3, cap: 'butt' }) + ln(x - 7, y - 12, x - 7, y + 12, { w: 7, cap: 'butt' }) +
  ln(x + 7, y - 24, x + 7, y + 24, { w: 3, cap: 'butt' }) + ln(x + 21, y - 12, x + 21, y + 12, { w: 7, cap: 'butt' }));
const sRes = (x, y, { v = false, fill = C.panel } = {}) => rot(x, y, v, rect(x - 30, y - 12, 60, 24, { fill, sw: 3 }));
const sLamp = (x, y, { v = false, bg = C.panel } = {}) => rot(x, y, v, circ(x, y, 18, { fill: bg }) + ln(x - 12.7, y - 12.7, x + 12.7, y + 12.7) + ln(x - 12.7, y + 12.7, x + 12.7, y - 12.7));
const sMeter = (x, y, letter, { bg = C.panel } = {}) => circ(x, y, 19, { fill: bg }) + t(x, y + 7, letter, { size: 20, weight: 700, anchor: 'middle' });
const sSwitch = (x, y, { v = false, bg = C.panel, closed = false } = {}) => rot(x, y, v,
  rect(x - 24, y - 8, 48, 16, { fill: bg, stroke: 'none', sw: 0 }) + circ(x - 20, y, 4, { fill: C.ink, sw: 0 }) + circ(x + 20, y, 4, { fill: C.ink, sw: 0 }) +
  (closed ? ln(x - 20, y, x + 20, y) : ln(x - 20, y, x + 18, y - 20)));
const wire = (pts, { c = C.ink, w = 3 } = {}) => `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linejoin="round"/>`;
const dot = (x, y, r = 5, fill = C.ink) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
// worked-example box: lines of [text, opts]
const steps = (x, y, w, rows, { fill = C.cream, edge = C.olive, lh = 34, size = 19, pad = 24 } = {}) =>
  panel(x, y, w, rows.length * lh + pad * 1.4, fill, edge) + rows.map((r, i) => {
    const [s, o = {}] = Array.isArray(r) ? r : [r];
    return t(x + pad + (o.dx || 0), y + pad + size * 0.9 + i * lh, s, { size, ...o });
  }).join('');
// ---- end helpers ----

// particle pictures
const P = (x, y, r = 13, fill = C.teal) => circ(x, y, r, { fill, stroke: C.tealDark, sw: 2.5 });
const beaker = (x, y, w, h) => path(`M${x},${y} L${x},${y + h - 14} Q${x},${y + h} ${x + 14},${y + h} L${x + w - 14},${y + h} Q${x + w},${y + h} ${x + w},${y + h - 14} L${x + w},${y}`, { w: 3.5 });
const flat = (lab) => lab;

// 01 Where the energy goes
{
  const W = 900;
  const top = panel(200, 110, 500, 96, C.tealLight, C.tealDark) +
    t(450, 150, 'Heating transfers energy into', { size: 20, weight: 700, anchor: 'middle' }) +
    t(450, 180, 'the thermal store of the system', { size: 20, weight: 700, anchor: 'middle' });
  const solid = (cx, cy, wig) => { let s = ''; for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) { const x = cx - 45 + i * 30, y = cy - 30 + j * 30; s += P(x, y, 13); if (wig) s += path(`M${x - 19},${y - 9} q-5,9 0,18 M${x + 19},${y - 9} q5,9 0,18`, { stroke: C.rust, w: 2 }); } return s; };
  const melt = (cx, cy) => [[-48, 28], [-18, 30], [12, 26], [42, 30], [-38, 0], [-6, -2], [28, 4], [-50, -28], [-16, -30], [40, -24]].map(([a, b]) => P(cx + a, cy + b, 13)).join('');
  const L1 = 'Particles move faster (vibrate more in a solid), so their average kinetic energy increases.';
  const R1 = 'Energy overcomes the forces of attraction between particles, so they move further apart or more freely.';
  const body =
    top + arrow(380, 210, 250, 268, { w: 4 }) + arrow(520, 210, 650, 268, { w: 4 }) +
    panel(30, 275, 410, 360) + t(235, 315, '1. Raise the temperature', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    solid(235, 390, true) + t(235, 466, 'vibrate more', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 }) +
    para(55, 505, L1, 360, { size: 17, fill: C.ink }) +
    rect(55, 580, 360, 38, { fill: C.tealLight, stroke: C.tealDark, sw: 2, rx: 8 }) + t(235, 605, 'temperature rises', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    panel(460, 275, 410, 360) + t(665, 315, '2. Change the state', { size: 22, weight: 700, anchor: 'middle', fill: C.olive }) +
    solid(590, 390, false) + arrow(650, 390, 690, 390, { w: 3 }) + melt(750, 390) +
    t(590, 466, 'fixed', { size: 16, anchor: 'middle', fill: C.muted }) + t(750, 466, 'free to move', { size: 16, anchor: 'middle', fill: C.muted }) +
    para(485, 505, R1, 360, { size: 17, fill: C.ink }) +
    rect(485, 580, 360, 38, { fill: C.cream, stroke: C.olive, sw: 2, rx: 8 }) + t(665, 605, 'temperature does NOT rise', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }) +
    t(450, 678, 'Either way the energy stored in the system increases.', { size: 18, weight: 600, anchor: 'middle' }) +
    t(450, 706, 'Which one happens depends on whether it is at its melting or boiling point.', { size: 17, anchor: 'middle', fill: C.muted });
  add('01-energy-raises-temperature-or-changes-state', svg(W, 735, 'Heating: where does the energy go?', body),
    'Energy from heating goes into the thermal store. It either makes the particles move faster, raising the temperature, or overcomes the forces between particles to change the state, with no rise in temperature.',
    'Heating either raises the temperature or changes the state; both increase the stored energy.',
    '## Where the energy goes when you heat something (5.8P)');
}

// 02 Particles in three states
{
  const col = (x, title, art, facts) => panel(x, 110, 270, 450) + t(x + 135, 150, title, { size: 24, weight: 700, anchor: 'middle' }) +
    rect(x + 25, 170, 220, 190, { fill: C.tealLight, stroke: C.ink, sw: 2.5, rx: 6 }) + art +
    facts.map((f, i) => t(x + 25, 400 + i * 56, '• ' + f[0], { size: 17, weight: 600 }) + t(x + 38, 422 + i * 56, f[1], { size: 16, fill: C.muted })).join('');
  let sol = ''; for (let i = 0; i < 7; i++) for (let j = 0; j < 6; j++) sol += P(30 + 25 + 22 + i * 29, 170 + 22 + j * 29, 13.5);
  const liqPts = [[0, 0], [28, 4], [57, -2], [84, 6], [113, 0], [142, 5], [171, -1], [12, 27], [41, 30], [70, 26], [99, 31], [128, 27], [157, 30], [0, 55], [30, 57], [58, 53], [87, 58], [117, 54], [147, 58], [174, 55], [15, 83], [44, 85], [73, 81], [102, 86], [131, 82], [162, 84], [0, 110], [29, 112], [59, 108], [88, 113], [118, 109], [148, 113], [175, 110], [16, 138], [46, 140], [76, 136], [106, 141], [136, 137], [166, 140]];
  const liq = liqPts.map(([a, b]) => P(362 + a, 202 + b, 13.5)).join('');
  const gp = [[50, 50, 40, -25], [150, 40, -35, 20], [185, 105, 10, -40], [95, 115, -40, 10], [150, 160, 35, 15], [40, 160, 30, 20]];
  const gas = gp.map(([a, b, dx, dy]) => P(600 + 25 + a, 170 + b, 13.5) + arrow(600 + 25 + a + dx * 0.45, 170 + b + dy * 0.45, 600 + 25 + a + dx * 1.1, 170 + b + dy * 1.1, { color: C.olive, w: 3, marker: 'ahO' })).join('');
  const body = col(30, 'Solid', sol, [['closely packed, regular', 'strong forces between them'], ['vibrate about fixed', 'positions'], ['keeps its shape', '']]) +
    col(315, 'Liquid', liq, [['close but irregular', 'weaker forces'], ['move around and', 'slide past each other'], ['flows; takes the shape', 'of its container']]) +
    col(600, 'Gas', gas, [['far apart', 'almost no forces'], ['fast, random motion', 'in all directions'], ['fills its container;', 'easily compressed']]);
  add('02-particles-in-three-states', svg(900, 590, 'Particles in solids, liquids and gases', body),
    'Three boxes of particles. A solid has particles packed in regular rows that vibrate in place; a liquid has touching particles in an irregular arrangement; a gas has a few widely spaced particles moving fast in random directions.',
    'Same particles, different arrangement, forces and motion.',
    '## Particles in the three states (5.10P)');
}

// 03 Evaporation vs boiling
{
  const bx1 = 70, bx2 = 500, by = 190, bw = 330, bh = 230;
  const surf = by + 70;
  const fill = (x) => `<path d="M${x},${surf} L${x},${by + bh - 14} Q${x},${by + bh} ${x + 14},${by + bh} L${x + bw - 14},${by + bh} Q${x + bw},${by + bh} ${x + bw},${by + bh - 14} L${x + bw},${surf} Z" fill="${C.tealLight}"/>` + ln(x, surf, x + bw, surf, { c: C.tealDark, w: 2.5 });
  const parts = (x, holes = []) => { let s = ''; for (let j = 0; j < 5; j++) for (let i = 0; i < 9; i++) { const px = x + 26 + i * 35 + (j % 2) * 12, py = surf + 22 + j * 30; if (holes.some(([hx, hy, r]) => Math.hypot(px - hx, py - hy) < r + 13)) continue; s += P(px, py, 11); } return s; };
  const ev = fill(bx1) + parts(bx1) +
    P(bx1 + 60, surf - 40, 11, C.mustard) + arrow(bx1 + 67, surf - 53, bx1 + 85, surf - 95, { color: C.rust, w: 3.5, marker: 'ahR' }) +
    P(bx1 + 115, surf - 25, 11, C.mustard) + arrow(bx1 + 119, surf - 39, bx1 + 127, surf - 88, { color: C.rust, w: 3.5, marker: 'ahR' }) +
    beaker(bx1, by, bw, bh);
  const bub = (cx, cy, r) => circ(cx, cy, r, { fill: '#ffffff', stroke: C.tealDark, sw: 2.5 }) + arrow(cx, cy + r * 0.4, cx, cy - r * 0.55, { color: C.rust, w: 2.5, marker: 'ahR' });
  const bl = [[bx2 + 200, surf + 40, 22], [bx2 + 95, surf + 100, 24], [bx2 + 265, surf + 125, 20]];
  const bo = fill(bx2) + parts(bx2, bl) + bl.map(([a, b, r]) => bub(a, b, r)).join('') +
    beaker(bx2, by, bw, bh) +
    arrow(bx2 + 120, surf - 20, bx2 + 110, surf - 70, { color: C.rust, w: 3.5, marker: 'ahR' }) + arrow(bx2 + 210, surf - 20, bx2 + 220, surf - 70, { color: C.rust, w: 3.5, marker: 'ahR' });
  const rowY = 490, rows = [['Where', 'surface only', 'throughout the liquid (bubbles)'], ['Temperature', 'any temperature', 'only at the boiling point'], ['Effect on liquid', 'cools it', 'temperature stays constant']];
  const table = rows.map(([a, b, c], i) => {
    const y = rowY + i * 52;
    return rect(30, y, 840, 52, { fill: i % 2 ? C.panel : '#fbfcfc', stroke: C.panelEdge, sw: 2 }) + t(50, y + 33, a, { size: 18, weight: 700 }) +
      t(bx1 + bw / 2 + 60, y + 33, b, { size: 18, anchor: 'middle', fill: C.rust, weight: 600 }) + t(bx2 + bw / 2, y + 33, c, { size: 18, anchor: 'middle', fill: C.tealDark, weight: 600 });
  }).join('');
  const body = t(bx1 + bw / 2, 140, 'Evaporation', { size: 24, weight: 700, anchor: 'middle' }) + t(bx2 + bw / 2, 140, 'Boiling', { size: 24, weight: 700, anchor: 'middle' }) +
    ev + bo +
    t(bx1 + bw - 15, surf - 52, 'fastest particles', { size: 16, fill: C.rust, weight: 600, anchor: 'end' }) +
    t(bx1 + bw - 15, surf - 32, 'escape', { size: 16, fill: C.rust, weight: 600, anchor: 'end' }) +
    t(bx2 + bw / 2, by + bh + 30, 'bubbles of gas form inside the liquid', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
    t(bx1 + bw / 2, by + bh + 30, 'average KE of those left falls', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 }) +
    table +
    panel(30, rowY + 172, 840, 70, C.cream, C.olive) +
    t(50, rowY + 202, 'Evaporation is faster with:', { size: 18, weight: 700 }) +
    t(50, rowY + 228, 'a higher temperature  •  a larger surface area  •  air moving across the surface', { size: 17, fill: C.ink });
  add('03-evaporation-vs-boiling', svg(900, 780, 'Evaporation and boiling', body),
    'Two beakers. In evaporation only the fastest particles at the surface escape, so the liquid left behind has a lower average kinetic energy and cools. In boiling, bubbles of gas form throughout the liquid at the boiling point and the temperature stays constant.',
    'Evaporation: surface only, any temperature, cools the liquid. Boiling: throughout, at the boiling point.',
    '## Melting, evaporating and boiling (5.9P)');
}

// 04 Heating curve ice to steam
{
  const x0 = 130, y0 = 600, w = 720, h = 440;
  const T = (c) => y0 - 100 - c * 3.0; // 0 °C at y0-100, 100 °C at y0-400
  const pts = [[x0, T(-18)], [x0 + 70, T(0)], [x0 + 210, T(0)], [x0 + 390, T(100)], [x0 + 690, T(100)]];
  const line = `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="${C.tealDark}" stroke-width="5" stroke-linejoin="round"/>`;
  const lab = (x, y, a, b, fill = C.ink, anchor = 'middle') => t(x, y, a, { size: 17, weight: 700, anchor, fill }) + (b ? t(x, y + 21, b, { size: 16, anchor, fill: C.muted }) : '');
  const body = axes(x0, y0, w, h, 'time / s', 'temperature / °C') +
    ln(x0, T(0), x0 + w - 20, T(0), { c: C.panelEdge, w: 2, dash: '6 6' }) + ln(x0, T(100), x0 + w - 20, T(100), { c: C.panelEdge, w: 2, dash: '6 6' }) +
    t(x0 - 10, T(0) + 6, '0', { size: 17, anchor: 'end' }) + t(x0 - 10, T(100) + 6, '100', { size: 17, anchor: 'end' }) +
    line +
    badge(x0 + 30, T(0) - 45, 16, '1', C.cream) + t(x0 + 55, T(0) - 39, 'ice warms', { size: 17, weight: 700 }) +
    badge(x0 + 140, T(0) + 40, 16, '2', C.mustard) + t(x0 + 165, T(0) + 36, 'melting at 0 °C', { size: 17, weight: 700 }) + t(x0 + 165, T(0) + 57, 'ice + water', { size: 16, fill: C.muted }) +
    badge(x0 + 270, T(60), 16, '3', C.cream) + t(x0 + 245, T(60) + 6, 'water warms', { size: 17, weight: 700, anchor: 'end' }) +
    badge(x0 + 450, T(100) + 40, 16, '4', C.mustard) + t(x0 + 475, T(100) + 36, 'boiling at 100 °C', { size: 17, weight: 700 }) + t(x0 + 475, T(100) + 57, 'water + steam', { size: 16, fill: C.muted }) +
    t(x0 + 540, T(100) - 40, 'longer than melting: separating particles', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 }) +
    t(x0 + 540, T(100) - 20, 'completely needs more energy', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 }) +
    panel(x0 + 330, T(40), 380, 112, C.cream, C.olive) +
    para(x0 + 350, T(40) + 32, 'Flat sections: energy is still supplied but overcomes forces between particles, so the temperature does not rise.', 340, { size: 16, fill: C.ink });
  add('04-heating-curve-ice-to-steam', svg(900, 650, 'Heating ice to steam: temperature-time graph', body),
    'Temperature against time for ice heated at a steady rate. The line rises to 0 °C, stays flat while the ice melts, rises to 100 °C, then stays flat for longer while the water boils.',
    'Flat at 0 °C while melting and at 100 °C while boiling; the boiling section is longer.',
    '## The temperature-time graph practical (5.11P)');
}

// 05 Cooling curve
{
  const x0 = 130, y0 = 560, w = 720, h = 400;
  const mp = 300;
  const d = `M${x0 + 5},${y0 - 370} Q${x0 + 80},${mp - 10} ${x0 + 200},${mp} L${x0 + 470},${mp} Q${x0 + 560},${mp + 10} ${x0 + 700},${y0 - 110}`;
  const body = axes(x0, y0, w, h, 'time / s', 'temperature / °C') +
    ln(x0, mp, x0 + w - 20, mp, { c: C.panelEdge, w: 2, dash: '6 6' }) +
    t(x0 + w - 20, mp - 10, 'melting point', { size: 16, anchor: 'end', fill: C.muted, weight: 600 }) +
    path(d, { stroke: C.tealDark, w: 5 }) +
    t(x0 + 120, 175, 'liquid cools', { size: 18, weight: 700 }) +
    t(x0 + 335, mp - 70, 'solidifying (freezing)', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }) +
    t(x0 + 335, mp - 46, 'temperature stays constant', { size: 16, anchor: 'middle', fill: C.olive }) +
    t(x0 + 335, mp - 26, 'liquid + solid', { size: 16, anchor: 'middle', fill: C.muted }) +
    t(x0 + 600, mp + 140, 'solid cools', { size: 18, weight: 700, anchor: 'end' }) +
    panel(x0 + 30, mp + 40, 390, 132, C.cream, C.olive) +
    para(x0 + 50, mp + 72, 'While it solidifies the substance releases energy as its particles settle into fixed positions. This keeps the temperature constant.', 350, { size: 16, fill: C.ink });
  add('05-cooling-curve-melted-solid', svg(900, 610, 'Cooling a melted solid', body),
    'Temperature against time for a melted solid cooling in air. The temperature falls, stays flat at the melting point while the substance solidifies, then falls again as the solid cools.',
    'The flat section of a cooling curve is at the melting (freezing) point.',
    '## The temperature-time graph practical (5.11P)');
}

// 06 Worked example: kettle
{
  const kettle = path('M90,330 L100,215 Q160,195 220,215 L230,330 Z', { fill: C.tealLight, w: 3.5 }) + path('M228,240 Q275,245 265,300 L232,305', { w: 6 }) + path('M100,230 L62,200', { w: 7 }) +
    rect(80, 330, 160, 20, { fill: C.ink, sw: 0, rx: 4 }) + t(160, 290, '0.75 kg', { size: 17, weight: 700, anchor: 'middle' }) + t(160, 312, 'water', { size: 15, anchor: 'middle', fill: C.muted });
  const giv = [['P = 2.2 kW = 2200 W'], ['m = 0.75 kg'], ['15 °C → 100 °C'], ['c = 4200 J/kg °C']];
  const body = panel(30, 110, 300, 420) + kettle + giv.map(([s], i) => t(60, 395 + i * 32, s, { size: 18, weight: 600 })).join('') +
    steps(350, 110, 520, [
      ['Energy needed', { weight: 700, size: 20 }],
      ['ΔT = 100 − 15 = 85 °C'],
      ['ΔQ = m × c × ΔT'],
      ['= 0.75 × 4200 × 85', { dx: 48 }],
      ['= 267 750 J', { dx: 48, weight: 700, fill: C.tealDark }],
      ['Minimum time', { weight: 700, size: 20 }],
      ['time = energy ÷ power'],
      ['= 267 750 ÷ 2200', { dx: 48 }],
      ['= 122 s (3 s.f.)', { dx: 48, weight: 700, fill: C.tealDark }],
    ], { lh: 39 }) +
    panel(30, 550, 840, 70, C.tealLight, C.tealDark) +
    t(450, 580, 'The real time is longer: some energy heats the kettle itself', { size: 17, anchor: 'middle', weight: 600 }) +
    t(450, 604, 'and the surrounding air.', { size: 17, anchor: 'middle', weight: 600 });
  add('06-kettle-worked-example', svg(900, 645, 'Worked example: heating water in a kettle', body),
    'A 2.2 kW kettle holding 0.75 kg of water heated from 15 °C to 100 °C. ΔQ = 0.75 × 4200 × 85 = 267 750 J, and the minimum time is 267 750 ÷ 2200 = 122 s.',
    'Find ΔQ with m × c × ΔT, then divide by the power for the minimum time.',
    '## Specific heat capacity (5.12P, 5.13P)');
}

// 07 SHC practical apparatus
{
  // physical set-up on the left
  const bx = 105, by = 250, bw = 230, bh = 210;
  const ins = rect(bx - 30, by - 10, bw + 60, bh + 40, { fill: C.cream, stroke: C.olive, sw: 2.5, rx: 8 }) +
    Array.from({ length: 12 }, (_, i) => ln(bx - 30 + i * 24, by + bh + 30, bx - 30 + i * 24 + 22, by + bh + 8, { c: C.olive, w: 1.5 })).join('');
  const block = rect(bx, by, bw, bh, { fill: C.rock, sw: 3 }) + t(bx + bw / 2, by + bh - 24, 'aluminium block', { size: 17, anchor: 'middle', weight: 700 });
  const heater = rect(bx + 50, by - 70, 26, 200, { fill: C.rust, sw: 2.5, rx: 4 }) + path(`M${bx + 63},${by - 70} C${bx + 63},${by - 100} ${bx + 120},${by - 105} ${bx + 262},${by - 105}`, { w: 3 }) + path(`M${bx + 56},${by - 70} C${bx + 50},${by - 115} ${bx + 120},${by - 125} ${bx + 262},${by - 122}`, { w: 3 });
  const thermo = rect(bx + 155, by - 110, 18, 210, { fill: '#ffffff', sw: 2.5, rx: 9 }) + circ(bx + 164, by + 100, 13, { fill: C.rust, sw: 2.5 }) + ln(bx + 164, by + 90, bx + 164, by + 20, { c: C.rust, w: 6 }) +
    `<ellipse cx="${bx + 164}" cy="${by + 112}" rx="20" ry="7" fill="${C.mustard}" opacity="0.8"/>`;
  const callout = (x1, y1, x2, y2, s, anchor = 'start') => ln(x1, y1, x2, y2, { w: 2 }) + t(x2 + (anchor === 'start' ? 6 : -6), y2 + 6, s, { size: 16, weight: 600, anchor });
  const left = panel(30, 110, 420, 470) + ins + block + heater + thermo +
    callout(bx + 63, by - 20, bx - 10, by - 60, 'heater', 'end') +
    callout(bx + 173, by - 40, bx + 215, by - 40, 'thermometer') +
    callout(bx + 184, by + 112, bx + 235, by + 125, 'drop of oil') +
    t(bx + bw / 2, by + bh + 62, 'insulation', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 }) +
    t(bx + 262, by - 82, 'to circuit', { size: 15, fill: C.muted, anchor: 'end' });
  // circuit on the right
  const cx1 = 520, cx2 = 840, cy1 = 200, cy2 = 400;
  const right = panel(470, 110, 400, 470) + t(670, 150, 'Circuit', { size: 21, weight: 700, anchor: 'middle' }) +
    wire([[cx1, cy1], [cx2, cy1], [cx2, cy2], [cx1, cy2], [cx1, cy1]]) +
    sBattery(670, cy1) + t(670, cy1 + 48, 'power supply', { size: 16, anchor: 'middle', fill: C.muted }) +
    sMeter(cx2, 300, 'A') +
    sRes(670, cy2, { fill: C.cream }) + t(670, cy2 - 22, 'heater', { size: 16, anchor: 'middle', fill: C.muted }) +
    wire([[620, cy2], [620, cy2 + 80], [720, cy2 + 80], [720, cy2]]) + dot(620, cy2) + dot(720, cy2) + sMeter(670, cy2 + 80, 'V') +
    '';
  const body = left + right +
    panel(30, 600, 840, 92, C.tealLight, C.tealDark) +
    t(450, 636, 'energy supplied  E = I × V × t', { size: 20, weight: 700, anchor: 'middle' }) +
    t(450, 670, 'specific heat capacity  c = E ÷ (m × ΔT)', { size: 20, weight: 700, anchor: 'middle' });
  add('07-shc-practical-setup', svg(900, 715, 'Measuring specific heat capacity', body),
    'An insulated aluminium block with an electric heater and a thermometer in its holes, a drop of oil around the thermometer bulb. The heater is connected to a power supply with an ammeter in series and a voltmeter across the heater.',
    'Measure I, V and t for the energy, and m and ΔT for the block, then c = E ÷ (m × ΔT).',
    '## The specific heat capacity practical (5.14P)');
}

// 08 Worked example 2 and evaluation
{
  const gx = 520, gy = 470;
  const bar = (x, v, fill, lab) => rect(x, gy - v * 0.25, 90, v * 0.25, { fill, sw: 2.5 }) + t(x + 45, gy - v * 0.25 - 12, `${v}`, { size: 18, weight: 700, anchor: 'middle' }) + t(x + 45, gy + 28, lab, { size: 16, anchor: 'middle', weight: 600 });
  const body = steps(30, 110, 450, [
    ['Given: m = 1.00 kg, V = 12.0 V,', { size: 18 }],
    ['I = 4.0 A, t = 300 s', { size: 18 }],
    ['20.0 °C → 34.4 °C', { size: 18 }],
    ['E = I × V × t'],
    ['= 4.0 × 12.0 × 300 = 14 400 J', { dx: 22 }],
    ['ΔT = 34.4 − 20.0 = 14.4 °C'],
    ['c = E ÷ (m × ΔT)'],
    ['= 14 400 ÷ (1.00 × 14.4)', { dx: 22 }],
    ['= 1000 J/kg °C', { dx: 22, weight: 700, fill: C.tealDark }],
  ], { lh: 36 }) +
    panel(500, 110, 370, 400) + t(685, 148, 'Measured vs accepted', { size: 20, weight: 700, anchor: 'middle' }) + t(685, 172, 'c in J/kg °C', { size: 16, anchor: 'middle', fill: C.muted }) +
    ln(gx + 10, gy, gx + 340, gy, { w: 3 }) + bar(gx + 50, 1000, C.mustard, 'measured') + bar(gx + 200, 900, C.teal, 'accepted (about)') +
    panel(30, 525, 840, 150, C.cream, C.olive) +
    t(55, 560, 'Why too high?', { size: 19, weight: 700, fill: C.rust }) +
    t(220, 560, 'Some energy heated the surroundings, not the block, so ΔT was', { size: 17 }) +
    t(220, 584, 'smaller than it should have been, and c = E ÷ (m × ΔT) came out larger.', { size: 17 }) +
    t(55, 624, 'Improve:', { size: 19, weight: 700, fill: C.tealDark }) +
    t(220, 624, 'better insulation and a lid; record the highest temperature', { size: 17 }) +
    t(220, 648, 'after switching off, as energy takes time to spread through the block.', { size: 17 });
  add('08-shc-results-evaluation', svg(900, 700, 'Analysing the aluminium block results', body),
    'Worked calculation: E = 4.0 × 12.0 × 300 = 14 400 J, ΔT = 14.4 °C, so c = 1000 J/kg °C. A bar chart compares this with the accepted value of about 900 J/kg °C; the measured value is too high because energy heated the surroundings.',
    'Energy lost to the surroundings makes ΔT too small, so the measured c is too high.',
    '## The specific heat capacity practical (5.14P)');
}
