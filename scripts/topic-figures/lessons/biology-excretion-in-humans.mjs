// Board-neutral redraws of three GCSE excretion figures used on AQA 8461 and OCR GCSE pages.
// The old pictures carried an "Extended" tier badge; labels and content are unchanged.
import { C, svg, t, path } from '../style.mjs';

export const slug = 'biology-excretion-in-humans';
const W = 900;
const NAVY = '#1e2a44', BLOODC = '#c0643a', RBC = '#a8392a', TEALD = C.tealDark, KID = '#c8916f', LIVER = '#e3a77f', URINE = '#f3e9b8';
const mk = (id, col, s = 24) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="${s}" markerHeight="${s}" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${col}"/></marker>`;
const markers = `<defs>${mk('aN', NAVY, 30)}${mk('aB', BLOODC, 26)}${mk('aT', TEALD, 20)}</defs>`;
const S = (w, h, title, body, sub) => svg(w, h, title, markers + body, sub);
const num = (x, y, n) => `<circle cx="${x}" cy="${y}" r="19" fill="${NAVY}"/>` + t(x, y + 7, String(n), { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
const ln = (x1, y1, x2, y2, col = NAVY, w = 2.5, m = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${w}"${m ? ` marker-end="url(#${m})"` : ''}/>`;
const glu = (x, y) => `<circle cx="${x}" cy="${y}" r="9" fill="${C.mustard}" stroke="${NAVY}" stroke-width="2.2"/>`;
const urea = (x, y) => `<rect x="${x - 7}" y="${y - 7}" width="14" height="14" fill="${NAVY}" stroke="#ffffff" stroke-width="1.5"/>`;
const rbc = (x, y) => `<circle cx="${x}" cy="${y}" r="10" fill="${RBC}" stroke="#ffffff" stroke-width="1.5"/>`;

// ---------- 3. Kidney section ----------
function kidney() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const outline = `M520 ${Y(222)} C600 ${Y(210)} 610 ${Y(330)} 560 ${Y(410)} C520 ${Y(470)} 520 ${Y(540)} 560 ${Y(600)} C620 ${Y(690)} 590 ${Y(820)} 470 ${Y(820)} C330 ${Y(820)} 270 ${Y(680)} 272 ${Y(520)} C275 ${Y(360)} 360 ${Y(230)} 520 ${Y(222)} Z`;
  o.push(`<path d="${outline}" fill="${KID}" stroke="${NAVY}" stroke-width="4"/>`);
  const c = [462, Y(518)];
  const cone = (a, len, w) => {
    const r = (a * Math.PI) / 180, nx = Math.cos(r), ny = Math.sin(r), px = -ny, py = nx;
    const tip = [c[0] + nx * 50, c[1] + ny * 50], b1 = [c[0] + nx * len + px * w, c[1] + ny * len + py * w], b2 = [c[0] + nx * len - px * w, c[1] + ny * len - py * w];
    const f = (p) => p.map((v) => v.toFixed(1)).join(' ');
    return `<path d="M${f(tip)} L${f(b1)} A${len} ${len} 0 0 0 ${f(b2)} Z" fill="#fbf2ee" stroke="${NAVY}" stroke-width="2.5"/>`;
  };
  for (const [a, len, w] of [[-100, 225, 56], [-150, 150, 42], [180, 135, 34], [155, 140, 40], [100, 220, 56], [-50, 120, 30], [50, 120, 30]]) o.push(cone(a, len, w));
  o.push(`<circle cx="${c[0]}" cy="${c[1]}" r="30" fill="${URINE}" stroke="${NAVY}" stroke-width="3"/>`);
  o.push(`<path d="M${c[0] + 28} ${c[1]} H675 a20 20 0 0 1 20 20 V${Y(938)}" fill="none" stroke="${NAVY}" stroke-width="22" stroke-linecap="round"/>`);
  o.push(`<path d="M${c[0] + 28} ${c[1]} H675 a20 20 0 0 1 20 20 V${Y(938)}" fill="none" stroke="${URINE}" stroke-width="16" stroke-linecap="round"/>`);
  for (const y of [740, 900]) o.push(`<polygon points="688,${Y(y)} 702,${Y(y)} 695,${Y(y + 22)}" fill="${NAVY}"/>`);
  o.push(t(40, Y(233), 'Cortex', { size: 25, weight: 700 }), t(40, Y(266), 'darker outer layer', { size: 20 }));
  o.push(ln(250, Y(256), 340, Y(302)), `<circle cx="340" cy="${Y(302)}" r="5" fill="${NAVY}"/>`);
  o.push(t(40, Y(760), 'Medulla', { size: 25, weight: 700 }), t(40, Y(792), 'inner cone-shaped', { size: 20 }), t(40, Y(820), 'regions', { size: 20 }));
  o.push(ln(130, Y(736), 372, Y(598)), `<circle cx="372" cy="${Y(598)}" r="5" fill="${NAVY}"/>`);
  o.push(t(670, Y(878), 'Ureter', { size: 25, weight: 700, anchor: 'end' }), t(670, Y(911), 'leaves the inner side', { size: 20, anchor: 'end' }));
  return S(W, 950, 'Inside a kidney', o.join('\n'), 'Cut lengthways');
}

// ---------- 4. Nephron ----------
function nephron() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const tube = `M360 ${Y(430)} V${Y(520)} C360 ${Y(560)} 430 ${Y(580)} 450 ${Y(605)} C470 ${Y(630)} 300 ${Y(650)} 290 ${Y(690)} C280 ${Y(730)} 440 ${Y(735)} 450 ${Y(765)} C455 ${Y(790)} 455 ${Y(830)} 520 ${Y(830)} H700 a30 30 0 0 1 30 30 V${Y(1090)}`;
  // blood vessel round tubule
  o.push(path(`M150 ${Y(272)} C200 ${Y(272)} 260 ${Y(290)} 290 ${Y(310)}`, { stroke: BLOODC, w: 9 }));
  o.push(path(`M430 ${Y(318)} C440 ${Y(300)} 460 ${Y(296)} 520 ${Y(296)} C550 ${Y(296)} 556 ${Y(320)} 556 ${Y(360)} V${Y(530)} H400`, { stroke: BLOODC, w: 9 }));
  o.push(ln(410, Y(530), 392, Y(530), BLOODC, 9, 'aB'));
  o.push(path(tube.replace(/V\$\{Y\(1090\)\}$/, ''), { stroke: BLOODC, w: 58 }).replace(/V-?\d+(\.\d+)?"? fill/, (m) => m));
  // tubule body
  o.push(path(tube, { stroke: NAVY, w: 50 }), path(tube, { stroke: '#d4e5ec', w: 42 }));
  // blood out
  o.push(ln(462, Y(740), 660, Y(740), BLOODC, 9, 'aB'));
  o.push(`<polygon points="720,${Y(1086)} 740,${Y(1086)} 730,${Y(1140)}" fill="${NAVY}"/>`);
  // capsule + glomerulus
  o.push(`<circle cx="360" cy="${Y(350)}" r="94" fill="#d4e5ec" stroke="${NAVY}" stroke-width="4"/>`);
  for (const a of [0, 60, 120]) o.push(`<ellipse cx="360" cy="${Y(350)}" rx="46" ry="22" transform="rotate(${a} 360 ${Y(350)})" fill="none" stroke="${BLOODC}" stroke-width="5"/>`);
  o.push(rbc(200, Y(282)), rbc(556, Y(410)), rbc(556, Y(470)));
  o.push(urea(295, Y(318)), urea(425, Y(380)), glu(430, Y(332)), glu(297, Y(385)));
  o.push(urea(360, Y(470)), glu(360, Y(490)), urea(374, Y(553)), glu(410, Y(573)), glu(425, Y(633)), urea(346, Y(656)), urea(358, Y(727)), urea(610, Y(830)), urea(730, Y(940)), urea(730, Y(1000)), urea(730, Y(1060)));
  // reabsorption arrows
  o.push(ln(456, Y(610), 534, Y(610), TEALD, 3, 'aT'), ln(284, Y(690), 208, Y(690), TEALD, 3, 'aT'));
  // labels
  o.push(t(360, Y(205), 'Glomerulus', { size: 24, weight: 700, anchor: 'middle' }), ln(360, Y(216), 360, Y(300)));
  o.push(t(40, Y(225), 'Blood in', { size: 22, weight: 700, fill: BLOODC }));
  o.push(t(40, Y(350), 'Capsule', { size: 24, weight: 700 }), ln(160, Y(343), 264, Y(343)));
  o.push(t(40, Y(510), 'Tubule', { size: 24, weight: 700 }), ln(150, Y(502), 322, Y(502)));
  o.push(num(60, Y(415), 1), t(96, Y(410), 'Filtration', { size: 24, weight: 700 }), t(96, Y(442), 'at glomerulus', { size: 20 }));
  o.push(t(590, Y(430), 'Blood cells and', { size: 21 }), t(590, Y(458), 'protein stay in', { size: 21 }), t(590, Y(486), 'the blood', { size: 21 }));
  o.push(t(490, Y(712), 'Blood out', { size: 22, weight: 700, fill: BLOODC }));
  o.push(num(60, Y(790), 2), t(96, Y(785), 'Reabsorption', { size: 24, weight: 700 }), t(96, Y(820), 'all glucose', { size: 20 }), t(96, Y(848), 'most water', { size: 20 }), t(96, Y(876), 'some ions', { size: 20 }));
  o.push(t(700, Y(950), 'Collecting', { size: 24, weight: 700, anchor: 'end' }), t(700, Y(981), 'duct', { size: 24, weight: 700, anchor: 'end' }), t(700, Y(1012), 'to the ureter', { size: 20, anchor: 'end' }));
  o.push(num(60, Y(1145), 3), t(96, Y(1140), 'Urine: urea, excess water,', { size: 22, weight: 700 }), t(96, Y(1171), 'excess ions. No glucose.', { size: 22, weight: 700 }));
  // key
  const ky = Y(1238);
  o.push(glu(80, ky - 7), t(100, ky, 'glucose', { size: 20 }), urea(250, ky - 7), t(268, ky, 'urea', { size: 20 }), rbc(360, ky - 7), t(380, ky, 'blood cell', { size: 20 }));
  o.push(ln(530, ky - 7, 584, ky - 7, BLOODC, 8), t(594, ky, 'blood vessel', { size: 20 }));
  return S(W, 1230, 'How a nephron makes urine', o.join('\n'), 'One nephron, schematic');
}

// ---------- 7. Liver and urea ----------
function liverUrea() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const aa = (x, y) => `<circle cx="${x}" cy="${y}" r="15" fill="#b5d3cf" stroke="${TEALD}" stroke-width="3"/><rect x="${x + 8}" y="${y - 9}" width="17" height="17" fill="${C.mustard}" stroke="${NAVY}" stroke-width="2"/>`;
  const vessel = (x, y1, y2, col = BLOODC) => `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2 - 26}" stroke="${col}" stroke-width="14" stroke-linecap="round"/><polygon points="${x - 11},${y2 - 28} ${x + 11},${y2 - 28} ${x},${y2}" fill="${col}"/>`;
  o.push(vessel(450, Y(200), Y(326)), aa(436, Y(235)), aa(436, Y(272)));
  o.push(num(80, Y(237), 1), t(116, Y(229), 'Amino acids', { size: 25, weight: 700 }), t(116, Y(262), 'absorbed into', { size: 21 }), t(116, Y(290), 'the blood', { size: 21 }), ln(344, Y(262), 404, Y(262)));
  // liver
  o.push(`<path d="M108 ${Y(418)} C260 ${Y(340)} 640 ${Y(330)} 792 ${Y(438)} C770 ${Y(560)} 650 ${Y(640)} 540 ${Y(660)} C420 ${Y(690)} 260 ${Y(690)} 200 ${Y(640)} C150 ${Y(590)} 120 ${Y(510)} 108 ${Y(418)} Z" fill="${LIVER}" stroke="${NAVY}" stroke-width="4"/>`);
  o.push(t(450, Y(398), 'LIVER', { size: 24, weight: 700, anchor: 'middle' }));
  o.push(`<line x1="450" y1="${Y(410)}" x2="450" y2="${Y(640)}" stroke="${NAVY}" stroke-width="2.5" stroke-dasharray="4 7"/>`);
  o.push(num(160, Y(456), 2));
  o.push(t(300, Y(461), 'Assimilation', { size: 23, weight: 700, anchor: 'middle' }), t(620, Y(461), 'Deamination', { size: 23, weight: 700, anchor: 'middle' }));
  for (let i = 0; i < 4; i++) { o.push(`<circle cx="${210 + i * 60}" cy="${Y(516)}" r="18" fill="#b5d3cf" stroke="${TEALD}" stroke-width="3"/>`); if (i) o.push(ln(168 + i * 60, Y(516), 192 + i * 60, Y(516), TEALD, 4)); }
  o.push(t(285, Y(589), 'made into protein', { size: 20, anchor: 'middle' }));
  o.push(aa(498, Y(516)), ln(548, Y(516), 640, Y(516), NAVY, 3.5, 'aN'));
  o.push(`<rect x="672" y="${Y(500)}" width="34" height="34" fill="${NAVY}"/>`, t(690, Y(566), 'urea', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(570, Y(580), 'nitrogen part', { size: 20, anchor: 'middle' }), t(570, Y(608), 'removed', { size: 20, anchor: 'middle' }));
  // to kidney
  o.push(vessel(620, Y(664), Y(788)), `<rect x="612" y="${Y(686)}" width="16" height="16" fill="${NAVY}"/><rect x="612" y="${Y(727)}" width="16" height="16" fill="${NAVY}"/>`);
  o.push(num(80, Y(737), 3), t(116, Y(729), 'Urea travels in', { size: 22, weight: 700 }), t(116, Y(758), 'the blood plasma', { size: 22, weight: 700 }), ln(340, Y(738), 596, Y(738)));
  o.push(`<path d="M640 ${Y(790)} C690 ${Y(800)} 660 ${Y(840)} 648 ${Y(868)} C636 ${Y(900)} 690 ${Y(930)} 655 ${Y(962)} C620 ${Y(990)} 570 ${Y(950)} 570 ${Y(880)} C570 ${Y(810)} 600 ${Y(785)} 640 ${Y(790)} Z" fill="${LIVER}" stroke="${NAVY}" stroke-width="4"/>`);
  o.push(`<path d="M648 ${Y(882)} C700 ${Y(882)} 700 ${Y(930)} 700 ${Y(980)} V${Y(1030)}" fill="none" stroke="${NAVY}" stroke-width="20" stroke-linecap="round"/><path d="M648 ${Y(882)} C700 ${Y(882)} 700 ${Y(930)} 700 ${Y(980)} V${Y(1030)}" fill="none" stroke="${URINE}" stroke-width="14"/>`);
  o.push(`<rect x="692" y="${Y(992)}" width="16" height="14" fill="${NAVY}"/>`, `<polygon points="690,${Y(1028)} 710,${Y(1028)} 700,${Y(1060)}" fill="${NAVY}"/>`);
  o.push(num(80, Y(882), 4), t(116, Y(874), 'Kidney filters', { size: 22, weight: 700 }), t(116, Y(903), 'urea out', { size: 22, weight: 700 }), ln(324, Y(884), 546, Y(884)));
  o.push(num(80, Y(1022), 5), t(116, Y(1015), 'Excreted in urine', { size: 22, weight: 700 }), ln(360, Y(1010), 676, Y(1010)));
  return S(W, 1060, 'Where urea comes from', o.join('\n'), 'The route from amino acids to urine');
}

export const figures = [
  { name: '03-kidney-section', after: '## B3.3h: Structure', svg: kidney(),
    alt: 'A kidney cut lengthways: the cortex is the darker outer layer and the medulla is made of cone-shaped inner regions. The ureter leaves from the central, concave inner side.',
    caption: 'Cortex is the outer layer, medulla the inner cone-shaped regions.' },
  { name: '04-nephron', after: '### Kidneys', svg: nephron(),
    alt: 'One nephron: blood enters the glomerulus inside the capsule and water, glucose, urea and ions are filtered into the tubule, while blood cells and protein stay in the blood. Along the coiled tubule all glucose, most water and some ions return to the capillaries. Urea, excess water and excess ions pass on as urine to the collecting duct.',
    caption: 'Filtration at the glomerulus, reabsorption along the tubule, urine in the collecting duct.' },
  { name: '07-liver-urea-route', after: '### Kidneys', svg: liverUrea(),
    alt: 'Amino acids reach the liver in the blood. The liver builds some into proteins (assimilation) and removes the nitrogen-containing part of excess amino acids (deamination) to form urea. Urea travels in the blood plasma to the kidney and is excreted in urine.',
    caption: 'The liver makes proteins and urea from amino acids; the kidney excretes the urea.' },
];
