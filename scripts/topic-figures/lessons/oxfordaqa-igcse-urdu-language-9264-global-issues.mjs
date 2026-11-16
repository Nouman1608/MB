import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-urdu-language-9264-global-issues';
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
  u(846, y + 88, ur, { size }) + t(846, y + h - 16, gloss, { size: 16, anchor: 'end', fill: C.muted, italic: true });

// 01 Social versus global: a question of scale
{
  const cx = 250, cy = 380;
  let b = `<circle cx="${cx}" cy="${cy}" r="230" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>` +
    `<circle cx="${cx}" cy="${cy + 70}" r="110" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` +
    t(cx, cy - 170, 'Global issues', { size: 23, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(cx, cy - 144, 'problems that cross borders', { size: 17, anchor: 'middle' }) +
    t(cx, cy + 50, 'Social issues', { size: 21, weight: 700, anchor: 'middle', fill: C.olive }) + t(cx, cy + 76, 'you and your', { size: 17, anchor: 'middle' }) + t(cx, cy + 98, 'community', { size: 17, anchor: 'middle' });
  b += box(110, cy - 118, 130, 84, C.panel, C.tealDark, 2, 12) + u(175, cy - 74, 'ماحول', { size: 26, anchor: 'middle' }) + t(175, cy - 46, 'environment', { size: 15, anchor: 'middle', fill: C.muted });
  b += box(260, cy - 118, 130, 84, C.panel, C.tealDark, 2, 12) + u(325, cy - 74, 'غربت', { size: 26, anchor: 'middle' }) + t(325, cy - 46, 'poverty', { size: 15, anchor: 'middle', fill: C.muted });
  const card = (y, head, lines, fill, edge, hc) => box(530, y, 340, 150, fill, edge, 2.5, 14) + t(552, y + 38, head, { size: 20, weight: 700, fill: hc }) + tl(552, y + 70, lines, { size: 17 }, 23);
  b += card(160, 'Do connect them', ['show how a world problem', 'appears in your own area'], C.panel, C.tealDark, C.tealDark);
  b += card(340, 'Do not shrink it', ['a global question should', 'not become a purely', 'personal one'], '#f6ece4', C.rust, C.rust);
  b += t(700, 548, 'Global issues differs from', { size: 17, anchor: 'middle', fill: C.muted }) + t(700, 572, 'Social issues in scale', { size: 17, anchor: 'middle', fill: C.muted, weight: 700 });
  add('01-social-versus-global',
    svg(900, 640, 'A question of scale', b),
    'Nested circles: Social issues (you and your community) sit inside Global issues (problems that cross borders), whose sub-topics are the environment (ماحول) and poverty (غربت). Connect a world problem to your own area, but do not shrink a global question into a personal one.',
    'Global issues differs from Social issues in scale; link them without shrinking the question.',
    '## What this topic covers');
}

// 02 The passive with جانا
{
  let b = box(30, 110, 840, 92, C.cream, C.olive, 2.5, 14) + t(54, 148, 'Past participle', { size: 21, weight: 700 }) + t(220, 148, '+', { size: 24, weight: 700 }) +
    u(290, 152, 'جانا', { size: 28, anchor: 'middle', fill: C.olive }) + t(340, 148, 'agreeing with the thing affected', { size: 19, weight: 600 }) +
    t(54, 182, 'the key structure for describing large problems impersonally', { size: 16, fill: C.muted });
  const rows = [
    ['Present passive', 'بہت سے درخت کاٹے جاتے ہیں', 'Many trees are cut down.'],
    ['With can', 'پلاسٹک کو دوبارہ استعمال کیا جا سکتا ہے', 'Plastic can be reused.'],
    ['Feminine agreement', 'اس مسئلے پر توجہ نہیں دی جاتی', 'This problem is not given attention.'],
  ];
  rows.forEach(([l, ur, g], i) => { const y = 222 + i * 152; b += srow(y, l, ur, g, { fill: i === 2 ? C.tealLight : C.panel, edge: i === 2 ? C.tealDark : C.panelEdge }); });
  const y3 = 222 + 2 * 152;
  b += t(52, y3 + 66, 'agrees with', { size: 16, fill: C.muted }) + u(170, y3 + 70, 'توجہ', { size: 22, anchor: 'middle', fill: C.tealDark }) + t(200, y3 + 66, '(f)', { size: 16, fill: C.muted });
  b += box(30, 690, 840, 64, '#f6ece4', C.rust, 2.5, 12) + t(54, 728, 'Common slip:', { size: 18, weight: 700, fill: C.rust }) + u(330, 732, 'توجہ نہیں دیا جاتا', { size: 24, anchor: 'middle', fill: C.rust }) +
    t(430, 728, 'should be', { size: 18, weight: 600 }) + u(580, 732, 'دی جاتی', { size: 24, anchor: 'middle', fill: C.tealDark });
  add('02-passive-with-jana',
    svg(900, 780, 'The passive for big problems', b),
    'The passive is formed with a past participle plus جانا, agreeing with the thing affected: بہت سے درخت کاٹے جاتے ہیں, پلاسٹک کو دوبارہ استعمال کیا جا سکتا ہے, and اس مسئلے پر توجہ نہیں دی جاتی with feminine دی for توجہ.',
    'Participle plus جانا, agreeing with the noun affected, makes writing sound mature.',
    '## Structures that carry this topic');
}

// 03 Three kinds of condition
{
  let b = '';
  const rows = [
    ['Real', 'اگر ہم پانی بچائیں تو آنے والی نسلوں کو فائدہ ہو گا', 'If we save water, future generations will benefit.', C.panel, C.panelEdge, 'likely result'],
    ['Warning', 'اگر ہم نے ابھی کچھ نہ کیا تو حالات اور خراب ہو جائیں گے', 'If we do not act now, things will get worse.', C.cream, C.olive, 'idiomatic past form'],
    ['Hypothetical', 'اگر ہر گھر میں شمسی توانائی ہوتی تو بجلی کا مسئلہ حل ہو جاتا', 'If every home had solar energy, the electricity problem would be solved.', C.tealLight, C.tealDark, 'imagined situation'],
  ];
  rows.forEach(([l, ur, g, fill, edge, note], i) => { const y = 110 + i * 152; b += srow(y, l, ur, g, { fill, edge, extra: t(52, y + 64, note, { size: 16, fill: C.muted }) }); });
  b += t(450, 590, 'Every solution paragraph is a chance to use a condition', { size: 18, weight: 600, anchor: 'middle' });
  add('03-three-conditions',
    svg(900, 620, 'Real, warning, hypothetical', b),
    'Three Urdu conditions with glosses: a real one about saving water, a warning (اگر ہم نے ابھی کچھ نہ کیا تو ...) that uses an idiomatic past form for the future, and a hypothetical about solar energy in every home.',
    'Use اگر ... تو for real results, warnings and imagined situations.',
    '## Worked example 1: translation into Urdu');
}

// 04 Building a global-issues answer
{
  let b = '';
  const head = (y, n, s) => badge(56, y, 18, n, C.cream) + t(86, y + 7, s, { size: 20, weight: 700 });
  b += head(130, '1', 'Name the problem');
  b += head(184, '2', 'Chain causes and effects (the chain reads right to left)');
  const chain = [['جنگلات کی کٹائی کی وجہ سے', 'because of deforestation'], ['بارش کم ہوتی ہے،', 'rainfall decreases'], ['جس سے خشک سالی بڑھتی ہے', 'which increases drought']];
  chain.forEach(([ur, en], i) => {
    const x = 600 - i * 285;
    b += box(x, 210, 270, 106, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge, 2.5, 12) + u(x + 135, 262, ur, { size: 21, anchor: 'middle' }) + t(x + 135, 298, en, { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    if (i < 2) b += arrow(x - 2, 263, x - 13, 263, { w: 3 });
  });
  b += head(360, '3', 'Split solutions: who should act?');
  b += box(30, 384, 410, 112, C.panel, C.panelEdge, 2.5, 12) + t(52, 416, 'Individuals', { size: 18, weight: 700, fill: C.tealDark }) + u(416, 466, 'ہر شخص کو ... چاہیے', { size: 24 });
  b += box(460, 384, 410, 112, C.panel, C.panelEdge, 2.5, 12) + t(482, 416, 'Government', { size: 18, weight: 700, fill: C.tealDark }) + u(846, 466, 'حکومت کو ... پر پابندی لگانی چاہیے', { size: 24 });
  b += head(540, '4', 'Finish with a justified opinion');
  b += box(30, 574, 840, 96, C.tealLight, C.tealDark, 2, 12) + t(54, 606, 'Show range in one answer:', { size: 18, weight: 700 }) +
    t(54, 640, 'one passive  +  one conditional  +  one concession', { size: 18 }) + u(700, 644, 'اگرچہ', { size: 26, anchor: 'middle', fill: C.tealDark }) + t(760, 640, '(although)', { size: 16, fill: C.muted });
  add('04-global-issues-answer-plan',
    svg(900, 700, 'Building a global-issues answer', b),
    'Four steps: name the problem; chain causes and effects, as in جنگلات کی کٹائی کی وجہ سے بارش کم ہوتی ہے، جس سے خشک سالی بڑھتی ہے; split solutions between individuals (ہر شخص کو ... چاہیے) and government (حکومت کو ... پر پابندی لگانی چاہیے); and end with a justified opinion, using a passive, a conditional and اگرچہ.',
    'Problem, causes and effects, who should act, then a justified opinion.',
    '## Exam technique');
}

// 05 Poverty grid: causes, effects, solutions
{
  const cols = [['Causes', 640, C.panel, C.panelEdge], ['Effects', 345, C.panel, C.panelEdge], ['Solutions', 50, C.cream, C.olive]];
  let b = cols.map(([h, x]) => box(x, 110, 250, 46, C.teal, C.tealDark, 2, 10) + t(x + 125, 140, h, { size: 19, weight: 700, anchor: 'middle' })).join('');
  const grid = [
    [['بے روزگاری', 'unemployment'], ['بھوک', 'hunger'], ['روزگار کے مواقع', 'job opportunities']],
    [['تعلیم کی کمی', 'lack of education'], ['بیماریاں', 'illnesses'], ['مفت تعلیم', 'free education']],
    [['قدرتی آفات', 'natural disasters'], ['بے گھری', 'homelessness'], ['عالمی امداد', 'international aid']],
    [['مہنگائی', 'rising prices'], ['بچوں کی مشقت', 'child labour'], ['صاف پانی کی فراہمی', 'supply of clean water']],
  ];
  grid.forEach((row, r) => {
    const y = 170 + r * 116;
    row.forEach(([ur, en], c) => {
      const [, x, fill, edge] = cols[c];
      const hi = r === 0;
      b += box(x, y, 250, 104, hi ? (c === 2 ? C.cream : C.tealLight) : fill, hi ? C.tealDark : edge, hi ? 3 : 2.5, 12) + u(x + 125, y + 58, ur, { size: 24, anchor: 'middle' }) + t(x + 125, y + 90, en, { size: 15, anchor: 'middle', fill: C.muted });
    });
    if (r === 0) b += arrow(636, y + 52, 600, y + 52, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + arrow(341, y + 52, 305, y + 52, { w: 3.5, color: C.tealDark, marker: 'ahT' });
  });
  b += box(30, 650, 840, 92, C.tealLight, C.tealDark, 2, 12) + t(54, 684, 'Link one item from each column, as in the top row:', { size: 18, weight: 600 }) +
    t(54, 714, 'one sentence can then hold a cause, an effect, a passive and a condition', { size: 18 });
  add('05-poverty-grid',
    svg(900, 770, 'Causes, effects and solutions of poverty', b),
    'A grid reading right to left from causes to effects to solutions: بے روزگاری to بھوک to روزگار کے مواقع; تعلیم کی کمی, بیماریاں, مفت تعلیم; قدرتی آفات, بے گھری, عالمی امداد; مہنگائی, بچوں کی مشقت, صاف پانی کی فراہمی.',
    'Pick a cause, an effect and a solution and you can always develop a point.',
    '## Building a developed answer on poverty');
}
