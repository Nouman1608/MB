// Board-neutral redraws of the A-level membrane figures (fluid mosaic, signalling, passive, active and
// bulk transport, SA:V cubes, potato tissue). Same content and numbers as the earlier set, with the board
// pills ("All boards", "Cambridge 9700 only") removed. The potato figure keeps "water potential": it is used
// only on an Edexcel A-level page, where water potential is on the specification.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-cell-membranes-and-transport';
const W = 900;
const HEAD = '#dde9e6', PROT = '#6fa89f', PROTL = '#b5d3cf', WATERY = '#dce9ef', CORE = '#f7efd2', BLOOD = '#f6d5c8';
const pill = (cx, cy, w, s, fill = HEAD, edge = C.tealDark, ink = C.tealDark) =>
  `<rect x="${cx - w / 2}" y="${cy - 22}" width="${w}" height="44" rx="22" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + t(cx, cy + 7, s, { size: 19, weight: 700, fill: ink, anchor: 'middle' });

// Phospholipid pair (upper + lower) at x; heads at yTop and yBot.
const lipid = (x, yTop, yBot, r = 11) =>
  `<line x1="${x - 3}" y1="${yTop + r}" x2="${x - 3}" y2="${(yTop + yBot) / 2 - 4}" stroke="${C.ink}" stroke-width="2"/><line x1="${x + 3}" y1="${yTop + r}" x2="${x + 3}" y2="${(yTop + yBot) / 2 - 4}" stroke="${C.ink}" stroke-width="2"/>` +
  `<line x1="${x - 3}" y1="${(yTop + yBot) / 2 + 4}" x2="${x - 3}" y2="${yBot - r}" stroke="${C.ink}" stroke-width="2"/><line x1="${x + 3}" y1="${(yTop + yBot) / 2 + 4}" x2="${x + 3}" y2="${yBot - r}" stroke="${C.ink}" stroke-width="2"/>` +
  `<circle cx="${x}" cy="${yTop}" r="${r}" fill="${HEAD}" stroke="${C.tealDark}" stroke-width="2.5"/><circle cx="${x}" cy="${yBot}" r="${r}" fill="${HEAD}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
