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

export const slug = 'ib-dp-ess-water-systems-security-pollution';

// 01 Hydrological cycle: storages, transfers and transformations
{
  const T = C.tealDark, R = C.rust;
  const lab = (x, y, s, col, anchor = 'start') => t(x, y, s, { size: 15, weight: 700, fill: col, anchor });
  const cloud = (x, y, s = 1) => `<path d="M${x - 50 * s},${y} a22,22 0 0 1 24,-26 a30,30 0 0 1 54,-4 a22,22 0 0 1 24,30 z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
  let b = `<rect x="30" y="110" width="840" height="640" rx="14" fill="#eef4f6" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
  // groundwater + soil + land
  const surf = 'M32,560 L130,270 L250,450 L380,486 L560,516';
  b += `<path d="${surf} L560,748 L32,748 Z" fill="${C.rock}"/>`;
  b += `<path d="M32,600 L560,600 L560,690 L32,690 Z" fill="${C.teal}" opacity="0.75"/>` + t(60, 660, 'Groundwater: largest store of liquid freshwater', { size: 15, weight: 700 });
  b += `<path d="${surf} L560,556 L380,526 L250,490 L130,310 L32,600 Z" fill="${C.sand}"/>` + path(surf, { stroke: C.ink, w: 3 });
  b += t(404, 514, 'soil', { size: 15, fill: C.olive, weight: 700 });
  // ocean
  b += `<rect x="560" y="516" width="308" height="232" fill="${C.teal}"/>` + line(560, 516, 868, 516, C.tealDark, 3) + t(740, 700, 'Oceans: about 97%', { size: 17, weight: 700, anchor: 'middle' }) + t(740, 722, 'of all water (salt)', { size: 15, anchor: 'middle' });
  // ice cap
  b += `<path d="M100,358 L130,270 L165,323 Q130,340 100,358 Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + t(40, 250, 'Ice caps and glaciers:', { size: 15, weight: 700 }) + t(40, 268, 'most freshwater', { size: 15, weight: 700 });
  // river along slope
  b += path('M170,360 Q210,420 260,452 Q330,474 380,486 Q470,500 560,516', { stroke: C.blue, w: 5 });
  b += lab(555, 506, 'river flow', T, 'end').replace('y="506"', 'y="500"');
  // tree
  b += `<rect x="424" y="436" width="10" height="50" fill="${C.rockDark}"/><circle cx="429" cy="420" r="28" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>`;
  // clouds
  b += cloud(330, 190) + cloud(760, 190);
  b += t(340, 138, 'Atmosphere: small store', { size: 15, weight: 700, anchor: 'middle' });
  // rain
  for (let i = 0; i < 6; i++) b += line(290 + i * 22, 205, 282 + i * 22, 250, C.blue, 2.5);
  b += t(420, 236, 'rain, snow', { size: 15, fill: C.blue, weight: 700 });
  // transformations (rust)
  b += wave(820, 510, 820, 220, R, 3.5, 5, 16) + lab(808, 400, 'evaporation', R, 'end');
  b += lab(806, 240, 'condensation', R, 'end');
  b += wave(452, 400, 482, 300, R, 3, 4, 14) + lab(470, 292, 'transpiration', R, 'end');
  b += ar(152, 340, 176, 372, R, 3) + lab(40, 330, 'melting', R);
  // transfers (teal)
  b += ar(690, 180, 410, 180, T, 3.5) + lab(550, 172, 'advection (wind)', T, 'middle');
  b += lab(470, 400, 'interception', T).replace('x="470"', 'x="466"').replace('y="400"', 'y="436"');
  b += ar(260, 436, 360, 466, T, 3) + lab(218, 380, 'surface runoff', T);
  b += ar(320, 480, 320, 512, T, 3) + lab(312, 528, 'infiltration', T, 'end');
  b += ar(380, 530, 470, 548, T, 3) + lab(380, 576, 'throughflow', T);
  b += ar(520, 548, 520, 594, T, 3) + lab(528, 588, 'percolation', T).replace('x="528"', 'x="488"').replace('y="588"', 'y="614"');
  b += ar(300, 630, 600, 630, T, 3.5) + lab(610, 636, 'groundwater flow', T);
  // legend
  b += `<line x1="580" y1="270" x2="620" y2="270" stroke="${R}" stroke-width="4"/>` + t(628, 276, 'transformation', { size: 15, weight: 700, fill: R }) + t(628, 294, '(changes state)', { size: 15, fill: C.muted });
  b += `<line x1="580" y1="320" x2="620" y2="320" stroke="${T}" stroke-width="4"/>` + t(628, 326, 'transfer', { size: 15, weight: 700, fill: T }) + t(628, 344, '(same state)', { size: 15, fill: C.muted });
  add('01-hydrological-cycle',
    svg(900, 770, 'The hydrological cycle as a system', b),
    'Cross-section from a glaciated mountain to the ocean. Storages: oceans (about 97% of water, salt), ice caps and glaciers (most freshwater), groundwater (the largest liquid freshwater store), soil, rivers and the atmosphere. Transformations such as evaporation, condensation, transpiration and melting are shown in red; transfers such as advection, interception, runoff, infiltration, throughflow, percolation, groundwater flow and river flow in green.',
    'Transformations change the state of water; transfers only move it.',
    '## 4.1 Water systems');
}

// 02 Urbanisation and the flood hydrograph
{
  const x0 = 110, y0 = 560, x1 = 840;
  let b = panel(30, 110, 840, 560);
  b += line(x0, y0, x1, y0, C.ink, 3) + line(x0, y0, x0, 160, C.ink, 3) + t(x1, y0 + 30, 'time (hours) →', { size: 16, anchor: 'end', weight: 600 });
  b += `<text x="72" y="360" font-size="16" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 72 360)">river discharge</text>`;
  // rainfall bars (inverted from top)
  [0, 1, 2, 3].forEach((i) => { const h = [40, 70, 55, 25][i]; b += `<rect x="${170 + i * 30}" y="160" width="26" height="${h}" fill="${C.blue}" opacity="0.8"/>`; });
  b += t(170, 150, 'rainfall', { size: 15, weight: 700, fill: C.blue });
  const rural = `M${x0},520 C300,518 360,470 420,380 C470,320 520,330 580,400 C640,470 720,505 ${x1},512`;
  const urban = `M${x0},520 C220,518 250,420 290,250 C310,190 340,190 370,280 C420,420 520,500 ${x1},515`;
  b += path(rural, { stroke: C.tealDark, w: 5 }) + path(urban, { stroke: C.rust, w: 5 });
  b += t(470, 300, 'rural', { size: 17, weight: 700, fill: C.tealDark }) + t(345, 205, 'urban', { size: 17, weight: 700, fill: C.rust });
  // lag times from rain peak (x=215)
  b += line(215, 230, 215, y0, C.blue, 2, '6 5');
  b += line(320, 205, 320, y0, C.rust, 2, '6 5') + line(475, 325, 475, y0, C.tealDark, 2, '6 5');
  b += `<line x1="215" y1="590" x2="320" y2="590" stroke="${C.rust}" stroke-width="3" marker-end="url(#ahR)" marker-start="url(#ahR)"/>` + t(267, 615, 'short lag', { size: 15, weight: 700, fill: C.rust, anchor: 'middle' });
  b += `<line x1="215" y1="635" x2="475" y2="635" stroke="${C.tealDark}" stroke-width="3" marker-end="url(#ahT)" marker-start="url(#ahT)"/>` + t(345, 660, 'longer lag', { size: 15, weight: 700, fill: C.tealDark, anchor: 'middle' }).replace('y="660"', 'y="657"');
  b += panel(560, 140, 290, 160, C.cream, C.olive) + tl(580, 175, ['Impermeable surfaces cut', 'infiltration, so more fast', 'runoff is piped to rivers:', 'lag time shortens, peak', 'discharge rises, flood risk up.'], { size: 15 }, 22);
  add('02-urban-hydrograph',
    svg(900, 690, 'How urbanisation changes river flow', b),
    'Schematic flood hydrograph after a rainstorm. The urban river peaks sooner and higher than the rural one: impermeable surfaces cut infiltration, so more fast runoff reaches the river, shortening lag time and raising peak discharge and flood risk.',
    'Urban surfaces shorten lag time and raise peak discharge.',
    '## 4.1 Water systems');
}

