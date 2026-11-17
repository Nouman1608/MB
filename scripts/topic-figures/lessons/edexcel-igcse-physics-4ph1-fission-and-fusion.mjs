import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-fission-and-fusion';
export const figures = [];

// ---- local helpers (kept in this file; shared style lives in ../style.mjs) ----
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });
const ln = (x1, y1, x2, y2, { c = C.ink, w = 3, dash = '', cap = 'round' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="${cap}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const rect = (x, y, w, h, { fill = 'none', stroke = C.ink, sw = 3, rx = 0, extra = '' } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
const circ = (cx, cy, r, { fill = C.panel, stroke = C.ink, sw = 3 } = {}) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
// word-wrap to roughly n characters per line
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { const cur = out[out.length - 1]; if (cur && (cur + ' ' + w).length > n) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w; } return out; };
// text block that wraps to a pixel width
const para = (x, y, s, width, opts = {}, lh) => { const size = opts.size || 18; const lines = Array.isArray(s) ? s : wrap(s, Math.floor(width / (size * 0.54))); return tl(x, y, lines, opts, lh || size * 1.32); };
const nLines = (s, width, size = 18) => (Array.isArray(s) ? s.length : wrap(s, Math.floor(width / (size * 0.54))).length);
// card: panel with a bold title and wrapped body
const card = (x, y, w, h, title, body, { fill = C.panel, edge = C.panelEdge, size = 17, tsize = 21, tfill = C.ink, bfill = C.muted, pad = 22 } = {}) =>
  panel(x, y, w, h, fill, edge) + (title ? t(x + pad, y + pad + tsize * 0.8, title, { size: tsize, weight: 700, fill: tfill }) : '') +
  (body ? para(x + pad, y + pad + (title ? tsize * 0.8 + size * 1.55 : size), body, w - 2 * pad, { size, fill: bfill }) : '');
// axes with arrowheads; origin at (x0, y0) bottom-left; labels with units
const axes = (x0, y0, w, h, xlab, ylab, { size = 17 } = {}) =>
  arrow(x0, y0, x0 + w, y0, { w: 3 }) + arrow(x0, y0, x0, y0 - h, { w: 3 }) +
  t(x0 + w, y0 + 34, xlab, { size, anchor: 'end', weight: 600 }) +
  `<text x="${x0 - 22}" y="${y0 - h / 2}" font-size="${size}" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x0 - 22} ${y0 - h / 2})">${ylab}</text>`;
// ---- circuit symbols (centred at x, y; horizontal unless v = true). bg masks the wire under a gap. ----
const rot = (x, y, v, s) => (v ? `<g transform="rotate(90 ${x} ${y})">${s}</g>` : s);
const sCell = (x, y, { v = false, bg = C.panel } = {}) => rot(x, y, v,
  rect(x - 8, y - 26, 16, 52, { fill: bg, stroke: 'none', sw: 0 }) + ln(x - 7, y - 24, x - 7, y + 24, { w: 3, cap: 'butt' }) + ln(x + 7, y - 12, x + 7, y + 12, { w: 7, cap: 'butt' }));
const sBattery = (x, y, { v = false, bg = C.panel } = {}) => rot(x, y, v,
  rect(x - 26, y - 26, 52, 52, { fill: bg, stroke: 'none', sw: 0 }) + ln(x - 21, y - 24, x - 21, y + 24, { w: 3, cap: 'butt' }) + ln(x - 7, y - 12, x - 7, y + 12, { w: 7, cap: 'butt' }) +
  ln(x + 7, y - 24, x + 7, y + 24, { w: 3, cap: 'butt' }) + ln(x + 21, y - 12, x + 21, y + 12, { w: 7, cap: 'butt' }));
const sRes = (x, y, { v = false, fill = C.panel } = {}) => rot(x, y, v, rect(x - 30, y - 12, 60, 24, { fill, sw: 3 }));
const sLamp = (x, y, { v = false, bg = C.panel } = {}) => rot(x, y, v, circ(x, y, 18, { fill: bg }) + ln(x - 12.7, y - 12.7, x + 12.7, y + 12.7) + ln(x - 12.7, y + 12.7, x + 12.7, y - 12.7));
const sMeter = (x, y, letter, { bg = C.panel } = {}) => circ(x, y, 19, { fill: bg }) + t(x, y + 7, letter, { size: 20, weight: 700, anchor: 'middle' });
const sSwitch = (x, y, { v = false, bg = C.panel, closed = false } = {}) => rot(x, y, v,
  rect(x - 24, y - 8, 48, 16, { fill: bg, stroke: 'none', sw: 0 }) + circ(x - 20, y, 4, { fill: C.ink, sw: 0 }) + circ(x + 20, y, 4, { fill: C.ink, sw: 0 }) +
  (closed ? ln(x - 20, y, x + 20, y) : ln(x - 20, y, x + 18, y - 20)));
const wire = (pts, { c = C.ink, w = 3 } = {}) => `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linejoin="round"/>`;
const dot = (x, y, r = 5, fill = C.ink) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
// worked-example box: lines of [text, opts]
const steps = (x, y, w, rows, { fill = C.cream, edge = C.olive, lh = 34, size = 19, pad = 24 } = {}) =>
  panel(x, y, w, rows.length * lh + pad * 1.4, fill, edge) + rows.map((r, i) => {
    const [s, o = {}] = Array.isArray(r) ? r : [r];
    return t(x + pad + (o.dx || 0), y + pad + size * 0.9 + i * lh, s, { size, ...o });
  }).join('');
// ---- end helpers ----

// nuclide symbol: mass number over atomic number, left of the symbol
const nuc = (x, y, A, Z, sym, { size = 30, fill = C.ink } = {}) => {
  const s = size * 0.55;
  return t(x, y - size * 0.42, A, { size: s, weight: 700, anchor: 'end', fill }) + t(x, y + 2, Z, { size: s, weight: 700, anchor: 'end', fill }) + t(x + 3, y, sym, { size, weight: 700, fill });
};
const ball = (cx, cy, r, fill = C.teal, edge = C.tealDark) => circ(cx, cy, r, { fill, stroke: edge, sw: 2.5 });
const neutron = (cx, cy, r = 10) => circ(cx, cy, r, { fill: '#9aa8c0', stroke: C.ink, sw: 2 });
const blob = (cx, cy, r, n, seed = 1) => { let s = ''; let k = seed; for (let i = 0; i < n; i++) { k = (k * 9301 + 49297) % 233280; const a = (k / 233280) * Math.PI * 2; k = (k * 9301 + 49297) % 233280; const d = Math.sqrt(k / 233280) * (r - 9); s += circ(cx + d * Math.cos(a), cy + d * Math.sin(a), 8, { fill: i % 2 ? C.rust : '#9aa8c0', stroke: C.ink, sw: 1.5 }); } return circ(cx, cy, r, { fill: C.cream, stroke: C.olive, sw: 2.5 }) + s; };

// 01 Three nuclear energy sources
{
  const card3 = (x, title, sub, art, note, fill, edge) => panel(x, 110, 270, 330, fill, edge) + t(x + 135, 146, title, { size: 20, weight: 700, anchor: 'middle' }) + t(x + 135, 170, sub, { size: 15, anchor: 'middle', fill: C.muted }) + art + para(x + 20, 390, note, 230, { size: 15 }, 20);
  const decay = blob(110, 270, 40, 10, 3) + arrow(155, 250, 230, 210, { w: 3, color: C.rust, marker: 'ahR' }) + arrow(155, 280, 240, 290, { w: 3, color: C.olive, marker: 'ahO' }) + t(238, 200, 'α / β', { size: 16, weight: 700, fill: C.rust }) + t(246, 300, 'γ', { size: 18, weight: 700, fill: C.olive });
  const fis = neutron(345, 270) + arrow(357, 270, 380, 270, { w: 2.5 }) + blob(425, 270, 40, 12, 7) + arrow(468, 250, 510, 222, { w: 3 }) + arrow(468, 290, 510, 318, { w: 3 }) + blob(530, 210, 22, 4, 2) + blob(530, 330, 22, 4, 5);
  const fus = blob(650, 240, 20, 3, 4) + blob(650, 305, 20, 3, 8) + arrow(675, 245, 720, 265, { w: 3 }) + arrow(675, 300, 720, 280, { w: 3 }) + blob(775, 272, 30, 6, 9) + t(820, 230, 'energy', { size: 16, weight: 700, fill: C.olive, anchor: 'middle' });
  const body = card3(30, 'Radioactive decay', 'unstable nucleus emits', decay, 'Energy carried away by alpha, beta and gamma radiation.', C.panel, C.panelEdge) +
    card3(315, 'Fission', 'heavy nucleus splits', fis, 'Used in nuclear power stations.', C.cream, C.olive) +
    card3(600, 'Fusion', 'light nuclei join', fus, 'The energy source of stars.', C.tealLight, C.tealDark) +
    panel(30, 460, 840, 62) + t(450, 498, 'Each releases far more energy per kilogram than any chemical reaction, such as burning.', { size: 17, weight: 600, anchor: 'middle' });
  add('01-three-nuclear-energy-sources', svg(900, 545, 'Three nuclear reactions that release energy', body),
    'Three panels: radioactive decay, where an unstable nucleus emits alpha, beta or gamma radiation; fission, where a neutron splits a heavy nucleus into two smaller ones; and fusion, where two light nuclei join into a heavier one.',
    'Decay, fission and fusion all release far more energy per kilogram than burning.',
    '## Nuclear reactions as energy sources (7.17)');
}

// 02 Fission of U-235 step by step, with equation
{
  const y = 260;
  const body = panel(30, 110, 840, 330) +
    badge(70, 150, 17, '1', C.cream) + badge(300, 150, 17, '2', C.cream) + badge(490, 150, 17, '3', C.mustard) + badge(720, 150, 17, '4', C.cream) +
    neutron(70, y) + arrow(84, y, 130, y, { w: 3 }) + t(70, y + 40, 'slow', { size: 15, anchor: 'middle', fill: C.muted }) + t(70, y + 58, 'neutron', { size: 15, anchor: 'middle', fill: C.muted }) +
    blob(185, y, 50, 16, 11) + t(185, y + 80, 'U-235', { size: 17, weight: 700, anchor: 'middle' }) +
    arrow(242, y, 282, y, { w: 3 }) + `<ellipse cx="335" cy="${y}" rx="48" ry="62" fill="${C.cream}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="7 5"/>` + t(335, y + 6, 'U-236', { size: 17, weight: 700, anchor: 'middle' }) + t(335, y + 92, 'very unstable', { size: 15, anchor: 'middle', fill: C.rust }) +
    arrow(388, y - 15, 455, y - 70, { w: 3 }) + arrow(388, y + 15, 455, y + 70, { w: 3 }) +
    blob(490, y - 80, 34, 9, 13) + blob(490, y + 80, 30, 8, 17) + t(540, y - 76, 'Ba-141', { size: 16, weight: 700 }) + t(536, y + 84, 'Kr-92', { size: 16, weight: 700 }) +
    neutron(470, y) + neutron(500, y + 5) + neutron(530, y - 3) + t(560, y + 6, '3 neutrons', { size: 16, weight: 700 }) +
    arrow(570 + 90, y - 80, 690, y - 80, { w: 4, color: C.rust, marker: 'ahR' }) + arrow(570 + 90, y + 80, 690, y + 80, { w: 4, color: C.rust, marker: 'ahR' }) +
    para(705, y - 40, ['Products fly', 'apart: energy', 'is kinetic', 'energy of the', 'fission', 'products'], 160, { size: 15 }, 20) +
    panel(30, 460, 840, 190, C.cream, C.olive) +
    nuc(110, 530, '1', '0', 'n') + t(150, 530, '+', { size: 28, weight: 700, anchor: 'middle' }) + nuc(220, 530, '235', '92', 'U') + t(290, 530, '→', { size: 28, weight: 700, anchor: 'middle' }) +
    nuc(365, 530, '141', '56', 'Ba') + t(430, 530, '+', { size: 28, weight: 700, anchor: 'middle' }) + nuc(490, 530, '92', '36', 'Kr') + t(550, 530, '+', { size: 28, weight: 700, anchor: 'middle' }) + t(585, 530, '3', { size: 30, weight: 700, anchor: 'middle' }) + nuc(625, 530, '1', '0', 'n') +
    t(60, 585, 'Mass numbers: 1 + 235 = 141 + 92 + 3 = 236', { size: 18, weight: 600, fill: C.tealDark }) +
    t(60, 615, 'Atomic numbers: 0 + 92 = 56 + 36 + 0 = 92', { size: 18, weight: 600, fill: C.tealDark }) +
    t(845, 600, 'daughter nuclei are', { size: 15, anchor: 'end', fill: C.rust, weight: 600 }) + t(845, 620, 'radioactive (beta decay)', { size: 15, anchor: 'end', fill: C.rust, weight: 600 });
  add('02-fission-of-u235', svg(900, 670, 'Fission of uranium-235', body),
    'A slow neutron is absorbed by a uranium-235 nucleus, which becomes unstable uranium-236 and splits into barium-141 and krypton-92 plus three neutrons that fly apart. The equation n + U-235 → Ba-141 + Kr-92 + 3n balances: 236 = 236 and 92 = 92.',
    'Neutron in, nucleus splits: two radioactive daughter nuclei, two or three neutrons, and kinetic energy.',
    '## How fission happens (7.18, 7.19)');
}

// 03 Moderator vs control rods: opposite effects
{
  const L = panel(30, 110, 410, 330, C.tealLight, C.tealDark) + t(235, 148, 'Moderator', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(235, 172, 'graphite or water', { size: 15, anchor: 'middle', fill: C.muted }) +
    neutron(70, 240) + arrow(84, 240, 150, 240, { w: 5, color: C.rust, marker: 'ahR' }) + t(110, 222, 'fast', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 }) +
    path('M160,240 l20,-18 l20,30 l20,-26 l20,22 l20,-14', { stroke: C.tealDark, w: 3 }) + neutron(300, 244) + arrow(312, 244, 340, 244, { w: 2.5, color: C.tealDark, marker: 'ahT' }) + t(315, 222, 'slow', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 700 }) +
    blob(385, 244, 32, 8, 21) +
    para(55, 330, 'SLOWS neutrons down, so they are more likely to be absorbed by U-235 and cause fission.', 360, { size: 16 }, 22) +
    t(235, 415, 'more fissions likely', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const R = panel(460, 110, 410, 330, '#f6e3d6', C.rust) + t(665, 148, 'Control rods', { size: 21, weight: 700, anchor: 'middle', fill: C.rust }) + t(665, 172, 'boron or cadmium', { size: 15, anchor: 'middle', fill: C.muted }) +
    rect(720, 190, 34, 110, { fill: C.ink, sw: 0, rx: 3 }) + neutron(520, 240) + arrow(534, 240, 712, 240, { w: 3 }) + t(620, 225, 'neutron absorbed', { size: 15, anchor: 'middle', fill: C.muted }) +
    arrow(800, 290, 800, 210, { w: 3, color: C.muted }) + arrow(830, 210, 830, 290, { w: 3, color: C.muted }) + t(815, 318, 'raise / lower', { size: 15, anchor: 'middle', fill: C.muted }) +
    para(485, 330, 'ABSORB neutrons: lower them to slow the reaction, raise them to speed it up, fully in to shut down.', 360, { size: 16 }, 22) +
    t(665, 415, 'fewer fissions happen', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  const body = L + R + panel(30, 460, 840, 112) + t(55, 495, 'Shielding (thick steel and concrete)', { size: 18, weight: 700 }) +
    t(55, 523, 'absorbs the radiation that escapes from the core, especially neutrons and gamma rays,', { size: 16 }) + t(55, 547, 'protecting workers and the environment.', { size: 16 });
  add('03-moderator-vs-control-rods', svg(900, 595, 'Moderator and control rods: opposite jobs', body),
    'Left: a fast neutron bounces through the moderator, slows down and is then absorbed by a U-235 nucleus, making fission more likely. Right: a neutron is absorbed by a control rod, which can be raised or lowered, so fewer fissions happen. Shielding of steel and concrete absorbs escaping radiation.',
    'The moderator slows neutrons so more fissions happen; control rods absorb neutrons so fewer happen.',
    '## Inside the reactor (7.21, 7.22)');
}

// 04 Control rods keep power steady: explain chain
{
  const box = (x, y, w, h, s, fill = C.panel, edge = C.panelEdge) => panel(x, y, w, h, fill, edge) + para(x + 20, y + 34, s, w - 40, { size: 17, weight: 600 }, 23);
  const body = box(30, 115, 260, 110, 'Rate of fission rises') + arrow(292, 170, 318, 170, { w: 4 }) +
    box(320, 115, 260, 110, 'Control rods lowered further into the core') + arrow(582, 170, 608, 170, { w: 4 }) +
    box(610, 115, 260, 110, 'More neutrons absorbed: fewer fissions') + arrow(740, 228, 740, 258, { w: 4 }) +
    box(320, 262, 550, 100, 'Adjusted so on average ONE neutron from each fission causes another fission', C.tealLight, C.tealDark) + arrow(318, 312, 292, 312, { w: 4 }) +
    box(30, 262, 260, 100, 'Rate of fission and power output stay steady', C.cream, C.olive) +
    t(450, 400, 'Average of 1: steady.   More than 1: the number of fissions grows rapidly (1, 2 or 3, perhaps 9, 27 ...).', { size: 16, anchor: 'middle', fill: C.muted });
  add('04-control-rods-steady-output', svg(900, 425, 'How control rods keep the power steady', body),
    'A chain of boxes: if the rate of fission rises, the control rods are lowered further in, more neutrons are absorbed and fewer fissions occur. They are adjusted so that on average one neutron from each fission causes another, keeping the power output steady.',
    'Control rods hold the chain reaction at one further fission per fission.',
    '## Worked example: an "explain" answer');
}

// 05 Fission vs fusion
{
  const rows = [['What happens', 'A heavy nucleus splits', 'Light nuclei join'], ['Typical fuel', 'Uranium-235', 'Isotopes of hydrogen'], ['Trigger', 'Absorbing a neutron', 'Very high temperature and pressure'], ['Products', 'Two radioactive daughter nuclei + neutrons', 'A heavier nucleus (e.g. helium)'], ['Where used', 'Nuclear power stations', 'Stars']];
  let body = panel(30, 110, 840, 140) +
    neutron(80, 180) + arrow(92, 180, 118, 180, { w: 2.5 }) + blob(160, 180, 36, 12, 5) + arrow(200, 180, 240, 160, { w: 3 }) + arrow(200, 180, 240, 200, { w: 3 }) + blob(262, 150, 20, 4, 3) + blob(262, 210, 20, 4, 9) + t(310, 186, 'FISSION: splits', { size: 18, weight: 700, fill: C.olive }) +
    blob(520, 155, 18, 2, 4) + blob(520, 205, 18, 3, 6) + arrow(542, 160, 585, 175, { w: 3 }) + arrow(542, 200, 585, 185, { w: 3 }) + blob(620, 180, 28, 5, 12) + t(665, 186, 'FUSION: joins', { size: 18, weight: 700, fill: C.tealDark }) +
    t(310 + 0, 206, '', {});
  body += t(370, 290, 'Fission', { size: 19, weight: 700, anchor: 'middle', fill: C.olive }) + t(700, 290, 'Fusion', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([a, b, c], i) => {
    const y = 305 + i * 56;
    body += rect(30, y, 840, 52, { fill: i % 2 ? C.panel : '#fbfcfc', stroke: C.panelEdge, sw: 1.5 }) + t(45, y + 32, a, { size: 16, weight: 700 }) + t(210, y + 32, b, { size: 16 }) + t(560, y + 32, c, { size: 16 });
  });
  body += panel(30, 595, 840, 62, C.cream, C.olive) + t(450, 632, 'Both release energy. Fission splits one large nucleus; fusion joins small nuclei into a larger one.', { size: 16, weight: 600, anchor: 'middle' });
  add('05-fission-vs-fusion', svg(900, 680, 'Fission versus fusion', body),
    'Fission: a neutron splits a heavy uranium-235 nucleus into two radioactive daughter nuclei and neutrons, used in power stations. Fusion: light hydrogen nuclei join into a heavier nucleus such as helium at very high temperature and pressure, as in stars.',
    'Fission splits a large nucleus; fusion joins small ones. Both release energy.',
    '## Fission versus fusion (7.23)');
}
