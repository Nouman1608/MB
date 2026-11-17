import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-edexcel-urdu-translation-and-works';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (shared look across the OxfordAQA / Edexcel Urdu set) ----
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { const c = out[out.length - 1]; if (c && (c + ' ' + w).length > n) out.push(w); else out[out.length - 1] = c ? c + ' ' + w : w; } return out; };
const wt = (x, y, s, n, opts = {}, lh) => tl(x, y, wrap(s, n), opts, lh || (opts.size || 18) * 1.3);
const box = (x, y, w, h, fill, edge, sw = 2.5, rx = 12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;

// Urdu text: always its own <text>, right-aligned or centred, Nastaliq
const u = (x, y, s, { size = 26, anchor = 'end', fill = C.ink, weight = 400 } = {}) =>
  `<text x="${x}" y="${y}" font-family="Noto Nastaliq Urdu" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">\u200F${s}\u200F</text>`; // RLM marks keep leading/trailing punctuation on the correct side
// Urdu-over-English vocabulary chip
const vchip = (x, y, w, ur, en, fill = C.panel, edge = C.panelEdge) => box(x, y, w, 100, fill, edge, 2.5, 12) + u(x + w / 2, y + 46, ur, { size: 24, anchor: 'middle' }) + t(x + w / 2, y + 84, en, { size: 15, anchor: 'middle', fill: C.muted });
// Sentence row (stacked): English label top-left (+ extra markup), Urdu example right-aligned on its own line, English gloss beneath
const srow = (y, label, ur, gloss, { extra = '', fill = C.panel, edge = C.panelEdge, size = 24, h = 140 } = {}) =>
  box(30, y, 840, h, fill, edge, 2.5, 14) + t(52, y + 38, label, { size: 19, weight: 700 }) + extra +
  u(846, y + h - 52, ur, { size }) + t(846, y + h - 16, gloss, { size: 16, anchor: 'end', fill: C.muted, italic: true });
const tick = (x, y) => `<circle cx="${x}" cy="${y}" r="15" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + path(`M${x - 7},${y} l5,6 l10,-12`, { stroke: C.tealDark, w: 3.5 });
const cross = (x, y) => `<circle cx="${x}" cy="${y}" r="15" fill="#f6ece4" stroke="${C.rust}" stroke-width="2.5"/>` + path(`M${x - 6},${y - 6} l12,12 m0,-12 l-12,12`, { stroke: C.rust, w: 3.5 });

// 01 Paper 2 structure and timing
{
  let b = box(30, 110, 840, 70, C.cream, C.olive, 2.5, 14) + t(54, 154, 'Paper 2', { size: 22, weight: 700 }) +
    t(846, 154, '2 hours 40 minutes  ·  110 marks  ·  30% of A-level', { size: 19, weight: 700, anchor: 'end', fill: C.olive });
  const segs = [['A', 30, '30 min', 'Translation into Urdu', '20 marks', C.teal], ['B', 65, '1 h 5 min', 'Response to a literary text', '45 marks', C.tealLight], ['B or C', 65, '1 h 5 min', 'Second literary text, or a film', '45 marks', C.sand]];
  let x = 30;
  b += t(54, 218, 'Recommended time, to scale', { size: 16, weight: 600, fill: C.muted });
  segs.forEach(([s, m, tm, d, mk, fill], i) => {
    const w = 840 * m / 160 - (i < 2 ? 6 : 0);
    b += box(x, 232, w, 70, fill, C.ink, 2.5, 10) + t(x + w / 2, 262, 'Section ' + s, { size: 18, weight: 700, anchor: 'middle' }) + t(x + w / 2, 288, tm, { size: 16, anchor: 'middle' });
    b += t(x + w / 2, 330, mk, { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + tl(x + w / 2, 356, wrap(d, i === 0 ? 14 : 30), { size: 15, anchor: 'middle', fill: C.muted }, 19);
    x += w + 6;
  });
  b += panel(30, 400, 840, 200) + t(54, 436, 'Section A is marked in chunks', { size: 20, weight: 700 });
  b += tl(54, 468, ['the passage is divided into 20 chunks, one mark each', 'non-grammatical misspellings are tolerated if they create no ambiguity', 'and do not belong to a different word'], { size: 16 }, 22);
  b += box(54, 538, 792, 46, '#f6ece4', C.rust, 2, 10) + t(450, 568, 'Verb and adjective endings must be correct: they are not "spelling"', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  add('01-paper-2-structure',
    svg(900, 626, 'Paper 2 at a glance', b),
    'Paper 2 lasts 2 hours 40 minutes for 110 marks (30% of the A-level). Section A, translation into Urdu, has 20 marks and 30 minutes; each of the two works responses has 45 marks and about 1 hour 5 minutes. Section A is marked in 20 one-mark chunks, and verb and adjective endings must be correct.',
    'Translation first, then two 45-mark essays; endings are never treated as spelling.',
    '## Where this fits in 9UR0');
}

// 02 The prescribed works
{
  let b = t(54, 138, 'Literary texts', { size: 21, weight: 700, fill: C.olive }) + t(552, 138, 'Films', { size: 21, weight: 700, fill: C.tealDark });
  const lit = [
    ['آنگن', 'Aangan', 'novel, Khadija Mastur, 1999'],
    ['پطرس کے مضامین', 'Patras Ke Mazameen', 'essays, Ahmad Shah Patras Bukhari, 2011'],
    ['بساط', 'Bisaat', 'play, Baseer Kazmi, 1987'],
  ];
  const film = [['بن روئے', 'Bin Roye', '2015'], ['باغبان', 'Baaghban', '2003'], ['بجرنگی بھائی جان', 'Bajrangi Bhaijaan', '2015']];
  lit.forEach(([ur, en, d], i) => {
    const y = 156 + i * 124;
    b += box(30, y, 480, 112, C.cream, C.olive, 2.5, 12) + u(490, y + 50, ur, { size: 26 }) + t(48, y + 80, en, { size: 17, weight: 700, italic: true }) + t(48, y + 102, d, { size: 15, fill: C.muted });
  });
  film.forEach(([ur, en, d], i) => {
    const y = 156 + i * 124;
    b += box(530, y, 340, 112, C.tealLight, C.tealDark, 2.5, 12) + u(850, y + 50, ur, { size: 26 }) + t(548, y + 80, en, { size: 17, weight: 700, italic: true }) + t(548, y + 102, d, { size: 15, fill: C.muted });
  });
  b += panel(30, 540, 840, 120) + t(54, 574, 'Patras: five essays prescribed, not the whole book', { size: 18, weight: 700 });
  ['Savere Jo Kal Aankh Meri Khuli', 'Urdu Ki Aakhri Kitab', 'Murid Pur Ka Peer', 'Marhoom Ki Yaad Mein', 'Lahore Ka Jughrafia'].forEach((s, i) => {
    const xx = 54 + (i % 3) * 272, yy = 610 + Math.floor(i / 3) * 32;
    b += t(xx, yy, '• ' + s, { size: 16, italic: true });
  });
  b += t(450, 690, 'Films are listed by name and year only: do not label anyone "director" from this list', { size: 16, weight: 600, anchor: 'middle', fill: C.rust });
  add('02-prescribed-works',
    svg(900, 716, 'The prescribed works', b),
    'Three literary texts (Aangan آنگن, novel, Khadija Mastur, 1999; Patras Ke Mazameen پطرس کے مضامین, essays, 2011, five essays prescribed; Bisaat بساط, play, Baseer Kazmi, 1987) and three films (Bin Roye بن روئے, 2015; Baaghban باغبان, 2003; Bajrangi Bhaijaan بجرنگی بھائی جان, 2015).',
    'Three texts and three films; the films are given by name and year only.',
    '## Syllabus coverage');
}

// 03 Five angles for each work
{
  const cx = 450, cy = 330;
  let b = `<circle cx="${cx}" cy="${cy}" r="92" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + t(cx, cy - 6, 'Each of your', { size: 18, weight: 700, anchor: 'middle' }) + t(cx, cy + 18, 'two works', { size: 18, weight: 700, anchor: 'middle' });
  const angles = [['Form and', 'technique', -90], ['Key themes', 'and issues', -18], ['Social and', 'cultural setting', 54], ['Plot', 'structure', 126], ['Character-', 'isation', 198]];
  angles.forEach(([a, c, deg]) => {
    const r = deg * Math.PI / 180, x = cx + Math.cos(r) * 230, y = cy + Math.sin(r) * 190;
    const hi = deg === 54;
    b += `<line x1="${cx + Math.cos(r) * 96}" y1="${cy + Math.sin(r) * 96}" x2="${x}" y2="${y}" stroke="${C.ink}" stroke-width="2.5"/>` +
      box(x - 95, y - 38, 190, 76, hi ? C.tealLight : C.panel, hi ? C.tealDark : C.panelEdge, 2.5, 12) + t(x, y - 5, a, { size: 17, weight: 700, anchor: 'middle' }) + t(x, y + 18, c, { size: 17, weight: 700, anchor: 'middle' });
  });
  b += box(30, 556, 840, 84, C.tealLight, C.tealDark, 2, 12) + t(54, 590, 'For AO4, connect each work to the four social and cultural themes', { size: 18, weight: 700 }) +
    t(54, 618, 'place it in its wider social or historical context, not only what happens in it', { size: 16, fill: C.muted });
  add('03-five-angles',
    svg(900, 664, 'Preparing a work from five angles', b),
    'Each studied work is prepared from five angles: form and technique, key themes and issues, characterisation, plot structure, and social and cultural setting, then connected to the qualification’s four themes for AO4.',
    'Revise each work from all five angles and link it to the wider themes.',
    '## How to approach it');
}

