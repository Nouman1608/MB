import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-units-waves';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const vtext = (x, y, s, size = 16) => `<text x="${x}" y="${y}" font-size="${size}" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x} ${y})">${s}</text>`;
const dbl = (x1, y1, x2, y2, color = C.ink, m = 'ah', w = 3) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" marker-start="url(#${m})" marker-end="url(#${m})"/>`;
const sine = (x0, x1, y0, L, A, { stroke = C.blue, w = 3.5 } = {}) => {
  const p = []; for (let x = x0; x <= x1 + 0.01; x += 2) p.push(`${x.toFixed(1)},${(y0 - A * Math.sin((2 * Math.PI * (x - x0)) / L)).toFixed(1)}`);
  return path(`M${p.join(' L')}`, { stroke, w });
};
const D = Math.PI / 180;

// 01 Five units and the unit checks
{
  const U = [['°', 'degree', 'angles of incidence, reflection, refraction; critical angle'], ['Hz', 'hertz', 'frequency'], ['m', 'metre', 'wavelength, amplitude, distance'], ['m/s', 'metre/second', 'wave speed, speed of sound and light'], ['s', 'second', 'time period, echo or travel time']];
  let b = '';
  U.forEach(([s, n, q], i) => {
    const y = 110 + i * 78;
    b += panel(30, y, 840, 68);
    b += box(48, y + 10, 92, 48, C.tealLight, C.tealDark, 8, 2) + t(94, y + 43, s, { size: 24, weight: 700, anchor: 'middle' });
    b += t(165, y + 42, n, { size: 19, weight: 700 }) + t(340, y + 42, q, { size: 17, fill: C.muted });
  });
  b += panel(30, 510, 840, 240, C.cream, C.olive);
  b += t(60, 550, 'Unit checks', { size: 20, weight: 700 });
  b += t(60, 594, 'v = f × λ', { size: 22, weight: 700 }) + t(330, 594, 'Hz × m = (1/s) × m = m/s', { size: 21, weight: 600, fill: C.blue });
  b += t(60, 640, 'f = 1 / T', { size: 22, weight: 700 }) + t(330, 640, '1 / s = Hz   (1 Hz = 1 /s = s⁻¹)', { size: 21, weight: 600, fill: C.blue });
  b += t(60, 686, 'n = sin i / sin r', { size: 22, weight: 700 }) + t(330, 686, 'a ratio of two sines: no unit', { size: 21, weight: 600, fill: C.blue });
  b += t(60, 726, 'So f must be in Hz (not kHz or MHz) and λ in m (not cm or nm) to give m/s.', { size: 16, fill: C.muted });
  add('01-five-units',
    svg(900, 770, 'The five units of Topic 3', b),
    'Five units: degree (°) for angles, hertz (Hz) for frequency, metre (m) for wavelength, amplitude and distance, metre/second (m/s) for wave speed, second (s) for time period. Unit checks: Hz × m = m/s in v = f × λ; 1/s = Hz in f = 1/T; refractive index n is a ratio of sines and has no unit.',
    'Hz × m gives m/s; refractive index has no unit.',
    '## The five units');
}

// 02 Prefixes
{
  const P = [
    ['G', 'giga', '× 10⁹', 'microwaves: 2.4 GHz = 2.4 × 10⁹ Hz', C.cream, C.olive],
    ['M', 'mega', '× 10⁶', 'radio: 98 MHz = 9.8 × 10⁷ Hz', C.cream, C.olive],
    ['k', 'kilo', '× 10³', 'sound: 2.5 kHz = 2500 Hz; distances in km', C.cream, C.olive],
    ['c', 'centi', '× 10⁻²', 'ripple tank: 1.5 cm = 0.015 m', C.tealLight, C.tealDark],
    ['m', 'milli', '× 10⁻³', 'time periods: 4.0 ms = 0.0040 s', C.tealLight, C.tealDark],
    ['μ', 'micro', '× 10⁻⁶', 'infrared: 10 μm = 1.0 × 10⁻⁵ m', C.tealLight, C.tealDark],
    ['n', 'nano', '× 10⁻⁹', 'visible light: 600 nm = 6.0 × 10⁻⁷ m', C.tealLight, C.tealDark],
  ];
  let b = '';
  P.forEach(([s, n, m, ex, f, e], i) => {
    const y = 110 + i * 80;
    b += box(30, y, 840, 70, f, e, 12);
    b += t(85, y + 47, s, { size: 28, weight: 700, anchor: 'middle' });
    b += t(140, y + 32, n, { size: 18, weight: 700 }) + t(140, y + 56, m, { size: 17, fill: C.blue, weight: 700 });
    b += t(840, y + 44, ex, { size: 17, anchor: 'end' });
  });
  b += panel(30, 680, 840, 70, '#fbeee6', C.rust) + t(450, 722, 'M (mega, a million) and m (milli, a thousandth) differ by 10⁹.', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  add('02-prefixes',
    svg(900, 770, 'Prefixes in wave questions', b),
    'A prefix ladder with wave examples: giga, 2.4 GHz = 2.4 × 10⁹ Hz; mega, 98 MHz = 9.8 × 10⁷ Hz; kilo, 2.5 kHz = 2500 Hz; centi, 1.5 cm = 0.015 m; milli, 4.0 ms = 0.0040 s; micro, 10 μm = 1.0 × 10⁻⁵ m; nano, 600 nm = 6.0 × 10⁻⁷ m. M and m differ by 10⁹.',
    'From GHz to nm: convert every prefix before using v = f × λ.',
    '## Prefixes in wave questions');
}

// 03 Standard form worked examples
{
  const card = (x, title, lines, ans) => panel(x, 110, 410, 260) + t(x + 24, 148, title, { size: 20, weight: 700 }) + tl(x + 24, 192, lines, { size: 18 }, 34) + box(x + 20, 296, 370, 54, C.tealLight, C.tealDark, 10) + t(x + 205, 331, ans, { size: 21, weight: 700, anchor: 'middle' });
  let b = card(30, 'Radio station at 100 MHz', ['f = 100 MHz = 1.00 × 10⁸ Hz', 'λ = v / f', '  = (3.0 × 10⁸) / (1.00 × 10⁸)'], 'λ = 3.0 m');
  b += card(460, 'Green light, 500 nm', ['λ = 500 nm = 5.00 × 10⁻⁷ m', 'f = v / λ', '  = (3.0 × 10⁸) / (5.00 × 10⁻⁷)'], 'f = 6.0 × 10¹⁴ Hz');
  b += panel(30, 390, 840, 200, C.cream, C.olive);
  b += t(60, 428, 'On the calculator', { size: 19, weight: 700 });
  b += t(60, 466, 'Use the ×10ˣ (EXP) key, or brackets round each number.', { size: 17 });
  b += t(60, 502, '✗ 3.0 × 10⁸ ÷ 5.00 × 10⁻⁷ typed without brackets multiplies by 10⁻⁷.', { size: 17, fill: C.rust, weight: 600 });
  b += t(60, 550, 'Size check: visible light is of order 10¹⁴ Hz, so 6.0 × 10¹⁴ Hz is sensible.', { size: 17, fill: C.tealDark, weight: 600 });
  add('03-standard-form-examples',
    svg(900, 610, 'Worked examples: standard form', b),
    'A 100 MHz radio wave: f = 1.00 × 10⁸ Hz, so λ = 3.0 × 10⁸ / 1.00 × 10⁸ = 3.0 m. Green light of 500 nm: λ = 5.00 × 10⁻⁷ m, so f = 3.0 × 10⁸ / 5.00 × 10⁻⁷ = 6.0 × 10¹⁴ Hz. Use the EXP key or brackets, and check the size of the answer.',
    'Convert prefixes to standard form, then divide with brackets or EXP.',
    '## Standard form for electromagnetic waves');
}

// 04 Period in ms: worked example 3
{
  let b = panel(30, 110, 840, 330);
  const ox = 110, oy = 280, sx = 64; // px per ms
  b += ln(ox, oy, ox + 10 * sx + 10, oy, { color: C.muted, w: 2 }) + arrow(ox, oy + 120, ox, oy - 130, { w: 2.5 });
  b += arrow(ox, oy, ox + 10 * sx + 30, oy, { w: 2.5 });
  b += sine(ox, ox + 10 * sx, oy, 2.5 * sx, 90);
  b += dbl(ox + 0.625 * sx, oy - 112, ox + 3.125 * sx, oy - 112, C.tealDark, 'ahT', 3) + ln(ox + 0.625 * sx, oy - 120, ox + 0.625 * sx, oy - 90, { color: C.tealDark, w: 1.5, dash: '4 4' }) + ln(ox + 3.125 * sx, oy - 120, ox + 3.125 * sx, oy - 90, { color: C.tealDark, w: 1.5, dash: '4 4' });
  b += t(ox + 1.875 * sx, oy - 122, 'T = 2.5 ms', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  [0, 2.5, 5, 7.5, 10].forEach((k) => (b += t(ox + k * sx, oy + 130, String(k), { size: 15, anchor: 'middle', fill: C.muted })));
  b += t(ox + 5 * sx, oy + 156, 'time / ms', { size: 16, weight: 600, anchor: 'middle' }) + vtext(ox - 28, oy, 'displacement', 15);
  [0, 2.5, 5, 7.5, 10].forEach((k) => (b += ln(ox + k * sx, oy + 100, ox + k * sx, oy + 112, { w: 2 })));
  b += ln(ox, oy + 106, ox + 10 * sx, oy + 106, { w: 2 });
  b += panel(30, 460, 840, 230, C.cream, C.olive);
  b += t(60, 498, 'Sound wave: T = 2.5 ms, v = 340 m/s', { size: 19, weight: 700 });
  b += tl(60, 538, ['T = 2.5 ms = 0.0025 s', 'f = 1 / T = 1 / 0.0025 = 400 Hz', 'λ = v / f = 340 / 400 = 0.85 m'], { size: 19 }, 36);
  b += box(530, 520, 310, 100, '#fbeee6', C.rust, 10) + tl(548, 556, ['✗ T = 2.5 directly:', 'f = 0.4 Hz, 1000 × too small'], { size: 17, weight: 600, fill: C.rust }, 28);
  add('04-period-in-ms',
    svg(900, 710, 'Worked example: a period in milliseconds', b),
    'A displacement against time trace with a time axis in ms; one complete wave takes T = 2.5 ms. Converting, T = 0.0025 s, so f = 1 / 0.0025 = 400 Hz and λ = 340 / 400 = 0.85 m. Using 2.5 directly would give 0.4 Hz, a thousand times too small.',
    'Convert ms to s before f = 1 / T.',
    '## Time units and the period');
}

// 05 Degrees: angles from the normal
{
  let b = panel(30, 110, 520, 500);
  const Ox = 290, Oy = 360;
  b += `<rect x="50" y="${Oy}" width="480" height="230" fill="${C.tealLight}"/>` + ln(50, Oy, 530, Oy, { w: 3 });
  b += t(60, Oy - 14, 'air', { size: 16, weight: 700, fill: C.muted }) + t(60, Oy + 28, 'glass', { size: 16, weight: 700, fill: C.tealDark });
  b += ln(Ox, 140, Ox, 580, { w: 2, dash: '8 6' }) + t(Ox + 8, 156, 'normal', { size: 15, weight: 700 });
  const i = 40 * D, r = 25 * D, L = 220;
  const ix = Ox - L * Math.sin(i), iy = Oy - L * Math.cos(i);
  b += arrow(ix, iy, Ox - (L * 0.45) * Math.sin(i), Oy - (L * 0.45) * Math.cos(i), { color: C.rust, marker: 'ahR', w: 4 }) + ln(Ox - (L * 0.47) * Math.sin(i), Oy - (L * 0.47) * Math.cos(i), Ox, Oy, { color: C.rust, w: 4 });
  const rx = Ox + L * Math.sin(r), ry = Oy + L * Math.cos(r);
  b += ln(Ox, Oy, Ox + (L * 0.55) * Math.sin(r), Oy + (L * 0.55) * Math.cos(r), { color: C.rust, w: 4 }) + arrow(Ox + (L * 0.5) * Math.sin(r), Oy + (L * 0.5) * Math.cos(r), rx, ry, { color: C.rust, marker: 'ahR', w: 4 });
  const arc = (R, a0, a1, up) => { const s = up ? -1 : 1; const x0 = Ox + R * Math.sin(a0) * (up ? -1 : 1), y0 = Oy + s * R * Math.cos(a0), x1 = Ox + R * Math.sin(a1) * (up ? -1 : 1), y1 = Oy + s * R * Math.cos(a1); return `<path d="M${x0},${y0} A${R},${R} 0 0 ${up ? 0 : 0} ${x1},${y1}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`; };
  b += arc(70, 0, i, true) + t(Ox - 41, Oy - 108, 'i = 40°', { size: 16, weight: 700, anchor: 'middle' });
  b += arc(80, 0, r, false) + t(Ox + 76, Oy + 116, 'r = 25°', { size: 16, weight: 700 });
  // surface angle note
  b += box(570 - 0, 110, 300, 230, C.cream, C.olive, 12);
  b += tl(590, 150, ['Measure every angle', 'from the normal, the', 'line at 90° to the', 'surface.', '', '30° from the normal', '= 60° from the surface.'], { size: 17 }, 25);
  b += box(570, 360, 300, 250, C.tealLight, C.tealDark, 12);
  b += tl(590, 398, ['n = sin i / sin r', '  = sin 40° / sin 25°', '  = 0.643 / 0.423', '  = 1.52  (no unit)'], { size: 18 }, 32);
  b += t(590, 548, 'glass: about 1.5,', { size: 16, fill: C.muted }) + t(590, 572, 'always greater than 1', { size: 16, fill: C.muted });
  b += panel(30, 630, 840, 90, '#fbeee6', C.rust);
  b += t(450, 668, 'Calculator in DEGREE mode (D or DEG on the screen).', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(450, 698, 'In radian mode sin 30 gives −0.988 instead of 0.500.', { size: 17, anchor: 'middle' });
  add('05-degrees-normal',
    svg(900, 740, 'Degrees: angles from the normal', b),
    'Light passes from air into glass. The angle of incidence, 40°, and the angle of refraction, 25°, are both measured from the dashed normal at 90° to the surface. n = sin 40° / sin 25° = 0.643 / 0.423 = 1.52, with no unit. 30° from the normal is 60° from the surface, and the calculator must be in degree mode.',
    'Angles are measured from the normal, with the calculator in degree mode.',
    '## The degree');
}

// 06 Two graphs that look alike
{
  const graph = (y, title, xl, rep, col) => {
    let o = panel(30, y, 840, 280);
    o += t(60, y + 38, title, { size: 20, weight: 700 });
    const ox = 110, oy = y + 160;
    o += arrow(ox, oy + 90, ox, oy - 100, { w: 2.5 }) + arrow(ox, oy, ox + 700, oy, { w: 2.5 });
    o += t(ox + 690, oy + 26, xl, { size: 16, weight: 600, anchor: 'end' }) + vtext(ox - 22, oy, 'displacement / m', 14);
    o += sine(ox, ox + 640, oy, 256, 70, { stroke: col });
    o += dbl(ox + 64, oy - 88, ox + 320, oy - 88, col, col === C.blue ? 'ah' : 'ahO', 3).replace(/url\(#ah\)/g, 'url(#ah)');
    o += ln(ox + 64, oy - 96, ox + 64, oy - 68, { w: 1.5, dash: '4 4' }) + ln(ox + 320, oy - 96, ox + 320, oy - 68, { w: 1.5, dash: '4 4' });
    o += t(ox + 192, oy - 96, rep, { size: 18, weight: 700, anchor: 'middle', fill: col });
    o += dbl(ox + 576, oy - 4, ox + 576, oy - 66, C.rust, 'ahR', 3) + t(ox + 588, oy - 30, 'amplitude', { size: 15, weight: 700, fill: C.rust });
    return o;
  };
  let b = graph(110, 'Displacement against distance: a snapshot', 'distance / m', 'wavelength λ (m)', C.blue);
  b += graph(410, 'Displacement against time: one point moving', 'time / s', 'time period T (s);  f = 1 / T', C.olive);
  b += t(450, 720, 'Amplitude: rest line to crest. Check the horizontal axis label: is the length λ or T?', { size: 17, anchor: 'middle', weight: 600 });
  add('06-two-wave-graphs',
    svg(900, 745, 'Same shape, different axis', b),
    'Two wave graphs with the same shape. Displacement against distance, with the axis in metres, is a snapshot: the repeat length is the wavelength. Displacement against time, with the axis in seconds, shows one point moving: the repeat length is the time period, and f = 1 / T. On both, amplitude is from the rest line to a crest.',
    'The horizontal axis unit tells you whether the repeat length is λ or T.',
    '## Reading the axes of wave graphs');
}
