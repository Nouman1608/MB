import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-geography-extreme-environments-managing-extreme-environments-revision-notes';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const box = (x, y, w, h, head, lines = [], { fill = C.panel, edge = C.panelEdge, size = 19, sub = 16, anchor = 'start' } = {}) => {
  const tx = anchor === 'middle' ? x + w / 2 : x + 20;
  return panel(x, y, w, h, fill, edge) + t(tx, y + 32, head, { size, weight: 700, anchor }) + tl(tx, y + 58, lines, { size: sub, fill: C.muted, anchor }, sub * 1.3);
};

// 01 Pressures on extreme environments
{
  const acts = ['Resource extraction', 'Tourism', 'Irrigation agriculture', 'Infrastructure', 'Research stations'];
  let b = box(30, 110, 410, 98, 'Valuable resources', ['oil and gas in the Arctic; copper and', 'lithium in the Atacama; sunshine for solar'], { fill: C.cream, edge: C.olive }) +
    box(460, 110, 410, 98, 'Remoteness and scenery', ['attract tourists and scientists'], { fill: C.cream, edge: C.olive });
  b += t(165, 268, 'Activities', { size: 20, weight: 700, anchor: 'middle' });
  acts.forEach((a, i) => {
    const y = 285 + i * 72;
    b += `<rect x="30" y="${y}" width="270" height="58" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + t(165, y + 36, a, { size: 18, weight: 600, anchor: 'middle' }) +
      arrow(302, y + 29, 378, 470, { w: 3 });
  });
  b += arrow(235, 210, 235, 248, { w: 3 }) + arrow(560, 210, 300, 260, { w: 3 });
  b += panel(385, 380, 210, 200) + t(490, 415, 'Each brings', { size: 19, weight: 700, anchor: 'middle' }) +
    tl(490, 455, ['people', 'roads', 'waste', 'water demand'], { size: 19, anchor: 'middle', weight: 600, fill: C.rust }, 30);
  b += arrow(597, 480, 640, 480, { w: 4 });
  b += panel(645, 340, 225, 270, C.teal, C.tealDark) + t(757, 378, 'Fragile system', { size: 20, weight: 700, anchor: 'middle' }) +
    tl(757, 414, ['cannot absorb', 'much disturbance'], { size: 17, anchor: 'middle' }, 23) +
    tl(757, 490, ['low productivity', 'and harsh', 'conditions mean', 'damage can last'], { size: 16, anchor: 'middle', fill: C.ink }, 22);
  add('01-pressures-on-extreme-environments',
    svg(900, 660, 'Why pressure builds on extreme places', b),
    'Valuable resources and remoteness or scenery draw five activities: resource extraction, tourism, irrigation agriculture, infrastructure and research stations. Each brings people, roads, waste and water demand into a fragile system that cannot absorb much disturbance.',
    'Resources and scenery draw people in; fragile systems cannot absorb what they bring.',
    '## Pressures');
}

// 02 Desertification: climate + people
{
  let b = panel(30, 150, 330, 90, C.cream, C.olive) + t(195, 204, 'Climate variability', { size: 21, weight: 700, anchor: 'middle' });
  b += panel(30, 300, 330, 300, C.tealLight, C.tealDark) + t(50, 336, 'Human activity', { size: 21, weight: 700 }) +
    [['overgrazing'], ['over-cultivation'], ['removing woody', 'vegetation for fuel'], ['poor irrigation that', 'salinises soil']].reduce((acc, ls) => {
      acc.s += t(52, acc.y, '•', { size: 18, weight: 700 }) + tl(72, acc.y, ls, { size: 18 }, 24); acc.y += ls.length * 24 + 16; return acc;
    }, { s: '', y: 382 }).s;
  b += `<circle cx="450" cy="360" r="40" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, 370, '+', { size: 34, weight: 700, anchor: 'middle' }) +
    t(450, 430, 'interact', { size: 17, weight: 600, anchor: 'middle', fill: C.muted }) +
    arrow(362, 200, 418, 335, { w: 3.5 }) + arrow(362, 450, 418, 385, { w: 3.5 }) + arrow(492, 360, 548, 360, { w: 5 });
  b += panel(555, 230, 315, 260, C.rock, C.rockDark) + t(712, 275, 'Desertification', { size: 23, weight: 700, anchor: 'middle' }) +
    tl(712, 315, ['land degradation', 'in drylands'], { size: 19, anchor: 'middle' }, 26) +
    path('M600,420 q30,-18 60,0 t60,0 t60,0 t60,0', { stroke: C.rockDark, w: 3 }) +
    path('M600,450 q30,-18 60,0 t60,0 t60,0 t60,0', { stroke: C.rockDark, w: 3 });
  b += `<rect x="555" y="515" width="315" height="85" rx="12" fill="#ffffff" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="8 6"/>` +
    t(712, 550, 'Not: a desert advancing', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + t(712, 576, 'on its own', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  add('02-desertification-causes',
    svg(900, 630, 'Desertification: people and climate together', b),
    'Climate variability and human activity (overgrazing, over-cultivation, removing woody vegetation for fuel and poor irrigation that salinises soil) interact to cause desertification, the degradation of land in drylands. It is not simply a desert advancing on its own.',
    'Desertification needs both climate variability and human misuse of dryland.',
    '## Opportunities versus risks');
}

// 03 Trans-Alaska Pipeline on permafrost
{
  const G = 470;
  const support = (x) => `<rect x="${x - 9}" y="300" width="18" height="${G - 300 + 120}" fill="${C.muted}" stroke="${C.ink}" stroke-width="2.5"/>` +
    // heat pipes either side with radiator fins
    [x - 22, x + 22].map((hx) => `<line x1="${hx}" y1="210" x2="${hx}" y2="${G + 130}" stroke="${C.blue}" stroke-width="5"/>` +
      [0, 1, 2, 3, 4].map((k) => `<line x1="${hx - 11}" y1="${215 + k * 9}" x2="${hx + 11}" y2="${215 + k * 9}" stroke="${C.blue}" stroke-width="3"/>`).join('')).join('');
  const ice = [[80, 540], [160, 580], [260, 530], [360, 590], [470, 545], [580, 585], [90, 600], [430, 610], [530, 615]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="26" ry="7" fill="#ffffff" stroke="${C.blue}" stroke-width="1.5"/>`).join('');
  const caribou = (x, y) => `<g fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round">` +
    `<ellipse cx="${x}" cy="${y}" rx="44" ry="20"/><path d="M${x + 34},${y - 10} l26,-26 l16,6 l-6,12 l-20,18 z"/>` +
    `<path d="M${x - 30},${y + 14} l-4,38 M${x - 16},${y + 16} l2,36 M${x + 18},${y + 16} l-2,36 M${x + 32},${y + 12} l4,40" fill="none"/>` +
    `<path d="M${x + 62},${y - 34} l-6,-22 m6,22 l14,-16 m-20,-2 l-10,-8" fill="none" stroke="${C.olive}" stroke-width="3"/></g>`;
  let b = panel(30, 110, 600, 560) +
    `<rect x="32" y="${G}" width="596" height="196" fill="${C.rock}"/>` +
    `<rect x="32" y="${G}" width="596" height="34" fill="${C.sand}"/>` + ice +
    `<line x1="32" y1="${G}" x2="628" y2="${G}" stroke="${C.ink}" stroke-width="3"/>` +
    support(170) + support(470) +
    `<rect x="130" y="290" width="380" height="14" fill="${C.muted}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<circle cx="320" cy="262" r="30" fill="${C.rust}" stroke="${C.ink}" stroke-width="3.5"/><circle cx="320" cy="262" r="17" fill="${C.mustard}" opacity="0.9"/>` +
    caribou(310, 385) +
    t(360, 258, 'hot oil', { size: 18, weight: 700, fill: C.rust }) +
    t(330, 170, 'heat pipes (thermosyphons) on each support', { size: 17, weight: 700, anchor: 'middle', fill: C.blue }) +
    arrow(470 + 22 + 30, G + 110, 470 + 22 + 30, 300, { color: C.blue, w: 3, dash: '8 6' }) +
    t(538, 380, 'heat out', { size: 15, weight: 600, fill: C.blue }) + t(538, 398, 'in winter', { size: 15, weight: 600, fill: C.blue }) +
    t(320, 458, 'caribou pass under', { size: 15, weight: 600, anchor: 'middle', fill: C.ink }) +
    t(46, G + 24, 'active layer', { size: 15, weight: 600, fill: C.olive }) +
    t(330, G + 175, 'ice-rich permafrost kept frozen', { size: 18, weight: 700, anchor: 'middle', fill: C.ink });
  // plan inset
  let zz = 'M700,170'; for (let i = 0; i < 9; i++) zz += ` l${i % 2 ? -26 : 26},40`;
  b += panel(650, 110, 220, 560) + t(760, 145, 'Plan view', { size: 19, weight: 700, anchor: 'middle' }) +
    path(zz, { stroke: C.rust, w: 5 }) +
    `<circle cx="700" cy="170" r="8" fill="${C.ink}"/><circle cx="726" cy="530" r="8" fill="${C.ink}"/>` +
    tl(742, 176, ['Prudhoe Bay', '(Arctic coast)'], { size: 15, weight: 600 }, 18) +
    tl(752, 535, ['Valdez', '(port)'], { size: 15, weight: 600 }, 18) +
    tl(760, 590, ['zigzag flexes', 'with temperature and', 'ground movement'], { size: 15, anchor: 'middle', fill: C.muted }, 19);
  b += panel(30, 690, 840, 100, C.cream, C.olive) +
    t(55, 726, 'Problem: hot oil would thaw the permafrost and the ground would subside.', { size: 18, weight: 700 }) +
    t(55, 756, 'Works, but at high cost; the oil it carries adds to warming that threatens permafrost.', { size: 16.5, fill: C.muted });
  add('03-trans-alaska-pipeline',
    svg(900, 810, 'Engineering on permafrost: Trans-Alaska Pipeline', b),
    'Cross-section of the raised Trans-Alaska Pipeline. The hot oil pipe sits on a crossbeam between vertical supports fitted with heat pipes that carry heat out of the ground in winter, keeping ice-rich permafrost frozen. Caribou pass underneath. A plan view shows the zigzag route from Prudhoe Bay to Valdez.',
    'Raised supports and heat pipes keep the permafrost frozen beneath a hot-oil pipeline.',
    '### Engineering on permafrost: the Trans-Alaska Pipeline');
}

// 04 Why recovery is slow
{
  const chain = [
    ['Low productivity', 'and harsh conditions', C.tealLight],
    ['Slow regrowth', 'of vegetation and soils', C.teal],
    ['Damage lasts', 'for many years', C.cream],
  ];
  let b = '';
  chain.forEach(([h, s, f], i) => {
    const x = 30 + i * 290;
    b += `<rect x="${x}" y="115" width="260" height="100" rx="14" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` +
      t(x + 130, 157, h, { size: 21, weight: 700, anchor: 'middle' }) + t(x + 130, 186, s, { size: 16, anchor: 'middle', fill: C.muted });
    if (i < 2) b += arrow(x + 262, 165, x + 288, 165, { w: 4 });
  });
  const S = 360;
  const surf = `M40,${S} L250,${S} Q275,${S + 34} 300,${S} L380,${S} Q405,${S + 34} 430,${S} L860,${S}`;
  const thaw = `M40,${S + 80} L235,${S + 80} Q275,${S + 170} 315,${S + 80} L365,${S + 80} Q405,${S + 170} 445,${S + 80} L860,${S + 80}`;
  const plants = [70, 110, 150, 190, 480, 530, 580, 630, 680, 730, 780, 830].map((x) => path(`M${x},${S} l-6,-18 M${x},${S} l2,-22 M${x},${S} l8,-16`, { stroke: C.grass, w: 3 })).join('');
  b += panel(30, 245, 840, 330) + t(60, 285, 'Example: tyre tracks across tundra', { size: 20, weight: 700 }) +
    `<path d="${surf} L860,560 L40,560 Z" fill="${C.rock}"/>` +
    `<path d="${thaw} L860,560 L40,560 Z" fill="${C.tealLight}"/>` +
    path(surf, { stroke: C.ink, w: 3 }) + path(thaw, { stroke: C.blue, w: 3, extra: 'stroke-dasharray="9 6"' }) + plants +
    t(340, S - 40, 'ruts stay bare', { size: 16, weight: 600, anchor: 'middle', fill: C.rust }) +
    arrow(310, S - 34, 280, S + 8, { w: 2.5, color: C.rust, marker: 'ahR' }) + arrow(370, S - 34, 400, S + 8, { w: 2.5, color: C.rust, marker: 'ahR' }) +
    t(560, S + 60, 'thawed ground (active layer)', { size: 16, weight: 600, fill: C.olive }) +
    t(560, S + 135, 'frozen ground', { size: 16, weight: 600, fill: C.blue }) +
    tl(475, S + 172, ['disturbed ground thaws more deeply', 'under the ruts'], { size: 16, fill: C.blue }, 20);
  b += panel(30, 595, 840, 70, C.cream, C.olive) +
    t(450, 638, 'The short growing season limits regrowth, so tracks stay visible for many years.', { size: 17, weight: 600, anchor: 'middle' });
  add('04-why-recovery-is-slow',
    svg(900, 685, 'Why extreme environments recover slowly', b),
    'A chain from low productivity and harsh conditions to slow regrowth of vegetation and soils to long-lasting damage. Below, a tundra cross-section shows two tyre ruts that stay bare, with the ground beneath them thawing more deeply than the surrounding ground.',
    'Slow regrowth means damage, such as tyre tracks on tundra, can last for many years.',
    '## Why recovery is slow');
}
