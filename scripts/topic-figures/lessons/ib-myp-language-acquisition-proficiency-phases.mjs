import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-language-acquisition-proficiency-phases';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { if ((out[out.length - 1] + ' ' + w).trim().length > n) out.push(w); else out[out.length - 1] = (out[out.length - 1] + ' ' + w).trim(); } return out; };
const box = (x, y, w, h, fill = C.panel, edge = C.ink, sw = 2.2, rx = 10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const chip = (x, y, w, h, s, fill, { size = 17, weight = 700, edge = C.ink, color = C.ink } = {}) =>
  box(x, y, w, h, fill, edge) + t(x + w / 2, y + h / 2 + size * 0.35, s, { size, weight, anchor: 'middle', fill: color });
const lowTop = (x, y, w, h, kind, title, lines, lh = 22) => {
  const top = kind === 'top';
  return panel(x, y, w, h, top ? '#eaf3f1' : '#fbeee6', top ? C.tealDark : C.rust) +
    t(x + 22, y + 36, (top ? '✓ ' : '✗ ') + title, { size: 19, weight: 700, fill: top ? C.tealDark : C.rust }) + tl(x + 22, y + 66, lines, { size: 16, fill: C.ink }, lh);
};

// 01 Six phases vs three levels
{
  let b = panel(30, 110, 840, 230) + t(55, 146, 'Six teaching phases', { size: 21, weight: 700 }) + t(290, 146, 'day-to-day teaching and learning', { size: 16, fill: C.muted });
  for (let i = 0; i < 6; i++) {
    const x = 60 + i * 133;
    b += box(x, 170, 118, 64, i % 2 ? C.teal : C.tealLight, C.ink, 2.2, 10) + t(x + 59, 210, `Phase ${i + 1}`, { size: 17, weight: 700, anchor: 'middle' });
    if (i < 5) b += arrow(x + 120, 202, x + 131, 202, { w: 2.5 });
  }
  b += tl(55, 270, ['a continuum: each student moves through it individually, based on actual progress', 'phases do not correspond to particular age groups or MYP year levels'], { size: 16, fill: C.tealDark, weight: 600 }, 26);
  b += box(330, 352, 240, 40, C.panel, C.rust, 2.5, 20) + t(450, 378, '≠ not the same scale', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += panel(30, 404, 840, 220, C.cream, C.olive) + t(55, 440, 'Three reporting levels', { size: 21, weight: 700, fill: C.olive }) + t(320, 440, 'course results, where a school offers eAssessment', { size: 16, fill: C.muted });
  ['Emergent', 'Capable', 'Proficient'].forEach((l, i) => { b += chip(60 + i * 270, 462, 240, 64, l, [C.tealLight, C.teal, C.mustard][i], { size: 20 }); });
  b += tl(55, 560, ['coarser, summative: a comparable external result', 'confirm your level with your teacher: year group does not decide it'], { size: 16, fill: C.olive, weight: 600 }, 26);
  add('01-phases-and-levels',
    svg(900, 650, 'Six phases, three reporting levels', b),
    'Two separate scales. Six teaching phases form a continuum that each student moves through individually and that does not match age groups or MYP years. Three reporting levels, emergent, capable and proficient, give a summative course result where a school offers eAssessment. They serve different purposes and are not the same scale.',
    'Phases track learning in class; levels report the result. Do not treat them as one scale.',
    '## Six teaching phases, three reporting levels');
}

// 02 Two marking scales
{
  const cr = [['A', 'Listening', 'spoken multimodal text'], ['B', 'Reading', 'written, spatial and visual text'], ['C', 'Speaking', 'interacting on personal, local, global topics'], ['D', 'Writing', 'language for audience and purpose']];
  let b = chip(250, 110, 290, 52, 'Classroom: levels 0–8', C.tealLight, { size: 17 }) + chip(560, 110, 310, 52, 'eAssessment: raw marks', C.cream, { size: 17, edge: C.olive });
  cr.forEach(([L, n, d], i) => {
    const y = 176 + i * 96;
    b += panel(30, y, 210, 84) + badge(66, y + 42, 22, L, i === 2 ? C.mustard : C.cream) + t(100, y + 36, n, { size: 18, weight: 700 }) + tl(100, y + 58, wrap(d, 18), { size: 14.5, fill: C.muted }, 17);
    b += box(250, y, 290, 84, '#eaf3f1', C.tealDark, 2, 10);
    for (let k = 0; k <= 8; k++) b += `<rect x="${262 + k * 30}" y="${y + 26}" width="24" height="32" rx="4" fill="${k === 0 ? '#e6e8ea' : C.teal}" stroke="${C.ink}" stroke-width="1.2"/>` + t(274 + k * 30, y + 48, String(k), { size: 14.5, anchor: 'middle', weight: 600 });
    b += box(560, y, 310, 84, i === 2 ? C.mustard : C.cream, C.olive, 2, 10) + t(715, y + 40, '24 marks', { size: 22, weight: 700, anchor: 'middle' }) + t(715, y + 66, i === 2 ? 'separate speaking exam' : 'on-screen paper', { size: 15, anchor: 'middle' });
  });
  b += box(250, 566, 290, 60, C.tealLight, C.tealDark, 2.5, 10) + t(395, 603, 'total 0–32', { size: 20, weight: 700, anchor: 'middle' });
  b += box(560, 566, 310, 60, C.cream, C.olive, 2.5, 10) + t(715, 603, 'equal weight: 24 each', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 660, 'Level 0: work that does not reach any descriptor band. The two scales are separate.', { size: 15.5, anchor: 'middle', fill: C.muted });
  add('02-two-marking-scales',
    svg(900, 685, 'Two scales: classroom levels and eAssessment marks', b),
    'Each criterion, A listening, B reading, C speaking and D writing, is scored 0 to 8 for classroom assessment, giving a total of 0 to 32. Separately, the eAssessment blueprint gives each criterion 24 raw marks: A, B and D in the on-screen paper and C in a separate, internally marked, IB-moderated speaking examination.',
    'Levels 0–8 in class; 24 raw marks each in eAssessment. Do not mix the scales.',
    '## The four criteria are independently weighted');
}

// 03 Matching preparation to level
{
  const lv = [['Emergent', ['simple sentences', 'basic vocabulary', 'formulaic expressions'], C.tealLight], ['Capable', ['range of sentence structures', 'more precise vocabulary', 'register awareness for', 'audience and purpose'], C.teal], ['Proficient', ['complex, nuanced structures', 'idiomatic language', 'sophisticated audience', 'awareness'], C.mustard]];
  let b = t(450, 132, 'Writing expectations at each level', { size: 18, weight: 600, anchor: 'middle', fill: C.muted });
  lv.forEach(([n, lines, f], i) => {
    const x = 30 + i * 285, w = 270, hi = i === 1;
    b += box(x, 150, w, 230, hi ? '#fff' : C.panel, hi ? C.olive : C.panelEdge, hi ? 4 : 2.2, 14) + `<rect x="${x + 2}" y="152" width="${w - 4}" height="52" rx="12" fill="${f}"/>` + t(x + w / 2, 186, n, { size: 21, weight: 700, anchor: 'middle' });
    b += tl(x + 22, 238, lines, { size: 16 }, 26);
  });
  b += t(165, 410, '✗ under-reaching', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + t(450, 410, '✓ target zone', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) + t(735, 410, '✗ over-reaching', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += tl(165, 436, ['formulaic phrases', 'underprepare you'], { size: 15, anchor: 'middle', fill: C.muted }, 19) + tl(735, 436, ['idiom beyond your secure', 'range risks errors'], { size: 15, anchor: 'middle', fill: C.muted }, 19);
  b += panel(30, 490, 840, 100, C.cream, C.olive) + t(55, 526, 'A student assessed as capable should practise', { size: 18, weight: 700 }) +
    t(55, 556, 'varied sentence structure and basic register awareness, not “harder is always better”.', { size: 16 });
  add('03-matching-preparation-to-level',
    svg(900, 615, 'Practise at your confirmed level', b),
    'Writing expectations by level: emergent, simple sentences, basic vocabulary and formulaic expressions; capable, a range of structures, more precise vocabulary and register awareness; proficient, complex nuanced structures, idiom and sophisticated audience awareness. A capable student should target the capable column rather than under- or over-reaching.',
    'Neither under-reach nor over-reach: practise what your own level expects.',
    '## Worked example: matching preparation to level');
}

// 04 Revision balance: equal weights, separate speaking strand
{
  let b = panel(30, 110, 560, 230, '#eaf3f1', C.tealDark) + t(55, 146, 'One on-screen paper: revise together', { size: 19, weight: 700, fill: C.tealDark });
  [['A', 'Listening'], ['B', 'Reading'], ['D', 'Writing']].forEach(([L, n], i) => {
    const x = 55 + i * 176;
    b += box(x, 166, 160, 150, C.panel, C.tealDark, 2, 12) + badge(x + 80, 206, 24, L, C.cream) + t(x + 80, 262, n, { size: 18, weight: 700, anchor: 'middle' }) + t(x + 80, 292, '24 marks', { size: 15, anchor: 'middle', fill: C.muted });
  });
  b += panel(610, 110, 260, 230, C.cream, C.olive) + t(635, 146, 'Separate strand', { size: 19, weight: 700, fill: C.olive });
  b += box(635, 166, 210, 150, C.panel, C.olive, 2, 12) + badge(740, 206, 24, 'C', C.mustard) + t(740, 262, 'Speaking', { size: 18, weight: 700, anchor: 'middle' }) + t(740, 292, '24 marks', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 360, 840, 130) + t(55, 396, 'Speaking routine', { size: 18, weight: 700 }) +
    tl(55, 426, ['rehearse spontaneous, interactive conversation under time pressure,', 'not prepared monologues'], { size: 16 }, 22);
  b += lowTop(30, 510, 840, 104, 'low', 'Common trap', ['over-investing in writing: strong written work can mask a real gap in speaking', 'preparation, because all four are weighted equally']);
  add('04-revision-balance',
    svg(900, 640, 'Balance revision across four equal criteria', b),
    'Listening, reading and writing share one on-screen paper and can be revised together; speaking is a separate strand. Each is worth 24 marks. Speaking needs its own routine of spontaneous, interactive conversation under time pressure, and over-investing in writing can hide a gap in speaking.',
    'Equal weights mean no single skill should dominate revision.',
    '## Building a separate speaking-practice routine');
}

// 05 Pathway check
{
  let b = box(300, 110, 300, 70, C.mustard, C.ink, 2.5, 14) + t(450, 140, 'Language Acquisition', { size: 19, weight: 700, anchor: 'middle' }) + t(450, 164, 'compulsory in every MYP year', { size: 15, anchor: 'middle' });
  b += arrow(450, 184, 450, 220, { w: 3 });
  b += `<path d="M450,226 L560,286 L450,346 L340,286 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + tl(450, 280, ['bilingual, studying', 'multiple languages?'], { size: 15, weight: 700, anchor: 'middle' }, 19);
  b += path('M340,286 L230,286 L230,380', { w: 3, extra: 'marker-end="url(#ah)"' }) + t(260, 276, 'no', { size: 16, weight: 700, fill: C.tealDark });
  b += path('M560,286 L670,286 L670,380', { w: 3, extra: 'marker-end="url(#ah)"' }) + t(620, 276, 'yes', { size: 16, weight: 700, fill: C.olive });
  b += panel(60, 386, 340, 120, '#eaf3f1', C.tealDark) + tl(230, 426, ['Language Acquisition', 'proficiency-level structure', 'applies'], { size: 16, weight: 600, anchor: 'middle' }, 24);
  b += panel(500, 386, 340, 120, C.cream, C.olive) + tl(670, 426, ['may follow the Language and', 'Literature subject group', 'instead: confirm with school'], { size: 16, weight: 600, anchor: 'middle' }, 24);
  b += arrow(230, 510, 400, 562, { w: 2.5 }) + arrow(670, 510, 500, 562, { w: 2.5 });
  b += panel(150, 566, 600, 110) + t(450, 600, 'DP pathways', { size: 18, weight: 700, anchor: 'middle' }) +
    tl(450, 628, ['DP Language Acquisition or DP Studies in Language and Literature:', 'audience-and-purpose writing and unscripted speaking transfer'], { size: 15.5, anchor: 'middle' }, 21);
  add('05-pathway-check',
    svg(900, 700, 'Which pathway applies to you?', b),
    'A decision flow: Language Acquisition is compulsory in every MYP year, except for bilingual students studying multiple languages in the Language and Literature subject group instead. Both routes lead on to DP Language Acquisition or DP Studies in Language and Literature, where audience-and-purpose writing and unscripted speaking carry over.',
    'Check your pathway first; strong criterion habits carry into either DP route.',
    '## Compulsory status and its exception');
}
