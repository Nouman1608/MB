// Board-neutral redraws of two GCSE-level reproduction pictures used on AQA and OCR GCSE pages
// (menstrual cycle, asexual vs sexual reproduction). Same content; the "Extended" tier pills are gone.
import { C, svg, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-reproduction';
const W = 900;
const LINING = '#f5d3c4';

const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const circ = (x, y, r, fill, edge = C.ink, w = 3) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${w}"/>`;
const scale = (d0, d1, p0, p1) => (v) => p0 + ((v - d0) * (p1 - p0)) / (d1 - d0);
const poly = (pts, o) => path('M' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L'), o);
const gauss = (m, s, h, base = 0) => (x) => base + h * Math.exp(-((x - m) ** 2) / (2 * s * s));

// ---------- 8. Menstrual cycle ----------
function menstrual() {
  const out = [];
  const X = scale(0, 28, 130, 830);
  const days = (y) => [0, 7, 14, 21, 28].forEach((d) => out.push(line(X(d), y, X(d), y + 8), t(X(d), y + 34, String(d), { size: 19, anchor: 'middle' })));
  // lining
  out.push(t(30, 150, 'Lining of the uterus', { size: 24, weight: 700 }));
  const y0 = 180, y1 = 440, Y = scale(0, 1, y1, y0);
  out.push(`<rect x="${X(0)}" y="${y0}" width="${X(5) - X(0)}" height="${y1 - y0}" fill="${LINING}"/>`);
  out.push(t(X(0) + 12, y0 + 32, 'days 1-5', { size: 19, weight: 700, fill: C.rust }));
  out.push(line(X(14), y0, X(14), y1, { color: '#4f5f7f', w: 2.5, dash: '9 6' }));
  out.push(t(X(14) - 10, y0 + 30, 'ovulation', { size: 19, weight: 700, fill: '#4f5f7f', anchor: 'end' }), t(X(14) - 10, y0 + 56, 'egg released', { size: 18, fill: '#4f5f7f', anchor: 'end' }));
  const lin = (d) => {
    if (d <= 5) return 0.6 - 0.55 * (0.5 - 0.5 * Math.cos((Math.PI * d) / 5));
    if (d <= 19) return 0.05 + 0.9 * (0.5 - 0.5 * Math.cos((Math.PI * (d - 5)) / 14));
    if (d <= 26) return 0.95;
    return 0.95 - 0.35 * (0.5 - 0.5 * Math.cos((Math.PI * (d - 26)) / 2));
  };
  const pts = [];
  for (let d = 0; d <= 28; d += 0.1) pts.push([X(d), Y(lin(d))]);
  out.push(poly(pts, { stroke: C.tealDark, w: 4.5 }));
  out.push(line(X(0), y0 - 10, X(0), y1, { w: 3 }), line(X(0), y1, X(28), y1, { w: 3 }));
  out.push(t(X(0) - 12, Y(0.95) + 7, 'thick', { size: 19, anchor: 'end' }), t(X(0) - 12, Y(0.05) + 7, 'thin', { size: 19, anchor: 'end' }));
  days(y1);
  out.push(t(X(14), y1 + 70, 'Day of cycle', { size: 19, fill: C.muted, anchor: 'middle' }));
  // hormones
  out.push(t(30, 600, 'Hormone levels (sketch)', { size: 24, weight: 700 }));
  const h0 = 640, h1 = 900, H = scale(0, 1, h1, h0);
  out.push(line(X(14), h0, X(14), h1, { color: '#4f5f7f', w: 2.5, dash: '9 6' }));
  const plot = (f, col, dash = '') => {
    const p = [];
    for (let d = 0; d <= 28; d += 0.1) p.push([X(d), H(f(d))]);
    return poly(p, { stroke: col, w: 4, extra: dash ? `stroke-dasharray="${dash}"` : '' });
  };
  const fsh = (d) => gauss(5, 4, 0.6)(d) + 0.03;
  const oes = (d) => gauss(12, 2.5, 0.88)(d) + gauss(21, 3, 0.4)(d) + 0.03;
  const lh = (d) => gauss(14, 0.9, 0.85)(d) + 0.03;
  const pro = (d) => gauss(21, 3.2, 0.8)(d) + 0.01;
  out.push(plot(fsh, C.olive, '14 8'), plot(oes, C.tealDark), plot(lh, C.rust), plot(pro, '#1e2a44', '4 6'));
  out.push(t(X(3.8), H(0.72), 'FSH', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  out.push(t(X(10.5), H(0.98), 'Oestrogen', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(X(14.4), H(0.92), 'LH', { size: 20, weight: 700, fill: C.rust }));
  out.push(t(X(21.5), H(0.93), 'Progesterone', { size: 20, weight: 700, anchor: 'middle' }));
  out.push(line(X(0), h0 - 10, X(0), h1, { w: 3 }), line(X(0), h1, X(28), h1, { w: 3 }));
  out.push(t(X(0) - 12, H(0.95) + 7, 'high', { size: 19, anchor: 'end' }), t(X(0) - 12, H(0.02) + 7, 'low', { size: 19, anchor: 'end' }));
  days(h1);
  out.push(t(X(14), h1 + 70, 'Day of cycle', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1000, 'The menstrual cycle', out.join('\n'), 'A 28-day cycle');
}

// ---------- 1. Asexual and sexual ----------
function asexualSexual() {
  const out = [];
  const T = C.teal, G = C.mustard;
  const cell = (x, y, r, fill, nuc = true) => circ(x, y, r, fill) + (nuc ? circ(x, y, 5, C.ink, C.ink, 1) : '');
  out.push(`<rect x="40" y="130" width="820" height="320" rx="14" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`);
  out.push(t(70, 176, 'Asexual: one parent', { size: 24, weight: 700 }));
  out.push(cell(150, 290, 50, T), arrow(230, 290, 352, 290, { w: 3.5 }));
  [452, 572, 692].forEach((x) => out.push(cell(x, 290, 40, T)));
  out.push(t(150, 378, '1 parent', { size: 21, weight: 700, anchor: 'middle' }), t(572, 378, 'Genetically identical', { size: 21, weight: 700, anchor: 'middle' }));
  out.push(t(70, 420, 'e.g. bacteria, yeast, potato tubers', { size: 19, fill: C.muted }));
  // sexual
  out.push(`<rect x="40" y="480" width="820" height="700" rx="14" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`);
  out.push(t(70, 526, 'Sexual: two parents', { size: 24, weight: 700 }));
  out.push(circ(290, 620, 44, T), circ(770, 620, 44, G));
  out.push(t(230, 628, 'Parent 1', { size: 21, weight: 700, anchor: 'end' }), t(830, 628, 'Parent 2', { size: 21, weight: 700, anchor: 'end' }).replace('text-anchor="end"', 'text-anchor="end"'));
  out.push(arrow(290, 666, 290, 718, { color: C.tealDark, marker: 'ahT', w: 3 }), arrow(770, 666, 770, 718, { color: C.olive, marker: 'ahO', w: 3 }));
  out.push(circ(290, 750, 28, T), t(290, 758, 'n', { size: 21, weight: 700, anchor: 'middle' }), t(332, 758, 'gamete', { size: 21, weight: 700 }));
  out.push(circ(770, 750, 28, G), t(770, 758, 'n', { size: 21, weight: 700, anchor: 'middle' }), t(728, 758, 'gamete', { size: 21, weight: 700, anchor: 'end' }));
  out.push(arrow(312, 772, 470, 846, { color: C.tealDark, marker: 'ahT', w: 3 }), arrow(748, 772, 590, 846, { color: C.olive, marker: 'ahO', w: 3 }));
  out.push(`<path d="M530 834 A40 40 0 0 0 530 914 Z" fill="${T}"/><path d="M530 834 A40 40 0 0 1 530 914 Z" fill="${G}"/>`, circ(530, 874, 40, 'none'));
  out.push(t(530, 882, '2n', { size: 21, weight: 700, anchor: 'middle' }), t(476, 882, 'Zygote', { size: 21, weight: 700, anchor: 'end' }));
  out.push(t(588, 866, 'Fertilisation:', { size: 21, weight: 700 }), t(588, 894, 'nuclei fuse', { size: 20 }));
  out.push(arrow(530, 916, 530, 962, { w: 3.5 }));
  out.push(circ(400, 1010, 38, '#93b496') + circ(400, 1010, 7, C.ink, C.ink, 1));
  out.push(circ(530, 1010, 38, '#b8b86a') + circ(530, 1010, 12, 'none', C.ink, 4));
  out.push(circ(660, 1010, 38, '#d1b84a') + `<rect x="648" y="1005" width="24" height="10" rx="3" fill="${C.ink}"/>`);
  out.push(t(722, 1002, 'Different', { size: 21, weight: 700 }), t(722, 1030, 'offspring', { size: 21, weight: 700 }));
  out.push(t(70, 1110, 'n = one set, 2n = two sets', { size: 20 }), t(560, 1110, 'Cat: 19 + 19 = 38', { size: 20, fill: C.muted }));
  return svg(W, 1220, 'One parent or two?', out.join('\n'), 'How offspring are made');
}

export const figures = [
  { name: '08-menstrual-cycle', after: '### The cycle in outline', svg: menstrual(),
    alt: 'Two graphs over 28 days: the uterus lining is lost on days 1-5, then rebuilt, with ovulation around day 14; Sketch of FSH, oestrogen, LH and progesterone, with oestrogen peaking before the LH peak at ovulation and progesterone high afterwards.',
    caption: 'Link the lining and hormone changes to the days of the cycle.' },
  { name: '01-asexual-sexual', after: '### Worked example 2: a data question', svg: asexualSexual(),
    alt: 'One parent makes genetically identical offspring. In sexual reproduction two parents each make a gamete; the gametes fuse to form a zygote, giving offspring that differ from each other. Also shown: gametes are n and the zygote 2n (cat 19 + 19 = 38).',
    caption: 'Compare one-parent and two-parent reproduction.' },
];
