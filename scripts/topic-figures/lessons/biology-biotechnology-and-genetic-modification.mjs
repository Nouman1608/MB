// Board-neutral redraw of a GCSE genetic-modification picture first drawn for Cambridge IGCSE 0610 and
// reused on AQA and OCR GCSE pages. Same six steps; the "Extended" tier badge is gone.
import { C, svg, panel, t, tl } from '../style.mjs';

export const slug = 'biology-biotechnology-and-genetic-modification';
const W = 900;
const GENE = '#d4b02e', CELL = '#b5d3cf', RUST = '#b5602e', PROT = ['#d4b02e', '#b5602e', '#8a6d0d', '#d4b02e', '#b5602e'];
function fa(x1, y1, x2, y2, color = C.ink, w = 3.5, head = 18) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
  const bx = x2 - ux * head, by = y2 - uy * head, hw = head * 0.6;
  return `<line x1="${x1}" y1="${y1}" x2="${bx}" y2="${by}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>` +
    `<polygon points="${x2},${y2} ${bx - uy * hw},${by + ux * hw} ${bx + uy * hw},${by - ux * hw}" fill="${color}"/>`;
}
const letter = (cx, cy, l) => `<circle cx="${cx}" cy="${cy}" r="18" fill="${C.ink}"/>` + t(cx, cy + 7, l, { size: 20, weight: 700, fill: '#ffffff', anchor: 'middle' });
const arcD = (cx, cy, r, a1, a2) => { const p = (a) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)]; const [x1, y1] = p(a1), [x2, y2] = p(a2); return `M${x1} ${y1} A${r} ${r} 0 ${Math.abs(a2 - a1) > 180 ? 1 : 0} 1 ${x2} ${y2}`; };
// plasmid: double ring, optionally with a gap at the top and/or an inserted gene
function plasmid(cx, cy, r, { gap = false, gene = false, s = 1 } = {}) {
  let o = '';
  const w = 4 * s;
  if (gap) {
    o += `<path d="${arcD(cx, cy, r, -60, 240)}" fill="none" stroke="${C.ink}" stroke-width="${w}"/><path d="${arcD(cx, cy, r - 9 * s, -60, 240)}" fill="none" stroke="${C.ink}" stroke-width="${w}"/>`;
    o += `<path d="${arcD(cx, cy, r, 240, 255)}" fill="none" stroke="${RUST}" stroke-width="${w + 1}"/><path d="${arcD(cx, cy, r - 9 * s, -75, -60)}" fill="none" stroke="${RUST}" stroke-width="${w + 1}"/>`;
  } else {
    o += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${C.ink}" stroke-width="${w}"/><circle cx="${cx}" cy="${cy}" r="${r - 9 * s}" fill="none" stroke="${C.ink}" stroke-width="${w}"/>`;
  }
  if (gene) o += `<path d="${arcD(cx, cy, r + 6 * s, 235, 305)}" fill="none" stroke="${GENE}" stroke-width="${7 * s}"/><path d="${arcD(cx, cy, r - 2 * s, 240, 300)}" fill="none" stroke="${GENE}" stroke-width="${5 * s}"/>`;
  return o;
}
const bacterium = (cx, cy, w, h) => `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${CELL}" stroke="${C.tealDark}" stroke-width="3"/>`;

