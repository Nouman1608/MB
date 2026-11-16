import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-islamiyat-living-muslim-life';
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

// 01 Paper 1 structure and answer focus
{
  let b = '';
  const sec = [['Section A', 'Islam: Beliefs and Teachings', 'Explain what Muslims believe and why', ['Belief', 'Evidence', 'Significance'], C.tealLight, C.tealDark],
    ['Section B', 'Islam: Practices', 'Connect each belief to lived practice', ['Belief', 'Practice in daily life', ''], C.cream, C.mustard]];
  sec.forEach(([s, n, d, chain, f, e], i) => {
    const x = 30 + i * 426;
    b += rect(x, 112, 414, 300, C.panel, e, 2.5, 14) + rect(x, 112, 414, 84, f, e, 2.5, 14) + t(x + 22, 146, s, { size: 22, weight: 700 }) + t(x + 392, 146, '25 marks', { size: 19, weight: 700, anchor: 'end', fill: e === C.mustard ? C.olive : C.tealDark }) +
      t(x + 22, 178, n, { size: 17, fill: C.ink }) + t(x + 22, 234, d, { size: 17, weight: 700, fill: C.muted });
    const c = chain.filter(Boolean), cw = c.length === 3 ? 116 : 175;
    c.forEach((k, j) => {
      const cx = x + 22 + j * (cw + 14);
      b += rect(cx, 258, cw, 64, f, e, 2, 12) + ctext(cx + cw / 2, 290, k, cw - 12, { size: 16, weight: 700 }, 19);
      if (j < c.length - 1) b += arrow(cx + cw + 1, 290, cx + cw + 12, 290, { w: 3 });
    });
    b += para(x + 22, 356, i === 0 ? 'Refer to the Qur\'an or Hadith as evidence.' : 'Give concrete, specific detail of how it is done.', 370, { size: 16, fill: C.muted }, 21);
  });
  b += rect(30, 428, 840, 70, C.cream, C.mustard, 2.5, 14) + t(450, 470, 'In each section, short questions build to a 12-mark extended response on a set passage.', { size: 17, weight: 600, anchor: 'middle' });
  b += rect(30, 514, 840, 70, C.ink, C.ink, 0, 14) + t(450, 557, '1 hour 30 minutes  ·  50 marks  ·  50% of the GCSE', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });
  add('01-paper-1-structure',
    svg(900, 608, 'Paper 1: Living the Muslim Life', b),
    'Two equally weighted sections of 25 marks. Section A, Beliefs and Teachings, rewards belief, evidence and significance. Section B, Practices, rewards connecting belief to specific daily practice. In each, short questions build to a 12-mark response on a set passage; the paper lasts 1 hour 30 minutes for 50 marks.',
    'Two equal sections: revise beliefs and practices evenly.',
    '## How to approach it');
}

