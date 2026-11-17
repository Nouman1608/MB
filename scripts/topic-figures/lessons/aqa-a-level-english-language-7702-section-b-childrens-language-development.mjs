import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-english-language-7702-section-b-childrens-language-development';
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

// 01 Spoken stages
{
  const st = [
    ['Pre-verbal', '0 to about 12 months', 'crying, cooing, then babbling', ['"bababa"', '"bagida"']],
    ['Holophrastic', 'around 12 to 18 months', 'single words carrying whole meanings', ['"juice" =', '"I want juice"']],
    ['Two-word', 'around 18 to 24 months', 'combinations showing relations', ['"daddy car"', '"more milk"']],
    ['Telegraphic', 'from around 2 years', 'content words; function words and inflections often missing', ['"mummy go', 'shop"']],
    ['Post-telegraphic', 'from around 3 years', 'function words, inflections, more complex clauses', ['virtuous', 'errors']],
  ];
  let b = '';
  const w = 160, gap = 5;
  st.forEach(([n, age, feat, ex], i) => {
    const x = 40 + i * (w + gap);
    const fill = [C.panel, C.tealLight, C.teal, C.cream, C.sand][i];
    b += rect(x, 120, w - 4, 70, fill, C.ink, 2.5, 10) +
      tl(x + (w - 4) / 2, n.length > 13 ? 150 : 162, n.length > 13 ? ['Post-', 'telegraphic'] : [n], { size: 18, weight: 700, anchor: 'middle' }, 22);
    b += panel(x, 205, w - 4, 290) + tl(x + 14, 238, wrap(age, 14), { size: 15, weight: 700, fill: C.tealDark }, 19) +
      tl(x + 14, 292, wrap(feat, 14), { size: 16 }, 21) +
      `<line x1="${x + 14}" y1="${410}" x2="${x + w - 18}" y2="${410}" stroke="${C.panelEdge}" stroke-width="2"/>` +
      tl(x + 14, 440, ex, { size: 16, italic: ex[0].startsWith('"'), fill: C.olive, weight: 600 }, 22);
  });
  b += `<line x1="40" y1="515" x2="846" y2="515" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>` +
    t(450, 545, 'rough ages only', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(40, 565, 820, 64, C.cream, C.mustard) +
    t(450, 604, 'Children vary widely: never treat an age as a deadline.', { size: 18, weight: 700, anchor: 'middle' });
  add('01-spoken-stages',
    svg(900, 655, 'Spoken development: the broad sequence', b),
    'Five stages in order with rough ages: pre-verbal babbling such as "bababa", holophrastic single words such as "juice", two-word combinations such as "daddy car", telegraphic speech such as "mummy go shop", and post-telegraphic speech with function words, inflections and virtuous errors.',
    'The order is the point; the ages are approximate and children vary widely.',
    '## Spoken development: the broad sequence');
}

// 02 Phonological processes
{
  const rows = [
    ['Deletion', 'dropping a sound or unstressed syllable', 'nana', 'banana'],
    ['Substitution', 'easier sound for a harder one, e.g. fronting', 'tat', 'cat'],
    ['Assimilation', 'one sound becomes like another in the word', 'gog', 'dog'],
    ['Cluster reduction', 'a consonant cluster is reduced', 'pider', 'spider'],
    ['Reduplication', 'repeating a syllable', 'wawa', 'water'],
  ];
  let b = t(530, 130, 'child says', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + t(740, 130, 'adult target', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([p, d, c, a], i) => {
    const y = 145 + i * 80;
    b += panel(40, y, 820, 68) + t(60, y + 30, p, { size: 19, weight: 700 }) + t(60, y + 54, d, { size: 15, fill: C.muted }) +
      rect(450, y + 12, 160, 44, C.cream, C.mustard, 2, 9) + t(530, y + 41, `"${c}"`, { size: 19, italic: true, weight: 600, anchor: 'middle' }) +
      arrow(660, y + 34, 615, y + 34, { w: 3 }) +
      rect(665, y + 12, 160, 44, C.tealLight, C.tealDark, 2, 9) + t(745, y + 41, `"${a}"`, { size: 19, italic: true, anchor: 'middle' });
  });
  b += panel(40, 555, 820, 112, C.tealLight, C.tealDark) +
    t(64, 590, 'The "fis" phenomenon (Berko and Brown, 1960)', { size: 18, weight: 700 }) +
    t(64, 622, 'A child who says "fis" for "fish" may still reject an adult who says "fis":', { size: 17 }) +
    t(64, 646, 'perception runs ahead of production.', { size: 17, weight: 600, fill: C.tealDark });
  add('02-phonological-processes',
    svg(900, 692, 'Phonological simplification', b),
    'Five processes with the lesson\'s examples: deletion ("nana" for "banana"), substitution by fronting ("tat" for "cat"), assimilation ("gog" for "dog"), consonant cluster reduction ("pider" for "spider") and reduplication ("wawa" for "water"). A note explains the "fis" phenomenon.',
    'Children simplify adult words in regular patterns; name the process precisely.',
    '## Phonological development');
}

// 03 Aitchison's three processes
{
  const steps = [
    ['Labelling', 'linking a word to a thing'],
    ['Packaging', 'finding the limits of a word\'s meaning'],
    ['Network building', 'relating words to each other, such as opposites and categories'],
  ];
  let b = '';
  steps.forEach(([h, d], i) => {
    const x = 40 + i * 285;
    b += panel(x, 120, 250, 335, i === 1 ? C.tealLight : C.panel, i === 1 ? C.tealDark : C.panelEdge) + badge(x + 125, 160, 22, String(i + 1), C.mustard) +
      t(x + 125, 220, h, { size: 21, weight: 700, anchor: 'middle' }) + tl(x + 125, 252, wrap(d, 24), { size: 16, anchor: 'middle', fill: C.muted }, 21);
    if (i < 2) b += arrow(x + 252, 270, x + 282, 270, { w: 4 });
  });
  // icons
  b += rect(100, 365, 60, 50, C.cream, C.ink, 2, 8) + arrow(165, 390, 195, 390, { w: 2.5 }) + t(225, 397, 'dog', { size: 17, weight: 700, anchor: 'middle', italic: true });
  b += `<circle cx="450" cy="385" r="42" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="7 5"/>` + t(450, 391, 'dog', { size: 17, weight: 700, anchor: 'middle', italic: true });
  const nodes = [[690, 375, 'dog'], [770, 365, 'cat'], [730, 425, 'animal']];
  b += path('M690,375 L770,365 M690,375 L730,425 M770,365 L730,425', { stroke: C.tealDark, w: 2.5 });
  nodes.forEach(([x, y, s]) => { b += rect(x - 32, y - 16, 64, 30, C.panel, C.tealDark, 2, 8) + t(x, y + 5, s, { size: 15, italic: true, anchor: 'middle' }); });
  b += panel(40, 475, 820, 80, C.cream, C.mustard) +
    t(450, 509, 'Overextension and underextension happen during packaging,', { size: 17, anchor: 'middle' }) +
    t(450, 535, 'as the child finds where a word\'s meaning stops.', { size: 17, anchor: 'middle' });
  add('03-aitchison-processes',
    svg(900, 580, 'Aitchison: three processes of word learning', b),
    'Jean Aitchison\'s three processes in order: labelling, linking a word to a thing; packaging, finding the limits of a word\'s meaning; and network building, relating words to each other through opposites and categories.',
    'Labelling, packaging and network building describe how word meanings are refined.',
    '## Lexical and semantic development');
}

// 04 Grammar sequences
{
  let b = panel(40, 115, 820, 140) + t(64, 150, 'Inflections: broadly predictable order', { size: 19, weight: 700 });
  b += rect(64, 172, 340, 60, C.teal, C.ink, 2, 10) + t(80, 198, 'Early', { size: 15, weight: 700, fill: C.tealDark }) + t(80, 220, 'present progressive "-ing", plural "-s"', { size: 16 });
  b += arrow(408, 202, 470, 202, { w: 4 });
  b += rect(476, 172, 360, 60, C.cream, C.mustard, 2, 10) + t(492, 198, 'Later', { size: 15, weight: 700, fill: C.olive }) + t(492, 220, 'regular past "-ed", third-person "-s"', { size: 16 });
  const seq = (y, title, steps) => {
    let s = t(64, y, title, { size: 19, weight: 700 });
    steps.forEach(([lab, ex], i) => {
      const x = 40 + i * 285;
      s += rect(x, y + 18, 250, 96, [C.panel, C.tealLight, C.teal][i], C.ink, 2.5, 10) +
        tl(x + 125, y + 50, wrap(lab, 26), { size: 15, anchor: 'middle', fill: C.muted }, 19) +
        t(x + 125, y + 96, ex, { size: 18, italic: true, weight: 600, anchor: 'middle' });
      if (i < 2) s += arrow(x + 252, y + 66, x + 282, y + 66, { w: 3.5 });
    });
    return s;
  };
  b += seq(295, 'Negatives', [['"no" at the edge of the utterance', '"no bed"'], ['negative inside the utterance', '"I no want it"'], ['correct auxiliary forms', '"I don\'t want it"']]);
  b += seq(445, 'Questions', [['rising intonation', '"daddy gone?"'], ['wh-word without inversion', '"where daddy going?"'], ['subject and auxiliary inverted', '"where is daddy going?"']]);
  b += panel(40, 585, 820, 90, C.cream, C.mustard) +
    t(64, 620, 'Virtuous errors: "goed", "mouses", "I eated it"', { size: 18, weight: 700 }) +
    t(64, 652, 'A rule over-applied. Berko\'s "wug" test (1958): plural rules applied to invented words.', { size: 16, fill: C.muted });
  add('04-grammar-sequences',
    svg(900, 700, 'Grammatical development in sequence', b),
    'Inflections appear with "-ing" and plural "-s" early and regular "-ed" and third-person "-s" later. Negatives move from "no bed" to "I no want it" to "I don\'t want it", and questions from "daddy gone?" to "where daddy going?" to "where is daddy going?". Virtuous errors such as "goed" show a rule over-applied.',
    'Inflections, negatives and questions each develop in a typical order.',
    '## Grammatical development');
}

// 05 Kroll's writing stages
{
  const st = [
    ['Preparation', 'motor skills and basic spelling'],
    ['Consolidation', 'writing like speech, with "and then" chaining'],
    ['Differentiation', 'awareness of differences between speech and writing, and of genre'],
    ['Integration', 'a personal voice controlling style for audience'],
  ];
  let b = '';
  st.forEach(([h, d], i) => {
    const x = 40 + i * 207, top = 330 - i * 60;
    b += rect(x, top, 193, 460 - top, [C.tealLight, C.teal, C.cream, C.mustard][i], C.ink, 2.5, 10) +
      badge(x + 30, top + 32, 18, String(i + 1), C.panel) + t(x + 54, top + 39, h, { size: 17, weight: 700 }) +
      tl(x + 16, top + 76, wrap(d, 19), { size: 16 }, 21);
  });
  b += panel(40, 480, 820, 130) + t(64, 515, 'Spelling errors are often logical', { size: 19, weight: 700 });
  [['phonetic', '"sed"'], ['over-generalised rule', '"cryed"'], ['omissions', ''], ['transpositions', '']].forEach(([l, e], i) => {
    const x = 64 + i * 200;
    b += rect(x, 535, 185, 58, C.tealLight, C.panelEdge, 2, 9) + t(x + 92, e ? 558 : 570, l, { size: 16, weight: 600, anchor: 'middle' }) + (e ? t(x + 92, 581, e, { size: 16, italic: true, anchor: 'middle', fill: C.olive }) : '');
  });
  add('05-kroll-writing-stages',
    svg(900, 635, 'Writing development: Kroll\'s stages', b, 'Barry Kroll\'s model'),
    'Barry Kroll\'s four stages as rising steps: preparation (motor skills and basic spelling), consolidation (writing like speech with "and then" chaining), differentiation (awareness of speech, writing and genre) and integration (a personal voice controlling style for audience). Below, logical spelling errors: phonetic, over-generalised, omissions and transpositions.',
    'Writing moves from mechanics, through speech-like writing, to a controlled personal voice.',
    '## Writing development');
}

// 06 Theories with limitations
{
  const th = [
    ['Behaviourist', 'B. F. Skinner', 'imitation and reinforcement', 'cannot explain virtuous errors no adult models'],
    ['Nativist', 'Noam Chomsky', 'an innate Language Acquisition Device works out grammar from limited input', 'underplays interaction; hard to test directly'],
    ['Cognitive', 'Jean Piaget', 'language follows conceptual development, e.g. object permanence', 'some language seems to develop ahead of related concepts'],
    ['Social interactionist', 'Jerome Bruner;|Lev Vygotsky', 'interaction with caregivers drives development: LASS, scaffolding, zone of proximal development', 'children in cultures with little child-directed speech still acquire language'],
  ];
  let b = t(400, 130, 'Core claim', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(720, 130, 'A limitation to raise', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  th.forEach(([n, who, claim, lim], i) => {
    const y = 145 + i * 112;
    const cl = wrap(claim, 32), ll = wrap(lim, 26);
    b += rect(40, y, 210, 100, [C.teal, C.tealLight, C.cream, C.sand][i], C.ink, 2.5, 10) +
      tl(145, y + (n.length > 14 ? 28 : 48), n.length > 14 ? ['Social', 'interactionist'] : [n], { size: 18, weight: 700, anchor: 'middle' }, 22) +
      tl(145, y + (n.length > 14 ? 74 : 74), who.split('|'), { size: 15, anchor: 'middle', fill: C.muted }, 18);
    b += panel(262, y, 312, 100) + tl(278, y + 50 - (cl.length - 1) * 10.5 + 6, cl, { size: 16 }, 21);
    b += rect(586, y, 274, 100, C.panel, C.rust, 2.5, 12) + tl(602, y + 50 - (ll.length - 1) * 10.5 + 6, ll, { size: 16 }, 21);
  });
  b += panel(40, 600, 820, 90, C.tealLight, C.tealDark) +
    t(64, 634, 'Child-directed speech: evidence most often linked to interactionist views', { size: 17, weight: 700 }) +
    t(64, 664, 'higher pitch, simpler syntax, repetition, questions, expansions and recasts', { size: 16, fill: C.muted });
  add('06-theories-and-limitations',
    svg(900, 715, 'Four positions to evaluate', b),
    'Four theoretical positions with their key figures, core claims and a limitation each: behaviourist (Skinner), nativist (Chomsky), cognitive (Piaget) and social interactionist (Bruner and Vygotsky). A note lists features of child-directed speech, the evidence most often linked to interactionist views.',
    'Treat each theory as an explanation with strengths and limits, not a fact.',
    '## Theories and research: positions to evaluate');
}

// 07 Annotated transcript
{
  const lines = [
    ['TOM', 'daddy goed work', 'virtuous error "goed"; auxiliary omitted (telegraphic)', 'child'],
    ['MOTHER', 'yes daddy went to work didn\'t he (.) where did daddy go', 'recast; tag question; wh-question hands Tom the turn', 'adult'],
    ['TOM', 'work (.) in big car', '"the" omitted (telegraphic)', 'child'],
    ['MOTHER', 'in the big car that\'s right (.) and what\'s this', 'expansion; wh-question', 'adult'],
    ['TOM', 'doggy (.) two doggies', 'plural rule applied correctly; diminutive "-y"', 'child'],
  ];
  let b = t(40, 128, 'Tom is 2;6 (two years, six months). (.) = micropause', { size: 16, fill: C.muted });
  let y = 145;
  lines.forEach(([sp, u, note, who]) => {
    const ul = wrap(u, 30), nl = wrap(note, 31);
    const h = Math.max(ul.length, nl.length) * 24 + 26;
    const child = who === 'child';
    b += rect(40, y, 110, h, child ? C.cream : C.tealLight, child ? C.mustard : C.tealDark, 2, 9) + t(95, y + h / 2 + 6, sp, { size: 16, weight: 700, anchor: 'middle' });
    b += panel(158, y, 380, h) + tl(176, y + h / 2 + 6 - (ul.length - 1) * 12, ul, { size: 18, italic: true }, 24);
    b += arrow(540, y + h / 2, 562, y + h / 2, { w: 2.5 });
    b += tl(570, y + h / 2 + 6 - (nl.length - 1) * 12, nl, { size: 16, fill: child ? C.olive : C.tealDark, weight: 600 }, 24);
    y += h + 10;
  });
  b += panel(40, y + 6, 400, 110, C.cream, C.mustard) + t(64, y + 40, 'Rule formation', { size: 18, weight: 700 }) +
    tl(64, y + 68, ['"goed" is not imitated: the mother', 'never says it. Supports nativism.'], { size: 16 }, 22);
  b += panel(460, y + 6, 400, 110, C.tealLight, C.tealDark) + t(484, y + 40, 'Interaction', { size: 18, weight: 700 }) +
    tl(484, y + 68, ['recast and wh-questions scaffold', 'Tom\'s turns. Supports Bruner.'], { size: 16 }, 22);
  b += t(450, y + 154, 'Judgement: rule formation and interaction work together.', { size: 18, weight: 700, anchor: 'middle' });
  add('07-annotated-transcript',
    svg(900, y + 180, 'Reading the data: Tom, aged 2;6', b),
    'The lesson\'s original transcript of Tom and his mother, with annotations: Tom\'s virtuous error "goed", telegraphic omissions and a correct plural, and the mother\'s recast, tag question, wh-questions and expansion. Two boxes link the data to nativist rule formation and Bruner\'s interactionist view.',
    'Quote the data, name the feature, then weigh it against more than one theory.',
    '## Worked example: data and an essay paragraph');
}
