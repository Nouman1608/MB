import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-urdu-language-exercise-2-multiple-matching';
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
    const c = cols[j], lines = Array.isArray(cell) ? cell : [cell];
    if (c.ur) return { ur: true, lines, h: (lines.length - 1) * ugap + us * 2.6 + 12 };
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
        c.lines.forEach((l, k) => { s += U(col.uanchor === 'middle' ? cx2 + col.w / 2 : cx2 + col.w - pad, top + 6 + us * 1.85 + k * ugap, l, { size: us, fill: col.fill || C.ink, anchor: col.uanchor || 'end' }); });
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
const tick = (x, y, ok) => T(x, y, ok ? '✓' : '✗', { size: 26, weight: 700, fill: ok ? C.tealDark : C.rust, anchor: 'middle' });
const uw = (s, size = 26) => s.length * size * 0.42;

// 01 How the task works
{
  let b = stat(30, 110, 195, 130, '9 marks', 'one per sentence') +
    stat(245, 110, 195, 130, '12-15 min', 'a sensible time allowance') +
    stat(460, 110, 195, 130, 'R1, R2, R3', 'not R4: answers are stated, reworded') +
    stat(675, 110, 195, 130, 'One letter', 'per answer: no Urdu to write');
  b += T(160, 290, 'Sentences', { size: 19, weight: 700, anchor: 'middle' }) + T(740, 290, 'Paragraphs', { size: 19, weight: 700, anchor: 'middle' });
  const sy = (i) => 310 + i * 62, py = (i) => 320 + i * 76;
  const links = [[0, 1], [1, 0], [2, 3], [3, 1], [4, 2]];
  links.forEach(([s, p]) => { b += path(`M220,${sy(s) + 24} C450,${sy(s) + 24} 450,${py(p) + 30} 650,${py(p) + 30}`, { stroke: p === 1 ? C.olive : C.tealDark, w: p === 1 ? 4 : 3 }); });
  for (let i = 0; i < 5; i++) b += `<rect x="100" y="${sy(i)}" width="120" height="48" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(160, sy(i) + 31, 'Sentence ' + (i + 1), { size: 16, weight: 600, anchor: 'middle' });
  b += T(160, sy(5) + 18, '… up to 9', { size: 16, fill: C.muted, anchor: 'middle' });
  ['A', 'B', 'C', 'D'].forEach((L, i) => { b += `<rect x="650" y="${py(i)}" width="180" height="60" rx="10" fill="${i === 1 ? C.cream : C.tealLight}" stroke="${i === 1 ? C.mustard : C.tealDark}" stroke-width="2.5"/>` + T(740, py(i) + 38, 'Paragraph ' + L, { size: 17, weight: 700, anchor: 'middle' }); });
  b += panel(30, 670, 840, 96, C.cream, C.mustard) + T(54, 706, 'Read the rubric: a letter may be used more than once', { size: 19, weight: 700 }) +
    T(54, 736, 'Here B matches two sentences. Do not cross a letter off unless each is used once.', { size: 17, fill: C.muted });
  add('01-how-the-task-works',
    SV(794, 'How Exercise 2 works', b),
    'Exercise 2 is worth 9 marks, takes about 12-15 minutes and tests R1 to R3. Each sentence is matched to one paragraph by writing its letter; in the example paragraph B matches two sentences, because a letter can be used more than once unless the rubric says otherwise.',
    'Match meaning, not words, and check whether letters can repeat.',
    '## What the syllabus says');
}

// 02 Paraphrase patterns
{
  const tb = table(30, 110, [{ w: 210, head: 'Pattern', bold: true }, { w: 340, head: 'In the paragraph', ur: true }, { w: 290, head: 'In the sentence', ur: true }], [
    ['Synonym', 'کام شروع کیا', 'کام کا آغاز کیا'],
    ['General word for specific ones', 'فٹ بال اور کرکٹ', 'کھیل'],
    ['Negative of the opposite', 'آسان نہیں تھا', 'مشکل تھا'],
    ['Feeling described indirectly', 'میرا دل خوش ہو جاتا ہے', 'اسے خوشی ملتی ہے'],
    ['Change over time', 'پہلے… مگر اب…', 'اس کا معمول بدل گیا ہے'],
    ["Someone else's view", ['میرے دوست کہتے ہیں کہ', 'یہ وقت کا ضیاع ہے'], ['دوسرے اس کے شوق کو', 'اہمیت نہیں دیتے']],
    ['Future intention', ['میں بڑی ہو کر ڈیزائنر', 'بننا چاہتی ہوں'], 'اس کا مستقبل کا پیشہ'],
    ['Cause stated as result', ['شور کی وجہ سے گھر میں', 'نہیں پڑھ سکتی'], ['گھر پڑھنے کے لیے', 'مناسب جگہ نہیں']],
  ], { us: 24, minRow: 70 });
  add('02-paraphrase-patterns',
    SV(110 + tb.h + 30, 'Same meaning, different words', tb.s),
    'A table of eight paraphrase patterns, each with the paragraph wording and the reworded sentence, for example آسان نہیں تھا in the paragraph becoming مشکل تھا in the sentence, and فٹ بال اور کرکٹ becoming کھیل.',
    'The sentence almost never repeats the paragraph: look for the same idea in new words.',
    '## The core skill: recognising paraphrase');
}

// 03 The five traps
{
  let b = '', y = 110;
  // chips: rows of [urdu, gloss], laid out right to left from x=850
  const trap = (i, title, en, rows, extra = '') => {
    const th = 58 + wrap(en, 300, 16).length * 21;
    const H = Math.max(th + 18, rows.length * 122 + 22, 120);
    let s = panel(30, y, 840, H) + badge(76, y + H / 2, 24, String(i + 1), C.cream);
    s += T(122, y + 40, title, { size: 20, weight: 700 }) + para(122, y + 70, en, 300, { size: 16, fill: C.muted, lh: 21 }).s;
    rows.forEach((r, k) => {
      let x = 850;
      r.forEach(([u, g]) => { const w = Math.max(uw(u, 24) + 40, g.length * 8.6 + 26); x -= w; s += chip(x, y + 16 + k * 122, w, u, g, { h: 110, us: 24, ub: 50, fill: C.cream, edge: C.mustard }); x -= 10; });
    });
    s += extra(y, H);
    y += H + 12;
    return s;
  };
  b += trap(0, 'The shared word', 'The paragraph that repeats the word is often wrong: there, the brother is in the band, not the writer.', [[['بینڈ', 'band']]], () => '');
  b += trap(1, 'Half a match', 'A paragraph that satisfies only one part of a two-part sentence is not a match. Underline both parts.', [], (yy) =>
    `<rect x="450" y="${yy + 22}" width="400" height="44" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + T(470, yy + 51, 'helps an older relative', { size: 16, weight: 600 }) + tick(820, yy + 53, true) +
    `<rect x="450" y="${yy + 76}" width="400" height="44" rx="10" fill="#fbf1ea" stroke="${C.rust}" stroke-width="2"/>` + T(470, yy + 105, 'and does it every week', { size: 16, weight: 600 }) + tick(820, yy + 107, false));
  b += trap(2, 'Wanted versus did', 'Something the person has done does not match a paragraph where they only plan it.', [[['کیا', 'did'], ['ارادہ ہے', 'intends to'], ['چاہتا تھا', 'wanted to']]], () => '');
  b += trap(3, 'Whose opinion?', "The writer's own view or someone else's: sentences frequently turn on this difference.", [[['میرے خیال میں', "writer's view"], ['میری امی کا خیال ہے', "someone else's view"]]], () => '');
  b += trap(4, 'Time words', 'They anchor events in time: "this place will soon be unavailable" needs a future event, not a past one.', [[['پہلے', 'before'], ['اب', 'now'], ['اگلے سال', 'next year']], [['دو سال پہلے', 'two years ago'], ['ابھی تک', 'still, so far']]], () => '');
  add('03-five-traps',
    SV(y + 18, 'Five traps in multiple matching', b),
    'Five traps: a shared word such as بینڈ that points to the wrong paragraph, a paragraph that matches only half a two-part sentence, wanted versus did (چاہتا تھا, ارادہ ہے, کیا), whose opinion it is (میرے خیال میں versus میری امی کا خیال ہے), and time words such as پہلے، اب، اگلے سال.',
    'Check the meaning, both parts, the action, the speaker and the time.',
    '## The traps');
}

