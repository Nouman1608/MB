import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-design-criterion-d-evaluating';
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

// 01 The specification drives the evaluation
{
  let b = box(30, 110, 840, 82, C.cream, C.olive, 2.5, 14) + badge(78, 151, 22, 'B', C.mustard) + t(118, 145, 'Criterion B specification: measurable points', { size: 20, weight: 700 }) +
    t(118, 173, 'drives the development of the solution, and the evaluation too', { size: 16, fill: C.muted });
  const parts = [
    ['1', 'Design tests', 'a test for every specification point'],
    ['2', 'Carry out and judge', 'met, partly met or not met, with evidence'],
    ['3', 'Improvements', 'specific, evidence-based changes'],
    ['4', 'Impact', 'on the client or target audience'],
  ];
  parts.forEach(([n, h, d], i) => {
    const x = 30 + i * 213, w = 200;
    b += arrow(x + w / 2, 196, x + w / 2, 226, { w: 3 });
    b += panel(x, 232, w, 170, i === 1 ? '#eaf3f1' : C.panel, i === 1 ? C.tealDark : C.panelEdge) + badge(x + w / 2, 272, 22, n, i % 2 ? C.cream : C.mustard);
    b += t(x + w / 2, 322, h, { size: 18, weight: 700, anchor: 'middle' }) + tl(x + w / 2, 350, wrap(d, 20), { size: 15, anchor: 'middle', fill: C.muted }, 20);
    if (i < 3) b += arrow(x + w + 1, 317, x + 211, 317, { w: 2.5 });
  });
  b += lowTop(30, 425, 840, 96, 'low', 'Vague specification', ['nothing precise to test against, so a strong evaluation is almost impossible']);
  add('01-specification-drives-evaluation',
    svg(900, 548, 'Criterion D runs on the specification', b),
    'The Criterion B specification feeds all four parts of criterion D: designing tests, carrying them out and judging each point, identifying improvements, and explaining the impact on the client or target audience. A vague specification leaves nothing precise to test against.',
    'Every test, judgement and improvement traces back to a specification point.',
    '## What this unit covers');
}

