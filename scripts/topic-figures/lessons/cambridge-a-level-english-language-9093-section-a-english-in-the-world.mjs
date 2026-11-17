import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-language-9093-section-a-english-in-the-world';
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

// 01 The Section A task
{
  let b = t(450, 128, 'Paper 4 Language Topics', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  b += rect(40, 142, 410, 70, C.teal, C.ink, 2.5, 10) + t(245, 175, 'Section A: English in the World', { size: 18, weight: 700, anchor: 'middle' }) + t(245, 200, '25 marks, compulsory', { size: 16, anchor: 'middle' });
  b += rect(450, 142, 410, 70, C.panel, C.panelEdge, 2.5, 10) + t(655, 182, 'Section B (the other half)', { size: 17, anchor: 'middle', fill: C.muted });
  const steps = [
    ['Read', '400-500 words of unseen text on the topic', C.tealLight],
    ['Focus', 'the specified aspect, e.g. education, identity, the future of English', C.cream],
    ['Select', 'the most important issues: select and rank, do not summarise', C.cream],
    ['Write', 'an essay: details from the text + ideas from wider study', C.tealLight],
  ];
  steps.forEach(([h, d, fill], i) => {
    const y = 240 + i * 82;
    b += rect(40, y, 150, 66, fill, C.ink, 2.5, 10) + t(115, y + 40, h, { size: 20, weight: 700, anchor: 'middle' }) +
      panel(204, y, 656, 66) + t(224, y + 40, d, { size: 17 });
    if (i < 3) b += arrow(115, y + 66, 115, y + 80, { w: 3 });
  });
  const aos = [['AO1', 'reading and understanding'], ['AO2', 'writing effectively'], ['AO4', 'linguistic issues, concepts, methods']];
  aos.forEach(([a, d], i) => {
    const x = 40 + i * 280;
    b += panel(x, 580, 260, 70) + rect(x + 12, 593, 68, 44, C.mustard, C.ink, 2, 8) + t(x + 46, 622, a, { size: 18, weight: 700, anchor: 'middle' }) +
      tl(x + 92, 610 - (wrap(d, 20).length - 1) * 10 + 10, wrap(d, 20), { size: 15 }, 19);
  });
  add('01-section-a-task',
    svg(900, 675, 'Paper 4 Section A: the task', b),
    'Section A is a compulsory 25-mark question, half of Paper 4. You read 400 to 500 words of unseen text, focus on the specified aspect, select and rank the most important issues, and write an essay linking text details to wider study. It assesses AO1, AO2 and AO4.',
    'Stay on the specified aspect, and rank the issues rather than summarising the text.',
    '## What the question asks');
}

// 02 Two waves of spread
{
  let b = panel(40, 115, 400, 330) + badge(76, 152, 20, '1', C.cream) + t(108, 160, 'Migration and empire', { size: 20, weight: 700 });
  b += rect(64, 190, 352, 100, C.tealLight, C.tealDark, 2, 10) + t(80, 216, 'colonial settlement', { size: 16, weight: 700 }) +
    tl(80, 240, ['first-language communities in North', 'America, Australia and New Zealand'], { size: 15 }, 20);
  b += rect(64, 305, 352, 120, C.cream, C.mustard, 2, 10) + t(80, 331, 'colonial administration', { size: 16, weight: 700 }) +
    tl(80, 355, ['parts of Africa and Asia: English for', 'government, law and education,', 'alongside local languages'], { size: 15 }, 20);
  b += panel(460, 115, 400, 330) + badge(496, 152, 20, '2', C.cream) + t(528, 160, 'Twentieth century', { size: 20, weight: 700 });
  b += rect(484, 190, 352, 70, C.teal, C.ink, 2, 10) + t(500, 216, 'United States', { size: 16, weight: 700 }) + t(500, 240, 'economic and cultural influence', { size: 15 });
  b += arrow(660, 260, 660, 285, { w: 3 });
  b += rect(484, 290, 352, 135, C.tealLight, C.tealDark, 2, 10) + t(500, 316, 'global media, science, business,', { size: 16, weight: 700 }) + t(500, 338, 'the internet', { size: 16, weight: 700 }) +
    tl(500, 368, ['extended English to places with no', 'colonial link to Britain'], { size: 15 }, 20);
  b += panel(40, 465, 820, 110, C.cream, C.mustard) +
    t(64, 500, 'David Crystal, English as a Global Language (1997)', { size: 18, weight: 700 }) +
    t(64, 530, 'A language becomes global through the power of its speakers (political, economic,', { size: 16 }) +
    t(64, 554, 'cultural), not because the language is "simple" or "flexible".', { size: 16 });
  add('02-two-waves',
    svg(900, 600, 'How English spread: two waves', b),
    'First wave: migration and colonial settlement created first-language communities in North America, Australia and New Zealand, while colonial administration made English a language of government, law and education in parts of Africa and Asia. Second wave: US influence, then global media, science, business and the internet. A note gives Crystal\'s argument that power, not the language itself, makes a language global.',
    'English spread through power, first colonial and then economic and cultural.',
    '## Area 1: the historical development of English as a "global" language');
}

// 03 Schneider's Dynamic Model
{
  const ph = [
    ['Foundation', ''],
    ['Exonormative stabilisation', 'norms imported from outside'],
    ['Nativisation', 'local features develop'],
    ['Endonormative stabilisation', 'local norms accepted as standard'],
    ['Differentiation', 'internal varieties emerge'],
  ];
  let b = '';
  ph.forEach(([h, d], i) => {
    const x = 40 + i * 166, top = 300 - i * 40;
    b += rect(x, top, 154, 470 - top, [C.panel, C.tealLight, C.teal, C.cream, C.mustard][i], C.ink, 2.5, 10) +
      badge(x + 28, top + 30, 17, String(i + 1), C.panel) +
      tl(x + 12, top + 76, wrap(h, 14), { size: 16, weight: 700 }, 20) +
      (d ? tl(x + 12, top + 76 + wrap(h, 14).length * 20 + 12, wrap(d, 16), { size: 15, fill: C.ink }, 19) : '');
  });
  b += arrow(60, 488, 840, 488, { w: 3 }) + t(450, 515, 'phases of a postcolonial English (Edgar Schneider)', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(40, 535, 820, 70, C.cream, C.mustard) +
    t(450, 578, 'Useful for explaining why attitudes to a local variety change over time.', { size: 17, weight: 600, anchor: 'middle' });
  add('03-schneider-dynamic-model',
    svg(900, 630, 'Schneider\'s Dynamic Model', b),
    'Five rising steps for postcolonial Englishes: foundation; exonormative stabilisation, with norms imported from outside; nativisation, as local features develop; endonormative stabilisation, when local norms are accepted as standard; and differentiation, as internal varieties emerge.',
    'Postcolonial Englishes move from imported norms to local standards.',
    '## Area 1: the historical development of English as a "global" language');
}

// 04 Three views of the future
{
  const v = [
    ['Main lingua franca', 'English keeps its role as the main international lingua franca', '', C.teal],
    ['Advantage shifts', 'as more people use English as an additional language, monolingual speakers may lose their advantage; other languages may grow', 'associated with David Graddol', C.tealLight],
    ['Fragmentation', 'English splits into mutually less intelligible varieties, as Latin did', 'critics: global media and communication make this less likely', C.cream],
  ];
  let b = rect(330, 112, 240, 56, C.panel, C.ink, 2.5, 10) + t(450, 147, 'The future of English?', { size: 19, weight: 700, anchor: 'middle' });
  v.forEach(([h, d, n, fill], i) => {
    const x = 40 + i * 280;
    b += arrow(450, 168, x + 130, 200, { w: 3 });
    b += panel(x, 205, 260, 290) + rect(x + 12, 217, 236, 50, fill, C.ink, 2, 9) + t(x + 130, 249, h, { size: 19, weight: 700, anchor: 'middle' }) +
      tl(x + 22, 300, wrap(d, 25), { size: 16 }, 22) +
      (n ? tl(x + 22, 435, wrap(n, 26), { size: 15, italic: true, fill: C.muted }, 20) : '');
  });
  add('04-future-of-english',
    svg(900, 520, 'Three views of the future of English', b),
    'Three views: English stays the main international lingua franca; as more people use English as an additional language, monolingual speakers may lose their advantage and other languages may grow, a view associated with David Graddol; or English fragments as Latin did, which critics think global media makes less likely.',
    'Forecasts diverge: continued dominance, shifting advantage or fragmentation.',
    '## Area 1: the historical development of English as a "global" language');
}

// 05 Pidgin, creole, continuum
{
  let b = rect(40, 120, 230, 110, C.panel, C.ink, 2.5) + tl(155, 160, ['speakers of different', 'languages need to', 'communicate'], { size: 16, anchor: 'middle' }, 21);
  b += arrow(272, 175, 318, 175, { w: 4 });
  b += rect(322, 120, 240, 110, C.cream, C.mustard, 3) + t(442, 154, 'Pidgin', { size: 21, weight: 700, anchor: 'middle' }) + tl(442, 184, ['reduced contact language,', 'no native speakers'], { size: 15, anchor: 'middle' }, 20);
  b += arrow(564, 175, 610, 175, { w: 4, color: C.tealDark, marker: 'ahT' }) + t(587, 160, '', {});
  b += rect(614, 120, 246, 122, C.teal, C.tealDark, 3) + t(737, 154, 'Creole', { size: 21, weight: 700, anchor: 'middle' }) + tl(737, 184, ['children speak it first;', 'grammar and vocabulary', 'expand'], { size: 15, anchor: 'middle' }, 20);
  b += t(587, 262, 'creolisation', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(450, 292, 'Example: Tok Pisin, now an official language of Papua New Guinea', { size: 16, anchor: 'middle', italic: true, fill: C.muted });
  // continuum
  b += panel(40, 310, 820, 250) + t(64, 345, 'The sociolect continuum', { size: 20, weight: 700 });
  const lv = [['basilect', 'furthest from the standard', C.cream], ['mesolects', '', C.sand], ['acrolect', 'closest to the standard', C.teal]];
  b += `<defs><linearGradient id="cg" x1="0" x2="1"><stop offset="0" stop-color="${C.cream}"/><stop offset="1" stop-color="${C.teal}"/></linearGradient></defs>`;
  b += `<rect x="70" y="375" width="760" height="56" rx="28" fill="url(#cg)" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(100, 410, 'Basilect', { size: 18, weight: 700 }) + t(450, 410, 'Mesolects', { size: 18, weight: 700, anchor: 'middle' }) + t(800, 410, 'Acrolect', { size: 18, weight: 700, anchor: 'end' });
  b += t(100, 455, 'furthest from the standard', { size: 15, fill: C.muted }) + t(800, 455, 'closest to the standard', { size: 15, fill: C.muted, anchor: 'end' });
  b += `<line x1="300" y1="500" x2="600" y2="500" stroke="${C.ink}" stroke-width="3" marker-start="url(#ah)" marker-end="url(#ah)"/>` +
    t(450, 490, 'a speaker moves', { size: 15, anchor: 'middle', weight: 700 }) +
    t(450, 535, 'according to setting, audience and purpose: style-shifting as well as social difference', { size: 15, anchor: 'middle', fill: C.muted });
  add('05-pidgin-creole-continuum',
    svg(900, 585, 'From pidgin to creole, and the continuum', b),
    'Speakers of different languages form a pidgin, a reduced contact language with no native speakers; when children speak it as a first language it creolises into a full language, as Tok Pisin has. Below, the sociolect continuum runs from basilect through mesolects to acrolect, and speakers move along it by setting, audience and purpose.',
    'A pidgin becomes a creole when children grow up speaking it; speakers then shift along the continuum.',
    '## Area 2: varieties of English');
}

// 06 Ethics: four issues, two edges
{
  const rows = [
    ['Language shift and death', 'a community moves to a dominant language in more domains; younger generations may stop learning the heritage language'],
    ['Cultural imperialism', 'Phillipson (1992): English promoted for powerful nations; Ngũgĩ wrote in Gikuyu. Critics: people choose and adapt English'],
    ['Equality of opportunity', 'English opens education, work and information, but as a gatekeeper it excludes those without good teaching'],
    ['Global cooperation', 'a shared lingua franca supports science, diplomacy and safety-critical communication, e.g. aviation'],
  ];
  let b = '';
  rows.forEach(([h, d], i) => {
    const y = 115 + i * 112;
    const dl = wrap(d, 56);
    b += rect(40, y, 230, 98, [C.cream, C.cream, C.sand, C.tealLight][i], C.ink, 2.5, 10) + tl(155, y + 49 - (wrap(h, 16).length - 1) * 11 + 6, wrap(h, 16), { size: 18, weight: 700, anchor: 'middle' }, 22) +
      panel(282, y, 578, 98) + tl(300, y + 49 - (dl.length - 1) * 11 + 6, dl, { size: 16 }, 22);
  });
  b += panel(40, 570, 820, 70, C.tealLight, C.tealDark) +
    t(450, 612, 'The same language can widen and narrow opportunity: weigh both sides.', { size: 17, weight: 700, anchor: 'middle' });
  add('06-ethical-considerations',
    svg(900, 665, 'Ethical considerations', b),
    'Four ethical issues in the spread of English: language shift and death, cultural imperialism (Phillipson\'s argument, Ngũgĩ wa Thiong\'o\'s choice of Gikuyu and the critics\' reply), equality of opportunity, where English can open or close doors, and global cooperation, such as English as the language of international aviation.',
    'The spread of English is neither wholly positive nor wholly negative.',
    '## Area 3: ethical considerations');
}

// 07 Essay plan
{
  let b = rect(40, 112, 820, 56, C.cream, C.mustard, 2.5, 10) + t(450, 147, 'Underline the specified aspect; read once for the argument, once for issues', { size: 17, weight: 600, anchor: 'middle' });
  b += t(450, 205, 'Choose three or four issues and rank them: one paragraph each', { size: 18, weight: 700, anchor: 'middle' });
  const st = [['Quote', 'the text precisely'], ['Explain', 'the issue'], ['Connect', 'to a theory, study, model or real example'], ['Evaluate', 'do not simply agree']];
  st.forEach(([h, d], i) => {
    const x = 40 + i * 207;
    b += rect(x, 225, 190, 158, [C.tealLight, C.tealLight, C.teal, C.mustard][i], C.ink, 2.5) + badge(x + 95, 258, 18, String(i + 1), C.panel) +
      t(x + 95, 302, h, { size: 20, weight: 700, anchor: 'middle' }) + tl(x + 95, 328, wrap(d, 19), { size: 15, anchor: 'middle' }, 19);
    if (i < 3) b += arrow(x + 191, 295, x + 205, 295, { w: 3 });
  });
  b += panel(40, 403, 820, 145) + t(64, 436, 'In the model paragraph (English and education)', { size: 17, weight: 700, fill: C.muted }) +
    tl(64, 465, ['Quote: "unable to tell her grandmother"', 'Connect: language shift (a domain lost); equality of opportunity; Phillipson', 'Evaluate: why not add English without subtracting the home language?'], { size: 16 }, 25);
  b += panel(40, 568, 820, 64, C.tealLight, C.tealDark) + t(450, 607, 'Conclude with a judgement that answers the question, not a restatement.', { size: 17, weight: 600, anchor: 'middle' });
  add('07-essay-plan',
    svg(900, 658, 'Planning the Section A essay', b),
    'A plan: underline the specified aspect, choose and rank three or four issues, and for each one quote the text, explain the issue, connect it to a theory, study, model or example, and evaluate. The lesson\'s model paragraph on English and education is mapped onto these steps.',
    'Each paragraph: quote, explain, connect, evaluate; then end with a judgement.',
    '## Planning the essay');
}
