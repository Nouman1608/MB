import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-pakistan-studies-agricultural-development';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

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

// 01 Farm as a system
{
  const cols = [50, 332, 614], bw = 236;
  const heads = ['INPUTS', 'PROCESSES', 'OUTPUTS'];
  const rows = [
    ['Subsistence', 'e.g. a 3-acre rice plot in a Sindh village', ['Family labour, oxen, saved seed, canal water', 'Ploughing, transplanting, weeding, hand harvesting', 'Rice and vegetables eaten by the family; a small surplus sold']],
    ['Cash crop', 'e.g. a cotton farm near Vehari', ['Hired labour, tractor, certified seed, fertiliser, pesticide, tubewell water, bank loan', 'Machine sowing, spraying, picking', 'Seed cotton sold to a ginning factory; profit reinvested']],
    ['Livestock', 'e.g. a buffalo dairy near Lahore', ['Fodder (berseem, maize), concentrates, vet services', 'Feeding, milking, breeding', 'Milk, calves, dung for fuel and fertiliser']],
  ];
  let b = heads.map((h, i) => rect(cols[i], 112, bw, 40, i === 1 ? C.teal : i === 0 ? C.cream : C.tealLight, C.ink, 2.5, 20) + t(cols[i] + bw / 2, 139, h, { size: 18, weight: 700, anchor: 'middle' })).join('');
  let y = 170;
  rows.forEach(([name, eg, cells]) => {
    const n = Math.max(...cells.map((c) => lines(c, 17, bw - 28)));
    const bh = n * 22 + 26, ph = bh + 74;
    b += panel(30, y, 840, ph) + t(50, y + 34, name, { size: 21, weight: 700 }) + t(50 + name.length * 21 * 0.6 + 14, y + 34, eg, { size: 17, fill: C.muted, italic: true });
    cells.forEach((c, i) => {
      b += rect(cols[i], y + 52, bw, bh, i === 1 ? C.tealLight : '#ffffff', C.panelEdge) + para(cols[i] + 14, y + 52 + 30, c, bw - 28, { size: 17 }, 22);
      if (i < 2) b += arrow(cols[i] + bw + 4, y + 52 + bh / 2, cols[i + 1] - 6, y + 52 + bh / 2, { w: 3.5 });
    });
    y += ph + 14;
  });
  // feedback loop
  const fy = y + 30;
  b += path(`M${cols[2] + bw / 2},${y - 6} L${cols[2] + bw / 2},${fy} L${cols[0] + bw / 2},${fy} L${cols[0] + bw / 2},${y - 2}`, { stroke: C.olive, w: 5, extra: 'marker-end="url(#ahO)"' });
  b += t(450, fy + 34, 'FEEDBACK: profit or failure in one season', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }) +
    t(450, fy + 58, 'changes the inputs of the next', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  add('01-farm-as-a-system',
    svg(900, fy + 84, 'A farm as a system', b),
    'Three farm types set out as inputs, processes and outputs: a subsistence rice plot in Sindh, a cotton farm near Vehari and a buffalo dairy near Lahore. A feedback arrow runs from outputs back to inputs.',
    'Every farm type turns inputs into outputs, and each season’s results feed back into the next.',
    '## How does a farm work as a system?');
}

