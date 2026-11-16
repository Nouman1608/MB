import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-pakistan-studies-power';
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
// callout label with leader line
const call = (x1, y1, x2, y2, s, { anchor = 'start', color = C.ink, size = 16 } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="1.8"/><circle cx="${x1}" cy="${y1}" r="3.5" fill="${C.ink}"/>` +
  t(x2 + (anchor === 'start' ? 6 : anchor === 'end' ? -6 : 0), y2 + 5, s, { size, weight: 700, anchor, fill: color });
const COAL = '#2b2b2b', OVER = '#b89a6a', ROCK2 = '#d9cdae';

// 01 Coal mining methods
{
  const ph = 262;
  // label with leader: text placed on one side of the end point so the line never crosses it
  const lab = (x1, y1, x2, y2, s, pos, color = C.ink) => {
    const o = { size: 16, weight: 700, fill: color };
    const tx = pos === 'above' ? t(x2, y2 - 8, s, { ...o, anchor: 'middle' }) : pos === 'below' ? t(x2, y2 + 18, s, { ...o, anchor: 'middle' }) : pos === 'left' ? t(x2 - 6, y2 + 5, s, { ...o, anchor: 'end' }) : t(x2 + 6, y2 + 5, s, o);
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="1.8"/><circle cx="${x1}" cy="${y1}" r="3.5" fill="${C.ink}"/>` + tx;
  };
  const inCoal = (x, y, s = 'seam') => t(x, y, s, { size: 16, weight: 700, anchor: 'middle', fill: '#ffffff' });
  let b = '';
  const side = (y, title, desc, where) => t(600, y + 40, title, { size: 22, weight: 700 }) + para(600, y + 72, desc, 250, { size: 16, fill: C.muted }, 21) + (where ? t(600, y + ph - 22, where, { size: 15, weight: 700, fill: C.tealDark, italic: true }) : '');
  // open cast
  let y = 110;
  b += panel(30, y, 840, ph);
  {
    const g = y + 80;
    b += `<rect x="50" y="${g}" width="520" height="${ph - 92}" fill="${ROCK2}"/>`;
    b += `<rect x="50" y="${g}" width="520" height="60" fill="${OVER}"/>` + `<rect x="50" y="${g + 60}" width="520" height="44" fill="${COAL}"/>`;
    b += `<path d="M190,${g} L210,${g} L210,${g + 20} L230,${g + 20} L230,${g + 40} L250,${g + 40} L250,${g + 60} L270,${g + 60} L270,${g + 84} L430,${g + 84} L430,${g + 60} L450,${g + 60} L450,${g + 40} L470,${g + 40} L470,${g + 20} L490,${g + 20} L490,${g} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += `<line x1="50" y1="${g}" x2="570" y2="${g}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += `<path d="M70,${g} Q110,${g - 50} 160,${g}" fill="${OVER}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += lab(110, g - 26, 110, g - 44, 'spoil heap', 'above') + lab(232, g + 28, 300, y + 36, 'benches', 'right') + lab(530, g + 30, 530, y + 40, 'overburden', 'above') + inCoal(110, g + 88);
    b += side(y, 'Open cast', 'Overburden is removed and coal is dug from an open pit. Suits thick seams near the surface.', 'e.g. Thar Block II, Sindh');
  }
  // adit
  y += ph + 16;
  b += panel(30, y, 840, ph);
  {
    const hill = `M50,${y + ph - 12} L50,${y + 200} L250,${y + 200} Q330,${y + 190} 400,${y + 120} Q450,${y + 70} 570,${y + 50} L570,${y + ph - 12} Z`;
    b += `<path d="${hill}" fill="${ROCK2}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
    b += `<path d="M362,${y + 150} L570,${y + 150} L570,${y + 180} L330,${y + 180} Z" fill="${COAL}"/>`;
    b += `<path d="M360,${y + 160} L570,${y + 156} L570,${y + 172} L345,${y + 176} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>`;
    b += arrow(520, y + 166, 380, y + 168, { w: 2.5, color: C.blue });
    b += lab(345, y + 170, 220, y + 130, 'adit entrance', 'left') + lab(470, y + 86, 470, y + 46, 'hillside', 'above') + lab(550, y + 152, 550, y + 118, 'seam', 'above') + lab(440, y + 168, 400, y + 222, 'drainage slope', 'below', C.blue);
    b += side(y, 'Adit', 'A near-horizontal tunnel is driven into a hillside where a seam outcrops.', 'e.g. Duki and Sor Range, Balochistan');
  }
  // shaft
  y += ph + 16;
  b += panel(30, y, 840, ph);
  {
    const g = y + 70;
    b += `<rect x="50" y="${g}" width="520" height="${ph - 82}" fill="${ROCK2}"/>` + `<line x1="50" y1="${g}" x2="570" y2="${g}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += `<rect x="50" y="${g + 130}" width="520" height="34" fill="${COAL}"/>`;
    b += `<rect x="200" y="${g}" width="24" height="150" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>`;
    b += `<rect x="440" y="${g}" width="18" height="150" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>`;
    b += `<rect x="90" y="${g + 136}" width="420" height="22" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>`;
    b += path(`M190,${g} L212,${g - 50} L234,${g} M198,${g - 18} L226,${g - 18}`, { stroke: C.ink, w: 3.5 }) + `<circle cx="212" cy="${g - 50}" r="6" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
    b += arrow(449, g + 120, 449, g - 30, { w: 2.5, color: C.tealDark, marker: 'ahT' });
    b += lab(228, g - 30, 290, g - 40, 'headgear', 'right') + lab(224, g + 70, 300, g + 70, 'shaft', 'right') + t(330, g + 152, 'galleries', { size: 15, weight: 700, anchor: 'middle' }) + inCoal(540, g + 153) + t(470, y + 28, 'ventilation', { size: 16, weight: 700, fill: C.tealDark });
    b += side(y, 'Shaft', 'A vertical shaft reaches deeper seams, with horizontal galleries along the coal.', '');
  }
  add('01-coal-mining-methods',
    svg(900, y + ph + 20, 'Three ways to mine coal', b, 'Simplified cross-sections, not to scale'),
    'Three cross-sections. Open cast: overburden is stripped in benches to reach a seam near the surface, with a spoil heap beside the pit (Thar Block II). Adit: a near-horizontal tunnel enters a hillside where the seam outcrops, sloping out for drainage (Duki, Sor Range). Shaft: headgear over a vertical shaft leads to galleries in a deep seam, with a ventilation shaft.',
    'Depth and terrain decide the method: open cast near the surface, adit into hills, shaft for deep seams.',
    '## How is each fuel extracted?');
}

