import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-pakistan-studies-nationhood-1947-99';
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

// 01 Who led Pakistan, 1947–99
{
  const x0 = 330, x1 = 850, Y0 = 1947, Y1 = 2000, top = 150, rh = 40;
  const X1 = (y) => x0 + ((y - Y0) * (x1 - x0)) / (Y1 - Y0);
  const rows = [
    ['Jinnah (Governor-General)', [[1947, 1948]], 'c'],
    ['Liaquat Ali Khan', [[1947, 1951]], 'c'],
    ['Khwaja Nazimuddin', [[1951, 1953]], 'c'],
    ['Ghulam Muhammad, Iskander Mirza', [[1953, 1958]], 'u'],
    ['Ayub Khan', [[1958, 1969]], 'm'],
    ['Yahya Khan', [[1969, 1971]], 'm'],
    ['Zulfikar Ali Bhutto', [[1971, 1977]], 'c'],
    ['Zia-ul-Haq', [[1977, 1988]], 'm'],
    ['Benazir Bhutto', [[1988, 1990], [1993, 1996]], 'c'],
    ['Nawaz Sharif', [[1990, 1993], [1997, 1999]], 'c'],
    ['Pervez Musharraf', [[1999, 2000]], 'm'],
  ];
  let b = panel(30, 112, 840, top - 112 + rows.length * rh + 82);
  for (let y = 1950; y <= 2000; y += 10) b += `<line x1="${X1(y)}" y1="${top - 8}" x2="${X1(y)}" y2="${top + rows.length * rh}" stroke="${C.panelEdge}" stroke-width="1.5" stroke-dasharray="4 5"/>` + T(X1(y), top - 14, String(y), { size: 15, fill: C.muted, anchor: 'middle' });
  rows.forEach(([n, spans, k], i) => {
    const y = top + i * rh;
    if (i % 2 === 0) b += `<rect x="40" y="${y}" width="820" height="${rh}" fill="${C.tealLight}" opacity="0.55"/>`;
    b += T(52, y + 26, n, { size: 16, weight: 600 });
    const lab = spans.map(([a, z]) => (z === 2000 ? 'from Oct 1999' : `${a}–${String(z).slice(2)}`)).join(', ');
    spans.forEach(([a, z]) => {
      const fill = k === 'm' ? C.rust : k === 'u' ? C.cream : C.tealDark;
      const w = Math.max(6, X1(z) - X1(a));
      b += `<rect x="${X1(a)}" y="${y + 9}" width="${w}" height="${rh - 18}" rx="4" fill="${fill}" stroke="${C.ink}" stroke-width="1.5"${k === 'u' ? ' stroke-dasharray="5 4"' : ''}/>`;
    });
    const [a0] = spans[0], zl = spans[spans.length - 1][1], wl = X1(zl) - X1(spans[0][0]);
    if (spans.length === 1 && wl > 70) b += T(X1(a0) + wl / 2, y + 26, lab, { size: 15, weight: 700, fill: k === 'u' ? C.ink : '#ffffff', anchor: 'middle' });
    else if (X1(zl) + 10 + tw(lab, 15) < 858 && spans.length === 1) b += T(X1(zl) + 8, y + 26, lab, { size: 15, fill: C.muted });
    else b += T(X1(a0) - 8, y + 26, lab, { size: 15, fill: k === 'm' ? C.rust : C.muted, anchor: 'end', weight: k === 'm' ? 700 : 400 });
  });
  const ay = top + rows.length * rh + 30;
  [1956, 1962, 1973].forEach((y) => { b += `<path d="M${X1(y)},${ay - 22} l-8,-12 h16 z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>` + T(X1(y), ay, String(y), { size: 15, weight: 700, anchor: y === 1973 ? 'start' : 'middle' }); });
  b += `<path d="M${X1(1971)},${ay - 34} l7,7 l-7,7 l-7,-7 z" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.5"/>` + T(X1(1971) - 6, ay + 22, '1971 Bangladesh', { size: 15, weight: 700, anchor: 'end', fill: C.rust });
  const ly = 112 + top - 112 + rows.length * rh + 82 + 26;
  const key = (x, fill, s, dash) => `<rect x="${x}" y="${ly - 14}" width="30" height="18" rx="4" fill="${fill}" stroke="${C.ink}" stroke-width="1.5"${dash ? ' stroke-dasharray="5 4"' : ''}/>` + T(x + 38, ly, s, { size: 16 });
  b += key(40, C.tealDark, 'civilian leader') + key(215, C.rust, 'military ruler') + key(385, C.cream, 'head of state', 1) + `<path d="M${560},${ly - 14} l-8,-12 h16 z" transform="translate(0,18)" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>` + T(574, ly, 'new constitution', { size: 16 }) + `<path d="M${735},${ly - 16} l7,7 l-7,7 l-7,-7 z" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.5"/>` + T(750, ly, 'Bangladesh', { size: 16 });
  add('01-leaders-1947-99',
    svg(900, ly + 26, 'Who led Pakistan, 1947–99', b),
    'A bar chart of leaders from 1947 to 1999. Civilian leaders Jinnah, Liaquat Ali Khan, Khwaja Nazimuddin, Zulfikar Ali Bhutto, Benazir Bhutto and Nawaz Sharif alternate with military rulers Ayub Khan, Yahya Khan, Zia-ul-Haq and, from October 1999, Pervez Musharraf. Markers show the constitutions of 1956, 1962 and 1973 and the creation of Bangladesh in 1971.',
    'Periods of civilian government were repeatedly ended by military rule.',
    '## Syllabus coverage');
}

