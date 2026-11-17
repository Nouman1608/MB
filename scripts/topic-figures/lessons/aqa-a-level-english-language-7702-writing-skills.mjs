import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-english-language-7702-writing-skills';
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

// 01 Three skills
{
  const sk = [
    ['Academic essay', 'Section A evaluative essay', '30 marks', 'Writing discursively about language issues', 'formal, cautious, evidence-led', C.teal],
    ['Analytical writing', 'Section B analysis of two texts', '40 marks', 'Writing analytically about texts as parts of discourses', 'formal, precise, comparative', C.tealLight],
    ['Directed writing', 'Section B directed writing', '30 marks', 'Writing for a non-specialist audience in a variety of forms', 'set by the form and audience', C.cream],
  ];
  let b = '';
  sk.forEach(([h, where, marks, spec, reg, fill], i) => {
    const x = 40 + i * 280;
    b += panel(x, 115, 260, 400) + rect(x + 12, 127, 236, 96, fill, C.ink, 2.5, 10) +
      t(x + 130, 162, h, { size: 20, weight: 700, anchor: 'middle' }) + t(x + 130, 200, marks, { size: 22, weight: 700, anchor: 'middle', fill: C.ink });
    b += t(x + 22, 258, 'Where', { size: 15, weight: 700, fill: C.muted }) + tl(x + 22, 282, wrap(where, 24), { size: 16 }, 21);
    b += t(x + 22, 345, 'Specification', { size: 15, weight: 700, fill: C.muted }) + tl(x + 22, 369, wrap(spec, 25), { size: 16, italic: true }, 21);
    b += `<line x1="${x + 22}" y1="430" x2="${x + 238}" y2="430" stroke="${C.panelEdge}" stroke-width="2"/>` +
      t(x + 22, 455, 'Register', { size: 15, weight: 700, fill: C.tealDark }) + tl(x + 22, 479, wrap(reg, 22), { size: 16, weight: 600 }, 20);
  });
  b += panel(40, 535, 820, 64, C.cream, C.mustard) +
    t(450, 574, 'The common thread is control: choose the register the task demands and sustain it.', { size: 17, weight: 600, anchor: 'middle' });
  add('01-three-skills',
    svg(900, 625, 'Three writing skills in Paper 2', b),
    'Three columns: the academic essay for the Section A evaluative essay (30 marks, formal, cautious and evidence-led), analytical writing for the Section B analysis of two texts (40 marks, formal, precise and comparative), and directed writing for a non-specialist audience (30 marks, register set by the form and audience).',
    'Each skill has its own register; the task decides which one you sustain.',
    '## The three skills in the specification');
}

// 02 Essay paragraph pattern
{
  const rows = [
    ['Claim', 'Technology accelerates the spread of new forms more than it creates them.', C.teal],
    ['Evidence', 'The conversion of "text" from noun to verb follows a process English has used for centuries, as in "to email" or earlier "to telephone".', C.tealLight],
    ['Explanation', 'The process is old; only the speed of diffusion is new.', C.panel],
    ['Evaluation', 'This suggests the question overstates technology\'s role as a cause, though it is central to how quickly change spreads.', C.cream],
  ];
  let b = '';
  let y = 118;
  rows.forEach(([h, s, fill], i) => {
    const l = wrap(s, 62);
    const hgt = Math.max(70, 26 + l.length * 24);
    b += rect(40, y, 170, hgt, fill, C.ink, 2.5, 10) + badge(70, y + hgt / 2, 16, String(i + 1), C.mustard) +
      t(96, y + hgt / 2 + 6, h, { size: 18, weight: 700 });
    b += panel(222, y, 638, hgt) + tl(240, y + hgt / 2 + 6 - (l.length - 1) * 12, l, { size: 17, italic: true }, 24);
    if (i < 3) b += arrow(125, y + hgt, 125, y + hgt + 16, { w: 3 });
    y += hgt + 18;
  });
  b += panel(40, y + 4, 820, 96, C.cream, C.mustard) +
    t(64, y + 38, 'Essay frame', { size: 18, weight: 700 }) +
    t(64, y + 68, 'Introduction defines terms and states a line of argument; each paragraph makes one', { size: 16, fill: C.muted }) +
    t(64, y + 90, 'evaluative claim; the conclusion answers the question with a qualified judgement.', { size: 16, fill: C.muted });
  add('02-essay-paragraph',
    svg(900, y + 125, 'An academic essay paragraph', b),
    'The lesson\'s model paragraph in four labelled steps: a claim that technology speeds the spread of new forms, evidence from the conversion of "text" from noun to verb, an explanation that only the speed is new, and an evaluation that the question overstates technology as a cause.',
    'Claim, evidence, explanation, evaluation: one evaluative claim per paragraph.',
    '## Skill 1: the academic essay');
}

