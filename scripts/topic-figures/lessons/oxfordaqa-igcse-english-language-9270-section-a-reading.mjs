import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-english-language-9270-section-a-reading';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// local helpers
const wrap = (s, n) => {
  const out = [''];
  for (const w of s.split(' ')) {
    const cur = out[out.length - 1];
    if (cur && (cur + ' ' + w).length > n) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w;
  }
  return out;
};
const para = (x, y, s, n, opts = {}, lh) => tl(x, y, wrap(s, n), opts, lh || (opts.size || 18) * 1.32);
const box = (x, y, w, h, fill = C.panel, edge = C.panelEdge, rx = 12) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
const pill = (x, y, w, h, s, { fill = C.cream, edge = C.olive, size = 17, weight = 600, color = C.ink } = {}) =>
  box(x, y, w, h, fill, edge, h / 2) + t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight, anchor: 'middle', fill: color });


const textCard = (x, y, w, h, label, kind, dashed = false) => {
  let c = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"${dashed ? ' stroke-dasharray="8 6"' : ''}/>`;
  c += t(x + w / 2, y + 30, label, { size: 17, weight: 700, anchor: 'middle' });
  const ix = x + 20, iw = w - 40;
  if (kind === 'visual') {
    [[0, 40], [1, 70], [2, 55]].forEach(([i, hh]) => { c += `<rect x="${ix + 8 + i * 30}" y="${y + h - 22 - hh}" width="20" height="${hh}" fill="${i === 1 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2"/>`; });
    c += `<line x1="${ix}" y1="${y + h - 22}" x2="${ix + iw}" y2="${y + h - 22}" stroke="${C.ink}" stroke-width="2"/>`;
  } else if (kind === 'brief') {
    c += `<line x1="${ix}" y1="${y + h / 2 + 15}" x2="${ix + iw - 10}" y2="${y + h / 2 + 15}" stroke="${C.tealDark}" stroke-width="7" stroke-linecap="round"/>`;
  } else {
    for (let k = 0; k < 5; k++) c += `<line x1="${ix}" y1="${y + 55 + k * 17}" x2="${ix + iw - (k === 4 ? 30 : 0)}" y2="${y + 55 + k * 17}" stroke="${C.panelEdge}" stroke-width="5" stroke-linecap="round"/>`;
  }
  return c;
};

// 01 The source pack and its questions
{
  const kinds = ['text', 'visual', 'text', 'text', 'brief', 'text'];
  let b = '';
  const cx = (i) => 30 + i * 140 + 62;
  kinds.forEach((k, i) => { b += textCard(30 + i * 140, 120, 124, 160, i === 5 ? 'Text 6?' : `Text ${i + 1}`, k, i === 5); });
  // single-text question
  b += arrow(cx(0), 372, cx(0), 288, { w: 3 }) ;
  b += box(30, 375, 250, 84, C.tealLight, C.tealDark) + t(155, 410, 'Questions on', { size: 18, weight: 700, anchor: 'middle' }) + t(155, 436, 'individual texts', { size: 18, weight: 700, anchor: 'middle' });
  // pair question
  b += arrow(cx(2), 372, cx(2), 288, { w: 3, color: C.olive, marker: 'ahO' }) + arrow(cx(3), 372, cx(3), 288, { w: 3, color: C.olive, marker: 'ahO' });
  b += box(300, 375, 300, 84, C.cream, C.olive) + t(450, 410, 'Questions on', { size: 18, weight: 700, anchor: 'middle' }) + t(450, 436, 'pairs of texts', { size: 18, weight: 700, anchor: 'middle' });
  b += box(620, 375, 250, 84, C.panel, C.panelEdge) + t(745, 410, 'Answer all', { size: 18, weight: 700, anchor: 'middle' }) + t(745, 436, 'the questions', { size: 18, weight: 700, anchor: 'middle' });
  b += box(30, 485, 840, 62, C.mustard, C.ink) + t(450, 524, 'At least one question requires you to consider two texts', { size: 19, weight: 700, anchor: 'middle' });
  b += arrow(450, 552, 450, 600, { w: 4 });
  b += panel(30, 605, 840, 90) + t(450, 642, 'Section B writing', { size: 21, weight: 700, anchor: 'middle' }) + t(450, 672, 'is linked with these reading sources', { size: 17, anchor: 'middle', fill: C.muted });
  add('01-source-pack',
    svg(900, 755, 'Section A: one pack, many texts', `<g transform="translate(0,30)">${b}</g>`, 'Five or six texts on modern-world themes and issues'),
    'A row of five or six texts on modern-world themes, some written, one a chart and one brief. Some questions point at a single text, others at a pair, and at least one question requires two texts. All questions are answered, and Section B writing is linked with the same sources.',
    'Questions target single texts and pairs, and the same sources feed the Section B writing.',
    '## What the specification says');
}

