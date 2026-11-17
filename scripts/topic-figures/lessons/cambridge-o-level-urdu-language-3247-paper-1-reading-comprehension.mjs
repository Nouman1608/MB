import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-urdu-language-3247-paper-1-reading-comprehension';
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


const tag = (x, y, label, fill, edge, w = 120) => `<rect x="${x}" y="${y}" width="${w}" height="34" rx="17" fill="${fill}" stroke="${edge}" stroke-width="2"/>` + T(x + w / 2, y + 23, label, { size: 15, weight: 700, anchor: 'middle', fill: edge === C.mustard ? C.olive : edge });

// 01 Part 1 at a glance
{
  let b = stat(30, 110, 195, 130, '25 marks', 'half of Paper 1') +
    stat(245, 110, 195, 130, '~400 words', 'one non-literary text') +
    stat(460, 110, 195, 130, 'No choice', 'all questions answered') +
    stat(675, 110, 195, 130, 'In Urdu', 'all answers written in Urdu', C.cream, C.mustard);
  b += card(30, 266, 410, 150, 'Expect', ['an article, a report or an opinion piece', 'on diet, technology, school and work, or the environment'], { fill: C.tealLight, edge: C.tealDark });
  b += card(460, 266, 410, 150, 'Not', ['a story or a poem', 'no questions on imagery or characters (those belong to Paper 2)'], { fill: '#fbf1ea', edge: C.rust, tfill: C.rust });
  b += T(450, 458, 'Topic areas', { size: 19, weight: 700, anchor: 'middle' });
  ['health and fitness', 'the world of youth', 'education and training', 'the world we live in'].forEach((s, i) => {
    b += `<rect x="${30 + i * 213}" y="476" width="201" height="52" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + T(130 + i * 213, 508, s, { size: 16, anchor: 'middle' });
  });
  b += T(450, 570, 'You are asked what the writer says, why, how the ideas connect, and what the writer thinks.', { size: 17, fill: C.muted, anchor: 'middle' });
  add('01-part-1-at-a-glance',
    SV(600, 'Part 1 Reading at a glance', b),
    'Part 1 is worth 25 marks, half of Paper 1: one non-literary text of about 400 words, no choice of questions, and all answers in Urdu. The text is an article, report or opinion piece, not a story or poem, drawn from four topic areas.',
    'A factual text, compulsory questions, and every answer in Urdu.',
    '## What Part 1 contains');
}

// 02 The four reading objectives
{
  let b = '', y = 110;
  const rows = [
    ['R1', 'Understand and convey information', 'Find a fact and report it so a reader who has not seen the passage understands it.', ['مضمون کے مطابق ... کب شروع ہوا؟'], 'locate one detail'],
    ['R2', 'Order and present facts, ideas, opinions', 'Put steps, causes or events in the writer\'s order; tell fact from opinion.', [], ''],
    ['R3', 'Select what is relevant', 'Test each detail against the key word of the question; a true but irrelevant point earns nothing.', ['وجوہات، نقصانات، اقدامات، فرق'], 'key words to underline'],
    ['R4', 'Implicit meanings and attitudes', 'Infer the attitude from word choice and tone; name it and point to the words that show it.', [], ''],
  ];
  rows.forEach(([r, h, d, ur, g], i) => {
    const hasU = ur.length > 0;
    const H = hasU ? 128 : 104;
    const tw = hasU ? 370 : 720;
    b += panel(30, y, 840, H) + `<circle cx="80" cy="${y + H / 2}" r="30" fill="${i % 2 ? C.cream : C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(80, y + H / 2 + 8, r, { size: 22, weight: 700, anchor: 'middle' });
    b += T(132, y + 40, h, { size: 20, weight: 700 }) + para(132, y + 70, d, tw, { size: 16, fill: C.muted, lh: 21 }).s;
    if (hasU) {
      b += `<rect x="516" y="${y + 14}" width="338" height="${H - 28}" rx="10" fill="${C.tealLight}"/>`;
      b += U(840, y + 66, ur[0], { size: 22 }) + T(840, y + 100, g, { size: 15, fill: C.tealDark, anchor: 'end', italic: true });
    }
    y += H + 12;
  });
  add('02-four-objectives',
    SV(y + 18, 'Four reading objectives, four kinds of question', b),
    'R1 asks you to find and convey a fact, as in مضمون کے مطابق ... کب شروع ہوا؟; R2 to order ideas and tell fact from opinion; R3 to select only what fits the question\'s key word, such as وجوہات or نقصانات; R4 to infer the writer\'s attitude from word choice and tone.',
    'Each objective points to a different kind of question and answer.',
    '## The four reading objectives in practice');
}

