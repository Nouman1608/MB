// Board-neutral redraws of six GCSE-level trigonometry pictures (exact values and trig graphs) used
// on AQA, OCR, OxfordAQA and IB MYP pages. Same values and graphs as before; the "Extended" tier
// pill in each top-right corner is gone.
import { C, svg, t, tl, path } from '../style.mjs';

export const slug = 'mathematics-exact-trigonometric-values-and-trigonometric-functions';
const W = 900;
const GRID = '#c9d6d4', SIN = C.tealDark, COS = C.olive;

const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const dot = (x, y, r = 8, fill = C.ink) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="#fff" stroke-width="2"/>`;
const scale = (d0, d1, p0, p1) => (v) => p0 + ((v - d0) * (p1 - p0)) / (d1 - d0);
const rad = (d) => (d * Math.PI) / 180;
function curve(f, a, b, X, Y, ylim, o, n = 720) {
  const segs = [];
  let cur = [];
  for (let i = 0; i <= n; i++) {
    const x = a + ((b - a) * i) / n, y = f(x);
    if (!isFinite(y) || y < ylim[0] || y > ylim[1]) { if (cur.length > 1) segs.push(cur); cur = []; continue; }
    cur.push([X(x), Y(y)]);
  }
  if (cur.length > 1) segs.push(cur);
  return segs.map((s) => path('M' + s.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L'), o)).join('');
}
const neg = (v) => (typeof v === 'number' && v < 0 ? '−' + -v : String(v));
// degree axes 0..360 with vertical grid every 90
function degAxes(out, X, Y, top, bot, yticks, { xlab = true } = {}) {
  [0, 90, 180, 270, 360].forEach((v) => out.push(line(X(v), top, X(v), bot, { color: GRID, w: 1.5 })));
  yticks.forEach(([v, s]) => out.push(line(X(0), Y(v), X(360), Y(v), { color: GRID, w: 1.5 }), t(X(0) - 12, Y(v) + 7, s ?? neg(v), { size: 19, anchor: 'end' })));
  out.push(line(X(0), Y(0), X(360), Y(0), { w: 3 }), line(X(0), top - 14, X(0), bot, { w: 3 }));
  if (xlab) [0, 90, 180, 270, 360].forEach((v) => out.push(t(X(v), bot + 30, v + '°', { size: 19, anchor: 'middle' })));
}

// ---------- 1. Two triangles ----------
function twoTriangles() {
  const out = [];
  out.push(t(60, 140, 'Half a square', { size: 20, fill: C.muted }));
  out.push(`<path d="M90 170 L90 400 L320 400 Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3.5"/>`, `<rect x="90" y="366" width="34" height="34" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`);
  out.push(t(70, 292, '1', { size: 22, weight: 700, anchor: 'end' }), t(205, 436, '1', { size: 22, weight: 700, anchor: 'middle' }), t(222, 272, '√2', { size: 22, weight: 700 }));
  out.push(t(102, 282, '45°', { size: 19, weight: 700, fill: SIN }), t(224, 386, '45°', { size: 19, weight: 700, fill: SIN }));
  [['sin 45°', '= 1/√2 = √2/2'], ['cos 45°', '= 1/√2 = √2/2'], ['tan 45°', '= 1/1 = 1']].forEach(([a, b], i) => out.push(t(470, 228 + i * 70, a, { size: 23, weight: 700, fill: SIN }), t(620, 228 + i * 70, b, { size: 23 })));
  out.push(t(60, 570, 'Half an equilateral triangle', { size: 20, fill: C.muted }));
  out.push(`<path d="M90 900 L420 900 L420 710 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>`, `<rect x="386" y="866" width="34" height="34" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`);
  out.push(t(232, 778, '2', { size: 22, weight: 700, anchor: 'middle' }), t(442, 812, '1', { size: 22, weight: 700 }), t(255, 940, '√3', { size: 22, weight: 700, anchor: 'middle' }));
  out.push(t(196, 888, '30°', { size: 19, weight: 700, fill: C.olive }), t(356, 820, '60°', { size: 19, weight: 700, fill: C.olive }));
  out.push(t(560, 630, '30°', { size: 23, weight: 700, fill: C.olive }), tl(560, 684, ['sin 30° = 1/2', 'cos 30° = √3/2', 'tan 30° = 1/√3'], { size: 23 }, 54));
  out.push(t(560, 870, '60°', { size: 23, weight: 700, fill: C.olive }), tl(560, 924, ['sin 60° = √3/2', 'cos 60° = 1/2', 'tan 60° = √3'], { size: 23 }, 54));
  return svg(W, 1080, 'Two triangles, five angles', out.join('\n'));
}

