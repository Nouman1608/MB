import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-pakistan-studies-trade';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText.replace(/(viewBox="0 0 \d+ |height=")([\d.]+)/g, (m, a, n) => a + Math.round(+n)), alt, caption, after });

// ---- local helpers ----
const CW = 0.5; // approx. average Inter glyph width as a share of font size
const wrap = (s, size, width) => {
  const max = Math.floor(width / (size * CW)); const out = [''];
  for (const w of s.split(' ')) { const cur = out[out.length - 1]; if (cur && (cur + ' ' + w).length > max) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w; }
  return out;
};
const para = (x, y, s, width, opts = {}, lh) => tl(x, y, wrap(s, opts.size || 17, width), opts, lh || (opts.size || 17) * 1.3);
const lines = (s, size, width) => wrap(s, size, width).length;
const rect = (x, y, w, h, fill, edge = C.ink, sw = 2.5, rx = 12, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}" ${extra}/>`;
const box = (x, y, w, h, fill = '#ffffff', edge = C.panelEdge) => rect(x, y, w, h, fill, edge, 2.5, 12);
// Box with bold head and wrapped body, returns svg; height computed by caller via boxH
const boxH = (head, body, w, size = 17) => (head ? 34 : 14) + (body ? lines(body, size, w - 32) * (size * 1.3) : 0) + 14;
const tbox = (x, y, w, head, body, { fill = '#ffffff', edge = C.panelEdge, size = 17, headColor = C.ink, h } = {}) => {
  const hh = h || boxH(head, body, w, size);
  return box(x, y, w, hh, fill, edge) + (head ? t(x + 16, y + 28, head, { size: 18, weight: 700, fill: headColor }) : '') +
    (body ? para(x + 16, y + (head ? 54 : 30), body, w - 32, { size, fill: head ? C.muted : C.ink }, size * 1.3) : '');
};
// bullet list: returns { svg, h }
const blist = (x, y, items, width, { size = 17, color = C.ink, dot = C.tealDark, gap = 10, lh } = {}) => {
  let s = '', yy = y; const L = lh || size * 1.3;
  items.forEach((it) => { const ls = wrap(it, size, width - 22); s += `<circle cx="${x + 6}" cy="${yy - size * 0.33}" r="5" fill="${dot}"/>` + tl(x + 22, yy, ls, { size, fill: color }, L); yy += ls.length * L + gap; });
  return { svg: s, h: yy - y };
};

