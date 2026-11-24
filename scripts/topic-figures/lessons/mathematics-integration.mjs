// Board-neutral redraws of the A-level integration figures. Same curves, numbers and working as the
// earlier set, with the board/code pills ("All boards", "Cambridge 9709 only", "AQA and OCR",
// "Cambridge 9709 P3 and all A2" ...) removed.
import { C, svg, panel, t, arrow, path } from '../style.mjs';

export const slug = 'mathematics-integration';
const W = 900;
const GREEN = '#9fc0bb', TAN = '#e3d3a4', PEACH = '#ecc0a3';

// Plot frame: data box [x0,x1]x[y0,y1] drawn into pixel box (px,py,pw,ph). Curves are clipped to the box.
let clipN = 0;
const halo = (x, y, s, o) => t(x, y, s, o).replace('<text ', '<text paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round" ');
const sup = (s) => `<tspan dy="-9" font-size="15">${s}</tspan><tspan dy="9"> </tspan>`;
function frame(px, py, pw, ph, x0, x1, y0, y1) {
  const cid = `clip${++clipN}`;
  const clipDef = `<clipPath id="${cid}"><rect x="${px}" y="${py}" width="${pw}" height="${ph}"/></clipPath>`;
  const X = (x) => px + ((x - x0) / (x1 - x0)) * pw;
  const Y = (y) => py + ph - ((y - y0) / (y1 - y0)) * ph;
  const fn = (f, a, b, n = 160) => {
    const pts = [];
    for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; pts.push(`${X(x).toFixed(1)} ${Y(f(x)).toFixed(1)}`); }
    return pts;
  };
  let late = '';
  const curve = (f, a, b, opt = {}) => { const pre = late; late = ''; return pre + `<g clip-path="url(#${cid})">` + path('M' + fn(f, a, b).join(' L'), { stroke: C.ink, w: 4, ...opt }) + '</g>'; };
  // region between f (top) and g (bottom) from a to b
  const region = (f, g, a, b, fill, extra = '') => {
    const top = fn(f, a, b), bot = fn(g, a, b).reverse();
    return `<path d="M${top.join(' L')} L${bot.join(' L')} Z" fill="${fill}" stroke="none" ${extra}/>`;
  };
  // axes(): draws the white box now; the axis lines and ticks are emitted just before the first curve,
  // so they sit above shaded regions and below the curves.
  const axes = ({ xt = [], yt = [], xl = 'x', yl = 'y', ox = 0, oy = 0, box = true, above = false } = {}) => {
    const s = [];
    const first = clipDef + (box ? `<rect x="${px}" y="${py}" width="${pw}" height="${ph}" fill="#fff" stroke="${C.panelEdge}" stroke-width="2"/>` : '');
    s.push(`<line x1="${px}" y1="${Y(oy)}" x2="${px + pw}" y2="${Y(oy)}" stroke="${C.ink}" stroke-width="2.5"/>`);
    s.push(`<line x1="${X(ox)}" y1="${py}" x2="${X(ox)}" y2="${py + ph}" stroke="${C.ink}" stroke-width="2.5"/>`);
    for (const [v, lab] of xt) {
      s.push(`<line x1="${X(v)}" y1="${Y(oy) - 7}" x2="${X(v)}" y2="${Y(oy) + 7}" stroke="${C.ink}" stroke-width="2"/>`);
      s.push(halo(X(v), Y(oy) + (above ? -14 : 30), lab, { size: 17, anchor: 'middle' }));
    }
    for (const [v, lab] of yt) {
      s.push(`<line x1="${X(ox) - 7}" y1="${Y(v)}" x2="${X(ox) + 7}" y2="${Y(v)}" stroke="${C.ink}" stroke-width="2"/>`);
      s.push(halo(X(ox) - 12, Y(v) + 6, lab, { size: 17, anchor: 'end' }));
    }
    s.push(t(px + pw - 12, Y(oy) - 12, xl, { size: 19, weight: 700, anchor: 'end', italic: true }));
    s.push(t(X(ox) + 12, py + 24, yl, { size: 19, weight: 700, italic: true }));
    late = s.join('');
    return first;
  };
  return { X, Y, curve, region, axes };
}
const pill = (cx, cy, w, s, fill, ink = '#fff') =>
  `<rect x="${cx - w / 2}" y="${cy - 22}" width="${w}" height="44" rx="22" fill="${fill}"/>` + t(cx, cy + 7, s, { size: 19, weight: 700, fill: ink, anchor: 'middle' });

