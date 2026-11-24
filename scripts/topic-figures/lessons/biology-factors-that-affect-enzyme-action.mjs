// Board-neutral redraws of the A-level enzyme figures (cycle, models of fit, activation energy, initial
// rate, temperature and pH, Km, inhibitors, immobilised enzymes). Same content and numbers as the earlier
// set, with the board pills ("All boards", "Cambridge 9700 only", "Cambridge 9700 / OCR", "OCR only") removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-factors-that-affect-enzyme-action';
const W = 900;
const ENZ = '#dde9e6', SUB = C.cream, TAB = '#f2c9b0', BLUE = '#2f6f8f';
const halo = (x, y, s, o) => t(x, y, s, o).replace('<text ', '<text paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round" ');

// Enzyme: circle of radius r with a stepped active site on the right (outer cut 44 tall x 18 deep,
// inner cut 18 tall x 14 deep). shape 'exact' | 'close' (not quite complementary) | 'bent' (distorted).
function enzyme(cx, cy, r = 60, { shape = 'exact', fill = ENZ, edge = C.tealDark } = {}) {
  const k = r / 60, h = 26 * k, xr = cx + Math.sqrt(r * r - h * h), xn = cx + r - 20 * k;
  let notch;
  if (shape === 'exact') notch = `L${xn} ${cy + h} L${xn} ${cy + 11 * k} L${xn - 16 * k} ${cy + 11 * k} L${xn - 16 * k} ${cy - 11 * k} L${xn} ${cy - 11 * k} L${xn} ${cy - h}`;
  else if (shape === 'close') notch = `L${xn + 4 * k} ${cy + h} L${xn - 4 * k} ${cy + 8 * k} L${xn - 14 * k} ${cy + 6 * k} L${xn - 14 * k} ${cy - 6 * k} L${xn - 4 * k} ${cy - 8 * k} L${xn + 4 * k} ${cy - h}`;
  else notch = `L${xn + 8 * k} ${cy + h - 2} L${xn - 10 * k} ${cy + 12 * k} L${xn - 2 * k} ${cy + 2 * k} L${xn - 16 * k} ${cy - 10 * k} L${xn + 6 * k} ${cy - h + 2}`;
  return `<path d="M${xr} ${cy - h} A${r} ${r} 0 1 0 ${xr} ${cy + h} ${notch} Z" fill="${fill}" stroke="${edge}" stroke-width="3" stroke-linejoin="round"/>`;
}
// Substrate: small tab (fits the inner cut) + square. x = left edge of the tab.
const substrate = (x, cy, { fill = SUB, tab = TAB, edge = C.olive, label = '' } = {}) =>
  `<rect x="${x}" y="${cy - 10}" width="16" height="20" fill="${tab}" stroke="${C.rust}" stroke-width="2"/>` +
  `<rect x="${x + 16}" y="${cy - 22}" width="44" height="44" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` +
  (label ? t(x + 38, cy + 7, label, { size: 18, weight: 700, fill: C.rust, anchor: 'middle' }) : '');
const boundX = (cx, r = 60) => cx + r - 20 - 16; // tab left edge when bound
const blocked = (x, y, s = 36) =>
  `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="${SUB}" stroke="${C.olive}" stroke-width="2" stroke-dasharray="5 4"/>` +
  `<path d="M${x + 6} ${y + 6} l${s - 12} ${s - 12} M${x + s - 6} ${y + 6} l${-s + 12} ${s - 12}" stroke="${C.rust}" stroke-width="3.5" stroke-linecap="round"/>`;

