import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-urdu-language-exercise-6-extended-writing-exercise';
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
    if (c.ur && !(cell && cell.en)) return { ur: true, lines, g, h: (lines.length - 1) * ugap + us * 3.0 + 12 + (g ? 22 : 0) };
    const wl = (cell && cell.en ? [cell.en] : lines).flatMap((l) => wrap(l, c.w - 2 * pad, size, c.bold ? 700 : 400));
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
        c.lines.forEach((l, k) => { s += U(ux, top + 6 + us * 2.2 + k * ugap, l, { size: us, fill: col.fill || C.ink, anchor: col.uanchor || 'end' }); });
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

// 01 Exercise 5 versus Exercise 6
{
  let b = '';
  const col = (x, h, rows, f, e) => {
    let s = panel(x, 110, 410, 380, f, e) + T(x + 205, 150, h, { size: 23, weight: 700, anchor: 'middle' });
    rows.forEach(([k, v], i) => { const y = 200 + i * 70; s += T(x + 24, y, k, { size: 15, weight: 700, fill: C.muted }) + T(x + 24, y + 28, v, { size: 19, weight: 600 }); });
    return s;
  };
  b += col(30, 'Exercise 5', [['MARKS', '8'], ['LENGTH', 'about 120 words'], ['KIND OF WRITING', 'functional, e.g. an email'], ['STIMULUS', 'prompts and/or pictures']], C.panel, C.panelEdge);
  b += col(460, 'Exercise 6', [['MARKS', '16: just over a quarter of 60'], ['LENGTH', 'about 200 words'], ['KIND OF WRITING', 'continuous prose'], ['STIMULUS', 'short prompts']], C.tealLight, C.tealDark);
  b += panel(30, 510, 840, 124, C.cream, C.mustard) + T(54, 548, 'The real difference is development', { size: 20, weight: 700 }) +
    T(54, 580, 'Ideas explained, supported and linked across paragraphs (W2), not just stated.', { size: 17, fill: C.muted }) +
    T(54, 612, 'Both: purpose, format and audience set; W1-W5 assessed; no dictionaries.', { size: 16, fill: C.tealDark, weight: 600 });
  add('01-exercise-5-versus-6',
    SV(662, 'Exercise 6 compared with Exercise 5', b),
    'Side by side: Exercise 5 is 8 marks for about 120 words of functional writing from prompts or pictures; Exercise 6 is 16 marks, just over a quarter of the paper, for about 200 words of continuous prose from short prompts. The difference is development.',
    'Twice the marks for developed, linked ideas, not just more words.',
    '## What the syllabus says about Exercise 6');
}

// 02 Formats
{
  const tb = table(30, 110, [{ w: 150, head: 'Format', bold: true }, { w: 130, head: 'Urdu name', ur: true }, { w: 360, head: 'Conventions worth showing' }, { w: 200, head: 'Usual register' }], [
    ['Article', 'مضمون', 'a headline, an opening that draws the reader in, a closing thought', 'neutral to semi-formal'],
    ['Blog post', 'بلاگ', 'first person, a personal and lively tone, perhaps a question to readers', 'informal to neutral'],
    ['Report', 'رپورٹ', 'a title, an opening that states the purpose, factual paragraphs, recommendations', 'formal, often impersonal'],
    ['Review', 'تبصرہ', 'what is reviewed, description, strengths and weaknesses, a recommendation', 'neutral, opinion-led'],
    ['Letter', 'خط', 'greeting and closing suited to the reader', 'set by the reader'],
  ], { us: 26, minRow: 80, size: 16 });
  let y = 110 + tb.h + 22, b = tb.s;
  b += panel(30, y, 840, 104, C.cream, C.mustard) + T(54, y + 38, 'Make the format visible: it is part of W5', { size: 19, weight: 700 });
  b += T(54, y + 72, 'Useful words:', { size: 16, fill: C.muted }) + U(330, y + 78, 'سرخی', { size: 26 }) + T(345, y + 72, 'headline', { size: 16, fill: C.muted, italic: true }) +
    U(640, y + 78, 'سفارشات', { size: 26 }) + T(655, y + 72, 'recommendations', { size: 16, fill: C.muted, italic: true });
  add('02-formats',
    SV(y + 132, 'Formats to prepare', b),
    'A table of five formats with their Urdu names, conventions and usual register: article (مضمون), blog post (بلاگ), report (رپورٹ), review (تبصرہ) and letter (خط). A report needs a title, a purpose statement and recommendations (سفارشات).',
    'Each format has conventions; showing them earns W5.',
    '## Which formats to prepare');
}

