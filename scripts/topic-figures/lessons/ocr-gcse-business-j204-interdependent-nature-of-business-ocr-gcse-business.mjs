import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ocr-gcse-business-j204-interdependent-nature-of-business-ocr-gcse-business';
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

const FN = { Marketing: [C.cream, C.olive], Operations: [C.tealLight, C.tealDark], Finance: [C.panel, C.rust], 'Human resources': [C.panel, C.blue] };

// 01 What each function needs from the others
{
  const needs = {
    Marketing: [['Operations', 'Products to the promised quality, on time'], ['Finance', 'A promotion budget; prices that cover costs'], ['Human resources', 'Staff who give good customer service']],
    Operations: [['Marketing', 'Sales forecasts to plan output'], ['Finance', 'Money for materials and equipment'], ['Human resources', 'Enough trained staff']],
    Finance: [['Marketing', 'Revenue forecasts'], ['Operations', 'Cost information'], ['Human resources', 'Wage and recruitment costs']],
    'Human resources': [['Marketing', 'Plans showing how many staff are needed'], ['Operations', 'The skills each process requires'], ['Finance', 'A budget for pay and training']],
  };
  let b = '';
  Object.entries(needs).forEach(([fn, rows], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 330;
    const [f, e] = FN[fn];
    b += rect(x, y, 410, 310, C.panel, e) + rect(x, y, 410, 56, f, e) + tx(x + 20, y + 36, `${fn} needs…`, { size: 20, weight: 700 });
    rows.forEach(([from, what], j) => {
      const yy = y + 72 + j * 78, [f2, e2] = FN[from];
      b += rect(x + 16, yy, 120, 64, f2, e2, 10, 2) + para(x + 76, yy + (from === 'Human resources' ? 27 : 38), from === 'Human resources' ? 'Human resources' : `from ${from}`, 104, { size: 15, weight: 700, anchor: 'middle' });
      b += para(x + 150, yy + (paraN(what, 240, 16) > 1 ? 26 : 38), what, 240, { size: 16 });
    });
  });
  b += tx(450, 790, 'Start with the function the question names, then follow the effect into another.', { size: 17, anchor: 'middle', weight: 600 });
  add('01-what-each-function-needs',
    svg(900, 816, 'What each function needs from the others', b),
    'Four panels, one per function. Marketing needs quality products on time from operations, a budget from finance and good service staff from HR. Operations needs sales forecasts, money for materials and trained staff. Finance needs revenue forecasts, cost information and wage costs. HR needs staffing plans, skill requirements and a pay and training budget.',
    'Every function relies on the other three.',
    '## The four functions and what each needs from the others');
}

// 02 Decision pattern
{
  const steps = [
    ['Objective', 'Growth, profit or survival?', C.panel, C.ink],
    ['Marketing', 'Enough demand? At what price? How will customers find out?', ...FN.Marketing],
    ['Operations', 'Capacity, process, suppliers and quality control?', ...FN.Operations],
    ['Human resources', 'Enough staff with the right skills? Training?', ...FN['Human resources']],
    ['Finance', 'Affordable? How funded? What return?', ...FN.Finance],
    ['Risk and reward', 'What could go wrong, what is gained, can risk be reduced?', C.cream, C.olive],
  ];
  let b = '';
  steps.forEach(([h, s, f, e], i) => {
    const y = 110 + i * 92;
    b += badge(58, y + 38, 22, String(i + 1), C.cream);
    b += rect(96, y, 500, 76, f, e, 10, 2.5) + tx(116, y + 32, h, { size: 18, weight: 700 }) + tx(116, y + 58, s, { size: 16, fill: C.ink });
    if (i < 5) b += line(58, y + 62, 58, y + 108, { w: 3 });
  });
  // weakest link
  b += rect(620, 110, 250, 536, C.panel) + tx(745, 146, 'Weakest link', { size: 20, weight: 700, anchor: 'middle' });
  [['Marketing plan', true], ['Operations capacity', false], ['Cash before customers pay', false]].forEach(([s, ok], i) => {
    const y = 176 + i * 120;
    b += `<rect x="660" y="${y}" width="170" height="80" rx="40" fill="${ok ? C.tealLight : C.panel}" stroke="${ok ? C.tealDark : C.rust}" stroke-width="5"${ok ? '' : ' stroke-dasharray="14 8"'}/>`;
    b += para(745, y + (paraN(s, 130, 15) > 1 ? 36 : 46), s, 130, { size: 15, weight: 700, anchor: 'middle' });
  });
  b += para(640, 560, 'A strong marketing plan can still fail if operations or cash cannot keep up.', 210, { size: 16, fill: C.rust });
  add('02-decision-pattern',
    svg(900, 670, 'The structure of a synoptic decision', b),
    'Six steps for any large decision: objective, marketing (demand and price), operations (capacity and quality), human resources (staff and skills), finance (affordability and return), then risk and reward. A chain beside it shows a decision is only as strong as its weakest link, such as operations capacity or cash.',
    'Work through every function: a decision is only as strong as its weakest link.',
    '## How interdependencies underpin decisions');
}

