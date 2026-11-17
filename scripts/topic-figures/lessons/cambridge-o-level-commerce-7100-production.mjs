import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-commerce-7100-production';
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

// 01 Four sectors, placing the activity
{
  const s = [
    ['Primary', 'Extractive', 'Takes natural resources from land or sea', 'Farming, fishing, mining, oil drilling, forestry', C.teal],
    ['Secondary', 'Manufacturing and construction', 'Turns raw materials into goods, or builds structures', 'Car assembly, flour milling, house and road building', C.mustard],
    ['Tertiary', 'Commercial and direct services', 'Commercial services help trade; direct services are given personally', 'Shops, banks, couriers; doctors, teachers, police', '#e6b79a'],
    ['Quaternary', 'Digital technology', 'Activities based on digital technology and information', 'Software, data analysis, cloud computing, app design', C.tealLight],
  ];
  let body = '';
  s.forEach(([n, d, f, ex, fill], i) => {
    const y = 110 + i * 118;
    body += rect(30, y, 240, 106, { fill, edge: C.ink, rx: 14 }) + tx(150, y + 46, n, { size: 21, weight: 700, anchor: 'middle' }) + para(150, y + 74, d, 215, { size: 15, anchor: 'middle' });
    body += panel(285, y, 585, 106) + para(305, y + 36, f, 545, { size: 16 }) + para(305, y + 36 + nl(f, 545, 16) * LH(16) + 8, 'e.g. ' + ex, 545, { size: 16, fill: C.muted, italic: true });
  });
  body += rect(30, 590, 840, 100, { fill: C.cream, edge: C.olive });
  body += tx(54, 624, 'Place the activity, not the whole firm', { size: 18, weight: 700, fill: C.olive });
  body += tx(54, 652, 'In a mining company: geologist searching for oil → primary; office cashier → tertiary.', { size: 16 });
  body += tx(54, 676, 'A delivery driver is tertiary (transport is a commercial service), not secondary.', { size: 16 });
  add('01-sectors-of-production',
    svg(900, 715, 'Four sectors of production', body),
    'Four rows give the feature and examples of the primary, secondary, tertiary and quaternary sectors. Below, a reminder to place the activity: in a mining company a geologist is primary but an office cashier is tertiary, and a delivery driver is tertiary.',
    'Ask what the worker actually does to place the activity in a sector.',
    '## The four sectors and their features');
}

