// Board-neutral redraws of six GCSE electricity and magnetism pictures first drawn for Cambridge
// IGCSE 0625 and reused on AQA and OCR GCSE pages. Same circuits and numbers; the "Core" and
// "Extended" tier pills are gone.
import { C, svg, panel, t, tl, path } from '../style.mjs';

export const slug = 'physics-electricity-and-magnetism';
const W = 900;
const CU = '#b5602e', TEAL = '#6fa9a2', LIGHT = '#dce9e7', CREAM = '#f2e7b8', GOLD = '#d4b02e', NCOL = '#b5602e', SCOL = '#2e6b62';

function fa(x1, y1, x2, y2, color = C.ink, w = 3.5, head = 20) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
  const bx = x2 - ux * head, by = y2 - uy * head, hw = head * 0.6;
  return `<line x1="${x1}" y1="${y1}" x2="${bx}" y2="${by}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>` +
    `<polygon points="${x2},${y2} ${bx - uy * hw},${by + ux * hw} ${bx + uy * hw},${by - ux * hw}" fill="${color}"/>`;
}
// small current-direction triangle on a wire, pointing (dx, dy)
const tri = (x, y, dx, dy, color = CU) => { const s = 10; const px = -dy, py = dx; return `<polygon points="${x + dx * s},${y + dy * s} ${x - dx * s + px * s * 0.8},${y - dy * s + py * s * 0.8} ${x - dx * s - px * s * 0.8},${y - dy * s - py * s * 0.8}" fill="${color}"/>`; };
const wire = (d) => path(d, { stroke: C.ink, w: 3 });
const sub = (b, s, rest = '') => `${b}<tspan dy="5" font-size="70%">${s}</tspan><tspan dy="-5"${rest.startsWith(' ') ? ' dx="5"' : ''}>${rest.trimStart()}</tspan>`;
function cellV(x, y) { // vertical cell centred at (x, y), + at top
  return `<rect x="${x - 20}" y="${y - 14}" width="40" height="28" fill="#ffffff"/>` +
    `<line x1="${x - 20}" y1="${y - 7}" x2="${x + 20}" y2="${y - 7}" stroke="${C.ink}" stroke-width="3"/>` +
    `<line x1="${x - 11}" y1="${y + 7}" x2="${x + 11}" y2="${y + 7}" stroke="${C.ink}" stroke-width="7"/>` +
    t(x + 26, y - 14, '+', { size: 19, weight: 700 });
}
const resH = (x, y) => `<rect x="${x - 26}" y="${y - 11}" width="52" height="22" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`;
const resV = (x, y) => `<rect x="${x - 11}" y="${y - 26}" width="22" height="52" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`;

