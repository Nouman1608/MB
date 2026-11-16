import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-urdu-language-9264-education-post-16';
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

// 01 Post-16 routes
{
  let b = box(30, 250, 190, 110, C.cream, C.olive, 3, 14) + tl(125, 294, ['After your', 'current exams'], { size: 19, weight: 700, anchor: 'middle' }, 24);
  const routes = [
    [120, 'Staying on at school', null, 'two more years of study at school'],
    [250, 'College', 'کالج', null],
    [380, 'Vocational training', 'پیشہ ورانہ تربیت', null],
  ];
  routes.forEach(([y, en, ur, note]) => {
    b += arrow(222, 305, 284, y + 55, { w: 3 });
    b += panel(290, y, 300, 110) + t(308, y + 36, en, { size: 19, weight: 700 });
    if (ur) b += u(572, y + 86, ur, { size: 26 });
    if (note) b += tl(308, y + 66, ['described in plain words:', note], { size: 16, fill: C.muted }, 21);
  });
  b += path('M606,130 Q626,130 626,150 V470 Q626,490 606,490', { w: 3 }) + arrow(630, 305, 662, 305, { w: 3.5 });
  b += box(670, 200, 200, 210, C.teal, C.tealDark, 2.5, 14) + t(770, 236, 'Later:', { size: 17, fill: C.tealDark, weight: 700, anchor: 'middle' }) + t(770, 262, 'university', { size: 20, weight: 700, anchor: 'middle' }) +
    u(770, 318, 'یونیورسٹی / جامعہ', { size: 24, anchor: 'middle' }) + u(770, 382, 'اعلیٰ تعلیم', { size: 24, anchor: 'middle' });
  b += t(52, 548, 'Practicalities and choices', { size: 19, weight: 700 });
  let cx = 30;
  [['داخلہ', 'admission', 120], ['درخواست دینا', 'to apply', 170], ['فیس', 'fees', 100], ['وظیفہ', 'scholarship', 130], ['بیرونِ ملک', 'abroad', 140], ['ہاسٹل', 'hostel, halls', 130]].forEach(([ur, en, w]) => {
    b += vchip(cx, 566, w, ur, en); cx += w + 10;
  });
  b += box(30, 690, 840, 52, '#f6ece4', C.rust, 2) + t(450, 723, 'Jobs and careers belong to Topic 4: this topic is about study', { size: 18, weight: 600, anchor: 'middle' });
  add('01-post-16-routes',
    svg(900, 770, 'Routes after your exams', b),
    'After the current exams a student can stay on at school, go to college (کالج) or take vocational training (پیشہ ورانہ تربیت), and later go to university (یونیورسٹی / جامعہ, اعلیٰ تعلیم). Practical words include داخلہ, درخواست دینا, فیس, وظیفہ, بیرونِ ملک and ہاسٹل.',
    'Name the route, then the practicalities; careers belong to Topic 4.',
    '## What this topic covers');
}

