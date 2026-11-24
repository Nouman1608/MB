// Board-neutral redraws of seven GCSE-level "transport in animals" pictures used on AQA and OCR
// GCSE pages. Same content as before; every "Extended" tier pill is gone and the gold
// "Extended label" styling on heart labels is now ordinary labelling.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-transport-in-animals';
const W = 900;
const DEOX = C.teal, OX = '#f2cdb4', WALL = '#f2e7b8', LUMEN = '#fbe7df', CELL = '#f2c9b0', CELLE = '#b5602e';

const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const circ = (x, y, r, fill, edge = C.ink, w = 2.5) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${w}"/>`;
const rect = (x, y, w, h, fill, rx = 14, edge = C.ink, sw = 3) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const lead = (x1, y1, x2, y2) => line(x1, y1, x2, y2, { w: 2.5 }) + circ(x2, y2, 4.5, C.ink, C.ink, 1);
const num = (x, y, n) => circ(x, y, 19, C.ink, C.ink, 1) + t(x, y + 7, String(n), { size: 20, weight: 700, fill: '#fff', anchor: 'middle' });
const divider = (y) => line(30, y, 870, y, { color: C.panelEdge, w: 2.5 });
const rbc = (x, y, r = 14) => circ(x, y, r, CELL, CELLE, 3) + circ(x, y, r * 0.45, '#fbe6dc', '#fbe6dc', 1);

// ---------- 1. Single and double circulation ----------
function circulation() {
  const out = [];
  out.push(t(W / 2, 168, 'Fish: single circulation', { size: 26, weight: 700, anchor: 'middle' }));
  out.push(rect(60, 318, 180, 110, '#fff'), t(150, 382, 'Heart', { size: 23, weight: 700, anchor: 'middle' }));
  out.push(rect(360, 222, 180, 72, C.tealLight), t(450, 267, 'Gills', { size: 23, weight: 700, anchor: 'middle' }));
  out.push(rect(660, 318, 180, 110, C.cream), t(750, 382, 'Body', { size: 23, weight: 700, anchor: 'middle' }));
  out.push(path('M150 318 V258 H340', { stroke: C.tealDark, w: 4 }), arrow(330, 258, 352, 258, { color: C.tealDark, marker: 'ahT', w: 4 }));
  out.push(path('M540 258 H750 V300', { stroke: C.rust, w: 4 }), arrow(750, 290, 750, 314, { color: C.rust, marker: 'ahR', w: 4 }));
  out.push(path('M750 428 V494 H150 V450', { stroke: C.tealDark, w: 4 }), arrow(150, 460, 150, 434, { color: C.tealDark, marker: 'ahT', w: 4 }));
  out.push(tl(W / 2, 334, ['Pressure drops in the gills,', 'so blood reaches body slowly'], { size: 20, anchor: 'middle' }, 28));
  out.push(t(W / 2, 540, 'Heart is passed once per circuit', { size: 21, weight: 700, anchor: 'middle' }));
  out.push(divider(592));
  out.push(t(W / 2, 644, 'Mammal: double circulation', { size: 26, weight: 700, anchor: 'middle' }));
  out.push(rect(250, 694, 400, 76, C.tealLight), t(450, 741, 'Lungs', { size: 23, weight: 700, anchor: 'middle' }));
  out.push(rect(250, 856, 198, 136, '#b5d3cf'), rect(452, 856, 198, 136, OX));
  out.push(tl(349, 916, ['Right side', 'of heart'], { size: 21, weight: 700, anchor: 'middle' }, 30));
  out.push(tl(551, 916, ['Left side', 'of heart'], { size: 21, weight: 700, anchor: 'middle' }, 30));
  out.push(rect(250, 1066, 400, 76, C.cream), t(450, 1113, 'Body organs', { size: 23, weight: 700, anchor: 'middle' }));
  out.push(arrow(330, 854, 330, 774, { color: C.tealDark, marker: 'ahT', w: 4 }), arrow(570, 772, 570, 852, { color: C.rust, marker: 'ahR', w: 4 }));
  out.push(arrow(330, 1064, 330, 996, { color: C.tealDark, marker: 'ahT', w: 4 }), arrow(570, 994, 570, 1062, { color: C.rust, marker: 'ahR', w: 4 }));
  out.push(t(300, 802, 'Pulmonary artery', { size: 20, weight: 700, anchor: 'end' }), t(600, 802, 'Pulmonary vein', { size: 20, weight: 700 }));
  out.push(tl(450, 806, ['Pulmonary', 'circulation'], { size: 19, fill: C.muted, anchor: 'middle' }, 26));
  out.push(t(300, 1010, 'Vena cava', { size: 20, weight: 700, anchor: 'end' }), t(600, 1010, 'Aorta', { size: 20, weight: 700 }), t(600, 1038, 'high pressure', { size: 19 }));
  out.push(tl(450, 1022, ['Systemic', 'circulation'], { size: 19, fill: C.muted, anchor: 'middle' }, 26));
  out.push(t(W / 2, 1192, 'Passes through the heart twice per circuit', { size: 21, weight: 700, anchor: 'middle' }));
  out.push(line(60, 1236, 130, 1236, { color: C.rust, w: 6 }), t(146, 1243, 'oxygenated blood', { size: 20 }));
  out.push(line(480, 1236, 550, 1236, { color: C.tealDark, w: 6 }), t(566, 1243, 'deoxygenated blood', { size: 20 }));
  return svg(W, 1275, 'Single and double circulation', out.join('\n'), 'Schematic, not to scale');
}