// 03 Water per person thresholds: Veloria
{
  const x0 = 70, k = 0.37; // px per m3
  const X = (v) => x0 + v * k;
  let b = panel(30, 110, 840, 330) + H(60, 148, 'Renewable freshwater per person (m³ a year)', C.ink, 19);
  const bands = [[0, 500, C.rust, 'absolute', 'scarcity'], [500, 1000, C.sand, 'water', 'scarcity'], [1000, 1700, C.cream, 'water', 'stress'], [1700, 2100, C.teal, 'no', 'stress']];
  bands.forEach(([a, z, fill, l1, l2]) => { b += `<rect x="${X(a)}" y="250" width="${X(z) - X(a)}" height="70" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>` + t((X(a) + X(z)) / 2, 280, l1, { size: 16, weight: 700, anchor: 'middle', fill: a === 0 ? '#ffffff' : C.ink }) + t((X(a) + X(z)) / 2, 302, l2, { size: 16, weight: 700, anchor: 'middle', fill: a === 0 ? '#ffffff' : C.ink }); });
  [0, 500, 1000, 1700].forEach((v) => { b += t(X(v), 344, v.toLocaleString('en-GB'), { size: 15, anchor: 'middle', fill: C.muted }); });
  const mk = (v, lab, col, up) => line(X(v), up ? 196 : 320, X(v), up ? 250 : 380, col, 4) + `<circle cx="${X(v)}" cy="${up ? 196 : 380}" r="8" fill="${col}"/>` + t(X(v), up ? 182 : 408, lab, { size: 17, weight: 700, anchor: 'middle', fill: col });
  b += mk(1750, 'now: 1750', C.tealDark, true) + mk(1400, '2040: 1400', C.rust, false);
  let c = rect(30, 460, 410, 160, { fill: C.panel, stroke: C.panelEdge }) + H(54, 494, 'Now', C.tealDark, 19) + tl(54, 524, ['42 × 10⁹ m³ ÷ 24 × 10⁶ people', '= 1750 m³ per person', '→ no stress'], { size: 17 }, 27);
  c += rect(460, 460, 410, 160, { fill: C.cream, stroke: C.olive }) + H(484, 494, '2040', C.rust, 19) + tl(484, 524, ['42 × 10⁹ m³ ÷ 30 × 10⁶ people', '= 1400 m³ per person', '→ water stress'], { size: 17 }, 27);
  c += t(450, 652, 'Convert km³ to m³ (× 10⁹) first. The indicator ignores quality, seasons and access.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('03-water-per-person',
    svg(900, 675, 'Worked example: water stress in Veloria', b + c),
    'A scale of renewable freshwater per person: below 500 cubic metres a year is absolute scarcity, 500 to 999 water scarcity, 1000 to 1699 water stress and 1700 or more no stress. Fictional Veloria has 42 cubic kilometres for 24 million people (1750, no stress) now, but 1400 (water stress) for 30 million in 2040.',
    'Population growth alone moves Veloria from no stress into water stress.',
    '## 4.2 Water access, use and security');
}

