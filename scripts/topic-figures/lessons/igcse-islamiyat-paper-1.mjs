import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-islamiyat-paper-1';
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
    ['Q1', '1.1 Major themes of the Qur\'an', 'Compulsory · set from the 15 appendix passages', '8 marks (4 + 4)'],
    ['Q2', '1.2 History and importance of the Qur\'an', 'Compulsory', '14 marks (10 + 4)'],
  ];
  q.forEach(([n, tp, rule, m], i) => {
    const y = 112 + i * 100;
    b += rect(30, y, 840, 86, C.cream, C.mustard, 2.5, 14) + rect(48, y + 17, 60, 52, C.mustard, C.ink, 2.5, 12) + t(78, y + 51, n, { size: 22, weight: 700, anchor: 'middle' }) +
      t(124, y + 37, tp, { size: 20, weight: 700 }) + t(124, y + 66, rule, { size: 17, fill: C.olive, weight: 600 }) + t(846, y + 52, m, { size: 19, weight: 700, anchor: 'end' });
  });
  b += rect(30, 316, 840, 236, C.panel, C.tealDark, 2.5, 14) + t(56, 352, 'Choose two of Questions 3, 4 and 5', { size: 21, weight: 700, fill: C.tealDark }) + t(846, 352, '14 marks each (10 + 4)', { size: 19, weight: 700, anchor: 'end' }) +
    t(56, 380, 'The genuine choice: set on 1.3 and 1.4', { size: 17, fill: C.muted });
  ['Q3', 'Q4', 'Q5'].forEach((n, i) => {
    const x = 56 + i * 270;
    b += rect(x, 404, 248, 120, C.tealLight, C.tealDark, 2.5, 12) + t(x + 124, 446, n, { size: 26, weight: 700, anchor: 'middle' }) + t(x + 124, 482, '1.3 Life of the Prophet or', { size: 17, anchor: 'middle', fill: C.muted }) + t(x + 124, 506, '1.4 First Islamic community', { size: 17, anchor: 'middle', fill: C.muted });
  });
  b += rect(30, 576, 840, 76, C.ink, C.ink, 0, 14) + t(450, 622, '1 hour 30 minutes  ·  50 marks  ·  50% of the IGCSE', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });
  add('01-paper-1-structure',
    svg(900, 676, 'How Paper 1 is built', b),
    'Question 1 on the major themes of the Qur\'an (8 marks, set from the fifteen appendix passages) and Question 2 on its history and importance (14 marks) are compulsory. Candidates then choose two of Questions 3 to 5, set on the life of the Prophet and the first Islamic community, at 14 marks each.',
    '1.1 and 1.2 cannot be avoided; the only choice is between 1.3 and 1.4 questions.',
    '## How to approach it');
}

// 02 Major themes of the Qur'an
{
  let b = rect(150, 110, 600, 84, C.cream, C.mustard, 3.5, 14) + t(450, 146, 'Tawhid: the absolute oneness of God', { size: 23, weight: 700, anchor: 'middle' }) + t(450, 176, 'the central theme, underlying every other teaching', { size: 17, anchor: 'middle', fill: C.olive, weight: 600 });
  const th = [
    ['Prophethood', 'Muhammad (pbuh) is the last of a succession of prophets with essentially the same message; stories of earlier prophets serve as lessons and warnings.'],
    ['Judgement and afterlife', 'Every person is accountable for their deeds and will be rewarded or punished, which gives the ethical teaching its urgency.'],
    ['Guidance for conduct', 'Individual and social life: worship, family law, trade, justice and the treatment of the poor.'],
  ];
  th.forEach(([h, d], i) => {
    const x = 30 + i * 284;
    b += pline(`M450,196 L450,214 L${x + 133},214 L${x + 133},234`, { w: 3 });
    b += card(x, 240, 266, 206, { head: h, body: d, headSize: 20, size: 17, fill: C.tealLight, edge: C.tealDark, bodyFill: C.ink });
  });
  add('02-major-themes',
    svg(900, 470, 'The major themes of the Qur\'an', b),
    'Tawhid, the oneness of God, sits on top as the central theme. Beneath it are three further themes: prophethood, with Muhammad (pbuh) as the last prophet; the Day of Judgement and accountability; and guidance for individual and social conduct.',
    'Tawhid underlies the other three themes: prophethood, judgement and guidance.',
    '## The major themes of the Qur\'an');
}

