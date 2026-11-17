import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-english-language-9270-section-b-composition';
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


// 01 Three tasks, choose one; W1-W4
{
  let b = panel(30, 110, 840, 150);
  b += t(55, 146, 'Three tasks are set', { size: 20, weight: 700 });
  ['Descriptive', 'Imaginative', 'Argumentative / discursive'].forEach((s, i) => {
    const w = [170, 170, 270][i], x = [55, 240, 425][i];
    b += pill(x, 170, w, 46, s, { fill: C.tealLight, edge: C.tealDark, size: 17 });
  });
  b += arrow(705, 193, 745, 193, { w: 4 });
  b += `<circle cx="800" cy="193" r="48" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(800, 188, 'Write', { size: 18, weight: 700, anchor: 'middle' }) + t(800, 210, 'ONE', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 300, 'Every task is marked on the same four writing objectives (AO2)', { size: 19, weight: 700, anchor: 'middle' });
  const rows = [
    ['W1', 'Content, voice, vocabulary and engagement', 'Communicate clearly, effectively and imaginatively for the task and purpose.'],
    ['W2', 'Varied, controlled sentences', 'A range of sentence structures for clarity, purpose and effect.'],
    ['W3', 'Shape, paragraphing, links, a planned whole', 'Organise ideas; use features that support cohesion and coherence.'],
    ['W4', 'Correct, secure written English', 'Technical accuracy in grammar, punctuation and spelling.'],
  ];
  rows.forEach(([k, h, d], i) => {
    const y = 322 + i * 104;
    b += panel(30, y, 840, 92) + badge(82, y + 46, 28, k, C.cream);
    b += t(130, y + 38, h, { size: 20, weight: 700 }) + t(130, y + 66, d, { size: 16, fill: C.muted });
  });
  b += box(30, 744, 840, 56, C.tealLight, C.tealDark) + t(450, 779, 'AO2 writing is worth 30% of the qualification through Paper 1.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('01-tasks-and-objectives',
    svg(900, 830, 'Section B: one composition, four objectives', b),
    'Three composition tasks are set (descriptive, imaginative, argumentative or discursive) and one is written. The writing is marked on W1 content and engagement, W2 sentence variety, W3 organisation and cohesion, and W4 technical accuracy, which together make AO2, worth 30% of the qualification through Paper 1.',
    'Whichever task you choose, the same four writing objectives are applied.',
    '## What the specification says');
}

// 02 Choosing your task
{
  let b = '';
  const head = (y, n, q) => badge(70, y + 40, 22, n, C.mustard) + t(108, y + 48, q, { size: 21, weight: 700 });
  b += panel(30, 110, 840, 110) + head(110, '1', 'Can I plan an ending for it right now?');
  b += t(108, 192, 'If you cannot see the end, you will drift.', { size: 17, fill: C.muted });
  b += panel(30, 238, 840, 230) + head(238, '2', 'Which task suits my strengths?');
  [['precise vocabulary', 'description'], ['strong sense of shape', 'narrative'], ['clear opinions and evidence', 'argument']].forEach(([a, c], i) => {
    const y = 310 + i * 50;
    b += pill(108, y, 290, 40, a, { fill: C.tealLight, edge: C.tealDark, size: 17 }) + arrow(405, y + 20, 455, y + 20, { w: 3 }) + pill(462, y, 200, 40, c, { size: 17 });
  });
  b += panel(30, 486, 840, 270) + head(486, '3', 'What exactly does the task ask?');
  b += box(108, 552, 300, 56, C.panel, C.ink) + t(258, 587, '“Describe a moment when…”', { size: 17, italic: true, anchor: 'middle' });
  b += t(450, 589, '≠', { size: 30, weight: 700, anchor: 'middle', fill: C.rust });
  b += box(492, 552, 300, 56, C.panel, C.ink) + t(642, 587, '“Write a story about…”', { size: 17, italic: true, anchor: 'middle' });
  b += pill(108, 630, 140, 40, '“discuss”', { fill: C.tealLight, edge: C.tealDark }) + arrow(255, 650, 300, 650, { w: 3 }) + t(310, 656, 'a balanced exploration', { size: 17 });
  b += pill(108, 686, 140, 40, '“argue”', { fill: C.tealLight, edge: C.tealDark }) + arrow(255, 706, 300, 706, { w: 3 }) + t(310, 712, 'a position', { size: 17 });
  b += t(450, 790, 'Spend the first minutes deciding, not writing.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('02-choosing-a-task',
    svg(900, 815, 'Three questions before you choose', b),
    'Three checks for choosing a task: can you plan an ending now; which task suits your strengths (precise vocabulary for description, a sense of shape for narrative, clear opinions and evidence for argument); and what exactly the task asks, since describing is not storytelling and “discuss” wants balance while “argue” wants a position.',
    'Choose the task you can see the end of, that suits you, and that you have read exactly.',
    '## Choosing your task');
}

// 03 Descriptive writing: move the camera
{
  let b = t(45, 135, 'Move the camera to give description a structure', { size: 20, weight: 700 });
  const frame = (cx, cy, w, h, lab, fill = C.tealLight) => box(cx - w / 2, cy - h / 2, w, h, fill, C.ink, 6) + t(cx, cy + h / 2 + 26, lab, { size: 16, anchor: 'middle', weight: 600 });
  // row 1 zoom
  const r1 = 215;
  b += panel(30, 150, 840, 150);
  b += frame(170, r1, 180, 90, 'wide view') + arrow(270, r1, 380, r1, { w: 3 }) + frame(440, r1, 70, 40, 'detail', C.cream) + arrow(485, r1, 590, r1, { w: 3 }) + frame(700, r1, 200, 100, 'wider again');
  const r2 = 380;
  b += panel(30, 318, 420, 140) + panel(450, 318, 420, 140);
  b += t(240, 350, 'Outside → inside', { size: 19, weight: 700, anchor: 'middle' });
  b += `<path d="M110,${r2 + 50} L110,${r2 + 5} L150,${r2 - 20} L190,${r2 + 5} L190,${r2 + 50} Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + `<rect x="140" y="${r2 + 22}" width="20" height="28" fill="${C.ink}"/>`;
  b += arrow(215, r2 + 18, 275, r2 + 18, { w: 3 });
  b += box(295, r2 - 20, 100, 70, C.cream, C.ink, 4) + `<rect x="320" y="${r2 + 8}" width="50" height="16" fill="${C.olive}"/>`;
  b += t(660, 350, 'Same place, two times', { size: 19, weight: 700, anchor: 'middle' });
  b += box(520, r2 - 15, 110, 64, C.cream, C.ink, 4) + `<circle cx="605" cy="${r2 + 2}" r="12" fill="${C.mustard}"/>` + t(575, r2 + 72, 'earlier', { size: 16, anchor: 'middle', weight: 600 });
  b += arrow(640, r2 + 17, 685, r2 + 17, { w: 3 });
  b += box(695, r2 - 15, 110, 64, C.blue, C.ink, 4) + `<circle cx="780" cy="${r2 + 2}" r="9" fill="#ffffff"/>` + t(750, r2 + 72, 'later', { size: 16, anchor: 'middle', weight: 600 });
  const tips = [
    ['Narrow the focus', 'One place at one moment, or one person in one action.'],
    ['Use the senses, but select', 'One precise sound beats five vague ones.'],
    ['Exact nouns and verbs', '“the shutters rattled” beats “the very loud windows”'],
    ['Let the mood develop', 'Calm to tense, or the reverse, gives shape.'],
  ];
  tips.forEach(([h, s], i) => {
    const x = 30 + (i % 2) * 430, y = 478 + Math.floor(i / 2) * 120;
    b += panel(x, y, 410, 104, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge) + t(x + 22, y + 38, h, { size: 20, weight: 700 }) + para(x + 22, y + 66, s, 46, { size: 16, fill: C.muted }, 21);
  });
  add('03-descriptive-camera',
    svg(900, 735, 'Descriptive writing: build a picture and a mood', b),
    'Three ways to move the camera in a description: wide view to detail and wider again, outside to inside, and the same place at two times. Four tips below: narrow the focus, use the senses selectively, choose exact nouns and verbs, and let the mood develop.',
    'A description needs no plot, but it does need a moving viewpoint and a developing mood.',
    '## Descriptive writing');
}

