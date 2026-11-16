import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-pakistan-studies-natural-resources';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText.replace(/(viewBox="0 0 \d+ |height=")([\d.]+)/g, (m, a, n) => a + Math.round(+n)), alt, caption, after });

// ---- local helpers ----
const CW = 0.5; // approx. average Inter glyph width as a share of font size
const wrap = (s, size, width) => {
  const max = Math.floor(width / (size * CW)); const out = [''];
  for (const w of s.split(' ')) { const cur = out[out.length - 1]; if (cur && (cur + ' ' + w).length > max) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w; }
  return out;
};
const para = (x, y, s, width, opts = {}, lh) => tl(x, y, wrap(s, opts.size || 17, width), opts, lh || (opts.size || 17) * 1.3);
const lines = (s, size, width) => wrap(s, size, width).length;
const rect = (x, y, w, h, fill, edge = C.ink, sw = 2.5, rx = 12, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}" ${extra}/>`;
const box = (x, y, w, h, fill = '#ffffff', edge = C.panelEdge) => rect(x, y, w, h, fill, edge, 2.5, 12);
// Box with bold head and wrapped body, returns svg; height computed by caller via boxH
const boxH = (head, body, w, size = 17) => (head ? 34 : 14) + (body ? lines(body, size, w - 32) * (size * 1.3) : 0) + 14;
const tbox = (x, y, w, head, body, { fill = '#ffffff', edge = C.panelEdge, size = 17, headColor = C.ink, h } = {}) => {
  const hh = h || boxH(head, body, w, size);
  return box(x, y, w, hh, fill, edge) + (head ? t(x + 16, y + 28, head, { size: 18, weight: 700, fill: headColor }) : '') +
    (body ? para(x + 16, y + (head ? 54 : 30), body, w - 32, { size, fill: head ? C.muted : C.ink }, size * 1.3) : '');
};
// bullet list: returns { svg, h }
const blist = (x, y, items, width, { size = 17, color = C.ink, dot = C.tealDark, gap = 10, lh } = {}) => {
  let s = '', yy = y; const L = lh || size * 1.3;
  items.forEach((it) => { const ls = wrap(it, size, width - 22); s += `<circle cx="${x + 6}" cy="${yy - size * 0.33}" r="5" fill="${dot}"/>` + tl(x + 22, yy, ls, { size, fill: color }, L); yy += ls.length * L + gap; });
  return { svg: s, h: yy - y };
};

