// Board-neutral redraws of nine A-level biology figures (nervous system and muscle) that are shared by
// AQA, OCR, OxfordAQA and Edexcel IAL pages. The old pictures carried board pills ("All boards",
// "Edexcel: roots, grey and white matter", "AQA, OCR, OxfordAQA", "AQA: troponin not required");
// the teaching content and every number are kept, the pills are gone.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-control-and-coordination';
const W = 900;
const RED = '#b5402e', NERVE = '#2e7d9a', PURPLE = '#5b4a8a', LAV = '#ddd3ea';
const SUP = { '+': '⁺', '-': '⁻', '2': '²', '3': '³' };
const sup = (s) => [...s].map((c) => SUP[c]).join('') + ' ';
const ion = (x, y, label, fill, color = C.ink, r = 24) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>` +
  `<text x="${x}" y="${y + 6}" font-size="17" font-weight="700" fill="${color}" text-anchor="middle">${label}</text>`;
const NA = (x, y) => ion(x, y, `Na<tspan font-size="11" dy="-7">+</tspan>`, C.mustard);
const K = (x, y) => ion(x, y, `K<tspan font-size="11" dy="-7">+</tspan>`, C.tealDark, '#ffffff');
const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="5" fill="${C.ink}"/>`;
const leader = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="2"/>` + dot(x2, y2);
const arrowR = (x1, y1, x2, y2, w = 4) => arrow(x1, y1, x2, y2, { color: RED, w, marker: 'ahRr' });
const markers = `<defs><marker id="ahN" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="22" markerHeight="22" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${NERVE}"/></marker>
<marker id="ahRb" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="24" markerHeight="24" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${RED}"/></marker>
<marker id="ahRr" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${RED}"/></marker></defs>`;
const svgM = (w, h, title, body, sub) => svg(w, h, title, markers + body, sub);

