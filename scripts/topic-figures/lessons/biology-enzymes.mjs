// Board-neutral redraws of three GCSE enzyme pictures first drawn for Cambridge IGCSE 0610 and reused
// on AQA and OCR GCSE pages. Same content; the "Extended" tier pills are gone.
import { C, svg, panel, t, tl, path } from '../style.mjs';

export const slug = 'biology-enzymes';
const W = 900;
const ENZ = '#b5d3cf', SUB = '#f2e7b8', GOLD = '#d4b02e', STARCH = '#d9cdea', PURPLE = '#6b4f96', RED = '#b5402e';
function fa(x1, y1, x2, y2, color = C.ink, w = 3.5, head = 18) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
  const bx = x2 - ux * head, by = y2 - uy * head, hw = head * 0.6;
  return `<line x1="${x1}" y1="${y1}" x2="${bx}" y2="${by}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>` +
    `<polygon points="${x2},${y2} ${bx - uy * hw},${by + ux * hw} ${bx + uy * hw},${by - ux * hw}" fill="${color}"/>`;
}
// enzyme: rounded block with a notch (active site) on top, centred at cx, top at y, scale s
const enzyme = (cx, y, s = 1, label = 'lipase') => {
  const w = 220 * s, h = 116 * s, nw = 30 * s, nb = 16 * s, nd = 44 * s;
  const x0 = cx - w / 2, r = 12 * s;
  const d = `M${x0 + r} ${y} H${cx - nw} L${cx - nb} ${y + nd} H${cx + nb} L${cx + nw} ${y} H${x0 + w - r} Q${x0 + w} ${y} ${x0 + w} ${y + r} V${y + h - r} Q${x0 + w} ${y + h} ${x0 + w - r} ${y + h} H${x0 + r} Q${x0} ${y + h} ${x0} ${y + h - r} V${y + r} Q${x0} ${y} ${x0 + r} ${y} Z`;
  return `<path d="${d}" fill="${ENZ}" stroke="${C.ink}" stroke-width="${3 * Math.max(s, 0.8)}" stroke-linejoin="round"/>` + (label ? t(cx, y + h - 30 * s, label, { size: 24 * Math.max(s, 0.85), weight: 700, anchor: 'middle' }) : '');
};
// substrate: trapezoid that fits the notch; tip at (cx, tipY)
const substrate = (cx, tipY, s = 1, fill = SUB, stroke = C.olive) => {
  const tw = 46 * s, bw = 16 * s, h = 70 * s;
  return `<polygon points="${cx - tw},${tipY - h} ${cx + tw},${tipY - h} ${cx + bw},${tipY} ${cx - bw},${tipY}" fill="${fill}" stroke="${stroke}" stroke-width="${3 * Math.max(s, 0.8)}" stroke-linejoin="round"/>`;
};
const star = (cx, cy, r = 24) => {
  const p = []; for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8 - Math.PI / 2, rr = i % 2 ? r * 0.5 : r; p.push(`${cx + rr * Math.cos(a)},${cy + rr * Math.sin(a)}`); }
  return `<polygon points="${p.join(' ')}" fill="${GOLD}" stroke="${C.olive}" stroke-width="2"/>`;
};
const num = (cx, cy, n) => `<circle cx="${cx}" cy="${cy}" r="18" fill="${C.ink}"/>` + t(cx, cy + 7, String(n), { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });

