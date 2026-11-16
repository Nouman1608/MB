import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-sciences-cells-and-organisms';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const GREEN = '#a9c48f', CYTO = '#fbf6e2';
const lead = (lx, ly, px, py, label, { anchor = 'start', size = 16, weight = 600, fill = C.ink } = {}) =>
  `<line x1="${lx}" y1="${ly}" x2="${px}" y2="${py}" stroke="${C.ink}" stroke-width="1.8"/><circle cx="${px}" cy="${py}" r="3.5" fill="${C.ink}"/>` +
  t(anchor === 'start' ? lx + 6 : lx - 6, ly + 5, label, { size, weight, anchor, fill });
const mito = (x, y, rot = 0, s = 1) => `<g transform="translate(${x},${y}) rotate(${rot}) scale(${s})"><ellipse cx="0" cy="0" rx="22" ry="11" fill="#e8b48f" stroke="${C.ink}" stroke-width="2"/>` +
  `<path d="M-15,0 q4,-8 7,0 q4,8 7,0 q4,-8 7,0 q4,8 7,0" fill="none" stroke="${C.rust}" stroke-width="1.8"/></g>`;
const chloro = (x, y, rot = 0, s = 1) => `<g transform="translate(${x},${y}) rotate(${rot}) scale(${s})"><ellipse cx="0" cy="0" rx="18" ry="10" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>` +
  `<line x1="-10" y1="-3" x2="10" y2="-3" stroke="#d8e3c6" stroke-width="1.6"/><line x1="-10" y1="3" x2="10" y2="3" stroke="#d8e3c6" stroke-width="1.6"/></g>`;
const ribos = (pts) => pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="${C.ink}"/>`).join('');
const nucleus = (x, y, r = 30) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#c9b6dd" stroke="${C.ink}" stroke-width="2.5"/><circle cx="${x + 5}" cy="${y - 4}" r="${r * 0.3}" fill="#9a84b8"/>`;

