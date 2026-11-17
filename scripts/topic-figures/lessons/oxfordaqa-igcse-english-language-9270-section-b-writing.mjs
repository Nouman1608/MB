import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-english-language-9270-section-b-writing';
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


const chipRow = (x0, y0, xMax, items, opts = {}, h = 40, gap = 10, lh = 50) => {
  let x = x0, y = y0, out = '';
  const k = (opts.size || 17) * 0.5 + 0.2;
  for (const s of items) {
    const w = s.length * k + 32;
    if (x + w > xMax) { x = x0; y += lh; }
    out += pill(x, y, w, h, s, opts); x += w + gap;
  }
  return { svg: out, bottom: y + h };
};

// 01 How Section B works
{
  let b = panel(30, 120, 250, 260) + t(155, 156, 'Section A', { size: 20, weight: 700, anchor: 'middle' }) + t(155, 180, 'reading sources', { size: 16, anchor: 'middle', fill: C.muted });
  [0, 1, 2].forEach((i) => {
    const x = 62 + i * 64;
    b += `<rect x="${x}" y="210" width="54" height="72" rx="5" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
    for (let k = 0; k < 3; k++) b += `<line x1="${x + 9}" y1="${228 + k * 15}" x2="${x + 45}" y2="${228 + k * 15}" stroke="${C.panelEdge}" stroke-width="4" stroke-linecap="round"/>`;
  });
  b += t(155, 320, 'a store of ideas', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 });
  b += arrow(285, 250, 335, 250, { w: 4 });
  b += panel(340, 120, 240, 260, C.cream, C.olive) + t(460, 156, 'Two tasks', { size: 20, weight: 700, anchor: 'middle' });
  b += box(370, 180, 180, 54, C.panel, C.ink) + t(460, 213, 'Task 1', { size: 18, weight: 700, anchor: 'middle' });
  b += box(370, 246, 180, 54, C.panel, C.ink) + t(460, 279, 'Task 2', { size: 18, weight: 700, anchor: 'middle' });
  b += t(460, 340, 'answer one', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  b += arrow(585, 250, 635, 250, { w: 4 });
  b += panel(640, 120, 230, 260, C.tealLight, C.tealDark) + t(755, 156, 'Your writing', { size: 20, weight: 700, anchor: 'middle' });
  b += t(755, 200, 'written for', { size: 16, anchor: 'middle', fill: C.muted });
  b += pill(670, 214, 170, 40, 'audience', { fill: '#ffffff', edge: C.tealDark }) + pill(670, 264, 170, 40, 'purpose', { fill: '#ffffff', edge: C.tealDark });
  b += t(755, 334, 'which could be multiple', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 }) + t(755, 356, 'and diverse', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 });
  b += t(450, 428, 'Marked on AO2 writing objectives W1 to W4', { size: 19, weight: 700, anchor: 'middle' });
  ['W1', 'W2', 'W3', 'W4'].forEach((w, i) => { b += badge(285 + i * 110, 482, 30, w, C.cream); });
  b += box(30, 535, 840, 62, C.panel, C.panelEdge) + t(450, 573, '40 of Paper 2’s 80 marks  ·  AO2 worth 20% of the qualification through Paper 2', { size: 18, weight: 600, anchor: 'middle' });
  add('01-section-b-overview',
    svg(900, 625, 'Section B: writing for audience and purpose', b),
    'The Section A reading sources feed ideas into Section B, where two tasks are set and one is answered. The writing is aimed at an audience and purpose that could be multiple and diverse, and is marked on W1 to W4. Section B is 40 of the paper’s 80 marks; AO2 is worth 20% of the qualification through Paper 2.',
    'The sources supply ideas; the task sets the audience and purpose; W1 to W4 are the marks.',
    '## What the specification says');
}

// 02 Decoding the task (worked example task)
{
  let b = box(30, 110, 840, 92, C.cream, C.olive);
  b += para(55, 145, '“Write a speech for a public meeting in which you persuade both residents and local business owners to support new cycle lanes.”', 84, { size: 18, italic: true }, 26);
  const rows = [
    ['Form', C.teal, '“Write a speech for a public meeting”', 'Greet the audience, direct address, signposting, strong close.'],
    ['Audience', C.mustard, '“both residents and local business owners”', 'Two groups: respectful, semi-formal; address both by name.'],
    ['Purpose', C.cream, '“persuade”', 'Persuade, and also reassure business owners.'],
    ['Content', C.tealLight, '“to support new cycle lanes”', 'What must be covered; ideas from the source pack, reworked.'],
  ];
  rows.forEach(([k, fill, q, d], i) => {
    const y = 228 + i * 104;
    b += box(30, y, 140, 88, fill, C.ink) + t(100, y + 51, k, { size: 20, weight: 700, anchor: 'middle' });
    b += box(180, y, 690, 88, C.panel, C.panelEdge);
    b += t(200, y + 36, q, { size: 17, italic: true, weight: 600 }) + t(200, y + 66, d, { size: 17, fill: C.muted });
  });
  b += box(30, 652, 840, 62, C.tealLight, C.tealDark) + t(450, 690, '“Multiple and diverse”: name each audience and each purpose in your plan.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('02-decoding-the-task',
    svg(900, 740, 'Decode the task: audience, form, purpose, content', b),
    'The cycle-lanes speech task broken into four parts: form (a speech for a public meeting), audience (both residents and local business owners), purpose (persuade, and reassure business owners) and content (support for new cycle lanes, using ideas from the sources).',
    'Underline audience, purpose, form and content in every task before you plan.',
    '## Decoding the task: AFP plus');
}

// 03 Using the sources well
{
  const steps = [['Take', 'ideas, not sentences'], ['Select', 'only what serves your purpose'], ['Transform', 'rework for your form'], ['Add', 'your own examples and reasoning']];
  let b = '';
  steps.forEach(([h, s], i) => {
    const x = 30 + i * 218;
    b += panel(x, 115, 186, 130, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge) + t(x + 93, 160, h, { size: 23, weight: 700, anchor: 'middle' }) + tl(x + 93, 192, wrap(s, 19), { size: 16, anchor: 'middle', fill: C.muted }, 21);
    if (i < 3) b += arrow(x + 190, 180, x + 214, 180, { w: 3 });
  });
  b += t(450, 295, 'Transforming in practice', { size: 21, weight: 700, anchor: 'middle' });
  const tr = (y, a, aSub, c, cSub) =>
    box(30, y, 330, 86, C.tealLight, C.tealDark) + t(195, y + 38, a, { size: 18, weight: 700, anchor: 'middle' }) + t(195, y + 64, aSub, { size: 16, anchor: 'middle', fill: C.muted }) +
    arrow(366, y + 43, 524, y + 43, { w: 4, color: C.olive, marker: 'ahO' }) + t(445, y + 32, 'becomes', { size: 16, anchor: 'middle', fill: C.olive, weight: 700 }) +
    box(540, y, 330, 86, C.cream, C.olive) + t(705, y + 38, c, { size: 18, weight: 700, anchor: 'middle' }) + t(705, y + 64, cSub, { size: 16, anchor: 'middle', fill: C.muted });
  b += tr(318, 'A statistic', 'in a report', 'A vivid example', 'in a speech');
  b += tr(422, 'A complaint', 'in a blog', 'A counter-argument', 'that you answer');
  b += box(30, 535, 840, 64, '#ffffff', C.rust) + t(450, 574, 'Copying from the sources shows reading, not writing skill.', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  add('03-using-sources',
    svg(900, 625, 'Use the sources without copying', b),
    'Four moves for using the Section A sources: take ideas not sentences, select only what serves the purpose, transform them, and add your own. Examples: a statistic in a report becomes a vivid example in a speech; a complaint in a blog becomes a counter-argument you answer.',
    'Take, select, transform and add: the sources are a store of ideas, not text to copy.',
    '## Using the sources well');
}

// 04 Register
{
  let b = `<defs><linearGradient id="regGrad" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  b += `<rect x="30" y="112" width="840" height="34" rx="17" fill="url(#regGrad)" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(50, 135, 'more formal', { size: 16, weight: 700 }) + t(850, 135, 'more informal', { size: 16, weight: 700, anchor: 'end' });
  const cols = [
    ['Formal', C.teal, ['no contractions or slang', 'precise vocabulary', 'complex sentences', 'polite tone']],
    ['Semi-formal', C.tealLight, ['some contractions', 'friendly but respectful', 'rhetorical questions']],
    ['Informal', C.cream, ['conversational phrases', 'humour', 'still accurate spelling', 'and punctuation']],
  ];
  cols.forEach(([h, fill, items], i) => {
    const x = 30 + i * 286;
    b += panel(x, 166, 268, 250) + `<rect x="${x}" y="166" width="268" height="52" rx="14" fill="${fill}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + t(x + 134, 200, h, { size: 21, weight: 700, anchor: 'middle' });
    items.forEach((s, k) => { const cont = i === 2 && k === 3; if (!cont) b += `<circle cx="${x + 26}" cy="${250 + k * 36}" r="5" fill="${C.tealDark}"/>`; b += t(x + 42, 256 + k * 36 - (cont ? 12 : 0), s, { size: 17 }); });
  });
  b += panel(30, 436, 840, 190, C.cream, C.olive) + t(55, 474, 'Mixed audiences', { size: 21, weight: 700 });
  b += t(55, 506, 'Choose the register for the reader with most authority,', { size: 17 }) + t(55, 530, 'and keep it consistent. Address the others directly in places:', { size: 17 });
  b += box(55, 552, 790, 54, '#ffffff', C.olive) + t(450, 586, '“Parents may worry that…; students, I know you are thinking…”', { size: 18, italic: true, anchor: 'middle' });
  add('04-register',
    svg(900, 655, 'Adapting register', b),
    'A scale from formal to informal. Formal: no contractions or slang, precise vocabulary, complex sentences, polite tone. Semi-formal: some contractions, friendly but respectful, rhetorical questions. Informal: conversational phrases and humour, but still accurate. For mixed audiences, use the register for the reader with most authority and address the others directly.',
    'Match register to the most important reader, and keep it consistent.',
    '## Adapting register');
}

