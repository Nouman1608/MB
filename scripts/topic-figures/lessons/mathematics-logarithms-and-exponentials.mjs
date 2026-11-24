// Board-neutral redraws of nine logarithm and exponential figures first drawn for Cambridge 9709 P2
// and reused on AQA, Edexcel, OCR and OxfordAQA pages. Same graphs, numbers and labels as before,
// with the "All boards" / "Calculus: AQA, Edexcel, OCR" pills removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'mathematics-logarithms-and-exponentials';
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

// ---------- 01 e^x and ln x ----------
function inverseGraphs() {
  const o = [];
  const p = plot({ x: 110, y: 140, w: 700, h: 700, xr: [-2, 5], yr: [-2, 5], xt: [-2, -1, 0, 1, 2, 3, 4, 5], yt: [-2, -1, 1, 2, 3, 4, 5], xl: 'x', yl: 'y' });
  o.push(p.svg);
  o.push(p.seg(-2, -2, 5, 5, { color: C.muted, w: 2.5, dash: '10 8' }));
  o.push(t(p.X(3.05), p.Y(4.85), 'y = x', { size: 19, weight: 700, fill: C.muted }));
  o.push(p.curve(Math.exp, -2, 1.75, { color: ORANGE, w: 4.5 }));
  o.push(p.curve(Math.log, 0.12, 5, { color: BLUE, w: 4.5 }));
  o.push(t(p.X(1.75), p.Y(4.35), `y = e${sup('x')}`, { size: 22, weight: 700, fill: ORANGE }));
  o.push(t(p.X(4.95), p.Y(1.92), 'y = ln x', { size: 22, weight: 700, fill: BLUE, anchor: 'end' }));
  o.push(arrow(p.X(1) + 12, p.Y(Math.E) + 8, p.X(Math.E) - 14, p.Y(1) - 12, { color: GOLD, marker: 'ahO' }));
  o.push(p.dot(1, Math.E, ORANGE), p.dot(0, 1, ORANGE), p.dot(Math.E, 1, BLUE), p.dot(1, 0, BLUE));
  o.push(t(p.X(1) - 16, p.Y(Math.E) - 8, '(1, e)', { size: 19, weight: 700, fill: ORANGE, anchor: 'end' }));
  o.push(t(p.X(0) - 16, p.Y(1) - 18, '(0, 1)', { size: 19, weight: 700, fill: ORANGE, anchor: 'end' }));
  o.push(t(p.X(Math.E) + 12, p.Y(1) + 36, '(e, 1)', { size: 19, weight: 700, fill: BLUE }));
  o.push(ln(p.X(1) + 6, p.Y(0) + 8, p.X(1.3), p.Y(-0.55), BLUE, 2));
  o.push(t(p.X(1.33), p.Y(-0.72), '(1, 0)', { size: 19, weight: 700, fill: BLUE }));
  o.push(tl(p.X(-1.95), p.Y(0.85), ['asymptote', 'y = 0'], { size: 17, fill: ORANGE }, 24));
  o.push(tl(p.X(-0.2), p.Y(4.75), ['asymptote', 'x = 0'], { size: 17, fill: BLUE, anchor: 'end' }, 24));
  return svg(W, 880, `e${sup('x')} and ln x are mirror images`, o.join('\n'), 'Reflect in the line y = x');
}

