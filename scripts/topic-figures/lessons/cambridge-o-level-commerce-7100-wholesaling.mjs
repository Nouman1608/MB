import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-commerce-7100-wholesaling';
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

// 01 Breaking bulk
{
  let body = '';
  const box = (x, y, s = 16) => `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.5"/>`;
  body += panel(30, 110, 250, 300) + tx(155, 146, 'Manufacturer', { size: 20, weight: 700, anchor: 'middle' });
  for (let r = 0; r < 6; r++) for (let c = 0; c < 8; c++) body += box(70 + c * 21, 175 + r * 21);
  body += tx(155, 330, 'sells by the pallet', { size: 16, anchor: 'middle', fill: C.muted }) + tx(155, 356, '2,000 packets', { size: 19, weight: 700, anchor: 'middle' });
  body += arrow(288, 260, 330, 260, { w: 4 });
  body += rect(340, 110, 250, 300, { fill: C.cream, edge: C.olive }) + tx(465, 146, 'Wholesaler', { size: 20, weight: 700, anchor: 'middle', fill: C.olive });
  for (let k = 0; k < 6; k++) { const x = 372 + (k % 3) * 66, y = 180 + Math.floor(k / 3) * 66; for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) body += box(x + c * 21, y + r * 21); }
  body += tx(465, 330, 'splits it into cases', { size: 16, anchor: 'middle', fill: C.muted }) + tx(465, 356, 'breaks bulk', { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
  body += arrow(598, 260, 640, 260, { w: 4 });
  body += panel(650, 110, 220, 300) + tx(760, 146, 'Corner shop', { size: 20, weight: 700, anchor: 'middle' });
  for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) body += box(733 + c * 21, 210 + r * 21);
  body += tx(760, 330, 'wants perhaps', { size: 16, anchor: 'middle', fill: C.muted }) + tx(760, 356, '48 packets', { size: 19, weight: 700, anchor: 'middle' });
  body += rect(30, 430, 840, 80, { fill: C.tealLight, edge: C.tealDark });
  body += tx(450, 464, 'The most important function: without it, small retailers', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += tx(450, 490, 'could not buy from large producers at all.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('01-breaking-bulk',
    svg(900, 535, 'Breaking bulk', body),
    'A manufacturer sells biscuits by the pallet of 2,000 packets; the wholesaler splits the pallet into cases; a corner shop buys perhaps 48 packets.',
    'Breaking bulk lets small retailers buy from large producers.',
    '## The functions of the wholesaler explained');
}

// 02 Nine functions
{
  const f = [
    ['Breaking bulk', 'pallets split into cases'],
    ['Warehousing', 'stores goods between production and sale'],
    ['Bearing risk', 'damage, theft, going out of date or fashion'],
    ['Financing', 'pays makers promptly; gives retailers credit'],
    ['Transport', 'delivers several shops’ orders on one route'],
    ['Providing a range', 'many makers’ goods in one visit or order'],
    ['Information and advice', 'what sells, to makers; new lines, to shops'],
    ['Preparing goods', 'grade, pack, label, price-mark, own brand'],
    ['Steady supplies and prices', 'store when plentiful, release when short'],
  ];
  let body = '';
  f.forEach(([n, d], i) => {
    const x = 30 + (i % 3) * 285, y = 110 + Math.floor(i / 3) * 150;
    body += panel(x, y, 270, 135, i === 0 ? C.cream : C.panel, i === 0 ? C.olive : C.panelEdge) + badge(x + 32, y + 36, 17, String(i + 1), C.cream);
    body += para(x + 60, y + 43, n, 200, { size: 17, weight: 700 });
    body += para(x + 20, y + 88, d, 235, { size: 16, fill: C.muted });
  });
  add('02-wholesaler-functions',
    svg(900, 570, 'Nine functions of the wholesaler', body),
    'Nine tiles: breaking bulk, warehousing, bearing risk, financing, transport, providing a range, information and advice, preparing goods for sale, and keeping supplies and prices steady.',
    'Name the function, then explain why it matters to the manufacturer or retailer in the question.',
    '## The functions of the wholesaler explained');
}

// 03 Importance to each side
{
  let body = pill(355, 290, 190, 80, 'Wholesaler', { fill: C.mustard, size: 21 });
  const side = (x, head, fill, edge, items) => {
    let s = rect(x, 110, 310, 520, { fill, edge }) + tx(x + 155, 146, head, { size: 20, weight: 700, anchor: 'middle', fill: edge });
    items.forEach((it, i) => {
      const y = 166 + i * 76;
      s += rect(x + 14, y, 282, 66, { fill: C.panel, edge: C.panelEdge, rx: 10 }) + para(x + 28, y + (nl(it, 255, 16) > 1 ? 28 : 39), it, 255, { size: 16 });
    });
    return s;
  };
  body += side(30, 'To the manufacturer', C.tealLight, C.tealDark, ['Large orders: long runs, lower unit costs', 'Saves storage space and costs', 'Risk of goods not selling removed', 'Paid promptly: better cash flow', 'Reaches thousands of retailers', 'Market information from retailers']);
  body += side(560, 'To the retailer', C.cream, C.olive, ['Small quantities: less capital tied up', 'Saves storage: restock quickly', 'Many makers’ goods in one place', 'May get credit and delivery', 'Advice on new products and displays', 'Steadier prices for customers']);
  body += arrow(350, 330, 344, 330, { w: 3 }) + arrow(550, 330, 556, 330, { w: 3 });
  body += tx(450, 665, 'Answer for the side the question names.', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  add('03-importance-each-side',
    svg(900, 690, 'Why the wholesaler matters to each side', body),
    'Six benefits to the manufacturer, such as large orders, saved storage, removed risk and prompt payment, and six to the retailer, such as small quantities, quick restocking, wide choice, credit and advice.',
    'The manufacturer and the retailer gain different things from the same wholesaler.',
    '## Why the wholesaler is important to each side');
}

// 04 Fewer transactions: 5 x 20 vs 5 + 20
{
  const panelSet = (y0, title, withW) => {
    let s = panel(30, y0, 840, 290) + tx(54, y0 + 36, title, { size: 19, weight: 700, fill: withW ? C.tealDark : C.rust });
    const mx = (i) => 210 + i * 120, sx = (j) => 72 + j * 40;
    const my = y0 + 75, sy = y0 + 230;
    if (!withW) {
      for (let i = 0; i < 5; i++) for (let j = 0; j < 20; j++) s += line(mx(i), my + 14, sx(j), sy - 10, { color: C.muted, w: 0.8 });
    } else {
      for (let i = 0; i < 5; i++) s += line(mx(i), my + 14, 450, y0 + 140, { color: C.tealDark, w: 2.5 });
      for (let j = 0; j < 20; j++) s += line(450, y0 + 172, sx(j), sy - 10, { color: C.tealDark, w: 1.8 });
      s += pill(380, y0 + 136, 140, 40, 'Wholesaler', { fill: C.mustard, size: 16 });
    }
    for (let i = 0; i < 5; i++) s += `<rect x="${mx(i) - 22}" y="${my - 14}" width="44" height="28" rx="5" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
    for (let j = 0; j < 20; j++) s += `<rect x="${sx(j) - 13}" y="${sy - 10}" width="26" height="22" rx="4" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>`;
    s += tx(846, y0 + 36, withW ? '5 + 20 = 25 sets' : '5 × 20 = 100 sets', { size: 22, weight: 700, anchor: 'end', fill: withW ? C.tealDark : C.rust });
    s += tx(54, y0 + 268, '5 manufacturers (teal) · 20 shops (cream)', { size: 15, fill: C.muted });
    return s;
  };
  let body = panelSet(110, 'Without a wholesaler', false) + panelSet(415, 'With a wholesaler', true);
  body += rect(30, 720, 840, 70, { fill: C.cream, edge: C.olive });
  body += tx(450, 762, '75 fewer sets of orders, deliveries and invoices (invented figures)', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  add('04-fewer-transactions',
    svg(900, 815, 'A wholesaler cuts the number of transactions', body),
    'Five manufacturers and twenty shops. Without a wholesaler every manufacturer deals with every shop: 5 × 20 = 100 sets of orders, deliveries and invoices. With a wholesaler each deals only with it: 5 + 20 = 25 sets, 75 fewer.',
    'Multiplying becomes adding: 100 transactions fall to 25 when a wholesaler sits in the middle.',
    '## Worked example 1: fewer transactions');
}

// 05 Delivered vs cash and carry
{
  const col = (x, head, fill, edge, rows, total, when) => {
    let s = panel(x, 110, 410, 300) + rect(x, 110, 410, 52, { fill, edge: C.panelEdge, rx: 14 }) + tx(x + 205, 144, head, { size: 21, weight: 700, anchor: 'middle' });
    rows.forEach(([a, b], i) => { const y = 202 + i * 40; s += tx(x + 22, y, a, { size: 17 }) + tx(x + 388, y, b, { size: 17, anchor: 'end', weight: 600 }); });
    s += line(x + 22, 290, x + 388, 290, { color: C.panelEdge, w: 1.5 });
    s += tx(x + 22, 324, 'Total', { size: 19, weight: 700 }) + tx(x + 388, 324, total, { size: 22, weight: 700, anchor: 'end', fill: edge });
    s += pill(x + 22, 346, 366, 46, when, { fill, size: 17 });
    return s;
  };
  let body = col(30, 'Delivered wholesaler', C.tealLight, C.tealDark, [['50 cases × $12.00', '600'], ['Delivery', 'free']], '$600', '30 days’ credit');
  body += col(460, 'Cash and carry', C.cream, C.olive, [['50 cases × $11.20', '560'], ['Own transport', '+ 25']], '$585', 'Pay at once; a morning travelling');
  body += rect(30, 430, 840, 110, { fill: C.mustard, edge: C.ink });
  body += tx(450, 468, 'Cash and carry saves 600 − 585 = $15', { size: 21, weight: 700, anchor: 'middle' });
  body += tx(450, 506, 'A shop short of cash might still prefer the delivered wholesaler’s credit.', { size: 17, anchor: 'middle', weight: 600 });
  add('05-cash-and-carry-comparison',
    svg(900, 565, '50 cases of soft drinks: delivered or collected?', body),
    'Delivered wholesaler: 50 cases × $12.00 = $600 with free delivery and 30 days’ credit. Cash and carry: 50 × $11.20 = $560 plus $25 own transport = $585, paid at once. Cash and carry saves $15.',
    'Cash and carry is $15 cheaper here, but the shop pays at once and gives up a morning (invented figures).',
    '## Cash and carry');
}

// 06 Voluntary chain
{
  let body = pill(345, 115, 210, 64, 'Wholesaler', { fill: C.mustard, size: 20 });
  for (let j = 0; j < 4; j++) {
    const x = 60 + j * 205;
    body += parrow(`M450,183 C450,215 ${x + 80},205 ${x + 80},236`, { color: C.tealDark, marker: 'ahT', w: 3 });
    body += pill(x, 240, 160, 50, 'Independent shop', { fill: C.panel, size: 15 });
  }
  body += rect(60, 300, 775, 44, { fill: C.cream, edge: C.olive, rx: 10 }) + tx(448, 328, 'Common name and logo · joint advertising · help with layout and training', { size: 16, weight: 600, anchor: 'middle', fill: C.olive });
  body += tx(450, 372, 'Each shop is still independently owned.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const card = (x, head, col, mark, items) => panel(x, 395, 270, 200) + tx(x + 20, 430, head, { size: 18, weight: 700, fill: col }) + list(x + 20, 470, items, 240, { size: 16, gap: 12, mark }).s;
  body += card(30, 'Retailers gain', C.tealDark, 'tick', ['Lower prices from combined buying', 'A recognised name', 'Professional advertising']);
  body += card(315, 'Wholesaler gains', C.tealDark, 'tick', ['Guaranteed, regular orders', 'Can plan stock and compete with chains’ direct buying']);
  body += card(600, 'Retailers lose', C.rust, 'cross', ['Less freedom over what to stock', 'A fee or minimum purchase may apply']);
  add('06-voluntary-chain',
    svg(900, 620, 'How a voluntary chain works', body),
    'A wholesaler supplies a group of independent shops that trade under a common name and logo, with joint advertising and help with layout and training. Retailers gain lower prices and a recognised name; the wholesaler gains regular orders; retailers lose some freedom and may pay a fee.',
    'A voluntary chain gives independent shops chain-store buying power while they stay independently owned.',
    '## Voluntary chains');
}

// 07 Discuss answer structure
{
  let body = rect(30, 110, 410, 200, { fill: C.tealLight, edge: C.tealDark }) + tx(235, 146, 'Still needed', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += list(54, 186, ['Breaks bulk: small shops cannot buy by the pallet', 'Credit and delivery help cash flow'], 370, { size: 17, gap: 18, mark: 'tick' }).s;
  body += rect(460, 110, 410, 200, { fill: '#f3d9c8', edge: C.rust }) + tx(665, 146, 'Less needed', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
  body += list(484, 186, ['Some shops order direct from manufacturers’ websites', 'Large online platforms deliver small quantities too'], 370, { size: 17, gap: 18, mark: 'cross' }).s;
  body += arrow(235, 316, 400, 356, { w: 3 }) + arrow(665, 316, 500, 356, { w: 3 });
  body += rect(130, 362, 640, 110, { fill: C.cream, edge: C.olive, sw: 3 }) + tx(450, 398, 'Judgement', { size: 20, weight: 700, anchor: 'middle', fill: C.olive });
  body += para(450, 430, 'Still needed, especially through cash and carry and voluntary chains, which let small retailers compete with large chains.', 580, { size: 17, anchor: 'middle' });
  add('07-discuss-structure',
    svg(900, 500, 'Is the wholesaler still needed?', body),
    'Points for the wholesaler (breaking bulk, credit and delivery) are weighed against counter-points (ordering direct from manufacturers’ websites, online platforms delivering small quantities) to reach a judgement: still needed, especially through cash and carry and voluntary chains.',
    'Points, counter-points, then a judgement linked to small retailers.',
    '## Annotated model answer');
}
