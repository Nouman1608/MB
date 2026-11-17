import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-design-criteria-in-practice';
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
const CRIT = [
  ['A', 'Inquiring and analysing'],
  ['B', 'Developing ideas'],
  ['C', 'Creating the solution'],
  ['D', 'Evaluating'],
];

// 01 Four criteria, one 0-8 scale
{
  let b = '';
  CRIT.forEach(([L, name], i) => {
    const x = 30 + i * 215;
    b += panel(x, 110, 195, 150) + badge(x + 97, 160, 30, L, i % 2 ? C.cream : C.mustard);
    b += tl(x + 97, 220, wrap(name, 14), { size: 18, weight: 700, anchor: 'middle' }, 23);
  });
  b += t(450, 292, 'equally weighted', { size: 18, weight: 600, anchor: 'middle', fill: C.tealDark });
  b += panel(30, 310, 840, 250) + t(60, 350, 'Each criterion is scored on the same 0–8 scale', { size: 21, weight: 700 });
  const x0 = 100, y = 385, cw = 80;
  b += box(x0, y, 70, 70, '#e6e8ea', C.muted) + t(x0 + 35, y + 46, '0', { size: 26, weight: 700, anchor: 'middle', fill: C.muted });
  const fills = [C.tealLight, C.teal, C.cream, C.mustard];
  for (let k = 0; k < 8; k++) {
    const x = x0 + 90 + k * cw;
    b += box(x, y, cw - 6, 70, fills[Math.floor(k / 2)]) + t(x + (cw - 6) / 2, y + 46, String(k + 1), { size: 26, weight: 700, anchor: 'middle' });
  }
  for (let j = 0; j < 4; j++) {
    const xa = x0 + 90 + j * 2 * cw, xb = xa + 2 * cw - 6;
    b += path(`M${xa},${y + 84} L${xa},${y + 94} L${xb},${y + 94} L${xb},${y + 84}`, { w: 2.5 });
    b += t((xa + xb) / 2, y + 120, `band ${j + 1}`, { size: 17, weight: 600, anchor: 'middle' });
  }
  b += tl(x0 + 35, y + 112, ['below', 'level 1'], { size: 15, anchor: 'middle', fill: C.muted }, 19);
  b += t(450, 545, 'Levels 1–8 sit in four descriptor bands; level 0 is work that does not reach level 1.', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(30, 580, 840, 90, C.cream, C.olive) + t(450, 617, 'Assessed through an ePortfolio: a design project', { size: 19, weight: 700, anchor: 'middle' }) +
    t(450, 645, 'presented as a complete design folder', { size: 19, weight: 700, anchor: 'middle' });
  add('01-four-criteria-scale',
    svg(900, 700, 'Four criteria, one 0–8 scale', b),
    'Four equally weighted criteria: A inquiring and analysing, B developing ideas, C creating the solution and D evaluating. Each is scored from 0 to 8, with levels 1 to 8 in four descriptor bands and level 0 for work below level 1. Design is assessed through an ePortfolio presented as a complete design folder.',
    'Every criterion is worth the same and is marked on the same 0–8 scale.',
    '## Where this fits in the subject');
}

// 02 What a moderator can mark
{
  let b = panel(30, 110, 500, 560, '#eaf3f1', C.tealDark) + t(55, 148, '✓ Complete design folder', { size: 21, weight: 700, fill: C.tealDark });
  const tabs = [
    ['A', 'Inquiry', 'problem, research, design brief'],
    ['B', 'Specification', 'ideas judged against it'],
    ['C', 'Planning and process', 'plan, log, justified changes'],
    ['D', 'Testing', 'results against the specification'],
  ];
  tabs.forEach(([L, h, d], i) => {
    const y = 172 + i * 100;
    b += box(55, y, 450, 86, C.panel, C.panelEdge) + badge(95, y + 43, 22, L, i % 2 ? C.cream : C.mustard);
    b += t(132, y + 37, h, { size: 19, weight: 700 }) + t(132, y + 63, d, { size: 16, fill: C.muted });
  });
  b += box(55, 576, 450, 74, C.cream, C.olive) + t(80, 620, '+ prototype photograph', { size: 18, weight: 700 });
  b += panel(550, 110, 320, 560, '#fbeee6', C.rust) + t(575, 148, '✗ Photograph only', { size: 21, weight: 700, fill: C.rust });
  b += box(600, 180, 220, 150, C.tealLight, C.ink) + path('M620,310 L680,240 L720,280 L760,225 L800,310 Z', { fill: C.teal, w: 2.5 }) + `<circle cx="770" cy="210" r="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  b += t(710, 356, 'however well it works', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const res = [['A', 'no basis to mark'], ['B', 'no basis to mark'], ['C', 'no top band: no log'], ['D', 'no basis to mark']];
  res.forEach(([L, s], i) => {
    const y = 390 + i * 66;
    b += badge(600, y + 20, 20, L, '#f4d9c8') + t(632, y + 27, s, { size: 17, weight: 600, fill: C.rust });
  });
  add('02-what-a-moderator-sees',
    svg(900, 700, 'What a moderator can mark', b),
    'Left: a complete design folder with inquiry, specification, planning and process, and testing sections, one for each criterion, plus a prototype photograph. Right: a prototype photograph on its own gives no basis to mark criteria A, B or D and cannot reach the top band for C without a process log.',
    'The documentation at each stage is the evidence; the prototype alone is not.',
    '## Where this fits in the subject');
}

// 03 Criterion A: investigate before the brief
{
  let b = box(150, 110, 600, 60, C.cream, C.olive) + t(450, 148, 'Task: reduce food waste in a school canteen', { size: 19, weight: 700, anchor: 'middle' });
  b += lowTop(30, 195, 840, 130, 'low', 'Lower band', []);
  b += chip(60, 250, 220, 54, 'Task', C.panel) + arrow(290, 277, 600, 277, { w: 3.5, color: C.rust, marker: 'ahR' }) + chip(610, 250, 230, 54, 'Design brief', C.panel);
  b += t(445, 266, 'jumps straight to the brief', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  b += t(445, 312, 'no evidence of why waste happens here', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += panel(30, 345, 840, 375, '#eaf3f1', C.tealDark) + t(52, 381, '✓ Top band: investigate first', { size: 19, weight: 700, fill: C.tealDark });
  const inv = [['Survey', 'students and staff'], ['Observe', 'canteen practices'], ['Research', 'existing solutions', 'used elsewhere']];
  inv.forEach(([h, a, c], i) => {
    const x = 60 + i * 265;
    b += box(x, 405, 250, 110, C.panel, C.ink) + t(x + 125, 442, h, { size: 20, weight: 700, anchor: 'middle' }) + t(x + 125, 470, a, { size: 16, anchor: 'middle', fill: C.muted }) + (c ? t(x + 125, 492, c, { size: 16, anchor: 'middle', fill: C.muted }) : '');
    b += arrow(x + 125, 518, 450 + (i - 1) * 60, 552, { w: 3 });
  });
  b += box(160, 560, 580, 60, C.teal, C.ink) + t(450, 597, 'Evidenced analysis of the target audience’s need', { size: 18, weight: 700, anchor: 'middle' });
  b += arrow(450, 622, 450, 646, { w: 3.5 });
  b += box(250, 652, 400, 52, C.mustard, C.ink) + t(450, 685, 'Design brief grounded in it', { size: 18, weight: 700, anchor: 'middle' });
  add('03-criterion-a-investigate-first',
    svg(900, 750, 'Criterion A: investigate before the brief', b),
    'For a task to reduce food waste in a school canteen, a lower-band response goes straight from the task to a design brief. A top-band response first surveys students and staff, observes canteen practices and researches existing solutions, builds an evidenced analysis of the audience’s need, and only then writes the brief.',
    'The design brief should come after the evidence, not before it.',
    '## Criterion A: Inquiring and analysing');
}

// 04 Criterion B: several ideas judged against the specification
{
  let b = panel(30, 110, 840, 92, C.cream, C.olive) + t(55, 146, 'Detailed, testable design specification', { size: 20, weight: 700 }) +
    t(55, 176, 'testable criteria such as cost, materials, target-audience appeal', { size: 17, fill: C.muted });
  const ideas = ['Idea 1', 'Idea 2', 'Idea 3'];
  const colX = [330, 510, 690], cw = 160;
  b += panel(30, 222, 840, 340);
  b += t(55, 262, 'Evaluate every idea', { size: 19, weight: 700 }) + t(55, 286, 'against each criterion', { size: 19, weight: 700 });
  ideas.forEach((s, i) => {
    const fill = i === 1 ? C.mustard : C.tealLight;
    b += chip(colX[i], 240, cw, 52, s, fill);
  });
  b += box(colX[1] - 6, 234, cw + 12, 314, 'none', C.olive, 3, 14);
  const rows = ['Cost', 'Materials', 'Audience appeal'];
  const marks = [['✓', '✓', '✗'], ['✗', '✓', '✓'], ['✓', '✓', '✗']];
  rows.forEach((r, j) => {
    const y = 312 + j * 74;
    b += `<line x1="55" y1="${y - 6}" x2="850" y2="${y - 6}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += t(55, y + 38, r, { size: 18, weight: 600 });
    marks[j].forEach((m, i) => {
      b += t(colX[i] + cw / 2, y + 44, m, { size: 30, weight: 700, anchor: 'middle', fill: m === '✓' ? C.tealDark : C.rust });
    });
  });
  b += arrow(590, 552, 590, 592, { w: 3.5, color: C.olive, marker: 'ahO' });
  b += panel(30, 600, 840, 100, '#eaf3f1', C.tealDark) + t(55, 638, '✓ Chosen design + justification', { size: 19, weight: 700, fill: C.tealDark }) +
    t(55, 668, 'why it meets the specification better than the rejected alternatives', { size: 17 });
  b += panel(30, 720, 840, 70, '#fbeee6', C.rust) + t(55, 762, '✗ Only one idea: no comparison is possible, so no top band', { size: 18, weight: 700, fill: C.rust });
  add('04-criterion-b-compare-ideas',
    svg(900, 820, 'Criterion B: compare ideas, then choose', b),
    'A testable specification with criteria such as cost, materials and target-audience appeal sits above a grid in which three different ideas are each judged against every criterion. The chosen idea is presented with reasons why it beats the rejected alternatives; presenting only one idea makes comparison impossible.',
    'Top-band development compares several ideas against the specification and justifies the choice.',
    '## Criterion B: Developing ideas');
}

