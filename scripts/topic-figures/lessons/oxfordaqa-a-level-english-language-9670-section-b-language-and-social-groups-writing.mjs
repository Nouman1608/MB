import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-english-language-9670-section-b-language-and-social-groups-writing';
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


const tick = (x, y) => path(`M${x - 8},${y} l6,7 l11,-14`, { stroke: C.tealDark, w: 4 });
const cross = (x, y) => path(`M${x - 7},${y - 7} l14,14 m0,-14 l-14,14`, { stroke: C.rust, w: 4 });

// 01 Academic argument and its look-alikes
{
  const cards = [
    ['A summary', 'of the Section A analysis', [[1, 'restates features'], [0, 'no claim']]],
    ['An opinion piece', '', [[1, 'makes claims'], [0, 'no linguistic evidence']]],
    ['A list of theories', '', [[1, 'describes research'], [0, 'not applied']]],
  ];
  let b = t(450, 128, 'Often confused with academic argument', { size: 19, weight: 700, anchor: 'middle', fill: C.muted });
  cards.forEach(([h, sub, items], i) => {
    const x = 30 + i * 286;
    b += panel(x, 146, 268, 210, '#ffffff', C.rust) + t(x + 134, 184, h, { size: 20, weight: 700, anchor: 'middle' });
    if (sub) b += t(x + 134, 208, sub, { size: 15.5, anchor: 'middle', fill: C.muted });
    items.forEach(([ok, s], k) => { const y = 256 + k * 46; b += (ok ? tick(x + 34, y - 6) : cross(x + 34, y - 6)) + t(x + 58, y, s, { size: 17, fill: ok ? C.ink : C.rust, weight: ok ? 400 : 600 }); });
  });
  b += arrow(450, 366, 450, 404, { w: 4 });
  b += panel(30, 410, 840, 210, C.tealLight, C.tealDark) + t(450, 450, 'Academic argument', { size: 23, weight: 700, anchor: 'middle' });
  b += t(450, 478, 'a reasoned answer to a question, supported by evidence and aware of other views', { size: 17, anchor: 'middle', fill: C.muted });
  [['a claim that answers', 'the question'], ['linguistic evidence', 'from data and studies'], ['research applied', 'to the question'], ['other views', 'weighed']].forEach(([a, c], i) => {
    const x = 50 + i * 205;
    b += box(x, 500, 190, 96, '#ffffff', C.tealDark) + tick(x + 95, 528) + t(x + 95, 560, a, { size: 16, weight: 700, anchor: 'middle' }) + t(x + 95, 580, c, { size: 15.5, anchor: 'middle', fill: C.muted });
  });
  add('01-argument-not-summary',
    svg(900, 645, 'What academic argument is, and is not', b),
    'Three look-alikes each missing something: a summary restates features with no claim, an opinion piece makes claims with no linguistic evidence, a list of theories describes research without applying it. Academic argument combines a claim that answers the question, linguistic evidence, applied research and awareness of other views.',
    'Argument needs a claim, evidence and other views together; each look-alike drops one.',
    '## What makes writing "academic argument"');
}

