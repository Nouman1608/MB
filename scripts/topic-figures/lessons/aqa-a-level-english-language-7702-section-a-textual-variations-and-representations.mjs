import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-english-language-7702-section-a-textual-variations-and-representations';
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

// 01 Section A structure and the four explorations
{
  let b = rect(110, 115, 260, 80, C.tealLight, C.tealDark, 3) + t(240, 150, 'Text A', { size: 21, weight: 700, anchor: 'middle' }) + t(240, 177, 'contemporary', { size: 17, anchor: 'middle', fill: C.muted });
  b += rect(530, 115, 260, 80, C.cream, C.mustard, 3) + t(660, 150, 'Text B', { size: 21, weight: 700, anchor: 'middle' }) + t(660, 177, 'older', { size: 17, anchor: 'middle', fill: C.muted });
  b += `<line x1="370" y1="155" x2="530" y2="155" stroke="${C.ink}" stroke-width="3" stroke-dasharray="7 6"/>` + t(450, 145, 'linked by', { size: 15, anchor: 'middle', fill: C.muted }) + t(450, 178, 'topic or theme', { size: 15, anchor: 'middle', fill: C.muted });
  const qs = [[240, 'Analyse Text A', '25 marks', C.teal], [660, 'Analyse Text B', '25 marks', C.sand], [450, 'Compare them', '20 marks', C.panel]];
  b += arrow(240, 195, 240, 228, { w: 3 }) + arrow(660, 195, 660, 228, { w: 3 });
  b += rect(115, 232, 250, 70, qs[0][3]) + t(240, 262, qs[0][1], { size: 18, weight: 700, anchor: 'middle' }) + t(240, 288, qs[0][2], { size: 17, anchor: 'middle' });
  b += rect(535, 232, 250, 70, qs[1][3]) + t(660, 262, qs[1][1], { size: 18, weight: 700, anchor: 'middle' }) + t(660, 288, qs[1][2], { size: 17, anchor: 'middle' });
  b += path('M240,302 L240,330 L660,330 L660,302', { w: 3 }) + arrow(450, 330, 450, 352, { w: 3 });
  b += rect(325, 356, 250, 70, qs[2][3]) + t(450, 386, qs[2][1], { size: 18, weight: 700, anchor: 'middle' }) + t(450, 412, qs[2][2], { size: 17, anchor: 'middle' });
  b += t(450, 475, 'In each text, explore how language is', { size: 20, weight: 700, anchor: 'middle' });
  const four = [['shaped by', 'audience, purpose, genre and mode'], ['shaped by', 'context'], ['used to construct', 'meanings and representations'], ['used to enact', 'relationships']];
  four.forEach(([a, c], i) => {
    const x = 40 + i * 207;
    b += panel(x, 495, 193, 100, i < 2 ? C.panel : C.tealLight, i < 2 ? C.panelEdge : C.tealDark) +
      t(x + 96, 528, a, { size: 16, anchor: 'middle', fill: C.muted }) + tl(x + 96, 556, wrap(c, 19), { size: 17, weight: 700, anchor: 'middle' }, 22);
  });
  add('01-section-a-structure',
    svg(900, 620, 'Paper 1 Section A: two texts, three questions', b),
    'A contemporary text and an older text linked by topic or theme each have an analysis question worth 25 marks, and a comparison question is worth 20 marks. Below, four boxes show how language is explored: shaped by audience, purpose, genre and mode; shaped by context; used to construct meanings and representations; and used to enact relationships.',
    'Analyse each text for 25 marks, then compare them for 20.',
    '## What the specification asks you to study');
}

