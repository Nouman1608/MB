import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-radioactivity';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const vtext = (x, y, s, size = 16) => `<text x="${x}" y="${y}" font-size="${size}" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x} ${y})">${s}</text>`;
// nuclide symbol: A over Z, left of symbol. (x,y) = baseline of symbol
const nuc = (x, y, A, Z, sym, size = 26, fill = C.ink) => {
  const s = size * 0.62;
  return `<text x="${x}" y="${y - size * 0.45}" font-size="${s}" font-weight="700" fill="${fill}" text-anchor="end">${A}</text>` +
    `<text x="${x}" y="${y + s * 0.35}" font-size="${s}" font-weight="700" fill="${fill}" text-anchor="end">${Z}</text>` +
    `<text x="${x + 2}" y="${y}" font-size="${size}" font-weight="700" fill="${fill}">${sym}</text>`;
};

// 01 Reading a nuclide symbol
{
  let b = panel(30, 110, 840, 330);
  b += `<text x="330" y="330" font-size="70" font-weight="700" fill="${C.tealDark}" text-anchor="end">14</text>`;
  b += `<text x="330" y="400" font-size="70" font-weight="700" fill="${C.rust}" text-anchor="end">6</text>`;
  b += `<text x="340" y="370" font-size="130" font-weight="700" fill="${C.ink}">C</text>`;
  b += arrow(530, 220, 315, 270, { color: C.tealDark, marker: 'ahT', w: 3 });
  b += tl(540, 200, ['A: mass (nucleon) number', '= protons + neutrons'], { size: 18, weight: 700, fill: C.tealDark }, 24);
  b += arrow(530, 400, 340, 385, { color: C.rust, marker: 'ahR', w: 3 });
  b += tl(540, 395, ['Z: atomic (proton) number', '= protons only'], { size: 18, weight: 700, fill: C.rust }, 24);
  b += t(60, 160, 'Carbon-14', { size: 21, weight: 700 });
  b += panel(30, 460, 840, 130, C.cream, C.olive);
  b += t(450, 505, 'neutrons = A − Z = 14 − 6 = 8', { size: 26, weight: 700, anchor: 'middle' });
  b += t(450, 545, '6 protons (+1 each), 8 neutrons (0), and in a neutral atom 6 electrons (−1 each)', { size: 17, anchor: 'middle', fill: C.muted });
  b += panel(30, 610, 840, 180);
  b += t(60, 648, 'Isotopes: same Z, different A', { size: 20, weight: 700 });
  b += nuc(170, 735, 12, 6, 'C', 46) + t(160, 775, '6 p, 6 n', { size: 17, anchor: 'middle', fill: C.muted }).replace('x="160"', 'x="175"');
  b += nuc(420, 735, 14, 6, 'C', 46) + t(425, 775, '6 p, 8 n', { size: 17, anchor: 'middle', fill: C.muted });
  b += tl(560, 700, ['Same element (Z = 6).', 'Carbon-14 is unstable', 'and radioactive.'], { size: 18 }, 25);
  add('01-nuclide-notation',
    svg(900, 810, 'Reading a nuclide symbol', b),
    'The symbol for carbon-14 with mass number 14 at the top left (protons plus neutrons) and atomic number 6 at the bottom left (protons only), so it has 14 − 6 = 8 neutrons. Carbon-12 and carbon-14 both have Z = 6, so they are isotopes; carbon-14 is radioactive.',
    'Top number: protons + neutrons. Bottom number: protons. Neutrons = A − Z.',
    '## Atoms and nuclide notation (7.2, 7.3)');
}

