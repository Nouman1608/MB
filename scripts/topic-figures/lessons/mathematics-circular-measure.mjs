// Board-neutral redraws of three A Level Maths trigonometry pictures (small angles, reciprocal
// graphs, inverse trig graphs) used on AQA, OCR, Edexcel IAL and OxfordAQA pages. Same graphs and
// numbers as before; the board-name pills and the syllabus-code/paper pills are gone.
import { C, svg, t, path } from '../style.mjs';

export const slug = 'mathematics-circular-measure';
const W = 900;
const FAINT = '#b5d3cf', GRID = '#c9d6d4';

const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const dot = (x, y, r = 8, fill = C.ink) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="#fff" stroke-width="2"/>`;
const scale = (d0, d1, p0, p1) => (v) => p0 + ((v - d0) * (p1 - p0)) / (d1 - d0);
const frame = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fff" stroke="${GRID}" stroke-width="2"/>`;
// plot f on [a,b], breaking the path where |y| leaves the clip range
function curve(f, a, b, X, Y, ylim, o, n = 600) {
  const segs = [];
  let cur = [];
  for (let i = 0; i <= n; i++) {
    const x = a + ((b - a) * i) / n, y = f(x);
    if (!isFinite(y) || y < ylim[0] - 2 || y > ylim[1] + 2) { if (cur.length > 1) segs.push(cur); cur = []; continue; }
    cur.push([X(x), Y(y)]);
  }
  if (cur.length > 1) segs.push(cur);
  return segs.map((s) => path('M' + s.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L'), o)).join('');
}
const key = (x, y, col, s, dash = '') => line(x, y - 6, x + 46, y - 6, { color: col, w: 4.5, dash }) + t(x + 58, y, s, { size: 21, weight: 700, fill: col });

// ---------- 7. Small angle approximations ----------
function smallAngles() {
  const out = [];
  const X = scale(0, 1, 110, 838);
  // top panel
  const Y1 = scale(0, 1.6, 535, 237);
  out.push(key(108, 196, C.rust, 'y = θ', '12 7'), key(310, 196, C.ink, 'sin θ'), key(510, 196, C.tealDark, 'tan θ'));
  out.push(frame(110, 237, 728, 298), `<rect x="110" y="237" width="${X(0.2) - 110}" height="298" fill="${C.cream}"/>`);
  [0.2, 0.4, 0.6, 0.8].forEach((v) => out.push(line(X(v), 237, X(v), 535, { color: GRID, w: 1.5 })));
  [0.5, 1, 1.5].forEach((v) => out.push(line(110, Y1(v), 838, Y1(v), { color: GRID, w: 1.5 }), t(100, Y1(v) + 7, String(v), { size: 19, anchor: 'end' })));
  out.push(t(142, 268, 'small θ', { size: 19, weight: 700, fill: C.olive }));
  out.push(`<clipPath id="sa1"><rect x="110" y="237" width="728" height="298"/></clipPath><g clip-path="url(#sa1)">` +
    curve((x) => x, 0, 1, X, Y1, [0, 1.6], { stroke: C.rust, w: 3.5, extra: 'stroke-dasharray="12 7"' }) +
    curve(Math.sin, 0, 1, X, Y1, [0, 1.6], { stroke: C.ink, w: 4 }) + curve(Math.tan, 0, 1, X, Y1, [0, 1.6], { stroke: C.tealDark, w: 4 }) + '</g>');
  out.push(line(110, 535, 838, 535, { w: 3 }), line(110, 237, 110, 535, { w: 3 }));
  [0, 0.2, 0.4, 0.6, 0.8, 1].forEach((v) => out.push(t(X(v), 565, String(v), { size: 19, anchor: 'middle' })));
  out.push(t(838, 594, 'θ (radians)', { size: 18, fill: C.muted, anchor: 'end' }));
  out.push(t(818, 468, 'at θ = 0.2', { size: 19, weight: 700, anchor: 'end' }), t(818, 497, 'sin θ = 0.1987', { size: 19, anchor: 'end' }), t(818, 526, 'tan θ = 0.2027', { size: 19, fill: C.tealDark, anchor: 'end' }));
  // bottom panel
  const Y2 = scale(0.4, 1.05, 935, 686);
  out.push(key(108, 664, C.ink, 'cos θ'), key(310, 664, C.rust, 'y = 1 − θ²/2', '12 7'));
  out.push(frame(110, 686, 728, 249), `<rect x="110" y="686" width="${X(0.2) - 110}" height="249" fill="${C.cream}"/>`);
  [0.2, 0.4, 0.6, 0.8].forEach((v) => out.push(line(X(v), 686, X(v), 935, { color: GRID, w: 1.5 })));
  [0.5, 0.75, 1].forEach((v) => out.push(line(110, Y2(v), 838, Y2(v), { color: GRID, w: 1.5 }), t(100, Y2(v) + 7, String(v), { size: 19, anchor: 'end' })));
  out.push(curve((x) => 1 - (x * x) / 2, 0, 1, X, Y2, [0.4, 1.05], { stroke: C.rust, w: 3.5, extra: 'stroke-dasharray="12 7"' }) + curve(Math.cos, 0, 1, X, Y2, [0.4, 1.05], { stroke: C.ink, w: 4 }));
  out.push(line(110, 935, 838, 935, { w: 3 }), line(110, 686, 110, 935, { w: 3 }));
  [0, 0.2, 0.4, 0.6, 0.8, 1].forEach((v) => out.push(t(X(v), 965, String(v), { size: 19, anchor: 'middle' })));
  out.push(t(838, 994, 'θ (radians)', { size: 18, fill: C.muted, anchor: 'end' }));
  out.push(t(380, 858, 'at θ = 0.2', { size: 19, weight: 700 }), t(380, 887, 'cos θ = 0.9801', { size: 19 }), t(380, 916, '1 − θ²/2 = 0.9800', { size: 19, fill: C.rust }));
  out.push(t(96, 1060, 'sin θ ≈ θ', { size: 23, weight: 700 }), t(450, 1060, 'tan θ ≈ θ', { size: 23, weight: 700, anchor: 'middle' }), t(838, 1060, 'cos θ ≈ 1 − θ²/2', { size: 23, weight: 700, anchor: 'end' }));
  return svg(W, 1100, 'Small angle approximations', out.join('\n'), 'For small θ in radians');
}

// ---------- 8. Reciprocal graphs ----------
function reciprocal() {
  const out = [];
  const X = scale(0, 360, 110, 838), rad = (d) => (d * Math.PI) / 180;
  const panelG = (y0, title, def, range, col, f, parent, asym) => {
    const h = 210, Y = scale(-3.5, 3.5, y0 + h, y0);
    out.push(t(110, y0 - 14, title, { size: 22, weight: 700, fill: col }), t(250, y0 - 14, def, { size: 21, fill: C.muted }), t(838, y0 - 14, range, { size: 20, fill: C.muted, anchor: 'end' }));
    out.push(frame(110, y0, 728, h));
    [90, 180, 270].forEach((v) => out.push(line(X(v), y0, X(v), y0 + h, { color: GRID, w: 1.5 })));
    [1, -1].forEach((v) => out.push(line(110, Y(v), 838, Y(v), { color: '#c4cbcf', w: 1.5, dash: '7 6' })));
    [2, 1, -1, -2].forEach((v) => out.push(t(100, Y(v) + 7, v < 0 ? '−' + -v : String(v), { size: 19, anchor: 'end' })));
    out.push(line(110, Y(0), 838, Y(0), { w: 2.5 }));
    const id = 'rc' + y0;
    out.push(`<clipPath id="${id}"><rect x="110" y="${y0}" width="728" height="${h}"/></clipPath><g clip-path="url(#${id})">` +
      curve((d) => parent(rad(d)), 0, 360, X, Y, [-3.5, 3.5], { stroke: FAINT, w: 3 }) +
      asym.map((a) => line(X(a), y0, X(a), y0 + h, { color: C.rust, w: 3, dash: '10 7' })).join('') +
      curve((d) => f(rad(d)), 0, 360, X, Y, [-3.5, 3.5], { stroke: col, w: 4.5 }, 1440) + '</g>');
  };
  panelG(208, 'y = sec x', '= 1/cos x', 'y ≥ 1 or y ≤ −1', C.ink, (x) => 1 / Math.cos(x), Math.cos, [90, 270]);
  panelG(480, 'y = cosec x', '= 1/sin x', 'y ≥ 1 or y ≤ −1', C.tealDark, (x) => 1 / Math.sin(x), Math.sin, [180]);
  panelG(752, 'y = cot x', '= 1/tan x', 'all real y', C.olive, (x) => 1 / Math.tan(x), Math.tan, [180]);
  [[0, '0°', '0'], [90, '90°', 'π/2'], [180, '180°', 'π'], [270, '270°', '3π/2'], [360, '360°', '2π']].forEach(([v, a, b]) => out.push(t(X(v), 992, a, { size: 19, anchor: 'middle' }), t(X(v), 1020, b, { size: 19, fill: C.muted, anchor: 'middle' })));
  out.push(t(W / 2, 1072, 'Faint curve: the parent function. Dashed: asymptotes.', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1100, 'Reciprocal graphs', out.join('\n'), 'Where the parent function is 0, there is an asymptote');
}

// ---------- 9. Inverse trig graphs ----------
function inverseTrig() {
  const out = [];
  const P = Math.PI / 2;
  out.push(key(98, 186, C.ink, 'sin x, restricted'), key(440, 186, C.tealDark, 'arcsin x'), key(690, 186, '#4f5f7f', 'y = x', '10 7'));
  const X = scale(-1.75, 1.75, 190, 710), Y = scale(-1.75, 1.75, 738, 218);
  out.push(frame(190, 218, 520, 520));
  [-P, -1, 1, P].forEach((v) => out.push(line(X(v), 218, X(v), 738, { color: GRID, w: 1.5 }), line(190, Y(v), 710, Y(v), { color: GRID, w: 1.5 })));
  out.push(line(190, Y(0), 710, Y(0), { w: 3 }), line(X(0), 218, X(0), 738, { w: 3 }));
  out.push(line(X(-1.75), Y(-1.75), X(1.75), Y(1.75), { color: '#4f5f7f', w: 3, dash: '10 7' }));
  out.push(curve(Math.sin, -P, P, X, Y, [-2, 2], { stroke: C.ink, w: 4.5 }));
  out.push(curve(Math.asin, -1, 1, X, Y, [-2, 2], { stroke: C.tealDark, w: 4.5 }, 2000));
  out.push(line(X(P), Y(1), X(1), Y(P), { color: C.rust, w: 2.5, dash: '5 6' }));
  out.push(dot(X(P), Y(1), 9, C.ink), dot(X(1), Y(P), 9, C.tealDark));
  out.push(t(X(P) + 8, Y(1) + 36, '(π/2, 1)', { size: 20, weight: 700 }), t(X(1) - 12, Y(P) - 18, '(1, π/2)', { size: 20, weight: 700, fill: C.tealDark, anchor: 'end' }));
  out.push(t(X(-P), Y(0) - 12, '−π/2', { size: 19, anchor: 'middle' }), t(X(-1), Y(0) - 12, '−1', { size: 19, anchor: 'middle' }));
  out.push(t(X(1), Y(0) + 30, '1', { size: 19, anchor: 'middle' }), t(X(P) + 8, Y(0) + 30, 'π/2', { size: 19, anchor: 'start' }));
  out.push(t(X(0) - 10, Y(P) - 14, 'π/2', { size: 19, anchor: 'end' }), t(X(0) - 10, Y(1) + 7, '1', { size: 19, anchor: 'end' }));
  out.push(t(X(0) + 12, Y(-1) + 7, '−1', { size: 19 }), t(X(0) + 12, Y(-P) + 7, '−π/2', { size: 19 }));
  out.push(t(W / 2, 780, 'arcsin: domain −1 ≤ x ≤ 1, range −π/2 ≤ y ≤ π/2', { size: 21, anchor: 'middle' }));
  // arccos
  out.push(t(265, 848, 'y = arccos x', { size: 22, weight: 700, anchor: 'middle' }), t(265, 878, '0 ≤ y ≤ π', { size: 19, fill: C.muted, anchor: 'middle' }));
  const Xa = scale(-1.25, 1.25, 105, 425), Ya = scale(-0.2, 3.5, 1148, 918);
  out.push(frame(105, 918, 320, 230));
  out.push(line(105, Ya(Math.PI), 425, Ya(Math.PI), { color: '#c4cbcf', w: 1.5, dash: '7 6' }), line(105, Ya(P), 425, Ya(P), { color: '#c4cbcf', w: 1.5, dash: '7 6' }));
  out.push(line(Xa(-1), 918, Xa(-1), 1148, { color: '#c4cbcf', w: 1.5, dash: '7 6' }), line(Xa(1), 918, Xa(1), 1148, { color: '#c4cbcf', w: 1.5, dash: '7 6' }));
  out.push(line(105, Ya(0), 425, Ya(0), { w: 3 }), line(Xa(0), 918, Xa(0), 1148, { w: 3 }));
  out.push(curve(Math.acos, -1, 1, Xa, Ya, [-1, 4], { stroke: C.ink, w: 4.5 }, 2000), dot(Xa(-1), Ya(Math.PI), 8), dot(Xa(1), Ya(0), 8));
  out.push(t(95, Ya(Math.PI) + 7, 'π', { size: 19, anchor: 'end' }), t(95, Ya(P) + 7, 'π/2', { size: 19, anchor: 'end' }));
  out.push(t(Xa(-1), 1176, '−1', { size: 19, anchor: 'middle' }), t(Xa(1), 1176, '1', { size: 19, anchor: 'middle' }));
  // arctan
  out.push(t(705, 848, 'y = arctan x', { size: 22, weight: 700, anchor: 'middle' }), t(705, 878, '−π/2 &lt; y &lt; π/2', { size: 19, fill: C.muted, anchor: 'middle' }));
  const Xt = scale(-6, 6, 545, 865), Yt = scale(-1.95, 1.95, 1148, 918);
  out.push(frame(545, 918, 320, 230));
  out.push(line(545, Yt(0), 865, Yt(0), { w: 3 }), line(Xt(0), 918, Xt(0), 1148, { w: 3 }));
  out.push(line(545, Yt(P), 865, Yt(P), { color: C.rust, w: 3, dash: '12 7' }), line(545, Yt(-P), 865, Yt(-P), { color: C.rust, w: 3, dash: '12 7' }));
  out.push(curve(Math.atan, -6, 6, Xt, Yt, [-2, 2], { stroke: C.tealDark, w: 4.5 }));
  out.push(t(535, Yt(P) + 7, 'π/2', { size: 19, anchor: 'end' }), t(535, Yt(-P) + 7, '−π/2', { size: 19, anchor: 'end' }));
  return svg(W, 1205, 'Inverse trig functions', out.join('\n'), 'Restrict the domain, then reflect in y = x');
}

export const figures = [
  { name: '07-small-angle-approximations', after: '## E2: small angles (θ in radians)', svg: smallAngles(),
    alt: 'For θ from 0 to 1 radian, sin θ and tan θ hug the line y = θ near zero and cos θ hugs 1 − θ²/2. At θ = 0.2, sin = 0.1987, tan = 0.2027, cos = 0.9801 and 1 − θ²/2 = 0.9800.',
    caption: 'For small θ in radians, sin θ and tan θ are close to θ and cos θ is close to 1 − θ²/2.' },
  { name: '08-reciprocal-graphs', after: '## E4: reciprocal and inverse functions', svg: reciprocal(),
    alt: 'y = sec x, cosec x and cot x drawn over their parent functions. sec has asymptotes at 90° and 270°, cosec and cot at 0°, 180° and 360°. sec and cosec only take values y ≥ 1 or y ≤ −1 with period 360°; cot takes all real values with period 180°.',
    caption: 'A reciprocal graph has an asymptote wherever the parent function is zero.' },
  { name: '09-inverse-trig-graphs', after: '## E4: reciprocal and inverse functions', svg: inverseTrig(),
    alt: 'y = sin x restricted to −π/2 ≤ x ≤ π/2 reflects in y = x to give y = arcsin x, with domain −1 to 1 and range −π/2 to π/2. y = arccos x has range 0 to π; y = arctan x has range strictly between −π/2 and π/2 with horizontal asymptotes.',
    caption: 'Restrict the domain so the function is one-to-one, then reflect in y = x to get the inverse.' },
];
