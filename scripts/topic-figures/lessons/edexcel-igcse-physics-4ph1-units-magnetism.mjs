import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-units-magnetism';
export const figures = [];
const sub = (x) => x.replace(/([VIN])_([ps])/g, '$1<tspan baseline-shift="sub" font-size="0.7em">$2</tspan>');
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: sub(svgText), alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
// transformer: soft-iron core frame with coils on left and right limbs
const transformer = (x, y, w, h, nL, nR) => {
  const th = 26;
  let o = `<path d="M${x},${y} h${w} v${h} h${-w} Z M${x + th},${y + th} v${h - 2 * th} h${w - 2 * th} v${-(h - 2 * th)} Z" fill="#9aa4b2" fill-rule="evenodd" stroke="${C.ink}" stroke-width="2.5"/>`;
  const coil = (cx, n, col) => { let c = ''; const top = y + 18, sp = (h - 36) / n; for (let k = 0; k < n; k++) c += `<ellipse cx="${cx}" cy="${top + sp * (k + 0.5)}" rx="${th / 2 + 10}" ry="${Math.min(sp / 2 - 1, 10)}" fill="none" stroke="${col}" stroke-width="3.5"/>`; return c; };
  return o + coil(x + th / 2, nL, C.rust) + coil(x + w - th / 2, nR, C.blue);
};

