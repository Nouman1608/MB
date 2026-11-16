import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-islamiyat-beliefs-and-teachings';
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

// 01 Tawhid and shirk
{
  const asp = [['Tawhid al-Rububiyyah', 'Allah alone is Lord: Creator, Sustainer and Controller of everything'], ['Tawhid al-Uluhiyyah', 'Allah alone deserves worship, prayer and devotion'], ['Tawhid al-Asma wa al-Sifat', 'Allah\'s names and attributes are unique, not shared with creation']];
  let b = t(450, 128, 'Tawhid: the absolute oneness of Allah', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  asp.forEach(([h, d], i) => { const x = 30 + i * 284; b += card(x, 146, 272, 150, { head: h, body: d, headSize: 18, size: 17, fill: C.tealLight, edge: C.tealDark, bodyFill: C.ink }); });
  b += t(450, 340, 'Shirk: associating partners with Allah', { size: 21, weight: 700, anchor: 'middle', fill: C.rust });
  const sh = [['Major shirk', 'Worshipping idols, other people or forces', 'Takes a person outside Islam'], ['Minor shirk', 'Showing off in worship (riya\') to gain praise', 'Damages the reward of good deeds']];
  sh.forEach(([h, d, c], i) => {
    const x = 30 + i * 426;
    b += rect(x, 358, 414, 178, '#f3dccd', C.rust, 2.5, 14) + t(x + 22, 394, h, { size: 21, weight: 700 }) + para(x + 22, 426, d, 370, { size: 17 }, 22) +
      rect(x + 16, 470, 382, 50, C.panel, C.rust, 2, 10) + t(x + 34, 502, '→ ' + c, { size: 17, weight: 700, fill: C.rust });
  });
  b += rect(30, 556, 840, 60, C.cream, C.mustard, 2.5, 14) + t(450, 594, 'Allah does not forgive shirk if a person dies without repenting (4.48).', { size: 18, weight: 600, anchor: 'middle' });
  add('01-tawhid-and-shirk',
    svg(900, 640, 'Tawhid and shirk', b),
    'Three aspects of tawhid: al-Rububiyyah (Allah alone is Lord), al-Uluhiyyah (Allah alone is worshipped) and al-Asma wa al-Sifat (His names and attributes are unique). Below, major shirk, such as worshipping idols, takes a person outside Islam; minor shirk, such as showing off in worship, damages the reward of good deeds.',
    'Three aspects of oneness, and two degrees of its opposite.',
    '## What are the types of Tawhid and Shirk?');
}

// 02 Key beliefs and what they give
{
  const bel = [['Allah', 'Tawhid', 0], ['Angels', 'Malaikah', 2], ['Revealed books', 'Kutub', 1], ['Prophethood', 'Risalah', 1], ['The Last Day', 'Yaum al-Akhirah', 2], ['Al-Qadr', 'decree', 3]];
  const gives = [['Purpose', 'to worship Allah'], ['Guidance', 'books and prophets'], ['Accountability', 'deeds recorded and judged'], ['Trust', 'in Allah\'s decree']];
  let b = t(190, 128, 'Belief', { size: 18, weight: 700, anchor: 'middle', fill: C.muted }) + t(700, 128, 'What it gives Muslims', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  const by = (i) => 146 + i * 76, gy = (j) => 152 + j * 112;
  bel.forEach(([n, a, g], i) => {
    b += pline(`M350,${by(i) + 31} C430,${by(i) + 31} 450,${gy(g) + 40} 536,${gy(g) + 40}`, { w: 2.5, color: C.tealDark, marker: 'ahT' });
  });
  bel.forEach(([n, a], i) => { b += rect(30, by(i), 320, 62, C.tealLight, C.tealDark, 2.5, 12) + t(50, by(i) + 39, n, { size: 19, weight: 700 }) + t(330, by(i) + 39, a, { size: 16, fill: C.tealDark, anchor: 'end', italic: true }); });
  gives.forEach(([h, d], j) => { b += rect(540, gy(j), 330, 80, C.cream, C.mustard, 2.5, 14) + t(562, gy(j) + 34, h, { size: 21, weight: 700 }) + t(562, gy(j) + 62, d, { size: 17, fill: C.muted }); });
  b += t(450, 630, 'All six are stated together in the Hadith of Jibril and in Qur\'an 2.285.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('02-key-beliefs-and-their-effects',
    svg(900, 654, 'The six key beliefs and what they give', b),
    'Six beliefs on the left link to four effects on the right: belief in Allah gives purpose; revealed books and prophethood give guidance; angels and the Last Day give accountability; and Al-Qadr gives trust in Allah.',
    'Each belief does a job in a Muslim\'s life: purpose, guidance, accountability or trust.',
    '## What are the key beliefs of Islam?');
}

// 03 Five names of Allah
{
  const nm = [['Qudrah', 'the All-Powerful', 'nothing is beyond His power', 'rely on Him'], ['Al-Khaliq', 'the Creator', 'made everything from nothing', 'treat creation as a trust'], ['Ar-Rahman', 'the Most Gracious', 'mercy covering all creation', ''], ['Ar-Rahim', 'the Most Merciful', 'special mercy to believers, especially in the hereafter', ''], ['Al-Alim', 'the All-Knowing', 'knows everything, including hidden thoughts', 'act sincerely']];
  let b = t(165, 130, 'Name', { size: 17, weight: 700, fill: C.muted, anchor: 'middle' }) + t(500, 130, 'Meaning', { size: 17, weight: 700, fill: C.muted, anchor: 'middle' }) + t(770, 130, 'So Muslims...', { size: 17, weight: 700, fill: C.muted, anchor: 'middle' });
  nm.forEach(([n, en, m, r], i) => {
    const y = 146 + i * 86;
    b += rect(30, y, 270, 74, C.cream, C.mustard, 2.5, 12) + t(50, y + 32, n, { size: 21, weight: 700 }) + t(50, y + 58, en, { size: 16, fill: C.olive, weight: 600 });
    b += rect(310, y, 380, 74, C.panel, C.panelEdge, 2.5, 12) + para(328, y + 37 - (nl(m, 17, 344) - 1) * 11 + 6, m, 344, { size: 17 }, 22);
    if (r) b += arrow(692, y + 37, 708, y + 37, { w: 3 }) + rect(712, y, 158, 74, C.tealLight, C.tealDark, 2.5, 12) + ctext(791, y + 37, r, 140, { size: 17, weight: 700 }, 21);
  });
  b += rect(710, 318, 160, 162, C.bg, C.tealDark, 2, 12) + ctext(790, 399, 'Every sura but one opens with these two names', 140, { size: 16, weight: 600, fill: C.tealDark }, 21);
  b += rect(30, 588, 840, 58, C.panel, C.panelEdge, 2.5, 14) + t(450, 624, '"The most beautiful names" (7.180), traditionally counted as ninety-nine', { size: 18, anchor: 'middle', fill: C.muted });
  add('03-five-names-of-allah',
    svg(900, 670, 'Five names of Allah in the specification', b),
    'A table of five names: Qudrah, the All-Powerful, so Muslims rely on Him; Al-Khaliq, the Creator, so creation is a trust; Ar-Rahman and Ar-Rahim, the Most Gracious and Most Merciful, the names that open every sura but one; and Al-Alim, the All-Knowing, so Muslims act sincerely.',
    'Each name says something about Allah and something about how Muslims should live.',
    '## What do the names of Allah teach?');
}

// 04 Hadith of Jibril: three levels
{
  const lv = [
    ['Ihsan', 'excellence', 'Worshipping Allah as though you see Him; though you do not see Him, He sees you.', C.mustard, C.olive, 460],
    ['Iman', 'belief', 'Belief in Allah, His angels, books, messengers, the Last Day and qadr.', C.cream, C.mustard, 600],
    ['Islam', 'practice', 'The five pillars.', C.tealLight, C.tealDark, 840],
  ];
  let b = '';
  lv.forEach(([n, g, d, f, e, w], i) => {
    const x = 450 - w / 2, y = 112 + i * 136;
    b += rect(x, y, w, 124, f, e, 3, 14) + t(450, y + 40, n, { size: 26, weight: 700, anchor: 'middle' }) + t(450, y + 64, g, { size: 16, weight: 700, anchor: 'middle', fill: i === 0 ? C.ink : e }) +
      ctext(450, y + 98, d, w - 40, { size: 16 }, 20);
  });
  b += rect(30, 532, 840, 90, C.panel, C.panelEdge, 2.5, 14) + t(56, 568, 'Teachings of the Hadith (recorded by Muslim)', { size: 19, weight: 700 }) +
    t(56, 598, 'Faith has three levels: practice, belief and excellence. Seek knowledge respectfully.', { size: 17, fill: C.muted });
  add('04-hadith-of-jibril-levels',
    svg(900, 646, 'Three levels in the Hadith of Jibril', b),
    'A stepped pyramid. The wide base is Islam, practice, the five pillars; above it is iman, belief in Allah, angels, books, messengers, the Last Day and qadr; at the top is ihsan, excellence, worshipping Allah as though you see Him.',
    'Practice, belief and excellence: the three levels of faith Jibril taught.',
    '## What are angels and what does the Hadith of Jibril teach?');
}

// 05 Life after death and death rituals
{
  const st = [['Death', 'the Angel of Death takes the soul'], ['Barzakh', 'questioned in the grave; a foretaste'], ['Resurrection', 'the trumpet is blown; all raised'], ['Judgement', 'record of deeds; judged justly']];
  let b = '';
  st.forEach(([h, d], i) => {
    const x = 30 + i * 214;
    b += rect(x, 112, 196, 120, i === 1 ? C.cream : C.panel, i === 1 ? C.mustard : C.panelEdge, 2.5, 14) + t(x + 98, 150, h, { size: 21, weight: 700, anchor: 'middle' }) + ctext(x + 98, 192, d, 176, { size: 16, fill: C.muted }, 20);
    if (i < 3) b += arrow(x + 198, 172, x + 212, 172, { w: 3 });
  });
  b += pline('M770,234 L770,252 L240,252 L240,270', { color: C.tealDark, marker: 'ahT' }) + pline('M770,252 L660,252 L660,270', { color: C.rust, marker: 'ahR' });
  b += rect(60, 276, 360, 80, C.tealLight, C.tealDark, 3, 14) + t(240, 308, 'Heaven (Jannah)', { size: 20, weight: 700, anchor: 'middle' }) + t(240, 336, 'eternal reward for the righteous', { size: 16, anchor: 'middle', fill: C.tealDark });
  b += rect(480, 276, 360, 80, '#f3dccd', C.rust, 3, 14) + t(660, 308, 'Hell (Jahannam)', { size: 20, weight: 700, anchor: 'middle' }) + t(660, 336, 'punishment for the wicked', { size: 16, anchor: 'middle', fill: C.rust });
  b += t(450, 384, 'Allah\'s mercy is able to forgive.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  b += panel(30, 404, 840, 244) + t(56, 440, 'Death rituals', { size: 21, weight: 700 }) + t(844, 440, 'usually soon after death', { size: 16, anchor: 'end', fill: C.muted });
  const r = [['Ghusl', 'the body is washed'], ['Kafan', 'wrapped in simple white cloth'], ['Salat al-janazah', 'the funeral prayer'], ['Burial', 'facing the qibla']];
  r.forEach(([h, d], i) => {
    const x = 56 + i * 200;
    b += rect(x, 460, 184, 96, C.tealLight, C.tealDark, 2.5, 12) + t(x + 92, 494, h, { size: 18, weight: 700, anchor: 'middle' }) + ctext(x + 92, 528, d, 170, { size: 15, fill: C.ink }, 18);
    if (i < 3) b += arrow(x + 186, 503, x + 198, 503, { w: 3 });
  });
  b += t(56, 590, 'Why: they honour the dead, remind the living of their own death,', { size: 17, fill: C.ink }) + t(56, 616, 'and express equality, since everyone is buried simply. Details differ between communities.', { size: 17, fill: C.ink });
  add('05-life-after-death',
    svg(900, 672, 'After death', b),
    'A sequence from death to Barzakh, resurrection and the Day of Judgement, splitting into Heaven for the righteous and Hell for the wicked. Below, the death rituals in order: ghusl, the kafan, the funeral prayer and burial facing the qibla, with their purposes.',
    'From death to judgement, and the rituals that honour the dead and remind the living.',
    '## What happens after death?');
}

// 06 Prophets and books
{
  const pr = [['Adam (AS)', 'first human and prophet', 'taught repentance', ''], ['Ibrahim (AS)', 'rejected idols; rebuilt the Ka\'ba with Isma\'il', 'model of submission', 'Suhuf'], ['Musa (AS)', 'led the Children of Israel from Pharaoh', '', 'Tawrat'], ['Dawud (AS)', 'received the Zabur', '', 'Zabur'], ['Isa (AS)', 'born miraculously to Maryam; miracles by Allah\'s permission', '', 'Injil'], ['Muhammad (pbuh)', 'Khatam an-Nabiyyin, the Seal of the Prophets (33.40)', '', 'Qur\'an']];
  let b = t(150, 128, 'Prophet', { size: 17, weight: 700, fill: C.muted, anchor: 'middle' }) + t(520, 128, 'Key point', { size: 17, weight: 700, fill: C.muted, anchor: 'middle' }) + t(800, 128, 'Book', { size: 17, weight: 700, fill: C.muted, anchor: 'middle' });
  pr.forEach(([p, d, d2, bk], i) => {
    const y = 144 + i * 74, last = i === 5;
    b += rect(30, y, 240, 62, last ? C.cream : C.tealLight, last ? C.mustard : C.tealDark, 2.5, 12) + t(150, y + 38, p, { size: 19, weight: 700, anchor: 'middle' });
    const txt = [d, d2].filter(Boolean).join('; ');
    b += rect(280, y, 460, 62, C.panel, C.panelEdge, 2, 12) + (txt ? para(298, y + 31 - (nl(txt, 16, 424) - 1) * 10 + 6, txt, 424, { size: 16 }, 20) : '');
    if (bk) b += rect(750, y, 120, 62, last ? C.mustard : C.cream, last ? C.olive : C.mustard, 2.5, 12) + t(810, y + 38, bk, { size: 19, weight: 700, anchor: 'middle' });
  });
  b += rect(30, 600, 840, 64, C.panel, C.ink, 2.5, 14) + t(450, 640, 'Earlier books carried Allah\'s message; the Qur\'an is the final, preserved revelation.', { size: 18, weight: 600, anchor: 'middle' });
  add('06-prophets-and-books',
    svg(900, 688, 'Prophets and holy books', b),
    'A table of prophets with a key point and their book: Adam, first human and prophet, taught repentance; Ibrahim, given the Suhuf; Musa, the Tawrat; Dawud, the Zabur; Isa, the Injil; and Muhammad (pbuh), the Seal of the Prophets, the Qur\'an.',
    'Earlier books carried the same message; the Qur\'an is final and the Prophet (pbuh) is the last.',
    '## What do the prophets and holy books teach?');
}

// 07 Rightly Guided Caliphs
{
  const cal = [['Hazrat Abu Bakr (RA)', 632, 634, 'Kept the community united; had the Qur\'an gathered'], ['Hazrat Umar (RA)', 634, 644, 'Expanded and organised the state'], ['Hazrat Uthman (RA)', 644, 656, 'Distributed standard copies of the Qur\'an'], ['Hazrat Ali (RA)', 656, 661, 'Known for knowledge and justice in a time of conflict']];
  const X = (yr) => 50 + ((yr - 632) / 29) * 800;
  let b = '';
  cal.forEach(([n, a, z], i) => { b += rect(X(a), 130, X(z) - X(a), 40, i % 2 ? C.tealLight : C.cream, i % 2 ? C.tealDark : C.mustard, 2.5, 6); });
  [632, 634, 644, 656, 661].forEach((y) => { b += `<line x1="${X(y)}" y1="124" x2="${X(y)}" y2="176" stroke="${C.ink}" stroke-width="2.5"/>` + t(X(y) + (y === 632 ? -4 : y === 634 ? 4 : 0), 114, String(y), { size: 17, weight: 700, anchor: y === 632 ? 'end' : y === 634 ? 'start' : 'middle' }); });
  cal.forEach(([n, a, z, d], i) => {
    const x = 30 + i * 213, w = 201, mid = (X(a) + X(z)) / 2, e = i % 2 ? C.tealDark : C.mustard;
    b += pline(`M${mid},172 L${mid},186 L${x + w / 2},222 L${x + w / 2},232`, { w: 2.5, color: e, marker: '' });
    b += rect(x, 232, w, 214, C.panel, e, 2.5, 14) + rect(x, 232, w, 96, i % 2 ? C.tealLight : C.cream, e, 2.5, 14) +
      ctext(x + w / 2, 272, n, w - 20, { size: 18, weight: 700 }, 22) + t(x + w / 2, 316, `${a}–${z}`, { size: 15, anchor: 'middle', fill: C.muted, weight: 600 }) +
      ctext(x + w / 2, 386, d, w - 28, { size: 17 }, 22);
  });
  b += rect(30, 464, 840, 64, C.cream, C.mustard, 2.5, 14) + t(450, 504, 'Shi\'a Muslims believe Ali (RA) should have led immediately, as the first Imam.', { size: 18, weight: 600, anchor: 'middle' });
  add('07-rightly-guided-caliphs',
    svg(900, 552, 'The four Rightly Guided Caliphs', b),
    'A scaled timeline from 632 to 661: Abu Bakr (632–634) kept the community united and had the Qur\'an gathered; Umar (634–644) expanded and organised the state; Uthman (644–656) distributed standard copies of the Qur\'an; Ali (656–661) was known for knowledge and justice in a time of conflict. A note gives the Shi\'a view of Ali as the first Imam.',
    'Four leaders in under thirty years, each remembered for a defining contribution.',
    '## How was the Muslim community led after the Prophet (pbuh)?');
}
