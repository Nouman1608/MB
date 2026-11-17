import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-urdu-language-theme-1-study-guide';
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
// Urdu-headed card: Urdu heading right, English heading left, both on the same row
const uhead = (x, y, w, ur, en, fill, edge, h) => box(x, y, w, h, fill, edge, 2.5, 14) + u(x + w - 18, y + 52, ur, { size: 30 }) + t(x + 18, y + 44, en, { size: 19, weight: 700 });

// 01 Theme map
{
  let b = box(200, 108, 500, 100, C.cream, C.olive, 3, 14) + u(450, 160, 'پاکستانی معاشرے کا ارتقا', { size: 30, anchor: 'middle' }) + t(450, 194, 'Theme 1: Evolving Pakistani society', { size: 18, weight: 700, anchor: 'middle' });
  const subs = [
    ['1.1', 'خاندان', 'Family', ['structures, elders,', 'roles, marriage,', 'migration'], C.panel, C.panelEdge],
    ['1.2', 'کام', 'Work', ['types of work, women’s', 'employment, unemployment,', 'technology'], C.panel, C.panelEdge],
    ['1.3', 'تعلیم', 'Equal access to education', ['the research subject:', 'research must be', 'about Pakistan'], C.tealLight, C.tealDark],
  ];
  subs.forEach(([n, ur, en, lines, fill, edge], i) => {
    const x = 30 + i * 287, cx = x + 133;
    b += path(`M450,208 V230 H${cx} V250`, { w: 3, extra: 'marker-end="url(#ah)"' });
    b += box(x, 256, 266, 230, fill, edge, i === 2 ? 3 : 2.5, 14) + t(x + 20, 290, n, { size: 18, weight: 700, fill: C.tealDark }) + u(x + 246, 312, ur, { size: 32 }) +
      wt(x + 20, 360, en, 22, { size: 19, weight: 700 }, 24) + tl(x + 20, 420, lines, { size: 16, fill: C.muted }, 22);
  });
  b += t(450, 522, 'Learn the theme in Urdu, not only through English notes', { size: 17, weight: 600, anchor: 'middle' });
  add('01-theme-1-map',
    svg(900, 550, 'Theme 1 at a glance', b),
    'Theme 1, پاکستانی معاشرے کا ارتقا (Evolving Pakistani society), has three sub-themes: family (خاندان), work (کام) and equal access to education (تعلیم), the last being the research subject, which must concern Pakistan.',
    'Three sub-themes; equal access to education is the research subject.',
    '## Where this fits in 9UR0');
}

