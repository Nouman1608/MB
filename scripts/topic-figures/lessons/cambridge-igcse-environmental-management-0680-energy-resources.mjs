// Topic figures for cambridge-igcse-environmental-management-0680-energy-resources
import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- local helpers (kept inside this lesson file on purpose) ----
const esc = (s) => String(s).replace(/&(?![a-z#0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tw = (s, size, weight = 400) => String(s).replace(/&[a-z#0-9]+;/g, 'x').length * size * (weight >= 600 ? 0.575 : 0.535);
const wrap = (s, size, width, weight = 400) => {
  const lines = [''];
  for (const w of String(s).split(' ')) {
    const cur = lines[lines.length - 1];
    const cand = cur ? cur + ' ' + w : w;
    if (cur && tw(cand, size, weight) > width) lines.push(w); else lines[lines.length - 1] = cand;
  }
  return lines;
};
// wrapped paragraph; returns svg string. ph() gives its height.
const para = (x, y, s, width, o = {}) => {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  return tl(x, y, wrap(s, size, width, o.weight).map(esc), { ...o, size }, lh);
};
const ph = (s, width, o = {}) => { const size = o.size || 17, lh = o.lh || Math.round(size * 1.32); return wrap(s, size, width, o.weight).length * lh; };
// card: optional title + body text (string, or array of strings = separate paragraphs/bullets)
const cardLayout = (w, o) => {
  const pad = o.pad ?? 18, ts = o.tsize || 20, bs = o.bsize || 17, inner = w - 2 * pad;
  const tLines = o.title ? wrap(o.title, ts, inner, 700) : [];
  const body = o.body == null ? [] : Array.isArray(o.body) ? o.body : [o.body];
  const blh = Math.round(bs * 1.32), tlh = Math.round(ts * 1.25);
  const bLines = body.map((b) => wrap((o.bullet ? '• ' : '') + b, bs, inner - (o.bullet ? 0 : 0), o.bweight));
  const contentH = tLines.length * tlh + (tLines.length && body.length ? 8 : 0) + bLines.reduce((a, l) => a + l.length * blh, 0) + Math.max(0, body.length - 1) * (o.gap ?? 6);
  return { pad, ts, bs, inner, tLines, bLines, blh, tlh, contentH, h: contentH + 2 * pad - 4 + (o.top || 0) };
};
const cardH = (w, o) => cardLayout(w, o).h;
const card = (x, y, w, o = {}) => {
  const L = cardLayout(w, o);
  const h = o.h || L.h;
  const anchor = o.center ? 'middle' : 'start';
  const tx = o.center ? x + w / 2 : x + L.pad;
  let yy = y + (o.top || 0) + L.pad + L.ts * 0.78 + (o.vcenter === false ? 0 : (h - L.h) / 2);
  if (!o.title) yy = yy - L.ts * 0.78 + L.bs * 0.78;
  let s = o.noBox ? '' : `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${o.fill || C.panel}" stroke="${o.edge || C.panelEdge}" stroke-width="${o.ew ?? 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
  L.tLines.forEach((ln) => { s += t(tx, yy, esc(ln), { size: L.ts, weight: 700, fill: o.tfill || C.ink, anchor }); yy += L.tlh; });
  if (L.tLines.length && L.bLines.length) yy += 8;
  L.bLines.forEach((lines, i) => { lines.forEach((ln) => { s += t(tx, yy, esc(ln), { size: L.bs, fill: o.bfill || C.ink, anchor, weight: o.bweight || 400 }); yy += L.blh; }); yy += o.gap ?? 6; });
  return s;
};
// rounded tag sized to its text
const tag = (x, y, s, o = {}) => {
  const size = o.size || 16, w = tw(s, size, o.weight || 600) + 24, h = size + 14;
  const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w : x;
  return `<rect x="${x0}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2"/>` + t(x0 + w / 2, y + size * 0.36, esc(s), { size, weight: o.weight || 600, anchor: 'middle', fill: o.color || C.ink });
};
// curved arrow (quadratic)
const carrow = (x1, y1, cx, cy, x2, y2, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="M${x1},${y1} Q${cx},${cy} ${x2},${y2}" fill="none" stroke="${color}" stroke-width="${w}" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// poly-line arrow through points
const parrow = (pts, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linejoin="round" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const notToScale = (x, y, anchor = 'end') => t(x, y, 'Not to scale', { size: 15, italic: true, fill: C.muted, anchor });
// simple chart frame: returns {svg, X, Y}
const chart = (x0, y0, w, h, { xmin, xmax, ymin, ymax, xticks, yticks, xlabel, ylabel, xfmt = (v) => v, yfmt = (v) => v, grid = true }) => {
  const X = (v) => x0 + ((v - xmin) / (xmax - xmin)) * w;
  const Y = (v) => y0 + h - ((v - ymin) / (ymax - ymin)) * h;
  let s = `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="${C.panel}"/>`;
  for (const v of yticks) s += (grid ? `<line x1="${x0}" y1="${Y(v)}" x2="${x0 + w}" y2="${Y(v)}" stroke="${C.panelEdge}" stroke-width="1.5"/>` : '') + `<line x1="${x0 - 7}" y1="${Y(v)}" x2="${x0}" y2="${Y(v)}" stroke="${C.ink}" stroke-width="2"/>` + t(x0 - 12, Y(v) + 6, yfmt(v), { size: 16, anchor: 'end' });
  for (const v of xticks) s += `<line x1="${X(v)}" y1="${y0 + h}" x2="${X(v)}" y2="${y0 + h + 7}" stroke="${C.ink}" stroke-width="2"/>` + t(X(v), y0 + h + 28, xfmt(v), { size: 16, anchor: 'middle' });
  s += `<path d="M${x0},${y0} L${x0},${y0 + h} L${x0 + w},${y0 + h}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  if (xlabel) s += t(x0 + w / 2, y0 + h + 60, esc(xlabel), { size: 17, weight: 600, anchor: 'middle' });
  if (ylabel) s += `<text x="0" y="0" transform="translate(${x0 - 62},${y0 + h / 2}) rotate(-90)" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle">${esc(ylabel)}</text>`;
  return { svg: s, X, Y };
};
const dot = (x, y, r = 7, fill = C.tealDark) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
const line = (x1, y1, x2, y2, color = C.ink, w = 2.5, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const rect = (x, y, w, h, fill, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 0}" fill="${fill}"${o.stroke ? ` stroke="${o.stroke}" stroke-width="${o.sw ?? 2.5}"` : ''}${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.op ? ` opacity="${o.op}"` : ''}/>`;
const tree = (x, y, s = 1) => `<rect x="${x - 4 * s}" y="${y - 22 * s}" width="${8 * s}" height="${22 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x}" cy="${y - 38 * s}" r="${22 * s}" fill="${C.grass}" stroke="${C.ink}" stroke-width="2.5"/>`;
const cloud = (cx, cy, w, h, fill = C.tealLight) => {
  const rx = w / 2, ry = h / 2;
  return `<path d="M${cx - rx},${cy + ry} Q${cx - rx - ry * 0.9},${cy + ry} ${cx - rx},${cy} Q${cx - rx + 5},${cy - ry * 1.2} ${cx - rx * 0.45},${cy - ry * 0.85} Q${cx - rx * 0.2},${cy - ry * 1.9} ${cx + rx * 0.25},${cy - ry * 1.1} Q${cx + rx * 0.75},${cy - ry * 1.6} ${cx + rx * 0.85},${cy - ry * 0.3} Q${cx + rx + ry * 0.9},${cy - ry * 0.2} ${cx + rx},${cy + ry} Z" fill="${fill}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
};

export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

export const slug = 'cambridge-igcse-environmental-management-0680-energy-resources';

// 01 Coal formation in four stages
{
  const steps = [
    ['1', 'Swamp forest', 'large plants grow in warm, swampy forests'],
    ['2', 'Peat', 'dead plants fall into waterlogged ground with little oxygen, so they only partly decay'],
    ['3', 'Burial', 'sediment piles on top; over millions of years pressure and heat drive out water and gases'],
    ['4', 'Coal seam', 'the carbon-rich layer lies between layers of sedimentary rock'],
  ];
  const pw = 201, ph = 230, y0 = 110;
  let s = '';
  steps.forEach(([n, head, body], i) => {
    const x = 30 + i * 213, gy = y0 + 150;
    s += panel(x, y0, pw, 340);
    if (i === 0) { s += rect(x + 2, gy, pw - 4, 66, C.teal) + rect(x + 2, gy + 30, pw - 4, 36, C.cream); [40, 95, 150].forEach((dx, j) => { s += tree(x + dx, gy + 4, 0.9 + (j % 2) * 0.25); }); }
    if (i === 1) { s += rect(x + 2, gy, pw - 4, 30, C.teal) + rect(x + 2, gy + 30, pw - 4, 36, C.cream) + rect(x + 10, gy + 12, pw - 20, 22, C.rockDark, { rx: 4 }); s += path(`M${x + 30},${gy + 16} l40,8 M${x + 90},${gy + 22} l50,-6 M${x + 140},${gy + 18} l30,10`, { stroke: C.ink, w: 3 }); s += t(x + pw / 2, gy - 14, 'little oxygen', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }); }
    if (i === 2) { [C.sand, C.rock, C.sand].forEach((f, j) => { s += rect(x + 2, gy - 60 + j * 22, pw - 4, 22, f, { stroke: C.ink, sw: 1.5 }); }); s += rect(x + 2, gy + 6, pw - 4, 18, C.rockDark, { stroke: C.ink, sw: 1.5 }) + rect(x + 2, gy + 24, pw - 4, 42, C.cream); s += arrow(x + 50, gy - 96, x + 50, gy - 66, { w: 3.5 }) + arrow(x + 150, gy - 96, x + 150, gy - 66, { w: 3.5 }) + t(x + pw / 2, gy - 74, 'pressure', { size: 15, anchor: 'middle', weight: 600 }) + t(x + pw / 2, gy + 56, 'heat at depth', { size: 15, anchor: 'middle', weight: 600, fill: C.rust }); }
    if (i === 3) { [C.sand, C.rock, C.sand, C.rock].forEach((f, j) => { s += rect(x + 2, gy - 70 + j * 22, pw - 4, 22, f, { stroke: C.ink, sw: 1.5 }); }); s += rect(x + 2, gy + 18, pw - 4, 14, C.ink) + rect(x + 2, gy + 32, pw - 4, 34, C.rock, { stroke: C.ink, sw: 1.5 }); s += t(x + pw - 10, gy + 14, 'coal', { size: 15, anchor: 'end', weight: 700 }); }
    s += badge(x + 26, y0 + 28, 17, n, i === 3 ? C.mustard : C.cream) + t(x + 52, y0 + 35, head, { size: 18, weight: 700 });
    s += para(x + 16, gy + 98, body, pw - 32, { size: 15 });
    if (i < 3) s += arrow(x + pw + 1, y0 + 190, x + 211, y0 + 190, { w: 3 });
  });
  s += t(450, 480, 'Key condition: buried before it could fully decay, because decay needs oxygen.', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  add('01-coal-formation',
    svg(900, 510, 'How coal formed', s),
    'Four stages. 1: large plants grow in a warm swampy forest. 2: dead plants fall into waterlogged ground with little oxygen and form partly decayed peat. 3: sediment buries the peat and pressure and heat drive out water and gases over millions of years. 4: a seam of coal lies between layers of sedimentary rock.',
    'Plants, waterlogged peat, burial, then heat and pressure over millions of years.',
    '## How fossil fuels formed');
}

// 02 Oil and gas trap
{
  let s = panel(30, 110, 840, 470);
  // layered rock with dome
  const dome = (y, a) => `M32,${y + a} Q450,${y - a} 868,${y + a}`;
  const band = (y1, y2, a, fill) => `<path d="${dome(y1, a)} L868,${y2 + a} Q450,${y2 - a} 32,${y2 + a} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
  s += band(170, 250, 60, C.rock);
  s += band(250, 340, 60, C.sand);
  s += band(340, 420, 60, C.rockDark);
  s += rect(32, 480, 836, 98, C.panel);
  // fluids in reservoir beneath cap (inside sand band near crest)
  s += `<clipPath id="res"><path d="${dome(250, 60)} L868,${340 + 60} Q450,${340 - 60} 32,${340 + 60} Z"/></clipPath>`;
  s += `<g clip-path="url(#res)"><rect x="300" y="180" width="300" height="70" fill="${C.panel}" opacity="0.85"/><rect x="250" y="250" width="400" height="44" fill="${C.ink}" opacity="0.75"/><rect x="32" y="294" width="836" height="140" fill="${C.teal}" opacity="0.7"/></g>`;
  s += t(450, 232, 'natural gas', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 280, 'oil', { size: 17, weight: 700, anchor: 'middle', fill: C.panel }) + t(450, 330, 'water', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  s += t(858, 255, 'impermeable cap rock', { size: 16, weight: 700, anchor: 'end' }) + t(858, 335, 'permeable rock', { size: 16, weight: 700, anchor: 'end' }) + t(858, 355, '(e.g. sandstone)', { size: 15, fill: C.muted, anchor: 'end' }) + t(858, 428, 'source rock, e.g. shale', { size: 16, weight: 700, fill: C.panel, anchor: 'end' });
  [[560, 420], [620, 430], [340, 420], [280, 430]].forEach(([x, y]) => { s += arrow(x, y, x + (x > 450 ? -30 : 30), y - 70, { w: 3, color: C.rust, marker: 'ahR' }); });
  s += t(450, 510, 'Oil and gas are less dense than water, so they rise through permeable rock', { size: 16, anchor: 'middle', weight: 600, fill: C.rust }) + t(450, 532, 'until an impermeable layer stops them. Gas collects above the oil.', { size: 16, anchor: 'middle', weight: 600, fill: C.rust });
  s += notToScale(858, 566);
  add('02-oil-gas-trap',
    svg(900, 610, 'Where oil and gas collect', s),
    'Cross-section of folded rock layers. Oil and gas formed from plankton in a source rock rise through permeable rock such as sandstone until they meet impermeable cap rock at the top of a dome. Natural gas collects at the top, oil beneath it and water below.',
    'Without an impermeable cap rock, the oil and gas would escape to the surface.',
    '## How fossil fuels formed');
}

// 03 Renewable or non-renewable
{
  let s = '';
  s += panel(30, 110, 540, 430) + rect(30, 110, 540, 60, C.teal, { stroke: C.tealDark, sw: 2.5, rx: 14 }) + t(300, 150, 'Renewable (non-finite)', { size: 22, weight: 700, anchor: 'middle' });
  s += panel(590, 110, 280, 430) + rect(590, 110, 280, 60, C.rock, { stroke: C.ink, sw: 2.5, rx: 14 }) + t(730, 150, 'Non-renewable (finite)', { size: 20, weight: 700, anchor: 'middle' });
  s += t(54, 206, 'Biofuels', { size: 18, weight: 700, fill: C.tealDark });
  ['bioethanol', 'biomass', 'biogas', 'wood'].forEach((b, i) => { s += tag(54 + i * 124, 238, b, { size: 16, fill: C.tealLight, edge: C.tealDark }); });
  const ren = ['geothermal power', 'hydro-electric power', 'tidal power', 'wave power', 'solar power', 'wind power'];
  ren.forEach((r, i) => { s += tag(54 + (i % 2) * 250, 300 + Math.floor(i / 2) * 48, r, { size: 17, fill: C.panel, edge: C.ink }); });
  s += t(614, 206, 'Fossil fuels', { size: 18, weight: 700 });
  ['coal', 'petroleum', 'natural gas'].forEach((b, i) => { s += tag(614, 238 + i * 44, b, { size: 16, fill: C.cream, edge: C.olive }); });
  s += t(614, 400, 'Nuclear power', { size: 18, weight: 700 }) + tag(614, 432, 'uranium', { size: 16, fill: C.cream, edge: C.olive });
  s += para(54, 470, 'Biofuels are renewable only if plants are replanted as fast as they are used.', 490, { size: 16, fill: C.muted, italic: true });
  s += para(614, 476, 'Uranium is a finite ore, even though nuclear is low-carbon.', 236, { size: 15, fill: C.muted, italic: true });
  add('03-classification',
    svg(900, 570, 'Renewable or non-renewable?', s),
    'Two columns. Renewable: the four biofuels (bioethanol, biomass, biogas and wood), geothermal, hydro-electric, tidal, wave, solar and wind power. Non-renewable: the fossil fuels coal, petroleum and natural gas, and nuclear power using uranium.',
    'Nuclear is non-renewable: uranium is finite, however low-carbon its electricity.',
    '## Classifying energy resources');
}

// 04 How electricity is generated
{
  let s = '';
  const groups = [
    ['Make steam', C.rust, ['fossil fuels: burned in a boiler', 'biofuels: burned', 'nuclear: fission heats water', 'geothermal: steam from hot rocks']],
    ['Moving water', C.blue, ['HEP: water falls from a reservoir', 'tidal: tide flows in and out', 'wave: up-and-down motion']],
    ['Moving air', C.tealDark, ['wind turns the blades']],
  ];
  let y = 110;
  const ys = [];
  groups.forEach(([head, col, items]) => {
    const h = 44 + items.length * 26;
    s += rect(30, y, 470, h, C.panel, { stroke: col, sw: 2.5, rx: 12 }) + t(50, y + 30, head, { size: 19, weight: 700, fill: col });
    items.forEach((it, j) => { s += t(50, y + 58 + j * 26, '• ' + it, { size: 16 }); });
    ys.push(y + h / 2); y += h + 18;
  });
  s += card(590, 190, 130, { title: 'turbine', tsize: 20, center: true, h: 80, fill: C.rock, edge: C.ink });
  s += card(590, 330, 130, { title: 'generator', tsize: 20, center: true, h: 80, fill: C.mustard, edge: C.ink });
  s += arrow(655, 274, 655, 324, { w: 4 }) + t(665, 306, 'turns', { size: 15, fill: C.muted });
  ys.forEach((yy) => { s += arrow(504, yy, 584, 230, { w: 3.5 }); });
  s += arrow(724, 370, 800, 370, { w: 5, color: C.olive, marker: 'ahO' }) + t(812, 365, 'elec-', { size: 17, weight: 700, fill: C.olive }) + t(812, 386, 'tricity', { size: 17, weight: 700, fill: C.olive });
  const solarY = y;
  s += rect(30, solarY, 470, 96, C.cream, { stroke: C.olive, sw: 2.5, rx: 12 }) + t(50, solarY + 30, 'Solar photovoltaic cells', { size: 19, weight: 700, fill: C.olive }) + t(50, solarY + 58, 'convert light directly into electricity:', { size: 16 }) + t(50, solarY + 80, 'no turbine at all', { size: 16, weight: 700 });
  s += parrow([[504, solarY + 48], [840, solarY + 48], [840, 400]], { w: 3.5, color: C.olive, marker: 'ahO', dash: '10 6' });
  s += t(530, solarY + 78, 'Solar thermal stations use mirrors', { size: 15, fill: C.muted, italic: true }) + t(530, solarY + 97, 'to heat a fluid and make steam instead.', { size: 15, fill: C.muted, italic: true });
  add('04-turbine-generator',
    svg(900, solarY + 126, 'One final step: turbine then generator', s),
    'Three groups of resources turn a turbine, which turns a generator that produces electricity: those that make steam (fossil fuels, biofuels, nuclear, geothermal), those that use moving water (HEP, tidal, wave) and wind. Solar photovoltaic cells skip the turbine and convert light directly into electricity.',
    'Ask what turns the turbine; only solar cells skip the turbine altogether.',
    '## How each resource generates electricity');
}

// 05 Eight factors affecting demand
{
  const f = [
    ['Transport', 'more cars, lorries and flights need petroleum'],
    ['Wealth', 'more appliances, heating, cooling and vehicles'],
    ['Climate', 'cold winters need heating; hot summers need cooling'],
    ['Population size', 'more people need more energy, even at the same use each'],
    ['Industry', 'steel and cement use large amounts of energy'],
    ['Disruption to supply', 'wars, disasters or strikes raise prices; people use less or switch'],
    ['Unreliable supply', 'power cuts push people to generators or their own solar panels'],
    ['Scarcity', 'price rises; demand shifts to alternatives'],
  ];
  let s = '';
  const cw = 405, gy = 12;
  const hs = f.map(([a, b]) => cardH(cw, { title: a, body: b, tsize: 18, bsize: 15, pad: 12 }));
  const rowH = [0, 1, 2, 3].map((r) => Math.max(hs[2 * r], hs[2 * r + 1]));
  let y = 110;
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 2; c++) { const i = 2 * r + c; const up = i < 5; s += card(30 + c * 435, y, cw, { title: f[i][0], body: f[i][1], tsize: 18, bsize: 15, pad: 12, h: rowH[r], fill: up ? C.panel : C.cream, edge: up ? C.panelEdge : C.olive }); }
    y += rowH[r] + gy;
  }
  s += card(30, y + 6, 840, { body: 'For each factor, say what changes and why it changes energy use. Cream: supply problems that force people to cut use or switch resources.', bsize: 16, fill: C.panel, edge: C.panelEdge, dash: '8 6' });
  add('05-demand-factors',
    svg(900, y + 6 + 74 + 24, 'Eight factors affecting energy demand', s),
    'Eight cards: transport, wealth, climate, population size and industry, each explaining why demand rises; and disruption to supply, unreliable supply and scarcity, which make people cut use or switch resources.',
    'Name the factor, say what changes, then explain why energy use changes.',
    '## Factors affecting demand for energy');
}

// 06 Electricity mix bar
{
  const parts = [['coal', 100, C.ink], ['natural gas', 60, C.rockDark], ['nuclear', 30, C.rust], ['HEP', 35, C.blue], ['wind', 20, C.teal], ['solar', 5, C.mustard]];
  const x0 = 60, W = 780, sc = W / 250, y = 220;
  let s = '', x = x0;
  parts.forEach(([n, v, c], i) => { const w = v * sc; s += rect(x, y, w, 70, c, { stroke: C.panel, sw: 2 }); s += t(x + w / 2, y + 42, v >= 20 ? String(v) : '', { size: 18, weight: 700, anchor: 'middle', fill: [C.teal, C.mustard].includes(c) ? C.ink : C.panel }); s += n === 'solar' ? line(x + w / 2, y - 4, x + w / 2, y - 30, C.ink, 1.5) + t(x + w / 2 + 6, y - 34, 'solar 5', { size: 15, weight: 600, anchor: 'end' }) : t(x + w / 2, y - 14, n, { size: 15, weight: 600, anchor: 'middle' }); x += w; });
  const br = (a, b, yy, label, col) => { const xa = x0 + a * sc, xb = x0 + b * sc; return path(`M${xa},${yy - 12} L${xa},${yy} L${xb},${yy} L${xb},${yy - 12}`, { stroke: col, w: 3 }) + t(xb > 800 ? 860 : (xa + xb) / 2, yy + 26, label, { size: 17, weight: 700, anchor: xb > 800 ? 'end' : 'middle', fill: col }); };
  s += br(0, 160, 320, 'fossil fuels 160 ÷ 250 = 64%', C.ink) + br(0, 190, 380, 'non-renewable 190 ÷ 250 = 76%', C.rust) + br(190, 250, 320, 'renewable 60 ÷ 250 = 24%', C.tealDark);
  s += t(450, 150, 'Electricity generated in one year: 250 TWh (invented figures)', { size: 17, anchor: 'middle', fill: C.muted });
  s += card(30, 450, 840, { body: 'Nuclear is low-carbon but non-renewable: counting it as renewable gives a wrong 36%.', bsize: 17, fill: C.cream, edge: C.olive, center: true, h: 60 });
  add('06-electricity-mix',
    svg(900, 540, 'Reading an electricity mix', s),
    'A bar of 250 TWh split into coal 100, natural gas 60, nuclear 30, HEP 35, wind 20 and solar 5. Brackets show fossil fuels 64%, all non-renewables 76% and renewables 24%.',
    'Share = part ÷ total × 100, and keep nuclear on the non-renewable side.',
    '## Worked example 1: interpreting an electricity mix');
}