// 02 The four emissions and their effect on A and Z
{
  const rows = [
    ['α', 'Alpha', '2 protons + 2 neutrons', '(a helium nucleus)', [4, 2, 'He'], '+2', '−4', '−2', C.rust],
    ['β⁻', 'Beta-minus', 'fast electron', 'from the nucleus', [0, '−1', 'e'], '−1', '0', '+1', C.tealDark],
    ['γ', 'Gamma', 'electromagnetic wave', 'removes energy only', [0, 0, 'γ'], '0', '0', '0', C.olive],
    ['n', 'Neutron', 'a neutron', '', [1, 0, 'n'], '0', '−1', '0', C.blue],
  ];
  let b = '';
  const x = [30, 150, 420, 560, 680, 780];
  b += box(30, 110, 840, 50, C.ink, C.ink, 10, 0);
  ['', 'Nature', 'Symbol', 'Charge', 'A', 'Z'].forEach((h, i) => (b += t(i === 0 ? 90 : i === 1 ? 160 : x[i] + 50, 143, h, { size: 18, weight: 700, fill: '#ffffff', anchor: i === 1 ? 'start' : 'middle' })));
  rows.forEach(([s, name, n1, n2, sym, q, dA, dZ, col], i) => {
    const y = 172 + i * 112;
    b += box(30, y, 840, 100, i % 2 ? C.panel : '#f8faf9', C.panelEdge, 10, 2);
    b += circ(70, y + 50, 26, C.panel, col, 3.5) + t(70, y + 59, s, { size: 22, weight: 700, anchor: 'middle', fill: col });
    b += t(160, y + 36, name, { size: 18, weight: 700 }) + tl(160, y + 62, [n1, n2], { size: 15, fill: C.muted }, 20);
    b += nuc(x[2] + 50, y + 62, sym[0], sym[1], sym[2], 30);
    b += t(x[3] + 50, y + 58, q, { size: 20, weight: 700, anchor: 'middle' });
    b += t(x[4] + 50, y + 58, dA, { size: 22, weight: 700, anchor: 'middle', fill: dA === '0' ? C.muted : C.rust });
    b += t(x[5] + 50, y + 58, dZ, { size: 22, weight: 700, anchor: 'middle', fill: dZ === '0' ? C.muted : C.rust });
  });
  // fix name/nature overlap: put name above nature in col 1
  b += panel(30, 630, 840, 150, C.cream, C.olive);
  b += t(60, 668, 'Beta-minus decay inside the nucleus', { size: 19, weight: 700 });
  b += circ(110, 725, 22, C.rock) + t(110, 732, 'n', { size: 20, weight: 700, anchor: 'middle' });
  b += arrow(145, 725, 225, 725, { w: 3.5 });
  b += circ(265, 725, 22, C.mustard) + t(265, 732, 'p', { size: 20, weight: 700, anchor: 'middle' }) + t(305, 733, '+', { size: 24, weight: 700, anchor: 'middle' });
  b += circ(340, 725, 13, C.teal) + t(340, 731, 'e', { size: 17, weight: 700, anchor: 'middle' }) + arrow(358, 725, 420, 725, { color: C.tealDark, marker: 'ahT', w: 3 }) + t(430, 731, 'emitted', { size: 16, fill: C.tealDark, weight: 600 });
  b += tl(540, 712, ['One more proton: Z rises by 1.', 'Nucleon total unchanged: A same.'], { size: 17 }, 26);
  add('02-emissions-a-and-z',
    svg(900, 800, 'What each emission does to the nucleus', b),
    'A table of four emissions. Alpha: 2 protons and 2 neutrons, symbol ⁴₂He, charge +2, A falls by 4 and Z by 2. Beta-minus: a fast electron from the nucleus, ⁰₋₁e, charge −1, A unchanged, Z rises by 1. Gamma: an electromagnetic wave, ⁰₀γ, no change. Neutron: ¹₀n, A falls by 1, Z unchanged. In beta-minus decay a neutron becomes a proton and the electron is emitted.',
    'Alpha: A −4, Z −2. Beta-minus: Z +1. Gamma: no change. Neutron: A −1.',
    '## The radiations (7.4, 7.5, 7.7)');
}

