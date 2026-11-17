import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-business-ybs11-managing-finance';
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

// 01 Three levels of profit
{
  const rows = [
    ['Revenue', '', C.tealLight, C.tealDark],
    ['− Cost of sales', 'direct cost of goods sold: materials, goods for resale', C.panel, C.rust],
    ['= Gross profit', 'gross profit margin = gross profit ÷ revenue × 100', C.cream, C.olive],
    ['− Other operating expenses', 'overheads: rent, salaries, marketing, utilities', C.panel, C.rust],
    ['= Operating profit', 'operating profit margin = operating profit ÷ revenue × 100', C.cream, C.olive],
    ['− Interest (and tax, where given)', '', C.panel, C.rust],
    ['= Profit for the year', 'margin = profit for the year ÷ revenue × 100', C.mustard, C.olive],
  ];
  let b = '';
  rows.forEach(([h, s, f, e], i) => {
    const y = 110 + i * 84, ind = h.startsWith('=') ? 0 : h.startsWith('−') ? 40 : 0;
    b += rect(30 + ind, y, 840 - ind, 70, f, e, 10, 2.5) + tx(54 + ind, y + 43, h, { size: 20, weight: 700 });
    if (s) b += tx(846, y + 43, s, { size: 15, anchor: 'end', fill: C.muted });
  });
  b += tx(450, 712, 'Reading down the statement of comprehensive income shows where profit is lost.', { size: 17, anchor: 'middle', weight: 600 });
  add('01-three-levels-of-profit',
    svg(900, 740, 'From revenue to profit for the year', b),
    'A ladder: revenue minus cost of sales gives gross profit; minus other operating expenses gives operating profit; minus interest (and tax) gives profit for the year. Each profit level divided by revenue and multiplied by 100 gives its margin.',
    'Each level of profit takes away one more layer of cost.',
    '## Three levels of profit');
}

// 02 Lindqvist two years
{
  const x0 = 120, yb = 470, top = 180, max = 1000, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 840, 420) + tx(56, 146, 'Lindqvist Furniture ($000)', { size: 19, weight: 700 });
  [0, 250, 500, 750, 1000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 520, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, String(v), { size: 15, anchor: 'end', fill: C.muted }); });
  const col = (x, label, parts) => {
    let s = '', acc = 0;
    parts.forEach(([v, f, lab]) => { s += `<rect x="${x}" y="${yb - sc(acc + v)}" width="150" height="${sc(v)}" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`; if (sc(v) > 22) s += tx(x + 75, yb - sc(acc + v / 2) + 6, `${lab} ${v}`, { size: 15, anchor: 'middle', weight: 700, fill: f === C.tealDark ? '#ffffff' : C.ink }); acc += v; });
    s += tx(x + 75, yb - sc(acc) - 10, `revenue ${acc}`, { size: 16, weight: 700, anchor: 'middle' }) + tx(x + 75, yb + 26, label, { size: 17, weight: 700, anchor: 'middle' });
    return s;
  };
  b += col(160, 'Year 1', [[100, C.tealDark, 'profit'], [20, C.sand, ''], [200, C.panel, 'overheads'], [480, C.rust, 'cost of sales']]);
  b += col(350, 'Year 2', [[80, C.tealDark, 'profit'], [25, C.sand, ''], [210, C.panel, 'overheads'], [585, C.rust, 'cost of sales']]);
  b += line(x0, yb, 520, yb, { w: 2.5 });
  b += tx(275, 516, 'unlabelled thin band = interest (20, then 25)', { size: 15, anchor: 'middle', fill: C.muted });
  // margins
  const mg = [['Gross', 40.0, 35.0], ['Operating', 15.0, 11.7], ['Profit for the year', 12.5, 8.9]];
  b += tx(560, 146, 'Margins', { size: 19, weight: 700 });
  mg.forEach(([h, a, c], i) => {
    const y = 170 + i * 116, s2 = 6;
    b += tx(560, y + 18, h, { size: 16, weight: 700, fill: C.muted });
    b += `<rect x="560" y="${y + 28}" width="${a * s2}" height="26" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + tx(566 + a * s2, y + 47, `Y1 ${a.toFixed(1)}%`, { size: 15, weight: 700 });
    b += `<rect x="560" y="${y + 60}" width="${c * s2}" height="26" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + tx(566 + c * s2, y + 79, `Y2 ${c.toFixed(1)}%`, { size: 15, weight: 700 });
  });
  const st = (x, w, head, rows, f = C.panel, e = C.panelEdge) => rect(x, 550, w, 140, f, e) + tx(x + 18, 584, head, { size: 17, weight: 700, fill: C.muted }) + lines(x + 18, 614, rows, { size: 17 }, 26);
  b += st(30, 270, 'Revenue', ['800 → 900', '+12.5%']);
  b += st(315, 270, 'Cost of sales', ['480 → 585', 'about +21.9%'], C.panel, C.rust);
  b += st(600, 270, 'Overheads', ['200 → 210', 'only +10']);
  b += takeaway(710, 'Gross profit fell from 320 to 315 although revenue rose.', 'The falling gross margin points to the cost of each item sold, such as dearer timber or discounts given, rather than to overheads.');
  add('02-lindqvist-profit-margins',
    svg(900, 710 + takeH('The falling gross margin points to the cost of each item sold, such as dearer timber or discounts given, rather than to overheads.') + 30, 'Lindqvist Furniture: revenue up, profit down', b),
    'Lindqvist’s revenue rises from $800,000 to $900,000, but cost of sales rises from $480,000 to $585,000, so gross profit falls from $320,000 to $315,000. Margins fall: gross 40.0% to 35.0%, operating 15.0% to 11.7%, profit for the year 12.5% to 8.9%. Overheads rose only $10,000.',
    'Cost of sales grew faster than revenue, so every margin fell.',
    '## Worked example 1: comparing two years');
}

