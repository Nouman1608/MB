import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-ideal-gas-molecules';
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
// bullet list: lines starting with a non-breaking space are continuation lines, indented
const blist = (x, y, lines, opts = {}, lh = 24) => lines.map((s, i) => (s.startsWith(' ') ? t(x + 14, y + i * lh, s.trim(), opts) : t(x, y + i * lh, s, opts))).join('');

const M = (x, y, dx, dy, r = 9) => circ(x, y, r, { fill: C.teal, stroke: C.tealDark, sw: 2 }) + arrow(x + dx * 0.35, y + dy * 0.35, x + dx, y + dy, { w: 2.5, color: C.olive, marker: 'ahO' });
const box = (x, y, w, h) => rect(x, y, w, h, { fill: C.tealLight, stroke: C.ink, sw: 3.5 });
const scatter = (x, y, w, h, n, seed, len = 30) => { let s = '', k = seed; const rnd = () => ((k = (k * 9301 + 49297) % 233280) / 233280); for (let i = 0; i < n; i++) { const px = x + 18 + rnd() * (w - 36), py = y + 18 + rnd() * (h - 36), a = rnd() * Math.PI * 2; s += M(px, py, len * Math.cos(a), len * Math.sin(a)); } return s; };

// 01 How a gas exerts pressure
{
  const bx = 60, by = 150, bw = 400, bh = 320;
  const hit = (x, y) => circ(x - 14, y, 9, { fill: C.teal, stroke: C.tealDark, sw: 2 });
  const body = panel(30, 110, 840, 400) + box(bx, by, bw, bh) + scatter(bx, by, bw - 60, bh, 10, 7) +
    // a molecule bouncing off the right wall
    hit(bx + bw, 260) + path(`M${bx + bw - 90},${220} L${bx + bw - 14},${260} L${bx + bw - 90},${300}`, { stroke: C.olive, w: 2.5, extra: 'stroke-dasharray="6 4"' }) +
    arrow(bx + bw - 60, 300 - 16, bx + bw - 95, 302, { w: 2.5, color: C.olive, marker: 'ahO' }) +
    arrow(bx + bw + 4, 260, bx + bw + 60, 260, { w: 5, color: C.rust, marker: 'ahR' }) + t(bx + bw + 68, 252, 'force on', { size: 16, weight: 700, fill: C.rust }) + t(bx + bw + 68, 272, 'the wall', { size: 16, weight: 700, fill: C.rust }) +
    tl(bx + bw + 30, 340, ['Each collision: a tiny force.', 'Huge numbers every second:', 'a steady total force.'], { size: 17 }, 26) +
    rect(bx + bw + 30, 420, 340, 50, { fill: C.cream, stroke: C.olive, sw: 2, rx: 10 }) + t(bx + bw + 200, 452, 'pressure = force ÷ area', { size: 19, weight: 700, anchor: 'middle' }) +
    t(bx + bw / 2, by + bh + 28, 'random motion at high speed', { size: 16, anchor: 'middle', fill: C.muted }) +
    panel(30, 525, 840, 62, C.tealLight, C.tealDark) + t(450, 562, 'The motion is random, so every wall is hit at the same rate: the pressure is the same on all walls.', { size: 16, weight: 600, anchor: 'middle' });
  add('01-gas-pressure-from-collisions', svg(900, 610, 'How gas molecules make a pressure', body),
    'Gas molecules moving randomly in a box. One molecule bounces off the right-hand wall and pushes on it with a force. Huge numbers of collisions every second give a steady force, and pressure is that force divided by the wall area.',
    'Pressure = the total force of molecules hitting a wall ÷ the area of the wall.',
    '## How a gas exerts pressure (5.15)');
}

