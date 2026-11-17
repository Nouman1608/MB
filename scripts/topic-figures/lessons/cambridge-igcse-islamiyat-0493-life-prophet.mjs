import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-islamiyat-0493-life-prophet';
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


const bullets = (x, y, ls, w, o = {}) => { let s = '', cy = y; ls.forEach((l) => { const p = para(x + 18, cy, l, w - 18, { size: o.size ?? 16, lh: o.lh ?? 21, fill: o.fill || C.ink }); s += `<circle cx="${x + 5}" cy="${cy - 5}" r="4" fill="${o.dot || C.ink}"/>` + p.s; cy += p.h + (o.gap ?? 8); }); return { s, h: cy - y }; };

// 01 Four blocks for revision
{
  let b = '';
  const B = [
    ['Before prophethood', '570-610', ['Birth, Year of the Elephant', 'Halima', 'Deaths of Amina and Abd al-Muttalib', 'Abu Talib; Bahira', 'Hilf al-Fudul', 'Marriage to Khadija', 'The Black Stone'], C.panel, C.panelEdge],
    ['Makkah', '610-622', ['First revelation', 'Secret, then public preaching', 'Persecution', 'Abyssinia', 'Boycott', 'Year of Sorrow; Ta\'if', 'Isra and Mi\'raj', 'Pledges of Aqaba'], C.cream, C.mustard],
    ['Hijra', '622', ['Plot of the Quraysh', 'Ali in his bed', 'Cave of Thawr with Abu Bakr', 'Quba', 'Arrival in Madinah'], C.tealLight, C.tealDark],
    ['Madinah', '622-632', ['Mosque; brotherhood', 'Constitution of Madinah', 'Badr, Uhud, the Trench', 'Hudaybiyya', 'Letters to rulers', 'Conquest of Makkah', 'Farewell Pilgrimage; death'], C.cream, C.mustard],
  ];
  b += `<line x1="30" y1="148" x2="870" y2="148" stroke="${C.ink}" stroke-width="3"/>`;
  B.forEach(([h, yrs, ls, f, e], i) => {
    const x = 30 + i * 213;
    b += `<circle cx="${x + 100}" cy="148" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(x + 100, 128, yrs, { size: 18, weight: 700, anchor: 'middle' });
    b += panel(x, 172, 201, 340, f, e) + para(x + 16, 204, h, 170, { size: 18, weight: 700, lh: 22 }).s;
    b += bullets(x + 14, 258, ls, 174, { size: 15, lh: 19, gap: 9 }).s;
  });
  b += panel(30, 532, 840, 64) + T(450, 572, 'A 10-mark answer: about five developed points, in order, with names and places.', { size: 17, weight: 600, anchor: 'middle' });
  add('01-four-blocks',
    SV(624, 'The life in four blocks', b),
    'The life divided into four blocks for revision: before prophethood (570-610), Makkah (610-622), the Hijra (622) and Madinah (622-632), each with its core events, from the Year of the Elephant to the Farewell Pilgrimage.',
    'Revise the life as four blocks, each with events you can describe in detail.',
    '## How should you divide the life for revision?');
}

// 02 Why the Quraysh opposed him, and how
{
  let b = '';
  b += T(450, 124, 'Why the Quraysh opposed the message', { size: 19, weight: 700, anchor: 'middle' });
  [['Economic', 'it attacked the idols that brought pilgrims and trade'], ['Social', 'all people equal before God'], ['Political', 'a threat to the clan leaders\' authority']].forEach(([h, d], i) => {
    b += card(30 + i * 286, 142, 268, 108, h, [d], { fill: C.cream, edge: C.mustard, size: 16, tsize: 19 });
  });
  b += T(450, 290, 'How the response grew', { size: 19, weight: 700, anchor: 'middle' });
  const S = [
    ['Mockery', 'called a poet, a sorcerer, a madman'],
    ['Offers', 'wealth, leadership, kingship, through Utba ibn Rabi\'a'],
    ['Pressure on Abu Talib', 'to withdraw his protection'],
    ['Persecution of the weak', 'Bilal tortured; Sumayya the first martyr'],
    ['Abyssinia (615)', 'Ja\'far\'s speech wins the Negus\'s protection'],
    ['Boycott', 'clan of Hashim confined for about three years'],
    ['Year of Sorrow (619)', 'Khadija and Abu Talib die'],
    ['Ta\'if', 'stoned out; he prayed for them'],
  ];
  S.forEach(([h, d], i) => {
    const y = 308 + i * 64, w = 630 + i * 30, x = 30;
    b += `<rect x="${x}" y="${y}" width="${w}" height="54" rx="10" fill="${i < 3 ? C.panel : i < 6 ? C.cream : '#fbf1ea'}" stroke="${i < 3 ? C.panelEdge : i < 6 ? C.mustard : C.rust}" stroke-width="2"/>` +
      T(x + 18, y + 34, h, { size: 17, weight: 700 }) + T(x + 248, y + 34, d, { size: 15, fill: C.muted });
  });
  const y = 308 + 8 * 64 + 10;
  b += panel(30, y, 840, 96, C.tealLight, C.tealDark) + T(54, y + 38, 'Then hope returned', { size: 19, weight: 700 }) +
    T(54, y + 70, 'Isra and Mi\'raj: five daily prayers made obligatory. Pledges of Aqaba: people of Yathrib promise protection.', { size: 15, fill: C.ink });
  add('02-makkan-opposition',
    SV(y + 124, 'Opposition in Makkah', b),
    'The Quraysh opposed the message for economic, social and political reasons. Their response grew from mockery and offers, to pressure on Abu Talib, persecution of Bilal and Sumayya, the migration to Abyssinia, the boycott, the Year of Sorrow and rejection at Ta\'if. Hope returned with the Isra and Mi\'raj and the pledges of Aqaba.',
    'Opposition grew step by step, and so did the hardship, until Aqaba opened a way out.',
    '## What happened in Makka, and how did his opponents respond?');
}

// 03 Building the community in Madinah
{
  let b = '';
  const F = [
    ['The mosque', 'a place of worship, teaching, meeting and decision-making'],
    ['Brotherhood (mu\'akhat)', 'each Emigrant paired with a Helper, who shared his home and wealth'],
    ['Constitution of Madinah', 'rights and duties of Muslims, Jewish tribes and others as one community; disputes referred to the Prophet (pbuh)'],
    ['Change of qibla', 'from Jerusalem to the Ka\'ba in 2 AH (624)'],
  ];
  F.forEach(([h, d], i) => { b += card(30 + (i % 2) * 430, 150 + Math.floor(i / 2) * 180, 410, 166, h, [d], { kicker: `FOUNDATION ${i + 1}`, fill: i === 2 ? C.tealLight : C.panel, edge: i === 2 ? C.tealDark : C.panelEdge, size: 16, tsize: 20 }); });
  b += `<rect x="30" y="104" width="840" height="34" rx="8" fill="${C.cream}"/>` + T(450, 127, 'After the Hijra in 622', { size: 17, weight: 700, anchor: 'middle' });
  add('03-building-the-community',
    SV(540, 'Building the community in Madinah', b),
    'Four foundations after the Hijra: the mosque as a centre for worship, teaching and decisions; brotherhood pairing Emigrants with Helpers; the Constitution of Madinah setting rights and duties for Muslims, Jewish tribes and others; and the change of qibla to the Ka\'ba in 2 AH.',
    'Worship, brotherhood and a shared constitution made one community.',
    '## How did he lead the community in Madina?');
}

// 04 Madinan timeline
{
  let b = '';
  const E = [['2 AH', '624', 'Badr'], ['3 AH', '625', 'Uhud'], ['5 AH', '627', 'The Trench'], ['6 AH', '628', 'Treaty of Hudaybiyya'], ['7 AH', '', 'Khaybar'], ['8 AH', '630', 'Conquest of Makkah'], ['9 AH', '', 'Expedition to Tabuk'], ['10 AH', '', 'Farewell Pilgrimage; sermon at Arafat'], ['11 AH', '632', 'Death in Madinah, in A\'isha\'s room']];
  const lx = 190;
  E.forEach(([ah, ce, ev], i) => {
    const y = 120 + i * 66;
    const hi = i === 3 || i === 5;
    b += T(lx - 26, y + 30, ah, { size: 19, weight: 700, anchor: 'end' }) + (ce ? T(lx - 26, y + 50, ce, { size: 15, fill: C.muted, anchor: 'end' }) : '');
    b += `<circle cx="${lx}" cy="${y + 28}" r="9" fill="${hi ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="3"/>`;
    b += `<rect x="${lx + 24}" y="${y + 4}" width="${870 - lx - 24}" height="50" rx="10" fill="${hi ? C.cream : C.panel}" stroke="${hi ? C.mustard : C.panelEdge}" stroke-width="2"/>` + T(lx + 44, y + 36, ev, { size: 18, weight: hi ? 700 : 400 });
  });
  b = `<line x1="${lx}" y1="148" x2="${lx}" y2="${120 + 8 * 66 + 28}" stroke="${C.ink}" stroke-width="3"/>` + b;
  const y = 120 + 9 * 66 + 10;
  b += T(450, y + 14, 'Learn the main events in both AH and CE.', { size: 17, fill: C.muted, anchor: 'middle' });
  add('04-madinan-timeline',
    SV(y + 42, 'Madinah, 622 to 632', b),
    'A timeline of the Madinan period: Badr (2 AH, 624), Uhud (3 AH, 625), the Trench (5 AH, 627), the Treaty of Hudaybiyya (6 AH, 628), Khaybar (7 AH), the conquest of Makkah (8 AH, 630), Tabuk (9 AH), the Farewell Pilgrimage (10 AH) and his death in Madinah (11 AH, 632).',
    'Ten years from Badr to the Farewell Pilgrimage.',
    '## How did he lead the community in Madina?');
}

