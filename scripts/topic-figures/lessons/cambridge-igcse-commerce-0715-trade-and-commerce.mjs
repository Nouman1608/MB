import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-commerce-0715-trade-and-commerce';
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

// 01 Commerce = trade + aids to trade
{
  let body = pill(330, 110, 240, 60, 'Commerce', { fill: C.ink, edge: C.ink, size: 22, color: '#ffffff' });
  body += path('M450,170 L450,192 M220,192 L680,192 M220,192 L220,212 M680,192 L680,212', { w: 3 });
  body += pill(100, 212, 240, 54, 'Trade', { fill: C.teal, size: 20 }) + tx(220, 290, 'buying and selling', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  body += pill(560, 212, 240, 54, 'Aids to trade', { fill: C.mustard, size: 20 }) + tx(680, 290, 'services that make trade possible', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  body += path('M220,300 L220,318 M110,318 L335,318 M110,318 L110,336 M335,318 L335,336', { w: 2.5 });
  body += pill(30, 336, 160, 48, 'Home trade', { fill: C.tealLight, size: 17 }) + pill(240, 336, 190, 48, 'International trade', { fill: C.tealLight, size: 16 });
  const sub = (x, items) => items.map((it, i) => line(x + 14, 384, x + 14, 420 + i * 56, { w: 2 }) + line(x + 14, 420 + i * 56, x + 30, 420 + i * 56, { w: 2 }) + pill(x + 30, 398 + i * 56, 120, 44, it, { fill: C.panel, size: 16 })).join('');
  body += sub(30, ['Retail', 'Wholesale']) + sub(255, ['Exports', 'Imports']);
  ['Communications', 'Transport', 'Warehousing', 'Advertising', 'Banking', 'Insurance'].forEach((a, i) => {
    const x = 520 + (i % 2) * 180, y = 336 + Math.floor(i / 2) * 60;
    body += pill(x, y, 168, 48, a, { fill: C.cream, size: 16 });
  });
  body += line(680, 300, 680, 332, { w: 2.5 });
  body += rect(30, 540, 840, 90, { fill: C.cream, edge: C.olive });
  body += tx(450, 576, '“Commerce is buying and selling” defines trade, not commerce.', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  body += tx(450, 606, 'A definition of commerce needs both halves: trade and the aids to trade.', { size: 17, anchor: 'middle' });
  add('01-commerce-tree',
    svg(900, 655, 'Commerce = trade + aids to trade', body),
    'A tree. Commerce splits into trade and aids to trade. Trade divides into home trade (retail and wholesale) and international trade (exports and imports). The six aids to trade are communications, transport, warehousing, advertising, banking and insurance.',
    'Trade is only one part of commerce; commerce adds the services that make trade possible.',
    '## How is trade different from commerce? (1.1.1)');
}

// 02 Home and international trade
{
  let body = rect(30, 110, 500, 270, { fill: C.tealLight, edge: C.tealDark, dash: '10 7' }) + tx(50, 140, 'Country A', { size: 17, weight: 700, fill: C.tealDark });
  body += pill(50, 180, 130, 56, 'Producer', { fill: C.panel, size: 17 }) + pill(215, 180, 130, 56, 'Wholesaler', { fill: C.cream, size: 17 }) + pill(380, 180, 130, 56, 'Retailer', { fill: C.cream, size: 17 });
  body += arrow(184, 208, 210, 208, { w: 3 }) + arrow(349, 208, 375, 208, { w: 3 });
  body += tx(197 + 66, 262, 'Wholesale trade:', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + tx(197 + 66, 282, 'large quantities, to', { size: 15, anchor: 'middle' }) + tx(197 + 66, 300, 'retailers and businesses', { size: 15, anchor: 'middle' });
  body += pill(380, 310, 130, 50, 'Consumer', { fill: C.panel, size: 17 }) + arrow(445, 240, 445, 304, { w: 3 });
  body += tx(370, 338, 'Retail trade:', { size: 15, weight: 700, anchor: 'end', fill: C.olive }) + tx(370, 357, 'small quantities', { size: 15, anchor: 'end' });
  body += rect(620, 110, 250, 270, { fill: C.cream, edge: C.olive, dash: '10 7' }) + tx(640, 140, 'Country B', { size: 17, weight: 700, fill: C.olive });
  body += pill(660, 200, 170, 56, 'Buyer abroad', { fill: C.panel, size: 17 });
  body += pill(660, 300, 170, 56, 'Seller abroad', { fill: C.panel, size: 17 });
  body += rect(30, 405, 840, 200, { fill: C.panel, edge: C.panelEdge });
  body += tx(54, 440, 'International trade, seen from Country A', { size: 19, weight: 700 });
  body += pill(54, 465, 190, 50, 'Export', { fill: C.tealLight, edge: C.tealDark, size: 18, color: C.tealDark });
  body += tx(264, 486, 'goods or services sold to a buyer abroad', { size: 16 }) + tx(264, 508, 'money flows INTO Country A', { size: 16, weight: 700, fill: C.tealDark });
  body += pill(54, 535, 190, 50, 'Import', { fill: '#f3d9c8', edge: C.rust, size: 18, color: C.rust });
  body += tx(264, 556, 'goods or services bought from abroad', { size: 16 }) + tx(264, 578, 'money flows OUT of Country A', { size: 16, weight: 700, fill: C.rust });
  body += arrow(516, 228, 652, 228, { color: C.tealDark, marker: 'ahT', w: 4 }) + tx(584, 218, 'export', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += arrow(652, 328, 520, 328, { color: C.rust, marker: 'ahR', w: 4 }) + tx(584, 318, 'import', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  add('02-home-and-international-trade',
    svg(900, 630, 'Home trade and international trade', body),
    'Inside Country A, a producer sells in bulk to a wholesaler (wholesale trade) and a retailer sells small quantities to consumers (retail trade). Goods sold to a buyer in Country B are exports, bringing money in; goods bought from Country B are imports, sending money out.',
    'Ask where the buyer and seller are: same country is home trade, different countries is international trade.',
    '## What are home trade and international trade? (1.1.1)');
}

// 03 Aids to trade remove barriers
{
  const a = [
    ['Communications', 'Lack of information', 'quotation emailed to an overseas buyer'],
    ['Transport', 'Distance', 'container ship carries furniture'],
    ['Warehousing', 'Time', 'winter coats held until the cold season'],
    ['Advertising', 'Lack of knowledge', 'social media campaign for a new drink'],
    ['Banking', 'Payment and finance', 'bank transfer pays a supplier'],
    ['Insurance', 'Risk', 'cargo insurance covers goods at sea'],
  ];
  let body = pill(30, 280, 130, 90, 'Producer', { fill: C.cream, size: 18 }) + pill(740, 280, 130, 90, 'Consumer', { fill: C.cream, size: 18 });
  body += tx(450, 128, 'Barrier', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + tx(450, 148, 'removed by the aid to trade', { size: 15, anchor: 'middle', fill: C.muted });
  a.forEach(([aid, bar, ex], i) => {
    const y = 162 + i * 76;
    body += rect(180, y, 540, 66, { fill: i % 2 ? C.tealLight : C.panel, edge: C.panelEdge, rx: 10 });
    body += tx(200, y + 28, bar, { size: 17, weight: 700, fill: C.rust });
    body += tx(200, y + 52, 'e.g. ' + ex, { size: 15, fill: C.muted, italic: true });
    body += pill(530, y + 10, 175, 46, aid, { fill: C.teal, size: 16 });
  });
  body += arrow(164, 325, 176, 325, { w: 3 }) + arrow(724, 325, 736, 325, { w: 3 });
  add('03-aids-remove-barriers',
    svg(900, 635, 'Each aid to trade removes a barrier', body),
    'Between producer and consumer stand six barriers, each removed by one aid to trade: lack of information by communications, distance by transport, time by warehousing, lack of knowledge by advertising, payment and finance by banking, and risk by insurance.',
    'Link each aid to the barrier it removes to turn a list into an explanation.',
    '## What are aids to trade? (1.1.2)');
}

// 04 Logistics
{
  const st = ['Supplier', 'Producer', 'Warehouse', 'Retailer', 'Consumer'];
  let body = panel(30, 110, 840, 175) + tx(54, 144, 'Logistics manages the flow and storage of goods', { size: 19, weight: 700 });
  st.forEach((s, i) => {
    const x = 54 + i * 165;
    body += pill(x, 170, 135, 54, s, { fill: s === 'Warehouse' ? C.cream : C.panel, size: 17 });
    if (i < 4) body += arrow(x + 139, 197, x + 161, 197, { w: 3, color: C.tealDark, marker: 'ahT' });
  });
  body += tx(450, 260, 'teal arrows = transport', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  body += panel(30, 305, 840, 230) + tx(54, 340, 'A freight forwarder', { size: 19, weight: 700 });
  ['Customer 1', 'Customer 2', 'Customer 3'].forEach((c, i) => {
    body += pill(54, 362 + i * 54, 140, 44, c, { fill: C.panel, size: 15 }) + `<rect x="204" y="${372 + i * 54}" width="26" height="24" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>`;
    body += arrow(236, 384 + i * 54, 300, 440, { w: 2.5 });
  });
  body += pill(305, 400, 200, 80, ['Combines small', 'loads into one'], { fill: C.cream, size: 17 });
  body += arrow(510, 440, 560, 440, { w: 3.5 });
  body += pill(565, 400, 280, 80, ['One shipment: space', 'booked, documents ready'], { fill: C.tealLight, size: 16 });
  body += rect(30, 555, 840, 70, { fill: C.cream, edge: C.olive });
  body += tx(450, 597, 'Right goods · right place · right time · right quantity · lowest reasonable cost', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  add('04-logistics',
    svg(900, 650, 'Logistics: transport, forwarding, warehousing', body),
    'Top: goods move by transport from supplier to producer, warehouse, retailer and consumer. Middle: a freight forwarder combines small loads from several customers into one shipment, booking space and helping prepare documents. Bottom: the aim of logistics.',
    'Logistics manages transport, freight forwarding and warehousing as one flow.',
    '## What is logistics? (1.1.2)');
}

// 05 Four types of commerce by channel
{
  let body = rect(30, 110, 250, 330, { fill: C.cream, edge: C.olive }) + pill(70, 330, 170, 70, ['shop, market', 'or salon'], { fill: C.panel, edge: C.olive, size: 16, weight: 600 }) + tx(155, 148, 'Traditional', { size: 21, weight: 700, anchor: 'middle', fill: C.olive });
  body += tx(155, 178, 'at a physical location', { size: 16, anchor: 'middle' });
  body += para(155, 228, 'e.g. vegetables at a street market; a haircut at a salon', 210, { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  body += rect(300, 110, 570, 330, { fill: C.tealLight, edge: C.tealDark }) + tx(585, 148, 'Ecommerce', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += tx(585, 178, 'via the internet or websites', { size: 16, anchor: 'middle' });
  body += para(585, 212, 'e.g. ordering a printer from a retailer’s website on a laptop', 500, { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  body += rect(320, 250, 260, 170, { fill: C.panel, edge: C.ink }) + tx(450, 284, 'Mcommerce', { size: 19, weight: 700, anchor: 'middle' }) + tx(450, 310, 'via a mobile device', { size: 16, anchor: 'middle' });
  body += para(450, 350, 'e.g. buying a bus ticket in an app', 220, { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  body += rect(590, 250, 260, 170, { fill: C.panel, edge: C.ink }) + tx(720, 284, 'Scommerce', { size: 19, weight: 700, anchor: 'middle' }) + tx(720, 310, 'via social media channels', { size: 16, anchor: 'middle' });
  body += para(720, 350, 'e.g. a handmade bag from a seller’s social media shop', 220, { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  body += panel(30, 460, 840, 120) + tx(54, 494, 'Judge by the channel', { size: 18, weight: 700 });
  body += para(54, 524, 'Mcommerce and scommerce are both forms of ecommerce. A purchase through a social media shop is scommerce even when it is made on a phone.', 790, { size: 16 });
  add('05-four-types-of-commerce',
    svg(900, 605, 'Four types of commerce', body),
    'Traditional commerce happens at a physical location. Ecommerce happens via the internet and contains two forms: mcommerce via a mobile device and scommerce via social media channels, each with an example.',
    'The channel decides the type: a place, a website, a mobile device or social media.',
    '## What are the four types of commerce? (1.1.3)');
}

// 06 Interdependence: four links
{
  const r = [
    ['Production', 'Trade', 'Producers make goods to sell; without buyers there is no reason to make more than a household needs', C.teal, C.cream],
    ['Trade', 'Production', 'There is nothing to buy or sell unless something has been produced', C.cream, C.teal],
    ['Trade', 'Commerce', 'Buyers and sellers are far apart, unknown and exposed to risk: trade needs transport, banking, insurance and the rest', C.cream, C.mustard],
    ['Commerce', 'Production and trade', 'Banks, insurers, carriers and advertisers earn their income from goods produced and traded', C.mustard, C.teal],
  ];
  let body = '';
  r.forEach(([a, b, why, fa, fb], i) => {
    const y = 110 + i * 130;
    body += panel(30, y, 840, 120);
    body += pill(50, y + 16, 170, 46, a, { fill: fa, size: 18 });
    body += arrow(226, y + 39, 300, y + 39, { w: 3 }) + tx(263, y + 30, 'needs', { size: 14, anchor: 'middle', fill: C.muted });
    body += pill(306, y + 16, 230, 46, b, { fill: fb, size: 18 });
    body += para(52, y + 88, why, 790, { size: 16, fill: C.muted });
  });
  body += rect(30, 640, 840, 60, { fill: C.cream, edge: C.olive }) + tx(450, 677, 'A strong answer shows the dependence running in more than one direction.', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  add('06-interdependence',
    svg(900, 725, 'Production, trade and commerce need each other', body),
    'Four links: production needs trade to sell its goods; trade needs production for something to sell; trade needs commerce because buyers and sellers are far apart and exposed to risk; and commerce needs production and trade for its income.',
    'Show the dependence running in more than one direction.',
    '## How are production, trade and commerce interdependent? (1.1.4)');
}

// 07 Classifying transactions
{
  const r = [
    ['Supermarket sells bread to a shopper at the till', 'Home trade, retail', 'Traditional'],
    ['Furniture maker sells 200 chairs to a hotel chain abroad through its website', 'International, export', 'Ecommerce'],
    ['Shop owner buys 50 cartons of juice from a local wholesaler’s app', 'Home trade, wholesale', 'Mcommerce'],
    ['Shopper buys a dress from an overseas designer’s social media shop', 'International, import', 'Scommerce'],
  ];
  let body = tx(48, 130, 'Transaction (for Country X)', { size: 16, weight: 700, fill: C.muted }) + tx(500, 130, 'Trade', { size: 16, weight: 700, fill: C.muted }) + tx(712, 130, 'Commerce', { size: 16, weight: 700, fill: C.muted });
  r.forEach(([t1, c1, c2], i) => {
    const y = 145 + i * 104;
    body += panel(30, y, 450, 92) + para(48, y + (nl(t1, 410, 17) > 1 ? 38 : 52), t1, 410, { size: 17 });
    body += pill(492, y + 14, 200, 64, wrap(c1, 180, 16), { fill: c1.startsWith('Home') ? C.cream : C.tealLight, size: 16 });
    body += pill(704, y + 14, 166, 64, c2, { fill: C.panel, size: 17 });
  });
  add('07-classifying-transactions',
    svg(900, 570, 'Classifying four transactions', body),
    'Four transactions for Country X: a supermarket selling bread is home retail trade by traditional commerce; chairs sold abroad via a website are an export by ecommerce; juice bought from a wholesaler’s app is home wholesale trade by mcommerce; a dress bought from an overseas social media shop is an import by scommerce.',
    'Classify the trade by where buyer and seller are, and the commerce by the channel used.',
    '## Worked example: classifying transactions');
}