// 02 Oil and gas trap
{
  const cx = 360, Y = (x, base, A) => base - A * Math.exp(-(((x - cx) / 200) ** 2));
  const xs = []; for (let x = 40; x <= 680; x += 5) xs.push(x);
  const band = (b1, A1, b2, A2, fill) => `<path d="M${xs.map((x) => `${x},${Y(x, b1, A1).toFixed(1)}`).join(' L')} L${[...xs].reverse().map((x) => `${x},${Y(x, b2, A2).toFixed(1)}`).join(' L')} Z" fill="${fill}" stroke="${C.ink}" stroke-width="1.5"/>`;
  // fluid polygon between reservoir top/bottom limited to levels lo..hi
  const fluid = (lo, hi, fill) => {
    const top = [], bot = [];
    xs.forEach((x) => { const yt = Math.max(Y(x, 400, 110), lo), yb = Math.min(Y(x, 520, 110), hi); if (yb > yt) { top.push([x, yt]); bot.push([x, yb]); } });
    if (!top.length) return '';
    return `<path d="M${top.map(([x, y]) => `${x},${y.toFixed(1)}`).join(' L')} L${bot.reverse().map(([x, y]) => `${x},${y.toFixed(1)}`).join(' L')} Z" fill="${fill}"/>`;
  };
  let b = `<rect x="40" y="190" width="640" height="440" fill="${ROCK2}"/>`;
  b += band(300, 110, 340, 110, '#cfc3a0') + band(340, 110, 400, 110, '#8f8f8f') + band(400, 110, 520, 110, '#e8dcb0');
  b += fluid(0, 315, '#fbfaf3') + fluid(315, 365, C.olive) + fluid(365, 999, C.teal);
  b += band(400, 110, 520, 110, 'none');
  b += band(520, 110, 640, 110, '#c7b98f');
  b += `<rect x="40" y="110" width="640" height="80" fill="#e4eef0"/>` + `<line x1="40" y1="190" x2="680" y2="190" stroke="${C.ink}" stroke-width="3"/>`;
  b += path(`M340,190 L360,110 L380,190 M346,165 L374,165 M352,140 L368,140`, { stroke: C.ink, w: 3.5 }) + `<line x1="360" y1="190" x2="360" y2="${Y(360, 400, 110) + 24}" stroke="${C.ink}" stroke-width="4"/>`;
  b += arrow(368, 300, 368, 236, { w: 2.5, color: C.rust, marker: 'ahR' });
  const L = (x1, y1, y2, s, sub) => `<line x1="${x1}" y1="${y1}" x2="700" y2="${y2}" stroke="${C.ink}" stroke-width="1.8"/><circle cx="${x1}" cy="${y1}" r="3.5" fill="${C.ink}"/>` + t(708, y2 + 6, s, { size: 17, weight: 700 }) + (sub ? t(708, y2 + 26, sub, { size: 15, fill: C.muted }) : '');
  b += L(368, 150, 150, 'drilling rig', '') + L(362, 220, 205, 'well', 'fuel flows up or is pumped') + L(520, 305, 262, 'cap rock', 'impermeable') + L(392, 305, 308, 'gas', '') + L(470, 346, 350, 'oil', '') + L(560, 420, 420, 'water', '');
  b += t(360, 600, 'anticline: rock folded upwards', { size: 17, weight: 700, anchor: 'middle' });
  b += panel(30, 650, 840, 74, C.cream, C.olive) + t(54, 684, 'Found by seismic surveys that locate folded rock structures (anticlines);', { size: 17 }) + t(54, 708, 'oil and gas are trapped under impermeable cap rock.', { size: 17 });
  add('02-oil-gas-trap',
    svg(900, 744, 'Where oil and gas are trapped', b, 'Simplified cross-section, not to scale'),
    'A cross-section of an anticline. Under an arch of impermeable cap rock, gas lies above oil, which lies above water. A drilling rig at the surface sends a well down into the trap, and the fuel flows up under pressure or is pumped.',
    'Gas floats above oil, oil above water, all sealed under impermeable cap rock.',
    '## How is each fuel extracted?');
}

