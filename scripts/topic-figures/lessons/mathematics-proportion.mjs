// Board-neutral redraws of the direct and inverse proportion figures. Same graphs, numbers and working
// as the earlier set, with the "Extended" tier pills removed.
import { C, svg, t, arrow, path } from '../style.mjs';

export const slug = 'mathematics-proportion';
const W = 900;
const SLATE = '#6f82a8';
const halo = (x, y, s, o) => t(x, y, s, o).replace('<text ', '<text paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round" ');
const pill = (cx, cy, w, s, fill) =>
  `<rect x="${cx - w / 2}" y="${cy - 21}" width="${w}" height="42" rx="21" fill="${fill}"/>` + t(cx, cy + 7, s, { size: 18, weight: 700, fill: '#fff', anchor: 'middle' });

let clipN = 0;
function frame(px, py, pw, ph, x0, x1, y0, y1) {
  const cid = `pclip${++clipN}`;
  const X = (x) => px + ((x - x0) / (x1 - x0)) * pw;
  const Y = (y) => py + ph - ((y - y0) / (y1 - y0)) * ph;
  const pts = (f, a, b, n = 200) => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return `${X(x).toFixed(1)} ${Y(f(x)).toFixed(1)}`; });
  const curve = (f, a, b, col = C.ink, w = 4) => `<g clip-path="url(#${cid})">` + path('M' + pts(f, a, b).join(' L'), { stroke: col, w }) + '</g>';
  const axes = ({ xt, yt, xl, yl }) => {
    const s = [`<clipPath id="${cid}"><rect x="${px}" y="${py - 2}" width="${pw + 2}" height="${ph + 4}"/></clipPath>`];
    s.push(`<rect x="${px}" y="${py}" width="${pw}" height="${ph}" fill="#fff"/>`);
    for (const [v] of xt) s.push(`<line x1="${X(v)}" y1="${py}" x2="${X(v)}" y2="${py + ph}" stroke="#dde6e4" stroke-width="1.5"/>`);
    for (const [v] of yt) s.push(`<line x1="${px}" y1="${Y(v)}" x2="${px + pw}" y2="${Y(v)}" stroke="#dde6e4" stroke-width="1.5"/>`);
    s.push(arrow(px, py + ph, px + pw + 36, py + ph, { w: 3 }), arrow(px, py + ph, px, py - 30, { w: 3 }));
    for (const [v, l] of xt) s.push(t(X(v), py + ph + 28, l, { size: 17, anchor: 'middle' }));
    for (const [v, l] of yt) s.push(t(px - 12, Y(v) + 6, l, { size: 17, anchor: 'end' }));
    s.push(t(px + pw + 44, py + ph + 30, xl, { size: 21, weight: 700, italic: true }));
    s.push(t(px + 16, py - 22, yl, { size: 21, weight: 700, italic: true }));
    return s.join('');
  };
  return { X, Y, curve, axes };
}
const openDot = (F, x, y) => `<circle cx="${F.X(x)}" cy="${F.Y(y)}" r="10" fill="#fff" stroke="${C.ink}" stroke-width="3.5"/>`;
const dotAt = (F, x, y, c) => `<circle cx="${F.X(x)}" cy="${F.Y(y)}" r="9" fill="${c}"/>`;

// ---------- 01 Direct shapes ----------
function direct() {
  const o = [];
  const F = frame(110, 150, 620, 640, 0, 4, 0, 4);
  o.push(F.axes({ xt: [[0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4']], yt: [[0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4']], xl: 'x', yl: 'y' }));
  const cs = [[(x) => Math.cbrt(x), SLATE], [(x) => Math.sqrt(x), C.tealDark], [(x) => x, C.ink], [(x) => x * x, C.olive], [(x) => x ** 3, C.rust]];
  for (const [f, c] of cs) o.push(F.curve(f, 0, 4, c));
  o.push(openDot(F, 1, 1), halo(F.X(1) + 14, F.Y(1) + 34, '(1, 1)', { size: 19, weight: 700 }));
  o.push(t(F.X(4.04), F.Y(Math.sqrt(4)) + 7, 'y = √x', { size: 19, weight: 700, fill: C.tealDark }));
  o.push(t(F.X(4.04), F.Y(Math.cbrt(4)) + 7, 'y = ∛x', { size: 19, weight: 700, fill: SLATE }));
  o.push(t(F.X(4), F.Y(4) - 12, 'y = x', { size: 19, weight: 700, anchor: 'end' }));
  o.push(t(F.X(Math.sqrt(4)), F.Y(4) - 12, 'y = x²', { size: 19, weight: 700, fill: C.olive, anchor: 'start' }));
  o.push(t(F.X(Math.cbrt(4)) - 6, F.Y(4) - 12, 'y = x³', { size: 19, weight: 700, fill: C.rust, anchor: 'end' }));
  o.push(pill(250, 880, 260, 'All start at O', C.tealDark), pill(590, 880, 320, 'All pass through (1, 1)', C.tealDark));
  return svg(W, 930, 'Direct proportion graphs', o.join('\n'), 'y = k × (a power of x), shown with k = 1');
}

