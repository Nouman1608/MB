import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-forces-movement-shape-and-momentum';
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

const farrow = (x1, y1, x2, y2, col = C.rust, mk = 'ahR', w = 6) => arrow(x1, y1, x2, y2, { w, color: col, marker: mk });
const person = (cx, cy, s = 1) => circ(cx, cy - 26 * s, 10 * s, { fill: C.cream, stroke: C.ink, sw: 2.5 }) + path(`M${cx},${cy - 16 * s} L${cx},${cy + 12 * s} M${cx},${cy - 8 * s} L${cx - 14 * s},${cy + 4 * s} M${cx},${cy - 8 * s} L${cx + 14 * s},${cy + 4 * s} M${cx},${cy + 12 * s} L${cx - 10 * s},${cy + 30 * s} M${cx},${cy + 12 * s} L${cx + 10 * s},${cy + 30 * s}`, { w: 3 });

// 01 Resultant force on a boat
{
  const wy = 330;
  const boat = `<path d="M300,${wy - 60} L600,${wy - 60} L560,${wy + 10} L340,${wy + 10} Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + rect(390, wy - 110, 110, 50, { fill: C.panel, sw: 2.5, rx: 6 }) + t(450, wy - 25, '400 kg', { size: 18, weight: 700, anchor: 'middle' });
  const body = panel(30, 110, 840, 330) + rect(32, wy - 10, 836, 108, { fill: C.tealLight, stroke: 'none', sw: 0 }) + path(`M32,${wy - 10} q25,-8 50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t36,0`, { stroke: C.tealDark, w: 2.5 }) + boat +
    farrow(610, wy - 30, 830, wy - 30, C.tealDark, 'ahT', 8) + t(720, wy - 50, 'engine 1500 N', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    farrow(330, wy + 40, 150, wy + 40, C.rust, 'ahR', 6) + t(240, wy + 75, 'water resistance 900 N', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) +
    farrow(330, wy - 140, 270, wy - 140, C.rust, 'ahR', 4) + t(300, wy - 158, 'wind 200 N', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) +
    t(860, 150, 'forwards = positive →', { size: 16, anchor: 'end', fill: C.muted, weight: 600 }) +
    steps(30, 460, 840, [
      ['resultant force = 1500 − 900 − 200 = 400 N forwards', { weight: 700 }],
      ['a = F ÷ m = 400 ÷ 400 = 1.0 m/s²', { weight: 700, fill: C.tealDark }],
      ['Zero resultant: balanced, so at rest or constant velocity. Only an unbalanced force accelerates.', { size: 16, fill: C.muted }],
    ], { lh: 36, size: 19 });
  add('01-resultant-force-boat', svg(900, 600, 'Worked example: the resultant force on a boat', body),
    'A 400 kg boat with an engine force of 1500 N forwards, water resistance of 900 N and a wind force of 200 N backwards. The resultant force is 400 N forwards, so a = 400 ÷ 400 = 1.0 m/s².',
    'Add forces in the positive direction, subtract the others, then use F = m × a.',
    '## Vectors, scalars and resultant force');
}

// 02 Stopping distance
{
  const bar = (y, lab, tw, bw) => t(50, y + 28, lab, { size: 17, weight: 700 }) + rect(190, y, tw, 42, { fill: C.cream, stroke: C.olive, sw: 2 }) + rect(190 + tw, y, bw, 42, { fill: '#f6e3d6', stroke: C.rust, sw: 2 });
  const body = panel(30, 110, 840, 200) +
    rect(190, 135, 220, 46, { fill: C.cream, stroke: C.olive, sw: 2.5 }) + rect(410, 135, 420, 46, { fill: '#f6e3d6', stroke: C.rust, sw: 2.5 }) +
    t(300, 164, 'thinking distance', { size: 17, weight: 700, anchor: 'middle' }) + t(620, 164, 'braking distance', { size: 17, weight: 700, anchor: 'middle' }) +
    ln(190, 200, 830, 200, { w: 2 }) + ln(190, 192, 190, 208, { w: 2 }) + ln(830, 192, 830, 208, { w: 2 }) + t(510, 228, 'stopping distance = thinking distance + braking distance', { size: 18, weight: 700, anchor: 'middle' }) +
    t(55, 164, 'at constant', { size: 15, fill: C.muted }) + t(55, 182, 'speed, then', { size: 15, fill: C.muted }) + t(55, 200, 'brakes act', { size: 15, fill: C.muted }) +
    t(300, 270, 'during the reaction time', { size: 15, anchor: 'middle', fill: C.olive }) + t(620, 270, 'while the brakes act', { size: 15, anchor: 'middle', fill: C.rust }) +
    card(30, 325, 410, 210, 'Thinking distance increases with', '', { fill: C.cream, edge: C.olive, tfill: C.olive }) +
    blist(55, 400, ['• higher speed', '• longer reaction time: tiredness,', '   alcohol, some drugs, distractions', '   such as a mobile phone'], { size: 16 }, 24) +
    card(460, 325, 410, 210, 'Braking distance increases with', '', { fill: '#f6e3d6', edge: C.rust, tfill: C.rust }) +
    tl(485, 400, ['• higher speed', '• larger mass of the vehicle', '• wet, icy or loose road (less friction)', '• worn tyres or worn brakes'], { size: 16 }, 24) +
    steps(30, 550, 840, [
      ['thinking distance = speed × reaction time   (reaction time 0.70 s)'],
      ['20 m/s: 20 × 0.70 = 14 m        40 m/s: 40 × 0.70 = 28 m (doubles)', { weight: 700, fill: C.tealDark }],
    ], { lh: 36, size: 18 });
  add('02-stopping-distance', svg(900, 660, 'Stopping distance', body),
    'A bar split into thinking distance, travelled at constant speed during the reaction time, and braking distance, travelled while the brakes act. Factors: speed and reaction time affect thinking distance; speed, mass, road conditions and worn tyres or brakes affect braking distance. At 0.70 s, 20 m/s gives 14 m and 40 m/s gives 28 m.',
    'Mass and road conditions affect braking distance only; reaction time affects thinking distance only.',
    '## Stopping distance (1.19–1.20)');
}

// 03 Terminal velocity and parachute
{
  const gx = 110, gy = 340, gw = 700, gh = 200;
  const v = (tt) => (tt < 0.5 ? 0.92 * (1 - Math.exp(-tt / 0.12)) : 0.32 + (0.92 - 0.32) * Math.exp(-(tt - 0.5) / 0.03));
  let d = ''; for (let i = 0; i <= 200; i++) { const tt = i / 200; d += `${i ? 'L' : 'M'}${(gx + tt * gw).toFixed(1)},${(gy - v(tt) * gh).toFixed(1)} `; }
  const mark = (tt, lab) => { const x = gx + tt * gw, y = gy - v(tt) * gh; return circ(x, y, 7, { fill: C.mustard, stroke: C.ink, sw: 2 }) + t(x, y - 14, lab, { size: 17, weight: 700, anchor: 'middle' }); };
  const fd = (x, lab, drag, note, chute = false) => {
    const cy = 520;
    return (chute ? path(`M${x - 30},${cy - 52} A30,24 0 0 1 ${x + 30},${cy - 52} Z`, { fill: C.rust, w: 2.5 }) + path(`M${x - 30},${cy - 52} L${x},${cy - 30} M${x + 30},${cy - 52} L${x},${cy - 30}`, { w: 1.5 }) : '') +
      person(x, cy) + farrow(x + 22, cy - 10, x + 22, cy + 70, C.ink, 'ah', 4) + (drag ? farrow(x - 22, cy + 10, x - 22, cy + 10 - drag, C.tealDark, 'ahT', 4) : '') +
      t(x, 625, lab, { size: 17, weight: 700, anchor: 'middle' }) + t(x, 647, note, { size: 15, anchor: 'middle', fill: C.muted });
  };
  const body = axes(gx, gy, gw + 30, gh + 40, 'time', 'velocity') + path(d, { stroke: C.tealDark, w: 4 }) +
    ln(gx + 0.5 * gw, gy, gx + 0.5 * gw, gy - gh - 20, { c: C.olive, w: 2, dash: '6 5' }) + t(gx + 0.5 * gw + 8, gy - gh - 8, 'parachute opens', { size: 15, fill: C.olive, weight: 600 }) +
    mark(0.08, '1') + mark(0.4, '2') + mark(0.53, '3') + mark(0.85, '4') +
    t(gx + 0.3 * gw, gy - 0.92 * gh - 22, 'terminal velocity', { size: 15, fill: C.tealDark, weight: 600, anchor: 'middle' }) + t(gx + 0.85 * gw, gy - 0.32 * gh + 30, 'lower terminal velocity', { size: 15, fill: C.tealDark, weight: 600, anchor: 'middle' }) +
    fd(160, '1  accelerates', 25, 'air resistance &lt; weight') + fd(360, '2  terminal velocity', 80, 'air resistance = weight') +
    fd(560, '3  decelerates', 130, 'air resistance &gt; weight', true) + fd(760, '4  lower terminal', 80, 'air resistance = weight', true) +
    farrow(60, 690, 90, 690, C.ink, 'ah', 4) + t(98, 696, 'weight', { size: 15 }) + farrow(190, 690, 220, 690, C.tealDark, 'ahT', 4) + t(228, 696, 'air resistance', { size: 15 }) +
    t(860, 696, 'Velocity is still downwards at 3: it decreases.', { size: 15, anchor: 'end', fill: C.muted });
  add('03-terminal-velocity-parachute', svg(900, 715, 'Falling, terminal velocity and the parachute', body),
    'A velocity-time graph for a skydiver: velocity rises and levels off at terminal velocity, then drops when the parachute opens and levels at a lower terminal velocity. Force diagrams: air resistance less than weight while accelerating, equal at terminal velocity, greater just after the parachute opens, and equal again.',
    'Air resistance grows with speed until it equals weight; a parachute makes it bigger, so the skydiver slows to a lower terminal velocity.',
    '## Falling objects and terminal velocity (1.21)');
}

// 04 Spring practical and graphs
{
  const sx = 170;
  let coil = `M${sx},170`; for (let i = 0; i < 12; i++) coil += ` l${i % 2 ? -22 : 22},12`;
  const app = panel(30, 110, 360, 470) + rect(60, 130, 16, 370, { fill: C.rockDark, sw: 2 }) + rect(40, 500, 120, 14, { fill: C.rockDark, sw: 2 }) + ln(60, 132, 260, 132, { w: 8 }) + ln(sx, 132, sx, 170, { w: 3 }) + path(coil + ` l0,14`, { w: 3 }) +
    ln(sx, 328, 290, 328, { c: C.rust, w: 2.5 }) + t(296, 334, 'pointer', { size: 15, fill: C.rust, weight: 600 }) +
    rect(sx - 26, 342, 52, 30, { fill: C.rockDark, sw: 2.5, rx: 3 }) + rect(sx - 26, 374, 52, 30, { fill: C.rockDark, sw: 2.5, rx: 3 }) + ln(sx, 328, sx, 342, { w: 3 }) + ln(sx, 372, sx, 374, { w: 3 }) +
    t(sx, 428, '100 g masses', { size: 15, anchor: 'middle', fill: C.muted }) + t(sx, 446, '(1.0 N each)', { size: 15, anchor: 'middle', fill: C.muted }) +
    rect(250, 150, 30, 330, { fill: C.cream, stroke: C.olive, sw: 2 }) + Array.from({ length: 23 }, (_, i) => ln(250, 160 + i * 14, i % 5 ? 260 : 268, 160 + i * 14, { c: C.olive, w: 1.5 })).join('') + t(265, 500, 'metre rule', { size: 15, anchor: 'middle', fill: C.olive }) +
    para(50, 530, ['Extension = new length − original', 'length. Read at eye level.'], 320, { size: 15 }, 20);
  const gx = 450, gy = 520;
  const g = panel(410, 110, 460, 470) + axes(gx, gy, 390, 370, 'extension / m', 'force / N') +
    path(`M${gx},${gy} L${gx + 200},${gy - 210} Q${gx + 280},${gy - 270} ${gx + 360},${gy - 290}`, { stroke: C.tealDark, w: 4 }) + circ(gx + 200, gy - 210, 6, { fill: C.mustard, stroke: C.ink, sw: 2 }) +
    t(gx + 215, gy - 220, 'limit of proportionality', { size: 15, weight: 600 }) + t(gx + 20, gy - 300, 'spring: straight line', { size: 15, weight: 700, fill: C.tealDark }) + t(gx + 20, gy - 282, 'through origin', { size: 15, weight: 700, fill: C.tealDark }) + t(gx + 20, gy - 264, '(Hooke\'s law)', { size: 15, weight: 700, fill: C.tealDark }) +
    path(`M${gx},${gy} C${gx + 140},${gy - 40} ${gx + 260},${gy - 60} ${gx + 360},${gy - 200}`, { stroke: C.rust, w: 4 }) + t(gx + 260, gy - 40, 'rubber band: curved', { size: 15, weight: 700, fill: C.rust }) + t(gx + 260, gy - 22, '(elastic, not Hooke)', { size: 15, fill: C.rust });
  const body = app + g + panel(30, 595, 840, 62, C.cream, C.olive) + t(450, 632, 'Elastic: returns to its original shape when the load is removed. Overloaded: permanently deformed.', { size: 16, weight: 600, anchor: 'middle' });
  add('04-spring-practical-and-graph', svg(900, 680, 'Stretching a spring: the practical and the graph', body),
    'A spring hangs from a clamp beside a metre rule with a pointer and 100 g masses. A force-extension graph: the spring gives a straight line through the origin up to the limit of proportionality, then curves; a rubber band gives a curve.',
    'Extension is proportional to force in the initial straight region: Hooke\'s law.',
    '## Forces and shape (1.22–1.24)');
}

// 05 Explosion: conservation of momentum
{
  const trolley = (x, w, fill, lab) => rect(x, 220, w, 60, { fill, sw: 3, rx: 6 }) + circ(x + 20, 292, 12, { fill: C.ink, sw: 0 }) + circ(x + w - 20, 292, 12, { fill: C.ink, sw: 0 }) + t(x + w / 2, 257, lab, { size: 18, weight: 700, anchor: 'middle' });
  let spring = 'M420,250'; for (let i = 0; i < 8; i++) spring += ` l7,${i % 2 ? 12 : -12}`;
  const before = panel(30, 110, 410, 240) + t(235, 146, 'Before: at rest', { size: 19, weight: 700, anchor: 'middle' }) + trolley(150, 130, C.cream, '2.0 kg') + trolley(280, 150, C.tealLight, '3.0 kg') + ln(45, 306, 425, 306, { w: 3 }) + t(235, 335, 'total momentum = 0', { size: 17, weight: 600, anchor: 'middle' });
  const after = panel(460, 110, 410, 240) + t(665, 146, 'After: spring released', { size: 19, weight: 700, anchor: 'middle' }) + trolley(500, 120, C.cream, '2.0 kg') + trolley(700, 140, C.tealLight, '3.0 kg') + ln(475, 306, 855, 306, { w: 3 }) +
    farrow(580, 195, 495, 195, C.rust, 'ahR', 5) + t(560, 182, 'v = ?', { size: 16, weight: 700, fill: C.rust }) + farrow(760, 195, 830, 195, C.tealDark, 'ahT', 5) + t(795, 182, '0.40 m/s', { size: 16, weight: 700, fill: C.tealDark });
  const body = before + after +
    steps(30, 370, 840, [
      ['Take right as positive.   momentum before = 0'],
      ['momentum after = (3.0 × 0.40) + (2.0 × v) = 0'],
      ['1.2 + 2.0v = 0   →   v = −0.60 m/s, so 0.60 m/s to the left', { weight: 700, fill: C.tealDark }],
    ], { lh: 38, size: 19 }) +
    panel(30, 530, 840, 90) + t(55, 565, 'Newton\'s third law: the spring pushes each trolley with equal and opposite', { size: 17 }) + t(55, 591, 'forces for the same time, so the momenta (1.2 kg m/s each) are equal and opposite.', { size: 17 });
  add('05-explosion-momentum', svg(900, 640, 'Conservation of momentum: an explosion', body),
    'Two trolleys of 2.0 kg and 3.0 kg at rest with a spring between them. After release the 3.0 kg trolley moves right at 0.40 m/s. Momentum before is zero, so 1.2 + 2.0v = 0 and the 2.0 kg trolley moves left at 0.60 m/s.',
    'Total momentum stays zero: the lighter trolley moves off faster the other way.',
    '## Momentum (1.25P–1.28P)');
}

// 06 Safety features: longer time, smaller force
{
  const gx = 110, gy = 450;
  const body = panel(30, 110, 840, 400) + axes(gx, gy, 700, 300, 'time / s', 'force / N') +
    rect(gx + 4, gy - 260, 40, 260, { fill: '#f6e3d6', stroke: C.rust, sw: 2.5 }) + t(gx + 60, gy - 240, 'about 0.05 s against the dashboard:', { size: 16, weight: 700, fill: C.rust }) + t(gx + 60, gy - 220, 'force ten times larger', { size: 16, fill: C.rust }) +
    rect(gx + 4, gy - 26, 400, 26, { fill: C.tealLight, stroke: C.tealDark, sw: 2.5 }) + t(gx + 60, gy - 40, '0.50 s with seat belt and airbag: 2100 N', { size: 16, weight: 700, fill: C.tealDark }) +
    t(gx + 260, gy - 120, 'Same change in momentum in both cases', { size: 16, anchor: 'middle', fill: C.muted }) + t(gx + 260, gy - 100, '(equal areas under force × time)', { size: 15, anchor: 'middle', fill: C.muted }) +
    steps(30, 525, 840, [
      ['70 kg passenger, 15 m/s → 0 in 0.50 s'],
      ['change in momentum = 70 × 0 − 70 × 15 = −1050 kg m/s'],
      ['F = (mv − mu) ÷ t = −1050 ÷ 0.50 = −2100 N, so 2100 N against the motion', { weight: 700, fill: C.tealDark }],
    ], { lh: 36, size: 18 }) +
    t(450, 695, 'Crumple zones, airbags, seat belts, cycle helmets and crash mats all increase the stopping time.', { size: 16, anchor: 'middle', fill: C.muted });
  add('06-safety-features-force-time', svg(900, 720, 'Why a longer stopping time means a smaller force', body),
    'Force against time for stopping a 70 kg passenger moving at 15 m/s. Over 0.50 s with a seat belt and airbag the force is 2100 N; over about 0.05 s against a dashboard it is ten times larger. The momentum change, 1050 kg m/s, is the same.',
    'The same change in momentum over a longer time needs a smaller force.',
    '## Momentum (1.25P–1.28P)');
}

// 07 Beam on two supports
{
  const bx1 = 150, bx2 = 750, by = 250, sc = (bx2 - bx1) / 2.0;
  const lx = bx1 + 0.5 * sc;
  const tri = (x) => path(`M${x},${by + 20} L${x - 24},${by + 60} L${x + 24},${by + 60} Z`, { fill: C.tealLight, w: 2.5 });
  const body = panel(30, 110, 840, 330) + rect(bx1, by, bx2 - bx1, 20, { fill: C.cream, sw: 2.5 }) + tri(bx1) + tri(bx2) +
    t(bx1, by + 88, 'A', { size: 19, weight: 700, anchor: 'middle' }) + t(bx2, by + 88, 'B', { size: 19, weight: 700, anchor: 'middle' }) +
    farrow(lx, 150, lx, by - 4, C.rust, 'ahR', 7) + t(lx + 14, 172, '600 N load', { size: 17, weight: 700, fill: C.rust }) +
    farrow(bx1 + 40, by + 150, bx1 + 40, by + 24, C.tealDark, 'ahT', 6) + t(bx1 + 54, by + 140, 'R_A = 450 N', { size: 17, weight: 700, fill: C.tealDark }) +
    farrow(bx2 - 40, by + 100, bx2 - 40, by + 24, C.tealDark, 'ahT', 4) + t(bx2 - 54, by + 140, 'R_B = 150 N', { size: 17, weight: 700, fill: C.tealDark, anchor: 'end' }) +
    ln(bx1, 210, lx, 210, { c: C.olive, w: 2 }) + ln(bx1, 202, bx1, 218, { c: C.olive, w: 2 }) + ln(lx, 202, lx, 218, { c: C.olive, w: 2 }) + t((bx1 + lx) / 2, 200, '0.50 m', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) +
    ln(bx1, 425, bx2, 425, { c: C.olive, w: 2 }) + ln(bx1, 417, bx1, 433, { c: C.olive, w: 2 }) + ln(bx2, 417, bx2, 433, { c: C.olive, w: 2 }) + t(450, 418, '2.0 m (light beam)', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) +
    steps(30, 455, 840, [
      ['Moments about A (removes R_A):   R_B × 2.0 = 600 × 0.50   →   R_B = 150 N'],
      ['Upward forces balance the load:   R_A + R_B = 600   →   R_A = 450 N', { weight: 700, fill: C.tealDark }],
    ], { lh: 38, size: 18 }) +
    t(450, 585, 'The support nearer the load carries more. Load at the centre: 300 N each.', { size: 16, anchor: 'middle', fill: C.muted });
  add('07-beam-on-two-supports', svg(900, 610, 'Worked example: a beam on two supports', body),
    'A light 2.0 m beam on supports A and B with a 600 N load 0.50 m from A. Taking moments about A gives R_B × 2.0 = 600 × 0.50, so R_B = 150 N, and R_A = 600 − 150 = 450 N.',
    'Take moments about one support, then balance the upward and downward forces.',
    '## Moments (1.30P–1.33P)');
}
