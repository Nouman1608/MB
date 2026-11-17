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

export const slug = 'ib-dp-ess-biodiversity-conservation';

// small organism glyphs
const tree = (x, y, s = 1, fill = C.grass) => `<rect x="${x - 3 * s}" y="${y - 6 * s}" width="${6 * s}" height="${16 * s}" fill="${C.rockDark}"/><circle cx="${x}" cy="${y - 16 * s}" r="${14 * s}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
const bug = (x, y, fill, r = 11) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.75}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x + r}" cy="${y - 2}" r="${r * 0.4}" fill="${C.ink}"/>`;
const flower = (x, y, fill) => line(x, y, x, y + 22, C.grass, 3) + [0, 72, 144, 216, 288].map((a) => `<circle cx="${x + 7 * Math.cos((a * Math.PI) / 180)}" cy="${y + 7 * Math.sin((a * Math.PI) / 180)}" r="6" fill="${fill}" stroke="${C.ink}" stroke-width="1.5"/>`).join('') + `<circle cx="${x}" cy="${y}" r="4" fill="${C.mustard}"/>`;

// 01 Three levels of biodiversity
{
  const pw = 266, gap = 21, py = 120, ph = 300;
  const px = [30, 30 + pw + gap, 30 + 2 * (pw + gap)];
  let b = px.map((x) => panel(x, py, pw, ph)).join('');
  // habitat panel: forest, pond, meadow
  let x = px[0];
  b += `<rect x="${x + 16}" y="${py + 16}" width="${pw - 32}" height="${ph - 32}" rx="10" fill="#e6efd9"/>`;
  b += [[40, 90], [70, 70], [100, 95], [60, 120]].map(([a, c]) => tree(x + a, py + c, 1)).join('');
  b += `<ellipse cx="${x + 190}" cy="${py + 95}" rx="55" ry="34" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  b += `<rect x="${x + 60}" y="${py + 170}" width="170" height="90" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += [[90, 200], [130, 225], [170, 195], [205, 228]].map(([a, c], i) => flower(x + a, py + c, [C.rust, '#ffffff', C.blue, C.rust][i])).join('');
  b += t(x + 70, py + 160, 'forest', { size: 15, weight: 600, fill: '#3d5f2a', anchor: 'middle' }) + t(x + 190, py + 100, 'pond', { size: 15, weight: 600, fill: C.tealDark, anchor: 'middle' }) + t(x + 145, py + 280, 'meadow', { size: 15, weight: 600, fill: C.olive, anchor: 'middle' });
  // species panel: zoom of meadow
  x = px[1];
  b += `<rect x="${x + 16}" y="${py + 16}" width="${pw - 32}" height="${ph - 32}" rx="10" fill="${C.cream}"/>`;
  b += [[50, 70, C.rust], [120, 60, '#ffffff'], [200, 80, C.blue], [80, 150, C.blue], [170, 160, C.rust], [220, 200, '#ffffff']].map(([a, c, f]) => flower(x + a, py + c, f)).join('');
  b += bug(x + 60, py + 230, C.mustard) + bug(x + 140, py + 240, C.tealDark) + bug(x + 110, py + 110, C.grass, 9);
  b += `<path d="M${x + 180},${py + 250} q12,-20 24,0 q12,-20 24,0" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
  // genetic panel: one species, varied individuals
  x = px[2];
  b += `<rect x="${x + 16}" y="${py + 16}" width="${pw - 32}" height="${ph - 32}" rx="10" fill="${C.tealLight}"/>`;
  const shades = [C.mustard, C.olive, C.sand, C.mustard, C.rust, C.sand, C.olive, C.mustard];
  shades.forEach((f, i) => { b += bug(x + 60 + (i % 3) * 70, py + 70 + Math.floor(i / 3) * 75, f, 17); });
  b += t(x + pw / 2, py + ph - 26, 'same species, different alleles', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  // zoom lines
  b += line(px[0] + 230, py + 170, px[1] + 16, py + 16, C.muted, 2, '6 5') + line(px[0] + 230, py + 260, px[1] + 16, py + ph - 16, C.muted, 2, '6 5');
  b += rect(px[1] + 40, py + 212, 44, 36, { fill: 'none', stroke: C.muted, sw: 2, r: 6, dash: '5 4' });
  b += line(px[1] + 84, py + 212, px[2] + 16, py + 16, C.muted, 2, '6 5') + line(px[1] + 84, py + 248, px[2] + 16, py + ph - 16, C.muted, 2, '6 5');
  const def = (x, h, a) => H(x + pw / 2, py + ph + 42, h, C.ink, 21, 'middle') + ct(x + pw / 2, py + ph + 80, a, { size: 16, fill: C.muted }, 21);
  b += def(px[0], 'Habitat diversity', ['range of habitats or', 'ecosystems in an area']);
  b += def(px[1], 'Species diversity', ['number of species and how', 'evenly individuals are spread']);
  b += def(px[2], 'Genetic diversity', ['range of alleles and genes', 'within a species']);
  b += rect(30, 560, 840, 64, { fill: C.cream, stroke: C.olive }) + t(450, 599, 'The levels are linked: more habitats usually means more species.', { size: 18, weight: 700, anchor: 'middle' });
  add('01-three-levels-of-biodiversity',
    svg(900, 650, 'Three levels of biodiversity', b),
    'Three zoomed panels. A landscape with forest, pond and meadow shows habitat diversity; a close-up of the meadow with many kinds of flowers and insects shows species diversity; a close-up of one insect species whose individuals differ shows genetic diversity.',
    'Biodiversity is measured at habitat, species and genetic levels, and the levels are linked.',
    '## 3.1 Biodiversity and evolution');
}

// 02 Richness vs evenness: two meadows
{
  const chart = (x0, name, ns, D, fill, why) => {
    const bx = x0 + 70, base = 470, k = 9, bw = 52;
    let o = panel(x0, 110, 410, 520) + H(x0 + 30, 150, name, C.ink, 22) + t(x0 + 30, 176, 'richness 5, N = 40; bars show n', { size: 16, fill: C.muted });
    [0, 10, 20, 30].forEach((v) => { o += line(bx - 6, base - v * k, bx + 5 * (bw + 12), base - v * k, C.panelEdge, 1.5) + t(bx - 12, base - v * k + 6, String(v), { size: 15, anchor: 'end', fill: C.muted }); });
    ns.forEach((n, i) => { const xx = bx + 6 + i * (bw + 12); o += `<rect x="${xx}" y="${base - n * k}" width="${bw}" height="${n * k}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>` + t(xx + bw / 2, base - n * k - 8, String(n), { size: 16, weight: 700, anchor: 'middle' }) + t(xx + bw / 2, base + 24, 'ABCDE'[i], { size: 17, weight: 600, anchor: 'middle' }); });
    o += line(bx, base, bx + 5 * (bw + 12) + 4, base, C.ink, 3) + t(bx + 160, base + 50, 'species', { size: 15, anchor: 'middle', fill: C.muted });
    o += rect(x0 + 30, 540, 350, 70, { fill: C.cream, stroke: C.olive }) + t(x0 + 205, 572, D, { size: 22, weight: 700, anchor: 'middle' }) + t(x0 + 205, 598, why, { size: 16, anchor: 'middle', fill: C.muted });
    return o;
  };
  let b = chart(30, 'Meadow P', [12, 10, 8, 6, 4], 'D = 1560 / 320 = 4.88', C.teal, 'individuals spread evenly');
  b += chart(460, 'Meadow Q', [30, 4, 3, 2, 1], 'D = 1560 / 890 = 1.75', C.mustard, 'dominated by species A');
  b += t(450, 668, 'Simpson’s reciprocal index: D = N(N − 1) / Σn(n − 1). Higher D = higher diversity.', { size: 17, anchor: 'middle', weight: 600 });
  add('02-richness-evenness-meadows',
    svg(900, 690, 'Same richness, different diversity', b),
    'Bar charts of two meadows, each with five species and 40 individuals. Meadow P has 12, 10, 8, 6 and 4 individuals and a diversity index of 4.88. Meadow Q has 30, 4, 3, 2 and 1 and an index of 1.75, because species A dominates.',
    'Evenness raises the index: a site dominated by one species is less diverse.',
    '## 3.1 Biodiversity and evolution');
}

