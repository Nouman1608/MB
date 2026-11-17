import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-design-design-cycle';
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

const STAGES = [
  ['A', 'Problem stage', 'Inquiring and analysing', ['identify a problem needing a', 'solution, analyse the need,', 'inquire into its nature']],
  ['B', 'Specification stage', 'Developing ideas', ['write a detailed specification,', 'present the proposed solution']],
  ['C', 'Build stage', 'Creating the solution', ['plan the creation, follow the', 'plan to build a testable', 'prototype']],
  ['D', 'Test stage', 'Evaluating', ['design and carry out tests,', 'evaluate success and impact', 'objectively']],
];

// 01 The design cycle and its criteria
{
  const cx = 450, cy = 470;
  let b = `<circle cx="${cx}" cy="${cy}" r="215" fill="none" stroke="${C.teal}" stroke-width="16"/>`;
  [-90, 0, 90, 180].forEach((a) => {
    const r = (a * Math.PI) / 180, R = 215, x = cx + R * Math.cos(r), y = cy + R * Math.sin(r);
    const dx = -Math.sin(r), dy = Math.cos(r);
    const px = -dy, py = dx, tx = x + dx * 20, ty = y + dy * 20, bx = x - dx * 10, by = y - dy * 10;
    b += `<path d="M${tx},${ty} L${bx + px * 16},${by + py * 16} L${bx - px * 16},${by - py * 16} Z" fill="${C.tealDark}"/>`;
  });
  const pos = [[30, 110], [500, 110], [500, 600], [30, 600]];
  STAGES.forEach(([L, st, cr, lines], i) => {
    const [x, y] = pos[i], w = 370, h = 210;
    b += panel(x, y, w, h, i % 2 ? '#fbf6e0' : C.panel, i % 2 ? C.olive : C.panelEdge) + badge(x + 42, y + 44, 24, L, i % 2 ? C.cream : C.mustard);
    b += t(x + 80, y + 38, st, { size: 20, weight: 700 }) + t(x + 80, y + 62, 'Criterion ' + L + ': ' + cr, { size: 16, weight: 600, fill: C.tealDark });
    b += tl(x + 24, y + 108, lines, { size: 17, fill: C.ink }, 25);
  });
  b += box(cx - 105, cy - 62, 210, 124, C.cream, C.olive, 2.5, 62) + t(cx, cy - 14, 'the design', { size: 20, weight: 700, anchor: 'middle' }) + t(cx, cy + 12, 'cycle', { size: 20, weight: 700, anchor: 'middle' }) + t(cx, cy + 38, 'every project', { size: 15, anchor: 'middle', fill: C.muted });
  add('01-design-cycle-and-criteria',
    svg(900, 840, 'The design cycle: four stages, four criteria', b),
    'A clockwise cycle of four stages, each assessed by one criterion: the problem stage (A, inquiring and analysing), the specification stage (B, developing ideas), the build stage (C, creating the solution) and the test stage (D, evaluating). The cycle is used for every project.',
    'Each criterion is one stage of the design cycle made assessable.',
    '## The four stages, mapped to the four criteria');
}

// 02 Worked example: storage for a small space
{
  const rows = [
    ['A', 'Inquire', ['identify the client’s actual need', 'research existing solutions', 'analyse what a genuine solution requires']],
    ['B', 'Develop', ['write a detailed specification: size,', 'materials, budget, constraints', 'present a proposed solution against it']],
    ['C', 'Create', ['plan the build sequence', 'follow the plan to produce a prototype', 'sufficient for testing']],
    ['D', 'Evaluate', ['objective tests against the original', 'specification; honest limitations;', 'impact on the client']],
  ];
  let b = box(150, 110, 600, 66, C.cream, C.olive, 2.5, 14) + t(450, 140, 'Design situation', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) + t(450, 164, 'a storage solution for a small space, for a client', { size: 18, weight: 600, anchor: 'middle' });
  rows.forEach(([L, h, lines], i) => {
    const y = 200 + i * 132;
    b += arrow(450, y - 22, 450, y - 4, { w: 3 });
    b += panel(30, y, 840, 118) + badge(80, y + 59, 26, L, i % 2 ? C.cream : C.mustard) + t(130, y + 66, h, { size: 22, weight: 700 });
    b += tl(300, y + 38, lines, { size: 17, fill: C.ink }, 25);
  });
  add('02-worked-example-storage',
    svg(900, 750, 'Worked example: one project through the cycle', b),
    'A storage solution for a small space moves through four stages: A inquire into the client’s need and existing solutions; B write a specification covering size, materials, budget and constraints and propose a solution; C plan and build a testable prototype; D test it objectively against the specification, name limitations and explain the impact on the client.',
    'Every stage of the project produces something a moderator can mark.',
    '## Worked example: applying the cycle to a design situation');
}

