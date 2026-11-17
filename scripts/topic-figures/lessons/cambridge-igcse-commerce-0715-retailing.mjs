import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-commerce-0715-retailing';
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

// 01 Small-scale vs large-scale
{
  const grp = (x, w, head, fill, edge, items) => {
    let s = rect(x, 110, w, 345, { fill, edge }) + tx(x + w / 2, 146, head, { size: 21, weight: 700, anchor: 'middle', fill: edge });
    items.forEach(([n, f], i) => {
      const y = 170 + i * 76;
      s += rect(x + 16, y, w - 32, 64, { fill: C.panel, edge: C.panelEdge, rx: 10 }) + tx(x + 32, y + 27, n, { size: 17, weight: 700 }) + tx(x + 32, y + 51, f, { size: 15, fill: C.muted });
    });
    return s;
  };
  let body = grp(30, 330, 'Small-scale', C.cream, C.olive, [['Itinerant retailer', 'travels to customers'], ['Independent retailer', 'one shop, owner-run'], ['Street market', 'many stalls, set days'], ['Speciality shop (many)', 'deep range of one product']]);
  body += grp(540, 330, 'Large-scale', C.tealLight, C.tealDark, [['Multiple chain store', 'many branches, one name'], ['Supermarket', 'self-service food store'], ['Hypermarket', 'out of town, food and non-food'], ['Department store', 'many departments, city centre']]);
  body += rect(375, 182, 150, 200, { fill: C.panel, edge: C.ink, dash: '8 6' }) + tx(450, 214, 'Either', { size: 19, weight: 700, anchor: 'middle' });
  body += pill(390, 242, 120, 54, ['Vending', 'machine'], { fill: C.panel, size: 15 }) + pill(390, 310, 120, 54, ['Online', 'retailer'], { fill: C.panel, size: 15 });
  add('01-small-and-large-scale',
    svg(900, 480, 'Small-scale and large-scale retailers', body),
    'Retailers sorted by scale. Small-scale: itinerant retailers, independent retailers, street markets and many speciality shops. Large-scale: multiple chain stores, supermarkets, hypermarkets and department stores. Vending machines and online retailers can be either.',
    'Most retailer types sit clearly on one side; vending machines and online retailers can be either.',
    '## Which types of retailer does the syllabus name? (2.3.1)');
}

