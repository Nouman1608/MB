import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-urdu-language-9264-life-school-college';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (shared look across the OxfordAQA / Edexcel Urdu set) ----
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { const c = out[out.length - 1]; if (c && (c + ' ' + w).length > n) out.push(w); else out[out.length - 1] = c ? c + ' ' + w : w; } return out; };
const wt = (x, y, s, n, opts = {}, lh) => tl(x, y, wrap(s, n), opts, lh || (opts.size || 18) * 1.3);
const box = (x, y, w, h, fill, edge, sw = 2.5, rx = 12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;

// Urdu text: always its own <text>, right-aligned or centred, Nastaliq
const u = (x, y, s, { size = 26, anchor = 'end', fill = C.ink, weight = 400 } = {}) =>
  `<text x="${x}" y="${y}" font-family="Noto Nastaliq Urdu" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">\u200F${s}\u200F</text>`; // RLM marks keep leading/trailing punctuation on the correct side
// Urdu-over-English vocabulary chip
const vchip = (x, y, w, ur, en, fill = C.panel, edge = C.panelEdge) => box(x, y, w, 100, fill, edge, 2.5, 12) + u(x + w / 2, y + 46, ur, { size: 24, anchor: 'middle' }) + t(x + w / 2, y + 84, en, { size: 15, anchor: 'middle', fill: C.muted });
// Sentence row (stacked): English label top-left (+ extra markup), Urdu example right-aligned on its own line, English gloss beneath
const srow = (y, label, ur, gloss, { extra = '', fill = C.panel, edge = C.panelEdge, size = 24, h = 140 } = {}) =>
  box(30, y, 840, h, fill, edge, 2.5, 14) + t(52, y + 38, label, { size: 19, weight: 700 }) + extra +
  u(846, y + h - 52, ur, { size }) + t(846, y + h - 16, gloss, { size: 16, anchor: 'end', fill: C.muted, italic: true });
const tick = (x, y) => `<circle cx="${x}" cy="${y}" r="15" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + path(`M${x - 7},${y} l5,6 l10,-12`, { stroke: C.tealDark, w: 3.5 });
const cross = (x, y) => `<circle cx="${x}" cy="${y}" r="15" fill="#f6ece4" stroke="${C.rust}" stroke-width="2.5"/>` + path(`M${x - 6},${y - 6} l12,12 m0,-12 l-12,12`, { stroke: C.rust, w: 3.5 });

// 01 The school as a place
{
  let b = '';
  const strands = [
    ['Facilities', 'library, laboratories, sports field, canteen', [['لائبریری', 'library'], ['لیبارٹری', 'laboratory'], ['کینٹین', 'canteen']]],
    ['Uniform and rules', 'what you must and must not do; are they fair?', [['وردی / یونیفارم', 'uniform'], ['اصول / قواعد', 'rules'], ['اجازت', 'permission']]],
    ['Routine', 'start and end of the day, assembly, breaks', [['اسمبلی', 'assembly'], ['وقفہ', 'break'], ['حاضری', 'attendance']]],
    ['School life', 'clubs, trips, sports day, comparing schools', [['کلب', 'club'], ['تعلیمی دورہ', 'school trip'], ['کھیلوں کا دن', 'sports day']]],
  ];
  strands.forEach(([h, s, words], i) => {
    const y = 110 + i * 146, hi = i === 1;
    b += box(30, y, 840, 132, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 2.5, 14) + t(52, y + 40, h, { size: 21, weight: 700 }) + wt(52, y + 70, s, 30, { size: 16, fill: C.muted }, 21);
    words.forEach(([ur, en], j) => { b += vchip(704 - j * 158, y + 16, 150, ur, en, C.panel, hi ? C.olive : C.panelEdge); });
  });
  b += box(30, 698, 840, 52, C.tealLight, C.tealDark, 2) + t(450, 731, 'Subjects and your opinions of them belong to Topic 1, My studies', { size: 17, weight: 600, anchor: 'middle' });
  add('01-school-as-a-place',
    svg(900, 776, 'Life at school: the place, not the subjects', b),
    'Four strands with Urdu words: facilities (لائبریری, لیبارٹری, کینٹین), uniform and rules (وردی / یونیفارم, اصول / قواعد, اجازت), routine (اسمبلی, وقفہ, حاضری) and school life (کلب, تعلیمی دورہ, کھیلوں کا دن).',
    'Facilities, rules, routine and school life; subjects belong to My studies.',
    '## What this topic covers');
}

// 02 Four ways to talk about rules
{
  let b = '';
  const mk = (y, ur, note) => u(360, y + 42, ur, { size: 22, anchor: 'middle', fill: C.tealDark }) + (note ? t(480, y + 38, note, { size: 16, fill: C.muted }) : '');
  const rows = [
    ['Have to', 'ہمیں وردی پہننی پڑتی ہے۔', 'We have to wear a uniform.', (y) => mk(y, 'ہمیں ... پڑنا', 'agrees with a feminine object')],
    ['Not allowed', 'کلاس میں موبائل فون استعمال کرنے کی اجازت نہیں ہے۔', 'Using mobile phones in class is not allowed.', (y) => mk(y, 'کی اجازت نہیں ہے', 'oblique infinitive before it')],
    ['Should', 'طلبہ کو ایک دوسرے کی عزت کرنی چاہیے۔', 'Students should respect one another.', (y) => mk(y, 'کو ... چاہیے', '')],
    ['Judging a rule', 'میرے خیال میں یہ اصول مناسب ہے کیونکہ ...', 'I think this rule is reasonable because ...', (y) => mk(y, 'مناسب / غیر منصفانہ', 'reasonable / unfair'), C.cream, C.olive],
  ];
  rows.forEach(([l, ur, g, ex, fill, edge], i) => { const y = 110 + i * 152; b += srow(y, l, ur, g, { extra: ex(y), fill, edge }); });
  add('02-talking-about-rules',
    svg(900, 730, 'Four ways to talk about rules', b),
    'Four Urdu structures for rules, with glosses: obligation with ہمیں ... پڑنا (ہمیں وردی پہننی پڑتی ہے), prohibition with کی اجازت نہیں ہے, advice with کو ... چاہیے, and a judgement that a rule is مناسب or غیر منصفانہ with کیونکہ.',
    'Must, may not, should, and is it fair: four kinds of rule language.',
    '## Structures that carry this topic');
}

// 03 Model paragraph anatomy
{
  let b = t(450, 128, 'Task: facilities, your opinion of one rule, and what you would change', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  const rows = [
    ['Facilities', '', 'اس میں ایک بڑی لائبریری اور ... ہے'],
    ['Obligation + opinion', '', 'ہمیں ... وردی پہننی پڑتی ہے، جو مجھے پسند نہیں کیونکہ ...'],
    ['Prohibition', '', '... کی اجازت نہیں ہے'],
    ['Judgement of a rule', '', 'میرے خیال میں یہ اصول ٹھیک ہے کیونکہ ...'],
    ['Change', 'conditional', 'اگر ... ہوتا تو ... ہوتا'],
  ];
  rows.forEach(([h, s, ur], i) => {
    const y = 150 + i * 96, hi = i === 4;
    b += box(30, y, 840, 82, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 2.5, 12) + badge(64, y + 41, 19, String(i + 1), hi ? C.mustard : C.cream) +
      t(96, y + (s ? 36 : 48), h, { size: 18, weight: 700 }) + (s ? t(96, y + 61, s, { size: 15, fill: C.muted }) : '') + u(850, y + 54, ur, { size: 23 });
  });
  b += t(450, 662, 'Three ways to talk about rules, then a proposal: range as well as coverage', { size: 17, weight: 600, anchor: 'middle' });
  add('03-model-paragraph-anatomy',
    svg(900, 690, 'What the model paragraph does', b),
    'Five moves in the model answer with their Urdu: facilities, an obligation with an opinion (ہمیں ... وردی پہننی پڑتی ہے، جو مجھے پسند نہیں کیونکہ), a prohibition (کی اجازت نہیں ہے), a judgement of a rule, and a conditional change (اگر ... ہوتا تو ... ہوتا).',
    'Obligation, prohibition and judgement, then a proposal for change.',
    '## Worked example 1: describing your school and a rule');
}

// 04 Reading: three marks, three points
{
  let b = t(450, 128, 'Are students allowed to bring mobile phones to school? Explain your answer. [3]', { size: 17, weight: 600, anchor: 'middle' });
  const rows = [
    ['Yes, they are allowed', 'permission', 'ہمارے اسکول میں موبائل فون لانے کی اجازت ہے،', C.panel, C.panelEdge],
    ['But they must hand them in', 'but ... have to', 'لیکن انہیں صبح دفتر میں جمع کرانا پڑتا ہے۔', C.cream, C.olive],
    ['They get them back at the end of the day', 'not "in the holidays"', 'چھٹی کے وقت طلبہ اپنے فون واپس لے لیتے ہیں۔', C.tealLight, C.tealDark],
  ];
  rows.forEach(([h, s, ur, fill, edge], i) => {
    const y = 150 + i * 130;
    b += box(30, y, 840, 116, fill, edge, 2.5, 12) + t(52, y + 34, h, { size: 18, weight: 700 }) + t(846, y + 34, '[1]', { size: 19, weight: 700, anchor: 'end', fill: C.olive }) +
      t(52, y + 92, s, { size: 15, fill: C.muted, italic: true }) + u(846, y + 88, ur, { size: 24 });
  });
  b += box(30, 548, 840, 80, '#f6ece4', C.rust, 2.5, 12) + t(52, 582, 'A bare "yes" earns one mark at most:', { size: 18, weight: 700, fill: C.rust }) + t(52, 610, '"explain" and three marks signal three points', { size: 17 });
  b += u(846, 600, 'چھٹی', { size: 30, fill: C.tealDark, anchor: 'end' }) + t(770, 592, 'holiday or end of the day?', { size: 15, fill: C.muted, anchor: 'end' }) + t(770, 612, 'decide from context', { size: 15, fill: C.muted, anchor: 'end' });
  add('04-three-marks-three-points',
    svg(900, 656, 'Permission with a condition', b),
    'The reading text in three clauses, one mark each: phones are allowed (اجازت ہے), but they must be handed in at the office (لیکن ... جمع کرانا پڑتا ہے), and they are collected at چھٹی کے وقت, the end of the school day rather than the holidays.',
    'Three marks, three points: the permission, the condition and the end of the day.',
    '## Worked example 3: a short reading question');
}

// 05 Common mistakes as wrong / right pairs
{
  let b = '';
  const pairs = [
    ['The person needs the oblique form: us, not we', 'ہم وردی پہننی پڑتی ہے', 'ہمیں وردی پہننی پڑتی ہے۔'],
    ['Oblique infinitive before the permission phrase', 'استعمال کرنا کی اجازت', 'استعمال کرنے کی اجازت'],
    ['Going takes no ergative', 'ہماری جماعت نے عجائب گھر گئی', 'ہماری جماعت عجائب گھر گئی'],
  ];
  pairs.forEach(([h, bad, good], i) => {
    const y = 110 + i * 178;
    b += panel(30, y, 840, 164) + t(52, y + 36, h, { size: 19, weight: 700 }) +
      box(52, y + 56, 380, 90, '#f6ece4', C.rust, 2, 10) + cross(80, y + 101) + u(416, y + 112, bad, { size: 24, fill: C.rust }) +
      arrow(440, y + 101, 462, y + 101, { w: 3 }) +
      box(468, y + 56, 380, 90, C.tealLight, C.tealDark, 2, 10) + tick(496, y + 101) + u(832, y + 112, good, { size: 24 });
  });
  add('05-common-mistakes',
    svg(900, 660, 'Three slips to check', b),
    'Three corrections: ہم وردی پہننی پڑتی ہے becomes ہمیں وردی پہننی پڑتی ہے; استعمال کرنا کی اجازت becomes استعمال کرنے کی اجازت; ہماری جماعت نے عجائب گھر گئی becomes ہماری جماعت عجائب گھر گئی.',
    'ہمیں with پڑنا, the oblique before کی اجازت, and no نے with جانا.',
    '## Common mistakes');
}
