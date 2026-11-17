import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-islamiyat-major-teachings-in-the-hadiths';
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

// 01 Theme map of the twenty set Hadiths
{
  const ind = ['Religion is sincerity', 'Obligations kept: enough for paradise', 'Every joint must perform a charity', 'Eating from the work of one\'s hand', 'Studying the Qur\'an: tethered camels', 'Modesty produces nothing but good', 'Faith and pride "as small as a mustard seed"', 'The world is the believer\'s prison', 'Allah looks at hearts and deeds'];
  const com = ['Want for your brother what you want for yourself', 'Speak good or keep silent; neighbour and guest', 'Change an evil: hand, tongue, heart', 'Striving with person and property', 'The many kinds of martyr', 'Caring for the widow and the poor', 'Bringing up an orphan', 'Be gentle, do not be hard', 'Kindly in selling, buying and repayment', 'No mercy for one who shows no mercy', 'The believers are like a single man'];
  const col = (x, title, items, fill, edge, start) => {
    let s = rect(x, 110, 410, 60, fill, edge, 3, 14) + t(x + 205, 148, title, { size: 21, weight: 700, anchor: 'middle' });
    items.forEach((it, i) => {
      const y = 184 + i * 50;
      s += rect(x, y, 410, 42, C.panel, C.panelEdge, 2, 10) + t(x + 28, y + 27, String(start + i), { size: 15, weight: 700, anchor: 'middle', fill: edge === C.mustard ? C.olive : C.tealDark }) +
        t(x + 50, y + 27, it, { size: it.length > 42 ? 15 : 16 });
    });
    return s;
  };
  const b = col(30, 'Individual conduct', ind, C.cream, C.mustard, 1) + col(460, 'Life in the community', com, C.tealLight, C.tealDark, 10) +
    rect(30, 650, 410, 82, C.bg, C.panelEdge, 0, 12) + para(46, 676, 'All twenty are recorded by al-Bukhari or Muslim. Four are printed in the exam; you answer two.', 380, { size: 16, fill: C.muted }, 21);
  add('01-theme-map-of-set-hadiths',
    svg(900, 742, 'The twenty set Hadiths by theme', b),
    'Two lists of key phrases. Individual conduct has nine Hadiths, from "Religion is sincerity" to "Allah looks at hearts and deeds". Life in the community has eleven, from wanting for your brother what you want for yourself to "the believers are like a single man".',
    'Nine Hadiths on individual conduct and eleven on life in the community.',
    '## Syllabus coverage');
}

// 02 Answer structure
{
  let b = '';
  const top = [['4', 'passages printed', 'in Arabic and English'], ['2', 'you choose', 'and answer'], ['2', 'paragraphs', 'for each Hadith']];
  top.forEach(([n, a, c], i) => {
    const x = 30 + i * 290;
    b += rect(x, 110, 260, 92, C.panel, C.panelEdge, 2.5, 14) + t(x + 46, 170, n, { size: 44, weight: 700, anchor: 'middle', fill: C.tealDark }) +
      t(x + 86, 150, a, { size: 19, weight: 700 }) + t(x + 86, 176, c, { size: 16, fill: C.muted });
    if (i < 2) b += arrow(x + 262, 156, x + 286, 156, { w: 3 });
  });
  const para2 = (y, n, h, sub, items, fill, edge) => {
    let s = rect(30, y, 840, 150, fill, edge, 3, 14) + badge(76, y + 44, 24, n, edge === C.mustard ? C.mustard : C.teal) +
      t(116, y + 52, h, { size: 24, weight: 700 }) + t(h === 'Teaching' ? 240 : 272, y + 52, sub, { size: 18, fill: C.muted });
    items.forEach((it, i) => { s += t(116, y + 92 + i * 30, '• ' + it, { size: 18 }); });
    return s;
  };
  b += para2(226, '1', 'Teaching', 'what it means', ['Explain the Hadith in your own words.', 'Refer to its key phrase.'], C.cream, C.mustard);
  b += arrow(450, 378, 450, 402, { w: 4 });
  b += para2(406, '2', 'Application', 'how to act on it today', ['Give a concrete example of a Muslim putting it into practice.', 'Support it with a related verse of the Qur\'an or another Hadith.'], C.tealLight, C.tealDark);
  b += rect(30, 580, 840, 96, C.panel, C.ink, 2.5, 14) + t(56, 616, 'Specificity test', { size: 20, weight: 700 }) +
    t(56, 648, 'Could your example only apply to this Hadith? If so, it is specific enough.', { size: 18, fill: C.muted });
  add('02-hadith-answer-structure',
    svg(900, 700, 'Answering a Hadith question', b),
    'Four passages are printed and you choose two, writing two paragraphs on each. Paragraph one explains the teaching in your own words with its key phrase; paragraph two applies it today with a concrete example and a supporting verse or Hadith. A final box gives the test: could the example only apply to this Hadith?',
    'Teaching, then application: two paragraphs per Hadith, with a specific example.',
    '## How should you answer a Hadith question?');
}

