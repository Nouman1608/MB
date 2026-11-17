import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-english-language-9670-section-b-international-english';
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


// 01 What the section requires
{
  let b = panel(30, 110, 840, 150);
  b += t(55, 146, 'Unit 3 exam', { size: 20, weight: 700 }) + t(845, 146, '2 hours · 50 marks · 30% of the A-level', { size: 18, anchor: 'end', fill: C.muted, weight: 600 });
  b += box(55, 166, 395, 70, '#ffffff', C.panelEdge) + t(252, 208, 'Section A', { size: 18, weight: 600, anchor: 'middle', fill: C.muted });
  b += box(450, 166, 395, 70, C.cream, C.olive) + t(647, 198, 'Section B: International English', { size: 18, weight: 700, anchor: 'middle' }) + t(647, 222, '25 marks', { size: 17, anchor: 'middle' });
  b += t(450, 300, 'One question from a choice of two', { size: 19, weight: 700, anchor: 'middle' });
  b += box(30, 318, 840, 90, C.tealLight, C.tealDark);
  b += t(450, 352, 'Each question sets out an issue for discussion', { size: 20, weight: 700, anchor: 'middle' });
  b += t(450, 382, 'Builds on the academic essay skills of Unit 2 Section B', { size: 17, anchor: 'middle', fill: C.muted });
  const req = [['Knowledge', 'of the topic, including theories and approaches'], ['Data analysis', 'any material provided is used as evidence'], ['Argument', 'academic argument and evaluation of ideas']];
  req.forEach(([h, s], i) => {
    const x = 30 + i * 286;
    b += panel(x, 428, 268, 120) + badge(x + 34, 466, 18, String(i + 1), C.cream) + t(x + 62, 473, h, { size: 19, weight: 700 }) + tl(x + 22, 506, wrap(s, 28), { size: 16, fill: C.muted }, 21);
  });
  add('01-section-requirements',
    svg(900, 575, 'Section B: International English', b),
    'Unit 3 is a 2-hour exam worth 50 marks and 30% of the A-level. Section B, International English, is worth 25 marks; students answer one question from two, each setting out an issue for discussion and building on the Unit 2 essay. Answers need knowledge of theories, use of any material as evidence, and academic argument.',
    'An issue to argue, not a topic to survey: 25 marks, one question from two.',
    '## What the section requires');
}

