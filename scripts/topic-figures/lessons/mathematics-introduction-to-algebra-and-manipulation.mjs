// Board-neutral redraw of the completing-the-square area figure. Same content and numbers as the earlier
// figure, with the "Extended" tier pill removed.
import { C, svg, t } from '../style.mjs';

export const slug = 'mathematics-introduction-to-algebra-and-manipulation';
const W = 900;

function completeSquare() {
  const o = [];
  const x0 = 270, y0 = 170, a = 240, b = 160; // drawn with x = 6 (side 240) and 4 (side 160)
  const cell = (x, y, w, h, fill, edge, dash = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${edge}" stroke-width="3"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
  o.push(cell(x0, y0, a, a, C.teal, C.ink), cell(x0 + a, y0, b, a, C.cream, C.olive), cell(x0, y0 + a, a, b, C.cream, C.olive));
  o.push(cell(x0 + a, y0 + a, b, b, '#fff', C.rust, '9 6'));
  o.push(t(x0 + a / 2, y0 + a / 2 + 12, 'x²', { size: 34, weight: 700, anchor: 'middle' }));
  o.push(t(x0 + a + b / 2, y0 + a / 2 + 9, '4x', { size: 26, weight: 700, anchor: 'middle' }));
  o.push(t(x0 + a / 2, y0 + a + b / 2 + 9, '4x', { size: 26, weight: 700, anchor: 'middle' }));
  o.push(t(x0 + a + b / 2, y0 + a + b / 2 + 10, '16', { size: 30, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(x0 + a / 2, y0 - 16, 'x', { size: 22, weight: 700, anchor: 'middle' }), t(x0 + a + b / 2, y0 - 16, '4', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(x0 - 20, y0 + a / 2 + 8, 'x', { size: 22, weight: 700, anchor: 'end' }), t(x0 - 20, y0 + a + b / 2 + 8, '4', { size: 22, weight: 700, anchor: 'end' }));
  o.push(t(x0 + a + b + 16, y0 + a + b / 2 - 4, 'added to', { size: 19, weight: 700, fill: C.rust }), t(x0 + a + b + 16, y0 + a + b / 2 + 20, 'complete', { size: 19, weight: 700, fill: C.rust }));
  const y = y0 + a + b + 70;
  o.push(t(W / 2, y, 'x² + 8x = (x + 4)² − 16', { size: 26, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, y + 40, 'p = half of 8 = 4', { size: 20, fill: C.muted, anchor: 'middle' }));
  o.push(`<rect x="${W / 2 - 220}" y="${y + 66}" width="440" height="52" rx="26" fill="${C.ink}"/>`);
  o.push(t(W / 2, y + 100, 'x² + 8x − 5 = (x + 4)² − 21', { size: 22, weight: 700, fill: '#fff', anchor: 'middle' }));
  o.push(t(W / 2, y + 156, 'Drawn with x = 6: both sides give 79', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, y + 190, 'Complete the square', o.join('\n'), 'x² + 8x − 5 as (x + p)² + q');
}

export const figures = [
  { name: '06-complete-the-square', after: '### Worked example 10: a ≠ 1', svg: completeSquare(),
    alt: 'A square of side x + 4 is built from x^2, two strips 4x and a 4 by 4 corner of 16. So x^2 + 8x = (x + 4)^2 - 16, and x^2 + 8x - 5 = (x + 4)^2 - 21.',
    caption: 'Half of 8 gives p = 4; the 16 added to complete the square must be taken away.' },
];
