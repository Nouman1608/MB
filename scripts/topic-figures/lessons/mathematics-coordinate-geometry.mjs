// Board-neutral redraws of three coordinate-geometry figures first drawn for Cambridge IGCSE 0580 and
// reused on AQA, OCR, Edexcel and IB MYP pages. Same points, gradients and working; the "Extended" tier
// pill is removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'mathematics-coordinate-geometry';
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
    s.push(t((o.yEdge ? x : AX) - 12, Y(v) + 6, yf(v), { size: 17, fill: C.muted, anchor: 'end' }));
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
const ax = (s) => `<tspan font-style="italic">${s}</tspan>`;
const pillT = (cx, cy, w, label, fill, size = 20) => `<rect x="${cx - w / 2}" y="${cy - 21}" width="${w}" height="42" rx="21" fill="${fill}"/>` + t(cx, cy + 7, label, { size, weight: 700, fill: '#ffffff', anchor: 'middle' });
const rng = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const big = (x, y, fill) => `<circle cx="${x}" cy="${y}" r="13" fill="${fill}"/>`;

// ---------- 03 length and midpoint ----------
function lengthMidpoint() {
  const o = [];
  const p = plot({ x: 50, y: 160, w: 700, h: 630, xr: [-3, 7], yr: [-1, 8], xt: rng(-3, 7), yt: rng(-1, 8), xl: ax('x'), yl: ax('y'), noZero: true, yEdge: true });
  o.push(p.svg);
  o.push(`<polygon points="${p.X(-2)},${p.Y(1)} ${p.X(6)},${p.Y(7)} ${p.X(6)},${p.Y(1)}" fill="${C.tealDark}" fill-opacity="0.1"/>`);
  o.push(p.seg(2, 4, 2, 1, { color: GOLD, w: 2.5, dash: '8 6' }), p.seg(2, 4, 6, 4, { color: GOLD, w: 2.5, dash: '8 6' }));
  o.push(p.seg(-2, 1, 6, 1, { color: ORANGE, w: 3.5 }), p.seg(6, 1, 6, 7, { color: ORANGE, w: 3.5 }));
  o.push(`<path d="M${p.X(6) - 18} ${p.Y(1)} V${p.Y(1) - 18} H${p.X(6)}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(p.seg(-2, 1, 6, 7, { color: C.ink, w: 5 }));
  o.push(big(p.X(-2), p.Y(1), C.ink), big(p.X(6), p.Y(7), C.ink), big(p.X(2), p.Y(4), C.olive));
  o.push(t(p.X(-2) + 14, p.Y(1) - 24, 'A (−2, 1)', { size: 20, weight: 700, anchor: 'end' }));
  o.push(t(p.X(6) - 14, p.Y(7) - 22, 'B (6, 7)', { size: 20, weight: 700, anchor: 'end' }));
  o.push(t(p.X(2) - 20, p.Y(4) - 22, 'M (2, 4)', { size: 20, weight: 700, fill: GOLD, anchor: 'end' }));
  o.push(t(p.X(6) + 18, p.Y(2.5), 'up 6', { size: 20, weight: 700, fill: ORANGE }));
  o.push(t(p.X(2.8), p.Y(1) + 38, 'across 8', { size: 20, weight: 700, fill: ORANGE, anchor: 'middle' }));
  o.push(pillT(W / 2, 860, 400, 'length = √(8² + 6²) = √100 = 10', C.tealDark));
  o.push(pillT(W / 2, 912, 548, 'M = ((−2 + 6) ÷ 2, (1 + 7) ÷ 2) = (2, 4)', C.olive));
  return svg(W, 950, 'Length and midpoint', o.join('\n'), 'Pythagoras on the coordinate grid');
}

// ---------- 06 perpendicular lines ----------
function perpendicularLines() {
  const o = [];
  const p = plot({ x: 110, y: 150, w: 608, h: 608, xr: [-3, 5], yr: [-3, 5], xt: rng(-3, 5), yt: rng(-3, 5), xl: ax('x'), yl: ax('y'), noZero: true, yEdge: true });
  o.push(p.svg);
  o.push(p.curve((x) => 1 + (2 / 3) * x, -3, 5, { color: GREEN, w: 4 }));
  o.push(p.curve((x) => 1 - 1.5 * x, -3, 5, { color: ORANGE, w: 4 }));
  o.push(`<path d="M${p.X(-2)} ${p.Y(4)} H${p.X(0)} V${p.Y(1)}" fill="none" stroke="${ORANGE}" stroke-width="4"/>`);
  o.push(`<path d="M${p.X(0)} ${p.Y(1)} H${p.X(3)} V${p.Y(3)}" fill="none" stroke="${GREEN}" stroke-width="4"/>`);
  // right-angle mark between the two lines at (0, 1)
  const u1 = [3, 2], u2 = [-2, 3], n1 = Math.hypot(...u1), s = 0.32;
  const P0 = [0, 1], Pa = [P0[0] + (u1[0] / n1) * s, P0[1] + (u1[1] / n1) * s], Pb = [P0[0] + (u2[0] / n1) * s, P0[1] + (u2[1] / n1) * s], Pc = [Pa[0] + Pb[0] - P0[0], Pa[1] + Pb[1] - P0[1]];
  o.push(`<path d="M${p.X(Pa[0])} ${p.Y(Pa[1])} L${p.X(Pc[0])} ${p.Y(Pc[1])} L${p.X(Pb[0])} ${p.Y(Pb[1])}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(big(p.X(0), p.Y(1), C.ink));
  o.push(t(p.X(-1), p.Y(4) - 16, 'across 2', { size: 20, weight: 700, fill: ORANGE, anchor: 'middle' }));
  o.push(t(p.X(0) + 14, p.Y(2.5) + 6, 'down 3', { size: 20, weight: 700, fill: ORANGE }));
  o.push(t(p.X(1.5), p.Y(1) + 38, 'across 3', { size: 20, weight: 700, fill: GREEN, anchor: 'middle' }));
  o.push(t(p.X(3) + 14, p.Y(2) + 6, 'up 2', { size: 20, weight: 700, fill: GREEN }));
  o.push(t(W / 2, 836, `<tspan fill="${GREEN}">2/3</tspan> × <tspan fill="${ORANGE}">−3/2</tspan> = −1`, { size: 34, weight: 700, anchor: 'middle' }));
  o.push(pillT(W / 2, 896, 470, 'Flip the fraction, change the sign', C.olive));
  return svg(W, 940, 'Perpendicular: negative reciprocal', o.join('\n'));
}

// ---------- 07 perpendicular bisector ----------
function perpBisector() {
  const o = [];
  const p = plot({ x: 80, y: 120, w: 728, h: 676, xr: [-4, 10], yr: [-3, 10], xt: [-4, -2, 2, 4, 6, 8, 10], yt: [-2, 2, 4, 6, 8, 10], xl: ax('x'), yl: ax('y'), grid: false, yEdge: true });
  for (let v = -4; v <= 10; v++) o.push(`<line x1="${p.X(v)}" y1="${p.Y(10)}" x2="${p.X(v)}" y2="${p.Y(-3)}" stroke="${GRID}" stroke-width="1.5"/>`);
  for (let v = -3; v <= 10; v++) o.push(`<line x1="${p.X(-4)}" y1="${p.Y(v)}" x2="${p.X(10)}" y2="${p.Y(v)}" stroke="${GRID}" stroke-width="1.5"/>`);
  o.push(p.svg);
  o.push(p.curve((x) => 1.2 * x - 0.6, -4, 10, { color: GOLD, w: 4 }));
  o.push(p.seg(-3, 8, 9, -2, { color: C.ink, w: 4.5 }));
  // equal-length tick marks on AM and MB
  for (const [x, y] of [[0, 5.5], [6, 0.5]]) { const dx = 5 / Math.hypot(5, 6) * 0.35, dy = 6 / Math.hypot(5, 6) * 0.35; o.push(p.seg(x - dx * 1, y - dy * 1, x + dx * 1, y + dy * 1, { color: C.ink, w: 3 })); }
  // right-angle mark at M
  const M = [3, 3], u = [6 / Math.hypot(6, 5), 5 / Math.hypot(6, 5)], v = [6 / Math.hypot(6, 5), -5 / Math.hypot(6, 5)], s = 0.45;
  o.push(`<path d="M${p.X(M[0] + u[0] * s)} ${p.Y(M[1] + u[1] * s)} L${p.X(M[0] + (u[0] + v[0]) * s)} ${p.Y(M[1] + (u[1] + v[1]) * s)} L${p.X(M[0] + v[0] * s)} ${p.Y(M[1] + v[1] * s)}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(big(p.X(-3), p.Y(8), C.ink), big(p.X(9), p.Y(-2), C.ink), big(p.X(3), p.Y(3), C.olive));
  o.push(t(p.X(-3) + 20, p.Y(8) - 18, 'A (−3, 8)', { size: 20, weight: 700 }));
  o.push(t(p.X(9) - 12, p.Y(-2) + 40, 'B (9, −2)', { size: 20, weight: 700, anchor: 'end' }));
  o.push(t(p.X(3) + 40, p.Y(3) + 8, 'M (3, 3)', { size: 20, weight: 700, fill: GOLD }));
  o.push(pillT(188, 882, 314, '1 Gradient of AB: −5/6', C.ink), pillT(675, 882, 278, '2 Perpendicular: 6/5', C.tealDark));
  o.push(pillT(176, 934, 290, '3 Midpoint M: (3, 3)', C.olive), pillT(675, 934, 390, '4 3 = (6/5)(3) + c, c = −3/5', C.rust));
  o.push(t(W / 2, 1006, 'y = 6/5 x − 3/5', { size: 34, weight: 700, anchor: 'middle' }));
  return svg(W, 1040, 'Perpendicular bisector', o.join('\n'));
}

export const figures = [
  { name: '06-perpendicular-lines', after: '## Inquiry questions (Table 4)', svg: perpendicularLines(),
    alt: 'Two lines meet at right angles at (0, 1). One has gradient 2/3 and the other -3/2; their product is -1.',
    caption: 'Perpendicular gradients multiply to -1.' },
  { name: '03-length-midpoint', after: '## Key formulae', svg: lengthMidpoint(),
    alt: 'A line from A (-2, 1) to B (6, 7) forms a right triangle 8 across and 6 up, so its length is 10. The midpoint is the average of the coordinates, (2, 4).',
    caption: 'Length uses Pythagoras; the midpoint averages the coordinates.' },
  { name: '07-perpendicular-bisector', after: '## Methods in steps', svg: perpBisector(),
    alt: 'AB joins (-3, 8) and (9, -2) with gradient -5/6. The bisector has gradient 6/5 and passes through M (3, 3), giving y = 6/5 x - 3/5.',
    caption: 'Combine gradient, perpendicular rule, midpoint and y = mx + c.' },
];
