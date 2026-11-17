import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-commerce-7100-trade-and-commerce';
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
  body += sub(30, ['Wholesale', 'Retail']) + sub(255, ['Exports', 'Imports']);
  ['Communications', 'Transport', 'Warehousing', 'Advertising', 'Banking', 'Insurance'].forEach((a, i) => {
    const x = 520 + (i % 2) * 180, y = 336 + Math.floor(i / 2) * 60;
    body += pill(x, y, 168, 48, a, { fill: C.cream, size: 16 });
  });
  body += line(680, 300, 680, 332, { w: 2.5 });
  body += rect(30, 540, 840, 100, { fill: C.cream, edge: C.olive });
  body += tx(450, 574, 'All trade is commerce, but not all commerce is trade.', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  body += tx(450, 604, 'A bank lending a shopkeeper money for stock is commerce,', { size: 16, anchor: 'middle' });
  body += tx(450, 626, 'but the bank is not buying or selling the rice.', { size: 16, anchor: 'middle' });
  add('01-commerce-tree',
    svg(900, 665, 'Commerce = trade + aids to trade', body),
    'A tree. Commerce splits into trade and aids to trade. Trade divides into home trade (wholesale and retail) and international trade (exports and imports). The six aids to trade are communications, transport, warehousing, advertising, banking and insurance.',
    'Commerce is wider than trade: it adds the services that make trade possible.',
    '## Trade and commerce: why they are not the same word');
}

