import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-urdu-language-9264-home-town-neighbourhood';
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

// 01 Location postpositions as pictograms
{
  const ref = (x, y, w = 60, h = 50) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const cards = [
    ['کے سامنے', 'opposite, in front of', (cx, y) => ref(cx - 30, y + 24) + dot(cx, y + 100)],
    ['کے پیچھے', 'behind', (cx, y) => dot(cx + 14, y + 30) + ref(cx - 30, y + 40)],
    ['کے پاس / کے قریب', 'near', (cx, y) => ref(cx - 50, y + 40) + dot(cx + 40, y + 65)],
    ['کے ساتھ', 'next to', (cx, y) => ref(cx - 48, y + 40) + dot(cx + 24, y + 65)],
    ['کے درمیان', 'between', (cx, y) => ref(cx - 80, y + 40, 50) + ref(cx + 30, y + 40, 50) + dot(cx, y + 65)],
    ['کے اندر / کے باہر', 'inside / outside', (cx, y) => ref(cx - 60, y + 30, 80, 70) + dot(cx - 20, y + 65) + dot(cx + 52, y + 65)],
    ['سے دور', 'far from', (cx, y) => ref(cx - 76, y + 40, 44) + `<line x1="${cx - 26}" y1="${y + 65}" x2="${cx + 50}" y2="${y + 65}" stroke="${C.muted}" stroke-width="2.5" stroke-dasharray="6 5"/>` + dot(cx + 66, y + 65)],
  ];
  let b = '';
  cards.forEach(([ur, en, pic], i) => {
    const row = i < 4 ? 0 : 1, col = row === 0 ? i : i - 4;
    const x = row === 0 ? 30 + col * 213 : 137 + col * 213, y = 110 + row * 246, cx = x + 100;
    const far = i === 6;
    b += box(x, y, 200, 232, far ? C.cream : C.panel, far ? C.olive : C.panelEdge, 2.5, 14) + pic(cx, y) +
      u(cx, y + 178, ur, { size: ur.length > 10 ? 21 : 25, anchor: 'middle', fill: C.tealDark }) + t(cx, y + 214, en, { size: 16, anchor: 'middle', fill: C.muted });
  });
  b += box(30, 612, 840, 82, '#f6ece4', C.rust, 2.5, 12) + t(54, 660, 'Far from takes', { size: 18, weight: 700 }) + u(222, 664, 'سے', { size: 26, anchor: 'middle', fill: C.olive }) +
    t(250, 660, 'not', { size: 18, weight: 700 }) + u(305, 664, 'کے', { size: 26, anchor: 'middle', fill: C.rust }) + u(846, 664, 'اسکول ہمارے گھر سے زیادہ دور نہیں ہے', { size: 26 });
  b += `<circle cx="70" cy="726" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(88, 732, 'the thing you are locating', { size: 16, fill: C.muted }) +
    `<rect x="340" y="714" width="34" height="26" rx="3" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>` + t(386, 732, 'the reference place', { size: 16, fill: C.muted });
  add('01-location-postpositions',
    svg(900, 760, 'Where is it? Location words', b),
    'Seven pictograms of a dot placed relative to a building: کے سامنے opposite or in front of, کے پیچھے behind, کے پاس / کے قریب near, کے ساتھ next to, کے درمیان between, کے اندر / کے باہر inside or outside, and سے دور far from, which takes سے rather than کے.',
    'Compound postpositions with کے place things; دور is the exception and takes سے.',
    '## Grammar that carries this topic');
}

// 02 There is / there are, and the oblique case
{
  let b = panel(30, 110, 840, 260) + t(54, 146, 'Saying what there is: place phrase + is / are', { size: 20, weight: 700 });
  [['ہمارے محلے میں ایک بڑا پارک ہے', 'There is a big park in our neighbourhood.'], ['یہاں دو اسکول ہیں', 'There are two schools here.'], ['یہاں کوئی سینما نہیں ہے', 'There is no cinema here.']].forEach(([ur, g], i) => {
    const y = 200 + i * 62;
    b += u(846, y, ur, { size: 25 }) + t(54, y - 4, g, { size: 17, italic: true, fill: C.muted });
  });
  b += panel(30, 390, 840, 370) + t(54, 426, 'Before a postposition, masculine nouns ending in', { size: 20, weight: 700 }) + u(560, 430, 'ہ', { size: 26, anchor: 'middle', fill: C.tealDark }) + t(582, 426, 'or', { size: 20, weight: 700 }) + u(622, 430, 'ا', { size: 26, anchor: 'middle', fill: C.tealDark }) + t(642, 426, 'change', { size: 20, weight: 700 });
  const pair = (y, a, c, chg) => box(500, y, 346, 70, C.panel, C.panelEdge, 2, 12) + u(673, y + 46, a, { size: 26, anchor: 'middle' }) +
    arrow(494, y + 35, 446, y + 35, { w: 3.5, color: chg ? C.tealDark : C.muted, marker: chg ? 'ahT' : 'ah' }) +
    box(54, y, 386, 70, chg ? C.cream : C.tealLight, chg ? C.olive : C.tealDark, 2, 12) + u(247, y + 46, c, { size: 26, anchor: 'middle' });
  b += pair(450, 'محلہ', 'محلے میں', true) + pair(530, 'کمرہ', 'کمرے میں', true) + pair(610, 'قصبہ', 'قصبے سے', true);
  b += t(54, 728, 'Others do not change:', { size: 17, fill: C.muted }) + u(330, 732, 'گاؤں میں', { size: 24, anchor: 'middle' }) + u(460, 732, 'شہر میں', { size: 24, anchor: 'middle' });
  b += box(30, 776, 840, 64, '#f6ece4', C.rust, 2.5, 12) + cross(66, 808) + u(260, 816, 'محلہ میں', { size: 26, anchor: 'middle', fill: C.rust }) + t(330, 812, 'is one of the most common errors here', { size: 18, weight: 600 });
  add('02-there-is-and-oblique',
    svg(900, 866, 'Two checks for every description', b),
    'Saying what there is uses a place phrase with ہے or ہیں, as in ہمارے محلے میں ایک بڑا پارک ہے and یہاں دو اسکول ہیں. Before a postposition, masculine nouns ending in ہ change: محلہ becomes محلے میں, کمرہ becomes کمرے میں, قصبہ becomes قصبے سے.',
    'Match ہے or ہیں to the number of things, and use the oblique before میں and سے.',
    '## Common mistakes');
}

// 03 Directions: a plan of the worked example
{
  let b = panel(30, 110, 840, 350);
  // streets
  b += `<rect x="700" y="116" width="44" height="338" fill="${C.sand}"/>` + `<rect x="40" y="214" width="660" height="40" fill="${C.sand}"/>` + `<rect x="40" y="374" width="660" height="40" fill="${C.sand}"/>`;
  b += t(60, 240, '2nd street', { size: 16, weight: 600, fill: C.olive }) + t(60, 400, '1st street', { size: 16, weight: 600, fill: C.olive });
  // buildings
  b += box(330, 122, 170, 84, C.tealLight, C.tealDark, 2.5, 8) + u(415, 160, 'لائبریری', { size: 24, anchor: 'middle' }) + t(415, 194, 'library', { size: 15, anchor: 'middle', fill: C.muted });
  b += box(330, 262, 170, 84, C.cream, C.olive, 2.5, 8) + u(415, 300, 'مسجد', { size: 24, anchor: 'middle' }) + t(415, 334, 'mosque', { size: 15, anchor: 'middle', fill: C.muted });
  b += path('M330,164 C270,164 270,304 330,304', { w: 2.5, stroke: C.muted, extra: 'stroke-dasharray="6 5"' }) + t(268, 240, 'opposite', { size: 15, fill: C.muted, italic: true, anchor: 'end' });
  // route
  b += path('M722,440 V234 H520', { stroke: C.tealDark, w: 5, extra: 'stroke-dasharray="12 8" marker-end="url(#ahT)"' });
  b += `<circle cx="722" cy="440" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(752, 446, 'you start here', { size: 15, weight: 600 });
  b += badge(782, 330, 17, '1', C.cream) + badge(620, 192, 17, '2', C.cream) + badge(560, 300, 17, '3', C.cream);
  const steps = [
    ['1', 'go straight on', 'سیدھے جائیے'],
    ['2', 'turn left into the second street', 'بائیں طرف دوسری گلی میں مڑ جائیے'],
    ['3', 'the library is opposite the mosque', 'لائبریری مسجد کے سامنے ہے'],
    ['4', 'about ten minutes’ walk from here', 'یہاں سے تقریباً دس منٹ کا پیدل راستہ'],
  ];
  steps.forEach(([n, en, ur], i) => {
    const y = 478 + i * 80;
    b += box(30, y, 840, 68, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge, 2.5, 12) + badge(62, y + 34, 17, n, C.cream) +
      t(92, y + 40, en, { size: 17 }) + u(846, y + 44, ur, { size: 24 });
  });
  b += t(450, 816, 'Use polite imperatives for a stranger; street is feminine, so "second" takes the feminine form', { size: 15, anchor: 'middle', fill: C.muted });
  add('03-directions-plan',
    svg(900, 840, 'Following the directions', b),
    'A street plan of the worked example: go straight on (سیدھے جائیے), turn left into the second street (بائیں طرف دوسری گلی میں مڑ جائیے), and the library is opposite the mosque (لائبریری مسجد کے سامنے ہے), about ten minutes’ walk from here.',
    'Sketch directions as you read: each turn and each کے سامنے on a rough plan.',
    '## Worked example 1: directions in translation');
}