// ---------- 01 Constant of integration ----------
function constant() {
  const o = [];
  const F = frame(80, 110, 780, 430, 0, 4.4, 0, 19);
  o.push(F.axes({ xt: [[1, '1'], [2, '2'], [3, '3'], [4, '4']], yt: [[4, '4'], [8, '8'], [12, '12'], [16, '16']] }));
  const fam = [[4, C.tealDark, 3], [1, C.ink, 5], [-2, C.tealDark, 3]];
  for (const [c, col, w] of fam) {
    const f = (x) => 3 * Math.sqrt(4 * x + 1) + c;
    o.push(F.curve(f, 0, 4.4, { stroke: col, w }));
    const y2 = f(2);
    o.push(`<line x1="${F.X(1.45)}" y1="${F.Y(y2 - 1.1)}" x2="${F.X(2.55)}" y2="${F.Y(y2 + 1.1)}" stroke="${C.mustard}" stroke-width="5" stroke-linecap="round"/>`);
    o.push(t(F.X(4.4) - 10, F.Y(f(4.4)) - 12, `c = ${c < 0 ? '−' + -c : c}`, { size: 18, weight: 700, fill: col, anchor: 'end' }));
  }
  o.push(`<circle cx="${F.X(2)}" cy="${F.Y(10)}" r="9" fill="${C.ink}"/>`);
  o.push(halo(F.X(2) + 18, F.Y(10) + 30, '(2, 10)', { size: 18, weight: 700 }));
  o.push(t(F.X(0.5), 160, 'same slope 2 at x = 2', { size: 19, weight: 700, fill: C.olive }));
  o.push(t(W / 2, 620, 'dy/dx = 6/√(4x + 1) → y = 3√(4x + 1) + c', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 660, 'through (2, 10): 9 + c = 10, so c = 1', { size: 21, fill: C.tealDark, anchor: 'middle' }));
  return svg(W, 700, 'Integrating leaves a constant c', o.join('\n'));
}