// ---------- 2. Unit quarter circle ----------
function quarterCircle() {
  const out = [];
  const O = [150, 780], R = 620;
  out.push(`<path d="M${O[0]} ${O[1]} L${O[0] + R} ${O[1]} A${R} ${R} 0 0 0 ${O[0]} ${O[1] - R} Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`);
  out.push(line(O[0], O[1], O[0] + R + 40, O[1], { w: 3 }), line(O[0], O[1], O[0], O[1] - R - 50, { w: 3 }));
  const ang = [[60, '√3/2', '1/2'], [45, '√2/2', '√2/2'], [30, '1/2', '√3/2']];
  for (const [a, sv, cv] of ang) {
    const px = O[0] + R * Math.cos(rad(a)), py = O[1] - R * Math.sin(rad(a));
    out.push(line(O[0], O[1], px, py, { w: 2.5 }));
    out.push(line(O[0], py, px, py, { color: SIN, w: 2.5, dash: '10 7' }), line(px, py, px, O[1], { color: COS, w: 2.5, dash: '10 7' }));
    out.push(dot(px, py, 8));
    out.push(t(px + 26, py - 22, a + '°', { size: 21, weight: 700 }));
    out.push(t(O[0] - 12, py + 7, sv, { size: 20, weight: 700, fill: SIN, anchor: 'end' }));
    out.push(t(px, O[1] + 34, cv, { size: 20, weight: 700, fill: COS, anchor: 'middle' }));
  }
  out.push(t(O[0] - 12, O[1] - R + 7, '1', { size: 20, weight: 700, anchor: 'end' }), t(O[0] - 12, O[1] + 7, '0', { size: 20, weight: 700, anchor: 'end' }));
  out.push(t(O[0], O[1] + 34, '0', { size: 20, weight: 700, fill: COS, anchor: 'middle' }), t(O[0] + R, O[1] + 34, '1', { size: 20, weight: 700, fill: COS, anchor: 'middle' }));
  out.push(t(610, 200, 'sin = height', { size: 22, weight: 700, fill: SIN }), t(610, 232, 'radius = 1', { size: 19, fill: C.muted }));
  out.push(t(O[0] + R / 2, O[1] + 84, 'cos = distance across', { size: 22, weight: 700, fill: COS, anchor: 'middle' }));
  return svg(W, 900, 'sin is height, cos is across', out.join('\n'));
}

// ---------- 3. sin and cos graphs ----------
function sinCos() {
  const out = [];
  const X = scale(0, 360, 100, 850), Y = scale(-1.2, 1.2, 600, 150);
  out.push(line(100, 110, 160, 110, { color: SIN, w: 5 }), t(172, 117, 'y = sin x', { size: 21, weight: 700, fill: SIN }));
  out.push(line(460, 110, 520, 110, { color: COS, w: 5 }), t(532, 117, 'y = cos x', { size: 21, weight: 700, fill: COS }));
  degAxes(out, X, Y, 168, 590, [[1], [0], [-1]]);
  out.push(curve((d) => Math.sin(rad(d)), 0, 360, X, Y, [-2, 2], { stroke: SIN, w: 4.5 }));
  out.push(curve((d) => Math.cos(rad(d)), 0, 360, X, Y, [-2, 2], { stroke: COS, w: 4.5 }));
  [0, 90, 180, 270, 360].forEach((d) => out.push(dot(X(d), Y(Math.round(Math.sin(rad(d)))), 8, SIN), dot(X(d), Y(Math.round(Math.cos(rad(d)))), 8, COS)));
  out.push(t(475, 668, 'x (degrees)', { size: 20, fill: C.muted, anchor: 'middle' }));
  out.push(line(X(0), 724, X(360), 724, { w: 3 }), line(X(0), 712, X(0), 736, { w: 3 }), line(X(360), 712, X(360), 736, { w: 3 }));
  out.push(t(475, 768, 'repeats every 360°', { size: 22, weight: 700, anchor: 'middle' }));
  return svg(W, 810, 'Graphs of sin x and cos x', out.join('\n'));
}