// 02 Kharif and rabi calendar
{
  const x0 = 170, mw = 56, months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const mx = (m) => x0 + m * mw; // m = 0..12
  const yK = 222, yR = 318, bh = 64;
  const seg = (m1, m2, y, fill, label, opts = {}) => rect(mx(m1) + 2, y, (m2 - m1) * mw - 4, bh, fill, C.ink, 2.5, 10, opts.dash ? 'stroke-dasharray="8 6"' : '') +
    (label ? tl(mx((m1 + m2) / 2), y + (label.length > 1 ? 28 : 39), label, { size: 16, weight: 700, anchor: 'middle' }, 20) : '');
  let b = '';
  b += `<rect x="${mx(10)}" y="150" width="${mw}" height="${yR + bh + 14 - 150}" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2.5"/>`;
  months.forEach((m, i) => { b += t(mx(i) + mw / 2, 190, m, { size: 18, weight: 700, anchor: 'middle', fill: i === 10 ? C.olive : C.ink }); });
  for (let i = 0; i <= 12; i++) b += `<line x1="${mx(i)}" y1="204" x2="${mx(i)}" y2="${yR + bh + 14}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
  b += t(40, yK + 30, 'KHARIF', { size: 20, weight: 700, fill: C.tealDark }) + t(40, yK + 54, 'summer crops', { size: 16, fill: C.muted });
  b += seg(2, 6, yK, C.cream, ['sown spring or', 'early summer'], { dash: 1 }) + seg(6, 8, yK, C.tealLight, ['grow']) + seg(8, 11, yK, C.teal, ['harvested', 'autumn'], { dash: 1 });
  b += t(40, yR + 30, 'RABI', { size: 20, weight: 700, fill: C.blue }) + t(40, yR + 54, 'winter crops', { size: 16, fill: C.muted });
  b += seg(0, 2, yR, C.tealLight, ['grow']) + seg(2, 5, yR, C.teal, ['harvested', 'Mar to May']) + seg(9, 12, yR, C.cream, ['sown', 'Oct to Dec']);
  b += t(mx(7), yR + 39, 'no rabi crop', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  b += t(mx(10.5), 140, 'November overlap', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += t(870, 424, 'Dashed edges: kharif timing is given only by season', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  const card = (x, y, w, head, color, crops, needs) => panel(x, y, w, 170) + t(x + 22, y + 38, head, { size: 21, weight: 700, fill: color }) +
    para(x + 22, y + 70, crops, w - 44, { size: 17, weight: 600 }, 23) + para(x + 22, y + 104, needs, w - 44, { size: 16, fill: C.muted }, 21);
  b += card(30, 444, 410, 'Kharif crops', C.tealDark, 'Cotton, rice, sugar cane, maize, millet', 'Need heat and plenty of water from canals and the monsoon.');
  b += card(460, 444, 410, 'Rabi crops', C.blue, 'Wheat, gram, oilseeds', 'Grow in mild winter temperatures; rely on canal water, tubewells or winter rain from western depressions.');
  b += panel(30, 630, 840, 74, C.cream, C.olive) + t(450, 661, 'In November, cotton picking and wheat sowing overlap,', { size: 18, weight: 700, anchor: 'middle' }) +
    t(450, 686, 'so cotton-wheat farmers face a labour squeeze.', { size: 18, anchor: 'middle' });
  add('02-kharif-rabi-calendar',
    svg(900, 724, 'Kharif and rabi: the farming year', b),
    'A twelve-month calendar. Kharif crops such as cotton and rice are sown in spring or early summer and harvested in autumn; rabi crops such as wheat are sown October to December and harvested March to May. November is highlighted where cotton picking and wheat sowing overlap.',
    'Two cropping seasons share the year, and they collide in November.',
    '## How do kharif and rabi seasons shape production?');
}

// 03 Karez
{
  const P = 470; // plain (oasis) ground level
  const ground = `M30,180 Q170,170 300,290 Q420,390 520,440 L620,${P} L870,${P}`;
  let b = `<rect x="30" y="110" width="840" height="${640 - 110}" fill="#e4eef0"/>`;
  b += `<path d="${ground} L870,640 L30,640 Z" fill="${C.sand}"/>`;
  b += `<path d="M30,280 L330,420 Q360,520 330,640 L30,640 Z" fill="${C.teal}" opacity="0.85"/>`; // aquifer
  b += path(ground, { w: 3 });
  b += path('M30,280 L330,420', { stroke: C.blue, w: 3 });
  b += path('M30,350 Q300,520 840,620', { stroke: C.rust, w: 3, extra: 'stroke-dasharray="10 7"' });
  b += path(`M290,425 L620,${P - 2}`, { stroke: C.blue, w: 12 }) + path(`M290,425 L620,${P - 2}`, { stroke: C.tealLight, w: 6 });
  b += `<path d="M620,${P - 3} L870,${P - 3}" stroke="${C.blue}" stroke-width="6"/>`;
  const palm = (x) => path(`M${x},${P} L${x + 4},${P - 90}`, { stroke: C.rockDark, w: 6 }) +
    [[-40, -8], [-30, 14], [40, -6], [32, 16], [0, -30]].map(([dx, dy]) => path(`M${x + 4},${P - 90} q${dx / 2},${dy - 18} ${dx},${dy}`, { stroke: C.grass, w: 6 })).join('');
  b += palm(645) + palm(760) + [685, 713, 800].map((x) => `<ellipse cx="${x}" cy="${P - 12}" rx="11" ry="8" fill="${C.grass}" stroke="${C.ink}" stroke-width="1.5"/>`).join('');
  b += `<rect x="842" y="${P - 46}" width="22" height="40" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/><line x1="853" y1="${P}" x2="853" y2="630" stroke="${C.ink}" stroke-width="5"/>`;
  b += t(140, 230, 'hills', { size: 19, weight: 700, anchor: 'middle' });
  b += t(52, 272, 'water table', { size: 16, fill: C.blue, weight: 700 });
  b += t(150, 470, 'groundwater', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(150, 494, 'in the hills', { size: 16, anchor: 'middle', fill: C.tealDark });
  b += arrow(450, 192, 450, 428, { w: 2.5 }) + t(330, 160, 'underground tunnel: water flows', { size: 17, weight: 700 }) + t(330, 182, 'by gravity, little lost to evaporation', { size: 17 });
  b += t(730, 256, 'OASIS', { size: 20, weight: 700, anchor: 'middle' }) + t(730, 280, 'dates tolerate heat and', { size: 16, anchor: 'middle' }) + t(730, 300, 'some salinity; vegetables', { size: 16, anchor: 'middle' }) + t(730, 320, 'grow in their shade', { size: 16, anchor: 'middle' });
  b += t(866, 412, 'tubewell', { size: 16, weight: 700, anchor: 'end', fill: C.rust });
  b += t(690, 520, 'over-pumping lowers the water table', { size: 16, weight: 700, fill: C.rust, anchor: 'middle' }) + t(690, 542, 'below the tunnel: the karez runs dry', { size: 16, fill: C.rust, anchor: 'middle' });
  b += panel(30, 660, 840, 84, C.cream, C.olive) + t(52, 694, 'Why many karez have dried up', { size: 19, weight: 700 }) +
    t(52, 722, 'Nearby tubewells lower the water table; fewer people are available to clean the channels.', { size: 16, fill: C.muted });
  add('03-karez-oasis',
    svg(900, 764, 'Karez: water by gravity to an oasis', b, 'Not to scale'),
    'Cross-section showing groundwater in the hills feeding a gently sloping underground tunnel that carries water by gravity to an oasis with date palms and vegetables. A dashed line shows how pumping by a tubewell lowers the water table below the tunnel.',
    'A karez moves groundwater by gravity with little evaporation, but falling water tables leave many dry.',
    '## How do natural and human factors affect the three named subsistence systems?');
}

// 04 Livestock systems
{
  const top = 110;
  let b = panel(30, top, 840, 360);
  const base = top + 330;
  const mt = `<path d="M60,${base} L60,${base - 30} Q260,${base - 40} 420,${top + 160} Q520,${top + 70} 600,${top + 70} Q680,${top + 70} 760,${top + 180} Q810,${top + 260} 840,${base - 30} L840,${base} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += mt;
  b += `<path d="M520,${top + 92} Q600,${top + 62} 680,${top + 92}" fill="none" stroke="${C.grass}" stroke-width="10" stroke-linecap="round"/>`;
  b += `<path d="M70,${base - 30} Q180,${base - 34} 260,${base - 52}" fill="none" stroke="${C.grass}" stroke-width="10" stroke-linecap="round"/>`;
  b += path(`M250,${base - 80} Q330,${top + 130} 500,${top + 70}`, { stroke: C.tealDark, w: 5, extra: 'marker-end="url(#ahT)"' });
  b += path(`M560,${top + 130} Q520,${base - 60} 300,${base - 66}`, { stroke: C.rust, w: 5, extra: 'marker-end="url(#ahR)"' });
  b += t(600, top + 46, 'high summer pastures', { size: 18, weight: 700, anchor: 'middle', fill: '#3d5f2a' });
  b += t(230, top + 150, 'SUMMER', { size: 18, weight: 700, fill: C.tealDark, anchor: 'end' }) + t(230, top + 172, 'flocks moved up', { size: 16, fill: C.tealDark, anchor: 'end' });
  b += t(588, top + 200, 'WINTER', { size: 18, weight: 700, fill: C.rust }) + t(588, top + 222, 'back down to valleys', { size: 16, fill: C.rust, weight: 600 }) + t(588, top + 242, 'or the plains', { size: 16, fill: C.rust, weight: 600 });
  b += t(150, base - 6, 'valleys / plains', { size: 16, weight: 600, anchor: 'middle' });
  b += t(60, top + 40, 'Transhumance', { size: 22, weight: 700 }) + t(60, top + 64, 'sheep and goats in the northern', { size: 16, fill: C.muted }) + t(60, top + 84, 'mountains and Balochistan', { size: 16, fill: C.muted });
  const card = (x, w, head, body) => panel(x, 490, w, 140) + t(x + 22, 528, head, { size: 20, weight: 700 }) + para(x + 22, 560, body, w - 44, { size: 17, fill: C.muted }, 23);
  b += card(30, 410, 'Small farms', 'Buffalo and cattle are stall-fed on fodder and crop waste, staying in one place.');
  b += card(460, 410, 'Cholistan', 'Herders move between rain-fed ponds (tobas) and canal areas as the water dries up.');
  add('04-livestock-movement',
    svg(900, 650, 'Keeping livestock: fixed or on the move', b, 'Not to scale'),
    'A mountain profile shows transhumance: flocks move up to high summer pastures and back down to valleys or the plains in winter. Two cards below compare stall-fed buffalo and cattle on small farms with Cholistan herders moving between tobas and canal areas.',
    'Livestock is either stall-fed in one place or moved with the seasons and the water.',
    '## How do natural and human factors affect the three named subsistence systems?');
}

