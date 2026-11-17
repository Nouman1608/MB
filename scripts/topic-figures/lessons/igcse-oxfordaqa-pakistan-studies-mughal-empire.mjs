import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-pakistan-studies-mughal-empire';
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

// 01 Emperors 1526–1707
{
  const x0 = 250, x1 = 850, Y0 = 1520, Y1 = 1710, top = 160, rh = 50;
  const X1 = (y) => x0 + ((y - Y0) * (x1 - x0)) / (Y1 - Y0);
  const rows = [
    ['Babur', [[1526, 1530]], 'Panipat 1526; Khanwa 1527'],
    ['Humayun', [[1530, 1540], [1555, 1556]], 'empire lost to Sher Shah Suri'],
    ['Akbar', [[1556, 1605]], 'mansabdari; Fatehpur Sikri'],
    ['Jahangir', [[1605, 1627]], 'Sir Thomas Roe'],
    ['Shah Jahan', [[1628, 1658]], 'Taj Mahal; Red Fort'],
    ['Aurangzeb', [[1658, 1707]], 'Bijapur 1686; Golconda 1687'],
  ];
  let b = panel(30, 112, 840, top - 112 + rows.length * rh + 30);
  for (let y = 1525; y <= 1700; y += 25) b += `<line x1="${X1(y)}" y1="${top - 6}" x2="${X1(y)}" y2="${top + rows.length * rh}" stroke="${C.panelEdge}" stroke-width="1.5" stroke-dasharray="4 5"/>` + T(X1(y), top - 14, String(y), { size: 15, fill: C.muted, anchor: 'middle' });
  rows.forEach(([n, sp, note2], i) => {
    const y = top + i * rh;
    if (i % 2 === 0) b += `<rect x="40" y="${y}" width="820" height="${rh}" fill="${C.tealLight}" opacity="0.5"/>`;
    b += T(52, y + 22, n, { size: 18, weight: 700 }) + T(52, y + 41, sp.map(([a, z]) => `${a}–${Math.floor(a / 100) === Math.floor(z / 100) ? String(z).slice(2) : z}`).join(', '), { size: 15, fill: C.muted });
    sp.forEach(([a, z]) => { b += `<rect x="${X1(a)}" y="${y + 12}" width="${Math.max(6, X1(z) - X1(a))}" height="${rh - 24}" rx="4" fill="${n === 'Aurangzeb' ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="1.5"/>`; });
    const zEnd = sp[sp.length - 1][1];
    const tx = X1(zEnd) + 8, wd = tw(note2, 15);
    if (tx + wd < 858) b += T(tx, y + 31, note2, { size: 15 });
    else b += T(X1(sp[0][0]) - 8, y + 31, note2, { size: 15, anchor: 'end' });
  });
  b += `<rect x="${X1(1540)}" y="${top + rh + 16}" width="${X1(1555) - X1(1540)}" height="${rh - 32}" fill="none" stroke="${C.rust}" stroke-width="2" stroke-dasharray="5 4"/>`;
  const ny = top + rows.length * rh + 50;
  const n = note(30, ny, 840, 'Between Humayun’s two reigns the empire was lost to the Afghan Sher Shah Suri.');
  add('01-emperors-1526-1707',
    svg(900, ny + n.h + 30, 'The great Mughals, 1526–1707', b + n.s, 'drawn to a year scale'),
    'Bars for each emperor’s reign: Babur 1526–30, Humayun 1530–40 and 1555–56, Akbar 1556–1605, Jahangir 1605–27, Shah Jahan 1628–58 and Aurangzeb 1658–1707, each with a key event or achievement. A dashed gap marks the years Humayun lost the empire to Sher Shah Suri.',
    'Akbar and Aurangzeb together ruled for almost a century.',
    '## Syllabus coverage');
}