// 04 Describing your area: a five-part structure
{
  let b = t(450, 128, 'Task: describe your area, how it has changed, and one improvement', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  const rows = [
    ['Where you live', 'میں ایک چھوٹے قصبے میں رہتی ہوں۔', 'I live in a small town. (oblique قصبے)'],
    ['What there is', 'ہمارے گھر کے قریب ایک بازار ہے', 'There is a market near our house.'],
    ['How it has changed', 'پہلے یہاں بہت کم دکانیں تھیں، لیکن اب ایک نیا شاپنگ سینٹر کھل گیا ہے۔', 'There used to be very few shops, but now a new shopping centre has opened.'],
    ['Opinion with a reason', 'مجھے اپنا علاقہ پسند ہے کیونکہ یہ پرسکون ہے', 'I like my area because it is peaceful.'],
    ['One improvement', 'اگر یہاں ایک کھیل کا میدان بن جائے تو بہت اچھا ہو گا۔', 'If a playing field were built here, it would be very good.'],
  ];
  rows.forEach(([l, ur, g], i) => {
    const y = 148 + i * 144, hi = i === 2 || i === 4;
    b += srow(y, (i + 1) + '. ' + l, ur, g.replace(' (oblique قصبے)', ''), { h: 136, fill: hi ? C.cream : C.panel, edge: hi ? C.olive : C.panelEdge, size: 23 });
  });
  b += t(450, 886, 'Then and now gives two time frames; the condition links forward to social and global issues', { size: 16, anchor: 'middle', fill: C.muted });
  add('04-describing-your-area',
    svg(900, 912, 'Five moves for describing your area', b),
    'Five lines from the model answer: where you live (میں ایک چھوٹے قصبے میں رہتی ہوں), what there is, how it has changed with پہلے ... لیکن اب, an opinion with کیونکہ, and one improvement as a condition (اگر یہاں ایک کھیل کا میدان بن جائے تو ...).',
    'Place, amenities, change, opinion, improvement: a strong structure for this topic.',
    '## Worked example 2: describing your area');
}

// 05 Your region: weather idiom and one memorable detail
{
  let b = t(54, 138, 'Landscape words', { size: 19, weight: 700 });
  let x = 30;
  [['پہاڑی علاقہ', 'mountainous area', 170], ['میدانی علاقہ', 'plains', 170], ['ساحلی شہر', 'coastal city', 160], ['صحرا', 'desert', 150], ['دریا', 'river', 150]].forEach(([ur, en, w]) => { b += vchip(x, 154, w, ur, en); x += w + 10; });
  const y1 = 280;
  b += srow(y1, 'Heat and cold: the idiom', 'گرمیوں میں یہاں بہت گرمی پڑتی ہے۔', 'It gets very hot here in summer.', { fill: C.cream, edge: C.olive, extra: u(380, y1 + 42, 'گرمی / سردی پڑنا', { size: 22, anchor: 'middle', fill: C.olive }) });
  b += box(30, y1 + 152, 840, 64, '#f6ece4', C.rust, 2.5, 12) + cross(66, y1 + 184) + u(170, y1 + 192, 'یہ گرم ہے', { size: 24, anchor: 'middle', fill: C.rust }) + t(240, y1 + 189, 'word for word: sounds unnatural about the weather', { size: 17, weight: 600 });
  const y2 = y1 + 232;
  b += srow(y2, 'One memorable detail', 'یہ علاقہ اپنے آموں کے لیے مشہور ہے۔', 'This area is famous for its mangoes.', { fill: C.tealLight, edge: C.tealDark, extra: u(400, y2 + 42, 'کے لیے مشہور ہے', { size: 22, anchor: 'middle', fill: C.tealDark }) });
  b += t(450, y2 + 176, 'Choose a detail you know well, such as a crop, a festival or a landmark: no figures needed', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-region-weather-detail',
    svg(900, y2 + 200, 'Describing your region', b),
    'Landscape words (پہاڑی علاقہ, میدانی علاقہ, ساحلی شہر, صحرا, دریا), the weather idiom گرمی / سردی پڑنا as in گرمیوں میں یہاں بہت گرمی پڑتی ہے rather than یہ گرم ہے, and ... کے لیے مشہور ہے for one specific detail such as mangoes.',
    'Use گرمی پڑنا for the weather and کے لیے مشہور ہے for one memorable detail.',
    '## Your region: landscape and weather');
}