// ---------- 01 Enzyme cycle ----------
function cycle() {
  const o = [];
  const box = [[40, 120, 'E + S'], [480, 120, 'ES complex'], [480, 470, 'EP complex'], [40, 470, 'E + P']];
  box.forEach(([x, y, lab]) => { o.push(panel(x, y, 380, 290)); o.push(t(x + 190, y + 268, lab, { size: 22, weight: 700, anchor: 'middle' })); });
  // E + S
  o.push(enzyme(150, 260), substrate(270, 260), arrow(330, 205, 282, 205, { w: 3.5 }));
  // ES
  o.push(enzyme(590, 260), substrate(boundX(590), 260));
  // EP: products starting to separate
  o.push(enzyme(590, 610));
  o.push(`<rect x="${boundX(590)}" y="600" width="16" height="20" fill="${TAB}" stroke="${C.rust}" stroke-width="2"/>`);
  o.push(`<rect x="${boundX(590) + 22}" y="588" width="44" height="44" fill="${SUB}" stroke="${C.olive}" stroke-width="2.5"/>`);
  // E + P
  o.push(enzyme(150, 610));
  o.push(`<rect x="275" y="${545}" width="44" height="44" fill="${SUB}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(`<rect x="287" y="${630}" width="18" height="18" fill="${TAB}" stroke="${C.rust}" stroke-width="2"/>`);
  // cycle arrows
  o.push(arrow(426, 265, 474, 265, { color: C.olive, w: 6, marker: 'ahO' }));
  o.push(arrow(670, 414, 670, 464, { color: C.olive, w: 6, marker: 'ahO' }));
  o.push(arrow(474, 615, 426, 615, { color: C.olive, w: 6, marker: 'ahO' }));
  o.push(arrow(230, 464, 230, 414, { color: C.olive, w: 6, marker: 'ahO' }));
  o.push(`<rect x="130" y="800" width="640" height="64" rx="32" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(t(W / 2, 842, 'E + S → ES → EP → E + P', { size: 26, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(W / 2, 904, 'The enzyme is unchanged at the end', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 940, 'One enzyme, one cycle', o.join('\n'), 'Active site binds, converts, releases');
}

// ---------- 02 Lock and key / induced fit ----------
function models() {
  const o = [];
  const rows = [['Lock and key: rigid site', BLUE], ['Induced fit: flexible site', C.rust], ['Specificity: wrong shape', C.ink]];
  rows.forEach(([h, col], i) => {
    const y = 120 + i * 270, cy = y + 140;
    o.push(panel(40, y, 820, 250));
    o.push(t(64, y + 38, h, { size: 22, weight: 700, fill: col }));
    if (i < 2) {
      o.push(enzyme(140, cy, 56, { shape: i === 0 ? 'exact' : 'close' }));
      o.push(substrate(282, cy), arrow(400, cy - 58, 352, cy - 58, { w: 3.5 }));
      o.push(arrow(398, cy, 462, cy, { color: C.olive, w: 6, marker: 'ahO' }));
      o.push(enzyme(590, cy, 56), substrate(boundX(590, 56), cy));
      if (i === 1) {
        o.push(`<path d="M${590 + 24} ${cy - 66} l12 0 l-6 14 z" fill="${C.rust}"/>`, `<path d="M${590 + 24} ${cy + 66} l12 0 l-6 -14 z" fill="${C.rust}"/>`);
        o.push(t(130, y + 232, 'close, not exact', { size: 18, anchor: 'middle' }));
        o.push(t(620, y + 232, 'site moulds round substrate', { size: 18, anchor: 'middle' }));
      } else o.push(t(620, y + 232, 'exact fit, fixed shape', { size: 18, anchor: 'middle' }));
    } else {
      o.push(enzyme(140, cy, 56));
      o.push(`<circle cx="320" cy="${cy}" r="30" fill="${SUB}" stroke="${C.olive}" stroke-width="2.5"/>`);
      o.push(`<path d="M304 ${cy - 16} l32 32 M336 ${cy - 16} l-32 32" stroke="${C.rust}" stroke-width="4" stroke-linecap="round"/>`);
      o.push(t(130, y + 232, 'cannot fit the site', { size: 18, anchor: 'middle' }));
      o.push(t(640, cy - 6, 'No complementary shape,', { size: 20, anchor: 'middle' }));
      o.push(t(640, cy + 24, 'no binding', { size: 20, weight: 700, anchor: 'middle' }));
    }
  });
  o.push(t(W / 2, 950, 'Induced fit also strains bonds, lowering Ea', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  return svg(W, 985, 'Two models of fit', o.join('\n'), 'Does the active site change shape?');
}

// ---------- 03 Activation energy ----------
function activation() {
  const o = [];
  const x0 = 130, base = 330, prod = 380;
  const prof = (peak) => `M${x0} ${base} L250 ${base} C330 ${base} 360 ${peak} 440 ${peak} C520 ${peak} 560 ${prod} 640 ${prod} L800 ${prod}`;
  o.push(arrow(x0, 430, x0, 120, { w: 3.5 }), arrow(x0, 430, 820, 430, { w: 3.5 }));
  o.push(`<text transform="translate(${x0 - 30} 280) rotate(-90)" font-size="19" font-weight="700" fill="${C.ink}" text-anchor="middle">Energy</text>`);
  o.push(t(475, 470, 'Progress of reaction', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(`<line x1="200" y1="160" x2="440" y2="160" stroke="${C.tealDark}" stroke-width="1.5" stroke-dasharray="5 4"/>`);
  o.push(`<line x1="300" y1="250" x2="440" y2="250" stroke="${C.tealDark}" stroke-width="1.5" stroke-dasharray="5 4"/>`);
  o.push(path(prof(160), { w: 4 }), path(prof(250), { stroke: C.tealDark, w: 4 }));
  o.push(arrow(200, base, 200, 166, { w: 3 }), t(186, 230, 'Ea', { size: 20, weight: 700, anchor: 'end' }));
  o.push(arrow(300, base, 300, 256, { color: C.tealDark, w: 3, marker: 'ahT' }), t(288, 306, 'Ea', { size: 20, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(t(530, 150, 'no enzyme', { size: 19, weight: 700 }), t(560, 300, 'with enzyme', { size: 19, weight: 700, fill: C.tealDark }));
  o.push(t(140, 360, 'substrates', { size: 18, fill: C.muted }), t(790, 368, 'products', { size: 18, fill: C.muted, anchor: 'end' }));
  o.push(`<rect x="100" y="500" width="700" height="56" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(t(W / 2, 536, 'Overall energy change is not altered', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(60, 606, 'How the active site helps', { size: 21, weight: 700 }));
  [[40, 'Building: held close,', 'correct orientation'], [470, 'Breaking: bond strained', 'by binding']].forEach(([x, a, b], i) => {
    o.push(panel(x, 626, 390, 260));
    const cx = x + 130, cy = 730;
    o.push(enzyme(cx, cy, 56));
    if (i === 0) {
      o.push(`<rect x="${boundX(cx, 56)}" y="${cy - 10}" width="16" height="20" fill="${TAB}" stroke="${C.rust}" stroke-width="2"/>`);
      o.push(`<rect x="${boundX(cx, 56) + 16}" y="${cy - 22}" width="44" height="44" fill="${SUB}" stroke="${C.olive}" stroke-width="2.5"/>`);
      o.push(arrow(cx + 130, cy - 52, cx + 86, cy - 52, { color: C.rust, w: 3.5, marker: 'ahR' }));
    } else {
      o.push(substrate(boundX(cx, 56), cy));
      o.push(arrow(cx + 120, cy - 70, cx + 66, cy - 18, { color: C.rust, w: 3.5, marker: 'ahR' }));
    }
    o.push(t(x + 195, 846, a, { size: 18, weight: 700, anchor: 'middle' }), t(x + 195, 870, b, { size: 18, weight: 700, anchor: 'middle' }));
  });
  return svg(W, 912, 'Enzymes lower the hill', o.join('\n'), 'Same start, same finish');
}

// ---------- generic graph frame ----------
function frame(px, py, pw, ph, x0, x1, y0, y1) {
  const X = (x) => px + ((x - x0) / (x1 - x0)) * pw, Y = (y) => py + ph - ((y - y0) / (y1 - y0)) * ph;
  const curve = (f, a, b, col = C.ink, w = 4, extra = '') => {
    const pts = []; for (let i = 0; i <= 200; i++) { const x = a + ((b - a) * i) / 200; pts.push(`${X(x).toFixed(1)} ${Y(f(x)).toFixed(1)}`); }
    return path('M' + pts.join(' L'), { stroke: col, w, extra });
  };
  const axes = (xt, yt, xl, yl) => {
    const s = [arrow(px, py + ph, px + pw + 30, py + ph, { w: 3.5 }), arrow(px, py + ph, px, py - 30, { w: 3.5 })];
    for (const v of xt) s.push(`<line x1="${X(v)}" y1="${py + ph}" x2="${X(v)}" y2="${py + ph + 8}" stroke="${C.ink}" stroke-width="2"/>`, t(X(v), py + ph + 30, String(v), { size: 17, anchor: 'middle' }));
    for (const v of yt) s.push(`<line x1="${px - 8}" y1="${Y(v)}" x2="${px}" y2="${Y(v)}" stroke="${C.ink}" stroke-width="2"/>`, t(px - 12, Y(v) + 6, String(v), { size: 17, anchor: 'end' }));
    s.push(t(px + pw / 2, py + ph + 62, xl, { size: 19, weight: 700, anchor: 'middle' }));
    s.push(`<text transform="translate(${px - 50} ${py + ph / 2}) rotate(-90)" font-size="19" font-weight="700" fill="${C.ink}" text-anchor="middle">${yl}</text>`);
    return s.join('');
  };
  return { X, Y, curve, axes };
}

// ---------- 04 Initial rate ----------
function initialRate() {
  const o = [];
  const F = frame(130, 130, 680, 400, 0, 120, 0, 30);
  o.push(F.axes([0, 20, 40, 60, 80, 100, 120], [0, 10, 20, 30], 'Time / s', 'Volume of O₂ / cm³'));
  const data = [[0, 0], [20, 9], [40, 16], [60, 21], [80, 24.5], [100, 26.5], [120, 27]];
  // smooth curve through the points (Catmull-Rom)
  const P = data.map(([x, y]) => [F.X(x), F.Y(y)]);
  let d = `M${P[0][0]} ${P[0][1]}`;
  for (let i = 0; i < P.length - 1; i++) {
    const p0 = P[Math.max(0, i - 1)], p1 = P[i], p2 = P[i + 1], p3 = P[Math.min(P.length - 1, i + 2)];
    d += ` C${p1[0] + (p2[0] - p0[0]) / 6} ${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6} ${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]} ${p2[1]}`;
  }
  o.push(`<line x1="${F.X(0)}" y1="${F.Y(0)}" x2="${F.X(54)}" y2="${F.Y(27)}" stroke="${C.rust}" stroke-width="3.5" stroke-dasharray="10 7"/>`);
  o.push(`<line x1="${F.X(60)}" y1="${F.Y(21)}" x2="${F.X(120)}" y2="${F.Y(27)}" stroke="${BLUE}" stroke-width="3.5" stroke-dasharray="10 7"/>`);
  o.push(path(d, { w: 4 }));
  data.forEach(([x, y]) => o.push(`<circle cx="${F.X(x)}" cy="${F.Y(y)}" r="7" fill="${C.ink}"/>`));
  o.push(`<circle cx="${F.X(20)}" cy="${F.Y(10)}" r="8" fill="${C.rust}"/>`, `<circle cx="${F.X(60)}" cy="${F.Y(21)}" r="8" fill="${BLUE}"/>`);
  o.push(tl(F.X(4), F.Y(28.6), ['initial rate', '= 10.0 ÷ 20', '= 0.50 cm³ s⁻¹'], { size: 20, weight: 700, fill: C.rust }, 27));
  o.push(tl(F.X(72), F.Y(16), ['later: 6.0 ÷ 60', '= 0.10 cm³ s⁻¹'], { size: 20, weight: 700, fill: BLUE }, 27));
  // apparatus
  const y = 640;
  o.push(panel(40, y, 820, 260));
  o.push(`<path d="M120 ${y + 92} h28 v52 l46 82 h-120 l46 -82 z" fill="#fff" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`);
  o.push(`<path d="M88 ${y + 196} h92 l17 30 h-126 z" fill="${C.tealLight}"/>`);
  for (const [cx, cy] of [[120, y + 205], [140, y + 186], [130, y + 162]]) o.push(`<circle cx="${cx}" cy="${cy}" r="5" fill="none" stroke="${C.tealDark}" stroke-width="2"/>`);
  o.push(path(`M134 ${y + 92} V${y + 50} H330`, { w: 3 }));
  o.push(`<rect x="330" y="${y + 30}" width="270" height="40" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(`<rect x="460" y="${y + 32}" width="138" height="36" fill="${C.cream}"/>`);
  o.push(`<line x1="460" y1="${y + 18}" x2="460" y2="${y + 82}" stroke="${C.ink}" stroke-width="4"/>`, `<line x1="460" y1="${y + 50}" x2="640" y2="${y + 50}" stroke="${C.ink}" stroke-width="4"/>`, `<line x1="640" y1="${y + 30}" x2="640" y2="${y + 70}" stroke="${C.ink}" stroke-width="4"/>`);
  o.push(t(465, y + 104, 'gas syringe collects O₂', { size: 18, anchor: 'middle' }));
  o.push(t(70, y + 250, 'potato extract + H₂O₂', { size: 18 }));
  o.push(t(560, y + 150, '2H₂O₂ → 2H₂O + O₂', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(560, y + 196, 'Best comparison: initial rate', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(560, y + 222, '(tangent at t = 0)', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
  return svg(W, y + 290, 'Following the reaction', o.join('\n'), 'Catalase: oxygen made over time');
}

// ---------- 05 Temperature and pH ----------
function tempPH() {
  const o = [];
  const raw = (T) => Math.exp(0.065 * T) / (1 + Math.exp((T - 47) / 2.4));
  let best = 0, topt = 0; for (let T = 0; T <= 70; T += 0.05) if (raw(T) > best) { best = raw(T); topt = T; }
  const temp = (T) => raw(T) / best;
  o.push(t(60, 132, 'Temperature', { size: 23, weight: 700 }));
  const A = frame(130, 170, 640, 300, 0, 70, 0, 1.12);
  o.push(A.axes([0, 20, 40, 60], [], 'Temperature / °C', 'Rate'));
  o.push(`<line x1="${A.X(topt)}" y1="${A.Y(1)}" x2="${A.X(topt)}" y2="${A.Y(0)}" stroke="${C.olive}" stroke-width="3" stroke-dasharray="9 6"/>`);
  o.push(A.curve(temp, 0, 68));
  o.push(t(A.X(topt), A.Y(1) - 16, 'optimum', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(enzyme(A.X(13), A.Y(0.82), 40), t(A.X(13), A.Y(0.82) + 72, 'slow, intact', { size: 19, anchor: 'middle' }));
  o.push(enzyme(A.X(60), A.Y(0.72), 40, { shape: 'bent', fill: '#f0ddd0', edge: C.rust }), t(A.X(60), A.Y(0.72) + 72, 'denatured', { size: 19, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(60, 622, 'pH (buffer holds it)', { size: 23, weight: 700 }));
  const B = frame(130, 660, 640, 300, 2, 12, 0, 1.12);
  o.push(B.axes([2, 4, 6, 8, 10, 12], [], 'pH', 'Rate'));
  o.push(`<line x1="${B.X(7)}" y1="${B.Y(1)}" x2="${B.X(7)}" y2="${B.Y(0)}" stroke="${C.olive}" stroke-width="3" stroke-dasharray="9 6"/>`);
  o.push(B.curve((p) => Math.exp(-((p - 7) ** 2) / (2 * 1.15 ** 2)), 2, 12, C.tealDark));
  o.push(t(B.X(7), B.Y(1) - 16, 'optimum', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  const charged = (cx, cy, sign, col) => {
    let s = enzyme(cx, cy, 40);
    for (const a of [-110, -70, 180, 120, 60]) {
      const x = cx + 42 * Math.cos((a * Math.PI) / 180), y = cy + 42 * Math.sin((a * Math.PI) / 180);
      s += `<circle cx="${x}" cy="${y}" r="11" fill="#fff" stroke="${col}" stroke-width="2.5"/>` + t(x, y + 6, sign, { size: 17, weight: 700, fill: col, anchor: 'middle' });
    }
    return s;
  };
  o.push(charged(B.X(3.6), B.Y(0.78), '+', C.rust), t(B.X(3.6), B.Y(0.78) + 76, 'charges alter', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(charged(B.X(10.6), B.Y(0.78), '−', BLUE), t(B.X(10.6), B.Y(0.78) + 76, 'charges alter', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(`<rect x="120" y="1060" width="660" height="80" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(t(W / 2, 1093, 'Active site changes shape, so fewer', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 1121, 'enzyme–substrate complexes form', { size: 20, weight: 700, anchor: 'middle' }));
  return svg(W, 1170, 'Heat and pH change the site', o.join('\n'), 'Rate peaks at an optimum');
}

// ---------- 06 Substrate concentration and Km ----------
function substrateKm() {
  const o = [];
  const F = frame(130, 140, 660, 360, 0, 32, 0, 44);
  o.push(F.axes([0, 8, 16, 24, 32], [0, 20, 40], 'Substrate concentration / mmol dm⁻³', 'Initial rate'));
  const mm = (V, K) => (s) => (V * s) / (K + s);
  o.push(`<line x1="${F.X(0)}" y1="${F.Y(40)}" x2="${F.X(32)}" y2="${F.Y(40)}" stroke="${C.olive}" stroke-width="3" stroke-dasharray="12 7"/>`);
  o.push(`<line x1="${F.X(0)}" y1="${F.Y(20)}" x2="${F.X(32)}" y2="${F.Y(20)}" stroke="${C.tealDark}" stroke-width="2" stroke-dasharray="7 6"/>`);
  o.push(`<line x1="${F.X(2.5)}" y1="${F.Y(20)}" x2="${F.X(2.5)}" y2="${F.Y(0)}" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="9 6"/>`);
  o.push(`<line x1="${F.X(9)}" y1="${F.Y(20)}" x2="${F.X(9)}" y2="${F.Y(0)}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="9 6"/>`);
  o.push(F.curve(mm(40, 9), 0, 32, C.rust), F.curve(mm(40, 2.5), 0, 32, C.tealDark));
  for (const s of [0.5, 1, 2, 4, 8, 16, 32]) o.push(`<circle cx="${F.X(s)}" cy="${F.Y(mm(40, 2.5)(s))}" r="7" fill="${C.ink}"/>`);
  o.push(t(F.X(28), F.Y(40) - 12, 'Vmax', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(halo(F.X(31.5), F.Y(20) + 26, '½Vmax', { size: 19, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(halo(F.X(10.5), F.Y(36.6), 'low Km: high affinity', { size: 19, weight: 700, fill: C.tealDark }));
  o.push(halo(F.X(19), F.Y(22.4), 'high Km: low affinity', { size: 19, weight: 700, fill: C.rust }));
  o.push(halo(F.X(2.5) + 10, F.Y(0) - 12, 'Km 2.5', { size: 19, weight: 700, fill: C.tealDark }));
  o.push(halo(F.X(9) + 10, F.Y(0) - 12, 'Km 9', { size: 19, weight: 700, fill: C.rust }));
  const y = 620;
  [['Low [S]', 1, '1 of 8 sites filled'], ['[S] = Km', 4, 'half the sites filled'], ['High [S]', 7, 'sites saturated']].forEach(([h, n, cap], i) => {
    const x = 40 + i * 280;
    o.push(panel(x, y, 260, 160, '#fff', C.ink));
    o.push(t(x + 130, y + 32, h, { size: 19, weight: 700, anchor: 'middle' }));
    for (let k = 0; k < 8; k++) {
      const bx = x + 22 + (k % 4) * 56, by = y + 50 + Math.floor(k / 4) * 52;
      o.push(`<rect x="${bx}" y="${by}" width="42" height="40" rx="8" fill="${ENZ}" stroke="${C.tealDark}" stroke-width="2"/>`);
      if (k < n) o.push(`<circle cx="${bx + 21}" cy="${by + 20}" r="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
    }
    o.push(t(x + 130, y + 190, cap, { size: 18, anchor: 'middle' }));
  });
  o.push(`<rect x="160" y="836" width="580" height="60" rx="30" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(t(W / 2, 875, 'Km = [S] at ½Vmax', { size: 23, weight: 700, fill: C.olive, anchor: 'middle' }));
  return svg(W, 930, 'Substrate concentration', o.join('\n'), 'Vmax and Km');
}

// ---------- 07 Inhibitor types ----------
function inhibitorTypes() {
  const o = [];
  const rows = [['No inhibitor', C.ink, ['Substrate fits the', 'active site: product made']], ['Competitive', C.rust, ['Inhibitor sits in the', 'active site; more substrate wins']], ['Non-competitive', BLUE, ['Binds elsewhere, reshapes', 'the site; more substrate', 'does not help']]];
  rows.forEach(([h, col, lines], i) => {
    const y = 120 + i * 270, cy = y + 150;
    o.push(panel(40, y, 820, 250));
    o.push(t(64, y + 38, h, { size: 22, weight: 700, fill: col }));
    if (i === 0) o.push(enzyme(140, cy, 58), substrate(boundX(140, 58), cy));
    if (i === 1) {
      o.push(enzyme(140, cy, 58));
      o.push(substrate(boundX(140, 58), cy, { fill: TAB, edge: C.rust, label: 'I' }));
      o.push(blocked(300, cy - 22, 44));
    }
    if (i === 2) {
      o.push(enzyme(140, cy, 58, { shape: 'bent' }));
      o.push(`<circle cx="140" cy="${cy - 64}" r="19" fill="${TAB}" stroke="${C.rust}" stroke-width="2.5"/>`, t(140, cy - 57, 'I', { size: 18, weight: 700, fill: C.rust, anchor: 'middle' }));
      o.push(blocked(290, cy - 22, 44));
    }
    o.push(tl(430, cy - (lines.length - 1) * 14, lines, { size: 20, weight: i === 0 ? 400 : 400 }, 28).replace('font-weight="400"', 'font-weight="700"'));
  });
  return svg(W, 120 + 3 * 270, 'Two kinds of reversible inhibitor', o.join('\n'), 'Where does the inhibitor bind?');
}

// ---------- 08 Inhibitor graphs ----------
function inhibitorGraphs() {
  const o = [];
  const F = frame(130, 140, 660, 360, 0, 32, 0, 44);
  o.push(F.axes([0, 8, 16, 24, 32], [0, 20, 40], 'Substrate concentration', 'Rate'));
  const mm = (V, K) => (s) => (V * s) / (K + s);
  for (const v of [40, 20]) o.push(`<line x1="${F.X(0)}" y1="${F.Y(v)}" x2="${F.X(32)}" y2="${F.Y(v)}" stroke="${C.tealDark}" stroke-width="2" stroke-dasharray="8 6"/>`);
  o.push(F.curve(mm(40, 2.5), 0, 32), F.curve(mm(40, 10), 0, 32, C.rust), F.curve(mm(20, 2.5), 0, 32, BLUE));
  o.push(t(F.X(31.5), F.Y(40) - 10, 'Vmax', { size: 19, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(halo(F.X(14), F.Y(36.5), 'none', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(halo(F.X(31.5), F.Y(32.6), 'competitive', { size: 19, weight: 700, fill: C.rust, anchor: 'end' }));
  o.push(halo(F.X(20), F.Y(12.5), 'non-competitive: lower Vmax', { size: 19, weight: 700, fill: BLUE, anchor: 'middle' }));
  o.push(t(W / 2, 600, 'Competitive: same Vmax, higher Km', { size: 20, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(W / 2, 630, 'Non-competitive: lower Vmax, same Km', { size: 20, weight: 700, fill: BLUE, anchor: 'middle' }));
  const y = 660;
  o.push(panel(40, y, 820, 300));
  o.push(t(64, y + 38, 'Rate as % of the uninhibited rate', { size: 21, weight: 700 }));
  const base = y + 250;
  const grp = [['competitive', C.rust, TAB, 170, [29, 82]], ['non-competitive', BLUE, '#bcd5e2', 560, [50, 50]]];
  for (const [name, col, fill, x, vals] of grp) {
    o.push(t(x + 110, y + 74, name, { size: 19, weight: 700, fill: col, anchor: 'middle' }));
    vals.forEach((v, i) => {
      const bx = x + 30 + i * 110, h = v * 1.6;
      o.push(`<rect x="${bx}" y="${base - h}" width="70" height="${h}" fill="${fill}" stroke="${col}" stroke-width="2.5"/>`);
      o.push(t(bx + 35, base - h - 10, `${v}%`, { size: 19, weight: 700, anchor: 'middle' }));
      o.push(t(bx + 35, base + 26, i ? 'high [S]' : 'low [S]', { size: 17, anchor: 'middle' }));
    });
  }
  return svg(W, y + 330, 'Effect on the rate curve', o.join('\n'), 'Compare Vmax and Km');
}

// ---------- 09 Immobilised enzymes ----------
function immobilised() {
  const o = [];
  // Make beads
  o.push(panel(40, 120, 820, 270));
  o.push(t(64, 158, 'Make alginate beads', { size: 22, weight: 700 }));
  o.push(`<rect x="110" y="190" width="56" height="110" rx="6" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(`<line x1="110" y1="182" x2="166" y2="182" stroke="${C.ink}" stroke-width="4"/><line x1="138" y1="170" x2="138" y2="190" stroke="${C.ink}" stroke-width="4"/>`);
  o.push(`<line x1="138" y1="300" x2="138" y2="318" stroke="${C.ink}" stroke-width="3"/>`);
  for (const [x, y] of [[126, 215], [150, 235], [128, 262], [152, 280]]) o.push(`<circle cx="${x}" cy="${y}" r="4.5" fill="${C.tealDark}"/>`);
  for (const y of [334, 362]) o.push(`<circle cx="138" cy="${y}" r="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(tl(186, 218, ['enzyme +', 'sodium alginate'], { size: 19 }, 25));
  o.push(arrow(320, 282, 392, 322, { color: C.olive, w: 3.5, marker: 'ahO' }));
  o.push(`<path d="M410 230 V368 H600 V230" fill="none" stroke="${C.ink}" stroke-width="3"/>`, `<rect x="412" y="262" width="186" height="104" fill="${C.tealLight}"/>`);
  o.push(t(505, 292, 'calcium chloride', { size: 18, anchor: 'middle' }));
  for (let i = 0; i < 6; i++) for (let j = 0; j < 2; j++) {
    const cx = 436 + i * 28 + j * 12, cy = 336 - j * 20;
    o.push(`<circle cx="${cx}" cy="${cy}" r="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/><circle cx="${cx - 3}" cy="${cy - 2}" r="2.5" fill="${C.tealDark}"/><circle cx="${cx + 4}" cy="${cy + 3}" r="2.5" fill="${C.tealDark}"/>`);
  }
  o.push(tl(620, 250, ['beads set:', 'enzyme in', 'the gel'], { size: 19 }, 25).replace('font-weight="400"', 'font-weight="700"'));
  // Column
  const y2 = 410;
  o.push(panel(40, y2, 820, 300));
  o.push(t(64, y2 + 38, 'Use them in a column', { size: 22, weight: 700 }));
  o.push(`<rect x="110" y="${y2 + 70}" width="140" height="180" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`);
  for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) o.push(`<circle cx="${128 + c * 34 + (r % 2) * 8}" cy="${y2 + 86 + r * 30}" r="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(arrow(180, y2 + 50, 180, y2 + 66, { color: C.tealDark, w: 4, marker: 'ahT' }), t(266, y2 + 78, 'substrate in', { size: 19, weight: 700, fill: C.tealDark }));
  o.push(arrow(180, y2 + 252, 180, y2 + 284, { color: C.rust, w: 4, marker: 'ahR' }), t(266, y2 + 272, 'product out', { size: 19, weight: 700, fill: C.rust }));
  o.push(t(290, y2 + 130, 'Enzyme stays in the column', { size: 19, weight: 700 }));
  o.push(tl(290, y2 + 158, ['so it can be reused', 'and the product is pure'], { size: 18 }, 25));
  o.push(t(745, y2 + 78, 'Smaller beads', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(`<circle cx="680" cy="${y2 + 150}" r="20" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`, `<circle cx="800" cy="${y2 + 150}" r="40" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(t(680, y2 + 222, '2 mm', { size: 18, anchor: 'middle' }), t(800, y2 + 222, '4 mm', { size: 18, anchor: 'middle' }));
  o.push(t(680, y2 + 252, 'SA : V 3.0', { size: 18, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(800, y2 + 252, 'SA : V 1.5', { size: 18, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  // Ways to immobilise
  const y3 = 730;
  o.push(panel(40, y3, 820, 300));
  o.push(t(64, y3 + 38, 'Ways to immobilise', { size: 22, weight: 700 }));
  const card = (x, y, head, sub, draw) => { o.push(panel(x, y, 385, 110, '#f8faf9', C.panelEdge)); o.push(draw(x, y)); o.push(t(x + 150, y + 48, head, { size: 19, weight: 700 }), t(x + 150, y + 76, sub, { size: 18 })); };
  const support = (x, y) => `<rect x="${x + 24}" y="${y + 16}" width="22" height="78" fill="#dfe3e6" stroke="${C.ink}" stroke-width="2.5"/>`;
  card(55, y3 + 60, 'Adsorption', 'sticks to surface', (x, y) => support(x, y) + [0, 1, 2, 3].map((k) => `<circle cx="${x + 58}" cy="${y + 26 + k * 20}" r="7" fill="${C.tealDark}"/>`).join(''));
  card(460, y3 + 60, 'Covalent', 'bonded to support', (x, y) => support(x, y) + [0, 1, 2].map((k) => `<line x1="${x + 46}" y1="${y + 30 + k * 25}" x2="${x + 68}" y2="${y + 30 + k * 25}" stroke="${C.ink}" stroke-width="2.5"/><circle cx="${x + 76}" cy="${y + 30 + k * 25}" r="8" fill="#fff" stroke="${C.tealDark}" stroke-width="2.5"/>`).join(''));
  card(55, y3 + 180, 'Entrapment', 'in a gel bead', (x, y) => `<circle cx="${x + 70}" cy="${y + 55}" r="40" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + [[-14, -14], [12, -8], [-4, 8], [16, 16], [-18, 18]].map(([a, b]) => `<circle cx="${x + 70 + a}" cy="${y + 55 + b}" r="5" fill="${C.tealDark}"/>`).join(''));
  card(460, y3 + 180, 'Membrane', 'enzyme kept behind', (x, y) => `<rect x="${x + 24}" y="${y + 18}" width="80" height="74" fill="none" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="6 5"/>` + [[46, 36], [80, 46], [60, 74]].map(([a, b]) => `<circle cx="${x + a}" cy="${y + b}" r="6" fill="${C.tealDark}"/>`).join('') + `<circle cx="${x + 116}" cy="${y + 40}" r="5" fill="none" stroke="${C.rust}" stroke-width="2"/><circle cx="${x + 16}" cy="${y + 78}" r="5" fill="none" stroke="${C.rust}" stroke-width="2"/>`);
  return svg(W, 1060, 'Immobilised enzymes', o.join('\n'), 'Held in place, reused again');
}

export const figures = [
  { name: '02-lock-key-induced-fit', after: '## Key definitions', svg: models(),
    alt: 'Three rows. Lock and key: a rigid notch-shaped active site that the substrate fits exactly. Induced fit: the site starts close to but not exactly complementary, and moulds round the substrate as it binds, straining bonds. Specificity: a round substrate of the wrong shape cannot bind.',
    caption: 'Lock and key has a fixed active site; in induced fit the site changes shape slightly as the substrate binds.' },
  { name: '03-activation-energy', after: '## 6.2.1(i): immobilised enzymes', svg: activation(),
    alt: 'An energy profile from substrates to lower-energy products. The uncatalysed route has a high peak (large Ea); with an enzyme the peak is lower between the same substrates and products, so the overall energy change is unchanged. Two small pictures show an active site holding two substrates close in the correct orientation (building) and straining a bond (breaking).',
    caption: 'An enzyme lowers the activation energy without changing the overall energy change of the reaction.' },
  { name: '01-enzyme-cycle', after: '## 6.2.1(i): immobilised enzymes', svg: cycle(),
    alt: 'Four panels in a cycle. Free enzyme E and substrate S, whose shape is complementary to the notch-shaped active site; the enzyme-substrate complex ES with the substrate in the site; the enzyme-product complex EP with the two product parts separating; then E + P with the products released and the active site free again. The enzyme is unchanged at the end.',
    caption: 'An enzyme binds its substrate, converts it and releases the products, ready to act again.' },
  { name: '05-temperature-ph', after: '## 6.2.1(i) Immobilised enzymes', svg: tempPH(),
    alt: 'Two graphs. Temperature: rate rises to an optimum a little below 45 degrees Celsius then falls steeply as the active site is distorted and the enzyme denatured. pH: a bell-shaped curve with an optimum near 7; at low and high pH charges on R groups change. A buffer holds pH constant.',
    caption: 'Away from the optimum, the active site changes shape so fewer enzyme-substrate complexes form.' },
  { name: '07-inhibitor-types', after: '## 6.2.1(i) Immobilised enzymes', svg: inhibitorTypes(),
    alt: 'Three rows. No inhibitor: substrate fits the active site. Competitive: an inhibitor with a similar shape sits in the active site, blocking the substrate; more substrate out-competes it. Non-competitive: the inhibitor binds elsewhere and reshapes the active site, so extra substrate does not help.',
    caption: 'Competitive inhibitors compete for the active site; non-competitive inhibitors bind elsewhere and change its shape.' },
  { name: '04-initial-rate', after: '## Reading growth data', svg: initialRate(),
    alt: 'A graph of oxygen volume against time with points at 0 to 120 seconds from the lesson. The tangent at t = 0 passes through (0,0) and (20,10), so the initial rate is 0.50 cm3 per second; a line from 60 to 120 s gives 0.10 cm3 per second. A flask and gas syringe show how the oxygen is collected.',
    caption: 'The initial rate is the gradient of the tangent at t = 0 and is the best value for comparing experiments.' },
  { name: '06-substrate-km', after: '## 6.2.1(h)(i): growth curve and formula', svg: substrateKm(),
    alt: 'A graph of initial rate against substrate concentration with the lesson data (0.5 to 32 mmol per dm3) on a curve to Vmax 40. Half Vmax (20) gives Km 2.5; a second enzyme with Km 9 has lower affinity. Three panels of eight active sites show 1, 4 and 7 filled at low, Km and high substrate.',
    caption: 'Km is the substrate concentration at half Vmax; a low Km means high affinity.' },
  { name: '09-immobilised-enzymes', after: '## 6.2.1(i): immobilised enzymes', svg: immobilised(),
    alt: 'Making beads: enzyme and sodium alginate drip from a syringe into calcium chloride and set as beads. Using them: beads packed in a column with substrate in and product out, so the enzyme is reused and the product is pure; smaller beads have a larger surface area to volume ratio (3.0 against 1.5 per mm). Four immobilisation methods: adsorption, covalent bonding, entrapment and membrane separation.',
    caption: 'Immobilised enzymes stay in place, can be reused and do not contaminate the product.' },
  { name: '08-inhibitor-graphs', after: '### Calculating numbers: N = N0 × 2^n', svg: inhibitorGraphs(),
    alt: 'Rate against substrate concentration for no inhibitor (Vmax 40, Km 2.5), a competitive inhibitor (same Vmax, Km about 10) and a non-competitive inhibitor (Vmax 20, same Km). Bars show competitive inhibition cutting the rate to 29% of normal at low substrate but only to 82% at high substrate, while non-competitive inhibition gives 50% at both.',
    caption: 'Competitive inhibition keeps Vmax and raises Km; non-competitive inhibition lowers Vmax and leaves Km unchanged.' },
];
