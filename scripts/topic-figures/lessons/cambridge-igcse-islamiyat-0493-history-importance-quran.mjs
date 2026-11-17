import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-islamiyat-0493-history-importance-quran';
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


const flowBox = (x, y, w, h, title, sub, f = C.panel, e = C.panelEdge) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(x + 18, y + 32, title, { size: 18, weight: 700 }) + (sub ? para(x + 18, y + 58, sub, w - 36, { size: 15, fill: C.muted, lh: 20 }).s : '');

// 01 Question 2 and its five strands
{
  let b = '';
  b += `<rect x="30" y="110" width="560" height="96" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(310, 148, 'Part (a): 10 marks', { size: 21, weight: 700, anchor: 'middle' }) + T(310, 178, 'knowledge: describe, write about', { size: 16, fill: C.muted, anchor: 'middle' });
  b += `<rect x="600" y="110" width="270" height="96" rx="12" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2.5"/>` + T(735, 148, 'Part (b): 4 marks', { size: 21, weight: 700, anchor: 'middle' }) + T(735, 178, 'understanding: why, how important', { size: 15, fill: C.muted, anchor: 'middle' });
  b += T(450, 246, 'Question 2 is compulsory: every strand must be revised', { size: 19, weight: 700, anchor: 'middle' });
  const S = [['Revelation', '610 to 632'], ['Compilation', 'under the Rightly Guided Caliphs'], ['Major themes', 'set passages and similar passages'], ['Legal thinking', 'with Hadiths, ijma\' and qiyas'], ['Significance', 'the basis of all thought and action']];
  S.forEach(([h, d], i) => {
    const x = 30 + i * 170;
    b += `<rect x="${x}" y="266" width="160" height="172" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + badge(x + 80, 304, 20, String(i + 1), C.cream) + T(x + 80, 352, h, { size: 17, weight: 700, anchor: 'middle' }) + para(x + 80, 378, d, 136, { size: 15, fill: C.muted, anchor: 'middle', lh: 19 }).s;
  });
  add('01-question-2-strands',
    SV(466, 'Question 2: compulsory, five strands', b),
    'Question 2 is compulsory and worth 14 marks: a 10-mark knowledge part (a) and a 4-mark understanding part (b). It covers five strands: revelation from 610 to 632, compilation, major themes, use in legal thinking, and significance as the basis of thought and action.',
    'A compulsory question: no strand can be left unrevised.',
    '## Syllabus coverage');
}

// 02 How revelation began
{
  let b = '', y = 110;
  const ev = [
    ['610, Ramadan', 'Retreat in the cave of Hira', 'on Jabal al-Nur outside Makkah; the Prophet (pbuh) was about forty', C.panel, C.panelEdge],
    ['', 'Jibril: "Read!" (Iqra\')', 'pressed him three times, then recited the first five verses of Sura 96; the Night of Power (Sura 97.1)', C.cream, C.mustard],
    ['', 'Khadija reassures him', 'God would never disgrace him; she takes him to her cousin Waraqa ibn Nawfal', C.panel, C.panelEdge],
    ['', 'Waraqa recognises the angel', 'as the one who had come to Musa', C.panel, C.panelEdge],
    ['', 'A pause in revelation (fatra)', '', C.bg, C.panelEdge],
    ['', 'Sura 74: "arise and warn"', 'revelation resumes: the start of his mission to preach', C.tealLight, C.tealDark],
  ];
  const lx = 150;
    ev.forEach(([d, h, s, f, e], i) => {
    const H = s ? 52 + wrap(s, 658, 15).length * 20 + 8 : 56;
    b += `<circle cx="${lx}" cy="${y + 28}" r="${d ? 10 : 7}" fill="${d ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="3"/>` + (d ? T(lx - 20, y + 34, d, { size: 16, weight: 700, anchor: 'end' }) : '');
    b += flowBox(176, y, 694, H, h, s, f, e);
    y += H + 12;
  });
  b = `<line x1="${lx}" y1="138" x2="${lx}" y2="${y - 60}" stroke="${C.ink}" stroke-width="3"/>` + b;
  add('02-how-revelation-began',
    SV(y + 18, 'How revelation began', b),
    'A sequence from 610: retreat in the cave of Hira; Jibril commands "Read!" and recites the first five verses of Sura 96 on the Night of Power; Khadija reassures the Prophet (pbuh) and takes him to Waraqa ibn Nawfal, who recognises the angel; a pause in revelation; then Sura 74 commands him to "arise and warn".',
    'From Hira to "arise and warn": the start of revelation and of the mission.',
    '## How did revelation begin?');
}

