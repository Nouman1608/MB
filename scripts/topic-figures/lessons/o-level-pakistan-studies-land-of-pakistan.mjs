import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-pakistan-studies-land-of-pakistan';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText.replace(/(viewBox="0 0 \d+ |height=")([\d.]+)/g, (m, a, n) => a + Math.round(+n)), alt, caption, after });

// ---- local helpers ----
const CW = 0.5; // approx. average Inter glyph width as a share of font size
const wrap = (s, size, width) => {
  const max = Math.floor(width / (size * CW)); const out = [''];
  for (const w of s.split(' ')) { const cur = out[out.length - 1]; if (cur && (cur + ' ' + w).length > max) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w; }
  return out;
};
const para = (x, y, s, width, opts = {}, lh) => tl(x, y, wrap(s, opts.size || 17, width), opts, lh || (opts.size || 17) * 1.3);
const lines = (s, size, width) => wrap(s, size, width).length;
const rect = (x, y, w, h, fill, edge = C.ink, sw = 2.5, rx = 12, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}" ${extra}/>`;
const box = (x, y, w, h, fill = '#ffffff', edge = C.panelEdge) => rect(x, y, w, h, fill, edge, 2.5, 12);
// Box with bold head and wrapped body, returns svg; height computed by caller via boxH
const boxH = (head, body, w, size = 17) => (head ? 34 : 14) + (body ? lines(body, size, w - 32) * (size * 1.3) : 0) + 14;
const tbox = (x, y, w, head, body, { fill = '#ffffff', edge = C.panelEdge, size = 17, headColor = C.ink, h } = {}) => {
  const hh = h || boxH(head, body, w, size);
  return box(x, y, w, hh, fill, edge) + (head ? t(x + 16, y + 28, head, { size: 18, weight: 700, fill: headColor }) : '') +
    (body ? para(x + 16, y + (head ? 54 : 30), body, w - 32, { size, fill: head ? C.muted : C.ink }, size * 1.3) : '');
};
// bullet list: returns { svg, h }
const blist = (x, y, items, width, { size = 17, color = C.ink, dot = C.tealDark, gap = 10, lh } = {}) => {
  let s = '', yy = y; const L = lh || size * 1.3;
  items.forEach((it) => { const ls = wrap(it, size, width - 22); s += `<circle cx="${x + 6}" cy="${yy - size * 0.33}" r="5" fill="${dot}"/>` + tl(x + 22, yy, ls, { size, fill: color }, L); yy += ls.length * L + gap; });
  return { svg: s, h: yy - y };
};

// 01 Section 1 as foundation of Paper 2
{
  const secs = ['2 Natural resources', '3 Power', '4 Agriculture', '5 Industry', '6 Trade', '7 Transport and telecoms', '8 Population and employment'];
  let b = '';
  const bw = 112, gap = 6, x0 = 30 + (840 - (7 * bw + 6 * gap)) / 2;
  secs.forEach((s, i) => {
    const x = x0 + i * (bw + gap); const [n, ...rest] = s.split(' ');
    b += rect(x, 150, bw, 150, i % 2 ? C.tealLight : '#ffffff', C.ink, 2.5, 8) + t(x + bw / 2, 190, n, { size: 26, weight: 700, anchor: 'middle', fill: C.tealDark }) +
      tl(x + bw / 2, 228, wrap(rest.join(' '), 16, bw - 12), { size: 16, anchor: 'middle', weight: 600 }, 20);
  });
  b += t(450, 134, 'Paper 2: The Environment of Pakistan', { size: 19, weight: 700, anchor: 'middle' });
  b += rect(30, 312, 840, 120, C.mustard, C.ink, 3, 12) + t(450, 354, 'Section 1: The Land of Pakistan', { size: 23, weight: 700, anchor: 'middle' }) +
    t(450, 386, 'location · administrative areas · topography · climate', { size: 18, anchor: 'middle' }) + t(450, 414, 'the physical foundation that later sections use as context', { size: 16, anchor: 'middle', fill: C.ink, italic: true });
  add('01-section-1-foundation',
    svg(900, 454, 'Section 1 underpins all of Paper 2', b),
    'Section 1, The Land of Pakistan, is drawn as the base supporting the other seven sections of Paper 2, from natural resources to population and employment. Its location, administrative areas, topography and climate recur as context throughout.',
    'Location, topography and climate recur as context in every later Paper 2 section.',
    '## Where this fits in 2059');
}

