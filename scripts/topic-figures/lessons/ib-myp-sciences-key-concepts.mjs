import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-sciences-key-concepts';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { if ((out[out.length - 1] + ' ' + w).trim().length > n) out.push(w); else out[out.length - 1] = (out[out.length - 1] + ' ' + w).trim(); } return out; };
const chip = (x, y, w, h, s, fill, { size = 17, weight = 700, edge = C.ink, dash = '' } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${edge}" stroke-width="2.4"${dash ? ` stroke-dasharray="${dash}"` : ''}/>` + t(x + w / 2, y + h / 2 + size * 0.35, s, { size, weight, anchor: 'middle' });
const axes = (ox, oy, w, h, xl, yl, size = 16) => `<line x1="${ox}" y1="${oy}" x2="${ox + w}" y2="${oy}" stroke="${C.ink}" stroke-width="3"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h}" stroke="${C.ink}" stroke-width="3"/>` +
  t(ox + w / 2, oy + 44, xl, { size, weight: 600, anchor: 'middle' }) +
  `<text x="${ox - 58}" y="${oy - h / 2}" font-size="${size}" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${ox - 58} ${oy - h / 2})">${yl}</text>`;

// 01 The sixteen key concepts
{
  const all = ['Aesthetics', 'Change', 'Communication', 'Communities', 'Connections', 'Creativity', 'Culture', 'Development', 'Form', 'Global interactions', 'Identity', 'Logic', 'Perspective', 'Relationships', 'Systems', 'Time, place and space'];
  const sci = ['Change', 'Relationships', 'Systems'], also = ['Creativity', 'Development', 'Time, place and space'];
  let b = panel(30, 110, 840, 400);
  all.forEach((s, i) => {
    const x = 50 + (i % 4) * 205, y = 135 + Math.floor(i / 4) * 92;
    const isS = sci.includes(s), isA = also.includes(s);
    b += chip(x, y, 190, 70, s, isS ? C.mustard : isA ? C.cream : '#fff', { size: s.length > 15 ? 16 : 18, weight: isS || isA ? 700 : 500, edge: isS ? C.ink : isA ? C.olive : C.panelEdge, dash: isA ? '7 5' : '' });
  });
  b += chip(50, 530, 60, 36, '', C.mustard) + t(124, 554, 'the three sciences key concepts', { size: 17, weight: 600 });
  b += chip(470, 530, 60, 36, '', C.cream, { edge: C.olive, dash: '7 5' }) + t(544, 554, 'also matter in science', { size: 17, weight: 600 });
  b += t(450, 605, 'Key concepts are prescribed and work across every MYP subject.', { size: 16, anchor: 'middle', fill: C.muted });
  add('01-sixteen-key-concepts',
    svg(900, 630, 'The sixteen MYP key concepts', b),
    'All sixteen MYP key concepts in a grid. Change, relationships and systems are highlighted as the three that sciences contributes; creativity, development, and time, place and space are marked as also mattering in science.',
    'Sciences contributes change, relationships and systems out of sixteen key concepts.',
    '## What a key concept is');
}

// 02 Kinds of change
{
  let b = '';
  const cols = ['Biology', 'Chemistry', 'Physics'];
  const rows = [
    ['Reversible', C.tealLight, ['Blood glucose rises after a meal, then falls back', 'Blue hydrated copper(II) sulfate turns white when heated; water turns it blue', 'Ice melts and can be refrozen']],
    ['Irreversible', C.cream, ['A tadpole becomes a frog', 'Methane burns to carbon dioxide and water', 'A spring stretched past its elastic limit stays longer']],
    ['Self-perpetuating', '#f6d9c6', ['Bacteria: each new cell can divide again', 'A fire: heat released ignites more fuel', 'Fission chain reaction: neutrons split more nuclei']],
  ];
  const x0 = 210, cw = 220, rh = 150;
  cols.forEach((c, i) => { b += t(x0 + i * cw + cw / 2, 140, c, { size: 19, weight: 700, anchor: 'middle' }); });
  rows.forEach(([n, f, cells], r) => {
    const y = 160 + r * (rh + 10);
    b += `<rect x="30" y="${y}" width="170" height="${rh}" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.2"/>` + tl(115, y + rh / 2 + 6 - (n.length > 14 ? 11 : 0), wrap(n, 12), { size: 18, weight: 700, anchor: 'middle' }, 22);
    cells.forEach((s, i) => {
      const x = x0 + i * cw;
      b += `<rect x="${x}" y="${y}" width="${cw - 10}" height="${rh}" rx="12" fill="#fff" stroke="${C.panelEdge}" stroke-width="2"/>`;
      const L = wrap(s, 22); b += tl(x + 14, y + rh / 2 - (L.length - 1) * 11 + 6, L, { size: 16 }, 22);
    });
  });
  const y2 = 160 + 3 * (rh + 10) + 10;
  b += panel(30, y2, 410, 110, '#fff') + t(50, y2 + 36, 'Qualitative: a difference in kind', { size: 17, weight: 700 }) + tl(50, y2 + 64, ['tadpole grows legs, loses its tail'], { size: 16, fill: C.muted }, 20);
  b += panel(460, y2, 410, 110, '#fff') + t(480, y2 + 36, 'Quantitative: a number or rate', { size: 17, weight: 700 }) + tl(480, y2 + 64, ['a falling ball’s speed rising'], { size: 16, fill: C.muted }, 20);
  b += t(450, y2 + 140, 'Change in science: the difference in a system’s state observed at two times.', { size: 16, anchor: 'middle', fill: C.muted });
  add('02-kinds-of-change',
    svg(900, y2 + 165, 'Kinds of change in science', b),
    'A grid of reversible, irreversible and self-perpetuating changes in biology, chemistry and physics, such as ice melting and refreezing, methane burning, and a fission chain reaction. Below, qualitative change is a difference in kind, like a tadpole growing legs, and quantitative change is a number or rate, like a falling ball’s speed.',
    'Sort any change by type: reversible, irreversible or self-perpetuating, and qualitative or quantitative.',
    '## Change');
}

// 03 Tea cooling
{
  let b = panel(30, 110, 840, 450);
  const ox = 140, oy = 480, W = 420, H = 300;
  b += axes(ox, oy, W, H, 'time (minutes)', 'temperature (°C)');
  const Tmin = 20, Tamb = 20; // axis from 20 to 90
  const Y = (T) => oy - ((T - Tmin) / 70) * H, X = (m) => ox + (m / 10) * W;
  const k = Math.log((80 - Tamb) / (52 - Tamb)) / 10; // shape only, through both given points
  let d = `M${X(0)},${Y(80)}`; for (let m = 0.1; m <= 10.001; m += 0.1) d += ` L${X(m).toFixed(1)},${Y(Tamb + 60 * Math.exp(-k * m)).toFixed(1)}`;
  b += path(d, { stroke: C.rust, w: 4 });
  [[0, 80], [10, 52]].forEach(([m, T]) => { b += `<circle cx="${X(m)}" cy="${Y(T)}" r="7" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`; });
  [20, 40, 60, 80].forEach((T) => { b += t(ox - 10, Y(T) + 5, String(T), { size: 15, anchor: 'end' }) + `<line x1="${ox - 5}" y1="${Y(T)}" x2="${ox}" y2="${Y(T)}" stroke="${C.ink}" stroke-width="2"/>`; });
  [0, 5, 10].forEach((m) => { b += t(X(m), oy + 22, String(m), { size: 15, anchor: 'middle' }); });
  b += t(X(0) + 14, Y(80) - 8, '80 °C', { size: 16, weight: 700 }) + t(X(10), Y(52) - 16, '52 °C', { size: 16, weight: 700, anchor: 'middle' });
  b += t(X(5), Y(84), 'curve flattens:', { size: 15, fill: C.muted, anchor: 'middle' }) + t(X(5), Y(84) + 18, 'cooling slows', { size: 15, fill: C.muted, anchor: 'middle' });
  const parts = [['System', 'tea and its surroundings'], ['Type', 'quantitative; reversible'], ['Cause', 'energy transfer to cooler air'], ['Consequence', 'rate slows as the gap shrinks']];
  parts.forEach(([h, d2], i) => { const y = 150 + i * 96; b += `<rect x="600" y="${y}" width="250" height="82" rx="12" fill="${i === 1 ? C.cream : C.tealLight}"/>` + t(616, y + 30, h, { size: 18, weight: 700 }) + tl(616, y + 56, wrap(d2, 26), { size: 15, fill: C.muted }, 19); });
  b += panel(30, 580, 840, 70, C.cream, C.olive) + t(450, 622, 'Fall of 28 °C in 10 minutes: mean rate 2.8 °C per minute', { size: 18, weight: 700, anchor: 'middle' });
  add('03-describing-a-change',
    svg(900, 670, 'Describing a change fully', b, 'Curve shape is illustrative between the two readings'),
    'A cooling curve for a cup of tea falling from 80 °C to 52 °C over 10 minutes, flattening as it cools. Four labels describe the change: the system is the tea and its surroundings; it is quantitative and reversible; the cause is energy transfer to cooler air; the consequence is that cooling slows. The mean rate is 2.8 °C per minute.',
    'A full answer names the system, the type of change, its cause and its consequence.',
    '## Change');
}

// 04 Relationship from data
{
  let b = panel(30, 110, 840, 470);
  const ox = 160, oy = 470, W = 400, H = 300;
  b += axes(ox, oy, W, H, 'concentration (mol/dm³)', 'rate, 1/time (s⁻¹)');
  const X = (c) => ox + (c / 2.2) * W, Y = (r) => oy - (r / 0.055) * H;
  b += `<line x1="${X(0)}" y1="${Y(0)}" x2="${X(2.15)}" y2="${Y(0.05375)}" stroke="${C.tealDark}" stroke-width="3"/>`;
  [[0.5, 0.0125], [1.0, 0.025], [2.0, 0.05]].forEach(([c, r]) => { b += path(`M${X(c) - 7},${Y(r) - 7} L${X(c) + 7},${Y(r) + 7} M${X(c) + 7},${Y(r) - 7} L${X(c) - 7},${Y(r) + 7}`, { w: 3 }); });
  [0.5, 1.0, 1.5, 2.0].forEach((c) => { b += t(X(c), oy + 22, c.toFixed(1), { size: 15, anchor: 'middle' }) + `<line x1="${X(c)}" y1="${oy}" x2="${X(c)}" y2="${oy + 6}" stroke="${C.ink}" stroke-width="2"/>`; });
  [0.0125, 0.025, 0.05].forEach((r) => { b += t(ox - 10, Y(r) + 5, String(r), { size: 15, anchor: 'end' }) + `<line x1="${ox - 6}" y1="${Y(r)}" x2="${ox}" y2="${Y(r)}" stroke="${C.ink}" stroke-width="2"/>`; });
  b += t(X(1.3), Y(0.016), 'straight line through', { size: 16, weight: 700, fill: C.tealDark }) + t(X(1.3), Y(0.016) + 20, 'the origin', { size: 16, weight: 700, fill: C.tealDark });
  // table
  const tx = 610;
  b += t(tx, 160, 'Data', { size: 18, weight: 700 });
  [['conc.', 'time (s)', '1/time'], ['0.5', '80', '0.0125'], ['1.0', '40', '0.025'], ['2.0', '20', '0.050']].forEach((row, i) => {
    const y = 175 + i * 44;
    b += `<rect x="${tx}" y="${y}" width="240" height="38" rx="8" fill="${i === 0 ? C.cream : i % 2 ? C.tealLight : '#fff'}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    row.forEach((c, j) => { b += t(tx + 40 + j * 82, y + 25, c, { size: 15, weight: i === 0 ? 700 : 400, anchor: 'middle' }); });
  });
  b += tl(tx, 390, ['Concentration doubles,', 'time halves:', 'rate ∝ concentration.'], { size: 17, weight: 700 }, 23);
  b += tl(tx, 470, ['More acid particles in the', 'same volume: more frequent', 'collisions with the magnesium.'], { size: 15, fill: C.muted }, 20);
  add('04-relationship-in-data',
    svg(900, 600, 'Finding a relationship in data', b),
    'Magnesium in acid: concentrations 0.5, 1.0 and 2.0 mol/dm³ take 80, 40 and 20 s, so 1/time is 0.0125, 0.025 and 0.050 per second. Plotted against concentration the points lie on a straight line through the origin: rate is directly proportional to concentration, explained by more frequent collisions.',
    'Doubling the concentration halves the time, so rate is proportional to concentration.',
    '## Relationships');
}

// 05 Surface area to volume
{
  let b = panel(30, 110, 840, 440);
  const cube = (x, yb, s) => {
    const d = s * 0.45;
    return `<path d="M${x},${yb} L${x + s},${yb} L${x + s},${yb - s} L${x},${yb - s} Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<path d="M${x},${yb - s} L${x + d},${yb - s - d} L${x + s + d},${yb - s - d} L${x + s},${yb - s} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<path d="M${x + s},${yb} L${x + s + d},${yb - d} L${x + s + d},${yb - s - d} L${x + s},${yb - s} Z" fill="#9fc4bf" stroke="${C.ink}" stroke-width="2.5"/>`;
  };
  const yb = 380, u = 40;
  const data = [[1, 6, 1, '6 : 1'], [2, 24, 8, '3 : 1'], [4, 96, 64, '1.5 : 1']];
  const xs = [100, 270, 520];
  data.forEach(([s, sa, v, r], i) => {
    b += cube(xs[i], yb, s * u) + t(xs[i] + (s * u) / 2, yb + 30, `side ${s} cm`, { size: 17, weight: 700, anchor: 'middle' });
    b += t(xs[i] + (s * u) / 2, yb + 56, `SA ${sa} cm²  V ${v} cm³`, { size: 15, anchor: 'middle', fill: C.muted });
    b += `<rect x="${xs[i] + (s * u) / 2 - 60}" y="${yb + 70}" width="120" height="38" rx="10" fill="${i === 2 ? C.mustard : C.cream}" stroke="${C.olive}" stroke-width="2"/>` + t(xs[i] + (s * u) / 2, yb + 96, r, { size: 18, weight: 700, anchor: 'middle' });
  });
  b += t(60, 150, 'Cells modelled as cubes', { size: 19, weight: 700 }) + t(60, 176, 'SA:V = surface area ÷ volume', { size: 16, fill: C.muted });
  b += panel(30, 570, 840, 100, C.cream, C.olive) + t(450, 610, 'Side doubles → SA:V halves', { size: 21, weight: 700, anchor: 'middle' }) +
    t(450, 642, 'so large animals need exchange surfaces such as alveoli', { size: 17, anchor: 'middle', fill: C.muted });
  add('05-surface-area-volume',
    svg(900, 690, 'Size and surface: a modelled relationship', b),
    'Three cubes of side 1, 2 and 4 cm. Their surface areas are 6, 24 and 96 cm² and volumes 1, 8 and 64 cm³, giving SA:V ratios of 6 : 1, 3 : 1 and 1.5 : 1. Each doubling of side halves the ratio, which is why large animals need exchange surfaces.',
    'Bigger means less surface per unit volume: SA:V halves each time the side doubles.',
    '## Relationships');
}

// 06 Systems: circuit, open and closed
{
  let b = panel(30, 110, 840, 290) + t(60, 148, 'A system: parts that depend on each other', { size: 20, weight: 700 });
  const cx0 = 140, cy0 = 190, cw = 300, ch = 160;
  // circuit: top wire with cell, right with lamp, bottom with switch (open)
  b += path(`M${cx0},${cy0} L${cx0 + 120},${cy0} M${cx0 + 140},${cy0} L${cx0 + cw},${cy0} L${cx0 + cw},${cy0 + 55} M${cx0 + cw},${cy0 + 105} L${cx0 + cw},${cy0 + ch} L${cx0 + 190},${cy0 + ch} M${cx0 + 120},${cy0 + ch} L${cx0},${cy0 + ch} L${cx0},${cy0}`, { w: 3 });
  b += `<line x1="${cx0 + 120}" y1="${cy0 - 24}" x2="${cx0 + 120}" y2="${cy0 + 24}" stroke="${C.ink}" stroke-width="3"/><line x1="${cx0 + 140}" y1="${cy0 - 12}" x2="${cx0 + 140}" y2="${cy0 + 12}" stroke="${C.ink}" stroke-width="7"/>`;
  b += t(cx0 + 130, cy0 + 44, 'cell', { size: 15, anchor: 'middle', fill: C.muted });
  b += `<circle cx="${cx0 + cw}" cy="${cy0 + 80}" r="25" fill="#fff" stroke="${C.ink}" stroke-width="3"/>` + path(`M${cx0 + cw - 18},${cy0 + 62} L${cx0 + cw + 18},${cy0 + 98} M${cx0 + cw + 18},${cy0 + 62} L${cx0 + cw - 18},${cy0 + 98}`, { w: 3 }) + t(cx0 + cw + 36, cy0 + 86, 'lamp', { size: 15, fill: C.muted });
  b += `<circle cx="${cx0 + 120}" cy="${cy0 + ch}" r="5" fill="${C.ink}"/><circle cx="${cx0 + 190}" cy="${cy0 + ch}" r="5" fill="${C.ink}"/>` + path(`M${cx0 + 120},${cy0 + ch} L${cx0 + 182},${cy0 + ch - 30}`, { w: 3 }) + t(cx0 + 155, cy0 + ch + 30, 'switch open', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 });
  b += tl(560, 200, ['Cell, wires, switch and lamp', 'only work together.', '', 'Break the circuit anywhere', 'and the current stops', 'everywhere.'], { size: 17 }, 24);
  // open / closed
  b += panel(30, 420, 410, 330) + t(235, 458, 'Closed (for matter)', { size: 20, weight: 700, anchor: 'middle' });
  b += `<path d="M175,520 L175,500 L215,500 L215,520 Q290,540 290,620 L290,700 Q290,712 278,712 L112,712 Q100,712 100,700 L100,620 Q100,540 175,520 Z" fill="#eaf3f1" stroke="${C.ink}" stroke-width="3"/>` + `<rect x="170" y="486" width="50" height="16" rx="3" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<rect x="102" y="672" width="186" height="38" fill="${C.sand}"/>` + [130, 165, 200, 240].map((x) => path(`M${x},672 q-6,-30 0,-50 M${x},672 q10,-24 4,-40`, { stroke: C.grass, w: 3 })).join('');
  b += path('M330,520 L262,580', { stroke: C.mustard, w: 4, extra: 'marker-end="url(#ahO)"' }) + t(340, 516, 'light enters', { size: 15, weight: 700, fill: C.olive });
  b += path('M150,630 q45,-40 90,0', { stroke: C.blue, w: 2.5, extra: 'marker-end="url(#ah)"' });
  b += t(235, 734, 'sealed bottle garden: water and carbon recycled', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(460, 420, 410, 330) + t(665, 458, 'Open', { size: 20, weight: 700, anchor: 'middle' });
  b += `<path d="M500,620 Q520,580 560,575 L770,575 Q810,580 830,620 Q800,690 665,695 Q530,690 500,620 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + t(665, 645, 'pond', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += arrow(540, 500, 580, 570, { w: 3.5, color: C.blue }) + t(500, 495, 'water in', { size: 15, weight: 700, fill: C.blue });
  b += arrow(750, 570, 790, 500, { w: 3.5, color: C.blue }) + t(760, 495, 'water out', { size: 15, weight: 700, fill: C.blue });
  b += t(665, 728, 'nutrients and organisms enter and leave', { size: 15, anchor: 'middle', fill: C.muted });
  add('06-systems-open-closed',
    svg(900, 770, 'Systems in science', b),
    'An electric circuit of cell, wires, switch and lamp: with the switch open the current stops everywhere. Below, a sealed bottle garden is close to a closed system for matter, recycling water and carbon while light enters; a pond is open, with water, nutrients and organisms entering and leaving.',
    'A system’s parts depend on each other; open systems exchange resources, closed ones do not.',
    '## Systems');
}

// 07 Building a statement of inquiry: acid rain
{
  let b = '';
  const parts = [['Key concept', 'change', C.mustard], ['Related concepts', 'conditions, consequences', C.cream], ['Global context', 'globalization and sustainability', C.tealLight]];
  parts.forEach(([h, v, f], i) => {
    const x = 30 + i * 290;
    b += panel(x, 110, 260, 140, f, C.olive) + t(x + 130, 150, h, { size: 19, weight: 700, anchor: 'middle' }) + tl(x + 130, 190, wrap(v, 22), { size: 18, anchor: 'middle', italic: true }, 22);
    if (i < 2) b += t(x + 275, 190, '+', { size: 30, weight: 700, anchor: 'middle' });
  });
  b += t(450, 285, 'Unit topic: acid rain and limestone buildings (chemistry)', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  b += panel(30, 305, 840, 100, '#fbeee6', C.rust) + t(55, 342, '✗ Weak', { size: 19, weight: 700, fill: C.rust }) + t(160, 342, '“Acid rain damages limestone.”', { size: 19, italic: true }) + t(55, 378, 'A fact about one topic: no concept, no global context.', { size: 16, fill: C.muted });
  b += panel(30, 420, 840, 150, '#eaf3f1', C.tealDark) + t(55, 457, '✓ Better', { size: 19, weight: 700, fill: C.tealDark });
  b += tl(160, 457, ['“The conditions humans create in the environment can', 'cause changes whose consequences reach far beyond', 'their source.”'], { size: 19, italic: true }, 26);
  b += t(55, 552, 'Uses change, conditions and consequences; would also fit ocean acidification.', { size: 16, fill: C.muted });
  const qs = [['Factual', 'What gas forms when acid reacts with calcium carbonate?'], ['Conceptual', 'How do changes in conditions alter the rate of a chemical change?'], ['Debatable', 'Should countries that cause acid rain pay for damage in neighbouring countries?']];
  b += t(60, 610, 'Questions it generates', { size: 19, weight: 700 });
  qs.forEach(([k, q], i) => { const y = 628 + i * 52; b += `<rect x="60" y="${y}" width="150" height="42" rx="10" fill="${[C.tealLight, C.cream, C.mustard][i]}" stroke="${C.ink}" stroke-width="2"/>` + t(135, y + 27, k, { size: 16, weight: 700, anchor: 'middle' }) + t(226, y + 27, q, { size: 16 }); });
  add('07-statement-of-inquiry-acid-rain',
    svg(900, 800, 'From concepts to a statement of inquiry', b),
    'The key concept change, related concepts conditions and consequences, and the global context globalization and sustainability combine for a unit on acid rain and limestone. “Acid rain damages limestone” is weak; the better statement says that conditions humans create can cause changes whose consequences reach far beyond their source. It generates factual, conceptual and debatable questions.',
    'A strong statement of inquiry uses the concepts and would transfer to another topic.',
    '## From key concept to statement of inquiry');
}
