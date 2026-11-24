// Board-neutral redraws of two kinematics-graph figures shared by OxfordAQA IGCSE, OCR GCSE and AQA GCSE
// maths pages. The old pictures carried an "Extended" tier pill by the title; graphs and numbers unchanged.
import { C, svg, t } from '../style.mjs';

export const slug = 'mathematics-graphs-in-practical-situations';
const W = 900;
const RUST = '#c0643a', NAVY = '#1e2a44', SLATE = '#4a5a78', GRID = '#dbe4e3';
const ln = (x1, y1, x2, y2, col = NAVY, w = 3, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const halo = (s) => s.replace('<text ', '<text stroke="#ffffff" stroke-width="5" paint-order="stroke" ');
const pill = (x, y, w, s, fill) => `<rect x="${x}" y="${y}" width="${w}" height="40" rx="20" fill="${fill}"/>` + t(x + w / 2, y + 27, s, { size: 20, weight: 700, fill: '#ffffff', anchor: 'middle' });
const ylab = (x, y, s) => `<text transform="translate(${x} ${y}) rotate(-90)" font-size="20" font-weight="700" fill="${SLATE}" text-anchor="middle">${s}</text>`;

// ---------- 5. Tangent gives speed ----------
function tangent() {
  const o = [];
  const X = (s) => 150 + s * 140, Y = (d) => 700 - d * 20.8;
  o.push(`<rect x="150" y="140" width="700" height="560" fill="#ffffff"/>`);
  for (let s = 1; s <= 5; s++) o.push(ln(X(s), 140, X(s), 700, GRID, 2));
  for (let d = 5; d <= 25; d += 5) o.push(ln(150, Y(d), 850, Y(d), GRID, 2));
  o.push(ln(150, 140, 150, 700, NAVY, 3.5), ln(150, 700, 850, 700, NAVY, 3.5));
  for (let s = 0; s <= 5; s++) o.push(t(X(s), 734, String(s), { size: 20, anchor: 'middle' }));
  for (let d = 0; d <= 25; d += 5) o.push(t(136, Y(d) + 7, String(d), { size: 20, anchor: 'end' }));
  o.push(t(500, 776, 'time (s)', { size: 20, weight: 700, fill: SLATE, anchor: 'middle' }), ylab(40, 420, 'distance (m)'));
  // tangent: d = 6s - 9 from s = 1.5 to 5
  o.push(ln(X(1.5), Y(0), X(5), Y(21), RUST, 4));
  o.push(ln(X(3), Y(9), X(5), Y(25), C.olive, 3.5, '10 7'));
  const pts = []; for (let s = 0; s <= 5.001; s += 0.05) pts.push(`${X(s).toFixed(1)},${Y(s * s).toFixed(1)}`);
  o.push(`<polyline points="${pts.join(' ')}" fill="none" stroke="${C.tealDark}" stroke-width="5"/>`);
  o.push(`<polyline points="${X(2)},${Y(3)} ${X(5)},${Y(3)} ${X(5)},${Y(21)}" fill="none" stroke="${NAVY}" stroke-width="3.5"/>`);
  o.push(`<circle cx="${X(2)}" cy="${Y(3)}" r="9" fill="#ffffff" stroke="${NAVY}" stroke-width="3.5"/><circle cx="${X(5)}" cy="${Y(21)}" r="9" fill="#ffffff" stroke="${NAVY}" stroke-width="3.5"/>`);
  o.push(`<circle cx="${X(3)}" cy="${Y(9)}" r="14" fill="${RUST}"/>`);
  o.push(halo(t(X(3) - 20, Y(9) - 18, 'tangent at (3, 9)', { size: 20, weight: 700, fill: RUST, anchor: 'end' })));
  o.push(halo(t(X(3.4), Y(20) + 7, 'chord: 8 m/s', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' })));
  o.push(t(X(3.5), Y(3) + 34, '3 s', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(t(X(5) - 16, Y(12) + 7, '18 m', { size: 20, weight: 700, anchor: 'end' }));
  o.push(pill(150, 810, 418, 'Tangent: 18 ÷ 3 = 6 m/s at 3 s', RUST));
  o.push(pill(150, 866, 444, 'Chord = average over an interval', C.olive));
  return svg(W, 930, 'Speed at one instant', o.join('\n'), 'Tangent at t = 3 s');
}

// ---------- 6. Area under a speed-time graph ----------
function area() {
  const o = [];
  const X = (s) => 150 + s * 20.6, Y = (v) => 660 - v * 34.6;
  o.push(`<rect x="150" y="140" width="700" height="520" fill="#ffffff"/>`);
  for (let s = 2; s <= 34; s += 2) o.push(ln(X(s), 140, X(s), 660, GRID, 1.5));
  for (let v = 2; v <= 14; v += 2) o.push(ln(150, Y(v), 850, Y(v), GRID, 1.5));
  o.push(`<polygon points="${X(0)},${Y(0)} ${X(8)},${Y(12)} ${X(28)},${Y(12)} ${X(34)},${Y(0)}" fill="#dfeceb" fill-opacity="0.85"/>`);
  o.push(ln(X(8), Y(12), X(8), Y(0), NAVY, 2.5, '7 5'), ln(X(28), Y(12), X(28), Y(0), NAVY, 2.5, '7 5'));
  o.push(ln(150, 140, 150, 660, NAVY, 3.5), ln(150, 660, 850, 660, NAVY, 3.5));
  o.push(`<polyline points="${X(0)},${Y(0)} ${X(8)},${Y(12)} ${X(28)},${Y(12)} ${X(34)},${Y(0)}" fill="none" stroke="${C.tealDark}" stroke-width="5" stroke-linejoin="round"/>`);
  for (const s of [0, 8, 28, 34]) o.push(t(X(s), 694, String(s), { size: 20, anchor: 'middle' }));
  for (const v of [0, 4, 8, 12]) o.push(t(136, Y(v) + 7, String(v), { size: 20, anchor: 'end' }));
  o.push(t(500, 736, 'time (s)', { size: 20, weight: 700, fill: SLATE, anchor: 'middle' }), ylab(40, 400, 'speed (m/s)'));
  o.push(halo(t(X(5.5), Y(3) + 7, '48 m', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' })));
  o.push(halo(t(X(18), Y(6) + 7, '240 m', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' })));
  o.push(halo(t(X(30.2), Y(3) + 7, '36 m', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' })));
  o.push(t(162, 188, `a = 12 ÷ 8 = 1.5 m/s<tspan font-size="65%" dy="-0.6em">2</tspan>`, { size: 20, weight: 700, fill: RUST }));
  o.push(t(850, Y(12) - 18, `slows 2 m/s<tspan font-size="65%" dy="-0.6em">2</tspan>`, { size: 20, weight: 700, fill: RUST, anchor: 'end' }));
  o.push(pill(150, 770, 392, 'Total: 48 + 240 + 36 = 324 m', C.tealDark));
  o.push(pill(150, 826, 392, 'Average: 324 ÷ 34 = 9.53 m/s', C.olive));
  return svg(W, 890, 'Area is distance', o.join('\n'), 'Cyclist: triangle, rectangle, triangle');
}

export const figures = [
  { name: '05-tangent-speed', after: '### Worked example 6', svg: tangent(),
    alt: 'A curved distance-time graph through (0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25). A tangent at (3, 9) passes through (2, 3) and (5, 21), so its gradient is 18 divided by 3 = 6 m/s. A chord to (5, 25) has gradient 8 and only gives an average.',
    caption: 'Speed at one instant is the gradient of the tangent, not of a chord.' },
  { name: '06-speed-time-area', after: '### Worked reminder (acceleration Core; distance Extension only)', svg: area(),
    alt: 'A speed-time graph for a cyclist: 0 to 12 m/s in 8 s, 12 m/s for 20 s, then to rest in 6 s. The area under the graph is the distance, 48 + 240 + 36 = 324 m, and the average speed is 324 divided by 34 = 9.53 m/s.',
    caption: 'Gradient is acceleration and area under the graph is distance.' },
];
