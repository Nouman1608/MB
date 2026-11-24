// Board-neutral redraw of a GCSE / IGCSE arc-and-sector picture first drawn for Cambridge IGCSE and
// reused on OCR and OxfordAQA pages. Same numbers; the tier pills "Core: factor of 360°" and
// "Extended: any angle" become plain headings that describe the angle.
import { C, svg, t } from '../style.mjs';

export const slug = 'mathematics-mensuration';
const W = 900;
const FILL = '#b5d3cf', GRID = '#c9d6d4';

function sector(cx, cy, r, deg) {
  // sector from the positive x-axis anticlockwise by deg (SVG y down)
  const a = deg * Math.PI / 180, ex = cx + r * Math.cos(a), ey = cy - r * Math.sin(a);
  const large = deg > 180 ? 1 : 0;
  return [
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffffff" stroke="${GRID}" stroke-width="2.5" stroke-dasharray="8 7"/>`,
    `<path d="M${cx} ${cy} L${cx + r} ${cy} A${r} ${r} 0 ${large} 0 ${ex} ${ey} Z" fill="${FILL}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`,
    `<path d="M${cx + r} ${cy} A${r} ${r} 0 ${large} 0 ${ex} ${ey}" fill="none" stroke="${C.olive}" stroke-width="7"/>`,
    `<path d="M${cx + 34} ${cy} A34 34 0 ${large} 0 ${cx + 34 * Math.cos(a)} ${cy - 34 * Math.sin(a)}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`,
  ].join('');
}
const keyArc = (x, y) => `<line x1="${x}" y1="${y - 7}" x2="${x + 26}" y2="${y - 7}" stroke="${C.olive}" stroke-width="7"/>`;
const keyArea = (x, y) => `<rect x="${x}" y="${y - 22}" width="26" height="26" rx="3" fill="${FILL}" stroke="${C.ink}" stroke-width="2"/>`;

function arcSector() {
  const o = [];
  const block = (y, head, frac, arcExpr, arcVal, areaExpr, areaVal) => {
    o.push(t(500, y, head, { size: 23, weight: 700, fill: C.tealDark }));
    o.push(t(500, y + 44, frac, { size: 23, weight: 700 }));
    o.push(keyArc(500, y + 80), t(540, y + 80, 'Arc length', { size: 22, weight: 700, fill: C.olive }));
    o.push(t(500, y + 114, arcExpr, { size: 21 }), t(500, y + 148, arcVal, { size: 23, weight: 700, fill: C.olive }));
    o.push(keyArea(500, y + 196), t(540, y + 196, 'Sector area', { size: 22, weight: 700, fill: C.tealDark }));
    o.push(t(500, y + 230, areaExpr, { size: 21 }), t(500, y + 264, areaVal, { size: 23, weight: 700, fill: C.tealDark }));
  };
  // 90 degrees, r = 6 cm
  let cx = 240, cy = 330, r = 6 * 22;
  o.push(sector(cx, cy, r, 90));
  o.push(t(cx + 40, cy - 46, '90°', { size: 21, weight: 700 }), t(cx + r / 2, cy + 34, 'r = 6 cm', { size: 21, weight: 700, anchor: 'middle' }));
  block(140, 'Angle 90°: a quarter circle', 'Fraction = 90/360 = 1/4', '= 1/4 × 2πr', '= 9.42 cm', '= 1/4 × πr²', '= 28.3 cm²');
  // 110 degrees, r = 8 cm
  cx = 240; cy = 790; r = 8 * 22;
  o.push(sector(cx, cy, r, 110));
  o.push(t(cx + 20, cy - 56, '110°', { size: 21, weight: 700 }), t(cx + r / 2, cy + 34, 'r = 8 cm', { size: 21, weight: 700, anchor: 'middle' }));
  block(600, 'Any angle: the same method', 'Fraction = 110/360', '= 110/360 × 2πr', '= 15.36 cm', '= 110/360 × πr²', '= 61.4 cm²');
  return svg(W, 1010, 'Arc and sector: a fraction of the circle', o.join('\n'));
}

export const figures = [
  { name: '03-arc-and-sector', after: '### Area of a sector', svg: arcSector(),
    alt: 'A 90 degree sector of radius 6 cm is a quarter of the circle: arc 9.42 cm, area 28.3 cm2. A 110 degree sector of radius 8 cm is 110/360 of the circle: arc 15.36 cm, area 61.4 cm2. The same method works for any angle.',
    caption: 'Arc length and sector area are the same fraction, angle over 360, of the circumference and the area.' },
];
