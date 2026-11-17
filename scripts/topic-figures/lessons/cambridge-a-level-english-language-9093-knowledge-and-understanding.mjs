import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-language-9093-knowledge-and-understanding';
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

// 01 Four strands
{
  const st = [
    ['Conventions', 'of a wide range of written textual forms', C.teal],
    ['Linguistic and literary', 'elements and features of texts', C.tealLight],
    ['Audience', 'in both the design and the reception of texts', C.cream],
    ['Genre, purpose, context', 'and how they contribute to meaning', C.sand],
  ];
  let b = '';
  st.forEach(([h, d, fill], i) => {
    const x = 40 + (i % 2) * 420, y = 115 + Math.floor(i / 2) * 140;
    b += rect(x, y, 400, 122, fill, C.ink, 2.5) + badge(x + 38, y + 40, 20, String(i + 1), C.panel) +
      t(x + 72, y + 47, h, { size: 20, weight: 700 }) + tl(x + 24, y + 86, wrap(d, 40), { size: 16 }, 21);
  });
  b += t(450, 445, 'Knowledge and understanding serves both AS papers', { size: 19, weight: 700, anchor: 'middle' });
  b += arrow(330, 455, 240, 490, { w: 3.5 }) + arrow(570, 455, 660, 490, { w: 3.5 });
  b += panel(40, 495, 400, 90) + t(240, 530, 'Paper 1 Reading', { size: 19, weight: 700, anchor: 'middle' }) + t(240, 560, 'why a text looks and sounds as it does', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(460, 495, 400, 90) + t(660, 530, 'Paper 2 Writing', { size: 19, weight: 700, anchor: 'middle' }) + t(660, 560, 'draws on exactly the same knowledge', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(450, 620, 'The syllabus example lists are suggested, not prescribed, and not exhaustive.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('01-four-strands',
    svg(900, 645, 'Knowledge and understanding: four strands', b),
    'Four numbered strands: conventions of written textual forms, linguistic elements and literary features, the significance of audience in design and reception, and how genre, purpose and context contribute to meaning. Arrows show the same knowledge serving Paper 1 Reading and Paper 2 Writing.',
    'Four strands of knowledge that explain why a text looks and sounds as it does.',
    '## Strand 1: conventions of textual forms');
}

// 02 Conventions and their jobs
{
  const rows = [
    ['Editorial', 'institutional "we", a clear stance', 'present the view as considered and collective'],
    ['Review', 'criteria, a verdict, often a rating', 'help a reader decide; build authority'],
    ['Travel writing', 'first person, sensory detail', 'experience a place through one observer'],
    ['Investigative', 'attributed sources, a withheld revelation', 'build credibility and suspense together'],
    ['Speech or podcast', 'signposting, repetition, threes', 'help a listener who cannot reread'],
    ['Diary', 'dated entries, private reference', 'signal a reader not meant to be there'],
    ['Leaflet', 'headings, bullets, imperatives', 'let a reader scan and act'],
  ];
  let b = t(140, 130, 'Form', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(405, 130, 'Typical conventions', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(720, 130, 'The job they do for a reader', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([f, c, j], i) => {
    const y = 145 + i * 70;
    b += rect(40, y, 200, 58, i % 2 ? C.tealLight : C.teal, C.ink, 2, 10) + t(140, y + 35, f, { size: 17, weight: 700, anchor: 'middle' }) +
      panel(252, y, 306, 58) + tl(268, y + 29 - (wrap(c, 32).length - 1) * 10 + 6, wrap(c, 32), { size: 16 }, 20) +
      arrow(560, y + 29, 586, y + 29, { w: 3 }) +
      rect(590, y, 270, 58, C.cream, C.mustard, 2, 10) + tl(606, y + 29 - (wrap(j, 29).length - 1) * 10 + 6, wrap(j, 29), { size: 16, weight: 600 }, 20);
  });
  b += panel(40, 645, 820, 70, C.tealLight, C.tealDark) +
    t(450, 676, 'Notice when a writer follows a convention, and when they break it:', { size: 17, anchor: 'middle', weight: 600 }) +
    t(450, 700, 'a travel blog that switches to bullet points has moved from storytelling to advice.', { size: 16, anchor: 'middle', fill: C.muted });
  add('02-conventions-and-jobs',
    svg(900, 740, 'Conventions exist to do a job', b),
    'Seven forms from the syllabus list, each with typical conventions and the job they do for a reader, from the editorial\'s institutional "we" presenting a collective view to the leaflet\'s headings and imperatives letting a reader scan and act. A note explains reading a break in convention, such as a travel blog switching to bullet points.',
    'A convention matters because of the job it does for a reader.',
    '## Strand 1: conventions of textual forms');
}

// 03 Levels of analysis
{
  const lv = [
    ['Word', 'word classes; vocabulary: register, connotation, semantic field; morphology: affixation ("unmissable"), compounding ("feelgood"), blending', C.tealLight],
    ['Sentence', 'sentence types; fronting and end-focus; voice (active or passive); tense and aspect; modality', C.teal],
    ['Text', 'openings, endings, shifts in time or focus, paragraph length; narrative perspective', C.cream],
  ];
  let b = '';
  lv.forEach(([h, d, fill], i) => {
    const y = 115 + i * 112;
    const w = 560 + i * 0;
    b += rect(40, y, 150, 98, fill, C.ink, 2.5, 10) + t(115, y + 56, h, { size: 21, weight: 700, anchor: 'middle' }) +
      panel(200, y, 450, 98) + tl(218, y + 49 - (wrap(d, 48).length - 1) * 11 + 6, wrap(d, 48), { size: 16 }, 22);
  });
  b += arrow(20, 125, 20, 425, { w: 4, color: C.tealDark, marker: 'ahT' });
  b += rect(670, 115, 190, 322, C.panel, C.olive, 2.5, 12) + t(765, 160, 'Sound', { size: 20, weight: 700, anchor: 'middle', fill: C.olive }) +
    tl(765, 205, ['alliteration,', 'assonance, sibilance,', 'rhythm, rhyme'], { size: 16, anchor: 'middle' }, 23) +
    tl(765, 330, ['matters most in', 'speeches, podcasts', 'and slogans'], { size: 15, anchor: 'middle', fill: C.muted }, 19);
  b += panel(40, 455, 820, 130, C.tealLight, C.tealDark) + t(64, 490, 'Across levels', { size: 20, weight: 700 }) +
    t(64, 522, 'figurative language · rhetorical devices · authorial voice · formality of tone · pragmatics', { size: 16 });
  b += t(64, 556, '"Voice" means two things: grammatical voice (active, passive) or authorial voice. Say which.', { size: 16, fill: C.rust, weight: 600 });
  add('03-levels-of-analysis',
    svg(900, 610, 'Sorting linguistic features by level', b),
    'The syllabus feature list sorted by level: word (word classes, vocabulary, morphology such as "unmissable" and "feelgood"), sentence (sentence types, fronting, voice, tense and aspect, modality) and text (structure and narrative perspective), with sound features to the side and figurative language, rhetoric, voice, tone and pragmatics working across levels.',
    'Sort features from word to whole text so the long list is easier to hold.',
    '## Strand 2: linguistic elements and literary features');
}

// 04 Tense versus aspect
{
  let b = '';
  const tl0 = (y, label) => `<line x1="120" y1="${y}" x2="820" y2="${y}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>` + t(830, y + 6, label, { size: 15, fill: C.muted });
  b += panel(40, 115, 820, 200) + t(64, 150, 'Progressive aspect', { size: 20, weight: 700, fill: C.tealDark }) +
    t(290, 150, '"was walking"', { size: 19, italic: true, weight: 600 }) +
    t(64, 178, 'the action is ongoing and unfinished', { size: 16, fill: C.muted });
  b += tl0(260, '');
  b += `<rect x="280" y="242" width="380" height="36" rx="18" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>` +
    t(470, 266, 'walking, in progress', { size: 16, weight: 600, anchor: 'middle' }) +
    `<path d="M660,242 l18,18 l-18,18" fill="none" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="5 4"/>` +
    t(140, 300, 'past', { size: 15, fill: C.muted });
  b += panel(40, 335, 820, 220) + t(64, 370, 'Perfect aspect', { size: 20, weight: 700, fill: C.olive }) +
    t(250, 370, '"has walked", "had walked"', { size: 19, italic: true, weight: 600 }) +
    t(64, 398, 'links an earlier action to a later moment', { size: 16, fill: C.muted });
  b += tl0(490, '');
  b += `<circle cx="320" cy="490" r="14" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + t(320, 462, 'earlier action', { size: 16, anchor: 'middle', weight: 600 }) +
    `<line x1="640" y1="470" x2="640" y2="510" stroke="${C.olive}" stroke-width="4"/>` + t(640, 462, 'later moment', { size: 16, anchor: 'middle', weight: 600 }) +
    path('M336,482 C430,440 540,440 632,482', { stroke: C.olive, w: 3, extra: 'marker-end="url(#ahO)"' }) +
    t(480, 530, 'still relevant at the later moment', { size: 15, anchor: 'middle', fill: C.olive });
  b += panel(40, 575, 820, 70, C.cream, C.mustard) +
    t(450, 607, 'Tense locates an action in time; aspect describes how it unfolds.', { size: 18, weight: 700, anchor: 'middle' }) +
    t(450, 632, 'Learn them separately.', { size: 16, anchor: 'middle', fill: C.muted });
  add('04-tense-and-aspect',
    svg(900, 670, 'Tense and aspect are different things', b),
    'Two timelines. The progressive aspect, "was walking", shows an action as an ongoing, unfinished stretch. The perfect aspect, "has walked" or "had walked", links an earlier action to a later moment. A note says tense locates an action in time while aspect describes how it unfolds.',
    'Progressive shows an action in progress; perfect links an earlier action to a later moment.',
    '## Strand 2: linguistic elements and literary features');
}

// 05 Design and reception
{
  let b = rect(40, 160, 180, 90, C.tealLight, C.tealDark, 3) + t(130, 200, 'Writer', { size: 21, weight: 700, anchor: 'middle' }) + t(130, 226, 'designs', { size: 16, anchor: 'middle', fill: C.muted });
  b += arrow(222, 205, 352, 205, { w: 4 });
  b += rect(358, 160, 184, 90, C.panel, C.ink, 3) + t(450, 212, 'Text', { size: 22, weight: 700, anchor: 'middle' });
  b += arrow(544, 205, 674, 205, { w: 4 });
  b += rect(680, 160, 180, 90, C.cream, C.mustard, 3) + t(770, 200, 'Readers', { size: 21, weight: 700, anchor: 'middle' }) + t(770, 226, 'receive', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(287, 145, 'DESIGN', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(609, 145, 'RECEPTION', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += panel(40, 275, 400, 175) + t(64, 308, 'Design choices', { size: 18, weight: 700, fill: C.tealDark }) +
    tl(64, 338, ['register', 'assumed knowledge', 'forms of address', 'what is explained, what is taken', 'for granted'], { size: 16 }, 21);
  b += panel(460, 275, 400, 175) + t(484, 308, 'Reception can differ from intention', { size: 18, weight: 700, fill: C.olive }) +
    tl(484, 338, ['a text read years later, or in a', 'different country, can be received', 'in a way its writer never planned'], { size: 16 }, 21);
  const cards = [
    ['Primary and secondary', 'audiences', 'a school newsletter is for parents, but pupils read it too'],
    ['Implied reader', '', '"You already know the feeling of a Monday morning commute": a working adult'],
    ['Assumed knowledge', '', 'unexplained references reveal who the writer expects to understand'],
  ];
  cards.forEach(([h, h2, d], i) => {
    const x = 40 + i * 280;
    b += panel(x, 470, 260, 140, C.tealLight, C.panelEdge) + t(x + 18, 502, h, { size: 17, weight: 700 }) + (h2 ? t(x + 18, 524, h2, { size: 17, weight: 700 }) : '') +
      tl(x + 18, h2 ? 554 : 532, wrap(d, 27), { size: 15, italic: d.startsWith('"') }, 20);
  });
  add('05-design-and-reception',
    svg(900, 635, 'Audience in design and reception', b),
    'A writer designs a text for an audience and readers receive it, sometimes differently from the intention. Design choices include register, assumed knowledge and forms of address. Three cards explain primary and secondary audiences, the implied reader and assumed knowledge with the lesson\'s examples.',
    'Design is what the writer intends; reception is what real readers make of it.',
    '## Strand 3: audience in design and reception');
}

// 06 Same sentence, three contexts
{
  let b = rect(250, 115, 400, 70, C.panel, C.ink, 3) + t(450, 158, '"The water is not safe"', { size: 24, weight: 700, italic: true, anchor: 'middle' });
  const ctx = [['on a sign', 'a warning', C.cream], ['in a story', 'a plot point', C.tealLight], ['in an editorial', 'a political accusation', C.teal]];
  ctx.forEach(([w, m, fill], i) => {
    const x = 40 + i * 280;
    b += arrow(450, 185, x + 130, 232, { w: 3 });
    b += rect(x, 238, 260, 110, fill, C.ink, 2.5) + t(x + 130, 274, w, { size: 17, anchor: 'middle', fill: C.muted }) + t(x + 130, 312, m, { size: 20, weight: 700, anchor: 'middle' });
  });
  b += t(450, 392, 'Genre, purpose and context explain meaning together', { size: 19, weight: 700, anchor: 'middle' });
  b += panel(40, 410, 820, 120) + t(64, 445, 'Purposes stack: one usually serves another', { size: 18, weight: 700 });
  b += rect(64, 462, 200, 50, C.tealLight, C.tealDark, 2, 10) + t(164, 493, 'informs', { size: 18, weight: 700, anchor: 'middle' }) +
    t(330, 493, 'in order to', { size: 16, anchor: 'middle', fill: C.muted }) +
    arrow(390, 487, 420, 487, { w: 3 }) +
    rect(426, 462, 200, 50, C.cream, C.mustard, 2, 10) + t(526, 493, 'persuade', { size: 18, weight: 700, anchor: 'middle' }) +
    t(745, 493, 'a charity leaflet', { size: 16, anchor: 'middle', italic: true });
  add('06-genre-purpose-context',
    svg(900, 555, 'Genre, purpose and context make meaning', b),
    'The sentence "The water is not safe" means a warning on a sign, a plot point in a story and a political accusation in an editorial. Below, purposes stack: a charity leaflet informs in order to persuade.',
    'The same words change meaning with genre, purpose and context.',
    '## Strand 4: genre, purpose and context');
}

// 07 Worked example
{
  const notes = [
    ['Form', 'strand 1', 'travel writing: first-person observer'],
    ['Aspect', 'strand 2', '"had stopped": a change already complete; the narrator has adjusted'],
    ['Pronoun shift', 'strand 2', '"I" to generic "you": experience becomes advice'],
    ['Personification', 'strand 2', '"the island keeps its own time": a place with character'],
    ['Audience', 'strand 3', 'implied reader is busy, tied to a phone: the text sells escape'],
    ['Purpose', 'strand 4', 'describes, entertains and quietly persuades'],
  ];
  let b = panel(40, 112, 820, 120, C.cream, C.mustard) +
    tl(64, 145, ['"By the third morning I had stopped checking my phone. The ferry left when it was full,', 'not when the timetable said, and nobody on the quay seemed to mind. You learn quickly', 'here: the island keeps its own time, and it is generous with it."'], { size: 17, italic: true }, 26);
  notes.forEach(([h, s, d], i) => {
    const y = 250 + i * 70;
    const dl = wrap(d, 50);
    b += rect(40, y, 200, 58, [C.teal, C.tealLight, C.tealLight, C.tealLight, C.cream, C.sand][i], C.ink, 2, 10) +
      t(140, y + 27, h, { size: 17, weight: 700, anchor: 'middle' }) + t(140, y + 47, s, { size: 15, anchor: 'middle', fill: C.muted }) +
      arrow(242, y + 29, 268, y + 29, { w: 3 }) +
      panel(272, y, 588, 58) + tl(290, y + 29 - (dl.length - 1) * 10 + 6, dl, { size: 16 }, 20);
  });
  b += t(450, 690, 'Each label is joined to an effect and to the reader.', { size: 17, anchor: 'middle', weight: 600, fill: C.tealDark });
  add('07-worked-example',
    svg(900, 715, 'Knowledge in use: the island passage', b),
    'The lesson\'s original travel passage about an island, followed by six labelled observations: the travel-writing form, the past perfect "had stopped", the shift from "I" to "you", personification of the island, an implied reader tied to a phone, and a purpose that describes, entertains and persuades.',
    'The knowledge supplies the labels; the answer is what they let you explain.',
    '## Worked example: knowledge in use');
}