// 05 River to field
{
  const steps = [
    ['Dam', 'Stores water', 'e.g. Tarbela, Mangla'],
    ['Barrage', 'Raises the river level and diverts water into canals', 'e.g. Sukkur, Guddu, Taunsa'],
    ['Link canal', 'Moves water from western rivers to eastern ones after the Indus Waters Treaty', ''],
    ['Distribution canals and watercourses', 'Carry the water on towards the farms', ''],
    ['Field channels and bunds', 'Bunds (earth ridges) hold the water on each plot', ''],
  ];
  const rowH = 118;
  let b = '';
  steps.forEach(([name, desc, eg], i) => {
    const y = 110 + i * (rowH + 22);
    b += panel(30, y, 840, rowH);
    const cx = 130, cy = y + rowH / 2;
    // icon
    if (i === 0) b += `<rect x="60" y="${cy - 30}" width="80" height="50" fill="${C.teal}"/>` + `<path d="M140,${cy - 40} L170,${cy - 40} L190,${cy + 30} L140,${cy + 30} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>` + `<rect x="190" y="${cy + 10}" width="20" height="20" fill="${C.teal}"/>`;
    if (i === 1) b += `<rect x="60" y="${cy - 10}" width="150" height="34" fill="${C.teal}"/>` + [80, 110, 140, 170].map((x) => `<rect x="${x}" y="${cy - 34}" width="14" height="58" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`).join('') + `<line x1="60" y1="${cy - 30}" x2="200" y2="${cy - 30}" stroke="${C.ink}" stroke-width="5"/>`;
    if (i === 2) b += path(`M70,${cy - 28} L70,${cy + 30}`, { stroke: C.blue, w: 12 }) + path(`M200,${cy - 28} L200,${cy + 30}`, { stroke: C.blue, w: 12 }) + path(`M76,${cy} L190,${cy}`, { stroke: C.tealDark, w: 6, extra: 'marker-end="url(#ahT)"' }) + t(70, cy + 48, 'W', { size: 15, anchor: 'middle', weight: 700 }) + t(200, cy + 48, 'E', { size: 15, anchor: 'middle', weight: 700 });
    if (i === 3) b += path(`M60,${cy - 20} L210,${cy - 20}`, { stroke: C.blue, w: 10 }) + [90, 140, 190].map((x) => path(`M${x},${cy - 18} L${x},${cy + 30}`, { stroke: C.blue, w: 5 })).join('');
    if (i === 4) b += `<rect x="60" y="${cy - 34}" width="150" height="68" fill="#a9c48f" stroke="${C.ink}" stroke-width="2"/>` + `<line x1="135" y1="${cy - 34}" x2="135" y2="${cy + 34}" stroke="${C.rockDark}" stroke-width="7"/>` + `<line x1="60" y1="${cy}" x2="210" y2="${cy}" stroke="${C.rockDark}" stroke-width="7"/>` + path(`M60,${cy - 34} L210,${cy - 34}`, { stroke: C.blue, w: 6 });
    b += badge(270, cy, 22, String(i + 1), i === 1 ? C.mustard : C.cream);
    b += t(312, y + 40, name, { size: 21, weight: 700 });
    const dl = wrap(desc, 17, 530);
    b += tl(312, y + 68, dl, { size: 17, fill: C.muted }, 22);
    if (eg) b += t(840, y + 40, eg, { size: 17, anchor: 'end', fill: C.tealDark, weight: 600, italic: true });
    if (i < 4) b += arrow(130, y + rowH + 2, 130, y + rowH + 20, { w: 3.5 });
  });
  add('05-river-to-field',
    svg(900, 110 + 5 * (rowH + 22) + 2, 'The irrigation system: river to field', b),
    'Five linked stages: dams such as Tarbela and Mangla store water; barrages such as Sukkur raise the river and divert it into canals; link canals move water from western to eastern rivers; distribution canals and watercourses carry it on; field channels and bunds hold it on each plot.',
    'Water passes through five stages of engineering before it reaches a field.',
    '## Which irrigation methods are used, and what are their trade-offs?');
}

