import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-electric-charge';
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

const pos = (x, y, r = 11) => circ(x, y, r, { fill: C.cream, stroke: C.rust, sw: 2 }) + ln(x - r * 0.55, y, x + r * 0.55, y, { c: C.rust, w: 2.5 }) + ln(x, y - r * 0.55, x, y + r * 0.55, { c: C.rust, w: 2.5 });
const neg = (x, y, r = 11) => circ(x, y, r, { fill: C.tealLight, stroke: C.tealDark, sw: 2 }) + ln(x - r * 0.55, y, x + r * 0.55, y, { c: C.tealDark, w: 2.5 });
const rod = (x, y, w, fill, lab) => rect(x, y, w, 34, { fill, sw: 2.5, rx: 17 }) + t(x + w / 2, y + 23, lab, { size: 16, weight: 700, anchor: 'middle' });

// 01 Polythene vs acetate
{
  const row = (y, rodName, rodFill, gains) => {
    const b = panel(30, y, 840, 230) + t(55, y + 38, rodName + ' rod rubbed with a cloth', { size: 21, weight: 700 }) +
      rod(60, y + 80, 300, rodFill, rodName) +
      `<path d="M60,${y + 140} Q130,${y + 128} 210,${y + 140} Q290,${y + 152} 360,${y + 140} L360,${y + 185} Q290,${y + 197} 210,${y + 185} Q130,${y + 173} 60,${y + 185} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>` +
      t(210, y + 168, 'cloth', { size: 16, weight: 700, anchor: 'middle' }) +
      [110, 210, 310].map((x) => (gains ? arrow(x, y + 145, x, y + 120, { w: 3, color: C.tealDark, marker: 'ahT' }) : arrow(x, y + 118, x, y + 143, { w: 3, color: C.tealDark, marker: 'ahT' }))).join('') +
      t(385, y + 135, gains ? 'electrons move cloth → rod' : 'electrons move rod → cloth', { size: 17, weight: 600, fill: C.tealDark });
    const res = (yy, name, sign) => t(620, yy, name + ':', { size: 18, weight: 700, anchor: 'end' }) + [0, 1, 2].map((i) => (sign > 0 ? pos(645 + i * 28, yy - 6) : neg(645 + i * 28, yy - 6))).join('') + t(735, yy, sign > 0 ? 'positive' : 'negative', { size: 18, weight: 700, fill: sign > 0 ? C.rust : C.tealDark });
    return b + res(y + 180, 'rod', gains ? -1 : 1) + res(y + 212, 'cloth', gains ? 1 : -1) + t(385, y + 160, gains ? 'rod gains electrons' : 'rod loses electrons', { size: 16, fill: C.muted });
  };
  const body = row(110, 'Polythene', C.panel, true) + row(360, 'Acetate', C.cream, false) +
    panel(30, 610, 840, 70, C.tealLight, C.tealDark) + t(450, 642, 'Equal and opposite charges: every electron one gains, the other loses.', { size: 17, weight: 600, anchor: 'middle' }) +
    t(450, 666, 'Charge is transferred, not created.', { size: 17, anchor: 'middle', fill: C.muted });
  add('01-polythene-and-acetate-charging', svg(900, 700, 'Charging by friction: which way do electrons go?', body),
    'A polythene rod rubbed with a cloth gains electrons from the cloth, so the rod becomes negative and the cloth positive. An acetate rod rubbed with a cloth loses electrons to the cloth, so the rod becomes positive and the cloth negative.',
    'Gain electrons: negative. Lose electrons: positive. Only electrons move.',
    '## Charging by friction (2.23P, 2.24P)');
}

