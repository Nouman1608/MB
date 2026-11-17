import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-business-9225-competitive-environment-oxfordaqa-igcse-business';
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

// 01 Direct and indirect competitors (cinema)
{
  const chip = (x, y, w, h, s, fill = C.panel, edge = C.ink) => rect(x, y, w, h, fill, edge, 12, 2.5) + lines(x + w / 2, y + h / 2 + 7 - (wrap(s, w - 24, 19, true).length - 1) * 12, wrap(s, w - 24, 19, true), { size: 19, weight: 700, anchor: 'middle' });
  const body =
    rect(30, 110, 840, 560, C.tealLight, C.tealDark, 18, 2.5) +
    tx(56, 148, 'Indirect competitors', { size: 23, weight: 700, fill: C.tealDark }) +
    tx(56, 176, 'compete for the same customers’ leisure money', { size: 17, fill: C.muted }) +
    rect(90, 200, 720, 290, C.teal, C.tealDark, 16, 2.5) +
    tx(116, 238, 'Direct competitors', { size: 23, weight: 700, fill: C.ink }) +
    tx(116, 266, 'sell the same product', { size: 17, fill: C.ink }) +
    chip(130, 300, 190, 150, 'Other cinema') +
    chip(355, 300, 190, 150, 'Our cinema', C.cream, C.olive) +
    chip(580, 300, 190, 150, 'Other cinema') +
    tx(450, 425, 'the business', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 }) +
    chip(60, 520, 240, 120, 'Streaming services') +
    chip(330, 520, 240, 120, 'Bowling alleys') +
    chip(600, 520, 240, 120, 'Restaurants') +
    takeaway(700, 'Look beyond the obvious rivals.', 'Noticing indirect competition, not only businesses selling the same product, often strengthens an answer.');
  add('01-direct-indirect-competitors',
    svg(900, 700 + takeH('Noticing indirect competition, not only businesses selling the same product, often strengthens an answer.') + 30, 'Who competes with a cinema?', body),
    'A cinema sits inside a ring of direct competitors, other cinemas selling the same product, which sits inside a wider ring of indirect competitors: streaming services, bowling alleys and restaurants that compete for the same leisure money.',
    'Direct competitors sell the same product; indirect competitors chase the same customers’ money.',
    '## Markets and competition');
}

// 02 Effects of strong competition
{
  const cards = [
    ['Price', 'Cannot raise prices easily; may have to cut them'],
    ['Quality and service', 'Must keep improving to stop customers leaving'],
    ['New products', 'Pressure to innovate and offer what rivals do not'],
    ['Costs', 'More spent on promotion; cut costs elsewhere'],
    ['Profit', 'Lower margins, because prices are held down'],
    ['Survival', 'Weaker businesses may close or be forced out'],
  ];
  let b = card(250, 110, 400, 84, 'Strong competition', 'customers can switch to a rival', { fill: C.cream, edge: C.olive, align: 'middle', ts: 21, bs: 17 });
  b += line(450, 194, 450, 222, { w: 3 }) + line(170, 222, 730, 222, { w: 3 });
  cards.forEach(([h, s], i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 30 + col * 290, y = 250 + row * 150;
    if (row === 0) b += arrow(x + 140, 222, x + 140, 246, { w: 3 });
    b += card(x, y, 260, 130, h, s, { ts: 20, bs: 17, top: 38 });
  });
  b += panel(30, 560, 840, 150) + tx(56, 598, 'Businesses respond by competing on:', { size: 19, weight: 700 });
  { let x = 56; ['price', 'quality', 'unique feature', 'customer service', 'location', 'brand'].forEach((s) => {
    const w = s.length * 9.4 + 30;
    b += rect(x, 620, w, 44, C.teal, C.tealDark, 22, 2) + tx(x + w / 2, 648, s, { size: 17, anchor: 'middle', weight: 600 });
    x += w + 12;
  }); }
  b += tx(56, 692, 'Not all bad: rivalry pushes managers to be efficient and improve products.', { size: 17, fill: C.tealDark, weight: 600 });
  add('02-effects-of-competition',
    svg(900, 740, 'What strong competition does to a business', b),
    'Strong competition, where customers can switch, affects six areas: price is held down, quality and service must improve, there is pressure to innovate, promotion costs rise, profit margins fall and weaker businesses may not survive. Businesses respond by competing on price, quality, a unique feature, service, location or brand.',
    'Competition squeezes price and profit, but also pushes a business to improve.',
    '## The impact of competition on a business');
}