// 03 How fuels reach users
{
  const rows = [
    ['Coal', C.ink, [['Thar lignite', 'high moisture'], ['Mine-mouth power station', 'too costly to haul']], [['Imported coal', 'South Africa, Indonesia, Australia'], ['Port Qasim, Karachi', ''], ['Rail and lorries', 'to steel and cement']]],
    ['Gas', C.tealDark, [['Fields', 'Sui, Mari, Qadirpur…'], ['Pipelines', 'Sui Southern; Sui Northern']], [['Off the network', 'many villages, much of Balochistan'], ['LPG cylinders by road', 'costlier, short in winter']]],
    ['Oil', C.rust, [['Imported crude and products', 'Saudi Arabia, UAE, Kuwait'], ['Tankers to Port Qasim', '']], [['White Oil Pipeline', 'to Mahmood Kot near Multan'], ['Rail tank wagons and road tankers', '']]],
  ];
  let b = '';
  let y = 116;
  const node = (x, y, w, [h, s], fill, edge) => {
    const hl = wrap(h, 16, w - 16), sl = s ? wrap(s, 15, w - 16) : [];
    const tot = hl.length * 19 + sl.length * 18; const y0 = y + 43 - tot / 2 + 13;
    return rect(x, y, w, 86, fill, edge, 2, 10) + tl(x + w / 2, y0, hl, { size: 16, weight: 700, anchor: 'middle' }, 19) + tl(x + w / 2, y0 + hl.length * 19, sl, { size: 15, anchor: 'middle', fill: C.muted }, 18);
  };
  rows.forEach(([n, c, a, bb]) => {
    b += panel(30, y, 840, 214) + `<rect x="30" y="${y}" width="110" height="214" rx="14" fill="${c}"/>` + t(85, y + 114, n, { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });
    const w = 215;
    a.forEach((p, i) => { const x = 160 + i * 250; b += node(x, y + 12, w, p, C.tealLight, C.tealDark); if (i < a.length - 1) b += arrow(x + w + 2, y + 55, x + 246, y + 55, { w: 3 }); });
    bb.forEach((p, i) => { const x = 160 + i * 235; b += node(x, y + 114, 205, p, '#ffffff', C.panelEdge); if (i < bb.length - 1) b += arrow(x + 207, y + 157, x + 231, y + 157, { w: 3 }); });
    y += 230;
  });
  b += t(450, y + 8, 'Since 2015, imported LNG has also been regasified at Port Qasim and fed into the gas network.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('03-fuel-journeys',
    svg(900, y + 30, 'How each fuel reaches its users', b),
    'Three rows trace each fuel. Coal: Thar lignite is burned in mine-mouth power stations, while imported coal lands at Port Qasim and Karachi and moves by rail and lorry to steel and cement. Gas: fields feed the Sui Southern and Sui Northern pipelines, and places off the network rely on LPG cylinders by road. Oil: imports arrive by tanker at Port Qasim and move by the White Oil Pipeline, rail tank wagons and road tankers.',
    'Bulky lignite is used at the mine; imported coal and oil move from the port inland.',
    '## What are Pakistan\'s non-renewable resources, and how long will they last?');
}