// 03 Balancing nuclear equations
{
  const eq = (y, title, parts, chkTop, chkBot, note) => {
    let o = panel(30, y, 840, 190) + t(60, y + 38, title, { size: 20, weight: 700 });
    const xs = [150, 250, 335, 425, 495];
    parts.forEach((p, i) => {
      if (typeof p === 'string') o += t(xs[i], y + 108, p, { size: 32, weight: 700, anchor: 'middle', fill: C.muted });
      else o += nuc(xs[i], y + 108, p[0], p[1], p[2], 38, p[3] || C.ink);
    });
    o += box(590, y + 58, 260, 100, C.tealLight, C.tealDark, 10, 2);
    o += t(610, y + 92, `top: ${chkTop}`, { size: 17, weight: 600 }) + t(610, y + 124, `bottom: ${chkBot}`, { size: 17, weight: 600 });
    o += t(60, y + 172, note, { size: 15, fill: C.muted });
    return o;
  };
  let b = eq(110, 'Alpha decay', [[226, 88, 'Ra'], '→', [222, 86, 'Rn'], '+', [4, 2, 'He', C.rust]], '226 = 222 + 4', '88 = 86 + 2', '');
  b += eq(320, 'Beta-minus decay', [[90, 38, 'Sr'], '→', [90, 39, 'Y'], '+', [0, '−1', 'e', C.tealDark]], '90 = 90 + 0', '38 = 39 + (−1)', '');
  b += eq(530, 'Neutron emission (illustrative nucleus X)', [[87, 36, 'X'], '→', [86, 36, 'X'], '+', [1, 0, 'n', C.blue]], '87 = 86 + 1', '36 = 36 + 0', 'Z unchanged, so same element: a lighter isotope.');
  b += panel(30, 740, 840, 70, C.cream, C.olive) + t(450, 783, 'Top numbers balance (mass) and bottom numbers balance (charge).', { size: 18, weight: 700, anchor: 'middle' });
  add('03-balancing-equations',
    svg(900, 830, 'Balancing nuclear equations', b),
    'Three nuclear equations with checks. Alpha: radium-226 (Z 88) becomes radon-222 (Z 86) plus helium-4 (Z 2): 226 = 222 + 4 and 88 = 86 + 2. Beta-minus: strontium-90 (Z 38) becomes yttrium-90 (Z 39) plus an electron (Z −1). Neutron emission: X-87 becomes X-86 plus a neutron, with Z 36 unchanged.',
    'Check both rows: top numbers and bottom numbers must each add up.',
    '## Balancing nuclear equations (7.8)');
}

