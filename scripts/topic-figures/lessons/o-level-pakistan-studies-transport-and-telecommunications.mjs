import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-pakistan-studies-transport-and-telecommunications';
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

// 01 Network patterns
{
  const cards = [
    ['Dense grid', 'Indus Plain of central and northern Punjab: close grid linking Lahore, Faisalabad, Gujranwala, Sialkot, Multan', 'grid'],
    ['Linear corridors', 'Sindh: N-5, N-55 and rail lines run north–south along both banks of the Indus; few links across the Thar', 'linear'],
    ['Sparse', 'Most of Balochistan: a few long roads, e.g. Quetta–Karachi, Quetta–Taftan, Makran Coastal Highway', 'sparse'],
    ['Valley-bound', 'Northern mountains: routes follow narrow valleys such as the Indus and Hunza', 'valley'],
  ];
  let b = '';
  cards.forEach(([h, s, k], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 246, w = 410;
    b += panel(x, y, w, 230);
    const ax = x + 20, ay = y + 20, aw = 150, ah = 150; // art box
    b += rect(ax, ay, aw, ah, '#eef3e6', C.panelEdge, 1.5, 8);
    const R = (d, wd = 3, col = C.rust) => path(d, { stroke: col, w: wd });
    if (k === 'grid') { for (let j = 0; j < 5; j++) { b += R(`M${ax + 10},${ay + 20 + j * 28} L${ax + aw - 10},${ay + 14 + j * 30}`); b += R(`M${ax + 18 + j * 28},${ay + 10} L${ax + 26 + j * 26},${ay + ah - 10}`); } b += path(`M${ax + 10},${ay + ah - 20} L${ax + aw - 10},${ay + 20}`, { stroke: C.ink, w: 4, extra: 'stroke-dasharray="8 5"' }); }
    if (k === 'linear') { b += path(`M${ax + 75},${ay + 5} Q${ax + 60},${ay + 75} ${ax + 80},${ay + ah - 5}`, { stroke: C.blue, w: 7 }) + R(`M${ax + 50},${ay + 8} Q${ax + 38},${ay + 75} ${ax + 56},${ay + ah - 8}`) + R(`M${ax + 102},${ay + 8} Q${ax + 88},${ay + 75} ${ax + 106},${ay + ah - 8}`) + R(`M${ax + 62},${ay + 75} L${ax + 92},${ay + 75}`, 2) + `<rect x="${ax + 118}" y="${ay + 10}" width="26" height="130" fill="${C.sand}"/>`; }
    if (k === 'sparse') { b += `<rect x="${ax}" y="${ay}" width="${aw}" height="${ah}" rx="8" fill="${C.sand}" opacity="0.6"/>` + R(`M${ax + 20},${ay + 20} L${ax + 70},${ay + 120}`) + R(`M${ax + 20},${ay + 20} L${ax + 140},${ay + 30}`) + R(`M${ax + 10},${ay + 135} L${ax + 140},${ay + 130}`) + `<circle cx="${ax + 20}" cy="${ay + 20}" r="6" fill="${C.ink}"/>`; }
    if (k === 'valley') { b += `<path d="M${ax},${ay + ah} L${ax},${ay + 30} L${ax + 40},${ay + 70} L${ax + 30},${ay + 120} L${ax + 70},${ay + ah} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/><path d="M${ax + aw},${ay + ah} L${ax + aw},${ay + 10} L${ax + 90},${ay + 60} L${ax + 105},${ay + 110} L${ax + 95},${ay + ah} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>` + path(`M${ax + 60},${ay + 5} Q${ax + 70},${ay + 75} ${ax + 80},${ay + ah - 5}`, { stroke: C.blue, w: 5 }) + R(`M${ax + 52},${ay + 5} Q${ax + 60},${ay + 75} ${ax + 70},${ay + ah - 5}`); }
    b += t(x + 190, y + 50, h, { size: 21, weight: 700 }) + para(x + 190, y + 80, s, w - 206, { size: 16, fill: C.muted }, 21);
    b += para(x + 20, y + 200, '', 10);
  });
  b += t(450, 628, 'Schematic sketches, not maps. Air: airports spread widely, the only quick link to remote towns', { size: 15, anchor: 'middle', fill: C.muted, italic: true }) + t(450, 648, 'such as Gilgit, Skardu, Chitral and Turbat.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('01-network-patterns',
    svg(900, 668, 'Four patterns in Pakistan’s transport network', b),
    'Four sketches describe network patterns: a dense grid on the Indus Plain of Punjab, linear corridors along both banks of the Indus in Sindh, sparse long roads across Balochistan, and routes confined to narrow valleys in the northern mountains.',
    'Describe a network by its density and pattern: grid, linear, sparse or valley-bound.',
    '## How do you describe the pattern of Pakistan\'s transport networks?');
}