// 03 Religion is sincerity: five directions
{
  const cx = 450, cy = 400;
  let b = '';
  const sp = [
    ['to Allah', 'Worship Him alone with pure intention', 450, 180],
    ['to His Book', 'Read and follow the Qur\'an', 735, 330],
    ['to His Messenger', 'Follow the Sunnah', 640, 590],
    ['to the leaders', 'Give honest advice and support', 260, 590],
    ['to the common people', 'Wish them well and treat them honestly', 165, 330],
  ];
  sp.forEach(([h, d, x, y]) => { b += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${C.tealDark}" stroke-width="3.5"/>`; });
  b += `<circle cx="${cx}" cy="${cy}" r="98" fill="${C.cream}" stroke="${C.mustard}" stroke-width="3.5"/>` + t(cx, cy - 8, 'Religion', { size: 24, weight: 700, anchor: 'middle' }) + t(cx, cy + 22, 'is sincerity', { size: 24, weight: 700, anchor: 'middle' });
  sp.forEach(([h, d, x, y]) => {
    const w = 250, hh = 100;
    b += rect(x - w / 2, y - hh / 2, w, hh, C.panel, C.tealDark, 2.5, 14) + t(x, y - 14, h, { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + ctext(x, y + 22, d, w - 24, { size: 16, fill: C.ink }, 20);
  });
  add('03-religion-is-sincerity',
    svg(900, 680, 'Religion is sincerity: to whom?', b),
    'A hub labelled "Religion is sincerity" with five spokes: to Allah (worship Him alone with pure intention), to His Book (read and follow the Qur\'an), to His Messenger (follow the Sunnah), to the leaders (honest advice and support) and to the common people (wish them well and treat them honestly).',
    'Sincerity is loyalty in every relationship, not only in ritual.',
    '## What do the Hadiths teach about individual conduct?');
}

// 04 Every joint must perform a charity
{
  let b = rect(150, 108, 600, 76, C.cream, C.mustard, 3, 14) + t(450, 142, '"Every joint must perform a charity every day"', { size: 20, weight: 700, anchor: 'middle' }) +
    t(450, 170, 'charity (sadaqa) is not only money', { size: 17, anchor: 'middle', fill: C.olive, weight: 600 });
  const ex = ['Judging fairly between two people', 'Helping someone onto a mount or with luggage', 'A kind word', 'Each step to prayer', 'Removing something harmful from the road'];
  const pos = [[30, 232], [314, 232], [598, 232], [172, 372], [456, 372]];
  ex.forEach((e, i) => {
    const [x, y] = pos[i];
    b += rect(x, y, 272, 112, C.tealLight, C.tealDark, 2.5, 14) + ctext(x + 136, y + 56, e, 240, { size: 19, weight: 600 }, 25);
  });
  b += pline('M450,186 L450,208 L166,208 L166,228', { w: 3 }) + pline('M450,208 L734,208 L734,228', { w: 3 }) + pline('M450,186 L450,228', { w: 3 });
  b += rect(30, 514, 840, 84, C.panel, C.panelEdge, 2.5, 14) + t(56, 548, 'Today:', { size: 19, weight: 700 }) + t(130, 548, 'give thanks for health through small daily acts,', { size: 18, fill: C.muted }) + t(130, 576, 'such as helping a neighbour carry shopping.', { size: 18, fill: C.muted });
  add('04-every-joint-a-charity',
    svg(900, 622, 'Charity in everyday acts', b),
    'The Hadith "Every joint must perform a charity every day" branches into five examples of charity: judging fairly between two people, helping someone onto a mount or with luggage, a kind word, each step to prayer, and removing something harmful from the road.',
    'Sadaqa includes small daily acts of help, not only giving money.',
    '## What do the Hadiths teach about individual conduct?');
}

// 05 Changing an evil: three levels
{
  const lv = [['Hand', 'Act to change it, if able', C.teal, 0], ['Tongue', 'Speak out against it, if not able to act', C.tealLight, 1], ['Heart', 'At least hate the wrong inwardly: the weakest level of faith', C.cream, 2]];
  let b = t(450, 132, '"Whoever sees an evil, let him change it with his..."', { size: 20, weight: 700, anchor: 'middle', italic: true, fill: C.ink });
  lv.forEach(([h, d, f, i]) => {
    const x = 30 + i * 90, y = 160 + i * 146, w = 840 - i * 180, bh = i === 2 ? 118 : 108;
    b += rect(x, y, w, bh, f, i === 2 ? C.mustard : C.tealDark, 3, 14) + badge(x + 50, y + bh / 2, 26, String(i + 1), C.panel) +
      t(x + 98, y + 46, h, { size: 26, weight: 700 }) + para(x + 98, y + 78, d, w - 130, { size: 18, fill: C.ink }, 23);
    if (i < 2) b += t(x + w - 20, y + 133, 'if not able', { size: 16, fill: C.muted, anchor: 'end', italic: true });
  });
  b += rect(30, 616, 840, 70, C.panel, C.panelEdge, 2.5, 14) + t(450, 658, 'Muslims share responsibility for the moral health of society.', { size: 19, weight: 600, anchor: 'middle' });
  add('05-changing-an-evil',
    svg(900, 710, 'Three levels of changing an evil', b),
    'A narrowing staircase of three responses to an evil: change it with the hand if able, speak out with the tongue if not, and at least hate it in the heart, which is the weakest level of faith.',
    'Act if you can, speak if you cannot act, and never accept the wrong inwardly.',
    '## What do the Hadiths teach about life in the community?');
}

// 06 The mustard seed contrast
{
  const side = (x, fill, edge, h1, eff, col) => rect(x, 110, 410, 250, fill, edge, 3, 14) +
    `<circle cx="${x + 205}" cy="${170}" r="9" fill="${C.olive}" stroke="${C.ink}" stroke-width="2"/>` +
    t(x + 205, 222, h1, { size: 24, weight: 700, anchor: 'middle' }) + t(x + 205, 252, 'as small as a mustard seed', { size: 18, anchor: 'middle', fill: C.muted }) +
    arrow(x + 205, 268, x + 205, 300, { w: 3 }) + t(x + 205, 334, eff, { size: 21, weight: 700, anchor: 'middle', fill: col });
  const b = side(30, C.tealLight, C.tealDark, 'Faith', 'saves from hell', C.tealDark) + side(460, '#f3dccd', C.rust, 'Pride', 'blocks paradise', C.rust) +
    rect(30, 384, 840, 70, C.cream, C.mustard, 2.5, 14) + t(450, 426, 'So be humble and never look down on others.', { size: 20, weight: 700, anchor: 'middle' });
  add('06-mustard-seed',
    svg(900, 478, 'Even a mustard seed matters', b),
    'Two matching panels. Faith as small as a mustard seed saves from hell; pride as small as a mustard seed blocks paradise. The conclusion: be humble and never look down on others.',
    'A tiny amount of faith saves; a tiny amount of pride blocks paradise.',
    '## What do the Hadiths teach about individual conduct?');
}
