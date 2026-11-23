import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-business-9225-technology';
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

// 01 ICT across the business
{
  const rows = [
    ['Operations', 'Computerised stock systems record each sale and reorder automatically', 'Fewer stock-outs; less money tied up in stock'],
    ['Marketing', 'Websites and social media target chosen groups and show who responds', 'Cheaper, better-targeted promotion'],
    ['Human resources', 'Jobs advertised online; video training; some staff work from home', 'Wider pool of applicants; lower office costs'],
    ['Finance', 'Online banking and card or app payments', 'Faster payments, less cash handling'],
    ['Customer service', 'Online order tracking, live chat, email replies', 'Customers helped outside opening hours'],
  ];
  let b = tx(130, 130, 'Area', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + tx(430, 130, 'How ICT changes the activity', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + tx(735, 130, 'Likely effect', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([a, c, e], i) => {
    const y = 146 + i * 110;
    b += card(30, y, 200, 94, a, '', { fill: C.cream, edge: C.olive, ts: 19, align: 'middle' });
    b += arrow(232, y + 47, 258, y + 47, { w: 3 });
    b += card(262, y, 336, 94, '', c, { bs: 16, bfill: C.ink });
    b += arrow(600, y + 47, 626, y + 47, { w: 3 });
    b += card(630, y, 240, 94, '', e, { fill: C.tealLight, edge: C.tealDark, bs: 16, bfill: C.ink });
  });
  add('01-ict-across-the-business',
    svg(900, 146 + 5 * 110 + 14, 'How ICT changes each part of a business', b),
    'Five business areas, each with how ICT changes it and the likely effect: operations (automatic reordering, fewer stock-outs), marketing (targeted online promotion), human resources (online adverts and home working, wider applicant pool), finance (faster payments) and customer service (help outside opening hours).',
    'Name the activity that changes, then its effect on costs, revenue, customers or staff.',
    '## How changing ICT changes what a business does');
}

// 02 Keeping up with changing ICT
{
  let b = rect(30, 110, 840, 90, C.cream, C.olive) + tx(450, 146, 'ICT keeps changing', { size: 21, weight: 700, anchor: 'middle' }) +
    tx(450, 178, 'so a business must keep investing in equipment and software and training staff', { size: 17, anchor: 'middle', fill: C.muted });
  b += `<line x1="80" y1="270" x2="820" y2="270" stroke="${C.ink}" stroke-width="4"/>`;
  b += arrow(450, 270, 90, 270, { w: 4 }) + arrow(450, 270, 810, 270, { w: 4 });
  b += `<circle cx="450" cy="270" r="13" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="3"/>`;
  b += tx(80, 250, 'Too slow', { size: 19, weight: 700, fill: C.rust }) + tx(820, 250, 'Too fast', { size: 19, weight: 700, fill: C.rust, anchor: 'end' });
  b += tx(450, 310, 'keep up', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += card(30, 340, 400, 150, 'Does not keep up', 'May lose customers to rivals who offer faster ordering or better online service', { edge: C.rust, tfill: C.rust, ts: 20, bs: 17, top: 40 });
  b += card(470, 340, 400, 150, 'Adopts new ICT too quickly', 'May spend money on systems its customers do not yet use', { edge: C.rust, tfill: C.rust, ts: 20, bs: 17, top: 40 });
  add('02-keeping-up-with-ict',
    svg(900, 520, 'Changing ICT: keeping up', b),
    'A line from too slow to too fast. A business that does not keep up with changing ICT may lose customers to rivals with faster ordering; one that adopts new ICT too quickly may pay for systems customers do not yet use.',
    'ICT needs steady investment: too slow loses customers, too fast wastes money.',
    '## How changing ICT changes what a business does');
}

// 03 B2C and B2B
{
  const lane = (y, title, sell, buyers, via, ex) => {
    let s = rect(30, y, 840, 220, C.panel) + tx(56, y + 38, title, { size: 21, weight: 700 });
    s += card(56, y + 64, 220, 110, sell, '', { fill: C.cream, edge: C.olive, ts: 19, align: 'middle' });
    s += arrow(280, y + 119, 590, y + 119, { w: 4 });
    s += tx(435, y + 104, via, { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
    s += card(594, y + 64, 250, 110, buyers, '', { fill: C.tealLight, edge: C.tealDark, ts: 19, align: 'middle' });
    s += tx(56, y + 202, ex, { size: 16, fill: C.muted, italic: true });
    return s;
  };
  let b = lane(110, 'Business to consumer (B2C)', 'A business', 'Households', 'website, app or online marketplace', 'Sells to individual customers');
  b += lane(350, 'Business to business (B2B)', 'A wholesaler', 'Shop customers', 'online ordering portal', 'e.g. shops reorder stock through the wholesaler’s portal');
  add('03-b2c-and-b2b',
    svg(900, 600, 'Two forms of e-commerce', b),
    'Business to consumer: a business sells to households through a website, app or online marketplace. Business to business: a wholesaler sells to shop customers, who reorder through an online portal.',
    'E-commerce is either business to consumer or business to business.',
    '## E-commerce and wider markets');
}

// 04 Three ways to wider markets
{
  let b = '';
  // location
  b += rect(30, 110, 270, 330, C.panel) + tx(165, 146, 'Location', { size: 21, weight: 700, anchor: 'middle' });
  b += `<circle cx="165" cy="250" r="44" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>` + `<rect x="152" y="238" width="26" height="24" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  [[90, 190], [240, 200], [70, 290], [255, 300], [120, 330], [215, 175]].forEach(([x, y]) => { b += `<circle cx="${x}" cy="${y}" r="8" fill="${C.tealDark}"/>`; });
  b += para(50, 372, 'Anyone with a delivery address can buy', 230, { size: 16 });
  // time
  b += rect(315, 110, 270, 330, C.panel) + tx(450, 146, 'Time', { size: 21, weight: 700, anchor: 'middle' });
  b += `<circle cx="450" cy="250" r="62" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` + line(450, 250, 450, 206, { w: 4 }) + line(450, 250, 484, 262, { w: 4 });
  b += tx(450, 342, '24 hours a day', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += para(335, 372, 'The website takes orders while the business is closed', 230, { size: 16 });
  // niche
  b += rect(600, 110, 270, 330, C.panel) + tx(735, 146, 'Niche markets', { size: 21, weight: 700, anchor: 'middle' });
  [[640, 180], [735, 180], [830, 180], [640, 250], [735, 250], [830, 250]].forEach(([x, y], i) => {
    b += rect(x - 36, y - 26, 72, 52, C.tealLight, C.panelEdge, 8, 1.5) + `<circle cx="${x}" cy="${y}" r="8" fill="${C.tealDark}"/>`;
  });
  b += arrow(735, 286, 735, 316, { w: 3 });
  b += tx(735, 342, 'enough buyers in total', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += para(620, 372, 'A few buyers in each town add up across a country', 230, { size: 16 });
  b += rect(30, 460, 840, 220, C.panel, C.rust) + tx(56, 496, 'But e-commerce brings costs and risks', { size: 19, weight: 700, fill: C.rust });
  const risks = ['Website, secure payments, packaging, delivery and returns', 'Customers compare prices instantly: stronger competition', 'Systems can be attacked or fail; lost data damages reputation', 'Delivery abroad can be slower and cost more'];
  risks.forEach((s, i) => { const x = 56 + (i % 2) * 404, y = 516 + Math.floor(i / 2) * 80; b += rect(x, y, 384, 68, C.panel, C.rust, 10, 2) + para(x + 16, y + (paraN(s, 352, 16) > 1 ? 28 : 40), s, 352, { size: 16 }); });
  add('04-wider-markets',
    svg(900, 710, 'How e-commerce widens a market', b),
    'E-commerce removes the limits of location (anyone with a delivery address can buy) and time (orders 24 hours a day), and makes niche markets worth serving because a few buyers in each town add up. It also brings website and delivery costs, instant price comparison, system and data risks and slower delivery abroad.',
    'E-commerce removes limits of place and time, but adds costs and competition.',
    '## E-commerce and wider markets');
}

// 05 Choosing a digital method
{
  const rows = [
    ['Same information for many people', 'Email or website update', 'Cheap, fast, reaches everyone at once'],
    ['Needs discussion and quick decisions', 'Video conferencing', 'See each other, share documents, respond at once'],
    ['Needs a written record', 'Email', 'Both sides keep a copy of what was agreed'],
    ['Short and urgent', 'Messaging app or text', 'Read quickly on a phone'],
    ['For the public or local community', 'Website or social media', 'Anyone can see it at any time'],
  ];
  let b = tx(155, 130, 'If the message is…', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + tx(445, 130, 'Use', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + tx(730, 130, 'Why', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  rows.forEach(([m, u, w], i) => {
    const y = 146 + i * 96;
    b += card(30, y, 250, 80, '', m, { bs: 17, bfill: C.ink });
    b += arrow(282, y + 40, 312, y + 40, { w: 3 });
    b += card(316, y, 258, 80, u, '', { fill: C.tealLight, edge: C.tealDark, ts: 18, align: 'middle' });
    b += card(590, y, 280, 80, '', w, { bs: 16 });
  });
  b += takeaway(640, 'Fast and cheap, but not perfect', 'Needs reliable equipment and internet; messages can be misunderstood without tone of voice; some stakeholders, such as older customers, may prefer face-to-face contact.');
  add('05-choosing-digital-method',
    svg(900, 640 + takeH('Needs reliable equipment and internet; messages can be misunderstood without tone of voice; some stakeholders, such as older customers, may prefer face-to-face contact.') + 30, 'Matching the method to the message', b),
    'Five kinds of message matched to a digital method: the same information for many people by email or website, discussions by video conferencing, a written record by email, short urgent messages by messaging app or text, and public messages by website or social media.',
    'Choose the digital method that suits the message and the stakeholder.',
    '## Digital communication with stakeholders');
}

// 06 Corrigan Wholesale
{
  const x0 = 120, yb = 560, top = 190, max = 4000, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 470, 520) + tx(56, 146, 'Monthly cost of handling 1,200 orders', { size: 18, weight: 700 });
  [0, 1000, 2000, 3000, 4000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 480, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  b += `<rect x="160" y="${yb - sc(3600)}" width="120" height="${sc(3600)}" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="330" y="${yb - sc(600)}" width="120" height="${sc(600)}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="330" y="${yb - sc(1700)}" width="120" height="${sc(1100)}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += tx(390, yb - sc(300) + 6, 'staff $600', { size: 15, anchor: 'middle', weight: 600 }) + tx(390, yb - sc(1150) + 6, 'portal $1,100', { size: 15, anchor: 'middle', weight: 600 });
  b += tx(220, yb - sc(3600) - 10, '$3,600', { size: 18, weight: 700, anchor: 'middle' }) + tx(390, yb - sc(1700) - 10, '$1,700', { size: 18, weight: 700, anchor: 'middle' });
  b += line(x0, yb, 480, yb, { w: 2.5 });
  b += tx(220, yb + 28, 'Phone orders', { size: 17, weight: 700, anchor: 'middle' }) + tx(390, yb + 28, 'Online portal', { size: 17, weight: 700, anchor: 'middle' });
  const st = (y, h, head, rows, f = C.panel, e = C.panelEdge) => rect(520, y, 350, h, f, e) + tx(540, y + 32, head, { size: 17, weight: 700, fill: C.muted }) + lines(540, y + 62, rows, { size: 17 }, 25);
  b += st(110, 125, 'Phone: 12 minutes an order', ['1,200 × 12 = 14,400 min = 240 h', '240 × $15 = $3,600']);
  b += st(250, 125, 'Online: 2 minutes an order', ['1,200 × 2 = 2,400 min = 40 h', '40 × $15 = $600']);
  b += st(390, 100, 'Staff cost saved', ['$3,600 − $600 = $3,000']);
  b += st(505, 125, 'Net saving after portal', ['$3,000 − $1,100', '= $1,900 a month'], C.cream, C.olive);
  b += takeaway(660, 'The saving only happens if shopkeepers use the portal.', 'Corrigan may need to train customers, keep a phone line for those who will not switch, and redeploy the staff time released.');
  add('06-corrigan-online-portal',
    svg(900, 660 + takeH('Corrigan may need to train customers, keep a phone line for those who will not switch, and redeploy the staff time released.') + 30, 'Corrigan Wholesale: phone or online orders?', b),
    'Taking 1,200 orders by phone uses 240 staff hours a month at $15, costing $3,600. Online orders take 40 hours, $600, plus a $1,100 portal, $1,700 in total. Staff costs fall by $3,000 and the net saving is $1,900 a month.',
    'The portal saves Corrigan $1,900 a month, if customers switch to it.',
    '## Worked example 1: ICT changes how orders are handled');
}

// 07 Saffron Lane analysis chains
{
  const chain = (y, label, steps) => {
    let s = tx(56, y + 6, label, { size: 18, weight: 700, fill: C.tealDark });
    steps.forEach(([h, txt], i) => {
      const x = 30 + i * 285;
      s += card(x, y + 22, 255, 150, h, txt, { fill: i === 0 ? C.panel : i === 2 ? C.cream : C.tealLight, edge: i === 0 ? C.panelEdge : i === 2 ? C.olive : C.tealDark, ts: 16, bs: 16, top: 30, tfill: C.muted, bfill: C.ink });
      if (i < 2) s += arrow(x + 257, y + 97, x + 283, y + 97, { w: 3 });
    });
    return s;
  };
  let b = tx(450, 126, 'Saffron Lane sells spice blends from one market stall', { size: 18, anchor: 'middle', italic: true });
  b += chain(160, 'Chain 1: place', [['Current limit', 'Only people who visit the stall in one town can buy'], ['Link to e-commerce', 'A website delivering nationwide reaches distant cooks'], ['Effect (product detail)', 'Light blends that do not go off are cheap to deliver, so sales revenue rises']]);
  b += chain(370, 'Chain 2: time', [['Current limit', 'Sales only happen on market days'], ['Link to e-commerce', 'The website takes orders while the stall is closed'], ['Effect', 'Sales are no longer limited to market days']]);
  b += rect(30, 580, 840, 70, C.tealLight, C.tealDark) + tx(450, 622, 'Each point is followed through to an effect, using details of the product.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('07-saffron-lane-chains',
    svg(900, 680, 'Analysing e-commerce: two chains', b),
    'Two analysis chains for Saffron Lane. Place: sales are limited to one town; a nationwide website reaches distant cooks; light, long-lasting blends are cheap to deliver, so revenue rises. Time: sales only happen on market days; the website takes orders while the stall is closed.',
    'Analysis follows each point through to its effect, using case details.',
    '## Worked example 2: an annotated analysis answer');
}
