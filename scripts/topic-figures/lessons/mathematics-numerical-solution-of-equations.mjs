// Board-neutral redraws of seven numerical-methods figures first drawn for Cambridge 9709 P2 and reused
// on AQA, OCR and OxfordAQA pages. Same functions, iterates and estimates as before; the board pills
// ("AQA, OCR", "OxfordAQA only", "Cambridge 9709: condition not required") are removed. The generic tips
// beside two of those pills are kept as plain notes.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'mathematics-numerical-solution-of-equations';
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
const sbs = (s) => `<tspan baseline-shift="sub" font-size="70%">${s}</tspan>`;
const frame = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#ffffff" stroke="#c9d6d4" stroke-width="2.5"/>`;
const pillT = (cx, cy, w, label, fill, col = '#ffffff', size = 21) => `<rect x="${cx - w / 2}" y="${cy - 22}" width="${w}" height="44" rx="22" fill="${fill}"/>` + t(cx, cy + 7, label, { size, weight: 700, fill: col, anchor: 'middle' });
const fplot = (o) => plot({ ...o, y: o.y + 26, h: o.h - 26, w: o.w - 46 });
const pt = (x, y, fill) => `<circle cx="${x}" cy="${y}" r="10" fill="${fill}" stroke="#ffffff" stroke-width="3"/>`;

// ---------- 03 four ways an iteration behaves ----------
function cobweb() {
  const o = [];
  const cases = [
    { x: 30, y: 170, head: 'Staircase in', cond: '0 &lt; g′ &lt; 1', g: 'g = √(3x + 5)', f: (x) => Math.sqrt(3 * x + 5), r: [0, 5.5], x1: 1, n: 6, col: GREEN, val: 'g′(α) = 0.358' },
    { x: 460, y: 170, head: 'Cobweb in', cond: '−1 &lt; g′ &lt; 0', g: 'g = ∛(9 − 2x)', f: (x) => Math.cbrt(9 - 2 * x), r: [0, 3.4], x1: 0.6, n: 6, col: GREEN, val: 'g′(α) = −0.215' },
    { x: 30, y: 690, head: 'Staircase out', cond: 'g′ &gt; 1', g: `g = (x${sup('2')} − 5) / 3`, f: (x) => (x * x - 5) / 3, r: [3.8, 8.3], x1: 5, n: 3, col: ORANGE, val: 'g′(α) = 2.795' },
    { x: 460, y: 690, head: 'Cobweb out', cond: 'g′ &lt; −1', g: `g = 9 / (x${sup('2')} + 2)`, f: (x) => 9 / (x * x + 2), r: [0.3, 3.3], x1: 1.3, n: 7, col: ORANGE, val: 'g′(α) = −1.217' },
  ];
  for (const c of cases) {
    const w = 410, h = 378;
    o.push(t(c.x, c.y - 66, c.head, { size: 24, weight: 700, fill: c.col }), t(c.x + w, c.y - 66, c.cond, { size: 19, weight: 700, fill: C.muted, anchor: 'end' }));
    o.push(t(c.x, c.y - 32, c.g, { size: 19, weight: 700, fill: C.muted }));
    o.push(frame(c.x, c.y, w, h));
    const [a, b] = c.r, X = (v) => c.x + ((v - a) / (b - a)) * w, Y = (v) => c.y + h - ((v - a) / (b - a)) * h;
    const id = `cw${c.x}${c.y}`;
    o.push(`<clipPath id="${id}"><rect x="${c.x}" y="${c.y}" width="${w}" height="${h}"/></clipPath>`);
    o.push(`<line x1="${X(a)}" y1="${Y(a)}" x2="${X(b)}" y2="${Y(b)}" stroke="${C.muted}" stroke-width="2.5" stroke-dasharray="9 7"/>`);
    const pts = Array.from({ length: 201 }, (_, i) => { const u = a + ((b - a) * i) / 200; return `${X(u).toFixed(1)} ${Y(c.f(u)).toFixed(1)}`; });
    o.push(`<path clip-path="url(#${id})" d="M${pts.join(' L')}" fill="none" stroke="${C.ink}" stroke-width="4"/>`);
    let xs = c.x1, d = `M${X(xs)} ${Y(a)}`;
    for (let i = 0; i < c.n; i++) { const ys = c.f(xs); d += ` V${Y(ys).toFixed(1)} H${X(ys).toFixed(1)}`; xs = ys; }
    o.push(`<path clip-path="url(#${id})" d="${d}" fill="none" stroke="${c.col}" stroke-width="3"/>`);
    // root
    let lo = a, hi = b; const gg = (v) => c.f(v) - v;
    for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (gg(lo) * gg(m) <= 0) hi = m; else lo = m; }
    o.push(pt(X(lo), Y(lo), C.olive), pt(X(c.x1), Y(a), c.col));
    o.push(t(X(c.x1) + 14, Y(a) - 8, `x${sbs('1')}`, { size: 19, weight: 700, fill: c.col }));
    const right = c.head === 'Staircase out';
    o.push(t(X(lo) + (right ? -16 : 16), Y(lo) + (right ? -16 : 32), 'α', { size: 21, weight: 700, fill: C.olive, anchor: right ? 'end' : 'start' }));
    o.push(pillT(c.x + w - 105, c.y + h + 36, 210, c.val, c.col));
  }
  o.push(t(W / 2, 1188, 'Converges when |g′(α)| &lt; 1', { size: 22, weight: 700, anchor: 'middle' }));
  return svg(W, 1220, 'Four ways an iteration behaves', o.join('\n'));
}

