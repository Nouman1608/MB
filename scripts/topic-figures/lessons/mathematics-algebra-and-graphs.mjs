// Board-neutral redraws of three GCSE / IGCSE algebra pictures (inequality region, inequality on a
// number line, gradient and turning points) first drawn for Cambridge IGCSE and reused on AQA,
// Edexcel, OxfordAQA and IB MYP pages. Same numbers; the "Extended" tier pill is gone.
import { C, svg, t, path } from '../style.mjs';

export const slug = 'mathematics-algebra-and-graphs';
const W = 900;
const GRID = '#c9d6d4', CREAM = '#f2e7b8', GOLD = '#d4b02e', RUST = '#b5602e';
const pill = (cx, y, w, s, fill) => `<rect x="${cx - w / 2}" y="${y}" width="${w}" height="40" rx="20" fill="${fill}"/>` + t(cx, y + 28, s, { size: 20, weight: 700, fill: '#ffffff', anchor: 'middle' });

// ---------- 03 Inequality on a number line ----------
function numberLine() {
  const o = [];
  o.push(t(450, 190, '−5 &lt; 2x + 3 ⩽ 11', { size: 32, weight: 700, anchor: 'middle' }));
  o.push(pill(450, 214, 330, 'Take 3 from every part', C.olive));
  o.push(t(450, 300, '−8 &lt; 2x ⩽ 8', { size: 32, weight: 700, anchor: 'middle' }));
  o.push(pill(450, 324, 260, 'Halve every part', C.olive));
  o.push(t(450, 412, '−4 &lt; x ⩽ 4', { size: 36, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  const y = 500, X = (v) => 450 + v * 58;
  o.push(`<line x1="${X(-6.9)}" y1="${y}" x2="${X(6.9)}" y2="${y}" stroke="${C.ink}" stroke-width="3.5"/><polygon points="${X(6.9) + 24},${y} ${X(6.9)},${y - 12} ${X(6.9)},${y + 12}" fill="${C.ink}"/>`);
  for (let v = -6; v <= 6; v++) { o.push(`<line x1="${X(v)}" y1="${y - 11}" x2="${X(v)}" y2="${y + 11}" stroke="${C.ink}" stroke-width="2.5"/>`); o.push(t(X(v), y + 44, v < 0 ? `−${-v}` : String(v), { size: 20, fill: C.muted, anchor: 'middle' })); }
  o.push(`<line x1="${X(-4)}" y1="${y}" x2="${X(4)}" y2="${y}" stroke="${RUST}" stroke-width="10"/>`);
  for (let v = -3; v <= 3; v++) o.push(`<circle cx="${X(v)}" cy="${y}" r="8" fill="#ffffff" stroke="${RUST}" stroke-width="3"/>`);
  o.push(`<circle cx="${X(-4)}" cy="${y}" r="14" fill="#ffffff" stroke="${RUST}" stroke-width="4"/><circle cx="${X(4)}" cy="${y}" r="14" fill="${RUST}" stroke="${RUST}" stroke-width="4"/>`);
  o.push(t(X(-4) - 10, y - 40, 'open: −4 not included', { size: 20, weight: 700, fill: RUST }));
  o.push(t(X(4) + 30, y - 40, 'closed: 4 included', { size: 20, weight: 700, fill: RUST, anchor: 'end' }));
  o.push(t(450, 668, 'Whole-number answers', { size: 22, weight: 700, fill: C.muted, anchor: 'middle' }));
  o.push(t(450, 710, '−3, −2, −1, 0, 1, 2, 3, 4', { size: 28, weight: 700, fill: RUST, anchor: 'middle' }));
  return svg(W, 750, 'Inequalities on a number line', o.join('\n'), 'Solve −5 &lt; 2x + 3 ⩽ 11');
}

// ---------- 04 Inequality region ----------
function region() {
  const o = [];
  const x0 = 170, y0 = 690, u = 80; // 0..7 by 0..6.5
  const X = (v) => x0 + v * u, Y = (v) => y0 - v * u;
  o.push(`<rect x="${X(0)}" y="${Y(6.5)}" width="${7 * u}" height="${6.5 * u}" fill="#ffffff"/>`);
  for (let v = 1; v <= 6; v++) o.push(`<line x1="${X(v)}" y1="${Y(0)}" x2="${X(v)}" y2="${Y(6.5)}" stroke="${GRID}" stroke-width="1.5"/>`, `<line x1="${X(0)}" y1="${Y(v)}" x2="${X(7)}" y2="${Y(v)}" stroke="${GRID}" stroke-width="1.5"/>`);
  o.push(`<polygon points="${X(1)},${Y(1)} ${X(5)},${Y(1)} ${X(3)},${Y(3)}" fill="${CREAM}"/>`);
  o.push(`<line x1="${X(0)}" y1="${Y(1)}" x2="${X(7)}" y2="${Y(1)}" stroke="${C.tealDark}" stroke-width="4.5"/>`);
  o.push(`<line x1="${X(0)}" y1="${Y(0)}" x2="${X(6.5)}" y2="${Y(6.5)}" stroke="${RUST}" stroke-width="4.5" stroke-dasharray="14 9"/>`);
  o.push(`<line x1="${X(0)}" y1="${Y(6)}" x2="${X(6)}" y2="${Y(0)}" stroke="${C.ink}" stroke-width="4.5"/>`);
  o.push(`<rect x="${X(0)}" y="${Y(6.5)}" width="${7 * u}" height="${6.5 * u}" fill="none" stroke="${C.ink}" stroke-width="3"/>`);
  for (let v = 1; v <= 7; v++) o.push(t(X(v), y0 + 30, String(v), { size: 19, fill: C.muted, anchor: 'middle' }));
  for (let v = 1; v <= 6; v++) o.push(t(x0 - 12, Y(v) + 7, String(v), { size: 19, fill: C.muted, anchor: 'end' }));
  o.push(t(X(0) + 12, Y(6.5) + 26, 'y', { size: 21, weight: 700 }), t(X(7) - 12, y0 - 12, 'x', { size: 21, weight: 700, anchor: 'end' }));
  o.push(t(X(1.3), Y(5.1), 'x + y ⩽ 6', { size: 20, weight: 700 }));
  o.push(t(X(4.4), Y(5.4), 'y &lt; x', { size: 20, weight: 700, fill: RUST }));
  o.push(t(X(6.7), Y(1) - 14, 'y ⩾ 1', { size: 20, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(`<circle cx="${X(3)}" cy="${Y(1.6)}" r="10" fill="${GOLD}" stroke="${C.ink}" stroke-width="2.5"/>`, t(X(3) + 18, Y(1.6) + 7, 'test ✓', { size: 20, weight: 700 }));
  o.push(pill(450, 736, 500, 'Solid line: boundary included (⩽ ⩾)', C.tealDark));
  o.push(pill(450, 788, 446, 'Dashed line: not included (&lt; &gt;)', RUST));
  return svg(W, 850, 'Shading a region', o.join('\n'), 'The region satisfying all three');
}

// ---------- 07 Gradient and turning points ----------
function gradient() {
  const o = [];
  const x0 = 100, x1 = 800, yt = 150, yb = 700;
  const X = (v) => x0 + (v + 4) / 8 * (x1 - x0), Y = (v) => yt + (20 - v) / 40 * (yb - yt);
  o.push(`<rect x="${x0}" y="${yt}" width="${x1 - x0}" height="${yb - yt}" fill="#ffffff"/>`);
  for (let v = -3; v <= 3; v++) if (v) o.push(`<line x1="${X(v)}" y1="${yt}" x2="${X(v)}" y2="${yb}" stroke="${GRID}" stroke-width="1.5"/>`);
  for (const v of [-10, 10]) o.push(`<line x1="${x0}" y1="${Y(v)}" x2="${x1}" y2="${Y(v)}" stroke="${GRID}" stroke-width="1.5"/>`);
  o.push(`<line x1="${x0}" y1="${Y(0)}" x2="${x1}" y2="${Y(0)}" stroke="${C.ink}" stroke-width="3"/><line x1="${X(0)}" y1="${yt}" x2="${X(0)}" y2="${yb}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(`<rect x="${x0}" y="${yt}" width="${x1 - x0}" height="${yb - yt}" fill="none" stroke="${C.ink}" stroke-width="3"/>`);
  for (let v = -4; v <= 4; v++) if (v) o.push(t(X(v) + (v === -4 ? 6 : v === 4 ? -6 : 0), Y(0) + 26, v < 0 ? `−${-v}` : String(v), { size: 19, fill: C.muted, anchor: v === -4 ? 'start' : v === 4 ? 'end' : 'middle' }).replace('<text ', `<text paint-order="stroke" stroke="#ffffff" stroke-width="5" `));
  for (const v of [-20, -10, 10, 20]) o.push(t(X(0) - 10, Y(v) + (v === 20 ? 24 : v === -20 ? -8 : 7), v < 0 ? `−${-v}` : String(v), { size: 19, fill: C.muted, anchor: 'end' }).replace('<text ', `<text paint-order="stroke" stroke="#ffffff" stroke-width="5" `));
  o.push(t(X(0) + 14, yt + 26, 'y', { size: 21, weight: 700 }), t(x1 - 12, Y(0) - 12, 'x', { size: 21, weight: 700, anchor: 'end' }));
  const f = (x) => x ** 3 - 12 * x;
  const pts = []; for (let i = 0; i <= 200; i++) { const x = -4 + 8 * i / 200, y = f(x); if (y >= -20.5 && y <= 20.5) pts.push(`${X(x).toFixed(1)} ${Y(y).toFixed(1)}`); }
  o.push(`<clipPath id="gclip"><rect x="${x0}" y="${yt}" width="${x1 - x0}" height="${yb - yt}"/></clipPath>`);
  o.push(`<g clip-path="url(#gclip)">${path('M' + pts.join(' L'), { stroke: C.tealDark, w: 5 })}`);
  o.push(`<line x1="${X(-3.1)}" y1="${Y(16)}" x2="${X(-0.9)}" y2="${Y(16)}" stroke="${C.olive}" stroke-width="5"/>`);
  o.push(`<line x1="${X(0.9)}" y1="${Y(-16)}" x2="${X(3.1)}" y2="${Y(-16)}" stroke="${C.olive}" stroke-width="5"/>`);
  o.push(`<line x1="${X(2.5)}" y1="${Y(-9 - 7.5)}" x2="${X(3.5)}" y2="${Y(-9 + 7.5)}" stroke="${RUST}" stroke-width="5"/></g>`);
  o.push(`<circle cx="${X(-2)}" cy="${Y(16)}" r="12" fill="${GOLD}" stroke="${C.ink}" stroke-width="3"/><circle cx="${X(2)}" cy="${Y(-16)}" r="12" fill="${GOLD}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(`<circle cx="${X(3)}" cy="${Y(-9)}" r="9" fill="${RUST}"/>`);
  o.push(t(X(-2) + 24, Y(16) - 14, 'max (−2, 16)', { size: 20, weight: 700, fill: C.olive }));
  o.push(t(X(0.9) - 10, Y(-16) + 7, 'min (2, −16)', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }).replace('<text ', `<text paint-order="stroke" stroke="#ffffff" stroke-width="5" `));
  o.push(t(X(3) - 18, Y(-9) + 7, 'gradient 15', { size: 20, weight: 700, fill: RUST, anchor: 'end' }).replace('<text ', `<text paint-order="stroke" stroke="#ffffff" stroke-width="5" `));
  // sign strip
  const sy = 800;
  const seg = (a, b, up, label, col) => {
    const cx = (X(a) + X(b)) / 2;
    o.push(`<line x1="${X(a) + 10}" y1="${sy}" x2="${X(b) - 10}" y2="${sy}" stroke="${GRID}" stroke-width="2"/>`);
    o.push(`<line x1="${cx - 30}" y1="${sy + (up ? 18 : -18)}" x2="${cx + 30}" y2="${sy + (up ? -18 : 18)}" stroke="${col}" stroke-width="5" stroke-linecap="round"/>`);
    o.push(t(cx, sy + 62, label, { size: 21, weight: 700, fill: col, anchor: 'middle' }));
  };
  seg(-4, -2, true, 'dy/dx &gt; 0', C.tealDark); seg(-2, 2, false, 'dy/dx &lt; 0', RUST); seg(2, 4, true, 'dy/dx &gt; 0', C.tealDark);
  for (const v of [-2, 2]) o.push(`<line x1="${X(v)}" y1="${sy - 34}" x2="${X(v)}" y2="${sy + 68}" stroke="${GRID}" stroke-width="2.5" stroke-dasharray="7 6"/>`);
  o.push(t(450, 910, 'Turning points: dy/dx = 0', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }));
  return svg(W, 945, 'Gradient and turning points', o.join('\n'), 'y = x³ − 12x, dy/dx = 3x² − 12');
}

export const figures = [
  { name: '04-inequality-region', after: '### Reading and drawing inequalities', svg: region(),
    alt: 'A graph with a solid line y = 1, a dashed line y = x and a solid line x + y = 6 bounds a shaded triangle with corners (1, 1), (5, 1) and (3, 3). A test point inside satisfies all three inequalities. Solid lines are included; dashed lines are not.',
    caption: 'The region is where all the inequalities are true at once.' },
  { name: '03-inequality-number-line', after: '## Official syllabus', svg: numberLine(),
    alt: 'Solving minus 5 less than 2x plus 3, at most 11, gives minus 4 less than x, at most 4. An open circle at minus 4 and a closed circle at 4 are joined by a line. The whole-number solutions are minus 3 to 4.',
    caption: 'Open circles exclude an end value, closed circles include it.' },
  { name: '07-gradient-turning-points', after: '### Worked example 10: a quartic with an inflection', svg: gradient(),
    alt: 'The curve y = x cubed minus 12x has a maximum at (minus 2, 16) and a minimum at (2, minus 16), where the tangent is flat and the gradient is 0. At x = 3 the tangent has gradient 15. The gradient is positive, negative, positive across the three sections.',
    caption: 'Turning points are where the gradient dy/dx is zero.' },
];
