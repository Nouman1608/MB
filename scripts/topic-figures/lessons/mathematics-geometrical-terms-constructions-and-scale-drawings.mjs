// Board-neutral redraw of the parts-of-a-circle figure shared by AQA, OCR, Edexcel IGCSE and OxfordAQA
// maths pages. The old picture carried a "Mixed" tier badge and a "major / minor arc: Extended" note that
// existed only to carry the tier badge; both are gone. Every labelled part is kept.
import { C, svg, t } from '../style.mjs';

export const slug = 'mathematics-geometrical-terms-constructions-and-scale-drawings';
const W = 900;
const RUST = '#c0643a', NAVY = '#1e2a44', SLATE = '#4a5a78';
const ln = (x1, y1, x2, y2, col = NAVY, w = 3) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${w}"/>`;
const P = (cx, cy, r, a) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)].map((v) => +v.toFixed(1));

function circleParts() {
  const o = [];
  const cx = 450, cy = 320, r = 170;
  o.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#dfeceb" stroke="${NAVY}" stroke-width="4"/>`);
  // chord (y = cy - 120)
  const hc = Math.sqrt(r * r - 120 * 120);
  o.push(ln(cx - hc, cy - 120, cx + hc, cy - 120, C.olive, 5));
  o.push(t(cx, cy - 76, 'chord', { size: 23, weight: 700, fill: C.olive, anchor: 'middle' }));
  // diameter
  o.push(ln(cx - r, cy, cx + r, cy, NAVY, 4));
  o.push(t(cx, cy - 14, 'centre', { size: 20, fill: SLATE, anchor: 'middle' }), `<circle cx="${cx}" cy="${cy}" r="9" fill="${NAVY}"/>`);
  o.push(t(cx - 148, cy + 38, 'diameter', { size: 23, weight: 700 }));
  // radius to angle 62
  const rp = P(cx, cy, r, 62);
  o.push(ln(cx, cy, rp[0], rp[1], C.tealDark, 4.5));
  o.push(t(cx + 104, cy + 70, 'radius', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  // arc highlight 150..222 degrees? (left lower)
  const a1 = P(cx, cy, r, 180), a2 = P(cx, cy, r, 125);
  o.push(`<path d="M${a1[0]} ${a1[1] + 15} A${r} ${r} 0 0 0 ${a2[0]} ${a2[1]}" fill="none" stroke="${RUST}" stroke-width="9"/>`);
  const am = P(cx, cy, r, 150);
  o.push(ln(am[0], am[1], 86, cy + 202, SLATE, 2.5), t(40, cy + 212, 'arc', { size: 23, weight: 700, fill: RUST }));
  // tangent at bottom
  o.push(ln(cx - 150, cy + r, cx + 150, cy + r, RUST, 5), `<circle cx="${cx}" cy="${cy + r}" r="8" fill="${RUST}"/>`);
  o.push(t(cx, cy + r + 38, 'tangent', { size: 23, weight: 700, fill: RUST, anchor: 'middle' }));
  // circumference label
  const cp = P(cx, cy, r, -30);
  o.push(ln(cp[0] + 4, cp[1], 650, cp[1], SLATE, 2.5), t(656, cp[1] + 8, 'circumference', { size: 23, weight: 700 }));
  o.push(`<line x1="40" y1="600" x2="860" y2="600" stroke="#c9d6d4" stroke-width="2.5"/>`);
  // sector
  const sx = 240, sy = 760, sr = 110;
  const s1 = P(sx, sy, sr, -35), s2 = P(sx, sy, sr, 35);
  o.push(`<circle cx="${sx}" cy="${sy}" r="${sr}" fill="#ffffff" stroke="${NAVY}" stroke-width="3.5"/>`);
  o.push(`<path d="M${sx} ${sy} L${s1[0]} ${s1[1]} A${sr} ${sr} 0 0 1 ${s2[0]} ${s2[1]} Z" fill="${C.mustard}" stroke="${NAVY}" stroke-width="3.5" stroke-linejoin="round"/>`);
  o.push(t(sx, 912, 'sector', { size: 25, weight: 700, anchor: 'middle' }), t(sx, 944, '2 radii + arc', { size: 21, fill: C.muted, anchor: 'middle' }));
  // segment
  const gx = 660, gy = 760, gr = 110;
  const g1 = P(gx, gy, gr, -150), g2 = P(gx, gy, gr, -30);
  o.push(`<circle cx="${gx}" cy="${gy}" r="${gr}" fill="#ffffff" stroke="${NAVY}" stroke-width="3.5"/>`);
  o.push(`<path d="M${g1[0]} ${g1[1]} A${gr} ${gr} 0 0 1 ${g2[0]} ${g2[1]} Z" fill="#6fa7a0" stroke="${NAVY}" stroke-width="3.5" stroke-linejoin="round"/>`);
  o.push(t(gx, 912, 'segment', { size: 25, weight: 700, anchor: 'middle' }), t(gx, 944, 'chord + arc', { size: 21, fill: C.muted, anchor: 'middle' }));
  return svg(W, 980, 'Parts of a circle', o.join('\n'));
}

export const figures = [
  { name: '01-circle-parts', after: '## 8.05a Terms to know (both tiers)', svg: circleParts(),
    alt: 'Circle with centre, diameter, radius, chord, tangent touching at one point, circumference and a highlighted arc. Below, a shaded sector (two radii and an arc) and a shaded segment (a chord and an arc). Sector and segment are the pair most often confused.',
    caption: 'Radius, chord and tangent in one circle, with sector and segment shaded separately.' },
];
