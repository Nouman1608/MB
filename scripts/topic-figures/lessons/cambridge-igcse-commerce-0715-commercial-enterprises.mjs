import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-commerce-0715-commercial-enterprises';
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

// 01 Private vs public sector
{
  const side = (x, head, owned, aim, aimColor, forms, formFill, extra) => {
    let s = panel(x, 110, 410, 440) + tx(x + 24, 150, head, { size: 25, weight: 700 });
    s += para(x + 24, 182, owned, 362, { size: 17, fill: C.muted });
    s += tx(x + 24, 240, aim, { size: 18, weight: 700, fill: aimColor });
    forms.forEach((f, i) => { s += pill(x + 24, 268 + i * 52, 362, 40, f, { fill: formFill, size: 17 }); });
    return s + (extra || '');
  };
  const body =
    side(30, 'Private sector', 'Owned by individuals, partners, members or shareholders', 'Aim: usually to make a profit', C.tealDark,
      ['Sole trader', 'Partnership', 'Cooperative', 'Private limited company', 'Public limited company'], C.tealLight) +
    side(460, 'Public sector', 'Owned by the government (central or local)', 'Aim: usually to provide a service', C.olive,
      ['Public corporation'], C.cream,
      para(484, 352, 'Funded by the government and, where charged, revenue from users', 362, { size: 17, fill: C.muted }) +
      para(484, 420, 'e.g. a state-owned railway, water supplier or postal service', 362, { size: 17, fill: C.ink, italic: true })) +
    rect(30, 575, 840, 125, { fill: C.cream, edge: C.olive }) +
    tx(54, 610, 'Do not mix up the names', { size: 19, weight: 700, fill: C.olive }) +
    tx(54, 644, 'Public limited company: private sector, owned by shareholders', { size: 18 }) +
    tx(54, 676, 'Public corporation: public sector, owned by the government', { size: 18 });
  add('01-private-public-sector',
    svg(900, 730, 'Private sector or public sector?', body),
    'Two columns. The private sector is owned by individuals, partners, members or shareholders, usually aims for profit and includes sole traders, partnerships, cooperatives and private and public limited companies. The public sector is owned by the government, usually aims to provide a service and includes public corporations.',
    'Who owns the enterprise decides its sector; a public limited company is still in the private sector.',
    '## How do private and public sector enterprises differ? (2.1.1)');
}