// 01 Water: one supply, many users
{
  let b = '';
  // supply
  b += rect(30, 130, 250, 300, '#dfe7f2', C.blue, 2.5, 14) + t(155, 168, 'Water supply', { size: 21, weight: 700, anchor: 'middle', fill: C.blue }) +
    t(155, 196, 'obtained, maintained', { size: 16, anchor: 'middle', fill: C.muted }) + t(155, 216, 'and controlled', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(155, 262, 'e.g. dams', { size: 16, weight: 700, anchor: 'middle' }) + ['Mangla', 'Tarbela', 'Warsak'].map((d, i) => rect(70, 276 + i * 40, 170, 32, '#ffffff', C.blue, 2, 16) + t(155, 298 + i * 40, d, { size: 17, weight: 600, anchor: 'middle' })).join('') +
    t(155, 410, 'plus barrages', { size: 16, anchor: 'middle', fill: C.muted });
  const users = [['Agriculture', 150], ['Industry', 260], ['Domestic use', 370]];
  users.forEach(([u, y]) => { b += arrow(284, 280, 486, y, { color: C.blue, w: 4 }) + rect(492, y - 34, 220, 68, C.tealLight, C.tealDark, 2.5, 12) + t(602, y + 7, u, { size: 19, weight: 700, anchor: 'middle' }); });
  b += `<path d="M725,130 Q765,280 725,430" fill="none" stroke="${C.rust}" stroke-width="4"/>` + t(772, 262, 'compete', { size: 17, weight: 700, fill: C.rust }) + t(772, 284, 'for the', { size: 16, fill: C.rust }) + t(772, 304, 'same supply', { size: 16, fill: C.rust });
  // problems strip
  const y = 460;
  b += panel(30, y, 840, 250);
  b += t(54, y + 38, 'Building a water answer', { size: 20, weight: 700 });
  const st = [['Name a specific cause', 'e.g. industrial pollution or over-extraction', '#f6e4d8', C.rust], ['Pair it with a specific solution', 'one that fixes that cause', C.tealLight, C.tealDark], ['Explain the conflict', 'between regions or user groups competing for the same supply', C.cream, C.olive]];
  st.forEach(([h, s, f, c], i) => {
    const x = 54 + i * 272, w = 250;
    b += rect(x, y + 60, w, 166, f, c, 2.5, 12) + badge(x + 32, y + 98, 20, String(i + 1), '#ffffff') + tl(x + 62, y + 92, wrap(h, 18, w - 74), { size: 18, weight: 700 }, 22) + para(x + 18, y + 160, s, w - 36, { size: 16, fill: C.muted }, 21);
    if (i < 2) b += arrow(x + w + 2, y + 143, x + 270, y + 143, { w: 3 });
  });
  add('01-water-users',
    svg(900, y + 270, 'Water: one supply, many users', b),
    'A water supply controlled by dams such as Mangla, Tarbela and Warsak, plus barrages, feeds agricultural, industrial and domestic users, who compete for the same supply. Below, three steps build an answer: name a specific cause, pair it with a specific solution, then explain the conflict between regions or user groups.',
    'Because every user draws on the same supply, water problems can turn into conflict.',
    '## Water (2a): the most exam-heavy sub-section');
}

// 02 Plantation vs afforestation
{
  let b = '';
  const col = (x, head, where, color, fill, art, items) => panel(x, 110, 410, 400, fill, color) + t(x + 205, 150, head, { size: 23, weight: 700, anchor: 'middle', fill: color }) + t(x + 205, 176, where, { size: 17, anchor: 'middle', fill: C.muted, italic: true }) + art + blist(x + 28, 420, items, 360, { dot: color, size: 18 }).svg;
  const tree = (x, y, s = 1) => `<rect x="${x - 3 * s}" y="${y - 20 * s}" width="${6 * s}" height="${20 * s}" fill="${C.rockDark}"/><circle cx="${x}" cy="${y - 30 * s}" r="${14 * s}" fill="${C.grass}" stroke="${C.ink}" stroke-width="1.5"/>`;
  const plainArt = `<rect x="60" y="330" width="350" height="30" fill="#a9c48f" stroke="${C.ink}" stroke-width="2"/>` + [0, 1, 2, 3, 4, 5, 6].map((i) => tree(85 + i * 50, 330)).join('') +
    t(235, 390, 'planted in regular rows on the plain', { size: 16, anchor: 'middle', fill: C.muted });
  const slope = `<path d="M490,360 L490,350 L820,220 L840,220 L840,360 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` + [[540, 334], [590, 314], [640, 294], [690, 274], [740, 254], [790, 234]].map(([x, y]) => tree(x, y + 4, 0.9)).join('') +
    t(665, 390, 'planted across slopes and plateaux', { size: 16, anchor: 'middle', fill: C.muted });
  b += col(30, 'Plantations', 'Indus Plain', C.tealDark, '#ffffff', plainArt, ['New forest planted for commercial or resource use', 'A development resource']);
  b += col(460, 'Afforestation', 'mountain slopes and plateaux', C.olive, '#ffffff', slope, ['Aimed at preventing soil erosion', 'Helps manage water flow']);
  b += panel(30, 530, 840, 74, C.cream, C.olive) + t(450, 575, 'Plantations are for use; afforestation on slopes is for protection.', { size: 19, weight: 700, anchor: 'middle' });
  add('02-plantation-afforestation',
    svg(900, 624, 'Plantations or afforestation?', b),
    'Two panels compare forest planting. Plantations are planted in rows on the Indus Plain for commercial or resource use. Afforestation on mountain slopes and plateaux aims to prevent soil erosion and manage water flow.',
    'The two are the detail candidates most often blur: one is for use, the other for protection.',
    '## Forests (2b)');
}

// 03 Deforestation chain
{
  const steps = [
    ['Deforestation', 'trees cleared for agriculture or fuel', C.rust],
    ['Soil erosion', 'bare ground loses its soil', C.rust],
    ['Silting', 'eroded soil builds up in rivers', C.olive],
    ['Flooding', 'the result downstream', C.blue],
  ];
  let b = '';
  steps.forEach(([h, s, c], i) => {
    const y = 120 + i * 120, x = 40 + i * 50, w = 440;
    b += rect(x, y, w, 92, '#ffffff', c, 3, 14) + badge(x + 40, y + 46, 22, String(i + 1), i === 0 ? C.mustard : C.cream) + t(x + 80, y + 40, h, { size: 21, weight: 700, fill: c }) + t(x + 80, y + 68, s, { size: 17, fill: C.muted });
    if (i < 3) b += arrow(x + 110, y + 94, x + 160, y + 118, { w: 3.5 });
  });
  b += rect(650, 140, 220, 320, C.tealLight, C.tealDark, 2.5, 14) + t(760, 176, 'Possible solutions', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    blist(668, 216, ['Afforestation on mountain slopes and plateaux', 'Sustainable use of forests as a development resource'], 180, { size: 17, gap: 14 }).svg;
  b += t(450, 604, 'Each effect causes the next: explain the links, not just the list.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('03-deforestation-chain',
    svg(900, 630, 'Effects of deforestation', b),
    'A four-step chain: deforestation for agriculture or fuel leads to soil erosion, then silting, then flooding. A side panel lists solutions: afforestation on slopes and plateaux and sustainable use of forests.',
    'Deforestation sets off a chain from soil erosion to silting to flooding.',
    '## Forests (2b)');
}

// 04 Minerals: benefit vs cost
{
  let b = '';
  // scale
  b += `<line x1="450" y1="170" x2="450" y2="400" stroke="${C.ink}" stroke-width="6"/>` + `<path d="M410,410 L490,410 L470,390 L430,390 Z" fill="${C.ink}"/>` + `<line x1="170" y1="180" x2="730" y2="180" stroke="${C.ink}" stroke-width="6"/>` + `<circle cx="450" cy="172" r="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<line x1="200" y1="180" x2="200" y2="230" stroke="${C.ink}" stroke-width="2.5"/><line x1="700" y1="180" x2="700" y2="230" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += rect(40, 230, 320, 160, C.tealLight, C.tealDark, 2.5, 14) + t(200, 266, 'Named benefit', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark }) + blist(64, 304, ['Export revenue', 'Input for industry'], 280, { size: 18 }).svg;
  b += rect(540, 230, 320, 160, '#f6e4d8', C.rust, 2.5, 14) + t(700, 266, 'Named environmental cost', { size: 20, weight: 700, anchor: 'middle', fill: C.rust }) + para(564, 304, 'A specific problem tied to a specific resource, not “pollution is bad”', 272, { size: 17 }, 23);
  b += t(450, 140, 'Weigh one against the other', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  b += panel(30, 436, 840, 150);
  b += t(54, 472, 'Know the specifics', { size: 19, weight: 700 });
  ['Limestone', 'Gypsum', 'Rock salt'].forEach((m, i) => { b += rect(54 + i * 150, 490, 136, 40, C.cream, C.olive, 2, 20) + t(122 + i * 150, 516, m, { size: 17, weight: 700, anchor: 'middle' }); });
  b += t(520, 516, 'where each is extracted', { size: 17, fill: C.muted });
  b += t(54, 566, 'Also: metallic vs non-metallic minerals, quantities, reserves and imports', { size: 17, fill: C.muted });
  add('04-minerals-benefit-cost',
    svg(900, 606, 'Minerals: benefits against costs', b),
    'A balance weighs a named benefit of mineral extraction (export revenue or an input for industry) against a named environmental cost tied to a specific resource. Below, limestone, gypsum and rock salt are highlighted as the minerals whose extraction sites must be known.',
    'Pair each named benefit with a named environmental cost to judge sustainability.',
    '## Mineral resources (2c)');
}

// 05 Fish
{
  let b = '';
  b += panel(30, 110, 410, 240, '#dfe7f2', C.blue) + t(235, 150, 'Marine fishing', { size: 22, weight: 700, anchor: 'middle', fill: C.blue }) +
    blist(64, 220, ['Balochistan coast', 'Sindh coast', 'Fishing ports on both coasts'], 350, { size: 18, dot: C.blue }).svg;
  b += panel(460, 110, 410, 240, C.tealLight, C.tealDark) + t(665, 150, 'Inland fishing', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    blist(494, 220, ['Rivers', 'Lakes', 'Fish farms'], 350, { size: 18 }).svg;
  b += t(450, 392, 'The syllabus pairs these two: answer both sides', { size: 18, weight: 700, anchor: 'middle' });
  b += rect(30, 410, 380, 120, C.cream, C.olive, 2.5, 14) + t(220, 456, 'Improvements', { size: 21, weight: 700, anchor: 'middle', fill: C.olive }) + t(220, 486, 'in fishing methods and processing', { size: 16, anchor: 'middle' });
  b += rect(490, 410, 380, 120, '#f6e4d8', C.rust, 2.5, 14) + t(680, 456, 'Problems', { size: 21, weight: 700, anchor: 'middle', fill: C.rust }) + t(680, 486, 'facing the fishing industry', { size: 16, anchor: 'middle' });
  b += `<path d="M412,470 L488,470" stroke="${C.ink}" stroke-width="3.5" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  b += arrow(450, 536, 450, 570, { w: 3.5 }) + rect(250, 576, 400, 70, C.mustard, C.ink, 3, 14) + t(450, 618, 'Sustainability and development', { size: 20, weight: 700, anchor: 'middle' });
  add('05-fishing',
    svg(900, 666, 'Fishing: marine and inland', b),
    'Marine fishing on the Balochistan and Sindh coasts is set beside inland fishing in rivers, lakes and fish farms. Below, improvements in methods and processing are paired with the problems facing the industry, leading to its sustainability and future development.',
    'Never describe improvements without the sustainability problems they are meant to address.',
    '## Fish (2d)');
}

// 06 Revision grid
{
  const heads = ['Resource', 'Location', 'Use', 'Sustainability issue'];
  const cw = [150, 220, 220, 250], cx = [30];
  for (let i = 1; i < 4; i++) cx.push(cx[i - 1] + cw[i - 1]);
  const rows = [
    ['Water', 'Mangla, Tarbela and Warsak dams; barrages', 'Agricultural, industrial and domestic', 'Pollution, over-extraction; conflict over supply'],
    ['Forests', 'Plantations on the Indus Plain; afforestation on slopes and plateaux', 'Development resource', 'Deforestation: soil erosion, silting, flooding'],
    ['Minerals', 'Limestone, gypsum and rock salt sites', 'Export revenue; industrial input', 'Environmental damage from extraction'],
    ['Fish', 'Balochistan and Sindh coasts; rivers, lakes, fish farms', 'Uses of the catch', 'Problems facing the industry'],
  ];
  const col = [C.blue, C.grass, C.rockDark, C.tealDark];
  let b = '';
  heads.forEach((h, i) => { b += rect(cx[i] + 2, 110, cw[i] - 4, 44, C.ink, C.ink, 0, 8) + t(cx[i] + 14, 139, h, { size: 17, weight: 700, fill: '#ffffff' }); });
  let y = 162;
  rows.forEach((r, ri) => {
    const h = Math.max(...r.map((c, i) => lines(c, 16, cw[i] - 28))) * 21 + 26;
    r.forEach((c, i) => {
      b += rect(cx[i] + 2, y, cw[i] - 4, h, i === 0 ? '#ffffff' : i === 3 ? C.cream : '#ffffff', i === 0 ? col[ri] : C.panelEdge, i === 0 ? 3 : 2, 8) +
        para(cx[i] + 14, y + 27, c, cw[i] - 28, { size: i === 0 ? 18 : 16, weight: i === 0 ? 700 : 400, fill: i === 0 ? col[ri] : C.ink }, 21);
    });
    y += h + 8;
  });
  b += t(450, y + 26, 'Extend each row with your own named examples and figures.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('06-revision-grid',
    svg(900, y + 46, 'One grid for all four resources', b),
    'A revision grid with columns for location, use and sustainability issue, filled in for water, forests, minerals and fish from this guide: for example, water from Mangla, Tarbela and Warsak serves agricultural, industrial and domestic users but faces pollution, over-extraction and conflict.',
    'Every Section 2 resource can be revised the same way: where, what for, and how sustainable.',
    '## How to approach it');
}
