import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-urdu-language-9264-free-time-activities';
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

// 01 The right verb for each activity
{
  let b = '';
  const cards = [
    ['کھیلنا', 'games and sport', ['میں کرکٹ کھیلتا ہوں']],
    ['بجانا', 'instruments', ['میں گٹار بجاتی ہوں']],
    ['سننا', 'listening', ['ہم پرانے گانے سنتے ہیں']],
    ['دیکھنا', 'watching', ['میں ہر رات ایک ڈراما دیکھتا ہوں']],
    ['کرنا', 'many activities', ['ورزش کرنا', 'تیراکی کرنا', 'سیر کرنا']],
    ['منانا', 'celebrating', ['ہم عید مناتے ہیں']],
  ];
  cards.forEach(([v, en, ex], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 160, w = 410, hi = i === 1;
    b += box(x, y, w, 144, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 2.5, 14) + u(x + w - 20, y + 62, v, { size: 30, fill: hi ? C.olive : C.tealDark }) +
      t(x + 20, y + 42, 'for', { size: 16, fill: C.muted }) + t(x + 20, y + 66, en, { size: 19, weight: 700 });
    if (ex.length === 1) b += u(x + w - 20, y + 122, ex[0], { size: 24 });
    else ex.forEach((s, j) => { b += u(x + w - 20 - j * 130, y + 122, s, { size: 22 }); });
  });
  b += box(30, 600, 840, 64, '#f6ece4', C.rust, 2.5, 12) + cross(66, 632) + u(165, 640, 'گٹار کھیلنا', { size: 26, anchor: 'middle', fill: C.rust }) +
    t(250, 638, 'is wrong: instruments take', { size: 18, weight: 600 }) + u(540, 640, 'بجانا', { size: 26, anchor: 'middle', fill: C.olive });
  add('01-right-verb-for-activity',
    svg(900, 690, 'English says "play"; Urdu chooses', b),
    'Six Urdu verbs with examples: کھیلنا for sport (میں کرکٹ کھیلتا ہوں), بجانا for instruments (میں گٹار بجاتی ہوں), سننا for listening, دیکھنا for watching, کرنا for activities such as ورزش and تیراکی, and منانا for celebrating (ہم عید مناتے ہیں).',
    'Sport is played with کھیلنا, instruments with بجانا: never گٹار کھیلنا.',
    '## The right verb for the activity');
}

// 02 Likes and preferences
{
  let b = '';
  const mk = (y, parts) => parts.map(([kind, x, s, fill]) => kind === 'u' ? u(x, y + 40, s, { size: 22, anchor: 'middle', fill: fill || C.tealDark }) : t(x, y + 38, s, { size: 16, fill: C.muted })).join('');
  const rows = [
    ['Thing liked', 'مجھے کرکٹ پسند ہے', 'I like cricket.', (y) => mk(y, [['t', 330, 'singular noun, so']]) + u(500, y + 40, 'ہے', { size: 22, anchor: 'middle', fill: C.tealDark })],
    ['Plural thing liked', 'مجھے مزاحیہ فلمیں پسند ہیں', 'I like comic films.', (y) => mk(y, [['t', 330, 'plural noun, so']]) + u(480, y + 40, 'ہیں', { size: 22, anchor: 'middle', fill: C.tealDark })],
    ['Activity: infinitive', 'مجھے گانے سننا پسند ہے', 'I like listening to songs.', (y) => ''],
    ['Keen on (oblique)', 'مجھے کتابیں پڑھنے کا شوق ہے', 'I am keen on reading books.', (y) => mk(y, [['u', 380, 'پڑھنے کا شوق']])],
    ['Preference', 'مجھے سنیما میں فلم دیکھنا گھر پر دیکھنے سے زیادہ پسند ہے', 'I prefer watching a film at the cinema to watching at home.', (y) => mk(y, [['u', 330, 'سے زیادہ']]), C.cream, C.olive],
  ];
  rows.forEach(([l, ur, g, ex, fill, edge], i) => { const y = 110 + i * 150; b += srow(y, l, ur, g, { extra: ex(y), fill, edge }); });
  add('02-likes-and-preferences',
    svg(900, 870, 'Saying what you like', b),
    'Urdu like-structures with glosses: پسند agrees with the thing liked (مجھے کرکٹ پسند ہے, مجھے مزاحیہ فلمیں پسند ہیں), an activity uses the infinitive (مجھے گانے سننا پسند ہے), شوق takes an oblique infinitive with کا, and سے زیادہ makes a preference.',
    'The verb agrees with what is liked, not with the person who likes it.',
    '## Structures for likes and preferences');
}

