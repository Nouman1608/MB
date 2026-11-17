import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-pakistan-studies-globalisation-transport-and-communication';
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

// 01 Globalisation: five connections
{
  const cx = 450, cy = 330, r = 190;
  const links = [
    ['Trade', 'Export markets for textiles'],
    ['Investment', 'Foreign investment and TNCs'],
    ['Migration', 'Remittances from workers abroad'],
    ['Technology', 'IT outsourcing; cleaner technologies'],
    ['Culture', 'Global brands and products'],
  ];
  let b = '';
  const w = 220;
  links.forEach(([a, c], i) => {
    const ang = (-90 + i * 72) * Math.PI / 180, x = cx + r * Math.cos(ang) * 1.35, y = cy + r * Math.sin(ang);
    b += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${C.tealDark}" stroke-width="4"/>`;
  });
  b += `<circle cx="${cx}" cy="${cy}" r="88" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(cx, cy - 4, 'Pakistan', { size: 22, weight: 700, anchor: 'middle' }) + T(cx, cy + 22, 'in a global web', { size: 16, anchor: 'middle' });
  links.forEach(([a, c], i) => {
    const ang = (-90 + i * 72) * Math.PI / 180, x = cx + r * Math.cos(ang) * 1.35, y = cy + r * Math.sin(ang);
    const cc = card(0, 0, w, { title: a, body: c, bs: 16, ts: 20 });
    b += card(Math.max(30, Math.min(870 - w, x - w / 2)), y - cc.h / 2, w, { title: a, body: c, bs: 16, ts: 20, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, align: 'middle' }).s;
  });
  const ny = cy + r + 70;
  const n = note(30, ny, 840, 'Globalisation is the growing interconnection of countries through trade, investment, migration, technology and culture. Each link brings positive and negative impacts on the economy, people and environment.');
  add('01-globalisation-links',
    svg(900, ny + n.h + 30, 'Five ways Pakistan is connected to the world', b + n.s),
    'Pakistan at the centre linked to five strands of globalisation: trade (textile export markets), investment (foreign investment and TNCs), migration (remittances), technology (IT outsourcing and cleaner technologies) and culture (global brands and products).',
    'Globalisation links Pakistan to the world through trade, investment, migration, technology and culture.',
    '## What is globalisation and how does it affect Pakistan?');
}

// 02 How a TNC works
{
  const y = 112;
  let b = R(30, y, 260, 150, C.cream, C.olive) + T(160, y + 40, 'Headquarters', { size: 20, weight: 700, anchor: 'middle' }) + T(160, y + 66, 'in one country', { size: 16, anchor: 'middle', fill: C.muted });
  b += tl(160, y + 100, ['decisions made here', 'profits return here'], { size: 15, anchor: 'middle', fill: C.olive, weight: 700 }, 20);
  ['Operations in Pakistan', 'Operations elsewhere', 'Operations elsewhere'].forEach((s, i) => { const yy = y + 20 + i * 50; b += R(560, yy, 310, 44, i ? C.panel : C.tealLight, i ? C.panelEdge : C.tealDark, { rx: 22 }) + T(715, yy + 28, s, { size: 16, weight: i ? 400 : 700, anchor: 'middle' }); });
  b += arrow(296, y + 56, 552, y + 42, { w: 4, color: C.tealDark, marker: 'ahT' }) + T(424, y + 30, 'investment, brands, technology', { size: 15, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += arrow(552, y + 62, 296, y + 100, { w: 4, color: C.rust, marker: 'ahR', dash: '9 6' }) + T(440, y + 116, 'profits sent home', { size: 15, weight: 700, fill: C.rust, anchor: 'middle' });
  const ey = y + 180;
  b += card(30, ey, 840, { title: 'Examples in Pakistan', body: 'Consumer-goods firms such as Unilever and Nestlé; car makers in joint ventures such as Pak Suzuki and Indus Motor (Toyota); soft-drink, fast-food, technology and telecommunications firms.', bs: 16, fill: C.panel }).s;
  const eh = cardH(840, { title: 'Examples in Pakistan', body: 'Consumer-goods firms such as Unilever and Nestlé; car makers in joint ventures such as Pak Suzuki and Indus Motor (Toyota); soft-drink, fast-food, technology and telecommunications firms.', bs: 16 });
  const y2 = ey + eh + 20;
  const p = { title: 'Positive impacts', body: ['Jobs and training', 'Tax revenue', 'New technology and management skills', 'Exports', 'Better products for consumers', 'Investment in local suppliers'], bullets: true, bs: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink };
  const ng = { title: 'Negative impacts', body: ['Profits sent back to the home country', 'Small local firms pushed out', 'Pressure on labour standards in supply chains', 'Water use, waste and pollution', 'Dependence on decisions made abroad'], bullets: true, bs: 16, fill: '#f6e3d6', edge: C.rust, bfill: C.ink };
  const h = Math.max(cardH(410, p), cardH(410, ng));
  b += card(30, y2, 410, { ...p, h }).s + card(460, y2, 410, { ...ng, h }).s;
  add('02-how-a-tnc-works',
    svg(900, y2 + h + 30, 'How a transnational corporation works', b),
    'A TNC’s headquarters in one country sends investment, brands and technology to operations in Pakistan and elsewhere, while profits flow back home. Examples include Unilever, Nestlé, Pak Suzuki and Indus Motor. Cards list positive impacts such as jobs, tax and technology, and negative impacts such as profit outflow, loss of local firms and pollution.',
    'TNCs bring investment and skills, but profits and key decisions stay abroad.',
    '## What are TNCs and what is their role in Pakistan?');
}

// 03 Transport modes: where and why
{
  const g = grid(30, 112, [{ label: 'Mode', w: 150 }, { label: 'Where it is strong', w: 330 }, { label: 'What limits it', w: 360 }], [
    ['Road and rail', 'Densest on the flat, populous Indus Plain', 'Steep relief, landslides, snow, earthquakes, deserts and low population in Balochistan and the north'],
    ['Air', 'Links major cities; serves remote northern towns such as Gilgit and Skardu', 'Used where roads are slow'],
    ['River', 'Very limited', 'Flow varies greatly between seasons; barrages block navigation'],
    ['Sea', 'Karachi Port, Port Qasim and Gwadar', '—'],
  ], { size: 16 });
  add('03-transport-modes',
    svg(900, 112 + g.h + 30, 'Five modes of transport: where and why', g.s),
    'A table of transport modes. Road and rail are densest on the Indus Plain and sparse in Balochistan and the north because of relief, hazards and low population. Air links major cities and remote towns such as Gilgit and Skardu. River transport is very limited by seasonal flow and barrages. Sea trade uses Karachi Port, Port Qasim and Gwadar.',
    'Relief and population decide where land transport goes; rivers carry almost nothing.',
    '## Why are transport networks unevenly distributed?');
}

// 04 The Indus Plain corridor (line diagram)
{
  const stops = ['Karachi', 'Hyderabad', 'Multan', 'Lahore', 'Islamabad', 'Peshawar'];
  const x0 = 90, x1 = 810, y = 260;
  let b = R(30, 112, 840, 290, '#e6eef0', C.panelEdge) + T(450, 140, 'line diagram: order of cities only, not distance or direction', { size: 15, fill: C.muted, anchor: 'middle', italic: true });
  b += `<line x1="${x0}" y1="${y - 8}" x2="${x1}" y2="${y - 8}" stroke="${C.ink}" stroke-width="8" stroke-linecap="round"/>` + `<line x1="${x0}" y1="${y + 8}" x2="${x1}" y2="${y + 8}" stroke="${C.olive}" stroke-width="8" stroke-linecap="round" stroke-dasharray="20 10"/>`;
  stops.forEach((s, i) => { const x = x0 + (i * (x1 - x0)) / 5; b += `<circle cx="${x}" cy="${y}" r="16" fill="#ffffff" stroke="${C.ink}" stroke-width="4"/>` + T(x, y + (i % 2 ? 52 : -36), s, { size: 18, weight: 700, anchor: 'middle' }); });
  b += `<line x1="${x0}" y1="${y + 24}" x2="${x0}" y2="${y + 78}" stroke="${C.tealDark}" stroke-width="5"/>` + R(x0 - 50, y + 78, 180, 40, C.teal, C.tealDark, { rx: 20 }) + T(x0 + 40, y + 104, 'sea trade', { size: 16, weight: 700, anchor: 'middle' });
  b += `<line x1="70" y1="${y - 84}" x2="110" y2="${y - 84}" stroke="${C.ink}" stroke-width="8"/>` + T(120, y - 78, 'road', { size: 16 }) + `<line x1="200" y1="${y - 84}" x2="240" y2="${y - 84}" stroke="${C.olive}" stroke-width="8" stroke-dasharray="20 10"/>` + T(250, y - 78, 'rail (main line, ML-1, planned for upgrading)', { size: 16 });
  const n = note(30, 420, 840, 'Road and rail are densest along this flat, populous corridor. Motorways such as the M-2 Lahore–Islamabad cut journey times; the Karakoram Highway links Pakistan to China.');
  add('04-indus-plain-corridor',
    svg(900, 420 + n.h + 30, 'The main transport corridor', b + n.s),
    'A line diagram of the main road and rail corridor across the Indus Plain, linking Karachi, Hyderabad, Multan, Lahore, Islamabad and Peshawar, with sea trade at Karachi. The main railway line (ML-1) is planned for upgrading.',
    'Pakistan’s busiest routes follow the Indus Plain from Karachi to Peshawar.',
    '## What are the opportunities and challenges for transport development?');
}

// 05 CPEC
{
  const y = 112;
  let b = R(330, y, 240, 80, C.mustard, C.ink) + T(450, y + 34, 'CPEC', { size: 26, weight: 700, anchor: 'middle' }) + T(450, y + 60, 'launched 2015', { size: 16, anchor: 'middle' });
  const parts = ['Roads', 'Railways (ML-1)', 'Power stations', 'Gwadar port', 'Special economic zones'];
  parts.forEach((p, i) => { const x = 30 + i * 171, yy = y + 130; b += R(x, yy, 156, 56, C.cream, C.olive) + (() => { const L = wrap(p, 140, 16, 700); return tl(x + 78, yy + (L.length === 1 ? 34 : 24), L, { size: 16, weight: 700, anchor: 'middle' }, 19); })(); b += path(`M450,${y + 80} L${x + 78},${yy - 2}`, { stroke: C.olive, w: 2.5 }); });
  b += T(30, y + 112, 'Chinese investment in:', { size: 16, weight: 700, fill: C.olive });
  const y2 = y + 220;
  const s = { title: 'Supporters say', body: ['Fills infrastructure and energy gaps', 'Creates jobs'], bullets: true, fill: C.tealLight, edge: C.tealDark, bfill: C.ink };
  const c = { title: 'Critics point to', body: ['Debt', 'Share of contracts and jobs going to Chinese firms', 'Need for benefits to reach local communities, especially in Balochistan'], bullets: true, fill: '#f6e3d6', edge: C.rust, bfill: C.ink };
  const h = Math.max(cardH(410, s), cardH(410, c));
  b += card(30, y2, 410, { ...s, h }).s + card(460, y2, 410, { ...c, h }).s;
  add('05-cpec',
    svg(900, y2 + h + 30, 'The China–Pakistan Economic Corridor', b),
    'CPEC, launched in 2015, is Chinese investment in roads, railways including ML-1, power stations, Gwadar port and special economic zones. Supporters say it fills infrastructure and energy gaps and creates jobs; critics point to debt, contracts and jobs going to Chinese firms, and the need for local benefits, especially in Balochistan.',
    'CPEC fills infrastructure gaps but raises questions of debt and who benefits.',
    '## What are the opportunities and challenges for transport development?');
}

// 06 Communication networks
{
  const tlx = timeline(30, 120, 840, [
    { d: '2000s', title: 'Private TV channels', body: 'Expand rapidly.' },
    { d: '2014', title: '3G and 4G licences auctioned', body: 'Mobile internet reaches millions.', hi: true },
    { d: 'Now', title: 'Radio, TV and mobiles', body: 'Radio and television reach most of the population; mobile phones are far more common than landlines.' },
  ], { dw: 150, bs: 16, ts: 18, gap: 10 });
  const y2 = 120 + tlx.h + 24;
  const o = { title: 'Opportunities', body: ['E-commerce', 'Online education and telemedicine', 'Freelancing and IT exports', 'Market prices for farmers'], bullets: true, bs: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink };
  const ch = { title: 'Challenges', body: ['Mountain and desert terrain raise the cost of masts and fibre', 'Power cuts', 'Low digital literacy; gender gap in phone ownership', 'Cyber-security and internet shutdowns'], bullets: true, bs: 16, fill: '#f6e3d6', edge: C.rust, bfill: C.ink };
  const h = Math.max(cardH(410, o), cardH(410, ch));
  const b = tlx.s + card(30, y2, 410, { ...o, h }).s + card(460, y2, 410, { ...ch, h }).s;
  add('06-communication-networks',
    svg(900, y2 + h + 30, 'Expanding communication networks', b),
    'A short timeline: private TV channels expanded from the 2000s, the 2014 auction of 3G and 4G licences brought mobile internet to millions, and today radio and television reach most people and mobile phones far outnumber landlines. Below, opportunities such as e-commerce and telemedicine are set against challenges such as terrain, power cuts and a gender gap in phone ownership.',
    'Mobile internet opened new opportunities, but terrain, power and access still limit them.',
    '## How are communication networks expanding?');
}

// 07 Financial system and inclusion
{
  const y = 112;
  let b = R(30, y, 180, 70, C.cream, C.olive) + T(120, y + 43, 'Savings', { size: 20, weight: 700, anchor: 'middle' });
  const iy = y;
  b += R(260, iy - 10, 380, 90, C.tealLight, C.tealDark) + T(450, iy + 18, 'Financial institutions', { size: 17, weight: 700, anchor: 'middle' }) + T(450, iy + 44, 'banks · microfinance · Islamic banking', { size: 15, anchor: 'middle' }) + T(450, iy + 64, 'stock exchange · mobile money', { size: 15, anchor: 'middle' });
  b += R(690, y, 180, 70, C.mustard, C.ink) + T(780, y + 43, 'Investment', { size: 20, weight: 700, anchor: 'middle' });
  b += arrow(214, y + 35, 254, y + 35, { w: 4 }) + arrow(644, y + 35, 684, y + 35, { w: 4 });
  const sy = y + 110;
  b += card(30, sy, 840, { title: 'State Bank of Pakistan', body: 'Regulates banks and runs the instant payment system Raast (launched 2021).', fill: C.panel, bs: 16 }).s;
  const sh = cardH(840, { title: 'State Bank of Pakistan', body: 'Regulates banks and runs the instant payment system Raast (launched 2021).', bs: 16 });
  const my = sy + sh + 30;
  b += T(30, my - 8, 'MOBILE WALLETS (e.g. JazzCash, Easypaisa) LET PEOPLE WITHOUT BANK ACCOUNTS:', { size: 15, weight: 700, fill: C.tealDark });
  ['Send money', 'Pay bills', 'Receive government cash transfers'].forEach((s, i) => { const x = 30 + i * 285; b += R(x, my + 4, 270, 50, C.tealLight, C.tealDark, { rx: 25 }) + T(x + 135, my + 35, s, { size: 15, weight: 700, anchor: 'middle' }); });
  b += arrow(450, my + 60, 450, my + 90, { w: 4 });
  b += R(170, my + 96, 560, 56, C.mustard, C.ink) + T(450, my + 130, 'Financial inclusion, especially for women and rural households', { size: 17, weight: 700, anchor: 'middle' });
  add('07-financial-inclusion',
    svg(900, my + 182, 'How the financial system supports development', b),
    'Savings pass through banks, microfinance, Islamic banking, the stock exchange and mobile money into investment. The State Bank of Pakistan regulates banks and runs the Raast payment system (2021). Mobile wallets such as JazzCash and Easypaisa let people without bank accounts send money, pay bills and receive cash transfers, supporting financial inclusion for women and rural households.',
    'Financial systems turn savings into investment; mobile money brings in people without bank accounts.',
    '## Why do financial systems matter for development?');
}
