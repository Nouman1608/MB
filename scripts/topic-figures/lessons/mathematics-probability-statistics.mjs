// Board-neutral redraws of thirteen A Level probability and statistics pictures first drawn for
// Cambridge 9709 (Probability & Statistics 1 and 2) and reused on AQA, OCR and OxfordAQA pages.
// Same data and numbers, recomputed here from the distributions; the "Cambridge 9709 only",
// "AQA only", "AQA and Cambridge 9709" and "OCR modelling (2.03e)" pills are gone.
import { C, svg, panel, t, tl, path } from '../style.mjs';

export const slug = 'mathematics-probability-statistics';
const W = 900;
const TEAL = '#6fa9a2', PALE = '#b5d3cf', LIGHT = '#dce9e7', GOLD = '#d4b02e', CREAM = '#f2e7b8', RUST = '#b5602e';

// ---- maths helpers ----
const fact = (n) => { let f = 1; for (let i = 2; i <= n; i++) f *= i; return f; };
const pois = (l, r) => Math.exp(-l) * l ** r / fact(r);
const lnC = (n, r) => { let s = 0; for (let i = 0; i < r; i++) s += Math.log(n - i) - Math.log(i + 1); return s; };
const binom = (n, p, r) => Math.exp(lnC(n, r) + r * Math.log(p) + (n - r) * Math.log(1 - p));
const npdf = (x, m, s) => Math.exp(-0.5 * ((x - m) / s) ** 2) / (s * Math.sqrt(2 * Math.PI));

// ---- drawing helpers ----
const sub = (b, s, rest = '') => `${b}<tspan dy="5" font-size="70%">${s}</tspan><tspan dy="-5"${rest.startsWith(' ') ? ' dx="5"' : ''}>${rest.trimStart()}</tspan>`;
const H0 = sub('H', '0');
function frame(o, { x0, y0, x1, y1, xmin, xmax, ymin = 0, ymax, xt, yt, xlab, ylab, xfmt = String, yfmt = String }) {
  const X = (v) => x0 + (v - xmin) / (xmax - xmin) * (x1 - x0), Y = (v) => y0 - (v - ymin) / (ymax - ymin) * (y0 - y1);
  o.push(`<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="${C.ink}" stroke-width="3"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" stroke="${C.ink}" stroke-width="3"/>`);
  for (const v of xt) { o.push(`<line x1="${X(v)}" y1="${y0}" x2="${X(v)}" y2="${y0 + 8}" stroke="${C.ink}" stroke-width="2.5"/>`); o.push(t(X(v), y0 + 32, xfmt(v), { size: 19, anchor: 'middle' })); }
  for (const v of yt) { o.push(`<line x1="${x0 - 8}" y1="${Y(v)}" x2="${x0}" y2="${Y(v)}" stroke="${C.ink}" stroke-width="2.5"/>`); o.push(t(x0 - 14, Y(v) + 7, yfmt(v), { size: 19, anchor: 'end' })); }
  if (xlab) o.push(t((x0 + x1) / 2, y0 + 74, xlab, { size: 19, anchor: 'middle' }));
  if (ylab) o.push(`<text transform="translate(${x0 - 72} ${(y0 + y1) / 2}) rotate(-90)" font-size="19" fill="${C.ink}" text-anchor="middle">${ylab}</text>`);
  return { X, Y };
}
const curve = (f, a, b, X, Y, n = 240) => Array.from({ length: n + 1 }, (_, i) => { const x = a + (b - a) * i / n; return `${X(x).toFixed(1)} ${Y(f(x)).toFixed(1)}`; });
const area = (f, a, b, X, Y, fill, extra = '') => `<path d="M${X(a)} ${Y(0)} L${curve(f, a, b, X, Y, 120).join(' L')} L${X(b)} ${Y(0)} Z" fill="${fill}" stroke="none" ${extra}/>`;
const keySq = (x, y, fill, s, o = {}) => `<rect x="${x}" y="${y - 22}" width="30" height="30" rx="3" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>` + t(x + 44, y, s, { size: 21, ...o });
const vdash = (x, y1, y2, color, w = 3) => `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-dasharray="8 6"/>`;
const bar = (x, y, w, h, fill) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
const pillDark = (cx, y, w, s, fill) => `<rect x="${cx - w / 2}" y="${y}" width="${w}" height="44" rx="22" fill="${fill}"/>` + t(cx, y + 30, s, { size: 20, weight: 700, fill: '#ffffff', anchor: 'middle' });

