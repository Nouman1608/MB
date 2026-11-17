import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-english-language-7702-methods-of-language-analysis-3-1-2';
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
const cw = (s, size) => s.length * size * 0.56; // rough Inter text width

// 01 Six levels
{
  const rows = [
    ['Phonetics, phonology', 'and prosodics', 'How speech sounds and effects are articulated and analysed', 'Sound patterning in written texts; stress, pitch, pace and pauses in transcripts'],
    ['Graphology', '', 'The visual aspects of textual design and appearance', 'Layout, typography, colour, images and their relation to words'],
    ['Lexis and semantics', '', 'The vocabulary of English, including social and historical variation', 'Word choice, connotation, semantic fields, register, older lexis'],
    ['Grammar, including', 'morphology', 'Structural patterns at sentence, clause, phrase and word level', 'Sentence functions, clause structure, noun and verb phrases, word formation'],
    ['Pragmatics', '', 'The contextual aspects of language use', 'Implied meaning, politeness, speech acts, assumed knowledge'],
    ['Discourse', '', 'Extended stretches of communication in different genres, modes and contexts', 'Overall structure, cohesion, openings and closings, turn-taking'],
  ];
  let b = t(170, 130, 'Level', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(455, 130, 'Specification wording', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(722, 130, 'What it gives you in Paper 1', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([n1, n2, spec, use], i) => {
    const y = 148 + i * 100;
    b += panel(40, y, 820, 88) + rect(52, y + 10, 236, 68, i % 2 ? C.tealLight : C.teal, C.ink, 2, 10);
    b += n2 ? tl(170, y + 39, [n1, n2], { size: 17, weight: 700, anchor: 'middle' }, 21) : t(170, y + 50, n1, { size: 18, weight: 700, anchor: 'middle' });
    const sl = wrap(spec, 29), ul = wrap(use, 27);
    b += tl(312, y + 44 - (sl.length - 1) * 10.5 + 6 - 6, sl, { size: 16, italic: true, fill: C.muted }, 21);
    b += tl(592, y + 44 - (ul.length - 1) * 10.5, ul, { size: 16 }, 21);
  });
  add('01-six-levels',
    svg(900, 760, 'The six levels of language analysis', b),
    'A table of the six levels in the specification: phonetics, phonology and prosodics; graphology; lexis and semantics; grammar including morphology; pragmatics; and discourse. Each is shown with its specification wording and what it gives you when analysing Paper 1 texts.',
    'Six levels, each giving you a different kind of evidence about a text.',
    '## The six levels in the specification');
}

// 02 Salience test
{
  let b = rect(320, 115, 260, 56, C.tealLight, C.tealDark) + t(450, 150, 'A feature you notice', { size: 19, weight: 700, anchor: 'middle' });
  b += arrow(450, 171, 450, 200, { w: 3 });
  b += `<polygon points="450,205 720,275 450,345 180,275" fill="${C.cream}" stroke="${C.mustard}" stroke-width="3"/>` +
    tl(450, 262, ['If it were changed, would the', 'representation or relationship change?'], { size: 17, weight: 600, anchor: 'middle' }, 23);
  b += path('M180,275 L120,275 L120,375', { w: 3, extra: 'marker-end="url(#ah)"' }) + t(150, 262, 'yes', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += path('M720,275 L780,275 L780,375', { w: 3, extra: 'marker-end="url(#ah)"' }) + t(750, 262, 'no', { size: 17, weight: 700, fill: C.rust, anchor: 'middle' });
  b += rect(40, 385, 300, 80, C.teal, C.tealDark, 3) + t(190, 418, 'Salient', { size: 21, weight: 700, anchor: 'middle' }) + t(190, 446, 'analyse it', { size: 17, anchor: 'middle' });
  b += rect(560, 385, 300, 80, C.panel, C.panelEdge, 2.5) + t(710, 418, 'Not salient', { size: 21, weight: 700, anchor: 'middle', fill: C.muted }) + t(710, 446, 'leave it out', { size: 17, anchor: 'middle', fill: C.muted });
  b += t(450, 520, 'Usually more salient', { size: 20, weight: 700, anchor: 'middle' });
  b += panel(40, 540, 400, 110) + t(64, 575, 'Repeated patterns', { size: 19, weight: 700, fill: C.tealDark }) +
    tl(64, 605, ['a semantic field running through', 'a text; a run of imperatives'], { size: 17, fill: C.muted }, 23);
  b += panel(460, 540, 400, 110) + t(484, 575, 'Marked choices', { size: 19, weight: 700, fill: C.tealDark }) +
    tl(484, 605, ['a sudden shift in register;', 'a single minor sentence'], { size: 17, fill: C.muted }, 23);
  b += t(450, 685, 'than isolated features', { size: 18, anchor: 'middle', fill: C.muted, italic: true });
  add('02-salience-test',
    svg(900, 710, 'Is this feature salient?', b),
    'A decision flow: ask whether changing a feature would change the representation or relationship. If yes, it is salient and worth analysing; if no, leave it out. Repeated patterns and marked choices are usually more salient than isolated features.',
    'Salient means prominent and significant: the features that do most to create the text\'s meanings.',
    '## "Salient" is the key word');
}

// 03 Grammar ranks
{
  const ranks = [
    ['Sentence', ['functions: declarative, interrogative, imperative, exclamative', 'structures: simple, compound, complex, compound-complex, minor']],
    ['Clause', ['elements: subject, verb, object, complement, adverbial', 'main and subordinate clauses; fronted adverbials']],
    ['Phrase', ['noun phrase: determiner, pre-modifier, head, post-modifier', 'verb phrase: tense, aspect, modality, voice']],
    ['Word', ['word classes: concrete and abstract nouns, dynamic and stative verbs,', 'modal verbs, adverbs of degree; morphology: prefixes, suffixes,', 'compounds, coinages such as "staycation"']],
  ];
  let b = '';
  let y = 115;
  ranks.forEach(([r, lines], i) => {
    const h = 34 + lines.length * 24;
    b += panel(110, y, 750, h, i === 3 ? C.panel : C.panel) +
      rect(126, y + 12, 130, h - 24, [C.mustard, C.cream, C.teal, C.tealLight][i], C.ink, 2, 10) +
      t(191, y + h / 2 + 7, r, { size: 19, weight: 700, anchor: 'middle' }) +
      tl(276, y + 30 + (h - 34 - lines.length * 24) / 2 + 2, lines, { size: 16 }, 24);
    y += h + 14;
  });
  b += arrow(70, y - 20, 70, 130, { w: 5, color: C.tealDark, marker: 'ahT' });
  b += `<text x="58" y="${(y + 110) / 2}" font-size="17" font-weight="700" fill="${C.tealDark}" text-anchor="middle" transform="rotate(-90 52 ${(y + 110) / 2})">work up through the ranks</text>`;
  add('03-grammar-ranks',
    svg(900, y + 20, 'Grammar: work up through the ranks', b),
    'Four ranks of grammar from word up to sentence. Word: word classes and morphology. Phrase: noun phrase structure and verb phrase tense, aspect, modality and voice. Clause: clause elements, main and subordinate clauses and fronted adverbials. Sentence: the four functions and five structures.',
    'Describe grammar at word, phrase, clause and sentence level, working upwards.',
    '## Level by level: the terminology that earns credit');
}

// 04 Café leaflet annotated
{
  const rows = [
    ['Pull up a chair.', 'Grammar: opening imperative', 'Lexis: domestic, informal', 'invite'],
    ['At The Kettle, nobody\'s a stranger for long.', 'Pragmatics: implies newcomers', 'are welcomed quickly', 'reason'],
    ['Our volunteers bake fresh every morning, our tea is always brewing, and every penny goes back into the neighbourhood.', 'Grammar: tricolon of parallel', 'clauses with "our" as determiner', 'reason'],
    ['Pop in.', 'Grammar: closing imperative', 'Lexis: domestic, informal', 'invite'],
    ['You\'ll be glad you did.', 'Pragmatics: presupposes', 'the reader will visit', 'invite'],
  ];
  let b = t(330, 128, 'The text (original, written for the lesson)', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(705, 128, 'Salient feature', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  let y = 145;
  const ys = [];
  rows.forEach(([txt, n1, n2, kind]) => {
    const lines = wrap(txt, 32);
    const h = Math.max(64, 26 + lines.length * 25);
    ys.push([y, h, kind]);
    b += rect(150, y, 360, h, kind === 'invite' ? C.cream : C.tealLight, kind === 'invite' ? C.mustard : C.tealDark, 2.5) +
      tl(168, y + (h - lines.length * 25) / 2 + 19, lines, { size: 18, italic: true }, 25);
    b += arrow(512, y + h / 2, 540, y + h / 2, { w: 2.5 });
    b += panel(548, y, 312, h) + tl(564, y + h / 2 - 4, [n1, n2], { size: 16 }, 21);
    y += h + 12;
  });
  // discourse bracket
  const top = ys[0][0], bot = ys[4][0] + ys[4][1];
  b += path(`M130,${top + 4} L118,${top + 4} L118,${bot - 4} L130,${bot - 4}`, { stroke: C.ink, w: 3 });
  const lab = (yy, s, c) => t(60, yy, s, { size: 16, weight: 700, anchor: 'middle', fill: c });
  b += lab(ys[0][0] + 38, 'Invitation', C.olive);
  b += lab(ys[1][0] + (ys[2][0] + ys[2][1] - ys[1][0]) / 2 + 6, 'Reasons', C.tealDark);
  b += lab(ys[3][0] + (ys[4][0] + ys[4][1] - ys[3][0]) / 2 + 6, 'Invitation', C.olive);
  b += panel(40, y + 8, 820, 96, C.tealLight, C.tealDark) +
    t(64, y + 44, 'Discourse: circular structure, invitation, reasons, invitation', { size: 18, weight: 700 }) +
    t(64, y + 76, 'Overall: the café is represented as an extension of home.', { size: 17, fill: C.muted });
  add('04-cafe-leaflet-features',
    svg(900, y + 130, 'Salient features in a café leaflet', b),
    'The lesson\'s original café leaflet is split into its five sentences, each linked to a salient feature: opening and closing imperatives with domestic, informal lexis, an implied welcome for newcomers, a tricolon of parallel clauses with "our", and a presupposition that the reader will visit. A bracket shows the circular invitation, reasons, invitation structure.',
    'Name the structure, quote it and state the meaning it helps create.',
    '## Worked example: describing salient features precisely');
}

// 05 Parsing a sentence
{
  const chip = (x, y, s, fill, edge = C.ink, min = 0) => {
    const w = Math.max(min, cw(s, 20) + 28);
    return [rect(x, y, w, 50, fill, edge, 2.5, 10) + t(x + w / 2, y + 33, s, { size: 20, weight: 600, anchor: 'middle' }), w];
  };
  let b = '';
  // line 1: noun phrase
  const np = [['The', C.panel, 'determiner'], ['tired', C.cream, 'pre-modifier'], ['volunteers', C.teal, 'head'], ['who had worked all night', C.tealLight, 'post-modifier']];
  let x = 60;
  const y1 = 130;
  const spans = [];
  np.forEach(([s, f, lab]) => {
    const [c, w] = chip(x, y1, s, f, C.ink, s === 'The' ? 120 : s === 'tired' ? 130 : 0);
    b += c; spans.push([x, w, lab]); x += w + 14;
  });
  spans.forEach(([sx, w, lab], i) => {
    b += t(sx + w / 2, y1 + 78, lab, { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  });
  b += t(spans[3][0] + spans[3][1] / 2, y1 + 100, '(relative clause)', { size: 15, anchor: 'middle', fill: C.muted });
  const npEnd = spans[3][0] + spans[3][1];
  b += path(`M60,${y1 + 116} L60,${y1 + 128} L${npEnd},${y1 + 128} L${npEnd},${y1 + 116}`, { stroke: C.ink, w: 2.5 }) +
    t((60 + npEnd) / 2, y1 + 154, 'noun phrase', { size: 18, weight: 700, anchor: 'middle' });
  // line 2
  const y2 = 320;
  x = 60;
  const l2 = [['finally', C.cream], ['closed', C.teal], ['the doors.', C.panel]];
  const sp2 = [];
  l2.forEach(([s, f]) => { const [c, w] = chip(x, y2, s, f, s === 'the doors.' ? C.panelEdge : C.ink, s === 'finally' ? 170 : s === 'closed' ? 240 : 0); b += c; sp2.push([x, w]); x += w + 14; });
  b += tl(sp2[0][0] + sp2[0][1] / 2, y2 + 78, ['adverbial:', 'end of a long', 'effort'], { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }, 20);
  b += tl(sp2[1][0] + sp2[1][1] / 2, y2 + 78, ['simple past, main verb;', 'dynamic, material process'], { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }, 20);
  // verb phrase note on the right
  b += panel(40, 462, 820, 92, C.panel) +
    t(64, 496, 'Two verb phrases', { size: 19, weight: 700 }) +
    t(300, 496, '"had worked": past perfect, placing the work before the closing', { size: 17 }) +
    t(300, 528, '"closed": simple past, the main verb', { size: 17 });
  b += panel(40, 572, 820, 150, C.cream, C.mustard) +
    t(64, 607, 'Not', { size: 18, weight: 700, fill: C.rust }) + t(110, 607, '"a long sentence"', { size: 18, italic: true }) +
    t(64, 640, 'But', { size: 18, weight: 700, fill: C.tealDark }) +
    tl(110, 640, ['a complex sentence with a post-modifying relative clause that delays', 'the verb, so the volunteers\' effort is foregrounded before the action,', 'building sympathy and admiration.'], { size: 18 }, 25);
  add('05-parsing-a-sentence',
    svg(900, 750, 'Describing grammar precisely', b),
    'The sentence "The tired volunteers who had worked all night finally closed the doors" is split into chips. The noun phrase is labelled determiner, pre-modifier, head and post-modifying relative clause; "finally" is an adverbial and "closed" a simple past main verb, with "had worked" in the past perfect. A note replaces "a long sentence" with a precise description.',
    'Accurate grammatical description lets you make a confident claim about meaning.',
    '## Worked example: getting grammar right');
}

// 06 Children's data through the levels
{
  const rows = [
    ['Phonology', 'substitution, deletion, reduplication'],
    ['Lexis and semantics', 'overextension and underextension'],
    ['Grammar', 'inflections, negatives, questions'],
    ['Pragmatics', 'turn-taking, politeness'],
    ['Writing', 'graphology and orthography'],
  ];
  let b = '';
  rows.forEach(([l, d], i) => {
    const y = 115 + i * 74;
    b += panel(40, y, 580, 62) + rect(52, y + 9, 210, 44, i === 4 ? C.cream : C.teal, C.ink, 2, 10) +
      t(157, y + 38, l, { size: 17, weight: 700, anchor: 'middle' }) + t(282, y + 38, d, { size: 17 });
    b += path(`M620,${y + 31} C670,${y + 31} 650,${y + 31 + (300 - (y + 31)) * 0.6} 690,300`, { stroke: C.tealDark, w: 2.5 });
  });
  b += rect(690, 240, 170, 120, C.tealLight, C.tealDark, 3) + tl(775, 290, ['1. Describe', 'the data'], { size: 18, weight: 700, anchor: 'middle' }, 24);
  b += arrow(775, 360, 775, 420, { w: 4 });
  b += rect(690, 425, 170, 80, C.cream, C.mustard, 3) + tl(775, 458, ['2. Then', 'theory'], { size: 18, weight: 700, anchor: 'middle' }, 24);
  add('06-levels-for-child-data',
    svg(900, 535, 'The same levels for children\'s language', b),
    'Five levels applied to children\'s data: phonological processes such as substitution, deletion and reduplication; over- and underextension; inflections, negatives and questions; turn-taking and politeness; and graphology and orthography in writing. All feed into describing the data first, with theory following.',
    'Describe the child\'s language level by level first; bring in theory after.',
    '## Applying methods to children\'s data (Section B)');
}

// 07 Identify, describe, analyse
{
  const steps = [
    ['Identify', 'name the feature accurately', '"a relative clause"'],
    ['Describe', 'say what it is and how it is formed', '"a post-modifying relative clause in the noun phrase"'],
    ['Analyse', 'explain how it creates meaning in context', '"it delays the verb, so effort is foregrounded"'],
  ];
  let b = '';
  steps.forEach(([h, d, ex], i) => {
    const x = 40 + i * 50, y = 115 + i * 120, w = 820 - i * 50;
    b += panel(x, y, w - (2 - i) * 0, 104, i === 2 ? C.tealLight : C.panel, i === 2 ? C.tealDark : C.panelEdge) +
      badge(x + 40, y + 52, 22, String(i + 1), [C.cream, C.teal, C.mustard][i]) +
      t(x + 80, y + 42, h, { size: 22, weight: 700 }) + t(x + 200, y + 42, d, { size: 17, fill: C.muted }) +
      t(x + 80, y + 78, ex, { size: 17, italic: true });
  });
  b += t(450, 495, 'Paper 1 analysis questions need all three', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += panel(40, 520, 820, 100, C.cream, C.mustard) +
    t(64, 556, 'Plan by meaning first, then select levels', { size: 19, weight: 700 }) +
    t(64, 588, 'Decide what the text represents, then find the salient features that build it.', { size: 17, fill: C.muted });
  add('07-identify-describe-analyse',
    svg(900, 650, 'Identify, describe, analyse', b),
    'Three stepped stages using the lesson\'s grammar example: identify names the feature (a relative clause), describe says how it is formed (a post-modifying relative clause in the noun phrase), and analyse explains its meaning (it delays the verb so effort is foregrounded). A note advises planning by meaning before choosing levels.',
    'Paper 1 analysis needs all three steps, not just a feature name.',
    '## Exam technique');
}
