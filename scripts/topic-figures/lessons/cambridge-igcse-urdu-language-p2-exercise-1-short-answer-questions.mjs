import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-urdu-language-p2-exercise-1-short-answer-questions';
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
    if (c.ur && !(cell && cell.en)) return { ur: true, lines, g, h: (lines.length - 1) * ugap + us * 3.0 + 12 + (g ? 22 : 0) };
    const wl = (cell && cell.en ? [cell.en] : lines).flatMap((l) => wrap(l, c.w - 2 * pad, size, c.bold ? 700 : 400));
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
        c.lines.forEach((l, k) => { s += U(ux, top + 6 + us * 2.2 + k * ugap, l, { size: us, fill: col.fill || C.ink, anchor: col.uanchor || 'end' }); });
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

// 01 At a glance
{
  let b = stat(30, 110, 195, 124, '8 questions', '8 marks, short answers') +
    stat(245, 110, 195, 124, 'Heard twice', 'with pauses to read and write') +
    stat(460, 110, 195, 124, 'L1 and L2', 'facts, then ideas and attitudes') +
    stat(675, 110, 195, 124, 'In Urdu', 'both questions and answers');
  b += T(450, 284, 'A series of short spoken texts, such as', { size: 21, weight: 700, anchor: 'middle' });
  [['Travel announcement', 'اعلان'], ['Recorded phone message', 'پیغام'], ['Brief dialogue', 'مکالمہ']].forEach(([e, u], i) => {
    b += chip(30 + i * 286, 304, 268, u, e, { h: 116, ub: 58, fill: C.cream, edge: C.mustard, us: 30 });
  });
  b += panel(30, 440, 840, 92, C.tealLight, C.tealDark) + T(54, 476, 'Mostly catching one stated fact', { size: 19, weight: 700 }) +
    T(54, 506, 'A time, place, number, day, name or reason, written down briefly and clearly.', { size: 17, fill: C.muted });
  add('01-exercise-at-a-glance',
    SV(560, 'Paper 2 Exercise 1 at a glance', b),
    'Paper 2 Exercise 1 has eight short-answer questions for 8 marks on short spoken texts such as a travel announcement (اعلان), a recorded phone message (پیغام) or a brief dialogue (مکالمہ), heard twice and testing L1 and L2.',
    'Eight stated facts from short recordings, each heard twice.',
    '## What the syllabus says');
}

// 02 Text types
{
  const tb = table(30, 110, [{ w: 220, head: 'Text type', ur: true }, { w: 330, head: 'Typical opening', ur: true }, { w: 290, head: 'Details usually given' }], [
    [{ u: 'اعلان', g: 'announcement' }, 'مسافر توجہ فرمائیں ...', 'destination, time, platform or gate, a change, an instruction'],
    [{ u: 'پیغام', g: 'recorded phone message' }, ['السلام علیکم، میں ...', 'بات کر رہی ہوں'], 'who is calling, the reason, a new arrangement, what to do, when to call back'],
    [{ u: 'مکالمہ', g: 'brief dialogue' }, { en: 'a question from one speaker' }, 'a plan, a time, who will do what, a reason'],
    [{ en: 'Weather or travel report' }, 'آج ... کا امکان ہے', 'places, temperatures, warnings, advice'],
  ], { us: 25, size: 16 });
  add('02-text-types',
    SV(110 + tb.h + 30, 'Each text type has a familiar shape', tb.s),
    'A table of short listening text types with their typical openings and details: an announcement (مسافر توجہ فرمائیں) gives destination, time, gate and changes; a phone message gives caller, reason and new arrangements; a dialogue gives plans; a weather report (آج ... کا امکان ہے) gives places, temperatures and advice.',
    'Knowing the shape tells you where each detail will come.',
    '## The kinds of text you will hear');
}

