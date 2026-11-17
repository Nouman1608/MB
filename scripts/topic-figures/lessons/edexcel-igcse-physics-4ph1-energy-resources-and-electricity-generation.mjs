import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-energy-resources-and-electricity-generation';
export const figures = [];

// ---- local helpers (kept in this file; shared style lives in ../style.mjs) ----
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });
const ln = (x1, y1, x2, y2, { c = C.ink, w = 3, dash = '', cap = 'round' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="${cap}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const rect = (x, y, w, h, { fill = 'none', stroke = C.ink, sw = 3, rx = 0, extra = '' } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
const circ = (cx, cy, r, { fill = C.panel, stroke = C.ink, sw = 3 } = {}) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
// word-wrap to roughly n characters per line
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { const cur = out[out.length - 1]; if (cur && (cur + ' ' + w).length > n) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w; } return out; };
// text block that wraps to a pixel width
const para = (x, y, s, width, opts = {}, lh) => { const size = opts.size || 18; const lines = Array.isArray(s) ? s : wrap(s, Math.floor(width / (size * 0.54))); return tl(x, y, lines, opts, lh || size * 1.32); };
const nLines = (s, width, size = 18) => (Array.isArray(s) ? s.length : wrap(s, Math.floor(width / (size * 0.54))).length);
// card: panel with a bold title and wrapped body
const card = (x, y, w, h, title, body, { fill = C.panel, edge = C.panelEdge, size = 17, tsize = 21, tfill = C.ink, bfill = C.muted, pad = 22 } = {}) =>
  panel(x, y, w, h, fill, edge) + (title ? t(x + pad, y + pad + tsize * 0.8, title, { size: tsize, weight: 700, fill: tfill }) : '') +
  (body ? para(x + pad, y + pad + (title ? tsize * 0.8 + size * 1.55 : size), body, w - 2 * pad, { size, fill: bfill }) : '');
// axes with arrowheads; origin at (x0, y0) bottom-left; labels with units
const axes = (x0, y0, w, h, xlab, ylab, { size = 17 } = {}) =>
  arrow(x0, y0, x0 + w, y0, { w: 3 }) + arrow(x0, y0, x0, y0 - h, { w: 3 }) +
  t(x0 + w, y0 + 34, xlab, { size, anchor: 'end', weight: 600 }) +
  `<text x="${x0 - 22}" y="${y0 - h / 2}" font-size="${size}" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x0 - 22} ${y0 - h / 2})">${ylab}</text>`;
// ---- circuit symbols (centred at x, y; horizontal unless v = true). bg masks the wire under a gap. ----
const rot = (x, y, v, s) => (v ? `<g transform="rotate(90 ${x} ${y})">${s}</g>` : s);
const sCell = (x, y, { v = false, bg = C.panel } = {}) => rot(x, y, v,
  rect(x - 8, y - 26, 16, 52, { fill: bg, stroke: 'none', sw: 0 }) + ln(x - 7, y - 24, x - 7, y + 24, { w: 3, cap: 'butt' }) + ln(x + 7, y - 12, x + 7, y + 12, { w: 7, cap: 'butt' }));
const sBattery = (x, y, { v = false, bg = C.panel } = {}) => rot(x, y, v,
  rect(x - 26, y - 26, 52, 52, { fill: bg, stroke: 'none', sw: 0 }) + ln(x - 21, y - 24, x - 21, y + 24, { w: 3, cap: 'butt' }) + ln(x - 7, y - 12, x - 7, y + 12, { w: 7, cap: 'butt' }) +
  ln(x + 7, y - 24, x + 7, y + 24, { w: 3, cap: 'butt' }) + ln(x + 21, y - 12, x + 21, y + 12, { w: 7, cap: 'butt' }));
const sRes = (x, y, { v = false, fill = C.panel } = {}) => rot(x, y, v, rect(x - 30, y - 12, 60, 24, { fill, sw: 3 }));
const sLamp = (x, y, { v = false, bg = C.panel } = {}) => rot(x, y, v, circ(x, y, 18, { fill: bg }) + ln(x - 12.7, y - 12.7, x + 12.7, y + 12.7) + ln(x - 12.7, y + 12.7, x + 12.7, y - 12.7));
const sMeter = (x, y, letter, { bg = C.panel } = {}) => circ(x, y, 19, { fill: bg }) + t(x, y + 7, letter, { size: 20, weight: 700, anchor: 'middle' });
const sSwitch = (x, y, { v = false, bg = C.panel, closed = false } = {}) => rot(x, y, v,
  rect(x - 24, y - 8, 48, 16, { fill: bg, stroke: 'none', sw: 0 }) + circ(x - 20, y, 4, { fill: C.ink, sw: 0 }) + circ(x + 20, y, 4, { fill: C.ink, sw: 0 }) +
  (closed ? ln(x - 20, y, x + 20, y) : ln(x - 20, y, x + 18, y - 20)));
const wire = (pts, { c = C.ink, w = 3 } = {}) => `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linejoin="round"/>`;
const dot = (x, y, r = 5, fill = C.ink) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
// worked-example box: lines of [text, opts]
const steps = (x, y, w, rows, { fill = C.cream, edge = C.olive, lh = 34, size = 19, pad = 24 } = {}) =>
  panel(x, y, w, rows.length * lh + pad * 1.4, fill, edge) + rows.map((r, i) => {
    const [s, o = {}] = Array.isArray(r) ? r : [r];
    return t(x + pad + (o.dx || 0), y + pad + size * 0.9 + i * lh, s, { size, ...o });
  }).join('');
// ---- end helpers ----

const chip = (x, y, w, s, fill = C.panel, edge = C.ink, size = 15, col = C.ink) => rect(x, y, w, 38, { fill, stroke: edge, sw: 2, rx: 8 }) + t(x + w / 2, y + 25, s, { size, anchor: 'middle', weight: 600, fill: col });
const fan = (cx, cy, r = 34) => circ(cx, cy, r, { fill: C.panel }) + [0, 1, 2, 3, 4].map((i) => `<ellipse cx="${cx}" cy="${cy - r * 0.48}" rx="${r * 0.2}" ry="${r * 0.46}" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2" transform="rotate(${i * 72} ${cx} ${cy})"/>`).join('') + circ(cx, cy, 5, { fill: C.ink, sw: 0 });

// 01 Thermal power station chain
{
  const sources = ['Fossil fuels', 'Nuclear fuel', 'Geothermal', 'Solar heating'];
  let body = sources.map((s, i) => chip(40 + i * 210, 115, 190, s, C.cream, C.olive, 17)).join('') +
    sources.map((_, i) => arrow(135 + i * 210, 156, 450 + (i - 1.5) * 40, 205, { w: 2.5, color: C.rust, marker: 'ahR' })).join('') +
    t(450, 240, '', {});
  // boiler
  body += rect(330, 210, 240, 110, { fill: C.panel, sw: 3, rx: 10 }) + rect(333, 265, 234, 52, { fill: C.tealLight, stroke: 'none', sw: 0 }) +
    [380, 430, 480, 530].map((x) => path(`M${x},255 q-8,-10 0,-20 q8,-10 0,-20`, { stroke: C.muted, w: 2.5 })).join('') +
    t(450, 345, 'water heated to high-pressure steam', { size: 16, anchor: 'middle', weight: 600 });
  body += wire([[570, 230], [700, 230], [700, 420], [664, 420]], { c: C.muted, w: 10 }) + t(712, 330, 'steam', { size: 16, weight: 600, fill: C.muted });
  body += fan(620, 420, 40) + t(620, 490, 'turbine', { size: 17, weight: 700, anchor: 'middle' }) + ln(580, 420, 470, 420, { w: 6 }) +
    circ(430, 420, 42, { fill: C.cream, stroke: C.ink, sw: 3 }) + t(430, 428, 'G', { size: 24, weight: 700, anchor: 'middle' }) + t(430, 490, 'generator', { size: 17, weight: 700, anchor: 'middle' }) +
    arrow(386, 420, 260, 420, { w: 5, color: C.olive, marker: 'ahO' }) + t(200, 410, 'electrically', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) + t(200, 432, 'to the grid', { size: 16, anchor: 'middle', fill: C.olive }) +
    arrow(662, 432, 760, 520, { w: 3, color: C.muted, dash: '6 5' }) + t(770, 556, 'wasted heating the', { size: 15, anchor: 'end', fill: C.rust, weight: 600 }) + t(770, 574, 'cooling water and air', { size: 15, anchor: 'end', fill: C.rust, weight: 600 }) +
    panel(30, 600, 840, 92, C.tealLight, C.tealDark) +
    t(450, 636, 'Wind and water spin the turbine directly. Solar cells transfer energy', { size: 17, weight: 600, anchor: 'middle' }) +
    t(450, 662, 'from light electrically, with no turbine or generator at all.', { size: 17, weight: 600, anchor: 'middle' });
  add('01-thermal-power-station-chain', svg(900, 710, 'Thermal power stations: steam, turbine, generator', body),
    'Fossil fuels, nuclear fuel, geothermal heat and large-scale solar heating all heat water into high-pressure steam. The steam spins a turbine, the turbine turns a generator, and energy goes to the grid electrically, with much wasted heating cooling water and air.',
    'Thermal stations make steam to spin the turbine; the generator does the final step.',
    '## The common chain: turbine and generator');
}

// 02 Energy-transfer chains for each resource
{
  const rows = [
    ['Wind', [['kinetic store', 'moving air'], ['kinetic store', 'turbine blades'], ['generator', '']]],
    ['Hydroelectric', [['gravitational store', 'water held high'], ['kinetic store', 'falling water'], ['turbine', '→ generator']]],
    ['Tides and waves', [['kinetic store', 'moving sea water'], ['turbine', '→ generator'], null]],
    ['Geothermal', [['thermal store', 'hot rocks'], ['steam', 'water pumped down'], ['turbine', '→ generator']]],
    ['Solar heating', [['radiation', 'from the Sun'], ['thermal store', 'water or fluid'], ['steam (large scale)', '→ turbine → generator']]],
    ['Solar cells', [['radiation', 'light from the Sun'], ['solar cell', 'no turbine'], null]],
    ['Fossil fuels', [['chemical store', 'coal, oil, gas'], ['thermal store', 'water and steam'], ['turbine', '→ generator']]],
    ['Nuclear', [['nuclear store', 'uranium or plutonium'], ['thermal store', 'coolant, then water'], ['steam → turbine', '→ generator']]],
  ];
  const fills = [C.cream, C.tealLight, '#f6e3d6'];
  let body = '';
  rows.forEach(([name, steps3], r) => {
    const y = 110 + r * 72;
    body += panel(30, y, 840, 64) + t(50, y + 38, name, { size: 17, weight: 700 });
    let x = 200;
    steps3.forEach((st, i) => {
      if (!st) return;
      body += rect(x, y + 8, 165, 48, { fill: fills[i], stroke: C.panelEdge, sw: 1.5, rx: 8 }) + t(x + 82, y + 28, st[0], { size: 15, weight: 700, anchor: 'middle' }) + (st[1] ? t(x + 82, y + 47, st[1], { size: 13.5, anchor: 'middle', fill: C.muted }) : '');
      x += 165; body += arrow(x + 2, y + 32, x + 22, y + 32, { w: 2.5 }); x += 26;
    });
    body += rect(x, y + 8, 100, 48, { fill: C.olive, stroke: C.olive, sw: 1.5, rx: 8 }) + t(x + 50, y + 38, 'electrically', { size: 15, weight: 700, anchor: 'middle', fill: '#ffffff' });
  });
  body += t(450, 705, 'At every stage some energy is dissipated, mainly by heating the surroundings.', { size: 16, anchor: 'middle', fill: C.muted });
  add('02-energy-transfer-chains', svg(900, 725, 'Energy transfers, resource by resource', body),
    'Eight chains, each ending electrically: wind from the kinetic store of moving air; hydroelectric from the gravitational store of high water; tides and waves from moving sea water; geothermal from hot rocks; solar heating and solar cells from radiation; fossil fuels from a chemical store; nuclear from a nuclear store.',
    'Start at the original store, name each stage, and finish with "electrically".',
    '## The energy transfers, resource by resource (4.18P)');
}

// 03 Matching supply to demand
{
  const col = (x, w, title, sub, items, fill, edge) => panel(x, 110, w, 330, fill, edge) + t(x + w / 2, 146, title, { size: 19, weight: 700, anchor: 'middle' }) + t(x + w / 2, 170, sub, { size: 15, anchor: 'middle', fill: C.muted }) +
    items.map(([a, b], i) => t(x + 20, 214 + i * 56, a, { size: 17, weight: 700 }) + t(x + 20, 236 + i * 56, b, { size: 15, fill: C.muted })).join('');
  const body = col(30, 270, 'Variable', 'depends on weather or time', [['Wind', 'wind speed'], ['Solar', 'none at night, less if cloudy'], ['Waves', 'varies with weather'], ['Tidal', 'predictable, but varies']], '#f6e3d6', C.rust) +
    col(315, 270, 'Steady', 'reliable, but not quick', [['Nuclear', 'large, steady; slow to start'], ['Geothermal', 'available all the time'], ['Coal', 'reliable, large output'], ['', '']], C.panel, C.panelEdge) +
    col(600, 270, 'Controllable', 'can rise quickly with demand', [['Hydroelectric', 'can start very quickly'], ['Gas-fired', 'can start quickly'], ['', ''], ['', '']], C.tealLight, C.tealDark) +
    panel(30, 460, 840, 80, C.cream, C.olive) + t(450, 494, 'A grid using wind, solar and waves also needs resources that can be', { size: 17, weight: 600, anchor: 'middle' }) +
    t(450, 520, 'controlled, such as hydroelectric or gas, to meet a rise in demand.', { size: 17, weight: 600, anchor: 'middle' });
  add('03-reliability-and-control', svg(900, 560, 'Can it meet demand when needed?', body),
    'Resources sorted by how their output can be matched to demand. Variable: wind, solar, waves and tidal (predictable but varying). Steady: nuclear, geothermal and coal. Controllable and quick to start: hydroelectric and gas-fired stations.',
    'Variable renewables need backup from resources that can be controlled.',
    '## Weighing the resources (4.19P)');
}

// 04 Efficiency Sankey
{
  const s = 0.12; // px per MJ
  const x0 = 80, yT = 200, inW = 2500 * s, useW = 900 * s, wasteW = 1600 * s;
  const body = `<path d="M${x0},${yT} L${x0 + 330},${yT} L${x0 + 330},${yT + inW} L${x0},${yT + inW} Z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>` +
    `<path d="M${x0 + 330},${yT} L${x0 + 600},${yT} L${x0 + 600},${yT - 18} L${x0 + 660},${yT + useW / 2} L${x0 + 600},${yT + useW + 18} L${x0 + 600},${yT + useW} L${x0 + 330},${yT + useW} Z" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2"/>` +
    (() => { const xa = x0 + 330, y1 = yT + useW, y2 = yT + inW, ri = 20, R = ri + wasteW, yE = y2 + ri + 60; return `<path d="M${xa},${y1} A${R},${R} 0 0 1 ${xa + R},${y2 + ri} L${xa + R},${yE} L${xa + R + 16},${yE} L${xa + ri + wasteW / 2},${yE + 50} L${xa + ri - 16},${yE} L${xa + ri},${yE} L${xa + ri},${y2 + ri} A${ri},${ri} 0 0 0 ${xa},${y2} Z" fill="#f6e3d6" stroke="${C.rust}" stroke-width="2"/>`; })() +
    t(x0 + 15, yT - 14, 'total: 2500 MJ each second', { size: 17, weight: 700 }) +
    t(x0 + 600, yT - 30, 'electrically to the grid: 900 MJ', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) +
    t(x0 + 330 + 20 + wasteW + 30, yT + inW + 60, 'wasted: 1600 MJ', { size: 17, weight: 700, fill: C.rust }) +
    t(x0 + 330 + 20 + wasteW + 30, yT + inW + 82, 'heating cooling water', { size: 15, fill: C.rust }) + t(x0 + 330 + 20 + wasteW + 30, yT + inW + 100, 'and air', { size: 15, fill: C.rust }) +
    steps(30, 655, 840, [
      ['efficiency = useful ÷ total × 100% = 900 ÷ 2500 × 100% = 36%', { weight: 700 }],
      ['energy wasted each second = 2500 − 900 = 1600 MJ'],
    ], { lh: 38, size: 19 }) +
    t(450, 785, 'Band widths are drawn to scale. Figures invented for practice.', { size: 15, anchor: 'middle', fill: C.muted });
  add('04-power-station-efficiency', svg(900, 805, 'Worked example: a coal-fired station', body),
    'A Sankey diagram for a coal-fired power station: 2500 MJ each second splits into 900 MJ transferred electrically to the grid and 1600 MJ wasted heating the cooling water and air. Efficiency = 900 ÷ 2500 × 100% = 36%.',
    'Only 36% reaches the grid; the rest heats the cooling water and air.',
    '## Worked example: an efficiency calculation');
}

// 05 Discuss: wind farm vs nuclear
{
  const rowsC = [
    ['Renewable?', 'Yes', 'No: fuel is non-renewable'],
    ['CO₂ in use', 'None while operating', 'None while generating'],
    ['Reliability', 'Depends on the wind', 'Large, steady output'],
    ['Scale', 'Many turbines over a large area', 'Large output from a small mass of fuel'],
    ['Fuel, waste, cost', 'No fuel to buy', ['Radioactive waste stored for a very long time;', 'expensive to build and decommission']],
  ];
  let body = t(340, 140, 'Wind farm', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(680, 140, 'Nuclear power station', { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
  rowsC.forEach(([c, a, b], i) => {
    const y = 155 + i * 62;
    body += rect(30, y, 840, 56, { fill: i % 2 ? C.panel : '#fbfcfc', stroke: C.panelEdge, sw: 1.5 }) + t(45, y + 34, c, { size: 16, weight: 700 }) +
      para(215, y + (nLines(a, 270, 15) > 1 ? 24 : 34), a, 270, { size: 15 }, 19) + para(500, y + (nLines(b, 360, 15) > 1 ? 24 : 34), b, 360, { size: 15 }, 19);
  });
  body += panel(30, 490, 840, 110, C.cream, C.olive) + t(55, 525, 'Judgement linked to the criteria:', { size: 17, weight: 700 }) +
    t(55, 553, 'if a reliable supply is needed, nuclear is better; wind would need backup', { size: 16 }) + t(55, 575, 'from a resource that can be controlled.', { size: 16 }) +
    t(450, 630, 'Judge both resources on the same criteria, one developed point per sentence, then conclude.', { size: 15, anchor: 'middle', fill: C.muted });
  add('05-wind-vs-nuclear-discussion', svg(900, 650, 'Discuss: wind farm or nuclear power station?', body),
    'A comparison table of a wind farm and a nuclear power station on the same criteria: renewable or not, carbon dioxide, reliability, scale, fuel and waste, and cost, followed by a judgement that nuclear is better for a reliable supply while wind needs controllable backup.',
    'A strong "discuss" answer compares both on the same criteria and ends with a judgement.',
    '## Annotated model answer');
}