// ---------- S1 03 Dice sample space ----------
function dice() {
  const o = [];
  const g = 90, x0 = 210, y0 = 250;
  o.push(t(142, 210, 'first die', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
  o.push(t(x0 + 3 * g, 210, 'second die', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
  for (let i = 1; i <= 6; i++) {
    o.push(t(x0 + (i - 0.5) * g, 242, String(i), { size: 21, weight: 700, anchor: 'middle' }));
    o.push(t(172, y0 + (i - 0.5) * g + 8, String(i), { size: 21, weight: 700, anchor: 'middle' }));
  }
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) {
    const A = a % 2 === 0, B = a + b === 7;
    const fill = A && B ? GOLD : B ? CREAM : A ? LIGHT : '#ffffff';
    o.push(`<rect x="${x0 + (b - 1) * g}" y="${y0 + (a - 1) * g}" width="${g}" height="${g}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`);
    o.push(t(x0 + (b - 0.5) * g, y0 + (a - 0.5) * g + 8, String(a + b), { size: 22, weight: B ? 700 : 400, fill: B ? C.ink : C.muted, anchor: 'middle' }));
  }
  o.push(`<rect x="${x0}" y="${y0}" width="${6 * g}" height="${6 * g}" fill="none" stroke="${C.ink}" stroke-width="4"/>`);
  o.push(t(x0 + 3 * g, y0 + 6 * g + 34, 'Each cell shows the total', { size: 20, fill: C.muted, anchor: 'middle' }));
  o.push(keySq(50, 890, LIGHT, 'A: first even', { weight: 700 }), keySq(330, 890, CREAM, 'B: total 7', { weight: 700 }), keySq(610, 890, GOLD, 'both: 3', { weight: 700 }));
  o.push(pillDark(450, 924, 560, 'P(A) = 18/36 = 1/2, P(B) = 6/36 = 1/6', C.ink));
  o.push(pillDark(450, 980, 480, 'P(A ∩ B) = 3/36 = 1/12 = 1/2 × 1/6', C.tealDark));
  o.push(pillDark(450, 1036, 476, 'Equal, so A and B are independent', C.olive));
  return svg(W, 1060, 'Are these independent?', `<g transform="translate(0 -40)">${o.join('\n')}</g>`, 'Two fair dice thrown: 36 equally likely pairs');
}

// ---------- S1 06 Venn conditional ----------
function venn() {
  const o = [];
  const one = (y, head, bg, shadeB, shadeNotA, lines) => {
    o.push(t(40, y - 16, head, { size: 23, weight: 700, fill: C.olive }));
    o.push(`<rect x="40" y="${y}" width="520" height="300" rx="10" fill="${bg}" stroke="${C.ink}" stroke-width="3.5"/>`);
    const ax = 215, bx = 365, cy = y + 150, r = 112;
    o.push(`<defs><clipPath id="cA${y}"><circle cx="${ax}" cy="${cy}" r="${r}"/></clipPath><clipPath id="cB${y}"><circle cx="${bx}" cy="${cy}" r="${r}"/></clipPath></defs>`);
    if (shadeB) { o.push(`<circle cx="${bx}" cy="${cy}" r="${r}" fill="${CREAM}"/><circle cx="${ax}" cy="${cy}" r="${r}" fill="#ffffff"/>`); o.push(`<circle cx="${bx}" cy="${cy}" r="${r}" fill="${GOLD}" clip-path="url(#cA${y})"/>`); }
    if (shadeNotA) { o.push(`<circle cx="${bx}" cy="${cy}" r="${r}" fill="${GOLD}"/><circle cx="${ax}" cy="${cy}" r="${r}" fill="#ffffff"/>`); }
    o.push(`<circle cx="${ax}" cy="${cy}" r="${r}" fill="none" stroke="${C.tealDark}" stroke-width="4"/><circle cx="${bx}" cy="${cy}" r="${r}" fill="none" stroke="${C.ink}" stroke-width="4"/>`);
    o.push(t(80, y + 46, 'A', { size: 25, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(520, y + 46, 'B', { size: 25, weight: 700, anchor: 'middle' }));
    o.push(t(165, cy + 9, '0.45', { size: 24, weight: 700, anchor: 'middle' }), t(290, cy + 9, '0.10', { size: 24, weight: 700, anchor: 'middle' }), t(400, cy + 9, '0.25', { size: 24, weight: 700, anchor: 'middle' }));
    o.push(t(510, y + 280, '0.20', { size: 22, weight: 700, fill: C.muted, anchor: 'middle' }));
    o.push(t(590, y + 92, lines[0], { size: 25, weight: 700 }));
    lines.slice(1).forEach((s, i) => o.push(t(590, y + 142 + i * 48, s, { size: 24, weight: 700, fill: C.tealDark })));
  };
  one(180, 'Given B: only the B circle counts', '#ffffff', true, false, ['P(A | B)', '= 0.10 / 0.35', '= 2/7', '≈ 0.286']);
  one(590, 'Given A′: only outside the A circle counts', CREAM, false, true, ['P(B | A′)', '= 0.25 / 0.45', '= 5/9', '≈ 0.556']);
  o.push(pillDark(450, 924, 476, 'Dark gold part ÷ light gold space', C.ink));
  return svg(W, 990, 'Conditional probability on a Venn', o.join('\n'), 'P(A) = 0.55, P(B) = 0.35, P(A′ ∩ B′) = 0.2');
}

// ---------- S1 07 Reversing the condition ----------
function reversing() {
  const o = [];
  const L = 50, Wd = 800;
  o.push(t(L, 232, 'Test 10 000 components', { size: 23, weight: 700 }));
  const f = Wd * 0.04;
  o.push(bar(L, 252, f, 64, GOLD), bar(L + f, 252, Wd - f, 64, LIGHT));
  o.push(t(L + f + (Wd - f) / 2, 294, 'good 9 600', { size: 24, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(`<line x1="${L + f / 2}" y1="316" x2="${L + f / 2}" y2="346" stroke="${C.olive}" stroke-width="3"/>`, t(L, 374, 'faulty 400', { size: 22, weight: 700, fill: C.olive }));
  const dn = (x, color) => `<line x1="${x}" y1="400" x2="${x}" y2="432" stroke="${color}" stroke-width="5"/><polygon points="${x},458 ${x - 17},424 ${x + 17},424" fill="${color}"/>`;
  o.push(dn(66, C.olive), t(90, 428, 'flag 95%: 380', { size: 22, weight: 700, fill: C.olive }));
  o.push(dn(570, C.tealDark), t(594, 428, 'flag 3%: 288', { size: 22, weight: 700, fill: C.tealDark }));
  o.push(t(L, 560, 'Flagged: 380 + 288 = 668', { size: 23, weight: 700 }));
  const ff = Wd * 380 / 668;
  o.push(bar(L, 580, ff, 64, GOLD), bar(L + ff, 580, Wd - ff, 64, LIGHT));
  o.push(t(L + ff / 2, 622, 'faulty 380', { size: 24, weight: 700, anchor: 'middle' }), t(L + ff + (Wd - ff) / 2, 622, 'good 288', { size: 24, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(pillDark(450, 690, 528, 'P(faulty | flagged) = 380/668 = 0.569', C.ink));
  o.push(pillDark(450, 746, 540, 'or 0.04 × 0.95 / 0.0668 = 0.038/0.0668', C.tealDark));
  o.push(t(450, 832, 'Only about 57% of flagged parts are faulty:', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(450, 866, 'good parts are so common that 3% of them is a lot.', { size: 22, weight: 700, fill: C.muted, anchor: 'middle' }));
  return svg(W, 860, 'Reversing the condition', `<g transform="translate(0 -40)">${o.join('\n')}</g>`, 'Factory: 4% faulty, test flags 95% / 3%');
}

// ---------- S1 08 Independence model check ----------
function modelCheck() {
  const o = [];
  o.push(t(450, 170, 'Gap = independent model − exact answer', { size: 22, weight: 700, anchor: 'middle' }));
  const x0 = 60, k = 752 / 0.0130;
  o.push(`<line x1="${x0}" y1="242" x2="${x0}" y2="702" stroke="${C.ink}" stroke-width="3"/>`);
  const rows = [['20 students (illustrative)', 0.1895, 0.0130, RUST], ['100 students (illustrative)', 0.2000, 0.0025, RUST], ['1200 students', 0.2023, 0.0002, C.tealDark]];
  rows.forEach(([h, ex, gap, col], i) => {
    const y = 232 + i * 170;
    o.push(t(76, y, h, { size: 24, weight: 700 }));
    o.push(bar(x0, y + 18, Math.max(gap * k, 10), 46, col));
    o.push(t(76, y + 102, `exact ${ex.toFixed(4)}   model 0.2025   gap ${gap.toFixed(4)}`, { size: 21, weight: 700, fill: C.muted }));
  });
  o.push(pillDark(450, 730, 752, 'Large population: independence is a fair approximation', C.tealDark));
  o.push(pillDark(450, 786, 752, 'Small group: the gap is large, use without replacement', RUST));
  return svg(W, 860, 'When is “independent” a good model?', o.join('\n'), '45% girls; two students chosen, both girls?');
}

// ---------- S2 01 Poisson events ----------
function poissonEvents() {
  const o = [];
  const fr = frame(o, { x0: 120, y0: 560, x1: 850, y1: 160, xmin: -0.5, xmax: 10.5, ymax: 0.25, xt: [0, 2, 4, 6, 8, 10], yt: [0, 0.1, 0.2], xlab: 'calls in one hour, r', ylab: 'probability' });
  const bw = (fr.X(1) - fr.X(0)) * 0.76;
  for (let r = 0; r <= 10; r++) {
    const p = pois(3.2, r), fill = r === 2 ? GOLD : r >= 3 ? C.tealDark : PALE;
    o.push(bar(fr.X(r) - bw / 2, fr.Y(p), bw, fr.Y(0) - fr.Y(p), fill));
  }
  o.push(t(fr.X(2), fr.Y(pois(3.2, 2)) - 10, pois(3.2, 2).toFixed(3), { size: 20, weight: 700, anchor: 'middle' }));
  o.push(vdash(fr.X(3.2), 150, 560, RUST));
  o.push(t(fr.X(3.2) + 12, 170, 'mean = variance = 3.2', { size: 20, weight: 700, fill: RUST }));
  let ge3 = 1; for (let r = 0; r < 3; r++) ge3 -= pois(3.2, r);
  o.push(keySq(70, 716, GOLD, `P(X = 2) = ${pois(3.2, 2).toFixed(3)}`), keySq(70, 766, C.tealDark, `P(X ≥ 3) = ${ge3.toFixed(3)}`));
  o.push(tl(70, 834, ['X ~ Po(3.2): events single, independent, random,', 'at a constant average rate.'], { size: 19, fill: C.muted }, 30));
  return svg(W, 890, 'Poisson: counting random events', o.join('\n'));
}

// ---------- S2 02 Poisson approximation to binomial ----------
function approxBinomial() {
  const o = [];
  const fr = frame(o, { x0: 120, y0: 540, x1: 850, y1: 160, xmin: -0.5, xmax: 9.5, ymax: 0.25, xt: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], yt: [0, 0.1, 0.2], xlab: 'faulty items in a box of 200, r', ylab: 'probability' });
  const bw = (fr.X(1) - fr.X(0)) * 0.42;
  let cb = 0, cp = 0;
  for (let r = 0; r <= 9; r++) {
    const b = binom(200, 0.015, r), p = pois(3, r);
    if (r <= 2) { cb += b; cp += p; }
    o.push(bar(fr.X(r) - bw, fr.Y(b), bw, fr.Y(0) - fr.Y(b), C.ink), bar(fr.X(r), fr.Y(p), bw, fr.Y(0) - fr.Y(p), PALE));
  }
  o.push(keySq(70, 700, C.ink, `B(200, 0.015) exact: P(X ≤ 2) = ${cb.toFixed(3)}`), keySq(70, 750, PALE, `Po(3) approximation: P(X ≤ 2) = ${cp.toFixed(3)}`));
  o.push(t(70, 818, 'Use X ≈ Po(np) when n &gt; 50 and np &lt; 5:', { size: 21, weight: 700 }));
  o.push(t(70, 852, 'here n = 200 and np = 3.', { size: 21, weight: 700 }));
  return svg(W, 890, 'Many trials, small p: use Poisson', o.join('\n'));
}

// ---------- S2 03 Poisson to normal with continuity correction ----------
function poissonNormal() {
  const o = [];
  const fr = frame(o, { x0: 120, y0: 520, x1: 850, y1: 160, xmin: 11.5, xmax: 38.5, ymax: 0.1, xt: [15, 20, 25, 30, 35], yt: [0, 0.05, 0.1], xlab: 'number of events, r', ylab: 'probability' });
  const bw = fr.X(1) - fr.X(0);
  for (let r = 12; r <= 38; r++) { const p = pois(25, r); o.push(bar(fr.X(r) - bw / 2, fr.Y(p), bw, fr.Y(0) - fr.Y(p), r >= 31 ? GOLD : PALE)); }
  o.push(path('M' + curve((x) => npdf(x, 25, 5), 11.5, 38.5, fr.X, fr.Y).join(' L'), { stroke: C.ink, w: 3.5 }));
  o.push(vdash(fr.X(30.5), 156, 520, RUST, 3.5));
  o.push(t(fr.X(30.5) - 10, 168, '30.5', { size: 21, weight: 700, fill: RUST, anchor: 'end' }));
  o.push(keySq(70, 660, GOLD, 'bars r ≥ 31: P(X &gt; 30)'));
  o.push(`<line x1="70" y1="706" x2="100" y2="706" stroke="${C.ink}" stroke-width="3.5"/>`, t(114, 713, 'N(25, 25): mean 25, σ = 5', { size: 21 }));
  o.push(t(70, 786, 'P(X &gt; 30) = P(X ≥ 31) ≈ P(Y &gt; 30.5)', { size: 21, weight: 700 }));
  o.push(t(70, 824, 'z = (30.5 − 25) / 5 = 1.1', { size: 21 }));
  o.push(t(70, 862, '1 − Φ(1.1) = 0.136', { size: 21, weight: 700 }));
  o.push(t(70, 906, 'Use when λ &gt; 15 (approximately).', { size: 19, fill: C.muted }));
  return svg(W, 940, 'Po(25) with a normal curve', o.join('\n'));
}

// ---------- S2 04 Linear combinations ----------
function linearComb() {
  const o = [];
  const fr = frame(o, { x0: 120, y0: 520, x1: 850, y1: 160, xmin: 3940, xmax: 4140, ymax: 0.03, xt: [3960, 4000, 4040, 4080, 4120], yt: [0, 0.01, 0.02], xlab: 'total mass (g)', ylab: 'density' });
  const f32 = (x) => npdf(x, 4040, 32), f16 = (x) => npdf(x, 4040, 16);
  o.push(area(f32, 3940, 4140, fr.X, fr.Y, CREAM));
  o.push(area(f16, 3990, 4090, fr.X, fr.Y, PALE, 'fill-opacity="0.7"'));
  o.push(path('M' + curve(f32, 3940, 4140, fr.X, fr.Y).join(' L'), { stroke: C.olive, w: 4 }));
  o.push(path('M' + curve(f16, 3975, 4105, fr.X, fr.Y).join(' L'), { stroke: C.tealDark, w: 4 }));
  o.push(vdash(fr.X(4040), 160, 520, C.ink, 2));
  for (let i = 0; i < 4; i++) o.push(`<rect x="${70 + i * 29}" y="646" width="25" height="34" rx="6" fill="${PALE}" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(t(206, 676, `X<tspan dy="5" font-size="70%">1</tspan><tspan dy="-5" dx="5">+ X</tspan><tspan dy="5" font-size="70%">2</tspan><tspan dy="-5" dx="5">+ X</tspan><tspan dy="5" font-size="70%">3</tspan><tspan dy="-5" dx="5">+ X</tspan><tspan dy="5" font-size="70%">4</tspan>`, { size: 22, weight: 700, fill: C.tealDark }));
  o.push(t(206, 706, 'Var = 4σ² = 256, sd 16', { size: 21 }));
  o.push(`<rect x="70" y="742" width="66" height="46" rx="6" fill="${CREAM}" stroke="${C.ink}" stroke-width="2"/>`, t(103, 772, '4X', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(t(206, 770, '4X (one bag, scaled)', { size: 22, weight: 700, fill: C.olive }));
  o.push(t(206, 800, 'Var = 4²σ² = 1024, sd 32', { size: 21 }));
  o.push(t(70, 868, 'X ~ N(1010, 8²) g. Same mean 4040 g.', { size: 19, fill: C.muted }));
  o.push(t(70, 900, 'Var(X − Y) = Var(X) + Var(Y) too.', { size: 19, fill: C.muted }));
  return svg(W, 930, 'Add variances, not standard deviations', o.join('\n'));
}

// ---------- S2 05 pdf area, mean, median ----------
function pdfArea() {
  const o = [];
  const fr = frame(o, { x0: 120, y0: 570, x1: 850, y1: 190, xmin: -0.3, xmax: 3.5, ymax: 0.6, xt: [0, 1, 2, 3], yt: [0, 0.2, 0.4], xlab: 'x', ylab: 'f(x)' });
  const f = (x) => (4 * x - x * x) / 9;
  // median: solve (2m² − m³/3)/9 = 1/2
  let lo = 0, hi = 3; for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; ((2 * m * m - m ** 3 / 3) / 9 < 0.5) ? lo = m : hi = m; }
  const med = (lo + hi) / 2;
  o.push(area(f, 0, med, fr.X, fr.Y, '#97bfbb'), area(f, med, 3, fr.X, fr.Y, LIGHT));
  o.push(path(`M${fr.X(0)} ${fr.Y(0)} L${curve(f, 0, 3, fr.X, fr.Y).join(' L')} L${fr.X(3)} ${fr.Y(0)}`, { stroke: C.ink, w: 4 }));
  o.push(`<line x1="${fr.X(1.75)}" y1="220" x2="${fr.X(1.75)}" y2="570" stroke="${C.olive}" stroke-width="3" stroke-dasharray="3 4"/>`);
  o.push(vdash(fr.X(med), 220, 570, RUST, 3));
  o.push(t(fr.X(1.75) - 12, 206, 'mean 7/4', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(t(fr.X(med) + 12, 206, `median ${med.toFixed(2)}`, { size: 20, weight: 700, fill: RUST }));
  o.push(t(fr.X(1.0), fr.Y(0.1), '½', { size: 30, weight: 700, anchor: 'middle' }), t(fr.X(2.4), fr.Y(0.1), '½', { size: 30, weight: 700, anchor: 'middle' }));
  o.push(t(70, 732, 'f(x) = (4x − x²)/9 for 0 ≤ x ≤ 3', { size: 22, weight: 700 }));
  o.push(t(70, 780, 'Total area = 1, which gives k = 1/9.', { size: 21 }));
  o.push(t(70, 822, 'Median m: area to its left is ½.', { size: 21 }));
  o.push(t(70, 864, 'Var(X) = 18/5 − (7/4)² = 0.538', { size: 21 }));
  o.push(t(70, 904, 'P(X = a) = 0, so &lt; and ≤ agree.', { size: 19, fill: C.muted }));
  return svg(W, 940, 'A pdf: probability is area', o.join('\n'));
}

// ---------- S2 06 Sample mean distribution ----------
function sampleMean() {
  const o = [];
  const fr = frame(o, { x0: 120, y0: 550, x1: 850, y1: 190, xmin: 12, xmax: 48, ymax: 0.55, xt: [12, 18, 24, 30, 36, 42, 48], yt: [0, 0.2, 0.4], xlab: 'value', ylab: 'density' });
  const se = 6 / Math.sqrt(50);
  const f1 = (x) => npdf(x, 30, 6), fm = (x) => npdf(x, 30, se);
  o.push(area(f1, 12, 48, fr.X, fr.Y, CREAM));
  o.push(area(fm, 26.5, 33.5, fr.X, fr.Y, PALE, 'fill-opacity="0.75"'));
  o.push(area(fm, 31, 33.5, fr.X, fr.Y, '#d9955f'));
  o.push(path('M' + curve(f1, 12, 48, fr.X, fr.Y).join(' L'), { stroke: C.olive, w: 3.5 }));
  o.push(path('M' + curve(fm, 26.5, 33.5, fr.X, fr.Y).join(' L'), { stroke: C.tealDark, w: 4 }));
  o.push(vdash(fr.X(31), fr.Y(0.3), 550, RUST, 3));
  const p = 0.119;
  o.push(t(fr.X(31) + 30, 418, 'P(X̄ &gt; 31)', { size: 21, weight: 700, fill: RUST }), t(fr.X(31) + 30, 450, `= ${p.toFixed(3)}`, { size: 21, weight: 700, fill: RUST }));
  o.push(t(fr.X(31) + 30, 262, 'X̄: mean of 50', { size: 21, weight: 700, fill: C.tealDark }), t(fr.X(31) + 30, 294, `sd 6/√50 = ${se.toFixed(2)}`, { size: 21 }));
  o.push(t(146, 458, 'one value X', { size: 21, weight: 700, fill: C.olive }), t(146, 490, 'sd 6', { size: 21 }));
  o.push(t(70, 714, 'Population: mean 30, sd 6. Sample size n = 50.', { size: 21 }));
  o.push(t(70, 756, 'E(X̄) = μ and Var(X̄) = σ²/n.', { size: 21, weight: 700 }));
  o.push(t(70, 798, 'Large n: X̄ ≈ N(30, 36/50) by the CLT.', { size: 21 }));
  o.push(t(70, 840, `z = (31 − 30)/${se.toFixed(4)} = ${(1 / se).toFixed(3)}`, { size: 21 }));
  return svg(W, 880, 'Means vary less than single values', o.join('\n'));
}

// ---------- S2 07 Confidence interval ----------
function confInt() {
  const o = [];
  const fr = frame(o, { x0: 120, y0: 590, x1: 850, y1: 250, xmin: 54, xmax: 59, ymax: 0.7, xt: [54, 55, 56, 57, 58, 59], yt: [0, 0.2, 0.4, 0.6], xlab: 'possible values of the mean', ylab: 'density' });
  const se = Math.sqrt((710 / 39) / 40), lo = 56.5 - 1.96 * se, hi = 56.5 + 1.96 * se;
  const f = (x) => npdf(x, 56.5, se);
  o.push(area(f, 54, lo, fr.X, fr.Y, '#e2c35a'), area(f, hi, 59, fr.X, fr.Y, '#e2c35a'), area(f, lo, hi, fr.X, fr.Y, '#bcd7d4'));
  o.push(path('M' + curve(f, 54, 59, fr.X, fr.Y).join(' L'), { stroke: C.ink, w: 3.5 }));
  o.push(vdash(fr.X(56.5), 250, 590, C.ink, 2.5));
  o.push(t(fr.X(56.5) + 12, 270, 'x̄ = 56.5', { size: 20, weight: 700 }));
  o.push(vdash(fr.X(lo), 186, 590, C.tealDark, 2.5), vdash(fr.X(hi), 186, 590, C.tealDark, 2.5));
  o.push(`<line x1="${fr.X(lo)}" y1="202" x2="${fr.X(hi)}" y2="202" stroke="${C.tealDark}" stroke-width="6" stroke-linecap="round"/>`);
  o.push(t(450, 174, `(${lo.toFixed(1)}, ${hi.toFixed(1)})`, { size: 24, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(fr.X(lo) - 8, 452, '2.5%', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }), t(fr.X(hi) + 8, 452, '2.5%', { size: 20, weight: 700, fill: C.olive }));
  o.push(t(fr.X(56.5), 494, '95%', { size: 30, weight: 700, anchor: 'middle' }));
  o.push(t(70, 734, 'n = 40, Σx = 2260, Σx² = 128 400', { size: 21 }));
  o.push(t(70, 776, 'x̄ = 56.5, s² = 710/39 = 18.21', { size: 21 }));
  o.push(t(70, 818, `x̄ ± 1.96 × √(18.21/40) = 56.5 ± ${(1.96 * se).toFixed(3)}`, { size: 21, weight: 700 }));
  o.push(t(70, 858, 'z: 90% 1.645, 95% 1.960, 99% 2.576', { size: 19, fill: C.muted }));
  return svg(W, 900, 'A 95% confidence interval', o.join('\n'));
}

// ---------- S2 08 Type I and Type II errors ----------
function typeErrors() {
  const o = [];
  const opts = (y0, y1) => ({ x0: 120, y0, x1: 850, y1, xmin: -0.5, xmax: 16.5, ymax: 0.25, xt: [0, 2, 4, 6, 8, 10, 12, 14, 16], yt: [0, 0.1, 0.2], ylab: 'probability' });
  const a = frame(o, opts(420, 200)), b = frame(o, { ...opts(780, 560), xlab: 'umbrellas sold in a week, r' });
  const bw = (a.X(1) - a.X(0)) * 0.8;
  let t1 = 0, t2 = 0;
  for (let r = 0; r <= 16; r++) {
    const p = pois(4.5, r), q = pois(7, r);
    if (r >= 9) t1 += p; else t2 += q;
    o.push(bar(a.X(r) - bw / 2, a.Y(p), bw, a.Y(0) - a.Y(p), r >= 9 ? RUST : PALE));
    o.push(bar(b.X(r) - bw / 2, b.Y(q), bw, b.Y(0) - b.Y(q), r <= 8 ? GOLD : CREAM));
  }
  t1 = 1 - Array.from({ length: 9 }, (_, r) => pois(4.5, r)).reduce((s, v) => s + v, 0);
  o.push(vdash(a.X(8.5), 140, 790, C.ink, 3));
  o.push(t(a.X(8.5) - 12, 132, `← accept ${H0}`, { size: 20, weight: 700, anchor: 'end' }), t(a.X(8.5) + 12, 132, `reject ${H0} →`, { size: 20, weight: 700 }));
  o.push(t(70, 168, sub('If H', '0', ' is true: λ = 4.5'), { size: 21, weight: 700, fill: C.tealDark }));
  o.push(t(70, 528, sub('If H', '0', ' is false: really λ = 7'), { size: 21, weight: 700, fill: C.olive }));
  o.push(t(614, 270, 'Type I error', { size: 22, weight: 700, fill: RUST }), t(614, 302, `P(X ≥ 9) = ${t1.toFixed(4)}`, { size: 21 }));
  o.push(t(558, 568, 'Type II error', { size: 22, weight: 700, fill: C.olive }), t(558, 600, `P(X ≤ 8) = ${t2.toFixed(3)}`, { size: 21 }));
  o.push(t(70, 908, sub('Type I: reject H', '0', ' when it is true.'), { size: 20 }));
  o.push(t(70, 944, sub('Type II: accept H', '0', ' when it is false.'), { size: 20 }));
  return svg(W, 980, 'Wrong decisions in a test', o.join('\n'));
}

// ---------- S2 09 Normal 68-95-99.7 ----------
function normal689() {
  const o = [];
  const fr = frame(o, { x0: 120, y0: 480, x1: 850, y1: 150, xmin: 237, xmax: 264, ymax: 0.12, xt: [], yt: [0, 0.05, 0.1] });
  const f = (x) => npdf(x, 250, 4);
  o.push(area(f, 237, 264, fr.X, fr.Y, LIGHT), area(f, 242, 258, fr.X, fr.Y, PALE), area(f, 246, 254, fr.X, fr.Y, TEAL));
  o.push(path('M' + curve(f, 237, 264, fr.X, fr.Y).join(' L'), { stroke: C.ink, w: 4 }));
  o.push(vdash(fr.X(250), fr.Y(f(250)), 480, C.ink, 2));
  for (const v of [238, 242, 246, 250, 254, 258, 262]) {
    o.push(`<line x1="${fr.X(v)}" y1="480" x2="${fr.X(v)}" y2="488" stroke="${C.ink}" stroke-width="2.5"/>`);
    o.push(t(fr.X(v), 515, String(v), { size: 19, anchor: 'middle' }), t(fr.X(v), 552, ['−3', '−2', '−1', '0', '1', '2', '3'][(v - 238) / 4], { size: 19, fill: C.muted, anchor: 'middle' }));
  }
  o.push(t(98, 515, 'g', { size: 19, fill: C.muted, anchor: 'middle' }), t(98, 552, 'z', { size: 19, fill: C.muted, anchor: 'middle', italic: true }));
  for (const v of [246, 254]) o.push(`<circle cx="${fr.X(v)}" cy="${fr.Y(f(v))}" r="9" fill="${RUST}" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(t(fr.X(246) - 14, fr.Y(f(246)) - 20, 'inflection', { size: 20, weight: 700, fill: RUST, anchor: 'end' }), t(fr.X(254) + 14, fr.Y(f(254)) - 20, 'inflection', { size: 20, weight: 700, fill: RUST }));
  o.push(t(fr.X(250), fr.Y(f(246)) + 14, '68%', { size: 26, weight: 700, anchor: 'middle' }).replace('<text ', `<text paint-order="stroke" stroke="${TEAL}" stroke-width="5" `));
  const br = (a, b, y, s) => {
    o.push(`<path d="M${fr.X(a)} ${y - 12} V${y} H${fr.X(b)} V${y - 12}" fill="none" stroke="${C.ink}" stroke-width="3"/>`);
    o.push(t((fr.X(a) + fr.X(b)) / 2, y + 34, s, { size: 22, weight: 700, anchor: 'middle' }));
  };
  br(246, 254, 592, '68% within 1 sd'); br(242, 258, 676, '95% within 2 sd'); br(238, 262, 760, '99.7% within 3 sd');
  o.push(t(70, 878, 'Symmetrical about μ = 250 g; total area 1.', { size: 19, fill: C.muted }));
  o.push(t(70, 910, 'Inflection points at μ ± σ = 246 and 254.', { size: 19, fill: C.muted }));
  return svg(W, 940, 'The Normal curve: X ~ N(250, 4²)', o.join('\n'));
}

export const figures = [
  { name: '06-venn-conditional', after: '## Method boxes', svg: venn(),
    alt: 'Venn regions A only 0.45, both 0.10, B only 0.25, neither 0.20. Given B the sample space is the B circle (0.35), so P(A|B) = 0.10/0.35 = 2/7. Given not A the space is 0.45, so P(B|A\') = 0.25/0.45 = 5/9.',
    caption: 'The condition becomes the new sample space and sits in the denominator.' },
  { name: '08-independence-model-check', after: '## Small worked reminders', svg: modelCheck(),
    alt: 'Two students chosen when 45% are girls: the independent model gives 0.2025. The exact value without replacement is 0.2023 for 1200 students (gap 0.0002); illustrative sizes of 100 and 20 students give gaps 0.0025 and 0.0130.',
    caption: 'Independence is a good approximation for a large population but poor for a small group.' },
  { name: '03-dice-sample-space-independence', after: '### Answers', svg: dice(),
    alt: 'A 6 by 6 grid of two-dice totals. A (first die even) covers 18 cells, B (total 7) 6 cells, both 3 cells. 1/2 x 1/6 = 1/12 = 3/36, so A and B are independent.',
    caption: 'Counting cells in the sample space shows P(A and B) equals P(A) x P(B).' },
  { name: '07-reversing-the-condition', after: '## Method boxes', svg: reversing(),
    alt: 'Out of 10 000 components, 400 faulty and 9 600 good. The test flags 380 faulty and 288 good, 668 in all, so P(faulty given flagged) = 380/668 = 0.569, matching 0.038/0.0668 on a tree.',
    caption: 'Reversing the condition means dividing one tree path by all paths that end in the observed outcome.' },
  { name: '09-normal-68-95-997', after: '## Calculator checklist', svg: normal689(),
    alt: 'Bell curve for N(250, 4²), symmetric about 250 g. Shaded bands show 68% within 1 sd (246 to 254), 95% within 2 sd and 99.7% within 3 sd. The points of inflection at 246 and 254 are marked, and a second row gives z from −3 to 3.',
    caption: 'The Normal curve is symmetrical, has inflection points at μ ± σ and holds about 68%, 95% and 99.7% of values within 1, 2 and 3 sd.' },
  { name: '02-poisson-approx-binomial', after: '## Small worked reminders', svg: approxBinomial(),
    alt: 'Paired bars for r = 0 to 9 compare the exact binomial B(200, 0.015) with Po(3); they are almost identical. P(X ≤ 2) is 0.421 exactly and 0.423 by the Poisson. The rule is n > 50 and np < 5.',
    caption: 'B(200, 0.015) and Po(3) side by side, showing why Po(np) works for large n and small p.' },
  { name: '07-confidence-interval-95', after: '## Calculator checklist', svg: confInt(),
    alt: 'A normal curve of the sample mean centred on 56.5 with standard error 0.675. The central 95% of area, from 55.2 to 57.8, is shaded teal with 2.5% in each tail, and a bracket marks the interval (55.2, 57.8).',
    caption: 'The 95% interval is the sample mean plus or minus 1.96 standard errors.' },
  { name: '03-poisson-normal-correction', after: '## Calculator checklist', svg: poissonNormal(),
    alt: 'Bars for Po(25) with the curve N(25, 25) drawn over them. Bars from r = 31 are gold and a dashed line at 30.5 shows the continuity-corrected boundary. z = 1.1 gives 1 − Φ(1.1) = 0.136.',
    caption: 'Why P(X > 30) becomes P(Y > 30.5) when a Poisson is approximated by a normal.' },
  { name: '04-linear-combinations-variance', after: '## Calculator checklist', svg: linearComb(),
    alt: 'Two normal curves share mean 4040 g. The tall narrow one is the total of four separate bags (variance 4σ² = 256) and the low wide one is four times one bag (variance 16σ² = 1024).',
    caption: 'Adding four independent bags gives variance 4σ², but scaling one bag by 4 gives 16σ².' },
  { name: '05-pdf-area-mean-median', after: '## Calculator checklist', svg: pdfArea(),
    alt: 'Graph of f(x) = (4x − x²)/9 on 0 to 3. The total area is 1 and a dashed line at the median 1.79 splits it into two halves. The mean, 7/4, sits just left of the median. Variance is 0.538.',
    caption: 'A pdf has area 1; the median splits the area in half and the mean is the balance point.' },
  { name: '06-sample-mean-distribution', after: '## Calculator checklist', svg: sampleMean(),
    alt: 'Two normal curves centred on 30: a wide one for a single value (sd 6) and a narrow one for the mean of 50 values (sd 0.85). The area of the narrow curve above 31 is shaded and equals 0.119.',
    caption: 'The mean of 50 values varies far less than one value, so P(X̄ > 31) is only 0.119.' },
  { name: '01-poisson-events', after: '### The binomial distribution', svg: poissonEvents(),
    alt: 'Bar chart of Po(3.2) for r = 0 to 10. The bar at r = 2 is gold with probability 0.209 and the bars from r = 3 upward are dark teal with total 0.620. A dashed line at 3.2 marks the mean, which equals the variance.',
    caption: 'The Po(3.2) distribution, with P(X = 2) = 0.209 and P(X ≥ 3) = 0.620 marked.' },
  { name: '08-type-i-type-ii-poisson', after: '## Next steps', svg: typeErrors(),
    alt: 'Two bar charts share a dashed boundary between 8 and 9. Under H0 (Po(4.5)) the bars from 9 upward have probability 0.0403, the Type I error. If the true mean is 7 (Po(7)) the bars up to 8 have probability 0.729, the Type II error.',
    caption: 'Type I error is landing in the rejection region when H0 is true; Type II is landing outside it when H0 is false.' },
];
