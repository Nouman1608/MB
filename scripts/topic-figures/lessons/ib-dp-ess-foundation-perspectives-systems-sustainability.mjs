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

export const slug = 'ib-dp-ess-foundation-perspectives-systems-sustainability';

// 01 EVS as a system + the EVS spectrum
{
  let b = panel(30, 110, 840, 250) + H(60, 148, 'An environmental value system works like a system', C.ink, 20);
  b += node(55, 170, 250, 170, 'Inputs', ['upbringing, culture,', 'religion, education,', 'media, economic position,', 'personal experience'], { fill: C.tealLight, stroke: C.tealDark, size: 20, subSize: 15 });
  b += node(345, 205, 210, 100, 'Processing', ['values and beliefs'], { fill: C.cream, stroke: C.olive, size: 20, subSize: 16 });
  b += node(595, 170, 250, 170, 'Outputs', ['decisions, votes,', 'purchases, lifestyle,', 'how they argue', 'about an issue'], { fill: C.tealLight, stroke: C.tealDark, size: 20, subSize: 15 });
  b += ar(307, 255, 341, 255, C.ink, 4) + ar(557, 255, 591, 255, C.ink, 4);
  // spectrum
  let c = panel(30, 380, 840, 410) + H(60, 418, 'The EVS spectrum', C.ink, 20);
  const seg = (x, w, fill, a, s) => `<rect x="${x}" y="440" width="${w}" height="80" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x + w / 2, 474, a, { size: 21, weight: 700, anchor: 'middle' }) + t(x + w / 2, 500, s, { size: 15, anchor: 'middle', fill: C.ink });
  c += seg(60, 260, '#a9c48f', 'Ecocentric', 'nature-centred') + seg(320, 260, C.cream, 'Anthropocentric', 'people-centred') + seg(580, 260, C.teal, 'Technocentric', 'technology-centred');
  c += tl(70, 548, ['Deep ecologists: nature', 'ahead of people', 'Soft ecologists: small,', 'local, self-reliant'], { size: 15, fill: C.muted }, 19);
  c += tl(330, 548, ['Environmental managers:', 'limits, regulation and', 'taxes protect resources', 'for people'], { size: 15, fill: C.muted }, 19);
  c += tl(590, 548, ['Cornucopians: technology', 'will always find more;', 'resources effectively', 'unlimited'], { size: 15, fill: C.muted }, 19);
  const pin = (x, who, q) => `<circle cx="${x}" cy="670" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x, 702, who, { size: 16, weight: 700, anchor: 'middle' }) + ct(x, 738, q, { size: 15, fill: C.muted, italic: true }, 19);
  c += line(60, 670, 840, 670, C.panelEdge, 3);
  c += pin(190, 'Local group', ['“The meadow has orchids', 'found nowhere else.”']) + pin(450, 'Farmer', ['“I will lease it if the', 'rent beats hay.”']) + pin(710, 'Engineer', ['“Panels on raised frames', 'let sheep graze.”']);
  c += t(450, 642, 'Solar-farm scenario: each label is justified by the words used', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  add('01-evs-system-and-spectrum',
    svg(900, 810, 'Environmental value systems', b + c),
    'Top: an EVS modelled as a system, with inputs such as upbringing, culture and media, processing by values and beliefs, and outputs such as decisions, votes and purchases. Bottom: the spectrum from ecocentric through anthropocentric to technocentric, with the solar-farm stakeholders placed: a local group (ecocentric), a farmer (anthropocentric) and an engineer (technocentric).',
    'Place a stakeholder on the spectrum using evidence from what they say.',
    '## 1.1 Perspectives');
}