// 02 Reading skills with several sources
{
  const rows = [
    ['R1', 'Select and use', 'Choose the right source and the right details for each question.'],
    ['R2', 'Collate and synthesise', 'Combine information from two texts; compare ideas or methods.'],
    ['R3', 'Interpret perspectives', 'Explain each writer’s attitude to the issue and how it differs.'],
    ['R4', 'Explain and evaluate methods', 'Analyse language, structure and layout, including in visual texts.'],
  ];
  let b = '';
  rows.forEach(([k, name, desc], i) => {
    const y = 125 + i * 128;
    b += panel(30, y, 840, 112) + badge(90, y + 56, 32, k, i === 1 ? C.mustard : C.cream);
    b += t(145, y + 44, name, { size: 22, weight: 700 }) + para(145, y + 74, desc, 84, { size: 17, fill: C.muted }, 23);
  });
  add('02-reading-skills-sources',
    svg(900, 660, 'Four reading skills across a source pack', b, 'AO1 reading, applied to five or six texts'),
    'The four AO1 reading skills applied to several sources: R1 choosing the right source and details, R2 combining or comparing two texts, R3 explaining each writer’s attitude and how it differs, R4 analysing language, structure and layout, including visual texts.',
    'With several sources, R2 means working across two texts, not just within one.',
    '## The reading skills applied to multiple sources');
}

// 03 Getting to know a pack, and a comparison grid
{
  const steps = [['Survey the pack', 'form, topic, purpose, audience'], ['Read the questions', 'before reading closely'], ['Read closely by question', 'annotate only the texts named'], ['Keep a grid', 'for every pair of texts']];
  let b = '';
  steps.forEach(([h, s], i) => {
    const x = 30 + i * 213;
    b += panel(x, 115, 201, 170, i === 3 ? C.cream : C.panel, i === 3 ? C.olive : C.panelEdge) + badge(x + 30, 147, 19, String(i + 1), i === 3 ? C.mustard : C.cream);
    b += para(x + 18, 200, h, 18, { size: 18, weight: 700 }, 23) + para(x + 18, 200 + (wrap(h, 18).length) * 23 + 4, s, 21, { size: 16, fill: C.muted }, 21);
  });
  b += t(450, 330, 'A grid for a pair of texts', { size: 21, weight: 700, anchor: 'middle' });
  const cols = ['Idea', 'Attitude', 'Method', 'Evidence'];
  const gx = 190, cw = 170, gy = 350;
  cols.forEach((c, i) => { b += box(gx + i * cw, gy, cw, 44, C.teal, C.ink, 0) + t(gx + i * cw + cw / 2, gy + 29, c, { size: 18, weight: 700, anchor: 'middle' }); });
  const prompts = ['what it says about the issue', 'for, against or mixed?', 'how the writer gets it across', 'a short quotation'];
  ['Text A', 'Text B'].forEach((r, j) => {
    const y = gy + 44 + j * 90;
    b += box(30, y, 160, 90, C.tealLight, C.ink, 0) + t(110, y + 52, r, { size: 19, weight: 700, anchor: 'middle' });
    prompts.forEach((p, i) => { b += box(gx + i * cw, y, cw, 90, C.panel, C.ink, 0) + para(gx + i * cw + 14, y + 36, p, 17, { size: 16, fill: C.muted, italic: true }, 21); });
  });
  b += t(450, gy + 44 + 180 + 40, 'Read across a column and the comparison is ready to write.', { size: 18, weight: 600, anchor: 'middle', fill: C.tealDark });
  add('03-survey-and-grid',
    svg(900, 640, 'Getting to know a source pack', b),
    'Four steps: survey the pack noting form, topic, purpose and audience; read the questions; read closely by question; keep a grid. The grid has rows for Text A and Text B and columns for idea, attitude, method and evidence.',
    'Survey first, read by question, and grid each pair so comparisons are easy to write.',
    '## Getting to know a source pack quickly');
}

