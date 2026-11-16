import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-urdu-paper-1-reading-writing';
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
const uw = (s, size = 26) => s.length * size * 0.5;
const tick = (x, y, ok) => T(x, y, ok ? '✓' : '✗', { size: 26, weight: 700, fill: ok ? C.tealDark : C.rust, anchor: 'middle' });

// 01 Where Paper 1 fits
{
  let b = '';
  const x0 = 60, W = 780;
  b += `<rect x="${x0}" y="120" width="${W * 0.67}" height="110" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + T(x0 + W * 0.335, 166, 'Paper 1 Reading and Writing', { size: 20, weight: 700, anchor: 'middle' }) + T(x0 + W * 0.335, 198, '67%  ·  2 hours  ·  60 marks', { size: 18, anchor: 'middle' });
  b += `<rect x="${x0 + W * 0.67}" y="120" width="${W * 0.33}" height="110" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` + T(x0 + W * 0.835, 166, 'Paper 2 Listening', { size: 20, weight: 700, anchor: 'middle' }) + T(x0 + W * 0.835, 198, '33%', { size: 18, anchor: 'middle' });
  b += T(450, 262, 'Taken by all candidates: together they make the overall grade', { size: 17, fill: C.muted, anchor: 'middle' });
  b += `<rect x="${x0}" y="290" width="${W}" height="96" rx="12" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2.5" stroke-dasharray="10 7"/>` + T(450, 330, 'Component 5 Speaking (optional)', { size: 20, weight: 700, anchor: 'middle' }) + T(450, 360, 'separately endorsed; not counted in the overall grade', { size: 17, fill: C.muted, anchor: 'middle' });
  b += panel(30, 412, 840, 70, C.tealLight, C.tealDark) + T(54, 455, 'Paper 1: all questions and responses in Urdu; no dictionaries.', { size: 17, weight: 600 });
  add('01-where-paper-1-fits',
    SV(510, 'Where Paper 1 fits in 0539', b),
    'Paper 1 Reading and Writing is worth 67% of the qualification (2 hours, 60 marks) and Paper 2 Listening 33%. Component 5 Speaking is optional, separately endorsed and not counted in the overall grade.',
    'Paper 1 carries two thirds of the IGCSE grade.',
    '## Where this fits in 0539');
}

// 02 Six exercises and their marks
{
  let b = '';
  const ex = [['1', 'Short answer questions', 8, 'skim a short text; single words or short phrases', 'r'], ['2', 'Multiple matching', 9, 'match sentences to short paragraphs', 'r'], ['3', 'Note-making', 9, 'brief notes under supplied headings', 'r'],
    ['4', 'Summary', 10, 'up to 100 words, own words as far as possible', 's'], ['5', 'Writing exercise', 8, 'about 120 words of functional prose, e.g. an email', 'w'], ['6', 'Extended writing', 16, 'about 200 words of continuous prose', 'w']];
  const unit = 17;
  ex.forEach(([n, name, m, d, k], i) => {
    const y = 110 + i * 92, f = k === 'r' ? C.tealLight : k === 's' ? C.cream : C.teal;
    b += panel(30, y, 840, 80);
    b += badge(66, y + 40, 20, n, C.panel) + T(100, y + 34, name, { size: 18, weight: 700 }) + T(100, y + 60, d, { size: 15, fill: C.muted });
    b += `<rect x="${500}" y="${y + 22}" width="${m * unit}" height="36" rx="6" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + T(500 + m * unit + 10, y + 47, m + ' marks', { size: 16, weight: 700 });
  });
  const y = 110 + 6 * 92 + 6;
  [[C.tealLight, 'reading'], [C.cream, 'reading + writing'], [C.teal, 'writing']].forEach(([f, l], i) => { b += `<rect x="${60 + i * 260}" y="${y}" width="28" height="22" rx="4" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + T(98 + i * 260, y + 17, l, { size: 16 }); });
  b += T(840, y + 17, 'total 60', { size: 16, weight: 700, anchor: 'end' });
  add('02-six-exercises',
    SV(y + 52, 'Paper 1: six exercises, 60 marks', b),
    'Bars showing the marks for each Paper 1 exercise: 1 short answers 8, 2 multiple matching 9, 3 note-making 9, 4 summary 10, 5 writing 8 and 6 extended writing 16, a total of 60.',
    'Exercise 6 alone is worth 16 marks; the two writing tasks carry 24 of 60.',
    '## Syllabus coverage');
}

