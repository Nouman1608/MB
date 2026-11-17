import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-business-9225-globalisation-oxfordaqa-igcse-business';
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

// 01 Five forms as chains
{
  const forms = [
    ['Specialisation by country', ['Ideal growing conditions for tea', 'Specialises: very large volumes', 'Lower cost per kg; sells worldwide']],
    ['Relative cost advantage', ['Assembly costs much less in a developing country', 'Furniture maker moves assembly there', 'Lower costs, but home-factory jobs lost']],
    ['Movement of labour', ['Hospital short of skilled staff', 'Recruits workers from abroad', 'Fills vacancies; home country loses skills']],
    ['Larger markets', ['Cosmetics firm exports to ten countries', 'Sales rise; economies of scale', 'Lower cost per unit']],
    ['International competition', ['Cheaper imported bikes arrive', 'Must cut costs, improve quality or find a niche', 'Or it loses market share']],
  ];
  let b = '';
  forms.forEach(([name, ch], i) => {
    const y = 110 + i * 132;
    b += card(30, y, 200, 116, name, '', { fill: C.cream, edge: C.olive, ts: 18, align: 'middle' });
    ch.forEach((s, j) => {
      const x = 256 + j * 210;
      b += card(x, y, 186, 116, '', s, { fill: j === 2 ? C.tealLight : C.panel, edge: j === 2 ? C.tealDark : C.panelEdge, bs: 16, bfill: C.ink, align: 'middle', pad: 12 });
      if (j < 2) b += arrow(x + 188, y + 58, x + 208, y + 58, { w: 3 });
    });
    b += line(230, y + 58, 254, y + 58, { w: 3, color: C.olive });
  });
  add('01-five-forms-chains',
    svg(900, 110 + 5 * 132 + 14, 'Five forms of globalisation as chains', b),
    'Five rows, one per form of globalisation, each as a three-step chain: specialisation (tea grown in volume at lower cost), relative cost advantage (assembly moved abroad, home jobs lost), movement of labour (skilled staff recruited from abroad), larger markets (exports to ten countries, lower unit cost) and international competition (cheaper imports force cost cuts or a niche).',
    'Learn each form as a cause-and-effect chain ending in an effect on the business.',
    '## The five forms, each as a chain');
}

// 02 Four viewpoints grid
{
  const cells = [
    ['A business', 'Developed country', ['Larger markets to sell to', 'Cheaper inputs', 'Can move production to lower-cost countries'], ['Low-cost foreign rivals', 'May need to cut prices', 'Long supply chains disrupted']],
    ['An economy', 'Developed country', ['Cheaper goods and wider choice', 'Firms find export markets'], ['Jobs lost in industries that move abroad', 'Workers need retraining']],
    ['A business', 'Developing country', ['Wins export orders on cost', 'Gains skills and technology from foreign partners'], ['Large foreign brands at home', 'May depend on a few overseas buyers']],
    ['An economy', 'Developing country', ['New jobs and incomes; more tax', 'Investment in roads and factories'], ['Local firms may close', 'Skilled workers may emigrate', 'Foreign firms’ profits may leave']],
  ];
  let b = tx(285, 132, 'Businesses', { size: 20, weight: 700, anchor: 'middle' }) + tx(695, 132, 'Economies', { size: 20, weight: 700, anchor: 'middle' });
  b += `<text transform="translate(56,330) rotate(-90)" font-size="19" font-weight="700" fill="${C.ink}" text-anchor="middle">Developed</text>`;
  b += `<text transform="translate(56,660) rotate(-90)" font-size="19" font-weight="700" fill="${C.ink}" text-anchor="middle">Developing</text>`;
  cells.forEach(([, , plus, minus], i) => {
    const x = 80 + (i % 2) * 410, y = 150 + Math.floor(i / 2) * 330;
    b += rect(x, y, 395, 315, C.panel);
    let yy = y + 34;
    b += tx(x + 18, yy, '+ Benefits', { size: 17, weight: 700, fill: C.tealDark }); yy += 26;
    plus.forEach((s) => { const L = wrap(s, 345, 16); b += tx(x + 18, yy, '•', { size: 16, fill: C.tealDark }) + lines(x + 34, yy, L, { size: 16 }); yy += L.length * LH(16) + 4; });
    yy += 12;
    b += line(x + 18, yy - 14, x + 377, yy - 14, { color: C.panelEdge, w: 1.5 });
    yy += 10;
    b += tx(x + 18, yy, '− Drawbacks', { size: 17, weight: 700, fill: C.rust }); yy += 26;
    minus.forEach((s) => { const L = wrap(s, 345, 16); b += tx(x + 18, yy, '•', { size: 16, fill: C.rust }) + lines(x + 34, yy, L, { size: 16 }); yy += L.length * LH(16) + 4; });
  });
  b += takeaway(810, 'State the viewpoint first.', 'The same change can help a developed-country consumer and harm a developed-country worker.');
  add('02-four-viewpoints',
    svg(900, 810 + takeH('The same change can help a developed-country consumer and harm a developed-country worker.') + 30, 'Globalisation from four viewpoints', b),
    'A two-by-two grid of benefits and drawbacks of globalisation for businesses and economies in developed and developing countries, for example larger markets but low-cost rivals for a developed-country business, and new jobs but emigrating skilled workers for a developing economy.',
    'Who gains and who loses depends on the viewpoint.',
    '## Benefits and drawbacks: four different viewpoints');
}

