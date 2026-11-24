// Board-neutral redraws of seven thermal physics figures first drawn for Cambridge IGCSE 0625 and reused
// on AQA GCSE 8463 and OCR GCSE pages. Same apparatus, particles and numbers; the "Core" / "Extended"
// tier pills are removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'physics-thermal-physics';
const W = 900;
const NAVY = C.ink, PART = '#b5d3cf', PE = C.tealDark;
const rect = (x, y, w, h, fill, stroke = 'none', sw = 2.5, rx = 0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"${stroke !== 'none' ? ` stroke="${stroke}" stroke-width="${sw}"` : ''}/>`;
const line = (x1, y1, x2, y2, color = NAVY, w = 3) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"/>`;
const ball = (x, y, r = 19) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${PART}" stroke="${PE}" stroke-width="2.5"/>`;
const box = (x, y, w, h) => rect(x, y, w, h, '#ffffff', NAVY, 2.5, 10);
// particle with a motion arrow of length len in direction (dx, dy)
const mover = (x, y, dx, dy, len = 40, r = 15) => {
  const n = Math.hypot(dx, dy), ux = dx / n, uy = dy / n;
  return arrow(x + ux * r, y + uy * r, x + ux * (r + len), y + uy * (r + len), { color: C.olive, w: 3.5, marker: 'ahO' }) + ball(x, y, r);
};
const pin = (x, y) => line(x, y, x, y + 34, NAVY, 4) + `<circle cx="${x}" cy="${y}" r="8" fill="#c8ccd2" stroke="${NAVY}" stroke-width="2"/>`;
const pinSide = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="9" ry="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + line(x + 8, y, x + 46, y, NAVY, 4) + `<circle cx="${x + 50}" cy="${y}" r="8" fill="#c8ccd2" stroke="${NAVY}" stroke-width="2"/>`;

// ---------- 01 particle states ----------
function states() {
  const o = [];
  const rows = [['Solid', ['regular rows', 'vibrate in place'], 140], ['Liquid', ['touching, random', 'slide past'], 420], ['Gas', ['far apart, random', 'fast, free'], 700]];
  for (const [h, s, y] of rows) {
    o.push(box(330, y, 540, 250));
    o.push(t(40, y + 100, h, { size: 32, weight: 700 }), tl(40, y + 154, s, { size: 21, fill: C.muted }, 38));
  }
  for (let r = 0; r < 5; r++) for (let c = 0; c < 12; c++) o.push(ball(358 + c * 44, 177 + r * 44));
  o.push(`<line x1="332" y1="464" x2="868" y2="464" stroke="${PE}" stroke-width="2.5" stroke-dasharray="10 6"/>`, t(856, 454, 'surface', { size: 19, fill: PE, anchor: 'end' }));
  const lq = [
    [360, 508], [405, 508], [450, 509], [493, 508], [540, 508], [585, 510], [630, 509], [675, 507], [718, 508], [764, 508], [810, 507],
    [382, 551], [427, 550], [473, 550], [516, 550], [560, 548], [607, 551], [651, 549], [697, 550], [742, 550], [787, 549], [832, 551],
    [360, 591], [404, 594], [449, 592], [493, 592], [541, 591], [585, 591], [630, 594], [675, 592], [718, 592], [764, 592], [810, 594],
    [382, 635], [426, 636], [470, 634], [516, 635], [560, 635], [607, 636], [654, 635], [697, 635], [742, 635], [786, 635], [830, 636],
  ];
  for (const [x, y] of lq) o.push(ball(x, y));
  for (const [x, y, dx, dy] of [[398, 779, 1, 0.35], [565, 760, -0.3, -1], [685, 768, 0.2, -1], [795, 768, -1, 0.1], [455, 888, 1, 1], [563, 882, 1, -0.8], [680, 860, -1, 0.5], [802, 880, 0.5, -1]]) o.push(mover(x, y, dx, dy, 38, 20));
  return svg(W, 980, 'Solid, liquid, gas: the particle picture', o.join('\n'), 'Same particles, different arrangement and motion');
}

// ---------- 02 gas pressure ----------
function gasPressure() {
  const o = [];
  const parts = [[142, 200, 0, -1], [290, 190, -1, 0], [257, 247, 0, -1], [423, 212, 1, 0.5], [127, 264, 0.6, 1], [137, 318, -1, 0.3], [285, 310, -1, 0], [412, 294, 1, 0.2]];
  const panelRow = (y0, fast, label, extra, bar) => {
    o.push(rect(40, y0, 480, 230, C.tealLight, NAVY, 3));
    for (const [x, y, dx, dy] of parts) o.push(mover(x, y - 140 + y0, dx, dy, fast ? 44 : 26, 12));
    o.push(t(560, y0 + 40, label, { size: 28, weight: 700 }), t(560, y0 + 76, 'pressure', { size: 20, fill: C.muted }));
    o.push(rect(560, y0 + (bar === 2 ? 110 : 150), 70, bar === 2 ? 88 : 44, C.tealDark), line(558, y0 + 198, 700, y0 + 198, NAVY, 2.5));
    if (bar === 2) o.push(t(650, y0 + 150, 'doubled', { size: 21, weight: 700, fill: C.tealDark }));
    if (extra) o.push(t(560, y0 + 230, extra, { size: 20, fill: C.muted }));
  };
  panelRow(140, false, 'Start', '', 1);
  panelRow(420, true, 'Hotter', 'faster particles', 2);
  // squeezed: same eight particles in half the box
  const y0 = 700;
  o.push(rect(40, y0, 480, 230, '#ffffff', '#c9d6d4', 2.5, 12), rect(40, y0, 240, 230, C.tealLight, NAVY, 3), rect(280, y0 - 8, 22, 246, '#3b4558'));
  o.push(arrow(410, y0 + 115, 312, y0 + 115, { w: 4.5 }));
  for (const [x, y, dx, dy] of [[103, 760, 0, -1], [165, 750, -1, 0], [150, 808, -0.3, -1], [220, 772, 1, 0.5], [95, 824, 0.6, 1], [100, 878, -1, 0.3], [162, 870, -1, 0], [216, 854, 1, 0.2]]) o.push(mover(x, y, dx, dy, 26, 12));
  o.push(t(560, y0 + 40, 'Squeezed', { size: 28, weight: 700 }), t(560, y0 + 76, 'pressure', { size: 20, fill: C.muted }));
  o.push(rect(560, y0 + 110, 70, 88, C.tealDark), line(558, y0 + 198, 700, y0 + 198, NAVY, 2.5), t(650, y0 + 150, 'doubled', { size: 21, weight: 700, fill: C.tealDark }), t(560, y0 + 230, 'smaller volume', { size: 20, fill: C.muted }));
  return svg(W, 960, 'Why a gas pushes on its container', o.join('\n'), 'Pressure comes from particles hitting the walls');
}

// ---------- 03 heating curve ----------
function heatingCurve() {
  const o = [];
  const dy = -30;
  o.push(`<line x1="150" y1="${503 + dy}" x2="848" y2="${503 + dy}" stroke="#c9d6d4" stroke-width="2" stroke-dasharray="9 7"/><line x1="150" y1="${225 + dy}" x2="848" y2="${225 + dy}" stroke="#c9d6d4" stroke-width="2" stroke-dasharray="9 7"/>`);
  o.push(line(150, 148 + dy, 150, 560 + dy, NAVY, 3), line(150, 560 + dy, 852, 560 + dy, NAVY, 3));
  o.push(t(136, 233 + dy, '100', { size: 19, anchor: 'end' }), t(136, 511 + dy, '0', { size: 19, anchor: 'end' }));
  o.push(t(70, 355 + dy, 'Temperature (°C)', { size: 20, anchor: 'middle' }).replace('<text', `<text transform="rotate(-90 70 ${355 + dy})"`));
  o.push(t(500, 604 + dy, 'Energy supplied (not to scale)', { size: 20, anchor: 'middle' }));
  o.push(path(`M158 ${560 + dy} L284 ${503 + dy} H394 L587 ${225 + dy} H738 L830 ${170 + dy}`, { stroke: C.tealDark, w: 5 }));
  o.push(`<line x1="338" y1="${513 + dy}" x2="338" y2="${556 + dy}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="4 4"/><line x1="662" y1="${235 + dy}" x2="662" y2="${556 + dy}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="4 4"/>`);
  const by = 640 + dy;
  const cells = [[160, 120, 'Ice', NAVY], [282, 110, 'Melting', C.olive], [394, 192, 'Water', NAVY], [588, 142, 'Boiling', C.olive], [730, 108, 'Steam', NAVY]];
  for (const [x, w, l, c] of cells) o.push(box(x, by, w, 120), t(x + w / 2, by + 156, l, { size: 21, weight: 700, fill: c, anchor: 'middle' }));
  const b = (x, y) => ball(x, by + y, 11);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) o.push(b(183 + c * 25, 22 + r * 25));
  for (const [x, y] of [[304, 23], [338, 36], [371, 22], [313, 76], [338, 76], [363, 76], [313, 101], [338, 101], [363, 101]]) o.push(b(x, y));
  for (const [x, y] of [[415, 26], [440, 26], [465, 26], [489, 28], [516, 26], [541, 26], [565, 26], [427, 59], [452, 58], [477, 58], [503, 58], [528, 58], [554, 59], [415, 92], [440, 92], [464, 91], [489, 91], [515, 92], [540, 92], [565, 92]]) o.push(b(x, y));
  for (const [x, y] of [[617, 17], [670, 24], [716, 14], [626, 61], [650, 61], [675, 59], [700, 61], [612, 94], [637, 89], [662, 92], [687, 89], [712, 95]]) o.push(b(x, y));
  for (const [x, y] of [[757, 34], [808, 25], [772, 87], [818, 90]]) o.push(b(x, y));
  o.push(t(W / 2, 880 + dy, 'Flat parts: energy changes the arrangement, not the temperature', { size: 20, fill: C.muted, anchor: 'middle' }));
  return svg(W, 890, 'Heating water: where does the energy go?', o.join('\n'), 'On the flat parts the temperature does not rise');
}

