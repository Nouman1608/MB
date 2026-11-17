import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-english-language-7702-original-writing';
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

// 02 Three powers
{
  const areas = [
    ['Persuasion', 'Change what a reader or listener thinks or does', ['address and pronouns', 'rhetorical patterning', 'modality', 'evaluative lexis', 'evidence and anecdote', 'structure building to a call to action'], C.rust, C.cream],
    ['Storytelling', 'Engage a reader in characters, events and experience', ['narrative voice and viewpoint', 'tense, dialogue', 'pace through sentence structure', 'sensory lexis', 'structural shape: openings, turning points, endings'], C.tealDark, C.tealLight],
    ['Information', 'Inform an audience clearly and engagingly', ['organisation and signposting', 'register suited to expertise', 'precise lexis', 'explanation through example', 'headings and layout'], C.olive, C.sand],
  ];
  let b = '';
  areas.forEach(([h, aim, items, col, fill], i) => {
    const x = 40 + i * 280;
    b += panel(x, 115, 260, 480) + rect(x + 12, 127, 236, 126, fill, col, 2.5, 10) +
      t(x + 130, 158, 'The Power of', { size: 15, anchor: 'middle', fill: C.muted }) +
      t(x + 130, 184, h, { size: 21, weight: 700, anchor: 'middle', fill: col }) +
      tl(x + 130, 209, wrap(aim, 26), { size: 15, anchor: 'middle' }, 19);
    b += t(x + 22, 284, 'Choices that matter', { size: 15, weight: 700, fill: C.muted });
    let y = 312;
    items.forEach((it) => {
      const l = wrap(it, 23);
      b += `<circle cx="${x + 28}" cy="${y - 6}" r="5" fill="${col}"/>` + tl(x + 42, y, l, { size: 17 }, 22);
      y += l.length * 22 + 12;
    });
  });
  b += panel(40, 615, 820, 100, C.cream, C.mustard) +
    t(64, 650, 'Define audience and purpose precisely: every later choice depends on them.', { size: 18, weight: 700 }) +
    t(64, 682, '"readers of a regional magazine who walk but have never visited the coast path"', { size: 17, italic: true, fill: C.muted });
  add('02-three-powers',
    svg(900, 740, 'What each "power" asks of a writer', b),
    'Three columns for the Power of Persuasion, Storytelling and Information, each with what the writing must do and the language choices that typically matter, from modality and calls to action, to narrative voice and pace, to signposting and layout. A note stresses defining audience and purpose precisely.',
    'Each area sets a different job, and audience and purpose decide the choices.',
    '## What each "power" asks of a writer');
}

