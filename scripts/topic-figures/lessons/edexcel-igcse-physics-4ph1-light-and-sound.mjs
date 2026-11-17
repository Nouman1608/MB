import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-light-and-sound';
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

const D = Math.PI / 180;
const GL = C.tealLight;
// point at distance L from (x,y) in svg-angle a (degrees, 0 = +x, 90 = down)
const at = (x, y, a, L) => [x + L * Math.cos(a * D), y + L * Math.sin(a * D)];
const ray = (x1, y1, x2, y2, col = C.olive, w = 3.5, mk = true) => ln(x1, y1, x2, y2, { c: col, w }) + (mk ? arrow((x1 * 0.55 + x2 * 0.45), (y1 * 0.55 + y2 * 0.45), (x1 * 0.45 + x2 * 0.55), (y1 * 0.45 + y2 * 0.55), { w: 0.1, color: col, marker: col === C.olive ? 'ahO' : col === C.rust ? 'ahR' : col === C.tealDark ? 'ahT' : 'ah' }) : '');
const arc = (cx, cy, R, a1, a2, col = C.ink) => { const [x1, y1] = at(cx, cy, a1, R), [x2, y2] = at(cx, cy, a2, R); return path(`M${x1.toFixed(1)},${y1.toFixed(1)} A${R},${R} 0 0 1 ${x2.toFixed(1)},${y2.toFixed(1)}`, { stroke: col, w: 2 }); };
const normal = (x1, y1, x2, y2) => ln(x1, y1, x2, y2, { c: C.ink, w: 2, dash: '7 6' });