// 04 Reading different kinds of source
{
  const rows = [
    ['Opinion', 'columns, blogs, speeches', ['viewpoint', 'persuasive methods', 'tone']],
    ['Informative', 'reports, factual articles, leaflets', ['what comes first', 'details included', 'voices quoted']],
    ['Fiction extract', 'the issue shown through a story', ['character', 'setting', 'situation']],
    ['Brief text', 'slogans, short notices, posts', ['compression', 'wordplay', 'direct address']],
    ['Visual text', 'posters, adverts, infographics', ['layout', 'images', 'colour and type', 'image + words']],
  ];
  let b = t(45, 128, 'Kind of source', { size: 17, weight: 700, fill: C.tealDark }) + t(335, 128, 'Look for', { size: 17, weight: 700, fill: C.tealDark });
  rows.forEach(([h, ex, chips], i) => {
    const y = 142 + i * 112;
    b += panel(30, y, 840, 98);
    b += t(50, y + 42, h, { size: 21, weight: 700 }) + t(50, y + 70, ex, { size: 16, fill: C.muted });
    let x = 335;
    chips.forEach((c) => { const w = c.length * 8.4 + 30; b += pill(x, y + 29, w, 40, c, { fill: i === 4 ? C.cream : C.tealLight, edge: i === 4 ? C.olive : C.tealDark, size: 16 }); x += w + 10; });
  });
  b += box(30, 712, 840, 66, C.cream, C.olive) + t(450, 752, 'Even factual writing has a perspective; in fiction the message is implied.', { size: 18, weight: 700, anchor: 'middle' });
  add('04-kinds-of-source',
    svg(900, 805, 'What to look for in each kind of source', b),
    'Five kinds of source and what to analyse in each: opinion writing (viewpoint, persuasive methods, tone), informative writing (what comes first, details included, voices quoted), fiction (character, setting, situation), brief texts (compression, wordplay, direct address) and visual texts (layout, images, colour and type, image and words).',
    'Each kind of source rewards a different set of questions.',
    '## Reading different kinds of source');
}