// ---------- 04 specific heat capacity ----------
function shc() {
  const o = [];
  const dy = 0;
  o.push(rect(160, 190, 360, 260, '#f1e5c4', C.olive, 2.5, 14), rect(200, 230, 280, 190, '#c7ccd8', NAVY, 2.5, 8));
  o.push(rect(260, 150, 34, 178, C.rust, NAVY, 2.5, 5), t(277, 134, 'heater', { size: 20, anchor: 'middle' }));
  o.push(rect(388, 150, 20, 190, '#ffffff', NAVY, 2, 10), rect(394, 220, 8, 120, '#d63a3a'), `<circle cx="398" cy="340" r="13" fill="#d63a3a" stroke="${NAVY}" stroke-width="2"/>`, t(498, 134, 'thermometer', { size: 20, anchor: 'middle' }));
  o.push(t(340, 405, '1.0 kg metal block', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(535, 236, 'insulation', { size: 20, fill: C.olive }), t(540, 298, '+16 °C', { size: 31, weight: 700, fill: C.rust }), t(540, 335, 'rise in 5 min', { size: 20, fill: C.muted }));
  // circuit
  o.push(path('M130 580 V520 H272 M348 520 H560 V560 M560 660 V700 H130 V636', { stroke: NAVY, w: 2.5 }));
  o.push(line(92, 587, 168, 587, NAVY, 3), rect(106, 598, 48, 8, NAVY, 'none', 0, 3), line(92, 621, 168, 621, NAVY, 3), rect(106, 632, 48, 8, NAVY, 'none', 0, 3));
  o.push(t(176, 578, '+', { size: 22, weight: 700 }), t(182, 616, '12 V', { size: 20 }));
  o.push(`<circle cx="310" cy="520" r="38" fill="#ffffff" stroke="${NAVY}" stroke-width="3"/>`, t(310, 529, 'A', { size: 26, weight: 700, anchor: 'middle' }), t(310, 594, '4.0 A', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(arrow(158, 502, 240, 502, { color: C.tealDark, w: 3.5, marker: 'ahT' }), t(162, 490, 'current', { size: 19, fill: C.tealDark }));
  o.push(rect(538, 570, 44, 80, '#ffffff', NAVY, 3), t(594, 617, 'heater', { size: 20 }));
  o.push(path('M560 560 H760 V578 M760 642 V660 H560', { stroke: NAVY, w: 2.5 }), `<circle cx="760" cy="610" r="32" fill="#ffffff" stroke="${NAVY}" stroke-width="3"/>`, t(760, 619, 'V', { size: 25, weight: 700, anchor: 'middle' }));
  o.push(`<circle cx="560" cy="560" r="6" fill="${NAVY}"/><circle cx="560" cy="660" r="6" fill="${NAVY}"/>`);
  o.push(t(W / 2, 744, 'A in series, V across the heater', { size: 20, fill: C.muted, anchor: 'middle' }));
  o.push(box(30, 770, 840, 250));
  o.push(t(60, 820, 'E = I × V × t = 4.0 × 12 × 300 = 14 400 J', { size: 22, weight: 700 }));
  o.push(t(60, 877, 'c = E ÷ (m × Δθ)', { size: 22, weight: 700, fill: C.tealDark }), t(60, 925, '= 14 400 ÷ (1.0 × 16)', { size: 22, weight: 700, fill: C.tealDark }));
  o.push(t(60, 982, '= 900 J/(kg °C)', { size: 31, weight: 700, fill: C.tealDark }), t(840, 982, 'too high if energy is lost', { size: 20, fill: C.muted, anchor: 'end' }));
  return svg(W, 1050, 'Measuring specific heat capacity', o.join('\n'), 'Heat a metal block, record the energy and temperature rise');
}

// ---------- 05 convection ----------
function convection() {
  const o = [];
  const dy = -30;
  const Y = (v) => v + dy;
  o.push(rect(152, Y(230), 596, 418, '#d3e5ec'));
  o.push(path(`M150 ${Y(190)} V${Y(650)} H750 V${Y(190)}`, { stroke: NAVY, w: 5 }));
  o.push(t(450, Y(270), 'purple dye shows the flow', { size: 20, fill: C.muted, anchor: 'middle' }));
  o.push(path(`M240 ${Y(540)} V${Y(300)} H660 V${Y(560)} H280`, { stroke: '#b3afd3', w: 13 }));
  o.push(line(240, Y(500), 240, Y(370), '#7b3fa0', 3.5), line(358, Y(300), 520, Y(300), '#7b3fa0', 3.5), line(660, Y(350), 660, Y(470), '#7b3fa0', 3.5), line(600, Y(560), 380, Y(560), '#7b3fa0', 3.5));
  const head = (x, y, dir) => { const s = 14, L = 26; const pts = { up: `${x - s},${y + L / 2} ${x + s},${y + L / 2} ${x},${y - L / 2}`, down: `${x - s},${y - L / 2} ${x + s},${y - L / 2} ${x},${y + L / 2}`, right: `${x - L / 2},${y - s} ${x - L / 2},${y + s} ${x + L / 2},${y}`, left: `${x + L / 2},${y - s} ${x + L / 2},${y + s} ${x - L / 2},${y}` }[dir]; return `<polygon points="${pts}" fill="${NAVY}"/>`; };
  o.push(head(240, Y(378), 'up'), head(530, Y(300), 'right'), head(660, Y(480), 'down'), head(370, Y(560), 'left'));
  o.push(t(276, Y(449), 'hot: rises', { size: 21, weight: 700, fill: C.rust }), t(624, Y(449), 'cool: sinks', { size: 21, weight: 700, fill: '#2b6a9a', anchor: 'end' }));
  o.push(`<circle cx="240" cy="${Y(578)}" r="14" fill="#7b3fa0" stroke="${NAVY}" stroke-width="2.5"/>`, t(266, Y(617), 'crystal', { size: 20 }));
  o.push(`<path d="M240 ${Y(664)} C222 ${Y(690)} 214 ${Y(708)} 216 ${Y(722)} C218 ${Y(742)} 230 ${Y(752)} 240 ${Y(754)} C250 ${Y(752)} 262 ${Y(742)} 264 ${Y(722)} C266 ${Y(708)} 258 ${Y(690)} 240 ${Y(664)} Z" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(t(296, Y(729), 'heat here', { size: 21, weight: 700, fill: C.olive }));
  return svg(W, 780, 'Convection current in water', o.join('\n'), 'Heated water expands, becomes less dense and rises');
}

// ---------- 06 conduction rods ----------
function conduction() {
  const o = [];
  const dy = -30;
  const Y = (v) => v + dy;
  o.push(rect(150, Y(160), 60, 570, '#efb26b', C.rust, 3, 8), t(180, Y(760), 'heat', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(740, Y(170), 'pin falls', { size: 20, fill: C.muted }));
  const rods = [['Copper', C.rust, '#ffffff', 200, '1st', true], ['Iron', '#8e99a6', NAVY, 350, '2nd', true], ['Glass', '#c2e1e6', NAVY, 500, 'stays', false], ['Wood', '#b98b5a', '#ffffff', 650, 'stays', false]];
  for (const [name, fill, col, y, res, falls] of rods) {
    o.push(rect(210, Y(y), 410, 40, fill, NAVY, 3), t(415, Y(y) + 28, name, { size: 21, weight: 700, fill: col, anchor: 'middle' }));
    o.push(t(740, Y(y) + 30, res, { size: 25, weight: 700, fill: falls ? C.tealDark : C.muted }));
    if (falls) o.push(arrow(628, Y(y) + 46, 628, Y(y) + 84, { color: C.tealDark, w: 3, marker: 'ahT' }), pin(628, Y(y) + 94));
    else o.push(pinSide(628, Y(y) + 20));
  }
  o.push(t(W / 2, Y(880), 'Pin falls first on the best conductor', { size: 25, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svg(W, 880, 'Which rod conducts best?', o.join('\n'), 'Wax holds a pin on the far end of each rod');
}

// ---------- 07 radiation plates ----------
function radiation() {
  const o = [];
  const dy = -30;
  const Y = (v) => v + dy;
  o.push(rect(70, Y(190), 90, 620, '#efb26b', C.rust, 3, 10), t(115, Y(480), 'radiant', { size: 21, weight: 700, anchor: 'middle' }), t(115, Y(508), 'heater', { size: 21, weight: 700, anchor: 'middle' }));
  const wave = (y, x2) => { let d = `M170 ${y}`; for (let x = 170; x < x2 - 12; x += 30) d += ` q7.5 -9 15 0 q7.5 9 15 0`; return `<path d="${d}" fill="none" stroke="${C.olive}" stroke-width="3"/>` + `<polygon points="${x2 - 16},${y - 9} ${x2},${y} ${x2 - 16},${y + 9}" fill="${C.olive}"/>`; };
  for (const y of [233, 273, 320]) o.push(wave(Y(y), 555));
  for (const y of [573, 613, 660]) o.push(wave(Y(y), 555));
  o.push(t(572, Y(180), 'Dull black plate', { size: 22, weight: 700, anchor: 'middle' }), rect(559, Y(200), 28, 160, '#222222', NAVY, 3));
  o.push(`<ellipse cx="596" cy="${Y(340)}" rx="9" ry="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2" stroke-dasharray="3 2"/>`, arrow(596, Y(358), 596, Y(390), { color: C.tealDark, w: 3, marker: 'ahT' }), pin(596, Y(406)));
  o.push(t(700, Y(258), 'wax melts,', { size: 21, weight: 700, fill: C.tealDark }), t(700, Y(293), 'pin falls first', { size: 21, weight: 700, fill: C.tealDark }));
  o.push(t(572, Y(520), 'Shiny metal plate', { size: 22, weight: 700, anchor: 'middle' }), rect(559, Y(540), 28, 160, '#e3e7ef', NAVY, 3));
  for (const y of [583, 623, 670]) o.push(arrow(552, Y(y), 472, Y(y - 36), { w: 3 }));
  o.push(pinSide(596, Y(620)), t(666, Y(627), 'pin stays', { size: 21, weight: 700, fill: C.muted }));
  o.push(t(50, Y(904), 'Wavy gold lines: infrared. Navy arrows: reflected.', { size: 20, fill: C.muted }));
  return svg(W, 910, 'Radiation: black absorbs, shiny reflects', o.join('\n'), 'Infrared crosses the gap with no medium');
}

export const figures = [
  { name: '01-particle-states', after: '### The three states', svg: states(),
    alt: 'Three boxes of particles: a solid with particles touching in regular rows, vibrating; a liquid with touching random particles and a surface; a gas with few, widely spaced fast particles.',
    caption: 'Particles are arranged and move differently in solids, liquids and gases.' },
  { name: '03-heating-curve', after: '### Heating and cooling graphs', svg: heatingCurve(),
    alt: 'A schematic temperature-energy graph from ice to steam with flat parts at 0 and 100 degrees Celsius while melting and boiling. Particle pictures under each part show the arrangement in that state.',
    caption: 'During melting and boiling energy is supplied but the temperature stays constant.' },
  { name: '04-specific-heat-capacity', after: '### Specific heat capacity', svg: shc(),
    alt: 'An insulated metal block with a heater and thermometer, and a circuit with an ammeter in series and a voltmeter across the heater. E = 4.0 x 12 x 300 = 14 400 J and c = 14 400 / (1.0 x 16) = 900 J/(kg C).',
    caption: 'Energy supplied divided by mass and temperature rise gives c.' },
  { name: '02-gas-pressure', after: '### Particle motion in gases', svg: gasPressure(),
    alt: 'Three boxes with the same eight particles. Hotter particles move faster and the pressure bar doubles. Squeezing to half the volume also doubles the bar because the walls are hit more often.',
    caption: 'Faster particles or a smaller volume mean more forceful or more frequent wall collisions, so higher pressure.' },
  { name: '07-radiation-plates', after: '## P8.3h: radiation balance (Higher Tier only)', svg: radiation(),
    alt: 'A radiant heater faces a dull black and a shiny plate at equal distance. The black plate absorbs the infrared, its wax melts and its pin falls first; the shiny plate reflects most of it and its pin stays.',
    caption: 'Dull black surfaces absorb infrared best; shiny ones reflect it.' },
  { name: '06-conduction-rods', after: '## Reducing unwanted energy transfer', svg: conduction(),
    alt: 'Four equal rods of copper, iron, glass and wood are heated at one end with a pin stuck on the far end by wax. The pins on copper and iron have fallen, copper first; the pins on glass and wood remain.',
    caption: 'The pin on the best conductor falls first.' },
  { name: '05-convection-current', after: '## Reducing unwanted energy transfer', svg: convection(),
    alt: 'A beaker with a purple crystal at one bottom corner heated from below. The purple dye rises over the heated spot, crosses the top, sinks on the far side and returns along the bottom.',
    caption: 'Heated water becomes less dense and rises; cooler, denser water sinks to replace it.' },
];