// 03 Profit is not cash
{
  const rows = [
    ['Sales on credit', 'count as revenue now', 'cash arrives later'],
    ['Inventory', 'in cost of sales only when sold', 'paid for before it is sold'],
    ['A loan', 'not revenue', 'brings cash in'],
    ['Buying equipment', 'cost spread over several years', 'uses cash now'],
  ];
  let b = tx(475, 132, 'Effect on profit', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }) + tx(735, 132, 'Effect on cash', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([h, p, c], i) => {
    const y = 150 + i * 100;
    b += card(30, y, 300, 84, h, '', { ts: 19, align: 'middle', fill: C.panel });
    b += card(350, y, 250, 84, '', p, { fill: C.cream, edge: C.olive, bs: 17, bfill: C.ink, align: 'middle' });
    b += card(620, y, 250, 84, '', c, { fill: C.tealLight, edge: C.tealDark, bs: 17, bfill: C.ink, align: 'middle' });
  });
  b += card(30, 560, 410, 120, 'Profitable, but out of cash', 'can fail', { edge: C.rust, tfill: C.rust, ts: 19, bs: 17, align: 'middle' });
  b += card(460, 560, 410, 120, 'Unprofitable, but borrowing', 'can survive for a while', { edge: C.tealDark, tfill: C.tealDark, ts: 19, bs: 17, align: 'middle' });
  add('03-profit-is-not-cash',
    svg(900, 710, 'Why profit and cash differ', b),
    'Four reasons profit and cash differ: credit sales count as revenue before cash arrives; inventory is paid for before it is sold; a loan brings cash but is not revenue; equipment uses cash now but its cost is spread over years. A profitable business can fail for lack of cash.',
    'Profit measures a period’s performance; cash is what is actually in the bank.',
    '## Profit is not cash');
}

