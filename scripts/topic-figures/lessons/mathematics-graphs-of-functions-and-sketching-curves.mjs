// Board-neutral redraws of three curve-sketching figures first drawn for Cambridge IGCSE 0580 and reused
// on AQA, OCR, Edexcel, OxfordAQA and IB MYP pages. Same curves and labelled points; the "Extended" tier
// pill is removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'mathematics-graphs-of-functions-and-sketching-curves';
const W = 900;
// ---------- graph helper (local to this module) ----------
const GRID = '#dfe6e6', ORANGE = C.rust, BLUE = '#2a7891', GREEN = C.tealDark, GOLD = C.olive;
const sup = (s) => `<tspan baseline-shift="super" font-size="68%">${s}</tspan>`;
const sub = (s) => `<tspan baseline-shift="sub" font-size="68%">${s}</tspan>`;
let clipN = 0;
// Plot frame: o = { x, y, w, h, xr:[a,b], yr:[a,b], xt:[ticks], yt:[ticks], xl, yl, ox, oy, xfmt, yfmt, grid, noZero }
function plot(o) {
  const { x, y, w, h } = o, [xa, xb] = o.xr, [ya, yb] = o.yr;
  const X = (v) => x + ((v - xa) / (xb - xa)) * w;
  const Y = (v) => y + h - ((v - ya) / (yb - ya)) * h;
  const id = `clip${++clipN}`;
  const xt = o.xt || [], yt = o.yt || [], xf = o.xfmt || ((v) => String(v).replace('-', '−')), yf = o.yfmt || ((v) => String(v).replace('-', '−'));
  const ox = o.ox ?? (xa <= 0 && xb >= 0 ? 0 : xa), oy = o.oy ?? (ya <= 0 && yb >= 0 ? 0 : ya);
  const AX = X(ox), AY = Y(oy);
  const s = [`<clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}"/></clipPath>`];
  if (o.grid !== false) {
    for (const v of xt) s.push(`<line x1="${X(v)}" y1="${y}" x2="${X(v)}" y2="${y + h}" stroke="${GRID}" stroke-width="1.5"/>`);
    for (const v of yt) s.push(`<line x1="${x}" y1="${Y(v)}" x2="${x + w}" y2="${Y(v)}" stroke="${GRID}" stroke-width="1.5"/>`);
  }
  s.push(`<line x1="${x}" y1="${AY}" x2="${x + w + 20}" y2="${AY}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>`);
  s.push(`<line x1="${AX}" y1="${y + h}" x2="${AX}" y2="${y - 20}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>`);
  if (o.xl) s.push(t(x + w + 30, AY + 7, o.xl, { size: 20, weight: 700 }));
  if (o.yl) s.push(t(AX + 14, y - 8, o.yl, { size: 20, weight: 700 }));
  for (const v of xt) {
    if (v === ox && o.noZero) continue;
    s.push(`<line x1="${X(v)}" y1="${AY - 6}" x2="${X(v)}" y2="${AY + 6}" stroke="${C.ink}" stroke-width="2.5"/>`);
    s.push(t(X(v) + (v === ox ? -10 : 0), AY + 28, xf(v), { size: 17, fill: C.muted, anchor: v === ox ? 'end' : 'middle' }));
  }
  for (const v of yt) {
    if (v === oy) continue;
    s.push(`<line x1="${AX - 6}" y1="${Y(v)}" x2="${AX + 6}" y2="${Y(v)}" stroke="${C.ink}" stroke-width="2.5"/>`);
    s.push(t(AX - 12, Y(v) + 6, yf(v), { size: 17, fill: C.muted, anchor: 'end' }));
  }
  const pts = (f, a, b, n = 240) => Array.from({ length: n + 1 }, (_, i) => { const u = a + ((b - a) * i) / n; return [X(u), Y(f(u))]; });
  const P = {
    X, Y, AX, AY, svg: s.join(''),
    curve: (f, a, b, { color = C.ink, w = 4, dash = '' } = {}) =>
      `<path clip-path="url(#${id})" d="M${pts(f, a, b).map(([p, q]) => `${p.toFixed(1)} ${Math.max(-5000, Math.min(5000, q)).toFixed(1)}`).join(' L')}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`,
    area: (f, a, b, fill) => `<path clip-path="url(#${id})" d="M${X(a)} ${AY} L${pts(f, a, b).map(([p, q]) => `${p.toFixed(1)} ${q.toFixed(1)}`).join(' L')} L${X(b)} ${AY} Z" fill="${fill}"/>`,
    seg: (a, b, c, d, { color = C.ink, w = 3, dash = '' } = {}) =>
      `<line clip-path="url(#${id})" x1="${X(a)}" y1="${Y(b)}" x2="${X(c)}" y2="${Y(d)}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`,
    dot: (a, b, fill = C.mustard, r = 9) => `<circle cx="${X(a)}" cy="${Y(b)}" r="${r}" fill="${fill}" stroke="#ffffff" stroke-width="3"/>`,
  };
  return P;
}
const dash = (x1, y1, x2, y2, color = C.ink, w = 2.5) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-dasharray="8 6"/>`;
const ln = (x1, y1, x2, y2, color = C.ink, w = 3) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"/>`;
const box = (x, y, w, h, fill = C.cream, edge = C.olive) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
const pillT = (x, cy, w, label, fill = C.ink) => `<rect x="${x}" y="${cy - 20}" width="${w}" height="40" rx="20" fill="${fill}"/>` + t(x + w / 2, cy + 7, label, { size: 20, weight: 700, fill: '#ffffff', anchor: 'middle' });
const hollow = (x, y, c = GREEN) => `<circle cx="${x}" cy="${y}" r="10" fill="#ffffff" stroke="${c}" stroke-width="3.5"/>`;
const solid = (x, y, c = ORANGE) => `<circle cx="${x}" cy="${y}" r="12" fill="${c}"/>`;
const ax = (s) => `<tspan font-style="italic">${s}</tspan>`;
const vdash = (x, y1, y2) => `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${GOLD}" stroke-width="3" stroke-dasharray="10 7"/>`;
const hdash = (x1, x2, y) => `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${GOLD}" stroke-width="3" stroke-dasharray="10 7"/>`;

