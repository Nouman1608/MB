// Board-neutral redraws of nine A Level Biology pictures (water, carbohydrates, lipids, proteins,
// food tests) used on AQA, OCR, Edexcel and OxfordAQA pages. Same content as before; the
// "All boards" and "Cambridge 9700, OCR" pills are gone.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-carbohydrates-and-lipids';
const W = 900;
const HB = C.olive; // hydrogen-bond dots

// ---------- shared atoms ----------
const oAtom = (x, y, r = 30, label = true) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` +
  (label ? t(x, y + r * 0.27, 'O', { size: r * 0.7, weight: 700, anchor: 'middle' }) : '');
const hAtom = (x, y, r = 17, label = true) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>` +
  (label ? t(x, y + r * 0.33, 'H', { size: r * 0.95, weight: 700, anchor: 'middle' }) : '');
const bond = (x1, y1, x2, y2, w = 5, color = C.ink) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`;
const hbond = (x1, y1, x2, y2, w = 3.5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${HB}" stroke-width="${w}" stroke-dasharray="4 7" stroke-linecap="round"/>`;
// point on segment a->b at distance d from a
const toward = (ax, ay, bx, by, d) => {
  const L = Math.hypot(bx - ax, by - ay);
  return [ax + ((bx - ax) * d) / L, ay + ((by - ay) * d) / L];
};

// ---------- 1. Water hydrogen bonds ----------
function waterHBonds() {
  const out = [];
  const mol = (o, h1, h2) => {
    out.push(bond(o[0], o[1], h1[0], h1[1]), bond(o[0], o[1], h2[0], h2[1]));
    out.push(oAtom(o[0], o[1]), hAtom(h1[0], h1[1]), hAtom(h2[0], h2[1]));
  };
  const O = [450, 400], H1 = [382, 452], H2 = [516, 452];
  // neighbours
  const TL = { o: [240, 238], h: [[270, 160], [306, 290]] };
  const TR = { o: [657, 238], h: [[625, 160], [592, 290]] };
  const BL = { o: [240, 560], h: [[174, 612], [308, 612]] };
  const BR = { o: [657, 560], h: [[592, 612], [725, 612]] };
  // hydrogen bonds first (under atoms)
  let a = toward(TL.h[1][0], TL.h[1][1], O[0], O[1], 18), b = toward(O[0], O[1], TL.h[1][0], TL.h[1][1], 31);
  out.push(hbond(a[0], a[1], b[0], b[1]));
  a = toward(TR.h[1][0], TR.h[1][1], O[0], O[1], 18); b = toward(O[0], O[1], TR.h[1][0], TR.h[1][1], 31);
  out.push(hbond(a[0], a[1], b[0], b[1]));
  a = toward(H1[0], H1[1], BL.o[0], BL.o[1], 18); b = toward(BL.o[0], BL.o[1], H1[0], H1[1], 31);
  out.push(hbond(a[0], a[1], b[0], b[1]));
  a = toward(H2[0], H2[1], BR.o[0], BR.o[1], 18); b = toward(BR.o[0], BR.o[1], H2[0], H2[1], 31);
  out.push(hbond(a[0], a[1], b[0], b[1]));
  for (const m of [TL, TR, BL, BR]) mol(m.o, m.h[0], m.h[1]);
  // central molecule with angle
  out.push(path(`M${O[0] - 38} ${O[1] + 30} Q${O[0]} ${O[1] + 62} ${O[0] + 38} ${O[1] + 30}`, { stroke: C.rust, w: 3.5 }));
  mol(O, H1, H2);
  out.push(t(498, 390, 'δ−', { size: 22, weight: 700, fill: C.blue }));
  out.push(t(355, 460, 'δ+', { size: 22, weight: 700, fill: C.rust, anchor: 'end' }));
  out.push(t(545, 460, 'δ+', { size: 22, weight: 700, fill: C.rust }));
  out.push(t(450, 505, '104.5°', { size: 19, weight: 700, fill: C.rust, anchor: 'middle' }));
  out.push(t(W / 2, 698, 'Up to 4 hydrogen bonds per molecule', { size: 22, weight: 700, anchor: 'middle' }));
  // key
  out.push(bond(110, 760, 190, 760, 5));
  out.push(t(206, 767, 'covalent O−H bond (strong)', { size: 19, fill: C.muted }));
  out.push(hbond(110, 806, 190, 806));
  out.push(t(206, 813, 'hydrogen bond (weak)', { size: 19, fill: C.muted }));
  out.push(oAtom(660, 760, 18, false), t(690, 767, 'oxygen', { size: 19, fill: C.muted }));
  out.push(hAtom(660, 807, 11, false), t(690, 814, 'hydrogen', { size: 19, fill: C.muted }));
  return svg(W, 860, 'Water is polar', out.join('\n'), 'Hydrogen bonds join the molecules');
}