// ---------- 4. tan graph ----------
function tanGraph() {
  const out = [];
  const X = scale(0, 360, 100, 850), Y = scale(-4, 4, 640, 130);
  degAxes(out, X, Y, 130, 640, [[3], [2], [1], [0], [-1], [-2], [-3]]);
  out.push(line(X(90), 110, X(90), 640, { color: C.rust, w: 3, dash: '12 8' }), line(X(270), 110, X(270), 640, { color: C.rust, w: 3, dash: '12 8' }));
  out.push(t(X(90), 100, 'x = 90°', { size: 20, weight: 700, fill: C.rust, anchor: 'middle' }), t(X(270), 100, 'x = 270°', { size: 20, weight: 700, fill: C.rust, anchor: 'middle' }));
  out.push(curve((d) => Math.tan(rad(d)), 0, 360, X, Y, [-4, 4], { stroke: C.ink, w: 4.5 }, 1440));
  [0, 180, 360].forEach((d) => out.push(dot(X(d), Y(0), 9)));
  [[45, 1], [135, -1], [225, 1], [315, -1]].forEach(([d, v]) => out.push(dot(X(d), Y(v), 7, C.olive)));
  out.push(t(X(45) + 20, Y(1) + 44, '45°', { size: 20, weight: 700, fill: C.olive }), t(X(225) + 20, Y(1) + 44, '225°', { size: 20, weight: 700, fill: C.olive }));
  out.push(t(475, 722, 'x (degrees)', { size: 20, fill: C.muted, anchor: 'middle' }));
  out.push(line(X(0), 776, X(180), 776, { w: 3 }), line(X(0), 764, X(0), 788, { w: 3 }), line(X(180), 764, X(180), 788, { w: 3 }));
  out.push(t((X(0) + X(180)) / 2, 818, 'repeats every 180°', { size: 22, weight: 700, anchor: 'middle' }));
  return svg(W, 860, 'Graph of tan x', out.join('\n'));
}

// ---------- 5. sin solutions ----------
function sinSolutions() {
  const out = [];
  const X = scale(0, 360, 100, 850), Y = scale(-1.2, 1.2, 610, 150);
  degAxes(out, X, Y, 150, 610, [[1], [0.5, '1/2'], [0], [-0.5, '−1/2'], [-1]], { xlab: false });
  [0, 90, 180, 270, 360].forEach((v) => out.push(t(X(v), 640, v + '°', { size: 19, anchor: 'middle' })));
  out.push(line(X(0), Y(0.5), X(360), Y(0.5), { color: SIN, w: 2.5, dash: '10 7' }), line(X(0), Y(-0.5), X(360), Y(-0.5), { color: C.rust, w: 2.5, dash: '10 7' }));
  out.push(curve((d) => Math.sin(rad(d)), 0, 360, X, Y, [-2, 2], { stroke: SIN, w: 4.5 }));
  out.push(t(X(45), Y(1) - 16, 'sin x = 1/2', { size: 20, weight: 700, fill: SIN }));
  out.push(t(X(270), Y(-0.5) - 18, 'sin x = −1/2', { size: 20, weight: 700, fill: C.rust, anchor: 'middle' }));
  [[30, 0.5, SIN], [150, 0.5, SIN], [210, -0.5, C.rust], [330, -0.5, C.rust]].forEach(([d, v, col]) => {
    out.push(line(X(d), Y(v), X(d), 610, { color: col, w: 2.5, dash: '6 6' }), dot(X(d), Y(v), 9, col));
    out.push(t(X(d), 680, d + '°', { size: 22, weight: 700, fill: col, anchor: 'middle' }));
  });
  out.push(t(W / 2, 760, '30° and 180° − 30° = 150°', { size: 21, weight: 700, fill: SIN, anchor: 'middle' }));
  out.push(t(W / 2, 800, '180° + 30° = 210° and 360° − 30° = 330°', { size: 21, weight: 700, fill: C.rust, anchor: 'middle' }));
  return svg(W, 845, 'Solve sin x = k by crossings', out.join('\n'));
}

