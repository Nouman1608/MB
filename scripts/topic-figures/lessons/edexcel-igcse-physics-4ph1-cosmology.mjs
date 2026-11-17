import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-cosmology';
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

const grad = `<defs><linearGradient id="spec" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="${C.blue}"/><stop offset="0.38" stop-color="${C.teal}"/><stop offset="0.68" stop-color="${C.mustard}"/><stop offset="1" stop-color="${C.rust}"/></linearGradient></defs>`;
const galaxy = (cx, cy, s = 1) => `<g transform="translate(${cx} ${cy}) scale(${s})"><ellipse rx="34" ry="13" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5" transform="rotate(-20)"/><ellipse rx="12" ry="7" fill="${C.mustard}" transform="rotate(-20)"/></g>`;
const star = (x, y, r = 7, fill = C.mustard) => { let d = ''; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5, rr = i % 2 ? r * 0.45 : r; d += `${i ? 'L' : 'M'}${(x + rr * Math.cos(a)).toFixed(1)},${(y + rr * Math.sin(a)).toFixed(1)} `; } return `<path d="${d}Z" fill="${fill}" stroke="${C.ink}" stroke-width="1.2"/>`; };
const wave = (x, y, w, lam, amp, col, sw = 3.5) => { let d = `M${x},${y}`; for (let i = 1; i <= w; i += 2) d += ` L${x + i},${(y - amp * Math.sin((2 * Math.PI * i) / lam)).toFixed(1)}`; return path(d, { stroke: col, w: sw }); };

// 01 Past evolution of the universe
{
  const ax = 70, ay = 300, ex = 860, half = 150;
  const top = (x) => ay - (half * (x - ax)) / (ex - ax), bot = (x) => ay + (half * (x - ax)) / (ex - ax);
  const xs = [ax, 200, 340, 510, 690, ex];
  const fills = [C.rust, '#d68a52', C.mustard, C.cream, C.tealLight];
  let cone = '';
  for (let i = 0; i < 5; i++) cone += `<path d="M${xs[i]},${top(xs[i])} L${xs[i + 1]},${top(xs[i + 1])} L${xs[i + 1]},${bot(xs[i + 1])} L${xs[i]},${bot(xs[i])} Z" fill="${fills[i]}"/>`;
  cone += path(`M${ex},${top(ex)} L${ax},${ay} L${ex},${bot(ex)}`, { w: 3 });
  for (let i = 1; i < 5; i++) cone += ln(xs[i], top(xs[i]) + 2, xs[i], bot(xs[i]) - 2, { c: '#ffffff', w: 2, dash: '5 5' });
  const sd = [[370, 290], [395, 315], [420, 285], [445, 320], [470, 300], [385, 260], [460, 340], [430, 255]].map(([x, y], i) => circ(x, y, i % 3 ? 4 : 6, { fill: i % 3 ? C.ink : C.panel, sw: 1.5 })).join('');
  const gal = galaxy(560, 270, 0.8) + galaxy(620, 340, 0.7) + star(540, 330) + star(650, 255, 6) + star(600, 300, 5);
  const exp = galaxy(740, 230, 0.6) + galaxy(800, 350, 0.6) + arrow(770, 290, 845, 290, { w: 3, color: C.tealDark, marker: 'ahT' }) + arrow(760, 250, 830, 200, { w: 3, color: C.tealDark, marker: 'ahT' }) + arrow(760, 330, 830, 380, { w: 3, color: C.tealDark, marker: 'ahT' });
  const cols = [
    ['1', 'Tiny, hot', 'About 13.8 billion years ago: extremely small, hot and dense.'],
    ['2', 'Expands, cools', 'It began to expand, and cooled as it expanded.'],
    ['3', 'Particles, atoms', 'First particles, then nuclei and atoms of mainly hydrogen and helium.'],
    ['4', 'Stars, galaxies', 'Gravity pulled matter into clouds that formed stars and galaxies.'],
    ['5', 'Still, expanding', 'The universe is still expanding today.'],
  ];
  const cw = 168;
  const labels = cols.map(([n, h, d], i) => { const x = 30 + i * cw; return panel(x + 2, 480, cw - 6, 190) + badge(x + 28, 512, 17, n, i === 4 ? C.mustard : C.cream) + t(x + 52, 518, h.split(', ')[0], { size: 16, weight: 700 }) + (h.includes(',') ? t(x + 52, 538, h.split(', ')[1], { size: 16, weight: 700 }) : '') + para(x + 16, 572, d, cw - 34, { size: 15, fill: C.muted }, 20); }).join('');
  const body = cone + star(ax + 12, ay, 9, '#ffffff') + sd + gal + exp +
    arrow(80, 135, 860, 135, { w: 3 }) + t(80, 124, 'about 13.8 billion years ago', { size: 16, fill: C.muted }) + t(860, 124, 'today', { size: 16, anchor: 'end', fill: C.muted, weight: 600 }) +
    t(130, 470, 'hot', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 }) + t(780, 470, 'cooler', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 }) +
    labels +
    panel(30, 690, 840, 62, C.cream, C.olive) + t(450, 728, 'Not an explosion from one place: space itself expands everywhere at once.', { size: 17, weight: 600, anchor: 'middle' });
  add('01-big-bang-history', svg(900, 775, 'The history of the universe', grad + body),
    'A widening cone from a tiny hot point about 13.8 billion years ago to today. Along it: the universe expands and cools, the first particles and atoms of hydrogen and helium form, gravity builds stars and galaxies, and the universe is still expanding.',
    'From tiny, hot and dense to the expanding universe of stars and galaxies today.',
    '## The past evolution of the universe (8.13P)');
}

