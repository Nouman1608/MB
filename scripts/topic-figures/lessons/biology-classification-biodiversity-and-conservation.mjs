// Board-neutral redraws of eight classification, biodiversity and conservation figures first drawn for
// Cambridge 9700 and reused on AQA, OxfordAQA and OCR pages. Same data as before; the board pills
// ("OCR only", "Cambridge 9700 only", "AQA, OxfordAQA", the labels under the two index formulas) are gone.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-classification-biodiversity-and-conservation';
const W = 900;
const NAVY = C.ink, PALE = '#c5cde0', GOLDF = '#d4b02e', LBLUE = '#d3e5ec';
const rect = (x, y, w, h, fill, stroke = 'none', sw = 2.5, rx = 0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"${stroke !== 'none' ? ` stroke="${stroke}" stroke-width="${sw}"` : ''}/>`;
const line = (x1, y1, x2, y2, color = NAVY, w = 3) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"/>`;
const circ = (cx, cy, r, fill, stroke = 'none', sw = 2.5) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"${stroke !== 'none' ? ` stroke="${stroke}" stroke-width="${sw}"` : ''}/>`;
const sub = (s) => `<tspan baseline-shift="sub" font-size="70%">${s}</tspan>`;
const sup = (s) => `<tspan baseline-shift="super" font-size="68%">${s}</tspan>`;
const card = (x, y, w, h) => rect(x, y, w, h, '#ffffff', NAVY, 2.5, 14);

// ---------- 02 three domains ----------
function threeDomains() {
  const o = [];
  const dy = -36;
  const pillBox = (cx, cy, w, h, label, fill, edge, col, size = 24) => rect(cx - w / 2, cy - h / 2, w, h, fill, edge, 2.5, h / 2) + t(cx, cy + size * 0.36, label, { size, weight: 700, fill: col, anchor: 'middle' });
  o.push(pillBox(450, 200 + dy, 200, 48, 'Ancestor', C.tealLight, C.tealDark, C.tealDark, 22));
  o.push(`<path d="M450 ${224 + dy} V${255 + dy} M165 ${300 + dy} V${255 + dy} H735 V${300 + dy} M450 ${255 + dy} V${300 + dy}" fill="none" stroke="${C.muted}" stroke-width="2.5"/>`);
  o.push(pillBox(165, 328 + dy, 230, 56, 'Bacteria', C.tealLight, C.tealDark, C.tealDark));
  o.push(pillBox(450, 328 + dy, 230, 56, 'Archaea', C.cream, C.olive, C.olive));
  o.push(pillBox(735, 328 + dy, 230, 56, 'Eukarya', '#e3e8f2', NAVY, NAVY));
  o.push(circ(165, 470 + dy, 72, C.tealLight, C.tealDark, 12), circ(165, 470 + dy, 36, '#ffffff', NAVY, 3), t(165, 478 + dy, 'DNA', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(circ(450, 470 + dy, 74, C.cream, C.olive, 4), circ(450, 470 + dy, 36, '#ffffff', NAVY, 3), t(450, 478 + dy, 'DNA', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(t(165, 589 + dy, 'No nucleus', { size: 21, anchor: 'middle' }), t(165, 627 + dy, 'Peptidoglycan wall', { size: 21, weight: 700, anchor: 'middle' }), t(165, 665 + dy, 'Ester-linked lipids', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(450, 589 + dy, 'No nucleus', { size: 21, anchor: 'middle' }), t(450, 627 + dy, 'No peptidoglycan', { size: 21, weight: 700, anchor: 'middle' }), t(450, 665 + dy, 'Ether-linked lipids', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(line(735, 356 + dy, 735, 372 + dy, NAVY, 2.5));
  ['Protoctista', 'Fungi', 'Plantae', 'Animalia'].forEach((k, i) => o.push(rect(635, 372 + i * 66 + dy, 200, 50, '#ffffff', NAVY, 2.5, 25), t(735, 404 + i * 66 + dy, k, { size: 21, weight: 700, anchor: 'middle' })));
  o.push(t(735, 660 + dy, 'four kingdoms', { size: 19, fill: C.muted, anchor: 'middle' }), t(735, 692 + dy, 'inside Eukarya', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(rect(70, 700 + dy, 440, 50, '#ffffff', NAVY, 2.5, 25), t(290, 733 + dy, 'Different rRNA base sequences', { size: 21, weight: 700, anchor: 'middle' }));
  const vy = 790 + dy;
  o.push(`<rect x="40" y="${vy}" width="820" height="200" rx="16" fill="none" stroke="${NAVY}" stroke-width="2.5" stroke-dasharray="10 7"/>`);
  const vx = 140, vc = vy + 90;
  for (let i = 0; i < 8; i++) {
    const a = (Math.PI / 4) * i, x2 = vx + 66 * Math.cos(a), y2 = vc + 66 * Math.sin(a);
    o.push(line(vx + 36 * Math.cos(a), vc + 36 * Math.sin(a), x2, y2, NAVY, 3), circ(x2, y2, 6, C.olive));
  }
  const hp = Array.from({ length: 6 }, (_, i) => { const a = (Math.PI / 3) * i; return `${vx + 42 * Math.cos(a)},${vc + 42 * Math.sin(a)}`; }).join(' ');
  o.push(`<polygon points="${hp}" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>`);
  o.push(t(vx, vy + 182, 'virus particle', { size: 18, fill: C.muted, anchor: 'middle' }));
  o.push(t(250, vy + 58, 'Viruses are not cells', { size: 25, weight: 700 }), t(250, vy + 94, 'Outside all three domains', { size: 21, fill: C.muted }));
  o.push(rect(250, vy + 120, 190, 46, C.cream, C.olive, 2.5, 23), t(345, vy + 150, 'HIV: ssRNA', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(rect(460, vy + 120, 220, 46, C.cream, C.olive, 2.5, 23), t(570, vy + 150, 'Herpes: dsDNA', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  return svg(W, 990, 'Three domains of life', o.join('\n'), 'Cells split into Bacteria, Archaea, Eukarya');
}

// ---------- 03 DNA comparison ----------
function dna() {
  const o = [];
  const dy = -30;
  const seqs = { A: 'ATGGCTAAACGTTCAGGTCATGAC', B: 'ATGGCTAAACGTTCAGGACATGAC', C: 'ATGGCAAAGCGTTCCGGACATGAT', D: 'ATGACAAAGAGTTCCGTACGTGAT' };
  o.push(t(W / 2, 182 + dy, 'Same gene, first 24 bases', { size: 20, fill: C.muted, anchor: 'middle' }));
  const diffs = {};
  Object.entries(seqs).forEach(([k, s], r) => {
    const y = 214 + r * 62 + dy;
    o.push(t(52, y + 34, k, { size: 25, weight: 700, fill: C.tealDark, anchor: 'middle' }));
    let n = 0;
    [...s].forEach((b, i) => {
      const diff = b !== seqs.A[i]; if (diff) n++;
      const x = 110 + i * 30.3;
      o.push(rect(x, y + 6, 28, 40, diff ? GOLDF : '#ffffff', diff ? C.olive : '#c9d6d4', 2, 4));
      o.push(t(x + 14, y + 34, b, { size: 19, weight: diff ? 700 : 400, anchor: 'middle' }));
    });
    diffs[k] = n;
  });
  o.push(t(W / 2, 498 + dy, 'Gold = base differs from A', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(40, 580 + dy, 'Bases different from A', { size: 23, weight: 700 }));
  [['B', 1, '1 of 24 = 4.2%'], ['C', 5, '5 of 24 = 20.8%'], ['D', 9, '9 of 24 = 37.5%']].forEach(([k, n, s], i) => {
    if (diffs[k] !== n) throw new Error('diff count ' + k);
    const y = 610 + i * 84 + dy, w = n * 58.5;
    o.push(t(52, y + 38, k, { size: 25, weight: 700, fill: C.tealDark, anchor: 'middle' }));
    o.push(rect(110, y, w, 58, C.teal, C.tealDark, 2.5, 6), t(110 + w + 14, y + 38, s, { size: 21, weight: 700 }));
  });
  o.push(rect(60, 880 + dy, 780, 90, C.cream, C.olive, 2.5, 14), t(W / 2, 934 + dy, 'Fewer differences: more recent common ancestor', { size: 22, weight: 700, anchor: 'middle' }));
  return svg(W, 970, 'Compare the DNA', o.join('\n'), 'Fewer differences = closer relatives');
}

// ---------- 04 sampling methods ----------
function sampling() {
  const o = [];
  const q = (x, y, fill = '#f5f8f7') => rect(x, y, 34, 34, fill, NAVY, 2.5, 2);
  const right = (y, head, a, b) => t(500, y, head, { size: 26, weight: 700, fill: C.tealDark }) + t(500, y + 42, a, { size: 22 }) + t(500, y + 76, b, { size: 22 });
  // random
  o.push(card(30, 110, 840, 290));
  o.push(rect(60, 155, 400, 200, '#e2eee0', C.tealDark, 2.5, 4));
  o.push(arrow(45, 350, 45, 140, { w: 3.5 }), arrow(72, 372, 480, 372, { w: 3.5 }));
  o.push(`<path d="M52 215 H158 M175 232 V392" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="7 5" fill="none"/>`);
  for (const [x, y] of [[157, 198], [255, 186], [316, 188], [364, 184], [258, 241], [328, 233], [197, 309], [330, 302]]) o.push(q(x, y));
  o.push(right(232, 'Random', 'Chance picks x, y on tapes', 'Avoids bias'));
  // transect
  o.push(card(30, 420, 840, 290));
  o.push(`<defs><linearGradient id="tg" x1="0" x2="1"><stop offset="0" stop-color="#e8dfc4"/><stop offset="1" stop-color="#bcd8a8"/></linearGradient></defs>`);
  o.push(rect(60, 465, 400, 200, 'url(#tg)', C.tealDark, 2.5, 4));
  o.push(line(66, 566, 454, 566, NAVY, 3));
  for (let i = 0; i < 6; i++) o.push(q(90 + i * 66, 549, '#eef2ee'));
  o.push(t(68, 696, 'path', { size: 20, fill: C.muted }), t(452, 696, 'woodland', { size: 20, fill: C.muted, anchor: 'end' }));
  o.push(right(542, 'Transect', 'Regular intervals', 'Shows a gradient'));
  // stratified
  o.push(card(30, 730, 840, 290));
  o.push(rect(60, 775, 280, 200, '#e2eee0'), rect(340, 775, 120, 200, LBLUE), rect(60, 775, 400, 200, 'none', C.tealDark, 2.5, 4));
  o.push(`<line x1="340" y1="775" x2="340" y2="975" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="7 5"/>`);
  const grass = [[72, 778], [173, 776], [217, 776], [127, 818], [64, 830], [208, 829], [274, 818], [252, 869], [148, 880], [210, 882], [86, 912], [273, 908], [140, 936], [202, 935]];
  const hollow = [[345, 801], [403, 788], [366, 857], [411, 862], [370, 905], [418, 933]];
  if (grass.length !== 14 || hollow.length !== 6) throw new Error('quadrat count');
  for (const [x, y] of grass) o.push(q(x, y + 4));
  for (const [x, y] of hollow) o.push(q(x, y + 4, '#f2f7fa'));
  o.push(t(200, 1006, 'grass 70%', { size: 20, fill: C.muted, anchor: 'middle' }), t(400, 1006, 'hollow 30%', { size: 20, fill: C.muted, anchor: 'middle' }));
  o.push(right(852, 'Stratified', '14 in grass, 6 in hollow', 'Each area in proportion'));
  return svg(W, 1045, 'Where do the quadrats go?', o.join('\n'), 'Three ways to place samples');
}

// ---------- 05 Lincoln index ----------
function lincoln() {
  const o = [];
  const dy = -36;
  o.push(card(30, 175 + dy, 300, 470), card(360, 175 + dy, 510, 470));
  o.push(t(180, 222 + dy, 'Catch 1', { size: 25, weight: 700, anchor: 'middle' }), t(180, 257 + dy, `n${sub('1')} = 48, all marked`, { size: 21, anchor: 'middle' }));
  for (let r = 0; r < 8; r++) for (let c = 0; c < 6; c++) o.push(circ(75 + c * 42, 310 + r * 42 + dy, 16, C.tealDark));
  o.push(t(615, 222 + dy, 'Catch 2, later', { size: 25, weight: 700, anchor: 'middle' }), t(615, 257 + dy, `n${sub('2')} = 60, m${sub('2')} = 12 marked`, { size: 21, anchor: 'middle' }));
  let marked = 0;
  for (let r = 0; r < 6; r++) for (let c = 0; c < 10; c++) { const m = c === 0 || c === 5; if (m) marked++; o.push(m ? circ(405 + c * 46, 330 + r * 46 + dy, 16, C.tealDark) : circ(405 + c * 46, 330 + r * 46 + dy, 14, '#ffffff', C.tealDark, 3)); }
  if (marked !== 12) throw new Error('marked');
  o.push(t(615, 618 + dy, '12 of 60 marked = 1 in 5', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(W / 2, 698 + dy, 'So the 48 marked are 1 in 5 of all', { size: 23, weight: 700, anchor: 'middle' }));
  for (let i = 0; i < 5; i++) o.push(rect(60 + i * 156, 724 + dy, 156, 70, i ? '#ffffff' : C.teal, NAVY, 2.5), t(138 + i * 156, 768 + dy, i ? '?' : '48', { size: 23, weight: 700, fill: i ? C.muted : C.tealDark, anchor: 'middle' }));
  o.push(t(W / 2, 838 + dy, 'N = 5 × 48 = 240', { size: 24, weight: 700, anchor: 'middle' }));
  o.push(rect(60, 880 + dy, 780, 100, C.cream, C.olive, 2.5, 14), t(W / 2, 941 + dy, `N = n${sub('1')} × n${sub('2')} ÷ m${sub('2')} = 48 × 60 ÷ 12 = 240`, { size: 23, weight: 700, anchor: 'middle' }));
  return svg(W, 980, 'Estimating a population', o.join('\n'), 'Mark, release, recapture');
}

// ---------- 06 richness and evenness ----------
function richness() {
  const o = [];
  const shape = (k, x, y) => {
    if (k === 0) return circ(x, y, 12, C.teal, C.tealDark, 2.5);
    if (k === 1) return rect(x - 11, y - 11, 22, 22, C.cream, C.olive, 2.5, 1);
    if (k === 2) return `<polygon points="${x - 12},${y + 11} ${x},${y - 12} ${x + 12},${y + 11}" fill="#efc4aa" stroke="${C.rust}" stroke-width="2.5"/>`;
    return `<polygon points="${x},${y - 13} ${x + 13},${y} ${x},${y + 13} ${x - 13},${y}" fill="${PALE}" stroke="${NAVY}" stroke-width="2.5"/>`;
  };
  const grid = (x0, counts) => {
    const seq = counts.flatMap((n, k) => Array(n).fill(k));
    if (seq.length !== 100) throw new Error('100');
    seq.forEach((k, i) => o.push(shape(k, x0 + (i % 10) * 34.6, 205 + Math.floor(i / 10) * 34.6)));
  };
  o.push(t(230, 160, 'Site X: even', { size: 26, weight: 700, anchor: 'middle' }), t(670, 160, 'Site Y: one dominates', { size: 26, weight: 700, anchor: 'middle' }));
  grid(78, [25, 25, 25, 25]);
  grid(516, [91, 3, 3, 3]);
  o.push(`<line x1="450" y1="180" x2="450" y2="740" stroke="#c9d6d4" stroke-width="2.5" stroke-dasharray="9 7"/>`);
  for (const [cx, D, d] of [[230, '0.75', '4.1'], [670, '0.17', '1.2']]) {
    o.push(t(cx, 598, 'Richness: 4', { size: 22, anchor: 'middle' }));
    o.push(t(cx, 662, `D = ${D}`, { size: 31, weight: 700, fill: C.tealDark, anchor: 'middle' }));
    o.push(t(cx, 720, `d = ${d}`, { size: 31, weight: 700, fill: C.olive, anchor: 'middle' }));
  }
  o.push(t(W / 2, 798, 'Higher value = more diverse', { size: 23, weight: 700, anchor: 'middle' }));
  o.push(rect(40, 830, 400, 60, C.tealLight, C.tealDark, 2.5, 30), t(240, 868, `D = 1 − Σ(n/N)${sup('2')}`, { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(rect(460, 830, 400, 60, C.cream, C.olive, 2.5, 30), t(660, 868, 'd = N(N−1) ÷ Σn(n−1)', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }));
  return svg(W, 920, 'Richness is not enough', o.join('\n'), 'Both sites: 4 species, 100 individuals');
}

// ---------- 07 Spearman ----------
function spearman() {
  const o = [];
  const dy = -36;
  const X = (v) => 130 + v * 15, Y = (v) => 550 + dy - v * 4;
  const pts = [[2, 70], [5, 74], [9, 55], [14, 48], [20, 50], [26, 30], [33, 22], [41, 15]];
  for (const v of [0, 20, 40, 60, 80]) o.push(line(124, Y(v), 130, Y(v), NAVY, 2.5), t(112, Y(v) + 6, String(v), { size: 18, anchor: 'end' }));
  for (const v of [0, 10, 20, 30, 40]) o.push(line(X(v), Y(0), X(v), Y(0) + 7, NAVY, 2.5), t(X(v), Y(0) + 32, String(v), { size: 18, anchor: 'middle' }));
  o.push(arrow(130, Y(0), 130, Y(95), { w: 3.5 }), arrow(130, Y(0), 830, Y(0), { w: 3.5 }));
  o.push(t(38, Y(40), 'Moss cover (%)', { size: 20, weight: 700, anchor: 'middle' }).replace('<text', `<text transform="rotate(-90 38 ${Y(40)})"`));
  o.push(t(470, Y(0) + 80, 'Light intensity (arbitrary units)', { size: 21, weight: 700, anchor: 'middle' }));
  const n = pts.length, mx = pts.reduce((s, p) => s + p[0], 0) / n, my = pts.reduce((s, p) => s + p[1], 0) / n;
  const b = pts.reduce((s, [x, y]) => s + (x - mx) * (y - my), 0) / pts.reduce((s, [x]) => s + (x - mx) ** 2, 0), a = my - b * mx;
  o.push(`<line x1="${X(0)}" y1="${Y(a)}" x2="${X(44)}" y2="${Y(a + b * 44)}" stroke="${C.olive}" stroke-width="3" stroke-dasharray="10 7"/>`);
  for (const [x, y] of pts) o.push(circ(X(x), Y(y), 10, C.teal, C.tealDark, 3));
  // rs number line
  const L = 120, R = 780, Z = (v) => (L + R) / 2 + v * (R - L) / 2, ly = 790 + dy;
  o.push(rect(Z(-1), ly - 38, Z(-0.738) - Z(-1), 72, LBLUE), rect(Z(0.738), ly - 38, Z(1) - Z(0.738), 72, LBLUE));
  o.push(line(L, ly, R, ly, NAVY, 3));
  for (const v of [-1, -0.738, 0, 0.738, 1]) o.push(line(Z(v), ly - 14, Z(v), ly + 14, NAVY, 3));
  o.push(t(Z(-1), ly + 46, '−1', { size: 19, weight: 700, anchor: 'middle' }), t(Z(-0.738) - 6, ly + 46, '−0.738', { size: 19, weight: 700, anchor: 'middle' }), t(Z(0), ly + 46, '0', { size: 19, weight: 700, anchor: 'middle' }), t(Z(0.738), ly + 46, '0.738', { size: 19, weight: 700, anchor: 'middle' }), t(Z(1), ly + 46, '+1', { size: 19, weight: 700, anchor: 'middle' }));
  const rx = Z(-0.952);
  o.push(`<polygon points="${rx - 15},${ly - 50} ${rx + 15},${ly - 50} ${rx},${ly - 24}" fill="${C.olive}"/>`);
  o.push(t(rx - 10, ly - 62, `r${sub('s')} = −0.952`, { size: 23, weight: 700, fill: C.olive }));
  o.push(t(W / 2, ly + 100, 'Shaded = significant (n = 8, p = 0.05)', { size: 20, fill: C.muted, anchor: 'middle' }));
  o.push(rect(60, ly + 140, 780, 90, C.cream, C.olive, 2.5, 14), t(W / 2, ly + 194, 'Correlation does not show cause', { size: 23, weight: 700, anchor: 'middle' }));
  return svg(W, ly + 260, 'Is there a correlation?', o.join('\n'), 'Moss cover against light');
}

// ---------- 08 conservation methods ----------
function conservation() {
  const o = [];
  const dy = 0;
  o.push(t(40, 168, 'In situ: in the natural habitat', { size: 25, weight: 700, fill: C.tealDark }));
  o.push(t(40, 480, 'Ex situ: outside the habitat', { size: 25, weight: 700, fill: C.olive }));
  const cards = [[40, 190], [460, 190], [40, 510], [460, 510], [40, 770], [460, 770]];
  cards.forEach(([x, y]) => o.push(card(x, y, 400, y === 190 ? 230 : 230)));
  const lab = (x, y, s) => t(x + 200, y + 206, s, { size: 21, weight: 700, anchor: 'middle' });
  // reserve
  o.push(`<path d="M95 330 Q170 270 240 295 Q320 265 395 330 Z" fill="#cfe3c6" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  for (const [x, y] of [[185, 275], [255, 263], [325, 275]]) o.push(rect(x - 4, y + 18, 8, 22, '#8a5a3a'), circ(x, y, 22, '#8fbf88', C.tealDark, 2.5));
  o.push(line(130, 322, 360, 322, NAVY, 3));
  for (const x of [135, 185, 245, 305, 355]) o.push(line(x, 314, x, 332, NAVY, 3));
  o.push(lab(40, 190, 'Wildlife reserve'));
  // marine zone
  o.push(rect(505, 250, 300, 100, LBLUE, C.tealDark, 2.5));
  o.push(path('M515 290 L555 282 L595 290 L635 280 L675 288', { stroke: '#7fb0c8', w: 2.5 }));
  for (const x of [505, 605, 705, 805]) o.push(circ(x, 250, 10, C.rust, '#ffffff', 2.5));
  o.push(`<ellipse cx="715" cy="314" rx="28" ry="14" fill="${GOLDF}" stroke="${C.olive}" stroke-width="2.5"/><polygon points="742,314 764,300 764,328" fill="${GOLDF}" stroke="${C.olive}" stroke-width="2.5"/>`, circ(700, 311, 3, NAVY));
  o.push(lab(460, 190, 'Marine conservation zone'));
  // zoo
  o.push(rect(140, 545, 200, 100, '#f6eed6', NAVY, 3, 4));
  for (const x of [180, 220, 260, 300]) o.push(line(x, 545, x, 645, NAVY, 3));
  o.push(`<ellipse cx="236" cy="613" rx="40" ry="20" fill="#e3b04b" stroke="${C.olive}" stroke-width="2.5"/>`, circ(272, 594, 22, '#f0cc72', C.olive, 2.5), circ(277, 592, 3, NAVY));
  o.push(lab(40, 510, 'Zoo: captive breeding'));
  // botanic garden
  o.push(`<path d="M565 640 V575 L655 530 L745 575 V640 Z" fill="#e8f2ef" stroke="${NAVY}" stroke-width="3"/>`);
  o.push(line(610, 555, 610, 640, '#c9d6d4', 3), line(700, 555, 700, 640, '#c9d6d4', 3));
  o.push(rect(637, 614, 36, 26, C.rust), line(655, 614, 655, 585, C.tealDark, 3), `<ellipse cx="634" cy="586" rx="20" ry="10" fill="#8fbf88" stroke="${C.tealDark}" stroke-width="2"/><ellipse cx="676" cy="576" rx="20" ry="10" fill="#8fbf88" stroke="${C.tealDark}" stroke-width="2"/>`);
  o.push(lab(460, 510, 'Botanic garden'));
  const snow = (cx, cy, r, c = '#2a7891') => [0, 60, 120].map((a) => { const rad = (a * Math.PI) / 180; return line(cx - r * Math.cos(rad), cy - r * Math.sin(rad), cx + r * Math.cos(rad), cy + r * Math.sin(rad), c, 2.5); }).join('');
  // seed bank
  o.push(rect(200, 824, 80, 18, C.olive), rect(190, 842, 100, 92, '#eef2f6', NAVY, 3, 10));
  for (const [x, y] of [[220, 892], [240, 882], [264, 886], [212, 912], [234, 907], [250, 900], [262, 910]]) o.push(`<ellipse cx="${x}" cy="${y}" rx="8" ry="5" fill="#a86a3a" stroke="#6e4422" stroke-width="1.5"/>`);
  o.push(snow(340, 878, 22));
  o.push(lab(40, 770, 'Seed bank: dried, cold'));
  // frozen zoo
  o.push(rect(610, 817, 90, 120, '#eef2f6', NAVY, 3, 10), snow(655, 834, 11));
  for (const x of [632, 655, 678]) o.push(rect(x - 7, 856, 14, 60, C.cream, C.olive, 2.5, 7));
  o.push(snow(755, 878, 22));
  o.push(lab(460, 770, 'Frozen zoo: liquid nitrogen'));
  return svg(W, 1030, 'Where is it protected?', o.join('\n'), 'In the habitat or outside it');
}

// ---------- 09 genetic diversity ----------
function genetic() {
  const o = [];
  const dy = -36;
  const split = (x, y, s = 56) => `<polygon points="${x},${y} ${x + s},${y} ${x},${y + s}" fill="${GOLDF}"/><polygon points="${x + s},${y} ${x + s},${y + s} ${x},${y + s}" fill="#8fc3d4"/>` + rect(x, y, s, s, 'none', C.tealDark, 2.5, 4) + line(x, y + s, x + s, y, C.tealDark, 2);
  const plain = (x, y, s = 56) => rect(x, y, s, s, C.tealLight, C.tealDark, 2.5, 4);
  o.push(split(70, 170 + dy), t(138, 210 + dy, 'two or more alleles', { size: 21 }), plain(470, 170 + dy), t(538, 210 + dy, 'one allele', { size: 21 }));
  const before = [[0, 1, 4, 9], [0, 3, 6], [0, 5, 7, 8], [], [2, 3, 5, 6, 7, 8, 10]];
  const later = [[0, 4, 9], [0], [0, 5, 7, 8], [], [5, 6, 7, 10]];
  const grid = (y0, rows) => {
    let n = 0;
    for (let r = 0; r < 5; r++) for (let c = 0; c < 12; c++) { const v = rows[r].includes(c); if (v) n++; o.push((v ? split : plain)(78 + c * 62, y0 + r * 62)); }
    return n;
  };
  o.push(t(W / 2, 290 + dy, 'Before: 18 of 60 loci vary = 30%', { size: 25, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  if (grid(315 + dy, before) !== 18) throw new Error('18');
  o.push(t(W / 2, 710 + dy, 'Later, smaller herd: 12 of 60 = 20%', { size: 25, weight: 700, fill: C.rust, anchor: 'middle' }));
  if (grid(735 + dy, later) !== 12) throw new Error('12');
  o.push(rect(60, 1090 + dy, 780, 90, C.cream, C.olive, 2.5, 14), t(W / 2, 1146 + dy, 'Fewer alleles: less to adapt with', { size: 23, weight: 700, anchor: 'middle' }));
  return svg(W, 1180, 'Genetic diversity', o.join('\n'), 'How many gene loci vary?');
}

export const figures = [
  { name: '04-sampling-methods', after: '## Random sampling and variation', svg: sampling(),
    alt: 'Three fields show quadrat placement. Random quadrats are scattered by coordinates from two tapes. A transect has quadrats at equal intervals from path to woodland. Stratified sampling puts 14 quadrats in grass and 6 in a hollow, matching 70% and 30% of the area.',
    caption: 'Random avoids bias, transects show change along a gradient, and stratified samples each area in proportion.' },
  { name: '06-richness-evenness', after: '## Species and courtship', svg: richness(),
    alt: 'Two grids of 100 individuals have four species each. Site X is even (25 each) with D 0.75 and d 4.1; Site Y has 91 of one species and 3 of each other with D 0.17 and d 1.2. A higher value means a more diverse community.',
    caption: 'Same richness, very different evenness, and both indices separate them.' },
  { name: '03-dna-comparison', after: '### Limits of sequence evidence', svg: dna(),
    alt: 'Four 24-base sequences A to D are aligned with differences from A highlighted. B differs at 1 base (4.2%), C at 5 (20.8%) and D at 9 (37.5%). Fewer differences mean a more recent common ancestor.',
    caption: 'Fewer base differences mean a more recent common ancestor.' },
  { name: '09-genetic-diversity', after: '### Limits of sequence evidence', svg: genetic(),
    alt: 'Two grids of 60 gene loci; split squares are loci with two or more alleles. Before, 18 of 60 vary (30%); later, in a smaller herd, 12 of 60 vary (20%), so fewer alleles are available to adapt with.',
    caption: 'Proportion of polymorphic loci = polymorphic loci / total loci.' },
  { name: '05-lincoln-index', after: '### Answers', svg: lincoln(),
    alt: 'Catch 1 shows 48 marked beetles released. Catch 2 shows 60 beetles of which 12 are marked, one in five. So the 48 marked are one fifth of the population, giving N = 5 x 48 = 240, the same as 48 x 60 / 12.',
    caption: 'The marked fraction in the second catch tells you what fraction of the population the first catch was.' },
  { name: '08-conservation-methods', after: '## Species and courtship', svg: conservation(),
    alt: 'Icons show in situ methods in the natural habitat, a wildlife reserve and a marine conservation zone, and ex situ methods outside it: a zoo, a botanic garden, a seed bank and a frozen zoo storing material in liquid nitrogen.',
    caption: 'In situ protects species where they live; ex situ keeps them or their genes elsewhere.' },
  { name: '07-spearman-correlation', after: '### Answers', svg: spearman(),
    alt: 'A scatter of eight quadrats shows moss cover falling as light rises, with a downward trend line. On a scale from -1 to +1, rs = -0.952 lies beyond the critical value 0.738 for n = 8 at p = 0.05, so the negative correlation is significant, but it does not show cause.',
    caption: 'A significant negative correlation, which still does not prove cause.' },
  { name: '02-three-domains', after: '### Worked example 3', svg: threeDomains(),
    alt: 'A tree splits an ancestor into Bacteria, Archaea and Eukarya. Bacteria and Archaea are cells with no nucleus: Bacteria have a peptidoglycan wall and ester lipids, Archaea no peptidoglycan and ether lipids, with different rRNA. Eukarya holds four kingdoms. Viruses sit outside, classified only by nucleic acid.',
    caption: 'Three domains of cells, with viruses outside them.' },
];
