import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-units-radioactivity';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const vtext = (x, y, s, size = 16) => `<text x="${x}" y="${y}" font-size="${size}" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x} ${y})">${s}</text>`;
const gm = (x, y) => box(x, y - 23, 150, 46, C.panel, C.ink, 22, 3) + box(x, y - 23, 28, 46, C.tealLight, C.ink, 6, 2.5);

// 01 Activity vs count rate
{
  let b = panel(30, 110, 840, 420);
  const sx = 230, sy = 320;
  for (let k = 0; k < 16; k++) { const a = (k * Math.PI) / 8 + 0.1; b += arrow(sx + 24 * Math.cos(a), sy + 24 * Math.sin(a), sx + 95 * Math.cos(a), sy + 95 * Math.sin(a), { color: C.rust, marker: 'ahR', w: 2.5 }); }
  b += circ(sx, sy, 20, C.mustard, C.ink, 3);
  b += t(sx, sy + 160, 'source: emits in all directions', { size: 16, weight: 700, anchor: 'middle' });
  b += gm(560, 320) + t(635, 280, 'G-M tube', { size: 16, weight: 700, anchor: 'middle' });
  b += path('M710,320 Q760,320 770,300', { w: 2.5 }) + box(760, 250, 90, 60, C.ink, C.ink, 6, 0) + box(768, 258, 74, 32, '#e9f5ec', C.ink, 3, 1) + t(805, 335, 'counter', { size: 15, weight: 700, anchor: 'middle' });
  b += ln(sx + 22, sy - 8, 556, 312, { color: C.rust, w: 2, dash: '5 5' }) + ln(sx + 22, sy + 8, 556, 328, { color: C.rust, w: 2, dash: '5 5' });
  b += t(440, 300, 'only a small fraction reaches it', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 });
  b += t(640, 390, '+ background radiation', { size: 15, anchor: 'middle', fill: C.muted, weight: 600 }) + arrow(640, 372, 640, 352, { w: 2.5 });
  b += panel(30, 550, 410, 220, C.cream, C.olive) + t(60, 590, 'Activity', { size: 21, weight: 700 });
  b += tl(60, 626, ['decays per second in the source', '1 Bq = 1 decay per second', '1 kBq = 1000 Bq', '1 MBq = 1 000 000 Bq'], { size: 17 }, 30);
  b += panel(460, 550, 410, 220, C.tealLight, C.tealDark) + t(490, 590, 'Count rate', { size: 21, weight: 700 });
  b += tl(490, 626, ['detected by the G-M tube', 'counts per second or per minute,', 'not Bq; normally much less', 'than the activity'], { size: 17 }, 30);
  b += t(450, 795, 'Both halve in one half-life, so either can be used to find a half-life.', { size: 17, anchor: 'middle', fill: C.muted });
  add('01-activity-count-rate',
    svg(900, 820, 'Activity (Bq) is not count rate', b),
    'A source emits radiation in all directions and a Geiger-Müller tube intercepts only a small fraction, plus background radiation. Activity is decays per second in the source, measured in becquerels (1 Bq = 1 decay per second, 1 kBq = 1000 Bq, 1 MBq = 1 000 000 Bq). Count rate is what the detector records, in counts per second or per minute, and is normally much less. Both halve in one half-life.',
    'Activity is in Bq; a detector gives a count rate in counts per second or minute.',
    '## The becquerel');
}

