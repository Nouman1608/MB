import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-urdu-language-exercise-5-writing-exercise';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local helpers (self-contained; house style only) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
// Urdu text: Nastaliq, own <text> element, right-aligned by default (no direction attribute).
const U = (x, y, s, { size = 28, fill = C.ink, anchor = 'end' } = {}) =>
  `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-family="Noto Nastaliq Urdu">&#x200F;${X(s)}&#x200F;</text>`; // RLM marks keep digits and end punctuation in RTL order
const cw = (size, weight = 400) => size * (weight >= 600 ? 0.58 : 0.52);
function wrap(s, width, size = 17, weight = 400) {
  const max = Math.max(4, Math.floor(width / cw(size, weight)));
  const out = []; let cur = '';
  for (const w of String(s).split(/\s+/).filter(Boolean)) {
    if (!cur) cur = w; else if ((cur + ' ' + w).length <= max) cur += ' ' + w; else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  return out;
}
// Wrapped paragraph; returns {s, h}. lh = line height.
function para(x, y, s, width, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  const lines = wrap(s, width, size, o.weight || 400);
  return { s: lines.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: lines.length * lh, n: lines.length };
}
// Stat tile: big figure + small note, centred.
const stat = (x, y, w, h, big, small, fill = C.tealLight, edge = C.tealDark) => {
  const p = para(x + w / 2, y + 74, small, w - 30, { size: 16, fill: C.muted, anchor: 'middle', lh: 21 });
  return panel(x, y, w, h, fill, edge) + T(x + w / 2, y + 44, big, { size: 26, weight: 700, anchor: 'middle' }) + p.s;
};
// Card with bold title and wrapped body lines (array of strings, each wrapped). Returns string.
function card(x, y, w, h, title, body = [], o = {}) {
  const pad = o.pad ?? 20, size = o.size ?? 17, mid = o.anchor === 'middle';
  const tx = mid ? x + w / 2 : x + pad, anchor = mid ? 'middle' : 'start';
  let s = panel(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge), cy = y + pad;
  if (o.kicker) { s += T(tx, cy + 14, o.kicker, { size: 15, weight: 700, fill: o.kfill || C.tealDark, anchor }); cy += 26; }
  if (title) { const p = para(tx, cy + (o.tsize ?? 20) * 0.85, title, w - 2 * pad, { size: o.tsize ?? 20, weight: 700, anchor, fill: o.tfill || C.ink }); s += p.s; cy += p.h + 6; }
  for (const b of body) { const p = para(tx, cy + size * 0.85, b, w - 2 * pad, { size, fill: o.bfill || C.muted, anchor, lh: Math.round(size * 1.35) }); s += p.s; cy += p.h + (o.gap ?? 6); }
  return s;
}
// Numbered step rows: [title, desc]. Returns {s, h}.
function steps(y, list, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? 12, size = o.size ?? 17; let s = '', cy = y;
  list.forEach(([title, desc], i) => {
    const d = para(x + 92, 0, desc, w - 115, { size, fill: C.muted, lh: Math.round(size * 1.35) });
    const h = Math.max(o.minH ?? 84, 34 + 26 + d.h + 4);
    s += panel(x, cy, w, h) + badge(x + 46, cy + h / 2, 24, String(i + 1), o.hi === i ? C.mustard : C.cream);
    s += T(x + 92, cy + 38, title, { size: 20, weight: 700 }) + para(x + 92, cy + 66, desc, w - 115, { size, fill: C.muted, lh: Math.round(size * 1.35) }).s;
    cy += h + gap;
  });
  return { s, h: cy - y - gap };
}
const harrow = (x1, x2, y, o = {}) => arrow(x1, y, x2, y, { w: 3.5, ...o });
const varrow = (x, y1, y2, o = {}) => arrow(x, y1, x, y2, { w: 3.5, ...o });
// ---- end helpers ----
// Table. cols: [{w, head, ur?:bool, anchor?}], rows: arrays of cells (string or array of lines).
// English cells wrap at the column width; Urdu cells are right-aligned, one line per array item.
function table(x, y, cols, rows, o = {}) {
  const size = o.size ?? 17, us = o.us ?? 26, ugap = o.ugap ?? Math.round(us * 2.1), lh = Math.round(size * 1.35), pad = 16;
  const headH = o.headH ?? 50, W = cols.reduce((a, c) => a + c.w, 0);
  const prep = rows.map((r) => r.map((cell, j) => {
    const c = cols[j], g = cell && cell.u ? cell.g : null, cc = cell && cell.u ? cell.u : cell, lines = Array.isArray(cc) ? cc : [cc];
    if (c.ur) return { ur: true, lines, g, h: (lines.length - 1) * ugap + us * 2.6 + 12 + (g ? 22 : 0) };
    const wl = lines.flatMap((l) => wrap(l, c.w - 2 * pad, size, c.bold ? 700 : 400));
    return { ur: false, lines: wl, h: wl.length * lh + 22 };
  }));
  const hs = prep.map((r) => Math.max(o.minRow ?? 56, ...r.map((c) => c.h)));
  const H = headH + hs.reduce((a, b) => a + b, 0);
  let s = panel(x, y, W, H) + `<path d="M${x + 1.25},${y + headH} L${x + 1.25},${y + 14} Q${x + 1.25},${y + 1.25} ${x + 14},${y + 1.25} L${x + W - 14},${y + 1.25} Q${x + W - 1.25},${y + 1.25} ${x + W - 1.25},${y + 14} L${x + W - 1.25},${y + headH} Z" fill="${C.teal}"/>`;
  let cx = x;
  cols.forEach((c, j) => {
    s += T(c.ur ? cx + c.w - pad : cx + pad, y + headH / 2 + 7, c.head, { size: 17, weight: 700, anchor: c.ur ? 'end' : 'start' });
    if (j) s += `<line x1="${cx}" y1="${y}" x2="${cx}" y2="${y + H}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    cx += c.w;
  });
  let cy = y + headH;
  prep.forEach((r, i) => {
    if (o.hiRows?.includes(i)) s += `<rect x="${x + 2}" y="${cy}" width="${W - 4}" height="${hs[i]}" fill="${C.cream}"/>`;
    s += `<line x1="${x}" y1="${cy}" x2="${x + W}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    let cx2 = x;
    r.forEach((c, j) => {
      const col = cols[j];
      if (c.ur) {
        const top = cy + (hs[i] - c.h) / 2;
        const ux = col.uanchor === 'middle' ? cx2 + col.w / 2 : cx2 + col.w - pad;
        c.lines.forEach((l, k) => { s += U(ux, top + 6 + us * 1.85 + k * ugap, l, { size: us, fill: col.fill || C.ink, anchor: col.uanchor || 'end' }); });
        if (c.g) s += T(ux, top + c.h - 14, c.g, { size: 15, fill: col.gfill || C.muted, italic: true, anchor: col.uanchor || 'end' });
      } else {
        const top = cy + (hs[i] - c.lines.length * lh) / 2 + size * 0.95;
        c.lines.forEach((l, k) => { s += T(cx2 + pad, top + k * lh, l, { size, fill: col.fill || (j === 0 ? C.ink : C.muted), weight: col.bold ? 700 : 400 }); });
      }
      cx2 += col.w;
    });
    cy += hs[i];
  });
  return { s, h: H };
}
const SV = (h, title, body) => svg(900, Math.ceil(h), title, body);
// Urdu word chip with English gloss underneath. Returns string.
const chip = (x, y, w, ur, en, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${o.h ?? 104}" rx="12" fill="${o.fill || C.panel}" stroke="${o.edge || C.panelEdge}" stroke-width="2.5"/>` +
  U(x + w / 2, y + (o.ub ?? 52), ur, { size: o.us ?? 26, anchor: 'middle' }) + (en ? T(x + w / 2, y + (o.h ?? 104) - 16, en, { size: 16, fill: C.muted, anchor: 'middle' }) : '');
// Approximate Nastaliq line width.
const uw = (s, size = 26) => s.length * size * 0.42;
const tick = (x, y, ok) => T(x, y, ok ? '✓' : '✗', { size: 26, weight: 700, fill: ok ? C.tealDark : C.rust, anchor: 'middle' });

// 01 At a glance
{
  let b = stat(30, 110, 268, 120, '8 marks', 'first of two writing exercises') +
    stat(316, 110, 268, 120, 'about 120 words', 'for example an email') +
    stat(602, 110, 268, 120, 'Prompts / pictures', 'a stimulus to respond to');
  b += T(450, 280, 'The question sets three things', { size: 21, weight: 700, anchor: 'middle' });
  ['Purpose', 'Format', 'Audience'].forEach((w, i) => { b += `<rect x="${30 + i * 286}" y="300" width="268" height="60" rx="12" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2.5"/>` + T(164 + i * 286, 338, w, { size: 20, weight: 700, anchor: 'middle' }); });
  b += T(450, 410, 'All five writing objectives are tested', { size: 21, weight: 700, anchor: 'middle' });
  const W = [['W1', 'clear, accurate communication'], ['W2', 'paragraphs and linking'], ['W3', 'range of structures and vocabulary'], ['W4', 'punctuation and spelling'], ['W5', 'register and format']];
  W.forEach(([k, d], i) => { b += card(30 + i * 171, 430, 156, 130, k, [d], { anchor: 'middle', tsize: 22, size: 15, pad: 14 }); });
  b += panel(30, 586, 840, 92) + T(54, 622, 'Site practice convention: up to 4 task and communication + up to 4 language', { size: 17, weight: 700 }) +
    T(54, 652, 'Cambridge does not publish how the eight marks divide.', { size: 16, fill: C.muted });
  add('01-exercise-at-a-glance',
    SV(706, 'Exercise 5 at a glance', b),
    'Exercise 5 is worth 8 marks: about 120 words, such as an email, written in response to prompts or pictures for a set purpose, format and audience. All five writing objectives, W1 to W5, are tested.',
    'A short functional text: purpose, format and audience are set for you.',
    '## What the syllabus says');
}

// 02 Purpose, format, audience
{
  let b = '';
  const cols = [
    ['Purpose', 'why am I writing?', ['دعوت دینا', 'شکریہ ادا کرنا', 'معذرت کرنا', 'معلومات دینا', 'مشورہ دینا', 'شکایت کرنا'], ['invite', 'thank', 'apologise', 'inform', 'advise', 'complain'], 'decides the content of every paragraph'],
    ['Format', 'what kind of text?', ['ای میل', 'خط', 'پیغام'], ['email', 'letter', 'message'], 'decides opening, closing and layout'],
    ['Audience', 'who reads it?', ['دوست', 'بھائی', 'استاد', 'پرنسپل', 'مینیجر'], ['friend', 'brother', 'teacher', 'principal', 'manager'], 'decides the register: تم or آپ'.replace(': تم or آپ', '')],
  ];
  cols.forEach(([h, q, us, gs, dec], i) => {
    const x = 30 + i * 286;
    b += panel(x, 110, 268, 560) + `<rect x="${x}" y="110" width="268" height="78" rx="14" fill="${C.teal}"/>` + T(x + 134, 144, h, { size: 21, weight: 700, anchor: 'middle' }) + T(x + 134, 172, q, { size: 16, anchor: 'middle', fill: C.ink, italic: true });
    us.forEach((u, k) => { const y = 236 + k * 62; b += U(x + 248, y, u, { size: 24 }) + T(x + 20, y - 4, gs[k], { size: 16, fill: C.muted }); });
    b += `<rect x="${x + 12}" y="590" width="244" height="68" rx="10" fill="${C.cream}"/>` + para(x + 134, 618, dec, 220, { size: 15, weight: 700, anchor: 'middle', fill: C.olive, lh: 19 }).s;
  });
  b += panel(30, 690, 840, 92, C.tealLight, C.tealDark) + T(54, 726, 'Then count the prompts', { size: 19, weight: 700 }) +
    T(54, 756, 'Each bullet is content you must cover. Pictures suggest what to write about: use them.', { size: 17, fill: C.muted });
  add('02-purpose-format-audience',
    SV(810, 'Decode the task before you write', b),
    'Three columns: purpose (such as دعوت دینا, شکریہ ادا کرنا, شکایت کرنا) decides the content; format (ای میل, خط, پیغام) decides opening, closing and layout; audience (دوست to پرنسپل) decides the register. Every prompt must then be covered.',
    'Purpose sets the content, format the layout, audience the register.',
    '## Decoding the task: purpose, format, audience');
}

// 03 Register table
{
  const tb = table(30, 110, [{ w: 160, head: '', bold: true }, { w: 330, head: 'Informal: friend, sibling', ur: true }, { w: 350, head: 'Formal: teacher, principal', ur: true }], [
    ['Address', 'تم', 'آپ'],
    ['Opening', ['پیارے احمد، /', 'پیاری ثنا،'], ['محترم پرنسپل صاحب، /', 'محترمہ…']],
    ['Greeting', 'السلام علیکم! کیسے ہو؟', ['السلام علیکم۔ امید ہے', 'آپ خیریت سے ہوں گے۔']],
    ['Request', 'مجھے بتاؤ، ضرور آنا', 'مجھے بتائیے، تشریف لائیے گا'],
    ['Thanks', 'تمہارا بہت شکریہ', 'میں آپ کا بے حد شکر گزار ہوں'],
    ['Closing line', ['جلدی جواب دینا۔', 'اپنا خیال رکھنا۔'], ['آپ کے جواب کا منتظر', 'رہوں گا / رہوں گی۔']],
    ['Sign-off', ['تمہارا دوست، /', 'تمہاری سہیلی،'], ['والسلام، /', 'آپ کا شاگرد،']],
  ], { us: 24, minRow: 66 });
  add('03-register-table',
    SV(110 + tb.h + 30, 'Informal or formal: the set phrases', tb.s),
    'A table of informal and formal Urdu letter and email phrases: address تم or آپ, openings پیارے احمد، or محترم پرنسپل صاحب، greetings, requests, thanks, closing lines and sign-offs such as تمہارا دوست، or والسلام،.',
    'The audience decides the register, from the first word to the sign-off.',
    '## Register: تم or آپ, and keeping to it');
}

// 04 Keeping the register: verb forms
{
  let b = '';
  b += card(30, 110, 410, 230, '', [], { fill: C.tealLight, edge: C.tealDark });
  b += card(460, 110, 410, 230, '', [], { fill: C.cream, edge: C.mustard });
  b += T(50, 146, 'Informal', { size: 20, weight: 700 }) + U(420, 162, 'تم', { size: 30 });
  b += T(480, 146, 'Formal', { size: 20, weight: 700 }) + U(850, 162, 'آپ', { size: 30 });
  const fi = ['ہو', 'کرو', 'آؤ', 'تمہارا'], ff = ['ہیں', 'کیجیے', 'آئیے', 'آپ کا'];
  fi.forEach((u, k) => { b += chip(335 - k * 95, 200, 85, u, '', { h: 110, ub: 66, us: 26 }); });
  ff.forEach((u, k) => { b += chip(765 - k * 95, 200, 85, u, '', { h: 110, ub: 66, us: 26 }); });
  b += T(450, 390, 'The most common error: mixing the two', { size: 20, weight: 700, anchor: 'middle' });
  b += `<rect x="30" y="410" width="410" height="96" rx="12" fill="#fbf1ea" stroke="${C.rust}" stroke-width="2.5"/>` + tick(66, 466, false) + U(420, 470, 'آپ آؤ', { size: 28 }) + T(96, 464, 'آپ with a تم verb'.replace(/.*/, 'formal pronoun, informal verb'), { size: 16, fill: C.rust, weight: 600 });
  b += `<rect x="460" y="410" width="410" height="96" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + tick(496, 466, true) + U(850, 470, 'آپ آئیے', { size: 28 }) + T(526, 464, 'pronoun and verb agree', { size: 16, fill: C.tealDark, weight: 600 });
  b += T(450, 556, 'Your own verbs agree with your gender, all the way through', { size: 20, weight: 700, anchor: 'middle' });
  b += chip(30, 576, 410, 'لکھ رہا ہوں', 'a boy writes', { h: 110, ub: 58 }) + chip(460, 576, 410, 'لکھ رہی ہوں', 'a girl writes', { h: 110, ub: 58 });
  add('04-keeping-the-register',
    SV(714, 'Keep one register: pronoun and verb agree', b),
    'Informal تم takes forms such as ہو، کرو، آؤ، تمہارا; formal آپ takes ہیں، کیجیے، آئیے، آپ کا. Mixing them, as in آپ آؤ, is the commonest error; آپ آئیے is correct. A boy writes لکھ رہا ہوں and a girl لکھ رہی ہوں.',
    'Choose تم or آپ once, then check every verb against it.',
    '## Register: تم or آپ, and keeping to it');
}

// 05 Planning 120 words
{
  let b = '';
  const parts = [['Opening and greeting', '10-15', 13, C.cream], ['Prompt 1', 'about 30', 30, C.tealLight], ['Prompt 2', 'about 30', 30, C.tealLight], ['Prompt 3', 'about 30', 30, C.tealLight], ['Closing and sign-off', '10-15', 13, C.cream]];
  let y = 110;
  parts.forEach(([n, w, v, f]) => {
    const h = v * 3.2 + 20;
    b += `<rect x="30" y="${y}" width="380" height="${h}" rx="10" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(50, y + h / 2 + 6, n, { size: 18, weight: 700 }) + T(390, y + h / 2 + 6, w + ' words', { size: 16, fill: C.muted, anchor: 'end' });
    y += h + 8;
  });
  const yEnd = y;
  // per-prompt recipe
  b += panel(440, 110, 430, 250) + T(460, 146, 'Inside each prompt paragraph', { size: 19, weight: 700 });
  [['statement', C.tealLight], ['detail or reason', C.teal], ['feeling or comment', C.cream]].forEach(([s, f], i) => {
    b += `<rect x="460" y="${166 + i * 62}" width="390" height="50" rx="10" fill="${f}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(480, 197 + i * 62, (i ? '+ ' : '') + s, { size: 17, weight: 600 });
  });
  b += panel(440, 380, 430, yEnd - 388) + T(460, 416, 'Tense range comes from the prompts', { size: 19, weight: 700 });
  [['what happened', 'past'], ['what you do now', 'present'], ['invite or plan', 'future or conditional']].forEach(([a, c], i) => {
    b += T(460, 452 + i * 30, a, { size: 16, fill: C.muted }) + T(640, 452 + i * 30, '→ ' + c, { size: 16, weight: 700, fill: C.tealDark });
  });
  b += U(850, 580, 'اگر… تو…', { size: 26 }) + T(460, 574, 'for example the conditional', { size: 16, fill: C.muted });
  add('05-planning-120-words',
    SV(yEnd + 22, 'Planning 120 words', b),
    'A word budget for about 120 words: 10-15 for the opening and greeting, about 30 for each of three prompts, and 10-15 for the closing and sign-off. Each prompt paragraph gives a statement, a detail or reason, and a feeling or comment, and the prompts invite past, present and future or conditional (اگر… تو…).',
    'About 30 words per prompt, each with a statement, a reason and a comment.',
    '## Planning 120 words');
}

// 06 Email layout from the worked example
{
  let b = '';
  const L = (y, en, sub) => T(54, y, en, { size: 17, weight: 700, fill: C.tealDark }) + (sub ? T(54, y + 22, sub, { size: 15, fill: C.muted }) : '');
  b += panel(30, 110, 840, 920);
  b += `<line x1="330" y1="130" x2="330" y2="1010" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="6 6"/>`;
  b += L(162, 'Opening', 'informal: friend') + U(846, 168, 'پیارے سلمان،', { size: 27 });
  b += L(240, 'Greeting', '') + U(846, 246, 'السلام علیکم! امید ہے تم نئے شہر میں خوش ہو گے۔', { size: 23 });
  const para3 = [['Prompt 1: the new club', 'present habit', 'فوٹوگرافی کلب میں داخلہ لے لیا ہے', 'ملتے ہیں، سکھاتے ہیں'],
    ['Prompt 2: last week', 'past', 'پچھلے ہفتے ہم پرانا قلعہ دیکھنے گئے تھے۔', 'مجھے خود یقین نہیں آیا'],
    ['Prompt 3: the invitation', 'future and conditional', 'کلب کی ایک نمائش ہو گی', 'اگر تم ان دنوں چھٹیوں پر یہاں آؤ تو ضرور آنا']];
  para3.forEach(([h, s, u1, u2], i) => {
    const y = 290 + i * 190;
    b += `<rect x="345" y="${y}" width="510" height="170" rx="10" fill="${C.tealLight}"/>`;
    b += L(y + 40, h, s) + U(840, y + 58, u1, { size: 24 }) + T(840, y + 92, '…', { size: 18, fill: C.muted, anchor: 'end' }) + U(840, y + 142, u2, { size: 24, fill: C.tealDark });
  });
  b += L(890, 'Closing line', 'a request') + U(846, 896, 'جلدی جواب دینا۔', { size: 27 });
  b += L(966, 'Sign-off', '') + U(846, 960, 'تمہارا دوست،', { size: 27 }) + U(846, 1010, 'بلال', { size: 27 });
  add('06-email-layout',
    SV(1060, 'The model email, part by part', b),
    'The model email to Salman laid out part by part: opening پیارے سلمان، and a greeting, three short paragraphs for the three prompts (the photography club, last week\'s trip to the old fort, and the invitation to the exhibition), a closing request جلدی جواب دینا۔ and the sign-off تمہارا دوست، بلال.',
    'Greeting, one paragraph per prompt, closing line, sign-off: all in the تم register.',
    '## Worked example');
}

// 07 Timing and final check
{
  let b = '';
  const segs = [['Plan', 2, C.tealLight, 'purpose, format, audience, a word per prompt'], ['Write', 10, C.teal, ''], ['Check', 3, C.cream, '']];
  let x = 60; const unit = 780 / 15;
  segs.forEach(([n, m, f]) => { const w = m * unit; b += `<rect x="${x}" y="115" width="${w}" height="84" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + T(x + w / 2, 152, m + ' min', { size: 20, weight: 700, anchor: 'middle' }) + T(x + w / 2, 180, n, { size: 16, anchor: 'middle' }); x += w; });
  b += T(60, 226, 'about 15 minutes in all; keep more time for Exercise 6, worth twice as much', { size: 16, fill: C.muted });
  const checks = ['Every prompt covered?', 'One register throughout?', 'Greeting, opening line, closing line, sign-off?', 'Your own verbs agree with your gender?', 'نے with every transitive verb in a completed past tense?', 'Adjectives and verbs agree with their nouns?'];
  b += panel(30, 250, 840, 330) + T(54, 288, 'The two-minute final check', { size: 20, weight: 700 });
  checks.forEach((c, i) => {
    const y = 330 + i * 41;
    b += `<rect x="54" y="${y - 20}" width="26" height="26" rx="5" fill="${C.panel}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(67, y + 1, '✓', { size: 18, weight: 700, fill: C.tealDark, anchor: 'middle' });
    if (i === 4) b += U(146, y + 4, 'نے', { size: 24 }) + T(156, y, 'with every transitive verb in a completed past tense?', { size: 17 });
    else b += T(96, y, c, { size: 17 });
  });
  b += T(450, 626, 'Agreement in practice', { size: 20, weight: 700, anchor: 'middle' });
  const pair = (x, bad, good) => `<rect x="${x}" y="646" width="410" height="90" rx="12" fill="#fbf1ea" stroke="${C.rust}" stroke-width="2"/>` + tick(x + 30, 700, false) + U(x + 390, 704, bad, { size: 26 }) +
    `<rect x="${x}" y="748" width="410" height="90" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + tick(x + 30, 802, true) + U(x + 390, 806, good, { size: 26 });
  b += pair(30, 'نیا کتاب', 'نئی کتاب') + pair(460, 'میں نے کتاب خریدا', 'میں نے کتاب خریدی');
  b += T(80, 698, 'wrong adjective form', { size: 15, fill: C.rust }) + T(510, 698, 'wrong verb form', { size: 15, fill: C.rust }) + T(80, 800, 'adjective agrees', { size: 15, fill: C.tealDark }) + T(510, 800, 'verb agrees', { size: 15, fill: C.tealDark });
  add('07-timing-and-check',
    SV(866, 'Fifteen minutes, then a final check', b),
    'A 15-minute plan: 2 minutes to plan, 10 to write and 3 to check, followed by a six-point checklist on prompts, register, format, gender agreement, نے and noun agreement. Below, نیا کتاب is corrected to نئی کتاب and میں نے کتاب خریدا to میں نے کتاب خریدی.',
    'Plan briefly, write, then check prompts, register and agreement.',
    '## Exam technique and timing');
}
