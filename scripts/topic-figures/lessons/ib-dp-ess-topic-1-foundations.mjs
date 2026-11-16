import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- local helpers (kept in this file; style.mjs is shared and left untouched) ----
const MK = { [C.ink]: 'ah', [C.tealDark]: 'ahT', [C.rust]: 'ahR', [C.olive]: 'ahO' };
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { const c = out[out.length - 1]; if (c && (c + ' ' + w).length > n) out.push(w); else out[out.length - 1] = c ? c + ' ' + w : w; } return out; };
const rect = (x, y, w, h, { fill = C.panel, stroke = C.ink, sw = 2.5, r = 12, dash = '', op = 1 } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}${op < 1 ? ` opacity="${op}"` : ''}/>`;
// centred lines around cy
const ct = (cx, cy, lines, opts = {}, lh) => { const L = Array.isArray(lines) ? lines : [lines]; const s = opts.size || 18; const h = lh || s * 1.25; return tl(cx, cy - ((L.length - 1) * h) / 2 + s * 0.35, L, { anchor: 'middle', ...opts }, h); };
// box with bold title lines and muted sub lines, centred vertically
const node = (x, y, w, h, title, sub = [], { fill = C.panel, stroke = C.ink, size = 19, subSize = 16, tfill = C.ink, sfill = C.muted, sw = 2.5 } = {}) => {
  const T = [].concat(title), S = [].concat(sub); const th = size * 1.22, sh = subSize * 1.3;
  const H = T.length * th + S.length * sh; const y0 = y + (h - H) / 2;
  let o = rect(x, y, w, h, { fill, stroke, sw });
  T.forEach((s, i) => { o += t(x + w / 2, y0 + th * (i + 1) - size * 0.28, s, { size, weight: 700, anchor: 'middle', fill: tfill }); });
  S.forEach((s, i) => { o += t(x + w / 2, y0 + T.length * th + sh * (i + 1) - subSize * 0.3, s, { size: subSize, anchor: 'middle', fill: sfill }); });
  return o;
};
const ar = (x1, y1, x2, y2, color = C.ink, w = 3.5, dash = '') => arrow(x1, y1, x2, y2, { color, w, marker: MK[color] || 'ah', dash });
const carrow = (d, color = C.ink, w = 3.5, dash = '') => `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" marker-end="url(#${MK[color] || 'ah'})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const line = (x1, y1, x2, y2, color = C.ink, w = 2.5, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// wavy arrow (long-wave radiation etc.)
const wave = (x1, y1, x2, y2, color = C.rust, w = 3.5, amp = 7, len = 22) => {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L, px = -uy, py = ux; const run = L - 22;
  const n = Math.max(2, Math.round(run / (len / 2))); let d = `M${x1},${y1}`;
  for (let i = 1; i <= n; i++) { const s = (run * i) / n, m = s - run / n / 2, a = (i % 2 ? 2 : -2) * amp; d += ` Q${(x1 + ux * m + px * a).toFixed(1)},${(y1 + uy * m + py * a).toFixed(1)} ${(x1 + ux * s).toFixed(1)},${(y1 + uy * s).toFixed(1)}`; }
  return carrow(d + ` L${x2},${y2}`, color, w);
};
// block (fat) arrow polygon from (x1,y1) to (x2,y2), shaft width w
const fat = (x1, y1, x2, y2, w, fill = C.mustard, stroke = C.ink) => {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L, px = -uy, py = ux; const hw = Math.max(w * 0.95, 12), hl = Math.max(w * 0.9, 16);
  const bx = x2 - ux * hl, by = y2 - uy * hl; const P = [[x1 + px * w / 2, y1 + py * w / 2], [bx + px * w / 2, by + py * w / 2], [bx + px * hw, by + py * hw], [x2, y2], [bx - px * hw, by - py * hw], [bx - px * w / 2, by - py * w / 2], [x1 - px * w / 2, y1 - py * w / 2]];
  return `<path d="M${P.map((p) => p.map((v) => v.toFixed(1)).join(',')).join(' L')} Z" fill="${fill}" stroke="${stroke}" stroke-width="2.5" stroke-linejoin="round"/>`;
};
const H = (x, y, s, fill = C.ink, size = 22, anchor = 'start') => t(x, y, s, { size, weight: 700, fill, anchor });

export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

export const slug = 'ib-dp-ess-topic-1-foundations';

// 01 Three lenses on any scenario
{
  const cx = 450, cy = 330;
  let b = `<circle cx="${cx}" cy="${cy}" r="92" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + ct(cx, cy, ['A scenario', 'from Topics 4–8'], { size: 19, weight: 700 }, 24);
  const lens = (x, y, title, q, fill, edge) => node(x, y, 260, 150, title, q, { size: 21, subSize: 16, fill, stroke: edge });
  b += lens(30, 130, 'Perspectives', ['Which environmental', 'value system lies behind', 'this policy position?'], C.tealLight, C.tealDark);
  b += lens(610, 130, 'Systems', ['What are the inputs,', 'outputs and feedback', 'loops?'], C.tealLight, C.tealDark);
  b += lens(320, 470, 'Sustainability', ['Is use within natural', 'income, or is capital', 'being depleted?'], C.tealLight, C.tealDark);
  b += ar(368, 290, 294, 236, C.ink, 4) + ar(532, 290, 606, 236, C.ink, 4) + ar(cx, 424, cx, 464, C.ink, 4);
  b += rect(30, 650, 840, 70, { fill: C.cream, stroke: C.olive }) + t(450, 692, 'Use all three lenses on the same scenario for analytical, not descriptive, answers.', { size: 18, weight: 700, anchor: 'middle' });
  add('01-three-lenses',
    svg(900, 740, 'Topic 1 as a toolkit: three lenses', b),
    'A scenario from any later topic sits at the centre, examined through three lenses: perspectives (which environmental value system lies behind a position), systems (inputs, outputs and feedback loops) and sustainability (whether use stays within natural income).',
    'Apply perspectives, systems and sustainability together to any later topic.',
    '## Where this fits in the syllabus');
}

// 02 Environmental value systems
{
  let b = panel(30, 110, 840, 150) + H(60, 148, 'An EVS is shaped by context', C.ink, 20);
  ['cultural', 'religious', 'economic', 'socio-political'].forEach((s, i) => { b += node(60 + i * 200, 170, 180, 60, s, [], { size: 18, fill: C.tealLight, stroke: C.tealDark }); });
  b += ar(450, 262, 450, 296, C.ink, 4);
  const card = (x, title, fill, def, eg) => rect(x, 300, 270, 300, { fill, stroke: C.ink }) + H(x + 135, 345, title, C.ink, 22, 'middle') + ct(x + 135, 420, def, { size: 16 }, 22) + line(x + 24, 480, x + 246, 480, C.ink, 1.5, '5 5') + ct(x + 135, 535, eg, { size: 15, fill: C.muted, italic: true }, 20);
  b += card(30, 'Ecocentrism', '#cfe0c0', ['nature-centred: values', 'the environment for', 'its own sake'], ['e.g. capping extraction', 'at the recharge rate']);
  b += card(315, 'Anthropocentrism', C.cream, ['human-centred: manages', 'the environment for', 'humanity’s benefit'], ['e.g. prioritising', 'irrigation output']);
  b += card(600, 'Technocentrism', C.teal, ['technology and human', 'ingenuity can solve', 'environmental problems'], ['look for trust in', 'a technical fix']);
  b += t(450, 636, 'Justify a label with the specific words or actions in the case study.', { size: 17, anchor: 'middle', weight: 600 });
  add('02-environmental-value-systems',
    svg(900, 660, 'Three environmental value systems', b),
    'Cultural, religious, economic and socio-political context shape an environmental value system. Three categories follow: ecocentrism values nature for its own sake, anthropocentrism manages the environment for human benefit, and technocentrism trusts technology and ingenuity to solve problems.',
    'Name the EVS only with evidence from the scenario.',
    '## Syllabus coverage');
}

// 03 Negative vs positive feedback
{
  const loopPanel = (x, title, col, sign, nodes, graph, note) => {
    let o = panel(x, 110, 410, 560) + H(x + 205, 150, title, col, 21, 'middle');
    o += node(x + 30, 180, 150, 64, nodes[0], [], { size: 17 }) + node(x + 230, 180, 150, 64, nodes[1], [], { size: 17 });
    o += carrow(`M${x + 182},200 L${x + 226},200`, col, 4) + carrow(`M${x + 305},248 C${x + 305},320 ${x + 105},320 ${x + 105},252`, col, 4);
    o += badge(x + 205, 304, 18, sign, sign === '+' ? C.mustard : C.teal);
    o += t(x + 205, 346, 'output feeds back to input', { size: 15, anchor: 'middle', fill: C.muted });
    o += line(x + 50, 540, x + 380, 540, C.ink, 2.5) + line(x + 50, 540, x + 50, 380, C.ink, 2.5) + t(x + 380, 562, 'time →', { size: 15, anchor: 'end', fill: C.muted }) + graph;
    o += ct(x + 205, 615, note, { size: 16, weight: 600 }, 22);
    return o;
  };
  const eq = 'M80,460 L180,460 L190,400 C220,400 230,455 270,460 L410,460';
  const amp = 'M510,520 L590,520 C640,520 700,480 750,420 C780,385 800,375 840,372';
  let b = loopPanel(30, 'Negative feedback', C.tealDark, '−', ['Change', 'Response'], line(80, 460, 410, 460, C.muted, 1.5, '6 5') + path(eq, { stroke: C.tealDark, w: 4 }) + t(232, 400, 'back to equilibrium', { size: 15, weight: 700, fill: C.tealDark }), ['Stabilising: moves the system', 'back towards equilibrium']);
  b += loopPanel(460, 'Positive feedback', C.rust, '+', ['Change', 'More change'], path(amp, { stroke: C.rust, w: 4 }) + t(520, 420, 'further from the', { size: 15, weight: 700, fill: C.rust }) + t(520, 438, 'original state', { size: 15, weight: 700, fill: C.rust }).replace('y="518"', 'y="518"'), ['Amplifying: pushes the system', 'further from its original state']);
  b += rect(30, 690, 840, 60, { fill: C.cream, stroke: C.olive }) + t(450, 728, '“Negative” means stabilising, not bad; “positive” means amplifying, not good.', { size: 18, weight: 700, anchor: 'middle' });
  add('03-negative-positive-feedback',
    svg(900, 770, 'Negative and positive feedback', b),
    'Two feedback loops in which a system’s output affects its own input. Negative feedback is stabilising: a graph shows a disturbance followed by a return to equilibrium. Positive feedback is amplifying: a graph shows the system moving further and further from its original state.',
    'Negative and positive describe the direction of the effect, not whether it is good or bad.',
    '## Syllabus coverage');
}

// 04 Open, closed and isolated systems
{
  const card = (x, title, eIn, mIn) => {
    let o = panel(x, 110, 270, 400) + H(x + 135, 150, title, C.ink, 22, 'middle');
    o += rect(x + 70, 230, 130, 130, { fill: C.tealLight, stroke: C.ink, dash: '9 6', sw: 3 }) + t(x + 135, 302, 'system', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
    if (eIn) o += wave(x + 20, 255, x + 100, 255, C.rust, 3.5, 5, 16) + wave(x + 170, 335, x + 250, 335, C.rust, 3.5, 5, 16);
    else o += wave(x + 20, 255, x + 64, 255, C.rust, 3.5, 5, 16) + t(x + 46, 240, '✗', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
    if (mIn) o += ar(x + 135, 180, x + 135, 260, C.tealDark, 5) + ar(x + 150, 330, x + 150, 410, C.tealDark, 5);
    else o += ar(x + 135, 180, x + 135, 224, C.tealDark, 5) + t(x + 160, 205, '✗', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
    o += t(x + 135, 450, eIn ? 'energy crosses' : 'no energy crosses', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    o += t(x + 135, 474, mIn ? 'matter crosses' : 'no matter crosses', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
    return o;
  };
  let b = card(30, 'Open', true, true) + card(315, 'Closed', true, false) + card(600, 'Isolated', false, false);
  b += wave(260, 550, 330, 550, C.rust, 3.5, 5, 16) + t(340, 556, 'energy', { size: 16 }) + `<line x1="480" y1="550" x2="540" y2="550" stroke="${C.tealDark}" stroke-width="5" marker-end="url(#ahT)"/>` + t(550, 556, 'matter', { size: 16 });
  add('04-open-closed-isolated',
    svg(900, 580, 'Open, closed and isolated systems', b),
    'Three systems with dashed boundaries. An open system exchanges both energy and matter across its boundary; a closed system exchanges only energy; an isolated system exchanges neither.',
    'What crosses the boundary defines the type of system.',
    '## Syllabus coverage');
}

// 05 Sustainability as a threshold
{
  const x0 = 110, x1 = 840, y0 = 500, top = 170;
  let b = panel(30, 110, 840, 500);
  b += line(x0, y0, x1, y0, C.ink, 3) + line(x0, y0, x0, top, C.ink, 3) + t(x1, y0 + 30, 'time →', { size: 16, anchor: 'end', weight: 600 });
  b += `<text x="72" y="${(y0 + top) / 2}" font-size="16" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 72 ${(y0 + top) / 2})">rate of use</text>`;
  const ni = 330;
  b += `<rect x="${x0}" y="${ni}" width="${x1 - x0}" height="${y0 - ni}" fill="${C.tealLight}"/>` + line(x0, ni, x1, ni, C.tealDark, 4) + t(x0 + 12, ni - 12, 'natural income (sustainable yield)', { size: 17, weight: 700, fill: C.tealDark });
  b += path(`M${x0},440 C300,430 420,380 480,${ni} C540,280 640,230 ${x1},210`, { stroke: C.rust, w: 5 });
  b += t(200, 470, 'within income: sustainable', { size: 17, weight: 700, fill: C.tealDark });
  b += t(610, 200, 'above income: capital', { size: 17, weight: 700, fill: C.rust }) + t(610, 222, 'depleted, unsustainable', { size: 17, weight: 700, fill: C.rust });
  b += `<circle cx="480" cy="${ni}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(492, ni + 30, 'threshold crossed', { size: 15, weight: 700 });
  b += t(400, 410, 'consumption', { size: 16, weight: 700, fill: C.rust });
  b += rect(30, 630, 410, 90, { fill: C.cream, stroke: C.olive }) + t(235, 666, 'Natural capital', { size: 19, weight: 700, anchor: 'middle' }) + t(235, 694, 'the stock of natural resources', { size: 16, anchor: 'middle', fill: C.muted });
  b += rect(460, 630, 410, 90, { fill: C.tealLight, stroke: C.tealDark }) + t(665, 666, 'Natural income', { size: 19, weight: 700, anchor: 'middle' }) + t(665, 694, 'the sustainable yield from that stock', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-sustainability-threshold',
    svg(900, 740, 'Sustainability is a threshold', b),
    'Graph of rate of use over time against a flat line for natural income. While consumption stays below natural income, use is sustainable; when consumption rises above it, the threshold is crossed and natural capital is depleted. Boxes define natural capital as the stock and natural income as the sustainable yield.',
    'The same resource can move from sustainable to unsustainable use as consumption grows.',
    '## How to approach it');
}

// 06 Aquifer worked example
{
  let b = panel(30, 110, 540, 520) + H(60, 148, 'Systems framing', C.ink, 20);
  b += `<rect x="150" y="300" width="300" height="140" rx="16" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + t(300, 360, 'Aquifer', { size: 22, weight: 700, anchor: 'middle' }) + t(300, 388, 'stored water = natural capital', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 700 });
  b += fat(110, 200, 210, 296, 18, C.tealLight, C.tealDark) + t(60, 190, 'Input: rainfall recharge', { size: 16, weight: 700, fill: C.tealDark }) + t(60, 210, '= natural income', { size: 15, fill: C.muted });
  b += fat(390, 296, 500, 190, 34, C.cream, C.rust) + t(540, 176, 'Output: extraction', { size: 16, weight: 700, fill: C.rust, anchor: 'end' }) + t(540, 196, 'for irrigation', { size: 15, fill: C.muted, anchor: 'end' });
  b += t(450, 270, 'extraction > recharge', { size: 15, weight: 700, fill: C.rust }).replace('x="450"', 'x="410"');
  // positive feedback loop
  const ny = 470;
  b += node(60, ny + 10, 140, 70, 'Water table', ['falls'], { size: 16, subSize: 15 }) + node(230, ny + 10, 140, 70, 'Drill', ['deeper'], { size: 16, subSize: 15 }) + node(400, ny + 10, 140, 70, 'Extract', ['even faster'], { size: 16, subSize: 15 });
  b += ar(202, ny + 45, 226, ny + 45, C.rust, 3.5) + ar(372, ny + 45, 396, ny + 45, C.rust, 3.5);
  b += carrow(`M470,${ny + 82} C470,${ny + 130} 130,${ny + 130} 130,${ny + 84}`, C.rust, 3.5) + badge(300, ny + 118, 14, '+', C.mustard);
  b += t(300, ny - 6, 'a possible positive feedback loop', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  let c = panel(590, 110, 280, 250, C.cream, C.olive) + H(610, 148, 'Sustainability', C.ink, 20) + tl(610, 180, ['Extraction exceeds', 'recharge, so capital is', 'being depleted, not just', 'income drawn down.'], { size: 16 }, 22) + H(610, 290, 'UNSUSTAINABLE', C.rust, 19);
  c += panel(590, 380, 280, 250, C.tealLight, C.tealDark) + H(610, 418, 'Perspectives', C.ink, 20) + tl(610, 450, ['Prioritise irrigation', 'output above all:'], { size: 16 }, 21) + t(610, 494, 'anthropocentric', { size: 16, weight: 700, fill: C.olive }) + tl(610, 530, ['Cap extraction at the', 'recharge rate: more'], { size: 16 }, 21) + t(610, 574, 'ecocentric / precautionary', { size: 16, weight: 700, fill: C.tealDark });
  add('06-aquifer-three-lenses',
    svg(900, 650, 'Worked example: an over-used aquifer', b + c),
    'An aquifer system with rainfall recharge as input (natural income) and extraction for irrigation as a larger output; the stored water is natural capital. A possible positive feedback loop: the water table falls, farmers drill deeper and extract even faster. Side panels judge the use unsustainable and link irrigation-first policy to anthropocentrism and capping extraction to a more ecocentric stance.',
    'One scenario, three lenses: systems, sustainability and perspectives.',
    '## Worked example: applying Topic 1 concepts to a Topic 4 scenario');
}