// ---------- 2. Heart structure ----------
function heartStructure() {
  const out = [];
  // vessels
  out.push(rect(316, 214, 50, 140, DEOX, 0), rect(408, 150, 36, 386, DEOX, 0));
  out.push(rect(456, 150, 36, 386, OX, 0), rect(538, 214, 50, 140, OX, 0));
  // heart body
  out.push(`<path d="M270 360 Q270 300 340 300 H560 Q632 300 632 360 V600 Q632 760 450 880 Q270 760 270 600 Z" fill="${WALL}" stroke="${C.ink}" stroke-width="3.5"/>`);
  out.push(rect(316, 280, 50, 70, DEOX, 0, DEOX, 0), rect(538, 280, 50, 70, OX, 0, OX, 0));
  out.push(line(316, 214, 316, 344, { w: 3 }), line(366, 214, 366, 344, { w: 3 }), line(538, 214, 538, 344, { w: 3 }), line(588, 214, 588, 344, { w: 3 }));
  out.push(rect(408, 300, 36, 236, DEOX, 0, C.ink, 3), rect(456, 300, 36, 236, OX, 0, C.ink, 3));
  // chambers
  out.push(rect(290, 344, 110, 160, DEOX, 22), rect(502, 344, 108, 160, OX, 22));
  out.push(`<path d="M292 536 H438 V820 Q330 760 292 600 Z" fill="${DEOX}" stroke="${C.ink}" stroke-width="3"/>`);
  out.push(`<path d="M462 536 H578 V630 Q560 760 462 812 Z" fill="${OX}" stroke="${C.ink}" stroke-width="3"/>`);
  out.push(rect(438, 520, 24, 306, WALL, 0, C.ink, 3));
  out.push(tl(345, 410, ['Right', 'atrium'], { size: 21, weight: 700, anchor: 'middle' }, 28));
  out.push(tl(556, 410, ['Left', 'atrium'], { size: 21, weight: 700, anchor: 'middle' }, 28));
  out.push(tl(372, 640, ['Right', 'ventricle'], { size: 21, weight: 700, anchor: 'middle' }, 28));
  out.push(tl(516, 610, ['Left', 'ventricle'], { size: 21, weight: 700, anchor: 'middle' }, 28));
  // valves
  out.push(line(298, 520, 344, 572, { w: 5 }), line(434, 520, 386, 572, { w: 5 }), line(468, 520, 506, 570, { w: 5 }), line(502, 520, 544, 570, { w: 5 }));
  out.push(line(402, 524, 496, 524, { w: 5 }));
  // coronary artery
  out.push(path('M492 322 H620 V480', { stroke: C.rust, w: 5 }));
  // labels
  const R = (s, ty, px, py) => { out.push(t(640, ty, s, { size: 21, weight: 700 }), lead(632, ty - 7, px, py)); };
  const L = (s, ty, px, py) => { out.push(t(262, ty, s, { size: 21, weight: 700, anchor: 'end' }), lead(268, ty - 7, px, py)); };
  L('Pulmonary artery', 190, 408, 183); R('Aorta', 190, 492, 183);
  L('Vena cava', 240, 316, 233); R('Pulmonary vein', 268, 588, 261);
  R('Coronary artery', 404, 620, 397);
  out.push(t(640, 545, 'Semilunar valve', { size: 21, weight: 700 }), line(632, 538, 480, 524, { w: 2.5 }), circ(480, 524, 4.5, C.ink, C.ink, 1));
  out.push(tl(140, 586, ['Atrioventricular', 'valve'], { size: 21, weight: 700, anchor: 'middle' }, 28), lead(232, 590, 334, 560));
  out.push(t(640, 722, 'Thick wall', { size: 21, weight: 700 }), lead(632, 715, 598, 700));
  out.push(lead(450, 950, 450, 846), t(450, 978, 'Septum', { size: 21, weight: 700, anchor: 'middle' }));
  out.push(tl(W / 2, 1036, ['Left side of the heart is on the right of the page', '(as if you face the person)'], { size: 20, fill: C.muted, anchor: 'middle' }, 28));
  out.push(rect(60, 1100, 40, 30, DEOX, 4, C.ink, 2.5), t(112, 1123, 'deoxygenated', { size: 21 }));
  out.push(rect(450, 1100, 40, 30, OX, 4, C.ink, 2.5), t(502, 1123, 'oxygenated', { size: 21 }));
  return svg(W, 1165, 'Inside the heart', out.join('\n'), 'Schematic section, not to scale');
}

