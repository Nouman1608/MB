import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-pakistan-studies-population-and-employment';
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

// 01 Census growth
{
  const data = [[1951, 34], [1981, 84], [1998, 132], [2017, 208], [2023, 241.5]];
  const X = (y) => 140 + (y - 1951) * 9.6, base = 520, Y = (v) => base - v * 1.5;
  let b = '';
  [0, 50, 100, 150, 200, 250].forEach((v) => { b += `<line x1="100" y1="${Y(v)}" x2="860" y2="${Y(v)}" stroke="${C.panelEdge}" stroke-width="${v ? 1.5 : 3}"/>` + t(90, Y(v) + 6, String(v), { size: 15, anchor: 'end', fill: C.muted }); });
  b += t(40, 136, 'millions', { size: 16, fill: C.muted, weight: 600 });
  data.forEach(([yr, v], i) => {
    b += rect(X(yr) - 26, Y(v), 52, base - Y(v), i === 4 ? C.mustard : C.teal, C.ink, 2, 4) + t(X(yr), Y(v) - 10, String(v), { size: 18, weight: 700, anchor: 'middle' }) + t(X(yr), base + 26, String(yr), { size: 17, weight: 700, anchor: 'middle' });
  });
  b += t(500, 580, 'Census year (bars placed on a true time scale)', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += rect(150, 160, 360, 84, C.cream, C.olive, 2.5, 12) + t(170, 194, '2017–2023: about 2.55% a year', { size: 18, weight: 700 }) + t(170, 222, 'one of the fastest rates in Asia', { size: 16, fill: C.muted });
  b += t(140, 612, 'Source: Pakistan Bureau of Statistics censuses (approximate)', { size: 15, fill: C.muted });
  add('01-census-growth',
    svg(900, 636, 'Pakistan’s population at each census', b),
    'A bar chart on a true time scale shows census populations of about 34 million in 1951, 84 million in 1981, 132 million in 1998, 208 million in 2017 and 241.5 million in 2023, with growth of about 2.55% a year between 2017 and 2023.',
    'Pakistan’s population has grown about sevenfold since 1951.',
    '## How fast has Pakistan’s population grown?');
}

// 02 Natural increase (schematic)
{
  const x0 = 120, x1 = 840, top = 150, base = 470;
  let b = `<line x1="${x0}" y1="${base}" x2="${x1}" y2="${base}" stroke="${C.ink}" stroke-width="3"/><line x1="${x0}" y1="${top - 10}" x2="${x0}" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
  const br = `M${x0},170 C350,175 600,215 ${x1},270`;
  const dr = `M${x0},260 C220,380 330,420 ${x1},440`;
  b += `<path d="${br} L${x1},440 C330,420 220,380 ${x0},260 Z" fill="${C.cream}" opacity="0.9"/>`;
  b += path(br, { stroke: C.blue, w: 5 }) + path(dr, { stroke: C.rust, w: 5 });
  b += t(140, 158, 'birth rate: fell much more slowly', { size: 17, weight: 700, fill: C.blue });
  b += t(260, 430, 'death rate: fell steeply', { size: 17, weight: 700, fill: C.rust });
  b += t(520, 340, 'NATURAL INCREASE', { size: 20, weight: 700, anchor: 'middle', fill: C.olive }) + t(520, 366, '= birth rate − death rate', { size: 17, anchor: 'middle', fill: C.olive });
  b += `<line x1="700" y1="${255}" x2="700" y2="${428}" stroke="${C.olive}" stroke-width="3" marker-start="url(#ahO)" marker-end="url(#ahO)"/>` + t(712, 330, 'gap stays', { size: 16, weight: 600, fill: C.olive }) + t(712, 350, 'wide', { size: 16, weight: 600, fill: C.olive });
  b += t(x0, base + 30, 'independence', { size: 16, fill: C.muted }) + t(x1, base + 30, 'today', { size: 16, anchor: 'end', fill: C.muted });
  b += t(70, 300, 'rate', { size: 16, fill: C.muted, anchor: 'middle' });
  b += panel(30, 530, 840, 94) + t(54, 566, 'Why the death rate fell', { size: 18, weight: 700 }) + t(54, 596, 'Vaccination, antibiotics and clean water spread after independence.', { size: 17, fill: C.muted });
  add('02-natural-increase',
    svg(900, 644, 'Why growth stayed high', b, 'Schematic: shapes show the trend, not measured values'),
    'A schematic graph from independence to today. The death rate falls steeply while the birth rate falls much more slowly, so the shaded gap between them, natural increase, stays wide.',
    'Deaths fell fast and births fell slowly, so natural increase stayed high.',
    '## How fast has Pakistan’s population grown?');
}

// 03 Pyramid (schematic)
{
  const cx = 330, rh = 30, top = 150;
  const widths = [60, 90, 120, 150, 175, 205, 240, 270, 300, 295, 290].map((w) => w * 0.85); // top (65+) to bottom (0-4), schematic
  let b = '';
  widths.forEach((w, i) => {
    const y = top + i * rh; const bulge = i >= 6 && i <= 8;
    b += rect(cx - w - 2, y, w, rh - 4, bulge ? C.teal : C.tealLight, C.ink, 1.5, 3) + rect(cx + 2, y, w * 0.97, rh - 4, bulge ? C.mustard : C.cream, C.ink, 1.5, 3);
  });
  b += t(cx - 130, top - 14, 'Males', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(cx + 130, top - 14, 'Females', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  b += t(44, top + 4, 'older', { size: 16, fill: C.muted, anchor: 'middle' }) + t(44, top + 11 * rh + 14, 'younger', { size: 16, fill: C.muted, anchor: 'middle' }) + arrow(44, top + 11 * rh - 10, 44, top + 20, { w: 2.5, color: C.muted });
  const note = (i, s1, s2, c = C.ink) => {
    const y = top + i * rh + 12, x2 = cx + 2 + widths[i] * 0.97 + 8;
    return `<line x1="${x2}" y1="${y}" x2="650" y2="${y}" stroke="${C.ink}" stroke-width="2"/>` + `<circle cx="${x2}" cy="${y}" r="4" fill="${C.ink}"/>` + t(660, y + 6, s1, { size: 18, weight: 700, fill: c }) + tl(660, y + 28, wrap(s2, 15, 220), { size: 15, fill: C.muted }, 19);
  };
  b += note(0, 'Narrow top', 'few over 65: lower life expectancy in the past');
  b += note(7, '15–29 bulge', 'a very large youth population entering work', C.olive);
  b += note(10, 'Broad base', 'a third or more under 15');
  b += note(3, 'Slightly more males', 'than females overall in census counts');
  b += t(cx, top + 11 * rh + 30, 'Bottom bar slightly narrower: birth rates beginning to fall', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const py = top + 11 * rh + 70;
  b += tbox(30, py, 410, 'Effects now', 'Heavy demand for schools, vaccinations and child health; high dependency ratio; millions reach working age each year.', { h: 140, fill: '#ffffff' });
  b += tbox(460, py, 410, 'Projected effects', 'A “demographic dividend” if the young are educated and employed; unemployment and unrest if not. Later, more elderly needing pensions and care.', { h: 140, fill: C.cream, edge: C.olive });
  add('03-population-pyramid',
    svg(900, py + 160, 'Reading Pakistan’s population pyramid', b, 'Schematic shape, not census data'),
    'A schematic pyramid with a broad base (a third or more under 15), a slightly narrower bottom bar as birth rates begin to fall, a bulge in the 15–29 groups and a narrow top with few over 65. Boxes below list effects now and projected effects, including the demographic dividend.',
    'A broad base and a youth bulge: a dividend if jobs are created, a problem if not.',
    '## What does Pakistan’s population pyramid show?');
}

// 04 Why growth continues
{
  const f = [
    ['Social', 'Early marriage; preference for sons; joint families'],
    ['Educational', 'Low female literacy, earlier marriage, less family planning'],
    ['Economic', 'Children work and support parents in old age; few pensions'],
    ['Political', 'Inconsistent funding and priority for family planning'],
    ['Medical', 'Infant and child deaths fall without an equal fall in births'],
  ];
  const cx = 450, cy = 330;
  let b = `<circle cx="${cx}" cy="${cy}" r="92" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy - 6, 'Continued', { size: 21, weight: 700, anchor: 'middle' }) + t(cx, cy + 20, 'growth', { size: 21, weight: 700, anchor: 'middle' });
  const pos = [[30, 120], [600, 120], [30, 400], [600, 400], [315, 470]];
  f.forEach(([h, s], i) => {
    const [x, y] = pos[i]; const w = 270, hh = 110;
    b += tbox(x, y, w, h, s, { h: hh, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark });
    const bx = x + w / 2, by = y + hh / 2; const dx = cx - bx, dy = cy - by, d = Math.hypot(dx, dy);
    const sx = bx + dx * (i === 4 ? 0.45 : 0.5) / 1, sy = by + dy * (i === 4 ? 0.45 : 0.5);
    b += arrow(i === 4 ? cx : (i % 2 ? x - 4 : x + w + 4), i === 4 ? y - 4 : by, cx - (dx / d) * 100, cy - (dy / d) * 100, { w: 3.5 });
  });
  const y2 = 610;
  b += tbox(30, y2, 410, 'Problems', 'Pressure on food, water and housing; overcrowded schools and hospitals; sprawl, traffic, pollution; too few jobs.', { h: 142, fill: '#f6e4d8', edge: C.rust, headColor: C.rust });
  b += tbox(460, y2, 410, 'Solutions to evaluate', 'Girls’ education; family planning via lady health workers; child health; old-age security; religious leaders’ support for spacing.', { h: 142, fill: C.cream, edge: C.olive, headColor: C.olive });
  add('04-growth-factors',
    svg(900, y2 + 162, 'Why Pakistan’s population keeps growing', b),
    'Five factors point to continued growth: social (early marriage, son preference), educational (low female literacy), economic (children as workers and old-age support), political (inconsistent family-planning priority) and medical (falling child deaths). Below are the problems growth causes and the solutions to evaluate.',
    'Five kinds of factor keep growth high; each solution needs money and time.',
    '## Why does population keep growing?');
}

