import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-sciences-atomic-structure-and-bonding';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const dot = (x, y, fill = C.ink) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5.5" fill="${fill}"/>`;
const cross = (x, y, col = C.rust) => path(`M${x - 5},${y - 5} L${x + 5},${y + 5} M${x + 5},${y - 5} L${x - 5},${y + 5}`, { stroke: col, w: 3 });
const el = (x, y, k) => (k === 'x' ? cross(x, y) : dot(x, y));
// electrons on a ring: string of 'o' (dot) / 'x' (cross); sites N,S,E,W, singles first then pairs
const ring = (cx, cy, r, s) => {
  const ang = [-90, 90, 0, 180].map((a) => (a * Math.PI) / 180);
  let o = '';
  const n = s.length;
  for (let k = 0; k < n; k++) {
    const site = k % 4, slot = Math.floor(k / 4);
    const paired = n > 4 + site;
    const off = paired ? (slot === 0 ? -1 : 1) * (9 / r) : 0;
    const a = ang[site] + off;
    o += el(cx + r * Math.cos(a), cy + r * Math.sin(a), s[k]);
  }
  return o;
};
const shellAtom = (cx, cy, sym, shells, { r0 = 34, dr = 24, nucR = 20, fill = C.cream, size = 19 } = {}) => {
  let o = '';
  shells.forEach((s, i) => { o += `<circle cx="${cx}" cy="${cy}" r="${r0 + i * dr}" fill="none" stroke="${C.muted}" stroke-width="2"/>`; });
  o += `<circle cx="${cx}" cy="${cy}" r="${nucR}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + t(cx, cy + size * 0.36, sym, { size, weight: 700, anchor: 'middle' });
  shells.forEach((s, i) => { o += ring(cx, cy, r0 + i * dr, typeof s === 'number' ? 'o'.repeat(s) : s); });
  return o;
};
const nuclide = (x, y, A, Z, sym, size = 60, charge = '') =>
  t(x, y - size * 0.42, A, { size: size * 0.48, weight: 700, anchor: 'end', fill: C.tealDark }) +
  t(x, y + size * 0.14, Z, { size: size * 0.48, weight: 700, anchor: 'end', fill: C.rust }) +
  t(x + 6, y, sym, { size, weight: 700 }) +
  (charge ? t(x + 8 + size * 0.62 * sym.length, y - size * 0.42, charge, { size: size * 0.48, weight: 700 }) : '');
const bracket = (cx, cy, h, w, charge) =>
  path(`M${cx - w / 2 + 12},${cy - h / 2} L${cx - w / 2},${cy - h / 2} L${cx - w / 2},${cy + h / 2} L${cx - w / 2 + 12},${cy + h / 2}`, { w: 3 }) +
  path(`M${cx + w / 2 - 12},${cy - h / 2} L${cx + w / 2},${cy - h / 2} L${cx + w / 2},${cy + h / 2} L${cx + w / 2 - 12},${cy + h / 2}`, { w: 3 }) +
  t(cx + w / 2 + 6, cy - h / 2 + 14, charge, { size: 26, weight: 700 });

// 01 Changing models of the atom
{
  const rowH = 150, gap = 12, y0 = 110;
  const rows = [
    ['1897', 'Thomson: plum pudding', ['Discovered the electron. Negative electrons', 'spread through a ball of positive charge.']],
    ['1911', 'Rutherford: nuclear model', ['Gold-foil evidence: a tiny, dense, positive', 'nucleus; the atom is mostly empty space.']],
    ['1913', 'Bohr: energy levels', ['Electrons sit in fixed energy levels', '(shells) around the nucleus.']],
    ['1932', 'Chadwick: the neutron', ['The neutron is identified, so the nucleus', 'holds protons and neutrons.']],
  ];
  let b = '';
  rows.forEach(([yr, title, lines], i) => {
    const y = y0 + i * (rowH + gap), cx = 150, cy = y + rowH / 2;
    b += panel(30, y, 840, rowH);
    if (i === 0) {
      b += `<circle cx="${cx}" cy="${cy}" r="58" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
      [[-30, -25], [20, -35], [35, 10], [-10, 30], [-40, 15], [5, -5]].forEach(([dx, dy]) => { b += `<circle cx="${cx + dx}" cy="${cy + dy}" r="9" fill="${C.ink}"/>` + `<line x1="${cx + dx - 5}" y1="${cy + dy}" x2="${cx + dx + 5}" y2="${cy + dy}" stroke="#fff" stroke-width="2.5"/>`; });
      [[-10, -38], [30, -12], [-28, -2], [18, 34], [-38, 38]].forEach(([dx, dy]) => { b += t(cx + dx, cy + dy + 6, '+', { size: 18, weight: 700, fill: C.olive, anchor: 'middle' }); });
    }
    if (i === 1) {
      b += `<circle cx="${cx}" cy="${cy}" r="58" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 6"/>` +
        `<circle cx="${cx}" cy="${cy}" r="6" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.5"/>`;
      [[-40, -30], [38, -28], [48, 4], [-20, 44], [-48, 14]].forEach(([dx, dy]) => { b += dot(cx + dx, cy + dy); });
      b += t(cx, cy + 26, 'nucleus', { size: 15, fill: C.rust, weight: 600, anchor: 'middle' });
    }
    if (i === 2) {
      b += shellAtom(cx, cy, '', ['oo', 'oooooooo'], { r0: 32, dr: 26, nucR: 12, fill: C.rust });
    }
    if (i === 3) {
      const pts = [[-14, -14, 'p'], [8, -16, 'n'], [-18, 8, 'n'], [4, 4, 'p'], [20, 6, 'p'], [-4, 22, 'n'], [16, 24, 'n'], [-24, -6, 'p']];
      b += `<circle cx="${cx}" cy="${cy}" r="58" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 6"/>`;
      pts.forEach(([dx, dy, k]) => { b += `<circle cx="${cx + dx}" cy="${cy + dy}" r="12" fill="${k === 'p' ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2"/>` + (k === 'p' ? t(cx + dx, cy + dy + 5, '+', { size: 15, weight: 700, anchor: 'middle' }) : ''); });
    }
    b += `<rect x="255" y="${cy - 22}" width="86" height="44" rx="22" fill="${i === 1 ? C.mustard : C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + t(298, cy + 7, yr, { size: 20, weight: 700, anchor: 'middle' });
    b += t(370, y + 52, title, { size: 23, weight: 700 }) + tl(370, y + 86, lines, { size: 18, fill: C.muted }, 25);
  });
  for (let i = 0; i < 3; i++) { const cy = y0 + i * (rowH + gap) + rowH / 2; b += arrow(298, cy + 24, 298, cy + rowH + gap - 26, { w: 3 }); }
  b += t(450, y0 + 4 * (rowH + gap) + 22, 'Each change was forced by new evidence.', { size: 18, weight: 600, fill: C.tealDark, anchor: 'middle' });
  add('01-models-of-the-atom',
    svg(900, 800, 'How the model of the atom changed', b),
    'Four stages in order: Thomson’s 1897 plum pudding of electrons in a ball of positive charge; Rutherford’s 1911 nuclear model with a tiny dense positive nucleus in mostly empty space; Bohr’s 1913 electrons in fixed energy levels; and Chadwick’s 1932 discovery of the neutron in the nucleus.',
    'The atomic model is a model: it was replaced each time new evidence demanded it.',
    '## The nuclear model of the atom');
}

// 02 Nuclide notation and the three particles
{
  let b = panel(30, 110, 840, 330);
  b += nuclide(200, 300, '23', '11', 'Na', 110);
  b += arrow(120, 180, 150, 225, { w: 2.5, color: C.tealDark, marker: 'ahT' }) + tl(40 + 20, 150, ['mass number A', '= protons + neutrons'], { size: 17, weight: 600, fill: C.tealDark }, 21);
  b += arrow(120, 375, 150, 338, { w: 2.5, color: C.rust, marker: 'ahR' }) + tl(60, 395, ['atomic number Z', '= protons'], { size: 17, weight: 600, fill: C.rust }, 21);
  const steps = [['Protons', '= Z', '= 11'], ['Neutrons', '= A − Z = 23 − 11', '= 12'], ['Electrons', '= protons (neutral atom)', '= 11']];
  steps.forEach(([a, m, r], i) => {
    const y = 170 + i * 90;
    b += `<rect x="420" y="${y}" width="420" height="72" rx="12" fill="${i === 1 ? C.cream : C.tealLight}" stroke="${C.panelEdge}" stroke-width="2"/>` +
      t(440, y + 30, a, { size: 20, weight: 700 }) + t(440, y + 56, m, { size: 17, fill: C.muted }) + t(820, y + 46, r, { size: 26, weight: 700, anchor: 'end' });
  });
  const card = (x, name, fill, mass, charge, where, sym) =>
    `<rect x="${x}" y="470" width="268" height="230" rx="14" fill="#fff" stroke="${C.panelEdge}" stroke-width="2.5"/>` +
    `<circle cx="${x + 50}" cy="520" r="${sym === '−' ? 12 : 22}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x + 50, 527, sym, { size: sym === '−' ? 17 : 20, weight: 700, anchor: 'middle', fill: sym === '−' ? '#fff' : C.ink }) +
    t(x + 90, 528, name, { size: 22, weight: 700 }) +
    t(x + 24, 580, 'relative mass', { size: 16, fill: C.muted }) + t(x + 244, 580, mass, { size: 18, weight: 700, anchor: 'end' }) +
    t(x + 24, 620, 'relative charge', { size: 16, fill: C.muted }) + t(x + 244, 620, charge, { size: 18, weight: 700, anchor: 'end' }) +
    t(x + 24, 660, 'found in', { size: 16, fill: C.muted }) + t(x + 244, 660, where, { size: 18, weight: 700, anchor: 'end' });
  b += card(30, 'Proton', C.mustard, '1', '+1', 'nucleus', '+') + card(316, 'Neutron', C.teal, '1', '0', 'nucleus', '') + card(602, 'Electron', C.ink, '≈ 1/1840', '−1', 'shells', '−');
  add('02-nuclide-notation',
    svg(900, 730, 'Reading nuclide notation', b),
    'Sodium-23 written with mass number 23 top left and atomic number 11 bottom left gives 11 protons, 23 − 11 = 12 neutrons and 11 electrons. Below, cards give the proton (mass 1, charge +1, nucleus), neutron (mass 1, charge 0, nucleus) and electron (mass about 1/1840, charge −1, shells).',
    'Z gives the protons, A − Z the neutrons, and a neutral atom has as many electrons as protons.',
    '## Subatomic particles');
}