// 01 Exports vs imports 2023-24
{
  const sc = 760 / 60, x0 = 60;
  let b = t(60, 132, 'US$ billion, fiscal year 2023–24 (Pakistan Bureau of Statistics, rounded)', { size: 16, weight: 600, fill: C.muted });
  [0, 10, 20, 30, 40, 50, 60].forEach((v) => { b += `<line x1="${x0 + v * sc}" y1="148" x2="${x0 + v * sc}" y2="330" stroke="${C.panelEdge}" stroke-width="1.5"/>` + t(x0 + v * sc, 352, String(v), { size: 15, anchor: 'middle', fill: C.muted }); });
  b += rect(x0, 160, 30.6 * sc, 60, C.teal, C.ink, 2, 6) + t(x0 + 16, 198, 'Exports  30.6', { size: 20, weight: 700 });
  b += rect(x0, 236, 54.7 * sc, 60, C.rust, C.ink, 2, 6) + t(x0 + 16, 274, 'Imports  54.7', { size: 20, weight: 700, fill: '#ffffff' });
  b += `<rect x="${x0 + 30.6 * sc}" y="160" width="${24.1 * sc}" height="60" fill="none" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="8 6"/>` + t(x0 + (30.6 + 12) * sc, 198, 'deficit 24.1', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  const col = (x, head, color, fill, items) => panel(x, 380, 410, 282, fill, color) + t(x + 24, 416, head, { size: 21, weight: 700, fill: color }) + blist(x + 24, 452, items, 362, { dot: color, size: 17, gap: 8 }).svg;
  b += col(30, 'Main exports', C.tealDark, '#ffffff', ['Textile group (a little over half): knitwear, bed linen, garments, cloth, yarn, towels', 'Rice (record of nearly US$4 billion)', 'Leather goods; surgical instruments and sports goods', 'Fruit and vegetables, fish, cement, chemicals']);
  b += col(460, 'Main imports', C.rust, '#ffffff', ['Petroleum products, crude oil and LNG', 'Machinery and electrical goods', 'Palm oil; chemicals and plastics; iron and steel', 'Medicines; vehicles and parts; tea; pulses']);
  add('01-exports-imports',
    svg(900, 682, 'What Pakistan sells and buys', b),
    'Two bars compare goods exports of about US$30.6 billion with imports of about US$54.7 billion in 2023–24, leaving a deficit of about US$24.1 billion. Lists below show the main exports (textiles, rice, leather, surgical and sports goods) and imports (fuel, machinery, palm oil, chemicals, steel).',
    'Imports cost almost twice what exports earn, leaving a deficit of about US$24 billion.',
    '## What does Pakistan export and import?');
}

// 02 How the mix changed
{
  let b = '';
  b += rect(30, 120, 250, 150, C.cream, C.olive, 2.5, 14) + t(155, 156, '1950s exports', { size: 19, weight: 700, anchor: 'middle', fill: C.olive }) + t(155, 196, 'Raw cotton', { size: 19, weight: 700, anchor: 'middle' }) + t(155, 222, 'Jute (from', { size: 17, anchor: 'middle' }) + t(155, 244, 'East Pakistan)', { size: 17, anchor: 'middle' });
  b += arrow(286, 195, 344, 195, { w: 5 });
  const steps = [['Yarn', 70], ['Cloth', 105], ['Finished garments', 145]];
  steps.forEach(([s, h], i) => { const x = 352 + i * 175; b += rect(x, 270 - h, 160, h, i === 2 ? C.mustard : C.teal, C.ink, 2.5, 8) + tl(x + 80, 270 - h / 2 + 6 - (wrap(s, 17, 140).length - 1) * 10, wrap(s, 17, 140), { size: 17, weight: 700, anchor: 'middle' }, 20); });
  b += t(612, 300, 'Today: cotton leaves as processed goods that add value', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 });
  const cards = [
    ['Rice has grown', 'Record value in 2023–24 after India restricted some of its own rice exports: a competitor’s policy changed Pakistan’s earnings.', C.tealDark, C.tealLight],
    ['Fuel dominates imports', 'The bill swings with world oil and gas prices: up in 2021–22, down in 2022–23 when imports were restricted to protect reserves.', C.rust, '#f6e4d8'],
    ['New growth areas', 'IT services (about US$3 billion, in services trade), surgical instruments, pharmaceuticals, seafood.', C.blue, '#dfe7f2'],
  ];
  cards.forEach(([h, s, c, f], i) => { const x = 30 + i * 285, w = 270; b += panel(x, 330, w, 200, f, c) + t(x + 18, 366, h, { size: 19, weight: 700, fill: c }) + para(x + 18, 398, s, w - 44, { size: 16 }, 21); });
  add('02-changing-mix',
    svg(900, 550, 'How Pakistan’s trade has changed', b),
    'In the 1950s exports were mainly raw cotton and jute; today cotton leaves as yarn, cloth and finished garments of rising value. Three cards note record rice exports in 2023–24, fuel imports that swing with world prices, and new growth in IT services, surgical instruments, pharmaceuticals and seafood.',
    'Pakistan now exports processed cotton goods rather than raw cotton.',
    '## How has the mix changed?');
}

