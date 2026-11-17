import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });


// local helpers
const wrap = (s, n) => {
  const out = [''];
  for (const w of s.split(' ')) {
    const cur = out[out.length - 1];
    if (cur && (cur + ' ' + w).length > n) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w;
  }
  return out;
};
const para = (x, y, s, n, opts = {}, lh) => tl(x, y, wrap(s, n), opts, lh || (opts.size || 18) * 1.32);
const box = (x, y, w, h, fill = C.panel, edge = C.panelEdge, rx = 12) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
const kbadge = (cx, cy, r, label, fill = C.cream) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + 7, label, { size: 19, weight: 700, anchor: 'middle' });
const pill = (x, y, w, h, s, { fill = C.cream, edge = C.olive, size = 17, weight = 600, color = C.ink } = {}) =>
  box(x, y, w, h, fill, edge, h / 2) + t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight, anchor: 'middle', fill: color });
const apath = (d, color = C.ink, marker = 'ah', w = 3.5) => path(d, { stroke: color, w, extra: `marker-end="url(#${marker})"` });
const PINK = '#f6e3d6';
const MONO = "'DejaVu Sans Mono', monospace";
const mono = (x, y, s, { size = 16, fill = C.ink, weight = 400, anchor = 'start' } = {}) =>
  `<text x="${x}" y="${y}" font-family="${MONO}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" xml:space="preserve">${s.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</text>`;