// 02 Finding absolute zero
{
  const x0 = 620, y0 = 480, sx = 1.6, sy = 2.0; // x0 = 0 °C position; 1 °C = 1.75 px; 1 kPa = 2.4 px
  const X = (c) => x0 + c * sx, Y = (p) => y0 - p * sy;
  let ticks = ''; [-273, -200, -100, 0, 100].forEach((c) => { ticks += ln(X(c), y0, X(c), y0 + 7, { w: 2 }) + t(X(c), y0 + 28, String(c).replace('-', '−'), { size: 15, anchor: 'middle' }); });
  [50, 100, 150].forEach((p) => { ticks += ln(X(-290) - 7, Y(p), X(-290), Y(p), { w: 2 }) + t(X(-290) - 12, Y(p) + 5, String(p), { size: 15, anchor: 'end' }); });
  const body = arrow(X(-290), y0, X(150), y0, { w: 3 }) + arrow(X(-290), y0, X(-290), Y(175), { w: 3 }) + ticks +
    t(X(150), y0 + 56, 'temperature / °C', { size: 17, weight: 600, anchor: 'end' }) +
    `<text x="${X(-290) - 55}" y="${Y(90)}" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${X(-290) - 55} ${Y(90)})">pressure / kPa</text>` +
    ln(X(-273), y0, X(0), Y(100), { c: C.tealDark, w: 3, dash: '8 6' }) + ln(X(0), Y(100), X(100), Y(136.6), { c: C.tealDark, w: 5 }) +
    circ(X(0), Y(100), 7, { fill: C.mustard, stroke: C.ink, sw: 2 }) + circ(X(100), Y(136.6), 7, { fill: C.mustard, stroke: C.ink, sw: 2 }) + circ(X(-273), y0, 8, { fill: C.rust, stroke: C.ink, sw: 2 }) +
    t(X(0) - 12, Y(100) - 14, '100 kPa at 0 °C', { size: 16, weight: 700, anchor: 'end' }) + t(X(100) - 10, Y(136.6) - 16, '136.6 kPa at 100 °C', { size: 16, weight: 700, anchor: 'end' }) +
    t(X(-273) - 10, y0 + 54, 'zero pressure at −273 °C: absolute zero', { size: 16, weight: 700, fill: C.rust }) +
    t(X(-150), Y(70), 'extend the line back', { size: 15, fill: C.tealDark, weight: 600, anchor: 'middle' }) +
    steps(30, 560, 840, [
      ['rise per °C = (136.6 − 100) ÷ 100 = 0.366 kPa per °C'],
      ['cooling from 0 °C to zero pressure = 100 ÷ 0.366 = 273 °C   →   −273 °C', { weight: 700, fill: C.tealDark }],
    ], { lh: 36, size: 18 }) +
    t(450, 685, 'Zero pressure: molecules have the lowest possible kinetic energy, so no lower temperature is possible.', { size: 15, anchor: 'middle', fill: C.muted });
  add('02-finding-absolute-zero', svg(900, 705, 'Finding absolute zero from pressure data', body),
    'Pressure against temperature in °C for a sealed flask: 100 kPa at 0 °C and 136.6 kPa at 100 °C. Extending the straight line back reaches zero pressure at −273 °C. The pressure rises 0.366 kPa per °C, and 100 ÷ 0.366 = 273.',
    'Extend the pressure–temperature line back to zero pressure: it always meets −273 °C.',
    '## Absolute zero and the Kelvin scale (5.16, 5.17)');
}

// 03 Kelvin and Celsius scales
{
  const top = 150, bot = 560, sc = (bot - top) / 400; // -273..127 °C range roughly
  const Y = (c) => bot - (c + 273) * sc * 1.0;
  const rows = [[-273, 0, 'absolute zero'], [0, 273, 'water freezes'], [20, 293, 'room temperature (typical)'], [100, 373, 'water boils']];
  const scale = (x, lab, fn, col) => rect(x - 14, top - 10, 28, bot - top + 20, { fill: '#ffffff', stroke: C.ink, sw: 2.5, rx: 14 }) + t(x, top - 22, lab, { size: 20, weight: 700, anchor: 'middle', fill: col }) +
    rows.map(([c, k]) => ln(x - 14, Y(c), x + 14, Y(c), { w: 2.5 }) + t(x + (lab === '°C' ? -24 : 24), Y(c) + 6, fn(c, k), { size: 18, weight: 700, anchor: lab === '°C' ? 'end' : 'start', fill: col })).join('');
  const body = panel(30, 110, 840, 490) + scale(250, '°C', (c) => String(c).replace('-', '−'), C.rust) + scale(370, 'K', (c, k) => String(k), C.tealDark) +
    rows.map(([c, , n]) => ln(440, Y(c), 470, Y(c), { c: C.muted, w: 1.5, dash: '4 4' }) + t(480, Y(c) + 6, n, { size: 17 })).join('') +
    panel(30, 615, 840, 70, C.cream, C.olive) + t(450, 646, 'T (K) = θ (°C) + 273        θ (°C) = T (K) − 273', { size: 19, weight: 700, anchor: 'middle' }) +
    t(450, 672, 'Same size steps; the Kelvin scale starts at absolute zero.', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-kelvin-and-celsius', svg(900, 705, 'Kelvin and Celsius side by side', body),
    'Two scales side by side: absolute zero is −273 °C and 0 K, water freezes at 0 °C and 273 K, room temperature is about 20 °C or 293 K, and water boils at 100 °C or 373 K.',
    'Add 273 to change °C to K; the steps are the same size.',
    '## Absolute zero and the Kelvin scale (5.16, 5.17)');
}