// 03 Modes of revelation
{
  let b = '';
  const M = [
    ['Like the ringing of a bell', 'The hardest on him: Companions saw him sweat even on cold days.', C.cream, C.mustard],
    ['Jibril in the form of a man', 'He spoke to him so that he understood.', C.panel, C.panelEdge],
    ['Jibril in his true form', 'Seen on rare occasions; Sura 53 refers to this.', C.panel, C.panelEdge],
    ['True dreams', 'Before and alongside the spoken revelation.', C.panel, C.panelEdge],
  ];
  M.forEach(([h, d, f, e], i) => { b += card(30 + (i % 2) * 430, 110 + Math.floor(i / 2) * 150, 410, 136, h, [d], { kicker: `MODE ${i + 1}`, fill: f, edge: e, tsize: 20, size: 16 }); });
  b += panel(30, 418, 410, 110, C.tealLight, C.tealDark) + T(54, 456, 'Wahy', { size: 20, weight: 700 }) + T(54, 486, 'revelation from God: the Qur\'an', { size: 16, fill: C.muted });
  b += T(450, 480, '≠', { size: 34, weight: 700, anchor: 'middle' });
  b += panel(460, 418, 410, 110) + T(484, 456, 'His own words', { size: 20, weight: 700 }) + T(484, 486, 'recorded separately as Hadiths', { size: 16, fill: C.muted });
  add('03-modes-of-revelation',
    SV(556, 'Ways revelation came', b),
    'Four modes of revelation: like the ringing of a bell, the hardest on him; Jibril in the form of a man; Jibril in his true form, seen rarely (Sura 53); and true dreams. All are wahy, distinct from the Prophet\'s (pbuh) own words, which are recorded as Hadiths.',
    'Name more than one mode; keep revelation distinct from Hadith.',
    '## In what ways did revelation come?');
}

