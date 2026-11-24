// Board-neutral redraws of two A Level photosynthesis pictures first drawn for Cambridge 9700 and
// reused on AQA, OCR, Edexcel IAL and OxfordAQA pages. Same content; the board-list pill is gone and
// "Edexcel name for TP: GALP" becomes the neutral "TP is also called GALP" (true for every board).
import { C, svg, panel, t, tl, path } from '../style.mjs';

export const slug = 'biology-photosynthesis';
const W = 900;
const PS = '#86b5b0', LIGHT = '#dce9e7', CREAM = '#f2e7b8', RUST = '#b5602e';
const sub = (b, s, rest = '') => `${b}<tspan dy="5" font-size="70%">${s}</tspan><tspan dy="-5"${rest.startsWith(' ') ? ' dx="5"' : ''}>${rest.trimStart()}</tspan>`;
function fa(x1, y1, x2, y2, color = C.ink, w = 3.5, head = 20) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
  const bx = x2 - ux * head, by = y2 - uy * head, hw = head * 0.6;
  return `<line x1="${x1}" y1="${y1}" x2="${bx}" y2="${by}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>` +
    `<polygon points="${x2},${y2} ${bx - uy * hw},${by + ux * hw} ${bx + uy * hw},${by - ux * hw}" fill="${color}"/>`;
}
const tick = (x, y) => `<path d="M${x - 14} ${y} L${x - 3} ${y + 12} L${x + 16} ${y - 14}" fill="none" stroke="${C.tealDark}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
const cross = (x, y) => `<path d="M${x - 12} ${y - 12} L${x + 12} ${y + 12} M${x + 12} ${y - 12} L${x - 12} ${y + 12}" stroke="${RUST}" stroke-width="5" stroke-linecap="round"/>`;
const psys = (cx, cy, s) => `<circle cx="${cx}" cy="${cy}" r="40" fill="${PS}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + 7, s, { size: 20, weight: 700, anchor: 'middle' });
const carrier = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="15" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;

