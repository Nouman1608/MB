import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-sciences-electromagnetism-and-waves';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const NCOL = C.rust, SCOL = C.tealDark, FIELD = C.blue;
const magnet = (x, y, w, h, left = 'N', size = 26) => {
  const col = (p) => (p === 'N' ? NCOL : SCOL), right = left === 'N' ? 'S' : 'N';
  return `<rect x="${x}" y="${y}" width="${w / 2}" height="${h}" fill="${col(left)}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${x + w / 2}" y="${y}" width="${w / 2}" height="${h}" fill="${col(right)}" stroke="${C.ink}" stroke-width="2.5"/>` +
    t(x + w / 4, y + h / 2 + size * 0.36, left, { size, weight: 700, anchor: 'middle', fill: '#fff' }) + t(x + (3 * w) / 4, y + h / 2 + size * 0.36, right, { size, weight: 700, anchor: 'middle', fill: '#fff' });
};
const head = (x, y, ang, col = FIELD, s = 9) => { const a = (ang * Math.PI) / 180, c = Math.cos(a), si = Math.sin(a); return `<path d="M${x + s * c},${y + s * si} L${x - s * c - s * 0.7 * si},${y - s * si + s * 0.7 * c} L${x - s * c + s * 0.7 * si},${y - s * si - s * 0.7 * c} Z" fill="${col}"/>`; };
const dotIn = (x, y, r = 14) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x - r * 0.6},${y - r * 0.6} L${x + r * 0.6},${y + r * 0.6} M${x + r * 0.6},${y - r * 0.6} L${x - r * 0.6},${y + r * 0.6}`, { w: 2.5 });
const dotOut = (x, y, r = 14) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="${r * 0.28}" fill="${C.ink}"/>`;
const chip = (x, y, w, h, s, fill, { size = 17, weight = 700, edge = C.ink } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${edge}" stroke-width="2.2"/>` + t(x + w / 2, y + h / 2 + size * 0.35, s, { size, weight, anchor: 'middle' });

// 01 Bar magnet field
{
  let b = panel(30, 110, 840, 440);
  const mx = 300, my = 320, mw = 300, mh = 60;
  [30, 62, 96, 130].forEach((h, k) => {
    const yT = my, yB = my + mh, a = mx + 46 - k * 13, z = mx + mw - 46 + k * 13, sp = 40 + k * 18;
    b += path(`M${a},${yT} C${a - sp},${yT - h * 1.33} ${z + sp},${yT - h * 1.33} ${z},${yT}`, { stroke: FIELD, w: 2.5 }) + head(mx + mw / 2, yT - h, 0);
    b += path(`M${a},${yB} C${a - sp},${yB + h * 1.33} ${z + sp},${yB + h * 1.33} ${z},${yB}`, { stroke: FIELD, w: 2.5 }) + head(mx + mw / 2, yB + h, 0);
  });
  b += path(`M${mx},${my + mh / 2} L${mx - 130},${my + mh / 2}`, { stroke: FIELD, w: 2.5 }) + head(mx - 80, my + mh / 2, 180);
  b += path(`M${mx + mw + 130},${my + mh / 2} L${mx + mw},${my + mh / 2}`, { stroke: FIELD, w: 2.5 }) + head(mx + mw + 70, my + mh / 2, 180);
  b += magnet(mx, my, mw, mh, 'N', 28);
  // compass on a line
  const comp = (x, y, ang) => `<circle cx="${x}" cy="${y}" r="15" fill="#fff" stroke="${C.ink}" stroke-width="2"/>` + `<g transform="rotate(${ang} ${x} ${y})"><path d="M${x + 11},${y} L${x},${y - 4} L${x},${y + 4} Z" fill="${NCOL}"/><path d="M${x - 11},${y} L${x},${y - 4} L${x},${y + 4} Z" fill="${C.muted}"/></g>`;
  b += comp(mx + mw + 80, my + mh / 2 - 46, 150) + t(mx + mw + 100, my + mh / 2 - 66, 'compass needle', { size: 15, fill: C.muted }) + t(mx + mw + 100, my + mh / 2 - 48, 'follows the field', { size: 15, fill: C.muted });
  b += tl(50, 150, ['Lines run N → S', 'outside the magnet'], { size: 17, weight: 700, fill: FIELD }, 22);
  b += tl(850, 150, ['Lines never cross'], { size: 17, weight: 700, fill: FIELD, anchor: 'end' }, 22);
  b += tl(50, 500, ['Lines closest at the poles:', 'field strongest there'], { size: 17, weight: 700 }, 22);
  // poles
  b += panel(30, 570, 410, 200) + t(60, 606, 'Unlike poles attract', { size: 19, weight: 700 }) + magnet(60, 630, 150, 44, 'N', 20) + magnet(250, 630, 150, 44, 'N', 20) +
    arrow(190, 700, 215, 700, { w: 3 }) + arrow(270, 700, 245, 700, { w: 3 }) + t(60, 750, 'S faces N across the gap', { size: 15, fill: C.muted });
  b += panel(460, 570, 410, 200) + t(490, 606, 'Like poles repel', { size: 19, weight: 700 }) + magnet(490, 630, 150, 44, 'N', 20) + magnet(680, 630, 150, 44, 'S', 20) +
    arrow(620, 700, 590, 700, { w: 3 }) + arrow(700, 700, 730, 700, { w: 3 }) + t(490, 750, 'S faces S across the gap', { size: 15, fill: C.muted });
  b += panel(30, 790, 840, 110, C.cream, C.olive) + t(60, 826, 'Magnetic:', { size: 18, weight: 700, fill: C.olive }) + t(180, 826, 'iron, nickel, cobalt, steel', { size: 18 }) +
    t(60, 864, 'Not magnetic:', { size: 18, weight: 700, fill: C.muted }) + t(190, 864, 'copper, aluminium, brass, plastic', { size: 18 });
  add('01-bar-magnet-field',
    svg(900, 920, 'Magnetic field of a bar magnet', b),
    'Field lines leave the north pole of a bar magnet and curve round to the south pole without crossing, closest together at the poles where the field is strongest; compass needles line up along them. Below, unlike poles attract and like poles repel, and iron, nickel, cobalt and steel are magnetic while copper, aluminium, brass and plastic are not.',
    'Field lines run from N to S, never cross, and crowd together where the field is strongest.',
    '## Magnets and magnetic fields');
}

// 02 Wire, solenoid, electromagnet
{
  let b = panel(30, 110, 410, 380) + t(235, 148, 'Straight wire, end-on', { size: 20, weight: 700, anchor: 'middle' });
  const ring = (cx, cy, r, ccw) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${FIELD}" stroke-width="2.5"/>` + head(cx, cy - r, ccw ? 180 : 0) + head(cx, cy + r, ccw ? 0 : 180);
  b += [30, 52, 74].map((r) => ring(140, 290, r, true)).join('') + dotOut(140, 290) + t(140, 400, 'current out of page', { size: 15, anchor: 'middle', fill: C.muted }) + t(140, 420, 'field anticlockwise', { size: 15, anchor: 'middle', fill: FIELD, weight: 600 });
  b += [30, 52, 74].map((r) => ring(335, 290, r, false)).join('') + dotIn(335, 290) + t(335, 400, 'current into page', { size: 15, anchor: 'middle', fill: C.muted }) + t(335, 420, 'field clockwise', { size: 15, anchor: 'middle', fill: FIELD, weight: 600 });
  b += t(235, 460, 'Right-hand grip: thumb = current, fingers = field', { size: 15, anchor: 'middle', weight: 600 });
  b += panel(460, 110, 410, 380) + t(665, 148, 'Solenoid on an iron core', { size: 20, weight: 700, anchor: 'middle' });
  const sx = 550, sy = 290, sw = 230;
  [55, 95].forEach((h) => {
    b += path(`M${sx + 6},${sy - 30} C${sx - 50},${sy - 30 - h * 1.3} ${sx + sw + 50},${sy - 30 - h * 1.3} ${sx + sw - 6},${sy - 30}`, { stroke: FIELD, w: 2.5 }) + head(sx + sw / 2, sy - 30 - h * 0.975, 0);
    b += path(`M${sx + 6},${sy + 30} C${sx - 50},${sy + 30 + h * 1.3} ${sx + sw + 50},${sy + 30 + h * 1.3} ${sx + sw - 6},${sy + 30}`, { stroke: FIELD, w: 2.5 }) + head(sx + sw / 2, sy + 30 + h * 0.975, 0);
  });
  b += `<rect x="${sx - 10}" y="${sy - 22}" width="${sw + 20}" height="44" fill="#c9c9c9" stroke="${C.ink}" stroke-width="2"/>` 
  for (let k = 0; k < 9; k++) { const x = sx + 10 + k * 26; b += `<ellipse cx="${x}" cy="${sy}" rx="8" ry="32" fill="none" stroke="${C.rust}" stroke-width="3"/>`; }
  [-10, 10].forEach((dy) => { b += `<line x1="${sx + 20}" y1="${sy + dy}" x2="${sx + sw - 20}" y2="${sy + dy}" stroke="${FIELD}" stroke-width="2.5" opacity="0.9"/>`; });
  b += head(sx + sw - 18, sy - 10, 180) + head(sx + sw - 18, sy + 10, 180);
  b += t(665, 448, 'Grey: soft iron core. Outside: like a bar', { size: 15, anchor: 'middle', fill: C.muted }) + t(665, 468, 'magnet. Inside: strong and nearly uniform.', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 510, 840, 170, C.cream, C.olive) + t(60, 548, 'Make an electromagnet stronger', { size: 20, weight: 700 });
  b += chip(60, 568, 240, 50, 'more current', '#fff', { edge: C.olive }) + chip(330, 568, 240, 50, 'more turns of wire', '#fff', { edge: C.olive }) + chip(600, 568, 240, 50, 'a soft iron core', '#fff', { edge: C.olive });
  b += t(60, 655, 'Soft iron loses its magnetism when the current stops, so the magnet switches off cleanly.', { size: 16, fill: C.muted });
  add('02-wire-and-solenoid-fields',
    svg(900, 710, 'Fields from currents', b),
    'End-on views of a wire: current out of the page gives anticlockwise circular field lines, current into the page gives clockwise ones, by the right-hand grip rule. A solenoid wound on a soft iron core has a field like a bar magnet outside and a strong, nearly uniform field inside. More current, more turns and a soft iron core make an electromagnet stronger.',
    'Coil a current-carrying wire round soft iron and you get a magnet you can switch off.',
    '## Electromagnets');
}

// 03 Electromagnet fair test
{
  let b = panel(30, 110, 840, 330);
  const cols = [['Row', 90], ['Turns', 230], ['Current (A)', 380], ['Paperclips', 540]];
  cols.forEach(([s, x]) => { b += t(x, 155, s, { size: 18, weight: 700, anchor: 'middle' }); });
  const rows = [['1', '20', '1.0', 4], ['2', '40', '1.0', 9], ['3', '40', '2.0', 17]];
  rows.forEach(([r, n, I, c], i) => {
    const y = 185 + i * 80;
    b += `<rect x="55" y="${y}" width="${560}" height="62" rx="10" fill="${i % 2 ? '#fff' : C.tealLight}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += t(90, y + 40, r, { size: 20, weight: 700, anchor: 'middle' }) + t(230, y + 40, n, { size: 20, anchor: 'middle', weight: i === 1 ? 700 : 400, fill: i === 1 ? C.tealDark : C.ink }) +
      t(380, y + 40, I, { size: 20, anchor: 'middle', weight: i === 2 ? 700 : 400, fill: i === 2 ? C.rust : C.ink });
    b += `<rect x="470" y="${y + 18}" width="${c * 7}" height="26" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + t(480 + c * 7, y + 38, String(c), { size: 19, weight: 700 });
  });
  const br = (y1, y2, x, col, l1, l2) => path(`M${x},${y1} L${x + 18},${y1} L${x + 18},${y2} L${x},${y2}`, { stroke: col, w: 3 }) + t(x + 30, (y1 + y2) / 2 - 4, l1, { size: 17, weight: 700, fill: col }) + t(x + 30, (y1 + y2) / 2 + 18, l2, { size: 15, fill: C.muted });
  b += br(216, 296, 630, C.tealDark, 'only turns change', 'more turns: stronger');
  b += br(306, 376, 630, C.rust, 'only current changes', 'more current: stronger');
  b += panel(30, 460, 840, 110, '#fbeee6', C.rust) + t(60, 500, 'Rows 1 and 3: not a fair test', { size: 19, weight: 700, fill: C.rust }) +
    t(60, 530, 'Turns and current both change, so you cannot tell which one caused', { size: 17 }) + t(60, 552, 'the extra paperclips.', { size: 17 });
  add('03-electromagnet-fair-test',
    svg(900, 600, 'Reading an electromagnet test', b),
    'A table: 20 turns at 1.0 A lifts 4 paperclips, 40 turns at 1.0 A lifts 9, and 40 turns at 2.0 A lifts 17. Rows 1 and 2 change only the turns, showing more turns gives a stronger magnet; rows 2 and 3 change only the current, showing more current does. Rows 1 and 3 change both, so they are not a fair test.',
    'Compare only rows where one variable changes.',
    '## Electromagnets');
}

// 04 Motor effect: Fleming's left-hand rule
{
  let b = panel(30, 110, 410, 420) + t(235, 148, 'Fleming’s left-hand rule', { size: 20, weight: 700, anchor: 'middle' });
  const ox = 200, oy = 300;
  b += arrow(ox, oy, ox + 170, oy, { w: 5, color: FIELD }) + t(ox + 170, oy - 14, 'First finger', { size: 16, weight: 700, anchor: 'end', fill: FIELD }) + t(ox + 170, oy + 28, 'Field (N → S)', { size: 16, anchor: 'end', fill: FIELD });
  b += arrow(ox, oy, ox + 95, oy - 110, { w: 5, color: C.rust, marker: 'ahR' }) + t(ox + 105, oy - 116, 'seCond finger', { size: 16, weight: 700, fill: C.rust }) + t(ox + 105, oy - 96, 'Current', { size: 16, fill: C.rust });
  b += arrow(ox, oy, ox, oy + 160, { w: 5, color: C.olive, marker: 'ahO' }) + t(ox - 12, oy + 140, 'thuMb', { size: 16, weight: 700, anchor: 'end', fill: C.olive }) + t(ox - 12, oy + 160, 'Motion (force)', { size: 16, anchor: 'end', fill: C.olive });
  b += `<circle cx="${ox}" cy="${oy}" r="7" fill="${C.ink}"/>` + t(235, 505, 'All three at right angles', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(460, 110, 410, 420) + t(665, 148, 'Wire between two poles', { size: 20, weight: 700, anchor: 'middle' });
  b += `<rect x="480" y="230" width="70" height="140" fill="${NCOL}" stroke="${C.ink}" stroke-width="2.5"/>` + t(515, 310, 'N', { size: 26, weight: 700, anchor: 'middle', fill: '#fff' });
  b += `<rect x="780" y="230" width="70" height="140" fill="${SCOL}" stroke="${C.ink}" stroke-width="2.5"/>` + t(815, 310, 'S', { size: 26, weight: 700, anchor: 'middle', fill: '#fff' });
  [250, 280, 320, 350].forEach((y) => { b += arrow(555, y, 772, y, { w: 2.2, color: FIELD }); });
  b += `<circle cx="665" cy="300" r="22" fill="#fff" stroke="${C.ink}" stroke-width="3"/>` + path('M652,287 L678,313 M678,287 L652,313', { w: 3 });
  b += arrow(665, 326, 665, 430, { w: 6, color: C.olive, marker: 'ahO' }) + t(680, 420, 'force', { size: 18, weight: 700, fill: C.olive });
  b += t(665, 200, 'current into the page', { size: 16, anchor: 'middle', weight: 600 });
  b += t(665, 470, 'Reverse the current or the field:', { size: 16, anchor: 'middle', fill: C.muted }) + t(665, 492, 'the force reverses.', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(30, 550, 840, 130, C.cream, C.olive);
  b += t(60, 588, 'Bigger force:', { size: 18, weight: 700 }) + t(200, 588, 'bigger current, stronger magnet, or longer wire in the field.', { size: 17 });
  b += t(60, 626, 'No force:', { size: 18, weight: 700 }) + t(200, 626, 'wire parallel to the field. The force is largest at 90°.', { size: 17 });
  b += t(60, 660, 'The wire’s own field interacts with the magnet’s field.', { size: 16, fill: C.muted });
  add('04-motor-effect',
    svg(900, 710, 'The motor effect', b),
    'Fleming’s left-hand rule: first finger points along the field from N to S, second finger along the current and the thumb gives the motion, all at right angles. A wire carrying current into the page between a north pole on the left and a south pole on the right is pushed downwards. Reversing the current or field reverses the force; there is no force when the wire is parallel to the field.',
    'Field, current and force are mutually at right angles; Fleming’s left-hand rule gives the direction.',
    '## The motor effect');
}

// 05 Induction: magnet and coil
{
  const row = (y, title, state, needle, mv) => {
    let o = panel(30, y, 840, 170) + t(60, y + 40, title, { size: 21, weight: 700 }) + t(60, y + 66, state, { size: 16, fill: C.muted });
    const cx = 470, cy = y + 100;
    for (let k = 0; k < 6; k++) o += `<ellipse cx="${cx + k * 22}" cy="${cy}" rx="10" ry="36" fill="none" stroke="${C.rust}" stroke-width="3.5"/>`;
    o += path(`M${cx},${cy + 36} L${cx},${cy + 56} L${cx + 260},${cy + 56} L${cx + 260},${cy + 20}`, { w: 2.5 }) + path(`M${cx + 110},${cy + 36} L${cx + 110},${cy + 46} L${cx + 230},${cy + 46} L${cx + 230},${cy + 20}`, { w: 2.5 });
    // meter
    o += `<circle cx="${cx + 245}" cy="${cy - 6}" r="34" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${cx + 220},${cy - 18} A30,30 0 0 1 ${cx + 270},${cy - 18}`, { stroke: C.muted, w: 1.8 }) +
      `<line x1="${cx + 245}" y1="${cy + 12}" x2="${cx + 245 + 26 * Math.sin((needle * Math.PI) / 180)}" y2="${cy + 12 - 32 * Math.cos((needle * Math.PI) / 180)}" stroke="${C.rust}" stroke-width="3"/><circle cx="${cx + 245}" cy="${cy + 12}" r="4" fill="${C.ink}"/>`;
    // magnet
    const mx = mv === 'in' ? 300 : mv === 'out' ? 300 : 380;
    o += magnet(mx, cy - 18, 120, 36, 'S', 18);
    if (mv === 'in') o += arrow(255, cy, 292, cy, { w: 4 });
    if (mv === 'out') o += arrow(292, cy, 240, cy, { w: 4 });
    return o;
  };
  let b = row(110, 'Magnet pushed in', 'field through the coil changes', -40, 'in') + row(296, 'Magnet held still', 'no change: no induced voltage', 0, 'still') + row(482, 'Magnet pulled out', 'change in the other direction', 40, 'out');
  b += t(855, 230, 'one way', { size: 16, weight: 700, anchor: 'end', fill: C.rust }) + t(855, 416, 'zero', { size: 16, weight: 700, anchor: 'end', fill: C.muted }) + t(855, 602, 'other way', { size: 16, weight: 700, anchor: 'end', fill: C.rust });
  b += panel(30, 670, 840, 100, C.cream, C.olive) + t(60, 708, 'Bigger induced voltage:', { size: 18, weight: 700 }) + t(290, 708, 'move faster, stronger magnet, more turns.', { size: 17 }) +
    t(60, 746, 'A generator turns a coil in a field: each side moves up then down, giving a.c.', { size: 16, fill: C.muted });
  add('05-electromagnetic-induction',
    svg(900, 800, 'Electromagnetic induction', b),
    'A magnet and a coil joined to a centre-zero meter. Pushing the magnet in deflects the needle one way, holding it still gives zero and pulling it out deflects the needle the other way. Moving faster, a stronger magnet or more turns give a bigger induced voltage; a generator’s turning coil produces alternating current.',
    'Only a changing field induces a voltage; reverse the change and the voltage reverses.',
    '## Electromagnetic induction (qualitative)');
}

// 06 Transverse and longitudinal waves
{
  let b = panel(30, 110, 840, 330) + t(60, 148, 'Transverse', { size: 22, weight: 700 }) + t(200, 148, 'vibration at right angles to energy travel: water, rope, all EM waves', { size: 16, fill: C.muted });
  const y0 = 280, A = 70, L = 300, x0 = 90;
  let d = `M${x0},${y0}`;
  for (let x = 0; x <= 720; x += 6) d += ` L${x0 + x},${(y0 - A * Math.sin((2 * Math.PI * x) / L)).toFixed(1)}`;
  b += `<line x1="${x0}" y1="${y0}" x2="${x0 + 720}" y2="${y0}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="7 6"/>` + t(x0 + 725, y0 + 5, 'rest', { size: 15, fill: C.muted });
  b += path(d, { stroke: C.tealDark, w: 3.5 });
  b += `<line x1="${x0 + L / 4}" y1="${y0 - A - 22}" x2="${x0 + (5 * L) / 4}" y2="${y0 - A - 22}" stroke="${C.ink}" stroke-width="2.5" marker-start="url(#ah)" marker-end="url(#ah)"/>` + t(x0 + (3 * L) / 4, y0 - A - 32, 'wavelength λ (crest to crest)', { size: 16, weight: 700, anchor: 'middle' });
  b += `<line x1="${x0 + (7 * L) / 4}" y1="${y0}" x2="${x0 + (7 * L) / 4}" y2="${y0 + A}" stroke="${C.rust}" stroke-width="2.5" marker-start="url(#ahR)" marker-end="url(#ahR)"/>` + t(x0 + (7 * L) / 4 + 12, y0 + A / 2 + 6, 'amplitude', { size: 16, weight: 700, fill: C.rust });
  b += arrow(x0, 415, x0 + 160, 415, { w: 3 }) + t(x0 + 172, 421, 'energy travels', { size: 15, fill: C.muted });
  b += panel(30, 460, 840, 300) + t(60, 498, 'Longitudinal', { size: 22, weight: 700 }) + t(225, 498, 'vibration parallel to energy travel: sound (needs a medium)', { size: 16, fill: C.muted });
  // coils: positions with compressions
  const ly = 590;
  for (let k = 0; k < 60; k++) { const u = k * 12; const x = x0 + u + 14 * Math.sin((2 * Math.PI * u) / L); b += `<line x1="${x.toFixed(1)}" y1="${ly - 40}" x2="${x.toFixed(1)}" y2="${ly + 40}" stroke="${C.ink}" stroke-width="2"/>`; }
  // compressions where density highest: derivative max at u = 0, L, 2L
  [0, 1].forEach((k) => { const x = x0 + L / 2 + k * L; b += t(x, ly + 66, 'C', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }); });
  [0, 1, 2].forEach((k) => { const x = x0 + k * L; b += t(x, ly + 66, 'R', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }); });
  b += `<line x1="${x0}" y1="${ly - 56}" x2="${x0 + L}" y2="${ly - 56}" stroke="${C.ink}" stroke-width="2.5" marker-start="url(#ah)" marker-end="url(#ah)"/>` + t(x0 + L / 2, ly - 66, 'wavelength λ', { size: 16, weight: 700, anchor: 'middle' });
  b += t(60, 700, 'C = compression (coils close)    R = rarefaction (coils spread out)', { size: 16, weight: 600 });
  b += t(60, 735, 'Particles only vibrate about a fixed position: energy moves, matter does not.', { size: 16, fill: C.muted });
  add('06-transverse-longitudinal',
    svg(900, 790, 'Two kinds of wave', b),
    'A transverse wave drawn about a rest line, with the wavelength marked crest to crest and the amplitude from rest to trough; examples are water, rope and electromagnetic waves. Below, a longitudinal wave with compressions and rarefactions, one wavelength from compression to compression; sound is longitudinal and needs a medium.',
    'Transverse waves vibrate across the direction of travel; longitudinal waves vibrate along it.',
    '## Wave properties');
}