// 03 Rubric verbs
{
  const tb = table(30, 110, [{ w: 230, head: 'Rubric verb', ur: true }, { w: 190, head: 'Meaning', bold: true }, { w: 420, head: 'Language that shows you did it', ur: true }], [
    ['بیان کیجیے', 'describe, give an account', { en: 'past tense narration, descriptive adjectives' }],
    ['وضاحت کیجیے', 'explain', 'کیونکہ، اس کی وجہ یہ ہے کہ'],
    ['اپنی رائے دیجیے', 'give your opinion', 'میرے خیال میں، میری رائے یہ ہے کہ'],
    [['مشورہ دیجیے /', 'تجویز دیجیے'], 'advise / suggest', 'چاہیے، بہتر ہوگا کہ'],
    ['قائل کیجیے', 'persuade', { en: 'direct questions to the reader, strong conclusions' }],
  ], { us: 24, minRow: 74 });
  let y = 110 + tb.h + 22, b = tb.s;
  b += panel(30, y, 840, 170, C.tealLight, C.tealDark) + T(54, y + 36, 'Audience sets the register: formal choices for a head teacher', { size: 18, weight: 700 });
  const pr = (x, fo, inf) => U(x + 180, y + 106, fo, { size: 27, fill: C.tealDark }) + T(x + 190, y + 98, 'rather than', { size: 15, fill: C.muted }) + U(x + 380, y + 106, inf, { size: 27, fill: C.muted, anchor: 'start' });
  b += U(250, y + 106, 'مدعو کرنا', { size: 27, fill: C.tealDark }) + T(262, y + 100, 'rather than', { size: 15, fill: C.muted }) + U(440, y + 106, 'بلانا', { size: 27, fill: C.muted });
  b += U(650, y + 106, 'تقریب', { size: 27, fill: C.tealDark }) + T(662, y + 100, 'rather than', { size: 15, fill: C.muted }) + U(840, y + 106, 'فنکشن', { size: 27, fill: C.muted });
  b += T(54, y + 150, 'Even for teenagers, it is written Urdu: no slang, no English word where an everyday Urdu word exists.', { size: 15, fill: C.muted });
  add('03-rubric-verbs',
    SV(y + 198, 'The rubric verb tells you the purpose', b),
    'A table of rubric verbs and the language each calls for: بیان کیجیے (describe), وضاحت کیجیے (explain: کیونکہ), اپنی رائے دیجیے (opinion: میرے خیال میں), مشورہ دیجیے (advise: چاہیے) and قائل کیجیے (persuade). For a formal reader, prefer مدعو کرنا to بلانا and تقریب to فنکشن.',
    'Match your language to the verb in the rubric and the register to the reader.',
    '## Reading the task: purpose, format, audience');
}

