import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-units-solids-liquids-and-gases';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
// isometric cuboid: front-bottom-left at (x,y), width w, height h, depth d (drawn up-right)
const cuboid = (x, y, w, h, d, fill = C.tealLight) => {
  const dx = d * 0.6, dy = -d * 0.45;
  return `<path d="M${x},${y} h${w} v${-h} h${-w} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<path d="M${x},${y - h} l${dx},${dy} h${w} l${-dx},${-dy} Z" fill="#eef4f3" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<path d="M${x + w},${y} l${dx},${dy} v${-h} l${-dx},${-dy} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
};

// 01 Squared and cubed conversions
{
  let b = panel(30, 110, 410, 420) + t(235, 148, 'Area: the factor is squared', { size: 19, weight: 700, anchor: 'middle' });
  const gx = 95, gy = 175, G = 280;
  b += box(gx, gy, G, G, C.tealLight, C.ink, 0, 3);
  for (let k = 1; k < 10; k++) b += ln(gx + (k * G) / 10, gy, gx + (k * G) / 10, gy + G, { color: C.tealDark, w: 1 }) + ln(gx, gy + (k * G) / 10, gx + G, gy + (k * G) / 10, { color: C.tealDark, w: 1 });
  b += t(gx + G / 2, gy + G + 26, '1 m = 100 cm', { size: 16, weight: 700, anchor: 'middle' });
  b += t(235, 508, '1 m² = 100 × 100 = 10 000 cm²', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += panel(460, 110, 410, 420) + t(665, 148, 'Volume: the factor is cubed', { size: 19, weight: 700, anchor: 'middle' });
  b += cuboid(540, 440, 200, 200, 200, C.cream);
  b += t(640, 466, '1 m = 100 cm each way', { size: 16, weight: 700, anchor: 'middle' });
  b += t(665, 508, '1 m³ = 100³ = 1 000 000 cm³', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  b += t(235, 172, 'grid lines drawn every 10 cm', { size: 15, anchor: 'middle', fill: C.muted }).replace('y="172"', 'y="170"');
  const rows = [['45 cm', '÷ 100', '0.45 m'], ['25 cm²', '÷ 10 000', '0.0025 m²'], ['0.10 mm²', '÷ 1 000 000', '1.0 × 10⁻⁷ m²'], ['40 cm³', '÷ 1 000 000', '4.0 × 10⁻⁵ m³']];
  b += panel(30, 550, 840, 250);
  rows.forEach(([a, f, c], i) => {
    const y = 572 + i * 54;
    b += box(60, y, 160, 42, C.panel, C.tealDark, 8, 2) + t(140, y + 28, a, { size: 18, weight: 700, anchor: 'middle' });
    b += arrow(230, y + 21, 520, y + 21, { w: 3 }) + t(375, y + 14, f, { size: 17, weight: 700, anchor: 'middle', fill: C.blue });
    b += t(540, y + 28, c, { size: 19, weight: 700 });
  });
  b += t(840, 790, 'mm² to m²: ÷ 1000²', { size: 15, anchor: 'end', fill: C.muted });
  add('01-squared-cubed',
    svg(900, 820, 'Squared and cubed conversions', b),
    'A 1 m square is 100 cm by 100 cm, so 1 m² = 10 000 cm²; a 1 m cube is 100 cm each way, so 1 m³ = 1 000 000 cm³. Examples: 45 cm = 0.45 m, 25 cm² = 0.0025 m², 0.10 mm² = 1.0 × 10⁻⁷ m² and 40 cm³ = 4.0 × 10⁻⁵ m³.',
    'Square the factor for areas and cube it for volumes.',
    '## Squared and cubed conversions');
}

// 02 g/cm3 to kg/m3
{
  let b = panel(30, 110, 840, 300);
  b += t(450, 150, 'Why g/cm³ × 1000 = kg/m³', { size: 21, weight: 700, anchor: 'middle' });
  b += box(70, 190, 330, 90, C.cream, C.olive, 12) + t(235, 228, 'mass: g → kg', { size: 19, weight: 700, anchor: 'middle' }) + t(235, 260, 'number ÷ 1000', { size: 18, anchor: 'middle', fill: C.rust, weight: 700 });
  b += box(500, 190, 330, 90, C.tealLight, C.tealDark, 12) + t(665, 228, 'volume: cm³ → m³', { size: 19, weight: 700, anchor: 'middle' }) + t(665, 260, 'number ÷ 1 000 000', { size: 18, anchor: 'middle', fill: C.rust, weight: 700 });
  b += t(450, 330, 'density = mass ÷ volume: dividing by a million beats dividing by a thousand,', { size: 17, anchor: 'middle' });
  b += t(450, 360, 'so the density number gets 1000 times bigger.', { size: 17, anchor: 'middle', weight: 700, fill: C.tealDark });
  b += panel(30, 430, 840, 150, C.cream, C.olive);
  b += t(250, 480, '2.7 g/cm³', { size: 28, weight: 700, anchor: 'middle' }) + arrow(370, 470, 520, 470, { w: 4 }) + t(445, 458, '× 1000', { size: 18, weight: 700, anchor: 'middle', fill: C.blue }) + t(670, 480, '2700 kg/m³', { size: 28, weight: 700, anchor: 'middle' });
  b += t(450, 545, 'Sense check: water is 1.0 g/cm³ = 1000 kg/m³.', { size: 18, anchor: 'middle', fill: C.olive, weight: 600 });
  add('02-density-conversion',
    svg(900, 600, 'Density: g/cm³ to kg/m³', b),
    'Converting density: the mass number is divided by 1000 (g to kg) but the volume number by 1 000 000 (cm³ to m³), so the density number gets 1000 times bigger. 2.7 g/cm³ = 2700 kg/m³, and water is 1.0 g/cm³ = 1000 kg/m³.',
    'Multiply g/cm³ by 1000 to get kg/m³.',
    '## Squared and cubed conversions');
}

// 03 The pascal
{
  let b = panel(30, 110, 840, 260);
  b += cuboid(110, 330, 200, 30, 180, C.tealLight);
  b += arrow(210, 160, 210, 270, { color: C.rust, marker: 'ahR', w: 6 }) + t(228, 196, '1 N', { size: 20, weight: 700, fill: C.rust });
  b += t(230, 360, 'spread over 1 m²', { size: 16, weight: 700, anchor: 'middle' });
  b += box(450, 170, 390, 150, C.cream, C.olive, 12);
  b += t(645, 222, 'p = F / A', { size: 26, weight: 700, anchor: 'middle' });
  b += t(645, 268, '1 Pa = 1 N/m²', { size: 26, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(645, 302, '1 kPa = 1000 Pa', { size: 18, anchor: 'middle' });
  b += panel(30, 390, 840, 170);
  b += t(60, 428, 'Unit check for pressure in a liquid', { size: 19, weight: 700 });
  b += t(60, 476, 'p = h × ρ × g', { size: 24, weight: 700 });
  b += t(330, 476, 'm × kg/m³ × N/kg = N/m² = Pa', { size: 22, weight: 600, fill: C.blue });
  b += t(60, 530, 'Depth in m, density in kg/m³, g in N/kg: the answer must come out in pascals.', { size: 17, fill: C.muted });
  b += panel(30, 580, 840, 160, C.tealLight, C.tealDark);
  b += t(60, 618, 'Specific heat capacity (P)', { size: 19, weight: 700 });
  b += t(60, 662, 'c = ΔQ / (m × ΔT)', { size: 22, weight: 700 }) + t(400, 662, 'J / (kg × °C) = J/kg °C', { size: 22, weight: 600, fill: C.blue });
  b += t(60, 710, 'Water: 4200 J/kg °C means 4200 J raises 1 kg of water by 1 °C.', { size: 17 });
  add('03-pascal-and-c',
    svg(900, 760, 'Building the pascal and J/kg °C', b),
    'A force of 1 N spread over 1 m² is a pressure of 1 pascal: 1 Pa = 1 N/m², and 1 kPa = 1000 Pa. For p = h × ρ × g, m × kg/m³ × N/kg = N/m² = Pa. For specific heat capacity, c = ΔQ / (m × ΔT) gives J/kg °C; water\'s 4200 J/kg °C means 4200 J raises 1 kg by 1 °C.',
    'A pascal is one newton per square metre.',
    '## The pascal and how it is built');
}

// 04 Celsius and kelvin
{
  let b = panel(30, 110, 840, 500);
  const top = 160, bot = 540, Tmin = -273, Tmax = 100, Y = (c) => bot - ((c - Tmin) / (Tmax - Tmin)) * (bot - top);
  const xc = 250, xk = 520;
  // thermometer-like bars
  b += box(xc - 18, top - 10, 36, bot - top + 20, '#f4f4f4', C.ink, 18, 2.5) + box(xk - 18, top - 10, 36, bot - top + 20, '#f4f4f4', C.ink, 18, 2.5);
  b += t(xc, 145, '°C', { size: 22, weight: 700, anchor: 'middle' }).replace('y="145"', 'y="140"') + t(xk, 140, 'K', { size: 22, weight: 700, anchor: 'middle' });
  const marks = [[-273, 'absolute zero'], [0, 'ice melts'], [100, 'water boils']];
  marks.forEach(([c, lab]) => {
    const y = Y(c);
    b += ln(xc - 30, y, xk + 30, y, { color: C.muted, w: 1.5, dash: '5 5' });
    b += t(xc - 34, y + 6, `${c < 0 ? '−' + -c : c} °C`, { size: 18, weight: 700, anchor: 'end' });
    b += t(xk + 34, y + 6, `${c + 273} K`, { size: 18, weight: 700 });
    b += t(xk + 120, y + 6, lab, { size: 15, fill: C.muted });
  });
  b += box(600, 330, 250, 200, C.cream, C.olive, 12);
  b += tl(618, 366, ['T (K) = θ (°C) + 273', 'θ (°C) = T (K) − 273'], { size: 18, weight: 700 }, 30);
  b += tl(618, 440, ['1 K is the same size', 'as 1 °C: a rise of 30 °C', 'is a rise of 30 K.'], { size: 16 }, 22);
  b += t(450, 590, 'Unit symbol K, with no degree sign. Gas laws need kelvin.', { size: 16, anchor: 'middle', fill: C.muted });
  add('04-celsius-kelvin',
    svg(900, 630, 'Celsius and kelvin', b),
    'Two side-by-side scales: absolute zero is −273 °C or 0 K, 0 °C is 273 K and 100 °C is 373 K. T in K = θ in °C + 273. One kelvin is the same size as one degree Celsius, so a 30 °C rise is a 30 K rise. Gas laws need kelvin.',
    'Add 273 to go from °C to K; temperature changes are the same on both scales.',
    '## Celsius and kelvin');
}

// 05 Density worked example
{
  let b = panel(30, 110, 840, 330);
  b += cuboid(110, 380, 250, 100, 160, C.rock);
  b += t(235, 410, '5.0 cm', { size: 17, weight: 700, anchor: 'middle' });
  b += t(90, 335, '2.0 cm', { size: 17, weight: 700, anchor: 'end' });
  b += t(420, 300, '4.0 cm', { size: 17, weight: 700 });
  b += t(235, 172, 'mass 108 g', { size: 20, weight: 700, anchor: 'middle' }).replace('x="235"', 'x="250"');
  b += box(480, 150, 360, 270, C.cream, C.olive, 12);
  b += tl(500, 190, ['V = 5.0 × 4.0 × 2.0 = 40 cm³', '   = 40 × 10⁻⁶ m³', '   = 4.0 × 10⁻⁵ m³', 'm = 108 g = 0.108 kg', 'ρ = 0.108 / 4.0 × 10⁻⁵'], { size: 18 }, 34);
  b += box(500, 360, 320, 46, C.tealLight, C.tealDark, 10) + t(660, 391, 'ρ = 2700 kg/m³', { size: 21, weight: 700, anchor: 'middle' });
  b += panel(30, 460, 840, 90, C.tealLight, C.tealDark) + t(450, 502, 'Shortcut check: 108 ÷ 40 = 2.7 g/cm³, then × 1000 = 2700 kg/m³', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 532, '(a solid in kg/m³ is usually in the thousands)', { size: 15, anchor: 'middle', fill: C.muted });
  add('05-density-example',
    svg(900, 570, 'Worked example: density from centimetres', b),
    'A metal block 5.0 cm × 4.0 cm × 2.0 cm with mass 108 g. V = 40 cm³ = 4.0 × 10⁻⁵ m³ and m = 0.108 kg, so ρ = 0.108 / 4.0 × 10⁻⁵ = 2700 kg/m³. Check: 108 ÷ 40 = 2.7 g/cm³ = 2700 kg/m³.',
    'Convert cm³ to m³ and g to kg, or use g/cm³ and multiply by 1000.',
    '## Worked examples');
}

// 06 Drawing pin pressure
{
  let b = panel(30, 110, 840, 290);
  // pin drawn horizontally: head at left, point at right
  b += `<rect x="120" y="170" width="26" height="150" rx="8" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<path d="M146,236 L560,236 L600,245 L560,254 L146,254 Z" fill="#c9d3e3" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += arrow(40 + 20, 245, 112, 245, { color: C.rust, marker: 'ahR', w: 6 }).replace('x1="60"', 'x1="50"') + t(50, 225, '20 N', { size: 18, weight: 700, fill: C.rust });
  b += `<rect x="610" y="150" width="40" height="190" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>` + t(630, 365, 'board', { size: 15, weight: 600, anchor: 'middle' });
  b += t(133, 160, 'head 1.0 cm²', { size: 16, weight: 700, anchor: 'middle' }).replace('y="160"', 'y="158"');
  b += t(600, 222, 'point 0.10 mm²', { size: 16, weight: 700, anchor: 'end' }).replace('y="222"', 'y="215"');
  b += tl(680, 220, ['Same force on', 'both ends'], { size: 16, fill: C.muted }, 21);
  b += panel(30, 420, 410, 240, C.panel, C.tealDark) + t(60, 458, 'Head (on thumb)', { size: 19, weight: 700, fill: C.tealDark });
  b += tl(60, 496, ['A = 1.0 cm² = 1.0 × 10⁻⁴ m²', 'p = 20 / 1.0 × 10⁻⁴'], { size: 18 }, 32) + t(60, 600, 'p = 2.0 × 10⁵ Pa', { size: 24, weight: 700 });
  b += panel(460, 420, 410, 240, '#fbeee6', C.rust) + t(490, 458, 'Point (on board)', { size: 19, weight: 700, fill: C.rust });
  b += tl(490, 496, ['A = 0.10 mm² = 1.0 × 10⁻⁷ m²', 'p = 20 / 1.0 × 10⁻⁷'], { size: 18 }, 32) + t(490, 600, 'p = 2.0 × 10⁸ Pa', { size: 24, weight: 700 });
  b += t(450, 690, 'A thousand times greater pressure at the point: it pierces the board, not your thumb.', { size: 17, anchor: 'middle', weight: 600 });
  add('06-drawing-pin',
    svg(900, 715, 'Worked example: pressure on a tiny area', b),
    'A thumb pushes a drawing pin with 20 N. On the 1.0 cm² head, 1.0 × 10⁻⁴ m², the pressure is 2.0 × 10⁵ Pa. On the 0.10 mm² point, 1.0 × 10⁻⁷ m², it is 2.0 × 10⁸ Pa, a thousand times greater, so the point pierces the board.',
    'The same force on a far smaller area gives a far larger pressure.',
    '## Worked examples');
}

