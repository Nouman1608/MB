import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-language-9093-section-a-language-change';
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

// 01 Three sources
{
  const src = [
    ['Prose text', ['about 300-400 words', 'any time from Early', 'Modern English (c.1500)', 'to the present'], C.cream],
    ['N-gram graph', ['how often a word or', 'phrase appears in', 'printed texts, year', 'by year'], C.tealLight],
    ['Corpus word table', ['collocates or synonym', 'lists drawn from a', 'corpus'], C.tealLight],
  ];
  let b = '';
  src.forEach(([h, l, fill], i) => {
    const x = 40 + i * 280;
    b += rect(x, 115, 260, 200, fill, C.ink, 2.5) + t(x + 130, 152, h, { size: 21, weight: 700, anchor: 'middle' }) + tl(x + 130, 190, l, { size: 16, anchor: 'middle' }, 22);
    b += arrow(x + 130, 317, 450, 368, { w: 3 });
  });
  b += rect(220, 372, 460, 90, C.teal, C.ink, 3) + t(450, 408, 'One essay that synthesises all three', { size: 19, weight: 700, anchor: 'middle' }) +
    t(450, 438, 'how the text exemplifies ways English has changed', { size: 16, anchor: 'middle' });
  b += panel(40, 485, 820, 100) +
    t(64, 520, 'Section A of Paper 3: compulsory, 25 marks, half the paper', { size: 18, weight: 700 }) +
    t(64, 552, 'AO2 writing effectively · AO4 issues, concepts, approaches · AO5 analysing and synthesising data', { size: 15, fill: C.muted }) +
    t(836, 520, 'no dictionaries', { size: 16, weight: 700, anchor: 'end', fill: C.rust });
  add('01-three-sources',
    svg(900, 610, 'Paper 3 Section A: three sources, one essay', b),
    'Three sources feed one essay: a prose text of about 300 to 400 words from any time since Early Modern English (c.1500), an n-gram graph of word frequency in printed texts, and a corpus word table of collocates or synonyms. The compulsory question is worth 25 marks, half of Paper 3, and assesses AO2, AO4 and AO5; dictionaries are not allowed.',
    'The essay must combine the prose text, the n-gram graph and the word table.',
    '## What the question gives you');
}

// 02 Landmarks for dating a text
{
  let b = `<line x1="60" y1="300" x2="850" y2="300" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>`;
  const ev = [
    [110, 'c.1500', 'Early Modern English', 'period begins', C.panel],
    [290, 'late 1400s on', 'Printing spreads', 'more fixed spellings', C.tealLight],
    [500, '1755', 'Johnson\'s Dictionary', 'reference for spelling, meaning', C.cream],
    [700, '1762', 'Lowth\'s grammar', 'prescriptive rules, e.g. against multiple negation', C.sand],
  ];
  ev.forEach(([x, d, h, s, fill], i) => {
    const up = i % 2 === 0;
    const by = up ? 130 : 330;
    b += `<circle cx="${x}" cy="300" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<line x1="${x}" y1="${up ? 250 : 311}" x2="${x}" y2="${up ? 289 : 330}" stroke="${C.ink}" stroke-width="2"/>` +
      rect(x - 95, by, 190, 120, fill, C.ink, 2.5, 10) + t(x, by + 30, d, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) +
      tl(x, by + 56, wrap(h, 20), { size: 16, weight: 700, anchor: 'middle' }, 20) + tl(x, by + 56 + wrap(h, 20).length * 20 + 4, wrap(s, 22), { size: 14.5 + 0.5, anchor: 'middle', fill: C.muted }, 18);
  });
  b += t(845, 285, 'today', { size: 16, weight: 700, anchor: 'end', fill: C.muted });
  b += panel(40, 475, 400, 120, C.cream, C.mustard) + t(64, 508, 'Probably early', { size: 18, weight: 700 }) +
    tl(64, 538, ['variable spelling ("musick", "shew")', 'and "-eth" endings (hath, doth)'], { size: 16 }, 22);
  b += panel(460, 475, 400, 120, C.tealLight, C.tealDark) + t(484, 508, 'Perhaps 18th or 19th century', { size: 18, weight: 700 }) +
    tl(484, 538, ['standardised spelling, but very formal', 'syntax and politeness formulas'], { size: 16 }, 22);
  add('02-dating-landmarks',
    svg(900, 620, 'Three landmarks for dating a text', b),
    'A timeline from the start of Early Modern English around 1500, through the spread of printing from the late fifteenth century, Johnson\'s Dictionary in 1755 and Lowth\'s prescriptive grammar in 1762, to today. Below, variable spelling and -eth endings suggest an early text, while standard spelling with very formal syntax and politeness formulas suggests the eighteenth or nineteenth century.',
    'Printing, Johnson and the prescriptive grammars help you place an unseen text.',
    '## Knowing the period: features by language level');
}

