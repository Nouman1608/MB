import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-islamiyat-life-and-teachings-of-hazrat-muhammad';
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

// 01 Pre-Islamic Arabia
{
  const q = [
    ['Religious', ['Most Arabs worshipped many idols, kept in and around the Ka\'ba', 'Also recognised a high god', 'Jewish and Christian communities; a few hanifs'], C.cream, C.mustard],
    ['Political', ['No central state', 'Tribes and clans ruled themselves', 'The Quraysh controlled Makka and its trade'], C.tealLight, C.tealDark],
    ['Moral and social', ['Blood feuds, drinking, gambling and lending at interest', 'Some infant daughters buried alive', 'Women and slaves had few rights'], '#f3dccd', C.rust],
    ['Valued too', ['Hospitality', 'Courage', 'Poetry'], C.panel, C.panelEdge],
  ];
  let b = '';
  q.forEach(([h, items, f, e], i) => {
    const x = 30 + (i % 2) * 426, y = 110 + Math.floor(i / 2) * 216;
    b += rect(x, y, 414, 202, f, e, 2.5, 14) + t(x + 22, y + 38, h, { size: 22, weight: 700 });
    let yy = y + 74;
    items.forEach((it) => { b += `<circle cx="${x + 28}" cy="${yy - 6}" r="5" fill="${C.ink}"/>` + para(x + 42, yy, it, 352, { size: 17 }, 22); yy += nl(it, 17, 352) * 22 + 10; });
  });
  b += rect(30, 548, 840, 64, C.ink, C.ink, 0, 14) + t(450, 588, 'Muslims call this period Jahiliya, the age of ignorance.', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' });
  add('01-pre-islamic-arabia',
    svg(900, 636, 'Arabia before Islam', b),
    'Four panels describe pre-Islamic Arabia: religious (idols around the Ka\'ba, a high god, Jewish and Christian communities and hanifs), political (no central state, tribes ruling themselves, the Quraysh controlling Makka), moral and social (blood feuds, drinking, gambling, interest, infanticide, few rights for women and slaves) and the values also held (hospitality, courage, poetry).',
    'Jahiliya: idol worship, tribal rule and harsh customs, alongside real virtues.',
    '## What was Arabia like before Islam?');
}

// 02 Early life: carers and milestones
{
  const ev = [
    ['before birth', 'Father Abdullah dies', C.panel],
    ['c. 570', 'Born in Makka, the Year of the Elephant, into Banu Hashim of Quraysh', C.cream],
    ['infancy', 'Nursed in the desert by Halima Sa\'diya of the Banu Sa\'d', C.panel],
    ['about 6', 'Mother Amina dies; grandfather Abdul Muttalib cares for him', C.panel],
    ['two years later', 'Abdul Muttalib dies; uncle Abu Talib raises him', C.panel],
    ['youth', 'Syria journey with Abu Talib: the monk Bahira advises protecting him', C.panel],
    ['young man', 'Shepherd and trader; known as al-Amin and al-Sadiq; Hilf al-Fudul', C.tealLight],
    ['about 25', 'Marries Hazrat Khadija (RA) after managing her trade', C.cream],
  ];
  const ax = 210, y0 = 132, rh = 62;
  let b = `<line x1="${ax}" y1="${y0}" x2="${ax}" y2="${y0 + (ev.length - 1) * rh}" stroke="${C.ink}" stroke-width="4"/>`;
  ev.forEach(([a, s, f], i) => {
    const y = y0 + i * rh, hi = f !== C.panel;
    b += t(ax - 22, y + 6, a, { size: 17, weight: 700, anchor: 'end', fill: C.muted });
    b += `<circle cx="${ax}" cy="${y}" r="9" fill="${hi ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="3"/>`;
    b += rect(ax + 24, y - 25, 870 - ax - 24, 50, f, hi ? (f === C.tealLight ? C.tealDark : C.mustard) : C.panelEdge, 2, 10) + para(ax + 42, y + 6 - (nl(s, 17, 600) - 1) * 10, s, 600, { size: 17 }, 20);
  });
  add('02-early-life',
    svg(900, y0 + (ev.length - 1) * rh + 48, 'Early life: from orphan to al-Amin', b),
    'A timeline of the Prophet\'s early life: his father Abdullah dies before his birth around 570; he is nursed by Halima Sa\'diya; his mother Amina dies when he is about six; his grandfather Abdul Muttalib and then his uncle Abu Talib raise him; Bahira advises protecting him; he becomes known as al-Amin and al-Sadiq; and he marries Hazrat Khadija (RA) at about twenty-five.',
    'A succession of carers, then a reputation for honesty that led to his marriage.',
    '## How was the Prophet (pbuh) raised?');
}

// 03 The call to prophethood
{
  const st = [
    ['Cave of Hira', 'From about forty, he withdrew here to reflect.'],
    ['610 CE, Ramadan', 'Jibril (AS) commands "Read!" (Iqra) and, after pressing him three times, recites the first verses of Sura 96.'],
    ['Home', 'Shaken, he asks Khadija to cover him. She reassures him and becomes the first to accept Islam.'],
    ['Waraqa ibn Nawfal', 'The same angel who came to Musa (AS) has come to him; his people will drive him out.'],
  ];
  let y = 112, b = '';
  st.forEach(([h, d], i) => {
    const hh = 92;
    b += rect(30, y, 230, hh, i === 1 ? C.mustard : C.cream, i === 1 ? C.olive : C.mustard, 2.5, 14) + ctext(145, y + hh / 2, h, 200, { size: 19, weight: 700 }, 23);
    b += rect(270, y, 600, hh, C.panel, C.panelEdge, 2.5, 14) + para(290, y + hh / 2 - (nl(d, 17, 560) - 1) * 11 + 6, d, 560, { size: 17 }, 22);
    if (i < 3) b += arrow(145, y + hh + 2, 145, y + hh + 16, { w: 3 });
    y += hh + 20;
  });
  add('03-call-to-prophethood',
    svg(900, y + 4, 'The first revelation', b),
    'Four stages: retreats to the Cave of Hira from about forty; in Ramadan 610 Jibril commands "Read!" and recites the first verses of Sura 96; at home Khadija reassures him and is the first to accept Islam; Waraqa ibn Nawfal recognises the angel who came to Musa and warns that his people will drive him out.',
    'From reflection in Hira to the first believer and Waraqa\'s warning.',
    '## How did the call to prophethood happen?');
}

// 04 Opposition: reasons and escalation
{
  const why = ['Attacked the idols that Makkah\'s pilgrimage trade depended on', 'Threatened leaders\' power: all equal before Allah', 'Challenged ancestral religion and tribal custom', 'Resurrection and judgement were mocked'];
  let b = panel(30, 110, 330, 520) + t(56, 148, 'Why they opposed him', { size: 20, weight: 700 });
  let yy = 186;
  why.forEach((w) => { b += `<circle cx="60" cy="${yy - 6}" r="5" fill="${C.rust}"/>` + para(74, yy, w, 270, { size: 17 }, 22); yy += nl(w, 17, 270) * 22 + 18; });
  const esc = [['Mockery', ''], ['Persecution', 'weaker Muslims tortured; some migrate to Abyssinia'], ['Boycott of Banu Hashim', 'about three years confined to a valley'], ['Year of Sorrow', 'Khadija and Abu Talib die'], ['Ta\'if', 'rejected and stoned; he prays for its people'], ['Plot to kill him', 'a young man from each clan']];
  esc.forEach(([h, d], i) => {
    const y = 110 + i * 88, shade = i / 5;
    b += rect(390, y, 480, 76, i === 5 ? '#f3dccd' : C.panel, i >= 4 ? C.rust : C.panelEdge, 2.5, 12) + t(410, y + (d ? 30 : 46), h, { size: 19, weight: 700, fill: i >= 4 ? C.rust : C.ink }) + (d ? t(410, y + 57, d, { size: 16, fill: C.muted }) : '');
  });
  b += pline('M376,130 L376,600', { color: C.rust, marker: 'ahR', w: 4 });
  b += rect(46, 470, 298, 144, C.cream, C.mustard, 2.5, 12) + para(62, 500, 'At Ta\'if he prayed for its people rather than for their punishment: a lesson in patience.', 266, { size: 17, weight: 600 }, 23);
  add('04-opposition-in-makkah',
    svg(900, 654, 'Opposition in Makkah', b),
    'Left: four reasons the Makkan leaders opposed the Prophet (pbuh): the threat to idol-based trade, to their power and status, to ancestral custom, and their mockery of resurrection. Right: the escalation from mockery to persecution, the boycott of Banu Hashim, the Year of Sorrow, rejection at Ta\'if and the plot to kill him.',
    'Economic, political and religious threats drove opposition that grew step by step.',
    '## Why did the leaders of Makkah oppose him?');
}

// 05 The Hijrah
{
  const st = [
    ['Pledges of Aqaba', 'Men from Yathrib promise to worship one God and protect the Prophet (pbuh); Muslims begin to migrate.'],
    ['Night of the plot', 'Hazrat Ali (RA) sleeps in the Prophet\'s bed; the Prophet leaves with Hazrat Abu Bakr (RA), who has prepared camels.'],
    ['Cave of Thawr', 'They hide before travelling on to Madinah.'],
    ['Madinah, 622 CE', 'First year of the Islamic calendar.'],
  ];
  let y = 112, b = '';
  st.forEach(([h, d], i) => {
    const hh = 66 + nl(d, 16, 740) * 20;
    b += badge(60, y + hh / 2, 20, String(i + 1), i === 3 ? C.mustard : C.cream) + rect(94, y, 776, hh, i === 3 ? C.cream : C.panel, i === 3 ? C.mustard : C.panelEdge, 2.5, 12) +
      t(114, y + 32, h, { size: 19, weight: 700 }) + para(114, y + 60, d, 740, { size: 16, fill: C.muted }, 20);
    y += hh + 12;
  });
  b += t(450, y + 26, 'On arrival in Madinah', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  const arr = ['Mosque built at Quba', 'Stays with Abu Ayyub Ansari (RA)', 'The Prophet\'s Mosque built', 'Each Muhajir paired with an Ansari', 'Charter of Madinah: one community'];
  arr.forEach((a, i) => {
    const x = 30 + i * 170;
    b += rect(x, y + 44, 160, 100, C.tealLight, C.tealDark, 2.5, 12) + ctext(x + 80, y + 94, a, 140, { size: 16, weight: 600 }, 20);
  });
  add('05-the-hijrah',
    svg(900, y + 168, 'The Hijrah to Madinah', b),
    'Four numbered stages: the pledges of Aqaba; the night of the plot, with Hazrat Ali (RA) in the Prophet\'s bed and Hazrat Abu Bakr (RA) leaving with him; hiding in the cave of Thawr; and arrival in Madinah in 622. Below, the first steps there: the mosque at Quba, staying with Abu Ayyub Ansari, building the Prophet\'s Mosque, pairing Muhajirun with Ansar and the Charter of Madinah.',
    'The migration of 622 and the first steps in building a community in Madinah.',
    '## How did the Hijrah take place?');
}

// 06 Battles, treaties and events 624-632
{
  const X = (yr) => 70 + ((yr - 624) / 8) * 760;
  let b = rect(X(630), 348, X(631) - X(630), 18, C.cream, C.mustard, 2, 4) + t(X(630) + 12, 390, 'Aam ul Wufood 630–631', { size: 15, weight: 700, fill: C.olive });
  b += `<line x1="${X(624) - 20}" y1="300" x2="${X(632) + 20}" y2="300" stroke="${C.ink}" stroke-width="4"/>`;
  let yrs = '';
  for (let y = 624; y <= 632; y++) { b += `<line x1="${X(y)}" y1="292" x2="${X(y)}" y2="308" stroke="${C.ink}" stroke-width="2.5"/>`; yrs += `<text x="${X(y)}" y="${y === 628 || y === 630 ? 284 : 332}" font-size="15" font-weight="700" fill="${C.muted}" text-anchor="middle" stroke="${C.bg}" stroke-width="7" paint-order="stroke">${y}</text>`; }
  const lab = [
    [624, 'Badr', 'victory', 132, C.tealDark, 'start'],
    [625, 'Uhud', 'losses; Hamza martyred', 204, C.rust, 'start'],
    [627, 'Trench', 'siege fails', 132, C.tealDark, 'start'],
    [628, 'Hudaibiyah', 'ten-year truce', 204, C.olive, 'start'],
    [628, 'Khaibar', 'oasis taken', 450, C.tealDark, 'start'],
    [630, 'Makkah', 'conquest; amnesty', 132, C.tealDark, 'start'],
    [630, 'Hunayn', 'retreat, then victory', 450, C.tealDark, 'start'],
    [632, 'Farewell', 'Pilgrimage and Sermon', 204, C.olive, 'end'],
  ];
  let ticks = '';
  lab.forEach(([yr, n, o, ly, col, anc]) => {
    const x = X(yr), below = ly > 300;
    ticks += `<line x1="${x}" y1="${below ? 308 : 292}" x2="${x}" y2="${below ? ly - 26 : ly + 30}" stroke="${col}" stroke-width="2.5"/>` + `<circle cx="${x}" cy="300" r="7" fill="${col}"/>`;
    const tx = anc === 'end' ? x - 8 : x + 8;
    ticks += t(tx, ly, n, { size: 18, weight: 700, anchor: anc, fill: col }) + t(tx, ly + 22, o, { size: 15, anchor: anc, fill: C.ink });
  });
  b += ticks + yrs;
  b += rect(30, 520, 840, 64, C.panel, C.panelEdge, 2.5, 14) + t(450, 560, 'He died in Madinah later in 632.', { size: 18, anchor: 'middle', fill: C.muted });
  add('06-battles-and-treaties',
    svg(900, 608, 'Battles, treaties and events, 624–632', b),
    'A scaled timeline from 624 to 632 marking Badr (624, victory), Uhud (625, losses), the Trench (627, siege fails), Hudaibiyah and Khaibar (628), the conquest of Makkah and Hunayn (630), the Year of Delegations (630–631) and the Farewell Pilgrimage (632).',
    'Eight years from Badr to the Farewell Pilgrimage.',
    '## What were the main battles and treaties?');
}

// 07 Farewell Sermon and lessons
{
  let b = rect(30, 110, 840, 60, C.ink, C.ink, 0, 14) + t(450, 148, 'Key teachings of the Farewell Sermon', { size: 21, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const fs = ['Sanctity of life, property and honour', 'Equality: no Arab superior to a non-Arab except by piety', 'The rights of women', 'An end to interest and blood feuds', 'Hold fast to the Qur\'an'];
  fs.forEach((s, i) => {
    const x = 30 + (i % 3) * 284 + (i >= 3 ? 142 : 0), y = 186 + Math.floor(i / 3) * 104;
    b += rect(x, y, 272, 90, C.cream, C.mustard, 2.5, 12) + ctext(x + 136, y + 45, s, 248, { size: 17, weight: 600 }, 22);
  });
  b += rect(30, 418, 840, 60, C.tealDark, C.tealDark, 0, 14) + t(450, 456, 'Lessons from his life', { size: 21, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const ls = [['Kindness to parents', '(17.23)'], ['Justice', 'even against oneself'], ['Honesty', 'in trade and speech'], ['Patience', 'in hardship, as at Ta\'if']];
  ls.forEach(([h, d], i) => {
    const x = 30 + i * 213;
    b += rect(x, 494, 201, 92, C.tealLight, C.tealDark, 2.5, 12) + t(x + 100, 532, h, { size: 18, weight: 700, anchor: 'middle' }) + t(x + 100, 560, d, { size: 15, anchor: 'middle', fill: C.ink });
  });
  add('07-farewell-sermon-and-lessons',
    svg(900, 610, 'The Farewell Sermon and lessons for today', b),
    'Five teachings of the Farewell Sermon: the sanctity of life, property and honour; equality, with no superiority except by piety; the rights of women; the end of interest and blood feuds; and holding fast to the Qur\'an. Below, four lessons from his life: kindness to parents, justice, honesty and patience.',
    'The Sermon\'s principles and the life lessons Muslims draw today.',
    '## What are the key lessons of his life?');
}