// 03 Weak vs developed answer
{
  let b = rect(30, 110, 840, 120, C.panel, C.rust) + tx(56, 146, 'Earns little', { size: 18, weight: 700, fill: C.rust }) +
    tx(56, 192, '“Globalisation is good.”', { size: 24, italic: true }) + tx(846, 192, 'no viewpoint, no chain', { size: 16, anchor: 'end', fill: C.rust });
  b += rect(30, 250, 840, 380, C.tealLight, C.tealDark) + tx(56, 286, 'A developed chain', { size: 18, weight: 700, fill: C.tealDark });
  const steps = [['Viewpoint', 'a developing-country garment maker'], ['Cause', 'its labour costs are lower'], ['Effect on the business', 'it wins large export orders'], ['Wider effect', 'creates local jobs']];
  steps.forEach(([h, s], i) => {
    const y = 306 + i * 80;
    b += rect(56, y, 788, 52, C.panel, C.tealDark, 10, 2) + tx(76, y + 33, h, { size: 17, weight: 700, fill: C.tealDark }) + tx(310, y + 33, s, { size: 18 });
    if (i < 3) b += arrow(250, y + 52, 250, y + 78, { w: 3 });
  });
  add('03-weak-vs-developed-answer',
    svg(900, 660, 'From a claim to a developed chain', b),
    'A bare claim, “Globalisation is good”, earns little. A developed chain states the viewpoint (a developing-country garment maker), the cause (lower labour costs), the effect (large export orders) and the wider effect (local jobs).',
    'Name the viewpoint, then link cause to effect.',
    '## Benefits and drawbacks: four different viewpoints');
}

