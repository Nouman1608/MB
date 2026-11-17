import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-english-language-9670-section-a-learning-language';
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


// 01 What Section A requires
{
  let b = panel(30, 110, 840, 150);
  b += t(55, 146, 'Unit 3 exam', { size: 20, weight: 700 }) + t(845, 146, '2 hours · 50 marks · 30% of the A-level', { size: 18, anchor: 'end', fill: C.muted, weight: 600 });
  b += box(55, 166, 395, 70, C.cream, C.olive) + t(252, 198, 'Section A: Learning language', { size: 18, weight: 700, anchor: 'middle' }) + t(252, 222, '25 marks', { size: 17, anchor: 'middle' });
  b += box(450, 166, 395, 70, '#ffffff', C.panelEdge) + t(647, 208, 'Section B', { size: 18, weight: 600, anchor: 'middle', fill: C.muted });
  b += t(450, 300, 'Choose one question from two: read both questions and their data first', { size: 18, weight: 700, anchor: 'middle' });
  b += box(120, 318, 300, 64, C.tealLight, C.tealDark) + t(270, 357, 'Question 1 + data', { size: 18, weight: 700, anchor: 'middle' });
  b += box(480, 318, 300, 64, C.tealLight, C.tealDark) + t(630, 357, 'Question 2 + data', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 357, 'or', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  b += panel(30, 404, 410, 170) + t(55, 440, 'Data can be', { size: 19, weight: 700 });
  ['speech', 'writing', 'multimodal'].forEach((s, i) => { b += pill(55 + i * 125, 458, 115, 38, s, { fill: C.tealLight, edge: C.tealDark, size: 16 }); });
  b += t(55, 532, 'from native speakers or', { size: 17, fill: C.muted }) + t(55, 556, 'speakers of English as an additional language', { size: 16, fill: C.muted });
  b += panel(460, 404, 410, 170) + t(485, 440, 'You must show', { size: 19, weight: 700 });
  ['knowledge of theories and approaches', 'skills in data analysis', 'academic argument and evaluation'].forEach((s, i) => { b += badge(502, 474 + i * 36, 15, String(i + 1), C.cream) + t(528, 480 + i * 36, s, { size: 16 }); });
  add('01-section-requirements',
    svg(900, 600, 'Section A: Learning language', b),
    'Unit 3 is a 2-hour exam worth 50 marks and 30% of the A-level; Section A is worth 25 marks and offers a choice of two questions, each with data. The data can be speech, writing or multimodal, from native or EAL speakers, and answers must show knowledge of theories, data analysis and academic argument.',
    'One question from two, 25 marks: read both sets of data before choosing.',
    '## What the section requires');
}

// 02 The span of development
{
  const per = [
    ['Early childhood', '0–5', C.cream, ['phonological simplification', 'first words, telegraphic speech', 'overgeneralisation', 'caregiver interaction']],
    ['Primary years', '5–11', C.tealLight, ['literacy and spelling', 'longer narratives', 'subordinate clauses', 'growing pragmatic control']],
    ['Adolescence', '11–18', C.teal, ['complex syntax', 'abstract, academic vocabulary', 'register control', 'peer-group slang, identity']],
  ];
  let b = arrow(40, 160, 865, 160, { w: 6, color: C.olive, marker: 'ahO' });
  per.forEach(([h, age, fill, items], i) => {
    const x = 30 + i * 283;
    b += `<circle cx="${x + 135}" cy="160" r="11" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(x + 135, 136, `age ${age}`, { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
    b += panel(x, 190, 270, 300) + `<rect x="${x}" y="190" width="270" height="52" rx="14" fill="${fill}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + t(x + 135, 224, h, { size: 20, weight: 700, anchor: 'middle' });
    items.forEach((s, k) => { b += `<circle cx="${x + 26}" cy="${276 + k * 52}" r="5" fill="${C.tealDark}"/>` + tl(x + 40, 282 + k * 52, wrap(s, 24), { size: 16 }, 20); });
  });
  b += t(450, 530, 'A continuum, not a set of toddler stages: the specification includes teenagers.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('02-span-of-development',
    svg(900, 560, 'Learning language: a continuum from 0 to 18', b),
    'A timeline in three periods. Early childhood (0–5): phonological simplification, first words, telegraphic speech, overgeneralisation, caregiver interaction. Primary years (5–11): literacy, spelling, longer narratives, subordinate clauses, pragmatic control. Adolescence (11–18): complex syntax, academic vocabulary, register control, slang and identity.',
    'Development continues through the primary years and adolescence, not just early childhood.',
    '## The span of development');
}

// 03 Later development: four areas
{
  const areas = [
    ['Grammar', C.teal, [['passives', '“the window was broken by the ball”'], ['embedded and relative clauses', '“the girl who won the race”'], ['nominalisation', '“the reduction of waste”'], ['cohesive devices', '“however”, “as a result”']]],
    ['Vocabulary', C.cream, [['abstract and subject-specific', 'learned through reading and school'], ['polysemy and figurative meaning', 'idioms, sarcasm, irony']]],
    ['Pragmatics', C.tealLight, [['adjusting register', 'for different audiences'], ['politeness strategies', 'e.g. indirect requests'], ['conversational repair', 'and topic shifts']]],
    ['Adolescent identity', C.mustard, [['slang, discourse markers', '“like”, “innit”'], ['Eckert (1989), Detroit-area school', 'variation linked to adolescent social categories'], ['Multicultural London English', 'Cheshire, Kerswill and colleagues']]],
  ];
  let b = '';
  const H = [300, 300, 250, 250];
  areas.forEach(([h, fill, items], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 318;
    const ph = i < 2 ? 300 : 300;
    b += panel(x, y, 410, ph) + `<rect x="${x}" y="${y}" width="410" height="50" rx="14" fill="${fill}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + t(x + 205, y + 33, h, { size: 21, weight: 700, anchor: 'middle' });
    const step = items.length === 4 ? 58 : items.length === 3 ? 74 : 100;
    items.forEach(([a, c], k) => { b += t(x + 24, y + 86 + k * step, a, { size: 17, weight: 700 }) + t(x + 24, y + 108 + k * step, c, { size: 15.5, fill: C.muted, italic: c.startsWith('“') }); });
  });
  b += box(30, 742, 840, 60, C.panel, C.tealDark) + t(450, 779, 'Treat teenage variation as systematic and social, not as deterioration.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('03-later-development',
    svg(900, 830, 'Later development in children and teenagers', b),
    'Four areas of later development. Grammar: passives, embedded and relative clauses, nominalisation, cohesive devices. Vocabulary: abstract and subject-specific words, polysemy and figurative meaning. Pragmatics: register, politeness strategies, conversational repair. Adolescent identity: slang and discourse markers, Eckert’s 1989 study, Multicultural London English.',
    'Grammar, vocabulary and pragmatics keep developing, and teenage language marks identity.',
    '## Later development in children and teenagers');
}

// 04 Kroll's four stages of writing
{
  const st = [
    ['Preparation', 'letter formation and basic spelling'],
    ['Consolidation', 'writing much as they speak: “and then” chains'],
    ['Differentiation', 'writing differs from speech; genres and audiences'],
    ['Integration', 'a personal voice across forms and purposes'],
  ];
  let b = '';
  st.forEach(([h, s], i) => {
    const x = 30 + i * 212, y = 440 - i * 95, hh = 560 - y;
    b += `<rect x="${x}" y="${y}" width="200" height="${hh}" rx="10" fill="${[C.cream, C.tealLight, C.teal, C.mustard][i]}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += badge(x + 30, y + 36, 17, String(i + 1), '#ffffff') + t(x + 55, y + 42, h, { size: 17, weight: 700 });
    b += tl(x + 16, y + 82, wrap(s, 21), { size: 16 }, 21);
  });
  b += t(45, 140, 'Barry Kroll (1981)', { size: 20, weight: 700, fill: C.tealDark });
  b += t(45, 168, 'Children’s writing has its own developmental path.', { size: 17, fill: C.muted });
  b += box(30, 582, 840, 58, C.panel, C.ink) + t(450, 618, 'A model, not a rigid rule: test it against the data.', { size: 18, weight: 700, anchor: 'middle' });
  add('04-kroll-stages',
    svg(900, 665, 'Four stages of writing development', b),
    'Kroll’s 1981 model as four rising steps: preparation (letter formation and basic spelling), consolidation (writing as they speak, with “and then” chains), differentiation (writing differs from speech; genres and audiences), and integration (a personal voice across forms and purposes).',
    'Kroll: from forming letters to a controlled personal voice.',
    '## Writing development');
}

// 05 Gentry spelling stages
{
  const st = [
    ['Pre-communicative', 'random letters', ''],
    ['Semi-phonetic', 'some letters for sounds', '“dg” for “dog”'],
    ['Phonetic', 'every sound represented', '“sed” for “said”'],
    ['Transitional', 'spelling patterns appear', '“tode” for “toad”'],
    ['Correct', 'standard spelling', ''],
  ];
  let b = t(450, 118, 'J. Richard Gentry (1982)', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  st.forEach(([h, s, ex], i) => {
    const y = 140 + i * 96;
    b += panel(30, y, 840, 82, i === 4 ? C.tealLight : C.panel, i === 4 ? C.tealDark : C.panelEdge) + badge(76, y + 41, 22, String(i + 1), C.cream);
    b += t(118, y + 36, h, { size: 20, weight: 700 }) + t(118, y + 62, s, { size: 16, fill: C.muted });
    if (ex) b += box(600, y + 18, 246, 46, C.cream, C.olive) + t(723, y + 48, ex, { size: 18, weight: 600, anchor: 'middle' });
    if (i < 4) b += arrow(76, y + 66, 76, y + 94, { w: 2.5 });
  });
  b += box(30, 632, 840, 60, C.panel, C.ink) + t(450, 669, 'Phonetic spellings are evidence of phonological awareness, not carelessness.', { size: 18, weight: 700, anchor: 'middle' });
  add('05-gentry-spelling',
    svg(900, 720, 'Stages of spelling development', b),
    'Gentry’s five spelling stages: pre-communicative (random letters), semi-phonetic (“dg” for “dog”), phonetic (“sed” for “said”), transitional (“tode” for “toad”) and correct.',
    'Each non-standard spelling shows what the child already knows about sounds and patterns.',
    '## Writing development');
}

// 06 EAL concepts
{
  let b = box(30, 120, 210, 90, C.cream, C.olive) + t(135, 160, 'First', { size: 19, weight: 700, anchor: 'middle' }) + t(135, 186, 'language', { size: 19, weight: 700, anchor: 'middle' });
  b += arrow(244, 165, 300, 165, { w: 4 });
  b += box(306, 112, 288, 106, C.teal, C.ink) + t(450, 148, 'Interlanguage', { size: 21, weight: 700, anchor: 'middle' }) + t(450, 174, 'the learner’s developing', { size: 16, anchor: 'middle' }) + t(450, 196, 'system, with its own rules', { size: 16, anchor: 'middle' });
  b += arrow(598, 165, 654, 165, { w: 4 });
  b += box(660, 120, 210, 90, C.tealLight, C.tealDark) + t(765, 160, 'Target:', { size: 19, weight: 700, anchor: 'middle' }) + t(765, 186, 'English', { size: 19, weight: 700, anchor: 'middle' });
  b += t(450, 100, 'Selinker (1972)', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  b += path('M135,214 Q135,270 300,262', { stroke: C.olive, w: 3 }) + arrow(300, 262, 340, 222, { w: 3, color: C.olive, marker: 'ahO' });
  b += t(135, 290, 'Transfer: articles, word order,', { size: 16, anchor: 'middle', fill: C.olive, weight: 700 }) + t(135, 310, 'sounds; can also help', { size: 16, anchor: 'middle', fill: C.olive, weight: 700 });
  b += box(560, 250, 310, 66, C.panel, C.panelEdge) + t(580, 278, 'Overgeneralisation too:', { size: 17, weight: 700 }) + t(580, 302, '“He goed home” (adult learner)', { size: 16, italic: true, fill: C.muted });
  // three panels
  b += panel(30, 340, 270, 250) + t(50, 376, 'Krashen', { size: 20, weight: 700 }) + t(50, 400, 'comprehensible input', { size: 16, fill: C.muted });
  b += box(60, 520, 90, 40, C.tealLight, C.tealDark) + t(105, 546, 'current', { size: 15, anchor: 'middle' });
  b += box(160, 480, 110, 80, C.cream, C.olive) + t(215, 515, 'slightly', { size: 15, anchor: 'middle' }) + t(215, 534, 'beyond', { size: 15, anchor: 'middle' });
  b += t(50, 432, 'input understandable but', { size: 16 }) + t(50, 452, 'slightly beyond the level;', { size: 16 }) + t(50, 472, 'silent period common', { size: 16 });
  b += panel(315, 340, 270, 250) + t(335, 376, 'Cummins', { size: 20, weight: 700 }) + t(335, 400, 'two kinds of proficiency', { size: 16, fill: C.muted });
  b += t(335, 440, 'BICS: conversation', { size: 16, weight: 700 }) + `<rect x="335" y="450" width="80" height="22" rx="4" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + t(425, 467, 'a couple of years', { size: 15, fill: C.muted });
  b += t(335, 508, 'CALP: academic language', { size: 16, weight: 700 }) + `<rect x="335" y="518" width="230" height="22" rx="4" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  b += t(335, 566, 'considerably longer', { size: 15, fill: C.muted });
  b += panel(600, 340, 270, 250) + t(620, 376, 'Code-switching', { size: 20, weight: 700 }) + t(620, 400, 'a skilled resource, for', { size: 16, fill: C.muted });
  ['identity', 'emphasis', 'a word that fits better'].forEach((s, i) => { b += pill(620, 420 + i * 50, 220, 38, s, { fill: C.tealLight, edge: C.tealDark, size: 16 }); });
  b += box(30, 608, 840, 58, C.panel, C.tealDark) + t(450, 644, 'Avoid a deficit framing: describe what the learner can do and what is developing.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('06-eal-concepts',
    svg(900, 690, 'Learning English as an additional language', b),
    'Interlanguage sits between the first language and English, fed by transfer from the first language; overgeneralisation such as “He goed home” also occurs. Below: Krashen’s comprehensible input just beyond the current level, Cummins’s BICS (a couple of years) versus CALP (considerably longer), and code-switching as a skilled resource.',
    'EAL forms come from a rule-governed developing system; describe it, do not treat it as a deficit.',
    '## EAL learners');
}

// 07 Worked example: EAL science report
{
  let b = box(30, 108, 840, 112, C.cream, C.olive) + t(50, 138, '14-year-old EAL learner, two years in an English-medium school: science report', { size: 16, weight: 700, fill: C.muted });
  b += t(50, 170, '“The results was showing that plant growth more fast in light. Therefore, we can', { size: 18, italic: true }) + t(50, 198, 'conclude light is a factor which affecting growth.”', { size: 18, italic: true });
  b += panel(30, 240, 410, 330, C.panel, C.tealDark) + `<rect x="30" y="240" width="410" height="54" rx="14" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>` + t(235, 275, 'Emerging CALP (Cummins)', { size: 20, weight: 700, anchor: 'middle' });
  [['“Therefore”', 'discourse marker'], ['“we can conclude”', 'formulaic academic phrase'], ['“which…”', 'relative clause']].forEach(([q, s], i) => {
    const y = 316 + i * 78;
    b += box(52, y, 366, 64, C.tealLight, C.tealDark) + t(70, y + 28, q, { size: 18, weight: 700, italic: true }) + t(70, y + 52, s, { size: 16, fill: C.muted });
  });
  b += panel(460, 240, 410, 330, C.panel, C.olive) + `<rect x="460" y="240" width="410" height="54" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + t(665, 275, 'Developing interlanguage', { size: 20, weight: 700, anchor: 'middle' });
  [['“results was”', 'subject-verb agreement developing'], ['“was showing”, “affecting”', 'progressive for a completed finding:', 'tense and aspect still developing'], ['“more fast”', 'analytic comparative overgeneralised']].forEach(([q, s, s2], i) => {
    const y = 316 + [0, 72, 172][i], h = s2 ? 88 : 64;
    b += box(482, y, 366, h, '#ffffff', C.olive) + t(500, y + 28, q, { size: 18, weight: 700, italic: true }) + t(500, y + 52, s, { size: 16, fill: C.muted }) + (s2 ? t(500, y + 74, s2, { size: 16, fill: C.muted }) : '');
  });
  b += box(30, 590, 840, 92, C.panel, C.ink) + t(450, 626, 'Systematic, not random: supports Selinker’s rule-governed learner system.', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 656, 'Academic register is acquired alongside, not after, grammatical accuracy.', { size: 17, anchor: 'middle', fill: C.muted });
  add('07-worked-example-eal',
    svg(900, 710, 'Worked example: an EAL science report', b),
    'The learner’s sentence analysed in two columns. Emerging CALP: “Therefore”, “we can conclude” and the relative clause with “which”. Developing interlanguage: “results was” (agreement), “was showing” and “affecting” (progressive for a completed finding), “more fast” (overgeneralised comparative).',
    'Genre control and developing grammar appear together, and the non-target forms are systematic.',
    '## Worked example');
}