// 01 How A, V and W link
{
  let b = panel(30, 110, 840, 260);
  b += box(70, 150, 200, 90, C.tealLight, C.tealDark, 12) + t(170, 192, 'ampere (A)', { size: 21, weight: 700, anchor: 'middle' }) + t(170, 222, 'current, I', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(320, 205, '×', { size: 34, weight: 700, anchor: 'middle' });
  b += box(370, 150, 200, 90, C.tealLight, C.tealDark, 12) + t(470, 192, 'volt (V)', { size: 21, weight: 700, anchor: 'middle' }) + t(470, 222, 'voltage, V', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(620, 205, '=', { size: 34, weight: 700, anchor: 'middle' });
  b += box(670, 150, 170, 90, C.cream, C.olive, 12) + t(755, 192, 'watt (W)', { size: 21, weight: 700, anchor: 'middle' }) + t(755, 222, 'power, P', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(450, 290, '1 W = 1 A × 1 V', { size: 24, weight: 700, anchor: 'middle' });
  b += t(450, 335, '(C/s) × (J/C) = J/s = W', { size: 19, anchor: 'middle', fill: C.blue, weight: 600 });
  b += panel(30, 390, 410, 270) + t(235, 428, 'Transformer power (P)', { size: 19, weight: 700, anchor: 'middle' });
  b += t(235, 480, 'V_p × I_p = V_s × I_s', { size: 22, weight: 700, anchor: 'middle' });
  b += tl(60, 528, ['input power (W) = output power (W)', 'for 100% efficiency'], { size: 17 }, 26);
  b += t(235, 620, 'both sides are in watts', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += panel(460, 390, 410, 270, C.cream, C.olive) + t(665, 428, 'Turns ratio: no unit', { size: 19, weight: 700, anchor: 'middle' });
  b += t(665, 480, 'V_p / V_s = N_p / N_s', { size: 22, weight: 700, anchor: 'middle' });
  b += tl(490, 528, ['turns ÷ turns is a pure number,', 'so the voltage units cancel:', 'both in V, or both in kV.'], { size: 17 }, 26);
  add('01-a-v-w-link',
    svg(900, 680, 'Ampere, volt and watt', b),
    'Current in amperes multiplied by voltage in volts gives power in watts: 1 W = 1 A × 1 V, since (C/s) × (J/C) = J/s. In a transformer V_p × I_p = V_s × I_s, both sides in watts, for 100% efficiency. The turns ratio V_p / V_s = N_p / N_s has no unit, so both voltages need only the same unit.',
    'Amperes times volts gives watts; a turns ratio has no unit.',
    '## How the three units link');
}

// 02 Prefixes in Topic 6
{
  const P = [
    ['M', 'mega', '× 10⁶', 'MW: output of a power station', C.cream, C.olive],
    ['k', 'kilo', '× 10³', 'kV: transmission voltages;  kW: motors', C.cream, C.olive],
    ['', 'base', '× 1', 'A, V, W', C.panel, C.ink],
    ['m', 'milli', '× 10⁻³', 'mA: small currents;  mV: induced in a small coil', C.tealLight, C.tealDark],
  ];
  let b = '';
  P.forEach(([s, n, m, ex, f, e], i) => {
    const y = 110 + i * 100;
    b += box(30, y, 840, 86, f, e, 12);
    b += t(90, y + 56, s || '—', { size: 30, weight: 700, anchor: 'middle' });
    b += t(150, y + 38, n, { size: 19, weight: 700 }) + t(150, y + 66, m, { size: 19, fill: C.blue, weight: 700 });
    b += t(840, y + 54, ex, { size: 17, anchor: 'end' });
  });
  b += panel(30, 520, 410, 130, '#fbeee6', C.rust) + tl(60, 560, ['m (milli) and M (mega) differ', 'by a factor of a thousand', 'million.'], { size: 18, weight: 700, fill: C.rust }, 26);
  b += panel(460, 520, 410, 130, C.tealLight, C.tealDark) + tl(490, 562, ['25 mV on a sensitive meter', '= 0.025 V'], { size: 20, weight: 700 }, 34);
  add('02-prefixes',
    svg(900, 670, 'Prefixes in Topic 6', b),
    'Prefix ladder: mega (M, × 10⁶) for power station output in MW; kilo (k, × 10³) for transmission voltages in kV and motors in kW; the base units A, V and W; milli (m, × 10⁻³) for small currents in mA and induced voltages in mV. m and M differ by a factor of a thousand million; 25 mV = 0.025 V.',
    'Convert mA, mV, kV, kW and MW to A, V and W before calculating.',
    '## Prefixes you will meet');
}

// 03 Worked example 1: step-down transformer
{
  let b = panel(30, 110, 840, 330);
  b += transformer(330, 150, 240, 220, 12, 4);
  b += t(450, 400, 'soft-iron core', { size: 15, anchor: 'middle', fill: C.muted });
  // primary leads
  b += ln(340, 190, 190, 190) + ln(340, 330, 190, 330) + t(180, 250, '230 V', { size: 24, weight: 700, anchor: 'end', fill: C.rust }) + t(180, 278, 'mains (primary)', { size: 15, anchor: 'end', fill: C.muted });
  b += ln(560, 210, 710, 210) + ln(560, 310, 710, 310) + t(720, 250, '5.0 V', { size: 24, weight: 700, fill: C.blue }) + t(720, 278, 'output', { size: 15, fill: C.muted }) + t(720, 304, '2.0 A', { size: 20, weight: 700, fill: C.blue });
  const step = (y, lab, w, ans) => panel(30, y, 840, 84) + t(60, y + 34, lab, { size: 16, weight: 700, fill: C.tealDark }) + t(60, y + 64, w, { size: 18 }) + box(620, y + 16, 230, 52, C.tealLight, C.tealDark, 10) + t(735, y + 50, ans, { size: 20, weight: 700, anchor: 'middle' });
  b += step(460, 'output power', 'V_s × I_s = 5.0 × 2.0', '10 W');
  b += step(556, 'input power (100% efficient)', 'input power = output power', '10 W');
  b += step(652, 'input current', 'I_p = 10 / 230 = 0.043 A', '43 mA');
  b += step(748, 'turns ratio (no unit)', 'V_p / V_s = 230 / 5.0', '46');
  b += t(450, 870, 'Voltage down by a factor of 46, so current up by the same factor (ideal transformer).', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-step-down-example',
    svg(900, 895, 'Worked example: a step-down transformer (P)', b),
    'A transformer steps 230 V mains down to 5.0 V with an output current of 2.0 A. Output power = 5.0 × 2.0 = 10 W, which equals the input power for 100% efficiency, so the input current is 10 / 230 = 0.043 A = 43 mA. The turns ratio is 230 / 5.0 = 46, with no unit.',
    'Same power on both sides: low voltage, large current; high voltage, small current.',
    '## Worked examples');
}

// 04 Worked example 2: transmission
{
  let b = panel(30, 110, 840, 330);
  b += t(60, 146, 'Invented figures for practice: 400 MW from a power station', { size: 17, fill: C.muted });
  const node = (x, w, l1, l2, f, e) => box(x, 170, w, 90, f, e, 12) + t(x + w / 2, 208, l1, { size: 18, weight: 700, anchor: 'middle' }) + t(x + w / 2, 236, l2, { size: 15, anchor: 'middle', fill: C.muted });
  b += node(50, 150, 'generator', 'at 25 kV', C.cream, C.olive);
  b += arrow(205, 215, 260, 215, { w: 3 });
  b += node(265, 150, 'step-up', 'transformer', C.tealLight, C.tealDark);
  b += arrow(420, 215, 475, 215, { w: 3 });
  b += node(480, 170, 'cables', 'at 400 kV', C.panel, C.ink);
  b += arrow(655, 215, 710, 215, { w: 3 });
  b += node(715, 135, 'step-down', 'near homes', C.tealLight, C.tealDark);
  b += t(450, 300, 'voltage ratio = 400 / 25 = 16: the secondary has 16 times as many turns as the primary', { size: 16, anchor: 'middle', weight: 600 });
  b += t(450, 340, 'Same power, sixteen times smaller current: much less heating of the cables,', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 700 });
  b += t(450, 366, 'so less energy is wasted.', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 700 });
  b += t(450, 412, 'Convert first: 400 MW = 400 × 10⁶ W;  25 kV = 25 × 10³ V;  400 kV = 400 × 10³ V', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(30, 460, 840, 220, C.cream, C.olive);
  b += t(60, 498, 'Current I = P / V, bars to scale', { size: 19, weight: 700 });
  const S = 570 / 16000;
  b += t(60, 548, 'at 25 kV', { size: 17, weight: 700 }) + t(60, 570, '400 × 10⁶ / 25 × 10³', { size: 15, fill: C.muted });
  b += box(270, 530, 16000 * S, 40, C.rust, C.ink, 4, 2) + t(270 + 16000 * S - 10, 557, '16 000 A', { size: 18, weight: 700, anchor: 'end', fill: '#fff' });
  b += t(60, 628, 'at 400 kV', { size: 17, weight: 700 }) + t(60, 650, '400 × 10⁶ / 400 × 10³', { size: 15, fill: C.muted });
  b += box(270, 610, 1000 * S, 40, C.tealDark, C.ink, 4, 2) + t(270 + 1000 * S + 10, 637, '1000 A', { size: 18, weight: 700 });
  add('04-transmission-example',
    svg(900, 700, 'Worked example: why transmit at high voltage (P)', b),
    'A generator delivers 400 MW at 25 kV; a step-up transformer raises it to 400 kV for the cables, and a step-down transformer reduces it near homes. At 25 kV the current is 400 × 10⁶ / 25 × 10³ = 16 000 A; at 400 kV it is 1000 A, sixteen times smaller, shown by bars to scale. The voltage ratio is 16, so less energy is wasted heating the cables.',
    'Step up the voltage and the same power needs a sixteen times smaller current.',
    '## Worked examples');
}

// 05 Motor power and transformer efficiency
{
  let b = panel(30, 110, 410, 360) + t(235, 148, 'Example 3: a d.c. motor', { size: 20, weight: 700, anchor: 'middle' });
  b += circ(235, 230, 44, C.panel, C.ink, 3) + t(235, 238, 'M', { size: 26, weight: 700, anchor: 'middle' });
  b += t(125, 236, '6.0 V', { size: 18, weight: 700, anchor: 'middle' }) + t(345, 236, '0.50 A', { size: 18, weight: 700, anchor: 'middle' });
  b += tl(60, 320, ['P = I × V = 0.50 × 6.0 = 3.0 W', 'in 2.0 minutes: t = 120 s', 'E = P × t = 3.0 × 120 = 360 J'], { size: 18 }, 34);
  b += panel(460, 110, 410, 360, C.cream, C.olive) + t(665, 148, 'Example 4: a real transformer', { size: 20, weight: 700, anchor: 'middle' });
  // simple Sankey-like bars
  b += box(490, 190, 340, 46, C.rust, C.ink, 4, 2) + t(505, 220, 'input 12 W', { size: 18, weight: 700, fill: '#fff' });
  b += box(490, 250, 340 * 0.9, 46, C.tealDark, C.ink, 4, 2) + t(505, 280, 'output 10.8 W', { size: 18, weight: 700, fill: '#fff' });
  b += t(838, 283, 'heat', { size: 15, weight: 700, anchor: 'end', fill: C.rust }).replace('x="838"', 'x="846"');
  b += tl(490, 340, ['efficiency = 10.8 / 12 × 100%'], { size: 18 }) + t(490, 380, '= 90%', { size: 24, weight: 700 });
  b += tl(490, 420, ['Output a little less than input:', 'the coils and core heat up.'], { size: 16, fill: C.muted }, 21);
  add('05-motor-and-efficiency',
    svg(900, 490, 'Power, energy and efficiency', b),
    'A d.c. motor on 6.0 V drawing 0.50 A has power 0.50 × 6.0 = 3.0 W and transfers 3.0 × 120 = 360 J in 2.0 minutes. A real transformer with input 12 W and output 10.8 W has efficiency 10.8 / 12 × 100% = 90%, because the coils and core heat up.',
    'P = I × V gives watts; a real transformer outputs a little less than it takes in.',
    '## Worked examples');
}

// 06 Step-up vs step-down check
{
  const side = (x, title, vUp, col) => {
    let o = panel(x, 110, 410, 420) + t(x + 205, 148, title, { size: 21, weight: 700, anchor: 'middle', fill: col });
    o += transformer(x + 125, 180, 160, 150, vUp ? 4 : 10, vUp ? 10 : 4);
    o += t(x + 70, 268, 'in', { size: 16, weight: 700, anchor: 'middle' }) + t(x + 340, 268, 'out', { size: 16, weight: 700, anchor: 'middle' });
    const row = (y, q, up) => t(x + 40, y, q, { size: 19, weight: 700 }) + (up ? arrow(x + 230, y + 4, x + 230, y - 34, { color: C.tealDark, marker: 'ahT', w: 5 }) : arrow(x + 230, y - 34, x + 230, y + 4, { color: C.rust, marker: 'ahR', w: 5 })) + t(x + 255, y - 4, up ? 'bigger' : 'smaller', { size: 18, weight: 700, fill: up ? C.tealDark : C.rust });
    o += t(x + 40, 375, 'output compared with input:', { size: 16, fill: C.muted });
    o += row(425, 'voltage', vUp) + row(490, 'current', !vUp);
    return o;
  };
  let b = side(30, 'Step-up', true, C.tealDark) + side(460, 'Step-down', false, C.rust);
  b += panel(30, 550, 840, 120, C.cream, C.olive);
  b += t(450, 590, 'The current ratio is the inverse of the voltage ratio.', { size: 19, weight: 700, anchor: 'middle' });
  b += t(450, 624, 'Ideal: output power can never exceed input power. Answer the other way round?', { size: 17, anchor: 'middle' });
  b += t(450, 650, 'You have inverted a ratio.', { size: 17, anchor: 'middle' });
  add('06-step-up-step-down',
    svg(900, 690, 'Checking a transformer answer (P)', b),
    'A step-up transformer has more turns on the output coil: the output voltage is bigger and the output current smaller than the input. A step-down transformer has fewer output turns: the output voltage is smaller and the current bigger. The current ratio is the inverse of the voltage ratio, and output power cannot exceed input power.',
    'Voltage up means current down, and the other way round.',
    '## Checking your answer');
}
