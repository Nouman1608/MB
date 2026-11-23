import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-business-9225-legislation';
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

// 01 Three areas of law
{
  const cols = [
    ['Employment law', 'Employees', ['Written contracts', 'A minimum wage', 'Limits on working hours', 'Paid holiday', 'Fair treatment, no discrimination', 'Fair dismissal and redundancy']],
    ['Health and safety law', 'Employees, visitors and customers on the premises', ['Assessing risks', 'Safe equipment and premises', 'Training', 'Protective clothing', 'Reporting accidents']],
    ['Consumer law', 'Customers', ['Goods match description, acceptable quality, fit for purpose', 'Safe products', 'Accurate weights and labels', 'Honest advertising', 'Refunds or repairs for faulty goods']],
  ];
  let b = '';
  cols.forEach(([h, who, reqs], i) => {
    const x = 30 + i * 285;
    b += rect(x, 110, 270, 450, C.panel) + rect(x, 110, 270, 64, C.cream, C.olive) + tx(x + 135, 150, h, { size: 19, weight: 700, anchor: 'middle' });
    let y = 200;
    reqs.forEach((r) => { const L = wrap(r, 220, 16); b += tx(x + 18, y, '•', { size: 16 }) + lines(x + 34, y, L, { size: 16 }); y += L.length * LH(16) + 10; });
    b += rect(x + 14, 432, 242, 114, C.tealLight, C.tealDark, 10, 2) + tx(x + 30, 460, 'Protects', { size: 15, weight: 700, fill: C.tealDark }) + para(x + 30, 486, who, 210, { size: 17, weight: 600 });
  });
  add('01-three-areas-of-law',
    svg(900, 590, 'Three areas of business law', b),
    'Three columns. Employment law (contracts, minimum wage, hours, holiday, fair treatment and dismissal) protects employees. Health and safety law (risk assessment, safe equipment, training, protective clothing, accident reporting) protects employees and visitors. Consumer law (goods as described, safe products, accurate labels, honest adverts, refunds) protects customers.',
    'Each area of law sets minimum standards that protect a different group.',
    '## What each area of law typically covers');
}

