import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-commerce-0715-outsourcing';
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

// shared row layout: left pill -> right panel
const causeRows = (rows, { y0 = 110, h = 70, gap = 12, lw = 240, lfill = C.cream, ledge = C.ink, rfill = C.panel, redge = C.panelEdge, rcolor = C.ink, acolor = C.ink, marker = 'ah', lsize = 17 } = {}) => {
  let s = '';
  rows.forEach(([a, b], i) => {
    const y = y0 + i * (h + gap);
    s += pill(30, y, lw, h, wrap(a, lw - 24, lsize), { fill: lfill, edge: ledge, size: lsize, rx: 12 });
    s += arrow(30 + lw + 8, y + h / 2, 30 + lw + 50, y + h / 2, { color: acolor, marker, w: 3.5 });
    s += rect(30 + lw + 60, y, 840 - lw - 60, h, { fill: rfill, edge: redge });
    const n = nl(b, 840 - lw - 100, 17);
    s += para(30 + lw + 80, y + h / 2 - ((n - 1) * LH(17)) / 2 + 6, b, 840 - lw - 100, { size: 17, fill: rcolor });
  });
  return s;
};

// 01 Contract manufacturing: five stages
{
  const st = [
    ['Specification', 'Brand owner sets the design, materials, quantities and quality standard'],
    ['Quotation and contract', 'Manufacturers quote a price per unit; the contract covers price, delivery dates, quality and confidentiality'],
    ['Sample approval', 'A first sample is made and checked before full production'],
    ['Production and inspection', 'The order is made; the brand owner or a hired inspection firm checks quality before shipping'],
    ['Delivery', 'Finished goods go to the brand owner’s warehouse or straight to retailers'],
  ];
  let body = '';
  st.forEach(([n, d], i) => {
    const y = 110 + i * 100;
    const q = i === 2 || i === 3;
    body += panel(100, y, 620, 90, q ? C.cream : C.panel, q ? C.olive : C.panelEdge);
    body += badge(60, y + 45, 24, String(i + 1), q ? C.mustard : C.cream);
    body += tx(122, y + 32, n, { size: 19, weight: 700 });
    body += para(122, y + 58, d, 590, { size: 16, fill: C.muted });
    if (i < 4) body += line(60, y + 69, 60, y + 121, { w: 3 });
  });
  body += path('M732,312 L752,312 L752,498 L732,498', { w: 3, stroke: C.olive });
  body += tl(764, 384, ['quality', 'checked', 'here'], { size: 17, weight: 700, fill: C.olive }, 22);
  body += rect(30, 620, 840, 70, { fill: C.tealLight, edge: C.tealDark });
  body += tx(450, 662, 'Common in electronics, clothing, cosmetics, medicines and toys', { size: 17, anchor: 'middle', weight: 600, fill: C.tealDark });
  add('01-contract-manufacturing-stages',
    svg(900, 715, 'Contract manufacturing in five stages', body),
    'Five numbered stages: specification, quotation and contract, sample approval, production and inspection, and delivery. Stages 3 and 4 are marked as the points where quality is checked.',
    'The brand owner controls quality through the specification, the sample and inspection before shipping.',
    '## How does contract manufacturing work in practice?');
}

// 02 Contract logistics
{
  let body = '';
  ['Client A', 'Client B', 'Client C'].forEach((c, i) => { body += pill(30, 150 + i * 100, 150, 64, c, { fill: C.cream, size: 18 }); body += arrow(184, 182 + i * 100, 262, 190 + i * 4, { w: 3 }); });
  body += rect(225, 110, 390, 470, { fill: C.tealLight, edge: C.tealDark, dash: '10 7', sw: 3 });
  body += tx(420, 140, 'Contract logistics firm', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const acts = [['Receiving', 'unload and check stock'], ['Storage', 'shared warehouse'], ['Picking and packing', 'each customer order'], ['Transport and delivery', 'to shops or homes']];
  acts.forEach(([a, s], i) => {
    const y = 162 + i * 92;
    body += rect(270, y, 300, 62, { fill: C.panel, edge: C.ink });
    body += tx(420, y + 27, a, { size: 18, weight: 700, anchor: 'middle' }) + tx(420, y + 50, s, { size: 15, anchor: 'middle', fill: C.muted });
    if (i < 3) body += arrow(420, y + 64, 420, y + 88, { w: 3 });
  });
  body += pill(690, 440, 180, 70, 'Customers', { fill: C.cream, size: 19 });
  body += arrow(572, 470, 684, 472, { w: 3.5 });
  body += parrow('M780,436 C785,260 700,192 578,192', { color: C.rust, marker: 'ahR', w: 3.5, dash: '9 6' });
  body += tl(800, 300, ['Returns', 'checked and', 'restocked'], { size: 15, weight: 600, fill: C.rust }, 19);
  body += tx(420, 555, 'Stock records shared with clients online', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600, italic: true });
  body += rect(30, 600, 840, 80, { fill: C.cream, edge: C.olive });
  body += tx(450, 633, 'One warehouse and one delivery network serve many clients,', { size: 17, anchor: 'middle', weight: 600 });
  body += tx(450, 659, 'so costs are spread and each client pays less per order.', { size: 17, anchor: 'middle', weight: 600 });
  add('02-contract-logistics',
    svg(900, 705, 'What a contract logistics firm does', body),
    'Several client firms send stock into one logistics firm, which receives, stores, picks and packs, and delivers goods to customers. Returns come back to be checked and restocked, and stock records are shared with clients online.',
    'Sharing one warehouse and network across many clients lowers each client’s cost per order.',
    '## How does contract logistics work in practice?');
}

