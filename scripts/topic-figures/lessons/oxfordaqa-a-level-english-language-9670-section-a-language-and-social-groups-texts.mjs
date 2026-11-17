import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-english-language-9670-section-a-language-and-social-groups-texts';
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


const bullets = (x, y, items, n, opts = {}, lh = 22, gap = 8, dot = C.tealDark) => {
  let out = '', yy = y;
  for (const s of items) {
    const ls = wrap(s, n);
    out += `<circle cx="${x + 5}" cy="${yy - 5}" r="4.5" fill="${dot}"/>` + tl(x + 18, yy, ls, { size: 16, ...opts }, lh);
    yy += ls.length * lh + gap;
  }
  return { svg: out, bottom: yy };
};

// 01 Features to look for in each credited area
{
  const areas = [
    ['Group rapport', C.teal, ['in-group lexis: words, abbreviations, nicknames', 'inclusive pronouns: “we”, “us”, “our lot”', 'shared references that presuppose knowledge', 'back-channelling: “yeah”, “exactly”, “mm”']],
    ['Power and status', C.mustard, ['conversational control: topics, questions, interruptions, the floor', 'forms of address: asymmetry signals hierarchy', 'imperatives, modals, high-certainty declaratives', 'specialist lexis that displays expertise']],
    ['Identity and relationship', C.cream, ['self-reference and self-presentation', 'politeness: positive and negative face', 'register and variety: dialect, slang, professional', 'phatic talk: “How was your weekend?”']],
    ['Play and performance', C.tealLight, ['wordplay: puns, rhymes, misspellings, portmanteau', 'banter and mock impoliteness', 'performance: storytelling, voices, exaggeration, timing', 'shared routines: catchphrases, running jokes']],
  ];
  let b = '';
  areas.forEach(([h, fill, items], i) => {
    const x = 30 + (i % 2) * 430, y = 112 + Math.floor(i / 2) * 276;
    b += panel(x, y, 410, 262) + `<rect x="${x}" y="${y}" width="410" height="50" rx="14" fill="${fill}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + t(x + 205, y + 33, h, { size: 21, weight: 700, anchor: 'middle' });
    b += bullets(x + 22, y + 86, items, 44, {}, 21, 12).svg;
  });
  b += box(30, 670, 840, 74, C.panel, C.ink) + t(450, 701, 'One feature can do several jobs at once:', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 727, 'a nickname can build rapport, express a relationship and be playful.', { size: 17, anchor: 'middle', fill: C.muted });
  add('01-features-by-area',
    svg(900, 770, 'What to look for in each credited area', b),
    'Four panels of features. Group rapport: in-group lexis, inclusive pronouns, shared references, back-channelling. Power and status: conversational control, forms of address, imperatives and modals, specialist lexis. Identity and relationship: self-presentation, politeness, register and variety, phatic talk. Play: wordplay, banter, performance, shared routines.',
    'Each credited area has its own features; the same feature can serve more than one area.',
    '## Frameworks for each credited area');
}

// 02 Four key distinctions from the frameworks
{
  const rows = [
    ['Giles: communication accommodation', 'Converging', 'towards each other’s speech to build rapport', 'Diverging', 'away from it to mark difference'],
    ['Wareing: two kinds of power', 'Instrumental power', 'held through authority or rules', 'Influential power', 'the power to persuade'],
    ['Fairclough: where power sits', 'Power in discourse', 'exercised within an interaction', 'Power behind discourse', 'institutions that give some the right to speak'],
    ['Brown and Levinson: politeness', 'Positive face', 'the wish to be liked and approved of', 'Negative face', 'the wish not to be imposed on'],
  ];
  let b = '';
  rows.forEach(([h, a, as, c, cs], i) => {
    const y = 110 + i * 150;
    b += panel(30, y, 840, 136) + t(55, y + 34, h, { size: 19, weight: 700, fill: C.tealDark });
    b += box(55, y + 50, 365, 70, C.tealLight, C.tealDark) + t(75, y + 78, a, { size: 18, weight: 700 }) + t(75, y + 104, as, { size: 15.5, fill: C.muted });
    b += t(450, y + 92, 'vs', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
    b += box(480, y + 50, 365, 70, C.cream, C.olive) + t(500, y + 78, c, { size: 18, weight: 700 }) + t(500, y + 104, cs, { size: 15.5, fill: C.muted });
  });
  b += box(30, 718, 840, 92, C.panel, C.ink);
  b += t(55, 750, 'Communities of practice (Lave and Wenger; applied to language by', { size: 17, weight: 700 }) + t(55, 774, 'Eckert and McConnell-Ginet): groups formed around a shared activity', { size: 17, weight: 700 });
  b += t(55, 798, 'develop shared ways of speaking.', { size: 17, fill: C.muted });
  add('02-framework-distinctions',
    svg(900, 835, 'Four distinctions worth applying', b),
    'Four paired concepts: Giles’s converging and diverging; Wareing’s instrumental and influential power; Fairclough’s power in discourse and power behind discourse; Brown and Levinson’s positive and negative face. Below, communities of practice: groups formed around a shared activity develop shared ways of speaking.',
    'Each framework gives a pair of terms; apply them to a specific moment, not in the abstract.',
    '## Frameworks for each credited area');
}

// 03 Analysing different modes
{
  const cols = [
    ['Spoken', C.teal, ['turn-taking', 'interruption and overlap', 'adjacency pairs', 'back-channelling', 'prosody'], 'Treat non-fluency as normal.'],
    ['Written', C.cream, ['forms of address', 'pronouns', 'register', 'modality', 'structure'], ''],
    ['Multimodal', C.tealLight, ['image', 'layout', 'typography', 'words', 'how they combine'], 'e.g. a club post with emoji, hashtags and group photos signals belonging.'],
  ];
  let b = '';
  cols.forEach(([h, fill, items, note], i) => {
    const x = 30 + i * 286;
    b += panel(x, 112, 268, 405) + `<rect x="${x}" y="112" width="268" height="54" rx="14" fill="${fill}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + t(x + 134, 148, h, { size: 22, weight: 700, anchor: 'middle' });
    items.forEach((s, k) => { b += pill(x + 24, 190 + k * 50, 220, 38, s, { fill: '#ffffff', edge: C.panelEdge, size: 16, weight: 600 }); });
    b += tl(x + 24, 460, wrap(note, 27), { size: 16, fill: C.tealDark, weight: 700 }, 21);
  });
  add('03-modes',
    svg(900, 545, 'Analysing different modes', b),
    'Three columns. Spoken texts: turn-taking, interruption and overlap, adjacency pairs, back-channelling, prosody, with non-fluency treated as normal. Written texts: forms of address, pronouns, register, modality, structure. Multimodal texts: how image, layout, typography and words combine, such as a club post using emoji, hashtags and group photos.',
    'Section A texts can be spoken, written or multimodal; each mode has its own features to analyse.',
    '## Analysing different modes');
}