// ---------- 02 family a^x ----------
function baseFamily() {
  const o = [];
  const p = plot({ x: 100, y: 140, w: 700, h: 600, xr: [-3, 3], yr: [0, 9], xt: [-3, -2, -1, 0, 1, 2, 3], yt: [3, 6, 9], xl: 'x', yl: 'y' });
  o.push(p.svg);
  o.push(p.curve((x) => 0.5 ** x, -3, 3, { color: BLUE, w: 4, dash: '14 10' }));
  o.push(p.curve((x) => 2 ** x, -3, 3, { color: C.ink, w: 4 }));
  o.push(p.curve(Math.exp, -3, 2.3, { color: ORANGE, w: 4 }));
  o.push(p.curve((x) => 3 ** x, -3, 2.1, { color: GREEN, w: 4 }));
  o.push(p.dot(0, 1, C.olive, 10));
  o.push(t(p.X(1.92), p.Y(8.85), `3${sup('x')}`, { size: 22, weight: 700, fill: GREEN, anchor: 'end' }));
  o.push(t(p.X(2.3), p.Y(8.85), `e${sup('x')}`, { size: 22, weight: 700, fill: ORANGE }));
  o.push(t(p.X(3.08), p.Y(7.85), `2${sup('x')}`, { size: 22, weight: 700, fill: C.ink }));
  o.push(t(p.X(-2.7), p.Y(8.6), `(½)${sup('x')}`, { size: 22, weight: 700, fill: BLUE }));
  o.push(t(p.X(-1.8), p.Y(4.9), 'a &lt; 1: decay', { size: 20, weight: 700, fill: BLUE }));
  o.push(t(p.X(1.3), p.Y(1.45), 'a &gt; 1: growth', { size: 20, weight: 700, fill: C.ink }));
  o.push(ln(p.X(-0.08), p.Y(1.3), p.X(-0.14), p.Y(2.1), C.olive, 2));
  o.push(t(p.X(-0.35), p.Y(2.3), '(0, 1)', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(W / 2, 812, 'e ≈ 2.718 lies between 2 and 3', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(W / 2, 844, `(½)${sup('x')} is 2${sup('x')} reflected in the y-axis`, { size: 18, fill: C.muted, anchor: 'middle' }));
  o.push(t(W / 2, 874, 'Asymptote: the x-axis, y = 0', { size: 18, fill: C.muted, anchor: 'middle' }));
  return svg(W, 910, `The family of curves a${sup('x')}`, o.join('\n'), 'Every curve passes through (0, 1)');
}

// ---------- 03 gradient of e^kx ----------
function gradientEkx() {
  const o = [];
  const p = plot({ x: 100, y: 140, w: 700, h: 600, xr: [-1.2, 1.2], yr: [0, 7], xt: [-1, 0, 1], yt: [2, 4, 6], xl: 'x', yl: 'y' });
  o.push(p.svg);
  const h = Math.exp(1.2);
  o.push(p.curve((x) => 1 + 2 * x, -0.45, 0.45, { color: GREEN, w: 3 }));
  o.push(p.curve((x) => h + 2 * h * (x - 0.6), 0.1, 1.15, { color: GREEN, w: 3 }));
  o.push(p.curve((x) => Math.exp(2 * x), -1.2, 0.98, { color: ORANGE, w: 4.5 }));
  // run/rise triangle from (0.6, h) to (1, h + 2.66)
  o.push(`<path d="M${p.X(0.6)} ${p.Y(h)} H${p.X(1)} V${p.Y(h + 2 * h * 0.4)}" fill="none" stroke="${GOLD}" stroke-width="3"/>`);
  o.push(t(p.X(0.8), p.Y(h) + 28, 'run 0.4', { size: 18, weight: 700, fill: GOLD, anchor: 'middle' }));
  o.push(t(p.X(1) + 12, p.Y(h + 1.33) + 6, 'rise 2.66', { size: 18, weight: 700, fill: GOLD }));
  o.push(p.dot(0, 1), p.dot(0.6, h));
  o.push(t(p.X(-0.12), p.Y(1.75), 'height 1', { size: 19, weight: 700, fill: GOLD, anchor: 'end' }));
  o.push(t(p.X(-0.12), p.Y(1.75) + 26, 'gradient 2', { size: 19, weight: 700, fill: GREEN, anchor: 'end' }));
  o.push(t(p.X(0.72), p.Y(h) + 72, 'height 3.32', { size: 19, weight: 700, fill: GOLD }));
  o.push(t(p.X(0.72), p.Y(h) + 98, 'gradient 6.64', { size: 19, weight: 700, fill: GREEN }));
  o.push(t(p.X(-1.12), p.Y(5.85), `y = e${sup('2x')}`, { size: 24, weight: 700, fill: ORANGE }));
  o.push(box(120, 790, 660, 116));
  o.push(t(W / 2, 836, 'dy/dx = k y', { size: 28, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(W / 2, 874, 'Growth rate is proportional to the amount', { size: 19, weight: 700, anchor: 'middle' }));
  return svg(W, 940, `The gradient of e${sup('kx')} is k e${sup('kx')}`, o.join('\n'), 'Gradient = k × height');
}

// ---------- 04 log ruler ----------
function logRuler() {
  const o = [];
  const R = (v) => 90 + 700 * Math.log10(v);
  const y0 = 180;
  o.push(ln(R(1), y0, R(10), y0, C.ink, 4));
  for (let v = 1; v <= 10; v++) {
    o.push(ln(R(v), y0 - 12, R(v), y0 + 12, C.ink, 3));
    o.push(t(R(v), y0 - 22, String(v), { size: 19, weight: 700, anchor: 'middle' }));
  }
  const bar = (a, b, y, label, fill, edge, col) =>
    `<rect x="${R(a)}" y="${y}" width="${R(b) - R(a)}" height="54" rx="8" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` +
    t((R(a) + R(b)) / 2, y + 34, label, { size: 19, weight: 700, fill: col, anchor: 'middle' });
  const tealBar = (a, b, y, l) => bar(a, b, y, l, C.tealLight, C.tealDark, C.tealDark);
  const goldBar = (a, b, y, l) => bar(a, b, y, l, C.cream, C.olive, C.olive);
  const rows = [
    [250, () => tealBar(1, 2, 250, 'lg 2') + goldBar(2, 6, 250, 'lg 3'), 6, 'lg 2 + lg 3 = lg 6'],
    [410, () => tealBar(1, 2, 410, 'lg 2') + goldBar(2, 8, 410, 'lg 8 − lg 2'), 8, 'lg 8 − lg 2 = lg 4'],
    [570, () => tealBar(1, 3, 570, 'lg 3') + tealBar(3, 9, 570, 'lg 3'), 9, `2 lg 3 = lg 3${sup('2')} = lg 9`],
  ];
  for (const [y, draw, end, eq] of rows) {
    o.push(`<line x1="${R(end)}" y1="${y0 + 14}" x2="${R(end)}" y2="${y}" stroke="${C.muted}" stroke-width="1.8" stroke-dasharray="6 5"/>`);
    o.push(draw());
    o.push(t(W / 2, y + 104, eq, { size: 25, weight: 700, anchor: 'middle' }));
  }
  o.push(box(120, 730, 660, 74, '#ffffff', C.rust));
  o.push(t(W / 2, 776, 'lg x is the length from 1 to x', { size: 22, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(W / 2, 842, 'Needs a positive input and the same base', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 880, 'Logs turn × into +', o.join('\n'), 'Lengths on a log ruler add');
}

// ---------- 05 unknown in the power ----------
function solveIndex() {
  const o = [];
  const p = plot({ x: 110, y: 130, w: 680, h: 330, xr: [0, 3], yr: [0, 130], xt: [0, 1, 2, 3], yt: [40, 80, 120] });
  o.push(p.svg);
  const xs = Math.log(40) / Math.log(5);
  o.push(p.seg(0, 40, 3, 40, { color: ORANGE, w: 3.5 }));
  o.push(p.curve((x) => 5 ** x, 0, 3, { color: GREEN, w: 4.5 }));
  o.push(p.seg(xs, 40, xs, 0, { color: GOLD, w: 2.5, dash: '8 6' }));
  o.push(p.dot(xs, 40));
  o.push(t(p.X(0.1), p.Y(40) - 14, 'y = 40', { size: 19, weight: 700, fill: ORANGE }));
  o.push(t(p.X(1.0), p.Y(105), `5${sup('x')} = 40`, { size: 24, weight: 700, fill: GREEN, anchor: 'middle' }));
  o.push(t(p.X(1.0), p.Y(80), 'x = ln 40 ÷ ln 5', { size: 19, weight: 700, fill: C.muted, anchor: 'middle' }));
  o.push(t(p.X(xs), p.AY + 66, 'x = 2.29', { size: 21, weight: 700, fill: GOLD, anchor: 'middle' }));
  const q = plot({ x: 110, y: 600, w: 680, h: 300, xr: [3, 20], yr: [0, 0.45], xt: [5, 10, 15, 20], yt: [0.1, 0.2, 0.3, 0.4] });
  o.push(q.svg);
  o.push(q.seg(3, 0.05, 20, 0.05, { color: ORANGE, w: 3 }));
  for (let n = 4; n <= 20; n++) if (n !== 14) o.push(`<circle cx="${q.X(n)}" cy="${q.Y(0.8 ** n)}" r="7" fill="${n < 14 ? BLUE : GREEN}" stroke="#ffffff" stroke-width="2"/>`);
  o.push(`<circle cx="${q.X(14)}" cy="${q.Y(0.8 ** 14)}" r="12" fill="${C.olive}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(q.X(20), q.Y(0.05) - 12, '0.05', { size: 19, weight: 700, fill: ORANGE, anchor: 'end' }));
  o.push(t(q.X(11.6), q.Y(0.37), `0.8${sup('n')} &lt; 0.05`, { size: 24, weight: 700, fill: BLUE, anchor: 'middle' }));
  o.push(t(q.X(13.2), q.Y(0.205), 'ln 0.8 is negative,', { size: 19, weight: 700, fill: C.muted }));
  o.push(t(q.X(13.2), q.Y(0.205) + 26, 'so n &gt; 13.4', { size: 19, weight: 700, fill: C.muted }));
  o.push(t(q.X(15.8), q.Y(0.205) + 64, '(sign flips)', { size: 19, weight: 700, fill: ORANGE }));
  o.push(t(q.X(14), q.AY + 64, 'n = 14', { size: 21, weight: 700, fill: GOLD, anchor: 'middle' }));
  o.push(t(W / 2, 1020, 'Dividing by a negative log reverses &lt; to &gt;', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1060, 'Unknown in the power', o.join('\n'), 'Take logs of both sides');
}

// ---------- 06 hidden quadratic ----------
function hiddenQuadratic() {
  const o = [];
  const p = plot({ x: 110, y: 140, w: 680, h: 340, xr: [-1, 4], yr: [-0.8, 8], xt: [-1, 0, 1, 2, 3, 4], yt: [2, 4, 6, 8] });
  o.push(`<rect x="${p.X(-1)}" y="${p.Y(8)}" width="${p.X(0) - p.X(-1)}" height="${p.Y(-0.8) - p.Y(8)}" fill="#e7e3d4"/>`);
  o.push(p.svg);
  o.push(p.curve((u) => u * u - 5 * u + 6, -1, 4, { color: GREEN, w: 4.5 }));
  o.push(p.dot(2, 0), p.dot(3, 0));
  o.push(t(p.X(0.55), p.Y(7.2), `u${sup('2')} − 5u + 6`, { size: 22, weight: 700, fill: GREEN }));
  o.push(t(p.X(-0.5), p.Y(3.25), `e${sup('x')} &gt; 0:`, { size: 18, weight: 700, fill: GOLD, anchor: 'middle' }));
  o.push(t(p.X(-0.5), p.Y(3.25) + 25, 'no u &lt; 0', { size: 18, weight: 700, fill: GOLD, anchor: 'middle' }));
  o.push(t(p.X(2), p.Y(1.3), 'u = 2', { size: 19, weight: 700, fill: GOLD, anchor: 'middle' }));
  o.push(t(p.X(3), p.Y(1.3), 'u = 3', { size: 19, weight: 700, fill: GOLD, anchor: 'middle' }));
  // lower graph
  const q = plot({ x: 110, y: 620, w: 680, h: 300, xr: [-0.5, 1.5], yr: [-1, 4], xt: [-0.5, 0, 0.5, 1, 1.5], yt: [-1, 1, 2, 3, 4] });
  o.push(arrow(p.X(2), 530, q.X(Math.log(2)), 600, { color: GOLD, w: 4, marker: 'ahO' }));
  o.push(arrow(p.X(3), 530, q.X(Math.log(3)), 600, { color: GOLD, w: 4, marker: 'ahO' }));
  o.push(t(p.X(2) - 40, 572, 'x = ln u', { size: 20, weight: 700, fill: GOLD, anchor: 'end' }));
  o.push(q.svg);
  o.push(q.curve((x) => Math.exp(2 * x) - 5 * Math.exp(x) + 6, -0.5, 1.5, { color: ORANGE, w: 4.5 }));
  o.push(q.dot(Math.log(2), 0), q.dot(Math.log(3), 0));
  o.push(t(q.X(0.1), q.Y(3.55), `y = e${sup('2x')} − 5e${sup('x')} + 6`, { size: 22, weight: 700, fill: ORANGE }));
  o.push(t(q.X(Math.log(2)), q.Y(1.0), 'ln 2', { size: 19, weight: 700, fill: GOLD, anchor: 'middle' }));
  o.push(t(q.X(Math.log(3)), q.Y(1.0), 'ln 3', { size: 19, weight: 700, fill: GOLD, anchor: 'middle' }));
  o.push(t(W / 2, 1000, 'Solutions: x = ln 2 ≈ 0.693 and x = ln 3 ≈ 1.099', { size: 20, weight: 700, anchor: 'middle' }));
  return svg(W, 1040, 'A hidden quadratic', o.join('\n'), `e${sup('2x')} − 5e${sup('x')} + 6 = 0, let u = e${sup('x')}`);
}

// ---------- 07 straight lines from curves ----------
function linearForm() {
  const o = [];
  const p = plot({ x: 120, y: 130, w: 640, h: 300, xr: [0, 3], yr: [0, 6], xt: [0, 1, 2, 3], yt: [2, 4, 6], xl: 'ln x' });
  o.push(p.svg);
  o.push(t(60, p.Y(3), 'ln y', { size: 19, weight: 700, anchor: 'middle' }).replace('<text', `<text transform="rotate(-90 60 ${p.Y(3)})"`));
  o.push(p.curve((x) => 1.1 + 1.5 * x, 0, 3, { color: GREEN, w: 4.5 }));
  o.push(`<path d="M${p.X(0.5)} ${p.Y(1.85)} H${p.X(2.5)} V${p.Y(4.85)}" fill="none" stroke="${GOLD}" stroke-width="3"/>`);
  o.push(p.dot(0.5, 1.85, C.ink, 8), p.dot(2.5, 4.85, C.ink, 8), p.dot(0, 1.1, C.olive, 10));
  o.push(t(p.X(1.5), p.Y(1.85) + 30, 'run 2', { size: 19, weight: 700, fill: GOLD, anchor: 'middle' }));
  o.push(t(p.X(2.5) + 14, p.Y(3.35) + 6, 'rise 3', { size: 19, weight: 700, fill: GOLD }));
  o.push(t(p.X(0.1), p.Y(0.35), 'ln a = 1.10', { size: 19, weight: 700, fill: GOLD }));
  o.push(t(p.X(0.85), p.Y(4.4), 'gradient n = 1.5', { size: 20, weight: 700, fill: GREEN }));
  o.push(t(p.X(0.2), p.Y(5.4), `y = a x${sup('n')}`, { size: 23, weight: 700, fill: GREEN }));
  const q = plot({ x: 120, y: 580, w: 640, h: 300, xr: [0, 10], yr: [0, 2.5], xt: [0, 5, 10], yt: [0.5, 1.0, 1.5, 2.0, 2.5], xl: 'x', yfmt: (v) => v.toFixed(1) });
  o.push(q.svg);
  o.push(t(60, q.Y(1.25), 'lg y', { size: 19, weight: 700, anchor: 'middle' }).replace('<text', `<text transform="rotate(-90 60 ${q.Y(1.25)})"`));
  o.push(q.curve((x) => 0.7 + 0.14 * x, 0, 10, { color: BLUE, w: 4.5 }));
  o.push(q.dot(0, 0.7, C.olive, 10), q.dot(10, 2.1, C.ink, 8));
  o.push(t(q.X(0.3), q.Y(0.7) + 34, 'lg k = 0.70', { size: 19, weight: 700, fill: GOLD }));
  o.push(t(q.X(3.5), q.Y(0.55), 'gradient lg b = 0.14', { size: 20, weight: 700, fill: BLUE }));
  o.push(t(q.X(0.3), q.Y(2.25), `y = k b${sup('x')}`, { size: 23, weight: 700, fill: BLUE }));
  o.push(t(W / 2, 1000, 'Axis shows ln x: power law. Axis shows x: exponential.', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1040, 'Straight lines from curves', o.join('\n'), 'Take logs, read gradient and intercept');
}

// ---------- 08 ln x slope and area ----------
function lnCalculus() {
  const o = [];
  const p = plot({ x: 110, y: 140, w: 680, h: 330, xr: [0, 4], yr: [-1.6, 1.5], xt: [0, 1, 2, 3, 4], yt: [-1, 1], xl: 'x', yl: 'y' });
  o.push(p.svg);
  o.push(p.curve(Math.log, 0.2, 4, { color: BLUE, w: 4.5 }));
  o.push(p.curve((x) => Math.log(2) + (x - 2) / 2, 0.5, 3.8, { color: ORANGE, w: 3.5 }));
  o.push(p.dot(2, Math.log(2)));
  o.push(t(p.X(2.25), p.Y(Math.log(2)) + 22, 'at x = 2:', { size: 20, weight: 700, fill: ORANGE }));
  o.push(t(p.X(2.25), p.Y(Math.log(2)) + 48, 'gradient ½', { size: 20, weight: 700, fill: ORANGE }));
  o.push(t(p.X(0.5), p.Y(-1.05), 'y = ln x', { size: 22, weight: 700, fill: BLUE }));
  o.push(arrow(450, 500, 450, 566, { color: GOLD, w: 5, marker: 'ahO' }));
  o.push(t(472, 540, 'differentiate', { size: 19, weight: 700, fill: GOLD }));
  const q = plot({ x: 110, y: 610, w: 680, h: 330, xr: [0, 4], yr: [0, 3.2], xt: [0, 1, 2, 3, 4], yt: [1, 2, 3], xl: 'x', yl: 'y' });
  o.push(q.area((x) => 1 / x, 1, Math.E, C.cream));
  o.push(q.svg);
  o.push(q.seg(1, 0, 1, 1, { color: GOLD, w: 2.5 }), q.seg(Math.E, 0, Math.E, 1 / Math.E, { color: GOLD, w: 2.5 }));
  o.push(q.curve((x) => 1 / x, 0.3, 4, { color: GREEN, w: 4.5 }));
  o.push(t(q.X(Math.E), q.AY + 28, 'e', { size: 19, weight: 700, fill: GOLD, anchor: 'middle' }));
  o.push(t(q.X(1.85), q.Y(0.15), 'area = 1', { size: 21, weight: 700, fill: GOLD, anchor: 'middle' }));
  o.push(t(q.X(0.6), q.Y(2.6), 'y = 1/x', { size: 22, weight: 700, fill: GREEN }));
  o.push(t(q.X(2.55), q.Y(1.6), '∫ 1/x dx = ln x', { size: 20, weight: 700, fill: C.muted }));
  o.push(t(q.X(2.55), q.Y(1.6) + 28, 'from 1 to e: ln e − ln 1 = 1', { size: 18, weight: 700, fill: C.muted }));
  return svg(W, 1000, 'ln x: slope and area', o.join('\n'), 'The slope of ln x is 1/x');
}

// ---------- 09 decay and half-life ----------
function decayHalfLife() {
  const o = [];
  const p = plot({ x: 120, y: 140, w: 680, h: 560, xr: [0, 16], yr: [0, 16.5], xt: [0, 4, 8, 12, 16], yt: [5, 10, 15] });
  o.push(p.svg);
  o.push(t(p.X(8), p.AY + 66, 'Time t (hours)', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(t(56, p.Y(8), 'C (mg/L)', { size: 20, weight: 700, anchor: 'middle' }).replace('<text', `<text transform="rotate(-90 56 ${p.Y(8)})"`));
  const k = 0.2, h = Math.log(2) / k, t2 = 5 * Math.log(7.5);
  o.push(p.seg(0, 7.5, h, 7.5, { color: GREEN, w: 2.5, dash: '8 6' }), p.seg(h, 7.5, h, 0, { color: GREEN, w: 2.5, dash: '8 6' }));
  o.push(p.seg(h, 3.75, 2 * h, 3.75, { color: GREEN, w: 2.5, dash: '8 6' }), p.seg(2 * h, 3.75, 2 * h, 0, { color: GREEN, w: 2.5, dash: '8 6' }));
  o.push(p.seg(0, 2, t2, 2, { color: GOLD, w: 2.5, dash: '8 6' }), p.seg(t2, 2, t2, 0, { color: GOLD, w: 2.5, dash: '8 6' }));
  o.push(p.curve((x) => 15 * Math.exp(-k * x), 0, 16, { color: ORANGE, w: 4.5 }));
  o.push(arrow(p.X(0) + 4, p.Y(0.7), p.X(h) - 4, p.Y(0.7), { color: GREEN, w: 3, marker: 'ahT' }));
  o.push(arrow(p.X(h) + 4, p.Y(0.7), p.X(2 * h) - 4, p.Y(0.7), { color: GREEN, w: 3, marker: 'ahT' }));
  o.push(t(p.X(h / 2), p.Y(0.7) - 12, '3.47 h', { size: 18, weight: 700, fill: GREEN, anchor: 'middle' }));
  o.push(t(p.X(1.5 * h), p.Y(0.7) - 12, '3.47 h', { size: 18, weight: 700, fill: GREEN, anchor: 'middle' }));
  o.push(p.dot(0, 15, ORANGE), p.dot(h, 7.5, GREEN), p.dot(2 * h, 3.75, GREEN), p.dot(t2, 2, C.olive));
  o.push(t(p.X(0) + 20, p.Y(15) - 12, '15', { size: 19, weight: 700, fill: ORANGE }));
  o.push(t(p.X(h) + 16, p.Y(7.5) - 14, '7.5', { size: 19, weight: 700, fill: GREEN }));
  o.push(t(p.X(2 * h) + 16, p.Y(3.75) - 14, '3.75', { size: 19, weight: 700, fill: GREEN }));
  o.push(t(p.X(t2) + 14, p.Y(2) - 52, 't = 10.1 h', { size: 19, weight: 700, fill: GOLD }));
  o.push(t(p.X(t2) + 14, p.Y(2) - 26, 'C = 2', { size: 19, weight: 700, fill: GOLD }));
  o.push(t(p.X(5.2), p.Y(13), 'Half-life ln 2 ÷ k', { size: 20, weight: 700, fill: GREEN }));
  o.push(t(p.X(5.2), p.Y(13) + 28, 'is the same each time', { size: 20, weight: 700, fill: GREEN }));
  o.push(box(120, 820, 660, 76));
  o.push(t(W / 2, 867, 'C = 2 when t = 5 ln 7.5 ≈ 10.1', { size: 23, weight: 700, fill: C.olive, anchor: 'middle' }));
  return svg(W, 930, 'Exponential decay', o.join('\n'), `C = 15e${sup('−0.2t')} mg/L`);
}

export const figures = [
  { name: '01-inverse-graphs', after: '## 4.4 Exponential models and a^x', svg: inverseGraphs(),
    alt: 'The orange curve y = e^x passes through (0, 1) and (1, e) and approaches the x-axis. The blue curve y = ln x passes through (1, 0) and (e, 1) and approaches the y-axis. They are mirror images in the dashed line y = x, so the functions are inverses.',
    caption: 'The graph of ln x is the reflection of eˣ in y = x.' },
  { name: '07-linear-form', after: '### Form 1: f′(x)/f(x)', svg: linearForm(),
    alt: 'ln y against ln x is a straight line for y = ax^n: through (0.5, 1.85) and (2.5, 4.85), gradient n = 1.5 and intercept ln a = 1.10. lg y against x is a straight line for y = kb^x with intercept lg k = 0.70 and gradient lg b = 0.14.',
    caption: 'A straight line on log axes gives gradient and intercept for power and exponential laws.' },
  { name: '04-log-ruler-laws', after: '### Quick chain rule patterns', svg: logRuler(),
    alt: 'A log ruler marks 1 to 10 at their base-10 logs. Bars of length lg 2 and lg 3 end at 6, so lg 2 + lg 3 = lg 6. A bar lg 8 minus lg 2 has length lg 4. Two bars of lg 3 end at 9, so 2 lg 3 = lg 9.',
    caption: 'Logarithms turn products into sums: lengths on a log ruler add.' },
  { name: '08-ln-calculus', after: '### Worked example 3: mixing e^kx and 1/x', svg: lnCalculus(),
    alt: 'The tangent to y = ln x at x = 2 has gradient one half, equal to 1/x. Below, the area under y = 1/x from 1 to e is shaded and equals 1, because the integral is ln x and ln e minus ln 1 is 1.',
    caption: 'ln x differentiates to 1/x and the area under 1/x from 1 to e is 1.' },
  { name: '02-base-family', after: '### Transformed graphs', svg: baseFamily(),
    alt: 'Curves 2^x, e^x, 3^x and (1/2)^x all pass through (0, 1), lie above the x-axis and have it as an asymptote. Bases above 1 give growth, with e^x between 2^x and 3^x; (1/2)^x decays and mirrors 2^x in the y-axis.',
    caption: 'Every aˣ passes through (0, 1); a > 1 grows and a < 1 decays.' },
  { name: '09-decay-half-life', after: '## 4.4 Exponential models and a^x', svg: decayHalfLife(),
    alt: 'C = 15e^(-0.2t) falls from 15 mg/L. It halves to 7.5 after 3.47 hours and to 3.75 after another 3.47 hours, so the half-life is constant (ln 2 divided by k). It reaches 2 mg/L at t = 10.1 hours.',
    caption: 'Exponential decay has a constant half-life of ln 2 ÷ k.' },
  { name: '05-solve-index', after: '## Exponentials and logarithms (P2.5)', svg: solveIndex(),
    alt: 'The graph of 5^x meets y = 40 at x = 2.29 (ln 40 divided by ln 5). Below, points 0.8^n fall; n = 13 gives 0.0550 and n = 14 gives 0.0440, the first below 0.05. Dividing by the negative ln 0.8 reverses the inequality, so n > 13.4.',
    caption: 'Taking logs solves aˣ = b, and a negative log reverses an inequality.' },
  { name: '06-hidden-quadratic', after: '### Converting parametric to Cartesian', svg: hiddenQuadratic(),
    alt: 'The parabola u^2 - 5u + 6 crosses the u-axis at 2 and 3; u < 0 is shaded as impossible since e^x > 0. The curve y = e^(2x) - 5e^x + 6 crosses the x-axis at x = ln 2 and ln 3.',
    caption: 'Substituting u = eˣ turns e²ˣ − 5eˣ + 6 = 0 into a quadratic with roots ln 2 and ln 3.' },
  { name: '03-gradient-ekx', after: '### Evaluating a model', svg: gradientEkx(),
    alt: 'On y = e^(2x), the tangent at (0, 1) has gradient 2 and at x = 0.6 (height 3.32) has gradient 6.64, shown by a triangle with run 0.4 and rise 2.66. Each gradient is 2 times the height, so dy/dx = ky.',
    caption: 'The gradient of e^kx is k times its height, so growth is proportional to size.' },
];
