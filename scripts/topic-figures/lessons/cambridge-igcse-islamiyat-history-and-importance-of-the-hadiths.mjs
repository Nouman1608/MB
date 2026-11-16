import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-islamiyat-history-and-importance-of-the-hadiths';
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

// 01 Anatomy of a Hadith: isnad + matn
{
  let b = panel(30, 110, 840, 250) + t(56, 148, 'Isnad', { size: 24, weight: 700, fill: C.tealDark }) + t(150, 148, 'the chain of people who passed it on', { size: 18, fill: C.muted });
  const chain = [['A', 'told me that'], ['B', 'said that'], ['C', 'heard'], ['the Prophet (pbuh)', 'say...']];
  const xs = [56, 236, 416, 596], ws = [150, 150, 150, 248];
  chain.forEach(([n, v], i) => {
    const last = i === 3;
    b += rect(xs[i], 176, ws[i], 64, last ? C.cream : C.tealLight, last ? C.mustard : C.tealDark, 2.5, 32) + t(xs[i] + ws[i] / 2, 216, n, { size: last ? 19 : 24, weight: 700, anchor: 'middle' });
    b += t(xs[i] + ws[i] / 2, 272, v, { size: 17, anchor: 'middle', fill: C.muted, italic: true });
    if (i < 3) b += arrow(xs[i + 1] - 4, 208, xs[i] + ws[i] + 6, 208, { w: 3 });
  });
  b += t(450, 330, 'Every link must be reliable, with no gap back to the Prophet (pbuh).', { size: 18, weight: 600, anchor: 'middle', fill: C.tealDark });
  b += arrow(450, 362, 450, 400, { w: 4 });
  b += rect(30, 406, 840, 110, C.cream, C.mustard, 3, 14) + t(56, 446, 'Matn', { size: 24, weight: 700, fill: C.olive }) + t(140, 446, 'the text itself', { size: 18, fill: C.muted }) +
    t(56, 486, 'What the Prophet (pbuh) said, did or approved.', { size: 19 });
  b += rect(30, 540, 840, 70, C.panel, C.panelEdge, 2.5, 14) + t(56, 583, 'Sunnah:', { size: 19, weight: 700 }) + t(140, 583, 'the Prophet\'s way of life, known mainly through Hadiths.', { size: 19, fill: C.muted });
  add('01-isnad-and-matn',
    svg(900, 634, 'The two parts of a Hadith', b),
    'The isnad is drawn as a chain: A told me that B said that C heard the Prophet (pbuh) say. Below it the matn, the text itself, reports what the Prophet said, did or approved. A note defines the Sunnah as his way of life, known mainly through Hadiths.',
    'Isnad is the chain of narrators; matn is the text they passed on.',
    '## What is a Hadith?');
}

// 02 Stages of compilation
{
  const st = [
    ['In the Prophet\'s lifetime', 'Companions memorised his words and observed his practice. Writing was at first discouraged, but some, such as Abdullah ibn Amr ibn al-As, kept notes with his permission.'],
    ['Companions and successors', 'Hadiths taught in Madina, Kufa, Basra, Damascus and other centres; the tabi\'un travelled widely. Early notebooks (sahifas), such as that of Hammam ibn Munabbih.'],
    ['Official encouragement (717–720)', 'Umayyad caliph Umar ibn Abd al-Aziz ordered scholars to collect Hadiths in writing before they were lost. Ibn Shihab al-Zuhri was linked with this work.'],
    ['Second and third Islamic centuries', 'Musannaf collections (by subject) and musnad collections (by narrating companion); then the six Sunni collections, such as al-Bukhari (d. 870) and Muslim (d. 875).'],
  ];
  const x = 150, w = 720;
  let y = 112, b = '';
  const tops = [];
  st.forEach(([h, d], i) => {
    const hh = cardH(h, d, w, { headSize: 20, size: 17 });
    tops.push([y, hh]);
    b += card(x, y, w, hh, { head: h, body: d, headSize: 20, size: 17, fill: i === 2 ? C.cream : C.panel, edge: i === 2 ? C.mustard : C.panelEdge });
    y += hh + 22;
  });
  b = `<line x1="80" y1="${tops[0][0] + 30}" x2="80" y2="${tops[3][0] + 30}" stroke="${C.ink}" stroke-width="4"/>` + b;
  tops.forEach(([ty], i) => { b += badge(80, ty + 30, 22, String(i + 1), i === 2 ? C.mustard : C.cream) + `<line x1="104" y1="${ty + 30}" x2="148" y2="${ty + 30}" stroke="${C.ink}" stroke-width="3"/>`; });
  add('02-stages-of-compilation',
    svg(900, y + 6, 'How the Hadiths were collected', b),
    'Four stages in order: memorising and some note-taking in the Prophet\'s lifetime; teaching by companions and successors with early sahifas; the order of Umar ibn Abd al-Aziz (ruled 717–720) to collect Hadiths in writing; and the musannaf and musnad collections of the second and third Islamic centuries, followed by the six Sunni collections.',
    'From memory to notebooks to official collection to the great compilations.',
    '## How were the Hadiths collected?');
}