// ---------- 1. Reflex arc ----------
function reflexArc() {
  const o = [];
  const dy = -70;
  const Y = (y) => y + dy;
  // stimulus star
  const star = [];
  for (let i = 0; i < 12; i++) {
    const r = i % 2 ? 14 : 34, a = (Math.PI / 6) * i - Math.PI / 2;
    star.push(`${(115 + r * Math.cos(a)).toFixed(1)},${(Y(240) + r * Math.sin(a)).toFixed(1)}`);
  }
  o.push(`<polygon points="${star.join(' ')}" fill="${RED}" stroke="#7a2a1f" stroke-width="2"/>`);
  o.push(t(190, Y(248), 'Stimulus: hot', { size: 21, weight: 700, fill: RED }));
  // receptor in skin
  o.push(`<rect x="40" y="${Y(310)}" width="192" height="42" rx="8" fill="#f0dcb4" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(250, Y(344), 'Receptor in skin', { size: 21, weight: 700, fill: NERVE }));
  // spinal cord
  const cx = 500, cy = Y(650);
  o.push(`<circle cx="${cx}" cy="${cy}" r="190" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`);
  const grey = [
    `<ellipse cx="435" cy="${Y(535)}" rx="28" ry="62"/>`, `<ellipse cx="565" cy="${Y(535)}" rx="28" ry="62"/>`,
    `<rect x="413" y="${Y(595)}" width="174" height="110"/>`,
    `<ellipse cx="425" cy="${Y(745)}" rx="38" ry="48"/>`, `<ellipse cx="575" cy="${Y(745)}" rx="38" ry="48"/>`,
  ];
  o.push(`<g fill="#c4d4da" stroke="${C.ink}" stroke-width="5">${grey.join('')}</g>`);
  o.push(`<g fill="#c4d4da" stroke="none">${grey.join('')}</g>`);
  // sensory neurone
  o.push(path(`M130 ${Y(342)} L170 ${Y(400)} L228 ${Y(420)} L300 ${Y(460)}`, { stroke: NERVE, w: 5 }));
  o.push(`<line x1="300" y1="${Y(460)}" x2="330" y2="${Y(480)}" stroke="${NERVE}" stroke-width="5" marker-end="url(#ahN)"/>`);
  o.push(path(`M330 ${Y(480)} L380 ${Y(560)} L426 ${Y(592)}`, { stroke: NERVE, w: 5 }));
  o.push(`<line x1="380" y1="${Y(560)}" x2="424" y2="${Y(590)}" stroke="${NERVE}" stroke-width="5" marker-end="url(#ahN)"/>`);
  o.push(`<circle cx="130" cy="${Y(330)}" r="14" fill="#d6e7ef" stroke="${NERVE}" stroke-width="3"/>`);
  o.push(`<circle cx="228" cy="${Y(420)}" r="22" fill="#d6e7ef" stroke="${NERVE}" stroke-width="3"/>`);
  // relay neurone and synapses
  o.push(path(`M441 ${Y(603)} L494 ${Y(642)} L446 ${Y(688)}`, { stroke: C.olive, w: 4 }));
  o.push(`<circle cx="494" cy="${Y(642)}" r="22" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>`);
  o.push(`<circle cx="441" cy="${Y(603)}" r="11" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(`<circle cx="446" cy="${Y(688)}" r="11" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`);
  // motor neurone
  o.push(`<line x1="440" y1="${Y(699)}" x2="434" y2="${Y(714)}" stroke="${RED}" stroke-width="4"/>`);
  o.push(path(`M430 ${Y(740)} L370 ${Y(780)} L300 ${Y(860)}`, { stroke: RED, w: 5 }));
  o.push(`<line x1="345" y1="${Y(808)}" x2="300" y2="${Y(860)}" stroke="${RED}" stroke-width="5" marker-end="url(#ahRb)"/>`);
  o.push(path(`M300 ${Y(860)} L210 ${Y(930)} L150 ${Y(978)}`, { stroke: RED, w: 5 }));
  o.push(`<line x1="190" y1="${Y(946)}" x2="150" y2="${Y(978)}" stroke="${RED}" stroke-width="5" marker-end="url(#ahRb)"/>`);
  o.push(`<circle cx="430" cy="${Y(735)}" r="22" fill="#f0cbc3" stroke="${RED}" stroke-width="3"/>`);
  // up to brain
  o.push(arrow(600, Y(488), 600, Y(412), { w: 5 }));
  o.push(t(600, Y(394), 'also up to brain', { size: 19, weight: 700, fill: C.muted, anchor: 'middle' }));
  // effector
  o.push(`<ellipse cx="120" cy="${Y(1050)}" rx="100" ry="42" fill="#ecc8c2" stroke="${RED}" stroke-width="3"/>`);
  for (let x = 70; x <= 190; x += 24) o.push(`<line x1="${x}" y1="${Y(1028)}" x2="${x}" y2="${Y(1072)}" stroke="#b7746a" stroke-width="2.5"/>`);
  o.push(t(40, Y(1130), 'Effector: muscle contracts', { size: 21, weight: 700, fill: RED }));
  // labels
  o.push(leader(228, Y(430), 150, Y(478)));
  o.push(t(40, Y(511), 'Cell body in swelling', { size: 20, weight: 700, fill: NERVE }));
  o.push(t(40, Y(539), 'of dorsal root', { size: 19, fill: NERVE }));
  o.push(t(40, Y(609), 'Sensory neurone', { size: 20, weight: 700, fill: NERVE }));
  o.push(t(316, Y(640), 'Synapse', { size: 19, weight: 700, anchor: 'end' }));
  o.push(`<polyline points="414,${Y(612)} 330,${Y(653)} 414,${Y(682)}" fill="none" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(t(40, Y(789), 'Motor neurone', { size: 20, weight: 700, fill: RED }));
  o.push(t(40, Y(817), 'cell body in cord', { size: 19, fill: RED }));
  o.push(t(300, Y(929), 'Ventral root', { size: 20, weight: 700, fill: C.muted }));
  o.push(leader(655, Y(560), 714, Y(486)));
  o.push(t(726, Y(470), 'White matter', { size: 20, weight: 700 }));
  o.push(t(726, Y(498), '(axons to brain)', { size: 18, fill: C.muted }));
  o.push(leader(516, Y(636), 715, Y(590)));
  o.push(t(726, Y(598), 'Relay neurone', { size: 20, weight: 700, fill: C.olive }));
  o.push(leader(585, Y(750), 715, Y(790)));
  o.push(t(726, Y(797), 'Grey matter', { size: 20, weight: 700 }));
  // reflex time box
  o.push(panel(30, Y(1150), 840, 86, '#ffffff', C.ink));
  o.push(t(W / 2, Y(1184), 'Reflex time: 0.90 m ÷ 50 m/s = 18 ms, plus 2 synapses × 1.0 ms', { size: 19, anchor: 'middle' }));
  o.push(t(W / 2, Y(1219), '= 20 ms in total', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svgM(W, 1200, 'A reflex arc', o.join('\n'), 'Fast, automatic, protective');
}

// ---------- 2. Saltatory conduction ----------
function saltatory() {
  const o = [];
  const dy = -30, Y = (y) => y + dy;
  o.push(t(40, Y(190), 'Non-myelinated axon', { size: 24, weight: 700 }));
  o.push(arrow(718, Y(196), 842, Y(196), { w: 6 }));
  o.push(t(718, Y(182), 'impulse', { size: 19, weight: 700 }));
  // axon tube
  o.push(`<rect x="50" y="${Y(264)}" width="800" height="70" rx="35" fill="#ddebe9" stroke="${C.ink}" stroke-width="3"/>`);
  for (const x of [98, 158, 218, 278, 640, 700, 760, 810]) o.push(t(x, Y(308), '−', { size: 26, weight: 700, fill: C.muted, anchor: 'middle' }));
  o.push(`<rect x="330" y="${Y(264)}" width="90" height="70" fill="#f1cbc4" stroke="${RED}" stroke-width="3"/>`);
  o.push(t(354, Y(308), '+', { size: 26, weight: 700, fill: RED, anchor: 'middle' }));
  o.push(t(394, Y(308), '+', { size: 26, weight: 700, fill: RED, anchor: 'middle' }));
  o.push(`<rect x="500" y="${Y(267)}" width="90" height="64" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="7 5"/>`);
  o.push(arrowR(412, Y(299), 532, Y(299)));
  // local current loop
  o.push(`<polyline points="373,${Y(262)} 373,${Y(209)} 545,${Y(209)} 545,${Y(296)}" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="4 4"/>`);
  o.push(arrowR(430, Y(209), 378, Y(209)));
  o.push(t(460, Y(194), 'local current', { size: 22, weight: 700, fill: RED, anchor: 'middle' }));
  o.push(t(375, Y(371), 'action potential', { size: 22, weight: 700, fill: RED, anchor: 'middle' }));
  o.push(t(545, Y(408), 'next patch depolarises', { size: 19, fill: RED, anchor: 'middle' }));
  o.push(t(40, Y(440), 'Every small patch must depolarise: slow', { size: 20, weight: 700, fill: C.muted }));
  // myelinated
  o.push(t(40, Y(518), 'Myelinated axon', { size: 24, weight: 700 }));
  o.push(`<rect x="50" y="${Y(683)}" width="800" height="34" fill="#ddebe9" stroke="${C.ink}" stroke-width="3"/>`);
  for (const [x, w] of [[50, 166], [244, 222], [494, 222], [742, 108]]) {
    o.push(`<rect x="${x}" y="${Y(652)}" width="${w}" height="30" rx="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
    o.push(`<rect x="${x}" y="${Y(718)}" width="${w}" height="30" rx="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  }
  o.push(`<rect x="216" y="${Y(683)}" width="28" height="34" fill="#f1cbc4" stroke="${RED}" stroke-width="3"/>`);
  o.push(`<rect x="466" y="${Y(681)}" width="28" height="38" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="5 4"/>`);
  o.push(arrowR(242, Y(700), 470, Y(700)));
  o.push(`<polyline points="230,${Y(681)} 230,${Y(618)} 480,${Y(618)} 480,${Y(680)}" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="4 4"/>`);
  o.push(arrowR(330, Y(618), 258, Y(618)));
  o.push(t(355, Y(603), 'local current jumps node to node', { size: 21, weight: 700, fill: RED, anchor: 'middle' }));
  o.push(t(90, Y(568), 'Myelin from Schwann cells: insulator', { size: 19, weight: 700, fill: C.olive }));
  o.push(leader(138, Y(664), 90, Y(585)));
  o.push(leader(730, Y(720), 730, Y(800)));
  o.push(t(730, Y(830), 'Node of Ranvier', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(730, Y(858), 'channels only here', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(t(40, Y(822), 'impulse', { size: 19, weight: 700 }));
  o.push(arrow(40, Y(852), 152, Y(852), { w: 6 }));
  // speed bars (same scale: 70 m/s = 665 px)
  o.push(t(40, Y(924), 'Speed in the lesson example', { size: 20, weight: 700 }));
  o.push(`<rect x="50" y="${Y(946)}" width="19" height="38" fill="${C.muted}"/>`);
  o.push(t(82, Y(976), 'Non-myelinated: 2.0 m/s', { size: 20 }));
  o.push(`<rect x="50" y="${Y(1000)}" width="665" height="40" fill="${C.olive}"/>`);
  o.push(t(62, Y(1029), 'Myelinated: 70 m/s', { size: 21, weight: 700, fill: '#ffffff' }));
  o.push(`<rect x="730" y="${Y(998)}" width="150" height="44" rx="22" fill="#ffffff" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(t(805, Y(1028), '35× faster', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svgM(W, 1050, 'How myelin speeds up impulses', o.join('\n'), 'Local currents; the impulse moves left to right');
}

// ---------- 3. Resting potential ----------
function resting() {
  const o = [];
  o.push(t(870, 198, 'Outside', { size: 25, weight: 700, anchor: 'end' }));
  o.push(t(870, 904, 'Inside axon', { size: 25, weight: 700, anchor: 'end' }));
  // membrane
  o.push(`<rect x="30" y="470" width="840" height="80" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(t(300, 519, 'membrane', { size: 20, weight: 700, fill: C.olive }));
  // pump
  o.push(`<rect x="100" y="440" width="180" height="140" rx="30" fill="#ddebe9" stroke="${C.tealDark}" stroke-width="3"/>`);
  o.push(t(190, 518, 'pump', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  for (const x of [125, 190, 255]) { o.push(arrow(x, 434, x, 392, { w: 5 })); o.push(NA(x, 358)); }
  o.push(t(296, 380, `3 Na${sup('+')}out`, { size: 21, weight: 700 }));
  for (const x of [158, 222]) { o.push(arrow(x, 586, x, 628, { w: 5 })); o.push(K(x, 660)); }
  o.push(t(296, 648, `2 K${sup('+')}in`, { size: 21, weight: 700 }));
  o.push(t(190, 740, 'uses ATP', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  // charges
  for (const x of [60, 340, 640]) o.push(t(x, 436, '+', { size: 30, weight: 700, fill: RED, anchor: 'middle' }));
  for (const x of [60, 330, 640, 850]) o.push(t(x, 610, '−', { size: 30, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  // open K channel
  o.push(`<rect x="484" y="448" width="28" height="124" rx="8" fill="#ddebe9" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(`<rect x="528" y="448" width="28" height="124" rx="8" fill="#ddebe9" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(arrow(520, 612, 520, 404, { color: C.tealDark, w: 7, marker: 'ahT' }));
  o.push(K(520, 365));
  o.push(t(520, 660, `Open K${sup('+')}channels`, { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(520, 688, `K${sup('+')}leaks out fast`, { size: 19, fill: C.tealDark, anchor: 'middle' }));
  // closed Na channel
  o.push(`<rect x="694" y="448" width="36" height="124" rx="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(`<rect x="730" y="448" width="36" height="124" rx="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(`<line x1="704" y1="510" x2="756" y2="510" stroke="${RED}" stroke-width="5"/>`);
  o.push(arrow(730, 348, 730, 436, { color: C.olive, w: 2.5, marker: 'ahO', dash: '6 5' }));
  o.push(t(760, 660, `Closed Na${sup('+')}channels`, { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(760, 688, `little Na${sup('+')}leaks in`, { size: 19, fill: C.olive, anchor: 'middle' }));
  // outside ions
  [[140, 270], [330, 250], [460, 230], [400, 325], [608, 270], [600, 150], [690, 320], [800, 330]].forEach(([x, y]) => o.push(NA(x, y)));
  o.push(K(680, 150));
  // inside ions and proteins
  [[160, 810], [300, 880], [430, 880], [520, 830], [640, 880], [800, 800]].forEach(([x, y]) => o.push(K(x, y)));
  const prot = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="62" ry="27" fill="${LAV}" stroke="${PURPLE}" stroke-width="2.5"/>` +
    t(x, y + 7, 'Protein<tspan font-size="13" dy="-7">−</tspan>', { size: 19, weight: 700, fill: '#3d3266', anchor: 'middle' });
  o.push(prot(400, 770), prot(700, 745));
  o.push(`<rect x="520" y="930" width="350" height="52" rx="26" fill="#ffffff" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(t(695, 965, 'inside = −70 mV', { size: 24, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svgM(W, 1010, 'Resting potential: −70 mV', o.join('\n'), 'Why the inside of the axon is negative');
}

// ---------- 4. Action potential ----------
function actionPotential() {
  const o = [];
  const x0 = 130, x1 = 860, yb = 710;
  const Y = (mv) => 375 - 3.72 * mv;
  o.push(`<rect x="313" y="190" width="108" height="${yb - 190}" fill="#f5e1dc"/>`);
  o.push(`<rect x="421" y="190" width="110" height="${yb - 190}" fill="#e3ecee"/>`);
  o.push(`<rect x="531" y="190" width="109" height="${yb - 190}" fill="#ece8f1"/>`);
  o.push(`<line x1="${x0}" y1="${Y(0)}" x2="${x1}" y2="${Y(0)}" stroke="#b8bfc6" stroke-width="2" stroke-dasharray="5 5"/>`);
  o.push(`<line x1="${x0}" y1="${Y(-55)}" x2="${x1}" y2="${Y(-55)}" stroke="${C.olive}" stroke-width="3" stroke-dasharray="10 6"/>`);
  o.push(t(855, Y(-55) - 10, 'threshold −55 mV', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(arrow(x0, yb, x0, 178, { w: 3.5 }), arrow(x0, yb, x1 + 16, yb, { w: 3.5 }));
  for (const [mv, lab] of [[40, '+40'], [0, '0'], [-55, '−55'], [-70, '−70']]) o.push(t(x0 - 14, Y(mv) + 7, lab, { size: 19, weight: 700, anchor: 'end' }));
  o.push(`<text transform="translate(44 445) rotate(-90)" font-size="20" font-weight="700" fill="${C.ink}" text-anchor="middle">potential (mV)</text>`);
  o.push(t(495, 748, 'time (not to scale)', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(path(`M${x0} ${Y(-70)} L222 ${Y(-70)} C262 ${Y(-70)} 292 ${Y(-62)} 313 ${Y(-55)} C350 ${Y(-30)} 375 ${Y(40)} 403 ${Y(40)} C440 ${Y(40)} 468 ${Y(-50)} 492 ${Y(-75)} C503 ${Y(-81)} 512 ${Y(-80)} 522 ${Y(-80)} C600 ${Y(-77)} 700 ${Y(-71)} ${x1} ${Y(-70)}`, { w: 5 }));
  // stimulus
  o.push(`<polygon points="220,642 209,668 231,668" fill="${C.olive}"/>`);
  o.push(t(234, 690, 'stimulus', { size: 20, weight: 700, fill: C.olive }));
  // phase labels
  o.push(t(352, 282, 'Depolarisation', { size: 20, weight: 700, fill: RED, anchor: 'end' }));
  o.push(t(352, 309, `Na${sup('+')}flood in`, { size: 19, fill: RED, anchor: 'end' }));
  o.push(t(462, 320, 'Repolarisation', { size: 20, weight: 700, fill: NERVE }));
  o.push(t(462, 347, `K${sup('+')}flow out`, { size: 19, fill: NERVE }));
  o.push(t(550, 478, 'Hyperpolarisation', { size: 20, weight: 700, fill: PURPLE }));
  o.push(t(550, 506, `K${sup('+')}channels slow to close`, { size: 19, fill: PURPLE }));
  o.push(leader(604, 520, 540, 664));
  // refractory bracket
  o.push(`<path d="M403 166 V186 M403 176 H640 M640 166 V186" fill="none" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(t(521, 160, 'refractory period', { size: 21, weight: 700, anchor: 'middle' }));
  // channel bars
  o.push(t(130, 781, 'voltage-gated channels open', { size: 18, fill: C.muted }));
  o.push(`<rect x="130" y="790" width="730" height="38" fill="#ebeeee"/><rect x="130" y="840" width="730" height="38" fill="#ebeeee"/>`);
  o.push(`<rect x="285" y="790" width="128" height="38" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(`<rect x="413" y="840" width="210" height="38" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(116, 816, `Na${sup('+')}`, { size: 20, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(t(116, 866, `K${sup('+')}`, { size: 20, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(t(W / 2, 938, 'Refractory 2.5 ms → max 1 ÷ 0.0025 s = 400 impulses per s', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svgM(W, 980, 'The action potential', o.join('\n'), 'Membrane potential (inside relative to outside)');
}

// ---------- 5. Cholinergic synapse ----------
function synapse() {
  const o = [];
  const step = (x, y, n) => `<circle cx="${x}" cy="${y}" r="17" fill="${C.olive}"/>` + t(x, y + 7, n, { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  // presynaptic knob
  o.push(`<rect x="340" y="148" width="100" height="50" fill="#ddebe9" stroke="${C.tealDark}" stroke-width="3"/>`);
  o.push(`<rect x="100" y="190" width="560" height="290" rx="60" fill="#ddebe9" stroke="${C.tealDark}" stroke-width="3"/>`);
  o.push(`<rect x="343" y="186" width="94" height="10" fill="#ddebe9"/>`);
  o.push(arrowR(390, 116, 390, 178));
  o.push(step(450, 156, '1'));
  o.push(t(130, 234, 'Presynaptic knob', { size: 21, weight: 700, fill: C.tealDark }));
  o.push(`<ellipse cx="190" cy="304" rx="55" ry="30" fill="#f3d2bd" stroke="#c0643a" stroke-width="2.5"/>`);
  o.push(`<polyline points="150,308 172,288 192,316 214,290 232,308" fill="none" stroke="#c0643a" stroke-width="2.5"/>`);
  o.push(t(108, 362, 'Mitochondrion', { size: 20, weight: 700, fill: '#c0643a' }));
  o.push(t(150, 392, 'Vesicles of ACh', { size: 20, weight: 700 }));
  const ach = (x, y) => `<circle cx="${x}" cy="${y}" r="7" fill="${C.mustard}" stroke="${C.olive}" stroke-width="1.5"/>`;
  for (const [x, y] of [[190, 435], [285, 442]]) {
    o.push(`<circle cx="${x}" cy="${y}" r="28" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`);
    o.push(ach(x - 9, y - 7), ach(x + 9, y - 7), ach(x, y + 10));
  }
  // fusing vesicle
  o.push(`<path d="M530 480 A30 30 0 0 1 590 480" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(ach(550, 457), ach(570, 457), ach(560, 470));
  o.push(step(560, 404, '3'));
  // Ca channel
  o.push(`<rect x="378" y="462" width="16" height="36" rx="5" fill="#ddebe9" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(`<rect x="404" y="462" width="16" height="36" rx="5" fill="#ddebe9" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  const ca = (x, y) => `<circle cx="${x}" cy="${y}" r="24" fill="#c0643a" stroke="${C.ink}" stroke-width="2"/>` + t(x, y + 6, `Ca<tspan font-size="11" dy="-7">2+</tspan>`, { size: 16, weight: 700, fill: '#ffffff', anchor: 'middle' });
  o.push(arrow(399, 532, 399, 452, { color: '#c0643a', w: 4 }));
  o.push(ca(399, 408), ca(399, 558));
  o.push(step(455, 438, '2'));
  o.push(t(354, 567, `Ca${sup('2+')}channel`, { size: 20, weight: 700, fill: '#c0643a', anchor: 'end' }));
  o.push(t(110, 508, 'Synaptic cleft 20 nm', { size: 20, weight: 700, fill: C.muted }));
  // ACh diffusing
  for (const [x, y] of [[545, 519], [524, 547], [579, 548], [498, 572], [470, 582]]) o.push(ach(x, y));
  // postsynaptic
  o.push(`<rect x="60" y="640" width="780" height="270" fill="#e7eef7" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<rect x="60" y="600" width="780" height="40" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  for (const x of [300, 440]) {
    o.push(`<rect x="${x - 28}" y="588" width="56" height="62" rx="10" fill="#ddebe9" stroke="${C.tealDark}" stroke-width="3"/>`);
    o.push(ach(x, 590));
    o.push(arrow(x, 654, x, 700, { w: 4 }));
    o.push(NA(x, 726));
  }
  o.push(step(370, 726, '4'));
  o.push(t(370, 790, `ACh receptors = Na${sup('+')}channels`, { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  // enzyme
  o.push(`<path d="M800 560 L770 548 A40 40 0 1 1 772 578 Z" fill="#e8c55e" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(step(868, 548, '5'));
  o.push(`<line x1="810" y1="598" x2="810" y2="672" stroke="${C.ink}" stroke-width="2"/>` + dot(810, 672));
  o.push(t(820, 704, 'Acetylcholinesterase', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(t(820, 760, 'Postsynaptic neurone', { size: 20, weight: 700, anchor: 'end' }));
  // choline back
  o.push(arrow(636, 584, 636, 432, { color: C.olive, w: 4, marker: 'ahO', dash: '10 7' }));
  o.push(step(690, 438, '6'));
  o.push(t(656, 501, 'choline back in', { size: 20, weight: 700, fill: C.olive }));
  // key
  const keys = ['Action potential reaches the knob', `Ca${sup('2+')}enters through channels`, 'Vesicles fuse: ACh released', `ACh binds: Na${sup('+')}in, depolarises`, 'Enzyme splits ACh', 'Choline taken back in'];
  keys.forEach((k, i) => {
    const x = i % 2 ? 498 : 58, y = 940 + Math.floor(i / 2) * 50;
    o.push(step(x, y, String(i + 1)));
    o.push(t(x + 28, y + 7, k, { size: 20 }));
  });
  return svgM(W, 1090, 'Cholinergic synapse', o.join('\n'), 'ACh = acetylcholine');
}

// ---------- 6. Summation ----------
function summation() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  o.push(t(210, Y(204), 'Spatial', { size: 24, weight: 700, anchor: 'middle' }));
  o.push(t(210, Y(233), '5 neurones at once', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(t(680, Y(204), 'Temporal', { size: 24, weight: 700, anchor: 'middle' }));
  o.push(t(680, Y(233), '1 neurone, 5 fast impulses', { size: 19, fill: C.muted, anchor: 'middle' }));
  const post = (x) => `<circle cx="${x}" cy="${Y(340)}" r="50" fill="#e7eef7" stroke="${C.ink}" stroke-width="3"/>`;
  for (let i = 0; i < 5; i++) {
    const y = Y(270 + i * 35);
    o.push(`<line x1="100" y1="${y}" x2="276" y2="${Y(325 + i * 8)}" stroke="${NERVE}" stroke-width="3"/>`);
    o.push(`<circle cx="100" cy="${y}" r="16" fill="#d6e7ef" stroke="${NERVE}" stroke-width="2.5"/>`);
  }
  o.push(post(322));
  o.push(tl(320, Y(436), ['Postsynaptic', 'neurone'], { size: 19, weight: 700, anchor: 'middle' }, 26));
  o.push(`<line x1="450" y1="${Y(340)}" x2="716" y2="${Y(340)}" stroke="${NERVE}" stroke-width="3"/>`);
  for (const x of [462, 484, 506, 528, 546]) o.push(`<line x1="${x}" y1="${Y(340)}" x2="${x}" y2="${Y(316)}" stroke="${RED}" stroke-width="3"/>`);
  o.push(`<circle cx="580" cy="${Y(340)}" r="24" fill="#d6e7ef" stroke="${NERVE}" stroke-width="2.5"/>`);
  o.push(post(766));
  o.push(tl(766, Y(436), ['Postsynaptic', 'neurone'], { size: 19, weight: 700, anchor: 'middle' }, 26));
  // graph
  const gx = 130, gy = Y(890), Yv = (mv) => Y(823) - (mv + 70) * 13.2;
  const X = (n) => gx + n * 120;
  o.push(arrow(gx, gy, gx, Y(540)), arrow(gx, gy, 868, gy));
  o.push(`<line x1="${gx}" y1="${Yv(-55)}" x2="852" y2="${Yv(-55)}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="9 6"/>`);
  o.push(t(140, Yv(-55) + 28, 'threshold', { size: 19, weight: 700, fill: C.olive }));
  for (const mv of [-55, -58, -61, -64, -67, -70]) o.push(t(gx - 12, Yv(mv) + 7, `−${-mv}`, { size: 19, weight: 700, anchor: 'end' }));
  for (let n = 1; n <= 5; n++) o.push(t(X(n), gy + 34, String(n), { size: 19, weight: 700, anchor: 'middle' }));
  o.push(t(490, gy + 74, 'impulse number (no decay assumed)', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(`<text transform="translate(38 ${Y(715)}) rotate(-90)" font-size="20" font-weight="700" fill="${C.ink}" text-anchor="middle">potential (mV)</text>`);
  let d = `M${gx} ${Yv(-70)}`;
  for (let n = 1; n <= 5; n++) d += ` H${X(n)} V${Yv(-70 + 3 * n)}`;
  o.push(path(d, { w: 5 }));
  o.push(path(`M${X(5)} ${Yv(-55)} L772 ${Yv(-55) - 58} L790 ${Yv(-55)} L818 ${Yv(-64)} L850 ${Yv(-70)}`, { stroke: RED, w: 4 }));
  o.push(t(845, Y(556), 'action potential', { size: 20, weight: 700, fill: RED, anchor: 'end' }));
  o.push(t(150, Y(595), '5 × 3 mV = 15 mV', { size: 22, weight: 700, fill: C.tealDark }));
  o.push(t(150, Y(718), '1 impulse:', { size: 19, weight: 700 }));
  o.push(tl(150, Y(746), ['−67 mV, below', 'threshold'], { size: 19 }, 24));
  return svgM(W, 970, 'Summation', o.join('\n'), 'Each impulse adds +3 mV; threshold needs +15 mV');
}

// ---------- 7. Pacinian corpuscle ----------
function pacinian() {
  const o = [];
  const dy = -30, Y = (y) => y + dy;
  o.push(t(210, Y(191), 'Pressure', { size: 22, weight: 700, fill: RED, anchor: 'middle' }));
  for (const x of [150, 210, 270]) o.push(arrow(x, Y(204), x, Y(270), { color: RED, w: 6, marker: 'ahRr' }));
  const cx = 210, cy = Y(410);
  [[130, 102, C.sand], [104, 80, '#ffffff'], [78, 60, C.sand], [52, 42, '#ffffff']].forEach(([rx, ry, f]) =>
    o.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${f === C.sand ? '#f0e2bf' : f}" stroke="${C.ink}" stroke-width="3"/>`));
  o.push(`<line x1="210" y1="${Y(420)}" x2="210" y2="${Y(545)}" stroke="${NERVE}" stroke-width="7"/>`);
  o.push(`<ellipse cx="210" cy="${Y(410)}" rx="30" ry="20" fill="#d6e7ef" stroke="${NERVE}" stroke-width="3"/>`);
  o.push(leader(124, Y(462), 75, Y(570)));
  o.push(t(30, Y(589), 'Lamellae (layers)', { size: 19, weight: 700 }));
  o.push(leader(300, Y(436), 340, Y(568)));
  o.push(t(290, Y(589), 'Gel between layers', { size: 19 }));
  o.push(leader(214, Y(534), 262, Y(644)));
  o.push(t(30, Y(664), 'Sensory neurone ending (centre)', { size: 20, weight: 700, fill: NERVE }));
  // channel panels
  o.push(t(670, Y(164), 'No pressure: channel narrow', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(`<rect x="480" y="${Y(250)}" width="188" height="34" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(`<rect x="672" y="${Y(250)}" width="188" height="34" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(`<line x1="648" y1="${Y(267)}" x2="692" y2="${Y(267)}" stroke="${RED}" stroke-width="4"/>`);
  o.push(NA(670, Y(225)));
  o.push(t(670, Y(334), 'Pressure: channel stretched wide', { size: 19, weight: 700, fill: RED, anchor: 'middle' }));
  o.push(`<rect x="480" y="${Y(420)}" width="160" height="34" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(`<rect x="700" y="${Y(420)}" width="160" height="34" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(arrowR(560, Y(437), 496, Y(437)), arrowR(780, Y(437), 844, Y(437)));
  o.push(NA(670, Y(376)));
  o.push(arrow(670, Y(400), 670, Y(482), { w: 4 }));
  o.push(NA(670, Y(520)));
  o.push(t(700, Y(608), `Stretch-mediated Na${sup('+')}channel`, { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  // bar chart
  o.push(t(30, Y(722), 'Depolarisation (generator potential)', { size: 21, weight: 700 }));
  const gx = 130, gy = Y(1000), sy = (mv) => gy - mv * 12;
  o.push(arrow(gx, gy, gx, Y(748)), arrow(gx, gy, 846, gy));
  for (const v of [0, 5, 10, 15, 20]) o.push(t(gx - 12, sy(v) + 7, String(v), { size: 19, weight: 700, anchor: 'end' }));
  o.push(`<text transform="translate(40 ${Y(880)}) rotate(-90)" font-size="20" font-weight="700" fill="${C.ink}" text-anchor="middle">mV</text>`);
  o.push(`<line x1="${gx}" y1="${sy(15)}" x2="826" y2="${sy(15)}" stroke="${C.olive}" stroke-width="3" stroke-dasharray="10 6"/>`);
  o.push(t(145, sy(15) - 12, '15 mV needed', { size: 19, weight: 700, fill: C.olive }));
  [[250, 6, '0.5 kPa'], [470, 12, '1.0 kPa'], [690, 18, '1.5 kPa']].forEach(([x, v, lab]) => {
    const hit = v >= 15;
    o.push(`<rect x="${x - 60}" y="${sy(v)}" width="120" height="${v * 12}" fill="${hit ? RED : '#8aa6b8'}" stroke="${C.ink}" stroke-width="2.5"/>`);
    o.push(t(x, sy(v) - 12, `+${v}`, { size: 20, weight: 700, fill: hit ? RED : C.ink, anchor: 'middle' }));
    o.push(t(x, gy + 34, lab, { size: 19, weight: 700, anchor: 'middle' }));
  });
  o.push(`<rect x="130" y="${Y(1071)}" width="22" height="22" fill="#8aa6b8" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(t(162, Y(1089), 'too small: no impulse', { size: 19 }));
  o.push(`<rect x="470" y="${Y(1071)}" width="22" height="22" fill="${RED}" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(t(502, Y(1089), 'threshold: action potential', { size: 19 }));
  return svgM(W, 1100, 'From pressure to impulse', o.join('\n'), 'Pacinian corpuscle: a pressure receptor');
}

// ---------- 8. Sarcomere ----------
function sarcomere() {
  const o = [];
  const um = 280, mid = 450, ACT = '#2f8a80', MY = C.mustard;
  o.push(`<line x1="330" y1="134" x2="378" y2="134" stroke="${ACT}" stroke-width="8" stroke-linecap="round"/>`);
  o.push(t(390, 141, 'Actin (thin)', { size: 19 }));
  o.push(`<line x1="578" y1="134" x2="626" y2="134" stroke="${MY}" stroke-width="12" stroke-linecap="round"/>`);
  o.push(t(640, 141, 'Myosin (thick)', { size: 19 }));
  const draw = (y0, len, label, sub) => {
    const half = (len * um) / 2, zl = mid - half, zr = mid + half;
    const aHalf = (1.6 * um) / 2, actinLen = 1.0 * um; // actin length from Z line (relaxed H zone 0.5 µm)
    o.push(`<path d="M${zl} ${y0 - 11} V${y0 + 11} M${zl} ${y0} H${zr} M${zr} ${y0 - 11} V${y0 + 11}" fill="none" stroke="${C.ink}" stroke-width="3"/>`);
    o.push(t(mid, y0 - 14, label, { size: 21, weight: 700, anchor: 'middle' }));
    for (const x of [zl, zr, mid]) o.push(t(x, y0 + 40, x === mid ? 'M' : 'Z', { size: 20, weight: 700, anchor: 'middle' }));
    o.push(`<rect x="${mid - aHalf}" y="${y0 + 58}" width="${2 * aHalf}" height="190" fill="#e2e7e7"/>`);
    for (const ay of [y0 + 82, y0 + 152, y0 + 222]) {
      o.push(`<line x1="${zl}" y1="${ay}" x2="${Math.min(zl + actinLen, mid)}" y2="${ay}" stroke="${ACT}" stroke-width="8" stroke-linecap="round"/>`);
      o.push(`<line x1="${Math.max(zr - actinLen, mid)}" y1="${ay}" x2="${zr}" y2="${ay}" stroke="${ACT}" stroke-width="8" stroke-linecap="round"/>`);
    }
    for (const my of [y0 + 117, y0 + 187]) {
      o.push(`<rect x="${mid - aHalf}" y="${my - 11}" width="${2 * aHalf}" height="22" rx="6" fill="${MY}" stroke="${C.olive}" stroke-width="2"/>`);
      for (let x = mid - aHalf + 16; x < mid - 24; x += 26) o.push(`<path d="M${x} ${my - 10} l8 -14 M${x} ${my + 10} l8 14" stroke="#c0643a" stroke-width="2"/>`);
      for (let x = mid + aHalf - 16; x > mid + 24; x -= 26) o.push(`<path d="M${x} ${my - 10} l-8 -14 M${x} ${my + 10} l-8 14" stroke="#c0643a" stroke-width="2"/>`);
    }
    o.push(`<line x1="${mid}" y1="${y0 + 92}" x2="${mid}" y2="${y0 + 212}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="6 5"/>`);
    o.push(`<rect x="${zl - 5}" y="${y0 + 52}" width="10" height="200" fill="${C.ink}"/><rect x="${zr - 5}" y="${y0 + 52}" width="10" height="200" fill="${C.ink}"/>`);
    const by = y0 + 277;
    o.push(`<line x1="${zl}" y1="${by}" x2="${mid - aHalf}" y2="${by}" stroke="${NERVE}" stroke-width="4"/>`);
    o.push(`<line x1="${mid + aHalf}" y1="${by}" x2="${zr}" y2="${by}" stroke="${NERVE}" stroke-width="4"/>`);
    o.push(`<line x1="${mid - aHalf}" y1="${by}" x2="${mid + aHalf}" y2="${by}" stroke="${RED}" stroke-width="4"/>`);
    for (const x of [zl, zr]) o.push(`<line x1="${x}" y1="${by - 8}" x2="${x}" y2="${by + 8}" stroke="${NERVE}" stroke-width="3"/>`);
    for (const x of [mid - aHalf, mid + aHalf]) o.push(`<line x1="${x}" y1="${by - 8}" x2="${x}" y2="${by + 8}" stroke="${RED}" stroke-width="3"/>`);
    o.push(t((zl + mid - aHalf) / 2, by + 30, 'I', { size: 20, weight: 700, fill: NERVE, anchor: 'middle' }));
    o.push(t((zr + mid + aHalf) / 2, by + 30, 'I', { size: 20, weight: 700, fill: NERVE, anchor: 'middle' }));
    o.push(t(mid, by + 30, 'A band 1.6 µm', { size: 22, weight: 700, fill: RED, anchor: 'middle' }));
    o.push(t(mid, by + 63, sub, { size: 19, fill: C.muted, anchor: 'middle' }));
  };
  o.push(t(40, 188, 'Relaxed', { size: 26, weight: 700 }));
  draw(258, 2.5, 'Sarcomere 2.5 µm', 'I band 0.9 µm, H zone 0.5 µm');
  o.push(t(40, 618, 'Contracted', { size: 26, weight: 700 }));
  const y0 = 688;
  draw(y0, 2.0, 'Sarcomere 2.0 µm', 'I band 0.4 µm, H zone 0 (gone)');
  // old Z positions dashed, arrows
  for (const x of [100, 800]) o.push(`<line x1="${x}" y1="${y0 + 30}" x2="${x}" y2="${y0 + 192}" stroke="${C.muted}" stroke-width="2.5" stroke-dasharray="9 7"/>`);
  o.push(arrow(102, y0 + 212, 158, y0 + 212, { w: 4 }), arrow(798, y0 + 212, 742, y0 + 212, { w: 4 }));
  o.push(tl(100, y0 + 246, ['Z lines', 'move in'], { size: 19, weight: 700, anchor: 'middle' }, 26));
  o.push(panel(30, 1056, 840, 90, '#ffffff', C.ink));
  o.push(t(W / 2, 1092, 'Sarcomere 2.5 → 2.0 µm: 20% shorter', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(W / 2, 1124, 'A band stays 1.6 µm: filaments slide, they do not shorten', { size: 18, anchor: 'middle' }));
  return svgM(W, 1170, 'A sarcomere shortens', o.join('\n'), 'Drawn to scale: 1 µm = 280 px');
}

// ---------- 9. Cross-bridge cycle ----------
function crossBridge() {
  const o = [];
  const ACT = '#2f8a80', TROP = '#6f7f2a', TN = '#6a59a8', CA = '#c0643a';
  // legend
  const ly1 = 146, ly2 = 188;
  o.push(`<rect x="30" y="${ly1 - 10}" width="40" height="20" rx="6" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2"/>`, t(82, ly1 + 7, 'Myosin', { size: 19 }));
  o.push(`<circle cx="268" cy="${ly1}" r="10" fill="${ACT}" stroke="${C.ink}" stroke-width="1.5"/><circle cx="288" cy="${ly1}" r="10" fill="${ACT}" stroke="${C.ink}" stroke-width="1.5"/>`, t(312, ly1 + 7, 'Actin', { size: 19 }));
  o.push(`<line x1="478" y1="${ly1}" x2="520" y2="${ly1}" stroke="${TROP}" stroke-width="5"/>`, t(532, ly1 + 7, 'Tropomyosin', { size: 19 }));
  o.push(`<circle cx="50" cy="${ly2}" r="9" fill="${TN}" stroke="${C.ink}" stroke-width="1.5"/>`, t(82, ly2 + 7, 'Troponin', { size: 19 }));
  o.push(`<rect x="272" y="${ly2 - 8}" width="16" height="16" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`, t(312, ly2 + 7, 'Binding site', { size: 19 }));
  o.push(`<circle cx="500" cy="${ly2}" r="11" fill="${CA}" stroke="${C.ink}" stroke-width="1.5"/>`, t(532, ly2 + 7, `Ca${sup('2+')}`, { size: 19 }));
  const caBall = (x, y) => `<circle cx="${x}" cy="${y}" r="22" fill="${CA}" stroke="${C.ink}" stroke-width="2"/>` + t(x, y + 6, `Ca<tspan font-size="11" dy="-7">2+</tspan>`, { size: 16, weight: 700, fill: '#ffffff', anchor: 'middle' });
  const stage = (y0, s) => {
    o.push(`<line x1="30" y1="${y0}" x2="870" y2="${y0}" stroke="#c9d3d3" stroke-width="2"/>`);
    o.push(`<rect x="40" y="${y0 + 12}" width="450" height="24" rx="6" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2"/>`);
    const ay = y0 + 130;
    // tropomyosin line: above (blocking) at rest, below otherwise
    const tropY = s.rest ? ay - 10 : ay + 20;
    const sites = [84, 156, 228, 300, 372, 444];
    if (s.rest) {
      for (let x = 60; x <= 492; x += 24) o.push(`<circle cx="${x}" cy="${ay + 15}" r="10" fill="${ACT}" stroke="${C.ink}" stroke-width="1.5"/>`);
      for (const x of sites) o.push(`<rect x="${x - 8}" y="${ay - 6}" width="16" height="16" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`);
      o.push(`<line x1="34" y1="${tropY}" x2="498" y2="${tropY}" stroke="${TROP}" stroke-width="6"/>`);
      for (const x of [120, 264, 408]) o.push(`<circle cx="${x}" cy="${ay - 23}" r="9" fill="${TN}" stroke="${C.ink}" stroke-width="1.5"/>`);
    } else {
      o.push(`<line x1="34" y1="${tropY}" x2="498" y2="${tropY}" stroke="${TROP}" stroke-width="6"/>`);
      for (let x = 44 + s.shift; x <= 492; x += 24) o.push(`<circle cx="${x}" cy="${ay}" r="10" fill="${ACT}" stroke="${C.ink}" stroke-width="1.5"/>`);
      for (const x of sites) o.push(`<rect x="${x - 8 - (s.shift ? 40 : 0)}" y="${ay - 23}" width="16" height="16" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`);
      for (const x of [120, 408]) o.push(`<circle cx="${x - (s.shift ? 40 : 0)}" cy="${tropY + 3}" r="9" fill="${TN}" stroke="${C.ink}" stroke-width="1.5"/>`);
      o.push(caBall(s.shift ? 218 : 262, tropY + 3));
    }
    // myosin head
    const [hx, hy, nx] = s.head;
    o.push(`<line x1="300" y1="${y0 + 36}" x2="${nx}" y2="${y0 + hy - 30}" stroke="${C.olive}" stroke-width="5"/>`);
    o.push(`<ellipse cx="${hx}" cy="${y0 + hy}" rx="18" ry="30" fill="#f4dc78" stroke="${C.olive}" stroke-width="2.5"${s.tilt ? ` transform="rotate(${s.tilt} ${hx} ${y0 + hy})"` : ''}/>`);
    if (s.tag) o.push(t(s.tag[0], y0 + s.tag[1], s.tag[2], { size: 20, weight: 700, fill: s.tag[3] || C.ink }));
    if (s.arrow) o.push(arrowR(470, y0 + 94, 396, y0 + 94, 4));
    o.push(t(520, y0 + 78, s.h, { size: 20, weight: 700 }));
    o.push(tl(520, y0 + 106, s.lines, { size: 20 }, 26));
  };
  const H = 190, y = 226;
  stage(y, { rest: true, head: [300, 94, 300], tag: [336, 82, 'ADP + Pi'], h: 'Rest: tropomyosin', lines: ['blocks the binding sites'] });
  stage(y + H, { head: [300, 94, 300], shift: 0, tag: [336, 82, 'ADP + Pi'], h: `Ca${sup('2+')}binds troponin,`, lines: ['tropomyosin moves aside:', 'head binds = cross-bridge'] });
  stage(y + 2 * H, { head: [270, 90, 284], tilt: 30, shift: 0, tag: [308, 74, 'ADP + Pi released'], arrow: true, h: 'Power stroke: head tilts,', lines: ['actin slides toward M line'] });
  stage(y + 3 * H, { head: [270, 78, 284], tilt: 30, shift: 0, tag: [308, 82, 'ATP', RED], h: 'ATP binds:', lines: ['head detaches from actin'] });
  stage(y + 4 * H, { head: [300, 84, 300], shift: 0, tag: [336, 76, 'ADP + Pi'], h: 'ATP hydrolysed: head', lines: ['reset, ready to bind again'] });
  o.push(t(W / 2, y + 5 * H + 18, `cycle repeats while Ca${sup('2+')}and ATP are available`, { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svgM(W, y + 5 * H + 50, 'The cross-bridge cycle', o.join('\n'), 'Sliding filaments: one cycle, repeated');
}

export const figures = [
  { name: '01-reflex-arc', after: '### Myelinated and non-myelinated', svg: reflexArc(),
    alt: 'A cross-section of the spinal cord shows the reflex pathway from a hot stimulus. The receptor excites a sensory neurone whose cell body lies in the dorsal root swelling; it synapses with a relay neurone in the grey matter, which synapses with a motor neurone leaving by the ventral root to a muscle. Impulses also pass up the white matter to the brain. The lesson example gives a 20 ms reflex time.',
    caption: 'The three-neurone reflex arc: receptor, sensory, relay and motor neurones, effector, with the spinal cord roots and grey and white matter.' },
  { name: '02-saltatory-conduction', after: '### Answers', svg: saltatory(),
    alt: 'Two axons are compared. In the non-myelinated axon every patch of membrane depolarises in turn, with local current flowing to the next patch. In the myelinated axon, Schwann cell myelin insulates the axon so the local current runs from node of Ranvier to node and the impulse jumps between nodes. In the lesson example the myelinated axon conducts at 70 m/s and the non-myelinated at 2.0 m/s, 35 times slower.',
    caption: 'Myelin makes the action potential jump from node to node, so conduction is much faster.' },
  { name: '03-resting-potential', after: '### Resting potential', svg: resting(),
    alt: 'A membrane separates the outside above from the inside of the axon below. A sodium-potassium pump moves 3 Na+ out for every 2 K+ in, using ATP. Open K+ channels let K+ diffuse out quickly while Na+ channels are mostly closed, and negatively charged proteins stay inside. The inside is therefore negative, about -70 mV.',
    caption: 'The pump, leaky K+ channels and trapped negative proteins make the inside of the axon about -70 mV.' },
  { name: '04-action-potential', after: '### Action potential', svg: actionPotential(),
    alt: 'A graph of membrane potential against time rests at -70 mV, depolarises past the -55 mV threshold to +40 mV, repolarises as K+ leaves, dips below -70 mV (hyperpolarisation) and returns to rest. Bars show Na+ channels open on the rising phase and K+ channels open on the falling phase. A 2.5 ms refractory period limits the frequency to 400 impulses per second.',
    caption: 'Membrane potential during one action potential, with channel activity and the refractory period.' },
  { name: '05-cholinergic-synapse', after: '### Cholinergic synapse in order', svg: synapse(),
    alt: 'A presynaptic knob sits above a postsynaptic neurone with a 20 nm cleft between. An action potential opens Ca2+ channels, Ca2+ enters and vesicles release acetylcholine by exocytosis. ACh binds receptors that are Na+ channels, so Na+ enters and the membrane depolarises. Acetylcholinesterase splits ACh and choline is taken back in. Receptors are only on the postsynaptic side, so transmission is one way.',
    caption: 'The six steps of transmission across a cholinergic synapse.' },
  { name: '06-summation', after: '### Cholinergic synapse in order', svg: summation(),
    alt: 'Two small diagrams show spatial summation (five neurones at once) and temporal summation (one neurone firing five times quickly). A staircase graph rises from -70 mV by 3 mV per impulse to the -55 mV threshold on the fifth impulse, where an action potential starts. One impulse alone gives -67 mV, below threshold. No decay is assumed, as in the lesson example.',
    caption: 'Small depolarisations add up to reach threshold: 5 x 3 mV = 15 mV.' },
  { name: '07-pacinian-corpuscle', after: '### Resting potential', svg: pacinian(),
    alt: 'A Pacinian corpuscle has concentric lamellae separated by gel, with a sensory neurone ending at the centre. Pressure stretches the membrane and widens stretch-mediated Na+ channels, so Na+ enters and the membrane depolarises: the generator potential. In the lesson example pressures of 0.5, 1.0 and 1.5 kPa give 6, 12 and 18 mV; only 1.5 kPa passes the 15 mV needed to reach threshold and fire an action potential.',
    caption: 'Pressure opens stretch-mediated Na+ channels; only a generator potential reaching threshold fires an impulse.' },
  { name: '08-sarcomere', after: '### Answers', svg: sarcomere(),
    alt: 'Two sarcomeres are drawn to the same scale (1 um = 280 px) with actin attached to Z lines and myosin in the middle. Relaxed, the sarcomere is 2.5 um: A band 1.6, I band 0.9 and H zone 0.5 um. Contracted, it is 2.0 um (20 percent shorter): I band 0.4 um, H zone gone, but the A band stays 1.6 um because the filaments slide rather than shorten.',
    caption: 'Sarcomere shortening drawn to scale: the I band and H zone shrink, the A band does not.' },
  { name: '09-cross-bridge-cycle', after: '## 7.11 Sliding filament theory in steps', svg: crossBridge(),
    alt: 'Five stages show a myosin head and an actin filament with tropomyosin and troponin. At rest tropomyosin blocks the binding sites. Ca2+ binds troponin, tropomyosin moves aside and the head binds actin. The head tilts in the power stroke, pulling actin toward the M line and releasing ADP and Pi. ATP binds and the head detaches; hydrolysis of ATP resets it.',
    caption: 'The cross-bridge cycle: calcium, binding, power stroke, ATP detachment and reset.' },
];
