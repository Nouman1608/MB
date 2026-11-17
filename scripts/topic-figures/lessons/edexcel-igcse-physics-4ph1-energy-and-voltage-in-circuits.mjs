import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits';
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

const lampOn = (x, y, v = false) => sLamp(x, y, { v, bg: C.mustard }) + [0, 1, 2, 3, 4, 5, 6, 7].map((i) => { const a = (i * Math.PI) / 4 + Math.PI / 8; return ln(x + 24 * Math.cos(a), y + 24 * Math.sin(a), x + 32 * Math.cos(a), y + 32 * Math.sin(a), { c: C.olive, w: 2 }); }).join('');
const lampOff = (x, y, v = false) => sLamp(x, y, { v, bg: '#e3e6e6' });
const sVarRes = (x, y) => sRes(x, y) + arrow(x - 26, y + 20, x + 28, y - 22, { w: 2.5 });
const sDiode = (x, y) => path(`M${x - 14},${y - 14} L${x - 14},${y + 14} L${x + 12},${y} Z`, { fill: C.ink, w: 2 }) + ln(x + 13, y - 15, x + 13, y + 15, { w: 3.5 });
const sLDR = (x, y) => circ(x, y, 30, { fill: C.panel, sw: 2.5 }) + sRes(x, y) + arrow(x - 40, y - 42, x - 18, y - 22, { w: 2.2 }) + arrow(x - 22, y - 48, x, y - 28, { w: 2.2 });
const sTherm = (x, y) => sRes(x, y) + path(`M${x - 30},${y + 22} L${x + 22},${y - 22} L${x + 36},${y - 22}`, { w: 2.5 });
const loop = (x1, y1, x2, y2) => wire([[x1, y1], [x2, y1], [x2, y2], [x1, y2], [x1, y1]]);
const flowArrow = (x, y, dir, col = C.rust, mk = 'ahR') => { const d = { r: [1, 0], l: [-1, 0], u: [0, -1], d: [0, 1] }[dir]; return arrow(x - d[0] * 10, y - d[1] * 10, x + d[0] * 12, y + d[1] * 12, { w: 3, color: col, marker: mk }); };

// 01 Charge, current and energy
{
  const x1 = 120, x2 = 560, y1 = 170, y2 = 420;
  const body = panel(30, 110, 600, 415) + loop(x1, y1, x2, y2) + sCell(340, y2) + lampOn(340, y1) +
    t(323, y2 - 32, '+', { size: 20, weight: 700, anchor: 'middle' }) + t(358, y2 - 32, '−', { size: 20, weight: 700, anchor: 'middle' }) + t(340, y2 + 42, '6.0 V battery', { size: 16, anchor: 'middle', weight: 600 }) +
    flowArrow(x1, 300, 'u') + flowArrow(450, y1, 'r') + flowArrow(x2, 300, 'd') + flowArrow(220, y2, 'l') +
    flowArrow(x1 + 30, 300, 'd', C.tealDark, 'ahT') + flowArrow(450, y1 + 30, 'l', C.tealDark, 'ahT') + flowArrow(x2 - 30, 300, 'u', C.tealDark, 'ahT') + flowArrow(220, y2 - 30, 'r', C.tealDark, 'ahT') +
    rect(380, 395, 92, 48, { fill: C.cream, stroke: C.olive, sw: 2, rx: 24 }) + t(426, 416, '1 C', { size: 15, weight: 700, anchor: 'middle' }) + t(426, 434, 'gains 6.0 J', { size: 13.5, anchor: 'middle' }) +
    t(340, 130 + 0, '', {}) + t(140, y1 - 30, 'each coulomb transfers', { size: 15, fill: C.olive, weight: 600 }) + t(140, y1 - 12, '6.0 J in the lamp', { size: 15, fill: C.olive, weight: 600 }) +
    arrow(55, 482, 85, 482, { w: 3, color: C.rust, marker: 'ahR' }) + t(95, 487, 'conventional current: + to −', { size: 15 }) +
    arrow(55, 505, 85, 505, { w: 3, color: C.tealDark, marker: 'ahT' }) + t(95, 510, 'electron flow: − to +', { size: 15 }) +
    card(650, 110, 220, 125, 'Current', 'rate of flow of charge: Q = I × t', { size: 16, tsize: 19, tfill: C.rust }) +
    card(650, 245, 220, 125, 'Voltage', 'energy transferred per unit charge (J/C)', { size: 16, tsize: 19, tfill: C.tealDark }) +
    card(650, 380, 220, 145, 'Energy', 'E = Q × V. Charge is not used up; energy is transferred.', { size: 16, tsize: 19, tfill: C.olive });
  add('01-charge-current-energy', svg(900, 545, 'Charge flows round; energy is transferred', body),
    'A 6.0 V battery and a lamp in a loop. Conventional current runs from + to −, electrons drift the other way. Each coulomb gains 6.0 J in the battery and transfers it in the lamp. Side notes: Q = I × t, voltage is energy per unit charge, E = Q × V.',
    'Charge is not used up: each coulomb picks up energy at the supply and transfers it in the components.',
    '## Charge, current and energy: the picture');
}

