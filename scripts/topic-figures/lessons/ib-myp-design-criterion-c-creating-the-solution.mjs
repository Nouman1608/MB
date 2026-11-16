import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-design-criterion-c-creating-the-solution';
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

// 01 Where C sits and its four working skills
{
  let b = '';
  const ends = [['B', 'Developing ideas', 'chosen design'], ['D', 'Evaluating', 'tests']];
  b += box(30, 110, 170, 92, C.panel, C.panelEdge, 2.2, 12) + badge(66, 156, 20, 'B', C.cream) + tl(94, 150, ['chosen', 'design'], { size: 16, weight: 600 }, 20);
  b += box(700, 110, 170, 92, C.panel, C.panelEdge, 2.2, 12) + badge(736, 156, 20, 'D', C.cream) + tl(764, 150, ['tests and', 'evaluation'], { size: 16, weight: 600 }, 20);
  b += arrow(202, 156, 240, 156, { w: 3.5 }) + arrow(660, 156, 698, 156, { w: 3.5 });
  b += box(244, 110, 412, 92, C.mustard, C.ink, 2.5, 12) + t(450, 148, 'C: Creating the solution', { size: 21, weight: 700, anchor: 'middle' }) + t(450, 178, 'plan it, then follow the plan', { size: 16, anchor: 'middle' });
  const skills = [
    ['Logical plan', 'steps in a workable order, with time and resources for each'],
    ['Technical skills', 'suitable tools, materials, software and techniques, used accurately and safely, and shown'],
    ['Following the plan', 'make it in the planned order and record what happened'],
    ['Justifying changes', 'explain any change to the design or the plan, with reasons and effects'],
  ];
  skills.forEach(([h, d], i) => {
    const y = 230 + i * 100;
    b += panel(30, y, 840, 86) + badge(78, y + 43, 22, String(i + 1), i % 2 ? C.cream : C.tealLight);
    b += t(120, y + 36, h, { size: 20, weight: 700 }) + t(120, y + 64, d, { size: 16, fill: C.muted });
  });
  b += panel(30, 640, 840, 76, C.cream, C.olive) + t(450, 676, 'Outcome: a prototype sufficient for testing and evaluation', { size: 19, weight: 700, anchor: 'middle' }) +
    t(450, 700, 'a model, prototype, product or system', { size: 16, anchor: 'middle', fill: C.muted });
  add('01-criterion-c-overview',
    svg(900, 745, 'Criterion C between choosing and testing', b),
    'Criterion C, creating the solution, sits between the chosen design from Criterion B and testing in Criterion D. It splits into four skills: a logical plan, technical skills, following the plan with a record, and justifying changes. The outcome is a prototype complete enough to test.',
    'Plan, show skill, follow and record, justify changes: then test in Criterion D.',
    '## What this unit covers');
}