// 03 Musannaf vs musnad
{
  const col = (x, title, arr, items, ex, fill, edge, tag) => {
    let s = panel(x, 110, 410, 400) + t(x + 24, 150, title, { size: 26, weight: 700 }) + t(x + 24, 180, arr, { size: 18, weight: 700, fill: edge === C.mustard ? C.olive : C.tealDark });
    items.forEach((it, i) => {
      const y = 204 + i * 62;
      s += rect(x + 24, y, 362, 50, fill, edge, 2.5, 10) + t(x + 44, y + 32, it, { size: 18, weight: 600 }) + t(x + 366, y + 32, tag, { size: 15, anchor: 'end', fill: C.muted });
    });
    s += t(x + 24, 418, 'Examples', { size: 17, weight: 700, fill: C.muted });
    s += para(x + 24, 446, ex, 362, { size: 18, italic: false }, 25);
    return s;
  };
  let b = col(30, 'Musannaf', 'arranged by subject', ['Prayer', 'Fasting', 'Trade'], 'Imam Malik\'s al-Muwatta; the Musannaf of Abd al-Razzaq', C.cream, C.mustard, 'Hadiths on...') +
    col(460, 'Musnad', 'arranged by narrating companion', ['Companion 1', 'Companion 2', 'Companion 3'], 'The Musnad of Ahmad ibn Hanbal', C.tealLight, C.tealDark, 'Hadiths from...');
  b += rect(30, 530, 840, 64, C.cream, C.mustard, 2.5, 14) + t(450, 570, 'Arrangement by subject made musannaf books useful for law.', { size: 19, weight: 700, anchor: 'middle' });
  add('03-musannaf-and-musnad',
    svg(900, 618, 'Two ways to arrange a collection', b),
    'Side-by-side comparison. A musannaf groups Hadiths by subject, such as prayer, fasting or trade (al-Muwatta of Imam Malik, the Musannaf of Abd al-Razzaq). A musnad groups them by the companion who narrated them (the Musnad of Ahmad ibn Hanbal).',
    'Musannaf: by subject. Musnad: by narrator.',
    '## How were the Hadiths collected?');
}