// 03 Why outsourcing has grown
{
  const r = [
    ['Globalisation of production', 'Choose the lowest-cost or most skilled producer worldwide'],
    ['Better transport', 'Goods made far away can be brought to market by container ship or air freight'],
    ['Digital communication', 'Designs, orders and quality reports sent instantly; remote firms managed online'],
    ['Growth of ecommerce', 'Small online sellers use contract logistics instead of their own warehouses'],
    ['Specialisation', 'Focus on design, branding and marketing; buy in the rest from specialists'],
    ['Pressure on costs', 'Avoid the capital cost of factories, machinery, warehouses and vehicles'],
    ['Flexibility', 'Extra output or storage for peaks, without capacity standing idle all year'],
  ];
  const body = tx(150, 128, 'Cause', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) + tx(330, 128, 'Effect on the business', { size: 16, weight: 700, fill: C.muted }) +
    causeRows(r, { y0: 142, h: 70, gap: 12 });
  add('03-why-outsourcing-grew',
    svg(900, 730, 'Why outsourcing has grown', body),
    'Seven causes each linked to an effect: globalisation of production, better transport, digital communication, growth of ecommerce, specialisation, pressure on costs and flexibility, with what each lets a business do.',
    'Explain each cause and the effect it has on the business.',
    '## Why has outsourcing grown?');
}