// 05 Push and pull
{
  let b = '';
  b += panel(30, 110, 330, 300, '#eef3e6', C.grass) + t(195, 148, 'Countryside', { size: 22, weight: 700, anchor: 'middle', fill: '#3d5f2a' }) + t(195, 174, 'PUSH', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) +
    blist(54, 214, ['Landlessness, low farm wages', 'Floods and drought', 'Few schools or clinics'], 290, { dot: C.rust, size: 17 }).svg;
  b += panel(540, 110, 330, 300, '#dfe7f2', C.blue) + t(705, 148, 'City', { size: 22, weight: 700, anchor: 'middle', fill: C.blue }) + t(705, 174, 'PULL', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    blist(564, 214, ['Factory, construction and service jobs', 'Education', 'Health care'], 290, { dot: C.tealDark, size: 17 }).svg;
  b += arrow(366, 230, 532, 230, { w: 8 }) + t(450, 214, 'migrants', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 262, 'e.g. southern Punjab', { size: 15, anchor: 'middle', fill: C.muted }) + t(450, 280, 'and interior Sindh to', { size: 15, anchor: 'middle', fill: C.muted }) + t(450, 298, 'Karachi and Lahore', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(532, 350, 366, 350, { w: 4, color: C.olive, marker: 'ahO' }) + t(450, 338, 'remittances', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) + t(450, 376, 'houses, schooling,', { size: 15, anchor: 'middle', fill: C.muted }) + t(450, 394, 'farm inputs', { size: 15, anchor: 'middle', fill: C.muted });
  b += tbox(30, 430, 330, 'Effects in the countryside', 'Loss of young men; more work for women and the elderly.', { h: 120 });
  b += tbox(540, 430, 330, 'Effects in the city', 'Katchi abadis without water, drainage, power or legal title; congestion and pollution.', { h: 120 });
  b += panel(30, 570, 840, 120, C.cream, C.olive) + t(54, 604, 'Measures and their limits', { size: 19, weight: 700 }) +
    para(54, 632, 'Self-help housing such as Khuda ki Basti near Hyderabad; regularising katchi abadis with standpipes, drains and electricity. But upgrading can attract more migrants.', 790, { size: 17 }, 22);
  add('05-push-pull-migration',
    svg(900, 710, 'Rural–urban migration: push and pull', b),
    'Push factors in the countryside (landlessness, low wages, floods and drought, few services) and pull factors in the city (jobs, education, health care) drive migrants to Karachi and Lahore, while remittances flow back. Boxes show the effects on each side and the measures used, with their limits.',
    'People are pushed from the countryside and pulled to the city; money flows back.',
    '## Why do people migrate, and with what effects?');
}

// 06 Density by province
{
  const d = [['Punjab', 127.7, 620], ['Sindh', 55.7, 395], ['Khyber Pakhtunkhwa', 40.9, 400], ['Balochistan', 14.9, 43], ['Islamabad Capital Territory', 2.4, 2600]];
  const x0 = 290, sc = 420 / 2600;
  let b = t(x0, 132, 'Density, people per km² (approx., 2023)', { size: 17, weight: 700, fill: C.muted }) + t(860, 132, 'Population', { size: 17, weight: 700, anchor: 'end', fill: C.muted });
  d.forEach(([n, p, v], i) => {
    const y = 160 + i * 74;
    b += tl(30, y + 26, wrap(n, 18, 240), { size: 18, weight: 700 }, 20);
    b += rect(x0, y + 6, Math.max(4, v * sc), 36, i === 4 ? C.mustard : C.teal, C.ink, 2, 4) + t(x0 + Math.max(4, v * sc) + 10, y + 31, v.toLocaleString('en-GB'), { size: 18, weight: 700 });
    b += t(860, y + 31, `${p}m`, { size: 18, anchor: 'end', fill: C.muted });
  });
  const y = 160 + 5 * 74 + 10;
  b += panel(30, y, 840, 110, C.cream, C.olive) + t(54, y + 36, 'Distribution vs density', { size: 19, weight: 700 }) +
    t(54, y + 64, 'Distribution is the pattern of where people live; density is people per km².', { size: 17 }) +
    t(54, y + 88, 'Balochistan has a sparse distribution and the lowest density.', { size: 17, fill: C.muted });
  add('06-density-by-province',
    svg(900, y + 130, 'Population density by province', b),
    'Horizontal bars of approximate 2023 density: Islamabad Capital Territory about 2,600 people per km², Punjab 620, Khyber Pakhtunkhwa 400, Sindh 395 and Balochistan 43, with populations of 2.4, 127.7, 40.9, 55.7 and 14.9 million.',
    'Density ranges from about 43 people per km² in Balochistan to 2,600 in Islamabad.',
    '## How is population distributed, and how dense is it?');
}

// 07 Workforce
{
  const s = [['Agriculture (primary)', 37.4, C.grass, 'falling slowly'], ['Industry (secondary)', 25.4, C.blue, ''], ['Services (tertiary)', 37.2, C.mustard, 'growing fastest']];
  let x = 30; const W = 840;
  let b = t(30, 132, 'Share of employed people, Labour Force Survey 2020–21', { size: 17, weight: 700, fill: C.muted });
  s.forEach(([n, v, c, tr]) => {
    const w = (v / 100) * W;
    b += rect(x, 150, w, 90, c, C.ink, 2, 0) + t(x + w / 2, 205, `${v}%`, { size: 26, weight: 700, anchor: 'middle', fill: c === C.blue ? '#ffffff' : C.ink });
    b += t(x + w / 2, 270, n, { size: 17, weight: 700, anchor: 'middle' }) + (tr ? t(x + w / 2, 294, tr, { size: 16, anchor: 'middle', fill: tr.startsWith('falling') ? C.rust : C.tealDark, weight: 600 }) : '');
    x += w;
  });
  b += tbox(30, 330, 410, 'Unemployment', 'No work while seeking it.', { h: 116, fill: '#ffffff' });
  b += tbox(460, 330, 410, 'Underemployment', 'Working fewer hours or less productively than one could, e.g. a rickshaw driver with few fares.', { h: 116, fill: '#ffffff' });
  b += tbox(30, 466, 410, 'Rural causes', 'Seasonal farm work, mechanisation, small holdings.', { h: 96, fill: '#eef3e6', edge: C.grass });
  b += tbox(460, 466, 410, 'Urban causes', 'Too few factory jobs for migrants, power shortages, skills mismatch.', { h: 96, fill: '#dfe7f2', edge: C.blue });
  b += arrow(450, 568, 450, 598, { w: 3.5 }) + rect(170, 604, 560, 70, '#f6e4d8', C.rust, 2.5, 12) + t(450, 646, 'Lower output and tax revenue: GNP and GDP fall short', { size: 18, weight: 700, anchor: 'middle' });
  add('07-workforce',
    svg(900, 694, 'How Pakistan’s workforce is employed', b),
    'A full-width bar splits employment in 2020–21 into agriculture 37.4%, industry 25.4% and services 37.2%, with agriculture falling slowly and services growing fastest. Below, unemployment and underemployment are defined with their rural and urban causes, leading to lower GNP and GDP.',
    'Farming and services each employ over a third of workers; idle labour holds GDP down.',
    '## How is the workforce employed?');
}