// 02 Two strands
{
  const col = (x, title, fill, edge, sub, focus, items) => {
    let c = panel(x, 110, 410, 395, C.panel, edge) + `<rect x="${x}" y="110" width="410" height="56" rx="14" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + t(x + 205, 146, title, { size: 22, weight: 700, anchor: 'middle' });
    c += tl(x + 24, 200, wrap(sub, 42), { size: 17 }, 23);
    c += t(x + 24, 290, 'Focus', { size: 16, weight: 700, fill: edge }) + t(x + 24, 316, focus, { size: 19, weight: 700 });
    items.forEach((s, i) => { c += `<circle cx="${x + 30}" cy="${360 + i * 40}" r="5" fill="${edge}"/>` + t(x + 46, 366 + i * 40, s, { size: 17 }); });
    return c;
  };
  let b = col(30, 'Established world Englishes', C.teal, C.tealDark, 'Long-standing national and regional varieties with their own norms.', 'varieties tied to places', ['Indian, Nigerian, Singaporean', 'Caribbean, South African, Australian', 'features are systematic, not errors', 'models: Kachru, Schneider and others']);
  b += col(460, 'English as a lingua franca', C.cream, C.olive, 'A shared language between people with different first languages, often with no native speaker present.', 'communication from anywhere', ['Jenkins: Lingua Franca Core', 'Seidlhofer: the VOICE corpus', 'accommodation strategies', 'a skill, not an approximation']);
  b += box(30, 522, 840, 60, '#ffffff', C.rust) + t(450, 559, 'A common mistake: treating world Englishes and ELF as the same idea.', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  add('02-two-strands',
    svg(900, 608, 'Two strands of international English', b),
    'Two columns. Established world Englishes are long-standing national and regional varieties with their own norms, such as Indian, Nigerian and Singaporean English, studied through models of spread. English as a lingua franca is a shared language between speakers with different first languages, studied through the Lingua Franca Core, the VOICE corpus and accommodation.',
    'World Englishes research studies varieties tied to places; ELF research studies communication between speakers from anywhere.',
    '## Strand 2: English as a lingua franca (ELF)');
}

// 03 Models of the spread
{
  let b = '';
  const P = (x, y, h, title) => panel(x, y, 410, h) + t(x + 22, y + 36, title, { size: 20, weight: 700 });
  // Kachru
  b += P(30, 110, 360, 'Kachru: three circles (1985)');
  const kx = 160, ky = 270;
  b += `<circle cx="${kx}" cy="${ky}" r="105" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/><circle cx="${kx}" cy="${ky}" r="70" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/><circle cx="${kx}" cy="${ky}" r="36" fill="${C.tealDark}"/>`;
  b += t(kx, ky + 6, 'inner', { size: 15, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(kx, ky - 46, 'outer', { size: 15, weight: 700, anchor: 'middle' }) + t(kx, ky - 82, 'expanding', { size: 15, weight: 700, anchor: 'middle' });
  b += tl(285, 200, ['+ recognises', '   outer-circle', '   varieties'], { size: 16, fill: C.tealDark, weight: 600 }, 21);
  b += tl(285, 290, ['− nation-based', '− inner circle', '   at the centre'], { size: 16, fill: C.rust, weight: 600 }, 21);
  // McArthur
  b += P(460, 110, 360, 'McArthur: Circle of World English');
  const mx = 665, my = 300;
  for (let k = 0; k < 8; k++) { const a = (k * Math.PI) / 4; const ex = mx + Math.cos(a) * 105, ey = my + Math.sin(a) * 88; b += `<line x1="${mx}" y1="${my}" x2="${ex}" y2="${ey}" stroke="${C.tealDark}" stroke-width="2.5"/><circle cx="${ex}" cy="${ey}" r="16" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`; }
  b += `<circle cx="${mx}" cy="${my}" r="50" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + t(mx, my - 6, 'World', { size: 15, weight: 700, anchor: 'middle' }) + t(mx, my + 12, 'Standard', { size: 15, weight: 700, anchor: 'middle' }) + t(mx, my + 30, 'English', { size: 15, weight: 700, anchor: 'middle' });
  b += t(482, 172, '1987: regional varieties around a hub', { size: 15.5, fill: C.muted });
  b += t(665, 448, 'Varieties are related, not ranked.', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 });
  // Modiano
  b += P(30, 490, 320, 'Modiano: centripetal circles (1999)');
  const ox = 180, oy = 650;
  b += `<circle cx="${ox}" cy="${oy}" r="95" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/><circle cx="${ox}" cy="${oy}" r="52" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(ox, oy - 4, 'proficient', { size: 15, weight: 700, anchor: 'middle' }) + t(ox, oy + 14, 'users', { size: 15, weight: 700, anchor: 'middle' });
  b += tl(295, 610, ['Centre: speakers', 'proficient in', 'international', 'communication,', 'whatever their', 'first language'], { size: 16 }, 21);
  // features
  b += P(460, 490, 320, 'World English features are systematic');
  const feats = [['“prepone”', 'Indian English: by analogy with “postpone”'], ['“isn’t it”', 'invariant tag in several varieties'], ['“lah”', 'Singapore English discourse particle'], ['local vocabulary', 'from contact languages']];
  feats.forEach(([a, c], i) => { const y = 542 + i * 65; b += box(482, y, 366, 58, C.cream, C.olive) + t(498, y + 24, a, { size: 17, weight: 700 }) + t(498, y + 47, c, { size: 15, fill: C.muted }); });
  add('03-models-of-spread',
    svg(900, 840, 'Models of the spread of English', b),
    'Three models and a set of features. Kachru’s inner, outer and expanding circles recognise outer-circle varieties but are nation-based with the inner circle at the centre. McArthur’s wheel puts World Standard English at the hub with regional varieties around it. Modiano puts proficient international users at the centre. Features such as “prepone”, invariant “isn’t it” and “lah” are systematic.',
    'Each model puts a different group at the centre; evaluate the model, do not just describe it.',
    '## Strand 1: established world Englishes');
}

// 04 Schneider's Dynamic Model
{
  const st = ['Foundation', 'Exonormative stabilisation', 'Nativisation', 'Endonormative stabilisation', 'Differentiation'];
  let b = '';
  st.forEach((s, i) => {
    const x = 30 + i * 172, y = 330 - i * 48, h = 120 + i * 48;
    b += `<rect x="${x}" y="${y}" width="160" height="${h}" rx="10" fill="${[C.cream, C.tealLight, C.teal, C.mustard, C.cream][i]}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += badge(x + 80, y + 34, 20, String(i + 1), '#ffffff');
    b += tl(x + 80, y + 82, wrap(s, 14), { size: 17, weight: 700, anchor: 'middle' }, 22);
  });
  b += arrow(40, 500, 860, 500, { w: 5, color: C.olive, marker: 'ahO' });
  b += t(450, 530, 'a postcolonial English moves towards becoming an accepted local variety', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += t(450, 130, 'Schneider’s Dynamic Model', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('04-schneider-dynamic-model',
    svg(900, 560, 'How a local variety becomes accepted', b),
    'Schneider’s Dynamic Model as five rising steps: foundation, exonormative stabilisation, nativisation, endonormative stabilisation and differentiation, showing how a postcolonial English becomes an accepted local variety.',
    'Schneider’s five phases explain how a postcolonial English becomes accepted locally.',
    '## Strand 1: established world Englishes');
}

// 05 ELF research
{
  let b = panel(30, 110, 840, 220) + t(55, 146, 'Jenkins (2000): the Lingua Franca Core', { size: 20, weight: 700 });
  b += t(55, 172, 'pronunciation features most important for intelligibility between non-native speakers', { size: 16, fill: C.muted });
  b += box(55, 192, 380, 116, C.tealLight, C.tealDark) + t(75, 224, 'Matter most', { size: 18, weight: 700, fill: C.tealDark }) + t(75, 254, '• most consonant sounds', { size: 17 }) + t(75, 282, '• vowel length', { size: 17 });
  b += box(465, 192, 380, 116, '#ffffff', C.panelEdge) + t(485, 224, 'Matter less', { size: 18, weight: 700, fill: C.muted }) + t(485, 254, '• the “th” sounds', { size: 17 });
  b += panel(30, 350, 840, 150) + t(55, 386, 'Seidlhofer: the VOICE corpus of spoken ELF', { size: 20, weight: 700 });
  b += t(55, 414, 'Features observed that rarely impede understanding:', { size: 16, fill: C.muted });
  b += pill(55, 432, 330, 44, 'omitting third-person “-s”', { size: 17 }) + pill(400, 432, 340, 44, '“isn’t it?” as a universal tag', { size: 17 });
  b += panel(30, 520, 840, 160, C.cream, C.olive) + t(55, 556, 'Accommodation strategies', { size: 20, weight: 700 });
  ['repetition', 'paraphrase', 'checking understanding', 'adjusting for the listener'].forEach((s, i) => {
    const w = [140, 140, 230, 250][i], x = [55, 205, 355, 595][i];
    b += pill(x, 576, w, 42, s, { fill: '#ffffff', edge: C.olive, size: 16 });
  });
  b += t(55, 656, 'Successful ELF communication is a skill, not an approximation of native speech.', { size: 17, weight: 700, fill: C.tealDark });
  add('05-elf-research',
    svg(900, 705, 'English as a lingua franca: key research', b),
    'Jenkins’s Lingua Franca Core: most consonant sounds and vowel length matter most for intelligibility, the “th” sounds matter less. The VOICE corpus shows omitted third-person “-s” and “isn’t it?” as a universal tag rarely impede understanding. Accommodation strategies: repetition, paraphrase, checking understanding, adjusting for the listener.',
    'ELF research measures success by intelligibility and accommodation, not native-like accuracy.',
    '## Strand 2: English as a lingua franca (ELF)');
}

// 06 The connecting debates
{
  const rows = [
    ['Standards and ownership', ['Quirk (1990)', 'one standard for teaching'], ['Kachru (1991)', 'outer-circle norms are legitimate'], 'Widdowson (1994): native speakers cannot claim custody of an international language.'],
    ['Intelligibility vs identity', ['A shared standard', 'supports understanding'], ['Local varieties', 'express identity'], 'Many speakers shift style by audience: managed rather than resolved.'],
    ['Teaching models', ['Native model', 'British or American'], ['Local standard or ELF', 'intelligibility as the goal'], 'Native-speakerism: the belief that native speakers are better teachers.'],
    ['Power and inequality', ['Phillipson', 'linguistic imperialism'], ['Crystal: speakers adopt English', 'for their own purposes'], 'English opens access, but whose norms are rewarded?'],
    ['The future', ['Fragment', 'into separate languages'], ['Converge', 'on a global standard'], 'Or a family of varieties with an international style alongside.'],
  ];
  let b = '';
  rows.forEach(([h, a, c, note], i) => {
    const y = 110 + i * 146;
    b += panel(30, y, 840, 132) + t(55, y + 32, h, { size: 19, weight: 700, fill: C.tealDark });
    b += box(55, y + 46, 330, 56, C.tealLight, C.tealDark) + t(72, y + 70, a[0], { size: 17, weight: 700 }) + t(72, y + 92, a[1], { size: 15.5, fill: C.muted });
    b += `<line x1="392" y1="${y + 74}" x2="508" y2="${y + 74}" stroke="${C.olive}" stroke-width="3" marker-end="url(#ahO)" marker-start="url(#ahO)"/>`;
    b += box(515, y + 46, 330, 56, C.cream, C.olive) + t(532, y + 70, c[0], { size: 17, weight: 700 }) + t(532, y + 92, c[1], { size: 15.5, fill: C.muted });
    b += t(55, y + 122, note, { size: 15.5, fill: C.ink, italic: true });
  });
  add('06-connecting-debates',
    svg(900, 850, 'Five debates questions are likely to set', b),
    'Five debates as opposing positions: Quirk’s single standard against Kachru’s legitimate outer-circle norms, with Widdowson on ownership; intelligibility against identity; native, local or ELF teaching models and native-speakerism; Phillipson’s linguistic imperialism against Crystal’s view of speakers adopting English; and whether English will fragment, converge or continue as a family of varieties.',
    'Each debate has a case on both sides, so the essay must weigh them and judge.',
    '## The connecting debates');
}

// 07 Worked example: essay plan
{
  const steps = [
    ['Thesis', C.mustard, 'The aim confuses accuracy with effectiveness: intelligibility and accommodation matter more.', ''],
    ['For the view', C.cream, 'Native models are codified, used in teaching and testing, rewarded by some.', 'Quirk'],
    ['Against: ELF', C.teal, 'Most interactions have no native speaker; native idioms can reduce understanding.', 'Jenkins'],
    ['Against: world Englishes', C.teal, 'Outer-circle speakers have their own norms; “native” is plural.', 'Kachru, Schneider'],
    ['Evaluation', C.tealLight, 'Identity, ownership and the risk of native-speakerism.', 'Widdowson'],
    ['Conclusion', C.mustard, 'Qualified: native models suit some goals, but are not the right universal aim.', ''],
  ];
  let b = box(30, 108, 840, 58, C.panel, C.ink) + t(450, 144, '“Non-native speakers should aim to speak English like native speakers.” Discuss.', { size: 18, weight: 700, anchor: 'middle', italic: true });
  steps.forEach(([h, fill, s, tag], i) => {
    const y = 186 + i * 92;
    b += box(30, y, 236, 78, fill, C.ink) + t(148, y + 45, h, { size: 17, weight: 700, anchor: 'middle' });
    b += arrow(270, y + 39, 290, y + 39, { w: 3 });
    b += box(296, y, 574, 78, C.panel, C.panelEdge) + tl(314, y + 33, wrap(s, tag ? 46 : 58), { size: 16 }, 22);
    if (tag) { const w = tag.length * 8.6 + 28; b += pill(855 - w, y + 21, w, 36, tag, { size: 15, fill: C.cream, edge: C.olive }); }
  });
  b += t(450, 762, 'Both strands used as evidence, an opposing view included, and a judgement reached.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('07-worked-plan',
    svg(900, 790, 'Worked example: planning the essay', b),
    'A six-part plan for the native-speaker question: a thesis that intelligibility matters more than native-like speech; the case for the view (Quirk); the case against from ELF (Jenkins) and world Englishes (Kachru, Schneider); evaluation of identity, ownership and native-speakerism (Widdowson); and a qualified conclusion.',
    'Test the claim from both sides, using both strands, and end with a qualified judgement.',
    '## Worked example');
}
