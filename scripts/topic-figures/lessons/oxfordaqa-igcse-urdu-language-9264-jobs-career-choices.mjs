import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-urdu-language-9264-jobs-career-choices';
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

// 01 Topic map with vocabulary
{
  let b = '';
  const strands = [
    ['Part-time work and work experience', 'what you do or did, and what you learned', [['جز وقتی ملازمت', 'part-time job'], ['کام کا تجربہ', 'work experience'], ['گاہک', 'customer']]],
    ['Professions', 'naming jobs and what they involve', [['ڈاکٹر', 'doctor'], ['وکیل', 'lawyer'], ['صحافی', 'journalist']]],
    ['Career choices', 'what matters to you, and qualities a job needs', [['تنخواہ', 'salary, pay'], ['ذمہ داری', 'responsibility'], ['محنتی', 'hard-working']]],
    ['Ambitions', 'what you hope to become, why, and what it depends on', [['پیشہ', 'profession'], ['ہنر / مہارت', 'skill'], ['کاروبار', 'business']]],
  ];
  strands.forEach(([h, s, words], i) => {
    const y = 110 + i * 146, hi = i === 3;
    const hl = wrap(h, 24);
    b += box(30, y, 840, 132, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 2.5, 14) + tl(52, y + 36, hl, { size: 20, weight: 700 }, 24) + wt(52, y + 36 + hl.length * 24 + 4, s, 32, { size: 16, fill: C.muted }, 20);
    words.forEach(([ur, en], j) => { b += vchip(704 - j * 158, y + 16, 150, ur, en, C.panel, hi ? C.olive : C.panelEdge); });
  });
  b += box(30, 698, 840, 52, C.tealLight, C.tealDark, 2) + t(450, 731, 'The study route to a career belongs to Topic 3: here the focus is the work itself', { size: 17, weight: 600, anchor: 'middle' });
  add('01-topic-map',
    svg(900, 776, 'Jobs, careers and ambitions', b),
    'Four strands of the topic, each with Urdu words: part-time work and work experience (جز وقتی ملازمت, کام کا تجربہ, گاہک), professions (ڈاکٹر, وکیل, صحافی), career choices (تنخواہ, ذمہ داری, محنتی) and ambitions (پیشہ, ہنر / مہارت, کاروبار).',
    'Work now, professions, what matters in a job, and ambitions; study routes belong to Topic 3.',
    '## What this topic covers');
}

// 02 بننا versus بنانا, and the gender of چاہنا
{
  let b = box(30, 110, 410, 150, C.tealLight, C.tealDark, 2.5, 14) + u(235, 180, 'بننا', { size: 40, anchor: 'middle', fill: C.tealDark }) + t(235, 232, 'to become', { size: 20, weight: 700, anchor: 'middle' });
  b += box(460, 110, 410, 150, '#f6ece4', C.rust, 2.5, 14) + u(665, 180, 'بنانا', { size: 40, anchor: 'middle', fill: C.rust }) + t(665, 232, 'to make', { size: 20, weight: 700, anchor: 'middle' });
  const line = (y, ok, ur, g) => (ok ? tick(66, y - 10) : cross(66, y - 10)) + u(846, y, ur, { size: 26, fill: ok ? C.ink : C.rust }) + t(96, y - 4, g, { size: 17, italic: true, fill: ok ? C.muted : C.rust });
  b += panel(30, 280, 840, 260) + t(54, 316, 'Ambition: become + want', { size: 20, weight: 700 });
  b += line(378, true, 'میں ڈاکٹر بننا چاہتا ہوں۔', 'I want to become a doctor.');
  b += line(444, true, 'میں صحافی بننا چاہتی ہوں۔', 'I want to become a journalist (a girl).');
  b += line(510, false, 'میں ڈاکٹر بنانا چاہتا ہوں', '"I want to make a doctor"');
  b += box(30, 560, 840, 130, C.cream, C.olive, 2.5, 12) + t(54, 594, 'Then add a reason', { size: 18, weight: 700 }) + u(846, 638, 'میں نرس بننا چاہتی ہوں کیونکہ میں بیمار لوگوں کی مدد کرنا چاہتی ہوں۔', { size: 25 }) +
    t(846, 674, 'I want to become a nurse because I want to help sick people.', { size: 16, fill: C.muted, italic: true, anchor: 'end' });
  add('02-banna-vs-banana',
    svg(900, 716, 'Become, not make', b),
    'بننا means to become and بنانا means to make. میں ڈاکٹر بننا چاہتا ہوں and میں صحافی بننا چاہتی ہوں are correct; میں ڈاکٹر بنانا چاہتا ہوں means "I want to make a doctor". An ambition then needs a reason with کیونکہ.',
    'بننا چاہنا for an ambition, with چاہتا or چاہتی to match the speaker, plus a reason.',
    '## Structures that carry this topic');
}

