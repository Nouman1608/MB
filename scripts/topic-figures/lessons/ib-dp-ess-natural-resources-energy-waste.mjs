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

export const slug = 'ib-dp-ess-natural-resources-energy-waste';

// 01 Sustainable yield worked example
{
  const x0 = 120, x1 = 530, y0 = 520, y1 = 180; // years 0-10, stock 15 000-19 000
  const X = (yr) => x0 + (yr * (x1 - x0)) / 10, Y = (v) => y0 - ((v - 15000) * (y0 - y1)) / 4000;
  let b = panel(30, 110, 530, 540) + H(60, 148, 'Plantation stock (t) over 10 years', C.ink, 20);
  [15000, 16000, 17000, 18000, 19000].forEach((v) => { b += line(x0, Y(v), x1, Y(v), C.panelEdge, 1.5) + t(x0 - 10, Y(v) + 6, v.toLocaleString('en-GB'), { size: 15, anchor: 'end', fill: C.muted }); });
  [0, 2, 4, 6, 8, 10].forEach((yr) => { b += t(X(yr), y0 + 24, String(yr), { size: 15, anchor: 'middle', fill: C.muted }); });
  b += line(x0, y0, x1, y0, C.ink, 3) + line(x0, y0, x0, y1 - 10, C.ink, 3) + t((x0 + x1) / 2, y0 + 50, 'years from now', { size: 16, anchor: 'middle', weight: 600 });
  b += line(X(0), Y(18400), X(10), Y(18400), C.tealDark, 5) + t(X(10), Y(18400) - 12, 'fell 920 t/yr = SY: stock stays 18 400 t', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
  b += line(X(0), Y(18400), X(10), Y(16100), C.rust, 5) + `<circle cx="${X(10)}" cy="${Y(16100)}" r="7" fill="${C.rust}"/>` + t(X(10) - 10, Y(16100) + 32, 'fell 1150 t/yr: 16 100 t', { size: 16, weight: 700, anchor: 'end', fill: C.rust });
  b += tl(60, 612, ['Real decline is probably faster: a smaller stock', 'usually grows more slowly.'], { size: 15, fill: C.muted, italic: true }, 19);
  let c = panel(580, 110, 290, 540) + H(604, 148, 'The calculation', C.ink, 20);
  const step = (y, a, s) => t(604, y, a, { size: 16, weight: 700 }) + t(604, y + 22, s, { size: 15, fill: C.muted });
  c += step(186, 'SY = 19 320 − 18 400', '= 920 t per year');
  c += step(250, '920 ÷ 18 400 × 100', '= 5.0% of the stock a year');
  c += step(314, 'Harvest − SY', '1150 − 920 = 230 t above SY');
  c += step(378, 'Stock change', '920 − 1150 = −230 t per year');
  c += step(442, 'After 10 years', '18 400 − 10 × 230 = 16 100 t');
  c += rect(600, 500, 250, 120, { fill: C.cream, stroke: C.olive }) + ct(725, 560, ['Natural capital shrinks.', 'Sustainable felling is', 'at most 920 t a year.'], { size: 16, weight: 700 }, 22);
  add('01-sustainable-yield-forest',
    svg(900, 670, 'Sustainable yield: a forest plantation', b + c),
    'Graph of a plantation stock over ten years. Felling 920 t a year, equal to the sustainable yield, keeps the stock at 18 400 t; felling 1150 t a year takes 230 t above the yield and cuts the stock to 16 100 t. Steps show SY = 19 320 − 18 400 = 920 t, 5.0% of the stock.',
    'Harvest no more than the sustainable yield, or natural capital shrinks.',
    '## 7.1 Natural resources -- uses and management');
}

// 02 Maximum sustainable yield
{
  const x0 = 110, x1 = 790, y0 = 520, top = 200;
  const pts = []; for (let i = 0; i <= 60; i++) { const u = i / 60; pts.push([x0 + u * (x1 - x0), y0 - 4 * u * (1 - u) * (y0 - top)]); }
  let b = panel(30, 110, 840, 560);
  b += `<path d="M${pts.map((p) => p.map((v) => v.toFixed(1)).join(',')).join(' L')} Z" fill="${C.tealLight}"/>` + path(`M${pts.map((p) => p.map((v) => v.toFixed(1)).join(',')).join(' L')}`, { stroke: C.tealDark, w: 5 });
  b += line(x0, y0, x1 + 30, y0, C.ink, 3) + line(x0, y0, x0, 160, C.ink, 3);
  b += `<text x="72" y="${(y0 + 160) / 2}" font-size="17" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 72 ${(y0 + 160) / 2})">growth per year (yield)</text>`;
  b += t((x0 + x1) / 2, y0 + 56, 'size of stock →', { size: 17, weight: 700, anchor: 'middle' });
  const mx = (x0 + x1) / 2;
  b += line(mx, top, mx, y0, C.olive, 2.5, '8 6') + `<circle cx="${mx}" cy="${top}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(mx, top - 20, 'MSY: growth fastest', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  b += t(x0, y0 + 26, '0', { size: 16, anchor: 'middle' }) + t(mx, y0 + 26, '½ K', { size: 17, weight: 700, anchor: 'middle' }) + t(x1, y0 + 26, 'K', { size: 17, weight: 700, anchor: 'middle' });
  b += rect(30, 690, 840, 66, { fill: C.cream, stroke: C.olive }) + t(450, 730, 'MSY is risky: stock estimates are uncertain and the margin against a bad year is small.', { size: 17, anchor: 'middle', weight: 600 });
  add('02-maximum-sustainable-yield',
    svg(900, 776, 'Maximum sustainable yield', b),
    'Hump-shaped graph of yearly growth against stock size, from zero to the carrying capacity K. Growth is fastest at about half of K, where the maximum sustainable yield can be taken. MSY is risky because stock estimates are uncertain.',
    'Growth, and so the maximum sustainable yield, peaks at about half the carrying capacity.',
    '## 7.1 Natural resources -- uses and management');
}

// 03 Tragedy of the commons
{
  const cow = (x, y, hl) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="11" fill="${hl ? C.mustard : '#ffffff'}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x + 18}" cy="${y - 7}" r="7" fill="${hl ? C.mustard : '#ffffff'}" stroke="${C.ink}" stroke-width="2"/>` + line(x - 10, y + 10, x - 10, y + 18, C.ink, 2) + line(x + 10, y + 10, x + 10, y + 18, C.ink, 2);
  const person = (x, y, hl) => `<circle cx="${x}" cy="${y - 20}" r="11" fill="${hl ? C.mustard : C.cream}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${x - 16},${y + 14} Q${x},${y - 14} ${x + 16},${y + 14} Z" fill="${hl ? C.mustard : C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
  let b = panel(30, 110, 840, 380);
  b += `<ellipse cx="450" cy="300" rx="210" ry="120" fill="#cfe0c0" stroke="${C.grass}" stroke-width="3"/>` + t(450, 210, 'shared pasture (common-pool resource)', { size: 16, weight: 700, anchor: 'middle', fill: '#3d5f2a' });
  [[350, 270], [410, 250], [480, 260], [540, 285], [370, 330], [440, 310], [510, 335], [420, 370], [490, 380]].forEach(([x, y]) => { b += cow(x, y, false); });
  b += cow(580, 345, true);
  b += person(195, 300, true) + person(705, 220, false) + person(720, 370, false) + person(450, 460, false);
  b += carrow('M215,300 C300,330 470,350 556,345', C.olive, 3.5, '8 6');
  b += t(60, 180, 'One user adds an animal', { size: 18, weight: 700 }) + t(60, 204, 'and gains the full benefit', { size: 16, fill: C.muted });
  b += t(860, 300, 'The cost of depletion', { size: 18, weight: 700, anchor: 'end' }).replace('y="300"', 'y="150"') + t(860, 174, 'is shared by everyone', { size: 16, fill: C.muted, anchor: 'end' });
  const ch = ['Each user acts rationally', 'Everyone takes a little more', 'Resource overexploited'];
  let c = '';
  ch.forEach((s, i) => { c += node(30 + i * 290, 512, 260, 64, s, [], { size: 17, fill: i === 2 ? C.cream : C.panel, stroke: i === 2 ? C.rust : C.ink }); if (i < 2) c += ar(292 + i * 290, 544, 316 + i * 290, 544, C.ink, 4); });
  c += rect(30, 596, 840, 86, { fill: C.tealLight, stroke: C.tealDark }) + t(60, 632, 'Not inevitable:', { size: 18, weight: 700, fill: C.tealDark }) + t(210, 632, 'communities with clear boundaries, agreed rules and', { size: 17 }) + t(60, 660, 'penalties for cheating have managed commons sustainably.', { size: 17 });
  add('03-tragedy-of-the-commons',
    svg(900, 700, 'The tragedy of the commons', b + c),
    'A shared pasture used by several herders. One herder adds an animal and gets the full benefit, while the cost of overgrazing is shared by all. Each user acting rationally leads to overexploitation. A note says commons with clear boundaries, agreed rules and penalties have been managed sustainably.',
    'Private gain with shared cost drives overexploitation of a common-pool resource.',
    '## 7.1 Natural resources -- uses and management');
}

// 04 Energy mix 2015 vs 2025
{
  const src = [['Coal', 140, 110, C.rockDark, '#ffffff'], ['Gas', 60, 80, C.rock, C.ink], ['Oil', 10, 5, C.sand, C.ink], ['Nuclear', 20, 20, C.blue, '#ffffff'], ['Hydro', 35, 38, C.tealDark, '#ffffff'], ['Wind', 10, 32, C.teal, C.ink], ['Solar', 2, 20, C.mustard, C.ink], ['Biomass', 3, 5, C.grass, '#ffffff']];
  const x0 = 140, k = 700 / 310;
  const bar = (y, idx, yr, total) => {
    let o = t(x0 - 16, y + 38, yr, { size: 20, weight: 700, anchor: 'end' }), x = x0;
    src.forEach((s) => { const v = s[idx], w = v * k; o += `<rect x="${x}" y="${y}" width="${w}" height="60" fill="${s[3]}" stroke="${C.ink}" stroke-width="1.5"/>`; if (w > 52) o += t(x + w / 2, y + 36, String(v), { size: 15, weight: 700, anchor: 'middle', fill: s[4] }); x += w; });
    return o + t(x + 8, y + 36, total, { size: 15, weight: 700 });
  };
  let b = panel(30, 110, 840, 330) + H(60, 148, 'Electricity generated, TWh (fictional country)', C.ink, 19);
  b += bar(175, 1, '2015', '280') + bar(265, 2, '2025', '310');
  // fossil/renewable brackets
  const brk = (x1, x2, y, s, col) => line(x1, y, x2, y, col, 3) + line(x1, y - 8, x1, y + 2, col, 3) + line(x2, y - 8, x2, y + 2, col, 3) + t((x1 + x2) / 2, y + 22, s, { size: 15, weight: 700, anchor: 'middle', fill: col });
  b += brk(x0, x0 + 195 * k, 345, 'fossil 195 TWh (62.9%)', C.ink) + brk(x0 + 215 * k, x0 + 310 * k, 345, 'renewable 95 (30.6%)', C.tealDark);
  let lg = ''; src.forEach((s, i) => { const x = 60 + (i % 8) * 100; lg += `<rect x="${x}" y="390" width="20" height="20" fill="${s[3]}" stroke="${C.ink}" stroke-width="1.5"/>` + t(x + 26, 406, s[0], { size: 15 }); });
  b += lg;
  const chip = (x, a, c2, s) => rect(x, 460, 270, 120, { fill: C.cream, stroke: C.olive }) + t(x + 135, 494, a, { size: 16, anchor: 'middle', fill: C.muted }) + t(x + 135, 530, c2, { size: 23, weight: 700, anchor: 'middle' }) + t(x + 135, 560, s, { size: 15, anchor: 'middle', fill: C.muted });
  b += chip(30, 'Renewable share', '17.9% → 30.6%', 'up about 13 points') + chip(315, 'Wind + solar', '12 → 52 TWh', '+333%') + chip(600, 'Fossil generation', '210 → 195 TWh', 'only −15: demand grew 10.7%');
  b += t(450, 612, 'Coal to gas cuts CO₂ per unit but may raise dependence on imported gas.', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  add('04-energy-mix',
    svg(900, 635, 'Reading an energy mix', b),
    'Stacked bars of electricity generation in a fictional country. 2015: 280 TWh with coal 140, gas 60, oil 10, nuclear 20, hydro 35, wind 10, solar 2, biomass 3. 2025: 310 TWh with coal 110, gas 80, oil 5, nuclear 20, hydro 38, wind 32, solar 20, biomass 5. The renewable share rose from 17.9% to 30.6%, but fossil generation fell by only 15 TWh.',
    'The renewable share rose, but growing demand kept fossil generation high.',
    '## 7.2 Energy sources -- uses and management');
}

// 05 Factors behind energy choices and energy security
{
  const cx = 450, cy = 330;
  let b = `<ellipse cx="${cx}" cy="${cy}" rx="130" ry="62" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + H(cx, cy - 4, 'A society’s', C.ink, 19, 'middle') + H(cx, cy + 20, 'energy mix', C.ink, 19, 'middle');
  const F = [['Availability', 'local resources, e.g. hydro', 150, 160], ['Technology and cost', 'capital, running, grid', 450, 140], ['Economic', 'existing industry, fuel prices', 750, 160], ['Political', 'policy, subsidies, treaties', 150, 330], ['Cultural and social', 'opposition to nuclear or wind', 750, 330], ['Environmental', 'climate change, air quality', 250, 500], ['Energy security', 'reliable, affordable supply', 650, 500]];
  F.forEach(([a, s, x, y]) => {
    b += node(x - 120, y - 38, 240, 76, a, s, { size: 18, subSize: 15, fill: a === 'Energy security' ? C.teal : C.panel, stroke: a === 'Energy security' ? C.tealDark : C.ink });
    const dx = x - cx, dy = y - cy, L = Math.hypot(dx, dy);
    if (L > 0) b += ar(x - (dx / L) * (Math.abs(dx) > Math.abs(dy) * 2 ? 125 : 60), y - (dy / L) * 42, cx + (dx / L) * 140, cy + (dy / L) * 66, C.muted, 2.5);
  });
  let c = panel(30, 580, 840, 190) + H(60, 618, 'Improving energy security', C.ink, 20);
  const s4 = [['Diversify', 'sources'], ['Develop local', 'renewables'], ['Store fuel', 'or electricity'], ['Reduce demand', 'efficiency, conservation']];
  s4.forEach(([a, s], i) => { c += node(56 + i * 203, 640, 186, 76, a, s, { size: 17, subSize: 15, fill: C.tealLight, stroke: C.tealDark }); });
  c += t(450, 748, 'Less secure: imports much fuel, relies on one or two sources, or uses unstable supply routes.', { size: 15, anchor: 'middle', fill: C.muted });
  add('05-energy-choices-security',
    svg(900, 790, 'What shapes a society’s energy choices', b + c),
    'Seven factors point to a society’s energy mix: availability of local resources, technology and cost, economic factors, political factors, cultural and social attitudes, environmental concerns and energy security. Below, four ways to improve energy security: diversify sources, develop local renewables, store fuel or electricity, and reduce demand.',
    'Energy choices balance several factors; security depends on diversity and demand.',
    '## 7.2 Energy sources -- uses and management');
}

// 06 Waste hierarchy and pollution management
{
  const lv = [['Reduce', 'less packaging, durable goods', C.teal], ['Reuse', 'repair, keep products in use', C.teal], ['Recycle / compost', 'save materials; cut methane', C.cream], ['Recover energy', 'incineration', C.sand], ['Dispose', 'landfill', C.rock]];
  const top = 130, h = 92, W0 = 560, cx = 330;
  let b = '';
  lv.forEach(([a, s, fill], i) => {
    const w1 = W0 - i * 100, w2 = W0 - (i + 1) * 100, y = top + i * (h + 6);
    b += `<path d="M${cx - w1 / 2},${y} L${cx + w1 / 2},${y} L${cx + w2 / 2},${y + h} L${cx - w2 / 2},${y + h} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
    b += t(cx, y + 40, a, { size: 20, weight: 700, anchor: 'middle' }) + t(cx, y + 64, s, { size: i > 2 ? 15 : 15, anchor: 'middle', fill: C.muted });
  });
  b += ar(40, 140, 40, 600, C.ink, 3.5) + `<text x="26" y="370" font-size="15" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 26 370)">less preferred ↓</text>`;
  // mapping to pollution management
  const lvl = (y1, y2, n, a, col, fill) => line(650, y1 + 4, 650, y2 - 4, col, 4) + rect(668, (y1 + y2) / 2 - 46, 200, 92, { fill, stroke: col }) + badge(692, (y1 + y2) / 2 - 18, 15, n, C.panel) + t(714, (y1 + y2) / 2 - 12, a[0], { size: 16, weight: 700 }) + t(684, (y1 + y2) / 2 + 12, a[1], { size: 15 }) + t(684, (y1 + y2) / 2 + 32, a[2] || '', { size: 15 });
  b += lvl(top, top + 2 * (h + 6), '1', ['Alter activity', 'prevention: tackles', 'the cause'], C.tealDark, C.tealLight);
  b += lvl(top + 2 * (h + 6), top + 5 * (h + 6) - 6, '2', ['Control release', 'recycling, compost,', 'incineration, landfill tax'], C.olive, C.cream);
  b += rect(30, 640, 840, 76, { fill: C.panel, stroke: C.panelEdge }) + badge(62, 678, 15, '3', C.panel) + t(88, 672, 'Clean-up and restoration', { size: 17, weight: 700 }) + t(88, 696, 'collecting litter, reclaiming old landfill sites, beach clean-ups', { size: 15, fill: C.muted });
  b += t(450, 745, 'Strategies higher up the hierarchy tackle causes rather than outcomes.', { size: 16, anchor: 'middle', italic: true, fill: C.muted });
  add('06-waste-hierarchy',
    svg(900, 770, 'The waste hierarchy', b),
    'An inverted pyramid of waste strategies from most to least preferred: reduce, reuse, recycle or compost, recover energy, dispose to landfill. Reduce and reuse match level 1 of the pollution management model (altering human activity); recycling, composting, incineration and landfill taxes match level 2 (controlling release); clean-up and restoration is level 3.',
    'Reduce and reuse come before recycling; disposal is the last resort.',
    '## 7.3 Solid waste');
}

// 07 Landfill lifespan worked example
{
  const flow = (y, items, fill) => { let o = ''; const n = items.length; items.forEach(([a, s], i) => { const x = 30 + i * 214; o += node(x, y, 196, 86, a, s, { size: 18, subSize: 15, fill: i === n - 1 ? fill : C.panel, stroke: i === n - 1 ? C.olive : C.ink }); if (i < n - 1) o += ar(x + 198, y + 43, x + 212, y + 43, C.ink, 3.5); }); return o; };
  let b = H(30, 140, 'Now: 25% recycled or composted', C.ink, 19);
  b += flow(156, [['30 400 t', ['SDW per year']], ['22 800 t', ['landfilled', '(0.75 × 30 400)']], ['30 400 m³', ['per year', '(÷ 0.75 t/m³)']], ['12.5 years', ['380 000 ÷ 30 400']]], C.cream);
  b += H(30, 300, 'With food-waste collection and better recycling', C.ink, 19);
  b += flow(316, [['15 000 t', ['landfilled per year']], ['20 000 m³', ['per year', '(÷ 0.75 t/m³)']], ['19 years', ['380 000 ÷ 20 000']]], C.teal);
  b += rect(672, 316, 198, 86, { fill: C.cream, stroke: C.olive, dash: '7 5' }) + t(771, 350, '50.7% diverted', { size: 18, weight: 700, anchor: 'middle' }) + t(771, 374, '(30 400 − 15 000)', { size: 15, anchor: 'middle', fill: C.muted }) + t(771, 393, '÷ 30 400 × 100', { size: 15, anchor: 'middle', fill: C.muted });
  // lifespan bars
  const k = 34;
  let c = panel(30, 440, 840, 200) + H(60, 478, 'Landfill lifespan with 380 000 m³ of space left', C.ink, 19);
  c += t(180, 524, 'now', { size: 17, weight: 700, anchor: 'end' }) + `<rect x="195" y="500" width="${12.5 * k}" height="36" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + t(205 + 12.5 * k, 524, '12.5 years', { size: 17, weight: 700 });
  c += t(180, 580, 'improved', { size: 17, weight: 700, anchor: 'end' }) + `<rect x="195" y="556" width="${19 * k}" height="36" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + t(205 + 19 * k, 580, '19 years', { size: 17, weight: 700 }).replace(`x="${205 + 19 * k}"`, `x="${185 + 19 * k}"`).replace('text-anchor="start"', 'text-anchor="end"');
  c += t(60, 620, '80 000 people: 380 kg per person per year (1.04 kg a day)', { size: 15, fill: C.muted });
  add('07-landfill-lifespan',
    svg(900, 660, 'Worked example: how long will the landfill last?', b + c),
    'Flow of calculations. Now: 30 400 t of waste a year, 22 800 t landfilled, 30 400 cubic metres a year at 0.75 t per cubic metre, so 380 000 cubic metres of space lasts 12.5 years. With food-waste collection and better recycling: 15 000 t landfilled, 20 000 cubic metres a year, 50.7% diverted, lasting 19 years.',
    'Diverting half the waste stretches the landfill from 12.5 to 19 years.',
    '## 7.3 Solid waste');
}
