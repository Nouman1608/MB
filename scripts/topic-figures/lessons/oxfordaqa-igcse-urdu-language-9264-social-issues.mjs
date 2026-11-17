import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-urdu-language-9264-social-issues';
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

// 01 Two sub-topics, and what is not here
{
  let b = '';
  const col = (x, head, sub, words, fill, edge) => {
    let s = box(x, 110, 410, 456, fill, edge, 2.5, 14) + t(x + 22, 148, head, { size: 21, weight: 700 }) + t(x + 22, 174, sub, { size: 16, fill: C.muted });
    words.forEach(([ur, en], i) => { s += vchip(x + 18 + (i % 2) * 190, 196 + Math.floor(i / 2) * 120, 180, ur, en); });
    return s;
  };
  b += col(30, 'Charity and voluntary work', 'helping others, raising money, charities', [['رضاکار', 'volunteer'], ['فلاحی ادارہ', 'charitable organisation'], ['چندہ جمع کرنا', 'to collect donations'], ['عطیہ دینا', 'to donate'], ['ضرورت مند', 'needy (person)'], ['یتیم خانہ', 'orphanage']], C.panel, C.panelEdge);
  b += col(460, 'Healthy and unhealthy living', 'diet, exercise, sleep, stress, habits', [['متوازن غذا', 'balanced diet'], ['ورزش', 'exercise'], ['نیند', 'sleep'], ['ذہنی دباؤ', 'stress'], ['موٹاپا', 'obesity'], ['تمباکو نوشی', 'smoking']], C.panel, C.panelEdge);
  b += box(30, 600, 840, 92, '#f6ece4', C.rust, 2.5, 12) + t(54, 636, 'Poverty is not part of this topic: it sits under Global issues', { size: 19, weight: 700, fill: C.rust }) +
    t(54, 666, 'Social issues here are about individuals and communities, not the wider world', { size: 17 });
  add('01-two-sub-topics',
    svg(900, 718, 'Social issues: two sub-topics', b),
    'Charity and voluntary work (رضاکار, فلاحی ادارہ, چندہ جمع کرنا, عطیہ دینا, ضرورت مند, یتیم خانہ) and healthy and unhealthy living (متوازن غذا, ورزش, نیند, ذہنی دباؤ, موٹاپا, تمباکو نوشی). Poverty belongs to Global issues.',
    'Volunteering and health, about individuals and communities; poverty is a global issue.',
    '## What this topic covers');
}

// 02 Advice, purpose, cause, hypothesis
{
  let b = '';
  const mk = (y, ur, note) => u(330, y + 42, ur, { size: 22, anchor: 'middle', fill: C.tealDark }) + (note ? t(420, y + 38, note, { size: 16, fill: C.muted }) : '');
  const rows = [
    ['Advice', 'ہمیں روزانہ ورزش کرنی چاہیے', 'We should exercise every day.', (y) => mk(y, 'کو ... چاہیے', 'the person advised takes the oblique')],
    ['Purpose', 'میں رضاکارانہ کام کرتا ہوں تاکہ دوسروں کی مدد کر سکوں', 'I do voluntary work so that I can help others.', (y) => mk(y, 'تاکہ', '+ subjunctive')],
    ['Cause', 'نیند کی کمی کی وجہ سے طلبہ کلاس میں توجہ نہیں دے پاتے', 'Because of lack of sleep, students cannot concentrate in class.', (y) => mk(y, 'کی وجہ سے', '')],
    ['Hypothesis', 'اگر نوجوان زیادہ سوتے تو وہ کم ذہنی دباؤ محسوس کرتے', 'If young people slept more, they would feel less stressed.', (y) => mk(y, 'اگر ... تو', 'more sophisticated than "should"'), C.cream, C.olive],
  ];
  rows.forEach(([l, ur, g, ex, fill, edge], i) => { const y = 110 + i * 152; b += srow(y, l, ur, g, { extra: ex(y), fill, edge }); });
  add('02-advice-purpose-cause-hypothesis',
    svg(900, 730, 'Four structures for social issues', b),
    'Four Urdu structures with glosses: advice with کو ... چاہیے (ہمیں روزانہ ورزش کرنی چاہیے), purpose with تاکہ, cause with کی وجہ سے about lack of sleep, and a hypothesis with اگر ... تو about young people sleeping more.',
    'Should, so that, because of, and if ... would: the core of a social-issues answer.',
    '## Structures that carry this topic');
}

