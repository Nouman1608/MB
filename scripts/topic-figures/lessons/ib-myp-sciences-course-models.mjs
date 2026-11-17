import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-sciences-course-models';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const BIO = C.teal, CHEM = C.cream, PHYS = '#c9d3e6';
const chip = (x, y, w, h, s, fill, { size = 17, weight = 700, edge = C.ink } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${edge}" stroke-width="2.2"/>` + t(x + w / 2, y + h / 2 + size * 0.35, s, { size, weight, anchor: 'middle' });

// 01 Three course models
{
  const rowH = 190, y0 = 110, g = 14, bx = 300, bw = 540;
  let b = '';
  const row = (i, name, lines) => { const y = y0 + i * (rowH + g); b += panel(30, y, 840, rowH) + t(60, y + 46, name, { size: 24, weight: 700 }) + tl(60, y + 80, lines, { size: 17, fill: C.muted }, 23); return y; };
  // discrete
  let y = row(0, 'Discrete', ['Biology, chemistry and', 'physics (or other', 'disciplines) taught as', 'separate subjects.']);
  ['Biology', 'Chemistry', 'Physics'].forEach((s, k) => { b += chip(bx, y + 28 + k * 46, bw, 38, s, [BIO, CHEM, PHYS][k]); });
  // modular
  y = row(1, 'Modular', ['Two or more discrete', 'sciences taught in', 'rotation across the year.']);
  ['Biology', 'Chemistry', 'Physics'].forEach((s, k) => { b += chip(bx + k * (bw / 3), y + 74, bw / 3 - 8, 52, s, [BIO, CHEM, PHYS][k]); });
  // integrated
  y = row(2, 'Integrated', ['Disciplines blended', 'together, not taught as', 'separate strands.']);
  b += `<defs><linearGradient id="mix" x1="0" x2="1"><stop offset="0" stop-color="${BIO}"/><stop offset="0.5" stop-color="${CHEM}"/><stop offset="1" stop-color="${PHYS}"/></linearGradient></defs>`;
  b += `<rect x="${bx}" y="${y + 52}" width="${bw}" height="96" rx="12" fill="url(#mix)" stroke="${C.ink}" stroke-width="2.2"/>` + t(bx + bw / 2, y + 107, 'one blended science course', { size: 18, weight: 700, anchor: 'middle' });
  // time axis
  const ay = y0 + 3 * (rowH + g) + 10;
  b += arrow(bx, ay, bx + bw, ay, { w: 3 }) + t(bx, ay + 26, 'start of year', { size: 16, fill: C.muted }) + t(bx + bw, ay + 26, 'end of year', { size: 16, fill: C.muted, anchor: 'end' });
  b += t(60, ay + 8, 'Ask your teacher', { size: 17, weight: 700, fill: C.tealDark }) + t(60, ay + 30, 'which model you have.', { size: 17, weight: 700, fill: C.tealDark });
  add('01-three-course-models',
    svg(900, 790, 'Three ways a school can run MYP Sciences', b),
    'Discrete: biology, chemistry and physics run side by side all year as separate subjects. Modular: the sciences are taught one after another in rotation across the year. Integrated: the disciplines are blended into one course.',
    'The same sciences can be packaged as discrete, modular or integrated courses.',
    '## Where this fits in the subject');
}

// 02 Scope is set by the option
{
  let b = panel(30, 110, 400, 330) + panel(470, 110, 400, 330, C.cream, C.olive);
  b += t(230, 150, 'Course model', { size: 22, weight: 700, anchor: 'middle' }) + t(230, 176, 'how lessons were packaged', { size: 16, anchor: 'middle', fill: C.muted });
  ['discrete', 'modular', 'integrated'].forEach((s, k) => { b += chip(90, 200 + k * 58, 280, 44, s, C.tealLight, { weight: 600 }); });
  b += t(670, 150, 'eAssessment option', { size: 22, weight: 700, anchor: 'middle' }) + t(670, 176, 'what you are entered for', { size: 16, anchor: 'middle', fill: C.olive });
  ['biology', 'chemistry', 'physics', 'integrated sciences'].forEach((s, k) => { b += chip(530, 196 + k * 56, 280, 44, s, '#fff', { weight: 600, edge: C.olive }); });
  // arrows down
  b += arrow(230, 450, 230, 520, { w: 4, color: C.rust, marker: 'ahR', dash: '10 7' });
  b += `<circle cx="230" cy="485" r="20" fill="#fff" stroke="${C.rust}" stroke-width="3"/>` + path('M220,475 L240,495 M240,475 L220,495', { stroke: C.rust, w: 4 });
  b += t(230, 545, 'does NOT set', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + t(230, 567, 'the exam scope', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  b += arrow(670, 450, 670, 590, { w: 5, color: C.olive, marker: 'ahO' });
  b += t(690, 520, 'sets which topics', { size: 18, weight: 700, fill: C.olive }) + t(690, 542, 'your exam draws on', { size: 18, weight: 700, fill: C.olive });
  b += panel(30, 600, 840, 225);
  b += t(450, 640, 'Topics the examinations can draw on (all three disciplines)', { size: 20, weight: 700, anchor: 'middle' });
  const topics = ['atomic structure and bonding', 'cells', 'cycles', 'electromagnetism', 'evolution', 'interactions between organisms', 'forces', 'states and properties of matter', 'metabolism', 'organisms', 'waves'];
  let x = 60, yy = 665;
  topics.forEach((s) => { const w = s.length * 9.2 + 30; if (x + w > 850) { x = 60; yy += 52; } b += chip(x, yy, w, 40, s, C.tealLight, { size: 16, weight: 600, edge: C.panelEdge }); x += w + 12; });
  add('02-scope-set-by-option',
    svg(900, 855, 'What decides your exam’s content?', b),
    'The course model (discrete, modular or integrated) does not set the examination scope. The eAssessment option (biology, chemistry, physics or integrated sciences) sets which topics the examination draws on, from a list spanning atomic structure and bonding, cells, cycles, electromagnetism, evolution, interactions between organisms, forces, states and properties of matter, metabolism, organisms and waves.',
    'Your eAssessment option, not your school’s course model, sets what the exam can examine.',
    '## eAssessment scope is set by the option, not the course model');
}

// 03 Modular revision worked example
{
  let b = panel(30, 110, 840, 170);
  b += t(60, 148, 'What was taught', { size: 20, weight: 700 });
  [['Term 1', 'Biology', BIO], ['Term 2', 'Chemistry', CHEM], ['Term 3', 'Physics', PHYS]].forEach(([tm, s, f], k) => {
    b += chip(60 + k * 265, 170, 250, 54, s, f, { size: 19 }) + t(185 + k * 265, 254, tm, { size: 16, anchor: 'middle', fill: C.muted });
  });
  // wrong
  b += panel(30, 300, 410, 380, '#fbeee6', C.rust);
  b += t(60, 340, '✗ Risky plan', { size: 22, weight: 700, fill: C.rust });
  b += tl(60, 372, ['Revise only physics, because', 'it feels freshest; treat the', 'earlier modules as “done”.'], { size: 17, fill: C.muted }, 23);
  b += chip(60, 460, 110, 44, 'Bio', '#eee', { size: 16, edge: C.panelEdge }) + chip(180, 460, 110, 44, 'Chem', '#eee', { size: 16, edge: C.panelEdge }) + chip(300, 460, 110, 44, 'Physics', PHYS, { size: 16 });
  b += path('M70,482 L160,482 M190,482 L280,482', { stroke: C.rust, w: 4 });
  b += tl(60, 560, ['But the exam can draw on any', 'content in your option’s scope,', 'whenever it was taught.'], { size: 17, weight: 600, fill: C.rust }, 24);
  // right
  b += panel(460, 300, 410, 380, '#eaf3f1', C.tealDark);
  b += t(490, 340, '✓ Better plan', { size: 22, weight: 700, fill: C.tealDark });
  b += tl(490, 372, ['One summary sheet per module,', 'reviewed in rotation in the', 'weeks before the exam.'], { size: 17, fill: C.muted }, 23);
  const cx = 665, cy = 545, R = 82;
  [['Bio', BIO, -90], ['Chem', CHEM, 30], ['Physics', PHYS, 150]].forEach(([s, f, a]) => {
    const r = (a * Math.PI) / 180; b += chip(cx + R * Math.cos(r) - 45, cy + R * Math.sin(r) - 20, 90, 40, s, f, { size: 16 });
  });
  b += path(`M${cx + 30},${cy - 78} A80,80 0 0 1 ${cx + 72},${cy - 5}`, { stroke: C.tealDark, w: 3.5, extra: 'marker-end="url(#ahT)"' });
  b += path(`M${cx + 25},${cy + 70} A80,80 0 0 1 ${cx - 35},${cy + 72}`, { stroke: C.tealDark, w: 3.5, extra: 'marker-end="url(#ahT)"' });
  b += path(`M${cx - 78},${cy - 5} A80,80 0 0 1 ${cx - 40},${cy - 75}`, { stroke: C.tealDark, w: 3.5, extra: 'marker-end="url(#ahT)"' });
  b += t(cx, cy + 6, 'repeat', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('03-modular-revision',
    svg(900, 710, 'Revising after a modular year', b),
    'A modular year taught biology in term 1, chemistry in term 2 and physics in term 3. Revising only physics is risky because the exam can draw on any content in the option’s scope. The better plan keeps one summary sheet per module and reviews them in rotation before the exam.',
    'Revisit every module in your option’s scope, not just the most recent one.',
    '## Worked example: organising revision across a modular timetable');
}

// 04 Weighting revision time
{
  let b = panel(30, 110, 840, 330);
  b += t(60, 150, 'Marks in the on-screen examination (out of 100)', { size: 20, weight: 700 });
  const x0 = 60, W = 780;
  b += `<rect x="${x0}" y="180" width="${W / 2}" height="90" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="${x0 + W / 2}" y="180" width="${W / 2}" height="90" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(x0 + W / 4, 222, 'Investigation skills', { size: 20, weight: 700, anchor: 'middle' }) + t(x0 + W / 4, 250, 'criteria B and C: 50', { size: 18, anchor: 'middle' });
  b += t(x0 + (3 * W) / 4, 222, 'the other tasks', { size: 20, weight: 700, anchor: 'middle' }) + t(x0 + (3 * W) / 4, 250, '50', { size: 18, anchor: 'middle' });
  b += t(x0 + W / 2, 300, 'half the marks', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) + path(`M${x0 + W / 2},${284} L${x0 + W / 2},${270}`, { stroke: C.olive, w: 2.5 });
  b += t(60, 345, 'So revision time should follow the same split:', { size: 18, weight: 600 });
  b += tl(60, 378, ['practise forming testable hypotheses and interpreting imperfect real data', 'under exam conditions, not only content recall.'], { size: 17, fill: C.muted }, 24);
  add('04-weighting-revision-time',
    svg(900, 470, 'Where the marks sit', b),
    'A bar of 100 marks split in half: the investigation-skills task, criteria B and C, carries 50 marks and the other tasks the remaining 50. Revision time should match, with practice at hypotheses and interpreting imperfect data, not only recall.',
    'Investigation skills carry half the marks, so they deserve half the revision time.',
    '## Weighting revision time correctly');
}

// 05 Concepts thread through every model
{
  let b = '';
  const cols = [['Discrete', 160], ['Modular', 450], ['Integrated', 740]];
  cols.forEach(([s, x]) => { b += panel(x - 125, 110, 250, 100) + t(x, 150, s, { size: 22, weight: 700, anchor: 'middle' }) + t(x, 180, 'course', { size: 17, anchor: 'middle', fill: C.muted }); });
  cols.forEach(([, x]) => { b += arrow(x, 212, x, 262, { w: 3.5 }); });
  b += panel(30, 270, 840, 360, C.cream, C.olive);
  b += t(450, 310, 'The same framework in every model', { size: 22, weight: 700, anchor: 'middle' });
  b += t(60, 355, 'Key concepts', { size: 19, weight: 700 });
  ['change', 'relationships', 'systems'].forEach((s, k) => { b += chip(60 + k * 270, 370, 250, 46, s, C.mustard, { size: 18 }); });
  b += t(60, 455, 'Related concepts, for example', { size: 19, weight: 700 });
  ['energy', 'movement', 'transformation', 'models'].forEach((s, k) => { b += chip(60 + k * 200, 470, 185, 44, s, '#fff', { size: 17, weight: 600, edge: C.olive }); });
  b += t(60, 555, 'Plus', { size: 19, weight: 700 }) + chip(115, 530, 250, 44, 'six global contexts', C.tealLight, { size: 17 }) +
    t(390, 548, 'and one investigation-skills task,', { size: 17, fill: C.muted }) + t(390, 570, 'identical whatever the course model.', { size: 17, fill: C.muted });
  b += t(450, 612, 'Use these links to connect content from different modules.', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
  add('05-concepts-across-models',
    svg(900, 660, 'One conceptual thread', b),
    'Discrete, modular and integrated courses all feed into the same framework: the key concepts change, relationships and systems; related concepts such as energy, movement, transformation and models; the six global contexts; and one investigation-skills task.',
    'Whatever the course model, the concepts and the skills task are the same.',
    '## Key and related concepts still apply across all models');
}

// 06 Three-step plan
{
  const steps = [
    ['Confirm two things', 'your course model (discrete, modular or integrated) and your eAssessment option (biology, chemistry, physics or integrated sciences).'],
    ['Schedule every module', 'revisit every science module in your option’s scope, not just the most recent; all of it is equally examinable.'],
    ['Weight the skills task', 'give investigation skills about half your time, matching their 50% share of the marks.'],
  ];
  let b = '';
  steps.forEach(([h, d], i) => {
    const y = 110 + i * 165;
    b += panel(30, y, 840, 150) + badge(90, y + 75, 30, String(i + 1), i === 0 ? C.mustard : C.cream);
    b += t(145, y + 50, h, { size: 23, weight: 700 });
    const words = d.split(' '); const lines = ['']; for (const w of words) { if ((lines[lines.length - 1] + ' ' + w).length > 66) lines.push(w); else lines[lines.length - 1] = (lines[lines.length - 1] + ' ' + w).trim(); }
    b += tl(145, y + 84, lines, { size: 17, fill: C.muted }, 23);
  });
  for (let i = 0; i < 2; i++) { const y = 110 + i * 165; b += arrow(90, y + 107, 90, y + 165 + 43, { w: 3 }); }
  add('06-revision-plan-steps',
    svg(900, 620, 'Before you plan revision', b),
    'Three steps: confirm your course model and your eAssessment option; schedule revision that revisits every module in the option’s scope; and give investigation skills about half the time, matching their 50% share of marks.',
    'Confirm model and option, cover every module, and weight the skills task.',
    '## How to approach it');
}