// 02 Four impact headings
{
  const cx = 450, cy = 400;
  let b = `<circle cx="${cx}" cy="${cy}" r="88" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + lines(cx, cy - 4, ['A business', 'law'], { size: 21, weight: 700, anchor: 'middle' }, 28);
  const boxes = [
    [30, 110, 'Cost', 'Higher wages, safety equipment, inspections, testing, insurance, record keeping: profit falls unless prices rise', [370, 330]],
    [530, 110, 'Training needs', 'Safe working methods, fair recruitment and dismissal, refund rights: costs time and money, but fewer mistakes', [530, 330]],
    [30, 500, 'Recruitment', 'No discrimination in adverts or interviews; proper contracts; checks on right to work: slower, but a wider pool and fewer disputes', [370, 470]],
    [530, 500, 'Failing to comply', 'Fines, compensation, orders to stop or close, recalls, prosecution, and bad publicity', [530, 470]],
  ];
  boxes.forEach(([x, y, h, s, [ax, ay]], i) => {
    b += card(x, y, 340, 190, h, s, { ts: 21, bs: 17, top: 40, edge: i === 3 ? C.rust : C.panelEdge, tfill: i === 3 ? C.rust : C.ink });
    const sx = x < 400 ? x + 340 : x, sy = y < 300 ? y + 190 : y;
    b += arrow(ax, ay, sx + (x < 400 ? -30 : 30), sy + (y < 300 ? 6 : -6), { w: 3 });
  });
  add('02-four-impacts',
    svg(900, 720, 'Four ways a law affects a business', b),
    'A business law at the centre with four impacts: cost (wages, equipment, inspections, insurance), training needs (safe methods, fair recruitment, refund rights), recruitment (non-discriminatory adverts, contracts, right-to-work checks) and the consequences of failing to comply (fines, compensation, closure orders, recalls, prosecution, bad publicity).',
    'Explain a law’s effect through cost, training, recruitment or the penalties for breaking it.',
    '## Assessing the impact: the four headings in the specification');
}

// 03 Consequences of failing to comply
{
  const steps = ['Fines', 'Compensation to injured workers or customers', 'Orders to stop using unsafe equipment or to close premises', 'Product recalls', 'Prosecution of managers, in serious cases'];
  let b = tx(56, 132, 'Legal consequences', { size: 19, weight: 700, fill: C.rust });
  steps.forEach((s, i) => {
    const y = 150 + i * 80;
    b += rect(30, y, 500, 66, C.panel, C.rust, 10, 2) + para(52, y + (paraN(s, 456, 18) > 1 ? 28 : 40), s, 456, { size: 18 });
  });
  b += arrow(534, 330, 562, 330, { w: 3.5 });
  b += rect(566, 150, 304, 386, C.cream, C.olive) + tx(590, 196, 'Bad publicity', { size: 22, weight: 700 }) +
    para(590, 236, 'Customers and future employees lose trust.', 256, { size: 18 }) +
    para(590, 330, 'This often costs more than the fine itself.', 256, { size: 18, weight: 700, fill: C.olive });
  add('03-consequences-of-breaking-law',
    svg(900, 566, 'The cost of breaking the law', b),
    'Legal consequences of breaking business law: fines, compensation, orders to stop using unsafe equipment or close premises, product recalls and, in serious cases, prosecution of managers. Bad publicity follows, losing the trust of customers and future employees, and often costs more than the fine.',
    'Penalties hurt, and lost trust can cost more than any fine.',
    '## Assessing the impact: the four headings in the specification');
}

// 04 Juniper Cafés minimum wage rise
{
  const box = (x, y, w, h, head, val, f = C.panel, e = C.panelEdge) => rect(x, y, w, h, f, e) + tx(x + w / 2, y + 36, head, { size: 16, anchor: 'middle', fill: C.muted }) + tx(x + w / 2, y + 74, val, { size: 23, weight: 700, anchor: 'middle' });
  let b = '';
  b += box(30, 110, 250, 110, '20 staff × 35 h × 50 weeks', '35,000 hours');
  b += tx(310, 175, '×', { size: 28, anchor: 'middle', weight: 700 });
  b += box(340, 110, 230, 110, '$7.80 − $7.20', '$0.60 an hour');
  b += tx(600, 175, '=', { size: 28, anchor: 'middle', weight: 700 });
  b += box(630, 110, 240, 110, 'Extra cost a year', '$21,000', C.cream, C.olive);
  b += arrow(750, 222, 750, 262, { w: 3 });
  b += box(560, 266, 310, 110, '$21,000 ÷ 150,000 meals', '$0.14 a meal', C.cream, C.olive);
  b += tx(56, 300, 'Price rise needed', { size: 18, weight: 700 }) + para(56, 330, 'to cover the higher wage bill', 460, { size: 17, fill: C.muted });
  b += tx(56, 430, 'Juniper’s three main choices', { size: 20, weight: 700 });
  [['Raise prices', 'by about 14 cents a meal'], ['Accept lower profit', 'absorb the $21,000'], ['Use fewer hours', 'e.g. faster ordering systems']].forEach(([h, s], i) => {
    b += card(30 + i * 285, 450, 270, 110, h, s, { fill: C.tealLight, edge: C.tealDark, ts: 19, bs: 17, top: 40 });
  });
  b += takeaway(590, 'The level playing field', 'A 14-cent rise may be accepted if rivals face the same law and raise their prices too.');
  add('04-juniper-minimum-wage',
    svg(900, 590 + takeH('A 14-cent rise may be accepted if rivals face the same law and raise their prices too.') + 30, 'Juniper Cafés: a minimum wage rise', b),
    'Juniper Cafés pays 20 staff for 35,000 hours a year (20 × 35 × 50). A 60-cent rise from $7.20 to $7.80 adds $21,000 a year, which is $0.14 on each of 150,000 meals. Juniper can raise prices, accept lower profit or use fewer hours.',
    'A 60-cent wage rise costs Juniper $21,000 a year, or 14 cents a meal.',
    '## National minimum wage: benefits and drawbacks');
}

// 05 Consumer law: what changes
{
  const rows = [
    ['Products must be safe and work as described', 'More spent on design, testing and quality control'],
    ['Packaging and adverts must be accurate', 'Marketing claims need checking'],
    ['Faulty goods must be repaired, replaced or refunded', 'Returns procedures and staff who know the rules'],
  ];
  let b = tx(245, 132, 'The law requires', { size: 19, weight: 700, anchor: 'middle', fill: C.olive }) + tx(665, 132, 'So the business must', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([a, c], i) => {
    const y = 152 + i * 130;
    b += card(30, y, 430, 110, '', a, { fill: C.cream, edge: C.olive, bs: 18, bfill: C.ink });
    b += arrow(464, y + 55, 500, y + 55, { w: 3.5 });
    b += card(504, y, 366, 110, '', c, { fill: C.tealLight, edge: C.tealDark, bs: 18, bfill: C.ink });
  });
  add('05-consumer-law-effects',
    svg(900, 540, 'How consumer law changes a business', b),
    'Three requirements and their effects: safe products that work as described mean more spending on design, testing and quality control; accurate packaging and adverts mean checking marketing claims; and repairs, replacements or refunds for faulty goods mean returns procedures and trained staff.',
    'Consumer law shapes what a business sells and how it sells it.',
    '## Consumer protection laws');
}

// 06 Brackwell recall vs testing
{
  const x0 = 120, yb = 560, top = 190, max = 35000, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 500, 520);
  [0, 10000, 20000, 30000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 505, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  b += `<rect x="160" y="${yb - sc(6000)}" width="130" height="${sc(6000)}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="340" y="${yb - sc(32000)}" width="130" height="${sc(32000)}" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += tx(225, yb - sc(6000) - 10, 'about $6,000', { size: 17, weight: 700, anchor: 'middle' }) + tx(405, yb - sc(32000) - 10, '$32,000', { size: 17, weight: 700, anchor: 'middle' });
  b += line(x0, yb, 505, yb, { w: 2.5 });
  b += tx(225, yb + 28, 'Safety testing', { size: 17, weight: 700, anchor: 'middle' }) + tx(225, yb + 50, 'before sale', { size: 15, anchor: 'middle', fill: C.muted });
  b += tx(405, yb + 28, 'Recall', { size: 17, weight: 700, anchor: 'middle' }) + tx(405, yb + 50, 'after sale', { size: 15, anchor: 'middle', fill: C.muted });
  b += rect(550, 110, 320, 150, C.panel) + tx(570, 144, 'Kettles returned', { size: 17, weight: 700, fill: C.muted }) + lines(570, 178, ['40% × 2,000', '= 800 kettles'], { size: 20 }, 30);
  b += rect(550, 280, 320, 180, C.cream, C.olive) + tx(570, 314, 'Cost of recall', { size: 17, weight: 700, fill: C.muted }) + lines(570, 348, ['800 × ($35 refund', '+ $5 handling)', '= $32,000'], { size: 20 }, 30);
  b += rect(550, 480, 320, 150, C.panel, C.rust) + para(570, 516, 'Over five times the cost of testing, before any damage to reputation with shops', 280, { size: 17, weight: 600, fill: C.rust });
  b += takeaway(660, 'Compliance is often cheaper than non-compliance.', '');
  add('06-brackwell-recall',
    svg(900, 660 + takeH('') + 30, 'Brackwell Appliances: the cost of a recall', b),
    'Brackwell must recall 2,000 faulty kettles; 40% (800) are returned at $35 refund plus $5 handling, costing $32,000. Safety testing before sale would have cost about $6,000, so the recall costs over five times as much, before reputation damage.',
    'Testing first would have cost about $6,000; the recall costs $32,000.',
    '## Consumer protection laws');
}