// 03 Question words
{
  const tb = table(30, 110, [{ w: 300, head: 'Question word', ur: true }, { w: 230, head: 'Asks for', bold: true }, { w: 310, head: 'Answer form' }], [
    ['کب؟ / کس دن؟', 'when, which day', 'a day or date'],
    ['کتنے بجے؟ / کس وقت؟', 'at what time', 'a clock time'],
    ['کہاں؟', 'where', { en: 'a place' }],
    ['کتنے؟ / کتنی؟', 'how many, how much', 'a number or amount'],
    ['کون؟ / کن لوگوں کو؟', 'who, which people', 'a person or group'],
    ['کیا؟', 'what', 'an object or action'],
    ['کیوں؟', 'why', 'a reason'],
  ], { us: 24, minRow: 64 });
  let y = 110 + tb.h + 22, b = tb.s;
  b += panel(30, y, 840, 150, C.cream, C.mustard) + T(54, y + 36, 'Short, but complete enough to be unambiguous: the answer to "where?"', { size: 18, weight: 700 });
  b += `<rect x="50" y="${y + 56}" width="300" height="78" rx="10" fill="#fbf1ea" stroke="${C.rust}" stroke-width="2"/>` + tick(78, y + 102, false) + T(100, y + 100, 'too little', { size: 16, fill: C.rust, weight: 600 }) + U(330, y + 108, 'دو', { size: 27 });
  b += `<rect x="370" y="${y + 56}" width="480" height="78" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + tick(398, y + 102, true) + T(420, y + 100, 'the whole phrase', { size: 16, fill: C.tealDark, weight: 600 }) + U(830, y + 108, 'پلیٹ فارم نمبر دو', { size: 27 });
  add('03-question-words',
    SV(y + 178, 'The question word sets the answer form', b),
    'A table of Urdu question words and the answer form each needs: کب؟ a day or date, کتنے بجے؟ a clock time, کہاں؟ a place, کتنے؟ a number, کون؟ a person, کیا؟ an object or action, کیوں؟ a reason. For where, write پلیٹ فارم نمبر دو, not just دو.',
    'Recognise the question word in the pause and predict the answer.',
    '## What the questions ask for');
}

// 04 Numbers that sound alike
{
  const tb = table(30, 110, [{ w: 330, head: 'Easily confused', ur: true }, { w: 170, head: 'Meaning', bold: true }, { w: 340, head: 'What to listen for', ur: true, gfill: C.muted }], [
    ['سترہ / ستر', '17 / 70', { u: 'ہ', g: 'the final sound of the teen number' }],
    ['اٹھارہ / اسی', '18 / 80', { en: 'different words, but both quick and soft at speed' }],
    ['اٹھائیس / اڑتیس / اڑتالیس', '28 / 38 / 48', { u: '-ائیس, -تیس, -تالیس', g: 'the ending decides the ten' }],
    ['انتیس / انتالیس / انچاس', '29 / 39 / 49', { u: 'ان-', g: 'start means one less than the next ten' }],
    ['پچیس / پچاس / پچپن', '25 / 50 / 55', { u: 'پچ-', g: 'all three begin the same way' }],
  ], { us: 24 });
  let y = 110 + tb.h + 22, b = tb.s;
  b += panel(30, y, 840, 70, C.tealLight, C.tealDark) + T(54, y + 43, 'Writing the figure (38) is fine, and quicker, as long as the figure is right.', { size: 17 });
  add('04-numbers',
    SV(y + 98, 'Numbers that sound alike', b),
    'A table of Urdu numbers that are easy to confuse at speed: سترہ and ستر (17 and 70), اٹھارہ and اسی (18 and 80), اٹھائیس, اڑتیس and اڑتالیس (28, 38, 48), انتیس, انتالیس and انچاس (29, 39, 49), and پچیس, پچاس and پچپن (25, 50, 55), with the sound that tells them apart.',
    'Drill these pairs until they are automatic; write figures in the answer.',
    '## Numbers: the biggest single trap');
}

// 05 Times and days
{
  let b = '';
  b += panel(30, 110, 840, 330) + T(54, 146, 'Fractions of the hour', { size: 19, weight: 700 });
  const x0 = 110, x1 = 790, ty = 300;
  b += `<line x1="${x0}" y1="${ty}" x2="${x1}" y2="${ty}" stroke="${C.ink}" stroke-width="4"/>`;
  const marks = [[0, '7:00', 'سات بجے', false], [0.25, '7:15', 'سوا سات بجے', false], [0.5, '7:30', 'ساڑھے سات بجے', false], [0.75, '7:45', 'پونے آٹھ بجے', true], [1, '8:00', 'آٹھ بجے', false]];
  marks.forEach(([f, en, ur, hi], i) => {
    const x = x0 + f * (x1 - x0);
    b += `<circle cx="${x}" cy="${ty}" r="10" fill="${hi ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="3"/>` + T(x, ty + 40, en, { size: 20, weight: 700, anchor: 'middle', fill: hi ? C.olive : C.ink });
    if (i > 0 && i < 4) b += U(x, i % 2 ? 220 : 252, ur, { size: 25, anchor: 'middle', fill: hi ? C.olive : C.ink });
  });
  b += `<rect x="560" y="370" width="290" height="54" rx="10" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2"/>` + T(705, 404, 'a quarter TO eight, not 8:45', { size: 16, weight: 700, fill: C.olive, anchor: 'middle' });
  b += U(250, 404, 'ڈیڑھ بجے', { size: 25 }) + T(260, 398, '1:30', { size: 18, weight: 700 }) + U(470, 404, 'ڈھائی بجے', { size: 25 }) + T(480, 398, '2:30', { size: 18, weight: 700 });
  // days
  b += panel(30, 460, 840, 186) + T(54, 496, 'Days that trip people up', { size: 19, weight: 700 });
  const row = (y, items, wide) => {
    const ws = items.map(([u, g], i) => (i === wide ? 200 : 128));
    const tot = ws.reduce((a, c) => a + c, 0) + 12 * (ws.length - 1);
    let x = 450 + tot / 2;
    items.forEach(([u, g], i) => { x -= ws[i]; b += chip(x, y, ws[i], u, g, { h: 104, ub: 50, fill: i === wide ? C.cream : C.panel, edge: i === wide ? C.mustard : C.panelEdge }); x -= 12; });
  };
  row(516, [['جمعرات', 'Thursday'], ['جمعہ', 'Friday'], ['ہفتہ', 'Saturday, also "week"'], ['پیر', 'Monday'], ['سوموار', 'Monday']], 2);
  b += panel(30, 666, 840, 186) + T(54, 702, 'Parts of the day: the question may need them', { size: 19, weight: 700 });
  row(722, [['صبح', 'morning'], ['دوپہر', 'midday'], ['سہ پہر', 'afternoon'], ['شام', 'evening'], ['رات', 'night']], -1);
  add('05-times-and-days',
    SV(880, 'Times and days that are easy to mishear', b),
    'A timeline from seven to eight o\'clock marking سوا سات بجے (7:15), ساڑھے سات بجے (7:30) and پونے آٹھ بجے (7:45, a quarter to eight, not 8:45), with ڈیڑھ بجے (1:30) and ڈھائی بجے (2:30). Below, جمعرات is Thursday, جمعہ Friday, ہفتہ Saturday or week, and پیر and سوموار both mean Monday.',
    'پونے means a quarter to: پونے آٹھ is 7:45.',
    '## Times: fractions you must know');
}

