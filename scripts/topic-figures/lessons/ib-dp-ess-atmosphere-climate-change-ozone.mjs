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

export const slug = 'ib-dp-ess-atmosphere-climate-change-ozone';

// 01 Layers of the atmosphere + composition of dry air
{
  const ax = 120, x2 = 520, g = 640, k = 8; // 8 px per km
  const y = (km) => g - km * k;
  const tp = y(12), sp = y(50);
  let b = panel(30, 110, 840, 580);
  b += `<rect x="${ax}" y="${tp}" width="${x2 - ax}" height="${g - tp}" fill="${C.tealLight}"/>`;
  b += `<rect x="${ax}" y="${sp}" width="${x2 - ax}" height="${tp - sp}" fill="${C.cream}"/>`;
  b += `<rect x="${ax}" y="${y(35)}" width="${x2 - ax}" height="${y(18) - y(35)}" fill="${C.mustard}" opacity="0.35"/>`;
  b += `<rect x="${ax}" y="195" width="${x2 - ax}" height="${sp - 195}" fill="${C.bg}"/>`;
  b += `<rect x="${ax}" y="150" width="${x2 - ax}" height="45" fill="#ffffff"/>`;
  b += line(ax, tp, x2, tp, C.muted, 2, '8 6') + line(ax, sp, x2, sp, C.muted, 2, '8 6') + line(ax, 195, x2, 195, C.muted, 2, '8 6');
  b += t(x2 - 12, 178, 'thermosphere', { size: 17, anchor: 'end', fill: C.muted, weight: 600 }) + t(x2 - 12, 225, 'mesosphere', { size: 17, anchor: 'end', fill: C.muted, weight: 600 });
  b += t(x2 - 12, y(26) + 6, 'ozone layer', { size: 17, anchor: 'end', fill: C.olive, weight: 700 });
  // cloud in troposphere
  b += `<path d="M150,${g - 22} a16,16 0 0 1 22,-22 a20,20 0 0 1 36,4 a14,14 0 0 1 14,18 z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
  // axes
  b += line(ax, 150, ax, g, C.ink, 3) + line(ax, g, x2, g, C.ink, 3);
  b += [[0, '0'], [12, '12'], [50, '50']].map(([km, s]) => line(ax - 8, y(km), ax, y(km), C.ink, 3) + t(ax - 14, y(km) + 6, s, { size: 17, anchor: 'end' })).join('');
  b += t(ax - 14, 175, 'km', { size: 17, anchor: 'end', fill: C.muted }) + t(ax - 14, 145, 'Altitude', { size: 16, anchor: 'start', fill: C.muted, weight: 600 }).replace(`x="${ax - 14}"`, 'x="44"');
  b += t(ax, g + 30, 'colder', { size: 16, fill: C.muted }) + t(x2, g + 30, 'warmer', { size: 16, fill: C.muted, anchor: 'end' }) + t((ax + x2) / 2, g + 30, 'Temperature →', { size: 17, weight: 600, anchor: 'middle' });
  // temperature profile (troposphere and stratosphere only)
  b += path(`M430,${g} L240,${tp} C236,${tp - 70} 330,${sp + 110} 440,${sp}`, { stroke: C.rust, w: 5 });
  b += t(300, y(2), 'falls', { size: 16, fill: C.rust, weight: 700 }) + t(330, y(24), 'rises', { size: 16, fill: C.rust, weight: 700 });
  // notes on the right
  b += H(545, sp + 40, 'Stratosphere', C.ink, 21) + tl(545, sp + 68, ['Up to about 50 km', 'Temperature rises with', 'height because ozone', 'absorbs UV radiation', 'Most ozone lies here'], { size: 17, fill: C.muted }, 25);
  b += H(545, tp + 24, 'Troposphere', C.ink, 21) + tl(545, tp + 47, ['Surface to ~12 km; weather', 'and almost all water vapour', 'Falls ~6.5 °C per km'], { size: 16, fill: C.muted }, 20);
  // composition bar
  const bx = 60, bw = 780, by = 770;
  const seg = (x, w, fill) => `<rect x="${x}" y="${by}" width="${w}" height="50" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
  const wN = bw * 0.78, wO = bw * 0.21, wA = bw * 0.0093;
  let c = panel(30, 710, 840, 200) + H(60, 750, 'Composition of dry air (by volume)', C.ink, 21);
  c += seg(bx, wN, C.teal) + seg(bx + wN, wO, C.mustard) + seg(bx + wN + wO, wA, C.rust) + line(bx + bw - 1, by, bx + bw - 1, by + 50, C.ink, 2);
  c += t(bx + wN / 2, by + 32, 'Nitrogen (N₂) 78%', { size: 19, weight: 700, anchor: 'middle' }) + t(bx + wN + wO / 2, by + 32, 'Oxygen (O₂) 21%', { size: 17, weight: 700, anchor: 'middle' });
  c += line(bx + bw - 4, by + 52, bx + bw - 4, by + 64, C.ink, 2) + t(bx + bw, by + 84, 'Argon 0.93%  ·  CO₂ about 0.04% (above 420 ppm)', { size: 17, anchor: 'end' });
  c += t(bx, by + 118, 'Water vapour varies from almost zero to a few per cent, so it is left out.', { size: 16, fill: C.muted, italic: true });
  add('01-atmosphere-layers-composition',
    svg(900, 930, 'Layers and composition of the atmosphere', b + c),
    'Altitude profile of the atmosphere. In the troposphere, from the surface to about 12 km, temperature falls with height; in the stratosphere, up to about 50 km, it rises because ozone absorbs UV. Below, a bar shows dry air is 78% nitrogen, 21% oxygen, 0.93% argon and about 0.04% carbon dioxide.',
    'Weather happens in the troposphere; ozone warms the stratosphere by absorbing UV.',
    '## 6.1 Introduction to the atmosphere');
}

