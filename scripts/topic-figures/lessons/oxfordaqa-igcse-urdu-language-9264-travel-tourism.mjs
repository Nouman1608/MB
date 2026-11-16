import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-urdu-language-9264-travel-tourism';
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

// 01 Topic map, ending in tourism as an issue
{
  let b = '';
  const strands = [
    ['Holidays and trips', [['چھٹیاں', 'holidays'], ['سیر کرنا', 'to go sightseeing'], ['ٹھہرنا', 'to stay']]],
    ['Transport', [['ہوائی جہاز', 'aeroplane'], ['ٹرین', 'train'], ['ہوائی اڈا', 'airport']]],
    ['Planning and booking', [['ٹکٹ', 'ticket'], ['ہوٹل', 'hotel'], ['پاسپورٹ', 'passport']]],
    ['Destinations', [['ساحلِ سمندر', 'seaside, beach'], ['پہاڑ', 'mountain'], ['عجائب گھر', 'museum']]],
  ];
  strands.forEach(([h, words], i) => {
    const y = 110 + i * 122;
    b += box(30, y, 840, 110, C.panel, C.panelEdge, 2.5, 14) + t(52, y + 62, h, { size: 21, weight: 700 });
    words.forEach(([ur, en], j) => { b += vchip(704 - j * 158, y + 5, 150, ur, en); });
  });
  const y5 = 110 + 4 * 122;
  b += box(30, y5, 840, 196, C.cream, C.olive, 2.5, 14) + t(52, y5 + 36, 'Tourism as an issue', { size: 21, weight: 700 }) + t(52, y5 + 62, 'links to Global issues', { size: 16, fill: C.muted }) +
    box(400, y5 + 20, 450, 74, C.tealLight, C.tealDark, 2, 10) + u(832, y5 + 64, 'سیاحت سے مقامی لوگوں کو روزگار ملتا ہے،', { size: 24 }) + t(388, y5 + 64, 'benefit', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark }) +
    box(400, y5 + 104, 450, 74, '#f6ece4', C.rust, 2, 10) + u(832, y5 + 148, 'لیکن اس سے آلودگی بھی بڑھتی ہے۔', { size: 24 }) + t(388, y5 + 148, 'cost', { size: 16, weight: 700, anchor: 'end', fill: C.rust }) +
    t(52, y5 + 118, 'Tourism gives local people work,', { size: 15, italic: true, fill: C.muted }) + t(52, y5 + 140, 'but it also increases pollution.', { size: 15, italic: true, fill: C.muted });
  add('01-topic-map',
    svg(900, y5 + 222, 'Travel and tourism at a glance', b),
    'Five strands with Urdu words: holidays and trips (چھٹیاں, سیر کرنا, ٹھہرنا), transport (ہوائی جہاز, ٹرین, ہوائی اڈا), planning and booking (ٹکٹ, ہوٹل, پاسپورٹ), destinations (ساحلِ سمندر, پہاڑ, عجائب گھر), and tourism as an issue, which brings work but also pollution.',
    'Holidays, transport, booking and destinations, plus tourism as an issue.',
    '## What this topic covers');
}