// 02 Five structures with the lesson's own examples
{
  let b = '';
  const mk = (y, parts) => parts.map(([kind, x, s]) => kind === 'u' ? u(x, y + 40, s, { size: 22, anchor: 'middle', fill: C.tealDark }) : t(x, y + 38, s, { size: 16, fill: C.muted })).join('');
  const rows = [
    ['Future tense', 'امتحانات کے بعد میں کالج جاؤں گا۔', 'After my exams I will go to college.', (y) => mk(y, [['u', 330, 'گا'], ['t', 350, 'male'], ['u', 450, 'گی'], ['t', 470, 'female']])],
    ['Intention', 'میرا ارادہ ہے کہ میں سائنس کے مضامین پڑھوں۔', 'I intend to study science subjects.', (y) => mk(y, [['u', 330, 'ارادہ ہے کہ'], ['t', 400, '+ subjunctive']])],
    ['Condition', 'اگر میرے نمبر اچھے آئے تو میں وظیفے کے لیے درخواست دوں گا۔', 'If I get good marks, I will apply for a scholarship.', (y) => mk(y, [['u', 330, 'اگر ... تو']])],
    ['Weighing options', 'ایک طرف یونیورسٹی کی تعلیم مہنگی ہے، دوسری طرف اس سے زیادہ مواقع ملتے ہیں۔', 'On the one hand university is expensive; on the other, it brings more opportunities.', (y) => mk(y, [['u', 360, 'ایک طرف / دوسری طرف']]), C.cream, C.olive],
    ['Others\u2019 wishes', 'میرے والدین چاہتے ہیں کہ میں اسی اسکول میں رہوں۔', 'My parents want me to stay at the same school.', (y) => mk(y, [['u', 330, 'چاہتے ہیں کہ'], ['t', 400, '+ subjunctive']])],
  ];
  rows.forEach(([l, ur, g, ex, fill, edge], i) => { const y = 110 + i * 152; b += srow(y, l, ur, g, { extra: ex(y), fill, edge }); });
  add('02-five-structures',
    svg(900, 870, 'Structures for post-16 plans', b),
    'Five Urdu structures with examples and glosses: the future (جاؤں گا), intention with ارادہ ہے کہ and the subjunctive, a condition with اگر ... تو, weighing options with ایک طرف ... دوسری طرف, and reporting what parents want.',
    'Future, intention, condition, balance and others’ wishes carry this topic.',
    '## Structures that carry this topic');
}