// 02 Paper 2 format
{
  let b = panel(30, 110, 840, 150) + t(60, 152, 'Paper 2', { size: 24, weight: 700 });
  const stats = [['1 h 30 min', 'time'], ['75 marks', '50% of the qualification'], ['3 from 5', 'questions answered']];
  stats.forEach(([a, s], i) => { const x = 60 + i * 270; b += t(x, 202, a, { size: 26, weight: 700, fill: C.tealDark }) + t(x, 230, s, { size: 16, fill: C.muted }); });
  b += t(450, 296, 'Each question: 25 marks in four parts, built around maps, graphs, photographs and other resources', { size: 17, anchor: 'middle', weight: 600 });
  const parts = ['(a)', '(b)', '(c)', '(d)'];
  parts.forEach((p, i) => {
    const x = 60 + i * 200, w = 180;
    b += rect(x, 316, w, 90, i === 3 ? C.mustard : C.tealLight, C.ink, 2.5, 12) + t(x + w / 2, 356, p, { size: 26, weight: 700, anchor: 'middle' }) +
      t(x + w / 2, 388, i === 3 ? 'tests analysis' : 'resource-based', { size: 16, anchor: 'middle', fill: i === 3 ? C.ink : C.muted, weight: i === 3 ? 700 : 400 });
    if (i < 3) b += arrow(x + w + 2, 361, x + w + 18, 361, { w: 3 });
  });
  b += panel(30, 430, 840, 110, C.cream, C.olive) + t(60, 468, 'For Section 1', { size: 19, weight: 700 }) +
    t(60, 498, 'Map recall is tested visually as often as in writing: practise locating every named', { size: 17 }) +
    t(60, 522, 'landform, river, desert and city on a blank outline map.', { size: 17 });
  add('02-paper-2-format',
    svg(900, 560, 'How Paper 2 is examined', b),
    'Paper 2 lasts 1 hour 30 minutes for 75 marks, half the qualification. Candidates answer three of five questions, each worth 25 marks in parts (a) to (d) based on resources; part (d) tests analysis.',
    'Three 25-mark questions, each ending in an analysis part (d).',
    '## How to approach it');
}

// 03 Reference lines
{
  const L = 190, R = 780, T = 150, Bt = 430;
  const lon = [[64, 290], [70, 485], [76, 680]];
  const lat = [['36°N', 190], ['30°N', 290], ['Tropic of Cancer', 400]];
  let b = `<rect x="${L}" y="${T}" width="${R - L}" height="${Bt - T}" fill="#ffffff" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
  lon.forEach(([d, x]) => { b += `<line x1="${x}" y1="${T}" x2="${x}" y2="${Bt}" stroke="${C.blue}" stroke-width="2.5" stroke-dasharray="9 6"/>` + t(x, T - 12, `${d}°E`, { size: 19, weight: 700, anchor: 'middle', fill: C.blue }); });
  lat.forEach(([s, y], i) => { b += `<line x1="${L}" y1="${y}" x2="${R}" y2="${y}" stroke="${i === 2 ? C.rust : C.ink}" stroke-width="${i === 2 ? 3.5 : 2.5}" ${i === 2 ? '' : 'stroke-dasharray="9 6"'}/>` + tl(L - 12, y + (i === 2 ? -4 : 6), wrap(s, 17, 120), { size: 17, weight: 700, anchor: 'end', fill: i === 2 ? C.rust : C.ink }, 20); });
  b += arrow(840, 300, 840, 170, { w: 4 }) + t(840, 330, 'N', { size: 22, weight: 700, anchor: 'middle' });
  b += arrow(485, 440, 485, 486, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + t(505, 476, 'Arabian Sea to the south', { size: 18, weight: 700, fill: C.tealDark });
  b += `<defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${C.cream}"/><stop offset="1" stop-color="${C.tealLight}"/></linearGradient></defs>`;
  b += rect(30, 510, 840, 110, 'url(#cg)', C.panelEdge, 2.5, 14);
  b += t(60, 550, 'Range of climates within this frame', { size: 19, weight: 700 });
  b += t(60, 586, 'tropical in the south', { size: 18, fill: C.rust, weight: 600 }) + arrow(270, 580, 560, 580, { w: 3 }) + t(580, 586, 'temperate and alpine in the', { size: 18, fill: C.tealDark, weight: 600 }) + t(580, 608, 'northern mountains', { size: 18, fill: C.tealDark, weight: 600 });
  add('03-reference-lines',
    svg(900, 640, 'Lines that frame Pakistan’s position', b, 'Schematic grid: not to scale, no borders shown'),
    'A schematic grid of the reference lines candidates must place on a map: latitudes 36°N and 30°N, the Tropic of Cancer further south, and longitudes 64°E, 70°E and 76°E, with the Arabian Sea to the south. Below, a bar shows climate ranging from tropical in the south to temperate and alpine in the northern mountains.',
    'Learn the five reference lines and the Tropic of Cancer before placing any feature.',
    '## Locating Pakistan');
}