// 04 Compressing at constant temperature
{
  const piston = (x, y, w, h, pw, label) => rect(x, y, w, h, { fill: '#ffffff', stroke: C.ink, sw: 3 }) + rect(x, y, pw, h, { fill: C.tealLight, stroke: 'none', sw: 0 }) + rect(x + pw, y - 6, 16, h + 12, { fill: C.rockDark, sw: 2.5 }) + ln(x + pw + 16, y + h / 2, x + w + 40, y + h / 2, { w: 7 }) + t(x + pw / 2, y + h + 26, label, { size: 16, weight: 700, anchor: 'middle' });
  const body = panel(30, 110, 420, 420) + t(240, 146, 'Push the handle in slowly', { size: 18, weight: 700, anchor: 'middle' }) +
    piston(60, 175, 300, 100, 270, '150 cm³ at 100 kPa') + scatter(60, 175, 270, 100, 6, 3, 24) +
    piston(60, 345, 300, 100, 90, '50 cm³: p = ?') + scatter(60, 345, 90, 100, 6, 3, 24) + arrow(250, 395 - 70, 200, 395 - 70, { w: 3 }) +
    para(55, 500, ['Same speed, but the walls are hit', 'more often, so pressure rises.'], 370, { size: 15 }, 20);
  const gx = 520, gy = 470;
  const g = panel(470, 110, 400, 420) + axes(gx, gy, 320, 310, 'V', 'p') +
    path((() => { let d = ''; for (let v = 0.25; v <= 1.0001; v += 0.025) d += `${d ? 'L' : 'M'}${(gx + v * 300).toFixed(1)},${(gy - (0.25 / v) * 280).toFixed(1)} `; return d; })(), { stroke: C.tealDark, w: 4 }) +
    t(gx + 150, gy - 170, 'p × V stays constant', { size: 16, weight: 700, fill: C.tealDark }) + t(gx + 150, gy - 148, 'halve V: double p', { size: 15, fill: C.muted }) +
    t(gx + 160, 146, 'p against V: a curve', { size: 17, weight: 700, anchor: 'middle' });
  const body2 = body + g + steps(30, 545, 840, [['p₂ = p₁V₁ ÷ V₂ = 100 × 150 ÷ 50 = 300 kPa', { weight: 700, fill: C.tealDark }], ['fixed mass of gas, constant temperature:   p₁V₁ = p₂V₂']], { lh: 36, size: 19 });
  add('04-compressing-at-constant-temperature', svg(900, 660, 'Squeezing a gas at constant temperature', body2),
    'A bicycle pump with 150 cm³ of air at 100 kPa is pushed in slowly to 50 cm³; the molecules hit the walls more often and the pressure becomes 100 × 150 ÷ 50 = 300 kPa. A graph of p against V is a curve that gets less steep as V increases.',
    'One third of the volume, three times the pressure: p₁V₁ = p₂V₂.',
    '## Pressure and volume at constant temperature (5.20, 5.22)');
}

