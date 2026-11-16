import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-islamiyat-major-teachings-in-the-hadiths';
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

// 01 Six themes map
{
  const th = [
    ['1', 'What true faith looks like', ['Religion is sincerity', 'Want for your brother what you want for yourself', 'Obligations done faithfully: "Yes"', 'Hearts and deeds, not forms'], 'intention in worship, honest friendship, avoiding showing off'],
    ['2', 'Speech and behaviour', ['Speak good or keep silent', 'Modesty produces nothing but good', 'The mustard seed', 'The world is the believer\'s prison'], 'avoiding gossip and social-media insults, humility, patience'],
    ['3', 'Charity and good work', ['Every joint must perform a charity', 'Eating from the work of one\'s hand', 'Striving with person and property'], 'volunteering, clearing litter, honest work, donating'],
    ['4', 'Treating the vulnerable', ['The widow and the poor', 'Bringing up an orphan', 'Mercy to others'], 'orphan sponsorship, visiting the elderly, kindness to animals'],
    ['5', 'Community and leaders', ['Change an evil: hand, tongue, heart', 'The believers are like a single man', 'Be gentle, do not be hard', 'Kindly in selling, buying, repayment'], 'standing up to injustice, fair business, gentle teaching'],
    ['6', 'Knowledge and martyrdom', ['Studying the Qur\'an: tethered camels', 'The many kinds of martyr'], 'Qur\'an knowledge must be maintained; martyrdom is wider than battle'],
  ];
  let b = '';
  th.forEach(([n, h, items, use], i) => {
    const x = 30 + (i % 2) * 426, y = 110 + Math.floor(i / 2) * 262, w = 414;
    const odd = i % 2 === 0;
    b += rect(x, y, w, 250, C.panel, C.panelEdge, 2.5, 14) + badge(x + 32, y + 32, 18, n, odd ? C.cream : C.tealLight) + t(x + 62, y + 39, h, { size: 20, weight: 700 });
    items.forEach((it, j) => { b += `<circle cx="${x + 24}" cy="${y + 72 + j * 27}" r="4.5" fill="${C.ink}"/>` + t(x + 38, y + 78 + j * 27, it, { size: 16 }); });
    b += rect(x + 10, y + 180, w - 20, 60, odd ? C.cream : C.tealLight, odd ? C.mustard : C.tealDark, 2, 10) + t(x + 22, y + 204, i === 5 ? 'Key:' : 'Use:', { size: 15, weight: 700 }) + para(x + 62, y + 204, use, w - 90, { size: 15, fill: C.ink }, 20);
  });
  add('01-six-themes-map',
    svg(900, 110 + 3 * 262 + 10, 'The set Hadiths in six themes', b),
    'Six theme cards group the twenty Hadiths: true faith, speech and behaviour, charity and good work, treatment of the vulnerable, community and leaders, and knowledge and martyrdom. Each lists its Hadiths by key phrase and ends with typical exam applications or its key idea.',
    'Grouping the Hadiths by theme turns twenty passages into one picture of Muslim character.',
    '## Syllabus coverage');
}

// 02 Four-step answer
{
  const st = [
    ['Identify', 'the teaching in one sentence, using a key phrase from the Hadith'],
    ['Explain', 'what belief or attitude lies behind it'],
    ['Apply', 'it with a specific modern example'],
    ['Support', 'with a related Qur\'an verse or Hadith, such as 49.10 on brotherhood or 2.177 on giving to orphans and the needy'],
  ];
  let b = '';
  st.forEach(([h, d], i) => {
    const y = 112 + i * 112;
    b += rect(30, y, 840, 96, i === 2 ? C.cream : C.panel, i === 2 ? C.mustard : C.panelEdge, 2.5, 14) + badge(80, y + 48, 26, String(i + 1), i === 2 ? C.mustard : C.tealLight) +
      t(130, y + 56, h, { size: 26, weight: 700 }) + para(270, y + 48 - (nl(d, 18, 580) - 1) * 12 + 6, d, 580, { size: 18, fill: C.muted }, 24);
  });
  b += rect(30, 566, 840, 64, C.tealLight, C.tealDark, 2.5, 14) + t(450, 606, 'Four passages set, two answered, 8 marks in total.', { size: 19, weight: 700, anchor: 'middle' });
  add('02-hadith-answer-steps',
    svg(900, 654, 'Writing a high-scoring Hadith answer', b),
    'Four numbered steps: identify the teaching in one sentence with a key phrase, explain the belief behind it, apply it with a specific modern example (highlighted), and support it with a related verse or Hadith such as Qur\'an 49.10 or 2.177.',
    'Identify, explain, apply, support: a specific modern example carries the marks.',
    '## How do you write a high-scoring answer?');
}