// 03 Speciation by geographical isolation
{
  const rowH = 132;
  const steps = [
    ['1', 'One population', 'Individuals vary and interbreed freely, so genes flow through the whole population.'],
    ['2', 'Isolation', 'A barrier such as a sea, mountain range or river splits the population. Gene flow stops.'],
    ['3', 'Divergence', 'Each side faces different selection pressures and random changes; allele frequencies change differently.'],
    ['4', 'Two species', 'In time they are so different they can no longer interbreed to produce fertile offspring.'],
  ];
  const dots = (cx, cy, cols, seed) => { let o = ''; for (let i = 0; i < 9; i++) { const a = (i * 2.4 + seed), r = 14 + (i % 3) * 13; o += `<circle cx="${(cx + Math.cos(a) * r * 1.5).toFixed(1)}" cy="${(cy + Math.sin(a) * r * 0.75).toFixed(1)}" r="9" fill="${cols[i % cols.length]}" stroke="${C.ink}" stroke-width="2"/>`; } return o; };
  let b = '';
  steps.forEach(([n, name, desc], i) => {
    const y = 110 + i * (rowH + 12), cy = y + rowH / 2;
    b += panel(30, y, 840, rowH) + `<rect x="46" y="${y + 14}" width="300" height="${rowH - 28}" rx="10" fill="#e6efd9"/>`;
    if (i === 0) b += dots(196, cy, [C.mustard, C.olive, C.sand], 0) + carrow(`M150,${cy - 34} Q196,${cy - 50} 242,${cy - 34}`, C.tealDark, 2.5) + carrow(`M242,${cy + 34} Q196,${cy + 50} 150,${cy + 34}`, C.tealDark, 2.5);
    else {
      b += `<path d="M190,${y + 14} Q205,${cy - 20} 188,${cy} Q172,${cy + 25} 196,${y + rowH - 14} L216,${y + rowH - 14} Q192,${cy + 25} 208,${cy} Q225,${cy - 20} 210,${y + 14} Z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>`;
      const L = i === 1 ? [C.mustard, C.olive, C.sand] : [C.mustard, C.mustard, C.sand];
      const R = i === 1 ? [C.mustard, C.olive, C.sand] : i === 2 ? [C.olive, C.rust, C.olive] : [C.rust, C.rust, C.rust];
      const L2 = i === 3 ? [C.mustard, C.mustard, C.mustard] : L;
      b += dots(115, cy, L2, 0.5) + dots(285, cy, R, 1.3);
      if (i === 1) b += t(224, y + 32, 'barrier', { size: 15, weight: 700, anchor: 'start', fill: C.tealDark });
    }
    b += badge(395, cy, 24, n, i === 3 ? C.mustard : C.cream);
    b += t(440, y + 44, name, { size: 23, weight: 700 });
    b += tl(440, y + 74, wrap(desc, 46), { size: 17, fill: C.muted }, 22);
  });
  b += t(450, 110 + 4 * (rowH + 12) + 22, 'Reproductive isolation can also split populations in the same area, e.g. breeding at different times.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('03-speciation-isolation',
    svg(900, 718, 'How a new species forms', b),
    'Four stages. One varied population interbreeds freely. A barrier such as a river splits it and gene flow stops. The two groups face different selection pressures and change. Eventually they can no longer interbreed to produce fertile offspring and are separate species.',
    'Speciation needs isolation: once gene flow stops, the populations diverge.',
    '## 3.1 Biodiversity and evolution');
}