// ---------- 2. Water as a solvent ----------
// small water molecule: O at (x,y); hydrogens point away from (or toward) a target
function smallWater(x, y, tx, ty, hToward) {
  const ang = Math.atan2(ty - y, tx - x) + (hToward ? 0 : Math.PI);
  const d = 23, spread = 0.95;
  const h1 = [x + d * Math.cos(ang - spread), y + d * Math.sin(ang - spread)];
  const h2 = [x + d * Math.cos(ang + spread), y + d * Math.sin(ang + spread)];
  return `<line x1="${x}" y1="${y}" x2="${h1[0]}" y2="${h1[1]}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<line x1="${x}" y1="${y}" x2="${h2[0]}" y2="${h2[1]}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<circle cx="${x}" cy="${y}" r="16" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<circle cx="${h1[0]}" cy="${h1[1]}" r="9" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<circle cx="${h2[0]}" cy="${h2[1]}" r="9" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`;
}
function waterSolvent() {
  const out = [];
  out.push(panel(30, 140, 840, 370));
  out.push(t(56, 182, 'Ions', { size: 24, weight: 700 }));
  const ion = (cx, cy, label, fill, edge, hToward) => {
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * 2 * Math.PI + 0.35;
      out.push(smallWater(cx + 105 * Math.cos(a), cy + 95 * Math.sin(a), cx, cy, hToward));
    }
    out.push(`<circle cx="${cx}" cy="${cy}" r="40" fill="${fill}" stroke="${edge}" stroke-width="3.5"/>`);
    out.push(t(cx, cy + 9, label, { size: 26, weight: 700, fill: edge, anchor: 'middle' }));
  };
  ion(240, 322, 'Na⁺', C.tealLight, C.tealDark, false);
  ion(660, 322, 'Cl⁻', C.cream, C.olive, true);
  out.push(t(240, 490, 'δ− oxygens face Na⁺', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(660, 490, 'δ+ hydrogens face Cl⁻', { size: 19, weight: 700, fill: C.rust, anchor: 'middle' }));

  // glucose panel
  out.push(panel(30, 540, 410, 430));
  out.push(t(56, 582, 'Glucose: polar, dissolves', { size: 22, weight: 700 }));
  const gx = 235, gy = 760, r = 50;
  const hex = [...Array(6)].map((_, i) => [gx + r * Math.cos((Math.PI / 3) * i), gy + r * Math.sin((Math.PI / 3) * i)]);
  out.push(`<polygon points="${hex.map((p) => p.join(',')).join(' ')}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="4"/>`);
  // ring O at upper-right vertex (index 5)
  out.push(`<circle cx="${hex[5][0]}" cy="${hex[5][1]}" r="13" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`);
  out.push(t(hex[5][0], hex[5][1] + 6, 'O', { size: 16, weight: 700, anchor: 'middle' }));
  // OH groups: [vertex, bond end dx, dy, text x, text y, anchor, text centre, water O, H-bond start, H-bond end]
  const oh = [
    [4, 0, -30, 210, 680, 'middle', [210, 673], [150, 628], [190, 664], [163, 640]],
    [3, -30, 0, 150, 767, 'end', [133, 760], [78, 815], [120, 773], [90, 803]],
    [0, 30, 0, 320, 767, 'start', [337, 760], [392, 815], [350, 773], [380, 803]],
    [2, 0, 32, 210, 860, 'middle', [210, 853], [150, 905], [194, 866], [163, 893]],
    [1, 0, 32, 260, 860, 'middle', [260, 853], [320, 905], [276, 866], [307, 893]],
  ];
  for (const [vi, dx, dy, tx, ty, anchor, tc, w, h1, h2] of oh) {
    const [vx, vy] = hex[vi];
    out.push(bond(vx, vy, vx + dx, vy + dy, 3.5));
    out.push(t(tx, ty, 'OH', { size: 18, weight: 700, anchor }));
    out.push(hbond(h1[0], h1[1], h2[0], h2[1], 3));
    out.push(smallWater(w[0], w[1], tc[0], tc[1], false));
  }
  out.push(t(235, 955, 'OH groups H-bond to water', { size: 18, fill: C.muted, anchor: 'middle' }));

  // triglyceride panel
  out.push(panel(460, 540, 410, 430));
  out.push(t(486, 582, 'Triglyceride: stays out', { size: 22, weight: 700 }));
  const fx = 665, fy = 775;
  out.push(`<ellipse cx="${fx}" cy="${fy}" rx="80" ry="58" fill="${C.cream}" stroke="${C.olive}" stroke-width="3.5"/>`);
  out.push(t(fx, fy + 7, 'fat', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  const n = 12, rx = 150, ry = 128;
  const ring = [...Array(n)].map((_, i) => {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2;
    return [fx + rx * Math.cos(a), fy + ry * Math.sin(a)];
  });
  out.push(`<ellipse cx="${fx}" cy="${fy}" rx="${rx}" ry="${ry}" fill="none" stroke="${HB}" stroke-width="3" stroke-dasharray="4 7"/>`);
  ring.forEach(([x, y], i) => {
    const nx = ring[(i + 1) % n];
    out.push(smallWater(x, y, nx[0], nx[1], true));
  });
  out.push(t(665, 950, 'Water bonds to water only', { size: 18, fill: C.muted, anchor: 'middle' }));
  // key
  out.push(`<circle cx="120" cy="1010" r="15" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`, t(146, 1017, 'O', { size: 19, fill: C.muted }));
  out.push(`<circle cx="210" cy="1010" r="9" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`, t(230, 1017, 'H', { size: 19, fill: C.muted }));
  out.push(hbond(330, 1010, 400, 1010, 3), t(416, 1017, 'hydrogen bond', { size: 19, fill: C.muted }));
  return svg(W, 1050, 'Water as a solvent', out.join('\n'), 'Dissolves ions and polar molecules');
}

// ---------- 3. Water and heat ----------
function waterHeat() {
  const out = [];
  out.push(panel(30, 140, 840, 380));
  out.push(t(56, 186, 'High specific heat capacity', { size: 25, weight: 700 }));
  out.push(t(56, 218, '500 kJ absorbed by 42 kg of liquid', { size: 18, fill: C.muted }));
  const x0 = 250, scale = 415 / 5.67;
  out.push(bond(x0, 245, x0, 422, 3));
  out.push(t(56, 300, 'Water', { size: 20, weight: 700 }));
  out.push(`<rect x="${x0}" y="262" width="${2.85 * scale}" height="60" rx="6" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="3"/>`);
  out.push(t(x0 + 2.85 * scale + 14, 302, '2.85 °C', { size: 22, weight: 700, fill: C.tealDark }));
  out.push(t(56, 390, 'Other liquid*', { size: 20, weight: 700 }));
  out.push(`<rect x="${x0}" y="350" width="${5.67 * scale}" height="60" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>`);
  out.push(t(x0 + 5.67 * scale + 14, 390, '5.67 °C', { size: 22, weight: 700, fill: C.olive }));
  out.push(t(56, 462, '*half water’s specific heat capacity', { size: 18, fill: C.muted }));
  out.push(t(56, 500, 'Smaller rise: steadier body temperature', { size: 19, weight: 700, fill: C.tealDark }));

  out.push(panel(30, 550, 840, 470));
  out.push(t(56, 596, 'High latent heat of vaporisation', { size: 25, weight: 700 }));
  out.push(t(56, 628, 'Remove 90 kJ from the body', { size: 18, fill: C.muted }));
  const bx = 100, full = 700, per = full / 21500; // px per gram
  out.push(t(56, 684, 'Evaporate water', { size: 20, weight: 700 }));
  out.push(`<rect x="${bx}" y="708" width="${Math.max(5, 37.5 * per)}" height="46" rx="2" fill="${C.tealDark}"/>`);
  out.push(t(bx + 22, 742, '37.5 g', { size: 24, weight: 700, fill: C.tealDark }));
  out.push(t(56, 814, 'Warm water by 1 °C instead', { size: 20, weight: 700 }));
  out.push(`<rect x="${bx}" y="838" width="${full}" height="46" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>`);
  out.push(t(bx + full - 16, 870, '21.5 kg', { size: 24, weight: 700, fill: C.olive, anchor: 'end' }));
  out.push(t(56, 960, 'Same scale: the evaporation bar is a sliver', { size: 18, fill: C.muted }));
  return svg(W, 1050, 'Why water resists heating', out.join('\n'), 'Same energy, two different effects');
}

// ---------- glucose ring (Haworth style) ----------
const RV = { C5: [-40, -70], O: [37, -70], C1: [80, 0], C2: [37, 70], C3: [-40, 70], C4: [-80, 0] };
const hl = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${C.cream}" stroke="${C.mustard}" stroke-width="1.5"/>`;
function ring(cx, cy, s, o = {}) {
  const P = (k) => [cx + RV[k][0] * s, cy + RV[k][1] * s];
  const out = [];
  const order = ['C5', 'O', 'C1', 'C2', 'C3', 'C4'];
  const fs = o.size || 20;
  const lw = o.lw || 5;
  out.push(`<polygon points="${order.map((k) => P(k).join(',')).join(' ')}" fill="${C.tealLight}" stroke="none"/>`);
  // thick front edge (C1-C2-C3-C4) and thinner back edges, Haworth style
  out.push(path(`M${P('C4')} L${P('C5')} L${P('O')} L${P('C1')} L${P('C2')} L${P('C3')} Z`, { w: lw }));
  // CH2OH on C5
  const [x5, y5] = P('C5');
  out.push(bond(x5, y5, x5, y5 - 42 * s, lw * 0.7));
  out.push(t(x5, y5 - 52 * s, 'CH₂OH', { size: fs, weight: 700, anchor: 'middle' }));
  // ring O
  const [xo, yo] = P('O');
  out.push(`<circle cx="${xo}" cy="${yo}" r="${15 * s + 3}" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`);
  out.push(t(xo, yo + fs * 0.36, 'O', { size: fs, weight: 700, anchor: 'middle' }));
  // C2 OH down
  const [x2, y2] = P('C2');
  out.push(bond(x2, y2, x2, y2 + 40 * s, lw * 0.7));
  out.push(t(x2, y2 + 40 * s + fs, 'OH', { size: fs, weight: 700, anchor: 'middle' }));
  // C3 OH up
  const [x3, y3] = P('C3');
  out.push(bond(x3, y3, x3, y3 - 34 * s, lw * 0.7));
  out.push(t(x3 + 4, y3 - 38 * s, 'OH', { size: fs, weight: 700, anchor: 'start' }));
  // C4 OH down (unless overridden)
  const [x4, y4] = P('C4');
  if (o.c4 !== 'none') {
    out.push(bond(x4, y4, x4, y4 + 40 * s, lw * 0.7));
    if (o.c4 === 'HO-hl') {
      out.push(hl(x4 - 30, y4 + 40 * s + 3, 18, fs + 6));
      out.push(t(x4, y4 + 40 * s + fs, 'HO', { size: fs, weight: 700, anchor: 'end' }));
    } else out.push(t(x4, y4 + 40 * s + fs, 'OH', { size: fs, weight: 700, anchor: 'end' }));
  }
  // C1 substituents
  const [x1, y1] = P('C1');
  if (o.c1 !== 'none') {
    const up = o.c1Up || 'H', down = o.c1Down || 'OH';
    const col = o.c1Color || C.ink;
    out.push(bond(x1, y1, x1 + 22 * s, y1 - 48 * s, lw * 0.7, col));
    out.push(bond(x1, y1, x1 + 22 * s, y1 + 48 * s, lw * 0.7, col));
    const tw = (s2) => s2.length * fs * 0.68 + 10;
    if (o.c1hlUp) out.push(hl(x1 + 22 * s - 6, y1 - 48 * s - fs - 6, tw(up), fs + 12));
    if (o.c1hlDown) out.push(hl(x1 + 22 * s - 6, y1 + 48 * s - 4, tw(down), fs + 12));
    out.push(t(x1 + 22 * s, y1 - 48 * s - 4, up, { size: fs, weight: 700, fill: o.c1hlUp ? C.olive : C.ink }));
    out.push(t(x1 + 22 * s, y1 + 48 * s + fs, down, { size: fs, weight: 700, fill: o.c1hlDown ? C.olive : C.ink }));
  }
  if (o.numbers) {
    const nl = { C5: [-28, -6], C1: [-30, 6], C2: [-22, -20], C3: [6, 36], C4: [-28, -2] };
    out.push(t(x5 - 30, y5 + 4, '5', { size: 18, weight: 700, fill: C.muted, anchor: 'middle' }));
    out.push(t(x4 - 30, y4 + 6, '4', { size: 18, weight: 700, fill: C.muted, anchor: 'middle' }));
    out.push(t(x3 + 2, y3 + 42, '3', { size: 18, weight: 700, fill: C.muted, anchor: 'middle' }));
    out.push(t(x2 - 26, y2 - 26, '2', { size: 18, weight: 700, fill: C.muted, anchor: 'middle' }));
    out.push(t(x1 - 24, y1 + 7, '1', { size: 18, weight: 700, fill: C.muted, anchor: 'middle' }));
    void nl;
  }
  return out.join('');
}

// ---------- 4. Alpha and beta glucose ----------
function alphaBeta() {
  const out = [];
  out.push(panel(30, 140, 410, 480), panel(460, 140, 410, 480));
  out.push(t(235, 196, 'α-glucose', { size: 28, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(665, 196, 'β-glucose', { size: 28, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(ring(222, 395, 1.15, { size: 21, numbers: true, c1Up: 'H', c1Down: 'OH', c1hlUp: true, c1hlDown: true, c1Color: C.olive }));
  out.push(ring(652, 395, 1.15, { size: 21, numbers: true, c1Up: 'OH', c1Down: 'H', c1hlUp: true, c1hlDown: true, c1Color: C.olive }));
  out.push(t(235, 590, 'OH below the ring', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  out.push(t(665, 590, 'OH above the ring', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  out.push(panel(30, 650, 840, 100, C.cream, C.olive));
  out.push(t(W / 2, 710, 'C₆H₁₂O₆: 6 C, 12 H, 6 O in both', { size: 26, weight: 700, anchor: 'middle' }));
  out.push(t(W / 2, 800, 'Ring = 5 carbons + 1 oxygen. Carbon 6 is outside it.', { size: 20, fill: C.muted, anchor: 'middle' }));
  return svg(W, 840, 'α- and β-glucose', out.join('\n'), 'Rings differ only at carbon 1');
}

// ---------- 5. Condensation and hydrolysis ----------
function condensation() {
  const out = [];
  // sugars panel
  out.push(panel(30, 140, 840, 600));
  out.push(t(56, 180, 'Sugars: glycosidic bond', { size: 22, weight: 700 }));
  const s = 0.72, fs = 18;
  out.push(ring(130, 300, s, { size: fs, lw: 4, c1Up: 'H', c1Down: 'OH', c1hlDown: true }));
  out.push(t(260, 308, '+', { size: 34, weight: 700, anchor: 'middle' }));
  out.push(ring(385, 300, s, { size: fs, lw: 4, c4: 'HO-hl', c1Up: 'H', c1Down: 'OH' }));
  // product: maltose, rings joined by O at C1 (left) and C4 (right)
  const ly = 560, lx = 130, rx = lx + 80 * s * 2 + 64;
  out.push(ring(lx, ly, s, { size: fs, lw: 4, c1: 'none' }));
  out.push(ring(rx, ly, s, { size: fs, lw: 4, c4: 'none', c1Up: 'H', c1Down: 'OH' }));
  const c1x = lx + 80 * s, c4x = rx - 80 * s, ox = (c1x + c4x) / 2, oy = ly + 22;
  out.push(path(`M${c1x} ${ly} L${ox} ${oy} L${c4x} ${ly}`, { stroke: C.olive, w: 5 }));
  out.push(`<circle cx="${ox}" cy="${oy}" r="15" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>`);
  out.push(t(ox, oy + 7, 'O', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
  out.push(bond(ox, oy + 15, ox, 680, 2.5, C.olive));
  out.push(`<rect x="${ox - 110}" y="680" width="220" height="42" rx="21" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  out.push(t(ox, 708, 'glycosidic bond', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
  // right side: arrow and result
  out.push(arrow(560, 215, 560, 470, { w: 5 }));
  out.push(t(585, 330, 'condensation', { size: 21, weight: 700 }));
  out.push(t(585, 360, '− H₂O', { size: 20, fill: C.muted }));
  out.push(`<rect x="660" y="400" width="150" height="56" rx="28" fill="#cfe3ea" stroke="${C.blue}" stroke-width="3"/>`);
  out.push(t(735, 437, 'H₂O', { size: 26, weight: 700, fill: C.blue, anchor: 'middle' }));
  out.push(t(585, 530, 'Maltose: Mr 342', { size: 24, weight: 700, fill: C.tealDark }));
  out.push(t(585, 562, '180 + 180 − 18', { size: 20, fill: C.muted }));

  // amino acids panel
  const y0 = 770;
  out.push(panel(30, y0, 840, 560));
  out.push(t(56, y0 + 40, 'Amino acids: peptide bond', { size: 22, weight: 700 }));
  const lab = (x, y, s2, o = {}) => t(x, y, s2, { size: 20, weight: 700, anchor: 'middle', ...o });
  const ln = (pts, o = {}) => path('M' + pts.map((p) => p.join(' ')).join(' L'), { w: 3, ...o });
  // glycine: H2N - CH2 - C(=O) - OH
  const gy = y0 + 160;
  out.push(t(60, y0 + 82, 'Gly', { size: 20, weight: 700, fill: C.tealDark }));
  out.push(lab(78, gy + 8, 'H₂N'));
  out.push(ln([[104, gy - 4], [140, gy - 26], [190, gy + 4]]));
  out.push(ln([[140, gy - 26], [140, gy - 64]]));
  out.push(lab(140, gy - 72, 'H'));
  out.push(ln([[185, gy + 4], [185, gy + 50]]), ln([[195, gy + 4], [195, gy + 50]]));
  out.push(lab(190, gy + 76, 'O'));
  out.push(ln([[190, gy + 4], [228, gy - 18]]));
  out.push(hl(228, gy - 42, 48, 34));
  out.push(lab(252, gy - 17, 'OH', { fill: C.olive }));
  out.push(t(330, gy + 10, '+', { size: 34, weight: 700, anchor: 'middle' }));
  // alanine: H2N - CH(CH3) - C(=O) - OH
  const ax = 400;
  out.push(t(ax + 10, y0 + 82, 'Ala', { size: 20, weight: 700, fill: C.tealDark }));
  out.push(hl(ax - 4, gy - 42, 20, 34));
  out.push(t(ax, gy - 17, 'H', { size: 20, weight: 700, fill: C.olive }));
  out.push(t(ax + 15, gy - 17, '₂N', { size: 20, weight: 700 }));
  out.push(ln([[ax + 52, gy - 20], [ax + 90, gy + 4], [ax + 140, gy - 26], [ax + 180, gy - 4]]));
  out.push(ln([[ax + 90, gy + 4], [ax + 90, gy + 44]]));
  out.push(lab(ax + 90, gy + 72, 'CH₃'));
  out.push(ln([[ax + 135, gy - 26], [ax + 135, gy - 70]]), ln([[ax + 145, gy - 26], [ax + 145, gy - 70]]));
  out.push(lab(ax + 140, gy - 78, 'O'));
  out.push(lab(ax + 200, gy + 4, 'OH'));
  // dipeptide
  const dy = y0 + 380;
  out.push(lab(78, dy + 8, 'H₂N'));
  out.push(ln([[104, dy - 4], [140, dy - 26], [185, dy + 4]]));
  out.push(ln([[140, dy - 26], [140, dy - 64]]));
  out.push(lab(140, dy - 72, 'H'));
  out.push(ln([[180, dy + 4], [180, dy + 50]]), ln([[190, dy + 4], [190, dy + 50]]));
  out.push(lab(185, dy + 76, 'O'));
  out.push(ln([[185, dy + 2], [230, dy - 24]], { stroke: C.olive, w: 6 }));
  out.push(lab(242, dy - 18, 'N'));
  out.push(ln([[242, dy - 42], [242, dy - 62]]));
  out.push(lab(242, dy - 70, 'H'));
  out.push(ln([[256, dy - 22], [295, dy + 4], [345, dy - 26], [385, dy - 4]]));
  out.push(ln([[295, dy + 4], [295, dy + 44]]));
  out.push(lab(295, dy + 72, 'CH₃'));
  out.push(ln([[340, dy - 26], [340, dy - 70]]), ln([[350, dy - 26], [350, dy - 70]]));
  out.push(lab(345, dy - 78, 'O'));
  out.push(lab(405, dy + 4, 'OH'));
  out.push(bond(212, dy - 8, 212, dy + 100, 2.5, C.olive));
  out.push(`<rect x="102" y="${dy + 100}" width="220" height="42" rx="21" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  out.push(t(212, dy + 128, 'peptide bond', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
  out.push(arrow(690, y0 + 110, 690, y0 + 260, { w: 5 }));
  out.push(t(712, y0 + 180, 'condensation', { size: 20, weight: 700 }));
  out.push(t(712, y0 + 208, '− H₂O', { size: 19, fill: C.muted }));
  out.push(`<rect x="640" y="${y0 + 290}" width="150" height="56" rx="28" fill="#cfe3ea" stroke="${C.blue}" stroke-width="3"/>`);
  out.push(t(715, y0 + 327, 'H₂O', { size: 26, weight: 700, fill: C.blue, anchor: 'middle' }));
  out.push(t(520, y0 + 405, 'Gly−Ala: Mr 146', { size: 24, weight: 700, fill: C.tealDark }));
  out.push(t(520, y0 + 435, '75 + 89 − 18', { size: 20, fill: C.muted }));
  out.push(tl(520, y0 + 480, ['Hydrolysis = reverse:', 'add H₂O, bond breaks'], { size: 19, weight: 700 }, 26));
  return svg(W, y0 + 590, 'Condensation and hydrolysis', out.join('\n'), 'Join: lose water. Split: add water.');
}

// ---------- 6. Polysaccharides ----------
const bead = (x, y, fill = C.teal, edge = C.ink, r = 10) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
const endRing = (x, y, r = 10) => `<circle cx="${x}" cy="${y}" r="${r + 8}" fill="none" stroke="${C.rust}" stroke-width="3.5"/>`;
const tag = (x, y, w, label, color) =>
  `<rect x="${x}" y="${y}" width="${w}" height="48" rx="24" fill="#fff" stroke="${color}" stroke-width="3"/>` +
  t(x + w / 2, y + 32, label, { size: 20, weight: 700, fill: color, anchor: 'middle' });
function polysaccharides() {
  const out = [];
  const head = (y, h, title, sub) => {
    out.push(panel(30, y, 840, h));
    out.push(t(56, y + 40, title, { size: 24, weight: 700 }));
    out.push(t(56, y + 72, sub, { size: 18, fill: C.muted }));
  };
  // Amylose: looped (coiled) chain
  head(140, 240, 'Amylose', 'α-1,4 bonds only: coiled, compact');
  out.push(tag(640, 158, 200, '1 free end', C.rust));
  const pts = [];
  const a = 17, b = 40, turns = 5;
  for (let u = 0; u <= turns * 2 * Math.PI + 0.6; u += 0.01) pts.push([150 + a * u - b * Math.sin(u), 302 + b * Math.cos(u)]);
  // resample at equal arc length
  const samp = [pts[0]];
  let acc = 0;
  for (let i = 1; i < pts.length; i++) {
    acc += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    if (acc >= 23) { samp.push(pts[i]); acc = 0; }
  }
  out.push(path('M' + samp.map((p) => p.map((v) => v.toFixed(1)).join(' ')).join(' L'), { w: 2.5 }));
  samp.forEach(([x, y]) => out.push(bead(x, y, C.teal, C.ink, 8)));
  const last = samp[samp.length - 1];
  out.push(endRing(last[0], last[1], 8));

  // Amylopectin
  const chain = (y, n, branchIdx) => {
    const xs = [...Array(n)].map((_, i) => 88 + i * 36.2);
    out.push(bond(xs[0], y, xs[n - 1], y, 3));
    return xs;
  };
  head(400, 250, 'Amylopectin', 'α-1,4 and α-1,6 bonds: branched');
  out.push(tag(640, 418, 200, '4 free ends', C.rust));
  let y = 538;
  let xs = chain(y, 20);
  const apBranch = [4, 9, 14];
  for (const bi of apBranch) {
    const bp = [[xs[bi], y], [xs[bi] + 17, y + 32], [xs[bi] + 34, y + 64], [xs[bi] + 51, y + 96]];
    out.push(path('M' + bp.map((p) => p.join(' ')).join(' L'), { w: 3 }));
    bp.slice(1).forEach(([x2, y2]) => out.push(bead(x2, y2)));
    out.push(endRing(bp[3][0], bp[3][1]));
  }
  xs.forEach((x, i) => out.push(bead(x, y, apBranch.includes(i) ? C.mustard : C.teal)));
  out.push(endRing(xs[19], y));

  // Glycogen
  head(670, 250, 'Glycogen', 'More branched: very compact');
  out.push(tag(640, 688, 200, '13 free ends', C.rust));
  y = 790;
  xs = chain(y, 20);
  const gb = [2, 5, 8, 11, 14, 17];
  for (const bi of gb) {
    const p1 = [xs[bi] + 17, y + 32], p2 = [xs[bi] + 34, y + 64], pr = [xs[bi] + 70, y + 58], pd = [xs[bi] + 51, y + 96];
    out.push(path(`M${xs[bi]} ${y} L${p1} L${p2} L${pd}`, { w: 3 }), bond(p2[0], p2[1], pr[0], pr[1], 3));
    out.push(bead(...p1), bead(p2[0], p2[1], C.mustard), bead(...pr), bead(...pd));
    out.push(endRing(...pr), endRing(...pd));
  }
  xs.forEach((x, i) => out.push(bead(x, y, gb.includes(i) ? C.mustard : C.teal)));
  out.push(endRing(xs[19], y));

  // Cellulose
  head(940, 280, 'Cellulose', 'β-1,4 bonds: straight chains');
  out.push(tag(500, 958, 340, 'H bonds between chains', C.tealDark));
  const rows = [1048, 1103, 1158];
  const cx = [...Array(12)].map((_, i) => 90 + i * 62);
  rows.forEach((ry, r) => {
    out.push(bond(cx[0], ry, cx[11], ry, 3));
    if (r < 2) cx.forEach((x, i) => { if (i % 2 === 1) out.push(`<line x1="${x}" y1="${ry + 12}" x2="${x}" y2="${rows[r + 1] - 12}" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="3 7"/>`); });
    cx.forEach((x, i) => {
      const up = (i + r) % 2 === 0;
      out.push(bond(x, ry, x, ry + (up ? -20 : 20), 2.5, C.olive));
      out.push(bead(x, ry, C.cream, C.olive));
    });
  });
  // key
  const ky = 1255;
  out.push(bead(70, ky), t(92, ky + 7, 'α-glucose', { size: 19 }));
  out.push(bead(250, ky, C.mustard), t(272, ky + 7, '1,6 branch point', { size: 19 }));
  out.push(endRing(484, ky), t(508, ky + 7, 'free end', { size: 19 }));
  out.push(bead(640, ky, C.cream, C.olive), t(662, ky + 7, 'β-glucose', { size: 19 }));
  return svg(W, 1290, 'Glucose polymers: shape and job', out.join('\n'), 'Same monomer, different arrangements');
}

// ---------- 7. Triglyceride and phospholipid ----------
function esterUnit(x, y, tail) {
  // ester box at (x,y) = position of glycerol junction; returns svg
  const out = [];
  out.push(`<rect x="${x + 30}" y="${y - 76}" width="118" height="104" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  out.push(bond(x, y, x + 50, y, 4));
  out.push(t(x + 64, y + 8, 'O', { size: 21, weight: 700, anchor: 'middle' }));
  out.push(bond(x + 78, y, x + 102, y, 3.5));
  out.push(t(x + 116, y + 8, 'C', { size: 21, weight: 700, anchor: 'middle' }));
  out.push(bond(x + 111, y - 18, x + 111, y - 38, 3), bond(x + 121, y - 18, x + 121, y - 38, 3));
  out.push(t(x + 116, y - 46, 'O', { size: 21, weight: 700, anchor: 'middle' }));
  // tail
  let pts = [[x + 126, y + 4]];
  const step = 29.5;
  if (tail === 'sat') {
    for (let i = 1; i <= 9; i++) pts.push([x + 126 + i * step, y + (i % 2 ? -14 : 4) + 2]);
    out.push(path('M' + pts.map((p) => p.join(' ')).join(' L'), { w: 3.5 }));
  } else {
    for (let i = 1; i <= 4; i++) pts.push([x + 126 + i * step, y + (i % 2 ? -14 : 4) + 2]);
    const k = pts[pts.length - 1];
    const d1 = [k[0] + 30, k[1] - 18 + 4];
    out.push(path('M' + pts.map((p) => p.join(' ')).join(' L'), { w: 3.5 }));
    // double bond C=C
    out.push(bond(k[0], k[1], d1[0], d1[1], 3.5, C.rust), bond(k[0] + 3, k[1] + 7, d1[0] + 3, d1[1] + 7, 3.5, C.rust));
    const rest = [d1, [d1[0] + 4, d1[1] + 32], [d1[0] + 36, d1[1] + 46], [d1[0] + 40, d1[1] + 78], [d1[0] + 72, d1[1] + 90]];
    out.push(path('M' + rest.map((p) => p.join(' ')).join(' L'), { w: 3.5 }));
  }
  return out.join('');
}
function lipids() {
  const out = [];
  out.push(panel(30, 140, 840, 600));
  out.push(t(56, 182, 'Triglyceride: 3 ester bonds', { size: 22, weight: 700 }));
  const gx = 150, ys = [290, 415, 540];
  out.push(path(`M${gx + 1} ${ys[0]} L${gx + 1} ${ys[2]}`, { w: 5 }));
  out.push(esterUnit(gx, ys[0], 'sat'), esterUnit(gx, ys[1], 'sat'), esterUnit(gx, ys[2], 'unsat'));
  out.push(t(84, ys[1] + 7, 'glycerol', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(640, ys[0] + 4, 'saturated tail', { size: 20, weight: 700, fill: C.tealDark }));
  out.push(t(640, ys[1] + 4, 'saturated tail', { size: 20, weight: 700, fill: C.tealDark }));
  out.push(t(640, ys[2] + 70, 'C=C: kinked tail', { size: 20, weight: 700, fill: C.rust }));
  out.push(`<rect x="56" y="662" width="300" height="50" rx="25" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  out.push(t(206, 694, 'ester bond × 3', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  out.push(`<rect x="380" y="662" width="280" height="50" rx="25" fill="#cfe3ea" stroke="${C.blue}" stroke-width="2.5"/>`);
  out.push(t(520, 694, '3 H₂O released', { size: 20, weight: 700, fill: C.blue, anchor: 'middle' }));

  const y0 = 770;
  out.push(panel(30, y0, 840, 510));
  out.push(t(56, y0 + 42, 'Phospholipid: 2 tails + phosphate head', { size: 22, weight: 700 }));
  const py = [y0 + 150, y0 + 275];
  out.push(path(`M${gx + 1} ${py[0]} L${gx + 1} ${y0 + 390}`, { w: 5 }));
  out.push(esterUnit(gx, py[0], 'sat'), esterUnit(gx, py[1], 'unsat'));
  out.push(`<circle cx="${gx}" cy="${y0 + 435}" r="40" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3.5"/>`);
  out.push(t(gx, y0 + 444, 'P', { size: 26, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(212, y0 + 430, 'phosphate head', { size: 20, weight: 700, fill: C.tealDark }));
  out.push(t(212, y0 + 460, 'hydrophilic', { size: 19, fill: C.tealDark }));
  out.push(t(640, py[0] + 4, 'tails: hydrophobic', { size: 20, weight: 700, fill: C.olive }));
  return svg(W, y0 + 540, 'Lipids: built on glycerol', out.join('\n'), 'Triglyceride and phospholipid');
}

// ---------- 8. Protein structure ----------
function protein() {
  const out = [];
  const head = (y, h, n, title, sub) => {
    out.push(panel(30, y, 840, h));
    out.push(`<circle cx="66" cy="${y + 42}" r="20" fill="${C.ink}"/>`, t(66, y + 49, n, { size: 20, weight: 700, fill: '#fff', anchor: 'middle' }));
    out.push(t(100, y + 50, title, { size: 24, weight: 700 }));
    out.push(t(100, y + 82, sub, { size: 18, fill: C.muted }));
  };
  const aa = (x, y, label, fill = C.teal, edge = C.ink) =>
    `<circle cx="${x}" cy="${y}" r="29" fill="${fill}" stroke="${edge}" stroke-width="3"/>` + t(x, y + 7, label, { size: 19, weight: 700, anchor: 'middle' });
  // primary
  head(140, 180, '1', 'Primary', 'Sequence of amino acids');
  const seq = ['Leu', 'Cys', 'Lys', 'Ser', 'Gly', 'Asn', 'Asp', 'Leu', 'Cys'];
  const sx = (i) => 101 + i * 88;
  out.push(bond(sx(0), 278, sx(8), 278, 3.5));
  seq.forEach((s, i) => out.push(aa(sx(i), 278, s)));
  out.push(arrow(497, 232, 497, 262, { color: C.olive, marker: 'ahO', w: 3 }));
  out.push(t(485, 226, 'peptide bond', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }));

  // secondary
  head(340, 280, '2', 'Secondary', 'Backbone folds, held by H bonds (dotted)');
  // helix: three loops
  const hx = 190, hy0 = 470;
  for (let i = 0; i < 3; i++) {
    const y = hy0 + i * 32;
    out.push(`<ellipse cx="${hx}" cy="${y + 14}" rx="50" ry="14" fill="none" stroke="${C.tealDark}" stroke-width="6"/>`);
  }
  out.push(`<line x1="${hx}" y1="${hy0 + 2}" x2="${hx}" y2="${hy0 + 92}" stroke="${HB}" stroke-width="3" stroke-dasharray="4 6"/>`);
  out.push(t(hx, 598, 'α-helix', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  // sheet
  const zig = (y) => { const p = []; for (let i = 0; i <= 6; i++) p.push([470 + i * 56.5, y + (i % 2 ? -20 : 0)]); return p; };
  [482, 532, 582].forEach((y) => out.push(path('M' + zig(y).map((p) => p.join(' ')).join(' L'), { stroke: C.tealDark, w: 6 })));
  [526, 639, 752].forEach((x) => out.push(`<line x1="${x}" y1="${466}" x2="${x}" y2="${576}" stroke="${HB}" stroke-width="3" stroke-dasharray="4 6"/>`));
  out.push(t(640, 615, 'β-pleated sheet', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));

  // tertiary
  head(640, 370, '3', 'Tertiary', 'Chain folds, R groups interact');
  const P = { leu1: [265, 850], cys1: [375, 805], lys: [515, 805], ser: [655, 820], gly: [735, 878], asn: [665, 935], asp: [565, 918], leu2: [455, 912], cys2: [350, 930] };
  const chainOrder = ['leu1', 'cys1', 'lys', 'ser', 'gly', 'asn', 'asp', 'leu2', 'cys2'];
  out.push(path('M' + chainOrder.map((k) => P[k].join(' ')).join(' L'), { w: 3.5 }));
  out.push(bond(...P.cys1, ...P.cys2, 8, C.olive));
  out.push(`<line x1="${P.lys[0]}" y1="${P.lys[1]}" x2="${P.asp[0]}" y2="${P.asp[1]}" stroke="${C.tealDark}" stroke-width="3.5" stroke-dasharray="12 8"/>`);
  out.push(`<line x1="${P.ser[0]}" y1="${P.ser[1]}" x2="${P.asn[0]}" y2="${P.asn[1]}" stroke="${C.rust}" stroke-width="3.5" stroke-dasharray="3 6"/>`);
  out.push(`<line x1="${P.leu1[0]}" y1="${P.leu1[1]}" x2="${P.leu2[0]}" y2="${P.leu2[1]}" stroke="#4f5f7f" stroke-width="3.5" stroke-dasharray="12 8"/>`);
  out.push(aa(...P.leu1, 'Leu', C.teal, '#4f5f7f'), aa(...P.leu2, 'Leu', C.teal, '#4f5f7f'));
  out.push(aa(...P.cys1, 'Cys', C.teal, C.olive), aa(...P.cys2, 'Cys', C.teal, C.olive));
  out.push(aa(...P.lys, 'Lys', C.teal, C.tealDark), aa(...P.asp, 'Asp', C.teal, C.tealDark));
  out.push(aa(...P.ser, 'Ser', C.teal, C.rust), aa(...P.asn, 'Asn', C.teal, C.rust));
  out.push(aa(...P.gly, 'Gly'));
  out.push(t(P.lys[0], P.lys[1] - 40, '+', { size: 26, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(P.asp[0] + 38, P.asp[1] - 30, '−', { size: 26, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  // key
  const ky = 985;
  out.push(bond(58, ky - 6, 108, ky - 6, 8, C.olive), t(120, ky, 'S−S bond', { size: 19 }));
  out.push(`<line x1="250" y1="${ky - 6}" x2="300" y2="${ky - 6}" stroke="${C.tealDark}" stroke-width="3.5" stroke-dasharray="12 8"/>`, t(312, ky, 'ionic', { size: 19 }));
  out.push(`<line x1="400" y1="${ky - 6}" x2="450" y2="${ky - 6}" stroke="${C.rust}" stroke-width="3.5" stroke-dasharray="3 6"/>`, t(462, ky, 'H bond', { size: 19 }));
  out.push(`<line x1="570" y1="${ky - 6}" x2="620" y2="${ky - 6}" stroke="#4f5f7f" stroke-width="3.5" stroke-dasharray="12 8"/>`, t(632, ky, 'hydrophobic', { size: 19 }));

  // quaternary
  head(1040, 290, '4', 'Quaternary', 'Several chains: haemoglobin');
  const sub = (x, y, label, fill, edge) =>
    `<circle cx="${x}" cy="${y}" r="40" fill="${fill}" stroke="${edge}" stroke-width="3.5"/>` +
    t(x - 12, y + 8, label, { size: 22, weight: 700, fill: edge, anchor: 'middle' }) +
    `<rect x="${x + 4}" y="${y - 10}" width="20" height="20" rx="3" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>`;
  out.push(sub(150, 1200, 'α', C.teal, C.tealDark), sub(235, 1200, 'β', C.cream, C.olive));
  out.push(sub(150, 1278, 'β', C.cream, C.olive), sub(235, 1278, 'α', C.teal, C.tealDark));
  out.push(`<line x1="258" y1="1190" x2="335" y2="1162" stroke="${C.rust}" stroke-width="2.5"/>`);
  out.push(t(340, 1168, 'haem group in each chain', { size: 21, weight: 700, fill: C.rust }));
  out.push(t(340, 1215, 'Fe²⁺ binds one O₂', { size: 20 }));
  out.push(t(340, 1255, '2 α + 2 β chains', { size: 20, weight: 700, fill: C.tealDark }));
  out.push(t(340, 1295, '4 haem = up to 4 O₂', { size: 20, weight: 700 }));
  return svg(W, 1360, 'Four levels of protein structure', out.join('\n'), 'Each level builds on the one before');
}

// ---------- 9. Biochemical tests ----------
function tube(x, top, fill, { cloudy = false, fillTop = 140 } = {}) {
  const w = 76, h = 170, bot = top + h;
  const out = [];
  const shape = `M${x} ${top} V${bot - w / 2} a${w / 2} ${w / 2} 0 0 0 ${w} 0 V${top}`;
  out.push(`<clipPath id="c${x}_${top}"><path d="${shape} Z"/></clipPath>`);
  out.push(`<rect x="${x}" y="${top + h - fillTop}" width="${w}" height="${fillTop + 10}" fill="${fill}" clip-path="url(#c${x}_${top})"/>`);
  if (cloudy) {
    const dots = [[12, 70], [26, 84], [40, 78], [55, 92], [18, 104], [34, 112], [50, 120], [62, 108], [22, 132], [44, 140], [58, 146], [30, 152], [14, 118], [66, 132], [38, 96], [8, 88]];
    dots.forEach(([dx, dy], i) => out.push(`<circle cx="${x + dx}" cy="${top + dy}" r="${3 + (i % 3)}" fill="#a9bcc6" opacity="0.85"/>`));
  }
  out.push(`<path d="${shape}" fill="none" stroke="${C.ink}" stroke-width="3.5"/>`);
  out.push(`<line x1="${x - 8}" y1="${top}" x2="${x + w + 8}" y2="${top}" stroke="${C.ink}" stroke-width="4"/>`);
  return out.join('');
}
function biochemTests() {
  const out = [];
  const box = (x, y, title, c1, c2, lab1, lab2, extra = {}) => {
    out.push(panel(x, y, 410, 350));
    out.push(t(x + 20, y + 42, title, { size: 22, weight: 700 }));
    out.push(tube(x + 72, y + 80, c1, extra.o1), tube(x + 252, y + 80, c2, extra.o2));
    out.push(t(x + 110, y + 286, 'absent', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
    out.push(t(x + 110, y + 318, lab1, { size: 19, anchor: 'middle' }));
    out.push(t(x + 290, y + 286, 'present', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
    out.push(t(x + 290, y + 318, lab2, { size: 19, weight: 700, anchor: 'middle' }));
    if (extra.heat) {
      out.push(`<rect x="${x + 150}" y="${y + 160}" width="100" height="40" rx="20" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
      out.push(t(x + 200, y + 187, 'heat', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
    }
  };
  box(30, 140, 'Benedict’s: reducing sugar', '#3c7fd0', '#b5402a', 'stays blue', 'brick-red', { heat: true });
  box(460, 140, 'Iodine: starch', '#c98a30', '#1e1e3a', 'orange-brown', 'blue-black');
  box(30, 510, 'Biuret: protein', '#4b8ad6', '#8b55b8', 'stays blue', 'purple');
  box(460, 510, 'Emulsion: lipid', '#e8f3f6', '#f4f8fa', 'stays clear', 'cloudy white', { o2: { cloudy: true } });
  out.push(t(30, 908, 'More reducing sugar, further along', { size: 22, weight: 700 }));
  const cols = [['blue', '#3c7fd0'], ['green', '#48a058'], ['yellow', '#e0c43a'], ['orange', '#e08a30'], ['brick-red', '#b5402a']];
  cols.forEach(([n, c], i) => {
    const x = 30 + i * 168;
    out.push(`<rect x="${x}" y="928" width="156" height="50" rx="8" fill="${c}" stroke="${C.ink}" stroke-width="2.5"/>`);
    out.push(t(x + 78, 1008, n, { size: 19, weight: 700, anchor: 'middle' }));
  });
  out.push(t(30, 1062, 'Sucrose (non-reducing): test after hydrolysis', { size: 22, weight: 700 }));
  const steps = [['Boil with', 'dilute HCl'], ['Neutralise with', 'NaHCO₃'], ['Benedict’s', 'and heat']];
  steps.forEach(([a, b], i) => {
    const x = 30 + i * 290;
    out.push(panel(x, 1086, 260, 116, C.tealLight, C.tealDark));
    out.push(`<circle cx="${x + 34}" cy="${1120}" r="20" fill="${C.tealDark}"/>`, t(x + 34, 1127, String(i + 1), { size: 20, weight: 700, fill: '#fff', anchor: 'middle' }));
    out.push(t(x + 140, 1150, a, { size: 20, weight: 700, anchor: 'middle' }), t(x + 140, 1180, b, { size: 20, weight: 700, anchor: 'middle' }));
    if (i < 2) out.push(`<path d="M${x + 266} 1130 L${x + 284} 1144 L${x + 266} 1158 Z" fill="${C.ink}"/>`);
  });
  out.push(t(30, 1240, 'Red precipitate now: sucrose was present', { size: 20, weight: 700, fill: C.tealDark }));
  return svg(W, 1275, 'Testing for biological molecules', out.join('\n'), 'Left tube: absent. Right tube: present.');
}

export const figures = [
  { name: '05-condensation-hydrolysis', after: '### Cohesion and surface tension', svg: condensation(),
    alt: 'Top: two alpha-glucose rings join; the OH on carbon 1 of one and the H of the OH on carbon 4 of the other leave as water, leaving a C-O-C glycosidic bond. The product is maltose, Mr 342 (180 + 180 - 18). Bottom: glycine and alanine join the same way; OH from glycine and H from alanine leave as water, forming a peptide bond. Gly-Ala has Mr 146 (75 + 89 - 18). Hydrolysis reverses each change by adding water.',
    caption: 'Condensation joins monomers and releases water; hydrolysis adds water and splits the bond.' },
  { name: '01-water-hydrogen-bonds', after: '### Cohesion and surface tension', svg: waterHBonds(),
    alt: 'A central bent water molecule (H-O-H about 104.5 degrees) has a slightly negative oxygen and two slightly positive hydrogens. Dotted hydrogen bonds join each hydrogen to the oxygen of a neighbour below, and join a hydrogen of each of two neighbours above to the central oxygen, giving four hydrogen bonds. Solid lines are strong covalent bonds and dotted lines are weak hydrogen bonds.',
    caption: 'A polar water molecule can form up to four hydrogen bonds with its neighbours.' },
  { name: '08-protein-structure', after: '### Hydrogen ions and pH', svg: protein(),
    alt: 'Four panels. 1 Primary: nine amino acids in sequence joined by peptide bonds. 2 Secondary: an alpha-helix and a beta-pleated sheet held by hydrogen bonds between backbone groups. 3 Tertiary: a folded chain with a disulfide bond between two cysteines, an ionic bond between lysine and aspartate, a hydrogen bond between serine and asparagine, and hydrophobic interaction between leucines. 4 Quaternary: haemoglobin, two alpha and two beta chains each with a haem group holding Fe2+, binding up to four oxygen molecules.',
    caption: 'Primary sequence leads to secondary folding, tertiary R-group interactions and quaternary assembly.' },
  { name: '02-water-solvent', after: '### Water as a solvent', svg: waterSolvent(),
    alt: 'Water molecules surround a sodium ion with their slightly negative oxygen atoms facing it, and surround a chloride ion with their slightly positive hydrogens facing it. A glucose ring with OH groups hydrogen bonds to water and dissolves. A non-polar triglyceride droplet cannot, so the water molecules bond to each other around it.',
    caption: 'Water dissolves ions and polar molecules, but not non-polar triglycerides.' },
  { name: '07-triglyceride-phospholipid', after: '### Phosphate ions in DNA and ATP', svg: lipids(),
    alt: 'Top: a triglyceride is a glycerol backbone of three carbons, each joined by an ester bond (O-C=O) to a fatty acid tail; two tails are straight (saturated) and one has a C=C double bond that kinks it. Three ester bonds release three water molecules. Bottom: a phospholipid has glycerol with two fatty acid tails and a phosphate head in place of the third fatty acid; the head is hydrophilic and the tails hydrophobic.',
    caption: 'Both lipids are built on glycerol; phospholipids swap one fatty acid for a hydrophilic phosphate.' },
  { name: '04-alpha-beta-glucose', after: '### Alpha-glucose and beta-glucose', svg: alphaBeta(),
    alt: 'Two ring drawings of glucose, each with five carbons and one oxygen, numbered 1 to 5 clockwise from the right-hand carbon, with CH2OH on carbon 5. OH on carbons 2 and 4 is below the ring and on carbon 3 above, in both. In alpha-glucose the OH on carbon 1 is below the ring and H above; in beta-glucose the OH is above and H below. Both are C6H12O6.',
    caption: 'The alpha and beta forms differ only in the position of the OH on carbon 1.' },
  { name: '06-polysaccharides', after: '### Cellulose (plant cell walls)', svg: polysaccharides(),
    alt: 'Glucose units drawn as beads. Amylose is one unbranched alpha-1,4 chain coiled into a helix with one free end. Amylopectin has alpha-1,4 chains with alpha-1,6 branch points and 4 free ends in the drawing; glycogen is more branched with 13 free ends, so enzymes can release glucose faster. Cellulose is straight beta-1,4 chains with every second glucose flipped, joined to neighbouring chains by hydrogen bonds.',
    caption: 'Branching gives many ends for fast release; straight cellulose chains bond sideways for strength.' },
  { name: '09-biochemical-tests', after: '### Test for non-reducing sugars', svg: biochemTests(),
    alt: 'Four pairs of test tubes: Benedict’s (heated) stays blue without reducing sugar and turns brick-red with it; iodine stays orange-brown without starch and turns blue-black with it; biuret stays blue without protein and turns purple with it; in the emulsion test, ethanol then water stays clear without lipid and turns cloudy white with it. A strip shows the Benedict’s colours blue, green, yellow, orange, brick-red with more reducing sugar. A three-step flow shows the non-reducing sugar test: boil with dilute HCl, neutralise with sodium hydrogencarbonate, then Benedict’s and heat.',
    caption: 'Each test has a clear colour change; non-reducing sugars need acid hydrolysis first.' },
  { name: '03-water-heat', after: '### High heat capacity: buffering temperature', svg: waterHeat(),
    alt: 'Top: 500 kJ absorbed by 42 kg of liquid raises water by 2.85 degrees Celsius but a liquid with half the specific heat capacity by 5.67 degrees. Bottom: removing 90 kJ needs only 37.5 g of water to evaporate, compared with 21.5 kg of water warmed by 1 degree Celsius; to the same scale the evaporation bar is a sliver.',
    caption: 'Water warms slowly and removes a lot of heat when it evaporates.' },
];