// 03 Isotopes of chlorine and relative atomic mass
{
  const iso = (x, A, n, pct) => {
    let o = panel(x, 110, 410, 250) + nuclide(x + 100, 205, A, '17', 'Cl', 70);
    o += t(x + 240, 160, `chlorine-${A}`, { size: 21, weight: 700 });
    o += tl(x + 240, 196, ['17 protons', `${n} neutrons`, '17 electrons', 'arrangement 2,8,7'], { size: 18, fill: C.muted }, 26);
    o += `<rect x="${x + 30}" y="${300}" width="350" height="40" rx="10" fill="${C.tealLight}"/>` + t(x + 205, 327, `abundance in sample: ${pct}%`, { size: 18, weight: 600, anchor: 'middle', fill: C.tealDark });
    return o;
  };
  let b = iso(30, '35', 18, 75) + iso(460, '37', 20, 25);
  b += panel(30, 380, 840, 340);
  const xA = 170, xB = 730, base = 630, X = (m) => xA + ((m - 35) * (xB - xA)) / 2;
  b += `<line x1="${xA - 40}" y1="${base}" x2="${xB + 40}" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
  [35, 35.5, 36, 36.5, 37].forEach((m) => { b += `<line x1="${X(m)}" y1="${base}" x2="${X(m)}" y2="${base + 10}" stroke="${C.ink}" stroke-width="2.5"/>` + (Number.isInteger(m) ? t(X(m), base + 34, String(m), { size: 18, anchor: 'middle' }) : ''); });
  b += `<rect x="${X(35) - 34}" y="${base - 120}" width="68" height="120" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + t(X(35), base - 130, '75%', { size: 18, weight: 700, anchor: 'middle' });
  b += `<rect x="${X(37) - 34}" y="${base - 40}" width="68" height="40" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + t(X(37), base - 50, '25%', { size: 18, weight: 700, anchor: 'middle' });
  b += `<path d="M${X(35.5) - 16},${base + 30} L${X(35.5) + 16},${base + 30} L${X(35.5)},${base + 6} Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` +
    t(X(35.5), base + 56, 'Aᵣ = 35.5', { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
  b += t(60, 420, 'Relative atomic mass is a weighted mean', { size: 22, weight: 700 });
  b += t(440, 470, 'Aᵣ = (35 × 75 + 37 × 25) ÷ 100', { size: 19, weight: 600 }) + t(440, 500, '= 3550 ÷ 100 = 35.5', { size: 19, weight: 600 }) +
    tl(440, 535, ['Closer to 35, the more', 'abundant isotope.'], { size: 17, fill: C.muted }, 22);
  b += t(450, 705, 'mass number', { size: 16, fill: C.muted, anchor: 'middle' });
  add('03-isotopes-relative-atomic-mass',
    svg(900, 750, 'Isotopes of chlorine', b),
    'Chlorine-35 and chlorine-37 both have 17 protons, 17 electrons and arrangement 2,8,7 but have 18 and 20 neutrons. With 75% chlorine-35 and 25% chlorine-37, the weighted mean is 35.5, closer to 35.',
    'Isotopes differ only in neutrons; Aᵣ is pulled towards the more abundant isotope.',
    '## Isotopes and relative atomic mass');
}

// 04 Electron arrangement and the periodic table
{
  const card = (x, y, name, sym, shells, arr, per, grp) => {
    let o = panel(x, y, 410, 300);
    o += shellAtom(x + 125, y + 150, sym, shells, { r0: 30, dr: 26, nucR: 20, size: 17 });
    o += t(x + 250, y + 60, name, { size: 22, weight: 700 }) + t(x + 250, y + 92, arr, { size: 22, weight: 700, fill: C.tealDark });
    o += `<rect x="${x + 245}" y="${y + 125}" width="150" height="62" rx="10" fill="${C.tealLight}"/>` + t(x + 258, y + 150, `${shells.length} shells`, { size: 17, weight: 600 }) + t(x + 258, y + 175, `→ period ${per}`, { size: 17, weight: 700, fill: C.tealDark });
    o += `<rect x="${x + 245}" y="${y + 200}" width="150" height="62" rx="10" fill="${C.cream}"/>` + t(x + 258, y + 225, `${shells[shells.length - 1]} outer e⁻`, { size: 17, weight: 600 }) + t(x + 258, y + 250, `→ group ${grp}`, { size: 17, weight: 700, fill: C.olive });
    return o;
  };
  let b = card(30, 110, 'Lithium', 'Li', [2, 1], '2,1', 2, 1) + card(460, 110, 'Sodium', 'Na', [2, 8, 1], '2,8,1', 3, 1) +
    card(30, 430, 'Chlorine', 'Cl', [2, 8, 7], '2,8,7', 3, 17) + card(460, 430, 'Calcium', 'Ca', [2, 8, 8, 2], '2,8,8,2', 4, 2);
  b += t(450, 772, 'Shells fill in order: up to 2, then 8, then 8; electrons 19 and 20 go into the fourth shell.', { size: 17, fill: C.muted, anchor: 'middle' });
  add('04-electron-arrangement',
    svg(900, 800, 'Electron arrangement and the periodic table', b),
    'Shell diagrams for lithium 2,1, sodium 2,8,1, chlorine 2,8,7 and calcium 2,8,8,2. The number of occupied shells gives the period (2, 3, 3 and 4) and the outer electrons give the group (1, 1, 17 and 2).',
    'Number of shells = period; outer electrons = group (last digit for groups 13 to 17).',
    '## Electron arrangement');
}

// 05 Ionic bonding: sodium chloride dot and cross, then a formula
{
  let b = panel(30, 110, 840, 520);
  b += t(60, 150, 'Atoms', { size: 21, weight: 700 }) + t(60, 400, 'Ions', { size: 21, weight: 700 });
  b += shellAtom(230, 275, 'Na', ['oo', 'oooooooo', 'o'], { r0: 30, dr: 24, nucR: 18, size: 16 }) + t(230, 385, 'Na 2,8,1', { size: 18, weight: 600, anchor: 'middle' });
  b += shellAtom(640, 275, 'Cl', ['xx', 'xxxxxxxx', 'xxxxxxx'], { r0: 30, dr: 24, nucR: 18, size: 16 }) + t(640, 385, 'Cl 2,8,7', { size: 18, weight: 600, anchor: 'middle' });
  b += path('M232,195 C320,135 470,135 553,257', { stroke: C.tealDark, w: 3.5, extra: 'marker-end="url(#ahT)"' }) +
    t(400, 136, 'one electron transfers', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  // ions
  b += shellAtom(230, 510, 'Na', ['oo', 'oooooooo'], { r0: 30, dr: 24, nucR: 18, size: 16 }) + bracket(230, 510, 140, 140, '+') + t(230, 610, 'Na⁺ 2,8', { size: 18, weight: 600, anchor: 'middle' });
  b += shellAtom(640, 510, 'Cl', ['xx', 'xxxxxxxx', 'xxxxxxxo'], { r0: 30, dr: 24, nucR: 18, size: 16 }) + bracket(640, 510, 186, 186, '−') + t(640, 622, 'Cl⁻ 2,8,8', { size: 18, weight: 600, anchor: 'middle' });
  b += arrow(400, 320, 400, 450, { w: 3.5 });
  b += t(430, 505, 'opposite charges', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 }) + t(430, 525, 'attract', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 });
  b += dot(60, 660) + t(75, 666, 'sodium electron', { size: 16 }) + cross(250, 660) + t(265, 666, 'chlorine electron', { size: 16 }) + t(470, 666, 'brackets + charge on each ion', { size: 16, fill: C.muted });
  // formula strip
  b += panel(30, 690, 840, 140, C.cream, C.olive);
  b += t(60, 728, 'Formula from charges: aluminium oxide', { size: 20, weight: 700 });
  const chip = (x, s, fill) => `<rect x="${x}" y="748" width="66" height="44" rx="10" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>` + t(x + 33, 777, s, { size: 18, weight: 700, anchor: 'middle' });
  b += chip(60, 'Al³⁺', C.tealLight) + chip(134, 'Al³⁺', C.tealLight) + t(215, 778, '= +6', { size: 19, weight: 700 }) +
    chip(300, 'O²⁻', '#fff') + chip(374, 'O²⁻', '#fff') + chip(448, 'O²⁻', '#fff') + t(529, 778, '= −6', { size: 19, weight: 700 }) +
    t(620, 778, '→ Al₂O₃', { size: 24, weight: 700, fill: C.olive }) + t(60, 818, 'Total positive charge must equal total negative charge (lowest common multiple of 3 and 2 is 6).', { size: 15, fill: C.muted });
  add('05-ionic-dot-and-cross',
    svg(900, 860, 'Ionic bonding: electron transfer', b),
    'Dot-and-cross diagram: a sodium atom 2,8,1 passes its outer electron to a chlorine atom 2,8,7, giving [Na]+ with 2,8 and [Cl]− with a full outer shell of eight, one of them a dot from sodium. Below, two Al3+ (+6) balance three O2− (−6), giving Al2O3.',
    'Metal atoms lose electrons, non-metal atoms gain them, and the ions’ charges must balance.',
    '## Ionic bonding');
}

// 06 Covalent dot and cross: outer shells only
{
  const R = 46, D = 74; // shell radius, centre distance
  const shell = (x, y, sym, fill = '#fff') => `<circle cx="${x}" cy="${y}" r="${R}" fill="${fill}" fill-opacity="0.55" stroke="${C.ink}" stroke-width="2.5"/>` + t(x, y + 7, sym, { size: 21, weight: 700, anchor: 'middle' });
  const pairAt = (x1, y1, x2, y2, n = 1) => { // shared pairs at midpoint, perpendicular spread
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, px = -uy, py = ux;
    let o = '';
    const sp = n === 1 ? [-1, 1] : [-3, -1, 1, 3];
    sp.forEach((s, i) => { o += el(mx + px * s * 8 + 0, my + py * s * 8, i % 2 === 0 ? 'o' : 'x'); });
    return o;
  };
  const lone = (x, y, ang, k = 'o') => { const a = (ang * Math.PI) / 180, r = R - 10, cx = x + r * Math.cos(a), cy = y + r * Math.sin(a), px = -Math.sin(a), py = Math.cos(a); return el(cx + px * 8, cy + py * 8, k) + el(cx - px * 8, cy - py * 8, k); };
  const box = (x, y, w, title, sub, h = 350) => panel(x, y, w, h) + t(x + w / 2, y + 40, title, { size: 22, weight: 700, anchor: 'middle' }) + t(x + w / 2, y + h - 18, sub, { size: 16, fill: C.muted, anchor: 'middle' });
  let b = '';
  // H2O
  { const x = 230, y = 285; b += box(30, 110, 410, 'Water, H₂O', '2 shared pairs, 2 lone pairs on O', 320);
    b += shell(x - D, y, 'H', C.tealLight) + shell(x + D, y, 'H', C.tealLight) + shell(x, y, 'O', C.cream) + pairAt(x - D, y, x, y) + pairAt(x, y, x + D, y) + lone(x, y, -90) + lone(x, y, 90); }
  { const x = 660, y = 270; b += box(460, 110, 410, 'Ammonia, NH₃', '3 shared pairs, 1 lone pair on N', 320);
    b += shell(x - D, y, 'H', C.tealLight) + shell(x + D, y, 'H', C.tealLight) + shell(x, y + D, 'H', C.tealLight) + shell(x, y, 'N', C.cream) + pairAt(x - D, y, x, y) + pairAt(x, y, x + D, y) + pairAt(x, y, x, y + D) + lone(x, y, -90); }
  { const x = 230, y = 625; b += box(30, 445, 410, 'Methane, CH₄', '4 shared pairs, no lone pairs', 370);
    b += shell(x - D, y, 'H', C.tealLight) + shell(x + D, y, 'H', C.tealLight) + shell(x, y + D, 'H', C.tealLight) + shell(x, y - D, 'H', C.tealLight) + shell(x, y, 'C', C.cream) + pairAt(x - D, y, x, y) + pairAt(x, y, x + D, y) + pairAt(x, y, x, y + D) + pairAt(x, y - D, x, y); }
  { const x = 660, y = 630; b += box(460, 445, 410, 'Carbon dioxide, CO₂', '2 double bonds (4 shared pairs)', 370);
    b += shell(x - D, y, 'O', C.cream) + shell(x + D, y, 'O', C.cream) + shell(x, y, 'C', C.tealLight) + pairAt(x - D, y, x, y, 2) + pairAt(x, y, x + D, y, 2) + lone(x - D, y, -130, 'x') + lone(x - D, y, 130, 'x') + lone(x + D, y, -50, 'x') + lone(x + D, y, 50, 'x'); }
  b += dot(250, 850) + t(265, 856, 'electron from the central atom', { size: 16 }) + cross(560, 850) + t(575, 856, 'from the other atom', { size: 16 });
  add('06-covalent-dot-and-cross',
    svg(900, 880, 'Covalent bonding: shared pairs', b, 'Outer shells only; shared pairs sit in the overlap'),
    'Dot-and-cross diagrams with overlapping outer shells. Water has two shared pairs and two lone pairs on oxygen; ammonia has three shared pairs and one lone pair on nitrogen; methane has four shared pairs; carbon dioxide has two double bonds. Each atom except hydrogen ends with 8 outer electrons; hydrogen has 2.',
    'Every atom except hydrogen ends with eight outer electrons; hydrogen ends with two.',
    '## Covalent bonding');
}

// 07 Simple molecular vs giant covalent
{
  const rowH = 210, y0 = 110, gap = 14;
  const atom = (x, y, r = 11, fill = C.teal) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
  const bond = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="4"/>`;
  let b = '';
  const row = (i, title, sub, lines, art) => {
    const y = y0 + i * (rowH + gap);
    b += panel(30, y, 840, rowH) + art(y) + t(400, y + 44, title, { size: 23, weight: 700 }) + t(400, y + 72, sub, { size: 17, fill: C.tealDark, weight: 600 }) + tl(400, y + 108, lines, { size: 17, fill: C.muted }, 24);
  };
  row(0, 'Simple molecular', 'e.g. water, carbon dioxide, methane', ['Strong covalent bonds inside each molecule;', 'weak forces between molecules. Melting only', 'overcomes the weak forces: low melting point.', 'No ions or free electrons: no conduction.'], (y) => {
    let o = '';
    const mols = [[90, y + 60], [210, y + 50], [130, y + 150], [270, y + 140], [330, y + 70]];
    mols.forEach(([x, yy]) => { o += bond(x - 18, yy, x + 18, yy) + atom(x - 18, yy, 13, C.cream) + atom(x + 18, yy, 13, C.cream); });
    [[0, 1], [0, 2], [1, 3], [2, 3], [1, 4], [3, 4]].forEach(([a, c]) => { const [x1, y1] = mols[a], [x2, y2] = mols[c]; const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy); o += `<line x1="${x1 + (dx / L) * 34}" y1="${y1 + (dy / L) * 24}" x2="${x2 - (dx / L) * 34}" y2="${y2 - (dy / L) * 24}" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="5 5"/>`; });
    return o;
  });
  row(1, 'Diamond (giant covalent)', 'each carbon forms 4 covalent bonds', ['Every atom joined by strong covalent bonds.', 'Very hard, very high melting point.', 'No free electrons: does not conduct.', 'Used in cutting tools.'], (y) => {
    let o = '';
    const pts = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) pts.push([90 + c * 60, y + 45 + r * 60]);
    pts.forEach(([x, yy]) => { o += bond(x - 30, yy, x + 30, yy) + bond(x, yy - 30, x, yy + 30); });
    pts.forEach(([x, yy]) => { o += atom(x, yy, 12); });
    return o;
  });
  row(2, 'Graphite (giant covalent)', 'each carbon forms 3 bonds, in flat layers', ['Weak forces between layers: layers slide,', 'so graphite is soft and slippery.', 'The fourth electron on each carbon is', 'delocalised, so graphite conducts.'], (y) => {
    let o = '';
    const layer = (yy, shift) => {
      let s = '';
      const xs = []; for (let k = 0; k < 8; k++) xs.push(70 + shift + k * 38);
      xs.forEach((x, k) => { const yk = yy + (k % 2 ? -10 : 10); if (k < 7) { const yn = yy + ((k + 1) % 2 ? -10 : 10); s += bond(x, yk, xs[k + 1], yn); } });
      xs.forEach((x, k) => { s += atom(x, yy + (k % 2 ? -10 : 10), 10); });
      return s;
    };
    o += layer(y + 45, 0) + layer(y + 115, 19) + layer(y + 185 - 10, 0);
    o += `<line x1="70" y1="${y + 82}" x2="370" y2="${y + 82}" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="5 5"/>` + `<line x1="70" y1="${y + 147}" x2="370" y2="${y + 147}" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="5 5"/>`;
    return o;
  });
  b += `<line x1="60" y1="${y0 + 3 * (rowH + gap) + 20}" x2="110" y2="${y0 + 3 * (rowH + gap) + 20}" stroke="${C.ink}" stroke-width="4"/>` + t(120, y0 + 3 * (rowH + gap) + 26, 'strong covalent bond', { size: 17 }) +
    `<line x1="380" y1="${y0 + 3 * (rowH + gap) + 20}" x2="430" y2="${y0 + 3 * (rowH + gap) + 20}" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="5 5"/>` + t(440, y0 + 3 * (rowH + gap) + 26, 'weak force between molecules or layers', { size: 17 });
  add('07-simple-vs-giant-covalent',
    svg(900, 820, 'Covalent structures and their properties', b, 'Flat sketches of three-dimensional structures'),
    'Three structures. Simple molecules have strong bonds inside each molecule but weak forces between molecules, so low melting points and no conduction. Diamond is a network in which each carbon forms four bonds: very hard, very high melting point, non-conducting. Graphite has layers of carbons with three bonds each, weak forces between layers and a delocalised electron, so it is soft and conducts.',
    'Whether melting breaks weak forces or strong covalent bonds decides the melting point.',
    '## Covalent bonding');
}
