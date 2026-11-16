import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-pakistan-studies-people-and-economy';
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

// 01 Birth and death rates (schematic)
{
  const gx0 = 110, gx1 = 830, gy0 = 150, gy1 = 470;
  let b = panel(30, 112, 840, 420);
  b += `<line x1="${gx0}" y1="${gy1}" x2="${gx1}" y2="${gy1}" stroke="${C.ink}" stroke-width="3"/><line x1="${gx0}" y1="${gy0 - 10}" x2="${gx0}" y2="${gy1}" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<text transform="translate(${gx0 - 22},${(gy0 + gy1) / 2}) rotate(-90)" font-size="16" fill="${C.muted}" text-anchor="middle">rate (schematic)</text>`;
  b += T(gx0, gy1 + 28, 'independence', { size: 16, fill: C.muted }) + T(gx1, gy1 + 28, 'today', { size: 16, fill: C.muted, anchor: 'end' });
  const birth = `M${gx0},175 C350,175 520,200 ${gx1},365`;
  const death = `M${gx0},300 C220,400 320,430 ${gx1},440`;
  b += `<path d="${birth} L${gx1},440 C320,430 220,400 ${gx0},300 Z" fill="${C.cream}" opacity="0.9"/>`;
  b += path(birth, { stroke: C.olive, w: 5 }) + path(death, { stroke: C.tealDark, w: 5 });
  b += T(gx0 + 20, 160, 'birth rate: fell much more slowly', { size: 17, weight: 700, fill: C.olive });
  b += T(gx0 + 70, 318, 'death rate: fell sharply', { size: 17, weight: 700, fill: C.tealDark });
  b += T(580, 330, 'natural increase', { size: 19, weight: 700, anchor: 'middle' }) + T(580, 354, '(the gap): narrowing but still high', { size: 16, anchor: 'middle' });
  const y = 552;
  const d1 = { title: 'Why deaths fell', body: ['Vaccination', 'Antibiotics', 'Cleaner water', 'Better food supply'], bullets: true, bs: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink };
  const d2 = { title: 'Why the gap is narrowing', body: ['More girls stay in school', 'Marriage age rises', 'Family planning spreads'], bullets: true, bs: 16, fill: C.cream, edge: C.olive, bfill: C.ink };
  const h = Math.max(cardH(410, d1), cardH(410, d2));
  b += card(30, y, 410, { ...d1, h }).s + card(460, y, 410, { ...d2, h }).s;
  add('01-birth-death-rates',
    svg(900, y + h + 30, 'Why Pakistan’s population grew so fast', b, 'shape of the trend only, not real data'),
    'A schematic graph from independence to today. The death rate falls sharply while the birth rate falls much more slowly, leaving a wide gap, the natural increase, which narrows but stays high. Cards give reasons: vaccination, antibiotics, cleaner water and better food cut deaths; girls’ schooling, later marriage and family planning narrow the gap.',
    'Deaths fell fast and births slowly, so the population grew rapidly.',
    '## How has Pakistan\'s population changed?');
}

// 02 Migration within and from Pakistan
{
  const y = 112;
  let b = R(30, y, 250, 250, '#e3ecd6', C.grass) + R(620, y, 250, 250, C.tealLight, C.tealDark);
  b += T(155, y + 36, 'Village', { size: 21, weight: 700, anchor: 'middle' }) + T(745, y + 36, 'City', { size: 21, weight: 700, anchor: 'middle' });
  b += T(46, y + 72, 'PUSH', { size: 16, weight: 700, fill: C.rust }) + tl(46, y + 100, ['• Low farm incomes', '• Small holdings', '• Mechanisation', '• Floods', '• Poor services'], { size: 16 }, 24);
  b += T(636, y + 72, 'PULL', { size: 16, weight: 700, fill: C.tealDark }) + tl(636, y + 100, ['• Jobs in factories,', '   construction, services', '• Better schools and', '   hospitals'], { size: 16 }, 24);
  b += arrow(290, y + 110, 610, y + 110, { w: 9, color: C.olive, marker: 'ahO' }) + T(450, y + 94, 'rural to urban', { size: 17, weight: 700, fill: C.olive, anchor: 'middle' });
  b += tl(450, y + 160, ['villages lose young workers;', 'cities grow informal settlements'], { size: 15, anchor: 'middle', fill: C.muted }, 20);
  const y2 = y + 280;
  b += T(30, y2, 'INTERNATIONAL MIGRATION', { size: 16, weight: 700, fill: C.blue });
  const out = { title: 'Out of Pakistan', body: ['Millions working in the Gulf states, especially Saudi Arabia and the UAE', 'Communities in the UK, Europe and North America'], bullets: true, bs: 16 };
  const inn = { title: 'Into Pakistan', body: ['Large numbers of Afghan refugees since 1979'], bullets: true, bs: 16 };
  const h1 = Math.max(cardH(410, out), cardH(410, inn));
  b += card(30, y2 + 14, 410, { ...out, h: h1, bfill: C.ink }).s + card(460, y2 + 14, 410, { ...inn, h: h1, bfill: C.ink }).s;
  const y3 = y2 + 14 + h1 + 16;
  const g = { title: 'Gains', body: ['Remittances support families and the balance of payments', 'Diaspora spreads Pakistani culture abroad'], bullets: true, bs: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink };
  const l = { title: 'Losses', body: ['Brain drain: skilled workers such as doctors and engineers leave'], bullets: true, bs: 16, fill: '#f6e3d6', edge: C.rust, bfill: C.ink };
  const h2 = Math.max(cardH(410, g), cardH(410, l));
  b += card(30, y3, 410, { ...g, h: h2 }).s + card(460, y3, 410, { ...l, h: h2 }).s;
  add('02-migration',
    svg(900, y3 + h2 + 30, 'Migration within and from Pakistan', b),
    'Rural push factors (low farm incomes, small holdings, mechanisation, floods, poor services) and urban pull factors (jobs and better schools and hospitals) drive rural-to-urban migration. Internationally, millions work in the Gulf and live in the UK, Europe and North America, while Afghan refugees have arrived since 1979. Gains include remittances; losses include brain drain.',
    'Migration brings remittances but drains skills from Pakistan and young workers from villages.',
    '## Why do people migrate within and from Pakistan?');
}

