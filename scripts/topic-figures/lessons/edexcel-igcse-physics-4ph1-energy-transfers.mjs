import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-energy-transfers';
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

const chip = (x, y, w, a, b, fill, edge) => rect(x, y, w, 48, { fill, stroke: edge, sw: 1.8, rx: 8 }) + t(x + w / 2, y + (b ? 21 : 30), a, { size: 15, weight: 700, anchor: 'middle' }) + (b ? t(x + w / 2, y + 39, b, { size: 13.5, anchor: 'middle', fill: C.muted }) : '');
const way = (x, y, s) => arrow(x, y + 24, x + 70, y + 24, { w: 2.5, color: C.olive, marker: 'ahO' }) + t(x + 35, y + 14, s, { size: 13.5, anchor: 'middle', fill: C.olive, weight: 700 });
const P = (x, y, r = 9, fill = C.teal) => circ(x, y, r, { fill, stroke: C.tealDark, sw: 2 });
const flame = (cx, cy, s = 1) => `<path d="M${cx},${cy - 30 * s} C${cx + 18 * s},${cy - 8 * s} ${cx + 14 * s},${cy + 10 * s} ${cx},${cy + 12 * s} C${cx - 14 * s},${cy + 10 * s} ${cx - 18 * s},${cy - 8 * s} ${cx},${cy - 30 * s} Z" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2"/>`;

// 01 Describing transfers
{
  const rows = [
    ['Torch on', ['chemical store', 'battery'], 'electrically', ['lamp', ''], 'radiation + heating', ['surroundings', 'light; thermal store']],
    ['Ball rising', ['kinetic store', 'ball'], 'mechanically', ['gravitational store', 'ball'], null, null],
    ['Electric kettle', ['heating element', 'electrically'], 'by heating', ['thermal store', 'water (some: kettle, air)'], null, null],
    ['Bow and arrow', ['elastic store', 'bow'], 'mechanically', ['kinetic store', 'arrow'], null, null],
    ['Car braking', ['kinetic store', 'car'], 'mechanically', ['thermal store', 'brakes, surroundings'], 'friction', null],
    ['Magnets snap', ['magnetic store', ''], 'mechanically', ['kinetic store', 'magnets'], 'heating, sound', ['surroundings', 'when they hit']],
  ];
  let body = '';
  rows.forEach(([name, a, w1, b, w2, c], i) => {
    const y = 110 + i * 78;
    body += panel(30, y, 840, 68) + t(48, y + 40, name, { size: 16, weight: 700 }) +
      chip(185, y + 10, 165, a[0], a[1], C.cream, C.olive) + way(355, y + 10, w1) + chip(430, y + 10, 175, b[0], b[1], C.tealLight, C.tealDark);
    if (w2 && c) body += way(610, y + 10, w2.split(' + ')[0] === 'radiation' ? 'radiation, heating' : w2) + chip(685, y + 10, 170, c[0], c[1], '#f6e3d6', C.rust);
    else if (w2) body += t(620, y + 40, '(' + w2 + ' in the brakes)', { size: 15, fill: C.muted });
  });
  body += panel(30, 585, 840, 60, C.cream, C.olive) + t(450, 622, '"Heat", "light" and "sound" are never stores: they are the ways energy moves.', { size: 17, weight: 600, anchor: 'middle' });
  add('01-store-pathway-store-examples', svg(900, 665, 'Store → pathway → store', body),
    'Six energy transfers written as chains. A torch: chemical store of the battery, electrically to the lamp, then by radiation and heating to the surroundings. A rising ball: kinetic to gravitational store. A kettle, a bow, braking and snapping magnets follow the same pattern.',
    'Name the store energy leaves, the pathway, and the store it ends up in.',
    '## Describing a transfer: store, pathway, store');
}