// 02 Gender: سفر and چھٹی, and سفر versus سیر
{
  let b = '';
  const card = (x, ur, en, g, ok, bad, fill, edge) => box(x, 110, 410, 250, fill, edge, 2.5, 14) + u(x + 205, 166, ur, { size: 36, anchor: 'middle' }) + t(x + 205, 204, en, { size: 18, weight: 700, anchor: 'middle' }) + t(x + 205, 228, g, { size: 16, anchor: 'middle', fill: C.muted }) +
    tick(x + 40, 276) + u(x + 190, 290, ok, { size: 26, anchor: 'middle' }) + cross(x + 40, 330) + u(x + 190, 344, bad, { size: 26, anchor: 'middle', fill: C.rust });
  b += card(30, 'سفر', 'journey, travel', 'masculine', 'لمبا سفر', 'لمبی سفر', C.tealLight, C.tealDark);
  b += card(460, 'چھٹی', 'holiday', 'feminine', 'اچھی چھٹی', 'اچھا چھٹی', C.cream, C.olive);
  b += box(30, 380, 840, 120, C.panel, C.panelEdge, 2.5, 14) + t(52, 416, 'Do not mix them up', { size: 20, weight: 700 }) +
    u(250, 476, 'سفر', { size: 30, anchor: 'middle', fill: C.tealDark }) + t(300, 470, 'the journey itself', { size: 18 }) +
    u(560, 476, 'سیر', { size: 30, anchor: 'middle', fill: C.olive }) + t(610, 470, 'sightseeing, an outing', { size: 18 });
  add('02-safar-and-chhutti',
    svg(900, 526, 'Check the gender of travel nouns', b),
    'سفر (journey) is masculine, so لمبا سفر is right and لمبی سفر wrong; چھٹی (holiday) is feminine, so اچھی چھٹی is right and اچھا چھٹی wrong. سفر is the journey itself; سیر is sightseeing or an outing.',
    'Check each travel noun’s gender before choosing the adjective ending.',
    '## Key vocabulary');
}

