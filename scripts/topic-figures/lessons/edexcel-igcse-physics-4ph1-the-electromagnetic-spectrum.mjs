import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-the-electromagnetic-spectrum';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const circ = (cx, cy, r, fill = C.panel, stroke = C.ink, w = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const ln = (x1, y1, x2, y2, { color = C.ink, w = 3, dash = '' } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const box = (x, y, w, h, fill = C.panel, edge = C.ink, rx = 10, sw = 2.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const sine = (x0, x1, y0, L, A, { stroke = C.blue, w = 3 } = {}) => {
  const p = []; for (let x = x0; x <= x1 + 0.01; x += Math.min(2, L / 12)) p.push(`${x.toFixed(1)},${(y0 - A * Math.sin((2 * Math.PI * (x - x0)) / L)).toFixed(1)}`);
  return path(`M${p.join(' L')}`, { stroke, w });
};
const REG = ['radio waves', 'microwaves', 'infrared', 'visible light', 'ultraviolet', 'x-rays', 'gamma rays'];
const VIS = [['red', '#c8443a'], ['orange', '#e0812f'], ['yellow', '#e3c234'], ['green', '#4f9a4a'], ['blue', '#3b6fc0'], ['indigo', '#4b3f9e'], ['violet', '#8a4bb0']];

// 01 The spectrum: one continuous family, one speed
{
  let b = panel(30, 110, 840, 520);
  const x0 = 60, w = 780 / 7;
  // continuous gradient band
  b += `<defs><linearGradient id="emg" x1="0" x2="1"><stop offset="0" stop-color="#dfe7ef"/><stop offset="0.5" stop-color="${C.tealLight}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  b += `<rect x="${x0}" y="150" width="780" height="300" rx="10" fill="url(#emg)" stroke="${C.ink}" stroke-width="2.5"/>`;
  REG.forEach((n, i) => {
    const cx = x0 + w * i + w / 2;
    if (i) b += ln(x0 + w * i, 160, x0 + w * i, 440, { color: C.muted, w: 1.5, dash: '4 6' });
    const L = [90, 60, 40, 26, 17, 11, 7][i];
    b += sine(x0 + w * i + 10, x0 + w * (i + 1) - 10, 260, L, 26, { stroke: C.blue, w: 2.6 });
    if (i === 3) VIS.forEach(([, c], k) => (b += `<rect x="${x0 + w * i + 8 + k * ((w - 16) / 7)}" y="318" width="${(w - 16) / 7}" height="22" fill="${c}"/>`));
    const words = n.split(' ');
    b += tl(cx, 380, words, { size: 17, weight: 700, anchor: 'middle' }, 21);
  });
  b += arrow(70, 490, 830, 490, { color: C.rust, marker: 'ahR', w: 4 }) + t(450, 482, 'wavelength decreases', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }).replace('y="482"', 'y="478"');
  b += arrow(70, 540, 830, 540, { color: C.tealDark, marker: 'ahT', w: 4 }) + t(450, 530, 'frequency increases', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(450, 595, 'Continuous: no gaps, the regions merge into one another. Waves not to scale.', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 650, 840, 140, C.cream, C.olive);
  b += t(450, 690, 'All travel at 3.0 × 10⁸ m/s in free space', { size: 22, weight: 700, anchor: 'middle' });
  b += t(450, 724, 'v = f × λ with v fixed: shorter wavelength always means higher frequency.', { size: 17, anchor: 'middle' });
  b += t(450, 756, 'All are transverse waves and can travel through a vacuum.', { size: 17, anchor: 'middle', fill: C.muted });
  add('01-em-spectrum-order',
    svg(900, 810, 'The electromagnetic spectrum', b),
    'A continuous band of seven regions in order: radio waves, microwaves, infrared, visible light, ultraviolet, x-rays and gamma rays. From left to right the wavelength decreases and the frequency increases. All travel at 3.0 × 10⁸ m/s in free space, so by v = f × λ a shorter wavelength means a higher frequency.',
    'Radio to gamma: wavelength down, frequency up, same speed in free space.',
    '## A continuous spectrum with one speed (3.10)');
}

// 02 Visible spectrum zoom
{
  let b = panel(30, 110, 840, 420);
  const x0 = 170, W = 560, cw = W / 7;
  b += box(50, 200, 110, 90, '#f3d5cc', C.rust, 10, 2) + tl(105, 238, ['infrared'], { size: 17, weight: 700, anchor: 'middle' }) + t(105, 266, 'next to red', { size: 15, anchor: 'middle', fill: C.muted });
  b += box(740, 200, 110, 90, '#e8e0f2', '#8a4bb0', 10, 2) + tl(795, 238, ['ultraviolet'], { size: 17, weight: 700, anchor: 'middle' }) + t(795, 266, 'next to violet', { size: 15, anchor: 'middle', fill: C.muted });
  VIS.forEach(([n, c], i) => {
    b += `<rect x="${x0 + i * cw}" y="200" width="${cw}" height="90" fill="${c}"/>`;
    b += t(x0 + i * cw + cw / 2, 320, n, { size: 16, weight: 700, anchor: 'middle' });
  });
  b += `<rect x="${x0}" y="200" width="${W}" height="90" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(x0, 180, 'about 700 nm', { size: 16, weight: 700, anchor: 'start' }) + t(x0 + W, 180, 'about 400 nm', { size: 16, weight: 700, anchor: 'end' });
  b += t(450, 150, 'Visible light: the only part the eye detects', { size: 19, weight: 700, anchor: 'middle' });
  b += arrow(x0, 370, x0 + W, 370, { color: C.rust, marker: 'ahR', w: 4 }) + t(450, 395, 'decreasing wavelength', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }).replace('y="395"', 'y="400"');
  b += arrow(x0, 430, x0 + W, 430, { color: C.tealDark, marker: 'ahT', w: 4 }) + t(450, 460, 'increasing frequency', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(450, 505, '"infra" = below (red);  "ultra" = beyond (violet)', { size: 17, anchor: 'middle', fill: C.muted });
  add('02-visible-spectrum',
    svg(900, 550, 'The colours of the visible spectrum', b),
    'The visible spectrum from red at about 700 nm through orange, yellow, green, blue and indigo to violet at about 400 nm, with wavelength decreasing and frequency increasing. Infrared lies next to red and ultraviolet next to violet.',
    'Red sits next to infrared; violet sits next to ultraviolet.',
    '## The order (3.11)');
}

