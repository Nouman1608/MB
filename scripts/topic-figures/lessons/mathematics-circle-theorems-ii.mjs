// Board-neutral redraws of three circle-theorem figures first drawn for Cambridge IGCSE 0580 and reused
// on AQA, OCR, Edexcel and OxfordAQA pages. Same lengths and angles, drawn to scale; the "Extended" tier
// badge is removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'mathematics-circle-theorems-ii';
const W = 900;
const NAVY = C.ink;
const line = (x1, y1, x2, y2, color = NAVY, w = 4, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="9" fill="${NAVY}"/>`;
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const unit = (v) => { const n = Math.hypot(...v); return [v[0] / n, v[1] / n]; };
// right-angle mark at V between directions to P and Q
const rightMark = (V, P, Q, s = 18, color = C.rust) => { const u = unit(sub(P, V)), v = unit(sub(Q, V)); return `<path d="M${V[0] + u[0] * s} ${V[1] + u[1] * s} L${V[0] + (u[0] + v[0]) * s} ${V[1] + (u[1] + v[1]) * s} L${V[0] + v[0] * s} ${V[1] + v[1] * s}" fill="none" stroke="${color}" stroke-width="2.5"/>`; };
// small tick across segment PQ at its midpoint
const tick = (P, Q, color = C.rust, L = 12) => { const m = [(P[0] + Q[0]) / 2, (P[1] + Q[1]) / 2], u = unit(sub(Q, P)), n = [-u[1], u[0]]; return line(m[0] - n[0] * L, m[1] - n[1] * L, m[0] + n[0] * L, m[1] + n[1] * L, color, 3); };
const arcAt = (V, P, Q, r, color, w = 3.5, fill = 'none') => {
  const a1 = Math.atan2(P[1] - V[1], P[0] - V[0]), a2 = Math.atan2(Q[1] - V[1], Q[0] - V[0]);
  let d = a2 - a1; while (d <= -Math.PI) d += 2 * Math.PI; while (d > Math.PI) d -= 2 * Math.PI;
  const s = [V[0] + r * Math.cos(a1), V[1] + r * Math.sin(a1)], e = [V[0] + r * Math.cos(a1 + d), V[1] + r * Math.sin(a1 + d)];
  const sweep = d > 0 ? 1 : 0;
  return fill === 'none' ? `<path d="M${s[0]} ${s[1]} A${r} ${r} 0 0 ${sweep} ${e[0]} ${e[1]}" fill="none" stroke="${color}" stroke-width="${w}"/>`
    : `<path d="M${V[0]} ${V[1]} L${s[0]} ${s[1]} A${r} ${r} 0 0 ${sweep} ${e[0]} ${e[1]} Z" fill="${fill}" stroke="${color}" stroke-width="${w}"/>`;
};

// ---------- 02 perpendicular to a chord (radius 10, chord 16, distance 6) ----------
function chordBisector() {
  const o = [];
  const k = 28, O = [450, 390], M = [450, 390 + 6 * k], B = [450 - 8 * k, M[1]], A = [450 + 8 * k, M[1]];
  o.push(`<circle cx="${O[0]}" cy="${O[1]}" r="${10 * k}" fill="${C.tealLight}" stroke="${NAVY}" stroke-width="4"/>`);
  o.push(`<polygon points="${O.join(',')} ${B.join(',')} ${M.join(',')}" fill="${C.cream}"/>`);
  o.push(line(...B, ...A, NAVY, 4), line(...O, ...M, C.tealDark, 4.5), line(...O, ...B, C.rust, 4.5));
  o.push(rightMark(M, O, B, 22), tick(B, M), tick(M, A));
  o.push(dot(...O), dot(...A), dot(...B), `<circle cx="${M[0]}" cy="${M[1]}" r="8" fill="${C.tealDark}"/>`);
  o.push(t(O[0] - 28, O[1] - 18, 'O', { size: 23, weight: 700, anchor: 'middle' }), t(M[0], M[1] + 44, 'M', { size: 23, weight: 700, anchor: 'middle' }));
  o.push(t(B[0] - 20, B[1] + 8, 'B', { size: 23, weight: 700, anchor: 'end' }), t(A[0] + 20, A[1] + 8, 'A', { size: 23, weight: 700 }));
  o.push(t(300, 460, '10', { size: 27, weight: 700, fill: C.rust, anchor: 'middle' }), t(416, 492, '6', { size: 27, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(338, 526, '8', { size: 27, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 742, 'OM ⊥ AB, so AM = MB', { size: 25, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 788, 'AB = 16, radius 10: 6² + 8² = 10²', { size: 21, fill: C.muted, anchor: 'middle' }));
  return svg(W, 820, 'Perpendicular to a chord', o.join('\n'));
}

// ---------- 04 equal tangents (5, 12, 13) ----------
function equalTangents() {
  const o = [];
  const k = 28, O = [210, 400], P = [210 + 13 * k, 400], th = Math.acos(5 / 13);
  const A = [O[0] + 5 * k * Math.cos(th), O[1] - 5 * k * Math.sin(th)], B = [A[0], O[1] + 5 * k * Math.sin(th)];
  o.push(`<circle cx="${O[0]}" cy="${O[1]}" r="${5 * k}" fill="${C.tealLight}" stroke="${NAVY}" stroke-width="4"/>`);
  o.push(`<polygon points="${O.join(',')} ${A.join(',')} ${P.join(',')} ${B.join(',')}" fill="${C.cream}" fill-opacity="0.8"/>`);
  o.push(`<circle cx="${O[0]}" cy="${O[1]}" r="${5 * k}" fill="none" stroke="${NAVY}" stroke-width="4"/>`);
  o.push(line(...O, ...P, C.muted, 3, '10 7'), line(...O, ...A, C.tealDark, 3.5), line(...O, ...B, C.tealDark, 3.5));
  o.push(line(...A, ...P, C.olive, 5.5), line(...B, ...P, C.olive, 5.5));
  o.push(rightMark(A, O, P, 18), rightMark(B, O, P, 18), tick(A, P), tick(B, P));
  o.push(dot(...O), dot(...A), dot(...B), dot(...P));
  o.push(t(A[0] - 12, A[1] - 22, 'A', { size: 23, weight: 700, anchor: 'middle' }), t(B[0] - 12, B[1] + 42, 'B', { size: 23, weight: 700, anchor: 'middle' }));
  o.push(t(O[0] - 8, O[1] + 44, 'O', { size: 23, weight: 700, anchor: 'middle' }), t(P[0] + 26, P[1] + 8, 'P', { size: 23, weight: 700 }));
  o.push(t(203, 346, '5', { size: 24, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(452, 336, '12', { size: 25, weight: 700, fill: C.olive, anchor: 'middle' }), t(452, 518, '12', { size: 25, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(392, 458, '13', { size: 25, weight: 700, fill: C.muted, anchor: 'middle' }));
  o.push(t(W / 2, 640, 'PA = PB', { size: 27, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 684, 'Tangents from P are equal', { size: 21, fill: C.muted, anchor: 'middle' }));
  o.push(t(W / 2, 722, 'Radius ⊥ tangent: 5² + 12² = 13²', { size: 21, fill: C.muted, anchor: 'middle' }));
  return svg(W, 760, 'Tangents from a point', o.join('\n'));
}

// ---------- 05 tangent angles (APB = 50, PAB = PBA = 65, AOB = 130) ----------
function tangentAngles() {
  const o = [];
  const r = 130, O = [190, 380], half = (65 * Math.PI) / 180;
  const A = [O[0] + r * Math.cos(half), O[1] - r * Math.sin(half)], B = [A[0], O[1] + r * Math.sin(half)], P = [O[0] + r / Math.cos(half), O[1]];
  o.push(`<circle cx="${O[0]}" cy="${O[1]}" r="${r}" fill="${C.tealLight}" stroke="${NAVY}" stroke-width="4"/>`);
  o.push(arcAt(O, A, B, 56, C.tealDark, 3.5), arcAt(A, B, P, 60, C.olive, 3.5), arcAt(B, A, P, 60, C.olive, 3.5), arcAt(P, A, B, 88, C.rust, 3.5));
  o.push(line(...O, ...A, C.tealDark, 3.5), line(...O, ...B, C.tealDark, 3.5), line(...A, ...B, NAVY, 3.5, '9 6'));
  o.push(line(...A, ...P, C.olive, 5.5), line(...B, ...P, C.olive, 5.5));
  o.push(rightMark(A, O, P, 16), rightMark(B, O, P, 16), tick(A, P), tick(B, P));
  o.push(dot(...O), dot(...A), dot(...B), dot(...P));
  o.push(t(A[0] - 6, A[1] - 22, 'A', { size: 23, weight: 700, anchor: 'middle' }), t(B[0] - 6, B[1] + 42, 'B', { size: 23, weight: 700, anchor: 'middle' }));
  o.push(t(O[0] - 24, O[1] + 8, 'O', { size: 23, weight: 700, anchor: 'end' }), t(P[0] + 24, P[1] + 8, 'P', { size: 23, weight: 700 }));
  o.push(t(O[0] + 62, O[1] + 8, '130°', { size: 21, weight: 700, fill: C.tealDark }));
  o.push(t(A[0] + 100, A[1] + 12, '65°', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }), t(B[0] + 100, B[1] + 6, '65°', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(P[0] - 108, P[1] + 8, '50°', { size: 21, weight: 700, fill: C.rust, anchor: 'end' }));
  o.push(t(W / 2, 650, 'Given: ∠APB = 50°', { size: 25, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 696, 'PA = PB, so ∠PAB = (180° − 50°) ÷ 2 = 65°', { size: 21, fill: C.muted, anchor: 'middle' }));
  o.push(t(W / 2, 736, 'Quadrilateral: ∠AOB = 360° − 90° − 90° − 50° = 130°', { size: 21, fill: C.muted, anchor: 'middle' }));
  return svg(W, 770, 'Tangent angles: worked', o.join('\n'));
}

export const figures = [
  { name: '02-chord-bisector', after: '## Proof-writing checklist (Higher tier only)', svg: chordBisector(),
    alt: 'Circle of radius 10 with chord AB of length 16. OM meets AB at right angles at the midpoint M, so AM = MB = 8. Triangle OMB has sides 6, 8, 10. A line from the centre perpendicular to a chord cuts the chord in half, giving a right-angled triangle (radius 10, half-chord 8, distance 6).',
    caption: 'The perpendicular from the centre bisects the chord, so Pythagoras finds the missing length.' },
  { name: '04-equal-tangents', after: '### Method for a length question', svg: equalTangents(),
    alt: 'Circle with centre O and external point P. Tangents PA and PB are marked equal, each 12. Radii OA and OB (5) meet them at right angles, and OP is 13. Two tangents drawn from the same outside point P touch the circle at A and B and have equal lengths; each is perpendicular to its radius.',
    caption: 'Tangents from an external point are equal in length (here PA = PB = 12).' },
  { name: '05-tangent-angles', after: '## Proof-writing checklist (Higher tier only)', svg: tangentAngles(),
    alt: 'Circle with tangents PA and PB from P, angle APB 50 degrees. Triangle PAB is isosceles so angles at A and B are 65 degrees. Angle AOB is 360 minus 90 minus 90 minus 50 = 130 degrees. Given angle APB = 50 degrees: equal tangents make PAB isosceles (65 degrees each), and the quadrilateral OAPB gives AOB = 130 degrees.',
    caption: 'Using PA = PB and the radius-tangent right angles to find angles.' },
];