// 01 Animal, plant and bacterial cells
{
  let b = panel(30, 110, 410, 450) + panel(460, 110, 410, 450) + panel(30, 580, 840, 320);
  b += t(60, 148, 'Animal cell', { size: 22, weight: 700 }) + t(60, 172, 'eukaryotic', { size: 16, fill: C.tealDark, weight: 600 });
  b += t(490, 148, 'Plant cell', { size: 22, weight: 700 }) + t(490, 172, 'eukaryotic', { size: 16, fill: C.tealDark, weight: 600 });
  b += t(60, 618, 'Bacterial cell', { size: 22, weight: 700 }) + t(60, 642, 'prokaryotic: no nucleus', { size: 16, fill: C.rust, weight: 600 });
  // animal
  b += path('M60,350 C55,270 120,215 190,222 C255,228 285,280 280,340 C276,410 230,455 160,450 C95,446 63,410 60,350 Z', { fill: CYTO, stroke: C.ink, w: 3 });
  b += nucleus(160, 335, 34) + mito(110, 270, 20) + mito(235, 395, -30) + mito(220, 270, 60, 0.9) +
    ribos([[100, 380], [115, 400], [130, 415], [245, 320], [255, 345], [90, 330], [205, 425], [180, 250]]);
  b += lead(310, 220, 255, 255, 'cell membrane') + lead(310, 265, 225, 270, 'mitochondrion') + lead(310, 310, 194, 330, 'nucleus') +
    lead(310, 400, 250, 336, 'ribosomes') + lead(310, 445, 200, 420, 'cytoplasm');
  // plant
  b += `<rect x="500" y="195" width="190" height="320" rx="6" fill="${GREEN}" stroke="${C.ink}" stroke-width="3"/>` +
    `<rect x="512" y="207" width="166" height="296" rx="4" fill="${CYTO}" stroke="${C.ink}" stroke-width="2"/>` +
    `<rect x="540" y="245" width="110" height="215" rx="22" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` +
    nucleus(652, 228, 18) + chloro(526, 300, 90, 0.85) + chloro(527, 380, 90, 0.85) + chloro(665, 295, 90, 0.85) + chloro(664, 420, 90, 0.85) + chloro(600, 482, 0, 0.85) + chloro(570, 226, 0, 0.85) +
    mito(663, 355, 90, 0.7) + mito(540, 485, 0, 0.7) + ribos([[527, 440], [526, 460], [666, 470], [666, 300], [645, 488]]);
  b += lead(730, 200, 690, 205, 'cell wall') + lead(730, 237, 678, 248, 'cell membrane') + lead(730, 274, 663, 236, 'nucleus') +
    lead(730, 311, 672, 300, 'chloroplast') + lead(730, 348, 650, 330, 'vacuole') + lead(730, 385, 668, 362, 'mitochondrion') +
    lead(730, 422, 666, 470, 'ribosomes') + lead(730, 459, 620, 492, 'cytoplasm');
  // bacterium
  const bx = 180, by = 760;
  b += `<rect x="${bx}" y="${by - 72}" width="340" height="144" rx="72" fill="none" stroke="${C.muted}" stroke-width="2.5" stroke-dasharray="7 6"/>` +
    `<rect x="${bx + 12}" y="${by - 60}" width="316" height="120" rx="60" fill="${GREEN}" stroke="${C.ink}" stroke-width="3"/>` +
    `<rect x="${bx + 22}" y="${by - 50}" width="296" height="100" rx="50" fill="${CYTO}" stroke="${C.ink}" stroke-width="2"/>` +
    path(`M${bx + 130},${by - 10} C${bx + 150},${by - 40} ${bx + 200},${by - 30} ${bx + 210},${by - 5} C${bx + 220},${by + 25} ${bx + 160},${by + 35} ${bx + 140},${by + 15} C${bx + 120},${by} ${bx + 160},${by - 20} ${bx + 180},${by}`, { stroke: C.blue, w: 3 }) +
    `<circle cx="${bx + 80}" cy="${by - 15}" r="11" fill="none" stroke="${C.rust}" stroke-width="2.5"/><circle cx="${bx + 265}" cy="${by + 18}" r="9" fill="none" stroke="${C.rust}" stroke-width="2.5"/>` +
    ribos([[bx + 70, by + 22], [bx + 95, by + 30], [bx + 250, by - 22], [bx + 270, by - 12], [bx + 230, by + 30], [bx + 110, by + 8]]) +
    path(`M${bx},${by} q-20,-20 -40,0 q-20,20 -40,0 q-20,-20 -40,0`, { stroke: C.ink, w: 3 });
  b += lead(600, 666, bx + 300, by - 62, 'capsule (some bacteria)') + lead(600, 698, bx + 318, by - 30, 'cell wall (not cellulose)') + lead(600, 730, bx + 312, by - 10, 'cell membrane') +
    lead(600, 762, bx + 207, by - 10, 'circular DNA') + lead(600, 794, bx + 274, by + 18, 'plasmid') + lead(600, 826, bx + 232, by + 30, 'ribosomes (smaller)') +
    `<line x1="${bx + 150}" y1="${by + 40}" x2="${bx + 150}" y2="${by + 92}" stroke="${C.ink}" stroke-width="1.8"/><circle cx="${bx + 150}" cy="${by + 40}" r="3.5" fill="${C.ink}"/>` + t(bx + 150, by + 112, 'cytoplasm', { size: 16, weight: 600, anchor: 'middle' });
  b += t(85, 845, 'flagellum', { size: 16, weight: 600 }) + `<line x1="110" y1="828" x2="110" y2="770" stroke="${C.ink}" stroke-width="1.8"/>`;
  add('01-animal-plant-bacterial-cells',
    svg(900, 930, 'Animal, plant and bacterial cells', b, 'Simplified, not to scale'),
    'Labelled animal cell with membrane, cytoplasm, nucleus, mitochondria and ribosomes. Plant cell adds a cellulose cell wall, chloroplasts and a large permanent vacuole. Bacterial cell has no nucleus: circular DNA and plasmids lie in the cytoplasm, with ribosomes, a cell membrane, a cell wall, and in some a capsule and flagellum.',
    'Plant cells add a wall, chloroplasts and a vacuole; bacteria have no nucleus.',
    '## Cell structure: animal, plant and bacterial cells');
}

