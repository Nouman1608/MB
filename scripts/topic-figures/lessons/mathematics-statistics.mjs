// Board-neutral redraws of two statistics figures (grouped mean, histogram with frequency density).
// Same data and working as the earlier set, with the "Extended" tier badges removed.
import { C, svg, t } from '../style.mjs';

export const slug = 'mathematics-statistics';
const W = 900;
const box = (x, y, w, h, s) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="#fff" stroke="${C.ink}" stroke-width="2"/>` + t(x + w / 2, y + h / 2 + 7, s, { size: 19, anchor: 'middle' });

// ---------- 03 Grouped mean ----------
function groupedMean() {
  const o = [];
  const px = 110, py = 180, pw = 720, ph = 340;
  const X = (h) => px + ((h - 150) / 40) * pw, Y = (n) => py + ph - (n / 16) * ph;
  o.push(t(W / 2, 128, 'Modal class: 160–&lt;170', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }).replace(`x="${W / 2}"`, `x="${W / 2 - 14}"`));
  o.push(t(W / 2 + 14, 128, 'mean ≈ 168.5', { size: 20, weight: 700, fill: C.rust }));
  for (const n of [4, 8, 12, 16]) o.push(`<line x1="${px}" y1="${Y(n)}" x2="${px + pw}" y2="${Y(n)}" stroke="#d6e2e0" stroke-width="1.5"/>`);
  const cls = [[150, 8, 155], [160, 15, 165], [170, 12, 175], [180, 5, 185]];
  for (const [a, f, m] of cls) {
    o.push(`<rect x="${X(a)}" y="${Y(f)}" width="${X(a + 10) - X(a)}" height="${Y(0) - Y(f)}" fill="${f === 15 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`);
    o.push(t((X(a) + X(a + 10)) / 2, Y(f) - 12, String(f), { size: 22, weight: 700, anchor: 'middle' }));
    o.push(t((X(a) + X(a + 10)) / 2, Y(2.6), String(m), { size: 19, weight: 700, anchor: 'middle' }));
    o.push(`<path d="M${(X(a) + X(a + 10)) / 2} ${Y(1.4) - 9} l9 9 l-9 9 l-9 -9 z" fill="${C.ink}"/>`);
  }
  o.push(`<line x1="${X(168.5)}" y1="${py - 6}" x2="${X(168.5)}" y2="${Y(0)}" stroke="${C.rust}" stroke-width="3.5" stroke-dasharray="9 6"/>`);
  o.push(`<line x1="${px}" y1="${Y(0)}" x2="${px + pw}" y2="${Y(0)}" stroke="${C.ink}" stroke-width="3"/>`, `<line x1="${px}" y1="${py - 10}" x2="${px}" y2="${Y(0)}" stroke="${C.ink}" stroke-width="3"/>`);
  for (const h of [150, 160, 170, 180, 190]) o.push(t(X(h), Y(0) + 28, String(h), { size: 18, anchor: 'middle' }));
  for (const n of [0, 4, 8, 12, 16]) o.push(t(px - 12, Y(n) + 6, String(n), { size: 18, anchor: 'end' }));
  o.push(t(px + pw / 2, Y(0) + 62, 'Height (cm)', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(`<text transform="translate(${px - 56} ${py + ph / 2}) rotate(-90)" font-size="20" font-weight="700" fill="${C.ink}" text-anchor="middle">Students</text>`);
  const y = 640;
  o.push(t(40, y, 'midpoint × students', { size: 20, weight: 700 }));
  o.push(box(40, y + 18, 400, 50, '155 × 8 = 1240'), box(460, y + 18, 400, 50, '165 × 15 = 2475'));
  o.push(box(40, y + 80, 400, 50, '175 × 12 = 2100'), box(460, y + 80, 400, 50, '185 × 5 = 925'));
  o.push(t(W / 2, y + 186, '6740 ÷ 40 = 168.5 cm', { size: 26, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, y + 226, 'Only an estimate: each midpoint stands in for its class.', { size: 18, fill: C.muted, anchor: 'middle' }));
  return svg(W, y + 262, 'Mean of grouped data', o.join('\n'), 'Heights of 40 students (cm)');
}

// ---------- 06 Histogram ----------
function histogram() {
  const o = [];
  const px = 130, py = 140, pw = 700, ph = 380;
  const X = (a) => px + (a / 60) * pw, Y = (d) => py + ph - (d / 3.2) * ph;
  for (const d of [1, 2, 3]) o.push(`<line x1="${px}" y1="${Y(d)}" x2="${px + pw}" y2="${Y(d)}" stroke="#d6e2e0" stroke-width="1.5"/>`);
  const bars = [[0, 10, 20, 2, '20 ÷ 10', '= 2'], [10, 30, 50, 2.5, '50 ÷ 20', '= 2.5'], [30, 40, 30, 3, '30 ÷ 10', '= 3'], [40, 60, 20, 1, '20 ÷ 20', '= 1']];
  for (const [a, b, f, d, l1, l2] of bars) {
    o.push(`<rect x="${X(a)}" y="${Y(d)}" width="${X(b) - X(a)}" height="${Y(0) - Y(d)}" fill="${f === 50 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`);
    o.push(t((X(a) + X(b)) / 2, Y(d) + 32, l1, { size: 18, weight: 700, anchor: 'middle' }), t((X(a) + X(b)) / 2, Y(d) + 56, l2, { size: 18, weight: 700, anchor: 'middle' }));
  }
  o.push(`<line x1="${px}" y1="${Y(0)}" x2="${px + pw}" y2="${Y(0)}" stroke="${C.ink}" stroke-width="3"/>`, `<line x1="${px}" y1="${py - 10}" x2="${px}" y2="${Y(0)}" stroke="${C.ink}" stroke-width="3"/>`);
  for (const a of [0, 10, 30, 40, 60]) o.push(t(X(a), Y(0) + 28, String(a), { size: 18, anchor: 'middle' }));
  for (const d of [0, 1, 2, 3]) o.push(t(px - 12, Y(d) + 6, String(d), { size: 18, anchor: 'end' }));
  o.push(t(px + pw / 2, Y(0) + 62, 'Age (years)', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(`<text transform="translate(${px - 50} ${py + ph / 2}) rotate(-90)" font-size="20" font-weight="700" fill="${C.ink}" text-anchor="middle">Frequency density</text>`);
  const y = Y(0) + 120;
  o.push(t(W / 2, y, 'Frequency density = frequency ÷ class width', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, y + 38, 'Area of a bar = frequency', { size: 20, anchor: 'middle' }));
  o.push(t(W / 2, y + 80, 'Gold bar: most people (50) but not the tallest.', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
  return svg(W, y + 116, 'Histogram: height is density', o.join('\n'), 'Ages of 120 people');
}

export const figures = [
  { name: '03-grouped-mean-midpoints', after: '## 12.03a Grouped data', svg: groupedMean(),
    alt: 'Heights of 40 students in four 10 cm classes. Each class midpoint (155, 165, 175, 185) times its frequency totals 6740, giving an estimated mean of 168.5 cm. The modal class is 160 to under 170.',
    caption: 'Use the midpoint of each class, not a boundary, so the mean is only an estimate.' },
  { name: '06-histogram-frequency-density', after: '## Methods in steps', svg: histogram(),
    alt: 'A histogram of ages of 120 people with unequal class widths. Frequency density = frequency / class width gives 2, 2.5, 3 and 1. The 10 to 30 class has most people (50) but the 30 to 40 bar is the tallest.',
    caption: 'With unequal class widths the bar height is frequency density, and the bar area equals the frequency.' },
];