// 04 Lindqvist liquidity before/after JIT
{
  const x0 = 120, yb = 560, top = 200, max = 80000, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 840, 530) + tx(56, 146, 'Lindqvist: current assets against current liabilities', { size: 19, weight: 700 });
  [0, 20000, 40000, 60000, 80000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 850, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  const stack = (x, parts, label) => {
    let s = '', acc = 0;
    parts.forEach(([v, f, lab]) => { s += `<rect x="${x}" y="${yb - sc(acc + v)}" width="110" height="${sc(v)}" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`; if (sc(v) > 20) s += tx(x + 55, yb - sc(acc + v / 2) + 6, lab, { size: 14, anchor: 'middle', weight: 700, fill: f === C.tealDark || f === C.rust ? '#ffffff' : C.ink }); acc += v; });
    s += tx(x + 55, yb - sc(acc) - 10, money(acc), { size: 16, weight: 700, anchor: 'middle' }) + tx(x + 55, yb + 24, label, { size: 15, anchor: 'middle', fill: C.muted, weight: 600 });
    return s;
  };
  b += stack(160, [[5000, C.teal, 'cash 5'], [30000, C.tealLight, 'receivables 30'], [40000, C.cream, 'inventory 40']], 'assets');
  b += stack(280, [[35000, C.panel, 'payables 35'], [15000, C.rust, 'overdraft 15']], 'liabilities');
  b += stack(520, [[5000, C.teal, 'cash 5'], [30000, C.tealLight, 'receivables 30'], [25000, C.cream, 'inventory 25']], 'assets');
  b += stack(640, [[35000, C.panel, 'payables 35']], 'liabilities');
  b += tx(275, yb + 54, 'Before', { size: 18, weight: 700, anchor: 'middle' }) + tx(635, yb + 54, 'After JIT, overdraft repaid', { size: 18, weight: 700, anchor: 'middle' });
  b += line(x0, yb, 850, yb, { w: 2.5 });
  const st = (x, head, rows, f, e) => rect(x, 660, 410, 150, f, e) + tx(x + 20, 694, head, { size: 18, weight: 700 }) + lines(x + 20, 726, rows, { size: 17 }, 27);
  b += st(30, 'Before', ['Current ratio = 75 ÷ 50 = 1.5', 'Acid test = (75 − 40) ÷ 50 = 0.7', 'Working capital = $25,000'], C.panel, C.panelEdge);
  b += st(460, 'After', ['Current ratio = 60 ÷ 35 = 1.71', 'Acid test = (60 − 25) ÷ 35 = 1.0', 'No overdraft interest'], C.tealLight, C.tealDark);
  b += takeaway(830, 'Both ratios improve.', 'But with less buffer inventory, a late delivery could halt production.');
  add('04-lindqvist-liquidity',
    svg(900, 830 + takeH('But with less buffer inventory, a late delivery could halt production.') + 30, 'Lindqvist: improving liquidity with JIT', b),
    'Before: current assets of $75,000 (inventory 40, receivables 30, cash 5, in $000) against liabilities of $50,000 (payables 35, overdraft 15), a current ratio of 1.5 and acid test of 0.7. After cutting inventory by $15,000 with JIT and repaying the overdraft: $60,000 against $35,000, ratios 1.71 and 1.0.',
    'Less inventory and no overdraft lift both liquidity ratios.',
    '## Worked example 2: improving liquidity');
}