// 03 Worked example: radio vs x-ray
{
  const card = (x, title, lam, steps, ans, col) => panel(x, 110, 410, 270) + t(x + 24, 148, title, { size: 21, weight: 700, fill: col }) + t(x + 24, 182, lam, { size: 18 }) + tl(x + 24, 226, steps, { size: 18 }, 32) + box(x + 20, 302, 370, 56, C.tealLight, C.tealDark, 10) + t(x + 205, 338, ans, { size: 21, weight: 700, anchor: 'middle' });
  let b = card(30, 'Radio wave', 'λ = 1500 m', ['f = v / λ', '  = 3.0 × 10⁸ / 1500'], 'f = 2.0 × 10⁵ Hz', C.blue);
  b += card(460, 'X-ray', 'λ = 1.0 × 10⁻¹⁰ m', ['f = v / λ', '  = 3.0 × 10⁸ / 1.0 × 10⁻¹⁰'], 'f = 3.0 × 10¹⁸ Hz', C.rust);
  b += panel(30, 400, 840, 150, C.cream, C.olive);
  b += t(450, 445, '3.0 × 10¹⁸ ÷ 2.0 × 10⁵ = 1.5 × 10¹³', { size: 22, weight: 700, anchor: 'middle' });
  b += t(450, 485, 'The x-ray frequency is 1.5 × 10¹³ times larger,', { size: 18, anchor: 'middle' });
  b += t(450, 515, 'because its wavelength is that many times shorter.', { size: 18, anchor: 'middle' });
  add('03-frequency-comparison',
    svg(900, 570, 'Worked example: comparing frequencies', b),
    'A radio wave of wavelength 1500 m has f = 3.0 × 10⁸ / 1500 = 2.0 × 10⁵ Hz. An x-ray of wavelength 1.0 × 10⁻¹⁰ m has f = 3.0 × 10¹⁸ Hz. The x-ray frequency is 1.5 × 10¹³ times larger because its wavelength is that many times shorter.',
    'Same speed, so f = v / λ: a far shorter wavelength gives a far higher frequency.',
    '## The order (3.11)');
}

