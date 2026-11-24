// Board-neutral redraws of six A Level Maths differentiation pictures used on AQA, OCR, Edexcel IAL
// and OxfordAQA pages. Same curves, points and working as before; the "All boards" pills and the
// Cambridge-style "A2 content" stage pills are gone.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'mathematics-differentiation';
const W = 900;

const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const dot = (x, y, r = 8, fill = '#fff', edge = C.ink, w = 2.5) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${w}"/>`;
const pill = (x, y, w, h, s, fill = C.cream, edge = C.olive, size = 21, color = C.ink) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` +
  t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight: 700, anchor: 'middle', fill: color });
const sup = (s) => `<tspan baseline-shift="super" font-size="70%">${s}</tspan>`;
const scale = (d0, d1, p0, p1) => (v) => p0 + ((v - d0) * (p1 - p0)) / (d1 - d0);
const poly = (pts, o) => path('M' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L'), o);
const neg = (v) => (v < 0 ? '−' + -v : String(v));
const frame = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fff" stroke="${C.panelEdge}" stroke-width="2"/>`;
const curve = (f, a, b, X, Y, o, n = 300) => {
  const pts = [];
  for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; pts.push([X(x), Y(f(x))]); }
  return poly(pts, o);
};
// axes through the origin inside a frame, with ticks
function axes(out, X, Y, box, xt, yt, { xl = 'x', yl = 'y', xlBelow = false } = {}) {
  const [L, T, R, B] = box;
  out.push(line(L, Y(0), R, Y(0), { w: 2.5 }), line(X(0), T, X(0), B, { w: 2.5 }));
  xt.forEach((v) => out.push(line(X(v), Y(0) - 7, X(v), Y(0) + 7, { w: 2.5 }), t(X(v), Y(0) + 32, neg(v), { size: 19, anchor: 'middle' })));
  yt.forEach((v) => out.push(line(X(0) - 7, Y(v), X(0) + 7, Y(v), { w: 2.5 }), t(X(0) - 14, Y(v) + 7, neg(v), { size: 19, anchor: 'end' })));
  out.push(t(R - 12, Y(0) + (xlBelow ? 34 : -12), xl, { size: 21, weight: 700, anchor: 'end' }));
  out.push(t(X(0) + 14, T + 28, yl, { size: 21, weight: 700 }));
}

