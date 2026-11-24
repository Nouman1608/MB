// Board-neutral redraws of four A Level immunity / disease pictures first drawn for Cambridge 9700 and
// reused on AQA, OCR, Edexcel IAL and OxfordAQA pages. Same content; the board-coverage footnotes
// ("OCR only", "OxfordAQA only", spec-point numbers, "Cambridge 9700 requires all four") are gone.
import { C, svg, panel, t, tl, path } from '../style.mjs';

export const slug = 'biology-immunity';
const W = 900;
const TEAL = '#6fa9a2', CELL = '#dce9e7', NUC = '#b5d3cf', CREAM = '#f2e7b8', GOLD = '#d4b02e', RUST = '#b5602e', PINK = '#ead1c4';

function fa(x1, y1, x2, y2, color = C.ink, w = 3.5, head = 20) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
  const bx = x2 - ux * head, by = y2 - uy * head, hw = head * 0.6;
  return `<line x1="${x1}" y1="${y1}" x2="${bx}" y2="${by}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>` +
    `<polygon points="${x2},${y2} ${bx - uy * hw},${by + ux * hw} ${bx + uy * hw},${by - ux * hw}" fill="${color}"/>`;
}
const num = (cx, cy, n, r = 20) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${GOLD}" stroke="${C.ink}" stroke-width="2.5"/>` + t(cx, cy + 7, String(n), { size: 20, weight: 700, anchor: 'middle' });
const sub0 = (pre, post = '') => `${pre}R<tspan dy="5" font-size="70%">0</tspan><tspan dy="-5"${post.startsWith(' ') ? ' dx="5"' : ''}>${post.trimStart()}</tspan>`;

