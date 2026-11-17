import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-units-astrophysics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const strike = (x1, y, x2) => ln(x1, y, x2, y - 14, { color: C.rust, w: 2.5 });

// 01 The seven units
{
  const U = [
    ['kg', 'kilogram', 'mass', 'astronaut, probe, planet'],
    ['m', 'metre', 'distance, orbital radius', 'r in v = 2πr / T'],
    ['m/s', 'metre/second', 'speed, velocity', 'orbital speed, speed of light'],
    ['m/s²', 'metre/second²', 'acceleration', 'falling on another planet'],
    ['N', 'newton', 'force, including weight', 'weight on Earth or the Moon'],
    ['s', 'second', 'time, orbital period', 'T in v = 2πr / T'],
    ['N/kg', 'newton/kilogram', 'gravitational field strength g', 'comparing g on planets'],
  ];
  let b = '';
  U.forEach(([sym, name, q, where], i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 30 + col * 425, y = 110 + row * 132, w = i === 6 ? 840 : 415;
    b += panel(x, y, w, 120, i === 6 ? C.cream : C.panel, i === 6 ? C.olive : C.panelEdge);
    b += box(x + 18, y + 22, 110, 76, C.tealLight, C.tealDark, 10) + t(x + 73, y + 72, sym, { size: 28, weight: 700, anchor: 'middle' });
    b += t(x + 148, y + 48, name, { size: 19, weight: 700 }) + t(x + 148, y + 76, q, { size: 17, fill: C.tealDark, weight: 600 }) + t(x + 148, y + 100, where, { size: 15, fill: C.muted });
  });
  add('01-seven-units',
    svg(900, 650, 'The seven units of Topic 8', b),
    'Seven unit cards: kilogram (kg) for mass; metre (m) for distance and orbital radius; metre/second (m/s) for speed and velocity; metre/second² (m/s²) for acceleration; newton (N) for force including weight; second (s) for time and orbital period; newton/kilogram (N/kg) for gravitational field strength g.',
    'Each unit belongs to one quantity; learn the pairs.',
    '## What each unit measures in Topic 8');
}