// 03 Risk and reward
{
  let b = panel(30, 110, 400, 330) + line(80, 400, 80, 150, { w: 3 }) + line(80, 400, 400, 400, { w: 3 });
  b += tx(70, 160, 'Reward', { size: 16, weight: 700, anchor: 'end' }) + tx(400, 428, 'Risk', { size: 16, weight: 700, anchor: 'end' });
  b += arrow(100, 380, 380, 170, { color: C.olive, marker: 'ahO', w: 4 });
  b += tx(410, 340, 'higher reward usually', { size: 16, anchor: 'end', fill: C.olive, weight: 600 }) + tx(410, 360, 'means higher risk', { size: 16, anchor: 'end', fill: C.olive, weight: 600 });
  b += rect(450, 110, 420, 330, C.panel) + tx(470, 146, 'Risk exists in every function', { size: 19, weight: 700 });
  [['Marketing', 'Demand lower than forecast'], ['Operations', 'Equipment fails'], ['Finance', 'Costs rise or cash runs short'], ['Human resources', 'Key staff leave']].forEach(([fn, s], i) => {
    const [f, e] = FN[fn], y = 166 + i * 66;
    b += rect(470, y, 380, 54, f, e, 10, 2) + tx(486, y + 34, fn, { size: 16, weight: 700 }) + tx(834, y + 34, s, { size: 16, anchor: 'end' });
  });
  b += rect(30, 460, 840, 180, C.tealLight, C.tealDark) + tx(56, 496, 'Reduce risk by', { size: 19, weight: 700, fill: C.tealDark });
  ['Researching the market', 'Testing on a small scale', 'Keeping a cash reserve', 'Using several suppliers', 'Training staff', 'Cash flow forecasts'].forEach((s, i) => {
    const x = 56 + (i % 3) * 272, y = 512 + Math.floor(i / 3) * 60;
    b += rect(x, y, 252, 48, C.panel, C.tealDark, 10, 2) + tx(x + 126, y + 30, s, { size: 16, anchor: 'middle' });
  });
  b += takeaway(660, 'How much risk is acceptable depends on the business.', 'A start-up with little cash can survive fewer mistakes than an established business with reserves.');
  add('03-risk-and-reward',
    svg(900, 660 + takeH('A start-up with little cash can survive fewer mistakes than an established business with reserves.') + 30, 'Risk and reward across the business', b),
    'Higher reward usually comes with higher risk. Risk appears in every function: lower demand, equipment failure, rising costs or cash shortages, and staff leaving. It is reduced by research, small-scale testing, cash reserves, several suppliers, training and cash flow forecasts.',
    'Every function carries risk; how much is acceptable depends on the business.',
    '## Risk and reward');
}