// 02 Efficiency examples
{
  const bar = (x, y, w, parts) => { let cx = x; return parts.map(([v, tot, fill, lab]) => { const pw = (w * v) / tot; const s = rect(cx, y, pw, 46, { fill, sw: 2 }) + t(cx + pw / 2, y + 29, lab, { size: 16, weight: 700, anchor: 'middle', fill: fill === C.mustard ? C.ink : C.ink }); cx += pw; return s; }).join(''); };
  const body = panel(30, 110, 840, 230) + t(55, 146, 'Example 1: a lamp, 200 J in total', { size: 19, weight: 700 }) +
    bar(55, 165, 790, [[80, 200, C.mustard, 'useful light 80 J'], [120, 200, '#f6e3d6', 'wasted heating surroundings 120 J']]) +
    t(55, 250, 'efficiency = 80 / 200 × 100% = 40%', { size: 18, weight: 700, fill: C.tealDark }) + t(55, 282, 'wasted = 200 − 80 = 120 J', { size: 17 }) + t(55, 312, 'Check: useful + wasted = total.', { size: 16, fill: C.muted }) +
    panel(30, 360, 840, 250) + t(55, 396, 'Example 2 (working backwards): a 35% efficient power station', { size: 19, weight: 700 }) +
    bar(55, 415, 790, [[700, 2000, C.mustard, '700 MJ electrical (35%)'], [1300, 2000, '#f6e3d6', 'wasted 1300 MJ']]) +
    t(55, 500, '0.35 = 700 / total', { size: 18 }) + t(55, 532, 'total = 700 / 0.35 = 2000 MJ', { size: 18, weight: 700, fill: C.tealDark }) + t(55, 564, 'wasted = 2000 − 700 = 1300 MJ', { size: 18 }) +
    t(450, 645, 'efficiency = useful energy output ÷ total energy output × 100%', { size: 18, weight: 700, anchor: 'middle' });
  add('02-efficiency-worked-examples', svg(900, 670, 'Efficiency: forwards and backwards', body),
    'Two bars split into useful and wasted parts. A lamp: 80 J of 200 J is useful light, 40% efficient, 120 J wasted. A 35% efficient power station delivering 700 MJ has a total of 2000 MJ, so 1300 MJ is wasted.',
    'Useful and wasted parts always add up to the total.',
    '## Conservation of energy and efficiency (4.3, 4.4)');
}

// 03 Sankey diagram to scale
{
  const sq = 7, gx0 = 40, gy0 = 150, gx1 = 860, gy1 = 640;
  let grid = '';
  for (let x = gx0; x <= gx1; x += sq) grid += ln(x, gy0, x, gy1, { c: (x - gx0) % (sq * 10) === 0 ? '#c3d3d0' : '#e3ebea', w: 1, cap: 'butt' });
  for (let y = gy0; y <= gy1; y += sq) grid += ln(gx0, y, gx1, y, { c: (y - gy0) % (sq * 10) === 0 ? '#c3d3d0' : '#e3ebea', w: 1, cap: 'butt' });
  const xa = 61 + 35 * sq, yT = 192, H = 40 * sq; // input band
  const yU = yT + 26 * sq, yH = yU + 9 * sq, yS = yH + 5 * sq;
  const bend = (x, y1, y2, ri, yE, fill, edge) => { const R = ri + (y2 - y1), W = y2 - y1; return `<path d="M${x},${y1} A${R},${R} 0 0 1 ${x + R},${y2 + ri} L${x + R},${yE} L${x + R + 12},${yE} L${x + ri + W / 2},${yE + 30} L${x + ri - 12},${yE} L${x + ri},${yE} L${x + ri},${y2 + ri} A${ri},${ri} 0 0 0 ${x},${y2} Z" fill="${fill}" stroke="${edge}" stroke-width="2"/>`; };
  const xT = xa + 70;
  const body = panel(30, 110, 840, 545) + grid +
    `<rect x="61" y="${yT}" width="${xa - 61}" height="${H}" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>` +
    `<path d="M${xa},${yT} L${xa + 380},${yT} L${xa + 380},${yT - 14} L${xa + 430},${(yT + yU) / 2} L${xa + 380},${yU + 14} L${xa + 380},${yU} L${xa},${yU} Z" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2"/>` +
    `<rect x="${xa - 1}" y="${yU}" width="${xT - xa + 1}" height="${yH - yU}" fill="#f6e3d6" stroke="none"/>` + ln(xa, yU, xT, yU, { c: C.rust, w: 2 }) +
    bend(xT, yU, yH, 18, 560, '#f6e3d6', C.rust) + bend(xa, yH, yS, 12, 560, '#efd9b0', C.olive) +
    t(75, yT + H / 2 - 8, 'input', { size: 17, weight: 700 }) + t(75, yT + H / 2 + 14, '400 J', { size: 17, weight: 700 }) + t(75, yT + H / 2 + 34, '40 squares', { size: 15, fill: C.muted }) +
    t(xa + 190, (yT + yU) / 2 - 4, 'kinetic store of load', { size: 17, weight: 700, anchor: 'middle' }) + t(xa + 190, (yT + yU) / 2 + 18, '260 J = 26 squares', { size: 16, anchor: 'middle' }) +
    t(xT + 100, 520, 'heating surroundings', { size: 16, weight: 700, fill: C.rust }) + t(xT + 100, 540, '90 J = 9 squares', { size: 15, fill: C.rust }) +
    t(xa - 10, 610, 'sound: 50 J = 5 squares', { size: 16, weight: 700, fill: C.olive, anchor: 'end' }) +
    t(450, 140, 'Scale: 1 small square = 10 J', { size: 16, weight: 600, anchor: 'middle', fill: C.muted }) +
    steps(30, 670, 840, [['Check: 26 + 9 + 5 = 40 squares.   Efficiency = 260 ÷ 400 × 100% = 65%', { weight: 700 }]], { lh: 34, size: 18 });
  add('03-motor-sankey-to-scale', svg(900, 740, 'Sankey diagram for a motor, drawn to scale', body),
    'A Sankey diagram on squared paper with 1 square = 10 J. A 400 J input arrow, 40 squares wide, splits into a useful 260 J arrow to the kinetic store of the load (26 squares) and two wasted arrows bending down: 90 J heating (9 squares) and 50 J sound (5 squares).',
    'Arrow widths are to scale and the outputs add up to the input: efficiency 65%.',
    '## Sankey diagrams (4.5)');
}