// 04 Worked example: annotated transcript
{
  const turns = [
    ['PRIYA', 'right (.) okay (.) listen up (.) we’ve got twenty minutes', 'Instrumental power', C.mustard, 'discourse markers seize the floor; imperative; time constraint'],
    ['SAM', 'yes boss', 'Banter', C.teal, 'mock deference: acknowledges and teases her power'],
    ['PRIYA', '[laughs] don’t (.) Tom (.) you’re opening (.) are you happy with the definition', '', '', ''],
    ['TOM', 'I mean (.) I think it’s fine (.) maybe slightly narrow but', 'Negative face', C.cream, 'hedges recognise her authority'],
    ['PRIYA', '// it’s fine (.) we’ll go with it', 'Power', C.mustard, 'interrupts the hedged objection'],
    ['SAM', 'classic Priya (.) democracy in action', '', '', ''],
    ['TOM', '[laughs] the Supreme Leader has spoken', 'Banter', C.teal, 'playful exaggeration builds group rapport'],
    ['PRIYA', 'okay okay (.) Tom (.) what would you change', 'Accommodation', C.tealLight, 'she responds to the group’s challenge'],
  ];
  let b = t(45, 125, 'Debating team, Priya is captain', { size: 17, weight: 700, fill: C.muted });
  let y = 140;
  turns.forEach(([sp, u, tag, fill, note]) => {
    const ls = wrap(u, 44), ln = note ? wrap(note, 30) : [];
    const h = Math.max(ls.length * 24 + 22, note ? 40 + ln.length * 20 + 10 : 0, 54);
    b += box(30, y, 500, h, fill ? '#ffffff' : C.bg, fill ? C.ink : C.panelEdge, 8);
    b += t(48, y + 32, sp, { size: 16, weight: 700, fill: C.tealDark }) + tl(120, y + 32, ls, { size: 17 }, 24);
    if (note) {
      b += arrow(534, y + h / 2, 562, y + h / 2, { w: 2.5 });
      b += box(568, y, 302, h, fill, C.ink, 8) + t(584, y + 28, tag, { size: 17, weight: 700 }) + tl(584, y + 50, ln, { size: 15.5 }, 20);
    }
    y += h + 10;
  });
  b += box(30, y + 6, 840, 66, C.panel, C.tealDark) + t(450, y + 46, 'Her power is real but negotiated, held partly by consent.', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('04-annotated-transcript',
    svg(900, y + 100, 'Worked example: power, face and banter', b),
    'The debating-team transcript with annotations: Priya’s discourse markers, imperative and interruption assert power; Tom’s hedges attend to her negative face; “yes boss” and “the Supreme Leader has spoken” are mock deference that builds rapport; her final question accommodates the group’s challenge.',
    'Power, politeness and banter overlap in the same exchange: the captain’s power is negotiated.',
    '## Worked example');
}

// 05 Multimodal example: gaming announcement
{
  let b = box(30, 112, 470, 420, C.panel, C.ink, 12);
  b += `<circle cx="66" cy="148" r="16" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + t(92, 154, 'Community announcement', { size: 16, weight: 700 });
  const words = [['GG', 1], [' to everyone in last night’s ', 0], ['raid', 1], ['.', 0]];
  b += t(52, 200, '', {});
  b += `<text x="52" y="200" font-size="18" fill="${C.ink}"><tspan font-weight="700" fill="${C.olive}">GG</tspan> to everyone in last night’s <tspan font-weight="700" fill="${C.olive}">raid</tspan>.</text>`;
  b += `<text x="52" y="228" font-size="18" fill="${C.ink}"><tspan font-weight="700" fill="${C.tealDark}">Our squad</tspan> cleared the final <tspan font-weight="700" fill="${C.olive}">boss</tspan> in</text>`;
  b += `<text x="52" y="256" font-size="18" fill="${C.ink}">under an hour. <tspan font-weight="700" fill="${C.rust}">Mods are taking a</tspan></text>`;
  b += `<text x="52" y="284" font-size="18" fill="${C.ink}"><tspan font-weight="700" fill="${C.rust}">well-earned nap.</tspan></text>`;
  // screenshot
  b += `<rect x="52" y="306" width="426" height="204" rx="8" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  [120, 200, 280, 360, 430].forEach((x, i) => {
    const yy = 420 + (i % 2) * 12;
    b += `<circle cx="${x}" cy="${yy - 40}" r="16" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + `<path d="M${x - 20},${yy + 30} L${x - 16},${yy - 18} L${x + 16},${yy - 18} L${x + 20},${yy + 30} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += path(`M${x - 16},${yy - 12} L${x - 34},${yy - 50} M${x + 16},${yy - 12} L${x + 34},${yy - 50}`, { w: 3 });
  });
  b += t(265, 495, 'screenshot: avatars celebrating', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const notes = [
    [112, C.olive, 'In-group lexis', 'Only players decode “GG”, “raid”, “boss”, “mods”: group membership.'],
    [218, C.tealDark, 'Rapport', '“Our squad” includes every reader in the success.'],
    [324, C.rust, 'Playful self-deprecation', 'Those with power joke about napping, softening their status.'],
    [430, C.ink, 'Image + words', 'The screenshot shows the shared success the words describe.'],
  ];
  notes.forEach(([y, col, h, s]) => {
    b += box(530, y, 340, 92, C.panel, col) + t(548, y + 30, h, { size: 18, weight: 700, fill: col }) + tl(548, y + 54, wrap(s, 36), { size: 15.5 }, 20);
  });
  b += t(450, 570, 'Explain how image and language work together; the image is not decoration.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('05-multimodal-example',
    svg(900, 600, 'A multimodal text: the gaming announcement', b),
    'The gaming community post beside a screenshot of celebrating avatars, annotated: “GG”, “raid”, “boss” and “mods” are in-group lexis marking membership; “Our squad” builds rapport; the moderators’ nap joke is playful self-deprecation softening their status; the image shows the shared success.',
    'In a multimodal text, analyse how the image and the words work together.',
    '## A multimodal example in brief');
}

// 06 Method
{
  const steps = [
    ['Context first', 'who, to whom, in what setting, with what relationship'],
    ['Scan for each credited area', 'rapport, power, identity and relationship, play'],
    ['Select four or five rich moments', 'especially where functions overlap or shift'],
    ['Name, quote, explain', 'precise terminology and at least two frameworks'],
    ['Note observations for Section B', 'patterns that could support a wider argument'],
  ];
  let b = '';
  steps.forEach(([h, s], i) => {
    const y = 110 + i * 94;
    b += panel(30, y, 640, 80, i === 4 ? C.cream : C.panel, i === 4 ? C.olive : C.panelEdge) + badge(76, y + 40, 24, String(i + 1), i === 4 ? C.mustard : C.cream);
    b += t(120, y + 36, h, { size: 20, weight: 700 }) + t(120, y + 62, s, { size: 16, fill: C.muted });
  });
  b += path('M674,526 L740,526 L740,330', { w: 3.5, stroke: C.olive }) + arrow(740, 330, 740, 300, { w: 3.5, color: C.olive, marker: 'ahO' });
  b += box(690, 180, 180, 116, C.cream, C.olive) + t(780, 220, 'Section B', { size: 20, weight: 700, anchor: 'middle' }) + t(780, 248, 'essay uses the', { size: 16, anchor: 'middle', fill: C.muted }) + t(780, 270, 'analysis as evidence', { size: 16, anchor: 'middle', fill: C.muted });
  add('06-method',
    svg(900, 570, 'A five-step method for Section A', b),
    'Five steps: establish the context; scan for each credited area; select four or five rich moments; name, quote and explain using at least two frameworks; and note observations that could feed the Section B essay.',
    'Context, scan, select, analyse, and bank evidence for the Section B essay.',
    '## Method');
}