// 04 Developing a prompt
{
  let b = '';
  b += T(450, 128, 'Point  →  reason  →  example or consequence', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += panel(30, 150, 840, 96) + T(54, 186, 'Prompt', { size: 17, weight: 700, fill: C.muted }) + U(846, 206, 'کچھ پروگرام بہت لمبے تھے۔', { size: 27 }) + T(54, 214, 'Some programmes were very long.', { size: 15, fill: C.muted, italic: true });
  b += varrow(450, 250, 274);
  b += panel(30, 278, 840, 96, '#fbf1ea', C.rust) + T(54, 314, 'Undeveloped', { size: 17, weight: 700, fill: C.rust }) + U(846, 334, 'کچھ پروگرام لمبے تھے۔', { size: 27 }) + T(54, 342, 'just restates the prompt', { size: 15, fill: C.rust, italic: true });
  b += varrow(450, 378, 402);
  b += panel(30, 406, 840, 276, C.tealLight, C.tealDark) + T(54, 442, 'Developed', { size: 17, weight: 700, fill: C.tealDark });
  ['تقریری مقابلہ تقریباً تین گھنٹے جاری رہا، جس کی وجہ سے', 'چھوٹی جماعتوں کے بچے بے چین ہو گئے اور بہت سے لوگ', 'انعامات کے اعلان سے پہلے ہی چلے گئے۔'].forEach((l, i) => { b += U(846, 492 + i * 58, l, { size: 26 }); });
  b += T(54, 660, 'a specific event + a consequence with', { size: 16, fill: C.tealDark, italic: true }) + U(500, 664, 'جس کی وجہ سے', { size: 24, fill: C.tealDark });
  b += T(450, 716, 'One sentence that shows W1, W2 and W3 together.', { size: 17, fill: C.muted, anchor: 'middle' });
  add('04-developing-a-prompt',
    SV(742, 'From prompt to developed point', b),
    'The prompt کچھ پروگرام بہت لمبے تھے۔ is copied almost unchanged in the undeveloped version, while the developed version names the three-hour speech contest and adds a consequence with جس کی وجہ سے: younger pupils became restless and many people left before the prizes.',
    'Name something specific, then say what followed from it.',
    '## Using the prompts');
}

// 05 Planning 200 words in 30 minutes
{
  let b = '';
  const segs = [['Plan', 3, C.tealLight], ['Write', 22, C.teal], ['Check', 5, C.cream]];
  let x = 60; const unit = 780 / 30;
  segs.forEach(([n, m, f]) => { const w = m * unit; b += `<rect x="${x}" y="115" width="${w}" height="84" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + T(x + w / 2, 152, m + ' min', { size: 20, weight: 700, anchor: 'middle' }) + T(x + w / 2, 180, n, { size: 16, anchor: 'middle' }); x += w; });
  b += T(60, 226, '2 hours for 60 marks is about two minutes a mark: roughly 30 minutes for 16 marks', { size: 16, fill: C.muted });
  const P = [['1', 'Introduce the subject; show format and purpose', 'about 30 words', 30], ['2', 'First main point, developed', 'about 60-70', 65], ['3', 'Second main point or the other side, developed', 'about 60-70', 65], ['4', 'Conclusion: opinion, recommendation or final thought', 'about 30-40', 35]];
  let y = 282;
  b += T(450, y + 4, 'A four-paragraph shape for about 200 words', { size: 20, weight: 700, anchor: 'middle' });
  y += 22;
  P.forEach(([n, d, w, v], i) => {
    const h = v * 1.3 + 40;
    b += `<rect x="30" y="${y}" width="840" height="${h}" rx="12" fill="${i === 0 || i === 3 ? C.cream : C.tealLight}" stroke="${i === 0 || i === 3 ? C.mustard : C.tealDark}" stroke-width="2.5"/>`;
    b += badge(70, y + h / 2, 20, n, C.panel) + T(110, y + h / 2 + 6, d, { size: 18, weight: 600 }) + T(850, y + h / 2 + 6, w, { size: 16, fill: C.muted, anchor: 'end' });
    y += h + 10;
  });
  b += T(450, y + 22, 'Far shorter usually means undeveloped points; far longer eats checking time.', { size: 16, fill: C.muted, anchor: 'middle' });
  add('05-planning-200-words',
    SV(y + 50, 'About 200 words in about 30 minutes', b),
    'A 30-minute plan of 3 minutes planning, 22 writing and 5 checking, and a four-paragraph shape: an introduction of about 30 words, two developed main points of about 60-70 words each, and a conclusion of about 30-40 words.',
    'Two developed middle paragraphs carry most of the 200 words.',
    '## Planning about 200 words in about 30 minutes');
}

// 06 Linking devices
{
  const tb = table(30, 110, [{ w: 220, head: 'Function', bold: true }, { w: 620, head: 'Urdu', ur: true }], [
    ['Adding', { u: 'اس کے علاوہ، مزید یہ کہ، نیز', g: 'besides, moreover, also' }],
    ['Contrasting', { u: 'لیکن، تاہم، دوسری طرف، اس کے باوجود', g: 'but, however, on the other hand, despite this' }],
    ['Cause and result', { u: 'کیونکہ، اس لیے، اس کی وجہ سے، چنانچہ', g: 'because, so, because of this, consequently' }],
    ['Sequencing', { u: 'سب سے پہلے، پھر، آخر میں', g: 'first of all, then, finally' }],
    ['Concluding', { u: 'مختصر یہ کہ، ان تمام باتوں کو دیکھتے ہوئے', g: 'in short, considering all of this' }],
  ], { us: 25 });
  add('06-linking-devices',
    SV(110 + tb.h + 30, 'Linking devices for W2: use a range', tb.s),
    'A table of Urdu linking devices by function: adding (اس کے علاوہ، مزید یہ کہ), contrasting (لیکن، تاہم، دوسری طرف), cause and result (کیونکہ، اس لیے، چنانچہ), sequencing (سب سے پہلے، پھر، آخر میں) and concluding (مختصر یہ کہ).',
    'A range of linking words, not the same one every time, shows W2.',
    '## Language that lifts the mark');
}

// 07 Structures for W3, punctuation and spelling for W4
{
  const tb = table(30, 110, [{ w: 170, head: 'Structure (W3)', bold: true }, { w: 670, head: 'Example', ur: true }], [
    ['Condition', { u: 'اگر ہر جماعت مدد کرے تو کام جلدی ہو جائے گا۔', g: 'if every class helps, the work will be done quickly' }],
    ['Relative clause', { u: 'جو طلبہ رضاکار بنے، انھیں سرٹیفکیٹ دیے گئے۔', g: 'the pupils who volunteered were given certificates' }],
    ['Passive (reports)', { u: 'تقریب کا اہتمام لائبریری میں کیا گیا۔', g: 'the event was arranged in the library' }],
    ['Suggestion', { u: ['میری تجویز ہے کہ اگلے سال والدین کو', 'بھی مدعو کیا جائے۔'], g: 'I suggest that parents are also invited next year' }],
    ['Comparison', { u: 'یہ پروگرام پچھلے سال کے مقابلے میں زیادہ کامیاب رہا۔', g: 'this programme was more successful than last year\'s' }],
  ], { us: 24 });
  let y = 110 + tb.h + 24, b = tb.s;
  b += panel(30, y, 840, 250, C.cream, C.mustard) + T(54, y + 36, 'Punctuation and spelling (W4)', { size: 19, weight: 700 });
  [['۔', 'full stop'], ['،', 'comma'], ['؟', 'question']].forEach(([m, g], i) => { b += chip(54 + i * 128, y + 56, 116, m, g, { h: 96, ub: 50, us: 32 }); });
  const sp = [['ضروری', 'ظروری'], ['ذریعے', 'زریعے']];
  sp.forEach(([ok, bad], i) => {
    const yy = y + 66 + i * 64;
    b += U(640, yy + 22, ok, { size: 26, fill: C.tealDark }) + tick(670, yy + 18, true) + U(780, yy + 22, bad, { size: 26, fill: C.rust }) + T(800, yy + 18, 'not', { size: 15, fill: C.rust });
  });
  b += T(450, y + 216, 'ہ and ھ differ:'.replace(/.*/, 'Keep ہ and ھ apart, as in'), { size: 16, fill: C.muted, anchor: 'end' }).replace('ہ and ھ', 'two letters') ;
  b += U(560, y + 222, 'پہلے', { size: 26 }) + T(580, y + 216, 'and', { size: 16, fill: C.muted }) + U(680, y + 222, 'پھر', { size: 26 });
  add('07-structures-and-accuracy',
    SV(y + 278, 'Structures for range, marks for accuracy', b),
    'Five Urdu structures with glosses: a condition with اگر… تو, a relative clause with جو, a passive, a suggestion with میری تجویز ہے کہ, and a comparison with کے مقابلے میں. Below, the Urdu full stop, comma and question mark, and spellings such as ضروری (not ظروری) and ذریعے (not زریعے).',
    'Plan a few structures in deliberately, then check punctuation and spelling.',
    '## Language that lifts the mark');
}
