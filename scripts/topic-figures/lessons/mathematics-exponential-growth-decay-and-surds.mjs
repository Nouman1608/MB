// Board-neutral redraws of four GCSE / IGCSE surds and growth-and-decay pictures first drawn for
// Cambridge 0580 and reused on AQA, OCR, OxfordAQA and other pages. Same numbers; the "Extended" tier
// badge is gone.
import { C, svg, t, tl, path } from '../style.mjs';

export const slug = 'mathematics-exponential-growth-decay-and-surds';
const W = 900;
const SURF = '#e3eeee', GRID = '#c9d6d4', TEAL = '#6fa9a2', GOLD = '#d4b02e';
const rt = (s) => `√${s}`;

function grid(x0, y0, x1, y1, ys, yl) {
  return ys.map((v) => `<line x1="${x0}" y1="${yl(v)}" x2="${x1}" y2="${yl(v)}" stroke="${GRID}" stroke-width="2"/>`).join('');
}
function axes(x0, y0, x1, ytop) {
  return `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="${C.ink}" stroke-width="3"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${ytop}" stroke="${C.ink}" stroke-width="3"/>`;
}
const sp = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

// ---------- 01 Growth vs linear ----------
function growth() {
  const o = [];
  const x0 = 130, y0 = 640, x1 = 690, sx = (x1 - x0) / 8, ylo = 24500, sy = 85 / 1000;
  const X = (n) => x0 + n * sx, Y = (v) => y0 - (v - ylo) * sy;
  o.push(grid(x0, y0, x1, 0, [25000, 26000, 27000, 28000, 29000, 30000], Y));
  o.push(axes(x0, y0, x1, 130));
  for (const v of [25000, 26000, 27000, 28000, 29000, 30000]) o.push(t(x0 - 12, Y(v) + 7, sp(v), { size: 19, fill: C.muted, anchor: 'end' }));
  for (let n = 0; n <= 8; n += 2) { o.push(`<line x1="${X(n)}" y1="${y0}" x2="${X(n)}" y2="${y0 + 8}" stroke="${C.ink}" stroke-width="2.5"/>`); o.push(t(X(n), y0 + 34, String(n), { size: 19, fill: C.muted, anchor: 'middle' })); }
  o.push(t((x0 + x1) / 2, y0 + 72, 'Years', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(path(`M${X(0)} ${Y(25000)} L${X(8)} ${Y(29800)}`, { stroke: C.rust, w: 4, extra: 'stroke-dasharray="12 8"' }));
  const pts = Array.from({ length: 9 }, (_, n) => [X(n), Y(25000 * 1.024 ** n)]);
  o.push(path('M' + pts.map(([x, y]) => `${x} ${y}`).join(' L'), { stroke: C.tealDark, w: 5 }));
  pts.forEach(([x, y]) => o.push(`<circle cx="${x}" cy="${y}" r="6" fill="${C.tealDark}"/>`));
  o.push(`<line x1="706" y1="${Y(30223)}" x2="706" y2="${Y(29800)}" stroke="${C.ink}" stroke-width="4"/>`);
  o.push(t(720, Y(30223) - 8, '30 223', { size: 21, weight: 700, fill: C.tealDark }));
  o.push(t(720, Y(29800) + 34, '29 800', { size: 21, weight: 700, fill: C.rust }));
  o.push(t(158, 150, 'Exponential', { size: 22, weight: 700, fill: C.tealDark }));
  o.push(t(158, 182, '25 000 × 1.024<tspan dy="-8" font-size="70%">n</tspan>', { size: 20, fill: C.tealDark }));
  o.push(t(355, Y(26000) + 2, 'Linear: +600 each year', { size: 20, weight: 700, fill: C.rust }));
  o.push(t(130, y0 + 112, 'Vertical axis starts at 24 500', { size: 18, fill: C.muted }));
  return svg(W, 790, 'Growth: 2.4% a year', o.join('\n'));
}

// ---------- 03 Fish decay ----------
function fish() {
  const o = [];
  const x0 = 130, y0 = 640, x1 = 850, sx = (x1 - x0) / 14, sy = 500 / 4000;
  const X = (n) => x0 + n * sx, Y = (v) => y0 - v * sy;
  o.push(grid(x0, y0, x1, 0, [1000, 2000, 3000, 4000], Y));
  o.push(axes(x0, y0, x1, Y(4000) - 6));
  for (const v of [0, 1000, 2000, 3000, 4000]) o.push(t(x0 - 12, Y(v) + 7, sp(v), { size: 19, fill: C.muted, anchor: 'end' }));
  for (let n = 0; n <= 14; n += 2) { o.push(`<line x1="${X(n)}" y1="${y0}" x2="${X(n)}" y2="${y0 + 8}" stroke="${C.ink}" stroke-width="2.5"/>`); o.push(t(X(n), y0 + 34, String(n), { size: 19, fill: C.muted, anchor: 'middle' })); }
  o.push(t((x0 + x1) / 2, y0 + 72, 'Years', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(`<line x1="${x0}" y1="${Y(2000)}" x2="${x1}" y2="${Y(2000)}" stroke="${C.rust}" stroke-width="3.5" stroke-dasharray="12 8"/>`);
  o.push(t(x1, Y(2000) - 14, 'Target 2000', { size: 21, weight: 700, fill: C.rust, anchor: 'end' }));
  const pts = Array.from({ length: 15 }, (_, n) => [X(n), Y(3600 * 0.94 ** n)]);
  o.push(path('M' + pts.map(([x, y]) => `${x} ${y}`).join(' L'), { stroke: C.tealDark, w: 5 }));
  pts.forEach(([x, y]) => o.push(`<circle cx="${x}" cy="${y}" r="5" fill="${C.tealDark}"/>`));
  o.push(`<circle cx="${pts[9][0]}" cy="${pts[9][1]}" r="9" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="1.5"/>`);
  o.push(`<circle cx="${pts[10][0]}" cy="${pts[10][1]}" r="9" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.5"/>`);
  o.push(t(pts[9][0] - 14, Y(2000) + 58, 'Year 9: 2063', { size: 21, weight: 700, anchor: 'end' }));
  o.push(t(pts[10][0] - 30, Y(2000) + 96, 'Year 10: 1939', { size: 21, weight: 700, fill: C.rust }));
  o.push(t(150, 160, '3600 × 0.94<tspan dy="-8" font-size="70%">n</tspan>', { size: 22, weight: 700, fill: C.tealDark }));
  o.push(t(150, 194, '6% fewer fish a year', { size: 20, fill: C.muted }));
  return svg(W, 750, 'Below 2000 fish?', o.join('\n'));
}

// ---------- 04 Surd diagonal ----------
function diagonal() {
  const o = [];
  const x0 = 130, s = 100, top = 300, bot = top + 4 * s; // 100 px per cm
  o.push(`<rect x="${x0}" y="${top}" width="${4 * s}" height="${4 * s}" fill="${SURF}"/>`);
  for (let i = 1; i < 4; i++) o.push(`<line x1="${x0 + i * s}" y1="${top}" x2="${x0 + i * s}" y2="${bot}" stroke="${GRID}" stroke-width="1.5"/><line x1="${x0}" y1="${top + i * s}" x2="${x0 + 4 * s}" y2="${top + i * s}" stroke="${GRID}" stroke-width="1.5"/>`);
  o.push(`<rect x="${x0}" y="${top}" width="${4 * s}" height="${4 * s}" fill="none" stroke="${C.ink}" stroke-width="4"/>`);
  o.push(`<line x1="${x0}" y1="${bot}" x2="${x0 + 4 * s}" y2="${top}" stroke="${C.rust}" stroke-width="6"/>`);
  o.push(`<text transform="translate(${x0 + 150} ${bot - 210}) rotate(-45)" font-size="21" font-weight="700" fill="${C.rust}" text-anchor="middle" paint-order="stroke" stroke="${SURF}" stroke-width="6">${rt(32)} = 4${rt(2)}</text>`);
  o.push(t(x0 - 14, (top + bot) / 2 + 8, '4 cm', { size: 21, weight: 700, anchor: 'end' }));
  o.push(t(x0 + 2 * s, bot + 40, '4 cm', { size: 21, weight: 700, anchor: 'middle' }));
  // arc from the top-right corner down to the number line, centred at the origin of the line
  const ly = bot + 110, r = 4 * Math.SQRT2 * s, ex = x0 + r;
  const sx = x0 + 4 * s, sy = top;
  // arc centred at (x0, bot) from top-right corner down to the level of the bottom, then straight down to the line
  o.push(`<path d="M${sx} ${sy} A${r} ${r} 0 0 1 ${ex} ${bot}" fill="none" stroke="${C.rust}" stroke-width="3.5" stroke-dasharray="10 8"/>`);
  o.push(`<line x1="${ex}" y1="${bot}" x2="${ex}" y2="${ly}" stroke="${C.rust}" stroke-width="3"/>`);
  o.push(`<line x1="${x0}" y1="${ly}" x2="${x0 + 6.5 * s}" y2="${ly}" stroke="${C.ink}" stroke-width="3.5"/>`);
  for (let i = 0; i <= 6; i++) { o.push(`<line x1="${x0 + i * s}" y1="${ly - 10}" x2="${x0 + i * s}" y2="${ly + 10}" stroke="${C.ink}" stroke-width="3"/>`); o.push(t(x0 + i * s, ly + 42, String(i), { size: 20, fill: C.ink, anchor: 'middle' })); }
  o.push(`<circle cx="${ex}" cy="${ly}" r="10" fill="${C.rust}"/>`);
  o.push(t(ex + 16, ly - 24, '≈ 5.657', { size: 21, weight: 700, fill: C.rust }));
  o.push(t(130, 158, '16 + 16 = 32', { size: 24, weight: 700 }));
  o.push(t(130, 194, `${rt(32)} = ${rt(16)} × ${rt(2)} = 4${rt(2)}`, { size: 24, weight: 700, fill: C.rust }));
  return svg(W, 900, 'A surd is an exact length', o.join('\n'));
}

// ---------- 05 Conjugate area ----------
function conjugate() {
  const o = [];
  const u = 90, x0 = 100, y0 = 110, r5 = Math.sqrt(5) * u;
  // 3 x 3 square split into: top strip (3 by 3-√5), right strip (3-√5 by √5), cut-out √5 square
  o.push(`<rect x="${x0}" y="${y0}" width="${3 * u}" height="${3 * u - r5}" fill="${TEAL}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(`<rect x="${x0 + r5}" y="${y0 + 3 * u - r5}" width="${3 * u - r5}" height="${r5}" fill="${GOLD}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(`<rect x="${x0}" y="${y0 + 3 * u - r5}" width="${r5}" height="${r5}" fill="none" stroke="${C.rust}" stroke-width="3" stroke-dasharray="10 7"/>`);
  o.push(t(x0 + 1.5 * u, y0 - 16, '3', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(x0 - 22, y0 + 1.5 * u + 8, '3', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(x0 + r5 / 2, y0 + 3 * u - r5 / 2 + 8, '5 cut out', { size: 21, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(x0 + r5 / 2, y0 + 3 * u + 38, rt(5), { size: 22, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(410, 280, 'Square 9', { size: 25, weight: 700 }));
  o.push(t(410, 318, '9 − 5 = 4', { size: 29, weight: 700, fill: C.tealDark }));
  o.push(`<line x1="450" y1="440" x2="450" y2="488" stroke="${C.ink}" stroke-width="4"/><polygon points="450,506 438,484 462,484" fill="${C.ink}"/>`);
  o.push(t(470, 484, 'rearrange', { size: 21, fill: C.muted }));
  const ry = 560, h = 3 * u - r5;
  o.push(`<rect x="${x0}" y="${ry}" width="${3 * u}" height="${h}" fill="${TEAL}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(`<rect x="${x0 + 3 * u}" y="${ry}" width="${r5}" height="${h}" fill="${GOLD}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(t(x0 + (3 * u + r5) / 2, ry - 16, `3 + ${rt(5)}`, { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(x0 + 3 * u + r5 + 16, ry + h / 2 + 8, `3 − ${rt(5)}`, { size: 22, weight: 700 }));
  o.push(t(x0, ry + h + 66, `(3 − ${rt(5)})(3 + ${rt(5)}) = 4`, { size: 29, weight: 700, fill: C.tealDark }));
  o.push(t(x0, ry + h + 110, 'No surd left: a whole number', { size: 21, fill: C.muted }));
  return svg(W, Math.round(ry + h + 150), 'Why the conjugate works', o.join('\n'));
}

export const figures = [
  { name: '04-surd-diagonal', after: '## Calculating (N2, N3)', svg: diagonal(),
    alt: 'A square of side 4 cm has a diagonal of root 32, since 16 + 16 = 32. Taking out the square factor gives 4 root 2, which lands near 5.657 on the number line.',
    caption: 'The exact length 4√2 cm is a surd; 5.657 is only a rounded value.' },
  { name: '01-growth-vs-linear', after: '## Graphs in real contexts and graphical solutions (A14)', svg: growth(),
    alt: 'A graph of a population of 25 000 growing 2.4% a year for 8 years. The curve reaches about 30 223, while adding 600 a year in a straight line reaches only 29 800. The curve pulls ahead because each percentage is taken of the current value.',
    caption: "Exponential growth pulls ahead of linear growth because each year's percentage is taken of a larger value." },
  { name: '05-conjugate-area', after: '## N7: Exact calculation', svg: conjugate(),
    alt: 'A square of side 3 with a square of area 5 cut out leaves area 4. Rearranged, it makes a rectangle 3 + root 5 by 3 minus root 5. So the conjugate product is 9 minus 5 = 4, a whole number.',
    caption: 'Multiplying by the conjugate gives a difference of two squares, so the surd disappears.' },
  { name: '03-fish-decay-target', after: '### Answers', svg: fish(),
    alt: 'A curve of 3600 fish falling 6% a year with a dashed line at 2000. Year 9 gives 2063 (above) and year 10 gives 1939 (below), so year 10 is the first year below 2000.',
    caption: 'Show the years either side of the target to prove which year first passes it.' },
];