// 04 Exchange rate direction grid
{
  const up = (x, y, c, m) => arrow(x, y + 22, x, y - 22, { color: c, marker: m, w: 6 });
  const dn = (x, y, c, m) => arrow(x, y - 22, x, y + 22, { color: c, marker: m, w: 6 });
  let b = tx(410, 132, 'Exporter', { size: 21, weight: 700, anchor: 'middle' }) + tx(720, 132, 'Importer', { size: 21, weight: 700, anchor: 'middle' });
  const rows = [
    ['Home currency', 'strengthens', 'each unit buys more foreign currency', 'Goods cost more for foreign buyers', 'Sales abroad tend to fall', 'Imports and materials cost less', 'Costs fall'],
    ['Home currency', 'weakens', 'each unit buys less foreign currency', 'Goods cost less for foreign buyers', 'Sales abroad tend to rise', 'Imports and materials cost more', 'Costs rise'],
  ];
  rows.forEach(([a, bb, c, e1, e2, i1, i2], r) => {
    const y = 150 + r * 250;
    b += rect(30, y, 220, 230, r ? C.cream : C.tealLight, r ? C.olive : C.tealDark) + tx(140, y + 70, a, { size: 18, anchor: 'middle' }) + tx(140, y + 100, bb, { size: 24, weight: 700, anchor: 'middle' }) + para(50, y + 140, c, 180, { size: 16, fill: C.muted });
    const good1 = r === 1, good2 = r === 0;
    b += rect(270, y, 290, 230, C.panel, good1 ? C.tealDark : C.rust) + para(290, y + 40, e1, 250, { size: 17 }) + tx(380, y + 165, e2.split(' ').slice(0, 2).join(' '), { size: 19, weight: 700, fill: good1 ? C.tealDark : C.rust }) + tx(380, y + 190, e2.split(' ').slice(2).join(' '), { size: 17, fill: good1 ? C.tealDark : C.rust });
    b += (r ? up : dn)(320, y + 170, good1 ? C.tealDark : C.rust, good1 ? 'ahT' : 'ahR');
    b += rect(580, y, 290, 230, C.panel, good2 ? C.tealDark : C.rust) + para(600, y + 40, i1, 250, { size: 17 }) + tx(690, y + 177, i2, { size: 19, weight: 700, fill: good2 ? C.tealDark : C.rust });
    b += (r ? up : dn)(630, y + 170, good2 ? C.tealDark : C.rust, good2 ? 'ahT' : 'ahR');
  });
  b += tx(450, 680, 'Teal = helps the business; rust = hurts it.', { size: 16, anchor: 'middle', fill: C.muted });
  add('04-exchange-rate-directions',
    svg(900, 705, 'Exchange rates: who gains, who loses', b),
    'A grid of exchange-rate effects. When the home currency strengthens, exporters’ goods cost more for foreign buyers so sales tend to fall, while importers’ costs fall. When it weakens, export sales tend to rise and importers’ costs rise.',
    'A stronger currency hurts exporters and helps importers; a weaker one does the reverse.',
    '## Exchange rates: sales and profit');
}

