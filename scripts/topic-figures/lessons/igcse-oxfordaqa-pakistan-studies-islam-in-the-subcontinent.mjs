import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-pakistan-studies-islam-in-the-subcontinent';
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

// 01 Time chart c700–1867
{
  const x0 = 70, x1 = 850, Y0 = 700, Y1 = 1900;
  const X1 = (y) => x0 + ((y - Y0) * (x1 - x0)) / (Y1 - Y0);
  let b = panel(30, 112, 840, 520);
  const ay = 480;
  b += `<line x1="${x0}" y1="${ay}" x2="${x1}" y2="${ay}" stroke="${C.ink}" stroke-width="4"/>`;
  for (let y = 700; y <= 1900; y += 100) b += `<line x1="${X1(y)}" y1="${ay - 7}" x2="${X1(y)}" y2="${ay + 7}" stroke="${C.ink}" stroke-width="2.5"/>` + T(X1(y), ay - 14, String(y), { size: 15, fill: C.muted, anchor: "middle" });
  const lives = [
    ['al-Ghazali', 1058, 1111, 150],
    ['Ahmad Sirhindi', 1564, 1624, 215],
    ['Shah Waliullah', 1703, 1762, 280],
    ['Syed Ahmad Barelvi', 1786, 1831, 345],
  ];
  lives.forEach(([n, a, z, y]) => {
    b += `<rect x="${X1(a)}" y="${y}" width="${Math.max(8, X1(z) - X1(a))}" height="30" rx="5" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>`;
    b += `<line x1="${X1(a)}" y1="${y + 30}" x2="${X1(a)}" y2="${ay}" stroke="${C.panelEdge}" stroke-width="1.5" stroke-dasharray="4 4"/>`;
    b += T(X1(a) - 10, y + 21, n, { size: 17, weight: 700, anchor: 'end' }) + T(X1(z) + 8, y + 21, `${a}–${z}`, { size: 15, fill: C.muted });
  });
  const ev = [[711.5, '711–712', 'Muhammad bin Qasim', 'takes Sindh', 0], [1707, '1707', 'Aurangzeb', 'dies', 0], [1761, '1761', 'Third Battle', 'of Panipat', 1], [1831, '1831', 'Balakot', '', 0], [1867, '1867', 'Deoband', 'founded', 1]];
  ev.forEach(([y, d, a, c, lo]) => {
    const yy = 400 + lo * 0;
    b += `<circle cx="${X1(y)}" cy="${ay}" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  });
  b += T(X1(711.5), 390, '711–712', { size: 16, weight: 700, anchor: 'start' }) + T(X1(711.5), 410, 'Muhammad bin Qasim', { size: 15 }) + T(X1(711.5), 428, 'takes Sindh', { size: 15 }) + `<line x1="${X1(711.5)}" y1="436" x2="${X1(711.5)}" y2="${ay - 8}" stroke="${C.ink}" stroke-width="2"/>`;
  const late = [[1707, '1707', 'Aurangzeb dies'], [1761, '1761', 'Panipat'], [1831, '1831', 'Balakot'], [1867, '1867', 'Deoband']];
  late.forEach(([yv, d, l], i) => {
    const lx = 470 + i * 112;
    b += path(`M${X1(yv)},${ay + 9} L${X1(yv)},${ay + 40} L${lx + 45},${ay + 62}`, { stroke: C.ink, w: 1.8 });
    b += T(lx + 45, ay + 84, d, { size: 16, weight: 700, anchor: 'middle' }) + T(lx + 45, ay + 104, l, { size: 15, anchor: 'middle' });
  });
  add('01-time-chart',
    svg(900, 662, 'Islam in the subcontinent: a time chart', b, 'drawn to a year scale'),
    'A time axis from 700 to 1900. Bars show the lives of al-Ghazali (1058–1111), Ahmad Sirhindi (1564–1624), Shah Waliullah (1703–1762) and Syed Ahmad Barelvi (1786–1831). Markers show Muhammad bin Qasim’s conquest of Sindh in 711–712, Aurangzeb’s death in 1707, Panipat in 1761, Balakot in 1831 and the founding of Deoband in 1867.',
    'Over a thousand years separate Muhammad bin Qasim from the reformers of the 18th and 19th centuries.',
    '## Syllabus coverage');
}

// 02 How Sufism is organised
{
  const y = 112;
  let b = '';
  b += R(330, y, 240, 80, C.mustard, C.ink) + T(450, y + 34, 'Master', { size: 21, weight: 700, anchor: 'middle' }) + T(450, y + 60, 'pir or shaikh', { size: 16, anchor: 'middle', fill: C.ink });
  [0, 1, 2, 3].forEach((i) => { const x = 150 + i * 160; b += R(x, y + 140, 120, 56, C.tealLight, C.tealDark, { rx: 28 }) + T(x + 60, y + 174, 'murid', { size: 16, weight: 700, anchor: 'middle' }) + `<line x1="450" y1="${y + 82}" x2="${x + 60}" y2="${y + 138}" stroke="${C.tealDark}" stroke-width="2.5"/>`; });
  b += T(450, y + 226, 'disciples gather around the master', { size: 16, fill: C.muted, anchor: 'middle' });
  b += R(30, y - 0, 260, 110, C.panel, C.panelEdge) + tl(46, y + 30, ['khanqah', 'the lodge where all', 'backgrounds are welcomed'], { size: 16 }, 22).replace('font-weight="400"', 'font-weight="700"');
  b += R(610, y - 0, 260, 110, C.panel, C.panelEdge) + tl(626, y + 30, ['silsila', 'an order: a chain of', 'masters and disciples'], { size: 16 }, 22).replace('font-weight="400"', 'font-weight="700"');
  const g = grid(30, y + 250, [{ label: 'Order', w: 200 }, { label: 'Figure in the lesson', w: 640 }], [
    ['—', 'Ali Hujwiri (Data Ganj Bakhsh) of Lahore, author of Kashf al-Mahjub'],
    ['Chishti', 'Khwaja Moinuddin Chishti of Ajmer, founder of the order in India'],
    ['Suhrawardi', 'Bahauddin Zakariya of Multan'],
    ['Qadiri, Naqshbandi', 'Spread later'],
  ], { size: 16 });
  const ny = y + 250 + g.h + 20;
  const n = note(30, ny, 840, 'Sufi practice: remembrance of Allah (dhikr), self-discipline and love of Allah, alongside obedience to the Sharia. Saints spread Islam by example and service to the poor.');
  add('02-sufism',
    svg(900, ny + n.h + 30, 'How Sufism is organised', b + g.s + n.s),
    'A master (pir or shaikh) with disciples (murids) around him, organised in orders called silsilas and meeting at lodges called khanqahs. A table names Ali Hujwiri of Lahore, Khwaja Moinuddin Chishti of Ajmer (Chishti order) and Bahauddin Zakariya of Multan (Suhrawardi order), with the Qadiri and Naqshbandi orders spreading later.',
    'Sufi orders linked master and disciples, and their khanqahs welcomed everyone.',
    '## What is Sufism and why did it matter in the subcontinent?');
}

// 03 Muhammad bin Qasim
{
  const ch = [
    ['Umayyad Caliphate', 'Governor Hajjaj bin Yusuf sends the young commander Muhammad bin Qasim to Sindh'],
    ['711–712', 'Captures the port of Debal; defeats Raja Dahir'],
    ['Result', 'Sindh and southern Punjab, including Multan, under Muslim rule'],
  ];
  const w = 260, h = Math.max(...ch.map(([a, c]) => cardH(w, { title: a, body: c, bs: 16 })));
  let b = '';
  ch.forEach(([a, c], i) => { const x = 30 + i * 290; b += card(x, 112, w, { title: a, body: c, bs: 16, h, fill: i === 1 ? C.cream : C.panel, edge: i === 1 ? C.olive : C.panelEdge, bfill: C.ink }).s; if (i < 2) b += arrow(x + w + 4, 112 + h / 2, x + 286, 112 + h / 2, { w: 4 }); });
  const y = 112 + h + 40;
  b += T(30, y - 12, 'RELIGIOUS IMPACT', { size: 16, weight: 700, fill: C.tealDark });
  const imp = ['First part of the subcontinent under Muslim rule', 'Mosques built', 'Hindus and Buddhists given protected status and kept their places of worship, on payment of jizya', 'Trade and learning linked Sindh to the wider Muslim world'];
  const iw = 197, ih = Math.max(...imp.map((s) => cardH(iw, { body: s, bs: 15 })));
  imp.forEach((s, i) => { b += card(30 + i * 214.3, y, iw, { body: s, bs: 15, h: ih, fill: C.tealLight, edge: C.tealDark, bfill: C.ink }).s; });
  const by = y + ih + 30;
  b += arrow(450, y + ih + 4, 450, by - 4, { w: 4 });
  b += R(200, by, 500, 64, C.mustard, C.ink) + T(450, by + 30, 'Sindh: Bab-ul-Islam', { size: 21, weight: 700, anchor: 'middle' }) + T(450, by + 52, '“the gateway of Islam”', { size: 16, anchor: 'middle' });
  add('03-muhammad-bin-qasim',
    svg(900, by + 94, 'Muhammad bin Qasim and Sindh, 711–712', b),
    'A chain: the Umayyad governor Hajjaj bin Yusuf sends Muhammad bin Qasim to Sindh; in 711–712 he captures Debal and defeats Raja Dahir, bringing Sindh and southern Punjab including Multan under Muslim rule. Four religious impacts follow, which is why Sindh is called Bab-ul-Islam, the gateway of Islam.',
    'The conquest of Sindh made it the gateway of Islam in the subcontinent.',
    '## What was the importance of Muhammad bin Qasim?');
}

// 04 al-Ghazali: law and inner faith
{
  const y = 112;
  let b = R(30, y, 260, 120, C.tealLight, C.tealDark) + T(160, y + 44, 'Correct practice', { size: 19, weight: 700, anchor: 'middle' }) + T(160, y + 72, 'under the Sharia', { size: 16, anchor: 'middle' });
  b += R(610, y, 260, 120, C.cream, C.olive) + T(740, y + 44, 'Inner sincerity', { size: 19, weight: 700, anchor: 'middle' }) + T(740, y + 72, 'the Sufi path', { size: 16, anchor: 'middle' });
  b += T(450, y + 52, '+', { size: 48, weight: 700, anchor: 'middle' });
  b += arrow(160, y + 124, 400, y + 196, { w: 4 }) + arrow(740, y + 124, 500, y + 196, { w: 4 });
  b += R(300, y + 200, 300, 70, C.mustard, C.ink) + T(450, y + 243, 'True faith', { size: 22, weight: 700, anchor: 'middle' });
  b += T(450, y + 296, 'Ihya Ulum al-Din (The Revival of the Religious Sciences)', { size: 17, weight: 700, anchor: 'middle', italic: true });
  const ef = ['Brought Sufism within mainstream Sunni Islam', 'Criticised philosophers who put reason above revelation', 'Shaped teaching in madrasas and Sufi orders in the subcontinent for centuries'];
  const w = 270, h = Math.max(...ef.map((s) => cardH(w, { body: s, bs: 16 })));
  ef.forEach((s, i) => { b += card(30 + i * 285, y + 320, w, { body: s, bs: 16, h, bfill: C.ink }).s; });
  add('04-al-ghazali',
    svg(900, y + 320 + h + 30, 'al-Ghazali (1058–1111): law and spirit together', b),
    'Two boxes, correct practice under the Sharia and inner sincerity, combine into true faith, al-Ghazali’s argument in The Revival of the Religious Sciences. Three effects follow: Sufism brought into mainstream Sunni Islam, criticism of philosophers who put reason above revelation, and lasting influence on madrasas and Sufi orders in the subcontinent.',
    'al-Ghazali joined law and spirituality, a model later scholars followed.',
    '## Why was al-Ghazali important?');
}

// 05 Ahmad Sirhindi
{
  const tlx = timeline(30, 120, 840, [
    { d: '1564', title: 'Born in Sirhind, Punjab', body: 'A scholar of the Naqshbandi order; known as Mujaddid Alf Thani, “renewer of the second millennium”.' },
    { d: 'Akbar', title: 'Opposes syncretism at court', body: 'Including the Din-i-Ilahi. Argues that Sufism must follow the Sharia strictly.', hi: true },
    { d: 'Letters', title: 'Hundreds of letters (Maktubat)', body: 'Urge nobles to return to orthodox practice.' },
    { d: 'Jahangir', title: 'Imprisoned in Gwalior fort, then released', body: '' },
    { d: '1624', title: 'Dies', body: 'His influence helps revive orthodox Sunni Sufism.' },
    { d: 'Aurangzeb', title: 'More orthodox policies', body: 'Often linked to Sirhindi’s influence; the Fatawa-e-Alamgiri is compiled.', hi: true },
  ], { dw: 140, bs: 16, ts: 18, gap: 10 });
  add('05-ahmad-sirhindi',
    svg(900, 120 + tlx.h + 30, 'Ahmad Sirhindi (1564–1624) and orthodox revival', tlx.s),
    'A timeline of Ahmad Sirhindi: born in Sirhind in 1564, he opposed Akbar’s Din-i-Ilahi, wrote hundreds of letters urging orthodox practice, was imprisoned by Jahangir in Gwalior fort and released, and died in 1624. His influence is linked to Aurangzeb’s more orthodox policies and the Fatawa-e-Alamgiri.',
    'Sirhindi insisted Sufism follow the Sharia, shaping orthodoxy under Aurangzeb.',
    '## Who was Ahmad Sirhindi?');
}

// 06 Problems after 1707 and Shah Waliullah's responses
{
  const rows = [
    ['Political decline after 1707: weak emperors, rival nobles, Maratha and Sikh expansion, invasions', 'Wrote to Muslim rulers urging them to defend Muslim power; letters to Ahmad Shah Abdali linked to the Third Battle of Panipat (1761)'],
    ['Many Muslims had little direct knowledge of the Qur’an, mainly available in Arabic', 'Translated the Qur’an into Persian; his sons later produced Urdu translations'],
    ['Division between Sunnis and Shias', 'Tried to reduce sectarian conflict and reconcile the schools of thought'],
    ['Scholars stressing law vs popular customs at shrines', 'Stressed the Sharia and hadith; wrote Hujjat Allah al-Baligha explaining the reasons behind Islamic law'],
  ];
  let b = T(225, 136, 'Problem', { size: 19, weight: 700, fill: C.rust, anchor: 'middle' }) + T(665, 136, 'Shah Waliullah’s response', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' });
  let y = 152;
  rows.forEach(([p, r]) => {
    const h = Math.max(cardH(390, { body: p, bs: 16 }), cardH(410, { body: r, bs: 16 }));
    b += card(30, y, 390, { body: p, bs: 16, h, fill: '#f6e3d6', edge: C.rust, bfill: C.ink }).s + card(460, y, 410, { body: r, bs: 16, h, fill: C.tealLight, edge: C.tealDark, bfill: C.ink }).s + arrow(424, y + h / 2, 454, y + h / 2, { w: 4 });
    y += h + 12;
  });
  const n = note(30, y + 8, 840, 'Shah Waliullah (1703–1762) of Delhi studied and taught at the Madrasa Rahimiya founded by his father, Shah Abdur Rahim, and studied hadith in Madinah after the Hajj.');
  add('06-shah-waliullah-reforms',
    svg(900, y + 8 + n.h + 30, 'Shah Waliullah’s answers to Muslim weakness', b + n.s),
    'Four problems facing Muslims after 1707 are matched to Shah Waliullah’s responses: political decline to letters urging rulers such as Ahmad Shah Abdali to act; lack of access to the Arabic Qur’an to his Persian translation; Sunni–Shia division to efforts at reconciliation; and tension between law and popular custom to his stress on Sharia, hadith and Hujjat Allah al-Baligha.',
    'Each of Shah Waliullah’s reforms answered a specific cause of Muslim weakness.',
    '## What were Shah Waliullah\'s reforms?');
}

// 07 Syed Ahmad Barelvi and the Jihad movement
{
  const tlx = timeline(30, 120, 840, [
    { d: '1786', title: 'Born at Rae Bareli', body: 'Studies under Shah Abdul Aziz in Delhi; serves in the cavalry of the Pathan leader Amir Khan.' },
    { d: 'Beliefs', title: 'Tariqa-i-Muhammadiya', body: 'A purified Islam, opposing practices he saw as un-Islamic.' },
    { d: '1826', title: 'Jihad against Sikh rule in the north-west', body: 'With Shah Ismail Shaheed; aims to restore Muslim freedom of worship and set up a state on Islamic lines.', hi: true },
    { d: '1830', title: 'Peshawar held briefly', body: 'Then rivalries among Pathan leaders, tax disputes and Sikh military strength weaken the movement.' },
    { d: '1831', title: 'Battle of Balakot', body: 'Syed Ahmad and Shah Ismail are killed.', hi: true },
  ], { dw: 130, bs: 16, ts: 18, gap: 10 });
  const y = 120 + tlx.h + 20;
  const n = note(30, y, 840, 'Context: Ranjit Singh’s Sikh state restricted Muslim worship in Punjab and the north-west, including the call to prayer in some areas.');
  add('07-barelvi-jihad',
    svg(900, y + n.h + 30, 'Syed Ahmad Barelvi and the Jihad movement', tlx.s + n.s),
    'A timeline: Syed Ahmad Barelvi, born at Rae Bareli in 1786, studied under Shah Abdul Aziz and served with Amir Khan; he preached the Tariqa-i-Muhammadiya; from 1826 he and Shah Ismail Shaheed fought Sikh rule; they held Peshawar briefly in 1830 but were weakened and killed at Balakot in 1831.',
    'The jihad won early battles but local rivalries and Sikh strength ended it at Balakot.',
    '## Who was Syed Ahmad Barelvi and what did his Jihad movement achieve?');
}

// 08 One reform tradition
{
  const nodes = [
    [330, 112, 'Shah Abdur Rahim', 'founded the Madrasa Rahimiya', C.panel, C.panelEdge],
    [330, 222, 'Shah Waliullah', '1703–1762', C.mustard, C.ink],
    [120, 332, 'Shah Abdul Aziz', 'his son', C.cream, C.olive],
    [540, 332, 'Shah Ismail Shaheed', 'his grandson', C.cream, C.olive],
    [120, 452, 'Syed Ahmad Barelvi', 'studied under Shah Abdul Aziz', C.tealLight, C.tealDark],
  ];
  const w = 240, h = 84;
  let b = '';
  const mid = (i) => [nodes[i][0] + w / 2, nodes[i][1]];
  const bot = (i) => [nodes[i][0] + w / 2, nodes[i][1] + h];
  const ln = (a, c, lab) => { const [x1, y1] = bot(a), [x2, y2] = mid(c); return arrow(x1, y1 + 2, x2, y2 - 6, { w: 3.5 }); };
  b += ln(0, 1) + ln(1, 2) + ln(1, 3) + ln(2, 4);
  b += path(`M${nodes[3][0] + w / 2},${nodes[3][1] + h} L${nodes[3][0] + w / 2},${nodes[4][1] + h / 2} L${nodes[4][0] + w + 6},${nodes[4][1] + h / 2}`, { stroke: C.ink, w: 3, extra: 'stroke-dasharray="8 6"' }) + T(nodes[3][0] + w / 2 + 10, nodes[4][1] + h / 2 - 10, 'jihad together from 1826', { size: 15, weight: 600 });
  nodes.forEach(([x, y, a, c, f, e]) => { b += R(x, y, w, h, f, e) + T(x + w / 2, y + 36, a, { size: 18, weight: 700, anchor: 'middle' }) + T(x + w / 2, y + 62, c, { size: 15, anchor: 'middle', fill: C.ink }); });
  const ly = 580;
  b += arrow(240, 452 + h + 4, 240, ly - 6, { w: 4, color: C.tealDark, marker: 'ahT' });
  ['Ahl-i-Hadith', 'Deobandi movement (Deoband, 1867)'].forEach((s, i) => { const x = 30 + i * 300; b += R(x, ly, i ? 400 : 280, 56, C.teal, C.tealDark) + T(x + (i ? 200 : 140), ly + 35, s, { size: 17, weight: 700, anchor: 'middle' }); });
  b += T(740, ly + 35, 'later influenced', { size: 16, fill: C.muted, anchor: 'middle' });
  add('08-reform-tradition',
    svg(900, ly + 86, 'One family, one reform tradition', b),
    'A family chart: Shah Abdur Rahim, founder of the Madrasa Rahimiya, is father of Shah Waliullah, whose son Shah Abdul Aziz taught Syed Ahmad Barelvi and whose grandson Shah Ismail Shaheed fought alongside Barelvi from 1826. The movement later influenced the Ahl-i-Hadith and the Deobandi movement founded in 1867.',
    'Shah Waliullah’s family and students carried his reforms into the 19th century.',
    '## Who was Syed Ahmad Barelvi and what did his Jihad movement achieve?');
}
