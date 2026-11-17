import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-islamiyat-0493-major-themes-quran';
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


const chipE = (x, y, w, label, f, e, size = 16) => `<rect x="${x}" y="${y}" width="${w}" height="38" rx="19" fill="${f}" stroke="${e}" stroke-width="2"/>` + T(x + w / 2, y + 25, label, { size, weight: 600, anchor: 'middle' });

// 01 Three groups of passages
{
  let b = '';
  const G = [
    ['God in Himself', 'what God is like in His own nature: one, eternal, all-knowing, all-powerful, beyond comparison, merciful', ['2.255', '6.101-103', '41.37', '42.4-5', '112'], C.cream, C.mustard],
    ['God\'s relationship with the created world', 'what God does for and with creation: creating, sustaining, teaching, guiding, protecting, judging', ['1', '2.21-22', '96.1-5', '99', '114'], C.tealLight, C.tealDark],
    ['God\'s Messengers', 'how God chose, taught, supported and protected His prophets, from Adam to the Prophet Muhammad (pbuh)', ['2.30-37', '6.75-79', '5.110', '93', '108'], C.panel, C.panelEdge],
  ];
  let y = 110;
  G.forEach(([h, d, ps, f, e], i) => {
    b += panel(30, y, 840, 180, f, e) + badge(70, y + 40, 20, String(i + 1), C.cream) + T(106, y + 47, h, { size: 21, weight: 700 });
    b += para(54, y + 82, d, 790, { size: 16, fill: C.muted, lh: 21 }).s;
    ps.forEach((p, k) => { b += chipE(54 + k * 160, y + 126, 148, 'Sura ' + p, C.panel, e === C.panelEdge ? C.ink : e); });
    y += 194;
  });
  b += T(450, y + 18, 'Fifteen passages: check the syllabus appendix for your exam year.', { size: 17, fill: C.muted, anchor: 'middle' });
  add('01-three-groups',
    SV(y + 46, 'Fifteen passages in three groups', b),
    'The three groups of set passages: God in Himself (Sura 2.255, 6.101-103, 41.37, 42.4-5, 112), God\'s relationship with the created world (Sura 1, 2.21-22, 96.1-5, 99, 114) and God\'s Messengers (Sura 2.30-37, 6.75-79, 5.110, 93, 108), each with the direction its themes take.',
    'The group heading tells you which direction the theme will take.',
    '## What does "theme" mean in Question 1?');
}

// 02 Question 1 at a glance
{
  let b = '';
  b += T(450, 124, 'Three passages printed, in Arabic and English', { size: 19, weight: 700, anchor: 'middle' });
  ['Passage A', 'Passage B', 'Passage C'].forEach((n, i) => {
    const ch = i < 2;
    b += `<rect x="${90 + i * 250}" y="144" width="220" height="70" rx="12" fill="${ch ? C.tealLight : C.panel}" stroke="${ch ? C.tealDark : C.panelEdge}" stroke-width="2.5"/>` + T(200 + i * 250, 186, n, { size: 19, weight: 700, anchor: 'middle', fill: ch ? C.ink : C.muted });
    if (ch) b += tick(200 + i * 250, 246, true);
  });
  b += T(450, 290, 'Choose two: the most precise themes, not just the most familiar', { size: 17, fill: C.muted, anchor: 'middle' });
  b += card(30, 316, 410, 170, '(a) The main theme', ['Briefly explain the theme or themes of each passage.', '4 marks, half for each passage'], { fill: C.cream, edge: C.mustard, size: 16, tsize: 20 });
  b += card(460, 316, 410, 170, '(b) Importance today', ['Briefly explain the importance of these themes in a Muslim\'s life today.', '4 marks, half for each passage'], { fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 20 });
  b += panel(30, 506, 840, 70) + T(450, 548, 'Give both passages the same care: each carries half the marks of each part.', { size: 17, weight: 600, anchor: 'middle' });
  add('02-question-1',
    SV(604, 'Question 1 at a glance', b),
    'Three set passages are printed in Arabic and English and you choose two. Part (a) asks for the main theme of each and part (b) for the importance of those themes today, each worth 4 marks, half for each passage.',
    'Two passages, two parts: theme first, then importance today.',
    '## Syllabus coverage');
}

// 03 Description versus theme
{
  let b = '';
  b += panel(30, 110, 840, 150, '#fbf1ea', C.rust) + T(54, 146, 'Description', { size: 20, weight: 700, fill: C.rust }) + tick(846, 146, false) +
    para(54, 184, '"Sura 41.37 mentions the night, the day, the sun and the moon."', 790, { size: 18, italic: true, lh: 24 }).s + T(54, 236, 'repeats the words: no teaching stated', { size: 16, fill: C.muted });
  b += varrow(450, 262, 296, { w: 4 });
  b += panel(30, 300, 840, 176, C.tealLight, C.tealDark) + T(54, 336, 'Theme', { size: 20, weight: 700, fill: C.tealDark }) + tick(846, 336, true) +
    para(54, 374, '"Sura 41.37 teaches that the wonders of nature are signs pointing to their Creator, so worship belongs to God alone and never to what He has made."', 790, { size: 18, italic: true, lh: 24 }).s;
  b += T(450, 516, 'A theme is the teaching about God, His creation or His Messengers.', { size: 18, weight: 700, anchor: 'middle' });
  add('03-description-vs-theme',
    SV(546, 'Description or theme?', b),
    'Two statements about Sura 41.37. A description lists what it mentions: the night, the day, the sun and the moon. A theme states its teaching: nature\'s wonders are signs of the Creator, so worship belongs to God alone.',
    'State the teaching, not a summary of the words.',
    '## What does "theme" mean in Question 1?');
}