// 04 Electricity mix
{
  const cards = [
    ['Thermal', C.rust, 'Furnace oil, gas, LNG, imported or Thar coal', 'Sahiwal, Port Qasim, Thar coal plants', 'non-renewable'],
    ['Nuclear', C.blue, 'Nuclear power stations', 'Chashma near Mianwali; K-2 and K-3 at Karachi (2021, 2022)', 'non-renewable'],
    ['Hydel', C.tealDark, 'Falling water', 'Tarbela, Mangla, Warsak; Ghazi–Barotha, Neelum–Jhelum', 'renewable'],
    ['Wind and solar', C.olive, 'Wind and sunlight', 'Jhimpir–Gharo wind corridor; solar parks; rooftop panels since about 2022', 'renewable'],
  ];
  let b = rect(230, 112, 440, 70, C.mustard, C.ink, 3, 14) + t(450, 144, 'Installed capacity about 42,000 MW', { size: 20, weight: 700, anchor: 'middle' }) + t(450, 168, 'March 2024 (Pakistan Economic Survey 2023–24)', { size: 15, anchor: 'middle' });
  cards.forEach(([h, c, fuel, eg, kind], i) => {
    const x = 30 + (i % 2) * 430, y = 206 + Math.floor(i / 2) * 180, w = 410;
    b += panel(x, y, w, 164) + `<rect x="${x}" y="${y}" width="${w}" height="10" rx="5" fill="${c}"/>` + t(x + 22, y + 46, h, { size: 22, weight: 700, fill: c }) +
      rect(x + w - 150, y + 26, 130, 28, kind === 'renewable' ? C.tealLight : '#f6e4d8', 'none', 0, 14) + t(x + w - 85, y + 45, kind, { size: 15, weight: 700, anchor: 'middle', fill: kind === 'renewable' ? C.tealDark : C.rust }) +
      t(x + 22, y + 80, fuel, { size: 16, weight: 600 }) + para(x + 22, y + 110, eg, w - 44, { size: 16, fill: C.muted }, 21);
  });
  b += panel(30, 576, 840, 84, C.cream, C.olive) + t(450, 610, 'Non-renewable fuels are running out and world prices rise and swing,', { size: 17, weight: 600, anchor: 'middle' }) +
    t(450, 636, 'so a high share of imported fuel makes electricity expensive.', { size: 17, weight: 600, anchor: 'middle' });
  add('04-electricity-mix',
    svg(900, 680, 'Where Pakistan’s electricity comes from', b),
    'Installed capacity was about 42,000 MW in March 2024 from four kinds of station: thermal (oil, gas, LNG and coal, such as Sahiwal and Port Qasim), nuclear (Chashma and K-2 and K-3 at Karachi), hydel (Tarbela, Mangla, Warsak and run-of-river schemes) and wind and solar (the Jhimpir–Gharo corridor and rooftop panels).',
    'Two kinds of station burn finite fuel; two use renewable flows.',
    '## How is electricity generated in Pakistan?');
}