// 03 Progression through the paper
{
  let b = '';
  const st = [['Ex. 1-3', 'Reading of increasing depth', 'gist → matching → detailed notes', C.tealLight, C.tealDark], ['Ex. 4', 'Summary', 'own words, not copying: practise paraphrase as its own skill', C.cream, C.mustard], ['Ex. 5-6', 'Purpose-driven writing', '24 of 60 marks: purpose, format and audience must show', C.teal, C.tealDark]];
  st.forEach(([k, h, d, f, e], i) => {
    const x = 30 + i * 290;
    b += card(x, 120 + (2 - i) * 0, 260, 200, h, [d], { kicker: k, fill: f, edge: e, size: 16 });
    if (i < 2) b += harrow(x + 262, x + 288, 220);
  });
  b += panel(30, 344, 840, 92) + T(54, 380, 'Practise each skill on its own first,', { size: 18, weight: 700 }) + T(54, 410, 'then combine them under timed exam conditions.', { size: 17, fill: C.muted });
  add('03-progression',
    SV(464, 'From reading to writing across the paper', b),
    'Exercises 1 to 3 build reading from gist to detailed note-making; Exercise 4 bridges to writing with a summary in your own words; Exercises 5 and 6 are purpose-driven writing worth 24 of the 60 marks.',
    'Reading deepens, the summary bridges, and writing carries the most marks.',
    '## How to approach it');
}

// 04 Reading method
{
  const st = steps(110, [
    ['Read the questions first', 'So you know what to look for.'],
    ['Read the passage once', 'For overall sense, before answering anything.'],
    ['Locate and read around', 'Find the relevant section for each question; answers are rarely in a single word.'],
    ['Use your own words where asked', 'Lifting whole phrases scores poorly on inference questions.'],
    ['Match length to marks', 'A two-mark answer is short; a six-mark answer is developed.'],
  ], { minH: 86, gap: 10 });
  let b = st.s, y = 110 + st.h + 22;
  b += panel(30, y, 840, 70, C.cream, C.mustard) + T(54, y + 43, '"Why" questions need inference: quoting the text back is not an answer.', { size: 17, weight: 600 });
  add('04-reading-method',
    SV(y + 98, 'A reliable reading method', b),
    'Five steps: read the questions first, read the passage once for sense, locate and read around each answer, use your own words where asked, and match answer length to the marks. Why questions need inference, not quotation.',
    'Questions first, whole passage next, then answers sized to the marks.',
    '## Reading comprehension');
}

// 05 Accuracy
{
  let b = '';
  const items = [['Gender agreement', 'nouns carry gender; adjectives and verbs must agree'], ['Verb tense and person', 'consistent across a narrative; correct forms for respect levels'], ['Postpositions', 'ne, ko, se, mein, par; the ergative ne with transitive perfective verbs'], ['Izafat and compounds', 'in more formal registers'], ['Script accuracy', 'dots and diacritics: a misplaced dot changes the word']];
  items.forEach(([h, d], i) => {
    const y = 110 + i * 86;
    b += panel(30, y, 840, 74) + `<rect x="30" y="${y}" width="12" height="74" rx="4" fill="${i === 0 || i === 2 ? C.mustard : C.teal}"/>` + T(62, y + 32, h, { size: 18, weight: 700 }) + T(62, y + 58, d, { size: 16, fill: C.muted });
  });
  const y = 110 + 5 * 86 + 6;
  b += panel(30, y, 840, 70, C.tealLight, C.tealDark) + T(54, y + 43, 'Reserve five minutes to reread: it catches most agreement errors.', { size: 17, weight: 600 });
  add('05-accuracy',
    SV(y + 98, 'Where accuracy marks are lost', b),
    'Five recurring accuracy features: gender agreement, verb tense and person, postpositions including the ergative ne, izafat and compound constructions, and script accuracy with dots and diacritics.',
    'A short list of features costs most marks: check them every time.',
    '## Accuracy — where marks are actually lost');
}

// 06 Worked example
{
  let b = '';
  b += panel(30, 110, 840, 100, C.tealLight, C.tealDark) + T(54, 146, 'Question: Why did the writer decide to leave the village?', { size: 18, weight: 700 }) + T(54, 178, 'The passage: he found no work, and his children\'s school had closed.', { size: 16, fill: C.muted });
  b += card(30, 230, 410, 190, 'Weak answer', ['Copies the two sentences verbatim.', 'Shows where the answer is, not understanding.'], { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, size: 16, gap: 10 });
  b += card(460, 230, 410, 190, 'Strong answer', ['Gives the reason in your own Urdu: economic necessity (no employment) combined with concern for the children\'s education.'], { fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark, size: 16 });
  b += T(450, 470, 'Then check', { size: 19, weight: 700, anchor: 'middle' });
  ['Does it answer WHY, not WHAT?', 'Is it in your own words?', 'Is the length right for the marks?'].forEach((c, i) => {
    b += `<rect x="${30 + i * 286}" y="490" width="268" height="70" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + T(164 + i * 286, 531, c, { size: 16, weight: 600, anchor: 'middle' });
  });
  add('06-worked-example',
    SV(588, 'Worked example: answering a "why" question', b),
    'A why question about leaving the village. The weak answer copies two sentences; the strong answer explains economic necessity and concern for the children\'s education in the candidate\'s own Urdu, then checks reason, wording and length.',
    'Explain the reason in your own words; do not copy the lines that contain it.',
    '## Worked example');
}