// 02 Spectral lines shifted
{
  const x0 = 170, x1 = 850, X = (l) => x0 + ((l - 400) * (x1 - x0)) / 300; // schematic wavelength scale
  const ref = [434, 486, 527, 589, 656], z = 0.05;
  const band = (y, lines, lab, sub) => t(30, y + 26, lab, { size: 18, weight: 700 }) + t(30, y + 48, sub, { size: 15, fill: C.muted }) +
    rect(x0, y, x1 - x0, 60, { fill: 'url(#spec)', sw: 2.5, rx: 4 }) + lines.map((l) => ln(X(l), y + 3, X(l), y + 57, { w: 6, cap: 'butt' })).join('');
  const shifted = ref.map((l) => l * (1 + z));
  const links = ref.map((l, i) => arrow(X(l), 222, X(shifted[i]) - 2, 283, { w: 2.5, color: C.rust, marker: 'ahR' })).join('');
  const body = grad + band(150, ref, 'Laboratory', 'reference λ₀') + band(290, shifted, 'Distant', 'galaxy') + links +
    t(x0, 140, 'shorter wavelength (blue end)', { size: 16, fill: C.blue, weight: 600 }) + t(x1, 140, 'longer wavelength (red end)', { size: 16, fill: C.rust, weight: 600, anchor: 'end' }) +
    card(30, 390, 410, 160, 'Same pattern of lines', 'So it is the same element: the lines are recognisably the same set.', { fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark, bfill: C.ink }) +
    card(460, 390, 410, 160, 'Every line at a longer λ', 'Red-shift: the galaxy is moving away. A source moving towards us would show blue-shift.', { fill: C.cream, edge: C.olive, tfill: C.rust, bfill: C.ink });
  add('02-red-shifted-spectral-lines', svg(900, 575, 'Red-shift in the light from a galaxy', body),
    'Two absorption spectra. The laboratory spectrum has dark lines at the reference wavelengths. The galaxy spectrum shows the same pattern of lines, each moved towards the longer-wavelength red end.',
    'Same pattern of lines, all moved to longer wavelengths: the galaxy is moving away.',
    '## Red-shift in galaxies');
}

