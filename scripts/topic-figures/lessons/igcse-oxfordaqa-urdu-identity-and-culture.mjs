import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-urdu-identity-and-culture';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (shared look across the OxfordAQA / Edexcel Urdu set) ----
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { const c = out[out.length - 1]; if (c && (c + ' ' + w).length > n) out.push(w); else out[out.length - 1] = c ? c + ' ' + w : w; } return out; };
const wt = (x, y, s, n, opts = {}, lh) => tl(x, y, wrap(s, n), opts, lh || (opts.size || 18) * 1.3);
const box = (x, y, w, h, fill, edge, sw = 2.5, rx = 12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const chip = (x, y, w, s, fill = C.tealLight, edge = C.tealDark) => box(x, y, w, 42, fill, edge, 2, 21) + t(x + w / 2, y + 28, s, { size: 18, weight: 700, anchor: 'middle' });

// 01 Papers and themes
{
  const themes = [
    ['Theme 1', 'Identity and Culture', C.cream, C.olive],
    ['Theme 2', 'Local, National, International and Global Areas of Interest', C.panel, C.panelEdge],
    ['Theme 3', 'Current and Future Study and Employment', C.panel, C.panelEdge],
  ];
  let b = t(450, 132, 'Content: three themes, examined across both papers', { size: 19, weight: 600, fill: C.muted, anchor: 'middle' });
  themes.forEach(([h, name, fill, edge], i) => {
    const x = 30 + i * 287;
    b += box(x, 150, 266, 130, fill, edge, i === 0 ? 3 : 2.5, 14) + t(x + 18, 184, h, { size: 21, weight: 700 }) + wt(x + 18, 214, name, 26, { size: 17 }, 22);
  });
  b += arrow(50, 306, 850, 306, { w: 3.5 }) + t(450, 336, 'from personal life towards more complex, less personal subject matter', { size: 17, italic: true, fill: C.muted, anchor: 'middle' });
  b += arrow(232, 352, 232, 392) + arrow(668, 352, 668, 392);
  const paper = (x, n, name, use) => panel(x, 400, 405, 200) + t(x + 22, 438, n, { size: 24, weight: 700 }) + t(x + 22, 466, name, { size: 19, weight: 600, fill: C.tealDark }) +
    chip(x + 22, 486, 120, '1 h 45 min') + chip(x + 152, 486, 110, '70 marks') + chip(x + 272, 486, 90, '50%', C.cream, C.olive) +
    t(x + 22, 566, use, { size: 17, fill: C.muted });
  b += paper(30, 'Paper 1', 'Reading, Grammar and Meaning', 'tests the theme content receptively') + paper(465, 'Paper 2', 'Writing', 'needs productive use of the same content');
  b += box(30, 622, 840, 52, C.tealLight, C.tealDark, 2) + t(450, 655, 'No listening or speaking component: reading and writing only', { size: 18, weight: 600, anchor: 'middle' });
  add('01-papers-and-themes',
    svg(900, 700, 'How OxfordAQA 9264 is assessed', b),
    'Three themes, from Identity and Culture to Current and Future Study and Employment, feed both papers. Paper 1 (Reading, Grammar and Meaning) and Paper 2 (Writing) are each 1 hour 45 minutes, 70 marks and 50%; there is no listening or speaking.',
    'Two equal papers, both built on the same three themes.',
    '## Where this fits in 9264');
}

// 02 Theme 1 map: 3 topics, 8 sub-topics
{
  let b = box(230, 110, 440, 64, C.cream, C.olive, 3, 14) + t(450, 151, 'Theme 1: Identity and Culture', { size: 23, weight: 700, anchor: 'middle' });
  const cols = [
    ['1.1', ['Me, my family, friends', 'and people I know'], [['Relationships with family'], ['Relationships with', 'friends and people I know']]],
    ['1.2', ['Technology in', 'everyday life'], [['Social media'], ['Mobile technology']]],
    ['1.3', ['Free-time', 'activities'], [['Music'], ['Cinema and TV'], ['Sport'], ['Customs and festivals']]],
  ];
  cols.forEach(([n, name, subs], i) => {
    const x = 30 + i * 287, cx = x + 133;
    b += path(`M450,174 V202 H${cx} V226`, { w: 3 });
    b += box(x, 230, 266, 96, C.teal, C.tealDark, 2.5, 14) + t(x + 18, 262, n, { size: 19, weight: 700, fill: C.tealDark }) + tl(x + 18, 288, name, { size: 18, weight: 600 }, 23);
    let y = 350;
    const lx = x + 22;
    let lastMid = 0;
    subs.forEach((lines) => {
      const h = lines.length === 1 ? 50 : 72;
      b += panel(x + 40, y, 226, h) + tl(x + 52, y + (lines.length === 1 ? 32 : 31), lines, { size: 17 }, 22);
      b += `<line x1="${lx}" y1="${y + h / 2}" x2="${x + 40}" y2="${y + h / 2}" stroke="${C.ink}" stroke-width="2.5"/>`;
      lastMid = y + h / 2;
      y += h + 14;
    });
    b += `<line x1="${lx}" y1="326" x2="${lx}" y2="${lastMid}" stroke="${C.ink}" stroke-width="2.5"/>`;
  });
  b += t(450, 652, '3 topics, 8 sub-topics: the contexts for both papers', { size: 18, weight: 600, fill: C.muted, anchor: 'middle' });
  add('02-theme-1-map',
    svg(900, 680, 'Theme 1 at a glance', b),
    'Theme 1 Identity and Culture branches into three topics: 1.1 family, friends and people I know (two relationship sub-topics), 1.2 technology in everyday life (social media, mobile technology) and 1.3 free-time activities (music, cinema and TV, sport, customs and festivals).',
    'Eight sub-topics give the contexts; the papers test your Urdu, not cultural knowledge.',
    '## The theme and how it is assessed');
}

// 03 Active vs passive vocabulary
{
  const cx = 270, cy = 340;
  let b = `<circle cx="${cx}" cy="${cy}" r="200" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>` +
    `<circle cx="${cx}" cy="${cy + 50}" r="110" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` +
    t(cx, cy - 140, 'Passive vocabulary', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    t(cx, cy - 113, 'words you recognise', { size: 18, anchor: 'middle' }) +
    t(cx, cy + 30, 'Active vocabulary', { size: 21, weight: 700, anchor: 'middle', fill: C.olive }) +
    t(cx, cy + 58, 'words you can', { size: 18, anchor: 'middle' }) + t(cx, cy + 82, 'produce', { size: 18, anchor: 'middle' });
  const card = (y, head, sub, lines, fill, edge) => box(560, y, 310, 150, fill, edge, 2.5, 14) + t(580, y + 36, head, { size: 22, weight: 700 }) + t(580, y + 62, sub, { size: 17, weight: 600, fill: C.muted }) + tl(580, y + 96, lines, { size: 17 }, 23);
  b += card(150, 'Paper 1', 'Reading', ['Recognition carries you', 'through the texts'], C.panel, C.panelEdge);
  b += card(370, 'Paper 2', 'Writing', ['Only words you can', 'produce are usable'], C.panel, C.olive);
  b += arrow(445, 228, 550, 228, { color: C.tealDark, marker: 'ahT' }) + arrow(375, 420, 550, 445, { color: C.olive, marker: 'ahO' });
  b += t(450, 590, 'Build both from the start, across all eight sub-topics', { size: 18, weight: 600, anchor: 'middle', fill: C.muted });
  add('03-active-passive-vocabulary',
    svg(900, 620, 'Recognise versus produce', b),
    'A large circle of passive vocabulary (words you recognise) contains a smaller circle of active vocabulary (words you can produce). Recognition is enough for Paper 1 Reading; Paper 2 Writing can only use active vocabulary.',
    'Recognition alone will carry you through reading but fail you in writing.',
    '## Vocabulary you need in place');
}

// 04 Extending an answer: band staircase
{
  const steps = [
    ['Statement', ['one simple, accurate', 'sentence']],
    ['+ opinion', ['my view is,', 'in my opinion']],
    ['+ reason', ['because,', 'therefore']],
    ['+ example', ['a specific', 'detail']],
  ];
  let b = '';
  steps.forEach(([h, lines], i) => {
    const x = 30 + i * 212, top = 430 - i * 78, w = 200;
    const hi = i >= 2;
    b += box(x, top, w, 520 - top, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 2.5, 12);
    b += t(x + 18, top + 36, h, { size: 22, weight: 700, fill: hi ? C.olive : C.ink }) + tl(x + 18, top + 64, lines, { size: 17, fill: C.muted }, 22);
  });
  b += arrow(80, 400, 700, 162, { w: 4, color: C.tealDark, marker: 'ahT' }) + t(50, 150, 'move up a band', { size: 20, weight: 700, fill: C.tealDark }) +
    t(50, 176, 'reason + example is the', { size: 17, fill: C.muted }) + t(50, 199, 'most reliable way', { size: 17, fill: C.muted });
  b += box(30, 545, 840, 120, C.tealLight, C.tealDark, 2) + t(52, 580, 'Also widen the range with:', { size: 18, weight: 700 }) +
    t(52, 612, 'three tenses  ·  comparatives (better than, the best)  ·  connectives', { size: 17 }) +
    t(52, 640, '(however, moreover)  ·  time markers (usually, last week, next year)', { size: 17 });
  add('04-extending-an-answer',
    svg(900, 690, 'Extending an answer', b),
    'A four-step staircase: a simple statement, then an opinion, then a reason, then an example, each step higher. Range is widened further with three tenses, comparatives, connectives and time markers.',
    'Adding a reason and an example is the most reliable way to move up a band.',
    '## Structures that raise the grade');
}

// 05 Approaching the tasks
{
  let b = panel(30, 110, 840, 290) + t(54, 148, 'Reading: what does the question want?', { size: 22, weight: 700 });
  const types = [
    ['Detail', ['a fact stated', 'in the text'], C.panel, C.panelEdge],
    ['Opinion', ['look for evaluative', 'language, not facts'], C.cream, C.olive],
    ['Inference', ['what the text', 'implies'], C.panel, C.panelEdge],
  ];
  b += box(330, 168, 240, 50, C.tealLight, C.tealDark, 2) + t(450, 200, 'Read the question', { size: 18, weight: 700, anchor: 'middle' });
  types.forEach(([h, lines, fill, edge], i) => {
    const x = 60 + i * 270;
    b += path(`M450,218 V240 H${x + 120} V262`, { w: 3, extra: 'marker-end="url(#ah)"' });
    b += box(x, 270, 240, 112, fill, edge, 2.5, 12) + t(x + 120, 304, h, { size: 21, weight: 700, anchor: 'middle' }) + tl(x + 120, 334, lines, { size: 17, anchor: 'middle', fill: C.muted }, 22);
  });
  b += panel(30, 420, 840, 250) + t(54, 458, 'Writing: before you finish, check', { size: 22, weight: 700 });
  const checks = [
    ['Every bullet point in the task addressed', 'strong practice; the number of words is not important'],
    ['An opinion with a reason wherever the task allows', 'in my opinion ... because ...'],
    ['Tenses varied deliberately', 'present, past and future'],
  ];
  checks.forEach(([a, s], i) => {
    const y = 506 + i * 60;
    b += box(56, y - 22, 28, 28, C.cream, C.olive, 2.5, 6) + path(`M62,${y - 8} l7,8 l12,-15`, { stroke: C.tealDark, w: 3.5 });
    b += t(100, y, a, { size: 19, weight: 600 }) + (s ? t(100, y + 23, s, { size: 16, fill: C.muted }) : '');
  });
  add('05-approaching-the-tasks',
    svg(900, 700, 'Approaching the tasks', b),
    'For reading, first decide whether the question wants a detail, an opinion (look for evaluative language) or an inference. For writing, check that every bullet point is addressed, opinions have reasons and tenses are varied.',
    'Name the question type in reading; cover every bullet in writing.',
    '## Approaching the tasks');
}

// 06 Weak vs strong festival answer
{
  let b = t(450, 128, 'Task: describe a festival you celebrate and say why it is important to you', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  b += panel(30, 150, 260, 420) + t(160, 190, 'Weak', { size: 24, weight: 700, anchor: 'middle', fill: C.rust });
  ['lists what happens', 'one tense', 'no opinion', 'no reason'].forEach((s, i) => {
    const y = 250 + i * 84;
    b += box(52, y - 30, 216, 48, '#f6ece4', C.rust, 2, 10) + t(160, y, s, { size: 18, anchor: 'middle' });
  });
  b += box(310, 150, 560, 420, C.panel, C.tealDark, 3, 14) + t(590, 190, 'Strong', { size: 24, weight: 700, anchor: 'middle', fill: C.tealDark });
  // timeline
  const ty = 250;
  b += `<line x1="345" y1="${ty}" x2="835" y2="${ty}" stroke="${C.ink}" stroke-width="3"/>`;
  [['Past', 'recalls a', 'particular occasion', 425], ['Present', 'describes', 'the festival', 590], ['Future', 'what you will', 'do next year', 755]].forEach(([h, a, c, x]) => {
    b += `<circle cx="${x}" cy="${ty}" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` +
      t(x, ty - 22, h, { size: 19, weight: 700, anchor: 'middle' }) + t(x, ty + 38, a, { size: 16, anchor: 'middle', fill: C.muted }) + t(x, ty + 59, c, { size: 16, anchor: 'middle', fill: C.muted });
  });
  b += box(334, 345, 512, 100, C.cream, C.olive, 2.5, 12) + t(354, 377, 'Opinion WITH a reason', { size: 19, weight: 700 }) +
    t(354, 404, 'it matters because it brings the family together,', { size: 16 }) + t(354, 426, 'and my grandparents visit', { size: 16 });
  b += box(334, 460, 512, 86, C.tealLight, C.tealDark, 2, 12) + t(354, 492, 'One specific personal detail', { size: 19, weight: 700 }) + t(354, 520, 'something only you would write', { size: 16 });
  b += t(450, 606, 'Three tenses + opinion + reason + personal detail = the top-band recipe', { size: 18, weight: 700, anchor: 'middle' });
  add('06-weak-vs-strong-answer',
    svg(900, 640, 'Weak and strong answers compared', b),
    'A weak festival answer lists what happens in one tense with no opinion or reason. A strong one moves through past, present and future, gives an opinion with a reason and adds a personal detail.',
    'Three tenses, an opinion, a reason and a personal detail make a top-band answer.',
    '## Worked example');
}
