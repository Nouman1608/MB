import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-english-language-7702-methods-of-language-analysis-3-2-2';
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

// 01 Three jobs
{
  const jobs = [
    ['Identify and describe', 'features of diversity and change', 'Name a dialect form, an older spelling convention or a semantic shift precisely', 'Evidence in the Section A essay; analysis of older Section B texts', C.teal],
    ['Research', 'diversity and change', 'Read dictionary entries, corpus results, surveys and research findings', 'Supporting claims about when and how a change happened', C.tealLight],
    ['Analyse', 'how texts present ideas about language', 'Examine the lexis, grammar and pragmatics a writer uses about language', 'The Section B analysis of two texts', C.cream],
  ];
  let b = '';
  jobs.forEach(([h, sub, look, pay, fill], i) => {
    const x = 40 + i * 280;
    b += panel(x, 115, 260, 430) + rect(x + 12, 127, 236, 96, fill, C.ink, 2, 10) +
      t(x + 130, 160, h, { size: 18, weight: 700, anchor: 'middle' }) +
      tl(x + 130, 186, wrap(sub, 26), { size: 15, anchor: 'middle', fill: C.ink }, 19) + badge(x + 14, 127, 16, String(i + 1), C.mustard) +
      t(x + 22, 262, 'What it looks like', { size: 15, weight: 700, fill: C.muted }) +
      tl(x + 22, 290, wrap(look, 25), { size: 17 }, 23) +
      `<line x1="${x + 22}" y1="395" x2="${x + 238}" y2="395" stroke="${C.panelEdge}" stroke-width="2"/>` +
      t(x + 22, 425, 'Where it pays off', { size: 15, weight: 700, fill: C.tealDark }) +
      tl(x + 22, 453, wrap(pay, 25), { size: 17 }, 23);
  });
  b += panel(40, 565, 820, 70, C.cream, C.mustard) +
    t(450, 608, 'Lexis and semantics: "including social and historical variation". In Paper 2, variation is the point.', { size: 16, anchor: 'middle' });
  add('01-three-jobs',
    svg(900, 660, 'Three jobs for the methods in Paper 2', b),
    'Three columns for the three jobs: identifying and describing features of diversity and change, researching diversity and change through dictionaries, corpora, surveys and research, and analysing how texts present ideas about language. Each shows what it looks like and where it pays off in Paper 2.',
    'The same six levels, used for three different jobs in Paper 2.',
    '## Three jobs for the methods');
}