// 05 Building the writing
{
  const parts = [
    ['Opening', 'Establish purpose and engage the audience in the first two sentences.', null],
    ['Paragraph per idea', null, ['topic sentence', 'development', 'example', 'link to purpose']],
    ['Counter-argument', 'When persuading or arguing: acknowledge it, then answer it.', null],
    ['Ending', null, ['call to action', 'recommendation', 'summary', 'memorable final line']],
  ];
  let b = '';
  parts.forEach(([h, s, chips], i) => {
    const y = 112 + i * 118;
    b += panel(30, y, 840, 102, i === 3 ? C.cream : C.panel, i === 3 ? C.olive : C.panelEdge) + badge(76, y + 51, 24, String(i + 1), i === 3 ? C.mustard : C.cream);
    b += t(120, y + 40, h, { size: 21, weight: 700 }) + (i === 3 ? t(850, y + 40, 'match it to the purpose', { size: 16, anchor: 'end', fill: C.olive, weight: 700 }) : '');
    if (s) b += t(120, y + 72, s, { size: 17, fill: C.muted });
    if (chips) b += chipRow(120, y + 54, 860, chips, { size: 16, fill: i === 3 ? '#ffffff' : C.tealLight, edge: i === 3 ? C.olive : C.tealDark }, 36).svg;
    if (i < 3) b += arrow(76, y + 78, 76, y + 114, { w: 3 });
  });
  b += t(450, 618, 'Techniques to choose from', { size: 19, weight: 700, anchor: 'middle' });
  const r = chipRow(30, 636, 870, ['direct address', 'inclusive pronouns', 'rhetorical questions', 'the rule of three', 'anecdote', 'contrast', 'expert or eyewitness views from the sources', 'imperatives in a call to action'], { size: 16 }, 38);
  b += r.svg;
  add('05-building-the-writing',
    svg(900, r.bottom + 30, 'Building the writing', b),
    'Four stages: an opening that establishes purpose and engages the audience; one paragraph per idea with topic sentence, development, example and link to purpose; a counter-argument acknowledged and answered; and an ending matched to purpose. Below, techniques such as direct address, rhetorical questions and the rule of three.',
    'Open with purpose, build one idea per paragraph, answer the other side, end to match the purpose.',
    '## Building the writing');
}

