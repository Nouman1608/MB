import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-english-language-7702-section-b-language-discourses';
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

// 02 What a discourse is
{
  let b = rect(260, 115, 380, 90, C.cream, C.mustard, 3) + t(450, 148, 'A shared storyline', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) +
    t(450, 180, '"Young people are ruining English"', { size: 17, italic: true, weight: 600, anchor: 'middle' });
  const texts = [[70, 'Text'], [270, 'Text'], [470, 'Text'], [670, 'Text']];
  texts.forEach(([x], i) => {
    b += path(`M450,205 L${x + 80},262`, { stroke: C.olive, w: 2.5, extra: `marker-end="url(#ahO)"` });
    b += rect(x, 268, 160, 64, C.panel, C.panelEdge, 2.5, 10) + t(x + 80, 307, `text ${i + 1}`, { size: 17, anchor: 'middle', fill: C.muted });
  });
  b += t(450, 368, 'Many texts repeat it, with typical', { size: 18, anchor: 'middle' });
  ['vocabulary', 'metaphors', 'villains'].forEach((s, i) => {
    b += rect(170 + i * 200, 385, 160, 46, C.tealLight, C.tealDark, 2, 10) + t(250 + i * 200, 415, s, { size: 18, weight: 700, anchor: 'middle' });
  });
  b += panel(40, 455, 400, 130) + t(64, 490, 'Recognising it lets you', { size: 18, weight: 700 }) +
    tl(64, 520, ['• explain why a text sounds as it does', '• connect two texts that never'], { size: 16 }, 22) + t(78, 564, 'mention each other', { size: 16 });
  b += panel(460, 455, 400, 130, C.tealLight, C.tealDark) + t(484, 490, 'Verbal hygiene (Deborah Cameron)', { size: 18, weight: 700 }) +
    tl(484, 520, ['the urge to regulate and "clean up"', 'language, often about social values:', 'order, discipline, respectability'], { size: 16 }, 22);
  add('02-what-a-discourse-is',
    svg(900, 610, 'What a discourse is', b),
    'One shared storyline, "Young people are ruining English", feeds four separate texts, which repeat its typical vocabulary, metaphors and villains. Below, recognising a discourse explains how a text sounds and connects unrelated texts, and Deborah Cameron\'s verbal hygiene is defined as the urge to regulate language, often for social values.',
    'A discourse is a familiar storyline that many texts repeat, not one writer\'s idea.',
    '## What a "discourse" is');
}

