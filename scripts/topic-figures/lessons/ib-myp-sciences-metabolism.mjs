import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-sciences-metabolism';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---------- local helpers ----------
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { if ((out[out.length - 1] + ' ' + w).trim().length > n) out.push(w); else out[out.length - 1] = (out[out.length - 1] + ' ' + w).trim(); } return out; };
const chip = (x, y, w, h, s, fill, { size = 17, weight = 700, edge = C.ink } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${edge}" stroke-width="2.2"/>` + t(x + w / 2, y + h / 2 + size * 0.35, s, { size, weight, anchor: 'middle' });
const axes = (ox, oy, w, h, xl, yl, size = 16, off = 50) => `<line x1="${ox}" y1="${oy}" x2="${ox + w}" y2="${oy}" stroke="${C.ink}" stroke-width="3"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h}" stroke="${C.ink}" stroke-width="3"/>` +
  t(ox + w / 2, oy + 44, xl, { size, weight: 600, anchor: 'middle' }) +
  `<text x="${ox - off}" y="${oy - h / 2}" font-size="${size}" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${ox - off} ${oy - h / 2})">${yl}</text>`;
const bead = (x, y, f = C.teal, r = 14) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${C.ink}" stroke-width="2.2"/>`;
const syringe = (x, y, len, filled, label) => {
  let o = `<rect x="${x}" y="${y - 18}" width="${len}" height="36" rx="4" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`;
  o += `<rect x="${x + 2}" y="${y - 16}" width="${filled}" height="32" fill="${C.tealLight}"/>`;
  for (let k = 0; k <= 10; k++) o += `<line x1="${x + 10 + k * ((len - 20) / 10)}" y1="${y - 18}" x2="${x + 10 + k * ((len - 20) / 10)}" y2="${y - (k % 5 ? 10 : 4)}" stroke="${C.ink}" stroke-width="1.5"/>`;
  o += `<rect x="${x + filled}" y="${y - 16}" width="8" height="32" fill="${C.ink}"/><line x1="${x + filled + 8}" y1="${y}" x2="${x + len + 40}" y2="${y}" stroke="${C.ink}" stroke-width="4"/><rect x="${x + len + 40}" y="${y - 18}" width="8" height="36" fill="${C.ink}"/>`;
  return o + (label ? t(x + len / 2, y + 40, label, { size: 15, anchor: 'middle', weight: 600 }) : '');
};

// 01 Anabolic vs catabolic
{
  let b = panel(30, 110, 410, 380) + panel(460, 110, 410, 380);
  b += t(235, 150, 'Anabolic: build up', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(665, 150, 'Catabolic: break down', { size: 21, weight: 700, anchor: 'middle', fill: C.rust });
  [0, 1, 2, 3].forEach((k) => { b += bead(90 + k * 40, 220 + (k % 2) * 16); });
  b += arrow(235, 250, 235, 310, { w: 4, color: C.tealDark, marker: 'ahT' });
  b += `<line x1="115" y1="350" x2="355" y2="350" stroke="${C.ink}" stroke-width="4"/>` + [0, 1, 2, 3, 4, 5, 6].map((k) => bead(115 + k * 40, 350)).join('');
  b += `<rect x="290" y="200" width="120" height="44" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + t(350, 228, 'energy in', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += tl(60, 410, ['e.g. photosynthesis; glucose → starch;', 'amino acids → proteins'], { size: 16, fill: C.muted }, 22);
  b += `<line x1="545" y1="220" x2="785" y2="220" stroke="${C.ink}" stroke-width="4"/>` + [0, 1, 2, 3, 4, 5, 6].map((k) => bead(545 + k * 40, 220, C.cream)).join('');
  b += arrow(665, 250, 665, 310, { w: 4, color: C.rust, marker: 'ahR' });
  [0, 1, 2, 3].forEach((k) => { b += bead(530 + k * 40, 350 + (k % 2) * 16, C.cream); });
  b += `<rect x="720" y="330" width="130" height="44" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + t(785, 358, 'energy out', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += tl(490, 410, ['e.g. respiration; digestion', '(often releases energy)'], { size: 16, fill: C.muted }, 22);
  b += panel(30, 510, 840, 90, C.cream, C.olive) + t(450, 548, 'Metabolism = the sum of all the chemical reactions in an organism', { size: 19, weight: 700, anchor: 'middle' }) +
    t(450, 578, 'Digestion’s small products feed the anabolic reactions in cells.', { size: 16, anchor: 'middle', fill: C.muted });
  add('01-anabolic-catabolic',
    svg(900, 620, 'Two kinds of metabolic reaction', b),
    'Left: anabolic reactions join small units into a large molecule and need energy in, as in photosynthesis, glucose to starch and amino acids to proteins. Right: catabolic reactions break a large molecule into small units and often release energy, as in respiration and digestion.',
    'Anabolic reactions build and need energy; catabolic reactions break down and often release it.',
    '## Metabolism: the big picture');
}

// 02 Lock and key
{
  let b = panel(30, 110, 840, 360);
  const enz = (x, y) => `<path d="M${x - 70},${y + 60} L${x - 70},${y} L${x - 25},${y} L${x - 25},${y + 25} Q${x},${y + 45} ${x + 25},${y + 25} L${x + 25},${y} L${x + 70},${y} L${x + 70},${y + 60} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  const sub = (x, y, f = C.mustard) => `<path d="M${x - 25},${y - 30} L${x + 25},${y - 30} L${x + 25},${y} Q${x},${y + 20} ${x - 25},${y} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const y = 300;
  b += enz(130, y) + sub(130, y - 40) + t(130, y + 95, 'enzyme + substrate', { size: 16, weight: 700, anchor: 'middle' });
  b += arrow(130, 195, 130, 222, { w: 3 });
  b += arrow(215, y + 30, 265, y + 30, { w: 3.5 });
  b += enz(350, y) + sub(350, y + 25) + t(350, y + 95, 'enzyme–substrate', { size: 16, weight: 700, anchor: 'middle' }) + t(350, y + 115, 'complex', { size: 16, weight: 700, anchor: 'middle' });
  b += arrow(435, y + 30, 485, y + 30, { w: 3.5 });
  b += enz(570, y) + `<path d="M${545},${y - 70} L${568},${y - 70} L${568},${y - 30} Q${556},${y - 22} ${545},${y - 30} Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5" transform="rotate(-15 556 ${y - 50})"/>` + `<path d="M${575},${y - 70} L${598},${y - 70} L${598},${y - 30} Q${587},${y - 22} ${575},${y - 30} Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5" transform="rotate(15 587 ${y - 50})"/>`;
  b += t(570, y + 95, 'products leave;', { size: 16, weight: 700, anchor: 'middle' }) + t(570, y + 115, 'enzyme reused', { size: 16, weight: 700, anchor: 'middle' });
  // wrong shape
  b += `<line x1="680" y1="150" x2="680" y2="440" stroke="${C.panelEdge}" stroke-width="2"/>`;
  b += enz(775, y) + `<circle cx="775" cy="${y - 50}" r="26" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M755,${y - 18} L795,${y + 12} M795,${y - 18} L755,${y + 12}`, { stroke: C.rust, w: 4 });
  b += t(775, y + 95, 'wrong shape:', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + t(775, y + 115, 'no fit', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(130, 160, 'active site', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark }) + t(130, 180, '(complementary shape)', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 490, 840, 80, C.cream, C.olive) + t(450, 538, 'Specific: amylase breaks down starch, not protein.', { size: 19, weight: 700, anchor: 'middle' });
  add('02-lock-and-key',
    svg(900, 590, 'How an enzyme works: lock and key', b),
    'An enzyme’s active site has a shape complementary to its substrate. The substrate fits to form an enzyme–substrate complex, the products leave and the enzyme is reused. A molecule of the wrong shape does not fit, which is why enzymes are specific.',
    'Only a substrate that matches the active site can react; the enzyme is not used up.',
    '## Enzymes');
}

// 03 Temperature data
{
  let b = panel(30, 110, 840, 510);
  const ox = 140, oy = 500, W = 440, H = 320;
  b += axes(ox, oy, W, H, 'temperature (°C)', 'rate, 1000/time (s⁻¹ × 10⁻³)');
  const X = (T) => ox + ((T - 10) / 50) * W, Y = (r) => oy - (r / 28) * H;
  b += `<rect x="${X(25)}" y="${oy - H}" width="${X(45) - X(25)}" height="${H}" fill="${C.cream}" opacity="0.8"/>` + t((X(25) + X(45)) / 2, oy - 40, 'true optimum', { size: 15, anchor: 'middle', fill: C.olive, weight: 700 }) + t((X(25) + X(45)) / 2, oy - 20, 'somewhere here', { size: 15, anchor: 'middle', fill: C.olive, weight: 700 });
  const pts = [[15, 5.56, '5.56'], [25, 11.1, '11.1'], [35, 25.0, '25.0'], [45, 16.7, '16.7'], [55, 3.33, '3.33']];
  b += path('M' + pts.map(([T, r]) => `${X(T)},${Y(r)}`).join(' L'), { stroke: C.tealDark, w: 3 });
  pts.forEach(([T, r, lbl]) => { b += path(`M${X(T) - 7},${Y(r) - 7} L${X(T) + 7},${Y(r) + 7} M${X(T) + 7},${Y(r) - 7} L${X(T) - 7},${Y(r) + 7}`, { w: 3 }) + t(X(T) + (T === 35 ? 0 : 12), Y(r) - (T === 35 ? 14 : 10), lbl, { size: 15, weight: 700, anchor: T === 35 ? 'middle' : 'start' }); });
  [15, 25, 35, 45, 55].forEach((T) => { b += t(X(T), oy + 22, String(T), { size: 15, anchor: 'middle' }) + `<line x1="${X(T)}" y1="${oy}" x2="${X(T)}" y2="${oy + 6}" stroke="${C.ink}" stroke-width="2"/>`; });
  [0, 10, 20].forEach((r) => { b += t(ox - 10, Y(r) + 5, String(r), { size: 15, anchor: 'end' }) + `<line x1="${ox - 6}" y1="${Y(r)}" x2="${ox}" y2="${Y(r)}" stroke="${C.ink}" stroke-width="2"/>`; });
  // right notes
  b += `<rect x="620" y="150" width="230" height="140" rx="12" fill="${C.tealLight}"/>` + t(636, 180, 'Rising side', { size: 18, weight: 700, fill: C.tealDark }) + tl(636, 206, ['faster molecules, more', 'collisions, more', 'enzyme–substrate', 'complexes'], { size: 15 }, 19);
  b += `<rect x="620" y="305" width="230" height="140" rx="12" fill="#f6d9c6"/>` + t(636, 335, 'Falling side', { size: 18, weight: 700, fill: C.rust }) + tl(636, 361, ['bonds break, active', 'site changes shape:', 'enzyme denatured', '(permanent)'], { size: 15 }, 19);
  b += tl(620, 480, ['Improve: repeat at 2 °C', 'steps from 30 to 44 °C.'], { size: 15, weight: 600, fill: C.olive }, 20);
  b += t(450, 600, 'Amylase timed to clear starch: 180, 90, 40, 60, 300 s at 15 to 55 °C.', { size: 15, anchor: 'middle', fill: C.muted });
  add('03-enzyme-temperature-data',
    svg(900, 640, 'Processing enzyme data', b),
    'Rate (1000/time) for amylase against temperature: 5.56 at 15 °C, 11.1 at 25 °C, a peak of 25.0 at 35 °C, 16.7 at 45 °C and 3.33 at 55 °C. The band from 25 to 45 °C is shaded because the true optimum could lie anywhere in it. Rate rises with more collisions, then falls as the active site changes shape and the enzyme is denatured.',
    'Peak at about 35 °C; with 10 °C steps the true optimum is only known to lie between 25 and 45 °C.',
    '## Enzymes');
}

// 04 Aerobic vs anaerobic respiration
{
  const cols = [
    ['Aerobic', 'uses oxygen', ['glucose + oxygen →', 'carbon dioxide + water'], 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O', 'mainly in mitochondria', 1.0, C.tealLight],
    ['Anaerobic: muscles', 'no oxygen', ['glucose →', 'lactic acid'], 'oxygen debt afterwards', 'during hard exercise', 0.25, '#f6d9c6'],
    ['Anaerobic: yeast', 'no oxygen; fermentation', ['glucose →', 'ethanol + carbon dioxide'], 'also in plants', '', 0.25, C.cream],
  ];
  let b = '';
  cols.forEach(([n, s, eq, sym, where, e, f], i) => {
    const x = 30 + i * 285, w = 270;
    b += panel(x, 110, w, 480, f, C.panelEdge) + t(x + w / 2, 150, n, { size: 20, weight: 700, anchor: 'middle' }) + t(x + w / 2, 176, s, { size: 15, anchor: 'middle', fill: C.muted });
    b += `<rect x="${x + 15}" y="196" width="${w - 30}" height="80" rx="10" fill="#fff"/>` + tl(x + w / 2, 228, eq, { size: 17, weight: 700, anchor: 'middle' }, 24);
    b += tl(x + w / 2, 310, wrap(sym, 26), { size: 15, anchor: 'middle', fill: C.ink }, 20) + t(x + w / 2, 352, where, { size: 15, anchor: 'middle', fill: C.muted });
    b += t(x + w / 2, 400, 'energy released per glucose', { size: 15, weight: 600, anchor: 'middle' });
    b += `<rect x="${x + 40}" y="420" width="${w - 80}" height="140" fill="#fff" stroke="${C.ink}" stroke-width="2"/>` + `<rect x="${x + 40}" y="${420 + 140 * (1 - e)}" width="${w - 80}" height="${140 * e}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
    b += t(x + w / 2, 410 + 140 * (1 - e) + (e > 0.5 ? 40 : -6), e > 0.5 ? 'much more' : 'much less', { size: 16, weight: 700, anchor: 'middle' });
  });
  b += t(450, 615, 'Bar heights show “much more” and “much less” only; glucose is only partly broken down without oxygen.', { size: 15, anchor: 'middle', fill: C.muted });
  add('04-aerobic-anaerobic',
    svg(900, 640, 'Aerobic and anaerobic respiration', b),
    'Three columns. Aerobic respiration uses oxygen: glucose + oxygen → carbon dioxide + water, mainly in mitochondria. Anaerobic respiration in muscles: glucose → lactic acid, leaving an oxygen debt. Anaerobic respiration in yeast (fermentation) and plants: glucose → ethanol + carbon dioxide. Anaerobic respiration releases much less energy per glucose.',
    'Without oxygen, glucose is only partly broken down, so much less energy is released.',
    '## Respiration');
}

// 05 Yeast respiration apparatus
{
  let b = panel(30, 110, 840, 480);
  // water bath
  b += `<rect x="70" y="300" width="300" height="200" rx="6" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + t(220, 485, 'water bath, 30 °C', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  // flask
  b += `<path d="M195,220 L195,300 L130,440 Q125,455 140,455 L300,455 Q315,455 310,440 L245,300 L245,220 Z" fill="#fff" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += `<path d="M160,380 L280,380 L310,440 Q315,455 300,455 L140,455 Q125,455 130,440 Z" fill="${C.cream}"/>` + [[170, 420], [200, 400], [240, 430], [265, 410], [220, 445]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="${C.olive}"/>`).join('');
  b += `<rect x="188" y="205" width="64" height="22" rx="4" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
  b += path('M220,205 L220,170 L470,170 L470,250', { w: 4 });
  b += syringe(470, 260, 300, 120, '').replace(/x="470" y="242"/, 'x="470" y="242"');
  b += t(620, 315, 'gas syringe: 18 cm³ collected', { size: 16, weight: 700, anchor: 'middle' });
  b += lead(380, 530, 'yeast in sugar solution');
  function lead(x, y, s) { return `<line x1="${x}" y1="${y}" x2="290" y2="425" stroke="${C.ink}" stroke-width="1.8"/>` + t(x + 6, y + 5, s, { size: 16, weight: 600 }); }
  b += t(310, 160, 'CO₂ travels along the tube', { size: 15, fill: C.muted });
  b += `<rect x="470" y="360" width="380" height="140" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` +
    t(490, 396, 'rate = volume ÷ time', { size: 18, weight: 700 }) + t(490, 432, '= 18 ÷ 5', { size: 18 }) + t(490, 470, '= 3.6 cm³ min⁻¹', { size: 22, weight: 700, fill: C.olive });
  b += t(450, 568, 'Always give the unit: a rate with no unit can lose marks.', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  add('05-yeast-respiration-rate',
    svg(900, 610, 'Measuring the rate of respiration', b),
    'A flask of yeast in sugar solution sits in a 30 °C water bath. Carbon dioxide passes along a delivery tube into a gas syringe, which collects 18 cm³ in 5 minutes. Rate = 18 ÷ 5 = 3.6 cm³ per minute.',
    'Rate = volume of gas ÷ time, always with its unit.',
    '## Respiration');
}

// 06 Limiting factors + inverse square
{
  let b = panel(30, 110, 840, 420);
  const ox = 130, oy = 450, W = 480, H = 270;
  b += axes(ox, oy, W, H, 'light intensity', 'rate of photosynthesis', 16, 22);
  const curve = (pl) => { let d = `M${ox},${oy}`; for (let x = 4; x <= W - 10; x += 4) d += ` L${ox + x},${(oy - pl * (1 - Math.exp(-x / 110))).toFixed(1)}`; return d; };
  b += path(curve(150), { stroke: C.tealDark, w: 4 }) + path(curve(240), { stroke: C.olive, w: 4, extra: 'stroke-dasharray="12 7"' });
  b += t(ox + W - 10, oy - 158, 'low CO₂', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark }) + t(ox + W - 10, oy - 248, 'high CO₂', { size: 16, weight: 700, anchor: 'end', fill: C.olive });
  b += `<line x1="${ox + 45}" y1="${oy - 75}" x2="${ox + 70}" y2="${oy - 200}" stroke="${C.rust}" stroke-width="2"/>` + t(ox + 20, oy - 228, 'rising: light', { size: 15, weight: 700, fill: C.rust }) + t(ox + 20, oy - 210, 'is limiting', { size: 15, weight: 700, fill: C.rust });
  b += t(ox + 330, oy - 120, 'plateau: something else', { size: 15, weight: 700, anchor: 'middle' }) + t(ox + 330, oy - 102, 'limits (CO₂ here)', { size: 15, weight: 700, anchor: 'middle' });
  b += tl(650, 170, ['Limiting factor:', 'the one in shortest', 'supply. Increase it', 'and the rate rises.'], { size: 16, weight: 600 }, 22);
  b += tl(650, 290, ['Factors: light', 'intensity, CO₂', 'concentration and', 'temperature (too hot', 'lowers the rate).'], { size: 15, fill: C.muted }, 20);
  // inverse square
  b += panel(30, 550, 840, 230) + t(60, 588, 'Moving the lamp: intensity ∝ 1/d²', { size: 20, weight: 700 });
  const lampX = 110;
  b += `<circle cx="${lampX}" cy="690" r="22" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(lampX, 740, 'lamp', { size: 15, anchor: 'middle', fill: C.muted });
  const plant = (x, lbl, I) => `<rect x="${x - 10}" y="680" width="20" height="40" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>` + t(x, 660, lbl, { size: 16, weight: 700, anchor: 'middle' }) + t(x, 750, I, { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  const sc = 26;
  b += plant(lampX + 5 * sc, '5 cm', '× 4') + plant(lampX + 10 * sc, '10 cm', 'start') + plant(lampX + 20 * sc, '20 cm', '× ¼');
  b += `<line x1="${lampX + 24}" y1="700" x2="${lampX + 20 * sc + 40}" y2="700" stroke="${C.mustard}" stroke-width="2" stroke-dasharray="6 6"/>`;
  b += tl(700, 650, ['Double the distance:', 'a quarter of the light,', 'not half.'], { size: 16, weight: 600, fill: C.rust }, 22);
  add('06-limiting-factors',
    svg(900, 800, 'Photosynthesis and limiting factors', b, 'Curve shapes only'),
    'Rate of photosynthesis against light intensity rises then levels off; at higher carbon dioxide the plateau is higher, so carbon dioxide was limiting there. Below, a plant at 10 cm from a lamp moved to 5 cm gets four times the light intensity, and moved to 20 cm gets a quarter, because intensity is proportional to 1/d².',
    'On the rising part light limits the rate; on the plateau something else does.',
    '## Photosynthesis');
}

// 07 Digestion enzymes
{
  const rows = [
    ['Amylase', 'a carbohydrase', 'starch', 'maltose (then glucose)', 'salivary glands, pancreas', 'chain'],
    ['Protease', 'e.g. pepsin', 'proteins', 'amino acids', 'stomach, pancreas, small intestine', 'mixed'],
    ['Lipase', '', 'lipids (fats)', 'fatty acids and glycerol', 'pancreas, small intestine', 'fat'],
  ];
  let b = '';
  rows.forEach(([n, s, sub, prod, made, kind], i) => {
    const y = 110 + i * 170;
    b += panel(30, y, 840, 156);
    b += t(60, y + 40, n, { size: 22, weight: 700 }) + (s ? t(60, y + 64, s, { size: 15, fill: C.muted }) : '');
    // substrate picture
    if (kind === 'chain') { b += `<line x1="230" y1="${y + 80}" x2="390" y2="${y + 80}" stroke="${C.ink}" stroke-width="3"/>` + [0, 1, 2, 3, 4].map((k) => `<polygon points="${235 + k * 36},${y + 68} ${255 + k * 36},${y + 68} ${262 + k * 36},${y + 80} ${255 + k * 36},${y + 92} ${235 + k * 36},${y + 92} ${228 + k * 36},${y + 80}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>`).join(''); }
    if (kind === 'mixed') { b += `<line x1="230" y1="${y + 80}" x2="390" y2="${y + 80}" stroke="${C.ink}" stroke-width="3"/>` + [0, 1, 2, 3, 4].map((k) => bead(240 + k * 36, y + 80, [C.teal, C.mustard, C.rust, C.teal, '#c9b6dd'][k], 13)).join(''); }
    if (kind === 'fat') { b += `<rect x="232" y="${y + 50}" width="14" height="62" rx="4" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + [0, 1, 2].map((k) => `<line x1="246" y1="${y + 60 + k * 21}" x2="380" y2="${y + 60 + k * 21}" stroke="${C.olive}" stroke-width="7" stroke-linecap="round"/>`).join(''); }
    b += t(310, y + 130, sub, { size: 17, weight: 700, anchor: 'middle' });
    b += arrow(410, y + 80, 480, y + 80, { w: 4 }) + t(445, y + 66, n.toLowerCase(), { size: 14, anchor: 'middle', fill: C.muted }).replace('font-size="14"', 'font-size="15"');
    // product picture
    if (kind === 'chain') { b += [0, 1].map((k) => `<line x1="${500 + k * 80}" y1="${y + 80}" x2="${560 + k * 80}" y2="${y + 80}" stroke="${C.ink}" stroke-width="3"/>` + [0, 1].map((j) => `<polygon points="${505 + k * 80 + j * 36},${y + 68} ${525 + k * 80 + j * 36},${y + 68} ${532 + k * 80 + j * 36},${y + 80} ${525 + k * 80 + j * 36},${y + 92} ${505 + k * 80 + j * 36},${y + 92} ${498 + k * 80 + j * 36},${y + 80}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>`).join('')).join(''); }
    if (kind === 'mixed') { b += [0, 1, 2, 3, 4].map((k) => bead(505 + k * 34, y + 80 + (k % 2 ? 10 : -10), [C.teal, C.mustard, C.rust, C.teal, '#c9b6dd'][k], 13)).join(''); }
    if (kind === 'fat') { b += `<rect x="500" y="${y + 50}" width="14" height="62" rx="4" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + [0, 1, 2].map((k) => `<line x1="${540 + k * 8}" y1="${y + 56 + k * 22}" x2="${640 + k * 8}" y2="${y + 56 + k * 22}" stroke="${C.olive}" stroke-width="7" stroke-linecap="round"/>`).join(''); }
    b += t(590, y + 130, prod, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    b += tl(700, y + 60, ['made in:', ...wrap(made, 18)], { size: 15, fill: C.muted }, 20);
  });
  b += panel(30, 620, 840, 110, C.cream, C.olive) + t(60, 658, 'Bile is not an enzyme.', { size: 19, weight: 700 }) +
    t(60, 690, 'Made in the liver, stored in the gall bladder: it emulsifies fats into small droplets', { size: 16 }) + t(60, 714, '(more surface area for lipase) and neutralises stomach acid.', { size: 16 });
  add('07-digestive-enzymes',
    svg(900, 750, 'Digestive enzymes', b),
    'Amylase breaks starch into maltose and then glucose, made in the salivary glands and pancreas. Protease, such as pepsin, breaks proteins into amino acids, made in the stomach, pancreas and small intestine. Lipase breaks lipids into fatty acids and glycerol, made in the pancreas and small intestine. Bile is not an enzyme: it emulsifies fats and neutralises stomach acid.',
    'Each enzyme breaks one kind of large molecule into small, soluble ones.',
    '## Digestion basics');
}

// 08 Catalase investigation
{
  let b = panel(30, 110, 840, 400);
  b += `<rect x="70" y="300" width="270" height="170" rx="6" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + t(205, 458, 'water bath (temperature controlled)', { size: 15, weight: 600, anchor: 'middle', fill: C.tealDark });
  b += `<path d="M180,220 L180,420 Q180,440 200,440 Q220,440 220,420 L220,220" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<path d="M182,330 L218,330 L218,420 Q218,438 200,438 Q182,438 182,420 Z" fill="#f3efd8"/>`;
  b += `<rect x="190" y="390" width="20" height="36" rx="3" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>`;
  [[195, 370], [205, 352], [200, 340]].forEach(([x, y]) => { b += `<circle cx="${x}" cy="${y}" r="4" fill="#fff" stroke="${C.ink}" stroke-width="1.5"/>`; });
  b += `<rect x="174" y="205" width="52" height="20" rx="4" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
  b += path('M200,205 L200,170 L470,170 L470,240', { w: 4 });
  b += syringe(470, 250, 300, 90, '') + t(620, 305, 'gas syringe: O₂ volume at 60 s', { size: 16, weight: 700, anchor: 'middle' });
  b += `<line x1="230" y1="408" x2="380" y2="380" stroke="${C.ink}" stroke-width="1.8"/>` + t(386, 385, 'potato cylinder (same size)', { size: 15, weight: 600 });
  b += `<line x1="226" y1="345" x2="380" y2="345" stroke="${C.ink}" stroke-width="1.8"/>` + t(386, 350, 'buffer + hydrogen peroxide', { size: 15, weight: 600 });
  b += t(386, 418, 'eye protection and gloves', { size: 15, weight: 600, fill: C.rust }).replace('y="418"', 'y="440"');
  b += t(60, 150, 'catalase: hydrogen peroxide → water + oxygen', { size: 17, weight: 700 });
  const vars = [['Independent', 'pH 4, 5, 6, 7, 8, 9 (buffers)', C.tealLight], ['Dependent', 'O₂ volume in 60 s', C.cream], ['Controlled', 'potato mass and surface area; peroxide volume and concentration; temperature; time', '#fff']];
  vars.forEach(([h, d, f], i) => { const y = 530 + i * 70; b += `<rect x="30" y="${y}" width="840" height="60" rx="12" fill="${f}" stroke="${C.panelEdge}" stroke-width="2"/>` + t(50, y + 37, h, { size: 18, weight: 700 }) + t(200, y + 37, d, { size: 16 }); });
  b += t(450, 760, 'Hypothesis: most oxygen near pH 7, less at either extreme. Repeat three times per pH.', { size: 16, anchor: 'middle', fill: C.muted });
  add('08-catalase-investigation',
    svg(900, 790, 'Planning an enzyme investigation', b),
    'A boiling tube in a water bath holds a buffer, hydrogen peroxide and a same-sized potato cylinder; oxygen bubbles pass along a delivery tube into a gas syringe read at 60 s. The independent variable is pH 4 to 9, the dependent variable is oxygen volume in 60 s, and potato size, peroxide volume and concentration, temperature and time are controlled.',
    'Change pH only, measure oxygen in 60 s, and control everything else.',
    '## Designing an investigation (criterion B)');
}
