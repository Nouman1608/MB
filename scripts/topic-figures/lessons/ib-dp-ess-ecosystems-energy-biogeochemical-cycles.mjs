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

export const slug = 'ib-dp-ess-ecosystems-energy-biogeochemical-cycles';

// 01 J-curve and S-curve
{
  const graph = (x, title) => { const ax = x + 60, ay = 520, ex = x + 385; return panel(x, 110, 410, 540) + H(x + 205, 150, title, C.ink, 21, 'middle') + line(ax, ay, ex, ay, C.ink, 3) + line(ax, ay, ax, 180, C.ink, 3) + t((ax + ex) / 2, ay + 30, 'time →', { size: 16, weight: 600, anchor: 'middle', fill: C.muted }) + `<text x="${x + 34}" y="355" font-size="16" font-weight="600" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 ${x + 34} 355)">population size</text>`; };
  let b = graph(30, 'J-curve');
  b += path('M92,512 C200,505 250,440 290,200', { stroke: C.rust, w: 5 }) + path('M290,200 C300,190 310,420 340,500', { stroke: C.rust, w: 4, extra: 'stroke-dasharray="9 6"' });
  b += t(110, 240, 'exponential', { size: 17, weight: 700 }) + t(110, 260, 'growth, no limit', { size: 16, fill: C.muted });
  b += t(330, 420, 'crash', { size: 17, weight: 700, fill: C.rust });
  b += tl(60, 600, ['Usually ends in a crash when', 'resources run out.'], { size: 16, fill: C.muted }, 21);
  b += graph(460, 'S-curve');
  const K = 230;
  b += line(520, K, 845, K, C.tealDark, 2.5, '9 6') + t(525, K - 10, 'carrying capacity (K)', { size: 16, weight: 700, fill: C.tealDark });
  b += path(`M522,512 C580,510 600,500 640,440 C680,370 700,280 740,250 C770,232 800,232 845,${K + 2}`, { stroke: C.tealDark, w: 5 });
  // phase labels
  const ph = (x, y, n, s) => badge(x, y, 15, n, C.cream) + t(x + 22, y + 6, s, { size: 15, weight: 600 });
  b += ph(560, 480, '1', 'lag') + ph(660, 400, '2', 'exponential') + ph(740, 290, '3', 'transitional') + ph(775, 205, '4', 'plateau');
  b += tl(490, 600, ['Negative feedback holds the plateau:', 'birth rate falls, death rate rises.'], { size: 16, fill: C.muted }, 21);
  add('01-j-and-s-curves',
    svg(900, 670, 'Population growth: J-curve and S-curve', b),
    'Two graphs of population size over time. The J-curve rises exponentially with no limit and then crashes when resources run out. The S-curve has lag, exponential and transitional phases, then a plateau at the carrying capacity K held by negative feedback.',
    'Limiting factors turn exponential growth into a plateau at carrying capacity.',
    '## 2.1 Individuals, populations, communities and ecosystems');
}

