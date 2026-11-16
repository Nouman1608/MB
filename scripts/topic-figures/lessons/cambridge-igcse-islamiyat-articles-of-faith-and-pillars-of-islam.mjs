import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-islamiyat-articles-of-faith-and-pillars-of-islam';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText.replace(/viewBox="0 0 (\d+) ([\d.]+)" width="(\d+)" height="([\d.]+)"/, (m, w, h, w2) => `viewBox="0 0 ${w} ${Math.ceil(h)}" width="${w2}" height="${Math.ceil(h)}"`), alt, caption, after });

// ---- local helpers (kept in this file so style.mjs stays shared and unchanged) ----
const wrap = (s, size, width, bold = false) => {
  const max = Math.floor(width / (size * (bold ? 0.58 : 0.53))); const out = [''];
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

// 01 Beliefs to actions: tawhid, six Articles, five Pillars
{
  const arts = [['Allah', 'tawhid'], ['Angels', 'created from light'], ['Books', 'revealed guidance'], ['Prophets', 'chosen messengers'], ['Predestination', 'al-qadr'], ['The Last Day', 'resurrection, judgement']];
  const pils = [['Shahada', 'declaration of faith'], ['Salat', 'five daily prayers'], ['Zakat', 'annual payment'], ['Sawm', 'fasting in Ramadan'], ['Hajj', 'pilgrimage to Makka']];
  let b = rect(150, 112, 600, 78, C.teal, C.tealDark, 3, 14) +
    t(450, 145, 'Tawhid: the absolute oneness of Allah', { size: 22, weight: 700, anchor: 'middle' }) +
    t(450, 173, 'shapes every other belief and every act of worship', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += arrow(450, 192, 450, 232, { color: C.tealDark, marker: 'ahT', w: 4 });
  b += panel(30, 240, 840, 250) + t(56, 278, 'Six Articles of Faith', { size: 23, weight: 700 }) + t(844, 278, 'what Muslims BELIEVE', { size: 17, weight: 700, fill: C.tealDark, anchor: 'end' });
  arts.forEach(([n, g], i) => {
    const x = 56 + (i % 3) * 266, y = 300 + Math.floor(i / 3) * 90;
    b += rect(x, y, 250, 76, C.tealLight, C.tealDark, 2.5, 12) + t(x + 125, y + 33, n, { size: 20, weight: 700, anchor: 'middle' }) + t(x + 125, y + 58, g, { size: 16, anchor: 'middle', fill: C.muted });
  });
  b += arrow(450, 492, 450, 548, { w: 5 }) + t(470, 527, 'put into action', { size: 18, weight: 700, fill: C.olive, italic: true });
  b += panel(30, 556, 840, 170) + t(56, 594, 'Five Pillars of Islam', { size: 23, weight: 700 }) + t(844, 594, 'what Muslims DO', { size: 17, weight: 700, fill: C.olive, anchor: 'end' });
  pils.forEach(([n, g], i) => {
    const x = 56 + i * 160;
    b += rect(x, 614, 148, 88, C.cream, C.mustard, 2.5, 12) + t(x + 74, 648, n, { size: 20, weight: 700, anchor: 'middle' }) + ctext(x + 74, 680, g, 132, { size: 15, fill: C.muted });
  });
  add('01-articles-to-pillars',
    svg(900, 750, 'Belief and practice in Islam', b),
    'Tawhid, the oneness of Allah, sits at the top and shapes the six Articles of Faith (Allah, angels, books, prophets, predestination and the Last Day). An arrow labelled "put into action" leads down to the Five Pillars: shahada, salat, zakat, sawm and hajj.',
    'Articles are beliefs; Pillars are the actions that express those beliefs.',
    '## What do Muslims believe about Allah?');
}

// 02 Angels and their duties
{
  const angels = [
    ['Jibril', 'Brought revelation to the prophets, including the Qur\'an to the Prophet Muhammad (pbuh)'],
    ['Mika\'il', 'Associated with providing sustenance and rain'],
    ['Israfil', 'Will blow the trumpet to begin the Day of Judgement'],
    ['The Angel of Death', 'Takes souls at death'],
    ['Kiraman Katibin', 'The noble scribes: record each person\'s good and bad deeds'],
    ['Munkar and Nakir', 'Question the dead in the grave'],
  ];
  let b = rect(30, 110, 840, 60, C.teal, C.tealDark, 3, 14) +
    t(450, 148, 'Created from light  ·  no free will  ·  always obey Allah', { size: 20, weight: 700, anchor: 'middle' });
  angels.forEach(([n, d], i) => {
    const x = 30 + (i % 2) * 426, y = 190 + Math.floor(i / 2) * 128;
    b += card(x, y, 414, 114, { head: n, body: d, headSize: 20, size: 17, fill: i === 4 ? C.cream : C.panel, edge: i === 4 ? C.mustard : C.panelEdge });
  });
  const n = note(30, 584, 840, 'Why it matters', 'Belief that the Kiraman Katibin record every deed reminds Muslims they are never unobserved, which encourages good behaviour.');
  b += n.s;
  add('02-angels-and-duties',
    svg(900, 584 + n.h + 24, 'Angels and their duties', b),
    'Six cards name the key angels and their work: Jibril brought revelation, Mika\'il is linked to sustenance and rain, Israfil will blow the trumpet, the Angel of Death takes souls, the Kiraman Katibin record deeds, and Munkar and Nakir question the dead in the grave.',
    'Each angel has a fixed duty; knowing deeds are recorded encourages good behaviour.',
    '## What are angels and what do they do?');
}

// 03 Revealed books
{
  const books = [['Suhuf', '(scrolls)', 'Ibrahim'], ['Tawrat', '', 'Musa'], ['Zabur', '', 'Dawud'], ['Injil', '', 'Isa'], ['Qur\'an', '', 'Muhammad (pbuh)']];
  let b = '';
  books.forEach(([bk, g, p], i) => {
    const x = 30 + i * 170, last = i === 4;
    b += rect(x, 120, 160, 130, last ? C.cream : C.panel, last ? C.mustard : C.panelEdge, last ? 3.5 : 2.5, 14) +
      t(x + 80, 168, bk, { size: 24, weight: 700, anchor: 'middle' }) + (g ? t(x + 80, 194, g, { size: 16, anchor: 'middle', fill: C.muted }) : '') +
      t(x + 80, 228, 'given to', { size: 15, anchor: 'middle', fill: C.muted });
    b += rect(x + 10, 262, 140, 50, last ? C.mustard : C.tealLight, last ? C.olive : C.tealDark, 2.5, 25) + ctext(x + 80, 287, p, 130, { size: p.length > 10 ? 15 : 18, weight: 700 });
  });
  b += pline('M40,345 L690,345', { color: C.tealDark, marker: 'ahT', w: 4 }) + pline('M690,345 L40,345', { color: C.tealDark, marker: 'ahT', w: 4 });
  b += t(365, 375, 'all carried the same core message: tawhid', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += rect(30, 400, 840, 92, C.panel, C.panelEdge, 2.5, 14) +
    t(56, 436, 'The Qur\'an is the final, complete and preserved revelation,', { size: 19, weight: 700 }) +
    t(56, 466, 'so it is the standard by which Muslims live.', { size: 19, fill: C.muted });
  b += pline('M780,326 L780,398', { color: C.olive, marker: 'ahO', w: 4 });
  add('03-revealed-books',
    svg(900, 516, 'The revealed books', b),
    'Five books with the prophet each was given to: the Suhuf (scrolls) to Ibrahim, the Tawrat to Musa, the Zabur to Dawud, the Injil to Isa and the Qur\'an to Muhammad (pbuh). A line under them notes the same core message of tawhid, and the Qur\'an is marked as the final, complete and preserved revelation.',
    'One message of tawhid in every book; the Qur\'an is the final, preserved standard.',
    '## What are the revealed books?');
}

// 04 The Last Day in order
{
  const steps = [
    ['Israfil blows the trumpet', 'at an appointed time'],
    ['The world ends', ''],
    ['All people are resurrected', ''],
    ['Each person is judged by Allah', 'the record of deeds is given'],
    ['Deeds are weighed', ''],
    ['People cross the bridge (sirat)', ''],
  ];
  let b = `<line x1="110" y1="132" x2="110" y2="${132 + 5 * 72}" stroke="${C.ink}" stroke-width="4"/>`;
  steps.forEach(([s, sub], i) => {
    const y = 108 + i * 72;
    b += badge(110, y + 26, 22, String(i + 1), i === 3 ? C.mustard : C.cream);
    b += rect(150, y, 620, 54, C.panel, C.panelEdge, 2.5, 12) + t(172, y + 34, s, { size: 20, weight: 700 }) + (sub ? t(748, y + 34, sub, { size: 17, fill: C.muted, anchor: 'end' }) : '');
  });
  const yS = 108 + 6 * 72 - 18;
  b += pline(`M460,${yS} L460,${yS + 18} L240,${yS + 18} L240,${yS + 52}`, { color: C.tealDark, marker: 'ahT' }) +
    pline(`M460,${yS + 18} L680,${yS + 18} L680,${yS + 52}`, { color: C.rust, marker: 'ahR' });
  const yo = yS + 60;
  b += rect(60, yo, 360, 88, C.tealLight, C.tealDark, 3, 14) + t(240, yo + 38, 'The righteous', { size: 20, weight: 700, anchor: 'middle' }) + t(240, yo + 68, 'enter paradise (janna)', { size: 18, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += rect(480, yo, 360, 88, '#f3dccd', C.rust, 3, 14) + t(660, yo + 38, 'The wicked', { size: 20, weight: 700, anchor: 'middle' }) + t(660, yo + 68, 'enter hell (jahannam)', { size: 18, anchor: 'middle', fill: C.rust, weight: 600 });
  const n = note(30, yo + 112, 840, 'Significance', 'Belief in accountability motivates Muslims to do good and avoid wrong (Sura 99).');
  b += n.s;
  add('04-events-of-the-last-day',
    svg(900, yo + 112 + n.h + 24, 'Events of the Last Day', b),
    'A numbered sequence: Israfil blows the trumpet, the world ends, all people are resurrected, each is judged by Allah with their record of deeds, deeds are weighed and people cross the sirat. The path then splits: the righteous enter paradise and the wicked enter hell.',
    'Every stage of the Last Day leads to accountability for one\'s deeds.',
    '## What will happen on the Last Day?');
}

// 05 Jihad: range of meanings
{
  let b = rect(200, 108, 500, 70, C.teal, C.tealDark, 3, 14) + t(450, 140, 'Jihad = "striving"', { size: 23, weight: 700, anchor: 'middle' }) + t(450, 166, 'in the way of Allah', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  const cols = [
    ['Spiritual and mental', 'the greater jihad', 'Struggle against one\'s own wrong desires.', C.cream, C.mustard],
    ['Speech, knowledge and wealth', '', 'Such as teaching Islam or supporting the poor.', C.panel, C.panelEdge],
    ['Physical defence', 'of the community', 'Allowed only under strict conditions.', C.panel, C.panelEdge],
  ];
  const xs = [30, 314, 598], w = 272, ch = 196;
  cols.forEach(([h, sub, d, f, e], i) => {
    const x = xs[i];
    b += pline(`M450,178 L450,200 L${x + w / 2},200 L${x + w / 2},226`, { marker: 'ah', w: 3 });
    b += rect(x, 232, w, ch, f, e, 2.5, 14);
    b += para(x + 18, 266, h, w - 36, { size: 20, weight: 700 }, 25);
    let y = 266 + nl(h, 20, w - 36, true) * 25;
    if (sub) { b += t(x + 18, y + 2, sub, { size: 17, weight: 600, fill: i === 0 ? C.olive : C.tealDark, italic: true }); y += 28; }
    b += para(x + 18, y + 8, d, w - 36, { size: 17, fill: C.muted }, 23);
  });
  b += arrow(xs[2] + w / 2, 232 + ch + 2, xs[2] + w / 2, 466);
  b += panel(30, 472, 840, 186) + t(56, 508, 'Physical defence is allowed only with:', { size: 20, weight: 700 });
  const conds = ['a just cause', 'proper authority', 'strict rules: no harm to non-combatants, women, children, the elderly, crops or places of worship'];
  const cx = [56, 296, 536], cw = [220, 220, 310];
  conds.forEach((c, i) => {
    b += `<circle cx="${cx[i] + 12}" cy="${540}" r="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + path(`M${cx[i] + 6},540 l5,5 l8,-10`, { stroke: C.tealDark, w: 3 });
    b += para(cx[i] + 34, 546, c, cw[i] - 34, { size: 18, weight: i < 2 ? 700 : 400 }, 24);
  });
  add('05-meanings-of-jihad',
    svg(900, 682, 'The range of meanings of jihad', b),
    'Jihad, meaning striving in the way of Allah, branches into three forms: the spiritual and mental struggle against wrong desires (the greater jihad); striving through speech, knowledge and wealth; and physical defence of the community, allowed only for a just cause, under proper authority and without harming non-combatants, women, children, the elderly, crops or places of worship.',
    'Jihad covers inner, intellectual and physical striving; physical defence has strict limits.',
    '## What does jihad mean?');
}

// 06 Five Pillars: practice and significance
{
  const rows = [
    ['1', 'Shahada', '"There is no god but Allah, and Muhammad is the Messenger of Allah."', 'Affirms tawhid and accepts the Prophet\'s message; said sincerely, it makes a person Muslim.'],
    ['2', 'Salat', 'Five daily prayers: Fajr, Zuhr, Asr, Maghrib and Isha, facing the qibla.', 'Constant remembrance of Allah, discipline, equality in the rows, protection from wrongdoing (29.45).'],
    ['3', 'Zakat', 'Usually 2.5 per cent of savings above the nisab held for a lunar year, paid to the groups in 9.60.', 'Purifies wealth, reduces greed, narrows the gap between rich and poor.'],
    ['4', 'Sawm', 'No food, drink or marital relations from dawn to sunset in Ramadan; suhur and iftar.', 'Self-control, empathy with the hungry, gratitude; ends with Eid al-Fitr.'],
    ['5', 'Hajj', 'Pilgrimage to Makka in Dhu al-Hijja, once in a lifetime for those able in health and wealth.', 'Equality and unity of the Ummah, remembrance of Ibrahim, Hajar and Isma\'il, forgiveness of sins.'],
  ];
  const x1 = 30, w1 = 170, x2 = 206, w2 = 330, x3 = 542, w3 = 328;
  let b = t(x2 + 12, 132, 'What Muslims do', { size: 18, weight: 700, fill: C.olive }) + t(x3 + 12, 132, 'Why it matters', { size: 18, weight: 700, fill: C.tealDark });
  let y = 146;
  rows.forEach(([n, p, d, s]) => {
    const h = Math.max(nl(d, 17, w2 - 28), nl(s, 17, w3 - 28)) * 22 + 30;
    b += rect(x1, y, w1, h, C.cream, C.mustard, 2.5, 12) + badge(x1 + 34, y + h / 2, 18, n, C.mustard) + t(x1 + 62, y + h / 2 + 7, p, { size: 20, weight: 700 });
    b += rect(x2, y, w2, h, C.panel, C.panelEdge, 2.5, 12) + para(x2 + 14, y + 27, d, w2 - 28, { size: 17 }, 22);
    b += rect(x3, y, w3, h, C.tealLight, C.tealDark, 2, 12) + para(x3 + 14, y + 27, s, w3 - 28, { size: 17, fill: C.ink }, 22);
    y += h + 10;
  });
  add('06-five-pillars-practice-significance',
    svg(900, y + 14, 'The Five Pillars: practice and significance', b),
    'A table of the Five Pillars. For each of shahada, salat, zakat, sawm and hajj it gives what Muslims do (for example 2.5 per cent of savings above the nisab for zakat) beside why it matters for the individual and the community.',
    'For each Pillar, pair what is done with why it matters: that is the two-part essay.',
    '## How are the Five Pillars practised, and why do they matter?');
}

// 07 Main observances of hajj
{
  const st = [
    ['Miqat', 'Enter ihram'],
    ['Ka\'ba', 'Tawaf around the Ka\'ba'],
    ['Safa and Marwa', 'Sa\'y between the two hills'],
    ['Arafat', 'Standing at Arafat on the 9th'],
    ['Muzdalifa', 'Spend the night'],
    ['Mina', 'Stone the pillars'],
    ['', 'Animal sacrifice'],
    ['', 'Shave or cut hair'],
    ['Ka\'ba', 'Further tawaf'],
  ];
  const W = 250, H = 120, gx = 45, x0 = 30 + (840 - 3 * W - 2 * gx) / 2, y0 = 112, gy = 50;
  const pos = (i) => { const r = Math.floor(i / 3), c = r === 1 ? 2 - (i % 3) : i % 3; return [x0 + c * (W + gx), y0 + r * (H + gy)]; };
  let b = '';
  st.forEach(([pl, a], i) => {
    const [x, y] = pos(i), key = i === 3;
    b += rect(x, y, W, H, key ? C.cream : C.panel, key ? C.mustard : C.panelEdge, key ? 3.5 : 2.5, 14) + badge(x + 32, y + 34, 20, String(i + 1), key ? C.mustard : C.cream);
    if (pl) b += t(x + 64, y + 41, pl.toUpperCase(), { size: 15, weight: 700, fill: C.tealDark });
    b += para(x + 20, y + 82, a, W - 36, { size: 18, weight: 600 }, 23);
  });
  for (let i = 0; i < 8; i++) {
    const [ax, ay] = pos(i), [bx, by] = pos(i + 1);
    if (ay === by) b += bx > ax ? arrow(ax + W + 4, ay + H / 2, bx - 6, by + H / 2) : arrow(ax - 4, ay + H / 2, bx + W + 6, by + H / 2);
    else b += arrow(ax + W / 2, ay + H + 4, bx + W / 2, by - 6);
  }
  const yb = y0 + 3 * H + 2 * gy + 24;
  const n = note(30, yb, 840, '"Hajj is Arafat"', 'Standing in prayer at Arafat on the 9th of Dhu al-Hijja is essential for a valid hajj. The whole journey stresses equality and unity, remembrance of Ibrahim, Hajar and Isma\'il, forgiveness of sins and the Day of Judgement.');
  b += n.s;
  add('07-hajj-observances',
    svg(900, yb + n.h + 24, 'The main observances of hajj', b),
    'Nine numbered stages snake across the page: ihram at the miqat, tawaf around the Ka\'ba, sa\'y between Safa and Marwa, standing at Arafat on the 9th (highlighted), the night at Muzdalifa, stoning the pillars at Mina, animal sacrifice, shaving or cutting hair, and further tawaf.',
    'Hajj follows a fixed route, and standing at Arafat is the essential act.',
    '## How are the Five Pillars practised, and why do they matter?');
}
