import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-commerce-0715-trading-documents';
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

// 01 Dalia's money trail
{
  const cards = [
    ['Invoice', [['20 chairs at $45', '900.00'], ['Less trade discount 20% (0.20 × 900)', '− 180.00'], ['Invoice total', '720.00']], 'Owed: $720.00', C.cream],
    ['Credit note', [['2 damaged chairs: 2 × 45', '90.00'], ['Less trade discount 20%', '− 18.00'], ['Credit note value', '72.00']], 'Owed: $648.00', '#f3d9c8'],
    ['Statement of account', [['3rd  Invoice (debit)', '720.00'], ['9th  Credit note (credit)', '− 72.00'], ['Balance owed', '648.00']], 'Owed: $648.00', C.tealLight],
    ['Payment within 14 days', [['Balance', '648.00'], ['Less cash discount 5% (0.05 × 648)', '− 32.40'], ['Dalia pays', '615.60']], 'Then: receipt', C.mustard],
  ];
  let body = '';
  cards.forEach(([h, rows, bal, fill], i) => {
    const y = 110 + i * 138;
    body += rect(30, y, 620, 124, { fill: C.panel, edge: C.panelEdge }) + rect(30, y, 14, 124, { fill, edge: fill, rx: 4 });
    body += tx(60, y + 30, h, { size: 19, weight: 700 });
    rows.forEach(([a, b], j) => {
      const yy = y + 58 + j * 26, last = j === 2;
      body += tx(60, yy, a, { size: 16, weight: last ? 700 : 400, fill: last ? C.ink : C.muted }) + tx(630, yy, b, { size: 16, weight: last ? 700 : 500, anchor: 'end' });
    });
    body += line(60, y + 92, 630, y + 92, { color: C.panelEdge, w: 1.5 });
    body += pill(680, y + 32, 190, 60, bal, { fill, size: 17 });
    if (i < 3) body += arrow(775, y + 96, 775, y + 166, { w: 3 });
  });
  body += rect(30, 666, 840, 100, { fill: C.cream, edge: C.olive });
  body += tx(54, 698, 'Trade discount: on the invoice, because Dalia buys as a business.', { size: 16 });
  body += tx(54, 724, 'Cash discount: only if she pays within 14 days.', { size: 16 });
  body += tx(54, 750, 'Credit note: also net of trade discount, as she was never charged the full $45.', { size: 16 });
  add('01-dalia-money-trail',
    svg(900, 790, 'Dalia’s chairs: the figures on each document', body),
    'Four document cards. Invoice: 20 chairs at $45 = $900, less 20% trade discount of $180, total $720. Credit note: 2 chairs = $90 less $18, value $72. Statement: 720 − 72 leaves $648 owed. Paying within 14 days: 5% cash discount of $32.40, so Dalia pays $615.60.',
    'Take off trade discount first, then cash discount only if payment is made in time (invented figures).',
    '## Worked example: the figures on the documents (invented figures)');
}

// 02 Four international documents
{
  const d = [
    ['Certificate of origin', 'States the country where the goods were made', 'Customs decide what duty applies and whether goods may enter', '', C.cream],
    ['Bill of lading', 'Issued by the shipping company: receipt, contract of carriage evidence', 'The holder can claim the goods at the destination port', 'Document of title: YES', C.tealLight],
    ['Air waybill', 'Issued by the airline: receipt, contract of carriage evidence', 'Goods arrive quickly and are released to the named consignee', 'Document of title: NO', C.tealLight],
    ['Documentary credit', 'Importer’s bank promises to pay once agreed documents are presented', 'Reduces the risk of non-payment', '', C.cream],
  ];
  let body = '';
  d.forEach(([n, what, why, tag, fill], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 270;
    body += panel(x, y, 410, 255) + rect(x, y, 410, 50, { fill, edge: C.panelEdge, rx: 14 }) + tx(x + 20, y + 33, n, { size: 20, weight: 700 });
    body += tx(x + 20, y + 80, 'What it is', { size: 15, weight: 700, fill: C.muted }) + para(x + 20, y + 104, what, 370, { size: 16 });
    body += tx(x + 20, y + 168, 'Why it is needed', { size: 15, weight: 700, fill: C.muted }) + para(x + 20, y + 192, why, 370, { size: 16 });
    if (tag) body += pill(x + 205, y + 9, 190, 32, tag, { fill: tag.endsWith('YES') ? C.teal : '#f3d9c8', edge: tag.endsWith('YES') ? C.tealDark : C.rust, size: 14 });
  });
  body += tx(450, 680, 'Sea journeys are long and goods may be sold at sea, so only the bill of lading carries title.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('02-international-documents',
    svg(900, 705, 'Four documents of international trade', body),
    'Four cards: the certificate of origin states where goods were made for customs; the bill of lading is a receipt, contract evidence and document of title for sea freight; the air waybill is a receipt and contract evidence for air freight but not a document of title; documentary credit is a bank’s promise to pay the exporter.',
    'Both carriage documents prove the goods were received, but only the bill of lading is a document of title.',
    '## What are the documents of international trade? (2.5.2)');
}