// 05 Character shown through actions
{
  let b = '', y = 110;
  const K = [
    ['Trustworthiness', 'Called al-Amin; on the night of the Hijra he left Ali to return goods his enemies had left with him.'],
    ['Patience and forgiveness', 'Prayed for his attackers at Ta\'if; forgave the Quraysh at the conquest of Makkah.'],
    ['Humility', 'Mended his own clothes, helped at home, dug in the trench with the Companions.'],
    ['Consultation', 'Followed Salman al-Farsi\'s advice on the trench; consulted the Companions before Uhud.'],
    ['Justice', 'Said the same punishment would apply even to his own daughter Fatima.'],
  ];
  b += T(220, y + 6, 'Quality', { size: 16, weight: 700, fill: C.muted, anchor: 'middle' }) + T(640, y + 6, 'The action that shows it', { size: 16, weight: 700, fill: C.muted, anchor: 'middle' });
  y += 22;
  K.forEach(([q, a], i) => {
    const H = 92;
    b += `<rect x="30" y="${y}" width="340" height="${H}" rx="12" fill="${i % 2 ? C.cream : C.tealLight}" stroke="${i % 2 ? C.mustard : C.tealDark}" stroke-width="2.5"/>` + T(200, y + H / 2 + 7, q, { size: 19, weight: 700, anchor: 'middle' });
    b += harrow(374, 402, y + H / 2, { w: 3 });
    b += panel(410, y, 460, H) + para(430, y + 36, a, 420, { size: 16, lh: 21 }).s;
    y += H + 12;
  });
  b += T(450, y + 22, 'Examiners reward character shown through specific actions.', { size: 17, fill: C.muted, anchor: 'middle' });
  add('05-character-in-action',
    SV(y + 50, 'Character shown through actions', b),
    'Five qualities each tied to an action: trustworthiness (returning his enemies\' goods on the night of the Hijra), patience and forgiveness (Ta\'if and the conquest of Makkah), humility (mending clothes, digging the trench), consultation (Salman\'s trench advice, Uhud) and justice (the same law even for Fatima).',
    'Name the quality, then prove it with a specific action.',
    '## What do his actions show about his character?');
}

