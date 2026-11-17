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

export const slug = 'ib-dp-ess-climate-biomes-succession';

// 01 Insolation and latitude
{
  const cx = 390, cy = 440, R = 190, RA = 214;
  const xr = (r, dy) => cx - Math.sqrt(r * r - dy * dy);
  const beam = (d1, d2) => {
    const a = xr(R, d1), b2 = xr(R, d2);
    return `<path d="M40,${cy + d1} L${a.toFixed(1)},${cy + d1} L${b2.toFixed(1)},${cy + d2} L40,${cy + d2} Z" fill="${C.mustard}" opacity="0.55"/>` +
      line(40, cy + d1, a, cy + d1, C.olive, 2) + line(40, cy + d2, b2, cy + d2, C.olive, 2);
  };
  const arc = (d1, d2) => { const a = xr(R, d1), b2 = xr(R, d2); return `<path d="M${a.toFixed(1)},${cy + d1} A${R},${R} 0 0 0 ${b2.toFixed(1)},${cy + d2}" fill="none" stroke="${C.rust}" stroke-width="9" stroke-linecap="round"/>`; };
  let b = panel(30, 110, 840, 670);
  b += `<circle cx="${cx}" cy="${cy}" r="${RA}" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2" stroke-dasharray="7 6"/>`;
  b += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="#cfe0c0" stroke="${C.ink}" stroke-width="3"/>`;
  const hw = Math.sqrt(R * R - 172 * 172);
  b += line(cx - R, cy, cx + R, cy, C.ink, 2, '8 6') + t(cx + 30, cy - 10, 'equator', { size: 17, weight: 600 });
  b += beam(-25, 25) + beam(-175, -125) + arc(-25, 25) + arc(-175, -125);
  b += ar(60, cy + 60, 160, cy + 60, C.olive, 3) + t(60, cy + 90, 'Sun’s rays (same width)', { size: 17, weight: 700, fill: C.olive });
  b += badge(205, cy - 200, 20, '1', C.mustard) + badge(160, cy - 50, 20, '2', C.cream);
  b += badge(640, 175, 20, '1', C.mustard) + H(672, 182, 'High latitude', C.ink, 20) + tl(625, 216, ['Low-angle rays: the same', 'energy is spread over a', 'larger area of ground.', 'Longer path through the', 'atmosphere: more energy', 'absorbed, scattered or', 'reflected. Ice and snow', 'reflect more (high albedo).'], { size: 16, fill: C.muted }, 22);
  b += badge(640, 420, 20, '2', C.cream) + H(672, 427, 'Near the equator', C.ink, 20) + tl(625, 461, ['High-angle rays: energy', 'concentrated on a small', 'area; short path through', 'the atmosphere.'], { size: 16, fill: C.muted }, 22);
  b += t(cx, cy + RA + 30, 'atmosphere (not to scale)', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += t(450, 750, 'Same width of beam, different area of ground: insolation falls towards the poles.', { size: 17, anchor: 'middle', weight: 700 });
  add('01-insolation-latitude',
    svg(900, 800, 'Why insolation falls with latitude', b),
    'Two equal beams of sunlight hit the Earth. Near the equator the beam strikes at a high angle onto a small area after a short path through the atmosphere. At high latitude the same beam strikes at a low angle, spreads over a larger area and passes through more atmosphere. Ice near the pole reflects more.',
    'Curvature spreads the same energy over more ground, and the longer path loses more.',
    '## 2.4 Climate and biomes');
}

// 02 Tricellular model
{
  const X = (lat) => 110 + lat * 7.9, gY = 470, top = 220;
  const loop = (xa, xb, up, col) => {
    // up: x where air rises; the other side sinks
    const xu = up === 'L' ? xa : xb, xd = up === 'L' ? xb : xa, dir = xd > xu ? 1 : -1;
    return carrow(`M${xu},${gY - 30} L${xu},${top + 40}`, col, 4) +
      carrow(`M${xu + dir * 14},${top + 20} L${xd - dir * 14},${top + 20}`, col, 4) +
      carrow(`M${xd},${top + 40} L${xd},${gY - 30}`, col, 4) +
      carrow(`M${xd - dir * 14},${gY - 14} L${xu + dir * 14},${gY - 14}`, col, 4);
  };
  let b = panel(30, 110, 840, 640);
  b += `<rect x="${X(0)}" y="${top}" width="${X(90) - X(0)}" height="${gY - top}" fill="${C.tealLight}" opacity="0.6"/>`;
  b += loop(X(2), X(28), 'L', C.rust) + loop(X(33), X(57), 'R', C.olive) + loop(X(63), X(88), 'L', C.tealDark);
  b += H((X(2) + X(28)) / 2, 350, 'Hadley', C.rust, 22, 'middle') + t((X(2) + X(28)) / 2, 374, '0–30°', { size: 16, anchor: 'middle', fill: C.muted });
  b += H((X(33) + X(57)) / 2, 350, 'Ferrel', C.olive, 22, 'middle') + t((X(33) + X(57)) / 2, 374, '30–60°', { size: 16, anchor: 'middle', fill: C.muted });
  b += H((X(63) + X(88)) / 2, 350, 'Polar', C.tealDark, 22, 'middle') + t((X(63) + X(88)) / 2, 374, '60–90°', { size: 16, anchor: 'middle', fill: C.muted });
  const cloud = (x, y) => `<path d="M${x - 30},${y} a14,14 0 0 1 16,-18 a18,18 0 0 1 32,0 a14,14 0 0 1 12,18 z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>` + [-16, -2, 12].map((d) => line(x + d, y + 6, x + d - 5, y + 20, C.blue, 2.5)).join('');
  b += cloud(X(2) + 34, 190) + cloud(X(60), 190);
  b += `<rect x="${X(0)}" y="${gY}" width="${X(90) - X(0)}" height="18" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  [0, 30, 60, 90].forEach((lat) => { b += line(X(lat), gY + 18, X(lat), gY + 30, C.ink, 3) + t(X(lat), gY + 50, lat + '°', { size: 17, weight: 700, anchor: 'middle' }); });
  b += t(X(0) - 6, gY + 50, '', {});
  const col = (x, anchor, P, lines, fill) => badge(x, gY + 92, 22, P, fill) + tl(anchor === 'start' ? x - 22 : anchor === 'end' ? x + 22 : x, gY + 142, lines, { size: 16, anchor, fill: C.ink }, 21);
  b += col(X(0), 'start', 'L', ['Rising air, heavy', 'rain: the ITCZ', 'rainforest'], C.cream);
  b += col(X(30), 'middle', 'H', ['Sinking air warms', 'and dries: rain is rare', 'most hot deserts'], C.mustard);
  b += col(X(60), 'middle', 'L', ['Polar front: air rises,', 'frequent rain', 'temperate forests'], C.cream);
  b += col(X(90), 'end', 'H', ['Cold, dense air', 'sinks: very little', 'precipitation'], C.mustard);
  b += t(X(0), 160, 'equator', { size: 16, fill: C.muted, weight: 600 }) + t(X(90), 160, 'pole', { size: 16, fill: C.muted, weight: 600, anchor: 'end' });
  add('02-tricellular-model',
    svg(900, 770, 'The tricellular model (one hemisphere)', b),
    'Cross-section from the equator to the pole showing three circulation cells. In the Hadley cell air rises at the equator (low pressure, heavy rain, ITCZ) and sinks at about 30° (high pressure, deserts). In the Ferrel cell surface air flows poleward to about 60°, where it rises at the polar front with frequent rain. In the polar cell cold air sinks over the pole.',
    'Rising air brings low pressure and rain; sinking air brings high pressure and drought.',
    '## 2.4 Climate and biomes');
}

// 03 Biomes placed by temperature and precipitation
{
  const x0 = 120, x1 = 840, y0 = 640, y1 = 160;
  let b = panel(30, 110, 840, 640);
  b += line(x0, y0, x1, y0, C.ink, 3) + line(x0, y0, x0, y1, C.ink, 3);
  b += ar(x0 + 200, y0 + 38, x0 + 520, y0 + 38, C.ink, 3) + t(x0 + 180, y0 + 44, 'colder', { size: 16, anchor: 'end', fill: C.muted }) + t(x0 + 540, y0 + 44, 'warmer', { size: 16, fill: C.muted });
  b += t(x0 + 360, y0 + 76, 'Mean annual temperature', { size: 18, weight: 700, anchor: 'middle' });
  b += `<text x="70" y="${(y0 + y1) / 2}" font-size="18" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 70 ${(y0 + y1) / 2})">Annual precipitation</text>`;
  b += t(x0 - 10, y0 - 10, 'dry', { size: 16, anchor: 'end', fill: C.muted }) + t(x0 - 10, y1 + 16, 'wet', { size: 16, anchor: 'end', fill: C.muted });
  const blob = (cx, cy, rx, ry, fill, l1, l2) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + t(cx, cy - (l2 ? 4 : -6), l1, { size: 17, weight: 700, anchor: 'middle' }) + (l2 ? t(cx, cy + 18, l2, { size: 15, anchor: 'middle', fill: C.ink }) : '');
  b += blob(210, 585, 80, 38, C.panel, 'Tundra', 'very low NPP');
  b += blob(300, 470, 95, 50, '#cfe0c0', 'Boreal forest', 'low NPP');
  b += blob(470, 545, 95, 42, C.cream, 'Temperate', 'grassland');
  b += blob(500, 400, 110, 54, '#a9c48f', 'Temperate', 'deciduous forest');
  b += blob(730, 595, 90, 34, C.sand, 'Hot desert', 'very low NPP');
  b += blob(720, 455, 92, 50, C.mustard, 'Savanna', 'wet + dry seasons');
  b += blob(730, 250, 105, 64, C.teal, 'Tropical', 'rainforest');
  b += t(730, 340, 'highest land NPP', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += rect(150, 180, 330, 92, { fill: C.cream, stroke: C.olive });
  b += tl(170, 212, ['Warm and wet: photosynthesis all', 'year, high NPP. Water (desert) or', 'cold and light (tundra) limit NPP.'], { size: 16 }, 22);
  add('03-biomes-temperature-precipitation',
    svg(900, 770, 'Biomes sorted by temperature and rainfall', b),
    'Schematic graph of annual precipitation against mean annual temperature. Tundra sits where it is cold and dry, boreal forest cold and moderately wet, temperate grassland and deciduous forest in mild conditions, hot desert hot and dry, savanna hot with seasonal rain, and tropical rainforest hot and wet with the highest NPP.',
    'Temperature and precipitation together decide which biome can grow.',
    '## 2.4 Climate and biomes');
}