// 03 Makkan vs Madinan surahs
{
  const col = (x, h, sub, style, focus, f, e) => {
    let s = rect(x, 110, 410, 404, C.panel, e, 3, 14) + rect(x, 110, 410, 80, f, e, 3, 14) + t(x + 205, 146, h, { size: 25, weight: 700, anchor: 'middle' }) + t(x + 205, 174, sub, { size: 16, anchor: 'middle', fill: C.muted });
    s += t(x + 24, 226, 'Style', { size: 16, weight: 700, fill: C.muted }) + para(x + 24, 254, style, 360, { size: 19, weight: 600 }, 25);
    s += t(x + 24, 330, 'Focus', { size: 16, weight: 700, fill: C.muted });
    focus.forEach((it, i) => { s += rect(x + 24, 344 + i * 42, 362, 36, f, e, 2, 10) + t(x + 40, 368 + i * 42, it, { size: 17 }); });
    return s;
  };
  const b = col(30, 'Makkan surahs', 'revealed in Makkah', 'Generally shorter and more rhythmic', ['Tawhid', 'Prophethood', 'The Day of Judgement'], C.cream, C.mustard) +
    col(460, 'Madinan surahs', 'revealed after the move to Madinah', 'Generally longer and more detailed', ['Legislation', 'Organising the community', 'Worship, inheritance, marriage', 'Treaties and warfare'], C.tealLight, C.tealDark) +
    rect(30, 532, 840, 64, C.panel, C.panelEdge, 2.5, 14) + t(450, 572, 'Belief first in Makkah; law and community life in Madinah.', { size: 19, weight: 700, anchor: 'middle' });
  add('03-makkan-and-madinan-surahs',
    svg(900, 620, 'Makkan and Madinan surahs', b),
    'A comparison. Makkan surahs are generally shorter and more rhythmic and focus on belief: tawhid, prophethood and the Day of Judgement. Madinan surahs are generally longer and more detailed and deal with legislation and the organisation of the community, including worship, inheritance, marriage, treaties and warfare.',
    'The themes are not evenly spread: belief in Makkah, legislation in Madinah.',
    '## The major themes of the Qur\'an');
}