// 04 Testing reliability
{
  const L = ['Narrators of good character and religious practice', 'Sound memory', 'Could have met the person they report from', 'No gap in the chain back to the Prophet (pbuh)'];
  const R = ['Does not contradict the Qur\'an', 'Does not contradict well-established Hadiths or reason', 'Fits the Prophet\'s known character and language'];
  const col = (x, title, sub, items, fill, edge) => {
    let s = rect(x, 110, 410, 330, C.panel, C.panelEdge, 2.5, 14) + rect(x, 110, 410, 74, fill, edge, 2.5, 14) +
      t(x + 205, 142, title, { size: 22, weight: 700, anchor: 'middle' }) + t(x + 205, 170, sub, { size: 16, anchor: 'middle', fill: C.muted });
    let y = 214;
    items.forEach((it) => {
      s += `<circle cx="${x + 30}" cy="${y - 6}" r="11" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + path(`M${x + 24},${y - 6} l5,5 l8,-10`, { stroke: C.ink, w: 2.5 });
      s += para(x + 52, y, it, 340, { size: 17 }, 22);
      y += nl(it, 17, 340) * 22 + 18;
    });
    return s;
  };
  let b = col(30, 'Isnad criticism', 'the chain (ilm al-rijal)', L, C.tealLight, C.tealDark) + col(460, 'Matn criticism', 'the text', R, C.cream, C.mustard);
  b += pline('M235,442 L235,470 L450,470 L450,530') + pline('M665,442 L665,470 L450,470', { marker: '' });
  b += t(466, 506, 'graded', { size: 18, weight: 700, fill: C.muted, italic: true });
  const g = [['Sahih', 'sound', C.teal, C.tealDark], ['Hasan', 'good', C.tealLight, C.tealDark], ['Da\'if', 'weak', C.cream, C.mustard], ['Fabricated', 'rejected', '#f3dccd', C.rust]];
  g.forEach(([n, s2, f, e], i) => {
    const x = 30 + i * 214;
    b += rect(x, 538, 198, 82, f, e, 2.5, 14) + t(x + 99, 572, n, { size: 21, weight: 700, anchor: 'middle' }) + t(x + 99, 600, s2, { size: 17, anchor: 'middle', fill: C.muted });
  });
  add('04-testing-reliability',
    svg(900, 644, 'Testing whether a Hadith is reliable', b),
    'Two checklists feed one grade. Isnad criticism checks narrators\' character, memory, whether they could have met and that there is no gap in the chain. Matn criticism checks the text against the Qur\'an, established Hadiths, reason and the Prophet\'s character. Results are sahih (sound), hasan (good), da\'if (weak), or fabricated and rejected.',
    'Both the chain and the text are tested before a Hadith is graded.',
    '## How did scholars test whether a Hadith was reliable?');
}

// 05 Four Shi'a collections
{
  let b = rect(150, 108, 600, 70, C.teal, C.tealDark, 3, 14) + t(450, 140, 'Hadiths transmitted through', { size: 18, anchor: 'middle', fill: C.tealDark, weight: 600 }) + t(450, 166, 'the Prophet\'s family (Ahl al-Bayt) and the Imams', { size: 20, weight: 700, anchor: 'middle' });
  const rows = [
    ['al-Kulayni', [['al-Kafi', 'belief as well as law', true]]],
    ['Ibn Babawayh (al-Shaykh al-Saduq)', [['Man la yahduruhu al-faqih', 'mainly law']]],
    ['al-Shaykh al-Tusi', [['Tahdhib al-ahkam', 'mainly law'], ['al-Istibsar', 'mainly law']]],
  ];
  let y = 206;
  rows.forEach(([c, bks]) => {
    const h = bks.length === 1 ? 96 : 156;
    b += rect(30, y, 300, h, C.panel, C.panelEdge, 2.5, 14) + t(48, y + 28, 'Compiler', { size: 15, fill: C.muted, weight: 600 }) + para(48, y + 56, c, 270, { size: 19, weight: 700 }, 24);
    bks.forEach(([bk, f, hi], j) => {
      const by = bks.length === 1 ? y + 12 : y + j * 84;
      b += arrow(334, by + 36, 400, by + 36, { w: 3 });
      b += rect(406, by, 464, 72, hi ? C.cream : C.tealLight, hi ? C.mustard : C.tealDark, 2.5, 14) + t(428, by + 32, bk, { size: 20, weight: 700, italic: true }) + t(428, by + 58, f, { size: 17, fill: C.muted });
    });
    y += h + 20;
  });
  add('05-four-shia-collections',
    svg(900, y + 6, 'The four Shi\'a collections', b),
    'Three compilers and their four books: al-Kulayni compiled al-Kafi, covering belief as well as law; Ibn Babawayh (al-Shaykh al-Saduq) compiled Man la yahduruhu al-faqih; al-Shaykh al-Tusi compiled Tahdhib al-ahkam and al-Istibsar. The last three focus mainly on law.',
    'Three compilers, four books; only al-Kafi covers belief as well as law.',
    '## What are the four Shi\'a collections?');
}

// 06 Sources of law
{
  const lv = [
    ['1', 'The Qur\'an', 'The first source of law.', C.mustard, C.cream],
    ['2', 'Hadiths and the Sunnah', 'Explain the Qur\'an (how to pray), add detail to its rulings (amounts of zakat) and guide where it is silent.', C.cream, C.panel],
    ['3', 'Ijma\'  (consensus)', 'Used when the community\'s scholars agree on a ruling, often based on Qur\'an and Hadith.', C.tealLight, C.panel],
    ['4', 'Qiyas  (analogy)', 'Extends an existing ruling to a new case with the same cause: the ban on wine applied to other intoxicants.', C.tealLight, C.panel],
  ];
  let y = 112, b = '';
  lv.forEach(([n, h, d, bf, f], i) => {
    const ind = i * 34, w = 840 - ind;
    const hh = Math.max(84, cardH(h, d, w - 80, { headSize: 21, size: 17 }));
    b += rect(30 + ind, y, w, hh, f, i === 0 ? C.mustard : C.panelEdge, i === 0 ? 3.5 : 2.5, 14) + badge(30 + ind + 40, y + hh / 2, 22, n, bf);
    b += para(30 + ind + 80, y + 34, h, w - 100, { size: 21, weight: 700 }, 26) + para(30 + ind + 80, y + 62, d, w - 100, { size: 17, fill: C.muted }, 22);
    y += hh + 22;
  });
  add('06-sources-of-law',
    svg(900, y + 4, 'Hadiths among the sources of law', b),
    'Four stepped levels: the Qur\'an as the first source; Hadiths and the Sunnah second, explaining, detailing and filling gaps; ijma\', the consensus of scholars; and qiyas, analogy, illustrated by extending the ban on wine to other intoxicants.',
    'Hadiths are the second source of law, after the Qur\'an and before ijma\' and qiyas.',
    '## How are the Hadiths used in Islamic law?');
}
