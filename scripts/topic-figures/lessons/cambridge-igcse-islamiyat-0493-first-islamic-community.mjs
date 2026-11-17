import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-islamiyat-0493-first-islamic-community';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });


// ---- Local helpers (self-contained; house style only) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
// Urdu text: Nastaliq, own <text> element, right-aligned by default (no direction attribute).
const U = (x, y, s, { size = 28, fill = C.ink, anchor = 'end' } = {}) =>
  `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-family="Noto Nastaliq Urdu">&#x200F;${X(s)}&#x200F;</text>`; // RLM marks keep digits and end punctuation in RTL order
const cw = (size, weight = 400) => size * (weight >= 600 ? 0.58 : 0.52);
function wrap(s, width, size = 17, weight = 400) {
  const max = Math.max(4, Math.floor(width / cw(size, weight)));
  const out = []; let cur = '';
  for (const w of String(s).split(/\s+/).filter(Boolean)) {
    if (!cur) cur = w; else if ((cur + ' ' + w).length <= max) cur += ' ' + w; else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  return out;
}
// Wrapped paragraph; returns {s, h}. lh = line height.
function para(x, y, s, width, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  const lines = wrap(s, width, size, o.weight || 400);
  return { s: lines.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: lines.length * lh, n: lines.length };
}
// Stat tile: big figure + small note, centred.
const stat = (x, y, w, h, big, small, fill = C.tealLight, edge = C.tealDark) => {
  const p = para(x + w / 2, y + 74, small, w - 30, { size: 16, fill: C.muted, anchor: 'middle', lh: 21 });
  return panel(x, y, w, h, fill, edge) + T(x + w / 2, y + 44, big, { size: 26, weight: 700, anchor: 'middle' }) + p.s;
};
// Card with bold title and wrapped body lines (array of strings, each wrapped). Returns string.
function card(x, y, w, h, title, body = [], o = {}) {
  const pad = o.pad ?? 20, size = o.size ?? 17, mid = o.anchor === 'middle';
  const tx = mid ? x + w / 2 : x + pad, anchor = mid ? 'middle' : 'start';
  let s = panel(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge), cy = y + pad;
  if (o.kicker) { s += T(tx, cy + 14, o.kicker, { size: 15, weight: 700, fill: o.kfill || C.tealDark, anchor }); cy += 26; }
  if (title) { const p = para(tx, cy + (o.tsize ?? 20) * 0.85, title, w - 2 * pad, { size: o.tsize ?? 20, weight: 700, anchor, fill: o.tfill || C.ink }); s += p.s; cy += p.h + 6; }
  for (const b of body) { const p = para(tx, cy + size * 0.85, b, w - 2 * pad, { size, fill: o.bfill || C.muted, anchor, lh: Math.round(size * 1.35) }); s += p.s; cy += p.h + (o.gap ?? 6); }
  return s;
}
// Numbered step rows: [title, desc]. Returns {s, h}.
function steps(y, list, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? 12, size = o.size ?? 17; let s = '', cy = y;
  list.forEach(([title, desc], i) => {
    const d = para(x + 92, 0, desc, w - 115, { size, fill: C.muted, lh: Math.round(size * 1.35) });
    const h = Math.max(o.minH ?? 84, 34 + 26 + d.h + 4);
    s += panel(x, cy, w, h) + badge(x + 46, cy + h / 2, 24, String(i + 1), o.hi === i ? C.mustard : C.cream);
    s += T(x + 92, cy + 38, title, { size: 20, weight: 700 }) + para(x + 92, cy + 66, desc, w - 115, { size, fill: C.muted, lh: Math.round(size * 1.35) }).s;
    cy += h + gap;
  });
  return { s, h: cy - y - gap };
}
const harrow = (x1, x2, y, o = {}) => arrow(x1, y, x2, y, { w: 3.5, ...o });
const varrow = (x, y1, y2, o = {}) => arrow(x, y1, x, y2, { w: 3.5, ...o });
// ---- end helpers ----
// Table. cols: [{w, head, ur?:bool, anchor?}], rows: arrays of cells (string or array of lines).
// English cells wrap at the column width; Urdu cells are right-aligned, one line per array item.
function table(x, y, cols, rows, o = {}) {
  const size = o.size ?? 17, us = o.us ?? 26, ugap = o.ugap ?? Math.round(us * 2.1), lh = Math.round(size * 1.35), pad = 16;
  const headH = o.headH ?? 50, W = cols.reduce((a, c) => a + c.w, 0);
  const prep = rows.map((r) => r.map((cell, j) => {
    const c = cols[j], g = cell && cell.u ? cell.g : null, cc = cell && cell.u ? cell.u : cell, lines = Array.isArray(cc) ? cc : [cc];
    if (c.ur) return { ur: true, lines, g, h: (lines.length - 1) * ugap + us * 2.6 + 12 + (g ? 22 : 0) };
    const wl = lines.flatMap((l) => wrap(l, c.w - 2 * pad, size, c.bold ? 700 : 400));
    return { ur: false, lines: wl, h: wl.length * lh + 22 };
  }));
  const hs = prep.map((r) => Math.max(o.minRow ?? 56, ...r.map((c) => c.h)));
  const H = headH + hs.reduce((a, b) => a + b, 0);
  let s = panel(x, y, W, H) + `<path d="M${x + 1.25},${y + headH} L${x + 1.25},${y + 14} Q${x + 1.25},${y + 1.25} ${x + 14},${y + 1.25} L${x + W - 14},${y + 1.25} Q${x + W - 1.25},${y + 1.25} ${x + W - 1.25},${y + 14} L${x + W - 1.25},${y + headH} Z" fill="${C.teal}"/>`;
  let cx = x;
  cols.forEach((c, j) => {
    s += T(c.ur ? cx + c.w - pad : cx + pad, y + headH / 2 + 7, c.head, { size: 17, weight: 700, anchor: c.ur ? 'end' : 'start' });
    if (j) s += `<line x1="${cx}" y1="${y}" x2="${cx}" y2="${y + H}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    cx += c.w;
  });
  let cy = y + headH;
  prep.forEach((r, i) => {
    if (o.hiRows?.includes(i)) s += `<rect x="${x + 2}" y="${cy}" width="${W - 4}" height="${hs[i]}" fill="${C.cream}"/>`;
    s += `<line x1="${x}" y1="${cy}" x2="${x + W}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    let cx2 = x;
    r.forEach((c, j) => {
      const col = cols[j];
      if (c.ur) {
        const top = cy + (hs[i] - c.h) / 2;
        const ux = col.uanchor === 'middle' ? cx2 + col.w / 2 : cx2 + col.w - pad;
        c.lines.forEach((l, k) => { s += U(ux, top + 6 + us * 1.85 + k * ugap, l, { size: us, fill: col.fill || C.ink, anchor: col.uanchor || 'end' }); });
        if (c.g) s += T(ux, top + c.h - 14, c.g, { size: 15, fill: col.gfill || C.muted, italic: true, anchor: col.uanchor || 'end' });
      } else {
        const top = cy + (hs[i] - c.lines.length * lh) / 2 + size * 0.95;
        c.lines.forEach((l, k) => { s += T(cx2 + pad, top + k * lh, l, { size, fill: col.fill || (j === 0 ? C.ink : C.muted), weight: col.bold ? 700 : 400 }); });
      }
      cx2 += col.w;
    });
    cy += hs[i];
  });
  return { s, h: H };
}
const SV = (h, title, body) => svg(900, Math.ceil(h), title, body);
// Urdu word chip with English gloss underneath. Returns string.
const chip = (x, y, w, ur, en, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${o.h ?? 104}" rx="12" fill="${o.fill || C.panel}" stroke="${o.edge || C.panelEdge}" stroke-width="2.5"/>` +
  U(x + w / 2, y + (o.ub ?? 52), ur, { size: o.us ?? 26, anchor: 'middle' }) + (en ? T(x + w / 2, y + (o.h ?? 104) - 16, en, { size: 16, fill: C.muted, anchor: 'middle' }) : '');
// Approximate Nastaliq line width.
const uw = (s, size = 26) => s.length * size * 0.42;
const tick = (x, y, ok) => T(x, y, ok ? '✓' : '✗', { size: 26, weight: 700, fill: ok ? C.tealDark : C.rust, anchor: 'middle' });


// Small name card: bold name, muted fact lines (wrapped).
const nameCard = (x, y, w, h, name, fact, o = {}) => panel(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge) + T(x + 18, y + 32, name, { size: o.ns ?? 18, weight: 700, fill: o.nfill || C.ink }) + para(x + 18, y + 58, fact, w - 36, { size: o.fs ?? 15, fill: C.muted, lh: 20 }).s;

// 01 The topic and the questions
{
  let b = '';
  [['The wives', 'the "Mothers of the Believers" (Sura 33.6)'], ['The descendants', 'children, grandchildren and the Imams recognised among Shi\'a Muslims'], ['Leading Companions', 'Ten Blessed, Scribes, major characters, Emigrants and Helpers, the four caliphs']].forEach(([h, d], i) => {
    b += card(30 + i * 286, 110, 268, 172, h, [d], { kicker: `GROUP ${i + 1}`, fill: i === 1 ? C.tealLight : C.panel, edge: i === 1 ? C.tealDark : C.panelEdge, size: 16, tsize: 20 });
  });
  b += panel(30, 302, 410, 100, C.cream, C.mustard) + T(54, 338, 'The four caliphs: up to 632 only', { size: 18, weight: 700 }) + T(54, 366, 'Abu Bakr, Umar, Uthman and Ali during', { size: 16, fill: C.muted }) + T(54, 388, 'the Prophet\'s (pbuh) lifetime', { size: 16, fill: C.muted });
  b += harrow(446, 474, 352, { color: C.rust, marker: 'ahR' });
  b += panel(480, 302, 390, 100, '#fbf1ea', C.rust) + T(504, 338, 'Their rule after 632', { size: 18, weight: 700, fill: C.rust }) + T(504, 366, 'belongs to Paper 2 Topic 3,', { size: 16, fill: C.muted }) + T(504, 388, 'not to this topic', { size: 16, fill: C.muted });
  b += T(450, 446, 'One or two of Questions 3 to 5 are set on this topic', { size: 19, weight: 700, anchor: 'middle' });
  b += `<rect x="30" y="466" width="560" height="96" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(310, 504, 'Part (a): 10 marks', { size: 20, weight: 700, anchor: 'middle' }) + T(310, 534, 'write about named people', { size: 16, fill: C.muted, anchor: 'middle' });
  b += `<rect x="600" y="466" width="270" height="96" rx="12" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2.5"/>` + T(735, 504, 'Part (b): 4 marks', { size: 20, weight: 700, anchor: 'middle' }) + T(735, 534, 'what their actions mean', { size: 16, fill: C.muted, anchor: 'middle' });
  add('01-topic-and-questions',
    SV(590, 'The First Islamic Community: three groups', b),
    'Paper 1 Topic 4 covers three groups: the Prophet\'s (pbuh) wives, his descendants including the Shi\'a Imams, and his leading Companions. The four caliphs are studied only up to 632. Questions have a 10-mark part (a) on named people and a 4-mark part (b) on what their actions mean.',
    'Facts about named people for 10 marks; their meaning for Muslims for 4.',
    '## Syllabus coverage');
}

// 02 The wives: one distinctive fact each
{
  let b = '';
  const W = [
    ['Khadija bint Khuwaylid', 'merchant; first to accept Islam; mother of all his children but Ibrahim; died 619'],
    ['Sawda bint Zam\'a', 'widow of an emigrant to Abyssinia; married after Khadija\'s death'],
    ['A\'isha bint Abi Bakr', 'scholar who narrated many Hadiths; he died in her room'],
    ['Hafsa bint Umar', 'daughter of Umar; kept the sheets of the Qur\'an'],
    ['Zaynab bint Khuzayma', 'Umm al-Masakin, "mother of the poor"'],
    ['Umm Salama (Hind)', 'early emigrant; gave the advice he followed at Hudaybiyya'],
    ['Zaynab bint Jahsh', 'his cousin; marriage referred to in Sura 33.37'],
    ['Juwayriya bint al-Harith', 'after the marriage many Banu Mustaliq captives were freed'],
    ['Umm Habiba (Ramla)', 'daughter of Abu Sufyan; stayed Muslim in Abyssinia'],
    ['Safiyya bint Huyayy', 'of Banu Nadir; married after Khaybar'],
    ['Maymuna bint al-Harith', 'his last marriage, 7 AH, at the delayed umra'],
  ];
  W.forEach(([n, f], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 104;
    b += nameCard(x, y, 410, 92, n, f, i === 0 ? { fill: C.cream, edge: C.mustard } : i === 2 ? { fill: C.tealLight, edge: C.tealDark } : {});
  });
  b += panel(460, 110 + 5 * 104, 410, 92, C.bg, C.panelEdge) + T(478, 110 + 5 * 104 + 32, 'Also: Mariya al-Qibtiyya', { size: 18, weight: 700 }) + para(478, 110 + 5 * 104 + 58, 'sent from Egypt; mother of his son Ibrahim', 374, { size: 15, fill: C.muted, lh: 20 }).s;
  const y = 110 + 6 * 104 + 6;
  b += panel(30, y, 840, 64) + T(450, y + 40, 'The Qur\'an calls them "Mothers of the Believers" (Sura 33.6).', { size: 18, weight: 700, anchor: 'middle' });
  add('02-the-wives',
    SV(y + 92, 'The wives: one fact that marks each', b),
    'Eleven wives, each with a distinctive fact, from Khadija, the first to accept Islam, and A\'isha, who narrated many Hadiths, to Maymuna, his last marriage in 7 AH. Mariya al-Qibtiyya was the mother of his son Ibrahim. The Qur\'an calls the wives "Mothers of the Believers".',
    'Learn each wife with one or two facts that make her distinctive.',
    '## Who were the Prophet\'s wives?');
}

// 03 Why the marriages matter
{
  let b = '', y = 110;
  [['Security for widows', 'Several of the marriages gave security to widows.'], ['Tribes and families joined', 'Some joined tribes and families together and helped peace.'], ['Teaching preserved', 'A\'isha and Umm Salama preserved his teaching, especially on family and private life.'], ['A model for marriage', 'His conduct as a husband is a model for Muslim marriage.']].forEach(([h, d], i) => {
    b += panel(30, y, 840, 92, i % 2 ? C.panel : C.tealLight, i % 2 ? C.panelEdge : C.tealDark) + badge(70, y + 46, 22, String(i + 1), C.cream) + T(112, y + 40, h, { size: 20, weight: 700 }) + T(112, y + 68, d, { size: 17, fill: C.muted });
    y += 104;
  });
  b += T(450, y + 20, 'Use these reasons for part (b): what the marriages mean for Muslims.', { size: 17, fill: C.muted, anchor: 'middle' });
  add('03-why-the-marriages-matter',
    SV(y + 50, 'Why the marriages matter', b),
    'Four reasons the marriages matter: security for widows, joining tribes and families in peace, preserving his teaching through A\'isha and Umm Salama, and a model of conduct for Muslim marriage.',
    'Four reasons that turn facts about the wives into a part (b) answer.',
    '## Who were the Prophet\'s wives?');
}

// 04 Descendants: a text family tree
{
  let b = '';
  const box = (x, y, w, h, t1, t2, f = C.panel, e = C.panelEdge) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(x + w / 2, y + (t2 ? 28 : h / 2 + 6), t1, { size: t1.length > 9 && w < 120 ? 15 : 17, weight: 700, anchor: 'middle' }) + (t2 ? T(x + w / 2, y + 50, t2, { size: 15, fill: C.muted, anchor: 'middle' }) : '');
  b += box(330, 110, 240, 52, 'The Prophet (pbuh)', '', C.mustard, C.olive);
  b += path('M450,162 L450,180 M220,180 L790,180 M220,180 L220,196 M790,180 L790,196', { w: 2.5 });
  b += box(110, 196, 220, 44, 'with Khadija', '', C.cream, C.mustard) + box(710, 196, 160, 44, 'with Mariya', '', C.cream, C.mustard);
  const kids = [['al-Qasim', 'died young'], ['Abdullah', 'died young'], ['Zaynab', 'm. Abu al-As'], ['Ruqayya', 'm. Uthman'], ['Umm Kulthum', 'm. Uthman'], ['Fatima', 'm. Ali']];
  const kx = (i) => 30 + i * 112;
  b += path(`M220,240 L220,256 M${kx(0) + 52},256 L${kx(5) + 52},256`, { w: 2.5 });
  kids.forEach(([n, d], i) => { b += path(`M${kx(i) + 52},256 L${kx(i) + 52},270`, { w: 2.5 }) + box(kx(i), 270, 104, 66, n, d, i === 5 ? C.tealLight : C.panel, i === 5 ? C.tealDark : C.panelEdge); });
  b += path('M790,240 L790,270', { w: 2.5 }) + box(720, 270, 140, 66, 'Ibrahim', 'died as an infant');
  // Uthman note
  b += `<path d="M${kx(3) + 52},338 L${kx(3) + 52},352 L${kx(4) + 52},352 L${kx(4) + 52},338" fill="none" stroke="${C.olive}" stroke-width="2.5"/>` + path(`M${kx(3) + 108},352 L${kx(3) + 108},372`, { w: 2.5, stroke: C.olive });
  b += `<rect x="${kx(3) - 12}" y="372" width="240" height="64" rx="10" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2"/>` + T(kx(3) + 108, 398, 'Uthman: Dhu al-Nurayn', { size: 16, weight: 700, anchor: 'middle' }) + T(kx(3) + 108, 422, '"possessor of two lights"', { size: 15, fill: C.muted, anchor: 'middle', italic: true });
  // grandchildren
  b += path(`M${kx(5) + 52},338 L${kx(5) + 52},470 M${kx(5) - 70},470 L${kx(5) + 166},470`, { w: 2.5 });
  b += box(kx(5) - 120, 486, 110, 52, 'Hasan', '', C.tealLight, C.tealDark) + box(kx(5) + 110, 486, 110, 52, 'Husayn', '', C.tealLight, C.tealDark);
  b += path(`M${kx(5) - 65},470 L${kx(5) - 65},486 M${kx(5) + 165},470 L${kx(5) + 165},486`, { w: 2.5 });
  b += path(`M${kx(2) + 52},338 L${kx(2) + 52},486`, { w: 2.5 }) + box(kx(2) - 12, 486, 120, 52, 'Umama', '', C.tealLight, C.tealDark);
  b += T(450, 572, 'Grandchildren', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += panel(30, 592, 840, 96) + T(54, 628, 'Hasan and Husayn, sons of Fatima and Ali:', { size: 17, weight: 700 }) + T(54, 654, 'he called them leaders of the youth of paradise.', { size: 16, fill: C.muted }) +
    T(500, 628, 'Umama, daughter of Zaynab:', { size: 17, weight: 700 }) + T(500, 654, 'he carried her while praying.', { size: 16, fill: C.muted });
  add('04-descendants',
    SV(716, 'His children and grandchildren', b),
    'A text family tree. With Khadija: al-Qasim and Abdullah, who died young, and Zaynab (married Abu al-As), Ruqayya and Umm Kulthum (both married Uthman, called Dhu al-Nurayn) and Fatima (married Ali). With Mariya: Ibrahim, who died as an infant. Grandchildren include Hasan and Husayn, sons of Fatima, and Umama, daughter of Zaynab.',
    'All his sons died young; his line continued through his daughters.',
    '## Who were his descendants?');
}

// 05 The twelve Imams
{
  let b = '';
  const I = ['Ali ibn Abi Talib', 'Hasan ibn Ali', 'Husayn ibn Ali', 'Ali Zayn al-Abidin', 'Muhammad al-Baqir', 'Ja\'far al-Sadiq', 'Musa al-Kazim', 'Ali al-Rida', 'Muhammad al-Jawad', 'Ali al-Hadi', 'Hasan al-Askari', 'Muhammad al-Mahdi'];
  I.forEach((n, i) => {
    const x = 30 + Math.floor(i / 6) * 430, y = 110 + (i % 6) * 66;
    const hi = i < 3 || i === 11;
    b += badge(x + 26, y + 27, 21, String(i + 1), hi ? C.mustard : C.cream) + `<rect x="${x + 58}" y="${y}" width="352" height="54" rx="10" fill="${hi ? C.cream : C.panel}" stroke="${hi ? C.mustard : C.panelEdge}" stroke-width="2"/>` + T(x + 76, y + 34, n, { size: 18, weight: hi ? 700 : 400 });
  });
  let y = 110 + 6 * 66 + 10;
  b += card(30, y, 410, 112, 'Husayn', ['the third Imam, martyred at Karbala'], { fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 19 });
  b += card(460, y, 410, 112, 'Muhammad al-Mahdi', ['believed to be in occultation and to return'], { fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 19 });
  y += 132;
  b += panel(30, y, 840, 84) + T(54, y + 36, 'Twelver Shi\'a belief: leadership passed by God\'s appointment', { size: 17, weight: 700 }) + T(54, y + 62, 'through the Prophet\'s (pbuh) family, beginning with Ali. Know the names in order.', { size: 16, fill: C.muted });
  add('05-twelve-imams',
    SV(y + 112, 'The twelve Imams of Twelver Shi\'a Muslims', b),
    'The twelve Imams in order, from Ali ibn Abi Talib, Hasan and Husayn to Hasan al-Askari and Muhammad al-Mahdi. Husayn was martyred at Karbala; Muhammad al-Mahdi is believed to be in occultation and to return. Twelver Shi\'a Muslims believe leadership passed by God\'s appointment through the Prophet\'s family.',
    'Know the twelve names in order, with more detail on Ali, Hasan and Husayn.',
    '## Who were his descendants?');
}

// 06 The Ten Blessed Companions
{
  let b = '';
  b += T(450, 124, 'Four who became caliphs', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  ['Abu Bakr', 'Umar', 'Uthman', 'Ali'].forEach((n, i) => { b += `<rect x="${30 + i * 213}" y="140" width="201" height="54" rx="10" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2.5"/>` + T(130 + i * 213, 174, n, { size: 19, weight: 700, anchor: 'middle' }); });
  b += T(450, 236, 'Six more, each with one fact', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const S = [
    ['Talha ibn Ubaydullah', 'shielded the Prophet (pbuh) at Uhud; his hand was badly injured'],
    ['al-Zubayr ibn al-Awwam', 'the Prophet\'s cousin, called his disciple (hawari); an early convert'],
    ['Abd al-Rahman ibn Awf', 'arrived in Madinah with nothing, asked to be shown the market, became a generous trader'],
    ['Sa\'d ibn Abi Waqqas', 'an early convert and a famous archer'],
    ['Sa\'id ibn Zayd', 'husband of Umar\'s sister Fatima; Umar\'s conversion took place in their house'],
    ['Abu Ubayda ibn al-Jarrah', '"the trustworthy one of this community"'],
  ];
  S.forEach(([n, f], i) => { b += nameCard(30 + (i % 2) * 430, 252 + Math.floor(i / 2) * 112, 410, 100, n, f, { fill: C.tealLight, edge: C.tealDark }); });
  const y = 252 + 3 * 112 + 8;
  b += panel(30, y, 840, 64) + T(450, y + 40, 'Named together in one Hadith as promised paradise. Never list names without facts.', { size: 17, weight: 600, anchor: 'middle' });
  add('06-ten-blessed',
    SV(y + 92, 'The Ten Blessed Companions', b),
    'The ten promised paradise in one Hadith: the four future caliphs and six others, each with a fact. Talha shielded the Prophet (pbuh) at Uhud; al-Zubayr was his cousin and disciple; Abd al-Rahman ibn Awf became a generous trader; Sa\'d ibn Abi Waqqas was a famous archer; Umar converted in Sa\'id ibn Zayd\'s house; Abu Ubayda was "the trustworthy one".',
    'Ten names, each with a fact: names alone earn little.',
    '## Who were the Ten Blessed Companions?');
}

// 07 Emigrants and Helpers
{
  let b = '';
  b += card(30, 110, 360, 160, 'Muhajirun', ['Emigrants', 'Left Makkah for the sake of faith, often losing homes and wealth.'], { fill: C.cream, edge: C.mustard, tsize: 24, size: 16 });
  b += card(510, 110, 360, 160, 'Ansar', ['Helpers', 'The Muslims of Madinah, from the tribes of Aws and Khazraj, who sheltered them.'], { fill: C.tealLight, edge: C.tealDark, tsize: 24, size: 16 });
  b += arrow(398, 176, 502, 176, { w: 4 }) + arrow(502, 208, 398, 208, { w: 4 }) + T(450, 162, 'paired in', { size: 15, anchor: 'middle', fill: C.muted }) + T(450, 236, 'brotherhood', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 292, 840, 124) + T(54, 328, 'Example of the brotherhood', { size: 18, weight: 700 }) +
    T(54, 360, 'Sa\'d ibn al-Rabi\' (Helper) offered half his wealth to Abd al-Rahman ibn Awf (Emigrant),', { size: 16, fill: C.muted }) + T(54, 386, 'who asked only to be shown the market.', { size: 16, fill: C.muted });
  b += panel(30, 436, 840, 70, C.cream, C.mustard) + T(450, 478, 'Sura 59.9: the Ansar preferred others above themselves, even when in need.', { size: 17, weight: 700, anchor: 'middle' });
  b += T(450, 548, 'Part (b): what Muslims today can learn', { size: 19, weight: 700, anchor: 'middle' });
  b += card(30, 566, 410, 128, 'From the Helpers', ['Welcome refugees and migrants, and give practical help, not only sympathy.'], { fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 19 });
  b += card(460, 566, 410, 128, 'From Abd al-Rahman', ['Those who receive help should work to stand on their own feet.'], { fill: C.cream, edge: C.mustard, size: 16, tsize: 19 });
  add('07-emigrants-and-helpers',
    SV(722, 'The Emigrants and the Helpers', b),
    'The Muhajirun left Makkah for their faith; the Ansar of Madinah, from Aws and Khazraj, sheltered them, and the Prophet (pbuh) paired them in brotherhood. Sa\'d ibn al-Rabi\' offered Abd al-Rahman ibn Awf half his wealth; he asked only for the market. Sura 59.9 praises the Ansar. Lessons: welcome and help those in need, and work to become self-reliant.',
    'Generosity on one side, self-reliance on the other: both are lessons for today.',
    '## Who were the Emigrants and Helpers?');
}

// 08 The four caliphs in his lifetime
{
  let b = '';
  const K = [
    ['Abu Bakr', 'al-Siddiq', ['First adult man to accept Islam', 'Brought others to Islam; freed Bilal', 'Believed the Isra at once', 'Companion on the Hijra; led prayers in the final illness']],
    ['Umar', 'al-Faruq', ['Accepted Islam after reading verses in his sister\'s house', 'Muslims then prayed openly at the Ka\'ba', 'His daughter Hafsa married the Prophet (pbuh)']],
    ['Uthman', 'Dhu al-Nurayn', ['Early convert; married Ruqayya, then Umm Kulthum', 'Emigrated to Abyssinia; bought the well of Ruma', 'Equipped much of the army for Tabuk']],
    ['Ali', '', ['First child to accept Islam', 'Slept in the Prophet\'s bed on the night of the Hijra', 'Married Fatima; carried the standard at Khaybar', 'Left in charge of Madinah during Tabuk']],
  ];
  K.forEach(([n, t, ls], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 270;
    b += panel(x, y, 410, 254, i === 0 || i === 3 ? C.tealLight : C.cream, i === 0 || i === 3 ? C.tealDark : C.mustard) + T(x + 20, y + 40, n, { size: 23, weight: 700 }) + (t ? T(x + 390, y + 40, t, { size: 16, italic: true, fill: C.muted, anchor: 'end' }) : '');
    let cy = y + 76;
    ls.forEach((l) => { const p = para(x + 40, cy, l, 350, { size: 16, lh: 21 }); b += `<circle cx="${x + 26}" cy="${cy - 5}" r="4" fill="${C.ink}"/>` + p.s; cy += p.h + 10; });
  });
  b += panel(30, 650, 840, 64) + T(450, 690, 'Paper 1 stops at 632: their rule as caliphs belongs to Paper 2.', { size: 17, weight: 700, anchor: 'middle' });
  add('08-caliphs-in-his-lifetime',
    SV(742, 'The four caliphs before 632', b),
    'Four cards on the future caliphs during the Prophet\'s (pbuh) lifetime. Abu Bakr, al-Siddiq, was the first adult man to accept Islam and his companion on the Hijra. Umar, al-Faruq, accepted Islam in his sister\'s house. Uthman married two of his daughters and equipped the army for Tabuk. Ali, the first child to accept Islam, slept in the Prophet\'s bed on the night of the Hijra.',
    'What each future caliph did before 632, not as caliph.',
    '## What did the four caliphs do during his lifetime?');
}