// ---------- 05 Cyclic vs non-cyclic ----------
function cyclic() {
  const o = [];
  const prods = (y, marks) => ['ATP', 'reduced NADP', sub('O', '2')].forEach((s, i) => {
    o.push(t(540, y + i * 62, s, { size: 21, weight: 700 }));
    o.push(marks[i] ? tick(810, y - 8 + i * 62) : cross(810, y - 8 + i * 62));
  });
  o.push(panel(22, 122, 856, 300, '#ffffff', C.panelEdge));
  o.push(t(46, 164, 'Non-cyclic: PSII and PSI', { size: 23, weight: 700, fill: C.tealDark }));
  const cy = 296;
  o.push(`<rect x="34" y="${cy - 20}" width="80" height="40" rx="20" fill="${LIGHT}" stroke="${C.ink}" stroke-width="2.5"/>`, t(74, cy + 7, sub('H', '2', 'O'), { size: 20, weight: 700, anchor: 'middle' }));
  o.push(fa(114, cy, 130, cy, C.ink, 3, 14));
  o.push(`<line x1="210" y1="${cy}" x2="310" y2="${cy}" stroke="${C.olive}" stroke-width="3.5"/>`);
  o.push(psys(170, cy, 'PSII'), carrier(226, cy), carrier(260, cy), carrier(294, cy), psys(350, cy, 'PSI'));
  o.push(fa(390, cy, 412, cy, C.olive, 3.5, 16));
  o.push(`<rect x="414" y="${cy - 20}" width="86" height="40" rx="20" fill="${CREAM}" stroke="${C.ink}" stroke-width="2.5"/>`, t(457, cy + 7, 'NADP', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(t(260, 372, 'electrons come from water', { size: 19, fill: C.muted, anchor: 'middle' }));
  prods(214, [true, true, true]);
  o.push(panel(22, 440, 856, 300, '#ffffff', C.panelEdge));
  o.push(t(46, 482, 'Cyclic: PSI only', { size: 23, weight: 700, fill: C.tealDark }));
  const ccx = 240, ccy = 612, r = 84;
  const P = (a) => [ccx + r * Math.cos(a * Math.PI / 180), ccy + r * Math.sin(a * Math.PI / 180)];
  const arcs = [[-60, -10], [10, 80], [100, 150]];
  for (const [a1, a2] of arcs) {
    const [x1, y1] = P(a1), [x2, y2] = P(a2);
    o.push(`<path d="M${x1} ${y1} A${r} ${r} 0 0 1 ${x2} ${y2}" fill="none" stroke="${C.olive}" stroke-width="3.5"/>`);
    const ang = (a2 + 90) * Math.PI / 180;
    o.push(`<polygon points="${x2 + 14 * Math.cos(ang)},${y2 + 14 * Math.sin(ang)} ${x2 - 7 * Math.cos(ang) - 8 * Math.sin(ang)},${y2 - 7 * Math.sin(ang) + 8 * Math.cos(ang)} ${x2 - 7 * Math.cos(ang) + 8 * Math.sin(ang)},${y2 - 7 * Math.sin(ang) - 8 * Math.cos(ang)}" fill="${C.olive}"/>`);
  }
  const [px1, py1] = P(170), [px2, py2] = P(250);
  o.push(`<path d="M${px1} ${py1} A${r} ${r} 0 0 1 ${px2} ${py2}" fill="none" stroke="${C.olive}" stroke-width="3.5"/>`);
  o.push(carrier(...P(-90 + 0)), carrier(...P(0)), carrier(...P(90)));
  o.push(psys(...P(180), 'PSI'));
  o.push(t(ccx + 4, ccy + 8, sub('e', '−').replace('dy="5"', 'dy="-8"').replace('dy="-5"', 'dy="8"'), { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(tl(360, 578, ['electrons return', 'to PSI'], { size: 19, fill: C.muted }, 26), t(360, 652, 'no water used', { size: 19, fill: C.muted }));
  prods(532, [true, false, false]);
  o.push(t(450, 774, 'Extra ATP when the Calvin cycle needs more ATP than reduced NADP', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 800, 'Cyclic or non-cyclic?', o.join('\n'), 'Same membrane, different electron route');
}

// ---------- 06 Calvin cycle ----------
function calvin() {
  const o = [];
  const box = (cx, cy, head, sub2, fill) => {
    o.push(`<rect x="${cx - 104}" y="${cy - 44}" width="208" height="88" rx="12" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>`);
    o.push(t(cx, cy - 2, head, { size: 25, weight: 700, anchor: 'middle' }), t(cx, cy + 28, sub2, { size: 19, fill: C.muted, anchor: 'middle' }));
  };
  const num = (cx, cy, n) => `<circle cx="${cx}" cy="${cy}" r="18" fill="${C.olive}"/>` + t(cx, cy + 7, String(n), { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  const cx = 450, cy = 440;
  // arcs between boxes
  o.push(path(`M558 218 C640 260 690 320 680 420`, { stroke: C.ink, w: 4 }), fa(681, 400, 678, 432, C.ink, 4, 22));
  o.push(path(`M650 520 C620 600 520 610 440 568`, { stroke: C.ink, w: 4 }), fa(462, 580, 430, 562, C.ink, 4, 22));
  o.push(path(`M296 470 C250 390 260 260 340 190`, { stroke: C.ink, w: 4 }), fa(320, 206, 346, 184, C.ink, 4, 22));
  box(cx, 174, '3 RuBP', '3 × 5C = 15C', LIGHT);
  box(706, 474, '6 GP', '6 × 3C = 18C', CREAM);
  box(316, 474, '6 TP', '6 × 3C = 18C', CREAM);
  o.push(fa(870, 216, 668, 300, C.tealDark, 3.5, 22), t(864, 196, sub('3 CO', '2'), { size: 23, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(num(744, 360, 1), t(772, 352, 'Fixation', { size: 21, weight: 700 }), t(772, 380, 'rubisco', { size: 19, fill: C.muted }));
  o.push(num(564, 642, 2), t(592, 636, 'Reduction', { size: 21, weight: 700 }), t(592, 664, '6 ATP + 6 reduced NADP', { size: 19, fill: C.muted }));
  o.push(num(66, 230, 3), t(94, 222, 'Regeneration', { size: 21, weight: 700 }), t(94, 250, '5 TP → 3 RuBP', { size: 19, fill: C.muted }), t(94, 286, '3 ATP', { size: 19, fill: C.muted }));
  o.push(t(cx + 40, 384, 'stroma', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }), t(cx + 40, 414, '3 turns', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(fa(282, 518, 226, 588, RUST, 3.5, 20));
  o.push(`<rect x="22" y="590" width="300" height="74" rx="10" fill="#ffffff" stroke="${RUST}" stroke-width="2.5"/>`);
  o.push(t(172, 620, '1 TP leaves (3C)', { size: 21, weight: 700, fill: RUST, anchor: 'middle' }), t(172, 648, 'sugars, lipids, amino acids', { size: 18, fill: RUST, anchor: 'middle' }));
  o.push(panel(22, 696, 856, 112, '#ffffff', C.panelEdge));
  o.push(t(450, 738, 'Total for 3 turns: 9 ATP and 6 reduced NADP', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(450, 774, `per CO<tspan dy="5" font-size="70%">2</tspan><tspan dy="-5">: 3 ATP and 2 reduced NADP. TP is also called GALP.</tspan>`, { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 830, 'The Calvin cycle', o.join('\n'), 'Counting carbon through three turns');
}

export const figures = [
  { name: '05-cyclic-vs-noncyclic', after: '## Light-dependent reaction in steps', svg: cyclic(),
    alt: 'Two panels compare electron routes. Non-cyclic uses PSII and PSI, takes electrons from water and makes ATP, reduced NADP and oxygen. Cyclic uses PSI only, returns electrons to PSI and makes ATP only.',
    caption: 'Which products each photophosphorylation route makes.' },
  { name: '06-calvin-cycle', after: '### What changes when conditions change', svg: calvin(),
    alt: 'The Calvin cycle for three turns: 3 CO2 and 3 RuBP (15C) give 6 GP (18C), reduced to 6 TP. Five TP (15C) regenerate 3 RuBP and one TP leaves. In total 9 ATP and 6 reduced NADP are used, 3 and 2 per CO2.',
    caption: 'Counting carbon, ATP and reduced NADP through the Calvin cycle.' },
];