// 03 GDP and GNP
{
  let b = '';
  const h = 90, y = 150;
  b += rect(60, y, 360, h, C.teal, C.ink, 2.5, 10) + t(240, y + 40, 'GDP', { size: 26, weight: 700, anchor: 'middle' }) + t(240, y + 70, 'all output inside Pakistan', { size: 16, anchor: 'middle' });
  b += t(450, y + 54, '+', { size: 34, weight: 700, anchor: 'middle' });
  b += rect(480, y, 180, h, C.tealLight, C.tealDark, 2.5, 10) + tl(570, y + 34, ['income earned', 'abroad by', 'Pakistanis'], { size: 16, weight: 600, anchor: 'middle' }, 19);
  b += t(690, y + 54, '−', { size: 34, weight: 700, anchor: 'middle' });
  b += rect(720, y, 150, h, '#f6e4d8', C.rust, 2.5, 10) + tl(795, y + 34, ['income paid', 'to foreign', 'owners'], { size: 16, weight: 600, anchor: 'middle' }, 19);
  b += `<path d="M480,${y + h + 14} L480,${y + h + 30} L870,${y + h + 30} L870,${y + h + 14}" fill="none" stroke="${C.olive}" stroke-width="2.5"/>` + t(675, y + h + 54, 'net income from abroad', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += arrow(450, y + h + 70, 450, y + h + 100, { w: 4 });
  b += rect(60, y + h + 106, 810, 80, C.mustard, C.ink, 3, 12) + t(465, y + h + 140, 'GNP', { size: 26, weight: 700, anchor: 'middle' }) + t(465, y + h + 168, 'output of Pakistan’s residents and companies, wherever they are', { size: 16, anchor: 'middle' });
  const y2 = y + h + 210;
  b += tbox(30, y2, 410, 'Examples of income abroad', 'Profits and interest earned overseas by Pakistanis.', { h: 100 });
  b += tbox(460, y2, 410, 'Examples paid out', 'Profits sent home by foreign firms operating in Pakistan.', { h: 100 });
  b += t(450, y2 + 136, 'Divide either by population to compare living standards per person.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('03-gdp-gnp',
    svg(900, y2 + 160, 'GDP and GNP', b),
    'An equation diagram: GDP, the output produced inside Pakistan, plus income earned abroad by Pakistanis, minus income paid to foreign owners, gives GNP. The last two together are net income from abroad.',
    'GNP adjusts GDP for income flowing in from and out to other countries.',
    '## What are GDP and GNP, and how do they differ?');
}

// 04 Deficit chain
{
  const steps = [
    ['Widening trade deficit', 'imports exceed exports', C.rust],
    ['Reserves fall', 'more foreign currency needed than exports earn', C.rust],
    ['Gap filled', 'remittances (about US$30 billion in 2023–24), loans, IMF or friendly countries', C.olive],
    ['Rupee weakens', 'fuel and machinery imports dearer; inflation rises', C.rust],
    ['Loan repayments', 'take money from schools, health and development', C.rust],
  ];
  let b = '';
  steps.forEach(([h, s, c], i) => {
    const y = 116 + i * 112;
    b += rect(140, y, 620, 94, i === 2 ? C.cream : '#ffffff', c, 2.5, 12) + badge(100, y + 47, 22, String(i + 1), i === 0 ? C.mustard : C.cream) + t(164, y + 34, h, { size: 20, weight: 700, fill: c }) + para(164, y + 62, s, 580, { size: 16, fill: C.muted }, 20);
    if (i < 4) b += arrow(450, y + 96, 450, y + 110, { w: 3.5 });
  });
  const y = 116 + 5 * 112 + 6;
  b += panel(30, y, 840, 84, C.tealLight, C.tealDark) + t(54, y + 34, 'The way out', { size: 19, weight: 700, fill: C.tealDark }) + t(54, y + 62, 'Rising exports of higher value-added goods narrow the gap, create jobs and pay for machinery.', { size: 16 });
  add('04-deficit-chain',
    svg(900, y + 104, 'Why a trade deficit matters', b),
    'Five linked steps: a widening trade deficit causes reserves to fall; the gap is filled by remittances, loans and IMF help; the rupee weakens, making fuel and machinery dearer and raising inflation; loan repayments take money from schools and health. A box shows that higher value-added exports narrow the gap.',
    'A trade deficit drains reserves, weakens the rupee and squeezes spending at home.',
    '## How do trade trends affect the balance of trade and the economy?');
}

// 05 Partners (schematic hub)
{
  const cx = 450, cy = 420;
  const parts = [
    ['United States', 'Knitwear, bed linen, garments', 'Cotton, soybeans, machinery', 0, 0],
    ['China', 'Cotton yarn, copper, rice, seafood', 'Machinery, electrical goods, solar panels', 1, 0],
    ['UK and EU', 'Garments, bed linen, leather, sports goods', 'Machinery, vehicles, chemicals', 0, 1],
    ['Gulf: Saudi Arabia, Kuwait, Qatar, UAE', 'Rice, textiles, food, meat', 'Crude oil, petroleum products, LNG', 1, 1],
    ['Indonesia and Malaysia', 'Rice, textiles', 'Palm oil', 0, 2],
    ['Afghanistan', 'Food, cement, medicines', 'Coal, fruit, vegetables, cotton', 1, 2],
  ];
  const w = 310, hh = 140;
  let lines_ = '', boxes = '';
  parts.forEach(([n, ex, im, c, r]) => {
    const bx = c ? 560 : 30, by = 120 + r * 160;
    const ex_ = c ? bx : bx + w, ey = by + hh / 2;
    lines_ += `<line x1="${cx}" y1="${cy}" x2="${ex_}" y2="${ey}" stroke="${C.panelEdge}" stroke-width="5"/>`;
    const nl = wrap(n, 17, w - 24);
    boxes += rect(bx, by, w, hh, '#ffffff', C.ink, 2.5, 12) + tl(bx + 14, by + 28, nl, { size: 17, weight: 700 }, 20);
    let yy = by + 32 + nl.length * 20;
    const el = wrap(ex, 15, w - 90), il = wrap(im, 15, w - 90);
    boxes += t(bx + 14, yy, '▲ out', { size: 15, weight: 700, fill: C.tealDark }) + tl(bx + 74, yy, el, { size: 15 }, 18);
    yy += el.length * 18 + 6;
    boxes += t(bx + 14, yy, '▼ in', { size: 15, weight: 700, fill: C.rust }) + tl(bx + 74, yy, il, { size: 15 }, 18);
  });
  let b = lines_ + boxes + `<ellipse cx="${cx}" cy="${cy}" rx="80" ry="56" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + 8, 'Pakistan', { size: 22, weight: 700, anchor: 'middle' });
  b += t(450, 618, 'Schematic, not a map. ▲ out = what Pakistan exports; ▼ in = what Pakistan imports.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += panel(30, 636, 840, 84, C.cream, C.olive) + t(450, 670, 'The United States is generally the largest export market;', { size: 18, weight: 700, anchor: 'middle' }) + t(450, 698, 'China is the largest source of imports.', { size: 18, weight: 700, anchor: 'middle' });
  add('05-trading-partners',
    svg(900, 740, 'Pakistan’s main trading partners', b),
    'A schematic hub with Pakistan at the centre and six partner groups around it, each showing what Pakistan exports to and imports from them: the United States, China, the UK and EU, the Gulf states, Indonesia and Malaysia, and Afghanistan.',
    'The US buys the most from Pakistan; China sells the most to it.',
    '## Who are Pakistan\'s main trading partners?');
}

// 06 Promote vs hinder
{
  let b = '';
  const p = blist(54, 190, ['Trade agreements: EU GSP+ (from 2014), China–Pakistan FTA (from 2007), SAFTA, ECO', 'Location: Karachi, Port Qasim and Gwadar close to Gulf markets; land routes to China and Afghanistan', 'A weaker rupee makes exports cheaper abroad'], 362, { size: 17, gap: 12 });
  const h = blist(484, 190, ['Narrow export base: textiles and rice', 'Competition from Bangladesh, Vietnam, India, China', 'Tariffs, quotas and strict standards in rich markets', 'High costs: power, gas, slow port clearance', 'Exchange-rate swings (about Rs 160 to Rs 280 per US$, 2021–24)', 'Political tension, especially with India'], 362, { size: 17, gap: 8, dot: C.rust });
  const H = Math.max(p.h, h.h) + 90;
  b += panel(30, 110, 410, H, C.tealLight, C.tealDark) + t(54, 152, 'Promotes trade', { size: 22, weight: 700, fill: C.tealDark }) + p.svg;
  b += panel(460, 110, 410, H, '#f6e4d8', C.rust) + t(484, 152, 'Hinders trade', { size: 22, weight: 700, fill: C.rust }) + h.svg;
  const y = 110 + H + 20;
  b += panel(30, y, 840, 120, C.cream, C.olive) + t(54, y + 36, 'Why the share stays under one per cent', { size: 19, weight: 700 }) +
    para(54, y + 66, 'Pakistan sells low-to-medium value goods at world prices and buys high-value fuel and machinery; small firms lack capital, technology and branding.', 790, { size: 17 }, 22);
  add('06-promote-hinder',
    svg(900, y + 140, 'What helps and what holds back trade', b),
    'Two columns compare factors that promote trade (agreements such as GSP+ and the China FTA, a coastal location near the Gulf, a weaker rupee) with factors that hinder it (a narrow export base, competition, trade barriers, high costs, exchange-rate swings and political tension). A box explains why Pakistan’s share of world exports stays under one per cent.',
    'More factors hold Pakistan’s trade back than push it forward.',
    '## What promotes and what hinders trade?');
}