const chain = (x, y) => // branched carbohydrate chain rising from (x, y)
  `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 44}" stroke="${C.ink}" stroke-width="2"/><line x1="${x}" y1="${y - 30}" x2="${x - 12}" y2="${y - 46}" stroke="${C.ink}" stroke-width="2"/><line x1="${x}" y1="${y - 30}" x2="${x + 12}" y2="${y - 46}" stroke="${C.ink}" stroke-width="2"/>` +
  [[x, y - 10], [x, y - 26], [x - 12, y - 46], [x + 12, y - 46]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="7" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2"/>`).join('');

// ---------- 01 Fluid mosaic ----------
function fluidMosaic() {
  const o = [];
  const L = 40, R = 860, yT = 290, yB = 470, mid = 380;
  o.push(`<rect x="${L}" y="140" width="${R - L}" height="${yT - 140 - 8}" fill="${WATERY}"/>`, `<rect x="${L}" y="${yB + 8}" width="${R - L}" height="90" fill="${WATERY}"/>`);
  o.push(`<rect x="${L}" y="${mid - 14}" width="${R - L}" height="28" fill="${CORE}"/>`);
  o.push(t(L + 16, 170, 'OUTSIDE (watery)', { size: 19, weight: 700, fill: C.tealDark }));
  o.push(t(R - 16, 550, 'INSIDE (watery)', { size: 19, weight: 700, fill: C.tealDark, anchor: 'end' }));
  const skip = (x) => (x > 92 && x < 196) || (x > 222 && x < 330) || (x > 440 && x < 540);
  for (let x = 66; x <= R - 20; x += 32) if (!skip(x)) o.push(lipid(x, yT, yB));
  // channel protein (two pillars, water-filled pore)
  o.push(`<rect x="106" y="${yT - 6}" width="32" height="${yB - yT + 12}" rx="14" fill="${PROT}" stroke="${C.tealDark}" stroke-width="2.5"/>`, `<rect x="152" y="${yT - 6}" width="32" height="${yB - yT + 12}" rx="14" fill="${PROT}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(`<circle cx="145" cy="${mid}" r="6" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2"/>`);
  // carrier protein
  o.push(`<rect x="236" y="${yT - 12}" width="80" height="${yB - yT + 24}" rx="38" fill="${PROT}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  // cholesterol in both layers
  o.push(`<ellipse cx="370" cy="${yT + 48}" rx="9" ry="34" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2"/>`, `<ellipse cx="402" cy="${yB - 48}" rx="9" ry="34" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2"/>`);
  // glycoprotein
  o.push(`<rect x="454" y="${yT - 10}" width="72" height="${yB - yT + 20}" rx="16" fill="${PROTL}" stroke="${C.tealDark}" stroke-width="2.5"/>`, chain(490, yT - 10));
  // glycolipid: a phospholipid with a chain
  const gx = 610 - ((610 - 66) % 32) + 32; // a lipid position
  o.push(chain(gx, yT - 11));
  o.push(t(490, 196, 'Glycoprotein', { size: 19, weight: 700, anchor: 'middle' }), t(gx + 20, 196, 'Glycolipid', { size: 19, weight: 700, anchor: 'middle' }));
  // labels below
  const lab = (x, x2, y2, lines) => {
    o.push(`<line x1="${x}" y1="${y2}" x2="${x2}" y2="600" stroke="${C.ink}" stroke-width="1.8"/>`);
    lines.forEach((s, i) => o.push(t(x2, 626 + i * 24, s, { size: 19, weight: 700, anchor: 'middle' })));
  };
  lab(145, 145, yB + 8, ['Channel', 'protein']);
  lab(276, 300, yB + 14, ['Carrier', 'protein']);
  lab(402, 450, yB - 14, ['Cholesterol']);
  o.push(`<circle cx="66" cy="710" r="11" fill="${HEAD}" stroke="${C.tealDark}" stroke-width="2.5"/>`, t(90, 717, 'Hydrophilic head: faces water', { size: 19 }));
  o.push(`<line x1="63" y1="738" x2="63" y2="766" stroke="${C.ink}" stroke-width="2"/><line x1="69" y1="738" x2="69" y2="766" stroke="${C.ink}" stroke-width="2"/>`, t(90, 759, 'Hydrophobic tails: face inwards', { size: 19 }));
  return svg(W, 800, 'The fluid mosaic membrane', o.join('\n'), 'Carbohydrate chains face outwards only');
}

// ---------- 02 Cell signalling ----------
const tri = (cx, cy, s = 15, fill = C.mustard) => `<path d="M${cx} ${cy - s} L${cx + s} ${cy + s * 0.75} L${cx - s} ${cy + s * 0.75} Z" fill="${fill}" stroke="${C.olive}" stroke-width="2.5" stroke-linejoin="round"/>`;
const step = (x, y, n, s) => `<circle cx="${x}" cy="${y}" r="15" fill="${C.ink}"/>` + t(x, y + 6, String(n), { size: 17, weight: 700, fill: '#fff', anchor: 'middle' }) + t(x + 26, y + 7, s, { size: 21, weight: 700 });
function signalling() {
  const o = [];
  o.push(step(62, 150, 1, 'Ligand secreted'));
  o.push(`<circle cx="150" cy="240" r="56" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>`, t(150, 236, 'Secreting', { size: 18, weight: 700, anchor: 'middle' }), t(150, 260, 'cell', { size: 18, weight: 700, anchor: 'middle' }));
  o.push(tri(238, 190), tri(262, 222), tri(232, 262));
  o.push(arrow(280, 268, 324, 318, { color: C.olive, w: 3, marker: 'ahO' }));
  o.push(step(560, 280, 2, 'Carried in blood'));
  o.push(`<rect x="40" y="330" width="820" height="84" rx="42" fill="${BLOOD}" stroke="${C.rust}" stroke-width="3"/>`);
  o.push(t(70, 380, 'Blood', { size: 21, weight: 700, fill: C.rust }));
  o.push(tri(270, 372), arrow(306, 374, 352, 374, { color: C.rust, w: 3, marker: 'ahR' }), tri(390, 364), tri(500, 378), arrow(538, 374, 584, 374, { color: C.rust, w: 3, marker: 'ahR' }), tri(620, 368));
  o.push(arrow(230, 416, 230, 520, { color: C.olive, w: 3, marker: 'ahO' }), arrow(712, 416, 712, 478, { color: C.olive, w: 3, marker: 'ahO' }));
  o.push(step(316, 462, 3, 'Ligand binds receptor'));
  // target cell
  o.push(`<circle cx="230" cy="660" r="96" fill="${HEAD}" stroke="${C.tealDark}" stroke-width="3.5"/>`);
  o.push(`<rect x="196" y="548" width="68" height="34" rx="6" fill="${PROT}" stroke="${C.tealDark}" stroke-width="2.5"/>`, tri(230, 558, 13));
  o.push(t(230, 656, 'Target cell', { size: 20, weight: 700, anchor: 'middle' }), t(230, 682, 'responds', { size: 19, anchor: 'middle' }));
  // non-matching cell
  o.push(`<circle cx="712" cy="660" r="96" fill="#eef0f2" stroke="${C.tealDark}" stroke-width="3.5"/>`);
  o.push(`<rect x="678" y="548" width="68" height="34" rx="6" fill="${PROT}" stroke="${C.tealDark}" stroke-width="2.5"/>`, `<rect x="701" y="553" width="22" height="22" fill="#fff" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(tri(712, 516, 13), `<path d="M686 526 l52 22 M738 526 l-52 22" stroke="${C.rust}" stroke-width="3.5" stroke-linecap="round"/>`);
  o.push(t(712, 656, 'No matching', { size: 20, weight: 700, anchor: 'middle' }), t(712, 682, 'receptor', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 810, 'Receptor binding site fits only its own ligand', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 840, 'Cell signalling', o.join('\n'), 'Only cells with a matching receptor respond');
}

// mini bilayer column at x (two lipid columns horizontally), rows from y0 to y1
function bilayerCol(x, y0, y1, gaps = []) {
  let s = '';
  for (let y = y0; y <= y1; y += 26) {
    if (gaps.some(([a, b]) => y > a && y < b)) continue;
    s += `<line x1="${x - 14}" y1="${y - 3}" x2="${x + 14}" y2="${y - 3}" stroke="${C.ink}" stroke-width="2"/><line x1="${x - 14}" y1="${y + 3}" x2="${x + 14}" y2="${y + 3}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<circle cx="${x - 24}" cy="${y}" r="10" fill="${HEAD}" stroke="${C.tealDark}" stroke-width="2.2"/><circle cx="${x + 24}" cy="${y}" r="10" fill="${HEAD}" stroke="${C.tealDark}" stroke-width="2.2"/>`;
  }
  return s;
}
const hexa = (cx, cy, r = 9) => `<polygon points="${Array.from({ length: 6 }, (_, k) => `${cx + r * Math.cos((k * Math.PI) / 3)},${cy + r * Math.sin((k * Math.PI) / 3)}`).join(' ')}" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.2"/>`;
const ball = (cx, cy, fill = HEAD, edge = C.tealDark) => `<circle cx="${cx}" cy="${cy}" r="8" fill="${fill}" stroke="${edge}" stroke-width="2.2"/>`;

// ---------- 03 Passive transport ----------
function passive() {
  const o = [];
  const hi = [[60, 50], [130, 80], [210, 40], [80, 130], [160, 150], [240, 120], [60, 190], [130, 210], [220, 190]];
  const lo = [[390, 70], [470, 140], [400, 200]];
  const rows = [
    ['Simple diffusion', 'O₂, CO₂ cross the bilayer', (x, y) => ball(x, y), 'simple'],
    ['Facilitated: channel', 'Ions pass through a pore', (x, y) => ball(x, y, C.mustard, C.olive), 'channel'],
    ['Facilitated: carrier', 'Carrier changes shape', (x, y) => hexa(x, y), 'carrier'],
  ];
  rows.forEach(([h, sub, mol, kind], i) => {
    const y = 120 + i * 300, mx = 340;
    o.push(panel(40, y, 820, 280));
    o.push(t(60, y + 32, 'high', { size: 18, fill: C.muted }), t(400, y + 32, 'low', { size: 18, fill: C.muted }));
    if (kind === 'simple') o.push(bilayerCol(mx, y + 26, y + 230));
    if (kind === 'channel') {
      o.push(bilayerCol(mx, y + 26, y + 230, [[y + 70, y + 240]]));
      o.push(`<rect x="${mx - 44}" y="${y + 74}" width="30" height="150" rx="12" fill="${PROT}" stroke="${C.tealDark}" stroke-width="2.5"/>`, `<rect x="${mx + 14}" y="${y + 74}" width="30" height="150" rx="12" fill="${PROT}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
    }
    if (kind === 'carrier') {
      o.push(bilayerCol(mx, y + 26, y + 230, [[y + 70, y + 240]]));
      o.push(`<rect x="${mx - 38}" y="${y + 90}" width="76" height="128" rx="34" fill="${PROT}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
      o.push(`<path d="M${mx - 38} ${y + 140} a14 14 0 0 1 0 28 z" fill="#fff"/>`, hexa(mx - 30, y + 154, 8));
      o.push(arrow(mx + 44, y + 154, mx + 82, y + 154, { color: C.tealDark, w: 3, marker: 'ahT' }), hexa(mx + 100, y + 154));
    }
    hi.forEach(([a, b]) => o.push(mol(40 + a, y + 20 + b)));
    lo.forEach(([a, b]) => o.push(mol(40 + a, y + 20 + b)));
    if (kind === 'simple') o.push(mol(mx, y + 154));
    if (kind === 'channel') o.push(mol(mx, y + 150), `<line x1="196" y1="${y + 80}" x2="${mx - 50}" y2="${y + 80}" stroke="${C.rust}" stroke-width="2.5"/>`, `<path d="M${mx - 58} ${y + 72} l14 16 M${mx - 44} ${y + 72} l-14 16" stroke="${C.rust}" stroke-width="2.5"/>`);
    o.push(arrow(100, y + 254, 450, y + 254, { color: C.tealDark, w: 3.5, marker: 'ahT' }));
    o.push(t(540, y + 110, h, { size: 21, weight: 700 }), t(540, y + 140, sub, { size: 18, fill: C.muted }));
    o.push(pill(650, y + 196, 190, 'No ATP'));
  });
  return svg(W, 120 + 3 * 300 + 10, 'Passive transport', o.join('\n'), 'Down a concentration gradient, no ATP');
}

// ---------- 04 Active and bulk transport ----------
function activeBulk() {
  const o = [];
  // active transport
  const y = 120, mx = 300;
  o.push(panel(40, y, 820, 300));
  o.push(t(60, y + 32, 'low', { size: 18, fill: C.muted }), t(360, y + 32, 'high', { size: 18, fill: C.muted }));
  o.push(bilayerCol(mx, y + 26, y + 260, [[y + 80, y + 220]]));
  o.push(`<rect x="${mx - 38}" y="${y + 90}" width="76" height="118" rx="34" fill="${PROT}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(`<path d="M${mx - 38} ${y + 136} a14 14 0 0 1 0 28 z" fill="#fff"/>`, hexa(mx - 30, y + 150, 8));
  [[70, 90], [150, 70], [190, 150], [110, 200]].forEach(([a, b]) => o.push(hexa(40 + a, y + b)));
  [[360, 70], [420, 60], [370, 120], [440, 120], [360, 170], [420, 190], [370, 240], [430, 250], [480, 170], [470, 240]].forEach(([a, b]) => o.push(hexa(a, y + b)));
  o.push(arrow(110, y + 280, 390, y + 280, { color: C.rust, w: 3.5, marker: 'ahR' }));
  o.push(t(560, y + 92, 'Active transport', { size: 22, weight: 700 }), t(560, y + 122, 'Against the gradient', { size: 18, fill: C.muted }));
  o.push(pill(660, y + 176, 200, 'Uses ATP', C.cream, C.olive, C.olive));
  o.push(t(560, y + 238, 'ATP → ADP + Pᵢ', { size: 20, weight: 700, fill: C.olive }));
  // endo / exocytosis
  const mem = (x, yy, kind) => {
    if (kind === 'flat') return `<line x1="${x - 90}" y1="${yy}" x2="${x + 90}" y2="${yy}" stroke="${C.tealDark}" stroke-width="5" stroke-linecap="round"/>`;
    if (kind === 'down') return path(`M${x - 90} ${yy} H${x - 30} a30 30 0 0 0 60 0 H${x + 90}`, { stroke: C.tealDark, w: 5 });
    return path(`M${x - 90} ${yy} H${x - 30} a30 30 0 0 1 60 0 H${x + 90}`, { stroke: C.tealDark, w: 5 });
  };
  const ves = (x, yy) => `<circle cx="${x}" cy="${yy - 4}" r="28" fill="none" stroke="${C.tealDark}" stroke-width="5"/>`;
  const cargo = (x, yy) => `<circle cx="${x}" cy="${yy}" r="11" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  const bulk = (yy, title, frames, labels) => {
    o.push(panel(40, yy, 820, 236));
    o.push(t(60, yy + 34, title, { size: 22, weight: 700 }), pill(380, yy + 30, 160, 'Uses ATP', C.cream, C.olive, C.olive));
    o.push(t(60, yy + 82, 'outside', { size: 17, fill: C.muted }), t(60, yy + 156, 'inside', { size: 17, fill: C.muted }));
    const ly = yy + 96;
    frames.forEach((f, i) => { const x = 210 + i * 250; o.push(f(x, ly)); if (i < 2) o.push(arrow(x + 96, ly, x + 152, ly, { w: 2.5 })); });
    labels.forEach((s, i) => o.push(t(210 + i * 250, yy + 218, s, { size: 18, weight: 700, anchor: 'middle' })));
  };
  bulk(440, 'Endocytosis', [(x, l) => mem(x, l, 'flat') + cargo(x, l - 28), (x, l) => mem(x, l, 'down') + cargo(x, l + 12), (x, l) => mem(x, l, 'flat') + ves(x, l + 50) + cargo(x, l + 46)], ['Membrane folds in', 'Pinches off', 'Vesicle inside']);
  bulk(696, 'Exocytosis', [(x, l) => mem(x, l, 'flat') + ves(x, l + 50) + cargo(x, l + 46), (x, l) => mem(x, l, 'up') + cargo(x, l - 12), (x, l) => mem(x, l, 'flat') + cargo(x - 18, l - 30) + cargo(x + 12, l - 52) + cargo(x + 22, l - 22)], ['Vesicle arrives', 'Fuses, opens', 'Contents out']);
  return svg(W, 962, 'Moving substances with ATP', o.join('\n'), 'Active transport and bulk transport');
}

// ---------- 06 SA:V cubes ----------
function cube(x, base, s, fill = HEAD) { // front face bottom-left at (x, base), side s px
  const d = s * 0.32;
  return `<path d="M${x} ${base - s} l${d} ${-d} h${s} l${-d} ${d} z" fill="#eef5f4" stroke="${C.tealDark}" stroke-width="2.5" stroke-linejoin="round"/>` +
    `<path d="M${x + s} ${base} v${-s} l${d} ${-d} v${s} z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5" stroke-linejoin="round"/>` +
    `<rect x="${x}" y="${base - s}" width="${s}" height="${s}" fill="${fill}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
}
function saV() {
  const o = [];
  const base = 300, k = 30;
  const cubes = [[0.5, 60, '12 : 1'], [1, 170, '6 : 1'], [2, 320, '3 : 1'], [4, 560, '1.5 : 1']];
  for (const [sd, x, r] of cubes) {
    const s = sd * k * (sd === 4 ? 1 : 1.0);
    o.push(cube(x, base, s));
    const cx = x + s / 2 + s * 0.16;
    o.push(t(cx, base + 34, `${sd} cm`, { size: 19, anchor: 'middle' }));
    o.push(t(cx, base + 76, r, { size: 26, weight: 700, fill: sd === 4 ? C.rust : C.tealDark, anchor: 'middle' }));
  }
  o.push(arrow(80, 440, 820, 440, { color: C.rust, w: 4, marker: 'ahR' }));
  o.push(t(W / 2, 482, 'Each doubling of side halves SA:V', { size: 21, weight: 700, anchor: 'middle' }));
  const y = 530;
  o.push(panel(40, y, 820, 280, '#fff', C.ink));
  o.push(t(64, y + 40, 'Same idea, different shape', { size: 21, weight: 700 }));
  // 4 x 1 x 1 cuboid
  const u = 38, cx0 = 90, cb = y + 220, d = u * 0.32;
  o.push(`<path d="M${cx0} ${cb - u} l${d} ${-d} h${4 * u} l${-d} ${d} z" fill="#eef5f4" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(`<path d="M${cx0 + 4 * u} ${cb} v${-u} l${d} ${-d} v${u} z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(`<rect x="${cx0}" y="${cb - u}" width="${4 * u}" height="${u}" fill="${HEAD}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(t(cx0 + 2 * u + 6, cb - u - 26, '4.5 : 1', { size: 26, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(cx0 + 2 * u + 6, cb + 32, '4 × 1 × 1 cm', { size: 18, anchor: 'middle' }));
  o.push(cube(360, cb, 2 * u));
  o.push(t(360 + u + 12, cb - 2 * u - 40, '3 : 1', { size: 26, weight: 700, fill: C.rust, anchor: 'middle' }), t(360 + u + 12, cb + 32, '2 cm cube', { size: 18, anchor: 'middle' }));
  o.push(tl(560, y + 120, ['Long and thin', 'keeps a high', 'SA:V'], { size: 21, weight: 700, fill: C.tealDark }, 28));
  return svg(W, y + 310, 'Bigger means smaller SA:V', o.join('\n'), 'Volume grows faster than surface area');
}

// ---------- 08 Potato ----------
function potato() {
  const o = [];
  const px = 140, py = 150, pw = 680, ph = 520;
  const X = (c) => px + (c / 0.5) * pw, Y = (m) => py + ph - ((m + 10) / 24) * ph;
  for (const m of [-10, -6, -2, 2, 6, 10, 14]) {
    o.push(`<line x1="${px}" y1="${Y(m)}" x2="${px + pw}" y2="${Y(m)}" stroke="#d6e2e0" stroke-width="1.5"/>`);
    o.push(t(px - 12, Y(m) + 6, m > 0 ? `+${m}` : m < 0 ? `−${-m}` : '0', { size: 18, anchor: 'end' }));
  }
  o.push(`<line x1="${px}" y1="${Y(0)}" x2="${px + pw}" y2="${Y(0)}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(`<line x1="${px}" y1="${py - 20}" x2="${px}" y2="${Y(-10)}" stroke="${C.ink}" stroke-width="3"/>`);
  for (const c of [0, 0.1, 0.2, 0.3, 0.4, 0.5]) o.push(t(X(c), Y(-10) + 30, c.toFixed(1), { size: 18, anchor: 'middle' }));
  o.push(t(px + pw / 2, Y(-10) + 66, 'Sucrose concentration / mol dm⁻³', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(`<text transform="translate(${px - 64} ${py + ph / 2}) rotate(-90)" font-size="20" font-weight="700" fill="${C.ink}" text-anchor="middle">Change in mass / %</text>`);
  const data = [[0, 11.2], [0.1, 6.9], [0.2, 2.4], [0.3, -2.0], [0.4, -5.9], [0.5, -8.4]];
  o.push(path('M' + data.map(([c, m]) => `${X(c)} ${Y(m)}`).join(' L'), { stroke: C.ink, w: 3.5 }));
  o.push(`<line x1="${X(0.25)}" y1="${Y(0)}" x2="${X(0.25)}" y2="${Y(-10)}" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="8 6"/>`);
  data.forEach(([c, m]) => o.push(`<circle cx="${X(c)}" cy="${Y(m)}" r="9" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>`));
  o.push(`<circle cx="${X(0.25)}" cy="${Y(0)}" r="10" fill="#fff" stroke="${C.rust}" stroke-width="3.5"/>`);
  o.push(t(X(0.25) + 18, Y(0) - 40, '≈ 0.25', { size: 21, weight: 700, fill: C.rust }), t(X(0.25) + 18, Y(0) - 16, 'no net movement', { size: 18, fill: C.rust }));
  o.push(t(X(0.4), Y(12), 'Gains water', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(X(0.06), Y(-8.6), 'Loses water', { size: 19, weight: 700, fill: C.rust, anchor: 'middle' }));
  const y = Y(-10) + 120;
  o.push(`<rect x="200" y="${y - 32}" width="500" height="60" rx="30" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(t(W / 2, y + 8, 'Tissue ψ ≈ −680 kPa', { size: 24, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(W / 2, y + 66, 'Halfway between supplied −540 kPa (0.2) and −820 kPa (0.3)', { size: 18, fill: C.muted, anchor: 'middle' }));
  return svg(W, y + 100, 'Water potential of potato tissue', o.join('\n'), 'Percentage change in mass in sucrose');
}

export const figures = [
  { name: '06-sa-v-cubes', after: '## The circulatory system', svg: saV(),
    alt: 'Cubes of side 0.5, 1, 2 and 4 cm have SA:V of 12, 6, 3 and 1.5 to 1, halving each time the side doubles. A 4 by 1 by 1 cm cuboid has 4.5 to 1, higher than the 3 to 1 of a 2 cm cube.',
    caption: 'SA:V falls as size rises, and long thin shapes keep a high ratio.' },
  { name: '01-fluid-mosaic', after: '## Syllabus coverage', svg: fluidMosaic(),
    alt: 'Cross-section of a cell surface membrane. Phospholipid heads face the watery outside and inside, with hydrophobic tails forming a core. A channel protein with a water-filled pore, a carrier protein and a glycoprotein span the bilayer, cholesterol sits in both layers, and carbohydrate chains on the glycoprotein and a glycolipid face outwards only.',
    caption: 'The bilayer, proteins, cholesterol and outward-facing carbohydrate chains of the fluid mosaic model.' },
  { name: '03-passive-transport', after: '## Key terms to define precisely', svg: passive(),
    alt: 'Three panels with a crowded high-concentration side and a sparse low-concentration side. Oxygen crosses the bilayer directly, ions pass through a channel protein pore, and glucose binds to a carrier protein that changes shape. All move down the gradient with no ATP.',
    caption: 'Simple diffusion crosses the bilayer; facilitated diffusion uses channel or carrier proteins; none needs ATP.' },
  { name: '04-active-bulk-transport', after: '## Key terms to define precisely', svg: activeBulk(),
    alt: 'A carrier protein moves glucose from the low to the high concentration side using ATP, which becomes ADP and phosphate. Endocytosis shows the membrane folding in, pinching off and leaving a vesicle inside. Exocytosis shows a vesicle arriving, fusing and releasing its contents outside.',
    caption: 'Active transport and bulk transport both need ATP.' },
  { name: '08-potato-water-potential', after: '## Key terms to define precisely', svg: potato(),
    alt: 'Graph of percentage change in mass of potato cylinders against sucrose concentration. The line falls from +11.2 to -8.4 percent and crosses zero at about 0.25 mol per dm cubed, where there is no net water movement. Halfway between -540 and -820 kPa gives about -680 kPa.',
    caption: 'The zero-change concentration gives the tissue water potential.' },
  { name: '02-cell-signalling', after: '## Key terms to define precisely', svg: signalling(),
    alt: 'A secreting cell releases triangular ligands, which are carried in the blood. The target cell has a receptor with a triangular binding site, so the ligand binds and the cell responds. A second cell with a square binding site cannot bind the ligand and does not respond.',
    caption: 'Only cells with a receptor complementary to the ligand respond.' },
];
