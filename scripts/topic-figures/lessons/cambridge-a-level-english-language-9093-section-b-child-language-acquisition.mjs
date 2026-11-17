import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-language-9093-section-b-child-language-acquisition';
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

// 01 Stages with rough ages
{
  const st = [
    ['Pre-verbal', '0-4 months', 'crying, cooing; vowel-like sounds, comfort noises', ''],
    ['Babbling', 'about 6-12 months', 'repeated, then varied syllables; home-language intonation', '"bababa", "bada"'],
    ['Holophrastic', 'about 12-18 months', 'single words carrying whole-utterance meanings', '"up" = "pick me up"'],
    ['Two-word', 'about 18-24 months', 'two-word combinations with consistent order', '"daddy shoe", "more juice"'],
    ['Telegraphic', 'about 24-36 months', 'content words; function words and inflections missing', '"mummy put cup table"'],
    ['Post-telegraphic', 'from about 3 years', 'function words, inflections, inverted questions, joined clauses', ''],
  ];
  let b = '';
  st.forEach(([n, age, d, ex], i) => {
    const y = 115 + i * 84;
    b += rect(40, y, 220, 72, [C.panel, C.tealLight, C.teal, C.teal, C.cream, C.sand][i], C.ink, 2.5, 10) +
      t(150, y + 32, n, { size: 18, weight: 700, anchor: 'middle' }) + t(150, y + 56, age, { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
    b += panel(272, y, 588, 72) + tl(290, y + (ex ? 30 : 42) - (ex ? 0 : (wrap(d, 58).length - 1) * 10), wrap(d, 58), { size: 16 }, 20) +
      (ex ? t(290, y + 58, ex, { size: 16, italic: true, weight: 600, fill: C.olive }) : '');
  });
  b += panel(40, 625, 820, 60, C.cream, C.mustard) + t(450, 662, 'Ages are approximate and vary widely: rough guides, never rules.', { size: 17, weight: 700, anchor: 'middle' });
  add('01-stages-and-ages',
    svg(900, 710, 'Early stages with rough ages', b),
    'Six stages with the lesson\'s rough ages and examples: pre-verbal crying and cooing (0 to 4 months), babbling such as "bababa" (about 6 to 12 months), holophrastic "up" for "pick me up" (12 to 18 months), two-word "more juice" (18 to 24 months), telegraphic "mummy put cup table" (24 to 36 months) and post-telegraphic speech from about 3 years.',
    'Learn the order; treat the ages as rough guides only.',
    '## Knowledge 1: the main stages of early development');
}

// 02 Development from 3 to 8
{
  const seq = (y, title, steps) => {
    let s = t(40, y, title, { size: 19, weight: 700 });
    steps.forEach((st, i) => {
      if (!st) { s += arrow(40 + 252, y + 56, 40 + 2 * 285 - 3, y + 56, { w: 3.5 }); return; }
      const [ex, lab] = st;
      const x = 40 + i * 285;
      s += rect(x, y + 14, 250, 84, [C.panel, C.tealLight, C.teal][i], C.ink, 2.5, 10) +
        t(x + 125, y + 50, ex, { size: 18, italic: true, weight: 600, anchor: 'middle' }) + t(x + 125, y + 80, lab, { size: 15, anchor: 'middle', fill: C.muted });
      if (i < 2 && steps[i + 1]) s += arrow(x + 252, y + 56, x + 282, y + 56, { w: 3.5 });
    });
    return s;
  };
  let b = seq(130, 'Questions', [['"Where daddy going?"', 'wh-word, no inversion'], null, ['"Where is daddy going?"', 'adult form, inverted']]);
  b += seq(260, 'Negation', [['"no bed"', '"no" at the front'], ['"I no want it"', 'inside the sentence'], ['"I don\'t want it"', 'adult auxiliary']]);
  const more = [
    ['Grammar', '"and" coordination gives way to "because", "when", "if"; more accurate irregulars; passives later'],
    ['Narrative', '"and then", "after that", "suddenly"; scene-setting for a listener'],
    ['Pragmatics', 'turn-taking, politeness, adjusting for younger listeners, repairing misunderstandings'],
  ];
  more.forEach(([h, d], i) => {
    const y = 395 + i * 78;
    const dl = wrap(d, 60);
    b += panel(40, y, 820, 66) + t(60, y + 39, h, { size: 18, weight: 700, fill: C.tealDark }) + tl(200, y + 33 - (dl.length - 1) * 10 + 6, dl, { size: 16 }, 20);
  });
  add('02-development-3-to-8',
    svg(900, 640, 'Development between 3 and 8', b),
    'Questions move from "Where daddy going?" without inversion to "Where is daddy going?". Negation moves from "no bed" to "I no want it" to "I don\'t want it". Below, later development in grammar (subordination with because, when and if), narrative sequencing and pragmatics such as politeness and repair.',
    'Development continues after 3: questions, negation, subordination, narrative and pragmatics.',
    '## Knowledge 1: the main stages of early development');
}

// 03 Phonological processes
{
  const rows = [
    ['Deletion', 'final consonant or unstressed syllable', 'ca', 'cat', 'nana', 'banana'],
    ['Cluster reduction', 'a consonant cluster is reduced', 'pider', 'spider'],
    ['Substitution', 'an easier sound, e.g. /w/ for /r/', 'wed', 'red'],
    ['Assimilation', 'a sound changes to match another', 'gog', 'dog'],
    ['Reduplication', 'a syllable is repeated', 'dada', '', 'bibi', ''],
  ];
  let b = '';
  rows.forEach(([p, d, c1, a1, c2, a2], i) => {
    const y = 115 + i * 84;
    b += panel(40, y, 820, 72) + t(60, y + 32, p, { size: 19, weight: 700 }) + t(60, y + 56, d, { size: 15, fill: C.muted });
    const chip = (x, c, a) => rect(x, y + 14, 90, 44, C.cream, C.mustard, 2, 9) + t(x + 45, y + 43, `"${c}"`, { size: 17, italic: true, weight: 600, anchor: 'middle' }) +
      (a ? t(x + 100, y + 43, `for "${a}"`, { size: 15, fill: C.muted }) : '');
    b += chip(420, c1, a1);
    if (c2) b += chip(640, c2, a2);
  });
  b += panel(40, 545, 820, 70, C.tealLight, C.tealDark) +
    t(450, 588, 'Name the process, quote the form, explain it: simplification is systematic, not random.', { size: 17, weight: 700, anchor: 'middle' });
  add('03-phonological-processes',
    svg(900, 640, 'Phonological simplification in transcripts', b),
    'Five processes with the lesson\'s examples: deletion ("ca" for "cat", "nana" for "banana"), consonant cluster reduction ("pider" for "spider"), substitution of /w/ for /r/ ("wed" for "red"), assimilation ("gog" for "dog") and reduplication ("dada", "bibi").',
    'Children simplify sounds systematically; name the process each time.',
    '## Phonological features in transcripts');
}

// 04 Halliday's functions
{
  const fn = [
    ['Instrumental', 'getting needs met', 'Want biscuit.'],
    ['Regulatory', 'controlling others\' behaviour', 'Stop it!'],
    ['Interactional', 'building relationships', 'Love you, mummy.'],
    ['Personal', 'expressing feelings and identity', 'Me sad.'],
    ['Representational', 'conveying information', 'Doggy gone outside.'],
    ['Heuristic', 'exploring and finding out', 'What that?'],
    ['Imaginative', 'creating imagined worlds', 'I\'m a lion, roar!'],
  ];
  let b = t(450, 98, 'M.A.K. Halliday', { size: 18, anchor: 'middle', fill: C.muted });
  fn.forEach(([f, p, ex], i) => {
    const y = 118 + i * 66;
    b += rect(40, y, 210, 54, i % 2 ? C.tealLight : C.teal, C.ink, 2, 9) + t(145, y + 33, f, { size: 17, weight: 700, anchor: 'middle' }) +
      t(270, y + 33, p, { size: 16 }) +
      rect(580, y, 280, 54, C.cream, C.mustard, 2, 27) + t(720, y + 33, `"${ex}"`, { size: 17, italic: true, anchor: 'middle', weight: 600 });
  });
  b += panel(40, 590, 820, 80, C.panel, C.tealDark) +
    t(64, 622, 'One utterance, more than one function', { size: 17, weight: 700, fill: C.tealDark }) +
    t(64, 650, '"What that noise?" may be heuristic and, if the child is frightened, personal.', { size: 16 });
  add('04-halliday-functions',
    svg(900, 695, 'Seven functions of children\'s language', b),
    'Halliday\'s seven functions with the lesson\'s child examples: instrumental ("Want biscuit."), regulatory ("Stop it!"), interactional ("Love you, mummy."), personal ("Me sad."), representational ("Doggy gone outside."), heuristic ("What that?") and imaginative ("I\'m a lion, roar!"). A note shows one utterance serving two functions.',
    'Say what an utterance does, and notice when it does two things at once.',
    '## Knowledge 2: the functions of children\'s language');
}

// 05 Five theories: claim, for, against
{
  const th = [
    ['Imitation and reinforcement', 'B.F. Skinner', 'imitate adults, rewarded for success', 'accent, vocabulary, routines ("ta") are copied', '"goed", "mouses" were never heard'],
    ['LAD', 'Noam Chomsky', 'an innate capacity for grammar', 'overgeneralisation; Berko\'s "wug" test (1958)', 'little on interaction; no physical device found'],
    ['LASS', 'Jerome Bruner', 'caregivers scaffold through routines', 'adults structure turns in transcripts', 'children with less interaction still acquire language'],
    ['Cognitive', 'Jean Piaget', 'language follows thought', '"allgone", "more" follow object permanence', 'some with cognitive difficulties have strong language'],
  ];
  let b = t(370, 128, 'Claim', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) + t(570, 128, 'For', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(765, 128, 'Against', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  th.forEach(([n, who, cl, f, a], i) => {
    const y = 142 + i * 108;
    b += rect(40, y, 230, 98, [C.teal, C.tealLight, C.cream, C.sand][i], C.ink, 2.5, 10) +
      tl(155, y + 40 - (wrap(n, 16).length - 1) * 10, wrap(n, 16), { size: 17, weight: 700, anchor: 'middle' }, 20) + t(155, y + 74, who, { size: 15, anchor: 'middle', fill: C.muted });
    b += panel(280, y, 180, 98) + tl(294, y + 49 - (wrap(cl, 18).length - 1) * 10 + 6, wrap(cl, 18), { size: 15 }, 20);
    b += rect(470, y, 200, 98, C.tealLight, C.tealDark, 2, 10) + tl(484, y + 49 - (wrap(f, 22).length - 1) * 10 + 6, wrap(f, 22), { size: 15 }, 20);
    b += rect(680, y, 180, 98, C.panel, C.rust, 2, 10) + tl(694, y + 49 - (wrap(a, 19).length - 1) * 10 + 6, wrap(a, 19), { size: 15 }, 20);
  });
  b += panel(40, 580, 820, 100, C.cream, C.mustard) +
    t(64, 614, 'Child-directed (caretaker) speech', { size: 18, weight: 700 }) +
    t(64, 642, 'higher pitch, exaggerated intonation, simple vocabulary, repetition, questions, expansions, recasts', { size: 15 }) +
    t(64, 666, 'supports interactionist views, but is not used the same way in every culture', { size: 15, fill: C.muted });
  add('05-theories-for-against',
    svg(900, 705, 'Five ideas: claim, evidence, limitation', b),
    'Four theories, each with its claim, evidence for and a limitation: Skinner\'s imitation and reinforcement, Chomsky\'s language acquisition device, Bruner\'s language acquisition support system and Piaget\'s cognitive theory. A fifth panel lists features of child-directed speech, which supports interactionist views but varies across cultures.',
    'Know each theory\'s claim, the evidence for it and a limitation.',
    '## Knowledge 3: theories and theorists');
}

// 06 Transcript conventions
{
  const keys = [
    ['(.)', 'micro-pause'], ['(2)', 'pause, about two seconds'], ['//  [ ]', 'overlapping speech'],
    ['bold or underline', 'stress'], ['↗  ↘', 'rising or falling intonation'], ['/slashes/', 'phonemic transcription'], ['[points at dog]', 'context note'],
  ];
  let b = t(450, 98, 'Always read the key: conventions vary', { size: 18, anchor: 'middle', fill: C.muted });
  keys.forEach(([s, m], i) => {
    const col = i < 4 ? 0 : 1, row = i < 4 ? i : i - 4;
    const x = 40 + col * 420, y = 118 + row * 70;
    b += panel(x, y, 400, 58) + rect(x + 10, y + 8, 160, 42, C.cream, C.mustard, 2, 8) +
      t(x + 90, y + 36, s, { size: 17, weight: 700, anchor: 'middle', italic: s.startsWith('[') }) + t(x + 186, y + 36, m, { size: 16 });
  });
  b += t(450, 430, 'These marks are evidence', { size: 19, weight: 700, anchor: 'middle' });
  b += panel(40, 450, 400, 120, C.tealLight, C.tealDark) + t(64, 485, '"Juice?" with rising intonation', { size: 17, weight: 700 }) +
    tl(64, 515, ['turns a holophrase into a question'], { size: 16 }, 22);
  b += panel(460, 450, 400, 120, C.tealLight, C.tealDark) + t(484, 485, 'An adult\'s pause', { size: 17, weight: 700 }) +
    tl(484, 515, ['can be a deliberate space for the', 'child\'s turn'], { size: 16 }, 22);
  add('06-transcript-conventions',
    svg(900, 595, 'Reading transcript conventions', b),
    'A key of common transcript conventions: (.) for a micro-pause, (2) for a two-second pause, slashes or brackets for overlap, bold or underlining for stress, arrows for intonation, slashes around phonemic transcription, and bracketed context notes. Two examples show rising intonation turning "Juice?" into a question and an adult\'s pause leaving space for the child.',
    'Pauses, overlaps and intonation are evidence, not decoration.',
    '## Knowledge 4: transcript conventions');
}

// 07 Worked transcript
{
  const lines = [
    ['AVA', 'cow (.) cow eated the grass ↗', 'virtuous error "eated"; article omitted', 'child'],
    ['DAD', 'yes (.) the cow ate the grass (.) what\'s the horse doing', 'recast "ate"; wh-question hands over the turn', 'adult'],
    ['AVA', 'horsey (.) horsey jumping (2) big jump', 'telegraphic: auxiliary missing', 'child'],
    ['DAD', 'a big jump (.) wow', 'repeats and praises', 'adult'],
    ['AVA', 'me do it // me do it', 'regulatory and personal; subject "me"', 'child'],
    ['DAD', '// you do it (.) careful', 'overlap', 'adult'],
  ];
  let b = t(40, 128, 'Ava, about 2;6, playing with a toy farm with her father (invented transcript)', { size: 15, fill: C.muted });
  let y = 142;
  lines.forEach(([sp, u, note, who]) => {
    const ul = wrap(u, 30), nl = wrap(note, 30);
    const h = Math.max(ul.length, nl.length) * 22 + 24;
    const child = who === 'child';
    b += rect(40, y, 90, h, child ? C.cream : C.tealLight, child ? C.mustard : C.tealDark, 2, 9) + t(85, y + h / 2 + 6, sp, { size: 16, weight: 700, anchor: 'middle' });
    b += panel(138, y, 380, h) + tl(156, y + h / 2 + 6 - (ul.length - 1) * 11, ul, { size: 17, italic: true }, 22);
    b += arrow(520, y + h / 2, 542, y + h / 2, { w: 2.5 });
    b += tl(550, y + h / 2 + 6 - (nl.length - 1) * 11, nl, { size: 15, fill: child ? C.olive : C.tealDark, weight: 600 }, 22);
    y += h + 8;
  });
  b += panel(40, y + 8, 400, 104, C.cream, C.mustard) + t(64, y + 40, 'Supports Chomsky', { size: 17, weight: 700 }) +
    tl(64, y + 68, ['"eated" is inferred, not copied;', 'compare Berko\'s "wug" test'], { size: 15 }, 21);
  b += panel(460, y + 8, 400, 104, C.tealLight, C.tealDark) + t(484, y + 40, 'Supports Bruner\'s LASS', { size: 17, weight: 700 }) +
    tl(484, y + 68, ['recast without correction; the', 'wh-question scaffolds Ava\'s turn'], { size: 15 }, 21);
  add('07-worked-transcript',
    svg(900, y + 135, 'Reading the transcript: Ava, about 2;6', b),
    'The lesson\'s invented transcript of Ava and her father, annotated: Ava\'s virtuous error "eated", omitted article and auxiliary, and "me do it" as regulatory and personal; her father\'s recast "ate", wh-question, praise and overlap. Two boxes weigh the evidence for Chomsky and for Bruner\'s LASS.',
    'Use both speakers, and weigh two theories against the same evidence.',
    '## Worked example');
}
