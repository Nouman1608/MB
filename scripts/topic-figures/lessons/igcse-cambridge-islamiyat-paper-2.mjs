import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-islamiyat-paper-2';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText.replace(/viewBox="0 0 (\d+) ([\d.]+)" width="(\d+)" height="([\d.]+)"/, (m, w, h, w2) => `viewBox="0 0 ${w} ${Math.ceil(h)}" width="${w2}" height="${Math.ceil(h)}"`), alt, caption, after });

// ---- local helpers (kept in this file so style.mjs stays shared and unchanged) ----
const wrap = (s, size, width, bold = false) => {
  const max = Math.floor(width / (size * (bold ? 0.56 : 0.5))); const out = [''];
  for (const w of s.split(' ')) { const cur = out[out.length - 1]; if (cur && (cur + ' ' + w).length > max) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w; }
  return out;
};
const isBold = (o) => (o.weight || 400) >= 600;
const para = (x, y, s, width, opts = {}, lh) => { const size = opts.size || 17; return tl(x, y, wrap(s, size, width, isBold(opts)), opts, lh || size * 1.3); };
const nl = (s, size, width, bold = false) => wrap(s, size, width, bold).length;
const rect = (x, y, w, h, fill, edge = C.ink, sw = 2.5, rx = 12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
// centred, wrapped text block around (cx, cy)
const ctext = (cx, cy, s, width, opts = {}, lh) => {
  const size = opts.size || 17; const L = wrap(s, size, width, isBold(opts)); const h = lh || size * 1.28;
  return tl(cx, cy - ((L.length - 1) * h) / 2 + size * 0.35, L, { ...opts, anchor: 'middle' }, h);
};
// card with bold head and wrapped body; cardH gives the height it needs
const cardH = (head, body, w, { headSize = 19, size = 17, pad = 16 } = {}) =>
  pad * 2 + (head ? nl(head, headSize, w - 2 * pad, true) * headSize * 1.3 : 0) + (head && body ? 6 : 0) + (body ? nl(body, size, w - 2 * pad) * size * 1.32 : 0) - 4;
const card = (x, y, w, h, { head, body, fill = C.panel, edge = C.panelEdge, headSize = 19, size = 17, pad = 16, headFill = C.ink, bodyFill = C.muted } = {}) => {
  const hl = head ? nl(head, headSize, w - 2 * pad, true) : 0;
  return rect(x, y, w, h, fill, edge, 2.5, 12) +
    (head ? para(x + pad, y + pad + headSize * 0.82, head, w - 2 * pad, { size: headSize, weight: 700, fill: headFill }) : '') +
    (body ? para(x + pad, y + pad + (head ? hl * headSize * 1.3 + 6 : 0) + size * 0.82, body, w - 2 * pad, { size, fill: bodyFill }, size * 1.32) : '');
};
// cream takeaway box like the reference
const note = (x, y, w, head, body, size = 17) => {
  const h = cardH(head, body, w, { headSize: 19, size, pad: 20 });
  return { h, s: card(x, y, w, h, { head, body, fill: C.cream, edge: C.mustard, headSize: 19, size, pad: 20 }) };
};
const pline = (d, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linejoin="round"${marker ? ` marker-end="url(#${marker})"` : ''}${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const chip = (x, y, w, h, label, { fill = C.tealLight, edge = C.tealDark, size = 18, weight = 700, color = C.ink } = {}) =>
  rect(x, y, w, h, fill, edge, 2.5, h / 2 > 14 ? 14 : h / 2) + ctext(x + w / 2, y + h / 2, label, w - 16, { size, weight, fill: color });

// 01 Paper 2 structure
{
  let b = '';
  const q = [
    ['Q1', '2.1 Major teachings in the Hadiths', 'Compulsory', '8 marks (4 + 4)', C.cream, C.mustard],
    ['Q2', '2.2 History and importance of the Hadiths', 'Compulsory · essay, usually in parts', '14 marks (10 + 4)', C.cream, C.mustard],
  ];
  q.forEach(([n, tp, rule, m, f, e], i) => {
    const y = 112 + i * 100;
    b += rect(30, y, 840, 86, f, e, 2.5, 14) + rect(48, y + 17, 60, 52, C.mustard, C.ink, 2.5, 12) + t(78, y + 51, n, { size: 22, weight: 700, anchor: 'middle' }) +
      t(124, y + 37, tp, { size: 20, weight: 700 }) + t(124, y + 66, rule, { size: 17, fill: C.olive, weight: 600 }) + t(846, y + 52, m, { size: 19, weight: 700, anchor: 'end' });
  });
  b += rect(30, 316, 840, 236, C.panel, C.tealDark, 2.5, 14) + t(56, 352, 'Choose two of Questions 3, 4 and 5', { size: 21, weight: 700, fill: C.tealDark }) + t(846, 352, '14 marks each (10 + 4)', { size: 19, weight: 700, anchor: 'end' }) +
    t(56, 380, 'Set on 2.3 and 2.4: one or two questions on each topic', { size: 17, fill: C.muted });
  ['Q3', 'Q4', 'Q5'].forEach((n, i) => {
    const x = 56 + i * 270;
    b += rect(x, 404, 248, 120, C.tealLight, C.tealDark, 2.5, 12) + t(x + 124, 446, n, { size: 26, weight: 700, anchor: 'middle' }) + t(x + 124, 482, '2.3 Caliphs or', { size: 17, anchor: 'middle', fill: C.muted }) + t(x + 124, 506, '2.4 Articles and Pillars', { size: 17, anchor: 'middle', fill: C.muted });
  });
  b += rect(30, 576, 840, 76, C.ink, C.ink, 0, 14) + t(450, 622, '1 hour 30 minutes  ·  50 marks  ·  50% of the IGCSE', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });
  add('01-paper-2-structure',
    svg(900, 676, 'How Paper 2 is built', b),
    'Question 1 on the Hadith passages (8 marks) and Question 2 on the history of the Hadiths (14 marks) are compulsory. Candidates then choose two of Questions 3 to 5, set on the Rightly Guided Caliphs and the Articles of Faith and Pillars, at 14 marks each. The paper lasts 1 hour 30 minutes and is worth 50 marks.',
    'Two compulsory questions, then two chosen from three: 8 + 14 + 14 + 14 = 50 marks.',
    '## Where this fits in 0493');
}

// 02 How the four topics connect
{
  const box = (x, y, n, s, f, e) => rect(x, y, 270, 150, f, e, 3, 14) + t(x + 22, y + 44, n, { size: 26, weight: 700, fill: e === C.mustard ? C.olive : C.tealDark }) + para(x + 22, y + 80, s, 230, { size: 19, weight: 700 }, 24);
  let b = box(30, 120, '2.1', 'Major teachings in the Hadiths', C.cream, C.mustard) + box(600, 120, '2.4', 'Articles of Faith and Pillars of Islam', C.cream, C.mustard) +
    box(30, 400, '2.2', 'History and importance of the Hadiths', C.tealLight, C.tealDark) + box(600, 400, '2.3', 'The Rightly Guided Caliphs', C.tealLight, C.tealDark);
  b += pline('M306,160 L594,160', { color: C.olive, marker: 'ahO', w: 4 }) + pline('M594,160 L306,160', { color: C.olive, marker: 'ahO', w: 4 });
  b += rect(316, 182, 268, 88, C.panel, C.panelEdge, 2.5, 12) + ctext(450, 226, 'The set passages refer again and again to the Articles and Pillars', 240, { size: 17 }, 22);
  b += pline('M306,440 L594,440', { color: C.tealDark, marker: 'ahT', w: 4 });
  b += rect(316, 460, 268, 110, C.panel, C.panelEdge, 2.5, 12) + ctext(450, 515, 'The same scholarly tradition of isnad and early reports recorded the Caliphs\' rule', 240, { size: 17 }, 22);
  b += t(450, 340, 'Revise them as connected, not as four separate units.', { size: 19, weight: 700, anchor: 'middle', fill: C.ink, italic: true });
  add('02-how-the-topics-connect',
    svg(900, 594, 'How the four Paper 2 topics connect', b),
    'Four topic boxes. A two-way link joins 2.1 (Hadith passages) and 2.4 (Articles and Pillars), because the passages refer to the Articles and Pillars. An arrow from 2.2 (history of the Hadiths) to 2.3 (the Caliphs) notes that the same isnad tradition recorded the Caliphs\' rule.',
    'Links between topics make recall and "explain the importance" answers easier.',
    '## Syllabus coverage');
}

// 03 Topic-by-topic tips
{
  const rows = [
    ['2.1', 'Revise the set passages with the Arabic and English side by side: questions can draw on the Arabic text directly.'],
    ['2.2', 'Keep the Hadiths and the Qur\'an distinct, and always address the relationship with the Qur\'an, ijma\' and qiyas.'],
    ['2.3', 'Only the Caliphs\' period of rule after the Prophet\'s death; their lives in his lifetime belong to Paper 1.'],
    ['2.4', 'For each Pillar use one structure: what it is, how it is performed, why it matters.'],
  ];
  let b = rect(30, 110, 840, 74, C.ink, C.ink, 0, 14) + t(450, 145, 'Every topic: move from knowledge to significance', { size: 21, weight: 700, anchor: 'middle', fill: '#ffffff' }) +
    t(450, 171, 'why it matters to individual Muslims, the community, or later history', { size: 16, anchor: 'middle', fill: C.cream });
  let y = 204;
  rows.forEach(([n, s], i) => {
    const h = 90;
    b += rect(30, y, 120, h, i % 2 ? C.tealLight : C.cream, i % 2 ? C.tealDark : C.mustard, 2.5, 12) + t(90, y + h / 2 + 10, n, { size: 28, weight: 700, anchor: 'middle' });
    b += rect(162, y, 708, h, C.panel, C.panelEdge, 2.5, 12) + para(184, y + h / 2 - (nl(s, 18, 664) - 1) * 12 + 6, s, 664, { size: 18 }, 24);
    y += h + 12;
  });
  add('03-topic-tips',
    svg(900, y + 12, 'One tip for each Paper 2 topic', b),
    'A banner says every answer should move from knowledge to significance. Below, one tip per topic: study the 2.1 passages in Arabic and English; in 2.2 link Hadiths to the Qur\'an, ijma\' and qiyas; in 2.3 cover only the Caliphs\' rule after the Prophet\'s death; in 2.4 describe each Pillar as what, how and why.',
    'Knowledge plus significance, with one specific habit per topic.',
    '## How to approach it');
}

// 04 Paper 1 vs Paper 2 timeframe for the Caliphs
{
  let b = rect(30, 150, 400, 90, C.panel, C.panelEdge, 2.5, 14) + t(230, 190, 'Paper 1', { size: 22, weight: 700, anchor: 'middle' }) + t(230, 218, 'Caliphs\' lives in the Prophet\'s lifetime', { size: 17, anchor: 'middle', fill: C.muted });
  b += rect(470, 150, 400, 90, C.tealLight, C.tealDark, 3, 14) + t(670, 190, 'Paper 2 (topic 2.3)', { size: 22, weight: 700, anchor: 'middle' }) + t(670, 218, 'their period of rule after his death', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += `<line x1="450" y1="120" x2="450" y2="270" stroke="${C.rust}" stroke-width="4" stroke-dasharray="8 6"/>` + t(450, 112, 'death of the Prophet (pbuh)', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += arrow(30, 290, 860, 290, { w: 4 }) + t(860, 318, 'time', { size: 16, anchor: 'end', fill: C.muted, italic: true });
  add('04-caliphs-timeframe',
    svg(900, 340, 'Which paper covers the Caliphs?', b).replace('<text x="450" y="56"', '<text x="450" y="50"'),
    'A time arrow split at the death of the Prophet (pbuh). Before it, the Caliphs\' lives during his lifetime belong to Paper 1; after it, their period of rule belongs to Paper 2 topic 2.3.',
    'Keep the two timeframes separate when revising.',
    '## How to approach it');
}