// 04 IUCN Red List categories
{
  const cats = [['LC', 'Least', 'Concern'], ['NT', 'Near', 'Threatened'], ['VU', 'Vulnerable', ''], ['EN', 'Endangered', ''], ['CR', 'Critically', 'Endangered'], ['EW', 'Extinct in', 'the Wild'], ['EX', 'Extinct', '']];
  const fills = [C.tealLight, C.teal, C.cream, C.sand, C.mustard, C.rust, C.ink];
  const w = 112, gap = 9, x0 = 30, y0 = 160;
  let b = t(450, 140, 'risk of extinction increases →', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  cats.forEach(([ab, a, c], i) => {
    const x = x0 + i * (w + gap);
    b += rect(x, y0, w, 130, { fill: fills[i], stroke: C.ink });
    const tf = i >= 5 ? '#ffffff' : C.ink;
    b += t(x + w / 2, y0 + 50, ab, { size: 30, weight: 700, anchor: 'middle', fill: tf }) + t(x + w / 2, y0 + 86, a, { size: 15, anchor: 'middle', fill: tf, weight: 600 }) + t(x + w / 2, y0 + 106, c, { size: 15, anchor: 'middle', fill: tf, weight: 600 });
  });
  b += rect(30, 310, 840, 46, { fill: C.panel, stroke: C.panelEdge, dash: '7 6' }) + t(450, 340, 'Data Deficient (DD): not enough information to assess', { size: 17, anchor: 'middle', fill: C.muted });
  // criteria
  b += panel(30, 380, 840, 260) + H(60, 420, 'Criteria used in the assessment', C.ink, 21);
  const crit = [['Population size', 'and rate of decline'], ['Geographical range', 'size and fragmentation'], ['Number of mature', 'individuals'], ['Probability of', 'extinction in the wild']];
  crit.forEach(([a, c], i) => { b += node(60 + i * 200, 440, 180, 90, a, c, { size: 17, subSize: 16, fill: C.tealLight, stroke: C.tealDark }); });
  b += fat(120, 600, 760, 600, 26, C.cream, C.olive);
  b += t(440, 607, 'steep decline or tiny range → higher-threat category', { size: 18, weight: 700, anchor: 'middle' });
  add('04-iucn-red-list',
    svg(900, 665, 'Judging threat: the IUCN Red List', b),
    'The Red List categories in order of rising extinction risk: Least Concern, Near Threatened, Vulnerable, Endangered, Critically Endangered, Extinct in the Wild and Extinct, with Data Deficient set apart. Criteria are population size and decline, range size and fragmentation, number of mature individuals and probability of extinction.',
    'A steep decline or a tiny range moves a species up the threat scale.',
    '## 3.2 Human impact on biodiversity');
}

// 05 Flagship, keystone and umbrella species
{
  const card = (x, title, icon, lines) => panel(x, 110, 270, 360) + H(x + 135, 150, title, C.ink, 22, 'middle') + icon + ct(x + 135, 418, lines, { size: 16, fill: C.muted }, 22);
  const flag = (x) => line(x + 100, 200, x + 100, 360, C.ink, 5) + `<path d="M${x + 102},205 L${x + 200},230 L${x + 102},258 Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<circle cx="${x + 100}" cy="360" r="8" fill="${C.ink}"/>` + t(x + 165, 320, '£ $ €', { size: 22, weight: 700, anchor: 'middle', fill: C.olive }) + t(x + 165, 346, 'support', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  const arch = (x) => {
    const cx = x + 135, cy = 360, R1 = 110, R2 = 70; let o = '';
    const N = 7; for (let i = 0; i < N; i++) { const a0 = Math.PI - (i * Math.PI) / N, a1 = Math.PI - ((i + 1) * Math.PI) / N; const p = (r, a) => `${(cx + r * Math.cos(a)).toFixed(1)},${(cy - r * Math.sin(a)).toFixed(1)}`; o += `<path d="M${p(R2, a0)} L${p(R1, a0)} A${R1},${R1} 0 0 1 ${p(R1, a1)} L${p(R2, a1)} A${R2},${R2} 0 0 0 ${p(R2, a0)} Z" fill="${i === 3 ? C.mustard : C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`; }
    return o + line(x + 15, cy, x + 255, cy, C.ink, 3) + t(cx, 228, 'keystone', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  };
  const umb = (x) => { const cx = x + 135; return `<path d="M${cx - 105},270 Q${cx},170 ${cx + 105},270 Q${cx + 78},258 ${cx + 52},270 Q${cx + 26},258 ${cx},270 Q${cx - 26},258 ${cx - 52},270 Q${cx - 78},258 ${cx - 105},270 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + line(cx, 270, cx, 352, C.ink, 4) + path(`M${cx},352 q0,12 -12,12 q-10,0 -10,-10`, { w: 4 }) +
    bug(cx - 70, 340, C.mustard, 10) + flower(cx - 40, 305, C.rust) + bug(cx + 55, 345, C.olive, 10) + flower(cx + 80, 300, '#ffffff') + tree(cx + 25, 340, 0.7); };
  let b = card(30, 'Flagship', flag(30), ['charismatic; draws public', 'support and funding']);
  b += card(315, 'Keystone', arch(315), ['effect on its ecosystem far', 'larger than its numbers suggest']);
  b += card(600, 'Umbrella', umb(600), ['needs a large area, so protecting', 'it protects many other species']);
  b += rect(30, 490, 840, 110, { fill: C.cream, stroke: C.olive });
  b += H(60, 526, 'Weakness of species-based conservation', C.ink, 19);
  b += t(60, 554, 'A species returned to a damaged habitat will decline again,', { size: 17 }) + t(60, 578, 'and small captive populations can lose genetic diversity.', { size: 17 });
  add('05-flagship-keystone-umbrella',
    svg(900, 620, 'Choosing species to conserve', b),
    'Three cards. A flagship species is charismatic and attracts support and funding. A keystone species, like the keystone of an arch, has an effect far larger than its numbers. An umbrella species needs a large area, so protecting it shelters many other species.',
    'Keystone is about the size of the effect, not numbers or trophic level.',
    '## 3.3 Conservation and regeneration');
}

// 06 Core area worked example
{
  const s = 55; // px per km
  const sq = (x, y, side, e = 0.5) => `<rect x="${x}" y="${y}" width="${side * s}" height="${side * s}" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>` + `<rect x="${x + e * s}" y="${y + e * s}" width="${(side - 2 * e) * s}" height="${(side - 2 * e) * s}" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2" stroke-dasharray="6 4"/>`;
  let b = panel(30, 110, 410, 560) + H(235, 150, 'One large reserve', C.ink, 22, 'middle');
  b += sq(125, 180, 4) + t(235, 180 + 2 * s + 8, 'core', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(235, 180 + 4 * s + 26, '4 km × 4 km', { size: 16, anchor: 'middle', fill: C.muted });
  b += tl(70, 470, ['Total area = 16 km²', 'Core side = 4 − 2(0.5) = 3 km', 'Core area = 3 × 3 = 9 km²'], { size: 17 }, 27);
  b += rect(70, 570, 330, 70, { fill: C.teal, stroke: C.tealDark }) + t(235, 614, 'Core share 56.25%', { size: 24, weight: 700, anchor: 'middle' });
  let c = panel(460, 110, 410, 560) + H(665, 150, 'Four small reserves', C.ink, 22, 'middle');
  [[548, 180], [673, 180], [548, 305], [673, 305]].forEach(([x, y]) => { c += sq(x, y, 2); });
  c += t(665, 442, 'each 2 km × 2 km', { size: 16, anchor: 'middle', fill: C.muted });
  c += tl(500, 470, ['Total area = 4 × (2 × 2) = 16 km²', 'Core side = 2 − 2(0.5) = 1 km', 'Core area = 4 × (1 × 1) = 4 km²'], { size: 17 }, 27);
  c += rect(500, 570, 330, 70, { fill: C.cream, stroke: C.olive }) + t(665, 614, 'Core share 25%', { size: 24, weight: 700, anchor: 'middle' });
  // legend
  let d = `<rect x="200" y="692" width="30" height="22" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + t(240, 710, 'edge zone (0.5 km)', { size: 17 }) + `<rect x="470" y="692" width="30" height="22" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>` + t(510, 710, 'core area', { size: 17 });
  add('06-core-area-worked-example',
    svg(900, 740, 'Core area: one large or four small?', b + c + d),
    'A 4 km by 4 km reserve and four 2 km by 2 km reserves, both 16 square km in total, with edge effects reaching 0.5 km inside each boundary. The single reserve keeps a 9 square km core (56.25%); the four small ones keep 4 square km (25%).',
    'Same total land, but one large reserve has more than twice the core area.',
    '## 3.3 Conservation and regeneration');
}

// 07 Reserve design principles
{
  const cell = (x, y, title, art, note) => panel(x, y, 410, 270) + H(x + 24, y + 38, title, C.ink, 20) + art + t(x + 205, y + 252, note, { size: 16, anchor: 'middle', fill: C.muted });
  const blob = (cx, cy, r, e) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + (r - e > 0 ? `<circle cx="${cx}" cy="${cy}" r="${r - e}" fill="${C.teal}"/>` : '');
  const tag = (x, y, s, col) => t(x, y, s, { size: 15, weight: 700, anchor: 'middle', fill: col });
  let b = '';
  // A: large vs small
  b += cell(30, 110, 'One large vs several small', blob(130, 230, 62, 24) + blob(270, 200, 30, 24) + blob(345, 210, 26, 24) + blob(285, 268, 28, 24) + blob(360, 275, 24, 24) +
    tag(130, 312, 'more core', C.tealDark) + tag(315, 312, 'mostly edge', C.olive), 'Small ones can spread risk of fire or disease');
  // B: compact vs long thin
  b += cell(460, 110, 'Compact vs long and thin', `<rect x="510" y="160" width="140" height="140" rx="6" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/><rect x="534" y="184" width="92" height="92" fill="${C.teal}"/>` +
    `<rect x="680" y="160" width="40" height="140" rx="4" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/><rect x="740" y="160" width="40" height="140" rx="4" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/><rect x="800" y="160" width="40" height="140" rx="4" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` +
    [680, 740, 800].map((x) => `<rect x="${x + 15}" y="175" width="10" height="110" fill="${C.teal}"/>`).join('') + tag(580, 322, 'less edge per area', C.tealDark) + tag(760, 322, 'mostly edge', C.olive), 'Near-circular or square shapes keep more core');
  // C: corridor
  b += cell(30, 400, 'Wildlife corridors', blob(110, 520, 50, 18) + blob(310, 520, 50, 18) + `<rect x="160" y="508" width="100" height="24" fill="#a9c48f" stroke="${C.grass}" stroke-width="2.5"/>` +
    carrow('M180,488 Q210,470 240,488', C.tealDark, 3) + bug(210, 520, C.mustard, 9) + tag(210, 470, 'gene flow', C.tealDark), 'Link fragments so animals can move and find mates');
  // D: buffer zone
  b += cell(460, 400, 'Buffer zone', `<circle cx="665" cy="525" r="88" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="8 6"/>` + `<circle cx="665" cy="525" r="52" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` +
    tag(665, 531, 'core', C.ink) + tag(665, 461, 'buffer', C.olive), 'Surrounds the core with limited human use');
  b += `<circle cx="248" cy="707" r="9" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + t(265, 713, 'edge effects: light, wind, drying, noise, predators, invasives', { size: 16 }) + `<circle cx="755" cy="707" r="9" fill="${C.teal}"/>` + t(772, 713, 'core', { size: 16 });
  add('07-reserve-design',
    svg(900, 735, 'Designing a nature reserve', b),
    'Four comparisons. One large reserve keeps more core area than several small ones, though small ones spread risk. Compact shapes have less edge than long thin ones. Corridors link fragments so animals can move and genes flow. A buffer zone with limited human use surrounds the core.',
    'Good design maximises core area and keeps fragments connected.',
    '## 3.3 Conservation and regeneration');
}
