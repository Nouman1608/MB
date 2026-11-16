import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-urdu-language-9264-technology-everyday-life';
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

// 01 Loanwords still have a gender
{
  let b = '';
  const col = (x, head, words, fill, edge) => {
    let s = box(x, 110, 410, 522, fill, edge, 2.5, 14) + t(x + 205, 148, head, { size: 22, weight: 700, anchor: 'middle' });
    words.forEach(([ur, en], i) => { s += vchip(x + 18 + (i % 2) * 190, 170 + Math.floor(i / 2) * 114, 180, ur, en); });
    return s;
  };
  b += col(30, 'Masculine', [['موبائل فون', 'mobile phone'], ['انٹرنیٹ', 'internet'], ['سوشل میڈیا', 'social media (usually)'], ['پیغام', 'message'], ['فائدہ', 'advantage'], ['نقصان', 'disadvantage, harm'], ['رابطہ', 'contact'], ['', '']].slice(0, 7), C.tealLight, C.tealDark);
  b += col(460, 'Feminine', [['ایپ', 'app (usually)'], ['ویڈیو', 'video (usually)'], ['تصویر', 'photo, picture'], ['ٹیکنالوجی', 'technology'], ['سہولت', 'convenience'], ['عادت', 'habit'], ['معلومات', 'information (f pl)'], ['لت', 'addiction']], C.cream, C.olive);
  b += box(30, 648, 840, 70, '#f6ece4', C.rust, 2.5, 12) + t(54, 690, 'Easy to recognise, but each loanword still needs its gender: that is where marks are lost', { size: 17, weight: 600 });
  add('01-loanword-genders',
    svg(900, 742, 'Loanwords still have a gender', b),
    'Masculine technology words: موبائل فون, انٹرنیٹ, سوشل میڈیا, پیغام, فائدہ, نقصان, رابطہ. Feminine: ایپ, ویڈیو, تصویر, ٹیکنالوجی, سہولت, عادت, معلومات (feminine plural) and لت.',
    'Borrowed words are easy to recognise, but each has a gender that verbs must follow.',
    '## Vocabulary');
}

// 02 With نے, the verb follows the object
{
  let b = box(30, 110, 840, 80, C.cream, C.olive, 2.5, 14) + t(54, 146, 'Past tense with the ergative marker:', { size: 19, weight: 700 }) + t(54, 174, 'the verb agrees with the object, not with you', { size: 17 }) + u(846, 160, 'میں نے', { size: 30, fill: C.olive });
  const line = (y, ok, ur, g, tag) => (ok ? tick(66, y - 10) : cross(66, y - 10)) + u(846, y, ur, { size: 28, fill: ok ? C.ink : C.rust }) + t(96, y - 4, g, { size: 17, italic: true, fill: ok ? C.muted : C.rust }) + t(96, y + 20, tag, { size: 15, fill: C.muted });
  b += panel(30, 210, 840, 330);
  b += line(282, true, 'میں نے دوست کو پیغام بھیجا', 'I sent my friend a message.', 'message is masculine');
  b += line(380, true, 'میں نے ایک تصویر پوسٹ کی', 'I posted a photo.', 'photo is feminine');
  b += line(478, false, 'میں نے ویڈیو دیکھا', 'should be the feminine form', 'video is usually feminine');
  b += box(30, 560, 840, 76, C.tealLight, C.tealDark, 2, 12) + t(54, 604, 'Right:', { size: 18, weight: 700 }) + u(846, 606, 'میں نے ویڈیو دیکھی', { size: 28 });
  add('02-ne-agrees-with-object',
    svg(900, 660, 'The verb follows the object', b),
    'With میں نے the past verb agrees with the object: میں نے دوست کو پیغام بھیجا (masculine پیغام), میں نے ایک تصویر پوسٹ کی (feminine تصویر). میں نے ویڈیو دیکھا is wrong; it should be میں نے ویڈیو دیکھی.',
    'Know each loanword’s gender: with نے, the verb agrees with it.',
    '## Structures that carry this topic');
}