// 02 Every step answers four questions
{
  const q = [['What?', 'one clear action', '“drill two 12 mm holes in the end pieces”'], ['In what order?', 'depends on earlier steps', 'cut before sand; dry-fit before glue'], ['How long?', 'a time for each step', 'total checked against lessons'], ['With what?', 'resources', 'materials, tools, software, people, cost']];
  let b = '';
  q.forEach(([h, s, e], i) => {
    const x = 30 + i * 213, w = 200;
    b += box(x, 110, w, 64, C.mustard, C.ink, 2.5, 12) + t(x + w / 2, 150, h, { size: 19, weight: 700, anchor: 'middle' });
    b += box(x, 184, w, 130, C.panel, C.panelEdge, 2.2, 12) + t(x + w / 2, 214, s, { size: 16, weight: 700, anchor: 'middle' }) + tl(x + w / 2, 244, wrap(e, 21), { size: 15, anchor: 'middle', fill: C.muted }, 20);
  });
  b += t(450, 352, 'Strong plans add two more columns', { size: 18, weight: 700, anchor: 'middle' });
  b += chip(140, 368, 290, 52, 'Safety: risk and control', C.tealLight) + chip(470, 368, 290, 52, 'Quality check: e.g. ±1 mm', C.tealLight);
  // flowchart loop
  b += panel(30, 444, 840, 230) + t(55, 480, 'Flowchart: a check can send you back a step', { size: 19, weight: 700 });
  b += chip(70, 540, 170, 60, 'Cut parts', C.cream);
  b += `<path d="M420,510 L520,570 L420,630 L320,570 Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + tl(420, 562, ['within', '±1 mm?'], { size: 16, weight: 700, anchor: 'middle' }, 20);
  b += arrow(242, 570, 316, 570, { w: 3 });
  b += arrow(524, 570, 640, 570, { w: 3, color: C.tealDark, marker: 'ahT' }) + t(582, 558, 'yes', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += chip(646, 540, 190, 60, 'Next step', C.tealLight);
  b += path('M420,632 L420,655 L155,655 L155,606', { stroke: C.rust, w: 3, extra: 'marker-end="url(#ahR)"' }) + t(300, 648, 'no: re-cut', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  add('02-logical-plan-questions',
    svg(900, 700, 'What makes a plan logical', b),
    'Every planned step answers four questions: what is done, in what order, how long it takes and with what resources. Strong plans add safety and quality-check columns. A flowchart shows a check that sends you back: if parts are not within ±1 mm, re-cut them.',
    'Someone else should be able to make your product from the plan without asking you anything.',
    '## 1. Writing a logical plan');
}

// 03 Caddy plan as a Gantt chart
{
  const steps = [['Mark out parts', 30], ['Laser-cut parts', 40], ['Sand and check', 35], ['Drill handle holes', 20], ['Dry-fit', 20], ['Glue and clamp', 30], ['Fit dowel handle', 15], ['Two coats of finish', 60], ['Photo + spec check', 20]];
  const x0 = 250, x1 = 850, k = (x1 - x0) / 330, top = 160, rh = 38;
  let b = panel(30, 110, 840, 465);
  for (let l = 0; l <= 6; l++) {
    const x = x0 + l * 55 * k;
    b += `<line x1="${x}" y1="${top - 10}" x2="${x}" y2="${top + 9 * rh + 6}" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="5 5"/>`;
    if (l < 6) b += t(x + 27.5 * k, top - 18, `lesson ${l + 1}`, { size: 15, anchor: 'middle', fill: C.muted, weight: 600 });
  }
  b += `<rect x="${x0 + 270 * k}" y="${top - 6}" width="${60 * k}" height="${9 * rh + 6}" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
  b += tl(x0 + 300 * k, top + 60, ['contin-', 'gency', '60 min'], { size: 15, weight: 700, anchor: 'middle', fill: C.olive }, 19);
  let cum = 0;
  steps.forEach(([n, m], i) => {
    const y = top + i * rh;
    b += t(240, y + 25, `${i + 1}  ${n}`, { size: 16, anchor: 'end', weight: i === 5 ? 700 : 400 });
    b += `<rect x="${x0 + cum * k}" y="${y + 6}" width="${m * k}" height="${rh - 12}" rx="5" fill="${i === 5 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="1.8"/>`;
    b += t(x0 + (cum + m) * k + 6, y + 25, `${m}`, { size: 15, fill: C.muted });
    cum += m;
  });
  const gy = top + 5 * rh + 19;
  b += t(x0 + 175 * k + 38, gy + 6, 'dries overnight', { size: 15, weight: 600, fill: C.olive });
  b += `<line x1="${x0}" y1="${top + 9 * rh + 6}" x2="${x1}" y2="${top + 9 * rh + 6}" stroke="${C.ink}" stroke-width="2.5"/>`;
  [0, 110, 220, 330].forEach((v) => { b += t(x0 + v * k, top + 9 * rh + 28, `${v}`, { size: 15, anchor: 'middle', fill: C.muted }); });
  b += t(x0 + 165 * k, top + 9 * rh + 52, 'minutes (6 lessons × 55 = 330)', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 592, 410, 92, '#eaf3f1', C.tealDark) + t(52, 627, 'Planned: 270 of 330 minutes', { size: 18, weight: 700 }) + t(52, 657, 'contingency 60 min = 18.2%', { size: 17, fill: C.tealDark, weight: 600 });
  b += panel(460, 592, 410, 92, C.cream, C.olive) + t(482, 627, 'Digital plan, same logic', { size: 18, weight: 700 }) + t(482, 657, '215 of 250 min; contingency 14.0%', { size: 17, fill: C.olive, weight: 600 });
  add('03-caddy-gantt-plan',
    svg(900, 712, 'Planning the paint-brush caddy', b),
    'Gantt chart of nine steps for a plywood brush caddy across six 55-minute lessons: mark out 30, laser-cut 40, sand 35, drill 20, dry-fit 20, glue and clamp 30 (dries overnight), fit handle 15, finish 60 and check 20 minutes. They total 270 of 330 minutes, leaving 60 minutes (18.2%) of contingency. A digital plan uses 215 of 250 minutes, 14.0% contingency.',
    'Times add up inside the lessons available, with contingency left for problems.',
    '## 1. Writing a logical plan');
}

