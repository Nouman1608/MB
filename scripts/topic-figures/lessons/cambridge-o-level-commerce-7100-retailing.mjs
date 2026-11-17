import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-commerce-7100-retailing';
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

// 01 Ten types, usual grouping
{
  const grp = (x, head, fill, edge, items) => {
    let s = rect(x, 110, 410, 450, { fill, edge }) + tx(x + 205, 146, head, { size: 21, weight: 700, anchor: 'middle', fill: edge });
    items.forEach(([n, f], i) => {
      const y = 166 + i * 76;
      s += rect(x + 16, y, 378, 66, { fill: C.panel, edge: C.panelEdge, rx: 10 }) + tx(x + 32, y + 27, n, { size: 17, weight: 700 }) + tx(x + 32, y + 51, f, { size: 15, fill: C.muted });
    });
    return s;
  };
  let body = grp(30, 'Small-scale', C.cream, C.olive, [['Itinerant retailer', 'no fixed shop; moves place to place'], ['Vending machine', 'automatic; drinks or snacks'], ['Independent retailer', 'one shop, sole trader or family'], ['Street market', 'stalls on set days'], ['Speciality shop', 'one product type, e.g. sports goods']]);
  body += grp(460, 'Large-scale', C.tealLight, C.tealDark, [['Online retailer*', 'website or app; delivered or collected'], ['Multiple chain store', 'many branches, one name, central control'], ['Supermarket', 'self-service; mainly food and household'], ['Hypermarket', 'very large, out of town; non-food too'], ['Department store', 'city centre; many departments']]);
  body += tx(450, 590, '* Online retailers range from one-person websites to global companies: judge scale from the case.', { size: 15.5, anchor: 'middle', fill: C.muted, italic: true });
  add('01-ten-retailer-types',
    svg(900, 615, 'Ten types of retailer', body),
    'The ten retailer types in their usual grouping. Small-scale: itinerant retailer, vending machine, independent retailer, street market and speciality shop. Large-scale: online retailer, multiple chain store, supermarket, hypermarket and department store, each with its main feature.',
    'Learn one identifying feature for each type; judge an online retailer’s scale from the case.',
    '## Small-scale retailers');
}

