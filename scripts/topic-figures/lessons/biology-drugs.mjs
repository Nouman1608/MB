// Board-neutral redraws of three antibiotic figures (doubling, how resistance develops, use only when
// essential). Same content and numbers as the earlier set, with the "Extended" tier badges removed.
import { C, svg, panel, t, arrow, path } from '../style.mjs';

export const slug = 'biology-drugs';
const W = 900;
const NORM = '#dde9e6';

const bug = (cx, cy, rot, kind) => {
  if (kind === 'killed') return `<rect x="${cx - 15}" y="${cy - 8}" width="30" height="16" rx="8" transform="rotate(${rot} ${cx} ${cy})" fill="#f6eee6" stroke="${C.muted}" stroke-width="1.8" stroke-dasharray="4 3"/>` +
    `<path d="M${cx - 7} ${cy - 7} l14 14 M${cx + 7} ${cy - 7} l-14 14" stroke="${C.rust}" stroke-width="3" stroke-linecap="round"/>`;
  const res = kind === 'res';
  return `<rect x="${cx - 15}" y="${cy - 8}" width="30" height="16" rx="8" transform="rotate(${rot} ${cx} ${cy})" fill="${res ? C.mustard : NORM}" stroke="${C.ink}" stroke-width="2.5"/>` +
    (res ? `<rect x="${cx - 4}" y="${cy - 5}" width="8" height="10" rx="2" transform="rotate(${rot} ${cx} ${cy})" fill="${C.ink}"/>` : '');
};

