import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-english-literature-0475-section-a-poetry';
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
const kbadge = (cx, cy, r, label, fill = C.cream) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + 7, label, { size: 19, weight: 700, anchor: 'middle' });
const pill = (x, y, w, h, s, { fill = C.cream, edge = C.olive, size = 17, weight = 600, color = C.ink } = {}) =>
  box(x, y, w, h, fill, edge, h / 2) + t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight, anchor: 'middle', fill: color });
const apath = (d, color = C.ink, marker = 'ah', w = 3.5) => path(d, { stroke: color, w, extra: `marker-end="url(#${marker})"` });
const PINK = '#f6e3d6';

// 01 What Section A asks
{
  let b = '';
  b += t(450, 104, 'Paper 1: 50 marks', { size: 18, anchor: 'middle', fill: C.muted, weight: 600 });
  b += `<rect x="30" y="118" width="420" height="70" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(240, 151, 'Section A: Poetry', { size: 20, weight: 700, anchor: 'middle' }) + t(240, 175, '25 marks', { size: 17, anchor: 'middle' });
  b += `<rect x="450" y="118" width="420" height="70" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + t(660, 151, 'Section B: Prose', { size: 20, weight: 700, anchor: 'middle', fill: C.muted }) + t(660, 175, '25 marks', { size: 17, anchor: 'middle', fill: C.muted });
  const facts = [['one set text', 'answer one question on one poetry set text'], ['choice of two', 'two questions on each text'], ['poem printed', 'the poem is on the question paper']];
  facts.forEach(([h, d], i) => {
    const x = 30 + i * 285;
    b += box(x, 208, 270, 96, C.cream, C.olive) + t(x + 20, 240, h, { size: 19, weight: 700 }) + para(x + 20, 266, d, 30, { size: 15, fill: C.ink }, 19);
  });
  b += t(450, 346, 'Every question tests four assessment objectives', { size: 21, weight: 700, anchor: 'middle' });
  const aos = [
    ['AO1', 'Knowledge of the content', 'through reference to detail and quotation'],
    ['AO2', 'Understanding', 'of characters, relationships, situations and themes'],
    ['AO3', 'Writer’s intentions and methods', 'including response to the writer’s use of language'],
    ['AO4', 'Personal response', 'sometimes directly, sometimes by implication'],
  ];
  aos.forEach(([k, h, d], i) => {
    const x = 30 + (i % 2) * 430, y = 366 + Math.floor(i / 2) * 110;
    const hot = k === 'AO3';
    b += box(x, y, 410, 96, hot ? C.mustard : C.panel, hot ? C.ink : C.panelEdge) + kbadge(x + 46, y + 48, 30, k, hot ? C.panel : C.cream);
    b += t(x + 90, y + 40, h, { size: 18, weight: 700 }) + para(x + 90, y + 66, d, 36, { size: 15, fill: hot ? C.ink : C.muted }, 19);
  });
  b += box(30, 596, 840, 84, C.tealLight, C.tealDark);
  b += t(450, 628, 'In poetry, AO3 carries particular weight: meaning lives in a single verb,', { size: 17, anchor: 'middle', weight: 600, fill: C.tealDark });
  b += t(450, 654, 'a line break, a change of rhythm. Say how, not only what.', { size: 17, anchor: 'middle', weight: 600, fill: C.tealDark });
  add('01-section-a-and-aos',
    svg(900, 704, 'Section A: one poem, four objectives', b),
    'Section A is worth 25 of Paper 1’s 50 marks: one question on one poetry set text, from a choice of two, with the poem printed. Every question tests AO1 knowledge, AO2 understanding, AO3 the writer’s methods and AO4 personal response, and AO3 carries particular weight in poetry.',
    'Explaining how the poem creates meaning (AO3) separates the higher levels from the lower.',
    '## What Section A asks of you');
}

