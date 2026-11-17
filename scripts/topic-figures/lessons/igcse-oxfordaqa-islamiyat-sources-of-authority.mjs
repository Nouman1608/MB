import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-islamiyat-sources-of-authority';
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

// 01 How the sources relate
{
  const lv = [
    ['The Qur\'an', 'primary source', 'Directly revealed', C.mustard, C.cream, C.mustard],
    ['Hadith and Sunnah', 'records the Prophet\'s (pbuh) words and practice', 'Explain and apply the Qur\'an', C.cream, C.panel, C.mustard],
    ['Ijma (consensus) and Qiyas (analogy)', 'secondary sources', 'Used by scholars to derive rulings where the Qur\'an and Hadith give no explicit guidance', C.tealLight, C.panel, C.tealDark],
  ];
  let y = 112, b = '';
  lv.forEach(([h, sub, d, bf, f, e], i) => {
    const ind = i * 40, w = 840 - 2 * ind, hh = 88 + nl(d, 17, w - 110) * 21;
    b += rect(30 + ind, y, w, hh, f, e, i === 0 ? 3.5 : 2.5, 14) + badge(30 + ind + 42, y + hh / 2, 22, String(i + 1), bf) +
      t(30 + ind + 82, y + 38, h, { size: 21, weight: 700 }) + t(30 + ind + 82, y + 64, sub, { size: 16, fill: C.muted, italic: true }) + para(30 + ind + 82, y + 90, d, w - 110, { size: 17 }, 21);
    y += hh + 14;
  });
  b += rect(30, y + 6, 840, 84, C.panel, C.ink, 2.5, 14) + t(56, y + 40, 'A common scholarly account, not the only answer', { size: 19, weight: 700 }) +
    t(56, y + 70, 'The specification asks for meaning, role and importance; a reasoned different account is not penalised.', { size: 16, fill: C.muted });
  add('01-how-the-sources-relate',
    svg(900, y + 114, 'How the sources of authority relate', b),
    'Three nested levels: the Qur\'an as the primary, directly revealed source; the Hadith and Sunnah, recording the Prophet\'s words and practice to explain and apply it; and Ijma and Qiyas as secondary sources used where the Qur\'an and Hadith give no explicit guidance. A note says this is a common scholarly account, not a required ranking.',
    'Primary, explanatory, then secondary: one common way to relate the four sources.',
    '## How to approach it');
}

// 02 Testing and grading Hadith
{
  let b = rect(30, 112, 410, 124, C.tealLight, C.tealDark, 3, 14) + t(56, 150, 'Isnad', { size: 25, weight: 700 }) + t(150, 150, 'the chain', { size: 17, fill: C.tealDark, weight: 600 }) +
    para(56, 186, 'Checks the chain of narrators back to the Prophet (pbuh).', 360, { size: 18 }, 24);
  b += rect(460, 112, 410, 124, C.cream, C.mustard, 3, 14) + t(486, 150, 'Matn', { size: 25, weight: 700 }) + t(566, 150, 'the text', { size: 17, fill: C.olive, weight: 600 }) +
    para(486, 186, 'Checks the content of the text itself.', 360, { size: 18 }, 24);
  b += t(450, 274, 'Do not confuse the two', { size: 17, weight: 700, anchor: 'middle', fill: C.rust, italic: true });
  b += pline('M235,238 L235,292 L450,292 L450,346') + pline('M665,238 L665,292 L450,292', { marker: '' });
  const g = [['Sahih', C.teal], ['Hasan', C.tealLight], ['Daeef', C.cream], ['Maudu', '#f3dccd']];
  b += `<defs><linearGradient id="rel" x1="0" x2="1"><stop offset="0" stop-color="${C.tealDark}"/><stop offset="1" stop-color="${C.rust}"/></linearGradient></defs>`;
  g.forEach(([n, f], i) => { const x = 30 + i * 214; b += rect(x, 352, 198, 70, f, i === 3 ? C.rust : C.tealDark, 2.5, 12) + t(x + 99, 395, n, { size: 22, weight: 700, anchor: 'middle' }); });
  b += `<rect x="30" y="440" width="840" height="10" rx="5" fill="url(#rel)"/>` + t(30, 476, 'more reliable', { size: 16, weight: 700, fill: C.tealDark }) + t(870, 476, 'less reliable', { size: 16, weight: 700, fill: C.rust, anchor: 'end' });
  add('02-testing-and-grading-hadith',
    svg(900, 500, 'Testing and categorising Hadith', b),
    'Two tests feed the grading: the isnad checks the chain of narrators back to the Prophet (pbuh), and the matn checks the content of the text. The four categories run from more to less reliable: Sahih, Hasan, Daeef and Maudu.',
    'Isnad tests the chain, matn tests the text; together they set the category.',
    '## How to approach it');
}