// ---------- 01 Bacterium vs virus ----------
function bactVirus() {
  const o = [];
  o.push(t(40, 150, 'Bacterium: a living cell', { size: 23, weight: 700, fill: C.tealDark }));
  o.push(`<rect x="90" y="176" width="400" height="190" rx="95" fill="${NUC}" stroke="${C.ink}" stroke-width="5"/>`);
  o.push(`<rect x="104" y="190" width="372" height="162" rx="81" fill="${CELL}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(path('M206 236 C230 214 300 222 318 246 C334 270 318 300 288 304 C258 306 240 290 214 292 C194 294 190 252 206 236 Z', { stroke: C.ink, w: 4 }));
  o.push(`<circle cx="398" cy="296" r="19" fill="none" stroke="${RUST}" stroke-width="4"/>`);
  for (const [x, y] of [[364, 218], [420, 226], [170, 296], [154, 318], [186, 330], [230, 335], [330, 325]]) o.push(`<circle cx="${x}" cy="${y}" r="6" fill="${GOLD}" stroke="${C.ink}" stroke-width="1.5"/>`);
  const ld = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="2"/>`;
  o.push(ld(460, 198, 552, 208), t(560, 214, 'Cell wall', { size: 21, weight: 700 }), t(560, 244, 'peptidoglycan', { size: 19, fill: C.muted }));
  o.push(ld(348, 274, 552, 268), t(560, 274, 'Circular DNA', { size: 21, weight: 700 }), t(560, 304, 'free in cytoplasm', { size: 19, fill: C.muted }));
  o.push(ld(414, 304, 552, 350), t(560, 358, 'Plasmid', { size: 21, weight: 700 }));
  o.push(ld(170, 324, 170, 390), t(66, 418, 'Ribosomes (70S)', { size: 21, weight: 700 }));
  o.push(t(40, 520, 'HIV: not a cell, no cytoplasm', { size: 23, weight: 700, fill: C.tealDark }));
  const cx = 290, cy = 740, R = 130;
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * 2 * Math.PI - Math.PI / 2 + 0.2;
    const x1 = cx + R * Math.cos(a), y1 = cy + R * Math.sin(a), x2 = cx + (R + 34) * Math.cos(a), y2 = cy + (R + 34) * Math.sin(a);
    o.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${RUST}" stroke-width="4"/><circle cx="${x2}" cy="${y2}" r="8" fill="${RUST}" stroke="${C.ink}" stroke-width="1.5"/>`);
  }
  o.push(`<circle cx="${cx}" cy="${cy}" r="${R}" fill="${CELL}" stroke="${C.ink}" stroke-width="5"/><circle cx="${cx}" cy="${cy}" r="${R - 14}" fill="none" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(`<polygon points="220,668 360,688 322,808 260,808" fill="#ffffff" stroke="${C.ink}" stroke-width="4"/>`);
  o.push(path('M252 698 C236 726 266 750 246 782', { stroke: C.tealDark, w: 4 }), path('M276 694 C260 722 290 746 270 778', { stroke: C.tealDark, w: 4 }));
  for (const [x, y] of [[310, 708], [328, 735], [310, 762]]) o.push(`<circle cx="${x}" cy="${y}" r="9" fill="${GOLD}" stroke="${C.ink}" stroke-width="2"/>`);
  const ang = (-1 / 14) * 2 * Math.PI + 0.2; // a glycoprotein on the upper right
  o.push(ld(396, 610, 552, 590), t(560, 596, 'Glycoproteins', { size: 21, weight: 700 }), t(560, 626, 'bind host receptors', { size: 19, fill: C.muted }));
  o.push(ld(404, 668, 552, 684), t(560, 690, 'Envelope', { size: 21, weight: 700 }), t(560, 720, 'from the host membrane', { size: 19, fill: C.muted }));
  o.push(ld(336, 735, 552, 762), t(560, 768, 'Enzymes in capsid', { size: 21, weight: 700 }), t(560, 798, 'reverse transcriptase', { size: 19, fill: C.muted }));
  o.push(ld(326, 798, 552, 842), t(560, 848, 'Capsid (protein coat)', { size: 21, weight: 700 }));
  o.push(ld(262, 776, 552, 902), t(560, 908, 'RNA, two copies', { size: 21, weight: 700 }));
  o.push(t(40, 1000, 'HIV is about 120 nm across; the bacterium is about 17 times longer.', { size: 19, fill: C.muted }));
  o.push(t(40, 1030, 'Not to scale.', { size: 19, fill: C.muted }));
  return svg(W, 1060, 'Bacterium or virus?', o.join('\n'), 'Both can cause disease. Only one is a cell.');
}

// ---------- 02 Four diseases ----------
function person(x, y) { return `<circle cx="${x}" cy="${y}" r="20" fill="${CELL}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${x - 30} ${y + 100} V${y + 50} a30 26 0 0 1 60 0 V${y + 100} Z" fill="${CELL}" stroke="${C.ink}" stroke-width="2.5"/>`; }
function drop(x, y, fill = RUST) { return `<path d="M${x} ${y - 14} C${x + 4} ${y - 4} ${x + 10} ${y + 2} ${x + 10} ${y + 8} a10 10 0 0 1 -20 0 C${x - 10} ${y + 2} ${x - 4} ${y - 4} ${x} ${y - 14} Z" fill="${fill}" stroke="${C.ink}" stroke-width="1.5"/>`; }
function fourDiseases() {
  const o = [];
  const box = (x, y, head, sci, kind, kfill, route) => {
    o.push(panel(x, y, 405, 490, '#ffffff', C.ink));
    o.push(t(x + 202, y + 50, head, { size: 28, weight: 700, anchor: 'middle' }));
    o.push(t(x + 202, y + 88, sci, { size: 20, fill: C.muted, anchor: 'middle', italic: true }));
    const w = kind.length * 12 + 40;
    o.push(`<rect x="${x + 202 - w / 2}" y="${y + 108}" width="${w}" height="36" rx="18" fill="${kfill}" stroke="${C.ink}" stroke-width="2"/>`, t(x + 202, y + 133, kind, { size: 20, weight: 700, anchor: 'middle' }));
    o.push(tl(x + 202, y + 410, route, { size: 21, weight: 700, anchor: 'middle' }, 36));
  };
  box(30, 100, 'Cholera', 'Vibrio cholerae', 'Bacterium', NUC, ['Contaminated water', 'or food (faecal-oral)']);
  box(465, 100, 'Malaria', 'Plasmodium', 'Protoctist', CREAM, ['Bite of a female', 'Anopheles mosquito (vector)']);
  box(30, 620, 'Tuberculosis (TB)', 'Mycobacterium tuberculosis', 'Bacterium', NUC, ['Droplets breathed in', 'from coughs and sneezes']);
  box(465, 620, 'HIV/AIDS', 'Human immunodeficiency virus', 'Virus', PINK, ['Body fluids: sex, blood,', 'mother to child']);
  // cholera: glass of water with bacteria
  o.push(`<path d="M82 320 L162 320 L152 420 L92 420 Z" fill="#d6e6ee" stroke="${C.ink}" stroke-width="3"/>`);
  for (const [x, y, r] of [[114, 362, 25], [132, 390, -20], [104, 398, 0]]) o.push(`<rect x="${x - 13}" y="${y - 6}" width="26" height="12" rx="6" fill="${RUST}" stroke="${C.ink}" stroke-width="1.5" transform="rotate(${r} ${x} ${y})"/>`);
  o.push(fa(180, 370, 252, 370, C.ink, 3.5, 20));
  o.push(person(318, 330));
  // malaria: mosquito
  o.push(`<ellipse cx="565" cy="318" rx="42" ry="14" fill="${CELL}" stroke="${C.ink}" stroke-width="2.5" transform="rotate(-20 565 318)"/>`);
  o.push(`<ellipse cx="575" cy="350" rx="52" ry="18" fill="#3b475e" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<circle cx="628" cy="348" r="15" fill="#3b475e" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<line x1="640" y1="358" x2="672" y2="382" stroke="${C.ink}" stroke-width="3"/>`);
  for (const x of [565, 585, 605]) o.push(`<line x1="${x}" y1="366" x2="${x - 10}" y2="404" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(drop(672, 400));
  o.push(person(750, 330));
  // TB: droplets between two people
  o.push(person(110, 850), person(330, 850));
  for (const [x, y, r] of [[170, 862, 5], [184, 852, 6], [200, 838, 6], [222, 840, 5], [226, 850, 6], [236, 856, 6], [246, 864, 6], [210, 876, 6], [192, 852, 4]]) o.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="${RUST}" stroke="${C.ink}" stroke-width="1.2"/>`);
  o.push(fa(190, 920, 272, 920, C.ink, 3.5, 20));
  // HIV: fluid from one person to another
  o.push(person(550, 850), person(770, 850));
  o.push(fa(606, 880, 726, 880, C.ink, 3.5, 22));
  o.push(drop(666, 922));
  return svg(W, 1140, 'Four diseases, four routes', o.join('\n'));
}

// ---------- 07 HIV replication ----------
function virion(cx, cy, r = 36) {
  let s = '';
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * 2 * Math.PI + 0.3;
    const x1 = cx + r * Math.cos(a), y1 = cy + r * Math.sin(a), x2 = cx + (r + 18) * Math.cos(a), y2 = cy + (r + 18) * Math.sin(a);
    s += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${RUST}" stroke-width="3"/><circle cx="${x2}" cy="${y2}" r="5" fill="${RUST}" stroke="${C.ink}" stroke-width="1.2"/>`;
  }
  s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${CREAM}" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<polygon points="${cx - r * 0.5},${cy - r * 0.4} ${cx + r * 0.5},${cy - r * 0.48} ${cx + r * 0.3},${cy + r * 0.45} ${cx - r * 0.3},${cy + r * 0.45}" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
  return s;
}
const capsid = (cx, cy, s = 1) => `<polygon points="${cx - 36 * s},${cy - 28 * s} ${cx + 36 * s},${cy - 34 * s} ${cx + 22 * s},${cy + 30 * s} ${cx - 18 * s},${cy + 30 * s}" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>` +
  `<path d="M${cx - 20 * s} ${cy - 4 * s} q${5 * s} ${-8 * s} ${10 * s} 0 t${10 * s} 0 t${10 * s} 0" fill="none" stroke="${C.tealDark}" stroke-width="2.5"/><circle cx="${cx + 14 * s}" cy="${cy + 4 * s}" r="${5 * s}" fill="${GOLD}" stroke="${C.ink}" stroke-width="1.2"/>`;
