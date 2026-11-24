// Board-neutral replacements for three Cambridge IGCSE pictures used on AQA GCSE Biology 8461 pages
// (villus, osmosis, active transport). No tier badges and no "water potential": AQA 8461 describes
// osmosis in terms of dilute and concentrated solutions. Every label comes from the AQA page text.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-transport-in-cells';
const W = 900;
const RED = '#b5402e', SKIN = '#f2d5c0', WATER = '#5b8fd6';

// ---------- 1. Villus ----------
function villus() {
  const out = [];
  // lining with villi
  out.push(t(W / 2, 112, 'Small intestine lining: millions of villi', { size: 20, weight: 700, anchor: 'middle' }));
  out.push(`<rect x="40" y="250" width="820" height="34" rx="10" fill="#efc4bb" stroke="${C.ink}" stroke-width="2.5"/>`);
  for (let i = 0; i < 9; i++) {
    const x = 62 + i * 90, hl = i === 4;
    out.push(`<path d="M${x} 252 V178 a30 30 0 0 1 60 0 V252" fill="${SKIN}" stroke="${hl ? C.olive : C.ink}" stroke-width="${hl ? 4.5 : 2.5}"/>`);
  }
  out.push(t(W / 2, 318, 'Large surface area: more glucose is absorbed at once', { size: 18, fill: C.tealDark, weight: 700, anchor: 'middle' }));
  out.push(arrow(W / 2, 336, W / 2, 378, { color: C.olive, marker: 'ahO' }));
  out.push(t(W / 2 + 14, 366, 'one villus', { size: 17, fill: C.olive, weight: 700 }));
  // zoomed villus
  const cx = 300, top = 400, bot = 860, r = 120;
  out.push(`<path d="M${cx - r} ${bot} V${top + r} a${r} ${r} 0 0 1 ${2 * r} 0 V${bot}" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>`);
  const ri = r - 22;
  out.push(`<path d="M${cx - ri} ${bot} V${top + r} a${ri} ${ri} 0 0 1 ${2 * ri} 0 V${bot}" fill="${SKIN}" stroke="${C.ink}" stroke-width="2"/>`);
  // capillary network: loop plus rungs
  const rc = ri - 30;
  out.push(`<path d="M${cx - rc} ${bot + 20} V${top + r} a${rc} ${rc} 0 0 1 ${2 * rc} 0 V${bot + 20}" fill="none" stroke="${RED}" stroke-width="6"/>`);
  for (let y = top + r + 50; y < bot; y += 70) out.push(`<line x1="${cx - rc}" y1="${y}" x2="${cx + rc}" y2="${y}" stroke="${RED}" stroke-width="4"/>`);
  out.push(`<rect x="${cx - 190}" y="${bot}" width="380" height="44" fill="#efc4bb" stroke="${C.ink}" stroke-width="2.5"/>`);
  // absorbed food arrows from the gut cavity
  out.push(t(40, top + 130, 'gut cavity', { size: 17, fill: C.muted }));
  for (const y of [top + 180, top + 260, top + 340]) {
    out.push(`<circle cx="70" cy="${y}" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`);
    out.push(arrow(88, y, cx - r - 6, y, { color: C.olive, marker: 'ahO' }));
  }
  out.push(t(40, top + 400, 'digested food', { size: 16, fill: C.muted }));
  out.push(t(40, top + 422, 'e.g. glucose', { size: 16, fill: C.muted }));
  // labels
  const lx = 520;
  const lab = (y, ty, head, sub, color) => {
    out.push(`<line x1="${lx - 12}" y1="${ty}" x2="${y[0]}" y2="${y[1]}" stroke="${C.ink}" stroke-width="2"/><circle cx="${y[0]}" cy="${y[1]}" r="5" fill="${C.ink}"/>`);
    out.push(t(lx, ty + 6, head, { size: 20, weight: 700, fill: color }));
    out.push(tl(lx, ty + 32, sub, { size: 17, fill: C.muted }, 23));
  };
  lab([cx + r - 10, top + 220], top + 190, 'Wall one cell thick', ['short diffusion path'], C.ink);
  lab([cx + rc, top + 330], top + 300, 'Good capillary network', ['carries absorbed food away,', 'keeping the gradient steep'], RED);
  out.push(t(W / 2, 980, 'General diagram, schematic, not to scale', { size: 16, fill: C.muted, anchor: 'middle', italic: true }));
  return svg(W, 1010, 'Villi in the small intestine', out.join('\n'));
}