// 04 Three methods
{
  const cond = panel(30, 110, 270, 400) + t(165, 146, 'Conduction', { size: 20, weight: 700, anchor: 'middle' }) +
    flame(60, 300, 1.1) + rect(80, 255, 200, 70, { fill: C.rock, sw: 2.5 }) +
    [0, 1, 2, 3, 4, 5].map((i) => P(98 + i * 33, 273, 8) + P(98 + i * 33, 307, 8) + path(`M${98 + i * 33 - 13},${265} l-4,8 l4,8`, { stroke: C.rust, w: 1.5 })).join('') +
    arrow(110, 345, 260, 345, { w: 3, color: C.rust, marker: 'ahR' }) +
    para(50, 385, 'Faster-vibrating particles pass energy to neighbours by collisions. In metals free electrons also carry energy. Needs particles in contact.', 230, { size: 15, fill: C.ink }, 19);
  const conv = panel(315, 110, 270, 400) + t(450, 146, 'Convection', { size: 20, weight: 700, anchor: 'middle' }) +
    rect(345, 175, 210, 180, { fill: C.tealLight, stroke: C.ink, sw: 2.5 }) + flame(400, 380, 0.9) +
    path('M400,330 L400,205 L500,205 L500,330 L400,330', { stroke: C.rust, w: 3, extra: 'stroke-dasharray="1 0"' }) +
    arrow(400, 300, 400, 230, { w: 3.5, color: C.rust, marker: 'ahR' }) + arrow(430, 205, 480, 205, { w: 3.5, color: C.rust, marker: 'ahR' }) + arrow(500, 230, 500, 300, { w: 3.5, color: C.blue, marker: 'ah' }) + arrow(480, 330, 420, 330, { w: 3.5, color: C.blue, marker: 'ah' }) +
    t(410, 270, 'warm', { size: 14, fill: C.rust, weight: 700 }) + t(490, 270, 'cool', { size: 14, fill: C.blue, weight: 700, anchor: 'end' }) +
    para(335, 420, 'Warm fluid expands, becomes less dense and rises; cooler, denser fluid sinks. Not in solids.', 230, { size: 15, fill: C.ink }, 19);
  const rad = panel(600, 110, 270, 400) + t(735, 146, 'Radiation', { size: 20, weight: 700, anchor: 'middle' }) +
    circ(650, 265, 26, { fill: C.rust }) + t(650, 312, 'hot object', { size: 14, anchor: 'middle', fill: C.muted }) +
    path((() => { let d = 'M682,265'; for (let i = 1; i <= 150; i += 2) d += ` L${682 + i},${(265 - 12 * Math.sin((2 * Math.PI * i) / 30)).toFixed(1)}`; return d; })(), { stroke: C.rust, w: 3 }) + arrow(830, 265, 850, 265, { w: 3, color: C.rust, marker: 'ahR' }) +
    t(760, 230, 'infrared waves', { size: 14, anchor: 'middle', fill: C.rust, weight: 600 }) +
    para(620, 385, 'Energy carried by infrared electromagnetic waves. Needs no particles: it can cross a vacuum.', 230, { size: 15, fill: C.ink }, 19);
  add('04-conduction-convection-radiation', svg(900, 530, 'Three ways of transferring thermal energy', cond + conv + rad),
    'Conduction: particles in a heated bar vibrate and pass energy along by collisions. Convection: warm fluid rises above a flame and cooler fluid sinks, making a loop. Radiation: a hot object sends infrared waves that can cross a vacuum.',
    'Conduction needs contact, convection needs a fluid, radiation needs neither.',
    '## Thermal energy transfer (4.6)');
}