// 06 Worked example: the cycle-lanes plan
{
  const steps = [
    ['Greeting + hook', '“Good evening. How long did it take you to get here tonight?”', ''],
    ['Problem', 'Traffic queues and unsafe roads.', 'idea from the poster, reworked'],
    ['Benefit for residents', 'Safer journeys for children.', 'example from the story'],
    ['Address business owners', 'Acknowledge the parking worry; answer it.', 'second audience'],
    ['Counter-argument', 'Answer “no one cycles in the rain” with a realistic example.', ''],
    ['Close', '“Safer streets, healthier families, busier shops. Fill in the consultation. Say yes.”', 'rule of three + call to action'],
  ];
  let b = '';
  steps.forEach(([h, s, tag], i) => {
    const y = 110 + i * 96;
    b += panel(30, y, 840, 84, i === 5 ? C.cream : C.panel, i === 5 ? C.olive : C.panelEdge) + badge(72, y + 42, 22, String(i + 1), i === 5 ? C.mustard : C.cream);
    b += t(112, y + 34, h, { size: 19, weight: 700 }) + t(112, y + 62, s, { size: 16, fill: C.muted, italic: s.startsWith('“') });
    if (tag) { const w = tag.length * 8.2 + 30; b += pill(850 - w, y + 14, w, 32, tag, { size: 15, fill: C.tealLight, edge: C.tealDark }); }
  });
  b += box(30, 694, 840, 64, C.tealLight, C.tealDark) + t(450, 733, 'Both audiences named, sources transformed, form features planned.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('06-worked-plan',
    svg(900, 785, 'Worked example: a plan for the cycle-lanes speech', b),
    'The six-point plan for a speech persuading residents and business owners to support cycle lanes: a greeting and hook, the problem (from the poster), a benefit for residents (from the story), addressing business owners’ parking worry, answering the rain objection, and a rule-of-three close with a call to action.',
    'A good plan names both audiences, reworks the sources and builds in the form’s features.',
    '## Worked example: a plan');
}