// 03 Word formation
{
  const procs = [
    ['Derivation', 'kind', '+ -ness', 'kindness'],
    ['Compounding', 'smart', '+ phone', 'smartphone'],
    ['Blending', 'smoke', '+ fog', 'smog'],
    ['Conversion', 'text (noun)', '', 'to text (verb)'],
    ['Backformation', 'editor', '− -or', 'edit'],
    ['Borrowing', 'other languages', '', 'bungalow, tsunami, algebra'],
    ['Telescoping', 'God be with you', '', 'goodbye'],
    ['Coalescence', 'to-day, any one', '', 'today, anyone'],
    ['Acronym', 'initial letters said', 'as a word', 'scuba, laser'],
  ];
  let b = '';
  procs.forEach(([p, a, op, r], i) => {
    const y = 115 + i * 62;
    b += rect(40, y, 190, 50, i % 2 ? C.tealLight : C.teal, C.ink, 2, 9) + t(135, y + 32, p, { size: 17, weight: 700, anchor: 'middle' }) +
      rect(250, y, 230, 50, C.panel, C.panelEdge, 2, 9) + t(365, y + (op ? 22 : 31), a, { size: 16, anchor: 'middle', italic: true }) + (op ? t(365, y + 42, op, { size: 15, anchor: 'middle', fill: C.muted }) : '') +
      arrow(484, y + 25, 530, y + 25, { w: 3 }) +
      rect(536, y, 324, 50, C.cream, C.mustard, 2, 9) + t(698, y + 32, r, { size: 17, weight: 600, anchor: 'middle', italic: true });
  });
  const y = 115 + 9 * 62 + 6;
  b += t(450, y + 22, 'Also: etymology (a word\'s origin and history) and inflection (endings English has largely lost).', { size: 15, anchor: 'middle', fill: C.muted });
  add('03-word-formation',
    svg(900, y + 45, 'Word formation: process and example', b),
    'Nine word-formation processes with the lesson\'s examples: derivation (kindness), compounding (smartphone), blending (smog), conversion (text as a verb), backformation (edit from editor), borrowing (bungalow, tsunami, algebra), telescoping (goodbye from God be with you), coalescence (today, anyone) and acronyms (scuba, laser).',
    'Have a definition and one example ready for every process.',
    '## Processes of change: the concept vocabulary');
}