// ---------- 02 Area below the axis ----------
function belowAxis() {
  const o = [];
  const f = (x) => x * x - 3 * x;
  const F = frame(70, 110, 760, 420, -0.6, 5.2, -3, 4.9);
  o.push(F.axes({ xt: [[1, '1'], [2, '2'], [3, '3'], [4, '4']], yt: [[-2, '−2'], [2, '2'], [4, '4']], above: true }));
  o.push(F.region(() => 0, f, 0, 3, PEACH));
  o.push(F.region(f, () => 0, 3, 4, GREEN));
  o.push(F.curve(f, -0.6, 4.25));
  for (const x of [0, 3]) o.push(`<circle cx="${F.X(x)}" cy="${F.Y(0)}" r="8" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(halo(F.X(1.5), F.Y(-1.0), 'below', { size: 19, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(halo(F.X(1.5), F.Y(-1.0) + 26, '∫ = −9/2', { size: 19, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(F.X(4.15), F.Y(2.9), 'above', { size: 19, weight: 700, fill: C.tealDark }));
  o.push(t(F.X(4.15), F.Y(2.9) + 26, '+11/6', { size: 19, weight: 700, fill: C.tealDark }));
  o.push(t(W / 2, 580, 'y = x² − 3x, from x = 0 to x = 4', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(pill(W / 2, 630, 420, 'Total area = 9/2 + 11/6 = 19/3', C.ink));
  o.push(pill(W / 2, 686, 420, '∫₀⁴ y dx = −8/3 is NOT the area', C.rust));
  return svg(W, 730, 'Area below the axis counts negative', o.join('\n'));
}

// ---------- 03 Area between two curves ----------
function between() {
  const o = [];
  const p = (x) => 6 * x - x * x, l = (x) => 2 * x;
  const F = frame(80, 110, 760, 450, -0.2, 6.6, -0.8, 10.5);
  o.push(F.axes({ xt: [[1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5'], [6, '6']], yt: [[2, '2'], [4, '4'], [6, '6'], [8, '8'], [10, '10']] }));
  o.push(F.region(p, l, 0, 4, GREEN));
  for (let x = 0.5; x < 4; x += 0.5) if (x !== 2) o.push(`<line x1="${F.X(x)}" y1="${F.Y(p(x))}" x2="${F.X(x)}" y2="${F.Y(l(x))}" stroke="${C.tealDark}" stroke-width="1.8"/>`);
  o.push(`<line x1="${F.X(2)}" y1="${F.Y(p(2))}" x2="${F.X(2)}" y2="${F.Y(l(2))}" stroke="${C.olive}" stroke-width="6"/>`);
  o.push(`<line x1="${F.X(2)}" y1="${F.Y(p(2)) - 4}" x2="${F.X(2)}" y2="${F.Y(9.0)}" stroke="${C.olive}" stroke-width="2" stroke-dasharray="6 5"/>`);
  o.push(F.curve(l, -0.15, 5.4, { stroke: C.rust }));
  o.push(F.curve(p, -0.1, 6.1));
  o.push(`<circle cx="${F.X(0)}" cy="${F.Y(0)}" r="8" fill="${C.ink}"/>`, `<circle cx="${F.X(4)}" cy="${F.Y(8)}" r="8" fill="${C.ink}"/>`);
  o.push(halo(F.X(4) + 14, F.Y(8) - 2, '(4, 8)', { size: 18, weight: 700 }));
  o.push(t(F.X(1.95), F.Y(9.5), 'strip height = 4x − x²', { size: 18, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(t(F.X(3.3), F.Y(10.1), 'y = 6x − x²', { size: 18, weight: 700 }));
  o.push(t(F.X(4.8), F.Y(8.6), 'y = 2x', { size: 18, weight: 700, fill: C.rust }));
  o.push(t(W / 2, 612, 'Area = ∫₀⁴ (4x − x²) dx = [2x² − x³/3]₀⁴', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(pill(W / 2, 662, 280, '= 32 − 64/3 = 32/3', C.tealDark));
  return svg(W, 708, 'Area between two curves', o.join('\n'));
}

// ---------- 04 Limit of a sum ----------
function limitSum() {
  const o = [];
  const f = (x) => 2 * x + 1;
  const F = frame(80, 110, 760, 430, -0.3, 3.6, 0, 7.8);
  o.push(F.axes({ xt: [[1, '1'], [2, '2'], [3, '3']], yt: [[2, '2'], [4, '4'], [6, '6']] }));
  for (let i = 0; i < 6; i++) {
    const a = i * 0.5, b = a + 0.5;
    o.push(`<rect x="${F.X(a)}" y="${F.Y(f(b))}" width="${F.X(b) - F.X(a)}" height="${F.Y(f(a)) - F.Y(f(b))}" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`);
    o.push(`<rect x="${F.X(a)}" y="${F.Y(f(a))}" width="${F.X(b) - F.X(a)}" height="${F.Y(0) - F.Y(f(a))}" fill="${GREEN}" stroke="${C.tealDark}" stroke-width="2"/>`);
  }
  o.push(F.curve(f, -0.25, 3.45));
  o.push(t(F.X(3.08), F.Y(6.2), 'y = 2x + 1', { size: 18, weight: 700 }));
  o.push(t(F.X(0) + 40, 150, 'teal: lower rectangles', { size: 18, weight: 700, fill: C.tealDark }));
  o.push(t(F.X(0) + 40, 178, 'gold: the extra in upper', { size: 18, weight: 700, fill: C.olive }));
  o.push(t(W / 2, 616, '6 strips of width 0.5: 10.5 ≤ area ≤ 13.5', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(pill(W / 2, 666, 360, '30 strips: 11.7 to 12.3', C.tealDark));
  o.push(pill(W / 2, 720, 360, '300 strips: 11.97 to 12.03', C.tealDark));
  o.push(pill(W / 2, 774, 360, 'limit = ∫₀³ (2x + 1) dx = 12', C.ink));
  return svg(W, 820, 'Area as the limit of a sum', o.join('\n'));
}

// ---------- 05 Improper integral ----------
function improper() {
  const o = [];
  const f = (x) => 8 / x ** 3;
  const F = frame(80, 110, 760, 400, 1.4, 10.6, -0.25, 2.6);
  o.push(F.axes({ xt: [[2, '2'], [4, '4'], [6, '6'], [8, '8'], [10, '10']], yt: [[1, '1'], [2, '2']], ox: 1.6 }));
  o.push(F.region(f, () => 0, 2, 10.6, GREEN));
  o.push(`<line x1="${F.X(2)}" y1="${F.Y(1)}" x2="${F.X(2)}" y2="${F.Y(0)}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>`);
  o.push(F.curve(f, 1.62, 10.6));
  o.push(`<circle cx="${F.X(2)}" cy="${F.Y(1)}" r="8" fill="${C.ink}"/>`);
  o.push(t(F.X(2) + 16, F.Y(1) - 12, '(2, 1)', { size: 18, weight: 700 }));
  o.push(t(F.X(4.2), F.Y(2.15), 'y = 8/x³', { size: 19, weight: 700 }));
  o.push(t(F.X(7), F.Y(1), 'area never exceeds 1', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(arrow(F.X(9.4), F.Y(0.45), F.X(10.4), F.Y(0.45), { color: C.tealDark, marker: 'ahT' }));
  o.push(t(F.X(9.9), F.Y(0.45) - 14, 'to ∞', { size: 18, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(W / 2, 566, '∫₂ᴿ 8/x³ dx = [−4/x²]₂ᴿ = 1 − 4/R²', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(pill(190, 618, 230, 'R = 4: 0.75', C.tealDark));
  o.push(pill(450, 618, 230, 'R = 10: 0.96', C.tealDark));
  o.push(pill(710, 618, 250, 'R = 100: 0.9996', C.tealDark));
  o.push(pill(W / 2, 674, 260, 'R → ∞: area = 1', C.ink));
  return svg(W, 720, 'An infinite strip with finite area', o.join('\n'));
}

// ---------- 06 Volume of revolution ----------
function volume() {
  const o = [];
  const f = (x) => 3 / (x + 1), g = (x) => -f(x);
  const F = frame(70, 110, 760, 480, -0.4, 2.8, -3.6, 3.6);
  o.push(F.axes({ xt: [[1, '1'], [2, '2']], yt: [[-3, '−3'], [-2, '−2'], [-1, '−1'], [1, '1'], [2, '2'], [3, '3']] }));
  o.push(F.region(f, g, 0, 2, C.tealLight));
  for (const s of [1, -1]) o.push(`<line x1="${F.X(2)}" y1="${F.Y(s * f(2))}" x2="${F.X(2)}" y2="${F.Y(0)}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>`);
  o.push(F.curve(f, -0.24, 2.8), F.curve(g, -0.24, 2.8, { w: 3 }));
  // disc at x = 0.5 to 0.65
  const a = 0.5, b = 0.65, r = f(a);
  o.push(`<rect x="${F.X(a)}" y="${F.Y(r)}" width="${F.X(b) - F.X(a)}" height="${F.Y(-r) - F.Y(r)}" fill="${C.mustard}" fill-opacity="0.75" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(`<ellipse cx="${F.X(b)}" cy="${F.Y(0)}" rx="9" ry="${F.Y(-r) - F.Y(0)}" fill="none" stroke="${C.olive}" stroke-width="3"/>`);
  o.push(`<line x1="${F.X(b)}" y1="${F.Y(0)}" x2="${F.X(b)}" y2="${F.Y(r)}" stroke="${C.rust}" stroke-width="5"/>`);
  o.push(halo(F.X(b) + 18, F.Y(r / 2) + 6, 'r = y', { size: 21, weight: 700, fill: C.rust }));
  o.push(t(F.X(0.4), F.Y(2.45), 'thin disc, width δx', { size: 19, weight: 700, fill: C.olive }));
  o.push(t(F.X(1.6), F.Y(2.45), 'y = 3/(x + 1)', { size: 19, weight: 700 }));
  o.push(t(F.X(1.6), F.Y(-2.45), 'its reflection', { size: 19, weight: 700 }));
  o.push(t(W / 2, 640, 'Disc volume = π y² δx → V = π ∫₀² y² dx', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 680, '= 9π ∫₀² (x + 1)⁻² dx = 9π(1 − 1/3) = 6π', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svg(W, 720, 'Spinning a region into a solid', o.join('\n'));
}

// ---------- 07 Substitution changes the limits ----------
function substitution() {
  const o = [];
  const f = (x) => x * Math.sqrt(2 * x - 1), g = (u) => 0.25 * (u + 1) * Math.sqrt(u);
  const A = frame(80, 100, 760, 300, 0, 5.6, 0, 16.2);
  o.push(A.axes({ xt: [[1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5']], yt: [[5, '5'], [10, '10'], [15, '15']] }));
  o.push(A.region(f, () => 0, 1, 5, GREEN));
  o.push(`<line x1="${A.X(5)}" y1="${A.Y(f(5))}" x2="${A.X(5)}" y2="${A.Y(0)}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>`);
  o.push(A.curve(f, 0.5, 5.25));
  o.push(t(A.X(0.5), 140, 'y = x√(2x − 1)', { size: 19, weight: 700 }));
  o.push(halo(A.X(3.4), A.Y(2.8), 'area 428/15', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(W / 2, 462, 'u = 2x − 1, dx = ½ du, x: 1 → 5 becomes u: 1 → 9', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(arrow(W / 2, 474, W / 2, 516, { color: C.olive, w: 5, marker: 'ahO' }));
  const B = frame(80, 530, 760, 300, 0, 10.2, 0, 8.2);
  o.push(B.axes({ xt: [[1, '1'], [3, '3'], [5, '5'], [7, '7'], [9, '9']], yt: [[2, '2'], [4, '4'], [6, '6']], xl: 'u' }));
  o.push(B.region(g, () => 0, 1, 9, GREEN));
  o.push(`<line x1="${B.X(9)}" y1="${B.Y(g(9))}" x2="${B.X(9)}" y2="${B.Y(0)}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>`);
  o.push(B.curve(g, 0, 9.5));
  o.push(t(B.X(0.8), 570, 'y = ¼(u + 1)√u', { size: 19, weight: 700 }));
  o.push(halo(B.X(5.6), B.Y(1.2), 'same area 428/15', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(W / 2, 900, `¼ ∫₁⁹ (u${sup('3/2')}+ u${sup('1/2')}) du = 428/15`, { size: 22, weight: 700, anchor: 'middle' }));
  return svg(W, 940, 'Substitution changes the limits', o.join('\n'));
}

// ---------- 08 Parts as an area ----------
function partsArea() {
  const o = [];
  const E = Math.E;
  const F = frame(90, 110, 740, 470, 0, 3.4, 0, 1.33);
  o.push(F.axes({ xt: [[1, '1'], [E, 'e']], yt: [[1, '1']] }));
  // left region: between x = 0 and the curve, 0 <= y <= 1  (x = e^y)
  const left = [`${F.X(0)} ${F.Y(0)}`, `${F.X(1)} ${F.Y(0)}`];
  for (let i = 0; i <= 80; i++) { const y = i / 80; left.push(`${F.X(Math.exp(y)).toFixed(1)} ${F.Y(y).toFixed(1)}`); }
  left.push(`${F.X(0)} ${F.Y(1)}`);
  o.push(`<path d="M${left.join(' L')} Z" fill="${TAN}"/>`);
  o.push(F.region(Math.log, () => 0, 1, E, GREEN));
  o.push(`<line x1="${F.X(0)}" y1="${F.Y(1)}" x2="${F.X(E)}" y2="${F.Y(1)}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="9 6"/>`);
  o.push(`<line x1="${F.X(E)}" y1="${F.Y(1)}" x2="${F.X(E)}" y2="${F.Y(0)}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="9 6"/>`);
  o.push(F.curve(Math.log, 1, 3.4));
  o.push(`<circle cx="${F.X(1)}" cy="${F.Y(0)}" r="8" fill="${C.ink}"/>`, `<circle cx="${F.X(E)}" cy="${F.Y(1)}" r="8" fill="${C.ink}"/>`);
  o.push(t(F.X(2.1), F.Y(1.08), 'y = ln x', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(halo(F.X(0.65), F.Y(0.62), '∫₀¹ eʸ dy', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(halo(F.X(0.65), F.Y(0.62) + 30, '= e − 1', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(halo(F.X(2.05), F.Y(0.3), '∫₁ᵉ ln x dx', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(halo(F.X(2.05), F.Y(0.3) + 30, '= 1', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(W / 2, 664, 'whole rectangle: e × 1 = [x ln x]₁ᵉ', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 704, '∫ y dx + ∫ x dy = xy → ∫ ln x dx = x ln x − x', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(pill(W / 2, 756, 240, '1 + (e − 1) = e', C.ink));
  return svg(W, 800, 'Integration by parts as an area', o.join('\n'));
}

// ---------- 09 Partial fractions area ----------
function partialArea() {
  const o = [];
  const f = (x) => (5 * x + 1) / ((x - 1) * (x + 2)), b = (x) => 3 / (x + 2);
  const F = frame(80, 110, 760, 420, 1.1, 5.4, 0, 6.6);
  o.push(F.axes({ xt: [[2, '2'], [3, '3'], [4, '4'], [5, '5']], yt: [[2, '2'], [4, '4'], [6, '6']], ox: 1.1, box: true }));
  o.push(F.region(f, b, 2, 4, GREEN));
  o.push(F.region(b, () => 0, 2, 4, PEACH));
  for (const x of [2, 4]) o.push(`<line x1="${F.X(x)}" y1="${F.Y(f(x))}" x2="${F.X(x)}" y2="${F.Y(0)}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>`);
  o.push(F.curve(f, 1.42, 5.4));
  o.push(t(F.X(3.2), F.Y(4.2), 'y = (5x + 1)/((x − 1)(x + 2))', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(halo(F.X(2.6), F.Y(1.4), 'top band', { size: 18, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(halo(F.X(3), F.Y(0.22), 'bottom band', { size: 18, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(W / 2, 610, '(5x + 1)/((x − 1)(x + 2)) = 2/(x − 1) + 3/(x + 2)', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(pill(W / 2, 660, 440, 'top: ∫ 2/(x − 1) = 2 ln 3 ≈ 2.197', C.tealDark));
  o.push(pill(W / 2, 714, 440, 'bottom: ∫ 3/(x + 2) = 3 ln 1.5 ≈ 1.216', C.rust));
  o.push(t(W / 2, 768, 'Area from x = 2 to 4: 2 ln 3 + 3 ln (3/2) ≈ 3.413', { size: 22, weight: 700, anchor: 'middle' }));
  return svg(W, 804, 'Partial fractions, then integrate', o.join('\n'));
}

// Owner, 24 Nov 2026: keep the "A2 content" pill (only the board part of the old pill is removed).
const withA2 = (svgText) => svgText.replace('</svg>', pill(790, 50, 160, 'A2 content', C.olive) + '\n</svg>');

export const figures = [
  { name: '07-substitution-limits', after: '## H5: Substitution and parts', svg: substitution(),
    alt: 'The area under y = x√(2x − 1) from x = 1 to 5 is 428/15. After u = 2x − 1 the integrand is ¼(u + 1)√u with limits 1 and 9, and the area is again 428/15. Converting the limits keeps the value unchanged.',
    caption: 'With a substitution, convert the limits and the definite integral keeps its value.' },
  { name: '09-partial-fractions-area', after: '## H6: Partial fractions', svg: partialArea(),
    alt: 'The curve y = (5x + 1)/((x − 1)(x + 2)) equals 2/(x − 1) plus 3/(x + 2). The area from 2 to 4 splits into a bottom band 3 ln 1.5 (about 1.216) and a top band 2 ln 3 (about 2.197), total about 3.413.',
    caption: 'Splitting into partial fractions splits the area into two simple logarithmic bands.' },
  { name: '08-parts-as-area-a2', after: '## H5: Substitution and parts', svg: withA2(partsArea()),
    alt: 'The rectangle of width e and height 1 is split by y = ln x. The part under the curve has area 1 and the part to its left has area e − 1, together e. This shows ∫y dx + ∫x dy = xy, the idea behind parts and the result ∫ln x dx = x ln x − x.',
    caption: 'Integration by parts is the statement that two complementary areas fill a rectangle.' },
  { name: '09-partial-fractions-area-a2', after: '## H6: Partial fractions', svg: withA2(partialArea()),
    alt: 'The curve y = (5x + 1)/((x − 1)(x + 2)) equals 2/(x − 1) plus 3/(x + 2). The area from 2 to 4 splits into a bottom band 3 ln 1.5 (about 1.216) and a top band 2 ln 3 (about 2.197), total about 3.413.',
    caption: 'Splitting into partial fractions splits the area into two simple logarithmic bands.' },
  { name: '08-parts-as-area', after: '## H5: Substitution and parts', svg: partsArea(),
    alt: 'The rectangle of width e and height 1 is split by y = ln x. The part under the curve has area 1 and the part to its left has area e − 1, together e. This shows ∫y dx + ∫x dy = xy, the idea behind parts and the result ∫ln x dx = x ln x − x.',
    caption: 'Integration by parts is the statement that two complementary areas fill a rectangle.' },
  { name: '04-limit-of-a-sum', after: '## H4: Limit of a sum', svg: limitSum(),
    alt: 'Six rectangles of width 0.5 under y = 2x + 1 give lower and upper totals 10.5 and 13.5. With 30 and 300 strips the bounds tighten to 11.7 to 12.3 and 11.97 to 12.03. The limit is the integral, 12.',
    caption: 'As strips get thinner, the rectangle sums close in on the integral.' },
  { name: '03-area-between-curves', after: '## H3: Definite integrals and area', svg: between(),
    alt: 'The parabola y = 6x − x² and line y = 2x meet at (0, 0) and (4, 8). The region between is cut into vertical strips of height top minus bottom, 4x − x². The integral of that from 0 to 4 is 32/3.',
    caption: 'The area between two curves is the integral of the top curve minus the bottom curve.' },
  { name: '01-constant-of-integration', after: '## Where marks are usually lost', svg: constant(),
    alt: 'Three curves y = 3√(4x + 1) + c are vertical shifts of each other with identical gold tangents at x = 2. Only c = 1 passes through (2, 10), so a point on the curve fixes the constant. This is the lesson\'s worked example 5.',
    caption: 'Integrating gives a family of curves; a known point picks out one of them.' },
  { name: '02-area-below-axis', after: '## H3: Definite integrals and area', svg: belowAxis(),
    alt: 'The curve y = x² − 3x lies below the x-axis from 0 to 3 (integral −9/2) and above it from 3 to 4 (integral 11/6). The area is found by adding the sizes, 19/3, whereas the single integral from 0 to 4 is −8/3.',
    caption: 'Regions below the axis give negative integrals, so find the area in separate pieces.' },
  { name: '05-improper-integral', after: '## H3: Definite integrals and area', svg: improper(),
    alt: 'The area under y = 8/x³ from x = 2 to x = R is 1 − 4/R². It equals 0.75, 0.96 and 0.9996 for R = 4, 10 and 100, and tends to 1 as R grows.',
    caption: 'An infinitely long region can still have a finite area.' },
  { name: '06-volume-of-revolution', after: '## Volumes of revolution: method', svg: volume(),
    alt: 'The region under y = 3/(x + 1) from x = 0 to 2 is shown with its mirror image. A thin disc of radius y and width δx has volume πy²δx, and summing gives V = π∫y² dx = 6π.',
    caption: 'Rotating a region makes thin discs of radius y whose volumes add to π∫y² dx.' },
];
