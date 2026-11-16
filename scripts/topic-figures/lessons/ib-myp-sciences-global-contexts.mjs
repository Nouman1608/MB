import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-sciences-global-contexts';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { if ((out[out.length - 1] + ' ' + w).trim().length > n) out.push(w); else out[out.length - 1] = (out[out.length - 1] + ' ' + w).trim(); } return out; };
const chip = (x, y, w, h, s, fill, { size = 17, weight = 700, edge = C.ink } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${edge}" stroke-width="2.2"/>` + t(x + w / 2, y + h / 2 + size * 0.35, s, { size, weight, anchor: 'middle' });

const CONTEXTS = [
  ['Identities and relationships', 'bodies, health, genes, development and well-being', 'exercise and the heart'],
  ['Orientation in space and time', 'how understanding develops; scales from atoms to the cosmos', 'germ theory of disease'],
  ['Personal and cultural expression', 'how people create and practise science; agreed conventions', 'physics of musical instruments'],
  ['Scientific and technical innovation', 'applying science to products, processes and solutions', 'rechargeable batteries'],
  ['Globalization and sustainability', 'human activity and shared resources: air, water, soil, fuels', 'polymers and plastic waste'],
  ['Fairness and development', 'who benefits from science, who bears the costs', 'keeping vaccines cold'],
];

// 01 Six global contexts
{
  let b = '';
  CONTEXTS.forEach(([n, d, u], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 200;
    const hi = i === 3;
    b += panel(x, y, 410, 184, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge) + badge(x + 40, y + 42, 22, String(i + 1), hi ? C.mustard : C.cream);
    b += tl(x + 76, y + 38, wrap(n, 24), { size: 19, weight: 700 }, 23);
    b += tl(x + 24, y + 100, wrap(d, 42), { size: 16, fill: C.muted }, 21);
    b += t(x + 24, y + 166, 'e.g. ' + u, { size: 15, weight: 600, fill: C.tealDark, italic: true });
  });
  b += panel(30, 720, 840, 80, C.cream, C.olive) + t(450, 754, 'Every unit has one. Science often uses no. 4, but all six must appear over the course.', { size: 17, weight: 700, anchor: 'middle' }) +
    t(450, 780, 'Example units are Marlbridge suggestions.', { size: 15, anchor: 'middle', fill: C.muted });
  add('01-six-global-contexts',
    svg(900, 820, 'The six global contexts in science', b),
    'Six cards: identities and relationships; orientation in space and time; personal and cultural expression; scientific and technical innovation, highlighted as the natural favourite for science; globalization and sustainability; and fairness and development. Each gives what it asks about in science and an example unit.',
    'Every unit needs a global context, and all six should appear across the course.',
    '## The six global contexts, with science units');
}

// 02 Zoom: context -> exploration -> issue
{
  let b = '';
  const lv = [
    ['Global context (wide)', 'Globalization and sustainability', 760, C.tealLight, C.tealDark],
    ['Exploration (focused)', 'consumption, conservation, natural resources and public goods', 600, C.cream, C.olive],
    ['Unit issue (sharp)', 'fuels and their environmental impact', 420, C.mustard, C.ink],
  ];
  lv.forEach(([h, d, w, f, e], i) => {
    const y = 120 + i * 150, x = 450 - w / 2;
    b += `<rect x="${x}" y="${y}" width="${w}" height="110" rx="16" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
    b += t(450, y + 40, h, { size: 17, weight: 700, anchor: 'middle', fill: i === 2 ? C.ink : e });
    b += tl(450, y + 72, wrap(d, Math.floor(w / 10)), { size: 18, weight: 600, anchor: 'middle' }, 22);
    if (i < 2) b += arrow(450, y + 114, 450, y + 146, { w: 3.5 });
  });
  b += t(450, 590, 'The guide’s example: a physics unit on fuels.', { size: 16, anchor: 'middle', fill: C.muted });
  add('02-exploration-zoom',
    svg(900, 620, 'From global context to unit issue', b),
    'Three nested bars narrowing downwards: the global context globalization and sustainability; the exploration consumption, conservation, natural resources and public goods; and the unit issue, fuels and their environmental impact.',
    'An exploration zooms a broad global context in on one unit.',
    '## Explorations: narrowing a context');
}

// 03 Statement of inquiry formula
{
  let b = '';
  const parts = [['Key concept', 'relationships', C.mustard], ['Related concepts', 'conditions, interaction', C.cream], ['Global context', 'identities and relationships', C.tealLight]];
  parts.forEach(([h, v, f], i) => {
    const x = 30 + i * 290;
    b += panel(x, 110, 260, 150, f, C.olive) + t(x + 130, 150, h, { size: 19, weight: 700, anchor: 'middle' }) + tl(x + 130, 192, wrap(v, 22), { size: 18, anchor: 'middle', fill: C.ink, italic: true }, 22);
    if (i < 2) b += t(x + 275, 195, '+', { size: 30, weight: 700, anchor: 'middle' });
  });
  b += arrow(450, 268, 450, 318, { w: 4 });
  b += panel(30, 325, 840, 120) + t(450, 362, 'Statement of inquiry', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(450, 405, '“Health is a function of interactions', { size: 22, weight: 700, anchor: 'middle', italic: true }) + t(450, 434, 'between individuals and societies.”', { size: 22, weight: 700, anchor: 'middle', italic: true });
  b += panel(30, 465, 410, 110, '#eaf3f1', C.tealDark) + t(55, 500, '✓ Transferable', { size: 19, weight: 700, fill: C.tealDark }) + tl(55, 530, ['Names no specific topic, so it', 'still holds in another case.'], { size: 16 }, 22);
  b += panel(460, 465, 410, 110, '#fbeee6', C.rust) + t(485, 500, '✗ Too narrow', { size: 19, weight: 700, fill: C.rust }) + tl(485, 530, ['“Batteries store energy.”', 'It only names the topic.'], { size: 16 }, 22);
  b += t(450, 600, 'Sciences key concepts: change, relationships, systems (units may use others).', { size: 15, anchor: 'middle', fill: C.muted });
  add('03-statement-of-inquiry',
    svg(900, 625, 'Building a statement of inquiry', b),
    'A key concept (relationships) plus related concepts (conditions, interaction) plus a global context (identities and relationships) make the guide’s statement of inquiry “Health is a function of interactions between individuals and societies.” A transferable statement names no topic; “Batteries store energy” is too narrow.',
    'Key concept + related concepts + global context = one transferable sentence.',
    '## Statements of inquiry');
}

// 04 Three kinds of inquiry question
{
  const rows = [
    ['Factual', 'answered by recall or measurement', 'What gases are produced when fuel burns?', C.tealLight],
    ['Conceptual', 'about big ideas that transfer', 'How does a change in one part of a system affect the rest?', C.cream],
    ['Debatable', 'more than one defensible answer', 'Should cities ban petrol cars?', C.mustard],
  ];
  let b = '';
  rows.forEach(([n, d, q, f], i) => {
    const y = 110 + i * 150, x = 30 + i * 60;
    b += `<rect x="${x}" y="${y}" width="${840 - i * 60}" height="132" rx="14" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += t(x + 24, y + 42, n, { size: 23, weight: 700 }) + t(x + 180, y + 42, d, { size: 16, fill: C.muted });
    b += tl(x + 24, y + 82, wrap('“' + q + '”', 62), { size: 18, italic: true }, 24);
  });
  b += panel(30, 570, 840, 80, C.cream, C.olive) + t(450, 618, 'Debatable questions are where the global context meets criterion D.', { size: 18, weight: 700, anchor: 'middle' });
  add('04-inquiry-questions',
    svg(900, 670, 'Three kinds of inquiry question', b),
    'Three stepped bands. Factual: answered by recall or measurement, such as “What gases are produced when fuel burns?” Conceptual: about transferable big ideas, such as “How does a change in one part of a system affect the rest?” Debatable: more than one defensible answer, such as “Should cities ban petrol cars?”',
    'Factual, conceptual, debatable: debatable questions lead into criterion D.',
    '## Statements of inquiry');
}

// 05 Global context vs factor
{
  let b = panel(30, 110, 840, 230);
  b += `<rect x="60" y="150" width="780" height="160" rx="16" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="10 7"/>`;
  b += t(80, 182, 'Global context = the frame for the whole unit', { size: 19, weight: 700, fill: C.tealDark });
  b += `<circle cx="450" cy="250" r="44" fill="#fff" stroke="${C.olive}" stroke-width="4"/><circle cx="450" cy="250" r="30" fill="${C.cream}"/>` + path('M481,281 L520,320', { stroke: C.olive, w: 8 });
  b += t(540, 240, 'Factor = the lens you use', { size: 18, weight: 700, fill: C.olive }) + t(540, 264, 'inside a criterion D answer', { size: 16, fill: C.muted });
  b += t(80, 262, 'Factors: moral, ethical, social, economic,', { size: 15, fill: C.ink }) + t(80, 284, 'political, cultural, environmental', { size: 15, fill: C.ink });
  b += panel(30, 360, 840, 400) + t(60, 398, 'Factors that often fit (a Marlbridge planning aid, not an IB rule)', { size: 18, weight: 700 });
  const fit = ['social, ethical', 'cultural, social', 'cultural, economic', 'economic, ethical', 'environmental, political', 'economic, moral'];
  CONTEXTS.forEach(([n], i) => {
    const y = 420 + i * 54;
    b += `<rect x="60" y="${y}" width="420" height="44" rx="10" fill="${C.tealLight}"/>` + t(76, y + 29, n, { size: 16, weight: 600 });
    b += arrow(488, y + 22, 530, y + 22, { w: 2.5 });
    b += `<rect x="540" y="${y}" width="300" height="44" rx="10" fill="${C.cream}"/>` + t(556, y + 29, fit[i], { size: 16, weight: 600, fill: C.olive });
  });
  b += t(450, 780, '“Globalization and sustainability” is not a factor; “environmental” is.', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  add('05-context-vs-factor',
    svg(900, 800, 'Global context or factor?', b),
    'The global context is the frame around the whole unit; a factor (moral, ethical, social, economic, political, cultural or environmental) is the lens used inside a criterion D answer. A table pairs each global context with factors that often fit, such as globalization and sustainability with environmental and political.',
    'Name a factor, not a global context, in a criterion D answer.',
    '## How the global context links to criterion D');
}

// 06 Criterion D strand command terms
{
  let b = panel(30, 110, 840, 580);
  const bands = ['1–2', '3–4', '5–6', '7–8'];
  const s1 = ['outline', 'summarize', 'describe', 'explain'];
  const s2 = ['outline', 'describe', 'discuss', 'discuss and evaluate'];
  const x0 = 150, w = 175, base = 600;
  bands.forEach((bd, i) => {
    const x = x0 + i * w, h = 90 + i * 100;
    b += `<rect x="${x}" y="${base - h}" width="${w - 10}" height="${h}" rx="10" fill="${['#eef3f2', C.tealLight, C.teal, C.sand][i]}" stroke="${C.ink}" stroke-width="2.2"/>`;
    b += t(x + (w - 10) / 2, base + 28, 'band ' + bd, { size: 17, weight: 700, anchor: 'middle' });
    b += t(x + (w - 10) / 2, base - h + 32, s1[i], { size: 17, weight: 600, anchor: 'middle' });
    b += tl(x + (w - 10) / 2, base - h + 66, wrap(s2[i], 12), { size: 17, weight: 700, anchor: 'middle', fill: C.olive }, 21);
  });
  b += t(60, 542, 'strand 1', { size: 16, weight: 600 }) + t(60, 576, 'strand 2', { size: 16, weight: 700, fill: C.olive });
  b += t(60, 160, 'Year 5 descriptors', { size: 20, weight: 700 });
  b += t(60, 194, 'strand 1:', { size: 16, weight: 600 }) + t(140, 194, 'explain how science is applied', { size: 16, fill: C.muted });
  b += t(60, 220, 'strand 2:', { size: 16, weight: 700, fill: C.olive }) + t(140, 220, 'discuss and evaluate implications', { size: 16, fill: C.muted });
  b += t(60, 246, 'Strands 3 and 4: scientific language; documenting sources.', { size: 15, fill: C.muted });
  b += t(450, 668, 'The top band needs reasoning and a judgement, not a list.', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  add('06-criterion-d-command-terms',
    svg(900, 710, 'Criterion D: what each band asks for', b),
    'Four rising steps for bands 1–2 to 7–8. Strand 1 climbs from outline to summarize, describe and explain; strand 2 from outline to describe, discuss, and discuss and evaluate. Strands 3 and 4 cover scientific language and documenting sources.',
    'Higher bands need stronger command terms: explain, then discuss and evaluate.',
    '## How the global context links to criterion D');
}