// 03 Worked examples
{
  const body = panel(30, 110, 840, 70, C.tealLight, C.tealDark) +
    t(190, 155, 'Δλ / λ₀ = v / c', { size: 21, weight: 700, anchor: 'middle' }) + t(450, 155, 'Δλ = λ − λ₀', { size: 21, weight: 700, anchor: 'middle' }) + t(710, 155, 'c = 3.0 × 10⁸ m/s', { size: 21, weight: 700, anchor: 'middle' }) +
    steps(30, 200, 410, [
      ['Example 1: find v', { weight: 700, size: 20 }],
      ['λ₀ = 486 nm,  λ = 495.72 nm', { fill: C.muted }],
      ['Δλ = 495.72 − 486 = 9.72 nm'],
      ['Δλ / λ₀ = 9.72 / 486 = 0.020'],
      ['v = 0.020 × 3.0 × 10⁸'],
      ['= 6.0 × 10⁶ m/s, moving away', { dx: 22, weight: 700, fill: C.tealDark }],
    ], { lh: 40 }) +
    steps(460, 200, 410, [
      ['Example 2: find λ', { weight: 700, size: 20 }],
      ['v = 1.5 × 10⁷ m/s,  λ₀ = 410 nm', { fill: C.muted }],
      ['v / c = 1.5 × 10⁷ / 3.0 × 10⁸'],
      ['= 0.050', { dx: 50 }],
      ['Δλ = 0.050 × 410 = 20.5 nm'],
      ['λ = 410 + 20.5 = 430.5 nm', { weight: 700, fill: C.tealDark }],
    ], { lh: 40 }) +
    t(450, 500, 'Subtract first to get Δλ, then divide by λ₀ (the reference wavelength, not the observed one).', { size: 17, anchor: 'middle', weight: 600 }) +
    t(450, 528, 'If asked for the observed wavelength, add Δλ to λ₀.', { size: 17, anchor: 'middle', fill: C.muted });
  add('03-red-shift-worked-examples', svg(900, 555, 'Using the red-shift equation', body),
    'Two worked examples. A 486 nm line seen at 495.72 nm gives Δλ / λ₀ = 0.020 and v = 6.0 × 10⁶ m/s. A galaxy receding at 1.5 × 10⁷ m/s gives v / c = 0.050, Δλ = 20.5 nm and an observed 410 nm line at 430.5 nm.',
    'Find Δλ, divide by λ₀, and multiply by c; or work backwards and add Δλ to λ₀.',
    '## The red-shift equation (8.16P)');
}

// 04 Red-shift and distance
{
  const gx = [280, 480, 680], sc = [0.9, 0.8, 0.7], shift = [14, 36, 62], arr = [40, 70, 100];
  const body = grad + circ(90, 230, 32, { fill: C.teal, stroke: C.tealDark }) + t(90, 290, 'Earth', { size: 17, anchor: 'middle', weight: 700 }) +
    gx.map((x, i) => galaxy(x, 230, sc[i] * 1.4) + arrow(x + 40, 230, x + 40 + arr[i], 230, { w: 3.5 + i, color: C.rust, marker: 'ahR' }) +
      rect(x - 90, 320, 180, 40, { fill: 'url(#spec)', sw: 2, rx: 3 }) + ln(x - 50, 322, x - 50, 358, { w: 2, dash: '4 4', c: '#ffffff' }) + ln(x - 50 + shift[i], 322, x - 50 + shift[i], 358, { w: 5, cap: 'butt' }) +
      t(x, 390, ['near', 'further', 'furthest'][i], { size: 18, weight: 700, anchor: 'middle' }) +
      t(x, 412, ['small red-shift', 'bigger red-shift', 'biggest red-shift'][i], { size: 16, anchor: 'middle', fill: C.rust, weight: 600 })).join('') +
    arrow(160, 460, 860, 460, { w: 3 }) + t(160, 490, 'distance from Earth increases →  red-shift increases →  galaxy moves away faster', { size: 17, weight: 600 }) +
    t(480, 160, 'arrow length = speed moving away', { size: 16, fill: C.muted, anchor: 'middle' }) +
    t(450, 535, 'dashed line: reference position of the line (laboratory)', { size: 15, fill: C.muted, anchor: 'middle' }) +
    panel(30, 560, 840, 70, C.cream, C.olive) + t(450, 602, 'Almost all distant galaxies are red-shifted: they are moving away from us.', { size: 18, weight: 600, anchor: 'middle' });
  add('04-red-shift-and-distance', svg(900, 650, 'Further galaxies, bigger red-shift', body),
    'Three galaxies at increasing distances from Earth, each moving away, the furthest fastest. Under each a spectrum strip shows the same line moved further from its reference position the more distant the galaxy.',
    'The further away a galaxy is, the bigger its red-shift and the faster it is moving away.',
    '## Red-shift and distance (8.17P)');
}