// 04 Compiled vs standardised
{
  let b = rect(30, 108, 840, 84, C.panel, C.panelEdge, 2.5, 14) + t(56, 142, 'In the Prophet\'s lifetime (revealed over 23 years from 610 CE; 114 surahs)', { size: 18, weight: 700 }) +
    t(56, 172, 'Preserved by memorisation (huffaz) and writing, but not yet a single bound volume.', { size: 17, fill: C.muted });
  const col = (x, who, verb, cause, steps, f, e, mk) => {
    let s = rect(x, 226, 410, 434, C.panel, e, 3, 14) + rect(x, 226, 410, 84, f, e, 3, 14) + t(x + 205, 262, who, { size: 24, weight: 700, anchor: 'middle' }) + t(x + 205, 292, verb, { size: 19, weight: 700, anchor: 'middle', fill: e === C.mustard ? C.olive : C.tealDark });
    s += t(x + 24, 340, 'Why', { size: 16, weight: 700, fill: C.muted }) + para(x + 24, 366, cause, 362, { size: 17 }, 23);
    const cy = 366 + nl(cause, 17, 362) * 23 + 12;
    s += `<line x1="${x + 24}" y1="${cy + 4}" x2="${x + 386}" y2="${cy + 4}" stroke="${C.panelEdge}" stroke-width="2"/>` + t(x + 24, cy + 34, 'What he did', { size: 16, weight: 700, fill: C.muted });
    let y = cy + 60;
    steps.forEach((st) => { s += `<circle cx="${x + 32}" cy="${y - 6}" r="5" fill="${e}"/>` + para(x + 46, y, st, 340, { size: 17 }, 23); y += nl(st, 17, 340) * 23 + 8; });
    return s;
  };
  b += col(30, 'Abu Bakr', 'COMPILED', 'At the Battle of Yamama, during the Ridda wars, many huffaz were killed: the Qur\'an risked being lost if memory alone was relied on.', ['Ordered the Qur\'an collected into a single written text', 'Entrusted the task to Zayd ibn Thabit'], C.cream, C.mustard);
  b += col(460, 'Uthman', 'STANDARDISED', 'As Islam spread, regions recited in different dialects and disputes arose; Hudhayfah warned of the danger to unity.', ['Had the sheets held by Hafsah copied by a committee under Zayd ibn Thabit', 'Standardised the dialect', 'Sent official copies to the main centres', 'Had variant copies destroyed'], C.tealLight, C.tealDark);
  add('04-compiled-vs-standardised',
    svg(900, 684, 'Compiled, then standardised', b),
    'After a strip on the Qur\'an in the Prophet\'s lifetime (memorised and written, not yet one volume), two columns compare the caliphs. Abu Bakr compiled it after many huffaz died at Yamama, entrusting the work to Zayd ibn Thabit. Uthman standardised it after dialect disputes: Hafsah\'s sheets were copied by Zayd\'s committee, copies sent to the main centres and variants destroyed.',
    'Abu Bakr compiled the Qur\'an; Uthman standardised it.',
    '## The history and compilation of the Qur\'an');
}

// 05 Timeline of the Prophet's life
{
  const ev = [
    ['570', 'Born in Makkah', 0],
    ['610', 'First revelation in the Cave of Hira', 0, 1],
    ['613', 'Begins preaching publicly; persecution by the Quraysh', 0],
    ['619', 'Year of Sorrow: deaths of Khadijah and Abu Talib', 0],
    ['622', 'Hijra to Madinah; Constitution of Madinah', 1, 1],
    ['624', 'Victory at the Battle of Badr', 1],
    ['625', 'Setback at Uhud: archers leave their position', 1],
    ['627', 'Successful defence at the Battle of the Trench', 1],
    ['628', 'Treaty of Hudaybiyyah eases tensions', 1],
    ['630', 'Largely peaceful Conquest of Makkah; general amnesty', 1],
    ['632', 'Farewell Sermon, shortly before his death', 1, 1],
  ];
  const y0 = 130, rh = 52, ax = 170;
  let b = rect(30, y0 - 22, 60, 4 * rh, C.cream, C.mustard, 2.5, 10) + rect(30, y0 - 22 + 4 * rh, 60, 7 * rh - 8, C.tealLight, C.tealDark, 2.5, 10);
  b += `<text transform="translate(68,${y0 - 22 + 2 * rh}) rotate(-90)" text-anchor="middle" font-size="18" font-weight="700" fill="${C.olive}">MAKKAH</text>`;
  b += `<text transform="translate(68,${y0 - 22 + 4 * rh + 3.5 * rh}) rotate(-90)" text-anchor="middle" font-size="18" font-weight="700" fill="${C.tealDark}">MADINAH</text>`;
  b += `<line x1="${ax}" y1="${y0 - 10}" x2="${ax}" y2="${y0 + 10 * rh + 10}" stroke="${C.ink}" stroke-width="4"/>`;
  ev.forEach(([yr, s, ph, hi], i) => {
    const y = y0 + i * rh;
    b += t(ax - 24, y + 7, yr, { size: 20, weight: 700, anchor: 'end' });
    b += `<circle cx="${ax}" cy="${y}" r="${hi ? 11 : 8}" fill="${hi ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="3"/>`;
    b += rect(ax + 26, y - 21, 870 - ax - 26, 42, hi ? C.cream : C.panel, hi ? C.mustard : C.panelEdge, 2, 10) + t(ax + 44, y + 7, s, { size: 18, weight: hi ? 700 : 400 });
  });
  add('05-life-of-the-prophet-timeline',
    svg(900, y0 + 10 * rh + 44, 'The life of the Prophet (pbuh), 570–632', b),
    'A vertical timeline split into the Makkah and Madinah periods: birth in 570, first revelation in 610, public preaching from 613, the Year of Sorrow in 619, the Hijra in 622, Badr in 624, Uhud in 625, the Trench in 627, Hudaybiyyah in 628, the Conquest of Makkah in 630 and the Farewell Sermon in 632.',
    'The Hijra of 622 divides his life into the Makkah and Madinah periods.',
    '## The life of the Prophet Muhammad (pbuh)');
}

