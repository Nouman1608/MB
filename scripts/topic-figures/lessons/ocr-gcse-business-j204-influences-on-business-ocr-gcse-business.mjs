import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ocr-gcse-business-j204-influences-on-business-ocr-gcse-business';
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

// 01 Points to include checklist
{
  const topics = [
    ['6.1 Ethical considerations', ['Treatment of workers', 'Treatment of suppliers', 'Treatment of customers', 'Sourcing of materials', 'Marketing decisions'], C.tealLight, C.tealDark],
    ['6.1 Environmental considerations', ['Sustainability', 'Waste disposal', 'Pollution', 'Climate change'], C.tealLight, C.tealDark],
    ['6.2 The economic climate', ['Changing levels of consumer income', 'Unemployment'], C.cream, C.olive],
    ['6.3 Globalisation', ['Growth of multinational companies', 'Influences on business location', 'International branding', 'How businesses compete internationally'], C.panel, C.rust],
  ];
  let b = '';
  topics.forEach(([h, pts, f, e], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 330;
    b += rect(x, y, 410, 310, C.panel, e) + rect(x, y, 410, 58, f, e) + tx(x + 20, y + 37, h, { size: 19, weight: 700 });
    pts.forEach((p, j) => { b += rect(x + 20, y + 74 + j * 45, 26, 26, C.panel, e, 6, 2) + path(`M${x + 25},${y + 88 + j * 45} l6,6 l11,-12`, { stroke: e, w: 3 }) + tx(x + 58, y + 93 + j * 45, p, { size: 17 }); });
  });
  b += takeaway(780, 'Two halves to every point: the influence, and how the business responds.', 'Naming the exact point, such as “sourcing of materials” rather than “being nice”, shows precise knowledge.');
  add('01-points-to-include',
    svg(900, 780 + takeH('Naming the exact point, such as “sourcing of materials” rather than “being nice”, shows precise knowledge.') + 30, 'Section 6: the points to include', b),
    'A checklist of the specification’s points to include: ethical (treatment of workers, suppliers and customers, sourcing of materials, marketing decisions), environmental (sustainability, waste disposal, pollution, climate change), economic climate (consumer income, unemployment) and globalisation (multinationals, location, international branding, competing internationally).',
    'Learn the points to include as a checklist: questions are built around them.',
    '## What the specification lists');
}

