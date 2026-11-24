// Board-neutral redraws of the cumulative frequency figures (120 students' times). Same data, readings
// and wording as the earlier set, with the "Extended" tier badges removed. The curve is a monotone cubic
// through the plotted points, so the readings shown (≈22, 30, ≈39, ≈14, ≈47, ≈77, ≈103) come off it.
import { C, svg, t, arrow, path, panel } from '../style.mjs';

export const slug = 'mathematics-cumulative-frequency-diagrams';
const W = 900;
const halo = (x, y, s, o) => t(x, y, s, o).replace('<text ', '<text paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round" ');

function mono(xs, ys) {
  const n = xs.length, d = [], m = [];
  for (let i = 0; i < n - 1; i++) d.push((ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]));
  m[0] = d[0]; m[n - 1] = d[n - 2];
  for (let i = 1; i < n - 1; i++) m[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
  for (let i = 0; i < n - 1; i++) {
    if (d[i] === 0) { m[i] = m[i + 1] = 0; continue; }
    const a = m[i] / d[i], b = m[i + 1] / d[i], s = a * a + b * b;
    if (s > 9) { const k = 3 / Math.sqrt(s); m[i] = k * a * d[i]; m[i + 1] = k * b * d[i]; }
  }
  return (x) => {
    let i = 0; while (i < n - 2 && x > xs[i + 1]) i++;
    const h = xs[i + 1] - xs[i], u = (x - xs[i]) / h;
    return (2 * u ** 3 - 3 * u ** 2 + 1) * ys[i] + (u ** 3 - 2 * u ** 2 + u) * h * m[i] + (-2 * u ** 3 + 3 * u ** 2) * ys[i + 1] + (u ** 3 - u ** 2) * h * m[i + 1];
  };
}
const inv = (f, y) => { let a = 0, b = 60; for (let k = 0; k < 60; k++) { const c = (a + b) / 2; if (f(c) < y) a = c; else b = c; } return (a + b) / 2; };

const TX = [0, 10, 20, 30, 40, 50, 60], CF = [0, 6, 24, 60, 92, 112, 120];
const S = mono(TX, CF);
const T = mono([0, 10, 15, 20, 26, 32, 40, 50, 60], [0, 3, 12, 28, 60, 93, 115, 120, 120]); // teachers: median 26, IQR ≈ 11