// 03 جانا takes no نے; transitive verbs do
{
  const ex = (x, y, ok, ur, g) => (ok ? tick(x + 30, y - 10) : cross(x + 30, y - 10)) + u(x + 386, y, ur, { size: 26, fill: ok ? C.ink : C.rust }) + t(x + 386, y + 34, g, { size: 16, anchor: 'end', fill: C.muted, italic: true });
  let b = box(30, 110, 410, 420, C.panel, C.panelEdge, 2.5, 14) + t(54, 148, 'Going: no', { size: 21, weight: 700 }) + u(188, 152, 'نے', { size: 26, anchor: 'middle', fill: C.rust }) + t(54, 176, 'the verb is intransitive', { size: 16, fill: C.muted }) + u(416, 156, 'جانا', { size: 30, fill: C.tealDark });
  b += ex(30, 250, true, 'میں سنیما گیا', 'I went to the cinema.') + ex(30, 350, true, 'ہم میچ دیکھنے گئے', 'We went to watch a match.') + ex(30, 450, false, 'میں نے سنیما گیا', 'never with this verb');
  b += box(460, 110, 410, 420, C.cream, C.olive, 2.5, 14) + t(484, 148, 'Transitive past: add', { size: 21, weight: 700 }) + u(732, 152, 'نے', { size: 26, anchor: 'middle', fill: C.olive }) + t(484, 176, 'the verb agrees with the object', { size: 16, fill: C.muted });
  b += ex(460, 250, true, 'ہم نے میچ جیتا', 'We won the match.') + ex(460, 350, true, 'میں نے ایک فلم دیکھی', 'I watched a film (film is feminine).');
  b += t(450, 570, 'Check every past-tense verb: does it need the ergative marker?', { size: 18, weight: 600, anchor: 'middle' });
  add('03-when-to-use-ne',
    svg(900, 600, 'Past tense and the ergative marker', b),
    'Two panels. جانا never takes نے: میں سنیما گیا and ہم میچ دیکھنے گئے are correct, میں نے سنیما گیا is wrong. Transitive verbs do take نے: ہم نے میچ جیتا, and میں نے ایک فلم دیکھی agrees with the feminine فلم.',
    'جانا never takes نے; transitive past verbs do, and agree with the object.',
    '## Structures for likes and preferences');
}

// 04 The ہفتہ trap
{
  let b = box(330, 120, 240, 110, C.cream, C.olive, 3, 14) + u(450, 190, 'ہفتہ', { size: 40, anchor: 'middle' });
  b += path('M380,230 Q300,262 250,292', { w: 3.5, extra: 'marker-end="url(#ah)"' }) + path('M520,230 Q600,262 650,292', { w: 3.5, extra: 'marker-end="url(#ah)"' });
  b += box(100, 300, 300, 70, C.panel, C.panelEdge, 2.5, 12) + t(250, 343, 'week', { size: 22, weight: 700, anchor: 'middle' });
  b += box(500, 300, 300, 70, C.panel, C.panelEdge, 2.5, 12) + t(650, 343, 'Saturday', { size: 22, weight: 700, anchor: 'middle' });
  b += box(30, 400, 410, 150, C.panel, C.panelEdge, 2.5, 14) + u(235, 466, 'پچھلے ہفتے', { size: 30, anchor: 'middle' }) + t(235, 512, 'normally means "last week"', { size: 18, anchor: 'middle' });
  b += box(460, 400, 410, 150, C.tealLight, C.tealDark, 2.5, 14) + u(665, 466, 'پچھلے ہفتے کے دن', { size: 30, anchor: 'middle' }) + t(665, 512, 'makes "last Saturday" explicit', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 590, 'If the English says "last Saturday", add the extra words', { size: 18, weight: 600, anchor: 'middle' });
  add('04-hafta-trap',
    svg(900, 620, 'One word, two meanings', b),
    'The word ہفتہ means both week and Saturday. پچھلے ہفتے normally means last week; for last Saturday, write پچھلے ہفتے کے دن.',
    'Use پچھلے ہفتے کے دن when the English says "last Saturday".',
    '## A vocabulary trap: ہفتہ');
}