// 03 Anatomy of the model paragraph
{
  let b = t(450, 128, 'Task: your plans after your exams, one other option, and your reasons', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  const rows = [
    ['Intention', 'subjunctive', 'میرا ارادہ ہے کہ میں ... داخلہ لوں ... پڑھوں'],
    ['Condition', 'if ... then', 'اگر ... تو ... مل سکتا ہے'],
    ['Other option', 'past tense', 'میرے بڑے بھائی نے ... تربیت حاصل کی'],
    ['Preference', '', 'مجھے پڑھائی زیادہ پسند ہے'],
    ['Balanced judgement', 'on the one hand ... on the other', 'ایک طرف ...، دوسری طرف ...'],
  ];
  rows.forEach(([h, s, ur], i) => {
    const y = 150 + i * 96, last = i === 4;
    b += box(30, y, 840, 82, last ? C.cream : C.panel, last ? C.olive : C.panelEdge, 2.5, 12) + badge(66, y + 41, 20, String(i + 1), last ? C.mustard : C.cream) +
      t(100, y + (s ? 36 : 48), h, { size: 19, weight: 700 }) + (s ? t(100, y + 61, s, { size: 16, fill: C.muted }) : '') +
      u(846, y + 54, ur, { size: 24 });
  });
  b += t(450, 662, 'It compares two routes and weighs cost against opportunity', { size: 18, weight: 600, anchor: 'middle' });
  add('03-model-paragraph-anatomy',
    svg(900, 690, 'What the model paragraph does', b),
    'Five moves in the model answer, each with its Urdu: an intention with the subjunctive, a condition with اگر ... تو, another option in the past tense, a preference, and a balanced judgement with ایک طرف ... دوسری طرف.',
    'A persuasive post-16 answer compares routes, not just states a plan.',
    '## Worked example 1: writing about your plans');
}

// 04 Translation decisions
{
  let b = box(30, 108, 840, 76, C.tealLight, C.tealDark, 2, 12) + t(450, 140, '"After my exams I will go to college. I would like to study at a', { size: 18, italic: true, anchor: 'middle' }) +
    t(450, 166, 'university abroad, but living there is expensive."', { size: 18, italic: true, anchor: 'middle' });
  const row = (y, en, right, note) => box(30, y, 260, 104, C.panel, C.panelEdge, 2.5, 12) + t(160, y + 60, en, { size: 19, weight: 700, anchor: 'middle' }) +
    arrow(296, y + 52, 334, y + 52, { w: 3.5 }) + box(340, y, 530, 104, C.panel, C.panelEdge, 2.5, 12) + right + t(846, y + 90, note, { size: 16, anchor: 'end', fill: C.muted });
  b += row(204, '"will go"', u(846, 252, 'جاؤں گی', { size: 26 }) + t(730, 250, 'girl', { size: 16, fill: C.muted, anchor: 'end' }) + u(640, 252, 'جاؤں گا', { size: 26 }) + t(530, 250, 'boy', { size: 16, fill: C.muted, anchor: 'end' }), 'future ending matches the speaker');
  b += row(324, '"would like to"', u(846, 372, 'چاہتا ہوں', { size: 26 }), 'Urdu uses the present tense where English says "would"');
  b += row(444, '', u(846, 492, 'وہاں رہنے کے اخراجات بہت زیادہ ہیں', { size: 26 }), 'translate the sense: "the expenses are very high"');
  b += t(160, 490, '"living there is', { size: 19, weight: 700, anchor: 'middle' }) + t(160, 514, 'expensive"', { size: 19, weight: 700, anchor: 'middle' });
  b += box(30, 572, 840, 156, C.cream, C.olive, 2.5, 12) + t(54, 604, 'Answer', { size: 19, weight: 700, fill: C.olive }) +
    u(846, 650, 'امتحانات کے بعد میں کالج جاؤں گا۔ میں بیرونِ ملک کسی یونیورسٹی میں پڑھنا چاہتا ہوں،', { size: 24 }) + u(846, 704, 'لیکن وہاں رہنے کے اخراجات بہت زیادہ ہیں۔', { size: 24 });
  add('04-translation-decisions',
    svg(900, 750, 'Three decisions in one translation', b),
    'An English sentence about going to college and studying abroad is translated in three decisions: "will go" becomes جاؤں گا or جاؤں گی, "would like to" becomes چاہتا ہوں, and "living there is expensive" becomes وہاں رہنے کے اخراجات بہت زیادہ ہیں.',
    'Check the future ending, use چاہنا for "would like", and translate the sense.',
    '## Worked example 2: translating into Urdu');
}

// 05 Reading: wish versus outcome
{
  let b = panel(30, 108, 840, 148) + t(54, 140, 'Text', { size: 18, weight: 700, fill: C.muted }) +
    u(846, 178, 'میرا بھائی یونیورسٹی جانا چاہتا تھا، لیکن والد صاحب کی بیماری کی وجہ سے اس نے', { size: 24 }) +
    u(846, 230, 'پیشہ ورانہ تربیت کا انتخاب کیا تاکہ وہ جلدی کمانے لگے۔', { size: 24 });
  b += t(450, 292, 'Why did the brother choose vocational training? [2]', { size: 19, weight: 700, anchor: 'middle' });
  const col = (x, ur, h, lines, verdict, fill, edge, vfill) => box(x, 316, 266, 250, fill, edge, 2.5, 14) + u(x + 133, 368, ur, { size: 26, anchor: 'middle', fill: C.tealDark }) +
    t(x + 133, 410, h, { size: 20, weight: 700, anchor: 'middle' }) + tl(x + 133, 442, lines, { size: 17, anchor: 'middle' }, 23) +
    t(x + 133, 540, verdict, { size: 19, weight: 700, anchor: 'middle', fill: vfill });
  b += col(30, 'چاہتا تھا', 'the wish', ['he wanted university', '(not what he chose)'], 'scores nothing', '#f6ece4', C.rust, C.rust);
  b += col(317, 'کی وجہ سے', 'the cause', ['because of his', 'father’s illness'], '[1]', C.cream, C.olive, C.olive);
  b += col(604, 'تاکہ', 'the purpose', ['so that he could start', 'earning sooner'], '[1]', C.cream, C.olive, C.olive);
  b += t(450, 606, 'Two marks, two connectives, two points', { size: 18, weight: 600, anchor: 'middle' });
  add('05-wish-versus-outcome',
    svg(900, 636, 'Wish, cause and purpose', b),
    'A reading text says the brother wanted (چاہتا تھا) university but chose vocational training. The cause, after کی وجہ سے, is his father’s illness [1]; the purpose, after تاکہ, is to start earning sooner [1]. The wish itself scores nothing.',
    'Follow the connectives: کی وجہ سے gives the cause, تاکہ the purpose.',
    '## Worked example 3: a short reading question');
}
