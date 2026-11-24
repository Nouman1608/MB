// Board-neutral redraw of the slant-height figure first drawn for Cambridge IGCSE 0580 and reused on
// OCR, OxfordAQA and IB MYP pages. Same pyramid (15, 8, 17) and cone (6, 8, 10); the "Extended" tier
// pill is removed, and the alt text no longer calls the slant-height step "Extended".
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'mathematics-surface-area-and-volume';
const W = 900;
const NAVY = C.ink;
const sup = (s) => `<tspan baseline-shift="super" font-size="68%">${s}</tspan>`;
const lab = (x, y, s, fill, size = 22) => `<text x="${x}" y="${y}" font-size="${size}" font-weight="700" fill="${fill}" text-anchor="middle" stroke="#ffffff" stroke-width="5" paint-order="stroke">${s}</text>`;

function slant() {
  const o = [];
  // pyramid: apex above base centre; base drawn as a rhombus (square seen obliquely)
  const apex = [450, 164], Cn = [450, 358], L = [274, 358], R = [626, 358], F = [450, 448], Bk = [450, 268];
  const Mf = [(F[0] + R[0]) / 2, (F[1] + R[1]) / 2]; // midpoint of front-right base edge
  o.push(`<polygon points="${apex} ${L} ${F}" fill="${C.teal}" stroke="${NAVY}" stroke-width="3" stroke-linejoin="round"/>`);
  o.push(`<polygon points="${apex} ${F} ${R}" fill="${C.cream}" stroke="${NAVY}" stroke-width="3" stroke-linejoin="round"/>`);
  o.push(`<line x1="${apex[0]}" y1="${apex[1]}" x2="${Cn[0]}" y2="${Cn[1]}" stroke="${C.tealDark}" stroke-width="4" stroke-dasharray="11 7"/>`);
  o.push(`<line x1="${Cn[0]}" y1="${Cn[1]}" x2="${Mf[0]}" y2="${Mf[1]}" stroke="${NAVY}" stroke-width="3" stroke-dasharray="10 7"/>`);
  o.push(`<line x1="${apex[0]}" y1="${apex[1]}" x2="${Mf[0]}" y2="${Mf[1]}" stroke="${C.rust}" stroke-width="4.5"/>`);
  o.push(`<circle cx="${Cn[0]}" cy="${Cn[1]}" r="6" fill="${NAVY}"/>`);
  o.push(lab(422, 262, '15', C.tealDark), lab(466, 288, '17', C.rust), lab(470, 410, '8', NAVY));
  o.push(t(W / 2, 536, `15${sup('2')} + 8${sup('2')} = 17${sup('2')}`, { size: 26, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(W / 2, 576, 'slant height from vertical height', { size: 21, fill: C.muted, anchor: 'middle' }));
  o.push(`<line x1="60" y1="610" x2="840" y2="610" stroke="#c9d6d4" stroke-width="2.5"/>`);
  // cone: radius 6, height 8, slant 10 (to scale, 22 px per unit)
  const k = 22, top = [450, 712], base = 712 + 8 * k, r = 6 * k;
  o.push(`<path d="M${450 - r} ${base} L${top[0]} ${top[1]} L${450 + r} ${base} A${r} 30 0 0 1 ${450 - r} ${base} Z" fill="${C.cream}" stroke="${NAVY}" stroke-width="3" stroke-linejoin="round"/>`);
  o.push(`<line x1="450" y1="${top[1]}" x2="450" y2="${base}" stroke="${C.tealDark}" stroke-width="4" stroke-dasharray="11 7"/>`);
  o.push(`<line x1="450" y1="${base}" x2="${450 + r}" y2="${base}" stroke="${NAVY}" stroke-width="3" stroke-dasharray="10 7"/>`);
  o.push(`<line x1="${top[0]}" y1="${top[1]}" x2="${450 + r}" y2="${base}" stroke="${C.rust}" stroke-width="4.5"/>`);
  o.push(`<path d="M450 ${base - 20} H470 V${base}" fill="none" stroke="${NAVY}" stroke-width="2.5"/>`);
  o.push(lab(428, 808, '8', C.tealDark), lab(552, 790, '10', C.rust), lab(516, 940, '6', NAVY));
  o.push(t(100, 698, 'vertical', { size: 21, weight: 700, fill: C.tealDark }), t(100, 728, 'height: volume', { size: 21, weight: 700, fill: C.tealDark }));
  o.push(t(100, 788, 'slant: curved', { size: 21, weight: 700, fill: C.rust }), t(100, 818, 'surface area', { size: 21, weight: 700, fill: C.rust }));
  o.push(t(W / 2, 1000, `6${sup('2')} + 8${sup('2')} = 10${sup('2')}`, { size: 26, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(W / 2, 1036, `l${sup('2')} = r${sup('2')} + h${sup('2')}`, { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1070, 'Vertical height or slant height?', o.join('\n'), 'volume uses the vertical one');
}

export const figures = [
  { name: '05-slant-vs-height', after: '### Frustums', svg: slant(),
    alt: 'Top, a square-based pyramid with base 16 and vertical height 15 from the apex to the centre of the base. A right-angled triangle inside it uses the vertical height 15, half the base 8, and the slant height 17 on a face. Bottom, a cone with radius 6, vertical height 8 and slant height 10. Volume uses the vertical height; curved surface area uses the slant height.',
    caption: 'The vertical height goes in the volume formula and the slant height in the curved surface area. Pythagoras links them: 15, 8, 17 in the pyramid and 6, 8, 10 in the cone.' },
];