// 02 Test plan anatomy and test types
{
  let b = t(55, 135, 'For each specification point, decide:', { size: 19, weight: 700 });
  const cols = [['Method', 'repeatable steps'], ['Success measure', 'straight from the spec'], ['Data to record', 'readings, times, counts'], ['Who and where', 'audience, real setting']];
  cols.forEach(([h, d], i) => {
    const x = 30 + i * 213, w = 200;
    b += box(x, 152, w, 84, i === 1 ? C.mustard : C.teal, C.ink, 2.5, 12) + t(x + w / 2, 186, h, { size: 18, weight: 700, anchor: 'middle' }) + t(x + w / 2, 214, d, { size: 15, anchor: 'middle' });
  });
  b += box(30, 248, 840, 60, C.panel, C.panelEdge) + t(50, 284, 'Sag:', { size: 16, weight: 700 }) +
    t(100, 284, '2 kg at centre, rule, ×3  →  mean ≤ 5 mm  →  three readings in mm', { size: 16, fill: C.muted });
  b += panel(30, 330, 840, 330) + t(55, 368, 'Types of test and the data they give', { size: 19, weight: 700 });
  const ax = 420, xL = 90, xR = 810;
  b += `<defs><linearGradient id="qq" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  b += `<rect x="${xL}" y="${ax - 14}" width="${xR - xL}" height="28" rx="14" fill="url(#qq)" stroke="${C.ink}" stroke-width="2"/>`;
  b += t(xL, ax - 26, 'Quantitative: numbers', { size: 16, weight: 700, fill: C.tealDark }) + t(xR, ax - 26, 'Qualitative: descriptions, opinions', { size: 16, weight: 700, anchor: 'end', fill: C.olive });
  const tests = [['Performance test', 'load the desk, measure sag', 120, 0], ['Questionnaire', '1–5 ease-of-carrying rating', 270, 1], ['User trial', 'players fold it, timed', 420, 0], ['Comparison test', 'vs the old metal stand', 560, 1], ['Interview', 'client’s view of appearance', 680, 0], ['Expert appraisal', 'technician checks joints', 790, 1]];
  tests.forEach(([h, d, x, row]) => {
    const y = row ? 560 : 470;
    b += `<line x1="${x}" y1="${ax + 14}" x2="${x}" y2="${y - 4}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x}" cy="${ax}" r="7" fill="${C.ink}"/>`;
    const tx = Math.min(Math.max(x, 140), 760);
    b += t(tx, y + 16, h, { size: 17, weight: 700, anchor: 'middle' }) + t(tx, y + 38, d, { size: 15, anchor: 'middle', fill: C.muted });
  });
  b += t(450, 646, 'Use both: numbers show whether a target was met; comments explain why.', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  add('02-test-plan-and-test-types',
    svg(900, 685, 'Designing tests', b),
    'Each specification point gets a method, a success measure taken from the specification, data to record, and who tests it where; for example, the sag test loads 2 kg three times against a 5 mm target. Below, test types run from quantitative (performance tests, questionnaires) through both (user trials, comparison tests) to qualitative (interviews, expert appraisal).',
    'Plan the test, the pass mark and the data before you test; use numbers and comments together.',
    '## Part 1: Designing tests');
}

// 03 Results scoreboard
{
  const rows = [
    ['1 Sag', '≤ 5 mm', 'mean 4.0 mm', 'met', '3.8, 4.2, 4.0 mm'],
    ['2 Mass', '≤ 1.20 kg', '1.35 kg', 'not', '12.5% over'],
    ['3 Folding', '≥ 80% under 20 s', '70% (7 of 10)', 'not', 'close; mean misleads'],
    ['4 Cost', '≤ £12', '£9.40', 'met', '£2.60 to spare'],
    ['5 Carrying', 'most rate 4 or 5', '75% (9 of 12)', 'met', 'corners dug into hands'],
  ];
  const hx = [50, 210, 390, 580, 700];
  let b = '';
  ['Spec point', 'Target', 'Result', 'Judgement'].forEach((h, i) => { b += t(hx[i], 140, h, { size: 16, weight: 700, fill: C.muted }); });
  rows.forEach(([p, tg, r, j, note], i) => {
    const y = 156 + i * 92;
    const met = j === 'met';
    b += panel(30, y, 840, 80, met ? '#eaf3f1' : '#fbeee6', met ? C.tealDark : C.rust);
    b += t(hx[0], y + 46, p, { size: 18, weight: 700 }) + t(hx[1], y + 46, tg, { size: 16 }) + t(hx[2], y + 38, r, { size: 18, weight: 700 }) + t(hx[2], y + 62, note, { size: 15, fill: C.muted });
    b += chip(hx[3], y + 20, 120, 40, met ? '✓ Met' : '✗ Not met', met ? C.teal : '#f4d9c8', { size: 16, edge: met ? C.tealDark : C.rust });
  });
  b += panel(30, 625, 840, 120, C.cream, C.olive) + t(55, 661, 'Overall judgement', { size: 19, weight: 700 }) +
    tl(55, 690, ['Strong enough, affordable and liked for carrying, but too heavy and slightly too', 'hard to fold. Link the failures: the heavy hinge is also where players struggled.'], { size: 16 }, 23);
  add('03-results-and-judgements',
    svg(900, 770, 'Music stand: results against the specification', b),
    'Five specification points with target, result and judgement. Sag: mean 4.0 mm against 5 mm, met. Mass: 1.35 kg against 1.20 kg, 12.5% over, not met. Folding: 70% under 20 seconds against 80%, not met. Cost: £9.40 against £12, met. Carrying: 75% rated 4 or 5, met. The overall judgement links the two failures to the heavy hinge.',
    'Judge each point from the data, and report the failures honestly.',
    '## Part 2: Carrying out tests and evaluating success');
}

// 04 Mean versus proportion: the folding trap
{
  const times = [14, 18, 22, 16, 15, 25, 17, 19, 13, 21];
  const x0 = 90, x1 = 830, lo = 10, hi = 28;
  const X = (v) => x0 + ((v - lo) * (x1 - x0)) / (hi - lo);
  let b = panel(30, 110, 840, 330) + t(55, 146, 'Folding times for 10 Year 7 players (seconds)', { size: 19, weight: 700 });
  b += `<rect x="${X(20)}" y="170" width="${X(28) - X(20)}" height="200" fill="#fbeee6"/>`;
  b += t((X(20) + X(28)) / 2, 196, 'too slow', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  const ax = 330;
  b += `<line x1="${x0}" y1="${ax}" x2="${x1}" y2="${ax}" stroke="${C.ink}" stroke-width="2.5"/>`;
  for (let v = 10; v <= 28; v += 2) b += `<line x1="${X(v)}" y1="${ax}" x2="${X(v)}" y2="${ax + 7}" stroke="${C.ink}" stroke-width="2"/>` + t(X(v), ax + 28, String(v), { size: 15, anchor: 'middle', fill: C.muted });
  times.forEach((v) => { b += `<circle cx="${X(v)}" cy="${ax - 22}" r="13" fill="${v < 20 ? C.teal : C.rust}" stroke="${C.ink}" stroke-width="2"/>`; });
  b += `<line x1="${X(20)}" y1="170" x2="${X(20)}" y2="${ax}" stroke="${C.rust}" stroke-width="3"/>` + t(X(20) - 8, 196, '20 s limit', { size: 16, weight: 700, anchor: 'end', fill: C.rust });
  b += `<line x1="${X(18)}" y1="230" x2="${X(18)}" y2="${ax - 40}" stroke="${C.olive}" stroke-width="3" stroke-dasharray="8 6"/>` + t(X(18) - 8, 252, 'mean 18.0 s', { size: 16, weight: 700, anchor: 'end', fill: C.olive });
  b += t(450, 420, 'times: 14, 18, 22, 16, 15, 25, 17, 19, 13, 21  (total 180)', { size: 15, anchor: 'middle', fill: C.muted });
  b += lowTop(30, 460, 410, 130, 'low', 'Mean: 18.0 s', ['under 20 s, but the specification', 'did not ask about the mean']);
  b += panel(460, 460, 410, 130, '#eaf3f1', C.tealDark) + t(482, 496, '✓ Proportion: 7 of 10 = 70%', { size: 19, weight: 700, fill: C.tealDark }) +
    tl(482, 526, ['target was at least 80% under 20 s,', 'so the point is NOT MET (but close)'], { size: 16 }, 22);
  add('04-mean-versus-proportion',
    svg(900, 615, 'The folding trap: mean or proportion?', b),
    'Dot plot of ten folding times from 13 to 25 seconds against a 20-second limit. The mean is 18.0 seconds, under the limit, but only 7 of the 10 players (70%) folded the stand in under 20 seconds, so the target of at least 80% is not met.',
    'Test what the specification actually asked for: here a proportion, not a mean.',
    '## Part 2: Carrying out tests and evaluating success');
}

// 05 Weak vs strong improvement
{
  let b = lowTop(30, 110, 840, 92, 'low', 'Weak', ['“I would make it lighter and easier to fold.”']);
  b += panel(30, 222, 840, 470, '#eaf3f1', C.tealDark) + t(52, 258, '✓ Strong: five things the paragraph does', { size: 19, weight: 700, fill: C.tealDark });
  const steps = [
    ['Names the evidence', '0.15 kg over the mass target; slowest players paused at the hinge catch'],
    ['Gives a specific change', 'lighter hinge of the same length, or lightening holes; larger thumb catch'],
    ['Explains why it works', 'the steel hinge (0.22 kg) is the main source of extra mass'],
    ['Protects what passed', 'the desk, which passed its sag test, stays unchanged'],
    ['Plans a re-test', 're-test mass and folding with the same method'],
  ];
  steps.forEach(([h, d], i) => {
    const y = 280 + i * 80;
    b += box(55, y, 790, 68, C.panel, C.panelEdge, 2, 10) + badge(92, y + 34, 20, String(i + 1), i % 2 ? C.cream : C.mustard);
    b += t(128, y + 30, h, { size: 18, weight: 700 }) + t(128, y + 54, d, { size: 16, fill: C.muted });
  });
  b += t(450, 722, 'Improvements can target the testing too: more players, or the real band room.', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  add('05-strong-improvement',
    svg(900, 745, 'From a wish to an improvement', b),
    'A weak improvement just says “make it lighter and easier to fold”. A strong one names the evidence, gives a specific change such as a lighter hinge or a larger thumb catch, explains why it would work, checks it does not undo the passed sag test, and plans a re-test.',
    'An improvement comes from a test result and ends with a plan to re-test.',
    '## Part 3: Explaining improvements');
}

// 06 Impact categories
{
  const cats = [
    ['Use', 'quicker, safer, easier?', 'players set up faster; fewer trips', '+'],
    ['Wellbeing and ergonomics', 'comfort, strain, access', 'lighter to carry, but corners need rounding', '±'],
    ['Cost and resources', 'for the client, over its life', 'material cost £9.40', '+'],
    ['Environment', 'materials, repair, end of life', 'plywood recyclable; steel hinge reusable', '+'],
    ['Wider community', 'who else is affected?', 'other staff, families, other schools', '?'],
  ];
  let b = box(330, 110, 240, 70, C.mustard, C.ink, 2.5, 35) + t(450, 140, 'Impact on the', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 164, 'client or audience', { size: 17, weight: 700, anchor: 'middle' });
  cats.forEach(([h, q, ex, s], i) => {
    const y = 200 + i * 90;
    const f = s === '+' ? '#eaf3f1' : s === '±' ? C.cream : C.panel;
    b += panel(30, y, 840, 78, f, s === '+' ? C.tealDark : s === '±' ? C.olive : C.panelEdge);
    b += t(55, y + 34, h, { size: 18, weight: 700 }) + t(55, y + 59, q, { size: 15, fill: C.muted });
    b += t(330, y + 46, ex, { size: 16 });
    b += t(840, y + 48, s, { size: 26, weight: 700, anchor: 'end', fill: s === '+' ? C.tealDark : s === '±' ? C.olive : C.muted });
  });
  b += panel(30, 660, 840, 92, '#fbeee6', C.rust) + t(55, 694, 'Include negative or uncertain impacts', { size: 18, weight: 700, fill: C.rust }) +
    t(55, 724, 'too heavy for the youngest players, so some may still need help', { size: 16 });
  b += t(450, 785, 'Say where an impact is a prediction; link it to the unit’s global context.', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  add('06-impact-categories',
    svg(900, 810, 'Thinking about impact in categories', b),
    'Five categories of impact for the music stand: use (faster set-up, fewer trips), wellbeing and ergonomics (lighter, but corners need rounding), cost and resources, environment (recyclable plywood, reusable hinge) and the wider community. A negative impact is included: the stand is too heavy for the youngest players.',
    'Impact is the difference the solution makes to people, good and bad, not a list of features.',
    '## Part 4: Explaining the impact on the client or target audience');
}