// 05 Analysing a visual text
{
  const px = 330, pw = 240, py = 120, ph = 470;
  let b = box(px, py, pw, ph, C.panel, C.ink, 6);
  // child face in top half
  b += `<rect x="${px + 12}" y="${py + 12}" width="${pw - 24}" height="${ph / 2 - 12}" fill="${C.tealLight}"/>`;
  const fx = px + pw / 2, fy = py + 130;
  b += `<circle cx="${fx}" cy="${fy}" r="78" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<circle cx="${fx - 27}" cy="${fy - 12}" r="8" fill="${C.ink}"/><circle cx="${fx + 27}" cy="${fy - 12}" r="8" fill="${C.ink}"/>`;
  b += path(`M${fx - 22},${fy + 32} Q${fx},${fy + 42} ${fx + 22},${fy + 32}`, { w: 3 });
  // headline and caption
  b += `<rect x="${px + 24}" y="${py + 268}" width="${pw - 48}" height="26" fill="${C.mustard}"/>` + `<rect x="${px + 24}" y="${py + 302}" width="${pw - 90}" height="26" fill="${C.mustard}"/>`;
  for (let k = 0; k < 3; k++) b += `<line x1="${px + 24}" y1="${py + 370 + k * 18}" x2="${px + pw - 24 - (k === 2 ? 60 : 0)}" y2="${py + 370 + k * 18}" stroke="${C.panelEdge}" stroke-width="5" stroke-linecap="round"/>`;
  b += `<rect x="${px + 24}" y="${py + 432}" width="${pw - 48}" height="18" fill="${C.teal}"/>`;
  const call = (x, y, h, s, lx, ly, ex, ey, anchorRight) => {
    let c = box(x, y, 260, h, C.panel, C.panelEdge) + t(x + 18, y + 32, s[0], { size: 18, weight: 700 }) + para(x + 18, y + 58, s[1], 27, { size: 16, fill: C.muted }, 21);
    c += `<line x1="${lx}" y1="${ly}" x2="${ex}" y2="${ey}" stroke="${C.tealDark}" stroke-width="2.5"/><circle cx="${ex}" cy="${ey}" r="5" fill="${C.tealDark}"/>`;
    return c;
  };
  b += call(30, 120, 108, ['Layout and placement', 'What is largest, central or at the top?'], 290, 174, px + 20, py + 40);
  b += call(30, 268, 108, ['Colour and typography', 'Associations, emphasis, contrast.'], 290, 322, px + 30, py + 282);
  b += call(30, 416, 108, ['What is left out', 'Framing always selects.'], 290, 470, px, py + 420);
  b += call(610, 120, 130, ['Images', 'Who or what is shown, from what angle, with what expression?'], 610, 185, fx + 60, fy - 30);
  b += call(610, 316, 130, ['Image and words', 'Does the caption reinforce or change the image’s meaning?'], 610, 380, px + pw - 24, py + 441);
  b += box(30, 620, 840, 140, C.cream, C.olive);
  b += t(55, 655, 'For a visual text, a precise description is your quotation:', { size: 18, weight: 700 });
  b += para(55, 688, '“The child’s face fills the top half of the poster, looking directly at the viewer, so the reader feels personally addressed.”', 86, { size: 17, italic: true }, 25);
  add('05-visual-text',
    svg(900, 790, 'Analysing a visual text', b),
    'A poster whose top half is filled by a child’s face, with a headline and caption below, labelled with five presentational features: layout and placement, colour and typography, images, the relationship between image and words, and what is left out. Below, a precise description of the poster is used as the evidence.',
    'Describe the visual feature precisely, then explain its effect, just as with a quotation.',
    '## Writing about one text');
}

// 06 Writing about two texts
{
  let b = panel(30, 110, 840, 230) + t(55, 148, 'Synthesis: combine information', { size: 21, weight: 700, fill: C.tealDark });
  b += box(55, 168, 300, 70, C.tealLight, C.tealDark) + t(75, 198, 'The report', { size: 17, weight: 700 }) + t(75, 222, 'details of noise from lorries', { size: 16, fill: C.muted });
  b += box(55, 252, 300, 70, C.tealLight, C.tealDark) + t(75, 282, 'The resident’s blog', { size: 17, weight: 700 }) + t(75, 306, 'woken at four every morning', { size: 16, fill: C.muted });
  b += arrow(358, 203, 470, 238, { w: 3 }) + arrow(358, 287, 470, 252, { w: 3 });
  b += box(478, 196, 370, 100, C.cream, C.olive) + t(498, 228, 'Together:', { size: 17, weight: 700 }) + para(498, 254, 'the problem is constant, not occasional.', 36, { size: 17 }, 23);
  const cmp = (x, title, a, aS, bb, bS) => {
    let c = panel(x, 360, 410, 300) + t(x + 22, 398, title, { size: 21, weight: 700, fill: C.tealDark });
    c += box(x + 22, 418, 366, 82, C.panel, C.ink) + t(x + 40, 446, a, { size: 17, weight: 700 }) + para(x + 40, 472, aS, 38, { size: 16, fill: C.muted }, 21);
    c += t(x + 205, 534, 'whereas…', { size: 18, weight: 700, anchor: 'middle', fill: C.olive, italic: true });
    c += box(x + 22, 556, 366, 82, C.panel, C.ink) + t(x + 40, 584, bb, { size: 17, weight: 700 }) + para(x + 40, 610, bS, 38, { size: 16, fill: C.muted }, 21);
    return c;
  };
  b += cmp(30, 'Compare perspectives', 'Council leaflet: progress', '“faster journeys”', 'Blogger: a loss', 'the field she walked through as a child');
  b += cmp(460, 'Compare methods', 'Leaflet: reassures', 'cheerful tone, bullet points', 'Blog: provokes sympathy, anger', 'personal anecdote, rhetorical questions');
  b += t(450, 702, 'Comparative connectives', { size: 18, weight: 700, anchor: 'middle' });
  const cons = ['similarly', 'likewise', 'both', 'whereas', 'while', 'in contrast', 'however', 'on the other hand', 'unlike'];
  let x = 30, y = 718;
  cons.forEach((c) => { const w = c.length * 9 + 32; if (x + w > 870) { x = 30; y += 50; } b += pill(x, y, w, 38, c, { size: 16 }); x += w + 10; });
  add('06-two-texts',
    svg(900, y + 70, 'Two texts, one point', b),
    'Three ways to write about two texts, using the lesson’s new-road example. Synthesis combines the report’s lorry noise with the blog’s waking at four to show the problem is constant. Comparing perspectives sets the leaflet’s “faster journeys” against the blogger’s lost field; comparing methods sets cheerful bullet points against anecdote and rhetorical questions.',
    'Integrate both texts in the same point, whether you combine them or compare them.',
    '## Writing about two texts');
}