// 04 Penetration practical
{
  let b = panel(30, 110, 840, 330);
  // source in holder
  b += box(70, 230, 90, 70, '#e7ecef', C.ink, 6, 2.5) + t(115, 272, 'source', { size: 16, weight: 700, anchor: 'middle' });
  b += t(115, 325, 'tongs, point', { size: 15, anchor: 'middle', fill: C.muted }) + t(115, 343, 'away from people', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(165, 265, 330, 265, { color: C.rust, marker: 'ahR', w: 3.5, dash: '8 6' });
  // absorber
  b += box(345, 190, 26, 150, C.cream, C.olive, 3, 2.5) + t(358, 178, 'absorber', { size: 16, weight: 700, anchor: 'middle' });
  b += arrow(378, 265, 500, 265, { color: C.rust, marker: 'ahR', w: 3.5, dash: '8 6' });
  // GM tube
  b += box(510, 242, 150, 46, C.panel, C.ink, 22, 3) + box(510, 242, 30, 46, C.tealLight, C.ink, 6, 2.5) + t(600, 271, 'G-M tube', { size: 15, weight: 700, anchor: 'middle' });
  b += path('M660,265 Q700,265 720,240', { w: 2.5 });
  b += box(720, 180, 120, 100, C.ink, C.ink, 8, 0) + box(732, 196, 96, 44, '#e9f5ec', C.ink, 4, 1) + t(780, 226, '0372', { size: 22, weight: 700, anchor: 'middle' }) + t(780, 266, 'counter', { size: 15, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += ln(160, 380, 510, 380, { w: 2 }) + t(335, 405, 'fixed distance', { size: 15, anchor: 'middle', fill: C.muted }).replace('y="405"', 'y="402"');
  b += ln(160, 370, 160, 390, { w: 2 }) + ln(510, 370, 510, 390, { w: 2 });
  // absorber ladder
  const ab = [['paper', C.cream], ['thicker and thicker aluminium', C.rock], ['lead', '#5f6b7a']];
  b += panel(30, 460, 840, 160);
  b += t(60, 496, 'Absorbers in order', { size: 19, weight: 700 });
  ab.forEach(([n, f], i) => { const x = 60 + i * 270; b += box(x, 516, 250, 44, f, C.ink, 6, 2) + t(x + 125, 544, n, { size: 15, weight: 700, anchor: 'middle', fill: i === 2 ? '#ffffff' : C.ink }); if (i < 2) b += arrow(x + 252, 538, x + 268, 538, { w: 2.5 }); });
  b += t(60, 598, 'The absorber that brings the corrected count rate to about zero identifies the radiation.', { size: 16, fill: C.tealDark, weight: 600 });
  b += panel(30, 640, 840, 210, C.cream, C.olive);
  b += tl(60, 678, ['1. Measure the background count rate with no source.', '2. Source at a fixed distance from the tube: record the count rate.', '3. Add paper, then aluminium of increasing thickness, then lead.', '4. Subtract the background from every reading.', 'Safety: tongs, point it away, keep your distance, short time out of its box.'], { size: 17 }, 34);
  add('04-penetration-practical',
    svg(900, 870, 'Practical: what stops the radiation?', b),
    'A source held at a fixed distance from a Geiger-Müller tube connected to a counter, with an absorber between them. Paper, then aluminium of increasing thickness, then lead are added, recording the count rate each time and subtracting background; the absorber that brings the corrected count to about zero identifies the radiation.',
    'Subtract background, then find which absorber brings the count to about zero.',
    '## The penetration practical (7.6)');
}

// 05 Detection and background
{
  let b = panel(30, 110, 410, 230) + t(235, 146, 'Photographic film', { size: 19, weight: 700, anchor: 'middle' });
  b += box(80, 175, 310, 100, '#eef1f3', C.ink, 6, 2.5) + `<rect x="200" y="177" width="130" height="96" fill="#4a5568"/>` + t(265, 300, 'darkens where exposed', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(460, 110, 410, 230) + t(665, 146, 'Geiger-Müller tube + counter', { size: 19, weight: 700, anchor: 'middle' });
  b += box(500, 205, 160, 46, C.panel, C.ink, 22, 3) + box(500, 205, 30, 46, C.tealLight, C.ink, 6, 2.5) + path('M660,228 Q690,228 710,210', { w: 2.5 }) + box(710, 180, 120, 80, C.ink, C.ink, 8, 0) + box(722, 192, 96, 40, '#e9f5ec', C.ink, 4, 1) + t(770, 220, '0024', { size: 20, weight: 700, anchor: 'middle' });
  b += t(665, 300, 'counts each ionising event', { size: 16, anchor: 'middle', fill: C.muted });
  // background
  b += panel(30, 360, 840, 470);
  b += t(450, 398, 'Background radiation is always present', { size: 21, weight: 700, anchor: 'middle' });
  // person center
  const px = 450, py = 600;
  b += circ(px, py - 70, 22, C.cream, C.ink, 3) + box(px - 28, py - 46, 56, 90, '#dce6f0', C.ink, 10, 3) + ln(px - 14, py + 44, px - 14, py + 90, { w: 3 }) + ln(px + 14, py + 44, px + 14, py + 90, { w: 3 });
  const src = (x, y, title, lines, fill, edge) => box(x, y, 262, 36 + lines.length * 22, fill, edge, 10, 2.5) + t(x + 14, y + 24, title, { size: 17, weight: 700 }) + tl(x + 14, y + 48, lines, { size: 15, fill: C.ink }, 21);
  b += t(60, 440, 'From space', { size: 18, weight: 700, fill: C.blue });
  b += src(60, 452, 'Cosmic rays', ['from the Sun and beyond; mostly', 'absorbed by the atmosphere,', 'so more at altitude'], C.tealLight, C.tealDark);
  b += t(60, 600, 'From Earth', { size: 18, weight: 700, fill: C.olive });
  b += src(60, 612, 'Rocks, soil, building', ['materials made from them'], C.cream, C.olive);
  b += src(578, 452, 'Radon gas', ['seeps out of the ground'], C.cream, C.olive);
  b += src(578, 560, 'Food and drink', ['e.g. potassium-40'], C.cream, C.olive);
  b += src(578, 668, 'Human activity', ['medical X-rays, nuclear', 'industry: a smaller amount'], '#eef1f3', C.muted);
  [[326, 500], [326, 650], [576, 480], [576, 588], [576, 700]].forEach(([x, y]) => (b += arrow(x, y, x < px ? px - 40 : px + 40, (y + py - 10) / 2 + 0, { w: 2.5, dash: '6 5' })));
  b += t(450, 812, 'Subtract the background count before using any reading.', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-detection-background',
    svg(900, 850, 'Detecting radiation and background', b),
    'Radiation is detected by photographic film, which darkens where exposed, or by a Geiger-Müller tube and counter. Background radiation reaches a person from space as cosmic rays, mostly absorbed by the atmosphere, and from Earth as rocks, soil and building materials, radon gas from the ground, and food and drink such as potassium-40; medical X-rays and nuclear industry add a smaller amount.',
    'Background radiation comes from Earth and space, with a smaller human-made share.',
    '## Detection and background (7.9, 7.10)');
}

// 06 Half-life from a graph
{
  let b = panel(30, 110, 840, 600);
  const ox = 130, oy = 600, sx = 48, sy = 0.44; // px per h, px per Bq
  for (let h = 0; h <= 14; h += 2) b += ln(ox + h * sx, oy, ox + h * sx, oy - 1000 * sy, { color: C.tealLight, w: 1 }) + t(ox + h * sx, oy + 24, String(h), { size: 15, anchor: 'middle', fill: C.muted });
  for (let a = 0; a <= 1000; a += 100) b += ln(ox, oy - a * sy, ox + 14 * sx, oy - a * sy, { color: C.tealLight, w: 1 }) + (a % 200 === 0 ? t(ox - 10, oy - a * sy + 5, String(a), { size: 15, anchor: 'end', fill: C.muted }) : '');
  b += ln(ox, oy, ox + 14 * sx + 8, oy, { w: 3 }) + ln(ox, oy, ox, oy - 1000 * sy - 8, { w: 3 });
  b += t(ox + 7 * sx, oy + 52, 'time / h', { size: 17, weight: 600, anchor: 'middle' }) + vtext(ox - 62, oy - 500 * sy, 'activity / Bq', 17);
  const A = (h) => 900 * Math.pow(2, -h / 3.2);
  const pts = []; for (let h = 0; h <= 14; h += 0.2) pts.push(`${(ox + h * sx).toFixed(1)},${(oy - A(h) * sy).toFixed(1)}`);
  b += path(`M${pts.join(' L')}`, { stroke: C.rust, w: 4 });
  const guide = (a, h1, h2, col) => {
    const y1 = oy - a * sy, y2 = oy - (a / 2) * sy, x1 = ox + h1 * sx, x2 = ox + h2 * sx;
    return ln(ox, y1, x1, y1, { color: col, w: 2.5, dash: '7 5' }) + ln(x1, y1, x1, oy, { color: col, w: 2.5, dash: '7 5' }) +
      ln(ox, y2, x2, y2, { color: col, w: 2.5, dash: '7 5' }) + ln(x2, y2, x2, oy, { color: col, w: 2.5, dash: '7 5' });
  };
  b += guide(900, 0, 3.2, C.tealDark) + guide(600, 1.9, 5.1, C.blue);
  b += t(ox + 3.2 * sx + 8, oy - 450 * sy - 10, '450 Bq at 3.2 h', { size: 15, weight: 700, fill: C.tealDark });
  b += t(ox + 5.1 * sx + 8, oy - 300 * sy - 10, '300 Bq at 5.1 h', { size: 15, weight: 700, fill: C.blue });
  b += t(ox + 1.9 * sx + 8, oy - 600 * sy - 10, '600 Bq at 1.9 h', { size: 15, weight: 700, fill: C.blue });
  b += t(ox + 8, oy - 900 * sy - 10, '900 Bq at 0', { size: 15, weight: 700, fill: C.tealDark });
  b += circ(ox + 12.8 * sx, oy - A(12.8) * sy, 6, C.mustard, C.ink, 2) + t(ox + 12.8 * sx, oy - A(12.8) * sy - 16, '≈ 56 Bq', { size: 15, weight: 700, anchor: 'middle' });
  b += box(560, 150, 290, 190, C.cream, C.olive, 12);
  b += tl(578, 184, ['3.2 − 0 = 3.2 h', '5.1 − 1.9 = 3.2 h', 'half-life = 3.2 h'], { size: 18, weight: 600 }, 30);
  b += t(578, 290, 'After 4 half-lives (12.8 h):', { size: 15, fill: C.muted }) + t(578, 316, '900 ÷ 2⁴ = 900 ÷ 16 ≈ 56 Bq', { size: 16, weight: 700 });
  b += t(450, 690, 'Illustrative figures from the lesson. Take two readings and average.', { size: 15, anchor: 'middle', fill: C.muted })
  add('06-half-life-graph',
    svg(900, 730, 'Finding half-life from a decay curve', b),
    'A decay curve of activity against time. Construction lines show the activity falling from 900 Bq at 0 h to 450 Bq at 3.2 h, and from 600 Bq at 1.9 h to 300 Bq at 5.1 h; both give a half-life of 3.2 h. After four half-lives, 12.8 h, the activity is 900 ÷ 16 ≈ 56 Bq.',
    'Halve the activity twice from different starting points; both give 3.2 h.',
    '## Activity and half-life (7.11 to 7.13)');
}

// 07 Uses: radiation chosen for penetration and half-life
{
  const rows = [
    ['Smoke detector', 'α', 'ionises air so a tiny current flows; smoke absorbs α, current drops, alarm sounds; cannot escape the casing', C.rust],
    ['Paper or foil thickness', 'β', 'partly absorbed, so the count changes with thickness', C.tealDark],
    ['Leaks in underground pipes', 'γ', 'short half-life tracer in the fluid; a detector above ground finds where the count rises', C.olive],
    ['Sterilising equipment, food', 'γ', 'passes through packaging and kills bacteria; the item does not become radioactive', C.olive],
    ['Medical tracer', 'γ', 'detected from outside the body; short half-life, so it decays quickly', C.olive],
    ['Radiotherapy', 'γ', 'carefully aimed beams kill cancer cells', C.olive],
  ];
  let b = box(30, 110, 840, 50, C.ink, C.ink, 10, 0) + t(60, 143, 'Use', { size: 18, weight: 700, fill: '#fff' }) + t(320, 143, 'Type', { size: 18, weight: 700, fill: '#fff', anchor: 'middle' }) + t(370, 143, 'Why this radiation', { size: 18, weight: 700, fill: '#fff' });
  const wrap = (s, n) => { const o = ['']; for (const w of s.split(' ')) { const c = o[o.length - 1]; if ((c + ' ' + w).trim().length > n && c) o.push(w); else o[o.length - 1] = (c + ' ' + w).trim(); } return o; };
  let y = 170;
  rows.forEach(([u, r, why, col], i) => {
    const L = wrap(why, 50), h = Math.max(70, 26 + L.length * 22);
    b += box(30, y, 840, h, i % 2 ? C.panel : '#f8faf9', C.panelEdge, 10, 2);
    b += tl(60, y + h / 2 - (wrap(u, 20).length - 1) * 11 + 6, wrap(u, 20), { size: 17, weight: 700 }, 22);
    b += circ(320, y + h / 2, 22, C.panel, col, 3) + t(320, y + h / 2 + 8, r, { size: 21, weight: 700, anchor: 'middle', fill: col });
    b += tl(370, y + h / 2 - (L.length - 1) * 11 + 6, L, { size: 16 }, 22);
    y += h + 8;
  });
  b += panel(30, y + 6, 840, 60, C.cream, C.olive) + t(450, y + 44, 'Choose by penetration and by half-life.', { size: 19, weight: 700, anchor: 'middle' });
  add('07-uses',
    svg(900, y + 90, 'Uses of radioactivity', b),
    'A table of uses. Smoke detectors use alpha, which ionises the air and is absorbed by smoke. Paper and foil thickness monitoring uses beta, which is partly absorbed. Finding pipe leaks, sterilising equipment and food, medical tracers and radiotherapy all use gamma, chosen for its penetration and, for tracers, a short half-life.',
    'Each use matches a radiation’s penetration and the isotope’s half-life.',
    '## Uses in industry and medicine (7.14)');
}

// 08 Irradiation vs contamination
{
  const person = (x, y) => circ(x, y - 70, 22, C.cream, C.ink, 3) + box(x - 28, y - 46, 56, 90, '#dce6f0', C.ink, 10, 3) + ln(x - 14, y + 44, x - 14, y + 90, { w: 3 }) + ln(x + 14, y + 44, x + 14, y + 90, { w: 3 });
  let b = panel(30, 110, 410, 470) + t(235, 148, 'Irradiation', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += box(60, 250, 90, 60, C.cream, C.olive, 8) + t(105, 286, 'source', { size: 16, weight: 700, anchor: 'middle' });
  [-30, 0, 30].forEach((d) => (b += arrow(155, 280 + d * 0.5, 280, 280 + d, { color: C.olive, marker: 'ahO', w: 3 })));
  b += person(340, 300);
  b += tl(60, 440, ['Radiation from a source', 'outside the body.', 'Stops when you move away', 'or the source is removed.', 'You do not become radioactive.'], { size: 17 }, 25);
  b += panel(460, 110, 410, 470) + t(665, 148, 'Contamination', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
  b += person(665, 300);
  [[640, 240], [688, 268], [655, 300], [690, 325], [620, 205]].forEach(([x, y]) => (b += circ(x, y, 7, C.rust, C.ink, 1.5)));
  b += arrow(688, 268, 760, 240, { color: C.rust, marker: 'ahR', w: 2.5 }) + arrow(655, 300, 580, 330, { color: C.rust, marker: 'ahR', w: 2.5 }) + arrow(620, 205, 570, 180, { color: C.rust, marker: 'ahR', w: 2.5 });
  b += tl(490, 440, ['Radioactive material on or in', 'the body (dust on skin, gas', 'breathed in). Keeps irradiating', 'until removed. Alpha inside the', 'body is the most dangerous.'], { size: 17 }, 25);
  b += panel(30, 600, 840, 200, C.cream, C.olive);
  b += t(60, 638, 'Ionising radiation damages cells and can cause DNA mutations, leading to cancer.', { size: 17, weight: 700 });
  b += t(60, 676, 'Workers reduce their dose:', { size: 17, weight: 700 });
  ['limit time', 'keep distance', 'use shielding'].forEach((s, i) => (b += box(60 + i * 260, 694, 240, 46, C.panel, C.olive, 10, 2) + t(180 + i * 260, 724, s, { size: 18, weight: 700, anchor: 'middle' })));
  b += t(60, 776, 'Waste: sealed, shielded (concrete, lead, water), stored deep underground, monitored.', { size: 16, fill: C.muted });
  add('08-irradiation-contamination',
    svg(900, 820, 'Irradiation and contamination', b),
    'Irradiation: a source outside the body sends radiation to a person; it stops when they move away or the source is removed, and they do not become radioactive. Contamination: radioactive material on or in the body keeps irradiating until removed, and alpha inside the body is most dangerous. Workers limit time, keep their distance and use shielding.',
    'Irradiation stops when you leave the source; contamination stays with you.',
    '## Contamination, irradiation and dangers (7.15, 7.16)');
}