// 02 Ethics: cost and benefit
{
  const rows = [
    ['Workers', 'Higher wages, training, safer equipment', 'Motivation, lower turnover, easier recruitment'],
    ['Suppliers', 'Fair prices, paid on time', 'Reliable supply, better quality, goodwill'],
    ['Customers', 'Honest labelling, no hidden charges', 'Trust, repeat custom, fewer complaints'],
    ['Sourcing of materials', 'Certified or traceable inputs cost more', 'A selling point that may justify a higher price'],
    ['Marketing decisions', 'Giving up misleading claims or pressure selling', 'A reputation that protects long-term sales'],
  ];
  let b = tx(410, 132, 'Possible cost', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + tx(720, 132, 'Possible benefit', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([h, c, g], i) => {
    const y = 148 + i * 100;
    b += card(30, y, 220, 86, h, '', { fill: C.cream, edge: C.olive, ts: 18, align: 'middle' });
    b += card(266, y, 290, 86, '', c, { edge: C.rust, bs: 17, bfill: C.ink });
    b += tx(572, y + 52, '→', { size: 24, weight: 700, anchor: 'middle' });
    b += card(590, y, 280, 86, '', g, { fill: C.tealLight, edge: C.tealDark, bs: 17, bfill: C.ink });
  });
  b += rect(30, 660, 840, 70, C.cream, C.olive) + tx(450, 703, 'The balance between cost and benefit depends on the business.', { size: 18, weight: 700, anchor: 'middle' });
  add('02-ethics-cost-benefit',
    svg(900, 760, 'Ethics: a cost now, a possible benefit later', b),
    'Five ethical areas, each with a possible cost and benefit: treating workers well (higher wages, but lower turnover), suppliers (fair prices, but reliable supply), customers (honest labelling, but trust), sourcing (certified inputs cost more, but a selling point) and marketing (no misleading claims, but a lasting reputation).',
    'Ethics has a cost and a possible benefit; the balance depends on the business.',
    '## 6.1 Ethical considerations: the trade-off with profit');
}

// 03 Kestrel Tea Co.
{
  const x0 = 120, yb = 520, top = 200, max = 25000, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 840, 500) + tx(56, 146, 'Monthly revenue split into cost of sales and gross profit', { size: 18, weight: 700 });
  [0, 5000, 10000, 15000, 20000, 25000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 850, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v, '£'), { size: 15, anchor: 'end', fill: C.muted }); });
  const sc3 = [['Before', '4,000 × £6.00', 24000, 8400, '65.0%'], ['Certified, same price', '4,000 × £6.00', 24000, 10200, '57.5%'], ['Certified, £6.50', '3,800 packs', 24700, 9690, '60.8%']];
  sc3.forEach(([h, s, rev, cos, m], i) => {
    const x = x0 + 60 + i * 230, w = 140;
    b += `<rect x="${x}" y="${yb - sc(cos)}" width="${w}" height="${sc(cos)}" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += `<rect x="${x}" y="${yb - sc(rev)}" width="${w}" height="${sc(rev - cos)}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += tx(x + w / 2, yb - sc(cos / 2) + 6, `cost ${money(cos, '£')}`, { size: 15, anchor: 'middle', weight: 700, fill: '#ffffff' });
    b += tx(x + w / 2, yb - sc(cos + (rev - cos) / 2) - 4, `GP ${money(rev - cos, '£')}`, { size: 16, anchor: 'middle', weight: 700 });
    b += tx(x + w / 2, yb - sc(cos + (rev - cos) / 2) + 20, `margin ${m}`, { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark });
    b += tx(x + w / 2, yb - sc(rev) - 10, money(rev, '£'), { size: 16, weight: 700, anchor: 'middle' });
    b += tx(x + w / 2, yb + 28, h, { size: 16, weight: 700, anchor: 'middle' }) + tx(x + w / 2, yb + 50, s, { size: 15, anchor: 'middle', fill: C.muted });
  });
  b += line(x0, yb, 850, yb, { w: 2.5 });
  const st = (x, head, rows, f = C.panel, e = C.panelEdge) => rect(x, 630, 270, 150, f, e) + tx(x + 18, 664, head, { size: 16, weight: 700, fill: C.muted }) + lines(x + 18, 692, rows, { size: 16 }, 24);
  b += st(30, 'Before (tea £2.10)', ['GP = 24,000 − 8,400', '= £15,600', '15,600 ÷ 24,000 = 65.0%']);
  b += st(315, 'Certified (£2.55)', ['GP = 24,000 − 10,200', '= £13,800', '13,800 ÷ 24,000 = 57.5%'], C.panel, C.rust);
  b += st(600, 'Price £6.50, 3,800 sold', ['GP = 24,700 − 9,690', '= £15,010', '15,010 ÷ 24,700 = 60.8%'], C.cream, C.olive);
  b += takeaway(800, 'Absorbing the cost cuts the margin by 7.5 percentage points.', 'A price rise recovers some of it, but only if customers value the certification enough to keep buying.');
  add('03-kestrel-ethical-sourcing',
    svg(900, 800 + takeH('A price rise recovers some of it, but only if customers value the certification enough to keep buying.') + 30, 'Kestrel Tea Co.: the cost of fair trade', b),
    'Kestrel sells 4,000 packs at £6.00. With tea at £2.10 gross profit is £15,600, a 65.0% margin. Certified tea at £2.55 cuts gross profit to £13,800 (57.5%). Raising the price to £6.50 with sales of 3,800 gives £15,010 on revenue of £24,700, a 60.8% margin.',
    'Fair-trade tea costs 7.5 margin points unless customers accept a higher price.',
    '## 6.1 Ethical considerations: the trade-off with profit');
}

