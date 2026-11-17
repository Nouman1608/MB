import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-commerce-7100-outsourcing';
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

// 01 Contract manufacturing: who does what
{
  const ex = [
    ['New juice brand', 'recipe, labels, marketing', 'Bottling plant', 'mixes, fills, seals bottles'],
    ['Cosmetics company', 'designs a skin cream', 'Laboratory-equipped factory', 'produces it in large quantities'],
    ['Electronics brand', 'designs earphones', 'Specialist assembler abroad', 'builds them'],
  ];
  let body = tx(220, 130, 'Client (brand owner)', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) + tx(680, 130, 'Contractor', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  ex.forEach(([c, cd, k, kd], i) => {
    const y = 145 + i * 112;
    body += rect(30, y, 380, 96, { fill: C.cream, edge: C.olive }) + tx(52, y + 38, c, { size: 19, weight: 700 }) + tx(52, y + 68, cd, { size: 16, fill: C.muted });
    body += arrow(418, y + 32, 482, y + 32, { color: C.tealDark, marker: 'ahT', w: 3 }) + tx(450, y + 22, 'design', { size: 15, anchor: 'middle', fill: C.tealDark });
    body += arrow(482, y + 66, 418, y + 66, { color: C.olive, marker: 'ahO', w: 3 }) + tx(450, y + 88, 'goods', { size: 15, anchor: 'middle', fill: C.olive });
    body += rect(490, y, 380, 96, { fill: C.tealLight, edge: C.tealDark }) + tx(512, y + 38, k, { size: 19, weight: 700 }) + tx(512, y + 68, kd, { size: 16, fill: C.muted });
  });
  body += rect(30, 490, 840, 70, { fill: C.panel, edge: C.panelEdge });
  body += tx(450, 532, 'Made to the client’s design and sold under the client’s brand.', { size: 18, weight: 700, anchor: 'middle' });
  add('01-contract-manufacturing-examples',
    svg(900, 585, 'Contract manufacturing: who does what', body),
    'Three pairs: a juice brand and a bottling plant, a cosmetics company and a laboratory-equipped factory, and an electronics brand and a specialist assembler abroad. In each, the client sends the design and the contractor sends back the goods.',
    'The client designs, brands and sells; the contractor makes the goods to its specification.',
    '## Contract manufacturing');
}

// 02 Why contract manufacturing has grown
{
  const r = [
    ['Lower start-up costs', 'Sell without buying a factory, so ideas with little capital can enter a market'],
    ['Specialist expertise and equipment', 'Contractors serve many clients, so they afford advanced machines and skilled staff'],
    ['Economies of scale', 'Producing for several brands lowers the cost per unit'],
    ['Flexibility', 'Order more in busy seasons, less in quiet ones, with no idle machines'],
    ['Focus on core activities', 'Design, branding and selling, where the client adds most value'],
    ['Global chains, digital communication', 'Designs, orders and reports exchanged instantly with contractors abroad'],
  ];
  let body = '';
  r.forEach(([a, b], i) => {
    const y = 110 + i * 84;
    body += pill(30, y, 250, 72, wrap(a, 226, 16), { fill: C.cream, size: 16, rx: 12 });
    body += arrow(288, y + 36, 328, y + 36, { w: 3 });
    body += panel(338, y, 532, 72) + para(358, y + (nl(b, 490, 17) > 1 ? 30 : 42), b, 490, { size: 17 });
  });
  add('02-why-contract-manufacturing-grew',
    svg(900, 620, 'Why contract manufacturing has grown', body),
    'Six reasons each linked to its effect: lower start-up costs, specialist expertise and equipment, economies of scale, flexibility, focus on core activities, and global supply chains with digital communication.',
    'Explain why each reason makes contract manufacturing attractive to a client.',
    '## Contract manufacturing');
}

// 03 Contract logistics: services and growth
{
  let body = panel(30, 110, 840, 230) + tx(54, 146, 'What the provider can do', { size: 19, weight: 700 });
  const sv = ['Receive and store in its warehouse', 'Pick and pack each order', 'Transport and deliver to shops or homes', 'Handle returns'];
  sv.forEach((s, i) => {
    const x = 54 + i * 202;
    body += pill(x, 170, 182, 74, wrap(s, 166, 15), { fill: C.tealLight, size: 15 });
    if (i < 3) body += arrow(x + 184, 207, x + 200, 207, { w: 2.5 });
  });
  body += pill(54, 262, 792, 52, 'Export documents and customs clearance, often with freight forwarders', { fill: C.cream, size: 16 });
  body += tx(450, 375, 'Why it has grown', { size: 19, weight: 700, anchor: 'middle' });
  const g = [['Ecommerce', 'Thousands of small parcels and returns; costly to build in-house'], ['Customer expectations', 'Next-day delivery and live tracking are now common'], ['Global trade', 'Routes, documents and customs need specialist knowledge'], ['Cost and flexibility', 'Pay per order or per pallet, so costs move with sales']];
  g.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * 430, y = 395 + Math.floor(i / 2) * 110;
    body += panel(x, y, 410, 98) + tx(x + 20, y + 34, h, { size: 18, weight: 700, fill: C.tealDark }) + para(x + 20, y + 62, d, 370, { size: 16 });
  });
  add('03-contract-logistics',
    svg(900, 625, 'Contract logistics: more than transport', body),
    'A provider receives and stores goods, picks and packs orders, delivers them and handles returns, and can arrange export documents and customs with freight forwarders. Four reasons for growth: ecommerce, customer expectations, global trade, and costs that move with sales.',
    'Contract logistics covers storage, packing, delivery, returns and documents, not just transport.',
    '## Contract logistics');
}

