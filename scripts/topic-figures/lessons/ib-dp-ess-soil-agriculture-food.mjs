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

export const slug = 'ib-dp-ess-soil-agriculture-food';

// 01 Soil profile as a system
{
  const L = 270, R = 610, sY = 260;
  const hz = [['O', 260, 296, C.olive, 'leaf litter, partly decomposed'], ['A', 296, 400, C.rockDark, 'topsoil: dark, humus-rich, most roots'], ['B', 400, 500, C.sand, 'subsoil: leached minerals collect'], ['C', 500, 580, C.rock, 'weathered parent material'], ['', 580, 630, '#8c8a80', '']];
  let b = panel(30, 110, 840, 640);
  hz.forEach(([n, y1, y2, fill, d]) => {
    b += `<rect x="${L}" y="${y1}" width="${R - L}" height="${y2 - y1}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
    b += t(L - 16, (y1 + y2) / 2 - 2, n ? n + ' horizon' : 'Bedrock', { size: 17, weight: 700, anchor: 'end' }) + tl(L - 16, (y1 + y2) / 2 + 18, wrap(d, 22), { size: 14.5, anchor: 'end', fill: C.muted }, 17);
  });
  // stones in C
  [[300, 530], [360, 550], [430, 525], [520, 555], [570, 530]].forEach(([x, y]) => { b += `<ellipse cx="${x}" cy="${y}" rx="16" ry="10" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.5"/>`; });
  // plant
  b += line(590, sY, 590, 180, C.grass, 5) + `<ellipse cx="570" cy="205" rx="22" ry="10" fill="${C.grass}" transform="rotate(-25 570 205)"/><ellipse cx="612" cy="190" rx="22" ry="10" fill="${C.grass}" transform="rotate(25 612 190)"/>` + path(`M590,${sY} l-18,50 M590,${sY} l4,70 M590,${sY} l14,45`, { stroke: '#e8dfc4', w: 3 });
  // inputs (down), outputs (up)
  b += ar(300, 150, 300, 254, C.tealDark, 4) + ar(360, 150, 360, 254, C.tealDark, 4) + ar(420, 150, 420, 254, C.tealDark, 4);
  b += t(300, 142, 'litter', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(360, 142, 'rain', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(420, 142, 'Sun, gases', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += ar(480, 254, 480, 170, C.rust, 4) + t(472, 136, 'evaporation,', { size: 15, weight: 700, fill: C.rust }) + t(472, 155, 'respiration gases', { size: 15, weight: 700, fill: C.rust });
  b += t(630, 220, 'plant uptake', { size: 15, weight: 700, fill: C.rust });
  b += ar(600, 258, 680, 258, C.rust, 4) + t(690, 254, 'erosion by', { size: 15, weight: 700, fill: C.rust }) + t(690, 272, 'wind, water', { size: 15, weight: 700, fill: C.rust });
  b += ar(440, 640, 440, 586, C.tealDark, 4) + t(452, 650, 'weathered rock in', { size: 15, weight: 700, fill: C.tealDark }).replace('y="650"', 'y="672"');
  b += ar(330, 500, 330, 690, C.rust, 4) + t(318, 688, 'leaching out', { size: 15, weight: 700, fill: C.rust, anchor: 'end' });
  // internal
  b += ar(390, 300, 390, 470, C.blue, 3.5) + t(398, 360, 'percolation,', { size: 14.5, weight: 700, fill: '#ffffff' }) + t(398, 378, 'leaching down', { size: 14.5, weight: 700, fill: '#ffffff' });
  b += `<path d="M520,330 q12,-10 24,0 q12,10 24,0" fill="none" stroke="${C.rust}" stroke-width="5" stroke-linecap="round"/>` + t(544, 360, 'earthworm', { size: 14.5, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(544, 377, 'mixing', { size: 14.5, weight: 700, anchor: 'middle', fill: '#ffffff' });
  // key
  b += rect(650, 320, 200, 300, { fill: C.panel, stroke: C.panelEdge });
  b += H(668, 350, 'Transfers', C.blue, 17) + tl(668, 374, ['infiltration, percolation', 'leaching downwards', 'earthworm mixing', 'clay translocation'], { size: 14.5 }, 19);
  b += H(668, 474, 'Transformations', C.rust, 17) + tl(668, 498, ['decomposition', 'humification', 'weathering of rock', 'nitrogen fixation', 'nutrient release'], { size: 14.5 }, 19);
  b += t(450, 728, 'Soil forms very slowly, so it is effectively non-renewable on a human timescale.', { size: 16, anchor: 'middle', weight: 600 });
  add('01-soil-profile-system',
    svg(900, 770, 'Soil as a system', b),
    'A soil profile with O, A, B and C horizons over bedrock. Inputs of leaf litter, rain, sunlight, gases and weathered rock enter; outputs of evaporation, respiration gases, plant uptake, erosion and leaching leave. A key separates transfers such as percolation and leaching from transformations such as decomposition, humification and weathering.',
    'Leaching moves nutrients without changing them: it is a transfer, not a transformation.',
    '## 5.1 Soil');
}

// 02 Soil texture
{
  const box = (x, kind) => {
    let o = `<rect x="${x + 40}" y="160" width="190" height="150" rx="8" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
    const clip = `<clipPath id="cp${kind}"><rect x="${x + 42}" y="162" width="186" height="146"/></clipPath>`;
    let g = '';
    if (kind === 's') for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) g += `<circle cx="${x + 58 + c * 40 + (r % 2) * 20}" cy="${178 + r * 38}" r="17" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.5"/>`;
    if (kind === 'c') for (let r = 0; r < 14; r++) for (let c = 0; c < 12; c++) g += `<rect x="${x + 44 + c * 16 + (r % 2) * 8}" y="${164 + r * 10.5}" width="14" height="7" rx="2" fill="${C.rockDark}"/>`;
    if (kind === 'l') { [[70, 185], [150, 200], [110, 260], [195, 270], [60, 285]].forEach(([a, c]) => { g += `<circle cx="${x + a}" cy="${c}" r="17" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.5"/>`; }); [[110, 180], [190, 185], [150, 240], [80, 235], [200, 225]].forEach(([a, c]) => { g += `<circle cx="${x + a}" cy="${c}" r="9" fill="${C.rock}" stroke="${C.ink}" stroke-width="1.2"/>`; }); for (let i = 0; i < 18; i++) g += `<rect x="${x + 50 + ((i * 37) % 170)}" y="${170 + ((i * 53) % 130)}" width="12" height="6" rx="2" fill="${C.rockDark}"/>`; }
    return clip + o + `<g clip-path="url(#cp${kind})">${g}</g>`;
  };
  const col = (x, name, kind) => panel(x, 110, 270, 220) + H(x + 135, 145, name, C.ink, 21, 'middle').replace('y="145"', 'y="146"') + box(x, kind);
  let b = col(30, 'Sandy', 's') + col(315, 'Clay', 'c') + col(600, 'Loam', 'l');
  // header overlaps box top: move title above
  const rows = [['Pore spaces', ['Large', 'Very small', 'Mixed sizes']], ['Drainage, aeration', ['Fast, well aerated', 'Slow, waterlogged', 'Good']], ['Water held', ['Low', 'High', 'Medium to high']], ['Nutrients held', ['Low (leach)', 'High (ions held)', 'Medium to high']], ['Productivity', ['Low without inputs', 'Limited by drainage', 'Usually highest']]];
  const good = [[0, 0, 1], [1, 0, 1], [0, 1, 1], [0, 1, 1], [0, 0, 1]];
  let c = '';
  rows.forEach(([lab, v], i) => {
    const y = 350 + i * 62;
    c += t(30, y + 36, '', {});
    v.forEach((s, j) => { const x = 30 + j * 285; c += rect(x, y, 270, 54, { fill: good[i][j] ? C.tealLight : C.panel, stroke: good[i][j] ? C.tealDark : C.panelEdge, r: 10 }) + t(x + 14, y + 22, lab, { size: 14.5, fill: C.muted }) + t(x + 14, y + 44, s, { size: 17, weight: 700 }); });
  });
  c += t(450, 680, 'Loam mixes sand, silt and clay: drainage of sand with the water and nutrient retention of clay.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('02-soil-texture',
    svg(900, 700, 'How texture changes a soil', b + c),
    'Close-ups of sandy soil with large particles and pores, clay soil with tiny packed particles, and loam with a mix. Rows compare them: sand drains fast but holds little water or nutrients; clay holds water and nutrients but drains slowly and waterlogs; loam combines good drainage with medium to high retention and usually has the highest productivity.',
    'Loam combines the drainage of sand with the retention of clay.',
    '## 5.1 Soil');
}

// 03 Water and organic matter in a soil sample
{
  const k = 22;
  let b = '';
  const st = (x, a, m, s, fill) => node(x, 120, 250, 100, a, [m, s], { size: 19, subSize: 16, fill });
  b += st(30, 'Fresh sample', '32.0 g', '', C.panel) + st(325, 'After oven drying', '25.0 g', 'water lost: 7.0 g', C.tealLight) + st(620, 'After ignition', '23.6 g', 'organic matter lost: 1.4 g', C.cream);
  b += ar(282, 170, 321, 170, C.ink, 4) + ar(577, 170, 616, 170, C.ink, 4);
  // stacked bar of fresh mass
  const x0 = 100, y0 = 270;
  b += panel(30, 250, 840, 210) + H(60, 290, 'Make-up of the fresh sample (g)', C.ink, 19);
  b += `<rect x="${x0}" y="310" width="${23.6 * k}" height="56" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>` + t(x0 + 11.8 * k, 344, 'mineral 23.6', { size: 17, weight: 700, anchor: 'middle' });
  b += `<rect x="${x0 + 23.6 * k}" y="310" width="${1.4 * k}" height="56" fill="${C.olive}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<rect x="${x0 + 25 * k}" y="310" width="${7 * k}" height="56" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + t(x0 + 28.5 * k, 344, 'water 7.0', { size: 17, weight: 700, anchor: 'middle' });
  b += line(x0 + 24.3 * k, 368, x0 + 24.3 * k, 384, C.ink, 2) + t(x0 + 24.3 * k, 404, 'organic 1.4', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += line(x0, 432, x0 + 25 * k, 432, C.ink, 2.5) + line(x0, 424, x0, 440, C.ink, 2.5) + line(x0 + 25 * k, 424, x0 + 25 * k, 440, C.ink, 2.5) + t(x0 + 12.5 * k, 452, 'dry mass 25.0', { size: 15, anchor: 'middle', fill: C.muted }).replace('y="452"', 'y="452"');
  b += rect(30, 480, 410, 110, { fill: C.tealLight, stroke: C.tealDark }) + t(235, 516, 'Water content', { size: 17, anchor: 'middle', fill: C.muted }) + t(235, 550, '7.0 ÷ 32.0 × 100 = 21.9%', { size: 21, weight: 700, anchor: 'middle' }) + t(235, 576, 'of FRESH mass', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += rect(460, 480, 410, 110, { fill: C.cream, stroke: C.olive }) + t(665, 516, 'Organic matter content', { size: 17, anchor: 'middle', fill: C.muted }) + t(665, 550, '1.4 ÷ 25.0 × 100 = 5.6%', { size: 21, weight: 700, anchor: 'middle' }) + t(665, 576, 'of DRY mass', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  add('03-soil-sample-water-organic',
    svg(900, 610, 'Worked example: water and organic matter', b),
    'A 32.0 g fresh soil sample weighs 25.0 g after oven drying (7.0 g of water lost) and 23.6 g after ignition (1.4 g of organic matter lost). Water content is 7.0 ÷ 32.0 × 100 = 21.9% of fresh mass; organic matter is 1.4 ÷ 25.0 × 100 = 5.6% of dry mass.',
    'Divide water by fresh mass but organic matter by dry mass, and say which you used.',
    '## 5.1 Soil');
}

// 04 Soil degradation: salinization and soil loss
{
  let b = panel(30, 110, 410, 520) + H(235, 148, 'Salinization', C.ink, 21, 'middle');
  const g = 380;
  b += `<rect x="50" y="${g}" width="370" height="150" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<rect x="50" y="${g + 20}" width="370" height="60" fill="${C.teal}" opacity="0.5"/>` + t(235, g + 58, 'irrigation water in the soil', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  for (let i = 0; i < 26; i++) b += `<circle cx="${58 + i * 14}" cy="${g - 3}" r="4" fill="#ffffff" stroke="${C.ink}" stroke-width="1.2"/>`;
  b += `<circle cx="345" cy="205" r="26" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(345, 250, 'hot, dry', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  b += [110, 170, 230].map((x) => wave(x, g - 14, x, 230, C.tealDark, 3, 5, 16)).join('') + t(170, 220, 'water evaporates', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(345, g - 40, 'salts left', { size: 15, weight: 700, anchor: 'middle' }) + t(345, g - 20, 'at the surface', { size: 15, weight: 700, anchor: 'middle' });
  b += tl(56, 560, ['Salts build up until crops cannot', 'take up water.'], { size: 16, fill: C.muted }, 21);
  let c = panel(460, 110, 410, 520) + H(665, 148, 'Soil loss as depth', C.ink, 21, 'middle');
  c += tl(484, 190, ['24.0 t per ha per year', '÷ 10 000 m² = 0.0024 t per m²', '÷ 1.2 t/m³ = 0.002 m'], { size: 17 }, 30);
  c += rect(484, 280, 360, 64, { fill: C.cream, stroke: C.olive }) + t(664, 320, '= 2.0 mm a year', { size: 22, weight: 700, anchor: 'middle' });
  // ruler
  const rx = 520, ry = 380;
  c += `<rect x="${rx}" y="${ry}" width="300" height="40" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>`;
  for (let i = 0; i <= 50; i += 5) c += line(rx + i * 6, ry, rx + i * 6, ry + (i % 10 ? 12 : 20), C.ink, 1.5);
  c += `<rect x="${rx}" y="${ry + 22}" width="300" height="18" fill="${C.rust}" opacity="0.8"/>` + t(rx + 150, ry + 64, '50 mm lost over 25 years', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  c += tl(484, 500, ['Soil forms at a few centimetres', 'over centuries, so this loss far', 'exceeds replacement.'], { size: 16, fill: C.muted }, 21);
  const forms = ['Erosion', 'Salinization', ['Nutrient', 'depletion'], 'Compaction', 'Contamination', 'Desertification'];
  let d = H(450, 668, 'Main forms of soil degradation', C.ink, 18, 'middle');
  forms.forEach((f, i) => { d += node(30 + i * 142, 686, 132, 52, f, [], { size: 15, fill: i === 1 ? C.cream : C.panel, stroke: i === 1 ? C.olive : C.ink }); });
  add('04-soil-degradation',
    svg(900, 755, 'Soil degradation', b + c + d),
    'Left: salinization, where irrigation water evaporates in a hot, dry climate and leaves salts at the surface until crops cannot take up water. Right: a loss of 24.0 t per hectare per year at a bulk density of 1.2 t per cubic metre equals 2.0 mm of soil a year, or 50 mm over 25 years. Below: the six main forms of degradation.',
    'Soil is lost far faster than it forms, so degradation is hard to reverse.',
    '## 5.1 Soil');
}

// 05 Soil conservation methods by how they work
{
  const col = (x, title, art, items, fill, edge) => panel(x, 110, 270, 460, fill, edge) + H(x + 135, 148, title[0], C.ink, 19, 'middle') + H(x + 135, 172, title[1], C.ink, 19, 'middle') + art + items.map(([a, s], i) => t(x + 20, 360 + i * 76, a, { size: 17, weight: 700 }) + tl(x + 20, 382 + i * 76, wrap(s, 30), { size: 14.5, fill: C.muted }, 18)).join('');
  const slope = (x) => `<path d="M${x + 25},320 L${x + 245},210 L${x + 245},320 Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>` + [0, 1, 2, 3].map((i) => { const X = x + 90 + i * 40, Y = 320 - (X - x - 25) * 0.5; return `<path d="M${X},${Y} a9,9 0 0 1 18,-9" fill="none" stroke="${C.olive}" stroke-width="4"/>`; }).join('') + ar(x + 70, 250, x + 70, 310, C.tealDark, 3) + t(x + 40, 240, 'runoff slowed', { size: 14.5, fill: C.tealDark, weight: 700 });
  const cover = (x) => `<rect x="${x + 25}" y="290" width="220" height="30" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>` + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => path(`M${x + 38 + i * 21},290 l-5,-18 M${x + 38 + i * 21},290 l0,-24 M${x + 38 + i * 21},290 l5,-18`, { stroke: C.grass, w: 2.5 })).join('') + [0, 1, 2].map((i) => line(x + 80 + i * 50, 210, x + 74 + i * 50, 240, C.blue, 3)).join('') + t(x + 135, 202, 'rain splash blocked', { size: 14.5, anchor: 'middle', fill: C.tealDark, weight: 700 });
  const rot = (x) => { const cx = x + 135, cy = 262, r = 62; return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${C.olive}" stroke-width="4" stroke-dasharray="12 8"/>` + [['crop A', -90], ['legume', 30], ['crop B', 150]].map(([s, a]) => { const q = (a * Math.PI) / 180; return node(cx + r * Math.cos(q) - 46, cy + r * Math.sin(q) - 15, 92, 30, s, [], { size: 14.5, fill: s === 'legume' ? C.teal : C.cream, stroke: C.olive }); }).join(''); };
  let b = col(30, ['Slow water', 'or wind'], slope(30), [['Contour ploughing', 'furrows along contours slow runoff'], ['Terracing', 'steps reduce slope length and gradient'], ['Windbreaks', 'trees or hedges cut wind speed']], C.panel, C.panelEdge);
  b += col(315, ['Keep the surface', 'covered'], cover(315), [['Cover crops, mulching', 'cover soil between harvests'], ['Reduced or no-till', 'keeps structure and organic matter'], ['Controlled grazing', 'stocking low enough to keep cover']], C.panel, C.panelEdge);
  b += col(600, ['Maintain organic', 'matter and nutrients'], rot(600), [['Crop rotation', 'legumes add nitrogen'], ['Compost and manure', 'improve structure, water, nutrients'], ['Lime; drip irrigation', 'raise pH; reduce salinization']], C.panel, C.panelEdge);
  b += t(450, 600, 'Evaluate: benefit against cost, labour, yield effects and local suitability.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('05-soil-conservation',
    svg(900, 620, 'Soil conservation: three ways it works', b),
    'Three groups of methods. Slowing water or wind: contour ploughing, terracing and windbreaks. Keeping the surface covered: cover crops and mulching, reduced or no-till, controlled grazing. Maintaining organic matter and nutrients: crop rotation with legumes, compost and manure, plus lime for acidity and drip irrigation against salinization.',
    'Each method slows water or wind, covers the soil, or keeps organic matter and nutrients.',
    '## 5.1 Soil');
}

// 06 People fed per hectare
{
  const person = (x, y, f = C.mustard) => `<circle cx="${x}" cy="${y - 18}" r="9" fill="${f}" stroke="${C.ink}" stroke-width="2"/><path d="M${x - 13},${y + 10} Q${x},${y - 14} ${x + 13},${y + 10} Z" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
  const field = (x, y) => `<rect x="${x}" y="${y}" width="150" height="90" rx="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + [0, 1, 2, 3, 4, 5].map((i) => line(x + 15 + i * 24, y + 78, x + 15 + i * 24, y + 30, C.olive, 3) + `<ellipse cx="${x + 15 + i * 24}" cy="${y + 26}" rx="4" ry="10" fill="${C.mustard}"/>`).join('');
  let b = panel(30, 110, 840, 230) + H(60, 148, 'Eat the crop directly', C.ink, 20);
  b += field(60, 170) + t(135, 284, '1 ha cereal', { size: 15, weight: 700, anchor: 'middle' }) + t(135, 304, '40 150 MJ/yr', { size: 15, anchor: 'middle', fill: C.muted });
  b += fat(222, 215, 350, 215, 26, C.mustard);
  for (let i = 0; i < 10; i++) b += person(390 + (i % 5) * 44, 200 + Math.floor(i / 5) * 62);
  b += t(640, 210, '40 150 ÷ 4015', { size: 18 }) + t(640, 244, '= 10 people', { size: 24, weight: 700 });
  let c = panel(30, 360, 840, 230) + H(60, 398, 'Feed the crop to livestock first', C.ink, 20);
  c += field(60, 420) + t(135, 534, '1 ha cereal', { size: 15, weight: 700, anchor: 'middle' }) + t(135, 554, '40 150 MJ/yr', { size: 15, anchor: 'middle', fill: C.muted });
  c += fat(222, 465, 300, 465, 26, C.mustard) + `<ellipse cx="350" cy="465" rx="38" ry="24" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/><circle cx="388" cy="450" r="13" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>` + t(350, 520, 'livestock', { size: 15, weight: 700, anchor: 'middle' }) + t(350, 540, '~10% passes on', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 });
  c += fat(410, 465, 470, 465, 5, C.mustard) + person(500, 480) + wave(372, 440, 404, 392, C.rust, 3, 5, 14);
  c += t(560, 455, '4015 MJ ÷ 4015', { size: 18 }) + t(560, 489, '= 1 person', { size: 24, weight: 700 });
  c += t(410, 398, 'heat', { size: 15, weight: 700, fill: C.rust });
  let d = rect(30, 610, 840, 96, { fill: C.cream, stroke: C.olive }) + t(60, 644, 'One person needs 11 MJ a day × 365 = 4015 MJ a year.', { size: 17, weight: 700 }) + t(60, 672, 'Eating lower in the food chain feeds ten times as many people from the same land,', { size: 16 }) + t(60, 694, 'though some grazing land cannot grow crops.', { size: 16 });
  add('06-people-fed-per-hectare',
    svg(900, 725, 'Why eating lower in the food chain feeds more people', b + c + d),
    'One hectare of cereal gives 40 150 MJ of food energy a year. Eaten directly it feeds 10 people at 4015 MJ each a year. Fed to livestock, only about 10% (4015 MJ) passes on, feeding 1 person; the rest is lost as heat.',
    'Adding a trophic level loses about 90% of the energy, so plant-rich diets need less land.',
    '## 5.2 Agriculture and food');
}

// 07 Food waste along the supply chain
{
  const stages = ['Field', 'Storage', 'Transport', 'Shops', 'Homes'];
  const xs = stages.map((_, i) => 120 + i * 165);
  const row = (y, title, sizes, col, why) => {
    let o = panel(30, y, 840, 220) + H(60, y + 38, title, C.ink, 20);
    o += line(xs[0], y + 110, xs[4], y + 110, C.panelEdge, 4);
    stages.forEach((s, i) => { o += `<circle cx="${xs[i]}" cy="${y + 110}" r="${sizes[i]}" fill="${sizes[i] > 30 ? col : C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`; });
    o += t(450, y + 196, why, { size: 16, anchor: 'middle', fill: C.muted });
    return o;
  };
  let b = '';
  stages.forEach((s, i) => { b += t(xs[i], 140, s, { size: 17, weight: 700, anchor: 'middle' }); if (i < 4) b += ar(xs[i] + 52, 134, xs[i + 1] - 52, 134, C.ink, 3); });
  b += row(160, 'Lower-income countries: more lost early', [42, 42, 38, 18, 18], C.rust, 'pests, poor storage and weak cold chains');
  b += row(400, 'Higher-income countries: more wasted late', [18, 18, 18, 42, 42], C.mustard, 'cosmetic standards, large portions and over-buying');
  b += t(450, 650, 'Circle size is schematic: it shows where most food is lost, not measured amounts.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('07-food-waste-supply-chain',
    svg(900, 675, 'Where food is wasted', b),
    'Two rows along a supply chain from field to storage, transport, shops and homes. In lower-income countries the largest losses are early, in the field, storage and transport, because of pests, poor storage and weak cold chains. In higher-income countries most waste is late, in shops and homes, because of cosmetic standards, large portions and over-buying.',
    'Poorer countries lose food early in the chain; richer countries waste it late.',
    '## 5.2 Agriculture and food');
}