// 04 Environmental considerations
{
  const pts = [
    ['Sustainability', 'Using resources so they are not used up, e.g. replanted timber, reusable packaging', 'Raises input costs now; protects future supply'],
    ['Waste disposal', 'Waste must be collected and disposed of, which costs money', 'Cutting waste lowers costs: green and financial aims agree'],
    ['Pollution', 'Noise, fumes or spills harm the local community', 'Can damage the business’s image'],
    ['Climate change', 'Extreme weather disrupts supply chains and harvests', 'Customers may switch to lower-carbon products; energy costs matter more'],
  ];
  let b = '';
  pts.forEach(([h, w, e], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 240;
    b += rect(x, y, 410, 224, C.panel) + tx(x + 20, y + 38, h, { size: 21, weight: 700 }) + para(x + 20, y + 70, w, 370, { size: 17, fill: C.muted });
    b += rect(x + 16, y + 130, 378, 80, C.cream, C.olive, 10, 2) + tx(x + 32, y + 156, 'Impact', { size: 15, weight: 700, fill: C.olive }) + para(x + 32, y + 180, e, 346, { size: 16 });
  });
  b += rect(30, 600, 840, 190, C.tealLight, C.tealDark) + tx(56, 636, 'How businesses respond', { size: 19, weight: 700, fill: C.tealDark });
  ['Redesign products', 'Change suppliers', 'Energy-efficient equipment', 'Use the record in marketing'].forEach((s, i) => { b += card(56 + i * 202, 656, 186, 80, '', s, { bs: 16, bfill: C.ink, edge: C.tealDark, align: 'middle', pad: 10 }); });
  b += tx(56, 770, 'Each response involves operations, finance and marketing: the link to section 7.', { size: 16, italic: true, fill: C.tealDark });
  add('04-environmental-considerations',
    svg(900, 820, 'Environmental considerations and responses', b),
    'Four environmental points and their impact: sustainability raises costs now but protects supply; cutting waste lowers costs; pollution harms the community and image; climate change disrupts supply, shifts customers to lower-carbon products and raises the importance of energy costs. Responses include redesigning products, changing suppliers, efficient equipment and green marketing.',
    'Each environmental point affects the business differently, and each response crosses functions.',
    '## 6.1 Environmental considerations');
}

// 05 Economic climate chain
{
  let b = '';
  const chain = ['Unemployment rises', 'Total household income falls', 'Those still in work spend more cautiously'];
  chain.forEach((s, i) => { const x = 30 + i * 290; b += card(x, 110, 260, 100, s, '', { fill: i === 0 ? C.cream : C.panel, edge: i === 0 ? C.olive : C.panelEdge, ts: 18, align: 'middle' }); if (i < 2) b += arrow(x + 262, 160, x + 288, 160, { w: 3.5 }); });
  b += line(450, 212, 450, 240, { w: 3 }) + line(165, 240, 735, 240, { w: 3 });
  [165, 450, 735].forEach((x) => { b += arrow(x, 240, x, 268, { w: 3 }); });
  b += card(30, 272, 270, 190, 'Non-essentials', 'Restaurants, holidays, furniture: tend to lose sales first', { edge: C.rust, tfill: C.rust, ts: 19, bs: 17, top: 38 });
  b += card(315, 272, 270, 190, 'Essentials and budget versions', 'May lose less; some gain as customers trade down', { edge: C.tealDark, tfill: C.tealDark, ts: 19, bs: 17, top: 38 });
  b += card(600, 272, 270, 190, 'As an employer', 'More applicants for each job; less pressure for pay rises', { edge: C.tealDark, tfill: C.tealDark, ts: 19, bs: 17, top: 38 });
  b += rect(30, 490, 840, 130, C.panel) + tx(56, 526, 'Analyse as a chain', { size: 18, weight: 700, fill: C.muted });
  const ch = ['Unemployment rises', 'Incomes fall', 'Fewer meals out', 'Revenue falls', 'Fixed costs harder to cover'];
  ch.forEach((s, i) => { const x = 50 + i * 164; b += card(x, 544, 144, 60, '', s, { bs: 15, bfill: C.ink, align: 'middle', pad: 8, fill: i === 4 ? C.cream : C.tealLight, edge: i === 4 ? C.olive : C.tealDark }); if (i < 4) b += arrow(x + 146, 574, x + 162, 574, { w: 2.5 }); });
  add('05-economic-climate',
    svg(900, 650, 'Income, unemployment and business', b),
    'Rising unemployment lowers total household income, and people in work spend more cautiously. Non-essential businesses such as restaurants lose sales first, essentials and budget versions lose less or gain, and employers find recruitment easier. An analysis chain runs from unemployment to fewer meals out, falling revenue and fixed costs that are harder to cover.',
    'A downturn hits non-essentials hardest, and can help budget sellers and employers.',
    '## 6.2 The economic climate');
}

