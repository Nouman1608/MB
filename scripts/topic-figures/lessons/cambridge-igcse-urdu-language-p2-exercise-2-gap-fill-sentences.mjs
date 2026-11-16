import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-urdu-language-p2-exercise-2-gap-fill-sentences';
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
  let b = stat(30, 110, 195, 124, '8 marks', 'gaps in notes or sentences') +
    stat(245, 110, 195, 124, '1 longer text', 'heard twice, with pauses') +
    stat(460, 110, 195, 124, 'L1 and L2', 'facts, and ideas or attitudes') +
    stat(675, 110, 195, 124, '1-3 words', 'usual length of a gap');
  b += T(450, 284, 'The longer text may be a', { size: 21, weight: 700, anchor: 'middle' });
  ['conversation', 'interview', 'monologue', 'formal talk'].forEach((w, i) => { b += `<rect x="${30 + i * 215}" y="304" width="195" height="56" rx="12" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2.5"/>` + T(127 + i * 215, 339, w, { size: 18, weight: 600, anchor: 'middle' }); });
  // order strip
  b += panel(30, 384, 840, 150, C.tealLight, C.tealDark) + T(54, 420, 'The gaps follow the order of the recording', { size: 19, weight: 700 });
  for (let i = 0; i < 6; i++) { const x = 70 + i * 132; b += `<rect x="${x}" y="440" width="110" height="34" rx="6" fill="${C.panel}" stroke="${C.tealDark}" stroke-width="2"/>` + `<line x1="${x + 30}" y1="466" x2="${x + 80}" y2="466" stroke="${C.ink}" stroke-width="2.5"/>`; if (i < 5) b += harrow(x + 112, x + 128, 457, { w: 2.5 }); }
  b += T(54, 510, 'Lost your place? Listen for the topic of the next sentence and rejoin there.', { size: 16, fill: C.muted });
  add('01-exercise-at-a-glance',
    SV(562, 'Paper 2 Exercise 2 at a glance', b),
    'Paper 2 Exercise 2 is worth 8 marks: one longer text such as a conversation, interview, monologue or formal talk, heard twice, with gaps of one to three words in notes or sentences that follow the order of the recording.',
    'One longer recording, gaps in order, mostly short pieces of content.',
    '## What the syllabus says');
}

