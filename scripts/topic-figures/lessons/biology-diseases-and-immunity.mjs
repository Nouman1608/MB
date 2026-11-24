// Board-neutral redraws of three immunity figures first drawn for Cambridge IGCSE 0610 and reused on
// AQA GCSE 8461 and OCR GCSE pages. Same content and counts; the "Extended" tier pill is removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-diseases-and-immunity';
const W = 900;
const NAVY = C.ink, PINK = '#f2d5c8', GOLDF = '#d4b02e';
const line = (x1, y1, x2, y2, color = NAVY, w = 5) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`;
// Y-shaped antibody, stem pointing in direction a (radians), arms open opposite; base at (x, y), scale s
const antibody = (x, y, a, s = 1, w = 5) => {
  const L = 60 * s, arm = 38 * s, spread = 0.62;
  const fx = x + Math.cos(a + Math.PI) * L, fy = y + Math.sin(a + Math.PI) * L;
  const arm1 = [fx + Math.cos(a + Math.PI + spread) * arm, fy + Math.sin(a + Math.PI + spread) * arm];
  const arm2 = [fx + Math.cos(a + Math.PI - spread) * arm, fy + Math.sin(a + Math.PI - spread) * arm];
  return line(x, y, fx, fy, NAVY, w) + line(fx, fy, ...arm1, NAVY, w) + line(fx, fy, ...arm2, NAVY, w);
};
const smallY = (x, y, a) => antibody(x, y, a, 0.36, 3.5);

// ---------- 04 antigens and antibodies ----------
function antigen() {
  const o = [];
  o.push(t(225, 160, 'Fits: antibody binds', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(675, 160, 'No fit: no binding', { size: 22, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(`<ellipse cx="225" cy="262" rx="110" ry="88" fill="${PINK}" stroke="${NAVY}" stroke-width="3"/>`, t(225, 270, 'Pathogen', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(`<ellipse cx="675" cy="262" rx="110" ry="88" fill="${PINK}" stroke="${NAVY}" stroke-width="3"/>`, t(675, 270, 'Pathogen', { size: 22, weight: 700, anchor: 'middle' }));
  // fitted antibody: two arms each cupping a triangular antigen
  o.push(`<path d="M155 345 L180 385 L180 418 L225 455 L270 418 L270 385 L295 345 M205 345 L180 385 M245 345 L270 385 M225 455 V495" fill="none" stroke="${NAVY}" stroke-width="5.5" stroke-linejoin="round" stroke-linecap="round"/>`);
  for (const x of [180, 270]) o.push(`<polygon points="${x - 14},345 ${x + 14},345 ${x},372" fill="${GOLDF}" stroke="${NAVY}" stroke-width="2.5"/>`);
  o.push(path('M208 406 L222 420 L245 394', { stroke: C.tealDark, w: 6 }));
  // non-fitting: rectangular antigens, antibody below, gap
  for (const x of [630, 720]) o.push(`<rect x="${x - 30}" y="340" width="60" height="26" fill="${GOLDF}" stroke="${NAVY}" stroke-width="2.5"/>`);
  o.push(`<path d="M605 380 L630 420 L630 450 L675 487 L720 450 L720 420 L745 380 M655 380 L630 420 M695 380 L720 420 M675 487 V528" fill="none" stroke="${NAVY}" stroke-width="5.5" stroke-linejoin="round" stroke-linecap="round"/>`);
  o.push(path('M661 437 L689 465 M689 437 L661 465', { stroke: C.rust, w: 6 }));
  // key
  o.push(`<polygon points="44,560 74,560 59,586" fill="${GOLDF}" stroke="${NAVY}" stroke-width="2.5"/>`, t(92, 582, 'antigen', { size: 21 }));
  o.push(`<rect x="232" y="558" width="60" height="30" fill="${GOLDF}" stroke="${NAVY}" stroke-width="2.5"/>`, t(310, 582, 'different antigen', { size: 21 }));
  o.push(`<path d="M548 556 L560 574 L572 556 M560 574 V592" fill="none" stroke="${NAVY}" stroke-width="3.5" stroke-linecap="round"/>`, t(594, 582, 'antibody (a protein)', { size: 21 }));
  o.push(`<line x1="30" y1="636" x2="870" y2="636" stroke="#c9d6d4" stroke-width="2.5"/>`);
  o.push(t(W / 2, 690, 'Binding leads to one of two outcomes', { size: 23, weight: 700, anchor: 'middle' }));
  // destroyed directly: burst pathogen with antibodies round it
  const star = Array.from({ length: 16 }, (_, i) => { const r = i % 2 ? 46 : 74, a = (Math.PI / 8) * i - Math.PI / 2; return `${(235 + r * Math.cos(a)).toFixed(1)},${(856 + r * Math.sin(a)).toFixed(1)}`; }).join(' ');
  o.push(`<polygon points="${star}" fill="${PINK}" stroke="${C.rust}" stroke-width="3"/>`);
  o.push(smallY(235, 772, Math.PI / 2), smallY(235, 940, -Math.PI / 2), smallY(152, 856, 0), smallY(318, 856, Math.PI));
  o.push(t(235, 1014, 'Pathogen destroyed', { size: 21, weight: 700, anchor: 'middle' }), t(235, 1046, 'directly', { size: 21, weight: 700, anchor: 'middle' }));
  // marked for a phagocyte
  o.push(`<ellipse cx="715" cy="855" rx="102" ry="78" fill="${C.tealLight}" stroke="${NAVY}" stroke-width="3"/>`, t(722, 864, 'Phagocyte', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(`<circle cx="607" cy="855" r="37" fill="${PINK}" stroke="${NAVY}" stroke-width="3"/>`);
  o.push(smallY(566, 806, Math.PI * 0.25), smallY(548, 855, 0), smallY(566, 904, -Math.PI * 0.25));
  o.push(t(700, 1014, 'Pathogen marked for', { size: 21, weight: 700, anchor: 'middle' }), t(700, 1046, 'destruction by a phagocyte', { size: 21, weight: 700, anchor: 'middle' }));
  return svg(W, 1076, 'Antigens and antibodies', o.join('\n'), 'Complementary shapes');
}

// ---------- 05 vaccination and memory ----------
function vaccination() {
  const o = [];
  const num = (x, y, n) => `<circle cx="${x}" cy="${y}" r="19" fill="${NAVY}"/>` + t(x, y + 7, String(n), { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  const cards = [[30, ['Weakened pathogens', 'or antigens', 'put in the body']], [320, ['Lymphocytes', 'make antibodies']], [610, ['Memory cells give', 'long-term immunity']]];
  cards.forEach(([x, lines], i) => {
    o.push(`<rect x="${x}" y="140" width="260" height="308" rx="16" fill="#ffffff" stroke="${NAVY}" stroke-width="2.5"/>`, num(x + 30, 172, i + 1));
    o.push(tl(x + 130, 364, lines, { size: 21, anchor: 'middle' }, 31));
    if (i < 2) o.push(`<polygon points="${x + 262},282 ${x + 286},295 ${x + 262},308" fill="${NAVY}"/>`);
  });
  // syringe
  o.push(`<g transform="rotate(-33 150 270)"><rect x="92" y="252" width="122" height="38" rx="4" fill="#ffffff" stroke="${NAVY}" stroke-width="4"/><rect x="96" y="256" width="48" height="30" fill="${PINK}"/><line x1="214" y1="271" x2="256" y2="271" stroke="${NAVY}" stroke-width="5"/><line x1="256" y1="249" x2="256" y2="293" stroke="${NAVY}" stroke-width="7" stroke-linecap="round"/><line x1="40" y1="271" x2="92" y2="271" stroke="${NAVY}" stroke-width="4"/></g>`);
  for (const [x, y] of [[84, 268], [116, 270]]) o.push(`<circle cx="${x}" cy="${y}" r="10" fill="${PINK}" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="3 2"/>`);
  // lymphocyte with antibodies
  o.push(`<circle cx="410" cy="264" r="46" fill="#ffffff" stroke="${NAVY}" stroke-width="3.5"/><circle cx="410" cy="264" r="30" fill="${C.teal}" stroke="${NAVY}" stroke-width="2.5"/>`);
  const Y = (x, y) => `<path d="M${x - 15} ${y - 16} L${x} ${y} L${x + 15} ${y - 16} M${x} ${y} V${y + 22}" fill="none" stroke="${NAVY}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>`;
  o.push(Y(500, 228), Y(350, 296), Y(470, 320));
  // memory cell
  o.push(`<circle cx="740" cy="262" r="46" fill="${C.cream}" stroke="${NAVY}" stroke-width="3"/><circle cx="740" cy="262" r="30" fill="${GOLDF}" stroke="${NAVY}" stroke-width="2.5"/>`, t(740, 270, 'M', { size: 21, weight: 700, anchor: 'middle' }));
  // graph
  o.push(t(30, 520, 'Antibody level in blood', { size: 22, weight: 700 }));
  o.push(`<path d="M130 576 V930 H870" fill="none" stroke="${NAVY}" stroke-width="3.5"/>`);
  o.push(`<line x1="563" y1="610" x2="563" y2="930" stroke="${NAVY}" stroke-width="2" stroke-dasharray="4 4"/>`);
  o.push(path('M130 928 H172 C190 860 215 845 240 848 C300 855 360 900 450 915 C500 922 540 924 563 926 C570 860 580 620 602 606 C640 590 700 680 760 730 C800 765 830 790 850 818', { stroke: C.tealDark, w: 4.5 }));
  o.push(t(262, 780, 'First time:', { size: 21, weight: 700 }), t(262, 810, 'slow and small', { size: 21, weight: 700 }));
  o.push(t(546, 670, 'Second time:', { size: 21, weight: 700, anchor: 'end' }), t(546, 702, 'fast and large', { size: 21, weight: 700, anchor: 'end' }));
  o.push(t(136, 966, 'First exposure', { size: 20 }), t(563, 966, 'Same pathogen again', { size: 20, anchor: 'middle' }));
  o.push(t(500, 1018, 'Time', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 1070, 'Sketch graph, not experimental data', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1100, 'Vaccination and memory cells', o.join('\n'), 'Why a second meeting is faster');
}

