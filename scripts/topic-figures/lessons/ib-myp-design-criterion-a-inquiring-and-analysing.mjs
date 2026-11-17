import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-design-criterion-a-inquiring-and-analysing';
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

// 01 Criterion A workflow
{
  const steps = [
    ['Design situation', 'the starting scenario you are given'],
    ['Problem, client, target audience', 'narrow to one problem for named people'],
    ['Explain and justify the need', 'with evidence from their situation'],
    ['Plan research', 'questions first, primary and secondary, in priority order'],
    ['Analyse existing products', 'what to adapt, what to avoid'],
    ['Design brief', 'what is needed and why'],
  ];
  let b = '';
  steps.forEach(([h, d], i) => {
    const y = 110 + i * 92, last = i === steps.length - 1;
    b += panel(110, y, 640, 76, last ? C.cream : C.panel, last ? C.olive : C.panelEdge) + badge(160, y + 38, 22, String(i + 1), i % 2 ? C.cream : C.mustard);
    b += t(200, y + 33, h, { size: 20, weight: 700 }) + t(200, y + 59, d, { size: 16, fill: C.muted });
    if (!last) b += arrow(430, y + 78, 430, y + 90, { w: 3 });
  });
  b += arrow(752, 110 + 5 * 92 + 38, 800, 110 + 5 * 92 + 38, { w: 3.5, dash: '8 6' });
  b += tl(808, 110 + 5 * 92 + 30, ['to', 'Crit. B'], { size: 15, weight: 600, fill: C.muted }, 19);
  b += `<line x1="70" y1="120" x2="70" y2="${110 + 5 * 92 + 66}" stroke="${C.teal}" stroke-width="10" stroke-linecap="round"/>`;
  b += `<text transform="translate(52 ${(110 + 110 + 5 * 92 + 76) / 2}) rotate(-90)" font-size="17" font-weight="700" fill="${C.tealDark}" text-anchor="middle">inquiry: no product idea yet</text>`;
  add('01-criterion-a-workflow',
    svg(900, 680, 'Criterion A from situation to brief', b),
    'Six steps run downwards: design situation, narrowing to a problem with a client and target audience, explaining and justifying the need, planning research, analysing existing products, and writing the design brief, which leads on to Criterion B.',
    'Criterion A ends with a design brief, not a product idea.',
    '## What this unit covers');
}