// ---------- 04 Newton-Raphson tangent ----------
function nrTangent() {
  const o = [];
  o.push(frame(80, 130, 780, 470));
  const f = (x) => x ** 3 + 2 * x - 9, df = (x) => 3 * x * x + 2;
  const p = fplot({ x: 80, y: 130, w: 780, h: 470, xr: [0.8, 2.25], yr: [-6.2, 6.5], xt: [], yt: [], grid: false, xl: 'x' });
  o.push(p.svg);
  const tan = (x0, a, b, col) => p.curve((x) => f(x0) + df(x0) * (x - x0), a, b, { color: col, w: 3.5 });
  o.push(p.curve(f, 0.8, 2.25, { color: C.ink, w: 4.5 }));
  o.push(tan(1.5, 0.8, 2.08, ORANGE), tan(1.8, 1.4, 2.25, GOLD));
  o.push(p.seg(1.5, 0, 1.5, f(1.5), { color: C.muted, w: 2.5, dash: '7 6' }));
  o.push(p.dot(1.5, 0, ORANGE), p.dot(1.5, f(1.5), ORANGE), p.dot(1.8, f(1.8), GOLD), p.dot(1.8, 0, GOLD), p.dot(1.7631, 0, GREEN));
  o.push(t(p.X(1.5), p.Y(0) - 20, `x${sbs('1')}`, { size: 21, weight: 700, fill: ORANGE, anchor: 'middle' }));
  o.push(t(p.X(1.8) + 16, p.Y(0) - 18, `x${sbs('2')}`, { size: 21, weight: 700, fill: GOLD }));
  o.push(t(p.X(1.7631) - 18, p.Y(0) + 42, `x${sbs('3')}`, { size: 21, weight: 700, fill: GREEN, anchor: 'middle' }));
  o.push(t(p.X(1.62), p.Y(-3.6), `tangent at x${sbs('1')}`, { size: 21, weight: 700, fill: ORANGE }));
  o.push(t(p.X(1.98), p.Y(5.3), `tangent at x${sbs('2')}`, { size: 21, weight: 700, fill: GOLD, anchor: 'end' }));
  o.push(pillT(W / 2, 672, 380, `x${sbs('n+1')} = x${sbs('n')} − f(x${sbs('n')}) / f′(x${sbs('n')})`, C.ink));
  const vals = [[`x${sbs('1')} = 1.5`, ORANGE], [`x${sbs('2')} = 1.8`, GOLD], [`x${sbs('3')} = 1.7631`, GREEN], [`x${sbs('4')} = 1.7625`, GREEN]];
  vals.forEach(([s, c], i) => { const x = 62 + i * 200; o.push(`<rect x="${x}" y="716" width="176" height="64" rx="12" fill="#ffffff" stroke="${c}" stroke-width="2.5"/>`, t(x + 88, 756, s, { size: 21, weight: 700, fill: c, anchor: 'middle' })); });
  o.push(t(W / 2, 832, 'accurate to 4 d.p. in three steps', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
  return svg(W, 860, 'Newton-Raphson: follow the tangent', o.join('\n'), `f(x) = x${sup('3')} + 2x − 9, x${sbs('1')} = 1.5`);
}

// ---------- 05 Newton-Raphson fails ----------
function nrFails() {
  const o = [];
  o.push(frame(80, 130, 780, 470));
  const f = (x) => x ** 3 - 12 * x + 7, df = (x) => 3 * x * x - 12;
  const p = fplot({ x: 80, y: 130, w: 780, h: 470, xr: [-4.5, 5], yr: [-17, 30], xt: [], yt: [], grid: false, xl: 'x' });
  o.push(p.svg);
  for (const v of [-4, -2, 2, 4]) o.push(`<line x1="${p.X(v)}" y1="${p.AY - 8}" x2="${p.X(v)}" y2="${p.AY + 8}" stroke="${C.ink}" stroke-width="2.5"/>`, t(p.X(v), p.AY - 18, String(v).replace('-', '−'), { size: 19, weight: 700, anchor: 'middle' }));
  o.push(p.curve(f, -4.5, 5, { color: C.ink, w: 4.5 }));
  o.push(p.seg(-2.5, f(2), 2.6, f(2), { color: ORANGE, w: 3.5 }));
  o.push(p.curve((x) => f(2.1) + df(2.1) * (x - 2.1), 0.1, 5, { color: GOLD, w: 3.5 }));
  let r = 3; for (let i = 0; i < 20; i++) r -= f(r) / df(r);
  o.push(p.dot(2, f(2), ORANGE), p.dot(2.1, f(2.1), GOLD), p.dot(r, 0, GREEN));
  o.push(t(p.X(0.25), p.Y(-14), `x${sbs('1')} = 2: flat`, { size: 20, weight: 700, fill: ORANGE }));
  o.push(t(p.X(2.25), p.Y(-14), `x${sbs('1')} = 2.1`, { size: 20, weight: 700, fill: GOLD }));
  o.push(t(p.X(4.9), p.Y(-9.8), `x${sbs('2')} = 9.37 →`, { size: 20, weight: 700, fill: GOLD, anchor: 'end' }));
  o.push(pillT(W / 2, 672, 540, 'f′(2) = 0: tangent never meets the axis', ORANGE));
  o.push(pillT(W / 2, 732, 600, `x${sbs('1')} = 2.1: next value 9.37, beyond every root`, GOLD));
  o.push(pillT(W / 2, 792, 476, `x${sbs('1')} = 3: 3.1333, then 3.1240, works`, GREEN));
  o.push(t(W / 2, 856, 'avoid starting near a stationary point', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
  return svg(W, 890, 'Newton-Raphson can fail', o.join('\n'), `f(x) = x${sup('3')} − 12x + 7`);
}

// ---------- 06 trapezium rule ----------
function trapezium() {
  const o = [];
  o.push(frame(80, 130, 780, 380));
  const p = fplot({ x: 80, y: 130, w: 780, h: 380, xr: [0.2, 3.4], yr: [-0.3, 1.35], xt: [1, 1.5, 2, 2.5, 3], yt: [], grid: false, xl: 'x' });
  const xs = [1, 1.5, 2, 2.5, 3];
  o.push(`<polygon points="${xs.map((x) => `${p.X(x)},${p.Y(Math.log(x))}`).join(' ')} ${p.X(3)},${p.Y(0)}" fill="${C.teal}"/>`);
  for (const x of xs.slice(1)) o.push(p.seg(x, 0, x, Math.log(x), { color: GREEN, w: 2.5 }));
  o.push(p.svg);
  o.push(p.curve(Math.log, 0.7, 3.4, { color: C.ink, w: 4.5 }));
  for (const x of xs) o.push(p.dot(x, Math.log(x), C.ink, 8));
  o.push(t(80, 562, 'Zoom on strip 1: the chord sits below the curve', { size: 20, weight: 700, fill: C.muted }));
  o.push(frame(80, 578, 780, 252));
  const q = fplot({ x: 80, y: 578, w: 780, h: 252, xr: [0.93, 1.6], yr: [-0.025, 0.5], xt: [1, 1.5], yt: [], grid: false });
  const L = Math.log(1.5);
  const cp = Array.from({ length: 81 }, (_, i) => { const x = 1 + 0.5 * i / 80; return `${q.X(x).toFixed(1)},${q.Y(Math.log(x)).toFixed(1)}`; });
  o.push(`<polygon points="${q.X(1)},${q.Y(0)} ${q.X(1.5)},${q.Y(L)} ${q.X(1.5)},${q.Y(0)}" fill="${C.teal}"/>`);
  o.push(`<polygon points="${cp.join(' ')}" fill="#9a7f1f"/>`);
  o.push(q.svg);
  o.push(q.seg(1, 0, 1.5, L, { color: GREEN, w: 3 }));
  o.push(q.curve(Math.log, 0.93, 1.6, { color: C.ink, w: 4.5 }));
  o.push(t(q.X(1.13), q.Y(0.27), 'curve', { size: 20, weight: 700 }));
  o.push(t(q.X(1.32), q.Y(0.205), 'missed', { size: 20, weight: 700, fill: GOLD }));
  o.push(t(q.X(1.32), q.Y(0.205) + 28, 'chord', { size: 20, weight: 700, fill: GREEN }));
  o.push(`<rect x="90" y="862" width="40" height="30" fill="${C.teal}" stroke="${GREEN}" stroke-width="2.5"/>`, t(146, 885, 'trapezia: 1.2821', { size: 21, weight: 700, fill: GREEN }));
  o.push(`<rect x="90" y="906" width="40" height="30" fill="#9a7f1f"/>`, t(146, 929, 'area missed (all strips): 0.0137', { size: 21, weight: 700, fill: GOLD }));
  o.push(pillT(W / 2, 990, 548, 'Exact 1.2958: the rule under-estimates', C.ink));
  o.push(pillT(W / 2, 1050, 530, 'ln x bends down (f″ &lt; 0): chords below', GREEN));
  o.push(t(W / 2, 1110, 'n strips need n + 1 ordinates', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1140, 'Trapezium rule: 4 strips', o.join('\n'), 'y = ln x from x = 1 to x = 3');
}

// ---------- 07 rectangle bounds ----------
function rectangles() {
  const o = [];
  const one = (y0, left, head, col, fill, edge) => {
    o.push(t(80, y0 - 18, head, { size: 21, weight: 700, fill: col }));
    o.push(frame(80, y0, 780, 300));
    const p = fplot({ x: 80, y: y0, w: 780, h: 300, xr: [0.2, 3.4], yr: [-0.3, 1.35], xt: [1, 2, 3], yt: [], grid: false, xl: 'x' });
    for (const a of [1, 1.5, 2, 2.5]) { const h = Math.log(left ? a : a + 0.5); o.push(`<rect x="${p.X(a)}" y="${p.Y(h)}" width="${p.X(a + 0.5) - p.X(a)}" height="${p.Y(0) - p.Y(h)}" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`); }
    o.push(p.svg, p.curve(Math.log, 0.7, 3.4, { color: C.ink, w: 4.5 }));
  };
  one(160, true, 'Left-hand heights: lower sum 1.0075', GREEN, C.teal, GREEN);
  one(540, false, 'Right-hand heights: upper sum 1.5568', GOLD, '#e9d58c', GOLD);
  o.push(pillT(W / 2, 900, 290, '1.0075 &lt; I &lt; 1.5568', C.ink));
  o.push(pillT(W / 2, 960, 540, 'Trapezium 1.2821 = mean of the two sums', GREEN));
  o.push(t(W / 2, 1020, 'for a decreasing curve the roles swap', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1050, 'Rectangles trap the integral', o.join('\n'), 'y = ln x (increasing), 4 strips');
}

// ---------- 08 mid-ordinate rule ----------
function midOrdinate() {
  const o = [];
  o.push(frame(80, 130, 780, 470));
  const p = fplot({ x: 80, y: 130, w: 780, h: 470, xr: [0.6, 3.4], yr: [-0.12, 1.4], xt: [1, 1.5, 2, 2.5, 3], yt: [], grid: false, xl: 'x' });
  for (const [a, m] of [[1, 1.5], [2, 2.5]]) o.push(`<rect x="${p.X(a)}" y="${p.Y(1 / m)}" width="${p.X(a + 1) - p.X(a)}" height="${p.Y(0) - p.Y(1 / m)}" fill="${C.teal}" stroke="${GREEN}" stroke-width="2.5"/>`);
  o.push(p.svg);
  o.push(p.curve((x) => 1 / x, 0.6, 3.4, { color: C.ink, w: 4.5 }));
  for (const m of [1.5, 2.5]) o.push(p.curve((x) => 1 / m - (x - m) / (m * m), m - 0.5, m + 0.5, { color: ORANGE, w: 3.5 }));
  o.push(p.dot(1.5, 1 / 1.5, ORANGE), p.dot(2.5, 0.4, ORANGE));
  o.push(t(p.X(1.5), p.Y(0.33), '0.667', { size: 22, weight: 700, fill: GREEN, anchor: 'middle' }));
  o.push(t(p.X(2.5), p.Y(0.2), '0.4', { size: 22, weight: 700, fill: GREEN, anchor: 'middle' }));
  o.push(t(p.X(2.3), p.Y(1.25), 'tangents at midpoints', { size: 21, weight: 700, fill: ORANGE, anchor: 'middle' }));
  o.push(pillT(W / 2, 672, 490, 'Estimate 1 × (0.667 + 0.4) = 1.0667', GREEN));
  o.push(pillT(W / 2, 732, 490, 'Exact ln 3 = 1.0986: under-estimate', C.ink));
  o.push(pillT(W / 2, 792, 730, 'Convex curve: tangent below, rectangle = tangent trapezium', GOLD));
  return svg(W, 840, 'Mid-ordinate rule: 2 strips', o.join('\n'), 'y = 1/x from x = 1 to x = 3');
}

// ---------- 09 Simpson's rule ----------
function simpson() {
  const o = [];
  o.push(frame(80, 130, 780, 430));
  const p = fplot({ x: 80, y: 130, w: 780, h: 430, xr: [0.6, 3.4], yr: [-0.12, 1.4], xt: [1, 2, 3], yt: [], grid: false, xl: 'x' });
  // parabola through (1,1), (2,1/2), (3,1/3)
  const y0 = 1, y1 = 0.5, y2 = 1 / 3;
  const P = (x) => y0 * ((x - 2) * (x - 3)) / 2 + y1 * ((x - 1) * (x - 3)) / -1 + y2 * ((x - 1) * (x - 2)) / 2;
  o.push(p.area(P, 1, 3, '#c0dbd7'));
  o.push(p.svg);
  o.push(p.curve((x) => 1 / x, 0.6, 3.4, { color: C.ink, w: 4.5 }));
  o.push(p.curve(P, 1, 3, { color: GREEN, w: 3.5, dash: '10 6' }));
  o.push(p.dot(1, 1, ORANGE), p.dot(2, 0.5, ORANGE), p.dot(3, y2, ORANGE));
  o.push(t(p.X(1) + 16, p.Y(1) + 6, `y${sbs('0')} × 1`, { size: 20, weight: 700, fill: ORANGE }));
  o.push(t(p.X(2) - 18, p.Y(0.5) - 26, `y${sbs('1')} × 4`, { size: 20, weight: 700, fill: ORANGE }));
  o.push(t(p.X(3) - 22, p.Y(y2) - 26, `y${sbs('2')} × 1`, { size: 20, weight: 700, fill: ORANGE, anchor: 'end' }));
  o.push(t(p.X(1.4), p.Y(1), 'curve 1/x', { size: 20, weight: 700 }));
  o.push(t(p.X(2.3), p.Y(0.7), 'parabola (dashed)', { size: 20, weight: 700, fill: GREEN }));
  o.push(pillT(W / 2, 620, 580, 'Simpson 1/3 × (1 + 1/3 + 4 × 0.5) = 1.1111', GREEN));
  o.push(t(W / 2, 696, 'Estimates of ∫ 1/x dx, 2 strips', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
  const N = (v) => 110 + ((v - 1.06) / (1.12 - 1.06)) * 680;
  o.push(`<line x1="110" y1="776" x2="790" y2="776" stroke="${C.ink}" stroke-width="3"/>`);
  for (const [v, lab, c, s] of [[1.0667, 'mid-ordinate', ORANGE, '1.0667'], [1.0986, 'exact', C.ink, '1.0986'], [1.1111, 'Simpson', GREEN, '1.1111']]) {
    o.push(`<circle cx="${N(v)}" cy="776" r="11" fill="${c}" stroke="#ffffff" stroke-width="3"/>`);
    o.push(t(N(v) + (lab === 'Simpson' ? 10 : lab === 'exact' ? -10 : 0), 744, lab, { size: 20, weight: 700, fill: c, anchor: lab === 'Simpson' ? 'start' : lab === 'exact' ? 'end' : 'middle' }));
    o.push(t(N(v), 814, s, { size: 20, weight: 700, fill: c, anchor: 'middle' }));
  }
  o.push(pillT(W / 2, 878, 560, 'Even number of strips; exact up to cubics', C.ink));
  return svg(W, 920, "Simpson's rule: 2 strips", o.join('\n'), 'a parabola through three ordinates');
}

export const figures = [
  { name: '03-staircase-cobweb', after: '### Worked example 4: locating and refining a root', svg: cobweb(),
    alt: 'Four cobweb diagrams with g-prime at the root 0.358 (staircase in), -0.215 (cobweb in), 2.795 (staircase out) and -1.217 (cobweb out). The iteration converges when |g-prime| < 1.',
    caption: 'Where the curve y = g(x) meets y = x is the root; the path converges when the curve is flatter than the line there.' },
  { name: '08-mid-ordinate-rule', after: '## Mid-ordinate rule', svg: midOrdinate(),
    alt: 'y = 1/x on 1 to 3 with 2 strips: midpoint heights 0.667 and 0.4 give 1.0667, below ln 3 = 1.0986, because tangents at the midpoints lie below the convex curve.',
    caption: 'Each mid-ordinate rectangle equals the trapezium under the tangent at the midpoint, so a convex curve is under-estimated.' },
  { name: '06-trapezium-rule', after: "## Simpson's rule", svg: trapezium(),
    alt: 'ln x on 1 to 3 with 4 strips gives 1.2821 against the exact 1.2958. A magnified first strip shows the chord below the curve, so the rule under-estimates a concave curve.',
    caption: 'For a concave curve the chords lie below it so the trapezium rule under-estimates; for a convex curve it over-estimates.' },
  { name: '05-newton-raphson-fails', after: '### How Newton-Raphson can fail', svg: nrFails(),
    alt: 'On y = x^3-12x+7 a start at x=2 has a flat tangent, x=2.1 throws the next value to 9.37, and x=3 converges to 3.1240.',
    caption: 'Starting at or near a stationary point sends Newton-Raphson away from the root you want.' },
  { name: '09-simpsons-rule', after: "## Simpson's rule", svg: simpson(),
    alt: 'A parabola through the ordinates 1, 1/2, 1/3 of 1/x gives Simpson 1.1111 for 2 strips, compared with mid-ordinate 1.0667 and exact 1.0986.',
    caption: "Simpson's rule integrates the parabola through three ordinates, weights 1, 4, 1, and needs an even number of strips." },
  { name: '04-newton-raphson-tangent', after: '### How Newton-Raphson can fail', svg: nrTangent(),
    alt: 'On y = x^3+2x-9 the tangent at x1 = 1.5 meets the axis at x2 = 1.8, the tangent there meets it at x3 = 1.7631, and x4 = 1.7625.',
    caption: 'Each step replaces the curve by its tangent and moves to where the tangent meets the x-axis.' },
  { name: '07-rectangle-bounds', after: '### Worked example 4', svg: rectangles(),
    alt: 'Left-hand rectangles under the increasing curve ln x sum to 1.0075 and right-hand rectangles over it sum to 1.5568, so 1.0075 < I < 1.5568; the trapezium value 1.2821 is their mean.',
    caption: 'For an increasing function left-hand rectangles give a lower bound and right-hand rectangles an upper bound.' },
];
