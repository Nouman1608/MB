import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-pakistan-studies-pakistan-into-the-21st-century';
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

// 01 1947: challenges and opportunities
{
  const ch = ['Unfavourable boundary award', 'Refugee crisis', 'Delayed division of assets', 'Indus tributary waters dispute', 'Princely states, above all Kashmir', 'A government built from scratch in Karachi'];
  const op = ['A strong sense of national purpose', 'Agricultural land in Punjab and Sindh', 'International recognition'];
  const a = { title: 'Challenges', body: ch, bullets: true, bs: 16, fill: '#f6e3d6', edge: C.rust, bfill: C.ink, ts: 22 };
  const o = { title: 'Opportunities', body: op, bullets: true, bs: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, ts: 22 };
  const h = Math.max(cardH(410, a), cardH(410, o));
  let b = card(30, 112, 410, { ...a, h }).s + card(460, 112, 410, { ...o, h }).s;
  const jy = 112 + h + 20;
  const j = card(30, jy, 840, { title: 'Jinnah as Governor-General', body: 'Organised the new administration, appealed for refugee relief, founded the State Bank (1948) and set out a vision of a tolerant state. Died September 1948.', bs: 16, fill: C.cream, edge: C.olive, bfill: C.ink });
  b += j.s;
  add('01-challenges-1947',
    svg(900, jy + j.h + 30, 'Pakistan in 1947: challenges and opportunities', b),
    'Two columns. Challenges in 1947: the boundary award, refugees, delayed division of assets, the Indus waters dispute, the princely states especially Kashmir, and building a government in Karachi. Opportunities: national purpose, farmland in Punjab and Sindh, and international recognition. A card summarises Jinnah’s work as Governor-General before his death in September 1948.',
    'The new state began with heavy burdens but real advantages.',
    '## What challenges and opportunities did Pakistan face in 1947?');
}

// 02 Constitutional development
{
  const tlx = timeline(30, 120, 840, [
    { d: '1949', title: 'Objectives Resolution', body: 'Sovereignty belongs to Allah; democracy and Islamic principles; minorities protected. Later made part of the constitution.' },
    { d: '1956', title: 'First constitution', body: 'Islamic Republic; parliamentary system; the President must be a Muslim.' },
    { d: '1962', title: 'Ayub Khan’s constitution', body: 'Presidential system; indirect elections.' },
    { d: '1973', title: 'Current constitution', body: 'Federal parliamentary system; two-house parliament; Islam the state religion. Still in force, with amendments.', hi: true },
  ], { dw: 120, bs: 16, ts: 19, gap: 12 });
  add('02-constitutions',
    svg(900, 120 + tlx.h + 30, 'How Pakistan’s constitution developed', tlx.s),
    'A timeline: the Objectives Resolution of 1949; the 1956 Constitution, an Islamic Republic with a parliamentary system and a Muslim President; the 1962 presidential Constitution under Ayub Khan with indirect elections; and the 1973 federal parliamentary Constitution, still in force with amendments.',
    'Pakistan moved between parliamentary and presidential systems before settling on 1973.',
    '## How did Pakistan\'s constitution develop?');
}