// ---------- 07 Doubling ----------
function doubling() {
  const o = [];
  const px = 140, py = 160, pw = 660, ph = 400;
  const X = (h) => px + (h / 4) * pw, Y = (n) => py + ph - (n / 256) * ph;
  for (const n of [64, 128, 192, 256]) o.push(`<line x1="${px}" y1="${Y(n)}" x2="${px + pw}" y2="${Y(n)}" stroke="#d6e2e0" stroke-width="1.5"/>`);
  o.push(`<line x1="${px}" y1="${Y(0)}" x2="${px + pw}" y2="${Y(0)}" stroke="${C.ink}" stroke-width="3"/>`, `<line x1="${px}" y1="${py - 10}" x2="${px}" y2="${Y(0)}" stroke="${C.ink}" stroke-width="3"/>`);
  for (let h = 0; h <= 4; h++) o.push(`<line x1="${X(h)}" y1="${Y(0)}" x2="${X(h)}" y2="${Y(0) + 8}" stroke="${C.ink}" stroke-width="2"/>`, t(X(h), Y(0) + 32, String(h), { size: 18, anchor: 'middle' }));
  for (const n of [0, 64, 128, 192, 256]) o.push(t(px - 14, Y(n) + 6, String(n), { size: 18, anchor: 'end' }));
  o.push(t(px + pw / 2, Y(0) + 68, 'Time (hours)', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(`<text transform="translate(${px - 70} ${py + ph / 2}) rotate(-90)" font-size="20" font-weight="700" fill="${C.ink}" text-anchor="middle">Number of bacteria</text>`);
  const pts = Array.from({ length: 9 }, (_, i) => [X(i / 2), Y(2 ** i)]);
  o.push(path('M' + pts.map((p) => p.join(' ')).join(' L'), { stroke: C.tealDark, w: 4 }));
  pts.forEach(([x, y], i) => o.push(`<circle cx="${x}" cy="${y}" r="${i === 8 ? 9 : 7}" fill="${i === 8 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2"/>`));
  o.push(`<circle cx="${X(4)}" cy="${Y(256)}" r="15" fill="none" stroke="${C.olive}" stroke-width="3"/>`);
  o.push(t(X(4) - 24, Y(256) - 26, '256 after 4 h', { size: 21, weight: 700, anchor: 'end' }));
  o.push(t(px + 20, Y(256) + 34, '8 divisions: 2⁸ = 256', { size: 21, weight: 700, fill: C.tealDark }));
  return svg(W, Y(0) + 100, 'One bacterium becomes 256', o.join('\n'), 'Divides every 30 minutes; all offspring survive');
}

// ---------- 04 Resistance develops ----------
function resistance() {
  const o = [];
  const spots = [[-40, -40, 10], [0, -46, -8], [-50, -10, 0], [-10, -14, 12], [32, -18, -6], [-38, 20, 8], [4, 16, 0], [40, 14, 10], [-20, 46, -10], [20, 46, 6]];
  const more = [[-44, -52, 0], [-4, -56, 8], [36, -50, -6], [-58, -22, 4], [-18, -26, -8], [22, -24, 6], [56, -18, 0], [-50, 8, 10], [-10, 4, 0], [30, 6, -8], [-36, 36, 4], [4, 34, -6], [44, 36, 8], [-14, 62, 0], [24, 62, 6]];
  const steps = [
    ['Random mutation:', 'one bacterium is resistant', spots.map(([x, y, r], i) => [x, y, r, i === 3 ? 'res' : 'norm'])],
    ['Antibiotic kills', 'the non-resistant ones', spots.map(([x, y, r], i) => [x, y, r, i === 3 ? 'res' : 'killed'])],
    ['Survivor divides,', 'passing on the gene', [[-36, -36, 0], [6, -42, 6], [46, -24, -6], [-48, 0, 4], [-4, -4, -4], [38, 12, 6], [-28, 36, 6], [14, 38, 0]].map(([x, y, r]) => [x, y, r, 'res'])],
    ['Resistant strain:', 'antibiotic no longer works', more.map(([x, y, r]) => [x, y, r, 'res'])],
  ];
  steps.forEach(([a, b, bugs], i) => {
    const y = 120 + i * 215, cy = y + 92;
    o.push(panel(40, y, 820, 184));
    o.push(`<circle cx="76" cy="${y + 34}" r="18" fill="${C.ink}"/>`, t(76, y + 41, String(i + 1), { size: 19, weight: 700, fill: '#fff', anchor: 'middle' }));
    o.push(t(110, cy - 4, a, { size: 22, weight: 700 }), t(110, cy + 28, b, { size: 20 }));
    o.push(`<circle cx="720" cy="${cy}" r="86" fill="${NORM}" stroke="${C.tealDark}" stroke-width="3"/>`);
    for (const [x, yy, r, k] of bugs) o.push(bug(720 + x, cy + yy, r, k));
    if (i < 3) o.push(arrow(450, y + 186, 450, y + 212, { w: 4 }));
  });
  const ly = 120 + 4 * 215 + 16;
  o.push(bug(120, ly, 0, 'norm'), t(146, ly + 7, 'normal', { size: 19 }));
  o.push(bug(360, ly, 0, 'res'), t(386, ly + 7, 'resistant', { size: 19 }));
  o.push(bug(600, ly, 0, 'killed'), t(626, ly + 7, 'killed', { size: 19 }));
  return svg(W, ly + 40, 'How resistance develops', o.join('\n'), 'Natural selection, schematic');
}

// ---------- 05 Only when essential ----------
function essential() {
  const o = [];
  const virus = (cx, cy) => {
    let s = '';
    for (let k = 0; k < 6; k++) { const a = (k * Math.PI) / 3 + Math.PI / 6; s += `<line x1="${cx}" y1="${cy}" x2="${cx + 46 * Math.cos(a)}" y2="${cy + 46 * Math.sin(a)}" stroke="${C.ink}" stroke-width="3"/><circle cx="${cx + 48 * Math.cos(a)}" cy="${cy + 48 * Math.sin(a)}" r="7" fill="${C.olive}" stroke="${C.ink}" stroke-width="2"/>`; }
    const hex = Array.from({ length: 6 }, (_, k) => { const a = (k * Math.PI) / 3; return `${cx + 28 * Math.cos(a)},${cy + 28 * Math.sin(a)}`; }).join(' ');
    return s + `<polygon points="${hex}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>`;
  };
  const rows = [
    ['Cold or flu', 'Caused by a virus', false, (cx, cy) => virus(cx, cy)],
    ['Minor bacterial infection', 'The body clears it itself', false, (cx, cy) => bug(cx - 20, cy - 20, 15, 'norm') + bug(cx + 24, cy - 10, -15, 'norm') + bug(cx - 10, cy + 22, 0, 'norm')],
    ['Serious bacterial infection', 'The body needs help', true, (cx, cy) => [[-36, -30, 10], [0, -34, -6], [36, -24, 15], [-44, 0, 0], [-6, -2, 10], [34, 8, -10], [-30, 32, 6], [8, 30, -8], [44, 36, 4]].map(([x, y, r]) => bug(cx + x, cy + y, r, 'norm')).join('')],
  ];
  rows.forEach(([a, b, ok, icon], i) => {
    const y = 120 + i * 168, cy = y + 74, col = ok ? C.tealDark : C.rust;
    o.push(panel(40, y, 820, 148, '#fff', col));
    o.push(icon(130, cy));
    o.push(t(260, cy - 6, a, { size: 22, weight: 700 }), t(260, cy + 26, b, { size: 20 }));
    o.push(`<circle cx="770" cy="${cy - 22}" r="22" fill="${col}"/>`);
    o.push(ok ? `<path d="M759 ${cy - 22} l8 8 l14 -16" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>`
      : `<path d="M762 ${cy - 30} l16 16 M778 ${cy - 30} l-16 16" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/>`);
    o.push(t(770, cy + 28, ok ? 'Use antibiotic' : 'No antibiotic', { size: 18, weight: 700, fill: col, anchor: 'middle' }));
  });
  const y = 640;
  o.push(t(W / 2, y, 'Using antibiotics only when essential means:', { size: 21, weight: 700, anchor: 'middle' }));
  const boxes = [['Fewer', 'antibiotic uses'], ['Fewer chances to', 'select resistant', 'bacteria'], ['Antibiotics', 'keep working']];
  boxes.forEach((lines, i) => {
    const x = 40 + i * 290;
    o.push(panel(x, y + 24, 240, 120, i === 2 ? C.tealLight : C.cream, i === 2 ? C.tealDark : C.olive));
    lines.forEach((s, k) => o.push(t(x + 120, y + 84 - (lines.length - 1) * 13 + k * 26, s, { size: 19, weight: 700, anchor: 'middle' })));
    if (i < 2) o.push(arrow(x + 244, y + 84, x + 286, y + 84, { w: 4 }));
  });
  return svg(W, y + 176, 'Antibiotics: only when essential', o.join('\n'), 'Schematic, not to scale');
}

export const figures = [
  { name: '07-bacteria-doubling', after: '### Answers', svg: doubling(),
    alt: 'Worked example. A resistant bacterium dividing every 30 minutes makes 8 divisions in 4 hours, so 2 to the power 8 = 256 bacteria. The line graph curves steeply upwards.',
    caption: 'A resistant strain can become common very quickly because numbers double with every division.' },
  { name: '04-resistance-develops', after: '### Antibiotic resistance in bacteria', svg: resistance(),
    alt: 'Four steps of natural selection in bacteria: one of ten bacteria has a random mutation making it resistant; the antibiotic kills the nine non-resistant ones; the survivor divides and passes on the gene; later all bacteria are resistant and the antibiotic no longer works.',
    caption: 'The antibiotic selects resistant bacteria that already exist; it does not cause the mutation.' },
  { name: '05-only-when-essential', after: '## How to approach it', svg: essential(),
    alt: 'A cold or flu (virus) and a minor bacterial infection the body clears itself do not need antibiotics; a serious bacterial infection does. Fewer uses mean fewer chances to select resistant bacteria, so antibiotics keep working.',
    caption: 'Using antibiotics only when essential gives resistant bacteria fewer chances to be selected.' },
];
