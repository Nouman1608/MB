// Board-neutral redraw of the oxygen-debt figure (lactic acid to the liver, heart and breathing rates).
// Same content and numbers as the earlier figure, with the "Extended" tier pill removed.
import { C, svg, t, arrow, path } from '../style.mjs';

export const slug = 'biology-respiration';
const W = 900;
const FLESH = '#e8b4a0';

function oxygenDebt() {
  const o = [];
  const dia = (x, y, s = 9) => `<path d="M${x} ${y - s} l${s} ${s} l${-s} ${s} l${-s} ${-s} z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  const num = (x, y, n, col) => `<circle cx="${x}" cy="${y}" r="17" fill="${col}"/>` + t(x, y + 6, String(n), { size: 17, weight: 700, fill: '#fff', anchor: 'middle' });
  // muscle
  o.push(`<ellipse cx="140" cy="200" rx="90" ry="44" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>`, t(140, 207, 'Muscle', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(dia(105, 140), dia(140, 126), dia(175, 140));
  o.push(arrow(234, 200, 388, 200, { color: C.olive, w: 4, marker: 'ahO' }), dia(290, 200), dia(340, 200));
  // heart
  o.push(path('M450 252 C410 220 380 190 390 160 C400 132 440 132 450 160 C460 132 500 132 510 160 C520 190 490 220 450 252 Z', { fill: FLESH, stroke: C.ink, w: 3 }));
  o.push(t(450, 290, 'Heart', { size: 21, weight: 700, anchor: 'middle' }), num(450, 102, 1, C.ink));
  o.push(arrow(522, 200, 690, 200, { color: C.olive, w: 4, marker: 'ahO' }), dia(580, 200), dia(630, 200));
  // liver
  o.push(path('M705 175 C720 150 830 145 860 165 C880 180 870 230 840 238 C800 248 730 245 712 228 C700 215 698 190 705 175 Z', { fill: FLESH, stroke: C.ink, w: 3 }));
  o.push(t(785, 207, 'Liver', { size: 21, weight: 700, anchor: 'middle' }), num(860, 146, 3, C.ink));
  o.push(dia(76, 298), t(96, 305, 'lactic acid', { size: 18 }));
  // lungs
  o.push(`<line x1="450" y1="320" x2="450" y2="356" stroke="${C.ink}" stroke-width="4"/>`);
  o.push(`<ellipse cx="418" cy="410" rx="28" ry="56" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`, `<ellipse cx="482" cy="410" rx="28" ry="56" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(450, 494, 'Lungs', { size: 21, weight: 700, anchor: 'middle' }), num(380, 338, 2, C.tealDark));
  o.push(`<path d="M514 400 C640 400 740 340 762 266" fill="none" stroke="${C.tealDark}" stroke-width="4" marker-end="url(#ahT)"/>`);
  o.push(t(690, 430, 'extra oxygen', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  // key
  const keys = [[1, C.ink, 'Heart rate stays fast: lactic acid goes to the liver'], [2, C.tealDark, 'Breathing stays deeper and faster: more oxygen'], [3, C.ink, 'Liver breaks lactic acid down by aerobic respiration']];
  keys.forEach(([n, c, s], i) => o.push(num(60, 546 + i * 44, n, c), t(92, 553 + i * 44, s, { size: 20 })));
  // charts
  const labels = ['Rest', 'End of sprint', '5 min after', '15 min after'];
  const chart = (y0, title, vals, max, ticks, col, sq) => {
    const px = 140, pw = 680, ph = 110, X = (i) => px + 40 + i * ((pw - 80) / 3), Y = (v) => y0 + ph - (v / max) * ph;
    o.push(t(40, y0 - 20, title, { size: 20, weight: 700 }));
    o.push(`<line x1="${px}" y1="${y0 - 6}" x2="${px}" y2="${y0 + ph}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${px}" y1="${y0 + ph}" x2="${px + pw}" y2="${y0 + ph}" stroke="${C.ink}" stroke-width="2.5"/>`);
    for (const v of ticks) o.push(`<line x1="${px - 7}" y1="${Y(v)}" x2="${px}" y2="${Y(v)}" stroke="${C.ink}" stroke-width="2"/>`, t(px - 12, Y(v) + 6, String(v), { size: 17, anchor: 'end' }));
    o.push(`<line x1="${px}" y1="${Y(vals[0])}" x2="${px + pw}" y2="${Y(vals[0])}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="8 6"/>`);
    o.push(path('M' + vals.map((v, i) => `${X(i)} ${Y(v)}`).join(' L'), { stroke: col, w: 4 }));
    vals.forEach((v, i) => {
      o.push(sq ? `<rect x="${X(i) - 10}" y="${Y(v) - 10}" width="20" height="20" fill="${col}" stroke="${C.ink}" stroke-width="2"/>` : `<circle cx="${X(i)}" cy="${Y(v)}" r="11" fill="${col}"/>`);
      o.push(t(X(i), Y(v) - 18, String(v), { size: 18, weight: 700, anchor: 'middle' }));
    });
    return X;
  };
  const X = chart(720, 'Heart rate (beats per minute)', [64, 172, 118, 66], 200, [0, 100, 200], C.ink, false);
  chart(920, 'Breathing rate (breaths per minute)', [14, 40, 26, 15], 50, [0, 25, 50], C.tealDark, true);
  labels.forEach((s, i) => {
    const w = s.split(' '), lines = w.length > 2 ? [w.slice(0, 2).join(' '), w.slice(2).join(' ')] : [s];
    lines.forEach((l, k) => o.push(t(X(i), 1060 + k * 24, l, { size: 18, anchor: 'middle' })));
  });
  o.push(t(W / 2, 1130, 'Dashed line = resting value. Example from the lesson', { size: 18, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1190, 'Repaying the oxygen debt', `<g transform="translate(0 30)">${o.join('\n')}</g>`, 'After vigorous exercise');
}

export const figures = [
  { name: '05-oxygen-debt', after: '## 4.4.2.2 Response to exercise', svg: oxygenDebt(),
    alt: 'Lactic acid built up in the muscles is carried by the blood, driven by a fast heart rate, to the liver, where it is broken down by aerobic respiration using extra oxygen supplied by deeper, faster breathing. Charts of the cyclist example show heart rate 64, 172, 118, 66 and breathing rate 14, 40, 26, 15 at rest, end of sprint, 5 and 15 minutes after.',
    caption: 'Fast heart rate moves lactic acid to the liver and fast breathing supplies the oxygen to break it down.' },
];
