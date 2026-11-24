// Board-neutral redraw of the A Level non-disjunction picture used on AQA, OxfordAQA and Edexcel IAL
// pages. Same content; the "AQA only" badge over the meiosis I section is gone.
import { C, svg, t } from '../style.mjs';

export const slug = 'biology-the-mitotic-cell-cycle';
const W = 900;
const A = '#7fb5ae', B = C.mustard;

const line = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="2.5"/>`;
const cell = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`;
// X-shaped chromosome (two chromatids) and single chromatid
const xchrom = (x, y, col) => `<g transform="translate(${x} ${y})" stroke-linecap="round"><path d="M-9 -18 L9 18 M9 -18 L-9 18" stroke="${C.ink}" stroke-width="10"/><path d="M-9 -18 L9 18 M9 -18 L-9 18" stroke="${col}" stroke-width="6"/></g>`;
const single = (x, y, col) => `<rect x="${x - 5}" y="${y - 17}" width="10" height="34" rx="5" fill="${col}" stroke="${C.ink}" stroke-width="2.5"/>`;

function nonDisjunction() {
  const out = [];
  const block = (y0, title, mid, gametes) => {
    out.push(t(30, y0, title, { size: 24, weight: 700, fill: C.tealDark }));
    const py = y0 + 140;
    out.push(line(84, py, 170, py - 50), line(84, py, 170, py + 50));
    out.push(cell(55, py, 32), xchrom(43, py, A), xchrom(67, py, B));
    const my = [py - 64, py + 64];
    mid.forEach((m, i) => { out.push(cell(200, my[i], 33)); m.forEach(([dx, col]) => out.push(xchrom(200 + dx, my[i], col))); });
    gametes.forEach(([content, label], j) => {
      const gy = py - 140 + j * 70 + (j > 1 ? 20 : 0);
      const parent = my[j < 2 ? 0 : 1];
      out.push(line(233, parent, 367, gy));
      out.push(cell(394, gy, 25));
      content.forEach(([dx, col]) => out.push(single(394 + dx, gy, col)));
      out.push(t(430, gy + 7, label, { size: 19, weight: 700 }));
    });
  };
  block(150, 'Fails in meiosis I', [[[-12, A], [12, B]], []], [[[[-7, A], [7, B]], 'n + 1 (24)'], [[[-7, A], [7, B]], 'n + 1 (24)'], [[], 'n − 1 (22)'], [[], 'n − 1 (22)']]);
  block(490, 'Fails in meiosis II', [[[0, A]], [[0, B]]], [[[[0, A]], 'n (23)'], [[[0, A]], 'n (23)'], [[[-7, B], [7, B]], 'n + 1 (24)'], [[], 'n − 1 (22)']]);
  out.push(`<rect x="30" y="900" width="840" height="100" rx="14" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`);
  out.push(t(450, 938, 'Normal gamete (23) fuses with:', { size: 21, weight: 700, anchor: 'middle' }));
  out.push(t(240, 978, '24 + 23 = 47', { size: 24, weight: 700, fill: C.olive, anchor: 'middle' }), t(660, 978, '22 + 23 = 45', { size: 24, weight: 700, fill: C.olive, anchor: 'middle' }));
  return svg(W, 1030, 'Non-disjunction', out.join('\n'), 'One chromosome pair followed through meiosis');
}

export const figures = [
  { name: '07-non-disjunction', after: '## 3.2.11.1 Gene mutations', svg: nonDisjunction(),
    alt: 'One homologous pair is followed. Failure in meiosis I gives two n+1 and two n-1 gametes; failure in meiosis II gives one n+1, one n-1 and two normal gametes. In humans these are 24 and 22 chromosomes, and fertilisation by a normal 23 gives 47 or 45.',
    caption: 'Non-disjunction gives gametes with an extra or a missing chromosome.' },
];