// 03 Structure under the 1973 Constitution
{
  const y = 112;
  let b = '';
  b += R(60, y, 300, 90, C.cream, C.olive) + T(210, y + 38, 'President', { size: 22, weight: 700, anchor: 'middle' }) + T(210, y + 66, 'head of state', { size: 16, anchor: 'middle' });
  b += R(540, y, 300, 90, C.mustard, C.ink) + T(690, y + 38, 'Prime Minister', { size: 22, weight: 700, anchor: 'middle' }) + T(690, y + 66, 'leads the government', { size: 16, anchor: 'middle' });
  b += `<line x1="364" y1="${y + 45}" x2="536" y2="${y + 45}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="8 6" marker-end="url(#ahR)" marker-start="url(#ahR)"/>`;
  b += tl(450, y + 124, ['amendments have shifted', 'power between them'], { size: 15, anchor: 'middle', fill: C.rust, weight: 700 }, 19);
  const py = y + 180;
  b += R(30, py, 840, 150, C.tealLight, C.tealDark) + T(50, py + 32, 'Parliament (two houses)', { size: 20, weight: 700 });
  b += R(470, py + 50, 370, 84, '#ffffff', C.tealDark) + T(655, py + 84, 'National Assembly', { size: 18, weight: 700, anchor: 'middle' }) + T(655, py + 110, 'the Prime Minister answers to it', { size: 15, anchor: 'middle' });
  b += R(60, py + 50, 370, 84, '#ffffff', C.tealDark) + T(245, py + 84, 'Senate', { size: 18, weight: 700, anchor: 'middle' }) + T(245, py + 110, 'equal representation for each province', { size: 15, anchor: 'middle' });
  b += arrow(690, y + 94, 690, py + 44, { w: 3.5 }) + T(704, y + 140, 'answers to', { size: 16, weight: 700 });
  const fy = py + 180;
  b += T(450, fy - 12, 'FEDERALISM: power shared between the federal government and the provinces', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += R(100, fy, 300, 54, C.cream, C.olive, { rx: 27 }) + T(250, fy + 34, 'Federal government', { size: 18, weight: 700, anchor: 'middle' }) + R(500, fy, 300, 54, C.panel, C.ink, { rx: 27 }) + T(650, fy + 34, 'Provinces', { size: 18, weight: 700, anchor: 'middle' }) + `<line x1="408" y1="${fy + 27}" x2="492" y2="${fy + 27}" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)" marker-start="url(#ah)"/>`;
  add('03-federal-parliamentary-system',
    svg(900, fy + 80, 'How government works under the 1973 Constitution', b, 'a simplified diagram'),
    'The President is head of state and the Prime Minister leads the government; amendments have shifted power between them. The Prime Minister answers to the National Assembly, one of two houses of parliament; the Senate gives each province equal representation. Power is shared between the federal government and the provinces.',
    'The Prime Minister governs, answerable to parliament; the provinces share power.',
    '## How did Pakistan\'s constitution develop?');
}

// 04 Democratic concepts and parties
{
  const con = [
    ['Transparency', 'Government decisions are open to scrutiny'],
    ['Rule of law', 'Everyone, including leaders, is subject to the law and courts'],
    ['Accountability', 'Officials can be questioned and removed'],
  ];
  const w = 270, h = Math.max(...con.map(([a, c]) => cardH(w, { title: a, body: c, bs: 16 })));
  let b = '';
  con.forEach(([a, c], i) => { b += card(30 + i * 285, 112, w, { title: a, body: c, bs: 16, h, fill: C.tealLight, edge: C.tealDark, bfill: C.ink }).s; });
  const y = 112 + h + 40;
  b += T(30, y - 12, 'MAJOR PARTIES', { size: 16, weight: 700, fill: C.olive });
  const pt = [
    ['Pakistan Muslim League factions', 'Descended from the All-India Muslim League'],
    ['Pakistan People’s Party', 'Founded 1967 by Zulfikar Ali Bhutto'],
    ['Pakistan Tehreek-e-Insaf', 'Founded 1996 by Imran Khan'],
  ];
  const ph = Math.max(...pt.map(([a, c]) => cardH(w, { title: a, body: c, bs: 16 })));
  pt.forEach(([a, c], i) => { b += card(30 + i * 285, y, w, { title: a, body: c, bs: 16, h: ph, fill: C.cream, edge: C.olive, bfill: C.ink }).s; });
  const n = note(30, y + ph + 20, 840, 'Alongside regional and religious parties. Parties organise voters, form governments and act as opposition.', { fill: C.panel, edge: C.panelEdge });
  add('04-democracy-and-parties',
    svg(900, y + ph + 20 + n.h + 30, 'Democratic concepts and political parties', b + n.s),
    'Three democratic concepts: transparency, the rule of law and accountability. Below, three major parties: the Pakistan Muslim League factions, descended from the All-India Muslim League; the Pakistan People’s Party, founded in 1967 by Zulfikar Ali Bhutto; and Pakistan Tehreek-e-Insaf, founded in 1996 by Imran Khan.',
    'Democracy rests on openness, law and accountability, delivered through competing parties.',
    '## What democratic concepts and parties should you know?');
}

// 05 Politics 1999–2022 on a time axis
{
  const x0 = 60, x1 = 850, Y0 = 1999, Y1 = 2023;
  const X1 = (y) => x0 + ((y - Y0) * (x1 - x0)) / (Y1 - Y0);
  let b = panel(30, 112, 840, 280);
  const bars = [[1999.8, 2008, 'Musharraf', C.rust, '#fff'], [2008, 2013, 'Zardari (President)', C.tealDark, '#fff'], [2013, 2018, 'PML-N', C.teal, C.ink], [2018, 2022.3, 'PTI: Imran Khan', C.cream, C.ink]];
  bars.forEach(([a, z, s, f, tc]) => { b += `<rect x="${X1(a)}" y="150" width="${X1(z) - X1(a) - 3}" height="50" rx="6" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + T((X1(a) + X1(z)) / 2, 182, s, { size: 16, weight: 700, anchor: 'middle', fill: tc }); });
  const ay = 236;
  b += `<line x1="${x0}" y1="${ay}" x2="${x1}" y2="${ay}" stroke="${C.ink}" stroke-width="3"/>`;
  for (let y = 2000; y <= 2022; y += 2) b += `<line x1="${X1(y)}" y1="${ay - 6}" x2="${X1(y)}" y2="${ay + 6}" stroke="${C.ink}" stroke-width="2"/>` + T(X1(y), ay + 24, String(y), { size: 15, fill: C.muted, anchor: 'middle' });
  const ev = [[2007, '2007', 'Lawyers’ Movement'], [2010, '2010', '18th Amendment'], [2013, '2013', 'first elected handover'], [2017, '2017', 'Sharif disqualified'], [2022.3, 'Apr 2022', 'no-confidence vote']];
  const lv = [[0, 'end'], [1, 'middle'], [2, 'middle'], [0, 'middle'], [1, 'end']];
  ev.forEach(([y, d, s2], i) => { b += `<circle cx="${X1(y)}" cy="${ay}" r="7" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`; const [l, an] = lv[i]; const lx = X1(y), ly = ay + 52 + l * 34; b += `<line x1="${lx}" y1="${ay + 30}" x2="${lx}" y2="${ly - 16}" stroke="${C.ink}" stroke-width="1.5"/>` + T(an === 'end' ? lx + 4 : lx, ly, `${d}: ${s2}`, { size: 15, weight: 700, anchor: an }); });
  const cards = [
    ['Musharraf, 1999–2008', ['Growth in the mid-2000s; local government; private TV; reserved seats for women', 'Joined the US-led campaign after 2001; dismissed the Chief Justice 2007; emergency Nov 2007; resigned 2008']],
    ['Zardari, 2008–13', ['18th Amendment (2010): no presidential dissolution; subjects devolved; NWFP renamed Khyber Pakhtunkhwa; free education aged 5–16', '19th Amendment: judicial appointments']],
    ['PML-N, 2013–18', ['Energy projects to end load-shedding', 'CPEC', 'Operations against militancy after the 2014 Peshawar school attack']],
    ['PTI, 2018–22', ['Ehsaas; health insurance cards; tree planting', 'IMF programme 2019', 'Covid-19 response: smart lockdowns, Ehsaas cash, vaccination from 2021']],
  ];
  const cw = 410, ch = Math.max(...cards.map(([a, c]) => cardH(cw, { title: a, body: c, bullets: true, bs: 15, ts: 18 })));
  cards.forEach(([a, c], i) => { b += card(30 + (i % 2) * 430, 412 + Math.floor(i / 2) * (ch + 14), cw, { title: a, body: c, bullets: true, bs: 15, ts: 18, h: ch, bfill: C.ink }).s; });
  add('05-politics-1999-2022',
    svg(900, 412 + 2 * (ch + 14) + 16, 'Pakistani politics, 1999–2022', b, 'drawn to a year scale'),
    'A time axis from 1999 to 2022 with four periods: Musharraf 1999–2008, Zardari as President 2008–13, the PML-N government 2013–18 and the PTI government under Imran Khan 2018–22. Markers show the Lawyers’ Movement in 2007, the 18th Amendment in 2010, the first elected handover in 2013, Sharif’s disqualification in 2017 and the no-confidence vote in April 2022. Cards summarise each period.',
    'Military rule gave way to elected governments, and in 2013 one elected government handed over to another for the first time.',
    '## What happened in Pakistani politics from 1999 to 2022?');
}

// 06 International relations
{
  const rel = [
    ['India', 'Kashmir the core dispute; 2019 tensions after Pulwama and the change to Kashmir’s status; Kartarpur Corridor (2019) as goodwill'],
    ['China', '“All-weather” partner; JF-17 aircraft; CPEC: roads, power, Gwadar, agriculture'],
    ['Muslim world', 'Close ties with Turkey; Saudi Arabia and the UAE give financial support and employ many Pakistani workers'],
    ['USA', 'Key ally after 2001 and aid; tension over drone strikes and the 2011 Abbottabad raid'],
    ['IMF and UN', 'IMF support after the 2008 crisis and since; a leading contributor of UN peacekeeping troops'],
  ];
  const w = 400, h = Math.max(...rel.map(([a, c]) => cardH(w, { title: a, body: c, bs: 15, ts: 18 })));
  let b = '';
  const pos = [[30, 112], [470, 112], [30, 112 + h + 120], [470, 112 + h + 120], [250, 112 + 2 * h + 140]];
  const cy = 112 + h + 60;
  b += R(330, cy - 32, 240, 64, C.mustard, C.ink, { rx: 32 }) + T(450, cy + 8, 'Pakistan', { size: 22, weight: 700, anchor: 'middle' });
  rel.forEach(([a, c], i) => {
    const [x, y] = pos[i];
    const tx = x + w / 2, ty = y > cy ? y : y + h;
    b += `<line x1="${tx}" y1="${ty}" x2="${450 + (tx < 450 ? -60 : tx > 450 ? 60 : 0)}" y2="${cy + (y > cy ? 32 : -32)}" stroke="${C.panelEdge}" stroke-width="4"/>`;
    b += card(x, y, w, { title: a, body: c, bs: 15, ts: 18, h, fill: a === 'China' ? C.tealLight : a === 'India' ? '#f6e3d6' : C.panel, edge: a === 'China' ? C.tealDark : a === 'India' ? C.rust : C.panelEdge, bfill: C.ink }).s;
  });
  add('06-international-relations',
    svg(900, pos[4][1] + h + 30, 'Pakistan’s international relations since 2000', b),
    'Pakistan linked to five sets of relations: India (Kashmir, the 2019 tensions and the Kartarpur Corridor), China (an all-weather partner, the JF-17 and CPEC), the Muslim world (Turkey, Saudi Arabia and the UAE), the USA (alliance and aid after 2001 but tension over drone strikes and Abbottabad), and the IMF and UN (financial support and peacekeeping troops).',
    'China is the steadiest partner; relations with India and the USA swing between cooperation and crisis.',
    '## How have Pakistan\'s international relations developed?');
}

// 07 Women's empowerment
{
  const tlx = timeline(30, 120, 840, [
    { d: '1988', title: 'Benazir Bhutto becomes Prime Minister', body: 'First woman elected to lead a Muslim-majority country.', hi: true },
    { d: '2006', title: 'Protection of Women Act', body: '' },
    { d: '2010', title: 'Protection against Harassment of Women at the Workplace Act', body: '' },
    { d: '2016', title: 'Law against so-called honour killings', body: '' },
    { d: 'Ehsaas', title: 'Dr Sania Nishtar leads the Ehsaas programme', body: 'Cash support paid directly to women. She earlier founded the health think-tank Heartfile.' },
  ], { dw: 120, bs: 16, ts: 18, gap: 10 });
  const y = 120 + tlx.h + 24;
  const gain = { title: 'By 2022: rising', body: ['Girls’ school enrolment', 'Women’s political representation (women have served as Speaker and Foreign Minister)'], bullets: true, bs: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink };
  const lag = { title: 'By 2022: still lagging', body: ['Literacy', 'Workforce participation', 'Legal protection, especially in rural areas'], bullets: true, bs: 16, fill: '#f6e3d6', edge: C.rust, bfill: C.ink };
  const h = Math.max(cardH(410, gain), cardH(410, lag));
  const b = tlx.s + card(30, y, 410, { ...gain, h }).s + card(460, y, 410, { ...lag, h }).s;
  add('07-women-empowerment',
    svg(900, y + h + 30, 'How far have women been empowered?', b),
    'A timeline from Benazir Bhutto becoming Prime Minister in 1988 through the Protection of Women Act 2006, the workplace harassment law of 2010 and the 2016 law against honour killings, to Dr Sania Nishtar’s Ehsaas programme paying cash to women. By 2022 girls’ enrolment and political representation had risen, but literacy, work and legal protection lagged.',
    'Laws and leaders have advanced women’s position, but gaps remain, especially in rural areas.',
    '## How far have women been empowered in Pakistan?');
}