// 03 Point, evidence, explain, link
{
  const st = [
    ['Point', 'The Qur\'an gives general principles and commands but does not always explain how to put them into practice.', C.tealLight, C.tealDark],
    ['Evidence', 'It commands Salah and Zakah; the Hadith and Sunnah record the exact method, timing and conditions the Prophet (pbuh) demonstrated.', C.panel, C.panelEdge],
    ['Explain', 'Without the Hadith, many commands would stay open to interpretation: it is the practical explanation of the Qur\'an.', C.panel, C.panelEdge],
    ['Link', 'So the Hadith is the second source of Shariah, subordinate to but essential alongside the Qur\'an.', C.cream, C.mustard],
  ];
  let y = 112, b = '';
  st.forEach(([h, d, f, e], i) => {
    const hh = 26 + nl(d, 17, 600) * 22 + 12;
    b += rect(30, y, 180, hh, i === 3 ? C.mustard : i === 0 ? C.teal : C.tealLight, i === 3 ? C.olive : C.tealDark, 2.5, 14) + t(120, y + hh / 2 + 8, h, { size: 22, weight: 700, anchor: 'middle' });
    b += rect(222, y, 648, hh, f, e, 2.5, 14) + para(244, y + 32, d, 600, { size: 17 }, 22);
    y += hh + 12;
  });
  b += t(450, y + 22, 'This structure works for most "explain the importance of" questions.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('03-peel-hadith-importance',
    svg(900, y + 44, 'Point, evidence, explain, link', b),
    'A four-row worked answer on why Hadith is needed: point (the Qur\'an gives principles without always the method), evidence (Salah and Zakah are detailed by the Sunnah), explain (Hadith is the practical explanation) and link (so it is the second source of Shariah).',
    'Use point, evidence, explain, link for "importance" questions.',
    '## Worked example: explaining why Hadith is needed alongside the Qur\'an');
}

// 04 Three stages of the Qur'an
{
  const st = [['Revelation', 'how it was received'], ['Preservation', 'how it was memorised and recorded'], ['Compilation', 'how it was assembled into a single text']];
  let b = '';
  st.forEach(([h, d], i) => {
    const x = 30 + i * 290;
    b += rect(x, 120, 260, 150, i === 1 ? C.cream : C.tealLight, i === 1 ? C.mustard : C.tealDark, 3, 14) + badge(x + 130, 120, 22, String(i + 1), C.panel) +
      t(x + 130, 186, h, { size: 24, weight: 700, anchor: 'middle' }) + ctext(x + 130, 230, d, 230, { size: 17 }, 22);
    if (i < 2) b += arrow(x + 264, 195, x + 286, 195, { w: 4 });
  });
  b += rect(30, 296, 840, 64, '#f3dccd', C.rust, 2.5, 14) + t(450, 336, 'Keep the three stages distinct when describing how we have the Qur\'an.', { size: 18, weight: 600, anchor: 'middle' });
  add('04-revelation-preservation-compilation',
    svg(900, 384, 'Three stages, not one', b),
    'Three separate stages: revelation, how the Qur\'an was received; preservation, how it was memorised and recorded; and compilation, how it was assembled into a single text.',
    'Revelation, preservation and compilation are distinct stages.',
    '## Common mistakes');
}
