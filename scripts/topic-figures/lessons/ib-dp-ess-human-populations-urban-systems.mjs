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

export const slug = 'ib-dp-ess-human-populations-urban-systems';

// 01 Demographic transition model
{
  const x0 = 110, sw = 150, top = 200, low = 440;
  const ease = (a, b, u) => a + (b - a) * (1 - Math.cos(Math.PI * Math.min(1, Math.max(0, u)))) / 2;
  const BR = (x) => { const s = (x - x0) / sw; if (s < 2) return 205; if (s < 3) return ease(205, 430, s - 2); if (s < 4) return ease(430, 440, s - 3); return ease(440, 478, s - 4); };
  const DR = (x) => { const s = (x - x0) / sw; if (s < 1) return 222 + 16 * Math.sin((x - x0) / 9); if (s < 2) return ease(222, 418, s - 1); if (s < 3) return ease(418, 438, s - 2); if (s < 4) return ease(438, 446, s - 3); return ease(446, 432, s - 4); };
  const xs = []; for (let x = x0; x <= x0 + 5 * sw; x += 3) xs.push(x);
  const pl = (f) => xs.map((x, i) => `${i ? 'L' : 'M'}${x},${f(x).toFixed(1)}`).join(' ');
  let b = panel(30, 110, 840, 560);
  for (let i = 0; i < 5; i++) b += `<rect x="${x0 + i * sw}" y="160" width="${sw}" height="360" fill="${i % 2 ? C.panel : C.bg}"/>`;
  b += `<path d="${pl(BR)} ${xs.slice().reverse().map((x) => `L${x},${DR(x).toFixed(1)}`).join(' ')} Z" fill="${C.teal}" opacity="0.7"/>`;
  // stage 5 decrease
  let cross = xs.find((x) => x > x0 + 4 * sw && BR(x) > DR(x)) || x0 + 4.4 * sw;
  const xs5 = xs.filter((x) => x >= cross);
  b += `<path d="M${xs5.map((x) => `${x},${BR(x).toFixed(1)}`).join(' L')} L${xs5.slice().reverse().map((x) => `${x},${DR(x).toFixed(1)}`).join(' L')} Z" fill="${C.rust}" opacity="0.8"/>`;
  b += path(pl(BR), { stroke: C.ink, w: 4.5 }) + path(pl(DR), { stroke: C.rust, w: 4.5, extra: 'stroke-dasharray="10 6"' });
  b += line(x0, 520, x0 + 5 * sw, 520, C.ink, 3) + line(x0, 520, x0, 160, C.ink, 3);
  b += `<text x="72" y="340" font-size="17" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 72 340)">rate per 1000 per year</text>`;
  const names = [['1', 'High', 'stationary', 'very slow'], ['2', 'Early', 'expanding', 'rapid'], ['3', 'Late', 'expanding', 'slowing'], ['4', 'Low', 'stationary', 'very slow'], ['5', 'Declining', '(proposed)', 'negative']];
  names.forEach(([n, a, c, g], i) => { const cx = x0 + i * sw + sw / 2; b += badge(cx, 135, 17, n, i === 4 ? C.cream : C.mustard) + t(cx, 548, a, { size: 16, weight: 700, anchor: 'middle' }) + t(cx, 568, c, { size: 15, anchor: 'middle', fill: C.muted }) + t(cx, 594, 'growth: ' + g, { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }); });
  b += t(170, 190, 'birth rate', { size: 16, weight: 700 }) + t(150, 268, 'death rate', { size: 16, weight: 700, fill: C.rust });
  b += t(x0 + 2 * sw + 6, 320, 'natural', { size: 16, weight: 700, fill: C.tealDark }) + t(x0 + 2 * sw + 6, 340, 'increase', { size: 16, weight: 700, fill: C.tealDark });
  b += t(x0 + 5 * sw - 4, 505, 'decrease', { size: 15, weight: 700, fill: C.rust, anchor: 'end' });
  b += tl(60, 630, ['Stage 2: death rate falls fast with better food, water, sanitation and healthcare.', 'Stage 3: birth rate falls with contraception, education of women, urban living, lower infant mortality.'], { size: 15, fill: C.muted }, 21);
  add('01-demographic-transition-model',
    svg(900, 690, 'The demographic transition model', b),
    'Graph of birth rate and death rate across five stages. Both are high in stage 1; the death rate falls fast in stage 2 while birth rate stays high, giving rapid growth; birth rate falls in stage 3; both are low in stage 4; in proposed stage 5 the birth rate drops below the death rate and the population declines.',
    'The gap between birth and death rates is natural increase; it widens, then closes.',
    '## 8.1 Human populations');
}