// 02 From situation to problem, client and audience
{
  let b = box(60, 110, 780, 80, C.cream, C.olive, 2.5, 14) + t(80, 143, 'Design situation', { size: 19, weight: 700, fill: C.olive }) +
    t(80, 172, '“Volunteers at a community event struggle to organise equipment.”', { size: 17, italic: true });
  b += path('M60,200 L840,200 L560,300 L340,300 Z', { fill: C.tealLight, stroke: C.tealDark, w: 2.5 });
  b += t(450, 238, 'narrow it down', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(450, 266, 'not yet a problem you can solve', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += box(300, 310, 300, 60, C.mustard, C.ink, 2.5, 12) + t(450, 347, 'ONE problem', { size: 20, weight: 700, anchor: 'middle' });
  b += arrow(390, 372, 250, 410, { w: 3 }) + arrow(510, 372, 650, 410, { w: 3 });
  b += panel(30, 415, 410, 200) + t(55, 452, 'Client', { size: 21, weight: 700 }) +
    tl(55, 482, ['a specific person or organisation', 'you design for and can talk to'], { size: 16, fill: C.muted }, 22) +
    t(55, 545, 'e.g. a named coach,', { size: 16, italic: true }) + t(55, 568, 'a club organiser', { size: 16, italic: true });
  b += panel(460, 415, 410, 200) + t(485, 452, 'Target audience', { size: 21, weight: 700 }) +
    tl(485, 482, ['the wider group who will use', 'the solution'], { size: 16, fill: C.muted }, 22) +
    t(485, 545, 'e.g. all volunteer coaches in a', { size: 16, italic: true }) + t(485, 568, 'league, all visitors to an event', { size: 16, italic: true });
  b += t(450, 650, 'You can have both. Name them precisely: “everyone” gives you nobody to research.', { size: 17, weight: 600, anchor: 'middle', fill: C.tealDark });
  add('02-situation-to-problem',
    svg(900, 680, 'From design situation to one problem', b),
    'A broad design situation about volunteers organising equipment is narrowed down to one problem. That problem belongs to a client, a specific person or organisation you can talk to, and a target audience, the wider group who will use the solution.',
    'Narrow a situation to one problem for precisely named people.',
    '## 1. From design situation to problem');
}

// 03 Justifying the need
{
  const parts = [
    ['Who', 'has the problem, described precisely'],
    ['What, when, where', 'the problem and when and where it happens'],
    ['Evidence', 'observation, measurements, survey results, interviews'],
    ['Consequences', 'time lost, injury risk, people excluded, money wasted'],
    ['Gap', 'why existing solutions do not already solve it'],
  ];
  let b = t(60, 130, 'A strong justification covers:', { size: 19, weight: 700 });
  parts.forEach(([h, d], i) => {
    const y = 150 + i * 74;
    b += box(60, y, 780, 62, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge, 2.2, 12) + badge(98, y + 31, 19, String(i + 1), i === 2 ? C.mustard : C.tealLight);
    b += t(135, y + 38, h, { size: 19, weight: 700 }) + t(340, y + 38, d, { size: 16, fill: C.muted });
  });
  b += t(60, 560, 'Evidence turns an opinion into a justification. Give the sample size:', { size: 18, weight: 600 });
  b += lowTop(30, 580, 410, 110, 'low', 'Bare percentage', ['“75% of coaches”']);
  b += lowTop(460, 580, 410, 110, 'top', 'With sample size', ['“9 of the 12 coaches surveyed (75%)”']);
  add('03-justifying-the-need',
    svg(900, 720, 'Explaining and justifying the need', b),
    'Five parts of a strong justification: who has the problem, what it is and when and where it happens, evidence that it is real, consequences if nothing changes, and the gap left by existing solutions. Below, “75% of coaches” is contrasted with “9 of the 12 coaches surveyed (75%)”.',
    'Evidence, with sample sizes, is what turns a claim into a justification.',
    '## 2. Explaining and justifying the need');
}

// 04 Planning research
{
  let b = panel(30, 110, 410, 250, '#eaf3f1', C.tealDark) + t(55, 146, 'Primary: first-hand', { size: 20, weight: 700, fill: C.tealDark }) +
    tl(55, 178, ['• interview the client', '• survey the target audience', '• observe the problem happen', '• measure or weigh things', '• test an existing product'], { size: 17 }, 31);
  b += panel(460, 110, 410, 250, C.cream, C.olive) + t(485, 146, 'Secondary: already published', { size: 20, weight: 700, fill: C.olive }) +
    tl(485, 178, ['• books and articles', '• product reviews', '• published data and measurements', '• safety or accessibility guidance', '• public pages of websites and apps'], { size: 17 }, 31);
  b += t(450, 400, 'A research plan is a table, in priority order', { size: 21, weight: 700, anchor: 'middle' });
  const heads = ['Research question', 'Primary or secondary', 'Method or source', 'What it will decide'];
  const xs = [30, 245, 460, 675], w = 195;
  heads.forEach((h, i) => {
    b += chip(xs[i], 420, w, 52, h, i === 0 ? C.mustard : C.teal, { size: 16 });
    if (i < 3) b += arrow(xs[i] + w + 1, 446, xs[i + 1] - 3, 446, { w: 2.5 });
  });
  const rows = [
    ['What must the client carry?', 'decides size and structure', 'first'],
    ['What colours does the client like?', 'matters less', 'later'],
  ];
  rows.forEach(([q, d, p], j) => {
    const y = 488 + j * 70;
    b += box(30, y, 840, 58, j ? C.panel : '#eaf3f1', j ? C.panelEdge : C.tealDark) + t(50, y + 36, q, { size: 17, weight: 600 }) +
      t(540, y + 36, d, { size: 16, fill: C.muted }) + chip(795, y + 13, 62, 32, p, j ? '#e6e8ea' : C.mustard, { size: 15 });
  });
  b += t(450, 650, 'Write the questions first, then choose a method for each.', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += t(450, 678, 'Judge secondary sources: who wrote it, when, are they selling something?', { size: 16, anchor: 'middle', fill: C.muted });
  add('04-planning-research',
    svg(900, 710, 'Planning primary and secondary research', b),
    'Primary research is collected first-hand, by interview, survey, observation, measuring or testing; secondary research has already been published, such as articles, reviews, data and guidance. A research plan table lists each research question, whether it is primary or secondary, the method or source, and what it will decide, with the questions that most change the design first.',
    'Questions first, methods second, and the questions that change the design most go first.',
    '## 3. Planning primary and secondary research');
}

// 05 Analysing existing products (worked example 1)
{
  const cols = ['Does well', 'Does badly for this client', 'Idea to adapt'];
  const xs = [230, 440, 660], ws = [195, 205, 195];
  let b = '';
  cols.forEach((c, i) => { b += chip(xs[i], 110, ws[i], 50, c, i === 0 ? C.teal : i === 1 ? '#f4d9c8' : C.cream, { size: 16 }); });
  const rows = [
    ['Mesh ball bag', ['light and cheap'], ['holds nothing else'], ['ventilation for', 'wet balls']],
    ['Folding cart', ['carries the', 'whole load'], ['small wheels stick', 'on grass'], ['single-trip', 'capacity']],
    ['Large holdall', ['keeps bibs dry'], ['awkward at 9.6 kg'], ['dry pocket for bibs']],
  ];
  rows.forEach(([name, a, c, d], j) => {
    const y = 175 + j * 112;
    b += panel(30, y, 840, 100) + t(50, y + 57, name, { size: 19, weight: 700 });
    [a, c, d].forEach((lines, i) => {
      b += tl(xs[i] + ws[i] / 2, y + 58 - (lines.length - 1) * 11, lines, { size: 16, anchor: 'middle', fill: i === 1 ? C.rust : i === 2 ? C.olive : C.tealDark, weight: 600 }, 22);
    });
  });
  b += arrow(450, 515, 450, 540, { w: 3.5 });
  b += panel(30, 545, 840, 120, C.cream, C.olive) + t(55, 582, 'Conclusion', { size: 20, weight: 700 }) +
    tl(55, 612, ['Adapt the cart’s single-trip capacity, the mesh bag’s ventilation and the', 'holdall’s dry pocket for bibs; avoid small wheels on grass.'], { size: 17 }, 24);
  b += t(450, 700, 'Three products analysed in depth beat ten listed with a photo each.', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  add('05-existing-products-analysed',
    svg(900, 725, 'Analysing existing products', b),
    'Three existing products from the kit-carrier example are judged on what each does well, what it does badly for the client and what idea could be adapted: a mesh ball bag, a folding cart and a large holdall. The conclusion is to adapt the cart’s single-trip capacity, the mesh bag’s ventilation and the holdall’s dry pocket for bibs, and to avoid small wheels on grass.',
    'Analysis says what each product means for your design, then draws a conclusion.',
    '## 4. Analysing existing products');
}

// 06 Design brief vs specification
{
  let b = panel(30, 110, 500, 420, '#eaf3f1', C.tealDark) + t(55, 150, 'Design brief (Criterion A)', { size: 21, weight: 700, fill: C.tealDark }) +
    t(55, 178, 'short: one paragraph or a few headings', { size: 16, fill: C.muted });
  const items = ['the client or target audience', 'the problem and the evidence for the need', 'key findings from research and analysis', 'the design goal: a product, a digital', 'solution or both', 'known limits, e.g. budget, where it is used'];
  let y = 220;
  items.forEach((s, i) => {
    const cont = i === 4;
    if (!cont) b += `<circle cx="66" cy="${y - 6}" r="6" fill="${C.tealDark}"/>`;
    b += t(84, y, s, { size: 17 });
    y += cont ? 40 : (i === 3 ? 24 : 40);
  });
  b += box(55, 432, 450, 76, C.panel, C.tealDark) + t(280, 463, 'States WHAT is needed', { size: 20, weight: 700, anchor: 'middle' }) + t(280, 491, 'and WHY', { size: 20, weight: 700, anchor: 'middle' });
  b += arrow(535, 310, 585, 310, { w: 4 });
  b += panel(590, 110, 280, 420, C.cream, C.olive) + t(612, 150, 'Specification', { size: 21, weight: 700, fill: C.olive }) + t(612, 178, '(Criterion B)', { size: 16, fill: C.muted });
  b += tl(612, 230, ['measurable', 'requirements', 'and tests'], { size: 19, weight: 600 }, 28);
  b += box(612, 432, 236, 76, '#fbeee6', C.rust) + tl(730, 463, ['keep these out', 'of the brief'], { size: 17, weight: 700, anchor: 'middle', fill: C.rust }, 24);
  add('06-brief-vs-specification',
    svg(900, 560, 'The design brief sets direction', b),
    'The design brief is short and states the client or audience, the problem and its evidence, key research findings, the design goal and known limits: what is needed and why. Measurable requirements and tests belong in the specification in Criterion B, not in the brief.',
    'The brief says what and why; measurements and tests wait for the specification.',
    '## 5. Writing the design brief');
}

// 07 Worked example 1: evidence
{
  let b = panel(30, 110, 480, 420) + t(55, 146, 'Set-up time, three sessions', { size: 19, weight: 700 });
  const base = 470, sc = 20, vals = [[12, 3], [10, 3], [14, 4]];
  b += `<line x1="90" y1="${base}" x2="480" y2="${base}" stroke="${C.ink}" stroke-width="2.5"/><line x1="90" y1="${base}" x2="90" y2="${base - 15 * sc}" stroke="${C.ink}" stroke-width="2.5"/>`;
  [0, 5, 10, 15].forEach((v) => { b += t(80, base - v * sc + 6, String(v), { size: 15, anchor: 'end', fill: C.muted }) + `<line x1="86" y1="${base - v * sc}" x2="90" y2="${base - v * sc}" stroke="${C.ink}" stroke-width="2"/>`; });
  b += `<text transform="translate(52 ${base - 7 * sc}) rotate(-90)" font-size="15" fill="${C.muted}" text-anchor="middle">minutes</text>`;
  vals.forEach(([m, tr], i) => {
    const x = 130 + i * 115;
    b += `<rect x="${x}" y="${base - m * sc}" width="80" height="${m * sc}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
    b += t(x + 40, base - m * sc - 10, `${m} min`, { size: 16, weight: 700, anchor: 'middle' });
    b += t(x + 40, base + 24, `session ${i + 1}`, { size: 15, anchor: 'middle', fill: C.muted }) + t(x + 40, base - 16, `${tr} trips`, { size: 15, anchor: 'middle', weight: 600 });
  });
  b += `<line x1="100" y1="${base - 12 * sc}" x2="480" y2="${base - 12 * sc}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="9 6"/>` + `<line x1="340" y1="141" x2="380" y2="141" stroke="${C.rust}" stroke-width="3" stroke-dasharray="9 6"/>` + t(388, 147, 'mean 12 min', { size: 16, fill: C.rust, weight: 700 });
  const facts = [['150 m', 'walk to the pitch', 'measured with a trundle wheel'], ['9.6 kg', 'full kit', 'weighed on bathroom scales'], ['9 of 12', 'coaches (75%)', 'make more than one trip'], ['8 of 12', 'coaches (67%)', 'would use a single carrier']];
  facts.forEach(([n, a, c], i) => {
    const y = 110 + i * 105;
    b += panel(530, y, 340, 93, i < 2 ? C.panel : '#eaf3f1', i < 2 ? C.panelEdge : C.tealDark) + t(550, y + 42, n, { size: 26, weight: 700, fill: i < 2 ? C.ink : C.tealDark }) +
      t(675, y + 38, a, { size: 16, weight: 600 }) + t(550, y + 74, c, { size: 15, fill: C.muted });
  });
  b += panel(30, 550, 840, 110, C.cream, C.olive) + t(55, 586, 'Justification', { size: 19, weight: 700 }) +
    tl(55, 614, ['Coach Daniel loses a mean of 12 minutes of each session because he cannot carry', '9.6 kg of mixed kit 150 m in one trip, and 75% of coaches surveyed share the problem.'], { size: 16 }, 22);
  add('07-worked-example-kit-carrier',
    svg(900, 690, 'Worked example: evidence for the kit carrier', b),
    'Bar chart of set-up times over three observed sessions: 12, 10 and 14 minutes with 3, 3 and 4 trips, mean 12 minutes. Fact cards: a 150 m walk, 9.6 kg of kit, 9 of 12 coaches make more than one trip and 8 of 12 would use a single carrier.',
    'Observation, measurement and a survey with sample sizes together justify the need.',
    '## Worked example 1: product design');
}

// 08 Worked example 2: repair café evidence
{
  const waits = [35, 50, 20, 65, 40, 55, 30, 70, 45, 40];
  let b = panel(30, 110, 840, 360) + t(55, 146, 'Waiting times of 10 visitors at one session', { size: 19, weight: 700 });
  const x0 = 90, x1 = 830, lo = 10, hi = 80, ax = 370;
  const X = (v) => x0 + ((v - lo) * (x1 - x0)) / (hi - lo);
  b += `<line x1="${x0}" y1="${ax}" x2="${x1}" y2="${ax}" stroke="${C.ink}" stroke-width="2.5"/>`;
  for (let v = 10; v <= 80; v += 10) b += `<line x1="${X(v)}" y1="${ax}" x2="${X(v)}" y2="${ax + 8}" stroke="${C.ink}" stroke-width="2"/>` + t(X(v), ax + 30, String(v), { size: 15, anchor: 'middle', fill: C.muted });
  b += t(460, ax + 56, 'minutes', { size: 15, anchor: 'middle', fill: C.muted });
  const cnt = {};
  waits.forEach((v) => { cnt[v] = (cnt[v] || 0) + 1; const k = cnt[v]; b += `<circle cx="${X(v)}" cy="${ax - 18 - (k - 1) * 30}" r="12" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`; });
  b += `<line x1="${X(45)}" y1="${ax - 110}" x2="${X(45)}" y2="${ax}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="8 6"/>` + t(X(45), ax - 118, 'mean 45 min', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += path(`M${X(20)},${ax - 175} L${X(20)},${ax - 165} L${X(70)},${ax - 165} L${X(70)},${ax - 175}`, { w: 2.5, stroke: C.olive });
  b += t((X(20) + X(70)) / 2, ax - 180, 'range 50 min (20 to 70)', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  const facts = [['7 of 28', ['items (25%) went home', 'unrepaired: no volunteer', 'with the right skill']], ['30 of 40', ['visitors (75%) would', 'book a slot online']], ['12 of 40', ['visitors (30%) were over 65;', '9 of those 12 used a', 'smartphone']]];
  facts.forEach(([n, lines], i) => {
    const x = 30 + i * 285;
    b += panel(x, 490, 270, 160, i === 0 ? '#fbeee6' : '#eaf3f1', i === 0 ? C.rust : C.tealDark) + t(x + 20, 535, n, { size: 28, weight: 700, fill: i === 0 ? C.rust : C.tealDark }) +
      tl(x + 20, 568, lines, { size: 16 }, 22);
  });
  b += t(450, 685, 'Design goal: book a slot and name the item, so the right volunteers can be invited.', { size: 17, anchor: 'middle', weight: 600, fill: C.ink });
  add('08-worked-example-repair-cafe',
    svg(900, 710, 'Worked example: evidence for a booking system', b),
    'Dot plot of ten visitor waiting times from 20 to 70 minutes, with a mean of 45 minutes and a range of 50 minutes. Fact cards: 7 of 28 items (25%) went home unrepaired, 30 of 40 visitors (75%) would book online, and 12 of 40 (30%) were over 65, of whom 9 used a smartphone.',
    'Waiting times, unrepaired items and survey demand together justify a booking solution.',
    '## Worked example 2: digital design');
}