// 02 Light microscope, total magnification, resolution
{
  let b = panel(30, 110, 430, 680);
  // microscope
  b += `<rect x="90" y="720" width="250" height="38" rx="10" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>`;
  b += path('M300,720 L300,470 Q300,300 240,280', { stroke: C.ink, w: 26 }) + path('M300,720 L300,470 Q300,300 240,280', { stroke: C.rock, w: 19 });
  b += `<rect x="185" y="215" width="50" height="205" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<rect x="192" y="160" width="36" height="55" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<path d="M160,420 L260,420 L250,445 L170,445 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<rect x="200" y="445" width="20" height="55" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<path d="M175,445 L163,485 L177,489 L188,447 Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<path d="M245,445 L257,485 L243,489 L232,447 Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="110" y="530" width="210" height="18" fill="${C.ink}"/>` + `<rect x="160" y="520" width="100" height="10" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<circle cx="300" cy="450" r="16" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<circle cx="210" cy="660" r="20" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + `<line x1="210" y1="640" x2="210" y2="550" stroke="${C.mustard}" stroke-width="3" stroke-dasharray="6 5"/>` + `<rect x="185" y="680" width="50" height="40" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += lead(260, 150, 228, 185, 'eyepiece lens ×10', { size: 17 }) + lead(130, 485, 205, 485, 'objective', { anchor: 'end', size: 17 }) + t(124, 506, 'lens ×40', { size: 17, weight: 600, anchor: 'end' }) +
    lead(130, 590, 175, 525, 'slide on', { anchor: 'end', size: 17 }) + t(124, 611, 'the stage', { size: 17, weight: 600, anchor: 'end' }) + lead(130, 660, 190, 660, 'light source', { anchor: 'end', size: 17 }) +
    lead(340, 400, 306, 440, 'focusing', { size: 17 }) + t(346, 421, 'knob', { size: 17, weight: 600 });
  // right
  b += panel(480, 110, 390, 300, C.cream, C.olive) + t(675, 150, 'Total magnification', { size: 22, weight: 700, anchor: 'middle' });
  b += t(675, 192, 'eyepiece × objective', { size: 18, anchor: 'middle', fill: C.muted });
  b += t(675, 260, '×10 × ×40', { size: 34, weight: 700, anchor: 'middle' }) + t(675, 330, '= ×400', { size: 40, weight: 700, anchor: 'middle', fill: C.olive });
  b += t(675, 380, 'A light microscope: up to about ×1500', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(480, 430, 390, 360) + t(675, 470, 'Magnification ≠ resolution', { size: 22, weight: 700, anchor: 'middle' });
  b += tl(505, 502, ['Resolution: seeing two close', 'points as separate.'], { size: 17, fill: C.muted }, 22);
  const blur = (cx, cy) => `<ellipse cx="${cx}" cy="${cy}" rx="58" ry="34" fill="${C.teal}" opacity="0.55"/><ellipse cx="${cx}" cy="${cy}" rx="38" ry="22" fill="${C.tealDark}" opacity="0.45"/>`;
  b += `<circle cx="580" cy="620" r="70" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>` + blur(580, 620) + t(580, 718, 'low resolution:', { size: 16, anchor: 'middle', weight: 600 }) + t(580, 738, 'one blur', { size: 16, anchor: 'middle', fill: C.muted });
  b += `<circle cx="770" cy="620" r="70" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/><circle cx="745" cy="620" r="13" fill="${C.tealDark}"/><circle cx="795" cy="620" r="13" fill="${C.tealDark}"/>` +
    t(770, 718, 'high resolution:', { size: 16, anchor: 'middle', weight: 600 }) + t(770, 738, 'two points', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(675, 772, 'Enlarging a blur adds no detail.', { size: 17, anchor: 'middle', weight: 700, fill: C.rust });
  add('02-microscope-magnification',
    svg(900, 820, 'The light microscope', b),
    'A light microscope with a ×10 eyepiece lens, a ×40 objective lens, a slide on the stage, a focusing knob and a light source below. Total magnification is 10 × 40 = ×400. Beside it, low resolution shows two close points as one blur and high resolution shows them as two separate points.',
    'Total magnification = eyepiece × objective; more magnification does not mean more detail.',
    '## Microscopy and magnification');
}

// 03 Units and the sizes of cells
{
  let b = panel(30, 110, 840, 180);
  const unit = (x, s) => `<rect x="${x - 70}" y="160" width="140" height="80" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + t(x, 212, s, { size: 30, weight: 700, anchor: 'middle' });
  b += unit(150, 'mm') + unit(450, 'µm') + unit(750, 'nm');
  b += arrow(225, 185, 375, 185, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + t(300, 175, '× 1000', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += arrow(525, 185, 675, 185, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + t(600, 175, '× 1000', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += arrow(375, 220, 225, 220, { w: 3.5, color: C.rust, marker: 'ahR' }) + t(300, 248, '÷ 1000', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  b += arrow(675, 220, 525, 220, { w: 3.5, color: C.rust, marker: 'ahR' }) + t(600, 248, '÷ 1000', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(450, 278, 'smaller unit → bigger number', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(30, 310, 840, 360);
  b += t(60, 350, 'Sizes on a ×10 scale (each step is ten times bigger)', { size: 20, weight: 700 });
  const X = (lg) => 90 + (lg + 9) * 120; // lg = log10(metres)
  const ay = 530;
  b += `<line x1="70" y1="${ay}" x2="830" y2="${ay}" stroke="${C.ink}" stroke-width="3"/>`;
  [['1 nm', -9], ['10 nm', -8], ['100 nm', -7], ['1 µm', -6], ['10 µm', -5], ['100 µm', -4], ['1 mm', -3]].forEach(([s, lg]) => {
    b += `<line x1="${X(lg)}" y1="${ay - 8}" x2="${X(lg)}" y2="${ay + 8}" stroke="${C.ink}" stroke-width="2.5"/>` + t(X(lg), ay + 32, s, { size: 16, anchor: 'middle', weight: 600 });
  });
  const L = Math.log10;
  const mark = (a, c, col, ly, label, sub, anchor = 'middle', lx = null) => {
    const x1 = X(a), x2 = Math.max(X(c), X(a) + 10), mx = (x1 + x2) / 2, tx = lx ?? mx;
    const up = ly < ay;
    return `<line x1="${mx}" y1="${up ? ay - 10 : ay + 10}" x2="${mx}" y2="${up ? ly + 8 : ly - 20}" stroke="${C.muted}" stroke-width="1.8"/>` +
      `<rect x="${x1}" y="${ay - 9}" width="${x2 - x1}" height="18" rx="9" fill="${col}" stroke="${C.ink}" stroke-width="2"/>` +
      t(tx, ly, label, { size: 16, weight: 700, anchor }) + (sub ? t(tx, up ? ly - 20 : ly + 20, sub, { size: 15, anchor, fill: C.muted }) : '');
  };
  b += mark(-9.1, -9, C.rust, 430, 'electron microscope', 'resolution under 1 nm', 'start', 66);
  b += mark(L(200e-9) - 0.04, L(200e-9) + 0.04, C.mustard, 470, 'light microscope', 'resolution about 200 nm', 'middle', 320);
  b += mark(-6, L(5e-6), C.teal, 600, 'bacterium 1–5 µm', '');
  b += mark(-6.04, -5.96, C.grass, 410, 'mitochondrion', 'about 1 µm');
  b += mark(-5, L(30e-6), C.cream, 470, 'animal cell', '10–30 µm');
  b += t(450, 650, 'Anything smaller than the resolution limit cannot be seen as separate detail.', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-units-and-sizes',
    svg(900, 700, 'Units for tiny things', b),
    'Millimetres convert to micrometres and micrometres to nanometres by multiplying by 1000, and back by dividing by 1000. A ten-times scale places an electron microscope’s resolution under 1 nm, a light microscope’s at about 200 nm, a mitochondrion at about 1 µm, a bacterium at 1–5 µm and an animal cell at 10–30 µm.',
    'Each unit step is ×1000; put both sizes in the same unit before dividing.',
    '## Microscopy and magnification');
}

// 04 Magnification triangle + worked example 2
{
  let b = panel(30, 110, 360, 420);
  const tx = 210, ty = 150, tw = 280, th = 260;
  b += `<path d="M${tx},${ty} L${tx + tw / 2},${ty + th} L${tx - tw / 2},${ty + th} Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += `<line x1="${tx - tw / 4 - 8}" y1="${ty + th / 2 + 10}" x2="${tx + tw / 4 + 8}" y2="${ty + th / 2 + 10}" stroke="${C.ink}" stroke-width="3"/>` + `<line x1="${tx}" y1="${ty + th / 2 + 10}" x2="${tx}" y2="${ty + th}" stroke="${C.ink}" stroke-width="3"/>`;
  b += t(tx, ty + 95, 'image', { size: 19, weight: 700, anchor: 'middle' }) + t(tx, ty + 117, 'size', { size: 19, weight: 700, anchor: 'middle' });
  b += t(tx - 62, ty + 200, 'actual', { size: 18, weight: 700, anchor: 'middle' }) + t(tx - 62, ty + 222, 'size', { size: 18, weight: 700, anchor: 'middle' });
  b += t(tx + 62, ty + 200, 'magni-', { size: 18, weight: 700, anchor: 'middle' }) + t(tx + 62, ty + 222, 'fication', { size: 18, weight: 700, anchor: 'middle' });
  b += t(210, 455, 'Cover the one you want:', { size: 16, anchor: 'middle', fill: C.muted }) + t(95, 480, 'M = I ÷ A', { size: 17, anchor: 'middle', weight: 600 }) + t(210, 480, 'A = I ÷ M', { size: 17, anchor: 'middle', weight: 600 }) + t(325, 480, 'I = A × M', { size: 17, anchor: 'middle', weight: 600 });
  b += t(210, 510, 'Same unit for I and A first!', { size: 17, anchor: 'middle', weight: 700, fill: C.rust });
  // worked example
  b += panel(410, 110, 460, 420, C.panel);
  b += t(435, 148, 'Cheek cell: find the magnification', { size: 20, weight: 700 });
  b += tl(435, 178, ['actual size = 60 µm', 'image (drawing) = 30 mm'], { size: 17, fill: C.muted }, 23);
  const step = (y, n, a, c, fill) => badge(452, y + 26, 17, n, fill) + `<rect x="480" y="${y}" width="370" height="58" rx="12" fill="${fill === C.mustard ? C.cream : C.tealLight}"/>` + t(495, y + 25, a, { size: 17, weight: 600 }) + t(495, y + 48, c, { size: 17, weight: 700 });
  b += step(240, '1', 'Convert the image to µm:', '30 mm × 1000 = 30 000 µm', C.cream);
  b += step(315, '2', 'Divide image by actual:', '30 000 ÷ 60 = 500', C.cream);
  b += step(390, '3', 'Write it with a × and no unit:', '×500', C.mustard);
  b += t(640, 500, 'not “500 µm”', { size: 17, anchor: 'middle', fill: C.rust, weight: 700 });
  add('04-magnification-triangle',
    svg(900, 560, 'The magnification equation', b),
    'A formula triangle with image size on top and actual size times magnification below. A worked example converts a 30 mm drawing to 30 000 µm, divides by the 60 µm actual size and gets ×500, written with no unit.',
    'Convert to the same unit, divide image by actual, and write the answer as ×500.',
    '## Microscopy and magnification');
}

// 05 Scale bar worked example
{
  let b = panel(30, 110, 840, 360);
  b += `<rect x="60" y="140" width="460" height="300" rx="8" fill="#e9eee4" stroke="${C.ink}" stroke-width="2.5"/>`;
  // a plant cell 210 px long (42 mm), scale bar 125 px (25 mm)
  b += `<rect x="140" y="190" width="210" height="110" rx="6" fill="${GREEN}" stroke="${C.ink}" stroke-width="3"/><rect x="150" y="200" width="190" height="90" rx="4" fill="${CYTO}" stroke="${C.ink}" stroke-width="1.5"/>` +
    `<rect x="185" y="215" width="130" height="60" rx="16" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + chloro(165, 245, 90, 0.7) + chloro(330, 245, 90, 0.7) + nucleus(170, 215, 10);
  b += `<line x1="140" y1="330" x2="350" y2="330" stroke="${C.rust}" stroke-width="2.5" marker-start="url(#ahR)" marker-end="url(#ahR)"/>` + t(245, 356, 'measures 42 mm', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += `<rect x="370" y="400" width="125" height="10" fill="${C.ink}"/>` + t(432, 392, '50 µm', { size: 17, weight: 700, anchor: 'middle' }) + t(432, 432, 'bar measures 25 mm', { size: 15, anchor: 'middle', fill: C.muted });
  b += t(545, 160, '(a) Magnification', { size: 20, weight: 700 }) + tl(545, 192, ['bar image = 25 mm = 25 000 µm', 'M = 25 000 ÷ 50 = ×500'], { size: 17 }, 25);
  b += t(545, 275, '(b) Actual length of cell', { size: 20, weight: 700 }) + tl(545, 307, ['cell image = 42 mm = 42 000 µm', 'A = 42 000 ÷ 500 = 84 µm'], { size: 17 }, 25);
  b += `<rect x="545" y="372" width="300" height="74" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + tl(560, 402, ['A scale bar stays correct if the', 'picture is resized; “×500” does not.'], { size: 16, weight: 600 }, 22);
  add('05-scale-bar',
    svg(900, 500, 'Using a scale bar', b),
    'A micrograph of a plant cell that measures 42 mm, with a 50 µm scale bar that measures 25 mm. The bar gives 25 000 µm ÷ 50 µm = ×500, so the cell is 42 000 µm ÷ 500 = 84 µm long.',
    'Use the scale bar to find the magnification, then use it to find real sizes.',
    '## Microscopy and magnification');
}

// 06 Specialised cells
{
  const cw = 410, ch = 168, y0 = 110, g = 14;
  const card = (i, name, lines, art) => {
    const x = 30 + (i % 2) * (cw + 20), y = y0 + Math.floor(i / 2) * (ch + g);
    return panel(x, y, cw, ch) + art(x, y) + t(x + 160, y + 36, name, { size: 19, weight: 700 }) + tl(x + 160, y + 66, lines, { size: 16, fill: C.muted }, 22);
  };
  let b = '';
  b += card(0, 'Red blood cell', ['No nucleus: more room for', 'haemoglobin. Biconcave disc:', 'large surface area for oxygen', 'to diffuse in and out.'], (x, y) =>
    `<circle cx="${x + 60}" cy="${y + 58}" r="34" fill="#d9776a" stroke="${C.ink}" stroke-width="2.5"/><circle cx="${x + 60}" cy="${y + 58}" r="15" fill="#eaa79c"/>` +
    path(`M${x + 25},${y + 118} q0,-14 18,-14 q17,0 17,7 q0,-7 17,-7 q18,0 18,14 q0,14 -18,14 q-17,0 -17,-7 q0,7 -17,7 q-18,0 -18,-14 Z`, { fill: '#d9776a', w: 2.5 }) + t(x + 60, y + 155, 'side view', { size: 15, fill: C.muted, anchor: 'middle' }));
  b += card(1, 'Nerve cell (neurone)', ['Long axon: carries electrical', 'impulses over long distances.', 'Branched endings: connect', 'with many other cells.'], (x, y) =>
    `<circle cx="${x + 32}" cy="${y + 84}" r="16" fill="#c9b6dd" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x + 20},${y + 72} l-8,-14 M${x + 22},${y + 98} l-10,14 M${x + 32},${y + 68} l2,-16`, { w: 2.5 }) +
    path(`M${x + 48},${y + 84} L${x + 125},${y + 84}`, { w: 4 }) + path(`M${x + 125},${y + 84} l14,-16 M${x + 125},${y + 84} l18,0 M${x + 125},${y + 84} l14,16`, { w: 2.5 }) + t(x + 88, y + 110, 'axon', { size: 15, anchor: 'middle', fill: C.muted }));
  b += card(2, 'Sperm cell', ['Tail: swims to the egg.', 'Many mitochondria: energy', 'for swimming. Enzymes in', 'the head digest into the egg.'], (x, y) =>
    `<ellipse cx="${x + 40}" cy="${y + 84}" rx="24" ry="17" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${x + 63}" y="${y + 78}" width="28" height="12" rx="4" fill="#e8b48f" stroke="${C.ink}" stroke-width="2"/>` +
    path(`M${x + 91},${y + 84} q10,-12 20,0 q10,12 20,0 q8,-10 14,0`, { w: 2.5 }) + t(x + 40, y + 125, 'head', { size: 15, anchor: 'middle', fill: C.muted }) + t(x + 118, y + 125, 'tail', { size: 15, anchor: 'middle', fill: C.muted }));
  b += card(3, 'Ciliated cell (airways)', ['Tiny hairs called cilia sweep', 'mucus and trapped dust away', 'from the lungs.'], (x, y) => {
    let o = `<rect x="${x + 35}" y="${y + 60}" width="80" height="85" rx="6" fill="${CYTO}" stroke="${C.ink}" stroke-width="2.5"/>` + nucleus(x + 75, y + 112, 13);
    for (let k = 0; k < 8; k++) o += path(`M${x + 40 + k * 10},${y + 60} q5,-12 0,-24`, { w: 2 });
    return o + arrow(x + 40, y + 26, x + 120, y + 26, { w: 2.5, color: C.tealDark, marker: 'ahT' });
  });
  b += card(4, 'Root hair cell', ['Long, thin extension: large', 'surface area to absorb water', 'and mineral ions. No', 'chloroplasts: underground.'], (x, y) =>
    path(`M${x + 25},${y + 100} L${x + 25},${y + 145} L${x + 85},${y + 145} L${x + 85},${y + 100} L${x + 130},${y + 100} L${x + 130},${y + 86} L${x + 70},${y + 86} L${x + 70},${y + 100} Z`, { fill: CYTO, w: 2.5 }) +
    nucleus(x + 45, y + 125, 10) + t(x + 105, y + 76, 'root hair', { size: 15, anchor: 'middle', fill: C.muted }));
  b += card(5, 'Palisade cell (leaf)', ['Many chloroplasts, near the', 'upper surface: absorbs as', 'much light as possible for', 'photosynthesis.'], (x, y) => {
    let o = `<rect x="${x + 50}" y="${y + 22}" width="62" height="128" rx="8" fill="${CYTO}" stroke="${C.ink}" stroke-width="2.5"/>`;
    [[62, 38], [98, 42], [62, 68], [98, 74], [62, 100], [98, 104], [62, 132], [98, 134], [80, 56], [80, 118]].forEach(([dx, dy]) => { o += chloro(x + dx, y + dy, 0, 0.55); });
    return o;
  });
  b += card(6, 'Guard cells (leaf)', ['A pair of cells around a pore', '(stoma). They change shape', 'to open and close it, controlling', 'gas exchange and water loss.'], (x, y) =>
    path(`M${x + 80},${y + 40} C${x + 30},${y + 45} ${x + 30},${y + 125} ${x + 80},${y + 130} C${x + 58},${y + 110} ${x + 58},${y + 60} ${x + 80},${y + 40} Z`, { fill: GREEN, w: 2.5 }) +
    path(`M${x + 80},${y + 40} C${x + 130},${y + 45} ${x + 130},${y + 125} ${x + 80},${y + 130} C${x + 102},${y + 110} ${x + 102},${y + 60} ${x + 80},${y + 40} Z`, { fill: GREEN, w: 2.5 }) +
    t(x + 80, y + 155, 'stoma', { size: 15, anchor: 'middle', fill: C.muted }));
  {
    const x = 460, y = y0 + 3 * (ch + g);
    b += panel(x, y, cw, ch, C.cream, C.olive) + t(x + 24, y + 38, 'Answer pattern', { size: 20, weight: 700 });
    b += `<rect x="${x + 24}" y="${y + 60}" width="104" height="44" rx="10" fill="#fff" stroke="${C.olive}" stroke-width="2"/>` + t(x + 76, y + 88, 'feature', { size: 17, weight: 700, anchor: 'middle' });
    b += arrow(x + 130, y + 82, x + 150, y + 82, { w: 3 });
    b += `<rect x="${x + 153}" y="${y + 60}" width="104" height="44" rx="10" fill="#fff" stroke="${C.olive}" stroke-width="2"/>` + t(x + 205, y + 88, 'effect', { size: 17, weight: 700, anchor: 'middle' });
    b += arrow(x + 259, y + 82, x + 279, y + 82, { w: 3 });
    b += `<rect x="${x + 282}" y="${y + 60}" width="104" height="44" rx="10" fill="#fff" stroke="${C.olive}" stroke-width="2"/>` + t(x + 334, y + 88, 'function', { size: 17, weight: 700, anchor: 'middle' });
    b += t(x + 24, y + 140, 'Never give a feature without how it helps.', { size: 16, fill: C.muted });
  }
  add('06-specialised-cells',
    svg(900, 840, 'Specialised cells: structure fits job', b),
    'Seven specialised cells, each with its key features: red blood cell, neurone, sperm cell, ciliated cell, root hair cell, palisade cell and guard cells. A final card gives the answer pattern: feature, then its effect, then the link to function.',
    'Each specialised cell has features that suit one job; always link feature to function.',
    '## Specialised cells');
}

// 07 Levels of organisation
{
  const rows = [
    ['Cell', 'the basic unit', 'a muscle cell'],
    ['Tissue', 'similar cells working together', 'muscle tissue'],
    ['Organ', 'different tissues doing a job', 'stomach: muscle, glandular, lining tissues'],
    ['Organ system', 'organs working together', 'digestive system: stomach, intestines, liver, pancreas'],
    ['Organism', 'a whole living thing', 'a human'],
  ];
  const rh = 112, g = 12, y0 = 110;
  let b = '';
  rows.forEach(([name, def, eg], i) => {
    const y = y0 + i * (rh + g), cx = 120, cy = y + rh / 2;
    b += panel(30, y, 840, rh, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge);
    if (i === 0) b += `<ellipse cx="${cx}" cy="${cy}" rx="60" ry="16" fill="#e7a99c" stroke="${C.ink}" stroke-width="2.5"/>` + `<ellipse cx="${cx}" cy="${cy}" rx="9" ry="6" fill="#9a84b8"/>`;
    if (i === 1) for (let r = 0; r < 3; r++) for (let c = 0; c < 2; c++) b += `<ellipse cx="${cx - 32 + c * 64 + (r % 2) * 18}" cy="${cy - 26 + r * 26}" rx="32" ry="11" fill="#e7a99c" stroke="${C.ink}" stroke-width="2"/>`;
    if (i === 2) b += path(`M${cx - 40},${cy - 40} C${cx - 40},${cy - 10} ${cx - 50},${cy + 20} ${cx - 10},${cy + 38} C${cx + 30},${cy + 50} ${cx + 60},${cy + 20} ${cx + 50},${cy - 10} C${cx + 42},${cy - 34} ${cx + 10},${cy - 38} ${cx - 20},${cy - 40} Z`, { fill: '#e7a99c', w: 3 }) + path(`M${cx - 40},${cy - 40} L${cx - 40},${cy - 52}`, { w: 8 });
    if (i === 3) b += path(`M${cx - 20},${cy - 50} L${cx - 20},${cy - 25}`, { w: 6 }) + path(`M${cx - 20},${cy - 25} q30,-6 34,14 q0,18 -30,16 z`, { fill: '#e7a99c', w: 2.5 }) +
      path(`M${cx - 50},${cy - 30} q30,-10 26,12 q-14,8 -26,-12 z`, { fill: '#9c5b3a', w: 2.5 }) +
      path(`M${cx - 18},${cy + 5} q-30,4 -20,18 q20,10 40,0 q18,-10 -6,-16 q-30,-2 -24,14 q12,16 44,10`, { stroke: '#d0806e', w: 5 });
    if (i === 4) b += `<circle cx="${cx}" cy="${cy - 34}" r="13" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${cx},${cy - 21} L${cx},${cy + 18} M${cx - 26},${cy - 8} L${cx + 26},${cy - 8} M${cx},${cy + 18} L${cx - 16},${cy + 46} M${cx},${cy + 18} L${cx + 16},${cy + 46}`, { w: 4 });
    b += t(220, y + 46, name, { size: 23, weight: 700 }) + t(220, y + 76, def, { size: 17, fill: C.muted });
    b += t(850, y + 64, eg.length > 36 ? '' : eg, { size: 17, weight: 600, fill: C.tealDark, anchor: 'end' });
    if (eg.length > 36) { const [a, c] = eg.split(': '); b += t(850, y + 50, a + ':', { size: 17, weight: 600, fill: C.tealDark, anchor: 'end' }) + t(850, y + 74, c, { size: 16, fill: C.tealDark, anchor: 'end' }); }
  });
  for (let i = 0; i < 4; i++) { const y = y0 + i * (rh + g) + rh; b += `<circle cx="450" cy="${y + g / 2}" r="15" fill="${C.ink}"/>` + path(`M443,${y + g / 2 - 4} L450,${y + g / 2 + 4} L457,${y + g / 2 - 4}`, { stroke: '#fff', w: 3 }); }
  b += t(450, y0 + 5 * (rh + g) + 18, 'Plants too: a leaf is an organ. Single-celled organisms have no tissues or organs.', { size: 16, anchor: 'middle', fill: C.muted });
  add('07-levels-of-organisation',
    svg(900, 760, 'Levels of organisation', b),
    'Five levels from smallest to largest: a muscle cell; muscle tissue of similar cells; the stomach, an organ made of muscle, glandular and lining tissues; the digestive system of stomach, intestines, liver and pancreas; and the whole organism.',
    'Cells make tissues, tissues make organs, organs make systems, systems make an organism.',
    '## Levels of organisation');
}