// 07 Gas laws: which units matter
{
  let b = panel(30, 110, 840, 250);
  b += t(60, 148, 'Constant temperature: p₁V₁ = p₂V₂', { size: 20, weight: 700 });
  b += tl(60, 190, ['100 kPa at 60 cm³, compressed to 25 cm³', '100 × 60 = p₂ × 25'], { size: 18 }, 32);
  b += box(560, 170, 280, 56, C.tealLight, C.tealDark, 10) + t(700, 206, 'p₂ = 240 kPa', { size: 21, weight: 700, anchor: 'middle' });
  b += t(60, 300, 'Volume on both sides: any unit works if both volumes match;', { size: 17, fill: C.tealDark, weight: 600 });
  b += t(60, 328, 'the answer comes out in the pressure unit you put in.', { size: 17, fill: C.tealDark, weight: 600 });
  b += panel(30, 380, 840, 330, C.cream, C.olive);
  b += t(60, 418, 'Pressure and temperature: p₁/T₁ = p₂/T₂ needs kelvin', { size: 20, weight: 700 });
  b += t(60, 452, 'Sealed gas at 150 kPa heated from 20 °C to 80 °C', { size: 17, fill: C.muted });
  b += box(60, 472, 370, 150, C.panel, C.tealDark, 12) + t(80, 506, '✓ kelvin', { size: 19, weight: 700, fill: C.tealDark });
  b += tl(80, 540, ['20 °C = 293 K,  80 °C = 353 K', '150 × 353 ÷ 293'], { size: 17 }, 28) + t(80, 606, '= 181 kPa', { size: 22, weight: 700 });
  b += box(470, 472, 370, 150, '#fbeee6', C.rust, 12) + t(490, 506, '✗ Celsius', { size: 19, weight: 700, fill: C.rust });
  b += tl(490, 540, ['150 × 80 ÷ 20'], { size: 17 }, 28) + t(490, 606, '= 600 kPa: wildly wrong', { size: 22, weight: 700, fill: C.rust });
  b += t(450, 680, 'The proportion only works from absolute zero, so T must be in kelvin.', { size: 17, anchor: 'middle', weight: 600 });
  add('07-gas-law-units',
    svg(900, 730, 'Gas laws: which units matter', b),
    'For p₁V₁ = p₂V₂, 100 kPa at 60 cm³ compressed to 25 cm³ gives p₂ = 240 kPa; any matching volume unit works. For p₁/T₁ = p₂/T₂, a sealed gas at 150 kPa heated from 20 °C (293 K) to 80 °C (353 K) reaches 150 × 353 ÷ 293 = 181 kPa; using Celsius would wrongly give 600 kPa.',
    'Volumes just need to match; temperatures in gas laws must be in kelvin.',
    '## Worked examples');
}