// 02 Population pyramid shapes
{
  const pyr = (x, title, widths, fill, lines) => {
    let o = panel(x, 110, 270, 520) + H(x + 135, 150, title, C.ink, 21, 'middle');
    const cx = x + 135, bh = 32, y0 = 455;
    widths.forEach((w, i) => { const y = y0 - i * bh; o += `<rect x="${cx - w - 2}" y="${y}" width="${w}" height="${bh - 4}" fill="${fill}" stroke="${C.ink}" stroke-width="1.5"/><rect x="${cx + 2}" y="${y}" width="${w}" height="${bh - 4}" fill="${fill}" stroke="${C.ink}" stroke-width="1.5" opacity="0.75"/>`; });
    o += line(cx, y0 + bh, cx, y0 - (widths.length - 1) * bh - 6, C.ink, 2);
    o += t(cx - 60, y0 + bh + 22, 'males', { size: 15, anchor: 'middle', fill: C.muted }) + t(cx + 60, y0 + bh + 22, 'females', { size: 15, anchor: 'middle', fill: C.muted });
    o += ct(cx, 560, lines, { size: 16, fill: C.ink }, 21);
    return o;
  };
  let b = pyr(30, 'Expanding', [100, 86, 72, 58, 46, 34, 22, 12, 5], C.mustard, ['Wide base, narrow top', 'high birth rate,', 'young population']);
  b += pyr(315, 'Stationary', [62, 62, 61, 60, 58, 54, 46, 34, 16], C.teal, ['Straight sides', 'low birth and death', 'rates, slow growth']);
  b += pyr(600, 'Contracting', [40, 46, 54, 62, 68, 68, 62, 48, 26], C.tealLight, ['Narrow base, wide top', 'birth rate below', 'replacement, ageing']);
    b += t(450, 660, 'Read the shape as a record of the past: a notch may show a war, an epidemic or a strict birth policy.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('02-population-pyramid-shapes',
    svg(900, 685, 'Three population pyramid shapes', b),
    'Three schematic pyramids of males and females by age band. Expanding: a wide base and narrow top from a high birth rate. Stationary: straight sides from low birth and death rates. Contracting: a narrow base and wider middle and top from a birth rate below replacement.',
    'The base shows recent births; the shape records a population’s history.',
    '## 8.1 Human populations');
}

