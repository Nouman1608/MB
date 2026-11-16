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
    let s = box(x, 110, 410, 500, fill, edge, 2.5, 14) + t(x + 205, 148, head, { size: 22, weight: 700, anchor: 'middle' });
    words.forEach(([ur, en], i) => { s += vchip(x + 18 + (i % 2) * 190, 170 + Math.floor(i / 2) * 114, 180, ur, en); });
    return s;
  };
  b += col(30, 'Masculine', [['موبائل فون', 'mobile phone'], ['انٹرنیٹ', 'internet'], ['سوشل میڈیا', 'social media (usually)'], ['پیغام', 'message'], ['فائدہ', 'advantage'], ['نقصان', 'disadvantage, harm'], ['رابطہ', 'contact'], ['', '']].slice(0, 7), C.tealLight, C.tealDark);
  b += col(460, 'Feminine', [['ایپ', 'app (usually)'], ['ویڈیو', 'video (usually)'], ['تصویر', 'photo, picture'], ['ٹیکنالوجی', 'technology'], ['سہولت', 'convenience'], ['عادت', 'habit'], ['معلومات', 'information (f pl)'], ['لت', 'addiction']], C.cream, C.olive);
  b += box(30, 626, 840, 70, '#f6ece4', C.rust, 2.5, 12) + t(54, 668, 'Easy to recognise, but each loanword still needs its gender: that is where marks are lost', { size: 17, weight: 600 });
  add('01-loanword-genders',
    svg(900, 720, 'Loanwords still have a gender', b),
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