// 06 Waterlogging and salinity
{
  const g = 260;
  let b = panel(30, 110, 840, 400);
  b += `<rect x="40" y="${g}" width="820" height="240" fill="${C.sand}"/>` + `<line x1="40" y1="${g}" x2="860" y2="${g}" stroke="${C.ink}" stroke-width="3"/>`;
  // canal
  b += `<path d="M80,${g} L100,${g + 40} L190,${g + 40} L210,${g} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + t(145, g - 14, 'unlined canal', { size: 16, weight: 700, anchor: 'middle' });
  [110, 145, 180].forEach((x) => { b += arrow(x, g + 46, x, g + 92, { color: C.blue, w: 3, marker: 'ah' }); });
  b += t(145, g + 118, 'seepage', { size: 16, weight: 600, anchor: 'middle', fill: C.blue });
  // water tables
  b += `<path d="M40,${g + 200} L860,${g + 200}" stroke="${C.blue}" stroke-width="2.5" stroke-dasharray="10 7"/>` + '';
  b += `<rect x="40" y="${g + 140}" width="820" height="${100}" fill="${C.teal}" opacity="0.7"/>` + t(60, g + 226, 'water table before', { size: 16, weight: 600, fill: C.ink }) + `<line x1="40" y1="${g + 140}" x2="860" y2="${g + 140}" stroke="${C.blue}" stroke-width="3.5"/>` + t(850, g + 132, 'water table rises', { size: 16, weight: 700, anchor: 'end', fill: C.blue });
  b += arrow(760, g + 196, 760, g + 150, { color: C.blue, w: 3 });
  // capillary rise
  [400, 470, 540, 610].forEach((x) => { b += path(`M${x},${g + 134} q-8,-15 0,-30 q8,-15 0,-30 q-8,-15 0,-30`, { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' }); });
  b += t(505, g + 160 + 28, 'capillary action draws water up', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  // evaporation & salt
  [420, 520, 620].forEach((x) => { b += path(`M${x},${g - 12} q10,-14 0,-28 q-10,-14 0,-28`, { stroke: C.rust, w: 3, extra: 'marker-end="url(#ahR)"' }); });
  b += t(700, g - 60, 'hot sun:', { size: 16, weight: 700, fill: C.rust }) + t(700, g - 40, 'evaporation', { size: 16, fill: C.rust });
  for (let i = 0; i < 24; i++) b += `<rect x="${360 + i * 13}" y="${g - 6}" width="9" height="6" fill="#ffffff" stroke="${C.muted}" stroke-width="1"/>`;
  b += t(520, 150, 'salt crust left behind: yields fall', { size: 17, weight: 700, anchor: 'middle' }) + arrow(520, 160, 520, g - 76, { w: 2.5 });
  b += t(60, 150, 'over-irrigation and', { size: 16, weight: 600 }) + t(60, 170, 'poor drainage add water', { size: 16, weight: 600 });
  // fixes
  const col = (x, head, color, items) => panel(x, 530, 410, 230) + t(x + 22, 568, head, { size: 21, weight: 700, fill: color }) +
    items.map((s, i) => para(x + 40, 602 + i * 46, s, 350, { size: 16 }, 20) + `<circle cx="${x + 28}" cy="${597 + i * 46}" r="5" fill="${color}"/>`).join('');
  b += col(30, 'Restore the land', C.tealDark, ['SCARPs (from the 1960s): tubewells pump the water table down', 'Drains carry saline water to the sea, e.g. Left Bank Outfall Drain', 'Flush fields; add gypsum to sodic soil']);
  b += col(460, 'Prevent it', C.blue, ['Line watercourses', 'Laser land levelling', 'Measured water allocation', 'Sprinkler or drip irrigation']);
  add('06-waterlogging-salinity',
    svg(900, 780, 'Waterlogging and salinity', b, 'Not to scale'),
    'Cross-section of a field beside an unlined canal. Seepage and over-irrigation raise the water table; capillary action draws water up and evaporation leaves a salt crust. Below, restoration methods (SCARP tubewells, drains, flushing and gypsum) sit beside prevention methods (lining, laser levelling, measured allocation, sprinkler or drip).',
    'Too much water raises the water table; evaporation then leaves salt on the surface.',
    '## What causes waterlogging and salinity, and what can be done?');
}

// 07 Government action: gains and limits
{
  const measures = [
    ['Land reforms', '1959, 1972, 1977: lower ceiling on land per owner'],
    ['Improved seeds', 'Green Revolution wheat of the 1960s'],
    ['Research', 'e.g. Ayub Agricultural Research Institute, Faisalabad'],
    ['Training and credit', 'Extension training; loans from Zarai Taraqiati Bank'],
    ['Subsidies', 'Fertiliser, tractors and solar tubewells'],
  ];
  let b = panel(30, 110, 840, 330);
  b += t(52, 146, 'What government did', { size: 21, weight: 700 });
  measures.forEach(([h, s], i) => {
    const y = 178 + i * 52;
    b += rect(52, y - 22, 220, 38, C.tealLight, C.panelEdge, 2, 8) + t(162, y + 3, h, { size: 17, weight: 700, anchor: 'middle' }) + t(292, y + 3, s, { size: 17, fill: C.muted });
  });
  b += arrow(450, 446, 450, 486, { w: 4 });
  const col = (x, head, fill, edge, items, color) => panel(x, 492, 410, 290, fill, edge) + t(x + 205, 532, head, { size: 22, weight: 700, anchor: 'middle', fill: color }) +
    items.map((s, i) => para(x + 44, 576 + i * 58, s, 350, { size: 17 }, 22) + `<circle cx="${x + 28}" cy="${570 + i * 58}" r="6" fill="${color}"/>`).join('');
  b += col(30, 'Gains', C.tealLight, C.tealDark, ['Yields rose', 'Land ceilings were lowered, aiming to give tenants security'], C.tealDark);
  b += col(460, 'Limits', '#f6e4d8', C.rust, ['Much land stayed with large owners', 'Benefits went mainly to larger farmers', 'Chemicals raised costs and polluted water', 'Tubewell expansion drew groundwater down'], C.rust);
  add('07-government-action',
    svg(900, 802, 'Raising farm output: gains and limits', b),
    'Five government measures (land reforms, improved seeds, research, training and credit, subsidies) lead to a balance of outcomes: yields rose, but benefits went mainly to larger farmers, much land stayed with large owners, chemicals raised costs and polluted water, and groundwater fell.',
    'Government action raised yields, but the gains were uneven and had environmental costs.',
    '## How has government tried to raise production?');
}
