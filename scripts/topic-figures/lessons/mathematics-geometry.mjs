// Board-neutral redraws of three geometry figures first drawn for Cambridge IGCSE 0580 and reused on
// AQA, OCR, Edexcel, OxfordAQA and IB MYP pages. Same angles and scale factors; the "Extended" tier
// badge is removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'mathematics-geometry';
const W = 900;
const NAVY = C.ink;
const line = (x1, y1, x2, y2, color = NAVY, w = 3.5, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="8" fill="${NAVY}"/>`;
const onC = (cx, cy, R, deg) => [cx + R * Math.cos((deg * Math.PI) / 180), cy - R * Math.sin((deg * Math.PI) / 180)];
// angle sector at vertex V between rays to P and Q (the smaller angle)
const wedge = (V, P, Q, r, fill, stroke) => {
  const a1 = Math.atan2(P[1] - V[1], P[0] - V[0]), a2 = Math.atan2(Q[1] - V[1], Q[0] - V[0]);
  let d = a2 - a1; while (d <= -Math.PI) d += 2 * Math.PI; while (d > Math.PI) d -= 2 * Math.PI;
  const s = [V[0] + r * Math.cos(a1), V[1] + r * Math.sin(a1)], e = [V[0] + r * Math.cos(a1 + d), V[1] + r * Math.sin(a1 + d)];
  return `<path d="M${V[0]} ${V[1]} L${s[0].toFixed(1)} ${s[1].toFixed(1)} A${r} ${r} 0 0 ${d > 0 ? 1 : 0} ${e[0].toFixed(1)} ${e[1].toFixed(1)} Z" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>`;
};

// ---------- 04 angle at the centre ----------
function angleAtCentre() {
  const o = [];
  const cx = 450, cy = 400, R = 260, O = [cx, cy];
  const A = onC(cx, cy, R, 155), B = onC(cx, cy, R, 25), Cc = onC(cx, cy, R, 232), D = onC(cx, cy, R, 308);
  o.push(`<circle cx="${cx}" cy="${cy}" r="${R}" fill="#ffffff" stroke="${NAVY}" stroke-width="4"/>`);
  o.push(`<path d="M${A[0]} ${A[1]} A${R} ${R} 0 0 1 ${B[0]} ${B[1]}" fill="none" stroke="${C.rust}" stroke-width="8"/>`);
  o.push(wedge(O, A, B, 78, C.teal, C.tealDark), wedge(Cc, A, B, 56, C.cream, C.olive), wedge(D, A, B, 56, C.cream, C.olive));
  o.push(line(...A, ...O, C.tealDark), line(...B, ...O, C.tealDark));
  o.push(line(...A, ...Cc, C.olive), line(...B, ...Cc, C.olive), line(...A, ...D, C.olive, 3.5, '11 8'), line(...B, ...D, C.olive, 3.5, '11 8'));
  o.push(dot(...A), dot(...B), dot(...Cc), dot(...D), dot(...O));
  o.push(t(cx, cy - 42, '130°', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(Cc[0] + 40, Cc[1] - 92, '65°', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }), t(D[0] - 38, D[1] - 92, '65°', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(A[0] - 28, A[1] - 6, 'A', { size: 23, weight: 700, anchor: 'middle' }), t(B[0] + 30, B[1] - 6, 'B', { size: 23, weight: 700, anchor: 'middle' }));
  o.push(t(Cc[0] - 32, Cc[1] + 36, 'C', { size: 23, weight: 700, anchor: 'middle' }), t(D[0] + 34, D[1] + 36, 'D', { size: 23, weight: 700, anchor: 'middle' }), t(cx, cy + 44, 'O', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 740, 'Centre angle 130° = 2 × 65°', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(W / 2, 782, 'Same arc AB: angles at C and D are equal', { size: 23, weight: 700, fill: C.olive, anchor: 'middle' }));
  return svg(W, 820, 'Angles on the same arc', o.join('\n'));
}

// ---------- 05 cyclic quadrilateral ----------
function cyclicQuad() {
  const o = [];
  const cx = 450, cy = 390, R = 240;
  const A = onC(cx, cy, R, 130), B = onC(cx, cy, R, 230), Cc = onC(cx, cy, R, 0), D = onC(cx, cy, R, 70);
  o.push(`<circle cx="${cx}" cy="${cy}" r="${R}" fill="#ffffff" stroke="${NAVY}" stroke-width="4"/>`);
  o.push(`<polygon points="${[A, B, Cc, D].map((p) => p.join(',')).join(' ')}" fill="${C.tealLight}"/>`);
  o.push(wedge(A, B, D, 54, C.teal, C.tealDark), wedge(B, A, Cc, 50, C.cream, C.olive), wedge(Cc, B, D, 50, C.teal, C.tealDark), wedge(D, A, Cc, 54, C.cream, C.olive));
  o.push(`<polygon points="${[A, B, Cc, D].map((p) => p.join(',')).join(' ')}" fill="none" stroke="${NAVY}" stroke-width="4" stroke-linejoin="round"/>`);
  o.push(dot(...A), dot(...B), dot(...Cc), dot(...D));
  o.push(t(A[0] - 34, A[1] - 2, 'A', { size: 23, weight: 700, anchor: 'middle' }), t(B[0] - 34, B[1] + 38, 'B', { size: 23, weight: 700, anchor: 'middle' }), t(Cc[0] + 38, Cc[1] + 40, 'C', { size: 23, weight: 700, anchor: 'middle' }), t(D[0] + 34, D[1] - 6, 'D', { size: 23, weight: 700, anchor: 'middle' }));
  o.push(t(A[0] + 74, A[1] + 70, '100°', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(B[0] + 58, B[1] - 82, '65°', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(Cc[0] - 92, Cc[1] - 18, '80°', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(D[0] - 36, D[1] + 96, '115°', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(W / 2, 706, 'A + C: 100° + 80° = 180°', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(W / 2, 750, 'B + D: 65° + 115° = 180°', { size: 23, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(W / 2, 794, 'Opposite angles add to 180°', { size: 21, anchor: 'middle' }));
  return svg(W, 830, 'Cyclic quadrilateral', o.join('\n'));
}

// ---------- 06 scale factors ----------
function scaleFactors() {
  const o = [];
  const T = C.teal, TE = C.tealDark, G = C.cream, GE = C.olive;
  const sec = (y, h) => t(40, y, h, { size: 22, weight: 700, fill: C.tealDark });
  const right = (y, a, b) => t(860, y, a, { size: 28, weight: 700, anchor: 'end' }) + (b ? t(860, y + 40, b, { size: 22, weight: 700, fill: C.muted, anchor: 'end' }) : '');
  const sup = (s) => `<tspan baseline-shift="super" font-size="68%">${s}</tspan>`;
  // length
  o.push(sec(130, 'Length'));
  o.push(`<rect x="70" y="160" width="90" height="22" rx="5" fill="${T}" stroke="${TE}" stroke-width="2.5"/><rect x="340" y="160" width="180" height="22" rx="5" fill="${G}" stroke="${GE}" stroke-width="2.5"/>`);
  o.push(t(115, 218, '1', { size: 21, weight: 700, anchor: 'middle' }), t(430, 218, '2', { size: 21, weight: 700, anchor: 'middle' }), right(182, '× 2'));
  o.push(line(40, 262, 860, 262, '#c9d6d4', 2.5));
  // area
  o.push(sec(320, 'Area'));
  o.push(`<rect x="70" y="350" width="90" height="90" fill="${T}" stroke="${TE}" stroke-width="2.5"/>`, t(115, 478, '1', { size: 21, weight: 700, anchor: 'middle' }));
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) o.push(`<rect x="${340 + i * 90}" y="${350 + j * 90}" width="90" height="90" fill="${G}" stroke="${GE}" stroke-width="2.5"/>`);
  o.push(t(430, 568, '4', { size: 21, weight: 700, anchor: 'middle' }), right(398, '× 4', `= 2${sup('2')}`));
  o.push(line(40, 592, 860, 592, '#c9d6d4', 2.5));
  // volume: isometric cubes
  o.push(sec(650, 'Volume'));
  const s = 54, cx30 = Math.cos(Math.PI / 6) * s, sy = s / 2;
  // unit cube with front-bottom vertex at (x, y)
  const cube = (x, y, top, left, rightF, edge) => {
    const p = (dx, dy) => `${(x + dx).toFixed(1)},${(y + dy).toFixed(1)}`;
    return `<polygon points="${p(0, 0)} ${p(-cx30, -sy)} ${p(-cx30, -sy - s)} ${p(0, -s)}" fill="${left}" stroke="${edge}" stroke-width="2.5" stroke-linejoin="round"/>` +
      `<polygon points="${p(0, 0)} ${p(cx30, -sy)} ${p(cx30, -sy - s)} ${p(0, -s)}" fill="${rightF}" stroke="${edge}" stroke-width="2.5" stroke-linejoin="round"/>` +
      `<polygon points="${p(0, -s)} ${p(-cx30, -sy - s)} ${p(0, -2 * sy - s)} ${p(cx30, -sy - s)}" fill="${top}" stroke="${edge}" stroke-width="2.5" stroke-linejoin="round"/>`;
  };
  o.push(cube(150, 860, '#e6f1ef', '#9cc8c3', T, TE), t(150, 892, '1', { size: 21, weight: 700, anchor: 'middle' }));
  // 2x2x2 cube: draw back to front. Grid coords (i along right-back, j along left-back, k up)
  const ox = 420, oy = 960;
  const pos = (i, j, k) => [ox + (i - j) * cx30, oy - (i + j) * sy - k * s];
  const cells = [];
  for (let i = 1; i >= 0; i--) for (let j = 1; j >= 0; j--) for (let k = 0; k < 2; k++) cells.push([i, j, k]);
  cells.sort((a, b) => (b[0] + b[1]) - (a[0] + a[1]) || a[2] - b[2]);
  for (const [i, j, k] of cells) { const [x, y] = pos(i, j, k); o.push(cube(x, y, '#f8edc6', '#f2e3b0', '#e9d06a', GE)); }
  o.push(t(420, 1000, '8', { size: 21, weight: 700, anchor: 'middle' }), right(750, '× 8', `= 2${sup('3')}`));
  return svg(W, 1040, 'Scale factor k = 2', o.join('\n'));
}

export const figures = [
  { name: '04-angle-at-centre', after: '## Proof-writing checklist (Higher tier only)', svg: angleAtCentre(),
    alt: 'Circle with arc AB, centre angle AOB of 130 degrees, and points C and D each giving an angle of 65 degrees on the same arc. The angle at the centre (130 degrees) is twice the angle at the circumference (65 degrees) on the same arc, and angles in the same segment are equal.',
    caption: 'The angle at the centre is twice the angle at the circumference, and angles in the same segment are equal.' },
  { name: '05-cyclic-quadrilateral', after: '## Proof-writing checklist (Higher tier only)', svg: cyclicQuad(),
    alt: 'Quadrilateral ABCD inscribed in a circle with angles A 100, B 65, C 80, D 115 degrees. A plus C is 180 and B plus D is 180. In a cyclic quadrilateral opposite angles add to 180 degrees (100 + 80 and 65 + 115).',
    caption: 'Opposite angles of a cyclic quadrilateral add to 180°.' },
  { name: '06-similar-scale-factors', after: '## Inquiry questions (Table 4)', svg: scaleFactors(),
    alt: 'A bar of length 1 becomes 2. A unit square becomes a 2 by 2 square of 4 squares. A unit cube becomes a 2 by 2 by 2 cube of 8 cubes. With length scale factor 2, a unit square becomes four unit squares and a unit cube becomes eight unit cubes.',
    caption: 'Length scale factor k multiplies area by k² and volume by k³ (shown for k = 2).' },
];