// 03 City as an open system
{
  let b = '';
  b += rect(30, 150, 230, 420, { fill: C.tealLight, stroke: C.tealDark }) + H(145, 192, 'Inputs', C.ink, 22, 'middle');
  b += tl(52, 236, ['food', 'water', 'energy (fuel,', 'electricity)', 'building materials', 'manufactured goods', 'people (migrants,', 'commuters)'], { size: 17 }, 38);
  b += `<rect x="300" y="150" width="300" height="420" rx="18" fill="${C.panel}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="12 8"/>`;
  b += H(450, 192, 'City', C.ink, 22, 'middle') + t(450, 218, 'open system: storages', { size: 16, anchor: 'middle', fill: C.muted });
  [[335, 280, 60, 110], [405, 250, 45, 140], [460, 300, 55, 90], [525, 270, 45, 120]].forEach(([x, y, w, h]) => { b += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>` + [0, 1, 2].map((r) => `<rect x="${x + 10}" y="${y + 14 + r * 26}" width="${w - 20}" height="10" fill="${C.cream}"/>`).join(''); });
  b += tl(330, 440, ['buildings and infrastructure', 'people', 'stocks of goods'], { size: 17 }, 30);
  b += rect(640, 150, 230, 420, { fill: C.cream, stroke: C.olive }) + H(755, 192, 'Outputs', C.ink, 22, 'middle');
  b += tl(662, 236, ['solid waste', 'sewage', 'air pollutants', 'greenhouse gases', 'waste heat', 'goods and services', 'people leaving'], { size: 17 }, 38);
  [260, 360, 460].forEach((y) => { b += ar(262, y, 296, y, C.tealDark, 5) + ar(604, y, 636, y, C.olive, 5); });
  b += rect(30, 595, 840, 70, { fill: C.cream, stroke: C.olive }) + t(450, 637, 'Little food or energy is produced inside, so the footprint is far larger than the city’s area.', { size: 17, weight: 700, anchor: 'middle' });
  add('03-city-as-system',
    svg(900, 690, 'A city as an open system', b),
    'Systems diagram of a city. Inputs of food, water, energy, building materials, goods and people flow in; buildings, infrastructure, people and goods are stored; outputs of solid waste, sewage, air pollutants, greenhouse gases, waste heat, goods and services and people flow out.',
    'A city depends on inputs from far beyond its boundary.',
    '## 8.2 Urban systems and urban planning');
}

// 04 Urban heat island
{
  const g = 500;
  let b = panel(30, 110, 840, 560);
  b += `<rect x="32" y="${g}" width="836" height="40" fill="#cfe0c0"/>` + line(32, g, 868, g, C.ink, 3);
  const bld = [[250, 40], [300, 70], [345, 110], [395, 170], [445, 220], [500, 190], [550, 130], [600, 80], [650, 50]];
  bld.forEach(([x, h]) => { b += `<rect x="${x}" y="${g - h}" width="44" height="${h}" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`; });
  [[70, 1], [130, 1], [190, 1], [720, 1], [780, 1], [840, 1]].forEach(([x]) => { b += `<rect x="${x - 3}" y="${g - 24}" width="6" height="24" fill="${C.rockDark}"/><circle cx="${x}" cy="${g - 34}" r="18" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>`; });
  // temperature profile
  b += path('M50,290 C200,288 260,250 330,220 C390,190 470,178 520,188 C600,210 640,270 700,286 C760,294 820,290 850,290', { stroke: C.rust, w: 5 });
  b += t(60, 268, 'air temperature', { size: 15, fill: C.rust, weight: 700 }) + t(470, 166, 'warmest over the centre', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(110, g + 28, 'rural', { size: 16, weight: 700, anchor: 'middle' }) + t(470, g + 28, 'city centre', { size: 16, weight: 700, anchor: 'middle' }) + t(790, g + 28, 'rural', { size: 16, weight: 700, anchor: 'middle' });
  // causes
  const cause = (n, x, y, l1, l2) => badge(x, y, 15, n, C.cream) + t(x + 22, y - 2, l1, { size: 15, weight: 700 }) + t(x + 22, y + 16, l2, { size: 15, fill: C.muted });
  b += cause('1', 60, 340, 'Dark surfaces absorb', 'sun, release heat slowly');
  b += cause('2', 664, 340, 'Waste heat: vehicles,', 'buildings, air conditioning');
  b += cause('3', 60, 400, 'Less vegetation, so', 'less evapotranspiration');
  b += cause('4', 664, 400, 'Tall buildings trap', 'heat, reduce wind');
  b += tl(60, 590, ['Cities are warmer than the surrounding countryside, especially at night.', 'Impermeable surfaces also speed runoff and raise flood risk.', 'Green roofs, street trees and parks help cool the city.'], { size: 16, fill: C.muted }, 24);
  add('04-urban-heat-island',
    svg(900, 690, 'The urban heat island', b),
    'Cross-section from countryside through a city centre of tall buildings and back. A temperature line rises from the rural edges to a peak over the centre. Four causes are labelled: dark surfaces, waste heat, less vegetation and evapotranspiration, and tall buildings that trap heat and reduce wind.',
    'Cities run warmer than the countryside, especially at night.',
    '## 8.2 Urban systems and urban planning');
}

// 05 Photochemical smog
{
  const st = (y, n, a, s) => panel(30, y, 440, 92) + badge(70, y + 46, 20, n, C.cream) + t(104, y + 40, a, { size: 18, weight: 700 }) + t(104, y + 66, s, { size: 15, fill: C.muted });
  let b = st(110, '1', 'Vehicles emit NO and VOCs', 'morning rush hour; NO oxidised to NO₂') + st(214, '2', 'Sunlight splits NO₂', 'NO₂ → NO + O') + st(318, '3', 'Ozone forms', 'O + O₂ → O₃') + st(422, '4', 'VOCs react with nitrogen oxides', 'forming PANs and more ozone');
  [202, 306, 410].forEach((y) => { b += ar(250, y, 250, y + 10, C.ink, 3); });
  b += rect(30, 530, 440, 120, { fill: C.cream, stroke: C.olive }) + H(52, 562, 'Ozone harms', C.ink, 18) + tl(52, 590, ['lungs and eyes; crops (less photosynthesis);', 'materials such as rubber'], { size: 16 }, 22);
  // daily graph
  const gx = 540, gy = 560, gw = 310;
  let c = panel(490, 110, 380, 540) + H(680, 148, 'Through a sunny, still day', C.ink, 19, 'middle');
  c += line(gx, gy, gx + gw, gy, C.ink, 3) + line(gx, gy, gx, 200, C.ink, 3);
  c += path(`M${gx},520 C${gx + 40},515 ${gx + 60},300 ${gx + 90},300 C${gx + 130},300 ${gx + 150},470 ${gx + 220},500 L${gx + gw},515`, { stroke: C.olive, w: 4.5 });
  c += path(`M${gx},540 C${gx + 80},540 ${gx + 120},400 ${gx + 170},250 C${gx + 200},210 ${gx + 230},300 ${gx + 260},430 L${gx + gw},520`, { stroke: C.tealDark, w: 4.5 });
  c += t(gx + 100, 290, 'NO₂', { size: 17, weight: 700, fill: C.olive, anchor: 'end' }) + t(gx + 205, 220, 'O₃', { size: 17, weight: 700, fill: C.tealDark });
  c += t(gx + 90, gy + 26, 'morning', { size: 15, anchor: 'middle', fill: C.muted }) + t(gx + 190, gy + 26, 'afternoon', { size: 15, anchor: 'middle', fill: C.muted }) + t(gx + gw, gy + 50, 'time of day →', { size: 15, anchor: 'end', fill: C.muted, weight: 600 });
  c += `<text x="${gx - 22}" y="380" font-size="15" font-weight="600" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 ${gx - 22} 380)">concentration</text>`;
  c += t(680, 632, 'O₃ peaks when sunlight is strongest', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 700 });
  add('05-photochemical-smog',
    svg(900, 670, 'How photochemical smog forms', b + c),
    'Four steps: vehicles emit nitrogen monoxide and VOCs, and NO is oxidised to NO₂; sunlight splits NO₂ into NO and an oxygen atom; the atom joins O₂ to form ozone; VOCs react with nitrogen oxides to form PANs and more ozone. A schematic daily graph shows NO₂ peaking in the morning and ozone in the afternoon.',
    'Ozone is a secondary pollutant: it peaks hours after the rush-hour emissions.',
    '## 8.3 Urban air pollution');
}