// 03 Matching halves in a hypothetical
{
  let b = box(30, 110, 840, 200, C.tealLight, C.tealDark, 2.5, 14) + tick(66, 150) + t(94, 156, 'Both halves in the matching form', { size: 20, weight: 700 }) +
    u(846, 226, 'اگر نوجوان زیادہ سوتے تو وہ کم ذہنی دباؤ محسوس کرتے۔', { size: 28 }) + t(846, 284, 'If young people slept more, they would feel less stressed.', { size: 16, anchor: 'end', italic: true, fill: C.muted });
  b += box(30, 330, 840, 200, '#f6ece4', C.rust, 2.5, 14) + cross(66, 370) + t(94, 376, 'Mixed forms: a common error', { size: 20, weight: 700, fill: C.rust }) +
    u(846, 446, 'اگر نوجوان زیادہ سوئیں تو وہ ... محسوس کرتے', { size: 28, fill: C.rust }) + t(846, 504, 'the first half no longer matches the second', { size: 16, anchor: 'end', italic: true, fill: C.muted });
  b += box(30, 550, 840, 78, C.panel, C.panelEdge, 2.5, 12) + t(54, 584, 'Also check the time phrase:', { size: 18, weight: 700 }) + t(54, 610, '"every Saturday", not "every week"', { size: 16, fill: C.muted }) +
    u(846, 598, 'ہر ہفتے کے دن', { size: 26 });
  add('03-matching-hypothetical',
    svg(900, 654, 'If ... would: keep both halves matching', b),
    'A correct hypothetical keeps both verbs in the same form: اگر نوجوان زیادہ سوتے تو وہ کم ذہنی دباؤ محسوس کرتے. Mixing forms (اگر نوجوان زیادہ سوئیں تو وہ ... محسوس کرتے) is a common error. Every Saturday is ہر ہفتے کے دن.',
    'In "if ... would", both halves take the matching form.',
    '## Worked example 1: translation into Urdu');
}

// 04 Healthy-living paragraph anatomy
{
  let b = t(450, 128, 'Task: do young people in your area live healthily? Your habits, and what could be done', { size: 16, italic: true, anchor: 'middle', fill: C.muted });
  const rows = [
    ['Problem + cause and effect', 'جس کی وجہ سے', 'which is why ... (linking a habit to its effect)'],
    ['Trend: present continuous', 'موٹاپا بڑھ رہا ہے', 'obesity is rising'],
    ['Personal then-and-now', 'پہلے میں بھی روزانہ کولڈ ڈرنک پیتا تھا، لیکن اب میں صرف پانی پیتا ہوں', 'I used to drink cola daily, but now I drink only water'],
    ['Solution + purpose', 'اسکولوں کو ... چاہیے ... تاکہ طلبہ فٹ رہیں', 'schools should ... so that students stay fit'],
  ];
  rows.forEach(([l, ur, g], i) => {
    const y = 148 + i * 150, hi = i === 2;
    b += srow(y, (i + 1) + '. ' + l, ur, g, { fill: hi ? C.cream : C.panel, edge: hi ? C.olive : C.panelEdge, size: 24, h: 136 });
  });
  b += t(450, 762, 'To push it further, add a hypothetical with if ... would', { size: 17, weight: 600, anchor: 'middle' });
  add('04-healthy-living-anatomy',
    svg(900, 790, 'What the health paragraph does', b),
    'Four moves in the model answer: the problem with a cause-and-effect link (جس کی وجہ سے), a trend in the present continuous (موٹاپا بڑھ رہا ہے), a personal then-and-now change, and a solution for schools with a purpose clause (تاکہ طلبہ فٹ رہیں).',
    'Problem, trend, personal change and a solution with a purpose.',
    '## Worked example 2: a paragraph on healthy living');
}

