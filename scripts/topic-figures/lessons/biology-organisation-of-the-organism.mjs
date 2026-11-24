// Board-neutral redraw of the magnification figure first drawn for Cambridge IGCSE 0610 and reused on
// OCR A Level Biology pages. Same numbers; the "Extended" pill on the unit-conversion box is removed (the
// conversion itself stays), and the alt text no longer labels that step "Extended".
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-organisation-of-the-organism';
const W = 900;
const NAVY = C.ink;

function magnification() {
  const o = [];
  o.push(`<circle cx="120" cy="150" r="3.5" fill="${NAVY}"/>`, t(150, 147, 'Actual size: 0.02 mm', { size: 25, weight: 700 }), t(150, 180, 'smaller than the dot', { size: 19, fill: C.muted }));
  o.push(arrow(450, 204, 450, 266, { w: 4 }), t(480, 244, 'magnified', { size: 20 }));
  o.push(`<ellipse cx="450" cy="384" rx="300" ry="100" fill="${C.tealLight}" stroke="${NAVY}" stroke-width="4"/>`, `<circle cx="410" cy="384" r="42" fill="#ffffff" stroke="${NAVY}" stroke-width="3"/>`);
  o.push(`<line x1="150" y1="384" x2="150" y2="500" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/><line x1="750" y1="384" x2="750" y2="500" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>`);
  o.push(`<rect x="150" y="500" width="600" height="28" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  for (let i = 0; i <= 6; i++) { const x = 150 + i * 100; if (i > 0 && i < 6) o.push(`<line x1="${x}" y1="500" x2="${x}" y2="518" stroke="${C.olive}" stroke-width="2.5"/>`); o.push(t(x, 558, String(i * 10), { size: 19, anchor: 'middle' })); }
  o.push(t(764, 522, 'mm', { size: 19, fill: C.muted }));
  o.push(t(W / 2, 610, 'Image size: 60 mm', { size: 24, weight: 700, anchor: 'middle' }));
  o.push(`<rect x="30" y="664" width="840" height="216" rx="14" fill="#ffffff" stroke="${NAVY}" stroke-width="2.5"/>`);
  o.push(t(60, 716, 'magnification = image size ÷ actual size', { size: 24, weight: 700 }), t(60, 772, '= 60 mm ÷ 0.02 mm', { size: 23 }), t(60, 836, '= ×3000', { size: 36, weight: 700, fill: C.tealDark }));
  o.push(`<polygon points="90,896 120,946 60,946" fill="#e3b83a" stroke="${NAVY}" stroke-width="2.5" stroke-linejoin="round"/>`, t(90, 940, '!', { size: 22, weight: 700, anchor: 'middle' }), t(138, 932, 'Use the same units for both sizes', { size: 23, weight: 700 }));
  o.push(`<rect x="30" y="984" width="840" height="150" rx="14" fill="${C.cream}" stroke="${NAVY}" stroke-width="2.5"/>`);
  o.push(t(60, 1040, '1 mm = 1000 µm', { size: 25, weight: 700 }), t(60, 1094, '0.02 mm × 1000 = 20 µm', { size: 23 }));
  return svg(W, 1164, 'Calculating magnification', o.join('\n'), 'Worked example, schematic');
}

export const figures = [
  { name: '07-magnification', after: '### (b) Units', svg: magnification(),
    alt: 'A tiny real cell of 0.02 mm is magnified to a 60 mm image measured on a ruler. Magnification equals image size divided by actual size, 60 mm divided by 0.02 mm, which is times 3000. Both sizes must be in the same units. 1 mm equals 1000 micrometres, so 0.02 mm is 20 micrometres.',
    caption: 'Magnification is image size divided by actual size, using the same units.' },
];