// 05 Multi-purpose hydel site
{
  let b = `<rect x="30" y="110" width="840" height="330" fill="#e4eef0"/>`;
  // long profile: upstream wide valley reservoir on left, dam at gorge, river downstream right
  b += `<path d="M30,440 L30,210 Q120,250 200,320 L420,330 L440,230 L470,230 L470,360 Q600,370 870,380 L870,440 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  b += `<path d="M120,262 L440,262 L440,330 L200,320 Q160,290 120,262 Z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>`;
  b += `<path d="M440,230 L470,230 L490,360 L440,360 Z" fill="#cfcfcf" stroke="${C.ink}" stroke-width="3"/>`;
  b += path('M490,352 Q600,362 860,372', { stroke: C.blue, w: 6 });
  b += `<rect x="500" y="320" width="40" height="30" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + t(506, 312, 'power station', { size: 15, weight: 700 });
  b += path('M60,150 q12,-16 24,0 q12,-16 24,0', { stroke: C.blue, w: 3 }) + t(130, 150, 'snowmelt and monsoon rain: large reliable flow', { size: 16, weight: 700, fill: C.blue });
  b += arrow(100, 170, 160, 250, { w: 2.5, color: C.blue });
  b += `<line x1="280" y1="290" x2="280" y2="218" stroke="${C.ink}" stroke-width="1.8"/><circle cx="280" cy="290" r="3.5" fill="${C.ink}"/>` + t(280, 210, 'wide valley upstream stores water', { size: 16, weight: 700, anchor: 'middle' });
  b += `<line x1="458" y1="238" x2="600" y2="196" stroke="${C.ink}" stroke-width="1.8"/><circle cx="458" cy="238" r="3.5" fill="${C.ink}"/>` + tl(606, 192, ['narrow gorge in strong,', 'impermeable rock'], { size: 16, weight: 700 }, 20);
  b += t(860, 418, 'downstream: power, irrigation water, flood control', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
  const y = 460;
  b += tbox(30, y, 410, 'Physical factors', 'Narrow gorge in strong, impermeable rock; large reliable flow; wide valley upstream; low risk of earthquakes and landslides.', { h: 150, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark });
  b += tbox(460, y, 410, 'Human factors', 'Capital (often loans), engineering skill, demand for power and irrigation water downstream, few people to resettle.', { h: 150, fill: C.cream, edge: C.olive, headColor: C.olive });
  b += t(450, y + 184, 'Multi-purpose = stores irrigation water + generates power + helps control floods', { size: 17, weight: 700, anchor: 'middle' });
  b += t(450, y + 210, 'Diamer–Bhasha and Dasu (upper Indus) show the cost and silting problems such schemes face.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('05-hydel-site',
    svg(900, y + 232, 'Choosing a site for a multi-purpose dam', b, 'Simplified long profile, not to scale'),
    'A long profile of a river: snowmelt and monsoon rain fill a reservoir in a wide valley upstream, held by a dam in a narrow gorge of strong, impermeable rock; downstream the scheme supplies power, irrigation water and flood control. Boxes list the physical and human factors that favour a site.',
    'A narrow gorge, a wide valley behind it and a reliable flow make the best hydel site.',
    '## What makes a good site for a multi-purpose hydel scheme?');
}

// 06 Unreliable supply
{
  let b = '';
  // capacity vs supply bars (schematic)
  b += t(60, 140, 'Installed capacity', { size: 18, weight: 700 }) + rect(260, 118, 560, 36, C.teal, C.ink, 2, 6);
  b += t(60, 196, 'Actual supply', { size: 18, weight: 700 }) + rect(260, 174, 360, 36, C.mustard, C.ink, 2, 6) + `<rect x="620" y="174" width="200" height="36" fill="none" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="8 6"/>` + t(720, 198, 'shortfall', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(450, 238, 'Schematic: when supply falls short of demand, load-shedding follows', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const causes = [
    ['Rising demand', 'population, cities and industry'],
    ['Costly imported fuel', 'some stations left idle'],
    ['Low winter rivers', 'hydel output drops'],
    ['Losses and unpaid bills', 'transmission losses; “circular debt”'],
    ['Distance from the grid', 'remote Balochistan, Thar, northern mountains'],
  ];
  causes.forEach(([h, s], i) => { const x = 30 + (i % 3) * 283, y = 262 + Math.floor(i / 3) * 104, w = 268; b += rect(x, y, w, 90, '#f6e4d8', C.rust, 2.5, 12) + t(x + 16, y + 32, h, { size: 18, weight: 700 }) + para(x + 16, y + 58, s, w - 32, { size: 15, fill: C.muted }, 19); });
  b += rect(596, 366, 274, 90, C.cream, C.olive, 2.5, 12) + t(612, 398, 'Result', { size: 18, weight: 700, fill: C.olive }) + t(612, 424, 'load-shedding; many areas', { size: 15, fill: C.ink }) + t(612, 443, 'cannot develop', { size: 15, fill: C.ink });
  const y = 480;
  b += t(450, y + 10, 'Small-scale solutions for remote places', { size: 19, weight: 700, anchor: 'middle' });
  b += tbox(30, y + 26, 410, 'Micro-hydel', 'Fast mountain streams in Chitral and Gilgit-Baltistan.', { h: 100, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark });
  b += tbox(460, y + 26, 410, 'Solar home systems', 'Sunny, scattered settlements in Balochistan and Thar.', { h: 100, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark });
  add('06-unreliable-supply',
    svg(900, y + 146, 'Why electricity supply falls short', b),
    'A schematic bar shows actual supply falling short of installed capacity. Five causes are listed: rising demand, costly imported fuel, low winter rivers, losses and unpaid bills (circular debt) and distance from the grid. Below, micro-hydel in Chitral and Gilgit-Baltistan and solar home systems in Balochistan and Thar are shown as small-scale solutions.',
    'Capacity is not supply: fuel costs, low rivers and losses leave a shortfall.',
    '## Why is electricity supply still unreliable?');
}