// 02 Energy balance and the natural greenhouse effect
{
  const gY = 560;
  let b = panel(30, 110, 840, 540);
  b += `<rect x="32" y="300" width="836" height="140" fill="${C.tealLight}"/>`;
  b += `<rect x="32" y="${gY}" width="836" height="88" fill="${C.sand}"/>` + line(32, gY, 868, gY, C.ink, 3);
  // GHG molecules
  [[70, 340], [120, 410], [380, 340], [400, 420], [430, 322], [580, 372], [520, 420], [640, 425], [850, 420]].forEach(([x, yy]) => {
    b += `<circle cx="${x}" cy="${yy}" r="7" fill="${C.tealDark}"/><circle cx="${x + 11}" cy="${yy - 5}" r="5" fill="${C.rust}"/><circle cx="${x - 11}" cy="${yy - 5}" r="5" fill="${C.rust}"/>`;
  });
  b += tl(690, 345, ['greenhouse gases:', 'water vapour, CO₂,', 'CH₄, N₂O, ozone'], { size: 16, fill: C.tealDark, weight: 700 }, 21);
  // sun
  b += `<circle cx="100" cy="185" r="42" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(100, 191, 'Sun', { size: 17, weight: 700, anchor: 'middle' });
  // incoming and reflected short-wave
  b += fat(185, 238, 185, gY - 2, 30, C.mustard);
  b += t(162, 262, '340 W m⁻² in', { size: 18, weight: 700, anchor: 'end' }) + t(162, 284, 'short-wave', { size: 16, fill: C.muted, anchor: 'end' });
  b += fat(330, gY - 4, 330, 140, 9, C.cream);
  b += t(348, 158, '102 reflected', { size: 18, weight: 700 }) + t(348, 180, 'albedo 0.30', { size: 16, fill: C.muted }) + t(348, 200, 'clouds, ice,', { size: 16, fill: C.muted }) + t(348, 218, 'bright surfaces', { size: 16, fill: C.muted });
  b += t(60, gY + 34, '238 W m⁻² absorbed (0.70 × 340)', { size: 18, weight: 700 }) + t(60, gY + 58, 'warms the surface', { size: 16, fill: C.muted });
  // long-wave
  b += wave(490, gY - 4, 490, 140, C.rust, 4);
  b += wave(570, gY - 4, 570, 386, C.rust, 4);
  b += wave(595, 362, 660, 140, C.rust, 3.5) + wave(598, 384, 650, gY - 4, C.rust, 3.5) + ar(596, 372, 640, 372, C.rust, 3);
  b += t(508, 158, 'some escapes', { size: 16, weight: 600, fill: C.rust }) + t(508, 178, 'to space', { size: 16, weight: 600, fill: C.rust });
  b += t(678, 160, 'absorbed, then', { size: 17, weight: 700 }) + t(678, 182, 're-emitted in all', { size: 17, weight: 700 }) + t(678, 204, 'directions', { size: 17, weight: 700 });
  b += t(668, 500, 'some back towards', { size: 17, weight: 700 }) + t(668, 522, 'the surface', { size: 17, weight: 700 });
  b += t(490, gY + 34, 'surface emits long-wave', { size: 18, weight: 700, fill: C.rust }) + t(490, gY + 58, '(infrared) radiation', { size: 16, fill: C.muted });
  // result strip
  let c = rect(30, 672, 410, 100, { fill: C.cream, stroke: C.olive }) + t(235, 712, 'With the natural greenhouse effect', { size: 17, anchor: 'middle', fill: C.muted }) + t(235, 748, 'average about 15 °C', { size: 24, weight: 700, anchor: 'middle' });
  c += rect(460, 672, 410, 100, { fill: C.panel, stroke: C.panelEdge }) + t(665, 712, 'Without it', { size: 17, anchor: 'middle', fill: C.muted }) + t(665, 748, 'about −18 °C (33 °C colder)', { size: 24, weight: 700, anchor: 'middle' });
  c += t(450, 808, 'If greenhouse gases slow energy loss to space, Earth warms until output again equals input.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('02-energy-balance-greenhouse',
    svg(900, 830, 'Earth’s energy balance and the greenhouse effect', b + c),
    'Of 340 W per square metre of incoming short-wave solar radiation, 102 is reflected (albedo 0.30) and 238 is absorbed, warming the surface. The surface emits long-wave infrared; some escapes to space and some is absorbed by greenhouse gases and re-emitted in all directions, including back to the surface. This keeps the average near 15 °C rather than −18 °C.',
    'Greenhouse gases absorb and re-emit infrared; they do not trap UV or reflect heat.',
    '## 6.1 Introduction to the atmosphere');
}

// 03 CO2-equivalent worked example
{
  const x0 = 90, W = 720, tot = 1233.5, kk = W / tot;
  const bar = (yy, parts) => { let x = x0, o = ''; for (const [v, fill] of parts) { o += `<rect x="${x}" y="${yy}" width="${Math.max(v * kk, 1.5)}" height="56" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`; x += v * kk; } return o; };
  let b = panel(30, 110, 840, 190);
  b += H(60, 150, 'By mass', C.ink, 22) + t(170, 150, 'tonnes per year', { size: 16, fill: C.muted });
  b += bar(170, [[500, C.teal], [12, C.mustard], [1.5, C.rust]]);
  b += t(x0 + 250 * kk, 205, 'CO₂ 500 t', { size: 19, weight: 700, anchor: 'middle' });
  const e1 = x0 + 512 * kk;
  b += line(e1 - 2, 228, e1 - 2, 244, C.ink, 2) + t(e1 - 10, 266, 'CH₄ 12 t, N₂O 1.5 t', { size: 17 }) .replace('text-anchor="start"', 'text-anchor="start"');
  b += t(e1 + 20, 205, 'total 513.5 t: methane is about 2%', { size: 17, fill: C.muted });
  // conversion
  let c = H(450, 345, 'Multiply each mass by its global warming potential (GWP, 100 years)', C.ink, 18, 'middle');
  const chip = (x, w, a, s) => rect(x, 365, w, 70, { fill: C.cream, stroke: C.olive }) + t(x + w / 2, 395, a, { size: 18, weight: 700, anchor: 'middle' }) + t(x + w / 2, 420, s, { size: 16, anchor: 'middle', fill: C.muted });
  c += chip(30, 270, 'CO₂: 500 × 1', '= 500 t CO₂e') + chip(315, 270, 'CH₄: 12 × 28', '= 336 t CO₂e') + chip(600, 270, 'N₂O: 1.5 × 265', '= 397.5 t CO₂e');
  c += ar(450, 440, 450, 470, C.ink, 3.5);
  let d = panel(30, 480, 840, 200);
  d += H(60, 520, 'By warming effect', C.ink, 22) + t(280, 520, 't CO₂e', { size: 16, fill: C.muted });
  d += bar(540, [[500, C.teal], [336, C.mustard], [397.5, C.rust]]);
  d += t(x0 + 250 * kk, 575, 'CO₂ 500', { size: 19, weight: 700, anchor: 'middle' }) + t(x0 + 668 * kk, 575, 'CH₄ 336', { size: 19, weight: 700, anchor: 'middle' }) + t(x0 + 1034.75 * kk, 575, 'N₂O 397.5', { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' });
  d += t(x0 + W, 630, 'total 1233.5 t CO₂e', { size: 18, weight: 700, anchor: 'end' });
  d += t(x0, 630, 'methane share = 336 ÷ 1233.5 × 100 = 27.2%', { size: 18, weight: 700, fill: C.olive });
  d += t(x0, 660, 'Both bars use the same scale.', { size: 16, fill: C.muted, italic: true });
  add('03-co2-equivalent',
    svg(900, 710, 'CO₂-equivalent: adding gases by warming', b + c + d),
    'Worked example for one farm. By mass it emits 500 t of CO₂, 12 t of methane and 1.5 t of nitrous oxide. Multiplied by GWPs of 28 and 265, these become 500, 336 and 397.5 t CO₂e, a total of 1233.5 t, so methane is about 2% of the mass but 27.2% of the warming.',
    'Convert every gas to CO₂e before adding: small masses of potent gases can dominate.',
    '## 6.2 Climate change -- causes and impacts');
}

// 04 Feedback loops
{
  const loop = (x0, title, col, nodes, sign, note, invLabel) => {
    let o = panel(x0, 110, 410, 500) + H(x0 + 205, 150, title, col, 21, 'middle');
    const [n1, n2, n3, n4] = nodes;
    const T = [x0 + 105, 175, 200, 72], R = [x0 + 234, 290, 166, 84], B = [x0 + 105, 410, 200, 84], L = [x0 + 10, 290, 166, 84];
    o += node(...T, n1[0], n1[1] || [], { fill: C.cream, stroke: C.olive });
    o += node(...R, n2[0], n2[1] || []) + node(...B, n3[0], n3[1] || []) + node(...L, n4[0], n4[1] || []);
    o += carrow(`M${x0 + 305},${211} Q${x0 + 340},${215} ${x0 + 330},${284}`, col, 4);
    o += carrow(`M${x0 + 330},${374} Q${x0 + 335},${430} ${x0 + 312},${440}`, col, 4);
    o += carrow(`M${x0 + 105},${452} Q${x0 + 80},${452} ${x0 + 90},${380}`, col, 4);
    o += carrow(`M${x0 + 90},${290} Q${x0 + 85},${215} ${x0 + 98},${212}`, col, 4, invLabel ? '9 6' : '');
    if (invLabel) o += t(x0 + 38, 242, invLabel, { size: 16, weight: 700, fill: col, anchor: 'middle' });
    o += badge(x0 + 205, 332, 22, sign, sign === '+' ? C.mustard : C.teal);
    o += ct(x0 + 205, 555, note, { size: 16, fill: C.muted }, 21);
    return o;
  };
  let b = loop(30, 'Positive: ice–albedo', C.rust,
    [['Warming'], ['Sea ice', ['melts']], ['Albedo falls', ['0.60 → 0.06']], [['More energy', 'absorbed'], ['100 → 235 W m⁻²']]],
    '+', ['Each turn adds more warming:', 'the change is amplified.']);
  b += loop(460, 'Negative: low clouds', C.tealDark,
    [['Warming'], ['More', ['evaporation']], ['More low', ['clouds']], [['More sunlight', 'reflected'], []]],
    '−', ['The loop works against the', 'original change: it is dampened.'], 'reduces');
  b += rect(30, 630, 840, 110, { fill: C.cream, stroke: C.olive });
  b += H(60, 668, 'Tipping point:', C.ink, 21) + t(212, 668, 'a threshold beyond which positive feedback shifts a system', { size: 17 });
  b += t(60, 696, 'to a new state that is hard to reverse, e.g. loss of the Greenland ice sheet or Amazon dieback.', { size: 17 });
  b += t(60, 722, 'Other positive loops: thawing permafrost, more water vapour, drought and forest fire.', { size: 16, fill: C.muted });
  add('04-feedback-loops',
    svg(900, 760, 'Feedback loops in climate change', b),
    'Two loops. Positive ice–albedo feedback: warming melts sea ice, albedo falls from 0.60 to 0.06, absorbed energy rises from 100 to 235 W per square metre, causing more warming. Negative feedback: warming increases evaporation and low cloud, which reflects sunlight and reduces warming. A tipping point is where positive feedback shifts a system to a new state.',
    'Positive feedback amplifies a change; negative feedback dampens it.',
    '## 6.2 Climate change -- causes and impacts');
}

// 05 Mitigation vs adaptation
{
  const xs = [40, 250, 460, 670], bw = 190, yy = 250, hh = 104;
  const items = [[['Greenhouse gas', 'emissions'], []], [['More GHGs in', 'the atmosphere'], []], [['Enhanced', 'greenhouse effect'], ['warming']], [['Impacts and', 'harm'], ['floods, drought']]];
  let b = '';
  items.forEach(([a, s], i) => { b += node(xs[i], yy, bw, hh, a, s, { size: 18 }); if (i < 3) b += ar(xs[i] + bw + 2, yy + hh / 2, xs[i + 1] - 4, yy + hh / 2, C.ink, 4); });
  // mitigation bracket
  b += rect(40, 112, 400, 78, { fill: C.teal, stroke: C.tealDark }) + H(240, 146, 'MITIGATION reduces the cause', C.ink, 20, 'middle') + t(240, 174, 'cut emissions or remove gases', { size: 17, anchor: 'middle' });
  b += ar(135, 192, 135, yy - 6, C.tealDark, 4) + ar(345, 192, 345, yy - 6, C.tealDark, 4);
  b += rect(560, 112, 300, 78, { fill: C.cream, stroke: C.olive }) + H(710, 146, 'ADAPTATION reduces', C.ink, 20, 'middle') + t(710, 174, 'the harm', { size: 17, anchor: 'middle' });
  b += carrow(`M710,192 Q760,215 765,${yy - 6}`, C.olive, 4);
  // examples
  const list = (x, title, col, fill, arr) => panel(x, 390, 410, 252, fill, col) + H(x + 24, 428, title, C.ink, 20) + arr.map((s, i) => s.startsWith(' ') ? t(x + 40, 462 + i * 30, s.trim(), { size: 17 }) : t(x + 24, 462 + i * 30, '• ' + s, { size: 17 })).join('');
  b += list(30, 'Mitigation examples', C.tealDark, C.tealLight, ['Renewable energy', 'Energy efficiency, insulation,', '   public transport', 'Reforestation, protecting peatland', 'Carbon capture and storage', 'Carbon taxes, emissions trading']);
  b += list(460, 'Adaptation examples', C.olive, C.cream, ['Sea walls and flood barriers', 'Drought-tolerant crops', 'Water storage, efficient irrigation', 'Early-warning systems for', '   storms and heatwaves', 'Managed retreat from coasts']);
  b += t(450, 676, 'A sea wall is adaptation, not mitigation: it does not cut emissions.', { size: 17, anchor: 'middle', weight: 600, fill: C.rust });
  add('05-mitigation-adaptation',
    svg(900, 700, 'Mitigation or adaptation?', b),
    'A chain runs from greenhouse gas emissions to more gases in the atmosphere, an enhanced greenhouse effect and harmful impacts. Mitigation acts on the first two links by cutting emissions or removing gases; adaptation acts on the last by reducing harm. Example lists sit below each.',
    'Mitigation tackles the cause; adaptation reduces the harm.',
    '## 6.3 Climate change -- mitigation and adaptation');
}

// 06 Ozone formation and chlorine catalysis
{
  const circ = (cx, cy, r, s, fill, size = 26) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + size * 0.36, s, { size, weight: 700, anchor: 'middle' });
  let b = panel(30, 110, 410, 520) + H(235, 150, 'Natural ozone cycle', C.ink, 21, 'middle');
  b += node(70, 175, 330, 60, 'O₂ + UV → O + O', ['UV splits oxygen'], { size: 19, fill: C.cream, stroke: C.olive });
  b += ar(235, 238, 235, 268, C.ink, 3.5);
  b += circ(130, 400, 52, 'O₃', C.teal) + circ(340, 400, 52, 'O₂ + O', C.tealLight, 22);
  b += carrow('M330,346 Q240,290 150,342', C.tealDark, 4) + t(235, 300, 'O + O₂ → O₃', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += carrow('M150,456 Q240,510 322,458', C.rust, 4) + t(235, 520, 'O₃ + UV → O₂ + O', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(235, 544, 'UV absorbed', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  b += ct(235, 588, ['Made and broken down all the time:', 'a steady concentration'], { size: 16, fill: C.muted }, 21);
  let c = panel(460, 110, 410, 520) + H(665, 150, 'Chlorine as a catalyst', C.ink, 21, 'middle');
  c += node(500, 175, 330, 60, 'CFC + UV → Cl', ['in the stratosphere'], { size: 19, fill: C.cream, stroke: C.olive });
  c += ar(560, 238, 560, 342, C.ink, 3.5);
  c += circ(560, 400, 52, 'Cl', C.mustard) + circ(770, 400, 52, 'ClO', C.sand);
  c += carrow('M580,350 Q665,295 750,346', C.rust, 4) + t(665, 300, '+ O₃ → ClO + O₂', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  c += carrow('M752,454 Q665,508 580,456', C.tealDark, 4) + t(665, 520, '+ O → Cl + O₂', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  c += t(665, 544, 'Cl comes out unchanged', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  c += ct(665, 588, ['One Cl atom can destroy many', 'thousands of ozone molecules'], { size: 16, fill: C.muted }, 21);
  // Dobson scale
  const sx = (du) => 90 + (du - 150) * 3.0;
  let d = panel(30, 650, 840, 160) + H(60, 688, 'Ozone column thickness, Dobson units (DU)', C.ink, 20);
  d += `<rect x="${sx(150)}" y="725" width="${sx(220) - sx(150)}" height="34" fill="${C.rust}" opacity="0.8"/><rect x="${sx(220)}" y="725" width="${sx(350) - sx(220)}" height="34" fill="${C.teal}"/>`;
  d += rect(sx(150), 725, sx(350) - sx(150), 34, { fill: 'none', r: 0, sw: 2.5 });
  d += line(sx(220), 715, sx(220), 769, C.ink, 3) + line(sx(300), 715, sx(300), 769, C.ink, 3);
  d += t(sx(220), 791, '220 DU', { size: 17, weight: 700, anchor: 'middle' }) + t(sx(300), 791, '300 DU', { size: 17, weight: 700, anchor: 'middle' });
  d += t(sx(185), 748, 'ozone hole', { size: 16, weight: 700, anchor: 'middle', fill: '#ffffff' });
  d += t(sx(300), 710, 'typical', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  d += t(sx(350) + 20, 748, 'below 220 DU', { size: 16, fill: C.muted }) + t(sx(350) + 20, 768, 'is a hole', { size: 16, fill: C.muted });
  add('06-ozone-chemistry',
    svg(900, 830, 'How ozone forms and how chlorine destroys it', b + c + d),
    'Left: UV splits oxygen; oxygen atoms join O₂ to form ozone, and UV splits ozone back to O₂ and O, so the concentration is steady and UV is absorbed. Right: UV frees chlorine from CFCs; Cl reacts with ozone to form ClO and O₂, then ClO reacts with O to give back Cl. Below, a Dobson scale marks 300 DU as typical and below 220 DU as an ozone hole.',
    'Chlorine is regenerated each cycle, so one atom destroys many thousands of ozone molecules.',
    '## 6.4 Stratospheric ozone');
}

// 07 Ozone depletion vs climate change, and their agreements
{
  const col = (x, title, fill, edge, boxes) => {
    let o = H(x + 190, 150, title, C.ink, 22, 'middle');
    boxes.forEach(([a, s], i) => { const yy = 172 + i * 102; o += node(x, yy, 380, 80, a, s, { fill: i === 0 ? fill : C.panel, stroke: edge, size: 18 }); if (i < 3) o += ar(x + 190, yy + 82, x + 190, yy + 100, C.ink, 3.5); });
    return o;
  };
  let b = col(30, 'Ozone depletion', C.teal, C.tealDark, [
    ['CFCs, halons, methyl bromide', ['carry chlorine or bromine upwards']],
    ['UV frees Cl in the stratosphere', ['Cl destroys ozone as a catalyst']],
    ['Ozone layer thins', ['below 220 DU = ozone hole']],
    ['More UV-B reaches the surface', ['skin cancer, cataracts, phytoplankton']]]);
  b += col(490, 'Climate change', C.cream, C.olive, [
    ['CO₂, CH₄, N₂O, halocarbons', ['added faster than sinks remove them']],
    ['Absorb and re-emit infrared', ['enhanced greenhouse effect']],
    ['Global warming', ['2011–2020: ~1.1 °C above 1850–1900']],
    ['Sea-level rise, extremes', ['shifting biomes, coral bleaching']]]);
  b += line(412, 416, 488, 416, C.rust, 4, '8 6') + t(450, 404, '✗', { size: 24, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(450, 440, 'does not', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 }) + t(450, 458, 'cause', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 });
  b += ar(412, 212, 486, 212, C.olive, 3, '6 5') + t(450, 200, 'CFCs', { size: 15, anchor: 'middle', fill: C.olive, weight: 700 }) + t(450, 236, 'warm too', { size: 15, anchor: 'middle', fill: C.olive, weight: 700 });
  // timeline
  const X = (yr) => 80 + (yr - 1980) * 19, ty = 712;
  let d = panel(30, 580, 840, 236) + H(60, 616, 'The agreements', C.ink, 20);
  d += line(X(1980), ty, X(2020), ty, C.ink, 4);
  [1980, 1990, 2000, 2010, 2020].forEach((yr) => { d += line(X(yr), ty - 6, X(yr), ty + 6, C.ink, 3) + t(X(yr), ty + 26, String(yr), { size: 15, fill: C.muted, anchor: 'middle' }); });
  const ev = (yr, up, l1, l2, fill, dx = 0) => { const yy = up ? ty - 58 : ty + 44; return `<circle cx="${X(yr)}" cy="${ty}" r="8" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + line(X(yr), up ? ty - 10 : ty + 30, X(yr), up ? ty - 34 : ty + 44, C.ink, 2) + t(X(yr) + dx, up ? yy : yy + 18, l1, { size: 16, weight: 700, anchor: 'middle' }) + t(X(yr) + dx, up ? yy + 20 : yy + 38, l2, { size: 15, anchor: 'middle', fill: C.muted }); };
  d += ev(1985, true, 'Vienna 1985', 'co-operation', C.teal, -40) + ev(1987, true, 'Montreal 1987', 'ODS phase-out', C.teal, 75);
  d += ev(2016, true, 'Kigali 2016', 'HFC phase-down', C.teal, -6);
  d += ev(1992, false, 'UNFCCC 1992', 'framework', C.mustard) + ev(1997, false, 'Kyoto 1997', 'rich-country targets', C.mustard, 40) + ev(2015, false, 'Paris 2015', 'NDCs, well below 2 °C', C.mustard, -20);
  d += `<circle cx="260" cy="610" r="8" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + t(275, 616, 'ozone', { size: 16 }) + `<circle cx="350" cy="610" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(365, 616, 'climate', { size: 16 });
  add('07-ozone-vs-climate',
    svg(900, 836, 'Two different problems', b + d),
    'Two cause-and-effect chains side by side. Ozone depletion: CFCs and halons release chlorine, which thins the ozone layer and lets more UV-B reach the surface. Climate change: CO₂, methane and nitrous oxide absorb infrared and cause warming. A timeline shows ozone agreements (Vienna 1985, Montreal 1987, Kigali 2016) and climate agreements (UNFCCC 1992, Kyoto 1997, Paris 2015).',
    'The ozone hole lets in more UV; it does not cause global warming.',
    '## Common errors');
}