// 04 Uses and why they work
{
  const rows = [
    ['radio waves', 'broadcasting, communications', 'travel long distances through the atmosphere; can carry information'],
    ['microwaves', 'cooking', 'penetrate a few cm into food; absorbed by water molecules'],
    ['microwaves', 'satellite transmissions', 'pass through the atmosphere and cloud; sent as narrow beams'],
    ['infrared', 'heaters', 'hot objects emit it; objects that absorb it warm up'],
    ['infrared', 'night vision', 'warm bodies emit more infrared than cooler surroundings'],
    ['visible light', 'optical fibres', 'travels along glass fibres by total internal reflection'],
    ['visible light', 'photography', 'a lens focuses it onto a sensor or film that responds to it'],
    ['ultraviolet', 'fluorescent lamps', 'a coating absorbs ultraviolet and emits visible light'],
    ['x-rays', 'internal structure, medical', 'pass through soft tissue; absorbed by bone or metal'],
    ['gamma rays', 'sterilising food, equipment', 'penetrate packaging and kill bacteria, without heating'],
  ];
  const fills = { 'radio waves': '#dfe7ef', microwaves: '#e2ecee', infrared: '#f3d5cc', 'visible light': '#f2e7b8', ultraviolet: '#e8e0f2', 'x-rays': '#e3e6ea', 'gamma rays': '#dce9e7' };
  let b = box(30, 110, 840, 46, C.ink, C.ink, 10, 0) + t(50, 140, 'Radiation', { size: 17, weight: 700, fill: '#fff' }) + t(215, 140, 'Use', { size: 17, weight: 700, fill: '#fff' }) + t(500, 140, 'Property that makes it work', { size: 17, weight: 700, fill: '#fff' });
  rows.forEach(([r, u, p], i) => {
    const y = 164 + i * 64;
    b += box(30, y, 840, 58, fills[r], C.panelEdge, 8, 1.5);
    b += t(50, y + 36, r, { size: 17, weight: 700 });
    b += t(215, y + 36, u, { size: 16, weight: 600 });
    const words = p.split(' '); const L = ['']; words.forEach((wd) => { if ((L[L.length - 1] + ' ' + wd).length > 41) L.push(wd); else L[L.length - 1] = (L[L.length - 1] + ' ' + wd).trim(); });
    b += tl(500, y + (L.length === 1 ? 36 : 25), L, { size: 15 }, 20);
  });
  add('04-uses',
    svg(900, 164 + 10 * 64 + 20, 'Uses of electromagnetic waves', b),
    'A table of uses: radio waves for broadcasting and communications; microwaves for cooking and satellite transmissions; infrared for heaters and night vision; visible light for optical fibres and photography; ultraviolet for fluorescent lamps; x-rays for seeing internal structure; gamma rays for sterilising food and medical equipment. Each is paired with the property that makes it suitable.',
    'For each use, give the property of the radiation that makes it work.',
    '## Uses and why each works (3.12)');
}

