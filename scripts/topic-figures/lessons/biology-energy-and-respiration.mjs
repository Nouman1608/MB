// Board-neutral redraws of ten A Level respiration pictures first drawn for Cambridge 9700 and reused on
// AQA, OCR, Edexcel IAL and OxfordAQA pages. Same content and numbers; the "Core" tier pills and the
// board-name lists are gone.
import { C, svg, panel, t, tl, path } from '../style.mjs';

export const slug = 'biology-energy-and-respiration';
const W = 900;
const GOLD = '#d4b02e', BEAD = '#d4b02e', MATRIX = '#f2e7b8', CYTO = '#eef4f3', MEM = '#6fa9a2', IMS = '#dce9e7', H = '#b5602e';

const sub = (base, s, rest = '') => `${base}<tspan dy="5" font-size="70%">${s}</tspan><tspan dy="-5"${rest.startsWith(' ') ? ' dx="5"' : ''}>${rest.trimStart()}</tspan>`;
const sup = (base, s, rest = '') => `${base}<tspan dy="-8" font-size="70%">${s}</tspan><tspan dy="8"${rest.startsWith(' ') ? ' dx="5"' : ''}>${rest.trimStart()}</tspan>`;
const CO2 = (pre = '', post = '') => `${pre}CO<tspan dy="5" font-size="70%">2</tspan><tspan dy="-5"${post.startsWith(' ') ? ' dx="5"' : ''}>${post.trimStart()}</tspan>`;
function fa(x1, y1, x2, y2, color = C.ink, w = 3.5, head = 20) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
  const bx = x2 - ux * head, by = y2 - uy * head, hw = head * 0.6;
  return `<line x1="${x1}" y1="${y1}" x2="${bx}" y2="${by}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>` +
    `<polygon points="${x2},${y2} ${bx - uy * hw},${by + ux * hw} ${bx + uy * hw},${by - ux * hw}" fill="${color}"/>`;
}
const beads = (x, y, n, r = 12, fill = BEAD) => Array.from({ length: n }, (_, i) => `<circle cx="${x + r + i * 2 * r}" cy="${y}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`).join('');
const pbead = (cx, cy, r = 12) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${MEM}" stroke="${C.ink}" stroke-width="2"/>` + t(cx, cy + 5, 'P', { size: 14, weight: 700, fill: '#ffffff', anchor: 'middle' });
const pill = (x, y, w, s, fill = IMS, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="38" rx="19" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>` + t(x + w / 2, y + 26, s, { size: 19, weight: 700, anchor: 'middle', ...o });
const num = (cx, cy, n) => `<circle cx="${cx}" cy="${cy}" r="19" fill="${C.ink}"/>` + t(cx, cy + 7, String(n), { size: 20, weight: 700, fill: '#ffffff', anchor: 'middle' });
const rbox = (x, y, w, hh, fill = '#ffffff', sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="12" fill="${fill}" stroke="${C.ink}" stroke-width="${sw}"/>`;
const hplus = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="22" fill="#ffffff" stroke="${H}" stroke-width="2.5"/>` + t(cx, cy + 7, sup('H', '+'), { size: 18, weight: 700, fill: H, anchor: 'middle' });

// ---------- 01 Overview ----------
function overview() {
  const o = [];
  o.push(`<rect x="30" y="120" width="840" height="300" fill="${CYTO}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<rect x="30" y="420" width="840" height="310" fill="${MATRIX}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<rect x="30" y="730" width="840" height="290" fill="#b5d3cf" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<line x1="30" y1="414" x2="870" y2="414" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(46, 154, 'Cytoplasm', { size: 21, weight: 700, fill: C.tealDark }));
  o.push(t(46, 454, 'Mitochondrial matrix', { size: 21, weight: 700, fill: C.olive }));
  o.push(t(858, 766, 'Inner mitochondrial membrane', { size: 21, weight: 700, anchor: 'end' }));
  // glycolysis row
  o.push(beads(50, 258, 6));
  o.push(t(50, 300, 'glucose 6C', { size: 19, fill: C.muted }));
  o.push(fa(230, 260, 288, 260));
  o.push(rbox(296, 222, 220, 76), t(406, 270, 'Glycolysis', { size: 23, weight: 700, anchor: 'middle' }), num(296, 224, 1));
  o.push(fa(518, 260, 594, 260));
  o.push(beads(602, 238, 3), beads(602, 282, 3));
  o.push(t(704, 254, '2 pyruvate', { size: 21, weight: 700 }), t(704, 280, '3C each', { size: 19, fill: C.muted }));
  o.push(pill(50, 330, 152, 'net 2 ATP', MATRIX), pill(216, 330, 208, '2 reduced NAD', IMS));
  o.push(fa(640, 300, 640, 504));
  o.push(t(654, 376, 'transport protein', { size: 18, fill: C.muted }));
  // matrix row
  o.push(rbox(578, 506, 252, 76), t(704, 554, 'Link reaction', { size: 23, weight: 700, anchor: 'middle' }), num(578, 508, 2));
  o.push(pill(580, 600, 96, CO2('2 '), IMS));
  o.push(fa(576, 544, 504, 544));
  o.push(beads(430, 522, 2), beads(430, 566, 2));
  o.push(t(398, 612, '2 acetyl CoA', { size: 20, weight: 700, anchor: 'middle' }), t(398, 638, '2C each', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(fa(420, 560, 338, 552));
  o.push(`<circle cx="250" cy="555" r="75" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(t(250, 548, 'Krebs', { size: 22, weight: 700, anchor: 'middle' }), t(250, 576, 'cycle', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(num(182, 490, 3));
  o.push(pill(38, 494, 98, CO2('4 '), IMS), pill(38, 538, 98, '2 ATP', MATRIX));
  o.push(fa(250, 632, 250, 856, C.tealDark, 4, 28));
  o.push(t(272, 674, 'reduced NAD', { size: 20, weight: 700, fill: C.tealDark }), t(272, 700, 'and FAD', { size: 20, weight: 700, fill: C.tealDark }));
  // membrane row
  o.push(num(78, 820, 4));
  o.push(`<rect x="60" y="868" width="780" height="40" rx="8" fill="${MEM}" stroke="${C.ink}" stroke-width="2.5"/>`);
  for (const cx of [160, 300, 440]) o.push(`<ellipse cx="${cx}" cy="888" rx="44" ry="40" fill="${MATRIX}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(fa(206, 888, 254, 888, C.olive, 4, 18), fa(346, 888, 394, 888, C.olive, 4, 18), fa(486, 888, 562, 888, C.olive, 4, 18));
  o.push(t(576, 896, `O<tspan dy="5" font-size="70%">2</tspan><tspan dy="-5" dx="5">→ H</tspan><tspan dy="5" font-size="70%">2</tspan><tspan dy="-5">O</tspan>`, { size: 20, weight: 700 }));
  o.push(`<rect x="738" y="850" width="30" height="64" fill="${MATRIX}" stroke="${C.ink}" stroke-width="2.5"/><circle cx="753" cy="826" r="30" fill="${MATRIX}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(300, 966, 'Electron transport chain', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(754, 946, 'ATP synthase', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(pill(620, 958, 236, 'most of the ATP', MATRIX));
  return svg(W, 1050, 'Aerobic respiration: four stages', o.join('\n'), 'One glucose, three places in the cell');
}

// ---------- 02 Mitochondrion ----------
function mito() {
  const o = [];
  const cx = 450, cy = 470;
  o.push(`<ellipse cx="${cx}" cy="${cy}" rx="380" ry="196" fill="${MATRIX}" stroke="${C.ink}" stroke-width="5"/>`);
  // inner membrane with cristae: build a wavy closed path
  // simpler: draw inner membrane as ellipse-ish path with finger folds
  const pts = [];
  const rx = 330, ry = 150, folds = [[-0.118, 1], [0.034, 1], [0.185, 1], [-0.118, -1], [0.034, -1], [0.185, -1]];
  const N = 360;
  for (let i = 0; i <= N; i++) {
    const a = (i / N) * 2 * Math.PI;
    let x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a);
    // fold depth where x is near fold positions on the top (sin<0) or bottom (sin>0)
    for (const [fx, side] of folds) {
      const X = cx + fx * 594;
      const onSide = side < 0 ? Math.sin(a) < -0.3 : Math.sin(a) > 0.3;
      if (onSide) {
        const dx = (x - X) / 30;
        const g = Math.exp(-dx * dx * dx * dx);
        y = y - side * g * 85;
      }
    }
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  o.push(`<path d="M${pts.join(' L')} Z" fill="#fdf3c4" stroke="${C.tealDark}" stroke-width="5" stroke-linejoin="round"/>`);
  o.push(t(170, 430, 'Matrix', { size: 21, weight: 700 }), tl(170, 460, ['link reaction,', 'Krebs cycle'], { size: 19, fill: C.muted }, 28));
  o.push(t(170, 526, 'Ribosomes', { size: 20, weight: 700 }));
  for (const [x, y] of [[300, 512], [326, 526], [302, 540]]) o.push(`<circle cx="${x}" cy="${y}" r="8" fill="${C.ink}"/>`);
  o.push(t(690, 432, 'Circular DNA', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(`<circle cx="690" cy="485" r="30" fill="none" stroke="${C.ink}" stroke-width="4"/><circle cx="690" cy="485" r="21" fill="none" stroke="${C.ink}" stroke-width="2"/>`);
  const lead = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x2}" cy="${y2}" r="5" fill="${C.ink}"/>`;
  o.push(t(60, 220, 'Outer membrane', { size: 20, weight: 700 }), lead(200, 228, 260, 301));
  o.push(t(850, 190, 'Intermembrane space', { size: 20, weight: 700, anchor: 'end' }), t(850, 218, sup('H', '+', ' gather here'), { size: 19, fill: C.muted, anchor: 'end' }), lead(760, 232, 680, 336));
  o.push(t(60, 800, 'Cristae', { size: 20, weight: 700 }), t(60, 828, 'more surface area', { size: 19, fill: C.muted }), lead(140, 770, 410, 578));
  o.push(t(850, 800, 'Inner membrane', { size: 20, weight: 700, anchor: 'end' }), t(850, 828, 'carriers + ATP synthase', { size: 19, fill: C.muted, anchor: 'end' }), lead(700, 770, 640, 612));
  o.push(panel(30, 880, 840, 200, '#ffffff', C.ink));
  o.push(t(56, 924, 'Electron micrograph: length 27 mm, magnification ×15 000', { size: 20, weight: 700 }));
  o.push(t(56, 976, 'actual = image ÷ magnification', { size: 19 }));
  o.push(t(56, 1024, '= 27 mm ÷ 15 000 = 0.0018 mm', { size: 19 }));
  o.push(t(56, 1062, '= 1.8 μm', { size: 24, weight: 700, fill: C.tealDark }));
  return svg(W, 1110, 'Inside a mitochondrion', o.join('\n'), 'Schematic - not to scale');
}

// ---------- 03 Glycolysis ----------
function glycolysis() {
  const o = [];
  o.push(t(350, 198, 'glucose', { size: 21, weight: 700, anchor: 'end' }), beads(366, 190, 6), t(524, 198, '6C', { size: 19, fill: C.muted }));
  o.push(num(50, 300, 1), t(80, 308, 'Add 2 phosphates', { size: 21, weight: 700 }));
  o.push(fa(450, 216, 450, 330, C.ink, 3.5, 22), t(470, 260, '2 ATP → 2 ADP', { size: 21, weight: 700, fill: C.olive }));
  o.push(pbead(366, 380), beads(378, 380, 6), pbead(534, 380));
  o.push(t(450, 432, 'hexose bisphosphate 6C', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(num(50, 500, 2), t(80, 508, 'Split in two', { size: 21, weight: 700 }));
  o.push(fa(430, 452, 288, 522), fa(470, 452, 632, 522));
  for (const cx of [290, 630]) {
    o.push(beads(cx - 42, 580, 3), pbead(cx + 42, 580));
    o.push(t(cx, 632, 'triose phosphate 3C', { size: 20, weight: 700, anchor: 'middle' }));
    o.push(fa(cx, 652, cx, 820, C.ink, 3.5, 22));
    o.push(t(cx + 20, 692, '1 reduced NAD', { size: 20, weight: 700, fill: C.tealDark }));
    o.push(t(cx + 20, 726, '2 ADP → 2 ATP', { size: 20, weight: 700, fill: C.olive }));
    o.push(beads(cx - 36, 850, 3));
    o.push(t(cx, 900, 'pyruvate 3C', { size: 20, weight: 700, anchor: 'middle' }));
  }
  o.push(num(50, 724, 3), tl(80, 716, ['Oxidise', 'to pyruvate'], { size: 21, weight: 700 }, 32));
  o.push(rbox(30, 940, 840, 150));
  o.push(t(56, 988, 'ATP used 2', { size: 22, weight: 700 }), t(300, 988, 'made 4', { size: 22, weight: 700 }), t(470, 988, 'net 2 ATP', { size: 24, weight: 700, fill: C.olive }));
  o.push(t(56, 1040, '2 reduced NAD', { size: 22, weight: 700, fill: C.tealDark }), t(380, 1040, '2 pyruvate', { size: 22, weight: 700 }));
  o.push(t(56, 1076, 'per glucose', { size: 18, fill: C.muted }));
  return svg(W, 1120, 'Glycolysis', o.join('\n'), 'In the cytoplasm, no oxygen needed');
}

// ---------- 04 Link and Krebs ----------
function linkKrebs() {
  const o = [];
  o.push(rbox(30, 140, 840, 260));
  o.push(t(50, 196, 'Link reaction', { size: 24, weight: 700, fill: C.olive }));
  o.push(t(850, 196, 'twice per glucose', { size: 19, fill: C.muted, anchor: 'end' }));
  o.push(beads(60, 300, 3), t(60, 348, 'pyruvate 3C', { size: 20, weight: 700 }));
  o.push(fa(176, 300, 272, 300));
  o.push(fa(222, 290, 222, 258, C.rust, 3.5, 16));
  o.push(pill(176, 218, 96, CO2('1 '), IMS));
  o.push(beads(300, 300, 2), `<rect x="362" y="282" width="82" height="36" rx="6" fill="${MEM}" stroke="${C.ink}" stroke-width="2"/>`, t(403, 308, 'CoA', { size: 20, weight: 700, fill: '#ffffff', anchor: 'middle' }));
  o.push(t(300, 348, 'acetyl CoA 2C', { size: 20, weight: 700 }));
  o.push(pill(558, 282, 266, 'NAD → reduced NAD', IMS));
  o.push(t(50, 442, 'Krebs cycle', { size: 24, weight: 700, fill: C.olive }), t(50, 474, 'one turn per acetyl CoA', { size: 19, fill: C.muted }));
  o.push(fa(450, 408, 450, 536, C.ink, 3.5, 24), t(470, 472, 'acetyl CoA joins', { size: 20, weight: 700 }));
  o.push(rbox(336, 538, 230, 82), beads(374, 566, 6), t(451, 606, 'citrate 6C', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(rbox(336, 918, 230, 82), beads(400, 946, 4), t(451, 986, 'oxaloacetate 4C', { size: 20, weight: 700, anchor: 'middle' }));
  // cycle arcs
  const cx = 450, cy = 770, r = 190;
  const P = (a) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)];
  const [a1x, a1y] = P(-48), [a2x, a2y] = P(52);
  o.push(`<path d="M${a1x} ${a1y} A${r} ${r} 0 0 1 ${a2x} ${a2y}" fill="none" stroke="${C.ink}" stroke-width="5"/>`);
  const [b1x, b1y] = P(132), [b2x, b2y] = P(228);
  o.push(`<path d="M${b1x} ${b1y} A${r} ${r} 0 0 1 ${b2x} ${b2y}" fill="none" stroke="${C.ink}" stroke-width="5"/>`);
  const head = (x, y, ang) => { const u = [Math.cos(ang), Math.sin(ang)], hw = 14, hl = 30; return `<polygon points="${x + u[0] * hl},${y + u[1] * hl} ${x - u[1] * hw},${y + u[0] * hw} ${x + u[1] * hw},${y - u[0] * hw}" fill="${C.ink}"/>`; };
  o.push(head(a2x, a2y, (52 + 90 + 8) * Math.PI / 180), head(b2x, b2y, (228 + 90 + 8) * Math.PI / 180));
  o.push(tl(450, 764, ['per turn', 'regenerates', 'the 4C compound'], { size: 19, fill: C.muted, anchor: 'middle' }, 28));
  const outs = [[-22, CO2('2 '), IMS, 120], [3, '3 reduced NAD', IMS, 206], [26, '1 reduced FAD', IMS, 206], [48, '1 ATP', MATRIX, 96]];
  const ys = [664, 734, 810, 882];
  outs.forEach(([a, s, f, w], i) => {
    const [x, y] = P(a < 0 ? -32 : a);
    const yy = ys[i];
    const [px, py] = [cx + Math.sqrt(Math.max(0, r * r - (yy - cy) ** 2)), yy];
    o.push(`<line x1="${px}" y1="${py}" x2="660" y2="${py}" stroke="${C.ink}" stroke-width="2"/><circle cx="${px}" cy="${py}" r="5" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>`);
    o.push(pill(660, py - 19, w, s, f));
  });
  o.push(t(450, 1040, `×2 turns per glucose: 4 CO<tspan dy="5" font-size="70%">2</tspan><tspan dy="-5">, 6 reduced NAD, 2 reduced FAD, 2 ATP</tspan>`, { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svg(W, 1075, 'Link reaction and Krebs cycle', o.join('\n'), 'Both in the mitochondrial matrix');
}

// ---------- 05 Tally ----------
function tally() {
  const o = [];
  const cols = { g: '#6fa9a2', l: GOLD, k: C.ink };
  [['g', 'Glycolysis', 40], ['l', 'Link ×2', 230], ['k', 'Krebs ×2', 400]].forEach(([k, s, x]) => {
    o.push(`<rect x="${x}" y="${130}" width="28" height="28" rx="5" fill="${cols[k]}" stroke="${C.ink}" stroke-width="2"/>`, t(x + 38, 152, s, { size: 20 }));
  });
  const u = 52.2, x0 = 250;
  const rows = [[CO2(), [['l', 2], ['k', 4]], 6], ['Reduced NAD', [['g', 2], ['l', 2], ['k', 6]], 10], ['Reduced FAD', [['k', 2]], 2], ['ATP (direct)', [['g', 2], ['k', 2]], 4]];
  rows.forEach(([lab, segs, tot], i) => {
    const y = 222 + i * 110;
    o.push(t(40, y + 36, lab, { size: 21, weight: 700 }));
    let x = x0;
    for (const [k, n] of segs) {
      o.push(`<rect x="${x}" y="${y}" width="${n * u}" height="56" fill="${cols[k]}" stroke="${C.ink}" stroke-width="2"/>`);
      o.push(t(x + n * u / 2, y + 36, String(n), { size: 21, weight: 700, fill: k === 'l' ? C.ink : '#ffffff', anchor: 'middle' }));
      x += n * u;
    }
    o.push(t(x + 18, y + 40, String(tot), { size: 30, weight: 700, fill: C.tealDark }));
  });
  o.push(rbox(30, 670, 840, 130));
  o.push(t(56, 718, `6 CO<tspan dy="5" font-size="70%">2</tspan><tspan dy="-5" dx="5">= the 6 carbons of glucose</tspan>`, { size: 22, weight: 700 }));
  o.push(t(56, 766, '12 reduced NAD and FAD carry hydrogen on', { size: 22, weight: 700, fill: C.tealDark }));
  return svg(W, 830, 'What one glucose gives', o.join('\n'), 'Totals from glycolysis, link reaction and Krebs cycle');
}

// ---------- 06 ATP yield ----------
function atpYield() {
  const o = [];
  const u = 19;
  o.push(t(50, 166, 'Aerobic', { size: 24, weight: 700 }));
  let x = 50;
  for (const [n, f, fc] of [[4, GOLD, C.ink], [25, '#6fa9a2', '#ffffff'], [3, C.ink, '#ffffff']]) {
    o.push(`<rect x="${x}" y="186" width="${n * u}" height="62" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`, t(x + n * u / 2, 226, String(n), { size: 22, weight: 700, fill: fc, anchor: 'middle' }));
    x += n * u;
  }
  o.push(t(x + 18, 230, '32 ATP', { size: 32, weight: 700, fill: C.tealDark }));
  [[GOLD, 'substrate-level: 4'], ['#6fa9a2', '10 reduced NAD × 2.5 = 25'], [C.ink, '2 reduced FAD × 1.5 = 3']].forEach(([f, s], i) => {
    o.push(`<rect x="62" y="${286 + i * 44}" width="26" height="26" rx="5" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`, t(100, 306 + i * 44, s, { size: 20 }));
  });
  o.push(t(50, 486, 'Anaerobic', { size: 24, weight: 700 }));
  o.push(`<rect x="50" y="506" width="${2 * u}" height="62" fill="${GOLD}" stroke="${C.ink}" stroke-width="2"/>`, t(50 + u, 546, '2', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(104, 550, '2 ATP', { size: 32, weight: 700, fill: C.olive }));
  o.push(t(50, 614, 'glycolysis only', { size: 20, fill: C.muted }));
  o.push(rbox(30, 670, 840, 150));
  o.push(t(56, 718, '32 ÷ 2 = 16 times as much ATP', { size: 26, weight: 700, fill: C.tealDark }));
  o.push(tl(56, 762, ['Textbook values differ (about 30 to 38):', 'use the figures given in the question'], { size: 19, fill: C.muted }, 30));
  return svg(W, 850, 'Where the ATP comes from', o.join('\n'), 'ATP per glucose, using 2.5 and 1.5 ATP per reduced NAD and FAD');
}

// ---------- 07 Chemiosmosis ----------
function chemiosmosis() {
  const o = [];
  o.push(`<rect x="30" y="120" width="840" height="380" fill="${IMS}"/>`);
  o.push(`<rect x="30" y="540" width="840" height="430" fill="${MATRIX}"/>`);
  o.push(`<rect x="30" y="500" width="840" height="40" fill="${MEM}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(46, 156, 'Intermembrane space', { size: 21, weight: 700, fill: C.tealDark }));
  o.push(t(46, 952, 'Matrix', { size: 21, weight: 700, fill: C.olive }));
  const xs = [150, 310, 470];
  for (const x of xs) {
    o.push(`<rect x="${x - 55}" y="${474}" width="110" height="130" rx="18" fill="${MATRIX}" stroke="${C.ink}" stroke-width="2.5"/>`);
    o.push(fa(x, 466, x, 370, H, 4, 30));
    o.push(hplus(x, 340));
  }
  for (const [x, y] of [[230, 270], [390, 270], [530, 230], [560, 300], [610, 400]]) o.push(hplus(x, y));
  o.push(fa(206, 540, 254, 540, C.olive, 4, 20), fa(366, 540, 414, 540, C.olive, 4, 20));
  o.push(t(230, 466, sup('e', '−'), { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }), t(390, 466, sup('e', '−'), { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  // NAD in/out
  o.push(fa(120, 795, 128, 606, C.tealDark, 3.5, 24), fa(180, 610, 188, 706, C.tealDark, 3.5, 22));
  o.push(t(196, 736, 'NAD', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(pill(40, 800, 180, 'reduced NAD', IMS));
  o.push(t(330, 652, 'Electron', { size: 21, weight: 700, anchor: 'middle' }), t(330, 682, 'transport chain', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(fa(470, 606, 470, 704, C.olive, 4, 24));
  o.push(t(470, 746, `O<tspan dy="5" font-size="70%">2</tspan><tspan dy="-5" dx="5">→ H</tspan><tspan dy="5" font-size="70%">2</tspan><tspan dy="-5">O</tspan>`, { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(470, 782, 'final electron acceptor', { size: 19, fill: C.muted, anchor: 'middle' }));
  // ATP synthase
  o.push(`<rect x="702" y="500" width="36" height="96" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/><circle cx="720" cy="636" r="46" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(hplus(720, 360), fa(720, 384, 720, 494, H, 4, 30));
  o.push(t(720, 722, 'ATP synthase', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(720, 768, `ADP + P<tspan dy="5" font-size="70%">i</tspan><tspan dy="-5" dx="5">→ ATP</tspan>`, { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(450, 880, sup('H', '+', ' pumped out, then flow back through ATP synthase'), { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(450, 914, sup('H', '+', ' gradient = chemiosmosis'), { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svg(W, 1000, 'Electron transport and chemiosmosis', o.join('\n'), 'Inner mitochondrial membrane (cristae)');
}

// ---------- 08 Fermentation ----------
function fermentation() {
  const o = [];
  o.push(rbox(60, 140, 780, 128));
  o.push(beads(90, 200, 6), t(90, 246, 'glucose', { size: 20, weight: 700 }));
  o.push(fa(272, 202, 340, 202), t(450, 210, 'Glycolysis', { size: 24, weight: 700, anchor: 'middle' }), t(450, 244, 'net 2 ATP', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(fa(558, 202, 626, 202), beads(640, 200, 3), t(690, 246, 'pyruvate', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(fa(450, 268, 236, 350), fa(450, 268, 664, 350));
  const side = (x, head, who, color) => {
    o.push(rbox(x, 350, 410, 470));
    o.push(t(x + 205, 396, head, { size: 25, weight: 700, fill: color, anchor: 'middle' }));
    o.push(t(x + 205, 426, who, { size: 20, fill: C.muted, anchor: 'middle' }));
  };
  side(30, 'Lactate', 'animals', C.tealDark);
  side(460, 'Ethanol', 'yeast, plants', C.tealDark);
  o.push(beads(50, 500, 3), t(50, 546, 'pyruvate', { size: 20, weight: 700 }), fa(158, 500, 230, 500), beads(250, 500, 3), t(250, 546, 'lactate', { size: 20, weight: 700 }));
  o.push(pill(70, 590, 266, 'reduced NAD → NAD', IMS));
  o.push(t(235, 692, CO2('no '), { size: 22, weight: 700, anchor: 'middle' }));
  o.push(tl(235, 740, ['lactate can return to', 'pyruvate (liver)'], { size: 20, fill: C.muted, anchor: 'middle' }, 30));
  o.push(beads(480, 500, 3), t(480, 546, 'pyruvate', { size: 20, weight: 700 }), fa(588, 500, 640, 500));
  o.push(beads(650, 500, 2), t(692, 546, 'ethanal', { size: 20, weight: 700, anchor: 'middle' }), fa(704, 500, 766, 500), beads(772, 500, 2), t(814, 546, 'ethanol', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(fa(638, 484, 638, 446, C.rust, 3.5, 16), t(660, 456, CO2('', ' out'), { size: 20, weight: 700, fill: C.rust }));
  o.push(pill(560, 590, 266, 'reduced NAD → NAD', IMS));
  o.push(t(665, 692, 'cannot be reversed', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(rbox(30, 850, 840, 130));
  o.push(t(450, 900, 'NAD is regenerated, so glycolysis can continue', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(450, 942, 'Only the net 2 ATP from glycolysis; none from this step', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  return svg(W, 1010, 'No oxygen: keep glycolysis going', o.join('\n'), 'Pyruvate takes the hydrogen from reduced NAD');
}

// ---------- 09 Respiratory substrates ----------
function substrates() {
  const o = [];
  const fb = (y, head, kj, rq) => {
    o.push(rbox(30, y, 270, 120, MATRIX));
    o.push(t(48, y + 40, head, { size: 24, weight: 700 }), t(48, y + 76, kj, { size: 20 }), t(48, y + 106, rq, { size: 20, weight: 700, fill: C.tealDark }));
  };
  fb(160, 'Carbohydrate', 'about 16–17 kJ per g', 'RQ about 1.0');
  fb(370, 'Lipid', 'about 37–39 kJ per g', 'RQ about 0.7');
  fb(610, 'Protein', 'about 17 kJ per g', 'RQ about 0.9');
  const sb = (y, s) => { o.push(rbox(515, y, 250, 84)); o.push(t(640, y + 52, s, { size: 23, weight: 700, anchor: 'middle' })); };
  sb(160, 'Glycolysis'); sb(350, 'Pyruvate 3C'); sb(540, 'Acetyl CoA 2C'); sb(730, 'Krebs cycle');
  for (const y of [244, 434, 624]) o.push(fa(640, y, 640, y + 104, C.ink, 3, 22));
  o.push(fa(300, 192, 512, 192, C.ink, 3.5, 24), t(312, 180, 'glucose', { size: 20, weight: 700 }));
  o.push(fa(300, 390, 512, 230, C.rust, 3.5, 24), t(400, 382, 'glycerol', { size: 20, weight: 700, fill: C.rust }));
  o.push(fa(300, 490, 512, 576, C.tealDark, 3.5, 24), t(340, 490, 'fatty acids', { size: 20, weight: 700, fill: C.tealDark }));
  o.push(fa(300, 710, 512, 772, C.olive, 3.5, 24), t(312, 660, 'amino acids,', { size: 20, weight: 700, fill: C.olive }), t(312, 688, `NH<tspan dy="5" font-size="70%">2</tspan><tspan dy="-5" dx="5">removed</tspan>`, { size: 20, weight: 700, fill: C.olive }));
  o.push(tl(640, 862, ['fatty acids cut into 2C units', 'protein enters at pyruvate,', 'acetyl CoA or Krebs cycle'], { size: 19, fill: C.muted, anchor: 'middle' }, 28));
  o.push(t(450, 980, 'Lipids: more hydrogen per gram, so more ATP', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svg(W, 1010, 'Other respiratory fuels', o.join('\n'), 'Where lipids and proteins join the pathway');
}

// ---------- 10 Respirometer ----------
function respirometer() {
  const o = [];
  o.push(`<rect x="30" y="290" width="620" height="400" rx="16" fill="#e3eeee" stroke="#9fc0bb" stroke-width="2.5" stroke-dasharray="9 7"/>`);
  o.push(t(370, 680, 'water bath', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  const tube = (x, liquid, label, drop, dist, arrowFrom) => {
    // capillary
    o.push(`<path d="M${x + 55} 300 V230 H${x + 330}" fill="none" stroke="${C.ink}" stroke-width="8" stroke-linejoin="round"/><path d="M${x + 55} 300 V230 H${x + 330}" fill="none" stroke="#ffffff" stroke-width="4" stroke-linejoin="round"/>`);
    for (let i = 0; i < 4; i++) o.push(`<line x1="${x + 125 + i * 60}" y1="240" x2="${x + 125 + i * 60}" y2="256" stroke="${C.ink}" stroke-width="2"/>`);
    o.push(`<circle cx="${x + 300}" cy="230" r="9" fill="none" stroke="${C.ink}" stroke-width="2" stroke-dasharray="3 3"/>`);
    o.push(`<circle cx="${drop}" cy="230" r="10" fill="${GOLD}" stroke="${C.ink}" stroke-width="2"/>`);
    o.push(fa(arrowFrom, 204, drop - 4, 204, C.rust, 5, 28));
    o.push(t(arrowFrom - (arrowFrom - drop) / 2 + (dist === '9 mm' ? 10 : 0), 186, dist, { size: 24, weight: 700, fill: C.rust, anchor: 'middle' }));
    // test tube
    o.push(`<path d="M${x + 10} 330 V545 a55 55 0 0 0 110 0 V330" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`);
    o.push(`<path d="M${x + 11.5} 480 V545 a53.5 53.5 0 0 0 107 0 V480 Z" fill="${liquid}"/>`);
    o.push(`<line x1="${x + 12}" y1="478" x2="${x + 118}" y2="478" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="6 4"/>`);
    o.push(beads(x + 28, 462, 3, 11, '#8a6d0d'));
    o.push(`<rect x="${x}" y="310" width="130" height="20" rx="4" fill="#9aa3b0" stroke="${C.ink}" stroke-width="2.5"/>`);
    o.push(t(x + 65, 656, label, { size: 24, weight: 700, anchor: 'middle' }));
  };
  tube(60, '#f2d4d2', 'with KOH', 150, '36 mm', 360);
  tube(490, '#cfe0ec', 'with water', 740, '9 mm', 790);
  o.push(`<line x1="178" y1="456" x2="246" y2="436" stroke="${C.ink}" stroke-width="2"/>`, t(250, 442, 'seeds on gauze', { size: 19, fill: C.muted }));
  o.push(tl(70, 726, [CO2('KOH absorbs ', ':'), `drop = O<tspan dy="5" font-size="70%">2</tspan><tspan dy="-5" dx="5">in</tspan>`], { size: 19, fill: C.muted }, 30));
  o.push(tl(500, 726, ['no absorber:', `drop = O<tspan dy="5" font-size="70%">2</tspan><tspan dy="-5" dx="5">in − CO</tspan><tspan dy="5" font-size="70%">2</tspan><tspan dy="-5" dx="5">out</tspan>`], { size: 19, fill: C.muted }, 30));
  o.push(rbox(30, 800, 840, 330));
  const s2 = '<tspan dy="5" font-size="70%">2</tspan><tspan dy="-5" dx="5">';
  o.push(t(56, 848, 'Capillary radius r = 0.50 mm', { size: 20, fill: C.muted }));
  o.push(t(56, 896, `O${s2}in = πr² × 36 = 28.3 mm³</tspan>`, { size: 21, weight: 700 }));
  o.push(t(56, 946, `O${s2}in − CO</tspan>${s2}out = πr² × 9 = 7.07 mm³</tspan>`, { size: 21, weight: 700 }));
  o.push(t(56, 996, `CO${s2}out = 28.3 − 7.07 = 21.2 mm³</tspan>`, { size: 21, weight: 700 }));
  o.push(t(56, 1058, `RQ = CO${s2}÷ O</tspan>${s2}= 21.2 ÷ 28.3 = 0.75</tspan>`, { size: 28, weight: 700, fill: C.tealDark }));
  o.push(t(56, 1102, 'between 0.7 and 1.0: a mixture of lipid and carbohydrate', { size: 19, fill: C.muted }));
  return svg(W, 1160, 'Respirometer and RQ', o.join('\n'), 'Gas volume = πr² × distance the drop moves');
}

export const figures = [
  { name: '01-respiration-overview', after: '### Worked example: glycolysis in moles', svg: overview(),
    alt: 'A map of one glucose through respiration in three bands. Glycolysis in the cytoplasm gives 2 pyruvate, net 2 ATP and 2 reduced NAD. Pyruvate enters the matrix, where the link reaction (twice) and Krebs cycle (twice) release 6 CO2 in total and make 2 more ATP. Reduced NAD and FAD carry hydrogen to the inner membrane, where the electron transport chain and ATP synthase make most of the ATP and oxygen forms water.',
    caption: 'One glucose passes through four stages in three places: cytoplasm, matrix and inner mitochondrial membrane.' },
  { name: '04-link-and-krebs', after: '## 5.2.2(d) The link reaction', svg: linkKrebs(),
    alt: 'In the link reaction pyruvate loses CO2 and hydrogen to become acetyl CoA (2C), twice per glucose. In the Krebs cycle acetyl CoA joins a 4C compound to make citrate (6C); each turn releases 2 CO2 and makes 3 reduced NAD, 1 reduced FAD and 1 ATP before regenerating the 4C compound.',
    caption: 'Each turn of the Krebs cycle gives 2 CO2, 3 reduced NAD, 1 reduced FAD and 1 ATP; there are two turns per glucose.' },
  { name: '03-glycolysis', after: '### Worked example: glycolysis in moles', svg: glycolysis(),
    alt: 'Glucose (6C) is phosphorylated using 2 ATP, the hexose bisphosphate splits into two triose phosphates, and each is oxidised to pyruvate, making reduced NAD and 2 ATP. Net per glucose: 2 ATP (4 made, 2 used), 2 reduced NAD and 2 pyruvate.',
    caption: 'Glycolysis uses 2 ATP and makes 4, a net gain of 2 ATP, 2 reduced NAD and 2 pyruvate.' },
  { name: '05-respiration-tally', after: '## 5.2.2(f) The importance of coenzymes', svg: tally(),
    alt: 'Stacked bars show the CO2, reduced NAD, reduced FAD and ATP made by each stage per glucose: 6 CO2, 10 reduced NAD, 2 reduced FAD and 4 ATP made directly.',
    caption: 'Six CO2 account for all six carbons of glucose; most energy is still held in 12 reduced coenzymes.' },
  { name: '06-atp-yield', after: '### Worked example: glycolysis in moles', svg: atpYield(),
    alt: 'Aerobic respiration gives 32 ATP: 4 by substrate-level phosphorylation, 25 from 10 reduced NAD at 2.5 each and 3 from 2 reduced FAD at 1.5 each. Anaerobic respiration gives only the 2 ATP from glycolysis, so aerobic gives 16 times as much.',
    caption: 'Using 2.5 and 1.5 ATP per reduced NAD and FAD, aerobic respiration gives 32 ATP against 2 anaerobically.' },
  { name: '07-chemiosmosis', after: '## 5.2.2(g) Oxidative phosphorylation: site and key roles', svg: chemiosmosis(),
    alt: 'Reduced NAD gives hydrogen to carriers in the inner membrane. Electrons pass along the chain and the energy released pumps H+ into the intermembrane space. H+ flows back through ATP synthase, making ATP from ADP and Pi (chemiosmosis). Oxygen is the final electron acceptor and forms water.',
    caption: 'Energy from electron transport builds a proton gradient; protons flow back through ATP synthase to make ATP.' },
  { name: '08-fermentation', after: '### Worked example: glycolysis in moles', svg: fermentation(),
    alt: 'Without oxygen only glycolysis runs. In animals pyruvate accepts hydrogen from reduced NAD to make lactate (reversible, no CO2). In yeast and plants pyruvate loses CO2 to make ethanal, which is reduced to ethanol (not reversible). Both regenerate NAD; no ATP comes from this step.',
    caption: 'Fermentation regenerates NAD so glycolysis can continue; the only ATP is the net 2 from glycolysis.' },
  { name: '02-mitochondrion-structure', after: '### Worked example: size from an electron micrograph', svg: mito(),
    alt: 'A labelled mitochondrion: outer membrane, intermembrane space, inner membrane folded into cristae, and matrix with circular DNA and ribosomes. A worked example gives 27 mm / 15 000 = 1.8 micrometres.',
    caption: 'The folded inner membrane gives a large surface area; the matrix holds the enzymes of the link reaction and Krebs cycle.' },
  { name: '09-respiratory-substrates', after: '### Worked example: glycolysis in moles', svg: substrates(),
    alt: 'Glucose enters at glycolysis. Glycerol from lipids enters glycolysis and fatty acids are cut into 2C units forming acetyl CoA. Amino acids lose their amino group and the carbon skeleton enters as pyruvate, acetyl CoA or a Krebs cycle intermediate. Lipids give about 37-39 kJ per g, carbohydrate and protein about 16-17, with RQ about 0.7, 1.0 and 0.9.',
    caption: 'Lipids and proteins join respiration at different points; lipids have more hydrogen per gram and so give more ATP.' },
  { name: '10-respirometer-rq', after: '### Worked example: a fatty acid', svg: respirometer(),
    alt: 'Two respirometers in a water bath: with KOH the drop moves 36 mm, measuring O2 taken in; with water it moves 9 mm, measuring O2 in minus CO2 out. With radius 0.50 mm, O2 in = 28.3 mm3, net = 7.07, CO2 out = 21.2, RQ = 21.2 / 28.3 = 0.75.',
    caption: 'A respirometer with and without a CO2 absorber gives the RQ: here 0.75, a mixture of lipid and carbohydrate.' },
];
