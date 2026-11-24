// Board-neutral replacements for the three diagrams removed from the Cambridge 9708 efficiency and
// market failure pages (audit C4): allocative efficiency (was IB-labelled), monopoly welfare loss
// (was "AQA only") and the bypass cost-benefit example (toll shown as a transfer). Numbers are the
// pages' own: monopoly Q 40, P 10, MC 6, efficient Q 60 at P = MC = 8, welfare loss 40;
// bypass SB 55 + 10 = 65, SC 50 + 12 = 62, net +3, toll 20, operator 20 - 50 = -30.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'economics-efficiency-and-market-failure';
const W = 900;

function axes(x0, y0, w, h, xl, yl) {
  return [
    `<line x1="${x0}" y1="${y0}" x2="${x0 + w}" y2="${y0}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>`,
    `<line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y0 - h}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>`,
    t(x0 + w - 4, y0 + 34, xl, { size: 18, weight: 700, anchor: 'end' }),
    t(x0 - 14, y0 - h - 6, yl, { size: 18, weight: 700, anchor: 'start' }),
  ].join('');
}

// ---------- 1. Allocative efficiency (shape only) ----------
function allocative() {
  const o = [];
  const x0 = 110, y0 = 640, w = 700, h = 500;
  o.push(axes(x0, y0, w, h, 'Quantity', 'Price, cost'));
  // demand from (x0+40, y0-440) to (x0+640, y0-80); MC from (x0+40, y0-60) to (x0+640, y0-440)
  const D = (x) => (y0 - 440) + (x - (x0 + 40)) * (360 / 600);
  const M = (x) => (y0 - 60) - (x - (x0 + 40)) * (380 / 600);
  o.push(path(`M${x0 + 40} ${D(x0 + 40)} L${x0 + 640} ${D(x0 + 640)}`, { stroke: C.blue, w: 4.5 }));
  o.push(path(`M${x0 + 40} ${M(x0 + 40)} L${x0 + 640} ${M(x0 + 640)}`, { stroke: C.rust, w: 4.5 }));
  o.push(t(x0 + 648, D(x0 + 640) + 6, 'D', { size: 20, weight: 700, fill: C.blue }));
  o.push(t(x0 + 648, M(x0 + 640) + 6, 'MC', { size: 20, weight: 700, fill: C.rust }));
  // intersection: D(x)=M(x)
  const xs = x0 + 40 + (380) / ((360 + 380) / 600), ys = D(xs);
  o.push(`<line x1="${xs}" y1="${ys}" x2="${xs}" y2="${y0}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 6"/>`);
  o.push(`<line x1="${x0}" y1="${ys}" x2="${xs}" y2="${ys}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 6"/>`);
  o.push(`<circle cx="${xs}" cy="${ys}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(xs, y0 + 32, 'Q*', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(t(xs + 42, ys + 8, 'P = MC', { size: 20, weight: 700 }));
  // below Q*: P > MC
  const q1 = x0 + 170;
  o.push(`<line x1="${q1}" y1="${D(q1)}" x2="${q1}" y2="${M(q1)}" stroke="${C.tealDark}" stroke-width="5"/>`);
  o.push(t(q1 - 12, (D(q1) + M(q1)) / 2 + 48, 'P &gt; MC', { size: 18, weight: 700, fill: C.tealDark, anchor: 'end' }));
  // above Q*: P < MC
  const q2 = x0 + 560;
  o.push(`<line x1="${q2}" y1="${D(q2)}" x2="${q2}" y2="${M(q2)}" stroke="${C.olive}" stroke-width="5"/>`);
  o.push(t(q2 + 12, (D(q2) + M(q2)) / 2 + 7, 'P &lt; MC', { size: 18, weight: 700, fill: C.olive }));
  o.push(panel(60, 700, 780, 166, '#ffffff', C.panelEdge));
  o.push(t(80, 736, 'Allocative efficiency: price = marginal cost (P = MC).', { size: 19, weight: 700 }));
  o.push(t(80, 766, 'The last unit is worth exactly what it costs to make.', { size: 17 }));
  o.push(t(80, 796, 'Below Q*, P &gt; MC: too little is made; extra units are worth more than they cost.', { size: 17, fill: C.tealDark }));
  o.push(t(80, 824, 'Above Q*, P &lt; MC: too much is made; those units cost more than they are worth.', { size: 17, fill: C.olive }));
  o.push(t(80, 852, 'With externalities the condition becomes MSB = MSC.', { size: 17, fill: C.muted }));
  o.push(t(W / 2, 898, 'Illustrative, shape only', { size: 16, fill: C.muted, anchor: 'middle', italic: true }));
  return svg(W, 920, 'Allocative efficiency', o.join('\n'));
}

// ---------- 2. Monopoly welfare loss (to scale, worked-check numbers) ----------
function monopoly() {
  const o = [];
  const x0 = 120, y0 = 660, sx = 8.5, sy = 38; // Q 0..80 -> 680 px; P 0..14 -> 532 px
  const X = (q) => x0 + q * sx, Y = (p) => y0 - p * sy;
  o.push(axes(x0, y0, 80 * sx + 30, 14 * sy + 30, 'Quantity', 'Price, cost'));
  for (const p of [6, 8, 10]) o.push(t(x0 - 12, Y(p) + 6, String(p), { size: 17, anchor: 'end' }));
  for (const q of [40, 60]) o.push(t(X(q), y0 + 30, String(q), { size: 17, anchor: 'middle' }));
  o.push(t(x0 - 12, y0 + 6, '0', { size: 17, anchor: 'end' }));
  // welfare loss triangle (40,10) (40,6) (60,8)
  o.push(`<polygon points="${X(40)},${Y(10)} ${X(40)},${Y(6)} ${X(60)},${Y(8)}" fill="${C.mustard}" fill-opacity="0.55" stroke="${C.olive}" stroke-width="2.5"/>`);
  // lines: D: P = 14 - 0.1Q ; MR: 14 - 0.2Q ; MC: 2 + 0.1Q (straight lines through the worked values)
  o.push(path(`M${X(0)} ${Y(14)} L${X(80)} ${Y(6)}`, { stroke: C.blue, w: 4.5 }));
  o.push(path(`M${X(0)} ${Y(14)} L${X(60)} ${Y(2)}`, { stroke: C.blue, w: 3, extra: 'stroke-dasharray="9 7"' }));
  o.push(path(`M${X(0)} ${Y(2)} L${X(80)} ${Y(10)}`, { stroke: C.rust, w: 4.5 }));
  o.push(t(X(80) + 10, Y(6) + 6, 'D', { size: 20, weight: 700, fill: C.blue }));
  o.push(t(X(60) + 10, Y(2) + 6, 'MR', { size: 20, weight: 700, fill: C.blue }));
  o.push(t(X(80) + 10, Y(10) + 6, 'MC', { size: 20, weight: 700, fill: C.rust }));
  // guides
  const dash = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="1.8" stroke-dasharray="5 6"/>`;
  o.push(dash(x0, Y(10), X(40), Y(10)), dash(X(40), Y(10), X(40), y0), dash(x0, Y(6), X(40), Y(6)), dash(x0, Y(8), X(60), Y(8)), dash(X(60), Y(8), X(60), y0));
  for (const [q, p] of [[40, 10], [40, 6], [60, 8]]) o.push(`<circle cx="${X(q)}" cy="${Y(p)}" r="7" fill="${C.ink}"/>`);
  o.push(t(X(40) + 14, Y(10) - 20, 'monopoly', { size: 17, weight: 700 }));
  o.push(t(X(60) + 16, Y(8) + 68, 'P = MC', { size: 17, weight: 700 }));
  o.push(panel(60, 712, 780, 166, '#ffffff', C.olive));
  o.push(t(80, 746, 'Monopoly: MR = MC at output 40, price 10, where MC = 6.', { size: 17 }));
  o.push(t(80, 772, 'Allocative efficiency: P = MC = 8 at output 60.', { size: 17 }));
  o.push(t(80, 808, 'Welfare loss = ½ × (10 − 6) × (60 − 40) = ½ × 4 × 20 = 40', { size: 19, weight: 700 }));
  o.push(t(80, 836, 'Units 40 to 60 are worth more to buyers than they cost to make,', { size: 17 }));
  o.push(t(80, 860, 'but the monopolist does not produce them.', { size: 17 }));
  o.push(t(W / 2, 910, 'Illustrative numbers; straight lines drawn through the worked-check values', { size: 16, fill: C.muted, anchor: 'middle', italic: true }));
  return svg(W, 934, 'Monopoly welfare loss', o.join('\n'));
}

// ---------- 3. Bypass cost-benefit analysis ----------
function bypass() {
  const o = [];
  const u = 5.5, base = 520; // 1 CU million = 6.2 px
  const bar = (x, parts, label, total, edge) => {
    let y = base;
    parts.forEach(([v, name, fill]) => {
      const h = v * u;
      o.push(`<rect x="${x}" y="${y - h}" width="170" height="${h}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`);
      o.push(t(x + 85, y - h / 2 + 7, String(v), { size: 22, weight: 700, anchor: 'middle' }));
      o.push(t(x + 186, y - h / 2 + 7, name, { size: 17 }));
      y -= h;
    });
    o.push(t(x + 85, y - 16, `${label} = ${total}`, { size: 20, weight: 700, anchor: 'middle', fill: edge }));
  };
  bar(90, [[55, 'time saved by drivers', C.teal], [10, 'fewer accidents', C.tealLight]], 'Social benefit', 65, C.tealDark);
  bar(470, [[50, 'construction', C.cream], [12, 'noise and pollution', C.sand]], 'Social cost', 62, C.olive);
  o.push(`<line x1="60" y1="${base}" x2="840" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(panel(60, base + 24, 780, 64, C.tealLight, C.tealDark));
  o.push(t(W / 2, base + 64, 'Net social benefit = 65 − 62 = +3, so the bypass is worth building', { size: 19, weight: 700, anchor: 'middle' }));
  // toll as a transfer
  const y1 = base + 120;
  o.push(panel(60, y1, 380, 168, '#ffffff', C.panelEdge));
  o.push(t(80, y1 + 34, 'Toll 20: a transfer', { size: 19, weight: 700 }));
  o.push(t(80, y1 + 74, 'Drivers', { size: 18, weight: 700 }));
  o.push(arrow(160, y1 + 68, 300, y1 + 68, { color: C.olive, marker: 'ahO' }));
  o.push(t(310, y1 + 74, 'Operator', { size: 18, weight: 700 }));
  o.push(t(230, y1 + 56, '20', { size: 17, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(tl(80, y1 + 112, ['Paid by one group, received by another:', 'it cancels out, so it is not counted', 'in social benefit.'], { size: 16, fill: C.muted }, 21));
  o.push(panel(460, y1, 380, 168, C.cream, C.olive));
  o.push(t(480, y1 + 34, "The private operator's view", { size: 19, weight: 700 }));
  o.push(t(480, y1 + 76, 'toll 20 − construction 50 = −30', { size: 19, weight: 700, fill: C.rust }));
  o.push(tl(480, y1 + 112, ['A private firm would not build it,', 'even though society gains +3.'], { size: 16, fill: C.muted }, 21));
  o.push(t(W / 2, y1 + 206, 'Fictional town, all figures in CU millions', { size: 16, fill: C.muted, anchor: 'middle', italic: true }));
  return svg(W, y1 + 230, 'Cost-benefit analysis: a bypass', o.join('\n'));
}

export const figures = [
  { name: '01-allocative-efficiency', after: '## 7.3.1 and 7.3.2 Productive and allocative efficiency', svg: allocative(),
    alt: 'Demand and marginal cost curves cross at quantity Q*, where price equals marginal cost: allocative efficiency. Below Q*, price is above marginal cost, so too little is made because the last unit is worth more than it costs. Above Q*, price is below marginal cost, so too much is made. With externalities the condition becomes marginal social benefit equals marginal social cost.',
    caption: 'Allocative efficiency is where price equals marginal cost.' },
  { name: '02-monopoly-welfare-loss', after: '## 7.3.1 and 7.3.2 Productive and allocative efficiency', svg: monopoly(),
    alt: 'A monopolist sets marginal revenue equal to marginal cost at output 40 and charges price 10, where marginal cost is 6. The allocatively efficient output, where price equals marginal cost, is 60 at a price of 8. The welfare loss triangle between demand and marginal cost from 40 to 60 has area one half times 4 times 20, which is 40.',
    caption: 'The monopolist stops at 40, losing the units worth more than they cost: a welfare loss of 40.' },
  { name: '03-bypass-cost-benefit', after: '### Worked example: a bypass', svg: bypass(),
    alt: 'Social benefit of a bypass is 65 (time saved by drivers 55 plus fewer accidents 10) and social cost is 62 (construction 50 plus noise and pollution 12), so the net social benefit is plus 3. The toll of 20 is a transfer from drivers to the operator and cancels out for society. A private operator sees toll 20 minus construction 50, which is minus 30, and would not build. All figures are CU millions for a fictional town.',
    caption: 'Society gains 3, but a private operator would lose 30: the toll is only a transfer.' },
];
