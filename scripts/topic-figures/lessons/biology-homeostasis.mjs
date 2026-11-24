// Board-neutral redraws of nine homeostasis figures first drawn for Cambridge 9700 and reused on AQA,
// OCR and Edexcel IAL pages. Same content and numbers as before, with the "All boards", board-list,
// "AQA example data" and "Cambridge only" pills removed (the G-protein step stays: it is correct biology).
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-homeostasis';
const W = 900;
const NAVY = C.ink, FIL = '#dde9f0', BLOODBG = '#f6dcd6', PINK = '#f2d0cc', TAN = '#e8dfc7';
const num = (cx, cy, n, r = 20) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${NAVY}"/>` + t(cx, cy + r * 0.36, String(n), { size: r * 0.95, weight: 700, fill: '#ffffff', anchor: 'middle' });
const hex = (cx, cy, r = 11, fill = C.cream, stroke = C.olive) => {
  const p = Array.from({ length: 6 }, (_, i) => { const a = (Math.PI / 3) * i; return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(' ');
  return `<polygon points="${p}" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>`;
};
const dot = (cx, cy, r = 10, fill = C.mustard, stroke = C.olive) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>`;
const rect = (x, y, w, h, fill, stroke = 'none', sw = 2.5, rx = 0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"${stroke !== 'none' ? ` stroke="${stroke}" stroke-width="${sw}"` : ''}/>`;
const line = (x1, y1, x2, y2, color = NAVY, w = 3) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"/>`;
const key = (x, y, n, s) => num(x + 20, y, n) + t(x + 52, y + 7, s, { size: 19 });
const pill = (cx, cy, w, h, label, fill, edge, col, size = 21) => rect(cx - w / 2, cy - h / 2, w, h, fill, edge, 2.5, h / 2) + t(cx, cy + size * 0.36, label, { size, weight: 700, fill: col, anchor: 'middle' });
const sup = (s) => `<tspan baseline-shift="super" font-size="68%">${s}</tspan>`;
// glycogen: little branched chain of hexagons
const glycogen = (x, y, fill = C.tealLight, stroke = C.tealDark) =>
  line(x - 26, y - 12, x + 26, y + 12, stroke, 2) + line(x - 26, y + 12, x + 26, y - 12, stroke, 2) +
  hex(x - 26, y - 12, 10, fill, stroke) + hex(x - 26, y + 12, 10, fill, stroke) + hex(x, y, 10, fill, stroke) + hex(x + 26, y - 12, 10, fill, stroke) + hex(x + 26, y + 12, 10, fill, stroke);
const glucose3 = (x, y) => hex(x - 10, y - 12, 10) + hex(x + 8, y - 22, 10) + hex(x + 8, y, 10);

// ---------- 01 temperature control ----------
function temperature() {
  const o = [];
  const boxes = [['Receptors', 'skin, blood'], ['Coordinator', 'hypothalamus'], ['Effectors', 'skin, muscle'], ['Set point', 'restored']];
  boxes.forEach(([h, s], i) => {
    const x = 30 + i * 218, last = i === 3;
    o.push(rect(x, 130, 186, 84, last ? C.cream : C.tealLight, last ? C.olive : C.tealDark, 2.5, 14));
    o.push(t(x + 93, 164, h, { size: 21, weight: 700, anchor: 'middle' }));
    o.push(t(x + 93, 195, s, { size: 18, fill: C.muted, anchor: 'middle' }));
    if (i < 3) o.push(arrow(x + 188, 172, x + 214, 172, { w: 4 }));
  });
  o.push(`<path d="M775 214 V254 H122 V222" fill="none" stroke="${C.olive}" stroke-width="3.5" marker-end="url(#ahO)"/>`);
  o.push(t(W / 2, 284, 'negative feedback', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(pill(235, 334, 200, 46, 'TOO HOT', C.cream, C.olive, C.olive));
  o.push(pill(665, 334, 200, 46, 'TOO COLD', C.tealLight, C.tealDark, C.tealDark));
  const skin = (x0) => {
    const s = [];
    s.push(rect(x0, 370, 410, 432, '#ffffff', NAVY, 2.5, 6));
    s.push(rect(x0 + 1.5, 462, 407, 40, C.cream));
    s.push(rect(x0 + 1.5, 502, 407, 240, C.tealLight));
    s.push(rect(x0 + 1.5, 742, 407, 58.5, TAN));
    s.push(line(x0 + 1.5, 462, x0 + 408.5, 462, NAVY, 2));
    return s.join('');
  };
  // hot
  o.push(skin(30));
  o.push(`<path d="M90 800 V560 Q90 530 120 530 H180 Q210 530 210 560 V800" fill="none" stroke="${C.rust}" stroke-width="22" stroke-linecap="round"/>`);
  for (const x of [90, 150, 210]) o.push(arrow(x, 456, x, 410, { color: C.rust, w: 3.5, marker: 'ahR' }));
  o.push(t(150, 398, 'heat lost', { size: 19, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(line(280, 622, 280, 462, NAVY, 3) + line(280, 462, 340, 440, NAVY, 3) + dot(280, 622, 10, C.cream, C.olive));
  o.push(line(385, 462, 385, 628, C.tealDark, 3) + dot(385, 652, 24, C.teal, C.tealDark));
  for (const [x, y] of [[372, 430], [398, 434], [385, 450]]) o.push(dot(x, y, 6, '#ffffff', C.tealDark));
  o.push(num(150, 614, 1), num(340, 702, 2), num(322, 562, 3));
  // cold
  o.push(skin(460));
  o.push(`<path d="M520 792 V540 Q520 528 532 528 H628 Q640 528 640 540 V792" fill="none" stroke="${C.rust}" stroke-width="5" stroke-linecap="round"/>`);
  o.push(arrow(580, 456, 580, 428, { color: C.rust, w: 3.5, marker: 'ahR' }));
  o.push(t(505, 398, 'less heat lost', { size: 19, weight: 700, fill: C.rust }));
  o.push(line(710, 622, 710, 398, NAVY, 3) + dot(710, 622, 10, C.cream, C.olive));
  o.push(line(818, 462, 818, 628, C.tealDark, 3) + dot(818, 652, 24, C.teal, C.tealDark));
  o.push(path('M480 775 L505 760 L530 790 L555 760 L580 790 L605 760 L630 790 L655 760 L680 790 L705 760 L730 790 L755 760 L780 790 L805 760 L830 790 L850 770', { stroke: C.rust, w: 3 }));
  o.push(num(580, 614, 1), num(770, 702, 2), num(752, 562, 3), num(820, 724, 4));
  const kh = [['Vasodilation: heat radiates'], ['Sweat evaporates, cools skin'], ['Hairs lie flat']];
  kh.forEach(([s], i) => o.push(key(30, 846 + i * 40, i + 1, s)));
  ['Vasoconstriction: heat kept', 'No sweat', 'Hairs raised, trap air', 'Shivering releases heat'].forEach((s, i) => o.push(key(460, 846 + i * 40, i + 1, s)));
  return svg(W, 1010, 'Temperature control', o.join('\n'), 'Negative feedback keeps core temperature steady');
}

// ---------- 02 nephron ----------
function nephron() {
  const o = [];
  const dy = -36;
  o.push(rect(0, 150 + dy, W, 300, C.tealLight), rect(0, 450 + dy, W, 390, '#f3edcf'));
  o.push(`<line x1="0" y1="${450 + dy}" x2="${W}" y2="${450 + dy}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="9 6"/>`);
  o.push(t(20, 188 + dy, 'CORTEX', { size: 22, weight: 700, fill: C.tealDark }));
  o.push(t(20, 490 + dy, 'MEDULLA', { size: 22, weight: 700, fill: C.olive }));
  const G = C.tealDark;
  // afferent and efferent
  o.push(line(36, 262 + dy, 128, 262 + dy, C.rust, 16).replace('/>', ' stroke-linecap="round"/>'), `<polygon points="128,${248 + dy} 150,${262 + dy} 128,${276 + dy}" fill="${C.rust}"/>`);
  o.push(t(40, 236 + dy, 'Afferent', { size: 20, weight: 700, fill: C.rust }), t(40, 294 + dy, 'wide', { size: 18, fill: C.rust }));
  o.push(`<path d="M200 212 V172 H310" transform="translate(0 ${dy})" fill="none" stroke="${C.rust}" stroke-width="6" marker-end="url(#ahR)"/>`);
  o.push(t(336, 180 + dy, 'Efferent, narrow', { size: 20, weight: 700, fill: C.rust }));
  // capsule + glomerulus
  o.push(`<circle cx="200" cy="${262 + dy}" r="52" fill="#ffffff" stroke="${G}" stroke-width="4"/>`);
  for (const [x, y] of [[185, 250], [215, 250], [182, 274], [218, 274], [200, 262]]) o.push(`<circle cx="${x}" cy="${y + dy}" r="15" fill="${PINK}" stroke="${C.rust}" stroke-width="2"/>`);
  // tubule
  const tube = `M200 ${314 + dy} L235 ${330 + dy} L208 ${352 + dy} L245 ${372 + dy} L210 ${392 + dy} L245 ${412 + dy} L210 ${432 + dy} L235 ${450 + dy} V${790 + dy} A48 48 0 0 0 ${331} ${790 + dy} V${400 + dy} L345 ${400 + dy} L372 ${380 + dy} L398 ${410 + dy} L425 ${380 + dy} L452 ${410 + dy} L478 ${380 + dy} L500 ${400 + dy} H600`;
  o.push(path(tube, { stroke: G, w: 11 }));
  o.push(line(600, 246 + dy, 600, 800 + dy, G, 18).replace('/>', ' stroke-linecap="round"/>'));
  o.push(line(600, 300 + dy, 724, 300 + dy, G, 9));
  o.push(t(640, 270 + dy, 'Other nephrons join', { size: 19, fill: C.muted }));
  o.push(arrow(600, 808 + dy, 600, 870 + dy, { color: G, w: 6, marker: 'ahT' }));
  o.push(t(600, 905 + dy, 'to renal pelvis', { size: 20, weight: 700, fill: G, anchor: 'middle' }));
  o.push(arrow(235, 540 + dy, 235, 612 + dy, { w: 3 }), arrow(331, 612 + dy, 331, 540 + dy, { w: 3 }), arrow(600, 620 + dy, 600, 692 + dy, { w: 3 }));
  o.push(num(120, 300 + dy, 1), num(160, 380 + dy, 2), num(285, 600 + dy, 3), num(420, 350 + dy, 4), num(660, 600 + dy, 5));
  const y0 = 960 + dy;
  o.push(key(30, y0, 1, 'Glomerulus: filtration'), key(470, y0, 2, 'Proximal tubule: reabsorption'));
  o.push(key(30, y0 + 44, 3, 'Loop of Henle: salt gradient'), key(470, y0 + 44, 4, 'Distal tubule: adjusts, water'));
  o.push(key(30, y0 + 88, 5, 'Collecting duct: water (ADH)'));
  return svg(W, 1050, 'One nephron', o.join('\n'), 'Schematic, not to scale');
}

// ---------- 03 ultrafiltration ----------
function ultrafiltration() {
  const o = [];
  const dy = -36, T = 150 + dy, B = 600 + dy;
  o.push(rect(30, T, 270, 450, BLOODBG), rect(450, T, 420, 450, FIL));
  o.push(t(165, T + 34, 'Blood', { size: 22, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(660, T + 34, 'Capsule space', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  // basement membrane mesh
  o.push(rect(340, T + 65, 60, 385, C.cream, C.olive, 2.5));
  let mesh = '';
  for (let y = T + 65; y < B; y += 22) mesh += `M340 ${y} L400 ${y + 22} M400 ${y} L340 ${y + 22} `;
  o.push(`<path d="${mesh}" stroke="${C.olive}" stroke-width="1.3" fill="none" clip-path="url(#bm)"/><clipPath id="bm"><rect x="340" y="${T + 65}" width="60" height="385"/></clipPath>`);
  // endothelium cells (with gaps) and podocyte feet (with slits)
  for (const y of [215, 305, 405, 505]) o.push(rect(300, y + dy, 40, y === 505 ? 95 : y === 215 ? 60 : 70, C.teal, C.tealDark, 2.5, 8));
  for (const y of [218, 306, 406, 506]) o.push(rect(400, y + dy, 38, y === 506 ? 92 : 56, '#6fa9a1', C.tealDark, 2.5, 12));
  o.push(num(320, T + 36, 1, 19), num(370, T + 36, 2, 19), num(420, T + 36, 3, 19));
  for (const y of [290, 390, 490]) o.push(arrow(268, y + dy, 542, y + dy, { color: C.tealDark, w: 3, marker: 'ahT' }));
  // blood contents
  for (const [x, y] of [[90, 250], [150, 520]]) o.push(`<circle cx="${x}" cy="${y + dy}" r="37" fill="#eab3a5" stroke="${C.rust}" stroke-width="2.5"/><circle cx="${x}" cy="${y + dy}" r="11" fill="#f8e0d8" stroke="${C.rust}" stroke-width="2"/>`);
  for (const [x, y] of [[260, 234], [250, 330], [240, 440], [215, 550]]) o.push(dot(x, y + dy, 15, '#9aa7c7', NAVY));
  const small = (x, y) => dot(x, y + dy, 7, '#6fb0a3', C.tealDark).replace('stroke-width="2.5"', 'stroke-width="1.5"');
  for (const [x, y] of [[190, 300], [70, 350], [130, 384], [100, 450], [180, 455], [520, 250], [700, 290], [800, 250], [600, 330], [780, 400], [560, 430], [650, 480], [790, 530], [720, 560]]) o.push(small(x, y));
  o.push(t(165, 636 + dy, 'Cells, protein stay', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(t(665, 636 + dy, 'Water, glucose, urea, ions pass', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(key(30, 690 + dy, 1, 'Endothelium: gaps between cells'), key(30, 734 + dy, 2, 'Basement membrane: the filter'), key(30, 778 + dy, 3, 'Podocytes: filtration slits'));
  o.push(t(30, 850 + dy, 'Net pressure out (example data, kPa)', { size: 21, weight: 700 }));
  const fat = (x1, x2, y, color) => { const d = Math.sign(x2 - x1), hx = x2 - d * 34; return `<line x1="${x1}" y1="${y}" x2="${hx}" y2="${y}" stroke="${color}" stroke-width="7" stroke-linecap="round"/><polygon points="${hx},${y - 18} ${x2},${y} ${hx},${y + 18}" fill="${color}"/>`; };
  o.push(fat(60, 440, 895 + dy, C.tealDark, 'ahT'), t(478, 902 + dy, '9.6 blood pressure', { size: 20, weight: 700, fill: C.tealDark }));
  o.push(fat(440, 360, 975 + dy, C.rust, 'ahR'), t(460, 982 + dy, 'capsule 2.1', { size: 20, weight: 700, fill: C.rust }));
  o.push(fat(360, 175, 975 + dy, C.olive, 'ahO'), t(210, 1022 + dy, 'protein 4.5', { size: 20, weight: 700, fill: C.olive }));
  o.push(fat(60, 185, 1060 + dy, NAVY, 'ah'), t(215, 1067 + dy, '3.0 kPa net, fluid goes out', { size: 20, weight: 700 }));
  return svg(W, 1084, 'Ultrafiltration', o.join('\n'), 'Blood is pushed through three layers');
}

// ---------- 04 proximal tubule ----------
function pct() {
  const o = [];
  const dy = -30;
  const Y = (v) => v + dy;
  o.push(rect(30, Y(150), 270, 490, FIL), rect(700, Y(150), 170, 490, BLOODBG));
  o.push(rect(300, Y(150), 320, 67, C.tealLight, C.tealDark, 2.5, 6), rect(300, Y(560), 320, 80, C.tealLight, C.tealDark, 2.5, 6));
  o.push(rect(300, Y(222), 320, 333, C.tealLight, C.tealDark, 2.5, 6));
  o.push(`<path d="M620 ${Y(232)} L632 ${Y(250)} L612 ${Y(270)} L632 ${Y(300)} L620 ${Y(320)} M620 ${Y(486)} L632 ${Y(505)} L612 ${Y(525)} L632 ${Y(548)}" fill="none" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  for (const y of [255, 295, 335]) o.push(rect(262, Y(y), 40, 25, '#ffffff', C.tealDark, 2.5, 10));
  o.push(rect(294, Y(212), 14, 20, NAVY));
  o.push(line(200, Y(184), 296, Y(214), NAVY, 2));
  o.push(t(30, Y(182), 'Tight junction', { size: 20, weight: 700 }));
  o.push(t(150, Y(246), 'Microvilli', { size: 20, weight: 700 }));
  o.push(`<ellipse cx="450" cy="${Y(290)}" rx="52" ry="23" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(t(375, Y(344), 'Mitochondria', { size: 20, weight: 700 }));
  o.push(t(40, Y(598), 'Filtrate', { size: 22, weight: 700, fill: C.tealDark }), t(785, Y(190), 'Blood', { size: 22, weight: 700, fill: C.rust, anchor: 'middle' }));
  const protein = (x, y) => rect(x - 20, Y(y) - 36, 40, 72, '#6fa9a1', C.tealDark, 2.5, 14);
  o.push(protein(620, 340), protein(300, 400), protein(620, 450));
  o.push(dot(545, Y(340)), arrow(565, Y(340), 702, Y(340), { w: 3.5 }), num(620, Y(340), 1, 19));
  o.push(arrow(238, Y(400), 348, Y(400), { w: 3.5 }), num(300, Y(400), 2, 19));
  o.push(hex(545, Y(450)), arrow(565, Y(450), 702, Y(450), { w: 3.5 }), num(620, Y(450), 3, 19));
  o.push(arrow(160, Y(500), 793, Y(500), { color: C.tealDark, w: 4, marker: 'ahT' }), num(470, Y(500), 4, 19));
  for (const [x, y] of [[100, 300], [190, 360], [140, 440], [380, 380], [745, 340], [800, 400], [745, 450], [780, 560]]) o.push(hex(x, Y(y)));
  for (const [x, y] of [[230, 300], [90, 400], [210, 450], [380, 420], [785, 300]]) o.push(dot(x, Y(y)));
  const y0 = 670;
  ['Na⁺–K⁺ pump moves Na⁺ out of the cell (ATP)', 'Na⁺ diffuses in, carrying glucose with it', 'Glucose leaves by facilitated diffusion', 'Water follows by osmosis'].forEach((s, i) => o.push(key(30, y0 + i * 46, i + 1, s)));
  o.push(hex(60, 875), t(84, 882, 'glucose', { size: 19, fill: C.muted }), dot(230, 875), t(254, 882, 'Na⁺', { size: 19, fill: C.muted }));
  return svg(W, 910, 'Reabsorption in the proximal tubule', o.join('\n'), 'One cell, filtrate to blood');
}

// ---------- 05 loop of Henle ----------
function loop() {
  const o = [];
  const dy = -36, Y = (v) => v + dy;
  const shades = ['#f3efda', '#f0e8cd', '#ede3c0', '#ebe0b5', '#e8dba8', '#e4d593'];
  o.push(rect(30, Y(150), 840, 50, C.tealLight));
  o.push(rect(30, Y(200), 840, 112, shades[0]), rect(30, Y(312), 840, 112, shades[1]), rect(30, Y(424), 840, 112, shades[2]), rect(30, Y(536), 840, 112, shades[3]), rect(30, Y(648), 840, 112, shades[4]));
  o.push(t(40, Y(186), 'CORTEX', { size: 22, weight: 700, fill: C.tealDark }), t(40, Y(236), 'MEDULLA', { size: 22, weight: 700, fill: C.olive }));
  // limb fills get darker downwards
  const fills = ['#f8f2dc', '#f3e7bd', '#eddca5', '#e6cf86', '#dfc25f'];
  const limb = (x) => fills.map((f, i) => rect(x, Y(170 + i * 104), 30, 104, f)).join('');
  o.push(limb(286), limb(426));
  const duct = ['#f8f2dc', '#f3e7bd', '#eddca5', '#e6cf86', '#dfc25f', '#dfc25f'].map((f, i) => rect(674, Y(170 + i * 100), 32, 100, f)).join('');
  o.push(duct);
  o.push(`<path d="M286 ${Y(690)} A84 84 0 0 0 456 ${Y(690)} H426 A54 54 0 0 1 316 ${Y(690)} Z" fill="#dfc25f"/>`);
  o.push(`<path d="M286 ${Y(170)} V${Y(690)} A84 84 0 0 0 456 ${Y(690)} V${Y(170)} M316 ${Y(170)} V${Y(690)} A54 54 0 0 0 426 ${Y(690)} V${Y(170)}" fill="none" stroke="${NAVY}" stroke-width="3.5"/>`);
  o.push(`<path d="M674 ${Y(170)} V${Y(770)} M706 ${Y(170)} V${Y(770)}" fill="none" stroke="${NAVY}" stroke-width="3.5"/>`);
  o.push(arrow(301, Y(186), 301, Y(254), { w: 3.5 }), arrow(441, Y(250), 441, Y(190), { w: 3.5 }), arrow(690, Y(186), 690, Y(254), { w: 3.5 }));
  for (const y of [320, 430, 540]) {
    o.push(arrow(282, Y(y), 216, Y(y), { color: C.tealDark, w: 4, marker: 'ahT' }));
    o.push(arrow(460, Y(y), 524, Y(y), { color: C.olive, w: 4, marker: 'ahO' }));
    o.push(arrow(670, Y(y + 10), 606, Y(y + 10), { color: C.tealDark, w: 4, marker: 'ahT' }));
  }
  o.push(num(301, Y(640), 2, 18), num(441, Y(640), 1, 18), num(690, Y(640), 3, 18));
  o.push(arrow(690, Y(772), 690, Y(812), { color: C.tealDark, w: 4, marker: 'ahT' }), t(690, Y(838), 'urine', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  const y0 = Y(890);
  ['Ascending limb: ions out, no water leaves', 'Descending limb: water leaves by osmosis', 'Collecting duct: water leaves down gradient'].forEach((s, i) => o.push(key(30, y0 + i * 44, i + 1, s)));
  const ky = y0 + 150;
  o.push(rect(40, ky - 14, 34, 28, '#f3efda', '#d8cfae', 2), t(88, ky + 7, 'dilute', { size: 19 }));
  o.push(rect(250, ky - 14, 34, 28, '#dfc25f', C.olive, 2), t(298, ky + 7, 'concentrated', { size: 19 }));
  o.push(arrow(520, ky, 600, ky, { color: C.olive, w: 4, marker: 'ahO' }), t(610, ky + 7, 'ions', { size: 19, weight: 700, fill: C.olive }));
  o.push(arrow(690, ky, 770, ky, { color: C.tealDark, w: 4, marker: 'ahT' }), t(780, ky + 7, 'water', { size: 19, weight: 700, fill: C.tealDark }));
  return svg(W, ky + 40, 'Loop of Henle', o.join('\n'), 'Builds a salt gradient in the medulla');
}

// ---------- 06 ADH ----------
function adh() {
  const o = [];
  const dy = -36, Y = (v) => v + dy;
  o.push(rect(30, Y(162), 400, 46, C.cream, C.olive, 2.5, 23), t(230, Y(193), 'Blood water potential falls', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(arrow(230, Y(210), 230, Y(246), { w: 3.5 }));
  o.push(`<ellipse cx="230" cy="${Y(290)}" rx="150" ry="40" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>`, t(230, Y(298), 'Hypothalamus', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(400, Y(284), 'Osmoreceptors', { size: 21, weight: 700, fill: C.tealDark }), t(400, Y(313), 'shrink and signal', { size: 19, fill: C.muted }));
  o.push(line(230, Y(331), 230, Y(405), C.tealDark, 3.5), t(246, Y(377), 'impulses', { size: 19, fill: C.muted }));
  o.push(rect(100, Y(405), 260, 60, C.teal, C.tealDark, 2.5, 12), t(230, Y(442), 'Posterior pituitary', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(rect(360, Y(425), 500, 30, '#f6d8d0', C.rust, 2.5, 15));
  for (const x of [400, 470, 540, 610]) o.push(dot(x, Y(440), 9));
  o.push(arrow(660, Y(440), 850, Y(440), { color: C.rust, w: 3, marker: 'ahR' }));
  o.push(t(620, Y(410), 'ADH in blood', { size: 20, weight: 700, fill: C.olive }), t(660, Y(488), 'to the kidney', { size: 19, fill: C.muted }));
  o.push(t(W / 2, Y(548), 'Collecting duct cell', { size: 21, weight: 700, anchor: 'middle' }));
  const cell = (x0) => rect(x0, Y(580), 400, 70, FIL) + rect(x0, Y(650), 400, 140, C.tealLight) + rect(x0, Y(790), 400, 70, '#f2e7b8') +
    line(x0, Y(650), x0 + 400, Y(650), C.tealDark, 5) + line(x0, Y(650), x0, Y(790), C.tealDark, 2.5) + line(x0 + 400, Y(650), x0 + 400, Y(790), C.tealDark, 2.5) +
    t(x0 + 10, Y(610), 'Filtrate', { size: 20, weight: 700, fill: C.tealDark }) + t(x0 + 10, Y(845), 'Medulla', { size: 20, weight: 700, fill: C.olive });
  const vesicle = (x, y) => `<circle cx="${x}" cy="${Y(y)}" r="21" fill="#ffffff" stroke="${C.tealDark}" stroke-width="3"/>` + rect(x - 8, Y(y) - 9, 5, 18, C.tealDark, 'none', 0, 2) + rect(x + 3, Y(y) - 9, 5, 18, C.tealDark, 'none', 0, 2);
  const receptor = (x) => `<polygon points="${x - 13},${Y(790)} ${x},${Y(765)} ${x + 13},${Y(790)}" fill="#ffffff" stroke="${NAVY}" stroke-width="2.5"/>`;
  o.push(cell(30));
  o.push(arrow(230, Y(598), 230, Y(640), { color: C.tealDark, w: 3, marker: 'ahT' }), t(246, Y(628), 'little water', { size: 19, fill: C.muted }));
  o.push(vesicle(120, 715), vesicle(230, 737), vesicle(340, 715), receptor(370), t(420, Y(845), 'receptor', { size: 19, fill: C.muted, anchor: 'end' }));
  o.push(cell(470));
  for (const x of [595, 625, 675, 705, 755, 785]) o.push(rect(x - 5, Y(639), 10, 22, '#6fa9a1', C.tealDark, 2, 3));
  for (const x of [610, 690, 770]) o.push(arrow(x, Y(612), x, Y(820), { color: C.tealDark, w: 4.5, marker: 'ahT' }));
  o.push(receptor(810), dot(810, Y(808), 9), t(860, Y(845), 'receptor', { size: 19, fill: C.muted, anchor: 'end' }));
  o.push(t(230, Y(892), 'Hydrated: less ADH', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(230, Y(930), 'Vesicles stay inside', { size: 19, anchor: 'middle' }), t(230, Y(970), 'Large, dilute urine', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(t(670, Y(892), 'Dehydrated: more ADH', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }), t(670, Y(930), 'Vesicles fuse, pores open', { size: 19, anchor: 'middle' }), t(670, Y(970), 'Small, concentrated urine', { size: 19, weight: 700, anchor: 'middle' }));
  return svg(W, 970, 'ADH and water balance', o.join('\n'), 'Dehydrated: more ADH, more water kept');
}

// ---------- 07 blood glucose control ----------
function glucoseControl() {
  const o = [];
  const dy = -36, Y = (v) => v + dy;
  o.push(rect(100, Y(252), 760, 36, C.cream));
  o.push(line(100, Y(170), 100, Y(360), NAVY, 3), line(100, Y(360), 862, Y(360), NAVY, 3));
  o.push(t(54, Y(265), 'Blood glucose', { size: 19, weight: 700, anchor: 'middle' }).replace('<text', `<text transform="rotate(-90 54 ${Y(265)})"`));
  o.push(path(`M100 ${Y(270)} C170 ${Y(262)} 220 ${Y(215)} 290 ${Y(215)} C360 ${Y(215)} 380 ${Y(262)} 470 ${Y(268)} C560 ${Y(274)} 600 ${Y(296)} 670 ${Y(296)} C740 ${Y(296)} 780 ${Y(270)} 860 ${Y(270)}`, { stroke: C.tealDark, w: 4.5 }));
  o.push(t(372, Y(225), 'insulin', { size: 20, weight: 700, fill: C.tealDark }), t(670, Y(330), 'glucagon', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(860, Y(243), `normal range 4–6 mmol dm${sup('−3')}`, { size: 20, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(arrow(290, Y(402), 290, Y(368), { w: 3 }), t(290, Y(427), 'meal', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(arrow(670, Y(402), 670, Y(368), { w: 3 }), t(670, Y(427), 'exercise', { size: 20, weight: 700, anchor: 'middle' }));
  const col = (cx, head, hf, he, hc, cells) => {
    o.push(rect(cx - 200, Y(450), 400, 52, hf, he, 2.5, 26), t(cx, Y(484), head, { size: 22, weight: 700, fill: hc, anchor: 'middle' }));
    o.push(arrow(cx, Y(504), cx, Y(530), { w: 4 }));
    o.push(rect(cx - 200, Y(534), 400, 52, '#ffffff', NAVY, 2.5, 26), t(cx, Y(568), cells, { size: 21, weight: 700, anchor: 'middle' }));
    o.push(arrow(cx, Y(588), cx, Y(626), { w: 4 }));
    o.push(rect(cx - 200, Y(630), 400, 340, '#ffffff', NAVY, 2.5, 12));
    o.push(t(cx - 184, Y(662), 'Liver cell', { size: 20, weight: 700, fill: C.muted }));
    o.push(line(cx - 184, Y(810), cx + 184, Y(810), '#c9d6d4', 2));
  };
  col(230, 'Glucose too high', C.tealLight, C.tealDark, C.tealDark, 'Beta cells: insulin');
  col(670, 'Glucose too low', C.cream, C.olive, C.olive, 'Alpha cells: glucagon');
  // left contents
  o.push(t(230, Y(695), 'Glycogenesis', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(glucose3(120, Y(755)), t(130, Y(797), 'glucose', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(arrow(188, Y(745), 282, Y(745), { color: C.tealDark, w: 4.5, marker: 'ahT' }));
  o.push(glycogen(350, Y(745)), t(350, Y(797), 'glycogen', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(t(46, Y(841), 'Muscle and fat cells', { size: 20, weight: 700, fill: C.muted }));
  o.push(line(68, Y(889), 392, Y(889), C.tealDark, 5));
  for (const x of [150, 310]) o.push(rect(x - 16, Y(866), 32, 46, '#6fa9a1', C.tealDark, 2.5, 8), arrow(x - 2, Y(846), x - 2, Y(910), { w: 3 }), hex(x + 40, Y(859), 10));
  o.push(t(230, Y(957), 'More glucose channels', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  // right contents
  o.push(t(670, Y(695), 'Glycogenolysis', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(glycogen(560, Y(745)), t(560, Y(797), 'glycogen', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(arrow(618, Y(745), 712, Y(745), { color: C.olive, w: 4.5, marker: 'ahO' }));
  o.push(glucose3(780, Y(755)), t(790, Y(797), 'glucose', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(t(486, Y(841), 'Gluconeogenesis', { size: 20, weight: 700, fill: C.muted }));
  o.push(dot(530, Y(866), 12, C.tealLight, C.tealDark), dot(560, Y(881), 12, C.tealLight, C.tealDark), `<polygon points="580,${Y(856)} 622,${Y(856)} 601,${Y(882)}" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(arrow(638, Y(868), 732, Y(868), { color: C.olive, w: 4.5, marker: 'ahO' }), glucose3(780, Y(878)));
  o.push(t(566, Y(924), 'amino acids', { size: 19, fill: C.muted, anchor: 'middle' }), t(566, Y(948), 'glycerol', { size: 19, fill: C.muted, anchor: 'middle' }), t(790, Y(944), 'glucose', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(rect(100, Y(990), 260, 52, C.tealLight, C.tealDark, 2.5, 26), t(230, Y(1024), 'Glucose falls', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(rect(540, Y(990), 260, 52, C.cream, C.olive, 2.5, 26), t(670, Y(1024), 'Glucose rises', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(W / 2, Y(1078), 'Adrenaline (stress) also triggers glycogenolysis', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  return svg(W, 1070, 'Blood glucose control', o.join('\n'), 'Insulin and glucagon work against each other');
}

// ---------- 08 second messenger ----------
function secondMessenger() {
  const o = [];
  const dy = -36, Y = (v) => v + dy;
  o.push(rect(0, Y(150), W, 150, FIL), rect(0, Y(300), W, 40, '#b5d3cf', C.tealDark, 2), rect(0, Y(340), W, 740, C.tealLight));
  o.push(t(30, Y(190), 'Outside the cell', { size: 20, weight: 700, fill: C.tealDark }), t(30, Y(470), 'Inside the liver cell', { size: 20, weight: 700, fill: C.tealDark }));
  o.push(`<polygon points="120,${Y(246)} 140,${Y(212)} 160,${Y(246)}" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2.5"/>`, arrow(140, Y(250), 140, Y(280), { w: 3.5 }));
  o.push(rect(118, Y(282), 44, 74, '#6fa9a1', C.tealDark, 2.5, 12), num(140, Y(320), 1, 17));
  o.push(rect(298, Y(282), 44, 74, '#6fa9a1', C.tealDark, 2.5, 12), num(320, Y(320), 3, 17));
  o.push(`<circle cx="230" cy="${Y(400)}" r="27" fill="#d7ebe7" stroke="${C.tealDark}" stroke-width="3"/>`, num(230, Y(400), 2, 17));
  o.push(arrow(150, Y(360), 205, Y(385), { w: 3 }), arrow(255, Y(385), 300, Y(360), { w: 3 }));
  o.push(arrow(320, Y(360), 320, Y(416), { w: 3.5 }));
  o.push(rect(270, Y(420), 100, 40, '#ffffff', NAVY, 2.5, 20), t(320, Y(447), 'ATP', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(arrow(320, Y(462), 320, Y(500), { w: 3.5 }));
  o.push(rect(260, Y(504), 120, 44, C.cream, C.olive, 2.5, 22), t(320, Y(533), 'cAMP', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(arrow(320, Y(550), 320, Y(588), { w: 3.5 }));
  o.push(`<circle cx="320" cy="${Y(620)}" r="30" fill="#d7ebe7" stroke="${C.tealDark}" stroke-width="3"/>`, num(320, Y(620), 4, 18));
  o.push(arrow(320, Y(652), 320, Y(684), { w: 3 }));
  const top = [320, 704], mid = [[260, 764], [320, 764], [380, 764]];
  for (const [x, y] of mid) o.push(line(top[0], Y(top[1]), x, Y(y), NAVY, 1.8));
  const leaves = [[183, 832], [218, 832], [252, 832], [286, 832], [320, 832], [354, 832], [388, 832], [422, 832], [456, 832]];
  leaves.forEach(([x, y], i) => o.push(line(mid[Math.floor(i / 3)][0], Y(764), x, Y(y), NAVY, 1.8)));
  o.push(dot(320, Y(704), 13), ...mid.map(([x, y]) => dot(x, Y(y), 12)), ...leaves.map(([x, y]) => dot(x, Y(y), 10)));
  o.push(t(320, Y(888), `e.g. 50 each: 50${sup('3')} = 125 000`, { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(arrow(320, Y(900), 320, Y(944), { w: 4 }));
  o.push(glycogen(210, Y(984)), arrow(248, Y(984), 334, Y(984), { color: C.olive, w: 4.5, marker: 'ahO' }), glucose3(395, Y(994)));
  const steps = [[250, 'Glucagon binds receptor'], [400, 'G-protein activated'], [482, 'Cyclase makes cAMP from ATP'], [620, 'cAMP activates kinase A'], [764, 'Each enzyme activates many'], [985, 'Glycogen to glucose']];
  steps.forEach(([y, s], i) => o.push(num(520, Y(y), i + 1, 20), t(552, Y(y) + 7, s, { size: 20 })));
  return svg(W, 1000, 'Glucagon: a second messenger', o.join('\n'), 'The hormone stays outside the liver cell');
}

// ---------- 09 glucose tolerance ----------
function tolerance() {
  const o = [];
  const dy = -36;
  const X = (m) => 120 + m * 6, Y = (g) => 560 + dy - g * 24.375;
  o.push(rect(X(0), Y(6), X(120) - X(0), Y(4) - Y(6), C.cream));
  for (const g of [0, 4, 8, 12, 16]) o.push(line(112, Y(g), 120, Y(g), NAVY, 2.5), t(104, Y(g) + 6, String(g), { size: 18, fill: C.muted, anchor: 'end' }));
  for (const m of [0, 30, 60, 90, 120]) o.push(line(X(m), Y(0), X(m), Y(0) + 8, NAVY, 2.5), t(X(m), Y(0) + 32, String(m), { size: 18, fill: C.muted, anchor: 'middle' }));
  o.push(line(120, Y(16), 120, Y(0), NAVY, 3), line(120, Y(0), 850, Y(0), NAVY, 3));
  o.push(t(36, Y(8), `Glucose (mmol dm${sup('−3')})`, { size: 19, weight: 700, anchor: 'middle' }).replace('<text', `<text transform="rotate(-90 36 ${Y(8)})"`));
  o.push(t(480, Y(0) + 72, 'Time after the drink (min)', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(`<line x1="${X(0)}" y1="${Y(7.4)}" x2="${X(120)}" y2="${Y(7.4)}" stroke="${C.rust}" stroke-width="2" stroke-dasharray="9 6"/>`);
  const A = [[0, 4.9], [30, 7.8], [60, 6.6], [90, 5.4], [120, 4.9]], B = [[0, 7.4], [30, 13.2], [60, 14.0], [90, 12.1], [120, 10.4]];
  const series = (d, c) => path('M' + d.map(([m, g]) => `${X(m)} ${Y(g)}`).join(' L'), { stroke: c, w: 4.5 }) + d.map(([m, g]) => `<circle cx="${X(m)}" cy="${Y(g)}" r="8" fill="#ffffff" stroke="${c}" stroke-width="3.5"/>`).join('');
  o.push(series(B, C.rust), series(A, C.tealDark));
  o.push(t(X(120) + 12, Y(10.4) + 8, 'B', { size: 22, weight: 700, fill: C.rust }), t(X(120) + 12, Y(4.9) + 8, 'A', { size: 22, weight: 700, fill: C.tealDark }));
  o.push(t(480, Y(14.0) - 22, 'B: peaks higher, stays high', { size: 20, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(X(120) - 32, Y(7.4) - 14, 'still 3.0 above start', { size: 19, weight: 700, fill: C.rust, anchor: 'end' }));
  o.push(t(X(30), Y(7.8) + 34, '+59%', { size: 19, weight: 700, fill: C.tealDark }));
  o.push(t(130, Y(4) + 22, 'normal fasting 4–6', { size: 19, weight: 700, fill: C.olive }));
  o.push(t(X(120) - 62, Y(1.9), 'A: back to start', { size: 19, weight: 700, fill: C.tealDark, anchor: 'end' }));
  const cy = 690 + dy;
  o.push(panel(30, cy, 400, 330), panel(470, cy, 400, 330));
  o.push(t(50, cy + 44, 'Type 1', { size: 23, weight: 700 }));
  for (const x of [120, 200, 280]) o.push(`<circle cx="${x}" cy="${cy + 132}" r="29" fill="none" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="5 4"/>`, path(`M${x - 13} ${cy + 119} L${x + 13} ${cy + 145} M${x + 13} ${cy + 119} L${x - 13} ${cy + 145}`, { stroke: C.rust, w: 4 }));
  o.push(`<circle cx="360" cy="${cy + 132}" r="30" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="3"/>`);
  o.push(t(240, cy + 200, 'Beta cells', { size: 19, fill: C.muted, anchor: 'middle' }), t(230, cy + 250, 'Beta cells destroyed', { size: 21, weight: 700, anchor: 'middle' }), t(230, cy + 286, 'Little or no insulin', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(t(490, cy + 44, 'Type 2', { size: 23, weight: 700 }), t(608, cy + 40, 'insulin', { size: 19, fill: C.olive }));
  o.push(line(498, cy + 110, 842, cy + 110, C.tealDark, 5));
  for (const x of [540, 640, 740]) o.push(`<polygon points="${x - 13},${cy + 82} ${x},${cy + 56} ${x + 13},${cy + 82}" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2"/>`, `<polygon points="${x - 9},${cy + 86} ${x + 9},${cy + 86} ${x},${cy + 104}" fill="${NAVY}"/>`, `<polygon points="${x - 11},${cy + 114} ${x + 11},${cy + 114} ${x},${cy + 140}" fill="none" stroke="${NAVY}" stroke-width="2" stroke-dasharray="4 3"/>`);
  o.push(t(626, cy + 176, 'Unresponsive receptors', { size: 19, fill: C.muted, anchor: 'middle' }), t(670, cy + 250, 'Cells respond poorly', { size: 21, weight: 700, anchor: 'middle' }), t(670, cy + 286, 'to insulin', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1014, 'Glucose tolerance test', o.join('\n'), 'Blood glucose after a glucose drink (example data)');
}

export const figures = [
  { name: '04-pct-reabsorption', after: '### Insulin secretion: the beta cell sequence', svg: pct(),
    alt: 'One proximal tubule cell between filtrate (left) and blood (right) with microvilli, mitochondria and tight junctions. Step 1: a sodium-potassium pump moves Na+ out of the cell using ATP. Step 2: Na+ diffuses in through a co-transporter carrying glucose. Step 3: glucose leaves by facilitated diffusion. Step 4: water follows by osmosis.',
    caption: 'Active transport of sodium out of the cell drives co-transport of glucose in, and water follows by osmosis.' },
  { name: '01-temperature-control', after: '## Key terms', svg: temperature(),
    alt: 'A strip shows receptors in skin and blood, the hypothalamus as coordinator, effectors in skin and muscle and the restored set point, with a feedback line back to the start. Two skin cross-sections follow. Too hot: wide blood vessel loop (vasodilation), sweat droplets and flat hairs. Too cold: narrow loop (vasoconstriction), no sweat, raised hairs and shivering muscle.',
    caption: 'Temperature control is negative feedback: receptors, hypothalamus and effectors reverse any change from the set point.' },
  { name: '06-adh-osmoregulation', after: '### Answers', svg: adh(),
    alt: 'Top: a fall in blood water potential makes hypothalamus osmoreceptors shrink and signal the posterior pituitary by impulses, which releases ADH into the blood, going to the kidney. Bottom: two collecting duct cells. With little ADH vesicles stay inside and little water leaves; with ADH the vesicles fuse, aquaporin pores open and more water leaves by osmosis, giving small concentrated urine.',
    caption: 'ADH makes the collecting duct more permeable to water by inserting aquaporins, so less water is lost in urine.' },
  { name: '09-glucose-tolerance', after: '### Insulin secretion: the beta cell sequence', svg: tolerance(),
    alt: 'A graph of blood glucose for two people over 120 minutes after a glucose drink. Person A starts at 4.9, peaks at 7.8 (a 59 percent rise) and returns to 4.9. Person B starts at 7.4, peaks at 14.0 and is still 10.4, 3.0 above the start, at 120 minutes. Two cards show Type 1 (beta cells destroyed) and Type 2 (receptors respond poorly to insulin).',
    caption: 'A person whose glucose does not return to its starting range after a glucose drink may have diabetes.' },
  { name: '03-ultrafiltration', after: '## Quick self-test', svg: ultrafiltration(),
    alt: 'Blood with red cells, plasma proteins and small molecules lies on the left. Fluid crosses the endothelium with gaps, the basement membrane mesh and the podocyte slits into the capsule space. Water, glucose, urea and ions pass; cells and proteins stay. A bar diagram of example pressures (9.6 out, 2.1 and 4.5 back) gives 3.0 kPa net outward.',
    caption: 'Blood is forced through three layers; the basement membrane is the main filter, and cells and proteins stay in the blood.' },
  { name: '07-blood-glucose-control', after: '### Insulin secretion: the beta cell sequence', svg: glucoseControl(),
    alt: 'A graph of blood glucose against time with a shaded 4 to 6 mmol per dm cubed band: a meal raises it and insulin brings it back, exercise lowers it and glucagon raises it. Below, glucose too high: beta cells release insulin, the liver makes glycogen and muscle and fat cells gain glucose channels. Glucose too low: alpha cells release glucagon, the liver breaks glycogen down and makes glucose from amino acids and glycerol.',
    caption: 'Insulin lowers and glucagon raises blood glucose, acting on the liver and on muscle and fat cells.' },
  { name: '08-second-messenger', after: '### Glucagon and adrenaline signalling in outline', svg: secondMessenger(),
    alt: 'A liver cell membrane with glucagon outside. Glucagon binds a receptor; a G-protein is activated; adenylyl cyclase makes cAMP from ATP; cAMP activates protein kinase A; an enzyme cascade amplifies the signal (for example 50 at each of three stages gives 125 000); glycogen is broken down to glucose.',
    caption: 'Glucagon never enters the cell: cAMP relays the message and the enzyme cascade amplifies it.' },
  { name: '02-nephron', after: '## Nephron map', svg: nephron(),
    alt: 'A schematic nephron across the cortex and medulla: wide afferent and narrow efferent arterioles at the glomerulus inside Bowman’s capsule, the coiled proximal tubule, the loop of Henle dipping into the medulla, the coiled distal tubule and a collecting duct shared with other nephrons that runs to the renal pelvis. Numbers give the job of each part.',
    caption: 'The nephron runs from the glomerulus in the cortex, through the loop of Henle in the medulla, to the collecting duct.' },
  { name: '05-loop-of-henle', after: '## Nephron map', svg: loop(),
    alt: 'A loop of Henle and a collecting duct drawn through a medulla that gets darker towards the bottom. Water leaves the descending limb by osmosis, so the filtrate gets more concentrated down the limb. Ions are pumped out of the ascending limb, which is impermeable to water, so the filtrate gets more dilute going up. Water leaves the collecting duct down the same gradient.',
    caption: 'The ascending limb pumps out ions and the descending limb loses water, building a steep gradient that lets the collecting duct recover water.' },
];
