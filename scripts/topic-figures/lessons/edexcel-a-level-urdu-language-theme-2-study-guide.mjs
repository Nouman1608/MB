import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-urdu-language-theme-2-study-guide';
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

// 01 Theme map
{
  let b = box(150, 104, 600, 110, C.cream, C.olive, 3, 14) + u(450, 152, 'اردو بولنے والی دُنیا میں تمدن اور فنونِ لطیفہ', { size: 28, anchor: 'middle' }) + t(450, 200, 'Theme 2: Art and culture in the Urdu-speaking world', { size: 18, weight: 700, anchor: 'middle' });
  const subs = [
    ['2.1', 'لوک رسوم و روایت', 'Folklore and tradition', ['oral tradition, folk tales,', 'festivals, performance,', 'preservation and change'], C.panel, C.panelEdge],
    ['2.2', 'مقبول کلچر', 'Popular culture', ['drama, film, music, sport,', 'fashion, food, youth culture,', 'local and global influences'], C.panel, C.panelEdge],
    ['2.3', 'میڈیا', 'The media', ['the research subject:', 'Pakistan, or one area of India', 'where Urdu is official'], C.tealLight, C.tealDark],
  ];
  subs.forEach(([n, ur, en, lines, fill, edge], i) => {
    const x = 30 + i * 287, cx = x + 133;
    b += path(`M450,214 V232 H${cx} V250`, { w: 3, extra: 'marker-end="url(#ah)"' });
    b += box(x, 256, 266, 230, fill, edge, i === 2 ? 3 : 2.5, 14) + t(x + 20, 290, n, { size: 18, weight: 700, fill: C.tealDark }) + u(x + 246, 312, ur, { size: 24 }) +
      t(x + 20, 362, en, { size: 19, weight: 700 }) + tl(x + 20, 410, lines, { size: 16, fill: C.muted }, 22);
  });
  b += t(450, 522, 'Not only literature: customs, popular entertainment and media too', { size: 17, weight: 600, anchor: 'middle' });
  add('01-theme-2-map',
    svg(900, 550, 'Theme 2 at a glance', b),
    'Theme 2, اردو بولنے والی دُنیا میں تمدن اور فنونِ لطیفہ (Art and culture in the Urdu-speaking world), has three sub-themes: folklore and tradition (لوک رسوم و روایت), popular culture (مقبول کلچر) and the media (میڈیا), the research subject.',
    'Three sub-themes; the media is the research subject.',
    '## Where this fits in 9UR0');
}

// 02 Research place rule
{
  let b = '';
  const col = (x, head, lines, fill, edge) => box(x, 110, 410, 190, fill, edge, 2.5, 14) + t(x + 22, 148, head, { size: 21, weight: 700 }) + tl(x + 22, 190, lines, { size: 18 }, 30);
  b += col(30, 'Themes 1, 3 and 4', ['Research must concern', 'Pakistan'], C.panel, C.panelEdge);
  b += col(460, 'Theme 2', ['Pakistan', 'or', 'one area of India where Urdu', 'is an official language'], C.cream, C.olive);
  b += box(30, 320, 840, 90, '#f6ece4', C.rust, 2.5, 12) + cross(66, 365) + t(96, 360, 'Only one country or area: never research on the media', { size: 18, weight: 700 }) + t(96, 386, 'based on several countries', { size: 18, weight: 700 });
  b += box(30, 430, 840, 80, C.tealLight, C.tealDark, 2, 12) + t(54, 478, 'Check which place you chose before you start collecting material', { size: 18, weight: 600 });
  add('02-research-place-rule',
    svg(900, 536, 'Where your research may be based', b),
    'For Themes 1, 3 and 4 research must concern Pakistan; for Theme 2 it may concern Pakistan or one area of India where Urdu is an official language, but only one country or area.',
    'Theme 2 allows Pakistan or one Urdu-official area of India, never both.',
    '## Where this fits in 9UR0');
}