// 04 Gradual revelation
{
  let b = '';
  b += T(450, 124, 'About 23 years', { size: 19, weight: 700, anchor: 'middle' });
  b += `<rect x="30" y="140" width="${840 * 13 / 23 - 6}" height="58" rx="10" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2.5"/>` + T(30 + (840 * 13 / 23) / 2, 176, 'Makkah: about 13 years', { size: 18, weight: 700, anchor: 'middle' });
  b += `<rect x="${30 + 840 * 13 / 23}" y="140" width="${840 * 10 / 23}" height="58" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(30 + 840 * 13 / 23 + (840 * 10 / 23) / 2, 176, 'Madinah: about 10 years', { size: 18, weight: 700, anchor: 'middle' });
  b += card(30, 214, 470, 120, 'Mostly short; about belief', ['tawhid, prophethood, judgement'], { fill: C.panel, size: 16, tsize: 19 });
  b += card(520, 214, 350, 120, 'Often longer; laws', ['prayer, fasting, zakat, family, trade, relations with others'], { fill: C.panel, size: 16, tsize: 19 });
  b += T(450, 376, 'Why in stages?', { size: 19, weight: 700, anchor: 'middle' });
  b += card(30, 394, 268, 132, '"to strengthen your heart"', ['Sura 25.32'], { fill: C.cream, edge: C.mustard, size: 16, tsize: 17 });
  b += card(316, 394, 268, 132, '"to recite it to people at intervals"', ['Sura 17.106'], { fill: C.cream, edge: C.mustard, size: 16, tsize: 17 });
  b += card(602, 394, 268, 132, 'Answers to events', ['Many verses came in answer to events or questions.'], { size: 16, tsize: 17 });
  b += panel(30, 546, 840, 104, C.tealLight, C.tealDark) + T(54, 582, 'Rulings introduced in steps', { size: 19, weight: 700 });
  b += `<rect x="54" y="598" width="150" height="36" rx="8" fill="${C.panel}"/>` + T(129, 622, 'step', { size: 16, anchor: 'middle' }) + harrow(208, 238, 616, { w: 3 }) +
    `<rect x="244" y="598" width="150" height="36" rx="8" fill="${C.panel}"/>` + T(319, 622, 'step', { size: 16, anchor: 'middle' }) + harrow(398, 428, 616, { w: 3 }) +
    `<rect x="434" y="598" width="412" height="36" rx="8" fill="${C.mustard}"/>` + T(640, 622, 'intoxicants: complete ban, Sura 5.90', { size: 16, weight: 700, anchor: 'middle' });
  add('04-gradual-revelation',
    SV(678, 'Why the Qur\'an came gradually', b),
    'Revelation lasted about 23 years: some 13 in Makkah, with mostly short passages on belief, and 10 in Madinah, with longer passages including laws. Reasons: "to strengthen your heart" (Sura 25.32), recitation "at intervals" (Sura 17.106), answers to events, and rulings in steps, ending with the complete ban on intoxicants in Sura 5.90.',
    'Belief first in Makkah, law in Madinah, and rulings introduced step by step.',
    '## Why was the Qur\'an revealed gradually?');
}

// 05 Preservation in his lifetime
{
  let b = '';
  const P = [
    ['Memorisation', 'Companions learned each revelation and recited it in prayer; many became huffaz.', C.tealLight, C.tealDark],
    ['Writing', 'Scribes, best known Zayd ibn Thabit, wrote on parchment, palm stalks, flat stones and shoulder blades.', C.cream, C.mustard],
    ['Order', 'The Prophet (pbuh) told the scribes where each new passage belonged.', C.panel, C.panelEdge],
    ['Review', 'Jibril went through the revelation with him every Ramadan, twice in his final year.', C.panel, C.panelEdge],
  ];
  P.forEach(([h, d, f, e], i) => { b += card(30 + (i % 2) * 430, 110 + Math.floor(i / 2) * 156, 410, 142, h, [d], { fill: f, edge: e, size: 16, tsize: 20 }); });
  b += panel(30, 432, 840, 76) + T(54, 466, '632, Farewell Pilgrimage: Sura 5.3', { size: 18, weight: 700 }) + T(54, 492, '"This day I have perfected your religion for you"', { size: 16, fill: C.muted, italic: true });
  b += card(30, 528, 410, 92, 'At his death: complete', ['in memory and in writing'], { fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 19 });
  b += card(460, 528, 410, 92, 'But not yet', ['one bound volume'], { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, size: 16, tsize: 19 });
  add('05-preservation',
    SV(648, 'Preserved in the Prophet\'s lifetime', b),
    'Four means of preservation: memorisation by huffaz, writing by scribes such as Zayd ibn Thabit on parchment, palm stalks, stones and bones, the order of passages set by the Prophet (pbuh), and an annual review with Jibril. By his death in 632 the Qur\'an was complete in memory and writing, but not one bound volume.',
    'Complete in memory and writing by 632, but not in a single volume.',
    '## How was the Qur\'an preserved in the Prophet\'s lifetime?');
}

// 06 From Yamama to the standard copies
{
  let b = '';
  b += T(225, 124, 'Abu Bakr: compiled', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }) + T(670, 124, 'Uthman: standardised', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const A = [['Battle of Yamama', 'many huffaz killed'], ['Umar urges Abu Bakr', 'who at first hesitates, then agrees'], ['Zayd ibn Thabit collects', 'written pieces confirmed by memory'], ['Sheets (suhuf) kept', 'Abu Bakr, then Umar, then Hafsa']];
  A.forEach(([h, s], i) => {
    const y = 142 + i * 118;
    b += flowBox(30, y, 390, 100, h, s, i === 3 ? C.cream : C.panel, i === 3 ? C.mustard : C.panelEdge);
    if (i < 3) b += varrow(225, y + 101, y + 116, { w: 3 });
  });
  const U2 = [['Hudhayfa ibn al-Yaman warns', 'Muslims disputing over recitation'], ['Uthman borrows Hafsa\'s sheets', ''], ['Committee of four copies', 'in the dialect of the Quraysh where they differed'], ['Copies sent out', 'to Kufa, Basra, Damascus; one kept in Madinah; other copies burned']];
  U2.forEach(([h, s], i) => {
    const y = 142 + i * 118;
    b += flowBox(470, y, 400, 100, h, s, i === 1 ? C.cream : C.tealLight, i === 1 ? C.mustard : C.tealDark);
    if (i < 3) b += varrow(670, y + 101, y + 116, { w: 3 });
  });
  b += path('M422,546 C448,546 446,310 458,310', { w: 3, stroke: C.olive }) + `<polygon points="456,303 469,310 456,317" fill="${C.olive}"/>`;
  b += panel(30, 622, 840, 104) + T(54, 656, 'The committee', { size: 17, weight: 700 }) + T(54, 682, 'Zayd ibn Thabit, Abdullah ibn al-Zubayr, Sa\'id ibn al-As', { size: 16, fill: C.muted }) + T(54, 704, 'and Abd al-Rahman ibn al-Harith', { size: 16, fill: C.muted });
  b += T(846, 682, 'Hafsa\'s sheets were returned.', { size: 16, fill: C.olive, weight: 600, anchor: 'end' });
  add('06-compilation-journey',
    SV(754, 'From Yamama to the standard copies', b),
    'Two flows. Under Abu Bakr: huffaz die at Yamama, Umar urges Abu Bakr, Zayd ibn Thabit collects the written pieces confirmed by memory, and the sheets pass to Umar and then Hafsa. Under Uthman: Hudhayfa warns of disputes, Uthman borrows Hafsa\'s sheets, a committee of four copies them in the Quraysh dialect, and copies are sent out while other copies are burned.',
    'Hafsa\'s sheets link Abu Bakr\'s compilation to Uthman\'s standard copies.',
    '## How was it standardised under Uthman?');
}

// 07 Compiled versus standardised
{
  const tb = table(30, 110, [{ w: 170, head: '', bold: true }, { w: 335, head: 'Abu Bakr' }, { w: 335, head: 'Uthman' }], [
    ['Problem', 'many huffaz killed at Yamama; parts could be lost', 'Muslims reciting in differing ways; risk of division'],
    ['Who acted', 'Zayd ibn Thabit, urged on by Umar', 'Zayd ibn Thabit and three others'],
    ['Method', 'written pieces accepted only when confirmed', 'copied Hafsa\'s sheets; Quraysh dialect where they differed'],
    ['Result', 'one written collection (suhuf)', 'standard copies sent out; other copies burned'],
  ], { size: 17, minRow: 76 });
  const y = 110 + tb.h + 20;
  const b = tb.s + panel(30, y, 840, 112, C.cream, C.mustard) + T(54, y + 40, 'Key distinction', { size: 19, weight: 700 }) +
    T(54, y + 72, 'Abu Bakr compiled; Uthman standardised, earning the title Jami\' al-Qur\'an.', { size: 17 }) + T(54, y + 96, 'Uthman did not "write" the Qur\'an.', { size: 16, fill: C.rust, weight: 600 });
  add('07-compiled-vs-standardised',
    SV(y + 140, 'Abu Bakr compiled; Uthman standardised', b),
    'A comparison of the two stages: under Abu Bakr the problem was the loss of huffaz at Yamama and the result one written collection; under Uthman the problem was differing recitation and the result standard copies sent to the main centres. Uthman is called Jami\' al-Qur\'an, but he did not write it.',
    'Compilation saved the text; standardisation gave all Muslims the same text.',
    '## How was it standardised under Uthman?');
}

// 08 The Qur'an in legal thinking
{
  let b = '';
  b += panel(30, 110, 840, 84, C.mustard, C.olive) + badge(72, 152, 22, '1', C.cream) + T(112, 146, 'Qur\'an: the first source of law', { size: 20, weight: 700 }) + T(112, 174, 'Every other source is used in relation to it.', { size: 16 });
  const R = [
    ['Hadith (Sunnah)', 'explains how to carry out its commands and adds detail', 'The Qur\'an commands salat; the Hadiths show its times, units and movements.'],
    ['Ijma\' (consensus)', 'agreement of scholars where the texts do not settle a matter', 'The Companions agreed to compile the Qur\'an into one book.'],
    ['Qiyas (analogy)', 'applies a Qur\'anic ruling to a new case with the same cause', 'Wine intoxicates (Sura 5.90), so other intoxicating drugs are forbidden.'],
  ];
  let y = 210;
  R.forEach(([h, d, e], i) => {
    const H = 128;
    b += varrow(450, y - 14, y - 2, { w: 3 });
    b += panel(30 + (i + 1) * 20, y, 840 - (i + 1) * 20, H, i === 0 ? C.cream : C.tealLight, i === 0 ? C.mustard : C.tealDark) + badge(72 + (i + 1) * 20, y + 40, 20, String(i + 2), C.cream);
    b += T(112 + (i + 1) * 20, y + 38, h, { size: 19, weight: 700 }) + T(112 + (i + 1) * 20, y + 64, d, { size: 16, fill: C.muted });
    b += `<rect x="${54 + (i + 1) * 20}" y="${y + 80}" width="${792 - (i + 1) * 20}" height="34" rx="8" fill="${C.panel}"/>` + T(70 + (i + 1) * 20, y + 103, 'e.g. ' + e, { size: 15, italic: true });
    y += H + 18;
  });
  b += panel(30, y, 840, 96) + T(54, y + 36, 'A second qiyas: Sura 62.9 says leave trade for Friday prayer,', { size: 16 }) + T(54, y + 60, 'so any activity that keeps a person from that prayer is covered too.', { size: 16 }) +
    T(54, y + 84, 'A ruling from ijma\' or qiyas can never contradict the Qur\'an.', { size: 16, weight: 700, fill: C.rust });
  add('08-legal-thinking',
    SV(y + 124, 'The Qur\'an in legal thinking', b),
    'The Qur\'an is the first source of law. The Hadith explains and details its commands, such as the times and units of salat; ijma\' is scholars\' agreement, such as the Companions\' decision to compile the Qur\'an; qiyas applies a ruling to a new case with the same cause, as with intoxicating drugs (Sura 5.90) or activities that keep people from Friday prayer (Sura 62.9).',
    'Qur\'an first; Hadith, ijma\' and qiyas work from it and never against it.',
    '## How is the Qur\'an used in legal thinking?');
}
