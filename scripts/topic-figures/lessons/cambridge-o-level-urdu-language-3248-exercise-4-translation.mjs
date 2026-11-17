import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-urdu-language-3248-exercise-4-translation';
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


const ex = (x, y, w, u, g, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${o.h ?? 92}" rx="10" fill="${o.fill || C.tealLight}"${o.edge ? ` stroke="${o.edge}" stroke-width="2"` : ''}/>` + U(x + w - 16, y + (o.ub ?? 48), u, { size: o.us ?? 24, fill: o.ufill || C.ink }) + (g ? T(x + w - 16, y + (o.h ?? 92) - 14, g, { size: 15, fill: o.gfill || C.tealDark, anchor: 'end', italic: true }) : '');

// 01 Objectives in translation
{
  let b = stat(30, 110, 268, 116, '~150 words', 'English passage') + stat(316, 110, 268, 116, '15 marks', 'answer written in Urdu') + stat(602, 110, 268, 116, 'W1 to W5', 'all five writing objectives', C.cream, C.mustard);
  const tb = table(30, 250, [{ w: 300, head: 'Objective', bold: true }, { w: 540, head: 'In translation' }], [
    ['W1 communicate clearly and accurately', 'every idea of the English is present, nothing added'],
    ['W2 coherent paragraphs, linking devices', 'English links (but, so, because) survive as Urdu connectives'],
    ['W3 manipulate the language accurately', 'tenses, agreement, postpositions and word order correct'],
    ['W4 punctuation and spelling', 'Urdu punctuation; correct spelling, including names'],
    ['W5 register and style', 'the English tone (friendly, formal) carried into Urdu'],
  ], { size: 17, minRow: 70 });
  b += tb.s;
  add('01-objectives',
    SV(250 + tb.h + 30, 'Exercise 4: what is assessed', b),
    'Exercise 4 is a translation of about 150 words from English into Urdu for 15 marks, testing W1 to W5: every idea present, links kept as Urdu connectives, accurate grammar and word order, Urdu punctuation and spelling, and the original tone.',
    'Every idea, accurately, in natural Urdu and the right tone.',
    '## What the objectives mean for translation');
}

// 02 Word order
{
  let b = '';
  const en = [['She', C.tealLight, C.tealDark], ['gave', C.cream, C.mustard], ['the book', C.panel, C.ink], ['to her brother', C.panel, C.blue]];
  const ur = [['اس نے', C.tealLight, C.tealDark], ['کتاب', C.panel, C.ink], ['اپنے بھائی کو', C.panel, C.blue], ['دی۔', C.cream, C.mustard]];
  b += T(54, 140, 'English: subject, verb, object', { size: 19, weight: 700 });
  const ew = [120, 120, 180, 230];
  let x = 54;
  const ex1 = [];
  en.forEach(([s, f, e], i) => { b += `<rect x="${x}" y="158" width="${ew[i]}" height="62" rx="10" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(x + ew[i] / 2, 197, s, { size: 20, weight: 600, anchor: 'middle' }); ex1.push(x + ew[i] / 2); x += ew[i] + 14; });
  b += T(846, 300, 'Urdu: subject, object, verb last', { size: 19, weight: 700, anchor: 'end' });
  const uw2 = [150, 120, 220, 110];
  let ux = 846;
  const ux1 = [];
  ur.forEach(([s, f, e], i) => { const w = uw2[i]; b += `<rect x="${ux - w}" y="318" width="${w}" height="72" rx="10" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + U(ux - w / 2, 362, s, { size: 27, anchor: 'middle' }); ux1.push(ux - w / 2); ux -= w + 14; });
  // links: en index -> ur index
  [[0, 0], [1, 3], [2, 1], [3, 2]].forEach(([a, c]) => { b += path(`M${ex1[a]},222 C${ex1[a]},268 ${ux1[c]},270 ${ux1[c]},314`, { w: 2.5, stroke: C.muted, extra: 'stroke-dasharray="6 5"' }); });
  b += T(450, 432, 'Urdu reads right to left: the verb comes last, postpositions follow their nouns.', { size: 17, fill: C.muted, anchor: 'middle' });
  b += panel(30, 456, 840, 92, '#fbf1ea', C.rust) + T(54, 494, 'English order with Urdu words', { size: 18, weight: 700, fill: C.rust }) + T(54, 522, 'a common mistake', { size: 16, fill: C.muted }) + U(846, 512, 'میں گیا بازار کل', { size: 27, fill: C.rust }) + tick(620, 506, false);
  add('02-word-order',
    SV(576, 'Word order: the verb goes last', b),
    'The English sentence "She gave the book to her brother" (subject, verb, object) becomes اس نے کتاب اپنے بھائی کو دی۔ (subject, object, verb), with the verb moved to the end and کو after the noun. میں گیا بازار کل keeps English order and is wrong.',
    'Subject, object, verb: move the verb to the end of the Urdu sentence.',
    '## Six changes English needs');
}

// 03 Tense and aspect
{
  const tb = table(30, 110, [{ w: 360, head: 'English', bold: false }, { w: 480, head: 'Urdu', ur: true }], [
    ['I walk to school every day.', 'میں روزانہ پیدل اسکول جاتا ہوں۔'],
    ['I am walking to school.', 'میں پیدل اسکول جا رہا ہوں۔'],
    ['I have finished my homework.', ['میں نے اپنا ہوم ورک ختم کر لیا ہے۔', 'میں ہوم ورک کر چکا ہوں۔']],
    ['I had already left.', 'میں پہلے ہی جا چکا تھا۔'],
    ['I used to play cricket.', ['میں کرکٹ کھیلا کرتا تھا۔', 'کھیلتا تھا۔']],
    ['I have been learning Urdu for two years.', 'میں دو سال سے اردو سیکھ رہا ہوں۔'],
  ], { us: 24, size: 17, minRow: 72, hiRows: [5] });
  const y = 110 + tb.h + 20;
  const b = tb.s + panel(30, y, 840, 96, C.cream, C.mustard) + T(54, y + 38, 'The classic trap: "for two years"', { size: 19, weight: 700 }) + T(54, y + 70, 'becomes a continuous present with', { size: 17, fill: C.muted }) + U(846, y + 60, 'دو سال سے', { size: 28, fill: C.olive });
  add('03-tense-and-aspect',
    SV(y + 124, 'Tense: map meaning, not verb shapes', b),
    'Six English tenses with their Urdu equivalents, from the habitual جاتا ہوں and continuous جا رہا ہوں to the perfect کر لیا ہے or کر چکا ہوں, the pluperfect جا چکا تھا and the habitual past کھیلا کرتا تھا. "I have been learning Urdu for two years" becomes میں دو سال سے اردو سیکھ رہا ہوں۔',
    'Translate what the tense means; "for two years" becomes دو سال سے with a continuous present.',
    '## Six changes English needs');
}

// 04 Articles, gender and register
{
  let b = '';
  b += panel(30, 110, 840, 246) + T(54, 148, 'Articles', { size: 20, weight: 700 }) + T(160, 148, '"the" is not translated; "a" only when it introduces something new', { size: 16, fill: C.muted });
  b += T(54, 202, 'A man knocked at the door.', { size: 17, italic: true }) + ex(400, 166, 446, 'ایک آدمی نے دروازہ کھٹکھٹایا', '', { h: 70, ub: 46 });
  b += T(54, 284, 'The door was open.', { size: 17, italic: true }) + ex(400, 248, 446, 'دروازہ کھلا تھا', '', { h: 70, ub: 46 });
  b += T(54, 330, 'not', { size: 15, fill: C.rust, weight: 700 }) + U(130, 334, 'وہ', { size: 22, fill: C.rust, anchor: 'middle' }) + T(160, 330, 'for "the" everywhere', { size: 15, fill: C.rust });
  let y = 376;
  b += panel(30, y, 840, 168) + T(54, y + 38, 'Gender: choose the noun, then make every word agree', { size: 20, weight: 700 });
  b += T(54, y + 92, 'the old house', { size: 17, italic: true }) + ex(200, y + 56, 220, 'پرانا مکان', 'masculine', { h: 92 });
  b += T(470, y + 92, 'the old building', { size: 17, italic: true }) + ex(626, y + 56, 220, 'پرانی عمارت', 'feminine', { h: 92, fill: C.cream, gfill: C.olive });
  y += 188;
  b += panel(30, y, 840, 250) + T(54, y + 38, 'You and they: English hides register', { size: 20, weight: 700 });
  b += T(54, y + 92, 'you, to a friend', { size: 17, italic: true }) + ex(230, y + 56, 190, 'تم', '', { h: 70, ub: 48 });
  b += T(470, y + 92, 'you, to a teacher', { size: 17, italic: true }) + ex(656, y + 56, 190, 'آپ', '', { h: 70, ub: 48, fill: C.cream });
  b += T(54, y + 176, 'My grandfather says...', { size: 17, italic: true }) + ex(330, y + 140, 250, 'میرے دادا کہتے ہیں', '', { h: 70, ub: 46 }) + tick(612, y + 178, true) + ex(646, y + 140, 200, 'کہتا ہے', '', { h: 70, ub: 46, fill: '#fbf1ea', ufill: C.rust });
  b += T(54, y + 236, 'Keep the same form for the same person throughout.', { size: 16, fill: C.muted });
  add('04-articles-gender-register',
    SV(y + 278, 'Articles, gender and register', b),
    'Three changes. "The" is not translated and "a" becomes ایک only for something new (ایک آدمی نے دروازہ کھٹکھٹایا، دروازہ کھلا تھا). Gender must be chosen: پرانا مکان but پرانی عمارت. Register: تم to a friend, آپ to a teacher, and میرے دادا کہتے ہیں rather than کہتا ہے.',
    'English gives no help with gender or respect: decide both, then keep them consistent.',
    '## Six changes English needs');
}

// 05 Idioms: translate the meaning
{
  let b = '', y = 110;
  [['It was raining cats and dogs.', 'موسلا دھار بارش ہو رہی تھی'], ['I am over the moon.', 'میں بے حد خوش ہوں'], ['He kept his word.', 'اس نے اپنا وعدہ پورا کیا']].forEach(([e, u], i) => {
    b += panel(30, y, 840, 112) + T(54, y + 62, e, { size: 19, italic: true, weight: 600 }) + harrow(392, 432, y + 56, { w: 3.5 }) + ex(440, y + 16, 406, u, 'the meaning', { h: 80, ub: 44 });
    y += 126;
  });
  b += panel(30, y + 4, 840, 84, C.cream, C.mustard) + T(450, y + 40, 'A word-for-word idiom is the clearest sign of literal translation.', { size: 18, weight: 700, anchor: 'middle' }) +
    T(450, y + 68, 'Ask what the English means, then say that in Urdu.', { size: 16, fill: C.muted, anchor: 'middle' });
  add('05-idioms',
    SV(y + 116, 'Idioms: translate the meaning', b),
    'Three English idioms rendered by meaning: "It was raining cats and dogs" as موسلا دھار بارش ہو رہی تھی, "I am over the moon" as میں بے حد خوش ہوں, and "He kept his word" as اس نے اپنا وعدہ پورا کیا.',
    'Translate what the idiom means, never its words.',
    '## Six changes English needs');
}

// 06 Process for the exam
{
  const st = steps(110, [
    ['Read the whole English passage', 'For meaning, tone, and who is speaking to whom.'],
    ['Mark difficulties before writing', 'Idioms, tricky tenses, words you do not know.'],
    ['Translate sentence by sentence', 'Keep the sentence boundaries unless Urdu needs two short ones joined or a long one split.'],
    ['Never leave a gap', 'Use a simpler word or phrase: a close paraphrase keeps the meaning, a blank loses it.'],
    ['Read the Urdu alone', 'As if there were no English: does it sound like Urdu? Does every verb agree?'],
    ['Check names, numbers and punctuation', 'Last of all.'],
  ], { minH: 84, gap: 10, hi: 3 });
  add('06-exam-process',
    SV(110 + st.h + 30, 'A six-step translation process', st.s),
    'Six steps: read the whole passage for meaning and tone, mark difficulties, translate sentence by sentence, never leave a gap, read the Urdu on its own to check it sounds natural and agrees, and finally check names, numbers and punctuation.',
    'A paraphrase keeps the meaning; a blank loses it.',
    '## A process for the exam');
}

// 07 Worked example
{
  let b = '', y = 110;
  const rows = [
    ['Last summer my family visited Murree for the first time.', ['پچھلی گرمیوں میں میرے گھر والے پہلی بار مری گئے۔'], 'a family is a plural group; "went to" sounds more natural than a literal "visit"'],
    ['The roads were narrow and crowded, but the view from the hills was breathtaking.', ['سڑکیں تنگ تھیں اور ان پر بہت رش تھا، لیکن', 'پہاڑوں سے نظارہ دم بخود کر دینے والا تھا۔'], '"crowded" expanded into a clause; "breathtaking" given an Urdu expression of the same force'],
    ['My little sister, who had never seen clouds so close, kept trying to catch them.', ['میری چھوٹی بہن نے، جس نے پہلے کبھی بادل اتنے قریب سے نہیں دیکھے تھے،', 'انھیں پکڑنے کی بار بار کوشش کی۔'], 'the relative clause kept; the verb agrees with "clouds", masculine plural'],
    ['In the evening we drank hot tea at a small roadside café.', ['شام کو ہم نے سڑک کنارے ایک چھوٹے سے ڈھابے پر گرم چائے پی۔'], 'the natural word for a roadside café, in the oblique; the verb agrees with feminine "tea"'],
    ['I have been to many places since then, but I will never forget that trip.', ['اس کے بعد میں بہت سی جگہوں پر جا چکا ہوں، مگر وہ سفر کبھی نہیں بھولوں گا۔'], 'perfect for "have been"; the future negative keeps the promise-like tone'],
  ];
  rows.forEach(([e, us, n], i) => {
    const H = 92 + us.length * 50 + 22;
    b += panel(30, y, 840, H) + badge(62, y + 34, 17, String(i + 1), C.cream) + para(92, y + 40, e, 760, { size: 17, italic: true, lh: 22 }).s;
    const ey = y + 40 + wrap(e, 760, 17).length * 22;
    us.forEach((u, k) => { b += U(846, ey + 30 + k * 50, u, { size: 23, fill: C.tealDark }); });
    b += T(846, y + H - 14, n, { size: 15, fill: C.muted, anchor: 'end' });
    y += H + 10;
  });
  add('07-worked-example',
    SV(y + 16, 'Worked example: a trip to Murree', b),
    'Five English sentences and their Urdu translations, for example "Last summer my family visited Murree for the first time" as پچھلی گرمیوں میں میرے گھر والے پہلی بار مری گئے۔, with notes on plural agreement, expanding "crowded", keeping the relative clause, the oblique ڈھابے پر, and the future negative.',
    'Each sentence keeps its meaning and its links, and reads as natural Urdu.',
    '## Worked example');
}

// 08 Punctuation, dates and "there is"
{
  let b = '';
  b += panel(30, 110, 840, 150) + T(54, 148, 'Punctuation changes', { size: 20, weight: 700 });
  [['.', '۔', 'full stop'], [',', '،', 'comma'], ['?', '؟', 'question mark']].forEach(([e, u, g], i) => {
    const x = 54 + i * 270;
    b += `<rect x="${x}" y="168" width="250" height="74" rx="10" fill="${C.tealLight}"/>` + T(x + 50, 220, e, { size: 36, weight: 700, anchor: 'middle' }) + harrow(x + 80, x + 120, 205, { w: 3 }) + U(x + 150, 222, u, { size: 32, anchor: 'middle' }) + T(x + 186, 212, g, { size: 15, fill: C.tealDark });
  });
  b += panel(30, 280, 840, 150) + T(54, 318, 'Days and times', { size: 20, weight: 700 });
  [['on Monday', 'پیر کو'], ['at five o\'clock', 'پانچ بجے'], ['in 2025', '2025 میں']].forEach(([e, u], i) => {
    const x = 54 + i * 270;
    b += `<rect x="${x}" y="338" width="250" height="74" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(x + 16, 382, e, { size: 16, italic: true }) + U(x + 236, 386, u, { size: 25 });
  });
  b += panel(30, 450, 840, 190, C.cream, C.mustard) + T(54, 488, '"There is / there are": place first, then the thing, then the verb', { size: 19, weight: 700 });
  b += T(54, 526, 'There is a park near my house.', { size: 17, italic: true });
  const parts = [['میرے گھر کے قریب', 'place', C.tealLight], ['ایک پارک', 'thing', C.panel], ['ہے۔', 'verb', C.teal]];
  let x = 846;
  [250, 160, 100].forEach((w, i) => { const [u, g, f] = parts[i]; b += `<rect x="${x - w}" y="544" width="${w}" height="82" rx="10" fill="${f}" stroke="${C.olive}" stroke-width="1.5"/>` + U(x - w / 2, 584, u, { size: 25, anchor: 'middle' }) + T(x - w / 2, 614, g, { size: 15, fill: C.olive, anchor: 'middle', italic: true }); x -= w + 12; });
  add('08-punctuation-and-structures',
    SV(668, 'Punctuation, dates and "there is"', b),
    'English full stops, commas and question marks become ۔، and ؟. Days and times: پیر کو، پانچ بجے، 2025 میں. "There is a park near my house" becomes میرے گھر کے قریب ایک پارک ہے۔: place, then the thing, then ہے.',
    'Swap the punctuation, and build "there is" as place, thing, ہے.',
    '## Numbers, names, dates and punctuation');
}
