// Board-neutral redraws of two GCSE-level osmosis pictures used on OCR GCSE pages. The plant-cell
// picture loses its "Extended terms" pill. The root-hair picture no longer uses "water potential":
// as on the OCR page text, soil water and cell sap are described as more dilute or more concentrated.
import { C, svg, t, tl, arrow } from '../style.mjs';

export const slug = 'biology-movement-into-and-out-of-cells';
const W = 900;
const WALL = C.tealDark, CYT = '#dcebe9', VAC = '#cfe3ea', OUT = '#f6edcc', SOILW = '#d3e5ec', SAP = '#f2e7b8';

const rect = (x, y, w, h, fill, rx = 14, edge = C.ink, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const dotP = (x, y) => `<circle cx="${x}" cy="${y}" r="7" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;

// ---------- 4. Plant cell osmosis ----------
function plantCellOsmosis() {
  const out = [];
  const cell = (y, kind) => {
    const x = 520, w = 300, h = 150;
    if (kind === 'plas') out.push(rect(x - 30, y - 18, w + 60, h + 36, OUT, 22, 'none', 0));
    out.push(rect(x, y, w, h, kind === 'plas' ? '#fbf3d6' : CYT, 18, WALL, 7));
    if (kind === 'turgid') {
      out.push(rect(x + 26, y + 24, w - 52, h - 48, VAC, 10, C.ink, 2));
      out.push(t(x + w / 2, y + h / 2 + 7, 'turgor pressure', { size: 19, weight: 700, anchor: 'middle' }));
      for (const [dx, dy, up] of [[40, 30, true], [w - 40, 30, true], [40, h - 30, false], [w - 40, h - 30, false]]) out.push(arrow(x + dx, y + dy + (up ? 14 : -14), x + dx, y + dy + (up ? -2 : 2), { color: C.rust, marker: 'ahR', w: 3 }));
    }
    if (kind === 'flaccid') out.push(rect(x + 60, y + 50, w - 120, h - 100, VAC, 12, C.ink, 2));
    if (kind === 'plas') { out.push(rect(x + 60, y + 32, w - 120, h - 64, CYT, 28, C.ink, 2.5)); out.push(rect(x + 92, y + 52, w - 184, h - 104, VAC, 18, C.ink, 2)); }
    const ax = [x - 50, x - 4];
    if (kind === 'turgid') [y + 30, y + 75, y + 120].forEach((yy) => out.push(arrow(ax[0], yy, ax[1], yy, { color: C.olive, marker: 'ahO', w: 3.5 })));
    if (kind === 'flaccid') { out.push(arrow(ax[0], y + 60, ax[1], y + 60, { color: C.olive, marker: 'ahO', w: 3.5 }), arrow(ax[1], y + 92, ax[0], y + 92, { color: C.olive, marker: 'ahO', w: 3.5 })); }
    if (kind === 'plas') [y + 30, y + 75, y + 120].forEach((yy) => out.push(arrow(ax[1] - 30, yy, ax[0] - 30, yy, { color: C.olive, marker: 'ahO', w: 3.5 })));
  };
  const lab = (y, head, lines) => { out.push(t(50, y, head, { size: 26, weight: 700 })); out.push(tl(50, y + 40, lines, { size: 19 }, 28)); };
  cell(140, 'turgid'); lab(180, 'Turgid', ['Dilute solution outside', 'Water moves in', 'Cell is firm']);
  cell(380, 'flaccid'); lab(420, 'Flaccid', ['Same concentration', 'No net water movement', 'Cell is limp']);
  cell(620, 'plas'); lab(660, 'Plasmolysed', ['Concentrated solution', 'Water moves out', 'Membrane leaves wall']);
  const ky = 870;
  out.push(rect(50, ky, 36, 28, '#fff', 8, WALL, 5), t(98, ky + 21, 'cell wall', { size: 19 }));
  out.push(rect(300, ky, 36, 28, CYT, 8, C.ink, 2), t(348, ky + 21, 'cytoplasm, membrane', { size: 19 }));
  out.push(rect(620, ky, 36, 28, VAC, 8, C.ink, 2), t(668, ky + 21, 'vacuole', { size: 19 }));
  return svg(W, 930, 'Plant cells and water', out.join('\n'), 'Cross-section of one cell, schematic');
}

// ---------- 4b. Root hair cell water gradient ----------
function rootWaterGradient() {
  const out = [];
  out.push(dotP(46, 130), t(64, 137, 'dissolved particles', { size: 19, fill: C.muted }));
  const pair = (y, title, soilDots, inward, soilLab, cellLab, col) => {
    out.push(t(40, y, title, { size: 23, weight: 700 }));
    out.push(rect(40, y + 24, 300, 200, SOILW, 10, C.ink, 2.5));
    out.push(rect(560, y + 24, 300, 200, SAP, 22, WALL, 5));
    soilDots.forEach(([x, yy]) => out.push(dotP(40 + x, y + 24 + yy)));
    [[40, 50], [200, 34], [270, 66], [90, 108], [180, 132], [240, 160], [110, 88]].forEach(([x, yy]) => out.push(dotP(560 + x, y + 24 + yy)));
    if (inward) out.push(arrow(360, y + 124, 540, y + 124, { color: C.tealDark, marker: 'ahT', w: 6 }), t(450, y + 106, 'water in', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
    else out.push(arrow(540, y + 124, 360, y + 124, { color: C.rust, marker: 'ahR', w: 6 }), t(450, y + 106, 'water out', { size: 21, weight: 700, fill: C.rust, anchor: 'middle' }));
    out.push(t(190, y + 262, 'Soil water', { size: 21, weight: 700, anchor: 'middle' }), t(190, y + 290, soilLab, { size: 21, weight: 700, fill: col, anchor: 'middle' }));
    out.push(t(710, y + 262, 'Root hair cell sap', { size: 21, weight: 700, anchor: 'middle' }), t(710, y + 290, cellLab, { size: 21, weight: 700, fill: col, anchor: 'middle' }));
  };
  pair(200, 'Normal soil', [[90, 70], [150, 110], [220, 150]], true, 'more dilute', 'more concentrated', C.tealDark);
  pair(560, 'Salty soil or too much fertiliser', [[30, 50], [110, 40], [170, 60], [240, 40], [270, 90], [60, 110], [140, 120], [210, 100], [90, 150], [180, 160], [250, 140], [40, 170]], false, 'more concentrated', 'more dilute', C.rust);
  out.push(t(W / 2, 920, 'Water moves by osmosis from the more dilute solution', { size: 20, fill: C.muted, anchor: 'middle' }));
  out.push(t(W / 2, 960, 'Gradient reversed: the plant wilts.', { size: 22, weight: 700, fill: C.rust, anchor: 'middle' }));
  return svg(W, 995, 'Water moves down the gradient', out.join('\n'), 'Root hair cell and soil water');
}

export const figures = [
  { name: '04-plant-cell-osmosis', after: '### Method in steps: osmosis investigation', svg: plantCellOsmosis(),
    alt: 'Three plant cells. Turgid: in a dilute solution water moves in, the vacuole is large and turgor pressure pushes on the cell wall so the cell is firm. Flaccid: no net water movement, the cell is limp. Plasmolysed: in a concentrated solution water moves out and the cytoplasm and membrane pull away from the wall.',
    caption: 'A turgid cell is firm because water pressure pushes on the wall; in a concentrated solution the cell loses water and is plasmolysed.' },
  { name: '04-root-water-gradient', after: '## B2.2f: Taking in water and mineral ions', svg: rootWaterGradient(),
    alt: 'Two panels. In normal soil, soil water has few dissolved particles so it is more dilute than the root hair cell sap, and water enters the cell by osmosis. In salty soil or soil with too much fertiliser, soil water has many dissolved particles and is more concentrated than the cell sap, so the gradient reverses, water leaves the root hair cell and the plant wilts. Gold dots are dissolved particles.',
    caption: 'Water uptake and loss at a root hair cell.' },
];