// 07 Reflection and refraction
{
  let b = panel(30, 110, 360, 470) + t(210, 148, 'Reflection', { size: 21, weight: 700, anchor: 'middle' });
  const my = 470, mx = 210;
  b += `<rect x="60" y="${my}" width="300" height="16" fill="#c9d3e6" stroke="${C.ink}" stroke-width="2.5"/>`;
  for (let k = 0; k < 12; k++) b += `<line x1="${68 + k * 25}" y1="${my + 16}" x2="${58 + k * 25}" y2="${my + 30}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<line x1="${mx}" y1="${my}" x2="${mx}" y2="200" stroke="${C.muted}" stroke-width="2" stroke-dasharray="8 6"/>` + t(mx, 190, 'normal', { size: 15, anchor: 'middle', fill: C.muted });
  const a = (40 * Math.PI) / 180, Lr = 230;
  b += arrow(mx - Lr * Math.sin(a), my - Lr * Math.cos(a), mx - 4, my - 4, { w: 3.5, color: C.rust, marker: 'ahR' }) + arrow(mx, my, mx + Lr * Math.sin(a), my - Lr * Math.cos(a), { w: 3.5, color: C.rust, marker: 'ahR' });
  b += path(`M${mx},${my - 70} A70,70 0 0 0 ${mx - 70 * Math.sin(a)},${my - 70 * Math.cos(a)}`, { stroke: C.ink, w: 2 }) + path(`M${mx},${my - 70} A70,70 0 0 1 ${mx + 70 * Math.sin(a)},${my - 70 * Math.cos(a)}`, { stroke: C.ink, w: 2 });
  b += t(mx - 30, my - 88, 'i', { size: 20, weight: 700, anchor: 'middle', italic: true }) + t(mx + 30, my - 88, 'r', { size: 20, weight: 700, anchor: 'middle', italic: true });
  b += t(210, 540, 'angle i = angle r', { size: 19, weight: 700, anchor: 'middle' }) + t(210, 564, 'both measured from the normal', { size: 15, anchor: 'middle', fill: C.muted });
  // refraction
  b += panel(410, 110, 460, 470) + t(640, 148, 'Refraction through a glass block', { size: 21, weight: 700, anchor: 'middle' });
  const gx = 480, gy = 250, gw = 320, gh = 180;
  b += `<rect x="${gx}" y="${gy}" width="${gw}" height="${gh}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + t(gx + 10, gy + gh - 12, 'glass  2.0 × 10⁸ m/s', { size: 15, anchor: 'start', fill: C.tealDark, weight: 600 }) + t(gx + gw - 4, gy - 14, 'air  3.0 × 10⁸ m/s', { size: 15, fill: C.muted, weight: 600, anchor: 'end' });
  const i = (45 * Math.PI) / 180, r = Math.asin(Math.sin(i) / 1.5);
  const p1x = 650, p1y = gy, p2x = p1x + gh * Math.tan(r), p2y = gy + gh;
  b += `<line x1="${p1x}" y1="${gy - 80}" x2="${p1x}" y2="${gy + 80}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="7 6"/>` + `<line x1="${p2x}" y1="${p2y - 80}" x2="${p2x}" y2="${p2y + 80}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="7 6"/>`;
  b += arrow(p1x - 100 * Math.tan(i), gy - 100, p1x - 3, gy - 3, { w: 3.5, color: C.rust, marker: 'ahR' }) + `<line x1="${p1x}" y1="${p1y}" x2="${p2x}" y2="${p2y}" stroke="${C.rust}" stroke-width="3.5"/>` + head((p1x + p2x) / 2, (p1y + p2y) / 2, 90 - (r * 180) / Math.PI, C.rust, 9);
  b += arrow(p2x, p2y, p2x + 100 * Math.tan(i), p2y + 100, { w: 3.5, color: C.rust, marker: 'ahR' });
  b += t(p1x - 14, gy + 70, 'slows down:', { size: 15, weight: 700, anchor: 'end' }) + t(p1x - 14, gy + 90, 'bends towards', { size: 15, anchor: 'end' }) + t(p1x - 14, gy + 110, 'the normal', { size: 15, anchor: 'end' });
  b += t(p2x - 14, p2y + 30, 'speeds up: bends', { size: 15, weight: 700, anchor: 'end' }) + t(p2x - 14, p2y + 50, 'away from the normal', { size: 15, anchor: 'end' });
  b += panel(30, 600, 840, 120, C.cream, C.olive) + t(60, 638, 'Frequency stays the same; speed and wavelength change (λ = v ÷ f).', { size: 17, weight: 700 }) +
    t(60, 670, 'Light at 5.0 × 10¹⁴ Hz: 600 nm in air, 400 nm in glass.', { size: 17 }) + t(60, 700, 'A ray along the normal changes speed but not direction.', { size: 16, fill: C.muted });
  add('07-reflection-refraction',
    svg(900, 750, 'Reflection and refraction', b),
    'Left: a ray reflects from a mirror with the angle of incidence equal to the angle of reflection, both measured from the normal. Right: a ray enters a glass block, slows down and bends towards the normal, then speeds up and bends away from the normal as it leaves. Frequency is unchanged, so light of 5.0 × 10¹⁴ Hz has a wavelength of 600 nm in air and 400 nm in glass.',
    'Refraction is a change of speed; the frequency never changes.',
    '## Reflection and refraction');
}

// 08 Electromagnetic spectrum
{
  const regs = [
    ['Radio waves', 'radio and TV broadcasting', 'low risk at normal levels', '#c9d3e6'],
    ['Microwaves', 'mobile phones, satellites, ovens', 'heats body tissue at high power', '#d4dceb'],
    ['Infrared', 'remote controls, thermal imaging', 'skin burns', '#f0c7ad'],
    ['Visible light', 'seeing, photography, optical fibres', 'very bright light damages the retina', C.cream],
    ['Ultraviolet', 'forged banknotes, sterilising water', 'sunburn, skin cancer, eye damage', '#d9cfe8'],
    ['X-rays', 'images of bones, baggage checks', 'ionising: damages cells, cancer', '#d7d7d7'],
    ['Gamma rays', 'killing cancer cells, sterilising', 'ionising: damages cells, cancer', '#bdbdbd'],
  ];
  let b = '';
  const rh = 72, y0 = 200;
  b += t(240, 145, 'Region', { size: 18, weight: 700, anchor: 'middle' }) + t(365, 145, 'Use', { size: 18, weight: 700 }) + t(620, 145, 'Main hazard', { size: 18, weight: 700 });
  b += arrow(60, 180, 60, y0 + 7 * rh - 10, { w: 3.5, color: C.rust, marker: 'ahR' });
  b += `<text x="45" y="${y0 + 3.5 * rh}" font-size="16" font-weight="700" fill="${C.rust}" text-anchor="middle" transform="rotate(-90 45 ${y0 + 3.5 * rh})">shorter wavelength, higher frequency, more energy</text>`;
  const cell = (x, y, s2, o) => { const L2 = []; let cur = ''; for (const w of s2.split(' ')) { if ((cur + ' ' + w).trim().length > 27) { L2.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); } L2.push(cur); const y1 = y + rh / 2 + 2 - (L2.length - 1) * 10; return tl(x, y1, L2, o, 20); };
  regs.forEach(([n, u, h, f], i) => {
    const y = y0 + i * rh - 30;
    b += `<rect x="80" y="${y}" width="790" height="${rh - 8}" rx="10" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
    // wave icon with shrinking wavelength
    const L = 70 / (1 + i * 0.9); let d = `M100,${y + rh / 2 - 4}`;
    for (let x = 0; x <= 70; x += 1) d += ` L${100 + x},${(y + rh / 2 - 4 - 12 * Math.sin((2 * Math.PI * x) / L)).toFixed(1)}`;
    b += path(d, { stroke: C.ink, w: 2 });
    b += t(190, y + rh / 2 + 2, n, { size: 18, weight: 700 }) + cell(365, y, u, { size: 15 }) + cell(620, y, h, { size: 15, fill: i >= 5 ? C.rust : C.ink, weight: i >= 5 ? 700 : 400 });
  });
  b += panel(30, y0 + 7 * rh - 20, 840, 80, C.cream, C.olive) + t(450, y0 + 7 * rh + 15, 'All transverse, need no medium, 3.0 × 10⁸ m/s in a vacuum', { size: 18, weight: 700, anchor: 'middle' }) +
    t(450, y0 + 7 * rh + 42, 'Optical fibres carry signals by total internal reflection.', { size: 16, anchor: 'middle', fill: C.muted });
  add('08-em-spectrum',
    svg(900, y0 + 7 * rh + 90, 'The electromagnetic spectrum', b),
    'Seven regions in order of decreasing wavelength and increasing frequency and energy: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays, each with a use and a main hazard. X-rays and gamma rays are ionising. All are transverse, need no medium and travel at 3.0 × 10⁸ m/s in a vacuum.',
    'Moving down the spectrum, wavelength falls and frequency and energy rise, so the hazard grows.',
    '## The electromagnetic spectrum');
}
