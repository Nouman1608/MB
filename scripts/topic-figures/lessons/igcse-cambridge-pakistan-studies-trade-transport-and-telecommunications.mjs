import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-pakistan-studies-trade-transport-and-telecommunications';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file so style.mjs stays shared and untouched) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const GW = { ' ': .28, a: .55, b: .6, c: .55, d: .6, e: .57, f: .35, g: .6, h: .59, i: .25, j: .25, k: .53, l: .25, m: .88, n: .59, o: .59, p: .6, q: .6, r: .38, s: .5, t: .36, u: .59, v: .53, w: .79, x: .52, y: .53, z: .52, I: .28, M: .85, W: .95, '.': .27, ',': .27, ';': .27, ':': .27, '(': .35, ')': .35, "'": .25, '’': .25, '‘': .25, '"': .4, '–': .6, '—': 1, '-': .4, '/': .38, '•': .4, '%': .8, '&': .7 };
const tw = (s, size, weight = 400) => [...String(s)].reduce((a, ch) => a + (GW[ch] ?? (/[A-Z]/.test(ch) ? .68 : /[0-9]/.test(ch) ? .6 : .6)), 0) * size * (weight >= 600 ? 1.06 : 1);
const wrap = (s, width, size, weight) => {
  const out = [];
  for (const p of String(s).split('\n')) {
    let line = '';
    for (const w of p.split(' ')) { const c = line ? line + ' ' + w : w; if (line && tw(c, size, weight) > width) { out.push(line); line = w; } else line = c; }
    out.push(line);
  }
  return out;
};
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
// wrapped paragraph, y = first baseline; returns {s, h}
const para = (x, y, s, width, o = {}) => {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  const L = wrap(s, width, size, o.weight || 400);
  return { s: L.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: L.length * lh, n: L.length };
};
const R = (x, y, w, h, fill = C.panel, edge = C.panelEdge, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${fill}" stroke="${edge}" stroke-width="${o.sw ?? 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
// card: title + body (string or array; bullets) -> {s, h}. Fixed height via o.h.
const card = (x, y, w, o = {}) => {
  const { title, body, fill = C.panel, edge = C.panelEdge, ts = 20, bs = 17, tfill = C.ink, bfill = C.muted, pad = 18, align = 'start', bullets = false, sub } = o;
  let inner = '', cy = y + pad - 2;
  const tx = align === 'middle' ? x + w / 2 : x + pad, iw = w - 2 * pad;
  if (title) { const p = para(tx, cy + ts * 0.85, title, iw, { size: ts, weight: 700, fill: tfill, anchor: align }); inner += p.s; cy += p.h + 2; }
  if (sub) { const p = para(tx, cy + 15 * 0.85, sub, iw, { size: 15, fill: o.subfill || C.muted, anchor: align, weight: 600 }); inner += p.s; cy += p.h + 2; }
  if (body) {
    if (title || sub) cy += 4;
    const items = Array.isArray(body) ? body : [body];
    for (const it of items) {
      if (bullets) { const p = para(tx + 16, cy + bs * 0.85, it, iw - 16, { size: bs, fill: bfill }); inner += T(tx, cy + bs * 0.85, '•', { size: bs, fill: bfill, weight: 700 }) + p.s; cy += p.h + 3; }
      else { const p = para(tx, cy + bs * 0.85, it, iw, { size: bs, fill: bfill, anchor: align }); inner += p.s; cy += p.h + 3; }
    }
  }
  const h = o.h || Math.round(cy - y + pad - 6);
  return { s: R(x, y, w, h, fill, edge, o) + inner, h };
};
const cardH = (w, o) => card(0, 0, w, o).h;
// vertical timeline: items [{d, title, body, hi}] -> {s, h}
const timeline = (x, y, w, items, o = {}) => {
  const dw = o.dw || 130, gap = o.gap || 14, cx = x + dw / 2;
  let s = '', cy = y; const mids = [];
  for (const it of items) {
    const c = card(x + dw + 22, cy, w - dw - 22, { title: it.title, body: it.body, ts: o.ts || 19, bs: o.bs || 16, fill: it.hi ? C.cream : C.panel, edge: it.hi ? C.olive : C.panelEdge, bullets: it.bullets });
    const ph = 40, py = cy + Math.min(c.h / 2, 34) - ph / 2;
    s += c.s; mids.push([py, ph, it]);
    cy += c.h + gap;
  }
  const line = `<line x1="${cx}" y1="${y + 10}" x2="${cx}" y2="${cy - gap - 10}" stroke="${C.ink}" stroke-width="4"/>`;
  const pills = mids.map(([py, ph, it]) => R(x, py, dw, ph, it.hi ? C.mustard : C.cream, C.ink, { rx: 20, sw: 2.5 }) + T(cx, py + 27, it.d, { size: tw(it.d, 19, 700) > dw - 14 ? 16 : 19, weight: 700, anchor: 'middle' }) +
    `<line x1="${x + dw}" y1="${py + ph / 2}" x2="${x + dw + 22}" y2="${py + ph / 2}" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  return { s: line + s + pills, h: cy - gap - y };
};
// grid table: cols [{label, w}], rows [[cells]] -> {s, h}
const grid = (x, y, cols, rows, o = {}) => {
  const size = o.size || 16, hs = o.hs || 17, pad = 12, lh = Math.round(size * 1.32);
  const W = cols.reduce((a, c) => a + c.w, 0);
  const hh = Math.max(...cols.map((c) => wrap(c.label, c.w - 2 * pad, hs, 700).length)) * Math.round(hs * 1.3) + 22;
  let s = '', cy = y + hh, body = '';
  const head = cols.map((c, i) => { const xx = x + cols.slice(0, i).reduce((a, k) => a + k.w, 0); return para(xx + pad, y + 15 + hs * 0.85, c.label, c.w - 2 * pad, { size: hs, weight: 700 }).s; }).join('');
  rows.forEach((r, ri) => {
    const cells = r.map((cell, i) => wrap(cell, cols[i].w - 2 * pad, size, i === 0 && o.firstBold !== false ? 700 : 400));
    const rh = Math.max(...cells.map((L) => L.length)) * lh + 20;
    const hi = o.hiRows && o.hiRows.includes(ri);
    body += `<rect x="${x}" y="${cy}" width="${W}" height="${rh}" fill="${hi ? C.cream : ri % 2 ? C.tealLight : C.panel}"/>`;
    cells.forEach((L, i) => { const xx = x + cols.slice(0, i).reduce((a, k) => a + k.w, 0); body += L.map((l, k) => T(xx + pad, cy + 12 + size * 0.85 + k * lh, l, { size, weight: i === 0 && o.firstBold !== false ? 700 : 400, fill: i === 0 ? C.ink : C.ink })).join(''); });
    body += `<line x1="${x}" y1="${cy}" x2="${x + W}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    cy += rh;
  });
  let vx = x; const vl = cols.slice(0, -1).map((c) => { vx += c.w; return `<line x1="${vx}" y1="${y}" x2="${vx}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`; }).join('');
  s = `<rect x="${x}" y="${y}" width="${W}" height="${cy - y}" rx="12" fill="${C.panel}"/>` + `<path d="M${x},${y + hh} L${x},${y + 12} Q${x},${y} ${x + 12},${y} L${x + W - 12},${y} Q${x + W},${y} ${x + W},${y + 12} L${x + W},${y + hh} Z" fill="${C.teal}"/>` +
    body + vl + head + `<rect x="${x}" y="${y}" width="${W}" height="${cy - y}" rx="12" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  return { s, h: cy - y };
};
// elbow connector with arrow head: points [[x,y],...]
const elbow = (pts, o = {}) => path('M' + pts.map((p) => p.join(',')).join(' L'), { stroke: o.color || C.ink, w: o.w || 3.5, extra: `marker-end="url(#${o.marker || 'ah'})"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}` });
const note = (x, y, w, s, o = {}) => card(x, y, w, { body: s, fill: C.cream, edge: C.olive, bfill: C.ink, bs: o.bs || 17, title: o.title, ts: o.ts || 19, ...o });
// ---- end helpers ----

// 01 Exports out, imports in
{
  const y = 112;
  const ex = ['Cotton yarn, cloth, garments, bed linen, towels', 'Rice', 'Leather and leather goods', 'Sports goods, surgical instruments', 'Fruit, vegetables, fish'];
  const im = ['Crude oil and petroleum products', 'Machinery and transport equipment', 'Chemicals, fertilisers, medicines', 'Edible oil (palm oil)', 'Iron and steel; tea'];
  const w = 300;
  const o1 = { title: 'Main exports', body: ex, bullets: true, bs: 16, fill: C.cream, edge: C.olive, bfill: C.ink };
  const o2 = { title: 'Main imports', body: im, bullets: true, bs: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink };
  const h = Math.max(cardH(w, o1), cardH(w, o2));
  let b = card(30, y, w, { ...o1, h }).s + card(570, y, w, { ...o2, h }).s;
  const cy = y + h / 2;
  b += `<circle cx="450" cy="${cy}" r="72" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(450, cy + 7, 'Pakistan', { size: 21, weight: 700, anchor: 'middle' });
  b += arrow(388, cy - 40, 338, cy - 40, { w: 6, color: C.olive, marker: 'ahO' }) + arrow(562, cy + 40, 512, cy + 40, { w: 6, color: C.tealDark, marker: 'ahT' });
  b += T(450, cy - 92, 'goods out', { size: 16, weight: 700, fill: C.olive, anchor: 'middle' }) + T(450, cy + 104, 'goods in', { size: 16, weight: 700, fill: C.tealDark, anchor: 'middle' });
  const y2 = y + h + 24;
  const t1 = { title: 'Long-term change in exports', body: 'From raw materials such as raw cotton towards processed and manufactured goods such as yarn, cloth and garments, which earn more value-added.', fill: C.panel, bs: 16 };
  const t2 = { title: 'Why the import bill swings', body: 'Imports are dominated by fuel and machinery, so the bill rises sharply when world oil prices rise.', fill: C.panel, bs: 16 };
  const h2 = Math.max(cardH(410, t1), cardH(410, t2));
  b += card(30, y2, 410, { ...t1, h: h2 }).s + card(460, y2, 410, { ...t2, h: h2 }).s;
  add('01-exports-imports',
    svg(900, y2 + h2 + 30, 'What Pakistan sells and buys', b),
    'Pakistan’s main exports (cotton textiles, rice, leather, sports goods and surgical instruments, fruit, vegetables and fish) flow out, and its main imports (crude oil and petroleum products, machinery, chemicals and fertilisers, palm oil, iron, steel and tea) flow in. Notes explain the shift to processed exports and why oil prices drive the import bill.',
    'Exports are mostly textiles and food; imports are mostly fuel and machinery.',
    '## What does Pakistan export and import?');
}

