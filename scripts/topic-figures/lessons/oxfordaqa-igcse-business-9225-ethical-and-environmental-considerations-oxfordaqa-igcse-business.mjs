import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-business-9225-ethical-and-environmental-considerations-oxfordaqa-igcse-business';
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

// 01 Fair and honest to whom?
{
  const rows = [
    ['Employees', 'Fair pay, safe conditions, respect for religious and family needs', 'Pressure to work unpaid hours, unfair treatment'],
    ['Customers', 'Truthful advertising and labelling, fair prices, honest refunds', 'Hidden charges, misleading claims'],
    ['Suppliers', 'Paying a fair price, paying on time', 'Delaying payment to keep cash, forcing prices below their costs'],
    ['Local community', 'Supporting local causes, limiting disruption', 'Ignoring complaints, harming the local area'],
    ['Owners', 'Accurate reporting of results', 'Hiding problems from investors'],
  ];
  let b = tx(475, 132, 'Seen as fair and honest', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    tx(745, 132, 'Seen as unethical', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  rows.forEach(([who, ok, bad], i) => {
    const y = 150 + i * 116;
    b += card(30, y, 200, 100, who, '', { fill: C.cream, edge: C.olive, ts: 19, align: 'middle' });
    b += arrow(232, y + 50, 262, y + 50, { w: 3 });
    b += rect(266, y, 418, 100, C.tealLight, C.tealDark) + tx(290, y + 58, '✓', { size: 26, weight: 700, fill: C.tealDark, anchor: 'middle' });
    const n1 = paraN(ok, 360, 17); b += para(312, y + 50 - (n1 - 1) * 11 + 6, ok, 360, { size: 17 });
    b += rect(700, y, 170, 100, C.panel, C.rust);
    const n2 = paraN(bad, 140, 15); b += para(714, y + 50 - (n2 - 1) * 10 + 5, bad, 140, { size: 15, fill: C.rust });
  });
  add('01-ethics-by-stakeholder',
    svg(900, 740, 'Ethics: fair and honest to whom?', b),
    'Five stakeholders with what fair and honest behaviour looks like and what unethical behaviour looks like: employees (fair pay versus unpaid hours), customers (truthful labelling versus hidden charges), suppliers (paying on time versus delaying payment), the local community and owners (accurate reporting versus hiding problems).',
    'Analyse an ethical issue by asking which stakeholder is affected.',
    '## Ethics: fair and honest to whom?');
}

// 02 Religious observance and charitable giving
{
  const col = (x, title, acts, gain, cost) => {
    let s = rect(x, 110, 410, 530, C.panel) + tx(x + 205, 150, title, { size: 22, weight: 700, anchor: 'middle' });
    acts.forEach((a, i) => { s += rect(x + 20, 172 + i * 62, 370, 52, C.tealLight, C.tealDark, 10, 2) + tx(x + 205, 172 + i * 62 + 32, a, { size: 16, anchor: 'middle' }); });
    const yb = 430;
    s += arrow(x + 120, yb, x + 120, yb + 34, { color: C.tealDark, marker: 'ahT', w: 3 }) + arrow(x + 290, yb, x + 290, yb + 34, { color: C.rust, marker: 'ahR', w: 3 });
    s += card(x + 20, yb + 42, 180, 150, 'Benefit', gain, { fill: C.panel, edge: C.tealDark, tfill: C.tealDark, ts: 18, bs: 16, top: 32 });
    s += card(x + 210, yb + 42, 180, 150, 'Cost', cost, { fill: C.panel, edge: C.rust, tfill: C.rust, ts: 18, bs: 16, top: 32 });
    return s;
  };
  const b = col(30, 'Religious observance', ['Prayer breaks or a prayer room', 'Shifts adjusted for festivals or fasting', 'Closing on holy days', 'Food that meets religious requirements'],
    'Shows respect; helps keep staff and win loyal customers', 'Rearranged rotas or lost trading hours') +
    col(460, 'Charitable giving', ['Donating money or products', 'Sponsoring local events', 'Paid time for staff to volunteer'],
      'Builds goodwill in the community', 'Every dollar donated is a dollar less profit');
  add('02-observance-and-giving',
    svg(900, 670, 'Two ethical choices and their price', b),
    'Religious observance, such as prayer rooms, adjusted shifts, closing on holy days and suitable food, helps keep staff and customers but costs rearranged rotas or trading hours. Charitable giving, through donations, sponsorship and volunteering time, builds goodwill but reduces profit.',
    'Each ethical choice brings a benefit and a cost to the business.',
    '## Ethics: fair and honest to whom?');
}

// 03 The ethics-profit trade-off over time
{
  let b = rect(30, 110, 840, 90, C.cream, C.olive) + tx(450, 148, 'Trade-off: gaining one thing by giving up some of another', { size: 19, weight: 700, anchor: 'middle' }) +
    tx(450, 178, 'Ethical behaviour often costs money now; its benefits come later and are less certain.', { size: 17, anchor: 'middle', fill: C.muted });
  b += arrow(60, 250, 850, 250, { w: 3.5 }) + tx(70, 238, 'NOW', { size: 17, weight: 700 }) + tx(840, 238, 'LATER', { size: 17, weight: 700, anchor: 'end' });
  b += rect(30, 280, 410, 400, C.panel, C.rust) + tx(56, 318, 'Drawbacks: certain, immediate', { size: 20, weight: 700, fill: C.rust });
  b += rect(460, 280, 410, 400, C.panel, C.tealDark) + tx(486, 318, 'Benefits: later, less certain', { size: 20, weight: 700, fill: C.tealDark });
  const dr = ['Higher costs, such as fairer prices to suppliers', 'Lower profit margins if prices cannot rise', 'Rivals who do not act ethically may undercut on price', 'Benefits are hard to measure and may take years'];
  const be = ['Better reputation and customer loyalty', 'Can justify a higher price', 'Easier to recruit and keep staff', 'Less risk of boycotts or bad publicity'];
  dr.forEach((s, i) => { b += rect(50, 340 + i * 82, 370, 70, '#fbf3ee', C.rust, 10, 2) + para(68, 340 + i * 82 + (paraN(s, 330, 17) > 1 ? 29 : 41), s, 330, { size: 17 }); });
  be.forEach((s, i) => { b += rect(480, 340 + i * 82, 370, 70, C.tealLight, C.tealDark, 10, 2) + para(498, 340 + i * 82 + (paraN(s, 330, 17) > 1 ? 29 : 41), s, 330, { size: 17 }); });
  add('03-ethics-profit-tradeoff',
    svg(900, 710, 'The trade-off between ethics and profit', b),
    'Drawbacks of ethical behaviour are certain and immediate: higher costs, lower margins, being undercut by rivals and benefits that are hard to measure. Benefits come later and are less certain: reputation and loyalty, a higher price, easier recruitment and less risk of boycotts.',
    'Ethics costs money now for benefits that arrive later and are less certain.',
    '## The trade-off between ethics and profit');
}

// 04 Tamarind Coffee Roasters
{
  const yb = 600, top = 220, max = 100000, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 420, 600) + tx(56, 146, 'Annual profit', { size: 19, weight: 700 });
  [0, 50000, 100000].forEach((v) => { const y = yb - sc(v); b += line(130, y, 425, y, { color: C.panelEdge, w: 1.5 }) + tx(120, y + 6, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  b += line(130, yb, 425, yb, { w: 2.5 });
  b += `<rect x="160" y="${yb - sc(90000)}" width="100" height="${sc(90000)}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="300" y="${yb - sc(60000)}" width="100" height="${sc(60000)}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="300" y="${yb - sc(90000)}" width="100" height="${sc(30000)}" fill="none" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="7 5"/>`;
  b += tx(350, yb - sc(75000) + 6, '−$30,000', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 });
  b += tx(210, yb - sc(90000) - 10, '$90,000', { size: 17, weight: 700, anchor: 'middle' }) + tx(350, yb - sc(90000) - 10, '$60,000', { size: 17, weight: 700, anchor: 'middle' });
  b += tx(210, yb + 28, 'Now', { size: 17, weight: 700, anchor: 'middle' }) + tx(210, yb + 50, '$4.00 a kg', { size: 15, anchor: 'middle', fill: C.muted });
  b += tx(350, yb + 28, 'Fair price', { size: 17, weight: 700, anchor: 'middle' }) + tx(350, yb + 50, '$4.60 a kg', { size: 15, anchor: 'middle', fill: C.muted });
  b += tx(240, 690, 'if nothing else changes', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const step = (y, h, head, rows, fill = C.panel, edge = C.panelEdge) => rect(470, y, 400, h, fill, edge) + tx(490, y + 32, head, { size: 17, weight: 700, fill: C.muted }) + lines(490, y + 62, rows, { size: 18 }, 27);
  b += step(110, 100, 'Extra cost per kg', ['$4.60 − $4.00 = $0.60']);
  b += step(225, 100, 'Extra cost per year', ['50,000 kg × $0.60 = $30,000']);
  b += step(340, 100, 'New profit', ['$90,000 − $30,000 = $60,000']);
  b += step(455, 128, 'Price rise per bag to cover it', ['$30,000 ÷ 200,000 bags', '= $0.15 a bag'], C.cream, C.olive);
  b += rect(470, 598, 400, 112, C.tealLight, C.tealDark) + para(490, 630, 'Profit falls by a third unless customers will pay 15 cents more a bag.', 360, { size: 17, weight: 600 });
  add('04-tamarind-fair-price',
    svg(900, 740, 'Tamarind Coffee: the cost of a fair price', b),
    'Paying growers $4.60 instead of $4.00 a kg on 50,000 kg adds $30,000 a year, cutting profit from $90,000 to $60,000 if nothing else changes. Covering it would need a price rise of $0.15 on each of 200,000 bags.',
    'A fair price for growers cuts profit by a third unless customers pay 15 cents more.',
    '## The trade-off between ethics and profit');
}

// 05 Four environmental areas
{
  const lab = ['What a business can do', 'The catch', 'What a business can do', 'What a business can do'];
  const areas = [
    ['Traffic congestion', 'Delivery lorries and customer car journeys crowd local roads', 'Deliver outside rush hours, combine deliveries, locate near main roads or public transport'],
    ['Recycling', 'Reusing cardboard, plastic and metal reduces waste and can lower costs', 'Sorting and collecting it takes staff time and space'],
    ['Disposing of waste', 'Landfill costs money and can harm land and water; hazardous waste needs safe handling', 'Reduce packaging: cuts both cost and waste'],
    ['Noise and air pollution', 'Machinery, vehicles and late-night working disturb neighbours; fumes affect health', 'Quieter equipment, cleaner vehicles, limited hours: fewer complaints, but cost money'],
  ];
  let b = '';
  areas.forEach(([h, prob, resp], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 250;
    b += rect(x, y, 410, 230, C.panel) + tx(x + 20, y + 38, h, { size: 21, weight: 700 });
    b += para(x + 20, y + 72, prob, 370, { size: 17, fill: C.muted });
    b += rect(x + 16, y + 112, 378, 104, C.tealLight, C.tealDark, 10, 2) + tx(x + 32, y + 140, lab[i], { size: 15, weight: 700, fill: C.tealDark }) + para(x + 32, y + 166, resp, 346, { size: 16 });
  });
  b += rect(30, 620, 410, 120, C.panel, C.rust) + tx(50, 654, 'Costs', { size: 19, weight: 700, fill: C.rust }) + para(50, 684, 'New equipment, staff time, higher-priced materials, changed working practices', 370, { size: 17 });
  b += rect(460, 620, 410, 120, C.panel, C.tealDark) + tx(480, 654, 'Benefits', { size: 19, weight: 700, fill: C.tealDark }) + para(480, 684, 'Lower waste and energy bills, better reputation, green customers, fewer complaints', 370, { size: 17 });
  add('05-environmental-areas',
    svg(900, 770, 'Four environmental considerations', b),
    'Four areas, each with its problem and a business response: traffic congestion (deliver outside rush hours), recycling (reduces waste but takes time and space), waste disposal (reduce packaging) and noise and air pollution (quieter equipment, cleaner vehicles). Costs include equipment and staff time; benefits include lower bills and a better reputation.',
    'Each environmental issue has a fix, and each fix has a cost and a benefit.',
    '## Environmental considerations');
}

// 06 Sustainability: two issues
{
  let b = rect(30, 110, 840, 80, C.cream, C.olive) + para(56, 144, 'Sustainability: meeting today’s needs without damaging the ability of future generations to meet theirs', 790, { size: 18, weight: 600 });
  const issue = (x, title, cause, acts) => {
    let s = card(x, 220, 410, 130, title, cause, { fill: C.panel, edge: C.rust, tfill: C.rust, ts: 21, bs: 17, top: 38 });
    s += arrow(x + 205, 352, x + 205, 392, { w: 3.5 }) + tx(x + 215, 380, 'businesses can', { size: 15, fill: C.muted, italic: true });
    acts.forEach((a, i) => { s += rect(x, 400 + i * 78, 410, 66, C.tealLight, C.tealDark, 10, 2) + para(x + 20, 400 + i * 78 + (paraN(a, 370, 17) > 1 ? 28 : 40), a, 370, { size: 17 }); });
    return s;
  };
  b += issue(30, 'Global warming', 'Burning fossil fuels for energy and transport releases greenhouse gases', ['Use renewable energy', 'Use more efficient machinery', 'Use lower-emission vehicles']);
  b += issue(460, 'Using scarce resources', 'Water, timber and some metals are limited', ['Use less', 'Switch to renewable or recycled materials', 'Design products that last longer or can be repaired']);
  add('06-sustainability-issues',
    svg(900, 650, 'Two sustainability issues', b),
    'Global warming comes from burning fossil fuels; businesses can use renewable energy, efficient machinery and lower-emission vehicles. Scarce resources such as water, timber and metals can be used less, replaced with renewable or recycled materials, or saved by products that last longer.',
    'Sustainable businesses cut emissions and use scarce resources more carefully.',
    '## Sustainability');
}

// 07 Larkspur payback
{
  const x0 = 120, yb = 560, top = 180, max = 32000, bw = 70, gap = 18;
  const sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 840, 500) + tx(56, 146, 'Cumulative gas saving from solar water heating ($4,000 a year)', { size: 18, weight: 700 });
  [0, 8000, 16000, 24000, 32000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 850, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  for (let yr = 1; yr <= 8; yr++) {
    const v = yr * 4000, x = x0 + 20 + (yr - 1) * (bw + gap);
    b += `<rect x="${x}" y="${yb - sc(v)}" width="${bw}" height="${sc(v)}" fill="${yr < 6 ? C.teal : yr === 6 ? C.mustard : C.tealDark}" stroke="${C.ink}" stroke-width="2"/>`;
    b += tx(x + bw / 2, yb + 26, `Yr ${yr}`, { size: 15, anchor: 'middle', fill: C.muted });
  }
  b += line(x0, yb - sc(24000), 850, yb - sc(24000), { color: C.rust, w: 3, dash: '10 6' });
  b += tx(x0 + 20, yb - sc(24000) - 12, 'installation cost $24,000', { size: 16, weight: 700, fill: C.rust });
  b += line(x0, yb, 850, yb, { w: 2.5 });
  b += tx(x0 + 20 + 5 * (bw + gap) + bw / 2, yb - sc(24000) - 38, 'paid back', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += tx(640, 190, 'then saves', { size: 15, anchor: 'end', fill: C.tealDark, weight: 600 });
  b += tx(640, 208, '$4,000 a year', { size: 15, anchor: 'end', fill: C.tealDark, weight: 600 });
  b += rect(30, 630, 840, 76, C.tealLight, C.tealDark) + tx(450, 677, 'Payback = $24,000 ÷ $4,000 a year = 6 years', { size: 21, weight: 700, anchor: 'middle' });
  b += takeaway(726, 'Short term: profit falls. Long term: it pays for itself and cuts emissions.', 'For a business short of cash, or unsure it will stay six years, it may not be worth it; for a stable business it probably is.');
  add('07-larkspur-payback',
    svg(900, 726 + takeH('For a business short of cash, or unsure it will stay six years, it may not be worth it; for a stable business it probably is.') + 30, 'Larkspur Laundry: solar water heating', b),
    'Bars show cumulative gas savings of $4,000 a year rising past the $24,000 installation cost in year 6, so payback is $24,000 ÷ $4,000 = 6 years. After that the system saves $4,000 a year.',
    'Solar heating costs profit now and pays back after six years.',
    '## Sustainability');
}

// 08 Analyse chain using Tamarind
{
  const steps = [
    ['Action', 'Pay growers $4.60 a kg, not $4.00', C.panel, C.ink],
    ['Its cost', '$30,000 more a year', C.panel, C.rust],
    ['Its benefit', 'Loyalty and reputation from ethical sourcing', C.panel, C.tealDark],
    ['Effect on profit', 'Falls to $60,000 unless the price rises $0.15 a bag', C.cream, C.olive],
  ];
  let b = tx(450, 128, 'Analyse: build a chain that includes the trade-off', { size: 19, weight: 700, anchor: 'middle', fill: C.muted });
  steps.forEach(([h, s, f, e], i) => {
    const y = 150 + i * 118;
    b += badge(64, y + 50, 22, String(i + 1), C.cream);
    b += card(100, y, 770, 100, h, s, { fill: f, edge: e, tfill: e === C.panelEdge ? C.ink : e, ts: 19, bs: 18, top: 36 });
    if (i < 3) b += arrow(64, y + 74, 64, y + 140, { w: 3 });
  });
  b += rect(30, 640, 840, 170, C.tealLight, C.tealDark) + tx(56, 678, 'Evaluate: judge, and say what it depends on', { size: 19, weight: 700, fill: C.tealDark });
  ['How price-sensitive customers are', 'How large the cost is compared with profit', 'How long the benefit takes to arrive'].forEach((s, i) => {
    b += rect(56 + i * 272, 700, 252, 90, C.panel, C.tealDark, 10, 2) + para(72 + i * 272, 700 + (paraN(s, 220, 17) > 1 ? 38 : 52), s, 220, { size: 17 });
  });
  add('08-analyse-evaluate-chain',
    svg(900, 840, 'Answering ethics and environment questions', b),
    'An analysis chain for Tamarind: the action (pay growers $4.60 a kg), its cost ($30,000 a year), its benefit (loyalty and reputation) and the effect on profit (down to $60,000 unless the price rises 15 cents). Evaluation depends on price sensitivity, the size of the cost and how long the benefit takes.',
    'Action, cost, benefit, profit: then judge what the answer depends on.',
    '## Exam technique for this section');
}