// 03 Folklore web
{
  const cx = 450, cy = 330;
  const nodes = [
    [170, 170, 'Oral tradition', 'زبانی روایت', 'stories, songs, sayings'],
    [730, 170, 'Folk tales and poetry', 'لوک کہانی', 'Heer and Ranjha; Sohni and Mahiwal'],
    [160, 460, 'Festivals and customs', 'میلہ', 'Eid, melas, mehndi'],
    [740, 460, 'Performance', 'مشاعرہ', 'qawwali, folk music, poetry gathering'],
  ];
  let b = nodes.map(([x, y]) => `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  b += `<circle cx="${cx}" cy="${cy}" r="96" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + u(cx, cy - 2, 'وراثت', { size: 32, anchor: 'middle' }) + t(cx, cy + 40, 'heritage', { size: 18, weight: 700, anchor: 'middle' });
  nodes.forEach(([x, y, h, ur, s]) => {
    b += box(x - 140, y - 70, 280, 150, C.panel, C.panelEdge, 2.5, 12) + t(x, y - 40, h, { size: 18, weight: 700, anchor: 'middle' }) + u(x, y + 8, ur, { size: 26, anchor: 'middle', fill: C.tealDark }) + tl(x, y + 42, wrap(s, 30), { size: 15, anchor: 'middle', fill: C.muted }, 19);
  });
  b += box(30, 566, 840, 76, C.tealLight, C.tealDark, 2, 12) + t(54, 600, 'Preservation and change', { size: 18, weight: 700 }) + t(54, 626, 'how traditions are recorded, taught, adapted and sometimes lost', { size: 16, fill: C.muted });
  add('03-folklore-web',
    svg(900, 666, 'Folklore and tradition', b),
    'Heritage (وراثت) at the centre of four strands: oral tradition (زبانی روایت), folk tales and poetry such as Heer and Ranjha (لوک کہانی), festivals and customs such as melas (میلہ), and performance traditions including the mushaira (مشاعرہ), plus preservation and change.',
    'Oral tradition, tales, festivals and performance, and how they survive or change.',
    '## Sub-theme 2.1: folklore and tradition (لوک رسوم و روایت)');
}

// 04 Popular culture: local and global
{
  let b = '';
  let x = 30;
  [['ڈراما', 'drama'], ['فلم', 'film'], ['موسیقی', 'music'], ['کھیل', 'sport'], ['فیشن', 'fashion'], ['نوجوان', 'young person'], ['رجحان', 'trend']].forEach(([ur, en]) => { b += vchip(x, 110, 114, ur, en); x += 121; });
  b += box(30, 236, 360, 140, C.panel, C.panelEdge, 2.5, 14) + t(210, 286, 'Regional', { size: 21, weight: 700, anchor: 'middle' }) + t(210, 316, 'entertainment', { size: 21, weight: 700, anchor: 'middle' });
  b += box(510, 236, 360, 140, C.panel, C.panelEdge, 2.5, 14) + t(690, 286, 'International', { size: 21, weight: 700, anchor: 'middle' }) + t(690, 316, 'styles', { size: 21, weight: 700, anchor: 'middle' });
  b += arrow(394, 306, 440, 306, { w: 4 }) + arrow(506, 306, 460, 306, { w: 4 }) + t(450, 350, 'mix', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  b += box(30, 396, 410, 110, C.tealLight, C.tealDark, 2.5, 12) + t(235, 444, 'enriches local culture?', { size: 19, weight: 700, anchor: 'middle' }) + t(235, 474, 'one side of the debate', { size: 15, anchor: 'middle', fill: C.muted });
  b += box(460, 396, 410, 110, C.cream, C.olive, 2.5, 12) + t(665, 444, 'dilutes local culture?', { size: 19, weight: 700, anchor: 'middle' }) + t(665, 474, 'the other side', { size: 15, anchor: 'middle', fill: C.muted });
  b += t(450, 542, 'Choose one clear viewpoint and support it with specific examples', { size: 16, weight: 600, anchor: 'middle' });
  add('04-popular-culture-debate',
    svg(900, 570, 'Popular culture: local meets global', b),
    'Popular-culture vocabulary (ڈراما, فلم, موسیقی, کھیل, فیشن, نوجوان, رجحان) and the debate it feeds: regional entertainment and international styles mix, and you can argue whether this enriches or dilutes local culture.',
    'Use popular culture to argue whether global influence enriches or dilutes.',
    '## Sub-theme 2.2: popular culture (مقبول کلچر)');
}

// 05 Media research map
{
  let b = '';
  const rows = [
    ['Print and broadcast', 'newspapers, magazines, radio, TV; growth of private channels', [['اخبار', 'newspaper'], ['رسالہ', 'magazine'], ['نشریات', 'broadcasts']]],
    ['Online and social media', 'how people get news and entertainment', [['سوشل میڈیا', 'social media'], ['خبر', 'news item']]],
    ['Influence', 'on opinion, language and behaviour', [['اثر', 'influence'], ['اشتہار', 'advertisement']]],
    ['Freedom and responsibility', 'regulation, censorship, accuracy, rumours', [['آزادیٔ اظہار', 'freedom of expression']]],
    ['Urdu in the media', 'register changes between news, drama and advertising', []],
  ];
  rows.forEach(([h, s, words], i) => {
    const y = 110 + i * 108;
    b += box(30, y, 840, 96, i === 3 ? C.cream : C.panel, i === 3 ? C.olive : C.panelEdge, 2.5, 12) + t(52, y + 38, h, { size: 19, weight: 700 }) + wt(52, y + 64, s, 40, { size: 15, fill: C.muted }, 19);
    let xr = 852;
    words.forEach(([ur, en], j) => {
      const w = ur.length > 8 ? 170 : 120, xx = xr - w; xr = xx - 6;
      b += box(xx, y + 8, w, 80, C.panel, C.panelEdge, 2, 10) + u(xx + w / 2, y + 46, ur, { size: 22, anchor: 'middle' }) + t(xx + w / 2, y + 76, en, { size: 15, anchor: 'middle', fill: C.muted });
    });
  });
  b += box(30, 652, 840, 70, C.tealLight, C.tealDark, 2, 12) + t(54, 684, 'Compare at least two viewpoints on each point', { size: 18, weight: 700 }) + t(54, 708, 'benefits and risks, from named, checked sources', { size: 15, fill: C.muted });
  add('05-media-research-map',
    svg(900, 746, 'Researching the media', b),
    'Five areas for media research with Urdu terms: print and broadcast (اخبار, رسالہ, نشریات), online and social media (سوشل میڈیا, خبر), influence (اثر, اشتہار), freedom and responsibility (آزادیٔ اظہار), and how Urdu’s register changes across news, drama and advertising.',
    'Cover each area with two viewpoints and sources you have checked.',
    '## Sub-theme 2.3: the media (میڈیا)');
}

// 06 Model paragraph anatomy
{
  let b = t(450, 128, 'Task: a short opinion on the importance of folk traditions', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  const rows = [
    ['General statement', ['لوک گیت اور کہانیاں نسل در نسل زبانی طور پر منتقل ہوتی رہی ہیں۔'], 'plural subject, feminine plural verb'],
    ['Example', ['ہیر رانجھا جیسی داستانیں آج بھی ڈراموں اور گانوں میں پیش کی جاتی ہیں۔'], 'passive, agreeing with the feminine plural'],
    ['Opinion with a condition', ['میری رائے میں اگر نوجوان ان روایات سے کٹ گئے', 'تو ہماری ثقافتی شناخت کمزور ہو جائے گی۔'], 'if ... then'],
    ['Recommendation', ['اس لیے اسکولوں اور میڈیا کو چاہیے کہ وہ ان روایات کو زندہ رکھیں۔'], ''],
  ];
  let y = 148;
  rows.forEach(([h, lines, note], i) => {
    const hgt = 74 + lines.length * 50, hi = i === 2;
    b += box(30, y, 840, hgt, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 2.5, 12) + badge(64, y + 34, 18, String(i + 1), hi ? C.mustard : C.cream) +
      t(96, y + 40, h, { size: 19, weight: 700 }) + (note ? t(846, y + 40, note, { size: 15, anchor: 'end', fill: C.muted, italic: true }) : '');
    lines.forEach((ln, j) => { b += u(846, y + 92 + j * 50, ln, { size: 24 }); });
    y += hgt + 14;
  });
  add('06-model-paragraph-anatomy',
    svg(900, y + 16, 'What the model paragraph does', b),
    'The four sentences of the model paragraph on folk traditions: a general statement with a feminine plural verb, an example with the passive پیش کی جاتی ہیں, an opinion with اگر ... تو, and a recommendation introduced by اس لیے.',
    'Statement, example, conditional opinion and recommendation.',
    '## Worked example: a model paragraph, with annotation');
}