// 02 Junction and voltage rules
{
  const j = panel(30, 110, 290, 330) + t(175, 146, 'At a junction', { size: 19, weight: 700, anchor: 'middle' }) +
    ln(60, 280, 170, 280, { w: 4 }) + wire([[170, 280], [270, 200]], { w: 4 }) + wire([[170, 280], [270, 360]], { w: 4 }) + dot(170, 280, 7) +
    arrow(75, 260, 135, 260, { w: 3, color: C.rust, marker: 'ahR' }) + t(100, 248, '0.80 A', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) +
    arrow(205, 234, 245, 203, { w: 3, color: C.rust, marker: 'ahR' }) + t(255, 200 - 20, '0.30 A', { size: 17, weight: 700, fill: C.rust, anchor: 'middle' }) +
    arrow(205, 326, 245, 357, { w: 3, color: C.rust, marker: 'ahR' }) + t(250, 395, '0.50 A', { size: 17, weight: 700, fill: C.rust, anchor: 'middle' }) +
    t(175, 425, 'in = out: 0.80 = 0.30 + 0.50', { size: 16, anchor: 'middle', weight: 600 });
  const s = panel(335, 110, 260, 330) + t(465, 146, 'Series', { size: 19, weight: 700, anchor: 'middle' }) + loop(370, 200, 560, 340) + sRes(420, 200) + sRes(510, 200) + sCell(465, 340) +
    t(420, 180, 'V₁', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(510, 180, 'V₂', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(465, 380, 'V supply', { size: 16, anchor: 'middle', fill: C.muted }) +
    t(465, 410, 'V supply = V₁ + V₂', { size: 17, weight: 700, anchor: 'middle' }) + t(465, 432, 'voltage is shared', { size: 15, anchor: 'middle', fill: C.muted });
  const p = panel(610, 110, 260, 330) + t(740, 146, 'Parallel', { size: 19, weight: 700, anchor: 'middle' }) +
    wire([[650, 340], [650, 190], [830, 190], [830, 340], [650, 340]]) + wire([[650, 260], [830, 260]]) + dot(650, 260) + dot(830, 260) + sRes(740, 190) + sRes(740, 260) + sCell(740, 340) +
    t(740, 172, 'V', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(740, 242, 'V', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(740, 380, 'V supply', { size: 16, anchor: 'middle', fill: C.muted }) +
    t(740, 410, 'each branch = V supply', { size: 17, weight: 700, anchor: 'middle' }) + t(740, 432, 'same voltage', { size: 15, anchor: 'middle', fill: C.muted });
  const body = j + s + p + panel(30, 455, 840, 70, C.cream, C.olive) + t(450, 497, 'Charge cannot build up or vanish, and each coulomb passes through every series component once.', { size: 16, weight: 600, anchor: 'middle' });
  add('02-junction-and-voltage-rules', svg(900, 545, 'Current at junctions, voltage in loops', body),
    'Left: 0.80 A enters a junction and splits into 0.30 A and 0.50 A. Middle: in series the supply voltage is shared, V supply = V₁ + V₂. Right: in parallel each branch has the full supply voltage.',
    'Current in equals current out at a junction; series shares the voltage, parallel branches each get all of it.',
    '## Charge, current and energy: the picture');
}

// 03 Domestic lighting: series vs parallel
{
  const ser = panel(30, 110, 410, 350) + t(235, 146, 'Series: one lamp fails', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) +
    wire([[80, 200], [390, 200], [390, 330], [80, 330], [80, 200]]) + lampOff(150, 200) + rect(222, 186, 26, 28, { fill: C.panel, stroke: 'none', sw: 0 }) + circ(235, 200, 18, { fill: '#e3e6e6' }) + path('M224,192 l8,6 l-4,4 l10,6', { stroke: C.rust, w: 2.5 }) + lampOff(320, 200) + sCell(235, 330) +
    t(235, 240, 'broken', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 }) + para(55, 380, 'One path, so the circuit is broken: all the lamps go out. One switch controls them all.', 360, { size: 16 }, 21);
  const px = 470;
  const par = panel(px, 110, 400, 350) + t(px + 200, 146, 'Parallel: one lamp fails', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    wire([[px + 40, 180], [px + 40, 330], [px + 360, 330]]) + sCell(px + 200, 330) +
    [0, 1, 2].map((i) => { const y = 180 + i * 0; const x = px + 100 + i * 100; return wire([[px + 40, 180], [x, 180]]) + ''; }).join('') +
    wire([[px + 40, 180], [px + 320, 180]]) +
    [0, 1, 2].map((i) => { const x = px + 110 + i * 105; return dot(x, 180) + wire([[x, 180], [x, 300], [px + 360, 300]]) + sSwitch(x, 212, { v: true }) + (i === 1 ? circ(x, 262, 18, { fill: '#e3e6e6' }) + path(`M${x - 11},${254} l8,6 l-4,4 l10,6`, { stroke: C.rust, w: 2.5 }) : lampOn(x, 262, true)); }).join('') +
    wire([[px + 360, 300], [px + 360, 330]]) +
    para(px + 25, 380, 'Each lamp has the full voltage and its own switch; the others keep working.', 350, { size: 16 }, 21);
  const body = ser + par + panel(30, 475, 840, 70, C.cream, C.olive) +
    t(450, 505, 'Domestic lighting is wired in parallel. Series suits a switch or a fuse,', { size: 16, weight: 600, anchor: 'middle' }) + t(450, 528, 'which must carry the same current as the device it controls.', { size: 16, weight: 600, anchor: 'middle' });
  add('03-series-vs-parallel-lighting', svg(900, 565, 'Why house lights are in parallel', body),
    'Left: three lamps in series with one broken; all go out. Right: three lamps in parallel, each with its own switch; one lamp is broken but the other two stay lit.',
    'In parallel each lamp gets the full voltage, has its own switch and keeps working if another fails.',
    '## Series and parallel: choosing (2.7)');
}

// 04 Worked example 1
{
  const body = panel(30, 110, 360, 330) + loop(80, 190, 340, 360) + sRes(160, 190) + sRes(270, 190) + sBattery(210, 360) +
    t(160, 166, '120 Ω', { size: 17, weight: 700, anchor: 'middle' }) + t(270, 166, '60 Ω', { size: 17, weight: 700, anchor: 'middle' }) +
    t(160, 230, '6.0 V', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(270, 230, '3.0 V', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    t(210, 405, '9.0 V', { size: 17, weight: 700, anchor: 'middle' }) + flowArrow(340, 275, 'd') + t(352, 300, '', {}) + t(210, 290, '0.050 A everywhere', { size: 16, weight: 600, anchor: 'middle', fill: C.rust }) +
    steps(410, 110, 460, [
      ['R = 120 + 60 = 180 Ω'],
      ['I = V / R = 9.0 / 180 = 0.050 A'],
      ['V(120 Ω) = 0.050 × 120 = 6.0 V'],
      ['V(60 Ω) = 0.050 × 60 = 3.0 V'],
      ['check: 6.0 + 3.0 = 9.0 V', { fill: C.tealDark, weight: 700 }],
      ['Q in 2.0 min = 0.050 × 120 = 6.0 C'],
      ['E = Q × V = 6.0 × 9.0 = 54 J', { weight: 700, fill: C.tealDark }],
    ], { lh: 40, size: 18 }) +
    t(450, 475, 'Same current through both; the larger resistor takes the larger share of the voltage.', { size: 16, anchor: 'middle', fill: C.muted });
  add('04-series-worked-example', svg(900, 500, 'Worked example: two resistors in series', body),
    'A 9.0 V battery with 120 Ω and 60 Ω resistors in series. Total 180 Ω gives 0.050 A, so the resistors have 6.0 V and 3.0 V across them. In 2.0 minutes 6.0 C flows and the battery transfers 54 J.',
    'Total resistance first, then current, then each voltage; check they add to the supply.',
    '## Worked example 1: two resistors in series (2.19)');
}

// 05 I-V investigation circuit
{
  const x1 = 120, x2 = 620, y1 = 180, y2 = 380;
  const body = panel(30, 110, 840, 420) + loop(x1, y1, x2, y2) + sBattery(370, y2) + sMeter(x1, 280, 'A') + sVarRes(250, y1) +
    rect(440, y1 - 22, 80, 44, { fill: C.cream, stroke: C.olive, sw: 2.5, rx: 6 }) + t(480, y1 + 6, 'test', { size: 15, weight: 700, anchor: 'middle' }) +
    wire([[440, y1], [420, y1], [420, y1 + 90], [455, y1 + 90]]) + wire([[505, y1 + 90], [540, y1 + 90], [540, y1], [520, y1]]) + dot(420, y1) + dot(540, y1) + sMeter(480, y1 + 90, 'V') +
    t(370, y2 + 50, 'supply', { size: 16, anchor: 'middle', fill: C.muted }) + t(x1 - 32, 285, 'ammeter', { size: 16, anchor: 'end', fill: C.muted }) +
    t(250, y1 - 34, 'variable resistor', { size: 16, anchor: 'middle', fill: C.muted }) + t(480, y1 - 32, 'component', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 }) +
    t(480, y1 + 135, 'voltmeter across it', { size: 16, fill: C.muted, anchor: 'middle' }) +
    tl(660, 190, ['1  Vary the resistor in steps:', '    at least six pairs of V, I', '2  Reverse the component;', '    repeat for negative values', '3  Plot I (y) against V (x)', '4  Switch off between', '    readings (not for the lamp)'], { size: 15 }, 24) +
    panel(50, 450, 800, 62, C.cream, C.olive) + t(450, 488, 'Ammeter in series with the component; voltmeter in parallel across it.', { size: 17, weight: 600, anchor: 'middle' });
  add('05-iv-investigation-circuit', svg(900, 550, 'Investigating an I–V characteristic', body),
    'Circuit with a supply, an ammeter and a variable resistor in series with the component under test, and a voltmeter connected across the component. Steps: take at least six readings, reverse the component, and plot current against voltage.',
    'Vary the resistor, read V and I, reverse the component, and plot I against V.',
    '## I−V characteristics and how to investigate them (2.9)');
}

// 06 I-V graphs
{
  const g = (x, title, fn, note, col) => {
    const cx = x + 135, cy = 330, s = 95;
    let d = ''; for (let i = -100; i <= 100; i += 2) { const v = i / 100, I = fn(v); if (I === null) continue; d += `${d ? 'L' : 'M'}${(cx + v * s).toFixed(1)},${(cy - I * s).toFixed(1)} `; }
    return panel(x, 110, 270, 400) + t(cx, 148, title, { size: 19, weight: 700, anchor: 'middle' }) +
      arrow(cx - 110, cy, cx + 115, cy, { w: 2.5 }) + arrow(cx, cy + 110, cx, cy - 120, { w: 2.5 }) + t(cx + 115, cy + 26, 'V', { size: 16, weight: 700, anchor: 'end' }) + t(cx + 10, cy - 112, 'I', { size: 16, weight: 700 }) +
      path(d, { stroke: col, w: 4 }) + para(x + 20, 460, note, 230, { size: 15, fill: C.muted }, 19);
  };
  const body = g(30, 'Wire / resistor', (v) => v, 'Straight line through the origin: resistance constant (constant temperature).', C.tealDark) +
    g(315, 'Filament lamp', (v) => (v / (0.4 + 0.75 * Math.abs(v))) * 1.0, 'Curve gets less steep: filament hotter, resistance increases.', C.rust) +
    g(600, 'Diode', (v) => (v < 0.35 ? 0 : (v - 0.35) * 3.2 > 1.15 ? null : (v - 0.35) * 3.2), 'Almost no current in reverse; rises steeply after a small forward voltage.', C.olive) +
    t(450, 535, 'Axes: current / A (vertical) against voltage / V (horizontal). Resistance at a point: R = V ÷ I.', { size: 16, anchor: 'middle', fill: C.ink });
  add('06-iv-characteristics', svg(900, 555, 'Three I–V characteristics', body),
    'Current against voltage for three components. A wire or resistor gives a straight line through the origin. A filament lamp gives a curve that flattens in both directions. A diode passes almost no current in reverse and a steeply rising current once a small forward voltage is exceeded.',
    'Straight line: constant resistance. Flattening curve: resistance rising. Diode: one direction only.',
    '## I−V characteristics and how to investigate them (2.9)');
}

// 07 LDR and thermistor in a circuit
{
  const sensorCircuit = (x, title, sym, trig) => {
    const x1 = x + 40, x2 = x + 370, y1 = 200, y2 = 330;
    return panel(x, 110, 410, 400) + t(x + 205, 146, title, { size: 20, weight: 700, anchor: 'middle' }) +
      loop(x1, y1, x2, y2) + sym(x + 130, y1) + sRes(x + 280, y1) + sMeter(x2, 265, 'A') + sBattery(x + 205, y2) +
      t(x + 280, y1 - 22, 'fixed', { size: 15, anchor: 'middle', fill: C.muted }) +
      t(x + 25, 390, trig, { size: 17, weight: 700, fill: C.olive }) +
      tl(x + 25, 420, ['→ sensor resistance falls', '→ current rises', '→ V across fixed resistor rises', '→ V across sensor falls'], { size: 16 }, 22);
  };
  const body = sensorCircuit(30, 'LDR', sLDR, 'Brighter light:') + sensorCircuit(460, 'Thermistor', sTherm, 'Higher temperature:') +
    panel(30, 525, 840, 70, C.cream, C.olive) + t(450, 557, 'Used in circuits that respond to light (outdoor lamps)', { size: 16, weight: 600, anchor: 'middle' }) + t(450, 580, 'or to temperature (fire alarms, thermostats).', { size: 16, weight: 600, anchor: 'middle' });
  add('07-ldr-thermistor-circuits', svg(900, 615, 'Sensors in series with a fixed resistor', body),
    'An LDR and, separately, a thermistor each in series with a fixed resistor, an ammeter and a battery. More light or a higher temperature lowers the sensor resistance, so the current and the voltage across the fixed resistor rise while the voltage across the sensor falls.',
    'More light or more warmth: lower sensor resistance, larger current.',
    '## LDRs and thermistors (2.11)');
}

// 08 Lamp resistance from two points
{
  const x0 = 130, y0 = 520, sx = 85, sy = 1200; // 1 V = 85 px, 1 A = 1200 px
  const I = (v) => v / (5 + 2.5 * v);
  let d = ''; for (let v = 0; v <= 7.0001; v += 0.1) d += `${d ? 'L' : 'M'}${(x0 + v * sx).toFixed(1)},${(y0 - I(v) * sy).toFixed(1)} `;
  const pt = (v, i, lab, r) => ln(x0 + v * sx, y0, x0 + v * sx, y0 - i * sy, { c: C.muted, w: 1.5, dash: '5 5' }) + ln(x0, y0 - i * sy, x0 + v * sx, y0 - i * sy, { c: C.muted, w: 1.5, dash: '5 5' }) +
    circ(x0 + v * sx, y0 - i * sy, 7, { fill: C.rust, sw: 0 }) + t(x0 + v * sx + 14, y0 - i * sy + 26, lab, { size: 16, weight: 700 }) + t(x0 + v * sx + 14, y0 - i * sy + 47, r, { size: 16, weight: 700, fill: C.tealDark });
  let ticks = ''; for (let v = 1; v <= 7; v++) ticks += ln(x0 + v * sx, y0, x0 + v * sx, y0 + 6, { w: 2 }) + t(x0 + v * sx, y0 + 26, String(v), { size: 15, anchor: 'middle' });
  [0.1, 0.2, 0.3].forEach((i) => { ticks += ln(x0 - 6, y0 - i * sy, x0, y0 - i * sy, { w: 2 }) + t(x0 - 10, y0 - i * sy + 5, i.toFixed(2), { size: 15, anchor: 'end' }); });
  const body = arrow(x0, y0, x0 + 690, y0, { w: 3 }) + arrow(x0, y0, x0, y0 - 410, { w: 3 }) + ticks +
    t(x0 + 690, y0 + 52, 'voltage / V', { size: 17, weight: 600, anchor: 'end' }) +
    `<text x="${x0 - 70}" y="${y0 - 200}" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x0 - 70} ${y0 - 200})">current / A</text>` +
    path(d, { stroke: C.rust, w: 4 }) + pt(2, 0.2, '2.0 V, 0.20 A', 'R = 2.0 / 0.20 = 10 Ω') + pt(6, 0.3, '6.0 V, 0.30 A', 'R = 6.0 / 0.30 = 20 Ω') +
    panel(320, 400, 300, 90, C.cream, C.olive) + t(470, 432, 'Resistance doubles: the', { size: 17, weight: 700, anchor: 'middle' }) + t(470, 456, 'filament is hotter at the', { size: 16, anchor: 'middle' }) + t(470, 478, 'higher current.', { size: 16, anchor: 'middle' });
  add('08-lamp-resistance-two-points', svg(900, 590, 'Worked example: a lamp’s resistance', body),
    'A filament lamp I–V curve with two marked points: 2.0 V at 0.20 A gives 10 Ω, and 6.0 V at 0.30 A gives 20 Ω.',
    'On a curve, find R = V ÷ I at each point: here 10 Ω rises to 20 Ω.',
    '## Worked example 2: a lamp\'s resistance');
}