// 04 Risks and how to reduce them
{
  const r = [
    ['Quality falls below standard', 'Clear specification, sample approval, inspection before shipping'],
    ['Late delivery', 'Contract with delivery dates and penalties; keep some safety stock'],
    ['Designs or recipes copied', 'Confidentiality clauses; share only what is needed'],
    ['Dependence on one contractor', 'Use more than one supplier for important products'],
    ['Reputation damage at the contractor', 'Visit and audit factories; choose contractors with good records'],
    ['Less contact with customers (logistics)', 'Agree service standards for delivery times and packaging'],
  ];
  const body = tx(150, 128, 'Risk', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + tx(330, 128, 'How to reduce it', { size: 16, weight: 700, fill: C.tealDark }) +
    causeRows(r, { y0: 142, h: 70, gap: 12, lfill: '#f3d9c8', ledge: C.rust, rfill: C.tealLight, redge: C.tealDark, rcolor: C.ink, acolor: C.tealDark, marker: 'ahT', lsize: 16 });
  add('04-outsourcing-risks',
    svg(900, 650, 'Outsourcing risks and how to reduce them', body),
    'Six risks, each paired with a way to reduce it: falling quality, late delivery, copied designs, dependence on one contractor, reputation damage at the contractor and less contact with customers.',
    'Every outsourcing risk has a matching safeguard the business can put in the contract or process.',
    '## What are the risks of outsourcing, and how can they be reduced?');
}

// 05 CaseCraft cost comparison
{
  const col = (x, head, fill, edge, items, total, per) => {
    let s = panel(x, 110, 410, 440) + rect(x, 110, 410, 52, { fill, edge: C.panelEdge, rx: 14 }) + tx(x + 205, 144, head, { size: 21, weight: 700, anchor: 'middle' });
    items.forEach(([a, b], i) => {
      const y = 200 + i * 44;
      s += tx(x + 22, y, a, { size: 17 }) + tx(x + 388, y, b, { size: 17, anchor: 'end', weight: 600 });
      s += line(x + 22, y + 14, x + 388, y + 14, { color: C.panelEdge, w: 1.5 });
    });
    s += tx(x + 22, 410, 'Total', { size: 19, weight: 700 }) + tx(x + 388, 410, total, { size: 22, weight: 700, anchor: 'end', fill: edge });
    s += tx(x + 22, 452, 'Cost per cover', { size: 17, weight: 600 });
    s += tx(x + 388, 488, per, { size: 18, weight: 700, anchor: 'end', fill: edge });
    return s;
  };
  let body = col(30, 'In-house', C.cream, C.rust, [['Machinery lease', '6,000'], ['Labour', '9,000'], ['Materials: 5,000 × 1.20', '6,000'], ['Utilities', '1,000']], '$22,000', '22,000 / 5,000 = $4.40');
  body += col(460, 'Outsourced', C.tealLight, C.tealDark, [['Contract: 5,000 × 3.50', '17,500'], ['Transport', '1,500'], ['Inspection', '800'], ['Materials', 'included']], '$19,800', '19,800 / 5,000 = $3.96');
  body += rect(30, 572, 840, 92, { fill: C.mustard, edge: C.ink, sw: 2.5 });
  body += tx(450, 608, 'Saving: 22,000 − 19,800 = $2,200 a year, or $0.44 per cover', { size: 19, weight: 700, anchor: 'middle' });
  body += tx(450, 640, 'Then weigh control of quality and waiting for shipments.', { size: 16, anchor: 'middle' });
  add('05-casecraft-costs',
    svg(900, 690, 'CaseCraft: make 5,000 covers or buy them in?', body),
    'Two cost columns for 5,000 phone covers. In-house: lease 6,000, labour 9,000, materials 6,000 and utilities 1,000 give $22,000, or $4.40 a cover. Outsourced: contract 17,500, transport 1,500 and inspection 800 give $19,800, or $3.96 a cover.',
    'Outsourcing saves $2,200 a year once transport and inspection are included (invented figures).',
    '## Worked example 1: should a brand outsource manufacturing? (invented figures)');
}

// 06 Contract logistics vs own warehouse: break-even
{
  const X = (o) => 140 + o * 0.2, Y = (v) => 560 - v * 0.02;
  let body = `<rect x="${X(0)}" y="${Y(20000)}" width="${X(2315) - X(0)}" height="${Y(0) - Y(20000)}" fill="${C.tealLight}"/>` +
    `<rect x="${X(2315)}" y="${Y(20000)}" width="${X(3500) - X(2315)}" height="${Y(0) - Y(20000)}" fill="${C.cream}"/>`;
  [5000, 10000, 15000, 20000].forEach((v) => { body += line(X(0), Y(v), X(3500), Y(v), { color: C.panelEdge, w: 1.5 }) + tx(X(0) - 12, Y(v) + 6, '$' + v.toLocaleString('en-US'), { size: 15, anchor: 'end', fill: C.muted }); });
  [0, 1000, 2000, 3000].forEach((o) => { body += tx(X(o), Y(0) + 28, o.toLocaleString('en-US'), { size: 15, anchor: 'middle', fill: C.muted }); });
  body += line(X(0), Y(0), X(3500), Y(0), { w: 3 }) + line(X(0), Y(0), X(0), Y(20000), { w: 3 });
  body += tx((X(0) + X(3500)) / 2, Y(0) + 58, 'Orders per month', { size: 17, weight: 700, anchor: 'middle' });
  body += tx(X(1157), Y(20000) + 28, 'Contract logistics cheaper', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += tx(X(2907), Y(20000) + 28, 'Own warehouse cheaper', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  body += line(X(0), Y(12500), X(3500), Y(12500), { color: C.olive, w: 5 });
  body += tx(X(0) + 12, Y(12500) - 12, 'Own warehouse: $12,500 a month', { size: 16, weight: 700, anchor: 'start', fill: C.olive });
  body += line(X(0), Y(0), X(3500), Y(3500 * 5.4), { color: C.tealDark, w: 5 });
  body += tx(X(1700) - 10, Y(1700 * 5.4) - 14, 'Contract: $5.40 per order', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
  const pt = (o, v, lab, dx, anchor) => `<circle cx="${X(o)}" cy="${Y(v)}" r="8" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>` + tx(X(o) + dx, Y(v) + 6, lab, { size: 16, weight: 600, anchor });
  body += pt(1000, 5400, '1,000 × 5.40 = $5,400', 16, 'start');
  body += pt(3000, 16200, '3,000 × 5.40 = $16,200', -16, 'end');
  body += `<circle cx="${X(2315)}" cy="${Y(12500)}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  body += line(X(2315), Y(12500) + 10, X(2315), Y(0), { color: C.ink, w: 2, dash: '6 5' });
  body += tx(X(2315) + 14, Y(12500) + 40, 'equal at 12,500 / 5.40', { size: 15, weight: 600 }) + tx(X(2315) + 14, Y(12500) + 60, '≈ 2,315 orders', { size: 15, weight: 600 });
  body += rect(30, 650, 840, 70, { fill: C.panel, edge: C.panelEdge });
  body += tx(450, 680, 'Own warehouse per order: $12.50 at 1,000 orders, $4.17 at 3,000 orders.', { size: 16, anchor: 'middle' });
  body += tx(450, 705, 'Low or uneven volumes favour contract logistics.', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark });
  add('06-logistics-break-even',
    svg(900, 740, 'Own warehouse or contract logistics?', body),
    'A graph of monthly cost against orders. The own warehouse is a flat $12,500; contract logistics rises at $5.40 per order, costing $5,400 at 1,000 orders and $16,200 at 3,000. The lines cross at about 2,315 orders.',
    'Below about 2,315 orders a month contract logistics is cheaper; above it the own warehouse costs less (invented figures).',
    '## Worked example 2: in-house warehouse or contract logistics? (invented figures)');
}