// 02 Six layers of reading
{
  let b = '';
  const L = [
    ['The question’s key words', 'underline them; every note should serve them', C.mustard],
    ['Voice and situation', 'who speaks, to whom, where, when? Call them “the speaker”', C.cream],
    ['The shape of the poem', 'where it begins and ends emotionally; find the turn', C.cream],
    ['Imagery', 'metaphor, simile, personification: what does each make the reader feel?', C.tealLight],
    ['Sound and rhythm', 'alliteration, assonance, rhyme, line length: pace and mood', C.tealLight],
    ['Form and structure', 'stanzas, line breaks, enjambment, caesura, repetition, the title', C.teal],
  ];
  L.forEach(([h, d, f], i) => {
    const y = 110 + i * 92, inset = i * 14;
    b += box(30 + inset, y, 840 - inset * 2, 80, f, C.ink, 12) + badge(68 + inset, y + 40, 20, String(i + 1), C.panel);
    b += t(102 + inset, y + 34, h, { size: 19, weight: 700 }) + t(102 + inset, y + 60, d, { size: 16 });
  });
  b += t(450, 680, 'Read again in the exam with the question beside you; note answers in the margin.', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  add('02-six-layers',
    svg(900, 706, 'Reading the printed poem in layers', b),
    'Six layers for reading a printed poem: the question’s key words, voice and situation, the poem’s emotional shape and turn, imagery, sound and rhythm, and form and structure, each with the questions to ask.',
    'Work through the poem layer by layer, always with the question’s key words in view.',
    '## How should you read a printed poem in the exam?');
}

// 03 Analysing a method
{
  let b = '';
  const steps = [['1', 'Name the method', 'only if it helps', C.panel], ['2', 'Quote precisely', 'the exact words', C.cream], ['3', 'Explain the effect', 'in the context of the question', C.mustard]];
  steps.forEach(([n, h, d, f], i) => {
    const x = 30 + i * 285;
    b += box(x, 110, 270, 110, f, C.ink) + badge(x + 36, 150, 20, n, C.panel) + t(x + 66, 157, h, { size: 19, weight: 700 }) + t(x + 22, 198, d, { size: 16, fill: C.ink });
    if (i < 2) b += arrow(x + 271, 165, x + 284, 165, { w: 3 });
  });
  b += box(30, 246, 840, 120, PINK, C.rust);
  b += t(52, 280, 'Feature-spotting', { size: 19, weight: 700, fill: C.rust }) + t(848, 280, 'earns little on its own', { size: 15, anchor: 'end', fill: C.rust, italic: true });
  b += t(52, 320, '“The poet uses alliteration in ‘soft and slow’.”', { size: 17, italic: true });
  b += pill(52, 330, 150, 28, 'name + quote only', { fill: C.panel, edge: C.rust, size: 15, color: C.rust });
  b += box(30, 386, 840, 170, C.tealLight, C.tealDark);
  b += t(52, 420, 'Analysis', { size: 19, weight: 700, fill: C.tealDark }) + t(848, 420, 'what the examiner rewards', { size: 15, anchor: 'end', fill: C.tealDark, italic: true });
  b += tl(52, 458, ['“The soft, slow sounds of ‘soft and slow’ make the line itself linger,', 'so the reader feels the speaker’s reluctance to let the moment end.”'], { size: 17, italic: true }, 25);
  b += pill(52, 506, 210, 30, 'quote + effect on the reader', { fill: C.panel, edge: C.tealDark, size: 15, color: C.tealDark });
  b += box(30, 576, 840, 92, C.cream, C.olive);
  b += t(450, 610, 'Often the best analysis focuses on a single word:', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 642, 'why “files” and not “drives”? why “thin” curtains?', { size: 18, anchor: 'middle', italic: true });
  add('03-analysing-a-method',
    svg(900, 692, 'Feature-spotting versus analysis', b),
    'Analysis in three parts: name the method only if it helps, quote precisely and explain the effect in context. Saying the poet uses alliteration in “soft and slow” is feature-spotting; explaining that the sounds make the line linger, so the reader feels the speaker’s reluctance, is analysis.',
    'The examiner rewards what you say about the effect, not the name of the technique.',
    '## What does it mean to analyse a method?');
}

// 04 Annotated poem
{
  let b = '';
  const lines = [
    'My mother comes home as the street wakes up,',
    'her coat still holding the hospital’s cold.',
    'She sets her keys down softly, like a cup',
    'too full to carry. Nothing she is told',
    '',
    'at work comes home with her. She only smiles,',
    'asks if I’ve eaten, if I’ve done my sums,',
    'then sleeps the daylight through, while traffic files',
    'past our thin curtains and the kettle hums.',
  ];
  const ly = (i) => 196 + i * 56 - (i > 4 ? 28 : 0);
    b += t(52, 146, 'Night Shift', { size: 20, weight: 700 }) + t(176, 146, '(original poem)', { size: 15, fill: C.muted, italic: true });
  lines.forEach((s, i) => { if (s) b += t(52, ly(i), s, { size: 16, italic: true }); });
  const notes = [
    [0, 'Her day ends as everyone else’s begins: she lives out of step with the world.'],
    [1, '“holding”: the coat is given the action, as if her work clings to her; hard “c” sounds make the cold sharp.'],
    [2.5, 'The cup simile: she handles her keys as if they could spill; she is “too full” herself, of tiredness or what she has seen.'],
    [3.5, 'Enjambment across the stanza break carries the sentence over the gap, as she carries work home but will not speak of it.'],
    [6, 'Her questions are all about the child: care that puts her own needs last.'],
    [7.5, '“thin” suggests how little protects her sleep; “hums” closes on quiet domestic love.'],
  ];
  let prev = 106;
  notes.forEach(([li, s]) => {
    const wl = wrap(s, 40), h = wl.length * 19 + 22;
    const target = li === 3.5 ? (ly(3) + ly(5)) / 2 - 6 : li % 1 ? (ly(li - 0.5) + ly(li + 0.5)) / 2 - 6 : ly(li) - 6;
    const y = Math.max(target - h / 2, prev + 10);
    b += `<line x1="468" y1="${target}" x2="508" y2="${y + h / 2}" stroke="${C.olive}" stroke-width="2" stroke-dasharray="5 4"/>`;
    b += `<circle cx="468" cy="${target}" r="4" fill="${C.olive}"/>`;
    b += box(508, y, 362, h, C.panel, C.tealDark, 10) + tl(524, y + 26, wl, { size: 15 }, 19);
    prev = y + h;
  });
  const bot = Math.max(prev, ly(8) + 34);
  b = box(30, 110, 450, bot - 110, C.cream, C.olive) + b;
  b += box(30, bot + 18, 840, 56, C.tealLight, C.tealDark) + t(450, bot + 53, 'Question: How does the poet movingly present the mother in this poem?', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('04-annotated-poem',
    svg(900, bot + 98, 'Annotating a poem for the question', b),
    'The original poem “Night Shift” with six margin notes: the mother out of step with the world, her coat “holding” the hospital’s cold, the simile of a cup too full to carry, enjambment across the stanza break, her questions about the child, and the closing “thin” curtains and humming kettle.',
    'Each note links a precise choice of words, sound or form to the question’s focus on the mother.',
    '## Worked example: an original poem');
}

// 05 Planning a 25-mark answer
{
  let b = '';
  const blocks = [
    ['Opening', 'answer the question in two sentences: the main impression and how the poem creates it', 96, C.mustard],
    ['Three or four paragraphs', 'each on a stage or aspect of the poem, following its movement; two or three short quotations analysed closely in each', 190, C.tealLight],
    ['The ending or overall structure', 'how the poem leaves the reader', 80, C.cream],
    ['Conclusion', 'brief; return to the question’s key word with your considered view', 96, C.mustard],
  ];
  let y = 110;
  blocks.forEach(([h, d, hgt, f], i) => {
    b += box(30, y, 520, hgt, f, C.ink, 10) + t(52, y + 32, h, { size: 19, weight: 700 }) + para(52, y + 58, d, 54, { size: 15 }, 19);
    if (i === 1) [0, 1, 2].forEach((j) => { b += box(60 + j * 160, y + 110, 140, 60, C.panel, C.tealDark, 8) + t(130 + j * 160, y + 136, 'stage ' + (j + 1), { size: 15, anchor: 'middle', weight: 600 }) + t(130 + j * 160, y + 156, '2–3 quotations', { size: 15, anchor: 'middle', fill: C.muted }); });
    y += hgt + 12;
  });
  b += t(710, 132, 'Where your view goes', { size: 19, weight: 700, anchor: 'middle' });
  b += box(574, 152, 296, 188, C.panel, C.olive) + t(594, 184, 'Direct question', { size: 18, weight: 700, fill: C.olive });
  b += t(594, 210, '“What do you think…?”', { size: 15, italic: true }) + t(594, 232, '“What are your feelings about…?”', { size: 15, italic: true });
  b += para(594, 270, 'Make your view explicit from the first paragraph.', 30, { size: 16, weight: 600 }, 21);
  b += box(574, 356, 296, 188, C.panel, C.tealDark) + t(594, 388, 'Implied question', { size: 18, weight: 700, fill: C.tealDark });
  b += t(594, 414, '“Explore the ways in which…”', { size: 15, italic: true });
  b += para(594, 450, 'Let your view emerge through precise analysis.', 30, { size: 16, weight: 600 }, 21);
  b += box(30, y + 6, 840, 56, PINK, C.rust) + t(450, y + 41, 'Follow the poem’s movement, not a list of techniques.', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  add('05-planning-25-marks',
    svg(900, y + 86, 'Planning a 25-mark poetry answer', b),
    'A plan of four or five points: a two-sentence opening that answers the question, three or four paragraphs on stages of the poem with two or three short quotations each, a paragraph on the ending or structure, and a brief conclusion on the key word. For direct questions the view is explicit from the start; for “Explore the ways” it emerges through analysis.',
    'Plan the answer around the poem’s movement and place your view to suit the question type.',
    '## Planning a 25-mark answer');
}