// 01 Reflection and refraction rules
{
  const L = panel(30, 110, 410, 400) + t(235, 146, 'Reflection', { size: 20, weight: 700, anchor: 'middle' });
  const P = [235, 400];
  const [ix, iy] = at(P[0], P[1], -90 - 40, 220), [rx, ry] = at(P[0], P[1], -90 + 40, 220);
  const refl = rect(70, 400, 330, 14, { fill: '#c9d0d0', sw: 2.5 }) + Array.from({ length: 16 }, (_, i) => ln(78 + i * 20, 414, 70 + i * 20, 426, { w: 1.5 })).join('') + t(380, 448, 'mirror', { size: 15, anchor: 'end', fill: C.muted }) +
    normal(P[0], 400, P[0], 175) + t(P[0] + 6, 172, 'normal', { size: 15, fill: C.muted }) +
    ray(ix, iy, P[0], P[1]) + ray(P[0], P[1], rx, ry) + arc(P[0], P[1], 60, -130, -90) + arc(P[0], P[1], 70, -90, -50) +
    t(P[0] - 40, P[1] - 72, 'i', { size: 18, weight: 700, anchor: 'middle' }) + t(P[0] + 44, P[1] - 82, 'r', { size: 18, weight: 700, anchor: 'middle' }) +
    t(235, 480, 'angle of incidence = angle of reflection', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  const R = panel(460, 110, 410, 400) + t(665, 146, 'Refraction', { size: 20, weight: 700, anchor: 'middle' });
  const Q = [665, 300];
  const r1 = Math.asin(Math.sin(40 * D) / 1.5) / D;
  const [ax, ay] = at(Q[0], Q[1], -90 - 40, 150), [bx, by] = at(Q[0], Q[1], 90 - r1, 170);
  const refr = rect(480, 300, 370, 150, { fill: GL, stroke: 'none', sw: 0 }) + ln(480, 300, 850, 300, { w: 2.5 }) + t(840, 290, 'air', { size: 16, anchor: 'end', fill: C.muted }) + t(495, 440, 'glass', { size: 16, fill: C.tealDark, weight: 600 }) +
    normal(Q[0], 170, Q[0], 450) + ray(ax, ay, Q[0], Q[1]) + ray(Q[0], Q[1], bx, by) + ln(Q[0], Q[1], ...at(Q[0], Q[1], 50, 90), { c: C.muted, w: 1.5, dash: '4 5' }) +
    arc(Q[0], Q[1], 55, -130, -90) + arc(Q[0], Q[1], 60, 90 - r1, 90) + t(Q[0] - 34, Q[1] - 64, 'i', { size: 18, weight: 700, anchor: 'middle' }) + t(Q[0] + 18, Q[1] + 82, 'r', { size: 18, weight: 700, anchor: 'middle' }) +
    t(845, Q[1] + 100, 'slows: bends', { size: 15, fill: C.tealDark, weight: 600, anchor: 'end' }) + t(845, Q[1] + 118, 'towards normal', { size: 15, fill: C.tealDark, weight: 600, anchor: 'end' }) +
    t(665, 480, 'out of glass: speeds up, bends away', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const body = L + refl + R + refr + panel(30, 525, 840, 62, C.cream, C.olive) + t(450, 562, 'Draw the normal at 90° to the surface; measure every angle from the normal, not the surface.', { size: 16, weight: 600, anchor: 'middle' });
  add('01-reflection-and-refraction-rules', svg(900, 605, 'Ray diagrams: angles from the normal', body),
    'Left: a ray reflects from a mirror with the angle of incidence equal to the angle of reflection, both measured from the dashed normal. Right: a ray passing from air into glass slows and bends towards the normal, so the angle of refraction is smaller than the angle of incidence.',
    'Measure all angles from the normal; light entering glass bends towards it.',
    '## Drawing ray diagrams that earn the marks');
}

// 02 Three block shapes
{
  const n = 1.5;
  // rectangular block
  const bx = 70, by = 210, bw = 200, bh = 150, i1 = 50, r1 = Math.asin(Math.sin(i1 * D) / n) / D;
  const P1 = [130, by], P2 = [130 + bh * Math.tan(r1 * D), by + bh];
  const s1 = at(P1[0], P1[1], -90 - i1, 70), e1 = at(P2[0], P2[1], 90 - i1, 80);
  const rectB = panel(30, 110, 270, 420) + t(165, 146, 'Rectangular block', { size: 18, weight: 700, anchor: 'middle' }) +
    rect(bx, by, bw, bh, { fill: GL, stroke: C.tealDark, sw: 2.5 }) + normal(P1[0], by - 50, P1[0], by + 50) + normal(P2[0], P2[1] - 50, P2[0], P2[1] + 50) +
    ray(s1[0], s1[1], P1[0], P1[1]) + ray(P1[0], P1[1], P2[0], P2[1]) + ray(P2[0], P2[1], e1[0], e1[1]) +
    ln(P1[0], P1[1], ...at(P1[0], P1[1], 90 - i1, 195), { c: C.muted, w: 1.5, dash: '4 5' }) +
    para(48, 440, 'Emerging ray is parallel to the incident ray, shifted sideways.', 230, { size: 15 }, 20);
  // semicircular block: flat face on top, centre O; ray enters along radius from below-left
  const O = [450, 300], Rr = 100, ii = 30, rr = Math.asin(n * Math.sin(ii * D)) / D;
  const semi = path(`M${O[0] - Rr},${O[1]} A${Rr},${Rr} 0 0 0 ${O[0] + Rr},${O[1]} Z`, { fill: GL, stroke: C.tealDark, w: 2.5 });
  const sIn = at(O[0], O[1], 90 + ii, Rr + 25), sOut = at(O[0], O[1], -90 + rr, 120);
  const semiB = panel(315, 110, 270, 420) + t(450, 146, 'Semi-circular block', { size: 18, weight: 700, anchor: 'middle' }) + semi + normal(O[0], 180, O[0], 410) +
    ray(sIn[0], sIn[1], O[0], O[1]) + ray(O[0], O[1], sOut[0], sOut[1]) + circ(O[0], O[1], 4, { fill: C.ink, sw: 0 }) +
    t(O[0] + 72, O[1] + 112, 'no bend: enters', { size: 15, fill: C.muted, anchor: 'middle' }) + t(O[0] + 72, O[1] + 130, 'along a radius', { size: 15, fill: C.muted, anchor: 'middle' }) +
    para(333, 455, 'All the refraction is at the flat face; at the critical angle the ray disappears into TIR.', 240, { size: 15 }, 20);
  // prism with dispersion
  const A = [735, 190], B2 = [640, 370], C2 = [830, 370];
  const prismB = panel(600, 110, 270, 420) + t(735, 146, 'Triangular prism', { size: 18, weight: 700, anchor: 'middle' }) +
    path(`M${A[0]},${A[1]} L${B2[0]},${B2[1]} L${C2[0]},${C2[1]} Z`, { fill: GL, stroke: C.tealDark, w: 2.5 }) +
    ray(612, 300, 690, 276, C.ink, 4) +
    [[C.rust, 294, 314], [C.mustard, 299, 334], [C.grass, 304, 354], [C.blue, 309, 374]].map(([col, yy, ye]) => { const xx = 735 + (95 * (yy - 190)) / 180; return ln(690, 276, xx, yy, { c: col, w: 2.5 }) + ln(xx, yy, 860, ye, { c: col, w: 3.5 }); }).join('') +
    t(616, 322, 'white', { size: 15, fill: C.muted }) + t(858, 302, 'red', { size: 15, anchor: 'end', fill: C.rust, weight: 600 }) + t(845, 412, 'violet', { size: 15, anchor: 'end', fill: C.blue, weight: 600 }) +
    para(618, 440, 'Two non-parallel faces: deviated towards the base. White light spreads into colours.', 240, { size: 15 }, 20);
  add('02-three-block-shapes', svg(900, 550, 'The refraction practical: three block shapes', rectB + semiB + prismB),
    'Rectangular block: the ray bends towards the normal entering and away leaving, so it emerges parallel to the incident ray but shifted. Semi-circular block: the ray enters the curved side along a radius without bending and refracts only at the flat face. Triangular prism: the ray is deviated towards the base and white light spreads into colours.',
    'Each block shape shows something different: a parallel shift, one clean refraction, or dispersion.',
    '## The refraction practical with three block shapes (3.17)');
}

// 03 sin i against sin r
{
  const gx = 140, gy = 520, s = 520; // 1.0 = 520 px horizontally, 400 px vertically
  const X = (v) => gx + v * s * 1.0, Y = (v) => gy - v * 400;
  const data = [[0.225, 0.342], [0.342, 0.5], [0.423, 0.643], [0.515, 0.766], [0.574, 0.866]];
  let ticks = ''; [0.2, 0.4, 0.6].forEach((v) => { ticks += ln(X(v), gy, X(v), gy + 7, { w: 2 }) + t(X(v), gy + 27, v.toFixed(1), { size: 15, anchor: 'middle' }); });
  [0.2, 0.4, 0.6, 0.8, 1.0].forEach((v) => { ticks += ln(gx - 7, Y(v), gx, Y(v), { w: 2 }) + t(gx - 12, Y(v) + 5, v.toFixed(1), { size: 15, anchor: 'end' }); });
  const body = arrow(gx, gy, X(0.7), gy, { w: 3 }) + arrow(gx, gy, gx, Y(1.08), { w: 3 }) + ticks +
    t(X(0.7), gy + 54, 'sin r', { size: 17, weight: 600, anchor: 'end' }) + `<text x="${gx - 60}" y="${Y(0.5)}" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${gx - 60} ${Y(0.5)})">sin i</text>` +
    ln(gx, gy, X(0.62), Y(0.62 * 1.5), { c: C.tealDark, w: 3 }) +
    data.map(([a, b]) => path(`M${X(a) - 7},${Y(b) - 7} L${X(a) + 7},${Y(b) + 7} M${X(a) - 7},${Y(b) + 7} L${X(a) + 7},${Y(b) - 7}`, { stroke: C.rust, w: 3 })).join('') +
    ln(X(0.225), Y(0.342), X(0.574), Y(0.342), { c: C.olive, w: 2, dash: '6 5' }) + ln(X(0.574), Y(0.342), X(0.574), Y(0.866), { c: C.olive, w: 2, dash: '6 5' }) +
    t((X(0.225) + X(0.574)) / 2, Y(0.342) + 24, '0.349', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) + t(X(0.574) + 10, (Y(0.342) + Y(0.866)) / 2, '0.524', { size: 16, weight: 700, fill: C.olive }) +
    panel(560, 120, 310, 200, C.cream, C.olive) + t(580, 156, 'gradient = refractive index', { size: 17, weight: 700 }) +
    t(580, 190, '= (0.866 − 0.342)', { size: 17 }) + t(580, 214, '÷ (0.574 − 0.225)', { size: 17 }) + t(580, 244, '= 0.524 ÷ 0.349', { size: 17 }) + t(580, 278, 'n = 1.50 (no unit)', { size: 19, weight: 700, fill: C.tealDark }) +
    t(450, 615, 'A straight line through the origin; the line uses every reading, so one bad ray matters less.', { size: 15, anchor: 'middle', fill: C.muted });
  add('03-sin-i-against-sin-r', svg(900, 640, 'Refractive index from a graph', body),
    'A graph of sin i against sin r with five plotted points and a straight line of best fit through the origin. Using the points (0.225, 0.342) and (0.574, 0.866), the gradient is 0.524 ÷ 0.349 = 1.50, the refractive index.',
    'Plot sin i against sin r: the gradient is the refractive index, n = 1.50.',
    '## Measuring the refractive index of glass (3.18, 3.19)');
}

// 04 Critical angle: acrylic
{
  const n = 1.49, c = Math.asin(1 / n) / D;
  const caseP = (x, ii, title) => {
    const O = [x + 205, 250], Rr = 130;
    let s = panel(x, 110, 410, 330) + t(x + 205, 146, title, { size: 19, weight: 700, anchor: 'middle' }) +
      rect(x + 20, 160, 370, 90, { fill: C.panel, stroke: 'none', sw: 0 }) + t(x + 30, 180, 'air', { size: 15, fill: C.muted }) +
      path(`M${O[0] - Rr},${O[1]} A${Rr},${Rr} 0 0 0 ${O[0] + Rr},${O[1]} Z`, { fill: GL, stroke: C.tealDark, w: 2.5 }) + normal(O[0], 165, O[0], 395) + t(O[0] - Rr + 12, O[1] + 40, 'acrylic', { size: 15, fill: C.tealDark, weight: 600 });
    const sIn = at(O[0], O[1], 90 + ii, Rr);
    s += ray(sIn[0], sIn[1], O[0], O[1]) + arc(O[0], O[1], 50, 90, 90 + ii) + t(O[0] - 24, O[1] + 72, `${ii}°`, { size: 16, weight: 700, anchor: 'middle' });
    if (ii < c) { const rr = Math.asin(n * Math.sin(ii * D)) / D; const e = at(O[0], O[1], -90 + rr, 160); s += ray(O[0], O[1], e[0], e[1]) + ln(O[0], O[1], ...at(O[0], O[1], 90 - ii, Rr - 4), { c: C.olive, w: 1.5, dash: '5 5' }) + t(x + 30, 210, 'refracts out,', { size: 16, weight: 700, fill: C.olive }) + t(x + 30, 230, 'bends away', { size: 16, weight: 700, fill: C.olive }); }
    else { const e = at(O[0], O[1], 90 - ii, Rr); s += ray(O[0], O[1], e[0], e[1], C.rust) + t(x + 390, 205, 'total internal', { size: 16, anchor: 'end', weight: 700, fill: C.rust }) + t(x + 390, 225, 'reflection', { size: 16, anchor: 'end', weight: 700, fill: C.rust }); }
    return s + t(x + 205, 425, ii < c ? '40° is less than 42.2°' : '50° is greater than 42.2°', { size: 16, weight: 600, anchor: 'middle' });
  };
  const b2 = steps(30, 110, 840, [['sin c = 1 ÷ n = 1 ÷ 1.49 = 0.671        c = 42.2°', { weight: 700, size: 20 }]], { lh: 34 });
  const shift = (s) => `<g transform="translate(0 70)">${s}</g>`;
  const all = b2 + shift(caseP(30, 40, 'Ray at 40° inside the acrylic') + caseP(460, 50, 'Ray at 50° inside the acrylic')) +
    panel(30, 530, 840, 70, C.tealLight, C.tealDark) + t(450, 560, 'Both needed: light going from the higher refractive index towards the lower', { size: 16, weight: 600, anchor: 'middle' }) + t(450, 584, '(acrylic or glass towards air), and an angle of incidence greater than c.', { size: 16, weight: 600, anchor: 'middle' });
  add('04-critical-angle-acrylic', svg(900, 620, 'Worked example: the critical angle of acrylic', all),
    'Acrylic with refractive index 1.49 has a critical angle of 42.2°. A ray inside a semicircular acrylic block meeting the flat surface at 40° refracts out into the air, bending away from the normal; a ray at 50° is totally internally reflected.',
    'Below the critical angle light escapes; above it, all of it reflects.',
    '## Total internal reflection and the critical angle (3.20 to 3.22)');
}

// 05 Optical fibre
{
  const y1 = 190, y2 = 290;
  const pts = [[60, 240]]; let x = 60, y = 240, up = true;
  pts.push([110, y1]); x = 110;
  while (x < 800) { x += 100; pts.push([x, up ? y2 : y1]); up = !up; }
  const zig = pts.map((p, k) => (k ? ray(pts[k - 1][0], pts[k - 1][1], p[0], p[1], C.olive, 3, k % 2 === 0) : '')).join('');
  const body = panel(30, 110, 840, 330) + rect(40, y1, 820, y2 - y1, { fill: GL, stroke: C.tealDark, sw: 3, rx: 8 }) + zig +
    normal(310, y1 - 40, 310, y1 + 50) + arc(310, y1, 40, 90 - 45, 90, C.rust) + arc(310, y1, 46, 90, 135, C.rust) +
    t(330, 165, 'angle greater than the critical angle', { size: 16, weight: 700, fill: C.rust }) + t(330, 183, '', {}) +
    t(450, 335, 'total internal reflection at every bounce, so the light stays inside', { size: 16, weight: 600, anchor: 'middle' }) +
    t(450, 365, 'thin strand of glass', { size: 15, anchor: 'middle', fill: C.tealDark }) +
    t(450, 410, 'Pulses of light carry information along the fibre, even round gentle bends, with very little escaping.', { size: 15, anchor: 'middle', fill: C.muted }) +
    panel(30, 455, 840, 82, C.cream, C.olive) + t(450, 488, 'Right-angled prism: light meets the long face at 45°. This needs 45° > c, so n > 1/sin 45° = 1.41.', { size: 16, weight: 600, anchor: 'middle' }) +
    t(450, 514, 'Glass (about 1.5) qualifies: one reflection turns the ray through 90°, two turn it through 180°.', { size: 16, anchor: 'middle' });
  add('05-optical-fibre', svg(900, 555, 'Optical fibres trap light by total internal reflection', body),
    'A ray zig-zags along a glass fibre, meeting the side wall each time at an angle greater than the critical angle, so it is totally internally reflected again and again and stays inside.',
    'Every bounce is total internal reflection, so the light follows the fibre.',
    '## Total internal reflection and the critical angle (3.20 to 3.22)');
}

// 06 Speed of sound: echo and two microphones
{
  const wy = 290;
  const person = (cx, cy) => circ(cx, cy - 46, 14, { fill: C.cream, stroke: C.ink, sw: 2.5 }) + path(`M${cx},${cy - 32} L${cx},${cy + 6} M${cx},${cy - 22} L${cx + 20},${cy - 34} M${cx},${cy - 22} L${cx - 18},${cy - 6} M${cx},${cy + 6} L${cx - 12},${cy + 36} M${cx},${cy + 6} L${cx + 12},${cy + 36}`, { w: 3 });
  const echo = panel(30, 110, 840, 270) + t(55, 146, 'Echo method', { size: 19, weight: 700 }) + person(100, wy) + rect(780, 160, 40, 166, { fill: C.rockDark, sw: 2.5 }) + ln(50, wy + 36, 850, wy + 36, { w: 3 }) +
    arrow(140, 215, 770, 215, { w: 3.5, color: C.olive, marker: 'ahO' }) + t(455, 205, 'clap', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) +
    arrow(770, 255, 140, 255, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + t(455, 280, 'echo', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    arrow(400, 355, 120, 355, { w: 2.5 }) + arrow(510, 355, 790, 355, { w: 2.5 }) + t(455, 361, '80 m', { size: 18, weight: 700, anchor: 'middle' });
  const mic = (x) => rect(x - 8, 455, 16, 34, { fill: C.ink, sw: 0, rx: 8 }) + ln(x, 489, x, 505, { w: 3 });
  const two = panel(30, 395, 410, 230) + t(55, 430, 'Two microphones', { size: 19, weight: 700 }) +
    circ(80, 470, 20, { fill: C.mustard, stroke: C.olive, sw: 2 }) + t(80, 515, 'source', { size: 15, anchor: 'middle', fill: C.muted }) + mic(170) + mic(370) +
    ln(170, 530, 370, 530, { c: C.olive, w: 2 }) + t(270, 524, 'measured distance', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 }) +
    para(55, 565, 'Time delay between the two signals = time to travel the gap.', 370, { size: 15 }, 20);
  const calc = steps(460, 395, 410, [
    ['20 intervals in 9.6 s', { fill: C.muted, size: 17 }],
    ['one interval = 9.6 ÷ 20 = 0.48 s'],
    ['distance = 2 × 80 = 160 m'],
    ['speed = 160 ÷ 0.48'],
    ['= 330 m/s (2 s.f.)', { dx: 22, weight: 700, fill: C.tealDark }],
  ], { lh: 38, size: 18 });
  const body = echo + two + calc + t(450, 655, 'Timing twenty intervals cuts the effect of human reaction time. The sound goes there AND back.', { size: 15, anchor: 'middle', fill: C.muted });
  add('06-speed-of-sound-echo', svg(900, 675, 'Measuring the speed of sound in air', body),
    'Echo method: a person 80 m from a wall claps in time with the echoes; 20 intervals take 9.6 s, so one interval is 0.48 s, the sound travels 160 m and the speed is 330 m/s. Second method: two microphones a measured distance apart record the time delay.',
    'The echo travels to the wall and back: speed = 2 × 80 ÷ 0.48 = 330 m/s.',
    '## Sound waves (3.23 to 3.29)');
}

// 07 Oscilloscope: reading the frequency
{
  const sx = 120, sy = 140, cw = 60, rows = 8, cols = 10;
  let grid = rect(sx, sy, cols * cw, rows * 40, { fill: C.ink, stroke: C.ink, sw: 3, rx: 6 });
  for (let i = 1; i < cols; i++) grid += ln(sx + i * cw, sy, sx + i * cw, sy + rows * 40, { c: '#4a5878', w: 1.2 });
  for (let j = 1; j < rows; j++) grid += ln(sx, sy + j * 40, sx + cols * cw, sy + j * 40, { c: '#4a5878', w: 1.2 });
  const mid = sy + 160; let d = `M${sx},${mid}`; for (let i = 1; i <= cols * cw; i += 2) d += ` L${sx + i},${(mid - 110 * Math.sin((2 * Math.PI * i) / (5 * cw))).toFixed(1)}`;
  const body = grid + path(d, { stroke: C.mustard, w: 3.5 }) +
    ln(sx, sy + rows * 40 + 22, sx + 5 * cw, sy + rows * 40 + 22, { c: C.olive, w: 2.5 }) + ln(sx, sy + rows * 40 + 14, sx, sy + rows * 40 + 30, { c: C.olive, w: 2.5 }) + ln(sx + 5 * cw, sy + rows * 40 + 14, sx + 5 * cw, sy + rows * 40 + 30, { c: C.olive, w: 2.5 }) +
    t(sx + 2.5 * cw, sy + rows * 40 + 50, 'one complete wave = 5.0 divisions', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) +
    t(sx + cols * cw, sy - 12, 'timebase: 0.20 ms per division', { size: 16, weight: 600, anchor: 'end' }) +
    steps(30, 540, 840, [
      ['T = 5.0 × 0.20 ms = 1.0 ms = 0.0010 s'],
      ['f = 1 ÷ T = 1 ÷ 0.0010 = 1000 Hz', { weight: 700, fill: C.tealDark }],
    ], { lh: 36, size: 19 }) +
    t(450, 672, 'The trace is a graph of voltage against time, not a picture of the (longitudinal) sound wave.', { size: 15, anchor: 'middle', fill: C.muted });
  add('07-oscilloscope-frequency', svg(900, 695, 'Finding a frequency on an oscilloscope', body),
    'An oscilloscope screen of 10 divisions showing a trace in which one complete wave spans 5.0 divisions. With a timebase of 0.20 ms per division the period is 1.0 ms, so the frequency is 1 ÷ 0.0010 = 1000 Hz.',
    'Divisions per wave × timebase = period; frequency = 1 ÷ period.',
    '## Sound waves (3.23 to 3.29)');
}
