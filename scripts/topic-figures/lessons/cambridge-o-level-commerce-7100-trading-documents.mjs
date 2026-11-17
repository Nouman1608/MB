import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-commerce-7100-trading-documents';
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

// 01 Invoice and cash discount
{
  let body = panel(30, 110, 840, 290) + tx(54, 146, 'Invoice: Delta Garments to Lakeview Fashions', { size: 19, weight: 700 });
  const rows = [['40 shirts at $15', '40 × 15', '$600', C.ink], ['Less trade discount 20%', '20% × 600', '− $120', C.rust]];
  body += tx(54, 184, 'Line', { size: 15, weight: 700, fill: C.muted }) + tx(420, 184, 'Working', { size: 15, weight: 700, fill: C.muted }) + tx(846, 184, 'Amount', { size: 15, weight: 700, fill: C.muted, anchor: 'end' });
  rows.forEach(([a, w, v, col], i) => { const y = 222 + i * 44; body += line(54, y - 28, 846, y - 28, { color: C.panelEdge, w: 1.5 }) + tx(54, y, a, { size: 18 }) + tx(420, y, w, { size: 18 }) + tx(846, y, v, { size: 18, weight: 600, anchor: 'end', fill: col }); });
  body += rect(46, 290, 808, 46, { fill: C.cream, edge: C.olive, rx: 10 }) + tx(66, 320, 'Amount due', { size: 19, weight: 700 }) + tx(420, 320, '600 − 120', { size: 18 }) + tx(838, 320, '$480', { size: 21, weight: 700, anchor: 'end' });
  body += tx(54, 372, 'Terms: 5% cash discount if paid within 14 days', { size: 17, italic: true, fill: C.muted });
  body += tx(450, 440, 'Does Lakeview pay within 14 days?', { size: 19, weight: 700, anchor: 'middle' });
  body += parrow('M330,452 C300,470 240,470 235,488', { w: 3 }) + parrow('M570,452 C600,470 660,470 665,488', { w: 3 });
  body += rect(30, 495, 410, 140, { fill: C.tealLight, edge: C.tealDark }) + tx(235, 530, 'Yes', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  body += tx(235, 562, '5% × 480 = $24', { size: 18, anchor: 'middle' }) + tx(235, 600, 'Pays 480 − 24 = $456', { size: 20, weight: 700, anchor: 'middle' });
  body += rect(460, 495, 410, 140, { fill: C.panel, edge: C.panelEdge }) + tx(665, 530, 'No', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
  body += tx(665, 562, 'No cash discount', { size: 18, anchor: 'middle' }) + tx(665, 600, 'Pays $480', { size: 20, weight: 700, anchor: 'middle' });
  body += tx(450, 668, 'Trade discount is always on the invoice; cash discount only rewards prompt payment.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('01-invoice-calculation',
    svg(900, 695, 'The invoice: two kinds of discount', body),
    'An invoice for 40 shirts at $15: $600 less a 20% trade discount of $120 gives $480 due. If Lakeview pays within 14 days it deducts a 5% cash discount of $24 and pays $456; otherwise it pays $480.',
    'Trade discount comes off first; cash discount is taken only if the buyer pays in time (invented figures).',
    '## Worked example 1: the invoice');
}

// 02 Credit note and statement running balance
{
  let body = panel(30, 110, 840, 120) + tx(54, 146, 'Credit note for 4 damaged shirts', { size: 19, weight: 700, fill: C.rust });
  body += tx(54, 182, '4 × $15 = $60, less 20% trade discount ($12)', { size: 18 }) + pill(640, 150, 210, 54, '= $48', { fill: '#f3d9c8', edge: C.rust, size: 21 });
  body += tx(54, 212, 'valued at the price Lakeview was actually charged', { size: 15, fill: C.muted, italic: true });
  const steps = [['Balance brought forward', 200, 200, ''], ['Add invoice', 480, 680, '+'], ['Less credit note', -48, 632, '−'], ['Less payment received', -200, 432, '−']];
  body += tx(450, 268, 'Statement of account: the running balance', { size: 19, weight: 700, anchor: 'middle' });
  const base = 600, k = 0.42;
  steps.forEach(([lab, chg, bal, sgn], i) => {
    const x = 50 + i * 168, w = 120;
    const prev = i ? steps[i - 1][2] : 0;
    const top = base - Math.max(prev, bal) * k, h = Math.abs(bal - prev) * k;
    const fill = i === 0 ? C.teal : chg > 0 ? C.cream : '#f3d9c8';
    body += `<rect x="${x}" y="${top}" width="${w}" height="${h}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
    body += tx(x + w / 2, top - 12, `${sgn}${sgn ? ' ' : ''}$${Math.abs(chg)}`, { size: 18, weight: 700, anchor: 'middle', fill: chg < 0 ? C.rust : C.ink });
    if (i) body += line(x - 48, base - prev * k, x, base - prev * k, { color: C.muted, w: 2, dash: '5 5' });
    body += para(x + w / 2, base + 26, lab, 150, { size: 15, anchor: 'middle', weight: 600 });
  });
  body += line(50, base, 870, base, { w: 2.5 });
  { const x = 50 + 4 * 168; body += line(x - 48, base - 432 * k, x, base - 432 * k, { color: C.muted, w: 2, dash: '5 5' }) + `<rect x="${x}" y="${base - 432 * k}" width="120" height="${432 * k}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(x + 60, base - 432 * k - 12, '$432', { size: 18, weight: 700, anchor: 'middle' }) + para(x + 60, base + 26, 'Balance due', 150, { size: 15, anchor: 'middle', weight: 700 }); }
  body += rect(30, 665, 840, 75, { fill: C.mustard, edge: C.ink });
  body += tx(450, 698, 'Balance due: 200 + 480 − 48 − 200 = $432', { size: 21, weight: 700, anchor: 'middle' });
  body += tx(450, 725, 'Invoices increase the amount owed; credit notes and payments reduce it.', { size: 16, anchor: 'middle' });
  add('02-credit-note-statement',
    svg(900, 765, 'Credit note and statement of account', body),
    'A credit note for 4 damaged shirts is worth 4 × $15 = $60 less $12 trade discount = $48. A waterfall then shows the statement: $200 brought forward, plus the $480 invoice, less the $48 credit note, less a $200 payment, leaving $432 due.',
    'On a statement, invoices push the balance up and credit notes and payments bring it down (invented figures).',
    '## Worked example 2: credit note and statement');
}

// 03 International documents
{
  const d = [
    ['Certificate of origin', 'An authorised body in the exporting country', 'States where the goods were made, so customs apply the correct duties and trade agreement terms', '', C.cream],
    ['Bill of lading', 'The shipping company', 'Sea freight: receipt, evidence of contract of carriage; holder claims the goods at port', 'Document of title: YES', C.tealLight],
    ['Air waybill', 'The airline or its agent', 'Air freight: receipt and evidence of contract of carriage; goods go to the named consignee', 'Document of title: NO', C.tealLight],
    ['Documentary credit', 'The importer’s bank', 'Promise to pay the exporter once the agreed documents, such as the bill of lading, are presented', '', C.cream],
  ];
  let body = '';
  d.forEach(([n, by, what, tag, fill], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 265;
    body += panel(x, y, 410, 250) + rect(x, y, 410, 50, { fill, edge: C.panelEdge, rx: 14 }) + tx(x + 20, y + 33, n, { size: 20, weight: 700 });
    if (tag) body += pill(x + 205, y + 9, 190, 32, tag, { fill: tag.endsWith('YES') ? C.teal : '#f3d9c8', edge: tag.endsWith('YES') ? C.tealDark : C.rust, size: 15 });
    body += tx(x + 20, y + 80, 'Issued by', { size: 15, weight: 700, fill: C.muted }) + para(x + 20, y + 104, by, 370, { size: 16 });
    body += tx(x + 20, y + 146, 'Purpose', { size: 15, weight: 700, fill: C.muted }) + para(x + 20, y + 170, what, 370, { size: 16 });
  });
  add('03-international-documents',
    svg(900, 650, 'Four documents of international trade', body),
    'Four cards: the certificate of origin, issued in the exporting country, states where goods were made; the bill of lading, from the shipping company, is a document of title; the air waybill, from the airline, is not; and documentary credit is the importer’s bank’s promise to pay once documents are presented.',
    'Only the bill of lading is a document of title; documentary credit is a bank’s promise to pay.',
    '## Documents of international trade');
}

// 04 Documentary credit (swimlanes)
{
  const L = { exp: 120, ship: 340, bank: 560, imp: 780 };
  let body = '';
  [['exp', 'Exporter', C.cream], ['ship', 'Shipping company', C.panel], ['bank', 'Importer’s bank', C.tealLight], ['imp', 'Importer', C.cream]].forEach(([k, n, f]) => {
    body += pill(L[k] - 100, 110, 200, 52, n, { fill: f, size: 17 }) + line(L[k], 162, L[k], 480, { color: C.panelEdge, w: 2.5, dash: '7 6' });
  });
  const steps = [
    ['bank', 'exp', 'promises to pay once documents are presented', C.tealDark, 'ahT'],
    ['ship', 'exp', 'bill of lading (goods shipped)', C.ink, 'ah'],
    ['exp', 'bank', 'presents the agreed documents', C.ink, 'ah'],
    ['bank', 'exp', 'pays the exporter', C.olive, 'ahO'],
    ['bank', 'imp', 'documents prove shipment as agreed', C.ink, 'ah'],
  ];
  steps.forEach(([a, b, lab, col, mk], i) => {
    const y = 214 + i * 54, x1 = L[a], x2 = L[b], dir = x2 > x1 ? 1 : -1;
    body += arrow(x1 + dir * 4, y, x2 - dir * 8, y, { color: col, marker: mk, w: 3.5 });
    body += badge(Math.min(x1, x2) + 22, y - 18, 13, String(i + 1), C.mustard);
    body += tx(Math.min(x1, x2) + 42, y - 11, lab, { size: 15, weight: 600, fill: col });
  });
  body += rect(30, 500, 410, 100, { fill: C.cream, edge: C.olive }) + tx(235, 535, 'Exporter', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }) + tx(235, 565, 'knows a bank will pay', { size: 16, anchor: 'middle' });
  body += rect(460, 500, 410, 100, { fill: C.tealLight, edge: C.tealDark }) + tx(665, 535, 'Importer', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + tx(665, 565, 'pays only when documents prove shipment', { size: 16, anchor: 'middle' });
  add('04-documentary-credit',
    svg(900, 625, 'Documentary credit protects both sides', body),
    'Four lanes: exporter, shipping company, importer’s bank and importer. The bank promises to pay; the exporter ships and gets a bill of lading; it presents the documents and the bank pays; the documents prove to the importer that goods were shipped as agreed.',
    'The exporter is sure of payment and the importer pays only against proof of shipment.',
    '## Documents of international trade');
}

// 05 Online ordering
{
  const st = ['Browse and compare', 'Select: add to basket', 'Checkout: sign in or guest, delivery details', 'Choose delivery option', 'Pay securely online', 'Order confirmation email', 'Dispatch and tracking link', 'Receive; arrange returns if needed'];
  const rep = { 1: true, 5: true, 6: true };
  let body = '';
  st.forEach((s, i) => {
    const col = i < 4 ? 0 : 1, row = i % 4;
    const x = 30 + col * 430, y = 110 + row * 100;
    body += panel(x, y, 410, 84, rep[i] ? C.tealLight : C.panel, rep[i] ? C.tealDark : C.panelEdge) + badge(x + 36, y + 42, 20, String(i + 1), C.cream);
    body += para(x + 70, y + (nl(s, 320, 18) > 1 ? 36 : 49), s, 320, { size: 18, weight: 600 });
    if (row < 3) body += line(x + 36, y + 64, x + 36, y + 120, { w: 2.5 });
  });
  body += rect(30, 520, 840, 115, { fill: C.cream, edge: C.olive }) + tx(54, 554, 'Digital equivalents of paper documents (teal stages)', { size: 18, weight: 700, fill: C.olive });
  body += tx(54, 584, 'Basket and checkout → the written order', { size: 16 }) + tx(54, 610, 'Confirmation email → the paper receipt', { size: 16 });
  body += tx(480, 584, 'Tracking page → shows what a', { size: 16 }) + tx(480, 610, 'delivery note would', { size: 16 });
  add('05-online-ordering',
    svg(900, 660, 'Online ordering: browsing to receiving', body),
    'Eight numbered stages: browse, add to basket, checkout with delivery details, choose delivery option, pay securely, receive an order confirmation, dispatch with a tracking link, and receive the order. The basket replaces the written order, the confirmation the receipt and tracking the delivery note.',
    'Online ordering follows the paper sequence with digital equivalents.',
    '## Online ordering: from browsing to receiving');
}

// 06 Digital technology in documents
{
  const t = [
    ['Digital signatures', 'Confirm who approved a document and that it is unaltered', 'Sign at a distance, immediately'],
    ['Secure access', 'Passwords, two-step verification, encryption', 'Protects prices, customer and payment data'],
    ['Cloud-based storage', 'Documents on remote servers', 'Access anywhere; backed up; no filing cabinets'],
    ['Electronic receipts', 'Sent by email or app', 'No paper; harder to lose'],
    ['Etickets', 'Held on a phone or printed from an email', 'Instant; cannot be lost in the post'],
  ];
  let body = '';
  t.forEach(([n, w, b], i) => {
    const y = 110 + i * 92;
    body += pill(30, y, 220, 80, n, { fill: C.cream, size: 17, rx: 12 });
    body += panel(262, y, 608, 80) + tx(282, y + 32, w, { size: 16 }) + tick(294, y + 56, 10) + tx(312, y + 62, b, { size: 16, weight: 600, fill: C.tealDark });
  });
  body += rect(30, 580, 840, 100, { fill: '#f3d9c8', edge: C.rust });
  body += tx(54, 612, 'Drawbacks to weigh', { size: 17, weight: 700, fill: C.rust });
  body += tx(54, 640, 'Hacking and data theft · dependence on internet access and power', { size: 16 }) + tx(54, 664, 'Cost of secure systems and staff training · difficulty for customers without smartphones', { size: 16 });
  add('06-digital-technology',
    svg(900, 705, 'Digital technology in trading documents', body),
    'Five technologies with what each does and its benefit: digital signatures, secure access, cloud-based storage, electronic receipts and etickets. Below, the drawbacks: hacking, dependence on internet and power, system and training costs, and customers without smartphones.',
    'Digital documents are faster and harder to lose, but bring security and access risks.',
    '## Digital technology in trading documents');
}
