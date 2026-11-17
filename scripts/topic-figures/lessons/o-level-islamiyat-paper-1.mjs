import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-islamiyat-paper-1';
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

// 01 Paper 1 structure
{
  let b = '';
  const q = [
    ['Q1', '1.1 Major themes of the Qur\'an', 'Compulsory · three short passages, write on any two', '8 marks (4 + 4)'],
    ['Q2', '1.2 History and importance of the Qur\'an', 'Compulsory · essay-length', '14 marks (10 + 4)'],
  ];
  q.forEach(([n, tp, rule, m], i) => {
    const y = 112 + i * 100;
    b += rect(30, y, 840, 86, C.cream, C.mustard, 2.5, 14) + rect(48, y + 17, 60, 52, C.mustard, C.ink, 2.5, 12) + t(78, y + 51, n, { size: 22, weight: 700, anchor: 'middle' }) +
      t(124, y + 37, tp, { size: 20, weight: 700 }) + t(124, y + 66, rule, { size: 17, fill: C.olive, weight: 600 }) + t(846, y + 52, m, { size: 19, weight: 700, anchor: 'end' });
  });
  b += rect(30, 316, 840, 236, C.panel, C.tealDark, 2.5, 14) + t(56, 352, 'Choose two of Questions 3, 4 and 5', { size: 21, weight: 700, fill: C.tealDark }) + t(846, 352, '14 marks each (10 + 4)', { size: 19, weight: 700, anchor: 'end' }) +
    t(56, 380, 'One or two on 1.3, one or two on 1.4: question numbers vary by paper', { size: 17, fill: C.muted });
  ['Q3', 'Q4', 'Q5'].forEach((n, i) => {
    const x = 56 + i * 270;
    b += rect(x, 404, 248, 120, C.tealLight, C.tealDark, 2.5, 12) + t(x + 124, 446, n, { size: 26, weight: 700, anchor: 'middle' }) + t(x + 124, 482, '1.3 Life of the Prophet or', { size: 17, anchor: 'middle', fill: C.muted }) + t(x + 124, 506, '1.4 First Islamic community', { size: 17, anchor: 'middle', fill: C.muted });
  });
  b += rect(30, 576, 840, 76, C.ink, C.ink, 0, 14) + t(450, 622, '1 hour 30 minutes  ·  50 marks  ·  50% of the O Level', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });
  add('01-paper-1-structure',
    svg(900, 676, 'How Paper 1 is built', b),
    'Question 1 (three short passages on the Qur\'an\'s themes, write on any two, 8 marks) and Question 2 (history and importance of the Qur\'an, 14 marks) are compulsory. Candidates then choose two of Questions 3 to 5, set on the life of the Prophet and the first Islamic community, at 14 marks each.',
    'Two compulsory questions, then two chosen from three: 50 marks in 1 hour 30 minutes.',
    '## The paper\'s structure');
}

// 02 Assessment objectives
{
  const X0 = 30, W = 840, a1 = W * 0.68;
  let b = rect(X0, 130, a1, 90, C.teal, C.tealDark, 2.5, 0) + rect(X0 + a1, 130, W - a1, 90, C.cream, C.mustard, 2.5, 0) +
    t(X0 + 24, 168, 'AO1  Recall, select and present', { size: 21, weight: 700 }) + t(X0 + 24, 198, 'the knowledge-based part of each question', { size: 17, fill: C.ink }) +
    t(X0 + a1 + 20, 168, 'AO2  Understanding', { size: 21, weight: 700 }) + t(X0 + a1 + 20, 198, 'significance and reasoning', { size: 17, fill: C.ink }) +
    t(X0 + a1 - 16, 122, '68%', { size: 26, weight: 700, anchor: 'end', fill: C.tealDark }) + t(X0 + W - 16, 122, '32%', { size: 26, weight: 700, anchor: 'end', fill: C.olive });
  b += t(450, 268, 'How the mark scheme describes quotation in AO1', { size: 19, weight: 700, anchor: 'middle', fill: C.muted });
  b += rect(30, 288, 410, 130, C.tealLight, C.tealDark, 3, 14) + t(56, 326, 'Highest band', { size: 20, weight: 700 }) + para(56, 360, '"likely to quote Qur\'an verses and Hadiths to support points made"', 360, { size: 18, italic: true }, 24);
  b += rect(460, 288, 410, 130, C.panel, C.panelEdge, 2.5, 14) + t(486, 326, 'Band below', { size: 20, weight: 700 }) + para(486, 360, '"may" quote', 360, { size: 18, italic: true }, 24);
  b += rect(30, 438, 840, 64, C.cream, C.mustard, 2.5, 14) + t(450, 478, 'Top answers characteristically support points with a reference.', { size: 19, weight: 600, anchor: 'middle' });
  add('02-assessment-objectives',
    svg(900, 526, 'Where the marks come from', b),
    'A bar split 68 to 32: AO1, recall, select and present, against AO2, understanding of significance and reasoning. Below, the highest AO1 band is "likely to quote Qur\'an verses and Hadiths", while the band below "may" quote.',
    'Two-thirds of the marks are knowledge; quoting supporting references marks the top band.',
    '## The paper\'s structure');
}