// 02 GDP, GNP and the balance of trade
{
  const y = 112;
  let b = '';
  b += R(30, y, 500, 230, C.tealLight, C.tealDark, { rx: 16 }) + T(50, y + 36, 'GNP', { size: 24, weight: 700 }) + T(50, y + 60, 'GDP + income from abroad − income sent out', { size: 16, fill: C.muted });
  b += R(60, y + 84, 300, 126, C.panel, C.ink, { rx: 12 }) + T(80, y + 118, 'GDP', { size: 24, weight: 700 }) + tl(80, y + 146, ['value of goods and services', 'produced within Pakistan', 'in a year'], { size: 16, fill: C.ink }, 20);
  b += R(378, y + 84, 136, 126, C.cream, C.olive, { rx: 12 }) + tl(446, y + 118, ['+ income', 'earned', 'abroad, e.g.', 'remittances'], { size: 15, anchor: 'middle', weight: 600 }, 20);
  const g1 = card(550, y, 320, { title: 'Why GNP > GDP', body: 'Remittances from Pakistanis working overseas help make GNP larger than GDP.', fill: C.panel, bs: 15 });
  b += g1.s + card(550, y + g1.h + 10, 320, { title: 'Minus', body: 'Income sent out of Pakistan by foreign firms.', fill: '#f6e3d6', edge: C.rust, bfill: C.ink, h: 230 - g1.h - 10, bs: 15 }).s;
  const y2 = y + 270;
  b += T(30, y2, 'BALANCE OF TRADE = value of exports − value of imports', { size: 19, weight: 700 });
  const bars = y2 + 30;
  b += `<rect x="30" y="${bars}" width="340" height="44" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(42, bars + 29, 'exports earn', { size: 17, weight: 700 });
  b += `<rect x="30" y="${bars + 56}" width="500" height="44" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(42, bars + 85, 'imports cost', { size: 17, weight: 700 });
  b += `<rect x="370" y="${bars}" width="160" height="44" fill="none" stroke="${C.rust}" stroke-width="3" stroke-dasharray="7 5"/>` + T(450, bars + 29, 'deficit', { size: 17, weight: 700, fill: C.rust, anchor: 'middle' });
  b += T(30, bars + 128, 'bar lengths are schematic', { size: 15, fill: C.muted, italic: true });
  const steps = ['Borrowing', 'Pressure on the rupee', 'Less money for development'];
  steps.forEach((s, i) => { const yy = bars - 8 + i * 46; b += R(600, yy, 270, 38, '#f6e3d6', C.rust, { rx: 19 }) + T(735, yy + 25, s, { size: 16, weight: 700, anchor: 'middle' }); });
  b += arrow(540, bars + 50, 592, bars + 50, { w: 4, color: C.rust, marker: 'ahR' });
  b += T(735, bars - 22, 'a persistent deficit means', { size: 15, fill: C.muted, anchor: 'middle' });
  add('02-gdp-gnp-balance',
    svg(900, bars + 150, 'GDP, GNP and the balance of trade', b),
    'GDP, the value of goods and services produced within Pakistan in a year, sits inside GNP, which adds income earned abroad such as remittances and subtracts income sent out by foreign firms. Below, bars show imports costing more than exports earn, a trade deficit that leads to borrowing, pressure on the rupee and less money for development.',
    'Remittances lift GNP above GDP; a trade deficit drains money from development.',
    '## What are GNP, GDP and the balance of trade?');
}