// 02 Specialisation in three contexts
{
  const lv = [
    ['Individual', ['Skilled and quick at the task', 'Can earn more as an expert', 'No time lost switching jobs'], ['Repetitive and boring work', 'Skills may become out of date', 'Harder to change job']],
    ['Factory', ['Trained staff and specialist machines raise output per worker', 'More consistent quality'], ['A stoppage at one stage halts the line', 'Less motivation, more absences']],
    ['Country', ['Uses natural advantages to produce more', 'Earns export income'], ['Depends on others for goods it does not make', 'Vulnerable if world demand or prices fall']],
  ];
  let body = tx(400, 128, 'Advantages', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + tx(730, 128, 'Disadvantages', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  lv.forEach(([n, a, d], i) => {
    const y = 145 + i * 170;
    body += pill(30, y, 140, 155, n, { fill: C.cream, size: 19, rx: 14 });
    body += panel(185, y, 335, 155) + list(203, y + 38, a, 305, { size: 16, gap: 10, mark: 'tick' }).s;
    body += panel(535, y, 335, 155) + list(553, y + 38, d, 305, { size: 16, gap: 10, mark: 'cross' }).s;
  });
  body += tx(450, 680, 'Name the context: bored workers, a stopped line, or over-dependence on one export.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('02-specialisation-contexts',
    svg(900, 705, 'Specialisation in three contexts', body),
    'A grid of advantages and disadvantages of specialisation for an individual, a factory and a country, such as becoming skilled against boring work, higher output per worker against the whole line stopping, and export income against dependence on other countries.',
    'Each context has its own advantages and disadvantages; use the one the question names.',
    '## Specialisation in three contexts');
}

// 03 In-house vs outsourced
{
  let body = rect(30, 110, 410, 300, { fill: C.cream, edge: C.olive }) + tx(235, 148, 'In-house', { size: 23, weight: 700, anchor: 'middle', fill: C.olive });
  body += tx(235, 174, 'own staff, premises and equipment', { size: 16, anchor: 'middle', fill: C.muted });
  body += list(54, 218, ['Control on quality: inspect every stage, fix faults at once', 'Control of information: designs, recipes and data stay inside', 'Fewer delays from a supplier’s other customers'], 370, { size: 17, gap: 16, mark: 'tick' }).s;
  body += rect(460, 110, 410, 300, { fill: C.tealLight, edge: C.tealDark }) + tx(665, 148, 'Outsourced', { size: 23, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += tx(665, 174, 'pay another business to do it', { size: 16, anchor: 'middle', fill: C.muted });
  body += list(484, 218, ['Accessing expertise: skills and equipment the business lacks', 'Cost savings: no machinery or extra staff; specialist’s scale', 'Managers focus on what the business does best'], 370, { size: 17, gap: 16, mark: 'tick' }).s;
  body += rect(30, 430, 840, 70, { fill: C.panel, edge: C.panelEdge });
  body += tx(450, 472, 'Assess: weigh quality and information control against expertise and cost.', { size: 17, weight: 600, anchor: 'middle' });
  add('03-in-house-vs-outsourced',
    svg(900, 525, 'In-house or outsourced production?', body),
    'Two panels. In-house production gives control on quality, control of information and fewer supplier delays. Outsourced production gives access to expertise, cost savings and lets managers focus on what the business does best.',
    'In-house means control; outsourcing means expertise and cost savings.',
    '## In-house or outsourced production?');
}

// 04 Global supply chain: the bicycle
{
  let body = panel(30, 110, 840, 150) + tx(54, 146, 'Domestic supply chain', { size: 20, weight: 700 }) + tx(54, 172, 'every stage within one country', { size: 16, fill: C.muted });
  body += rect(54, 190, 792, 50, { fill: C.tealLight, edge: C.tealDark, dash: '9 6', rx: 10 }) + tx(450, 222, 'materials, making and selling all in one country', { size: 16, anchor: 'middle', weight: 600, fill: C.tealDark });
  body += panel(30, 280, 840, 310) + tx(54, 316, 'Global supply chain: a bicycle', { size: 20, weight: 700 }) + tx(54, 342, 'at least some stages in other countries', { size: 16, fill: C.muted });
  const cs = [['Country 1', 'Frame welded', C.tealLight, C.tealDark], ['Country 2', 'Gears made', C.cream, C.olive], ['Country 3', 'Final assembly', '#f3d9c8', C.rust]];
  cs.forEach(([c, s, fill, edge], i) => {
    const x = 54 + i * 280;
    body += rect(x, 365, 230, 150, { fill, edge, dash: '9 6' }) + tx(x + 115, 392, c, { size: 15, weight: 700, anchor: 'middle', fill: edge });
    body += pill(x + 25, 410, 180, 60, s, { fill: C.panel, size: 17 });
  });
  body += arrow(543, 440, 629, 440, { w: 3.5 });
  body += parrow('M169,472 C169,590 724,590 724,478', { w: 3.5 });
  add('04-global-supply-chain',
    svg(900, 615, 'Domestic and global supply chains', body),
    'A domestic supply chain has every stage in one country. A global one, such as a bicycle, has the frame welded in one country and the gears made in another, both sent to a third country for final assembly.',
    'A supply chain is global when at least some stages take place in other countries.',
    '## Global and domestic supply chains');
}

// 05 Agent vs factor
{
  let body = panel(30, 110, 840, 130) + tx(54, 146, 'Home trade', { size: 19, weight: 700 });
  const hs = [['Producer', C.panel], ['Wholesaler', C.cream], ['Retailer', C.cream], ['Consumer', C.panel]];
  hs.forEach(([h, f], i) => { const x = 54 + i * 208; body += pill(x, 166, 170, 52, h, { fill: f, size: 18 }); if (i < 3) body += arrow(x + 174, 192, x + 202, 192, { w: 3 }); });
  body += tx(450, 280, 'International trade: agent or factor?', { size: 20, weight: 700, anchor: 'middle' });
  const card = (x, name, fill, edge, rows) => {
    let s = panel(x, 300, 410, 260) + pill(x + 20, 316, 150, 46, name, { fill, edge, size: 19 });
    rows.forEach(([q, a, hl], i) => { const y = 400 + i * 54; s += tx(x + 22, y, q, { size: 16, fill: C.muted }) + tx(x + 22, y + 24, a, { size: 17, weight: 700, fill: hl ? C.tealDark : C.ink }); });
    return s;
  };
  body += card(30, 'Agent', C.tealLight, C.tealDark, [['What it does', 'Finds buyers or sellers; arranges deals', 0], ['Holds the goods?', 'No', 0], ['Owns the goods? Paid by?', 'No; commission', 0]]);
  body += card(460, 'Factor', C.cream, C.olive, [['What it does', 'Sells the goods for the owner', 0], ['Holds the goods?', 'Yes: takes possession', 1], ['Owns the goods? Paid by?', 'No; commission', 0]]);
  body += rect(30, 580, 840, 60, { fill: C.cream, edge: C.olive }) + tx(450, 617, 'The key difference is possession. Not the same as debt factoring (Topic 5).', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  add('05-agent-and-factor',
    svg(900, 665, 'Intermediaries: agent and factor', body),
    'Home trade runs producer, wholesaler, retailer, consumer. In international trade an agent finds buyers or sellers and arranges deals without holding the goods; a factor takes possession of the goods and sells them for the owner. Neither owns the goods; both earn commission.',
    'The factor holds the goods and the agent does not; neither owns them.',
    '## Intermediaries');
}

// 06 Automation and EDI
{
  let body = panel(30, 110, 840, 175) + tx(54, 146, 'EDI: a supermarket re-orders', { size: 20, weight: 700 });
  body += pill(54, 170, 220, 90, ['Supermarket system', 'stock at set level'], { fill: C.cream, size: 17 });
  body += pill(626, 170, 220, 90, ['Supplier system'], { fill: C.tealLight, size: 17 });
  body += arrow(282, 196, 618, 196, { color: C.tealDark, marker: 'ahT', w: 4 }) + tx(450, 186, 'order sent automatically', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  body += arrow(618, 238, 282, 238, { color: C.olive, marker: 'ahO', w: 4 }) + tx(450, 264, 'invoices back', { size: 16, weight: 600, anchor: 'middle', fill: C.olive });
  const pc = (x, y, head, pos, neg) => {
    let s = panel(x, y, 410, 270) + tx(x + 22, y + 38, head, { size: 20, weight: 700 });
    const p = list(x + 22, y + 78, pos, 370, { size: 16, gap: 10, mark: 'tick' });
    s += p.s + list(x + 22, y + 78 + p.h + 30, neg, 370, { size: 16, gap: 10, mark: 'cross' }).s;
    return s;
  };
  body += pc(30, 305, 'Automation (robots)', ['Faster, more consistent output', 'Works around the clock', 'Removes dangerous jobs'], ['Expensive to buy and maintain', 'Some jobs lost; retraining needed']);
  body += pc(460, 305, 'EDI', ['Less paperwork and fewer errors', 'Faster re-ordering'], ['Both firms need compatible systems', 'A system failure stops orders']);
  add('06-automation-and-edi',
    svg(900, 600, 'Automation and EDI', body),
    'Top: with EDI, a supermarket’s system sends an order to the supplier automatically when stock falls to a set level, and documents such as invoices come back electronically. Below, the gains and drawbacks of automation and of EDI.',
    'Both technologies speed up production and ordering but bring set-up costs and new risks.',
    '## Digital technology and production');
}

// 07 Export consignment costs
{
  const rows = [
    ['Transport', 'given', 1800, ''],
    ['Packaging', '500 × $0.60', 300, ''],
    ['Customs duties', '5% of $20,000', 1000, 'convert the % to $ first'],
    ['Commission to agent', '3% of $20,000', 600, ''],
    ['Warehousing', '2 weeks × $150', 300, ''],
    ['Bank charges', 'given', 45, ''],
  ];
  let body = panel(30, 110, 840, 455);
  body += tx(54, 145, 'Cost', { size: 16, weight: 700, fill: C.muted }) + tx(290, 145, 'Working', { size: 16, weight: 700, fill: C.muted }) + tx(846, 145, '$', { size: 16, weight: 700, anchor: 'end', fill: C.muted });
  rows.forEach(([c, w, v, note], i) => {
    const y = 192 + i * 56;
    body += line(54, y - 30, 846, y - 30, { color: C.panelEdge, w: 1.5 });
    body += tx(54, y, c, { size: 18, weight: 700 }) + tx(290, y, w, { size: 17 });
    if (note) body += tx(290, y + 22, note, { size: 15, weight: 600, fill: C.rust, italic: true });
    body += tx(846, y, v.toLocaleString('en-US'), { size: 18, weight: 600, anchor: 'end' });
  });
  body += rect(46, 505, 808, 48, { fill: C.cream, edge: C.olive, rx: 10 });
  body += tx(66, 537, 'Total', { size: 19, weight: 700 }) + tx(838, 537, '4,045', { size: 21, weight: 700, anchor: 'end' });
  body += rect(30, 585, 840, 80, { fill: C.mustard, edge: C.ink });
  body += tx(450, 625, 'Cost per jacket = 4,045 / 500 = $8.09', { size: 21, weight: 700, anchor: 'middle' });
  body += tx(450, 652, '500 jackets worth $20,000 (invented figures)', { size: 15, anchor: 'middle' });
  add('07-export-consignment-costs',
    svg(900, 690, 'Costing an export of 500 jackets', body),
    'A cost table for 500 exported jackets worth $20,000: transport 1,800, packaging 300, customs duties 1,000 (5%), agent’s commission 600 (3%), warehousing 300 and bank charges 45. Total $4,045, or $8.09 per jacket.',
    'Convert each percentage to dollars, add every line, then divide: $4,045 is $8.09 a jacket.',
    '## Costs of trade, commerce and production');
}