// 03 Past tense: with or without the ergative
{
  let b = box(290, 108, 320, 60, C.cream, C.olive, 2.5, 14) + t(450, 145, 'A past-tense verb', { size: 20, weight: 700, anchor: 'middle' });
  b += path('M450,168 V190 H235 V212', { w: 3, extra: 'marker-end="url(#ah)"' }) + path('M450,190 H665 V212', { w: 3, extra: 'marker-end="url(#ah)"' });
  const col = (x, head, sub, rule, fill, edge) => box(x, 220, 410, 130, fill, edge, 2.5, 14) + t(x + 205, 256, head, { size: 20, weight: 700, anchor: 'middle' }) + t(x + 205, 282, sub, { size: 16, anchor: 'middle', fill: C.muted }) + t(x + 205, 326, rule, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += col(30, 'Intransitive or habitual', 'go, come, stay; used to ...', 'no ergative: agrees with subject', C.panel, C.panelEdge);
  b += col(460, 'Transitive, simple past', 'see, do, eat', 'ergative: agrees with object', C.tealLight, C.tealDark);
  const ex = (x, y, ok, ur, g) => (ok ? tick(x + 30, y - 10) : cross(x + 30, y - 10)) + u(x + 390, y, ur, { size: 25, fill: ok ? C.ink : C.rust }) + t(x + 390, y + 30, g, { size: 15, anchor: 'end', italic: true, fill: C.muted });
  b += panel(30, 366, 410, 310) + ex(30, 422, true, 'ہم ٹرین سے لاہور گئے۔', 'We went to Lahore by train.') + ex(30, 522, true, 'ہر روز ہم ساحل پر جاتے تھے۔', 'Every day we used to go to the beach.') + ex(30, 622, false, 'ہم نے لاہور گئے', 'wrong: going takes no ergative');
  b += panel(460, 366, 410, 310) + ex(460, 422, true, 'ہم نے بادشاہی مسجد دیکھی۔', 'We saw the Badshahi Mosque (mosque is f).') + ex(460, 522, true, 'ہم نے اونٹ کی سواری کی', 'We rode a camel.') + ex(460, 622, false, 'ہم نے مسجد دیکھا', 'wrong: agree with the feminine object');
  add('03-past-tense-ne',
    svg(900, 700, 'Holiday past tense: which pattern?', b),
    'A decision for past-tense verbs. Intransitive and habitual verbs take no نے and agree with the subject (ہم ٹرین سے لاہور گئے, ہر روز ہم ساحل پر جاتے تھے). Transitive simple-past verbs take نے and agree with the object (ہم نے بادشاہی مسجد دیکھی). ہم نے لاہور گئے and ہم نے مسجد دیکھا are wrong.',
    'Go and come take no نے; see and do take نے and agree with the object.',
    '## Structures that carry this topic');
}

// 04 Recount anatomy
{
  let b = t(450, 128, 'Task: a blog post about a memorable trip', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  const rows = [
    ['Past, no ergative', 'intransitive', 'ہم ... کراچی گئے / ساحلِ سمندر پر گئے'],
    ['Past with ergative', 'transitive', 'ہم نے ... سفر کیا / ہم نے اونٹ کی سواری کی'],
    ['Description', '', 'سفر بہت آرام دہ تھا'],
    ['Opinion + reason', '', 'میرے خیال میں ... کیونکہ ...'],
    ['Future wish', '', 'اگلے سال ... سیر کرنا چاہتا ہوں'],
  ];
  rows.forEach(([h, s, ur], i) => {
    const y = 150 + i * 96, hi = i >= 3;
    b += box(30, y, 840, 82, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 2.5, 12) + badge(64, y + 41, 19, String(i + 1), hi ? C.mustard : C.cream) +
      t(96, y + (s ? 36 : 48), h, { size: 18, weight: 700 }) + (s ? t(96, y + 61, s, { size: 15, fill: C.muted }) : '') + u(846, y + 54, ur, { size: 24 });
  });
  b += t(450, 662, 'Every bullet answered, and three time frames: past events, an evaluation, a plan', { size: 17, weight: 600, anchor: 'middle' });
  add('04-recount-anatomy',
    svg(900, 690, 'What the holiday recount does', b),
    'Five moves in the model blog post with their Urdu: past events without نے (کراچی گئے), past events with نے (سفر کیا, اونٹ کی سواری کی), a description (سفر بہت آرام دہ تھا), an opinion with کیونکہ, and a future wish (سیر کرنا چاہتا ہوں).',
    'Past events, description, opinion and a plan: a recount that also judges.',
    '## Worked example 1: a holiday recount');
}

// 05 Plan the time frames before writing
{
  let b = '';
  const rows = [
    ['Past events', 'ہم ٹرین سے لاہور گئے۔', 'We went to Lahore by train.', C.panel, C.panelEdge],
    ['Past description', 'موسم بہت گرم تھا۔', 'The weather was very hot.', C.panel, C.panelEdge],
    ['Superlative judgement', 'یہ میری سب سے یادگار چھٹی تھی۔', 'This was my most memorable holiday.', C.cream, C.olive],
    ['Future plan', 'اگلے سال ہم مری جائیں گے۔', 'Next year we will go to Murree.', C.tealLight, C.tealDark],
    ['Unreal condition', 'اگر میرے پاس پیسے ہوتے تو میں ترکی جاتا۔', 'If I had the money, I would go to Turkey.', C.tealLight, C.tealDark],
  ];
  rows.forEach(([l, ur, g, fill, edge], i) => {
    const y = 110 + i * 112;
    b += box(30, y, 840, 100, fill, edge, 2.5, 12) + t(52, y + 56, l, { size: 19, weight: 700 }) + u(846, y + 50, ur, { size: 26 }) + t(846, y + 86, g, { size: 15, anchor: 'end', italic: true, fill: C.muted });
  });
  b += t(450, 690, 'Before writing, mark which bullet needs past, present, future or a condition', { size: 17, weight: 600, anchor: 'middle' });
  add('05-plan-the-time-frames',
    svg(900, 716, 'Plan the time frames', b),
    'Five Urdu sentences across time frames: past events (ہم ٹرین سے لاہور گئے), past description (موسم بہت گرم تھا), a superlative judgement (یہ میری سب سے یادگار چھٹی تھی), a future plan (اگلے سال ہم مری جائیں گے) and an unreal condition (اگر میرے پاس پیسے ہوتے تو میں ترکی جاتا).',
    'Travel tasks invite past, present and future: plan which point needs which.',
    '## Exam technique');
}