// ---------- 3. How the heart pumps ----------
function heartPump() {
  const out = [];
  out.push(rect(520, 150, 30, 26, C.mustard, 4, C.ink, 2.5), t(562, 171, 'contracting', { size: 20 }));
  const stage = (y0, step, title, lines) => {
    const [aC, vC] = [step === 1, step === 2];
    for (const [x, vfill] of [[90, DEOX], [276, OX]]) {
      // vein into atrium
      out.push(rect(x + 64, y0, 40, 44, vfill, 0, C.ink, 2.5));
      out.push(rect(x, y0 + 44, 170, 92, aC ? C.mustard : '#fff', 16, C.ink, aC ? 5 : 3));
      // AV valve
      if (step === 2) out.push(line(x - 2, y0 + 152, x + 172, y0 + 152, { w: 6 }));
      else out.push(line(x + 14, y0 + 140, x + 36, y0 + 166, { w: 5 }), line(x + 156, y0 + 140, x + 134, y0 + 166, { w: 5 }));
      out.push(rect(x, y0 + 170, 170, 120, vC ? C.mustard : '#fff', 16, C.ink, vC ? 5 : 3));
      // artery out
      out.push(rect(x + 74, y0 + 290, 42, 30, vfill, 0, C.ink, 2.5));
      if (step === 1) out.push(line(x + 70, y0 + 292, x + 120, y0 + 292, { w: 6 }));
      if (step === 3) out.push(line(x + 74, y0 + 290, x + 116, y0 + 320, { w: 2.5 }), line(x + 116, y0 + 290, x + 74, y0 + 320, { w: 2.5 }), line(x + 70, y0 + 292, x + 120, y0 + 292, { w: 6 }));
      if (step === 1) out.push(arrow(x + 85, y0 + 10, x + 85, y0 + 236, { w: 3.5 }));
      if (step === 2) out.push(arrow(x + 95, y0 + 186, x + 95, y0 + 316, { w: 3.5 }));
      if (step === 3) out.push(arrow(x + 85, y0 + 6, x + 85, y0 + 80, { w: 3.5 }));
    }
    out.push(line(270, y0 + 44, 270, y0 + 300, { w: 5 }));
    out.push(t(30, y0 + 158, 'AV', { size: 20, weight: 700 }), t(30, y0 + 298, 'SL', { size: 20, weight: 700 }));
    out.push(num(519, y0 + 96, step), t(554, y0 + 104, title, { size: 27, weight: 700 }));
    out.push(tl(500, y0 + 160, lines, { size: 22 }, 34));
  };
  stage(196, 1, 'Atria contract', ['Blood pushed into', 'ventricles through', 'open AV valves']);
  out.push(divider(540));
  stage(546, 2, 'Ventricles contract', ['AV valves close', 'SL valves open:', 'blood leaves in arteries']);
  out.push(divider(888));
  stage(896, 3, 'Ventricles relax', ['SL valves close:', 'no back-flow from', 'arteries into ventricles']);
  out.push(t(W / 2, 1270, 'AV = atrioventricular, SL = semilunar; closing valves make heart sounds', { size: 20, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1300, 'How the heart pumps', out.join('\n'), 'Simplified: one heartbeat in three steps');
}

// ---------- 4. Blood vessels ----------
function bloodVessels() {
  const out = [];
  const info = (y, head, lines, why) => {
    out.push(t(420, y, head, { size: 30, weight: 700 }));
    out.push(tl(420, y + 58, lines, { size: 22 }, 34));
    out.push(tl(420, y + 200, why, { size: 20, fill: C.tealDark }, 30));
  };
  // artery
  out.push(circ(220, 300, 110, WALL, C.ink, 3.5), circ(220, 300, 88, 'none', C.olive, 3), circ(220, 300, 52, LUMEN, C.ink, 3));
  out.push(`<circle cx="220" cy="300" r="88" fill="none" stroke="${WALL}" stroke-width="4" stroke-dasharray="10 8"/>`);
  out.push(t(220, 308, 'lumen', { size: 20, weight: 700, anchor: 'middle' }));
  out.push(t(20, 224, 'wall', { size: 20, weight: 700 }), lead(80, 220, 160, 270));
  out.push(t(20, 418, 'elastic tissue', { size: 20, weight: 700 }), lead(60, 392, 143, 337));
  info(178, 'Artery', ['Thick, muscular, elastic wall', 'Narrow lumen', 'No valves'], ['Thick wall withstands high', 'pressure; elastic wall recoils']);
  out.push(divider(490));
  // vein
  out.push(circ(220, 660, 104, WALL, C.ink, 3.5), circ(220, 660, 88, LUMEN, C.ink, 3));
  out.push(t(220, 668, 'lumen', { size: 20, weight: 700, anchor: 'middle' }));
  out.push(t(20, 584, 'wall', { size: 20, weight: 700 }), lead(80, 580, 131, 618));
  info(540, 'Vein', ['Thin wall', 'Wide lumen', 'Valves'], ['Low pressure: valves', 'prevent backflow']);
  out.push(rect(640, 520, 230, 62, LUMEN, 0, C.ink, 3));
  out.push(arrow(658, 551, 716, 551, { w: 3 }), line(730, 524, 772, 551, { w: 5 }), line(730, 578, 772, 551, { w: 5 }));
  out.push(lead(752, 600, 750, 537), t(752, 626, 'valve', { size: 20, weight: 700, anchor: 'middle' }));
  out.push(divider(850));
  // capillary
  out.push(circ(220, 1022, 40, WALL, C.ink, 3.5), circ(220, 1022, 30, LUMEN, C.ink, 3));
  out.push(t(20, 944, 'wall', { size: 20, weight: 700 }), lead(80, 940, 188, 1004));
  out.push(t(20, 1138, 'lumen', { size: 20, weight: 700 }), lead(60, 1114, 214, 1026));
  info(900, 'Capillary', ['Wall one cell thick', 'Very narrow lumen', 'No valves'], ['Short diffusion distance;', 'very many: large surface area']);
  return svg(W, 1200, 'Three kinds of blood vessel', out.join('\n'), 'Cross-sections, schematic, not to scale');
}

// ---------- 6. Blood components ----------
function bloodComponents() {
  const out = [];
  const info = (y, head, lines, extra) => {
    out.push(t(400, y, head, { size: 30, weight: 700 }));
    out.push(tl(400, y + 52, lines, { size: 22 }, 34));
    if (extra) out.push(tl(400, y + 150, extra, { size: 22, fill: C.tealDark }, 34));
  };
  for (const [x, y] of [[100, 230], [200, 238], [290, 224]]) out.push(circ(x, y, 40, '#f2cdb4', CELLE, 3.5), circ(x, y, 16, '#fbe6dc', '#fbe6dc', 1));
  info(190, 'Red blood cells', ['Carry oxygen (haemoglobin)', 'No nucleus, pale centre']);
  out.push(divider(332));
  out.push(circ(95, 452, 68, WALL, C.ink, 3.5));
  out.push(circ(75, 428, 18, C.tealDark, C.tealDark, 1), circ(112, 442, 18, C.tealDark, C.tealDark, 1), circ(90, 476, 18, C.tealDark, C.tealDark, 1), line(80, 432, 90, 470, { color: C.tealDark, w: 10 }), line(85, 436, 110, 444, { color: C.tealDark, w: 10 }));
  out.push(circ(250, 452, 60, WALL, C.ink, 3.5), circ(250, 452, 46, C.tealDark, C.tealDark, 1));
  out.push(t(95, 554, 'Phagocyte', { size: 20, weight: 700, anchor: 'middle' }), t(250, 554, 'Lymphocyte', { size: 20, weight: 700, anchor: 'middle' }));
  info(394, 'White blood cells', ['Phagocytosis, antibodies', 'Each has a nucleus'], ['Lymphocytes: make antibodies', 'Phagocytes: engulf pathogens']);
  out.push(divider(652));
  const plt = (x, y, s) => `<path d="M${x - s} ${y - s * 0.4} L${x - s * 0.2} ${y - s} L${x + s} ${y - s * 0.5} L${x + s * 0.6} ${y + s} L${x - s * 0.7} ${y + s * 0.7} Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
  out.push(plt(84, 735, 12), plt(240, 740, 15), plt(160, 773, 11), plt(120, 800, 9));
  info(714, 'Platelets', ['Small fragments of cells', 'Help blood to clot']);
  out.push(divider(862));
  out.push(rect(40, 890, 270, 150, C.cream, 18, C.ink, 3.5));
  for (const [x, y] of [[90, 925], [210, 920], [150, 945], [270, 940], [110, 980], [180, 995], [250, 985], [80, 1015], [145, 1020], [225, 1020]]) out.push(circ(x, y, 6, C.olive, C.olive, 1));
  out.push(t(175, 1074, 'Dissolved substances', { size: 20, weight: 700, anchor: 'middle' }));
  info(924, 'Plasma', ['Liquid part of blood', 'Carries blood cells, ions,', 'nutrients, urea, hormones, CO₂']);
  return svg(W, 1110, 'What blood is made of', out.join('\n'), 'Schematic cells, not to scale');
}

// ---------- 7. Clotting ----------
function clotting() {
  const out = [];
  const vessel = (y0, clot) => {
    out.push(rect(30, y0, 172, 72, WALL, 0, C.ink, 3), rect(298, y0, 172, 72, WALL, 0, C.ink, 3));
    out.push(t(116, y0 + 44, 'skin', { size: 21, weight: 700, anchor: 'middle' }), t(384, y0 + 44, 'skin', { size: 21, weight: 700, anchor: 'middle' }));
    out.push(`<path d="M30 ${y0 + 100} H205 V${y0} H295 V${y0 + 100} H470 V${y0 + 190} H30 Z" fill="${LUMEN}"/>`);
    out.push(path(`M30 ${y0 + 100} H205`, { w: 3 }), path(`M295 ${y0 + 100} H470 V${y0 + 190} H30 V${y0 + 100}`, { w: 3 }));
    out.push(t(80, y0 + 152, 'vessel', { size: 21, weight: 700 }));
    out.push(rbc(100, y0 + 170), rbc(380, y0 + 170), rbc(458, y0 + 146));
    if (clot) {
      const g = [];
      for (let i = 0; i < 9; i++) g.push(line(206 + i * 11, y0 - 4, 230 + i * 8, y0 + 82, { color: C.olive, w: 3 }), line(294 - i * 11, y0 - 4, 270 - i * 8, y0 + 82, { color: C.olive, w: 3 }));
      out.push(`<clipPath id="clotc"><rect x="205" y="${y0 - 4}" width="90" height="86"/></clipPath><g clip-path="url(#clotc)">${g.join('')}</g>`);
      out.push(rbc(234, y0 + 30), rbc(266, y0 + 60), rbc(240, y0 + 80));
    } else {
      out.push(arrow(250, y0 + 132, 250, y0 + 20, { color: C.rust, w: 4, marker: 'ahR' }), rbc(250, y0 - 20));
    }
  };
  vessel(220, false);
  out.push(num(500, 250, 1), t(536, 259, 'Vessel damaged', { size: 27, weight: 700 }));
  out.push(tl(500, 320, ['Blood escapes', 'Pathogens can enter'], { size: 22 }, 34));
  out.push(divider(466));
  // fibrinogen -> fibrin
  for (const [x, y, a] of [[60, 525, 30], [170, 525, -60], [120, 555, -20], [80, 600, 0], [150, 620, 80], [60, 660, 40], [120, 680, -40], [180, 665, 10]]) out.push(`<line x1="${x - 15}" y1="${y}" x2="${x + 15}" y2="${y}" stroke="${C.tealDark}" stroke-width="7" stroke-linecap="round" transform="rotate(${a} ${x} ${y})"/>`);
  out.push(arrow(212, 610, 292, 610, { w: 3.5 }));
  const f = [];
  for (let i = -6; i < 14; i++) f.push(line(320 + i * 18, 512, 360 + i * 18, 712, { color: C.olive, w: 3 }), line(320 + i * 20, 712, 380 + i * 20, 512, { color: C.olive, w: 3 }));
  out.push(`<clipPath id="fib"><rect x="320" y="510" width="150" height="200"/></clipPath><rect x="320" y="510" width="150" height="200" fill="#fff" stroke="${C.panelEdge}" stroke-width="2.5"/><g clip-path="url(#fib)">${f.join('')}</g>`);
  out.push(t(125, 744, 'fibrinogen', { size: 21, weight: 700, anchor: 'middle' }), t(125, 772, '(soluble)', { size: 20, anchor: 'middle' }));
  out.push(t(395, 744, 'fibrin', { size: 21, weight: 700, anchor: 'middle' }), t(395, 772, '(insoluble)', { size: 20, anchor: 'middle' }));
  out.push(num(500, 550, 2), t(536, 559, 'Fibrinogen to fibrin', { size: 27, weight: 700 }));
  out.push(tl(500, 620, ['Soluble plasma protein', 'becomes insoluble fibres'], { size: 22 }, 34));
  out.push(divider(804));
  vessel(875, true);
  out.push(num(500, 905, 3), t(536, 914, 'Clot forms', { size: 27, weight: 700 }));
  out.push(tl(500, 975, ['Fibres trap blood cells', 'Blood loss stops;', 'pathogens kept out'], { size: 22 }, 34));
  return svg(W, 1110, 'How a blood clot forms', out.join('\n'), 'Simplified side views');
}

// ---------- 8. Heart rate and exercise ----------
function heartRateExercise() {
  const out = [];
  const base = 630, sc = 440 / 140;
  out.push(t(30, 164, 'Heart rate (beats per minute)', { size: 21, weight: 700 }));
  out.push(line(148, 180, 148, base, { w: 3 }), line(148, base, 850, base, { w: 3 }));
  [0, 20, 40, 60, 80, 100, 120, 140].forEach((v) => out.push(line(140, base - v * sc, 148, base - v * sc, { w: 2.5 }), t(134, base - v * sc + 7, String(v), { size: 19, anchor: 'end' })));
  const bar = (x, mean, counts, fill, label) => {
    out.push(rect(x, base - mean * sc, 170, mean * sc, fill, 0, C.ink, 3));
    counts.forEach((c, i) => out.push(circ(x + 45 + i * 40, base - c * sc, 9, '#fff', C.ink, 3)));
    out.push(t(x + 85, base - mean * sc - 50, String(mean), { size: 26, weight: 700, anchor: 'middle' }));
    out.push(t(x + 85, base + 40, label, { size: 22, weight: 700, anchor: 'middle' }));
  };
  bar(220, 74, [72, 76, 74], C.teal, 'At rest');
  bar(500, 118, [116, 120, 118], C.mustard, 'After exercise');
  out.push(line(390, base - 74 * sc, 776, base - 74 * sc, { color: '#4f5f7f', w: 2.5, dash: '10 7' }));
  out.push(arrow(774, base - 74 * sc, 774, base - 118 * sc, { w: 3.5 }));
  out.push(t(796, base - 100 * sc, '+59%', { size: 22, weight: 700 }), t(796, base - 100 * sc + 28, '(+44)', { size: 19 }));
  out.push(circ(190, 222, 9, '#fff', C.ink, 3), t(210, 229, 'each count', { size: 20 }), t(372, 229, 'Bar = mean', { size: 20, weight: 700 }));
  out.push(t(30, 790, 'Why heart rate rises', { size: 24, weight: 700 }));
  const steps = [['Muscles contract', 'more: cells', 'respire faster'], ['More oxygen and', 'glucose needed;', 'more CO₂ to remove'], ['Heart rate rises:', 'faster delivery', 'and removal']];
  steps.forEach(([a, b, c], i) => {
    const x = 30 + i * 300;
    out.push(rect(x, 830, 240, 190, C.cream, 16, C.ink, 3));
    out.push(t(x + 120, 890, a, { size: 20, weight: 700, anchor: 'middle' }), tl(x + 120, 926, [b, c], { size: 20, anchor: 'middle' }, 36));
    if (i < 2) out.push(arrow(x + 246, 925, x + 296, 925, { w: 3.5 }));
  });
  out.push(t(W / 2, 1074, 'Rate falls back to resting after activity', { size: 21, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1110, 'Heart rate and exercise', out.join('\n'), 'Pulse counted for 30 s, three times, then doubled');
}

export const figures = [
  { name: '02-heart-structure', after: '### Blood vessels', svg: heartStructure(),
    alt: 'Schematic heart section viewed as if facing the person. Four chambers (atria above, ventricles below), septum between left and right, vena cava and pulmonary vein entering the atria, pulmonary artery and aorta leaving the ventricles, coronary artery over the outer wall. Further labels: atrioventricular valves, semilunar valves, thicker left ventricle wall.',
    caption: 'Left side of the heart is on the right of the page.' },
  { name: '01-circulation', after: '## B2.2c: The human circulatory system', svg: circulation(),
    alt: 'Top: in a fish the heart pumps blood to the gills, then on to the body and back, so blood passes through the heart once per circuit and pressure drops in the gills. Bottom: in a mammal the right side pumps deoxygenated blood to the lungs, oxygenated blood returns to the left side, which pumps it at high pressure to the body; blood passes through the heart twice per circuit. Left side of the heart is drawn on the right.',
    caption: 'A fish heart is passed once per circuit; a mammal heart twice, with the two sides kept separate.' },
  { name: '04-blood-vessels', after: '### Blood vessels', svg: bloodVessels(),
    alt: 'Cross-sections of an artery (thick muscular elastic wall, narrow lumen), a vein (thin wall, wide lumen) and a capillary (wall one cell thick, very narrow lumen), plus a side view of a vein valve. Further notes link structure to pressure and function.',
    caption: 'Wall thickness and lumen size are matched to the job of each vessel.' },
  { name: '06-blood-components', after: '## B2.2e: Blood cells and plasma', svg: bloodComponents(),
    alt: 'Four parts of blood. Red blood cells carry oxygen, have no nucleus and a pale centre. White blood cells do phagocytosis and make antibodies and have a nucleus; further detail: lymphocytes (large round nucleus) make antibodies and phagocytes (lobed nucleus) engulf pathogens. Platelets are fragments that help clotting. Plasma carries cells, ions, nutrients, urea, hormones and carbon dioxide.',
    caption: 'Red cells, white cells, platelets and plasma each have a job in the blood.' },
  { name: '03-heart-pump', after: '### Blood vessels', svg: heartPump(),
    alt: 'Three simplified stages of one heartbeat. 1: atria contract and push blood through open AV valves into the ventricles. 2: ventricles contract, AV valves close, semilunar valves open and blood leaves in the arteries. 3: ventricles relax and semilunar valves close, stopping back-flow into the ventricles. Closing valves make the heart sounds.',
    caption: 'Valves open and close in turn so blood only moves one way.' },
  { name: '08-heart-rate-exercise', after: '## 4.4.2.2 Response to exercise', svg: heartRateExercise(),
    alt: 'Bar chart from the lesson worked example: mean resting rate 74 beats per minute, mean after exercise 118, an increase of 44 (59 per cent). Further panel: active muscles respire faster, need more oxygen and glucose and produce more carbon dioxide, so the heart rate rises to supply and remove them faster.',
    caption: 'After exercise the mean heart rate rose from 74 to 118 beats per minute, a 59% increase.' },
  { name: '07-clotting', after: '### Worked reminder: percentage change in a blood count', svg: clotting(),
    alt: 'A damaged vessel lets blood escape and pathogens enter. Soluble fibrinogen in the plasma is converted into insoluble fibrin fibres. The fibrin mesh traps blood cells and forms a clot, stopping blood loss and keeping pathogens out.',
    caption: 'A fibrin mesh traps blood cells to seal a wound.' },
];
