import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-sciences-cycles';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const box = (x, y, w, h, l1, l2, fill = '#fff', edge = C.ink, size = 18) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` +
  (l2 ? t(x + w / 2, y + h / 2 - 3, l1, { size, weight: 700, anchor: 'middle' }) + t(x + w / 2, y + h / 2 + 20, l2, { size: 15, anchor: 'middle', fill: C.muted })
    : t(x + w / 2, y + h / 2 + size * 0.35, l1, { size, weight: 700, anchor: 'middle' }));
const lab = (x, y, s, { fill = C.ink, size = 16, weight = 700, anchor = 'middle', bg = C.bg } = {}) => {
  const w = s.length * size * 0.6 + 14;
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  return `<rect x="${x0}" y="${y - size - 2}" width="${w}" height="${size + 10}" rx="6" fill="${bg}"/>` + t(anchor === 'middle' ? x : anchor === 'end' ? x - 6 : x + 6, y, s, { size, weight, anchor, fill });
};
const curve = (d, col = C.ink, marker = 'ah', dash = '') => `<path d="${d}" fill="none" stroke="${col}" stroke-width="3.2" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// 01 Carbon cycle
{
  let b = `<rect x="30" y="110" width="840" height="70" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` +
    t(450, 153, 'Atmosphere: carbon dioxide', { size: 22, weight: 700, anchor: 'middle' });
  const W = 148, G = 25, ys = 400, H = 90;
  const xs = [0, 1, 2, 3, 4].map((i) => 30 + i * (W + G));
  const cx = xs.map((x) => x + W / 2);
  b += box(xs[0], ys, W, H, 'Oceans', 'dissolved CO₂', '#d6e6f2', C.blue, 19);
  b += box(xs[1], ys, W, H, 'Plants', 'and algae', '#dfe9d3', C.grass, 19);
  b += box(xs[2], ys, W, H, 'Animals', 'carbon compounds', '#fff', C.ink, 19);
  b += box(xs[3], ys, W, H, 'Dead matter', 'in soil, waste', C.sand, C.olive, 19);
  b += box(xs[4], ys, W, H, 'Fossil fuels', 'coal, oil, gas', '#d9d4c7', C.ink, 19);
  // vertical flows
  b += `<line x1="${cx[0]}" y1="${186}" x2="${cx[0]}" y2="${ys - 6}" stroke="${C.blue}" stroke-width="3.2" marker-start="url(#ah)" marker-end="url(#ah)"/>` + lab(cx[0], 290, 'dissolving', { fill: C.blue });
  b += arrow(cx[1] - 55, 186, cx[1] - 55, ys - 6, { w: 3.2, color: C.tealDark, marker: 'ahT' }) + lab(cx[1] - 55, 245, 'photosynthesis', { fill: C.tealDark });
  b += arrow(cx[1] + 55, ys - 4, cx[1] + 55, 188, { w: 3.2, color: C.rust, marker: 'ahR' }) + lab(cx[1] + 55, 340, 'respiration', { fill: C.rust });
  b += arrow(cx[2], ys - 4, cx[2], 188, { w: 3.2, color: C.rust, marker: 'ahR' }) + lab(cx[2] + 8, 270, 'respiration', { fill: C.rust });
  b += arrow(cx[3], ys - 4, cx[3], 188, { w: 3.2, color: C.rust, marker: 'ahR' }) + lab(cx[3], 300, 'decomposition', { fill: C.rust }) + lab(cx[3], 330, 'decomposers respire', { fill: C.muted, size: 15, weight: 400 });
  b += arrow(cx[4], ys - 4, cx[4], 188, { w: 3.2, color: C.rust, marker: 'ahR' }) + lab(cx[4], 250, 'combustion', { fill: C.rust });
  // lower flows
  b += curve(`M${cx[1] + 20},${ys + H + 4} Q${(cx[1] + cx[2]) / 2},${ys + H + 70} ${cx[2] - 20},${ys + H + 8}`) + t((cx[1] + cx[2]) / 2, ys + H + 56, 'feeding', { size: 16, weight: 700, anchor: 'middle' });
  b += curve(`M${cx[1] - 20},${ys + H + 4} Q${cx[2]},${ys + H + 230} ${cx[3] - 30},${ys + H + 8}`) + curve(`M${cx[2] + 20},${ys + H + 4} Q${(cx[2] + cx[3]) / 2},${ys + H + 70} ${cx[3] - 5},${ys + H + 8}`);
  b += t(cx[2] + 10, ys + H + 142, 'death and waste', { size: 16, weight: 700, anchor: 'middle' });
  b += curve(`M${cx[3] + 20},${ys + H + 4} Q${(cx[3] + cx[4]) / 2},${ys + H + 70} ${cx[4] - 20},${ys + H + 8}`) + t((cx[3] + cx[4]) / 2, ys + H + 72, 'fossilisation', { size: 16, weight: 700, anchor: 'middle' }) + t((cx[3] + cx[4]) / 2, ys + H + 92, 'millions of years', { size: 15, anchor: 'middle', fill: C.muted });
  // equations
  const ey = 665;
  b += panel(30, ey, 840, 140, C.cream, C.olive);
  b += t(55, ey + 40, 'Photosynthesis', { size: 18, weight: 700, fill: C.tealDark }) + t(220, ey + 40, 'carbon dioxide + water → glucose + oxygen', { size: 18 }) + t(845, ey + 40, 'light, chlorophyll', { size: 15, anchor: 'end', fill: C.muted });
  b += t(55, ey + 80, 'Respiration', { size: 18, weight: 700, fill: C.rust }) + t(220, ey + 80, 'glucose + oxygen → carbon dioxide + water', { size: 18 }) + t(845, ey + 80, 'energy released', { size: 15, anchor: 'end', fill: C.muted });
  b += t(55, ey + 118, 'Also a store: sedimentary rocks such as limestone (calcium carbonate).', { size: 16, fill: C.muted });
  add('01-carbon-cycle',
    svg(900, 835, 'The carbon cycle', b),
    'The atmosphere’s carbon dioxide exchanges with the oceans by dissolving, enters plants by photosynthesis and returns by respiration from plants, animals and decomposers and by combustion of fossil fuels. Feeding passes carbon from plants to animals, death and waste pass it to dead matter, and fossilisation turns dead matter into fossil fuels. Word equations for photosynthesis and respiration are given below.',
    'Carbon moves between stores; only its location and form change, never the total.',
    '## The carbon cycle');
}

// 02 Forest carbon budget
{
  let b = panel(30, 110, 840, 400);
  const s = 50, x0 = 230;
  b += t(60, 170, 'Carbon in', { size: 19, weight: 700 }) + t(60, 192, 't per hectare', { size: 15, fill: C.muted });
  b += `<rect x="${x0}" y="150" width="${12 * s}" height="50" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x0 + 6 * s, 182, 'photosynthesis 12.0', { size: 18, weight: 700, anchor: 'middle' });
  b += t(60, 260, 'Carbon out', { size: 19, weight: 700 }) + t(60, 282, 't per hectare', { size: 15, fill: C.muted });
  b += `<rect x="${x0}" y="240" width="${6 * s}" height="50" fill="#f0c7ad" stroke="${C.ink}" stroke-width="2.5"/>` + t(x0 + 3 * s, 272, 'plant respiration 6.0', { size: 17, weight: 700, anchor: 'middle' });
  b += `<rect x="${x0 + 6 * s}" y="240" width="${5 * s}" height="50" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x0 + 8.5 * s, 272, 'decomposers 5.0', { size: 17, weight: 700, anchor: 'middle' });
  b += `<rect x="${x0 + 11 * s}" y="240" width="${1 * s}" height="50" fill="none" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="6 5"/>`;
  b += `<line x1="${x0 + 11 * s}" y1="140" x2="${x0 + 11 * s}" y2="310" stroke="${C.muted}" stroke-width="1.8" stroke-dasharray="4 5"/>`;
  b += arrow(x0 + 11.5 * s, 340, x0 + 11.5 * s, 296, { w: 3, color: C.tealDark, marker: 'ahT' }) + t(x0 + 11.5 * s, 362, 'gap = +1.0 t', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += `<rect x="60" y="400" width="780" height="80" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` +
    t(80, 432, '12.0 − (6.0 + 5.0) = +1.0 t of carbon per hectare per year', { size: 19, weight: 700 }) + t(80, 462, 'More carbon enters than leaves, so the forest is a carbon sink this year.', { size: 17, fill: C.muted });
  b += panel(30, 530, 840, 90, '#fbeee6', C.rust) + t(60, 566, 'If the forest burned:', { size: 18, weight: 700, fill: C.rust }) + t(60, 594, 'combustion releases stored carbon fast and photosynthesis falls, so the sink becomes a source.', { size: 16 });
  add('02-forest-carbon-budget',
    svg(900, 650, 'Is the forest a carbon sink?', b),
    'Bar comparison for a fictional forest: 12.0 tonnes of carbon in by photosynthesis against 6.0 tonnes out by plant respiration and 5.0 by decomposers, 11.0 in total. The gap of +1.0 tonne per hectare per year makes it a sink; burning would turn it into a source.',
    'In greater than out means a carbon sink; out greater than in means a source.',
    '## The carbon cycle');
}

// 03 Water cycle
{
  let b = `<rect x="30" y="110" width="840" height="560" rx="14" fill="#e6f0f4"/>`;
  b += `<circle cx="110" cy="175" r="38" fill="${C.mustard}" stroke="${C.olive}" stroke-width="3"/>`;
  // ground
  const ground = 'M330,470 L420,452 Q540,438 620,390 L760,250 L870,300 L870,670 L330,670 Z';
  b += `<path d="${ground}" fill="#d8e3c6" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += `<path d="M330,560 Q600,540 870,520 L870,640 Q600,650 330,640 Z" fill="${C.rock}" opacity="0.9"/>` + t(860, 630, 'permeable rock', { size: 15, anchor: 'end', fill: C.olive, weight: 600 });
  b += `<rect x="30" y="470" width="320" height="200" fill="${C.teal}"/>` + t(120, 640, 'sea', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' });
  // trees
  [[455, 446], [500, 440], [545, 428]].forEach(([x, y]) => { b += `<rect x="${x - 4}" y="${y - 30}" width="8" height="30" fill="#7a5a3a"/><circle cx="${x}" cy="${y - 42}" r="22" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>`; });
  // cloud
  b += `<path d="M560,205 q-10,-40 35,-42 q15,-35 60,-20 q35,-20 60,10 q40,0 35,40 Z" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`;
  // rain
  for (let k = 0; k < 6; k++) b += `<line x1="${610 + k * 22}" y1="${220}" x2="${600 + k * 22}" y2="${262}" stroke="${C.blue}" stroke-width="2.5"/>`;
  // arrows
  b += arrow(200, 455, 240, 290, { w: 3.5, color: C.rust, marker: 'ahR' }) + lab(160, 380, 'evaporation', { fill: C.rust, anchor: 'end', bg: '#e6f0f4' }) + t(150, 402, 'Sun supplies energy', { size: 15, anchor: 'end', fill: C.muted });
  b += arrow(500, 380, 520, 245, { w: 3.5, color: C.grass, marker: 'ahT' }) + lab(440, 300, 'transpiration', { fill: '#3d5f2a', anchor: 'end', bg: '#e6f0f4' }) + t(434, 322, 'from leaves', { size: 15, anchor: 'end', fill: C.muted });
  b += curve('M250,270 Q380,170 545,185', C.ink) + lab(330, 168, 'condensation: vapour cools', { anchor: 'middle', bg: '#e6f0f4' }) + t(330, 190, 'into cloud droplets', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(700, 268, 700, 330, { w: 3.5, color: C.blue }) + lab(790, 210, 'precipitation', { fill: C.blue, bg: '#e6f0f4' });
  b += curve('M640,395 Q560,445 400,462', C.blue, 'ah') + lab(560, 480, 'surface runoff', { fill: C.blue, bg: '#d8e3c6' });
  b += arrow(610, 430, 610, 520, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + lab(640, 505, 'infiltration', { fill: C.tealDark, anchor: 'start', bg: '#d8e3c6' });
  b += curve('M720,600 Q550,615 360,600', C.tealDark, 'ahT', '10 7') + lab(560, 625, 'groundwater flow (slow)', { fill: C.tealDark, bg: C.rock });
  b += t(450, 700, 'The Sun drives evaporation; gravity pulls precipitation down and drives runoff and river flow.', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-water-cycle',
    svg(900, 720, 'The water cycle', b),
    'Cross-section from the sea to a hill. The Sun evaporates sea water and plants transpire water vapour from their leaves; the vapour cools and condenses into cloud; precipitation falls on the hill. Water runs off over the surface to the sea, infiltrates the soil and moves slowly as groundwater through permeable rock back to the sea.',
    'The Sun lifts water as vapour; gravity brings it back down and to the sea.',
    '## The water cycle');
}

// 04 Water budget
{
  let b = panel(30, 110, 840, 400);
  const s = 0.7, x0 = 60, y = 200;
  b += t(60, 155, 'Precipitation in: 1,100 mm per year', { size: 20, weight: 700 });
  b += `<rect x="${x0}" y="${y}" width="${1100 * s}" height="60" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x0 + 550 * s, y + 37, 'precipitation 1,100', { size: 18, weight: 700, anchor: 'middle' });
  const segs = [[650, 'evapotranspiration 650', '#f0c7ad'], [300, 'runoff 300', '#c9d3e6'], [150, 'recharge', C.mustard]];
  let x = x0; const y2 = 330;
  segs.forEach(([v, s2, f]) => { b += `<rect x="${x}" y="${y2}" width="${v * s}" height="60" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x + (v * s) / 2, y2 + 37, v < 200 ? String(v) : s2, { size: 18, weight: 700, anchor: 'middle' }) + (v < 200 ? t(x + (v * s) / 2, y2 + 86, 'recharge', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) : ''); x += v * s; });
  b += t(60, 305, 'Outputs (mm), no change in soil water storage', { size: 18, weight: 600, fill: C.muted });
  b += arrow(x0 + (1100 * s) / 2, y + 64, x0 + (1100 * s) / 2, 285, { w: 3 });
  b += t(60, 445, 'Recharge = 1,100 − 650 − 300 = 150 mm', { size: 19, weight: 700 });
  b += t(60, 478, 'Evapotranspiration share = 650 ÷ 1,100 × 100 = 59.1%', { size: 18, fill: C.muted });
  add('04-water-budget',
    svg(900, 540, 'A catchment water budget', b),
    'A bar of 1,100 mm of precipitation is matched by outputs of 650 mm evapotranspiration, 300 mm surface runoff and 150 mm groundwater recharge. Evapotranspiration is 59.1% of the precipitation.',
    'Inputs equal outputs plus storage change, so recharge is what is left over.',
    '## The water cycle');
}

