// Board-neutral redraws of four GCSE coordination figures used on AQA 8461 and OCR GCSE pages.
// The old pictures carried an "Extended" tier badge; everything else, including the lesson numbers,
// is unchanged.
import { C, svg, panel, t, path } from '../style.mjs';

export const slug = 'biology-coordination-and-response';
const W = 900;
const NAVY = '#1e2a44', SLATE = '#4a5a78', RUST = '#c0643a', GOLD = C.mustard, SOIL = '#d9c9a6';
const mk = (id, col, s = 22) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="${s}" markerHeight="${s}" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${col}"/></marker>`;
const markers = `<defs>${mk('aN', NAVY)}${mk('aT', C.tealDark)}${mk('aO', C.olive)}${mk('aNs', NAVY, 16)}${mk('aOs', C.olive, 16)}</defs>`;
const S = (w, h, title, body, sub) => svg(w, h, title, markers + body, sub);
const num = (x, y, n) => `<circle cx="${x}" cy="${y}" r="19" fill="${NAVY}"/>` + t(x, y + 7, String(n), { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
const ln = (x1, y1, x2, y2, col = NAVY, w = 2.5, m = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${w}"${m ? ` marker-end="url(#${m})"` : ''}/>`;

// ---------- 2. Synapse ----------
function synapse() {
  const o = [];
  const dy = -30, Y = (y) => y + dy;
  // neurone 1 (axon + knob)
  o.push(`<path d="M280 ${Y(130)} H400 V${Y(210)} C470 ${Y(210)} 490 ${Y(240)} 490 ${Y(300)} V${Y(380)} C490 ${Y(420)} 470 ${Y(430)} 430 ${Y(430)} H250 C210 ${Y(430)} 190 ${Y(420)} 190 ${Y(380)} V${Y(300)} C190 ${Y(240)} 210 ${Y(210)} 280 ${Y(210)} Z" fill="#ffffff" stroke="${NAVY}" stroke-width="3.5"/>`);
  o.push(ln(340, Y(140), 340, Y(214), NAVY, 3.5, 'aN'));
  const ves = (x, y) => `<circle cx="${x}" cy="${y}" r="30" fill="#dfeceb" stroke="${C.tealDark}" stroke-width="3"/>` + [[-8, -7], [8, -8], [0, 8]].map(([a, b]) => `<circle cx="${x + a}" cy="${y + b}" r="4.5" fill="${C.tealDark}"/>`).join('');
  o.push(ves(240, Y(325)), ves(310, Y(288)), ves(390, Y(335)), ves(330, Y(378)), ves(435, Y(273)));
  o.push(`<path d="M352 ${Y(428)} A38 38 0 0 1 428 ${Y(428)} Z" fill="#dfeceb" stroke="${C.tealDark}" stroke-width="3"/>`);
  // gap
  o.push(`<rect x="40" y="${Y(430)}" width="600" height="130" fill="#dfeceb" fill-opacity="0.8"/>`);
  o.push(t(30, Y(503), 'Synaptic gap', { size: 21, weight: 700, fill: C.tealDark }), ln(30, Y(513), 150, Y(513), C.tealDark, 2.5));
  o.push(`<line x1="390" y1="${Y(440)}" x2="390" y2="${Y(530)}" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="4 5" marker-end="url(#aT)"/>`);
  for (const [x, y] of [[360, 460], [430, 455], [400, 478], [340, 498], [435, 503], [318, 535], [410, 535]]) o.push(`<circle cx="${x}" cy="${Y(y)}" r="8" fill="${C.tealDark}" stroke="#ffffff" stroke-width="1.5"/>`);
  // neurone 2
  o.push(`<path d="M200 ${Y(560)} H480 C500 ${Y(560)} 510 ${Y(570)} 510 ${Y(590)} V${Y(750)} C510 ${Y(790)} 440 ${Y(800)} 400 ${Y(820)} V${Y(930)} H280 V${Y(820)} C240 ${Y(800)} 170 ${Y(790)} 170 ${Y(750)} V${Y(590)} C170 ${Y(570)} 180 ${Y(560)} 200 ${Y(560)} Z" fill="#ffffff" stroke="${NAVY}" stroke-width="3.5"/>`);
  const rec = (x) => `<path d="M${x - 28} ${Y(536)} h18 a10 10 0 0 0 20 0 h18 v14 l-6 8 h-44 l-6 -8 z" fill="${GOLD}" stroke="${NAVY}" stroke-width="2"/>`;
  for (const x of [230, 320, 410, 470]) o.push(rec(x));
  o.push(ln(340, Y(845), 340, Y(920), NAVY, 3.5, 'aN'));
  o.push(t(30, Y(190), 'Neurone 1', { size: 23, weight: 700 }), t(30, Y(222), 'impulse arrives', { size: 20 }));
  o.push(t(210, Y(698), 'Neurone 2', { size: 23, weight: 700 }));
  o.push(t(30, Y(880), 'new impulse', { size: 20 }), t(30, Y(910), 'starts', { size: 20 }));
  // numbered labels
  o.push(ln(470, Y(298), 528, Y(298)), num(548, Y(298), 1), t(582, Y(294), 'Vesicles release', { size: 22, weight: 700 }), t(582, Y(324), 'neurotransmitter', { size: 22, weight: 700 }));
  o.push(ln(452, Y(470), 528, Y(470)), num(548, Y(470), 2), t(582, Y(464), 'Molecules diffuse', { size: 22, weight: 700 }), t(582, Y(494), 'across the gap', { size: 22, weight: 700 }));
  o.push(ln(496, Y(552), 560, Y(600)), num(580, Y(600), 3), t(612, Y(594), 'Bind to receptor', { size: 22, weight: 700 }), t(612, Y(624), 'proteins', { size: 22, weight: 700 }));
  o.push(num(548, Y(738), 4), t(582, Y(745), 'Impulse in neurone 2', { size: 22, weight: 700 }));
  o.push(t(870, Y(960), 'One direction only', { size: 24, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(t(870, Y(990), 'only neurone 1 releases it', { size: 20, anchor: 'end' }));
  return S(W, 980, 'Crossing a synapse', o.join('\n'), 'Schematic, not to scale');
}

// ---------- 4. Pupil reflex ----------
function pupil() {
  const o = [];
  const eye = (cx, cy, pr, bright) => {
    let s = `<ellipse cx="${cx}" cy="${cy}" rx="194" ry="150" fill="#ffffff" stroke="${NAVY}" stroke-width="3.5"/>`;
    s += `<circle cx="${cx}" cy="${cy}" r="126" fill="#b5d3cf" stroke="${NAVY}" stroke-width="3"/>`;
    if (bright) {
      for (let a = 0; a < 360; a += 22.5) {
        const r = (a * Math.PI) / 180;
        s += `<line x1="${(cx + 40 * Math.cos(r)).toFixed(1)}" y1="${(cy + 40 * Math.sin(r)).toFixed(1)}" x2="${(cx + 122 * Math.cos(r)).toFixed(1)}" y2="${(cy + 122 * Math.sin(r)).toFixed(1)}" stroke="${SLATE}" stroke-width="1.6" stroke-dasharray="5 5"/>`;
      }
      for (const r of [84, 66, 50]) s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${C.olive}" stroke-width="6"/>`;
    } else {
      for (const r of [96, 110]) s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${C.olive}" stroke-width="1.8" stroke-dasharray="4 4"/>`;
      for (let a = 0; a < 360; a += 30) {
        const r = (a * Math.PI) / 180;
        s += `<line x1="${(cx + 92 * Math.cos(r)).toFixed(1)}" y1="${(cy + 92 * Math.sin(r)).toFixed(1)}" x2="${(cx + 118 * Math.cos(r)).toFixed(1)}" y2="${(cy + 118 * Math.sin(r)).toFixed(1)}" stroke="${NAVY}" stroke-width="6" stroke-linecap="round"/>`;
      }
    }
    s += `<circle cx="${cx}" cy="${cy}" r="${pr}" fill="${NAVY}"/>`;
    return s;
  };
  o.push(t(235, 148, 'Bright light', { size: 27, weight: 700, anchor: 'middle' }), t(665, 148, 'Dim light', { size: 27, weight: 700, anchor: 'middle' }));
  for (const x of [155, 195, 235, 275, 315]) o.push(ln(x, 182, x, 236, C.olive, 4, 'aO'));
  for (const x of [620, 710]) o.push(`<line x1="${x}" y1="182" x2="${x}" y2="236" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#aOs)"/>`);
  o.push(eye(235, 398, 34, true), eye(665, 398, 84, false));
  o.push(t(235, 610, 'Pupil narrows', { size: 25, weight: 700, anchor: 'middle' }), t(235, 644, 'less light enters', { size: 21, anchor: 'middle' }));
  o.push(t(665, 610, 'Pupil widens', { size: 25, weight: 700, anchor: 'middle' }), t(665, 644, 'more light enters', { size: 21, anchor: 'middle' }));
  o.push(panel(30, 690, 840, 250, '#ffffff', NAVY));
  o.push(t(450, 732, 'Iris muscles work as a pair', { size: 24, weight: 700, anchor: 'middle' }));
  o.push(`<circle cx="80" cy="798" r="20" fill="none" stroke="${C.olive}" stroke-width="7"/>`);
  o.push(t(124, 796, 'Circular muscles', { size: 22, weight: 700 }), t(124, 826, 'bright: contract; dim: relax', { size: 21 }));
  o.push(`<line x1="58" y1="880" x2="102" y2="880" stroke="${NAVY}" stroke-width="7" stroke-linecap="round"/>`);
  o.push(t(124, 876, 'Radial muscles', { size: 22, weight: 700 }), t(124, 906, 'bright: relax; dim: contract', { size: 21 }));
  return S(W, 960, 'Pupil reflex', o.join('\n'), 'Front view of the eye, schematic');
}

// ---------- 5. Blood glucose feedback ----------
function glucose() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const loop = (y0, fill, col, boxes, back) => {
    boxes.forEach(([a, b], i) => {
      const x = 30 + i * 295;
      o.push(`<rect x="${x}" y="${Y(y0)}" width="250" height="110" rx="14" fill="${fill}" stroke="${NAVY}" stroke-width="2.5"/>`);
      o.push(t(x + 125, Y(y0 + 45), a, { size: 22, weight: 700, anchor: 'middle' }), t(x + 125, Y(y0 + 77), b, { size: 21, anchor: 'middle' }));
      if (i < 2) o.push(ln(x + 250, Y(y0 + 55), x + 293, Y(y0 + 55), NAVY, 3, 'aNs'));
    });
    o.push(`<polyline points="745,${Y(y0 + 110)} 745,${Y(y0 + 150)} 155,${Y(y0 + 150)} 155,${Y(y0 + 116)}" fill="none" stroke="${col}" stroke-width="4" marker-end="url(#${col === C.olive ? 'aO' : 'aT'})"/>`);
    o.push(t(450, Y(y0 + 137), back, { size: 22, weight: 700, fill: col, anchor: 'middle' }));
  };
  loop(170, C.cream, C.olive, [['Glucose rises', 'after a meal'], ['Pancreas', 'releases insulin'], ['Liver: glucose', 'to glycogen']], 'Glucose falls back down');
  loop(400, '#dfeceb', C.tealDark, [['Glucose falls', 'between meals'], ['Pancreas', 'releases glucagon'], ['Liver: glycogen', 'to glucose']], 'Glucose rises back up');
  // graph
  o.push(t(30, Y(660), `Blood glucose (mmol per dm<tspan font-size="65%" dy="-0.6em">3</tspan><tspan dy="0.39em">)</tspan>`, { size: 22, weight: 700 }));
  const X = (m) => 130 + m * 5.825, Yg = (v) => Y(1120) - (v - 4) * 84;
  o.push(ln(130, Yg(4), 840, Yg(4), NAVY, 3.5), ln(130, Yg(4), 130, Y(690), NAVY, 3.5));
  for (let v = 4; v <= 9; v++) o.push(ln(122, Yg(v), 130, Yg(v), NAVY, 2.5), t(114, Yg(v) + 7, String(v), { size: 20, anchor: 'end' }));
  for (const m of [0, 30, 60, 90, 120]) o.push(ln(X(m), Yg(4), X(m), Yg(4) + 8, NAVY, 2.5), t(X(m), Yg(4) + 34, String(m), { size: 20, anchor: 'middle' }));
  o.push(t(480, Y(1192), 'Time after glucose drink (minutes)', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(`<line x1="130" y1="${Yg(5)}" x2="830" y2="${Yg(5)}" stroke="${SLATE}" stroke-width="2.5" stroke-dasharray="10 7"/>`);
  o.push(t(826, Yg(5) + 32, 'set point', { size: 21, weight: 700, fill: SLATE, anchor: 'end' }));
  o.push(path(`M${X(0)} ${Yg(5)} C${X(8)} ${Yg(5.2)} ${X(18)} ${Yg(8)} ${X(30)} ${Yg(8)} C${X(50)} ${Yg(8)} ${X(75)} ${Yg(6.3)} ${X(90)} ${Yg(5.8)} C${X(102)} ${Yg(5.4)} ${X(112)} ${Yg(5.2)} ${X(120)} ${Yg(5.2)}`, { stroke: NAVY, w: 4.5 }));
  for (const [m, v] of [[0, 5], [30, 8], [120, 5.2]]) o.push(`<circle cx="${X(m)}" cy="${Yg(v)}" r="10" fill="${GOLD}" stroke="${NAVY}" stroke-width="2.5"/>`);
  o.push(t(X(0) + 22, Yg(5) + 40, '5.0', { size: 21, weight: 700 }), t(X(30) + 22, Yg(8) - 20, '8.0 (+60%)', { size: 21, weight: 700 }));
  o.push(t(540, Y(774), 'Insulin: liver stores', { size: 22, weight: 700 }), t(540, Y(805), 'glucose as glycogen', { size: 22, weight: 700 }));
  o.push(t(450, Y(1262), 'Example from the lesson; smooth curve is a sketch', { size: 20, fill: C.muted, anchor: 'middle' }));
  return S(W, 1250, 'Blood glucose: negative feedback', o.join('\n'), 'Each response reverses the change');
}

// ---------- 6. Auxin and phototropism ----------
function auxin() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const sun = (x, y) => `<circle cx="${x}" cy="${y}" r="27" fill="${GOLD}" stroke="${NAVY}" stroke-width="2.5"/>`;
  o.push(t(30, Y(199), '1 Light from one side', { size: 24, weight: 700 }));
  o.push(sun(60, Y(328)), t(60, Y(386), 'Light', { size: 21, weight: 700, anchor: 'middle' }));
  for (const y of [280, 330, 380]) o.push(ln(108, Y(y), 186, Y(y), C.olive, 4, 'aO'));
  o.push(`<rect x="0" y="${Y(470)}" width="900" height="30" fill="${SOIL}"/>`);
  o.push(`<path d="M330 ${Y(470)} V${Y(260)} a30 30 0 0 1 60 0 V${Y(470)}" fill="#ffffff" stroke="${NAVY}" stroke-width="3.5"/>`);
  for (const [x, y] of [[374, 274], [368, 300], [376, 320], [344, 330], [374, 345], [370, 365], [370, 390], [346, 405], [376, 410], [376, 440]]) o.push(`<circle cx="${x}" cy="${Y(y)}" r="6" fill="${RUST}"/>`);
  o.push(ln(366, Y(248), 426, Y(222)), t(430, Y(224), 'Auxin made in the tip', { size: 22, weight: 700 }));
  o.push(ln(384, Y(350), 426, Y(350)), t(430, Y(339), 'More auxin on', { size: 22, weight: 700 }), t(430, Y(369), 'the shaded side', { size: 22, weight: 700 }));
  o.push(t(30, Y(639), '2 Shaded cells grow longer', { size: 24, weight: 700 }));
  o.push(sun(60, Y(768)), t(60, Y(826), 'Light', { size: 21, weight: 700, anchor: 'middle' }));
  for (const y of [720, 770, 820]) o.push(ln(108, Y(y), 186, Y(y), C.olive, 4, 'aO'));
  o.push(`<rect x="0" y="${Y(1010)}" width="900" height="30" fill="${SOIL}"/>`);
  // bent shoot: left (lit) edge shorter, right (shaded) edge longer
  o.push(`<path d="M330 ${Y(1010)} V${Y(930)} C330 ${Y(880)} 300 ${Y(860)} 270 ${Y(830)} C240 ${Y(800)} 260 ${Y(770)} 290 ${Y(778)} C320 ${Y(786)} 350 ${Y(820)} 368 ${Y(850)} C384 ${Y(876)} 390 ${Y(900)} 390 ${Y(940)} V${Y(1010)}" fill="#ffffff" stroke="${NAVY}" stroke-width="3.5"/>`);
  for (const [a, b] of [[[287, 848], [323, 803]], [[302, 864], [346, 826]], [[315, 880], [362, 850]], [[324, 898], [376, 880]], [[330, 918], [386, 910]]]) o.push(ln(a[0], Y(a[1]), b[0], Y(b[1]), C.tealDark, 2.5));
  o.push(t(450, Y(759), 'Shoot bends towards light', { size: 23, weight: 700, fill: C.tealDark }));
  o.push(ln(374, Y(862), 444, Y(894)), t(450, Y(878), 'Shaded side:', { size: 22, weight: 700 }), t(450, Y(909), 'cells 0.15 mm', { size: 21 }), t(450, Y(940), '(50% longer)', { size: 21, weight: 700 }));
  o.push(ln(312, Y(894), 174, Y(944)), t(30, Y(960), 'Lit side:', { size: 22, weight: 700 }), t(30, Y(990), 'cells 0.10 mm', { size: 21 }));
  o.push(t(450, Y(1068), 'Auxin collects on the shaded side; it does not move to the light', { size: 20, fill: C.muted, anchor: 'middle' }));
  return S(W, 1040, 'Why a shoot bends to light', o.join('\n'), 'Phototropism, schematic');
}

export const figures = [
  { name: '02-synapse', after: '### Temperature control', svg: synapse(),
    alt: 'A schematic synapse: an impulse in neurone 1 makes vesicles release neurotransmitter into the synaptic gap, the molecules diffuse across, bind receptor proteins on neurone 2 and start a new impulse. Only neurone 1 releases neurotransmitter and only neurone 2 has receptors, so the impulse goes one way.',
    caption: 'Neurotransmitter crosses the gap and binds receptors, so impulses go one way only.' },
  { name: '04-pupil-reflex', after: '### Iris reflex in brief', svg: pupil(),
    alt: 'Two front views of the eye. Bright light: pupil narrows, less light enters. Dim light: pupil widens, more light enters. Further panel: in bright light circular muscles contract and radial relax; in dim light radial contract and circular relax.',
    caption: 'The pupil narrows in bright light and widens in dim light because two sets of iris muscles work against each other.' },
  { name: '05-blood-glucose-feedback', after: '### Worked example 4: an overnight fast', svg: glucose(),
    alt: 'Two loops keep blood glucose near its set point: after a meal insulin makes the liver store glucose as glycogen so glucose falls; between meals glucagon makes the liver release glucose so it rises. The sketch graph uses the lesson example: 5.0 to 8.0 mmol per dm3 in 30 minutes (60% rise) then 5.2 by 120 minutes.',
    caption: 'Each response reverses the change, returning glucose towards the set point.' },
  { name: '06-auxin-phototropism', after: '### IVF (Higher tier only)', svg: auxin(),
    alt: 'Light from one side: auxin made in the tip collects on the shaded side. Auxin stimulates cell elongation, so shaded cells (0.15 mm) grow longer than lit cells (0.10 mm), 50% longer, and the shoot bends towards the light.',
    caption: 'Longer shaded-side cells bend the shoot towards the light.' },
];