// 02 Five private sector forms
{
  const rows = [
    ['Sole trader', 'One owner', 'Capital from the owner’s savings and borrowing', 'Unlimited liability', 'u'],
    ['Partnership', 'Two or more partners', 'Agreement sets out each partner’s share', 'Unlimited liability (ordinary partnership)', 'u'],
    ['Cooperative', 'Members (customers, workers, producers)', 'Profits shared among members or reinvested', 'One member, one vote', 'c'],
    ['Private limited company', 'Shareholders, usually family or friends', 'Shares cannot be offered to the public', 'Limited liability', 'l'],
    ['Public limited company', 'Shareholders from the public', 'Shares sold to the public, usually on a stock exchange', 'Limited liability', 'l'],
  ];
  let body = '';
  rows.forEach(([name, own, cap, chip, k], i) => {
    const y = 110 + i * 106;
    body += panel(30, y, 840, 94);
    body += para(52, y + (nl(name, 190, 20) > 1 ? 40 : 54), name, 190, { size: 20, weight: 700 });
    body += tx(262, y + 36, own, { size: 17, weight: 600 });
    body += para(262, y + 63, cap, 350, { size: 16, fill: C.muted });
    const fill = k === 'u' ? '#f3d9c8' : k === 'l' ? C.teal : C.cream;
    const edge = k === 'u' ? C.rust : k === 'l' ? C.tealDark : C.olive;
    body += pill(645, y + 17, 205, 60, wrap(chip, 190, 16), { fill, edge, size: 16, rx: 12 });
  });
  body += tx(450, 668, 'Unlimited: personal possessions can be used to pay business debts.', { size: 17, anchor: 'middle', fill: C.rust, weight: 600 });
  body += tx(450, 698, 'Limited: shareholders can lose only what they invested.', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  add('02-private-sector-forms',
    svg(900, 725, 'The five private sector forms', body),
    'Five rows comparing sole trader, partnership, cooperative, private limited company and public limited company by owners, how capital and profits are handled, and liability. Sole traders and ordinary partners have unlimited liability, cooperative members have one vote each, and shareholders in both kinds of limited company have limited liability.',
    'Liability changes from unlimited to limited once the business becomes a company with shareholders.',
    '## What are the features of each type of private sector enterprise? (2.1.2)');
}

// 03 Public corporation reasons (hub)
{
  const cx = 310, cy = 280, cw = 280, ch = 180;
  const card = (x, y, head, txt) => panel(x, y, 260, 150) + para(x + 18, y + 36, head, 225, { size: 19, weight: 700 }) +
    para(x + 18, y + 36 + nl(head, 225, 19) * LH(19) + 4, txt, 225, { size: 16, fill: C.muted });
  let body = rect(cx, cy, cw, ch, { fill: C.cream, edge: C.ink, sw: 3 }) +
    tx(cx + cw / 2, cy + 42, 'Public corporation', { size: 22, weight: 700, anchor: 'middle' }) +
    tl(cx + cw / 2, cy + 74, ['Owned by the government', 'Run by a board the', 'government appoints', 'Reports to a minister'], { size: 16, anchor: 'middle', fill: C.muted }, 26);
  body += card(30, 110, 'Essential services', 'Water, electricity or post for everyone at an affordable price');
  body += card(30, 295, 'Avoid waste', 'Activities wasteful to duplicate, such as a national rail network');
  body += card(30, 480, 'Loss-making areas', 'Services where private firms would make a loss, e.g. remote rural areas');
  body += card(610, 110, 'Strategic or security reasons', 'Such as control of energy supply');
  body += card(610, 295, 'Protect jobs', 'In an important industry that might otherwise close');
  body += rect(610, 480, 260, 150, { fill: C.tealLight, edge: C.tealDark }) +
    para(628, 530, 'Aim: serve the public rather than maximise profit', 225, { size: 19, weight: 700, fill: C.tealDark });
  body += arrow(290, 220, 335, 273) + arrow(290, 370, 302, 370) + arrow(290, 520, 335, 467) + arrow(610, 220, 565, 273) + arrow(610, 370, 598, 370);
  add('03-public-corporation-reasons',
    svg(900, 660, 'Why governments run public corporations', body),
    'A central box describes a public corporation: owned by the government, run by a board it appoints and reporting to a minister. Five reasons point into it: essential services, avoiding wasteful duplication, loss-making areas, strategic or security reasons, and protecting jobs.',
    'Public corporations exist to serve the public where profit alone would not.',
    '## What are public corporations and why do they exist? (2.1.2)');
}

// 04 Matching ownership to situation
{
  const rows = [
    ['A plumber starting alone with little capital', 'Sole trader', 'Cheap, quick, full control; low liability risk for a small service business'],
    ['Two architects combining skills', 'Partnership', 'Shared capital and expertise; an agreement sets out profit shares'],
    ['Fifty fishermen wanting a shared cold store and better prices', 'Cooperative', 'Members share costs and gain bargaining power, one vote each'],
    ['A family bakery opening a third shop and borrowing heavily', 'Private limited company', 'Limited liability protects family homes; family keeps the shares'],
    ['An airline needing very large sums for new aircraft', 'Public limited company', 'Can raise large amounts by selling shares to the public'],
  ];
  let body = tx(195, 128, 'Situation', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + tx(655, 128, 'Suitable form and reason', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  rows.forEach(([sit, form, why], i) => {
    const y = 145 + i * 112;
    body += panel(30, y, 330, 98) + para(50, y + (nl(sit, 290, 17) > 2 ? 30 : nl(sit, 290, 17) > 1 ? 42 : 55), sit, 290, { size: 17 });
    body += arrow(370, y + 49, 428, y + 49);
    body += rect(440, y, 430, 98, { fill: i % 2 ? C.cream : C.tealLight, edge: i % 2 ? C.olive : C.tealDark });
    body += tx(460, y + 34, form, { size: 19, weight: 700, fill: i % 2 ? C.olive : C.tealDark });
    body += para(460, y + 62, why, 395, { size: 16, fill: C.ink });
  });
  add('04-ownership-matching',
    svg(900, 715, 'Which form suits which situation?', body),
    'Five situations each lead to a suitable form of ownership: a lone plumber to a sole trader, two architects to a partnership, fifty fishermen to a cooperative, a growing family bakery to a private limited company, and an airline needing large sums to a public limited company.',
    'Choose the form whose capital, control and liability fit the scenario, and give the reason.',
    '## Which type of ownership suits which situation? (2.1.2)');
}

// 05 Multinational company
{
  let body = panel(30, 110, 380, 300) + tx(54, 148, 'Why MNCs exist', { size: 21, weight: 700 });
  body += list(54, 186, ['Reach new markets abroad', 'Lower costs: cheaper labour, land or energy', 'Be close to raw materials', 'Avoid trade barriers such as tariffs', 'Spread risk across economies'], 340, { size: 17, gap: 12, markColor: C.tealDark }).s;
  // HQ and operations
  body += pill(545, 115, 230, 56, ['Headquarters', 'in the home country'], { fill: C.cream, size: 16 });
  body += rect(435, 225, 420, 130, { fill: C.tealLight, edge: C.tealDark, dash: '9 7' });
  body += tx(645, 340, 'Operations in other (host) countries', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  const ops = ['Factory', 'Outlet', 'Factory'];
  ops.forEach((o, i) => { const x = 455 + i * 130; body += pill(x, 258, 115, 46, o, { fill: C.panel, size: 17 }); body += arrow(660, 171, x + 57, 254, { w: 3 }); });
  body += parrow('M832,281 C888,272 885,150 782,143', { color: C.rust, marker: 'ahR', w: 3, dash: '8 6' });
  body += line(600, 385, 650, 385, { color: C.rust, w: 3, dash: '8 6' }) + tx(662, 391, 'profits may be sent home', { size: 16, fill: C.rust, weight: 600 });
  // impacts
  const pos = ['Creates jobs and trains workers', 'Brings investment and new technology', 'Raises export earnings and tax revenue', 'Improves roads and power supply'];
  const neg = ['Profits may be sent to the home country', 'Local firms may be forced out', 'May pay low wages or use resources unsustainably', 'Can influence government; may leave suddenly'];
  body += panel(30, 425, 410, 265) + tx(54, 462, 'Positive for the host country', { size: 19, weight: 700, fill: C.tealDark });
  body += list(54, 500, pos, 370, { size: 17, gap: 14, mark: 'tick' }).s;
  body += panel(460, 425, 410, 265) + tx(484, 462, 'Negative for the host country', { size: 19, weight: 700, fill: C.rust });
  body += list(484, 500, neg, 370, { size: 17, gap: 14, mark: 'cross' }).s;
  add('05-multinational-company',
    svg(900, 720, 'How a multinational company works', body),
    'Headquarters in the home country links to factories and outlets in host countries, with profits possibly flowing back home. Five reasons for MNCs are listed, then four positive and four negative impacts on a host country.',
    'An MNC brings jobs and investment to a host country but may send profits home and push out local firms.',
    '## What are multinational companies? (2.1.3)');
}

// 06 Franchise
{
  let body = pill(30, 120, 240, 90, ['Franchisor', 'owns the brand and model'], { fill: C.cream, size: 17 });
  body += pill(630, 120, 240, 90, ['Franchisee', 'owns and runs the outlet'], { fill: C.tealLight, size: 17 });
  body += arrow(282, 150, 618, 150, { color: C.tealDark, marker: 'ahT', w: 4 });
  body += tl(450, 116, ['brand, products or recipes,', 'training and national advertising'], { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }, 19);
  body += arrow(618, 186, 282, 186, { color: C.olive, marker: 'ahO', w: 4 });
  body += tx(450, 218, 'initial fee + royalty (share of revenue)', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  body += tx(450, 262, 'The franchisee must follow the franchisor’s rules on layout, prices and suppliers.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  // 2x2 grid
  const gx = 190, cw = 335, top = 300;
  body += tx(gx + cw / 2, top + 22, 'Advantages', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += tx(gx + cw + 10 + cw / 2, top + 22, 'Disadvantages', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  const cells = [
    ['Franchisee', ['Lower risk with a known brand', 'Training and support', 'National advertising'], ['Initial fee and royalties', 'Little freedom over products or prices', 'Agreement may not be renewed']],
    ['Franchisor', ['Rapid growth using franchisees’ capital', 'Income from fees and royalties'], ['Less direct control', 'One poor franchisee can damage the brand', 'Shares profit']],
  ];
  cells.forEach(([who, adv, dis], r) => {
    const y = top + 38 + r * 165;
    body += pill(30, y, 150, 150, who, { fill: r ? C.cream : C.tealLight, size: 18, rx: 14 });
    body += panel(gx, y, cw, 150) + list(gx + 18, y + 38, adv, cw - 30, { size: 16, gap: 10, mark: 'tick' }).s;
    body += panel(gx + cw + 10, y, cw, 150) + list(gx + cw + 28, y + 38, dis, cw - 30, { size: 16, gap: 10, mark: 'cross' }).s;
  });
  add('06-franchise',
    svg(900, 690, 'How a franchise works', body),
    'The franchisor gives the franchisee its brand, products or recipes, training and advertising; the franchisee pays an initial fee and a royalty. A grid sets out the advantages and disadvantages for the franchisee and for the franchisor.',
    'Always say whether an advantage belongs to the franchisor or the franchisee.',
    '## What are franchises? (2.1.4)');
}

// 07 Location priorities for three businesses
{
  const biz = [
    ['Cement works', ['Raw materials', 'Transport'], 'Limestone is heavy and costly to move.', C.tealLight],
    ['Hair salon', ['Markets', 'Competition'], 'Customers visit in person.', C.cream],
    ['Online clothing retailer', ['Warehousing', 'Logistics', 'Wi-fi'], 'It delivers, so nearness to customers matters less.', C.tealLight],
  ];
  let body = '';
  biz.forEach(([name, top, why, fill], i) => {
    const x = 30 + i * 285;
    body += panel(x, 110, 270, 380) + para(x + 135, nl(name, 240, 21) > 1 ? 143 : 155, name, 240, { size: 21, weight: 700, anchor: 'middle' });
    body += tx(x + 135, 212, 'Puts first:', { size: 16, anchor: 'middle', fill: C.muted });
    top.forEach((f, j) => { body += pill(x + 30, 230 + j * 54, 210, 42, f, { fill, size: 17 }); });
    body += line(x + 24, 402, x + 246, 402, { color: C.panelEdge, w: 2 });
    body += para(x + 135, 434, why, 230, { size: 16, anchor: 'middle', fill: C.ink, italic: true });
  });
  body += tx(450, 530, 'Physical businesses weigh nine factors; ecommerce businesses weigh four.', { size: 17, anchor: 'middle', fill: C.muted });
  add('07-location-priorities',
    svg(900, 560, 'Same factors, different priorities', body),
    'Three businesses rank location factors differently. A cement works puts raw materials and transport first, a hair salon puts markets and competition first, and an online clothing retailer puts warehousing, logistics and wi-fi first.',
    'The right location factors depend on what the business does and how it reaches customers.',
    '## How do enterprises choose a location? (2.1.5)');
}