// 06 People of the first community
{
  const g = [
    [30, 110, 'Wives', ['Khadijah: first wife and first believer', 'Aisha'], C.cream, C.mustard],
    [460, 110, 'Descendants', ['Children and grandchildren', 'The line recognised among Shia Muslims as Imams'], C.cream, C.mustard],
    [30, 314, 'Leading Companions', ['Ten Blessed Companions: promised Paradise', 'Scribes who recorded revelation', 'Other major figures of his ministry'], C.tealLight, C.tealDark],
    [460, 314, 'Four Rightly Guided Caliphs', ['Abu Bakr, Umar, Uthman and Ali', 'Studied here for their lives in his lifetime; their rule is Paper 2'], C.tealLight, C.tealDark],
  ];
  let b = '';
  g.forEach(([x, y, h, items, f, e]) => {
    b += rect(x, y, 410, 188, C.panel, e, 2.5, 14) + rect(x, y, 410, 52, f, e, 2.5, 14) + t(x + 20, y + 35, h, { size: 21, weight: 700 });
    let yy = y + 86;
    items.forEach((it) => { b += `<circle cx="${x + 28}" cy="${yy - 6}" r="5" fill="${e}"/>` + para(x + 42, yy, it, 340, { size: 17 }, 22); yy += nl(it, 17, 340) * 22 + 10; });
  });
  b += rect(30, 520, 840, 150, C.panel, C.panelEdge, 2.5, 14);
  b += rect(56, 546, 280, 76, C.cream, C.mustard, 2.5, 12) + t(196, 578, 'Emigrants (Muhajirun)', { size: 18, weight: 700, anchor: 'middle' }) + t(196, 604, 'left Makkah for Madinah', { size: 16, anchor: 'middle', fill: C.muted });
  b += rect(584, 546, 280, 76, C.tealLight, C.tealDark, 2.5, 12) + t(704, 578, 'Helpers (Ansar)', { size: 18, weight: 700, anchor: 'middle' }) + t(704, 604, 'Muslims of Madinah', { size: 16, anchor: 'middle', fill: C.muted });
  b += pline('M342,584 L578,584', { marker: 'ah', w: 3.5 }) + pline('M578,584 L342,584', { marker: 'ah', w: 3.5 }) + t(450, 572, 'formally paired', { size: 16, weight: 700, anchor: 'middle', fill: C.ink });
  b += t(450, 652, 'Met the migrants\' material needs and became a model of brotherhood.', { size: 17, anchor: 'middle', fill: C.muted });
  add('06-first-community-people',
    svg(900, 674, 'The people of the first community', b),
    'Five groups studied in 1.4: the Prophet\'s wives, including Khadijah and Aisha; his descendants, including the line of Imams recognised among Shia Muslims; his leading Companions, the Ten Blessed, his Scribes and other major figures; the four Rightly Guided Caliphs in his lifetime; and the Emigrants and Helpers, formally paired on arrival in Madinah.',
    'Topic 1.4 is organised around people, not only events.',
    '## The first Islamic community');
}