// 05 Heating at constant volume: tyre
{
  const b1 = box(60, 160, 250, 200) + scatter(60, 160, 250, 200, 7, 11, 22) + t(185, 390, 'cooler', { size: 17, weight: 700, anchor: 'middle' });
  const b2 = box(380, 160, 250, 200) + scatter(380, 160, 250, 200, 7, 11, 44) + t(505, 390, 'hotter: faster molecules', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  const body = panel(30, 110, 840, 300) + b1 + arrow(320, 260, 368, 260, { w: 4, color: C.rust, marker: 'ahR' }) + t(344, 245, 'heat', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 }) + b2 +
    tl(660, 190, ['They hit the walls:', '• more often, AND', '• harder (bigger', '   force each time)'].map((s) => s.replace('   ', ' ')), { size: 17 }, 28) +
    t(660, 330, 'so pressure rises', { size: 18, weight: 700, fill: C.tealDark }) + t(660, 356, 'p ∝ T (in kelvin)', { size: 16, fill: C.muted }) +
    steps(30, 425, 840, [
      ['Car tyre: 2.4 × 10⁵ Pa at 7 °C, heated to 37 °C, volume constant', { size: 17, fill: C.muted }],
      ['T₁ = 7 + 273 = 280 K        T₂ = 37 + 273 = 310 K'],
      ['p₂ = p₁ × T₂ ÷ T₁ = 2.4 × 10⁵ × 310 ÷ 280 = 2.7 × 10⁵ Pa (2 s.f.)', { weight: 700, fill: C.tealDark }],
    ], { lh: 38, size: 19 }) +
    t(450, 600, 'Always convert to kelvin before using p₁ ÷ T₁ = p₂ ÷ T₂.', { size: 16, anchor: 'middle', weight: 600, fill: C.rust });
  add('05-heating-at-constant-volume', svg(900, 625, 'Heating a gas in a rigid container', body),
    'Two identical boxes of gas; in the hotter one the molecules move faster, so they hit the walls more often and harder and the pressure rises. Worked example: a tyre at 2.4 × 10⁵ Pa and 280 K heated to 310 K reaches 2.7 × 10⁵ Pa.',
    'Hotter means more frequent and harder collisions; use kelvin in p₁/T₁ = p₂/T₂.',
    '## Pressure and temperature at constant volume (5.20, 5.21)');
}

// 06 Rising bubble
{
  const sy = 160, dy = 470;
  const body = rect(30, sy, 400, 420, { fill: C.tealLight, stroke: 'none', sw: 0 }) + ln(30, sy, 430, sy, { c: C.tealDark, w: 3 }) + t(40, sy - 12, 'surface: 1.0 × 10⁵ Pa', { size: 16, fill: C.tealDark, weight: 600 }) +
    circ(260, dy, 14, { fill: '#ffffff', stroke: C.tealDark, sw: 2.5 }) + t(285, dy + 6, '2.0 cm³', { size: 16, weight: 700 }) +
    circ(260, 330, 18, { fill: '#ffffff', stroke: C.tealDark, sw: 2.5 }) + circ(260, sy + 30, 22, { fill: '#ffffff', stroke: C.tealDark, sw: 2.5 }) + t(292, sy + 36, '6.0 cm³', { size: 16, weight: 700 }) +
    arrow(225, dy - 20, 225, sy + 50, { w: 3, color: C.tealDark, marker: 'ahT' }) +
    arrow(100, sy + 6, 100, dy - 4, { w: 2.5 }) + arrow(100, dy - 4, 100, sy + 6, { w: 2.5 }) + t(112, 320, '20 m', { size: 17, weight: 700, fill: C.olive }) + ln(80, dy, 245, dy, { c: C.tealDark, w: 2, dash: '6 5' }) +
    t(230, 560, 'fresh water, ρ = 1000 kg/m³', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
    steps(450, 110, 420, [
      ['pressure at 20 m', { weight: 700 }],
      ['= 1.0 × 10⁵ + 20 × 1000 × 10', { dx: 10 }],
      ['= 3.0 × 10⁵ Pa', { dx: 10, weight: 700, fill: C.tealDark }],
      ['p₁V₁ = p₂V₂', { weight: 700 }],
      ['3.0 × 10⁵ × 2.0 = 1.0 × 10⁵ × V₂', { dx: 10 }],
      ['V₂ = 6.0 cm³', { dx: 10, weight: 700, fill: C.tealDark }],
    ], { lh: 40, size: 19 }) +
    para(455, 420, ['Pressure falls to a third, so the', 'bubble triples in volume. Use the', 'TOTAL pressure: add atmospheric', 'pressure to h × ρ × g.'], 400, { size: 17 }, 25);
  add('06-rising-bubble', svg(900, 600, 'Worked example: a bubble rising 20 m', body),
    'A 2.0 cm³ bubble released 20 m deep in fresh water, where the total pressure is 3.0 × 10⁵ Pa, rises to the surface at 1.0 × 10⁵ Pa. With p₁V₁ = p₂V₂ its volume becomes 6.0 cm³.',
    'Total pressure falls to a third, so the volume triples.',
    '## Combining with pressure in liquids');
}