// 05 Convection in everyday life
{
  const room = panel(30, 110, 410, 360) + t(235, 146, 'Room heater', { size: 19, weight: 700, anchor: 'middle' }) +
    rect(60, 170, 350, 230, { fill: '#ffffff', stroke: C.ink, sw: 3 }) + rect(62, 330, 30, 68, { fill: C.rust, sw: 2 }) + t(77, 420, 'heater', { size: 14, anchor: 'middle', fill: C.rust, weight: 600 }) +
    arrow(110, 340, 110, 200, { w: 4, color: C.rust, marker: 'ahR' }) + arrow(130, 190, 350, 190, { w: 4, color: C.rust, marker: 'ahR' }) +
    arrow(385, 205, 385, 370, { w: 4, color: C.blue }) + arrow(360, 385, 120, 385, { w: 4, color: C.blue }) +
    t(118, 280, 'warm air rises', { size: 14, fill: C.rust, weight: 600 }) + t(375, 300, 'cools,', { size: 14, fill: C.blue, weight: 600, anchor: 'end' }) + t(375, 318, 'sinks', { size: 14, fill: C.blue, weight: 600, anchor: 'end' }) +
    t(235, 448, 'flows back along the floor to the heater', { size: 15, anchor: 'middle', fill: C.muted });
  const sx = 460;
  const sea = panel(sx, 110, 410, 360) + t(sx + 205, 146, 'Sea breeze on a sunny day', { size: 19, weight: 700, anchor: 'middle' }) +
    rect(sx + 30, 340, 170, 60, { fill: '#d8e3c6', stroke: C.ink, sw: 2.5 }) + rect(sx + 200, 352, 180, 48, { fill: C.teal, stroke: C.ink, sw: 2.5 }) +
    t(sx + 115, 378, 'land warms faster', { size: 14, anchor: 'middle', weight: 600 }) + t(sx + 290, 382, 'sea', { size: 14, anchor: 'middle', weight: 600, fill: C.tealDark }) +
    arrow(sx + 110, 320, sx + 110, 205, { w: 4, color: C.rust, marker: 'ahR' }) + arrow(sx + 135, 195, sx + 290, 195, { w: 3, color: C.muted }) +
    arrow(sx + 310, 210, sx + 310, 320, { w: 4, color: C.blue }) + arrow(sx + 290, 332, sx + 140, 332, { w: 5, color: C.blue }) +
    t(sx + 122, 260, 'warm air rises', { size: 14, fill: C.rust, weight: 600 }) + t(sx + 300, 260, 'cool air', { size: 14, fill: C.blue, weight: 600, anchor: 'end' }) + t(sx + 300, 278, 'sinks', { size: 14, fill: C.blue, weight: 600, anchor: 'end' }) +
    circ(sx + 360, 190, 16, { fill: C.mustard, stroke: C.olive, sw: 2 }) +
    t(sx + 205, 448, 'breeze blows from sea to land', { size: 15, anchor: 'middle', fill: C.blue, weight: 600 });
  const body = room + sea + panel(30, 485, 840, 105, C.cream, C.olive) +
    t(450, 520, 'Heated → expands → less dense → rises.   Cooled → contracts → denser → sinks.', { size: 17, weight: 700, anchor: 'middle' }) +
    t(450, 552, 'Kettle element at the bottom: heated water rises, so all the water is heated.', { size: 16, anchor: 'middle' }) +
    t(450, 576, 'Freezer at the top of a fridge: cooled air sinks over the food below.', { size: 16, anchor: 'middle' });
  add('05-convection-room-and-sea-breeze', svg(900, 610, 'Convection in everyday life', body),
    'A room with a heater: warm air rises, crosses the ceiling, cools and sinks on the far side, and flows back along the floor. A sea breeze: air over the warmer land rises and cooler air from over the sea moves in, so the breeze blows from sea to land.',
    'Use the full density chain and say where the fluid rises and where it sinks.',
    '## Convection in everyday phenomena (4.7)');
}