// 04 Relief families and rivers
{
  const cols = [
    ['Mountain ranges', 'north and west', ['Hindu Kush', 'Karakoram', 'Himalaya', 'Sulaiman Range', 'Safed Koh'], 'm'],
    ['Plateaux', '', ['Balochistan Plateau', 'Potwar Plateau', 'Salt Range'], 'p'],
    ['Deserts', 'with the river plains of the south', ['Thar', 'Thal', 'Kharan'], 'd'],
  ];
  let b = '';
  cols.forEach(([h, sub, items, k], i) => {
    const x = 30 + i * 285, w = 270, cx = x + w / 2, gy = 220;
    b += panel(x, 110, w, 380);
    if (k === 'm') b += `<path d="M${cx - 100},${gy} L${cx - 50},${gy - 80} L${cx - 20},${gy - 40} L${cx + 20},${gy - 95} L${cx + 100},${gy} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` + `<path d="M${cx + 6},${gy - 76} L${cx + 20},${gy - 95} L${cx + 34},${gy - 76} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>`;
    if (k === 'p') b += `<path d="M${cx - 100},${gy} L${cx - 70},${gy - 60} L${cx + 70},${gy - 60} L${cx + 100},${gy} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
    if (k === 'd') b += `<path d="M${cx - 100},${gy} Q${cx - 60},${gy - 50} ${cx - 20},${gy} Q${cx + 20},${gy - 34} ${cx + 60},${gy} Q${cx + 80},${gy - 20} ${cx + 100},${gy} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
    b += `<line x1="${cx - 110}" y1="${gy}" x2="${cx + 110}" y2="${gy}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += t(cx, 262, h, { size: 22, weight: 700, anchor: 'middle' }) + (sub ? t(cx, 286, sub, { size: 16, anchor: 'middle', fill: C.muted, italic: true }) : '');
    items.forEach((s, j) => { b += rect(x + 30, 304 + j * 36, w - 60, 30, i === 0 ? C.tealLight : i === 1 ? C.cream : C.sand, 'none', 0, 15) + t(cx, 325 + j * 36, s, { size: 17, weight: 600, anchor: 'middle' }); });
  });
  // rivers
  const y = 520;
  b += panel(30, y, 840, 230) + t(60, y + 38, 'Rivers', { size: 22, weight: 700, fill: C.blue });
  const tribs = ['Jhelum', 'Chenab', 'Ravi', 'Sutlej'];
  tribs.forEach((s, i) => { const x = 80 + i * 150; b += rect(x, y + 64, 126, 40, '#dfe7f2', C.blue, 2, 10) + t(x + 63, y + 90, s, { size: 18, weight: 700, anchor: 'middle' }) + arrow(x + 63, y + 106, 290 + (i - 1.5) * 50, y + 150, { color: C.blue, w: 3 }); });
  b += rect(180, y + 156, 240, 50, C.blue, C.ink, 2.5, 12) + t(300, y + 188, 'Indus', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += t(250, y + 132, '', {});
  b += t(560, y + 160, 'tributaries feed the Indus,', { size: 16, fill: C.muted, anchor: 'start' }) + t(560, y + 180, 'which feeds the southern plains', { size: 16, fill: C.muted });
  b += t(700, y + 80, 'Also named:', { size: 16, weight: 700, anchor: 'start' }) + t(700, y + 102, 'Kabul, Hab, Dasht', { size: 17, anchor: 'start' });
  add('04-relief-and-rivers',
    svg(900, y + 250, 'Mountains, plateaux, deserts and rivers', b),
    'Three panels group the named landforms: mountain ranges of the north and west (Hindu Kush, Karakoram, Himalaya, Sulaiman Range, Safed Koh), plateaux (Balochistan, Potwar, Salt Range) and deserts (Thar, Thal, Kharan). Below, the Jhelum, Chenab, Ravi and Sutlej feed the Indus; the Kabul, Hab and Dasht are also named.',
    'Every named feature belongs to one of four families: learn them by family, then locate them.',
    '## Topography: mountains, plains, deserts');
}

// 05 Topography and human activity
{
  let b = '';
  const side = (x, head, color, art, items) => panel(x, 110, 410, 410, '#ffffff', color) + t(x + 205, 148, head, { size: 22, weight: 700, anchor: 'middle', fill: color }) + art + blist(x + 24, 400, items, 362, { dot: color, size: 18 }).svg;
  const mtn = `<path d="M50,330 L120,200 L170,260 L240,170 L300,250 L330,215 L420,330 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` +
    `<path d="M150,330 Q175,290 205,300 Q235,310 260,330 Z" fill="#a9c48f" stroke="${C.ink}" stroke-width="2"/>` +
    [180, 205, 228].map((x) => `<rect x="${x}" y="${312}" width="14" height="12" fill="#ffffff" stroke="${C.ink}" stroke-width="1.5"/>`).join('') +
    path('M60,330 Q120,306 160,322 Q210,340 260,318 Q300,304 410,330', { stroke: C.rust, w: 4, extra: 'stroke-dasharray="10 6"' }) +
    t(235, 362, 'route winds along the valley floor', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  const plain = `<rect x="480" y="300" width="370" height="40" fill="#a9c48f" stroke="${C.ink}" stroke-width="2.5"/>` +
    [0, 1, 2, 3, 4, 5].map((i) => `<line x1="${495 + i * 60}" y1="300" x2="${515 + i * 60}" y2="340" stroke="${C.grass}" stroke-width="2"/>`).join('') +
    [500, 590, 680, 770].map((x) => `<rect x="${x}" y="${270}" width="26" height="22" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/><path d="M${x - 3},${270} L${x + 13},${258} L${x + 29},${270} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.5"/>`).join('') +
    path('M480,296 L850,296', { stroke: C.rust, w: 4 }) +
    t(665, 230, 'straight routes and evenly spread', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 }) + t(665, 250, 'settlement on flat land', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 }) +
    t(665, 366, 'farmland on the plain', { size: 16, anchor: 'middle', fill: '#3d5f2a', weight: 600 });
  b += side(30, 'Steep mountain terrain', C.rust, mtn, ['Road and rail are difficult and expensive to build', 'Settlement concentrated in valleys', 'Routes follow valleys and passes']);
  b += side(460, 'Flatter river plains', C.tealDark, plain, ['Denser transport networks', 'Supports agriculture']);
  add('05-topography-and-people',
    svg(900, 540, 'How relief shapes land use and transport', b),
    'Two sketches compare relief. In steep mountains, settlement sits in a valley and a route winds along the valley floor because road and rail are hard and costly to build. On the flat plains, farmland, straight routes and evenly spread houses cover the land.',
    'Steep land funnels routes into valleys; flat plains allow dense networks and farming.',
    '## Topography: mountains, plains, deserts');
}

// 06 Climate and people
{
  let b = panel(30, 110, 840, 150, C.tealLight, C.tealDark) + t(60, 150, 'The monsoon', { size: 22, weight: 700, fill: C.tealDark }) +
    t(60, 182, 'Seasonal reversal of wind direction and pressure systems', { size: 17 }) +
    t(60, 212, 'brings the bulk of annual rainfall to much of the country:', { size: 17 }) +
    t(60, 240, 'the most consequential climatic feature for agriculture and water supply.', { size: 17, weight: 700 });
  const zones = ['Arid', 'Semi-arid', 'Humid', 'Highland'];
  zones.forEach((z, i) => { const x = 30 + i * 213; b += rect(x, 280, 200, 50, i === 3 ? '#dfe7f2' : i === 0 ? C.sand : i === 1 ? C.cream : C.teal, C.ink, 2, 10) + t(x + 100, 312, z, { size: 19, weight: 700, anchor: 'middle' }); });
  b += t(450, 358, 'Climate zones, each with distinct seasons', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const col = (x, head, color, fill, haz) => panel(x, 380, 410, 170, fill, color) + t(x + 24, 418, head, { size: 21, weight: 700, fill: color }) + blist(x + 24, 456, haz, 362, { dot: color, size: 18 }).svg;
  b += col(30, 'Highland north', C.blue, '#ffffff', ['Low temperatures', 'Ice and snow shape the lives of mountain communities']);
  b += col(460, 'Lowlands', C.rust, '#ffffff', ['Drought and water shortage', 'Flooding from heavy rain storms']);
  b += arrow(235, 554, 400, 594, { w: 3.5 }) + arrow(665, 554, 500, 594, { w: 3.5 });
  b += rect(220, 600, 460, 80, C.mustard, C.ink, 3, 12) + t(450, 634, 'Effect on people', { size: 20, weight: 700, anchor: 'middle' }) + t(450, 662, 'farming · industry · water supply · daily life', { size: 17, anchor: 'middle' });
  add('06-climate-and-people',
    svg(900, 700, 'Climate: from pattern to people', b),
    'The monsoon, caused by a seasonal reversal of winds and pressure, brings most of the rainfall. Below are the arid, semi-arid, humid and highland zones, then the hazards of the highland north (low temperatures, ice and snow) and the lowlands (drought, water shortage and flooding), all leading to effects on farming, industry, water supply and daily life.',
    'Every climate answer should end with the effect on people.',
    '## Climate zones and their human impact');
}

// 07 Answer chain
{
  const steps = [
    ['Named feature', 'Karakoram and Himalaya', C.tealLight],
    ['Physical constraint', 'Steep, high-altitude terrain makes road and rail difficult and expensive', '#ffffff'],
    ['Human consequence', 'Routes concentrated along valleys and passes, not a dense, evenly spread network', C.mustard],
  ];
  let b = t(450, 128, 'Question: how has the topography of northern Pakistan influenced transport?', { size: 17, anchor: 'middle', italic: true, fill: C.muted });
  steps.forEach(([h, s, f], i) => {
    const x = 30 + i * 290, w = 260;
    b += rect(x, 150, w, 236, f, C.ink, 2.5, 14) + badge(x + w / 2, 190, 22, String(i + 1), C.cream) + t(x + w / 2, 244, h, { size: 20, weight: 700, anchor: 'middle' }) + para(x + 22, 284, s, w - 44, { size: 18 }, 24);
    if (i < 2) b += arrow(x + w + 3, 268, x + 286, 268, { w: 4 });
  });
  b += panel(30, 410, 840, 84, C.cream, C.olive) + t(450, 444, 'Avoid a vague answer about “harsh climate”: name the climate zone,', { size: 17, anchor: 'middle', weight: 600 }) +
    t(450, 470, 'the season and the precise human effect.', { size: 17, anchor: 'middle', weight: 600 });
  add('07-answer-chain',
    svg(900, 514, 'Feature, constraint, consequence', b),
    'Three linked boxes show the structure of a strong answer: a named feature (the Karakoram and Himalaya), the physical constraint (steep, high terrain makes road and rail hard and costly) and the human consequence (routes concentrated along valleys and passes).',
    'Move from a named feature to a physical constraint to a human consequence.',
    '## Worked example');
}