const chip = (x, y, w, s, f = C.panel, e = C.ink, size = 16) => box(x, y, w, 36, f, e, 8) + t(x + w / 2, y + 24, s, { size, weight: 700, anchor: 'middle' });
const darr = (x1, y1, x2, y2, color = C.ink) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="3.5" marker-start="url(#ah)" marker-end="url(#ah)"/>`;

// 01 CPU, registers and buses
{
  let b = box(30, 110, 540, 450, C.tealLight, C.tealDark, 16);
  b += t(52, 144, 'CPU', { size: 24, weight: 700, fill: C.tealDark });
  b += box(52, 160, 240, 92, C.panel, C.ink, 10) + t(70, 190, 'Control unit (CU)', { size: 17, weight: 700 }) + tl(70, 214, ['decodes instructions; sends', 'control signals'], { size: 15, fill: C.muted }, 19);
  b += box(310, 160, 240, 92, C.panel, C.ink, 10) + t(328, 190, 'ALU', { size: 17, weight: 700 }) + tl(328, 214, ['arithmetic (+, −) and logic', '(comparisons, AND, OR, NOT)'], { size: 15, fill: C.muted }, 19);
  b += box(52, 268, 498, 276, C.cream, C.olive, 10) + t(70, 296, 'Registers: very small, very fast storage', { size: 17, weight: 700, fill: C.olive });
  const regs = [['PC', 'address of the next instruction'], ['MAR', 'address being read from or written to'], ['MDR', 'data or instruction just read, or to be written'], ['ACC', 'accumulator: holds results from the ALU']];
  regs.forEach(([k, d], i) => {
    const y = 312 + i * 56;
    b += box(70, y, 80, 44, C.mustard, C.ink, 8) + t(110, y + 28, k, { size: 17, weight: 700, anchor: 'middle' }) + t(164, y + 28, d, { size: 15 });
  });
  // memory
  b += box(700, 160, 170, 384, C.panel, C.ink, 12) + t(785, 190, 'Memory', { size: 18, weight: 700, anchor: 'middle' }) + t(785, 212, '(RAM)', { size: 15, anchor: 'middle', fill: C.muted });
  [0, 1, 2, 3, 4, 5, 6].forEach((i) => { b += `<rect x="720" y="${232 + i * 42}" width="130" height="34" rx="4" fill="${i === 2 ? C.cream : C.bg}" stroke="${C.panelEdge}" stroke-width="2"/>`; });
  // buses
  const bus = (y, name, note, kind) => {
    let s = kind === 'two' ? darr(574, y, 694, y) : arrow(574, y, 694, y, { w: 3.5 });
    return s + t(634, y - 10, name, { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(634, y + 22, note, { size: 15, anchor: 'middle', fill: C.muted });
  };
  b += `<line x1="292" y1="206" x2="310" y2="206" stroke="${C.ink}" stroke-width="2"/>`;
  b += bus(206, 'control bus', 'read, write', 'one');
  b += bus(391, 'address bus', '', 'one');
  b += bus(447, 'data bus', '', 'two') + t(634, 469, 'both ways', { size: 15, anchor: 'middle', fill: C.muted });
  b += box(30, 580, 840, 56, C.cream, C.olive) + t(450, 615, 'Buses connect the CPU to memory: addresses out, data both ways, control signals.', { size: 17, weight: 700, anchor: 'middle' });
  add('01-cpu-registers-buses',
    svg(900, 660, 'Inside the CPU', b),
    'The CPU contains the control unit, which decodes instructions and sends control signals, the ALU for arithmetic and logic, and registers: the PC (address of the next instruction), MAR (address being read or written), MDR (data just read or to be written) and the accumulator (ALU results). The control bus carries read and write signals, the address bus carries addresses from the CPU and the data bus carries data both ways.',
    'The CU coordinates, the ALU calculates, registers hold what is in use, and buses link the CPU to memory.',
    '## What are the components of the CPU?');
}

// 02 Fetch-execute cycle
{
  let b = '';
  const stage = (y, h, name, f, e) => box(30, y, 150, h, f, e, 12) + t(105, y + h / 2 + 8, name, { size: 22, weight: 700, anchor: 'middle', fill: e === C.ink ? C.ink : e });
  const row = (y, n, art, text) => panel(196, y, 674, 62) + badge(226, y + 31, 16, n, C.cream) + art + t(560, y + 37, text, { size: 16 });
  let b2 = '';
  // Fetch
  b += stage(110, 282, 'Fetch', C.tealLight, C.tealDark);
  b2 += row(110, '1', chip(254, 123, 64, 'PC', C.mustard) + arrow(322, 141, 356, 141, { w: 3 }) + chip(362, 123, 74, 'MAR'), 'address copied from PC to MAR');
  b2 += row(184, '2', chip(254, 197, 64, 'CU', C.panel) + arrow(322, 215, 356, 215, { w: 3 }) + t(364, 221, 'read signal', { size: 15, weight: 600, fill: C.tealDark }), 'on the control bus');
  b2 += row(258, '3', chip(254, 271, 104, 'memory', C.cream) + arrow(362, 289, 396, 289, { w: 3 }) + chip(402, 271, 74, 'MDR'), 'instruction travels on the data bus');
  b2 += row(332, '4', chip(254, 345, 64, 'PC', C.mustard) + t(330, 369, '+ 1', { size: 18, weight: 700 }), 'PC now points to the next instruction');
  // Decode
  b += stage(410, 62, 'Decode', C.cream, C.olive);
  b2 += row(410, '5', chip(254, 423, 74, 'MDR') + arrow(332, 441, 366, 441, { w: 3 }) + chip(372, 423, 64, 'CU'), 'CU works out the operation and data');
  // Execute
  b += stage(490, 208, 'Execute', C.mustard, C.ink);
  b2 += row(490, '6', chip(254, 503, 84, 'address') + arrow(342, 521, 372, 521, { w: 3 }) + chip(378, 503, 74, 'MAR'), 'if data must be loaded, it arrives in MDR');
  b2 += row(564, '7', chip(254, 577, 64, 'ALU', C.tealLight), 'performs any calculation');
  b2 += row(638, '8', chip(254, 651, 84, 'result') + arrow(342, 669, 372, 669, { w: 3 }) + chip(378, 651, 74, 'ACC', C.mustard), 'or written back to memory');
  b += b2;
  // loop
  b += path('M30,600 C-0,600 0,250 28,250', { w: 0 });
  b += box(30, 716, 840, 70, C.panel, C.rust);
  b += t(52, 746, 'Then the cycle repeats from Fetch.', { size: 17, weight: 700 });
  b += t(52, 772, 'A jump or branch instruction changes the PC during execution: that is how selection and loops work.', { size: 15, fill: C.rust, weight: 600 });
  add('02-fetch-execute',
    svg(900, 810, 'The fetch-execute cycle, step by step', b),
    'Fetch: the address in the PC is copied to the MAR, the CU sends a read signal on the control bus, the instruction travels on the data bus into the MDR, and the PC is incremented. Decode: the instruction passes from the MDR to the CU. Execute: any data address goes to the MAR and the data to the MDR, the ALU calculates, and the result is stored in the accumulator or memory. A jump or branch changes the PC.',
    'Say what happens to the PC, MAR and MDR at each stage, not just the stage names.',
    '## What happens in the fetch-execute cycle?');
}

// 03 Storage
{
  let b = '';
  const col = (x, w, h, title, sub, f, e, vol) => box(x, 150, w, h, f, e, 12) + t(x + w / 2, 186, title, { size: 19, weight: 700, anchor: 'middle' }) + tl(x + w / 2, 212, sub, { size: 15, anchor: 'middle', fill: C.muted }, 19) +
    pill(x + w / 2 - 62, 150 + h - 52, 124, 34, vol, { fill: vol === 'volatile' ? PINK : C.panel, edge: vol === 'volatile' ? C.rust : C.tealDark, size: 15, color: vol === 'volatile' ? C.rust : C.tealDark });
  b += box(30, 150, 110, 190, C.ink, C.ink, 12) + t(85, 252, 'CPU', { size: 22, weight: 700, anchor: 'middle', fill: C.panel });
  b += box(160, 108, 460, 256, 'none', C.tealDark, 14).replace('fill="none"', 'fill="none" stroke-dasharray="8 6"') + t(390, 136, 'Primary: accessed directly by the CPU', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += col(174, 144, 190, 'Cache', ['fastest; copies', 'of frequent data'], C.mustard, C.ink, 'volatile');
  b += col(326, 130, 190, 'RAM', ['programs and', 'data in use'], C.cream, C.olive, 'volatile');
  b += col(464, 142, 190, 'ROM', ['start-up', 'instructions'], C.cream, C.olive, 'non-volatile');
  b += box(640, 108, 230, 256, 'none', C.olive, 14).replace('fill="none"', 'fill="none" stroke-dasharray="8 6"') + t(755, 136, 'Secondary', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += col(656, 198, 190, 'HDD, SSD,', ['optical disc,', 'USB flash drive'], C.panel, C.panelEdge, 'non-volatile');
  b += darr(144, 245, 172, 245);
  b += box(30, 384, 840, 66, C.panel, C.panelEdge) + t(52, 412, 'Secondary storage is slower and is reached through input/output:', { size: 16, weight: 700 }) + t(52, 436, 'data must be loaded into RAM before the CPU can use it.', { size: 16 });
  // virtual memory
  b += box(30, 470, 840, 220, C.tealLight, C.tealDark);
  b += t(52, 504, 'Virtual memory: when RAM is full', { size: 19, weight: 700, fill: C.tealDark });
  b += box(60, 528, 250, 90, C.cream, C.olive, 10) + t(185, 560, 'RAM (full)', { size: 17, weight: 700, anchor: 'middle' });
  [0, 1, 2, 3].forEach((i) => { b += `<rect x="${78 + i * 56}" y="574" width="46" height="28" rx="4" fill="${C.olive}" opacity="0.65"/>`; });
  b += darr(318, 573, 520, 573, C.tealDark) + t(419, 560, 'swapped in and out', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += box(528, 528, 312, 90, C.panel, C.ink, 10) + t(684, 556, 'Secondary storage', { size: 17, weight: 700, anchor: 'middle' });
  b += `<rect x="560" y="570" width="248" height="34" rx="6" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2" stroke-dasharray="6 4"/>` + t(684, 593, 'part used as virtual memory', { size: 15, anchor: 'middle', weight: 600 });
  b += t(60, 656, '+ more programs can run', { size: 16, weight: 600, fill: C.tealDark }) + t(500, 656, '− the system slows when data is swapped', { size: 16, weight: 600, fill: C.rust });
  add('03-storage',
    svg(900, 714, 'Primary and secondary storage', b),
    'Primary storage (cache, RAM and ROM) is accessed directly by the CPU; cache is fastest, and cache and RAM are volatile while ROM is not. Secondary storage (hard disk, SSD, optical disc, USB flash drive) is non-volatile and reached through input/output, so data must be loaded into RAM. When RAM is full, part of secondary storage is used as virtual memory: more programs run, but swapping slows the system.',
    'Primary storage serves the CPU directly; virtual memory borrows slower secondary storage when RAM is full.',
    '## How do primary and secondary storage differ?');
}