// 04 Semantic change
{
  const sc = [
    ['Broadening', 'meaning widens', 'holiday', 'a holy day', 'any day off', 'broad'],
    ['Narrowing', 'meaning becomes more specific', 'meat', 'food in general', 'meat', 'narrow'],
    ['Amelioration', 'meaning becomes more positive', 'nice', 'foolish', 'pleasant', 'up'],
    ['Pejoration', 'meaning becomes more negative', 'villain', 'a farm labourer', 'a wrongdoer', 'down'],
  ];
  let b = '';
  sc.forEach(([h, d, w, then, now, kind], i) => {
    const x = 40 + (i % 2) * 420, y = 115 + Math.floor(i / 2) * 235;
    b += panel(x, y, 400, 215) + t(x + 24, y + 36, h, { size: 21, weight: 700 }) + t(x + 24, y + 60, d, { size: 15, fill: C.muted }) +
      t(x + 200, y + 100, `"${w}"`, { size: 20, weight: 700, italic: true, anchor: 'middle' });
    if (kind === 'broad') b += `<circle cx="${x + 110}" cy="${y + 160}" r="16" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + arrow(x + 132, y + 160, x + 220, y + 160, { w: 3 }) + `<circle cx="${x + 280}" cy="${y + 160}" r="38" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    if (kind === 'narrow') b += `<circle cx="${x + 110}" cy="${y + 160}" r="38" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + arrow(x + 152, y + 160, x + 240, y + 160, { w: 3 }) + `<circle cx="${x + 280}" cy="${y + 160}" r="16" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    if (kind === 'up') b += arrow(x + 200, y + 195, x + 200, y + 120, { w: 6, color: C.tealDark, marker: 'ahT' });
    if (kind === 'down') b += arrow(x + 200, y + 120, x + 200, y + 195, { w: 6, color: C.rust, marker: 'ahR' });
    const lx = kind === 'up' || kind === 'down' ? [x + 110, x + 290] : [x + 110, x + 280];
    b += t(lx[0], y + (kind === 'broad' || kind === 'narrow' ? 120 + (kind === 'narrow' ? -0 : 0) : 160), 'once', { size: 14.5 + 0.5, anchor: 'middle', fill: C.muted, weight: 700 }) +
      t(lx[1], y + (kind === 'broad' || kind === 'narrow' ? 120 : 160), 'now', { size: 15, anchor: 'middle', fill: C.muted, weight: 700 });
    if (kind === 'broad' || kind === 'narrow') {
      b += t(x + 200, y + 205, `${then} → ${now}`, { size: 15, anchor: 'middle' });
    } else {
      b += t(lx[0], y + 182, then, { size: 15, anchor: 'middle' }) + t(lx[1], y + 182, now === 'pleasant' ? '' : '', { size: 15, anchor: 'middle' });
    }
  });
  add('04-semantic-change',
    svg(900, 600, 'Four directions of semantic change', b),
    'Four panels: broadening, as "holiday" widens from a holy day to any day off; narrowing, as "meat" narrows from food in general; amelioration, as "nice" moves up from meaning foolish; and pejoration, as "villain" moves down from meaning a farm labourer.',
    'Meanings widen, narrow, improve or worsen: name the direction.',
    '## Processes of change: the concept vocabulary');
}