// 04 Climate graph: station K
{
  const P = [260, 240, 290, 310, 270, 200, 180, 190, 220, 270, 300, 290];
  const T = [26.4, 26.8, 27.1, 27.3, 27.2, 26.9, 26.5, 26.6, 26.8, 27.0, 26.9, 26.6];
  const x0 = 110, y0 = 560, ky = 1.2, kt = 360 / 30, bw = 40, step = 52;
  let b = panel(30, 110, 840, 540);
  [0, 100, 200, 300].forEach((v) => { b += line(x0, y0 - v * ky, x0 + 12 * step, y0 - v * ky, C.panelEdge, 1.5) + t(x0 - 10, y0 - v * ky + 6, String(v), { size: 15, anchor: 'end', fill: C.blue }); });
  [0, 10, 20, 30].forEach((v) => { b += t(x0 + 12 * step + 10, y0 - v * kt + 6, String(v), { size: 15, fill: C.rust }); });
  P.forEach((p, i) => { const x = x0 + 6 + i * step; b += `<rect x="${x}" y="${y0 - p * ky}" width="${bw}" height="${p * ky}" fill="${p === 180 ? C.cream : C.teal}" stroke="${C.ink}" stroke-width="1.5"/>` + t(x + bw / 2, y0 + 24, 'JFMAMJJASOND'[i], { size: 16, weight: 600, anchor: 'middle' }); });
  b += path(T.map((v, i) => `${i ? 'L' : 'M'}${x0 + 26 + i * step},${(y0 - v * kt).toFixed(1)}`).join(' '), { stroke: C.rust, w: 4.5 });
  T.forEach((v, i) => { b += `<circle cx="${x0 + 26 + i * step}" cy="${(y0 - v * kt).toFixed(1)}" r="5" fill="${C.rust}"/>`; });
  b += line(x0, y0, x0 + 12 * step, y0, C.ink, 3);
  b += t(x0 - 10, 150, 'mm', { size: 16, anchor: 'end', fill: C.blue, weight: 700 }) + t(x0 + 12 * step + 10, 150, '°C', { size: 16, fill: C.rust, weight: 700 });
  b += t(x0 + 6 + 6 * step + bw / 2, y0 - 180 * ky - 10, '180', { size: 15, anchor: 'middle', weight: 700 });
  b += t(x0 + 6 * step, 150, 'temperature', { size: 16, fill: C.rust, weight: 700, anchor: 'middle' }) + t(x0 + 6 * step, 610, 'bars: precipitation', { size: 16, fill: C.tealDark, weight: 700, anchor: 'middle' });
  const chip = (x, w, a, c) => rect(x, 670, w, 84, { fill: C.cream, stroke: C.olive }) + t(x + w / 2, 706, a, { size: 21, weight: 700, anchor: 'middle' }) + t(x + w / 2, 734, c, { size: 15, anchor: 'middle', fill: C.muted });
  b += chip(30, 200, '3020 mm', 'annual precipitation') + chip(243, 200, '26.8 °C', 'mean temperature') + chip(456, 200, '0.9 °C', 'annual range') + chip(669, 201, '180 mm', 'driest month');
  b += rect(30, 772, 840, 58, { fill: C.teal, stroke: C.tealDark }) + t(450, 808, 'Hot all year, tiny range, no dry season → tropical rainforest', { size: 19, weight: 700, anchor: 'middle' });
  add('04-climate-graph-station-k',
    svg(900, 850, 'Worked example: which biome is station K?', b),
    'Climate graph for fictional station K. Monthly rainfall bars range from 180 to 310 mm and the temperature line stays between 26.4 and 27.3 °C. Totals: 3020 mm a year, mean 26.8 °C, range 0.9 °C, driest month 180 mm, matching tropical rainforest.',
    'High temperature, a tiny range and rain in every month point to tropical rainforest.',
    '## 2.4 Climate and biomes');
}