// 05 Charity: weak versus developed
{
  let b = box(30, 110, 840, 90, '#f6ece4', C.rust, 2.5, 12) + t(54, 146, 'Weak', { size: 20, weight: 700, fill: C.rust }) + t(54, 174, 'a bare statement and a vague judgement', { size: 15, fill: C.muted }) +
    u(846, 166, 'میں خیرات دیتا ہوں۔ یہ اچھی بات ہے۔', { size: 26, fill: C.rust });
  b += t(54, 240, 'Developed', { size: 20, weight: 700, fill: C.tealDark });
  const rows = [
    ['What you did', 'پچھلے رمضان میں ہم نے اپنے اسکول میں ضرورت مند خاندانوں کے لیے راشن جمع کیا۔', 'Last Ramadan we collected rations for needy families at school.'],
    ['Your own part', 'میں نے دس دن تک روزانہ دو گھنٹے سامان کی پیکنگ میں مدد کی۔', 'For ten days I helped pack goods for two hours a day.'],
    ['The difference it made', 'جب ہم نے یہ تھیلے بانٹے تو لوگوں کی خوشی دیکھ کر مجھے بہت سکون ملا۔', 'Seeing people’s happiness when we gave out the bags gave me great peace.'],
    ['A wider view', 'میرے خیال میں ہر طالب علم کو سال میں کم از کم ایک بار رضاکارانہ کام کرنا چاہیے۔', 'Every student should volunteer at least once a year.'],
  ];
  rows.forEach(([l, ur, g], i) => {
    const y = 258 + i * 142, hi = i === 3;
    b += srow(y, l, ur, g, { fill: hi ? C.tealLight : C.panel, edge: hi ? C.tealDark : C.panelEdge, size: 23, h: 130 });
  });
  add('05-charity-developed-answer',
    svg(900, 840, 'Charity: from bare to developed', b),
    'A weak answer (میں خیرات دیتا ہوں۔ یہ اچھی بات ہے۔) against a developed one in four sentences: what was done last Ramadan, the writer’s own part, the difference it made, and a wider view that every student should volunteer.',
    'Say what you did, your part, the difference it made, and a wider view.',
    '## Charity: what a developed answer looks like');
}

// 06 Opinion starters
{
  let b = t(450, 128, 'Each starter is followed by a full clause with its own verb', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  const st = [
    ['اس میں کوئی شک نہیں کہ ...', 'there is no doubt that ...'],
    ['یہ بات افسوس ناک ہے کہ ...', 'it is sad that ...'],
    ['میری رائے میں اصل مسئلہ یہ ہے کہ ...', 'in my view, the real problem is that ...'],
    ['سب سے اہم بات یہ ہے کہ ...', 'the most important thing is that ...'],
    ['اگر ہم واقعی تبدیلی چاہتے ہیں تو ...', 'if we really want change, then ...'],
  ];
  st.forEach(([ur, en], i) => {
    const y = 148 + i * 86;
    b += box(30, y, 840, 74, i % 2 ? C.panel : C.panel, C.panelEdge, 2.5, 12) + t(54, y + 44, en, { size: 18 }) + u(846, y + 48, ur, { size: 26 });
  });
  b += box(30, 586, 840, 84, C.cream, C.olive, 2.5, 12) + t(54, 622, 'Obligation in the future, an alternative to should:', { size: 17, weight: 700 }) +
    t(54, 648, 'we will have to make time', { size: 15, fill: C.muted, italic: true }) + u(846, 634, 'وقت نکالنا ہو گا', { size: 26 });
  add('06-opinion-starters',
    svg(900, 696, 'Vary how you give an opinion', b),
    'Five Urdu opinion starters with English meanings, from اس میں کوئی شک نہیں کہ to اگر ہم واقعی تبدیلی چاہتے ہیں تو, each followed by a full clause, plus وقت نکالنا ہو گا for a future obligation.',
    'Two or three different starters in one answer show range safely.',
    '## Sentence starters for opinions');
}