// ---------- 06 herd immunity ----------
function herd() {
  const o = [];
  const person = (x, y, kind, s = 1) => {
    const fill = { V: C.teal, I: C.rust, N: '#ffffff', B: '#ffffff' }[kind];
    const k = kind === 'B' ? 0.62 : s;
    let g = `<circle cx="${x}" cy="${y - 14 * k}" r="${11 * k}" fill="${fill}" stroke="${NAVY}" stroke-width="3"/>` +
      `<path d="M${x - 21 * k} ${y + 28 * k} V${y + 18 * k} A${21 * k} ${17 * k} 0 0 1 ${x + 21 * k} ${y + 18 * k} V${y + 28 * k} Z" fill="${fill}" stroke="${NAVY}" stroke-width="3" stroke-linejoin="round"/>`;
    if (kind === 'V') g += path(`M${x - 8} ${y + 17} L${x - 2} ${y + 23} L${x + 9} ${y + 12}`, { stroke: NAVY, w: 2.5 });
    if (kind === 'I') g += `<circle cx="${x - 7}" cy="${y + 18}" r="3.2" fill="#ffffff"/><circle cx="${x + 6}" cy="${y + 22}" r="3.2" fill="#ffffff"/>`;
    return g;
  };
  const grid = (y0, rows) => {
    const n = { V: 0, I: 0, N: 0, B: 0 };
    rows.forEach((r, i) => [...r].forEach((k, j) => { n[k]++; o.push(person(100 + j * 100, y0 + i * 78, k)); }));
    return n;
  };
  o.push(t(W / 2, 168, 'Few vaccinated (20%): 31 of 40 ill', { size: 23, weight: 700, anchor: 'middle' }));
  const a = grid(222, ['VIIIIIVN', 'IIIIIIIV', 'IVIIIVII', 'IVIIVIII', 'IIVIIIII']);
  if (a.V !== 8 || a.I !== 31) throw new Error('grid a');
  o.push(t(W / 2, 616, 'Most vaccinated (90%): 2 of 40 ill', { size: 23, weight: 700, anchor: 'middle' }));
  const b = grid(670, ['VVVVVVNV', 'VVIIVVVV', 'VVVVVVVV', 'VVVVVVBV', 'VVVVVVVV']);
  if (b.V !== 36 || b.I !== 2) throw new Error('grid b');
  o.push(person(60, 1078, 'V'), t(104, 1096, 'vaccinated', { size: 21 }), person(290, 1078, 'N'), t(334, 1096, 'not vaccinated', { size: 21 }));
  o.push(person(60, 1140, 'I'), t(104, 1158, 'ill', { size: 21 }), person(290, 1144, 'B'), t(334, 1158, 'baby, too young to be vaccinated', { size: 21 }));
  return svg(W, 1200, 'Vaccination slows the spread', o.join('\n'), 'Schematic: each figure is a person');
}