// 03 Every joint must perform a charity
{
  let b = rect(150, 108, 600, 76, C.cream, C.mustard, 3, 14) + t(450, 142, '"Every joint must perform a charity every day"', { size: 20, weight: 700, anchor: 'middle' }) +
    t(450, 170, 'charity is wider than giving money', { size: 17, anchor: 'middle', fill: C.olive, weight: 600 });
  const ex = ['Justice between people', 'Helping someone with their mount or luggage', 'A good word', 'Every step to prayer', 'Removing harm from the road'];
  const pos = [[30, 232], [314, 232], [598, 232], [172, 372], [456, 372]];
  ex.forEach((e, i) => {
    const [x, y] = pos[i];
    b += rect(x, y, 272, 112, C.tealLight, C.tealDark, 2.5, 14) + ctext(x + 136, y + 56, e, 240, { size: 19, weight: 600 }, 25);
  });
  b += pline('M450,186 L450,208 L166,208 L166,228', { w: 3 }) + pline('M450,208 L734,208 L734,228', { w: 3 }) + pline('M450,186 L450,228', { w: 3 });
  b += rect(30, 514, 840, 84, C.panel, C.panelEdge, 2.5, 14) + t(56, 548, 'Exam use:', { size: 19, weight: 700 }) + t(158, 548, 'volunteering, clearing litter, part-time honest work', { size: 18, fill: C.muted }) + t(158, 576, 'and donating to charities.', { size: 18, fill: C.muted });
  add('03-every-joint-a-charity',
    svg(900, 622, 'Charity in everyday acts', b),
    'The Hadith "Every joint must perform a charity every day" branches into five examples: justice between people, helping someone with their mount or luggage, a good word, every step to prayer, and removing harm from the road.',
    'Charity includes small daily acts, not only money.',
    '## Theme 3: What counts as charity and good work?');
}

// 04 Hand, tongue, heart
{
  const lv = [['Hand', 'Change it by action', C.teal, 0], ['Tongue', 'Then by speaking out', C.tealLight, 1], ['Heart', 'Then within the heart', C.cream, 2]];
  let b = t(450, 132, '"Whoever sees an evil, let him change it with his hand, then his tongue, then his heart"', { size: 18, weight: 700, anchor: 'middle', italic: true, fill: C.ink });
  lv.forEach(([h, d, f, i]) => {
    const x = 30 + i * 90, y = 160 + i * 124, w = 840 - i * 180;
    b += rect(x, y, w, 104, f, i === 2 ? C.mustard : C.tealDark, 3, 14) + badge(x + 50, y + 52, 26, String(i + 1), C.panel) +
      t(x + 98, y + 46, h, { size: 26, weight: 700 }) + t(x + 98, y + 78, d, { size: 18 });
  });
  b += rect(30, 548, 840, 70, C.panel, C.panelEdge, 2.5, 14) + t(450, 590, 'Every Muslim is responsible for society, according to ability.', { size: 19, weight: 600, anchor: 'middle' });
  add('04-changing-an-evil',
    svg(900, 642, 'Hand, tongue, heart', b),
    'A narrowing staircase of three responses to an evil, in order: change it with the hand, then the tongue, then the heart, matched to what each person is able to do.',
    'Each Muslim answers for society according to ability.',
    '## Theme 5: How should the community and its leaders act?');
}

// 05 Caring for the vulnerable
{
  const rows = [
    ['The widow and the poor', 'Managing their affairs is like striving in the way of Allah, praying at night or fasting by day.', 'ranked with devoted worship'],
    ['The orphan', '"I and the one who brings up an orphan will be in paradise like this": two fingers held together.', 'closeness to the Prophet (pbuh), himself an orphan'],
    ['Everyone', '"God will not show mercy to him who does not show mercy to others."', 'mercy given is the condition for mercy received'],
  ];
  let b = '', y = 112;
  rows.forEach(([who, d, res], i) => {
    const h = 126;
    b += rect(30, y, 230, h, C.cream, C.mustard, 2.5, 14) + ctext(145, y + h / 2, who, 200, { size: 20, weight: 700 }, 25);
    b += rect(272, y, 360, h, C.panel, C.panelEdge, 2.5, 14) + para(290, y + h / 2 - (nl(d, 17, 324) - 1) * 11 + 6, d, 324, { size: 17 }, 22);
    b += arrow(634, y + h / 2, 652, y + h / 2, { w: 3 });
    b += rect(656, y, 214, h, C.tealLight, C.tealDark, 2.5, 14) + ctext(763, y + h / 2, res, 190, { size: 17, weight: 600 }, 22);
    y += h + 14;
  });
  add('05-caring-for-the-vulnerable',
    svg(900, y + 10, 'Caring for the vulnerable', b),
    'Three rows. Caring for the widow and the poor is ranked with striving, night prayer and fasting; bringing up an orphan brings closeness to the Prophet (pbuh) in paradise; and showing mercy to others is the condition for receiving Allah\'s mercy.',
    'Care for the needy is placed on the level of devoted worship.',
    '## Theme 4: How should the vulnerable be treated?');
}