// 02 Pillars: practice, condition, significance
{
  const p = [
    ['Shahadah', 'Declaration of faith', '', 'Entry to Islam; states tawhid and prophethood together'],
    ['Salah', 'Five daily prayers', 'Prescribed times; requires wudu', 'Direct connection with God; discipline and equality in the rows'],
    ['Zakat', 'Ordinarily 2.5% of qualifying wealth, yearly', 'Only above the nisab', 'Purifies wealth; reduces inequality; wealth as a trust'],
    ['Sawm', 'Fasting in Ramadan, dawn to sunset', 'Exempt: ill, travelling, pregnant, nursing, elderly', 'Taqwa and self-restraint; empathy with the poor'],
    ['Hajj', 'Pilgrimage to Makkah, once', 'Only if physically and financially able', 'Unity and equality; recalls Ibrahim\'s family'],
  ];
  const xs = [30, 190, 400, 620], ws = [150, 200, 210, 250];
  let b = ['Pillar', 'Practice', 'Condition', 'Why it matters'].map((h, i) => t(xs[i] + 12, 130, h, { size: 17, weight: 700, fill: i === 2 ? C.rust : i === 3 ? C.tealDark : C.muted })).join('');
  let y = 144;
  p.forEach(([n, pr, c, s]) => {
    const h = Math.max(nl(pr, 16, ws[1] - 24), nl(c || 'x', 16, ws[2] - 24), nl(s, 16, ws[3] - 24)) * 20 + 26;
    b += rect(xs[0], y, ws[0], h, C.cream, C.mustard, 2.5, 12) + t(xs[0] + 16, y + h / 2 + 7, n, { size: 19, weight: 700 });
    b += rect(xs[1], y, ws[1], h, C.panel, C.panelEdge, 2, 12) + para(xs[1] + 12, y + 28, pr, ws[1] - 24, { size: 16 }, 20);
    b += rect(xs[2], y, ws[2], h, c ? '#f3dccd' : C.panel, c ? C.rust : C.panelEdge, 2, 12) + (c ? para(xs[2] + 12, y + 28, c, ws[2] - 24, { size: 16 }, 20) : t(xs[2] + 12, y + 28, '—', { size: 16, fill: C.muted }));
    b += rect(xs[3], y, ws[3], h, C.tealLight, C.tealDark, 2, 12) + para(xs[3] + 12, y + 28, s, ws[3] - 24, { size: 16 }, 20);
    y += h + 10;
  });
  add('02-pillars-conditions-significance',
    svg(900, y + 14, 'The Pillars: practice, conditions, significance', b),
    'A table of the Five Pillars with their practice, conditions and significance: salah has prescribed times and needs wudu; zakat applies only above the nisab; sawm exempts the ill, travelling, pregnant, nursing and elderly; hajj is only for those physically and financially able.',
    'Conditions and significance are where marks are won or lost.',
    '## The Five Pillars');
}

// 03 Hajj rites and the meaning of ihram
{
  const st = [['Ihram', 'state of purity; simple white garments'], ['Tawaf', 'seven circuits of the Ka\'bah'], ['Sa\'i', 'between the hills of Safa and Marwah'], ['Arafat', 'standing: the essential rite'], ['Mina', 'stone the pillars'], ['Sacrifice', '']];
  let b = '';
  st.forEach(([h, d], i) => {
    const x = 30 + (i % 3) * 290, y = 112 + Math.floor(i / 3) * 140, key = i === 3;
    b += rect(x, y, 260, 118, key ? C.cream : C.panel, key ? C.mustard : C.panelEdge, key ? 3.5 : 2.5, 14) + badge(x + 32, y + 34, 18, String(i + 1), key ? C.mustard : C.cream) +
      t(x + 62, y + 41, h, { size: 21, weight: 700 }) + (d ? para(x + 20, y + 80, d, 226, { size: 16, fill: C.muted }, 20) : '');
    if (i % 3 < 2) b += arrow(x + 262, y + 59, x + 286, y + 59, { w: 3 });
  });
  b += pline('M810,232 L810,242 L160,242 L160,250', { w: 3 });
  b += panel(30, 408, 840, 170) + t(56, 444, 'The meaning behind every rite', { size: 20, weight: 700 });
  const m = ['Identical white garments', 'Wealth and status become invisible', 'All stand equal before God'];
  m.forEach((s, i) => {
    const x = 56 + i * 274;
    b += rect(x, 466, 240, 86, i === 2 ? C.teal : C.tealLight, C.tealDark, 2.5, 12) + ctext(x + 120, 509, s, 214, { size: 17, weight: 700 }, 21);
    if (i < 2) b += arrow(x + 242, 509, x + 270, 509, { w: 3 });
  });
  add('03-hajj-rites',
    svg(900, 602, 'The rites of Hajj and their meaning', b),
    'Six rites in order: ihram, tawaf (seven circuits of the Ka\'bah), sa\'i between Safa and Marwah, standing at Arafat (highlighted as the essential rite), stoning the pillars at Mina and the sacrifice. Below, the chain of meaning: identical white garments make wealth and status invisible, so all stand equal before God.',
    'Name the rites, then explain the equality the white garments symbolise.',
    '## The Five Pillars');
}