// 03 Documentary credit flow (swimlanes)
{
  const L = { exp: 120, ship: 340, bank: 560, imp: 780 };
  let body = '';
  [['exp', 'Exporter', C.cream], ['ship', 'Shipping company', C.panel], ['bank', 'Importer’s bank', C.tealLight], ['imp', 'Importer (buyer)', C.cream]].forEach(([k, n, f]) => {
    body += pill(L[k] - 100, 110, 200, 52, n, { fill: f, size: 17 }) + line(L[k], 162, L[k], 590, { color: C.panelEdge, w: 2.5, dash: '7 6' });
  });
  const steps = [
    ['bank', 'exp', 'promises to pay once documents are presented', C.tealDark, 'ahT'],
    ['exp', 'ship', 'ships the goods', C.ink, 'ah'],
    ['ship', 'exp', 'bill of lading', C.ink, 'ah'],
    ['exp', 'bank', 'presents the agreed documents', C.ink, 'ah'],
    ['bank', 'exp', 'pays the exporter', C.olive, 'ahO'],
    ['bank', 'imp', 'bill of lading passed to the buyer', C.ink, 'ah'],
    ['imp', 'ship', 'claims the goods at the port', C.ink, 'ah'],
  ];
  steps.forEach(([a, b, lab, col, mk], i) => {
    const y = 214 + i * 54, x1 = L[a], x2 = L[b], dir = x2 > x1 ? 1 : -1;
    body += arrow(x1 + dir * 4, y, x2 - dir * 8, y, { color: col, marker: mk, w: 3.5 });
    const mid = (x1 + x2) / 2;
    body += badge(Math.min(x1, x2) + 22, y - 18, 13, String(i + 1), C.mustard);
    body += tx(Math.min(x1, x2) + 42, y - 11, lab, { size: 15, weight: 600, fill: col });
  });
  body += rect(30, 610, 840, 64, { fill: C.cream, edge: C.olive });
  body += tx(450, 649, 'The exporter relies on a bank, not only on an unknown buyer abroad.', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  add('03-documentary-credit',
    svg(900, 700, 'How documentary credit protects the exporter', body),
    'Four lanes: exporter, shipping company, importer’s bank and importer. The bank promises to pay; the exporter ships the goods and receives a bill of lading; the exporter presents the documents and the bank pays; the bill of lading passes to the buyer, who claims the goods at the port.',
    'Payment depends on presenting the agreed documents, so the risk of non-payment falls.',
    '## What are the documents of international trade? (2.5.2)');
}

// 04 Online ordering: eight stages and the paper they replace
{
  const st = [['Browse', ''], ['Select: add to basket', 'replaces the order'], ['Log in, create account or guest', ''], ['Enter delivery details', ''], ['Pay securely', ''], ['Order confirmation email', 'replaces the receipt'], ['Dispatch notification and tracking', 'replaces the signed'], ['Receive the order', 'delivery note']];
  let body = '';
  st.forEach(([s, rep], i) => {
    const col = i < 4 ? 0 : 1, row = i % 4;
    const x = 30 + col * 430, y = 110 + row * 100;
    body += panel(x, y, 410, 84, rep ? C.tealLight : C.panel, rep ? C.tealDark : C.panelEdge) + badge(x + 36, y + 42, 20, String(i + 1), C.cream);
    body += para(x + 70, y + (nl(s, 320, 18) > 1 ? 36 : 49), s, 320, { size: 18, weight: 600 });
    if (i < 3 || (i >= 4 && i < 7)) body += line(x + 36, y + 64, x + 36, y + 120, { w: 2.5 });
  });
  body += rect(30, 520, 840, 120, { fill: C.cream, edge: C.olive }) + tx(54, 554, 'Each stage replaces a paper document', { size: 18, weight: 700, fill: C.olive });
  body += tx(54, 584, 'Basket and checkout → the order', { size: 16 }) + tx(54, 610, 'Confirmation email → the receipt', { size: 16 });
  body += tx(470, 584, 'Tracking and electronic proof of', { size: 16 }) + tx(470, 610, 'delivery → the signed delivery note', { size: 16 });
  add('04-online-ordering',
    svg(900, 665, 'From browsing to receiving an online order', body),
    'Eight numbered stages: browse, select into a basket, log in or check out as a guest, enter delivery details, pay securely, receive an order confirmation, receive dispatch notification with tracking, and receive the order. The basket replaces the paper order, the confirmation replaces the receipt and tracking replaces the delivery note.',
    'Online ordering follows the same steps as paper trading, with electronic records instead of documents.',
    '## How does the online ordering process work? (2.5.3)');
}
