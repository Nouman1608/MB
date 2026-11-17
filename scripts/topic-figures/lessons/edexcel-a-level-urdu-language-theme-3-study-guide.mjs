import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-urdu-language-theme-3-study-guide';
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
  let b = box(150, 104, 600, 110, C.cream, C.olive, 3, 14) + u(450, 152, 'ہجرت ترکِ وطن اور کثیر الثقافتی معاشرہ', { size: 28, anchor: 'middle' }) + t(450, 200, 'Theme 3: Immigration and the multicultural society', { size: 18, weight: 700, anchor: 'middle' });
  const subs = [
    ['3.1', 'ایک متنوع اور گوناگوں معاشرے کے مثبت پہلو', 'Positive features of a diverse society', C.panel, C.panelEdge, ''],
    ['3.2', 'ہجرت کی جانب رجحانات و طرزِ فکر', 'Attitudes towards immigration', C.panel, C.panelEdge, ''],
    ['3.3', 'پاکستان سے ہجرت', 'Emigration from Pakistan', C.tealLight, C.tealDark, 'research subject: based on Pakistan'],
  ];
  b += `<line x1="60" y1="214" x2="60" y2="${246 + 2 * 112 + 48}" stroke="${C.ink}" stroke-width="3"/>`;
  subs.forEach(([n, ur, en, fill, edge, note], i) => {
    const y = 246 + i * 112;
    b += `<line x1="60" y1="${y + 48}" x2="92" y2="${y + 48}" stroke="${C.ink}" stroke-width="3"/>` +
      box(96, y, 774, 96, fill, edge, i === 2 ? 3 : 2.5, 14) + t(116, y + 40, n, { size: 18, weight: 700, fill: C.tealDark }) + wt(166, y + 40, en, 26, { size: 18, weight: 700 }, 23) +
      (note ? t(166, y + 82, note, { size: 15, fill: C.tealDark, italic: true }) : '') + u(850, y + 58, ur, { size: 26 });
  });
  b += t(450, 612, 'Practise stating a position and acknowledging a different one', { size: 17, weight: 600, anchor: 'middle' });
  add('01-theme-3-map',
    svg(900, 640, 'Theme 3 at a glance', b),
    'Theme 3, ہجرت ترکِ وطن اور کثیر الثقافتی معاشرہ (Immigration and the multicultural society), has three sub-themes: positive features of a diverse society, attitudes towards immigration, and emigration from Pakistan (پاکستان سے ہجرت), the research subject.',
    'Three sub-themes; emigration from Pakistan is the research subject.',
    '## Where this fits in 9UR0');
}

