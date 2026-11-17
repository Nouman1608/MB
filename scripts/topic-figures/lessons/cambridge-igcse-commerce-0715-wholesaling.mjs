import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-commerce-0715-wholesaling';
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

// 01 Chain of distribution
{
  const st = [['Manufacturer', C.panel], ['Wholesaler', C.mustard], ['Retailer', C.cream], ['Consumer', C.panel]];
  let body = '';
  st.forEach(([s, f], i) => {
    const x = 30 + i * 220;
    body += pill(x, 150, 180, 70, s, { fill: f, size: 20 });
    if (i < 3) body += arrow(x + 186, 185, x + 214, 185, { w: 3.5 });
  });
  body += tx(450, 128, 'The traditional chain of distribution', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  body += tx(340, 250, 'buys lorry loads', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 }) + tx(340, 270, 'sells cases or cartons', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  body += panel(110, 310, 680, 200) + tx(450, 345, 'The wholesaler’s customers', { size: 18, weight: 700, anchor: 'middle' });
  body += pill(140, 370, 620, 50, 'Mostly retailers', { fill: C.cream, size: 18 });
  ['Hotels', 'Restaurants', 'Schools', 'Other businesses'].forEach((c, i) => { body += pill(140 + i * 158, 440, 146, 46, c, { fill: C.panel, size: 15 }); });
  body += path('M340,284 L340,306', { w: 3 });
  body += tx(450, 545, 'Customers other than retailers buy for their own use.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('01-chain-of-distribution',
    svg(900, 570, 'Where the wholesaler sits', body),
    'The traditional chain of distribution runs manufacturer, wholesaler, retailer, consumer. The wholesaler buys lorry loads and sells cases or cartons, mostly to retailers but also to hotels, restaurants, schools and other businesses.',
    'The wholesaler is the link between manufacturers and retailers in home trade.',
    '## Where does the wholesaler sit in the chain?');
}

// 02 Nine functions
{
  const f = [
    ['Breaking bulk', 'lorry loads into cases or cartons'],
    ['Storage', 'holds stock until retailers need it'],
    ['Bearing risk', 'owns the goods: price falls, damage, theft, fashion'],
    ['Assortment', 'many manufacturers’ goods in one place'],
    ['Transport and delivery', 'saves retailers collection trips'],
    ['Credit', 'pay later, often 30 days'],
    ['Advice and information', 'between manufacturers and retailers'],
    ['Packing and labelling', 'some grade, pack or label goods'],
    ['Price stability', 'stores when supply is high, releases when low'],
  ];
  let body = '';
  f.forEach(([n, d], i) => {
    const x = 30 + (i % 3) * 285, y = 110 + Math.floor(i / 3) * 150;
    body += panel(x, y, 270, 135, i === 0 ? C.cream : C.panel, i === 0 ? C.olive : C.panelEdge) + badge(x + 32, y + 36, 17, String(i + 1), C.cream);
    body += tx(x + 60, y + 43, n, { size: 17, weight: 700 });
    body += para(x + 20, y + 80, d, 235, { size: 16, fill: C.muted });
  });
  add('02-wholesaler-functions',
    svg(900, 570, 'Nine things a wholesaler does', body),
    'Nine tiles: breaking bulk, storage, bearing risk, assortment, transport and delivery, credit, advice and information, packing and labelling, and price stability, each with a one-line description.',
    'Breaking bulk is the core function; the other eight add services for both sides.',
    '## What functions and services does a wholesaler provide?');
}

// 03 Benefits to manufacturer and retailer
{
  let body = pill(345, 260, 210, 80, 'Wholesaler', { fill: C.mustard, size: 21 });
  const side = (x, head, fill, edge, items) => {
    let s = rect(x, 110, 290, 470, { fill, edge }) + tx(x + 145, 146, head, { size: 20, weight: 700, anchor: 'middle', fill: edge });
    items.forEach(([n, d], i) => {
      const y = 168 + i * 80;
      s += rect(x + 14, y, 262, 70, { fill: C.panel, edge: C.panelEdge, rx: 10 }) + tx(x + 28, y + 28, n, { size: 16, weight: 700 }) + para(x + 28, y + 51, d, 235, { size: 15, fill: C.muted });
    });
    return s;
  };
  body += side(30, 'For the manufacturer', C.tealLight, C.tealDark, [['Fewer, larger orders', 'fewer deliveries and invoices'], ['Storage space saved', 'and paid sooner'], ['Continuous production', 'even in quiet seasons'], ['Risk transferred', 'of goods not selling'], ['Market information', 'what retailers reorder']]);
  body += side(580, 'For the retailer', C.cream, C.olive, [['Small quantities', 'less money tied up in stock'], ['Wide choice in one place', 'saves time'], ['Less storage needed', 'restock frequently'], ['Credit', 'helps cash flow'], ['Delivery and advice', 'new and popular lines']]);
  body += arrow(340, 300, 326, 300, { w: 3 }) + arrow(560, 300, 574, 300, { w: 3 });
  body += tx(450, 615, 'Answer for the party the question names: manufacturer or retailer.', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  add('03-benefits-both-sides',
    svg(900, 640, 'What the wholesaler does for each side', body),
    'The wholesaler in the centre helps two sides. The manufacturer gets fewer, larger orders, saved storage, continuous production, transferred risk and market information. The retailer gets small quantities, wide choice, less storage, credit, and delivery with advice.',
    'The same wholesaler gives different benefits to the manufacturer and the retailer.',
    '## Why is the wholesaler important to the retailer?');
}

// 04 Bypassing the wholesaler
{
  const r = [
    ['Large retailers', 'Supermarkets and multiple chains buy direct and run central warehouses'],
    ['Manufacturers', 'Sell direct through their own shops or websites'],
    ['Ecommerce', 'Small producers reach consumers without intermediaries'],
    ['Perishable or made-to-order goods', 'Fresh bread or custom furniture sold direct'],
  ];
  let body = '';
  r.forEach(([h, d], i) => {
    const y = 110 + i * 92;
    body += pill(30, y, 260, 78, wrap(h, 230, 17), { fill: C.cream, size: 17, rx: 12 });
    body += arrow(296, y + 39, 336, y + 39, { w: 3 });
    body += panel(345, y, 525, 78) + para(365, y + (nl(d, 480, 17) > 1 ? 33 : 46), d, 480, { size: 17 });
  });
  body += rect(30, 490, 840, 150, { fill: C.tealLight, edge: C.tealDark });
  body += tx(450, 526, 'The functions do not disappear', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  ['Break bulk', 'Store', 'Deliver'].forEach((f, i) => { body += pill(165 + i * 200, 548, 170, 46, f, { fill: C.panel, size: 17 }); });
  body += tx(450, 622, 'The large retailer or manufacturer takes on these costs itself.', { size: 16, anchor: 'middle' });
  add('04-bypassing-wholesaler',
    svg(900, 665, 'Who bypasses the wholesaler?', body),
    'Four ways the wholesaler is bypassed: large retailers buying direct, manufacturers selling direct, ecommerce, and perishable or made-to-order goods. Below, breaking bulk, storing and delivering still have to be done by someone.',
    'Cutting out the wholesaler moves its functions and costs to someone else.',
    '## Why do some businesses bypass the wholesaler?');
}

// 05 Café: delivered vs cash and carry
{
  const col = (x, head, fill, edge, rows, total, when) => {
    let s = panel(x, 110, 410, 300) + rect(x, 110, 410, 52, { fill, edge: C.panelEdge, rx: 14 }) + tx(x + 205, 144, head, { size: 21, weight: 700, anchor: 'middle' });
    rows.forEach(([a, b], i) => { const y = 202 + i * 40; s += tx(x + 22, y, a, { size: 17 }) + tx(x + 388, y, b, { size: 17, anchor: 'end', weight: 600 }); });
    s += line(x + 22, 290, x + 388, 290, { color: C.panelEdge, w: 1.5 });
    s += tx(x + 22, 324, 'Total', { size: 19, weight: 700 }) + tx(x + 388, 324, total, { size: 22, weight: 700, anchor: 'end', fill: edge });
    s += pill(x + 22, 346, 366, 46, when, { fill, size: 17 });
    return s;
  };
  let body = col(30, 'Delivered wholesaler', C.tealLight, C.tealDark, [['40 cases × $18.00', '720'], ['Delivery', 'included']], '$720', 'Pay in 30 days (credit)');
  body += col(460, 'Cash and carry', C.cream, C.olive, [['40 cases × $16.50', '660'], ['Fuel and time to collect', '+ 35']], '$695', 'Pay today');
  body += rect(30, 430, 840, 120, { fill: C.mustard, edge: C.ink });
  body += tx(450, 468, 'Cash and carry saves 720 − 695 = $25', { size: 21, weight: 700, anchor: 'middle' });
  body += tx(450, 500, 'but she pays a month earlier.', { size: 17, anchor: 'middle' });
  body += tx(450, 528, 'If her cash is short, the credit may be worth more than the saving.', { size: 17, anchor: 'middle', weight: 600 });
  add('05-cafe-cash-and-carry',
    svg(900, 575, 'A café’s soft drinks: delivered or collected?', body),
    'Two options for 40 cases. Delivered: 40 × $18.00 = $720, paid in 30 days. Cash and carry: 40 × $16.50 = $660 plus $35 to collect = $695, paid today. Cash and carry saves $25 but loses the credit.',
    'Cash and carry is $25 cheaper, but the delivered wholesaler gives a month to pay (invented figures).',
    '## Worked example: delivered wholesale or cash and carry? (invented figures)');
}