// 02 Lincoln index worked example
{
  const dots = (x0, y0, cols, rows, marked, total, gap = 26) => { let o = ''; let k = 0; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { if (k >= total) break; const m = k < marked; o += `<circle cx="${x0 + c * gap}" cy="${y0 + r * gap}" r="9" fill="${m ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="2"/>`; if (m) o += `<circle cx="${x0 + c * gap}" cy="${y0 + r * gap}" r="3" fill="${C.ink}"/>`; k++; } return o; };
  const card = (x, w, n, head, sub, art) => panel(x, 110, w, 380) + badge(x + 34, 150, 20, n, C.cream) + H(x + 64, 157, head, C.ink, 20) + t(x + 64, 181, sub, { size: 15, fill: C.muted }) + art;
  let b = card(30, 270, '1', 'Capture and mark', 'first sample', dots(70, 235, 8, 5, 40, 40) + H(165, 400, 'M = 40', C.ink, 22, 'middle') + t(165, 428, 'marked, then released', { size: 15, anchor: 'middle', fill: C.muted }));
  b += card(315, 270, '2', 'Release and mix', 'a week later', `<ellipse cx="450" cy="300" rx="110" ry="85" fill="#e6efd9" stroke="${C.grass}" stroke-width="2.5"/>` + [[400, 260], [470, 250], [430, 320], [500, 330], [450, 290], [390, 340], [520, 280]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="9" fill="${i % 3 === 0 ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="2"/>`).join('') + t(450, 430, 'marked beetles mix', { size: 15, anchor: 'middle', fill: C.muted }) + t(450, 450, 'back into the population', { size: 15, anchor: 'middle', fill: C.muted }));
  b += card(600, 270, '3', 'Recapture', 'second sample', dots(637, 225, 8, 7, 8, 50) + H(735, 418, 'C = 50, R = 8', C.ink, 22, 'middle') + t(735, 446, '8 of the 50 are marked', { size: 15, anchor: 'middle', fill: C.muted }));
  b += rect(30, 510, 840, 90, { fill: C.cream, stroke: C.olive }) + t(450, 552, 'N = (M × C) / R = (40 × 50) / 8 = 2000 / 8 = 250 beetles', { size: 23, weight: 700, anchor: 'middle' }) + t(450, 582, 'R goes on the bottom', { size: 16, anchor: 'middle', fill: C.muted });
  b += H(30, 640, 'Assumptions', C.ink, 19) + t(160, 640, 'no migration, births or deaths between samples; marks stay on;', { size: 16, fill: C.muted }) + t(160, 664, 'marks do not change survival; marked animals mix fully back in.', { size: 16, fill: C.muted });
  add('02-lincoln-index',
    svg(900, 690, 'Capture–mark–release–recapture', b),
    'Three steps: 40 beetles are caught and marked, then released to mix back into the population; a week later 50 are caught, of which 8 are marked. The Lincoln index gives N = 40 × 50 ÷ 8 = 250 beetles.',
    'The share of marked animals in the second catch scales up to the whole population.',
    '## 2.1 Individuals, populations, communities and ecosystems');
}

// 03 Energy budgets: GPP/NPP and GSP/NSP
{
  // horizontal sankey: main band from x a to b at top y with height h; branch peels up or down
  const band = (x1, x2, y, h, fill) => `<rect x="${x1}" y="${y}" width="${x2 - x1}" height="${h}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
  const peelUp = (x, y, h, w, top, fill) => `<path d="M${x},${y} C${x + 50},${y} ${x + 70},${y - 30} ${x + 70},${top + 20} L${x + 70 + w},${top + 20} C${x + 70 + w},${y + h - 40} ${x + 50 + w * 0.5},${y + h} ${x},${y + h} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>` + `<path d="M${x + 60},${top + 20} L${x + 80 + w},${top + 20} L${x + 70 + w / 2},${top - 6} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
  const peelDown = (x, y, h, w, bot, fill) => `<path d="M${x},${y + h} C${x + 50},${y + h} ${x + 70},${y + h + 30} ${x + 70},${bot - 20} L${x + 70 + w},${bot - 20} C${x + 70 + w},${y + 40} ${x + 50 + w * 0.5},${y} ${x},${y} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>` + `<path d="M${x + 60},${bot - 20} L${x + 80 + w},${bot - 20} L${x + 70 + w / 2},${bot + 6} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
  let b = panel(30, 110, 840, 310) + H(60, 148, 'Producers (grassland)', C.ink, 21) + t(310, 148, 'kJ m⁻² yr⁻¹', { size: 16, fill: C.muted });
  // GPP 18500 -> h 150 ; R 11100 -> 90 ; NPP 7400 -> 60
  const y1 = 240;
  b += band(60, 300, y1, 150, C.teal) + t(180, y1 + 70, 'GPP', { size: 20, weight: 700, anchor: 'middle' }) + t(180, y1 + 96, '18 500', { size: 20, weight: 700, anchor: 'middle' });
  b += peelUp(300, y1, 90, 90, 170, C.rust) + band(300, 840, y1 + 90, 60, C.mustard);
  b += t(480, 196, 'R 11 100', { size: 19, weight: 700, fill: C.rust }) + t(480, 218, 'lost as heat', { size: 16, fill: C.muted });
  b += t(600, y1 + 128, 'NPP = 18 500 − 11 100 = 7400 (40.0% of GPP)', { size: 18, weight: 700, anchor: 'middle' });
  let c = panel(30, 440, 840, 360) + H(60, 478, 'Grasshoppers (primary consumers)', C.ink, 21) + t(442, 478, 'kJ m⁻² yr⁻¹', { size: 16, fill: C.muted });
  // eaten 1850 -> 150 ; faeces 1110 -> 90 ; GSP 740 -> 60 ; R 592 -> 48 ; NSP 148 -> 12
  const y2 = 560;
  c += band(60, 260, y2, 150, C.teal) + t(160, y2 + 64, 'Food eaten', { size: 18, weight: 700, anchor: 'middle' }) + t(160, y2 + 90, '1850', { size: 20, weight: 700, anchor: 'middle' });
  c += peelDown(260, y2 + 60, 90, 90, 780, C.sand) + band(260, 500, y2, 60, C.mustard);
  c += t(440, 720, 'faeces 1110', { size: 18, weight: 700 }) + t(440, 742, 'not assimilated', { size: 16, fill: C.muted });
  c += t(330, y2 + 38, 'GSP 740', { size: 17, weight: 700 });
  c += peelUp(500, y2, 48, 48, 500, C.rust) + band(500, 840, y2 + 48, 12, C.grass);
  c += t(640, 528, 'R 592', { size: 18, weight: 700, fill: C.rust }) + t(640, 550, 'lost as heat', { size: 16, fill: C.muted });
  c += t(840, y2 + 92, 'NSP = 740 − 592 = 148', { size: 18, weight: 700, anchor: 'end' }) + t(840, y2 + 116, 'new consumer biomass', { size: 16, fill: C.muted, anchor: 'end' });
  c += t(840, 478, 'GSP = 1850 − 1110 = 740', { size: 17, anchor: 'end', weight: 700 });
  add('03-productivity-budgets',
    svg(900, 820, 'Where the energy goes: GPP to NSP', b + c),
    'Two flow diagrams with widths proportional to energy. Producers: GPP of 18 500 kJ per square metre per year splits into 11 100 lost as heat in respiration and NPP of 7400. Grasshoppers: 1850 eaten, 1110 lost in faeces, leaving GSP of 740; 592 is respired, leaving NSP of 148.',
    'Subtract respiration for NPP and NSP; for consumers, subtract faeces first.',
    '## 2.2 Energy and biomass in ecosystems');
}

// 04 Energy flow along a food chain (~10%)
{
  const lv = [['Producers', '10 000', 400], ['Primary consumers', '1000', 320], ['Secondary consumers', '100', 250], ['Tertiary consumers', '10', 200]];
  let b = '';
  lv.forEach(([n, v, w], i) => {
    const y = 570 - i * 120, x = 310 - w / 2;
    b += rect(x, y, w, 90, { fill: [C.grass, C.teal, C.cream, C.mustard][i], stroke: C.ink }) + t(310, y + 38, n, { size: 18, weight: 700, anchor: 'middle', fill: i === 0 ? '#ffffff' : C.ink }) + t(310, y + 66, v + ' units', { size: 17, anchor: 'middle', fill: i === 0 ? '#ffffff' : C.ink });
    if (i < 3) b += ar(310, y - 2, 310, y - 28, C.ink, 4) + t(325, y - 10, '~10%', { size: 15, weight: 700, fill: C.olive });
    b += wave(310 + w / 2 + 6, y + 45, 310 + w / 2 + 72, y + 45, C.rust, 3.5, 6, 18);
    if (i === 3) b += t(310 + w / 2 + 78, y + 51, 'heat', { size: 16, weight: 700, fill: C.rust });
  });
  b += t(45, 165, 'Sunlight', { size: 18, weight: 700, fill: C.olive }) + carrow('M75,180 C60,380 60,560 104,612', C.olive, 4);
  // reasons panel
  b += panel(590, 110, 280, 570) + H(612, 150, 'Why so much is lost', C.ink, 20);
  b += tl(612, 186, ['Not all of a level is', 'eaten (roots, bark,', 'bones).'], { size: 16 }, 22) + tl(612, 264, ['Not all that is eaten', 'is digested: it leaves', 'as faeces.'], { size: 16 }, 22) + tl(612, 342, ['Much of what is', 'assimilated is used in', 'respiration and lost', 'as heat.'], { size: 16 }, 22);
  b += line(612, 440, 848, 440, C.panelEdge, 2);
  b += H(612, 470, 'Worked example', C.ink, 18) + tl(612, 496, ['Pond: NPP 7400,', 'primary consumers', 'store 666', 'kJ m⁻² yr⁻¹'], { size: 16, fill: C.muted }, 22) + t(612, 600, '666 / 7400 × 100', { size: 17, weight: 700 }) + t(612, 626, '= 9.0%', { size: 22, weight: 700, fill: C.olive });
  b += tl(612, 660, ['So food chains are short.'], { size: 15, fill: C.muted, italic: true }, 20);
  add('04-energy-flow-food-chain',
    svg(900, 700, 'Energy flows one way along a food chain', b),
    'Four trophic levels stacked: producers 10 000 units, primary consumers 1000, secondary 100 and tertiary 10, with about 10% passing up each step and the rest lost as heat. A side panel lists the reasons for loss and a worked example: 666 ÷ 7400 × 100 = 9.0%.',
    'About 10% passes to the next level; the rest leaves as heat, so chains are short.',
    '## 2.2 Energy and biomass in ecosystems');
}

// 05 Ecological pyramids
{
  const bar = (cx, y, w, fill, label) => rect(cx - w / 2, y, w, 56, { fill, stroke: C.ink, r: 4 }) + t(cx, y + 35, label, { size: 15, weight: 700, anchor: 'middle' });
  const card = (x, title, sub, art, note, inv) => panel(x, 110, 270, 470) + H(x + 135, 150, title, C.ink, 20, 'middle') + t(x + 135, 174, sub, { size: 15, anchor: 'middle', fill: C.muted }) + art +
    rect(x + 20, 440, 230, 50, { fill: inv ? C.cream : C.teal, stroke: inv ? C.olive : C.tealDark }) + t(x + 135, 472, inv ? 'Can be inverted' : 'Never inverted', { size: 18, weight: 700, anchor: 'middle' }) + ct(x + 135, 530, note, { size: 15, fill: C.muted }, 20);
  let b = card(30, 'Numbers', 'individuals per level', bar(165, 300, 240, C.teal, 'caterpillars: thousands') + bar(165, 360, 60, C.grass, 'oak') , ['One oak tree can support', 'thousands of caterpillars.'], true);
  b += card(315, 'Biomass', 'standing stock, g m⁻²', bar(450, 300, 200, C.teal, 'zooplankton') + bar(450, 360, 120, C.grass, 'phytoplankton'), ['In water, fast-reproducing', 'phytoplankton support more', 'zooplankton mass at one time.'], true);
  b += card(600, 'Productivity', 'energy flow, kJ m⁻² yr⁻¹', bar(735, 200, 60, C.mustard, '') + bar(735, 250, 110, C.cream, '') + bar(735, 300, 170, C.teal, '') + bar(735, 360, 230, C.grass, 'producers').replace('y="395"', 'y="395"'), ['Each level receives only a', 'fraction of the energy of', 'the one below.'], false);
  b += t(450, 610, 'Bars not to scale. Pyramid shape also explains biomagnification of persistent toxins.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('05-ecological-pyramids',
    svg(900, 635, 'Three kinds of ecological pyramid', b),
    'Three pyramids. Numbers can be inverted: one oak supports thousands of caterpillars. Biomass can be inverted in water: phytoplankton support a larger standing mass of zooplankton. Productivity is never inverted because each level receives only a fraction of the energy below.',
    'Only the pyramid of productivity can never be inverted.',
    '## 2.2 Energy and biomass in ecosystems');
}

// 06 Carbon cycle
{
  const S = (x, y, w, h, a, s, fill = C.panel) => node(x, y, w, h, a, s, { fill, size: 18, subSize: 15 });
  const lab = (x, y, s, col = C.ink, anchor = 'middle') => t(x, y, s, { size: 15, weight: 700, anchor, fill: col });
  let b = '';
  b += S(310, 115, 280, 70, 'Atmosphere', 'CO₂, CH₄', C.tealLight);
  b += S(80, 330, 190, 74, 'Producers', 'biomass', '#cfe0c0') + S(360, 330, 190, 74, 'Consumers', 'biomass', '#cfe0c0');
  b += S(660, 330, 200, 74, 'Oceans', 'dissolved CO₂, carbonate', C.teal);
  b += S(200, 520, 250, 74, 'Soil organic matter', 'dead matter', C.sand);
  b += S(60, 690, 230, 74, 'Fossil fuels', 'coal, oil, gas', C.rock) + S(630, 690, 230, 74, 'Sedimentary rock', 'limestone', C.rock);
  // flows
  b += carrow('M330,188 C260,230 200,270 170,326', C.tealDark, 4) + lab(205, 255, 'photosynthesis', C.tealDark, 'end');
  b += carrow('M215,326 C250,270 300,230 360,190', C.ink, 3.5) + lab(300, 290, 'respiration', C.ink, 'start').replace('x="300"', 'x="296"');
  b += carrow('M470,326 C470,260 470,230 470,190', C.ink, 3.5) + lab(480, 260, 'respiration', C.ink, 'start');
  b += ar(272, 367, 356, 367, C.ink, 3.5) + lab(314, 392, 'feeding');
  b += carrow('M175,406 C185,460 230,490 260,516', C.olive, 3.5) + carrow('M440,406 C430,460 410,490 390,516', C.olive, 3.5) + lab(325, 470, 'death, waste', C.olive);
  b += carrow('M450,545 C560,520 600,300 560,190', C.olive, 3.5) + lab(600, 470, 'decomposition', C.olive, 'start').replace('x="600"', 'x="560"');
  b += carrow('M590,150 C700,150 760,230 760,326', C.tealDark, 3.5) + lab(720, 200, 'dissolving', C.tealDark, 'start');
  b += carrow('M680,326 C680,260 650,200 594,175', C.tealDark, 3.5) + lab(668, 270, 'release', C.tealDark, 'end');
  b += carrow('M760,406 L760,686', C.ink, 3.5, '8 6') + lab(770, 560, 'sedimentation', C.ink, 'start').replace('x="770"', 'x="768"') + t(768, 580, '(slow)', { size: 15, fill: C.muted });
  b += carrow('M240,596 C220,630 200,660 185,686', C.ink, 3.5, '8 6') + lab(232, 660, 'fossilisation (slow)', C.ink, 'start');
  b += path('M80,360 C62,360 52,352 49,330', { stroke: C.rust, w: 4 }) + carrow('M70,690 C40,600 40,250 306,140', C.rust, 6) + lab(48, 470, 'combustion', C.rust, 'start').replace('x="48"', 'x="52"');
  // legend & note
  b += panel(30, 790, 840, 110) + rect(56, 812, 40, 26, { fill: C.panel, r: 6 }) + t(108, 832, 'storage (stock)', { size: 16 }) + `<line x1="290" y1="825" x2="340" y2="825" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)"/>` + t(352, 832, 'flow', { size: 16 }) +
    `<line x1="440" y1="825" x2="490" y2="825" stroke="${C.rust}" stroke-width="6" marker-end="url(#ahR)"/>` + t(502, 832, 'combustion of fossil fuels and biomass', { size: 16 });
  b += t(56, 876, 'Humans speed up combustion and remove sinks (deforestation): CO₂ about 280 ppm → above 420 ppm.', { size: 15, fill: C.muted });
  add('06-carbon-cycle',
    svg(900, 920, 'The carbon cycle: storages and flows', b),
    'Systems diagram of the carbon cycle. Storages: atmosphere, producers, consumers, oceans, soil organic matter, fossil fuels and limestone. Flows: photosynthesis, respiration, feeding, death and waste, decomposition, dissolving and release at the ocean surface, sedimentation and fossilisation, and combustion, which humans have greatly speeded up.',
    'Name the storage and the flow: humans mainly speed up combustion and remove sinks.',
    '## 2.3 Biogeochemical cycles');
}

// 07 Nitrogen cycle
{
  const S = (x, y, w, h, a, s, fill = C.panel) => node(x, y, w, h, a, s, { fill, size: 19, subSize: 15 });
  const lab = (x, y, a, s, col, anchor = 'middle') => t(x, y, a, { size: 16, weight: 700, anchor, fill: col }) + (s ? [].concat(s).map((q, i) => t(x, y + 19 * (i + 1), q, { size: 15, anchor, fill: C.muted })).join('') : '');
  let b = '';
  b += S(320, 115, 260, 70, 'Nitrogen gas, N₂', 'atmosphere', C.tealLight);
  b += S(40, 330, 180, 70, 'Ammonium', 'NH₄⁺ in soil', C.cream) + S(360, 330, 180, 70, 'Nitrite', 'NO₂⁻', C.cream) + S(680, 330, 180, 70, 'Nitrate', 'NO₃⁻ in soil', C.cream);
  b += S(40, 560, 180, 74, 'Dead matter', 'and waste', C.sand) + S(360, 560, 180, 74, 'Animals', 'proteins', '#cfe0c0') + S(680, 560, 180, 74, 'Plants', 'proteins', '#cfe0c0');
  b += carrow('M318,150 C200,150 140,220 130,326', C.tealDark, 4.5) + lab(178, 232, 'Fixation', ['bacteria, Rhizobium,', 'Haber process'], C.tealDark, 'start');
  b += ar(222, 365, 356, 365, C.tealDark, 4) + ar(542, 365, 676, 365, C.tealDark, 4) + lab(450, 430, 'Nitrification', ['needs oxygen'], C.tealDark);
  b += carrow('M800,326 C870,220 760,140 584,152', C.olive, 4) + lab(790, 236, 'Denitrification', ['anaerobic,', 'waterlogged soil'], C.olive, 'end');
  b += carrow('M560,186 C620,230 680,280 700,324', C.ink, 3, '7 5') + lab(612, 250, 'lightning', [], C.ink, 'end');
  b += ar(730, 404, 730, 556, C.ink, 4) + lab(718, 470, 'Assimilation', ['uptake by plants'], C.ink, 'end');
  b += ar(676, 597, 544, 597, C.ink, 4) + lab(610, 585, 'feeding', [], C.ink);
  b += ar(356, 597, 224, 597, C.olive, 4) + carrow('M770,636 C770,690 130,690 130,640', C.olive, 3.5) + lab(450, 708, 'death and waste', [], C.olive);
  b += ar(130, 556, 130, 404, C.olive, 4) + lab(142, 470, 'Ammonification', ['decomposers'], C.olive, 'start');
  b += ar(840, 406, 840, 496, C.rust, 4, '8 6') + lab(862, 522, 'Leaching', ['to rivers, lakes'], C.rust, 'end');
  b += panel(30, 740, 840, 120) + H(56, 776, 'Human impacts', C.ink, 18);
  b += tl(56, 804, ['Haber process fixes N for fertiliser; excess nitrate leaches and can cause eutrophication.', 'Draining land reduces denitrification; burning fuels releases nitrogen oxides (acid deposition).'], { size: 16, fill: C.muted }, 24);
  add('07-nitrogen-cycle',
    svg(900, 880, 'The nitrogen cycle', b),
    'Cycle diagram. Nitrogen gas is fixed to ammonium by bacteria, Rhizobium and the Haber process; nitrifying bacteria convert ammonium to nitrite then nitrate, which plants assimilate. Animals feed on plants, dead matter and waste are ammonified back to ammonium, denitrifying bacteria return nitrate to N₂ in waterlogged soil, and nitrate can leach into water.',
    'Nitrification needs oxygen; denitrification happens in anaerobic, waterlogged soil.',
    '## 2.3 Biogeochemical cycles');
}
