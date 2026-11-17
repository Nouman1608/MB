import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-properties-of-waves';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
// sine wave from x0 to x1 about y0, wavelength L px, amplitude A px (crest = up), phase so x0 starts at rest going up
const sine = (x0, x1, y0, L, A, { stroke = C.blue, w = 4, phase = 0 } = {}) => {
  const p = []; for (let x = x0; x <= x1 + 0.01; x += 3) p.push(`${x.toFixed(1)},${(y0 - A * Math.sin((2 * Math.PI * (x - x0)) / L + phase)).toFixed(1)}`);
  return path(`M${p.join(' L')}`, { stroke, w });
};
// double-headed arrow
const dbl = (x1, y1, x2, y2, color = C.ink, m = 'ah', w = 3) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" marker-start="url(#${m})" marker-end="url(#${m})"/>`;

// 01 Transverse and longitudinal
{
  let b = panel(30, 110, 840, 330);
  b += t(60, 148, 'Transverse', { size: 22, weight: 700 }) + t(205, 148, 'e.g. light and all EM waves, water waves, a rope', { size: 16, fill: C.muted });
  b += ln(60, 280, 840, 280, { color: C.panelEdge, w: 2, dash: '6 6' });
  b += sine(60, 840, 280, 260, 70);
  b += dbl(430, 205, 430, 355, C.rust, 'ahR', 4) + t(445, 230, 'oscillation:', { size: 16, weight: 700, fill: C.rust }) + t(445, 250, 'up and down', { size: 16, weight: 700, fill: C.rust });
  b += t(125, 196, 'crest', { size: 16, weight: 700, anchor: 'middle' }) + t(255, 376, 'trough', { size: 16, weight: 700, anchor: 'middle' });
  b += arrow(560, 410, 820, 410, { color: C.tealDark, marker: 'ahT', w: 5 }) + t(550, 416, 'wave travels (energy transfer)', { size: 16, weight: 700, fill: C.tealDark, anchor: 'end' });
  b += panel(30, 460, 840, 330);
  b += t(60, 498, 'Longitudinal', { size: 22, weight: 700 }) + t(225, 498, 'e.g. sound, push-pull wave on a slinky', { size: 16, fill: C.muted });
  // coils: positions x = x0 + s + d*sin
  const L = 260, x0 = 70;
  let coils = '';
  const xs = [];
  for (let k = 0; k < 62; k++) { const s = k * 12.6; const x = x0 + s - 22 * Math.sin((2 * Math.PI * s) / L); if (x < 840) xs.push(x); }
  xs.forEach((x) => (coils += ln(x, 560, x, 680, { color: C.ink, w: 3 })));
  b += coils;
  // compressions where density highest: derivative of x wrt s minimal at s = 0, L, 2L
  [0, 1, 2].forEach((k) => { const xc = x0 + k * L; if (xc > 60) b += t(xc, 708, 'C', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }); });
  [0, 1, 2].forEach((k) => { const xr = x0 + L / 2 + k * L; if (xr < 840) b += t(xr, 708, 'R', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }); });
  b += dbl(405, 540, 495, 540, C.rust, 'ahR', 4) + t(510, 546, 'oscillation: backwards and forwards', { size: 16, weight: 700, fill: C.rust });
  b += arrow(560, 760, 820, 760, { color: C.tealDark, marker: 'ahT', w: 5 }) + t(550, 766, 'wave travels (energy transfer)', { size: 16, weight: 700, fill: C.tealDark, anchor: 'end' });
  b += t(60, 740, 'C = compression (close together)', { size: 16, weight: 600, fill: C.tealDark }) + t(60, 764, 'R = rarefaction (spread out)', { size: 16, weight: 600, fill: C.olive });
  b += panel(30, 810, 840, 80, C.cream, C.olive);
  b += t(450, 843, 'Transverse: oscillation at right angles to the direction of travel.', { size: 17, weight: 700, anchor: 'middle' });
  b += t(450, 870, 'Longitudinal: oscillation along (parallel to) the direction of travel.', { size: 17, weight: 700, anchor: 'middle' });
  add('01-transverse-longitudinal',
    svg(900, 910, 'Transverse and longitudinal waves', b),
    'A transverse wave with crests and troughs whose points oscillate up and down, at right angles to the direction of travel. A longitudinal wave on a slinky with compressions (C) and rarefactions (R) whose coils oscillate backwards and forwards, along the direction of travel.',
    'Compare the direction of oscillation with the direction the wave travels.',
    '## Transverse and longitudinal waves (3.2)');
}