// ---------- 04 quadratic ----------
function quadratic() {
  const o = [];
  const p = plot({ x: 60, y: 160, w: 780, h: 830, xr: [-7.5, 5.5], yr: [-18.5, 9], grid: false, xl: ax('x'), yl: ax('y') });
  const f = (x) => x * x + 2 * x - 15;
  o.push(vdash(p.X(-1), p.Y(8), p.Y(-18.5)));
  o.push(t(p.X(-1) - 14, p.Y(7.2), 'x = −1', { size: 19, weight: 700, fill: GOLD, anchor: 'end' }));
  o.push(p.svg);
  o.push(p.curve(f, -6.2, 4.2, { color: GREEN, w: 4.5 }));
  o.push(solid(p.X(-5), p.Y(0)), solid(p.X(3), p.Y(0)), solid(p.X(0), p.Y(-15)), hollow(p.X(-1), p.Y(-16)));
  o.push(t(p.X(-5) - 14, p.Y(0) - 18, '(−5, 0)', { size: 20, weight: 700, fill: ORANGE, anchor: 'end' }));
  o.push(t(p.X(3) + 14, p.Y(0) - 18, '(3, 0)', { size: 20, weight: 700, fill: ORANGE }));
  o.push(t(p.X(0) + 20, p.Y(-15) + 7, '(0, −15)', { size: 20, weight: 700, fill: ORANGE }));
  o.push(t(p.X(-1) - 14, p.Y(-16) + 40, '(−1, −16)', { size: 20, weight: 700, fill: GREEN, anchor: 'end' }));
  o.push(pillT(40, 1050, 326, 'U-shape: x² is positive'));
  o.push(pillT(40, 1104, 470, '(x + 5)(x − 3) = 0 gives the roots'));
  return svg(W, 1150, 'Sketch y = x² + 2x − 15', o.join('\n'), 'Shape, roots, y-intercept, symmetry');
}

// ---------- 05 cubic ----------
function cubic() {
  const o = [];
  const p = plot({ x: 70, y: 160, w: 690, h: 720, xr: [-1, 4.3], yr: [-4.7, 6.2], grid: false, xl: ax('x'), yl: ax('y') });
  const f = (x) => x ** 3 - 4 * x * x + 3 * x;
  o.push(p.svg);
  o.push(p.curve(f, -0.74, 3.52, { color: GREEN, w: 4.5 }));
  const a = (4 - Math.sqrt(7)) / 3, b = (4 + Math.sqrt(7)) / 3;
  o.push(hollow(p.X(a), p.Y(f(a))), hollow(p.X(b), p.Y(f(b))));
  o.push(solid(p.X(0), p.Y(0)), solid(p.X(1), p.Y(0)), solid(p.X(3), p.Y(0)));
  o.push(t(p.X(0) + 22, p.Y(0) + 40, '0', { size: 20, weight: 700, fill: ORANGE, anchor: 'middle' }), t(p.X(1), p.Y(0) + 40, '1', { size: 20, weight: 700, fill: ORANGE, anchor: 'middle' }), t(p.X(3) + 20, p.Y(0) + 40, '3', { size: 20, weight: 700, fill: ORANGE, anchor: 'middle' }));
  o.push(t(p.X(a) + 48, p.Y(f(a)) - 26, 'turning point', { size: 20, weight: 700, fill: GREEN, anchor: 'middle' }));
  o.push(t(p.X(b), p.Y(f(b)) + 44, 'turning point', { size: 20, weight: 700, fill: GREEN, anchor: 'middle' }));
  o.push(t(W / 2, 934, 'x(x − 1)(x − 3) = 0', { size: 23, weight: 700, anchor: 'middle' }));
  o.push(pillT(100, 980, 470, 'x³ is positive: rises to the right'));
  return svg(W, 1030, 'Sketch y = x³ − 4x² + 3x', o.join('\n'), 'Roots at x = 0, 1, 3');
}