// 05 Velden Ceramics options
{
  const x0 = 120, yb = 560, top = 200, max = 120000, sc = (v) => ((yb - top) * v) / max;
  const bars = [['Before', '10,000 × $12', 120000, C.teal], ['Option A', 'keep $30', 102000, C.mustard], ['Option B', 'cut to $27', 90000, C.cream], ['Option A', 'if sales 7,000', 84000, C.panel]];
  let b = panel(30, 110, 840, 520) + tx(56, 146, 'Velden Ceramics: annual profit on exported vases (cost $18 a vase)', { size: 18, weight: 700 });
  [0, 40000, 80000, 120000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 850, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  bars.forEach(([h, s, v, f], i) => {
    const x = x0 + 40 + i * 175;
    b += `<rect x="${x}" y="${yb - sc(v)}" width="110" height="${sc(v)}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"${i === 3 ? ' stroke-dasharray="8 5"' : ''}/>`;
    b += tx(x + 55, yb - sc(v) - 10, money(v), { size: 18, weight: 700, anchor: 'middle' });
    b += tx(x + 55, yb + 28, h, { size: 17, weight: 700, anchor: 'middle' }) + tx(x + 55, yb + 50, s, { size: 15, anchor: 'middle', fill: C.muted });
  });
  b += line(x0, yb, 850, yb, { w: 2.5 });
  const calc = (x, h, head, rows, f, e) => rect(x, 650, 270, h, f, e) + tx(x + 18, 684, head, { size: 18, weight: 700 }) + lines(x + 18, 714, rows, { size: 16 }, 24);
  b += calc(30, 160, 'A: keep price at $30', ['Foreign buyers pay more', 'Sales fall to 8,500', '8,500 × $12 = $102,000'], C.cream, C.olive);
  b += calc(315, 160, 'B: cut price to $27', ['Buyers pay about the same', 'Profit per vase $27 − $18 = $9', '10,000 × $9 = $90,000'], C.cream, C.olive);
  b += calc(600, 160, 'A, if sales fall to 7,000', ['7,000 × $12 = $84,000', 'Now B is better', ''], C.panel, C.rust);
  b += takeaway(830, 'Either way, the stronger currency hurts.', 'Keeping the price loses less here, but it depends on how price-sensitive foreign buyers are, and on long-term customers the figures do not show.');
  add('05-velden-sales-or-profit',
    svg(900, 830 + takeH('Keeping the price loses less here, but it depends on how price-sensitive foreign buyers are, and on long-term customers the figures do not show.') + 30, 'Sales or profit: the exporter’s choice', b),
    'Velden Ceramics made $120,000 profit (10,000 vases × $12). After the home currency strengthens, keeping the $30 price with sales of 8,500 gives $102,000; cutting to $27 keeps 10,000 sales at $9 each, $90,000. If sales under option A fell to 7,000, profit would be $84,000 and option B would be better.',
    'A stronger currency cuts either sales or profit per unit; which hurts less depends on buyers.',
    '## Exchange rates: sales and profit');
}

// 06 Severe fluctuations
{
  const probs = [
    ['Uncertain costs and revenues', 'An importer may find goods cost far more by the time it pays'],
    ['Difficult pricing', 'Exporters cannot set price lists with confidence'],
    ['Harder planning', 'Investment, borrowing and hiring are harder to plan'],
    ['Lost contracts', 'A sharp rise in the home currency can make an exporter uncompetitive overnight'],
  ];
  let b = rect(30, 110, 840, 90, C.cream, C.olive) + tx(450, 148, 'Severe fluctuation: a large or sudden swing', { size: 20, weight: 700, anchor: 'middle' }) +
    tx(450, 178, 'A small, gradual change can be planned for.', { size: 17, anchor: 'middle', fill: C.muted });
  // swing line
  b += path('M60,270 L150,262 L220,276 L280,232 L330,300 L380,226 L430,296 L470,250', { stroke: C.rust, w: 4 });
  b += path('M500,262 L600,258 L700,254 L800,250 L850,248', { stroke: C.tealDark, w: 4 });
  b += tx(260, 330, 'severe swing', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 }) + tx(680, 290, 'small, gradual change', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  probs.forEach(([h, s], i) => {
    const x = 30 + (i % 2) * 430, y = 356 + Math.floor(i / 2) * 140;
    b += card(x, y, 410, 124, h, s, { edge: C.rust, tfill: C.rust, ts: 19, bs: 16, top: 36 });
  });
  b += rect(30, 650, 840, 200, C.tealLight, C.tealDark) + tx(56, 686, 'Ways to reduce the risk', { size: 19, weight: 700, fill: C.tealDark });
  ['Agree prices in their own currency where customers accept it', 'Buy from suppliers at home', 'Sell in several countries, so one currency matters less'].forEach((s, i) => {
    b += rect(56 + i * 272, 704, 252, 124, C.panel, C.tealDark, 10, 2) + para(74 + i * 272, 704 + 66 - (paraN(s, 216, 17) - 1) * 11, s, 216, { size: 17 });
  });
  add('06-severe-fluctuations',
    svg(900, 880, 'When exchange rates swing sharply', b),
    'A severe, sudden exchange-rate swing brings four problems: uncertain costs and revenues, difficult pricing, harder planning and lost contracts. Businesses reduce the risk by pricing in their own currency, buying from home suppliers and selling in several countries.',
    'Sudden swings make costs, prices and plans uncertain; spreading currencies reduces the risk.',
    '## Severe fluctuations');
}