// ---------- 2. Osmosis ----------
function osmosis() {
  const out = [];
  const L = 60, R = 840, top = 140, bot = 520, mx = 450;
  out.push(panel(L, top, R - L, bot - top));
  out.push(`<rect x="${L}" y="${top}" width="${mx - L}" height="${bot - top}" rx="14" fill="${C.tealLight}"/>`);
  out.push(`<rect x="${mx}" y="${top}" width="${R - mx}" height="${bot - top}" rx="14" fill="${C.cream}"/>`);
  // membrane
  for (let y = top + 8; y < bot - 8; y += 34) out.push(`<rect x="${mx - 7}" y="${y}" width="14" height="22" rx="4" fill="${C.ink}"/>`);
  out.push(t(L + 20, top + 36, 'Dilute solution', { size: 20, weight: 700, fill: C.tealDark }));
  out.push(t(L + 20, top + 62, 'more water, less solute', { size: 17, fill: C.muted }));
  out.push(t(R - 20, top + 36, 'Concentrated solution', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }));
  out.push(t(R - 20, top + 62, 'less water, more solute', { size: 17, fill: C.muted, anchor: 'end' }));
  const water = (x, y) => `<circle cx="${x}" cy="${y}" r="8" fill="${WATER}"/>`;
  const sugar = (x, y) => `<circle cx="${x}" cy="${y}" r="19" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  // left: many water, 2 sugar
  const lw = [[110, 120], [170, 150], [240, 110], [300, 160], [370, 120], [130, 210], [210, 230], [280, 250], [350, 215], [400, 280], [120, 300], [190, 330], [260, 320], [330, 340], [390, 360], [150, 370], [240, 380]];
  lw.forEach(([x, y]) => out.push(water(x, top + y - 30)));
  out.push(sugar(200, top + 270), sugar(330, top + 280 - 10));
  // right: fewer water, many sugar
  const rw = [[520, 130], [610, 110], [700, 150], [790, 120], [560, 250], [680, 230], [770, 300], [520, 360], [640, 370], [750, 380]];
  rw.forEach(([x, y]) => out.push(water(x, top + y - 30)));
  [[570, 170], [680, 180], [780, 200], [600, 300], [710, 300], [560, 375], [690, 372]].forEach(([x, y]) => out.push(sugar(x, top + y - 30)));
  // net movement arrow
  out.push(arrow(300, bot + 52, 600, bot + 52, { color: WATER, w: 6 }));
  out.push(t(W / 2, bot + 92, 'Net movement of water: dilute → concentrated', { size: 20, weight: 700, anchor: 'middle' }));
  // key
  out.push(water(110, bot + 136), t(128, bot + 142, 'water molecule: passes through', { size: 17 }));
  out.push(sugar(510, bot + 136), t(538, bot + 142, 'sucrose: too large to pass', { size: 17 }));
  out.push(t(W / 2, bot + 186, 'Partially permeable membrane · no energy needed', { size: 18, fill: C.muted, anchor: 'middle' }));
  // plant tissue outcomes
  const y0 = bot + 216, bw = 252, gap = 22;
  const cases = [
    ['Solution more dilute', 'than the cell contents', 'cells gain water:', 'tissue gains mass', C.tealLight, C.tealDark],
    ['Same concentration', 'as the cell contents', 'no net movement:', 'mass does not change', '#ffffff', C.panelEdge],
    ['Solution more', 'concentrated', 'cells lose water:', 'tissue loses mass', C.cream, C.olive],
  ];
  cases.forEach(([a, b, c, d, fill, edge], i) => {
    const x = 60 + i * (bw + gap);
    out.push(panel(x, y0, bw, 138, fill, edge));
    out.push(t(x + bw / 2, y0 + 34, a, { size: 18, weight: 700, anchor: 'middle' }));
    out.push(t(x + bw / 2, y0 + 58, b, { size: 17, anchor: 'middle' }));
    out.push(t(x + bw / 2, y0 + 94, c, { size: 17, fill: C.muted, anchor: 'middle' }));
    out.push(t(x + bw / 2, y0 + 118, d, { size: 17, weight: 700, anchor: 'middle' }));
  });
  return svg(W, y0 + 170, 'Osmosis', out.join('\n'), 'Water diffuses through a partially permeable membrane');
}

// ---------- 3. Active transport ----------
function activeTransport() {
  const out = [];
  const L = 60, R = 840, top = 130, mem = 340, bot = 560;
  out.push(`<rect x="${L}" y="${top}" width="${R - L}" height="${mem - top}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>`);
  out.push(`<rect x="${L}" y="${mem + 30}" width="${R - L}" height="${bot - mem - 30}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`);
  out.push(`<rect x="${L}" y="${mem}" width="${R - L}" height="30" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`);
  out.push(t(L + 18, mem + 22, 'cell membrane', { size: 16, weight: 700 }));
  out.push(t(L + 18, top + 32, 'More concentrated solution', { size: 19, weight: 700, fill: C.olive }));
  out.push(t(L + 18, bot - 16, 'More dilute solution', { size: 19, weight: 700, fill: C.tealDark }));
  const p = (x, y) => `<circle cx="${x}" cy="${y}" r="11" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.5"/>`;
  [[120, 90], [190, 130], [260, 80], [330, 140], [520, 90], [600, 140], [690, 85], [760, 140], [150, 175], [430, 110], [640, 185], [300, 190]].forEach(([x, y]) => out.push(p(x, top + y)));
  [[160, 110], [300, 50], [420, 150]].forEach(([x, y]) => out.push(p(x, mem + 30 + y)));
  // against-gradient arrow with energy
  out.push(arrow(470, bot - 30, 470, top + 40, { color: C.rust, w: 7, marker: 'ahR' }));
  out.push(panel(500, mem + 60, 320, 104, '#ffffff', C.rust));
  out.push(t(520, mem + 92, 'Against the gradient', { size: 19, weight: 700, fill: C.rust }));
  out.push(t(520, mem + 120, 'dilute → concentrated', { size: 17 }));
  out.push(t(520, mem + 146, 'needs energy from respiration', { size: 17, weight: 700 }));
  // examples
  const y0 = bot + 36, bw = 380;
  const ex = [
    ['Root hair cells', ['mineral ions: very dilute in the soil,', 'more concentrated in the cell'], 'for healthy plant growth'],
    ['Gut', ['sugar molecules: lower concentration', 'in the gut, higher in the blood'], 'cells use the sugar for respiration'],
  ];
  ex.forEach(([h, lines, why], i) => {
    const x = 60 + i * (bw + 20);
    out.push(panel(x, y0, bw, 150));
    out.push(t(x + 20, y0 + 36, h, { size: 20, weight: 700 }));
    out.push(tl(x + 20, y0 + 66, lines, { size: 17 }, 24));
    out.push(t(x + 20, y0 + 128, why, { size: 17, fill: C.muted }));
  });
  out.push(t(W / 2, y0 + 192, 'Less respiration means less active transport (e.g. roots in waterlogged soil get little oxygen).', { size: 16, fill: C.muted, anchor: 'middle' }));
  return svg(W, y0 + 222, 'Active transport', out.join('\n'), 'Schematic');
}