// 02 Context explains variation
{
  const rows = [
    ['Audience', 'Who is addressed, and what are they assumed to know?', 'density of technical lexis; amount of explanation'],
    ['Purpose', 'What is the text trying to do?', 'sentence functions; modality; evaluative lexis'],
    ['Genre', 'Which conventions does it follow or break?', 'headlines, sign-offs, recipe layout, star ratings'],
    ['Mode', 'Between spoken and written? Multimodal?', 'planned or spontaneous structure; images, layout'],
    ['Time', 'When was it produced; what was normal then?', 'formality, address forms, sentence length, spelling'],
    ['Place', 'Global, national or regional in reach?', 'dialect lexis; shared local reference; inclusive "we"'],
  ];
  let b = t(165, 130, 'Contextual factor', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(420, 130, 'Question to ask', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(718, 130, 'Typical language result', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([f, q, r], i) => {
    const y = 145 + i * 82;
    b += rect(40, y, 250, 70, i >= 4 ? C.cream : C.teal, C.ink, 2.5, 10) + t(165, y + 42, f, { size: 20, weight: 700, anchor: 'middle' });
    b += panel(300, y, 260, 70) + tl(316, y + 35 - (wrap(q, 26).length - 1) * 10.5 + 6, wrap(q, 26), { size: 16 }, 21);
    b += arrow(562, y + 35, 590, y + 35, { w: 3 });
    b += rect(594, y, 266, 70, C.tealLight, C.tealDark, 2.5, 10) + tl(610, y + 35 - (wrap(r, 27).length - 1) * 10.5 + 6, wrap(r, 27), { size: 16 }, 21);
  });
  b += panel(40, 645, 820, 90, C.cream, C.mustard) +
    t(64, 680, 'The older text\'s conventions are not mistakes.', { size: 18, weight: 700 }) +
    t(64, 710, 'Use the date as context for meaning, not as a cue to list "old-fashioned words".', { size: 17, fill: C.muted });
  add('02-context-explains-variation',
    svg(900, 760, 'Every feature has a contextual cause', b),
    'Six contextual factors, audience, purpose, genre, mode, time and place, each with the question to ask and the typical language result, such as the density of technical lexis for audience or address forms and spelling for time. A note says the older text\'s conventions are evidence of context, not mistakes.',
    'Textual variation is explained by context, never just noticed.',
    '## Key idea 1: variation is always explained, never just noticed');
}

// 03 Naming and modification
{
  let b = panel(40, 115, 820, 230) + t(64, 152, 'Naming and reference: the same people', { size: 20, weight: 700 });
  b += `<line x1="90" y1="285" x2="810" y2="285" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)" marker-start="url(#ah)"/>`;
  b += t(90, 320, 'more distance', { size: 16, fill: C.muted }) + t(810, 320, 'more warmth', { size: 16, fill: C.muted, anchor: 'end' });
  [['"Pensioners"', 170, C.panel], ['"older residents"', 450, C.tealLight], ['"our grandparents"', 730, C.cream]].forEach(([s, x, f]) => {
    b += rect(x - 120, 185, 240, 60, f, C.ink, 2.5, 10) + t(x, 222, s, { size: 20, weight: 600, anchor: 'middle', italic: true }) +
      `<circle cx="${x}" cy="285" r="8" fill="${C.ink}"/>` + `<line x1="${x}" y1="245" x2="${x}" y2="277" stroke="${C.ink}" stroke-width="2"/>`;
  });
  b += panel(40, 365, 820, 220) + t(64, 402, 'Pre-modification evaluates before we meet the thing itself', { size: 20, weight: 700 });
  const parts = [['a', C.panel, 'determiner'], ['sleepy,', C.cream, 'pre-modifier'], ['forgotten', C.cream, 'pre-modifier'], ['harbour', C.teal, 'head noun']];
  let x = 150;
  parts.forEach(([w, f, lab]) => {
    const wd = Math.max(110, w.length * 24 * 0.56 + 36);
    b += rect(x, 430, wd, 60, f, C.ink, 2.5, 10) + t(x + wd / 2, 469, w, { size: 24, weight: 600, anchor: 'middle', italic: true }) +
      t(x + wd / 2, 520, lab, { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
    x += wd + 18;
  });
  b += t(450, 560, 'The reader meets the evaluation first, the harbour last.', { size: 17, anchor: 'middle', fill: C.muted });
  add('03-naming-and-modification',
    svg(900, 610, 'Representation through naming and modification', b),
    '"Pensioners", "older residents" and "our grandparents" are placed along a scale from more distance to more warmth, though all refer to the same people. Below, the noun phrase "a sleepy, forgotten harbour" is split into determiner, two evaluative pre-modifiers and the head noun.',
    'Every name and modifier is a choice that builds a representation.',
    '## Key idea 2: representation is built from choices');
}

// 04 Who acts on whom
{
  let b = panel(40, 115, 400, 250) + t(240, 152, 'Group as agent', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += rect(70, 200, 120, 70, C.teal, C.ink, 2.5, 10) + t(130, 242, 'Group', { size: 18, weight: 700, anchor: 'middle' }) +
    arrow(192, 235, 300, 235, { w: 6, color: C.tealDark, marker: 'ahT' }) + t(246, 222, 'acts', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 }) +
    rect(305, 200, 110, 70, C.panel, C.panelEdge, 2.5, 10) + t(360, 242, 'goal', { size: 17, anchor: 'middle', fill: C.muted });
  b += tl(240, 320, ['agent of material verbs:', 'seems powerful or responsible'], { size: 17, anchor: 'middle' }, 24);
  b += panel(460, 115, 400, 250) + t(660, 152, 'Group on the receiving end', { size: 21, weight: 700, anchor: 'middle', fill: C.rust });
  b += rect(490, 200, 120, 70, C.panel, C.panelEdge, 2.5, 10) + t(550, 242, 'others', { size: 17, anchor: 'middle', fill: C.muted }) +
    arrow(612, 235, 720, 235, { w: 6, color: C.rust, marker: 'ahR' }) + t(666, 222, 'act on', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 }) +
    rect(725, 200, 110, 70, C.cream, C.ink, 2.5, 10) + t(780, 242, 'Group', { size: 18, weight: 700, anchor: 'middle' });
  b += tl(660, 320, ['always acted upon:', 'seems passive or vulnerable'], { size: 17, anchor: 'middle' }, 24);
  b += t(450, 410, 'Removing the person responsible', { size: 21, weight: 700, anchor: 'middle' });
  const ex = [['Agentless passive', '"Mistakes were made"'], ['Nominalisation', '"the closure"']];
  ex.forEach(([h, e], i) => {
    const x = 40 + i * 420;
    b += panel(x, 430, 400, 120) + t(x + 24, 465, h, { size: 19, weight: 700 }) +
      t(x + 24, 505, e, { size: 21, italic: true }) +
      rect(x + 270, 480, 106, 40, C.panel, C.rust, 2, 8) + t(x + 323, 506, 'who?', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  });
  b += panel(40, 570, 820, 90, C.cream, C.mustard) + t(64, 605, 'Presupposition', { size: 19, weight: 700 }) +
    t(64, 636, '"When will the council stop wasting money?" assumes that money is being wasted.', { size: 17, fill: C.muted });
  add('04-transitivity-and-agency',
    svg(900, 685, 'Who acts on whom?', b),
    'A group placed as the agent of material verbs seems powerful or responsible, while a group always acted upon seems passive or vulnerable. Below, an agentless passive ("Mistakes were made") and a nominalisation ("the closure") remove the person responsible, and a presupposition is shown in a question about the council wasting money.',
    'Transitivity, passives and nominalisation decide who looks responsible.',
    '## Key idea 2: representation is built from choices');
}

// 05 Identity, positioning, relationships
{
  let b = panel(40, 115, 260, 330) + t(170, 152, 'Producer', { size: 21, weight: 700, anchor: 'middle' }) +
    t(170, 176, 'constructs an identity', { size: 15, anchor: 'middle', fill: C.muted });
  ['an expert', 'a friend', 'a guardian', 'an ordinary person "like you"'].forEach((s, i) => {
    b += rect(60, 195 + i * 56, 220, 44, C.tealLight, C.panelEdge, 2, 9) + t(170, 223 + i * 56, s, { size: s.length > 14 ? 15 : 17, anchor: 'middle' });
  });
  b += arrow(302, 280, 350, 280, { w: 4 });
  b += rect(355, 200, 190, 160, C.panel, C.ink, 3) + t(450, 270, 'Text', { size: 24, weight: 700, anchor: 'middle' }) + t(450, 298, 'addresses and', { size: 15, anchor: 'middle', fill: C.muted }) + t(450, 317, 'positions', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(547, 280, 595, 280, { w: 4 });
  b += panel(600, 115, 260, 330) + t(730, 152, 'Reader', { size: 21, weight: 700, anchor: 'middle' }) +
    t(730, 176, 'given a position', { size: 15, anchor: 'middle', fill: C.muted }) +
    rect(620, 195, 220, 80, C.cream, C.mustard, 2.5, 9) + t(730, 226, 'Ideal reader', { size: 18, weight: 700, anchor: 'middle' }) + t(730, 252, 'shares the values', { size: 15, anchor: 'middle' }) +
    tl(632, 305, ['inclusive "we"', 'presupposition', 'rhetorical questions'], { size: 16 }, 22) +
    t(632, 385, 'make agreement feel', { size: 15, fill: C.muted }) + t(632, 405, 'natural', { size: 15, fill: C.muted });
  b += panel(40, 465, 400, 210, C.tealLight, C.tealDark) + t(64, 500, 'Synthetic personalisation', { size: 19, weight: 700 }) +
    t(64, 524, 'Norman Fairclough', { size: 15, fill: C.muted }) +
    tl(64, 556, ['A mass-audience text addresses each', 'reader as if individually, through', '"you", imperatives and a chatty', 'register.'], { size: 16 }, 22);
  b += panel(460, 465, 400, 210) + t(484, 500, 'Relationships within a text', { size: 19, weight: 700 }) +
    t(484, 524, 'spoken or scripted, several participants', { size: 15, fill: C.muted }) +
    tl(484, 556, ['turn-taking, interruption, topic control,', 'terms of address and politeness show', 'who holds power. Brown and Levinson:', 'positive and negative face.'], { size: 16 }, 22);
  add('05-identity-positioning',
    svg(900, 700, 'Identity, positioning and relationships', b),
    'A text constructs an identity for its producer, such as an expert, friend, guardian or ordinary person, and a position for its reader, usually an ideal reader who shares its values. Below are Fairclough\'s synthetic personalisation and the features that show power in relationships within a text, including Brown and Levinson\'s positive and negative face.',
    'A text builds an identity for its producer and a role for its reader.',
    '## Key idea 3: identity, positioning and relationships');
}

// 06 Annotated older text
{
  const notes = [
    ['"The visitor ... his comfort"', 'generic reader, assumed male; women appear only as staff'],
    ['"entirely devoted to"', 'hyperbole: the town exists to serve outsiders'],
    ['"lately extended at great expense by the Corporation"', 'passive with a named agent: civic pride and trust'],
    ['"the invalid ... bracing"', 'health discourse: the resort as therapeutic'],
    ['"orderly rows", "respectable"', 'modifiers of order and propriety reassure'],
    ['Long complex sentences', 'formal printed style: authority, not intimacy'],
  ];
  let b = t(225, 128, 'Feature', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) + t(635, 128, 'What it represents', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  notes.forEach(([f, d], i) => {
    const y = 142 + i * 74;
    const fl = wrap(f, 32), dl = wrap(d, 36);
    b += rect(40, y, 370, 62, i === 5 ? C.panel : C.cream, i === 5 ? C.panelEdge : C.mustard, 2, 9) +
      tl(58, y + 31 - (fl.length - 1) * 10.5 + 6, fl, { size: 16, italic: i < 5 }, 21);
    b += arrow(412, y + 31, 436, y + 31, { w: 3 });
    b += panel(440, y, 390, 62) + tl(458, y + 31 - (dl.length - 1) * 10.5 + 6, dl, { size: 16 }, 21);
    b += path(`M830,${y + 31} L850,${y + 31} L850,590`, { stroke: C.tealDark, w: 2.5 });
  });
  b += arrow(850, 590, 850, 614, { w: 3, color: C.tealDark, marker: 'ahT' });
  b += panel(40, 618, 820, 120, C.tealLight, C.tealDark) +
    t(64, 652, 'One idea, not a list of devices', { size: 18, weight: 700, fill: C.tealDark }) +
    tl(64, 682, ['A safe, health-giving, well-governed town for respectable male visitors;', 'the reader is positioned as someone entitled to be served.'], { size: 17, italic: true }, 24);
  add('06-annotated-older-text',
    svg(900, 760, 'Grouping features into one representation', b),
    'Six features of the lesson\'s original Victorian-style guidebook extract about Saltmere, such as the assumed male visitor, the passive crediting the Corporation and the health discourse of "the invalid", each linked to what it represents. All six feed one claim: a safe, health-giving, well-governed town for respectable male visitors.',
    'Group annotated features under one claim about representation.',
    '## Worked example: an annotated older text');
}

// 07 Comparison grid
{
  const pts = [
    ['Address', 'third person and "his": deference', '"you" and imperatives: synthetic personalisation'],
    ['Visitor', 'solitary male invalid; health', 'sociable group ("your crew"); fun'],
    ['Town', 'governed and orderly', 'personified and eager ("waiting for you")'],
    ['Mode, genre', 'printed guide; planned, complex syntax', 'short, informal online post for sharing'],
  ];
  let b = rect(210, 112, 315, 50, C.cream, C.mustard, 2.5, 10) + t(367, 144, 'Victorian-style guidebook', { size: 17, weight: 700, anchor: 'middle' }) +
    rect(545, 112, 315, 50, C.tealLight, C.tealDark, 2.5, 10) + t(702, 144, 'Tourism board post', { size: 17, weight: 700, anchor: 'middle' });
  pts.forEach(([p, a, c], i) => {
    const y = 176 + i * 88;
    b += badge(60, y + 38, 18, String(i + 1), C.cream) + t(86, y + 44, p, { size: 17, weight: 700 }) +
      panel(210, y, 315, 76) + tl(228, y + 38 - (wrap(a, 30).length - 1) * 10.5 + 6, wrap(a, 30), { size: 16 }, 21) +
      panel(545, y, 315, 76) + tl(563, y + 38 - (wrap(c, 30).length - 1) * 10.5 + 6, wrap(c, 30), { size: 16 }, 21) +
      t(535, y + 45, '≠', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
  });
  const y = 176 + 4 * 88 + 6;
  b += panel(40, y, 820, 64, C.panel, C.tealDark) + t(64, y + 39, 'Similarity:', { size: 17, weight: 700, fill: C.tealDark }) +
    t(170, y + 39, 'both present the town as existing for the visitor', { size: 17 });
  b += panel(40, y + 80, 820, 70, C.cream, C.mustard) +
    t(450, y + 112, 'Explain why each difference exists: audience expectations,', { size: 17, anchor: 'middle', weight: 600 }) +
    t(450, y + 136, 'genre, technology, social attitudes.', { size: 17, anchor: 'middle', weight: 600 });
  add('07-comparison-grid',
    svg(900, y + 175, 'Comparing the older and contemporary texts', b),
    'A grid compares the guidebook with the tourism board post on four points: address, the represented visitor, the represented town, and mode and genre. A shared similarity is that both present the town as existing for the visitor, and a note says each difference needs a cause.',
    'Compare point by point, and explain the cause of every difference.',
    '## Worked example: comparing with a contemporary text');
}
