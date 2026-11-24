// Board-neutral redraw of the GCSE-level gut pH picture used on an AQA GCSE page. Same content;
// the two "Extended" pills (stomach and duodenum) are gone.
import { C, svg, t, arrow, path } from '../style.mjs';

export const slug = 'biology-human-nutrition';
const W = 900;
const STOM = '#f6cfa8', GUT = '#d3e5ec', PEPS = C.rust, TRYP = '#3a7ca5';

const circ = (x, y, r, fill, edge = C.ink, w = 2.5) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${w}"/>`;
const enzyme = (x, y, s = 1) => `<path d="M${x - 14 * s} ${y + 10 * s} A${16 * s} ${16 * s} 0 1 1 ${x + 14 * s} ${y + 10 * s} L${x + 6 * s} ${y + 4 * s} L${x} ${y - 4 * s} L${x - 6 * s} ${y + 4 * s} Z" fill="#6aa86f" stroke="${C.ink}" stroke-width="2.5"/>`;
const scale = (d0, d1, p0, p1) => (v) => p0 + ((v - d0) * (p1 - p0)) / (d1 - d0);
const poly = (pts, o) => path('M' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L'), o);

function gutPh() {
  const out = [];
  // stomach
  out.push(`<path d="M120 150 Q60 220 70 320 Q90 420 200 410 Q290 400 300 320 Q320 250 240 210 Q200 180 210 140 Q170 110 120 150 Z" fill="${STOM}" stroke="${C.ink}" stroke-width="3"/>`);
  [[120, 210], [100, 250], [165, 250], [115, 290], [140, 330], [200, 360]].forEach(([x, y]) => out.push(circ(x, y, 7, '#c0392b', C.ink, 1.5)));
  out.push(`<ellipse cx="200" cy="215" rx="18" ry="12" fill="none" stroke="${C.ink}" stroke-width="2"/><path d="M188 205 L212 225 M212 205 L188 225" stroke="#c0392b" stroke-width="3"/>`);
  out.push(enzyme(255, 295));
  out.push(t(540, 160, 'Stomach: acid', { size: 23, weight: 700 }));
  out.push(circ(552, 195, 7, '#c0392b', C.ink, 1.5), t(570, 202, 'hydrochloric acid (HCl)', { size: 19 }));
  out.push(t(540, 246, 'HCl kills microbes', { size: 21, weight: 700 }), t(540, 274, 'and gives the acid pH', { size: 19, fill: C.muted }));
  out.push(enzyme(560, 330), t(590, 340, 'pepsin works here', { size: 21, weight: 700 }));
  // flow to duodenum
  out.push(arrow(190, 420, 190, 498, { w: 3.5 }));
  out.push(`<path d="M640 370 Q620 395 640 420 Q660 395 640 370 Z" fill="#6aa86f" stroke="${C.ink}" stroke-width="2.5"/>`);
  out.push(arrow(640, 420, 640, 470, { color: '#6aa86f', w: 3, marker: 'ahT' }));
  out.push(t(680, 395, 'Bile', { size: 21, weight: 700 }), t(680, 422, 'neutralises acid', { size: 19, fill: C.muted }));
  out.push(`<rect x="50" y="482" width="800" height="76" rx="38" fill="${GUT}" stroke="${C.ink}" stroke-width="3.5"/>`);
  [140, 330, 750].forEach((x) => out.push(enzyme(x, 522)));
  [[610, 512], [640, 530], [670, 508]].forEach(([x, y]) => out.push(circ(x, y, 6, '#6aa86f', C.ink, 1.5)));
  out.push(t(70, 600, 'Duodenum: alkaline', { size: 21, weight: 700 }), t(70, 628, 'trypsin works here', { size: 19, weight: 700, fill: C.tealDark }));
  // pH graph
  const X = scale(0, 1, 160, 860), Y = scale(0, 1, 940, 690);
  out.push(`<rect x="160" y="690" width="350" height="250" fill="#fbe5d0"/><rect x="510" y="690" width="350" height="250" fill="#d6e6f1"/>`);
  const g = (m, s) => (x) => 0.92 * Math.exp(-((x - m) ** 2) / (2 * s * s)) + 0.02;
  const cv = (f, col) => { const p = []; for (let x = 0; x <= 1.0001; x += 0.005) p.push([X(x), Y(f(x))]); return poly(p, { stroke: col, w: 4 }); };
  out.push(cv(g(0.17, 0.12), PEPS), cv(g(0.83, 0.12), TRYP));
  out.push(`<line x1="160" y1="680" x2="160" y2="940" stroke="${C.ink}" stroke-width="3"/><line x1="160" y1="940" x2="860" y2="940" stroke="${C.ink}" stroke-width="3"/>`);
  out.push(t(X(0.17), 720, 'pepsin', { size: 20, weight: 700, fill: PEPS, anchor: 'middle' }), t(X(0.83), 720, 'trypsin', { size: 20, weight: 700, fill: TRYP, anchor: 'middle' }));
  out.push(t(148, 820, 'activity', { size: 19, weight: 700, anchor: 'end' }));
  out.push(t(170, 972, 'acidic', { size: 19, weight: 700 }), t(510, 972, 'pH', { size: 19, weight: 700, anchor: 'middle' }), t(860, 972, 'alkaline', { size: 19, weight: 700, anchor: 'end' }));
  out.push(t(510, 1008, 'sketch graph, not to scale', { size: 18, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1040, 'Acid, then alkaline', out.join('\n'), 'Each enzyme works best at its own pH');
}

export const figures = [
  { name: '07-gut-ph-enzymes', after: '## Bile', svg: gutPh(),
    alt: 'The stomach is acidic because of hydrochloric acid, which kills microbes and gives the acid pH that pepsin needs. Food then enters the duodenum, where bile neutralises the acid and makes the contents alkaline for trypsin. A sketch graph of enzyme activity against pH shows pepsin most active in acid and trypsin most active in alkali.',
    caption: 'Pepsin works in acid and trypsin in alkali, because bile neutralises the acid leaving the stomach.' },
];
