// Board-neutral redraws of two GCSE DNA pictures first drawn for Cambridge IGCSE 0610 and reused on
// AQA and OCR GCSE pages. Same content; the "Extended" tier badge is gone.
import { C, svg, panel, t, path } from '../style.mjs';

export const slug = 'biology-biological-molecules';
const W = 900;
const BASE = { A: '#b5d3cf', T: '#f2e7b8', G: '#c9d3ee', C: '#f2c9b0' };
const PAIR = { A: 'T', T: 'A', G: 'C', C: 'G' };
const baseBox = (x, y, b, w = 86, h = 46) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${BASE[b]}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x + w / 2, y + h / 2 + 10, b, { size: 27, weight: 700, anchor: 'middle' });

// ---------- 06 DNA structure ----------
function structure() {
  const o = [];
  // double helix
  const hx = 130, top = 210, bot = 700, amp = 66, turns = 2;
  const pt = (k, phase) => { const y = top + (bot - top) * k; return [hx + amp * Math.sin(k * turns * 2 * Math.PI + phase), y]; };
  for (let i = 1; i < 24; i++) { const k = i / 24; const [x1, y] = pt(k, 0), [x2] = pt(k, Math.PI); o.push(`<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${C.olive}" stroke-width="3"/>`); }
  const strand = (phase, col) => path('M' + Array.from({ length: 121 }, (_, i) => pt(i / 120, phase).join(' ')).join(' L'), { stroke: col, w: 6 });
  o.push(strand(0, C.tealDark), strand(Math.PI, C.ink));
  o.push(t(hx, 176, 'Double helix', { size: 23, weight: 700, anchor: 'middle' }));
  o.push(t(hx, 742, 'two strands', { size: 20, anchor: 'middle' }), t(hx, 770, 'coiled together', { size: 20, anchor: 'middle' }));
  // ladder
  const s1 = 'ATGCCGTA'.split('');
  const lx = 340, rx = 720, y0 = 196, dy = 70;
  o.push(t(lx + 43, 168, 'Strand 1', { size: 22, weight: 700, anchor: 'middle' }), t(rx + 43, 168, 'Strand 2', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(573, 134, 'bonds between', { size: 19, fill: C.muted, anchor: 'middle' }), t(573, 160, 'paired bases', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(`<line x1="573" y1="168" x2="573" y2="${y0 + 23}" stroke="${C.muted}" stroke-width="2"/><circle cx="573" cy="${y0 + 23}" r="4" fill="${C.muted}"/>`);
  o.push(`<line x1="${lx - 16}" y1="${y0 - 10}" x2="${lx - 16}" y2="${y0 + 7 * dy + 56}" stroke="${C.ink}" stroke-width="7"/>`);
  o.push(`<line x1="${rx + 102}" y1="${y0 - 10}" x2="${rx + 102}" y2="${y0 + 7 * dy + 56}" stroke="${C.tealDark}" stroke-width="7"/>`);
  s1.forEach((b, i) => {
    const y = y0 + i * dy;
    o.push(`<line x1="${lx + 86}" y1="${y + 23}" x2="${rx}" y2="${y + 23}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="4 6"/>`);
    o.push(baseBox(lx, y, b), baseBox(rx, y, PAIR[b]));
  });
  o.push(`<rect x="30" y="800" width="840" height="130" rx="14" fill="${BASE.T}" stroke="${C.olive}" stroke-width="2.5"/>`);
  const pairKey = (x, a) => { o.push(baseBox(x, 822, a, 66, 50), `<line x1="${x + 66}" y1="847" x2="${x + 104}" y2="847" stroke="${C.ink}" stroke-width="3" stroke-dasharray="4 6"/>`, baseBox(x + 104, 822, PAIR[a], 66, 50)); o.push(t(x + 85, 908, `${a} with ${PAIR[a]}`, { size: 24, weight: 700, anchor: 'middle' })); };
  pairKey(150, 'A'); pairKey(580, 'C');
  return svg(W, 960, 'DNA structure', o.join('\n'), 'Schematic, simplified');
}

// ---------- 07 DNA percentages ----------
function percentages() {
  const o = [];
  const x0 = 40, Wd = 820, k = Wd / 100;
  const num = (cx, cy, n) => `<circle cx="${cx}" cy="${cy}" r="18" fill="${C.ink}"/>` + t(cx, cy + 7, String(n), { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  const seg = (x, y, w, fill, s, dashed = false) => `<rect x="${x}" y="${y}" width="${w}" height="70" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"${dashed ? ' stroke-dasharray="9 6"' : ''}/>` + t(x + w / 2, y + 45, s, { size: 23, weight: 700, anchor: 'middle' });
  const rows = [
    ['C = 34% (given)', [[34, BASE.C, 'C 34%'], [66, '#ffffff', 'G, A, T = ?', true]]],
    ['C pairs with G, so G = 34%', [[34, BASE.C, 'C 34%'], [34, BASE.G, 'G 34%'], [32, '#ffffff', 'A, T = ?', true]]],
    ['A + T = 100 − 34 − 34 = 32%', [[34, BASE.C, 'C 34%'], [34, BASE.G, 'G 34%'], [32, BASE.T, 'A + T 32%']]],
    ['A pairs with T, so A = T = 32 ÷ 2 = 16%', [[34, BASE.C, 'C 34%'], [34, BASE.G, 'G 34%'], [16, BASE.A, 'A 16%'], [16, BASE.T, 'T 16%']]],
  ];
  rows.forEach(([h, segs], i) => {
    const y = 130 + i * 178;
    o.push(num(x0 + 20, y + 8, i + 1), t(x0 + 52, y + 17, h, { size: 24, weight: 700 }));
    let x = x0;
    for (const [p, f, s, d] of segs) { o.push(seg(x, y + 42, p * k, f, s, d)); x += p * k; }
  });
  o.push(`<rect x="30" y="852" width="840" height="66" rx="14" fill="${BASE.T}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(t(450, 895, 'Check: 34 + 34 + 16 + 16 = 100', { size: 25, weight: 700, anchor: 'middle' }));
  return svg(W, 945, 'Base percentages in DNA', o.join('\n'), 'Worked example: 34% of the bases are C');
}

export const figures = [
  { name: '06-dna-structure', after: '## 1. Structure and function of molecules', svg: structure(),
    alt: 'DNA has two strands coiled into a double helix. Each strand carries bases and bonds between paired bases hold the strands together. A always pairs with T and C with G, so strand 1 A T G C C G T A pairs with strand 2 T A C G G C A T.',
    caption: 'A pairs with T, C pairs with G.' },
  { name: '07-dna-percentages', after: '### Method: find percentages of bases', svg: percentages(),
    alt: 'If 34% of the bases are C, G is also 34%. A plus T is 100 minus 68 = 32%, so A and T are each 16%. The four add to 100.',
    caption: 'Pairing means A equals T and C equals G.' },
];
