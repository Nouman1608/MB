import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-islamiyat-paper-2';
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
  [['Q1', '8 marks (4 + 4)'], ['Q2', '14 marks (10 + 4)']].forEach(([n, m], i) => {
    const x = 30 + i * 426;
    b += rect(x, 112, 414, 110, C.cream, C.mustard, 3, 14) + rect(x + 20, 141, 66, 52, C.mustard, C.ink, 2.5, 12) + t(x + 53, 175, n, { size: 22, weight: 700, anchor: 'middle' }) +
      t(x + 106, 160, 'Compulsory', { size: 21, weight: 700 }) + t(x + 106, 190, m, { size: 18, fill: C.olive, weight: 600 });
  });
  b += t(450, 262, '+ choose two of', { size: 19, weight: 700, anchor: 'middle', fill: C.muted });
  ['Q3', 'Q4', 'Q5'].forEach((n, i) => {
    const x = 30 + i * 284, pick = i !== 1;
    b += rect(x, 282, 272, 100, C.tealLight, C.tealDark, 2.5, 14) + t(x + 136, 326, n, { size: 26, weight: 700, anchor: 'middle' }) + t(x + 136, 356, '14 marks (10 + 4)', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  });
  b += rect(30, 406, 840, 76, C.ink, C.ink, 0, 14) + t(450, 452, '1 hour 30 minutes  ·  50 marks  ·  50% of the O Level', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });
  add('01-paper-2-structure',
    svg(900, 506, 'How Paper 2 is built', b),
    'Questions 1 (8 marks) and 2 (14 marks) are compulsory; candidates then choose two of Questions 3 to 5, worth 14 marks each. The paper lasts 1 hour 30 minutes and carries 50 marks, half the O Level.',
    'Two compulsory questions plus two from three: revise all four topics evenly.',
    '## Where this fits in 2058');
}