// 05 Factoring
{
  let b = rect(30, 110, 840, 80, C.cream, C.olive) + tx(450, 158, 'Invoices worth $60,000', { size: 22, weight: 700, anchor: 'middle' });
  const s2 = 12; // px per $1,000
  const X = 60;
  b += tx(X, 236, 'Now', { size: 17, weight: 700 }) + tx(X + 48 * s2 + 10, 236, 'When customers pay', { size: 17, weight: 700 });
  b += `<rect x="${X}" y="250" width="${48 * s2}" height="70" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(X + 24 * s2, 292, '80% paid now: $48,000', { size: 18, weight: 700, anchor: 'middle' });
  b += `<rect x="${X + 48 * s2}" y="250" width="${10.2 * s2}" height="70" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(X + 53.1 * s2, 292, '$10,200', { size: 15, weight: 700, anchor: 'middle' });
  b += `<rect x="${X + 58.2 * s2}" y="250" width="${1.8 * s2}" height="70" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += line(X + 59.1 * s2, 322, X + 59.1 * s2, 352, { color: C.rust, w: 2 }) + tx(X + 59.1 * s2, 372, 'fee $1,800', { size: 15, weight: 700, anchor: 'end', fill: C.rust });
  const st = (x, y, w, h, head, rows, f = C.panel, e = C.panelEdge) => rect(x, y, w, h, f, e) + tx(x + 20, y + 34, head, { size: 17, weight: 700, fill: C.muted }) + lines(x + 20, y + 64, rows, { size: 18 }, 28);
  b += st(30, 400, 270, 110, 'Paid now', ['80% × 60,000 = $48,000']);
  b += st(315, 400, 270, 110, 'Fee', ['3% × 60,000 = $1,800'], C.panel, C.rust);
  b += st(600, 400, 270, 110, 'Paid later', ['12,000 − 1,800 = $10,200']);
  b += rect(30, 530, 840, 80, C.tealLight, C.tealDark) + tx(450, 578, 'Total received: $48,000 + $10,200 = $58,200', { size: 20, weight: 700, anchor: 'middle' });
  b += takeaway(630, 'Lindqvist gives up $1,800 of profit to get $48,000 straight away.', 'Worth it if the cash prevents a missed payment. Factoring is not free money.');
  add('05-factoring',
    svg(900, 630 + takeH('Worth it if the cash prevents a missed payment. Factoring is not free money.') + 30, 'Factoring $60,000 of invoices', b),
    'A bar of $60,000 of invoices split into $48,000 paid now (80%), $10,200 paid when customers pay and a $1,800 fee (3%). Lindqvist receives $58,200 in total, trading $1,800 of profit for immediate cash.',
    'Factoring swaps a small fee for cash now.',
    '## Worked example 2: improving liquidity');
}

// 06 Working capital balance
{
  let b = `<path d="M424,330 L450,280 L476,330 Z" fill="${C.ink}"/>` + `<line x1="140" y1="276" x2="760" y2="276" stroke="${C.ink}" stroke-width="7" stroke-linecap="round"/>`;
  b += rect(380, 110, 140, 70, C.cream, C.olive) + tx(450, 142, 'Working', { size: 17, weight: 700, anchor: 'middle' }) + tx(450, 164, 'capital', { size: 17, weight: 700, anchor: 'middle' }) + arrow(450, 184, 450, 268, { w: 3 });
  b += tx(534, 152, '= current assets − current liabilities', { size: 15, fill: C.muted });
  b += card(30, 350, 400, 120, 'Too little', 'Cannot pay suppliers and staff on time', { edge: C.rust, tfill: C.rust, ts: 21, bs: 18, top: 42 });
  b += card(470, 350, 400, 120, 'Too much', 'Tied up in inventory or receivables, earning nothing', { edge: C.rust, tfill: C.rust, ts: 21, bs: 18, top: 42 });
  b += rect(30, 495, 840, 170, C.tealLight, C.tealDark) + tx(56, 531, 'Managing it', { size: 19, weight: 700, fill: C.tealDark });
  ['Keep inventory low but sufficient', 'Collect debts promptly', 'Time payments carefully'].forEach((s, i) => { b += card(56 + i * 272, 550, 252, 90, '', s, { bs: 17, bfill: C.ink, edge: C.tealDark, align: 'middle' }); });
  add('06-working-capital',
    svg(900, 695, 'Working capital: enough, not too much', b),
    'Working capital, current assets minus current liabilities, must be balanced. Too little and the business cannot pay suppliers and staff on time; too much and money sits in inventory or receivables earning nothing. It is managed by keeping inventory low but sufficient, collecting debts promptly and timing payments.',
    'Working capital needs balance: too little stops payments, too much earns nothing.',
    '## Working capital: the importance of cash');
}

// 07 Why businesses fail
{
  let b = rect(30, 110, 410, 540, C.panel, C.olive) + tx(235, 148, 'Internal causes', { size: 21, weight: 700, anchor: 'middle', fill: C.olive }) + tx(235, 172, 'within the firm’s control', { size: 15, anchor: 'middle', fill: C.muted });
  ['Poor cash-flow management', 'Overestimating sales', 'Overtrading: growing faster than cash allows', 'Poor inventory control', 'Poor marketing', 'Poor quality'].forEach((s, i) => { b += rect(50, 192 + i * 74, 370, 62, C.cream, C.olive, 10, 2) + para(68, 192 + i * 74 + (paraN(s, 334, 17) > 1 ? 26 : 37), s, 334, { size: 17 }); });
  b += rect(460, 110, 410, 540, C.panel, C.rust) + tx(665, 148, 'External causes', { size: 21, weight: 700, anchor: 'middle', fill: C.rust }) + tx(665, 172, 'outside its control', { size: 15, anchor: 'middle', fill: C.muted });
  ['Market conditions', 'Competition', 'Economic factors, e.g. recession', 'Exchange rates', 'Interest rates', 'Government regulations', 'Supplier problems', 'Natural phenomena, e.g. floods'].forEach((s, i) => { b += rect(480, 192 + i * 56, 370, 46, C.panel, C.rust, 10, 2) + tx(498, 192 + i * 56 + 30, s, { size: 16 }); });
  b += rect(30, 670, 840, 150, C.tealLight, C.tealDark) + tx(56, 706, 'Failure usually comes from a combination', { size: 19, weight: 700, fill: C.tealDark });
  b += card(56, 726, 300, 74, '', 'Heavy borrowing to fund overtrading', { bs: 17, bfill: C.ink, edge: C.olive, fill: C.cream });
  b += tx(388, 770, '+', { size: 28, weight: 700, anchor: 'middle' });
  b += card(420, 726, 220, 74, '', 'Interest rates rise', { bs: 17, bfill: C.ink, edge: C.rust });
  b += arrow(644, 763, 680, 763, { w: 3.5 }) + tx(760, 770, 'most damage', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  add('07-why-businesses-fail',
    svg(900, 850, 'Why businesses fail', b),
    'Six internal causes of failure within a firm’s control, such as poor cash-flow management and overtrading, and eight external causes outside it, such as recession, interest rates and natural phenomena. An external shock does most damage to a business already weakened internally, for example by heavy borrowing to fund overtrading.',
    'An external shock hits hardest where internal weaknesses already exist.',
    '## Why businesses fail');
}