export const figures = [
  { name: '01-villus', after: '### Adaptations of exchange surfaces', svg: villus(),
    alt: 'The small intestine lining is covered in millions of villi, giving a large surface area so more glucose is absorbed at once. One villus is enlarged: digested food such as glucose crosses its wall, which is one cell thick for a short diffusion path, into a good capillary network that carries absorbed food away and keeps the gradient steep.',
    caption: 'Villi give a large surface area, a thin wall and a good blood supply.' },
  { name: '02-osmosis', after: '## Osmosis (4.1.3.2)', svg: osmosis(),
    alt: 'A partially permeable membrane separates a dilute solution (more water, less solute) from a concentrated solution (less water, more solute). Water molecules pass through but sucrose molecules are too large, so there is a net movement of water from the dilute to the concentrated solution, with no energy needed. Below, plant tissue gains mass in a more dilute solution, loses mass in a more concentrated one, and does not change at the same concentration.',
    caption: 'In osmosis water moves from a dilute to a concentrated solution through a partially permeable membrane.' },
  { name: '03-active-transport', after: '## Active transport (4.1.3.3)', svg: activeTransport(),
    alt: 'Particles are moved across a cell membrane from a more dilute solution to a more concentrated one, against the concentration gradient, using energy from respiration. Two examples: root hair cells take in mineral ions from very dilute soil water, and sugar molecules move from a lower concentration in the gut into blood with a higher concentration. Less respiration, as in waterlogged roots, means less active transport.',
    caption: 'Active transport moves substances against the gradient using energy from respiration.' },
];