// 05 Criterion C: a plan and a process log
{
  let b = panel(30, 110, 840, 360) + t(55, 148, 'Logically sequenced plan, followed and logged', { size: 20, weight: 700 });
  const xs = [60, 225, 390, 555, 720];
  xs.forEach((x, i) => {
    const changed = i === 2;
    b += box(x, 175, 130, 70, changed ? C.cream : C.tealLight, changed ? C.olive : C.ink, changed ? 3 : 2.2) +
      t(x + 65, 207, `Step ${i + 1}`, { size: 18, weight: 700, anchor: 'middle' }) + t(x + 65, 231, changed ? 'changed' : 'logged', { size: 15, anchor: 'middle', fill: changed ? C.olive : C.muted, weight: 600 });
    if (i < 4) b += arrow(x + 132, 210, x + 162, 210, { w: 3 });
  });
  b += arrow(455, 248, 455, 282, { w: 3, color: C.olive, marker: 'ahO' });
  b += box(165, 288, 580, 112, C.cream, C.olive) + t(185, 322, 'Log entry: material substitution (availability)', { size: 18, weight: 700 });
  b += tl(185, 352, ['• why the change was made', '• how it affected the following steps'], { size: 17 }, 26);
  b += path('M745,358 C800,358 812,300 787,250', { stroke: C.olive, w: 3, extra: 'stroke-dasharray="8 6" marker-end="url(#ahO)"' });
  b += t(450, 440, 'Also recorded: how time, resources and risks were managed', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += lowTop(30, 490, 410, 140, 'low', 'Lower band', ['Finished prototype only;', 'no record of the process', 'followed to reach it.']);
  b += lowTop(460, 490, 410, 140, 'top', 'Top band', ['Prototype good enough to test', 'plus the sequence followed and', 'every justified change.']);
  add('05-criterion-c-process-log',
    svg(900, 660, 'Criterion C: build to a plan, log the changes', b),
    'Five planned steps are followed in order. At step 3 a material is substituted because of availability, and the log records why the change was made and how it affected the following steps, along with how time, resources and risks were managed. A finished prototype with no process record stays out of the top band.',
    'Criterion C rewards the documented process as much as the prototype.',
    '## Criterion C: Creating the solution');
}

// 06 Criterion D: test every specification point
{
  let b = panel(30, 110, 840, 80, '#fbeee6', C.rust) + t(55, 158, '✗ “The prototype was successful.”', { size: 20, weight: 700, fill: C.rust }) +
    t(845, 158, 'general, untested', { size: 16, anchor: 'end', fill: C.muted, italic: true });
  b += panel(30, 210, 840, 470, '#eaf3f1', C.tealDark) + t(55, 248, '✓ For each specification point, separately:', { size: 20, weight: 700, fill: C.tealDark });
  const heads = ['Specification point', 'Measurable test', 'Actual result', 'Improvement'];
  const xs = [55, 260, 465, 670], w = 180;
  heads.forEach((h, i) => {
    b += chip(xs[i], 268, w, 46, h, i === 0 ? C.mustard : C.teal, { size: 16 });
    if (i < 3) b += arrow(xs[i] + w + 2, 291, xs[i + 1] - 4, 291, { w: 3 });
  });
  const ex = [
    ['Reduce food waste', 'by a target amount'],
    ['Measure waste over', 'a trial period'],
    ['Report it honestly,', 'even if it falls short'],
    ['Specific and', 'actionable, from', 'the evidence'],
  ];
  ex.forEach((lines, i) => {
    b += box(xs[i], 330, w, 110, C.panel, C.panelEdge) + tl(xs[i] + w / 2, 368, lines, { size: 16, anchor: 'middle' }, 22);
  });
  for (let r = 0; r < 2; r++) {
    const y = 456 + r * 58;
    xs.forEach((x, i) => { b += box(x, y, w, 44, C.panel, C.panelEdge) + t(x + w / 2, y + 28, i === 0 ? `point ${r + 2}` : '…', { size: 16, anchor: 'middle', fill: C.muted }); });
  }
  b += box(55, 580, 795, 80, C.cream, C.olive) + t(452, 614, 'Then: the solution’s real impact on its client or target audience', { size: 18, weight: 700, anchor: 'middle' }) +
    t(452, 642, 'canteen example: did the solution cut measured food waste?', { size: 16, anchor: 'middle', fill: C.muted });
  add('06-criterion-d-test-each-point',
    svg(900, 710, 'Criterion D: test every specification point', b),
    'A vague claim that the prototype was successful is rejected. Instead, each specification point gets a measurable test, an honestly reported result and a specific improvement; for the canteen, reducing food waste by a target amount is tested by measuring waste over a trial period. The evaluation ends with the solution’s impact on its client or audience.',
    'Evaluate point by point against the original specification, not with a general verdict.',
    '## Criterion D: Evaluating');
}

// 07 Design cycle mapped to the criteria
{
  const cx = 450, cy = 400, R = 200;
  const nodes = [
    [cx, cy - R, 'A', 'Inquiring and analysing', 'the problem stage'],
    [cx + R + 60, cy, 'B', 'Developing ideas', 'the specification stage'],
    [cx, cy + R, 'C', 'Creating the solution', 'the build stage'],
    [cx - R - 60, cy, 'D', 'Evaluating', 'the test stage'],
  ];
  let b = `<ellipse cx="${cx}" cy="${cy}" rx="${R + 60}" ry="${R}" fill="none" stroke="${C.teal}" stroke-width="14"/>`;
  // arrowheads on the ring (clockwise), between nodes
  const ang = [-45, 45, 135, 225];
  ang.forEach((a) => {
    const r = (a * Math.PI) / 180, x = cx + (R + 60) * Math.cos(r), y = cy + R * Math.sin(r);
    const dx = -(R + 60) * Math.sin(r), dy = R * Math.cos(r), L = Math.hypot(dx, dy);
    b += arrow(x - (dx / L) * 22, y - (dy / L) * 22, x + (dx / L) * 16, y + (dy / L) * 16, { w: 6, color: C.tealDark, marker: 'ahT' });
  });
  nodes.forEach(([x, y, L, name, sub], i) => {
    const w = 250, h = 96;
    b += box(x - w / 2, y - h / 2, w, h, C.panel, C.ink, 2.5, 14) + badge(x - w / 2 + 34, y, 22, L, i % 2 ? C.cream : C.mustard);
    const nl = wrap(name, 16), y0 = nl.length > 1 ? y - 16 : y - 4;
    b += tl(x - w / 2 + 66, y0, nl, { size: 17, weight: 700 }, 21);
    b += t(x - w / 2 + 66, y0 + nl.length * 21 + 5, sub, { size: 15, fill: C.muted });
  });
  b += box(cx - 100, cy - 58, 200, 116, C.cream, C.olive, 2.5, 14) + t(cx, cy - 22, 'Document as', { size: 20, weight: 700, anchor: 'middle' }) +
    t(cx, cy + 4, 'you work', { size: 20, weight: 700, anchor: 'middle' }) + t(cx, cy + 34, 'not afterwards', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(30, 676, 840, 74, '#eaf3f1', C.tealDark) + t(450, 720, 'At every stage ask: which criterion does this page evidence?', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('07-design-cycle-criteria-map',
    svg(900, 780, 'Each design-cycle stage feeds one criterion', b),
    'The design cycle runs clockwise through four stages, each mapped to a criterion: inquiring and analysing (the problem stage, A), developing ideas (the specification stage, B), creating the solution (the build stage, C) and evaluating (the test stage, D). At the centre: document as you work, not afterwards.',
    'Moving through the cycle in order structures evidence for all four criteria, if each stage is documented.',
    '## How to approach it');
}