// 02 Positives of a diverse society
{
  const cx = 450, cy = 300;
  const nodes = [
    [175, 175, 'Cultural variety', ['languages, food, dress,', 'music and festivals']],
    [725, 175, 'Economic contribution', ['skills, enterprise, labour,', 'new markets']],
    [175, 425, 'Learning and understanding', ['contact can reduce prejudice', 'and widen knowledge']],
    [725, 425, 'Shared citizenship', ['common values with', 'respect for difference']],
  ];
  let b = nodes.map(([x, y]) => `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  b += `<circle cx="${cx}" cy="${cy}" r="92" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + u(cx, cy - 2, 'تنوع', { size: 34, anchor: 'middle' }) + t(cx, cy + 40, 'diversity', { size: 18, weight: 700, anchor: 'middle' });
  nodes.forEach(([x, y, h, lines]) => {
    b += box(x - 140, y - 56, 280, 112, C.panel, C.panelEdge, 2.5, 12) + t(x, y - 22, h, { size: 18, weight: 700, anchor: 'middle' }) + tl(x, y + 8, lines, { size: 16, anchor: 'middle', fill: C.muted }, 21);
  });
  b += t(54, 524, 'Key words', { size: 18, weight: 700 });
  let x = 30;
  [['کثیر الثقافتی', 'multicultural', 140], ['رواداری', 'tolerance', 110], ['باہمی احترام', 'mutual respect', 140], ['ثقافت', 'culture', 100], ['زبان', 'language', 100], ['تہوار', 'festival', 100], ['شہریت', 'citizenship', 110]].forEach(([ur, en, w]) => { b += vchip(x, 540, w, ur, en); x += w + 6; });
  add('02-diverse-society-positives',
    svg(900, 666, 'Positive features of a diverse society', b),
    'Diversity (تنوع) at the centre of four positives: cultural variety, economic contribution, learning and understanding, and shared citizenship. Key words: کثیر الثقافتی, رواداری, باہمی احترام, ثقافت, زبان, تہوار, شہریت.',
    'Variety, contribution, understanding and shared citizenship.',
    '## Sub-theme 3.1: positive features of a diverse society');
}

// 03 Attitudes: two sides, then a judgement
{
  let b = '';
  b += box(30, 110, 410, 130, C.tealLight, C.tealDark, 2.5, 14) + t(52, 148, 'Welcoming and supportive', { size: 20, weight: 700 }) + tl(52, 182, ['migrants seen as contributors', 'and neighbours'], { size: 17 }, 23);
  b += box(460, 110, 410, 130, C.cream, C.olive, 2.5, 14) + t(482, 148, 'Worries and objections', { size: 20, weight: 700 }) + tl(482, 182, ['jobs, housing, public services,', 'change in local identity'], { size: 17 }, 23);
  const issues = [['Prejudice and discrimination', 'تعصب', 'امتیازی سلوک', 'prejudice', 'discrimination'], ['Integration and identity', 'انضمام', 'شناخت', 'integration', 'identity'], ['Role of media and politicians', 'رجحان', '', 'attitude, trend', '']];
  issues.forEach(([h, a, c, ga, gc], i) => {
    const x = 30 + i * 287;
    b += box(x, 258, 266, 146, C.panel, C.panelEdge, 2.5, 12) + wt(x + 18, 290, h, 24, { size: 17, weight: 700 }, 21) + u(x + 248, 358, a, { size: 23 }) + t(x + 248, 386, ga, { size: 15, fill: C.muted, anchor: 'end' }) + (c ? u(x + 18, 358, c, { size: 23, anchor: 'start' }) + t(x + 18, 386, gc, { size: 15, fill: C.muted }) : '');
  });
  const steps = ['State what each side says', 'Give the reasons they offer', 'Say which you find more convincing, and why'];
  steps.forEach((s, i) => {
    const y = 424 + i * 58;
    b += box(110, y, 760, 46, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge, 2.5, 10) + badge(62, y + 23, 18, String(i + 1), C.cream) + t(132, y + 30, s, { size: 18, weight: 600 });
  });
  add('03-attitudes-two-sides',
    svg(900, 614, 'Discussing attitudes to immigration', b),
    'Welcoming attitudes see migrants as contributors and neighbours; worries concern jobs, housing, services and local identity. Related issues are prejudice and discrimination (تعصب, امتیازی سلوک), integration and identity (انضمام, شناخت) and the media. Answer by stating each side, its reasons, then your judgement.',
    'Give both sides with their reasons, then say which convinces you and why.',
    '## Sub-theme 3.2: attitudes towards immigration');
}

// 04 Emigration from Pakistan
{
  let b = '';
  b += box(30, 200, 220, 200, C.cream, C.olive, 3, 14) + t(140, 244, 'Pakistan', { size: 22, weight: 700, anchor: 'middle' });
  b += t(140, 276, 'push factors', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + tl(140, 302, ['limited jobs, lower wages,', 'insecurity, further study'], { size: 15, anchor: 'middle' }, 20);
  b += box(650, 130, 220, 110, C.tealLight, C.tealDark, 2.5, 14) + t(760, 192, 'Gulf region', { size: 20, weight: 700, anchor: 'middle' });
  b += box(650, 310, 220, 110, C.tealLight, C.tealDark, 2.5, 14) + t(760, 358, 'Europe and', { size: 20, weight: 700, anchor: 'middle' }) + t(760, 384, 'North America', { size: 20, weight: 700, anchor: 'middle' });
  b += t(760, 268, 'different patterns of', { size: 15, anchor: 'middle', fill: C.muted }) + t(760, 290, 'work and settlement', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(254, 250, 644, 190, { w: 5 }) + arrow(254, 300, 644, 360, { w: 5 });
  b += box(330, 196, 240, 64, C.panel, C.panelEdge, 2, 10) + t(450, 222, 'pull factors', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(450, 246, 'higher pay, family links, services', { size: 14 + 1, anchor: 'middle' });
  // remittances back
  b += path('M760,424 C760,530 140,520 140,404', { stroke: C.olive, w: 4, extra: 'stroke-dasharray="12 8" marker-end="url(#ahO)"' });
  b += box(330, 480, 240, 90, C.cream, C.olive, 2.5, 12) + u(450, 520, 'ترسیلاتِ زر', { size: 26, anchor: 'middle' }) + t(450, 556, 'remittances: money sent home', { size: 15, anchor: 'middle', fill: C.muted });
  b += box(30, 590, 410, 120, '#f6ece4', C.rust, 2.5, 12) + t(52, 624, 'Skilled emigration', { size: 19, weight: 700 }) + u(416, 628, 'ذہین افراد کا انخلا', { size: 24 }) + tl(52, 664, ['brain drain; can return or contact', 'abroad offset it?'], { size: 15, fill: C.muted }, 20);
  b += box(460, 590, 410, 120, C.panel, C.panelEdge, 2.5, 12) + t(482, 624, 'Effects on families', { size: 19, weight: 700 }) + tl(482, 656, ['on families left behind and on', 'communities abroad'], { size: 15, fill: C.muted }, 20);
  b += t(450, 750, 'Check each example against your sources; prepare points for and against', { size: 16, weight: 600, anchor: 'middle' });
  add('04-emigration-from-pakistan',
    svg(900, 776, 'Emigration from Pakistan', b),
    'Push factors in Pakistan (limited jobs, lower wages, insecurity, study) and pull factors (higher pay, family links, services) lead to the Gulf region and to Europe and North America. Remittances (ترسیلاتِ زر) flow back; skilled emigration raises brain drain (ذہین افراد کا انخلا) and there are effects on families.',
    'Push, pull, remittances and brain drain: the core of the research subject.',
    '## Sub-theme 3.3: emigration from Pakistan');
}

// 05 Model paragraph anatomy
{
  let b = t(450, 128, 'Task: respond to the statement that migration makes a society richer', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  const rows = [
    ['Contribution', ['ہجرت کرنے والے لوگ نئے ملک میں اپنی زبان، کھانے اور تہوار', 'بھی ساتھ لے جاتے ہیں۔'], 'masculine plural verb'],
    ['Its result', ['اس سے معاشرہ زیادہ رنگا رنگ بن جاتا ہے۔'], 'masculine singular verb'],
    ['Counter-view', ['تاہم بعض لوگ اس تنوع کو شک کی نظر سے دیکھتے ہیں،', 'کیونکہ انھیں اپنی نوکریوں اور اپنی شناخت کی فکر ہوتی ہے۔'], 'however ... because; dative of concern'],
    ['Reasoned conclusion', ['میرے خیال میں باہمی احترام اور مکالمے سے یہ خدشات کم ہو سکتے ہیں۔'], ''],
  ];
  let y = 148;
  rows.forEach(([h, lines, note], i) => {
    const hgt = 74 + lines.length * 50, hi = i === 2;
    b += box(30, y, 840, hgt, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 2.5, 12) + badge(64, y + 34, 18, String(i + 1), hi ? C.mustard : C.cream) +
      t(96, y + 40, h, { size: 19, weight: 700 }) + (note ? t(846, y + 40, note, { size: 15, anchor: 'end', fill: C.muted, italic: true }) : '');
    lines.forEach((ln, j) => { b += u(846, y + 92 + j * 50, ln, { size: 24 }); });
    y += hgt + 14;
  });
  add('05-model-paragraph-anatomy',
    svg(900, y + 16, 'What the model paragraph does', b),
    'The four moves of the model paragraph on migration: a contribution (لے جاتے ہیں, masculine plural), its result (معاشرہ ... بن جاتا ہے), a counter-view introduced by تاہم with a reason after کیونکہ, and a reasoned conclusion with میرے خیال میں.',
    'Point, result, counter-view with تاہم, then a reasoned conclusion.',
    '## Worked example: a model paragraph, with annotation');
}