// 06 Thermal inversion
{
  const scene = (x, title, inv) => {
    let o = panel(x, 110, 410, 560) + H(x + 205, 150, title, C.ink, 21, 'middle');
    const g = 560;
    o += `<path d="M${x + 15},${g - 170} L${x + 90},${g - 60} L${x + 320},${g - 60} L${x + 395},${g - 170} L${x + 395},${g + 20} L${x + 15},${g + 20} Z" fill="#cfe0c0" stroke="${C.ink}" stroke-width="2.5"/>`;
    if (inv) {
      o += `<rect x="${x + 15}" y="318" width="380" height="64" fill="${C.mustard}" opacity="0.45"/>` + t(x + 205, 356, 'warm air layer', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
      o += `<path d="M${x + 15},${g - 170} L${x + 90},${g - 60} L${x + 320},${g - 60} L${x + 395},${g - 170} Z" fill="${C.rockDark}" opacity="0.3"/>`;
      o += t(x + 205, 412, 'cool, polluted air', { size: 15, weight: 700, anchor: 'middle', fill: C.ink });
      o += [x + 120, x + 290].map((ax) => ar(ax, 480, ax, 392, C.ink, 3) + t(ax, 388, '✗', { size: 18, weight: 700, anchor: 'middle', fill: C.rust })).join('');
      o += t(x + 205, 610, 'Pollutants trapped near the surface', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + t(x + 205, 634, 'calm, clear nights; valleys and basins', { size: 15, anchor: 'middle', fill: C.muted });
    } else {
      o += `<ellipse cx="${x + 150}" cy="215" rx="120" ry="32" fill="${C.rockDark}" opacity="0.2"/>` + t(x + 150, 221, 'pollutants disperse', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
      o += [[x + 100, 255], [x + 150, 250], [x + 200, 255]].map(([ax, top]) => ar(ax, 480, ax, top, C.ink, 3)).join('');
      o += t(x + 205, 610, 'Warm polluted air rises and disperses', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(x + 205, 634, 'temperature falls with height', { size: 15, anchor: 'middle', fill: C.muted });
    }
    [[x + 140, 50], [x + 180, 80], [x + 220, 60], [x + 260, 40]].forEach(([bx, h]) => { o += `<rect x="${bx}" y="${g - 60 - h}" width="34" height="${h}" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`; });
    // profile inset
    const bx = x + 290, by = 172;
    o += rect(bx, by, 106, 132, { fill: C.panel, stroke: C.panelEdge, sw: 2, r: 8 });
    o += line(bx + 18, by + 108, bx + 18, by + 14, C.ink, 2) + line(bx + 18, by + 108, bx + 96, by + 108, C.ink, 2);
    o += t(bx + 12, by + 22, 'height', { size: 15, anchor: 'end', fill: C.muted }).replace(`x="${bx + 12}"`, `x="${bx + 24}"`).replace('text-anchor="end"', 'text-anchor="start"');
    o += t(bx + 57, by + 126, 'temperature', { size: 15, anchor: 'middle', fill: C.muted });
    o += inv ? path(`M${bx + 34},${by + 104} L${bx + 82},${by + 64} L${bx + 40},${by + 30}`, { stroke: C.rust, w: 3.5 }) : path(`M${bx + 86},${by + 104} L${bx + 30},${by + 30}`, { stroke: C.rust, w: 3.5 });
    return o;
  };
  let b = scene(30, 'Normal conditions', false) + scene(460, 'Thermal inversion', true);
  add('06-thermal-inversion',
    svg(900, 690, 'Thermal inversions trap pollution', b),
    'Two valley cross-sections with a city. Normally temperature falls with height, so warm polluted air rises and disperses. In an inversion a warm air layer sits above cool air near the ground; the cool, polluted air cannot rise through it and pollutants are trapped. Small graphs show temperature against height.',
    'Warm air above cool air stops the polluted air near the ground from rising.',
    '## 8.3 Urban air pollution');
}

// 07 Three levels of pollution management
{
  const lv = [
    ['Alter the human activity', ['public transport, cycling, compact planning,', 'renewable electricity, congestion charges'], 'tackles the cause; slow, needs public support', C.teal, C.tealDark],
    ['Control release of the pollutant', ['catalytic converters, particulate filters,', 'scrubbers, emission standards, low-emission zones'], 'faster; needs enforcement', C.cream, C.olive],
    ['Clean up / restore', ['street trees and green walls trap particulates;', 'air quality alerts for vulnerable people'], 'weakest for air: pollutants disperse', C.sand, C.rust],
  ];
  let b = '';
  lv.forEach(([a, ex, ev, fill, edge], i) => {
    const y = 120 + i * 175, w = 840 - i * 70, x = 30 + i * 35;
    b += rect(x, y, w, 150, { fill, stroke: edge, sw: 3 }) + badge(x + 40, y + 42, 22, String(i + 1), C.panel);
    b += H(x + 76, y + 50, a, C.ink, 21) + tl(x + 30, y + 88, ex, { size: 16 }, 22) + t(x + 30, y + 136, ev, { size: 16, weight: 700, fill: edge });
    if (i < 2) b += ar(450, y + 152, 450, y + 172, C.ink, 4);
  });
  b += t(450, 660, 'Work from the top: the earlier the intervention, the closer it is to the cause.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('07-managing-urban-air-pollution',
    svg(900, 685, 'Three levels of managing urban air pollution', b),
    'Three stacked levels. Altering the human activity, such as public transport and renewable electricity, tackles the cause but is slow. Controlling release, such as catalytic converters and low-emission zones, is faster but needs enforcement. Clean-up, such as street trees and air quality alerts, is weakest for air because pollutants disperse.',
    'Changing the activity tackles the cause; clean-up is weakest for air.',
    '## 8.3 Urban air pollution');
}
