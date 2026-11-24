// Board-neutral redraw of the GCSE-level antibiotic resistance picture used on AQA and OCR GCSE
// pages. Same five steps; the "Extended" tier pill next to the title is gone.
import { C, svg, t, arrow } from '../style.mjs';

export const slug = 'biology-variation-and-selection';
const W = 900;
const NR = '#7fb5ae', R = C.mustard;

const bact = (x, y, rot, res) => {
  const body = `<rect x="${x - 26}" y="${y - 12}" width="52" height="24" rx="12" fill="${res ? R : NR}" stroke="${C.ink}" stroke-width="2.5" transform="rotate(${rot} ${x} ${y})"/>`;
  const bands = res ? `<g transform="rotate(${rot} ${x} ${y})"><line x1="${x - 6}" y1="${y - 12}" x2="${x - 6}" y2="${y + 12}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${x + 6}" y1="${y - 12}" x2="${x + 6}" y2="${y + 12}" stroke="${C.ink}" stroke-width="2.5"/></g>` : '';
  return body + bands;
};
const killed = (x, y, rot) => `<rect x="${x - 26}" y="${y - 12}" width="52" height="24" rx="12" fill="#fff" stroke="${C.ink}" stroke-width="2" stroke-dasharray="4 4" transform="rotate(${rot} ${x} ${y})"/>` +
  `<path d="M${x - 9} ${y - 9} L${x + 9} ${y + 9} M${x + 9} ${y - 9} L${x - 9} ${y + 9}" stroke="${C.rust}" stroke-width="3"/>`;
const num = (x, y, n, fill = C.ink) => `<circle cx="${x}" cy="${y}" r="18" fill="${fill}"/>` + t(x, y + 7, String(n), { size: 19, weight: 700, fill: '#fff', anchor: 'middle' });

function antibioticResistance() {
  const out = [];
  const others = [[80, 30, 20], [170, 70, -25], [240, 40, 10], [300, 75, 30], [380, 35, -15], [390, 85, 35]];
  const res0 = [215, 55];
  const dish = (y) => out.push(`<rect x="30" y="${y}" width="440" height="140" rx="16" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`);
  const steps = [
    ['A random mutation:', 'one bacterium is resistant'],
    ['Antibiotic used:', 'non-resistant bacteria die'],
    ['The survivor has', 'less competition'],
    ['It reproduces and passes', 'on the resistance allele'],
    ['A resistant strain forms,', 'quickly: bacteria divide fast'],
  ];
  steps.forEach(([a, b], i) => {
    const y = 130 + i * 190;
    dish(y);
    if (i === 0) { others.forEach(([x, dy, r]) => out.push(bact(x, y + dy + 10, r, false))); out.push(bact(res0[0], y + res0[1] + 10, 0, true)); }
    if (i === 1) { others.forEach(([x, dy, r]) => out.push(killed(x, y + dy + 10, r))); out.push(bact(res0[0], y + res0[1] + 10, 0, true)); }
    if (i === 2) out.push(bact(250, y + 70, 0, true));
    if (i === 3) [[150, 60, 0], [230, 40, -15], [290, 80, 20], [250, 100, 5]].forEach(([x, dy, r]) => out.push(bact(x, y + dy, r, true)));
    if (i === 4) [[80, 40, 15], [100, 100, 0], [170, 80, -20], [230, 40, 0], [300, 50, 30], [310, 100, 35], [370, 90, 20], [410, 50, -15], [430, 110, 10], [200, 110, -10]].forEach(([x, dy, r]) => out.push(bact(x, y + dy, r, true)));
    out.push(num(510, y + 58, i + 1, i === 4 ? C.olive : C.ink));
    out.push(t(540, y + 52, a, { size: 21, weight: 700 }), t(540, y + 80, b, { size: 21 }));
    if (i < 4) out.push(arrow(250, y + 142, 250, y + 186, { w: 3.5 }));
  });
  out.push(`<rect x="290" y="${130 + 140 + 14}" width="52" height="22" rx="11" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`, t(354, 130 + 140 + 32, 'antibiotic', { size: 19, weight: 700 }));
  const ky = 1130;
  out.push(bact(70, ky, 0, false), t(108, ky + 7, 'Not resistant', { size: 19 }));
  out.push(bact(360, ky, 0, true), t(398, ky + 7, 'Resistant', { size: 19 }));
  out.push(killed(620, ky, 0), t(658, ky + 7, 'Killed', { size: 19 }));
  return svg(W, 1170, 'Antibiotic resistance arises', out.join('\n'), 'Selection, step by step');
}

export const figures = [
  { name: '06-antibiotic-resistance', after: '## 9. Evolution by natural selection', svg: antibioticResistance(),
    alt: 'Five dishes of bacteria: a random mutation makes one bacterium resistant; the antibiotic kills the six non-resistant ones; the survivor has less competition; it reproduces and passes on the allele; a resistant strain forms quickly.',
    caption: 'The mutation was already there; the antibiotic selected the resistant bacterium.' },
];