// 02 Exports and imports: follow the money
{
  let body = rect(30, 110, 360, 250, { fill: C.tealLight, edge: C.tealDark, dash: '10 7' }) + tx(50, 142, 'Pakistan', { size: 18, weight: 700, fill: C.tealDark });
  body += pill(80, 190, 260, 64, ['Textile firm', 'sells towels'], { fill: C.panel, size: 17 });
  body += rect(510, 110, 360, 250, { fill: C.cream, edge: C.olive, dash: '10 7' }) + tx(530, 142, 'Germany', { size: 18, weight: 700, fill: C.olive });
  body += pill(560, 190, 260, 64, ['Buyer', 'pays for towels'], { fill: C.panel, size: 17 });
  body += arrow(346, 206, 554, 206, { w: 4 }) + tx(450, 196, 'towels', { size: 16, weight: 600, anchor: 'middle' });
  body += arrow(554, 240, 346, 240, { color: C.tealDark, marker: 'ahT', w: 4 }) + tx(450, 266, 'money', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  body += pill(80, 290, 260, 46, 'EXPORT for Pakistan', { fill: C.teal, edge: C.tealDark, size: 16 });
  body += pill(560, 290, 260, 46, 'IMPORT for Germany', { fill: '#f3d9c8', edge: C.rust, size: 16 });
  body += panel(30, 385, 840, 175) + tx(54, 420, 'Rule of thumb', { size: 19, weight: 700 });
  body += tx(54, 452, 'Export: money flows INTO the exporting country (it earns foreign currency).', { size: 16, fill: C.tealDark, weight: 600 });
  body += tx(54, 480, 'Import: money flows OUT of the importing country.', { size: 16, fill: C.rust, weight: 600 });
  body += tx(54, 516, 'Services count too: a foreign tourist paying for a hotel stay is buying', { size: 16 });
  body += tx(54, 540, 'an exported service, even though nothing is shipped.', { size: 16 });
  add('02-exports-imports',
    svg(900, 585, 'Exports and imports: follow the money', body),
    'A textile firm in Pakistan sells towels to a buyer in Germany. Towels go one way and money comes back, so the sale is an export for Pakistan and an import for Germany. A foreign tourist paying for a hotel stay is buying an exported service.',
    'One transaction is an export for the seller’s country and an import for the buyer’s.',
    '## Home trade and international trade');
}

// 03 Aids remove barriers
{
  const a = [
    ['Communications', 'Buyer and seller cannot make contact', 'retailer emails an order to a supplier'],
    ['Transport', 'Made in one place, wanted in another', 'lorry carries cement to building sites'],
    ['Warehousing', 'Produced at one time, wanted at another', 'rice released through the year'],
    ['Advertising', 'Customers do not know it exists', 'new juice brand’s social media adverts'],
    ['Banking', 'No safe way to pay, or no finance', 'loan pays for new stock'],
    ['Insurance', 'Fear of loss from fire, theft or accident', 'shop insures its stock'],
  ];
  let body = pill(30, 280, 130, 90, 'Producer', { fill: C.cream, size: 18 }) + pill(740, 280, 130, 90, 'Consumer', { fill: C.cream, size: 18 });
  body += tx(450, 128, 'Barrier', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + tx(450, 148, 'removed by the aid to trade', { size: 15, anchor: 'middle', fill: C.muted });
  a.forEach(([aid, bar, ex], i) => {
    const y = 162 + i * 76;
    body += rect(180, y, 540, 66, { fill: i % 2 ? C.tealLight : C.panel, edge: C.panelEdge, rx: 10 });
    body += tx(200, y + 28, bar, { size: 16, weight: 700, fill: C.rust });
    body += tx(200, y + 52, 'e.g. ' + ex, { size: 15, fill: C.muted, italic: true });
    body += pill(555, y + 10, 152, 46, aid, { fill: C.teal, size: 15 });
  });
  body += arrow(164, 325, 176, 325, { w: 3 }) + arrow(724, 325, 736, 325, { w: 3 });
  add('03-aids-remove-barriers',
    svg(900, 635, 'Each aid to trade removes a barrier', body),
    'Between producer and consumer stand six barriers, each removed by one aid to trade: no contact by communications, distance by transport, timing by warehousing, lack of awareness by advertising, payment and finance by banking, and fear of loss by insurance.',
    'Link each aid to the barrier it removes to turn a list into an explanation.',
    '## Aids to trade');
}

// 04 Logistics: three elements and the freight forwarder
{
  let body = '';
  const el = [['1', 'Transport', 'Moves goods between stages by road, rail, sea, air or pipeline', C.tealLight], ['2', 'Freight forwarders', 'Organise the movement of goods for a business, especially across borders', C.cream], ['3', 'Warehousing', 'Stores goods safely; often sorts, packs and dispatches them', C.tealLight]];
  el.forEach(([n, h, d, fill], i) => {
    const x = 30 + i * 285;
    body += rect(x, 110, 270, 180, { fill, edge: C.panelEdge }) + badge(x + 32, 146, 18, n, C.mustard) + tx(x + 60, 153, h, { size: 19, weight: 700 });
    body += para(x + 20, 196, d, 235, { size: 16 });
  });
  body += panel(30, 310, 840, 220) + tx(54, 346, 'What a freight forwarder does for an exporter', { size: 19, weight: 700 });
  const t = ['Books space with carriers', 'Combines small loads', 'Prepares shipping documents', 'Arranges customs clearance'];
  t.forEach((s, i) => { body += pill(54 + i * 200, 370, 186, 66, wrap(s, 170, 16), { fill: C.cream, size: 16 }); });
  body += para(450, 470, 'It arranges carriage and documents, often using other firms’ vehicles, ships and aircraft: it is not just a transport company.', 760, { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  body += rect(30, 550, 840, 70, { fill: C.tealLight, edge: C.tealDark });
  body += tx(450, 592, 'Logistics is the joined-up management of these, not a seventh aid to trade.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('04-logistics-elements',
    svg(900, 645, 'Logistics: three elements', body),
    'The three elements of logistics: transport, freight forwarders and warehousing. A freight forwarder books space with carriers, combines small loads, prepares shipping documents and arranges customs clearance, often using other firms’ vehicles.',
    'Logistics manages transport, freight forwarding and warehousing together.',
    '## Logistics and its three elements');
}

// 05 Choosing the most specific type of commerce
{
  const q = [
    ['At a physical location?', 'Traditional commerce', 'shoes from a market stall', C.cream],
    ['Bought through social media posts or messages?', 'Scommerce', 'cake orders via a social media page', C.tealLight],
    ['Through a mobile device, e.g. the store’s own app?', 'Mcommerce', 'cinema ticket in a smartphone app', C.tealLight],
    ['Only “placed online”?', 'Ecommerce', 'laptop from a retailer’s website', C.teal],
  ];
  let body = tx(250, 128, 'What does the evidence say?', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + tx(700, 128, 'Use this term', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  q.forEach(([qq, ans, ex, fill], i) => {
    const y = 145 + i * 110;
    body += panel(30, y, 440, 94) + para(52, y + (nl(qq, 400, 18) > 1 ? 40 : 54), qq, 400, { size: 18, weight: 600 });
    body += arrow(478, y + 47, 528, y + 47, { w: 3.5 });
    body += rect(538, y, 332, 94, { fill, edge: C.ink }) + tx(704, y + 40, ans, { size: 20, weight: 700, anchor: 'middle' }) + tx(704, y + 68, 'e.g. ' + ex, { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  });
  body += rect(30, 595, 840, 70, { fill: C.cream, edge: C.olive });
  body += tx(450, 637, 'Mcommerce and scommerce are forms of ecommerce: choose the most specific term.', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  add('05-types-of-commerce',
    svg(900, 690, 'Which type of commerce?', body),
    'Four checks on the evidence: a physical location means traditional commerce; buying through social media posts or messages means scommerce; using a mobile device such as the store’s own app means mcommerce; only “placed online” means ecommerce. Each has an example.',
    'Choose the most specific term that the evidence in the case supports.',
    '## The four types of commerce');
}

// 06 Mango farm interdependence
{
  const st = [
    ['Production', 'The farm grows mangoes (primary production)', C.teal],
    ['Trade', 'It cannot use thousands of mangoes, so sells to a wholesaler, then retailers and consumers', C.cream],
    ['Aids to trade', 'Refrigerated transport before the fruit spoils; insurance against loss in transit', C.mustard],
    ['Back to production', 'Wholesalers and retailers depend on the farm: if the harvest fails, trade and services fall too', C.tealLight],
  ];
  let body = '';
  st.forEach(([h, d, fill], i) => {
    const y = 110 + i * 120;
    body += rect(30, y, 220, 100, { fill, edge: C.ink }) + tx(140, y + 57, h, { size: 18, weight: 700, anchor: 'middle' });
    body += panel(270, y, 520, 100) + para(290, y + (nl(d, 480, 17) > 1 ? 42 : 56), d, 480, { size: 17 });
    body += pill(805, y + 30, 65, 40, '(1)', { fill: C.panel, size: 16 });
    if (i < 3) body += arrow(140, y + 102, 140, y + 116, { w: 3 });
  });
  body += parrow('M30,470 C0,470 0,160 26,160', { w: 3, dash: '7 5' });
  add('06-mango-farm-interdependence',
    svg(900, 600, 'A mango farm: production, trade and commerce', body),
    'Four linked steps, one mark each: the farm produces mangoes; it needs trade to sell them through wholesalers and retailers; trade needs aids such as refrigerated transport and insurance; and traders depend on the farm, so a failed harvest hits trade and commercial services.',
    'Each sentence makes a separate link, applied to the mango farm.',
    '## Worked example: an annotated model answer');
}