// 02 Lake Varn storage and flows
{
  const W = (v) => 6 + v / 9;
  let b = panel(30, 110, 840, 500);
  b += `<rect x="300" y="280" width="300" height="150" rx="16" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>`;
  b += t(450, 340, 'Lake Varn', { size: 22, weight: 700, anchor: 'middle' }) + t(450, 368, 'storage', { size: 16, anchor: 'middle', fill: C.tealDark }) + t(450, 398, '1200 million m³', { size: 19, weight: 700, anchor: 'middle' });
  // inputs
  b += fat(60, 330, 296, 330, W(310), C.tealLight) + t(70, 290, 'River inflow 310', { size: 17, weight: 700 });
  b += fat(360, 170, 360, 276, W(45), C.tealLight) + t(345, 160, 'Rain 45', { size: 17, weight: 700, anchor: 'end' });
  b += fat(110, 470, 296, 410, W(25), C.tealLight) + t(60, 500, 'Groundwater seepage 25', { size: 17, weight: 700 });
  // outputs
  b += fat(604, 330, 840, 330, W(290), C.tealLight) + t(830, 290, 'River outflow 290', { size: 17, weight: 700, anchor: 'end' });
  b += fat(530, 276, 530, 150, W(70), C.cream, C.rust) + t(552, 175, 'Evaporation 70', { size: 17, weight: 700, fill: C.rust }) + t(552, 197, 'transformation:', { size: 15, fill: C.muted }) + t(552, 215, 'liquid to gas', { size: 15, fill: C.muted });
  b += fat(604, 410, 790, 480, W(35), C.tealLight) + t(840, 515, 'Abstraction for a town 35', { size: 17, weight: 700, anchor: 'end' });
  b += t(450, 590, 'Flows in million m³ per year; arrow width shows flow size', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  // calc
  let c = rect(30, 630, 410, 124, { fill: C.panel, stroke: C.panelEdge }) + tl(55, 668, ['Inputs = 310 + 45 + 25 = 380', 'Outputs = 290 + 70 + 35 = 395', 'Net change = 380 − 395 = −15 per year'], { size: 17 }, 30) + t(55, 760, '', {});
  c += rect(460, 630, 410, 124, { fill: C.cream, stroke: C.olive }) + tl(485, 668, ['After 10 years: 1200 − 10 × 15 = 1050', 'Loss: 15 / 1200 × 100 = 1.25% a year', 'Not in steady state: the lake shrinks'], { size: 17 }, 30);
  add('02-lake-varn-storage-flows',
    svg(900, 774, 'A storage and its flows: Lake Varn', b + c),
    'Systems diagram of fictional Lake Varn storing 1200 million cubic metres. Inputs: river inflow 310, rain 45 and groundwater 25. Outputs: river outflow 290, evaporation 70 (a transformation) and abstraction 35. Inputs total 380 and outputs 395, so the lake loses 15 a year, 1.25% of its storage.',
    'When outputs exceed inputs, the storage shrinks: the system is not in steady state.',
    '## 1.2 Systems');
}

// 03 Open, closed and isolated systems
{
  const card = (x, title, ex, eIn, mIn) => {
    let o = panel(x, 110, 270, 430) + H(x + 135, 150, title, C.ink, 22, 'middle');
    o += rect(x + 70, 230, 130, 130, { fill: C.tealLight, stroke: C.ink, dash: '9 6', sw: 3 }) + t(x + 135, 302, 'system', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
    if (eIn) o += wave(x + 20, 255, x + 100, 255, C.rust, 3.5, 5, 16) + wave(x + 170, 335, x + 250, 335, C.rust, 3.5, 5, 16);
    else o += wave(x + 20, 255, x + 64, 255, C.rust, 3.5, 5, 16) + t(x + 46, 240, '✗', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
    if (mIn) o += ar(x + 135, 180, x + 135, 260, C.tealDark, 5) + ar(x + 150, 330, x + 150, 410, C.tealDark, 5);
    else o += ar(x + 135, 180, x + 135, 224, C.tealDark, 5) + t(x + 160, 205, '✗', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
    o += t(x + 135, 450, (eIn ? 'energy crosses' : 'no energy crosses'), { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    o += t(x + 135, 474, (mIn ? 'matter crosses' : 'no matter crosses'), { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
    o += t(x + 135, 515, ex, { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    return o;
  };
  let b = card(30, 'Open', 'e.g. most ecosystems', true, true) + card(315, 'Closed', 'e.g. Earth (close to this)', true, false) + card(600, 'Isolated', 'no natural example exists', false, false);
  b += wave(260, 580, 330, 580, C.rust, 3.5, 5, 16) + t(340, 586, 'energy', { size: 16 }) + `<line x1="480" y1="580" x2="540" y2="580" stroke="${C.tealDark}" stroke-width="5" marker-end="url(#ahT)"/>` + t(550, 586, 'matter', { size: 16 });
  add('03-open-closed-isolated',
    svg(900, 610, 'Open, closed and isolated systems', b),
    'Three systems with dashed boundaries. In an open system, such as most ecosystems, both energy and matter cross the boundary. In a closed system, close to Earth as a whole, energy crosses but matter does not. In an isolated system neither crosses, and no natural example exists.',
    'What crosses the boundary, energy, matter or neither, defines the type of system.',
    '## 1.2 Systems');
}

// 04 Types of equilibrium
{
  const g = (x, y, title, d, note, extra = '') => {
    let o = panel(x, y, 410, 240) + H(x + 24, y + 36, title, C.ink, 20);
    o += line(x + 40, y + 190, x + 385, y + 190, C.ink, 2.5) + line(x + 40, y + 190, x + 40, y + 60, C.ink, 2.5) + t(x + 385, y + 212, 'time →', { size: 15, anchor: 'end', fill: C.muted });
    return o + extra + path(d, { stroke: C.tealDark, w: 4 }) + t(x + 24, y + 228, '', {}) + t(x + 210, y + 212, note, { size: 15, anchor: 'middle', fill: C.muted }).replace(`x="${x + 210}"`, `x="${x + 170}"`);
  };
  let wig = 'M70,' + (240) + ' '; for (let i = 0; i <= 16; i++) wig += `L${70 + i * 20},${240 + (i % 2 ? -18 : 14) * (i % 3 ? 1 : 0.6)} `;
  let b = g(30, 110, 'Steady-state', wig, 'fluctuates around an average', line(70, 240, 410, 240, C.muted, 1.5, '6 5'));
  b += g(460, 110, 'Static', 'M500,240 L840,240', 'no change: non-living systems');
  b += g(30, 370, 'Stable', 'M70,480 L170,480 L180,530 C220,530 240,485 300,480 L410,480', 'returns to its old state', ar(176, 432, 176, 470, C.rust, 3) + t(176, 425, 'disturbance', { size: 15, weight: 700, fill: C.rust, anchor: 'middle' }));
  b += g(460, 370, 'Unstable', 'M500,500 L600,500 L610,530 C650,530 680,440 720,432 L840,432', 'moves to a new state', ar(606, 452, 606, 490, C.rust, 3) + t(606, 445, 'disturbance', { size: 15, weight: 700, fill: C.rust, anchor: 'middle' }) + t(780, 420, 'new state', { size: 15, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  b += rect(30, 630, 840, 110, { fill: C.cream, stroke: C.olive });
  b += H(60, 668, 'Tipping point:', C.ink, 19) + t(205, 668, 'a threshold past which a small change causes a large,', { size: 17 });
  b += t(60, 696, 'long-lasting shift to a new state, usually driven by positive feedback.', { size: 17 }) + t(60, 722, 'Resilience (absorbing disturbance) rises with diversity and large storages.', { size: 16, fill: C.muted });
  add('04-equilibrium-types',
    svg(900, 760, 'Types of equilibrium', b),
    'Four small graphs over time. Steady-state: the line fluctuates around an average. Static: a flat line with no change. Stable: after a disturbance the system returns to its old level. Unstable: after a disturbance it settles at a new level. Below, a tipping point is defined as a threshold past which a small change causes a large, lasting shift.',
    'Living systems are in steady state; stable systems return after disturbance, unstable ones do not.',
    '## 1.2 Systems');
}

// 05 Natural capital and natural income: woodland harvest
{
  let b = panel(30, 110, 840, 380);
  b += `<rect x="320" y="160" width="260" height="210" rx="14" fill="#cfe0c0" stroke="${C.ink}" stroke-width="3"/>`;
  [[370, 280], [420, 250], [470, 290], [520, 255], [400, 330], [500, 335]].forEach(([x, y]) => { b += `<rect x="${x - 4}" y="${y}" width="8" height="26" fill="${C.rockDark}"/><circle cx="${x}" cy="${y - 10}" r="18" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>`; });
  b += t(450, 195, 'Natural capital', { size: 20, weight: 700, anchor: 'middle' }) + t(450, 220, 'stock: 48 000 m³ timber', { size: 16, anchor: 'middle' });
  b += fat(70, 265, 316, 265, 34, C.teal, C.tealDark) + t(80, 230, 'Natural income', { size: 19, weight: 700, fill: C.tealDark }) + t(80, 318, 'growth 3.5% of stock', { size: 16, fill: C.muted }) + t(80, 340, '48 000 × 0.035 = 1680 m³/yr', { size: 16, weight: 700 });
  b += fat(584, 265, 840, 265, 43, C.cream, C.rust) + t(600, 230, 'Harvest', { size: 19, weight: 700, fill: C.rust }) + t(600, 318, '2100 m³/yr', { size: 16, weight: 700 }) + t(600, 340, '= 125% of income', { size: 16, fill: C.muted });
  b += t(450, 420, 'Stock after 1 year = 48 000 + 1680 − 2100 = 47 580 m³', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 450, 'Harvest − income = 420 m³ a year taken from the capital', { size: 16, anchor: 'middle', fill: C.muted });
  b += rect(30, 510, 840, 80, { fill: C.cream, stroke: C.olive }) + t(450, 546, 'Not sustainable: the harvest eats into the capital.', { size: 19, weight: 700, anchor: 'middle' }) + t(450, 572, 'Largest sustainable harvest this year = natural income = 1680 m³', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-natural-capital-income',
    svg(900, 610, 'Natural capital and natural income', b),
    'A community woodland holds 48 000 cubic metres of timber. Natural income, 3.5% growth, adds 1680 a year while 2100 is harvested, 125% of income, so the stock falls to 47 580 after one year. The largest sustainable harvest is 1680.',
    'A harvest is sustainable only if it does not exceed natural income.',
    '## 1.3 Sustainability');
}

// 06 Ecological footprint vs biocapacity
{
  const x0 = 140, base = 525, k = 65;
  let b = panel(30, 110, 840, 540) + H(60, 148, 'Country P (fictional), gha per person', C.ink, 20);
  [0, 1, 2, 3, 4, 5].forEach((v) => { b += line(x0, base - v * k, 560, base - v * k, C.panelEdge, 1.5) + t(x0 - 12, base - v * k + 6, String(v), { size: 15, anchor: 'end', fill: C.muted }); });
  b += `<rect x="190" y="${base - 4.8 * k}" width="130" height="${4.8 * k}" fill="${C.rust}" opacity="0.85" stroke="${C.ink}" stroke-width="2"/>` + t(255, base - 4.8 * k - 10, '4.8', { size: 20, weight: 700, anchor: 'middle' });
  b += `<rect x="390" y="${base - 2 * k}" width="130" height="${2 * k}" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>` + t(455, base - 2 * k - 10, '2.0', { size: 20, weight: 700, anchor: 'middle' });
  b += line(x0, base, 560, base, C.ink, 3) + t(255, base + 28, 'Ecological', { size: 17, weight: 700, anchor: 'middle' }) + t(255, base + 50, 'footprint', { size: 17, weight: 700, anchor: 'middle' }) + t(455, base + 28, 'Biocapacity', { size: 17, weight: 700, anchor: 'middle' });
  b += line(390, base - 4.8 * k, 530, base - 4.8 * k, C.rust, 2, '6 5') + line(540, base - 4.8 * k, 540, base - 2 * k, C.rust, 3) + line(532, base - 4.8 * k, 548, base - 4.8 * k, C.rust, 3) + line(532, base - 2 * k, 548, base - 2 * k, C.rust, 3);
  b += t(553, base - 3.4 * k - 4, 'deficit', { size: 16, weight: 700, fill: C.rust }) + t(553, base - 3.4 * k + 16, '2.8', { size: 16, weight: 700, fill: C.rust });
  b += rect(620, 170, 230, 120, { fill: C.cream, stroke: C.olive }) + t(735, 210, 'EF / biocapacity', { size: 17, anchor: 'middle' }) + t(735, 246, '4.8 / 2.0 = 2.4', { size: 22, weight: 700, anchor: 'middle' }) + t(735, 274, 'times its own supply', { size: 15, anchor: 'middle', fill: C.muted });
  b += rect(620, 310, 230, 120, { fill: C.panel, stroke: C.panelEdge }) + t(735, 350, 'Total deficit', { size: 17, anchor: 'middle' }) + t(735, 386, '2.8 × 12 million', { size: 18, weight: 700, anchor: 'middle' }) + t(735, 414, '= 33.6 million gha', { size: 18, weight: 700, anchor: 'middle' });
  b += tl(620, 480, ['EF &gt; biocapacity: deficit', 'EF &lt; biocapacity: reserve'], { size: 16, weight: 600 }, 24) + t(620, 545, 'Relies on imports or runs', { size: 15, fill: C.muted }) + t(620, 565, 'down its own capital.', { size: 15, fill: C.muted });
  add('06-footprint-biocapacity',
    svg(900, 670, 'Ecological footprint versus biocapacity', b),
    'Bar chart for fictional Country P: ecological footprint 4.8 global hectares per person against biocapacity 2.0, a deficit of 2.8 per person. The footprint is 2.4 times biocapacity, and with 12 million people the total deficit is 33.6 million gha.',
    'A footprint larger than biocapacity means an ecological deficit.',
    '## 1.3 Sustainability');
}

// 07 Doughnut and circular economy
{
  const cx = 255, cy = 395;
  let b = panel(30, 110, 450, 540) + H(255, 148, 'Doughnut economics', C.ink, 21, 'middle');
  b += `<circle cx="${cx}" cy="${cy}" r="172" fill="#a9c48f" stroke="${C.rust}" stroke-width="7"/>`;
  b += `<circle cx="${cx}" cy="${cy}" r="92" fill="${C.panel}" stroke="${C.tealDark}" stroke-width="7"/>`;
  b += t(cx, cy - 130, 'safe and just', { size: 19, weight: 700, anchor: 'middle' }) + t(cx, cy - 108, 'space', { size: 19, weight: 700, anchor: 'middle' });
  b += t(cx, cy - 6, 'social', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(cx, cy + 14, 'foundation', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(cx, cy + 34, '(inner ring)', { size: 15, anchor: 'middle', fill: C.muted });
  b += t(cx, cy - 184, 'ecological ceiling (outer ring)', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += tl(60, 600, ['Inner ring: food, water, health, education.', 'Outer ring: based on planetary boundaries.'], { size: 15, fill: C.muted }, 20);
  // circular economy
  let c = panel(500, 110, 370, 540) + H(685, 148, 'Linear vs circular', C.ink, 21, 'middle');
  c += node(525, 175, 95, 50, 'Take', [], { size: 17 }) + node(637, 175, 95, 50, 'Make', [], { size: 17 }) + node(749, 175, 100, 50, 'Throw', ['away'], { size: 15, subSize: 15, fill: C.cream, stroke: C.rust });
  c += ar(621, 200, 634, 200, C.ink, 3) + ar(733, 200, 746, 200, C.ink, 3);
  c += t(685, 254, 'linear model', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const ccx = 685, ccy = 450, R = 112;
  const P = (d, r = R) => { const a = (d * Math.PI) / 180; return [ccx + r * Math.cos(a), ccy + r * Math.sin(a)]; };
  [[-52, -8], [68, 112], [188, 232]].forEach(([a1, a2]) => { const [x1, y1] = P(a1), [x2, y2] = P(a2); c += carrow(`M${x1.toFixed(1)},${y1.toFixed(1)} A${R},${R} 0 0 1 ${x2.toFixed(1)},${y2.toFixed(1)}`, C.tealDark, 5); });
  const nd = (d, a, sub) => { const [x, y] = P(d); return node(x - 78, y - 29, 156, 58, a, sub, { size: 17, subSize: 15, fill: C.tealLight, stroke: C.tealDark }); };
  c += nd(-90, 'Design out', ['waste']) + nd(30, 'Keep in use', ['products, materials']) + nd(150, 'Regenerate', ['natural systems']);
  c += t(ccx, ccy + 6, 'circular', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('07-doughnut-circular-economy',
    svg(900, 670, 'Two models for living within limits', b + c),
    'Left: the doughnut, with an inner social foundation ring, an outer ecological ceiling based on planetary boundaries, and the safe and just space between them. Right: the linear take, make, throw away model compared with a circular economy that designs out waste, keeps products and materials in use and regenerates natural systems.',
    'Aim for the safe and just space, and close the loop on materials.',
    '## 1.3 Sustainability');
}

// 08 Environmental impact assessment
{
  const steps = [['Baseline study', 'of the site before work'], ['Prediction', 'of likely impacts'], ['Mitigation', 'measures to reduce them'], ['Report', 'with a non-technical summary'], ['Decision', 'approve or refuse'], ['Monitoring', 'after the project starts']];
  let b = '';
  steps.forEach(([a, s], i) => {
    const col = i % 3, row = Math.floor(i / 3), x = 30 + col * 290, y = 120 + row * 170;
    b += panel(x, y, 260, 130, i === 0 || i === 5 ? C.tealLight : C.panel, i === 0 || i === 5 ? C.tealDark : C.panelEdge) + badge(x + 40, y + 45, 22, String(i + 1), i === 4 ? C.mustard : C.cream) + H(x + 76, y + 53, a, C.ink, 20) + tl(x + 24, y + 96, wrap(s, 28), { size: 16, fill: C.muted }, 20);
    if (col < 2) b += ar(x + 262, y + 65, x + 288, y + 65, C.ink, 4);
  });
  b += path('M800,252 L800,270 L160,270 L160,284', { stroke: C.ink, w: 4, extra: 'marker-end="url(#ah)"' });
  b += rect(30, 470, 840, 110, { fill: C.cream, stroke: C.olive });
  b += H(60, 506, 'Limits of EIA', C.ink, 19) + tl(60, 534, ['Predictions are uncertain; baseline data may be short-term;', 'the decision may still favour economic gain.'], { size: 17 }, 24);
  add('08-eia-stages',
    svg(900, 600, 'Environmental impact assessment', b),
    'Six stages in order: a baseline study of the site, prediction of likely impacts, mitigation measures, a report with a non-technical summary, a decision, and monitoring after the project starts. A note lists limits: uncertain predictions, short-term baseline data and decisions that may still favour economic gain.',
    'An EIA runs from a baseline study before approval to monitoring afterwards.',
    '## 1.3 Sustainability');
}