// 04 Imaginative writing: shape and pace
{
  let b = t(45, 135, 'Keep it small', { size: 20, weight: 700 });
  ['one main character', 'one setting', 'one problem', 'a short time span'].forEach((s, i) => { b += pill(45 + i * 207, 152, 195, 42, s, { fill: C.tealLight, edge: C.tealDark, size: 17 }); });
  // timeline
  const ly = 330;
  b += `<line x1="50" y1="${ly}" x2="200" y2="${ly}" stroke="${C.muted}" stroke-width="4" stroke-dasharray="8 7"/>`;
  b += t(115, ly - 30, 'waking up', { size: 16, anchor: 'middle', fill: C.muted }) + path(`M100,${ly - 15} l30,30 m0,-30 l-30,30`, { stroke: C.rust, w: 4 });
  b += `<line x1="200" y1="${ly}" x2="440" y2="${ly}" stroke="${C.ink}" stroke-width="5"/>`;
  b += `<rect x="440" y="${ly - 26}" width="240" height="52" rx="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(560, ly + 7, 'key moment', { size: 19, weight: 700, anchor: 'middle' });
  b += arrow(680, ly, 850, ly, { w: 5 });
  b += `<circle cx="200" cy="${ly}" r="11" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>`;
  b += t(200, ly + 46, 'Start late', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(200, ly + 70, 'close to the moment', { size: 16, anchor: 'middle', fill: C.muted }) + t(200, ly + 90, 'of change', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(320, ly - 46, 'summarise less important', { size: 16, anchor: 'middle', fill: C.muted }) + t(320, ly - 24, 'time in a sentence', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(560, ly + 56, 'slow down here:', { size: 17, weight: 700, anchor: 'middle' }) + t(560, ly + 78, 'action, detail, brief dialogue', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(850, ly - 22, 'planned ending', { size: 18, weight: 700, anchor: 'end' });
  b += panel(30, 465, 840, 175, C.cream, C.olive) + t(55, 503, 'Plan the ending first. Any of these works if it is deliberate:', { size: 19, weight: 700 });
  ['a twist', 'a realisation', 'a circular return to the opening image', 'an open ending'].forEach((s, i) => {
    const w = [130, 170, 370, 170][i], x = [55, 195, 375, 55][i], y = i < 3 ? 525 : 580;
    b += pill(x, y, w, 42, s, { fill: '#ffffff', edge: C.olive, size: 17 });
  });
  b += t(450, 680, 'Show, don’t summarise: reveal feelings through action, detail and brief dialogue.', { size: 17, weight: 600, anchor: 'middle', fill: C.tealDark });
  add('04-imaginative-shape',
    svg(900, 710, 'Imaginative writing: control the story', b),
    'A story timeline that skips waking up and starts close to the moment of change, summarises less important time in a sentence, slows down at the key moment and ends on a planned ending: a twist, a realisation, a circular return to the opening image or an open ending. Above it: one character, one setting, one problem, a short time span.',
    'Keep the story small, start late, slow down at the key moment and plan the ending first.',
    '## Imaginative writing');
}

// 05 Argument vs discussion, with the worked openings
{
  let b = box(30, 108, 840, 58, C.panel, C.ink) + t(450, 144, 'Task: “Teenagers should be paid for doing well at school.”', { size: 19, weight: 700, anchor: 'middle' });
  const col = (x, title, fill, edge, traits, open) => {
    let c = panel(x, 186, 410, 392, C.panel, edge) + `<rect x="${x}" y="186" width="410" height="54" rx="14" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + t(x + 205, 221, title, { size: 22, weight: 700, anchor: 'middle' });
    traits.forEach((s, i) => { c += `<circle cx="${x + 30}" cy="${270 + i * 34}" r="5" fill="${edge}"/>` + t(x + 46, 276 + i * 34, s, { size: 17 }); });
    c += t(x + 24, 422, 'Opening', { size: 17, weight: 700, fill: edge });
    c += para(x + 24, 450, open, 47, { size: 16, italic: true }, 23);
    return c;
  };
  b += col(30, 'Argumentative', C.teal, C.tealDark, ['takes a clear position', 'raises counter-arguments to rebut', 'confident, committed tone', 'call to action or firm conclusion'],
    '“Imagine working for five years with no wages, no promotion and a report card as your only reward. That is school. Yet paying students for grades would be one of the worst ideas a government could adopt.”');
  b += col(460, 'Discursive', C.cream, C.olive, ['explores several viewpoints', 'weighs counter-arguments fairly', 'measured, reflective tone', 'considered, maybe qualified, judgement'],
    '“Few questions divide parents more quickly than whether children should be rewarded for success. Supporters see money as motivation; critics fear it teaches students to value learning only for what it pays.”');
  b += t(450, 616, 'Both are effective; decide which the task wants before you begin.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('05-argument-vs-discussion',
    svg(900, 645, 'Argue or discuss? Two openings', b),
    'The same task opened two ways. The argumentative column takes a clear position, rebuts counter-arguments, uses a confident tone and ends with a call to action. The discursive column explores several viewpoints, weighs them fairly, uses a measured tone and ends with a considered judgement. Each shows the lesson’s model opening.',
    'Argument commits to a side; discussion weighs the sides. The task tells you which.',
    '## Worked example: argument vs discussion');
}