// 02 Describing accent and respelling
{
  const feats = [
    ['h-dropping', ''],
    ['TH-fronting', '/θ/ as /f/: "think" sounds like "fink"'],
    ['Glottal stop', 'replacing /t/ in "butter"'],
    ['Rhotic accents', 'pronounce /r/ after vowels'],
    ['Non-rhotic accents', 'do not'],
  ];
  let b = panel(40, 115, 380, 420) + t(230, 152, 'Describe by the sound', { size: 21, weight: 700, anchor: 'middle' });
  feats.forEach(([h, d], i) => {
    const y = 175 + i * 70;
    b += rect(60, y, 340, 58, i % 2 ? C.tealLight : C.panel, C.panelEdge, 2, 10) + t(78, y + (d ? 25 : 36), h, { size: 18, weight: 700 }) + (d ? t(78, y + 47, d, { size: 15, fill: C.muted }) : '');
  });
  // respelling decision
  b += panel(440, 115, 420, 420) + t(650, 152, 'Accent shown in spelling?', { size: 21, weight: 700, anchor: 'middle' });
  b += `<polygon points="650,172 830,232 650,292 470,232" fill="${C.cream}" stroke="${C.mustard}" stroke-width="3"/>` +
    tl(650, 225, ['Does the spelling change', 'the pronunciation?'], { size: 16, weight: 600, anchor: 'middle' }, 21);
  b += path('M520,262 L520,330', { w: 3, extra: 'marker-end="url(#ah)"' }) + t(505, 305, 'yes', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
  b += path('M780,262 L780,330', { w: 3, extra: 'marker-end="url(#ah)"' }) + t(795, 305, 'no', { size: 16, weight: 700, fill: C.rust });
  b += rect(455, 336, 190, 182, C.tealLight, C.tealDark, 2.5) + tl(550, 368, ['Phonetic', 'respelling'], { size: 18, weight: 700, anchor: 'middle' }, 23) +
    t(550, 428, '"\'ow", "reet"', { size: 17, italic: true, anchor: 'middle' }) +
    tl(550, 462, ['a representation', 'chosen by the writer'], { size: 15, anchor: 'middle', fill: C.muted }, 19);
  b += rect(655, 336, 190, 182, C.cream, C.mustard, 2.5) + t(750, 368, 'Eye dialect', { size: 18, weight: 700, anchor: 'middle' }) +
    t(750, 410, '"wuz" for "was"', { size: 17, italic: true, anchor: 'middle' }) +
    tl(750, 446, ['used to make a', 'speaker seem', 'uneducated'], { size: 15, anchor: 'middle', fill: C.muted }, 19);
  add('02-accent-and-respelling',
    svg(900, 560, 'Describing accent precisely', b),
    'Left: accent features named by the sound involved, including h-dropping, TH-fronting, the glottal stop for /t/, and rhotic versus non-rhotic accents. Right: when accent is shown in spelling, a respelling that changes the pronunciation is phonetic respelling, while one that does not, such as "wuz" for "was", is eye dialect.',
    'Name the sound, and distinguish phonetic respelling from eye dialect.',
    '## Job 1: describing diversity and change precisely');
}

// 03 Grammar labels
{
  const rows = [
    ['Multiple negation', '"I never said nothing"'],
    ['Levelled past tense of BE', '"we was", "it weren\'t"'],
    ['Non-standard past forms', '"I seen it", "she done it"'],
    ['Zero plural after numbers', '"ten mile"'],
    ['Second-person plural pronouns', '"youse", "y\'all"'],
    ['Older forms', '"-eth" and "-est" endings, "thou/thee", "I know not"'],
  ];
  let b = rect(40, 112, 820, 52, C.cream, C.mustard, 2.5) +
    t(64, 145, 'Not', { size: 18, weight: 700, fill: C.rust }) + t(110, 145, '"wrong grammar"', { size: 18, italic: true }) +
    t(300, 145, 'Use a descriptive label for each pattern:', { size: 18, weight: 600 });
  rows.forEach(([l, ex], i) => {
    const y = 182 + i * 66;
    b += panel(40, y, 820, 56) + rect(52, y + 8, 330, 40, i === 5 ? C.tealLight : C.teal, C.ink, 2, 9) +
      t(217, y + 34, l, { size: 17, weight: 700, anchor: 'middle' }) + t(400, y + 35, ex, { size: 18, italic: true });
  });
  const y = 182 + 6 * 66 + 6;
  b += t(450, y + 26, 'Word formation: name the process: compounding, blending, affixation, clipping, conversion', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-grammar-labels',
    svg(900, y + 50, 'Labels for non-standard grammar', b),
    'Six descriptive labels with the lesson\'s examples: multiple negation, levelled past tense of BE, non-standard past forms, zero plural after numbers, second-person plural pronouns, and older forms such as -eth endings, thou and thee, and the absence of do-support.',
    'Describe dialect and older grammar with labels, not as errors.',
    '## Job 1: describing diversity and change precisely');
}

// 04 Dialect utterance annotated
{
  const words = [['We was', C.teal], ['sat', C.cream], ['there for ages and there', null], ['weren\'t nobody', C.teal], ['about, so we', null], ['come', C.cream], ['home.', null]];
  let b = panel(40, 112, 820, 120, C.panel);
  // two lines
  const line1 = words.slice(0, 4), line2 = words.slice(4);
  const draw = (arr, y) => {
    let x = 64, s = '';
    for (const [w, fill] of arr) {
      const wd = w.length * 21 * 0.57 + 10;
      if (fill) s += rect(x - 4, y - 26, wd + 4, 36, fill, C.ink, 2, 8);
      s += t(x + 1, y, w, { size: 21, italic: true, weight: fill ? 600 : 400 });
      x += wd + 16;
    }
    return s;
  };
  b += draw(line1, 160) + draw(line2, 206);
  const notes = [
    ['"We was"', 'levelled past tense of BE: "was" with a plural subject', C.teal],
    ['"sat"', 'past participle used for the progressive "sitting", common in northern and Midland English', C.cream],
    ['"weren\'t nobody"', 'multiple negation, plus levelled "weren\'t" with a singular subject', C.teal],
    ['"come" (past)', 'non-standard past tense, identical to the base form', C.cream],
  ];
  notes.forEach(([k, d, fill], i) => {
    const y = 255 + i * 82;
    const dl = wrap(d, 52);
    b += panel(40, y, 820, 70) + rect(52, y + 12, 210, 46, fill, C.ink, 2, 9) + t(157, y + 41, k, { size: 17, weight: 700, anchor: 'middle', italic: true }) +
      tl(282, y + 35 - (dl.length - 1) * 11 + 4, dl, { size: 17 }, 22);
  });
  const y = 255 + 4 * 82 + 8;
  const steps = ['Describe its grammar', 'Compare with Standard English', 'Place it as a regular pattern'];
  steps.forEach((s, i) => {
    const x = 40 + i * 285;
    b += rect(x, y, 250, 56, C.tealLight, C.tealDark, 2.5) + t(x + 125, y + 34, s, { size: 15, weight: 700, anchor: 'middle' });
    if (i < 2) b += arrow(x + 252, y + 28, x + 283, y + 28, { w: 3 });
  });
  b += t(450, y + 92, 'Then explain it in an essay through networks, prestige or identity.', { size: 17, anchor: 'middle', fill: C.muted });
  add('04-dialect-utterance',
    svg(900, y + 115, 'Describing a dialect utterance', b),
    'The lesson\'s constructed sentence "We was sat there for ages and there weren\'t nobody about, so we come home" with four features highlighted: levelled past tense of BE, "sat" for "sitting", multiple negation with levelled "weren\'t", and "come" as a past tense. Three steps below: describe the grammar, compare with Standard English, place it as a regular pattern.',
    'Each feature is a regular pattern of a variety, described precisely, not an error.',
    '## Worked example: describing a dialect utterance');
}

// 05 Research sources and cautions
{
  const src = [
    ['Historical dictionary', 'e.g. Oxford English Dictionary', 'earliest recorded uses; dated quotations', 'first recorded use is not first use'],
    ['Corpora', 'e.g. British National Corpus', 'frequency, collocates, concordance lines', 'reflects the text types it contains'],
    ['Frequency tools', 'e.g. Google Books Ngram Viewer', 'trends in printed use over centuries', 'under-represents informal and spoken use'],
    ['Dialect surveys', 'e.g. Survey of English Dialects, 1950s', 'where forms were used and by whom', 'speakers may not represent the community'],
    ['Research findings', 'tables, graphs, statistics', 'patterns across groups or periods', 'check sample size, method, what is measured'],
  ];
  let b = t(325, 128, 'Tells you', { size: 16, weight: 700, fill: C.tealDark }) + t(582, 128, 'Caution', { size: 16, weight: 700, fill: C.rust });
  src.forEach(([h, eg, tell, caut], i) => {
    const y = 142 + i * 98;
    b += panel(40, y, 820, 86) + t(60, y + 32, h, { size: 18, weight: 700 }) + tl(60, y + 56, wrap(eg, 28), { size: 15, fill: C.muted }, 19) +
      tl(325, y + 37, wrap(tell, 22), { size: 16 }, 21) +
      rect(570, y + 12, 278, 62, C.cream, C.mustard, 2, 9) + tl(584, y + 38, wrap(caut, 29), { size: 15 }, 19);
  });
  add('05-research-sources',
    svg(900, 650, 'Research sources and their limits', b),
    'Five research sources, each with what it tells you and a caution: historical dictionaries, corpora, frequency tools across books, dialect surveys such as the 1950s Survey of English Dialects, and research findings.',
    'Every source answers a different question, and each has a limit to state.',
    '## Job 2: researching diversity and change');
}

// 06 Normalised frequency
{
  let b = panel(40, 115, 820, 150, C.tealLight, C.tealDark) +
    t(450, 155, 'frequency per million', { size: 20, weight: 700, anchor: 'middle' }) +
    t(450, 200, '= (raw count ÷ corpus size in words) × 1,000,000', { size: 22, weight: 600, anchor: 'middle' }) +
    t(450, 240, 'so corpora of different sizes can be compared', { size: 17, anchor: 'middle', fill: C.muted });
  b += t(450, 305, 'Hypothetical illustration', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  const box = (x, top, mid, bot, fill) => rect(x, 325, 220, 120, fill, C.ink, 2.5) +
    t(x + 110, 365, top, { size: 16, anchor: 'middle', fill: C.muted }) + t(x + 110, 405, mid, { size: 26, weight: 700, anchor: 'middle' }) +
    t(x + 110, 432, bot, { size: 15, anchor: 'middle', fill: C.muted });
  b += box(40, 'raw count', '50', 'occurrences', C.panel) + t(290, 395, '÷', { size: 32, weight: 700, anchor: 'middle' }) +
    box(340, 'corpus size', '2,000,000', 'words', C.panel) + arrow(565, 385, 625, 385, { w: 4 }) +
    box(640, 'normalised', '25', 'per million words', C.cream);
  b += panel(40, 470, 400, 120) + t(64, 505, 'Concordance', { size: 19, weight: 700 }) +
    tl(64, 535, ['each occurrence in its context:', 'lets you check meaning'], { size: 17, fill: C.muted }, 23);
  b += panel(460, 470, 400, 120) + t(484, 505, 'Collocates', { size: 19, weight: 700 }) +
    tl(484, 535, ['words a term habitually appears with:', 'can reveal semantic change or attitudes'], { size: 17, fill: C.muted }, 23);
  add('06-normalised-frequency',
    svg(900, 615, 'Reading corpus results', b),
    'The formula for normalised frequency, raw count divided by corpus size in words, multiplied by one million, with the lesson\'s hypothetical example: 50 occurrences in a 2-million-word corpus is 25 per million. Concordance lines show each occurrence in context and collocates show habitual word partners.',
    'Normalise counts per million words before comparing corpora of different sizes.',
    '## Job 2: researching diversity and change');
}

// 07 Real time vs apparent time
{
  let b = panel(40, 115, 400, 420) + t(240, 152, 'Real-time study', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    t(240, 178, 'same community, two dates', { size: 16, anchor: 'middle', fill: C.muted });
  b += arrow(70, 420, 410, 420, { w: 3 }) + t(240, 455, 'time', { size: 16, anchor: 'middle', fill: C.muted });
  [[110, 'Date 1'], [290, 'Date 2']].forEach(([x, l]) => {
    b += rect(x, 230, 120, 150, C.tealLight, C.tealDark, 2.5) + t(x + 60, 270, 'Community', { size: 16, weight: 700, anchor: 'middle' }) +
      [0, 1, 2].map((k) => `<circle cx="${x + 30 + k * 30}" cy="320" r="12" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`).join('') +
      `<line x1="${x + 60}" y1="380" x2="${x + 60}" y2="420" stroke="${C.ink}" stroke-width="2.5"/>` + t(x + 60, 405 + 0, '', {}) +
      t(x + 60, 362, l, { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  });
  b += panel(460, 115, 400, 420) + t(660, 152, 'Apparent-time study', { size: 21, weight: 700, anchor: 'middle', fill: C.olive }) +
    t(660, 178, 'age groups compared at one date', { size: 16, anchor: 'middle', fill: C.muted });
  [['Older', 0], ['Middle', 1], ['Younger', 2]].forEach(([l, k]) => {
    const y = 205 + k * 70;
    b += rect(500, y, 320, 56, [C.cream, C.sand, C.panel][k], C.ink, 2, 10) + t(520, y + 35, l + ' speakers', { size: 17, weight: 600 });
  });
  b += tl(660, 440, ['Assumes older speakers', 'preserve earlier usage'], { size: 17, anchor: 'middle' }, 23);
  b += panel(40, 555, 820, 80, C.cream, C.mustard) +
    t(64, 590, 'Caution for apparent time:', { size: 18, weight: 700, fill: C.rust }) +
    t(64, 618, 'differences between age groups may instead be age grading.', { size: 17 });
  add('07-real-and-apparent-time',
    svg(900, 660, 'Real time and apparent time', b),
    'A real-time study compares the same community at two dates. An apparent-time study compares older, middle and younger speakers at one date, assuming older speakers preserve earlier usage. A caution notes that age-group differences may instead be age grading.',
    'Real time compares dates; apparent time compares age groups and risks confusing change with age grading.',
    '## Job 2: researching diversity and change');
}

// 08 Reading a writer's stance
{
  const rows = [
    ['Lexis', 'evaluative words: "sloppy", "mangled", "vibrant", "rich"; metaphors of decay, disease, invasion or growth'],
    ['Grammar', 'generic noun phrases ("young people today") generalise'],
    ['Pragmatics', 'presuppositions ("the decline of English"), irony and humour, appeals to shared common sense'],
    ['Discourse', 'anecdote versus evidence, the order of arguments, whose voices are quoted'],
    ['Graphology', 'quoted "errors" in bold or capitals invite ridicule; headings frame the issue'],
  ];
  let b = panel(40, 115, 395, 110, C.cream, C.mustard) + t(64, 150, 'Prescriptive signal', { size: 18, weight: 700, fill: C.rust }) +
    t(64, 180, 'modal verbs of obligation', { size: 17 }) + t(64, 207, '"should", "must"', { size: 18, italic: true, weight: 600 });
  b += panel(465, 115, 395, 110, C.tealLight, C.tealDark) + t(489, 150, 'Descriptive signal', { size: 18, weight: 700, fill: C.tealDark }) +
    t(489, 180, 'hedged claims', { size: 17 }) + t(489, 207, '"may", "research suggests"', { size: 18, italic: true, weight: 600 });
  b += t(450, 262, 'Other clues to the writer\'s stance', { size: 19, weight: 700, anchor: 'middle' });
  let y = 280;
  rows.forEach(([l, d]) => {
    const dl = wrap(d, 58);
    const h = Math.max(58, 22 + dl.length * 23);
    b += panel(40, y, 820, h) + rect(52, y + 9, 160, h - 18, C.teal, C.ink, 2, 9) + t(132, y + h / 2 + 6, l, { size: 17, weight: 700, anchor: 'middle' }) +
      tl(230, y + h / 2 + 6 - (dl.length - 1) * 11.5, dl, { size: 16 }, 23);
    y += h + 10;
  });
  add('08-reading-stance',
    svg(900, y + 15, 'How a text about language shows its stance', b),
    'Modal verbs of obligation such as "should" and "must" signal prescriptive views, while hedged claims such as "may" and "research suggests" signal descriptive ones. Further clues are listed by level: evaluative lexis and metaphors, generic noun phrases, presuppositions and irony, the structure of the argument, and graphology that ridicules quoted errors.',
    'The language a writer uses about language reveals their stance.',
    '## Job 3: analysing how texts present ideas about language');
}