// 02 Telling the large-scale four apart
{
  const cols = [
    ['Multiple chain store', ['Many branches under one name', 'Central buying, similar layout'], 'Bulk buying lowers costs', 'Less flexible for local tastes'],
    ['Supermarket', ['Large self-service store', 'Mainly food and household goods'], 'Wide range, low prices', 'Little personal service'],
    ['Hypermarket', ['Very large, often out of town', 'Food and non-food; large car parks'], 'Huge range; free parking', 'Hard to reach without a car'],
    ['Department store', ['Many departments under one roof', 'Usually in a city centre'], 'High service; many goods in one visit', 'High costs and prices'],
  ];
  let body = '';
  cols.forEach(([n, f, a, d], i) => {
    const x = 30 + i * 213;
    body += panel(x, 110, 200, 400) + rect(x, 110, 200, 74, { fill: i % 2 ? C.cream : C.tealLight, edge: C.panelEdge, rx: 14 });
    body += para(x + 100, nl(n, 180, 19) > 1 ? 141 : 154, n, 180, { size: 19, weight: 700, anchor: 'middle' });
    let y = 214;
    f.forEach((ff) => { body += para(x + 16, y, ff, 170, { size: 16 }); y += nl(ff, 170, 16) * LH(16) + 10; });
    body += line(x + 16, 330, x + 184, 330, { color: C.panelEdge, w: 2 });
    body += tick(x + 28, 362, 11) + para(x + 48, 368, a, 140, { size: 15 });
    body += cross(x + 28, 440, 11) + para(x + 48, 446, d, 140, { size: 15, fill: C.muted });
  });
  body += tx(450, 548, 'A hypermarket is not just “a big supermarket”: give its out-of-town site, non-food goods and car parks.', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  add('02-large-scale-retailers',
    svg(900, 575, 'Telling the large-scale retailers apart', body),
    'Four columns compare a multiple chain store, a supermarket, a hypermarket and a department store by their features, one advantage and one disadvantage.',
    'Each large-scale retailer has distinctive features; name them, not just its size.',
    '## Which types of retailer does the syllabus name? (2.3.1)');
}

// 03 Why the small retailer survives
{
  let body = pill(330, 110, 240, 70, ['Small-scale retailer', 'e.g. a corner shop'], { fill: C.cream, size: 18 });
  const r = [
    ['Personal service', 'Knows regular customers, remembers what they buy, gives advice'],
    ['Flexible opening hours', 'Opens early, late or on holidays when large stores are closed'],
    ['Additional services', 'Delivery to elderly customers, phone credit, bill payment, informal credit'],
  ];
  r.forEach(([h, d], i) => {
    const x = 30 + i * 285;
    body += parrow(`M450,184 C450,215 ${x + 135},205 ${x + 135},232`, { w: 3 });
    body += rect(x, 240, 270, 175, { fill: C.tealLight, edge: C.tealDark }) + tx(x + 135, 276, h, { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
    body += para(x + 18, 310, d, 235, { size: 16 });
  });
  body += tx(450, 445, 'The three syllabus examples', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  body += panel(30, 465, 840, 85) + tx(54, 500, 'You can also add', { size: 17, weight: 700 });
  body += pill(240, 480, 280, 54, 'Convenience: close to homes', { fill: C.cream, size: 16 }) + pill(540, 480, 300, 54, 'Stocking local products', { fill: C.cream, size: 16 });
  add('03-small-retailer-survival',
    svg(900, 575, 'Why small shops survive', body),
    'A small-scale retailer survives through three syllabus examples: personal service, flexible opening hours and additional services such as delivery or informal credit. Convenience and local products are further reasons.',
    'Turn each reason into an explanation of what the small shop does that a large store cannot.',
    '## Why does the small-scale retailer often survive? (2.3.1)');
}

// 04 Selling techniques by what they do
{
  const g = [
    ['Recognition', ['Branding', 'Logos', 'Packaging'], 'trust, quick recognition, attention on the shelf', C.tealLight],
    ['Price and cost', ['Own brands', 'Self service'], 'cheaper goods, higher margin, fewer staff', C.cream],
    ['Loyalty', ['Loyalty programmes', 'Direct mail', 'Informal credit'], 'customers return; offers to known customers', C.tealLight],
    ['Confidence', ['After-sales service', 'Cash on delivery'], 'trust for expensive items and wary online buyers', C.cream],
    ['Speed and accuracy', ['Barcoding'], 'fast checkout, automatic stock records', C.tealLight],
  ];
  let body = '';
  g.forEach(([h, items, eff, fill], i) => {
    const y = 110 + i * 112;
    body += rect(30, y, 840, 100, { fill, edge: C.panelEdge });
    body += tx(50, y + 40, h, { size: 19, weight: 700 });
    body += para(50, y + 66, eff, 230, { size: 15, fill: C.muted, italic: true });
    items.forEach((it, j) => { body += pill(300 + j * 190, y + 26, 178, 48, wrap(it, 165, 16), { fill: C.panel, size: 16 }); });
  });
  add('04-selling-techniques',
    svg(900, 680, 'Eleven selling techniques, by what they do', body),
    'The eleven selling techniques grouped by how they help sales: recognition (branding, logos, packaging), price and cost (own brands, self service), loyalty (loyalty programmes, direct mail, informal credit), confidence (after-sales service, cash on delivery) and speed (barcoding).',
    'Name the technique, then say how it raises sales or loyalty for the retailer.',
    '## What selling techniques do retailers use? (2.3.2)');
}

// 05 Multi-channel vs omnichannel
{
  let body = panel(30, 110, 410, 400) + tx(235, 148, 'Multi-channel', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
  ['Shop', 'Website', 'App'].forEach((c, i) => {
    const x = 54 + i * 125;
    body += pill(x, 180, 110, 50, c, { fill: C.cream, size: 17 });
    body += rect(x, 250, 110, 120, { fill: C.panel, edge: C.panelEdge, dash: '6 5' });
    body += tl(x + 55, 290, ['own', 'stock', 'and prices'], { size: 15, anchor: 'middle', fill: C.muted }, 22);
  });
  body += para(54, 410, 'Several channels, but they may run separately: prices or stock can differ.', 360, { size: 16 });
  body += panel(460, 110, 410, 400) + tx(665, 148, 'Omnichannel', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += pill(575, 270, 180, 70, ['Shared stock and', 'one account'], { fill: C.teal, size: 16 });
  [['Shop', 490, 180], ['Website', 720, 180], ['App', 490, 370], ['Social media', 720, 370]].forEach(([c, x, y]) => {
    body += pill(x, y, 130, 46, c, { fill: C.tealLight, size: 16 });
    body += line(x + 65, y + (y < 300 ? 46 : 0), x < 600 ? 610 : 720, y < 300 ? 270 : 340, { color: C.tealDark, w: 3 });
  });
  body += para(484, 455, 'All channels joined up, so the customer moves between them seamlessly.', 370, { size: 16 });
  body += tx(450, 550, 'One omnichannel journey', { size: 18, weight: 700, anchor: 'middle' });
  const j = ['Check stock in app', 'Reserve online', 'Collect in store', 'Return by post'];
  j.forEach((s, i) => { const x = 30 + i * 220; body += pill(x, 570, 180, 54, s, { fill: C.cream, size: 16 }); if (i < 3) body += arrow(x + 184, 597, x + 214, 597, { w: 3 }); });
  add('05-omnichannel-vs-multichannel',
    svg(900, 650, 'Multi-channel or omnichannel?', body),
    'Left: in multi-channel retailing the shop, website and app each have their own stock and prices. Right: in omnichannel retailing every channel links to shared stock and one customer account. Below, one journey: check stock in the app, reserve online, collect in store, return by post.',
    'Omnichannel joins the channels up; multi-channel only runs several side by side.',
    '## What are the digital retail trends? (2.3.3)');
}

// 06 Dropshipping vs click and collect
{
  let body = panel(30, 110, 840, 240) + tx(54, 146, 'Dropshipping', { size: 21, weight: 700 }) + tx(846, 146, 'retailer holds no stock', { size: 16, anchor: 'end', fill: C.rust, weight: 600 });
  body += pill(54, 200, 180, 64, 'Customer', { fill: C.cream, size: 18 }) + pill(360, 200, 180, 64, 'Retailer', { fill: C.panel, size: 18 }) + pill(666, 200, 180, 64, 'Supplier', { fill: C.tealLight, size: 18 });
  body += arrow(238, 222, 354, 222, { w: 3 }) + tx(296, 210, 'orders', { size: 15, anchor: 'middle', fill: C.muted });
  body += arrow(544, 222, 660, 222, { w: 3 }) + tx(602, 210, 'passes order', { size: 15, anchor: 'middle', fill: C.muted });
  body += parrow('M756,268 C756,330 144,330 144,272', { color: C.tealDark, marker: 'ahT', w: 4 });
  body += tx(450, 298, 'goods sent directly to the customer', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += panel(30, 370, 840, 170) + tx(54, 406, 'Click and collect', { size: 21, weight: 700 });
  body += pill(54, 440, 180, 64, 'Customer', { fill: C.cream, size: 18 }) + pill(360, 440, 180, 64, 'Online order', { fill: C.panel, size: 18 }) + pill(666, 440, 180, 64, ['Store or', 'collection point'], { fill: C.tealLight, size: 16 });
  body += arrow(238, 472, 354, 472, { w: 3 }) + arrow(544, 472, 660, 472, { w: 3 });
  body += tx(450, 528, 'the customer picks up the goods', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('06-dropshipping-click-collect',
    svg(900, 565, 'Dropshipping and click and collect', body),
    'Dropshipping: the customer orders from the retailer, the retailer passes the order to the supplier, and the supplier sends the goods straight to the customer, so the retailer holds no stock. Click and collect: the customer orders online and picks up from a store or collection point.',
    'A dropshipper never holds the goods; with click and collect the customer fetches them.',
    '## What are the digital retail trends? (2.3.3)');
}

// 07 Model answer structure: Corner Fresh
{
  const rows = [
    ['Reason 1', 'Personal service', 'Owner knows regulars, orders special items, gives informal credit, unlike hypermarket staff'],
    ['Reason 2', 'Flexible opening hours', 'Open early and late, when the out-of-town hypermarket needs a car journey'],
  ];
  let body = '';
  rows.forEach(([r, name, ex], i) => {
    const y = 110 + i * 200;
    body += tx(30, y + 26, r, { size: 18, weight: 700, fill: C.muted });
    body += rect(30, y + 40, 300, 130, { fill: C.cream, edge: C.olive }) + tx(52, y + 80, 'Name it', { size: 16, fill: C.olive, weight: 700 }) + para(52, y + 112, name, 250, { size: 20, weight: 700 });
    body += pill(270, y + 50, 48, 34, '[1]', { fill: C.panel, size: 15 });
    body += arrow(336, y + 105, 376, y + 105, { w: 3.5 });
    body += rect(385, y + 40, 485, 130, { fill: C.tealLight, edge: C.tealDark }) + tx(407, y + 80, 'Explain by contrast with the hypermarket', { size: 16, fill: C.tealDark, weight: 700 }) + para(407, y + 110, ex, 380, { size: 16 });
    body += pill(812, y + 50, 48, 34, '[1]', { fill: C.panel, size: 15 });
  });
  body += tx(450, 530, '2 reasons × (name + explain) = 4 marks', { size: 19, weight: 700, anchor: 'middle' });
  add('07-corner-fresh-answer',
    svg(900, 560, 'Corner Fresh: a 4-mark answer', body),
    'Two reasons, each worth two marks: name personal service and explain it by contrast with the hypermarket, then name flexible opening hours and explain why they suit customers when the hypermarket needs a car journey.',
    'Name each reason for one mark, then explain it against the hypermarket for the second.',
    '## Worked example: an annotated model answer');
}