// 05 Balloon analogy
{
  const dots = [[-45, -40, 'A'], [15, -60, 'B'], [50, 5, 'C'], [-25, 35, 'D'], [25, 55, 'E']];
  const balloon = (cx, cy, r, k, showArrows) => `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r * 1.12}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` +
    path(`M${cx - 8},${cy + r * 1.12 + 12} L${cx},${cy + r * 1.12} L${cx + 8},${cy + r * 1.12 + 12} Z`, { fill: C.ink, w: 2 }) +
    (showArrows ? dots.slice(1).map(([a, b]) => { const x1 = cx + dots[0][0] * k, y1 = cy + dots[0][1] * k, x2 = cx + a * k, y2 = cy + b * k; const L = Math.hypot(x2 - x1, y2 - y1); return ln(x1, y1, x2 - ((x2 - x1) * 14) / L, y2 - ((y2 - y1) * 14) / L, { c: C.rust, w: 2.5, dash: '6 5' }); }).join('') : '') +
    dots.map(([a, b, n]) => circ(cx + a * k, cy + b * k, 10, { fill: n === 'A' ? C.mustard : C.ink, sw: 2 }) + t(cx + a * k + 14, cy + b * k - 10, n, { size: 17, weight: 700 })).join('');
  const body = panel(30, 110, 300, 420) + t(180, 145, 'Earlier', { size: 21, weight: 700, anchor: 'middle' }) + balloon(180, 330, 100, 1, false) +
    arrow(345, 330, 405, 330, { w: 5 }) + t(375, 310, 'inflate', { size: 16, anchor: 'middle', fill: C.muted }) +
    panel(420, 110, 450, 420) + t(645, 145, 'Later', { size: 21, weight: 700, anchor: 'middle' }) + balloon(645, 330, 150, 1.7, true) +
    card(30, 550, 840, 150, '', '', {}) +
    tl(55, 588, ['• Every dot moves away from every other dot.', '• Dots that start further apart separate faster: more stretching space between them.', '• From any dot (A or any other) the view is the same: there is no centre on the surface.'], { size: 17 }, 34);
  add('05-balloon-analogy', svg(900, 720, 'Expanding space: dots on a balloon', body),
    'A balloon with five dots, small and then inflated. As the balloon stretches every dot moves away from every other, and dots that started further apart move apart more. No dot is at the centre.',
    'Space stretches between all galaxies, so every observer sees the others moving away.',
    '## Why red-shift shows the universe is expanding (8.18P)');
}