// 06 Change signals
{
  let b = '';
  b += panel(30, 110, 840, 210, C.tealLight, C.tealDark) + T(54, 146, 'The question nearly always wants the NEW detail', { size: 19, weight: 700 });
  b += U(846, 204, 'گاڑی دس بجے کے بجائے گیارہ بجے روانہ ہوگی۔', { size: 27 });
  b += T(54, 198, 'The train will leave at', { size: 15, fill: C.muted, italic: true }) + T(54, 218, 'eleven instead of ten.', { size: 15, fill: C.muted, italic: true });
  b += `<rect x="260" y="240" width="270" height="62" rx="10" fill="#fbf1ea" stroke="${C.rust}" stroke-width="2"/>` + T(280, 278, 'old', { size: 16, weight: 700, fill: C.rust }) + U(510, 282, 'دس', { size: 26 });
  b += `<rect x="560" y="240" width="290" height="62" rx="10" fill="${C.panel}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(580, 278, 'new: the answer', { size: 16, weight: 700, fill: C.tealDark }) + U(830, 282, 'گیارہ', { size: 26 });
  b += T(450, 366, 'Signals that a detail has changed', { size: 20, weight: 700, anchor: 'middle' });
  const sig = [['کے بجائے', 'instead of'], ['اب', 'now'], ['معاف کیجیے / میرا مطلب ہے', 'sorry / I mean'], ['پہلے ... تھا، لیکن', 'it was ..., but']];
  const ws = [170, 100, 300, 230];
  let x = 870;
  sig.forEach(([u, g], i) => { x -= ws[i]; b += chip(x, 386, ws[i], u, g, { h: 116, ub: 62, fill: C.cream, edge: C.mustard }); x -= 13; });
  b += panel(30, 524, 840, 92) + T(54, 560, 'If the question asks for the original (اصل میں، پہلے)'.replace(' (اصل میں، پہلے)', ''), { size: 18, weight: 700 }) +
    U(846, 568, 'اصل میں، پہلے', { size: 25 }) + T(54, 592, 'it tests whether you kept both facts apart: note them as old and new.', { size: 16, fill: C.muted });
  add('06-change-signals',
    SV(644, 'Spot the change, answer with the new detail', b),
    'In گاڑی دس بجے کے بجائے گیارہ بجے روانہ ہوگی۔ the old time is دس and the new time, the answer, is گیارہ. Signals of a change are کے بجائے, اب, معاف کیجیے / میرا مطلب ہے and پہلے ... تھا، لیکن.',
    'After کے بجائے or لیکن comes the detail that counts now.',
    '## Changed and corrected details');
}

// 07 The two hearings
{
  const st = steps(110, [
    ['In the pause', 'Read all the questions for the text, circle the question word, predict the form: time, place or number?'],
    ['First hearing', 'Note key words and figures only, beside each question, in the order you expect them.'],
    ['Second hearing', 'Confirm, listen for what you missed, and check any change signalled by a turn word.'],
    ['After', 'Write each short answer clearly. Never leave a blank.'],
  ], { minH: 96, gap: 12 });
  add('07-two-hearings',
    SV(110 + st.h + 30, 'A routine for the two hearings', st.s),
    'Four stages: in the pause read the questions and predict answer forms; on the first hearing note key words and figures only; on the second hearing confirm and check changes; afterwards write each short answer clearly and leave no blanks.',
    'Notes on the first hearing, checking on the second, answers after.',
    '## A routine for the two hearings');
}

// 08 Worked example
{
  let b = '';
  b += panel(30, 110, 840, 92, C.tealLight, C.tealDark) + T(54, 146, 'The announcement: an Islamabad flight from Karachi', { size: 18, weight: 700 }) +
    T(54, 176, 'gate changed from seven to nine; new departure time; have boarding cards ready', { size: 16, fill: C.muted });
  const qs = [
    ['پرواز کس گیٹ سے روانہ ہوگی؟', 'Which gate will the flight leave from?', 'first-hearing note: 7 → 9', 'گیٹ نمبر نو', 'سات', 'the old gate'],
    ['روانگی کا نیا وقت کیا ہے؟', 'What is the new departure time?', 'a quarter to four = 3:45', 'پونے چار بجے', '4:45', 'the پونے trap'.replace(' پونے', '')],
    ['مسافروں سے کیا کرنے کو کہا گیا ہے؟', 'What have passengers been asked to do?', 'an instruction (L2)', 'بورڈنگ کارڈ تیار رکھیں', '', ''],
  ];
  let y = 222;
  qs.forEach(([q, qe, note, ans, wrong, wn]) => {
    b += panel(30, y, 840, 200);
    b += U(846, y + 50, q, { size: 26 }) + T(54, y + 40, qe, { size: 16, fill: C.muted, italic: true }) + T(54, y + 66, note, { size: 15, fill: C.olive, weight: 600 });
    b += `<rect x="${wrong ? 340 : 50}" y="${y + 88}" width="${wrong ? 510 : 800}" height="92" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + tick(wrong ? 368 : 78, y + 140, true) + U(830, y + 144, ans, { size: 27 });
    if (wrong) {
      b += `<rect x="50" y="${y + 88}" width="270" height="92" rx="10" fill="#fbf1ea" stroke="${C.rust}" stroke-width="2"/>` + tick(78, y + 140, false) + T(102, y + 138, wn, { size: 15, fill: C.rust, weight: 600 });
      b += /\d/.test(wrong) ? T(300, y + 140, wrong, { size: 22, weight: 700, anchor: 'end' }) : U(300, y + 144, wrong, { size: 27 });
    }
    y += 214;
  });
  add('08-worked-example',
    SV(y + 16, 'Worked example: a flight announcement', b),
    'Three questions on a flight announcement. The gate is گیٹ نمبر نو, not the old gate سات; the new time is پونے چار بجے (3:45), not 4:45; and passengers are told بورڈنگ کارڈ تیار رکھیں, an instruction.',
    'New detail, exact time with پونے, and the instruction itself.',
    '## Worked example');
}