export const figures = [
  { name: '04-antigen', after: '## B6.3m Making monoclonal antibodies (Higher Tier only)', svg: antigen(),
    alt: 'A pathogen has antigens with specific shapes. An antibody with a complementary shape fits and binds them; an antigen of a different shape does not fit, so there is no binding. Binding leads to direct destruction of the pathogen, or to marking it for destruction by a phagocyte.',
    caption: 'An antibody binds only the antigen whose shape is complementary to it.' },
  { name: '05-vaccination-memory', after: '## Quick revision checklist', svg: vaccination(),
    alt: 'Three steps: weakened pathogens or antigens go in; lymphocytes make antibodies; memory cells give long-term immunity. A sketch graph of antibody level against time shows a slow, small first response and, on meeting the same pathogen again, a fast, large second response.',
    caption: 'Memory cells make the second response faster and larger.' },
  { name: '06-herd-immunity', after: '## 4.3.1.7 Vaccination -- method in steps', svg: herd(),
    alt: 'Two grids of 40 people with one case each. With 20 percent vaccinated, 31 of 40 become ill; with 90 percent vaccinated, 2 of 40 become ill. A baby too young to be vaccinated surrounded by vaccinated people stays well.',
    caption: 'When most people are vaccinated the pathogen finds few people to infect.' },
];
