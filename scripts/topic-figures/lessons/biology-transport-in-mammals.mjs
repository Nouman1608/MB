// Board-neutral redraws of nine A Level Biology "transport in mammals" pictures used on OxfordAQA,
// OCR and Edexcel pages. Tier/board pills ("Core: all boards", "Cambridge 9700", board lists,
// "OCR only", "Fetal Hb (Edexcel)") are gone. The cardiac-cycle graph now uses the data table on
// the OxfordAQA page (0.80 s cycle) instead of the older 0.75 s numbers.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-transport-in-mammals';
const W = 900;
const RED = '#b5352e', BLUE = '#2a7090', PINK = '#f2cdc8', LBLUE = '#cfe3ea', HEART = '#ecd3cc', MUSCLE = '#d89a90', COLL = '#efe2c4';

const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const circ = (x, y, r, fill, edge = C.ink, w = 2.5) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${w}"/>`;
const pill = (x, y, w, h, s, fill = '#fff', edge = C.ink, size = 20, color = C.ink) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.min(h / 2, 22)}" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` +
  t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight: 700, anchor: 'middle', fill: color });
const lead = (x1, y1, x2, y2) => line(x1, y1, x2, y2, { w: 2.5 }) + circ(x2, y2, 4.5, C.ink, C.ink, 1);
const num = (x, y, n) => circ(x, y, 16, C.olive, C.olive, 1) + t(x, y + 7, String(n), { size: 19, weight: 700, fill: '#fff', anchor: 'middle' });
const redCell = (x, y, r = 22) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.9}" fill="#d9534a" stroke="#8f2a24" stroke-width="2.5"/><ellipse cx="${x}" cy="${y}" rx="${r * 0.45}" ry="${r * 0.3}" fill="#f2a7a0"/>`;
const sup = (s) => `<tspan baseline-shift="super" font-size="70%">${s}</tspan>`;
const scale = (d0, d1, p0, p1) => (v) => p0 + ((v - d0) * (p1 - p0)) / (d1 - d0);
const poly = (pts, o) => path('M' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L'), o);
// a tube drawn as an outlined thick polyline
const tube = (pts, fill, w = 44) => {
  const d = 'M' + pts.map((p) => p.join(' ')).join(' L');
  return `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="${w + 5}" stroke-linejoin="miter"/><path d="${d}" fill="none" stroke="${fill}" stroke-width="${w}" stroke-linejoin="miter"/>`;
};

// ---------- 1. Vessels ----------
function vessels() {
  const out = [];
  out.push(t(30, 152, 'Artery: thick wall, narrow lumen', { size: 24, weight: 700 }));
  const ax = 185, ay = 330;
  out.push(circ(ax, ay, 140, COLL, C.ink, 3.5), circ(ax, ay, 115, MUSCLE, C.ink, 2.5));
  for (const r of [104, 93, 82]) out.push(circ(ax, ay, r, 'none', '#7a2a22', 2.5));
  out.push(circ(ax, ay, 70, 'none', C.ink, 3), circ(ax, ay, 65, PINK, RED, 2.5));
  const labs = [['Collagen coat', [ax + 100, ay - 66], 230], ['Muscle + elastic fibres', [ax + 62, ay - 52], 275], ['Lumen (narrow)', [ax, ay], 320], ['Endothelium', [ax + 46, ay + 46], 365]];
  labs.forEach(([s, [px, py], ty]) => out.push(lead(360, ty - 6, px, py), t(372, ty, s, { size: 20 })));
  out.push(t(372, 420, 'Wall : lumen = 3 : 5', { size: 19, weight: 700, fill: C.muted }));

  out.push(t(30, 500, 'Vein: thin wall, wide lumen, valves', { size: 24, weight: 700 }));
  const vx = 185, vy = 645;
  out.push(`<ellipse cx="${vx}" cy="${vy}" rx="112" ry="70" fill="${COLL}" stroke="${C.ink}" stroke-width="3"/>`);
  out.push(`<ellipse cx="${vx}" cy="${vy}" rx="104" ry="62" fill="${MUSCLE}" stroke="${C.ink}" stroke-width="2"/>`);
  out.push(`<ellipse cx="${vx}" cy="${vy}" rx="98" ry="56" fill="${LBLUE}" stroke="${BLUE}" stroke-width="2.5"/>`);
  out.push(t(vx, vy + 8, 'Lumen', { size: 21, weight: 700, fill: BLUE, anchor: 'middle' }));
  out.push(lead(350, 586, vx + 104, vy + 8), t(358, 592, 'Thin wall', { size: 20 }));
  out.push(t(372, 756, 'Wall : lumen is small', { size: 19, weight: 700, fill: C.muted }));
  // long section
  out.push(t(660, 552, 'Long section (LS)', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
  out.push(`<rect x="465" y="604" width="410" height="10" rx="5" fill="${MUSCLE}"/><rect x="465" y="672" width="410" height="10" rx="5" fill="${MUSCLE}"/>`);
  out.push(line(465, 616, 875, 616, { w: 2.5 }), line(465, 670, 875, 670, { w: 2.5 }));
  out.push(`<path d="M640 618 L702 628 L702 642 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/><path d="M640 668 L702 658 L702 644 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>`);
  out.push(arrow(488, 643, 600, 643, { color: BLUE, w: 4 }), t(500, 600, 'to heart', { size: 20, weight: 700, fill: BLUE }));
  out.push(arrow(850, 643, 758, 643, { color: C.rust, w: 4, marker: 'ahR', dash: '10 6' }));
  out.push(tl(805, 726, ['backflow', 'blocked'], { size: 20, weight: 700, fill: C.rust, anchor: 'middle' }, 26));
  out.push(line(664, 690, 672, 712, { w: 2.5 }), t(670, 738, 'Valve', { size: 20, weight: 700, anchor: 'middle' }));

  out.push(t(30, 840, 'Capillary: one-cell wall, tiny lumen', { size: 24, weight: 700 }));
  out.push(t(260, 892, 'Wall: one cell thick', { size: 20, anchor: 'middle' }));
  out.push(t(830, 892, 'Lumen = one red cell wide', { size: 19, weight: 700, fill: C.muted, anchor: 'end' }));
  out.push(`<rect x="70" y="962" width="760" height="68" fill="${PINK}"/>`);
  for (let i = 0; i < 7; i++) {
    const x = 72 + i * 108.5;
    out.push(`<rect x="${x}" y="944" width="104" height="18" rx="7" fill="${COLL}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${x}" y="1030" width="104" height="18" rx="7" fill="${COLL}" stroke="${C.ink}" stroke-width="2.5"/>`);
  }
  out.push(lead(262, 902, 288, 950));
  for (let i = 0; i < 5; i++) out.push(redCell(150 + i * 130, 996, 24));
  out.push(arrow(120, 1074, 780, 1074, { color: RED, w: 3.5, marker: 'ahR' }));
  out.push(t(W / 2, 1110, 'Blood flow: red cells in single file', { size: 21, weight: 700, fill: RED, anchor: 'middle' }));
  return svg(W, 1140, 'Three vessels, three jobs', out.join('\n'), 'Cross-sections (TS), not to the same scale');
}

// ---------- 2. Tissue fluid ----------
function tissueFluid() {
  const out = [];
  out.push(`<rect x="30" y="140" width="840" height="190" rx="16" fill="${LBLUE}" stroke="#8fb6c4" stroke-width="2.5"/>`);
  out.push(t(50, 178, 'Tissue fluid', { size: 22, weight: 700, fill: BLUE }));
  out.push(`<ellipse cx="300" cy="262" rx="95" ry="44" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`, t(300, 269, 'Body cell', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  out.push(`<rect x="560" y="206" width="300" height="56" rx="28" fill="#fff" stroke="${C.olive}" stroke-width="2.5"/>`, t(710, 241, 'Lymph capillary', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  out.push(arrow(604, 306, 640, 274, { color: C.olive, marker: 'ahO', w: 3 }), t(586, 316, 'excess drains', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }));
  // capillary
  out.push(`<rect x="50" y="390" width="800" height="130" fill="${PINK}"/>`);
  out.push(line(50, 390, 192, 390, { w: 5 }), line(248, 390, 642, 390, { w: 5 }), line(698, 390, 850, 390, { w: 5 }), line(50, 520, 850, 520, { w: 5 }));
  out.push(arrow(220, 452, 220, 350, { color: C.tealDark, marker: 'ahT', w: 4 }));
  out.push(arrow(670, 342, 670, 452, { color: C.tealDark, marker: 'ahT', w: 4 }));
  for (const [x, y] of [[206, 352], [236, 346], [204, 372], [236, 368], [658, 352], [656, 368]]) out.push(circ(x, y, 5, C.tealDark, C.tealDark, 1));
  for (const [x, y] of [[90, 432], [160, 422], [300, 422], [430, 490], [590, 432], [760, 422], [780, 482]]) out.push(circ(x, y, 10, C.mustard, C.olive, 2.5));
  for (const x of [120, 350, 520]) out.push(redCell(x, 458, 24));
  out.push(arrow(68, 492, 140, 492, { color: RED, w: 4, marker: 'ahR' }));
  out.push(t(50, 560, 'Arterial end', { size: 21, weight: 700 }), t(850, 560, 'Venous end', { size: 21, weight: 700, anchor: 'end' }));
  out.push(redCell(60, 598, 16), t(88, 605, 'Red cell', { size: 19 }));
  out.push(circ(250, 598, 10, C.mustard, C.olive, 2.5), t(270, 605, 'Protein', { size: 19 }));
  out.push(circ(410, 598, 5, C.tealDark, C.tealDark, 1), t(426, 605, 'Water, glucose, ions', { size: 19 }));
  // bars
  const base = 910, sc = 160 / 4.0;
  const bars = (x0, push, head, fill, edge) => {
    out.push(pill(x0 + 40, 654, 310, 52, head, fill, edge, 20, edge));
    out.push(line(x0, base, x0 + 390, base, { w: 3 }));
    const b = [[push, RED, 'Pushes out'], [3.3, C.olive, 'Pulls in']];
    b.forEach(([v, col, lab], i) => {
      const x = x0 + 50 + i * 190;
      out.push(`<rect x="${x}" y="${base - v * sc}" width="100" height="${v * sc}" fill="${col}"/>`);
      out.push(t(x + 50, base - v * sc - 12, v.toFixed(1), { size: 21, weight: 700, fill: col, anchor: 'middle' }));
      out.push(t(x + 50, base + 32, lab, { size: 20, weight: 700, fill: col, anchor: 'middle' }));
    });
  };
  bars(40, 4.0, '+0.7 kPa: net OUT', C.tealLight, C.tealDark);
  bars(470, 1.6, '−1.7 kPa: net IN', PINK, RED);
  out.push(t(W / 2, 990, 'Pushes out = blood pressure. Pulls in = plasma proteins (kPa).', { size: 18, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1020, 'How tissue fluid forms and returns', out.join('\n'), 'Pressure in kPa; figures from the lesson example');
}

// ---------- 3. CO2 transport ----------
function co2Transport() {
  const out = [];
  out.push(circ(450, 440, 255, '#f5dcd8', RED, 4));
  out.push(t(450, 228, 'Red blood cell', { size: 21, weight: 700, fill: RED, anchor: 'middle' }));
  out.push(tl(30, 240, ['CO₂ from', 'respiring cells'], { size: 20, weight: 700 }, 28));
  out.push(arrow(30, 296, 292, 296, { w: 3.5 }));
  out.push(t(450, 288, 'CO₂ + H₂O', { size: 24, weight: 700, anchor: 'middle' }));
  out.push(arrow(450, 306, 450, 364, { w: 3.5 }));
  out.push(tl(466, 328, ['carbonic', 'anhydrase'], { size: 20, weight: 700, fill: C.olive }, 25));
  out.push(t(450, 398, 'H₂CO₃', { size: 24, weight: 700, anchor: 'middle' }));
  out.push(arrow(450, 414, 450, 468, { w: 3.5 }));
  out.push(t(450, 502, 'H⁺ + HCO₃⁻', { size: 24, weight: 700, anchor: 'middle' }));
  out.push(arrow(540, 506, 740, 506, { color: BLUE, w: 3.5 }));
  out.push(t(812, 486, 'HCO₃⁻', { size: 21, weight: 700, fill: BLUE, anchor: 'middle' }), t(812, 515, 'to plasma', { size: 19, fill: BLUE, anchor: 'middle' }));
  out.push(arrow(742, 590, 598, 590, { color: C.tealDark, w: 3.5, marker: 'ahT' }));
  out.push(t(812, 576, 'Cl⁻ in', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }), tl(812, 606, ['chloride', 'shift'], { size: 19, fill: C.tealDark, anchor: 'middle' }, 26));
  out.push(arrow(410, 524, 395, 566, { w: 3.5 }));
  out.push(t(380, 600, 'HHb', { size: 24, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(tl(380, 628, ['haemoglobinic', 'acid'], { size: 19, fill: C.tealDark, anchor: 'middle' }, 24));
  out.push(arrow(338, 598, 236, 668, { color: C.olive, w: 3, marker: 'ahO' }));
  out.push(tl(22, 702, ['O₂ released', 'to tissue'], { size: 20, weight: 700, fill: C.olive }, 28));
  out.push(t(30, 398, 'CO₂ binds Hb', { size: 20, weight: 700 }));
  out.push(arrow(30, 428, 262, 428, { w: 3.5 }));
  out.push(t(282, 438, 'HbCO₂', { size: 23, weight: 700, fill: C.tealDark }));
  out.push(t(316, 468, 'carbamino-Hb', { size: 19, fill: C.tealDark, anchor: 'middle' }));
  out.push(num(216, 332, 1), num(412, 332, 2), num(520, 438, 3), num(324, 552, 4), num(666, 548, 5), num(60, 470, 6));
  out.push(t(W / 2, 772, '1 enters  2 enzyme  3 splits  4 H⁺ mops up  5 HCO₃⁻ out, Cl⁻ in  6 on Hb', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 800, 'How a red cell carries CO₂ away', out.join('\n'), 'In a respiring tissue');
}

// ---------- 4. Oxygen dissociation ----------
function oxygenDissociation() {
  const out = [];
  const X = scale(0, 14, 130, 830), Y = scale(0, 100, 710, 190);
  [20, 40, 60, 80, 100].forEach((v) => out.push(line(130, Y(v), 830, Y(v), { color: '#dde5e5', w: 1.5 })));
  out.push(arrow(130, 710, 848, 710, { w: 3 }), arrow(130, 710, 130, 172, { w: 3 }));
  [0, 2, 4, 6, 8, 10, 12, 14].forEach((v) => out.push(line(X(v), 710, X(v), 720), t(X(v), 746, String(v), { size: 19, anchor: 'middle' })));
  [0, 20, 40, 60, 80, 100].forEach((v) => out.push(line(120, Y(v), 130, Y(v)), t(112, Y(v) + 7, String(v), { size: 19, anchor: 'end' })));
  out.push(t(480, 786, 'Partial pressure of oxygen, pO₂ (kPa)', { size: 21, weight: 700, anchor: 'middle' }));
  out.push(`<text x="34" y="450" font-size="21" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 34 450)">Saturation of haemoglobin (%)</text>`);
  const hill = (p50, n) => (p) => (100 * p ** n) / (p ** n + p50 ** n);
  const adult = hill(3.23, 2.7), bohr = hill(4.105, 2.7), fetal = hill(2.35, 2.7);
  const cv = (f, col) => { const pts = []; for (let p = 0; p <= 14; p += 0.05) pts.push([X(p), Y(f(p))]); return poly(pts, { stroke: col, w: 4.5 }); };
  // lungs: where the adult curve reaches 97%
  const pl = 3.23 * Math.pow(97 / 3, 1 / 2.7);
  out.push(line(130, Y(97), X(pl), Y(97), { color: '#8296a8', w: 2.5, dash: '10 6' }), line(X(pl), Y(97), X(pl), 710, { color: '#8296a8', w: 2.5, dash: '10 6' }));
  out.push(line(X(3), Y(45), X(3), 710, { color: '#8296a8', w: 2.5, dash: '10 6' }));
  out.push(cv(fetal, C.tealDark), cv(adult, C.ink), cv(bohr, C.rust));
  out.push(circ(X(pl), Y(97), 10, C.ink, C.ink, 1), circ(X(3), Y(45), 10, C.ink, C.ink, 1), circ(X(3), Y(30), 10, C.rust, C.rust, 1));
  out.push(t(X(pl) + 14, Y(60), 'Lungs: 97%', { size: 20, weight: 700, fill: '#566a80' }));
  out.push(t(X(3) - 10, 694, 'Tissue', { size: 19, weight: 700, fill: '#566a80', anchor: 'end' }));
  out.push(`<rect x="455" y="470" width="370" height="138" rx="10" fill="#fff" stroke="${C.panelEdge}" stroke-width="2"/>`);
  const ly = [508, 553, 598];
  [['Fetal haemoglobin', C.tealDark], ['Adult', C.ink], ['Adult, high CO₂ (Bohr shift)', C.rust]].forEach(([s, col], i) => out.push(line(470, ly[i] - 6, 520, ly[i] - 6, { color: col, w: 5 }), t(532, ly[i], s, { size: 19, weight: 700, fill: col })));
  out.push(pill(30, 850, 840, 56, '20.0 × (0.97 − 0.45) = 10.4 cm³ O₂ unloaded', '#fff', C.ink, 21));
  out.push(pill(30, 920, 840, 56, '20.0 × (0.97 − 0.30) = 13.4 cm³ with Bohr (+28.8%)', '#fbe6dc', C.rust, 21, C.rust));
  out.push(t(W / 2, 1006, 'per 100 cm³ of blood; full saturation carries 20.0 cm³ O₂', { size: 18, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1035, 'Oxygen dissociation curves', out.join('\n'), 'Haemoglobin loads in lungs, unloads in tissues');
}

// ---------- heart outline helpers ----------
const heartBody = `<path d="M262 400 V840 Q262 945 450 975 Q638 945 638 840 V400 Z" fill="${HEART}" stroke="${C.ink}" stroke-width="3.5"/>`;

// ---------- 5. Heart structure ----------
function heartStructure() {
  const out = [];
  // vessels behind
  out.push(tube([[314, 270], [314, 420]], LBLUE, 42));
  out.push(tube([[414, 262], [414, 572]], LBLUE, 44));
  out.push(tube([[487, 572], [487, 318], [688, 318], [688, 362]], PINK, 42));
  out.push(tube([[800, 467], [600, 467]], PINK, 40));
  out.push(heartBody);
  // re-draw vessel stubs over the heart top edge so they read as entering
  out.push(`<rect x="294" y="396" width="40" height="22" fill="${LBLUE}"/>`, `<rect x="393" y="396" width="42" height="176" fill="${LBLUE}"/>`, `<rect x="467" y="396" width="40" height="176" fill="${PINK}"/>`, `<rect x="600" y="448" width="40" height="38" fill="${PINK}"/>`);
  out.push(line(392, 400, 392, 572, { w: 2.5, color: BLUE }), line(436, 400, 436, 572, { w: 2.5, color: BLUE }));
  out.push(line(466, 400, 466, 572, { w: 2.5, color: RED }), line(508, 400, 508, 572, { w: 2.5, color: RED }));
  // chambers
  out.push(`<rect x="290" y="415" width="96" height="125" fill="${LBLUE}" stroke="${BLUE}" stroke-width="3"/>`);
  out.push(`<rect x="514" y="415" width="96" height="125" fill="${PINK}" stroke="${RED}" stroke-width="3"/>`);
  out.push(`<path d="M290 570 V838 Q300 905 438 930 V570 Z" fill="${LBLUE}" stroke="${BLUE}" stroke-width="3"/>`);
  out.push(`<path d="M462 570 V935 Q545 905 566 845 V570 Z" fill="${PINK}" stroke="${RED}" stroke-width="3"/>`);
  out.push(`<rect x="300" y="540" width="80" height="32" fill="${LBLUE}"/>`, `<rect x="520" y="540" width="80" height="32" fill="${PINK}"/>`);
  // flow arrows
  out.push(arrow(314, 300, 314, 395, { w: 3.5 }), arrow(414, 548, 414, 292, { w: 3.5 }), arrow(487, 548, 487, 332, { w: 3.5 }), arrow(688, 334, 688, 372, { w: 3.5 }), arrow(770, 467, 640, 467, { w: 3.5 }));
  // AV valves + tendons + papillary muscles
  const av = (x1, x2, pm) => {
    out.push(line(x1, 562, x1 + 24, 610, { w: 4 }), line(x2, 562, x2 - 24, 610, { w: 4 }));
    out.push(line(x1 + 24, 610, pm[0] - 6, pm[1] - 18, { w: 1.5 }), line(x2 - 24, 610, pm[0] + 6, pm[1] - 18, { w: 1.5 }));
    out.push(`<ellipse cx="${pm[0]}" cy="${pm[1]}" rx="20" ry="28" fill="${HEART}" stroke="${C.ink}" stroke-width="2.5"/>`);
  };
  av(304, 374, [336, 894]); av(478, 548, [512, 908]);
  // semilunar valves (V shapes at vessel bases)
  out.push(path('M400 548 L414 562 L428 548', { w: 4 }), path('M473 548 L487 562 L501 548', { w: 4 }));
  // coronary artery
  out.push(path('M505 556 Q600 560 604 712', { stroke: RED, w: 5 }));
  // labels left
  const L = (s, ty, px, py, sub) => { out.push(t(244, ty, s, { size: 20, weight: 700, anchor: 'end' }), lead(248, ty - 6, px, py)); if (sub) out.push(t(244, ty + 26, sub, { size: 19, anchor: 'end' })); };
  L('Right atrium', 478, 298, 478);
  L('Semilunar valve', 536, 408, 556);
  L('Tricuspid valve', 628, 312, 584);
  L('Right ventricle', 728, 296, 728, 'thin wall');
  out.push(t(244, 868, 'Tendons,', { size: 20, weight: 700, anchor: 'end' }), t(244, 894, 'papillary muscle', { size: 19, anchor: 'end' }), lead(248, 864, 324, 892));
  const R = (s, ty, px, py, sub, col = C.ink) => { out.push(t(662, ty, s, { size: 20, weight: 700, fill: col }), lead(656, ty - 6, px, py)); if (sub) out.push(t(662, ty + 26, sub, { size: 19 })); };
  R('Left atrium', 568, 578, 478);
  R('Bicuspid valve', 618, 546, 588);
  R('Coronary artery', 678, 604, 680);
  R('Left ventricle', 758, 560, 758, 'thick wall');
  R('Septum', 868, 450, 868);
  // vessel labels
  out.push(t(192, 230, 'Vena cava', { size: 20, weight: 700, anchor: 'middle' }), t(192, 256, 'from body', { size: 20, weight: 700, fill: BLUE, anchor: 'middle' }));
  out.push(t(414, 218, 'Pulmonary artery', { size: 20, weight: 700, anchor: 'middle' }), t(414, 244, 'to lungs', { size: 20, weight: 700, fill: BLUE, anchor: 'middle' }));
  out.push(t(600, 280, 'Aorta to body', { size: 20, weight: 700, anchor: 'middle' }));
  out.push(t(885, 424, 'Pulmonary vein', { size: 20, weight: 700, anchor: 'end' }), t(885, 520, 'from lungs', { size: 20, weight: 700, fill: RED, anchor: 'end' }));
  out.push(pill(30, 1030, 400, 52, 'Oxygenated blood', PINK, RED, 20, RED), pill(470, 1030, 400, 52, 'Deoxygenated blood', LBLUE, BLUE, 20, BLUE));
  return svg(W, 1110, 'Inside the heart', out.join('\n'), 'Arrows show the direction of blood flow');
}

// ---------- 6. Cardiac cycle (data from the OxfordAQA page table) ----------
function cardiacCycle() {
  const out = [];
  const T = [0.05, 0.12, 0.25, 0.45, 0.60];
  const atrium = [1.2, 1.0, 1.4, 1.6, 1.9], vent = [0.9, 7.5, 16.0, 2.0, 0.7], aorta = [10.5, 10.2, 15.4, 11.8, 10.9];
  const X = scale(0, 0.65, 160, 840), Y = scale(0, 18, 530, 190);
  [5, 10, 15].forEach((v) => out.push(line(150, Y(v), 840, Y(v), { color: '#dde5e5', w: 1.5 })));
  out.push(arrow(150, 530, 858, 530, { w: 3 }), arrow(150, 530, 150, 172, { w: 3 }));
  [0, 5, 10, 15].forEach((v) => out.push(line(140, Y(v), 150, Y(v)), t(132, Y(v) + 7, String(v), { size: 19, anchor: 'end' })));
  T.forEach((v) => out.push(line(X(v), 530, X(v), 540), t(X(v), 566, v.toFixed(2), { size: 19, anchor: 'middle' })));
  out.push(t(20, 566, 'Time (s)', { size: 19, weight: 700, fill: C.muted }));
  out.push(`<text x="44" y="360" font-size="21" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 44 360)">Pressure (kPa)</text>`);
  const ser = [[aorta, C.ink, 'Aorta'], [vent, RED, 'Ventricle'], [atrium, C.olive, 'Atrium']];
  ser.forEach(([d, col]) => {
    out.push(poly(d.map((v, i) => [X(T[i]), Y(v)]), { stroke: col, w: 3.5 }));
    d.forEach((v, i) => out.push(circ(X(T[i]), Y(v), 7.5, col, '#fff', 2)));
  });
  ser.forEach(([, col, s], i) => out.push(line(210 + i * 200, 172, 256 + i * 200, 172, { color: col, w: 5 }), t(266 + i * 200, 179, s, { size: 20, weight: 700, fill: col })));
  out.push(pill(690, 108, 180, 44, '75 beats/min', '#fff', C.ink, 19));
  T.forEach((v, i) => out.push(num(X(v), 612, i + 1)));
  const av = ['open', 'closed', 'closed', 'closed', 'open'], sl = ['closed', 'closed', 'open', 'closed', 'closed'];
  const st = (x, y, s) => s === 'open' ? pill(x - 33, y - 20, 66, 40, 'open', C.tealLight, C.tealDark, 16, C.tealDark) : pill(x - 33, y - 20, 66, 40, 'closed', '#e8ecf0', '#566a80', 16, '#566a80');
  out.push(t(14, 698, 'AV valve', { size: 20, weight: 700 }), t(14, 774, 'Semilunar', { size: 20, weight: 700 }));
  T.forEach((v, i) => out.push(st(X(v), 691, av[i]), st(X(v), 767, sl[i])));
  out.push(t(14, 838, 'AV open if atrium &gt; ventricle. Semilunar open if ventricle &gt; aorta.', { size: 19, fill: C.muted }));
  const steps = ['Atria contract, ventricle fills', 'Ventricle contracts, both closed', 'Ejection into aorta', 'Ventricle relaxes, both closed', 'Atrium refills ventricle'];
  steps.forEach((s, i) => out.push(num(46, 906 + i * 50, i + 1), t(80, 913 + i * 50, s, { size: 20 })));
  return svg(W, 1170, 'The cardiac cycle: pressure decides the valves', out.join('\n'), 'Left side of the heart, one cycle of 0.80 s');
}

// ---------- 7. Heart conduction ----------
function heartConduction() {
  const out = [];
  out.push(`<path d="M262 220 V680 Q262 760 450 795 Q638 760 638 680 V220 Z" fill="${HEART}" stroke="${C.ink}" stroke-width="3.5"/>`);
  out.push(`<rect x="290" y="236" width="94" height="122" fill="${LBLUE}" stroke="${BLUE}" stroke-width="3"/>`);
  out.push(`<rect x="514" y="236" width="94" height="122" fill="${PINK}" stroke="${RED}" stroke-width="3"/>`);
  out.push(`<rect x="262" y="364" width="168" height="20" fill="#9aa7b0"/><rect x="470" y="364" width="168" height="20" fill="#9aa7b0"/>`);
  out.push(`<path d="M290 392 V655 Q300 725 438 748 V392 Z" fill="${LBLUE}" stroke="${BLUE}" stroke-width="3"/>`);
  out.push(`<path d="M462 392 V752 Q545 725 566 670 V392 Z" fill="${PINK}" stroke="${RED}" stroke-width="3"/>`);
  // wave
  out.push(arrow(345, 248, 590, 248, { color: C.olive, w: 4, marker: 'ahO' }));
  out.push(arrow(335, 284, 335, 346, { color: C.olive, w: 4, marker: 'ahO' }), arrow(565, 284, 565, 346, { color: C.olive, w: 4, marker: 'ahO' }));
  // bundle of His and Purkyne
  out.push(path('M450 380 V590 L440 690 L400 740 L330 718 L302 650 V488', { stroke: C.rust, w: 5 }));
  out.push(path('M450 590 L460 690 L500 742 L540 700 L550 600 V448', { stroke: C.rust, w: 5 }));
  out.push(arrow(302, 520, 302, 486, { color: C.rust, w: 5, marker: 'ahR' }), arrow(550, 490, 550, 450, { color: C.rust, w: 5, marker: 'ahR' }));
  out.push(circ(330, 262, 15, C.mustard, C.olive, 3), circ(450, 372, 15, C.mustard, C.olive, 3));
  // labels
  const lab = (n, x, y, head, sub, px, py, right) => {
    out.push(num(x, y, n), t(x + 26, y + 7, head, { size: 21, weight: 700 }));
    if (sub) out.push(t(x + 26, y + 35, sub, { size: 20 }));
    out.push(lead(right ? x - 20 : x + 220, right ? y : y, px, py));
  };
  // left side
  out.push(num(30, 264, 1), t(56, 271, 'SAN:', { size: 21, weight: 700 }), t(56, 299, 'pacemaker', { size: 20 }), lead(248, 264, 318, 264));
  out.push(num(30, 404, 3), t(56, 411, 'No conduction', { size: 21, weight: 700 }), t(56, 439, 'across this gap', { size: 20 }), lead(248, 398, 300, 374));
  out.push(num(30, 582, 6), t(56, 589, 'Purkyne tissue', { size: 21, weight: 700 }), lead(248, 582, 302, 580));
  // right side
  out.push(num(680, 182, 2), t(706, 189, 'Atria', { size: 21, weight: 700 }), t(706, 217, 'contract', { size: 20 }), lead(664, 190, 590, 248));
  out.push(num(680, 404, 4), t(706, 411, 'AVN:', { size: 21, weight: 700 }), t(706, 439, 'short delay', { size: 20 }), lead(664, 400, 466, 372));
  out.push(num(680, 502, 5), t(706, 509, 'Bundle of His', { size: 21, weight: 700 }), lead(664, 504, 450, 510));
  out.push(num(680, 612, 7), t(706, 619, 'Ventricles', { size: 21, weight: 700 }), tl(706, 647, ['contract from', 'apex up'], { size: 20 }, 28), lead(664, 612, 550, 620));
  void lab;
  return svg(W, 830, 'How the beat spreads', out.join('\n'), 'Cardiac muscle is myogenic: it starts its own beat');
}

// ---------- 8. Heart rate control ----------
function heartRateControl() {
  const out = [];
  out.push(t(W / 2, 156, 'Receptors in carotid arteries and aorta', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
  const box = (x, y, w, h, head, sub, fill, edge, col) => {
    out.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}" stroke="${edge}" stroke-width="3"/>`);
    out.push(t(x + w / 2, y + 40, head, { size: 22, weight: 700, fill: col, anchor: 'middle' }));
    out.push(t(x + w / 2, y + 76, sub, { size: 20, anchor: 'middle' }));
  };
  box(30, 182, 400, 104, 'Chemoreceptors', 'detect fall in pH', LBLUE, '#4d8aa3', BLUE);
  box(470, 182, 400, 104, 'Pressure receptors', 'detect blood pressure', LBLUE, '#4d8aa3', BLUE);
  out.push(arrow(230, 286, 338, 352, { w: 3.5 }), arrow(670, 286, 562, 352, { w: 3.5 }));
  box(200, 358, 500, 102, 'Cardiac control centre', 'in the medulla oblongata', '#fff', C.ink, C.ink);
  out.push(arrow(330, 460, 330, 598, { color: RED, w: 4.5, marker: 'ahR' }));
  out.push(arrow(570, 460, 570, 598, { color: BLUE, w: 4.5 }));
  out.push(t(312, 510, 'Sympathetic', { size: 21, weight: 700, fill: RED, anchor: 'end' }), t(312, 538, 'speeds up', { size: 20, fill: RED, anchor: 'end' }), t(312, 566, 'noradrenaline', { size: 20, fill: C.muted, anchor: 'end' }));
  out.push(t(588, 510, 'Vagus nerve', { size: 21, weight: 700, fill: BLUE }), t(588, 538, 'slows down', { size: 20, fill: BLUE }), t(588, 566, 'acetylcholine', { size: 20, fill: C.muted }));
  box(200, 604, 500, 102, 'SAN (pacemaker)', 'sets the heart rate', C.cream, C.olive, C.olive);
  out.push(`<rect x="732" y="618" width="150" height="74" rx="14" fill="#fff" stroke="${C.rust}" stroke-width="3"/>`);
  out.push(t(807, 662, 'Adrenaline', { size: 21, weight: 700, fill: C.rust, anchor: 'middle' }));
  out.push(arrow(730, 655, 704, 655, { color: C.rust, w: 3.5, marker: 'ahR' }));
  out.push(arrow(450, 706, 450, 744, { w: 4 }));
  out.push(`<rect x="250" y="746" width="400" height="56" rx="28" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`, t(450, 782, 'Heart rate changes', { size: 21, weight: 700, anchor: 'middle' }));
  out.push(path('M248 774 H92 V300', { stroke: '#566a80', w: 3, extra: 'stroke-dasharray="10 7"' }));
  out.push(`<path d="M82 304 L92 286 L102 304 Z" fill="#566a80"/>`);
  out.push(t(W / 2, 838, 'Faster blood flow clears CO₂: pH and pressure return', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
  out.push(t(60, 896, 'Heart rate (beats per min), +121% in exercise', { size: 20, weight: 700, fill: C.muted }));
  const base = 1072, sc = 120 / 150;
  out.push(line(60, base, 840, base, { w: 3 }));
  [[68, C.ink, 'Rest: pH 7.40'], [150, C.rust, 'Exercise: pH 7.32'], [82, C.tealDark, 'Recovery: pH 7.39']].forEach(([v, col, s], i) => {
    const x = 95 + i * 300;
    out.push(`<rect x="${x}" y="${base - v * sc}" width="110" height="${v * sc}" fill="${col}"/>`);
    out.push(t(x + 55, base - v * sc - 12, String(v), { size: 22, weight: 700, fill: col, anchor: 'middle' }));
    out.push(t(x + 55, base + 30, s, { size: 20, weight: 700, anchor: 'middle' }));
  });
  return svg(W, 1135, 'How heart rate is controlled', out.join('\n'), 'A negative feedback loop');
}

// ---------- 9. Atheroma ----------
function atheroma() {
  const out = [];
  const k = 59; // px per mm of lumen diameter
  const art = (cx, cy) => { out.push(circ(cx, cy, 190, COLL, C.ink, 3.5), circ(cx, cy, 150, MUSCLE, C.ink, 2.5), circ(cx, cy, 126, 'none', C.ink, 2.5)); };
  art(235, 360); art(665, 360);
  out.push(circ(235, 360, 2.0 * k, PINK, RED, 2.5));
  out.push(arrow(124, 380, 346, 380, { w: 3, marker: 'ah' }), `<line x1="124" y1="380" x2="346" y2="380" stroke="${C.ink}" stroke-width="3" marker-start="url(#ah)"/>`);
  out.push(t(235, 366, '4.0 mm', { size: 21, weight: 700, anchor: 'middle' }));
  out.push(circ(665, 360, 120, '#e6cf6a', C.olive, 3));
  const r2 = 1.4 * k;
  out.push(circ(665, 360 - (120 - r2), r2, PINK, RED, 2.5));
  const cy2 = 360 - (120 - r2);
  out.push(`<line x1="${665 - r2 + 4}" y1="${cy2 + 4}" x2="${665 + r2 - 4}" y2="${cy2 + 4}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)" marker-start="url(#ah)"/>`);
  out.push(t(665, cy2 - 12, '2.8 mm', { size: 21, weight: 700, anchor: 'middle' }));
  out.push(t(665, 456, 'Atheroma', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  out.push(t(235, 614, 'Healthy', { size: 23, weight: 700, anchor: 'middle' }), t(665, 614, 'With atheroma', { size: 23, weight: 700, anchor: 'middle' }));
  out.push(pill(30, 646, 400, 52, `Area 12.57 mm${sup('2')}`, '#fff', C.ink, 21));
  out.push(pill(470, 646, 400, 52, `Area 6.16 mm${sup('2')}`, '#fff', C.olive, 21, C.olive));
  out.push(pill(200, 716, 500, 56, 'Diameter −30%, area −51%', '#fbe6dc', C.rust, 22, C.rust));
  const chain = ['Atheroma damages the lining', 'Clot (thrombus) forms', 'Coronary artery blocked', 'Heart muscle dies: MI'];
  chain.forEach((s, i) => {
    const y = 812 + i * 90, last = i === 3;
    out.push(pill(200, y, 500, 52, s, last ? PINK : '#fff', last ? RED : C.ink, 21, last ? RED : C.ink));
    if (!last) out.push(arrow(450, y + 52, 450, y + 88, { w: 3 }));
  });
  return svg(W, 1170, 'How atheroma narrows an artery', out.join('\n'), 'Cross-sections drawn to the same scale');
}

export const figures = [
  { name: '05-heart-structure', after: '### Gross structure', svg: heartStructure(),
    alt: 'Frontal section of the heart with the four chambers, septum, tricuspid and bicuspid valves, tendons and papillary muscles, semilunar valves, coronary artery and the four main vessels with flow arrows. The left ventricle wall is thicker than the right. Red marks oxygenated and blue deoxygenated blood.',
    caption: 'Where each vessel and valve sits and which way blood flows.' },
  { name: '07-heart-conduction', after: '### Tissue fluid', svg: heartConduction(),
    alt: 'Heart section showing the SAN starting a wave across the atria, a non-conducting gap, the AVN delay, the bundle of His down the septum and Purkyne tissue carrying the wave up the ventricle walls from the apex.',
    caption: 'The order in which excitation travels explains why atria contract before ventricles.' },
  { name: '08-heart-rate-control', after: '## Required practical 5: heart rate or pulse rate', svg: heartRateControl(),
    alt: 'Feedback loop: chemoreceptors and pressure receptors signal the cardiac control centre in the medulla, which uses the sympathetic nerve to speed up or the vagus to slow down the SAN. Adrenaline also acts on the SAN. Bars show rest, exercise and recovery rates with blood pH.',
    caption: 'Heart rate is adjusted by negative feedback using opposite nerves.' },
  { name: '09-atheroma', after: '### 3.2.7.1 The biological basis of heart disease', svg: atheroma(),
    alt: 'Two artery cross-sections to the same scale: a 4.0 mm lumen (12.57 mm2) and a lumen narrowed by atheroma to 2.8 mm (6.16 mm2), a 30% fall in diameter but 51% in area. A chain shows clot formation, a blocked coronary artery and heart muscle death.',
    caption: 'A 30% narrowing in diameter halves the cross-sectional area.' },
  { name: '01-vessels', after: '### Gross structure', svg: vessels(),
    alt: 'Three cross-sections side by side: a thick-walled artery with a narrow lumen (wall to lumen 3:5 as in the lesson example), a thin-walled vein with a wide lumen and a long section showing a valve, and a capillary whose one-cell wall holds red cells in single file. Each layer is labelled.',
    caption: 'Artery, vein and capillary structure matched to function.' },
  { name: '06-cardiac-cycle', after: '### Interpreting cardiac cycle data', svg: cardiacCycle(),
    alt: 'Pressure graph for left atrium, ventricle and aorta at five times (0.05, 0.12, 0.25, 0.45 and 0.60 s) in a 0.80 s cycle, with the open or closed state of the atrioventricular and semilunar valves worked out from the pressures. The cycle gives 75 beats per minute.',
    caption: 'Valves open and close only because of pressure differences.' },
  { name: '02-tissue-fluid', after: '### Tissue fluid', svg: tissueFluid(),
    alt: 'A capillary from arterial to venous end beside a body cell and lymph capillary. Bars show blood pressure (4.0 then 1.6 kPa) against the 3.3 kPa pull of plasma proteins, giving a net 0.7 kPa out then 1.7 kPa in. Excess fluid drains to lymph.',
    caption: 'Pressure balance explains why fluid leaves at the arterial end and returns at the venous end.' },
  { name: '03-co2-transport', after: '### Tissue fluid', svg: co2Transport(),
    alt: 'Numbered flow inside a red cell: CO2 enters, carbonic anhydrase makes H2CO3, which splits to H+ and HCO3-. H+ forms haemoglobinic acid and releases O2; HCO3- leaves while Cl- enters; some CO2 binds Hb directly.',
    caption: 'How a red cell carries CO2 and why chloride moves in.' },
  { name: '04-oxygen-dissociation', after: '### 3.2.7.2 Risk factors for coronary heart disease', svg: oxygenDissociation(),
    alt: 'Graph of haemoglobin saturation against pO2: the S-shaped adult curve, the same curve shifted right by high CO2 (Bohr shift) and a fetal curve to the left. The lesson numbers show 97% in the lungs and 45% or 30% at 3 kPa, releasing 10.4 or 13.4 cm3 per 100 cm3.',
    caption: 'Higher CO2 shifts the curve right so more oxygen is unloaded.' },
];