function steps() {
  const o = [];
  o.push(`<circle cx="330" cy="106" r="12" fill="${GENE}" stroke="${C.ink}" stroke-width="2"/>`, t(352, 113, '= human gene', { size: 20 }));
  const ph = [170, 150, 150, 120, 120, 98];
  let y = 130;
  const box = (i, l, head, sub) => {
    o.push(panel(30, y, 840, ph[i], '#ffffff', C.ink), letter(68, y + 38, l));
    o.push(tl(100, y + 44, head, { size: 22, weight: 700 }, 28));
    if (sub) o.push(t(100, y + 44 + head.length * 28 + 6, sub, { size: 19, fill: C.muted }));
    const top = y; y += ph[i] + 16; return top;
  };
  // a
  let top = box(0, 'a', ['Cut out the', 'human gene'], 'restriction enzymes');
  o.push(`<line x1="430" y1="${top + 50}" x2="840" y2="${top + 50}" stroke="${C.ink}" stroke-width="4"/><line x1="430" y1="${top + 62}" x2="840" y2="${top + 62}" stroke="${C.ink}" stroke-width="4"/>`);
  o.push(`<line x1="520" y1="${top + 50}" x2="640" y2="${top + 50}" stroke="${GENE}" stroke-width="4"/><line x1="520" y1="${top + 62}" x2="640" y2="${top + 62}" stroke="${GENE}" stroke-width="4"/>`);
  for (const x of [520, 640]) o.push(`<line x1="${x}" y1="${top + 36}" x2="${x}" y2="${top + 76}" stroke="${RUST}" stroke-width="3" stroke-dasharray="6 4"/>`);
  o.push(t(580, top + 28, 'gene', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(fa(580, top + 82, 580, top + 114, C.ink, 3, 14));
  o.push(`<line x1="500" y1="${top + 128}" x2="520" y2="${top + 128}" stroke="${RUST}" stroke-width="4"/><line x1="520" y1="${top + 128}" x2="640" y2="${top + 128}" stroke="${GENE}" stroke-width="4"/>`);
  o.push(`<line x1="532" y1="${top + 140}" x2="652" y2="${top + 140}" stroke="${GENE}" stroke-width="4"/><line x1="652" y1="${top + 140}" x2="672" y2="${top + 140}" stroke="${RUST}" stroke-width="4"/>`);
  o.push(`<line x1="684" y1="${top + 134}" x2="700" y2="${top + 134}" stroke="${C.ink}" stroke-width="2"/>`, t(706, top + 141, 'sticky ends', { size: 20, weight: 700, fill: RUST }));
  // b
  top = box(1, 'b', ['Cut the plasmid', 'with the same', 'enzymes'], '');
  o.push(plasmid(560, top + 82, 54, { gap: true }));
  o.push(`<path d="M${560 + 54 * Math.cos(-75 * Math.PI / 180)} ${top + 82 + 54 * Math.sin(-75 * Math.PI / 180)} L656 ${top + 40}" fill="none" stroke="${C.ink}" stroke-width="2" stroke-dasharray="3 4"/>`, t(662, top + 46, 'sticky ends', { size: 20, weight: 700, fill: RUST }));
  // c
  top = box(2, 'c', ['Join the gene in', 'with DNA ligase'], '');
  o.push(plasmid(560, top + 82, 54, { gene: true }));
  o.push(`<line x1="614" y1="${top + 82}" x2="650" y2="${top + 82}" stroke="${C.ink}" stroke-width="2"/>`, t(658, top + 76, 'recombinant', { size: 20, weight: 700 }), t(658, top + 102, 'plasmid', { size: 20, weight: 700 }));
  // d
  top = box(3, 'd', ['Put plasmids', 'into bacteria'], '');
  o.push(plasmid(480, top + 62, 26, { gene: true, s: 0.6 }));
  o.push(fa(514, top + 62, 556, top + 62, C.ink, 3.5, 16));
  o.push(bacterium(690, top + 62, 260, 88), `<circle cx="640" cy="${top + 62}" r="26" fill="none" stroke="${C.tealDark}" stroke-width="3"/>`, plasmid(750, top + 62, 22, { gene: true, s: 0.55 }));
  // e
  top = box(4, 'e', ['Bacteria multiply'], 'e.g. in a fermenter');
  const small = (x, yy) => bacterium(x, yy, 60, 26) + `<circle cx="${x}" cy="${yy}" r="5" fill="${GENE}" stroke="${C.ink}" stroke-width="1.2"/>`;
  o.push(small(470, top + 60), fa(504, top + 60, 548, top + 60, C.tealDark, 3.5, 16));
  o.push(small(590, top + 44), small(590, top + 78), fa(626, top + 60, 670, top + 60, C.tealDark, 3.5, 16));
  for (const [x, yy] of [[712, top + 44], [780, top + 44], [712, top + 78], [780, top + 78]]) o.push(small(x, yy));
  // f
  top = box(5, 'f', ['Bacteria make', 'the human protein'], '');
  o.push(bacterium(530, top + 49, 160, 66), plasmid(530, top + 49, 20, { gene: true, s: 0.5 }));
  o.push(fa(614, top + 49, 650, top + 49, C.ink, 3.5, 16));
  PROT.forEach((f, i) => o.push(`<circle cx="${664 + i * 26}" cy="${top + 49}" r="11" fill="${f}" stroke="${C.ink}" stroke-width="1.5"/>`));
  return svg(W, y + 10, 'Genetic modification: six steps', o.join('\n'));
}

export const figures = [
  { name: '06-gm-steps', after: '## Genetic crosses -- method in steps', svg: steps(),
    alt: 'Six steps to make a human protein in bacteria. a: restriction enzymes cut out the human gene leaving sticky ends. b: the same enzymes cut a plasmid leaving complementary sticky ends. c: the gene is inserted and DNA ligase joins it, making a recombinant plasmid. d: plasmids are put into bacteria. e: bacteria multiply. f: bacteria make the human protein.',
    caption: 'Cut gene and plasmid with the same enzymes, join with ligase, put into bacteria, multiply, collect protein.' },
];
