// Board-neutral redraws of the A-level selection and evolution figures (variation, selection, drift,
// Hardy-Weinberg, speciation, DNA comparison). Same content and numbers as the earlier set, with the
// board-coverage pills ("All boards", "Cambridge and OCR", "Edexcel example" ...) removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-selection-and-evolution';
const W = 900;
const DARK = '#4a3a2a', MID = '#6b5640', PALE = '#e8d3a8';

// ---------- 01 Polygenes ----------
function polygenes() {
  const o = [];
  const x0 = 120, y0 = 560, top = 190, bw = 70, gap = 30, counts = [1, 6, 15, 20, 15, 6, 1];
  const sc = (y0 - top - 40) / 20;
  o.push(arrow(x0, y0, x0, top - 20), arrow(x0, y0, x0 + 7 * (bw + gap) + 40, y0));
  counts.forEach((c, i) => {
    const x = x0 + 15 + i * (bw + gap), h = c * sc;
    o.push(`<rect x="${x}" y="${y0 - h}" width="${bw}" height="${h}" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
    o.push(t(x + bw / 2, y0 - h - 10, String(c), { size: 20, weight: 700, anchor: 'middle' }));
    o.push(t(x + bw / 2, y0 + 30, String(i), { size: 19, weight: 700, anchor: 'middle' }));
  });
  o.push(t(x0 + 3.5 * (bw + gap) + 15, y0 + 72, 'Number of height-adding alleles', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(`<text x="0" y="0" transform="translate(${x0 - 30} ${(top + y0) / 2}) rotate(-90)" font-size="19" font-weight="700" fill="${C.ink}" text-anchor="middle">Offspring (out of 64)</text>`);
  // plants
  const g = 880;
  o.push(`<line x1="${x0 - 10}" y1="${g}" x2="${x0 + 7 * (bw + gap) + 10}" y2="${g}" stroke="${C.olive}" stroke-width="5" stroke-linecap="round"/>`);
  counts.forEach((_, i) => {
    const cx = x0 + 15 + i * (bw + gap) + bw / 2, h = 20 + i * 20;
    o.push(`<line x1="${cx}" y1="${g}" x2="${cx}" y2="${g - h}" stroke="${C.tealDark}" stroke-width="4"/>`);
    o.push(`<ellipse cx="${cx - 16}" cy="${g - h * 0.45}" rx="16" ry="8" transform="rotate(-25 ${cx - 16} ${g - h * 0.45})" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>`);
    o.push(`<ellipse cx="${cx + 16}" cy="${g - h * 0.7}" rx="16" ry="8" transform="rotate(25 ${cx + 16} ${g - h * 0.7})" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>`);
    o.push(`<circle cx="${cx}" cy="${g - h - 6}" r="9" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  });
  o.push(t(W / 2, 930, 'More adding alleles: taller plant', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svg(W, 970, 'Many genes, a bell-shaped range', o.join('\n'), 'Cross AaBbCc × AaBbCc: 64 combinations');
}

// ---------- 02 Three kinds of selection ----------
const gauss = (m, s, a) => (x) => a * Math.exp(-((x - m) ** 2) / (2 * s * s));
function curve(f, x0, x1, base, sx, sy, close) {
  const pts = [];
  for (let i = 0; i <= 120; i++) { const u = i / 120; pts.push([x0 + u * (x1 - x0), base - f(u) * sy]); }
  let d = 'M' + pts.map((p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L');
  if (close) d += ` L${x1} ${base} L${x0} ${base} Z`;
  return d;
}
function threeSelection() {
  const o = [];
  const rows = [
    ['Stabilising', 'Human birth mass', 'Mean stays, range narrows', C.tealDark, C.teal, (u) => gauss(0.5, 0.08, 1)(u), null],
    ['Directional', 'Antibiotic resistance', 'Mean shifts to one extreme', C.rust, '#ecc9b3', (u) => gauss(0.6, 0.1, 0.92)(u), true],
    ['Disruptive', 'Small and large seeds', 'Two peaks, middle lost', C.blue, '#c9d8ec', (u) => gauss(0.3, 0.1, 0.42)(u) + gauss(0.7, 0.1, 0.42)(u), null],
  ];
  const before = gauss(0.5, 0.15, 0.58);
  rows.forEach(([name, eg, res, col, fill, f, shift], i) => {
    const y = 120 + i * 362, h = 340;
    o.push(panel(40, y, 820, h));
    o.push(t(66, y + 42, name, { size: 26, weight: 700, fill: col }));
    o.push(t(834, y + 42, eg, { size: 19, fill: C.muted, anchor: 'end' }));
    const base = y + 260, x0 = 90, x1 = 810, sy = 200;
    o.push(`<path d="${curve(f, x0, x1, base, 0, sy, true)}" fill="${fill}" fill-opacity="0.8" stroke="none"/>`);
    o.push(path(curve(f, x0, x1, base, 0, sy), { stroke: col, w: 3.5 }));
    o.push(path(curve(before, x0, x1, base, 0, sy), { stroke: C.ink, w: 3, extra: 'stroke-dasharray="10 7"' }));
    o.push(`<line x1="${x0}" y1="${base}" x2="${x1}" y2="${base}" stroke="${C.ink}" stroke-width="3.5"/>`);
    if (shift) o.push(arrow(446, base - 160, 530, base - 160, { color: C.rust, w: 4, marker: 'ahR' }));
    o.push(t(W / 2, base + 28, 'Phenotype →', { size: 18, fill: C.muted, anchor: 'middle' }));
    o.push(t(W / 2, base + 60, res, { size: 20, weight: 700, fill: col, anchor: 'middle' }));
  });
  return svg(W, 120 + 3 * 362 + 10, 'Three kinds of selection', o.join('\n'), 'Dashed = before, solid = after selection');
}

// ---------- 03 Predators remove pale beetles ----------
function beetle(cx, cy, fill) {
  return `<ellipse cx="${cx}" cy="${cy}" rx="30" ry="22" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` +
    `<circle cx="${cx}" cy="${cy - 26}" r="11" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` +
    `<line x1="${cx}" y1="${cy - 15}" x2="${cx}" y2="${cy + 22}" stroke="${C.ink}" stroke-width="2.5"/>`;
}
function selectionAllele() {
  const o = [];
  const L = 60, Wd = 780, k = Wd / 1000;
  const bar = (y, parts) => {
    let x = L;
    for (const [n, lab, fill, ink, gone] of parts) {
      const w = n * k;
      if (gone) {
        o.push(`<rect x="${x}" y="${y}" width="${w}" height="64" fill="none" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="7 5"/>`);
        o.push(`<path d="M${x + w / 2 - 16} ${y + 16} l32 32 M${x + w / 2 + 16} ${y + 16} l-32 32" stroke="${C.rust}" stroke-width="5" stroke-linecap="round"/>`);
      } else {
        o.push(`<rect x="${x}" y="${y}" width="${w}" height="64" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`);
        o.push(t(x + w / 2, y + 41, lab, { size: 22, weight: 700, fill: ink, anchor: 'middle' }));
        o.push(t(x + w / 2, y + 98, String(n), { size: 20, anchor: 'middle' }));
      }
      x += w;
    }
  };
  o.push(t(L, 150, '1000 beetles', { size: 21, weight: 700 }));
  o.push(beetle(L + 245 * k, 222, DARK), beetle(L + 700 * k, 222, MID), beetle(L + 955 * k, 222, PALE));
  bar(250, [[490, 'AA', DARK, '#fff'], [420, 'Aa', MID, '#fff'], [90, 'aa', PALE, C.ink]]);
  o.push(arrow(150, 380, 150, 450, { color: C.rust, w: 5, marker: 'ahR' }));
  o.push(t(180, 422, 'Predators eat every aa beetle', { size: 20, weight: 700, fill: C.rust }));
  o.push(t(L, 500, '910 survivors breed', { size: 21, weight: 700 }));
  bar(520, [[490, 'AA', DARK, '#fff'], [420, 'Aa', MID, '#fff'], [90, '', '', '', true]]);
  o.push(panel(40, 680, 820, 360));
  o.push(t(L + 10, 722, 'Allele pool (share of gene copies)', { size: 21, weight: 700 }));
  const pool = (y, q, lab) => {
    const wa = (1 - q) * (Wd - 20);
    o.push(`<rect x="${L + 10}" y="${y}" width="${wa}" height="60" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`);
    o.push(`<rect x="${L + 10 + wa}" y="${y}" width="${Wd - 20 - wa}" height="60" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`);
    o.push(t(L + 10 + wa / 2, y + 38, 'A', { size: 22, weight: 700, anchor: 'middle' }));
    o.push(t(L + 10 + wa + (Wd - 20 - wa) / 2, y + 38, 'a', { size: 22, weight: 700, anchor: 'middle' }));
    o.push(t(L + 10, y + 96, lab, { size: 21, weight: 700, fill: C.olive }));
  };
  pool(748, 0.3, 'Before: q = 600/2000 = 0.30');
  pool(908, 420 / 1820, 'After: q = 420/1820 = 0.23');
  return svg(W, 1070, 'Predators remove pale beetles', o.join('\n'), 'Allele a falls from 0.30 to 0.23');
}

// ---------- 04 Antibiotic resistance ----------
function bact(cx, cy, rot, res, dead) {
  let s = `<rect x="${cx - 24}" y="${cy - 10}" width="48" height="20" rx="10" transform="rotate(${rot} ${cx} ${cy})" fill="${res ? C.olive : '#fff'}" stroke="${res ? C.olive : C.tealDark}" stroke-width="3"/>`;
  if (dead) s += `<path d="M${cx - 13} ${cy - 13} l26 26 M${cx + 13} ${cy - 13} l-26 26" stroke="${C.rust}" stroke-width="4.5" stroke-linecap="round"/>`;
  return s;
}
function antibiotic() {
  const o = [];
  const pos = [[70, 60, 20], [160, 40, -15], [225, 60, 30], [65, 120, -10], [165, 100, 15], [225, 125, -20], [110, 150, 10], [190, 160, 25]];
  const boxes = [['Rare mutant present', 0], ['Antibiotic kills most', 1], ['Survivors divide', 2]];
  boxes.forEach(([lab, k], i) => {
    const x = 30 + i * 300, y = 120;
    o.push(panel(x, y, 250, 250));
    pos.forEach(([px, py, r], j) => {
      const cx = x + px - 20 + 10, cy = y + py + 20;
      if (k === 2) o.push(bact(cx, cy, r, true));
      else o.push(bact(cx, cy, r, j === 4, k === 1 && j !== 4));
    });
    o.push(t(x + 125, y + 290, lab, { size: 19, weight: 700, anchor: 'middle' }));
    if (i < 2) o.push(arrow(x + 254, y + 125, x + 296, y + 125, { w: 4 }));
  });
  o.push(bact(80, 470, 0, false), t(116, 477, 'susceptible', { size: 18 }));
  o.push(bact(380, 470, 0, true), t(416, 477, 'resistant allele', { size: 18 }));
  o.push(t(60, 535, 'Share of cells that are resistant (log scale)', { size: 21, weight: 700 }));
  const ax = 230, ar = 810, lx = (v) => ax + ((Math.log10(v) + 3.5) / 3.5) * (ar - ax);
  const rows = [['Start', 0.001, '0.001'], ['Dose 1', 0.0099, '0.0099'], ['Dose 2', 0.091, '0.091'], ['Dose 3', 0.5, '0.50']];
  rows.forEach(([lab, v, s], i) => {
    const y = 570 + i * 90;
    o.push(t(60, y + 34, lab, { size: 21, weight: 700 }));
    const w = lx(v) - ax;
    o.push(`<rect x="${ax}" y="${y + 5}" width="${w}" height="50" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
    if (w > 600) o.push(t(ax + w - 12, y + 38, s, { size: 21, weight: 700, anchor: 'end' }));
    else o.push(t(ax + w + 14, y + 38, s, { size: 21, weight: 700 }));
  });
  o.push(`<line x1="${ax}" y1="560" x2="${ax}" y2="930" stroke="${C.ink}" stroke-width="3"/>`);
  [[0.001, '0.001'], [0.01, '0.01'], [0.1, '0.1'], [1, '1']].forEach(([v, s]) => {
    o.push(`<line x1="${lx(v)}" y1="922" x2="${lx(v)}" y2="938" stroke="${C.ink}" stroke-width="3"/>`);
    o.push(t(lx(v), 966, s, { size: 18, anchor: 'middle' }));
  });
  o.push(t(W / 2, 1020, 'Selection raises the resistance allele frequency', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svg(W, 1056, 'Antibiotics select resistant bacteria', o.join('\n'), 'Each dose kills 90% of susceptible cells');
}

// ---------- 05 Hardy-Weinberg square ----------
function hardyWeinberg() {
  const o = [];
  const x = 110, y = 210, s = 460, p = 0.8, a = s * p;
  o.push(t(x + a / 2, y - 22, 'A: p = 0.8', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(x + a + (s - a) / 2, y - 22, 'a: q = 0.2', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(`<text transform="translate(${x - 22} ${y + a / 2}) rotate(-90)" font-size="20" font-weight="700" fill="${C.tealDark}" text-anchor="middle">A: p = 0.8</text>`);
  o.push(`<text transform="translate(${x - 22} ${y + a + (s - a) / 2}) rotate(-90)" font-size="18" font-weight="700" fill="${C.olive}" text-anchor="middle">a: 0.2</text>`);
  const cell = (cx, cy, w, h, fill) => `<rect x="${cx}" y="${cy}" width="${w}" height="${h}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
  o.push(cell(x, y, a, a, C.teal), cell(x + a, y, s - a, a, C.tealLight), cell(x, y + a, a, s - a, C.tealLight), cell(x + a, y + a, s - a, s - a, C.mustard));
  o.push(t(x + a / 2, y + a / 2 - 4, 'AA', { size: 34, weight: 700, anchor: 'middle' }));
  o.push(t(x + a / 2, y + a / 2 + 30, 'p² = 0.64', { size: 21, anchor: 'middle' }));
  o.push(t(x + a + (s - a) / 2, y + a / 2 - 6, 'Aa', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(x + a + (s - a) / 2, y + a / 2 + 22, '0.16', { size: 19, anchor: 'middle' }));
  o.push(t(x + a / 2, y + a + (s - a) / 2 + 8, 'Aa 0.16', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(x + a + (s - a) / 2, y + a + 36, 'aa', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(x + a + (s - a) / 2, y + a + 62, '0.04', { size: 18, anchor: 'middle' }));
  o.push(t(640, 280, 'Of 400 animals:', { size: 21, weight: 700 }));
  [['AA', '256', C.teal], ['Aa', '128', C.tealLight], ['aa', '16', C.mustard]].forEach(([g, n, f], i) => {
    const yy = 305 + i * 80;
    o.push(panel(640, yy, 220, 62, f, C.ink));
    o.push(t(662, yy + 40, g, { size: 22, weight: 700 }), t(838, yy + 40, n, { size: 22, weight: 700, anchor: 'end' }));
  });
  o.push(panel(40, 740, 820, 190));
  o.push(t(W / 2, 792, 'q² = 16/400 = 0.04', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 840, 'q = 0.2, so p = 1 − 0.2 = 0.8', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 888, '2pq = 0.32, so 128 carriers', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }));
  return svg(W, 970, 'Hardy–Weinberg as areas', o.join('\n'), '400 animals, 16 show the recessive trait');
}

// ---------- 06 Genetic drift ----------
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
function simulate(n, gens, runs, seed) {
  const r = rng(seed), out = [];
  for (let k = 0; k < runs; k++) {
    let p = 0.5; const line = [p];
    for (let g = 0; g < gens; g++) { let c = 0; for (let i = 0; i < n; i++) if (r() < p) c++; p = c / n; line.push(p); }
    out.push(line);
  }
  return out;
}
function drift() {
  const o = [];
  const cols = [C.olive, C.tealDark, C.rust, C.blue, '#6b4fa0', '#a8385a', C.ink, '#3f8f5a'];
  const graph = (y, title, n, seed) => {
    o.push(panel(40, y, 820, 440));
    o.push(t(66, y + 44, title, { size: 21, weight: 700 }));
    const gx = 140, gy = y + 360, gw = 680, gh = 260, gens = 40;
    o.push(arrow(gx, gy, gx, gy - gh - 30), arrow(gx, gy, gx + gw + 20, gy));
    [[0, '0'], [0.5, '0.5'], [1, '1']].forEach(([v, s]) => o.push(t(gx - 14, gy - v * gh + 6, s, { size: 18, anchor: 'end' })));
    o.push(`<text transform="translate(${gx - 70} ${gy - gh / 2}) rotate(-90)" font-size="18" font-weight="700" fill="${C.ink}" text-anchor="middle">Allele frequency</text>`);
    o.push(t(gx + gw / 2, gy + 34, 'Generations →', { size: 18, fill: C.muted, anchor: 'middle' }));
    simulate(n, gens, 8, seed).forEach((line, k) => {
      const d = line.map((p, g) => `${g ? 'L' : 'M'}${(gx + (g / gens) * gw).toFixed(1)} ${(gy - p * gh).toFixed(1)}`).join(' ');
      o.push(path(d, { stroke: cols[k], w: 3 }));
    });
  };
  graph(120, '10 individuals (20 gene copies)', 20, 7);
  graph(590, '500 individuals (1000 gene copies)', 1000, 11);
  o.push(t(W / 2, 1080, 'Small populations: alleles lost or fixed by chance', { size: 20, weight: 700, fill: C.rust, anchor: 'middle' }));
  return svg(W, 1110, 'Drift: chance matters when small', o.join('\n'), 'Allele starts at 0.5; 8 simulated populations each');
}

// ---------- 07 Bottleneck and founder ----------
function dots(x, y, cols, rows, gold) {
  const s = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const i = r * cols + c, g = gold.includes(i);
    s.push(`<circle cx="${x + c * 33}" cy="${y + r * 33}" r="13" fill="${g ? C.olive : '#fff'}" stroke="${g ? C.olive : C.tealDark}" stroke-width="2.5"/>`);
  }
  return s.join('');
}
function bottleneck() {
  const o = [];
  const block = (y, head, a, b) => {
    o.push(panel(40, y, 820, 370));
    o.push(t(66, y + 44, head, { size: 22, weight: 700 }));
    o.push(dots(a.x, y + 100, a.c, 5, a.g), dots(b.x, y + 100, b.c, 5, b.g));
    o.push(arrow(395, y + 166, 485, y + 166, { color: C.rust, w: 6, marker: 'ahR' }));
    for (const s of [a, b]) {
      const cx = s.x + ((s.c - 1) * 33) / 2;
      o.push(t(cx, y + 300, s.lab, { size: 22, weight: 700, anchor: 'middle' }));
      o.push(t(cx, y + 332, s.sub, { size: 18, fill: C.muted, anchor: 'middle' }));
    }
  };
  block(120, 'Bottleneck: 5000 fall to 40 survivors (allele A)',
    { x: 70, c: 10, g: [2, 4, 5, 8, 10, 12, 14, 18, 19, 23, 33, 34, 43, 45, 48], lab: 'Before: 0.30', sub: '(15 of 50 dots)' },
    { x: 520, c: 8, g: [9, 10, 17, 19, 33, 34], lab: 'After: 0.15', sub: '(6 of 40 dots)' });
  block(520, 'Founder effect: 25 birds reach an island (rare allele)',
    { x: 70, c: 10, g: [0], lab: 'Mainland: 0.02', sub: '(1 of 50 dots)' },
    { x: 520, c: 10, g: [0, 7, 28, 31, 38], lab: 'Island: 0.10', sub: '(5 of 50 dots)' });
  o.push(t(W / 2, 950, 'Chance decides which alleles pass through', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svg(W, 984, 'Small samples change the gene pool', o.join('\n'), 'Each dot = one gene copy; gold = the allele followed');
}

// ---------- 08 Speciation ----------
function speciation() {
  const o = [];
  const P = [[45, 45], [120, 55], [85, 100], [140, 115], [270, 55], [345, 45], [305, 100], [250, 115]];
  const river = (x, y) => path(`M${x} ${y + 10} c-25 25 25 45 0 70 c-25 25 25 45 0 70`, { stroke: C.blue, w: 13 });
  const cross = (cx, cy) => `<path d="M${cx - 17} ${cy - 17} l34 34 M${cx + 17} ${cy - 17} l-34 34" stroke="${C.rust}" stroke-width="5" stroke-linecap="round"/>`;
  const sym = (cx, cy, sq, fill) => sq
    ? `<rect x="${cx - 12}" y="${cy - 12}" width="24" height="24" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`
    : `<circle cx="${cx}" cy="${cy}" r="12" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const cols = [[40, 'Allopatric', 'physical barrier', C.tealDark], [490, 'Sympatric', 'same place, other barrier', C.blue]];
  const labs = [['One population', 'River: no gene flow', 'Diverged: new species'], ['One population', 'Flower in May or July', 'Diverged: new species']];
  cols.forEach(([x, h, sub, col], ci) => {
    o.push(t(x + 195, 160, h, { size: 28, weight: 700, fill: col, anchor: 'middle' }));
    o.push(t(x + 195, 192, sub, { size: 19, fill: C.muted, anchor: 'middle' }));
    for (let r = 0; r < 3; r++) {
      const y = 220 + r * 260;
      o.push(panel(x, y, 390, 200, '#fff', col));
      P.forEach(([px, py], i) => {
        const right = i >= 4;
        let sq = false, fill = C.tealLight;
        if (ci === 1 && r >= 1) sq = [2, 3, 4, 5].includes(i);
        if (r === 2) fill = (ci === 0 ? right : sq) ? C.mustard : C.teal;
        o.push(sym(x + px, y + py, sq, fill));
      });
      if (ci === 0 && r >= 1) o.push(river(x + 195, y));
      if (r === 2) o.push(cross(x + 195, y + 85));
      o.push(t(x + 195, y + 182, labs[ci][r], { size: 19, weight: 700, anchor: 'middle' }));
      if (r < 2) o.push(arrow(x + 195, y + 206, x + 195, y + 252, { color: col, w: 4, marker: ci === 0 ? 'ahT' : 'ah' }));
    }
  });
  o.push(t(W / 2, 1000, 'Cross = no fertile offspring together', { size: 21, weight: 700, fill: C.rust, anchor: 'middle' }));
  return svg(W, 1034, 'How new species form', o.join('\n'), 'Gene flow stops, then the groups diverge');
}

// ---------- 09 DNA relatedness ----------
function dnaRelatedness() {
  const o = [];
  const seqs = [['A', 'GCTGAGCGTCATGCAGGGACTAGACAA'], ['B', 'GCTGAGCGTCATGCAGAGACTAGACAA'], ['C', 'GCTGAGCCGCATGCAGGGAGTAGACAA'], ['D', 'GAGGTGCCTCATATAGGGAGCAGACAA']];
  const ref = seqs[0][1], x0 = 70, cw = 25.5, ch = 46;
  const pct = [];
  seqs.forEach(([n, s], r) => {
    const y = 140 + r * 66;
    o.push(t(36, y + 32, n, { size: 26, weight: 700 }));
    let diff = 0;
    [...s].forEach((b, i) => {
      const d = b !== ref[i]; if (d) diff++;
      o.push(`<rect x="${x0 + i * cw}" y="${y}" width="${cw}" height="${ch}" fill="${d ? C.mustard : '#fff'}" stroke="${C.ink}" stroke-width="1.8"/>`);
      o.push(t(x0 + i * cw + cw / 2, y + 31, b, { size: 19, weight: d ? 700 : 400, anchor: 'middle' }));
    });
    const p = r ? ((diff / 27) * 100).toFixed(1) + '%' : 'ref';
    pct.push(diff);
    o.push(t(x0 + 27 * cw + 10, y + 31, p, { size: r ? 20 : 18, weight: r ? 700 : 400, fill: r ? C.olive : C.muted }));
  });
  o.push(t(60, 450, 'Difference from A (% of bases)', { size: 21, weight: 700 }));
  [['B', pct[1]], ['C', pct[2]], ['D', pct[3]]].forEach(([n, d], i) => {
    const y = 480 + i * 80, w = (d / 27) * 100 * 18.5;
    o.push(t(60, y + 36, n, { size: 22, weight: 700 }));
    o.push(`<rect x="170" y="${y + 8}" width="${w}" height="46" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
    o.push(t(170 + w + 12, y + 40, ((d / 27) * 100).toFixed(1) + '%', { size: 21, weight: 700 }));
  });
  o.push(arrow(170, 770, 770, 770, { color: C.olive, w: 4, marker: 'ahO' }));
  o.push(t(170, 808, 'closer relative', { size: 20, weight: 700, fill: C.tealDark }));
  o.push(t(770, 808, 'more distant', { size: 20, weight: 700, fill: C.rust, anchor: 'end' }));
  return svg(W, 850, 'Fewer differences, closer relatives', o.join('\n'), 'Same 27-base section of a gene, compared with A');
}

export const figures = [
  { name: '07-bottleneck-founder', after: '### Answers', svg: bottleneck(),
    alt: 'In a bottleneck 5000 animals fall to 40 survivors and allele A drops from 0.30 to 0.15. In the founder effect 25 birds found an island and a rare allele rises from 0.02 to 0.10. A small sample of the gene pool differs from the original by chance.',
    caption: 'A small sample of a gene pool can change allele frequencies without any selection.' },
  { name: '03-selection-changes-allele-frequency', after: '## Natural selection in five steps', svg: selectionAllele(),
    alt: 'A population of 1000 beetles is 490 AA, 420 Aa and 90 aa. Predators eat all aa beetles, leaving 910 breeders. The allele count changes q from 600/2000 = 0.30 to 420/1820 = 0.23, a gradual fall because a allele hides in Aa survivors.',
    caption: 'Removing one phenotype lowers the frequency of its allele in the next generation.' },
  { name: '02-three-types-of-selection', after: '## Interpreting selection data: checklist', svg: threeSelection(),
    alt: 'Three panels each show a dashed bell curve before selection and a solid curve after. Stabilising selection narrows the curve with the mean unchanged, directional selection shifts it toward one extreme, and disruptive selection leaves two peaks and removes the middle.',
    caption: 'Selection can narrow, shift or split the distribution of a phenotype.' },
  { name: '06-genetic-drift', after: '## Where marks are usually lost', svg: drift(),
    alt: 'Two graphs show eight simulated populations starting with an allele at 0.5. With 20 gene copies the lines wander and several are lost or fixed by chance; with 1000 gene copies they stay near 0.5.',
    caption: 'Chance changes in allele frequency are large in small populations and small in large ones.' },
  { name: '05-hardy-weinberg-square', after: '## Where marks are usually lost', svg: hardyWeinberg(),
    alt: 'A unit square is divided by p = 0.8 and q = 0.2 into AA 0.64, two Aa areas of 0.16 and aa 0.04. For 400 animals with 16 recessive, q squared is 0.04, so q is 0.2, p is 0.8, 2pq is 0.32 and there are 128 carriers.',
    caption: 'p squared, 2pq and q squared are the areas of a square split by the two allele frequencies.' },
  { name: '09-dna-relatedness', after: '## Key definitions', svg: dnaRelatedness(),
    alt: 'Four rows show the same 27-base DNA section in species A to D with differences from A highlighted: B 1 (3.7 percent), C 3 (11.1 percent) and D 8 (29.6 percent). Fewer differences mean a more recent common ancestor, so B is closest to A.',
    caption: 'Fewer base differences suggest a more recent common ancestor.' },
  { name: '08-speciation', after: '### Diversity over long periods', svg: speciation(),
    alt: 'In allopatric speciation a river splits one population, gene flow stops, and the two groups diverge until they cannot produce fertile offspring together. In sympatric speciation the groups share an area but are isolated, for example by flowering in May or July, and diverge in the same way.',
    caption: 'Speciation needs reproductive isolation, either by a physical barrier or by another barrier in the same place.' },
  { name: '01-polygenes-bell-curve', after: '### Answers', svg: polygenes(),
    alt: 'A bar chart of offspring from AaBbCc x AaBbCc across 0 to 6 height-adding alleles: 1, 6, 15, 20, 15, 6, 1 out of 64. A plant under each bar gets taller as the number of adding alleles rises. Many small additive genes, blurred by the environment, give a smooth continuous range.',
    caption: 'Many genes with small additive effects give a bell-shaped distribution of offspring.' },
  { name: '04-antibiotic-resistance', after: '## Antibiotic resistance: method for an explanation', svg: antibiotic(),
    alt: 'A rare bacterium already carries a resistance allele, the antibiotic kills the susceptible cells, and the survivors divide. A log-scale chart shows the resistant share rising from 0.001 to 0.0099, 0.091 and 0.50 over three doses that each kill 90 percent of susceptible cells.',
    caption: 'Antibiotics select for resistance alleles that mutation had already produced.' },
];
