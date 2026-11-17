import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-commerce-7100-commercial-enterprises';
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

// 01 Private or public: the ownership test
{
  let body = rect(30, 110, 410, 300, { fill: C.tealLight, edge: C.tealDark }) + tx(235, 150, 'Private sector', { size: 24, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += para(54, 190, 'Owned by individuals or groups of private investors', 360, { size: 17 });
  body += tx(54, 260, 'Most aim to make a profit', { size: 18, weight: 700, fill: C.tealDark });
  body += pill(54, 300, 362, 80, ['e.g. a giant listed company', 'is still private sector'], { fill: C.panel, size: 16, weight: 600 });
  body += rect(460, 110, 410, 300, { fill: C.cream, edge: C.olive }) + tx(665, 150, 'Public sector', { size: 24, weight: 700, anchor: 'middle', fill: C.olive });
  body += para(484, 190, 'Owned and controlled by the government on behalf of the people', 360, { size: 17 });
  body += tx(484, 260, 'Usually aim to provide a service', { size: 18, weight: 700, fill: C.olive });
  body += pill(484, 300, 362, 80, ['e.g. a small state-run post office', 'is still public sector'], { fill: C.panel, size: 16, weight: 600 });
  body += rect(30, 430, 840, 70, { fill: C.mustard, edge: C.ink });
  body += tx(450, 473, 'The test is ownership, not size.', { size: 21, weight: 700, anchor: 'middle' });
  add('01-private-public-ownership',
    svg(900, 525, 'Private or public sector?', body),
    'Two panels. The private sector is owned by private individuals or investors and mostly aims for profit, so even a giant listed company is private. The public sector is owned and controlled by the government and usually aims to provide a service, so even a small state-run post office is public.',
    'Ownership, not size, decides the sector.',
    '## Private and public sector');
}

// 02 Unlimited vs limited liability (worked example)
{
  let body = panel(30, 110, 410, 470) + tx(235, 148, 'Sole trader: unlimited', { size: 21, weight: 700, anchor: 'middle', fill: C.rust });
  const sc = 0.0105, base = 520;
  const bar = (x, v, fill, lab) => `<rect x="${x}" y="${base - v * sc}" width="90" height="${v * sc}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(x + 45, base - v * sc - 10, lab, { size: 17, weight: 700, anchor: 'middle' });
  body += bar(80, 30000, '#f3d9c8', '$30,000');
  body += `<rect x="250" y="${base - 30000 * sc}" width="90" height="${18000 * sc}" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="250" y="${base - 12000 * sc}" width="90" height="${12000 * sc}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  body += tx(295, base - 30000 * sc - 10, '$30,000', { size: 17, weight: 700, anchor: 'middle' });
  body += tx(295, base - 21000 * sc + 6, '18,000', { size: 16, weight: 700, anchor: 'middle', fill: '#ffffff' }) + tx(295, base - 6000 * sc + 6, '12,000', { size: 16, weight: 700, anchor: 'middle' });
  body += line(60, base, 410, base, { w: 2.5 });
  body += tx(125, base + 24, 'Debts', { size: 16, weight: 600, anchor: 'middle' });
  body += tx(295, base + 24, 'Paid from…', { size: 16, weight: 600, anchor: 'middle' });
  body += `<rect x="350" y="${base - 12000 * sc - 10}" width="14" height="14" fill="${C.teal}" stroke="${C.ink}"/>` + tx(370, base - 12000 * sc + 2, 'shop', { size: 15 });
  body += `<rect x="350" y="${base - 30000 * sc + 20}" width="14" height="14" fill="${C.rust}" stroke="${C.ink}"/>` + tx(370, base - 30000 * sc + 32, 'owner’s', { size: 15 }) + tx(370, base - 30000 * sc + 50, 'property', { size: 15 });
  body += panel(460, 110, 410, 470) + tx(665, 148, 'Shareholder: limited', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += pill(500, 190, 330, 70, ['Paid $5,000 for shares', 'in a limited company'], { fill: C.tealLight, size: 17 });
  body += arrow(665, 266, 665, 306, { w: 3 }) + pill(500, 312, 330, 60, 'The company fails', { fill: C.panel, size: 17 });
  body += arrow(665, 378, 665, 418, { w: 3 }) + pill(500, 424, 330, 70, ['Loses at most $5,000', 'personal property safe'], { fill: C.teal, size: 17 });
  body += para(665, 528, 'The company is a separate legal entity.', 360, { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  body += tx(450, 615, 'Sole trader: debts $30,000 − assets $12,000 = $18,000 from personal property (invented figures).', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  add('02-liability-example',
    svg(900, 640, 'What happens when the business fails?', body),
    'Left: a sole trader’s shop owes $30,000 but has assets of only $12,000, so $18,000 must come from the owner’s personal property. Right: a shareholder who paid $5,000 for shares in a failed limited company loses at most that $5,000.',
    'Unlimited liability puts the owner’s possessions at risk; limited liability caps the loss at the investment.',
    '## Features of the five private sector forms');
}

// 03 Five forms compared
{
  const rows = [
    ['Sole trader', 'One person', 'Owner decides alone', 'Owner’s savings, loans', 'Unlimited', 'u'],
    ['Partnership', 'Two or more partners', 'Shared, per partnership agreement', 'Partners’ contributions', 'Usually unlimited', 'u'],
    ['Cooperative', 'Members', 'One vote each, usually', 'Members’ contributions', ['Usually limited', 'if registered'], 'l'],
    ['Private limited company', 'Shareholders, shares sold privately', 'Directors chosen by shareholders', 'Private share sales', 'Limited', 'l'],
    ['Public limited company', 'Shareholders, shares offered to the public', 'Directors; owners and managers often differ', 'Public share issues: largest', 'Limited', 'l'],
  ];
  let body = '';
  [['Owners', 215], ['Control', 400], ['Capital', 580], ['Liability', 795]].forEach(([h, x]) => { body += tx(x, 128, h, { size: 16, weight: 700, fill: C.muted, anchor: h === 'Liability' ? 'middle' : 'start' }); });
  rows.forEach(([n, o, c, cap, lia, k], i) => {
    const y = 142 + i * 100;
    body += panel(30, y, 840, 88);
    body += para(46, y + (nl(n, 155, 18) > 1 ? 36 : 50), n, 155, { size: 18, weight: 700 });
    body += para(215, y + (nl(o, 170, 15) > 1 ? 38 : 50), o, 170, { size: 15 });
    body += para(400, y + (nl(c, 165, 15) > 2 ? 28 : nl(c, 165, 15) > 1 ? 38 : 50), c, 165, { size: 15 });
    body += para(580, y + (nl(cap, 140, 15) > 1 ? 38 : 50), cap, 140, { size: 15, fill: C.muted });
    body += pill(725, y + 14, 140, 60, Array.isArray(lia) ? lia : wrap(lia, 125, 15), { fill: k === 'u' ? '#f3d9c8' : C.teal, edge: k === 'u' ? C.rust : C.tealDark, size: 15, rx: 12 });
  });
  body += tx(450, 660, 'Companies are separate legal entities; sole traders and ordinary partnerships are not.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('03-five-forms-compared',
    svg(900, 685, 'The five private sector forms compared', body),
    'Five rows comparing sole trader, partnership, cooperative, private limited company and public limited company by owners, control, capital and liability. Sole traders and partners usually have unlimited liability; registered cooperatives and companies usually have limited liability.',
    'Owners, control, capital and liability are the four features to compare.',
    '## Features of the five private sector forms');
}

// 04 Public corporations: features and six reasons
{
  let body = rect(30, 110, 300, 450, { fill: C.cream, edge: C.ink }) + tx(180, 148, 'Public corporation', { size: 21, weight: 700, anchor: 'middle' });
  body += list(50, 190, ['Owned by the state', 'Run by a government-appointed board', 'Financed by government and customers', 'Accountable to government and the public', 'Aims to provide a service; often expected to cover costs'], 265, { size: 16, gap: 12, markColor: C.olive }).s;
  const r = [['Essential services', 'water, electricity, railways at affordable prices'], ['Strategic industries', 'energy or defence under national control'], ['Loss-making areas', 'where private firms would make a loss'], ['Avoid a private monopoly', 'exploiting customers'], ['Very large projects', 'more capital than private investors would risk'], ['Protect employment', 'in an important industry']];
  body += tx(605, 132, 'Reasons for public corporations', { size: 18, weight: 700, anchor: 'middle' });
  r.forEach(([h, d], i) => {
    const y = 148 + i * 70;
    body += panel(360, y, 510, 60) + tx(380, y + 26, h, { size: 17, weight: 700, fill: C.tealDark }) + tx(380, y + 49, d, { size: 15, fill: C.muted });
    body += arrow(356, y + 30, 338, y + 30 < 335 ? y + 30 : y + 30, { w: 2.5 });
  });
  add('04-public-corporations',
    svg(900, 585, 'Public corporations: features and reasons', body),
    'Left: features of a public corporation, such as state ownership, a government-appointed board and an aim to provide a service. Right: six reasons for them, including essential services, strategic industries, loss-making areas, avoiding a private monopoly, very large projects and protecting employment.',
    'Public corporations exist where the state wants control, coverage or protection that the market might not give.',
    '## Public corporations');
}

// 05 Choosing the appropriate form
{
  let body = '';
  ['Capital needed?', 'Risk to owners?', 'Control wanted?', 'How many share it?'].forEach((q, i) => {
    body += pill(30 + i * 213, 110, 198, 50, q, { fill: C.cream, size: 16 });
    if (i < 3) body += arrow(30 + i * 213 + 200, 135, 30 + (i + 1) * 213 - 4, 135, { w: 2.5 });
  });
  const rows = [
    ['A tailor starting alone with savings of $3,000', 'Sole trader', 'Little capital; full control; quick to set up'],
    ['Three vets combining skills and equipment', 'Partnership', 'Shared capital and expertise; shared workload'],
    ['A family bakery opening a second branch, no outside owners', 'Private limited company', 'Limited liability; shares stay in the family'],
    ['A cement producer raising millions for a new plant', 'Public limited company', 'Can raise very large capital from the public'],
    ['Fifty coffee growers wanting to sell together', 'Cooperative', 'Share facilities and gain bargaining power'],
  ];
  rows.forEach(([sit, form, why], i) => {
    const y = 185 + i * 100;
    body += panel(30, y, 330, 88) + para(50, y + (nl(sit, 290, 17) > 1 ? 38 : 50), sit, 290, { size: 17 });
    body += arrow(368, y + 44, 428, y + 44);
    body += rect(440, y, 430, 88, { fill: i % 2 ? C.cream : C.tealLight, edge: i % 2 ? C.olive : C.tealDark });
    body += tx(460, y + 34, form, { size: 19, weight: 700, fill: i % 2 ? C.olive : C.tealDark });
    body += para(460, y + 62, why, 395, { size: 16 });
  });
  add('05-appropriate-form',
    svg(900, 700, 'Matching the form to the situation', body),
    'Four questions to ask (capital, risk, control, sharing), then five situations: a tailor with $3,000 suits a sole trader, three vets a partnership, a family bakery a private limited company, a cement producer a public limited company, and fifty coffee growers a cooperative.',
    'Use the details of the situation to justify the form you choose.',
    '## Choosing the appropriate form');
}

// 06 MNC reasons and impacts
{
  let body = panel(30, 110, 840, 215) + tx(54, 146, 'Why MNCs exist', { size: 20, weight: 700 });
  const reasons = ['Reach new markets', 'Cheaper labour, land or raw materials', 'Avoid trade barriers such as tariffs', 'Cut transport costs near customers', 'Spread risk', 'Economies of scale', 'Host-government incentives'];
  body += list(54, 182, reasons.slice(0, 4), 400, { size: 16, gap: 10, markColor: C.tealDark }).s;
  body += list(474, 182, reasons.slice(4), 380, { size: 16, gap: 10, markColor: C.tealDark }).s;
  const pos = ['Jobs and training for local workers', 'New technology and management skills', 'Investment in factories and infrastructure', 'Tax revenue for the government', 'More exports, wider consumer choice'];
  const neg = ['Local firms may be unable to compete', 'Profits may be sent home', 'Low wages or poor conditions', 'Environmental damage, heavy resource use', 'Influence over government; may leave suddenly'];
  body += panel(30, 345, 410, 310) + tx(54, 382, 'Positive for the host country', { size: 19, weight: 700, fill: C.tealDark }) + list(54, 420, pos, 370, { size: 16, gap: 14, mark: 'tick' }).s;
  body += panel(460, 345, 410, 310) + tx(484, 382, 'Negative for the host country', { size: 19, weight: 700, fill: C.rust }) + list(484, 420, neg, 370, { size: 16, gap: 14, mark: 'cross' }).s;
  add('06-mnc-reasons-impacts',
    svg(900, 680, 'Multinationals: why they exist and what they bring', body),
    'Seven reasons MNCs exist, from reaching new markets to host-government incentives, above five positive impacts on a host country, such as jobs, technology and tax revenue, and five negative impacts, such as local firms closing and profits sent home.',
    'An assess question needs impacts on both sides and a judgement linked to the case.',
    '## Multinational companies (MNCs)');
}

// 07 Franchise
{
  let body = pill(30, 120, 240, 90, ['Franchisor', 'owns the brand'], { fill: C.cream, size: 17 });
  body += pill(630, 120, 240, 90, ['Franchisee', 'runs the outlet'], { fill: C.tealLight, size: 17 });
  body += arrow(282, 150, 618, 150, { color: C.tealDark, marker: 'ahT', w: 4 });
  body += tx(450, 136, 'brand name, logo, products and methods', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  body += arrow(618, 186, 282, 186, { color: C.olive, marker: 'ahO', w: 4 });
  body += tx(450, 212, 'initial fee + royalty (often % of sales)', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  body += tx(450, 252, 'The franchisee must follow the franchisor’s rules.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  const gx = 190, cw = 335, top = 285;
  body += tx(gx + cw / 2, top + 22, 'Advantages', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += tx(gx + cw + 10 + cw / 2, top + 22, 'Disadvantages', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  const cells = [
    ['Franchisee', ['Known brand attracts customers', 'Proven model lowers risk', 'Training, national advertising, supplies'], ['Fees and royalties reduce profit', 'Little freedom over products, prices, decor', 'Contract may not be renewed']],
    ['Franchisor', ['Fast expansion with franchisees’ capital', 'Income from fees and royalties', 'Motivated owner-managers'], ['Less direct control over quality', 'One poor outlet can damage the brand', 'Shares profit']],
  ];
  cells.forEach(([who, adv, dis], r) => {
    const y = top + 38 + r * 185;
    body += pill(30, y, 150, 170, who, { fill: r ? C.cream : C.tealLight, size: 18, rx: 14 });
    body += panel(gx, y, cw, 170) + list(gx + 18, y + 38, adv, cw - 30, { size: 16, gap: 10, mark: 'tick' }).s;
    body += panel(gx + cw + 10, y, cw, 170) + list(gx + cw + 28, y + 38, dis, cw - 30, { size: 16, gap: 10, mark: 'cross' }).s;
  });
  add('07-franchise',
    svg(900, 715, 'How a franchise works', body),
    'The franchisor lets the franchisee use its brand name, logo, products and methods in return for an initial fee and a royalty. A grid sets out advantages and disadvantages for the franchisee and for the franchisor.',
    'Say whether each advantage or disadvantage applies to the franchisee or the franchisor.',
    '## Franchises');
}

// 08 Location priorities
{
  const biz = [
    ['Cement works', ['Raw materials', 'Transport'], 'Limestone is heavy and costly to move.', C.tealLight],
    ['City café', ['Markets', 'Competition'], 'Its customers come in person.', C.cream],
    ['Online electronics seller', ['Wi-fi', 'Warehousing', 'Technology specialists', 'Logistics'], 'Little need for passing trade; fast delivery matters.', C.tealLight],
  ];
  let body = '';
  biz.forEach(([name, top, why, fill], i) => {
    const x = 30 + i * 285;
    body += panel(x, 110, 270, 430) + para(x + 135, nl(name, 240, 21) > 1 ? 143 : 155, name, 240, { size: 21, weight: 700, anchor: 'middle' });
    body += tx(x + 135, 212, 'Ranks highest:', { size: 16, anchor: 'middle', fill: C.muted });
    top.forEach((f, j) => { body += pill(x + 25, 230 + j * 54, 220, 42, f, { fill, size: 16 }); });
    body += line(x + 24, 455, x + 246, 455, { color: C.panelEdge, w: 2 });
    body += para(x + 135, 486, why, 230, { size: 16, anchor: 'middle', italic: true });
  });
  body += tx(450, 575, 'Name the two or three factors that matter most, and say why for that business.', { size: 17, anchor: 'middle', fill: C.muted });
  add('08-location-priorities',
    svg(900, 600, 'Same factors, different priorities', body),
    'A cement works ranks raw materials and transport highest, a city café ranks markets and competition, and an online electronics seller needs wi-fi, warehousing, technology specialists and logistics.',
    'Judge which factors matter most for the business in the question.',
    '## Location factors');
}