// 08 Classification hierarchy and binomial names
{
  let b = panel(30, 110, 360, 560);
  const ranks = ['domain', 'kingdom', 'phylum', 'class', 'order', 'family', 'genus', 'species'];
  ranks.forEach((r, i) => {
    const w = 300 - i * 30, x = 210 - w / 2, y = 135 + i * 62;
    const hi = i >= 5;
    b += `<rect x="${x}" y="${y}" width="${w}" height="48" rx="10" fill="${hi ? C.cream : C.tealLight}" stroke="${hi ? C.olive : C.tealDark}" stroke-width="2.5"/>` + t(210, y + 31, r, { size: 19, weight: 700, anchor: 'middle' });
  });
  b += t(210, 650, 'largest group → smallest', { size: 16, anchor: 'middle', fill: C.muted });
  // tree
  b += panel(410, 110, 460, 560);
  const box = (cx, y, w, l1, l2, fill = '#fff', it = false) => `<rect x="${cx - w / 2}" y="${y}" width="${w}" height="${l2 ? 64 : 46}" rx="10" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` +
    t(cx, y + 29, l1, { size: 18, weight: 700, anchor: 'middle', italic: it }) + (l2 ? t(cx, y + 52, l2, { size: 16, anchor: 'middle', fill: C.muted }) : '');
  b += box(640, 135, 220, 'Family Felidae', '', C.cream);
  b += path('M640,181 L640,205 M535,205 L765,205 M535,205 L535,225 M765,205 L765,225', { w: 2.5 });
  b += box(535, 225, 180, 'Panthera', 'genus', C.tealLight, true) + box(765, 225, 150, 'Felis', 'genus', C.tealLight, true);
  b += path('M535,289 L535,310 M480,310 L590,310 M480,310 L480,330 M590,310 L590,330 M765,289 L765,330', { w: 2.5 });
  b += box(480, 330, 112, 'leo', 'lion', '#fff', true) + box(590, 330, 100, 'tigris', 'tiger', '#fff', true) + box(765, 330, 150, 'catus', 'domestic cat', '#fff', true);
  b += `<rect x="425" y="415" width="230" height="44" rx="22" fill="${C.mustard}" opacity="0.35"/>` + t(540, 444, 'share a genus: closest', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += t(640, 500, 'Binomial name', { size: 21, weight: 700, anchor: 'middle' });
  b += t(640, 548, 'Panthera leo', { size: 32, weight: 700, anchor: 'middle', italic: true });
  b += arrow(560, 580, 575, 560, { w: 2.5, color: C.tealDark, marker: 'ahT' }) + t(560, 604, 'genus: capital', { size: 16, anchor: 'end', fill: C.tealDark, weight: 600 }) + t(560, 624, 'letter', { size: 16, anchor: 'end', fill: C.tealDark, weight: 600 });
  b += arrow(720, 580, 705, 560, { w: 2.5, color: C.rust, marker: 'ahR' }) + t(722, 604, 'species: lower', { size: 16, fill: C.rust, weight: 600 }) + t(722, 624, 'case', { size: 16, fill: C.rust, weight: 600 });
  b += t(640, 652, 'italics in print, underlined by hand', { size: 16, anchor: 'middle', fill: C.muted });
  add('08-classification-binomial',
    svg(900, 700, 'Classifying and naming organisms', b),
    'Left: the eight ranks from domain, kingdom, phylum, class, order, family and genus down to species. Right: family Felidae splits into genus Panthera, holding the lion Panthera leo and tiger Panthera tigris, and genus Felis, holding the domestic cat Felis catus. In a binomial name the genus has a capital letter and the species is lower case, in italics.',
    'Organisms that share a genus are more closely related than those that share only a family.',
    '## Classification of organisms');
}