// 06 Example for individuals
{
  let b = '';
  const Cc = [
    ['Personal conduct', ['honesty in trade', 'keeping promises', 'simple living', 'prayer and fasting beyond what is obligatory'], C.panel, C.panelEdge],
    ['With women', ['trust in Khadija as wife and adviser', 'followed Umm Salama\'s advice at Hudaybiyya', 'Farewell Sermon: rights of men and women over each other', 'the best are those best to their families'], C.cream, C.mustard],
    ['With non-Muslims', ['Constitution of Madinah protected Jewish tribes', 'stood for a Jewish funeral: "Was it not a soul?"', 'accepted the protection of the Christian Negus', 'honoured treaties with the Quraysh'], C.tealLight, C.tealDark],
  ];
  Cc.forEach(([h, ls, f, e], i) => {
    const x = 30 + i * 286;
    b += panel(x, 110, 268, 340, f, e) + T(x + 20, 148, h, { size: 20, weight: 700 });
    b += bullets(x + 18, 192, ls, 232, { size: 16, lh: 21, gap: 14 }).s;
  });
  add('06-example-for-individuals',
    SV(478, 'His example for individuals', b),
    'Three areas of example: personal conduct (honesty in trade, keeping promises, simple living, extra worship); relations with women (trust in Khadija, Umm Salama\'s advice, mutual rights in the Farewell Sermon); and relations with non-Muslims (the Constitution of Madinah, standing for a Jewish funeral, the Negus\'s protection, honouring treaties).',
    'Each lesson for individuals rests on something he did.',
    '## What example does he give individuals?');
}