// 03 Hartwell Fitness: two responses
{
  const x0 = 110, yb = 610, top = 190, max = 30000;
  const sc = (v) => ((yb - top) * v) / max;
  const bars = [
    ['Now', 'only gym', 28000, C.tealDark, C.teal],
    ['Option 1', 'match $25', 19000, C.ink, C.cream],
    ['Option 2', 'keep $35', 19600, C.ink, C.mustard],
  ];
  let b = panel(30, 110, 500, 600);
  b += tx(56, 146, 'Monthly revenue', { size: 19, weight: 700 });
  [0, 10000, 20000, 30000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 505, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  b += line(x0, yb, 505, yb, { w: 2.5 }) + line(x0, top - 10, x0, yb, { w: 2.5 });
  bars.forEach(([h, s, v, ed, fl], i) => {
    const x = x0 + 25 + i * 125, hgt = sc(v);
    b += `<rect x="${x}" y="${yb - hgt}" width="95" height="${hgt}" fill="${fl}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += tx(x + 47.5, yb - hgt - 10, money(v), { size: 17, weight: 700, anchor: 'middle' });
    b += tx(x + 47.5, yb + 28, h, { size: 17, weight: 700, anchor: 'middle' }) + tx(x + 47.5, yb + 50, s, { size: 15, anchor: 'middle', fill: C.muted });
  });
  b += line(x0, yb - sc(28000), 505, yb - sc(28000), { color: C.tealDark, w: 2, dash: '7 6' });
  const calc = (y, h, head, rows, fill = C.panel, edge = C.panelEdge) => rect(550, y, 320, h, fill, edge) + tx(570, y + 34, head, { size: 19, weight: 700 }) + lines(570, y + 64, rows, { size: 17 }, 26);
  b += calc(110, 120, 'Now: 800 members', ['800 × $35 = $28,000']);
  b += calc(250, 140, 'Option 1: cut to $25', ['keep 760 members', '760 × $25 = $19,000', 'fall of $9,000'], C.cream, C.olive);
  b += calc(410, 170, 'Option 2: keep $35', ['lose 30%: 800 × 0.70 = 560', '560 × $35 = $19,600', 'fall of $8,400'], C.cream, C.olive);
  b += calc(600, 110, 'Difference', ['$19,600 − $19,000 = $600', 'more for option 2']);
  b += takeaway(740, 'Either way, revenue falls by more than $8,000 a month.', 'Option 2 earns slightly more, but only if the 30% loss forecast is right. A third route is to compete on classes or personal training instead of price.');
  add('03-hartwell-two-responses',
    svg(900, 740 + takeH('Option 2 earns slightly more, but only if the 30% loss forecast is right. A third route is to compete on classes or personal training instead of price.') + 30, 'Hartwell Fitness: a budget gym opens', b),
    'Bars show Hartwell Fitness monthly revenue: $28,000 now (800 × $35), $19,000 if it matches the $25 price and keeps 760 members, and $19,600 if it keeps $35 and loses 30% of members, leaving 560. Option 2 is $600 higher, but both fall by more than $8,000.',
    'Competition costs Hartwell over $8,000 a month whichever price it chooses.',
    '## Worked example 1: competition arrives');
}

// 04 Minimal or no competition
{
  const causes = [
    ['Location', 'only shop in a remote village'],
    ['New invention', 'perhaps protected by a patent'],
    ['High start-up costs', 'e.g. railways, water supply'],
    ['Government licences', 'only licensed firms may operate'],
    ['A dominant business', 'strong brand, low costs'],
  ];
  let b = tx(180, 128, 'Situations', { size: 19, weight: 700, anchor: 'middle', fill: C.muted });
  causes.forEach(([h, s], i) => {
    const y = 145 + i * 102;
    b += card(30, y, 300, 86, h, s, { ts: 19, bs: 16 });
    b += parrow(`M330,${y + 43} C365,${y + 43} 360,${400} 390,${400}`, { w: 2.5 });
  });
  b += card(392, 320, 166, 160, 'Little or no competition', '', { fill: C.cream, edge: C.olive, align: 'middle', ts: 20 });
  b += arrow(558, 370, 592, 300, { w: 3 }) + arrow(558, 430, 592, 500, { w: 3 });
  b += rect(595, 145, 275, 250, C.tealLight, C.tealDark) + tx(615, 180, 'Benefits', { size: 20, weight: 700, fill: C.tealDark }) +
    para(615, 214, '• Can usually charge higher prices and earn higher profits', 235, { size: 17 }) +
    para(615, 214 + 3 * LH(17) + 12, '• Less pressure to spend on promotion', 235, { size: 17 });
  b += rect(595, 410, 275, 240, C.panel, C.rust) + tx(615, 445, 'Drawbacks', { size: 20, weight: 700, fill: C.rust }) +
    para(615, 479, '• May become complacent: quality and service slip', 235, { size: 17 }) +
    para(615, 479 + 2 * LH(17) + 14, '• High profits attract new rivals', 235, { size: 17, weight: 700 });
  b += parrow('M735,650 L735,690 L475,690 L475,486', { color: C.rust, w: 3, marker: 'ahR', dash: '9 6' });
  b += tx(605, 714, 'competition arrives (as at Hartwell Fitness)', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  add('04-minimal-competition',
    svg(900, 740, 'When a business faces little competition', b),
    'Five situations lead to little or no competition: a remote location, a new invention, high start-up costs, government licences and a dominant business. The benefits are higher prices, profits and less promotion; the drawbacks are complacency and high profits that attract new rivals, bringing competition back.',
    'Little competition allows higher prices, but high profits invite rivals in.',
    '## Minimal or no competition');
}

// 05 Sources of uncertainty
{
  let b = card(30, 110, 410, 110, 'Risk', 'the chance that something will go wrong and cause a loss', { fill: C.panel, edge: C.rust, ts: 21, bs: 17, tfill: C.rust });
  b += card(460, 110, 410, 110, 'Uncertainty', 'the future cannot be known', { fill: C.panel, edge: C.tealDark, ts: 21, bs: 17, tfill: C.tealDark });
  const cx = 450, cy = 470;
  b += `<circle cx="${cx}" cy="${cy}" r="98" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + lines(cx, cy - 12, ['All businesses', 'face uncertainty'], { size: 19, weight: 700, anchor: 'middle' }, 26);
  const src = [
    [30, 260, 'Customers', 'tastes and spending change with fashion, technology or income', [352, 430]],
    [600, 260, 'Competitors', 'actions cannot be predicted: a new rival or a price cut', [548, 430]],
    [30, 490, 'The economy', 'interest rates, employment or exchange rates change', [352, 505]],
    [600, 490, 'Laws and regulations', 'can change', [548, 505]],
    [300, 610, 'Unexpected events', 'floods, fires or supply problems', [450, 568]],
  ];
  src.forEach(([x, y, h, s, [ax, ay]], i) => {
    const w = i === 4 ? 300 : 270, hh = i === 4 ? 100 : 130;
    b += card(x, y, w, hh, h, s, { ts: 19, bs: 16, top: 34, align: i === 4 ? 'middle' : 'start' });
    const sx = i === 4 ? 450 : (x < 400 ? x + w : x), sy = i === 4 ? 610 : y + hh / 2;
    b += arrow(sx, sy, ax, ay, { w: 3 });
  });
  add('05-sources-of-uncertainty',
    svg(900, 740, 'Why every business faces uncertainty', b),
    'Risk is the chance that something goes wrong and causes a loss; uncertainty means the future cannot be known. Five sources feed uncertainty: changing customer tastes, unpredictable competitors, a changing economy, changing laws and unexpected events such as floods or fires.',
    'Customers, rivals, the economy, the law and the unexpected all make the future unknowable.',
    '## Risk and uncertainty');
}

// 06 Reason + effect answer structure
{
  const row = (y, n, reason, effect) =>
    badge(62, y + 70, 24, n, C.cream) +
    card(100, y, 340, 140, 'Reason', reason, { fill: C.panel, edge: C.tealDark, ts: 18, bs: 17, top: 34, tfill: C.tealDark }) +
    arrow(444, y + 70, 486, y + 70, { w: 4 }) +
    card(490, y, 380, 140, 'Effect on the café', effect, { fill: C.cream, edge: C.olive, ts: 18, bs: 17, top: 34, tfill: C.olive });
  let b = tx(450, 128, 'Explain two reasons why a new café faces uncertainty.', { size: 19, anchor: 'middle', italic: true, fill: C.ink });
  b += row(160, '1', 'Customers’ tastes can change, so a menu that sells well this year may not sell next year', 'Sales are difficult to predict');
  b += row(330, '2', 'Another café may open on the same street', 'It takes some customers and forces price cuts, so profit is uncertain');
  b += rect(100, 500, 770, 70, C.tealLight, C.tealDark) +
    tx(485, 543, 'reason  +  its effect on the business  =  an explanation', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += tx(485, 604, 'A reason on its own is only a statement.', { size: 17, anchor: 'middle', fill: C.muted });
  add('06-reason-effect-answer',
    svg(900, 630, 'Turning a statement into an explanation', b),
    'Two rows of an answer about a new café. Changing customer tastes leads to sales that are hard to predict; a rival café opening leads to lost customers, price cuts and uncertain profit. Reason plus effect makes an explanation.',
    'Follow every reason with its effect on the business.',
    '## Risk and uncertainty');
}

// 07 Weighing risk against reward
{
  const piv = 450;
  let b = `<path d="M${piv - 26},250 L${piv},196 L${piv + 26},250 Z" fill="${C.ink}"/>` +
    `<line x1="160" y1="186" x2="740" y2="206" stroke="${C.ink}" stroke-width="7" stroke-linecap="round"/>`;
  b += line(220, 188, 220, 240, { w: 2.5 }) + line(705, 205, 705, 240, { w: 2.5 });
  b += tx(220, 150, 'RISK', { size: 21, weight: 700, anchor: 'middle', fill: C.rust }) + tx(705, 150, 'REWARD', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += card(30, 240, 380, 96, 'A chance of a loss', 'the idea may fail', { edge: C.rust, ts: 19, bs: 16, align: 'middle' });
  b += rect(540, 240, 330, 420, C.tealLight, C.tealDark) + tx(560, 276, 'Why entrepreneurs start', { size: 19, weight: 700, fill: C.tealDark });
  const rw = ['Earn a profit, or more than in a job', 'Independence: be their own boss', 'Turn an idea or passion into a product', 'Flexibility in working life', 'Help others through a social or ethical aim'];
  rw.forEach((s, i) => { const n = paraN(s, 264, 16); b += rect(560, 296 + i * 70, 290, 58, C.panel, C.tealDark, 10, 2) + para(574, 296 + i * 70 + (n > 1 ? 24 : 35), s, 264, { size: 16 }); });
  b += arrow(56, 392, 56, 342, { color: C.rust, w: 3, marker: 'ahR' }) + tx(74, 376, 'made smaller (never removed) by:', { size: 16, fill: C.rust, italic: true });
  const acts = [['Market research', 'checks demand first'], ['A business plan', 'spots problems early'], ['Start small or test', 'limits losses'], ['Insurance', 'covers fire, theft, accidents'], ['Spreading risk', 'one failure is not fatal'], ['Cash reserves', 'survive a bad month'], ['Supplier agreements', 'secure supplies, prices']];
  acts.forEach(([h, s], i) => { const y = 396 + i * 52; b += rect(30, y, 380, 44, C.panel, C.panelEdge, 10, 2) + tx(44, y + 28, h, { size: 16, weight: 700 }) + tx(396, y + 28, s, { size: 15, anchor: 'end', fill: C.muted }); });
  b += takeaway(780, 'The possible reward is what makes the risk worth taking.', 'Risk-reducing activities lower the chance or the size of a loss; none removes it completely.');
  add('07-risk-and-reward',
    svg(900, 780 + takeH('Risk-reducing activities lower the chance or the size of a loss; none removes it completely.') + 30, 'Weighing risk against reward', b),
    'A balance with risk, a chance of a loss, on one side and five rewards on the other: profit, independence, an idea or passion, flexibility and helping others. Seven activities from market research to supplier agreements make the risk smaller but never remove it.',
    'Entrepreneurs accept risk for the reward, and reduce it where they can.',
    '## Activities that minimise risk');
}

// 08 Lower cost advantage
{
  const steps = ['Lower wages, cheaper land, lower rents', 'Lower production costs', 'Lower prices', 'Win orders on price'];
  let b = '';
  steps.forEach((s, i) => {
    const x = 30 + i * 220;
    b += card(x, 120, 180, 130, s, '', { fill: i === 3 ? C.cream : C.tealLight, edge: i === 3 ? C.olive : C.tealDark, ts: 19, align: 'middle' });
    if (i < 3) b += arrow(x + 184, 185, x + 216, 185, { w: 3.5 });
  });
  b += tx(450, 286, 'e.g. clothing, furniture and food products', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  b += rect(30, 316, 840, 180, C.panel) + tx(56, 352, 'Other ways to compete', { size: 20, weight: 700 });
  [['Specialise', 'in products the country is well placed to make'], ['Improve quality', 'to meet foreign buyers’ standards'], ['Use e-commerce', 'to reach customers abroad directly']].forEach(([h, s], i) => {
    b += card(56 + i * 270, 370, 250, 108, h, s, { fill: C.tealLight, edge: C.tealDark, ts: 18, bs: 16, top: 32 });
  });
  b += rect(30, 516, 840, 180, C.panel, C.rust) + tx(56, 552, 'Challenges', { size: 20, weight: 700, fill: C.rust });
  [['Transport costs', 'higher to distant markets'], ['Brands', 'less well known'], ['Other rivals', 'developing countries with even lower costs']].forEach(([h, s], i) => {
    b += card(56 + i * 270, 570, 250, 108, h, s, { ts: 18, bs: 16, top: 32, edge: C.rust });
  });
  add('08-lower-cost-advantage',
    svg(900, 726, 'How developing countries compete', b),
    'Lower wages, cheaper land and lower rents give lower production costs and lower prices, so businesses win orders on price for goods such as clothing, furniture and food. They also specialise, improve quality and use e-commerce, but face higher transport costs, less known brands and even cheaper rivals.',
    'Lower cost advantage wins orders on price, but it is not the only route or a guarantee.',
    '## How developing countries compete with developed countries');
}