// 05 X-ray image
{
  let b = panel(30, 110, 840, 440);
  b += box(60, 230, 80, 120, '#e3e6ea', C.ink, 8) + t(100, 380, 'x-ray', { size: 16, weight: 700, anchor: 'middle' }) + t(100, 400, 'source', { size: 16, weight: 700, anchor: 'middle' });
  // arm cross-section
  b += `<ellipse cx="420" cy="290" rx="90" ry="150" fill="#f2d9c4" stroke="${C.ink}" stroke-width="2.5"/>` + `<ellipse cx="420" cy="290" rx="30" ry="120" fill="#f4f1e6" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(420, 160, 'soft tissue', { size: 15, weight: 600, anchor: 'middle' }).replace('y="160"', 'y="132"') + t(420, 385, 'bone', { size: 15, weight: 700, anchor: 'middle' });
  // detector
  b += box(690, 140, 40, 300, '#3a4458', C.ink, 4) + t(710, 470, 'detector', { size: 16, weight: 700, anchor: 'middle' });
  b += `<rect x="690" y="${290 - 120}" width="40" height="240" fill="#f4f1e6" opacity="0.9"/>`;
  // rays
  [180, 220, 360, 400].forEach((y) => (b += arrow(145, 290 + (y - 290) * 0.4, 685, y, { color: C.tealDark, marker: 'ahT', w: 3 })));
  [260, 290, 320].forEach((y) => (b += ln(145, 290 + (y - 290) * 0.4, 392, y, { color: C.rust, w: 3 }) + `<text x="398" y="${y + 6}" font-size="18" font-weight="700" fill="${C.rust}">✕</text>`));
  b += tl(750, 210, ['dark where', 'x-rays', 'pass through'], { size: 15, weight: 600, fill: C.tealDark }, 19);
  b += tl(750, 290, ['light where', 'bone stops', 'them'], { size: 15, weight: 600, fill: C.rust }, 19);
  b += t(450, 528, 'The same principle checks welds and baggage.', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-x-ray-imaging',
    svg(900, 570, 'How an x-ray image is made', b),
    'X-rays from a source pass through the soft tissue of an arm and reach a detector, but are absorbed by the denser bone. The detector records where x-rays pass and where they are stopped, giving an image of the bone.',
    'X-rays pass through soft tissue but are absorbed by bone.',
    '## Uses and why each works (3.12)');
}

// 06 Hazards and protection
{
  const rows = [
    ['microwaves', 'internal heating of body tissue', 'metal case and metal mesh in the oven door; switches off when the door opens', '#e2ecee'],
    ['infrared', 'skin burns', 'keep a safe distance; guards on heaters; heat-resistant gloves', '#f3d5cc'],
    ['ultraviolet', 'damage to surface cells (sunburn, skin cancer risk) and blindness', 'sunscreen, covering clothing, hats, UV-blocking sunglasses; limit time in strong sun', '#e8e0f2'],
    ['gamma rays', 'cancer and mutation (damage to DNA)', 'lead or thick concrete shielding; distance; limit time; dose badges', '#dce9e7'],
  ];
  const wrap = (s, n) => { const o = ['']; for (const w of s.split(' ')) { const c = o[o.length - 1]; if ((c + ' ' + w).trim().length > n && c) o.push(w); else o[o.length - 1] = (c + ' ' + w).trim(); } return o; };
  let b = box(30, 110, 840, 46, C.ink, C.ink, 10, 0) + t(50, 140, 'Radiation', { size: 17, weight: 700, fill: '#fff' }) + t(210, 140, 'Harm from excessive exposure', { size: 17, weight: 700, fill: '#fff' }) + t(530, 140, 'Simple protection', { size: 17, weight: 700, fill: '#fff' });
  let y = 164;
  rows.forEach(([r, h, p, f]) => {
    const H1 = wrap(h, 28), P1 = wrap(p, 34), n = Math.max(H1.length, P1.length), hh = 30 + n * 22;
    b += box(30, y, 840, hh, f, C.panelEdge, 8, 1.5);
    b += t(50, y + hh / 2 + 6, r, { size: 17, weight: 700 });
    b += tl(210, y + 28, H1, { size: 16, weight: 600, fill: C.rust }, 22);
    b += tl(530, y + 28, P1, { size: 16 }, 22);
    y += hh + 8;
  });
  b += panel(30, y + 8, 840, 120, C.cream, C.olive);
  b += t(60, y + 44, 'X-rays have similar effects to gamma rays: radiographers stand behind shielding.', { size: 16, weight: 600 });
  b += t(60, y + 74, 'Broadly, higher frequency is more harmful: ultraviolet affects surface cells;', { size: 16 });
  b += t(60, y + 100, 'x-rays and gamma rays penetrate and can damage cells inside the body.', { size: 16 });
  add('06-hazards-protection',
    svg(900, y + 150, 'Harmful effects and protection', b),
    'A table. Microwaves cause internal heating of body tissue; ovens have a metal case and door mesh and switch off when opened. Infrared causes skin burns; keep a distance and use guards and gloves. Ultraviolet damages surface cells and can cause blindness; use sunscreen, clothing, hats and UV-blocking sunglasses. Gamma rays cause cancer and mutation; use lead or concrete shielding, distance, limited time and dose badges. Higher frequency is broadly more harmful.',
    'Name the specific harm, then the measure that cuts exposure to it.',
    '## Harmful effects and protection (3.13)');
}