// 03 Documentation vs polish
{
  const bar = (x, y, label, level, col) => box(x, y, 210, 34, C.panel, C.panelEdge, 1.8, 6) + `<rect x="${x}" y="${y}" width="${210 * level}" height="34" rx="6" fill="${col}" stroke="${C.ink}" stroke-width="1.8"/>` + t(x - 12, y + 23, label, { size: 16, anchor: 'end', weight: 600 });
  let b = panel(30, 110, 410, 480, '#fbeee6', C.rust) + t(55, 148, 'Polished product,', { size: 20, weight: 700, fill: C.rust }) + t(55, 174, 'thin process documentation', { size: 20, weight: 700, fill: C.rust });
  b += panel(460, 110, 410, 480, '#eaf3f1', C.tealDark) + t(485, 148, 'Rougher prototype,', { size: 20, weight: 700, fill: C.tealDark }) + t(485, 174, 'thorough documentation', { size: 20, weight: 700, fill: C.tealDark });
  const L = ['Inquiry (A)', 'Specification (B)', 'Process (C)', 'Evaluation (D)', 'Final product'];
  const left = [0.18, 0.15, 0.35, 0.2, 0.95], right = [0.9, 0.9, 0.8, 0.9, 0.5];
  L.forEach((l, i) => {
    b += bar(210, 220 + i * 62, l, left[i], i === 4 ? C.mustard : C.teal) + bar(640, 220 + i * 62, l, right[i], i === 4 ? C.mustard : C.teal);
  });
  b += t(55, 204, 'depth of evidence (schematic)', { size: 15, fill: C.muted, italic: true }) + t(485, 204, 'depth of evidence (schematic)', { size: 15, fill: C.muted, italic: true });
  b += t(235, 545, 'typically scores LOWER', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) + t(665, 545, 'typically scores HIGHER', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += panel(30, 610, 840, 80, C.cream, C.olive) + t(450, 646, 'The ePortfolio is a complete design folder, not a single final product:', { size: 17, weight: 700, anchor: 'middle' }) +
    t(450, 672, 'most marks sit in the documented process at every stage.', { size: 17, anchor: 'middle' });
  add('03-documentation-vs-polish',
    svg(900, 715, 'Where the marks sit', b),
    'Two folders compared with schematic bars. A polished final product with thin documentation of inquiry, specification, process and evaluation typically scores lower. A rougher prototype backed by thorough documentation at every stage typically scores higher, because the ePortfolio is assessed as a complete design folder.',
    'A strong folder beats a polished object with little process behind it.',
    '## Documentation matters more than the finished product');
}

// 04 Honest evaluation
{
  let b = lowTop(30, 110, 410, 250, 'low', 'Showcase only', []);
  b += tl(55, 186, ['“The solution is already', 'perfect.”'], { size: 19, italic: true }, 27);
  b += tl(55, 270, ['only what worked;', 'weaknesses left out'], { size: 16, fill: C.muted }, 22);
  b += panel(460, 110, 410, 250, '#eaf3f1', C.tealDark) + t(482, 146, '✓ Honest and objective', { size: 19, weight: 700, fill: C.tealDark });
  const steps = ['objective tests', 'real limitations named', 'how it could be improved'];
  steps.forEach((s, i) => {
    const y = 172 + i * 60;
    b += chip(490, y, 350, 46, s, i === 1 ? C.mustard : C.tealLight, { size: 17 });
    if (i < 2) b += arrow(665, y + 47, 665, y + 58, { w: 2.5 });
  });
  b += panel(30, 380, 840, 76, C.cream, C.olive) + t(450, 426, 'Stage D rewards transparency about weaknesses; it does not penalise it.', { size: 18, weight: 700, anchor: 'middle' });
  add('04-honest-evaluation',
    svg(900, 480, 'Honest evaluation is rewarded', b),
    'Claiming the solution is already perfect and showing only what worked is contrasted with an honest evaluation: objective tests, real limitations named, and how the solution could be improved. Stage D rewards that transparency.',
    'Naming real weaknesses, with improvements, is what Stage D rewards.',
    '## Honest evaluation is rewarded, not penalised');
}

// 05 The cycle repeats on every project
{
  let b = '';
  const mini = (cx, cy, r, label) => {
    let o = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.panel}" stroke="${C.teal}" stroke-width="10"/>`;
    ['A', 'B', 'C', 'D'].forEach((L, i) => { const a = (-90 + i * 90) * Math.PI / 180; o += badge(cx + r * Math.cos(a), cy + r * Math.sin(a), 19, L, i % 2 ? C.cream : C.mustard); });
    o += t(cx, cy + 7, label, { size: 18, weight: 700, anchor: 'middle' });
    return o;
  };
  const xs = [165, 450, 735];
  xs.forEach((x, i) => {
    b += mini(x, 260, 85, `Project ${i + 1}`);
    b += t(x, 400, 'criteria reassessed', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
    if (i < 2) b += arrow(x + 112, 260, x + 170, 260, { w: 4 });
  });
  b += t(450, 140, 'new problem each time, same four-stage process', { size: 18, anchor: 'middle', fill: C.muted, weight: 600 });
  b += lowTop(30, 430, 410, 140, 'low', 'One-off introduction', ['later projects become simply', '“making things”; weak documentation', 'habits persist']);
  b += lowTop(460, 430, 410, 140, 'top', 'A working habit', ['check the cycle on every project;', 'correct weak documentation habits', 'early, before projects get harder']);
  add('05-cycle-repeats',
    svg(900, 600, 'The cycle repeats on every project', b),
    'Three projects in a row, each running through stages A, B, C and D, with the criteria reassessed every time. Treating the cycle as a one-off introduction lets weak documentation habits persist; treating it as a working habit on every project lets them be corrected early.',
    'The design cycle is the structure for every project, not an introductory unit.',
    '## Why the cycle repeats rather than runs once');
}

// 06 Design and the MYP certificate
{
  let b = t(450, 130, 'The certificate needs satisfactory achievement in at least one of:', { size: 18, anchor: 'middle', weight: 600, fill: C.muted });
  const opts = ['Physical and health education', 'Arts', 'Design'];
  opts.forEach((o, i) => {
    const x = 30 + i * 285, hi = i === 2;
    b += panel(x, 150, 270, 110, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge) + tl(x + 135, hi ? 212 : 200 + (wrap(o, 16).length > 1 ? 0 : 12), wrap(o, 16), { size: 20, weight: 700, anchor: 'middle' }, 26);
  });
  b += arrow(735, 264, 735, 300, { w: 3.5, color: C.olive, marker: 'ahO' });
  b += panel(30, 306, 840, 104, '#eaf3f1', C.tealDark) + t(55, 344, 'A well-documented design ePortfolio', { size: 19, weight: 700, fill: C.tealDark }) +
    t(55, 374, 'can decide whether this certificate requirement is met, beyond the subject grade.', { size: 17 });
  b += panel(30, 430, 840, 104) + t(55, 468, 'Looking ahead: DP Design Technology', { size: 19, weight: 700 }) +
    t(55, 498, 'MYP eAssessment tasks align with its skills; the same cyclical process underpins its coursework.', { size: 16, fill: C.muted });
  add('06-certificate-and-dp',
    svg(900, 560, 'Why the design folder matters beyond the grade', b),
    'The MYP certificate requires satisfactory achievement in at least one of physical and health education, arts or design, so a well-documented design ePortfolio can decide whether that requirement is met. MYP design skills also lead into DP Design Technology, whose coursework uses the same cyclical process.',
    'Design can satisfy a certificate requirement, and the cycle carries on into the DP.',
    "## Design's role in the MYP certificate");
}
