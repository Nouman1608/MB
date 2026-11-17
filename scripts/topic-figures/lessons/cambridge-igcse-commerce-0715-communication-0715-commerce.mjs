import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-commerce-0715-communication-0715-commerce';
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

// 01 Four types, and how they overlap
{
  const types = [
    ['Written', 'Words on paper or screen; a permanent record', 'Letter, email, report, contract', C.tealLight],
    ['Oral', 'Spoken, in person or at a distance', 'Face-to-face meeting, telephone call', C.cream],
    ['Electronic', 'Sent through digital devices and networks', 'Email, web chat, social media, videoconferencing', C.tealLight],
    ['Visual', 'Images, signs, charts or video', 'Poster, chart, product video, logo', C.cream],
  ];
  let body = '';
  types.forEach(([name, mean, ex, fill], i) => {
    const x = 30 + i * 215;
    body += panel(x, 110, 195, 250) + rect(x, 110, 195, 52, { fill, edge: C.panelEdge, rx: 14 }) + tx(x + 97, 144, name, { size: 21, weight: 700, anchor: 'middle' });
    body += para(x + 16, 192, mean, 165, { size: 16 });
    body += para(x + 16, 192 + nl(mean, 165, 16) * LH(16) + 16, 'e.g. ' + ex, 165, { size: 16, fill: C.muted, italic: true });
  });
  body += panel(30, 385, 840, 205) + tx(54, 422, 'The types overlap', { size: 20, weight: 700 });
  const row = (y, label, parts) => {
    let s = tx(54, y + 30, label, { size: 19, weight: 700 }) + tx(250, y + 30, '=', { size: 22, weight: 700, anchor: 'middle' });
    let x = 280;
    parts.forEach((p, i) => {
      if (i) { s += tx(x + 14, y + 30, '+', { size: 22, weight: 700, anchor: 'middle' }); x += 30; }
      s += pill(x, y + 2, 150, 42, p, { fill: p === 'Written' || p === 'Electronic' ? C.tealLight : C.cream, size: 17 }); x += 160;
    });
    return s;
  };
  body += row(445, 'An email', ['Written', 'Electronic']) + row(510, 'A videoconference', ['Oral', 'Visual', 'Electronic']);
  add('01-types-of-communication',
    svg(900, 615, 'Four types of communication', body),
    'Four cards define written, oral, electronic and visual communication with examples. Below, an email is shown as both written and electronic, and a videoconference as oral, visual and electronic.',
    'Types overlap, so give each type’s main feature and the example that fits it best.',
    '## What are the four types of communication? (2.6.1)');
}

// 02 Eight methods: main strength and weakness
{
  const m = [
    ['Letter', 'Formal, with a permanent record', 'Slow; postage cost; no instant reply'],
    ['Telephone', 'Instant two-way conversation', 'No written record unless recorded'],
    ['Face to face', 'Body language and tone build trust', 'Travel time and cost'],
    ['Videoconferencing', 'Face-to-face contact over distance', 'Needs reliable internet and equipment'],
    ['Email', 'Fast, cheap, written record, attachments', 'Can be ignored, lost or hacked'],
    ['Web-based chat', 'Instant; chatbots answer 24 hours a day', 'Chatbots cannot handle complex problems'],
    ['Social media', 'Reaches large audiences cheaply; two-way', 'Negative comments spread quickly'],
    ['Posters', 'Eye-catching, seen by passers-by, cheap', 'One-way; limited information'],
  ];
  let body = '';
  m.forEach(([name, plus, minus], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 140;
    body += panel(x, y, 410, 126) + tx(x + 20, y + 34, name, { size: 20, weight: 700 });
    body += tick(x + 32, y + 62, 11) + para(x + 54, y + 68, plus, 340, { size: 16 });
    body += cross(x + 32, y + 98, 11) + para(x + 54, y + 104, minus, 340, { size: 16, fill: C.muted });
  });
  add('02-methods-compared',
    svg(900, 680, 'Eight methods: one strength, one weakness', body),
    'Eight cards, one for each method: letter, telephone, face to face, videoconferencing, email, web-based chat, social media and posters. Each card gives the method’s main advantage with a tick and main disadvantage with a cross.',
    'Every method has a trade-off; the situation decides which one matters.',
    '## What methods of communication are there? (2.6.2)');
}