// 02 Improvements timeline
{
  const ev = [
    [1997, 'M-2 Lahore–Islamabad', 'South Asia’s first motorway', 'up'],
    [2015, 'Karakoram Highway tunnels', 'around Attabad Lake', 'down'],
    [2018, 'Islamabad International Airport', '', 'up'],
    [2019, 'M-5 Multan–Sukkur', '', 'down'],
    [2020, 'Orange Line metro', 'Lahore', 'up'],
    [2025, 'New Gwadar International', 'Airport, opened for flights', 'down'],
  ];
  const X = (y) => 80 + (y - 1995) * 25, ay = 330;
  let b = `<line x1="60" y1="${ay}" x2="850" y2="${ay}" stroke="${C.ink}" stroke-width="4"/>`;
  for (let y = 1995; y <= 2025; y += 5) b += `<line x1="${X(y)}" y1="${ay - 6}" x2="${X(y)}" y2="${ay + 6}" stroke="${C.ink}" stroke-width="2"/>` + (y < 2025 ? t(X(y), ay + 26, String(y), { size: 15, anchor: 'middle', fill: C.muted }) : '');
  const lx = { 1997: 150, 2015: 400, 2018: 520, 2019: 600, 2020: 760, 2025: 760 };
  const ly = { 1997: 200, 2015: 430, 2018: 170, 2019: 520, 2020: 240, 2025: 430 };
  ev.forEach(([yr, h, s, d]) => {
    const x = X(yr), tx = lx[yr], ty = ly[yr];
    b += `<line x1="${x}" y1="${ay}" x2="${tx}" y2="${d === 'up' ? ty + (s ? 30 : 10) : ty - 40}" stroke="${C.tealDark}" stroke-width="2.5"/>` + `<circle cx="${x}" cy="${ay}" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
    b += t(tx, ty - 22, String(yr), { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + t(tx, ty, h, { size: 17, weight: 700, anchor: 'middle' }) + (s ? t(tx, ty + 20, s, { size: 15, anchor: 'middle', fill: C.muted }) : '');
  });
  b += panel(30, 580, 840, 150) + t(54, 614, 'Also', { size: 18, weight: 700 }) +
    blist(54, 646, ['Other motorways: M-1, M-4, M-9, Lahore–Sialkot, Hazara', 'Bus rapid transit in Lahore, Rawalpindi–Islamabad, Multan, Peshawar, Karachi', 'Rail: ML-1 upgrade planned under CPEC; feasibility depends on large loans'], 790, { size: 16, gap: 6 }).svg;
  add('02-recent-improvements',
    svg(900, 750, 'Recent transport improvements', b),
    'A timeline of dated improvements: the M-2 Lahore–Islamabad motorway (1997), Karakoram Highway tunnels around Attabad Lake (2015), Islamabad International Airport (2018), the M-5 Multan–Sukkur motorway (2019), Lahore’s Orange Line (2020) and New Gwadar International Airport (2025). A box lists other motorways, bus rapid transit and the planned ML-1 rail upgrade.',
    'Motorways came first; airports, tunnels and urban transit followed.',
    '## What improvements have taken place recently?');
}

// 03 Choosing a mode
{
  const modes = [
    ['Road', C.rust, 'Door-to-door; reaches villages; suits perishables such as mangoes', 'Accidents, congestion, overloaded trucks, fuel imports'],
    ['Rail', C.blue, 'Cheapest for bulky goods over long distance: coal, oil, containers, wheat', 'Old track and rolling stock, losses, fixed routes'],
    ['Air', C.tealDark, 'Fastest; small, high-value or urgent goods; links remote northern towns', 'Expensive; small loads; weather cancellations'],
  ];
  let b = '';
  const qs = ['Perishable, or needs to reach a village?', 'Bulky, heavy and travelling far?', 'Small, valuable or urgent?'];
  modes.forEach(([m, c, best, bad], i) => {
    const y = 120 + i * 190;
    b += rect(30, y, 300, 160, '#ffffff', C.panelEdge, 2.5, 12) + t(52, y + 34, 'If the load is…', { size: 15, fill: C.muted, italic: true }) + para(52, y + 66, qs[i], 260, { size: 19, weight: 700 }, 24);
    b += arrow(334, y + 80, 380, y + 80, { w: 4 });
    b += rect(386, y, 484, 160, '#ffffff', c, 3, 12) + `<rect x="386" y="${y}" width="110" height="160" rx="12" fill="${c}"/>` + t(441, y + 88, m, { size: 24, weight: 700, anchor: 'middle', fill: '#ffffff' });
    b += t(512, y + 32, 'Best for', { size: 15, weight: 700, fill: c }) + para(512, y + 54, best, 340, { size: 16 }, 20) + t(512, y + 108, 'Drawbacks', { size: 15, weight: 700, fill: C.muted }) + para(512, y + 130, bad, 340, { size: 16, fill: C.muted }, 20);
  });
  b += t(450, 700, 'Rail is cheapest for bulk, yet road carries most freight: old track and slow services push firms to trucks.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('03-road-rail-air',
    svg(900, 724, 'Road, rail or air?', b),
    'Three questions lead to a transport mode: perishable goods or village destinations suit road; bulky goods over long distances suit rail; small, valuable or urgent goods suit air. Each mode lists what it is best for and its drawbacks.',
    'Match the load to the mode: road for flexibility, rail for bulk, air for speed.',
    '## How do road, rail and air compare?');
}

// 04 Border crossings (schematic, no geography)
{
  const nb = [
    ['China', 'Karakoram Highway over the Khunjerab Pass (about 4,700 m); usually closed in winter', 'No rail link'],
    ['Afghanistan', 'Torkham via the Khyber Pass; Chaman on the Quetta–Kandahar road', 'Line to Chaman via the Khojak Tunnel, ending at the border'],
    ['Iran', 'Taftan on the Quetta–Zahedan road', 'Quetta–Taftan–Zahedan line'],
    ['India', 'Wagah near Lahore', 'Wagah–Attari line; services suspended since 2019'],
  ];
  let b = '';
  b += rect(330, 327, 240, 90, C.mustard, C.ink, 3, 16) + t(450, 381, 'Pakistan', { size: 24, weight: 700, anchor: 'middle' });
  nb.forEach(([n, road, rail], i) => {
    const x = 30 + (i % 2) * 560, y = 120 + Math.floor(i / 2) * 260, w = 280, h = 244;
    b += `<line x1="${x + (i % 2 ? 0 : w)}" y1="${y + h / 2}" x2="${i % 2 ? 570 : 330}" y2="${372}" stroke="${C.panelEdge}" stroke-width="5"/>`;
    b += panel(x, y, w, h) + t(x + 20, y + 38, n, { size: 22, weight: 700, fill: C.blue });
    b += t(x + 20, y + 74, 'ROAD', { size: 15, weight: 700, fill: C.rust }) + para(x + 20, y + 98, road, w - 48, { size: 16 }, 21);
    const rl = lines(road, 16, w - 48);
    b += t(x + 20, y + 120 + rl * 21, 'RAIL', { size: 15, weight: 700, fill: C.tealDark }) + para(x + 20, y + 144 + rl * 21, rail, w - 48, { size: 16 }, 21);
  });
  b += t(450, 650, 'Schematic only: the boxes do not show where each neighbour lies.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('04-border-crossings',
    svg(900, 670, 'Routes across Pakistan’s borders', b),
    'Four cards list the road crossings, passes and rail links with each neighbour: China via the Khunjerab Pass with no railway; Afghanistan via Torkham and the Khyber Pass and via Chaman, with a line through the Khojak Tunnel; Iran via Taftan by road and rail; India via Wagah, with rail services suspended since 2019.',
    'Only some crossings have a railway, and the China route closes in winter.',
    '## Which routes cross Pakistan\'s borders?');
}

// 05 Seaports
{
  const ports = [
    ['Keamari', 'Karachi Port', 'The original port, on Karachi’s natural harbour'],
    ['Port Qasim', 'east of Karachi', 'Built later to relieve congestion and handle bulk cargo: coal, oil, LNG'],
    ['Gwadar', 'Balochistan', 'Deep-water port near the Strait of Hormuz, developed with Chinese support as the end point of CPEC; still lacks road, rail, water and power links'],
  ];
  let b = '';
  ports.forEach(([n, where, s], i) => {
    const x = 30 + i * 285, w = 270;
    b += panel(x, 110, w, 330) + `<path d="M${x + 20},${200} q20,-14 40,0 q20,-14 40,0 q20,-14 40,0 q20,-14 40,0 q20,-14 40,0 q20,-14 40,0" fill="none" stroke="${C.blue}" stroke-width="3"/>` +
      `<path d="M${x + 90},${186} L${x + 180},${186} L${x + 168},${170} L${x + 102},${170} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/><rect x="${x + 116}" y="152" width="22" height="18" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.5"/><rect x="${x + 140}" y="152" width="22" height="18" fill="${C.teal}" stroke="${C.ink}" stroke-width="1.5"/>` +
      t(x + 20, 246, n, { size: 23, weight: 700 }) + t(x + 20, 272, where, { size: 16, fill: C.muted, italic: true }) + para(x + 20, 306, s, w - 40, { size: 16 }, 21);
  });
  add('05-seaports',
    svg(900, 460, 'Pakistan’s three seaports', b),
    'Three cards compare the seaports: Keamari, the original Karachi Port on a natural harbour; Port Qasim east of Karachi, built to relieve congestion and handle bulk cargo; and Gwadar, a deep-water port in Balochistan at the end of CPEC that still lacks road, rail, water and power links.',
    'Keamari is the original port, Qasim takes bulk, and Gwadar is the deep-water newcomer.',
    '## Which routes cross Pakistan\'s borders?');
}

// 06 Dry port
{
  const steps = [
    ['Inland factory', 'e.g. a Sialkot sports-goods firm', '#ffffff', C.panelEdge],
    ['Dry port', 'customs clearance; goods packed into sealed containers', C.mustard, C.ink],
    ['Rail or road', 'sealed container moves to the coast', '#ffffff', C.panelEdge],
    ['Seaport', 'loaded straight onto the ship', C.tealLight, C.tealDark],
  ];
  let b = '';
  steps.forEach(([h, s, f, e], i) => {
    const x = 30 + i * 215, w = 195;
    b += rect(x, 120, w, 170, f, e, 2.5, 12) + badge(x + 32, 152, 18, String(i + 1), '#ffffff') + tl(x + 60, 158, wrap(h, 18, w - 70), { size: 18, weight: 700 }, 22) + para(x + 16, 214, s, w - 32, { size: 16, fill: C.ink }, 20);
    if (i < 3) b += arrow(x + w + 2, 205, x + 213, 205, { w: 3.5 });
  });
  b += t(450, 330, 'Examples: Lahore, Faisalabad, Sialkot, Multan, Peshawar, Quetta, and Sost (trade with China)', { size: 16, anchor: 'middle', weight: 600 });
  b += panel(30, 356, 840, 180, C.cream, C.olive) + t(54, 392, 'Why build them? Industry is concentrated inland, far from Karachi.', { size: 18, weight: 700 }) +
    blist(54, 426, ['Clearing customs near the factory saves time and reduces theft', 'Less congestion at the seaports', 'Exporters such as Sialkot’s sports-goods firms can ship directly'], 780, { size: 17, gap: 8, dot: C.olive }).svg;
  add('06-dry-port',
    svg(900, 556, 'How a dry port works', b),
    'Four steps: goods leave an inland factory, are cleared through customs and sealed into containers at a dry port, travel by rail or road to the coast, and are loaded onto a ship. Examples include Lahore, Faisalabad, Sialkot and Sost. A box lists the benefits.',
    'A dry port brings customs clearance to the factory instead of the coast.',
    '## What is a dry port, and why have so many been built?');
}

// 07 Telecommunications
{
  let b = '';
  b += rect(30, 112, 410, 90, C.tealLight, C.tealDark, 2.5, 12) + t(235, 152, 'about 193 million', { size: 24, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(235, 180, 'mobile subscriptions, end of 2024', { size: 16, anchor: 'middle' });
  b += rect(460, 112, 410, 90, C.tealLight, C.tealDark, 2.5, 12) + t(665, 152, 'about 142 million', { size: 24, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(665, 180, 'broadband subscriptions, Sept 2024', { size: 16, anchor: 'middle' });
  b += t(450, 226, 'Source: Pakistan Telecommunication Authority (approximate)', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const uses = [
    ['Education', 'AIOU radio and TV (since 1974); Virtual University online (2002); TV lessons in 2020'],
    ['Industry and trade', 'Faisalabad and Sialkot exporters email buyers, share designs, track shipments'],
    ['Services', 'Mobile banking (Easypaisa, JazzCash), e-commerce, freelancing; farmers check prices'],
    ['Broadcasting', 'Radio and TV spread news, health campaigns and flood warnings'],
  ];
  uses.forEach(([h, s], i) => { const x = 30 + (i % 2) * 430, y = 244 + Math.floor(i / 2) * 134, w = 410; b += tbox(x, y, w, h, s, { h: 122 }); });
  const y = 522;
  b += panel(30, y, 840, 172, '#f6e4d8', C.rust) + t(54, y + 36, 'Problems in some areas', { size: 19, weight: 700, fill: C.rust }) +
    blist(54, y + 70, ['High cost of masts and fibre in mountains and deserts', 'Scattered, low-income people: little revenue', 'Power cuts; low literacy'], 380, { size: 16, gap: 6, dot: C.rust }).svg +
    blist(464, y + 70, ['Flood and earthquake damage', 'Security-related shutdowns'], 380, { size: 16, gap: 6, dot: C.rust }).svg;
  b += panel(30, y + 190, 840, 96, C.cream, C.olive) + t(450, y + 226, 'The Universal Service Fund pays operators to extend coverage to unserved areas.', { size: 16, anchor: 'middle' }) + t(450, y + 256, 'Wider access to education, banking and markets, but urban–rural and male–female gaps remain.', { size: 16, weight: 700, anchor: 'middle' });
  add('07-telecommunications',
    svg(900, y + 306, 'Telecommunications and development', b),
    'Two figures show about 193 million mobile and 142 million broadband subscriptions in 2024. Four cards give uses in education, industry and trade, services and broadcasting; a panel lists problems such as the cost of masts in mountains and deserts, low revenue, power cuts and shutdowns.',
    'Phones and the internet widen access, but the benefits are uneven.',
    '## Why do telecommunications matter for development?');
}