// 02 Time units and count-rate conversion
{
  let b = panel(30, 110, 840, 260);
  const node = (x, s) => box(x, 170, 180, 80, C.tealLight, C.tealDark, 14) + t(x + 90, 222, s, { size: 30, weight: 700, anchor: 'middle' });
  b += node(70, '1 h') + node(360, '60 min') + node(650, '3600 s');
  b += t(305, 216, '=', { size: 30, weight: 700, anchor: 'middle' }) + t(595, 216, '=', { size: 30, weight: 700, anchor: 'middle' });
  b += t(450, 300, 'minutes × 60 → seconds;  hours × 60 → minutes', { size: 18, anchor: 'middle', weight: 600 });
  b += t(450, 335, '60, not 100', { size: 17, anchor: 'middle', fill: C.rust, weight: 700 });
  b += panel(30, 390, 840, 220, C.cream, C.olive);
  b += t(60, 428, 'Converting a count rate', { size: 20, weight: 700 });
  b += box(60, 450, 300, 70, C.panel, C.olive, 12) + t(210, 494, 'counts per second', { size: 19, weight: 700, anchor: 'middle' });
  b += box(540, 450, 300, 70, C.panel, C.olive, 12) + t(690, 494, 'counts per minute', { size: 19, weight: 700, anchor: 'middle' });
  b += arrow(370, 470, 530, 470, { color: C.tealDark, marker: 'ahT', w: 4 }) + t(450, 460, '× 60', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += arrow(530, 504, 370, 504, { color: C.rust, marker: 'ahR', w: 4 }) + t(450, 530, '÷ 60', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(450, 580, 'Per minute is always the bigger number: a minute holds 60 seconds.', { size: 17, anchor: 'middle' });
  b += panel(30, 630, 840, 140);
  b += t(60, 668, 'Two rules', { size: 19, weight: 700 });
  b += tl(60, 702, ['1. Elapsed time and half-life in the same unit before dividing.', '2. Reading and background per the same time unit before subtracting.'], { size: 17 }, 30);
  add('02-time-conversions',
    svg(900, 790, 'Seconds, minutes and hours', b),
    '1 h = 60 min = 3600 s. Counts per second × 60 gives counts per minute, and counts per minute ÷ 60 gives counts per second; per minute is the bigger number. Put elapsed time and half-life in the same unit before dividing, and reading and background per the same time unit before subtracting.',
    'Use 60, not 100, and match the time units before dividing or subtracting.',
    '## The time units: second, minute and hour');
}

// 03 Range of alpha in air, in cm
{
  let b = panel(30, 110, 840, 270);
  b += circ(100, 230, 18, C.mustard, C.ink, 3) + t(100, 275, 'alpha source', { size: 15, weight: 700, anchor: 'middle' });
  b += arrow(122, 230, 240, 230, { color: C.rust, marker: 'ahR', w: 4 });
  b += t(180, 215, 'a few cm', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  [320, 470, 620].forEach((x, i) => (b += `<g opacity="${i === 0 ? 1 : 0.45}">` + gm(x, 230) + '</g>'));
  b += arrow(330, 290, 760, 290, { w: 3 }) + t(545, 318, 'G-M tube moved away in centimetre steps', { size: 16, weight: 600, anchor: 'middle' });
  // qualitative graph
  b += panel(30, 400, 840, 330);
  const ox = 130, oy = 660, W = 640, H = 210;
  b += arrow(ox, oy, ox + W, oy, { w: 2.5 }) + arrow(ox, oy, ox, oy - H, { w: 2.5 });
  b += t(ox + W / 2, oy + 34, 'distance from source / cm', { size: 16, weight: 600, anchor: 'middle' }) + vtext(ox - 22, oy - H / 2, 'count rate', 16);
  b += path(`M${ox + 4},${oy - 180} L${ox + 120},${oy - 170} Q${ox + 200},${oy - 150} ${ox + 240},${oy - 40} L${ox + W - 20},${oy - 40}`, { stroke: C.rust, w: 4 });
  b += ln(ox, oy - 40, ox + W - 20, oy - 40, { color: C.muted, w: 2, dash: '7 6' }) + t(ox + W - 20, oy - 50, 'background level', { size: 15, anchor: 'end', fill: C.muted, weight: 600 });
  b += t(ox + 300, oy - 150, 'drops to background within a few cm:', { size: 16, weight: 700, fill: C.rust }) + t(ox + 300, oy - 128, 'alpha has stopped in the air', { size: 16, weight: 700, fill: C.rust });
  b += t(450, 720, 'Sketch only: shape, not data.', { size: 15, anchor: 'middle', fill: C.muted });
  add('03-alpha-range-cm',
    svg(900, 750, 'Centimetres: the range of alpha in air', b),
    'A Geiger-Müller tube is moved away from an alpha source in centimetre steps. A sketch graph of count rate against distance in cm stays high close to the source, then drops to the background level within a few centimetres, because alpha particles stop after a few cm of air.',
    'Alpha travels only a few centimetres in air, so the count falls to background.',
    '## The centimetre');
}

// 04 Example 1: mixed time units
{
  let b = panel(30, 110, 840, 170, C.cream, C.olive);
  b += t(60, 148, 'Half-life 45 min, activity 3200 Bq. Find the activity 3.0 h later.', { size: 19, weight: 700 });
  b += tl(60, 188, ['elapsed time = 3.0 h = 3.0 × 60 = 180 min', 'number of half-lives = 180 ÷ 45 = 4'], { size: 19 }, 32);
  b += panel(30, 300, 840, 330);
  const vals = [3200, 1600, 800, 400, 200], S = 190 / 3200;
  vals.forEach((v, i) => {
    const x = 90 + i * 160, h = v * S;
    b += box(x, 560 - h, 90, h, i === 4 ? C.mustard : C.teal, C.ink, 4, 2) + t(x + 45, 560 - h - 10, `${v} Bq`, { size: 17, weight: 700, anchor: 'middle' });
    b += t(x + 45, 586, `${i * 45} min`, { size: 16, anchor: 'middle', fill: C.muted });
    if (i < 4) b += t(x + 125, 520, '÷ 2', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  });
  b += t(450, 616, 'Bars to scale. 180 min = 3.0 h.', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 650, 840, 80, '#fbeee6', C.rust) + t(450, 697, '✗ 3.0 ÷ 45 mixes hours with minutes: a meaningless fraction', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  add('04-mixed-time-units',
    svg(900, 750, 'Worked example: hours and minutes', b),
    'A source of half-life 45 min has activity 3200 Bq. 3.0 h = 180 min, which is 180 ÷ 45 = 4 half-lives. Bars to scale show 3200, 1600, 800, 400 and 200 Bq at 0, 45, 90, 135 and 180 min, so the activity is 200 Bq.',
    'Convert 3.0 h to 180 min first: four half-lives take 3200 Bq to 200 Bq.',
    '## Worked examples');
}

// 05 Example 2: background in the same units
{
  let b = panel(30, 110, 840, 250);
  b += t(60, 148, '1260 counts in 3.0 minutes; background 0.40 counts per second', { size: 19, weight: 700 });
  b += box(60, 170, 370, 64, C.tealLight, C.tealDark, 12) + t(245, 210, '1260 ÷ 3.0 = 420 counts/min', { size: 19, weight: 700, anchor: 'middle' });
  b += box(470, 170, 370, 64, C.cream, C.olive, 12) + t(655, 210, '0.40 × 60 = 24 counts/min', { size: 19, weight: 700, anchor: 'middle' });
  b += t(245, 262, 'measured', { size: 16, anchor: 'middle', fill: C.muted }) + t(655, 262, 'background, converted to per minute', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(450, 330, 'Both now per minute, so they can be subtracted.', { size: 17, anchor: 'middle', weight: 600, fill: C.tealDark });
  b += panel(30, 380, 840, 230);
  const S = 680 / 420;
  b += t(60, 420, 'counts per minute (bars to scale)', { size: 17, weight: 700 });
  b += box(60, 440, 396 * S, 50, C.teal, C.tealDark, 4, 2) + box(60 + 396 * S, 440, 24 * S, 50, C.cream, C.olive, 4, 2);
  b += t(70, 472, 'corrected 396', { size: 18, weight: 700 }) + t(60 + 420 * S + 10, 472, '420', { size: 18, weight: 700 });
  b += t(60 + 408 * S, 516, 'background 24', { size: 16, weight: 700, fill: C.olive, anchor: 'end' });
  b += t(60, 576, '420 − 24 = 396 counts/min', { size: 21, weight: 700 }) + t(840, 576, '396 ÷ 60 = 6.6 counts/s', { size: 21, weight: 700, anchor: 'end', fill: C.tealDark });
  add('05-background-correction',
    svg(900, 630, 'Worked example: correcting for background', b),
    'A G-M tube records 1260 counts in 3.0 minutes, a measured rate of 420 counts/min. The background of 0.40 counts per second is 24 counts/min. The corrected count rate is 420 − 24 = 396 counts/min, which is 6.6 counts/s.',
    'Put the background in the same time unit as the reading before subtracting.',
    '## Worked examples');
}

// 06 Example 3: one half-life in three units
{
  let b = panel(30, 110, 840, 240);
  b += t(60, 148, 'Activity falls from 6000 Bq to 750 Bq in 15 h', { size: 19, weight: 700 });
  const vals = ['6000', '3000', '1500', '750'];
  vals.forEach((v, i) => {
    const x = 70 + i * 205;
    b += box(x, 180, 150, 64, i === 3 ? C.mustard : C.tealLight, C.ink, 12, 2) + t(x + 75, 220, `${v} Bq`, { size: 20, weight: 700, anchor: 'middle' });
    if (i < 3) b += arrow(x + 154, 212, x + 201, 212, { w: 3 }) + t(x + 177, 272, '½', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
  });
  b += t(450, 320, '3 half-lives in 15 h, so half-life = 15 ÷ 3 = 5.0 h', { size: 20, weight: 700, anchor: 'middle' });
  b += panel(30, 370, 840, 170, C.cream, C.olive);
  const unit = (x, s) => box(x, 410, 210, 76, C.panel, C.olive, 12) + t(x + 105, 458, s, { size: 25, weight: 700, anchor: 'middle' });
  b += unit(60, '5.0 h') + unit(345, '300 min') + unit(630, '18 000 s');
  b += t(307, 430, '× 60', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + arrow(275, 448, 340, 448, { color: C.tealDark, marker: 'ahT', w: 3 });
  b += t(592, 430, '× 60', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + arrow(560, 448, 625, 448, { color: C.tealDark, marker: 'ahT', w: 3 });
  b += t(450, 520, 'The same half-life, written in three units.', { size: 16, anchor: 'middle', fill: C.muted });
  add('06-half-life-three-units',
    svg(900, 560, 'Worked example: one half-life, three units', b),
    'Activity falls 6000 → 3000 → 1500 → 750 Bq, three half-lives in 15 h, so the half-life is 15 ÷ 3 = 5.0 h. This equals 5.0 × 60 = 300 min, and 300 × 60 = 18 000 s.',
    'Count the halvings, divide the time, then convert: 5.0 h = 300 min = 18 000 s.',
    '## Worked examples');
}