// 04 Key Arabic words (transliterated)
{
  const tb = table(30, 110, [{ w: 140, head: 'Passage', bold: true }, { w: 250, head: 'Key word', bold: true, fill: C.tealDark }, { w: 450, head: 'What it adds' }], [
    ['Sura 2.255', 'al-Hayy al-Qayyum', 'the Living, the Self-Subsisting: God depends on nothing'],
    ['Sura 112', 'Ahad, al-Samad', 'One and unique; the Eternal on whom all creation depends'],
    ['Sura 1', 'Rabb al-\'alamin', 'Lord of the worlds: creates, cares for and sustains all'],
    ['Sura 1', 'al-sirat al-mustaqim', 'the straight path asked for in every prayer'],
    ['Sura 96.1-5', 'Iqra\', al-qalam', '"Read" and "the pen": revelation linked to knowledge'],
    ['Sura 99', 'mithqal dharra', 'an atom\'s weight: no deed too small for the Day of Judgement'],
    ['Sura 114', 'al-waswas al-khannas', 'the whisperer who withdraws: hidden temptation'],
    ['Sura 2.30', 'khalifa', 'vicegerent: humans trusted with responsibility on earth'],
    ['Sura 108', 'al-Kawthar, al-abtar', 'abundance given to the Prophet (pbuh); his enemy is "cut off"'],
  ], { size: 16, minRow: 56 });
  let b = tb.s;
  const y = 110 + tb.h + 20;
  b += panel(30, y, 840, 70, C.cream, C.mustard) + T(450, y + 42, 'One accurate key word per passage, explained, shows knowledge of the original.', { size: 17, weight: 600, anchor: 'middle' });
  add('04-key-words',
    SV(y + 98, 'Key words from the original', b),
    'Nine transliterated key words and what each adds: al-Hayy al-Qayyum (2.255), Ahad and al-Samad (112), Rabb al-\'alamin and al-sirat al-mustaqim (1), Iqra\' and al-qalam (96.1-5), mithqal dharra (99), al-waswas al-khannas (114), khalifa (2.30) and al-Kawthar and al-abtar (108).',
    'One explained key word per passage is easy credit.',
    '## Which Arabic words should you know?');
}

// 05 Threads across the passages
{
  let b = '', y = 110;
  const Th = [
    ['Tawhid', 'runs through all three groups', ['112', '6.101-103', '41.37', '2.21-22', '6.75-79', '5.110'], C.cream, C.mustard],
    ['Mercy and forgiveness', '', ['1', '42.5', '2.37', '93'], C.tealLight, C.tealDark],
    ['Knowledge from God', '', ['2.255', '2.31-32', '96.4-5'], C.tealLight, C.tealDark],
    ['Accountability', '', ['1', '99', '2.255'], C.panel, C.panelEdge],
  ];
  Th.forEach(([h, s, ps, f, e]) => {
    const H = ps.length > 3 ? 112 : 70;
    b += panel(30, y, 840, H, f, e) + T(54, y + (H > 70 ? 46 : 42), h, { size: 20, weight: 700 }) + (s ? T(54, y + 72, s, { size: 15, fill: C.muted }) : '');
    ps.forEach((p, k) => { b += chipE(330 + (k % 3) * 180, y + 14 + Math.floor(k / 3) * 46, 168, 'Sura ' + p, C.panel, e === C.panelEdge ? C.ink : e, 16); });
    y += H + 12;
  });
  b += T(450, y + 22, 'Linking passages shows they belong to one message, and supplies material for part (b).', { size: 16, fill: C.muted, anchor: 'middle' });
  add('05-threads',
    SV(y + 50, 'Four threads across the passages', b),
    'Four ideas that link passages across the groups: tawhid (Sura 112, 6.101-103, 41.37, 2.21-22, 6.75-79, 5.110), mercy and forgiveness (Sura 1, 42.5, 2.37, 93), knowledge given by God (Sura 2.255, 2.31-32, 96.4-5) and accountability (Sura 1, 99, 2.255).',
    'Shared ideas tie the fifteen passages into one message.',
    '## How do the passages connect with one another?');
}

