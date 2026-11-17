import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-english-language-9270-section-a-literary-non-fiction';
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

// 01 Four reading skills
{
  const rows = [
    ['R1', 'Select and use', 'Find the right details for the question asked, and use them, not just copy them.'],
    ['R2', 'Collate and synthesise', 'Gather details from different parts of the one text and draw them together.'],
    ['R3', 'Interpret ideas and perspectives', 'Work out the writer’s attitude and how it develops.'],
    ['R4', 'Explain and evaluate methods', 'Analyse words, sentences and organisation, and their effect on the reader.'],
  ];
  let b = '';
  rows.forEach(([k, name, desc], i) => {
    const y = 125 + i * 128;
    b += panel(30, y, 840, 112) + badge(90, y + 56, 32, k, i === 3 ? C.mustard : C.cream);
    b += t(145, y + 44, name, { size: 22, weight: 700 }) + para(145, y + 74, desc, 84, { size: 17, fill: C.muted }, 23);
  });
  add('01-reading-skills',
    svg(900, 660, 'Four reading skills tested in Section A', b, 'AO1 reading, applied to one unseen text'),
    'Four rows for the AO1 reading skills: R1 select and use details, R2 collate and synthesise details from across the text, R3 interpret the writer’s ideas and perspective, R4 explain and evaluate the writer’s methods and their effects.',
    'Every Section A question tests one or more of the four reading skills, R1 to R4.',
    '## What the specification says');
}