// 03 Chatbot routing
{
  let body = pill(30, 230, 200, 80, ['Customer asks', 'a question'], { fill: C.panel, size: 18 });
  body += arrow(238, 270, 300, 270);
  body += pill(310, 215, 210, 110, ['Chatbot', 'in a chat window'], { fill: C.cream, size: 18 });
  body += tx(415, 352, 'set answers or AI', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  body += parrow('M528,245 C560,200 570,170 600,165', { color: C.tealDark, marker: 'ahT' });
  body += parrow('M528,295 C560,340 570,375 600,380', { color: C.rust, marker: 'ahR' });
  body += rect(605, 95, 265, 170, { fill: C.tealLight, edge: C.tealDark });
  body += tx(625, 128, 'Simple, repeated', { size: 19, weight: 700, fill: C.tealDark });
  body += para(625, 156, 'e.g. opening times, order tracking', 230, { size: 16, italic: true });
  body += para(625, 214, 'Answered automatically, 24 hours a day', 230, { size: 16, weight: 600 });
  body += rect(605, 300, 265, 150, { fill: '#f3d9c8', edge: C.rust });
  body += tx(625, 333, 'Unusual or complex', { size: 19, weight: 700, fill: C.rust });
  body += para(625, 365, 'Passed to human staff', 230, { size: 16, weight: 600 });
  body += para(625, 400, 'Chatbots cannot handle these', 230, { size: 16, italic: true });
  body += rect(30, 470, 840, 70, { fill: C.cream, edge: C.olive });
  body += tx(450, 512, 'Low cost for common questions, but customers may find chatbots frustrating.', { size: 17, anchor: 'middle' });
  add('03-chatbot-routing',
    svg(900, 565, 'What a chatbot does with a question', body),
    'A customer question goes to a chatbot. Simple, repeated questions such as opening times or order tracking are answered automatically at any hour; unusual or complex problems are passed to human staff.',
    'Chatbots handle the simple, repeated questions and pass complex ones to people.',
    '## What methods of communication are there? (2.6.2)');
}

// 04 Six factors and the methods they favour
{
  const f = [
    ['Urgency', 'How quickly must it arrive, or a reply come back?', 'Telephone, web chat, videoconferencing, email', ''],
    ['Cost', 'What can the business afford, per message and in equipment?', 'Email, social media, chat', 'Avoid travel for face to face'],
    ['Security', 'Is the information confidential?', 'Face to face, registered letter, encrypted email', 'Avoid social media'],
    ['Distance', 'How far apart are sender and receiver?', 'Videoconferencing, email, telephone', ''],
    ['Networks', 'Does the receiver have internet or phone coverage?', 'Letter or telephone where internet is poor', ''],
    ['Importance', 'Does it need a record, signature or personal touch?', 'Letter or email for a record; face to face for serious matters', ''],
  ];
  let body = tx(150, 128, 'Factor', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) + tx(250, 128, 'Question to ask', { size: 16, weight: 700, fill: C.muted }) + tx(560, 128, 'Methods it favours', { size: 16, weight: 700, fill: C.muted });
  f.forEach(([name, q, fav, avoid], i) => {
    const y = 142 + i * 100;
    body += panel(30, y, 840, 88);
    body += pill(46, y + 20, 190, 48, name === 'Networks' ? ['Availability', 'of networks'] : name, { fill: C.cream, size: name === 'Networks' ? 15 : 18 });
    body += para(250, y + 36, q, 280, { size: 16, fill: C.muted });
    body += para(560, y + (avoid ? 32 : 36), fav, 295, { size: 16, weight: 600, fill: C.tealDark });
    if (avoid) body += tx(560, y + 32 + nl(fav, 295, 16) * LH(16), avoid, { size: 16, weight: 600, fill: C.rust });
  });
  add('04-six-factors',
    svg(900, 750, 'Six factors that steer the choice', body),
    'Six rows: urgency, cost, security, distance, availability of networks and importance of the message. Each gives the question to ask and the methods it favours, with social media to avoid for security and travel to avoid for cost.',
    'Name the factors in the scenario, then pick the method they favour.',
    '## Which factors affect the choice of method? (2.6.3)');
}

// 05 Worked examples: situation -> factors -> method
{
  const r = [
    ['Factory machine broken; needs an engineer today', 'Urgency', 'Telephone'],
    ['Bank sends a customer a new PIN', 'Security, importance', 'Letter by post or secure app message'],
    ['Sales team in four countries plans a launch', 'Distance, cost, discussion', 'Videoconferencing'],
    ['Shop tells local people about a weekend sale', 'Cost, audience', 'Posters in the window and social media'],
    ['Signed contract to a buyer with weak internet', 'Importance, networks', 'Letter by recorded post'],
    ['Manager tells an employee their job is changing', 'Importance, sensitivity', 'Face to face, then a letter'],
    ['Hundreds of “where is my order?” questions daily', 'Cost, urgency, 24-hour demand', 'Chatbot, with option to reach a person'],
  ];
  let body = tx(40, 130, 'Situation', { size: 16, weight: 700, fill: C.muted }) + tx(420, 130, 'Key factors', { size: 16, weight: 700, fill: C.muted }) + tx(640, 130, 'Method', { size: 16, weight: 700, fill: C.muted });
  r.forEach(([sit, fac, meth], i) => {
    const y = 145 + i * 86;
    body += panel(30, y, 840, 76);
    body += para(48, y + (nl(sit, 350, 16) > 1 ? 32 : 44), sit, 350, { size: 16 });
    body += para(420, y + (nl(fac, 165, 16) > 1 ? 32 : 44), fac, 165, { size: 16, weight: 600, fill: C.olive });
    body += arrow(600, y + 38, 630, y + 38, { w: 3 });
    body += para(640, y + (nl(meth, 215, 16) > 1 ? 32 : 44), meth, 215, { size: 16, weight: 700, fill: C.tealDark });
  });
  add('05-matching-method',
    svg(900, 760, 'Matching the method to the situation', body),
    'Seven situations, each with its key factors and the recommended method: telephone for an urgent repair, a letter or secure app for a PIN, videoconferencing for a team in four countries, posters and social media for a local sale, recorded post where internet is weak, face to face for job changes, and a chatbot for routine order questions.',
    'The key factors in each situation point to one method.',
    '## Worked example: matching method to situation');
}

// 06 Model answer structure
{
  const steps = [
    ['Recommend', 'TravelEase should use email.', C.cream],
    ['Factor 1, applied', 'A written record of flight times, prices and booking references, which a telephone call does not give.', C.tealLight],
    ['Factor 2, applied', 'Cheap and fast: many confirmations sent in seconds, with etickets attached.', C.tealLight],
    ['Beat the alternative', 'Despite the hacking risk, it suits better than a letter, which is too slow for customers travelling soon.', C.cream],
  ];
  let body = '';
  steps.forEach(([head, txt, fill], i) => {
    const y = 110 + i * 118;
    body += badge(70, y + 50, 26, String(i + 1), i === 0 || i === 3 ? C.mustard : C.cream);
    body += rect(115, y, 640, 100, { fill, edge: C.panelEdge });
    body += tx(137, y + 34, head, { size: 19, weight: 700 });
    body += para(137, y + 62, txt, 600, { size: 16 });
    body += pill(775, y + 30, 95, 40, '[1]', { fill: C.panel, size: 18 });
    if (i < 3) body += arrow(70, y + 80, 70, y + 140, { w: 3 });
  });
  add('06-model-answer-structure',
    svg(900, 590, 'A 4-mark recommendation, step by step', body),
    'Four steps of the TravelEase answer, one mark each: recommend email, apply the need for a written record, apply cost and speed with etickets attached, then explain why email beats a letter despite the hacking risk.',
    'Recommend, apply two factors, then say why your choice beats an alternative.',
    '## Annotated model answer');
}