// 07 Example for communities and states
{
  let b = '', y = 110;
  const S = [
    ['Treaties', 'At Hudaybiyya he accepted hard terms to gain peace, and kept them, returning Abu Jandal.'],
    ['Diplomacy', 'Letters to rulers, including Heraclius, the Persian emperor, the Negus and the ruler of Egypt.'],
    ['Rules of war', 'He forbade killing women, children and non-combatants.'],
    ['Mercy in victory', 'The general amnesty at Makkah: a strong state should not take revenge.'],
    ['Minorities', 'The Constitution of Madinah: citizens of different faiths under one set of laws.'],
  ];
  S.forEach(([h, d], i) => {
    b += panel(30, y, 840, 84, i === 3 ? C.cream : C.panel, i === 3 ? C.mustard : C.panelEdge) + badge(70, y + 42, 20, String(i + 1), C.cream) + T(108, y + 36, h, { size: 19, weight: 700 }) + T(108, y + 64, d, { size: 16, fill: C.muted });
    y += 96;
  });
  b += panel(30, y + 4, 840, 156, C.tealLight, C.tealDark) + T(54, y + 40, 'Worked part (b): lessons from the conquest of Makkah', { size: 18, weight: 700 });
  b += bullets(54, y + 76, ['Forgiveness of former persecutors: aim for reconciliation, not revenge.', 'Protection for those in their homes or in Abu Sufyan\'s house: protect civilians and give former opponents security.'], 790, { size: 16, gap: 10 }).s;
  add('07-example-for-states',
    SV(y + 188, 'His example for communities and states', b),
    'Five lessons for states: keeping treaties, as at Hudaybiyya; diplomacy through letters to rulers; rules of war protecting women, children and non-combatants; mercy in victory at Makkah; and the Constitution of Madinah as a model for minorities. The worked answer draws reconciliation and civilian protection from the conquest of Makkah.',
    'For a question on states, draw lessons for states, not individuals.',
    '## What example does he give communities and states?');
}

// 08 Seal of the Prophets
{
  let b = '';
  b += panel(150, 110, 600, 96, C.mustard, C.olive) + T(450, 150, '"the Messenger of God and', { size: 20, weight: 700, anchor: 'middle' }) + T(450, 180, 'the Seal of the Prophets" (Sura 33.40)', { size: 20, weight: 700, anchor: 'middle' });
  const P = [
    ['Final', 'No prophet will come after him: his message is final and complete.', ''],
    ['Universal', 'Earlier prophets were sent to particular peoples; he was sent to all humanity.', 'Sura 34.28'],
    ['The model', 'His Sunnah, preserved in the Hadiths, is the model Muslims follow.', 'Sura 33.21'],
    ['Part of faith', 'Belief in the finality of his prophethood is part of faith; claims to new prophethood are rejected.', ''],
  ];
  P.forEach(([h, d, r], i) => {
    const x = 30 + (i % 2) * 430, y = 236 + Math.floor(i / 2) * 156;
    b += card(x, y, 410, 140, h, [d], { fill: i % 3 === 0 ? C.tealLight : C.cream, edge: i % 3 === 0 ? C.tealDark : C.mustard, size: 16, tsize: 20 }) + (r ? T(x + 390, y + 34, r, { size: 15, fill: C.olive, anchor: 'end', weight: 600 }) : '');
  });
  b += T(450, 572, 'A named syllabus point: do not leave it out.', { size: 17, fill: C.muted, anchor: 'middle' });
  add('08-seal-of-the-prophets',
    SV(600, 'The Seal of the Prophets', b),
    'Sura 33.40 calls him the Seal of the Prophets. Four beliefs follow: his message is final, he was sent to all humanity (Sura 34.28), his Sunnah is the model to follow (Sura 33.21), and belief in the finality of prophethood is part of faith.',
    'Final, universal, the model to follow: what "Seal of the Prophets" means.',
    '## Why is he the Seal of the Prophets?');
}
