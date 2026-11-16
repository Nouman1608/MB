import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-pakistan-studies-industrial-development';
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

// 01 Section 5 in Paper 2
{
  const L = [['Sections 2 and 4', 'Raw materials: limestone, gypsum, cotton, cane, natural gas'], ['Section 3', 'Power supply'], ['Section 7', 'Transport links']];
  const R = [['Section 6', 'Exports'], ['Section 8', 'Jobs']];
  let b = '';
  const cy = 340;
  b += rect(345, cy - 80, 210, 160, C.mustard, C.ink, 3, 16) + t(450, cy - 12, 'Section 5', { size: 24, weight: 700, anchor: 'middle' }) + t(450, cy + 20, 'Industry', { size: 21, anchor: 'middle' });
  L.forEach(([h, s], i) => {
    const y = 120 + i * 150; const hh = 120;
    b += tbox(30, y, 260, h, s, { h: hh, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark });
    b += arrow(292, y + hh / 2, 340, cy - 40 + i * 40, { w: 3.5 });
  });
  b += t(160, 112 - 6, 'Industry depends on', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  R.forEach(([h, s], i) => {
    const y = 180 + i * 190; const hh = 100;
    b += tbox(610, y, 260, h, s, { h: hh, fill: C.cream, edge: C.olive, headColor: C.olive });
    b += arrow(558, cy - 20 + i * 40, 604, y + hh / 2, { w: 3.5 });
  });
  b += t(740, 172 - 6, 'Industry feeds', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  add('01-section-5-links',
    svg(900, 570, 'Industry links the whole of Paper 2', b),
    'Industry sits at the centre. Raw materials from Sections 2 and 4, power from Section 3 and transport from Section 7 flow in; exports for Section 6 and jobs for Section 8 flow out.',
    'Industry draws on four other sections and feeds two more.',
    '## How does Section 5 connect to the rest of Paper 2?');
}

// 02 Cotton chain: the key terms
{
  const rows = [
    ['Raw material', 'Seed cotton picked in Sanghar or Vehari', 'PRIMARY', 1],
    ['Processed', 'Ginned to separate lint from seed, then spun into yarn', 'SECONDARY', 2],
    ['Manufactured', 'Yarn woven or knitted into cloth, then cut and sewn into garments', 'SECONDARY', 3],
  ];
  let b = '';
  const rh = 120;
  rows.forEach(([h, s, sec, n], i) => {
    const y = 120 + i * (rh + 26);
    b += panel(30, y, 840, rh) + badge(78, y + rh / 2, 24, String(n), i === 2 ? C.mustard : C.cream);
    b += t(124, y + 44, h, { size: 22, weight: 700 }) + t(124, y + 44 + 0, '', {}) + para(124, y + 74, s, 440, { size: 17, fill: C.muted }, 22);
    b += rect(590, y + 22, 92, 30, i === 0 ? C.grass : C.blue, 'none', 0, 15) + t(636, y + 43, sec, { size: 15, weight: 700, anchor: 'middle', fill: '#ffffff' });
    const vw = [40, 95, 160][i];
    b += rect(700, y + 70, vw, 30, C.mustard, C.ink, 2, 6);
    if (i < 2) b += arrow(78, y + rh + 2, 78, y + rh + 24, { w: 3.5 });
  });
  b += t(700, 112, 'value', { size: 16, weight: 700, fill: C.olive });
  const by = 120 + 3 * (rh + 26);
  b += panel(30, by, 840, 96, C.cream, C.olive) + t(60, by + 38, 'Value-added', { size: 20, weight: 700 }) +
    t(60, by + 68, 'Each stage raises the price: a kilogram of garments earns far more than a kilogram of raw lint.', { size: 17 });
  const y2 = by + 116;
  b += tbox(30, y2, 410, 'Refined (other chains)', 'Crude oil into petrol; raw cane juice into white sugar.', { h: 110 });
  b += tbox(460, y2, 410, 'Tertiary industry', 'Services that support people and firms: banking, insurance, transport and repair.', { h: 110 });
  add('02-cotton-value-chain',
    svg(900, y2 + 130, 'From field to shirt: the key terms', b),
    'Cotton moves through three stages: raw seed cotton (primary), ginning and spinning (processed) and weaving, cutting and sewing (manufactured), with a value bar that grows at each stage. Boxes below define refined and tertiary industry.',
    'Every stage of processing adds value to the same raw cotton.',
    '## What do the key terms mean, using one product chain?');
}

// 03 Scale of industry
{
  const cols = [
    ['Large-scale', 'Factories registered under the Factories Act and covered by the census of manufacturing; generally ten or more workers using power-driven machinery.', 'e.g. textile mills, cement plants'],
    ['Small-scale', 'Smaller workshops with a few hired workers.', 'e.g. a Gujranwala metal workshop'],
    ['Cottage', 'Carried out at home by family members with simple tools.', 'e.g. embroidery or rilli quilt-making in rural Sindh'],
  ];
  const icon = (i, x, y) => {
    if (i === 0) return `<rect x="${x - 70}" y="${y - 40}" width="140" height="60" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>` + `<path d="M${x - 70},${y - 40} l35,-22 l0,22 l35,-22 l0,22 l35,-22 l0,22" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="${x + 40}" y="${y - 96}" width="18" height="56" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>`;
    if (i === 1) return `<rect x="${x - 50}" y="${y - 40}" width="100" height="60" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="${x - 16}" y="${y - 8}" width="32" height="28" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>` + `<path d="M${x - 58},${y - 40} L${x + 58},${y - 40}" stroke="${C.ink}" stroke-width="4"/>`;
    return `<rect x="${x - 40}" y="${y - 30}" width="80" height="50" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>` + `<path d="M${x - 50},${y - 30} L${x},${y - 66} L${x + 50},${y - 30} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="${x - 10}" y="${y - 6}" width="20" height="26" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
  };
  let b = '';
  cols.forEach(([h, s, eg], i) => {
    const x = 30 + i * 285, w = 270;
    b += panel(x, 110, w, 440) + icon(i, x + w / 2, 230) + t(x + w / 2, 290, h, { size: 22, weight: 700, anchor: 'middle' });
    b += para(x + 20, 326, s, w - 40, { size: 17 }, 23);
    b += para(x + 20, 500, eg, w - 40, { size: 16, fill: C.tealDark, italic: true }, 21);
  });
  b += arrow(60, 580, 840, 580, { w: 3.5 }) + t(450, 612, 'fewer workers, less machinery, closer to the home', { size: 17, anchor: 'middle', fill: C.muted, weight: 600 });
  add('03-scale-of-industry',
    svg(900, 636, 'Large-scale, small-scale and cottage industry', b),
    'Three columns compare industry by scale: large-scale factories registered under the Factories Act with ten or more workers using powered machinery; small-scale workshops with a few hired workers; and cottage industry done at home by family members with simple tools.',
    'Pakistan’s three scales of industry differ in size, machinery and where the work is done.',
    '## What do the key terms mean, using one product chain?');
}

// 04 Location factors grouped
{
  const groups = [
    ['Near the raw material', 'bulky, heavy or perishable inputs', C.tealDark, C.tealLight, [
      ['Cement', 'heavy limestone and gypsum quarried nearby'],
      ['Cotton ginning', 'seed cotton is bulky: the cotton belt'],
      ['Sugar refining', 'cane loses sugar within a day or two'],
      ['Brick', 'river-plain clay; bricks heavy and cheap']]],
    ['On the gas supply', 'fuel and feedstock in one', C.olive, C.cream, [
      ['Fertiliser (urea)', 'natural gas is both feedstock and fuel: Daharki, Mirpur Mathelo, Sadiqabad']]],
    ['At the coast', 'imported inputs land at the port', C.blue, '#dfe7f2', [
      ['Iron and steel', 'imported ore and coking coal at Port Qasim; scrap from Gadani'],
      ['Oil refining', 'coastal sites for imported crude; Potwar sites for local crude']]],
    ['Labour, skills and links', 'people and transport matter most', C.rust, '#f6e4d8', [
      ['Spinning to clothing', 'labour, capital, power; port for exports'],
      ['Crafts', 'inherited skills, local materials, tourists'],
      ['Sports and surgical goods', 'Sialkot: skilled workers, dry port, airport']]],
  ];
  const pos = [[30, 110], [460, 110], [460, 0], [30, 0]];
  const ph = (g) => 80 + g[4].reduce((a, [n, s]) => a + 26 + lines(s, 16, 370) * 20 + 10, 0);
  const h0 = Math.max(ph(groups[0]), ph(groups[1]) + 20 + ph(groups[2]));
  let b = '';
  const draw = (g, x, y, h) => {
    const [head, sub, c, f, items] = g;
    let s = panel(x, y, 410, h, f, c) + t(x + 20, y + 36, head, { size: 21, weight: 700, fill: c }) + t(x + 20, y + 60, sub, { size: 16, fill: C.muted, italic: true });
    let yy = y + 96;
    items.forEach(([n, d]) => { s += t(x + 20, yy, n, { size: 18, weight: 700 }) + para(x + 20, yy + 24, d, 370, { size: 16, fill: C.muted }, 20); yy += 26 + lines(d, 16, 370) * 20 + 10; });
    return s;
  };
  b += draw(groups[0], 30, 110, h0);
  b += draw(groups[1], 460, 110, ph(groups[1]));
  b += draw(groups[2], 460, 110 + ph(groups[1]) + 20, h0 - ph(groups[1]) - 20);
  const y3 = 110 + h0 + 20;
  // last group wide
  const g = groups[3];
  b += panel(30, y3, 840, 190, g[3], g[2]) + t(50, y3 + 36, g[0], { size: 21, weight: 700, fill: g[2] }) + t(50, y3 + 60, g[1], { size: 16, fill: C.muted, italic: true });
  g[4].forEach(([n, d], i) => { const x = 50 + i * 275; b += t(x, y3 + 100, n, { size: 18, weight: 700 }) + para(x, y3 + 124, d, 250, { size: 16, fill: C.muted }, 20); });
  add('04-location-factors',
    svg(900, y3 + 210, 'Why industries are where they are', b),
    'The ten industries grouped by their decisive location factor: cement, ginning, sugar and brick sit near bulky or perishable raw materials; fertiliser sits on the gas supply; iron and steel and oil refining use coastal sites for imports; textiles, crafts and Sialkot sports and surgical goods depend on labour, skills and transport links.',
    'Name the decisive factor: raw material, gas, the port, or skilled labour.',
    '## Where are the ten industries and why?');
}

// 05 Formal and informal sectors
{
  let b = '';
  b += tbox(30, 110, 330, 'Formal sector', 'Registered, taxed, inspected. Contracts, regular wages, some benefits. Capital from banks, shareholders, foreign investors.', { h: 190, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark });
  b += tbox(540, 110, 330, 'Informal sector', 'Unregistered, untaxed. Casual work, irregular pay, no protection. Capital from family savings and moneylenders.', { h: 190, fill: C.cream, edge: C.olive, headColor: C.olive });
  b += arrow(366, 170, 532, 170, { w: 4 }) + t(450, 158, 'subcontracts', { size: 16, weight: 700, anchor: 'middle' }) + t(450, 200, 'e.g. Sialkot exporters', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(534, 246, 368, 246, { w: 4 }) + t(450, 236, 'home stitching', { size: 16, weight: 700, anchor: 'middle' }) + t(450, 272, 'cheap, flexible labour', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 320, 840, 90) + t(50, 354, 'Services the informal sector provides', { size: 18, weight: 700 }) +
    t(50, 384, 'Cheap repairs, transport, recycling of scrap, small retail and domestic work', { size: 17, fill: C.muted });
  const adv = blist(54, 480, ['Jobs for people without formal qualifications', 'Low start-up cost', 'Cheap goods and services', 'Flexible subcontracting for exporters'], 370, { dot: C.tealDark });
  const dis = blist(484, 480, ['Low pay', 'Child labour (a long-standing concern in brick kilns)', 'Unsafe conditions', 'No tax revenue'], 370, { dot: C.rust });
  const hh = Math.max(adv.h, dis.h) + 80;
  b += panel(30, 430, 410, hh) + t(54, 462, 'Advantages', { size: 20, weight: 700, fill: C.tealDark }) + adv.svg;
  b += panel(460, 430, 410, hh) + t(484, 462, 'Disadvantages', { size: 20, weight: 700, fill: C.rust }) + dis.svg;
  add('05-formal-informal',
    svg(900, 430 + hh + 20, 'Formal and informal sectors depend on each other', b),
    'The formal sector (registered, taxed, regular wages) and the informal sector (unregistered, casual, irregular pay) are linked by subcontracting, as when Sialkot exporters send stitching to home workers. Below are the informal sector’s services, advantages and disadvantages.',
    'The two sectors are linked: exporters rely on informal home workers.',
    '## Formal and informal sectors: what is the difference and why do both matter?');
}

// 06 EPZs and industrial estates
{
  let b = '';
  const c1 = blist(54, 236, ['Karachi EPZ (the first, set up in the 1980s)', 'Sialkot, Risalpur, Gujranwala', 'Mineral EPZs at Saindak and Duddar in Balochistan'], 370, { dot: C.tealDark });
  const c2 = blist(484, 236, ['SITE in Karachi and Hyderabad', 'Sundar Industrial Estate near Lahore', 'Hattar and Gadoon Amazai (KP); Hub (Balochistan)', 'CPEC zones: Rashakai, Allama Iqbal Industrial City'], 370, { dot: C.blue });
  const hh = Math.max(c1.h, c2.h) + 140;
  b += panel(30, 110, 410, hh, C.tealLight, C.tealDark) + t(54, 146, 'Export processing zone', { size: 21, weight: 700, fill: C.tealDark }) +
    para(54, 176, 'Duty-free imports and tax concessions, on condition that most output is exported', 370, { size: 17, weight: 600 }, 22) + c1.svg;
  b += panel(460, 110, 410, hh, '#dfe7f2', C.blue) + t(484, 146, 'Industrial estate or SEZ', { size: 21, weight: 700, fill: C.blue }) +
    para(484, 176, 'Serviced plots and infrastructure, with no export condition', 370, { size: 17, weight: 600 }, 22) + c2.svg;
  const y = 110 + hh + 20;
  b += panel(30, y, 840, 74, '#ffffff') + t(54, y + 32, 'Other measures', { size: 18, weight: 700 }) + t(54, y + 58, 'Tax holidays, cheaper credit, training, subsidised power and gas, motorways, dry ports', { size: 16, fill: C.muted });
  const y2 = y + 96;
  b += t(450, y2 + 10, 'WHY BUILD THEM?', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  const aims = ['Attract foreign investment and technology', 'Earn foreign exchange', 'Create jobs', 'Spread industry beyond Karachi and Lahore'];
  aims.forEach((s, i) => { const x = 30 + i * 213, w = 200; b += rect(x, y2 + 26, w, 84, C.mustard, C.ink, 2.5, 12) + tl(x + w / 2, y2 + 74 - (wrap(s, 17, w - 24).length - 1) * 11, wrap(s, 17, w - 24), { size: 17, weight: 700, anchor: 'middle' }, 22); });
  add('06-epz-industrial-estates',
    svg(900, y2 + 130, 'How government promotes industry', b),
    'Export processing zones, such as Karachi EPZ, offer duty-free imports if most output is exported; industrial estates and special economic zones, such as SITE and Sundar, offer serviced plots without that condition. Four aims sit below: investment and technology, foreign exchange, jobs and spreading industry beyond Karachi and Lahore.',
    'The difference between an EPZ and an industrial estate is the export condition.',
    '## How does government promote industry?');
}

// 07 Tourism feasibility
{
  let b = '';
  const n = blist(54, 190, ['Fairy Meadows below Nanga Parbat', 'Deosai Plains', 'Lake Saiful Muluk, Kaghan valley', 'Hingol National Park', 'Kund Malir beach, Makran coast'], 370, { dot: C.grass, gap: 6 });
  const c = blist(484, 190, ['Makli necropolis near Thatta', 'Rohtas Fort; Takht-i-Bahi', 'Kalash valleys', 'Sufi shrines at Sehwan and Multan', 'Kartarpur Corridor (opened 2019)'], 370, { dot: C.rust, gap: 6 });
  const h1 = Math.max(n.h, c.h) + 90;
  b += panel(30, 110, 410, h1) + t(54, 150, 'Natural attractions', { size: 21, weight: 700, fill: '#3d5f2a' }) + n.svg;
  b += panel(460, 110, 410, h1) + t(484, 150, 'Cultural attractions', { size: 21, weight: 700, fill: C.rust }) + c.svg;
  const y = 110 + h1 + 20;
  b += arrow(450, y - 16, 450, y + 14, { w: 3.5 });
  const p = blist(54, y + 84, ['Jobs: guides, drivers, hotel and restaurant staff, craft sellers', 'Earns foreign exchange', 'Adds to GDP and GNP'], 370, { dot: C.tealDark });
  const q = blist(484, y + 84, ['Poor road access and landslides', 'Seasonal demand', 'Security perceptions', 'Limited hotels', 'Litter and unplanned building damage mountain areas'], 370, { dot: C.rust });
  const h2 = Math.max(p.h, q.h) + 80;
  b += panel(30, y + 20, 410, h2, C.tealLight, C.tealDark) + t(54, y + 58, 'Benefits', { size: 21, weight: 700, fill: C.tealDark }) + p.svg;
  b += panel(460, y + 20, 410, h2, '#f6e4d8', C.rust) + t(484, y + 58, 'Constraints', { size: 21, weight: 700, fill: C.rust }) + q.svg;
  add('07-tourism-feasibility',
    svg(900, y + h2 + 40, 'Tourism: attractions, benefits and constraints', b),
    'Natural attractions such as Fairy Meadows and the Deosai Plains and cultural attractions such as the Makli necropolis and Rohtas Fort lead to benefits (jobs, foreign exchange, GDP and GNP) weighed against constraints (poor roads, seasonal demand, security perceptions, limited hotels, environmental damage).',
    'Tourism can create jobs and income, but access, seasons and security limit it.',
    '## Is tourism a realistic route to development?');
}
