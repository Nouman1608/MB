import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-density-and-pressure';
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

const WATER = C.tealLight;
// measuring cylinder: x,y top-left, w,h; level = y of liquid surface
const cyl = (x, y, w, h, level, { liquid = WATER, ticks = 8 } = {}) =>
  `<rect x="${x}" y="${level}" width="${w}" height="${y + h - level}" fill="${liquid}"/>` + path(`M${x},${level} Q${x + w / 2},${level + 7} ${x + w},${level}`, { stroke: C.tealDark, w: 2 }) +
  path(`M${x},${y} L${x},${y + h} L${x + w},${y + h} L${x + w},${y}`, { w: 3 }) + ln(x - 14, y + h, x + w + 14, y + h, { w: 4 }) +
  Array.from({ length: ticks }, (_, i) => ln(x + w - (i % 2 ? 8 : 14), y + 18 + (i * (h - 30)) / ticks, x + w, y + 18 + (i * (h - 30)) / ticks, { w: 2 })).join('');
const balance = (cx, y, reading) => rect(cx - 70, y, 140, 12, { fill: C.ink, sw: 0, rx: 3 }) + rect(cx - 60, y + 12, 120, 46, { fill: C.panel, sw: 2.5, rx: 6 }) +
  rect(cx - 42, y + 20, 84, 30, { fill: C.tealLight, sw: 2, rx: 4 }) + t(cx, y + 42, reading, { size: 18, weight: 700, anchor: 'middle' });
const stone = (cx, cy, s = 1) => `<path d="M${cx - 16 * s},${cy - 4 * s} L${cx - 6 * s},${cy - 14 * s} L${cx + 12 * s},${cy - 11 * s} L${cx + 17 * s},${cy + 4 * s} L${cx + 6 * s},${cy + 13 * s} L${cx - 12 * s},${cy + 11 * s} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>`;
const eye = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="16" ry="9" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + circ(x + 4, y, 5, { fill: C.ink, sw: 0 });
const dimArrow = (x1, y1, x2, y2, lab, lx, ly, anchor = 'middle') => arrow(x1, y1, x2, y2, { w: 2.5 }) + arrow(x2, y2, x1, y1, { w: 2.5 }) + t(lx, ly, lab, { size: 17, weight: 700, anchor, fill: C.olive });