// ---------- 06 asymptotes ----------
function asymptotes() {
  const o = [];
  o.push(t(60, 186, '(a) y = 2/x + 1', { size: 23, weight: 700 }));
  const p = plot({ x: 60, y: 150, w: 780, h: 420, xr: [-6.5, 6.5], yr: [-4.3, 7], grid: false, xl: ax('x'), yl: ax('y') });
  const f = (x) => 2 / x + 1;
  o.push(p.svg);
  o.push(hdash(60, 840, p.Y(1)), vdash(p.X(0), p.Y(7), p.Y(-4.3)));
  o.push(p.curve(f, -6.5, -0.38, { color: GREEN, w: 4.5 }), p.curve(f, 0.33, 6.5, { color: GREEN, w: 4.5 }));
  o.push(solid(p.X(-2), p.Y(0)));
  o.push(t(64, p.Y(1) - 14, 'y = 1', { size: 19, weight: 700, fill: GOLD }));
  o.push(t(p.X(0) - 14, p.Y(6), 'x = 0', { size: 19, weight: 700, fill: GOLD, anchor: 'end' }));
  o.push(t(p.X(-2) - 10, p.Y(0) + 44, '(−2, 0)', { size: 20, weight: 700, fill: ORANGE, anchor: 'middle' }));
  o.push(t(60, 676, '(b) y = 3 × 2ˣ − 6', { size: 23, weight: 700 }));
  const q = plot({ x: 90, y: 700, w: 700, h: 460, xr: [-4.5, 4.3], yr: [-7.6, 9], grid: false, xl: ax('x'), yl: ax('y') });
  const g = (x) => 3 * 2 ** x - 6;
  o.push(q.svg);
  o.push(hdash(90, 790, q.Y(-6)));
  o.push(q.curve(g, -4.5, 2.25, { color: GREEN, w: 4.5 }));
  o.push(solid(q.X(1), q.Y(0)), solid(q.X(0), q.Y(-3)));
  o.push(t(q.X(1) + 16, q.Y(0) + 42, '(1, 0)', { size: 20, weight: 700, fill: ORANGE }));
  o.push(t(q.X(0) + 18, q.Y(-3) + 40, '(0, −3)', { size: 20, weight: 700, fill: ORANGE }));
  o.push(t(104, q.Y(-6) + 34, 'y = −6', { size: 19, weight: 700, fill: GOLD }));
  return svg(W, 1200, 'Curves that never touch a line', o.join('\n'), 'Dashed lines are asymptotes');
}

export const figures = [
  { name: '04-sketch-quadratic', after: '## Quadratic graphs: roots, intercepts, turning points (A11)', svg: quadratic(),
    alt: 'A sketch of y = x² + 2x − 15: a U-shape crossing the x-axis at (−5, 0) and (3, 0) and the y-axis at (0, −15), symmetrical about x = −1. The turning point (−1, −16), from completing the square, is an extra step beyond the sketch.',
    caption: 'A sketch shows shape, roots, y-intercept and symmetry; the turning point is an extra.' },
  { name: '06-asymptotes', after: '## Recognising and sketching graphs (A12)', svg: asymptotes(),
    alt: 'Two sketches with dashed asymptotes. y = 2/x + 1 has asymptotes x = 0 and y = 1 and crosses the x-axis at (−2, 0). y = 3 × 2ˣ − 6 has asymptote y = −6, y-intercept (0, −3) and root x = 1.',
    caption: 'Reciprocal and exponential curves approach their asymptotes but never cross or touch them.' },
  { name: '05-sketch-cubic', after: '## Recognising and sketching graphs (A12)', svg: cubic(),
    alt: 'Sketch of y = x³ − 4x² + 3x = x(x − 1)(x − 3). The curve crosses the x-axis at 0, 1 and 3, coming up from bottom left, turning twice, and rising to top right because the x³ coefficient is positive.',
    caption: 'Factorise a cubic to find its roots, then follow the rise, turn, fall, turn, rise.' },
];
