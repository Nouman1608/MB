import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-urdu-language-9264-my-studies';
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

// 01 Gender and number of subjects
{
  let b = '';
  const rows = [
    ['Masculine noun', 'subject', 'مضمون', 'یہ مضمون اچھا لگتا ہے', 'This subject seems good.', C.panel, C.panelEdge],
    ['Feminine subjects', 'maths, science, history, English, Urdu', 'ریاضی', 'مجھے ریاضی اچھی لگتی ہے', 'I like maths.', C.cream, C.olive],
    ['Plural thing liked', 'science experiments', 'تجربات', 'مجھے سائنس کے تجربات پسند ہیں۔', 'I like science experiments.', C.tealLight, C.tealDark],
  ];
  rows.forEach(([h, s, key, ur, g, fill, edge], i) => {
    const y = 110 + i * 150;
    b += box(30, y, 840, 136, fill, edge, 2.5, 14) + t(52, y + 38, h, { size: 20, weight: 700 }) + t(52, y + 64, s, { size: 16, fill: C.muted }) +
      u(150, y + 112, key, { size: 28, anchor: 'middle', fill: C.tealDark }) + u(846, y + 70, ur, { size: 27 }) + t(846, y + 112, g, { size: 16, anchor: 'end', italic: true, fill: C.muted });
  });
  b += box(30, 566, 840, 66, '#f6ece4', C.rust, 2.5, 12) + cross(66, 599) + u(320, 608, 'مجھے ریاضی اچھا لگتا ہے', { size: 25, anchor: 'middle', fill: C.rust }) + t(470, 604, 'maths is feminine, so the feminine form', { size: 17, weight: 600 });
  b += box(30, 646, 840, 104, C.panel, C.panelEdge, 2.5, 12) + t(52, 690, 'Singular and plural', { size: 18, weight: 700 }) +
    u(560, 700, 'مضمون', { size: 26, anchor: 'middle' }) + t(560, 736, 'one subject', { size: 15, anchor: 'middle', fill: C.muted }) +
    u(760, 700, 'مضامین', { size: 26, anchor: 'middle' }) + t(760, 736, 'subjects', { size: 15, anchor: 'middle', fill: C.muted });
  add('01-gender-of-subjects',
    svg(900, 776, 'Agreement with school subjects', b),
    'مضمون is masculine (یہ مضمون اچھا لگتا ہے), subjects such as ریاضی are feminine (مجھے ریاضی اچھی لگتی ہے), and a plural thing liked takes ہیں (مجھے سائنس کے تجربات پسند ہیں). مجھے ریاضی اچھا لگتا ہے is wrong; the plural of مضمون is مضامین.',
    'The verb and adjective agree with the subject being described, not with you.',
    '## Key vocabulary');
}

// 02 Two opinion patterns, never mixed
{
  let b = '';
  const pat = (x, head, ur, g, fill, edge) => box(x, 110, 410, 190, fill, edge, 2.5, 14) + t(x + 22, 146, head, { size: 19, weight: 700 }) +
    u(x + 388, 224, ur, { size: 30 }) + t(x + 388, 272, g, { size: 16, anchor: 'end', italic: true, fill: C.muted });
  b += pat(30, 'Pattern 1: to me + like', 'مجھے ریاضی پسند ہے۔', 'I like maths.', C.tealLight, C.tealDark);
  b += pat(460, 'Pattern 2: I + like + do', 'میں ریاضی پسند کرتا ہوں', 'I like maths.', C.tealLight, C.tealDark);
  b += box(30, 316, 840, 74, '#f6ece4', C.rust, 2.5, 12) + cross(66, 353) + u(260, 362, 'میں ریاضی پسند ہے', { size: 26, anchor: 'middle', fill: C.rust }) + t(380, 358, 'mixes the two patterns', { size: 18, weight: 600 });
  b += t(54, 432, 'Vary it with the same structure', { size: 19, weight: 700 });
  b += srow(448, 'With seem / find', 'مجھے تاریخ دلچسپ لگتی ہے۔', 'I find history interesting.', { extra: u(320, 490, 'لگنا', { size: 24, anchor: 'middle', fill: C.tealDark }) });
  b += srow(600, 'Always add a reason', 'مجھے جغرافیہ زیادہ پسند نہیں کیونکہ اس میں بہت سے نقشے یاد کرنے پڑتے ہیں۔', 'I don’t much like geography because you have to memorise a lot of maps.', { fill: C.cream, edge: C.olive, size: 23, extra: u(320, 642, 'کیونکہ', { size: 24, anchor: 'middle', fill: C.olive }) });
  add('02-opinion-patterns',
    svg(900, 770, 'Two ways to say you like a subject', b),
    'Two correct patterns: مجھے ریاضی پسند ہے and میں ریاضی پسند کرتا ہوں; mixing them (میں ریاضی پسند ہے) is wrong. لگنا works like پسند (مجھے تاریخ دلچسپ لگتی ہے), and every opinion needs a reason with کیونکہ.',
    'Pick one pattern and keep it; then give the reason.',
    '## Structures that carry this topic');
}