// 05 Primary succession sere
{
  const W = 168, y0 = 115, gY = 330, pb = 395;
  const stages = [['Bare rock', 'no soil'], ['Pioneers', 'lichens, mosses'], ['Seral stage', 'more species'], ['Seral stage', 'larger plants'], ['Climax', 'stable community']];
  let b = '';
  stages.forEach(([a, c], i) => {
    const x = 30 + i * W, soil = [0, 6, 18, 32, 48][i];
    b += rect(x + 8, y0, W - 16, pb - y0, { fill: C.panel, stroke: C.panelEdge, r: 12 });
    b += `<rect x="${x + 10}" y="${gY}" width="${W - 20}" height="${pb - gY - 2}" fill="${C.rock}"/>`;
    if (soil) b += `<rect x="${x + 10}" y="${gY - soil}" width="${W - 20}" height="${soil}" fill="${C.rockDark}"/>`;
    b += line(x + 10, gY - soil, x + W - 10, gY - soil, C.ink, 2.5);
    const gy = gY - soil, cx = x + W / 2;
    if (i === 1) b += [cx - 45, cx - 10, cx + 30].map((xx) => `<ellipse cx="${xx}" cy="${gy - 4}" rx="16" ry="6" fill="${C.olive}" stroke="${C.ink}" stroke-width="1.5"/>`).join('') + `<ellipse cx="${cx + 55}" cy="${gy - 5}" rx="10" ry="7" fill="${C.grass}"/>`;
    if (i === 2) b += [cx - 50, cx - 25, cx, cx + 25, cx + 50].map((xx) => path(`M${xx},${gy} l-6,-22 M${xx},${gy} l0,-28 M${xx},${gy} l6,-22`, { stroke: C.grass, w: 2.5 })).join('');
    if (i === 3) b += [cx - 36, cx + 34].map((xx) => `<ellipse cx="${xx}" cy="${gy - 32}" rx="30" ry="30" fill="#a9c48f" stroke="${C.ink}" stroke-width="2"/>`).join('') + path(`M${cx},${gy} l-6,-20 M${cx},${gy} l6,-20`, { stroke: C.grass, w: 2.5 });
    if (i === 4) b += [cx - 30, cx + 40].map((xx) => `<rect x="${xx - 5}" y="${gy - 70}" width="10" height="70" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.5"/><circle cx="${xx}" cy="${gy - 100}" r="34" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>`).join('');
    b += t(cx, pb + 30, a, { size: 18, weight: 700, anchor: 'middle' }) + t(cx, pb + 52, c, { size: 15, anchor: 'middle', fill: C.muted });
  });
  for (let i = 0; i < 4; i++) b += ar(30 + (i + 1) * W - 26, 200, 30 + (i + 1) * W + 12, 200, C.ink, 4);
  b += ar(114, 500, 114, 462, C.rust, 3.5) + t(40, 524, 'Primary succession starts', { size: 16, weight: 700, fill: C.rust }) + t(40, 544, 'on bare ground, no soil', { size: 15, fill: C.muted });
  b += ar(30 + 2.5 * W, 500, 30 + 2.5 * W, 462, C.tealDark, 3.5) + t(30 + 2.5 * W - 70, 524, 'Secondary succession starts', { size: 16, weight: 700, fill: C.tealDark }) + t(30 + 2.5 * W - 70, 544, 'where soil exists: fire, flood,', { size: 15, fill: C.muted }) + t(30 + 2.5 * W - 70, 562, 'abandoned farmland; faster', { size: 15, fill: C.muted });
  // trend bars
  const trend = (y, label, from, to, fill) => `<path d="M260,${y + 26} L840,${y + 4} L840,${y + 48} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>` + t(60, y + 32, label, { size: 17, weight: 700 }) + t(270, y + 64, from, { size: 15, fill: C.muted }) + t(840, y + 64, to, { size: 15, fill: C.muted, anchor: 'end' });
  let c = panel(30, 590, 840, 300);
  c += trend(605, 'Soil depth', 'thin, little organic matter', 'deep, organic-rich', C.rockDark);
  c += trend(680, 'Biomass', 'low but rising', 'high', C.grass);
  c += trend(755, 'Food webs', 'simple chains', 'complex webs', C.teal);
  c += t(60, 866, 'Species: r-strategists (many small offspring) → K-strategists (fewer, larger, long-lived)', { size: 16, weight: 600 });
  add('05-succession-sere',
    svg(900, 910, 'A sere: from bare rock to climax', b + c),
    'Five stages of primary succession: bare rock, pioneer lichens and mosses, then seral stages with more and larger plants, ending in a climax community. Soil gets deeper at each stage. Secondary succession enters part-way along, where soil already exists. Wedges show soil depth, biomass and food-web complexity increasing.',
    'Each seral stage changes conditions so the next species can establish.',
    '## 2.5 Zonation, succession and change in ecosystems');
}