// 03 Changing economic sectors
{
  const sec = [
    ['Primary', 'Share of GDP has fallen steadily, but still employs more than a third of workers', 'Irrigated plains of Punjab and Sindh: wheat, cotton, rice, sugar cane', C.cream, C.olive],
    ['Secondary', 'Grew from the 1950s, led by cotton textiles, then cement, fertiliser, sugar, steel, cars and pharmaceuticals', 'Karachi, Lahore, Faisalabad, Sialkot', C.sand, C.olive],
    ['Tertiary', 'Now produces the largest share of GDP: retail, transport, banking, telecoms, health, education, government', 'Throughout, especially cities', C.tealLight, C.tealDark],
    ['Quaternary', 'Software, IT outsourcing and research: growing', 'Lahore, Karachi, Islamabad: skilled graduates, fast internet, investment', C.teal, C.tealDark],
  ];
  const w = 197, h = Math.max(...sec.map(([a, c, d]) => cardH(w, { title: a, body: [c, 'Where: ' + d], bs: 15, ts: 19 })));
  let b = R(30, 112, 840, 50, C.panel, C.ink) + T(450, 144, 'At independence: overwhelmingly agricultural, with little industry', { size: 17, weight: 700, anchor: 'middle' });
  b += arrow(450, 166, 450, 196, { w: 4 });
  sec.forEach(([a, c, d, f, e], i) => { b += card(30 + i * 214.3, 204, w, { title: a, body: [c, 'Where: ' + d], bs: 15, ts: 19, h, fill: f, edge: e, bfill: C.ink }).s; });
  const n = note(30, 204 + h + 20, 840, 'Textiles remain the largest manufacturing employer and exporter.');
  add('03-economic-sectors',
    svg(900, 204 + h + 20 + n.h + 30, 'How Pakistan’s economy has changed', b + n.s),
    'From a mainly agricultural economy at independence to four sectors: primary farming on the irrigated plains, still the largest single employer; secondary manufacturing led by textiles in Karachi, Lahore, Faisalabad and Sialkot; tertiary services, now the largest share of GDP; and growing quaternary IT and research in Lahore, Karachi and Islamabad.',
    'Services now produce most output, but farming still employs the most workers.',
    '## How has the economy changed over the past 100 years?');
}

// 04 Development indicators
{
  const g = grid(30, 112, [{ label: 'Indicator', w: 160 }, { label: 'What it shows', w: 340 }, { label: 'Limitation', w: 340 }], [
    ['GDP', 'Total value of goods and services produced in a year', 'Ignores inequality and the informal economy'],
    ['GDP per capita', 'Average output per person', 'Hides gaps between rich and poor, urban and rural'],
    ['HDI', 'Combines life expectancy, education and income', 'Does not show regional differences'],
    ['FDI', 'Investment by foreign companies, e.g. through CPEC', 'Can create debt or send profits abroad'],
    ['Trade', 'Value of exports and imports', 'Swings with global prices'],
  ], { size: 16, hiRows: [2] });
  const n = note(30, 112 + g.h + 20, 840, 'The UN Development Programme places Pakistan among countries with lower human development, reflecting low adult literacy and high child mortality as well as income.');
  add('04-development-indicators',
    svg(900, 112 + g.h + 20 + n.h + 30, 'Measuring development: what each indicator misses', g.s + n.s),
    'A table of five indicators (GDP, GDP per capita, HDI, FDI and trade) with what each shows and its limitation. HDI is highlighted because it combines life expectancy, education and income; Pakistan is classed among countries with lower human development.',
    'Every indicator shows something and hides something; use more than one.',
    '## How is economic development measured?');
}

