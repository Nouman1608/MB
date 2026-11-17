import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-sciences-evolution-and-interactions';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const chip = (x, y, w, h, s, fill, { size = 17, weight = 700, edge = C.ink } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${edge}" stroke-width="2.2"/>` + t(x + w / 2, y + h / 2 + size * 0.35, s, { size, weight, anchor: 'middle' });
const beetle = (x, y, dark, s = 1) => {
  const f = dark ? '#3c3a36' : '#eee3c0';
  return `<g transform="translate(${x},${y}) scale(${s})">` +
    path('M-9,-6 L-17,-12 M-9,0 L-18,0 M-9,6 L-17,12 M9,-6 L17,-12 M9,0 L18,0 M9,6 L17,12', { stroke: C.ink, w: 2 }) +
    `<ellipse cx="0" cy="3" rx="10" ry="14" fill="${f}" stroke="${C.ink}" stroke-width="2"/><circle cx="0" cy="-13" r="6" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` +
    `<line x1="0" y1="-9" x2="0" y2="16" stroke="${dark ? '#77736a' : C.rockDark}" stroke-width="1.5"/></g>`;
};
const axes = (ox, oy, w, h, xl, yl) => `<line x1="${ox}" y1="${oy}" x2="${ox + w}" y2="${oy}" stroke="${C.ink}" stroke-width="3"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h}" stroke="${C.ink}" stroke-width="3"/>` +
  t(ox + w / 2, oy + 34, xl, { size: 16, weight: 600, anchor: 'middle' }) +
  `<text x="${ox - 18}" y="${oy - h / 2}" font-size="16" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${ox - 18} ${oy - h / 2})">${yl}</text>`;