// 03 Qur'an key facts and the two kinds of surah
{
  const facts = [['23 years', '610–632 CE'], ['Cave of Hira', 'where revelation began'], ['Jibril', 'the angel who brought it'], ['114', 'surahs']];
  let b = '';
  facts.forEach(([a, c], i) => {
    const x = 30 + i * 213;
    b += rect(x, 112, 201, 96, C.panel, C.panelEdge, 2.5, 14) + t(x + 100, 152, a, { size: 23, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(x + 100, 182, c, { size: 16, anchor: 'middle', fill: C.muted });
  });
  const col = (x, h, style, focus, f, e) => rect(x, 232, 410, 206, f, e, 3, 14) + t(x + 205, 272, h, { size: 24, weight: 700, anchor: 'middle' }) + t(x + 205, 302, style, { size: 17, anchor: 'middle', fill: C.muted }) +
    focus.map((it, j) => rect(x + 24, 322 + j * 36, 362, 30, C.panel, e, 1.5, 8) + t(x + 205, 343 + j * 36, it, { size: 17, anchor: 'middle' })).join('');
  b += col(30, 'Makkan surahs', 'generally shorter', ['Tawhid', 'The afterlife', 'Moral conduct'], C.cream, C.mustard);
  b += col(460, 'Madinan surahs', 'generally longer', ['Law', 'Community', 'Social order'], C.tealLight, C.tealDark);
  add('03-quran-key-facts',
    svg(900, 462, 'The Qur\'an: key facts', b),
    'Four fact tiles: revealed over 23 years (610–632 CE), beginning in the Cave of Hira, through the angel Jibril, in 114 surahs. Below, Makkan surahs are generally shorter and concern tawhid, the afterlife and moral conduct; Madinan surahs are generally longer and concern law, community and social order.',
    'Four numbers and places to know, and the Makkan–Madinan contrast.',
    '## Key content across the four sub-topics');
}

// 04 Two stages: compiled then standardised
{
  const col = (x, n, who, verb, why, did, f, e) => rect(x, 112, 390, 300, C.panel, e, 3, 14) + rect(x, 112, 390, 84, f, e, 3, 14) +
    badge(x + 40, 154, 22, n, C.panel) + t(x + 80, 148, who, { size: 24, weight: 700 }) + t(x + 80, 178, verb, { size: 18, weight: 700, fill: e === C.mustard ? C.olive : C.tealDark }) +
    (why ? t(x + 24, 232, 'Why', { size: 16, weight: 700, fill: C.muted }) + para(x + 24, 258, why, 342, { size: 17 }, 23) : '') +
    t(x + 24, why ? 330 : 232, 'What happened', { size: 16, weight: 700, fill: C.muted }) + para(x + 24, why ? 356 : 258, did, 342, { size: 17 }, 23);
  let b = col(30, '1', 'Abu Bakr', 'COMPILED', 'The Battle of Yamama killed many who had memorised it.', 'The Qur\'an was compiled under his rule.', C.cream, C.mustard) +
    col(480, '2', 'Uthman', 'STANDARDISED', '', 'The Qur\'an was standardised: official copies were distributed and variant texts destroyed.', C.tealLight, C.tealDark);
  b += arrow(424, 262, 474, 262, { w: 5 }) + t(450, 296, 'later', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  b += rect(30, 432, 840, 64, '#f3dccd', C.rust, 2.5, 14) + t(450, 472, 'Two distinct stages: never conflate them into one event.', { size: 19, weight: 700, anchor: 'middle' });
  add('04-compiled-then-standardised',
    svg(900, 520, 'Two stages in the Qur\'an\'s history', b),
    'Two stages. First Abu Bakr compiled the Qur\'an after the Battle of Yamama killed many who had memorised it. Later Uthman standardised it, distributing official copies and having variant texts destroyed. A warning box says to keep the stages separate.',
    'Abu Bakr compiled; Uthman standardised. Examiners expect the two kept apart.',
    '## Key content across the four sub-topics');
}

// 05 Connected timeline of 1.3 and 1.4
{
  const ev = [
    ['610', 'First revelation', ''],
    ['622', 'Hijra to Madinah', 'start of the Islamic calendar'],
    ['', 'Constitution of Madinah', 'Muslims, Jews and other groups as one community under the Prophet\'s arbitration'],
    ['', 'Muhajirun paired with the Ansar', 'a practical response to the migrants\' destitution'],
    ['', 'Battles of Badr, Uhud and the Trench', ''],
    ['', 'Farewell Sermon', 'equality, sanctity of life and property, abolition of usury and blood feuds'],
  ];
  let y = 112, b = '';
  const tops = [];
  ev.forEach(([yr, h, d], i) => {
    const hh = d ? (nl(d, 17, 600) > 1 ? 100 : 80) : 60;
    tops.push(y + hh / 2);
    b += rect(220, y, 650, hh, yr ? C.cream : C.panel, yr ? C.mustard : C.panelEdge, 2.5, 12) + t(244, y + (d ? 34 : 38), h, { size: 20, weight: 700 }) + (d ? para(244, y + 62, d, 600, { size: 17, fill: C.muted }, 22) : '');
    if (yr) b += t(130, y + hh / 2 + 9, yr, { size: 24, weight: 700, anchor: 'end' });
    y += hh + 14;
  });
  b = `<line x1="170" y1="${tops[0]}" x2="170" y2="${tops[tops.length - 1]}" stroke="${C.ink}" stroke-width="4"/>` + b;
  tops.forEach((ty, i) => { b += `<circle cx="170" cy="${ty}" r="${i < 2 ? 11 : 8}" fill="${i < 2 ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="3"/>` + `<line x1="182" y1="${ty}" x2="218" y2="${ty}" stroke="${C.ink}" stroke-width="2.5"/>`; });
  add('05-connected-timeline',
    svg(900, y + 10, 'Revise 1.3 and 1.4 as one timeline', b),
    'A vertical sequence: first revelation in 610; the Hijra to Madinah in 622, starting the Islamic calendar; the Constitution of Madinah; the pairing of the Muhajirun with the Ansar; the Battles of Badr, Uhud and the Trench; and the Farewell Sermon on equality, the sanctity of life and property, and the abolition of usury and blood feuds.',
    'Place events in relation to one another, not as isolated facts.',
    '## Key content across the four sub-topics');
}
