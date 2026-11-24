// Board-neutral redraws of two ecosystem figures first drawn for Cambridge IGCSE 0610 and reused on OCR
// GCSE and AQA GCSE 8461 pages. Same steps, numbers and fish; the "Extended" tier pill is removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-human-influences-on-ecosystems';
const W = 900;
const NAVY = C.ink, WATER = '#d3e5ec', GOLDF = '#d4b02e';
const sub = (s) => `<tspan baseline-shift="sub" font-size="70%">${s}</tspan>`;
const sup = (s) => `<tspan baseline-shift="super" font-size="68%">${s}</tspan>`;

// ---------- 04 eutrophication ----------
function eutrophication() {
  const o = [];
  const num = (x, y, n, fill = NAVY) => `<circle cx="${x}" cy="${y}" r="19" fill="${fill}"/>` + t(x, y + 7, String(n), { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  const h = 150, gap = 22, y0 = 120;
  const steps = [
    ['More nitrate and other ions', 'from fertiliser or sewage', C.muted],
    ['Producers (algae) grow fast', '', C.muted],
    ['Producers die:', 'more decomposition', C.muted],
    ['Decomposers respire aerobically', 'Key link: they use up the oxygen', C.rust],
    ['Dissolved oxygen falls', '9.0 to 2.7 mg/dm³', C.muted],
    ['Fish and other animals die', 'they need dissolved oxygen', C.muted],
  ];
  steps.forEach(([a, b, bc], i) => {
    const y = y0 + i * (h + gap);
    o.push(`<rect x="30" y="${y}" width="370" height="${h}" rx="14" fill="${WATER}" stroke="${NAVY}" stroke-width="2.5"/>`);
    if (i < 5) o.push(arrow(215, y + h + 2, 215, y + h + gap - 2, { w: 2.5 }));
    o.push(num(432, y + 42, i + 1, i === 3 ? C.rust : NAVY), t(468, y + 49, a, { size: 23, weight: 700 }));
    if (b) o.push(t(468, y + 89, b, { size: 20, weight: i === 3 ? 700 : 400, fill: bc }));
    if (i === 4) o.push(t(468, y + 121, '= 70 % decrease', { size: 20, weight: 700, fill: C.rust }));
  });
  const Y = (i) => y0 + i * (h + gap);
  // 1 ions
  o.push(t(112, Y(0) + 34, `NO${sub('3')}${sup('−')}`, { size: 20, weight: 700 }));
  for (const [x, y] of [[140, 50], [250, 45], [360, 55], [90, 100], [190, 80], [300, 90], [220, 110], [330, 118]]) o.push(`<circle cx="${x}" cy="${Y(0) + y}" r="11" fill="${GOLDF}" stroke="${C.olive}" stroke-width="2"/>`);
  // 2 algae
  o.push(`<line x1="40" y1="${Y(1) + 40}" x2="390" y2="${Y(1) + 40}" stroke="${NAVY}" stroke-width="2.5" stroke-dasharray="5 6"/>`);
  for (const [x, y] of [[117, 52], [78, 80], [136, 66], [155, 80], [98, 95], [117, 108], [60, 122], [193, 52], [212, 70], [174, 115], [212, 88], [231, 100], [250, 60], [269, 73], [288, 88], [250, 115], [327, 60], [346, 73], [307, 100], [365, 108], [307, 122]]) o.push(`<circle cx="${x}" cy="${Y(1) + y}" r="14" fill="${C.tealDark}" stroke="${NAVY}" stroke-width="2"/>`);
  // 3 dead producers
  for (const [x, y] of [[90, 35], [170, 55], [260, 40], [340, 62], [130, 95], [220, 100], [310, 108]]) o.push(`<circle cx="${x}" cy="${Y(2) + y}" r="14" fill="#cfd6d6" stroke="#5a6470" stroke-width="2.5"/>`);
  o.push(`<line x1="60" y1="${Y(2) + 137}" x2="372" y2="${Y(2) + 137}" stroke="${C.olive}" stroke-width="5" stroke-linecap="round"/>`);
  // 4 decomposers using oxygen
  o.push(t(155, Y(3) + 36, `O${sub('2')}`, { size: 20, weight: 700, anchor: 'middle' }));
  for (const x of [100, 195, 290]) o.push(`<line x1="${x + 10}" y1="${Y(3) + 60}" x2="${x}" y2="${Y(3) + 92}" stroke="${NAVY}" stroke-width="2.5"/><circle cx="${x + 10}" cy="${Y(3) + 58}" r="10" fill="#ffffff" stroke="${NAVY}" stroke-width="2.5"/><rect x="${x - 30}" y="${Y(3) + 96}" width="60" height="30" rx="15" fill="${C.rust}" stroke="${NAVY}" stroke-width="2.5"/>`);
  o.push(`<line x1="60" y1="${Y(3) + 137}" x2="372" y2="${Y(3) + 137}" stroke="${C.olive}" stroke-width="5" stroke-linecap="round"/>`);
  // 5 bars
  const base = Y(4) + 108;
  o.push(`<rect x="100" y="${base - 70}" width="70" height="70" fill="#6fa9a1" stroke="${NAVY}" stroke-width="2.5"/><rect x="250" y="${base - 21}" width="70" height="21" fill="#6fa9a1" stroke="${NAVY}" stroke-width="2.5"/>`);
  o.push(`<line x1="60" y1="${base}" x2="372" y2="${base}" stroke="${NAVY}" stroke-width="3"/>`);
  o.push(t(135, base - 80, '9.0', { size: 20, weight: 700, anchor: 'middle' }), t(285, base - 31, '2.7', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(t(135, base + 28, 'above', { size: 20, anchor: 'middle' }), t(285, base + 28, '400 m on', { size: 20, anchor: 'middle' }));
  // 6 dead fish
  o.push(`<line x1="40" y1="${Y(5) + 38}" x2="390" y2="${Y(5) + 38}" stroke="${NAVY}" stroke-width="2.5" stroke-dasharray="5 6"/>`);
  const fish = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="38" ry="18" fill="#cfd6d6" stroke="${NAVY}" stroke-width="2.5"/><polygon points="${x - 38},${y} ${x - 64},${y - 16} ${x - 64},${y + 16}" fill="#cfd6d6" stroke="${NAVY}" stroke-width="2.5"/>` + path(`M${x + 16} ${y - 9} L${x + 26} ${y + 1} M${x + 26} ${y - 9} L${x + 16} ${y + 1}`, { stroke: NAVY, w: 2.5 });
  o.push(fish(140, Y(5) + 72), fish(300, Y(5) + 115));
  return svg(W, Y(5) + h + 30, 'Eutrophication in six steps', o.join('\n'), 'Schematic');
}

// ---------- 07 fish net mesh ----------
function fishNet() {
  const o = [];
  const adult = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="60" ry="42" fill="${GOLDF}" stroke="${NAVY}" stroke-width="2.5"/><polygon points="${x - 58},${y} ${x - 80},${y - 34} ${x - 80},${y + 34}" fill="${GOLDF}" stroke="${NAVY}" stroke-width="2.5"/><circle cx="${x + 38}" cy="${y - 6}" r="4.5" fill="${NAVY}"/>`;
  const young = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="36" ry="22" fill="${C.cream}" stroke="${NAVY}" stroke-width="2.5"/><polygon points="${x - 34},${y} ${x - 54},${y - 17} ${x - 54},${y + 17}" fill="${C.cream}" stroke="${NAVY}" stroke-width="2.5"/><circle cx="${x + 18}" cy="${y - 4}" r="4.5" fill="${NAVY}"/>`;
  const bar = (x, y) => `<rect x="${x}" y="${y}" width="48" height="15" rx="6" fill="#3b4558"/>`;
  o.push(`<rect x="30" y="134" width="410" height="410" rx="14" fill="${WATER}" stroke="${NAVY}" stroke-width="2.5"/>`, `<rect x="460" y="134" width="410" height="410" rx="14" fill="${WATER}" stroke="${NAVY}" stroke-width="2.5"/>`);
  o.push(t(50, 172, 'Small mesh', { size: 24, weight: 700 }), t(480, 172, 'Large mesh', { size: 24, weight: 700 }));
  o.push(t(310, 186, 'net', { size: 20, weight: 700, anchor: 'middle' }), t(740, 186, 'net', { size: 20, weight: 700, anchor: 'middle' }));
  for (const y of [194, 238, 282, 326, 370, 414, 458]) o.push(bar(286, y));
  o.push(adult(222, 246), young(242, 316), young(242, 394), adult(222, 470));
  for (const y of [194, 272, 350, 428]) o.push(bar(716, y));
  o.push(adult(652, 246), adult(652, 470));
  o.push(`<line x1="580" y1="316" x2="756" y2="316" stroke="${NAVY}" stroke-width="2.5" stroke-dasharray="4 6"/><line x1="580" y1="394" x2="756" y2="394" stroke="${NAVY}" stroke-width="2.5" stroke-dasharray="4 6"/>`);
  o.push(young(810, 316), young(810, 394));
  o.push(t(235, 586, 'Young fish caught too', { size: 24, weight: 700, fill: C.rust, anchor: 'middle' }), t(665, 586, 'Young fish escape', { size: 24, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(adult(120, 666), t(206, 674, 'adult', { size: 21 }), young(440, 666), t(494, 674, 'young fish', { size: 21 }));
  o.push(`<rect x="30" y="736" width="840" height="100" rx="14" fill="#ffffff" stroke="${C.tealDark}" stroke-width="3"/>`);
  o.push(t(W / 2, 776, 'Larger mesh: young fish escape,', { size: 24, weight: 700, anchor: 'middle' }), t(W / 2, 812, 'so they survive to breed', { size: 24, weight: 700, anchor: 'middle' }));
  return svg(W, 866, 'Net mesh size', o.join('\n'), 'Schematic: net seen from the side');
}

export const figures = [
  { name: '04-eutrophication-steps', after: '### Fertilisers', svg: eutrophication(),
    alt: 'Six linked steps with pictures: more nitrate and ions, fast producer growth, producers die with more decomposition, decomposers respire aerobically using up oxygen (the key link), dissolved oxygen falls (9.0 to 2.7 mg per dm3, a 70 percent decrease), and fish die.',
    caption: 'It is the decomposers aerobic respiration, not the algae, that uses up the oxygen.' },
  { name: '07-fish-net-mesh-size', after: '## Food production (4.7.5)', svg: fishNet(),
    alt: 'Two side views of a net. With a small mesh both young and adult fish are caught. With a large mesh the gaps are bigger than young fish but smaller than adults, so young fish escape and survive to breed.',
    caption: 'A larger mesh lets young fish escape so they survive to breed.' },
];