// 04 Harbour Lane ARR
{
  const x0 = 120, yb = 520, top = 200, max = 20000, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 540, 480) + tx(56, 146, 'Forecast net profit from the new shop', { size: 18, weight: 700 });
  [0, 5000, 10000, 15000, 20000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 545, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v, '£'), { size: 15, anchor: 'end', fill: C.muted }); });
  [9000, 14000, 16000, 17000].forEach((v, i) => {
    const x = x0 + 30 + i * 100;
    b += `<rect x="${x}" y="${yb - sc(v)}" width="70" height="${sc(v)}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += tx(x + 35, yb - sc(v) - 10, money(v, '£'), { size: 15, weight: 700, anchor: 'middle' }) + tx(x + 35, yb + 26, `Year ${i + 1}`, { size: 15, anchor: 'middle', fill: C.muted });
  });
  b += line(x0, yb - sc(14000), 545, yb - sc(14000), { color: C.rust, w: 3, dash: '10 6' }) + tx(x0 + 8, yb - sc(14000) - 10, 'average £14,000', { size: 15, weight: 700, fill: C.rust });
  b += line(x0, yb, 545, yb, { w: 2.5 });
  const st = (y, h, head, rows, f = C.panel, e = C.panelEdge) => rect(590, y, 280, h, f, e) + tx(608, y + 32, head, { size: 16, weight: 700, fill: C.muted }) + lines(608, y + 60, rows, { size: 16 }, 25);
  b += st(110, 125, 'Total profit', ['9,000 + 14,000 + 16,000', '+ 17,000 = £56,000']);
  b += st(250, 100, 'Average annual profit', ['56,000 ÷ 4 = £14,000']);
  b += st(365, 125, 'ARR', ['14,000 ÷ 60,000 × 100', '= 23.3%'], C.cream, C.olive);
  b += st(505, 85, 'Cost of fitting out', ['£60,000']);
  b += takeaway(610, '23.3% looks attractive, but it rests on forecasts.', 'Say what the figure means for the decision, not just the number.');
  add('04-harbour-lane-arr',
    svg(900, 610 + takeH('Say what the figure means for the decision, not just the number.') + 30, 'Harbour Lane Bakery: average rate of return', b),
    'Forecast profits of £9,000, £14,000, £16,000 and £17,000 over four years total £56,000, an average of £14,000 a year. On a £60,000 fit-out, ARR = 14,000 ÷ 60,000 × 100 = 23.3%.',
    'The second shop’s ARR is 23.3%, if the forecasts hold.',
    '## Worked example: a second shop');
}

// 05 Harbour Lane cash flow
{
  const x0 = 130, yb = 520, top = 200, max = 10000, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 840, 540) + tx(56, 146, 'Bank balance: first three months of the new shop', { size: 18, weight: 700 });
  [0, 2500, 5000, 7500, 10000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 850, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v, '£'), { size: 15, anchor: 'end', fill: C.muted }); });
  const bars = [['Opening', 8000, ''], ['Month 1', 4300, 'in 7,500, out 11,200: net −3,700'], ['Month 2', 3600, 'in 8,400, out 9,100: net −700'], ['Month 3', 4200, 'in 9,600, out 9,000: net +600']];
  bars.forEach(([m, v, n], i) => {
    const x = x0 + 40 + i * 175, w = 120;
    b += `<rect x="${x}" y="${yb - sc(v)}" width="${w}" height="${sc(v)}" fill="${i === 0 ? C.panel : i === 2 ? C.rust : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += tx(x + w / 2, yb - sc(v) - 10, money(v, '£'), { size: 17, weight: 700, anchor: 'middle' });
    b += tx(x + w / 2, yb + 26, m, { size: 16, weight: 700, anchor: 'middle' });
    if (n) b += para(x + w / 2, yb + 50, n, 150, { size: 15, anchor: 'middle', fill: n.includes('+') ? C.tealDark : C.rust, weight: 600 });
  });
  b += tx(x0 + 40 + 2 * 175 + 60, yb - sc(3600) + 30, 'low point', { size: 15, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += line(x0, yb, 850, yb, { w: 2.5 });
  b += tx(56, 630, 'Net cash flow = inflows − outflows; closing balance = opening balance + net cash flow.', { size: 15, fill: C.muted });
  b += takeaway(670, 'Little room for a surprise cost in month 2.', 'Training new staff before opening adds outflows before any inflows arrive. An overdraft would protect the thin balance.');
  add('05-harbour-lane-cash-flow',
    svg(900, 670 + takeH('Training new staff before opening adds outflows before any inflows arrive. An overdraft would protect the thin balance.') + 30, 'Harbour Lane Bakery: the cash squeeze', b),
    'The bank balance starts at £8,000, falls to £4,300 after month 1 (net −£3,700) and £3,600 after month 2 (net −£700), then rises to £4,200 in month 3 (net +£600). The month 2 low point leaves little room for a surprise cost.',
    'A profitable plan can still squeeze cash in the first months.',
    '## Worked example: a second shop');
}

// 06 Reading the figures across functions
{
  const cx = 450, cy = 400;
  let b = `<circle cx="${cx}" cy="${cy}" r="92" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>` + lines(cx, cy - 4, ['Second', 'shop?'], { size: 22, weight: 700, anchor: 'middle' }, 30);
  const q = [
    [30, 110, 'Finance', 'ARR 23.3% rests on forecasts; balance falls to £3,600 in month 2'],
    [530, 110, 'Marketing', 'Must sell 2,572 items a month to break even, about 86 a day; opening offers cost money'],
    [30, 500, 'Operations', 'Can the ovens supply two shops? Quality must match across both sites'],
    [530, 500, 'Human resources', 'Recruit and train staff before opening: outflows before inflows'],
  ];
  q.forEach(([x, y, fn, s]) => {
    const [f, e] = FN[fn];
    b += card(x, y, 340, 190, fn, s, { fill: f, edge: e, tfill: e, ts: 21, bs: 17, bfill: C.ink, top: 40 });
    b += line(x < 400 ? x + 340 : x, y < 300 ? y + 190 : y, cx + (x < 400 ? -66 : 66), cy + (y < 300 ? -66 : 66), { w: 3, color: e });
  });
  b += rect(30, 710, 840, 70, C.panel) + tx(56, 744, 'Break-even: 3,600 ÷ (2.50 − 1.10) = 3,600 ÷ 1.40 = 2,571.4, so 2,572 items', { size: 17, weight: 600 }) + tx(56, 768, 'Round up: 2,571 items would leave a small loss.', { size: 15, fill: C.muted });
  b += takeaway(800, 'Judgement: open if research confirms demand well over 2,572 items a month,', 'and arrange an overdraft to protect the thin cash balance in the first two months.');
  add('06-second-shop-across-functions',
    svg(900, 800 + takeH('and arrange an overdraft to protect the thin cash balance in the first two months.') + 30, 'One decision, four functions', b),
    'The second-shop decision seen by each function: finance (ARR of 23.3% on forecasts, a £3,600 low balance), marketing (2,572 items a month to break even, about 86 a day), operations (oven capacity and consistent quality) and human resources (staff recruited and trained before opening).',
    'Each function reads the same figures for a different risk.',
    '## Worked example: a second shop');
}

// 07 Comparing two options
{
  const row = (y, h, a, c, hl) => rect(30, y, 840, 70, C.panel) + tx(56, y + 43, h, { size: 18, weight: 700 }) + tx(470, y + 43, a, { size: 19, anchor: 'middle', weight: hl === 'a' ? 700 : 400, fill: hl === 'a' ? C.tealDark : C.ink }) + tx(730, y + 43, c, { size: 19, anchor: 'middle', weight: hl === 'c' ? 700 : 400, fill: hl === 'c' ? C.tealDark : C.ink });
  let b = rect(330, 110, 280, 70, C.cream, C.olive) + tx(470, 152, 'Second shop', { size: 20, weight: 700, anchor: 'middle' }) + rect(600, 110, 270, 70, C.tealLight, C.tealDark) + tx(735, 152, 'Refit existing shop', { size: 20, weight: 700, anchor: 'middle' });
  b += row(196, 'Cost', '£60,000', '£20,000', '');
  b += row(276, 'Profit a year', '£9,000 to £17,000', '£5,000', '');
  b += row(356, 'ARR', '14,000 ÷ 60,000 = 23.3%', '5,000 ÷ 20,000 = 25%', 'c');
  b += row(436, 'Total profit (4 years)', '£56,000', '£20,000', 'a');
  b += row(516, 'Risk', 'Higher', 'Lower', 'c');
  b += row(596, 'Growth', 'Yes', 'Limited', 'a');
  b += takeaway(690, 'Which is better depends on the owner’s objective and attitude to risk.', 'The refit wins on ARR and risk; the second shop wins on total profit and growth.');
  add('07-second-shop-or-refit',
    svg(900, 690 + takeH('The refit wins on ARR and risk; the second shop wins on total profit and growth.') + 30, 'Second shop or refit?', b),
    'The second shop costs £60,000, earns £56,000 over four years and has an ARR of 23.3%. The refit costs £20,000, earns £5,000 a year (£20,000 in total) and has an ARR of 25%. The refit has the higher ARR and lower risk; the second shop brings more total profit and growth.',
    'Higher ARR is not the whole story: objective and attitude to risk decide.',
    '## Worked example: a second shop');
}

// 08 A chain that crosses functions
{
  const ch = [['Marketing', 'Promotion succeeds'], ['Marketing', 'Demand rises'], ['Operations', 'Needs more stock'], ['Finance', 'Must pay suppliers before customers pay'], ['Finance', 'Cash falls']];
  let b = tx(450, 128, 'Analyse: build chains that cross functions', { size: 19, weight: 700, anchor: 'middle', fill: C.muted });
  ch.forEach(([fn, s], i) => {
    const [f, e] = FN[fn], x = 30 + i * 170;
    b += rect(x, 150, 150, 170, f, e, 12, 2.5) + tx(x + 75, 180, fn, { size: 15, weight: 700, anchor: 'middle', fill: e }) + para(x + 75, 226, s, 126, { size: 17, weight: 600, anchor: 'middle' });
    if (i < 4) b += arrow(x + 152, 235, x + 168, 235, { w: 3 });
  });
  b += rect(30, 350, 840, 210, C.panel) + tx(56, 386, 'Synoptic checklist', { size: 19, weight: 700 });
  ['Underline the function in the question; name at least one other it affects', 'Use figures from the case and say what each one means', 'Evaluate or recommend: weigh reward against risk and say what it depends on'].forEach((s, i) => {
    b += rect(56, 404 + i * 50, 30, 30, C.panel, C.tealDark, 6, 2) + path(`M62,${420 + i * 50} l7,7 l12,-14`, { stroke: C.tealDark, w: 3 }) + tx(100, 426 + i * 50, s, { size: 17 });
  });
  add('08-cross-function-chain',
    svg(900, 590, 'A chain that crosses functions', b),
    'An analysis chain coloured by function: promotion succeeds and demand rises (marketing), operations needs more stock, finance must pay suppliers before customers pay, so cash falls. A checklist reminds students to name a second function, use and interpret case figures and weigh reward against risk.',
    'Strong synoptic answers follow the effect from one function into others.',
    '## Exam technique for synoptic questions');
}