// 03 Model paragraph anatomy
{
  let b = t(450, 128, 'Task: favourite and least favourite subjects with reasons, and a comparison', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  const rows = [
    ['Favourite + reason', 'میرا پسندیدہ مضمون ... ہے کیونکہ ...'],
    ['Timetable fact', 'ہر ہفتے ... چار پیریڈ ہوتے ہیں'],
    ['Contrast + dislike', 'اس کے برعکس ... پسند نہیں کیونکہ ...'],
    ['Superlative + concession', 'سب سے مفید ... اگرچہ یہ مشکل ہے'],
  ];
  rows.forEach(([h, ur], i) => {
    const y = 150 + i * 100, hi = i === 2 || i === 3;
    b += box(30, y, 840, 86, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 2.5, 12) + badge(64, y + 43, 19, String(i + 1), hi ? C.mustard : C.cream) +
      t(96, y + 50, h, { size: 19, weight: 700 }) + u(846, y + 56, ur, { size: 25 });
  });
  b += box(30, 560, 840, 84, C.tealLight, C.tealDark, 2, 12) + t(54, 594, 'Connectives beyond because:', { size: 18, weight: 700 }) +
    u(420, 600, 'اس کے برعکس', { size: 25, anchor: 'middle', fill: C.olive }) + t(420, 630, 'by contrast', { size: 15, anchor: 'middle', fill: C.muted }) +
    u(640, 600, 'اگرچہ', { size: 25, anchor: 'middle', fill: C.olive }) + t(640, 630, 'although', { size: 15, anchor: 'middle', fill: C.muted });
  add('03-model-paragraph-anatomy',
    svg(900, 670, 'What the model paragraph does', b),
    'Four moves in the model answer with their Urdu frames: a favourite subject with کیونکہ, a timetable fact with ہوتے ہیں, a contrasting dislike with اس کے برعکس, and a superlative with a concession (سب سے مفید ... اگرچہ یہ مشکل ہے).',
    'Every opinion has a reason, and اس کے برعکس and اگرچہ add range.',
    '## Worked example 1: writing about your subjects');
}

// 04 Reading: old view, reason, new view
{
  let b = t(450, 128, 'How has the writer’s opinion of maths changed, and why? [3]', { size: 18, weight: 600, anchor: 'middle' });
  const rows = [
    ['Old view', 'always used to find maths difficult', 'مجھے ریاضی ہمیشہ مشکل لگتی تھی،', C.panel, C.panelEdge],
    ['Reason', 'the new teacher explains every lesson with easy examples', 'لیکن اس سال ہمارے نئے استاد ہر سبق کو آسان مثالوں سے سمجھاتے ہیں۔', C.cream, C.olive],
    ['New view', 'now the subject they like most', 'اب مجھے ریاضی سب سے زیادہ پسند ہے۔', C.tealLight, C.tealDark],
  ];
  rows.forEach(([h, g, ur, fill, edge], i) => {
    const y = 150 + i * 132;
    b += box(30, y, 840, 118, fill, edge, 2.5, 12) + t(52, y + 34, h, { size: 19, weight: 700 }) + t(160, y + 34, '[1]', { size: 19, weight: 700, fill: C.olive }) +
      u(846, y + 78, ur, { size: 24 }) + t(846, y + 106, g, { size: 15, anchor: 'end', italic: true, fill: C.muted });
  });
  b += box(30, 556, 840, 124, C.panel, C.panelEdge, 2.5, 12) + t(52, 590, 'Time markers show the change', { size: 18, weight: 700 }) +
    u(400, 638, 'لگتی تھی', { size: 25, anchor: 'middle', fill: C.tealDark }) + t(400, 668, 'used to seem', { size: 15, anchor: 'middle', fill: C.muted }) +
    u(560, 638, 'لیکن', { size: 25, anchor: 'middle', fill: C.tealDark }) + t(560, 668, 'but', { size: 15, anchor: 'middle', fill: C.muted }) +
    u(720, 638, 'اب', { size: 25, anchor: 'middle', fill: C.tealDark }) + t(720, 668, 'now', { size: 15, anchor: 'middle', fill: C.muted });
  add('04-old-view-reason-new-view',
    svg(900, 706, 'How an opinion changed', b),
    'The reading text in three marked clauses: the old view (maths always seemed difficult, لگتی تھی), the reason after لیکن (the new teacher explains with easy examples), and the new view after اب (now it is the favourite).',
    'Three marks: the old view, the new view and the reason attached to the teacher.',
    '## Worked example 3: a short reading question');
}

// 05 Two time frames in a present-tense topic
{
  const x0 = 70;
  let b = `<line x1="${x0}" y1="140" x2="${x0}" y2="560" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)"/>`;
  const rows = [
    ['Before', 'پہلے مجھے ریاضی مشکل لگتی تھی،', 'Maths used to seem hard to me,', C.panel, C.panelEdge],
    ['Now', 'لیکن اب یہ آسان لگتی ہے۔', 'but now it seems easy.', C.cream, C.olive],
    ['Next year', 'اگلے سال میں حیاتیات پڑھوں گا۔', 'Next year I will study biology.', C.tealLight, C.tealDark],
  ];
  rows.forEach(([h, ur, g, fill, edge], i) => {
    const y = 120 + i * 146;
    b += `<circle cx="${x0}" cy="${y + 64}" r="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` +
      box(110, y, 760, 128, fill, edge, 2.5, 14) + t(134, y + 40, h, { size: 20, weight: 700 }) + u(846, y + 76, ur, { size: 28 }) + t(846, y + 112, g, { size: 16, anchor: 'end', italic: true, fill: C.muted });
  });
  b += t(450, 600, 'One sentence on a change of view, or on next year, adds a second time frame', { size: 17, weight: 600, anchor: 'middle' });
  add('05-then-now-next-year',
    svg(900, 630, 'Then, now and next year', b),
    'A vertical timeline: before (پہلے مجھے ریاضی مشکل لگتی تھی), now (لیکن اب یہ آسان لگتی ہے) and next year (اگلے سال میں حیاتیات پڑھوں گا), with English glosses.',
    'A change of view or a plan adds past or future to a present-tense topic.',
    '## Exam technique');
}
