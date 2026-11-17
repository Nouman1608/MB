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

export const slug = 'ib-dp-ess-topic-2-ecology';

// 01 An ecosystem in systems language
{
  const lv = [['Producers', 380], ['Primary consumers', 310], ['Secondary consumers', 250], ['Tertiary consumers', 210]];
  const cx = 320;
  let b = '';
  lv.forEach(([n, w], i) => {
    const y = 560 - i * 115;
    b += rect(cx - w / 2, y, w, 80, { fill: [C.grass, C.teal, C.cream, C.mustard][i], stroke: C.ink }) + t(cx, y + 36, n, { size: 18, weight: 700, anchor: 'middle', fill: i === 0 ? '#ffffff' : C.ink }) + t(cx, y + 60, 'storage', { size: 15, anchor: 'middle', fill: i === 0 ? '#ffffff' : C.muted });
    if (i < 3) b += ar(cx, y - 2, cx, y - 33, C.ink, 4) + t(cx + 14, y - 12, 'transfer: feeding', { size: 15, fill: C.olive, weight: 700 });
    b += wave(cx + w / 2 + 6, y + 40, cx + w / 2 + 74, y + 40, C.rust, 3.5, 6, 18);
  });
  b += t(cx + 105 + 80, 251 + 6, 'heat', { size: 16, weight: 700, fill: C.rust });
  b += `<circle cx="95" cy="200" r="38" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(95, 206, 'Sun', { size: 17, weight: 700, anchor: 'middle' });
  b += carrow('M92,242 C80,420 90,560 124,600', C.olive, 4) + t(100, 330, 'input:', { size: 16, weight: 700, fill: C.olive }) + t(100, 350, 'sunlight', { size: 16, weight: 700, fill: C.olive });
  // right notes
  b += panel(620, 110, 250, 530) + H(642, 150, 'Systems vocabulary', C.ink, 19);
  b += tl(642, 186, ['Storages: trophic', 'levels', '', 'Transfers: energy', 'passed by feeding', '', 'Outputs: heat lost', 'at every level', '', 'Feedback: a change', 'in one level spreads', 'through the whole'], { size: 16 }, 22);
  b += rect(642, 490, 206, 130, { fill: C.cream, stroke: C.olive }) + ct(745, 555, ['Transfer is inefficient,', 'so chains rarely go', 'beyond four or five', 'trophic levels.'], { size: 15, weight: 600 }, 20);
  add('01-ecosystem-as-system',
    svg(900, 665, 'An ecosystem in systems language', b),
    'Trophic levels drawn as storages of decreasing size, from producers to tertiary consumers, linked by feeding transfers. Sunlight is the input and heat is lost as an output from every level. A side panel maps storages, transfers, outputs and feedback, and notes chains rarely go beyond four or five levels.',
    'Describe an ecosystem with Topic 1’s words: storages, transfers, outputs, feedback.',
    '## Where this fits in the syllabus');
}

// 02 Content map: four strands linked to Topic 1
{
  const strands = [['Ecosystem structure', 'trophic levels, food chains, food webs'], ['Energy flow', 'inefficient transfer, heat loss'], ['Nutrient cycling', 'matter cycles: carbon, nitrogen'], ['Ecosystem change', 'succession, response to disturbance']];
  const links = [['Systems', 'storages and transfers'], ['Systems', 'inputs and outputs'], ['Sustainability', 'disrupted cycles'], ['Resilience', 'recovery after disturbance']];
  let b = node(330, 115, 240, 64, 'Topic 2: Ecology', ['22 h SL, 35 h HL'], { size: 20, subSize: 15, fill: C.cream, stroke: C.olive });
  strands.forEach(([a, s], i) => {
    const x = 30 + i * 213;
    b += line(450, 181, x + 98, 225, C.muted, 2);
    b += node(x, 228, 196, 110, a, wrap(s, 22), { size: 18, subSize: 15, fill: C.tealLight, stroke: C.tealDark });
    b += ar(x + 98, 340, x + 98, 384, C.ink, 3.5);
    b += node(x, 388, 196, 80, links[i][0], links[i][1], { size: 17, subSize: 15, fill: C.panel, stroke: C.ink });
  });
  b += t(450, 508, 'Topic 1 ideas each strand applies', { size: 15, anchor: 'middle', fill: C.muted, italic: true }).replace('y="508"', 'y="498"');
  b += rect(30, 520, 840, 70, { fill: C.cream, stroke: C.olive }) + t(450, 562, 'HL: practise ecological efficiency calculations, not only description.', { size: 17, weight: 700, anchor: 'middle' });
  add('02-topic-2-content-map',
    svg(900, 610, 'Topic 2 at a glance', b),
    'Concept map of Topic 2 Ecology with four strands: ecosystem structure, energy flow, nutrient cycling and ecosystem change. Each links to a Topic 1 idea: systems storages and transfers, inputs and outputs, sustainability of cycles, and resilience after disturbance.',
    'Each ecology strand applies a Topic 1 idea.',
    '## Core ecology content (Marlbridge outline)');
}

// 03 Energy flows, nutrients cycle
{
  let b = panel(30, 110, 410, 520) + H(235, 150, 'Energy flows one way', C.rust, 21, 'middle');
  const ch = ['Sun', 'Producers', 'Consumers', 'Decomposers'];
  ch.forEach((s, i) => { const y = 180 + i * 100; b += node(80, y, 200, 62, s, [], { size: 18, fill: i === 0 ? C.mustard : C.panel }); if (i < 3) b += ar(180, y + 64, 180, y + 96, C.ink, 4); if (i > 0) b += wave(284, y + 31, 380, y + 31, C.rust, 3.5, 6, 18); });
  b += t(330, 284, 'heat', { size: 16, weight: 700, fill: C.rust });
  b += ct(235, 600, ['ultimately lost as heat;', 'never reused'], { size: 16, weight: 600, fill: C.rust }, 22);
  let c = panel(460, 110, 410, 520) + H(665, 150, 'Nutrients cycle', C.tealDark, 21, 'middle');
  const cx = 665, cy = 375, R = 130;
  const P = (d) => { const a = (d * Math.PI) / 180; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; };
  const nd = [['Producers', -90], ['Consumers', 0], ['Decomposers', 90], ['Soil, air, water', 180]];
  [[-90, 0], [0, 90], [90, 180], [180, 270]].forEach(([a1, a2]) => { const [x1, y1] = P(a1 + 24), [x2, y2] = P(a2 - 24); c += carrow(`M${x1.toFixed(1)},${y1.toFixed(1)} A${R},${R} 0 0 1 ${x2.toFixed(1)},${y2.toFixed(1)}`, C.tealDark, 4.5); });
  nd.forEach(([s, d]) => { const [x, y] = P(d); c += node(x - 70, y - 26, 140, 52, s, [], { size: 16, fill: C.tealLight, stroke: C.tealDark }); });
  c += ct(cx, cy, ['matter', 'reused'], { size: 17, weight: 700, fill: C.tealDark }, 22);
  c += ct(665, 600, ['e.g. carbon and nitrogen', 'cycles'], { size: 16, weight: 600, fill: C.tealDark }, 22);
  add('03-energy-flows-nutrients-cycle',
    svg(900, 650, 'Energy flows; nutrients cycle', b + c),
    'Left: energy passes one way from the Sun to producers, consumers and decomposers, and is lost as heat at each step. Right: nutrients cycle from producers to consumers to decomposers to soil, air and water and back to producers, so matter is reused.',
    'Energy is lost as heat; matter is recycled. Never treat them as the same process.',
    '## How to approach it');
}

// 04 Trophic cascade
{
  const lvls = [['Top predator', 'removed', C.rust, true], ['Prey population', 'increases: no longer controlled', C.cream, false], ['Prey’s food source', 'over-consumed and depleted', C.sand, false]];
  let b = '';
  lvls.forEach(([a, s, fill, x], i) => {
    const y = 130 + i * 150;
    b += node(230, y, 300, 100, a, s, { size: 20, subSize: 16, fill: x ? C.panel : fill, stroke: i === 0 ? C.rust : C.ink });
    if (x) b += t(262, y + 62, '✗', { size: 34, weight: 700, anchor: 'middle', fill: C.rust });
    if (i < 2) b += ar(380, y + 102, 380, y + 146, C.ink, 4.5);
  });
  b += rect(560, 255, 300, 100, { fill: C.tealLight, stroke: C.tealDark }) + H(580, 290, 'Direct effect', C.tealDark, 19) + tl(580, 316, ['prey numbers rise'], { size: 16 }, 20);
  b += rect(560, 405, 300, 100, { fill: C.cream, stroke: C.olive }) + H(580, 440, 'Indirect effect', C.olive, 19) + tl(580, 466, ['a resource further down', 'the chain is depleted'], { size: 16 }, 20);
  b += line(532, 305, 556, 305, C.tealDark, 2.5, '5 4') + line(532, 455, 556, 455, C.olive, 2.5, '5 4');
  b += tl(40, 190, ['The', 'disturbance'], { size: 16, weight: 700, fill: C.rust }, 20);
  b += carrow('M200,170 C130,250 130,420 200,480', C.ink, 3, '7 5') + tl(40, 330, ['cascade', 'spreads', 'down the', 'food chain'], { size: 16, fill: C.muted }, 20);
  b += rect(30, 560, 840, 90, { fill: C.panel, stroke: C.panelEdge }) + t(450, 596, 'Conclusion: the ecosystem is a system of connected parts, so a change at one level', { size: 17, anchor: 'middle', weight: 600 }) + t(450, 624, 'affects levels that were not the direct target of the disturbance.', { size: 17, anchor: 'middle', weight: 600 });
  add('04-trophic-cascade',
    svg(900, 670, 'Tracing a trophic cascade', b),
    'A top predator is removed. The direct effect is that its prey population increases without control. The indirect effect is that the prey over-consumes its own food source, depleting a resource further down the food chain.',
    'Trace the whole cascade, not just the first, direct effect.',
    '## Worked example: tracing a trophic cascade');
}