// 04 Tawhid and its consequences
{
  let b = rect(250, 112, 400, 86, C.cream, C.mustard, 3.5, 14) + t(450, 150, 'Tawhid', { size: 26, weight: 700, anchor: 'middle' }) + t(450, 180, 'the oneness of God: the foundation', { size: 17, anchor: 'middle', fill: C.olive, weight: 600 });
  const c = ['Worship directed to God alone', 'No intermediaries', 'Equality of all believers before Him'];
  c.forEach((s, i) => {
    const x = 30 + i * 284;
    b += pline(`M450,200 L450,222 L${x + 136},222 L${x + 136},244`, { w: 3 });
    b += rect(x, 250, 272, 92, C.tealLight, C.tealDark, 2.5, 14) + ctext(x + 136, 296, s, 240, { size: 18, weight: 700 }, 23);
  });
  b += rect(30, 370, 840, 92, '#f3dccd', C.rust, 3, 14) + t(56, 406, 'Its opposite: shirk', { size: 21, weight: 700, fill: C.rust }) + t(56, 438, 'Associating partners with God, the gravest sin: never treat it as a minor matter.', { size: 17 });
  b += t(450, 498, 'The other five articles: angels · books · prophets · Day of Judgement · al-qadr', { size: 17, anchor: 'middle', fill: C.muted });
  add('04-tawhid-consequences',
    svg(900, 522, 'Tawhid in practice', b),
    'Tawhid, the oneness of God, branches into three practical consequences: worship directed to God alone, no intermediaries, and the equality of all believers. Below, its opposite, shirk, is marked as the gravest sin.',
    'Tawhid is a belief with practical consequences for worship and equality.',
    '## Articles of faith');
}

// 05 Daily prayers across the day
{
  const pr = [['Fajr', 'dawn', 0.04], ['Zuhr', 'midday', 0.5], ['Asr', 'afternoon', 0.72], ['Maghrib', 'sunset', 0.96], ['Isha', 'night', 1.18]];
  const X = (f) => 90 + f * 600, Y = (f) => 330 - Math.sin(Math.max(0, Math.min(1, f)) * Math.PI) * 170;
  let b = `<rect x="30" y="110" width="840" height="270" rx="14" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
  b += `<line x1="50" y1="330" x2="850" y2="330" stroke="${C.ink}" stroke-width="3"/>` + t(846, 352, 'horizon', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  let d = ''; for (let k = 0; k <= 40; k++) { const f = k / 40; d += (k ? ' L' : 'M') + X(f).toFixed(1) + ',' + Y(f).toFixed(1); }
  b += path(d, { stroke: C.mustard, w: 3, extra: 'stroke-dasharray="8 7"' });
  pr.forEach(([n, w, f]) => {
    const x = X(f), y = f > 1 ? 300 : Y(f);
    b += `<circle cx="${x}" cy="${y}" r="13" fill="${f > 1 ? C.ink : C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += t(x, y - 24, n, { size: 19, weight: 700, anchor: 'middle' }) + t(x, 362, w, { size: 16, anchor: 'middle', fill: C.muted });
  });
  const facts = [['Qiblah', 'face the direction of the Ka\'bah in Makkah'], ['Rak\'ahs', 'sequences of movements and recitations'], ['Wudu', 'required before Salah']];
  facts.forEach(([h, s], i) => { const x = 30 + i * 284; b += card(x, 400, 272, 96, { head: h, body: s, headSize: 19, size: 16, fill: C.tealLight, edge: C.tealDark, bodyFill: C.ink }); });
  b += rect(30, 512, 410, 104, C.cream, C.mustard, 2.5, 14) + t(50, 544, 'Salah vs du\'a', { size: 19, weight: 700 }) + para(50, 572, 'Salah is prescribed; du\'a is personal supplication.', 370, { size: 16 }, 20);
  b += rect(460, 512, 410, 104, C.cream, C.mustard, 2.5, 14) + t(480, 544, 'Jummah (Friday)', { size: 19, weight: 700 }) + para(480, 572, 'Unites the community, with shared teaching in the khutbah.', 370, { size: 16 }, 20);
  add('05-daily-prayers',
    svg(900, 640, 'The five daily prayers', b),
    'A schematic arc of the sun\'s path marks the five prayers: Fajr at dawn, Zuhr at midday, Asr in the afternoon, Maghrib at sunset and Isha at night. Cards add facing the Qiblah, rak\'ahs and wudu, and contrast Salah with du\'a and private prayer with Jummah.',
    'Five prescribed times from dawn to night, all facing the Qiblah.',
    '## Worship, festivals and daily life');
}

