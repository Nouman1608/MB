// Board-neutral redraws of nine A Level mechanics (forces) pictures first drawn for Cambridge 9709 and
// reused on AQA, OCR, Edexcel IAL and OxfordAQA pages. Same content and numbers as the old pictures;
// the "All boards" / board-name / "Cambridge 9709" pills are gone.
import { C, svg, panel, t, tl, path } from '../style.mjs';

export const slug = 'mathematics-mechanics';
const W = 900;
const BOX = '#f2e7b8', SURF = '#dce9e7';

// text with a background halo so it stays readable over lines
const h = (x, y, s, o = {}) => t(x, y, s, o).replace('<text ', `<text paint-order="stroke" stroke="${C.bg}" stroke-width="6" stroke-linejoin="round" `);
// force arrow with a solid triangular head
function fa(x1, y1, x2, y2, color = C.ink, w = 5, head = 24) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
  const bx = x2 - ux * head, by = y2 - uy * head, hw = head * 0.62;
  return `<line x1="${x1}" y1="${y1}" x2="${bx}" y2="${by}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>` +
    `<polygon points="${x2},${y2} ${bx - uy * hw},${by + ux * hw} ${bx + uy * hw},${by - ux * hw}" fill="${color}"/>`;
}
const dash = (x1, y1, x2, y2, color = C.muted, w = 2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-dasharray="7 6"/>`;
const dot = (x, y, r = 12, fill = C.mustard) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
const box = (x, y, w, hh, fill = BOX) => `<rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="7" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
const sub = (base, s, rest = '') => `${base}<tspan dy="5" font-size="70%">${s}</tspan><tspan dy="-5"${rest.startsWith(' ') ? ' dx="5"' : ''}>${rest.trimStart()}</tspan>`;
const arcPath = (cx, cy, r, a1, a2) => { // angles in degrees, SVG coords (y down), drawn a1 -> a2 the short way
  const p = (a) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)];
  const [x1, y1] = p(a1), [x2, y2] = p(a2);
  const sweep = a2 > a1 ? 1 : 0;
  return `<path d="M${x1} ${y1} A${r} ${r} 0 0 ${sweep} ${x2} ${y2}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
};

// ---------- 01 Lift ----------
function lift() {
  const o = [];
  const k = 133 / 637;
  const cases = [
    ['At rest', 637, 0, 'R − 637 = 0'],
    ['Accelerating up', 689, -1, 'R − 637 = 65 × 0.8'],
    ['Accelerating down', 585, 1, '637 − R = 65 × 0.8'],
  ];
  cases.forEach(([head, R, adir, eq], i) => {
    const x = 25 + i * 300, cx = x + 125, cy = 395;
    o.push(t(cx, 172, head, { size: 21, weight: 700, anchor: 'middle' }));
    o.push(`<rect x="${x}" y="190" width="250" height="410" rx="12" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`);
    o.push(fa(cx, cy, cx, cy - R * k, C.tealDark, 5, 34));
    o.push(fa(cx, cy, cx, cy + 637 * k, C.ink, 5, 34));
    o.push(dot(cx, cy, 13));
    o.push(h(cx + 18, cy - 56, `R = ${R} N`, { size: 20, weight: 700, fill: C.tealDark }));
    o.push(h(cx + 18, cy + 72, 'W = 637 N', { size: 20, weight: 700 }));
    if (adir === 0) o.push(t(x + 10, cy + 120, 'a = 0', { size: 20, weight: 700, fill: C.olive }));
    if (adir === -1) { o.push(fa(x + 26, cy + 45, x + 26, cy - 10, C.olive, 4, 30)); o.push(t(x + 26, cy + 80, 'a', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' })); }
    if (adir === 1) { o.push(t(x + 26, cy - 64, 'a', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' })); o.push(fa(x + 26, cy - 46, x + 26, cy + 10, C.olive, 4, 30)); }
    o.push(t(cx, 640, eq, { size: 20, fill: C.muted, anchor: 'middle' }));
    o.push(t(cx, 676, `R = ${R} N`, { size: 24, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  });
  o.push(t(W / 2, 724, 'Gold arrow = acceleration a (0.8 m s⁻²)', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(W / 2, 780, 'Newton’s third law: a pair on different bodies', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(box(90, 838, 150, 62));
  o.push(t(150 + 40, 880, 'person', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(`<rect x="40" y="900" width="250" height="36" rx="5" fill="${SURF}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(165, 926, 'floor', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(fa(116, 900, 116, 820, C.tealDark, 4, 30));
  o.push(fa(234, 900, 234, 982, C.rust, 4, 30));
  o.push(t(320, 856, 'floor pushes person up: R', { size: 19, weight: 700, fill: C.tealDark }));
  o.push(t(320, 914, 'equal size, opposite way', { size: 19, fill: C.muted }));
  o.push(t(320, 972, 'person pushes floor down: R', { size: 19, weight: 700, fill: C.rust }));
  return svg(W, 1010, 'A lift: R changes with acceleration', o.join('\n'), 'Person of mass 65 kg, g = 9.8 m s⁻²');
}

