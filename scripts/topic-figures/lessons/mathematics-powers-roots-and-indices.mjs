// Board-neutral redraw of the fractional-indices figure first drawn for Cambridge IGCSE 0580 and reused on
// AQA, OCR and OxfordAQA pages. Same cube and flow chains; the "Extended" tier badge is removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'mathematics-powers-roots-and-indices';
const W = 900;
const NAVY = C.ink;
const sup = (s) => `<tspan baseline-shift="super" font-size="66%">${s}</tspan>`;
const box = (x, y, label, gold = false) => `<rect x="${x}" y="${y}" width="120" height="70" rx="12" fill="${gold ? C.cream : '#ffffff'}" stroke="${gold ? C.olive : NAVY}" stroke-width="${gold ? 3.5 : 2.5}"/>` + t(x + 60, y + 46, label, { size: 28, weight: 700, fill: gold ? C.olive : NAVY, anchor: 'middle' });
const step = (x1, x2, y, label) => arrow(x1, y, x2, y, { w: 3.5 }) + t((x1 + x2) / 2, y - 16, label, { size: 20, weight: 700, fill: C.muted, anchor: 'middle' });

function fractional() {
  const o = [];
  // 5 x 5 x 5 isometric cube
  const n = 5, s = 26, cx = Math.cos(Math.PI / 6) * s, sy = s / 2, X0 = 210, Y0 = 380;
  const P = (i, j, k) => [X0 + (i - j) * cx, Y0 - (i + j) * sy - k * s];
  const poly = (pts, fill) => `<polygon points="${pts.map((p) => p.map((v) => v.toFixed(1)).join(',')).join(' ')}" fill="${fill}" stroke="${NAVY}" stroke-width="2" stroke-linejoin="round"/>`;
  // left face (j = 0 plane is the right face; draw faces of the big cube as grids)
  for (let a = 0; a < n; a++) for (let k = 0; k < n; k++) {
    o.push(poly([P(0, a, k), P(0, a + 1, k), P(0, a + 1, k + 1), P(0, a, k + 1)], '#b5d3cf')); // left face (i = 0)
    o.push(poly([P(a, 0, k), P(a + 1, 0, k), P(a + 1, 0, k + 1), P(a, 0, k + 1)], '#6fa9a1')); // right face (j = 0)
  }
  for (let a = 0; a < n; a++) for (let b = 0; b < n; b++) o.push(poly([P(a, b, n), P(a + 1, b, n), P(a + 1, b + 1, n), P(a, b + 1, n)], '#dfeeec'));
  o.push(t(210, 426, '125 blocks, side 5', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(210, 462, `125${sup('1/3')} = ∛125 = 5`, { size: 24, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(`<line x1="40" y1="500" x2="860" y2="500" stroke="#c9d6d4" stroke-width="2.5"/>`);
  o.push(t(40, 568, `125${sup('−2/3')}`, { size: 28, weight: 700 }));
  o.push(box(40, 610, '125'), step(166, 266, 645, 'root 3'), box(270, 610, '5'), step(396, 496, 645, 'square'), box(500, 610, '25'), step(626, 726, 645, 'flip'), box(730, 610, '1/25', true));
  o.push(t(40, 758, `32${sup('3/5')}`, { size: 28, weight: 700 }));
  o.push(box(40, 800, '32'), step(166, 266, 835, 'root 5'), box(270, 800, '2'), step(396, 496, 835, 'cube'), box(500, 800, '8', true));
  o.push(t(40, 932, 'Bottom number: root. Top: power. Minus: flip.', { size: 21, fill: C.muted }));
  return svg(W, 970, 'Fractional indices', o.join('\n'));
}

export const figures = [
  { name: '05-fractional-indices', after: '### Method: fractional powers (Higher tier only)', svg: fractional(),
    alt: 'A cube of 125 blocks has side 5, so 125^(1/3) = 5. Two flow chains show 125^(-2/3): root 3, square, flip gives 1/25, and 32^(3/5): root 5, cube gives 8.',
    caption: 'The denominator is the root, the numerator is the power, and a minus sign flips.' },
];