// 06 The three practicals
{
  const rods = panel(30, 110, 270, 420) + t(165, 146, 'Conduction', { size: 19, weight: 700, anchor: 'middle' }) + t(165, 168, 'rods of different metals', { size: 14, anchor: 'middle', fill: C.muted }) +
    flame(70, 320, 1) + [0, 1, 2].map((i) => { const y = 215 + i * 55; return rect(70, y, 180, 18, { fill: [C.rust, C.rockDark, C.rock][i], sw: 2 }) + `<ellipse cx="252" cy="${y + 9}" rx="6" ry="9" fill="${C.cream}" stroke="${C.olive}" stroke-width="1.5"/>` + (i === 0 ? ln(262, y + 30, 262, y + 48, { w: 3 }) + circ(262, y + 30, 4, { fill: C.muted, sw: 1 }) : ln(258, y + 9, 276, y + 9, { w: 3 }) + circ(278, y + 9, 4, { fill: C.muted, sw: 1 })); }).join('') +
    ln(70, 205, 70, 395, { c: C.panelEdge, w: 2 }) +
    para(48, 420, 'Same length, thickness and heating. The pin falls first from the best conductor.', 230, { size: 15 }, 19);
  const bx = 315;
  const dye = panel(bx, 110, 270, 420) + t(bx + 135, 146, 'Convection', { size: 19, weight: 700, anchor: 'middle' }) + t(bx + 135, 168, 'dye crystal in water', { size: 14, anchor: 'middle', fill: C.muted }) +
    rect(bx + 35, 205, 200, 160, { fill: C.tealLight, stroke: C.ink, sw: 2.5 }) + circ(bx + 55, 352, 7, { fill: '#7b3f8c', sw: 1.5 }) + flame(bx + 60, 392, 0.8) +
    path(`M${bx + 60},340 C${bx + 55},270 ${bx + 70},225 ${bx + 130},222 C${bx + 200},220 ${bx + 215},260 ${bx + 212},340`, { stroke: '#7b3f8c', w: 4, extra: 'marker-end="url(#ah)"' }) +
    para(bx + 18, 420, 'Heat beneath the crystal: the coloured streak rises, crosses the top and sinks on the far side.', 235, { size: 15 }, 19);
  const cx = 600;
  const cube = panel(cx, 110, 270, 420) + t(cx + 135, 146, 'Radiation', { size: 19, weight: 700, anchor: 'middle' }) + t(cx + 135, 168, 'cube of hot water', { size: 14, anchor: 'middle', fill: C.muted }) +
    rect(cx + 95, 215, 80, 80, { fill: C.tealLight, sw: 2 }) + ln(cx + 95, 215, cx + 95, 295, { w: 8, cap: 'butt' }) + ln(cx + 175, 215, cx + 175, 295, { c: '#c9d0d0', w: 8, cap: 'butt' }) +
    [235, 255, 275].map((y) => arrow(cx + 90, y, cx + 40, y, { w: 3, color: C.rust, marker: 'ahR' }) + arrow(cx + 180, y, cx + 198, y, { w: 2, color: C.rust, marker: 'ahR' })).join('') +
    t(cx + 60, 320, 'matt black', { size: 14, anchor: 'middle', weight: 700 }) + t(cx + 210, 320, 'shiny silver', { size: 14, anchor: 'middle', weight: 700 }) +
    t(cx + 60, 340, 'most', { size: 14, anchor: 'middle', fill: C.rust, weight: 600 }) + t(cx + 210, 340, 'least', { size: 14, anchor: 'middle', fill: C.rust, weight: 600 }) +
    para(cx + 18, 420, 'Detector at the same distance from each face: the matt black face gives the highest reading.', 235, { size: 15 }, 19);
  const body = rods + dye + cube + panel(30, 545, 840, 70, C.cream, C.olive) +
    t(450, 576, 'Dark, matt surfaces are good emitters and absorbers;', { size: 16, weight: 600, anchor: 'middle' }) + t(450, 600, 'light, shiny surfaces are poor emitters and absorbers.', { size: 16, weight: 600, anchor: 'middle' });
  add('06-thermal-energy-practicals', svg(900, 635, 'The thermal energy practical', body),
    'Three experiments. Conduction: metal rods heated at one end with pins fixed by wax; the pin falls first from the best conductor. Convection: a dye crystal heated in water traces a loop. Radiation: a hot-water cube emits most infrared from its matt black face and least from its shiny silver face.',
    'Change one thing at a time: the material, the heating position, or the surface.',
    '## The thermal energy practical (4.9)');
}

