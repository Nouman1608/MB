import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-language-9093-section-b-language-and-the-self';
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

// 01 Born or made
{
  let b = `<defs><linearGradient id="bm" x1="0" x2="1"><stop offset="0" stop-color="${C.cream}"/><stop offset="1" stop-color="${C.teal}"/></linearGradient></defs>`;
  b += `<rect x="40" y="125" width="820" height="50" rx="25" fill="url(#bm)" stroke="${C.ink}" stroke-width="2.5"/>` +
    t(64, 157, 'MADE: learned from experience', { size: 17, weight: 700 }) + t(836, 157, 'BORN: innate capacity', { size: 17, weight: 700, anchor: 'end' });
  const col = (x, fill, edge, h1, w1, d1, h2, w2, d2) =>
    panel(x, 200, 340, 330, C.panel, edge) +
    rect(x + 14, 214, 312, 140, fill, C.ink, 2, 10) + t(x + 30, 242, h1, { size: 19, weight: 700 }) + t(x + 30, 264, w1, { size: 15, fill: C.muted }) + tl(x + 30, 292, d1, { size: 15 }, 20) +
    rect(x + 14, 368, 312, 148, fill, C.ink, 2, 10) + t(x + 30, 396, h2, { size: 19, weight: 700 }) + t(x + 30, 418, w2, { size: 15, fill: C.muted }) + tl(x + 30, 446, d2, { size: 15 }, 20);
  b += col(40, C.cream, C.mustard, 'Empiricism', 'philosophy; John Locke', ['knowledge comes from experience;', 'the mind begins as a "blank slate"'],
    'Behaviourism', 'B.F. Skinner, Verbal Behavior (1957)', ['language is learned behaviour shaped', 'by imitation and reinforcement']);
  b += col(520, C.tealLight, C.tealDark, 'Innatism', 'philosophy; roots in Plato, Descartes', ['some ideas or capacities are', 'present from birth'],
    'Nativism', 'Noam Chomsky; Steven Pinker (1994)', ['complex grammar from limited input', '("poverty of the stimulus"): an', 'innate capacity for language']);
  b += rect(390, 300, 120, 120, C.mustard, C.ink, 2.5, 60) + tl(450, 352, ['interaction-', 'ist middle'], { size: 15, weight: 700, anchor: 'middle' }, 20);
  b += arrow(390, 360, 384, 360, { w: 3 }) + arrow(510, 360, 516, 360, { w: 3 });
  b += t(450, 445, 'most linguists', { size: 15, anchor: 'middle', fill: C.muted }) + t(450, 465, 'now', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(40, 550, 820, 90, C.cream, C.mustard) +
    t(64, 584, 'For the self:', { size: 17, weight: 700 }) +
    t(180, 584, 'if largely innate, part of what makes us human is shared;', { size: 16 }) +
    t(180, 612, 'if largely learned, our language and perhaps our identity are shaped by environment.', { size: 16 });
  add('01-born-or-made',
    svg(900, 665, 'Is language born or made?', b),
    'A scale from learned to innate. On the learned side, empiricism (Locke\'s blank slate) and Skinner\'s behaviourism; on the innate side, innatism and Chomsky\'s nativism with the poverty of the stimulus, popularised by Pinker. Most linguists now take an interactionist middle position.',
    'Four positions on one question: how much of language is born and how much is made.',
    '## Strand 1: innateness and learning');
}

// 02 Evidence for innateness
{
  const ev = [
    ['Critical period hypothesis', 'Eric Lenneberg, 1967', 'language is acquired most readily before puberty', '', C.tealLight],
    ['Genie', 'discovered in 1970', 'after severe isolation, learned vocabulary but struggled with grammar', 'caution: the abuse she suffered makes firm conclusions difficult', C.cream],
    ['Nicaraguan Sign Language', '1980s', 'developed among deaf children brought together in schools', 'cited as children creating grammatical structure', C.teal],
  ];
  let b = '';
  ev.forEach(([h, d, w, n, fill], i) => {
    const x = 40 + i * 280;
    b += panel(x, 115, 260, 330) + rect(x + 12, 127, 236, 92, fill, C.ink, 2, 10) +
      tl(x + 130, 162 - (wrap(h, 18).length - 1) * 10, wrap(h, 18), { size: 19, weight: 700, anchor: 'middle' }, 22) +
      t(x + 130, 206, d, { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
      tl(x + 24, 258, wrap(w, 24), { size: 16 }, 22) +
      (n ? rect(x + 14, 335, 232, 96, i === 1 ? C.panel : C.panel, i === 1 ? C.rust : C.panelEdge, 2, 9) + tl(x + 26, 362, wrap(n, 24), { size: 15, fill: i === 1 ? C.rust : C.muted, weight: i === 1 ? 600 : 400 }, 20) : '');
  });
  add('02-evidence-innateness',
    svg(900, 470, 'Evidence cited in the innateness debate', b),
    'Three pieces of evidence: Lenneberg\'s critical period hypothesis (1967), that language is acquired most readily before puberty; Genie, found in 1970, who learned vocabulary but struggled with grammar, with the caution that her abuse makes conclusions difficult; and Nicaraguan Sign Language, developed by deaf children in schools in the 1980s.',
    'Each case is evidence to weigh, and Genie\'s needs a caution.',
    '## Strand 1: innateness and learning');
}

// 03 Language and thought: four positions with evidence
{
  const pos = [
    ['Linguistic determinism', 'strong Sapir-Whorf', 'language determines thought', 'Whorf on Hopi time, challenged by Malotki (1983); Orwell\'s Newspeak as fiction', 'L', C.rust],
    ['Linguistic relativity', 'weak Sapir-Whorf', 'language influences habitual thought', 'Kay and Kempton (1984): blue-green; compass directions in Guugu Yimithirr, Kuuk Thaayorre', 'l', C.tealDark],
    ['Universalism', '', 'perception shapes language', 'Berlin and Kay (1969): basic colour terms added in a predictable order', 'T', C.olive],
    ['Language of thought', 'Jerry Fodor (1975)', 'thinking in an internal "mentalese"', 'language expresses thought rather than containing it', 'M', C.ink],
  ];
  let b = '';
  pos.forEach(([h, sub, claim, ev, kind, col], i) => {
    const y = 115 + i * 130;
    b += panel(40, y, 820, 116);
    // mini diagram
    const dx = 70, dy = y + 18;
    const box = (x, s, f) => rect(x, dy, 90, 46, f, C.ink, 2, 9) + t(x + 45, dy + 29, s, { size: 15, weight: 700, anchor: 'middle' });
    if (kind === 'L') b += box(dx, 'language', C.cream) + arrow(dx + 92, dy + 23, dx + 128, dy + 23, { w: 6, color: col, marker: 'ahR' }) + box(dx + 132, 'thought', C.panel);
    if (kind === 'l') b += box(dx, 'language', C.cream) + arrow(dx + 92, dy + 23, dx + 128, dy + 23, { w: 2.5, color: col, marker: 'ahT', dash: '6 4' }) + box(dx + 132, 'thought', C.panel);
    if (kind === 'T') b += box(dx, 'thought', C.panel) + arrow(dx + 92, dy + 23, dx + 128, dy + 23, { w: 3.5, color: col, marker: 'ahO' }) + box(dx + 132, 'language', C.cream);
    if (kind === 'M') b += box(dx, 'mentalese', C.tealLight) + arrow(dx + 92, dy + 23, dx + 128, dy + 23, { w: 3.5 }) + box(dx + 132, 'language', C.cream);
    b += tl(70, y + 88, wrap(claim, 30), { size: 15, fill: C.muted }, 18);
    b += t(345, y + 34, h, { size: 19, weight: 700, fill: col }) + (sub ? t(345 + h.length * 10.4 + 14, y + 34, sub, { size: 15, fill: C.muted }) : '') +
      tl(345, y + 64, wrap(ev, 52), { size: 16 }, 22);
  });
  b += panel(40, 640, 820, 80, C.cream, C.mustard) +
    t(64, 672, 'For the self: labels and framing can shape how we see ourselves and others,', { size: 16, weight: 600 }) +
    t(64, 698, '"a diabetic" or "a person with diabetes". Weak relativity explains this without claiming it is absolute.', { size: 15 });
  add('03-language-and-thought',
    svg(900, 745, 'How language and thought relate', b),
    'Four positions, each with a small arrow diagram and evidence: linguistic determinism (language determines thought; Whorf on Hopi, challenged by Malotki), linguistic relativity (language influences thought; Kay and Kempton, compass-direction languages), universalism (thought shapes language; Berlin and Kay) and Fodor\'s language of thought (mentalese expressed in language).',
    'Separate the strong and weak versions of Sapir-Whorf, and set them against universalism and mentalese.',
    '## Strand 2: language and thought');
}

// 04 Varieties: idiolect to speech community
{
  let b = `<ellipse cx="300" cy="370" rx="250" ry="235" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` +
    t(300, 172, 'Speech community', { size: 19, weight: 700, anchor: 'middle' }) + t(300, 196, 'shared norms of use', { size: 15, anchor: 'middle', fill: C.muted }) +
    `<ellipse cx="300" cy="400" rx="180" ry="165" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` +
    t(300, 278, 'Dialect or sociolect', { size: 17, weight: 700, anchor: 'middle' }) + t(300, 300, 'region / social group', { size: 15, anchor: 'middle' }) +
    `<circle cx="300" cy="430" r="82" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + t(300, 426, 'Idiolect', { size: 18, weight: 700, anchor: 'middle' }) + t(300, 450, 'one individual', { size: 15, anchor: 'middle' });
  const rows = [
    ['Idiolect', 'favourite words, fillers, pronunciations'],
    ['Dialect', 'region, own lexis and grammar: "youse"'],
    ['Sociolect', 'social group, e.g. professional jargon'],
    ['Speech community', 'a school, a city, an online fandom'],
  ];
  rows.forEach(([h, d], i) => {
    const y = 150 + i * 105;
    b += panel(570, y, 290, 92) + t(590, y + 34, h, { size: 18, weight: 700 }) + tl(590, y + 60, wrap(d, 30), { size: 15 }, 19);
  });
  b += panel(40, 620, 820, 62, C.cream, C.mustard) + t(450, 658, 'Accent is pronunciation; dialect is lexis and grammar. Do not confuse them.', { size: 17, weight: 600, anchor: 'middle' });
  add('04-varieties-nested',
    svg(900, 705, 'From idiolect to speech community', b),
    'Nested circles: an individual\'s idiolect sits inside a dialect or sociolect, which sits inside a speech community with shared norms. Beside them, the lesson\'s examples: fillers and favourite words, "youse" as a plural you, professional jargon, and a school, city or online fandom.',
    'Every speaker has an idiolect inside wider shared varieties.',
    '## Strand 3: language and social identity');
}

// 05 Prestige and accommodation
{
  let b = panel(40, 115, 400, 220) + t(64, 150, 'Overt prestige', { size: 20, weight: 700, fill: C.tealDark }) +
    t(64, 176, 'status from the standard, widely recognised', { size: 15, fill: C.muted }) +
    rect(64, 196, 352, 120, C.tealLight, C.tealDark, 2, 10) + t(80, 224, 'Labov, New York, 1966', { size: 16, weight: 700 }) +
    tl(80, 250, ['department store study: post-vocalic', '/r/ linked to higher-status stores'], { size: 15 }, 20);
  b += panel(460, 115, 400, 220) + t(484, 150, 'Covert prestige', { size: 20, weight: 700, fill: C.olive }) +
    t(484, 176, 'status within a group from non-standard forms', { size: 15, fill: C.muted }) +
    rect(484, 196, 352, 120, C.cream, C.mustard, 2, 10) + t(500, 224, 'Trudgill, Norwich, 1974', { size: 16, weight: 700 }) +
    tl(500, 250, ['some men over-reported non-standard', 'pronunciations'], { size: 15 }, 20);
  // accommodation
  b += panel(40, 355, 820, 250) + t(64, 390, 'Accommodation (Howard Giles)', { size: 20, weight: 700 });
  const person = (x, y, f) => `<circle cx="${x}" cy="${y - 22}" r="13" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${x - 20},${y + 18} Q${x - 20},${y - 6} ${x},${y - 6} Q${x + 20},${y - 6} ${x + 20},${y + 18} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += person(110, 470, C.cream) + person(370, 470, C.teal) + arrow(140, 465, 330, 465, { w: 4, color: C.tealDark, marker: 'ahT' }) +
    t(235, 452, 'convergence', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(240, 520, 'speech moves towards the listener', { size: 15, anchor: 'middle' });
  b += person(560, 470, C.teal) + person(790, 470, C.cream) +
    `<line x1="640" y1="465" x2="595" y2="465" stroke="${C.rust}" stroke-width="4" marker-end="url(#ahR)"/>` +
    t(680, 452, 'divergence', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + t(675, 520, 'speech moves away from the listener', { size: 15, anchor: 'middle' });
  b += t(450, 575, 'Martha\'s Vineyard (Labov, 1963): islanders who identified with the island used a local vowel more.', { size: 15, anchor: 'middle', fill: C.muted });
  add('05-prestige-accommodation',
    svg(900, 630, 'Prestige and accommodation', b),
    'Overt prestige, from the standard, is illustrated by Labov\'s 1966 New York department store study; covert prestige, from non-standard forms, by Trudgill\'s 1974 Norwich study. Below, Giles\'s accommodation: convergence moves speech towards a listener and divergence away. A note cites Labov\'s Martha\'s Vineyard study (1963).',
    'Prestige can be overt or covert, and speakers converge or diverge to signal identity.',
    '## Strand 3: language and social identity');
}

// 06 Genderlect debate
{
  const g = [
    ['Deficit', 'Robin Lakoff', '1975', C.cream],
    ['Difference', 'Deborah Tannen', '1990', C.tealLight],
    ['Critique of "Mars and Venus"', 'Deborah Cameron', '2007', C.teal],
  ];
  let b = `<line x1="80" y1="290" x2="830" y2="290" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)"/>`;
  g.forEach(([h, who, yr, fill], i) => {
    const x = 170 + i * 280;
    b += `<circle cx="${x}" cy="290" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x, 325, yr, { size: 19, weight: 700, anchor: 'middle' }) +
      rect(x - 125, 125, 250, 130, fill, C.ink, 2.5) + tl(x, 170 - (wrap(h, 18).length - 1) * 11, wrap(h, 18), { size: 19, weight: 700, anchor: 'middle' }, 22) + t(x, 225, who, { size: 16, anchor: 'middle' }) +
      `<line x1="${x}" y1="255" x2="${x}" y2="279" stroke="${C.ink}" stroke-width="2"/>`;
  });
  b += panel(40, 355, 820, 80, C.cream, C.mustard) +
    t(450, 390, 'Genderlect: claimed gendered styles of speech.', { size: 17, weight: 700, anchor: 'middle' }) +
    t(450, 416, 'Present it as a contested debate, not established fact.', { size: 16, anchor: 'middle' });
  add('06-genderlect-debate',
    svg(900, 460, 'Genderlect: a contested debate', b),
    'A timeline of the genderlect debate: Robin Lakoff\'s deficit view (1975), Deborah Tannen\'s difference view (1990) and Deborah Cameron\'s critique of the "Mars and Venus" model (2007).',
    'Genderlect research is a debate between positions, not a settled fact.',
    '## Strand 3: language and social identity');
}

// 07 Worked example: accent and identity
{
  let b = panel(40, 112, 820, 120, C.cream, C.mustard) +
    tl(64, 145, ['"At university I lost my accent in about six weeks. Nobody told me to. I just noticed people smiling', 'when I said \'bath\', and I stopped saying it that way. When I go home now, my brother says I sound', '\'posh\'. I don\'t feel posh. I feel like I live between two places and belong properly to neither."'], { size: 15, italic: true }, 25);
  b += rect(40, 265, 230, 150, C.tealLight, C.tealDark, 2.5) + t(155, 300, 'University', { size: 19, weight: 700, anchor: 'middle' }) +
    tl(155, 330, ['smiles at "bath" act as', 'informal sanctions'], { size: 15, anchor: 'middle' }, 20) +
    t(155, 390, 'CONVERGENCE', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += rect(630, 265, 230, 150, C.cream, C.mustard, 2.5) + t(745, 300, 'Home', { size: 19, weight: 700, anchor: 'middle' }) +
    tl(745, 330, ['brother\'s label "posh";', 'local accent has covert', 'prestige (Trudgill)'], { size: 15, anchor: 'middle' }, 20) +
    t(745, 398, 'DIVERGENCE', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  b += `<circle cx="450" cy="340" r="26" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + t(450, 347, 'writer', { size: 15, weight: 700, anchor: 'middle' });
  b += arrow(420, 340, 276, 340, { w: 3, color: C.tealDark, marker: 'ahT' }) + arrow(480, 340, 624, 340, { w: 3, color: C.olive, marker: 'ahO' });
  b += t(450, 395, 'the same move, read two ways', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(40, 440, 820, 100, C.panel, C.tealDark) +
    t(64, 474, '"belong properly to neither"', { size: 17, weight: 700, italic: true }) +
    t(64, 504, 'identity is performed differently for each speech community; the cost of accommodation', { size: 16 }) +
    t(64, 526, 'can be a sense of displacement.', { size: 16 });
  add('07-worked-example',
    svg(900, 565, 'Accent and identity: the worked example', b),
    'The lesson\'s original extract about losing an accent at university. At university the writer converges towards the dominant accent after smiles at "bath"; at home the brother\'s label "posh" makes the same move divergence, where the local accent has covert prestige. The closing line suggests identity is performed for each speech community.',
    'One change of accent is convergence in one community and divergence in another.',
    '## Worked example: using the text');
}
