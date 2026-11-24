// Board-neutral redraw of the recurring-decimal figure first drawn for Cambridge IGCSE 0580 and reused on
// AQA, OCR, Edexcel, OxfordAQA and IB MYP pages. Same digits and working; the "Extended" badge is removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'mathematics-fractions-decimals-percentages-ordering-operations';
const W = 900;
const NAVY = C.ink;
const cell = (x, y, d, gold) => `<rect x="${x}" y="${y}" width="56" height="64" fill="${gold ? C.cream : '#ffffff'}" stroke="${gold ? C.olive : NAVY}" stroke-width="2.5"/>` + t(x + 28, y + 43, d, { size: 28, weight: 700, anchor: 'middle' });

function recurring() {
  const o = [];
  o.push(t(40, 112, 'The block 36 repeats, so multiply by 100.', { size: 21, fill: C.muted }));
  const tail = '36363636';
  const row = (y, label, ints) => {
    o.push(t(40, y + 42, label, { size: 26, weight: 700 }));
    ints.forEach((d, i) => o.push(cell(330 - (ints.length - i) * 56, y, d, false)));
    o.push(`<circle cx="340" cy="${y + 56}" r="4.5" fill="${NAVY}"/>`);
    [...tail].forEach((d, i) => o.push(cell(350 + i * 56, y, d, true)));
    o.push(t(806, y + 52, '…', { size: 28, weight: 700 }));
  };
  row(160, 'x', ['0']);
  row(262, '100x', ['3', '6']);
  o.push(`<rect x="342" y="150" width="466" height="186" rx="12" fill="none" stroke="${C.rust}" stroke-width="3" stroke-dasharray="9 6"/>`);
  o.push(t(574, 374, 'identical tails', { size: 22, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(`<line x1="40" y1="420" x2="860" y2="420" stroke="${NAVY}" stroke-width="2.5"/>`);
  o.push(t(40, 490, '100x − x = 36', { size: 34, weight: 700 }), t(480, 490, 'tails cancel', { size: 22, weight: 700, fill: C.rust }));
  o.push(arrow(120, 516, 120, 568, { w: 4 }));
  o.push(t(40, 630, '99x = 36', { size: 34, weight: 700 }));
  o.push(arrow(120, 656, 120, 708, { w: 4 }));
  o.push(t(40, 770, 'x = 36/99 = 4/11', { size: 38, weight: 700, fill: C.tealDark }), t(560, 768, '÷ 9 top and bottom', { size: 21, fill: C.muted }));
  o.push(t(40, 830, 'Check: 4 ÷ 11 = 0.363636…', { size: 20, fill: C.muted }));
  return svg(W, 860, 'Recurring decimal to fraction', o.join('\n'));
}

export const figures = [
  { name: '03-recurring-to-fraction', after: '### Recurring decimal to fraction (Higher tier only)', svg: recurring(),
    alt: 'Two rows of digit boxes show x = 0.3636... and 100x = 36.3636... with identical tails after the decimal point. Subtracting gives 99x = 36, so x = 36/99 = 4/11.',
    caption: 'Multiplying by 100 lines up the repeating tails so that subtracting removes them.' },
];