// 02 Heard versus printed
{
  let b = '';
  const row = (y, lab, ur, en, f, e) => `<rect x="30" y="${y}" width="840" height="100" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(54, y + 44, lab, { size: 19, weight: 700 }) + T(54, y + 72, en, { size: 15, fill: C.muted, italic: true }) + U(846, y + 62, ur, { size: 28 });
  b += row(110, 'Heard', 'ہم نے یہ کلب دو سال پہلے شروع کیا تھا۔', 'We started this club two years ago.', C.panel, C.panelEdge);
  b += varrow(450, 214, 238);
  b += row(242, 'Printed', 'کلب ______ پہلے شروع ہوا۔', 'The club began ___ ago.', C.cream, C.mustard);
  b += varrow(450, 346, 370);
  b += row(374, 'Answer', 'دو سال', 'two years', C.tealLight, C.tealDark);
  b += panel(30, 498, 840, 150) + T(54, 534, 'The words around the gap are reworded; the gap content is not', { size: 18, weight: 700 }) +
    T(54, 584, 'active', { size: 16, fill: C.muted }) + U(320, 590, 'شروع کیا تھا', { size: 25 }) + harrow(340, 390, 584) + U(560, 590, 'شروع ہوا', { size: 25 }) + T(580, 584, 'intransitive', { size: 16, fill: C.muted }) +
    T(54, 628, 'So do not wait for the exact printed sentence to be read out.', { size: 16, fill: C.muted });
  add('02-heard-versus-printed',
    SV(676, 'What you hear and what is printed', b),
    'The speaker says ہم نے یہ کلب دو سال پہلے شروع کیا تھا۔ but the question paper prints کلب ______ پہلے شروع ہوا۔ with the verb reworded; the gap still takes the speaker\'s content, دو سال.',
    'The frame is reworded; the missing content is what the speaker said.',
    '## What the printed page looks like');
}

// 03 Grammar clues
{
  const tb = table(30, 110, [{ w: 330, head: 'Clue around the gap', ur: true }, { w: 280, head: 'What it tells you' }, { w: 230, head: 'Example answer', ur: true, fill: C.tealDark }], [
    [{ u: 'ہوتی ہے، جاتی ہیں', g: 'a feminine verb' }, 'the missing word is feminine; ہیں means plural'.replace('; ہیں means plural', ', and plural with the plural verb'), { u: 'چوڑیاں', g: 'bangles' }],
    [{ u: 'خریدے جاتے ہیں', g: 'a masculine plural verb' }, 'a masculine plural noun', { u: 'بیج، پودے', g: 'seeds, plants' }],
    ['ہر ______ کو', 'a day or time unit', { u: 'منگل', g: 'Tuesday' }],
    ['کی تعداد ______ ہے', 'a number', { u: 'پچیس', g: '25' }],
    ['______ کی وجہ سے', 'a reason: a noun', { u: 'بارش', g: 'rain' }],
    [{ u: 'کے ... پر / کے ... میں', g: 'around the gap' }, 'a noun in the oblique form', { u: 'دعوت ناموں', g: 'invitations' }],
    ['ایک مشہور ______ ... سنائیں گی', 'a feminine person', { u: 'شاعرہ', g: 'poet (woman)' }],
  ], { us: 24 });
  let y = 110 + tb.h + 22, b = tb.s;
  b += panel(30, y, 840, 70, C.cream, C.mustard) + T(54, y + 43, 'The same clue checks your answer: a feminine plural verb needs a feminine plural noun.', { size: 17 });
  add('03-grammar-clues',
    SV(y + 98, 'Let the grammar predict the gap', b),
    'A table of grammar clues in the printed sentence: a feminine verb such as جاتی ہیں predicts a feminine noun (چوڑیاں); a masculine plural verb predicts بیج or پودے; ہر ______ کو predicts a day (منگل); کی تعداد predicts a number; کی وجہ سے a reason (بارش); کے ... پر an oblique noun (دعوت ناموں); and سنائیں گی a feminine person (شاعرہ).',
    'Gender, number and postpositions tell you what kind of word is missing.',
    '## Using Urdu grammar to predict the gap');
}

// 04 Notes versus sentences
{
  let b = '';
  b += panel(30, 110, 410, 270) + T(50, 146, 'Notes', { size: 21, weight: 700 }) + T(50, 174, 'heading, colon, gap', { size: 16, fill: C.muted });
  b += `<rect x="50" y="196" width="370" height="80" rx="10" fill="${C.cream}"/>` + U(400, 246, 'کتابوں کی تعداد: ______', { size: 26 });
  b += para(50, 312, 'Write just the content: a number, a noun or a short list.', 370, { size: 17, fill: C.ink }).s;
  b += panel(460, 110, 410, 270) + T(480, 146, 'Sentences', { size: 21, weight: 700 }) + T(480, 174, 'your answer must read as part of it', { size: 16, fill: C.muted });
  b += `<rect x="480" y="196" width="370" height="80" rx="10" fill="${C.cream}"/>` + U(830, 246, 'شادی کے ______ پر', { size: 26 });
  b += para(480, 312, 'Use the form that fits: the oblique plural after a postposition, the feminine form where needed.', 370, { size: 17, fill: C.ink }).s;
  b += panel(30, 400, 840, 70, C.tealLight, C.tealDark) + T(54, 443, 'Either way: write only what goes in the gap, not the whole sentence.', { size: 17, weight: 600 });
  add('04-notes-versus-sentences',
    SV(498, 'Gaps in notes and gaps in sentences', b),
    'In notes such as کتابوں کی تعداد: ______ write just the content. In sentences such as شادی کے ______ پر the answer must fit the grammar, for example the oblique plural after a postposition. In both, write only the gap.',
    'Notes take bare content; sentences take the grammatically fitting form.',
    '## Notes versus sentences');
}

// 05 Two possible answers
{
  let b = '';
  const card2 = (y, title, ur1, en1, oldv, newv, newl) => {
    let s = panel(30, y, 840, 206) + T(54, y + 38, title, { size: 19, weight: 700 });
    s += U(846, y + 66, ur1, { size: 25 }) + T(54, y + 66, en1, { size: 15, fill: C.muted, italic: true });
    s += `<rect x="50" y="${y + 100}" width="370" height="86" rx="10" fill="#fbf1ea" stroke="${C.rust}" stroke-width="2"/>` + tick(78, y + 150, false) + U(400, y + 154, oldv[0], { size: 26 }) + T(100, y + 148, oldv[1], { size: 15, fill: C.rust, weight: 600 });
    s += `<rect x="480" y="${y + 100}" width="370" height="86" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + tick(508, y + 150, true) + U(830, y + 154, newv, { size: 26 }) + T(530, y + 148, newl, { size: 15, fill: C.tealDark, weight: 600 });
    return s;
  };
  b += card2(110, 'Then and now', 'شروع میں چھ طالب علم تھے، اب ہم پچیس ہیں۔', 'At first six students; now 25.', ['چھ', 'then, not now'], 'پچیس', 'gap about now');
  b += card2(330, 'A list and an exception', 'ہم سبزیاں اگاتے ہیں ... سردیوں میں گاجریں بھی۔', 'We grow vegetables ... carrots too in winter.', ['سبزیاں', 'the general list'], 'گاجریں', 'gap about winter');
  b += panel(30, 550, 840, 92) + T(54, 600, 'A reason and a result:', { size: 19, weight: 700 }) + T(270, 600, 'the gap before', { size: 17, fill: C.muted }) + U(500, 608, 'کی وجہ سے', { size: 25 }) + T(520, 600, 'wants the cause, not the effect.', { size: 17, fill: C.muted });
  b += T(450, 682, 'Underline the word in the printed sentence that says which detail is asked for', { size: 17, weight: 700, anchor: 'middle' });
  ['اب', 'شروع میں', 'سردیوں میں', 'اصل میں'].forEach((u, i) => { b += chip(630 - i * 170, 700, 150, u, ['now', 'at first', 'in winter', 'originally'][i], { h: 104, ub: 50, fill: C.cream, edge: C.mustard }); });
  add('05-two-possible-answers',
    SV(832, 'When the text gives two possible answers', b),
    'Two examples. In شروع میں چھ طالب علم تھے، اب ہم پچیس ہیں۔ a gap about now needs پچیس, not چھ. In a list of vegetables with سردیوں میں گاجریں بھی, a gap about winter needs گاجریں. A gap before کی وجہ سے wants the cause. Words such as اب، شروع میں، سردیوں میں، اصل میں show which detail is asked for.',
    'The time or condition word in the printed sentence picks between two details.',
    '## When the text gives two possible answers');
}

