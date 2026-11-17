import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-commerce-0715-production';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tx = (x, y, s, o = {}) => t(x, y, esc(s), o);
const wrap = (s, px, size = 17) => {
  const n = Math.max(6, Math.floor(px / (size * 0.53)));
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
const LH = (size) => Math.round(size * 1.32);
// wrapped paragraph; returns svg. pw = wrap width in px
const para = (x, y, s, pw, o = {}) => wrap(s, pw, o.size || 17).map((l, i) => tx(x, y + i * LH(o.size || 17), l, o)).join('');
const nl = (s, pw, size = 17) => wrap(s, pw, size).length;
const rect = (x, y, w, h, { fill = C.panel, edge = C.panelEdge, rx = 12, sw = 2.5, dash = '' } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const parrow = (d, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// pill / chip with centred label (label may be array of lines)
const pill = (x, y, w, h, label, { fill = C.tealLight, edge = C.ink, size = 18, weight = 700, color = C.ink, sw = 2.5, rx } = {}) => {
  const ls = Array.isArray(label) ? label : [label];
  const lh = LH(size), y0 = y + h / 2 - ((ls.length - 1) * lh) / 2 + size * 0.35;
  return rect(x, y, w, h, { fill, edge, sw, rx: rx ?? Math.min(h / 2, 14) }) + ls.map((l, i) => tx(x + w / 2, y0 + i * lh, l, { size, weight, anchor: 'middle', fill: color })).join('');
};
const tick = (cx, cy, r = 13) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.tealDark}"/>` + path(`M${cx - r * 0.45},${cy + r * 0.02} L${cx - r * 0.1},${cy + r * 0.38} L${cx + r * 0.5},${cy - r * 0.35}`, { stroke: '#ffffff', w: 3 });
const cross = (cx, cy, r = 13) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.rust}"/>` + path(`M${cx - r * 0.38},${cy - r * 0.38} L${cx + r * 0.38},${cy + r * 0.38} M${cx + r * 0.38},${cy - r * 0.38} L${cx - r * 0.38},${cy + r * 0.38}`, { stroke: '#ffffff', w: 3 });
const dot = (cx, cy, r = 5, fill = C.ink) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>`;
// list of items with a marker; returns {s, h}
const list = (x, y, items, pw, { size = 17, gap = 10, mark = 'dot', color = C.ink, markColor = C.ink } = {}) => {
  let s = '', yy = y;
  for (const it of items) {
    const n = nl(it, pw - 32, size);
    if (mark === 'tick') s += tick(x + 12, yy - size * 0.35, 12);
    else if (mark === 'cross') s += cross(x + 12, yy - size * 0.35, 12);
    else if (mark === 'dot') s += dot(x + 8, yy - size * 0.35, 5, markColor);
    s += para(x + 32, yy, it, pw - 32, { size, fill: color });
    yy += n * LH(size) + gap;
  }
  return { s, h: yy - y - gap };
};

// 01 Four sectors of production
{
  const s = [
    ['Primary', 'Extractive industries', 'Takes natural resources from land or sea', 'Farming, fishing, mining, forestry, oil drilling', 'a raw material', C.teal],
    ['Secondary', 'Manufacturing and construction', 'Turns raw materials into goods, or builds structures', 'Textile mill, car assembly, house building', 'a product or building', C.mustard],
    ['Tertiary', 'Commercial and direct services', 'Commercial services help trade; direct services are given to people personally', 'Bank, courier, school, salon', 'a service', '#e6b79a'],
    ['Quaternary', 'Digital technology', 'Knowledge-based: creates, processes and shares information', 'Software and apps, data analysis, cloud services', 'digital or information products', C.tealLight],
  ];
  let body = tx(160, 128, 'Sector', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) + tx(300, 128, 'Features and examples', { size: 16, weight: 700, fill: C.muted }) + tx(760, 128, 'It sells…', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  s.forEach(([n, d, f, ex, sells, fill], i) => {
    const y = 142 + i * 130;
    body += rect(30, y, 250, 116, { fill, edge: C.ink, rx: 14 }) + tx(155, y + 50, n, { size: 21, weight: 700, anchor: 'middle' }) + para(155, y + 78, d, 220, { size: 15, anchor: 'middle' });
    body += panel(290, y, 370, 116) + para(306, y + 32, f, 340, { size: 16 }) + para(306, y + 32 + nl(f, 340, 16) * LH(16) + 8, 'e.g. ' + ex, 340, { size: 16, fill: C.muted, italic: true });
    body += arrow(666, y + 58, 690, y + 58, { w: 3 });
    body += pill(700, y + 28, 170, 60, wrap(sells, 150, 16), { fill: C.panel, edge: C.panelEdge, size: 16, weight: 600 });
  });
  body += tx(450, 680, 'Construction is secondary, not primary.', { size: 17, anchor: 'middle', weight: 700, fill: C.rust });
  add('01-sectors-of-production',
    svg(900, 705, 'Four sectors of production', body),
    'Four rows for the primary, secondary, tertiary and quaternary sectors, each with its features, examples and what it sells: a raw material, a product or building, a service, or a digital or information product.',
    'Ask what the business sells to place it in the right sector.',
    '## What are the sectors of production? (1.2.1)');
}

// 02 Specialisation at three levels
{
  const lv = [
    ['Individual', ['Skilled and quick at one task', 'May earn more as an expert'], ['Repetitive and boring work', 'Skills may become outdated or automated']],
    ['Factory', ['Higher output, lower cost per unit', 'Specialist machinery; consistent quality'], ['Depends on one product', 'One breakdown can stop the whole line']],
    ['Country', ['Makes what it is best placed to make', 'Earns export income'], ['Depends on imports for other goods', 'Exposed if world demand or price falls']],
  ];
  let body = tx(400, 128, 'Advantages', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + tx(730, 128, 'Disadvantages', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  lv.forEach(([n, a, d], i) => {
    const y = 145 + i * 160;
    body += pill(30, y, 140, 145, n, { fill: C.cream, size: 19, rx: 14 });
    body += panel(185, y, 335, 145) + list(203, y + 42, a, 305, { size: 16, gap: 14, mark: 'tick' }).s;
    body += panel(535, y, 335, 145) + list(553, y + 42, d, 305, { size: 16, gap: 14, mark: 'cross' }).s;
  });
  body += rect(30, 635, 840, 70, { fill: C.tealLight, edge: C.tealDark });
  body += tx(450, 677, 'Specialisation only works because of trade: specialists exchange for everything else.', { size: 17, anchor: 'middle', weight: 600, fill: C.tealDark });
  add('02-specialisation-grid',
    svg(900, 730, 'Specialisation at three levels', body),
    'A grid of advantages and disadvantages of specialisation for an individual, a factory and a country, such as skill and speed against boring work, lower unit cost against dependence on one product, and export income against dependence on imports.',
    'Use the level the question names: individual, factory or country.',
    '## What is specialisation? (1.2.1)');
}

// 03 In-house vs outsourced
{
  let body = rect(30, 110, 410, 330, { fill: C.cream, edge: C.olive }) + tx(235, 148, 'In-house', { size: 23, weight: 700, anchor: 'middle', fill: C.olive });
  body += tx(235, 174, 'own staff and equipment', { size: 16, anchor: 'middle', fill: C.muted });
  body += list(54, 218, ['Control on quality', 'Control of information: designs stay secret', 'Easier to change product or schedule', 'Not dependent on another firm'], 370, { size: 17, gap: 16, mark: 'tick' }).s;
  body += rect(460, 110, 410, 330, { fill: C.tealLight, edge: C.tealDark }) + tx(665, 148, 'Outsourced', { size: 23, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += tx(665, 174, 'pay another business to do it', { size: 16, anchor: 'middle', fill: C.muted });
  body += list(484, 218, ['Access to expertise', 'Cost savings: scale or lower wages', 'No machinery to buy, no staff to train', 'Managers focus on core activities'], 370, { size: 17, gap: 16, mark: 'tick' }).s;
  body += panel(30, 460, 410, 120) + tx(54, 494, 'Points to in-house', { size: 17, weight: 700, fill: C.olive }) + para(54, 522, 'A secret formula, or a brand that depends on quality', 370, { size: 16 });
  body += panel(460, 460, 410, 120) + tx(484, 494, 'Points to outsourcing', { size: 17, weight: 700, fill: C.tealDark }) + para(484, 522, 'A small firm launching a new product with little capital', 370, { size: 16 });
  add('03-in-house-vs-outsourced',
    svg(900, 605, 'In-house or outsourced production?', body),
    'Two panels. In-house production gives control of quality and information, flexibility and independence. Outsourced production gives expertise, cost savings, no machinery or training costs and focus on core activities. Below, a secret formula points to in-house; a small firm with little capital points to outsourcing.',
    'The right choice depends on the business: control versus expertise and cost.',
    '## In-house or outsourced production? (1.2.2)');
}

// 04 Domestic vs global supply chain
{
  const chain = (x, y, items, w, gap) => {
    let s = '';
    items.forEach((it, i) => { s += pill(x + i * (w + gap), y, w, 56, wrap(it, w - 16, 16), { fill: C.panel, size: 16 }); if (i < items.length - 1) s += arrow(x + i * (w + gap) + w + 4, y + 28, x + (i + 1) * (w + gap) - 6, y + 28, { w: 3 }); });
    return s;
  };
  let body = panel(30, 110, 840, 210) + tx(54, 146, 'Domestic supply chain', { size: 21, weight: 700 }) + tx(54, 172, 'all stages inside one country', { size: 16, fill: C.muted });
  body += rect(150, 192, 600, 108, { fill: C.tealLight, edge: C.tealDark, dash: '9 6' }) + tx(740, 212, 'Country 1', { size: 15, weight: 700, anchor: 'end', fill: C.tealDark });
  body += chain(178, 228, ['Dairy farm', 'Local processor', 'Local shops'], 160, 40);
  body += panel(30, 340, 840, 250) + tx(54, 376, 'Global supply chain', { size: 21, weight: 700 }) + tx(54, 402, 'stages in more than one country', { size: 16, fill: C.muted });
  const cs = [['Country 1', 'Cotton grown', C.tealLight, C.tealDark], ['Country 2', 'Spun and sewn', C.cream, C.olive], ['Country 3', 'Sold', '#f3d9c8', C.rust]];
  cs.forEach(([c, s, fill, edge], i) => {
    const x = 54 + i * 280;
    body += rect(x, 425, 230, 145, { fill, edge, dash: '9 6' }) + tx(x + 115, 452, c, { size: 15, weight: 700, anchor: 'middle', fill: edge });
    body += pill(x + 25, 478, 180, 60, s, { fill: C.panel, size: 17 });
  });
  [0, 1].forEach((i) => { body += arrow(54 + i * 280 + 207, 508, 54 + (i + 1) * 280 + 23, 508, { w: 3.5 }); });
  add('04-domestic-vs-global-chain',
    svg(900, 615, 'Domestic and global supply chains', body),
    'Top: a domestic supply chain with a dairy farm, local processor and local shops all inside one country. Bottom: a global supply chain with cotton grown in one country, spun and sewn in a second, and sold in a third.',
    'The difference is whether the stages stay in one country or cross borders.',
    '## What is a global supply chain? (1.2.3)');
}

// 05 Intermediaries
{
  let body = panel(30, 110, 840, 200) + tx(54, 146, 'Home trade', { size: 21, weight: 700 });
  const hs = [['Producer', C.panel], ['Wholesaler', C.cream], ['Retailer', C.cream], ['Consumer', C.panel]];
  hs.forEach(([h, f], i) => { const x = 54 + i * 208; body += pill(x, 170, 170, 56, h, { fill: f, size: 18 }); if (i < 3) body += arrow(x + 174, 198, x + 202, 198, { w: 3 }); });
  body += para(262 + 85, 254, 'buys in bulk, stores, breaks bulk', 190, { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  body += para(470 + 85, 254, 'sells in the amounts, places and times that suit', 190, { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  body += tx(450, 345, 'International trade adds two', { size: 20, weight: 700, anchor: 'middle' });
  const card = (x, name, fill, edge, rows) => {
    let s = panel(x, 365, 410, 300) + pill(x + 20, 382, 150, 46, name, { fill, edge, size: 19 });
    rows.forEach(([q, a, good], i) => { const y = 470 + i * 58; s += tx(x + 22, y, q, { size: 16, fill: C.muted }) + tx(x + 22, y + 24, a, { size: 17, weight: 700, fill: good ? C.tealDark : C.ink }); });
    return s;
  };
  body += card(30, 'Agent', C.tealLight, C.tealDark, [['Owns the goods?', 'No', 0], ['Holds the goods?', 'No: arranges sales or purchases', 0], ['Paid by', 'Commission', 0]]);
  body += tx(235, 640, 'Brings knowledge of local market, language, laws', { size: 15, anchor: 'middle', fill: C.tealDark, italic: true });
  body += card(460, 'Factor', C.cream, C.olive, [['Owns the goods?', 'No', 0], ['Holds the goods?', 'Yes: has possession, sells in own name', 1], ['Paid by', 'Commission', 0]]);
  body += tx(665, 640, 'Can deliver quickly to local buyers', { size: 15, anchor: 'middle', fill: C.olive, italic: true });
  add('05-intermediaries',
    svg(900, 690, 'Intermediaries in a supply chain', body),
    'Home trade runs producer, wholesaler, retailer, consumer, with the wholesaler breaking bulk. International trade adds an agent, who arranges sales without holding the goods, and a factor, who has possession of the goods and sells them in its own name; both are paid commission.',
    'An agent never holds the goods; a factor holds them but still does not own them.',
    '## Who are the intermediaries in a supply chain? (1.2.4)');
}

// 06 Automation and EDI
{
  let body = panel(30, 110, 840, 175) + tx(54, 146, 'How EDI works', { size: 20, weight: 700 });
  body += pill(54, 170, 220, 90, ['Buyer’s system', 'stock runs low'], { fill: C.cream, size: 17 });
  body += pill(626, 170, 220, 90, ['Supplier’s system'], { fill: C.tealLight, size: 17 });
  body += arrow(282, 196, 618, 196, { color: C.tealDark, marker: 'ahT', w: 4 }) + tx(450, 186, 'order sent automatically', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  body += arrow(618, 238, 282, 238, { color: C.olive, marker: 'ahO', w: 4 }) + tx(450, 264, 'invoice back, standard format, no paper', { size: 16, weight: 600, anchor: 'middle', fill: C.olive });
  const pc = (x, y, head, pos, neg) => {
    let s = panel(x, y, 410, 395) + tx(x + 22, y + 38, head, { size: 20, weight: 700 });
    const p = list(x + 22, y + 78, pos, 370, { size: 16, gap: 10, mark: 'tick' });
    s += p.s;
    s += list(x + 22, y + 78 + p.h + 34, neg, 370, { size: 16, gap: 10, mark: 'cross' }).s;
    return s;
  };
  body += pc(30, 305, 'Automation (robotics)', ['Faster, continuous output', 'Consistent quality', 'Lower labour cost per unit in the long run', 'Robots do dangerous or repetitive work'], ['High cost to buy and install', 'Job losses or retraining', 'Breakdowns can halt production', 'Less flexible for small, customised orders']);
  body += pc(460, 305, 'EDI with suppliers', ['Orders placed instantly when stock is low', 'Fewer retyping errors', 'Lower paperwork costs', 'Can hold less stock'], ['Set-up cost; compatible systems needed', 'Dependence on networks', 'Cyber attack; errors spread automatically']);
  add('06-automation-and-edi',
    svg(900, 725, 'Automation and EDI', body),
    'Top: with EDI, a buyer’s system sends an order automatically to the supplier’s system when stock runs low, and the invoice comes back electronically. Below, positive and negative impacts of automation and of EDI are listed with ticks and crosses.',
    'Both technologies cut costs and errors, but cost money to set up and create new dependencies.',
    '## How does digital technology affect production? (1.2.5)');
}

// 07 Bright Kitchen cost calculation
{
  const rows = [
    ['Inventory', '400 × 12', 4800, ''],
    ['Customs duty', '5% of 4,800', 240, 'on the value of the goods'],
    ['Transport', 'given', 350, ''],
    ['Packaging', '400 × 0.50', 200, ''],
    ['Warehousing', '4 × 15', 60, ''],
    ['Commission', '3% of (400 × 25) = 3% of 10,000', 300, 'on the sales value'],
  ];
  let body = panel(30, 110, 840, 455);
  body += tx(54, 145, 'Cost', { size: 16, weight: 700, fill: C.muted }) + tx(230, 145, 'Working', { size: 16, weight: 700, fill: C.muted }) + tx(846, 145, '$', { size: 16, weight: 700, anchor: 'end', fill: C.muted });
  rows.forEach(([c, w, v, note], i) => {
    const y = 192 + i * 56;
    body += line(54, y - 30, 846, y - 30, { color: C.panelEdge, w: 1.5 });
    body += tx(54, y, c, { size: 18, weight: 700 }) + tx(230, y, w, { size: 17 });
    if (note) body += tx(230, y + 22, note, { size: 15, weight: 600, fill: C.rust, italic: true });
    body += tx(846, y, v.toLocaleString('en-US'), { size: 18, weight: 600, anchor: 'end' });
  });
  body += rect(46, 505, 808, 48, { fill: C.cream, edge: C.olive, rx: 10 });
  body += tx(66, 537, 'Total cost', { size: 19, weight: 700 }) + tx(838, 537, '5,950', { size: 21, weight: 700, anchor: 'end' });
  body += rect(30, 585, 840, 80, { fill: C.mustard, edge: C.ink });
  body += tx(450, 625, 'Cost per kettle = 5,950 / 400 = $14.875 ≈ $14.88', { size: 21, weight: 700, anchor: 'middle' });
  body += tx(450, 652, '(invented figures)', { size: 15, anchor: 'middle' });
  add('07-kettle-costs',
    svg(900, 690, 'Bright Kitchen: the cost of 400 kettles', body),
    'A cost table for 400 imported kettles: inventory 4,800, customs duty 240 (5% of the goods’ value), transport 350, packaging 200, warehousing 60 and commission 300 (3% of sales of 10,000). Total 5,950, or $14.875 per kettle.',
    'Duty is on the value of the goods and commission on the sales value; the total is $5,950, about $14.88 a kettle.',
    '## Worked example: calculating costs (invented figures)');
}