// 02 Components of the argument
{
  const comps = [
    ['Thesis', 'a one-sentence answer, in the introduction', C.mustard],
    ['Claims', 'each paragraph’s topic sentence advances the thesis', C.teal],
    ['Evidence', 'quoted Section A data and accurate study findings', C.tealLight],
    ['Analysis', 'how the evidence supports the claim', C.tealLight],
    ['Counter-argument', 'a limitation, alternative explanation or contrary study', C.cream],
    ['Evaluation', 'a weighed judgement of how far the claim holds', C.cream],
    ['Conclusion', 'a direct answer, refined by the argument', C.mustard],
  ];
  let b = '';
  comps.forEach(([h, s, fill], i) => {
    const y = 110 + i * 80, indent = i >= 1 && i <= 5 ? 50 : 0;
    b += box(30 + indent, y, 230 - indent, 66, fill, C.ink) + t(145 + indent / 2, y + 40, h, { size: 18, weight: 700, anchor: 'middle' });
    b += box(272, y, 598, 66, C.panel, C.panelEdge) + t(292, y + 40, s, { size: 17 });
  });
  b += path('M58,186 L58,546', { stroke: C.olive, w: 3, extra: 'stroke-dasharray="6 6"' });
  b += t(450, 690, 'Every main paragraph begins with a claim that answers the question.', { size: 16.5, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('02-argument-components',
    svg(900, 715, 'The parts of an academic argument', b),
    'Seven components in order: a thesis in the introduction; claims as topic sentences; evidence from Section A data and studies; analysis of how it supports the claim; a counter-argument; evaluation of how far the claim holds; and a conclusion that answers directly.',
    'A thesis frames the essay; each paragraph claims, evidences, analyses and weighs; the conclusion refines.',
    '## What makes writing "academic argument"');
}

// 03 Academic register
{
  const cards = [
    ['Hedging', ['“suggests”, “may indicate”,', '“appears to”, “to some extent”']],
    ['Reporting verbs', ['“found” for evidence,', '“claims” for a contested view']],
    ['Impersonal constructions', ['“It could be argued that…”', '“The data suggest…”']],
    ['Precise terminology', ['“asymmetrical address”, not “talking down”', '“covert prestige”, not “being cool”']],
    ['Cohesion', ['“however”, “consequently”,', '“this complicates”']],
    ['Citation', ['researcher and date in brackets:', '“(Labov, 1966)”, finding summarised accurately']],
  ];
  let b = '';
  cards.forEach(([h, ls], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 140;
    b += panel(x, y, 410, 124, i === 3 ? C.cream : C.panel, i === 3 ? C.olive : C.panelEdge) + t(x + 22, y + 38, h, { size: 20, weight: 700 });
    b += tl(x + 22, y + 70, ls, { size: 16.5, fill: C.muted }, 23);
  });
  b += box(30, 538, 840, 58, C.tealLight, C.tealDark) + t(450, 574, 'Data from one text cannot prove a general claim: hedge accordingly.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('03-academic-register',
    svg(900, 620, 'Six tools of academic register', b),
    'Six register tools with examples: hedging (“suggests”, “may indicate”), reporting verbs (“found” versus “claims”), impersonal constructions, precise terminology (“asymmetrical address” rather than “talking down”), cohesive discourse markers, and citation such as “(Labov, 1966)”.',
    'The writing itself is assessed: hedge, cite accurately and use precise terms.',
    '## Academic register');
}

// 04 Using Section A data as evidence
{
  let b = box(30, 110, 400, 160, C.cream, C.olive) + t(52, 144, 'Section A observation', { size: 19, weight: 700, fill: C.olive });
  b += tl(52, 178, wrap('The friends’ messages use the in-group nickname “Captain” for one member and an abbreviation only they understand.', 38), { size: 17, italic: true }, 24);
  b += arrow(436, 190, 466, 190, { w: 5 });
  b += box(470, 110, 400, 160, C.tealLight, C.tealDark) + t(492, 144, 'Section B evidence', { size: 19, weight: 700, fill: C.tealDark });
  b += tl(492, 178, wrap('In-group lexis shows that language can mark the boundary of a group, signalling who belongs and who does not.', 40), { size: 17 }, 24);
  b += t(450, 310, 'Choose data that does three jobs', { size: 20, weight: 700, anchor: 'middle' });
  const jobs = [['Supports', 'the thesis', C.teal], ['Complicates', 'the thesis', C.mustard], ['Contradicts', 'the thesis, if possible', C.cream]];
  jobs.forEach(([h, s, fill], i) => {
    const x = 30 + i * 286;
    b += box(x, 330, 268, 92, fill, C.ink) + t(x + 134, 368, h, { size: 21, weight: 700, anchor: 'middle' }) + t(x + 134, 396, s, { size: 16, anchor: 'middle' });
  });
  b += path('M450,430 L450,450', { w: 3, stroke: C.olive }) + arrow(450, 450, 450, 458, { w: 3, color: C.olive, marker: 'ahO' });
  b += box(30, 464, 840, 58, C.panel, C.olive) + t(450, 500, 'Complicating evidence is where evaluation happens.', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  add('04-data-as-evidence',
    svg(900, 550, 'Moving Section A data up a level', b),
    'A Section A observation (the in-group nickname “Captain” and a private abbreviation) becomes Section B evidence that in-group lexis marks the boundary of a group. Below, choose data that supports, complicates and, if possible, contradicts the thesis.',
    'Turn features into claims about language and groups, and use complicating data to evaluate.',
    '## Using Section A data as evidence');
}

// 05 Research worth knowing
{
  let b = panel(30, 110, 840, 290) + t(55, 146, 'Social variation', { size: 20, weight: 700, fill: C.tealDark });
  const sv = [['Labov (1966)', 'New York stores: post-vocalic /r/ linked to store status'], ['Trudgill (1974)', 'Norwich: some men over-reported non-standard forms; covert prestige'], ['Milroy (1980)', 'Belfast: close-knit, dense networks kept local vernacular forms'], ['Eckert (1989)', 'Detroit-area school: “jocks” and “burnouts” differed in language']];
  sv.forEach(([a, c], i) => { const y = 162 + i * 56; b += box(55, y, 170, 44, C.teal, C.ink) + t(140, y + 28, a, { size: 16, weight: 700, anchor: 'middle' }) + t(242, y + 28, c, { size: 16 }); });
  b += panel(30, 418, 840, 150) + t(55, 454, 'Interaction', { size: 20, weight: 700, fill: C.tealDark });
  [['Giles', 'communication accommodation: convergence and divergence'], ['Brown and Levinson (1987)', 'politeness and face']].forEach(([a, c], i) => { const y = 470 + i * 50; b += box(55, y, 250, 40, C.cream, C.olive) + t(180, y + 26, a, { size: 16, weight: 700, anchor: 'middle' }) + t(322, y + 26, c, { size: 16 }); });
  b += panel(30, 586, 840, 150) + t(55, 622, 'The gender and language debate', { size: 20, weight: 700, fill: C.tealDark });
  [['Lakoff (1975)', 'deficit'], ['Tannen (1990)', 'difference'], ['Cameron (2007)', 'critique of both']].forEach(([a, c], i) => {
    const x = 55 + i * 275;
    b += box(x, 642, 240, 72, C.mustard, C.ink) + t(x + 120, 671, a, { size: 17, weight: 700, anchor: 'middle' }) + t(x + 120, 697, c, { size: 16, anchor: 'middle' });
    if (i < 2) b += arrow(x + 244, 678, x + 271, 678, { w: 3 });
  });
  b += box(30, 754, 840, 58, C.tealLight, C.tealDark) + t(450, 790, 'Use a study only if you can state its finding: it should confirm, extend or challenge your data.', { size: 16.5, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('05-research-to-know',
    svg(900, 840, 'Research worth knowing accurately', b),
    'Studies grouped by theme. Social variation: Labov (1966) New York stores, Trudgill (1974) Norwich covert prestige, Milroy (1980) Belfast networks, Eckert (1989) jocks and burnouts. Interaction: Giles’s accommodation, Brown and Levinson (1987) politeness. Gender debate: Lakoff (1975), Tannen (1990) and Cameron (2007), from deficit to difference to critique of both.',
    'Know each finding accurately and use it to confirm, extend or challenge your own data.',
    '## Research worth knowing accurately');
}

// 06 Worked example: essay plan
{
  const steps = [
    ['Thesis', C.mustard, 'Language often marks membership, but “mainly” overstates it.', ''],
    ['Support', C.teal, 'In-group nicknames and banter in the chat mark membership.', 'communities of practice, Eckert'],
    ['Complicate', C.cream, 'The captain’s imperatives build hierarchy inside the group.', 'Wareing: instrumental power'],
    ['Counter', C.cream, 'The coach’s formal register marks a different role.', 'accommodation theory'],
    ['Conclusion', C.mustard, 'Partly true but too narrow: language also negotiates position.', ''],
  ];
  let b = box(30, 108, 840, 84, C.panel, C.ink) + t(450, 140, '“Discuss the view that people use language mainly to show', { size: 18, weight: 700, anchor: 'middle', italic: true }) + t(450, 168, 'which groups they belong to.”', { size: 18, weight: 700, anchor: 'middle', italic: true });
  b += t(450, 222, 'Section A data: a teenage football team’s group chat', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  steps.forEach(([h, fill, s, tag], i) => {
    const y = 240 + i * 96;
    b += box(30, y, 170, 82, fill, C.ink) + t(115, y + 48, h, { size: 18, weight: 700, anchor: 'middle' });
    b += arrow(204, y + 41, 224, y + 41, { w: 3 });
    b += box(230, y, 640, 82, C.panel, C.panelEdge) + t(250, y + (tag ? 34 : 48), s, { size: 17 });
    if (tag) b += pill(250, y + 46, tag.length * 8.4 + 30, 28, tag, { size: 15, fill: C.tealLight, edge: C.tealDark });
  });
  b += box(30, 726, 840, 60, C.tealLight, C.tealDark) + t(450, 763, 'The key word “mainly” is the point to evaluate, not decoration.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('06-worked-plan',
    svg(900, 810, 'Worked example: planning the essay', b),
    'A five-part plan for the group-membership question using a football team’s chat: thesis that “mainly” overstates it; support from nicknames and banter (communities of practice, Eckert); complication from the captain’s imperatives (Wareing); counter from the coach’s formal register (accommodation); and a conclusion that the view is partly true but too narrow.',
    'Support, complicate, counter, then judge: the qualifying word drives the evaluation.',
    '## Worked example');
}