// 04 Worked example: sentence to paragraph evidence
{
  let b = '', y = 110;
  b += T(235, y + 6, 'Sentence', { size: 18, weight: 700, anchor: 'middle', fill: C.muted }) + T(665, y + 6, 'Evidence in the paragraph', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  y += 22;
  const row = (sent, gloss, letter, name, ev, note) => {
    const g = wrap(gloss, 370, 16), n = wrap(note, 370, 16, 600);
    const HL = 30 + sent.length * 54 + g.length * 20 + 22, HR = 62 + ev.length * 54 + n.length * 20 + 18, H = Math.max(HL, HR);
    let s = panel(30, y, 410, H) + panel(460, y, 410, H, C.tealLight, C.tealDark);
    sent.forEach((l, k) => { s += U(420, y + 64 + k * 54, l, { size: 25 }); });
    s += para(50, y + 46 + sent.length * 54, gloss, 370, { size: 16, fill: C.muted, italic: true, lh: 20 }).s;
    s += harrow(442, 458, y + H / 2);
    s += badge(500, y + 38, 20, letter, C.mustard) + U(850, y + 52, name, { size: 25 });
    ev.forEach((l, k) => { s += U(850, y + 54 + (k + 1) * 54, l, { size: 24 }); });
    s += para(480, y + 46 + (ev.length + 1) * 54 - 14, note, 370, { size: 16, fill: C.tealDark, weight: 600, lh: 20 }).s;
    y += H + 14;
    return s;
  };
  b += row(['یہ شخص اپنے خاندان کے ایک بزرگ', 'کی مدد کرتا/کرتی ہے۔'], 'helps an elder in the family', 'A', 'زینب', ['نانی', 'وہ اکیلی نہیں جا سکتیں'], 'grandmother = older relative; she cannot go alone');
  b += row(['کسی اور کو اس شخص کی صلاحیت', 'پر اس سے زیادہ بھروسا ہے۔'], 'someone else trusts their ability more than they do', 'B', 'حمزہ', ['میرے کوچ کا خیال ہے', 'مجھے خود اس پر یقین نہیں'], 'the coach believes; Hamza does not');
  b += row(['اس شخص کے ہفتے کے دن کا', 'معمول بدل گیا ہے۔'], 'their Saturday routine has changed', 'C', 'مریم', ['پہلے… مگر اب…'], 'used to sleep late, now works');
  add('04-worked-example',
    SV(y + 16, 'Matching by meaning: the worked example', b),
    'Three sentences matched to paragraphs by evidence rather than shared words: helping an elder matches Zainab (A) through نانی and وہ اکیلی نہیں جا سکتیں; someone else trusting his ability more matches Hamza (B) through his coach\'s view; a changed Saturday routine matches Maryam (C) through پہلے… مگر اب….',
    'For every match, point to the words in the paragraph that prove it.',
    '## Worked example');
}

// 05 A reliable method
{
  const st = steps(110, [
    ['Read the sentences first', 'Note the key idea of each in your own words, and whether it has two parts.'],
    ['Read each paragraph once', 'Who the person is and two or three things they say.'],
    ['Match the easiest first', 'Obvious matches reduce the field for the rest.'],
    ['Find the evidence', 'Locate the specific words that justify each match. No evidence, no answer yet.'],
    ['Check both parts', 'Every two-part sentence must be satisfied in full.'],
    ['Eliminate, then verify', 'Resolve the hard ones by elimination, but still check the evidence.'],
    ['Answer every sentence', 'There is no penalty for a wrong letter, so never leave a blank.'],
  ], { minH: 82, gap: 10, hi: 3 });
  add('05-reliable-method',
    SV(110 + st.h + 30, 'A seven-step matching method', st.s),
    'Seven steps: read the sentences first, read each paragraph once, match the easiest first, find the evidence for every match, check both parts of two-part sentences, eliminate and then verify, and answer every sentence.',
    'Evidence for every letter, both parts checked, no blanks.',
    '## A reliable method');
}

// 06 Word banks for paraphrase practice
{
  let b = '', y = 110;
  const bank = (title, items) => {
    b += T(450, y + 20, title, { size: 20, weight: 700, anchor: 'middle' });
    y += 38;
    const ws = items.map(([u, g]) => Math.max(uw(u, 25) + 40, g.length * 8.6 + 26));
    const tot = ws.reduce((a, c) => a + c, 0) + 12 * (ws.length - 1);
    let x = 450 + tot / 2; // right to left, centred
    items.forEach(([u, g], i) => { x -= ws[i]; b += chip(x, y, ws[i], u, g, { h: 110, us: 25, ub: 52 }); x -= 12; });
    y += 140;
  };
  bank('Synonym pairs', [['شروع / آغاز', 'start, beginning'], ['مشکل / دشوار', 'difficult'], ['مدد / تعاون', 'help, cooperation'], ['فیصلہ کرنا / طے کرنا', 'decide, settle']]);
  bank('Feeling and attitude words', [['خوش', 'happy'], ['مطمئن', 'content'], ['پریشان', 'worried'], ['مایوس', 'disappointed'], ['حیران', 'surprised'], ['شکر گزار', 'grateful']]);
  bank('Time and change markers', [['پہلے', 'before'], ['اب', 'now'], ['شروع میں', 'at first'], ['آخرکار', 'finally'], ['آئندہ', 'in future'], ['ارادہ', 'intention']]);
  add('06-word-banks',
    SV(y - 10, 'Word banks that build paraphrase skill', b),
    'Three word banks with English glosses: synonym pairs such as مشکل / دشوار, feeling words such as خوش, مطمئن and مایوس, and time and change markers such as پہلے, اب, آخرکار and آئندہ.',
    'Collect synonyms, feelings and time markers: they are what the sentences reword.',
    '## Building the skill before the exam');
}