// 02 Problems of 1947–48
{
  const probs = [
    ['Radcliffe Award', 'Announced 17 August 1947; most of Gurdaspur went to India, giving it a land route into Kashmir.'],
    ['Canal waters', 'Headworks left in India; water to Pakistani canals cut off in 1948.'],
    ['Division of assets', 'Less than the agreed share of cash and military stores; payments delayed.'],
    ['Princely states', 'Junagadh occupied 1947; Hyderabad taken September 1948; Kashmir fighting until the UN ceasefire of 1 January 1949.'],
    ['Refugees', 'Millions crossed amid massacres; Pakistan had to house and feed them in Lahore, Karachi and elsewhere.'],
    ['Administration and economy', 'A capital at Karachi, a civil service and a central bank built almost from nothing; most industry left in India.'],
    ['National language', 'Urdu declared the state language in 1948, angering Bengali speakers in East Pakistan.'],
  ];
  const w = 410, gap = 14;
  let b = '', ys = [112, 112];
  probs.forEach(([ti, d], i) => {
    const col = i % 2, x = 30 + col * (w + 20);
    const pair = probs[i - col], pair2 = probs[i - col + 1];
    const h = Math.max(cardH(w, { title: pair[0], body: pair[1], bs: 16 }), pair2 ? cardH(w, { title: pair2[0], body: pair2[1], bs: 16 }) : 0);
    b += card(x, ys[col], w, { title: ti, body: d, bs: 16, h, bfill: C.ink }).s + badge(x + w - 26, ys[col] + 26, 15, String(i + 1), C.cream);
    ys[col] += h + gap;
  });
  const y = Math.max(...ys) - gap + 20;
  const jn = card(460, ys[1], 410, { title: 'Jinnah as Governor-General', body: 'Set up the government, organised refugee relief and founded the State Bank (opened July 1948). Died 11 September 1948.', bs: 16, fill: C.cream, edge: C.olive, bfill: C.ink });
  add('02-problems-1947-48',
    svg(900, ys[1] + jn.h + 30, 'Seven problems facing the new state, 1947–48', b + jn.s),
    'Seven numbered cards: the Radcliffe Award and Gurdaspur, the canal water cut-off of 1948, the unfair division of assets, the princely states of Junagadh, Hyderabad and Kashmir, millions of refugees, building an administration and economy from nothing, and the 1948 language decision. A final card summarises Jinnah’s work as Governor-General before his death on 11 September 1948.',
    'The new state had to solve border, water, money, refugee and language problems at once.',
    '## What problems did Pakistan face in 1947–48? (Key Question 11)');
}