// 05 Festival writing pattern (and the same pattern for sport)
{
  let b = t(295, 132, 'Festival (model answer)', { size: 19, weight: 700, anchor: 'middle', fill: C.olive }) + t(725, 132, 'Same pattern for sport', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  const rows = [
    ['Custom', 'present habitual', 'اٹھتے ہیں، پہنتے ہیں، جاتے ہیں', 'what you usually play'],
    ['One occasion', 'past', 'آئے تھے، اکٹھا ہوا', 'a match you remember'],
    ['Opinion + reason', '', 'اس لیے ... کیونکہ', 'why you enjoy it'],
    ['Future plan', 'personal, specific', 'بناؤں گا', 'a future goal'],
  ];
  rows.forEach(([h, s, ur, sp], i) => {
    const y = 150 + i * 112;
    b += box(30, y, 530, 96, C.panel, C.panelEdge, 2.5, 12) + badge(64, y + 48, 20, String(i + 1), C.cream) +
      t(96, y + (s ? 42 : 54), h, { size: 19, weight: 700 }) + (s ? t(96, y + 66, s, { size: 16, fill: C.muted }) : '') + u(540, y + 60, ur, { size: 24 });
    b += arrow(564, y + 48, 586, y + 48, { w: 3 }) + box(590, y, 280, 96, C.tealLight, C.tealDark, 2, 12) + t(730, y + 54, sp, { size: 17, anchor: 'middle' });
  });
  b += box(30, 608, 840, 76, C.cream, C.olive, 2.5, 12) + t(54, 652, 'Bonus: an idiom used naturally', { size: 18, weight: 700 }) +
    u(560, 656, 'گلے شکوے بھلا کر', { size: 26, anchor: 'middle', fill: C.olive }) + t(846, 652, 'setting complaints aside', { size: 16, anchor: 'end', fill: C.muted, italic: true });
  add('05-custom-occasion-opinion-plan',
    svg(900, 710, 'Custom, occasion, opinion, plan', b),
    'Four moves from the Eid model answer, with its Urdu: customs in the present habitual (اٹھتے ہیں، پہنتے ہیں، جاتے ہیں), one occasion in the past (آئے تھے، اکٹھا ہوا), an opinion with اس لیے ... کیونکہ, and a future plan (بناؤں گا). The same pattern fits sport.',
    'Custom, occasion, opinion and plan: one pattern for festivals, sport, music or films.',
    '## Worked example 2: writing about a festival');
}

// 06 پسند ہونا versus پسند آنا, and review frames
{
  let b = box(30, 110, 410, 200, C.panel, C.panelEdge, 2.5, 14) + u(416, 162, 'پسند ہونا', { size: 30, fill: C.tealDark }) + t(54, 156, 'general liking', { size: 19, weight: 700 }) +
    u(416, 238, 'مجھے مزاحیہ فلمیں پسند ہیں', { size: 25 }) + t(416, 286, 'I like comic films.', { size: 16, anchor: 'end', italic: true, fill: C.muted });
  b += box(460, 110, 410, 200, C.cream, C.olive, 2.5, 14) + u(846, 162, 'پسند آنا', { size: 30, fill: C.olive }) + tl(484, 148, ['one particular', 'film, in the past'], { size: 18, weight: 700 }, 22) +
    u(846, 238, 'مجھے وہ فلم بہت پسند آئی', { size: 25 }) + t(846, 286, 'I really liked that film.', { size: 16, anchor: 'end', italic: true, fill: C.muted });
  b += t(54, 352, 'Review frames that go beyond "it was good"', { size: 20, weight: 700 });
  const frames = [
    ['اداکاری بہت عمدہ تھی، خاص طور پر ہیرو کی ماں کا کردار۔', 'The acting was excellent, especially the role of the hero’s mother.'],
    ['مجھے آخری منظر سب سے زیادہ پسند آیا۔', 'I liked the final scene most.'],
    ['ڈرامے کی ہر قسط پچھلی سے زیادہ دلچسپ تھی۔', 'Each episode of the drama was more interesting than the last.'],
  ];
  frames.forEach(([ur, g], i) => {
    const y = 372 + i * 104;
    b += panel(30, y, 840, 92) + u(846, y + 46, ur, { size: 25 }) + t(846, y + 78, g, { size: 16, anchor: 'end', italic: true, fill: C.muted });
  });
  add('06-pasand-hona-vs-pasand-ana',
    svg(900, 700, 'Liking in general, liking one thing', b),
    'پسند ہونا states a general liking (مجھے مزاحیہ فلمیں پسند ہیں); پسند آنا gives a reaction to one film in the past (مجھے وہ فلم بہت پسند آئی). Three review frames follow, on the acting, the final scene and each episode.',
    'پسند آنا for one film you saw; پسند ہونا for what you like in general.',
    '## Reviewing a film or programme');
}