// 02 Family: joint versus smaller household
{
  let b = '';
  b += box(30, 110, 410, 250, C.panel, C.panelEdge, 2.5, 14) + u(416, 162, 'مشترکہ خاندانی نظام', { size: 28 }) + t(52, 204, 'joint family system', { size: 19, weight: 700 }) +
    t(52, 250, 'offers', { size: 16, fill: C.muted }) + tick(70, 284) + t(98, 290, 'support', { size: 18 }) + tick(70, 324) + t(98, 330, 'shared costs', { size: 18 });
  b += box(460, 110, 410, 250, C.panel, C.panelEdge, 2.5, 14) + u(846, 162, 'الگ گھرانا / چھوٹا خاندان', { size: 28 }) + t(482, 204, 'separate or smaller household', { size: 19, weight: 700 }) +
    t(482, 250, 'offers', { size: 16, fill: C.muted }) + tick(500, 284) + t(528, 290, 'privacy', { size: 18 }) + tick(500, 324) + t(528, 330, 'independence', { size: 18 });
  b += box(30, 376, 840, 70, C.cream, C.olive, 2.5, 12) + t(450, 408, 'Strongest: a balanced position', { size: 19, weight: 700, anchor: 'middle' }) + t(450, 432, 'society is changing, without presenting either form as simply right or wrong', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(54, 486, 'Key words', { size: 18, weight: 700 });
  let x = 30;
  [['بزرگ', 'elder', 96], ['رشتے دار', 'relative', 110], ['شادی', 'marriage', 96], ['ذمہ داری', 'responsibility', 116], ['روایت', 'tradition', 100], ['نسل', 'generation', 100], ['دیکھ بھال', 'care', 110]].forEach(([ur, en, w]) => { b += vchip(x, 502, w, ur, en); x += w + 6; });
  add('02-family-structures',
    svg(900, 630, 'Family: two structures, one balanced view', b),
    'The joint family system (مشترکہ خاندانی نظام) offers support and shared costs; the separate or smaller household (الگ گھرانا / چھوٹا خاندان) offers privacy and independence. A balanced position is strongest. Key words: بزرگ, رشتے دار, شادی, ذمہ داری, روایت, نسل, دیکھ بھال.',
    'Weigh both family forms rather than calling either simply right.',
    '## Sub-theme 1.1: family (خاندان)');
}

// 03 Work: four strands
{
  let b = '';
  const cards = [
    ['Types of work', ['agriculture, industry, services,', 'informal and self-employment,', 'work abroad'], null],
    ['Women’s employment', ['barriers and opportunities'], 'خواتین کی ملازمت'],
    ['Unemployment', ['pressure on young people;', 'role of skills and training'], 'بے روزگاری'],
    ['Technology', ['freelancing; changes in how', 'and where people work'], null],
  ];
  cards.forEach(([h, lines, ur], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 176;
    b += box(x, y, 410, 160, i === 1 || i === 2 ? C.cream : C.panel, i === 1 || i === 2 ? C.olive : C.panelEdge, 2.5, 14) + t(x + 20, y + 38, h, { size: 20, weight: 700 }) +
      (ur ? u(x + 390, y + 82, ur, { size: 28 }) : '') + tl(x + 20, y + (ur ? 112 : 72), lines, { size: 16, fill: C.muted }, 22);
  });
  b += t(54, 486, 'Key words', { size: 18, weight: 700 });
  let x = 30;
  [['روزگار', 'livelihood'], ['ملازمت', 'job, service'], ['تنخواہ', 'salary'], ['مزدور', 'labourer'], ['ہنر', 'skill'], ['دفتر', 'office'], ['کاروبار', 'business'], ['ترقی', 'progress']].forEach(([ur, en]) => { b += vchip(x, 502, 99, ur, en); x += 106; });
  add('03-work-strands',
    svg(900, 630, 'Work: four strands to discuss', b),
    'Four strands of the work sub-theme: types of work, women’s employment (خواتین کی ملازمت), unemployment (بے روزگاری) and the role of skills, and technology and freelancing. Key words include روزگار, ملازمت, تنخواہ, مزدور, ہنر, دفتر, کاروبار and ترقی.',
    'Types of work, women’s employment, unemployment and technology.',
    '## Sub-theme 1.2: work (کام)');
}

// 04 Education research map
{
  const cx = 450, cy = 360;
  let b = "";
  const nodes = [
    [170, 170, 'Girls and boys', 'صنفی امتیاز', 'gender discrimination'],
    [730, 170, 'Rural and urban', 'دیہی / شہری', 'rural / urban'],
    [130, 360, 'Public and private', 'سرکاری / نجی', 'public / private'],
    [770, 360, 'Language of instruction', null, 'and its effect on opportunity'],
    [190, 550, 'Barriers', null, 'poverty, distance, child labour, cost'],
    [710, 550, 'Article 25A (2010)', null, 'free and compulsory education'],
  ];
  nodes.forEach(([x, y, h, ur, s]) => {
    b += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${C.ink}" stroke-width="2.5"/>`;
  });
  b += `<circle cx="${cx}" cy="${cy}" r="96" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + u(cx, cy - 6, 'مساوی مواقع', { size: 28, anchor: 'middle' }) + t(cx, cy + 34, 'equal access', { size: 17, weight: 700, anchor: 'middle' }) + t(cx, cy + 56, 'in Pakistan', { size: 16, anchor: 'middle', fill: C.muted });
  nodes.forEach(([x, y, h, ur, s], i) => {
    const w = 240, hh = ur ? 120 : 90;
    b += box(x - w / 2, y - hh / 2, w, hh, i === 5 ? C.tealLight : C.panel, i === 5 ? C.tealDark : C.panelEdge, 2.5, 12) + t(x, y - hh / 2 + 30, h, { size: 18, weight: 700, anchor: 'middle' }) +
      (ur ? u(x, y + 18, ur, { size: 24, anchor: 'middle', fill: C.tealDark }) + t(x, y + 48, s, { size: 15, anchor: 'middle', fill: C.muted }) : tl(x, y + 12, wrap(s, 26), { size: 15, anchor: 'middle', fill: C.muted }, 19));
  });
  b += box(30, 640, 840, 80, '#f6ece4', C.rust, 2.5, 12) + t(54, 674, 'Keep a research file of named sources, dates and figures you have checked', { size: 17, weight: 700 }) +
    t(54, 700, 'check the wording and age range of Article 25A before quoting it; never quote an untraceable statistic', { size: 15 });
  add('04-education-research-map',
    svg(900, 744, 'Researching equal access to education', b),
    'Six lines of enquiry around equal access to education (مساوی مواقع) in Pakistan: girls and boys (صنفی امتیاز), rural and urban (دیہی / شہری), public and private schools (سرکاری / نجی), language of instruction, barriers such as poverty and distance, and Article 25A, added in 2010.',
    'Compare access across gender, place, school type and language, with checked sources.',
    '## Sub-theme 1.3: equal access to education (تعلیم)');
}

// 05 Model paragraph anatomy
{
  let b = t(450, 128, 'Task: a short opinion on how family life in Pakistan is changing', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  const rows = [
    ['Statement of the change', ['پاکستان میں خاندان کا ڈھانچہ بدل رہا ہے۔'], ''],
    ['Contrast: then and now', ['پہلے زیادہ تر لوگ مشترکہ خاندان میں رہتے تھے،', 'لیکن اب شہروں میں روزگار کی وجہ سے بہت سے جوڑوں نے الگ گھر بنا لیے ہیں۔'], 'ergative: verb agrees with the object (m pl)'],
    ['A benefit and a cost', ['اس تبدیلی کا ایک فائدہ یہ ہے کہ میاں بیوی اپنے فیصلے خود کر سکتے ہیں،', 'مگر بزرگوں کی دیکھ بھال مشکل ہو گئی ہے۔'], 'feminine agreement with the noun for care'],
    ['Reasoned opinion', ['میری رائے میں سب سے بہتر راستہ یہ ہے کہ نئی نسل الگ رہ کر بھی', 'اپنے بزرگوں سے رابطہ اور ان کی خدمت جاری رکھے۔'], ''],
  ];
  let y = 148;
  rows.forEach(([h, lines, note], i) => {
    const hgt = 74 + lines.length * 50, hi = i === 3;
    b += box(30, y, 840, hgt, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 2.5, 12) + badge(64, y + 34, 18, String(i + 1), hi ? C.mustard : C.cream) +
      t(96, y + 40, h, { size: 19, weight: 700 }) + (note ? t(846, y + 40, note, { size: 15, anchor: 'end', fill: C.muted, italic: true }) : '');
    lines.forEach((ln, j) => { b += u(846, y + 92 + j * 50, ln, { size: 24 }); });
    y += hgt + 14;
  });
  add('05-model-paragraph-anatomy',
    svg(900, y + 16, 'What the model paragraph does', b),
    'The four sentences of the model paragraph on changing family life: a statement of the change, a then-and-now contrast with an ergative verb agreeing with گھر, a benefit and a cost with feminine agreement for دیکھ بھال, and a reasoned opinion.',
    'Change, contrast, benefit and cost, then a reasoned opinion.',
    '## Worked example: a model paragraph, with annotation');
}

// 06 Connectives
{
  let b = t(450, 128, 'Build each paragraph around one link so the argument can be followed', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  const items = [['اس کے برعکس', 'in contrast'], ['اس کے علاوہ', 'in addition'], ['نتیجتاً', 'as a result'], ['میرے خیال میں', 'in my opinion'], ['ایک طرف ... دوسری طرف', 'on one hand ... on the other'], ['آخر میں', 'finally']];
  items.forEach(([ur, en], i) => {
    const x = 30 + (i % 2) * 430, y = 150 + Math.floor(i / 2) * 116;
    b += box(x, y, 410, 100, i === 4 ? C.cream : C.panel, i === 4 ? C.olive : C.panelEdge, 2.5, 12) + u(x + 390, y + 52, ur, { size: 28 }) + t(x + 390, y + 86, en, { size: 16, anchor: 'end', fill: C.muted });
  });
  add('06-connectives',
    svg(900, 512, 'Connectives that carry an argument', b),
    'Six Urdu connectives with meanings: اس کے برعکس in contrast, اس کے علاوہ in addition, نتیجتاً as a result, میرے خیال میں in my opinion, ایک طرف ... دوسری طرف on one hand ... on the other, and آخر میں finally.',
    'Learn connectives as building blocks and use each in a sentence of your own.',
    '## Useful connectives and phrases');
}