// Standard CF axes: time 0-60, frequency 0-120.
function axes(o, px = 130, py = 140, pw = 620, ph = 450) {
  const X = (x) => px + (x / 60) * pw, Y = (y) => py + ph - (y / 120) * ph;
  o.push(`<rect x="${px}" y="${py}" width="${pw}" height="${ph}" fill="#fff"/>`);
  for (let x = 10; x <= 60; x += 10) o.push(`<line x1="${X(x)}" y1="${py}" x2="${X(x)}" y2="${py + ph}" stroke="#dde6e4" stroke-width="1.5"/>`);
  for (let y = 20; y <= 120; y += 20) o.push(`<line x1="${px}" y1="${Y(y)}" x2="${px + pw}" y2="${Y(y)}" stroke="#dde6e4" stroke-width="1.5"/>`);
  o.push(arrow(px, py + ph, px + pw + 30, py + ph, { w: 3 }), arrow(px, py + ph, px, py - 26, { w: 3 }));
  for (let x = 0; x <= 60; x += 10) o.push(t(X(x), py + ph + 28, String(x), { size: 17, anchor: 'middle' }));
  for (let y = 0; y <= 120; y += 20) o.push(t(px - 12, Y(y) + 6, String(y), { size: 17, anchor: 'end' }));
  o.push(t(px + pw / 2, py + ph + 64, 'Time, t (minutes)', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(`<text transform="translate(${px - 62} ${py + ph / 2}) rotate(-90)" font-size="19" font-weight="700" fill="${C.ink}" text-anchor="middle">Cumulative frequency</text>`);
  const curve = (f, col = C.tealDark, extra = '') => {
    const pts = []; for (let i = 0; i <= 240; i++) { const x = (60 * i) / 240; pts.push(`${X(x).toFixed(1)} ${Y(f(x)).toFixed(1)}`); }
    return path('M' + pts.join(' L'), { stroke: col, w: 4.5, extra });
  };
  return { X, Y, curve, bottom: py + ph };
}
// guide: across from the y-axis at y, then down to the axis at x
const guide = (A, x, y, col, w = 2.5) => `<polyline points="${A.X(0)},${A.Y(y)} ${A.X(x)},${A.Y(y)} ${A.X(x)},${A.Y(0)}" fill="none" stroke="${col}" stroke-width="${w}" stroke-dasharray="8 6"/>`;
const dot = (A, x, y, col) => `<circle cx="${A.X(x)}" cy="${A.Y(y)}" r="7" fill="${col}"/>`;

// ---------- 01 Build the running total ----------
function buildTable() {
  const o = [];
  const classes = ['0 &lt; t ≤ 10', '10 &lt; t ≤ 20', '20 &lt; t ≤ 30', '30 &lt; t ≤ 40', '40 &lt; t ≤ 50', '50 &lt; t ≤ 60'];
  const f = [6, 18, 36, 32, 20, 8], u = 3.0;
  const fx = 210, rx = 450;
  o.push(t(fx, 132, 'Frequency', { size: 20, weight: 700 }), t(rx, 132, 'Running total', { size: 20, weight: 700 }));
  let run = 0;
  f.forEach((v, i) => {
    const y = 160 + i * 74;
    o.push(t(40, y + 32, classes[i], { size: 18 }));
    o.push(`<rect x="${fx}" y="${y + 8}" width="${v * u * 1.6}" height="40" rx="4" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`);
    o.push(t(fx + v * u * 1.6 + 10, y + 35, String(v), { size: 19, weight: 700 }));
    if (run) o.push(`<rect x="${rx}" y="${y + 8}" width="${run * u}" height="40" rx="4" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`);
    o.push(`<rect x="${rx + run * u}" y="${y + 8}" width="${v * u}" height="40" rx="4" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`);
    run += v;
    o.push(t(rx + run * u + 10, y + 35, String(run), { size: 19, weight: 700, fill: C.tealDark }));
  });
  o.push(panel(40, 620, 820, 60, '#fff', C.ink));
  o.push(t(W / 2, 658, 'Last total must equal 120, all the students', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(`<rect x="160" y="705" width="30" height="22" rx="3" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`, t(200, 723, 'new class added', { size: 18 }));
  o.push(`<rect x="480" y="705" width="30" height="22" rx="3" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`, t(520, 723, 'total so far', { size: 18 }));
  return svg(W, 760, 'Build the running total', o.join('\n'), 'Add each frequency to the total so far');
}

// ---------- 02 Draw the curve ----------
function drawCurve() {
  const o = [];
  const A = axes(o);
  o.push(A.curve(S));
  TX.forEach((x, i) => {
    const cx = A.X(x), cy = A.Y(CF[i]);
    o.push(`<path d="M${cx - 8} ${cy - 8} l16 16 M${cx + 8} ${cy - 8} l-16 16" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/>`);
  });
  o.push(halo(A.X(3), A.Y(36), 'Start at (0, 0)', { size: 20, weight: 700, fill: C.rust }));
  o.push(arrow(A.X(6), A.Y(30), A.X(0.8), A.Y(2.5), { color: C.rust, w: 3.5, marker: 'ahR' }));
  o.push(halo(A.X(3), A.Y(104), 'Top of class: (30, 60)', { size: 20, weight: 700, fill: C.rust }));
  o.push(arrow(A.X(21), A.Y(97), A.X(29), A.Y(63), { color: C.rust, w: 3.5, marker: 'ahR' }));
  o.push(halo(A.X(57), A.Y(30), 'S-shaped,', { size: 20, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(halo(A.X(57), A.Y(30) + 26, 'never falls', { size: 20, weight: 700, fill: C.tealDark, anchor: 'end' }));
  return svg(W, A.bottom + 100, 'Plot at the upper boundary', o.join('\n'), 'Cross each point, then draw one smooth curve');
}

// ---------- 03 Median, quartiles and IQR ----------
function quartiles() {
  const o = [];
  const A = axes(o);
  const lq = inv(S, 30), md = inv(S, 60), uq = inv(S, 90);
  o.push(guide(A, lq, 30, C.rust), guide(A, md, 60, C.ink, 3), guide(A, uq, 90, C.olive));
  o.push(A.curve(S));
  o.push(dot(A, lq, 30, C.rust), dot(A, md, 60, C.ink), dot(A, uq, 90, C.olive));
  o.push(halo(A.X(0) + 10, A.Y(30) - 10, '30', { size: 18, weight: 700, fill: C.rust }));
  o.push(halo(A.X(0) + 10, A.Y(60) - 10, '60', { size: 18, weight: 700 }));
  o.push(halo(A.X(0) + 10, A.Y(90) - 10, '90', { size: 18, weight: 700, fill: C.olive }));
  const y = A.bottom + 116;
  o.push(t(A.X(30), y, 'Median = 30', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(A.X(22), y + 34, 'LQ ≈ 22', { size: 21, weight: 700, fill: C.rust, anchor: 'end' }));
  o.push(t(A.X(39), y + 34, 'UQ ≈ 39', { size: 21, weight: 700, fill: C.olive }));
  o.push(`<path d="M${A.X(22)} ${y + 46} v14 H${A.X(39)} v-14" fill="none" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(t(A.X(30), y + 92, 'IQR = 39 − 22 = 17', { size: 21, weight: 700, anchor: 'middle' }));
  return svg(W, y + 130, 'Median, quartiles and IQR', o.join('\n'), 'n = 120: read across at n/4, n/2, 3n/4');
}

// ---------- 04 Percentiles ----------
function percentiles() {
  const o = [];
  const A = axes(o);
  const p10 = inv(S, 12), p90 = inv(S, 108);
  o.push(guide(A, p10, 12, C.rust), guide(A, p90, 108, C.olive));
  o.push(A.curve(S));
  o.push(dot(A, p10, 12, C.rust), dot(A, p90, 108, C.olive));
  o.push(halo(A.X(0) + 10, A.Y(12) - 10, '12', { size: 18, weight: 700, fill: C.rust }));
  o.push(halo(A.X(0) + 10, A.Y(108) - 10, '108', { size: 18, weight: 700, fill: C.olive }));
  o.push(halo(A.X(p10) + 10, A.Y(0) - 12, '≈ 14', { size: 19, weight: 700, fill: C.rust }));
  o.push(halo(A.X(p90) - 10, A.Y(0) - 12, '≈ 47', { size: 19, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(halo(A.X(4), A.Y(95), '90th percentile:', { size: 20, weight: 700, fill: C.olive }));
  o.push(halo(A.X(4), A.Y(95) + 26, 'slowest 10%', { size: 20, weight: 700, fill: C.olive }));
  o.push(halo(A.X(24), A.Y(20), '10th percentile:', { size: 20, weight: 700, fill: C.rust }));
  o.push(halo(A.X(24), A.Y(20) + 26, 'fastest 10%', { size: 20, weight: 700, fill: C.rust }));
  const y = A.bottom + 116;
  o.push(t(W / 2, y, 'Slowest 10% means the 90th, not the 10th', { size: 21, weight: 700, anchor: 'middle' }));
  return svg(W, y + 40, 'Percentiles', o.join('\n'), 'Read across at (p ÷ 100) × 120');
}

// ---------- 05 Time to number ----------
function timeToNumber() {
  const o = [];
  const A = axes(o);
  o.push(guide(A, 35, S(35), C.rust), guide(A, 45, S(45), C.olive));
  o.push(A.curve(S));
  o.push(dot(A, 35, S(35), C.rust), dot(A, 45, S(45), C.olive));
  o.push(halo(A.X(0) + 10, A.Y(S(35)) - 10, '≈ 77', { size: 19, weight: 700, fill: C.rust }));
  o.push(halo(A.X(0) + 10, A.Y(S(45)) - 10, '≈ 103', { size: 19, weight: 700, fill: C.olive }));
  o.push(halo(A.X(35) - 8, A.Y(4), 'start 35', { size: 18, weight: 700, fill: C.rust, anchor: 'end' }));
  o.push(halo(A.X(45) + 8, A.Y(10), 'start 45', { size: 18, weight: 700, fill: C.olive }));
  const y = A.bottom + 96;
  o.push(panel(40, y, 820, 140, '#fff', C.ink));
  o.push(t(64, y + 38, '35 min or less: ≈ 77 students', { size: 20, weight: 700, fill: C.rust }));
  o.push(t(64, y + 74, 'More than 45 min: 120 − 103 = 17 students', { size: 20, weight: 700, fill: C.olive }));
  o.push(t(64, y + 110, '17 ÷ 120 × 100 ≈ 14%', { size: 20, weight: 700 }));
  return svg(W, y + 170, 'From a time to a number', o.join('\n'), 'Up to the curve, then across');
}

// ---------- 06 Comparing two groups ----------
function comparing() {
  const o = [];
  const A = axes(o);
  const tm = inv(T, 60), sm = inv(S, 60);
  o.push(`<line x1="${A.X(0)}" y1="${A.Y(60)}" x2="${A.X(sm)}" y2="${A.Y(60)}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="8 6"/>`);
  o.push(`<line x1="${A.X(tm)}" y1="${A.Y(60)}" x2="${A.X(tm)}" y2="${A.Y(0)}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="8 6"/>`);
  o.push(`<line x1="${A.X(sm)}" y1="${A.Y(60)}" x2="${A.X(sm)}" y2="${A.Y(0)}" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="8 6"/>`);
  o.push(A.curve(S), A.curve(T, C.olive, 'stroke-dasharray="14 9"'));
  o.push(halo(A.X(4), A.Y(104), 'Teachers', { size: 21, weight: 700, fill: C.olive }));
  o.push(halo(A.X(52), A.Y(42), 'Students', { size: 21, weight: 700, fill: C.tealDark }));
  const y = A.bottom + 110;
  const bar = (yy, lq, md, uq, fill, edge) =>
    `<rect x="${A.X(lq)}" y="${yy}" width="${A.X(uq) - A.X(lq)}" height="34" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` +
    `<line x1="${A.X(md)}" y1="${yy - 4}" x2="${A.X(md)}" y2="${yy + 38}" stroke="${C.ink}" stroke-width="4"/>`;
  o.push(t(A.X(0), y, 'Teachers: median 26, IQR 11', { size: 20, weight: 700 }));
  o.push(bar(y + 14, inv(T, 30), tm, inv(T, 90), C.cream, C.olive));
  o.push(t(A.X(0), y + 86, 'Students: median 30, IQR 17', { size: 20, weight: 700 }));
  o.push(bar(y + 100, inv(S, 30), sm, inv(S, 90), C.tealLight, C.tealDark));
  o.push(t(W / 2, y + 180, 'Bars: middle half of each group. Line: median.', { size: 18, fill: C.muted, anchor: 'middle' }));
  o.push(t(W / 2, y + 214, 'Lower median: faster. Smaller IQR: more consistent.', { size: 20, weight: 700, anchor: 'middle' }));
  return svg(W, y + 250, 'Comparing two groups', o.join('\n'), 'Students and teachers, 120 each');
}

export const figures = [
  { name: '03-median-quartiles-iqr', after: '## 12.03a Grouped data', svg: quartiles(),
    alt: 'On the curve for 120 students, reading across at 30, 60 and 90 and down gives LQ about 22, median 30 and UQ about 39 minutes. The IQR is 39 minus 22 = 17 minutes.',
    caption: 'Read across at n/4, n/2 and 3n/4, then down; the IQR is UQ minus LQ.' },
  { name: '02-draw-the-curve', after: '## Methods in steps', svg: drawCurve(),
    alt: 'Crosses at (0,0), (10,6), (20,24), (30,60), (40,92), (50,112), (60,120) are joined by one smooth S-shaped curve. The start at zero and the upper class boundary are highlighted.',
    caption: 'Plot each running total at the upper class boundary, start at (0, 0) and join with a smooth curve.' },
  { name: '01-build-the-table', after: '### Answers', svg: buildTable(),
    alt: 'Six time classes with frequencies 6, 18, 36, 32, 20, 8 are shown as bars beside running-total bars that grow to 6, 24, 60, 92, 112, 120. The last total equals 120, the number of students.',
    caption: 'Each running total adds the new class to the total so far, and the last must equal the total frequency.' },
  { name: '06-comparing-groups', after: '## Chart choice at a glance', svg: comparing(),
    alt: 'Two curves on one grid: teachers have median 26 and IQR 11, students median 30 and IQR about 17. Bars show the middle half of each group. Teachers were faster and more consistent.',
    caption: 'Compare a lower median (faster) and a smaller IQR (more consistent), in context.' },
  { name: '05-time-to-number', after: '## Methods in steps', svg: timeToNumber(),
    alt: 'Starting at 35 minutes and reading up then across gives about 77 students. Starting at 45 gives about 103, so more than 45 minutes is 120 minus 103 = 17 students, about 14%.',
    caption: 'From a time, go up to the curve then across; for "more than", subtract from the total.' },
  { name: '04-percentiles', after: '## Quartiles, IQR and percentiles (S5, Extension only)', svg: percentiles(),
    alt: 'Reading across at 12 gives the 10th percentile, about 14 minutes; reading across at 108 gives the 90th percentile, about 47 minutes. The slowest 10% need the 90th percentile.',
    caption: 'The p-th percentile is read at p/100 of the total; the slowest 10% is the 90th percentile.' },
];