// 02 The practical
{
  const scene = (x, other, otherFill, otherSign, result) => {
    const cx = x + 205, ry = 220;
    const hang = ln(cx - 50, 150, cx - 50, ry - 14, { w: 2 }) + ln(x + 30, 148, x + 380, 148, { w: 5 }) +
      path(`M${cx - 66},${ry + 16} L${cx - 66},${ry - 14} L${cx - 34},${ry - 14} L${cx - 34},${ry + 16}`, { w: 2.5 }) +
      rod(cx - 170, ry - 1, 240, C.panel, '') + t(cx - 120, ry + 22, 'polythene', { size: 15, weight: 700, anchor: 'middle' }) + [18, 38, 58].map((d) => neg(cx + d, ry + 16, 9)).join('');
    const near = rod(cx + 95, ry - 1, 90, otherFill, '') + [0, 1, 2].map((i) => (otherSign < 0 ? neg(cx + 112 + i * 22, ry + 16, 9) : pos(cx + 112 + i * 22, ry + 16, 9))).join('') +
      tl(cx + 140, ry + 62, other, { size: 15, weight: 700, anchor: 'middle' }, 19);
    const turn = result === 'repel'
      ? path(`M${cx + 60},${ry - 12} Q${cx + 30},${ry - 45} ${cx - 10},${ry - 40}`, { stroke: C.rust, w: 4, extra: 'marker-end="url(#ahR)"' })
      : path(`M${cx + 20},${ry - 25} Q${cx + 55},${ry - 50} ${cx + 85},${ry - 22}`, { stroke: C.tealDark, w: 4, extra: 'marker-end="url(#ahT)"' });
    return panel(x, 110, 410, 330) + hang + near + turn + t(cx - 60, 180, 'paper stirrup', { size: 15, fill: C.muted, anchor: 'end' }) + t(cx - 60, 198, 'on a thread', { size: 15, fill: C.muted, anchor: 'end' }) +
      para(x + 30, 330, result === 'repel' ? 'The charged end swings away from the second rod.' : 'The charged end swings towards the acetate rod.', 340, { size: 16, fill: C.ink }, 21) +
      t(x + 30, 410, result === 'repel' ? 'Turns away: REPULSION' : 'Turns towards: ATTRACTION', { size: 19, weight: 700, fill: result === 'repel' ? C.rust : C.tealDark });
  };
  const body = scene(30, ['second', 'polythene rod'], C.panel, -1, 'repel') + scene(460, ['rubbed', 'acetate rod'], C.cream, 1, 'attract') +
    panel(30, 460, 840, 120, C.cream, C.olive) +
    t(55, 496, 'Conclusion: the two materials gain opposite charges;', { size: 18, weight: 700 }) +
    t(55, 522, 'like charges repel and unlike charges attract.', { size: 18, weight: 700 }) +
    t(55, 556, 'Use dry materials; hold the rod by one end and do not touch the rubbed area.', { size: 16, fill: C.muted });
  add('02-charged-rods-practical', svg(900, 600, 'Practical: forces between charged rods', body),
    'A rubbed polythene rod hangs in a paper stirrup. Bringing a second rubbed polythene rod near one end makes it turn away; bringing a rubbed acetate rod near makes it turn towards the acetate.',
    'Polythene repels polythene but attracts acetate, so the two gain opposite charges.',
    '## Charging by friction (2.23P, 2.24P)');
}