// 06 Explanation chain
{
  const box = (x, y, w, h, s, fill, edge) => panel(x, y, w, h, fill, edge) + para(x + 20, y + 36, s, w - 40, { size: 18, weight: 600 }, 24);
  const body = box(30, 115, 400, 100, 'Almost all distant galaxies are red-shifted', C.panel) + arrow(432, 165, 466, 165, { w: 4 }) +
    box(470, 115, 400, 100, 'Further galaxies are more red-shifted, so they move away faster', C.panel) + arrow(670, 218, 670, 250, { w: 4 }) +
    box(470, 255, 400, 100, 'Simplest explanation: space itself is expanding', C.tealLight, C.tealDark) + arrow(468, 305, 434, 305, { w: 4 }) +
    box(30, 255, 400, 100, 'Run it backwards: galaxies were once much closer together', C.panel) + arrow(230, 358, 230, 390, { w: 4 }) +
    box(30, 395, 840, 80, 'The whole universe was once in a tiny, hot, dense state: the Big Bang', C.cream, C.olive) +
    t(450, 510, 'Earth is not at the centre: an observer in any galaxy sees the same pattern.', { size: 17, anchor: 'middle', fill: C.muted });
  add('06-red-shift-explanation-chain', svg(900, 535, 'From red-shift to the Big Bang', body),
    'A chain of five boxes: almost all galaxies are red-shifted; further ones are moving away faster; so space is expanding; running this backwards, galaxies were once closer; so the universe began tiny, hot and dense, the Big Bang.',
    'Link the observations in order: red-shift, faster with distance, expanding space, Big Bang.',
    '## Why red-shift shows the universe is expanding (8.18P)');
}

// 07 CMB
{
  const body = panel(30, 110, 520, 470) +
    t(55, 150, 'Early universe: extremely hot,', { size: 18, weight: 700 }) + t(55, 172, 'filled with high-energy radiation', { size: 18, weight: 700 }) +
    wave(60, 220, 460, 22, 18, C.rust) +
    arrow(290, 255, 290, 300, { w: 4 }) + t(305, 285, 'expansion stretches it', { size: 16, fill: C.muted }) +
    wave(60, 345, 460, 70, 22, C.mustard) +
    arrow(290, 385, 290, 430, { w: 4 }) + t(305, 415, 'stretched further', { size: 16, fill: C.muted }) +
    t(55, 465, 'Today: much longer wavelength, detected as microwaves', { size: 17, weight: 700, fill: C.tealDark }) +
    wave(60, 525, 460, 230, 26, C.tealDark) +
    panel(570, 110, 300, 470) + t(720, 150, 'Reaches Earth from', { size: 18, weight: 700, anchor: 'middle' }) + t(720, 172, 'every direction', { size: 18, weight: 700, anchor: 'middle' }) +
    circ(720, 350, 34, { fill: C.teal, stroke: C.tealDark }) + t(720, 356, 'Earth', { size: 15, anchor: 'middle', weight: 700 }) +
    Array.from({ length: 12 }, (_, i) => { const a = (i * Math.PI) / 6, c = Math.cos(a), s = Math.sin(a); return arrow(720 + 125 * c, 350 + 125 * s, 720 + 46 * c, 350 + 46 * s, { w: 3, color: C.tealDark, marker: 'ahT' }); }).join('') +
    t(720, 518, 'almost the same intensity', { size: 16, anchor: 'middle', fill: C.muted }) + t(720, 540, 'in all directions', { size: 16, anchor: 'middle', fill: C.muted }) +
    panel(30, 600, 840, 110, C.cream, C.olive) +
    t(55, 638, 'Big Bang theory: predicts this "afterglow" of the hot early universe.', { size: 17, weight: 600 }) +
    t(55, 668, 'Steady State theory: gives no explanation for it.', { size: 17, weight: 600 }) +
    t(55, 696, 'So the CMB is strong evidence for the Big Bang.', { size: 17, weight: 700, fill: C.rust });
  add('07-cosmic-microwave-background', svg(900, 730, 'Cosmic microwave background radiation', body),
    'Three waves, each longer than the last: high-energy radiation in the hot early universe is stretched as the universe expands and is detected today as microwaves. Arrows reach Earth from every direction with almost the same intensity.',
    'Expansion stretched the early radiation into the microwaves now arriving from every direction.',
    '## Cosmic microwave background radiation (8.14P)');
}