// 04 Catch per unit effort
{
  const grp = (x, title, a, b2, max, unit, note, col) => {
    const base = 470, H0 = 240; let o = panel(x, 110, 270, 470) + H(x + 135, 150, title, C.ink, 20, 'middle');
    [[a, '2016', 0], [b2, '2024', 1]].forEach(([v, yr, i]) => { const h = (v / max) * H0, bx = x + 50 + i * 100; o += `<rect x="${bx}" y="${base - h}" width="72" height="${h}" fill="${i ? col : C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + t(bx + 36, base - h - 10, v < 10 ? v.toFixed(1) : v.toLocaleString('en-GB'), { size: 17, weight: 700, anchor: 'middle' }) + t(bx + 36, base + 24, yr, { size: 16, anchor: 'middle', fill: C.muted }); });
    o += line(x + 36, base, x + 236, base, C.ink, 2.5) + t(x + 135, 186, unit, { size: 15, anchor: 'middle', fill: C.muted });
    o += ct(x + 135, 540, note, { size: 17, weight: 700 }, 22);
    return o;
  };
  let b = grp(30, 'Catch', 48000, 45000, 50000, 'tonnes', ['−6.25%', 'only a small fall'], C.teal);
  b += grp(315, 'Effort', 12000, 18000, 20000, 'boat-days', ['12 000 → 18 000', 'much more effort'], C.cream);
  b += grp(600, 'CPUE', 4.0, 2.5, 4.5, 't per boat-day', ['−37.5%', 'stock very likely shrinking'], C.rust);
  b += rect(30, 600, 840, 70, { fill: C.cream, stroke: C.olive }) + t(450, 643, 'CPUE = catch ÷ effort: 48 000 ÷ 12 000 = 4.0 → 45 000 ÷ 18 000 = 2.5', { size: 18, weight: 700, anchor: 'middle' });
  add('04-catch-per-unit-effort',
    svg(900, 690, 'Catch per unit effort tells the real story', b),
    'Three bar pairs for a fictional fishery in 2016 and 2024. Catch fell only slightly, from 48 000 to 45 000 t (−6.25%), while effort rose from 12 000 to 18 000 boat-days. Catch per unit effort fell from 4.0 to 2.5 t per boat-day (−37.5%), so the stock is very likely shrinking.',
    'Rising effort can hide a shrinking stock: judge a fishery by CPUE, not total catch.',
    '## 4.3 Aquatic food production systems');
}

// 05 Below a sewage outfall
{
  const x0 = 110, x1 = 840, y0 = 470, top = 200, out = 260;
  let b = panel(30, 110, 840, 560);
  b += `<rect x="${x0}" y="160" width="${x1 - x0}" height="26" fill="${C.teal}"/>` + t(x0 + 6, 152, 'river flow →', { size: 15, weight: 700, fill: C.tealDark });
  b += `<rect x="${out - 10}" y="132" width="20" height="40" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>` + t(out, 126, 'sewage outfall', { size: 15, weight: 700, anchor: 'middle' }).replace('y="126"', 'y="124"');
  b += line(x0, y0, x1, y0, C.ink, 3) + line(x0, y0, x0, top, C.ink, 3) + t(x1, y0 + 26, 'distance downstream →', { size: 15, anchor: 'end', weight: 600 });
  b += line(out, top, out, y0, C.muted, 2, '6 5');
  b += path(`M${x0},240 L${out},240 C320,240 340,420 420,425 C500,430 560,300 680,250 L${x1},242`, { stroke: C.blue, w: 5 });
  b += path(`M${x0},440 L${out},440 C300,440 320,260 380,258 C460,256 520,400 640,432 L${x1},440`, { stroke: C.rust, w: 5, extra: 'stroke-dasharray="11 6"' });
  b += t(150, 230, 'dissolved oxygen', { size: 16, weight: 700, fill: C.blue }) + t(150, 430, 'BOD', { size: 16, weight: 700, fill: C.rust });
  b += t(430, 450, 'O₂ used by bacteria', { size: 15, weight: 700, fill: C.blue, anchor: 'middle' }).replace('y="450"', 'y="456"');
  b += t(690, 236, 'recovers', { size: 15, weight: 700, fill: C.blue });
  // indicator zones
  const zone = (xa, xb, s1, s2, fill) => `<rect x="${xa}" y="520" width="${xb - xa}" height="80" fill="${fill}" stroke="${C.ink}" stroke-width="1.5"/>` + t((xa + xb) / 2, 553, s1, { size: 16, weight: 700, anchor: 'middle' }) + t((xa + xb) / 2, 577, s2, { size: 15, anchor: 'middle', fill: C.muted });
  b += zone(x0, out, 'stonefly, mayfly', 'clean, oxygen-rich', C.tealLight) + zone(out, 560, 'sludge worms', 'tolerate low oxygen', C.sand) + zone(560, x1, 'stonefly, mayfly', 'return as O₂ recovers', C.tealLight);
  b += t(450, 630, 'Indicator species reflect weeks or months; direct readings are a snapshot.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('05-sewage-outfall-oxygen',
    svg(900, 690, 'Below a sewage outfall', b),
    'Schematic graph along a river below a sewage outfall. BOD rises sharply below the outfall while dissolved oxygen falls as bacteria break down organic matter; further downstream BOD falls and oxygen recovers. Indicator species: stonefly and mayfly larvae in clean water, sludge worms in the low-oxygen zone.',
    'Organic pollution raises BOD and drains oxygen until it is broken down.',
    '## 4.4 Water pollution');
}

// 06 Eutrophication as a positive feedback loop
{
  const box = (x, y, n, a, s, fill = C.panel) => node(x, y, 250, 92, a, s, { size: 18, subSize: 15, fill }) + badge(x + 6, y + 6, 17, n, C.mustard);
  let b = box(40, 140, '1', 'Nitrates and phosphates', ['enter a lake or coastal water'], C.cream);
  b += box(450, 140, '2', 'Algal bloom', ['algae and plants grow fast']);
  b += box(610, 340, '3', 'Plants below shaded', ['and die']);
  b += box(450, 540, '4', 'Decomposers', ['use up dissolved oxygen']);
  b += box(150, 340, '5', 'Fish and invertebrates die', ['decay releases more nutrients']);
  b += ar(292, 186, 446, 186, C.ink, 4);
  b += carrow('M700,234 C730,270 740,300 735,336', C.rust, 4) + carrow('M735,434 C735,490 700,520 660,536', C.rust, 4);
  b += carrow('M446,586 C300,586 275,500 275,436', C.rust, 4) + carrow('M275,336 C290,240 400,210 446,200', C.rust, 5);
  b += badge(500, 386, 26, '+', C.mustard) + t(500, 438, 'positive', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + t(500, 458, 'feedback', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  b += rect(30, 660, 840, 74, { fill: C.cream, stroke: C.olive }) + t(450, 692, 'Severe cases produce dead zones with almost no oxygen.', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 718, 'Decomposers, not algae, cause the oxygen crash.', { size: 16, anchor: 'middle', fill: C.muted });
  add('06-eutrophication-loop',
    svg(900, 755, 'Eutrophication: a positive feedback loop', b),
    'Five steps: nitrates and phosphates enter the water; an algal bloom grows; plants below are shaded and die; decomposers use up dissolved oxygen; fish and invertebrates die and their decay releases more nutrients, which feeds the bloom again in a positive feedback loop.',
    'Decay releases more nutrients, so eutrophication feeds itself.',
    '## 4.4 Water pollution');
}

// 07 Biomagnification
{
  const lv = [['Zooplankton', '0.04 ppm', 0.04], ['Small fish', '0.3 ppm', 0.3], ['Large fish', '2.4 ppm', 2.4], ['Fish-eating birds', '18 ppm', 18]];
  let b = panel(30, 110, 840, 560);
  const L = (v) => 60 + (Math.log10(v) + 2) * 120; // log scale width
  lv.forEach(([n, s, v], i) => {
    const y = 500 - i * 105;
    b += t(70, y + 36, n, { size: 18, weight: 700 }) + `<rect x="270" y="${y + 8}" width="${L(v)}" height="44" fill="${[C.tealLight, C.teal, C.mustard, C.rust][i]}" stroke="${C.ink}" stroke-width="2"/>` + t(280 + L(v), y + 38, s, { size: 19, weight: 700 });
    if (i < 3) b += ar(170, y + 2, 170, y - 44, C.ink, 3.5);
  });
  b += t(270, 160, 'concentration of pesticide (bars on a log scale)', { size: 15, fill: C.muted, italic: true });
  b += rect(560, 450, 280, 120, { fill: C.cream, stroke: C.olive }) + t(700, 490, 'zooplankton → birds', { size: 16, anchor: 'middle', fill: C.muted }) + t(700, 528, '18 ÷ 0.04 = 450×', { size: 24, weight: 700, anchor: 'middle' }) + t(700, 556, 'more concentrated', { size: 15, anchor: 'middle', fill: C.muted });
  b += tl(60, 615, ['Persistent, fat-soluble pollutants build up in tissues (bioaccumulation)', 'and concentrate at each higher trophic level (biomagnification).'], { size: 16 }, 22);
  add('07-biomagnification',
    svg(900, 690, 'Biomagnification up a food chain', b),
    'Pesticide concentration in a fictional estuary food chain on a log scale: 0.04 ppm in zooplankton, 0.3 ppm in small fish, 2.4 ppm in large fish and 18 ppm in fish-eating birds, 450 times the zooplankton level.',
    'Persistent pollutants concentrate at each trophic level, so top predators get the highest dose.',
    '## 4.4 Water pollution');
}