// 02 Babur's route to empire
{
  const tlx = timeline(30, 120, 840, [
    { d: 'Descent', title: 'From Timur and Genghis Khan', body: 'Timur on his father’s side, Genghis Khan on his mother’s.' },
    { d: 'Fergana', title: 'Loses his homeland', body: '' },
    { d: '1504', title: 'Takes Kabul', body: 'Then turns to India.' },
    { d: '1526', title: 'First Battle of Panipat', body: 'His smaller army, using field artillery and cavalry tactics, defeats Sultan Ibrahim Lodi.', hi: true },
    { d: '1527', title: 'Battle of Khanwa', body: 'Defeats the Rajput confederacy under Rana Sanga.', hi: true },
  ], { dw: 130, bs: 16, ts: 18, gap: 10 });
  const y = 120 + tlx.h + 20;
  const n = note(30, y, 840, 'Context in 1526: the Lodi Sultanate of Delhi was weakened by quarrels among Afghan nobles, while Rajput kingdoms such as Mewar were powerful.');
  add('02-babur-founds-empire',
    svg(900, y + n.h + 30, 'How Babur founded the empire', tlx.s + n.s),
    'A timeline of Babur: descended from Timur and Genghis Khan, he lost Fergana, took Kabul in 1504, defeated Ibrahim Lodi at the First Battle of Panipat in 1526 with artillery and cavalry tactics, and beat the Rajputs under Rana Sanga at Khanwa in 1527.',
    'Two battles, Panipat and Khanwa, gave Babur north India.',
    '## How did Babur found the empire?');
}

// 03 Akbar's system
{
  const y = 112;
  let b = `<path d="M180,${y + 80} L450,${y} L720,${y + 80} Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + T(450, y + 62, 'Akbar’s empire, 1556–1605', { size: 20, weight: 700, anchor: 'middle' });
  const pil = [
    ['Conquest', 'Second Battle of Panipat (1556); north India, Gujarat, Bengal, Kashmir'],
    ['Alliances', 'With Rajput rulers'],
    ['Mansabdari', 'System to organise the nobles'],
    ['Land revenue', 'Reformed with finance minister Raja Todar Mal'],
    ['Religion', 'Abolished the jizya; debates in the Ibadat Khana'],
  ];
  const w = 156, h = Math.max(...pil.map(([a, c]) => cardH(w, { title: a, body: c, bs: 15, ts: 17 })));
  pil.forEach(([a, c], i) => { b += card(30 + i * 171, y + 94, w, { title: a, body: c, bs: 15, ts: 17, h, fill: C.tealLight, edge: C.tealDark, bfill: C.ink }).s; });
  b += `<rect x="30" y="${y + 94 + h + 6}" width="840" height="20" rx="4" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`;
  const n = note(30, y + 94 + h + 46, 840, 'Built Fatehpur Sikri. Jahangir (1605–27) continued Akbar’s system.');
  add('03-akbar-system',
    svg(900, y + 94 + h + 46 + n.h + 30, 'The pillars of Akbar’s rule', b + n.s),
    'Five pillars hold up Akbar’s empire: conquest after the Second Battle of Panipat in 1556, alliances with Rajput rulers, the mansabdari system for nobles, land revenue reform with Raja Todar Mal, and religious policy including abolishing the jizya and debates in the Ibadat Khana.',
    'Akbar held his empire together with conquest, alliances and organised government.',
    '## How did the empire grow to 1658?');
}

// 04 Aurangzeb: reforms and the empire at 1707
{
  const ref = ['Governed according to the Sharia', 'Fatawa-e-Alamgiri compiled', 'Muhtasibs supervised public morality', 'Jizya reimposed in 1679', 'Un-Islamic taxes removed; less court spending', 'Badshahi Mosque, Lahore'];
  const r = card(30, 112, 840, { title: 'Aurangzeb’s reforms (1658–1707)', body: ref.join(' · '), bs: 16, fill: C.panel });
  let b = r.s;
  const y = 112 + r.h + 24;
  const st = { title: 'Strengths at his death', body: ['Largest territory of any Mughal ruler (Bijapur 1686, Golconda 1687)', 'A functioning administration and army'], bullets: true, bs: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink };
  const wk = { title: 'Weaknesses at his death', body: ['Long Deccan wars drained the treasury', 'Rajput, Jat, Sikh and Maratha revolts continued', 'Too few jagirs (land grants) for the growing number of nobles', 'No clear rule of succession'], bullets: true, bs: 16, fill: '#f6e3d6', edge: C.rust, bfill: C.ink };
  const h = Math.max(cardH(410, st), cardH(410, wk));
  b += `<path d="M450,${y + 4} L434,${y + 36} L466,${y + 36} Z" fill="${C.ink}"/><line x1="230" y1="${y + 6}" x2="670" y2="${y + 6}" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>` + `<line x1="230" y1="${y + 6}" x2="230" y2="${y + 44}" stroke="${C.ink}" stroke-width="2.5"/><line x1="670" y1="${y + 6}" x2="670" y2="${y + 44}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += card(30, y + 44, 410, { ...st, h }).s + card(460, y + 44, 410, { ...wk, h }).s;
  const ny = y + 44 + h + 20;
  const n = note(30, ny, 840, 'The Maratha wars, first against Shivaji, lasted more than twenty years.');
  add('04-aurangzeb-1707',
    svg(900, ny + n.h + 30, 'The empire Aurangzeb left in 1707', b + n.s),
    'Aurangzeb’s reforms are listed: rule by Sharia, the Fatawa-e-Alamgiri, muhtasibs, the jizya reimposed in 1679, removal of un-Islamic taxes and the Badshahi Mosque. A balance then weighs strengths at his death (the largest territory, a working administration and army) against weaknesses (drained treasury, revolts, too few jagirs, no succession rule).',
    'In 1707 the empire was at its largest but already financially and politically strained.',
    '## How did Aurangzeb rule, and what state did he leave the empire in?');
}

