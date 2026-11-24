// Board-neutral redraws of two GCSE-level physics pictures (Sankey diagram, stretching a spring) used
// on AQA and OCR GCSE pages. Same numbers as before; the "Extended" pills are gone (on the spring
// graph the pill and its footer line, which only listed the tier's terms, are dropped).
import { C, svg, t, tl, arrow, path } from '../style.mjs';

export const slug = 'physics-motion-forces-and-energy';
const W = 900;
const GRID = '#c9d6d4', WASTE = '#f2e7b8', WASTEE = C.rust;

const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const scale = (d0, d1, p0, p1) => (v) => p0 + ((v - d0) * (p1 - p0)) / (d1 - d0);

// ---------- 8. Sankey ----------
function sankey() {
  const out = [];
  const k = 3; // px per joule
  const top = 200, x0 = 40;
  // main band narrows at each stage; waste branches turn downwards
  const stages = [[10, 250, 'Boiler'], [50, 450, 'Turbine'], [5, 650, 'Generator']];
  let rem = 100, x = x0;
  const pieces = [];
  for (const [waste, xs, name] of stages) {
    // main band from x to xs at current width
    pieces.push(`<rect x="${x}" y="${top}" width="${xs - x}" height="${rem * k}" fill="${C.teal}"/>`);
    out.push(t(xs + (waste * k) / 2, top - 22, name, { size: 21, weight: 700, anchor: 'middle' }));
    const w = waste * k, yb = top + (rem - waste) * k;
    // waste branch turns downwards
    pieces.push(`<path d="M${xs} ${yb} H${xs + w} V690 H${xs} Z" fill="${WASTE}" stroke="${WASTEE}" stroke-width="2.5"/>`);
    pieces.push(`<path d="M${xs - 14} 690 H${xs + w + 14} L${xs + w / 2} ${724} Z" fill="${WASTEE}"/>`);
    out.push(t(xs + w / 2, 760, `${waste} J`, { size: 22, weight: 700, fill: C.rust, anchor: 'middle' }));
    // band continues past the branch at reduced width
    pieces.push(`<rect x="${xs}" y="${top}" width="${w}" height="${(rem - waste) * k}" fill="${C.teal}"/>`);
    rem -= waste; x = xs + w;
  }
  pieces.push(`<rect x="${x}" y="${top}" width="${780 - x}" height="${rem * k}" fill="${C.teal}"/>`);
  pieces.push(`<path d="M780 ${top - 20} L850 ${top + (rem * k) / 2} L780 ${top + rem * k + 20} Z" fill="${C.tealDark}"/>`);
  out.unshift(pieces.join(''));
  out.push(t(x0 + 20, top + 40, 'Fuel: 100 J', { size: 23, weight: 700 }));
  out.push(t(690, top + rem * k + 40, '35 J electrical', { size: 22, weight: 700, fill: C.tealDark }));
  out.push(`<rect x="90" y="800" width="720" height="60" rx="12" fill="${C.ink}"/>`, t(450, 840, 'Efficiency = 35 ÷ 100 = 35%', { size: 25, weight: 700, fill: '#fff', anchor: 'middle' }));
  out.push(t(450, 900, 'Arrow width shows the amount of energy.', { size: 20, fill: C.muted, anchor: 'middle' }));
  return svg(W, 935, 'Where the energy goes', out.join('\n'), 'Illustrative power station, not real data');
}

// ---------- 7. Stretching a spring ----------
function spring() {
  const out = [];
  const X = scale(0, 0.3, 140, 830), Y = scale(0, 10, 700, 160);
  [0.05, 0.1, 0.15, 0.2, 0.25, 0.3].forEach((v) => out.push(line(X(v), 160, X(v), 700, { color: GRID, w: 1.5 })));
  [2, 4, 6, 8, 10].forEach((v) => out.push(line(140, Y(v), 830, Y(v), { color: GRID, w: 1.5 })));
  out.push(arrow(140, 700, 858, 700, { w: 3 }), arrow(140, 700, 140, 140, { w: 3 }));
  [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3].forEach((v) => out.push(t(X(v), 732, v === 0 ? '0' : v.toFixed(2), { size: 19, anchor: 'middle' })));
  [0, 2, 4, 6, 8, 10].forEach((v) => out.push(t(128, Y(v) + 7, String(v), { size: 19, anchor: 'end' })));
  out.push(t(485, 776, 'Extension (m)', { size: 22, weight: 700, anchor: 'middle' }));
  out.push(`<text x="60" y="430" font-size="22" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 60 430)">Force (N)</text>`);
  out.push(line(X(0.2), Y(8), X(0.25), Y(10), { color: '#4f5f7f', w: 2.5, dash: '8 6' }));
  out.push(path(`M${X(0)} ${Y(0)} L${X(0.2)} ${Y(8)} Q${X(0.24)} ${Y(9.2)} ${X(0.29)} ${Y(9.9)}`, { stroke: C.tealDark, w: 4.5 }));
  out.push(line(140, Y(6), X(0.15), Y(6), { w: 2.5, dash: '9 6' }), line(X(0.15), Y(6), X(0.15), 700, { w: 2.5, dash: '9 6' }));
  out.push(`<circle cx="${X(0.15)}" cy="${Y(6)}" r="9" fill="${C.ink}" stroke="#fff" stroke-width="2"/>`, `<circle cx="${X(0.2)}" cy="${Y(8)}" r="9" fill="${C.rust}" stroke="#fff" stroke-width="2"/>`);
  out.push(tl(X(0.2) - 14, Y(8) - 48, ['Limit of', 'proportionality'], { size: 20, weight: 700, fill: C.rust, anchor: 'end' }, 24));
  out.push(tl(X(0.21), Y(6.4), ['Beyond the limit:', 'curves away'], { size: 20, weight: 700 }, 24));
  out.push(t(X(0.29), Y(2.4), 'Gradient = k = 40 N/m', { size: 20, weight: 700, fill: C.tealDark, anchor: 'end' }));
  out.push(`<rect x="80" y="820" width="740" height="64" rx="12" fill="${C.ink}"/>`, t(450, 862, 'F = k x → x = 6.0 ÷ 40 = 0.15 m', { size: 25, weight: 700, fill: '#fff', anchor: 'middle' }));
  return svg(W, 920, 'Stretching a spring', out.join('\n'), 'Load–extension graph');
}

export const figures = [
  { name: '08-sankey-diagram', after: '## Conservation of energy', svg: sankey(),
    alt: 'A Sankey diagram: 100 J enters; 10 J, 50 J and 5 J are wasted at the boiler, turbine and generator, leaving 35 J electrical. Efficiency is 35 / 100 = 35%.',
    caption: 'A Sankey diagram shows energy flow with arrow width in proportion to energy; efficiency = useful / total.' },
  { name: '07-stretching-a-spring', after: '## P2.3c: force and extension', svg: spring(),
    alt: 'A load-extension graph is a straight line through the origin with gradient 40 N/m up to the limit of proportionality at 8.0 N, then curves. At 6.0 N the extension is 0.15 m.',
    caption: 'Up to the limit of proportionality force is proportional to extension: F = kx.' },
];