// ---------- 01 Bar magnet ----------
function barMagnet() {
  const o = [];
  const L = 195, R = 505, cy = 345, hh = 44;
  const lines = [];
  for (let i = 1; i <= 6; i++) {
    const y0 = cy - 4 - 6 * i, a = 22 + 26 * i, h = 22 + 30 * i;
    lines.push([y0, a, h]);
  }
  for (const s of [1, -1]) for (const [y0d, a, h] of lines) {
    const y0 = cy - s * (cy - y0d);
    const yc = y0 - s * h;
    o.push(path(`M${L} ${y0} C${L - a} ${yc} ${R + a} ${yc} ${R} ${y0}`, { stroke: C.tealDark, w: 2.5 }));
    const my = y0 - s * 0.75 * h;
    o.push(`<polygon points="${360},${my} ${344},${my - 8} ${344},${my + 8}" fill="${C.tealDark}"/>`);
  }
  o.push(`<rect x="${L}" y="${cy - hh}" width="${(R - L) / 2}" height="${2 * hh}" fill="${NCOL}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(`<rect x="${(L + R) / 2}" y="${cy - hh}" width="${(R - L) / 2}" height="${2 * hh}" fill="${SCOL}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(t((L * 3 + R) / 4, cy + 16, 'N', { size: 44, weight: 700, fill: '#ffffff', anchor: 'middle' }), t((L + R * 3) / 4, cy + 16, 'S', { size: 44, weight: 700, fill: '#ffffff', anchor: 'middle' }));
  // labels
  o.push(tl(46, 150, ['Lines close together:', 'strong field'], { size: 20, weight: 700, fill: C.olive }, 26));
  o.push(fa(92, 188, L - 8, cy - 46, C.olive, 3, 20));
  o.push(tl(654, 150, ['Lines far apart:', 'weaker field'], { size: 20, weight: 700, fill: C.olive, anchor: 'end' }, 26));
  const [y6, a6, h6] = lines[5];
  o.push(fa(614, 190, 350 + 120, y6 - 0.75 * h6 + 22, C.olive, 3, 20));
  return svg(W, 600, 'Magnetic field of a bar magnet', `<g transform="translate(100 0)">${o.join('\n')}</g>`, 'Field lines run from N to S');
}

// ---------- 03 Series and parallel ----------
function seriesParallel() {
  const o = [];
  o.push(panel(22, 120, 856, 260, '#ffffff', C.ink));
  o.push(t(46, 162, 'Series: one path', { size: 23, weight: 700 }), t(854, 162, 'Current: + to −', { size: 19, weight: 700, fill: CU, anchor: 'end' }));
  const top = 228, bot = 322, xl = 88, xr = 622;
  o.push(wire(`M${xl} ${bot} V${top} H${xr} V${bot} Z`));
  o.push(cellV(xl, 275));
  o.push(resH(257, top), resH(467, top));
  o.push(t(257, 202, '20 Ω', { size: 20, anchor: 'middle' }), t(467, 202, '40 Ω', { size: 20, anchor: 'middle' }));
  o.push(t(257, 270, '2.0 V', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(467, 270, '4.0 V', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(tri(166, top, 1, 0), tri(366, top, 1, 0), tri(xr, 272, 0, 1), tri(350, bot, -1, 0), tri(xl, 306, 0, -1));
  o.push(t(606, 304, '2.0 + 4.0 = 6.0 V', { size: 18, fill: C.muted, anchor: 'end' }));
  o.push(t(166, 352, '0.10 A', { size: 20, weight: 700, fill: CU, anchor: 'middle' }), t(350, 352, '0.10 A', { size: 20, weight: 700, fill: CU, anchor: 'middle' }), t(544, 352, '0.10 A', { size: 20, weight: 700, fill: CU, anchor: 'middle' }));
  // parallel
  o.push(panel(22, 398, 856, 256, '#ffffff', C.ink));
  o.push(t(46, 432, 'Parallel: branches', { size: 23, weight: 700 }));
  const pt = 476, pb = 610, j1 = 312, j2 = 482;
  o.push(wire(`M${xl} ${pb} V${pt} H${j2} V${pb} H${xl}`), wire(`M${j1} ${pt} V${pb}`));
  o.push(cellV(xl, 540));
  o.push(`<circle cx="${j1}" cy="${pt}" r="6" fill="${C.ink}"/><circle cx="${j1}" cy="${pb}" r="6" fill="${C.ink}"/>`);
  o.push(resV(j1, 542), resV(j2, 542));
  o.push(tri(190, pt, 1, 0), tri(j1, 500, 0, 1), tri(j2, 500, 0, 1), tri(196, pb, -1, 0));
  o.push(t(194, 458, '0.45 A', { size: 20, weight: 700, fill: CU, anchor: 'middle' }), t(194, 640, '0.45 A', { size: 20, weight: 700, fill: CU, anchor: 'middle' }));
  o.push(t(j1 - 16, 510, '0.30 A', { size: 20, weight: 700, fill: CU, anchor: 'end' }), t(j2 - 16, 510, '0.15 A', { size: 20, weight: 700, fill: CU, anchor: 'end' }));
  o.push(t(j1 - 22, 540, '20 Ω', { size: 20, anchor: 'end' }), t(j1 - 22, 566, '6.0 V', { size: 20, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(t(j2 - 22, 540, '40 Ω', { size: 20, anchor: 'end' }), t(j2 - 22, 566, '6.0 V', { size: 20, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(t(654, 536, '0.30 + 0.15', { size: 19, fill: C.muted, anchor: 'end' }), t(654, 562, '= 0.45 A', { size: 19, fill: C.muted, anchor: 'end' }));
  return svg(W, 680, 'Series and parallel circuits', o.join('\n'), 'Same cell (6.0 V), same two resistors');
}

// ---------- 04 I-V graphs ----------
function ivGraphs() {
  const o = [];
  const box = (y, head, l1, l2, draw) => {
    o.push(panel(22, y, 856, 258, '#ffffff', C.ink));
    o.push(t(46, y + 36, head, { size: 23, weight: 700 }));
    o.push(t(564, y + 116, l1, { size: 20, weight: 700 }), t(564, y + 146, l2, { size: 20, fill: C.muted }));
    draw(y);
  };
  const axes = (cx, cy, top, bottom, left, right, ylab) => {
    o.push(fa(left, cy, right + 22, cy, C.ink, 2.5, 16), fa(cx, bottom, cx, top - 6, C.ink, 2.5, 16));
    o.push(t(right + 26, cy + 7, 'V / V', { size: 18, weight: 700 }), t(cx + 12, top + 2, ylab, { size: 18, weight: 700 }));
  };
  const OX = 316, sx = 130 / 6;
  box(140, 'Fixed resistor', 'Straight, through 0', 'R stays constant', (y) => {
    const cy = y + 146;
    axes(OX, cy, y + 50, y + 244, 186, 446, 'I / A');
    o.push(path(`M${OX - 130} ${cy + 90} L${OX + 130} ${cy - 90}`, { stroke: C.tealDark, w: 4 }));
    o.push(t(OX - 12, y + 62, '0.3', { size: 18, fill: C.muted, anchor: 'end' }), t(OX - 12, y + 241, '−0.3', { size: 18, fill: C.muted, anchor: 'end' }));
    o.push(`<line x1="${OX - 130}" y1="${cy - 7}" x2="${OX - 130}" y2="${cy + 7}" stroke="${C.ink}" stroke-width="2"/><line x1="${OX + 130}" y1="${cy - 7}" x2="${OX + 130}" y2="${cy + 7}" stroke="${C.ink}" stroke-width="2"/><line x1="${OX - 6}" y1="${y + 236}" x2="${OX + 6}" y2="${y + 236}" stroke="${C.ink}" stroke-width="2"/>`);
    o.push(t(OX - 130, cy + 26, '−6', { size: 18, fill: C.muted, anchor: 'middle' }), t(OX + 130, cy + 26, '6', { size: 18, fill: C.muted, anchor: 'middle' }));
  });
  box(408, 'Filament lamp', 'Curve gets less steep', 'Hot filament: R rises', (y) => {
    const cy = y + 146;
    axes(OX, cy, y + 50, y + 244, 186, 446, 'I / A');
    const pts = []; for (let i = -40; i <= 40; i++) { const v = i / 40; const I = Math.tanh(1.6 * v) / Math.tanh(1.6) * 0.6; pts.push(`${OX + v * 130} ${cy - I * 130 * 0.95}`); }
    o.push(path('M' + pts.join(' L'), { stroke: C.tealDark, w: 4 }));
    o.push(t(OX - 12, y + 62, '0.3', { size: 18, fill: C.muted, anchor: 'end' }), t(OX - 12, y + 241, '−0.3', { size: 18, fill: C.muted, anchor: 'end' }));
    o.push(`<line x1="${OX - 130}" y1="${cy - 7}" x2="${OX - 130}" y2="${cy + 7}" stroke="${C.ink}" stroke-width="2"/><line x1="${OX + 130}" y1="${cy - 7}" x2="${OX + 130}" y2="${cy + 7}" stroke="${C.ink}" stroke-width="2"/>`);
    o.push(t(OX - 130, cy + 26, '−6', { size: 18, fill: C.muted, anchor: 'middle' }), t(OX + 130, cy + 26, '6', { size: 18, fill: C.muted, anchor: 'middle' }));
  });
  box(676, 'Diode', 'Reverse: no current', 'Forward: after ~0.6 V', (y) => {
    const cy = y + 196;
    axes(OX, cy, y + 50, y + 244, 186, 446, 'I / mA');
    const pts = []; for (let i = -50; i <= 50; i++) { const v = i / 50; const I = v < 0 ? 0 : 0.0006 * (Math.exp(v * 13) - 1); if (I <= 21) pts.push(`${OX + v * 130} ${cy - I * 6.6}`); }
    o.push(path('M' + pts.join(' L'), { stroke: C.tealDark, w: 4 }));
    for (const [v, lab] of [[10, '10'], [20, '20']]) { o.push(`<line x1="${OX - 6}" y1="${cy - v * 6.6}" x2="${OX + 6}" y2="${cy - v * 6.6}" stroke="${C.ink}" stroke-width="2"/>`); o.push(t(OX - 12, cy - v * 6.6 + 6, lab, { size: 18, fill: C.muted, anchor: 'end' })); }
    o.push(`<line x1="${OX - 130}" y1="${cy - 7}" x2="${OX - 130}" y2="${cy + 7}" stroke="${C.ink}" stroke-width="2"/><line x1="${OX + 130}" y1="${cy - 7}" x2="${OX + 130}" y2="${cy + 7}" stroke="${C.ink}" stroke-width="2"/>`);
    o.push(t(OX - 130, cy - 14, '−1', { size: 18, fill: C.muted, anchor: 'middle' }), t(OX + 130, cy - 14, '1', { size: 18, fill: C.muted, anchor: 'middle' }));
  });
  return svg(W, 960, 'Current–voltage graphs', o.join('\n'), 'Three components, three shapes');
}

// ---------- 05 d.c. motor ----------
function motor() {
  const o = [];
  const magnets = (y) => {
    o.push(`<rect x="46" y="${y}" width="80" height="116" fill="${NCOL}" stroke="${C.ink}" stroke-width="3"/>`, t(86, y + 74, 'N', { size: 40, weight: 700, fill: '#ffffff', anchor: 'middle' }));
    o.push(`<rect x="774" y="${y}" width="80" height="116" fill="${SCOL}" stroke="${C.ink}" stroke-width="3"/>`, t(814, y + 74, 'S', { size: 40, weight: 700, fill: '#ffffff', anchor: 'middle' }));
    for (const dy of [24, 94]) { o.push(fa(138, y + dy, 236, y + dy, C.tealDark, 3, 18), fa(664, y + dy, 762, y + dy, C.tealDark, 3, 18)); }
  };
  const ring = (cx, cy, rot, tealSide) => {
    // split ring: two half-rings separated by gaps at angle rot (degrees) and rot+180
    const r = 24, g = 16;
    const arc = (a1, a2, col) => {
      const p = (a) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)];
      const [x1, y1] = p(a1), [x2, y2] = p(a2);
      return `<path d="M${x1} ${y1} A${r} ${r} 0 0 1 ${x2} ${y2}" fill="none" stroke="${col}" stroke-width="10"/>`;
    };
    return arc(rot + g, rot + 180 - g, tealSide ? C.tealDark : C.olive) + arc(rot + 180 + g, rot + 360 - g, tealSide ? C.olive : C.tealDark);
  };
  const brushes = (cx, cy) => `<rect x="${cx - 9}" y="${cy - 48}" width="18" height="20" fill="#3b475e"/><rect x="${cx - 9}" y="${cy + 28}" width="18" height="20" fill="#3b475e"/>` +
    t(cx - 22, cy - 34, '+', { size: 20, weight: 700, anchor: 'middle' }) + t(cx - 22, cy + 46, '−', { size: 20, weight: 700, anchor: 'middle' });
  const dotC = (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/><circle cx="${x}" cy="${y}" r="3.5" fill="${C.ink}"/>`;
  const crossC = (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/><path d="M${x - 8} ${y - 8} L${x + 8} ${y + 8} M${x + 8} ${y - 8} L${x - 8} ${y + 8}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const cx = 450;
  // panel 1
  o.push(panel(22, 124, 856, 256, '#ffffff', C.ink));
  o.push(t(46, 158, '1 Current flows: forces turn the coil', { size: 21, weight: 700 }));
  let cy = 272; magnets(214);
  o.push(`<line x1="${cx - 68}" y1="${cy - 38}" x2="${cx + 68}" y2="${cy + 38}" stroke="${C.ink}" stroke-width="4"/>`);
  o.push(ring(cx, cy, 29.2, false), brushes(cx, cy));
  o.push(dotC(cx - 68, cy - 38), crossC(cx + 68, cy + 38));
  o.push(fa(cx - 68, cy - 52, cx - 68, cy - 102, C.olive, 4, 22), fa(cx + 68, cy + 52, cx + 68, cy + 102, C.olive, 4, 22));
  o.push(t(186, 224, 'field', { size: 18, fill: C.tealDark, anchor: 'middle' }));
  o.push(`<line x1="${cx + 10}" y1="${cy - 40}" x2="${cx + 24}" y2="${cy - 40}" stroke="${C.ink}" stroke-width="1.5"/>`, t(cx + 26, cy - 34, 'brush', { size: 18 }));
  o.push(`<line x1="${cx - 30}" y1="${cy}" x2="${cx - 64}" y2="${cy}" stroke="${C.ink}" stroke-width="1.5"/>`, t(cx - 68, cy + 6, 'split ring', { size: 18, anchor: 'end' }));
  o.push(`<line x1="${cx + 78}" y1="${cy + 46}" x2="${cx + 112}" y2="${cy + 76}" stroke="${C.ink}" stroke-width="1.5"/>`, t(cx + 114, cy + 88, 'coil', { size: 18 }));
  // panel 2
  o.push(panel(22, 392, 856, 256, '#ffffff', C.ink));
  o.push(t(46, 426, '2 Gaps at brushes: current reverses', { size: 21, weight: 700 }));
  cy = 540; magnets(482);
  o.push(`<line x1="${cx}" y1="${cy - 78}" x2="${cx}" y2="${cy + 78}" stroke="${C.ink}" stroke-width="4"/>`);
  o.push(ring(cx, cy, 90, false), brushes(cx, cy));
  o.push(`<circle cx="${cx}" cy="${cy - 78}" r="13" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/><circle cx="${cx}" cy="${cy + 78}" r="13" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(tl(cx + 56, cy - 6, ['no current', 'for an instant'], { size: 18, fill: C.muted }, 22));
  // panel 3
  o.push(panel(22, 660, 856, 256, '#ffffff', C.ink));
  o.push(t(46, 694, '3 Halves swapped: same turning way', { size: 21, weight: 700 }));
  cy = 808; magnets(750);
  o.push(`<line x1="${cx - 68}" y1="${cy + 38}" x2="${cx + 68}" y2="${cy - 38}" stroke="${C.ink}" stroke-width="4"/>`);
  o.push(ring(cx, cy, -29.2, true), brushes(cx, cy));
  o.push(dotC(cx - 68, cy + 38), crossC(cx + 68, cy - 38));
  o.push(fa(cx - 68, cy + 24, cx - 68, cy - 26, C.olive, 4, 22), fa(cx + 68, cy - 24, cx + 68, cy + 26, C.olive, 4, 22));
  o.push(t(46, 952, '× current away from you   • current towards you', { size: 18, fill: C.muted }));
  o.push(t(46, 980, 'gold arrow = force on that side of the coil', { size: 18, weight: 700, fill: C.olive }));
  return svg(W, 1000, 'How the d.c. motor keeps turning', o.join('\n'), 'End view of the coil in the magnetic field');
}

// ---------- 06 Transformer ----------
function transformer() {
  const o = [];
  o.push(`<path d="M196 128 H730 V384 H196 Z M258 168 V328 H668 V168 Z" fill="${CREAM}" fill-rule="evenodd" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(t(463, 156, 'soft-iron core', { size: 18, fill: C.muted, anchor: 'middle' }));
  for (let i = 0; i < 17; i++) { const y = 176 + i * 9.4; o.push(`<ellipse cx="227" cy="${y}" rx="44" ry="6" fill="none" stroke="${C.tealDark}" stroke-width="3"/>`); }
  o.push(`<ellipse cx="699" cy="256" rx="44" ry="8" fill="none" stroke="${C.olive}" stroke-width="3.5"/>`);
  o.push(t(104, 216, 'Primary', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(104, 244, '920 turns', { size: 19, anchor: 'middle' }));
  o.push(t(104, 300, '230 V', { size: 26, weight: 700, anchor: 'middle' }), t(104, 330, 'a.c. in', { size: 18, fill: C.muted, anchor: 'middle' }));
  o.push(t(818, 216, 'Secondary', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }), t(818, 244, '48 turns', { size: 19, anchor: 'middle' }));
  o.push(t(818, 300, '12 V', { size: 26, weight: 700, anchor: 'middle' }), t(818, 330, 'a.c. out', { size: 18, fill: C.muted, anchor: 'middle' }));
  o.push(panel(30, 420, 840, 140, '#ffffff', C.ink));
  o.push(t(450, 474, sub('V', 's', ' = 230 × 48 ÷ 920 = 12 V'), { size: 32, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(450, 510, `V<tspan dy="5" font-size="70%">p</tspan><tspan dy="-5" dx="4">/ V</tspan><tspan dy="5" font-size="70%">s</tspan><tspan dy="-5" dx="4">= N</tspan><tspan dy="5" font-size="70%">p</tspan><tspan dy="-5" dx="4">/ N</tspan><tspan dy="5" font-size="70%">s</tspan>`, { size: 21, fill: C.muted, anchor: 'middle' }));
  o.push(t(450, 542, '1 loop drawn ≈ 48 turns', { size: 18, fill: C.muted, anchor: 'middle' }));
  o.push(panel(30, 578, 840, 120, '#ffffff', C.ink));
  o.push(t(450, 626, 'Power in = power out', { size: 23, weight: 700, anchor: 'middle' }));
  o.push(t(450, 672, '230 V × 0.078 A = 12 V × 1.5 A = 18 W', { size: 21, anchor: 'middle' }));
  return svg(W, 720, 'The transformer', o.join('\n'), 'Step-down: fewer turns on the secondary');
}

// ---------- 07 Transmission loss ----------
function transmission() {
  const o = [];
  const one = (y, kv, amps, thick, lossFrac, lossText) => {
    o.push(panel(22, y, 656, 240, '#ffffff', C.ink));
    o.push(t(46, y + 40, kv, { size: 27, weight: 700, fill: C.tealDark }), t(654, y + 40, amps, { size: 23, weight: 700, fill: CU, anchor: 'end' }));
    o.push(`<rect x="46" y="${y + 66}" width="32" height="32" fill="${CREAM}" stroke="${C.ink}" stroke-width="2"/><rect x="622" y="${y + 66}" width="32" height="32" fill="${LIGHT}" stroke="${C.ink}" stroke-width="2"/>`);
    o.push(`<line x1="${92}" y1="${y + 82}" x2="${608}" y2="${y + 82}" stroke="${C.ink}" stroke-width="${thick}" stroke-linecap="round"/>`);
    o.push(tl(36, y + 118, ['power', 'station'], { size: 18, fill: C.muted }, 20), t(638, y + 118, 'town', { size: 18, fill: C.muted, anchor: 'middle' }));
    o.push(`<rect x="46" y="${y + 160}" width="608" height="30" fill="${LIGHT}" stroke="${C.ink}" stroke-width="2"/>`);
    o.push(`<rect x="47" y="${y + 161}" width="${Math.max(606 * lossFrac, 2)}" height="28" fill="${C.olive}"/>`);
    o.push(t(46, y + 220, lossText, { size: 21, weight: 700, fill: C.olive }), t(654, y + 220, 'of 50 MW', { size: 18, fill: C.muted, anchor: 'end' }));
  };
  one(120, '25 kV', 'current 2000 A', 22, 16 / 50, 'Lost as heat: 16 MW');
  one(380, '250 kV', 'current 200 A', 2.5, 0.16 / 50, 'Lost as heat: 0.16 MW');
  o.push(t(350, 664, '10× the voltage: 1/100 of the loss', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svg(W, 690, 'Why transmit at high voltage?', `<g transform="translate(100 0)">${o.join('\n')}</g>`, 'Sending 50 MW through cables of 4.0 Ω');
}

export const figures = [
  { name: '03-series-parallel', after: '### Worked example 5: current in a parallel circuit', svg: seriesParallel(),
    alt: 'Two circuits with a 6.0 V cell and 20 and 40 ohm resistors. In series, 0.10 A flows everywhere and the p.d.s are 2.0 V and 4.0 V, adding to 6.0 V. In parallel each branch has 6.0 V; branch currents 0.30 A and 0.15 A add to 0.45 A.',
    caption: 'In series the current is shared by one path; in parallel the branches share the current and each gets the full p.d.' },
  { name: '06-transformer', after: '## P8.2d: Step-up and step-down transformers', svg: transformer(),
    alt: 'A soft-iron core with a primary coil of 920 turns on the left taking 230 V a.c. and a secondary coil of 48 turns on the right giving 12 V. Vs = 230 x 48 / 920 = 12 V, a step-down transformer. Power in equals power out, 18 W.',
    caption: 'A step-down transformer has fewer turns on the secondary, so the output voltage is lower.' },
  { name: '07-transmission-loss', after: '### The model power line', svg: transmission(),
    alt: 'Sending 50 MW through 4.0 ohm cables: at 25 kV the current is 2000 A (thick cable) and 16 MW is lost as heat; at 250 kV the current is 200 A (thin cable) and only 0.16 MW is lost, one hundredth.',
    caption: 'Ten times the voltage means one tenth of the current and one hundredth of the heating loss.' },
  { name: '05-dc-motor', after: '### Worked example 6: forces on a coil', svg: motor(),
    alt: 'Three end views of a coil between N and S poles with a split-ring commutator and brushes. Forces on the two sides are opposite so the coil turns clockwise; when the gaps reach the brushes the current reverses, so the coil keeps turning the same way.',
    caption: 'The split-ring commutator reverses the coil current every half turn so the forces keep turning the coil the same way.' },
  { name: '01-bar-magnet-field', after: '## Current and magnetic fields (4.7.2.1)', svg: barMagnet(),
    alt: 'A bar magnet with N on the left and S on the right, with curved field lines leaving N and entering S, arrows pointing N to S. Lines are closest together near the poles (strong field) and spread out far from the magnet (weaker field).',
    caption: 'Field lines run from N to S and are closest together where the field is strongest.' },
  { name: '04-iv-graphs', after: '## I-V graphs (P3.2g and P3.2h)', svg: ivGraphs(),
    alt: 'Three I-V graphs: a fixed resistor gives a straight line through the origin; a filament lamp gives a curve that gets less steep because resistance rises; a diode carries no current in reverse and rises steeply forward after about 0.6 V.',
    caption: 'The shape of each I-V graph tells you how the resistance behaves.' },
];