// 01 Continuous and discontinuous variation
{
  let b = panel(30, 110, 410, 470) + panel(460, 110, 410, 470);
  b += t(235, 150, 'Continuous', { size: 22, weight: 700, anchor: 'middle' }) + t(235, 176, 'any value in a range, e.g. height', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(665, 150, 'Discontinuous', { size: 22, weight: 700, anchor: 'middle' }) + t(665, 176, 'distinct groups, e.g. ABO blood group', { size: 16, anchor: 'middle', fill: C.muted });
  const ox = 90, oy = 470;
  b += axes(ox, oy, 320, 250, 'height', 'number of people');
  const hs = [12, 30, 62, 105, 150, 178, 150, 105, 62, 30, 12];
  hs.forEach((h, i) => { b += `<rect x="${ox + 6 + i * 28}" y="${oy - h}" width="28" height="${h}" fill="${C.teal}" stroke="${C.ink}" stroke-width="1.8"/>`; });
  b += path(`M${ox + 6},${oy - 4} C${ox + 110},${oy - 10} ${ox + 120},${oy - 190} ${ox + 160},${oy - 190} C${ox + 200},${oy - 190} ${ox + 210},${oy - 10} ${ox + 314},${oy - 4}`, { stroke: C.rust, w: 3 });
  b += t(235, 545, 'Histogram: bars touch;', { size: 17, weight: 700, anchor: 'middle' }) + t(235, 567, 'often bell-shaped', { size: 17, weight: 700, anchor: 'middle' });
  const ox2 = 520, oy2 = 470;
  b += axes(ox2, oy2, 320, 250, 'blood group', 'number of people');
  [['A', 150], ['B', 80], ['AB', 40], ['O', 170]].forEach(([g, h], i) => { b += `<rect x="${ox2 + 22 + i * 76}" y="${oy2 - h}" width="52" height="${h}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + t(ox2 + 48 + i * 76, oy2 - h - 10, g, { size: 18, weight: 700, anchor: 'middle' }); });
  b += t(665, 545, 'Bar chart: bars separate;', { size: 17, weight: 700, anchor: 'middle' }) + t(665, 567, 'no in-between values', { size: 17, weight: 700, anchor: 'middle' });
  b += panel(30, 600, 840, 140, C.cream, C.olive);
  b += t(60, 638, 'Causes', { size: 20, weight: 700 });
  b += t(60, 672, 'Genetic:', { size: 17, weight: 700, fill: C.tealDark }) + t(150, 672, 'mutation makes new alleles; meiosis and random fertilisation reshuffle them.', { size: 16 });
  b += t(60, 702, 'Environmental:', { size: 17, weight: 700, fill: C.olive }) + t(200, 702, 'diet, light, temperature, soil minerals.', { size: 16 });
  b += t(60, 728, 'Only genetic variation is passed to offspring, so only it matters for evolution.', { size: 15, fill: C.muted });
  add('01-continuous-discontinuous',
    svg(900, 760, 'Two kinds of variation', b, 'Bar heights are illustrative'),
    'Left: height varies continuously and is plotted as a histogram with touching bars and a bell-shaped curve. Right: ABO blood group varies discontinuously into A, B, AB and O, plotted as a bar chart with separate bars. Below, genetic causes are mutation, meiosis and random fertilisation; environmental causes are diet, light, temperature and soil minerals.',
    'Continuous variation needs a histogram; discontinuous variation needs a bar chart.',
    '## Variation');
}

// 02 Natural selection: beetle example
{
  const steps = [
    ['Variation', 'Pale and dark beetles; colour is inherited.'],
    ['Selection pressure', 'Ash darkens the bark; birds hunt by sight.'],
    ['Better chance to survive', 'Dark beetles are harder to see, so fewer are eaten.'],
    ['Pass on alleles', 'More dark beetles breed and pass on the dark allele.'],
    ['Many generations', 'The proportion of dark beetles rises.'],
  ];
  const rh = 120, g = 12, y0 = 110;
  let b = '';
  steps.forEach(([h, d], i) => {
    const y = y0 + i * (rh + g);
    b += panel(30, y, 840, rh);
    const bark = i === 0 ? '#c9bb98' : '#4d4a44';
    b += `<rect x="50" y="${y + 14}" width="300" height="${rh - 28}" rx="8" fill="${bark}"/>`;
    for (let k = 0; k < 6; k++) b += `<line x1="${70 + k * 50}" y1="${y + 18}" x2="${76 + k * 50}" y2="${y + rh - 18}" stroke="${i === 0 ? '#b0a37f' : '#3a3833'}" stroke-width="3"/>`;
    const darkCount = [3, 3, 3, 4, 6][i], n = 6;
    for (let k = 0; k < n; k++) {
      const dark = k < darkCount;
      const x = 85 + k * 48, by = y + rh / 2 + (k % 2 ? 10 : -8);
      if (i === 2 && !dark) { b += beetle(x, by, false, 0.9) + path(`M${x - 14},${by - 16} L${x + 14},${by + 16} M${x + 14},${by - 16} L${x - 14},${by + 16}`, { stroke: C.rust, w: 4 }); }
      else b += beetle(x, by, dark, 0.9);
    }
    b += badge(395, y + rh / 2, 24, String(i + 1), i === 2 ? C.mustard : C.cream);
    b += t(440, y + 50, h, { size: 22, weight: 700 }) + t(440, y + 80, d, { size: 17, fill: C.muted });
  });
  b += t(450, y0 + 5 * (rh + g) + 20, 'No beetle chose to change and no single beetle turned darker: the population changed.', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  add('02-natural-selection-beetles',
    svg(900, 815, 'Natural selection in five links', b),
    'Five steps with beetles on bark. 1: pale and dark beetles vary and colour is inherited. 2: ash darkens the bark and birds hunt by sight. 3: pale beetles are seen and eaten more. 4: surviving dark beetles breed and pass on the dark allele. 5: over many generations most beetles are dark.',
    'Variation, selection pressure, survival, inheritance, many generations: give every link.',
    '## Natural selection');
}

// 03 Evidence for evolution
{
  let b = panel(30, 110, 410, 380) + t(235, 148, 'Fossils', { size: 22, weight: 700, anchor: 'middle' });
  const layers = ['#e6d9b3', '#d8c794', '#c9b67e', '#b9a46a'];
  layers.forEach((c, i) => { b += `<rect x="60" y="${170 + i * 62}" width="250" height="62" fill="${c}" stroke="${C.ink}" stroke-width="1.5"/>`; });
  const shell = (x, y, r) => `<path d="M${x - r},${y} A${r},${r} 0 0 1 ${x + r},${y} Z" fill="#fff" stroke="${C.ink}" stroke-width="2"/>` + path(`M${x},${y} L${x},${y - r} M${x},${y} L${x - r * 0.7},${y - r * 0.7} M${x},${y} L${x + r * 0.7},${y - r * 0.7}`, { w: 1.5 });
  b += shell(130, 210, 16) + shell(230, 274, 18) + shell(160, 338, 20) + shell(240, 400, 22);
  b += arrow(340, 180, 340, 410, { w: 3 }) + tl(352, 300, ['deeper', '= older'], { size: 16, weight: 700 }, 20);
  b += t(235, 468, 'The record has gaps: fossils need rapid burial.', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(460, 110, 410, 380) + t(665, 148, 'Homologous limbs', { size: 22, weight: 700, anchor: 'middle' });
  const limb = (x, label) => {
    let o = `<rect x="${x - 8}" y="190" width="16" height="70" rx="6" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` +
      `<rect x="${x - 14}" y="266" width="10" height="56" rx="4" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/><rect x="${x + 4}" y="266" width="10" height="56" rx="4" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
    for (let k = 0; k < 5; k++) o += `<rect x="${x - 26 + k * 11}" y="330" width="8" height="${label === 'bat wing' ? 80 : label === 'whale flipper' ? 46 : 54}" rx="3" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.6"/>`;
    return o + t(x, 444, label, { size: 16, weight: 700, anchor: 'middle' });
  };
  b += limb(545, 'human arm') + limb(665, 'bat wing') + limb(785, 'whale flipper');
  b += t(665, 470, 'Same five-digit plan: a common ancestor', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 510, 410, 230) + t(235, 548, 'Molecular evidence', { size: 22, weight: 700, anchor: 'middle' });
  const seq = (y, name, s, ref) => t(60, y, name, { size: 16, weight: 700 }) + s.split('').map((c, k) => `<rect x="${170 + k * 24}" y="${y - 18}" width="22" height="26" rx="4" fill="${c !== ref[k] ? C.rust : C.tealLight}"/>` + t(181 + k * 24, y + 1, c, { size: 15, weight: 700, anchor: 'middle', fill: c !== ref[k] ? '#fff' : C.ink })).join('');
  const ref = 'ATGCCTAGGT';
  b += seq(590, 'species X', ref, ref) + seq(630, 'species Y', 'ATGCCTACGT', ref) + seq(670, 'species Z', 'TTGCATACGA', ref);
  b += t(235, 712, 'Fewer differences: a more recent', { size: 15, anchor: 'middle', fill: C.muted }) + t(235, 730, 'common ancestor (illustrative)', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(460, 510, 410, 230) + t(665, 548, 'Observed change', { size: 22, weight: 700, anchor: 'middle' });
  b += tl(490, 590, ['Antibiotic resistance in bacteria', 'and pesticide resistance in insects', 'can be watched happening within', 'a human lifetime.'], { size: 17 }, 25);
  b += t(490, 712, 'Selection seen directly, not inferred.', { size: 16, fill: C.tealDark, weight: 700 });
  add('03-evidence-for-evolution',
    svg(900, 760, 'Four kinds of evidence for evolution', b),
    'Four panels. Fossils in rock layers, with deeper layers usually older. Homologous five-digit limbs in a human arm, a bat wing and a whale flipper suggest a common ancestor. Illustrative DNA sequences: species Y differs from X at one base and Z at four, so X and Y share a more recent ancestor. Antibiotic and pesticide resistance can be observed within a lifetime.',
    'Fossils, anatomy, molecules and observed change all point to common ancestry.',
    '## Evidence for evolution');
}

// 04 Energy transfer and pyramids
{
  let b = panel(30, 110, 840, 400);
  const lv = [['Producers', '24 000', 'level 1', 480, C.grass], ['Primary consumers', '2160', 'level 2', 260, C.cream], ['Secondary consumers', '216', 'level 3', 90, C.mustard]];
  lv.forEach(([n, e, l, w, f], i) => {
    const y = 400 - i * 92;
    b += `<rect x="${460 - w / 2}" y="${y}" width="${w}" height="76" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += t(70, y + 34, n, { size: 18, weight: 700 }) + t(70, y + 58, l, { size: 15, fill: C.muted });
    b += t(460, y + 46, e, { size: 19, weight: 700, anchor: 'middle', fill: i === 0 ? '#fff' : C.ink });
  });
  b += t(460, 160, 'kJ m⁻² year⁻¹', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(750, 420, 750, 340, { w: 3, color: C.olive, marker: 'ahO' }) + t(762, 385, '9.0%', { size: 18, weight: 700, fill: C.olive });
  b += arrow(750, 328, 750, 248, { w: 3, color: C.olive, marker: 'ahO' }) + t(762, 293, '10%', { size: 18, weight: 700, fill: C.olive });
  b += t(700, 200, 'efficiency =', { size: 15, fill: C.muted }) + t(700, 220, 'passed on ÷ in × 100', { size: 15, fill: C.muted });
  b += panel(30, 530, 840, 120, C.cream, C.olive) + t(60, 568, 'Where the rest goes', { size: 19, weight: 700 });
  b += chip(60, 588, 250, 44, 'heat from respiration', '#fff', { size: 16, edge: C.olive }) + chip(325, 588, 180, 44, 'movement', '#fff', { size: 16, edge: C.olive }) + chip(520, 588, 320, 44, 'parts not eaten or digested', '#fff', { size: 16, edge: C.olive });
  // pyramid types
  const py = 690;
  b += panel(30, py, 840, 220);
  const mini = (x, title, sub, ws, inv) => {
    let o = t(x, py + 36, title, { size: 18, weight: 700, anchor: 'middle' }) + t(x, py + 200, sub, { size: 15, anchor: 'middle', fill: C.muted });
    ws.forEach((w, i) => { o += `<rect x="${x - w / 2}" y="${py + 150 - i * 34}" width="${w}" height="30" fill="${[C.grass, C.cream, C.mustard][i]}" stroke="${C.ink}" stroke-width="2"/>`; });
    return o;
  };
  b += mini(170, 'Energy', 'always pyramid-shaped', [200, 110, 40]);
  b += mini(450, 'Numbers', 'one oak, thousands of caterpillars', [36, 210, 90]);
  b += mini(730, 'Biomass', 'usually upright', [190, 110, 50]);
  add('04-energy-transfer-pyramids',
    svg(900, 930, 'Energy through a food chain', b),
    'An energy pyramid for a fictional grassland: producers 24 000, primary consumers 2160 and secondary consumers 216 kJ per square metre per year, transfers of 9.0% and 10%. The rest is lost as heat from respiration, in movement and in parts not eaten or digested. Below, energy pyramids are always pyramid-shaped, pyramids of numbers can be inverted, as with one oak and many caterpillars, and biomass pyramids are usually upright.',
    'Only about a tenth of the energy passes up each level, so chains stay short.',
    '## Food chains and food webs');
}

// 05 Predator-prey cycles
{
  let b = panel(30, 110, 840, 470);
  const ox = 110, oy = 480, W = 720, H = 300;
  b += axes(ox, oy, W, H, 'time', 'population size');
  const prey = (x) => oy - 140 - 110 * Math.sin((2 * Math.PI * x) / 320);
  const pred = (x) => oy - 90 - 55 * Math.sin((2 * Math.PI * (x - 70)) / 320);
  let d1 = `M${ox},${prey(0)}`, d2 = `M${ox},${pred(0)}`;
  for (let x = 4; x <= W - 20; x += 4) { d1 += ` L${ox + x},${prey(x).toFixed(1)}`; d2 += ` L${ox + x},${pred(x).toFixed(1)}`; }
  b += path(d1, { stroke: C.tealDark, w: 4 }) + path(d2, { stroke: C.rust, w: 4, extra: 'stroke-dasharray="12 7"' });
  const pk1 = 80, pk2 = 150;
  b += `<line x1="${ox + pk1}" y1="${prey(pk1) - 8}" x2="${ox + pk1}" y2="${oy}" stroke="${C.muted}" stroke-width="1.8" stroke-dasharray="4 5"/><line x1="${ox + pk2}" y1="${pred(pk2) - 8}" x2="${ox + pk2}" y2="${oy}" stroke="${C.muted}" stroke-width="1.8" stroke-dasharray="4 5"/>`;
  b += `<line x1="${ox + pk1}" y1="${oy - 20}" x2="${ox + pk2}" y2="${oy - 20}" stroke="${C.ink}" stroke-width="2.5" marker-end="url(#ah)"/>` + t((2 * ox + pk1 + pk2) / 2, oy - 30, 'lag', { size: 16, weight: 700, anchor: 'middle' });
  b += t(ox + pk1 + 8, prey(pk1) - 14, 'prey peak', { size: 15, weight: 700, fill: C.tealDark }) + t(ox + pk2 + 10, pred(pk2) - 12, 'predator peak', { size: 15, weight: 700, fill: C.rust });
  b += `<line x1="560" y1="140" x2="610" y2="140" stroke="${C.tealDark}" stroke-width="4"/>` + t(620, 146, 'prey', { size: 17, weight: 700 }) +
    `<line x1="690" y1="140" x2="740" y2="140" stroke="${C.rust}" stroke-width="4" stroke-dasharray="12 7"/>` + t(750, 146, 'predator', { size: 17, weight: 700 });
  const steps = ['prey rise', 'predators rise (more food)', 'prey fall (more eaten)', 'predators fall (less food)', 'prey recover'];
  b += panel(30, 600, 840, 120, C.cream, C.olive);
  const short = [['prey', 'rise'], ['predators', 'rise'], ['prey', 'fall'], ['predators', 'fall'], ['prey', 'recover']];
  short.forEach(([a1, a2], i) => { const x = 65 + i * 160; b += `<rect x="${x}" y="618" width="130" height="58" rx="10" fill="#fff" stroke="${i % 2 ? C.rust : C.tealDark}" stroke-width="2.2"/>` + t(x + 65, 642, a1, { size: 16, weight: 700, anchor: 'middle' }) + t(x + 65, 664, a2, { size: 16, anchor: 'middle' }); if (i < 4) b += arrow(x + 133, 647, x + 157, 647, { w: 3, color: C.olive, marker: 'ahO' }); });
  b += t(450, 708, 'Disease, weather and other food sources make real cycles less regular.', { size: 15, anchor: 'middle', fill: C.muted });
  add('05-predator-prey-cycles',
    svg(900, 740, 'Predator and prey populations', b, 'Shape only, no real data'),
    'A graph of population size against time. Prey numbers rise and fall in a cycle; predator numbers follow the same cycle but peak later, after a lag. Prey rise, predators rise with more food, prey fall as more are eaten, predators fall with less food, and prey recover.',
    'The predator peak always comes after the prey peak.',
    '## Competition, predation and symbiosis');
}

// 06 Symbiosis types
{
  const rows = [
    ['Mutualism', 'both benefit', '+', '+', 'Rhizobium bacteria in legume root nodules fix nitrogen; the plant supplies sugars.'],
    ['Commensalism', 'one benefits, other unaffected', '+', '0', 'Barnacles on a whale gain transport and feeding opportunities.'],
    ['Parasitism', 'one benefits, host harmed', '+', '−', 'A tapeworm absorbs digested food in its host’s gut.'],
  ];
  let b = '';
  rows.forEach(([n, d, a, c, e], i) => {
    const y = 110 + i * 170;
    b += panel(30, y, 840, 154);
    const col = (s) => (s === '+' ? C.tealDark : s === '−' ? C.rust : C.muted);
    b += `<circle cx="95" cy="${y + 77}" r="34" fill="#fff" stroke="${col(a)}" stroke-width="4"/>` + t(95, y + 90, a, { size: 36, weight: 700, anchor: 'middle', fill: col(a) });
    b += `<circle cx="185" cy="${y + 77}" r="34" fill="#fff" stroke="${col(c)}" stroke-width="4"/>` + t(185, y + 90, c, { size: 36, weight: 700, anchor: 'middle', fill: col(c) });
    b += `<line x1="129" y1="${y + 77}" x2="151" y2="${y + 77}" stroke="${C.ink}" stroke-width="3"/>`;
    b += t(250, y + 46, n, { size: 23, weight: 700 }) + t(250, y + 74, d, { size: 17, weight: 600, fill: C.tealDark });
    const words = e.split(' '); const L = ['']; for (const w of words) { if ((L[L.length - 1] + ' ' + w).length > 58) L.push(w); else L[L.length - 1] = (L[L.length - 1] + ' ' + w).trim(); }
    b += tl(250, y + 104, L, { size: 16, fill: C.muted }, 22);
  });
  b += t(450, 630, 'Symbiosis: a close, long-term relationship between two species. Always say which type.', { size: 16, anchor: 'middle', fill: C.muted });
  add('06-symbiosis-types',
    svg(900, 660, 'Three kinds of symbiosis', b),
    'Three rows of plus, zero and minus signs. Mutualism (plus, plus): Rhizobium in legume root nodules fixes nitrogen and the plant supplies sugars. Commensalism (plus, zero): barnacles on a whale gain transport and feeding. Parasitism (plus, minus): a tapeworm absorbs digested food in its host’s gut.',
    'Symbiosis types differ in who gains and who loses.',
    '## Competition, predation and symbiosis');
}

// 07 Sampling: quadrats and capture-mark-recapture
{
  let b = panel(30, 110, 840, 400) + t(60, 150, 'Quadrats: daisies in a 40 m × 25 m field', { size: 21, weight: 700 });
  const fx = 60, fy = 175, fw = 360, fh = 225;
  b += `<rect x="${fx}" y="${fy}" width="${fw}" height="${fh}" fill="#d8e3c6" stroke="${C.ink}" stroke-width="2.5"/>`;
  const counts = [3, 0, 5, 2, 4, 1, 6, 2, 3, 4];
  const pos = [[30, 20], [150, 40], [280, 25], [70, 100], [210, 110], [320, 90], [40, 170], [140, 175], [250, 165], [320, 180]];
  pos.forEach(([px, py2], i) => { b += `<rect x="${fx + px}" y="${fy + py2}" width="28" height="28" fill="#fff" fill-opacity="0.6" stroke="${C.ink}" stroke-width="2"/>` + t(fx + px + 14, fy + py2 + 20, String(counts[i]), { size: 15, weight: 700, anchor: 'middle' }); });
  b += t(fx + fw / 2, fy + fh + 26, 'ten 0.5 m × 0.5 m quadrats placed at random', { size: 15, anchor: 'middle', fill: C.muted });
  const lines = [['mean', '30 ÷ 10 = 3.0 per quadrat'], ['quadrat area', '0.5 × 0.5 = 0.25 m²'], ['density', '3.0 ÷ 0.25 = 12 per m²'], ['field area', '40 × 25 = 1000 m²'], ['estimate', '12 × 1000 = 12 000 daisies']];
  lines.forEach(([a, c], i) => { const y = 200 + i * 54; b += `<rect x="450" y="${y}" width="400" height="44" rx="10" fill="${i === 4 ? C.cream : C.tealLight}"/>` + t(466, y + 28, a, { size: 16, weight: 700 }) + t(836, y + 28, c, { size: 16, anchor: 'end', weight: i === 4 ? 700 : 400 }); });
  // CMR
  b += panel(30, 530, 840, 290) + t(60, 570, 'Capture–mark–recapture (woodlice)', { size: 21, weight: 700 });
  const bug = (x, y, marked) => `<ellipse cx="${x}" cy="${y}" rx="11" ry="7" fill="#9c9488" stroke="${C.ink}" stroke-width="1.6"/>` + (marked ? `<circle cx="${x}" cy="${y}" r="3.5" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1"/>` : '');
  const sample = (x, title, n, m) => { let o = `<rect x="${x}" y="595" width="230" height="130" rx="10" fill="#f6f1e4" stroke="${C.panelEdge}" stroke-width="2"/>` + t(x + 115, 750, title, { size: 16, weight: 700, anchor: 'middle' }); for (let k = 0; k < 24; k++) o += bug(x + 22 + (k % 8) * 27, 618 + Math.floor(k / 8) * 38 + (k % 2) * 6, k < m); return o; };
  b += sample(60, '1st sample: 48 marked', 24, 24) + arrow(300, 660, 340, 660, { w: 3 }) + t(320, 690, 'release,', { size: 15, anchor: 'middle', fill: C.muted }) + t(320, 708, 'mix', { size: 15, anchor: 'middle', fill: C.muted });
  b += sample(350, '2nd: 60 caught, 12 marked', 24, 5);
  b += t(610, 620, 'N = (48 × 60) ÷ 12', { size: 20, weight: 700 }) + t(610, 652, '= 2880 ÷ 12 = 240', { size: 20, weight: 700, fill: C.tealDark });
  b += tl(610, 690, ['Assumes: marks stay on and do', 'no harm; marked animals mix;', 'no big births, deaths or', 'migration between samples.'], { size: 15, fill: C.muted }, 20);
  b += t(450, 806, 'Drawings show the proportions, not every animal.', { size: 15, anchor: 'middle', fill: C.muted });
  add('07-sampling-quadrats-cmr',
    svg(900, 840, 'Estimating population size', b),
    'Top: ten random 0.5 m quadrats in a 40 m by 25 m field count 3, 0, 5, 2, 4, 1, 6, 2, 3 and 4 daisies; mean 3.0, density 12 per square metre, estimate 12 000. Bottom: 48 woodlice are marked and released; a second sample of 60 contains 12 marked, so N = 48 × 60 ÷ 12 = 240, assuming marks stay on, animals mix, and no births, deaths or migration.',
    'Scale up from a sample: quadrats for plants, capture–mark–recapture for animals that move.',
    '## Population sampling');
}