// 03 Canal water dispute to Indus Waters Treaty
{
  const y = 112;
  let b = `<rect x="30" y="${y}" width="840" height="300" rx="14" fill="#e6eef0"/>`;
  const river = (x, c, name) => path(`M${x},${y + 60} C${x - 30},${y + 120} ${x + 30},${y + 170} ${x},${y + 230}`, { stroke: c, w: 9 }) + T(x, y + 262, name, { size: 17, weight: 700, anchor: 'middle' });
  b += ['Indus', 'Jhelum', 'Chenab'].map((n, i) => river(110 + i * 115, C.blue, n)).join('');
  b += ['Ravi', 'Beas', 'Sutlej'].map((n, i) => river(560 + i * 115, C.olive, n)).join('');
  b += T(225, y + 40, 'Western rivers → Pakistan', { size: 20, weight: 700, fill: C.blue, anchor: 'middle' });
  b += T(675, y + 40, 'Eastern rivers → India', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' });
  b += `<line x1="450" y1="${y + 30}" x2="450" y2="${y + 268}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 6"/>`;
  b += T(450, y + 292, 'allocation under the treaty, not a border', { size: 15, fill: C.muted, anchor: 'middle', italic: true });
  const steps = [
    ['1947', 'Key headworks are left in India.'],
    ['1948', 'India cuts off water to Pakistani canals.'],
    ['1960', 'Indus Waters Treaty, mediated by the World Bank, divides the rivers.'],
  ];
  const sw = 260, sh = Math.max(...steps.map(([d, s]) => cardH(sw, { title: d, body: s, bs: 16 })));
  steps.forEach(([d, s], i) => {
    const x = 30 + i * 290;
    b += card(x, y + 320, sw, { title: d, body: s, bs: 16, h: sh, fill: i === 2 ? C.cream : C.panel, edge: i === 2 ? C.olive : C.panelEdge, bfill: C.ink }).s;
    if (i < 2) b += arrow(x + sw + 4, y + 320 + sh / 2, x + 286, y + 320 + sh / 2, { w: 3.5 });
  });
  add('03-indus-waters-treaty',
    svg(900, y + 320 + sh + 30, 'The canal water dispute and its settlement', b, 'schematic, not to scale'),
    'Six rivers in two groups. The western rivers, Indus, Jhelum and Chenab, went to Pakistan and the eastern rivers, Ravi, Beas and Sutlej, to India. Below, a chain: key headworks left in India in 1947, water cut off in 1948, and the Indus Waters Treaty of 1960 mediated by the World Bank.',
    'The 1960 treaty gave Pakistan the three western rivers and India the three eastern ones.',
    '## What problems did Pakistan face in 1947–48? (Key Question 11)');
}

// 04 Objectives Resolution and constitutions
{
  const g = grid(30, 112, [{ label: 'Document', w: 190 }, { label: 'Under', w: 170 }, { label: 'System', w: 180 }, { label: 'Key provisions', w: 300 }], [
    ['Objectives Resolution 1949', 'Liaquat Ali Khan', '—', 'Sovereignty belongs to Allah; a democratic state guided by Islamic principles; minorities protected'],
    ['1956 Constitution', 'Iskander Mirza', '—', 'Pakistan an Islamic Republic with a Muslim head of state'],
    ['1962 Constitution', 'Ayub Khan', 'Presidential', '“Islamic” restored to the country’s name by amendment in 1963'],
    ['1973 Constitution', 'Zulfikar Ali Bhutto', 'Parliamentary', 'Islam declared the state religion'],
    ['Eighth Amendment', 'Zia-ul-Haq', 'President can dismiss the national assembly', 'Used to dismiss Benazir Bhutto in 1990 and 1996; removed in 1997 by Nawaz Sharif'],
  ], { size: 16 });
  add('04-constitutions-compared',
    svg(900, 112 + g.h + 30, 'Constitutional milestones, 1949–97', g.s),
    'A table comparing the Objectives Resolution of 1949, the 1956, 1962 and 1973 Constitutions and the Eighth Amendment: who introduced each, the system of government where the lesson gives it, and its key provisions, from sovereignty belonging to Allah to Islam as the state religion in 1973.',
    'Each constitution kept or strengthened Islamic provisions while the system of government changed.',
    '## How far did Pakistan achieve stability, 1948–71? (Key Question 12)');
}

// 05 Road to Bangladesh
{
  let b = T(30, 132, 'LONG-TERM CAUSES', { size: 16, weight: 700, fill: C.rust });
  const pc = card(30, 146, 840, { title: 'Political domination', body: 'East Pakistan had the majority of the population but felt dominated by the West in government, the army and the civil service.', bs: 16, ts: 18, fill: '#f6e3d6', edge: C.rust, bfill: C.ink });
  b += pc.s;
  ['Language protests, 1952', 'Economic disparity', 'Neglect after the 1970 cyclone'].forEach((s2, i) => { b += R(30 + i * 285, 146 + pc.h + 12, 270, 50, '#f6e3d6', C.rust) + T(30 + i * 285 + 135, 146 + pc.h + 43, s2, { size: 16, weight: 700, anchor: 'middle' }); });
  const ch = pc.h + 62;
  let y = 146 + ch + 18;
  const ev = [
    { d: '1966', title: 'Six Points (Awami League, Sheikh Mujib)', body: 'Federation with only defence and foreign affairs at the centre; separate currencies or accounts; provincial control of taxation and foreign exchange. Rejected as a threat to unity.' },
    { d: '1970', title: 'General election', body: 'Awami League wins almost every East Pakistan seat and an overall majority; Bhutto’s PPP wins most seats in the West. Talks fail.', hi: true },
    { d: 'Mar 1971', title: 'Army operations begin', body: 'Civil war follows.' },
    { d: 'Dec 1971', title: 'India intervenes militarily', body: 'Pakistani forces in the East surrender on 16 December 1971.', hi: true },
  ];
  b += arrow(450, y, 450, y + 26, { w: 4 });
  const tlx = timeline(30, y + 36, 840, ev, { dw: 130, bs: 16, ts: 18, gap: 10 });
  b += tlx.s;
  add('05-road-to-bangladesh',
    svg(900, y + 36 + tlx.h + 30, 'Why East Pakistan became Bangladesh', b),
    'Four long-term causes (political domination by the West, the language protests of 1952, economic disparity and neglect after the 1970 cyclone) lead into a timeline: the Six Points of 1966, the 1970 election won by the Awami League, army operations from March 1971, and Indian military intervention in December 1971 ending in surrender on 16 December.',
    'Long-standing grievances turned into crisis when the 1970 election result was not accepted.',
    '## Why did East Pakistan become Bangladesh? (Key Question 13)');
}

// 06 Bhutto and Zia compared
{
  const w = 410;
  const bh = { title: 'Zulfikar Ali Bhutto', sub: '1971–77 · civilian', body: ['Simla Agreement 1972: captured territory returned; prisoners of war after a further agreement in 1973', '1973 Constitution: parliamentary; Islam the state religion', 'Nationalised major industries, banks and schools', 'Land and labour reforms', 'Launched the nuclear programme', 'Created the Federal Security Force'], bullets: true, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, bs: 16, ts: 22, subfill: C.tealDark };
  const zh = { title: 'Zia-ul-Haq', sub: '1977–88 · military', body: ['Islamisation: Hudood Ordinances, zakat and ushr, Federal Shariat Court', 'Critics: some laws disadvantaged women and religious minorities', 'Martial law; referendum 1984; non-party elections 1985', 'Eighth Amendment: president can dismiss the national assembly', 'Soviet invasion of Afghanistan 1979: millions of refugees but large US aid'], bullets: true, fill: '#f6e3d6', edge: C.rust, bfill: C.ink, bs: 16, ts: 22, subfill: C.rust };
  const h = Math.max(cardH(w, bh), cardH(w, zh));
  let b = card(30, 112, w, { ...bh, h }).s + card(460, 112, w, { ...zh, h }).s;
  const ey = 112 + h + 16;
  const e1 = { title: 'How it ended', body: 'Disputed 1977 election and mass protests; Zia seized power in July 1977.', bs: 16 };
  const e2 = { title: 'How it ended', body: 'Zia died in an air crash in August 1988.', bs: 16 };
  const eh = Math.max(cardH(w, e1), cardH(w, e2));
  b += card(30, ey, w, { ...e1, h: eh }).s + card(460, ey, w, { ...e2, h: eh }).s;
  add('06-bhutto-and-zia',
    svg(900, ey + eh + 30, 'Bhutto and Zia compared, 1971–88', b),
    'Two columns. Bhutto (1971–77) made the Simla Agreement, introduced the 1973 Constitution, nationalised industries, banks and schools, carried out reforms and began the nuclear programme; he was overthrown by Zia in July 1977. Zia (1977–88) introduced Islamisation, ruled under martial law, passed the Eighth Amendment and gained US aid after the Soviet invasion of Afghanistan; he died in August 1988.',
    'Bhutto reshaped the state and economy; Zia reshaped its laws and its place in the Cold War.',
    '## How successful were Bhutto and Zia? (Key Question 14)');
}

// 07 Governments of 1988–99
{
  const seq = [
    ['1988–90', 'Benazir Bhutto', 'Dismissed in 1990 under the Eighth Amendment', 'b'],
    ['1990–93', 'Nawaz Sharif', '', 'n'],
    ['1993–96', 'Benazir Bhutto', 'Dismissed in 1996 under the Eighth Amendment', 'b'],
    ['1997–99', 'Nawaz Sharif', 'General Pervez Musharraf takes power, October 1999', 'n'],
  ];
  const w = 192, gx = 24, y = 112;
  const eh = Math.max(...seq.map(([, , e]) => (e ? cardH(w, { body: e, bs: 15 }) : 0)));
  let b = '';
  seq.forEach(([d, n, e, k], i) => {
    const x = 30 + i * (w + gx), f = k === 'b' ? C.tealLight : C.cream, ed = k === 'b' ? C.tealDark : C.olive;
    b += R(x, y, w, 96, f, ed) + T(x + w / 2, y + 40, d, { size: 22, weight: 700, anchor: 'middle' }) + T(x + w / 2, y + 72, n, { size: 17, weight: 600, anchor: 'middle' });
    if (e) b += `<line x1="${x + w / 2}" y1="${y + 98}" x2="${x + w / 2}" y2="${y + 116}" stroke="${C.rust}" stroke-width="3"/>` + card(x, y + 116, w, { body: e, bs: 15, h: eh, fill: i === 3 ? C.rust : '#f6e3d6', edge: C.rust, bfill: i === 3 ? '#ffffff' : C.ink }).s;
    if (i < 3) b += arrow(x + w + 2, y + 48, x + w + gx - 2, y + 48, { w: 3.5 });
  });
  const cy = y + 116 + eh + 30;
  const bb = { title: 'Benazir Bhutto faced', body: ['Opposition from Nawaz Sharif’s government in Punjab', 'A failed no-confidence motion (1989)', 'Disputes with President Ghulam Ishaq Khan over appointments', 'Inflation and unemployment', 'Tension in Kashmir'], bullets: true, bs: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink };
  const nb = { title: 'Nawaz Sharif', body: ['Privatisation and deregulation', 'Loss of US aid and economic difficulties', 'Removed the president’s power of dismissal (1997)', 'Ordered nuclear tests (May 1998)', 'Tension with the army after the Kargil conflict (1999)'], bullets: true, bs: 16, fill: C.cream, edge: C.olive, bfill: C.ink };
  const ch = Math.max(cardH(410, bb), cardH(410, nb));
  b += card(30, cy, 410, { ...bb, h: ch }).s + card(460, cy, 410, { ...nb, h: ch }).s;
  add('07-governments-1988-99',
    svg(900, cy + ch + 30, 'Four governments in eleven years, 1988–99', b),
    'Four governments in sequence: Benazir Bhutto 1988–90, dismissed in 1990 under the Eighth Amendment; Nawaz Sharif 1990–93; Benazir Bhutto 1993–96, dismissed again in 1996; and Nawaz Sharif 1997–99, ended when Musharraf took power in October 1999. Cards below list the problems and policies of each leader.',
    'Benazir Bhutto and Nawaz Sharif alternated in power until the army took over in 1999.',
    '## How effective were governments in the 1990s? (Key Question 15)');
}

// 08 Pakistan in world affairs
{
  const left = [
    ['India', 'Wars and tension over Kashmir and Bangladesh; Lahore Declaration 1999'],
    ['Afghanistan', 'Pakhtoonistan dispute; Soviet invasion and refugee crisis'],
    ['Iran', 'Close ties; Regional Cooperation for Development 1964; changes after 1979'],
    ['Bangladesh', 'Recognised 1974; repatriation and assets issues remained'],
  ];
  const right = [
    ['China', 'Close partner since the 1960s; Karakoram Highway'],
    ['USA and UK', 'SEATO and CENTO; left SEATO 1972 and CENTO 1979'],
    ['Commonwealth', 'Left 1972; rejoined 1989'],
    ['Nuclear status', 'Programme from 1972; tests at Chagai May 1998 after India’s; has not signed the NPT'],
  ];
  const w = 320, all = [...left, ...right];
  const h = Math.max(...all.map(([a, c]) => cardH(w, { title: a, body: c, bs: 16, ts: 19 })));
  let b = '';
  const cx = 450, cy = 112 + (4 * (h + 14) - 14) / 2;
  [left, right].forEach((col, ci) => col.forEach(([a, c], i) => {
    const x = ci ? 550 : 30, y = 112 + i * (h + 14);
    b += `<line x1="${ci ? x : x + w}" y1="${y + h / 2}" x2="${cx}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="3"/>`;
    b += card(x, y, w, { title: a, body: c, bs: 16, ts: 19, h, bfill: C.ink, fill: a === 'Nuclear status' ? C.cream : C.panel, edge: a === 'Nuclear status' ? C.olive : C.panelEdge }).s;
  }));
  b += `<circle cx="${cx}" cy="${cy}" r="68" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(cx, cy + 8, 'Pakistan', { size: 22, weight: 700, anchor: 'middle' });
  const yb = 112 + 4 * (h + 14) - 14;
  add('08-world-affairs',
    svg(900, yb + 30, 'Pakistan in world affairs since 1947', b),
    'Pakistan at the centre, linked to eight cards: India, Afghanistan, Iran, Bangladesh, China, the USA and UK, the Commonwealth, and nuclear status. Each card gives the key events from the lesson, such as leaving SEATO in 1972 and CENTO in 1979, rejoining the Commonwealth in 1989 and the Chagai tests of May 1998.',
    'Each relationship can be summed up in a few dated events.',
    '## What role has Pakistan played in world affairs? (Key Question 16)');
}