// 06 Routine
{
  const st = steps(110, [
    ['In the pause', 'Read every gap; underline time words and grammar clues; pencil the kind of answer beside each gap.'],
    ['First hearing', 'Follow the sentences in order and jot what you catch. Missed one? Move on: the next topic will come.'],
    ['Second hearing', 'Fill the gaps you missed and confirm the then-and-now details.'],
    ['After', 'Read each completed sentence: does the grammar fit?'],
  ], { minH: 96, gap: 12 });
  let b = st.s, y = 110 + st.h + 22;
  b += panel(30, y, 840, 140, C.cream, C.mustard) + T(54, y + 50, 'Time words to', { size: 18, weight: 700 }) + T(54, y + 76, 'underline in', { size: 18, weight: 700 }) + T(54, y + 102, 'the pause', { size: 18, weight: 700 });
  [['اب', 'now'], ['پہلے', 'before'], ['شروع میں', 'at first']].forEach(([u, g], i) => { b += chip(690 - i * 170, y + 18, 150, u, g, { h: 104, ub: 50 }); });
  add('06-two-hearings',
    SV(y + 168, 'A routine for the two hearings', b),
    'Four stages: in the pause read every gap, underline time words such as اب، پہلے، شروع میں and grammar clues, and note the kind of answer; follow the order on the first hearing; fill and confirm on the second; then check each sentence\'s grammar.',
    'Predict in the pause, follow in order, then check the grammar fits.',
    '## A routine for the two hearings');
}