// ---------- 1. Chord to tangent ----------
function chordToTangent() {
  const out = [];
  const box = [90, 120, 830, 640];
  out.push(frame(90, 120, 740, 520));
  const X = scale(1.5, 4.5, 90, 830), Y = scale(0, 44, 640, 120);
  out.push(`<clipPath id="cl1"><rect x="90" y="120" width="740" height="520"/></clipPath>`);
  out.push(line(90, 640, 830, 640, { w: 2.5 }), line(90, 120, 90, 640, { w: 2.5 }));
  [2, 3, 4].forEach((v) => out.push(line(X(v), 633, X(v), 647, { w: 2.5 }), t(X(v), 674, String(v), { size: 19, anchor: 'middle' })));
  [10, 20, 30, 40].forEach((v) => out.push(line(83, Y(v), 97, Y(v), { w: 2.5 }), t(76, Y(v) + 7, String(v), { size: 19, anchor: 'end' })));
  out.push(t(818, 628, 'x', { size: 21, weight: 700, anchor: 'end' }), t(104, 150, 'y', { size: 21, weight: 700 }));
  void box;
  const g = [];
  g.push(curve((x) => 2 * x * x, 1.5, 4.5, X, Y, { w: 4.5 }));
  g.push(line(X(2.4), Y(18 + 12 * -0.6), X(3.8), Y(18 + 12 * 0.8), { color: C.olive, w: 4.5 }));
  for (const h of [1, 0.5, 0.25]) out.push();
  for (const h of [1, 0.5, 0.25]) g.push(line(X(3), Y(18), X(3 + h), Y(2 * (3 + h) ** 2), { color: C.rust, w: 3.5 }));
  out.push(`<g clip-path="url(#cl1)">${g.join('')}</g>`);
  for (const [h, dx, dy] of [[1, -16, -8], [0.5, -16, -8], [0.25, -16, -8]]) {
    const px = X(3 + h), py = Y(2 * (3 + h) ** 2);
    out.push(dot(px, py, 8, C.rust, '#fff', 2.5));
    out.push(t(px + dx, py + dy - 6, `h = ${h}`, { size: 20, weight: 700, fill: C.rust, anchor: 'end' }));
  }
  out.push(t(X(3.85), Y(18 + 12 * 0.8) + 34, 'tangent', { size: 20, weight: 700, fill: C.olive }));
  out.push(dot(X(3), Y(18), 11, C.ink, '#fff', 2.5));
  out.push(t(X(3) - 20, Y(18) - 14, 'P', { size: 22, weight: 700, anchor: 'end' }));
  out.push(t(W / 2, 712, 'chord gradient = 12 + 2h', { size: 23, weight: 700, fill: C.rust, anchor: 'middle' }));
  const ps = [['h = 1: 14', 36, 170], ['h = 0.5: 13', 216, 180], ['h = 0.1: 12.2', 406, 200], ['h = 0.01: 12.02', 616, 248]];
  ps.forEach(([s, x, w]) => out.push(pill(x, 740, w, 46, s, '#f5e3d9', C.rust, 19)));
  out.push(pill(220, 806, 460, 48, 'h → 0: gradient of curve = 12', C.cream, C.olive, 20));
  out.push(t(W / 2, 892, `y = 2x${sup('2')}, P at x = 3: dy/dx = 4x = 12`, { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 920, 'A chord becomes the tangent', out.join('\n'));
}

// ---------- 2. Gradient function ----------
function gradientFunction() {
  const out = [];
  const f = (x) => x ** 3 - 3 * x * x - 9 * x + 4, fp = (x) => 3 * (x + 1) * (x - 3);
  const X = scale(-3, 5, 100, 830);
  // top
  out.push(frame(100, 130, 730, 380));
  const Y1 = scale(-28, 16, 510, 130);
  out.push(`<clipPath id="g1"><rect x="100" y="130" width="730" height="380"/></clipPath><clipPath id="g2"><rect x="100" y="610" width="730" height="380"/></clipPath>`);
  axes(out, X, Y1, [100, 130, 830, 510], [-2, 2, 4], [-20, -10, 10], { yl: 'f', xlBelow: true });
  out.push(line(X(-1), Y1(9), X(-1), 880, { color: '#4f5f7f', w: 2, dash: '7 6' }), line(X(3), Y1(-23), X(3), 880, { color: '#4f5f7f', w: 2, dash: '7 6' }));
  out.push(`<g clip-path="url(#g1)">${curve(f, -3, -1, X, Y1, { stroke: C.tealDark, w: 4.5 })}${curve(f, -1, 3, X, Y1, { stroke: C.rust, w: 4.5 })}${curve(f, 3, 5, X, Y1, { stroke: C.tealDark, w: 4.5 })}</g>`);
  out.push(dot(X(-1), Y1(9), 10, C.ink, '#fff', 2.5), dot(X(3), Y1(-23), 10, C.ink, '#fff', 2.5));
  out.push(t(X(-1) - 18, Y1(9) - 12, 'max (−1, 9)', { size: 19, weight: 700, anchor: 'end' }));
  out.push(t(X(3) + 18, Y1(-23) + 30, 'min (3, −23)', { size: 19, weight: 700 }));
  out.push(t(X(1), Y1(10), 'falling', { size: 21, weight: 700, fill: C.rust, anchor: 'middle' }));
  out.push(t(X(-2.1), Y1(-14), 'rising', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(X(5) - 10, Y1(-24), 'rising', { size: 21, weight: 700, fill: C.tealDark, anchor: 'end' }));
  // bottom
  out.push(frame(100, 610, 730, 380));
  const Y2 = scale(-16, 40, 990, 610);
  // redraw dashed guides over the lower frame
  out.push(line(X(-1), 610, X(-1), Y2(0), { color: '#4f5f7f', w: 2, dash: '7 6' }), line(X(3), 610, X(3), Y2(0), { color: '#4f5f7f', w: 2, dash: '7 6' }));
  axes(out, X, Y2, [100, 610, 830, 990], [-2, 2, 4], [-10, 10, 20, 30], { yl: 'f′', xlBelow: true });
  out.push(`<g clip-path="url(#g2)">${curve(fp, -3, -1, X, Y2, { stroke: C.tealDark, w: 4.5 })}${curve(fp, -1, 3, X, Y2, { stroke: C.rust, w: 4.5 })}${curve(fp, 3, 5, X, Y2, { stroke: C.tealDark, w: 4.5 })}</g>`);
  out.push(dot(X(-1), Y2(0), 10, C.ink, '#fff', 2.5), dot(X(3), Y2(0), 10, C.ink, '#fff', 2.5));
  out.push(t(X(-1) + 12, Y2(0) - 14, 'f′ = 0', { size: 19, weight: 700 }));
  out.push(t(X(3) - 12, Y2(0) - 14, 'f′ = 0', { size: 19, weight: 700, anchor: 'end' }));
  out.push(t(X(-1.75), Y2(30), 'f′ &gt; 0', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(X(3.75), Y2(30), 'f′ &gt; 0', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(X(1), Y2(-6) + 7, 'f′ &lt; 0', { size: 21, weight: 700, fill: C.rust, anchor: 'middle' }));
  out.push(t(W / 2, 1050, `f(x) = x${sup('3')} − 3x${sup('2')} − 9x + 4, f′(x) = 3(x + 1)(x − 3)`, { size: 21, weight: 700, anchor: 'middle' }));
  return svg(W, 1090, 'f′ is the gradient of f', out.join('\n'));
}

// ---------- 3. Convex, concave, inflection ----------
function convexConcave() {
  const out = [];
  const f = (x) => x ** 4 - 8 * x ** 3 + 18 * x * x + 5;
  const X = scale(-0.5, 4.3, 90, 830), Y = scale(0, 46, 730, 130);
  out.push(frame(90, 130, 740, 600));
  out.push(`<clipPath id="c3"><rect x="90" y="130" width="740" height="600"/></clipPath>`);
  out.push(line(90, 730, 830, 730, { w: 2.5 }), line(X(0), 130, X(0), 730, { w: 2.5 }));
  [1, 2, 3, 4].forEach((v) => out.push(line(X(v), 723, X(v), 737, { w: 2.5 }), t(X(v), 764, String(v), { size: 19, anchor: 'middle' })));
  [10, 20, 30, 40].forEach((v) => out.push(line(X(0) - 7, Y(v), X(0) + 7, Y(v), { w: 2.5 }), t(X(0) - 14, Y(v) + 7, String(v), { size: 19, anchor: 'end' })));
  out.push(t(818, 718, 'x', { size: 21, weight: 700, anchor: 'end' }), t(X(0) + 14, 160, 'y', { size: 21, weight: 700 }));
  // tangents at inflection points: f'(1) = 4 - 24 + 36 = 16, f'(3) = 0
  out.push(line(X(0.65), Y(16 - 0.35 * 16), X(1.35), Y(16 + 0.35 * 16), { color: C.olive, w: 3, dash: '10 7' }));
  out.push(line(X(2.35), Y(32), X(3.65), Y(32), { color: C.olive, w: 3, dash: '10 7' }));
  out.push(`<g clip-path="url(#c3)">${curve(f, -0.5, 1, X, Y, { stroke: C.tealDark, w: 4.5 })}${curve(f, 1, 3, X, Y, { stroke: C.rust, w: 4.5 })}${curve(f, 3, 4.3, X, Y, { stroke: C.tealDark, w: 4.5 })}</g>`);
  out.push(dot(X(1), Y(16), 16, 'none', C.ink, 3), dot(X(3), Y(32), 16, 'none', C.ink, 3));
  out.push(t(X(1) + 24, Y(16) + 42, '(1, 16)', { size: 20, weight: 700 }));
  out.push(t(X(3) + 24, Y(32) - 22, '(3, 32)', { size: 20, weight: 700 }));
  out.push(t(X(0.5), 712, 'convex', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(X(2), 712, 'concave', { size: 20, weight: 700, fill: C.rust, anchor: 'middle' }));
  out.push(t(X(3.65), 712, 'convex', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(pill(230, 790, 440, 46, 'f″ &gt; 0 convex, f″ &lt; 0 concave', C.tealLight, C.tealDark, 20));
  out.push(pill(190, 852, 520, 46, 'inflection: f″ = 0 and changes sign', C.cream, C.olive, 20));
  out.push(t(W / 2, 940, `f(x) = x${sup('4')} − 8x${sup('3')} + 18x${sup('2')} + 5, f″(x) = 12(x − 1)(x − 3)`, { size: 21, weight: 700, anchor: 'middle' }));
  return svg(W, 975, 'Convex, concave, inflection', out.join('\n'));
}

// ---------- 4. Tangent and normal ----------
function tangentNormal() {
  const out = [];
  const X = scale(-1, 5.2, 60, 804), Y = scale(-0.8, 5.3, 852, 120);
  out.push(frame(60, 120, 744, 732));
  out.push(`<clipPath id="c4"><rect x="60" y="120" width="744" height="732"/></clipPath>`);
  axes(out, X, Y, [60, 120, 804, 852], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
  const g = [];
  g.push(curve((x) => Math.sqrt(2 * x + 5), -1, 5.2, X, Y, { w: 4.5 }));
  g.push(line(X(-1), Y(2), X(5.2), Y((5.2 + 7) / 3), { color: C.olive, w: 4 }));
  g.push(line(X(1.333), Y(5), X(3.27), Y(9 - 3 * 3.27), { color: C.tealDark, w: 4 }));
  out.push(`<g clip-path="url(#c4)">${g.join('')}</g>`);
  // right-angle mark at P: unit vectors along tangent (3,1)/√10 and normal (1,-3)/√10 in data; convert to pixels
  const px = X(2), py = Y(3), s = 22;
  const ut = [X(2 + 3) - px, Y(3 + 1) - py], un = [X(2 + 1) - px, Y(3 - 3) - py];
  const nt = Math.hypot(...ut), nn = Math.hypot(...un);
  const a = [px + (ut[0] / nt) * s, py + (ut[1] / nt) * s], b = [px + (un[0] / nn) * s, py + (un[1] / nn) * s];
  const c = [a[0] + (un[0] / nn) * s, a[1] + (un[1] / nn) * s];
  out.push(path(`M${a[0]} ${a[1]} L${c[0]} ${c[1]} L${b[0]} ${b[1]}`, { w: 2.5 }));
  out.push(dot(px, py, 11, C.ink, '#fff', 2.5));
  out.push(t(px - 18, py - 16, 'P (2, 3)', { size: 21, weight: 700, anchor: 'end' }));
  out.push(dot(X(3), Y(0), 9, C.tealDark, '#fff', 2.5), t(X(3) + 20, Y(0) - 16, '(3, 0)', { size: 19, weight: 700, fill: C.tealDark }));
  out.push(tl(X(1.45) + 12, 156, ['normal', 'gradient −3'], { size: 20, weight: 700, fill: C.tealDark }, 26));
  out.push(tl(612, 186, ['tangent', 'gradient ⅓'], { size: 20, weight: 700, fill: C.olive }, 26));
  out.push(t(W / 2, 898, 'm × (−1/m) = ⅓ × (−3) = −1', { size: 23, weight: 700, anchor: 'middle' }));
  out.push(t(W / 2, 934, 'y = √(2x + 5)   tangent: 3y = x + 7   normal: y = 9 − 3x', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 966, 'Tangent and normal', out.join('\n'));
}

// ---------- 6. Product rule as an area ----------
function productRule() {
  const out = [];
  const x0 = 90, y0 = 105, uw = 270, du = 88, dv = 75, vh = 340;
  out.push(`<rect x="${x0}" y="${y0 + dv}" width="${uw}" height="${vh}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`);
  out.push(`<rect x="${x0}" y="${y0}" width="${uw}" height="${dv}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`);
  out.push(`<rect x="${x0 + uw}" y="${y0 + dv}" width="${du}" height="${vh}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`);
  out.push(`<rect x="${x0 + uw}" y="${y0}" width="${du}" height="${dv}" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>`);
  out.push(t(x0 + uw / 2, y0 + dv / 2 + 8, 'u dv', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  out.push(t(x0 + uw / 2, y0 + dv + vh / 2 + 10, 'u v', { size: 32, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(line(x0 - 10, y0 + dv, x0 - 10, y0 + dv + vh, { w: 2.5 }), t(x0 - 26, y0 + dv + vh / 2 + 8, 'v', { size: 24, weight: 700, anchor: 'middle' }));
  out.push(line(x0, y0 + dv + vh + 20, x0 + uw, y0 + dv + vh + 20, { w: 2.5 }), t(x0 + uw / 2, y0 + dv + vh + 52, 'u', { size: 24, weight: 700, anchor: 'middle' }));
  out.push(line(x0 + uw + du, y0 + dv / 2 + 12, x0 + uw + du + 40, y0 + 20, { color: '#4f5f7f', w: 2.5 }));
  out.push(t(x0 + uw + du + 44, y0 + 4, 'du dv (tiny)', { size: 20, weight: 700, fill: C.rust }));
  out.push(line(x0 + uw + du, y0 + dv + 120, x0 + uw + du + 34, y0 + dv + 120, { color: '#4f5f7f', w: 2.5 }));
  out.push(t(x0 + uw + du + 40, y0 + dv + 127, 'v du', { size: 20, weight: 700, fill: C.tealDark }));
  const rx = 560;
  out.push(t(rx, 190, 'extra area =', { size: 22, fill: C.muted }));
  out.push(t(rx, 236, 'v du + u dv + du dv', { size: 22, weight: 700 }));
  out.push(t(rx, 300, 'divide by dx, let', { size: 22, fill: C.muted }));
  out.push(t(rx, 340, 'dx → 0:', { size: 22, fill: C.muted }));
  out.push(pill(rx + 16, 384, 266, 46, '(uv)′ = u′v + uv′', C.tealLight, C.tealDark, 21));
  out.push(t(rx, 480, `y = x${sup('3')}e${sup('2x')} at x = 1`, { size: 21, weight: 700, fill: C.tealDark }));
  out.push(t(rx, 520, `u′v = 3e${sup('2')}`, { size: 21 }));
  out.push(t(rx, 558, `uv′ = 2e${sup('2')}`, { size: 21 }));
  out.push(t(rx, 604, `(uv)′ = 5e${sup('2')} = 36.9`, { size: 22, weight: 700, fill: C.olive }));
  return svg(W, 650, 'The product rule as an area', out.join('\n'));
}

// ---------- 9. Implicit curve: flat and vertical ----------
function implicitFlatVertical() {
  const out = [];
  const X = scale(-5.3, 5.2, 60, 830), Y = scale(-5.4, 5.3, 888, 120);
  out.push(frame(60, 120, 770, 768));
  axes(out, X, Y, [60, 120, 830, 888], [-4, -2, 2, 4], [-4, -2, 2, 4]);
  const pts = [];
  for (let i = 0; i <= 400; i++) {
    const th = (i / 400) * 2 * Math.PI, u = Math.sqrt(24) * Math.cos(th), w = Math.sqrt(8) * Math.sin(th);
    pts.push([X((u - w) / Math.SQRT2), Y((u + w) / Math.SQRT2)]);
  }
  out.push(poly(pts, { w: 4.5 }));
  const hz = [[2, 4], [-2, -4]], vt = [[4, 2], [-4, -2]];
  hz.forEach(([a, b]) => out.push(line(X(a - 1.3), Y(b), X(a + 1.3), Y(b), { color: C.tealDark, w: 4.5 }), dot(X(a), Y(b), 9, C.tealDark, '#fff', 2.5)));
  vt.forEach(([a, b]) => out.push(line(X(a), Y(b - 1.3), X(a), Y(b + 1.3), { color: C.rust, w: 4.5 }), dot(X(a), Y(b), 9, C.rust, '#fff', 2.5)));
  out.push(t(X(2), Y(4) - 20, '(2, 4)', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(X(-2), Y(-4) + 40, '(−2, −4)', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(X(4) - 14, Y(2) + 7, '(4, 2)', { size: 20, weight: 700, fill: C.rust, anchor: 'end' }));
  out.push(t(X(-4) + 14, Y(-2) + 7, '(−4, −2)', { size: 20, weight: 700, fill: C.rust }));
  out.push(t(X(-3.5), Y(4) + 7, 'dy/dx = 0', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(X(3.5), Y(-4) + 7, 'dy/dx = 0', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(W / 2, 935, `x${sup('2')} − xy + y${sup('2')} = 12`, { size: 23, weight: 700, anchor: 'middle' }));
  out.push(t(W / 2, 975, 'dy/dx = (y − 2x) / (2y − x)', { size: 23, weight: 700, anchor: 'middle' }));
  out.push(pill(66, 1004, 340, 46, 'top = 0: flat (y = 2x)', C.tealLight, C.tealDark, 20));
  out.push(pill(452, 1004, 390, 46, 'bottom = 0: vertical (x = 2y)', '#f5e3d9', C.rust, 20));
  return svg(W, 1080, 'Implicit curve: where is it flat?', out.join('\n'));
}

export const figures = [
  { name: '04-tangent-and-normal', after: '## 2. Tangents and normals for implicit curves', svg: tangentNormal(),
    alt: 'Graph of y = square root of (2x + 5) with equal scales on both axes. At P(2, 3) the gradient is one third, so the gold tangent is 3y = x + 7. The teal normal is perpendicular, with gradient minus 3, y = 9 minus 3x, and crosses the x-axis at (3, 0). A right-angle mark at P shows the lines are perpendicular because one third times minus 3 equals minus 1.',
    caption: 'The tangent and normal at P(2, 3) are perpendicular because their gradients multiply to −1.' },
  { name: '01-chord-to-tangent', after: '## 4. Tangents and normals at a general point', svg: chordToTangent(),
    alt: 'Graph of y = 2x squared. Point P is at x = 3, y = 18. Three chords from P to points a distance h to the right (h = 1, 0.5, 0.25) get closer to the gold tangent line as h shrinks. The chord gradient is 12 + 2h: 14, 13, 12.2 and 12.02 for h = 1, 0.5, 0.1 and 0.01. As h tends to 0 the gradient tends to 12, the gradient of the curve at x = 3, which agrees with dy/dx = 4x.',
    caption: 'How chord gradients 12 + 2h approach the tangent gradient 12 at x = 3 on y = 2x².' },
  { name: '02-gradient-function', after: '## 2. Sketching the gradient function (1.07c)', svg: gradientFunction(),
    alt: 'Two graphs aligned on the same x values. Top: the cubic f(x) = x cubed minus 3x squared minus 9x plus 4, rising to a maximum (minus 1, 9), falling to a minimum (3, minus 23), then rising. Bottom: its gradient function f dash = 3(x + 1)(x minus 3), a U-shaped parabola crossing zero at x = minus 1 and x = 3. Where f dash is positive f is rising, where negative f is falling, and f dash = 0 at the maximum and minimum.',
    caption: 'The sign of f′ tells you where f rises or falls, and f′ = 0 at turning points.' },
  { name: '09-implicit-flat-vertical', after: '## 2. Tangents and normals for implicit curves', svg: implicitFlatVertical(),
    alt: 'The tilted ellipse x squared minus xy plus y squared = 12, drawn from its equation. Implicit differentiation gives dy/dx = (y minus 2x) over (2y minus x). The numerator is zero when y = 2x, giving horizontal tangents (teal) at (2, 4) and (minus 2, minus 4). The denominator is zero when x = 2y, giving vertical tangents (copper) at (4, 2) and (minus 4, minus 2).',
    caption: 'Horizontal tangents occur where the numerator of dy/dx is zero and vertical tangents where the denominator is zero.' },
  { name: '03-convex-concave-inflection', after: '## 4. Convex, concave and points of inflection (1.07f, A Level only)', svg: convexConcave(),
    alt: 'A quartic curve f(x) = x to the 4 minus 8x cubed plus 18x squared plus 5. It is convex (bends upwards, teal) for x less than 1, concave (bends downwards, copper) between x = 1 and x = 3, and convex again for x greater than 3. The points of inflection (1, 16) and (3, 32) are ringed; dashed tangents there cross the curve, and at (3, 32) the tangent is horizontal. The second derivative 12(x minus 1)(x minus 3) is zero and changes sign at each.',
    caption: 'Convex and concave sections of a curve and the inflection points where f″ changes sign.' },
  { name: '06-product-rule-area', after: '## Next steps', svg: productRule(),
    alt: 'A rectangle of width u and height v has area uv. When x increases a little, u grows by du and v by dv, adding a strip of area v du on the right, a strip u dv on the top, and a tiny corner du dv which vanishes in the limit. So the change in uv is v du + u dv, giving (uv)′ = u′v + uv′. Example: y = x cubed times e to the 2x at x = 1 has gradient 3e squared + 2e squared = 5e squared, about 36.9.',
    caption: 'Why the product rule has two terms: the rectangle area uv grows by v du + u dv.' },
];
