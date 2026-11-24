// Board-neutral redraws of seven "transport in plants" pictures: four GCSE-level ones used on OCR
// GCSE pages (sources and sinks, transpiration in the leaf, transpiration factors, xylem vessel)
// and three A Level ones used on OxfordAQA pages (plan diagrams, marram grass, root pressure).
// "Extended" pills, the "Cambridge 9700" banners and the "OxfordAQA only" pill are gone.
import { C, svg, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-transport-in-plants';
const W = 900;
const LEAF = '#8cc584', LEAFE = '#3f8a4a', LEAFL = '#cfe8c8', SOIL = '#d8c7a0', VAP = '#5b9bd5', XY = C.tealDark, PH = C.mustard, TISSUE = '#dcebe9';

const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const circ = (x, y, r, fill, edge = C.ink, w = 2.5) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${w}"/>`;
const ell = (x, y, rx, ry, fill, edge = C.ink, w = 2.5, rot = 0) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${edge}" stroke-width="${w}"${rot ? ` transform="rotate(${rot} ${x} ${y})"` : ''}/>`;
const rect = (x, y, w, h, fill, rx = 12, edge = C.ink, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const lead = (x1, y1, x2, y2) => line(x1, y1, x2, y2, { color: '#4f5f7f', w: 2 }) + circ(x2, y2, 4.5, C.ink, C.ink, 1);
const num = (x, y, n, fill = C.ink) => circ(x, y, 16, fill, fill, 1) + t(x, y + 7, String(n), { size: 19, weight: 700, fill: '#fff', anchor: 'middle' });
const tag = (x, y, s, fill, edge) => { const w = s.length * 12 + 30; return rect(x, y, w, 38, fill, 19, edge, 2.5) + t(x + w / 2, y + 26, s, { size: 19, weight: 700, anchor: 'middle' }); };

// ---------- 8. Sources and sinks ----------
function sourcesSinks() {
  const out = [];
  out.push(`<rect x="0" y="700" width="${W}" height="10" fill="${SOIL}"/>`);
  // stem with phloem
  out.push(rect(430, 290, 38, 410, LEAFL, 0, LEAFE, 3));
  out.push(arrow(449, 640, 449, 340, { color: C.olive, marker: 'ahO', w: 3.5 }));
  out.push(circ(449, 278, 30, '#5fb3a8', C.ink, 3));
  // mature leaf (source)
  out.push(ell(240, 470, 125, 52, C.mustard, C.olive, 3, -22));
  out.push(path('M300 495 Q360 520 426 520', { stroke: C.olive, w: 4.5 }), arrow(410, 520, 428, 520, { color: C.olive, marker: 'ahO', w: 4.5 }));
  // fruit
  out.push(path('M470 590 Q520 585 570 570', { stroke: C.olive, w: 4.5 }), arrow(556, 574, 574, 568, { color: C.olive, marker: 'ahO', w: 4.5 }));
  out.push(circ(620, 558, 46, '#5fb3a8', C.ink, 3));
  // roots
  out.push(line(449, 705, 360, 900, { color: '#8a6d4e', w: 4.5 }), line(449, 705, 540, 900, { color: '#8a6d4e', w: 4.5 }), line(449, 705, 449, 920, { color: '#8a6d4e', w: 4.5 }));
  out.push(arrow(449, 720, 449, 895, { color: C.olive, marker: 'ahO', w: 3.5 }));
  out.push(circ(360, 900, 18, '#5fb3a8'), circ(540, 900, 18, '#5fb3a8'), circ(449, 930, 18, '#5fb3a8'));
  // labels
  out.push(tag(30, 258, 'SOURCE', C.mustard, C.olive), t(30, 330, 'Mature leaf', { size: 23, weight: 700 }), t(30, 360, 'releases sucrose', { size: 20, fill: C.muted }));
  out.push(tag(580, 190, 'SINK', '#5fb3a8', C.tealDark), t(580, 262, 'Shoot tip', { size: 23, weight: 700 }), t(580, 292, 'uses sucrose', { size: 20, fill: C.muted }));
  out.push(t(590, 638, 'Fruit', { size: 23, weight: 700 }), t(590, 668, 'uses or stores it', { size: 20, fill: C.muted }));
  out.push(t(600, 872, 'Roots', { size: 23, weight: 700 }), t(600, 902, 'use or store it', { size: 20, fill: C.muted }));
  out.push(tl(70, 786, ['Phloem carries sucrose', 'and amino acids'], { size: 20, weight: 700, fill: C.olive }, 28));
  out.push(line(40, 1000, 860, 1000, { color: C.panelEdge, w: 2.5 }));
  out.push(t(W / 2, 1048, 'The same leaf can change role', { size: 24, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(ell(170, 1160, 62, 24, '#5fb3a8', C.tealDark, 3, -15), arrow(170, 1070, 170, 1124, { color: C.olive, marker: 'ahO', w: 3.5 }));
  out.push(t(170, 1230, 'Young leaf: sink', { size: 22, weight: 700, anchor: 'middle' }));
  out.push(arrow(310, 1160, 560, 1160, { w: 3.5 }), t(435, 1140, 'grows up', { size: 20, fill: C.muted, anchor: 'middle' }));
  out.push(ell(730, 1140, 112, 44, C.mustard, C.olive, 3, -22), arrow(770, 1124, 822, 1072, { color: C.olive, marker: 'ahO', w: 3.5 }));
  out.push(t(730, 1230, 'Mature leaf: source', { size: 22, weight: 700, anchor: 'middle' }));
  return svg(W, 1270, 'Sucrose moves from source to sink', out.join('\n'));
}

// ---------- 5. Transpiration in the leaf ----------
function transpirationLeaf() {
  const out = [];
  const L = 100, R = 820;
  out.push(t(W / 2, 140, 'Mesophyll cells', { size: 21, weight: 700, anchor: 'middle' }));
  out.push(`<rect x="${L}" y="230" width="${R - L}" height="200" fill="#eef7ec"/>`);
  // upper epidermis
  for (let x = L; x < R; x += 36) out.push(rect(x, 160, 36, 28, LEAFL, 0, LEAFE, 2));
  // palisade
  for (let x = L + 6; x < R - 20; x += 46) out.push(rect(x, 194, 40, 108, LEAF, 8, LEAFE, 2.5));
  out.push(line(W / 2, 148, W / 2, 250, { w: 2 }), circ(W / 2, 250, 4, C.ink, C.ink, 1));
  // spongy
  const sp = [];
  for (let i = 0; i < 8; i++) sp.push([L + 50 + i * 74, 334]);
  for (let i = 0; i < 7; i++) sp.push([L + 86 + i * 74, 410]);
  sp.forEach(([x, y]) => out.push(circ(x, y, 24, LEAF, LEAFE, 2.5)));
  // vapour in air spaces
  for (let i = 0; i < 7; i++) out.push(circ(L + 86 + i * 74, 372, 6, '#fff', VAP, 2.5));
  out.push(arrow(268, 352, 280, 366, { color: C.rust, marker: 'ahR', w: 3 }), arrow(362, 352, 350, 366, { color: C.rust, marker: 'ahR', w: 3 }), arrow(452, 392, 464, 378, { color: C.rust, marker: 'ahR', w: 3 }));
  // lower epidermis with stomata
  const sx = [300, 560];
  for (let x = L; x < R; x += 36) if (!sx.some((s) => x > s - 50 && x < s + 30)) out.push(rect(x, 448, 36, 28, LEAFL, 0, LEAFE, 2));
  for (const s of sx) {
    out.push(ell(s - 14, 462, 12, 20, '#5aa55a', LEAFE, 2.5), ell(s + 14, 462, 12, 20, '#5aa55a', LEAFE, 2.5));
    out.push(arrow(s, 430, s, 560, { color: C.rust, marker: 'ahR', w: 3.5 }));
  }
  out.push(t(300, 610, 'Stoma', { size: 21, weight: 700, anchor: 'middle' }));
  for (const [x, y] of [[420, 596], [470, 580], [450, 630], [620, 598], [660, 582]]) out.push(circ(x, y, 6, '#fff', VAP, 2.5));
  // xylem
  out.push(circ(760, 380, 36, '#a9d0e4', '#2a6f97', 3.5), rect(738, 410, 44, 300, '#a9d0e4', 0, '#2a6f97', 3.5));
  out.push(arrow(760, 690, 760, 360, { color: XY, marker: 'ahT', w: 4 }));
  out.push(num(60, 372, 1), line(76, 372, 160, 372, { w: 2.5 }));
  out.push(num(60, 520, 2), line(76, 520, 296, 520, { w: 2.5 }));
  out.push(num(860, 620, 3), line(844, 620, 784, 620, { w: 2.5 }));
  out.push(t(W / 2, 760, 'Water vapour: small open circles', { size: 18, fill: C.muted, anchor: 'middle' }));
  const steps = ['Water evaporates from mesophyll cells into the air spaces', 'Vapour diffuses out through stomata', 'Xylem water is pulled up'];
  steps.forEach((s, i) => out.push(num(60, 830 + i * 64, i + 1), t(90, 837 + i * 64, s, { size: 21, weight: 700 })));
  return svg(W, 1040, 'How water leaves a leaf', out.join('\n'), 'Leaf cross-section, schematic');
}

// ---------- 6. Transpiration factors ----------
function transpirationFactors() {
  const out = [];
  const box = (x, y, nArrows, vap, label, extra) => {
    out.push(rect(x, y, 410, 210, '#fff', 12, C.panelEdge, 2.5));
    out.push(`<path d="M${x + 75} ${y + 178} Q${x + 205} ${y + 145} ${x + 335} ${y + 178} Q${x + 205} ${y + 200} ${x + 75} ${y + 178} Z" fill="${LEAFL}" stroke="${LEAFE}" stroke-width="2.5"/>`);
    const xs = nArrows === 4 ? [140, 192, 244, 296] : [140, 296];
    xs.forEach((dx) => out.push(arrow(x + dx, y + 150, x + dx, y + 88, { color: C.rust, marker: 'ahR', w: 3.5 })));
    vap.forEach(([dx, dy]) => out.push(circ(x + dx, y + dy, 7, '#cfe3f3', '#2a6f97', 2.5)));
    if (extra) out.push(extra(x, y));
    out.push(t(x + 205, y + 244, label, { size: 22, weight: 700, anchor: 'middle' }));
  };
  const therm = (cold) => (x, y) => `<rect x="${x + 26}" y="${y + 20}" width="20" height="130" rx="10" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<rect x="${x + 31}" y="${y + (cold ? 112 : 40)}" width="10" height="${cold ? 40 : 112}" fill="${cold ? '#3a7cc6' : '#c94c3c'}"/>` + circ(x + 36, y + 160, 17, cold ? '#3a7cc6' : '#c94c3c', C.ink, 2.5);
  const wind = (x, y) => [32, 62, 92].map((dy) => arrow(x + 12, y + dy - 22, x + 78, y + dy - 22, { color: '#4f5f7f', w: 3 })).join('');
  const rows = [
    ['Temperature', 'Cool', 'Warm', [2, [[130, 30], [190, 40], [250, 30]], therm(true)], [4, [[130, 30], [190, 40], [250, 30]], therm(false)], 'Faster evaporation and diffusion'],
    ['Wind speed', 'Still air', 'Windy', [2, [[130, 30], [160, 56], [190, 40], [220, 56], [250, 30], [280, 52]], null], [4, [[370, 46]], wind], 'Vapour swept away, gradient stays steep'],
    ['Humidity', 'Dry air', 'Humid air', [4, [[130, 30], [190, 40]], null], [2, [[100, 50], [130, 30], [150, 20], [170, 40], [200, 50], [230, 40], [250, 30], [290, 30], [270, 50], [310, 46]], null], 'More vapour in air: gradient less steep'],
  ];
  rows.forEach(([head, a, b, A, B, note], i) => {
    const y = 150 + i * 400;
    out.push(t(30, y, head, { size: 26, weight: 700, fill: C.tealDark }));
    box(30, y + 22, A[0], A[1], a, A[2]);
    box(460, y + 22, B[0], B[1], b, B[2]);
    out.push(arrow(442, y + 132, 458, y + 132, { w: 4 }));
    out.push(t(30, y + 320, note, { size: 20, fill: C.muted }));
  });
  return svg(W, 1360, 'What changes transpiration?', out.join('\n'), 'More arrows = faster water loss');
}

// ---------- 1. Plan diagrams ----------
function planDiagrams() {
  const out = [];
  out.push(rect(250, 120, 26, 26, XY, 5, C.ink, 2), t(288, 141, 'xylem', { size: 21 }), rect(450, 120, 26, 26, PH, 5, C.ink, 2), t(488, 141, 'phloem', { size: 21 }));
  const lab = (s, ty, px, py, size = 20) => out.push(lead(430, ty - 6, px, py), t(440, ty, s, { size }));
  // stem
  out.push(t(30, 214, 'Stem', { size: 24, weight: 700, fill: C.tealDark }));
  const sc = [220, 330];
  out.push(circ(...sc, 130, TISSUE, C.ink, 3.5), circ(...sc, 38, '#fff', C.ink, 2.5), t(sc[0], sc[1] + 7, 'pith', { size: 19, fill: C.muted, anchor: 'middle' }));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * 2 * Math.PI + Math.PI / 8;
    out.push(ell(sc[0] + 98 * Math.cos(a), sc[1] + 98 * Math.sin(a), 16, 11, PH, C.ink, 2, (a * 180) / Math.PI + 90));
    out.push(circ(sc[0] + 72 * Math.cos(a), sc[1] + 72 * Math.sin(a), 14, XY, C.ink, 2));
  }
  const pa = Math.PI / 8;
  lab('epidermis', 218, sc[0] + 92, sc[1] - 92);
  lab('phloem: outer side', 262, sc[0] + 98 * Math.cos(-pa), sc[1] + 98 * Math.sin(-pa));
  lab('xylem: towards centre', 312, sc[0] + 72 * Math.cos(pa), sc[1] + 72 * Math.sin(pa));
  lab('cortex', 362, sc[0] + 60, sc[1] + 100);
  out.push(t(440, 404, 'bundles in a ring, near the edge', { size: 19, fill: C.muted }));
  out.push(line(30, 450, 870, 450, { color: C.panelEdge, w: 2.5 }));
  // root
  out.push(t(30, 500, 'Root', { size: 24, weight: 700, fill: C.tealDark }));
  const rc = [220, 610];
  out.push(circ(...rc, 125, TISSUE, C.ink, 3.5), circ(...rc, 56, '#fff', C.ink, 2.5));
  out.push(`<path d="M${rc[0] - 12} ${rc[1] - 46} h24 v34 h34 v24 h-34 v34 h-24 v-34 h-34 v-24 h34 Z" fill="${XY}" stroke="${C.ink}" stroke-width="2"/>`);
  [[-26, -26], [26, -26], [-26, 26], [26, 26]].forEach(([dx, dy]) => out.push(circ(rc[0] + dx, rc[1] + dy, 11, PH, C.ink, 2)));
  lab('epidermis', 508, rc[0] + 86, rc[1] - 90);
  lab('endodermis', 552, rc[0] + 30, rc[1] - 47);
  lab('phloem: between arms', 596, rc[0] + 26, rc[1] - 26);
  lab('xylem: central star', 640, rc[0] + 40, rc[1]);
  lab('cortex', 684, rc[0] + 60, rc[1] + 80);
  out.push(line(30, 760, 870, 760, { color: C.panelEdge, w: 2.5 }));
  // leaf
  out.push(t(30, 810, 'Leaf', { size: 24, weight: 700, fill: C.tealDark }));
  out.push(`<path d="M40 860 H190 Q260 810 330 860 H460 V920 H330 Q260 990 190 920 H40 Z" fill="${TISSUE}" stroke="${C.ink}" stroke-width="3.5"/>`);
  out.push(circ(260, 866, 34, XY, C.ink, 2.5), ell(260, 922, 30, 22, PH, C.ink, 2.5));
  out.push(circ(100, 882, 10, XY, C.ink, 2), ell(100, 898, 10, 7, PH, C.ink, 2), circ(400, 882, 10, XY, C.ink, 2), ell(400, 898, 10, 7, PH, C.ink, 2));
  const llab = (s, ty, px, py) => out.push(lead(520, ty - 6, px, py), t(530, ty, s, { size: 20 }));
  llab('xylem: upper side', 830, 270, 856);
  llab('phloem: lower side', 878, 272, 924);
  llab('small veins in mesophyll', 926, 404, 884);
  llab('mesophyll', 974, 360, 900);
  out.push(t(530, 1016, 'main bundle in the midrib', { size: 19, fill: C.muted }));
  return svg(W, 1050, 'Where are xylem and phloem?', out.join('\n'), 'Plan diagrams show tissues, not cells');
}

// ---------- 2. Xylem vessel structure ----------
function xylemVessel() {
  const out = [];
  const top = 200, bot = 1000, wl = 280, wr = 480, ww = 50;
  out.push(t(380, 170, 'To the leaf', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(`<rect x="${wl + ww}" y="${top}" width="${wr - wl - ww}" height="${bot - top}" fill="#e3f1f7"/>`);
  for (const x of [wl, wr]) {
    out.push(rect(x, top, ww, bot - top, '#dfa46d', 0, '#b5602e', 3));
    for (let y = top + 18; y < bot; y += 28) out.push(line(x + 12, y, x + ww - 12, y, { color: '#b5602e', w: 3 }));
  }
  for (const y of [400, 600, 800]) out.push(line(wl, y, wr + ww, y, { color: C.ink, w: 3, dash: '4 4' }));
  out.push(arrow(380, 960, 380, 240, { color: C.tealDark, marker: 'ahT', w: 7 }));
  [[350, 300], [420, 250], [350, 470], [420, 380], [350, 650], [420, 560], [420, 760], [350, 840]].forEach(([x, y]) => out.push(circ(x, y, 12, '#a9d0e4', '#2a6f97', 2.5)));
  out.push(t(380, 1046, 'From the root', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  const lab = (n, y, px, head, sub) => {
    out.push(line(px, y, 572, y, { w: 2.5 }), circ(px, y, 5, C.ink, C.ink, 1), num(590, y, n));
    out.push(t(616, y + 8, head, { size: 24, weight: 700 }), tl(616, y + 44, sub, { size: 20, fill: C.muted }, 28));
  };
  lab(1, 330, wr + ww / 2, 'Thick walls with lignin', ['strong: no collapse,', 'supports the plant']);
  lab(2, 560, 440, 'No cell contents', ['nothing blocks the', 'flow of water']);
  lab(3, 800, wr + ww, 'Cells joined end to end', ['no cross walls: one long', 'tube from root to leaf']);
  out.push(tl(616, 960, ['Dotted line: where one cell', 'ended and the next began'], { size: 19, fill: C.muted }, 26));
  return svg(W, 1080, 'Built to carry water', out.join('\n'), 'A xylem vessel, cut lengthways');
}

// ---------- 6x. Xerophyte leaf ----------
function xerophyteLeaf() {
  const out = [];
  const cx = 270, cy = 370;
  out.push(ell(cx, cy, 230, 150, TISSUE, C.ink, 6));
  out.push(`<rect x="${cx - 18}" y="${cy - 156}" width="36" height="100" fill="#fff"/>`, line(cx - 18, cy - 156, cx - 18, cy - 74, { w: 3 }), line(cx + 18, cy - 156, cx + 18, cy - 74, { w: 3 }));
  out.push(ell(cx, cy + 10, 120, 74, '#fff', C.ink, 3));
  out.push(`<rect x="${cx - 16}" y="${cy - 70}" width="32" height="20" fill="#fff"/>`);
  out.push(t(cx, cy + 2, 'humid air', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  const ip = (deg) => [cx + 120 * Math.cos((deg * Math.PI) / 180), cy + 10 + 74 * Math.sin((deg * Math.PI) / 180)];
  // hairs on the inner surface, pointing into the humid space
  for (const deg of [-150, -130, 155, 135, 112, 68, 45, 25, -50, -30, 90]) {
    const [x, y] = ip(deg);
    out.push(line(x, y, x + (cx - x) * 0.2, y + (cy + 10 - y) * 0.2, { w: 2.5 }));
  }
  // sunken stomata pits, set into the inner surface
  for (const deg of [180, 145, 100, 55, 0]) {
    const [x, y] = ip(deg);
    const ox = (x - cx) * 0.12, oy = (y - cy - 10) * 0.12;
    out.push(rect(x + ox - 11, y + oy - 11, 22, 22, '#fff', 2, C.ink, 2.5), circ(x + ox, y + oy, 4, C.olive, C.olive, 1));
  }
  // vascular bundles
  for (const [x, y] of [[cx - 175, cy - 60], [cx + 175, cy - 60], [cx - 185, cy + 40], [cx + 185, cy + 40]]) out.push(circ(x, y - 8, 10, XY, C.ink, 2), ell(x, y + 8, 10, 7, PH, C.ink, 2));
  const lab = (lines, ty, px, py) => { out.push(lead(560, ty - 6, px, py), tl(570, ty, lines, { size: 20 }, 26)); };
  lab(['thick waxy cuticle:', 'less evaporation'], 180, cx + 172, cy - 100);
  lab(['leaf rolled, slit shut:', 'traps humid air'], 280, cx, cy - 66);
  lab(['stomata sunk in pits:', 'humid air collects'], 380, ip(55)[0] + 10, ip(55)[1] + 8);
  lab(['hairs: trap still,', 'humid air'], 480, ip(68)[0] - 5, ip(68)[1] - 10);
  lab(['vascular bundle'], 570, cx + 185, cy + 32);
  out.push(t(30, 680, 'Each feature lowers the water vapour gradient.', { size: 21, weight: 700, fill: C.tealDark }));
  return svg(W, 720, 'A xerophyte leaf: marram grass', out.join('\n'), 'Rolled leaf in transverse section');
}

// ---------- 4. Root pressure ----------
function rootPressure() {
  const out = [];
  out.push(t(30, 140, 'Ions pumped in, water follows', { size: 23, weight: 700, fill: C.tealDark }));
  out.push(rect(500, 190, 110, 360, '#cfe3ea', 4, '#8a5a2e', 4));
  out.push(arrow(555, 186, 555, 110, { w: 5 }), t(572, 120, 'pressure', { size: 20, weight: 700 }));
  for (let i = 0; i < 4; i++) {
    const y = 200 + i * 88;
    out.push(rect(30, y, 280, 74, TISSUE, 14, '#2a6f97', 2.5));
    out.push(arrow(60, y + 37, 290, y + 37, { color: '#2a6f97', w: 2.5, marker: 'ahT' }));
    out.push(line(310, y + 37, 470, y + 37, { color: '#4f5f7f', w: 2 }));
    out.push(circ(470, y + 37, 16, C.olive, C.olive, 1), t(470, y + 44, 'P', { size: 18, weight: 700, fill: '#fff', anchor: 'middle' }));
    out.push(arrow(486, y + 37, 520, y + 37, { color: C.olive, marker: 'ahO', w: 3 }));
  }
  [[530, 230], [560, 252], [590, 320], [540, 350], [575, 400], [535, 440], [580, 480], [560, 528], [600, 220]].forEach(([x, y]) => out.push(circ(x, y, 6, C.olive, C.olive, 1)));
  out.push(t(30, 584, 'cells next to xylem', { size: 20, weight: 700, fill: C.tealDark }), t(30, 612, 'P = ion pump (active transport)', { size: 19, fill: C.muted }));
  out.push(t(555, 584, 'xylem', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  [[1, 'ions pumped in', '(uses ATP)'], [2, 'sap: lower ψ', null], [3, 'water follows', 'by osmosis']].forEach(([n, a, b], i) => {
    const y = 250 + i * 120;
    out.push(num(670, y, n, C.olive), t(698, y + 7, a, { size: 20 }));
    if (b) out.push(t(698, y + 35, b, { size: 20 }));
  });
  out.push(line(30, 650, 870, 650, { color: C.panelEdge, w: 2.5 }));
  out.push(t(30, 700, 'Evidence', { size: 24, weight: 700, fill: C.tealDark }));
  out.push(`<rect x="60" y="860" width="330" height="50" fill="#a88e62"/>`, t(80, 894, 'soil', { size: 20, weight: 700, fill: '#fff' }));
  out.push(`<path d="M150 760 V860 H270 V760" fill="#e6cf9a" stroke="#8a5a2e" stroke-width="3"/>`, ell(210, 760, 60, 12, '#e6cf9a', '#8a5a2e', 3));
  [[200, 704], [228, 690], [210, 736], [184, 720]].forEach(([x, y]) => out.push(circ(x, y, 7, '#3a8fc0', '#3a8fc0', 1)));
  out.push(t(225, 950, 'sap oozes from cut stump', { size: 20, anchor: 'middle' }));
  out.push(`<path d="M520 780 H860 V860 L835 840 L810 860 L785 840 L760 860 L735 840 L710 860 L685 840 L660 860 L635 840 L610 860 L585 840 L560 860 L535 840 L520 855 Z" fill="#a9cfc9" stroke="${C.ink}" stroke-width="3"/>`);
  [585, 660, 735, 810].forEach((x) => out.push(circ(x, 848, 9, '#3a8fc0', '#3a8fc0', 1)));
  out.push(t(690, 950, 'guttation: drops at night', { size: 20, anchor: 'middle' }));
  return svg(W, 990, 'Root pressure', out.join('\n'), 'Pushing sap up from the root');
}

export const figures = [
  { name: '08-sources-and-sinks', after: '## Related resources', svg: sourcesSinks(),
    alt: 'A plant diagram: a mature photosynthesising leaf is a source releasing sucrose into the phloem; arrows show it moving up to the shoot tip, along to a fruit and down to roots, which are sinks that use or store it. Below, a young leaf is a sink and becomes a source when mature.',
    caption: 'Phloem carries sucrose from sources to sinks, and a leaf can be both at different times.' },
  { name: '05-transpiration-in-leaf', after: '## Official syllabus', svg: transpirationLeaf(),
    alt: 'A leaf cross-section. Step 1: water evaporates from the wet surfaces of mesophyll cells into the air spaces. Step 2: water vapour diffuses out through the stomata. Step 3: water lost from the leaf is pulled up the xylem.',
    caption: 'Water evaporates inside the leaf, then the vapour diffuses out through the stomata.' },
  { name: '06-transpiration-factors', after: '## Official syllabus', svg: transpirationFactors(),
    alt: 'Three side-by-side comparisons of a leaf with copper arrows for water vapour leaving; more arrows mean a faster rate. Warm air gives more than cool air, windy air more than still air, and humid air less than dry air. Explanations use kinetic energy and the concentration gradient; humidity also changes the rate.',
    caption: 'Higher temperature and wind speed raise the rate; higher humidity lowers it.' },
  { name: '01-plan-diagrams', after: '### Root pressure', svg: planDiagrams(),
    alt: 'Three plan diagrams of herbaceous dicot sections. Stem: a ring of vascular bundles near the outside, xylem towards the centre and phloem towards the outside in each. Root: a central xylem star with phloem groups between the arms, inside the endodermis. Leaf: midrib bundle with xylem on the upper side and phloem on the lower side, plus small veins.',
    caption: 'Plan diagrams show tissue distribution only: xylem inside phloem in stems, a central xylem star in roots, xylem above phloem in leaves.' },
  { name: '02-xylem-vessel-structure', after: '## B2.2g and B2.2h: Transpiration and the xylem', svg: xylemVessel(),
    alt: 'A xylem vessel drawn lengthways as a long hollow tube. Thick walls strengthened with lignin stop it collapsing and support the plant. It has no cell contents, so nothing blocks the water. Cells are joined end to end with no cross walls, forming one tube from root to leaf.',
    caption: 'Three features make a xylem vessel a good water pipe.' },
  { name: '06-xerophyte-leaf', after: '### Factors affecting the rate', svg: xerophyteLeaf(),
    alt: 'An annotated transverse section of a rolled marram grass leaf. A thick waxy cuticle covers the outside, the leaf is rolled around a space of humid air, stomata lie in sunken pits on the inner surface, and hairs there trap still humid air. Each reduces the water vapour potential gradient between leaf and air.',
    caption: 'Marram grass reduces water loss by rolling, sunken stomata, hairs and a thick cuticle, all of which cut the vapour gradient.' },
  { name: '04-root-pressure', after: '### Root pressure', svg: rootPressure(),
    alt: 'Cells next to the xylem use ion pumps (active transport, using ATP) to move mineral ions into the xylem. The sap then has a lower water potential, so water follows from the cortex by osmosis, building a positive pressure that pushes sap up. Evidence: sap oozing from a cut stump and guttation drops at leaf edges at night.',
    caption: 'Root pressure: ions pumped into the xylem draw water in by osmosis and push sap upwards.' },
];
