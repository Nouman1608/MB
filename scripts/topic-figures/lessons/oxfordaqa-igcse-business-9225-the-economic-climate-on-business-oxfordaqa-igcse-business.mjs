import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-business-9225-the-economic-climate-on-business-oxfordaqa-igcse-business';
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

// 01 Three questions: who feels a rate change most?
{
  const qs = [
    ['How much does it borrow?', 'Little: owner’s savings or retained profit', 'A large loan or overdraft'],
    ['Is the borrowing fixed or variable?', 'Fixed-rate loan: repayments stay the same until it ends', 'Variable-rate loan or overdraft: cost changes at once (overdrafts most exposed)'],
    ['Do its customers borrow to buy?', 'No: everyday purchases', 'Yes: cars, furniture, houses, holidays; customers delay buying'],
  ];
  let b = tx(470, 132, 'Less exposed', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + tx(735, 132, 'More exposed', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  qs.forEach(([q, lo, hi], i) => {
    const y = 150 + i * 160;
    b += badge(58, y + 70, 24, String(i + 1), C.cream);
    b += card(94, y, 240, 140, q, '', { fill: C.cream, edge: C.olive, ts: 19 });
    b += card(350, y, 240, 140, '', lo, { fill: C.tealLight, edge: C.tealDark, bs: 17, bfill: C.ink });
    b += card(606, y, 264, 140, '', hi, { fill: C.panel, edge: C.rust, bs: 17, bfill: C.ink });
  });
  b += takeaway(640, 'Use the three questions to judge the size of the effect.', 'The same rate rise can barely touch one business and squeeze another.');
  add('01-three-exposure-questions',
    svg(900, 640 + takeH('The same rate rise can barely touch one business and squeeze another.') + 30, 'Who feels an interest rate change most?', b),
    'Three questions sort businesses into less and more exposed to a rate change: how much they borrow (little versus a large loan or overdraft), whether borrowing is fixed or variable (overdrafts most exposed), and whether customers borrow to buy items such as cars, furniture, houses or holidays.',
    'Debt size, fixed or variable borrowing, and customers’ borrowing decide the impact.',
    '## Interest rates: who feels a change most?');
}

// 02 Direct and indirect effects of a rate rise
{
  let b = card(320, 110, 260, 80, 'Interest rates rise', '', { fill: C.cream, edge: C.olive, ts: 21, align: 'middle' });
  b += parrow('M380,190 L380,215 L165,215 L165,240', { w: 3 }) + parrow('M450,190 L450,240', { w: 3 }) + parrow('M520,190 L520,215 L735,215 L735,240', { w: 3 });
  const col = (x, head, steps, edge, tf) => {
    let s = tx(x + 135, 262, head, { size: 18, weight: 700, anchor: 'middle', fill: tf });
    steps.forEach((st, i) => {
      const y = 280 + i * 120;
      s += card(x, y, 270, 96, '', st, { edge, bs: 17, bfill: C.ink, align: 'middle' });
      if (i < steps.length - 1) s += arrow(x + 135, y + 98, x + 135, y + 118, { w: 3 });
    });
    return s;
  };
  b += col(30, 'Direct: its own borrowing', ['Variable loan or overdraft costs more at once', 'Interest costs rise', 'Profit falls unless prices rise'], C.rust, C.rust);
  b += col(315, 'Indirect: households', ['Mortgages, loans and credit cost more', 'Less to spend; big purchases delayed', 'Fewer sales'], C.tealDark, C.tealDark);
  b += col(600, 'Indirect: other businesses', ['Loans for machinery, vans or premises cost more', 'Investment put off', 'Equipment suppliers lose orders, even with no debt'], C.tealDark, C.tealDark);
  b += rect(30, 650, 840, 70, C.tealLight, C.tealDark) + tx(450, 693, 'When rates fall, each chain runs the other way.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('02-direct-and-indirect-effects',
    svg(900, 750, 'How a rate rise reaches a business', b),
    'A rate rise works through three chains. Directly, variable loans and overdrafts cost more, so profit falls. Indirectly, households pay more on mortgages and loans and buy less, and other businesses put off investment, so equipment suppliers lose orders even with no debt. A fall reverses each chain.',
    'A rate rise hits a business through its own debt and through its customers.',
    '## Interest rates: who feels a change most?');
}

// 03 Atherley vs Pellow
{
  let b = tx(450, 124, 'Interest rates rise by 2 percentage points', { size: 19, weight: 700, anchor: 'middle', fill: C.muted });
  b += rect(30, 145, 410, 470, C.panel, C.tealDark) + tx(56, 182, 'Atherley Garage', { size: 22, weight: 700 }) + tx(56, 210, 'fixed-rate loan, five years', { size: 17, fill: C.muted });
  b += rect(52, 232, 366, 120, C.tealLight, C.tealDark, 10, 2) + lines(72, 268, ['$80,000 × 6%', '= $4,800 a year'], { size: 20, weight: 600 }, 32) + tx(398, 268, 'no change', { size: 16, anchor: 'end', fill: C.tealDark, weight: 700 });
  b += tx(56, 392, 'Direct effect: protected for now', { size: 17, weight: 700, fill: C.tealDark });
  b += tx(56, 432, 'Indirect effect:', { size: 17, weight: 700, fill: C.rust }) + para(56, 460, 'car owners with mortgages and loans have less to spend, so they may delay servicing or repairs', 360, { size: 17 });
  b += rect(460, 145, 410, 470, C.panel, C.rust) + tx(486, 182, 'Pellow Florist', { size: 22, weight: 700 }) + tx(486, 210, 'variable-rate loan and overdraft', { size: 17, fill: C.muted });
  const r = (y, h, a, c, d) => rect(482, y, 366, 104, C.panel, C.panelEdge, 10, 2) + tx(500, y + 30, h, { size: 16, weight: 700, fill: C.muted }) + tx(500, y + 60, a, { size: 17 }) + tx(500, y + 86, c, { size: 17 }) + tx(830, y + 86, d, { size: 17, weight: 700, anchor: 'end', fill: C.rust });
  b += r(232, 'Loan $50,000', '7%: $3,500', '9%: $4,500', '+$1,000');
  b += r(348, 'Overdraft $15,000', '10%: $1,500', '12%: $1,800', '+$300');
  b += rect(482, 466, 366, 60, C.cream, C.olive, 10, 2) + tx(500, 504, 'Extra interest a year', { size: 17, weight: 700 }) + tx(830, 504, '$1,300', { size: 21, weight: 700, anchor: 'end' });
  b += para(486, 560, 'Costs rise at once: profit falls unless it raises prices', 360, { size: 17, weight: 600, fill: C.rust });
  b += takeaway(640, 'A complete answer names both effects.', 'The direct effect on the business’s own borrowing, and the indirect effect through its customers.');
  add('03-atherley-and-pellow',
    svg(900, 640 + takeH('The direct effect on the business’s own borrowing, and the indirect effect through its customers.') + 30, 'Same rate rise, different effects', b),
    'After a 2-point rise, Atherley Garage’s fixed-rate $80,000 loan still costs $4,800 a year, but its customers may delay repairs. Pellow Florist pays $1,000 more on a $50,000 variable loan (7% to 9%) and $300 more on a $15,000 overdraft (10% to 12%), $1,300 extra a year.',
    'Fixed-rate debt delays the direct effect; variable debt feels it at once.',
    '## Worked example 1: same rise, different effects');
}

// 04 Four Sharia compliant forms
{
  const forms = [
    ['Murabaha', 'Financier buys the asset or goods and sells them to the business at an agreed higher price, paid in instalments', 'buys, then sells at a mark-up'],
    ['Ijara', 'Financier buys an asset, such as a machine, and leases it to the business for an agreed rent', 'owns and rents out'],
    ['Musharaka', 'Financier and business form a partnership, sharing profits and losses in agreed proportions', 'partners share profit and loss'],
    ['Mudaraba', 'One party provides the money, the other the skill and effort; profits are shared in agreed proportions', 'money + skill, profit shared'],
  ];
  let b = rect(30, 110, 840, 70, C.cream, C.olive) + tx(450, 152, 'No interest (riba) is charged or paid', { size: 20, weight: 700, anchor: 'middle' });
  forms.forEach(([h, s, k], i) => {
    const x = 30 + (i % 2) * 430, y = 200 + Math.floor(i / 2) * 180;
    b += rect(x, y, 410, 164, C.panel) + tx(x + 20, y + 38, h, { size: 22, weight: 700 }) + tx(x + 390, y + 38, k, { size: 15, anchor: 'end', fill: C.tealDark, weight: 600 });
    b += para(x + 20, y + 76, s, 370, { size: 17, fill: C.muted });
  });
  b += rect(30, 570, 410, 116, C.tealLight, C.tealDark) + tx(50, 604, 'Direct effect of a rate rise: smaller', { size: 18, weight: 700, fill: C.tealDark }) + para(50, 634, 'Price, rent or profit share is agreed in advance or linked to results', 370, { size: 17 });
  b += rect(460, 570, 410, 116, C.panel, C.rust) + tx(480, 604, 'Indirect effect: still applies', { size: 18, weight: 700, fill: C.rust }) + para(480, 634, 'Customers with dearer mortgages and loans spend less', 370, { size: 17 });
  b += tx(450, 720, 'Not free: the agreed price or profit share can be a large cost.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('04-sharia-compliant-finance',
    svg(900, 746, 'Sharia compliant alternatives to interest', b),
    'Four forms of finance without interest: murabaha (asset bought and resold at an agreed higher price in instalments), ijara (asset leased for an agreed rent), musharaka (partnership sharing profit and loss) and mudaraba (money from one party, skill from the other, profits shared). A rate rise has a smaller direct effect, but customers still spend less.',
    'Sharia compliant finance softens the direct effect of a rate rise, not the indirect one.',
    '## Sharia compliant alternatives');
}

// 05 Employment rising vs falling
{
  const rows = [
    ['Demand', 'More households earn wages, so spending rises', 'Households lose income or fear losing it, so spending falls'],
    ['Recruitment', 'Fewer people looking for work: vacancies harder to fill', 'More applicants for each vacancy'],
    ['Wages', 'Pressure to raise pay to attract and keep staff', 'Less pressure on pay'],
    ['Who gains', 'Restaurants, leisure, non-essential retail', 'Low-price retailers, repair services, some recruitment agencies'],
  ];
  let b = tx(385, 132, 'Employment rising', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + tx(700, 132, 'Employment falling', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  rows.forEach(([h, up, dn], i) => {
    const y = 150 + i * 112;
    b += card(30, y, 180, 96, h, '', { fill: C.cream, edge: C.olive, ts: 19, align: 'middle' });
    b += card(226, y, 318, 96, '', up, { fill: C.tealLight, edge: C.tealDark, bs: 17, bfill: C.ink });
    b += card(560, y, 310, 96, '', dn, { fill: C.panel, edge: C.rust, bs: 17, bfill: C.ink });
  });
  b += rect(30, 610, 840, 150, C.panel) + tx(56, 646, 'Local, not just national: a large factory closes', { size: 19, weight: 700 });
  const ch = ['Factory workers and families have less to spend', 'Local shops, cafés and taxi firms lose customers'];
  b += card(56, 664, 370, 78, '', ch[0], { bs: 17, bfill: C.ink, fill: C.cream, edge: C.olive }) + arrow(430, 703, 466, 703, { w: 3.5 }) + card(470, 664, 380, 78, '', ch[1], { bs: 17, bfill: C.ink, edge: C.rust });
  add('05-employment-effects',
    svg(900, 790, 'Rising and falling employment', b),
    'When employment rises, spending rises, vacancies are harder to fill, pay pressure grows and restaurants and leisure gain. When it falls, spending falls, there are more applicants, less pay pressure and low-price retailers and repair services gain. A local factory closure hits nearby shops, cafés and taxi firms.',
    'Employment changes demand, recruitment and wages, and helps some businesses as it hurts others.',
    '## The level of employment');
}

// 06 What households cut first
{
  let b = rect(30, 110, 840, 80, C.cream, C.olive) + tx(450, 158, 'When incomes fall, households…', { size: 21, weight: 700, anchor: 'middle' });
  b += `<defs><linearGradient id="g6" x1="0" x2="1"><stop offset="0" stop-color="${C.rust}"/><stop offset="1" stop-color="${C.tealDark}"/></linearGradient></defs>`;
  b += `<rect x="60" y="230" width="780" height="22" rx="11" fill="url(#g6)"/>`;
  b += tx(60, 285, 'cut first', { size: 18, weight: 700, fill: C.rust }) + tx(840, 285, 'changes least', { size: 18, weight: 700, fill: C.tealDark, anchor: 'end' });
  b += card(30, 310, 400, 120, 'Things they enjoy but do not need', 'Eating out, holidays, new technology, premium brands', { edge: C.rust, tfill: C.rust, ts: 19, bs: 17, top: 40 });
  b += card(470, 310, 400, 120, 'Necessities', 'Such as basic food', { edge: C.tealDark, tfill: C.tealDark, ts: 19, bs: 17, top: 40 });
  b += tx(56, 480, 'Two more responses', { size: 19, weight: 700 });
  b += card(30, 498, 400, 100, 'Delay large purchases', 'such as a new sofa', { ts: 18, bs: 16, top: 36 });
  b += card(470, 498, 400, 100, 'Trade down', 'to cheaper alternatives', { ts: 18, bs: 16, top: 36 });
  b += tx(450, 640, 'When incomes rise, spending on non-essentials rises most.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('06-what-households-cut',
    svg(900, 670, 'Spending as incomes change', b),
    'A scale from cut first to changes least. When incomes fall, households cut things they enjoy but do not need, such as eating out, holidays, new technology and premium brands, delay large purchases and trade down; spending on necessities such as basic food changes least.',
    'Non-essentials and big purchases are cut first; necessities hold up.',
    '## Consumer spending as incomes fluctuate');
}

// 07 Rowanbrook Furniture
{
  const x0 = 120, yb = 560, top = 200, max = 120000, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 840, 520) + tx(56, 146, 'Rowanbrook Furniture: revenue before and after', { size: 19, weight: 700 });
  [0, 40000, 80000, 120000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 850, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  const grp = (x, label, sub, a, bb, pct) => {
    let s = `<rect x="${x}" y="${yb - sc(a)}" width="110" height="${sc(a)}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<rect x="${x + 130}" y="${yb - sc(bb)}" width="110" height="${sc(bb)}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += tx(x + 55, yb - sc(a) - 10, money(a), { size: 17, weight: 700, anchor: 'middle' }) + tx(x + 185, yb - sc(bb) - 10, money(bb), { size: 17, weight: 700, anchor: 'middle' });
    s += tx(x + 120, yb + 30, label, { size: 18, weight: 700, anchor: 'middle' }) + tx(x + 120, yb + 54, sub, { size: 15, anchor: 'middle', fill: C.muted });
    s += tx(x + 120, yb - sc(Math.max(a, bb)) - 44, pct, { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
    return s;
  };
  b += grp(170, 'Sofas ($900, on credit)', '120 sold → 96 sold', 108000, 86400, 'sales −20%');
  b += grp(560, 'Cushions and throws ($30)', '600 sold → 576 sold', 18000, 17280, 'sales −4%');
  b += line(x0, yb, 850, yb, { w: 2.5 });
  b += rect(640, 166, 20, 20, C.teal, C.ink, 3, 2) + tx(668, 182, 'before', { size: 16 }) + rect(740, 166, 20, 20, C.mustard, C.ink, 3, 2) + tx(768, 182, 'after', { size: 16 });
  b += rect(30, 650, 410, 120, C.panel) + tx(50, 684, 'Total revenue', { size: 17, weight: 700, fill: C.muted }) + lines(50, 714, ['$126,000 → $103,680', 'fall $22,320 (about 17.7%)'], { size: 18 }, 28);
  b += rect(460, 650, 410, 120, C.cream, C.olive) + tx(480, 684, 'Of which sofas', { size: 17, weight: 700, fill: C.muted }) + lines(480, 714, ['$108,000 − $86,400', '= $21,600'], { size: 18 }, 28);
  b += takeaway(790, 'A sofa is a large purchase that can be delayed and usually needs borrowing.', 'Rowanbrook could promote accessories, offer a cheaper sofa range, hold less sofa stock, or offer interest-free payment plans at its own cost.');
  add('07-rowanbrook-furniture',
    svg(900, 790 + takeH('Rowanbrook could promote accessories, offer a cheaper sofa range, hold less sofa stock, or offer interest-free payment plans at its own cost.') + 30, 'Rowanbrook: big purchases fall furthest', b),
    'After a rate rise and an income squeeze, Rowanbrook’s sofa revenue falls from $108,000 (120 sofas) to $86,400 (96), down 20%, while cushions and throws fall only from $18,000 to $17,280, down 4%. Total revenue falls $22,320, about 17.7%, and $21,600 of that is sofas.',
    'Delayable, credit-funded purchases take almost all of the fall.',
    '## Consumer spending as incomes fluctuate');
}

// 08 Explain, analyse, evaluate
{
  let b = rect(30, 110, 840, 110, C.panel) + tx(56, 146, 'Explain: one effect and its reason', { size: 18, weight: 700, fill: C.muted }) +
    tx(56, 186, '“The overdraft rate rises, so interest costs increase, reducing profit.”', { size: 18, italic: true });
  b += tx(56, 262, 'Analyse: follow the chain through customers', { size: 18, weight: 700, fill: C.muted });
  const steps = ['Rate rise', 'Higher mortgage payments', 'Less spending', 'Fewer sales'];
  steps.forEach((s, i) => {
    const x = 30 + i * 215;
    b += card(x, 280, 190, 90, s, '', { fill: i === 3 ? C.cream : C.tealLight, edge: i === 3 ? C.olive : C.tealDark, ts: 18, align: 'middle' });
    if (i < 3) b += arrow(x + 192, 325, x + 212, 325, { w: 3 });
  });
  b += rect(30, 400, 840, 200, C.tealLight, C.tealDark) + tx(56, 436, 'Evaluate: how much does it matter for this business?', { size: 18, weight: 700, fill: C.tealDark });
  ['Its level of debt', 'Fixed or variable borrowing', 'Necessities or luxuries'].forEach((s, i) => {
    b += card(56 + i * 272, 460, 252, 116, s, '', { ts: 18, align: 'middle', edge: C.tealDark });
  });
  add('08-exam-answer-ladder',
    svg(900, 630, 'Writing about the economic climate', b),
    'Explain: an overdraft rate rise increases interest costs and reduces profit. Analyse: rate rise, higher mortgage payments, less spending, fewer sales. Evaluate: judge the effect using the business’s debt, whether borrowing is fixed or variable, and whether it sells necessities or luxuries.',
    'Explain one effect, analyse through customers, then judge using the case.',
    '## Exam technique for this section');
}