// 06 Larkspur Bistro revenue rectangles
{
  const sx = 0.62, sy = 12; // px per meal, px per £
  const r = (x0, meals, spend, f, label) => {
    const w = meals * sx, h = spend * sy, yb = 560;
    return `<rect x="${x0}" y="${yb - h}" width="${w}" height="${h}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` +
      tx(x0 + w / 2, yb - h / 2 - 4, money(meals * spend, '£'), { size: 24, weight: 700, anchor: 'middle' }) + tx(x0 + w / 2, yb - h / 2 + 22, 'a week', { size: 15, anchor: 'middle' }) +
      tx(x0 + w / 2, yb + 28, `${meals} meals`, { size: 17, weight: 700, anchor: 'middle' }) + tx(x0 - 8, yb - h / 2 + 6, `£${spend}`, { size: 17, weight: 700, anchor: 'end', fill: C.tealDark }) +
      tx(x0 + w / 2, yb - h - 14, label, { size: 18, weight: 700, anchor: 'middle' });
  };
  let b = panel(30, 110, 840, 500) + tx(56, 146, 'Width = meals a week; height = average spend', { size: 17, weight: 700, fill: C.muted });
  b += r(100, 600, 24, C.teal, 'Before');
  b += r(530, 510, 22, C.mustard, 'After unemployment rises');
  b += line(60, 560, 850, 560, { w: 2.5 });
  const st = (x, head, v, f, e) => rect(x, 630, 270, 100, f, e) + tx(x + 135, 664, head, { size: 16, anchor: 'middle', fill: C.muted }) + tx(x + 135, 704, v, { size: 22, weight: 700, anchor: 'middle', fill: e });
  b += st(30, 'Meals', '−15%', C.panel, C.olive);
  b += st(315, 'Average spend', '£24 → £22', C.panel, C.olive);
  b += st(600, 'Revenue: 3,180 ÷ 14,400', '−22.1%', '#fbf3ee', C.rust);
  b += takeaway(750, 'Revenue falls further than meals, because quantity and spend both fall.', 'Larkspur could respond with a cheaper set menu, mid-week offers or fewer opening hours.');
  add('06-larkspur-bistro',
    svg(900, 750 + takeH('Larkspur could respond with a cheaper set menu, mid-week offers or fewer opening hours.') + 30, 'Larkspur Bistro: a squeeze on two sides', b),
    'Two revenue rectangles: 600 meals at an average £24 gives £14,400 a week; after unemployment rises, 510 meals at £22 gives £11,220. Meals fall 15% but revenue falls 22.1%, because both the number of meals and the spend per customer fall.',
    'Fewer customers spending less each: revenue falls faster than meals.',
    '## 6.2 The economic climate');
}