// 03 Fact, opinion and attitude signals
{
  let b = '';
  b += panel(30, 110, 410, 196, C.tealLight, C.tealDark) + tag(52, 128, 'FACT', C.panel, C.tealDark) + U(420, 214, 'فنی اداروں میں داخلے بڑھ رہے ہیں', { size: 25 }) + T(420, 262, 'presented as fact', { size: 16, fill: C.tealDark, anchor: 'end', italic: true });
  b += panel(460, 110, 410, 196, C.cream, C.mustard) + tag(482, 128, 'OPINION', C.panel, C.mustard) + U(850, 214, 'ہر محنت قابلِ احترام ہے', { size: 25 }) + T(850, 262, 'a judgement', { size: 16, fill: C.olive, anchor: 'end', italic: true });
  const tb1 = table(30, 330, [{ w: 410, head: 'Opinion signals (R2)', ur: true, uanchor: 'middle' }, { w: 430, head: 'Attitude words (R4)', ur: true, uanchor: 'middle' }], [
    [{ u: 'خیال ہے', g: 'is of the view' }, { u: 'افسوس کی بات یہ ہے', g: 'the sad thing is' }],
    [{ u: 'رائے میں', g: 'in the opinion of' }, { u: 'خوش آئند', g: 'welcome' }],
    [{ u: 'چاہیے', g: 'should' }, { u: 'بدقسمتی سے', g: 'unfortunately' }],
    [{ u: 'یوں لگتا ہے', g: 'it seems' }, { u: 'آخرکار', g: 'at last' }],
  ], { us: 25 });
  let y = 330 + tb1.h + 22;
  b += tb1.s + panel(30, y, 840, 108, '#fbf1ea', C.rust) + T(54, y + 40, 'Trap: a reported view is not a fact', { size: 19, weight: 700, fill: C.rust }) +
    T(54, y + 74, 'Report it as the teachers\' view,', { size: 17, fill: C.muted }) + T(54, y + 96, 'not as a fact stated by the writer.', { size: 17, fill: C.muted }) + U(846, y + 72, 'اساتذہ کا خیال ہے', { size: 26, fill: C.rust });
  add('03-fact-opinion-attitude',
    SV(y + 136, 'Fact, opinion and attitude', b),
    'فنی اداروں میں داخلے بڑھ رہے ہیں is presented as fact, while ہر محنت قابلِ احترام ہے is a judgement. Opinions are signalled by خیال ہے، رائے میں، چاہیے and یوں لگتا ہے; attitude by words such as افسوس کی بات یہ ہے، خوش آئند، بدقسمتی سے and آخرکار.',
    'Signal words separate opinion from fact and reveal the writer\'s attitude.',
    '## The four reading objectives in practice');
}