// 02 Mass, weight and g
{
  const astro = (x, y) => circ(x, y - 72, 20, '#ffffff', C.ink, 3) + box(x - 24, y - 52, 48, 70, '#ffffff', C.ink, 10, 3) + ln(x - 12, y + 18, x - 12, y + 52, { w: 4 }) + ln(x + 12, y + 18, x + 12, y + 52, { w: 4 });
  const side = (x, title, g, W, len, fill) => {
    let o = panel(x, 110, 410, 420, fill === 'moon' ? '#f1f2f4' : C.panel, C.panelEdge) + t(x + 205, 148, title, { size: 22, weight: 700, anchor: 'middle' });
    o += `<rect x="${x + 20}" y="430" width="370" height="30" rx="6" fill="${fill === 'moon' ? C.rock : '#a9c48f'}"/>`;
    o += astro(x + 130, 378);
    o += arrow(x + 130, 340, x + 130, 340 + len, { color: C.rust, marker: 'ahR', w: 6 });
    o += t(x + 160, 395, `W = ${W} N`, { size: 20, weight: 700, fill: C.rust });
    o += t(x + 260, 230, `g = ${g} N/kg`, { size: 19, weight: 700, anchor: 'middle' });
    o += t(x + 260, 260, 'm = 75 kg', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
    o += t(x + 205, 510, `75 × ${g} = ${W} N`, { size: 19, anchor: 'middle' });
    return o;
  };
  let b = side(30, 'On Earth', '10', '750', 120, 'earth') + side(460, 'On the Moon', '1.6', '120', 19.2, 'moon');
  b += panel(30, 550, 840, 180, C.cream, C.olive);
  b += t(330, 592, 'W = m × g', { size: 24, weight: 700, anchor: 'middle' }) + t(590, 592, 'N = kg × N/kg', { size: 24, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += tl(60, 632, ['Mass (kg): the amount of matter, the same everywhere.', 'Weight (N): the gravitational force, which depends on where you are.', 'g in N/kg = acceleration of free fall in m/s²: the two units are equivalent.'], { size: 17 }, 32);
  add('02-mass-weight-g',
    svg(900, 750, 'Mass stays, weight changes', b),
    'A 75 kg astronaut has a weight of 75 × 10 = 750 N on Earth and 75 × 1.6 = 120 N on the Moon, with weight arrows drawn to the same scale; the mass is 75 kg in both places. W = m × g, so N = kg × N/kg, and N/kg is equivalent to m/s².',
    'Mass in kg is unchanged; weight in N depends on g.',
    '## Mass, weight and gravitational field strength');
}

// 03 Conversions into m and s
{
  let b = panel(30, 110, 840, 470);
  const row = (y, from, fac, to, col) => box(70, y, 220, 64, C.panel, col, 12) + t(180, y + 41, from, { size: 21, weight: 700, anchor: 'middle' }) +
    arrow(300, y + 32, 560, y + 32, { color: col, marker: col === C.rust ? 'ahR' : 'ahT', w: 4 }) + t(430, y + 22, fac, { size: 18, weight: 700, anchor: 'middle', fill: col }) +
    box(580, y, 250, 64, col === C.rust ? '#fbeee6' : C.tealLight, col, 12) + t(705, y + 41, to, { size: 21, weight: 700, anchor: 'middle' });
  b += t(60, 148, 'Distances into metres', { size: 19, weight: 700, fill: C.tealDark });
  b += row(165, '1 km', '× 1000 (× 10³)', '1000 m', C.tealDark);
  b += t(60, 278, 'Times into seconds', { size: 19, weight: 700, fill: C.rust });
  b += row(295, '1 h', '× 3600', '3600 s', C.rust);
  b += row(379, '1 day', '× 24 × 3600', '86 400 s', C.rust);
  b += row(463, '1 year', '× 365 × 86 400', '≈ 3.15 × 10⁷ s', C.rust);
  b += panel(30, 600, 840, 100, C.cream, C.olive);
  b += t(450, 640, 'm ÷ s gives m/s. Convert before you substitute,', { size: 19, weight: 700, anchor: 'middle' });
  b += t(450, 672, 'or km and hours give an answer in km/h.', { size: 19, weight: 700, anchor: 'middle' });
  add('03-convert-m-and-s',
    svg(900, 720, 'Convert to metres and seconds first', b),
    'Conversion arrows: 1 km × 1000 = 1000 m; 1 h × 3600 = 3600 s; 1 day × 24 × 3600 = 86 400 s; 1 year × 365 × 86 400 ≈ 3.15 × 10⁷ s. Converting before substituting into v = 2πr / T gives m/s; otherwise the answer comes out in km/h.',
    'Kilometres to metres and hours, days or years to seconds, before substituting.',
    '## Orbital speed: metres and seconds');
}

// 04 Orbital radius from the centre
{
  let b = panel(30, 110, 840, 480);
  const cx = 230, cy = 330, R = 100, h = 70;
  b += circ(cx, cy, R + h, 'none', C.muted, 2.5).replace('/>', ' stroke-dasharray="9 7"/>');
  b += circ(cx, cy, R, C.teal, C.tealDark, 3) + circ(cx, cy, 4, C.ink, C.ink, 1) + t(cx - 8, cy + 26, 'centre', { size: 15, anchor: 'middle', fill: C.ink }).replace(`x="${cx - 8}"`, `x="${cx}"`);
  b += box(cx + R + h - 12, cy - 9, 24, 18, C.panel, C.ink, 3, 2) + ln(cx + R + h - 24, cy, cx + R + h + 24, cy, { w: 2 });
  // radius split
  b += ln(cx, cy - 4, cx + R, cy - 4, { color: C.tealDark, w: 4 }) + ln(cx + R, cy - 4, cx + R + h - 14, cy - 4, { color: C.rust, w: 4 });
  b += t(cx + R / 2, cy - 16, 'planet radius', { size: 15, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += t(cx + R + h / 2 - 6, cy + 30, 'height', { size: 15, weight: 700, fill: C.rust, anchor: 'middle' });
  b += ln(cx, cy + 205, cx + R + h, cy + 205, { w: 2 }) + ln(cx, cy + 197, cx, cy + 213, { w: 2 }) + ln(cx + R + h, cy + 197, cx + R + h, cy + 213, { w: 2 }) + ln(cx, cy, cx, cy + 197, { color: C.muted, w: 1.2, dash: '3 4' }) + ln(cx + R + h, cy + 12, cx + R + h, cy + 197, { color: C.muted, w: 1.2, dash: '3 4' }) + t(cx + (R + h) / 2, cy + 235, 'orbital radius r', { size: 17, weight: 700, anchor: 'middle' });
  b += box(520, 180, 320, 300, C.cream, C.olive, 12);
  b += t(545, 225, 'r = planet radius + height', { size: 20, weight: 700 });
  b += tl(545, 270, ['r is measured from the', 'centre of the body being', 'orbited, not from its', 'surface.', '', 'Given a height above the', 'surface? Add the radius.'], { size: 17 }, 26);
  add('04-orbital-radius',
    svg(900, 610, 'Orbital radius is from the centre', b),
    'A satellite orbits a planet. The orbital radius r runs from the centre of the planet to the satellite, so it equals the planet\'s radius plus the satellite\'s height above the surface.',
    'Orbital radius = planet radius + height above the surface.',
    '## Orbital speed: metres and seconds');
}

// 05 Unit algebra checks
{
  const rows = [
    ['v = 2πr / T', ['m', '÷', 's'], '= m/s', 'speed'],
    ['W = m × g', ['kg', '×', 'N/kg'], '= N', 'weight (kg cancel)'],
    ['T = 2πr / v', ['m', '÷', 'm/s'], '= s', 'time (m cancel)'],
    ['Δλ / λ₀ = v / c', ['nm ÷ nm', ',', '(m/s) ÷ (m/s)'], '= no unit', 'a pure ratio'],
  ];
  let b = '';
  rows.forEach(([eq, parts, res, note], i) => {
    const y = 110 + i * 120;
    b += panel(30, y, 840, 105);
    b += t(60, y + 62, eq, { size: 22, weight: 700 });
    b += t(330, y + 62, parts.join(' '), { size: 21, weight: 600, fill: C.blue });
    b += t(620, y + 62, res, { size: 22, weight: 700, fill: C.tealDark });
    b += t(840, y + 92, note, { size: 15, fill: C.muted, anchor: 'end' });
  });
  b += panel(30, 600, 840, 90, C.cream, C.olive) + t(450, 640, 'Answer in km/h or m/day when m/s was asked for?', { size: 18, weight: 700, anchor: 'middle' }) + t(450, 668, 'A conversion was missed.', { size: 18, anchor: 'middle' });
  add('05-unit-checks',
    svg(900, 710, 'Check an answer with its units', b),
    'Unit checks: in v = 2πr / T, m ÷ s gives m/s; in W = m × g, kg × N/kg gives N; in T = 2πr / v, m ÷ m/s gives s; in Δλ / λ₀ = v / c, both sides cancel to a pure number. An answer in km/h or m/day means a conversion was missed.',
    'Treat units like algebra: they should cancel to the unit asked for.',
    '## Checking an answer with its units');
}

// 06 Worked examples 2-4
{
  const card = (y, title, lines, ans) => panel(30, y, 840, 70 + lines.length * 30) + t(60, y + 38, title, { size: 20, weight: 700 }) + tl(60, y + 72, lines, { size: 18 }, 30) + box(560, y + 50, 290, 56, C.tealLight, C.tealDark, 10) + t(705, y + 86, ans, { size: 20, weight: 700, anchor: 'middle' });
  let b = card(110, 'Satellite: r = 26 600 km, T = 12 h', ['r = 26 600 km = 2.66 × 10⁷ m', 'T = 12 × 3600 = 43 200 s', 'v = 2π × 2.66 × 10⁷ / 43 200'], '3.9 × 10³ m/s');
  b += card(300, 'Earth: r = 1.5 × 10¹¹ m, T = 365 days', ['T = 365 × 86 400 = 3.15 × 10⁷ s', 'v = 2π × 1.5 × 10¹¹ / 3.15 × 10⁷'], '3.0 × 10⁴ m/s');
  b += card(460, 'Moon: r = 3.8 × 10⁵ km, v = 1.0 km/s, find T', ['r = 3.8 × 10⁸ m,  v = 1000 m/s', 'T = 2πr / v = 2π × 3.8 × 10⁸ / 1000', '   = 2.4 × 10⁶ s', 'in days: 2.4 × 10⁶ / 86 400'], '≈ 28 days');
  add('06-worked-orbits',
    svg(900, 710, 'Worked examples: convert, then substitute', b),
    'Three worked examples. A satellite at 26 600 km = 2.66 × 10⁷ m with T = 12 × 3600 = 43 200 s has v = 3.9 × 10³ m/s. Earth at 1.5 × 10¹¹ m with T = 3.15 × 10⁷ s has v = 3.0 × 10⁴ m/s. The Moon at 3.8 × 10⁸ m moving at 1000 m/s has T = 2.4 × 10⁶ s, about 28 days.',
    'Write each conversion on its own line, then substitute.',
    '## Worked examples');
}