// ---------- 02 Two strings ----------
function twoStrings() {
  const o = [];
  const cy = 190, px = 450, py = 400, k = 3.27;
  o.push(`<line x1="60" y1="${cy}" x2="840" y2="${cy}" stroke="${C.ink}" stroke-width="4"/>`);
  for (let x = 66; x <= 840; x += 39) o.push(`<line x1="${x}" y1="${cy - 18}" x2="${x + 14}" y2="${cy}" stroke="${C.ink}" stroke-width="2"/>`);
  const c30 = Math.cos(Math.PI / 6), s30 = 0.5, r2 = Math.SQRT1_2;
  const l1 = (py - cy) / s30, l2 = (py - cy) / r2;
  o.push(dash(px, py, px - l1 * c30, cy, C.muted));
  o.push(dash(px, py, px + l2 * r2, cy, C.muted));
  o.push(dash(320, py, 580, py, C.muted));
  o.push(arcPath(px, py, 70, 180, 210), arcPath(px, py, 70, 315, 360));
  o.push(fa(px, py, px - 35.9 * k * c30, py - 35.9 * k * s30, C.tealDark, 5, 30));
  o.push(fa(px, py, px + 43.9 * k * r2, py - 43.9 * k * r2, C.olive, 5, 30));
  o.push(fa(px, py, px, py + 49 * k, C.ink, 5, 34));
  o.push(`<circle cx="${px}" cy="${py}" r="15" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(h(160, 352, 'T₁ = 35.9 N', { size: 20, weight: 700, fill: C.tealDark }));
  o.push(h(px + 104, 350, 'T₂ = 43.9 N', { size: 20, weight: 700, fill: C.olive }));
  o.push(t(300, py + 8, '30°', { size: 20, weight: 700, anchor: 'end' }));
  o.push(t(600, py + 8, '45°', { size: 20, weight: 700 }));
  o.push(t(px + 22, py + 84, 'W = 49 N', { size: 20, weight: 700 }));
  o.push(t(W / 2, 660, 'Head to tail, the three forces close up', { size: 21, weight: 700, anchor: 'middle' }));
  // triangle: W down, then T1, then T2 back to the start
  const ax = 330, ay = 698, bx = ax, by = ay + 49 * k;
  const cx2 = bx - 35.9 * k * c30, cy2 = by - 35.9 * k * s30;
  o.push(fa(ax, ay, bx, by, C.ink, 5, 30));
  o.push(fa(bx, by, cx2, cy2, C.tealDark, 5, 28));
  o.push(fa(cx2, cy2, ax, ay, C.olive, 5, 28));
  o.push(t(ax + 18, (ay + by) / 2 + 8, 'W', { size: 21, weight: 700 }));
  o.push(h((bx + cx2) / 2 - 18, (by + cy2) / 2 + 36, 'T₁', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(h((cx2 + ax) / 2 - 20, (cy2 + ay) / 2 + 4, 'T₂', { size: 21, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(t(690, 758, 'Closed triangle:', { size: 20, fill: C.muted, anchor: 'middle' }));
  o.push(t(690, 792, 'resultant = 0', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(690, 848, 'T₁cos30° = T₂cos45°', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(t(690, 880, 'T₁sin30° + T₂sin45° = 49', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 930, 'Equilibrium: forces balance', o.join('\n'), 'Particle of 5 kg on two light strings, g = 9.8 m s⁻²');
}

// ---------- 03 Pulleys ----------
function pulley() {
  const o = [];
  o.push(t(W / 2, 140, 'Mass on a smooth table', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(40, 186, 'A: T = 3a', { size: 20, weight: 700 }), t(40, 220, 'B: 2g − T = 2a', { size: 20, weight: 700 }));
  o.push(`<rect x="40" y="300" width="600" height="36" fill="${SURF}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<line x1="640" y1="300" x2="640" y2="336" stroke="${C.ink}" stroke-width="2.5"/>`);
  const pcx = 640, pcy = 270, pr = 24;
  o.push(`<line x1="420" y1="${pcy - pr}" x2="${pcx}" y2="${pcy - pr}" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(`<line x1="${pcx + pr}" y1="${pcy}" x2="${pcx + pr}" y2="390" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(`<circle cx="${pcx}" cy="${pcy}" r="${pr}" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/><circle cx="${pcx}" cy="${pcy}" r="4" fill="${C.ink}"/>`);
  o.push(box(300, 240, 120, 60), t(360, 279, '3 kg', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(fa(420, 246, 500, 246, C.tealDark, 4, 26), t(455, 232, 'T', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(fa(305, 318, 410, 318, C.olive, 4, 30), t(355, 360, 'a', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(box(614, 390, 100, 58), t(664, 427, '2 kg', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(fa(664, 390, 664, 338, C.tealDark, 4, 24), h(644, 388, 'T', { size: 19, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(fa(740, 420, 740, 490, C.olive, 4, 28), t(756, 455, 'a', { size: 20, weight: 700, fill: C.olive }));
  o.push(fa(664, 448, 664, 600, C.ink, 4, 34), t(680, 543, '2g', { size: 20, weight: 700 }));
  o.push(t(40, 468, 'a = 3.92 m s⁻²', { size: 22, weight: 700, fill: C.tealDark }));
  o.push(t(40, 506, 'T = 11.8 N', { size: 22, weight: 700, fill: C.tealDark }));
  o.push(t(40, 545, 'T is the same either side', { size: 19, fill: C.muted }));
  o.push(`<line x1="60" y1="640" x2="840" y2="640" stroke="${C.panelEdge}" stroke-width="2.5"/>`);
  // two hanging masses
  o.push(t(W / 2, 690, 'Two hanging masses', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(`<line x1="358" y1="705" x2="542" y2="705" stroke="${C.ink}" stroke-width="4"/><line x1="450" y1="705" x2="450" y2="740" stroke="${C.ink}" stroke-width="3"/>`);
  const qx = 450, qy = 800, qr = 60;
  o.push(`<line x1="${qx - qr}" y1="${qy}" x2="${qx - qr}" y2="990" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(`<line x1="${qx + qr}" y1="${qy}" x2="${qx + qr}" y2="940" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(`<circle cx="${qx}" cy="${qy}" r="${qr}" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/><circle cx="${qx}" cy="${qy}" r="5" fill="${C.ink}"/>`);
  o.push(box(340, 990, 100, 56), t(390, 1027, '7 kg', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(box(460, 940, 100, 56), t(510, 977, '4 kg', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(fa(390, 990, 390, 884, C.tealDark, 4, 30), h(376, 947, 'T', { size: 19, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(fa(510, 940, 510, 834, C.tealDark, 4, 30), h(526, 895, 'T', { size: 19, weight: 700, fill: C.tealDark }));
  o.push(fa(390, 1046, 390, 1190, C.ink, 4, 34), t(376, 1122, '7g', { size: 20, weight: 700, anchor: 'end' }));
  o.push(fa(510, 996, 510, 1080, C.ink, 4, 30), t(526, 1044, '4g', { size: 20, weight: 700 }));
  o.push(fa(280, 995, 280, 1064, C.olive, 4, 28), t(264, 1038, 'a', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(fa(620, 1010, 620, 942, C.olive, 4, 28), t(636, 988, 'a', { size: 20, weight: 700, fill: C.olive }));
  o.push(t(40, 738, '7 kg: 7g − T = 7a', { size: 20, weight: 700 }), t(40, 776, '4 kg: T − 4g = 4a', { size: 20, weight: 700 }));
  o.push(t(860, 738, 'a = 3g/11', { size: 21, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(t(860, 776, '= 2.67 m s⁻²', { size: 21, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(t(860, 828, 'T = 49.9 N', { size: 21, weight: 700, fill: C.tealDark, anchor: 'end' }));
  return svg(W, 1210, 'Connected particles: one equation each', o.join('\n'), 'Light string, smooth pulley, g = 9.8 m s⁻²');
}

// ---------- 04 Car and trailer ----------
function tow() {
  const o = [];
  const row = (y, head) => o.push(t(W / 2, y, head, { size: 21, weight: 700, anchor: 'middle' }));
  const blk = (y, l1, l2) => { o.push(box(350, y, 200, 70)); o.push(t(450, y + 30, l1, { size: 20, weight: 700, anchor: 'middle' }), t(450, y + 58, l2, { size: 19, fill: C.muted, anchor: 'middle' })); };
  row(150, '1 Whole system: tension is internal');
  blk(200, 'car + trailer', '2000 kg');
  o.push(fa(350, 235, 262, 235, C.rust, 5, 30), h(310, 215, '500 + 300', { size: 19, weight: 700, fill: C.rust, anchor: 'end' }));
  o.push(fa(550, 235, 888, 235, C.tealDark, 5, 36), h(716, 215, '3300', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(W / 2, 330, '3300 − 800 = 2000a, so a = 1.25 m s⁻²', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  row(420, '2 Trailer alone: tow bar pulls (tension)');
  blk(470, 'trailer', '800 kg');
  o.push(fa(350, 505, 312, 505, C.rust, 5, 30), h(304, 485, '300', { size: 19, weight: 700, fill: C.rust }));
  o.push(fa(550, 505, 688, 505, C.olive, 5, 36), h(568, 485, 'T = 1300', { size: 19, weight: 700, fill: C.olive }));
  o.push(t(W / 2, 600, 'T − 300 = 800 × 1.25, so T = 1300 N', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  row(690, '3 Braking with a rigid bar: thrust');
  blk(740, 'trailer', '800 kg');
  o.push(fa(350, 775, 312, 775, C.rust, 5, 30), h(304, 755, '300', { size: 19, weight: 700, fill: C.rust }));
  o.push(fa(614, 775, 552, 775, C.olive, 5, 30), h(588, 755, 'thrust 620', { size: 19, weight: 700, fill: C.olive }));
  o.push(t(W / 2, 862, 'Slowing at 1.15 m s⁻²: 300 + X = 800 × 1.15', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(W / 2, 902, 'X = 620 N: the bar pushes the trailer back', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 940, 'Car and trailer: whole system, then one part', o.join('\n'), 'Light tow bar, resistances shown, N');
}

// ---------- 05 Friction model ----------
function friction() {
  const o = [];
  const x0 = 110, y0 = 520, sx = 730 / 30, sy = 238 / 20;
  const X = (v) => x0 + v * sx, Y = (v) => y0 - v * sy;
  o.push(`<rect x="${x0}" y="${Y(19.6)}" width="${730}" height="${19.6 * sy}" fill="${SURF}"/>`);
  o.push(`<line x1="${x0}" y1="${y0}" x2="${X(30)}" y2="${y0}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(`<line x1="${x0}" y1="${y0}" x2="${x0}" y2="${Y(26)}" stroke="${C.ink}" stroke-width="3"/>`);
  for (const v of [0, 10, 20, 30]) { o.push(`<line x1="${X(v)}" y1="${y0}" x2="${X(v)}" y2="${y0 + 8}" stroke="${C.ink}" stroke-width="2.5"/>`); o.push(t(X(v), y0 + 36, String(v), { size: 19, fill: C.muted, anchor: 'middle' })); }
  for (const v of [0, 10, 20]) { o.push(`<line x1="${x0 - 8}" y1="${Y(v)}" x2="${x0}" y2="${Y(v)}" stroke="${C.ink}" stroke-width="2.5"/>`); o.push(t(x0 - 16, Y(v) + 7, String(v), { size: 19, fill: C.muted, anchor: 'end' })); }
  o.push(t(50, 176, 'friction F (N)', { size: 19, fill: C.muted }));
  o.push(t(X(30), y0 + 72, 'push P (N)', { size: 19, fill: C.muted, anchor: 'end' }));
  o.push(dash(x0, Y(19.6), X(19.6), Y(19.6), C.rust, 2.5));
  o.push(path(`M${X(0)} ${Y(0)} L${X(19.6)} ${Y(19.6)} L${X(30)} ${Y(19.6)}`, { stroke: C.tealDark, w: 5 }));
  o.push(`<circle cx="${X(19.6)}" cy="${Y(19.6)}" r="11" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(dot(X(15), Y(15), 11));
  o.push(t(X(30), Y(19.6) - 14, 'limit μR = 19.6', { size: 19, weight: 700, fill: C.rust, anchor: 'end' }));
  o.push(t(x0 + 14, Y(19.6) + 36, 'F ≤ μR allowed', { size: 19, weight: 700, fill: C.tealDark }));
  o.push(h(X(15) + 16, Y(15) + 40, 'P = 15: F = 15', { size: 19, weight: 700 }));
  o.push(h(X(5) + 6, Y(5) - 20, 'F = P', { size: 19, weight: 700, fill: C.tealDark }));
  const minis = [['At rest', 'F = 15 &lt; 19.6'], ['On the point of moving', 'F = μR = 19.6'], ['Sliding', 'F = μR, a = 1.08']];
  minis.forEach(([hd, eq], i) => {
    const cx = [140, 450, 750][i];
    o.push(t(cx, 676, hd, { size: 20, weight: 700, anchor: 'middle' }));
    o.push(fa(cx - 40, 731, cx - 110, 731, C.rust, 4, 30));
    o.push(fa(cx + 40, 731, cx + 110, 731, C.tealDark, 4, 30));
    o.push(box(cx - 40, 700, 80, 62));
    o.push(t(cx, 806, eq, { size: 19, fill: C.muted, anchor: 'middle' }));
  });
  o.push(t(W / 2, 860, 'Teal: push P. Copper: friction F.', { size: 18, fill: C.muted, anchor: 'middle' }));
  return svg(W, 900, 'Friction: F ≤ μR', o.join('\n'), 'Box of 5 kg, μ = 0.4, R = 49 N, pushed by a horizontal force P');
}

// ---------- 06 Rope at an angle ----------
function ropeAngle() {
  const o = [];
  const k = 1.8, c = Math.cos(25 * Math.PI / 180), s = Math.sin(25 * Math.PI / 180);
  o.push(`<line x1="450" y1="170" x2="450" y2="850" stroke="${C.panelEdge}" stroke-width="2.5"/>`);
  const side = (cx, head, R, F, lab, mag, sign, eq, res) => {
    const cy = 510;
    o.push(t(cx, 205, head, { size: 21, weight: 700, anchor: 'middle' }));
    o.push(fa(cx, cy, cx, cy - R * k, C.tealDark, 5, 34));
    o.push(fa(cx, cy, cx, cy + 117.6 * k, C.ink, 5, 34));
    o.push(fa(cx, cy, cx - F * k, cy, C.rust, 5, 30));
    const ex = cx + mag * k * c, ey = cy - sign * mag * k * s;
    o.push(dash(cx, cy, ex, cy), dash(ex, cy, ex, ey));
    o.push(fa(cx, cy, ex, ey, C.olive, 5, 30));
    o.push(dot(cx, cy, 13));
    o.push(h(cx - 18, cy - R * k / 2 + 4, `R = ${R}`, { size: 20, weight: 700, fill: C.tealDark, anchor: 'end' }));
    o.push(h(cx - 30, cy + 34, `F = ${F}`, { size: 20, weight: 700, fill: C.rust, anchor: 'end' }));
    o.push(h(cx - 18, cy + 122, 'W = 117.6', { size: 20, weight: 700, anchor: 'end' }));
    o.push(h(ex + 12, ey + (sign > 0 ? -2 : 30), `${lab} = ${mag}`, { size: 20, weight: 700, fill: C.olive }));
    o.push(t(225 + (cx > 450 ? 450 : 0), 788, eq, { size: 20, fill: C.muted, anchor: 'middle' }));
    o.push(t(225 + (cx > 450 ? 450 : 0), 826, res, { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  };
  side(225, 'Pull with a rope', 99.1, 39.6, 'T', 43.7, 1, 'R + T sin25° = 117.6', 'R = 99.1: less than W');
  side(675, 'Push downwards', 144.6, 57.8, 'P', 63.8, -1, 'R = 117.6 + P sin25°', 'R = 144.6: more than W');
  o.push(t(W / 2, 890, 'Same box, same μ: pulling needs 43.7 N, pushing 63.8 N', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 926, 'Limiting: horizontal component = μR', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 960, 'Pull or push at 25°: R changes', o.join('\n'), 'Box of 12 kg, μ = 0.4, on the point of sliding');
}

// ---------- 07 Rough slope ----------
function slope() {
  const o = [];
  const th = Math.PI / 6, ax = 160, bx = 840, by = 628, ay = by - (bx - ax) * Math.tan(th);
  const d = [Math.cos(th), Math.sin(th)], n = [Math.sin(th), -Math.cos(th)];
  o.push(`<path d="M${ax} ${ay} L${bx} ${by} L${ax} ${by} Z" fill="${SURF}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(arcPath(bx, by, 110, 180, 210));
  o.push(t(bx - 150, by - 14, '30°', { size: 20, weight: 700, anchor: 'end' }));
  const sp = 400, px = ax + d[0] * sp, py = ay + d[1] * sp;
  const cx = px + n[0] * 28, cy = py + n[1] * 28;
  const k = 190 / 39.2;
  // block
  const bw = 110, bh = 56;
  o.push(`<g transform="translate(${px} ${py}) rotate(30)"><rect x="${-bw / 2}" y="${-bh}" width="${bw}" height="${bh}" rx="7" fill="${BOX}" stroke="${C.ink}" stroke-width="2.5"/></g>`);
  // components (dashed) and their rectangle
  const sx = cx + d[0] * 19.6 * k, sy = cy + d[1] * 19.6 * k;
  const qx = cx - n[0] * 33.9 * k, qy = cy - n[1] * 33.9 * k;
  o.push(`<line x1="${cx}" y1="${cy}" x2="${sx}" y2="${sy}" stroke="${C.olive}" stroke-width="3.5" stroke-dasharray="10 7"/>`);
  o.push(`<line x1="${cx}" y1="${cy}" x2="${qx}" y2="${qy}" stroke="${C.olive}" stroke-width="3.5" stroke-dasharray="10 7"/>`);
  o.push(dash(sx, sy, cx, cy + 39.2 * k, C.muted, 1.8), dash(qx, qy, cx, cy + 39.2 * k, C.muted, 1.8));
  o.push(fa(cx, cy, cx, cy + 39.2 * k, C.ink, 5, 32));
  o.push(fa(cx, cy, cx + n[0] * 33.9 * k, cy + n[1] * 33.9 * k, C.tealDark, 5, 32));
  o.push(fa(cx, cy, cx - d[0] * 8.49 * k * 1.3, cy - d[1] * 8.49 * k * 1.3, C.rust, 5, 28));
  o.push(dot(cx, cy, 12));
  // acceleration arrow, parallel to the slope, just above it
  const as = 150, ox = ax + d[0] * as + n[0] * 62, oy = ay + d[1] * as + n[1] * 62;
  o.push(fa(ox, oy, ox + d[0] * 110, oy + d[1] * 110, C.olive, 5, 30));
  o.push(t(ox + d[0] * 55 + n[0] * 30, oy + d[1] * 55 + n[1] * 30, 'a', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(h(cx + n[0] * 33.9 * k + 14, cy + n[1] * 33.9 * k + 10, 'R = 33.9', { size: 20, weight: 700, fill: C.tealDark }));
  o.push(h(cx - d[0] * 11 * k - 16, cy - d[1] * 11 * k - 24, 'F = 8.49', { size: 20, weight: 700, fill: C.rust, anchor: 'end' }));
  o.push(h(sx + 12, sy + 8, 'mg sin30° = 19.6', { size: 20, weight: 700, fill: C.olive }));
  o.push(h(qx - 12, qy + 8, 'mg cos30° = 33.9', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(h(cx + 16, cy + 39.2 * k + 12, 'W = 39.2', { size: 20, weight: 700 }));
  o.push(t(W / 2, 710, 'Across the slope: R = mg cos30° = 33.9 N', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(t(W / 2, 746, 'Along: 19.6 − 8.49 = 4a', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 786, 'a = 2.78 m s⁻² down the slope', { size: 24, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svg(W, 820, 'A rough slope: resolve along and across', o.join('\n'), 'Block of 4 kg on 30° slope, μ = 0.25, g = 9.8 m s⁻²');
}

// ---------- 08 Moments ----------
function moments() {
  const o = [];
  const x0 = 75, m = 150, py = 360; // 150 px per metre, plank top at py
  const X = (d) => x0 + d * m;
  o.push(`<rect x="${X(0)}" y="${py - 10}" width="${5 * m}" height="20" rx="5" fill="${BOX}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(X(0), py - 22, 'A', { size: 20, weight: 700, fill: C.muted }), t(X(5), py - 22, 'B', { size: 20, weight: 700, fill: C.muted, anchor: 'end' }));
  const sup = (x, l) => { o.push(`<polygon points="${x},${py + 10} ${x - 24},${py + 55} ${x + 24},${py + 55}" fill="${SURF}" stroke="${C.ink}" stroke-width="2.5"/>`); o.push(t(x, py + 88, l, { size: 20, weight: 700, anchor: 'middle' })); };
  sup(X(0.5), 'C'); sup(X(3.5), 'D');
  // person
  o.push(`<rect x="${X(1) - 18}" y="${py - 68}" width="36" height="56" rx="7" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(X(1) + 30, py - 28, '55 kg', { size: 19, weight: 700 }));
  o.push(fa(X(0.5), py - 10, X(0.5), py - 175, C.tealDark, 5, 40));
  o.push(h(X(0.5) + 14, py - 80, sub('R', 'C', ' = 521.0 N'), { size: 20, weight: 700, fill: C.tealDark }));
  o.push(fa(X(3.5), py - 10, X(3.5), py - 90, C.tealDark, 5, 40));
  o.push(h(X(3.5) + 30, py - 40, sub('R', 'D', ' = 233.6 N'), { size: 20, weight: 700, fill: C.tealDark }));
  o.push(fa(X(1), py + 10, X(1), py + 180, C.ink, 5, 40));
  o.push(t(X(1) + 16, py + 100, '539 N', { size: 20, weight: 700 }));
  o.push(fa(X(2.5), py + 10, X(2.5), py + 82, C.ink, 5, 40));
  o.push(h(X(2.5) + 26, py + 50, '215.6 N', { size: 20, weight: 700 }));
  // distance scale from C
  const sy = 590;
  o.push(`<line x1="${X(0.5)}" y1="${sy}" x2="${X(3.5)}" y2="${sy}" stroke="${C.muted}" stroke-width="2.5"/>`);
  [[0.5, '0'], [1, '0.5'], [2.5, '2.0'], [3.5, '3.0']].forEach(([dd, l]) => { o.push(`<line x1="${X(dd)}" y1="${sy - 10}" x2="${X(dd)}" y2="${sy + 10}" stroke="${C.muted}" stroke-width="2.5"/>`); o.push(t(X(dd), sy + 38, l, { size: 19, fill: C.muted, anchor: 'middle' })); });
  o.push(t(X(3.5) + 40, sy + 7, 'm from C', { size: 19, fill: C.muted }));
  o.push(t(W / 2, 700, 'Moments about C balance', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(100, 746, 'Clockwise', { size: 19, weight: 700, fill: C.muted }));
  const w1 = 700 * 269.5 / 700.7;
  o.push(`<rect x="100" y="760" width="${w1}" height="50" rx="4" fill="${BOX}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<rect x="${100 + w1}" y="760" width="${700 - w1}" height="50" rx="4" fill="${SURF}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(100 + w1 / 2, 792, '55g × 0.5 = 269.5', { size: 18, weight: 700, anchor: 'middle' }));
  o.push(t(100 + w1 + (700 - w1) / 2, 792, '22g × 2.0 = 431.2', { size: 18, weight: 700, anchor: 'middle' }));
  o.push(t(100, 856, 'Anticlockwise', { size: 19, weight: 700, fill: C.muted }));
  o.push(`<rect x="100" y="870" width="700" height="50" rx="4" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(450, 902, sub('R', 'D', ' × 3.0 = 700.7'), { size: 18, weight: 700, anchor: 'middle' }));
  o.push(t(W / 2, 978, sub('Then R', 'C', ' = 754.6 − 233.6 = 521.0 N'), { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1010, 'Moments: a plank on two supports', o.join('\n'), 'Plank 5 m, 22 kg; person 55 kg; g = 9.8 m s⁻²');
}

// ---------- 09 Conical pendulum ----------
function conical() {
  const o = [];
  const pxp = 420, pyp = 200, th = Math.acos(0.327), Lp = 380;
  const bx = pxp + Lp * Math.sin(th), by = pyp + Lp * Math.cos(th);
  o.push(`<line x1="360" y1="${pyp}" x2="480" y2="${pyp}" stroke="${C.ink}" stroke-width="5"/>`);
  o.push(`<ellipse cx="${pxp}" cy="${by}" rx="${bx - pxp}" ry="38" fill="none" stroke="${C.muted}" stroke-width="2.5" stroke-dasharray="8 7"/>`);
  o.push(dash(pxp, pyp, pxp, by + 90));
  o.push(`<line x1="${pxp}" y1="${by}" x2="${bx}" y2="${by}" stroke="${C.panelEdge}" stroke-width="2.5" stroke-dasharray="8 6"/>`);
  o.push(`<line x1="${pxp}" y1="${pyp}" x2="${bx}" y2="${by}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(arcPath(pxp, pyp, 56, 90 - th * 180 / Math.PI, 90));
  o.push(t(pxp + 12, pyp + 82, 'θ', { size: 21, weight: 700 }));
  const k = 14, ux = (pxp - bx) / Lp, uy = (pyp - by) / Lp;
  o.push(fa(bx, by, bx + ux * 12 * k, by + uy * 12 * k, C.tealDark, 5, 32));
  o.push(fa(bx, by, bx, by + 3.92 * k + 6, C.ink, 5, 30));
  o.push(dot(bx, by, 16));
  o.push(h(610, 246, 'L = 1.2 m', { size: 20, weight: 700 }));
  o.push(h(490, by - 14, 'r = 1.13 m', { size: 19, weight: 700, fill: C.muted }));
  o.push(h(650, by + 20, 'T = 12 N', { size: 19, weight: 700, fill: C.tealDark }));
  o.push(h(bx - 70, by + 95, 'mg = 3.92 N', { size: 20, weight: 700 }));
  // from above
  o.push(t(190, 540, 'From above', { size: 20, weight: 700, anchor: 'middle' }));
  const ccx = 190, ccy = 690, cr = 100;
  o.push(`<circle cx="${ccx}" cy="${ccy}" r="${cr}" fill="none" stroke="${C.muted}" stroke-width="2.5" stroke-dasharray="8 7"/>`);
  o.push(`<circle cx="${ccx}" cy="${ccy}" r="6" fill="${C.ink}"/>`);
  o.push(fa(ccx + cr, ccy, ccx + cr, ccy - 115, C.olive, 5, 32));
  o.push(fa(ccx + cr, ccy, ccx + 10, ccy, C.tealDark, 5, 30));
  o.push(dot(ccx + cr, ccy, 13));
  o.push(t(ccx + cr + 26, ccy - 70, 'v = 5.67', { size: 19, weight: 700, fill: C.olive }));
  o.push(t(ccx + cr + 26, ccy - 46, 'm s⁻¹', { size: 19, weight: 700, fill: C.olive }));
  o.push(h(ccx + 10, ccy + 46, 'a = 28.3 m s⁻²', { size: 19, weight: 700, fill: C.tealDark }));
  // force triangle
  o.push(t(700, 540, 'Forces add to a resultant', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(t(700, 572, 'pointing to the centre', { size: 20, weight: 700, anchor: 'middle' }));
  const k2 = 20, sxp = 850, syp = 700, tx = sxp - 11.3 * k2, ty = syp - 3.92 * k2;
  o.push(fa(sxp, syp, tx, syp, C.olive, 5, 32));
  o.push(fa(sxp, syp, tx, ty, C.tealDark, 5, 32));
  o.push(fa(tx, ty, tx, syp, C.ink, 5, 30));
  o.push(t(760, 640, 'T', { size: 21, weight: 700, fill: C.tealDark }));
  o.push(t(tx - 16, ty + 40, 'mg', { size: 20, weight: 700, anchor: 'end' }));
  o.push(h(660, syp + 34, 'mrω² = 11.3 N', { size: 19, weight: 700, fill: C.olive }));
  o.push(t(W / 2, 848, 'T = mLω² = 12 N; cosθ = g/(Lω²) = 0.327', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(W / 2, 888, 'v = rω is tangent; a = rω² points to the centre', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 930, 'Conical pendulum: horizontal circle', o.join('\n'), 'Bob 0.4 kg, string 1.2 m, ω = 5 rad s⁻¹, g = 9.8 m s⁻²');
}

export const figures = [
  { name: '07-amth-forces-slope', after: '### Worked example 3: friction on a turntable', svg: slope(),
    alt: 'A 4 kg block on a 30 degree rough slope with μ = 0.25. Weight 39.2 N splits into mg sin 30 = 19.6 N down the slope and mg cos 30 = 33.9 N into it, so R = 33.9 N and F = 8.49 N up the slope. 19.6 − 8.49 = 4a gives a = 2.78 m per second squared down the slope.',
    caption: 'Resolve the weight along and across the slope: R = mg cos θ and the net force down the slope is mg sin θ − μR.' },
  { name: '05-amth-forces-friction-model', after: '### Worked example 3: friction on a turntable', svg: friction(),
    alt: 'Graph of friction against push for a 5 kg box with μ = 0.4 (R = 49 N, maximum friction 19.6 N). F equals P until P = 19.6 N, then stays at 19.6 N when the box slides. P = 15 N gives F = 15 N, not 19.6 N. Three mini diagrams show at rest, limiting and sliding (a = 1.08 m per second squared).',
    caption: 'Friction matches the push up to a maximum μR; only when on the point of moving or sliding is F = μR.' },
  { name: '02-amth-forces-two-strings', after: '### Worked example 6', svg: twoStrings(),
    alt: 'A 5 kg particle hangs on two strings at 30 and 45 degrees to the horizontal. Solving the horizontal and vertical balances gives T1 = 35.9 N and T2 = 43.9 N. Drawn head to tail, W, T1 and T2 form a closed triangle, so the resultant is zero.',
    caption: 'In equilibrium the forces sum to zero in every direction, so they close into a triangle.' },
  { name: '06-amth-forces-rope-angle', after: '### Worked example 3: friction on a turntable', svg: ropeAngle(),
    alt: 'A 12 kg box on rough ground (μ = 0.4) on the point of sliding. Pulled by a rope at 25 degrees above horizontal, T = 43.7 N and R = 99.1 N, less than the weight 117.6 N. Pushed at 25 degrees below horizontal, P = 63.8 N and R = 144.6 N, more than the weight. Dashed lines show components.',
    caption: 'A pull at an angle lowers R and so the friction limit; a push at an angle raises it.' },
  { name: '09-amth-forces-conical', after: '### Worked example 6', svg: conical(),
    alt: 'A 0.4 kg bob on a 1.2 m string moves in a horizontal circle at 5 rad per second. T = mLω² = 12 N, cos θ = g/(Lω²) = 0.327 so θ = 70.9 degrees, r = 1.13 m, v = 5.67 m per second. Tension plus weight give a horizontal resultant 11.3 N to the centre; from above, v is tangent and a = 28.3 m per second squared points to the centre.',
    caption: 'The resultant of tension and weight points to the centre of the circle and equals mrω².' },
  { name: '03-amth-forces-pulley', after: '### Worked example 3: friction on a turntable', svg: pulley(),
    alt: '(Top) A 3 kg particle on a smooth table joined over a smooth pulley to a 2 kg hanging particle: T = 3a and 2g − T = 2a give a = 3.92 m per second squared, T = 11.8 N. (Bottom) 7 kg and 4 kg hanging masses: a = 3g/11 = 2.67 m per second squared, T = 49.9 N. Tension is the same on both sides.',
    caption: 'Write one F = ma equation per particle; tension is the same each side of a smooth pulley.' },
  { name: '01-amth-forces-lift', after: "## R2 and R3: Newton's second law and weight", svg: lift(),
    alt: 'Free-body diagrams of a 65 kg person in a lift with g = 9.8. At rest R = 637 N; accelerating up at 0.8 m per second squared R = 689 N; accelerating down R = 585 N. Arrow lengths are proportional to the forces. A strip below shows the third-law pair: the floor pushes the person up with R and the person pushes the floor down with R, on different bodies.',
    caption: 'The reaction R is larger than the weight when the lift accelerates upwards and smaller when it accelerates downwards; third-law pairs act on different bodies.' },
  { name: '04-amth-forces-tow', after: '### Example 3: particles that join', svg: tow(),
    alt: 'Whole system of 2000 kg: 3300 − 800 = 2000a gives a = 1.25 m per second squared. Trailer alone: T − 300 = 800 × 1.25 gives T = 1300 N. With a rigid bar and braking, the system slows at 1.15 m per second squared and the bar pushes back on the trailer with 620 N thrust.',
    caption: 'Treat the whole system first, then one part to find the tow-bar force; a rigid bar can push (thrust).' },
  { name: '08-amth-forces-moments', after: '### Example 11: about to tilt', svg: moments(),
    alt: 'A uniform plank AB, 5 m and 22 kg, rests on supports C (0.5 m from A) and D (1.5 m from B); a 55 kg person stands 1 m from A. Moments about C: clockwise 269.5 + 431.2 = 700.7 N m equals R_D × 3.0, so R_D = 233.6 N and R_C = 754.6 − 233.6 = 521.0 N. Distances are to scale.',
    caption: 'Take moments about a support to remove its reaction; clockwise moments equal anticlockwise moments.' },
];