// 07 Analyse chain for a law question
{
  const steps = [
    ['The law', 'The minimum wage rises from $7.20 to $7.80'],
    ['What the business must do', 'Pay 20 staff $0.60 more for 35,000 hours'],
    ['The cost or benefit', '$21,000 more a year; staff may be more motivated and stay'],
    ['Effect on profit or staff', 'Profit falls unless meals rise about 14 cents, or hours are cut'],
  ];
  let b = tx(450, 128, 'Analyse: a chain from the law to profit or staff (Juniper Cafés)', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  steps.forEach(([h, s], i) => {
    const y = 150 + i * 112;
    b += badge(64, y + 47, 22, String(i + 1), C.cream);
    b += card(100, y, 770, 94, h, s, { ts: 18, bs: 18, top: 34, bfill: C.ink, fill: i === 3 ? C.cream : C.panel, edge: i === 3 ? C.olive : C.panelEdge });
    if (i < 3) b += arrow(64, y + 70, 64, y + 134, { w: 3 });
  });
  b += rect(30, 610, 840, 170, C.tealLight, C.tealDark) + tx(56, 648, 'Evaluate: the judgement depends on', { size: 19, weight: 700, fill: C.tealDark });
  ['How many staff are on the minimum wage', 'Whether rivals face the same cost', 'Whether customers will accept higher prices'].forEach((s, i) => {
    b += rect(56 + i * 272, 670, 252, 90, C.panel, C.tealDark, 10, 2) + para(72 + i * 272, 670 + (paraN(s, 220, 17) > 1 ? 38 : 52), s, 220, { size: 17 });
  });
  add('07-analyse-law-chain',
    svg(900, 810, 'Answering a legislation question', b),
    'A four-step analysis chain using Juniper Cafés: the minimum wage rises, the business must pay more for 35,000 hours, this costs $21,000 a year but may motivate staff, so profit falls unless prices rise about 14 cents. The judgement depends on how many staff are affected, rivals’ costs and customers’ reaction to prices.',
    'Law, what the business must do, cost or benefit, effect: then judge.',
    '## Exam technique for this section');
}
