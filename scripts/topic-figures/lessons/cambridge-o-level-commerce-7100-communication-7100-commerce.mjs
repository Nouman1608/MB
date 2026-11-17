import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-commerce-7100-communication-7100-commerce';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tx = (x, y, s, o = {}) => t(x, y, esc(s), o);
const wrap = (s, px, size = 17) => {
  const n = Math.max(6, Math.floor(px / (size * 0.53)));
  const out = [];
  for (const para of String(s).split('\n')) {
    let cur = '';
    for (const w of para.split(' ')) {
      if (cur && (cur + ' ' + w).length > n) { out.push(cur); cur = w; } else cur = (cur ? cur + ' ' : '') + w;
    }
    out.push(cur);
  }
  return out;
};
const LH = (size) => Math.round(size * 1.32);
// wrapped paragraph; returns svg. pw = wrap width in px
const para = (x, y, s, pw, o = {}) => wrap(s, pw, o.size || 17).map((l, i) => tx(x, y + i * LH(o.size || 17), l, o)).join('');
const nl = (s, pw, size = 17) => wrap(s, pw, size).length;
const rect = (x, y, w, h, { fill = C.panel, edge = C.panelEdge, rx = 12, sw = 2.5, dash = '' } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const parrow = (d, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// pill / chip with centred label (label may be array of lines)
const pill = (x, y, w, h, label, { fill = C.tealLight, edge = C.ink, size = 18, weight = 700, color = C.ink, sw = 2.5, rx } = {}) => {
  const ls = Array.isArray(label) ? label : [label];
  const lh = LH(size), y0 = y + h / 2 - ((ls.length - 1) * lh) / 2 + size * 0.35;
  return rect(x, y, w, h, { fill, edge, sw, rx: rx ?? Math.min(h / 2, 14) }) + ls.map((l, i) => tx(x + w / 2, y0 + i * lh, l, { size, weight, anchor: 'middle', fill: color })).join('');
};
const tick = (cx, cy, r = 13) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.tealDark}"/>` + path(`M${cx - r * 0.45},${cy + r * 0.02} L${cx - r * 0.1},${cy + r * 0.38} L${cx + r * 0.5},${cy - r * 0.35}`, { stroke: '#ffffff', w: 3 });
const cross = (cx, cy, r = 13) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.rust}"/>` + path(`M${cx - r * 0.38},${cy - r * 0.38} L${cx + r * 0.38},${cy + r * 0.38} M${cx + r * 0.38},${cy - r * 0.38} L${cx - r * 0.38},${cy + r * 0.38}`, { stroke: '#ffffff', w: 3 });
const dot = (cx, cy, r = 5, fill = C.ink) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>`;
// list of items with a marker; returns {s, h}
const list = (x, y, items, pw, { size = 17, gap = 10, mark = 'dot', color = C.ink, markColor = C.ink } = {}) => {
  let s = '', yy = y;
  for (const it of items) {
    const n = nl(it, pw - 32, size);
    if (mark === 'tick') s += tick(x + 12, yy - size * 0.35, 12);
    else if (mark === 'cross') s += cross(x + 12, yy - size * 0.35, 12);
    else if (mark === 'dot') s += dot(x + 8, yy - size * 0.35, 5, markColor);
    s += para(x + 32, yy, it, pw - 32, { size, fill: color });
    yy += n * LH(size) + gap;
  }
  return { s, h: yy - y - gap };
};

// 01 Four types: strength, weakness, overlaps
{
  const types = [
    ['Written', 'Words on paper or screen', 'Permanent record', 'Slower; no instant questions', C.tealLight],
    ['Oral', 'Spoken', 'Immediate feedback; tone adds meaning', 'No record unless notes are taken', C.cream],
    ['Electronic', 'Digital devices and networks', 'Fast; many people at low cost', 'Needs devices, power, network; security risks', C.tealLight],
    ['Visual', 'Images, signs, charts, colours, video', 'Quick to grasp, even across languages', 'Simple messages only; may be misread', C.cream],
  ];
  let body = '';
  types.forEach(([n, m, s, w, fill], i) => {
    const x = 30 + i * 215;
    body += panel(x, 110, 195, 300) + rect(x, 110, 195, 50, { fill, edge: C.panelEdge, rx: 14 }) + tx(x + 97, 143, n, { size: 20, weight: 700, anchor: 'middle' });
    body += para(x + 16, 186, m, 165, { size: 15, fill: C.muted, italic: true });
    body += tick(x + 26, 250, 11) + para(x + 44, 256, s, 140, { size: 15 });
    body += cross(x + 26, 340, 11) + para(x + 44, 346, w, 140, { size: 15 });
  });
  body += panel(30, 430, 840, 230) + tx(54, 466, 'Type = form of the message.  Method = the way it is sent.', { size: 18, weight: 700 });
  const row = (y, label, parts) => {
    let s = tx(54, y + 30, label, { size: 18, weight: 700 }) + tx(250, y + 30, '=', { size: 22, weight: 700, anchor: 'middle' });
    let x = 280;
    parts.forEach((p, i) => {
      if (i) { s += tx(x + 14, y + 30, '+', { size: 22, weight: 700, anchor: 'middle' }); x += 30; }
      s += pill(x, y + 4, 150, 40, p, { fill: p === 'Written' || p === 'Electronic' ? C.tealLight : C.cream, size: 16 }); x += 160;
    });
    return s;
  };
  body += row(482, 'An email', ['Written', 'Electronic']) + row(538, 'A videoconference', ['Oral', 'Visual', 'Electronic']) + row(594, 'A poster', ['Visual', 'Written']);
  body += tx(778, 627, '(usually)', { size: 15, fill: C.muted, italic: true });
  add('01-types-of-communication',
    svg(900, 685, 'Four types of communication', body),
    'Four cards give the meaning, main strength and main weakness of written, oral, electronic and visual communication. Below, one method can be several types: an email is written and electronic, a videoconference is oral, visual and electronic, and a poster is visual and usually written.',
    'A type is the form of a message; one method can belong to more than one type.',
    '## The four types of communication');
}

// 02 Eight methods
{
  const m = [
    ['Letter', 'Formal, signed, permanent record', 'Slow; postage and printing', 'contract terms, complaints'],
    ['Telephone', 'Instant two-way conversation', 'No written record; time zones', 'urgent queries, late deliveries'],
    ['Face to face', 'Builds trust; the most private', 'Travel time and cost', 'large contracts, appraisals'],
    ['Videoconferencing', 'See people without travel', 'Needs good internet and equipment', 'overseas suppliers, branches'],
    ['Email', 'Fast, cheap, attachments, record', 'Ignored, filtered or hacked', 'orders, quotations, invoices'],
    ['Web-based chat', 'Routine answers at any hour, no staff', 'Struggle with complex problems', 'customer service on retail sites'],
    ['Social media', 'Reaches very many quickly and cheaply', 'Public; short-lived; not secure', 'promotions, launches'],
    ['Posters', 'Visual; cheap for local messages', 'One-way; limited detail', 'safety notices, in-store offers'],
  ];
  let body = '';
  m.forEach(([name, plus, minus, use], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 150;
    body += panel(x, y, 410, 136) + tx(x + 20, y + 30, name, { size: 19, weight: 700 }) + tx(x + 20, y + 54, 'Use: ' + use, { size: 15, fill: C.olive, italic: true });
    body += tick(x + 32, y + 82, 11) + para(x + 54, y + 88, plus, 340, { size: 16 });
    body += cross(x + 32, y + 114, 11) + para(x + 54, y + 120, minus, 340, { size: 16, fill: C.muted });
  });
  add('02-eight-methods',
    svg(900, 720, 'Eight methods and where business uses them', body),
    'Eight cards, one per method, each with a main advantage, a main disadvantage and a typical commercial use: letters for contract terms, telephone for urgent queries, face to face for large contracts, videoconferencing for overseas suppliers, email for orders and invoices, web chat for customer service, social media for promotions and posters for safety notices.',
    'Each method has a typical commercial use that matches its strengths.',
    '## The eight methods of communication');
}

// 03 Two factor scales: urgency and security
{
  const scale = (y, title, left, right, items, col) => {
    let s = panel(30, y, 840, 195) + tx(54, y + 36, title, { size: 20, weight: 700 });
    s += arrow(80, y + 80, 830, y + 80, { color: col, marker: col === C.tealDark ? 'ahT' : 'ahR', w: 4 });
    s += tx(80, y + 66, left, { size: 15, weight: 700, fill: C.muted }) + tx(830, y + 66, right, { size: 15, weight: 700, fill: C.muted, anchor: 'end' });
    items.forEach(([lab, x, w], i) => { s += pill(x, y + 104, w, wrap(lab, w - 16, 16).length > 1 ? 70 : 48, wrap(lab, w - 16, 16), { fill: i % 2 ? C.cream : C.tealLight, size: 16 }); });
    return s;
  };
  let body = scale(110, 'Urgency: how fast is the reply?', 'immediate', 'days', [['Telephone, web chat, face to face', 60, 300], ['Email: hours', 420, 160], ['Letter: days', 680, 160]], C.tealDark);
  body += scale(325, 'Security: how easy to intercept or see?', 'hardest', 'public', [['Face to face', 60, 160], ['Sealed letter', 240, 160], ['Encrypted email (can be hacked)', 420, 230], ['Social media, posters', 670, 180]], C.rust);
  body += rect(30, 540, 840, 80, { fill: C.cream, edge: C.olive });
  body += tx(450, 575, 'Urgent but confidential? A phone call, then an encrypted email', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  body += tx(450, 601, 'to confirm the details in writing.', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  add('03-urgency-security-scales',
    svg(900, 645, 'Two factors as scales', body),
    'Two scales. Urgency: telephone, web chat and face to face reply immediately, email within hours and a letter in days. Security: face to face is hardest to intercept, then a sealed letter, then encrypted email, while social media and posters are public.',
    'When factors pull apart, combine methods: a call for speed, then a secure written record.',
    '## The six factors and how to apply them');
}

// 04 Six factors summary
{
  const f = [
    ['Urgency', 'How quickly must it arrive and be answered?', 'Telephone, web chat, face to face'],
    ['Cost', 'Email and social media cost very little per message', 'Videoconferencing removes travel'],
    ['Security', 'How confidential is it?', 'Not social media or posters'],
    ['Distance', 'Electronic methods remove travel time', 'Videoconferencing, email, telephone'],
    ['Availability of networks', 'Weak coverage rules out electronic methods', 'Letter, landline, visit'],
    ['Importance', 'Needs a formal record or personal attention?', 'Signed letter; face-to-face meeting'],
  ];
  let body = '';
  f.forEach(([n, q, fav], i) => {
    const x = 30 + (i % 3) * 285, y = 110 + Math.floor(i / 3) * 215;
    body += panel(x, y, 270, 200) + pill(x + 16, y + 16, 238, 46, n, { fill: C.cream, size: 17 });
    body += para(x + 20, y + 90, q, 230, { size: 16, fill: C.muted });
    body += para(x + 20, y + 158, fav, 230, { size: 16, weight: 700, fill: C.tealDark });
  });
  body += tx(450, 568, 'Say which factor matters most in the situation, and why.', { size: 17, anchor: 'middle', weight: 600 });
  add('04-six-factors',
    svg(900, 595, 'Six factors in choosing a method', body),
    'Six cards for urgency, cost, security, distance, availability of networks and importance of the message, each with the question it raises and the methods it points to.',
    'The six factors often pull in different directions, so weigh the most important one.',
    '## The six factors and how to apply them');
}

// 05 Riverbend Foods: three messages
{
  const r = [
    ['1', 'Weekend price promotion to 2,000 retailers, starting tomorrow', ['Urgency', 'Cost', 'Security'], 'Social media plus email'],
    ['2', 'Agree prices and terms with the main overseas supplier', ['Distance', 'Importance', 'Security'], 'Videoconference, then a signed letter or digitally signed document'],
    ['3', 'Tell a rural delivery driver, on the road, of a changed address', ['Urgency', 'Networks'], 'Telephone call'],
  ];
  let body = tx(160, 130, 'Message', { size: 16, weight: 700, fill: C.muted }) + tx(445, 130, 'Factors named', { size: 16, weight: 700, fill: C.muted, anchor: 'middle' }) + tx(700, 130, 'Method chosen', { size: 16, weight: 700, fill: C.muted, anchor: 'middle' });
  r.forEach(([n, msg, fac, meth], i) => {
    const y = 145 + i * 150;
    body += panel(30, y, 840, 136);
    body += badge(62, y + 68, 20, n, C.cream);
    body += para(96, y + (nl(msg, 230, 16) > 2 ? 44 : 56), msg, 230, { size: 16 });
    fac.forEach((f, j) => { body += pill(350, y + 14 + j * 38, 190, 32, f, { fill: C.cream, size: 15 }); });
    body += arrow(548, y + 68, 578, y + 68, { w: 3 });
    body += rect(588, y + 14, 266, 108, { fill: C.tealLight, edge: C.tealDark, rx: 10 });
    const nm = nl(meth, 236, 17);
    body += para(721, y + 68 - ((nm - 1) * LH(17)) / 2 + 6, meth, 236, { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  });
  body += rect(30, 600, 840, 60, { fill: C.cream, edge: C.olive });
  body += tx(450, 637, 'Pattern: method → factor named → reason linked to the situation', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  add('05-riverbend-three-messages',
    svg(900, 685, 'Riverbend Foods: three messages, three methods', body),
    'Three messages from a food wholesaler. A promotion to 2,000 retailers goes by social media plus email (urgency, cost, security). New terms with an overseas supplier go by videoconference then a signed document (distance, importance, security). A changed address for a rural driver goes by telephone (urgency, networks).',
    'Each choice names the method, the factor and a reason tied to the situation.',
    '## Worked example: choosing three methods');
}
