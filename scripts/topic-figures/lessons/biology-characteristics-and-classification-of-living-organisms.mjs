// Board-neutral redraw of the DNA-similarity sketch tree. Same tree, invented example sequences and
// wording as the earlier figure, with the "Extended" tier pill removed.
import { C, svg, panel, t } from '../style.mjs';

export const slug = 'biology-characteristics-and-classification-of-living-organisms';
const W = 900;

function dnaSimilarity() {
  const o = [];
  const node = (x, y, n) => `<circle cx="${x}" cy="${y}" r="17" fill="${C.ink}"/>` + t(x, y + 6, String(n), { size: 17, weight: 700, fill: '#fff', anchor: 'middle' });
  const rows = [['Species A', 'ATGCCGTA', 'Compare the others with A'], ['Species B', 'ATGCCGTT', '1 difference from A'], ['Species C', 'TTGACGAT', '4 differences from A']];
  const ref = rows[0][1], yA = 210, yB = 370, yC = 530, n2y = (yA + yB) / 2, n1y = (n2y + yC) / 2;
  // tree
  const st = `stroke="${C.ink}" stroke-width="4.5" fill="none" stroke-linejoin="round"`;
  o.push(`<path d="M250 ${yA} H440 M250 ${yB} H440 M250 ${yA} V${yB} M90 ${n2y} H250 M90 ${yC} H440 M90 ${n2y} V${yC}" ${st}/>`);
  o.push(node(250, n2y, 2), node(90, n1y, 1));
  rows.forEach(([name, seq, note], r) => {
    const y = [yA, yB, yC][r];
    o.push(t(470, y - 42, name, { size: 22, weight: 700, fill: C.tealDark }));
    [...seq].forEach((b, i) => {
      const d = b !== ref[i], x = 470 + i * 46;
      o.push(`<rect x="${x}" y="${y - 24}" width="42" height="48" rx="6" fill="${d ? C.mustard : '#fff'}" stroke="${C.ink}" stroke-width="2.5"/>`);
      o.push(t(x + 21, y + 9, b, { size: 23, weight: d ? 700 : 400, anchor: 'middle' }));
    });
    o.push(t(470, y + 56, note, { size: 19, fill: C.muted }));
  });
  const y = 650;
  o.push(panel(40, y, 820, 200, '#fff', C.ink));
  o.push(node(84, y + 46, 1), t(120, y + 53, 'Older common ancestor of A, B and C', { size: 20 }));
  o.push(node(84, y + 100, 2), t(120, y + 107, 'Recent common ancestor of A and B', { size: 20 }));
  o.push(t(W / 2, y + 166, 'Closer ancestor = more similar DNA', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svg(W, y + 230, 'DNA shows relationships', o.join('\n'), 'Sketch tree with example sequences');
}

export const figures = [
  { name: '08-dna-similarity', after: '### Worked example 1: reading sequence data', svg: dnaSimilarity(),
    alt: 'A sketch tree: A and B share a recent common ancestor, C an older one. Invented base sequences show B differs from A at 1 base and C at 4. The more recently two groups shared an ancestor, the more similar their DNA.',
    caption: 'More recent common ancestor means more similar DNA.' },
];