// ---------- 6. cos and tan solutions ----------
function cosTanSolutions() {
  const out = [];
  out.push(t(100, 130, 'cos x = 0.4: x and 360° − x', { size: 22, weight: 700, fill: COS }));
  let X = scale(0, 360, 100, 850), Y = scale(-1.15, 1.15, 440, 160);
  degAxes(out, X, Y, 160, 440, [[1], [0.4, '0.4'], [0], [-1]]);
  out.push(line(X(0), Y(0.4), X(360), Y(0.4), { w: 2.5, dash: '10 7' }));
  out.push(curve((d) => Math.cos(rad(d)), 0, 360, X, Y, [-2, 2], { stroke: COS, w: 4.5 }));
  for (const d of [66.4, 293.6]) out.push(line(X(d), Y(0.4), X(d), 440, { w: 2.5, dash: '6 6' }), dot(X(d), Y(0.4), 9), t(X(d), 508, d + '°', { size: 22, weight: 700, anchor: 'middle' }));
  out.push(t(100, 590, 'tan x = 1/√3: x and x + 180°', { size: 22, weight: 700, fill: C.rust }));
  Y = scale(-2.6, 2.6, 920, 620);
  degAxes(out, X, Y, 620, 920, [[2], [1], [0], [-1], [-2]]);
  out.push(line(X(90), 620, X(90), 920, { color: C.rust, w: 2.5, dash: '10 7' }), line(X(270), 620, X(270), 920, { color: C.rust, w: 2.5, dash: '10 7' }));
  const k = 1 / Math.sqrt(3);
  out.push(line(X(0), Y(k), X(360), Y(k), { color: C.rust, w: 2.5, dash: '10 7' }));
  out.push(curve((d) => Math.tan(rad(d)), 0, 360, X, Y, [-2.6, 2.6], { stroke: C.ink, w: 4.5 }, 1440));
  for (const d of [30, 210]) out.push(line(X(d), Y(k), X(d), 920, { color: C.rust, w: 2.5, dash: '6 6' }), dot(X(d), Y(k), 9, C.rust), t(X(d), 990, d + '°', { size: 22, weight: 700, fill: C.rust, anchor: 'middle' }));
  return svg(W, 1030, 'Second solution: cos and tan', out.join('\n'));
}

export const figures = [
  { name: '03-sin-cos-graphs', after: '## Recognising and sketching graphs (A12)', svg: sinCos(),
    alt: 'Graphs of y = sin x and y = cos x from 0 to 360 degrees with key points marked at multiples of 90 degrees. Both are waves between minus 1 and 1 repeating every 360 degrees; cos is sin shifted by 90 degrees.',
    caption: 'Sin and cos are waves between -1 and 1 that repeat every 360 degrees.' },
  { name: '04-tan-graph', after: '## Recognising and sketching graphs (A12)', svg: tanGraph(),
    alt: 'Graph of y = tan x from 0 to 360 degrees with dashed asymptotes at 90 and 270 degrees. Branches pass through (0,0), (180,0) and (360,0), approach the asymptotes without touching, and repeat every 180 degrees.',
    caption: 'Tan x has asymptotes at 90 and 270 degrees and repeats every 180 degrees.' },
  { name: '05-sin-solutions', after: '### Solving f(x) = k graphically', svg: sinSolutions(),
    alt: 'The sine curve with dashed lines at y = 1/2 and y = minus 1/2. The lines cross at 30 and 150 degrees, and 210 and 330 degrees, showing x and 180 minus x, then 180 plus x and 360 minus x.',
    caption: 'Draw a horizontal line across the graph; each crossing is a solution.' },
  { name: '06-cos-tan-solutions', after: '### Solving f(x) = k graphically', svg: cosTanSolutions(),
    alt: 'Top: cosine curve crossed by y = 0.4 at 66.4 and 293.6 degrees (x and 360 minus x). Bottom: tangent curve crossed by y = 1 over root 3 at 30 and 210 degrees (x and x plus 180).',
    caption: 'Cosine uses 360 minus x and tangent uses x plus 180 for the second solution.' },
  { name: '01-two-triangles', after: '## Exact values', svg: twoTriangles(),
    alt: 'Half a square with sides 1, 1, root 2 gives sin 45 = cos 45 = root 2 over 2 and tan 45 = 1. Half an equilateral triangle with sides 1, root 3 and 2 gives sin 30 = 1/2, cos 30 = root 3 over 2, tan 30 = 1 over root 3, and sin 60 = root 3 over 2, cos 60 = 1/2, tan 60 = root 3.',
    caption: 'Two triangles produce all the exact values for 30, 45 and 60 degrees.' },
  { name: '02-unit-quarter-circle', after: '## Exact values', svg: quarterCircle(),
    alt: 'A quarter circle of radius 1 with rays at 30, 45 and 60 degrees. The height of each point is sin x and the distance across is cos x, labelled with the exact values; cos is the sin row reversed.',
    caption: 'On a quarter circle of radius 1, sin x is the height and cos x is the distance across.' },
];