// 03 Topics and competing discourses
{
  const rows = [
    ['Accents and dialects', 'barrier to success', '"holding back", "proper"', 'identity and pride', '"heritage", "roots"'],
    ['Young people\'s language', 'decline', '"lazy", "grunt"', 'creativity and innovation', '"inventive", "playful"'],
    ['Technology', 'corruption', '"destroying"', 'natural adaptation', '"evolving", "adapting"'],
    ['Americanisms', 'invasion', '"creeping", "infiltrating"', 'global exchange', '"borrowing", "shared"'],
    ['Inclusive language', 'political correctness gone mad', '"banned", "woke"', 'respect and accuracy', '"respectful", "inclusive"'],
    ['Grammar, spelling, punctuation', 'standards and correctness', '"errors", "basic rules"', 'rules as social convention', '"convention", "context"'],
    ['Endangered dialects', 'loss and nostalgia', '"dying", "vanishing"', 'natural change', '"shift", "new varieties"'],
  ];
  let b = t(140, 130, 'Topic', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(415, 130, 'One discourse', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) +
    t(705, 130, 'A competing discourse', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([topic, d1, w1, d2, w2], i) => {
    const y = 145 + i * 80;
    const tlw = wrap(topic, 18);
    b += rect(40, y, 200, 68, C.panel, C.ink, 2.5, 10) + tl(140, y + 34 - (tlw.length - 1) * 10 + 6, tlw, { size: 16, weight: 700, anchor: 'middle' }, 20);
    b += rect(258, y, 314, 68, C.cream, C.mustard, 2, 10) + t(274, y + 28, d1, { size: 17, weight: 700 }) + t(274, y + 53, w1, { size: 15, italic: true, fill: C.muted });
    b += rect(590, y, 270, 68, C.tealLight, C.tealDark, 2, 10) + t(606, y + 28, d2, { size: 17, weight: 700 }) + t(606, y + 53, w2, { size: 15, italic: true, fill: C.muted });
    b += t(581, y + 41, '↔', { size: 18, weight: 700, anchor: 'middle' });
  });
  b += t(450, 720, 'Accents also meet a third discourse: prejudice as discrimination ("unfair", "judged").', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-topics-and-discourses',
    svg(900, 745, 'Recurring topics, competing discourses', b),
    'Seven recurring topics, each with two competing discourses and their typical language: accents as a barrier or as identity, young people\'s language as decline or creativity, technology as corruption or adaptation, Americanisms as invasion or exchange, inclusive language as political correctness or respect, grammar as correctness or convention, and endangered dialects as loss or natural change.',
    'Most language topics carry at least two competing discourses, each with its own vocabulary.',
    '## Recurring topics and the discourses around them');
}

// 04 Swift and Johnson timeline
{
  let b = `<line x1="80" y1="325" x2="840" y2="325" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>`;
  const ev = [[170, '1712', 'Jonathan Swift', ['Proposal for Correcting,', 'Improving and Ascertaining', 'the English Tongue'], ['argued for fixing', 'the language'], C.cream, C.mustard],
    [450, '1755', 'Samuel Johnson', ['preface to his dictionary'], ['a living language cannot', 'be fixed entirely'], C.tealLight, C.tealDark],
    [730, 'Today', 'A modern text', ['presents decline as new'], ['concerns about decline', 'are centuries old'], C.panel, C.rust]];
  ev.forEach(([x, yr, who, work, claim, fill, edge]) => {
    b += `<circle cx="${x}" cy="325" r="12" fill="${edge}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x, 368, yr, { size: 22, weight: 700, anchor: 'middle' });
    b += rect(x - 135, 115, 270, 185, fill, edge, 2.5) + t(x, 147, who, { size: 18, weight: 700, anchor: 'middle' }) +
      tl(x, 175, work, { size: 15, italic: yr === '1712', anchor: 'middle', fill: C.muted }, 19) +
      tl(x, 252, claim, { size: 16, weight: 600, anchor: 'middle' }, 21);
  });
  b += panel(40, 400, 820, 80, C.cream, C.mustard) +
    t(450, 433, 'When a modern text treats decline as new, point out that the', { size: 17, anchor: 'middle' }) +
    t(450, 459, 'concern has been voiced since at least the eighteenth century.', { size: 17, anchor: 'middle' });
  add('04-swift-johnson-timeline',
    svg(900, 505, 'Worries about decline are not new', b),
    'A timeline: in 1712 Jonathan Swift\'s Proposal argued for fixing the English language; in 1755 the preface to Samuel Johnson\'s dictionary accepted that a living language cannot be fixed entirely; today, modern texts sometimes present decline as a new concern.',
    'Concerns about decline are centuries old, a useful point against texts that present them as new.',
    '## Recurring topics and the discourses around them');
}

// 05 Metaphors that represent language
{
  const ms = [
    ['a building', 'that crumbles', C.cream], ['a body', 'that sickens', C.cream], ['a territory', 'that is invaded', C.cream],
    ['a garden', 'that needs weeding', C.sand], ['a living organism', 'that grows', C.tealLight], ['a toolkit', 'that adapts', C.tealLight],
  ];
  let b = t(450, 125, 'What kind of thing does the text make language into?', { size: 19, weight: 700, anchor: 'middle' });
  ms.forEach(([a, c, fill], i) => {
    const x = 40 + (i % 3) * 280, y = 145 + Math.floor(i / 3) * 130;
    b += rect(x, y, 260, 110, fill, C.ink, 2.5) + t(x + 130, y + 30, 'Language as', { size: 15, anchor: 'middle', fill: C.muted }) +
      t(x + 130, y + 62, a, { size: 21, weight: 700, anchor: 'middle' }) + t(x + 130, y + 90, c, { size: 17, anchor: 'middle' });
  });
  b += panel(40, 415, 820, 110) + t(64, 450, 'Also notice whose language is represented, and how', { size: 18, weight: 700 }) +
    rect(64, 465, 370, 44, C.cream, C.mustard, 2, 9) + t(249, 493, 'quoted "errors" held up for ridicule', { size: 16, anchor: 'middle' }) +
    t(450, 493, 'or', { size: 16, anchor: 'middle', fill: C.muted }) +
    rect(466, 465, 370, 44, C.tealLight, C.tealDark, 2, 9) + t(651, 493, 'examples presented neutrally as data', { size: 16, anchor: 'middle' });
  add('05-metaphors-for-language',
    svg(900, 550, 'Representing language through metaphor', b),
    'Six metaphors for language from the lesson: a building that crumbles, a body that sickens, a territory that is invaded, a garden that needs weeding, a living organism that grows and a toolkit that adapts. Below, quoted errors held up for ridicule are contrasted with examples presented neutrally as data.',
    'Metaphor is the quickest clue to how a text represents language.',
    '## Going deeper on the four questions');
}

// 06 Personas and reader roles
{
  let b = panel(40, 115, 400, 420) + t(240, 152, 'Producer personas', { size: 21, weight: 700, anchor: 'middle' });
  ['the guardian of standards', 'the concerned parent', 'the expert', 'the insider for a community', 'the ordinary person', 'the comic observer'].forEach((s, i) => {
    b += rect(70, 172 + i * 50, 340, 40, i % 2 ? C.tealLight : C.panel, C.panelEdge, 2, 9) + t(240, 198 + i * 50, s, { size: 17, anchor: 'middle' });
  });
  b += t(240, 494, 'clues: pronouns, credentials,', { size: 15, anchor: 'middle', fill: C.muted }) + t(240, 515, 'anecdote, register, humour', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(460, 115, 400, 420) + t(660, 152, 'Roles for the reader', { size: 21, weight: 700, anchor: 'middle' });
  [['fellow sufferer', C.cream], ['pupil', C.cream], ['ally', C.teal], ['opponent', C.panel]].forEach(([s, f], i) => {
    const x = 490 + (i % 2) * 175, y = 175 + Math.floor(i / 2) * 80;
    b += rect(x, y, 160, 62, f, C.ink, 2.5, 10) + t(x + 80, y + 38, s, { size: 18, weight: 700, anchor: 'middle' });
  });
  b += t(484, 365, 'built through', { size: 16, weight: 700, fill: C.muted }) +
    tl(484, 393, ['inclusive "we" and "our"; direct address;', 'presupposition; "everyone knows";', 'rhetorical questions; irony; an out-group', '("these so-called experts", "snobs")'], { size: 16 }, 22);
  b += panel(40, 555, 820, 90, C.cream, C.mustard) +
    t(64, 590, 'A persona can be inconsistent, and that is analysable:', { size: 18, weight: 700 }) +
    t(64, 620, 'a writer attacking informality while writing informally; an expert using emotive language.', { size: 16, fill: C.muted });
  add('06-personas-and-reader-roles',
    svg(900, 670, 'Who is speaking, and who is the reader made to be?', b),
    'Six common producer personas, from the guardian of standards to the comic observer, beside four roles a text can give its reader: fellow sufferer, pupil, ally or opponent, built through inclusive pronouns, presupposition, rhetorical questions, irony and out-groups. A note says inconsistent personas are analysable.',
    'Identify the producer\'s persona and the role the reader is pushed into.',
    '## Going deeper on the four questions');
}

// 07 Worked comparison
{
  const rows = [
    ['Represents accent', 'a "handicap": a deficit in the speaker', 'the problem is "how some people listen"'],
    ['Producer identity', 'speaks for employers', 'the person judged: anecdote, "two degrees", "my nan"'],
    ['Positions reader', '"Let\'s be honest" presupposes an avoided truth', 'invites sympathy rather than correction'],
    ['Discourse', 'correctness: "Teach them to speak properly"', 'accent prejudice as discrimination'],
  ];
  let b = rect(250, 112, 295, 52, C.cream, C.mustard, 2.5, 10) + t(397, 136, 'Text 1', { size: 17, weight: 700, anchor: 'middle' }) + t(397, 156, 'opinion column', { size: 15, anchor: 'middle', fill: C.muted }) +
    rect(565, 112, 295, 52, C.tealLight, C.tealDark, 2.5, 10) + t(712, 136, 'Text 2', { size: 17, weight: 700, anchor: 'middle' }) + t(712, 156, 'personal blog', { size: 15, anchor: 'middle', fill: C.muted });
  rows.forEach(([q, a, c], i) => {
    const y = 178 + i * 96;
    const al = wrap(a, 28), cl = wrap(c, 28);
    b += badge(64, y + 42, 18, String(i + 1), C.cream) + tl(92, y + 42 - (wrap(q, 13).length - 1) * 10 + 6, wrap(q, 13), { size: 16, weight: 700 }, 20) +
      panel(250, y, 295, 84) + tl(266, y + 42 - (al.length - 1) * 10.5 + 6, al, { size: 16 }, 21) +
      panel(565, y, 295, 84) + tl(581, y + 42 - (cl.length - 1) * 10.5 + 6, cl, { size: 16 }, 21);
  });
  const y = 178 + 4 * 96 + 4;
  b += panel(40, y, 820, 70, C.panel, C.tealDark) +
    t(450, y + 30, 'Shared ground: both represent accent as consequential at work,', { size: 17, anchor: 'middle', weight: 600 }) +
    t(450, y + 54, 'but locate the problem in different places.', { size: 17, anchor: 'middle', weight: 600 });
  add('07-worked-comparison',
    svg(900, y + 95, 'Two texts on accents, compared', b),
    'The lesson\'s two original texts on accents compared on four points. Text 1, an opinion column, calls accent a "handicap", speaks for employers, presupposes an avoided truth and reproduces a correctness discourse. Text 2, a personal blog, locates the problem in the listener, speaks as the person judged, invites sympathy and draws on accent prejudice as discrimination.',
    'Both see accent as consequential at work; they disagree about where the problem lies.',
    '## Worked example: two texts on accents');
}

// 08 Comparison plan
{
  const pts = [
    ['Represent', 'How does each text represent the language or speakers?'],
    ['Identity', 'What identity does each producer construct, and with what evidence?'],
    ['Position', 'How is each reader positioned, and into what role?'],
    ['Discourse', 'Which discourse does each reproduce, challenge or mix?'],
    ['Context', 'How do genre, date and audience explain the differences?'],
  ];
  let b = '';
  pts.forEach(([h, q], i) => {
    const y = 115 + i * 74;
    b += panel(40, y, 820, 62, i === 4 ? C.cream : C.panel, i === 4 ? C.mustard : C.panelEdge) +
      badge(76, y + 31, 18, String(i + 1), i === 4 ? C.mustard : C.teal) +
      t(110, y + 38, h, { size: 19, weight: 700 }) + t(240, y + 38, q, { size: 17 });
  });
  b += t(450, 520, 'Points 1 to 4 are the four questions; point 5 adds context.', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(40, 540, 820, 110, C.tealLight, C.tealDark) +
    t(64, 575, 'Often the most revealing comparison', { size: 18, weight: 700, fill: C.tealDark }) +
    t(64, 605, 'the same device used to opposite ends: both use anecdote,', { size: 17 }) +
    t(64, 630, 'one to ridicule and one to win sympathy.', { size: 17 });
  add('08-comparison-plan',
    svg(900, 675, 'Planning the comparison', b),
    'Five comparison points: how each text represents language, what identity each producer builds, how each reader is positioned, which discourse each draws on, and how genre, date and audience explain the differences. A note says a shared device used to opposite ends is often the most revealing comparison.',
    'Use the four questions as comparison points, then explain differences through context.',
    '## Building the comparison from the four questions');
}