// 04 Annotating evidence of technical skill
{
  let b = lowTop(30, 110, 840, 100, 'low', 'Not evidence', ['“Photo 4: drilling”']);
  b += panel(30, 230, 840, 330, '#eaf3f1', C.tealDark) + t(52, 266, '✓ Evidence: every image is annotated', { size: 19, weight: 700, fill: C.tealDark });
  // photo placeholder with a drill schematic
  b += box(55, 290, 240, 180, C.tealLight, C.ink, 2.5, 8);
  b += box(105, 400, 140, 40, C.rock, C.ink, 2, 3) + box(105, 360, 140, 40, C.rock, C.ink, 2, 3) + box(160, 300, 30, 48, '#7d8592', C.ink, 2, 3) + path('M175,348 L175,392', { stroke: C.ink, w: 4 });
  b += box(80, 368, 25, 64, '#7d8592', C.ink, 2, 3) + box(245, 368, 25, 64, '#7d8592', C.ink, 2, 3);
  b += t(175, 495, 'Photo 4', { size: 16, weight: 700, anchor: 'middle' });
  const parts = [['What it shows', 'drilling the 12 mm handle holes'], ['Skill involved', 'both ends clamped together'], ['What was checked', 'so the holes line up']];
  parts.forEach(([h, d], i) => {
    const y = 290 + i * 66;
    b += arrow(298, 380, 330, y + 26, { w: 2, color: C.tealDark, marker: 'ahT' });
    b += box(336, y, 510, 56, C.panel, C.tealDark, 2, 10) + t(356, y + 35, h, { size: 16, weight: 700, fill: C.tealDark }) + t(530, y + 35, d, { size: 16 });
  });
  b += t(55, 538, 'Also show: why this technique, accuracy against tolerance, safe working.', { size: 16, fill: C.ink, weight: 600 });
  b += panel(30, 580, 840, 90, C.cream, C.olive) + t(55, 616, 'Accuracy example', { size: 18, weight: 700 }) +
    t(55, 646, 'All nine parts within ±1 mm; the divider was 0.5 mm oversize and was sanded to fit.', { size: 17 });
  add('04-annotating-skill-evidence',
    svg(900, 700, 'Showing technical skill in the folder', b),
    'A caption that only says “Photo 4: drilling” is not evidence. A strong annotation says what the image shows (drilling the 12 mm handle holes), the skill involved (both ends clamped together) and what was checked (the holes line up), alongside measured accuracy such as all nine parts within ±1 mm.',
    'The moderator sees the evidence, not the object, so every image needs an annotation.',
    '## 2. Showing technical skills');
}

// 05 Planned vs actual
{
  const rows = [['2 Cut parts', 40, 65], ['3 Sand and check', 35, 45], ['5 Dry-fit', 20, 15], ['8 Finish', 60, 55], ['Other steps', 115, 115]];
  const x0 = 250, k = 3.6;
  let b = panel(30, 110, 840, 462) + t(55, 146, 'Caddy project: planned and actual minutes', { size: 19, weight: 700 });
  b += `<rect x="560" y="132" width="22" height="16" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="1.5"/>` + t(590, 146, 'planned', { size: 15 }) +
    `<rect x="680" y="132" width="22" height="16" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>` + t(710, 146, 'actual', { size: 15 });
  rows.forEach(([n, p, a], i) => {
    const y = 175 + i * 72;
    const d = a - p;
    b += t(235, y + 32, n, { size: 17, weight: 600, anchor: 'end' });
    b += `<rect x="${x0}" y="${y + 6}" width="${Math.min(p, 150) * k}" height="22" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="1.5"/>`;
    b += `<rect x="${x0}" y="${y + 30}" width="${Math.min(a, 150) * k}" height="22" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`;
    b += t(x0 + Math.min(p, 150) * k + 8, y + 23, String(p), { size: 15, fill: C.muted }) + t(x0 + Math.min(a, 150) * k + 8, y + 47, String(a), { size: 15, fill: C.muted });
    b += t(850, y + 38, d === 0 ? '0' : (d > 0 ? '+' : '−') + Math.abs(d), { size: 20, weight: 700, anchor: 'end', fill: d > 0 ? C.rust : d < 0 ? C.tealDark : C.muted });
  });
  b += t(250, 552, 'Laser cutter out of action in week 2: parts cut on a scroll saw', { size: 16, fill: C.rust, weight: 600 });
  b += panel(30, 592, 840, 100, C.cream, C.olive);
  b += t(55, 628, 'Total: planned 270, actual 295 (+25)', { size: 19, weight: 700 }) + t(55, 662, '330 − 295 = 35 minutes of contingency still left', { size: 17, fill: C.olive, weight: 600 });
  add('05-planned-vs-actual',
    svg(900, 722, 'The production log: plan versus reality', b),
    'Paired bars compare planned and actual minutes for the caddy. Cutting took 65 instead of 40 minutes (+25) and sanding 45 instead of 35 (+10) after the laser cutter broke and a scroll saw was used; dry-fit and finishing each saved 5. The total was 295 against 270 planned, leaving 35 of the 330 minutes.',
    'A log with planned and actual times shows where the project slipped and how contingency absorbed it.',
    '## 3. Following the plan');
}