// 02 Definitions: amplitude, wavelength, wavefronts
{
  let b = panel(30, 110, 840, 360);
  const y0 = 300, L = 320, A = 90, x0 = 80;
  b += ln(60, y0, 750, y0, { color: C.muted, w: 2, dash: '7 6' }) + t(380, y0 - 8, 'rest position', { size: 15, fill: C.muted }).replace('x="380"', 'x="590"');
  b += sine(x0, x0 + 2 * L, y0, L, A);
  const c1 = x0 + L / 4, c2 = c1 + L, tr = x0 + (3 * L) / 4;
  b += dbl(c1, y0 - A - 34, c2, y0 - A - 34, C.tealDark, 'ahT', 3) + ln(c1, y0 - A - 44, c1, y0 - A, { color: C.tealDark, w: 1.5, dash: '4 4' }) + ln(c2, y0 - A - 44, c2, y0 - A, { color: C.tealDark, w: 1.5, dash: '4 4' });
  b += t((c1 + c2) / 2, y0 - A - 44, 'wavelength λ: crest to next crest', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += dbl(c1, y0 - 4, c1, y0 - A + 4, C.rust, 'ahR', 3) + t(c1, y0 + 28, 'amplitude', { size: 17, weight: 700, fill: C.rust, anchor: 'middle' });
  b += t(c1, y0 + 48, '(rest to crest)', { size: 15, fill: C.rust, anchor: 'middle' });
  b += ln(c2, y0 - A, 790, y0 - A, { color: C.muted, w: 1.5, dash: '4 4' }) + ln(tr + L, y0 + A, 790, y0 + A, { color: C.muted, w: 1.5, dash: '4 4' }) + dbl(775, y0 - A + 3, 775, y0 + A - 3, C.muted, 'ah', 2);
  b += tl(790, y0 - 20, ['crest to', 'trough', '= 2 × A'], { size: 15, fill: C.muted }, 19);
  b += t(60, 450, 'Frequency f: waves passing a point each second (Hz).   Period T: time for one wave (s).', { size: 16, weight: 600 });
  // longitudinal wavelength
  b += panel(30, 490, 840, 190);
  b += t(60, 526, 'Longitudinal wave: centre of one compression to the centre of the next', { size: 18, weight: 700 });
  const Lx = 300, lx0 = 120; let xs = [];
  for (let k = 0; k < 60; k++) { const s = k * 12; const x = lx0 + s - 24 * Math.sin((2 * Math.PI * s) / Lx); if (x < 840 && x > 50) xs.push(x); }
  xs.forEach((x) => (b += ln(x, 560, x, 630, { w: 3 })));
  b += dbl(lx0 + Lx, 650, lx0 + 2 * Lx, 650, C.tealDark, 'ahT', 3) + t(lx0 + 1.5 * Lx, 672, 'λ', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' });
  // wavefronts (plan view)
  b += panel(30, 700, 840, 230);
  b += t(60, 736, 'Wavefronts (seen from above)', { size: 18, weight: 700 });
  b += box(60, 752, 780, 160, C.tealLight, C.tealLight, 8, 0);
  [0, 1, 2, 3].forEach((k) => { const x = 120 + k * 120; b += ln(x, 760, x, 904, { color: C.blue, w: 5 }); });
  b += dbl(240, 832, 360, 832, C.tealDark, 'ahT', 3) + t(300, 822, 'λ', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += arrow(560, 880, 680, 880, { w: 4 }) + t(695, 886, 'direction of travel', { size: 15, weight: 600 });
  b += tl(560, 790, ['each line joins points at the', 'same point in their cycle', '(here, along a crest)'], { size: 16, fill: C.ink }, 22);
  add('02-wave-definitions',
    svg(900, 950, 'Amplitude, wavelength and wavefronts', b),
    'A transverse wave: wavelength is from one crest to the next; amplitude is from the rest position to a crest, while crest to trough is twice the amplitude. For a longitudinal wave the wavelength is from the centre of one compression to the centre of the next. Wavefronts seen from above are lines along the crests, one wavelength apart.',
    'Amplitude is measured from the rest position; wavelength is a distance along the wave.',
    '## Definitions (3.3)');
}

// 03 Energy, not matter: cork on a pond
{
  let b = panel(30, 110, 840, 470);
  const L = 300, A = 45, x0 = 60, xc = 450;
  const snaps = [0, 1, 2];
  snaps.forEach((k) => {
    const y0 = 210 + k * 130, ph = -k * (Math.PI / 2);
    b += t(60, y0 - 56, ['moment 1', 'a moment later', 'later still'][k], { size: 15, fill: C.muted, weight: 600 });
      b += sine(x0, 840, y0, L, A, { phase: ph, stroke: C.blue, w: 3.5 });
    const yc = y0 - A * Math.sin((2 * Math.PI * (xc - x0)) / L + ph);
    b += `<ellipse cx="${xc}" cy="${yc - 8}" rx="16" ry="10" fill="${C.olive}" stroke="${C.ink}" stroke-width="2.5"/>`;
  });
  b += ln(xc, 140, xc, 520, { color: C.rust, w: 2, dash: '6 6' });
  b += t(xc + 12, 540, 'the cork stays at the same place: it only bobs up and down', { size: 16, weight: 700, fill: C.rust, anchor: 'middle' }).replace(`x="${xc + 12}"`, `x="${xc}"`);
  b += arrow(640, 150, 820, 150, { color: C.tealDark, marker: 'ahT', w: 5 }) + t(630, 156, 'ripples move on', { size: 16, weight: 700, fill: C.tealDark, anchor: 'end' });
  b += panel(30, 600, 410, 150, C.tealLight, C.tealDark) + t(60, 638, 'What travels', { size: 19, weight: 700, fill: C.tealDark });
  b += tl(60, 670, ['energy: the cork gains kinetic energy', 'information: speech, music, radio', 'and TV signals, data in optical fibres'], { size: 16 }, 23);
  b += panel(460, 600, 410, 150, '#fbeee6', C.rust) + t(490, 638, 'What does not travel', { size: 19, weight: 700, fill: C.rust });
  b += tl(490, 670, ['matter: water particles and air', 'molecules oscillate about fixed', 'positions and stay where they are'], { size: 16 }, 23);
  add('03-energy-not-matter',
    svg(900, 770, 'Waves carry energy, not matter', b),
    'Three snapshots of ripples moving to the right past a floating cork. The wave shape moves on, but the cork stays on the same vertical line and only bobs up and down. Waves transfer energy and information; the water and air particles oscillate about fixed positions.',
    'The wave moves on; the cork, like the water, just bobs about one place.',
    '## Energy and information, not matter (3.4)');
}

// 04 Wave equations + ripple tank example
{
  let b = panel(30, 110, 840, 270);
  b += box(60, 140, 360, 90, C.cream, C.olive, 12) + t(240, 178, 'v = f × λ', { size: 30, weight: 700, anchor: 'middle' }) + t(240, 210, 'm/s = Hz × m', { size: 16, anchor: 'middle', fill: C.muted });
  b += box(480, 140, 360, 90, C.cream, C.olive, 12) + t(660, 178, 'f = 1 / T', { size: 30, weight: 700, anchor: 'middle' }) + t(660, 210, 'Hz = 1 / s', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(450, 270, 'In one period T the wave moves forward one wavelength λ:', { size: 17, anchor: 'middle' });
  b += t(450, 304, 'speed = distance ÷ time = λ ÷ T = f × λ', { size: 19, weight: 700, anchor: 'middle' });
  b += t(450, 350, 'sound in air ≈ 340 m/s   ·   EM waves in free space 3.0 × 10⁸ m/s   ·   ripples: cm/s', { size: 15, anchor: 'middle', fill: C.muted });
  // ripple tank: wavefronts with ruler
  b += panel(30, 400, 840, 470);
  b += t(60, 436, 'Worked example 1: a ripple tank', { size: 20, weight: 700 });
  b += box(60, 456, 520, 170, C.tealLight, C.tealDark, 8, 2);
  b += box(66, 480, 22, 120, C.rock, C.ink, 4, 2) + t(77, 640, 'dipper', { size: 15, weight: 600, anchor: 'middle' });
  const s = 75; // px per wavelength
  for (let k = 0; k < 7; k++) { const x = 120 + k * s; b += ln(x, 462, x, 620, { color: C.blue, w: 4 }); }
  b += dbl(120, 690, 120 + 5 * s, 690, C.tealDark, 'ahT', 3) + ln(120, 640, 120, 700, { color: C.tealDark, w: 1.5, dash: '4 4' }) + ln(120 + 5 * s, 640, 120 + 5 * s, 700, { color: C.tealDark, w: 1.5, dash: '4 4' });
  b += t(120 + 2.5 * s, 680, '5 wavelengths = 7.5 cm', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += t(320, 730, '12 waves made in 4.0 s', { size: 17, weight: 700, anchor: 'middle' });
  b += box(600, 456, 250, 300, C.cream, C.olive, 12);
  b += tl(618, 492, ['f = 12 / 4.0 = 3.0 Hz', 'λ = 7.5 / 5 = 1.5 cm', '   = 0.015 m', 'v = 3.0 × 0.015', '   = 0.045 m/s', 'T = 1 / 3.0 = 0.33 s'], { size: 18 }, 32);
  b += t(618, 700, 'Measure across several', { size: 15, fill: C.muted }) + t(618, 720, 'wavelengths, then divide.', { size: 15, fill: C.muted });
  b += box(60, 770, 790, 80, C.panel, C.ink, 12);
  b += t(85, 803, 'Worked example 2: tuning fork, 256 Hz, sound at 340 m/s', { size: 17, weight: 700 });
  b += t(85, 833, 'λ = v / f = 340 / 256 = 1.33 m ≈ 1.3 m', { size: 18 });
  add('04-wave-equations',
    svg(900, 890, 'The wave equations', b),
    'v = f × λ and f = 1 / T, since a wave moves one wavelength in one period. In a ripple tank, 12 waves in 4.0 s gives f = 3.0 Hz; 5 wavelengths across 7.5 cm gives λ = 0.015 m; so v = 0.045 m/s and T = 0.33 s. A 256 Hz tuning fork in air at 340 m/s gives λ = 1.33 m.',
    'Find f and λ from what you measure, convert to m, then v = f × λ.',
    '## The wave equations (3.5–3.7)');
}

// 05 Reflection and refraction of water waves
{
  let b = panel(30, 110, 410, 470);
  b += t(235, 148, 'Reflection', { size: 21, weight: 700, anchor: 'middle' });
  b += box(380, 170, 30, 340, C.rock, C.ink, 2, 2.5) + t(395, 540, 'wall', { size: 15, weight: 600, anchor: 'middle' });
  const H = [380, 395], din = [0.766, -0.643], dout = [-0.766, -0.643];
  const wf = (P, d, dash) => ln(P[0] - d[1] * 38, P[1] + d[0] * 38, P[0] + d[1] * 38, P[1] - d[0] * 38, { color: C.blue, w: 4, dash });
  for (let k = 1; k <= 3; k++) { b += wf([H[0] - din[0] * (k * 55), H[1] - din[1] * (k * 55)], din, ''); b += wf([H[0] + dout[0] * (k * 55), H[1] + dout[1] * (k * 55)], dout, '9 6'); }
  b += arrow(H[0] - din[0] * 230, H[1] - din[1] * 230, H[0] - 3, H[1], { color: C.tealDark, marker: 'ahT', w: 4 });
  b += arrow(H[0] - 3, H[1], H[0] + dout[0] * 230, H[1] + dout[1] * 230, { color: C.rust, marker: 'ahR', w: 4 });
  b += ln(H[0], H[1], H[0] - 150, H[1], { w: 2, dash: '6 5' }) + t(H[0] - 155, H[1] + 6, 'normal', { size: 15, anchor: 'end', fill: C.muted });
  b += t(150, 555, 'incoming', { size: 15, weight: 700, fill: C.tealDark }) + t(150, 225, 'reflected', { size: 15, weight: 700, fill: C.rust });
  b += t(235, 172, 'e.g. an echo off a cliff', { size: 15, anchor: 'middle', fill: C.muted });
  // refraction
  b += panel(460, 110, 410, 470);
  b += t(665, 148, 'Refraction', { size: 21, weight: 700, anchor: 'middle' });
  const bx = 480, by = 170, bw = 370, bh = 340, yb = by + 160; // boundary horizontal at yb; deep above, shallow below
  b += `<rect x="${bx}" y="${by}" width="${bw}" height="${yb - by}" fill="${C.teal}"/>` + `<rect x="${bx}" y="${yb}" width="${bw}" height="${by + bh - yb}" fill="${C.tealLight}"/>`;
  b += ln(bx, yb, bx + bw, yb, { w: 3 });
  // waves travel downward at angle; wavefronts in deep tilted, in shallow less tilted and closer
  const clip = `<clipPath id="cpD"><rect x="${bx}" y="${by}" width="${bw}" height="${yb - by}"/></clipPath><clipPath id="cpS"><rect x="${bx}" y="${yb}" width="${bw}" height="${by + bh - yb}"/></clipPath>`;
  b += clip;
  const th1 = 40 * Math.PI / 180; // angle of travel from normal in deep
  const s1 = Math.sin(th1), s2 = s1 * (0.20 / 0.30), th2 = Math.asin(s2);
  const L1 = 60, L2 = L1 * (0.20 / 0.30);
  // travel direction in deep: (sin th1, cos th1) (down-right). Wavefronts perpendicular.
  // Wavefront k in deep: points P with (P - O)·d1 = -k*L1, where O on boundary at x0
  const O = [bx + 200, yb];
  let deep = '', shal = '';
  for (let k = 0; k < 8; k++) {
    const d1 = [Math.sin(th1), Math.cos(th1)], p1 = [-d1[1], d1[0]];
    const c = [O[0] - d1[0] * k * L1, O[1] - d1[1] * k * L1];
    deep += ln(c[0] - p1[0] * 500, c[1] - p1[1] * 500, c[0] + p1[0] * 500, c[1] + p1[1] * 500, { color: C.blue, w: 3.5 });
    const d2 = [Math.sin(th2), Math.cos(th2)], p2 = [-d2[1], d2[0]];
    const c2 = [O[0] + d2[0] * k * L2, O[1] + d2[1] * k * L2];
    shal += ln(c2[0] - p2[0] * 500, c2[1] - p2[1] * 500, c2[0] + p2[0] * 500, c2[1] + p2[1] * 500, { color: C.blue, w: 3.5 });
  }
  b += `<g clip-path="url(#cpD)">${deep}</g><g clip-path="url(#cpS)">${shal}</g>`;
  // direction arrows (rays)
  const rx = O[0] - 100;
  b += arrow(rx - Math.sin(th1) * 110, yb - Math.cos(th1) * 110 - 5, rx, yb - 5, { color: C.rust, marker: 'ahR', w: 4 });
  b += arrow(rx, yb + 5, rx + Math.sin(th2) * 110, yb + 5 + Math.cos(th2) * 110, { color: C.rust, marker: 'ahR', w: 4 });
  b += ln(rx, yb - 120, rx, yb + 130, { color: C.ink, w: 2, dash: '6 5' });
  b += box(bx + bw - 120, by + 8, 112, 26, C.panel, C.ink, 6, 1.5) + t(bx + bw - 64, by + 27, 'deep: faster', { size: 15, weight: 700, anchor: 'middle' }) + box(bx + bw - 140, by + bh - 34, 132, 26, C.panel, C.ink, 6, 1.5) + t(bx + bw - 74, by + bh - 15, 'shallow: slower', { size: 15, weight: 700, anchor: 'middle' });
  b += t(665, 565, 'Waves change speed and direction', { size: 15, anchor: 'middle', fill: C.muted });
  // worked example 3
  b += panel(30, 600, 840, 175, C.cream, C.olive);
  b += t(60, 638, 'Worked example 3: frequency stays 5.0 Hz in both', { size: 19, weight: 700 });
  b += tl(60, 676, ['deep:     v = 0.30 m/s', 'λ = 0.30 / 5.0 = 0.060 m'], { size: 18 }, 30);
  b += tl(470, 676, ['shallow:  v = 0.20 m/s', 'λ = 0.20 / 5.0 = 0.040 m'], { size: 18 }, 30);
  b += t(450, 752, 'Slower, so shorter wavelength (v = f × λ). The frequency does not change.', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  add('05-reflection-refraction',
    svg(900, 795, 'All waves reflect and refract', b),
    'Left: plane water waves hit a wall and are reflected back. Right: water waves cross from deep to shallow water at an angle; in shallow water they are slower, the wavefronts are closer together and they change direction towards the normal. Worked example: at 5.0 Hz, 0.30 m/s gives λ = 0.060 m and 0.20 m/s gives λ = 0.040 m.',
    'In refraction speed and wavelength change; frequency stays the same.',
    '## Reflection and refraction (3.9)');
}

// 06 Doppler effect
{
  let b = panel(30, 110, 840, 500);
  const cy = 330, vs = 22, gap = 38; // source moved vs px per emission; wave radius grows gap per emission
  const n = 5, xNow = 520;
  for (let k = 1; k <= n; k++) {
    const xe = xNow - k * vs, r = k * gap;
    b += circ(xe, cy, r, 'none', C.blue, 3);
  }
  for (let k = 1; k <= n; k++) b += circ(xNow - k * vs, cy, 3.5, C.muted, 'none', 0);
  b += circ(xNow, cy, 16, C.mustard, C.ink, 3) + arrow(xNow + 18, cy, xNow + 80, cy, { w: 4 }).replace(`x2="${xNow + 80}"`, `x2="${xNow + 70}"`);
  
  // observers
  b += circ(780, cy, 15, C.tealLight, C.tealDark, 3) + t(780, cy + 6, 'A', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += circ(120, cy, 15, C.cream, C.olive, 3) + t(120, cy + 6, 'B', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += tl(845, 480, ['Observer A (ahead)', 'wavefronts squashed:', 'shorter wavelength', 'higher frequency'], { size: 16, weight: 600, fill: C.tealDark, anchor: 'end' }, 21);
  b += tl(55, 480, ['Observer B (behind)', 'wavefronts spread out:', 'longer wavelength', 'lower frequency'], { size: 16, weight: 600, fill: C.olive }, 21);
  b += t(450, 592, 'Source (gold) moving right. Each circle was emitted from where it was then (grey dots).', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 630, 840, 140, C.cream, C.olive);
  b += tl(60, 668, ['The source emits the same frequency throughout. Only the observed', 'frequency and wavelength change, and only while there is relative motion.', 'Examples: a passing siren’s pitch falls; light from receding galaxies is red-shifted.'], { size: 17 }, 28);
  add('06-doppler-effect',
    svg(900, 790, 'The Doppler effect', b),
    'A source moving to the right emits circular wavefronts, each centred where the source was when it was emitted. Ahead, observer A receives squashed wavefronts: shorter wavelength, higher frequency. Behind, observer B receives spread-out wavefronts: longer wavelength, lower frequency. The source frequency itself does not change.',
    'Bunched wavefronts ahead mean shorter wavelength and higher observed frequency.',
    '## The Doppler effect (3.8)');
}