// 06 GPP, R, NPP and P:R during succession
{
  const D = [['Pioneer', 3000, 1200, 1800, '2.5'], ['Early', 9000, 4500, 4500, '2.0'], ['Mid', 15000, 10000, 5000, '1.5'], ['Climax', 20000, 19000, 1000, '1.05']];
  const x0 = 120, y0 = 520, k = 330 / 20000, gw = 175;
  let b = panel(30, 110, 840, 640);
  [0, 5000, 10000, 15000, 20000].forEach((v) => { b += line(x0, y0 - v * k, 840, y0 - v * k, C.panelEdge, 1.5) + t(x0 - 10, y0 - v * k + 6, v.toLocaleString('en-GB'), { size: 15, anchor: 'end', fill: C.muted }); });
  b += t(x0 - 10, 160, 'kJ m⁻² yr⁻¹', { size: 15, anchor: 'start', fill: C.muted }).replace(`x="${x0 - 10}"`, 'x="50"');
  D.forEach(([name, g, r, n, pr], i) => {
    const x = x0 + 25 + i * gw;
    b += `<rect x="${x}" y="${y0 - g * k}" width="60" height="${g * k}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
    b += `<rect x="${x + 64}" y="${y0 - r * k}" width="60" height="${r * k}" fill="${C.rust}" opacity="0.85" stroke="${C.ink}" stroke-width="2"/>`;
    b += t(x + 62, y0 + 28, name, { size: 18, weight: 700, anchor: 'middle' });
    b += t(x + 62, y0 + 58, 'NPP ' + n.toLocaleString('en-GB'), { size: 16, anchor: 'middle', fill: n === 5000 ? C.olive : C.ink, weight: n === 5000 ? 700 : 400 });
    b += rect(x + 12, y0 + 72, 100, 34, { fill: C.cream, stroke: C.olive, r: 8 }) + t(x + 62, y0 + 95, 'P:R ' + pr, { size: 16, weight: 700, anchor: 'middle' });
  });
  b += line(x0, y0, 840, y0, C.ink, 3);
  b += `<rect x="560" y="140" width="22" height="18" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + t(590, 155, 'GPP (P)', { size: 16 }) + `<rect x="690" y="140" width="22" height="18" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>` + t(720, 155, 'R', { size: 16 });
  b += tl(60, 680, ['GPP rises throughout as leaf area grows. NPP = GPP − R peaks mid-succession,', 'then falls as respiration catches up. P:R falls towards 1 at climax.'], { size: 17 }, 24);
  add('06-productivity-succession',
    svg(900, 770, 'Productivity changes during succession', b),
    'Paired bars of GPP and respiration for four stages (fictional data). Pioneer 3000 and 1200, early 9000 and 4500, mid 15000 and 10000, climax 20000 and 19000 kJ per square metre per year. NPP is 1800, 4500, 5000 and 1000, and P:R falls from 2.5 to 1.05.',
    'GPP is highest at climax, but NPP peaks mid-succession.',
    '## 2.5 Zonation, succession and change in ecosystems');
}

// 07 Disturbance and plagioclimax
{
  const graph = (x, title, curve, notes) => {
    const ax = x + 50, ay = 470, ex = x + 390;
    let o = panel(x, 110, 410, 540) + H(x + 205, 148, title, C.ink, 20, 'middle');
    o += line(ax, 200, ex, 200, C.tealDark, 2, '8 6') + t(ex, 190, 'climax', { size: 15, weight: 700, anchor: 'end', fill: C.tealDark });
    o += line(ax, ay, ex, ay, C.ink, 3) + line(ax, ay, ax, 170, C.ink, 3);
    o += t((ax + ex) / 2, ay + 28, 'time →', { size: 16, weight: 600, anchor: 'middle', fill: C.muted });
    o += `<text x="${x + 30}" y="${(ay + 190) / 2}" font-size="16" font-weight="600" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 ${x + 30} ${(ay + 190) / 2})">biomass</text>`;
    o += curve;
    notes.forEach(([n, l1, l2], i) => { o += badge(x + 40, 545 + i * 56, 16, n, C.cream) + t(x + 66, 541 + i * 56, l1, { size: 16, weight: 700 }) + t(x + 66, 561 + i * 56, l2, { size: 15, fill: C.muted }); });
    return o;
  };
  const L = 30, Rx = 460;
  const c1 = path(`M${L + 52},462 C${L + 110},455 ${L + 120},215 ${L + 190},204 L${L + 235},202`, { stroke: C.grass, w: 5 }) +
    path(`M${L + 235},202 L${L + 240},430`, { stroke: C.rust, w: 4, extra: 'stroke-dasharray="7 5"' }) +
    path(`M${L + 240},430 C${L + 270},400 ${L + 285},215 ${L + 330},205 L${L + 385},202`, { stroke: C.grass, w: 5 }) +
    badge(L + 262, 440, 15, '1', C.cream) + badge(L + 312, 300, 15, '2', C.cream);
  const c2 = path(`M${Rx + 52},462 C${Rx + 90},455 ${Rx + 100},350 ${Rx + 150},345 L${Rx + 250},345`, { stroke: C.grass, w: 5 }) +
    `<rect x="${Rx + 150}" y="335" width="100" height="20" fill="${C.mustard}" opacity="0.35"/>` +
    path(`M${Rx + 250},345 C${Rx + 290},340 ${Rx + 300},212 ${Rx + 340},205 L${Rx + 385},202`, { stroke: C.grass, w: 5, extra: 'stroke-dasharray="10 6"' }) +
    badge(Rx + 200, 310, 15, '1', C.cream) + badge(Rx + 296, 250, 15, '2', C.cream);
  let b = graph(L, 'Disturbance resets succession', c1, [['1', 'Disturbance removes biomass', 'fire, storm, flood, clearing'], ['2', 'Secondary succession', 'faster: soil and seeds remain']]);
  b += graph(Rx, 'Plagioclimax holds it back', c2, [['1', 'Plagioclimax', 'held by grazing or burning'], ['2', 'Grazing or burning stops', 'secondary succession resumes']]);
  b += t(450, 690, 'Plagioclimax examples: grazed pasture, lawns, heather moorland burned in rotation.', { size: 16, anchor: 'middle', fill: C.muted });
  add('07-disturbance-plagioclimax',
    svg(900, 715, 'Disturbance and plagioclimax', b),
    'Two schematic graphs of biomass over time. Left: succession reaches climax, a disturbance removes biomass, and faster secondary succession returns it to climax. Right: grazing or burning holds the community at a plagioclimax below climax; when it stops, secondary succession resumes towards climax.',
    'Disturbance resets succession; human activity can hold it below climax.',
    '## 2.5 Zonation, succession and change in ecosystems');
}