function hiv() {
  const o = [];
  const cx = 450, cy = 570, R = 300;
  o.push(`<circle cx="${cx}" cy="${cy}" r="${R}" fill="${CELL}" stroke="${C.ink}" stroke-width="5"/>`);
  // 1 attach
  o.push(virion(450, 195, 38), num(535, 195, 1));
  for (const x of [414, 450, 486]) o.push(`<line x1="${x}" y1="${cy - R + 4}" x2="${x}" y2="${cy - R - 20}" stroke="${C.olive}" stroke-width="4"/><circle cx="${x}" cy="${cy - R - 22}" r="5" fill="${GOLD}" stroke="${C.ink}" stroke-width="1.2"/>`);
  o.push(fa(450, 260, 450, 300, C.ink, 3, 16));
  // 2 capsid enters
  o.push(capsid(450, 350), num(515, 330, 2));
  // 3 reverse transcription
  o.push(num(250, 420, 3));
  o.push(path('M214 468 q9 -14 18 0 t18 0 t18 0 t18 0', { stroke: C.tealDark, w: 4 }));
  o.push(fa(300, 468, 340, 468, C.ink, 3, 16));
  o.push(`<rect x="348" y="458" width="72" height="20" fill="#ffffff" stroke="${C.olive}" stroke-width="3"/>`);
  for (let i = 1; i < 6; i++) o.push(`<line x1="${348 + i * 12}" y1="458" x2="${348 + i * 12}" y2="478" stroke="${C.olive}" stroke-width="2"/>`);
  o.push(fa(405, 494, 422, 538, C.ink, 3, 16));
  // 4 nucleus with integrated DNA
  o.push(`<circle cx="450" cy="660" r="110" fill="${NUC}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(path('M360 664 q25 -26 50 0 q20 22 50 0 q25 -26 50 0 q18 18 30 8', { stroke: C.ink, w: 3.5 }));
  o.push(path('M410 664 L432 652 L458 672 L482 658', { stroke: C.olive, w: 7 }));
  o.push(num(320, 600, 4));
  // 5 ribosome, polypeptide cut by protease
  o.push(num(244, 690, 5));
  o.push(`<circle cx="288" cy="718" r="11" fill="${GOLD}" stroke="${C.ink}" stroke-width="2"/><circle cx="285" cy="736" r="15" fill="${GOLD}" stroke="${C.ink}" stroke-width="2"/>`);
  for (let i = 0; i < 8; i++) o.push(`<circle cx="${300 + i * 16}" cy="790" r="8" fill="${TEAL}" stroke="${C.ink}" stroke-width="1.5"/>`);
  for (const x of [324, 372]) o.push(`<line x1="${x}" y1="768" x2="${x}" y2="810" stroke="${RUST}" stroke-width="3"/>`);
  for (const [x0, n] of [[308, 2], [356, 2], [402, 2]]) for (let i = 0; i < n; i++) o.push(`<circle cx="${x0 + i * 16}" cy="826" r="8" fill="${TEAL}" stroke="${C.ink}" stroke-width="1.5"/>`);
  // 6 new particles bud off
  o.push(num(690, 590, 6));
  o.push(capsid(636, 652, 0.6), capsid(612, 718, 0.6));
  o.push(virion(770, 662, 36));
  // key
  o.push(panel(30, 910, 840, 330, '#ffffff', C.panelEdge));
  const steps = ['Glycoprotein binds CD4 receptor', 'Capsid contents enter the cell', 'Reverse transcriptase: RNA to DNA', 'Integrase inserts DNA into host DNA', 'Host ribosomes make proteins; protease cuts', 'New particles bud off with envelope'];
  steps.forEach((s, i) => {
    const y = 960 + i * 48;
    o.push(num(76, y, i + 1, 19), t(112, y + 8, s, { size: 21 }));
    if (i >= 2 && i <= 4) o.push(`<rect x="704" y="${y - 19}" width="142" height="38" rx="19" fill="${RUST}" stroke="${C.ink}" stroke-width="2"/>`, t(775, y + 7, 'drug target', { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' }));
  });
  return svg(W, 1270, 'HIV in a helper T cell', o.join('\n'));
}

// ---------- 08 Herd immunity ----------
function herd() {
  const o = [];
  const g = 40, r = 14;
  const grid = (x0, y0, state) => {
    for (let row = 0; row < 10; row++) for (let col = 0; col < 10; col++) {
      const x = x0 + col * g, y = y0 + row * g, s = state(row, col);
      const fill = s === 'inf' ? RUST : s === 'imm' || s === 'x' ? TEAL : '#ffffff';
      o.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`);
    }
  };
  const links = (x0, y0, c, ns, cross) => {
    const [cr, cc] = c;
    for (const [nr, nc] of ns) o.push(`<line x1="${x0 + cc * g}" y1="${y0 + cr * g}" x2="${x0 + nc * g}" y2="${y0 + nr * g}" stroke="${RUST}" stroke-width="3.5"/>`);
    if (cross) for (const [nr, nc] of ns) {
      const x = x0 + nc * g, y = y0 + nr * g, d = 8;
      o.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="${TEAL}" stroke="${C.ink}" stroke-width="2.5"/>`);
      o.push(`<path d="M${x - d} ${y - d} L${x + d} ${y + d} M${x + d} ${y - d} L${x - d} ${y + d}" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/><path d="M${x - d} ${y - d} L${x + d} ${y + d} M${x + d} ${y - d} L${x - d} ${y + d}" stroke="${RUST}" stroke-width="3" stroke-linecap="round"/>`);
    }
    o.push(`<circle cx="${x0 + cc * g}" cy="${y0 + cr * g}" r="${r}" fill="${RUST}" stroke="${C.ink}" stroke-width="2.5"/>`);
  };
  // left: nobody immune, case at (4,4) infects 6 neighbours
  const Ln = [[3, 3], [3, 4], [3, 5], [4, 3], [4, 5], [5, 4]];
  const lx = 50, ly = 200;
  grid(lx, ly, (rr, cc) => (Ln.some(([a, b]) => a === rr && b === cc) ? 'inf' : 'sus'));
  links(lx, ly, [4, 4], Ln, false);
  for (const [a, b] of Ln) o.push(`<circle cx="${lx + b * g}" cy="${ly + a * g}" r="${r}" fill="${RUST}" stroke="${C.ink}" stroke-width="2.5"/>`);
  // right: 84 immune; susceptible at odd rows 1,3,5,7 and odd cols 1,3,5,7 (case at (3,3))
  const rx = 490, ry = 200;
  const Rn = [[2, 2], [2, 3], [2, 4], [3, 2], [3, 4], [4, 3]];
  grid(rx, ry, (rr, cc) => ([1, 3, 5, 7].includes(rr) && [1, 3, 5, 7].includes(cc) ? 'sus' : 'imm'));
  links(rx, ry, [3, 3], Rn, true);
  o.push(t(230, 150, 'Nobody immune', { size: 24, weight: 700, anchor: 'middle' }));
  o.push(t(670, 150, '84 of 100 immune', { size: 24, weight: 700, anchor: 'middle' }));
  o.push(t(230, 640, 'The outbreak spreads', { size: 22, weight: 700, fill: RUST, anchor: 'middle' }));
  o.push(t(670, 640, 'Spread is blocked (x)', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(panel(30, 680, 840, 110, '#ffffff', C.panelEdge));
  o.push(t(450, 724, sub0('Proportion immune needed = 1 − 1/'), { size: 23, weight: 700, anchor: 'middle' }));
  o.push(t(450, 764, '= 1 − 1/6 = 83.3%', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  const key = [[TEAL, 'immune', 60], ['#ffffff', 'can catch it', 270], [RUST, 'infected', 510]];
  for (const [f, s, x] of key) o.push(`<circle cx="${x + 26}" cy="852" r="14" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`, t(x + 50, 859, s, { size: 21 }));
  return svg(W, 890, 'Herd immunity', o.join('\n'), sub0('Each dot is a person. One case, ', ' = 6'));
}

export const figures = [
  { name: '08-herd-immunity', after: '## How to approach it', svg: herd(),
    alt: 'Two grids of 100 people with one case and R0 of 6. With nobody immune the case infects 6 neighbours. With 84 immune, above the 83.3 per cent needed (1 minus 1/6), every neighbour is immune and spread is blocked, protecting those who cannot be vaccinated.',
    caption: 'When enough people are immune, a pathogen cannot find susceptible hosts and the outbreak stops.' },
  { name: '07-hiv-replication', after: '## How to approach it', svg: hiv(),
    alt: 'Six steps in a helper T cell: glycoproteins bind CD4; capsid contents enter; reverse transcriptase makes DNA from RNA; integrase inserts the DNA into a host chromosome; host ribosomes make proteins which protease cuts; new particles bud off with an envelope. The enzymes of steps 3, 4 and 5 are drug targets.',
    caption: 'HIV uses the host cell to make new virus particles, destroying helper T cells.' },
  { name: '01-bacterium-vs-virus', after: '## How to approach it', svg: bactVirus(),
    alt: 'A bacterium is a living prokaryotic cell with a cell wall, ribosomes, a circular chromosome and plasmids. HIV is not a cell: it has an envelope carrying glycoproteins, a protein capsid, two RNA copies and enzymes such as reverse transcriptase. HIV is about 120 nm across and a bacterium about 17 times longer.',
    caption: 'A bacterium is a cell; HIV is a particle with RNA, enzymes, a capsid and an envelope.' },
  { name: '02-four-diseases', after: '## How to approach it', svg: fourDiseases(),
    alt: 'Four panels. Cholera (bacterium Vibrio cholerae) spreads through contaminated water or food. Malaria (protoctist Plasmodium) is passed by the bite of a female Anopheles mosquito. TB (bacterium Mycobacterium tuberculosis) spreads in droplets breathed in. HIV (a virus) spreads in body fluids: sexual contact, blood and from mother to child.',
    caption: 'Each disease has a named pathogen type and a main transmission route.' },
];