// 07 Two openings compared
{
  let b = t(450, 126, 'Task: a letter to your head teacher arguing that students should help plan the school day', { size: 17, weight: 700, anchor: 'middle' });
  b += panel(30, 148, 840, 190, '#ffffff', C.rust) + t(55, 184, 'Weak', { size: 21, weight: 700, fill: C.rust });
  b += t(55, 218, '“Hi, I think students should plan the school day because it would be', { size: 17, italic: true }) + t(55, 242, 'good and we would like it.”', { size: 17, italic: true });
  b += chipRow(55, 270, 860, ['too informal for the audience', 'vague reasons', 'no structure'], { size: 16, fill: '#ffffff', edge: C.rust, color: C.rust }, 38).svg;
  b += panel(30, 358, 840, 262, C.panel, C.tealDark) + t(55, 394, 'Strong', { size: 21, weight: 700, fill: C.tealDark });
  b += para(55, 428, '“Dear Mrs Okafor, I am writing on behalf of the Student Council to propose that students play a part in planning the school day. We believe this would improve attendance, motivation and the relationship between staff and students, and we would welcome the chance to discuss it with you.”', 84, { size: 17, italic: true }, 24);
  b += chipRow(55, 556, 860, ['correct letter form', 'formal register', 'a clear purpose', 'a preview of three points'], { size: 16, fill: C.tealLight, edge: C.tealDark }, 38).svg;
  add('07-two-openings',
    svg(900, 648, 'Two openings compared', b),
    'A weak opening (“Hi, I think students should plan the school day…”) is too informal, vague and unstructured. A strong opening (“Dear Mrs Okafor, I am writing on behalf of the Student Council…”) uses correct letter form, a formal register, a clear purpose and a preview of three points.',
    'The strong opening fits the audience, states its purpose and previews its points.',
    '## Worked example: two openings compared');
}