// 07 Worked example
{
  let b = '';
  b += panel(30, 110, 840, 80, C.tealLight, C.tealDark) + T(54, 146, 'The extract: a calligrapher talks about learning and his favourite work', { size: 18, weight: 700 }) + T(54, 172, 'heard twice; three gaps follow its order', { size: 15, fill: C.muted });
  const G = [
    ['(a)', 'اس نے خطاطی اپنے ______ سے سیکھی۔', 'a person, probably a relative (the gap comes before "learnt from")', 'دادا', 'grandfather', 'بارہ سال کی عمر میں', 'in that sentence, but does not fit'],
    ['(b)', 'آج کل وہ روزانہ تقریباً ______ مشق کرتا ہے۔', 'an amount of time; آج کل means now'.replace('; آج کل means now', ', and the gap is about now'), 'دو گھنٹے', 'two hours', 'آدھا گھنٹہ', 'what he did at first'],
    ['(c)', 'اسے شادی کے ______ پر نام لکھنا سب سے زیادہ پسند ہے۔', 'a postposition either side: an oblique noun', 'دعوت ناموں', 'wedding invitations', '', ''],
  ];
  let y = 210;
  G.forEach(([L, q, pred, ans, ag, trap, tn]) => {
    b += panel(30, y, 840, 224);
    b += T(54, y + 50, L, { size: 19, weight: 700 }) + U(846, y + 60, q, { size: 25 });
    b += T(54, y + 92, 'Predict: ' + pred, { size: 15, fill: C.olive, weight: 600 });
    const w = trap ? 410 : 820;
    b += `<rect x="${trap ? 450 : 40}" y="${y + 112}" width="${w}" height="94" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + tick(trap ? 476 : 66, y + 164, true) + U(850, y + 166, ans, { size: 27 }) + T(trap ? 500 : 90, y + 162, ag, { size: 15, fill: C.tealDark, weight: 600 });
    if (trap) b += `<rect x="40" y="${y + 112}" width="396" height="94" rx="10" fill="#fbf1ea" stroke="${C.rust}" stroke-width="2"/>` + tick(66, y + 150, false) + T(90, y + 148, tn, { size: 15, fill: C.rust, weight: 600 }) + U(420, y + 188, trap, { size: 25 });
    y += 238;
  });
  b += panel(30, y, 840, 80, C.cream, C.mustard) + T(54, y + 34, 'L2 too: his reason, a feeling of sharing in people\'s happiness, could also be a gap.', { size: 16 }) + T(54, y + 60, 'Some gaps are about how a speaker feels or thinks, not only facts.', { size: 16, fill: C.muted });
  add('07-worked-example',
    SV(y + 108, 'Worked example: three gaps on a calligrapher', b),
    'Three gaps on the calligraphy extract: (a) the gap before سے سیکھی takes a person, دادا, not بارہ سال کی عمر میں; (b) the gap about now takes دو گھنٹے, not آدھا گھنٹہ from the start; (c) the gap between کے and پر takes the oblique noun دعوت ناموں.',
    'Predict the kind of word, then choose the detail that fits the time and grammar.',
    '## Worked example');
}
