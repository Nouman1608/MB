import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-electromagnetic-induction';
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

const magnet = (x, y, w, h, nRight = true) => {
  const half = w / 2;
  const L = nRight ? ['S', C.tealDark] : ['N', C.rust], R = nRight ? ['N', C.rust] : ['S', C.tealDark];
  return rect(x, y, half, h, { fill: L[1], sw: 2.5 }) + rect(x + half, y, half, h, { fill: R[1], sw: 2.5 }) +
    t(x + half / 2, y + h / 2 + 7, L[0], { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(x + half * 1.5, y + h / 2 + 7, R[0], { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' });
};
const coil = (x, y, n, gap = 14, h = 56, col = C.ink) => Array.from({ length: n }, (_, i) => `<ellipse cx="${x + i * gap}" cy="${y}" rx="8" ry="${h / 2}" fill="none" stroke="${col}" stroke-width="3"/>`).join('');
const meter = (cx, cy, ang, { r = 34 } = {}) => {
  const a = ((ang - 90) * Math.PI) / 180;
  return path(`M${cx - r},${cy} A${r},${r} 0 0 1 ${cx + r},${cy} Z`, { fill: C.panel, w: 2.5 }) + ln(cx, cy - r, cx, cy - r + 7, { w: 2 }) +
    ln(cx, cy, cx + (r - 6) * Math.cos(a), cy + (r - 6) * Math.sin(a), { c: C.rust, w: 3.5 }) + circ(cx, cy, 4, { fill: C.ink, sw: 0 });
};
const acSym = (cx, cy, bg = C.panel) => circ(cx, cy, 20, { fill: bg }) + path(`M${cx - 11},${cy} q5.5,-11 11,0 q5.5,11 11,0`, { w: 2.5 });

// 01 Inducing a voltage: the coil-and-meter demonstration
{
  const rows = [
    ['Push the N pole in', 'right', true, 0, 30, 'deflects one way', C.ink],
    ['Hold the magnet still inside', 'still', true, 0, 0, 'zero', C.muted],
    ['Pull the magnet out', 'left', true, 0, -30, 'deflects the opposite way', C.ink],
    ['Push the S pole in', 'right', false, 0, -30, 'opposite way to the N pole going in', C.ink],
    ['Push the N pole in faster', 'fast', true, 0, 60, 'larger deflection', C.rust],
  ];
  let body = '';
  rows.forEach(([lab, mv, nRight, , ang, res, col], i) => {
    const y = 110 + i * 102;
    body += panel(30, y, 840, 92);
    const mx = mv === 'still' ? 100 : 75;
    body += magnet(mx, y + 32, 110, 30, nRight);
    if (mv === 'right') body += arrow(mx + 10, y + 20, mx + 75, y + 20, { w: 3.5, color: C.olive, marker: 'ahO' });
    if (mv === 'left') body += arrow(mx + 75, y + 20, mx + 10, y + 20, { w: 3.5, color: C.olive, marker: 'ahO' });
    if (mv === 'fast') body += arrow(mx - 5, y + 20, mx + 100, y + 20, { w: 6, color: C.rust, marker: 'ahR' }) + arrow(mx - 5, y + 20, mx + 60, y + 20, { w: 6, color: C.rust, marker: 'ahR' });
    body += coil(205, y + 47, 7, 13, 60) + wire([[205, y + 77], [205, y + 84], [330, y + 84], [330, y + 70]], { w: 2 }) + wire([[283, y + 77], [283, y + 80], [380, y + 80], [380, y + 70]], { w: 2 });
    body += meter(355, y + 70, ang, { r: 30 });
    body += t(420, y + 40, lab, { size: 18, weight: 700 }) + t(420, y + 66, 'meter: ' + res, { size: 17, fill: col, weight: col === C.muted ? 400 : 600 });
  });
  const f = [['faster', 'movement'], ['stronger', 'magnet'], ['more turns', 'on the coil'], ['iron core', 'in the coil']];
  body += panel(30, 625, 840, 115, C.cream, C.olive) + t(55, 660, 'Larger induced voltage with:', { size: 18, weight: 700 }) +
    f.map(([a, b], i) => rect(55 + i * 203, 675, 190, 52, { fill: C.panel, stroke: C.olive, sw: 2, rx: 8 }) + t(150 + i * 203, 697, a, { size: 17, weight: 700, anchor: 'middle' }) + t(150 + i * 203, 717, b, { size: 15, anchor: 'middle', fill: C.muted })).join('');
  add('01-coil-and-meter-induction', svg(900, 760, 'Inducing a voltage with a magnet and a coil', body),
    'A magnet and a coil joined to a centre-zero meter in five cases: pushing the N pole in deflects the needle one way, holding still gives zero, pulling out deflects it the other way, pushing the S pole in reverses it, and moving faster gives a larger deflection.',
    'A voltage is induced only while the field through the coil is changing.',
    '## Inducing a voltage (6.15)');
}

// 02 Two kinds of generator
{
  // left: magnet rotating inside a coil
  const cx = 200, cy = 330;
  const left = panel(30, 110, 410, 470) + t(235, 148, 'A magnet rotating', { size: 20, weight: 700, anchor: 'middle' }) + t(235, 172, 'inside a coil', { size: 20, weight: 700, anchor: 'middle' }) +
    coil(cx - 45, cy, 8, 13, 150, C.olive) +
    `<g transform="rotate(-30 ${cx} ${cy})">${magnet(cx - 60, cy - 15, 120, 30, true)}</g>` +
    path(`M${cx - 80},${cy - 115} A95,95 0 0 1 ${cx + 60},${cy - 120}`, { stroke: C.rust, w: 4, extra: 'marker-end="url(#ahR)"' }) + t(cx - 10, cy - 128, 'rotates', { size: 16, weight: 600, fill: C.rust, anchor: 'middle' }) +
    wire([[cx + 46, cy + 75], [cx + 46, cy + 130], [cx + 170, cy + 130], [cx + 170, cy - 20], [cx + 46, cy - 20]], { w: 2.5 }) + sMeter(cx + 170, cy + 55, 'V') +
    t(cx - 45, cy + 105, 'coil', { size: 16, weight: 700, fill: C.olive, anchor: 'end' }) +
    para(55, 505, 'Each pole sweeps past the coil, so the field keeps rising, falling and reversing. Bicycle dynamos and power stations.', 360, { size: 15, fill: C.muted }, 20);
  // right: coil rotating in field, end-on views
  const view = (ox, oy, horiz) => {
    let s = rect(ox, oy - 50, 34, 100, { fill: C.rust, sw: 2.5 }) + t(ox + 17, oy + 7, 'N', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }) +
      rect(ox + 300, oy - 50, 34, 100, { fill: C.tealDark, sw: 2.5 }) + t(ox + 317, oy + 7, 'S', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' });
    [-35, 0, 35].forEach((d) => { s += arrow(ox + 38, oy + d, ox + 294, oy + d, { w: 1.5, color: C.muted }); });
    const m = ox + 167;
    if (horiz) s += ln(m - 60, oy, m + 60, oy, { c: C.olive, w: 6 }) + circ(m - 60, oy, 9, { fill: C.cream, stroke: C.olive }) + circ(m + 60, oy, 9, { fill: C.cream, stroke: C.olive }) +
      arrow(m - 60, oy - 12, m - 60, oy - 46, { w: 3, color: C.rust, marker: 'ahR' }) + arrow(m + 60, oy + 12, m + 60, oy + 46, { w: 3, color: C.rust, marker: 'ahR' });
    else s += ln(m, oy - 45, m, oy + 45, { c: C.olive, w: 6 }) + circ(m, oy - 45, 9, { fill: C.cream, stroke: C.olive }) + circ(m, oy + 45, 9, { fill: C.cream, stroke: C.olive }) +
      arrow(m + 12, oy - 45, m + 50, oy - 45, { w: 3, color: C.rust, marker: 'ahR' }) + arrow(m - 12, oy + 45, m - 50, oy + 45, { w: 3, color: C.rust, marker: 'ahR' });
    return s + circ(m, oy, 4, { fill: C.ink, sw: 0 });
  };
  const right = panel(460, 110, 410, 470) + t(665, 148, 'A coil rotating in a field', { size: 20, weight: 700, anchor: 'middle' }) + t(665, 172, '(seen end-on, axle at the dot)', { size: 15, anchor: 'middle', fill: C.muted }) +
    view(498, 250, true) + t(665, 330, 'Coil horizontal: sides move at right', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(665, 350, 'angles to the field: MAXIMUM voltage', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    view(498, 440, false) + t(665, 520, 'Coil vertical: sides move along', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + t(665, 540, 'the field: ZERO voltage (for an instant)', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  add('02-two-kinds-of-generator', svg(900, 600, 'Generating electricity by rotation', left + right),
    'Left: a bar magnet rotates inside a coil connected to a voltmeter. Right: a coil rotating between N and S poles, seen end-on; when the coil is horizontal its sides move at right angles to the field and the voltage is greatest, and when vertical they move along the field and the voltage is zero.',
    'Rotation keeps the field through the coil changing, so an alternating voltage is induced.',
    '## Generators (6.16)');
}

// 03 Generator output and the factors
{
  const sine = (x0, y0, w, amp, cycles, col, sw = 4) => { let d = `M${x0},${y0}`; for (let i = 1; i <= w; i += 2) d += ` L${x0 + i},${(y0 - amp * Math.sin((2 * Math.PI * cycles * i) / w)).toFixed(1)}`; return path(d, { stroke: col, w: sw }); };
  const gx = 110, gy = 290, gw = 720;
  const top = axes(gx, gy + 130, gw + 30, 270, 'time / s', 'voltage / V') + ln(gx, gy, gx + gw + 10, gy, { w: 2, c: C.muted }) +
    sine(gx, gy, gw, 100, 2, C.tealDark) +
    t(gx + 90, gy - 112, 'coil horizontal: max', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    circ(gx + 180, gy, 7, { fill: C.rust, sw: 0 }) + t(gx + 168, gy + 28, 'coil vertical: zero', { size: 16, weight: 700, anchor: 'end', fill: C.rust }) +
    t(gx + 270, gy + 128 - 0, '', {}) + t(gx + 450, gy - 112, 'reverses every half turn: a.c.', { size: 16, weight: 600, anchor: 'middle', fill: C.muted }) +
    ln(gx, gy + 110, gx + 360, gy + 110, { c: C.olive, w: 2 }) + ln(gx, gy + 104, gx, gy + 116, { c: C.olive, w: 2 }) + ln(gx + 360, gy + 104, gx + 360, gy + 116, { c: C.olive, w: 2 }) + t(gx + 150, gy + 102, 'one turn', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  const mini = (x, title, sub, amp, cyc, col) => panel(x, 470, 270, 230) + t(x + 135, 502, title, { size: 18, weight: 700, anchor: 'middle' }) + t(x + 135, 524, sub, { size: 15, anchor: 'middle', fill: C.muted }) +
    ln(x + 20, 615, x + 250, 615, { w: 2 }) + ln(x + 20, 545, x + 20, 685, { w: 2 }) + sine(x + 20, 615, 230, 30, 2, C.panelEdge, 3) + sine(x + 20, 615, 230, amp, cyc, col, 3.5);
  const body = top + mini(30, 'Original', '', 30, 2, C.tealDark) + mini(315, 'Faster rotation', 'bigger peak AND higher frequency', 55, 4, C.rust) + mini(600, 'Stronger field or more turns', 'bigger peak, same frequency', 55, 2, C.olive) +
    t(450, 728, 'Grey line in each small graph: the original output for comparison.', { size: 15, anchor: 'middle', fill: C.muted });
  add('03-generator-output-and-factors', svg(900, 745, 'Generator output: alternating voltage', body),
    'Voltage against time for a rotating coil: a wave that is greatest when the coil is horizontal, zero when it is vertical, and reverses every half turn. Small graphs: faster rotation gives a bigger peak and more cycles; a stronger field or more turns gives a bigger peak at the same frequency.',
    'Faster rotation raises both peak voltage and frequency; a stronger field or more turns raises only the peak.',
    '## Generators (6.16)');
}

// 04 Transformer structure
{
  const core = rect(290, 140, 320, 280, { fill: C.rock, sw: 3, rx: 4 }) + rect(360, 210, 180, 140, { fill: C.bg, sw: 3, rx: 2 }) +
    Array.from({ length: 6 }, (_, i) => ln(296, 150 + i * 46, 354, 150 + i * 46, { c: C.rockDark, w: 1.5 })).join('');
  const turns = (x, n, y0, y1, col) => Array.from({ length: n }, (_, i) => { const y = y0 + (i * (y1 - y0)) / (n - 1); return `<ellipse cx="${x}" cy="${y}" rx="44" ry="7" fill="none" stroke="${col}" stroke-width="3.5"/>`; }).join('');
  const body = core + turns(325, 6, 225, 335, C.tealDark) + turns(575, 11, 200, 360, C.olive) +
    wire([[281, 225], [200, 225], [200, 260]], { w: 3 }) + wire([[281, 335], [200, 335], [200, 300]], { w: 3 }) + acSym(200, 280, C.bg) +
    wire([[619, 200], [700, 200], [700, 262]], { w: 3 }) + wire([[619, 360], [700, 360], [700, 298]], { w: 3 }) + sLamp(700, 280, { v: true, bg: C.bg }) +
    t(130, 250, 'a.c.', { size: 17, weight: 700, anchor: 'middle' }) + t(130, 272, 'supply', { size: 17, weight: 700, anchor: 'middle' }) + t(770, 285, 'load', { size: 17, weight: 700, anchor: 'middle' }) +
    t(325, 400 + 50, 'primary (input) coil', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(575, 450, 'secondary (output) coil', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) +
    t(450, 132, 'soft iron core (laminated)', { size: 17, weight: 700, anchor: 'middle' }) +
    t(450, 285, 'changing', { size: 15, anchor: 'middle', fill: C.muted }) + t(450, 305, 'magnetic field', { size: 15, anchor: 'middle', fill: C.muted }) +
    card(30, 480, 410, 150, 'Step-up', 'More turns on the secondary than the primary: larger output voltage, smaller current.', { fill: C.cream, edge: C.olive, tfill: C.olive, bfill: C.ink }) +
    card(460, 480, 410, 150, 'Step-down', 'Fewer turns on the secondary: smaller output voltage, larger current.', { fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark, bfill: C.ink }) +
    panel(30, 650, 840, 110) + t(450, 690, 'The coils are not electrically connected: the core carries the changing field.', { size: 17, weight: 600, anchor: 'middle' }) +
    t(450, 722, 'd.c. gives a steady field, which induces no voltage, so a transformer needs a.c.', { size: 17, anchor: 'middle', fill: C.rust, weight: 600 });
  add('04-transformer-structure', svg(900, 780, 'Inside a transformer', body),
    'A soft iron core with a primary coil on one side connected to an a.c. supply and a secondary coil with more turns on the other side connected to a load. Step-up transformers have more secondary turns; step-down have fewer.',
    'Alternating current in the primary makes a changing field that induces a voltage in the secondary.',
    '## Transformers (6.17P)');
}

// 05 Worked examples
{
  const body = panel(30, 110, 840, 70, C.tealLight, C.tealDark) +
    t(240, 155, 'Vp / Vs = Np / Ns', { size: 22, weight: 700, anchor: 'middle' }) + t(660, 155, 'Vp × Ip = Vs × Is', { size: 22, weight: 700, anchor: 'middle' }) +
    steps(30, 200, 410, [
      ['Example 1: secondary turns', { weight: 700, size: 20 }],
      ['Np = 2000, Vp = 230 V, Vs = 11.5 V', { fill: C.muted, size: 17 }],
      ['230 / 11.5 = 2000 / Ns'],
      ['Ns = 2000 × 11.5 / 230'],
      ['= 100 turns', { dx: 38, weight: 700, fill: C.tealDark }],
    ], { lh: 42 }) +
    steps(460, 200, 410, [
      ['Example 2: primary current', { weight: 700, size: 20 }],
      ['Vp = 230 V, Vs = 12 V, Is = 2.0 A', { fill: C.muted, size: 17 }],
      ['230 × Ip = 12 × 2.0 = 24 W'],
      ['Ip = 24 / 230'],
      ['= 0.10 A (2 s.f.)', { dx: 22, weight: 700, fill: C.tealDark }],
    ], { lh: 42 }) +
    t(450, 470, 'Check: the larger voltage is on the side with more turns.', { size: 17, weight: 600, anchor: 'middle' }) +
    t(450, 498, 'Stepping voltage down steps current up by the same factor: power in = power out (100% efficient).', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-transformer-worked-examples', svg(900, 520, 'Transformer calculations', body),
    'Example 1: with 2000 primary turns, 230 V in and 11.5 V out, Ns = 2000 × 11.5 / 230 = 100 turns. Example 2: 12 V at 2.0 A is 24 W, so the primary current from 230 V is 24 / 230 = 0.10 A.',
    'Use the turns ratio for voltages and power in = power out for currents.',
    '## Worked examples');
}

// 06 Transmission
{
  const box = (x, w, title, sub, fill, edge) => rect(x, 140, w, 120, { fill, stroke: edge, sw: 2.5, rx: 12 }) + t(x + w / 2, 186, title[0], { size: 17, weight: 700, anchor: 'middle' }) + (title[1] ? t(x + w / 2, 207, title[1], { size: 17, weight: 700, anchor: 'middle' }) : '') + t(x + w / 2, 240, sub, { size: 15, anchor: 'middle', fill: C.muted });
  const xs = [30, 205, 380, 555, 730], w = 140;
  const body = box(xs[0], w, ['Power', 'station'], 'tens of kV', C.cream, C.olive) + box(xs[1], w, ['Step-up', 'transformer'], 'raises V', C.tealLight, C.tealDark) +
    box(xs[2], w, ['Transmission', 'lines'], 'hundreds of kV', C.panel, C.ink) + box(xs[3], w, ['Step-down', 'transformer'], 'lowers V', C.tealLight, C.tealDark) + box(xs[4], w, ['Homes'], 'safer voltage', C.cream, C.olive) +
    [0, 1, 2, 3].map((i) => arrow(xs[i] + w + 3, 200, xs[i + 1] - 3, 200, { w: 3 })).join('') +
    panel(30, 290, 840, 260) + t(55, 326, 'Example 3 (illustrative): sending 100 MW', { size: 19, weight: 700 }) +
    t(55, 380, 'at 25 kV:', { size: 18, weight: 600 }) + t(170, 380, 'I = 100 000 000 / 25 000 = 4000 A', { size: 18 }) + rect(170, 394, 640, 26, { fill: C.rust, sw: 0, rx: 4 }) +
    t(55, 460, 'at 400 kV:', { size: 18, weight: 600 }) + t(170, 460, 'I = 100 000 000 / 400 000 = 250 A', { size: 18 }) + rect(170, 474, 40, 26, { fill: C.tealDark, sw: 0, rx: 4 }) +
    t(225, 493, 'sixteen times smaller (turns ratio 1 : 16)', { size: 16, fill: C.tealDark, weight: 600 }) +
    t(55, 532, 'bar length = current', { size: 15, fill: C.muted }) +
    panel(30, 570, 840, 70, C.cream, C.olive) + t(450, 612, 'Higher voltage → lower current for the same power → less heating of cables → less energy wasted', { size: 17, weight: 700, anchor: 'middle' });
  add('06-transmission-step-up-step-down', svg(900, 660, 'Why the grid uses high voltage', body),
    'A power station generates at tens of kilovolts; a step-up transformer raises this to hundreds of kilovolts for the lines; a step-down transformer lowers it for homes. Sending 100 MW at 25 kV needs 4000 A, but at 400 kV only 250 A.',
    'Same power at a higher voltage means a smaller current and less heating in the cables.',
    '## Transmission of electrical energy (6.18P)');
}