// 06 From theme to importance today
{
  let b = '';
  [['Theme', C.cream, C.mustard], ['Specific action or attitude', C.tealLight, C.tealDark], ['Reason the passage gives', C.panel, C.ink]].forEach(([h, f, e], i) => {
    b += `<rect x="${30 + i * 290}" y="110" width="260" height="60" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(160 + i * 290, 147, h, { size: 17, weight: 700, anchor: 'middle' });
    if (i < 2) b += harrow(292 + i * 290, 318 + i * 290, 140, { w: 3 });
  });
  const E = [
    ['Sura 2.255', 'Recite it before sleeping and after prayers', 'a Protector who "feels no fatigue in guarding"'],
    ['Sura 6.103', 'No pictures or statues of God', '"no vision can grasp Him"'],
    ['Sura 2.21-22', 'Thank God at meals; care for the earth', 'He sends rain and food; the earth a "couch"'],
    ['Sura 96.1-5', 'Seek knowledge in God\'s name', 'He "taught by the pen"'],
    ['Sura 114', 'Seek refuge in God when tempted', 'protection from the whisperer'],
    ['Sura 6.75-79', 'Use reason and reflection', 'as Ibrahim did'],
    ['Sura 93.9-10', 'Care for orphans; do not turn away a beggar', 'God\'s care for the Prophet (pbuh)'],
  ];
  let y = 190;
  E.forEach(([s, a, r], i) => {
    b += `<rect x="30" y="${y}" width="840" height="62" rx="10" fill="${i % 2 ? C.panel : C.bg}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + T(48, y + 38, s, { size: 16, weight: 700 }) + T(180, y + 38, a, { size: 16 }) + T(852, y + 38, r, { size: 15, fill: C.muted, anchor: 'end', italic: true });
    y += 70;
  });
  b += panel(30, y + 8, 840, 66, '#fbf1ea', C.rust) + T(450, y + 48, 'Weak: "Muslims should believe in God" for every passage.', { size: 17, weight: 700, fill: C.rust, anchor: 'middle' });
  add('06-importance-today',
    SV(y + 102, 'From theme to importance today', b),
    'A strong part (b) answer links the theme to a specific action and the reason the passage gives. Examples: reciting Sura 2.255 for protection, avoiding images of God (6.103), gratitude and care for the earth (2.21-22), seeking knowledge (96.1-5), seeking refuge from temptation (114), reflection like Ibrahim (6.75-79) and caring for orphans (93.9-10).',
    'Theme, action, reason: make each application specific to its passage.',
    '## How do you turn a theme into importance today?');
}

// 07 Worked example plan
{
  let b = '';
  const W = [
    ['Sura 2.21-22', 'God\'s relationship with the created world', ['Worship the Guardian-Lord who created you and those before you', 'He made the earth a resting place, the sky a canopy, and sent rain for fruits', 'So do not "set up rivals" to Him'], ['Everything is a gift: thank God and avoid waste', 'Do not treat wealth, status or people as provider']],
    ['Sura 6.75-79', 'God\'s Messengers', ['God showed Ibrahim the heavens and the earth for certainty', 'Star, moon and sun each set and were rejected', 'He turned to the Creator and refused to give God partners'], ['Faith reached by reflecting on the universe: nature\'s laws as signs', 'Explain belief calmly to others, as Ibrahim did']],
  ];
  W.forEach(([s, g, a, im], i) => {
    const x = 30 + i * 430;
    b += panel(x, 110, 410, 520) + T(x + 20, 148, s, { size: 22, weight: 700 }) + chipE(x + 20, 162, 370, g, i ? C.panel : C.tealLight, i ? C.ink : C.tealDark, 15);
    b += `<rect x="${x + 14}" y="218" width="382" height="206" rx="10" fill="${C.cream}"/>` + T(x + 30, 248, '(a) Theme', { size: 18, weight: 700, fill: C.olive });
    b += bullets2(x + 30, 282, a, 350);
    b += `<rect x="${x + 14}" y="436" width="382" height="180" rx="10" fill="${C.tealLight}"/>` + T(x + 30, 466, '(b) Importance today', { size: 18, weight: 700, fill: C.tealDark });
    b += bullets2(x + 30, 500, im, 350);
  });
  b += T(450, 668, '(a): name the group, give the teaching, point to the wording. (b): say what a Muslim actually does.', { size: 16, fill: C.muted, anchor: 'middle' });
  add('07-worked-example',
    SV(696, 'Worked example: two passages', b),
    'The worked answer laid out: Sura 2.21-22 (created world) teaches worship of the Lord who provides, so no rivals, and leads to gratitude and avoiding waste; Sura 6.75-79 (Messengers) shows Ibrahim rejecting star, moon and sun for the Creator, and leads to reflection on nature and calm explanation of belief.',
    'Group, teaching and wording for (a); a specific action for (b).',
    '## Worked example');
}
function bullets2(x, y, ls, w) { let s = '', cy = y; ls.forEach((l) => { const p = para(x + 16, cy, l, w - 16, { size: 16, lh: 21 }); s += `<circle cx="${x + 4}" cy="${cy - 5}" r="4" fill="${C.ink}"/>` + p.s; cy += p.h + 12; }); return s; }
