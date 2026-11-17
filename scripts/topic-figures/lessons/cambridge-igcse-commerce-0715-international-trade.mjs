import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-commerce-0715-international-trade';
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

// 01 Eleven challenges, grouped
{
  const groups = [
    ['Getting goods there', C.tealLight, [['Distance', 'Longer delivery, higher cost, risk of damage'], ['Transport', 'Choosing sea, air, road or rail; delays at ports'], ['Documentation', 'Extra documents, e.g. certificate of origin, bill of lading']]],
    ['Money and payment', C.cream, [['Methods of payment', 'Different systems; arranging secure payment'], ['Non-payment', 'Hard to check a distant buyer or recover money'], ['Currencies', 'Different money, so one must be exchanged'], ['Foreign exchange rates', 'Rates change before payment'], ['Customs duties', 'Taxes on imports raise cost and price']]],
    ['Doing business abroad', C.tealLight, [['Language', 'Misunderstood orders and labels; translation costs'], ['Competition', 'Against local firms and other exporters'], ['Different legal systems', 'Different rules on safety, labels and contracts']]],
  ];
  let body = '';
  groups.forEach(([g, fill, items], i) => {
    const x = 30 + i * 285;
    body += panel(x, 110, 270, 520) + rect(x, 110, 270, 50, { fill, edge: C.panelEdge, rx: 14 }) + tx(x + 135, 143, g, { size: 19, weight: 700, anchor: 'middle' });
    items.forEach(([n, m], j) => {
      const y = 196 + j * 85;
      body += tx(x + 18, y, n, { size: 17, weight: 700, fill: n === 'Currencies' || n === 'Foreign exchange rates' ? C.olive : C.ink });
      body += para(x + 18, y + 24, m, 240, { size: 15, fill: C.muted });
    });
  });
  body += rect(30, 650, 840, 75, { fill: C.cream, edge: C.olive });
  body += tx(450, 680, 'Currencies = different money.  Exchange rates = changing values.', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  body += tx(450, 708, 'They are two separate challenges.', { size: 16, anchor: 'middle' });
  add('01-trader-challenges',
    svg(900, 745, 'Eleven challenges for exporters and importers', body),
    'The eleven challenges grouped in three panels: getting goods there (distance, transport, documentation), money and payment (methods of payment, non-payment, currencies, exchange rates, customs duties) and doing business abroad (language, competition, different legal systems).',
    'Name the challenge, then say how it affects the trader’s cost, risk or sales.',
    '## What challenges do exporters and importers face? (3.1.2)');
}

// 02 Exchange rate and the lamp price
{
  const base = 560, sc = 3.6;
  const bars = [['0.80', 80, 'Currency falls', 'exports more competitive', C.tealDark], ['0.90', 90, 'Starting rate', '', C.ink], ['1.00', 100, 'Currency rises', 'dearer abroad; exports may fall', C.rust]];
  let body = pill(300, 110, 300, 50, 'Lamp price: A$100', { fill: C.cream, size: 20 });
  bars.forEach(([r, eur, h, s, col], i) => {
    const x = 120 + i * 245, w = 150, top = base - eur * sc;
    body += `<rect x="${x}" y="${top}" width="${w}" height="${eur * sc}" rx="6" fill="${i === 1 ? C.teal : i === 0 ? C.tealLight : '#f3d9c8'}" stroke="${C.ink}" stroke-width="2.5"/>`;
    body += tx(x + w / 2, top - 14, `${eur} euros`, { size: 21, weight: 700, anchor: 'middle' });
    body += tx(x + w / 2, top + 34, `100 × ${r}`, { size: 17, anchor: 'middle', fill: C.ink });
    body += tx(x + w / 2, base + 30, `A$1 = ${r} euros`, { size: 17, weight: 700, anchor: 'middle' });
    body += tx(x + w / 2, base + 58, h, { size: 16, weight: 700, anchor: 'middle', fill: col });
    if (s) body += para(x + w / 2, base + 80, s, 200, { size: 15, anchor: 'middle', fill: col });
  });
  body += line(80, base, 820, base, { w: 3 });
  body += tx(450, 712, 'What a European buyer pays. For an importer in Country A the effect is reversed.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('02-exchange-rate-lamp',
    svg(900, 735, 'One lamp, three exchange rates', body),
    'Bars show what a European buyer pays for an A$100 lamp: 80 euros at A$1 = 0.80 euros, 90 euros at 0.90 and 100 euros at 1.00. A falling currency makes exports more competitive; a rising one makes them dearer abroad.',
    'A stronger currency makes exports dearer abroad; a weaker one makes them cheaper (invented figures).',
    '## What challenges do exporters and importers face? (3.1.2)');
}

// 03 Balance of Trade inside Balance of Payments
{
  let body = rect(30, 110, 840, 340, { fill: C.tealLight, edge: C.tealDark, sw: 3 });
  body += tx(54, 148, 'Balance of Payments', { size: 23, weight: 700, fill: C.tealDark });
  body += tx(54, 176, 'All of a country’s transactions with the rest of the world', { size: 17 });
  const inner = [
    ['Trade in goods', 'visible exports and imports', 'Balance of Trade', C.cream, C.olive],
    ['Trade in services', 'invisible: tourism, banking, insurance, shipping', '', C.panel, C.panelEdge],
    ['Financial flows', 'such as investment', '', C.panel, C.panelEdge],
  ];
  inner.forEach(([h, s, tag, fill, edge], i) => {
    const x = 54 + i * 272;
    body += rect(x, 205, 250, 165, { fill, edge, sw: i === 0 ? 3.5 : 2.5 });
    body += tx(x + 20, 242, h, { size: 19, weight: 700 });
    body += para(x + 20, 272, s, 215, { size: 16, fill: C.muted });
    if (tag) body += pill(x + 20, 315, 210, 42, tag, { fill: C.mustard, size: 17 });
  });
  body += tx(450, 420, 'Balance of Trade = exports of goods − imports of goods', { size: 18, weight: 700, anchor: 'middle' });
  body += pill(30, 470, 410, 60, 'Surplus: exports > imports', { fill: C.tealLight, edge: C.tealDark, size: 18, color: C.tealDark });
  body += pill(460, 470, 410, 60, 'Deficit: imports > exports', { fill: '#f3d9c8', edge: C.rust, size: 18, color: C.rust });
  add('03-bot-inside-bop',
    svg(900, 555, 'Balance of Trade and Balance of Payments', body),
    'A large box for the Balance of Payments contains three parts: trade in goods, trade in services and financial flows. Only the trade in goods part is the Balance of Trade. Below, a surplus is exports greater than imports and a deficit is imports greater than exports.',
    'The Balance of Trade covers goods only; the Balance of Payments covers everything.',
    '## How do the Balance of Trade and Balance of Payments differ? (3.1.3)');
}

// 04 Worked BoP calculation as a waterfall
{
  const zero = 300, k = 3.4, w = 120;
  const Y = (v) => zero - v * k;
  const steps = [
    ['Balance of Trade', '540 − 610', 0, -70, 'deficit', C.rust, '#f3d9c8'],
    ['Services', '230 − 150', -70, 10, '+80', C.tealDark, C.tealLight],
    ['Goods and services', '−70 + 80', 0, 10, '+10', C.ink, C.teal],
    ['Net investment', 'inflow', 10, 35, '+25', C.tealDark, C.tealLight],
    ['Balance of Payments', '10 + 25', 0, 35, 'surplus', C.olive, C.mustard],
  ];
  let body = '';
  steps.forEach(([lab, calc, a, b, note, col, fill], i) => {
    const x = 60 + i * 165, top = Math.min(Y(a), Y(b)), h = Math.abs(Y(a) - Y(b));
    body += `<rect x="${x}" y="${top}" width="${w}" height="${h}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const val = i === 0 ? '−70' : i === 1 ? '+80' : i === 2 ? '+10' : i === 3 ? '+25' : '+35';
    const vy = b < a ? Y(b) + 30 : top - 12;
    body += tx(x + w / 2, i === 0 ? Y(-70) + 30 : vy, val, { size: 22, weight: 700, anchor: 'middle', fill: col });
    if (i < 4) body += line(x + w, Y(b), x + 165, Y(b), { color: C.muted, w: 2, dash: '5 5' });
    body += para(x + w / 2, 600, lab, 140, { size: 16, weight: 700, anchor: 'middle' });
    body += tx(x + w / 2, 652, calc, { size: 16, anchor: 'middle', fill: C.muted });
    if (note === 'deficit' || note === 'surplus') body += tx(x + w / 2, 678, note, { size: 16, weight: 700, anchor: 'middle', fill: col });
  });
  body += line(40, zero, 870, zero, { w: 3 });
  body += tx(40, zero - 10, '0', { size: 16, fill: C.muted });
  body += tx(450, 130, '$ million (invented figures)', { size: 16, anchor: 'middle', fill: C.muted });
  add('04-bop-waterfall',
    svg(900, 705, 'From a trade deficit to a payments surplus', body),
    'A waterfall chart. The Balance of Trade is 540 − 610 = −70, a deficit. Services add 230 − 150 = +80, giving +10 on goods and services. A net investment inflow of +25 gives a Balance of Payments surplus of +35.',
    'A goods deficit of $70 million is more than covered by services and investment, giving +$35 million.',
    '## How do the Balance of Trade and Balance of Payments differ? (3.1.3)');
}

// 05 Commercial activities and the balances
{
  const r = [
    ['A hotel welcomes foreign tourists', 'Service exports', 'in'],
    ['A supermarket imports more foreign food', 'Visible imports (Balance of Trade worsens)', 'out'],
    ['An insurer covers ships for overseas clients', 'Invisible exports', 'in'],
    ['A manufacturer starts exporting through ecommerce', 'Visible exports', 'in'],
    ['A foreign MNC builds a factory', 'Investment inflow', 'in'],
    ['… and later sends profits home', 'Money flows out', 'out'],
  ];
  let body = '';
  r.forEach(([act, eff, dir], i) => {
    const y = 110 + i * 92;
    const inn = dir === 'in';
    body += panel(30, y, 440, 78) + para(50, y + (nl(act, 400, 17) > 1 ? 33 : 46), act, 400, { size: 17 });
    body += arrow(478, y + 39, 528, y + 39, { color: inn ? C.tealDark : C.rust, marker: inn ? 'ahT' : 'ahR', w: 4 });
    body += rect(540, y, 330, 78, { fill: inn ? C.tealLight : '#f3d9c8', edge: inn ? C.tealDark : C.rust });
    body += para(560, y + (nl(eff, 290, 17) > 1 ? 33 : 46), eff, 290, { size: 17, weight: 700, fill: inn ? C.tealDark : C.rust });
  });
  body += tx(450, 680, 'Teal: money flows into the country.  Rust: money flows out.', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-activities-and-balances',
    svg(900, 705, 'How commercial activities show up', body),
    'Six activities linked to the balance they affect: tourists at a hotel are service exports, food imports are visible imports, insuring foreign ships is an invisible export, ecommerce sales abroad are visible exports, a foreign MNC’s factory is an investment inflow, and its profits sent home are an outflow.',
    'Ask whether money flows in or out, and whether it is goods, services or investment.',
    '## How do the Balance of Trade and Balance of Payments differ? (3.1.3)');
}

// 06 Three trade restrictions with tariff calculation
{
  const cols = [
    ['Tariff', 'A tax on imports', ['Raises the price of imports', 'Importers sell or earn less', 'Local producers protected'], C.cream],
    ['Quota', 'A limit on the quantity imported', ['Shortages of the good', 'Prices rise', 'Importers find other sources'], C.tealLight],
    ['Embargo', 'A ban on trade in a good or with a country', ['Trade stops completely', 'Firms lose suppliers or markets', 'Supply chains reorganised'], '#f3d9c8'],
  ];
  let body = '';
  cols.forEach(([n, m, eff, fill], i) => {
    const x = 30 + i * 285;
    body += panel(x, 110, 270, 330) + rect(x, 110, 270, 92, { fill, edge: C.panelEdge, rx: 14 });
    body += tx(x + 135, 145, n, { size: 23, weight: 700, anchor: 'middle' });
    body += para(x + 135, 175, m, 240, { size: 16, anchor: 'middle' });
    body += list(x + 16, 245, eff, 240, { size: 16, gap: 14 }).s;
  });
  body += panel(30, 460, 840, 150, C.cream, C.olive);
  body += tx(54, 495, 'Tariff calculation (invented figures)', { size: 19, weight: 700, fill: C.olive });
  body += pill(54, 520, 170, 54, 'Shoe: $50', { fill: C.panel, size: 19 });
  body += tx(250, 556, '+', { size: 28, weight: 700, anchor: 'middle' });
  body += pill(276, 520, 280, 54, '20% tariff: 0.20 × 50 = $10', { fill: C.panel, size: 18 });
  body += tx(582, 556, '=', { size: 28, weight: 700, anchor: 'middle' });
  body += pill(606, 520, 150, 54, '$60', { fill: C.mustard, size: 22 });
  body += tx(54, 598, 'before transport and profit are added', { size: 16, fill: C.muted, italic: true });
  add('06-trade-restrictions',
    svg(900, 635, 'Tariff, quota and embargo', body),
    'Three panels: a tariff is a tax on imports that raises their price, a quota limits the quantity imported and causes shortages, and an embargo bans trade so it stops completely. Below, a $50 shoe with a 20% tariff costs $50 + $10 = $60.',
    'A tariff taxes, a quota limits and an embargo bans.',
    '## Free trade, trading blocs and trade restrictions (3.1.4)');
}

// 07 Trading bloc
{
  let body = rect(30, 110, 560, 300, { fill: C.tealLight, edge: C.tealDark, dash: '10 7', sw: 3 });
  body += tx(310, 142, 'Trading bloc', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  const m = [[150, 230], [440, 230], [295, 350]];
  body += line(150, 230, 440, 230, { color: C.tealDark, w: 4 }) + line(150, 230, 295, 350, { color: C.tealDark, w: 4 }) + line(440, 230, 295, 350, { color: C.tealDark, w: 4 });
  m.forEach(([x, y]) => { body += `<circle cx="${x}" cy="${y}" r="42" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>` + tx(x, y + 6, 'Member', { size: 16, weight: 700, anchor: 'middle' }); });
  body += tx(295, 212, 'free or easier trade', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  body += `<rect x="600" y="110" width="22" height="300" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`;
  body += pill(700, 230, 170, 60, 'Non-member', { fill: C.panel, size: 18 });
  body += arrow(695, 260, 630, 260, { color: C.rust, marker: 'ahR', w: 4 });
  body += para(745, 140, 'Often a common external tariff on imports from non-members', 230, { size: 16, weight: 600, fill: C.rust, anchor: 'middle' });
  body += para(745, 330, 'Agreed rules on standards; in some blocs free movement or a shared currency', 230, { size: 15, fill: C.muted, anchor: 'middle' });
  const adv = ['Larger market, no tariffs inside the bloc', 'Cheaper imports from members', 'Attracts investment', 'Political cooperation'];
  const dis = ['More competition for local firms', 'Must follow bloc rules; less control of trade policy', 'Imports from non-members may cost more', 'Membership fees in some blocs'];
  body += panel(30, 435, 410, 255) + tx(54, 472, 'Advantages of joining', { size: 19, weight: 700, fill: C.tealDark }) + list(54, 512, adv, 370, { size: 17, gap: 16, mark: 'tick' }).s;
  body += panel(460, 435, 410, 255) + tx(484, 472, 'Disadvantages of joining', { size: 19, weight: 700, fill: C.rust }) + list(484, 512, dis, 370, { size: 17, gap: 16, mark: 'cross' }).s;
  add('07-trading-bloc',
    svg(900, 715, 'Inside and outside a trading bloc', body),
    'Three member countries inside a bloc trade freely, while a non-member’s goods meet a common external tariff at the bloc’s edge. Below, four advantages of joining (larger market, cheaper imports, investment, political cooperation) sit beside four disadvantages.',
    'A bloc opens markets between members but brings competition and shared rules.',
    '## Free trade, trading blocs and trade restrictions (3.1.4)');
}