// 05 Nitrogen cycle
{
  let b = `<rect x="30" y="110" width="840" height="70" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` +
    t(450, 153, 'Nitrogen gas, N₂, in the air (about 78%)', { size: 22, weight: 700, anchor: 'middle' });
  const W = 140, G = (840 - 4 * W) / 3, ys = 420, H = 80;
  const xs = [0, 1, 2, 3].map((i) => 30 + i * (W + G)), cx = xs.map((x) => x + W / 2);
  b += box(xs[0], ys, W, H, 'Ammonium', 'in soil', C.sand, C.olive, 19);
  b += box(xs[1], ys, W, H, 'Nitrate', 'in soil', C.cream, C.olive, 19);
  b += box(xs[2], ys, W, H, 'Plants', 'proteins, DNA', '#dfe9d3', C.grass, 19);
  b += box(xs[3], ys, W, H, 'Animals', 'proteins', '#fff', C.ink, 19);
  b += box(xs[1], 600, xs[3] + W - xs[1], 70, 'Dead matter and waste (urea)', '', '#efe6d6', C.olive, 18);
  // fixation
  b += arrow(cx[0], 186, cx[0], ys - 6, { w: 3.5, color: C.tealDark, marker: 'ahT' });
  b += t(cx[0] + 14, 228, 'nitrogen fixation', { size: 17, weight: 700, fill: C.tealDark }) + tl(cx[0] + 14, 252, ['bacteria in root', 'nodules and soil;', 'Haber process'], { size: 15, fill: C.muted }, 19);
  // denitrification
  b += arrow(cx[1] - 30, ys - 4, cx[1] - 30, 188, { w: 3.5, color: C.rust, marker: 'ahR' });
  b += t(cx[1] - 42, 350, 'denitrification', { size: 17, weight: 700, fill: C.rust, anchor: 'end' }) + t(cx[1] - 42, 372, 'oxygen-poor soil', { size: 15, fill: C.muted, anchor: 'end' });
  // lightning
  b += arrow(cx[1] + 40, 186, cx[1] + 40, ys - 6, { w: 3, dash: '9 6' }) + t(cx[1] + 52, 228, 'lightning', { size: 17, weight: 700 }) + tl(cx[1] + 52, 250, ['nitrogen oxides', '→ nitrate'], { size: 15, fill: C.muted }, 19);
  // inner loop
  b += arrow(xs[0] + W + 4, ys + 40, xs[1] - 6, ys + 40, { w: 3.5 }) + t((xs[0] + W + xs[1]) / 2, ys - 12, 'nitrification', { size: 16, weight: 700, anchor: 'middle' }) +
    t((xs[0] + W + xs[1]) / 2, ys + 72, 'via nitrite;', { size: 15, anchor: 'middle', fill: C.muted }) + t((xs[0] + W + xs[1]) / 2, ys + 92, 'needs oxygen', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(xs[1] + W + 4, ys + 40, xs[2] - 6, ys + 40, { w: 3.5 }) + t((xs[1] + W + xs[2]) / 2, ys + 28, 'uptake', { size: 16, weight: 700, anchor: 'middle' }) + t((xs[1] + W + xs[2]) / 2, ys + 66, 'by roots', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(xs[2] + W + 4, ys + 40, xs[3] - 6, ys + 40, { w: 3.5 }) + t((xs[2] + W + xs[3]) / 2, ys + 28, 'feeding', { size: 16, weight: 700, anchor: 'middle' });
  b += arrow(cx[2], ys + H + 4, cx[2], 594, { w: 3.2 }) + arrow(cx[3], ys + H + 4, cx[3], 594, { w: 3.2 });
  b += curve(`M${xs[1] - 4},635 L${cx[0]},635 L${cx[0]},${ys + H + 8}`, C.olive, 'ahO');
  b += t(cx[0] - 60, 690, 'decomposition (ammonification): bacteria and fungi', { size: 16, weight: 700, fill: C.olive });
  add('05-nitrogen-cycle',
    svg(900, 720, 'The nitrogen cycle', b),
    'Nitrogen gas is fixed into ammonium by bacteria in root nodules and soil and by the Haber process; lightning forms nitrogen oxides that become nitrate. Nitrifying bacteria turn ammonium into nitrite then nitrate, which roots take up; plants make proteins and animals eat plants. Dead matter and urea are decomposed back to ammonium. Denitrifying bacteria in oxygen-poor soil return nitrate to nitrogen gas.',
    'Fixation brings nitrogen in, nitrification makes nitrate, denitrification sends it back to the air.',
    '## The nitrogen cycle');
}

// 06 Rock cycle
{
  let b = '';
  const bx = (cx, cy, l1, l2, fill, edge) => box(cx - 115, cy - 42, 230, 84, l1, l2, fill, edge, 21);
  b += bx(450, 165, 'Sediments', 'broken rock fragments', C.sand, C.olive);
  b += bx(740, 360, 'Sedimentary rock', 'sandstone, limestone, shale', '#efe2c4', C.olive);
  b += bx(740, 610, 'Metamorphic rock', 'marble, slate', '#d9d4e6', C.ink);
  b += bx(160, 610, 'Magma', 'molten rock', '#f3c2a3', C.rust);
  b += bx(160, 360, 'Igneous rock', 'granite, basalt', '#d6d6d6', C.ink);
  b += arrow(215, 315, 335, 205, { w: 3.5 }) + tl(40, 225, ['weathering,', 'erosion and', 'transport'], { size: 17, weight: 700 }, 21) + t(40, 290, 'Sun and gravity', { size: 15, fill: C.muted });
  b += arrow(565, 205, 685, 315, { w: 3.5 }) + tl(660, 215, ['deposition,', 'compaction and', 'cementation'], { size: 17, weight: 700 }, 21);
  b += arrow(740, 405, 740, 565, { w: 3.5 }) + t(728, 470, 'heat and pressure', { size: 17, weight: 700, anchor: 'end' }) + t(728, 492, 'without melting', { size: 15, anchor: 'end', fill: C.muted });
  b += arrow(622, 610, 278, 610, { w: 3.5, color: C.rust, marker: 'ahR' }) + t(450, 596, 'melting', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + t(450, 636, 'Earth’s internal heat', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(160, 565, 160, 405, { w: 3.5 }) + t(172, 470, 'cooling and', { size: 17, weight: 700 }) + t(172, 492, 'crystallising', { size: 17, weight: 700 });
  // centre facts
  b += panel(305, 270, 255, 230, '#fff');
  b += t(432, 302, 'Igneous crystals', { size: 18, weight: 700, anchor: 'middle' });
  b += tl(322, 332, ['Intrusive (granite): slow', 'cooling underground,', 'large crystals.', 'Extrusive (basalt): fast', 'cooling at the surface,', 'small crystals.'], { size: 15, fill: C.muted }, 20);
  b += t(450, 700, 'Uplift brings buried rock back to the surface to be weathered.', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(450, 726, 'Limestone → marble and shale → slate are metamorphic changes.', { size: 16, anchor: 'middle', fill: C.muted });
  add('06-rock-cycle',
    svg(900, 750, 'The rock cycle', b),
    'Igneous rock is weathered, eroded and transported to form sediments, which are deposited, compacted and cemented into sedimentary rock. Heat and pressure without melting turn it into metamorphic rock, which melts to magma; magma cools and crystallises into igneous rock. Intrusive granite cools slowly with large crystals; extrusive basalt cools fast with small crystals.',
    'Rocks change from one type to another, driven by Earth’s internal heat and by the Sun and gravity.',
    '## The rock cycle');
}

// 07 Eutrophication
{
  const steps = [
    ['Nitrate runs off fields', 'Excess fertiliser is washed into rivers and lakes.'],
    ['Algae grow fast', 'They cover the water surface.'],
    ['Water plants die', 'Light cannot reach them.'],
    ['Decomposers use up oxygen', 'They respire as they break down dead matter.'],
    ['Fish and other animals die', 'There is too little dissolved oxygen.'],
  ];
  const rh = 112, g = 12, y0 = 110;
  let b = '';
  steps.forEach(([h, d], i) => {
    const y = y0 + i * (rh + g), wy = y + 34;
    b += panel(30, y, 840, rh);
    b += `<rect x="50" y="${wy}" width="300" height="${rh - 46}" fill="${C.teal}"/>` + `<line x1="50" y1="${wy}" x2="350" y2="${wy}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
    if (i === 0) b += `<path d="M50,${wy} L50,${y + 14} L150,${y + 14} L180,${wy} Z" fill="${C.grass}"/>` + arrow(140, y + 24, 200, wy + 14, { w: 3, color: C.olive, marker: 'ahO' }) + t(210, y + 26, 'nitrate', { size: 15, fill: C.olive, weight: 700 });
    if (i >= 1) b += `<rect x="50" y="${wy - 6}" width="300" height="12" fill="${C.grass}"/>`;
    const plant = (x, dead) => path(`M${x},${y + rh - 12} q-8,-20 0,-36 M${x},${y + rh - 12} q8,-16 2,-30`, { stroke: dead ? '#8a6d4a' : C.grass, w: 3 });
    if (i <= 1) b += plant(110, false) + plant(240, false);
    if (i >= 2) b += plant(110, true) + plant(240, true);
    if (i === 3) [[150, 70], [175, 80], [200, 66], [290, 74], [310, 82]].forEach(([x, dy]) => { b += `<circle cx="${x}" cy="${y + dy}" r="4" fill="${C.rust}"/>`; });
    const fish = (x, fy, dead) => `<g transform="translate(${x},${fy}) ${dead ? 'scale(1,-1)' : ''}"><ellipse cx="0" cy="0" rx="16" ry="8" fill="${dead ? '#c9c9c9' : C.mustard}" stroke="${C.ink}" stroke-width="2"/><path d="M14,0 L26,-8 L26,8 Z" fill="${dead ? '#c9c9c9' : C.mustard}" stroke="${C.ink}" stroke-width="2"/></g>`;
    b += i < 4 ? fish(300, wy + 34, false) : fish(300, wy + 14, true);
    // oxygen gauge
    const o2 = [1, 1, 0.9, 0.45, 0.12][i];
    b += `<rect x="372" y="${y + 20}" width="18" height="${rh - 40}" rx="4" fill="#fff" stroke="${C.ink}" stroke-width="2"/>` + `<rect x="372" y="${y + 20 + (rh - 40) * (1 - o2)}" width="18" height="${(rh - 40) * o2}" rx="4" fill="${C.tealDark}"/>` + t(381, y + rh - 4, 'O₂', { size: 15, anchor: 'middle', weight: 600 });
    b += badge(440, y + rh / 2, 22, String(i + 1), i === 3 ? C.mustard : C.cream);
    b += t(480, y + 48, h, { size: 21, weight: 700 }) + t(480, y + 78, d, { size: 17, fill: C.muted });
  });
  add('07-eutrophication',
    svg(900, 740, 'Eutrophication step by step', b),
    'Five lake sections in order: nitrate from fertiliser runs off a field; algae grow fast and cover the surface; light cannot reach water plants, which die; decomposers respire as they break down dead matter and use up dissolved oxygen; fish and other animals die. An oxygen gauge falls over the last steps.',
    'The fish die from lack of oxygen used up by decomposers, not from the fertiliser itself.',
    '## Human impacts on the cycles');
}