// 02 What makes literary non-fiction different
{
  const y1 = 120;
  let b = panel(30, y1, 840, 250);
  b += badge(72, y1 + 42, 22, '1') + t(108, y1 + 50, 'A real “I”', { size: 23, weight: 700 });
  // timeline
  const ly = y1 + 140;
  b += `<line x1="90" y1="${ly}" x2="800" y2="${ly}" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<circle cx="190" cy="${ly}" r="13" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>` + `<circle cx="700" cy="${ly}" r="13" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>`;
  b += t(190, ly - 30, 'younger self', { size: 19, weight: 700, anchor: 'middle' }) + t(190, ly + 42, 'lives the experience', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(700, ly - 30, 'older writer', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(700, ly + 42, 'looks back and comments', { size: 16, anchor: 'middle', fill: C.muted });
  b += arrow(640, ly - 14, 250, ly - 14, { color: C.tealDark, marker: 'ahT', w: 3 });
  b += t(445, ly - 26, 'the gap = hindsight', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += pill(270, y1 + 196, 360, 38, '“I was sure then that…”', { size: 17 });
  b += t(645, y1 + 221, 'signals a change of view', { size: 16, fill: C.muted });
  const y2 = y1 + 270;
  const card = (x, n, title, sub, chips, foot) => {
    let c = panel(x, y2, 410, 330) + badge(x + 42, y2 + 42, 22, n) + t(x + 78, y2 + 50, title, { size: 23, weight: 700 });
    c += para(x + 28, y2 + 92, sub, 40, { size: 17, fill: C.muted }, 23);
    chips.forEach((s, i) => { c += pill(x + 28 + (i % 2) * 180, y2 + 140 + Math.floor(i / 2) * 54, 170, 40, s, { fill: C.tealLight, edge: C.tealDark, size: 17 }); });
    c += para(x + 28, y2 + 280, foot, 40, { size: 17, weight: 700, fill: C.tealDark }, 23);
    return c;
  };
  b += card(30, '2', 'A purpose beyond facts', 'The writer wants you to feel something about a place, person or event:', ['admiration', 'unease', 'amusement', 'nostalgia'], 'Ask: what should the reader feel?');
  b += card(460, '3', 'Selection and arrangement', 'The writer shapes the true experience by deciding what to:', ['put first', 'linger on', 'leave out', 'leave to the end'], 'These choices are evidence of perspective.');
  add('02-literary-non-fiction-features',
    svg(900, 740, 'True, but shaped: what to look for', b),
    'Three features of literary non-fiction. A first-person voice where an older writer looks back at a younger self, so phrases like “I was sure then that…” signal a change of view; a purpose beyond the facts, such as admiration, unease, amusement or nostalgia; and selection and arrangement of what comes first, is lingered on, left out or left to the end.',
    'The writer tells the truth but shapes it: voice, purpose and selection all reveal perspective.',
    '## What makes literary non-fiction different');
}

// 03 Reading the text in sections
{
  const px = 60, pw = 330;
  const secs = [[130, 'Section 1'], [255, 'Section 2'], [380, 'Section 3']];
  let b = box(px, 120, pw, 385, C.panel, C.ink, 10);
  secs.forEach(([y, lab], i) => {
    if (i) b += `<line x1="${px}" y1="${y - 8}" x2="${px + pw}" y2="${y - 8}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="7 6"/>`;
    b += t(px + 20, y + 22, lab, { size: 17, weight: 700, fill: C.tealDark });
    for (let k = 0; k < 4; k++) b += `<line x1="${px + 20}" y1="${y + 44 + k * 18}" x2="${px + pw - 20 - (k === 3 ? 90 : 0)}" y2="${y + 44 + k * 18}" stroke="${C.panelEdge}" stroke-width="5" stroke-linecap="round"/>`;
    // underline marks
    b += `<line x1="${px + 60 + i * 30}" y1="${y + 52 + (i % 2) * 18}" x2="${px + 160 + i * 30}" y2="${y + 52 + (i % 2) * 18}" stroke="${C.mustard}" stroke-width="3.5"/>`;
    const qy = y + 18;
    b += arrow(px + pw + 8, y + 55, 478, y + 55, { w: 3 });
    b += box(485, qy, 385, 74, C.tealLight, C.tealDark);
    b += t(505, qy + 31, `Question on section ${i + 1}`, { size: 18, weight: 700 }) + t(505, qy + 57, 're-read only this section', { size: 16, fill: C.muted });
  });
  // whole text bracket
  b += path(`M${px},520 Q${px},535 ${px + 15},535 L${px + pw / 2 - 15},535 Q${px + pw / 2},535 ${px + pw / 2},550 Q${px + pw / 2},535 ${px + pw / 2 + 15},535 L${px + pw - 15},535 Q${px + pw},535 ${px + pw},520`, { stroke: C.olive, w: 3 });
  b += box(30, 562, 840, 76, C.cream, C.olive);
  b += t(55, 594, 'At least one question covers the whole text', { size: 19, weight: 700 });
  b += t(55, 622, 'Track change: note the opening, any turning point and the ending.', { size: 17, fill: C.muted });
  const steps = ['Read the whole text once, quickly', 'Re-read only the section named', 'Underline four or five short pieces of evidence', 'Whole text: track how the attitude moves'];
  steps.forEach((s, i) => {
    const x = 30 + i * 213;
    b += panel(x, 670, 201, 142) + badge(x + 30, 702, 19, String(i + 1), i === 2 ? C.mustard : C.cream);
    b += para(x + 18, 752, s, 19, { size: 17 }, 22);
  });
  add('03-reading-in-sections',
    svg(900, 842, 'Reading the text in sections', b),
    'An unseen text divided into three sections, each linked to its own question that needs only that section re-read, with a bracket under the whole text for the whole-text question. Four steps below: read the whole text quickly, re-read the named section, underline four or five pieces of evidence, and track how the attitude moves for the whole-text question.',
    'Answer each question from its own section; use the whole text only for the whole-text question.',
    '## Reading the text in sections');
}

// 04 Worked example: feature, quotation, effect
{
  const passage = 'My grandmother’s kitchen was not large, but in my memory it is enormous. There was the stove, black and patient, which she fed every morning before light. There was the table, scarred by forty years of knives. And there was my grandmother herself, who never sat down. I was nine. I thought she was simply busy. It took me thirty years to understand that she was holding the whole house together with her hands.';
  let b = box(30, 112, 840, 160, C.cream, C.olive);
  b += para(55, 145, passage, 92, { size: 17, italic: true }, 25);
  b += t(450, 312, 'Question: How does the writer present her grandmother?', { size: 19, weight: 700, anchor: 'middle' });
  const hx = [30, 235, 540];
  b += t(hx[0] + 12, 352, 'Method', { size: 17, weight: 700, fill: C.tealDark }) + t(hx[1] + 12, 352, 'Brief quotation', { size: 17, weight: 700, fill: C.tealDark }) + t(hx[2] + 12, 352, 'Effect on the reader', { size: 17, weight: 700, fill: C.tealDark });
  const rows = [
    ['Contrast', ['“not large” →', '“enormous”'], 'Her presence filled the child’s world.'],
    ['Personification', ['“black and patient”,', '“fed”'], 'Tending the house was a constant, living responsibility.'],
    ['Short sentences', ['“I was nine. I thought', 'she was simply busy.”'], 'Recreate the child’s limited understanding.'],
    ['Metaphor', ['“holding the whole house', 'together with her hands”'], 'Ordinary work becomes heroic; the reader shares the late admiration.'],
  ];
  rows.forEach(([m, q, e], i) => {
    const y = 368 + i * 98;
    b += box(hx[0], y, 185, 84, i === 3 ? C.mustard : C.teal, C.ink) + t(hx[0] + 92, y + 48, m, { size: 18, weight: 700, anchor: 'middle' });
    b += arrow(hx[0] + 187, y + 42, hx[1] - 4, y + 42, { w: 3 });
    b += box(hx[1], y, 285, 84) + tl(hx[1] + 14, y + 36, q, { size: 17, italic: true }, 23);
    b += arrow(hx[1] + 287, y + 42, hx[2] - 4, y + 42, { w: 3 });
    b += box(hx[2], y, 330, 84, C.tealLight, C.tealDark) + para(hx[2] + 14, y + 36, e, 37, { size: 16 }, 22);
  });
  b += box(30, 772, 840, 62, C.tealLight, C.tealDark);
  b += t(450, 810, 'Rows 3 and 4 also track the shift from child to adult perspective (R3).', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('04-worked-example-method-effect',
    svg(900, 860, 'Method, quotation, effect', b),
    'The memoir passage about the grandmother’s kitchen, analysed in four rows: contrast (“not large”, “enormous”), personification (“black and patient”, “fed”), short sentences (“I was nine…”) and metaphor (“holding the whole house together with her hands”), each linked to its effect on the reader.',
    'Each point names a method, quotes briefly and explains the effect, and the last points follow the child-to-adult shift.',
    '## Worked example');
}

// 05 Analysing structure
{
  const rows = [
    ['Opening', 'How does it begin, and why?', ['a scene', 'a reflection', 'a line of dialogue']],
    ['Shifts', 'Where does the focus move?', ['outside → inside', 'past → present', 'wide view → detail']],
    ['Pace', 'Where does it slow down or speed up?', ['slow: lingers on detail', 'fast: long periods in a sentence']],
    ['Ending', 'How does it close?', ['returns to the opening', 'a reflection', 'left unresolved']],
  ];
  let b = arrow(70, 130, 70, 690, { w: 5, color: C.olive, marker: 'ahO' }) + t(52, 125, 'start', { size: 15, fill: C.olive, weight: 700, anchor: 'start' });
  rows.forEach(([h, q, chips], i) => {
    const y = 140 + i * 140;
    b += `<circle cx="70" cy="${y + 60}" r="9" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>`;
    b += panel(105, y, 765, 122) + t(130, y + 40, h, { size: 23, weight: 700 }) + t(260, y + 40, q, { size: 18, fill: C.muted });
    let cx = 130;
    chips.forEach((c) => { const w = c.length * 9.2 + 36; b += pill(cx, y + 62, w, 40, c, { fill: C.tealLight, edge: C.tealDark, size: 17 }); cx += w + 14; });
  });
  b += box(30, 720, 840, 104, C.cream, C.olive);
  b += t(55, 754, 'Always link the choice to its effect:', { size: 18, weight: 700 });
  b += para(55, 784, '“By delaying the name of the village until the final paragraph, the writer keeps the reader as disorientated as she was.”', 90, { size: 17, italic: true }, 24);
  add('05-structure-questions',
    svg(900, 850, 'Four questions about structure', b),
    'The text from start to finish with four structural checkpoints: the opening (a scene, a reflection or dialogue), shifts in focus (outside to inside, past to present, wide view to detail), pace (lingering on detail or summarising long periods), and the ending (returning to the opening, reflecting or left unresolved).',
    'Structure is the order and shape of the text; every structural point needs an effect.',
    '## Analysing structure');
}

// 06 Interpreting perspective
{
  const clues = [
    ['Word choice', '“crumbling” vs “weathered”'],
    ['Praise and mockery', 'what is admired, what is mocked'],
    ['Other people', 'how they are described and speak'],
    ['Reflective voice', 'the older writer comments'],
  ];
  let b = '';
  clues.forEach(([h, s], i) => {
    const x = 30 + (i % 2) * 430, y = 115 + Math.floor(i / 2) * 105;
    b += panel(x, y, 410, 90) + t(x + 22, y + 38, h, { size: 20, weight: 700 }) + t(x + 22, y + 66, s, { size: 17, fill: C.muted });
  });
  b += arrow(235, 320, 400, 350, { w: 3 }) + arrow(665, 320, 500, 350, { w: 3 });
  b += box(200, 352, 500, 92, C.teal, C.ink);
  b += t(450, 388, 'Infer the writer’s perspective', { size: 21, weight: 700, anchor: 'middle' });
  b += t(450, 420, '“This suggests…”  “The writer may be implying…”', { size: 17, anchor: 'middle', italic: true });
  // compare sustained vs not
  const yy = 480;
  b += panel(30, yy, 410, 290, C.panel, C.tealDark) + t(55, yy + 38, 'Sustained (R3)', { size: 21, weight: 700, fill: C.tealDark });
  b += box(140, yy + 62, 190, 56, C.tealLight, C.tealDark) + t(235, yy + 97, 'one idea', { size: 18, weight: 700, anchor: 'middle' });
  [113, 235, 357].forEach((x, i) => {
    b += `<line x1="235" y1="${yy + 120}" x2="${x}" y2="${yy + 172}" stroke="${C.tealDark}" stroke-width="3"/>`;
    b += box(x - 55, yy + 174, 110, 42, C.cream, C.olive) + t(x, yy + 201, `evidence ${i + 1}`, { size: 16, anchor: 'middle' });
  });
  b += t(55, yy + 254, 'Develop one idea across', { size: 17, fill: C.muted }) + t(55, yy + 276, 'several pieces of evidence.', { size: 17, fill: C.muted });
  b += panel(460, yy, 410, 290, C.panel, C.rust) + t(485, yy + 38, 'Not sustained', { size: 21, weight: 700, fill: C.rust });
  [0, 1, 2].forEach((i) => {
    const y = yy + 66 + i * 54;
    b += box(490, y, 140, 42, C.cream, C.olive) + t(560, y + 27, `quotation ${i + 1}`, { size: 16, anchor: 'middle' });
    b += arrow(634, y + 21, 672, y + 21, { w: 2.5, color: C.rust, marker: 'ahR' });
    b += box(678, y, 160, 42, '#ffffff', C.rust) + t(758, y + 27, `new guess ${i + 1}`, { size: 16, anchor: 'middle' });
  });
  b += t(485, yy + 254, 'One guess per quotation,', { size: 17, fill: C.muted }) + t(485, yy + 276, 'never developed.', { size: 17, fill: C.muted });
  add('06-interpreting-perspective',
    svg(900, 800, 'Inferring the writer’s perspective', b),
    'Four clues to perspective (word choice with connotations, what is praised and mocked, how other people are presented, the reflective voice) feed one inference phrased tentatively. Below, a sustained interpretation develops one idea across three pieces of evidence, while a weak answer makes a new guess for each quotation.',
    'Perspective is inferred from evidence and developed as one idea, not one guess per quotation.',
    '## Interpreting perspective (R3)');
}

// 07 Question stems point to skills
{
  const rows = [
    ['“What do you learn…” / “List…”', 'R1', 'Select relevant details accurately; brief answers are fine.'],
    ['“Explain…”', '', 'Give the detail and say what it shows.'],
    ['“How does the writer…”', 'R4', 'Analyse methods and their effects.'],
    ['“What impressions…”', 'R3', 'Interpret attitudes, supported by evidence.'],
    ['“To what extent…” / “Evaluate…”', '', 'Weigh how well an effect is achieved across the text; reach a judgement.'],
  ];
  let b = t(45, 132, 'If the question says…', { size: 18, weight: 700, fill: C.tealDark }) + t(435, 132, '…then do this', { size: 18, weight: 700, fill: C.tealDark });
  rows.forEach(([stem, sk, what], i) => {
    const y = 150 + i * 100;
    b += box(30, y, 345, 82, C.cream, C.olive) + t(50, y + 48, stem, { size: 18, weight: 700 });
    b += arrow(379, y + 41, 417, y + 41, { w: 3.5 });
    b += box(423, y, 447, 82, C.panel, C.panelEdge);
    if (sk) b += badge(460, y + 41, 24, sk, C.teal);
    const n = sk ? 39 : 43;
    b += para(sk ? 497 : 443, y + (wrap(what, n).length > 1 ? 35 : 48), what, n, { size: 17 }, 23);
  });
  b += box(30, 662, 840, 80, C.tealLight, C.tealDark);
  b += t(450, 695, 'Divide your time by the marks shown for each question,', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 722, 'and leave enough for Section B (also 40 marks).', { size: 18, weight: 700, anchor: 'middle' });
  add('07-question-stems',
    svg(900, 770, 'Read the stem, choose the skill', b),
    'Five common question stems matched to what they ask for: “What do you learn” or “List” (R1, select details), “Explain” (detail plus what it shows), “How does the writer” (R4, methods and effects), “What impressions” (R3, attitudes with evidence), and “To what extent” or “Evaluate” (weigh and judge).',
    'The question stem tells you which skill to show; the marks tell you how long to spend.',
    '## Exam technique: typical question stems');
}