// 05 Theories: causes and models
{
  const causes = [
    ['Random fluctuation', 'no single cause; forms drift like fashions'],
    ['Cultural transmission', 'passed on by social learning, so each generation can alter it'],
    ['Lexical gaps', 'new words fill gaps where a concept has no name'],
    ['Substratum', 'features of an earlier language persist after a shift'],
    ['Functional', 'language changes to meet users\' communicative needs'],
  ];
  let b = t(240, 130, 'Why did it change?', { size: 19, weight: 700, anchor: 'middle' });
  causes.forEach(([h, d], i) => {
    const y = 145 + i * 84;
    b += panel(40, y, 400, 72) + t(60, y + 30, h, { size: 18, weight: 700, fill: C.tealDark }) + tl(60, y + 54, wrap(d, 44), { size: 15 }, 18);
  });
  b += t(660, 130, 'How do languages relate?', { size: 19, weight: 700, anchor: 'middle' });
  // tree model
  b += panel(460, 145, 400, 200) + t(484, 175, 'Tree model', { size: 18, weight: 700 }) + t(484, 197, 'August Schleicher', { size: 15, fill: C.muted });
  b += path('M760,175 L760,215 M760,215 L700,260 M760,215 L820,260 M700,260 L670,305 M700,260 L730,305', { stroke: C.tealDark, w: 3 });
  [[760, 175], [700, 260], [820, 260], [670, 305], [730, 305]].forEach(([x, y]) => { b += `<circle cx="${x}" cy="${y}" r="9" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`; });
  b += tl(484, 240, ['branches descend', 'from common', 'ancestors'], { size: 15 }, 19);
  // wave model
  b += panel(460, 360, 400, 200) + t(484, 390, 'Wave model', { size: 18, weight: 700 }) + t(484, 412, 'Johannes Schmidt', { size: 15, fill: C.muted });
  [24, 48, 72].forEach((r) => { b += `<circle cx="760" cy="465" r="${r}" fill="none" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="${r === 24 ? '' : '6 5'}"/>`; });
  b += `<circle cx="760" cy="465" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  b += tl(484, 455, ['changes ripple out', 'from a centre across', 'neighbouring varieties'], { size: 15 }, 19);
  b += panel(40, 580, 820, 92, C.cream, C.mustard) +
    t(64, 614, 'Attitudes: prescriptivism treats change as decline; descriptivism records it.', { size: 17, weight: 700 }) +
    t(64, 646, 'Aitchison\'s "crumbling castle" names a prescriptive fear that she challenges.', { size: 16, fill: C.muted });
  add('05-theories-of-change',
    svg(900, 695, 'Theories of change', b),
    'Five theories that explain why change happens: random fluctuation, cultural transmission, lexical gaps, substratum and functional theory. Beside them, two models of how languages relate: Schleicher\'s tree model of branches from common ancestors and Schmidt\'s wave model of changes rippling out from a centre. A note contrasts prescriptivism and descriptivism.',
    'Use a theory to explain why a change happened, not just to label it.',
    '## Theories and theorists');
}

// 06 Reading an n-gram graph
{
  const gx = 90, gy = 130, gw = 430, gh = 300;
  let b = panel(40, 112, 520, 400);
  b += `<line x1="${gx}" y1="${gy + gh}" x2="${gx + gw}" y2="${gy + gh}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>` +
    `<line x1="${gx}" y1="${gy + gh}" x2="${gx}" y2="${gy}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>`;
  b += t(gx + gw / 2, gy + gh + 34, 'time (years)', { size: 15, anchor: 'middle', fill: C.muted });
  b += `<text x="0" y="0" font-size="15" fill="${C.muted}" text-anchor="middle" transform="translate(${gx - 18} ${gy + gh / 2}) rotate(-90)">relative frequency</text>`;
  b += path(`M${gx + 10},${gy + 60} C${gx + 150},${gy + 70} ${gx + 220},${gy + 220} ${gx + 400},${gy + 270}`, { stroke: C.rust, w: 4 });
  b += path(`M${gx + 10},${gy + 270} C${gx + 150},${gy + 260} ${gx + 220},${gy + 90} ${gx + 400},${gy + 50}`, { stroke: C.tealDark, w: 4 });
  b += `<circle cx="${gx + 205}" cy="${gy + 162}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(gx + 222, gy + 190, 'crossover', { size: 15, weight: 700 });
  b += t(gx + 30, gy + 45, 'older form', { size: 16, weight: 700, fill: C.rust }) + t(gx + 300, gy + 40, 'newer form', { size: 16, weight: 700, fill: C.tealDark });
  b += t(300, 500, 'Illustrative shape only, no real data', { size: 14.5 + 0.5, anchor: 'middle', fill: C.muted, italic: true });
  const steps = [['State', 'what is plotted and the time span'], ['Describe', 'each trend: rise, fall, crossover, plateau'], ['Date', 'approximate dates, comparative language'], ['Interpret', 'link to a process and a theory'], ['Qualify', 'printed texts only; long s misread as "f"; frequency is not meaning']];
  steps.forEach(([h, d], i) => {
    const y = 112 + i * 80;
    b += rect(580, y, 280, 70, i === 4 ? C.cream : C.tealLight, i === 4 ? C.mustard : C.tealDark, 2, 10) + badge(606, y + 35, 15, String(i + 1), C.panel) +
      t(630, y + 28, h, { size: 17, weight: 700 }) + tl(630, y + 49, wrap(d, 27), { size: 14.5 + 0.5, fill: C.ink }, 17);
  });
  b += t(450, 545, 'Comparisons to look for: variant spellings, synonyms, parts of speech, inflections ("hath" against "has"), collocations', { size: 14.5 + 0.5, anchor: 'middle', fill: C.muted });
  add('06-reading-n-gram',
    svg(900, 570, 'Reading an n-gram graph', b),
    'A schematic n-gram graph with relative frequency against time, where an older form falls and a newer form rises until they cross. Beside it, five steps: state what is plotted, describe each trend, give approximate dates, interpret through a process and theory, and qualify the evidence, since the corpus contains only printed texts.',
    'Describe the trend, then interpret it, then qualify what the data can show.',
    '## Reading the data');
}

// 07 Collocates as evidence of meaning
{
  let b = rect(350, 115, 200, 70, C.panel, C.ink, 3) + t(450, 160, '"awful"', { size: 26, weight: 700, italic: true, anchor: 'middle' });
  b += panel(40, 210, 380, 230, C.cream, C.mustard) + t(230, 245, 'Older data', { size: 19, weight: 700, anchor: 'middle' });
  ['majesty', 'power'].forEach((w, i) => { b += rect(90 + i * 150, 270, 130, 46, C.panel, C.mustard, 2, 23) + t(155 + i * 150, 300, w, { size: 18, italic: true, anchor: 'middle' }); });
  b += t(230, 360, 'meaning:', { size: 15, anchor: 'middle', fill: C.muted }) + t(230, 392, '"awe-inspiring"', { size: 20, weight: 700, anchor: 'middle' });
  b += panel(480, 210, 380, 230, C.tealLight, C.tealDark) + t(670, 245, 'Recent data', { size: 19, weight: 700, anchor: 'middle' });
  ['weather', 'mistake'].forEach((w, i) => { b += rect(530 + i * 150, 270, 130, 46, C.panel, C.tealDark, 2, 23) + t(595 + i * 150, 300, w, { size: 18, italic: true, anchor: 'middle' }); });
  b += t(670, 360, 'meaning:', { size: 15, anchor: 'middle', fill: C.muted }) + t(670, 392, '"very bad"', { size: 20, weight: 700, anchor: 'middle' });
  b += arrow(422, 325, 476, 325, { w: 5 });
  b += path('M400,170 L230,205', { w: 2.5 }) + path('M500,170 L670,205', { w: 2.5 });
  b += panel(40, 460, 820, 90) + t(64, 495, 'Collocates are evidence of meaning', { size: 18, weight: 700 }) +
    t(64, 526, 'Here: pejoration, and weakening into an intensifier.', { size: 17, fill: C.muted });
  add('07-collocates-awful',
    svg(900, 575, 'What collocates reveal', b),
    'In older corpus data "awful" collocates with "majesty" and "power", meaning awe-inspiring; in recent data it collocates with "weather" and "mistake", meaning very bad. The shift shows pejoration and weakening into an intensifier.',
    'Changing collocates show a word\'s meaning shifting over time.',
    '## Reading the data');
}

// 08 Synthesising three sources
{
  let b = panel(40, 112, 820, 95, C.cream, C.mustard) +
    tl(64, 145, ['"Sir, I have receiv\'d your Letter, and do most heartily thank you for the Care you shew\'d my Son.', 'He hath been sicke these three Daies, yet the Physick worketh well, and I doubt not he shall be', 'recover\'d ere Sunday."'], { size: 15.5 + 0.5, italic: true }, 22);
  const rows = [
    ['Orthography', '"shew\'d", "sicke", "Daies"', 'n-gram: "shew" falls, "show" rises; crossover in the 18th century', 'cultural transmission, not random fluctuation'],
    ['Grammar', '"hath", "worketh"; "I doubt not"', 'the "-eth" inflection later replaced by "-s"; negation without "do"', 'the syntax now sounds archaic'],
    ['Lexis', '"Physick" = medicine', 'word table: old collocates of "physic" now cluster around "medicine"', 'one word replaces another in the same semantic space'],
  ];
  b += t(160, 240, 'Prose text', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + t(470, 240, 'Data', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(745, 240, 'Concept', { size: 15, weight: 700, anchor: 'middle', fill: C.ink });
  rows.forEach(([lvl, txt, data, con], i) => {
    const y = 255 + i * 120;
    b += t(40, y + 20, lvl, { size: 17, weight: 700 }) +
      rect(40, y + 32, 240, 74, C.cream, C.mustard, 2, 9) + tl(56, y + 64 - (wrap(txt, 25).length - 1) * 10, wrap(txt, 25), { size: 15, italic: true }, 20) +
      rect(300, y + 32, 340, 74, C.tealLight, C.tealDark, 2, 9) + tl(316, y + 64 - (wrap(data, 36).length - 1) * 10, wrap(data, 36), { size: 15 }, 20) +
      rect(660, y + 32, 200, 74, C.panel, C.ink, 2, 9) + tl(674, y + 64 - (wrap(con, 22).length - 1) * 10, wrap(con, 22), { size: 15 }, 20) +
      t(290, y + 74, '+', { size: 20, weight: 700, anchor: 'middle' }) + t(650, y + 74, '+', { size: 20, weight: 700, anchor: 'middle' });
  });
  b += t(450, 625, 'Each paragraph combines text, data and a concept. The data here are invented for the example.', { size: 15, anchor: 'middle', fill: C.muted });
  add('08-synthesis',
    svg(900, 650, 'Synthesising the three sources', b),
    'The lesson\'s seventeenth-century-style letter, then three paragraphs mapped as text plus data plus concept: orthography ("shew\'d") with an n-gram crossover and cultural transmission; grammar ("hath", "I doubt not") with the loss of -eth and of negation without do; and lexis ("Physick") with collocates moving to "medicine".',
    'Each paragraph moves between the prose text, the data and a concept.',
    '## Worked example: synthesising three sources');
}