// 01 Density of solids
{
  const pw = 270, py = 110, ph = 490;
  const head = (x, n, s1, s2) => badge(x + 30, py + 34, 17, n, C.cream) + t(x + 56, py + 32, s1, { size: 19, weight: 700 }) + t(x + 56, py + 54, s2, { size: 16, fill: C.muted });
  // A regular
  const a = panel(30, py, pw, ph) + head(30, '1', 'Regular solid', 'a cuboid block') +
    `<path d="M80,260 L200,260 L200,330 L80,330 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/><path d="M80,260 L110,235 L230,235 L200,260 Z" fill="#ddd3b8" stroke="${C.ink}" stroke-width="3"/><path d="M200,260 L230,235 L230,305 L200,330 Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/>` +
    dimArrow(80, 348, 200, 348, 'length', 140, 375) + dimArrow(245, 230, 245, 302, 'height', 252, 272, 'start') + t(150, 222, 'width', { size: 17, weight: 700, fill: C.olive, anchor: 'middle' }) +
    para(52, 418, ['Mass on a top-pan balance.', 'Measure each side in more', 'than one place; find the mean.'], 230, { size: 16 }, 22) +
    rect(50, 500, 230, 76, { fill: C.cream, stroke: C.olive, sw: 2, rx: 8 }) + t(165, 530, 'V = l × w × h', { size: 18, weight: 700, anchor: 'middle' }) + t(165, 560, 'ρ = m ÷ V', { size: 18, weight: 700, anchor: 'middle' });
  // B irregular (measuring cylinder)
  const bx = 315;
  const b = panel(bx, py, pw, ph) + head(bx, '2', 'Irregular solid', 'measuring cylinder') +
    cyl(bx + 40, 200, 70, 230, 330) + t(bx + 75, 460, 'before', { size: 16, anchor: 'middle', fill: C.muted }) +
    cyl(bx + 160, 200, 70, 230, 290) + ln(bx + 160, 330, bx + 230, 330, { c: C.olive, w: 2.5, dash: '5 4' }) +
    `<rect x="${bx + 160}" y="292" width="70" height="38" fill="${C.cream}" opacity="0.9"/>` + ln(bx + 195, 180, bx + 195, 395, { w: 1.5 }) + stone(bx + 195, 405, 1.2) +
    t(bx + 195, 460, 'after', { size: 16, anchor: 'middle', fill: C.muted }) + t(bx + 246, 316, 'rise', { size: 16, weight: 700, fill: C.olive }) +
    eye(bx + 20, 290) + ln(bx + 36, 290, bx + 158, 290, { c: C.muted, w: 1.5, dash: '3 4' }) +
    para(bx + 22, 500, ['Read the meniscus bottom at', 'eye level. Object volume =', 'the INCREASE in reading.'], 230, { size: 16 }, 22);
  // C displacement can
  const cx = 600;
  const can = `<path d="M${cx + 30},210 L${cx + 30},400 L${cx + 150},400 L${cx + 150},245 L${cx + 205},285" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
    `<path d="M${cx + 32},245 L${cx + 148},245 L${cx + 148},398 L${cx + 32},398 Z" fill="${WATER}"/>` + ln(cx + 32, 245, cx + 148, 245, { c: C.tealDark, w: 2 }) +
    ln(cx + 90, 170, cx + 90, 330, { w: 1.5 }) + stone(cx + 90, 342, 1.6) +
    path(`M${cx + 205},285 q8,10 6,40`, { stroke: C.tealDark, w: 3 }) +
    cyl(cx + 185, 330, 60, 120, 410) + t(cx + 215, 476, 'overflow', { size: 15, anchor: 'middle', fill: C.muted }) +
    t(cx + 90, 425, 'filled to the spout', { size: 15, anchor: 'middle', fill: C.muted });
  const c = panel(cx, py, pw, ph) + head(cx, '3', 'Too big?', 'displacement can') + can +
    para(cx + 22, 500, ['Lower the object in; catch the', 'overflow in a measuring', 'cylinder. Overflow = volume.'], 230, { size: 16 }, 22);
  add('01-density-of-solids', svg(900, 625, 'Measuring the density of a solid', a + b + c),
    'Three methods. A regular block: measure length, width and height and find its mass. An irregular stone: the rise in a measuring cylinder reading when it is lowered in on a thread is its volume. A large object: the water overflowing from a displacement can filled to the spout is its volume.',
    'Find the mass on a balance; find the volume by measuring or by displacement; ρ = m ÷ V.',
    '## The density practical (5.4)');
}

// 02 Density of a liquid: oil example
{
  const oil = C.cream;
  const body = panel(30, 110, 420, 360) + t(240, 148, 'Empty cylinder', { size: 20, weight: 700, anchor: 'middle' }) +
    path('M215,190 L215,370 L265,370 L265,190', { w: 3 }) + balance(240, 372, '82.0 g') +
    panel(470, 110, 400, 360) + t(670, 148, 'With 50.0 cm³ of oil', { size: 20, weight: 700, anchor: 'middle' }) +
    `<rect x="645" y="250" width="50" height="120" fill="${C.mustard}" opacity="0.55"/>` + path('M645,250 Q670,257 695,250', { stroke: C.olive, w: 2 }) + path('M645,190 L645,370 L695,370 L695,190', { w: 3 }) + balance(670, 372, '128.0 g') +
    eye(600, 252) + ln(616, 252, 642, 252, { c: C.muted, w: 1.5, dash: '3 3' }) + t(712, 256, '50.0 cm³', { size: 16, weight: 600, fill: C.olive }) +
    steps(30, 490, 840, [
      ['mass of oil = 128.0 − 82.0 = 46.0 g'],
      ['ρ = m ÷ V = 46.0 ÷ 50.0 = 0.920 g/cm³'],
      ['= 920 kg/m³   (× 1000 to change g/cm³ to kg/m³)', { dx: 22, weight: 700, fill: C.tealDark }],
    ], { lh: 38, size: 20 });
  add('02-density-of-a-liquid', svg(900, 645, 'Density of a liquid: oil', body),
    'An empty measuring cylinder reads 82.0 g on a balance; with 50.0 cm³ of oil it reads 128.0 g. The oil has mass 46.0 g, so its density is 46.0 ÷ 50.0 = 0.920 g/cm³, or 920 kg/m³.',
    'Subtract the mass of the empty cylinder before dividing by the volume.',
    '## The density practical (5.4)');
}

// 03 Pressure on a surface
{
  const col = (x, title, area, cw, calc, res, fill) => {
    const cx = x + 135;
    return panel(x, 110, 270, 430) + t(cx, 148, title, { size: 20, weight: 700, anchor: 'middle' }) +
      arrow(cx, 175, cx, 260, { w: 6, color: C.rust, marker: 'ahR' }) + t(cx + 14, 210, '600 N', { size: 18, weight: 700, fill: C.rust }) +
      rect(x + 20, 290, 230, 50, { fill: C.sand, stroke: C.ink, sw: 2.5 }) + rect(cx - cw / 2, 274, cw, 16, { fill: C.ink, sw: 0, rx: 3 }) +
      t(cx, 370, area, { size: 16, anchor: 'middle', fill: C.muted }) +
      t(cx, 420, calc, { size: 17, anchor: 'middle' }) +
      rect(x + 20, 445, 230, 70, { fill, stroke: C.ink, sw: 2, rx: 10 }) + t(cx, 489, res, { size: 22, weight: 700, anchor: 'middle' });
  };
  const body = col(30, 'Flat shoes', 'area 0.040 m²', 90, 'p = 600 ÷ 0.040', '15 000 Pa', C.cream) +
    col(315, 'Snowshoes', 'area 0.30 m²', 220, 'p = 600 ÷ 0.30', '2000 Pa', C.tealLight) +
    col(600, 'One narrow heel', 'area 1.0 cm² = 1.0 × 10⁻⁴ m²', 6, 'p = 600 ÷ 1.0 × 10⁻⁴', '6.0 × 10⁶ Pa', C.mustard) +
    panel(30, 560, 840, 100, C.panel) + t(450, 598, 'p = F ÷ A: the same force over a smaller area gives a greater pressure', { size: 18, weight: 700, anchor: 'middle' }) +
    t(450, 630, 'Wide tractor tyres: low pressure on soft ground. Sharp knives and needles: large pressure.', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-same-force-different-area', svg(900, 680, 'Same weight, different pressure', body),
    'A 600 N person stands on three different areas. Flat shoes of area 0.040 m² give 15 000 Pa, snowshoes of 0.30 m² give 2000 Pa, and one heel of 1.0 × 10⁻⁴ m² gives 6.0 × 10⁶ Pa.',
    'The same 600 N force gives a much larger pressure on a smaller area.',
    '## Pressure on a surface (5.5)');
}

// 04 Pressure in all directions
{
  const pc = [235, 330];
  const dirs = Array.from({ length: 8 }, (_, i) => { const a = (i * Math.PI) / 4; return arrow(pc[0], pc[1], pc[0] + 70 * Math.cos(a), pc[1] + 70 * Math.sin(a), { w: 4, color: C.tealDark, marker: 'ahT' }); }).join('');
  const parts = [[70, 210], [120, 250], [360, 230], [390, 300], [80, 410], [150, 450], [330, 440], [390, 420], [70, 320]].map(([x, y], i) => circ(x, y, 7, { fill: C.teal, stroke: C.tealDark, sw: 2 }) + arrow(x + [9, -9, 7, -9, 9, 9, -9, 7, 9][i], y + [-7, 7, 9, -6, -7, 6, 7, 9, 5][i], x + [32, -30, 26, -32, 30, 32, -30, 26, 32][i], y + [-26, 26, 32, -22, -26, 22, 26, 32, 18][i], { w: 2.5, color: C.olive, marker: 'ahO' })).join('');
  const left = panel(30, 110, 410, 440) + rect(50, 180, 370, 300, { fill: WATER, stroke: C.tealDark, sw: 2 }) + ln(50, 180, 420, 180, { c: C.tealDark, w: 3 }) + parts + dirs + circ(pc[0], pc[1], 7, { fill: C.ink, sw: 0 }) +
    t(235, 150, 'At one point in a fluid', { size: 20, weight: 700, anchor: 'middle' }) +
    para(55, 508, ['Particles move randomly in every direction,', 'so pressure pushes equally all ways.'], 360, { size: 16, fill: C.ink }, 21);
  // bottle
  const bx = 560, bw = 140, top = 200, bot = 470, hy = 300, ly = 420;
  const jet = (x, y, dir, len) => path(`M${x},${y} Q${x + dir * len * 0.6},${y} ${x + dir * len},${bot + 20}`, { stroke: C.blue, w: 4 });
  const right = panel(460, 110, 410, 440) + t(665, 150, 'Bottle with holes', { size: 20, weight: 700, anchor: 'middle' }) +
    rect(bx, top + 20, bw, bot - top - 20, { fill: WATER, sw: 0 }) + path(`M${bx + 45},${top - 20} L${bx + 45},${top} L${bx},${top + 20} L${bx},${bot} L${bx + bw},${bot} L${bx + bw},${top + 20} L${bx + bw - 45},${top} L${bx + bw - 45},${top - 20}`, { w: 3.5 }) +
    ln(bx, top + 20, bx + bw, top + 20, { c: C.tealDark, w: 2 }) +
    jet(bx, hy, -1, 70) + jet(bx + bw, hy, 1, 70) + jet(bx + bw, ly, 1, 125) +
    ln(470, bot + 20, 860, bot + 20, { w: 3 }) +
    ln(bx + 4, hy, bx + bw - 4, hy, { c: C.olive, w: 2, dash: '5 5' }) + t(bx + bw / 2, hy - 8, 'same height', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 }) +
    t(bx + bw / 2, ly - 8, 'lower hole', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 }) +
    para(485, 518, ['Same height: equal jets. Lower hole: spurts', 'further, as pressure is greater at depth.'], 370, { size: 16, fill: C.ink }, 21);
  add('04-pressure-in-all-directions', svg(900, 575, 'Fluid pressure acts in all directions', left + right),
    'Left: at one point in a liquid, equal arrows push outwards in every direction while particles move randomly. Right: water spurts sideways equally from two holes at the same height in a bottle, and further from a hole lower down.',
    'At any point in a fluid at rest, pressure acts equally in all directions and increases with depth.',
    '## Pressure in a fluid acts in all directions (5.6)');
}

// 05 Diver
{
  const sy = 190, dy = 470;
  const diver = circ(250, dy - 18, 14, { fill: C.cream, stroke: C.ink, sw: 2.5 }) + path(`M250,${dy - 4} L250,${dy + 40} M250,${dy + 8} L222,${dy + 26} M250,${dy + 8} L278,${dy + 26} M250,${dy + 40} L232,${dy + 70} M250,${dy + 40} L268,${dy + 70}`, { w: 4 }) + rect(256, dy, 12, 30, { fill: C.mustard, sw: 2, rx: 4 });
  const body = rect(30, sy, 420, 400, { fill: WATER, stroke: 'none', sw: 0 }) + path(`M30,${sy} q20,-8 40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t20,0`, { stroke: C.tealDark, w: 3 }) +
    arrow(150, 120, 150, sy - 6, { w: 4 }) + t(162, 145, 'atmospheric pressure', { size: 16, weight: 600 }) + t(162, 165, '1.0 × 10⁵ Pa', { size: 16, fill: C.muted }) +
    dimArrow(95, sy + 6, 95, dy - 6, 'h = 25 m', 108, (sy + dy) / 2, 'start') + ln(70, dy, 420, dy, { c: C.tealDark, w: 2, dash: '6 6' }) + diver +
    t(240, 575, 'sea water: ρ = 1030 kg/m³', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
    steps(470, 120, 400, [
      ['Pressure difference', { weight: 700 }],
      ['p = h × ρ × g'],
      ['= 25 × 1030 × 10', { dx: 22 }],
      ['= 257 500 Pa', { dx: 22, weight: 700, fill: C.tealDark }],
      ['Total pressure', { weight: 700 }],
      ['= 1.0 × 10⁵ + 2.575 × 10⁵', { dx: 22 }],
      ['= 3.6 × 10⁵ Pa (2 s.f.)', { dx: 22, weight: 700, fill: C.tealDark }],
    ], { lh: 38 }) +
    para(475, 450, ['About three and a half times', 'atmospheric pressure. Add', 'atmospheric pressure only when', 'the question asks for the total.'], 380, { size: 17 }, 25);
  add('05-diver-pressure-at-depth', svg(900, 615, 'Worked example: a diver at 25 m', body),
    'A diver 25 m below the sea surface. The pressure difference is 25 × 1030 × 10 = 257 500 Pa; adding atmospheric pressure of 1.0 × 10⁵ Pa gives a total of 3.6 × 10⁵ Pa.',
    'p = h × ρ × g gives the extra pressure; add atmospheric pressure for the total.',
    '## Pressure difference with depth (5.7)');
}

// 06 Submarine window
{
  const sy = 150;
  const sub = `<ellipse cx="250" cy="470" rx="170" ry="55" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/>` + rect(215, 395, 60, 30, { fill: C.rockDark, sw: 3, rx: 6 }) +
    rect(300, 411, 50, 10, { fill: '#ffffff', sw: 2.5, rx: 2 });
  const body = rect(30, sy, 440, 420, { fill: WATER, stroke: 'none', sw: 0 }) + ln(30, sy, 470, sy, { c: C.tealDark, w: 3 }) + t(40, sy - 12, 'sea surface', { size: 15, fill: C.tealDark, weight: 600 }) +
    dimArrow(445, sy + 6, 445, 410, 'h = 200 m', 433, 280, 'end') + ln(355, 416, 465, 416, { c: C.tealDark, w: 2, dash: '6 6' }) + sub +
    arrow(325, 330, 325, 405, { w: 5, color: C.rust, marker: 'ahR' }) + t(313, 350, 'force on', { size: 16, weight: 600, fill: C.rust, anchor: 'end' }) + t(313, 369, 'window', { size: 16, weight: 600, fill: C.rust, anchor: 'end' }) +
    t(260, 548, 'window area 0.050 m²', { size: 16, anchor: 'middle', weight: 600 }) +
    steps(490, 120, 380, [
      ['Step 1: pressure', { weight: 700 }],
      ['p = h × ρ × g'],
      ['= 200 × 1030 × 10', { dx: 22 }],
      ['= 2.06 × 10⁶ Pa', { dx: 22, weight: 700, fill: C.tealDark }],
      ['Step 2: force', { weight: 700 }],
      ['F = p × A'],
      ['= 2.06 × 10⁶ × 0.050', { dx: 22 }],
      ['= 1.03 × 10⁵ N', { dx: 22, weight: 700, fill: C.tealDark }],
    ], { lh: 38 }) +
    para(495, 490, ['Combine p = h × ρ × g', 'with p = F ÷ A.'], 370, { size: 17, weight: 600 }, 25);
  add('06-submarine-window-force', svg(900, 595, 'Two steps: force on a submarine window', body),
    'A submarine 200 m below the sea surface with a window of area 0.050 m². The water pressure is 200 × 1030 × 10 = 2.06 × 10⁶ Pa, so the extra force on the window is 2.06 × 10⁶ × 0.050 = 1.03 × 10⁵ N.',
    'Find the pressure from the depth, then multiply by the area for the force.',
    '## Pressure difference with depth (5.7)');
}

// 07 Water tower and vertical height
{
  const ws = 175; // tank water surface y
  const hill = `<path d="M30,560 L30,300 Q120,250 200,262 Q420,300 600,450 Q700,520 870,540 L870,560 Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="3"/>`;
  const tank = rect(120, 150, 110, 105, { fill: C.panel, sw: 3 }) + rect(122, ws, 106, 78, { fill: WATER, stroke: 'none', sw: 0 }) + ln(122, ws, 228, ws, { c: C.tealDark, w: 2.5 });
  const pipe = path('M200,255 Q410,300 610,440 L740,478', { stroke: C.blue, w: 6 });
  const house = (x, y) => rect(x, y, 60, 46, { fill: '#ffffff', sw: 2.5 }) + path(`M${x - 6},${y} L${x + 30},${y - 26} L${x + 66},${y} Z`, { fill: C.rust, w: 2.5 });
  const tap = (x, y) => path(`M${x},${y} l18,0 l0,10`, { w: 5 }) + path(`M${x + 18},${y + 16} l0,12`, { stroke: C.blue, w: 3, extra: 'stroke-dasharray="3 4"' });
  const body = hill + tank + pipe + house(370, 248) + tap(345, 305 - 20) + house(745, 432) + tap(722, 470) +
    ln(122, ws, 860, ws, { c: C.tealDark, w: 2, dash: '8 6' }) + t(860, ws - 10, 'level of the water surface in the tank', { size: 15, anchor: 'end', fill: C.tealDark, weight: 600 }) +
    dimArrow(330, ws + 4, 330, 281, 'h = 15 m', 318, 240, 'end') +
    dimArrow(810, ws + 4, 810, 476, 'larger h', 798, 330, 'end') +
    t(160, 140, 'tank', { size: 16, weight: 700, anchor: 'middle' }) +
    t(540, 330, 'pipe length is NOT h', { size: 16, weight: 700, fill: C.blue, anchor: 'middle' }) +
    panel(30, 580, 840, 110, C.cream, C.olive) +
    t(55, 616, 'Upper tap:  p = h × ρ × g = 15 × 1000 × 10 = 150 000 Pa', { size: 18, weight: 700 }) +
    t(55, 646, 'Lower house: larger vertical height below the surface, so a larger pressure', { size: 17 }) +
    t(55, 670, 'difference and the water flows out faster. Always use the vertical height.', { size: 17 });
  add('07-water-tower-vertical-height', svg(900, 710, 'Water supply: use the vertical height', body),
    'A storage tank on a hill feeds a tap 15 m below the water surface, giving a pressure difference of 150 000 Pa. A house further down the hill has a larger vertical height below the surface and a larger pressure difference.',
    'h is the vertical depth below the water surface, never the length of pipe.',
    '## Pressure difference with depth (5.7)');
}