// 03 Choosing a style model
{
  const crit = [['Published text', ''], ['Same form and area', 'as your planned piece'], ['Short enough', 'to analyse closely'], ['Rich enough', 'to teach you techniques'], ['Best match', 'for your audience and purpose']];
  let b = panel(40, 115, 470, 440) + t(275, 152, 'A good style model is', { size: 21, weight: 700, anchor: 'middle' });
  crit.forEach(([h, d], i) => {
    const y = 175 + i * 74;
    b += rect(64, y, 422, 60, C.tealLight, C.panelEdge, 2, 10) +
      `<circle cx="96" cy="${y + 30}" r="14" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + t(96, y + 36, '✓', { size: 17, weight: 700, anchor: 'middle' }) +
      t(124, y + (d ? 26 : 37), h, { size: 18, weight: 700 }) + (d ? t(124, y + 48, d, { size: 16, fill: C.muted }) : '');
  });
  b += panel(530, 115, 330, 440) + t(695, 152, 'Borrow', { size: 21, weight: 700, anchor: 'middle' });
  b += rect(555, 180, 280, 140, C.teal, C.tealDark, 3) + t(695, 240, 'technique', { size: 24, weight: 700, anchor: 'middle' }) + t(695, 275, '✓ yes', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += rect(555, 345, 280, 140, C.panel, C.rust, 3) + t(695, 395, 'content or phrasing', { size: 20, weight: 700, anchor: 'middle', fill: C.muted }) + t(695, 440, '✗ no', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(695, 520, 'Read several first, then choose one.', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-choosing-style-model',
    svg(900, 580, 'Choosing a style model', b),
    'A checklist for a style model: a published text in the same form and area as the planned piece, short enough to analyse closely, rich enough to teach techniques, and the best match for audience and purpose. Beside it: borrow technique, not content or phrasing.',
    'Pick a style model to learn technique from, not material to borrow.',
    '## Choosing a style model');
}

// 04 Annotating at the levels
{
  const rows = [
    ['Graphology', 'How do headings, paragraph lengths, white space and images guide the reader?'],
    ['Phonology', 'Does it use sound patterning, rhythm or patterns written to be read aloud?'],
    ['Lexis and semantics', 'Which semantic fields, register and evaluative words create its tone?'],
    ['Grammar', 'What sentence types and lengths, tenses, voices and clause patterns recur, and where?'],
    ['Pragmatics', 'What does it assume the reader knows? How does it handle politeness and implication?'],
    ['Discourse', 'How is it structured: hook, development, turning point, close? How is cohesion created?'],
  ];
  let b = panel(40, 112, 400, 82, C.panel, C.rust) + t(64, 145, 'Highlighting', { size: 18, weight: 700, fill: C.rust }) +
    t(64, 175, 'only labels: "metaphor", "list"', { size: 17, fill: C.muted });
  b += panel(460, 112, 400, 82, C.tealLight, C.tealDark) + t(484, 145, 'Annotation', { size: 18, weight: 700, fill: C.tealDark }) +
    t(484, 175, 'what the feature is + what it does', { size: 17 });
  rows.forEach(([l, q], i) => {
    const y = 212 + i * 72;
    const ql = wrap(q, 58);
    b += panel(40, y, 820, 62) + rect(52, y + 9, 200, 44, i % 2 ? C.tealLight : C.teal, C.ink, 2, 9) +
      t(152, y + 37, l, { size: 17, weight: 700, anchor: 'middle' }) +
      tl(270, y + 37 - (ql.length - 1) * 11, ql, { size: 16 }, 22);
  });
  add('04-annotating-style-model',
    svg(900, 660, 'Annotating the style model', b),
    'Annotation that names a feature and what it does is contrasted with highlighting that only labels. Six language levels follow, each with the question to ask of the style model, from how graphology guides the reader to how discourse structure and cohesion work.',
    'Ask each level\'s question of the style model, and note what each feature does.',
    '## Annotating the style model at the language levels');
}

// 05 From analysis to writing
{
  const rows = [
    ['Opens with a one-line anecdote in present tense', 'Open my speech with a 2-sentence anecdote about my grandfather, in present tense'],
    ['Triadic structures at key points', 'Use three triples, saved for the three main turns in the argument'],
    ['Shifts from "I" to "we" in the final third', 'Move from personal to collective address before the call to action'],
  ];
  let b = t(220, 132, 'Style model feature', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(655, 132, 'Decision for my piece', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([a, d], i) => {
    const y = 148 + i * 110;
    b += rect(40, y, 360, 92, C.panel, C.panelEdge) + tl(60, y + 46 - (wrap(a, 32).length - 1) * 11.5 + 6, wrap(a, 32), { size: 17 }, 23);
    b += arrow(404, y + 46, 446, y + 46, { w: 4 });
    b += rect(450, y, 410, 92, C.tealLight, C.tealDark) + tl(470, y + 46 - (wrap(d, 38).length - 1) * 11.5 + 6, wrap(d, 38), { size: 17 }, 23);
  });
  b += arrow(655, 478, 655, 510, { w: 4, color: C.olive, marker: 'ahO' });
  b += panel(40, 515, 820, 110, C.cream, C.mustard) +
    t(64, 552, 'Then adapt', { size: 20, weight: 700, fill: C.olive }) +
    t(64, 582, 'Your audience and purpose are not identical to the style model\'s, so some features', { size: 17 }) +
    t(64, 607, 'must change. The commentary rewards explaining these adaptations.', { size: 17 });
  add('05-analysis-to-writing',
    svg(900, 650, 'From style model to craft decisions', b),
    'Three style-model features become decisions for a speech: a present-tense one-line anecdote becomes a 2-sentence anecdote about a grandfather, triadic structures are saved for the three main turns, and a shift from "I" to "we" moves to collective address before the call to action. A final step says to adapt features to a different audience and purpose.',
    'Turn each annotation into a decision, then adapt it to your own audience and purpose.',
    '## From analysis to writing');
}

// 06 Redrafting notes
{
  const rows = [
    ['Cut three adjectives from the opening noun phrase', 'to quicken pace'],
    ['Moved the statistic from paragraph four to the opening', 'to establish credibility'],
    ['Changed passive to active', 'to make the council responsible'],
  ];
  let b = t(270, 132, 'What changed', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(705, 132, 'Why, in linguistic terms', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([c, w], i) => {
    const y = 148 + i * 92;
    b += rect(40, y, 470, 76, C.panel, C.panelEdge) + badge(76, y + 38, 18, String(i + 1), C.cream) +
      tl(108, y + 38 - (wrap(c, 36).length - 1) * 11.5 + 6, wrap(c, 36), { size: 17 }, 23);
    b += arrow(514, y + 38, 556, y + 38, { w: 3.5 });
    b += rect(560, y, 300, 76, C.tealLight, C.tealDark) + t(710, y + 44, w, { size: 17, weight: 600, anchor: 'middle' });
  });
  b += panel(40, 440, 820, 90, C.cream, C.mustard) +
    t(450, 476, 'Keep earlier drafts and note why you changed things.', { size: 18, weight: 700, anchor: 'middle' }) +
    t(450, 506, 'Those notes become commentary material.', { size: 17, anchor: 'middle', fill: C.muted });
  add('06-redrafting-notes',
    svg(900, 555, 'Recording redrafting decisions', b),
    'Three redrafting notes from the lesson, each pairing a change with a linguistic reason: cutting adjectives from the opening noun phrase to quicken pace, moving a statistic to the opening to establish credibility, and changing passive to active to make the council responsible.',
    'Note each change and its linguistic reason; the notes feed the commentary.',
    '## Drafting and redrafting');
}

// 07 Commentary structure
{
  const steps = [
    ['Context', 'form, audience, purpose and area, briefly'],
    ['The style model', 'key techniques identified, with terminology'],
    ['Your choices', 'adopted, adapted and why, linked to audience and purpose'],
    ['The writing process', 'significant redrafting decisions and their reasons'],
    ['Evaluation', 'how well the piece achieves its purpose, with honest limitations'],
  ];
  let b = '';
  steps.forEach(([h, d], i) => {
    const y = 120 + i * 82;
    b += panel(110, y, 750, 68, i === 4 ? C.cream : C.panel, i === 4 ? C.mustard : C.panelEdge) +
      badge(150, y + 34, 20, String(i + 1), i === 4 ? C.mustard : C.cream) +
      t(186, y + 30, h, { size: 19, weight: 700 }) + t(186, y + 55, d, { size: 16, fill: C.muted });
  });
  const yb = 120 + 5 * 82 - 14;
  b += `<line x1="84" y1="125" x2="84" y2="${yb}" stroke="${C.tealDark}" stroke-width="8" stroke-linecap="round"/>`;
  b += `<text x="0" y="0" font-size="17" font-weight="700" fill="${C.tealDark}" text-anchor="middle" transform="translate(56 ${(125 + yb) / 2}) rotate(-90)">connections between the two texts throughout</text>`;
  b += panel(40, yb + 30, 820, 92, C.tealLight, C.tealDark) +
    t(64, yb + 64, 'Analytical and evaluative, not a narrative', { size: 18, weight: 700 }) +
    t(64, yb + 94, 'Avoid "First I planned..." and describing the two texts separately.', { size: 17, fill: C.muted });
  add('07-commentary-structure',
    svg(900, yb + 145, 'A reliable commentary structure', b),
    'Five numbered stages of the commentary: context, the style model, your choices, the writing process, and evaluation. A vertical thread beside them shows connections between the style model and the piece running throughout, and a note warns against narrating the process.',
    'Five stages, with the style model and your piece connected all the way through.',
    '## Writing the commentary');
}

// 08 How the two parts are assessed
{
  let b = '';
  const col = (x, title, words, fill, edge, lines) =>
    panel(x, 115, 400, 330, fill, edge) + t(x + 200, 155, title, { size: 22, weight: 700, anchor: 'middle' }) +
    t(x + 200, 185, words, { size: 17, anchor: 'middle', fill: C.muted }) + lines;
  b += col(40, 'Original writing', '750 words, 25 marks', C.panel, C.panelEdge,
    rect(160, 205, 160, 50, C.teal, C.ink, 2.5, 10) + t(240, 238, 'AO5', { size: 22, weight: 700, anchor: 'middle' }) +
    t(240, 288, 'expertise and creativity in', { size: 17, anchor: 'middle' }) + t(240, 311, 'using English', { size: 17, anchor: 'middle' }) +
    tl(64, 352, ['• handling the form', '• controlling register', '• positioning the audience', '• accuracy and cohesion'], { size: 16, fill: C.muted }, 22).replace(/text-anchor="start"/g, 'text-anchor="start"'));
  b += col(460, 'Commentary', '750 words, 25 marks', C.panel, C.panelEdge,
    t(660, 238, 'draws on all the AOs, including', { size: 17, anchor: 'middle' }) +
    rect(580, 258, 160, 50, C.mustard, C.ink, 2.5, 10) + t(660, 291, 'AO4', { size: 22, weight: 700, anchor: 'middle' }) +
    t(660, 340, 'connections between your', { size: 17, anchor: 'middle' }) + t(660, 363, 'writing and the style model', { size: 17, anchor: 'middle' }));
  b += panel(40, 465, 820, 90, C.cream, C.mustard) +
    t(450, 501, 'A commentary that discusses only one of the two texts limits its own marks.', { size: 18, weight: 700, anchor: 'middle' }) +
    t(450, 531, 'Write it with both texts in view throughout.', { size: 17, anchor: 'middle', fill: C.muted });
  add('08-assessment',
    svg(900, 580, 'How the two parts are assessed', b),
    'The original writing, 750 words and 25 marks, is assessed on AO5: handling the form, controlling register, positioning the audience and writing accurately and cohesively. The commentary, also 750 words and 25 marks, draws on all the assessment objectives, including AO4 connections between the writing and the style model.',
    'The writing is judged on AO5; the commentary needs AO4 connections to the style model.',
    '## How the two parts are assessed');
}
