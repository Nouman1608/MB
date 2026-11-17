import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-sciences-criteria-in-practice';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { if ((out[out.length - 1] + ' ' + w).trim().length > n) out.push(w); else out[out.length - 1] = (out[out.length - 1] + ' ' + w).trim(); } return out; };
const chip = (x, y, w, h, s, fill, { size = 17, weight = 700, edge = C.ink } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${edge}" stroke-width="2.2"/>` + t(x + w / 2, y + h / 2 + size * 0.35, s, { size, weight, anchor: 'middle' });
const lowTop = (x, y, w, h, kind, title, lines) => {
  const top = kind === 'top';
  return panel(x, y, w, h, top ? '#eaf3f1' : '#fbeee6', top ? C.tealDark : C.rust) +
    t(x + 22, y + 36, (top ? '✓ ' : '✗ ') + title, { size: 19, weight: 700, fill: top ? C.tealDark : C.rust }) + tl(x + 22, y + 66, lines, { size: 16, fill: C.ink }, 22);
};

// 01 The four criteria
{
  const rows = [
    ['A', 'Knowing and understanding', 'Apply knowledge to explain and judge in an unfamiliar context, not just recall a definition.'],
    ['B', 'Inquiring and designing', 'Write your own testable question and hypothesis, choose variables and justify the method.'],
    ['C', 'Processing and evaluating', 'Process and interpret data accurately; give a specific limitation and a specific improvement.'],
    ['D', 'Reflecting on the impacts of science', 'Weigh a real benefit against a real risk, cite sources and reach a reasoned judgement.'],
  ];
  let b = '';
  rows.forEach(([L, name, d], i) => {
    const y = 110 + i * 150;
    b += panel(30, y, 840, 138) + badge(88, y + 69, 32, L, i % 2 ? C.cream : C.mustard);
    b += t(145, y + 44, name, { size: 23, weight: 700 }) + t(145, y + 70, 'top-band evidence:', { size: 16, weight: 600, fill: C.tealDark });
    b += tl(145, y + 96, wrap(d, 72), { size: 17, fill: C.muted }, 22);
  });
  b += panel(30, 715, 840, 70, C.cream, C.olive) + t(450, 758, 'Same descriptors for discrete, modular and integrated courses.', { size: 19, weight: 700, anchor: 'middle' });
  add('01-four-criteria',
    svg(900, 815, 'The four MYP Sciences criteria', b),
    'Four rows: A knowing and understanding (apply knowledge to unfamiliar contexts), B inquiring and designing (own testable question, variables and justified method), C processing and evaluating (accurate data work, specific limitation and improvement) and D reflecting on the impacts of science (two-sided, cited, reasoned judgement). The descriptors are the same for every course model.',
    'Each criterion rewards using a skill, not naming it, and none changes with the course model.',
    '## Where this fits in the subject');
}

// 02 Criterion A: the metal and wooden spoon
{
  let b = panel(30, 110, 840, 400);
  const hand = (x) => path(`M${x - 50},${200} C${x - 50},${170} ${x + 50},${170} ${x + 50},${200} L${x + 50},${236} L${x - 50},${236} Z`, { fill: '#efc9a8', w: 2.5 });
  const spoon = (x, fill, edge) => `<rect x="${x - 70}" y="236" width="140" height="22" rx="11" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + `<ellipse cx="${x + 92}" cy="247" rx="28" ry="18" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
  b += hand(220) + spoon(220, '#c7cdd6', C.ink) + hand(620) + spoon(620, '#c79a62', C.olive);
  b += t(220, 192, 'hand', { size: 15, anchor: 'middle', fill: C.muted }) + t(620, 192, 'hand', { size: 15, anchor: 'middle', fill: C.muted }) + t(240, 300, 'Metal spoon', { size: 21, weight: 700, anchor: 'middle' }) + t(640, 300, 'Wooden spoon', { size: 21, weight: 700, anchor: 'middle' });
  for (let k = 0; k < 3; k++) b += arrow(185 + k * 35, 214, 185 + k * 35, 262, { w: 5, color: C.rust, marker: 'ahR' });
  b += arrow(620, 214, 620, 256, { w: 2.5, color: C.rust, marker: 'ahR' });
  b += t(240, 330, 'heat leaves the hand fast', { size: 17, anchor: 'middle', fill: C.rust, weight: 600 }) + t(640, 330, 'heat leaves the hand slowly', { size: 17, anchor: 'middle', fill: C.rust, weight: 600 });
  b += t(240, 360, 'feels colder', { size: 18, anchor: 'middle', weight: 700 }) + t(640, 360, 'feels warmer', { size: 18, anchor: 'middle', weight: 700 });
  b += `<rect x="130" y="390" width="640" height="96" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` +
    t(450, 425, 'Actual temperature: the same (room temperature)', { size: 19, weight: 700, anchor: 'middle' }) +
    t(450, 460, 'Perceived temperature: different, because of conduction rate', { size: 18, anchor: 'middle', fill: C.muted });
  b += lowTop(30, 530, 410, 130, 'low', 'Lower band', ['Names “thermal conductivity”', 'and stops there.']);
  b += lowTop(460, 530, 410, 130, 'top', 'Top band', ['Uses conduction rate to explain', 'the feeling, then judges actual', 'versus perceived temperature.']);
  add('02-criterion-a-spoons',
    svg(900, 690, 'Criterion A: apply, don’t just name', b),
    'A hand on a metal spoon loses heat quickly, shown by thick arrows, so the spoon feels colder; a hand on a wooden spoon loses heat slowly, so it feels warmer. Both spoons are actually at room temperature. A lower-band answer only names thermal conductivity; a top-band answer uses conduction rate to judge actual versus perceived temperature.',
    'Top-band criterion A answers use the concept to reach and justify a judgement.',
    '## Criterion A: Knowing and understanding');
}

// 03 Criterion B: own design
{
  let b = lowTop(30, 110, 840, 120, 'low', 'Lower band: follow a worksheet', ['Fixed instructions to measure how temperature affects reaction rate;', 'the student makes no design decisions.']);
  b += panel(30, 250, 840, 560, '#eaf3f1', C.tealDark) + t(52, 288, '✓ Top band: the student designs it', { size: 21, weight: 700, fill: C.tealDark });
  const steps = [
    ['Research question', 'How does the concentration of a reactant affect reaction rate?', C.mustard],
    ['Hypothesis', 'a testable prediction the student writes', C.cream],
    ['Variables', '', C.cream],
    ['Method, justified', 'explain why each choice suits the question, before starting', C.cream],
  ];
  let y = 310;
  steps.forEach(([h, d, f], i) => {
    const hh = i === 2 ? 170 : 86;
    b += `<rect x="60" y="${y}" width="780" height="${hh}" rx="12" fill="#fff" stroke="${C.panelEdge}" stroke-width="2"/>` + badge(98, y + 43, 20, String(i + 1), f);
    b += t(135, y + 36, h, { size: 20, weight: 700 }) + (d ? t(135, y + 64, d, { size: 17, fill: C.muted }) : '');
    if (i === 2) {
      b += chip(135, y + 60, 215, 92, '', C.tealLight) + t(242, y + 92, 'Independent', { size: 17, weight: 700, anchor: 'middle' }) + t(242, y + 118, 'concentration', { size: 16, anchor: 'middle' }) + t(242, y + 138, '(what you change)', { size: 15, anchor: 'middle', fill: C.muted });
      b += chip(365, y + 60, 215, 92, '', C.tealLight) + t(472, y + 92, 'Dependent', { size: 17, weight: 700, anchor: 'middle' }) + t(472, y + 118, 'reaction rate', { size: 16, anchor: 'middle' }) + t(472, y + 138, '(what you measure)', { size: 15, anchor: 'middle', fill: C.muted });
      b += chip(595, y + 60, 230, 92, '', C.cream) + t(710, y + 92, 'Controlled', { size: 17, weight: 700, anchor: 'middle' }) + t(710, y + 118, 'everything else kept', { size: 16, anchor: 'middle' }) + t(710, y + 138, 'the same, with reasons', { size: 15, anchor: 'middle', fill: C.muted });
    }
    y += hh + 14;
  });
  add('03-criterion-b-design',
    svg(900, 840, 'Criterion B: design your own investigation', b),
    'Lower band follows a fixed worksheet on temperature and reaction rate. Top band has the student write a research question on how reactant concentration affects reaction rate, a testable hypothesis, the independent variable (concentration), dependent variable (rate) and controlled variables with reasons, and a justified method.',
    'Top-band criterion B work is the student’s own question, variables and justified method.',
    '## Criterion B: Inquiring and designing');
}

// 04 Criterion C: graph + specific evaluation
{
  let b = panel(30, 110, 840, 400);
  const ox = 130, oy = 450, W = 360, H = 270;
  b += `<line x1="${ox}" y1="${oy}" x2="${ox + W}" y2="${oy}" stroke="${C.ink}" stroke-width="3"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - H}" stroke="${C.ink}" stroke-width="3"/>`;
  b += t(ox + W / 2, oy + 40, 'concentration of reactant', { size: 17, weight: 600, anchor: 'middle' });
  b += `<text x="${ox - 22}" y="${oy - H / 2}" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${ox - 22} ${oy - H / 2})">reaction rate</text>`;
  const pts = [[0.15, 0.17], [0.32, 0.33], [0.5, 0.47], [0.68, 0.66], [0.86, 0.82]];
  b += `<line x1="${ox + 0.08 * W}" y1="${oy - 0.09 * H}" x2="${ox + 0.93 * W}" y2="${oy - 0.9 * H}" stroke="${C.tealDark}" stroke-width="3"/>`;
  pts.forEach(([a, c]) => { b += path(`M${ox + a * W - 7},${oy - c * H - 7} L${ox + a * W + 7},${oy - c * H + 7} M${ox + a * W + 7},${oy - c * H - 7} L${ox + a * W - 7},${oy - c * H + 7}`, { stroke: C.ink, w: 3 }); });
  b += t(ox + 20, 150, 'Present: labelled graph', { size: 19, weight: 700 });
  const sx = 540;
  b += t(sx, 150, 'Then, in order:', { size: 19, weight: 700 });
  [['1', 'Identify the trend', C.cream], ['2', 'Explain it with a', C.cream], ['3', 'Evaluate the method', C.mustard]].forEach(([n, s, f], i) => {
    b += badge(sx + 18, 200 + i * 95, 18, n, f) + t(sx + 48, 207 + i * 95, s, { size: 18, weight: 700 });
  });
  b += t(sx + 48, 207 + 95 + 26, 'concept, e.g. collision theory', { size: 16, fill: C.muted }) + t(sx + 48, 207 + 2 * 95 + 26, 'a specific limitation and', { size: 16, fill: C.muted }) + t(sx + 48, 207 + 2 * 95 + 48, 'a matching improvement', { size: 16, fill: C.muted });
  b += t(sx + 48, 207 + 26, 'state what the data show', { size: 16, fill: C.muted });
  b += lowTop(30, 530, 410, 170, 'low', 'Generic: not credited', ['Improvement: “use more trials”.', '', 'It names no actual problem with', 'this method.']);
  b += lowTop(460, 530, 410, 170, 'top', 'Specific: top band', ['Limitation: the colour-change', 'endpoint was judged by eye,', 'adding timing error.', 'Improvement: use a colorimeter to', 'detect the endpoint automatically.']);
  add('04-criterion-c-evaluate',
    svg(900, 730, 'Criterion C: process, then evaluate', b),
    'A graph with labelled axes plots reaction rate against reactant concentration with a line of best fit. The steps are identify the trend, explain it with a concept such as collision theory, and evaluate the method. “Use more trials” is generic; top band names the real limitation, an endpoint judged by eye, and a matching fix, a colorimeter.',
    'Name a real weakness of your own method and a fix that targets exactly that weakness.',
    '## Criterion C: Processing and evaluating');
}

// 05 Criterion D: two-sided evaluation
{
  let b = '';
  // balance
  const cx = 450, py = 330;
  b += `<path d="M${cx - 50},620 L${cx + 50},620 L${cx},${py + 10} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += `<line x1="${cx - 300}" y1="${py}" x2="${cx + 300}" y2="${py}" stroke="${C.ink}" stroke-width="7" stroke-linecap="round"/><circle cx="${cx}" cy="${py}" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  b += path(`M${cx - 280},${py} L${cx - 330},${py + 60} M${cx - 280},${py} L${cx - 230},${py + 60}`, { w: 2.5 }) + path(`M${cx + 280},${py} L${cx + 230},${py + 60} M${cx + 280},${py} L${cx + 330},${py + 60}`, { w: 2.5 });
  b += panel(cx - 410, py + 60, 270, 150, '#eaf3f1', C.tealDark) + t(cx - 275, py + 98, 'Genuine benefit', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    tl(cx - 275, py + 130, ['increased crop yield', 'in specific conditions'], { size: 17, anchor: 'middle' }, 23) + t(cx - 275, py + 190, '[cited source]', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += panel(cx + 140, py + 60, 270, 150, '#fbeee6', C.rust) + t(cx + 275, py + 98, 'Genuine risk', { size: 20, weight: 700, anchor: 'middle', fill: C.rust }) +
    tl(cx + 275, py + 130, ['ecological or economic', 'concerns'], { size: 17, anchor: 'middle' }, 23) + t(cx + 275, py + 190, '[cited source]', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += panel(150, 110, 600, 150, C.cream, C.olive) + t(450, 150, 'Example: genetically modified crops', { size: 21, weight: 700, anchor: 'middle' }) +
    t(450, 190, 'Weigh both sides, then reach', { size: 18, anchor: 'middle', fill: C.muted }) + t(450, 216, 'a reasoned evaluative judgement.', { size: 18, anchor: 'middle', fill: C.muted }) + t(450, 246, 'varied scientific language, sources documented', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  b += arrow(cx, 262, cx, py - 14, { w: 3.5 });
  b += t(450, 660, 'Only benefits, only risks, or pure description cannot reach the top band.', { size: 17, anchor: 'middle', weight: 600, fill: C.rust });
  add('05-criterion-d-two-sided',
    svg(900, 690, 'Criterion D: weigh both sides', b),
    'A balance weighs a genuine benefit of genetically modified crops, increased yield in specific conditions, against a genuine risk, ecological or economic concerns, each with a cited source. Above it, the answer weighs both and reaches a reasoned judgement. A one-sided or purely descriptive answer cannot reach the top band.',
    'A top-band criterion D answer is two-sided, sourced and ends in a judgement.',
    '## Criterion D: Reflecting on the impacts of science');
}

// 06 One investigation, four criteria
{
  let b = '';
  const cx = 450, cy = 430;
  b += `<circle cx="${cx}" cy="${cy}" r="120" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + t(cx, cy - 14, 'One practical', { size: 22, weight: 700, anchor: 'middle' }) + t(cx, cy + 14, 'investigation', { size: 22, weight: 700, anchor: 'middle' });
  const cards = [
    ['A', 'the scientific concept', 'behind it', 40, 120],
    ['B', 'the design of', 'the investigation', 520, 120],
    ['C', 'processing and evaluating', 'the data', 40, 620],
    ['D', 'its wider scientific or', 'real-world significance', 520, 620],
  ];
  cards.forEach(([L, a, c, x, y]) => {
    b += panel(x, y, 340, 120) + badge(x + 50, y + 60, 28, L, L === 'D' ? C.cream : C.mustard) + t(x + 95, y + 54, a, { size: 18, weight: 600 }) + t(x + 95, y + 80, c, { size: 18, weight: 600 });
  });
  b += arrow(cx - 85, cy - 85, 300, 245, { w: 3.5 }) + arrow(cx + 85, cy - 85, 600, 245, { w: 3.5 }) + arrow(cx - 85, cy + 85, 300, 615, { w: 3.5 }) + arrow(cx + 85, cy + 85, 600, 615, { w: 3.5, dash: '9 7' });
  b += t(700, 600, 'where relevant', { size: 15, fill: C.muted, anchor: 'middle', italic: true });
  b += t(450, 790, 'Practise complete investigations, not each criterion in isolation.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('06-one-investigation-four-criteria',
    svg(900, 820, 'One investigation, four criteria', b),
    'A single practical investigation in the centre sends evidence to all four criteria: A, the scientific concept behind it; B, its design; C, processing and evaluating the data; and, where relevant, D, its wider scientific or real-world significance.',
    'One well-designed investigation usually produces evidence for all four criteria.',
    '## Why the four criteria are usually assessed through one connected investigation');
}
