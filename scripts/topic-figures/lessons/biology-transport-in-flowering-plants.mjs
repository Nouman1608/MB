// Board-neutral redraw of the root hair cell figure used on OxfordAQA IGCSE Biology pages. OxfordAQA IGCSE
// describes osmosis with dilute and concentrated solutions, not water potential, so the cell-sap label now
// reads "more concentrated than soil water". Everything else is unchanged.
import { C, svg, t } from '../style.mjs';

export const slug = 'biology-transport-in-flowering-plants';
const W = 900;
const NAVY = '#1e2a44', WALL = '#3f7f3a', SOIL = '#e6d6b8', GRAIN = '#b8a273', MITO = '#b8602e', WATER = '#3f7fb0';
const mk = (id, col) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="24" markerHeight="24" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${col}"/></marker>`;
const markers = `<defs>${mk('aW', WATER)}${mk('aO', C.olive)}</defs>`;
const ln = (x1, y1, x2, y2, col = NAVY, w = 2.5, m = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${w}"${m ? ` marker-end="url(#${m})"` : ''}/>`;

function rootHair() {
  const o = [markers];
  o.push(`<rect x="0" y="480" width="900" height="520" fill="${SOIL}"/>`);
  for (const [x, y, r] of [[120, 530, 34], [330, 540, 26], [250, 698, 30], [90, 790, 38], [300, 860, 32], [180, 928, 30], [700, 650, 32], [690, 820, 36], [830, 800, 28], [600, 918, 30], [820, 900, 30]]) o.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="${GRAIN}" stroke="${NAVY}" stroke-width="2.5"/>`);
  // cortex cell
  o.push(`<rect x="340" y="110" width="220" height="92" fill="#e8f1e4" stroke="${WALL}" stroke-width="3"/>`);
  o.push(t(450, 167, 'Root cortex cell', { size: 21, weight: 700, anchor: 'middle' }));
  // root hair cell outline
  const outer = 'M340 204 H560 V398 L500 456 L490 470 L470 850 C468 870 455 878 445 878 C432 878 420 870 418 850 L400 470 L390 456 L340 398 Z';
  o.push(`<path d="${outer}" fill="${C.cream}" stroke="${WALL}" stroke-width="7" stroke-linejoin="round"/>`);
  o.push(`<path d="M380 300 H518 V400 L484 440 L478 460 L466 838 H432 L420 460 L416 440 L380 400 Z" fill="#d4e5ec" stroke="${NAVY}" stroke-width="2.5" stroke-linejoin="round"/>`);
  o.push(`<circle cx="450" cy="250" r="30" fill="#c8b3e0" stroke="${NAVY}" stroke-width="2.5"/>`);
  for (const [x, y] of [[540, 320], [540, 370], [360, 380]]) o.push(`<ellipse cx="${x}" cy="${y}" rx="11" ry="21" fill="${MITO}" stroke="${NAVY}" stroke-width="2"/>`);
  // labels
  o.push(ln(482, 250, 580, 250), t(586, 257, 'Nucleus', { size: 21, weight: 700 }));
  o.push(ln(230, 300, 404, 336), t(20, 268, 'Cell sap: more', { size: 21, weight: 700 }), t(20, 296, 'concentrated than', { size: 21, weight: 700 }), t(20, 324, 'the soil water', { size: 21, weight: 700 }));
  o.push(ln(552, 340, 580, 336), t(586, 321, 'Many mitochondria:', { size: 21, weight: 700 }), t(586, 349, 'energy for active', { size: 21, weight: 700 }), t(586, 377, 'transport', { size: 21, weight: 700 }));
  o.push(ln(250, 432, 340, 400), t(20, 428, 'Thin cell wall:', { size: 21, weight: 700 }), t(20, 456, 'short path for water', { size: 21, weight: 700 }));
  o.push(ln(494, 560, 566, 546), t(570, 534, 'Long, thin hair:', { size: 21, weight: 700 }), t(570, 562, 'large surface area', { size: 21, weight: 700 }));
  o.push(t(30, 600, 'Water in by', { size: 21, weight: 700 }), t(30, 628, 'osmosis', { size: 21, weight: 700 }), ln(238, 640, 400, 640, WATER, 4, 'aW'));
  o.push(t(640, 706, 'Ions in by', { size: 21, weight: 700 }), t(640, 734, 'active transport', { size: 21, weight: 700 }), ln(640, 748, 494, 748, C.olive, 4, 'aO'));
  return svg(W, 1000, 'A root hair cell', o.join('\n'), 'Built to take in water and ions');
}

export const figures = [
  { name: '07-root-hair-cell', after: '## Key terms', svg: rootHair(),
    alt: 'A root hair cell with a long thin hair among soil particles. Labels: thin cell wall, cell sap more concentrated than the soil water, many mitochondria for active transport, nucleus. Arrows show water entering by osmosis and ions by active transport.',
    caption: 'Each feature of a root hair cell helps uptake of water and ions.' },
];