// ---------- 02 Inverse shapes ----------
function inverse() {
  const o = [];
  const F = frame(110, 150, 620, 600, 0, 4, 0, 2);
  o.push(F.axes({ xt: [[0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4']], yt: [[0, '0'], [1, '1'], [2, '2']], xl: 'x', yl: 'y' }));
  const cs = [[(x) => 1 / Math.cbrt(x), SLATE, 'y = 1/∛x'], [(x) => 1 / Math.sqrt(x), C.tealDark, 'y = 1/√x'], [(x) => 1 / x, C.ink, 'y = 1/x'], [(x) => 1 / x ** 2, C.olive, 'y = 1/x²'], [(x) => 1 / x ** 3, C.rust, 'y = 1/x³']];
  const labY = [535, 584, 636, 680, 724];
  cs.forEach(([f, c, l], i) => {
    o.push(F.curve(f, 0.02, 4, c));
    const ye = F.Y(f(4));
    o.push(`<line x1="${F.X(4)}" y1="${ye}" x2="${F.X(4) + 22}" y2="${labY[i] - 6}" stroke="${c}" stroke-width="2.5"/>`);
    o.push(t(F.X(4) + 28, labY[i], l, { size: 19, weight: 700, fill: c }));
  });
  o.push(openDot(F, 1, 1), halo(F.X(1) + 16, F.Y(1) - 16, '(1, 1)', { size: 19, weight: 700 }));
  o.push(pill(260, 840, 280, 'y never reaches 0', C.tealDark), pill(580, 840, 260, 'x up, y down', C.tealDark));
  return svg(W, 890, 'Inverse proportion graphs', o.join('\n'), 'y = k ÷ (a power of x), shown with k = 1');
}

// ---------- 03 Square the change ----------
function squareChange() {
  const o = [];
  const u = 52, base = 310;
  const sq = [[1, 230, C.cream], [2, 400, C.tealLight], [3, 640, C.teal]];
  for (const [n, cx, f] of sq) {
    const x = cx - (n * u) / 2, y = base - n * u;
    o.push(`<rect x="${x}" y="${y}" width="${n * u}" height="${n * u}" fill="${f}" stroke="${C.ink}" stroke-width="3.5"/>`);
    for (let i = 1; i < n; i++) {
      o.push(`<line x1="${x + i * u}" y1="${y}" x2="${x + i * u}" y2="${base}" stroke="${C.ink}" stroke-width="1.5"/>`);
      o.push(`<line x1="${x}" y1="${y + i * u}" x2="${x + n * u}" y2="${y + i * u}" stroke="${C.ink}" stroke-width="1.5"/>`);
    }
    o.push(t(cx, base + 38, `x = ${n}`, { size: 20, weight: 700, anchor: 'middle' }));
    o.push(t(cx, base + 66, `y = ${n * n}`, { size: 20, weight: 700, fill: C.rust, anchor: 'middle' }));
  }
  o.push(pill(300, 460, 300, 'x × 2 gives y × 4', C.tealDark), pill(620, 460, 300, 'x × 3 gives y × 9', C.tealDark));
  o.push(t(W / 2, 528, 'Not × 2 or × 3: the multiplier is squared.', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 566, 'Square the change', o.join('\n'), 'y = kx², shown as area with k = 1');
}

// ---------- 04 Ten per cent square ----------
function tenPercent() {
  const o = [];
  const x0 = 220, y0 = 180, s = 440, e = 44;
  o.push(`<rect x="${x0}" y="${y0}" width="${s}" height="${s}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3.5"/>`);
  o.push(`<rect x="${x0 + s}" y="${y0}" width="${e}" height="${s}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<rect x="${x0}" y="${y0 + s}" width="${s}" height="${e}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<rect x="${x0 + s}" y="${y0 + s}" width="${e}" height="${e}" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<line x1="${x0}" y1="${y0 - 26}" x2="${x0 + s}" y2="${y0 - 26}" stroke="${C.ink}" stroke-width="3" marker-start="url(#ah)" marker-end="url(#ah)"/>`);
  o.push(t(x0 + s / 2, y0 - 40, 'x = 1', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(t(x0 + s + e / 2, y0 - 40, '+10%', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(x0 + s / 2, y0 + s / 2 - 8, '1 × 1', { size: 30, weight: 700, anchor: 'middle' }));
  o.push(t(x0 + s / 2, y0 + s / 2 + 32, '= 1.00', { size: 28, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(`<line x1="${x0 + s + e / 2}" y1="${y0 + 190}" x2="${x0 + s + e + 30}" y2="${y0 + 180}" stroke="${C.olive}" stroke-width="2"/>`);
  o.push(t(x0 + s + e + 36, y0 + 187, '0.10', { size: 20, weight: 700, fill: C.olive }));
  o.push(`<line x1="${x0 + s / 2}" y1="${y0 + s + e / 2}" x2="${x0 + s / 2}" y2="${y0 + s + e + 34}" stroke="${C.olive}" stroke-width="2"/>`);
  o.push(t(x0 + s / 2, y0 + s + e + 60, '0.10', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(`<line x1="${x0 + s + e / 2}" y1="${y0 + s + e / 2}" x2="${x0 + s + e + 30}" y2="${y0 + s + e + 24}" stroke="${C.rust}" stroke-width="2"/>`);
  o.push(t(x0 + s + e + 36, y0 + s + e + 32, '0.01', { size: 20, weight: 700, fill: C.rust }));
  const y = y0 + s + e + 120;
  o.push(pill(W / 2, y, 420, '1 + 0.10 + 0.10 + 0.01 = 1.21', C.tealDark));
  o.push(pill(W / 2, y + 54, 420, '1.1² = 1.21, so up 21%', C.rust));
  o.push(t(W / 2, y + 112, 'Not 20%: square the multiplier 1.1.', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, y + 150, 'x up 10%: y up 21%', o.join('\n'), 'y = kx², take x = 1 and k = 1');
}

// ---------- 05 Root worked example ----------
function rootWorked() {
  const o = [];
  const F = frame(110, 150, 680, 600, 0, 100, 0, 30);
  o.push(F.axes({ xt: [0, 20, 40, 60, 80, 100].map((v) => [v, String(v)]), yt: [0, 10, 20, 30].map((v) => [v, String(v)]), xl: 'Q', yl: 'P' }));
  const f = (q) => 3 * Math.sqrt(q);
  const guide = (q, p, c) => `<polyline points="${F.X(0)},${F.Y(p)} ${F.X(q)},${F.Y(p)} ${F.X(q)},${F.Y(0)}" fill="none" stroke="${c}" stroke-width="3" stroke-dasharray="9 6"/>`;
  o.push(guide(49, 21, C.tealDark), guide(81, 27, C.rust));
  o.push(F.curve(f, 0, 100));
  o.push(dotAt(F, 16, 12, C.olive), dotAt(F, 49, 21, C.tealDark), dotAt(F, 81, 27, C.rust));
  o.push(halo(F.X(16) + 16, F.Y(12) + 30, 'given (16, 12)', { size: 19, weight: 700, fill: C.olive }));
  o.push(halo(F.X(49) + 16, F.Y(21) + 36, 'P = 3√Q', { size: 19, weight: 700 }));
  o.push(halo(F.X(0) + 12, F.Y(27) - 10, 'P = 27', { size: 18, weight: 700, fill: C.rust }));
  o.push(halo(F.X(0) + 12, F.Y(21) - 10, 'P = 21', { size: 18, weight: 700, fill: C.tealDark }));
  o.push(halo(F.X(49) + 10, F.Y(0) - 12, 'Q = 49', { size: 18, weight: 700, fill: C.tealDark }));
  o.push(halo(F.X(81) + 10, F.Y(0) - 12, 'Q = 81', { size: 18, weight: 700, fill: C.rust }));
  o.push(pill(270, 840, 340, 'k = 12 ÷ √16 = 3', C.olive), pill(630, 840, 340, '(a) 3 × √49 = 21', C.tealDark));
  o.push(pill(270, 894, 340, '(b) √Q = 9, so Q = 81', C.rust), pill(630, 894, 340, 'undo the root: square', C.rust));
  return svg(W, 940, 'P is proportional to √Q', o.join('\n'), 'Find k once, then read both ways');
}

// ---------- 06 Pumps ----------
function pumps() {
  const o = [];
  const F = frame(110, 150, 640, 600, 0, 12, 0, 24);
  o.push(F.axes({ xt: [0, 2, 4, 6, 8, 10, 12].map((v) => [v, String(v)]), yt: [0, 6, 12, 18, 24].map((v) => [v, String(v)]), xl: 'n', yl: 't' }));
  const rects = [[9, 8, C.rust, '#f3ddd0'], [6, 12, C.tealDark, '#d9e8e5'], [4, 18, C.olive, '#f1e6bd']];
  for (const [n, tt, c, f] of rects) o.push(`<rect x="${F.X(0)}" y="${F.Y(tt)}" width="${F.X(n) - F.X(0)}" height="${F.Y(0) - F.Y(tt)}" fill="${f}" fill-opacity="0.75" stroke="${c}" stroke-width="2.5"/>`);
  o.push(F.curve((n) => 72 / n, 3, 12));
  for (const [n, tt, c] of rects) {
    o.push(dotAt(F, n, tt, c));
    o.push(halo(F.X(n) + 14, F.Y(tt) - 14, `${n} × ${tt} = 72`, { size: 19, weight: 700, fill: c }));
  }
  o.push(pill(270, 840, 320, 'Same area every time', C.tealDark), pill(630, 840, 320, '6 pumps: 12 hours', C.tealDark));
  o.push(pill(W / 2, 894, 680, 'Need 8 hours: n = 72 ÷ 8 = 9', C.rust));
  return svg(W, 940, 'Pumps and time', o.join('\n'), 't = 72 ÷ n: more pumps, less time');
}

export const figures = [
  { name: '01-direct-shapes', after: '### Worked example 8: formula from a graph', svg: direct(),
    alt: 'Five direct proportion graphs for x from 0 to 4 with k = 1: y = x cubed, x squared, x, square root of x and cube root of x. All start at the origin and pass through (1, 1). The powers rise steeply; the roots flatten.',
    caption: 'Every direct proportion graph starts at O; powers curve upwards and roots flatten.' },
  { name: '02-inverse-shapes', after: '### Worked example 8: formula from a graph', svg: inverse(),
    alt: 'Five inverse proportion graphs with k = 1: 1 over the cube root of x, the square root of x, x, x squared and x cubed. All pass through (1, 1) and fall towards the x-axis without reaching zero. Higher powers fall faster.',
    caption: 'In inverse proportion y falls as x rises, and a higher power falls faster.' },
  { name: '06-pumps-inverse', after: '### Worked example 5: inverse cube', svg: pumps(),
    alt: 'The graph of t = 72 over n for pumps and hours. Rectangles to (4, 18), (6, 12) and (9, 8) all have area 72 because t times n is constant. 6 pumps take 12 hours and 9 pumps take 8 hours.',
    caption: 'In inverse proportion the product t × n stays the same.' },
  { name: '05-root-worked', after: '### Worked example 1: proportional to a square', svg: rootWorked(),
    alt: 'The graph of P = 3 times the square root of Q. The given point (16, 12) gives k = 3. Reading up from Q = 49 gives P = 21, and reading across from P = 27 gives Q = 81 because squaring undoes the root.',
    caption: 'Find k from one point, then read the graph either way.' },
  { name: '03-square-the-change', after: '### Worked example 6: percentage change', svg: squareChange(),
    alt: 'Squares with sides 1, 2 and 3 contain 1, 4 and 9 unit squares. Doubling x multiplies y by 4 and tripling x multiplies y by 9. The multiplier on x is squared.',
    caption: 'For y = kx squared, multiplying x by a number multiplies y by that number squared.' },
  { name: '04-ten-percent-square', after: '### Worked example 6: percentage change', svg: tenPercent(),
    alt: 'A unit square grows by 10 percent on each side. Two strips of 0.10 and a corner of 0.01 are added, so the area is 1.21. y rises by 21 percent, not 20 percent.',
    caption: 'A 10% rise in x gives a 21% rise in y when y is proportional to x squared.' },
];