// 05 Forces behind decline
{
  const cx = 450, cy = 330;
  const f = [
    ['Weak leadership', 'Wars of succession, short reigns; nobles such as the Sayyid brothers controlled emperors', 30, 112],
    ['Nadir Shah', 'Battle of Karnal and sack of Delhi (1739); Peacock Throne taken', 590, 112],
    ['Marathas and Sikhs', 'Marathas across central and western India; Sikh chiefs take Punjab; Ranjit Singh’s kingdom at Lahore', 30, 420],
    ['East India Company', 'Plassey (1757); Bengal’s revenue (1765); annexations to the 1850s', 590, 420],
  ];
  const w = 280, h = Math.max(...f.map(([a, c]) => cardH(w, { title: a, body: c, bs: 16 })));
  let b = '';
  f.forEach(([a, c, x, y]) => {
    const yy = y > 300 ? 540 - h : y;
    b += card(x, yy, w, { title: a, body: c, bs: 16, h, fill: '#f6e3d6', edge: C.rust, bfill: C.ink }).s;
    const sx = x < cx ? x + w + 4 : x - 4, sy = yy + h / 2;
    const ex = cx + (x < cx ? -110 : 110), ey = cy + (y < 300 ? -40 : 40);
    b += arrow(sx, sy, ex, ey, { w: 4, color: C.rust, marker: 'ahR' });
  });
  b += R(cx - 100, cy - 60, 200, 120, C.mustard, C.ink, { rx: 16 }) + T(cx, cy - 8, 'Mughal', { size: 20, weight: 700, anchor: 'middle' }) + T(cx, cy + 18, 'power after 1707', { size: 17, anchor: 'middle' });
  add('05-forces-of-decline',
    svg(900, 570, 'Four forces behind Mughal decline', b),
    'Four forces press on Mughal power after 1707: weak leadership and powerful nobles, Nadir Shah’s victory at Karnal and sack of Delhi in 1739, the expansion of the Marathas and Sikhs, and the East India Company after Plassey in 1757.',
    'Weakness inside and pressure from outside combined to break Mughal power.',
    '## Why did the Mughal Empire decline after 1707?');
}

// 06 Decline timeline 1707–1858
{
  const tlx = timeline(30, 120, 840, [
    { d: '1707', title: 'Death of Aurangzeb', body: 'Wars of succession and short reigns follow.' },
    { d: '1739', title: 'Karnal and the sack of Delhi', body: 'Nadir Shah defeats Muhammad Shah; Mughal prestige never recovers.', hi: true },
    { d: '1757', title: 'Battle of Plassey', body: 'Clive defeats Siraj-ud-Daula after securing Mir Jafar’s defection; the Company gains Bengal’s wealth.', hi: true },
    { d: '1765', title: 'Right to collect Bengal’s revenue', body: 'Granted to the East India Company.' },
    { d: '1843–56', title: 'British annexations', body: 'Sindh (1843), Punjab (1849), Awadh (1856), after wars against Mysore and the Marathas.' },
    { d: '1857–58', title: 'War of Independence; last emperor exiled', body: 'Bahadur Shah Zafar is exiled in 1858.', hi: true },
  ], { dw: 130, bs: 16, ts: 18, gap: 10 });
  add('06-decline-timeline',
    svg(900, 120 + tlx.h + 30, 'From Aurangzeb to the last emperor, 1707–1858', tlx.s),
    'A timeline of decline: Aurangzeb’s death in 1707, Karnal and the sack of Delhi in 1739, Plassey in 1757, the Company’s right to collect Bengal’s revenue in 1765, the annexation of Sindh, Punjab and Awadh between 1843 and 1856, and the exile of Bahadur Shah Zafar in 1858 after the War of Independence of 1857.',
    'In 150 years Mughal rule shrank from the largest empire to a title in exile.',
    '## Why did the Mughal Empire decline after 1707?');
}