// 04 Benefits vs risks
{
  const ben = ['No factories, warehouses or vehicles to buy', 'Expertise and modern equipment', 'Lower cost per unit from the contractor’s scale', 'Costs that vary with output', 'Management time freed for design and selling'];
  const risk = ['Less control over quality and timing', 'Dependence: problems if it fails or raises prices', 'Designs or customer data leaked or copied', 'Contractor’s conditions or pollution hurt reputation', 'Communication delays across time zones'];
  let body = panel(30, 110, 410, 345) + tx(54, 148, 'Benefits to the client', { size: 20, weight: 700, fill: C.tealDark }) + list(54, 190, ben, 370, { size: 17, gap: 16, mark: 'tick' }).s;
  body += panel(460, 110, 410, 345) + tx(484, 148, 'Risks to the client', { size: 20, weight: 700, fill: C.rust }) + list(484, 190, risk, 370, { size: 17, gap: 16, mark: 'cross' }).s;
  body += rect(30, 475, 840, 80, { fill: C.cream, edge: C.olive });
  body += tx(450, 510, 'Weigh at least two of each, then decide: the type of product matters.', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  body += tx(450, 536, 'Medicines or baby food raise bigger quality concerns than plain cardboard boxes.', { size: 16, anchor: 'middle' });
  add('04-benefits-and-risks',
    svg(900, 580, 'Should the business outsource?', body),
    'Five benefits of outsourcing, such as no need to buy factories and lower cost per unit, beside five risks, such as less control over quality, dependence on the contractor and reputation damage.',
    'A judgement weighs benefits against risks for the particular product.',
    '## Benefits and risks to judge');
}

// 05 Bloom Box: in-house vs provider at two volumes
{
  let body = panel(30, 110, 360, 300) + tx(54, 146, 'In-house, 2,000 orders', { size: 18, weight: 700 });
  [['Warehouse rent', '3,000'], ['3 staff × 900', '2,700'], ['Van running costs', '1,500'], ['Packaging 0.40 × 2,000', '800']].forEach(([a, b], i) => { const y = 184 + i * 34; body += tx(54, y, a, { size: 16 }) + tx(366, y, b, { size: 16, anchor: 'end', weight: 600 }); });
  body += line(54, 316, 366, 316, { color: C.panelEdge, w: 1.5 }) + tx(54, 344, 'Total', { size: 18, weight: 700 }) + tx(366, 344, '$8,000', { size: 19, weight: 700, anchor: 'end', fill: C.rust });
  body += tx(54, 384, '8,000 / 2,000 = $4.00 per order', { size: 16, weight: 600 });
  // chart
  const base = 380, k = 0.03;
  const groups = [['2,000 orders', 8000, 7000, '$4.00', '$3.50'], ['800 orders', 7520, 2800, '$9.40', '$3.50']];
  body += line(420, base, 870, base, { w: 2.5 });
  groups.forEach(([g, a, b, pa, pb], i) => {
    const x = 440 + i * 220;
    body += `<rect x="${x}" y="${base - a * k}" width="85" height="${a * k}" fill="#f3d9c8" stroke="${C.ink}" stroke-width="2.5"/>` + tx(x + 42, base - a * k - 10, '$' + a.toLocaleString('en-US'), { size: 16, weight: 700, anchor: 'middle' });
    body += `<rect x="${x + 95}" y="${base - b * k}" width="85" height="${b * k}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(x + 137, base - b * k - 10, '$' + b.toLocaleString('en-US'), { size: 16, weight: 700, anchor: 'middle' });
    body += tx(x + 42, base - 14, pa, { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + tx(x + 137, base - 14, pb, { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    body += tx(x + 90, base + 26, g, { size: 17, weight: 700, anchor: 'middle' });
  });
  body += `<rect x="440" y="430" width="18" height="18" fill="#f3d9c8" stroke="${C.ink}"/>` + tx(466, 445, 'In-house', { size: 15 }) + `<rect x="580" y="430" width="18" height="18" fill="${C.teal}" stroke="${C.ink}"/>` + tx(606, 445, 'Provider at $3.50 per order', { size: 15 });
  body += tx(870, 470, 'small figures = cost per order', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  body += panel(30, 430, 360, 110) + tx(54, 462, 'At 800 orders', { size: 17, weight: 700 }) + tx(54, 490, 'Fixed 7,200 + packaging 320', { size: 16 }) + tx(54, 516, '= $7,520, or $9.40 per order', { size: 16, weight: 600, fill: C.rust });
  body += rect(410, 485, 460, 55, { fill: C.cream, edge: C.olive }) + tx(640, 519, 'Provider: 2,000 × 3.50 = $7,000; 800 × 3.50 = $2,800', { size: 15.5, anchor: 'middle', weight: 600 });
  body += rect(30, 560, 840, 80, { fill: C.mustard, edge: C.ink });
  body += tx(450, 594, 'Outsourcing is cheaper at both levels, and the gap widens when sales fall,', { size: 17, weight: 700, anchor: 'middle' });
  body += tx(450, 620, 'because in-house costs are mostly fixed (invented figures).', { size: 17, weight: 700, anchor: 'middle' });
  add('05-bloom-box-logistics',
    svg(900, 665, 'Bloom Box: own logistics or a provider?', body),
    'In-house logistics for 2,000 orders costs $8,000 ($4.00 per order) against $7,000 from a provider at $3.50 per order. At 800 orders in-house costs $7,520 ($9.40 per order) against $2,800 from the provider.',
    'Mostly fixed in-house costs make outsourcing even cheaper when sales are low.',
    '## Worked example: should an online seller outsource logistics?');
}