// 06 Annotated descriptive opening
{
  let b = t(450, 128, 'Task: Describe a railway station late at night.', { size: 19, weight: 700, anchor: 'middle' });
  const rows = [
    ['The last train has gone.', 'W2', 'Short opening sentence sets the moment and a mood of absence.'],
    ['Under the station clock, a single pigeon walks in careful circles, as if it has lost something small.', 'W1', 'Precise, unusual detail; the simile suggests searching and loneliness.'],
    ['The vending machine hums to itself.', '', 'Personification makes the station feel alive but deserted.'],
    ['Somewhere above the empty platform a loose sign creaks, settles, creaks again — the only conversation left in the building.', 'W3', 'Personification (“conversation”); the dash isolates the final phrase, an image that could return at the end.'],
  ];
  let y = 150;
  rows.forEach(([s, k, a], i) => {
    const ls = wrap(s, 40), la = wrap(a, 30);
    const h = Math.max(ls.length * 25, la.length * 22) + 40;
    b += box(30, y, 450, h, C.cream, C.olive) + tl(52, y + 34, ls, { size: 18, italic: true }, 25);
    b += arrow(484, y + h / 2, 522, y + h / 2, { w: 3 });
    b += box(528, y, 342, h, C.panel, C.panelEdge);
    if (k) b += badge(562, y + 38, 22, k, C.teal);
    b += tl(k ? 596 : 548, y + 34, k ? wrap(a, 27) : la, { size: 16 }, 22);
    y += h + 14;
  });
  add('06-annotated-opening',
    svg(900, y + 16, 'An annotated descriptive opening', b),
    'The four sentences of the railway-station opening, each with its annotation: a short first sentence for mood (W2), a precise simile of the pigeon walking in careful circles (W1), personification of the vending machine, and a dash isolating the final phrase about the sign’s “conversation” for a possible cyclical ending (W3).',
    'Every choice in the opening does a job: mood, precise detail, personification, emphasis.',
    '## Worked example: a descriptive opening with annotation');
}