// 07 Worked example: the new library
{
  let b = box(30, 110, 410, 226, C.tealLight, C.tealDark) + t(50, 142, 'Source X: school newsletter', { size: 18, weight: 700 });
  b += para(50, 172, '“Our new Quiet Library opens on Monday. With forty study spaces, free printing and staff on hand to help, it is the perfect place to revise for exams.”', 44, { size: 16, italic: true }, 22);
  b += box(460, 110, 410, 226, C.cream, C.olive) + t(480, 142, 'Source Y: a student’s blog', { size: 18, weight: 700 });
  b += para(480, 172, '“They’ve taken away the noisy library. That was where we argued about books, where I learned chess, where nobody told you to be quiet unless you deserved it. Now it’s ‘Quiet’. Capital Q. Perfect for revision. Perfect for nothing else.”', 44, { size: 16, italic: true }, 22);
  b += t(450, 372, 'Compare how the two writers present the new library.', { size: 19, weight: 700, anchor: 'middle' });
  const rows = [
    ['View', 'a practical resource', 'a loss'],
    ['Lists', '“forty study spaces, free printing…” piles up benefits', '“where we argued… where I learned chess” values community'],
    ['“Perfect”', 'confident adjective assumes readers agree', 'repeated mockingly to turn the school’s word against it'],
    ['Minor sentence', '', '“Capital Q” treats the name as pompous'],
  ];
  rows.forEach(([k, x, y], i) => {
    const yy = 392 + i * 96;
    b += box(30, yy, 150, 84, C.teal, C.ink) + t(105, yy + 48, k, { size: 17, weight: 700, anchor: 'middle' });
    if (x) b += box(190, yy, 320, 84, C.tealLight, C.tealDark) + para(206, yy + (wrap(x, 34).length > 1 ? 36 : 48), x, 34, { size: 16 }, 22);
    else b += t(350, yy + 48, '—', { size: 18, anchor: 'middle', fill: C.muted });
    b += t(538, yy + 48, 'vs', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
    b += box(565, yy, 305, 84, C.cream, C.olive) + para(581, yy + (wrap(y, 32).length > 1 ? 36 : 48), y, 32, { size: 16 }, 22);
  });
  b += box(30, 782, 840, 60, C.panel, C.tealDark) + t(450, 819, 'Both texts appear in every point: methods and perspectives are compared.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('07-worked-example-library',
    svg(900, 870, 'Worked example: the new library', b),
    'The newsletter and blog sources side by side, then a comparison grid: the newsletter presents a practical resource with a list of benefits and a confident “perfect”; the blog presents a loss with a list of memories, a mocking repetition of “perfect” and the minor sentence “Capital Q”.',
    'Each row sets a method in one source against its counterpart in the other.',
    '## Worked example');
}