// 04 Binary and hex
{
  let b = panel(30, 110, 840, 250);
  b += t(55, 146, 'Integers: each place is a power of 2', { size: 20, weight: 700 });
  const pv = ['8', '4', '2', '1'], bits = ['1', '1', '0', '1'];
  pv.forEach((v, i) => {
    const x = 70 + i * 100;
    b += box(x, 166, 88, 44, C.cream, C.olive, 6) + t(x + 44, 195, v, { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
    b += box(x, 218, 88, 54, bits[i] === '1' ? C.mustard : C.panel, C.ink, 6) + t(x + 44, 253, bits[i], { size: 24, weight: 700, anchor: 'middle' });
    b += t(x + 44, 300, bits[i] === '1' ? v : '0', { size: 18, anchor: 'middle', weight: 600 }) + (i < 3 ? t(x + 94, 300, '+', { size: 18, anchor: 'middle', fill: C.muted }) : '');
  });
  b += t(470, 300, '= 13', { size: 22, weight: 700, fill: C.tealDark });
  b += t(40, 195, '', {});
  b += box(560, 166, 290, 150, C.tealLight, C.tealDark, 10) + t(705, 200, '8 bits = 1 byte', { size: 18, weight: 700, anchor: 'middle' });
  b += t(705, 236, '2⁸ = 256 values', { size: 18, anchor: 'middle' }) + t(705, 264, '0 to 255 unsigned', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(705, 298, '1 kB = 1000 B · 1 KiB = 1024 B', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += t(70, 338, '1101 in binary is 8 + 4 + 0 + 1 = 13', { size: 16, fill: C.muted });
  // hex
  b += panel(30, 380, 840, 200);
  b += t(55, 416, 'Hexadecimal: each hex digit stands for four bits', { size: 20, weight: 700 });
  const nib = (x, bitsS, vals, hex, sum) => {
    let s = '';
    bitsS.split('').forEach((c, i) => { s += box(x + i * 50, 440, 44, 44, c === '1' ? C.mustard : C.panel, C.ink, 6) + t(x + 22 + i * 50, 470, c, { size: 21, weight: 700, anchor: 'middle' }) + t(x + 22 + i * 50, 504, vals[i], { size: 15, anchor: 'middle', fill: C.muted }); });
    s += t(x + 97, 532, sum, { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
    s += path(`M${x},545 L${x},552 L${x + 194},552 L${x + 194},545`, { w: 2.5, stroke: C.olive });
    return s + arrow(x + 97, 554, x + 97, 554, { w: 0 });
  };
  b += nib(70, '1011', ['8', '4', '2', '1'], 'B', '8 + 2 + 1 = 11');
  b += nib(300, '0110', ['8', '4', '2', '1'], '6', '4 + 2 = 6');
  b += arrow(520, 466, 580, 466, { w: 4 });
  b += box(596, 434, 76, 64, C.mustard, C.ink, 10) + t(634, 478, 'B', { size: 32, weight: 700, anchor: 'middle' });
  b += box(684, 434, 76, 64, C.mustard, C.ink, 10) + t(722, 478, '6', { size: 32, weight: 700, anchor: 'middle' });
  b += t(678, 528, '11 is B in hex', { size: 15, anchor: 'middle', fill: C.muted });
  b += box(30, 598, 840, 92, C.cream, C.olive);
  b += t(52, 630, 'Text', { size: 18, weight: 700 }) + t(120, 630, 'each character has a numeric code', { size: 16 });
  b += t(52, 664, 'ASCII: 7 bits (often stored in 8), English letters, digits, symbols · Unicode: more bits, world scripts', { size: 15, fill: C.ink });
  add('04-binary-hex-text',
    svg(900, 714, 'Numbers and text in binary', b),
    'Place values 8, 4, 2 and 1 show that 1101 in binary is 8 + 4 + 0 + 1 = 13. Eight bits make a byte and hold 256 values, 0 to 255 unsigned. The byte 1011 0110 splits into two groups of four bits, 11 and 6, written in hexadecimal as B6. Text uses numeric codes: ASCII with 7 bits, Unicode with more.',
    'Binary places double from right to left; each group of four bits is one hex digit.',
    '## How is data represented in binary?');
}

// 05 Images and sound
{
  let b = '';
  b += panel(30, 110, 410, 470) + t(52, 146, 'Images: a grid of pixels', { size: 20, weight: 700 });
  const cols = [C.teal, C.mustard, C.cream, C.tealDark, C.rust, C.olive];
  for (let r = 0; r < 6; r++) for (let c = 0; c < 8; c++) b += `<rect x="${70 + c * 40}" y="${166 + r * 34}" width="40" height="34" fill="${cols[(r * 3 + c * 5) % 6]}" stroke="${C.panel}" stroke-width="2"/>`;
  b += `<rect x="70" y="166" width="40" height="34" fill="none" stroke="${C.ink}" stroke-width="3.5"/>`;
  b += t(52, 404, 'one pixel’s colour is a binary number', { size: 15, fill: C.muted });
  b += t(52, 440, 'Colour depth = bits per pixel', { size: 17, weight: 700 });
  b += t(52, 468, '24 bits → 2²⁴, about 16.7 million colours', { size: 16 });
  b += box(52, 494, 366, 66, C.cream, C.olive, 10) + t(235, 522, 'File size (before compression) =', { size: 15, anchor: 'middle', weight: 600 }) + t(235, 546, 'width × height × colour depth', { size: 16, anchor: 'middle', weight: 700 });
  // sound
  b += panel(460, 110, 410, 470) + t(482, 146, 'Sound: sampled amplitude', { size: 20, weight: 700 });
  const ox = 500, oy = 290, W = 340;
  for (let k = 0; k <= 8; k++) b += `<line x1="${ox}" y1="${oy - 100 + k * 25}" x2="${ox + W}" y2="${oy - 100 + k * 25}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
  let d = '';
  for (let x = 0; x <= W; x += 4) d += (x ? ' L' : 'M') + (ox + x) + ',' + (oy - 85 * Math.sin((x / W) * 2 * Math.PI * 1.5)).toFixed(1);
  b += path(d, { stroke: C.tealDark, w: 3 });
  for (let x = 0; x <= W; x += 34) {
    const y = oy - 85 * Math.sin((x / W) * 2 * Math.PI * 1.5);
    const q = oy - 100 + Math.round((y - (oy - 100)) / 25) * 25;
    b += `<line x1="${ox + x}" y1="${oy}" x2="${ox + x}" y2="${q}" stroke="${C.rust}" stroke-width="2.5"/><circle cx="${ox + x}" cy="${q}" r="5" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  }
  b += `<line x1="${ox}" y1="${oy}" x2="${ox + W}" y2="${oy}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<line x1="${ox}" y1="404" x2="${ox}" y2="416" stroke="${C.ink}" stroke-width="2.5"/><line x1="${ox + 34}" y1="404" x2="${ox + 34}" y2="416" stroke="${C.ink}" stroke-width="2.5"/><line x1="${ox}" y1="410" x2="${ox + 34}" y2="410" stroke="${C.ink}" stroke-width="2.5"/>` + t(ox + 46, 415, 'one sample per regular interval', { size: 15, fill: C.muted });
  b += t(482, 448, 'Sample rate = samples per second', { size: 17, weight: 700 });
  b += t(482, 476, 'Bit depth = bits per sample', { size: 17, weight: 700 });
  b += box(482, 494, 366, 66, C.tealLight, C.tealDark, 10) + t(665, 522, 'Higher values: a closer copy', { size: 16, anchor: 'middle', weight: 600 }) + t(665, 546, 'of the sound, and a larger file', { size: 16, anchor: 'middle', weight: 600 });
  add('05-images-and-sound',
    svg(900, 604, 'Images and sound in binary', b),
    'A bitmap image is a grid of pixels, each colour stored as a binary number; colour depth is bits per pixel, so 24 bits give about 16.7 million colours, and file size is width × height × colour depth. Sound is sampled: its amplitude is measured at regular intervals, the sample rate is samples per second and the bit depth is bits per sample.',
    'More bits per pixel or per sample means a truer copy and a bigger file.',
    '## How is data represented in binary?');
}

// 06 File size calculations
{
  let b = '';
  const calc = (y, title, given, steps, f, e) => {
    let s = box(30, y, 840, 280, f, e) + t(52, y + 36, title, { size: 20, weight: 700, fill: e });
    s += t(52, y + 66, given, { size: 16, fill: C.ink });
    steps.forEach(([k, expr, res], i) => {
      const yy = y + 90 + i * 72;
      s += box(52, yy, 110, 56, C.panel, e, 8) + t(107, yy + 35, k, { size: 17, weight: 700, anchor: 'middle' });
      s += t(182, yy + 35, expr, { size: 18 });
      s += box(580, yy, 268, 56, i === 1 ? C.mustard : C.panel, C.ink, 8) + t(714, yy + 35, res, { size: 18, weight: 700, anchor: 'middle' });
      s += arrow(530, yy + 28, 572, yy + 28, { w: 3 });
    });
    return s;
  };
  b += calc(110, 'Image', '1920 × 1080 pixels, colour depth 24 bits', [['bits', '1920 × 1080 × 24', '49,766,400 bits'], ['bytes', '49,766,400 ÷ 8', '6,220,800 bytes']], C.cream, C.olive);
  b += t(714, 366, 'about 6.2 MB', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += calc(410, 'Sound', '60 s, stereo (2 channels), 44,100 samples per second, bit depth 16', [['bits', '44,100 × 16 × 2 × 60', '84,672,000 bits'], ['bytes', '84,672,000 ÷ 8', '10,584,000 bytes']], C.tealLight, C.tealDark);
  b += t(714, 666, 'about 10.6 MB', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += box(30, 708, 840, 56, PINK, C.rust) + t(450, 743, 'Common slip: forgetting to divide by 8 to turn bits into bytes.', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  add('06-file-size-calculations',
    svg(900, 788, 'Calculating file sizes', b),
    'Image: 1920 × 1080 × 24 = 49,766,400 bits, divided by 8 = 6,220,800 bytes, about 6.2 MB. Sound: 44,100 samples per second × 16 bits × 2 channels × 60 seconds = 84,672,000 bits, divided by 8 = 10,584,000 bytes, about 10.6 MB.',
    'Multiply to get bits, then divide by 8 for bytes.',
    '## Worked example 1: calculating file sizes');
}

// 07 Denary to binary: flowchart and trace
{
  let b = '';
  const term = (cx, y, s) => `<rect x="${cx - 70}" y="${y}" width="140" height="44" rx="22" fill="${C.ink}"/>` + t(cx, y + 28, s, { size: 17, weight: 700, anchor: 'middle', fill: C.panel });
  const proc = (cx, y, w, lines, f = C.panel) => box(cx - w / 2, y, w, 26 + lines.length * 22, f, C.ink, 6) + lines.map((s, i) => mono(cx, y + 30 + i * 22, s, { size: 15, anchor: 'middle' })).join('');
  const cx = 220;
  b += term(cx, 110, 'START');
  b += arrow(cx, 154, cx, 176, { w: 3 });
  b += proc(cx, 180, 230, ['n <- 13', 'result <- ""']);
  b += arrow(cx, 250, cx, 274, { w: 3 });
  b += `<path d="M${cx},278 L${cx + 100},322 L${cx},366 L${cx - 100},322 Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + mono(cx, 328, 'n > 0 ?', { size: 16, anchor: 'middle', weight: 700 });
  b += arrow(cx, 366, cx, 392, { w: 3 }) + t(cx + 10, 386, 'yes', { size: 15, weight: 700, fill: C.tealDark });
  b += proc(cx, 396, 290, ['remainder <- n MOD 2'], C.tealLight);
  b += arrow(cx, 444, cx, 466, { w: 3 });
  b += proc(cx, 470, 290, ['result <- remainder + result'], C.tealLight);
  b += arrow(cx, 518, cx, 540, { w: 3 });
  b += proc(cx, 544, 290, ['n <- n DIV 2'], C.tealLight);
  b += path(`M${cx - 145},570 L40,570 L40,322 L${cx - 106},322`, { w: 3, extra: 'marker-end="url(#ah)"' });
  b += path(`M${cx + 100},322 L400,322 L400,640 L${cx + 4},640`, { w: 3 }) + t(330, 312, 'no', { size: 15, weight: 700, fill: C.rust });
  b += arrow(cx, 640, cx, 652, { w: 3 });
  b += proc(cx, 656, 200, ['OUTPUT result']);
  b += arrow(cx, 704, cx, 724, { w: 3 });
  b += term(cx, 728, 'END');
  // trace table
  const tx = 440, cw = [100, 100, 110, 110];
  const heads = [['n', '(start)'], ['remainder', ''], ['result', ''], ['n', '(end)']];
  const rows = [['13', '1', '"1"', '6'], ['6', '0', '"01"', '3'], ['3', '1', '"101"', '1'], ['1', '1', '"1101"', '0']];
  b += t(tx + 210, 132, 'Trace table', { size: 20, weight: 700, anchor: 'middle' });
  let x = tx;
  heads.forEach(([h, s], i) => { b += box(x, 150, cw[i], 62, C.ink, C.ink, 0) + t(x + cw[i] / 2, 176, h, { size: 16, weight: 700, anchor: 'middle', fill: C.panel }) + (s ? t(x + cw[i] / 2, 198, s, { size: 15, anchor: 'middle', fill: C.cream }) : ''); x += cw[i]; });
  rows.forEach((r, ri) => {
    let xx = tx;
    r.forEach((v, i) => { b += box(xx, 212 + ri * 54, cw[i], 54, ri === 3 && i === 2 ? C.mustard : ri % 2 ? C.bg : C.panel, C.panelEdge, 0) + mono(xx + cw[i] / 2, 245 + ri * 54, v, { size: 17, anchor: 'middle', weight: 600 }); xx += cw[i]; });
  });
  b += box(tx, 450, 420, 140, C.tealLight, C.tealDark, 12);
  b += t(tx + 20, 482, 'The loop stops when n is 0.', { size: 17, weight: 700, fill: C.tealDark });
  b += t(tx + 20, 514, 'Output:', { size: 17 }) + mono(tx + 96, 515, '1101', { size: 20, weight: 700 });
  b += t(tx + 20, 550, 'Check: 8 + 4 + 1 = 13', { size: 17, weight: 600 });
  b += t(tx + 20, 574, 'each remainder is joined to the front', { size: 15, fill: C.muted });
  add('07-denary-to-binary-trace',
    svg(900, 796, 'Denary to binary: flowchart and trace', b),
    'A flowchart of the algorithm: set n to 13 and result to empty; while n is greater than 0, find the remainder of n MOD 2, join it to the front of result and set n to n DIV 2; then output result. The trace table shows n going 13, 6, 3, 1, 0 with remainders 1, 0, 1, 1 and result building to "1101".',
    'Remainders joined to the front build 1101, which checks back to 13.',
    '## Worked example 2: an algorithm for denary to binary');
}

// 08 Case-study chain
{
  let b = '';
  b += box(30, 110, 840, 60, C.cream, C.olive) + t(450, 147, 'Scenario: school laptops are slow when many browser tabs are open', { size: 18, weight: 700, anchor: 'middle' });
  const steps = [
    ['RAM is full', C.panel],
    ['the OS moves pages to virtual memory on the SSD', C.panel],
    ['secondary storage is much slower than RAM', C.panel],
    ['the CPU waits', C.mustard],
  ];
  steps.forEach(([s, f], i) => {
    const y = 196 + i * 92;
    b += box(150, y, 600, 66, f, C.ink, 12) + t(450, y + 40, s, { size: 18, weight: 600, anchor: 'middle' });
    if (i < 3) b += arrow(450, y + 68, 450, y + 90, { w: 3.5 });
  });
  b += box(30, 578, 840, 66, C.tealLight, C.tealDark) + t(450, 618, 'Fix: adding RAM would reduce swapping.', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(450, 680, 'Name the concept, then link it to the details given in the scenario.', { size: 17, anchor: 'middle', fill: C.muted, weight: 600 });
  add('08-case-study-chain',
    svg(900, 706, 'Applying A.1 to a scenario', b),
    'A chain of reasoning for slow school laptops with many browser tabs open: RAM is full, so the operating system moves pages to virtual memory on the SSD; secondary storage is much slower than RAM, so the CPU waits. Adding RAM would reduce swapping.',
    'Marks come from linking each concept to the scenario’s details in a chain.',
    '## Applying A.1 to a case-study scenario');
}
