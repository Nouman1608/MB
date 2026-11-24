// Board-neutral redraws of two nuclear physics figures first drawn for Cambridge IGCSE 0625 and reused on
// AQA GCSE 8463 and OCR GCSE pages. Same paths, nuclides and sums; the "EXTENDED" tier badge is removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'physics-nuclear-physics';
const W = 900;
const NAVY = C.ink;
const head = (x2, y2, x1, y1, color) => { const a = Math.atan2(y2 - y1, x2 - x1), L = 30, h = 13; const bx = x2 - L * Math.cos(a), by = y2 - L * Math.sin(a); return `<polygon points="${x2},${y2} ${bx - h * Math.sin(a)},${by + h * Math.cos(a)} ${bx + h * Math.sin(a)},${by - h * Math.cos(a)}" fill="${color}"/>`; };
const curve = (d, color) => `<path d="${d}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>`;

function scattering() {
  const o = [];
  o.push(`<circle cx="470" cy="420" r="215" fill="#f4edd2" stroke="#e3d08a" stroke-width="2.5" stroke-dasharray="9 6"/>`);
  o.push(t(500, 343, 'Mostly empty space', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(`<circle cx="470" cy="420" r="9" fill="${C.rust}" stroke="${NAVY}" stroke-width="2.5"/>`);
  o.push(t(492, 496, 'Gold nucleus', { size: 22, weight: 700 }), t(492, 526, 'tiny, positive, heavy', { size: 19, fill: C.muted }));
  // most pass straight (top and bottom), a few deflected, very few bounce back
  o.push(curve('M60 162 C260 160 480 140 676 100', C.tealDark), head(706, 94, 676, 100, C.tealDark));
  o.push(curve('M60 300 C200 300 330 300 420 280 C520 258 640 180 785 112', C.rust), head(810, 96, 785, 112, C.rust));
  o.push(curve('M60 425 C220 425 330 425 400 428 C420 432 400 440 340 458 L90 520', C.rust), head(60, 528, 90, 520, C.rust));
  o.push(curve('M60 678 C260 680 440 695 600 728', C.tealDark), head(630, 735, 600, 728, C.tealDark));
  o.push(t(60, 138, 'Alpha particles', { size: 21, weight: 700, fill: C.rust }));
  o.push(t(60, 354, 'A few are deflected', { size: 21, weight: 700, fill: C.rust }));
  o.push(t(60, 582, 'Very few bounce back', { size: 21, weight: 700, fill: C.rust }));
  o.push(t(60, 642, 'Most pass straight through', { size: 21, weight: 700, fill: C.tealDark }));
  return svg(W, 770, 'Alpha scattering: the nucleus', o.join('\n'));
}

const nuclide = (x, y, A, Z, sym, col = NAVY) => t(x, y - 17, A, { size: 20, weight: 700, fill: col, anchor: 'end' }) + t(x, y + 3, Z, { size: 20, weight: 700, fill: col, anchor: 'end' }) + t(x + 4, y + 4, sym, { size: 34, weight: 700, fill: col });
function decay() {
  const o = [];
  const big = (cx, cy, s) => `<circle cx="${cx}" cy="${cy}" r="76" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3.5"/>` + t(cx, cy + 13, s, { size: 36, weight: 700, fill: C.tealDark, anchor: 'middle' });
  const row = (y, p, d, parent, daughter, emitted, el, elCol, eqTop, eqBot) => {
    o.push(big(120, y, p), arrow(204, y, 288, y, { w: 5 }), big(400, y, d), t(530, y + 12, '+', { size: 34, weight: 700, anchor: 'middle' }));
    o.push(t(120, y + 112, 'parent', { size: 20, fill: C.muted, anchor: 'middle' }), t(400, y + 112, 'new element', { size: 20, fill: C.muted, anchor: 'middle' }), t(650, y + 112, el, { size: 20, weight: 700, fill: elCol, anchor: 'middle' }));
    o.push(parent(y + 172), daughter(y + 172), emitted(y + 172));
    o.push(t(W / 2, y + 238, eqTop, { size: 22, weight: 700, anchor: 'middle' }), t(W / 2, y + 276, eqBot, { size: 22, weight: 700, anchor: 'middle' }));
  };
  const y1 = 196;
  row(y1, 'Ra', 'Rn', (y) => nuclide(116, y, '226', '88', 'Ra'), (y) => nuclide(396, y, '222', '86', 'Rn'), (y) => nuclide(634, y, '4', '2', 'He'), 'alpha', C.rust, 'top: 226 = 222 + 4', 'bottom: 88 = 86 + 2');
  // alpha particle: 2 protons, 2 neutrons
  o.push(`<circle cx="636" cy="${y1 + 12}" r="13" fill="#9aa7c7" stroke="${NAVY}" stroke-width="2"/><circle cx="665" cy="${y1 + 20}" r="13" fill="#9aa7c7" stroke="${NAVY}" stroke-width="2"/>`);
  for (const [x, yy] of [[651, y1 - 22], [660, y1 - 2]]) o.push(`<circle cx="${x}" cy="${yy}" r="13" fill="${C.rust}" stroke="${NAVY}" stroke-width="2"/>` + t(x, yy + 7, '+', { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' }));
  o.push(arrow(704, y1, 846, y1, { color: C.rust, w: 4, marker: 'ahR' }));
  o.push(`<line x1="40" y1="${y1 + 340}" x2="860" y2="${y1 + 340}" stroke="#c9d6d4" stroke-width="2.5"/>`);
  const y2 = y1 + 460;
  row(y2, 'C', 'N', (y) => nuclide(116, y, '14', '6', 'C'), (y) => nuclide(396, y, '14', '7', 'N'), (y) => nuclide(640, y, '0', '−1', 'e'), 'beta', C.tealDark, 'top: 14 = 14 + 0', 'bottom: 6 = 7 + (−1)');
  o.push(`<circle cx="650" cy="${y2}" r="18" fill="${C.tealDark}" stroke="${NAVY}" stroke-width="2"/>` + t(650, y2 + 8, '−', { size: 26, weight: 700, fill: '#ffffff', anchor: 'middle' }));
  o.push(arrow(694, y2, 846, y2, { color: C.tealDark, w: 4, marker: 'ahT' }));
  o.push(t(W / 2, y2 + 352, 'α: A falls by 4, Z by 2. β: A same, Z up by 1.', { size: 20, fill: C.muted, anchor: 'middle' }));
  return svg(W, y2 + 390, 'Decay equations must balance', o.join('\n'));
}

export const figures = [
  { name: '02-alpha-scattering', after: '## P1.1a: the atomic model timeline', svg: scattering(),
    alt: 'Alpha particles approach a gold atom. Those far from the tiny positive nucleus go almost straight on, a few passing closer are deflected, and a very few heading nearly straight at it bounce back. This shows the atom is mostly empty with a small, positive, dense nucleus.',
    caption: 'Each alpha-scattering observation supports one feature of the nuclear atom.' },
  { name: '04-decay-equations', after: '### Nuclear equations', svg: decay(),
    alt: 'Radium-226 decays by alpha emission to radon-222 plus a helium-4 nucleus: 226 = 222 + 4 and 88 = 86 + 2. Carbon-14 decays by beta emission to nitrogen-14 plus an electron: 14 = 14 + 0 and 6 = 7 + (-1).',
    caption: 'In a decay equation the top numbers balance and the bottom numbers balance.' },
];