// 04 Position, evidence, cultural connection
{
  let b = '';
  const steps = [
    ['Position', 'open with a brief statement of the writer’s overall stance on the question', C.panel, C.panelEdge],
    ['Evidence', 'two or three specific scenes or exchanges; particular lines or moments, not paraphrased whole scenes', C.cream, C.olive],
    ['Cultural connection', 'close by linking the treatment of the issue to the wider social theme it belongs to', C.tealLight, C.tealDark],
  ];
  steps.forEach(([h, s, fill, edge], i) => {
    const y = 110 + i * 132;
    b += box(110, y, 760, 112, fill, edge, 2.5, 14) + badge(62, y + 56, 24, String(i + 1), i === 1 ? C.mustard : C.cream) +
      t(134, y + 40, h, { size: 21, weight: 700 }) + wt(134, y + 70, s, 72, { size: 17, fill: C.muted }, 22);
    if (i < 2) b += arrow(62, y + 82, 62, y + 126, { w: 3 });
  });
  b += box(30, 520, 410, 90, C.panel, C.panelEdge, 2.5, 12) + t(52, 556, 'AO3', { size: 20, weight: 700, fill: C.tealDark }) + t(52, 584, 'precise, accurate language throughout', { size: 16 });
  b += box(460, 520, 410, 90, C.panel, C.panelEdge, 2.5, 12) + t(482, 556, 'AO4', { size: 20, weight: 700, fill: C.tealDark }) + t(482, 584, 'explicit link to social and cultural context', { size: 16 });
  b += box(30, 626, 840, 60, '#f6ece4', C.rust, 2.5, 12) + cross(66, 656) + t(96, 662, 'Moving through the work chronologically, retelling events', { size: 17, weight: 600 });
  add('04-works-response-structure',
    svg(900, 710, 'Structuring a works response', b),
    'A works essay states a position, supports it with two or three specific scenes or lines, and closes by connecting the issue to its wider social theme, earning AO3 through precise language and AO4 through cultural context. Chronological retelling is the trap.',
    'Position, evidence, cultural connection: argue, do not retell.',
    '## Worked example: structuring a works response');
}

