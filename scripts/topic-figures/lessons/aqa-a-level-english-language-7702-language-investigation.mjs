import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-english-language-7702-language-investigation';
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
const rect = (x, y, w, h, fill, stroke = C.ink, sw = 2.5, rx = 12) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;

// 02 Aim to research questions
{
  let b = rect(150, 120, 600, 92, C.tealLight, C.tealDark, 3) +
    t(450, 155, 'AIM', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    t(450, 186, 'To explore how two football commentators construct excitement', { size: 18, weight: 600, anchor: 'middle' });
  const rqs = [
    ['RQ1', 'Grammar', ['tense, ellipsis, sentence', 'length at moments of', 'high action']],
    ['RQ2', 'Prosody', ['pace, pitch and volume', 'accompanying these', 'moments']],
    ['RQ3', 'Context', ['how radio or television', 'shapes the language', 'used']],
  ];
  rqs.forEach(([n, head, lines], i) => {
    const x = 40 + i * 280;
    b += arrow(450, 212, x + 130, 282, { w: 3 });
    b += panel(x, 290, 260, 200) + badge(x + 40, 330, 22, n.slice(2), C.mustard) +
      t(x + 75, 323, n, { size: 17, weight: 700, fill: C.muted }) + t(x + 75, 346, head, { size: 21, weight: 700 }) +
      tl(x + 24, 395, lines, { size: 17 }, 25) +
      t(x + 24, 474, 'points to features + data', { size: 15, fill: C.tealDark, weight: 600 });
  });
  b += panel(40, 520, 820, 120, C.cream, C.mustard) +
    t(64, 556, 'Alternative: a hypothesis', { size: 19, weight: 700 }) +
    t(64, 586, '"Commentator A will use more ellipsis during goals"', { size: 17, italic: true }) +
    t(64, 616, 'Research questions are often more flexible: language data rarely gives yes or no answers.', { size: 16, fill: C.muted });
  add('02-aim-to-research-questions',
    svg(900, 670, 'From aim to research questions', b),
    'The aim of exploring how two football commentators construct excitement splits into three research questions: grammar at moments of high action, prosodic features such as pace, pitch and volume, and the effect of the radio or television context. A note contrasts this with a yes-or-no hypothesis.',
    'An aim says what you want to find out; each research question points to specific features and data.',
    '## Step 1: from aim to research questions');
}

// 03 Comparability
{
  const rows = [
    ['Length', 'similar', 'similar'],
    ['Context', 'similar', 'similar'],
    ['Date', 'similar', 'similar'],
  ];
  let b = panel(40, 120, 820, 470);
  b += t(330, 165, 'Data set A', { size: 21, weight: 700, anchor: 'middle' }) + t(680, 165, 'Data set B', { size: 21, weight: 700, anchor: 'middle' });
  rows.forEach(([lab, a, c], i) => {
    const y = 190 + i * 78;
    b += t(70, y + 40, lab, { size: 19, weight: 700 }) +
      rect(220, y, 220, 58, C.tealLight, C.panelEdge) + t(330, y + 36, a, { size: 18, anchor: 'middle' }) +
      rect(570, y, 220, 58, C.tealLight, C.panelEdge) + t(680, y + 36, c, { size: 18, anchor: 'middle' }) +
      t(505, y + 40, '=', { size: 30, weight: 700, anchor: 'middle', fill: C.tealDark });
  });
  const y = 190 + 3 * 78 + 10;
  b += t(70, y + 30, 'Factor', { size: 19, weight: 700 }) + t(70, y + 52, 'you study', { size: 19, weight: 700 }) +
    rect(220, y, 220, 70, C.cream, C.mustard, 3) + t(330, y + 42, 'A', { size: 22, weight: 700, anchor: 'middle' }) +
    rect(570, y, 220, 70, C.cream, C.mustard, 3) + t(680, y + 42, 'B', { size: 22, weight: 700, anchor: 'middle' }) +
    t(505, y + 44, '≠', { size: 30, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(450, 560, 'Only one thing differs, so a difference in the data can be traced to it.', { size: 18, anchor: 'middle', weight: 600, fill: C.tealDark });
  b += panel(40, 610, 820, 90, C.cream, C.mustard) +
    t(64, 645, 'Broadcast example: same sport, same length of extract.', { size: 18, weight: 600 }) +
    t(64, 675, 'If other variables differ too, you cannot tell which one caused the difference.', { size: 17, fill: C.muted });
  add('03-comparability',
    svg(900, 730, 'Keeping data sets comparable', b),
    'Two data sets are matched on length, context and date, and differ only in the factor being studied. If other variables also differ, a difference in the data cannot be put down to that factor.',
    'Hold everything else similar so any difference comes from the factor you are studying.',
    '## Step 2: designing data collection');
}

// 04 Ethics and the observer's paradox
{
  let b = panel(40, 115, 360, 430) + t(220, 155, 'Ethics', { size: 23, weight: 700, anchor: 'middle' });
  const eth = [['Informed consent', 'before recording anyone'], ['Anonymise', 'initials or labels such', 'as Speaker A'], ['Store data', 'responsibly'], ['Covert recording', 'discuss with your teacher']];
  eth.forEach(([h, ...l], i) => {
    const y = [185, 265, 370, 450][i];
    b += `<circle cx="78" cy="${y + 20}" r="13" fill="${i === 3 ? C.cream : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` +
      t(78, y + 26, i === 3 ? '!' : '✓', { size: 17, weight: 700, anchor: 'middle' }) +
      t(104, y + 26, h, { size: 19, weight: 700 }) + tl(104, y + 52, l, { size: 16, fill: C.muted }, 21);
  });
  // observer's paradox loop
  b += panel(420, 115, 440, 430) + t(640, 155, 'The observer\'s paradox', { size: 23, weight: 700, anchor: 'middle' }) +
    t(640, 180, 'described by William Labov', { size: 16, anchor: 'middle', fill: C.muted });
  b += rect(450, 200, 380, 70, C.tealLight, C.tealDark) + tl(640, 228, ['You want how people talk', 'when they are not observed'], { size: 17, anchor: 'middle' }, 22);
  b += arrow(640, 270, 640, 305, { w: 3 });
  b += rect(450, 310, 380, 46, C.panel, C.ink) + t(640, 340, 'But you have to record them', { size: 17, anchor: 'middle' });
  b += arrow(640, 356, 640, 391, { w: 3 });
  b += rect(450, 396, 380, 70, C.cream, C.mustard) + tl(640, 424, ['Recording may make speech', 'more careful or formal'], { size: 17, anchor: 'middle' }, 22);
  b += path('M450,431 L436,431 L436,235 L446,235', { stroke: C.rust, w: 3, extra: 'marker-end="url(#ahR)" stroke-dasharray="7 6"' });
  b += t(640, 498, 'Acknowledge any effect that remains', { size: 17, anchor: 'middle', weight: 600, fill: C.rust });
  b += t(640, 524, 'in the methodology', { size: 17, anchor: 'middle', weight: 600, fill: C.rust });
  // strategies
  b += panel(40, 565, 820, 125, C.cream, C.mustard) + t(64, 600, 'Strategies to reduce the effect', { size: 20, weight: 700 });
  [['Longer recordings', '(people relax)'], ['Familiar settings', ''], ['An activity that', 'absorbs attention']].forEach(([a, c], i) => {
    const x = 64 + i * 270;
    b += rect(x, 616, 250, 60, C.panel, C.mustard, 2) + t(x + 125, c ? 640 : 652, a, { size: 18, weight: 600, anchor: 'middle' }) + (c ? t(x + 125, 664, c, { size: 16, anchor: 'middle', fill: C.muted }) : '');
  });
  add('04-ethics-observers-paradox',
    svg(900, 720, 'Recording people: ethics and the observer\'s paradox', b),
    'Left: ethical steps of informed consent, anonymising speakers as labels such as Speaker A, storing data responsibly, and discussing any covert recording with a teacher. Right: Labov\'s observer\'s paradox, where recording people to capture unobserved talk may make their speech more careful or formal. Strategies below are longer recordings, familiar settings and an absorbing activity.',
    'Get consent, anonymise, and reduce the observer\'s paradox where you can; acknowledge what remains.',
    '## Step 2: designing data collection');
}

// 05 Descriptive vs evaluative methodology
{
  let b = panel(40, 115, 820, 110) + t(64, 150, 'Descriptive', { size: 20, weight: 700, fill: C.rust }) +
    t(64, 185, '"I recorded my family at dinner for 20 minutes and transcribed it."', { size: 18, italic: true }) +
    t(64, 210, 'Says what was done, but not why, how good it was, or what could be better.', { size: 16, fill: C.muted });
  b += panel(40, 245, 820, 400) + t(64, 282, 'Evaluative', { size: 20, weight: 700, fill: C.tealDark });
  const parts = [
    ['WHY', C.teal, ['"I recorded a 20-minute family meal because a familiar, routine setting', 'was likely to reduce the observer\'s paradox; the first five minutes were', 'excluded from analysis as participants were visibly aware of the recorder."']],
    ['WEAKNESS', C.cream, ['"A single meal limits how far the findings can be generalised,"']],
    ['IMPROVE', C.tealLight, ['"and a second recording on a different day would have strengthened', 'reliability."']],
  ];
  let y = 302;
  parts.forEach(([lab, fill, lines]) => {
    const h = 24 + lines.length * 25;
    b += rect(64, y, 130, h, fill, C.ink, 2) + t(129, y + h / 2 + 6, lab, { size: 16, weight: 700, anchor: 'middle' }) +
      tl(210, y + 30, lines, { size: 17, italic: true }, 25);
    y += h + 14;
  });
  b += t(64, y + 22, 'Also state the approach to analysis: which levels and frameworks, and', { size: 17, fill: C.muted }) +
    t(64, y + 46, 'whether it is quantitative, qualitative or both.', { size: 17, fill: C.muted });
  add('05-descriptive-vs-evaluative',
    svg(900, 670, 'Methodology: describe or evaluate?', b),
    'The lesson\'s descriptive sentence about recording a family dinner is set above its evaluative version, which is split into three labelled parts: why the setting was chosen, the weakness of a single meal, and the improvement of a second recording.',
    'An evaluative methodology explains why, names the weakness and suggests an improvement.',
    '## Step 3: writing an evaluative methodology');
}

// 06 Organising the analysis
{
  let b = panel(40, 115, 395, 215) + t(237, 152, 'Text by text', { size: 21, weight: 700, anchor: 'middle', fill: C.rust });
  ['Text 1: everything', 'Text 2: everything', 'Text 3: everything'].forEach((s, i) => {
    b += rect(80, 172 + i * 46, 315, 36, C.panel, C.panelEdge, 2) + t(237, 196 + i * 46, s, { size: 16, anchor: 'middle', fill: C.muted });
  });
  b += t(237, 318, 'turns into description', { size: 16, anchor: 'middle', weight: 600, fill: C.rust });
  b += panel(465, 115, 395, 215) + t(662, 152, 'By research question or feature', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  ['RQ1: all the data compared', 'RQ2: all the data compared', 'RQ3: all the data compared'].forEach((s, i) => {
    b += rect(505, 172 + i * 46, 315, 36, C.tealLight, C.tealDark, 2) + t(662, 196 + i * 46, s, { size: 16, anchor: 'middle' });
  });
  b += t(662, 318, 'keeps the analysis on the aim', { size: 16, anchor: 'middle', weight: 600, fill: C.tealDark });
  b += t(450, 375, 'Inside each section', { size: 22, weight: 700, anchor: 'middle' });
  const steps = [
    ['Evidence', 'examples, counts, percentages, referenced to the appendices'],
    ['Interpret', 'concepts and terminology from the relevant level'],
    ['Test theory', 'bring in research critically; test it against your data'],
    ['Context', 'audience, purpose, genre, mode, relationships, setting'],
    ['Complexities', 'note counter-examples'],
  ];
  steps.forEach(([h, d], i) => {
    const y = 398 + i * 66;
    b += panel(40, y, 820, 56) + badge(78, y + 28, 18, String(i + 1), i === 2 ? C.mustard : C.cream) +
      t(112, y + 35, h, { size: 19, weight: 700 }) + t(270, y + 35, d, { size: 17, fill: C.muted });
  });
  add('06-organising-analysis',
    svg(900, 740, 'Organising the analysis', b),
    'Analysis organised text by text slides into description, while analysis organised by research question compares all the data at once. Each section then runs through five steps: evidence, interpretation with terminology, testing theory against the data, contextual influences, and counter-examples.',
    'Organise by research question or feature, then give each section the same five moves.',
    '## Step 4: organising the analysis');
}

// 07 Cautious conclusion
{
  let b = '';
  const steps = ['Answer each research question in turn', 'State what the data suggests', 'Qualify by sample size and context', 'Identify what further research could test'];
  steps.forEach((s, i) => {
    const y = 120 + i * 70;
    b += panel(40, y, 460, 56) + badge(78, y + 28, 18, String(i + 1), C.cream) + t(110, y + 35, s, { size: 18, weight: 600 });
    if (i < 3) b += arrow(270, y + 56, 270, y + 68, { w: 3 });
  });
  b += panel(530, 120, 330, 266, C.tealLight, C.tealDark) + t(695, 160, 'Signs of caution', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  ['"suggests"', '"in this data"', '"may"'].forEach((w, i) => {
    b += rect(590, 182 + i * 62, 210, 46, C.panel, C.tealDark, 2) + t(695, 212 + i * 62, w, { size: 19, weight: 600, anchor: 'middle', italic: true });
  });
  b += panel(40, 410, 820, 120, C.cream, C.mustard) +
    t(64, 448, 'Avoid', { size: 18, weight: 700, fill: C.rust }) +
    t(140, 448, '"all men interrupt"', { size: 19, italic: true }) +
    t(64, 482, 'A claim from a tiny sample, stated as fact. Qualify every claim by how', { size: 17, fill: C.muted }) +
    t(64, 508, 'much data you collected and the context it came from.', { size: 17, fill: C.muted });
  add('07-cautious-conclusion',
    svg(900, 560, 'Writing a cautious conclusion', b),
    'Four steps for the conclusion: answer each research question, state what the data suggests, qualify by sample size and context, and identify further research. Cautious wording such as "suggests", "in this data" and "may" is contrasted with the over-generalisation "all men interrupt".',
    'Answer each question, then qualify the claim by sample size and context.',
    '## Step 5: a cautious conclusion');
}

// 08 How it is assessed
{
  let b = '';
  const aos = [
    ['AO1', 'Methods of language analysis', 'terminology and coherent expression'],
    ['AO2', 'Concepts and issues', 'critical understanding'],
    ['AO3', 'Context and meaning', 'how contextual factors and language features construct meaning'],
  ];
  aos.forEach(([a, h, d], i) => {
    const y = 120 + i * 92;
    b += panel(40, y, 820, 78, i === 2 ? C.cream : C.panel, i === 2 ? C.mustard : C.panelEdge) +
      rect(60, y + 17, 90, 44, i === 2 ? C.mustard : C.teal, C.ink, 2) + t(105, y + 46, a, { size: 20, weight: 700, anchor: 'middle' }) +
      t(175, y + 35, h, { size: 20, weight: 700 }) + t(175, y + 62, d, { size: 17, fill: C.muted });
  });
  // analysis strip with context thread
  const y0 = 420;
  b += t(450, y0, 'AO3 runs through the whole analysis, not one paragraph', { size: 19, weight: 700, anchor: 'middle' });
  ['Section 1', 'Section 2', 'Section 3', 'Section 4'].forEach((s, i) => {
    b += rect(60 + i * 200, y0 + 22, 180, 90, C.panel, C.panelEdge) + t(150 + i * 200, y0 + 52, s, { size: 17, anchor: 'middle', fill: C.muted });
  });
  b += `<line x1="50" y1="${y0 + 82}" x2="850" y2="${y0 + 82}" stroke="${C.mustard}" stroke-width="10" stroke-linecap="round"/>` +
    t(450, y0 + 146, 'context in every section', { size: 17, anchor: 'middle', weight: 600, fill: C.olive });
  add('08-assessment-objectives',
    svg(900, 600, 'How the investigation is assessed', b),
    'AO1 rewards methods of language analysis with terminology and coherent expression, AO2 critical understanding of concepts and issues, and AO3 analysis of how contextual factors and language features construct meaning. A thread of context runs through every section of the analysis.',
    'Contextual analysis (AO3) belongs in every section, not in a single paragraph.',
    '## How it is assessed');
}