// 03 Translation traps
{
  let b = box(30, 108, 840, 70, C.tealLight, C.tealDark, 2, 12) + t(450, 138, '"I use my phone every day to talk to my relatives in Pakistan."', { size: 18, italic: true, anchor: 'middle' }) +
    t(450, 164, 'Two traps: the possessive and the word order', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 196, 410, 200) + t(52, 232, 'my phone, when "I" is the subject', { size: 18, weight: 700 }) +
    cross(66, 290) + u(250, 302, 'میرا فون', { size: 28, anchor: 'middle', fill: C.rust }) + tick(66, 360) + u(250, 372, 'اپنا فون', { size: 28, anchor: 'middle' }) + t(330, 366, 'reflexive', { size: 15, fill: C.muted });
  b += panel(460, 196, 410, 200) + t(482, 232, 'Purpose: oblique + for', { size: 18, weight: 700 }) +
    u(846, 310, 'بات کرنے کے لیے', { size: 28 }) + t(846, 360, 'to talk (oblique infinitive)', { size: 15, anchor: 'end', fill: C.muted });
  b += box(30, 414, 840, 170, C.cream, C.olive, 2.5, 12) + t(54, 446, 'Answer: verb last', { size: 19, weight: 700, fill: C.olive }) +
    u(846, 500, 'میں روزانہ پاکستان میں اپنے رشتہ داروں سے بات کرنے کے لیے', { size: 26 }) + u(846, 558, 'اپنا فون استعمال کرتا ہوں۔', { size: 26 }) +
    '';
  b += t(54, 560, 'the verb comes last, not straight after the subject', { size: 15, fill: C.muted });
  add('03-translation-traps',
    svg(900, 610, 'Two translation traps', b),
    'Translating "I use my phone every day to talk to my relatives in Pakistan": use اپنا فون, not میرا فون, because the subject owns the phone; put the purpose as بات کرنے کے لیے; and put استعمال کرتا ہوں at the end.',
    'اپنا when the subject is the owner, and the verb at the end.',
    '## Worked example 1: translation into Urdu');
}