// 05 The two allowed combinations
{
  let b = t(450, 128, 'Every candidate writes exactly two works essays', { size: 18, weight: 600, anchor: 'middle', fill: C.muted });
  const essay = (x, y, label, fill, edge) => box(x, y, 150, 80, fill, edge, 2.5, 10) + t(x + 75, y + 47, label, { size: 18, weight: 700, anchor: 'middle' });
  b += box(30, 150, 410, 200, C.panel, C.tealDark, 3, 14) + tick(66, 186) + t(94, 192, 'Route 1', { size: 20, weight: 700 }) +
    essay(60, 226, 'Text', C.cream, C.olive) + t(235, 272, '+', { size: 26, weight: 700, anchor: 'middle' }) + essay(260, 226, 'Text', C.cream, C.olive) + t(235, 334, 'Section B twice, no Section C', { size: 15, anchor: 'middle', fill: C.muted });
  b += box(460, 150, 410, 200, C.panel, C.tealDark, 3, 14) + tick(496, 186) + t(524, 192, 'Route 2', { size: 20, weight: 700 }) +
    essay(490, 226, 'Text', C.cream, C.olive) + t(665, 272, '+', { size: 26, weight: 700, anchor: 'middle' }) + essay(690, 226, 'Film', C.tealLight, C.tealDark) + t(665, 334, 'Section B, then Section C', { size: 15, anchor: 'middle', fill: C.muted });
  b += box(30, 370, 410, 90, '#f6ece4', C.rust, 2.5, 12) + cross(66, 415) + t(96, 421, 'Two film essays', { size: 19, weight: 700, fill: C.rust });
  b += box(460, 370, 410, 90, '#f6ece4', C.rust, 2.5, 12) + cross(496, 415) + t(526, 421, 'Three extended responses', { size: 19, weight: 700, fill: C.rust });
  b += t(450, 500, 'Also: Paper 2 translates into Urdu; Paper 1 translates into English', { size: 17, weight: 600, anchor: 'middle' });
  add('05-allowed-combinations',
    svg(900, 528, 'Two essays, two allowed routes', b),
    'The two allowed combinations of works essays: two literary-text essays (Section B twice), or one literary-text essay and one film essay (Sections B and C). Two film essays, or three extended responses, are not allowed.',
    'Two texts, or a text and a film: never two films, never three essays.',
    '## Common mistakes');
}