// ---------- 01 Enzyme action ----------
function action() {
  const o = [];
  const pw = 420, ph = 380;
  const cell = (i, j) => [30 + j * (pw + 20), 120 + i * (ph + 20)];
  // 1
  let [x, y] = cell(0, 0), cx = x + pw / 2;
  o.push(panel(x, y, pw, ph, '#ffffff', C.ink), num(x + 32, y + 34, 1));
  o.push(substrate(cx, y + 130), t(cx + 56, y + 76, 'substrate', { size: 20, weight: 700, fill: C.olive }), t(cx + 56, y + 102, '(fat)', { size: 19, fill: C.olive }));
  o.push(fa(cx, y + 144, cx, y + 176, C.ink, 3.5, 16));
  o.push(enzyme(cx, y + 186));
  o.push(t(x + 20, y + 136, 'active site', { size: 20, weight: 700, fill: C.tealDark }), `<line x1="${x + 84}" y1="${y + 148}" x2="${cx - 22}" y2="${y + 196}" stroke="${C.tealDark}" stroke-width="2"/><circle cx="${cx - 22}" cy="${y + 196}" r="4" fill="${C.tealDark}"/>`);
  o.push(t(cx, y + 336, 'Substrate meets the', { size: 21, weight: 700, anchor: 'middle' }), t(cx, y + 364, 'active site', { size: 21, weight: 700, anchor: 'middle' }));
  // 2
  [x, y] = cell(0, 1); cx = x + pw / 2;
  o.push(panel(x, y, pw, ph, '#ffffff', C.ink), num(x + 32, y + 34, 2));
  o.push(enzyme(cx, y + 186), substrate(cx, y + 186 + 44));
  o.push(t(cx + 60, y + 150, 'substrate', { size: 20, weight: 700, fill: C.olive }));
  o.push(t(cx, y + 336, 'Substrate fits:', { size: 21, weight: 700, anchor: 'middle' }), t(cx, y + 364, 'enzyme-substrate complex', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  // 3
  [x, y] = cell(1, 0); cx = x + pw / 2;
  o.push(panel(x, y, pw, ph, '#ffffff', C.ink), num(x + 32, y + 34, 3));
  o.push(enzyme(cx, y + 186));
  o.push(`<polygon points="${cx - 46},${y + 160} ${cx - 2},${y + 160} ${cx - 2},${y + 230} ${cx - 16},${y + 230}" fill="#dce9e7" stroke="${C.tealDark}" stroke-width="3" stroke-linejoin="round"/>`);
  o.push(`<polygon points="${cx + 2},${y + 160} ${cx + 46},${y + 160} ${cx + 16},${y + 230} ${cx + 2},${y + 230}" fill="${SUB}" stroke="${C.olive}" stroke-width="3" stroke-linejoin="round"/>`);
  o.push(t(x + 20, y + 76, 'glycerol', { size: 20, weight: 700, fill: C.tealDark }), `<line x1="${x + 70}" y1="${y + 88}" x2="${cx - 30}" y2="${y + 166}" stroke="${C.tealDark}" stroke-width="2"/>`);
  o.push(t(x + pw - 20, y + 76, 'fatty acids', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }), `<line x1="${x + pw - 70}" y1="${y + 88}" x2="${cx + 30}" y2="${y + 166}" stroke="${C.olive}" stroke-width="2"/>`);
  o.push(t(cx, y + 336, 'Products form', { size: 21, weight: 700, anchor: 'middle' }), t(cx, y + 364, 'in the active site', { size: 21, weight: 700, anchor: 'middle' }));
  // 4
  [x, y] = cell(1, 1); cx = x + pw / 2;
  o.push(panel(x, y, pw, ph, '#ffffff', C.ink), num(x + 32, y + 34, 4));
  o.push(enzyme(cx, y + 186));
  o.push(`<polygon points="${cx - 84},${y + 82} ${cx - 44},${y + 66} ${cx - 24},${y + 140} ${cx - 36},${y + 146}" fill="#dce9e7" stroke="${C.tealDark}" stroke-width="3" stroke-linejoin="round"/>`);
  o.push(`<polygon points="${cx + 30},${y + 66} ${cx + 76},${y + 82} ${cx + 34},${y + 146} ${cx + 22},${y + 140}" fill="${SUB}" stroke="${C.olive}" stroke-width="3" stroke-linejoin="round"/>`);
  o.push(fa(cx - 10, y + 182, cx - 30, y + 156, C.tealDark, 3, 14), fa(cx + 10, y + 182, cx + 30, y + 156, C.olive, 3, 14));
  o.push(t(x + 70, y + 40, 'glycerol', { size: 20, weight: 700, fill: C.tealDark }), t(x + pw - 20, y + 40, 'fatty acids', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(t(cx, y + 336, 'Products leave;', { size: 21, weight: 700, anchor: 'middle' }), t(cx, y + 364, 'enzyme unchanged', { size: 21, weight: 700, anchor: 'middle' }));
  return svg(W, 920, 'How an enzyme works', o.join('\n'), 'Lipase breaks down fat • schematic');
}

// ---------- 02 Specificity ----------
function specificity() {
  const o = [];
  o.push(panel(30, 124, 840, 260, '#ffffff', C.ink));
  o.push(enzyme(200, 238), substrate(200, 238 + 44));
  o.push(t(268, 186, 'fat', { size: 21, weight: 700, fill: C.olive }));
  o.push(`<circle cx="530" cy="222" r="28" fill="none" stroke="${C.tealDark}" stroke-width="4"/><path d="M516 222 L527 234 L546 208" fill="none" stroke="${C.tealDark}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>`);
  o.push(t(578, 212, 'fat fits', { size: 22, weight: 700, fill: C.tealDark }), t(578, 244, 'complex forms', { size: 21 }), t(578, 274, 'reaction happens', { size: 21 }));
  o.push(panel(30, 404, 840, 260, '#ffffff', C.ink));
  for (const [i, dy] of [[0, 8], [1, -8], [2, 8], [3, -8], [4, 8]]) o.push(`<circle cx="${130 + i * 34}" cy="${450 + dy}" r="17" fill="${STARCH}" stroke="${PURPLE}" stroke-width="2.5"/>`);
  o.push(t(330, 462, 'starch', { size: 21, weight: 700, fill: PURPLE }));
  o.push(fa(200, 482, 200, 512, C.ink, 3.5, 16));
  o.push(enzyme(200, 520));
  o.push(`<circle cx="530" cy="500" r="28" fill="none" stroke="${RED}" stroke-width="4"/><path d="M516 486 L544 514 M544 486 L516 514" stroke="${RED}" stroke-width="4.5" stroke-linecap="round"/>`);
  o.push(t(578, 490, 'starch does not fit', { size: 22, weight: 700, fill: RED }), t(578, 522, 'no complex forms', { size: 21 }), t(578, 552, 'no reaction', { size: 21 }));
  return svg(W, 690, 'Why each enzyme is specific', o.join('\n'), 'Only a complementary shape fits');
}

// ---------- 05 Temperature and collisions ----------
function temperature() {
  const o = [];
  const xs = [150, 450, 750];
  // cooler
  o.push(panel(30, 120, 840, 330, '#ffffff', C.ink));
  o.push(t(56, 160, 'Cooler: slow particles', { size: 23, weight: 700 }));
  const ey = 320;
  xs.forEach((x) => o.push(enzyme(x, ey, 0.6, '')));
  o.push(substrate(xs[1], ey + 26, 0.6), star(xs[1], ey - 52, 26));
  for (const [x, y] of [[140, 240], [580, 240], [700, 228]]) { o.push(substrate(x, y, 0.5)); o.push(fa(x + 32, y - 18, x + 80, y - 18, C.ink, 3.5, 16)); }
  o.push(t(450, 426, 'few effective collisions', { size: 21, weight: 700, anchor: 'middle' }));
  // warmer
  o.push(panel(30, 470, 840, 330, '#ffffff', C.ink));
  o.push(t(56, 510, 'Warmer: more kinetic energy', { size: 23, weight: 700, fill: C.olive }));
  const wy = 670;
  xs.forEach((x) => { o.push(enzyme(x, wy, 0.6, '')); o.push(substrate(x, wy + 26, 0.6), star(x, wy - 52, 26)); });
  for (const [x, y] of [[190, 576], [510, 570]]) { o.push(substrate(x, y, 0.5)); o.push(fa(x + 32, y - 18, x + 150, y - 18, C.olive, 3.5, 18)); }
  o.push(t(450, 776, 'more frequent effective collisions', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(450, 836, 'Arrow length = speed', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 860, 'Why heat speeds enzymes up', o.join('\n'), 'Below the optimum temperature');
}

export const figures = [
  { name: '01-enzyme-action', after: '## 1. Structure and function of molecules', svg: action(),
    alt: 'Four panels show lipase acting on a fat. The fat, shaped to fit the notch-like active site, approaches, fits, is converted into glycerol and fatty acids, and the products leave while the same enzyme is unchanged.',
    caption: 'The substrate fits the active site, products form and leave, and the enzyme is unchanged.' },
  { name: '02-specificity', after: '## Worked example: explaining enzyme specificity', svg: specificity(),
    alt: 'Lipase is shown with two molecules. Fat has a complementary shape, fits the active site and reacts. Starch, a chain of beads, has a different shape, does not fit and nothing happens.',
    caption: 'Only a substrate with a complementary shape fits the active site.' },
  { name: '05-temperature-collisions', after: '### Effects on rate', svg: temperature(),
    alt: 'Two panels at temperatures below the optimum. Cooler: slow substrate molecules, short arrows, one enzyme has a substrate bound. Warmer: more kinetic energy, long arrows, more frequent effective collisions, three enzymes have substrates bound.',
    caption: 'More kinetic energy gives more frequent effective collisions and more enzyme-substrate complexes per unit time.' },
];