// 03 Academic register upgrades
{
  const rows = [
    ['Hedging', 'certainty', '"suggests", "may", "tends to"'],
    ['Precise terminology', '"bad grammar"', '"levelled past tense of BE"'],
    ['Attribution', '"experts say"', '"Milroy\'s Belfast research indicates..."'],
    ['Signposting', 'unlinked points', '"However", "By contrast"'],
    ['Impersonal or reasoned', 'chatty first person', '"It could be argued that", "I would argue"'],
    ['Counter-argument', 'an essay that only agrees', '"This view is limited because"'],
  ];
  let b = t(370, 130, 'Avoid', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + t(690, 130, 'Use', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([f, bad, good], i) => {
    const y = 145 + i * 74;
    b += t(40, y + 38, f, { size: 17, weight: 700 }) +
      rect(260, y, 220, 60, C.panel, C.rust, 2, 10) + t(370, y + 36, bad, { size: 16, anchor: 'middle', fill: C.muted, italic: bad.startsWith('"') }) +
      arrow(484, y + 30, 516, y + 30, { w: 3 }) +
      rect(520, y, 340, 60, C.tealLight, C.tealDark, 2, 10) + tl(690, y + 36 - (wrap(good, 34).length - 1) * 10, wrap(good, 34), { size: 16, anchor: 'middle', italic: true }, 20);
  });
  add('03-academic-register',
    svg(900, 600, 'Academic register in practice', b),
    'Six features of academic register, each with what to avoid and what to use: hedging instead of certainty, "levelled past tense of BE" instead of "bad grammar", named research instead of "experts say", signposting, impersonal or reasoned first person instead of chatty first person, and counter-argument instead of only agreeing.',
    'Hedge, name, attribute and signpost; and always argue against yourself.',
    '## Skill 1: the academic essay');
}

// 04 Analytical writing
{
  let b = panel(40, 115, 400, 230) + t(240, 152, 'Leads to summary', { size: 20, weight: 700, anchor: 'middle', fill: C.rust }) +
    rect(130, 185, 220, 60, C.panel, C.rust, 2.5, 10) + t(240, 222, '"The writer says"', { size: 19, italic: true, anchor: 'middle' }) +
    tl(240, 290, ['terminology dropped in', 'with no purpose'], { size: 16, anchor: 'middle', fill: C.muted }, 22);
  b += panel(460, 115, 400, 230, C.tealLight, C.tealDark) + t(660, 152, 'Leads to analysis', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  ['represents', 'constructs', 'positions', 'frames', 'presupposes'].forEach((v, i) => {
    const x = 485 + (i % 3) * 120, y = 178 + Math.floor(i / 3) * 62;
    b += rect(x, y, 110, 46, C.panel, C.tealDark, 2, 9) + t(x + 55, y + 29, v, { size: 15, weight: 600, anchor: 'middle', italic: true });
  });
  b += t(660, 325, 'what a text does, how, and why', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(40, 365, 820, 120) + t(64, 400, 'Embed short quotations in your own syntax', { size: 19, weight: 700 }) +
    t(64, 436, 'Text A\'s verb', { size: 18, italic: true }) +
    rect(190, 413, 92, 34, C.cream, C.mustard, 2, 8) + t(236, 436, '"mangle"', { size: 18, italic: true, anchor: 'middle', weight: 600 }) +
    t(292, 436, 'represents English as a fragile object', { size: 18, italic: true }) +
    t(64, 468, 'not a long quotation followed by "this shows".', { size: 16, fill: C.muted });
  b += panel(40, 505, 820, 90) + t(64, 540, 'Comparative connectives', { size: 19, weight: 700 }) +
    t(64, 572, '"Whereas"  ·  "Similarly"  ·  "By contrast"  ·  "Both texts... but"  ·  "Where Text A..., Text B..."', { size: 16, italic: true });
  add('04-analytical-writing',
    svg(900, 620, 'Writing analytically about texts', b),
    '"The writer says" leads to summary, while verbs such as represents, constructs, positions, frames and presupposes lead to analysis. Below, a quotation embedded in the writer\'s own syntax ("Text A\'s verb \'mangle\' represents English as a fragile object") and a row of comparative connectives.',
    'Choose analytical verbs, embed short quotations and compare as you go.',
    '## Skill 2: analytical writing about texts');
}

// 05 Explaining concepts accessibly
{
  const tech = [
    ['Example first, label second', '"When you say \'gonna\' instead of \'going to\', you\'re doing what linguists call elision."'],
    ['Analogy', '"Dialects are like local recipes for the same dish: different ingredients, all of them real food."'],
    ['Everyday scenario', 'a job interview, a family argument, a classroom'],
    ['Brief definition in passing', '"prescriptivists, people who believe there\'s one correct way to speak"'],
  ];
  let b = '';
  tech.forEach(([h, ex], i) => {
    const x = 40 + (i % 2) * 420, y = 115 + Math.floor(i / 2) * 210;
    const el = wrap(ex, 38);
    b += panel(x, y, 400, 190, i === 0 ? C.tealLight : C.panel, i === 0 ? C.tealDark : C.panelEdge) +
      badge(x + 36, y + 38, 18, String(i + 1), C.mustard) + t(x + 66, y + 45, h, { size: 19, weight: 700 }) +
      tl(x + 24, y + 90, el, { size: 16, italic: ex.startsWith('"') }, 23);
  });
  b += panel(40, 545, 820, 90, C.cream, C.mustard) +
    t(450, 580, 'Real ideas (prestige, accommodation, change as natural, accent versus dialect),', { size: 17, anchor: 'middle' }) +
    t(450, 608, 'so the reader feels informed rather than lectured.', { size: 17, anchor: 'middle', weight: 600 });
  add('05-explaining-accessibly',
    svg(900, 660, 'Explaining concepts to non-specialists', b),
    'Four techniques with the lesson\'s examples: example first and label second (elision in "gonna"), analogy (dialects as local recipes), an everyday scenario such as a job interview, and a brief definition in passing for "prescriptivists". A note says real linguistic ideas should leave the reader informed rather than lectured.',
    'Carry accurate linguistic ideas in a voice the audience will read.',
    '## Skill 3: writing for a non-specialist audience');
}

// 06 Form conventions
{
  const forms = [
    ['Opinion article', ['headline; possibly a standfirst', 'clear line of argument', 'anecdote or hook', 'memorable close']],
    ['Blog post', ['personal voice', 'direct address', 'shorter paragraphs', 'informal but controlled']],
    ['Speech or talk', ['greeting to the named audience', 'inclusive pronouns', 'triples, repetition', 'signposting; call to action']],
    ['Letter', ['salutation and sign-off', 'clear reason for writing', 'courteous register']],
    ['Leaflet or guide', ['headings, short sections', 'imperatives', 'practical advice']],
  ];
  let b = '';
  forms.forEach(([h, items], i) => {
    const col = i < 3 ? i : i - 3;
    const x = i < 3 ? 40 + col * 280 : 180 + col * 280, y = i < 3 ? 115 : 385;
    b += panel(x, y, 260, i < 3 ? 250 : 200) + rect(x + 12, y + 12, 236, 46, [C.teal, C.tealLight, C.cream, C.sand, C.tealLight][i], C.ink, 2, 9) +
      t(x + 130, y + 42, h, { size: 19, weight: 700, anchor: 'middle' });
    let yy = y + 92;
    items.forEach((it) => {
      const l = wrap(it, 24);
      b += `<circle cx="${x + 28}" cy="${yy - 6}" r="5" fill="${C.tealDark}"/>` + tl(x + 42, yy, l, { size: 16 }, 20);
      yy += l.length * 20 + 12;
    });
  });
  b += t(450, 615, 'A standfirst is a short summary line under the headline.', { size: 16, anchor: 'middle', fill: C.muted });
  add('06-form-conventions',
    svg(900, 640, 'Conventions of the named form', b),
    'Five forms with their conventions: an opinion article (headline, standfirst, line of argument, hook, memorable close), a blog post (personal voice, direct address, shorter paragraphs), a speech or talk (greeting, inclusive pronouns, rhetorical patterning, call to action), a letter (salutation, reason for writing, courteous register) and a leaflet or guide (headings, imperatives, practical advice).',
    'Use the conventions of the form the task names.',
    '## Skill 3: writing for a non-specialist audience');
}

// 07 Openings, endings and voice slips
{
  let b = panel(40, 115, 400, 290) + t(240, 152, 'Openings', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  ['an anecdote', 'a provocative question', 'a striking quotation', 'a familiar scenario'].forEach((s, i) => {
    b += rect(70, 172 + i * 55, 340, 44, C.tealLight, C.panelEdge, 2, 9) + t(240, 200 + i * 55, s, { size: 17, anchor: 'middle' });
  });
  b += panel(460, 115, 400, 290) + t(660, 152, 'Endings', { size: 21, weight: 700, anchor: 'middle', fill: C.olive });
  ['return to the opening image', 'a call to action', 'a reframed question', 'a short punchy statement'].forEach((s, i) => {
    b += rect(490, 172 + i * 55, 340, 44, C.cream, C.panelEdge, 2, 9) + t(660, 200 + i * 55, s, { size: 17, anchor: 'middle' });
  });
  b += path('M410,194 C450,194 450,194 490,194', { w: 2.5, stroke: C.olive, extra: 'stroke-dasharray="6 5" marker-end="url(#ahO)"' });
  b += t(450, 445, 'Sustaining the voice: three slips to watch for', { size: 20, weight: 700, anchor: 'middle' });
  ['essay phrasing ("This essay will argue") in an article', 'unexplained terms creeping back in when you discuss research', 'a closing paragraph that becomes a summary, not an ending'].forEach((s, i) => {
    const y = 465 + i * 62;
    b += panel(40, y, 820, 52, C.panel, C.rust) + t(64, y + 33, '✗', { size: 19, weight: 700, fill: C.rust }) + t(94, y + 33, s, { size: 17 });
  });
  b += t(450, 680, 'Read it as the named audience would: same writer, same reader, every paragraph.', { size: 16, anchor: 'middle', fill: C.muted });
  add('07-openings-endings-voice',
    svg(900, 705, 'Openings, endings and a steady voice', b),
    'Four openings (an anecdote, a provocative question, a striking quotation, a familiar scenario) beside four endings (return to the opening image, a call to action, a reframed question, a short punchy statement). Below, three slips that break the voice: essay phrasing in an article, unexplained terms, and a summary instead of an ending.',
    'Choose a strong way in and out, and keep one voice in between.',
    '## Skill 3: writing for a non-specialist audience');
}

// 08 One idea, three ways
{
  const cols = [
    ['Academic essay', C.teal, '"Negative evaluations of regional accents appear to reflect attitudes towards speakers rather than any linguistic deficiency."', ['hedged ("appear to")', 'impersonal', 'research cited']],
    ['Analytical writing', C.tealLight, '"Text B challenges the deficit discourse by relocating the problem from speaker to listener."', ['analytical verbs', 'names features', 'compares texts']],
    ['Directed writing', C.cream, '"Picture two candidates with the same grades. One says \'bath\' like a newsreader; the other says it like her nan."', ['direct address', 'everyday scenario', 'short sentences']],
  ];
  let b = rect(130, 112, 640, 64, C.panel, C.ink, 2.5) + t(450, 138, 'One idea', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(450, 162, 'Regional accents are judged unfairly; the judgement is social, not linguistic.', { size: 16, italic: true, anchor: 'middle' });
  cols.forEach(([h, fill, ex, feats], i) => {
    const x = 40 + i * 280;
    b += arrow(450, 176, x + 130, 206, { w: 2.5 });
    b += panel(x, 212, 260, 318) + rect(x + 12, 224, 236, 46, fill, C.ink, 2, 9) + t(x + 130, 254, h, { size: 19, weight: 700, anchor: 'middle' }) +
      tl(x + 22, 302, wrap(ex, 25), { size: 16, italic: true }, 22);
    b += `<line x1="${x + 22}" y1="430" x2="${x + 238}" y2="430" stroke="${C.panelEdge}" stroke-width="2"/>`;
    feats.forEach((f, k) => { b += t(x + 22, 458 + k * 26, '• ' + f, { size: 16, fill: C.tealDark, weight: 600 }); });
  });
  b += t(450, 562, 'Same idea; register, sentence structure, address and evidence change with the task.', { size: 16, anchor: 'middle', fill: C.muted });
  add('08-one-idea-three-ways',
    svg(900, 585, 'One idea, three ways', b),
    'The idea that regional accents are judged unfairly is written three ways: an academic sentence with hedging, an analytical sentence about Text B relocating the problem from speaker to listener, and the start of a school magazine article for parents with an everyday scenario and direct address.',
    'The linguistic idea stays the same; the register follows the task.',
    '## Worked example: one idea, three ways');
}