// 06 Design change vs plan change from one event
{
  let b = box(250, 110, 400, 70, '#fbeee6', C.rust, 2.5, 12) + t(450, 140, 'Event', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + t(450, 166, 'laser cutter out of action in week 2', { size: 17, anchor: 'middle', weight: 600 });
  b += arrow(370, 182, 240, 232, { w: 3.5 }) + arrow(530, 182, 660, 232, { w: 3.5 });
  b += panel(30, 240, 410, 250, C.tealLight, C.tealDark) + t(55, 278, 'Change to the PLAN', { size: 20, weight: 700, fill: C.tealDark }) + t(55, 304, 'how or when you make it', { size: 16, fill: C.muted }) +
    tl(55, 344, ['order of steps, time,', 'tool or machine'], { size: 17 }, 24) +
    box(55, 404, 360, 66, C.panel, C.tealDark) + tl(235, 432, ['parts cut on a scroll saw', 'instead of the laser cutter'], { size: 16, weight: 600, anchor: 'middle' }, 21);
  b += panel(460, 240, 410, 250, C.cream, C.olive) + t(485, 278, 'Change to the DESIGN', { size: 20, weight: 700, fill: C.olive }) + t(485, 304, 'alters the product itself', { size: 16, fill: C.muted }) +
    tl(485, 344, ['material, joint, size,', 'feature'], { size: 17 }, 24) +
    box(485, 404, 360, 66, C.panel, C.olive) + tl(665, 432, ['finger joints → glued butt', 'joints with panel pins'], { size: 16, weight: 600, anchor: 'middle' }, 21);
  b += arrow(442, 437, 482, 437, { w: 3, color: C.olive, marker: 'ahO' });
  b += t(450, 528, 'Finger joints cannot be cut accurately enough on a scroll saw (±1 mm),', { size: 16, anchor: 'middle', fill: C.muted }) + t(450, 552, 'so the plan change forced a design change.', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(30, 575, 840, 70, '#eaf3f1', C.tealDark) + t(450, 617, 'Mark up the original plan (a “revised” column); keep both versions visible.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('06-plan-change-vs-design-change',
    svg(900, 670, 'One event, two kinds of change', b),
    'The laser cutter being out of action caused a change to the plan, cutting parts on a scroll saw, which in turn caused a change to the design, replacing finger joints with glued butt joints and panel pins. Plan changes alter how or when you make it; design changes alter the product itself.',
    'Keep plan changes and design changes apart, even when one event causes both.',
    '## 4. Justifying changes');
}

// 07 Four-part justification
{
  const parts = [
    ['What changed', 'finger joints → glued butt joints with 19 mm panel pins; scroll saw, not laser cutter', C.mustard],
    ['Why', 'laser cutter out of action (technician’s notice); finger joints not accurate to ±1 mm on a scroll saw', C.cream],
    ['Effect on the solution', 'butt joints are weaker: test the strength point (ten full paint pots) in Criterion D; client agreed the look', C.cream],
    ['Effect on the plan', 'cutting +25 min, sanding +10 min, taken from contingency; panel pins and pin hammer added', C.cream],
  ];
  let b = '';
  parts.forEach(([h, d, f], i) => {
    const y = 110 + i * 120;
    b += panel(30, y, 840, 106) + badge(80, y + 53, 26, String(i + 1), f);
    b += t(128, y + 38, h, { size: 21, weight: 700 }) + tl(128, y + 66, wrap(d, 82), { size: 16, fill: C.muted }, 21);
  });
  b += lowTop(30, 600, 840, 100, 'low', 'Partial: cause only', ['“I changed to butt joints because the laser cutter was broken.”']);
  add('07-four-part-justification',
    svg(900, 730, 'Justifying a change in four parts', b),
    'A full justification states what changed, why with evidence, the effect on the solution and how it will be tested in Criterion D, and the effect on the plan’s time and resources, using the caddy’s switch to butt joints as the example. Giving only the cause is a partial justification.',
    'A change is justified only when its cause and both of its effects are written down.',
    '## 4. Justifying changes');
}