// 02 Qur'an and Hadith: complementary sources
{
  let b = rect(30, 120, 380, 170, C.cream, C.mustard, 3.5, 14) + t(220, 162, 'The Qur\'an', { size: 26, weight: 700, anchor: 'middle' }) + t(220, 194, 'first source', { size: 17, anchor: 'middle', fill: C.olive, weight: 600 }) +
    rect(70, 214, 300, 52, C.panel, C.mustard, 2, 12) + t(220, 247, 'sets out core principles', { size: 18, anchor: 'middle', weight: 600 });
  b += rect(490, 120, 380, 170, C.tealLight, C.tealDark, 3, 14) + t(680, 162, 'The Hadiths', { size: 26, weight: 700, anchor: 'middle' }) + t(680, 194, 'second source of guidance', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
    rect(510, 214, 340, 52, C.panel, C.tealDark, 2, 12) + t(680, 247, 'give the practical detail', { size: 18, anchor: 'middle', weight: 600 });
  b += arrow(414, 205, 484, 205, { w: 5 }) + t(450, 190, 'lived out', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += rect(30, 314, 840, 110, C.panel, C.panelEdge, 2.5, 14) + t(56, 350, 'Sayings, actions and approvals of the Prophet (pbuh)', { size: 19, weight: 700 }) +
    t(56, 384, 'Preserved through the isnad and checked by scholars for reliability:', { size: 17, fill: C.muted }) + t(56, 408, 'distinct from the Qur\'an in status, but complementary.', { size: 17, fill: C.muted });
  add('02-quran-and-hadith',
    svg(900, 448, 'The Qur\'an and the Hadiths', b),
    'Two linked boxes: the Qur\'an sets out core principles, and the Hadiths, a second source of guidance, give the practical detail of how they were lived out. A note defines Hadiths as the Prophet\'s sayings, actions and approvals, preserved through the isnad, distinct from the Qur\'an but complementary.',
    'Principles from the Qur\'an, practical detail from the Hadiths.',
    '## The Hadiths: teaching and preservation');
}

// 03 The four Caliphs in order
{
  const cal = [['1', 'Abu Bakr', 'Consolidating the community after the Prophet\'s death'], ['2', 'Umar', 'Territorial expansion and administrative organisation'], ['3', 'Uthman', 'Standardising the compilation of the Qur\'an'], ['4', 'Ali', 'Leadership during a period of internal division']];
  let b = '';
  cal.forEach(([n, c, d], i) => {
    const x = 30 + i * 216;
    b += rect(x, 120, 190, 250, i % 2 ? C.tealLight : C.cream, i % 2 ? C.tealDark : C.mustard, 2.5, 14) + badge(x + 95, 164, 24, n, C.panel) +
      t(x + 95, 226, c, { size: 22, weight: 700, anchor: 'middle' }) + ctext(x + 95, 296, d, 168, { size: 17 }, 22);
    if (i < 3) b += arrow(x + 192, 245, x + 214, 245, { w: 3.5 });
  });
  b += pline('M125,376 L125,404 L773,404 L773,376', { marker: '', w: 3, color: C.olive }) + t(450, 436, 'Compare leadership across the period, not one Caliph in isolation.', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  add('03-caliphs-in-order',
    svg(900, 460, 'The four Rightly Guided Caliphs in order', b),
    'Four numbered cards in succession: Abu Bakr, consolidating the community; Umar, expansion and administration; Uthman, standardising the Qur\'an; and Ali, leadership during internal division. A bracket underneath says to compare them across the period.',
    'Know the order and one defining feature of each reign.',
    '## The Rightly Guided Caliphs');
}

// 04 Belief and practice
{
  const arts = ['Allah', 'His angels', 'His revealed books', 'His prophets', 'The Day of Judgement', 'Divine decree (qadar)'];
  const pils = [['Shahada', 'declaration of faith'], ['Salah', 'prayer'], ['Zakat', 'almsgiving'], ['Sawm', 'fasting in Ramadan'], ['Hajj', 'pilgrimage to Makkah']];
  let b = panel(30, 110, 840, 210) + t(56, 148, 'Six Articles of Faith', { size: 23, weight: 700 }) + t(844, 148, 'core BELIEFS', { size: 17, weight: 700, fill: C.tealDark, anchor: 'end' });
  arts.forEach((a, i) => { const x = 56 + (i % 3) * 266, y = 168 + Math.floor(i / 3) * 70; b += rect(x, y, 250, 58, C.tealLight, C.tealDark, 2.5, 12) + t(x + 125, y + 36, a, { size: 18, weight: 700, anchor: 'middle' }); });
  b += arrow(450, 322, 450, 372, { w: 5 }) + t(470, 354, 'the framework of practice built on that belief', { size: 17, weight: 700, fill: C.olive, italic: true });
  b += panel(30, 380, 840, 170) + t(56, 418, 'Five Pillars of Islam', { size: 23, weight: 700 }) + t(844, 418, 'PRACTICE', { size: 17, weight: 700, fill: C.olive, anchor: 'end' });
  pils.forEach(([n, g], i) => { const x = 56 + i * 160; b += rect(x, 438, 148, 88, C.cream, C.mustard, 2.5, 12) + t(x + 74, 472, n, { size: 20, weight: 700, anchor: 'middle' }) + tl(x + 74, 500, wrap(g, 15, 132), { size: 15, fill: C.muted, anchor: 'middle' }, 19); });
  b += rect(30, 566, 840, 64, '#f3dccd', C.rust, 2.5, 14) + t(450, 606, 'Do not just name them: explain the meaning and significance of each.', { size: 18, weight: 700, anchor: 'middle' });
  add('04-articles-and-pillars',
    svg(900, 654, 'Belief and practice', b),
    'The six Articles of Faith (Allah, angels, revealed books, prophets, the Day of Judgement and divine decree) lead to the five Pillars as the framework of practice: Shahada, Salah, Zakat, Sawm and Hajj. A warning reminds candidates to explain each, not just name it.',
    'Articles are what Muslims believe; Pillars are the practice built on them.',
    '## The Articles of Faith and Pillars of Islam');
}

// 05 Isnad worked example: mechanism to significance
{
  const chain = ['the Prophet (pbuh)', 'narrator', 'narrator', 'person recording'];
  let b = t(56, 140, 'The isnad names every person in the chain', { size: 20, weight: 700 });
  chain.forEach((c, i) => {
    const x = 40 + i * 212, hi = i === 0 || i === 3;
    b += rect(x, 160, 186, 60, hi ? C.cream : C.tealLight, hi ? C.mustard : C.tealDark, 2.5, 30) + ctext(x + 93, 190, c, 170, { size: 17, weight: 700 });
    if (i < 3) b += arrow(x + 188, 190, x + 208, 190, { w: 3 });
  });
  const st = [['Mechanism', 'Scholars checked each narrator\'s character and memory.', C.tealLight, C.tealDark], ['Result', 'Some Hadiths are classified as more reliable than others.', C.tealLight, C.tealDark], ['Why it matters', 'This scrutiny is why the Hadiths are treated as a trustworthy record.', C.cream, C.mustard]];
  st.forEach(([h, d, f, e], i) => {
    const y = 250 + i * 96;
    b += rect(30, y, 840, 80, f, e, 2.5, 14) + t(56, y + 48, h, { size: 21, weight: 700 }) + t(250, y + 48, d, { size: 18 });
  });
  b += t(450, 560, 'Linking the mechanism to why it matters is what makes an answer strong.', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  add('05-isnad-worked-example',
    svg(900, 584, 'Why the isnad matters', b),
    'A chain runs from the Prophet (pbuh) through narrators to the person recording the Hadith. Below, three steps: scholars checked each narrator\'s character and memory; so some Hadiths are classified as more reliable than others; and this scrutiny is why the Hadiths are treated as trustworthy.',
    'Mechanism, then result, then why it matters.',
    '## Worked example');
}

// 06 Common mistakes and fixes
{
  const rows = [
    ['Listing the Articles or Pillars by name', 'Explain the meaning and significance of each'],
    ['Describing each Caliph in isolation', 'Compare their leadership across the period'],
    ['Treating Hadiths as equal in status to the Qur\'an', 'Explain their distinct but complementary role'],
    ['Under-revising 2.4 because it feels familiar', 'Give it the same factual rigour as the rest'],
  ];
  let b = t(245, 132, 'Avoid', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) + t(670, 132, 'Instead', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([m, f], i) => {
    const y = 148 + i * 96;
    b += rect(30, y, 400, 82, '#f3dccd', C.rust, 2.5, 14) + ctext(230, y + 41, m, 360, { size: 18, weight: 600 }, 23);
    b += arrow(434, y + 41, 464, y + 41, { w: 3.5 });
    b += rect(470, y, 400, 82, C.tealLight, C.tealDark, 2.5, 14) + ctext(670, y + 41, f, 360, { size: 18, weight: 600 }, 23);
  });
  add('06-common-mistakes',
    svg(900, 148 + 4 * 96 + 10, 'Common mistakes and their fixes', b),
    'Four mistakes with their fixes: listing the Articles or Pillars instead of explaining them; describing Caliphs in isolation instead of comparing them; treating Hadiths as equal to the Qur\'an instead of complementary; and under-revising 2.4 instead of giving it equal rigour.',
    'Each common mistake has a simple fix: explain, compare, distinguish, revise evenly.',
    '## Common mistakes');
}