// 07 Vacuum flask
{
  const fx = 150;
  const body = panel(30, 110, 840, 520) +
    rect(fx, 170, 200, 420, { fill: C.rock, sw: 3, rx: 16 }) + t(fx + 100, 610, '', {}) +
    rect(fx + 25, 215, 150, 345, { fill: '#ffffff', sw: 2.5, rx: 30 }) + rect(fx + 40, 230, 120, 315, { fill: C.tealLight, stroke: '#9aa5a5', sw: 5, rx: 22 }) +
    rect(fx + 27, 217, 146, 341, { fill: 'none', stroke: '#9aa5a5', sw: 4, rx: 28 }) +
    rect(fx + 55, 180, 90, 60, { fill: C.olive, sw: 2.5, rx: 8 }) +
    rect(fx + 85, 558, 30, 20, { fill: C.sand, sw: 2 }) +
    [[fx + 165, 400, 'Vacuum between the double walls', 'no particles: no conduction or convection across it'], [fx + 156, 300, 'Silvered inner surfaces', 'reflect infrared back: less radiation'], [fx + 140, 200, 'Plastic or cork stopper', 'poor conductor; stops warm air rising out'], [fx + 115, 570, 'Insulating support and outer case', 'reduce conduction to the outside']]
      .map(([x, y, a, b]) => dot(x, y, 4) + ln(x, y, 420, y, { w: 2 }) + t(430, y - 4, a, { size: 17, weight: 700 }) + t(430, y + 18, b, { size: 15, fill: C.muted })).join('') +
    t(fx + 100, 400, 'hot', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark }) + t(fx + 100, 420, 'drink', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark }) +
    panel(30, 645, 840, 60, C.cream, C.olive) + t(450, 682, 'Radiation can cross a vacuum: it is the silvering that reduces it.', { size: 17, weight: 600, anchor: 'middle' });
  add('07-vacuum-flask', svg(900, 725, 'How a vacuum flask keeps a drink hot', body),
    'Cross-section of a vacuum flask with labels: a vacuum between double walls stops conduction and convection, silvered inner surfaces reflect infrared, a plastic or cork stopper is a poor conductor and stops convection, and insulating supports reduce conduction.',
    'Each feature of a vacuum flask tackles a different method of energy transfer.',
    '## Reducing unwanted transfer (4.10)');
}