// 07 Globalisation: four points
{
  let b = rect(30, 110, 840, 70, C.cream, C.olive) + para(56, 140, 'Globalisation: goods, services, money, people and ideas move more freely between countries', 790, { size: 18, weight: 600 });
  // multinationals
  b += rect(30, 200, 410, 230, C.panel) + tx(50, 236, 'Growth of multinationals', { size: 19, weight: 700 });
  b += card(50, 256, 175, 156, 'Threat', 'Strong brands; low prices from large-scale buying', { edge: C.rust, tfill: C.rust, ts: 17, bs: 15, top: 30, pad: 12 });
  b += card(245, 256, 175, 156, 'Opportunity', 'A large customer, or a supplier', { edge: C.tealDark, tfill: C.tealDark, ts: 17, bs: 15, top: 30, pad: 12 });
  // location
  b += rect(460, 200, 410, 230, C.panel) + tx(480, 236, 'Influences on location', { size: 19, weight: 700 });
  b += para(480, 266, 'Costs, proximity to market, labour and materials, now including sites abroad', 370, { size: 16, fill: C.muted });
  b += rect(480, 330, 370, 82, C.cream, C.olive, 10, 2) + para(496, 360, 'Low wages are only one factor: distance, supply-chain length and reputation matter too', 340, { size: 15 });
  // branding spectrum
  b += rect(30, 450, 840, 150, C.panel) + tx(50, 486, 'International branding', { size: 19, weight: 700 });
  b += `<line x1="80" y1="530" x2="820" y2="530" stroke="${C.ink}" stroke-width="4"/>`;
  b += arrow(450, 530, 90, 530, { w: 4 }) + arrow(450, 530, 810, 530, { w: 4 });
  b += tx(80, 562, 'One global brand', { size: 16, weight: 700 }) + tx(80, 584, 'saves marketing costs, builds recognition', { size: 15, fill: C.muted });
  b += tx(820, 562, 'Adapt to local markets', { size: 16, weight: 700, anchor: 'end' }) + tx(820, 584, 'name, product or message', { size: 15, fill: C.muted, anchor: 'end' });
  b += tx(450, 512, 'most do some of each', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  // compete
  b += rect(30, 620, 840, 150, C.panel) + tx(50, 656, 'How businesses compete internationally', { size: 19, weight: 700 });
  ['Price: efficient, large scale', 'Quality and design', 'Brand image', 'Customer service', 'E-commerce: reach customers abroad'].forEach((s, i) => { b += card(50 + i * 162, 674, 150, 80, '', s, { bs: 15, bfill: C.ink, edge: C.tealDark, fill: C.tealLight, align: 'middle', pad: 8 }); });
  add('07-globalisation-four-points',
    svg(900, 800, 'Globalisation: the four points', b),
    'Globalisation’s four points: multinationals can be a threat (strong brands, low prices) or an opportunity (a customer or supplier); location choices now include sites abroad, where low wages are only one factor; branding ranges from one global brand to local adaptation; and businesses compete internationally on price, quality, brand, service and e-commerce.',
    'Apply each globalisation point to the business in the case.',
    '## 6.3 Globalisation');
}

// 08 Pennant Cycles options
{
  let b = rect(30, 110, 410, 110, C.panel) + tx(235, 150, 'Pennant Cycles', { size: 20, weight: 700, anchor: 'middle' }) + tx(235, 190, 'UK-built bikes at £410', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += rect(460, 110, 410, 110, C.panel, C.rust) + tx(665, 150, 'Multinational', { size: 20, weight: 700, anchor: 'middle' }) + tx(665, 190, 'imported bikes at £320', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
  const opt = [
    ['Cut price towards £320', 'Keeps price-sensitive customers', 'Margins may disappear; cannot match a multinational’s scale', C.panel, C.panelEdge],
    ['Compete on quality and brand', 'Hand-built, local repairs: keeps customers who value service', 'Smaller market', C.tealLight, C.tealDark],
    ['Sell online abroad', 'New markets', 'Delivery costs; many competing sellers', C.panel, C.panelEdge],
  ];
  b += tx(395, 266, 'Reward', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + tx(710, 266, 'Risk', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  opt.forEach(([h, rw, rk, f, e], i) => {
    const y = 280 + i * 120;
    b += rect(30, y, 840, 106, f, e) + para(50, y + 44, h, 200, { size: 18, weight: 700 }) + para(270, y + 40, rw, 250, { size: 16 }) + para(560, y + 40, rk, 290, { size: 16 });
    if (i === 1) b += rect(730, y + 64, 120, 26, C.tealDark, C.tealDark, 13) + tx(790, y + 83, 'recommended', { size: 15, weight: 700, anchor: 'middle', fill: '#ffffff' });
  });
  b += takeaway(650, 'Recommend one option and justify it from the case.', 'Pennant should compete on quality and service, because it cannot win on price against a business with much larger scale.');
  add('08-pennant-cycles-options',
    svg(900, 650 + takeH('Pennant should compete on quality and service, because it cannot win on price against a business with much larger scale.') + 30, 'Pennant Cycles: facing cheaper imports', b),
    'Pennant Cycles sells UK-built bikes at £410 against imported bikes at £320. Cutting price keeps price-sensitive buyers but may wipe out margins; competing on quality and service keeps loyal customers in a smaller market; selling online abroad opens new markets with delivery costs. The recommended option is quality and service.',
    'A small business rarely wins on price against a multinational’s scale.',
    '## 6.3 Globalisation');
}