// 02 Supermarket vs hypermarket vs department store
{
  const cols = [
    ['Supermarket', ['Large self-service store', 'Mainly food and household goods'], 'Low prices; one-stop shopping', 'Impersonal; impulse buying', C.cream],
    ['Hypermarket', ['Very large, often out of town', 'Food and non-food; large car parks'], 'Lowest prices; free parking', 'Needs a car; draws trade from town', C.tealLight],
    ['Department store', ['Usually city centre', 'Many separate departments'], 'Wide range; cafés, delivery, gift wrapping', 'High prices and running costs', C.cream],
  ];
  let body = '';
  cols.forEach(([n, f, a, d, fill], i) => {
    const x = 30 + i * 285;
    body += panel(x, 110, 270, 360) + rect(x, 110, 270, 56, { fill, edge: C.panelEdge, rx: 14 }) + tx(x + 135, 146, n, { size: 21, weight: 700, anchor: 'middle' });
    let y = 200;
    f.forEach((ff) => { body += dot(x + 26, y - 6, 5) + para(x + 40, y, ff, 215, { size: 16 }); y += nl(ff, 215, 16) * LH(16) + 10; });
    body += line(x + 18, 290, x + 252, 290, { color: C.panelEdge, w: 2 });
    body += tick(x + 30, 322, 12) + para(x + 52, 328, a, 200, { size: 16 });
    body += cross(x + 30, 400, 12) + para(x + 52, 406, d, 200, { size: 16, fill: C.muted });
  });
  body += tx(450, 505, 'A large supermarket is not a hypermarket: give the out-of-town site, non-food goods and car parks.', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  add('02-big-stores-compared',
    svg(900, 530, 'Supermarket, hypermarket or department store?', body),
    'Three columns compare a supermarket (self-service, mainly food), a hypermarket (very large, out of town, food and non-food, car parks) and a department store (city centre, many departments), each with one advantage and one disadvantage.',
    'Use the distinguishing features, not just size, to tell the large stores apart.',
    '## Large-scale retailers');
}

// 03 Why small retailers survive
{
  let body = pill(330, 110, 240, 70, ['Small-scale retailer', 'e.g. a corner shop'], { fill: C.cream, size: 18 });
  const r = [
    ['Personal service', 'Knows regular customers by name and remembers their preferences'],
    ['Flexible opening hours', 'Opens early, late or on public holidays when large stores cannot'],
    ['Additional services', 'Home delivery for the elderly, informal credit, phone credit, bill payments'],
  ];
  r.forEach(([h, d], i) => {
    const x = 30 + i * 285;
    body += parrow(`M450,184 C450,215 ${x + 135},205 ${x + 135},232`, { w: 3 });
    body += rect(x, 240, 270, 165, { fill: C.tealLight, edge: C.tealDark }) + tx(x + 135, 276, h, { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
    body += para(x + 18, 310, d, 235, { size: 16 });
  });
  body += tx(450, 435, 'The three syllabus examples: hard for large retailers to copy', { size: 15.5, anchor: 'middle', fill: C.muted, italic: true });
  body += panel(30, 455, 840, 150) + tx(54, 490, 'Other reasons you can apply', { size: 17, weight: 700 });
  body += pill(54, 510, 250, 70, ['Location close', 'to homes'], { fill: C.cream, size: 16 });
  body += pill(324, 510, 250, 70, ['Sells small', 'quantities'], { fill: C.cream, size: 16 });
  body += pill(594, 510, 252, 70, ['Voluntary chains:', 'buy together via a wholesaler'], { fill: C.cream, size: 15 });
  add('03-small-retailer-survival',
    svg(900, 630, 'Why the small retailer survives', body),
    'A small retailer survives through the three syllabus examples: personal service, flexible opening hours and additional services. Further reasons are a location close to homes, selling small quantities and joining a voluntary chain.',
    'Small shops survive by offering what large retailers find hard to copy.',
    '## Why the small-scale retailer often survives');
}

// 04 Selling techniques grouped
{
  const g = [
    ['Recognition', ['Branding', 'Logos', 'Packaging'], 'identity, instant recognition, attention at point of sale', C.tealLight],
    ['Price and cost', ['Own brands', 'Self service'], 'cheaper than famous brands; fewer staff', C.cream],
    ['Loyalty', ['Loyalty programmes', 'Direct mail', 'Informal credit'], 'customers return; targeted offers', C.tealLight],
    ['Confidence', ['After-sales service', 'Cash on delivery'], 'trust for expensive items and online buyers', C.cream],
    ['Speed and accuracy', ['Barcoding'], 'faster checkout, accurate prices and stock', C.tealLight],
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
    'The eleven selling techniques grouped by how they raise sales: recognition (branding, logos, packaging), price and cost (own brands, self service), loyalty (loyalty programmes, direct mail, informal credit), confidence (after-sales service, cash on delivery) and speed (barcoding).',
    'Explain a technique by saying how it raises sales or loyalty for the shop described.',
    '## Retail selling techniques');
}

// 05 Multi-channel vs omnichannel
{
  let body = panel(30, 110, 410, 380) + tx(235, 148, 'Multi-channel', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
  ['Shop', 'Website', 'App'].forEach((c, i) => {
    const x = 54 + i * 125;
    body += pill(x, 180, 110, 50, c, { fill: C.cream, size: 17 });
    body += rect(x, 250, 110, 110, { fill: C.panel, edge: C.panelEdge, dash: '6 5' });
    body += tl(x + 55, 290, ['may run', 'separately'], { size: 15, anchor: 'middle', fill: C.muted }, 22);
  });
  body += para(54, 405, 'Several channels selling side by side.', 360, { size: 16 });
  body += panel(460, 110, 410, 380) + tx(665, 148, 'Omnichannel', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += pill(565, 255, 200, 100, ['One account, prices,', 'stock information', 'and loyalty points'], { fill: C.teal, size: 15 });
  body += pill(490, 180, 130, 46, 'Shop', { fill: C.tealLight, size: 16 }) + line(555, 226, 610, 255, { color: C.tealDark, w: 3 });
  body += pill(710, 180, 130, 46, 'Website', { fill: C.tealLight, size: 16 }) + line(775, 226, 720, 255, { color: C.tealDark, w: 3 });
  body += pill(600, 385, 130, 46, 'App', { fill: C.tealLight, size: 16 }) + line(665, 355, 665, 385, { color: C.tealDark, w: 3 });
  body += para(484, 455, 'Channels joined into one experience.', 370, { size: 16 });
  body += tx(450, 530, 'An omnichannel purchase', { size: 18, weight: 700, anchor: 'middle' });
  body += pill(150, 550, 260, 54, 'Start on the app', { fill: C.cream, size: 17 }) + arrow(416, 577, 484, 577, { w: 3 }) + pill(490, 550, 260, 54, 'Finish in the shop', { fill: C.cream, size: 17 });
  add('05-omnichannel-vs-multichannel',
    svg(900, 630, 'Multi-channel or omnichannel?', body),
    'Left: multi-channel retailing sells through a shop, website and app that may run separately. Right: omnichannel retailing links the channels to one account, the same prices, stock information and loyalty points, so a customer can start on the app and finish in the shop.',
    'Omnichannel joins the channels into one experience; multi-channel channels may run separately.',
    '## Digital retail trends');
}

// 06 Barcode and EPoS
{
  let body = '';
  const bars = [0, 6, 10, 18, 22, 30, 34, 38, 46, 50, 58, 62, 70, 74, 82];
  body += panel(30, 120, 230, 230) + tx(145, 156, 'Barcode', { size: 20, weight: 700, anchor: 'middle' });
  bars.forEach((b, i) => { body += `<rect x="${92 + b * 1.3}" y="178" width="${i % 3 ? 3 : 6}" height="80" fill="${C.ink}"/>`; });
  body += para(145, 290, 'machine-readable code on the product', 200, { size: 15, anchor: 'middle', fill: C.muted });
  body += arrow(268, 235, 330, 235, { w: 4 }) + tx(299, 222, 'scanned', { size: 15, anchor: 'middle', weight: 600 });
  body += rect(340, 120, 230, 230, { fill: C.tealLight, edge: C.tealDark }) + tx(455, 156, 'EPoS till', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += para(455, 220, 'Electronic Point of Sale: a computerised till', 200, { size: 17, anchor: 'middle' });
  body += arrow(578, 190, 640, 160, { w: 3.5 }) + arrow(578, 280, 640, 310, { w: 3.5 });
  body += pill(650, 120, 220, 80, ['Records', 'each sale'], { fill: C.cream, size: 17 });
  body += pill(650, 270, 220, 80, ['Updates stock', 'records'], { fill: C.cream, size: 17 });
  body += rect(30, 380, 840, 70, { fill: C.cream, edge: C.olive });
  body += tx(450, 422, 'Barcoding is the code on the product; EPoS is the till system that reads it.', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  add('06-barcode-and-epos',
    svg(900, 475, 'Barcode and EPoS', body),
    'A barcode on the product is scanned at an EPoS till, a computerised till that records each sale and updates stock records.',
    'Do not confuse the barcode on the product with the EPoS till that reads it.',
    '## Digital retail trends');
}

// 07 Ecommerce effects
{
  const pos = ['24/7 selling opportunities', 'More potential customers, including overseas', 'Increased revenue', 'Targeted marketing using customer data', 'Reduced operating store costs'];
  const neg = ['Increased delivery costs', 'Staff training in new systems', 'Larger warehousing space needed', 'Website maintenance costs'];
  let body = panel(30, 110, 410, 330) + tx(54, 148, 'Positive impacts', { size: 20, weight: 700, fill: C.tealDark }) + list(54, 190, pos, 370, { size: 17, gap: 16, mark: 'tick' }).s;
  body += panel(460, 110, 410, 330) + tx(484, 148, 'Negative impacts', { size: 20, weight: 700, fill: C.rust }) + list(484, 190, neg, 370, { size: 17, gap: 16, mark: 'cross' }).s;
  body += rect(30, 460, 840, 110, { fill: C.cream, edge: C.olive });
  body += tx(54, 494, 'Example: a bookshop adds a website', { size: 18, weight: 700, fill: C.olive });
  body += tx(54, 524, 'Gains: readers nationwide.', { size: 16, fill: C.tealDark, weight: 600 });
  body += tx(54, 550, 'Costs: packaging, couriers, and keeping the site secure and up to date.', { size: 16, fill: C.rust, weight: 600 });
  add('07-ecommerce-effects',
    svg(900, 595, 'How ecommerce affects traditional commerce', body),
    'Five positive impacts of ecommerce on traditional commerce, such as 24/7 selling and more customers, beside four negative impacts, such as delivery and website maintenance costs. A bookshop adding a website reaches readers nationwide but pays for packaging, couriers and site upkeep.',
    'The overall effect depends on the product and the customers, so weigh both sides.',
    '## Effects of ecommerce on traditional commerce');
}

// 08 Model answer structure
{
  const steps = [
    ['Name the technique', 'Start a loyalty programme.', C.cream],
    ['Explain how it works', 'Customers earn points each time they buy, to spend on future purchases.', C.tealLight],
    ['Link to the problem', 'Regular customers have a reason to keep returning instead of trying the hypermarket.', C.tealLight],
    ['Justify for this shop', 'It can use the data for personal birthday offers, which a hypermarket is unlikely to do.', C.cream],
  ];
  let body = '';
  steps.forEach(([head, txt, fill], i) => {
    const y = 110 + i * 118;
    body += badge(70, y + 50, 26, String(i + 1), i === 0 || i === 3 ? C.mustard : C.cream);
    body += rect(115, y, 755, 100, { fill, edge: C.panelEdge });
    body += tx(137, y + 36, head, { size: 19, weight: 700 });
    body += para(137, y + 66, txt, 710, { size: 16 });
    if (i < 3) body += line(70, y + 78, 70, y + 140, { w: 3 });
  });
  add('08-model-answer',
    svg(900, 590, 'Recommending one technique: 4 marks', body),
    'Four steps of the answer for a family clothing shop losing customers to a hypermarket: name a loyalty programme, explain how points work, link it to keeping customers from the hypermarket, and justify it with personal offers a hypermarket is unlikely to make.',
    'Name, explain, link to the problem, then justify for this shop.',
    '## Annotated model answer');
}