// 05 Trade and the deficit
{
  const y = 112;
  const ex = ['Textiles and clothing (largest)', 'Rice', 'Leather goods', 'Sports goods, surgical instruments', 'Fruit and fish'];
  const im = ['Petroleum and LNG', 'Machinery', 'Chemicals', 'Palm oil', 'Iron and steel; vehicles'];
  const o1 = { title: 'Exports', body: ex, bullets: true, bs: 16, fill: C.cream, edge: C.olive, bfill: C.ink };
  const o2 = { title: 'Imports', body: im, bullets: true, bs: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink };
  const h = Math.max(cardH(410, o1), cardH(410, o2));
  let b = card(30, y, 410, { ...o1, h }).s + card(460, y, 410, { ...o2, h }).s;
  const by = y + h + 40;
  b += T(30, by - 12, 'THE BALANCE (bar lengths schematic)', { size: 15, weight: 700, fill: C.muted });
  b += `<rect x="30" y="${by}" width="420" height="44" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(42, by + 29, 'export earnings', { size: 17, weight: 700 });
  b += `<rect x="450" y="${by}" width="180" height="44" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="7 5"/>` + T(540, by + 29, 'remittances', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += `<rect x="30" y="${by + 56}" width="640" height="44" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(42, by + 85, 'import bill', { size: 17, weight: 700 });
  b += tl(690, by + 30, ['trade deficit, which', 'remittances help', 'to cover'], { size: 16, weight: 700, fill: C.rust }, 21);
  const py = by + 150;
  const p = [['China', 'Largest source of imports'], ['USA', 'Major export market'], ['UAE and Saudi Arabia', 'Oil and jobs'], ['UK and EU', 'EU GSP+ gives many goods tariff-free access']];
  const pw = 197, ph = Math.max(...p.map(([a, c]) => cardH(pw, { title: a, body: c, bs: 15, ts: 17 })));
  b += T(30, py - 12, 'KEY PARTNERS', { size: 15, weight: 700, fill: C.olive });
  p.forEach(([a, c], i) => { b += card(30 + i * 214.3, py, pw, { title: a, body: c, bs: 15, ts: 17, h: ph, bfill: C.ink }).s; });
  const n = note(30, py + ph + 20, 840, 'Also: a free-trade agreement with China; membership of ECO, SAARC and the WTO. Trade is affected by world prices, energy costs, exchange rates, quality standards and political relations.');
  add('05-trade-and-deficit',
    svg(900, py + ph + 20 + n.h + 30, 'What Pakistan trades, and how the gap is filled', b + n.s),
    'Exports are led by textiles and clothing, rice and leather; imports by petroleum and LNG, machinery, chemicals and palm oil. Schematic bars show the import bill larger than export earnings, a trade deficit that remittances help to cover. Key partners are China, the USA, the UAE and Saudi Arabia, and the UK and EU.',
    'Imports cost more than exports earn; remittances help fill the gap.',
    '## What does Pakistan trade, and with whom?');
}

// 06 Urbanisation
{
  const g = grid(30, 112, [{ label: 'Opportunities', w: 280 }, { label: 'Challenges', w: 280 }, { label: 'Strategies', w: 280 }], [
    ['Jobs in industry and services', 'Not enough formal jobs, so many work informally', 'Low-cost housing schemes'],
    ['Universities and schools', 'Shortage of affordable housing; growth of katchi abadis', 'Upgrading informal settlements with water and sanitation, e.g. the Orangi Pilot Project, Karachi'],
    ['Innovation hubs and start-ups', 'Traffic congestion', 'Mass transit such as bus rapid transit'],
    ['Investment and infrastructure, e.g. Lahore’s Orange Line metro', 'Air pollution and winter smog; untreated sewage and waste', 'Tree planting; controls on brick kilns and crop burning to reduce smog'],
  ], { size: 16, firstBold: false });
  const n = note(30, 112 + g.h + 20, 840, 'Around two-fifths of Pakistanis live in urban areas, and the share is rising. Karachi and Lahore are megacities, growing by rural–urban migration and natural increase.');
  add('06-urbanisation',
    svg(900, 112 + g.h + 20 + n.h + 30, 'Urbanisation: opportunities, challenges, strategies', g.s + n.s),
    'A three-column table. Opportunities of city growth include jobs, education, start-ups and infrastructure such as Lahore’s Orange Line. Challenges include too few formal jobs, katchi abadis, congestion, smog and sewage. Strategies include low-cost housing, upgrading settlements as in the Orangi Pilot Project, mass transit and smog controls.',
    'Cities offer jobs and services but face housing, traffic and pollution problems that need planned strategies.',
    '## What are the opportunities and challenges of urbanisation?');
}