// 03 Trading partners
{
  const parts = [
    ['USA', 'A leading market for textiles', 'out'],
    ['UK and EU countries', 'Buy textiles, rice and leather', 'out'],
    ['Afghanistan', 'Land neighbour: buys food and manufactured goods', 'out'],
    ['China', 'Leading source of machinery and manufactured goods; growing partner through CPEC', 'in'],
    ['UAE and Saudi Arabia', 'Supply oil', 'in'],
  ];
  const w = 300;
  const h = Math.max(...parts.map(([a, c]) => cardH(w, { title: a, body: c, bs: 16 })));
  let b = T(180, 132, 'BUY FROM PAKISTAN', { size: 16, weight: 700, fill: C.olive, anchor: 'middle' }) + T(720, 132, 'SELL TO PAKISTAN', { size: 16, weight: 700, fill: C.tealDark, anchor: 'middle' });
  const L = parts.filter((p) => p[2] === 'out'), Rr = parts.filter((p) => p[2] === 'in');
  const cy = 148 + (3 * (h + 14) - 14) / 2;
  L.forEach(([a, c], i) => { const y = 148 + i * (h + 14); b += card(30, y, w, { title: a, body: c, bs: 16, h, fill: C.cream, edge: C.olive, bfill: C.ink }).s + arrow(380, cy + (i - 1) * 30, 336, y + h / 2, { w: 3, color: C.olive, marker: 'ahO' }); });
  Rr.forEach(([a, c], i) => { const y = 148 + (i + 0.5) * (h + 14); b += card(570, y, w, { title: a, body: c, bs: 16, h, fill: C.tealLight, edge: C.tealDark, bfill: C.ink }).s + arrow(564, y + h / 2, 522, cy + (i ? 30 : -30), { w: 3, color: C.tealDark, marker: 'ahT' }); });
  b += `<circle cx="450" cy="${cy}" r="66" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(450, cy + 7, 'Pakistan', { size: 20, weight: 700, anchor: 'middle' });
  const ny = 148 + 3 * (h + 14) + 6;
  const n = note(30, ny, 840, 'Learn current partners from your course statistics; the overall pattern is stable.');
  add('03-trading-partners',
    svg(900, ny + n.h + 30, 'Pakistan’s main trading partners', b + n.s),
    'Pakistan at the centre. Buyers of Pakistani goods are the USA (textiles), the UK and EU (textiles, rice and leather) and Afghanistan (food and manufactured goods). Suppliers are China (machinery and manufactured goods, and CPEC) and the UAE and Saudi Arabia (oil).',
    'Textiles go mainly west; machinery comes from China and oil from the Gulf.',
    '## Who are Pakistan\'s trading partners?');
}

// 04 Hindering and promoting factors
{
  const hin = ['Exports concentrated in a few products, especially textiles', 'Competition from other low-cost textile and rice producers', 'Tariffs, quotas and quality standards in richer markets', 'Energy shortages and high costs raise production costs', 'A weak rupee makes imports dearer'];
  const pro = ['Trading blocs and agreements: SAARC, ECO', 'EU GSP+ scheme lowers tariffs on many Pakistani exports', 'A falling rupee can make exports cheaper abroad'];
  const o1 = { title: 'Hinder trade', body: hin, bullets: true, bs: 16, fill: '#f6e3d6', edge: C.rust, bfill: C.ink, ts: 22 };
  const o2 = { title: 'Promote trade', body: pro, bullets: true, bs: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, ts: 22 };
  const h = Math.max(cardH(410, o1), cardH(410, o2));
  let b = card(30, 112, 410, { ...o1, h }).s + card(460, 112, 410, { ...o2, h }).s;
  add('04-trade-factors',
    svg(900, 112 + h + 30, 'Why growing trade is hard for Pakistan', b),
    'Two columns. Factors that hinder trade: dependence on textiles, low-cost competitors, tariffs, quotas and standards in richer markets, energy shortages and costs, and a weak rupee making imports dearer. Factors that promote it: SAARC, ECO, the EU’s GSP+ scheme and cheaper exports when the rupee falls.',
    'More barriers than boosts: narrow exports and high costs hold trade back.',
    '## Why is it hard for Pakistan to increase its share of trade?');
}

// 05 Dense and sparse networks
{
  const y = 112;
  const net = (x, dense) => {
    let s = `<rect x="${x + 20}" y="${y + 70}" width="370" height="200" rx="8" fill="${dense ? '#e3ecd6' : C.sand}"/>`;
    if (dense) {
      for (let i = 0; i < 6; i++) s += path(`M${x + 30},${y + 90 + i * 32} L${x + 380},${y + 100 + i * 30}`, { stroke: C.ink, w: 2.5 });
      for (let i = 0; i < 7; i++) s += path(`M${x + 50 + i * 52},${y + 78} L${x + 40 + i * 54},${y + 262}`, { stroke: C.ink, w: 2.5 });
      s += path(`M${x + 30},${y + 250} L${x + 380},${y + 90}`, { stroke: C.rust, w: 5, extra: 'stroke-dasharray="12 6"' });
      [[90, 120], [200, 170], [300, 130], [140, 230], [330, 220]].forEach(([a, c]) => { s += `<circle cx="${x + a}" cy="${y + c}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`; });
    } else {
      s += path(`M${x + 30},${y + 220} Q${x + 200},${y + 160} ${x + 380},${y + 120}`, { stroke: C.ink, w: 2.5 }) + path(`M${x + 160},${y + 262} L${x + 200},${y + 180}`, { stroke: C.ink, w: 2.5 });
      s += path(`M${x + 260},${y + 80} l30,40 l30,-40 M${x + 80},${y + 100} l25,30 l25,-30`, { stroke: C.rockDark, w: 4 });
      [[200, 180], [330, 130]].forEach(([a, c]) => { s += `<circle cx="${x + a}" cy="${y + c}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`; });
    }
    return s;
  };
  let b = panel(30, y, 410, 290) + panel(460, y, 410, 290);
  b += T(50, y + 36, 'Densest: Indus Plain', { size: 20, weight: 700 }) + T(50, y + 58, 'Punjab and Sindh', { size: 16, fill: C.muted });
  b += T(480, y + 36, 'Thinnest', { size: 20, weight: 700 }) + T(480, y + 58, 'Balochistan, the mountainous north, deserts', { size: 16, fill: C.muted });
  b += net(30, true) + net(460, false);
  const w1 = { title: 'Why', body: ['Flat land', 'Many people', 'Farms and industry', 'Building is cheap and worthwhile'], bullets: true, bs: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink };
  const w2 = { title: 'Why', body: ['Steep slopes, landslides, floods', 'Snow and sand', 'Sparse population', 'Higher costs, lower demand'], bullets: true, bs: 16, fill: '#f6e3d6', edge: C.rust, bfill: C.ink };
  const h = Math.max(cardH(410, w1), cardH(410, w2));
  b += card(30, y + 304, 410, { ...w1, h }).s + card(460, y + 304, 410, { ...w2, h }).s;
  const ny = y + 304 + h + 20;
  const n = note(30, ny, 840, 'Recent improvements: the M-2 Lahore–Islamabad motorway, the Karakoram Highway upgrade, the new Islamabad International Airport, and planned upgrading of the Karachi–Peshawar main railway line.');
  add('05-network-density',
    svg(900, ny + n.h + 30, 'Where transport networks are dense or thin', b + n.s, 'schematic, not maps'),
    'Two schematic panels. The Indus Plain of Punjab and Sindh has a dense web of roads and railways because the land is flat and there are many people, farms and industries. Balochistan, the mountainous north and the deserts have few routes because of steep slopes, landslides, floods, snow, sand and sparse population. A note lists recent improvements such as the M-2 motorway.',
    'Flat, crowded land gets dense networks; mountains and deserts get few routes.',
    '## How do transport networks vary across Pakistan?');
}