// 04 A balanced paragraph, move by move
{
  let b = t(450, 128, 'Task: is mobile technology good or bad for young people?', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  const rows = [
    ['Advantage frame', 'اس کا سب سے بڑا فائدہ یہ ہے کہ', 'its biggest advantage is that ...', C.panel, C.panelEdge],
    ['Contrast', 'دوسری طرف،', 'on the other hand, ...', C.panel, C.panelEdge],
    ['Cause and effect', 'جس کی وجہ سے ان کی نیند پوری نہیں ہوتی', 'because of which they do not get enough sleep', C.panel, C.panelEdge],
    ['Personal experience (past)', 'پچھلے مہینے میں نے سونے سے پہلے فون بند کرنا شروع کیا', 'last month I started switching my phone off before sleeping', C.panel, C.panelEdge],
    ['Conditional opinion', 'میرے خیال میں ٹیکنالوجی اچھی ہے، بشرطیکہ ہم اسے سمجھ داری سے استعمال کریں۔', 'technology is good, provided that we use it sensibly', C.cream, C.olive],
  ];
  rows.forEach(([l, ur, g, fill, edge], i) => { b += srow(148 + i * 146, (i + 1) + '. ' + l, ur, g, { fill, edge, h: 136, size: 24 }); });
  b += box(30, 888, 840, 64, '#f6ece4', C.rust, 2.5, 12) + t(54, 926, 'Weak: a list of apps in the present tense, with no evaluation, does not answer "good or bad?"', { size: 16, weight: 600 });
  add('04-balanced-paragraph',
    svg(900, 976, 'Building a balanced view', b),
    'Five moves from the model answer with their Urdu: an advantage frame, a contrast with دوسری طرف, cause and effect with جس کی وجہ سے, a personal experience in the past, and a conditional opinion with بشرطیکہ. A list of apps with no evaluation is weak.',
    'Advantage, contrast, effect, experience, then a conditional view.',
    '## Worked example 2: a balanced paragraph');
}

// 05 Exam technique: signposts and a four-part plan
{
  let b = t(54, 138, 'Reading: a disadvantage usually follows a signpost', { size: 20, weight: 700 });
  [['لیکن', 'but'], ['مگر', 'but'], ['دوسری طرف', 'on the other hand'], ['اس کے برعکس', 'on the contrary']].forEach(([ur, en], i) => { b += vchip(30 + i * 213, 156, 200, ur, en, C.cream, C.olive); });
  b += t(54, 292, 'and a why-question wants the reason after', { size: 17, fill: C.muted });
  [['کیونکہ', 'because'], ['اس لیے', 'so, therefore'], ['کی وجہ سے', 'because of']].forEach(([ur, en], i) => { b += vchip(30 + i * 213, 306, 200, ur, en); });
  b += t(54, 450, 'Writing: a four-part plan', { size: 20, weight: 700 });
  const steps = [['How you use', 'technology now'], ['One', 'advantage'], ['One', 'disadvantage'], ['A justified', 'overall view']];
  steps.forEach(([a, c], i) => {
    const x = 30 + i * 213;
    b += box(x, 470, 196, 108, i === 3 ? C.tealLight : C.panel, i === 3 ? C.tealDark : C.panelEdge, 2.5, 12) + badge(x + 28, 498, 17, String(i + 1), C.cream) +
      t(x + 98, 540, a, { size: 17, weight: 700, anchor: 'middle' }) + t(x + 98, 562, c, { size: 17, weight: 700, anchor: 'middle' });
    if (i < 3) b += arrow(x + 198, 524, x + 211, 524, { w: 3 });
  });
  b += box(30, 594, 840, 70, C.panel, C.panelEdge, 2.5, 12) + t(54, 636, '+ one past or future sentence:', { size: 17, weight: 600 }) +
    u(520, 640, 'پہلے ... تھا', { size: 25, anchor: 'middle', fill: C.tealDark }) + t(610, 636, 'or', { size: 17, anchor: 'middle' }) + u(740, 640, 'مستقبل میں ... ہو گا', { size: 25, anchor: 'middle', fill: C.tealDark });
  add('05-signposts-and-plan',
    svg(900, 690, 'Exam technique for technology', b),
    'Reading signposts that introduce a disadvantage (لیکن, مگر, دوسری طرف, اس کے برعکس) and the reason-markers کیونکہ, اس لیے and کی وجہ سے. A four-part writing plan: how you use technology now, one advantage, one disadvantage and a justified view, plus a sentence with پہلے ... تھا or مستقبل میں ... ہو گا.',
    'Find the signpost in reading; plan four parts in writing and add another tense.',
    '## Exam technique');
}

// 06 Technology across the course
{
  let b = '';
  const rows = [
    ['Theme 2: charity', 'by means of', 'کے ذریعے', ['سوشل میڈیا کے ذریعے ہم نے سیلاب زدگان کے لیے چندہ جمع کیا۔'], 'Through social media we raised money for flood victims.', C.panel, C.panelEdge],
    ['Theme 3: study', 'then-and-now contrast', 'لیکن', ['آن لائن کلاسوں سے پڑھائی آسان ہو گئی ہے،', 'لیکن اساتذہ سے براہِ راست سوال پوچھنا مشکل ہو گیا ہے۔'], 'Online classes have made studying easier, but asking teachers directly has become harder.', C.cream, C.olive],
    ['Theme 2: environment', 'instead of', 'کے بجائے', ['پرانے فون پھینکنے کے بجائے انہیں ری سائیکل کرنا چاہیے۔'], 'Instead of throwing old phones away, we should recycle them.', C.tealLight, C.tealDark],
  ];
  let y = 110;
  rows.forEach(([h, s, key, lines, g, fill, edge]) => {
    const hgt = 100 + lines.length * 52;
    b += box(30, y, 840, hgt, fill, edge, 2.5, 14) + t(52, y + 38, h, { size: 20, weight: 700 }) + t(52, y + 64, s, { size: 16, fill: C.muted }) +
      u(380, y + 44, key, { size: 24, anchor: 'middle', fill: C.tealDark });
    lines.forEach((ln, j) => { b += u(846, y + 102 + j * 52, ln, { size: 25 }); });
    b += t(846, y + hgt - 16, g, { size: 16, anchor: 'end', italic: true, fill: C.muted });
    y += hgt + 16;
  });
  add('06-technology-across-themes',
    svg(900, y + 14, 'Technology beyond Theme 1', b),
    'Three linking sentences that reuse technology vocabulary in other themes: raising money for flood victims through social media (کے ذریعے), online classes making study easier but questions harder (لیکن), and recycling old phones instead of throwing them away (کے بجائے).',
    'Technology words return in charity, study and environment topics.',
    '## How this topic connects to the rest of the course');
}