// 03 Balloon and neutral wall
{
  const wx = 560;
  let wall = rect(wx, 120, 300, 400, { fill: C.rock, sw: 3 });
  for (let j = 0; j < 6; j++) { const y = 160 + j * 62; wall += pos(wx + 22, y, 10) + neg(wx + 58, y, 10) + pos(wx + 140, y, 10) + neg(wx + 175, y, 10) + pos(wx + 245, y, 10) + neg(wx + 275, y, 10); }
  const ball = `<ellipse cx="300" cy="300" rx="110" ry="130" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>` + path('M292,430 L300,442 L308,430 Z', { fill: C.ink, w: 2 }) + path('M300,442 q-14,40 6,80', { w: 2 }) +
    [[260, 230], [330, 220], [370, 290], [250, 310], [320, 360], [270, 380], [360, 360], [300, 290]].map(([x, y]) => neg(x, y, 12)).join('');
  const body = ball + wall +
    arrow(425, 255, 545, 255, { w: 6, color: C.tealDark, marker: 'ahT' }) + t(485, 240, 'bigger pull', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    arrow(540, 345, 470, 345, { w: 3, color: C.rust, marker: 'ahR' }) + t(485, 375, 'smaller push', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) +
    t(300, 560, 'negatively charged balloon', { size: 17, weight: 700, anchor: 'middle' }) +
    t(wx + 40, 545, 'near surface slightly +', { size: 16, weight: 600, anchor: 'middle', fill: C.rust }) + t(wx + 40, 565, '(electrons repelled away)', { size: 15, anchor: 'middle', fill: C.muted }) +
    t(wx + 210, 545, 'wall: neutral', { size: 16, weight: 600, anchor: 'middle' }) + t(wx + 210, 565, 'overall', { size: 16, weight: 600, anchor: 'middle' }) +
    panel(30, 590, 840, 90, C.tealLight, C.tealDark) +
    t(450, 625, 'The attraction to the nearby positive region is stronger than the repulsion', { size: 17, weight: 600, anchor: 'middle' }) +
    t(450, 651, 'from the more distant negative region, so the balloon sticks.', { size: 17, weight: 600, anchor: 'middle' });
  add('03-balloon-attracts-neutral-wall', svg(900, 700, 'A charged balloon and a neutral wall', body),
    'A negatively charged balloon near a neutral wall. Electrons in the wall surface are repelled slightly away, leaving the nearby surface slightly positive. The pull from the near positive region is bigger than the push from the further negative region.',
    'A charged object attracts a neutral one because the nearer opposite charge wins.',
    '## Forces between charges (2.25P)');
}

// 04 Explaining everyday phenomena
{
  const rows = [
    ['Hair after brushing', 'Electrons transfer between hair and plastic brush', 'All strands gain the same charge', 'Strands repel each other and stand up'],
    ['Shock from a door handle', 'Shoes rub on nylon carpet: electrons transfer', 'The person becomes charged', 'Touching the metal handle: electrons flow suddenly to or from earth (shock, spark)'],
    ['Clothes in a dryer', 'Different fabrics rub: electrons transfer', 'Items gain opposite charges', 'Oppositely charged items attract and cling'],
  ];
  const heads = ['1  Rubbing', '2  Charge', '3  Result'];
  const xs = [225, 442, 659], cw = 207;
  let body = heads.map((h, i) => t(xs[i] + cw / 2, 140, h, { size: 19, weight: 700, anchor: 'middle', fill: [C.tealDark, C.olive, C.rust][i] })).join('');
  rows.forEach(([name, a, b, c], r) => {
    const y = 160 + r * 160;
    body += panel(30, y, 840, 148) + t(50, y + 40, name.split(' ').slice(0, 2).join(' '), { size: 18, weight: 700 }) + t(50, y + 63, name.split(' ').slice(2).join(' '), { size: 18, weight: 700 });
    [a, b, c].forEach((s, i) => {
      body += rect(xs[i], y + 12, cw, 124, { fill: [C.tealLight, C.cream, '#f6e3d6'][i], stroke: [C.tealDark, C.olive, C.rust][i], sw: 2, rx: 10 }) + para(xs[i] + 12, y + 40, s, cw - 24, { size: 15 }, 19);
      if (i < 2) body += arrow(xs[i] + cw + 1, y + 74, xs[i + 1] - 1, y + 74, { w: 2, marker: 'ah' });
    });
  });
  body += t(450, 670, 'Every explanation names electrons and which way they move.', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  add('04-explaining-static-phenomena', svg(900, 695, 'Explaining static in three steps', body),
    'Three examples set out in three steps. Brushing hair transfers electrons so strands gain the same charge and repel. Walking on a nylon carpet charges a person, and touching a metal handle lets electrons flow suddenly, giving a shock. Rubbing fabrics in a dryer gives opposite charges that attract.',
    'Rubbing transfers electrons; the charges produced cause attraction, repulsion or a discharge.',
    '## Explaining phenomena with electrons (2.26P)');
}

// 05 Fuelling danger and earthing
{
  const plane = (x, y) => `<path d="M${x},${y} L${x + 260},${y} Q${x + 300},${y + 18} ${x + 260},${y + 36} L${x},${y + 36} L${x - 20},${y - 18} L${x + 12},${y - 18} Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
    `<path d="M${x + 100},${y + 18} L${x + 160},${y + 18} L${x + 120},${y + 80} L${x + 90},${y + 80} Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + circ(x + 60, y + 52, 9, { fill: C.ink, sw: 0 }) + circ(x + 230, y + 52, 9, { fill: C.ink, sw: 0 });
  const truck = (x, y) => rect(x, y, 110, 55, { fill: C.cream, sw: 2.5, rx: 6 }) + rect(x + 110, y + 15, 35, 40, { fill: C.panel, sw: 2.5, rx: 4 }) + circ(x + 25, y + 62, 9, { fill: C.ink, sw: 0 }) + circ(x + 115, y + 62, 9, { fill: C.ink, sw: 0 }) + t(x + 55, y + 34, 'fuel', { size: 15, anchor: 'middle', weight: 700 });
  const gy = 400;
  const left = panel(30, 110, 410, 430) + t(235, 146, 'Danger: charge builds up', { size: 20, weight: 700, anchor: 'middle', fill: C.rust }) +
    plane(90, 230) + truck(60, 320) + path('M200,345 Q260,320 300,270', { stroke: C.olive, w: 5 }) +
    [0, 1, 2, 3, 4].map((i) => neg(140 + i * 42, 248, 10)).join('') +
    ln(40, gy, 430, gy, { w: 3 }) + path(`M330,${310} l-12,20 l14,0 l-14,26 l10,0 l-16,30`, { stroke: C.mustard, w: 4 }) + t(345, 345, 'spark', { size: 16, weight: 700, fill: C.olive }) +
    para(55, 440, 'Fast-flowing fuel rubs the pipe and transfers electrons. A spark near fuel vapour can ignite it: explosion or fire.', 360, { size: 16 }, 21);
  const right = panel(460, 110, 410, 430) + t(665, 146, 'Safe: connect to earth first', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    plane(520, 230) + truck(490, 320) + path('M630,345 Q690,320 730,270', { stroke: C.olive, w: 5 }) +
    wire([[760, 285], [800, 330], [800, gy]], { c: C.tealDark, w: 4 }) + ln(780, gy, 820, gy, { c: C.tealDark, w: 4 }) + ln(786, gy + 8, 814, gy + 8, { c: C.tealDark, w: 3 }) + ln(793, gy + 16, 807, gy + 16, { c: C.tealDark, w: 2.5 }) +
    neg(812, 318, 9) + arrow(822, 330, 822, 372, { w: 2.5, color: C.tealDark, marker: 'ahT' }) +
    t(835, 355, 'e⁻', { size: 15, weight: 700, fill: C.tealDark }) + t(760, 430, 'earthing cable', { size: 15, weight: 700, anchor: 'end', fill: C.tealDark }) +
    ln(470, gy, 860, gy, { w: 3 }) +
    para(485, 455, 'Electrons flow continuously to or from earth, and conducting hoses are used, so the charge never gets big enough to spark.', 365, { size: 16 }, 21);
  add('05-fuelling-danger-and-earthing', svg(900, 560, 'Static danger when fuelling aircraft', left + right),
    'Left: fuel flowing into an aircraft transfers electrons, charge builds up and a spark can ignite fuel vapour. Right: the aircraft is joined to earth by a conducting cable, so electrons flow continuously and no large charge builds up.',
    'Earthing lets electrons flow away continuously, so no spark can form near fuel vapour.',
    '## Dangers (2.27P)');
}

// 06 Photocopier
{
  const drum = (cx, cy, fill = C.panel) => circ(cx, cy, 52, { fill, stroke: C.ink, sw: 3 });
  const ring = (cx, cy, n, f, skip = []) => Array.from({ length: n }, (_, i) => i).filter((i) => !skip.includes(i)).map((i) => { const a = (i * 2 * Math.PI) / n; return f(cx + 52 * Math.cos(a), cy + 52 * Math.sin(a)); }).join('');
  const P = (x, y) => pos(x, y, 8);
  const steps5 = [
    ['Charge the drum', 'The whole drum surface is given a charge.'],
    ['Shine the image', 'Light from white parts makes the coating conduct; charge leaks away there.'],
    ['Add toner', 'Toner of opposite charge is attracted only to the charged (dark) areas.'],
    ['Transfer to paper', 'Charged paper attracts the toner off the drum.'],
    ['Heat', 'The toner melts and sticks to the paper.'],
  ];
  const cw = 164;
  let body = '';
  steps5.forEach(([h, d], i) => {
    const x = 30 + i * (cw + 5), cx = x + cw / 2, cy = 225;
    body += panel(x, 110, cw, 370) + badge(x + 26, 138, 16, String(i + 1), C.cream);
    if (i === 0) body += drum(cx, cy) + ring(cx, cy, 12, P);
    if (i === 1) body += drum(cx, cy) + ring(cx, cy, 12, P, [9, 10, 11, 0, 1]) + [25, 55, 85].map((dx) => arrow(cx + dx - 45, 145, cx + dx - 25, 168, { w: 2.5, color: C.olive, marker: 'ahO' })).join('');
    if (i === 2) body += drum(cx, cy) + ring(cx, cy, 12, P, [9, 10, 11, 0, 1]) + ring(cx, cy, 12, (x2, y2) => circ(x2 + (x2 - cx) * 0.3, y2 + (y2 - cy) * 0.3, 6, { fill: C.ink, sw: 0 }), [9, 10, 11, 0, 1]);
    if (i === 3) body += drum(cx, cy - 20) + rect(x + 22, cy + 48, cw - 44, 16, { fill: '#ffffff', sw: 2.5 }) + [0, 1, 2, 3].map((k) => circ(x + 42 + k * 26, cy + 42, 6, { fill: C.ink, sw: 0 })).join('') + t(cx, cy + 90, 'paper', { size: 15, anchor: 'middle', fill: C.muted });
    if (i === 4) body += rect(x + 22, cy + 10, cw - 44, 16, { fill: '#ffffff', sw: 2.5 }) + rect(x + 36, cy + 4, 92, 6, { fill: C.ink, sw: 0 }) + path(`M${cx - 30},${cy + 70} q8,-15 0,-30 M${cx},${cy + 70} q8,-15 0,-30 M${cx + 30},${cy + 70} q8,-15 0,-30`, { stroke: C.rust, w: 3 }) + t(cx, cy - 30, 'heat', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 });
    body += t(x + 14, 340, h, { size: 17, weight: 700 }) + para(x + 14, 368, d, cw - 26, { size: 15, fill: C.muted }, 20);
  });
  body += t(450, 510, '+ shows the drum charge; black dots are toner with the opposite charge.', { size: 15, anchor: 'middle', fill: C.muted });
  add('06-photocopier-steps', svg(900, 530, 'How a photocopier uses static charge', body),
    'Five steps. The drum is charged all over; light from white parts of the page removes charge there; oppositely charged toner sticks only to the charged areas; charged paper attracts the toner; heat melts the toner onto the paper.',
    'Toner sticks only where the drum is still charged, which is where the page was dark.',
    '## Uses (2.28P)');
}

// 07 Inkjet printer
{
  const ny = 300;
  const plates = rect(330, 200, 300, 18, { fill: C.cream, stroke: C.rust, sw: 2.5 }) + rect(330, 382, 300, 18, { fill: C.tealLight, stroke: C.tealDark, sw: 2.5 }) +
    [0, 1, 2, 3, 4, 5].map((i) => pos(355 + i * 50, 209, 7) + neg(355 + i * 50, 391, 7)).join('') +
    t(480, 190, 'positive plate', { size: 16, anchor: 'middle', weight: 600, fill: C.rust }) + t(480, 428, 'negative plate', { size: 16, anchor: 'middle', weight: 600, fill: C.tealDark });
  const nozzle = path(`M90,${ny - 30} L170,${ny - 30} L200,${ny - 8} L200,${ny + 8} L170,${ny + 30} L90,${ny + 30} Z`, { fill: C.rockDark, w: 3 }) + t(130, ny + 62, 'nozzle', { size: 16, anchor: 'middle', weight: 600 });
  const traj = (k, col) => { const pts = []; for (let x = 210; x <= 800; x += 10) { const u = Math.max(0, Math.min(x, 630) - 330), extra = x > 630 ? (x - 630) * (2 * k * 300) : 0; pts.push([x, ny - k * u * u - extra]); } return pts; };
  const drops = (pts, n) => pts.filter((_, i) => i % n === 0).map(([x, y]) => neg(x, y, 8)).join('');
  const t1 = traj(0.00025, 0), t2 = traj(0.0005, 0);
  const body = plates + nozzle + path(`M${t1.map((p) => p.join(',')).join(' L')}`, { stroke: C.muted, w: 1.5, extra: 'stroke-dasharray="4 5"' }) + path(`M${t2.map((p) => p.join(',')).join(' L')}`, { stroke: C.muted, w: 1.5, extra: 'stroke-dasharray="4 5"' }) +
    drops(t1, 6) + drops(t2.filter(([x]) => x > 480), 6) +
    rect(800, 120, 20, 330, { fill: '#ffffff', sw: 2.5 }) + t(810, 475, 'paper', { size: 16, anchor: 'middle', weight: 600 }) +
    t(715, t1[t1.length - 1][1] + 46, 'smaller charge', { size: 15, anchor: 'middle', fill: C.muted }) + t(700, t2[t2.length - 1][1] - 22, 'bigger charge', { size: 15, anchor: 'middle', fill: C.muted }) +
    t(260, ny - 40, 'drops given a charge', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
    panel(30, 500, 840, 100, C.cream, C.olive) +
    t(55, 535, 'Each drop is attracted towards the oppositely charged plate and repelled by the other.', { size: 17, weight: 600 }) +
    t(55, 563, 'The size of the charge controls how far it is deflected, so each drop lands', { size: 17 }) +
    t(55, 587, 'in the right place to form the letters or image.', { size: 17 });
  add('07-inkjet-printer', svg(900, 620, 'How an inkjet printer steers ink drops', body),
    'Charged ink drops leave a nozzle and pass between a positive and a negative deflecting plate. Negative drops curve towards the positive plate; drops with a bigger charge are deflected further before reaching the paper.',
    'Bigger charge, bigger deflection: the plates steer each drop to its place on the paper.',
    '## Uses (2.28P)');
}