// 07 Planning in five minutes
{
  const steps = [
    ['Task type and form', 'in one line'],
    ['Ending', 'the final image, realisation or conclusion'],
    ['Four or five paragraph headings', 'in order'],
    ['Three ambitious but accurate words or images', 'to use'],
    ['One structural device', 'cyclical ending, time shift, change of focus'],
  ];
  let b = '';
  steps.forEach(([h, s], i) => {
    const y = 112 + i * 92;
    b += panel(30, y, 840, 80, i === 1 ? C.cream : C.panel, i === 1 ? C.olive : C.panelEdge) + badge(78, y + 40, 24, String(i + 1), i === 1 ? C.mustard : C.cream);
    b += t(124, y + 36, h, { size: 20, weight: 700 }) + t(124, y + 62, s, { size: 17, fill: C.muted });
  });
  b += box(30, 582, 840, 120, C.tealLight, C.tealDark) + t(55, 616, 'Final minutes: check for W4', { size: 19, weight: 700, fill: C.tealDark });
  b += para(55, 646, 'Sentence boundaries (no comma splices), apostrophes, homophones, consistent tense, capital letters, punctuation of speech.', 86, { size: 17 }, 24);
  add('07-five-minute-plan',
    svg(900, 730, 'Planning in five minutes', b),
    'A five-step plan: task type and form in one line, the ending, four or five paragraph headings, three ambitious but accurate words or images, and one structural device. Below, the final-minute accuracy checks for W4.',
    'Plan the ending before you start, and save the last minutes for checking.',
    '## Planning in five minutes');
}
