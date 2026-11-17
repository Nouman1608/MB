import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-business-ybs11-the-market';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tx = (x, y, s, o = {}) => t(x, y, esc(s), o);
// rough Inter width: ~0.54 x font size per character (bold a little wider)
const wrap = (s, px, size = 17, bold = false) => {
  const n = Math.max(4, Math.floor(px / (size * (bold ? 0.56 : 0.51))));
  const out = [];
  for (const para of String(s).split('\n')) {
    let cur = '';
    for (const w of para.split(' ')) {
      if (cur && (cur + ' ' + w).length > n) { out.push(cur); cur = w; } else cur = (cur ? cur + ' ' : '') + w;
    }
    out.push(cur);
  }
  return out;
};
const LH = (size) => Math.round(size * 1.34);
const lines = (x, y, arr, o = {}, lh) => arr.map((s, i) => tx(x, y + i * (lh || LH(o.size || 17)), s, o)).join('');
// wrapped paragraph: returns svg; use paraH for its height
const para = (x, y, s, w, o = {}) => lines(x, y, wrap(s, w, o.size || 17, (o.weight || 400) >= 600), o);
const paraN = (s, w, size = 17, bold = false) => wrap(s, w, size, bold).length;
const rect = (x, y, w, h, fill = C.panel, edge = C.panelEdge, rx = 12, sw = 2.5) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const parrow = (d, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// card with bold title + wrapped body, centred or left aligned
const card = (x, y, w, h, title, body, { fill = C.panel, edge = C.panelEdge, ts = 19, bs = 16, align = 'start', tfill = C.ink, bfill = C.muted, pad = 18, top = 0 } = {}) => {
  const ax = align === 'middle' ? x + w / 2 : x + pad;
  const tL = title ? wrap(title, w - 2 * pad, ts, true) : [];
  const bL = body ? wrap(body, w - 2 * pad, bs) : [];
  const total = tL.length * LH(ts) + (bL.length ? 6 + bL.length * LH(bs) : 0);
  const y0 = top ? y + top : y + (h - total) / 2 + ts * 0.8;
  return rect(x, y, w, h, fill, edge) +
    lines(ax, y0, tL, { size: ts, weight: 700, anchor: align, fill: tfill }) +
    lines(ax, y0 + tL.length * LH(ts) + (tL.length ? 6 : 0) - (tL.length ? 0 : 0), bL, { size: bs, anchor: align, fill: bfill });
};
// cream takeaway strip
const takeaway = (y, head, body, h) => {
  const bL = body ? wrap(body, 790, 17) : [];
  const hh = h || 34 + LH(19) + (bL.length ? bL.length * LH(17) + 4 : 0);
  return panel(30, y, 840, hh, C.cream, C.olive) + tx(56, y + 40, head, { size: 19, weight: 700 }) + lines(56, y + 40 + LH(17) + 4, bL, { size: 17, fill: C.muted });
};
const takeH = (body) => 34 + LH(19) + (body ? wrap(body, 790, 17).length * LH(17) + 4 : 0);
const money = (n, cur = '$') => (n < 0 ? '-' : '') + cur + Math.abs(n).toLocaleString('en-US');

// small graph helper: frame with axes, returns mapping
const axes = (x, y, w, h, xl = 'Quantity', yl = 'Price') =>
  line(x, y, x, y + h, { w: 3 }) + line(x, y + h, x + w, y + h, { w: 3 }) +
  tx(x - 10, y + 8, yl, { size: 16, weight: 700, anchor: 'end' }) + tx(x + w, y + h + 28, xl, { size: 16, weight: 700, anchor: 'end' });
const curve = (x1, y1, x2, y2, color, w = 4, dash = '') => line(x1, y1, x2, y2, { color, w, dash });

// 01 Movement along vs shift
{
  let b = '';
  // left panel: movement
  b += panel(30, 110, 410, 470) + tx(235, 148, 'Own price changes', { size: 20, weight: 700, anchor: 'middle' }) + tx(235, 174, 'movement along the curve', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += axes(100, 200, 310, 300);
  b += curve(130, 220, 380, 470, C.tealDark) + tx(388, 470, 'D', { size: 18, weight: 700, fill: C.tealDark });
  b += `<circle cx="200" cy="290" r="8" fill="${C.ink}"/><circle cx="300" cy="390" r="8" fill="${C.ink}"/>`;
  b += line(100, 290, 200, 290, { dash: '6 5', w: 2 }) + line(100, 390, 300, 390, { dash: '6 5', w: 2 }) + line(200, 290, 200, 500, { dash: '6 5', w: 2 }) + line(300, 390, 300, 500, { dash: '6 5', w: 2 });
  b += parrow('M214,292 Q260,320 288,376', { w: 3, color: C.olive, marker: 'ahO' });
  b += tx(90, 296, 'P1', { size: 15, anchor: 'end' }) + tx(90, 396, 'P2', { size: 15, anchor: 'end' }) + tx(200, 522, 'Q1', { size: 15, anchor: 'middle' }) + tx(300, 522, 'Q2', { size: 15, anchor: 'middle' });
  b += tx(235, 562, 'Price falls: extension of demand', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
  // right panel: shift
  b += panel(460, 110, 410, 470) + tx(665, 148, 'Any other factor changes', { size: 20, weight: 700, anchor: 'middle' }) + tx(665, 174, 'the whole curve shifts', { size: 17, anchor: 'middle', fill: C.rust, weight: 600 });
  b += axes(530, 200, 310, 300);
  b += curve(540, 230, 760, 450, C.tealDark) + tx(768, 452, 'D', { size: 18, weight: 700, fill: C.tealDark });
  b += curve(610, 230, 830, 450, C.rust) + tx(824, 432, 'D1', { size: 18, weight: 700, fill: C.rust });
  b += arrow(660, 340, 718, 340, { color: C.rust, marker: 'ahR', w: 3.5 });
  b += tx(665, 562, 'e.g. a rival’s price rises: demand shifts right', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  b += takeaway(600, '“Demand rises because the price fell” describes a movement, not a shift.', 'The examiner expects the word “extension”.');
  add('01-movement-or-shift',
    svg(900, 600 + takeH('The examiner expects the word “extension”.') + 30, 'Movement along a curve or a shift?', b),
    'Left: when the product’s own price falls from P1 to P2, quantity demanded extends from Q1 to Q2 along the same demand curve. Right: when another factor changes, such as a rival’s price rising, the whole demand curve shifts right from D to D1.',
    'Own price moves you along the curve; anything else shifts it.',
    '## Movement along a curve or a shift?');
}

// 02 What shifts demand and supply
{
  const chip = (x, y, w, txt, dir, c) => rect(x, y, w, 62, C.panel, c, 10, 2) + para(x + 16, y + (paraN(txt, w - 90, 16) > 1 ? 26 : 37), txt, w - 90, { size: 16 }) +
    (dir === 'R' ? arrow(x + w - 62, y + 31, x + w - 18, y + 31, { color: c, marker: c === C.rust ? 'ahR' : 'ahT', w: 4 }) : arrow(x + w - 18, y + 31, x + w - 62, y + 31, { color: c, marker: c === C.rust ? 'ahR' : 'ahT', w: 4 }));
  let b = rect(30, 110, 840, 330, C.panel) + tx(56, 146, 'Demand shifts', { size: 20, weight: 700, fill: C.tealDark });
  const d = [
    ['Price of coffee pods rises: demand for loose coffee (substitute)', 'R'],
    ['Price of pod machines falls: demand for pods (complement)', 'R'],
    ['Ageing population: mobility aids', 'R'],
    ['Ageing population: products bought mainly by young adults', 'L'],
    ['Seasons: ice cream, school uniforms, heating oil', 'R'],
    ['Incomes, fashions, tastes, marketing, branding', 'R'],
  ];
  d.forEach(([s, dir], i) => { b += chip(50 + (i % 2) * 410, 166 + Math.floor(i / 2) * 76, 390, s, dir, C.tealDark); });
  b += tx(56, 418, 'Arrow shows the direction of the shift for the example given; the last row can move either way.', { size: 15, fill: C.muted, italic: true });
  b += rect(30, 460, 840, 250, C.panel) + tx(56, 496, 'Supply shifts', { size: 20, weight: 700, fill: C.rust });
  const s = [['Indirect tax per unit raises costs', 'L'], ['Subsidy per unit lowers costs', 'R'], ['Higher costs of production', 'L'], ['New technology', 'R']];
  s.forEach(([t2, dir], i) => { b += chip(50 + (i % 2) * 410, 516 + Math.floor(i / 2) * 76, 390, t2, dir, C.rust); });
  b += takeaway(730, 'External shocks can shift either curve suddenly.', 'A storm closing a port or a health scare is often temporary, so a firm must judge whether to change prices or wait.');
  add('02-what-shifts-the-curves',
    svg(900, 730 + takeH('A storm closing a port or a health scare is often temporary, so a firm must judge whether to change prices or wait.') + 30, 'What shifts demand and supply', b),
    'Demand shifts right for loose coffee when pod prices rise, for pods when machine prices fall, for mobility aids as the population ages, and with the seasons; it shifts left for products bought by young adults. Supply shifts left with an indirect tax or higher costs and right with a subsidy or new technology.',
    'Explain the mechanism behind each shift, not just its direction.',
    '## Shifts in practice: telling the story of a market');
}

// 03 Both curves shift
{
  let b = panel(30, 110, 520, 520) + axes(100, 150, 420, 400);
  b += curve(130, 190, 400, 520, C.tealDark) + tx(400, 540, 'D', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += curve(230, 190, 500, 520, C.tealDark, 4, '10 6') + tx(500, 540, 'D1', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += curve(130, 500, 400, 200, C.rust) + tx(410, 196, 'S', { size: 17, weight: 700, fill: C.rust });
  b += curve(230, 500, 500, 200, C.rust, 4, '10 6') + tx(486, 186, 'S1', { size: 17, weight: 700, fill: C.rust });
  // equilibria: D: from (130,190)-(400,520) ; S: (130,500)-(400,200); intersections approx
  const ix = (a1, b1, a2, b2, c1, d1, c2, d2) => { const m1 = (b2 - b1) / (a2 - a1), m2 = (d2 - d1) / (c2 - c1); const x = (d1 - b1 + m1 * a1 - m2 * c1) / (m1 - m2); return [x, b1 + m1 * (x - a1)]; };
  const [x1, y1] = ix(130, 190, 400, 520, 130, 500, 400, 200), [x2, y2] = ix(230, 190, 500, 520, 230, 500, 500, 200);
  b += line(100, y1, x1, y1, { dash: '6 5', w: 2 }) + line(x1, y1, x1, 550, { dash: '6 5', w: 2 }) + line(x2, y2, x2, 550, { dash: '6 5', w: 2 });
  b += `<circle cx="${x1}" cy="${y1}" r="8" fill="${C.ink}"/><circle cx="${x2}" cy="${y2}" r="8" fill="${C.ink}"/>`;
  b += tx(x1, 574, 'Q1', { size: 15, anchor: 'middle' }) + tx(x2, 574, 'Q2', { size: 15, anchor: 'middle' }) + tx(92, y1 + 6, 'P1 = P2?', { size: 15, anchor: 'end' });
  b += arrow(200, 260, 260, 260, { color: C.tealDark, marker: 'ahT', w: 3 }) + arrow(250, 440, 310, 440, { color: C.rust, marker: 'ahR', w: 3 });
  b += card(570, 110, 300, 150, 'Demand rises', 'and new technology raises supply at the same time', { ts: 19, bs: 16, top: 36 });
  b += card(570, 280, 300, 110, 'Quantity', 'certainly rises', { fill: C.tealLight, edge: C.tealDark, ts: 19, bs: 17, top: 36 });
  b += card(570, 410, 300, 220, 'Price', 'may rise, fall or stay the same: it depends on which shift is larger', { fill: C.cream, edge: C.olive, ts: 19, bs: 17, top: 36 });
  add('03-both-curves-shift',
    svg(900, 660, 'When both curves shift', b),
    'Demand shifts right from D to D1 and supply shifts right from S to S1. Quantity rises from Q1 to Q2, but the effect on price depends on the relative size of the two shifts; with equal shifts, as drawn, price is unchanged.',
    'With two shifts, one variable is certain and the other depends on their sizes.',
    '## Shifts in practice: telling the story of a market');
}

// 04 Fenwick Juices tax (to scale)
{
  const X0 = 110, Y0 = 640, W = 480, H = 470; // Q 400..800, P 6..14
  const qx = (q) => X0 + ((q - 400) / 400) * W, py = (p) => Y0 - ((p - 6) / 8) * H;
  let b = panel(30, 110, 600, 640);
  b += line(X0, py(14) - 10, X0, Y0, { w: 3 }) + line(X0, Y0, X0 + W + 10, Y0, { w: 3 });
  b += tx(X0 - 8, py(14) - 20, 'Price ($)', { size: 16, weight: 700 }) + tx(X0 + W + 10, Y0 + 50, 'Cartons a day', { size: 16, weight: 700, anchor: 'end' });
  [6, 8, 10, 12, 14].forEach((p) => { b += tx(X0 - 10, py(p) + 5, String(p), { size: 15, anchor: 'end', fill: C.muted }) + line(X0 - 5, py(p), X0, py(p), { w: 2 }); });
  [400, 500, 600, 700, 800].forEach((q) => { b += tx(qx(q), Y0 + 24, String(q), { size: 15, anchor: 'middle', fill: C.muted }) + line(qx(q), Y0, qx(q), Y0 + 5, { w: 2 }); });
  // D: P = (900-Q)/30 for P 6..14 -> Q 720..480
  b += curve(qx(720), py(6), qx(480), py(14), C.tealDark) + tx(qx(720) + 6, py(6) - 8, 'D', { size: 18, weight: 700, fill: C.tealDark });
  // S: Q=100+50P -> P6:400 P14:800
  b += curve(qx(400), py(6), qx(800), py(14), C.ink) + tx(qx(800) + 6, py(14) + 18, 'S', { size: 18, weight: 700 });
  // S1: Q = 20+50P -> P 7.6:400 ; P14: 720
  b += curve(qx(400), py(7.6), qx(720), py(14), C.rust) + tx(qx(720) - 6, py(14) - 8, 'S1', { size: 18, weight: 700, fill: C.rust, anchor: 'end' });
  b += arrow(qx(700), py(12), qx(660), py(12.8), { color: C.rust, marker: 'ahR', w: 3 });
  b += line(X0, py(10), qx(600), py(10), { dash: '6 5', w: 2 }) + line(qx(600), py(10), qx(600), Y0, { dash: '6 5', w: 2 });
  b += line(X0, py(11), qx(570), py(11), { dash: '6 5', w: 2, color: C.rust }) + line(qx(570), py(11), qx(570), Y0, { dash: '6 5', w: 2, color: C.rust });
  b += line(X0, py(9.4), qx(570), py(9.4), { dash: '3 4', w: 2, color: C.muted });
  b += `<line x1="${qx(570)}" y1="${py(11)}" x2="${qx(570)}" y2="${py(9.4)}" stroke="${C.olive}" stroke-width="6"/>`;
  b += `<circle cx="${qx(600)}" cy="${py(10)}" r="8" fill="${C.ink}"/><circle cx="${qx(570)}" cy="${py(11)}" r="8" fill="${C.rust}"/>`;
  b += tx(qx(600) + 14, py(10) + 22, 'E1 (600, $10)', { size: 15, weight: 700 }) + tx(qx(570) - 14, py(11) - 12, 'E2 (570, $11)', { size: 15, weight: 700, fill: C.rust, anchor: 'end' });
  b += tx(X0 + 12, py(10.35) + 5, 'tax $1.60', { size: 15, weight: 700, fill: C.olive }) + arrow(X0 + 92, py(10.35), qx(570) - 6, py(10.35), { color: C.olive, marker: 'ahO', w: 2 });
  b += tx(X0 - 10, py(9.4) + 5, '9.40', { size: 15, anchor: 'end', fill: C.olive, weight: 700 });
  const st = (y, h, head, rows, f = C.panel, e = C.panelEdge) => rect(650, y, 220, h, f, e) + tx(666, y + 30, head, { size: 16, weight: 700, fill: C.muted }) + lines(666, y + 58, rows, { size: 16 }, 24);
  b += st(110, 150, 'Before the tax', ['900 − 30P', '= 100 + 50P', 'P = $10, Q = 600']);
  b += st(276, 150, 'Supply with tax', ['100 + 50(P − 1.60)', '= 20 + 50P']);
  b += st(442, 150, 'After the tax', ['900 − 30P = 20 + 50P', 'P = $11, Q = 570'], C.cream, C.olive);
  b += st(608, 142, 'Who pays?', ['Price +$1.00 of $1.60', 'Firm keeps', '$11 − $1.60 = $9.40']);
  add('04-fenwick-indirect-tax',
    svg(900, 780, 'Fenwick Juices: a $1.60 tax per carton', b),
    'Demand Qd = 900 − 30P and supply Qs = 100 + 50P meet at $10 and 600 cartons. A $1.60 tax shifts supply left to Qs = 20 + 50P, giving a new equilibrium at $11 and 570 cartons. The price rises by only $1.00, so each firm keeps $9.40 a carton instead of $10.',
    'Customers pay $1.00 of the $1.60 tax; firms absorb the rest and sell less.',
    '## Worked example 1: an indirect tax');
}

// 05 Constructing a diagram checklist
{
  let b = panel(30, 110, 520, 560) + axes(110, 160, 400, 420);
  b += curve(140, 190, 440, 540, C.tealDark) + tx(446, 548, 'D', { size: 18, weight: 700, fill: C.tealDark });
  b += curve(140, 540, 440, 200, C.ink) + tx(446, 200, 'S', { size: 18, weight: 700 });
  b += curve(220, 190, 500, 520, C.rust, 4, '') + tx(500, 548, 'D1', { size: 18, weight: 700, fill: C.rust, anchor: 'middle' });
  const ix = (a1, b1, a2, b2, c1, d1, c2, d2) => { const m1 = (b2 - b1) / (a2 - a1), m2 = (d2 - d1) / (c2 - c1); const x = (d1 - b1 + m1 * a1 - m2 * c1) / (m1 - m2); return [x, b1 + m1 * (x - a1)]; };
  const [x1, y1] = ix(140, 190, 440, 540, 140, 540, 440, 200), [x2, y2] = ix(220, 190, 500, 520, 140, 540, 440, 200);
  b += line(110, y1, x1, y1, { dash: '6 5', w: 2 }) + line(x1, y1, x1, 580, { dash: '6 5', w: 2 }) + line(110, y2, x2, y2, { dash: '6 5', w: 2 }) + line(x2, y2, x2, 580, { dash: '6 5', w: 2 });
  b += `<circle cx="${x1}" cy="${y1}" r="7" fill="${C.ink}"/><circle cx="${x2}" cy="${y2}" r="7" fill="${C.rust}"/>`;
  b += tx(102, y1 + 6, 'P1', { size: 15, anchor: 'end' }) + tx(102, y2 + 6, 'P2', { size: 15, anchor: 'end' }) + tx(x1, 602, 'Q1', { size: 15, anchor: 'middle' }) + tx(x2, 602, 'Q2', { size: 15, anchor: 'middle' });
  b += arrow(204, 250, 262, 250, { color: C.rust, marker: 'ahR', w: 3.5 });
  const nums = [[530, 640, '1'], [160, 225, '2'], [470, 215, '2'], [x1 + 18, y1 + 44, '3'], [233, 226, '4'], [x2 + 30, y2 + 6, '5']];
  nums.forEach(([x, y, n]) => { b += badge(x, y, 13, n, C.cream); });
  const items = [['1', 'Axes labelled Price and Quantity'], ['2', 'D slopes down, S slopes up, both labelled'], ['3', 'Original equilibrium with dotted lines to P1 and Q1'], ['4', 'Shifted curve labelled (D1 or S1) with an arrow showing direction'], ['5', 'New equilibrium marked at P2 and Q2']];
  items.forEach(([n, s], i) => { const y = 110 + i * 112; b += rect(570, y, 300, 98, C.panel) + badge(598, y + 49, 16, n, C.cream) + para(626, y + (paraN(s, 226, 17) > 2 ? 30 : paraN(s, 226, 17) > 1 ? 42 : 55), s, 226, { size: 17 }); });
  b += tx(450, 706, 'Marks are lost for unlabelled axes or an arrow that points the wrong way.', { size: 17, anchor: 'middle', fill: C.rust, weight: 600 });
  add('05-constructing-a-diagram',
    svg(900, 736, 'Constructing a demand and supply diagram', b),
    'A labelled diagram with demand shifting right from D to D1. Numbered points show the five elements: labelled axes, labelled D and S curves, the original equilibrium with dotted lines to P1 and Q1, the shifted curve with a direction arrow, and the new equilibrium at P2 and Q2.',
    'Five labels turn a sketch into a constructed diagram.',
    '## Drawing a demand and supply diagram');
}

// 06 PED and revenue
{
  const L = 80, R = 820, y = 230, sx = (v) => L + (v / 2.5) * (R - L);
  let b = rect(30, 110, 840, 70, C.cream, C.olive) + tx(450, 153, 'PED = % change in quantity demanded ÷ % change in price', { size: 20, weight: 700, anchor: 'middle' });
  b += `<rect x="${sx(0)}" y="${y - 14}" width="${sx(1) - sx(0)}" height="28" fill="${C.tealLight}" stroke="none"/><rect x="${sx(1)}" y="${y - 14}" width="${sx(2.5) - sx(1)}" height="28" fill="${C.sand}" stroke="none"/>`;
  b += arrow(L, y, R + 20, y, { w: 3 });
  [0, 1].forEach((v) => { b += line(sx(v), y - 22, sx(v), y + 22, { w: 3 }) + tx(sx(v), y + 48, String(v), { size: 18, weight: 700, anchor: 'middle' }); });
  b += tx(sx(2.2), y + 48, 'ignore the minus sign', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const zone = (x, w, head, d, rev, c) => card(x, 300, w, 210, head, '', { ts: 19, top: 36, edge: c, tfill: c }) + para(x + 18, 360, d, w - 36, { size: 16, fill: C.muted }) + tx(x + 18, 440, 'Price rise: revenue', { size: 15, weight: 700, fill: C.muted }) + tx(x + 18, 476, rev, { size: 21, weight: 700, fill: c });
  b += zone(30, 190, 'PED = 0', 'Perfectly inelastic', 'rises with price', C.tealDark);
  b += zone(236, 210, '0 to 1', 'Inelastic', 'rises', C.tealDark);
  b += zone(462, 190, 'PED = 1', 'Unitary', 'unchanged', C.olive);
  b += zone(668, 202, 'Above 1', 'Elastic', 'falls', C.rust);
  
  b += rect(30, 530, 410, 180, C.panel) + tx(50, 564, 'More elastic when…', { size: 18, weight: 700 }) + lines(50, 594, ['• many close substitutes', '• not a necessity', '• a large share of income', '• little brand loyalty or habit', '• customers have longer to adjust'], { size: 16 }, 23);
  b += rect(460, 530, 410, 180, C.cream, C.olive) + tx(480, 564, 'Revenue is not profit', { size: 18, weight: 700 }) + para(480, 594, 'Inelastic: a price rise lifts revenue and cuts costs, as fewer units are made. Elastic: a price cut lifts revenue, but extra units add variable costs.', 370, { size: 16 });
  add('06-ped-and-revenue',
    svg(900, 740, 'Price elasticity of demand and revenue', b),
    'A PED scale from 0 to above 1. A price rise raises revenue when demand is perfectly inelastic or inelastic, leaves it unchanged at 1 and reduces it when demand is elastic. Demand is more elastic with close substitutes, non-necessities, a large share of income, little loyalty and more time. Pricing decisions are about profit, not just revenue.',
    'PED predicts what a price change does to revenue; profit also depends on costs.',
    '## Price elasticity of demand: beyond the formula');
}

// 07 Brockley Gyms price rise
{
  const x0 = 130, yb = 560, top = 200, max = 450000, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 840, 520) + tx(56, 146, 'Monthly revenue from a 10% rise to $44', { size: 19, weight: 700 });
  [0, 100000, 200000, 300000, 400000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 850, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  const bars = [['Now', '10,000 × $40', 400000, C.teal, ''], ['If PED = −0.4', '9,600 × $44', 422400, C.mustard, '+$22,400'], ['If PED = −1.8', '8,200 × $44', 360800, C.rust, '−$39,200']];
  bars.forEach(([h, s, v, f, d], i) => {
    const x = x0 + 60 + i * 230;
    b += `<rect x="${x}" y="${yb - sc(v)}" width="130" height="${sc(v)}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += tx(x + 65, yb - sc(v) - 12, money(v), { size: 18, weight: 700, anchor: 'middle' });
    if (d) b += tx(x + 65, yb - sc(v) + 64, d, { size: 17, weight: 700, anchor: 'middle', fill: i === 2 ? '#ffffff' : C.ink });
    b += tx(x + 65, yb + 28, h, { size: 17, weight: 700, anchor: 'middle' }) + tx(x + 65, yb + 50, s, { size: 15, anchor: 'middle', fill: C.muted });
  });
  b += line(x0, yb - sc(400000), 850, yb - sc(400000), { color: C.tealDark, w: 2, dash: '7 6' });
  b += line(x0, yb, 850, yb, { w: 2.5 });
  b += card(30, 650, 410, 150, 'Closer to −0.4', 'Long contracts and few rivals nearby', { fill: C.tealLight, edge: C.tealDark, ts: 19, bs: 17, top: 38 });
  b += card(460, 650, 410, 150, 'Closer to −1.8', 'Surrounded by budget gyms', { edge: C.rust, tfill: C.rust, ts: 19, bs: 17, top: 38 });
  b += tx(450, 836, 'Judging which estimate fits the business’s context earns the evaluation marks.', { size: 17, anchor: 'middle', weight: 600 });
  add('07-brockley-price-rise',
    svg(900, 866, 'Brockley Gyms: which PED is right?', b),
    'Brockley Gyms earns $400,000 a month from 10,000 members at $40. A 10% rise to $44 gives $422,400 (up $22,400) if PED is −0.4 and members fall to 9,600, but $360,800 (down $39,200) if PED is −1.8 and members fall to 8,200. Long contracts and few rivals point to −0.4; nearby budget gyms point to −1.8.',
    'The same price rise gains or loses revenue depending on the PED estimate.',
    '## Worked example 2: choosing between price rises');
}

// 08 YED scale with Brockley products
{
  const L = 80, R = 830, y = 300, sx = (v) => L + ((v + 1) / 3.2) * (R - L);
  let b = rect(30, 110, 840, 70, C.cream, C.olive) + tx(450, 153, 'YED = % change in quantity demanded ÷ % change in income', { size: 20, weight: 700, anchor: 'middle' });
  b += `<rect x="${L}" y="${y - 16}" width="${sx(0) - L}" height="32" fill="${C.sand}"/><rect x="${sx(0)}" y="${y - 16}" width="${sx(1) - sx(0)}" height="32" fill="${C.tealLight}"/><rect x="${sx(1)}" y="${y - 16}" width="${R - sx(1)}" height="32" fill="${C.teal}"/>`;
  b += arrow(L - 10, y, R + 20, y, { w: 3 });
  [-1, 0, 1, 2].forEach((v) => { b += line(sx(v), y - 22, sx(v), y + 22, { w: v === 0 || v === 1 ? 3 : 1.5 }) + tx(sx(v), y + 46, (v > 0 ? '+' : '') + v, { size: 17, weight: 700, anchor: 'middle' }); });
  b += tx((L + sx(0)) / 2, 236, 'Inferior good', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + tx((L + sx(0)) / 2, 258, 'bought less as incomes rise', { size: 15, anchor: 'middle', fill: C.muted });
  b += tx((sx(0) + sx(1)) / 2, 236, 'Normal: income inelastic', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + tx((sx(0) + sx(1)) / 2, 258, 'typical of necessities', { size: 15, anchor: 'middle', fill: C.muted });
  b += tx((sx(1) + R) / 2, 236, 'Normal: income elastic', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + tx((sx(1) + R) / 2, 258, 'often a luxury', { size: 15, anchor: 'middle', fill: C.muted });
  const mark = (v, label, sub, calc, c) => `<circle cx="${sx(v)}" cy="${y}" r="13" fill="${c}" stroke="${C.ink}" stroke-width="3"/>` + line(sx(v), y + 16, sx(v), 380, { w: 2.5, color: c }) + card(sx(v) - 150, 380, 300, 140, label, `${sub}\n${calc}`, { ts: 18, bs: 16, top: 34, edge: c, tfill: c });
  b += mark(-0.4, 'Off-peak budget membership', 'Demand −2% when incomes +5%', 'YED = −2 ÷ 5 = −0.4', C.rust);
  b += mark(1.8, 'Premium personal training', 'Demand +9% when incomes +5%', 'YED = 9 ÷ 5 = +1.8', C.tealDark);
  b += rect(30, 550, 410, 130, C.tealLight, C.tealDark) + tx(50, 584, 'Incomes rising', { size: 18, weight: 700, fill: C.tealDark }) + para(50, 612, 'Expect growth in personal training; plan staff for it', 370, { size: 17 });
  b += rect(460, 550, 410, 130, C.panel, C.rust) + tx(480, 584, 'Recession', { size: 18, weight: 700, fill: C.rust }) + para(480, 612, 'The pattern reverses: the budget membership protects revenue', 370, { size: 17 });
  b += tx(450, 716, 'The sign matters: keep it, or an inferior good looks like a normal one.', { size: 17, anchor: 'middle', weight: 600 });
  add('08-yed-brockley',
    svg(900, 746, 'Income elasticity: Brockley’s two products', b),
    'A YED scale: below 0 inferior, 0 to +1 normal and income inelastic, above +1 normal and income elastic. Brockley’s off-peak budget membership falls 2% when incomes rise 5% (YED −0.4, inferior); its premium personal training rises 9% (YED +1.8, income elastic).',
    'Positive YED means a normal good, negative an inferior one; the size shows how strongly demand follows income.',
    '## Income elasticity of demand');
}