// 04 Answer length follows the tariff
{
  let b = '';
  const cols = [
    ['1 mark', 'a phrase or a short sentence', 'one located point', 1],
    ['2 marks', 'two separate points, or a point plus its reason', 'link them so the second is visible', 2],
    ['3+ marks', 'a short paragraph', 'each mark has its own clause; count points against marks', 3],
  ];
  cols.forEach(([m, d, n, k], i) => {
    const x = 30 + i * 286;
    b += panel(x, 110, 268, 380, i === 1 ? C.cream : C.panel, i === 1 ? C.mustard : C.panelEdge);
    b += T(x + 134, 152, m, { size: 26, weight: 700, anchor: 'middle' });
    for (let j = 0; j < k; j++) b += `<rect x="${x + 34}" y="${178 + j * 40}" width="200" height="28" rx="6" fill="${C.teal}"/>` + T(x + 134, 198 + j * 40, `point ${j + 1}`, { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
    b += para(x + 134, 316, d, 230, { size: 17, anchor: 'middle', weight: 600, lh: 23 }).s;
    b += para(x + 134, 384, n, 230, { size: 16, anchor: 'middle', fill: C.muted, lh: 21 }).s;
  });
  b += U(512, 470, 'کیونکہ', { size: 25, anchor: 'middle', fill: C.olive }) + U(392, 470, 'اس لیے کہ', { size: 25, anchor: 'middle', fill: C.olive });
  b += card(30, 514, 410, 112, 'Too long', ['Four lines for a 1-mark question waste time needed for Part 2.'], { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, size: 16, tsize: 19 });
  b += card(460, 514, 410, 112, 'Too short', ['One line for a 4-mark question gives away marks you could earn.'], { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, size: 16, tsize: 19 });
  add('04-answer-length',
    SV(654, 'Let the tariff decide the length', b),
    'Three answer sizes: one mark needs a phrase or short sentence with one point; two marks need two points or a point and its reason, linked by کیونکہ or اس لیے کہ; three or more marks need a short paragraph with a clause per mark.',
    'One mark, one point: count your points against the marks.',
    '## Matching answer length to the question');
}

// 05 Three ways into your own words
{
  let b = '', y = 110;
  const rows = [
    ['Change the word', 'keep the meaning', 'کم تر سمجھا جاتا تھا', 'اسے حقیر جانا جاتا تھا', 'was thought lesser', 'was looked down on'],
    ['Change the grammar', 'noun phrase to verb clause', 'داخلوں میں اضافہ', 'زیادہ طلبہ داخلہ لے رہے ہیں', 'an increase in admissions', 'more students are enrolling'],
    ['Change the angle', 'report it from the other side', 'روزگار جلد مل جاتا ہے', 'انھیں نوکری کے لیے زیادہ انتظار نہیں کرنا پڑتا', 'work is found quickly', 'they need not wait long for a job'],
  ];
  rows.forEach(([m, s, a, r, ga, gr], i) => {
    const H = 176;
    b += panel(30, y, 840, H) + badge(66, y + 34, 18, String(i + 1), C.cream);
    b += T(98, y + 41, m, { size: 19, weight: 700 }) + T(98 + m.length * 11.2 + 12, y + 41, s, { size: 16, fill: C.muted });
    b += `<rect x="50" y="${y + 60}" width="350" height="100" rx="10" fill="${C.bg}"/>` + T(64, y + 148, 'Passage', { size: 15, weight: 700, fill: C.muted }) + U(386, y + 108, a, { size: 24 }) + T(386, y + 148, ga, { size: 15, fill: C.muted, anchor: 'end', italic: true });
    b += harrow(404, 436, y + 110, { w: 3 });
    b += `<rect x="440" y="${y + 60}" width="410" height="100" rx="10" fill="${C.tealLight}"/>` + T(454, y + 148, 'Your words', { size: 15, weight: 700, fill: C.tealDark }) + U(836, y + 108, r, { size: r.length > 30 ? 22 : 24 }) + T(836, y + 148, gr, { size: 15, fill: C.tealDark, anchor: 'end', italic: true });
    y += H + 12;
  });
  b += panel(30, y + 6, 840, 92, C.cream, C.mustard) + T(54, y + 46, 'Technical words with no simple equivalent can stay:', { size: 18, weight: 700 }) + U(846, y + 66, 'فنی تعلیم', { size: 26 }) +
    T(54, y + 76, 'the test is whether the sentence is built by you.', { size: 16, fill: C.muted });
  add('05-own-words',
    SV(y + 126, 'Three ways into your own words', b),
    'Three rewording methods with the guide\'s examples: change the word (کم تر سمجھا جاتا تھا becomes اسے حقیر جانا جاتا تھا), change the grammar (داخلوں میں اضافہ becomes زیادہ طلبہ داخلہ لے رہے ہیں) and change the angle (روزگار جلد مل جاتا ہے becomes انھیں نوکری کے لیے زیادہ انتظار نہیں کرنا پڑتا).',
    'Rebuild the sentence yourself; technical terms such as فنی تعلیم can stay.',
    '## Putting answers into your own words');
}

// 06 Worked example: how each answer earns its marks
{
  let b = '', y = 110;
  const qs = [
    ['(a)', '[1]', 'R1', 'پہلے والدین فنی کام کے بارے میں کیا سوچتے تھے؟', [['وہ اسے ڈاکٹری یا انجینئری سے کم عزت والا کام سمجھتے تھے۔', 'one located point, reworded']]],
    ['(b)', '[2]', 'two points', 'بعض اساتذہ کیا تجویز کرتے ہیں اور اس کا مقصد کیا ہے؟', [['ان کے نزدیک ہنر کے ساتھ زبان اور حساب کی بنیادی تعلیم بھی دی جائے،', 'point 1: the suggestion'], ['تاکہ طلبہ بعد میں خود اپنا کام چلا سکیں۔', 'point 2: its purpose']]],
    ['(c)', '[2]', 'R4', 'آخری جملے سے مصنف کے رویّے کے بارے میں کیا پتا چلتا ہے؟', [['مصنف اس تبدیلی سے خوش ہے۔', 'mark 1: names the attitude'], ['لفظ "آخرکار" بتاتا ہے کہ وہ مدت سے اس سوچ کا انتظار کر رہا تھا اور اب اسے اطمینان ہے۔', 'mark 2: evidence from the text']]],
  ];
  qs.forEach(([q, m, o, qu, parts]) => {
    const H = 96 + parts.length * 106;
    b += panel(30, y, 840, H);
    b += T(54, y + 44, q, { size: 20, weight: 700 }) + tag(96, y + 20, m, C.cream, C.mustard, 56) + T(166, y + 44, o, { size: 16, fill: C.muted, weight: 600 });
    b += U(846, y + 58, qu, { size: 24 });
    parts.forEach(([u, g], k) => {
      const py = y + 86 + k * 106;
      b += `<rect x="50" y="${py}" width="800" height="96" rx="10" fill="${C.tealLight}"/>` + U(836, py + 46, u, { size: 22 });
      b += T(836, py + 84, g, { size: 15, fill: C.tealDark, anchor: 'end', italic: true, weight: 600 });
      if (g.startsWith('point 2')) b += T(68, py + 44, 'joined by', { size: 16, fill: C.tealDark, weight: 600 }) + U(150, py + 48, 'تاکہ', { size: 24, anchor: 'start', fill: C.olive });
    });
    y += H + 14;
  });
  add('06-worked-answers',
    SV(y + 14, 'Worked example: one point per mark', b),
    'Three answers to the worked passage. (a) [1] gives one reworded point. (b) [2] gives the teachers\' suggestion and its purpose, joined by تاکہ. (c) [2] names the writer\'s attitude, pleasure at the change, and supports it with the word آخرکار.',
    'Each mark is a visible point: a suggestion and its purpose, an attitude and its evidence.',
    '## Worked example');
}

// 07 Exam technique and question words
{
  const st = steps(110, [
    ['Read the questions first', 'Then read the passage knowing what to look for.'],
    ['Read the passage straight through', 'For its overall argument and the writer\'s stance.'],
    ['Find the lines for each question', 'Read the sentence before and after: the reason is often in the next sentence.'],
    ['Mark the question word and tariff', 'Then write that number of points. Questions usually follow the passage order.'],
    ['Watch the clock', '1 hour 30 minutes for 50 marks: Part 1 should take not much more than half.'],
  ], { minH: 82, gap: 10 });
  let y = 110 + st.h + 24, b = st.s;
  b += T(450, y + 4, 'The question word sets the task', { size: 19, weight: 700, anchor: 'middle' });
  [['کیوں', 'a reason'], ['کیسے', 'a method'], ['کیا فرق ہے', 'both sides of the comparison']].forEach(([u, g], i) => {
    b += chip(30 + i * 286, y + 22, 268, u, g, { h: 108, us: 27, ub: 56, fill: i === 2 ? C.cream : C.panel, edge: i === 2 ? C.mustard : C.panelEdge });
  });
  add('07-exam-technique',
    SV(y + 160, 'Exam technique for Part 1', b),
    'Five steps: read the questions first, read the passage through, find the lines and read around them, mark the question word and tariff, and keep Part 1 to about half of the 1 hour 30 minutes. کیوں asks for a reason, کیسے for a method and کیا فرق ہے for both sides of a comparison.',
    'Questions first, then the passage, then one point per mark.',
    '## Exam technique');
}