// 06 The two Eids
{
  const col = (x, h, when, items, f, e) => {
    let s = rect(x, 112, 410, 290, C.panel, e, 3, 14) + rect(x, 112, 410, 84, f, e, 3, 14) + t(x + 205, 148, h, { size: 25, weight: 700, anchor: 'middle' }) + t(x + 205, 178, when, { size: 17, anchor: 'middle', fill: e === C.mustard ? C.olive : C.tealDark, weight: 600 });
    let y = 234;
    items.forEach((it) => { s += `<circle cx="${x + 28}" cy="${y - 6}" r="5" fill="${e}"/>` + para(x + 42, y, it, 350, { size: 17 }, 22); y += nl(it, 17, 350) * 22 + 14; });
    return s;
  };
  let b = col(30, 'Eid-ul-Fitr', 'marks the end of Ramadan', ['Zakat-ul-fitr is given before the prayer'], C.cream, C.mustard) +
    col(460, 'Eid-ul-Adha', 'falls during Hajj', ['Commemorates Ibrahim\'s willingness to sacrifice his son', 'Qurbani meat traditionally shared in three parts'], C.tealLight, C.tealDark);
  const parts = ['family', 'relatives', 'the poor'];
  parts.forEach((p2, i) => { b += rect(484 + i * 122, 336, 114, 46, C.tealLight, C.tealDark, 2, 10) + t(541 + i * 122, 365, p2, { size: 16, weight: 700, anchor: 'middle' }); });
  b += rect(30, 422, 840, 60, C.panel, C.panelEdge, 2.5, 14) + t(450, 459, 'A common mistake is confusing the two Eids: link each to its occasion.', { size: 18, weight: 600, anchor: 'middle' });
  add('06-the-two-eids',
    svg(900, 506, 'The two Eids', b),
    'Eid-ul-Fitr marks the end of Ramadan, with zakat-ul-fitr given before the prayer. Eid-ul-Adha falls during Hajj, commemorates Ibrahim\'s willingness to sacrifice his son, and its qurbani meat is shared in three parts: family, relatives and the poor.',
    'Fitr ends Ramadan; Adha falls during Hajj and recalls Ibrahim.',
    '## Worship, festivals and daily life');
}

// 07 Significance of zakat: worked example
{
  const rows = [
    ['Individual', ['Purifies remaining wealth and guards against greed', 'Recognises wealth as held in trust from God'], C.cream, C.mustard],
    ['Community', ['Redistributes to the poor, orphans, travellers and the indebted', 'Reduces inequality and social resentment', 'Strengthens mutual responsibility'], C.tealLight, C.tealDark],
  ];
  let y = 112, b = '';
  rows.forEach(([h, items, f, e]) => {
    const hh = items.length * 34 + 30;
    b += rect(30, y, 200, hh, f, e, 2.5, 14) + t(130, y + hh / 2 + 8, h, { size: 22, weight: 700, anchor: 'middle' });
    b += rect(240, y, 630, hh, C.panel, C.panelEdge, 2.5, 14);
    items.forEach((it, j) => { b += `<circle cx="264" cy="${y + 34 + j * 34 - 6}" r="5" fill="${e}"/>` + t(280, y + 34 + j * 34, it, { size: 17 }); });
    y += hh + 14;
  });
  b += rect(30, y, 840, 104, C.ink, C.ink, 0, 14) + t(56, y + 40, 'Key point for full marks', { size: 20, weight: 700, fill: C.cream }) +
    t(56, y + 74, 'Zakat is an obligatory act of worship, not optional charity: that distinguishes it from sadaqah.', { size: 17, fill: '#ffffff' });
  add('07-zakat-significance',
    svg(900, y + 128, 'Why zakat matters', b),
    'A worked answer in three layers. For the individual, zakat purifies wealth and treats it as a trust from God. For the community, it redistributes to the poor, orphans, travellers and the indebted, reduces inequality and strengthens mutual responsibility. The key point: it is obligatory worship, unlike voluntary sadaqah.',
    'Individual, community, then the zakat–sadaqah distinction.',
    '## Worked example');
}