// 06 Cross-border routes and seaports (radial schematic)
{
  const cx = 450, cy = 400;
  let b = R(30, 112, 840, 560, '#e6eef0', C.panelEdge) + T(450, 140, 'directions are approximate; schematic, not a map', { size: 15, fill: C.muted, anchor: 'middle', italic: true });
  b += R(cx - 110, cy - 60, 220, 120, C.mustard, C.ink, { rx: 18 }) + T(cx, cy + 8, 'Pakistan', { size: 24, weight: 700, anchor: 'middle' });
  const nb = [
    ['China', 'Road: Khunjerab Pass (Karakoram Highway)', 640, 170, cx + 70, cy - 62],
    ['Afghanistan', 'Roads: Khyber Pass (Torkham); Chaman near Quetta', 60, 170, cx - 80, cy - 62],
    ['Iran', 'Road and rail (from Quetta) via Taftan', 60, 360, cx - 112, cy],
    ['India', 'Road at Wagah near Lahore; rail line exists but passenger services suspended since 2019', 640, 340, cx + 112, cy],
  ];
  nb.forEach(([n, r, x, y, ax, ay]) => {
    const c = card(x, y, 220, { title: n, body: r, bs: 15, ts: 19, bfill: C.ink });
    b += c.s;
    const ex = x > cx ? x - 4 : x + 224, ey = y + c.h / 2;
    b += `<line x1="${ax}" y1="${ay}" x2="${ex}" y2="${ey}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="8 6"/>`;
  });
  b += `<rect x="32" y="560" width="836" height="110" fill="${C.teal}"/>` + T(450, 590, 'ARABIAN SEA', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  ['Keamari (Karachi Port)', 'Port Qasim', 'Gwadar'].forEach((p, i) => { const x = 120 + i * 240; b += R(x, 610, 210, 42, '#ffffff', C.tealDark, { rx: 21 }) + T(x + 105, 637, p, { size: 16, weight: 700, anchor: 'middle' }); });
  b += arrow(cx, cy + 62, cx, 556, { w: 4, color: C.tealDark, marker: 'ahT' }) + T(cx + 12, 510, 'seaports', { size: 16, weight: 700, fill: C.tealDark });
  const n = note(30, 690, 840, 'International airports include Karachi, Lahore, Islamabad, Peshawar, Quetta and Multan.');
  add('06-international-routes',
    svg(900, 690 + n.h + 30, 'Pakistan’s links with its neighbours', b + n.s),
    'A schematic with Pakistan at the centre. Roads run to China over the Khunjerab Pass on the Karakoram Highway, to Afghanistan through the Khyber Pass at Torkham and via Chaman, to Iran via Taftan (also by rail from Quetta) and to India at Wagah. The seaports of Keamari, Port Qasim and Gwadar face the Arabian Sea.',
    'Each neighbour is reached through a named crossing; three seaports face the Arabian Sea.',
    '## Which international routes and ports must you know?');
}

// 07 How a dry port works
{
  const y = 140;
  const st = [
    ['Inland factory', 'e.g. in Lahore or Faisalabad', C.panel, C.panelEdge],
    ['Dry port', 'Customs clearance; goods loaded into containers', C.mustard, C.ink],
    ['Sealed by rail or road', 'Containers travel unopened', C.panel, C.panelEdge],
    ['Seaport', 'e.g. Karachi', C.tealLight, C.tealDark],
  ];
  const w = 190, h = Math.max(...st.map(([a, c]) => cardH(w, { title: a, body: c, bs: 15, ts: 18 })));
  let b = '';
  st.forEach(([a, c, f, e], i) => { const x = 30 + i * 216.7; b += card(x, y, w, { title: a, body: c, bs: 15, ts: 18, h, fill: f, edge: e, bfill: C.ink }).s; if (i < 3) b += arrow(x + w + 3, y + h / 2, x + 214, y + h / 2, { w: 3.5 }); });
  b += T(450, y - 10, 'exports (imports follow the same route in reverse)', { size: 16, anchor: 'middle', fill: C.muted });
  const by = y + h + 30;
  const ben = ['Saves time', 'Reduces congestion at Karachi', 'Helps exporters in inland industrial cities'];
  ben.forEach((s, i) => { const x = 30 + i * 285; b += R(x, by, 270, 64, C.cream, C.olive) + para(x + 135, by + 28, s, 240, { size: 16, weight: 700, anchor: 'middle' }).s; });
  b += T(30, by - 10, 'WHY THEY HAVE BEEN DEVELOPED', { size: 15, weight: 700, fill: C.olive });
  add('07-dry-port',
    svg(900, by + 94, 'How a dry port works', b),
    'A chain from an inland factory to a dry port such as Lahore or Faisalabad, where goods are cleared through customs and loaded into containers, then travel sealed by rail or road to the seaport. Dry ports save time, reduce congestion at Karachi and help exporters in inland industrial cities.',
    'A dry port brings customs clearance to inland cities.',
    '## Which international routes and ports must you know?');
}