// 03 Work across time frames
{
  let b = '';
  const rows = [
    ['Present routine', 'ہفتے کے آخر میں میں اپنے چچا کی دکان پر کام کرتا ہوں۔', 'At weekends I work in my uncle’s shop.', C.panel, C.panelEdge, ''],
    ['One past event', 'پچھلی گرمیوں میں میں نے ایک دفتر میں کام کا تجربہ حاصل کیا۔', 'Last summer I did work experience in an office.', C.panel, C.panelEdge, 'transitive: takes the ergative'],
    ['Repeated past tasks', 'وہاں میں فون سنتی تھی۔', 'I used to answer the phone there.', C.cream, C.olive, 'habitual past: no ergative'],
    ['Condition and hope', 'اگر میں ڈاکٹر بن گیا تو اپنے گاؤں میں ایک کلینک کھولوں گا۔', 'If I become a doctor, I will open a clinic in my village.', C.tealLight, C.tealDark, ''],
  ];
  rows.forEach(([l, ur, g, fill, edge, note], i) => { const y = 110 + i * 150; b += srow(y, l, ur, g, { fill, edge, extra: note ? t(52, y + 64, note, { size: 16, fill: C.muted }) : '' }); });
  b += box(30, 714, 840, 64, '#f6ece4', C.rust, 2.5, 12) + cross(66, 746) + u(270, 754, 'میں نے فون سنتی تھی', { size: 24, anchor: 'middle', fill: C.rust }) + t(400, 750, 'is wrong: the habitual past takes no ergative', { size: 17, weight: 600 });
  add('03-work-time-frames',
    svg(900, 800, 'Talking about work in four time frames', b),
    'Four Urdu sentences: a present routine in an uncle’s shop, one past work-experience event with میں نے, repeated past tasks in the habitual past without نے (وہاں میں فون سنتی تھی), and a condition about becoming a doctor. میں نے فون سنتی تھی is wrong.',
    'Use نے for one completed transitive event, never for the habitual past.',
    '## Common mistakes');
}

// 04 Anatomy of the model paragraph
{
  let b = t(450, 128, 'Task: a part-time job, what you learned, and the career you would like', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  const rows = [
    ['Present routine', 'at weekends I work in my uncle’s shop, where ...', '... دکان پر کام کرتا ہوں، جہاں ...'],
    ['What was learned', 'from this work I have learned that ...', 'اس کام سے میں نے سیکھا ہے کہ ...'],
    ['Ambition + reason', 'I want to become a journalist because ...', '... صحافی بننا چاہتا ہوں کیونکہ ...'],
    ['Priority (comparison)', 'more important than a good salary is ...', '... سے زیادہ اہم یہ ہے کہ ... لگے'],
  ];
  rows.forEach(([h, g, ur], i) => {
    const y = 150 + i * 104, hi = i === 2;
    b += box(30, y, 840, 90, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 2.5, 12) + badge(66, y + 45, 20, String(i + 1), hi ? C.mustard : C.cream) +
      t(100, y + 38, h, { size: 19, weight: 700 }) + t(100, y + 66, g, { size: 15, fill: C.muted, italic: true }) + u(846, y + 58, ur, { size: 24 });
  });
  b += box(30, 576, 840, 62, C.tealLight, C.tealDark, 2) + t(450, 614, 'The ambition links back to the job (talking to people): the answer hangs together', { size: 17, weight: 600, anchor: 'middle' });
  add('04-model-paragraph-anatomy',
    svg(900, 664, 'What the model paragraph does', b),
    'Four moves in the model answer, each with its Urdu frame: a present routine with جہاں, what was learned (اس کام سے میں نے سیکھا ہے کہ), an ambition with a reason (صحافی بننا چاہتا ہوں کیونکہ), and a priority comparison (سے زیادہ اہم یہ ہے کہ).',
    'Routine, lesson learned, justified ambition, considered priority.',
    '## Worked example 1: part-time work and an ambition');
}

// 05 Reading: fact, opinion, aspiration
{
  let b = t(450, 128, 'Give one advantage and one disadvantage of the aunt’s job, and state her ambition. [3]', { size: 17, weight: 600, anchor: 'middle' });
  const rows = [
    ['Fact', 'she works in a bank', 'میری خالہ ایک بینک میں کام کرتی ہیں', '', C.panel, C.panelEdge, C.muted],
    ['Advantage', 'the pay is good', 'اور ان کی تنخواہ اچھی ہے،', '[1]', C.cream, C.olive, C.olive],
    ['Disadvantage', 'she finds the work boring', 'لیکن وہ کہتی ہیں کہ انہیں اپنا کام اکتا دینے والا لگتا ہے۔', '[1]', C.cream, C.olive, C.olive],
    ['What she does now', 'cooking classes: not the ambition', 'اس لیے وہ اب شام کو کھانا پکانے کی کلاسیں لیتی ہیں', 'trap', '#f6ece4', C.rust, C.rust],
    ['Ambition', 'to open her own restaurant one day', 'اور ایک دن اپنا ریستوران کھولنا چاہتی ہیں۔', '[1]', C.tealLight, C.tealDark, C.tealDark],
  ];
  rows.forEach(([h, g, ur, m, fill, edge, mc], i) => {
    const y = 150 + i * 112;
    b += box(30, y, 840, 100, fill, edge, 2.5, 12) + t(52, y + 34, h, { size: 18, weight: 700, fill: mc === C.muted ? C.ink : mc }) + (m ? t(250, y + 34, m, { size: 18, weight: 700, fill: mc }) : '') +
      u(846, y + 50, ur, { size: 24 }) + t(846, y + 86, g, { size: 15, fill: C.muted, italic: true, anchor: 'end' });
  });
  b += t(450, 724, 'The connective at the start of each clause signals its job: but, so, and', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-fact-opinion-aspiration',
    svg(900, 750, 'Reading in layers', b),
    'The reading text split into clauses: a fact (she works in a bank), the advantage (good pay), the disadvantage after لیکن (the work is boring), what she does now after اس لیے (cooking classes, a trap) and the ambition (her own restaurant one day).',
    'Separate what someone does now from what they hope to do.',
    '## Worked example 3: a short reading question');
}
