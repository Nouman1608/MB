import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-cambridge-urdu-first-and-second-language';
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

// 01 Two syllabuses, two second papers
{
  let b = '';
  const col = (x, code, name, who, p2, prio, f, e) => {
    let s = panel(x, 110, 410, 410, f, e) + T(x + 205, 150, code, { size: 26, weight: 700, anchor: 'middle' }) + T(x + 205, 178, name, { size: 17, anchor: 'middle', fill: C.muted }) + T(x + 205, 204, who, { size: 15, anchor: 'middle', fill: C.tealDark, italic: true });
    s += `<rect x="${x + 20}" y="226" width="370" height="76" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + T(x + 205, 258, 'Paper 1 Reading and Writing', { size: 17, weight: 700, anchor: 'middle' }) + T(x + 205, 284, '50%', { size: 16, anchor: 'middle' });
    s += `<rect x="${x + 20}" y="312" width="370" height="96" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + para(x + 205, 344, p2, 340, { size: 17, weight: 700, anchor: 'middle', lh: 22 }).s + T(x + 205, 394, '50%', { size: 16, anchor: 'middle' });
    s += T(x + 20, 444, 'Paper 2 priority', { size: 15, weight: 700, fill: C.olive });
    s += para(x + 20, 470, prio, 370, { size: 16, fill: C.ink, lh: 21 }).s;
    return s;
  };
  b += col(30, '3247', 'First Language Urdu', 'Urdu as the main language', 'Paper 2 Texts: unseen passage, poetry, prose', 'secure knowledge of the prescribed poetry and prose set texts; build quotation banks', C.tealLight, C.tealDark);
  b += col(460, '3248', 'Second Language Urdu', 'Urdu as a learned additional language', 'Paper 2 Grammar, Writing and Translation', 'translation and grammar accuracy: regular, structured Urdu-English translation practice', C.cream, C.mustard);
  b += panel(30, 540, 840, 70) + T(450, 583, 'Candidates take one syllabus or the other, never both in the same series.', { size: 17, weight: 600, anchor: 'middle' });
  add('01-two-syllabuses',
    SV(638, 'Two O Level Urdu syllabuses', b),
    'Side by side: 3247 First Language Urdu, for candidates whose main language is Urdu, pairs Paper 1 Reading and Writing (50%) with Paper 2 Texts (50%); 3248 Second Language Urdu, for learners, pairs Paper 1 (50%) with Paper 2 Grammar, Writing and Translation (50%).',
    'Same Paper 1 title and weighting, different second papers and different candidates.',
    '## Where this fits in 3247/3248');
}

// 02 Two different Paper 1s
{
  let b = '';
  const unit = 13;
  b += panel(30, 110, 840, 200, C.tealLight, C.tealDark) + T(54, 148, '3247 First Language: 1 hour 30 minutes, two parts', { size: 19, weight: 700 });
  b += `<rect x="54" y="174" width="${25 * unit}" height="90" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(54 + 25 * unit / 2, 212, 'Part 1 Reading', { size: 17, weight: 700, anchor: 'middle' }) + T(54 + 25 * unit / 2, 240, '25 marks', { size: 16, anchor: 'middle' });
  b += `<rect x="${54 + 25 * unit}" y="174" width="${25 * unit}" height="90" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(54 + 25 * unit * 1.5, 212, 'Part 2 Writing', { size: 17, weight: 700, anchor: 'middle' }) + T(54 + 25 * unit * 1.5, 240, '25 marks', { size: 16, anchor: 'middle' });
  b += T(54 + 50 * unit + 16, 226, '= 50', { size: 17, weight: 700 });
  b += panel(30, 330, 840, 220, C.cream, C.mustard) + T(54, 368, '3248 Second Language: 1 hour 45 minutes, five exercises', { size: 19, weight: 700 }) + T(54, 394, 'no longer divided into parts', { size: 15, fill: C.muted, italic: true });
  let x = 54;
  [8, 9, 9, 10, 14].forEach((m, i) => { const w = m * unit; b += `<rect x="${x}" y="414" width="${w}" height="90" fill="${i % 2 ? C.panel : C.sand}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, 452, 'Ex. ' + (i + 1), { size: 16, weight: 700, anchor: 'middle' }) + T(x + w / 2, 480, m + ' marks', { size: 15, anchor: 'middle' }); x += w; });
  b += T(x + 16, 466, '= 50', { size: 17, weight: 700 });
  b += T(54, 532, 'Includes an explicit summary exercise, marked on relevant points and concision.', { size: 15, fill: C.muted });
  b += panel(30, 570, 840, 70) + T(450, 613, 'Only the paper title and the 50% weighting are shared.', { size: 17, weight: 600, anchor: 'middle' });
  add('02-two-paper-1s',
    SV(668, 'Paper 1 is a different paper in each syllabus', b),
    '3247 Paper 1 lasts 1 hour 30 minutes in two parts, Reading 25 marks and Writing 25 marks. 3248 Paper 1 lasts 1 hour 45 minutes in five exercises worth 8, 9, 9, 10 and 14 marks, including a summary exercise.',
    'Same title, different duration, structure and tasks.',
    '## Syllabus coverage');
}

// 03 Choosing the route
{
  let b = '';
  b += panel(260, 110, 380, 80, C.panel, C.ink) + T(450, 158, 'Is Urdu your main language?', { size: 20, weight: 700, anchor: 'middle' });
  b += path('M350,190 L200,250', { w: 3.5 }) + `<polygon points="196,242 188,256 204,252" fill="${C.ink}"/>` + path('M550,190 L700,250', { w: 3.5 }) + `<polygon points="704,242 712,256 696,252" fill="${C.ink}"/>`;
  b += T(250, 214, 'yes', { size: 17, weight: 700, fill: C.tealDark, anchor: 'end' }) + T(650, 214, 'no: learned in addition', { size: 17, weight: 700, fill: C.olive });
  b += card(30, 260, 410, 166, '3247 First Language', ['Assumes fluency.', 'Sophisticated comprehension and composition; response to literary texts in Paper 2.'], { fill: C.tealLight, edge: C.tealDark, size: 16, gap: 10 });
  b += card(460, 260, 410, 166, '3248 Second Language', ['Practical communication at a learner\'s level.', 'Reading for information, functional and creative writing, grammar and translation.'], { fill: C.cream, edge: C.mustard, size: 16, gap: 10 });
  b += T(450, 472, 'The risk of the wrong route', { size: 19, weight: 700, anchor: 'middle' });
  b += `<rect x="30" y="492" width="410" height="90" rx="12" fill="#fbf1ea" stroke="${C.rust}" stroke-width="2"/>` + para(50, 528, 'A fluent speaker entered for Second Language is capped.', 370, { size: 16, weight: 600, fill: C.rust, lh: 21 }).s;
  b += `<rect x="460" y="492" width="410" height="90" rx="12" fill="#fbf1ea" stroke="${C.rust}" stroke-width="2"/>` + para(480, 528, 'A learner entered for First Language faces literary demands they have not been taught.', 370, { size: 16, weight: 600, fill: C.rust, lh: 21 }).s;
  add('03-choosing-the-route',
    SV(610, 'Which route? It depends on the candidate', b),
    'A decision: if Urdu is the main language, 3247 First Language, which assumes fluency and includes literary texts; if Urdu was learned in addition, 3248 Second Language, which tests practical communication, grammar and translation. A fluent speaker on 3248 is capped; a learner on 3247 faces untaught literary demands.',
    'Confirm your route with your centre before revising.',
    '## Two qualifications, two purposes');
}

// 04 Question types
{
  let b = '';
  const Q = [['What?', 'located detail', 'find it in the passage'], ['Why?', 'inference', 'answers rarely sit in one sentence'], ["Writer's attitude", 'evidence from word choice and tone', 'not plot summary'], ['"In your own words"', 'rephrase', 'lifted phrasing will not score']];
  Q.forEach(([q, n, d], i) => {
    const y = 110 + i * 92;
    b += panel(30, y, 840, 80) + `<rect x="30" y="${y}" width="250" height="80" rx="14" fill="${C.teal}"/>` + T(155, y + 48, q, { size: 19, weight: 700, anchor: 'middle' });
    b += T(304, y + 34, n, { size: 18, weight: 700 }) + T(304, y + 60, d, { size: 16, fill: C.muted });
  });
  const y = 110 + 4 * 92 + 12;
  b += card(30, y, 410, 136, '3248: a summary exercise', ['Every required point; no examples or repetition; within the word limit.'], { fill: C.cream, edge: C.mustard, size: 16 });
  b += card(460, y, 410, 136, '3247: no separate summary', ['Comprehension questions of varying length, though a question can still ask you to draw points together.'], { fill: C.tealLight, edge: C.tealDark, size: 16 });
  add('04-question-types',
    SV(y + 164, 'Reading: know the question type', b),
    'Four question types: what asks for located detail, why for inference, the writer\'s attitude for evidence from word choice and tone, and in your own words for rephrasing. 3248 sets an explicit summary exercise; 3247 has no separate summary task.',
    'Each question type needs a different kind of answer.',
    '## Reading and comprehension');
}

// 05 Writing
{
  let b = '';
  b += T(450, 124, 'Directed writing formats', { size: 19, weight: 700, anchor: 'middle' });
  ['letters', 'speeches', 'reports', 'articles', 'dialogues'].forEach((w, i) => { b += `<rect x="${30 + i * 171}" y="142" width="156" height="54" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + T(108 + i * 171, 176, w, { size: 17, weight: 600, anchor: 'middle' }); });
  b += T(450, 240, '3247 Part 2 composition: a choice of title from four types', { size: 19, weight: 700, anchor: 'middle' });
  ['argumentative', 'discursive', 'descriptive', 'narrative'].forEach((w, i) => { b += `<rect x="${30 + i * 215}" y="258" width="195" height="54" rx="10" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2"/>` + T(127 + i * 215, 292, w, { size: 17, weight: 600, anchor: 'middle' }); });
  b += card(30, 340, 410, 140, 'Plan a discursive piece', ['Decide the line of argument and two or three supporting points before writing.'], { size: 16 });
  b += card(460, 340, 410, 140, 'Plan a narrative', ['Decide the ending before you start.', 'Unplanned writing drifts, and organisation marks go with it.'], { size: 16, gap: 8 });
  b += panel(30, 500, 840, 70, C.cream, C.mustard) + T(54, 543, 'Register is heavily credited: the wrong level costs marks even with faultless grammar.', { size: 17, weight: 600 });
  add('05-writing',
    SV(598, 'Writing: formats, composition types and planning', b),
    'Directed writing covers letters, speeches, reports, articles and dialogues; the 3247 composition offers a choice of argumentative, discursive, descriptive and narrative titles. Plan the argument or the ending first, and match the register to the task.',
    'Know the format, plan before writing, and keep the register right.',
    '## Writing');
}

// 06 Accuracy
{
  let b = '';
  const items = [['Gender agreement', 'between noun, adjective and verb'], ['Verb forms', 'tense, person, and respect levels (tu, tum, aap) used consistently'], ['Postpositions', 'ne, ko, se, mein, par; ergative ne with transitive perfective verbs'], ['Izafat and compounds', 'in formal writing'], ['Script accuracy', 'dots and diacritics: a misplaced dot changes the word'], ['Punctuation', 'appropriate to Urdu conventions']];
  items.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 124;
    b += card(x, y, 410, 110, h, [d], { size: 16, fill: i < 3 && i !== 1 ? C.cream : C.panel, edge: i < 3 && i !== 1 ? C.mustard : C.panelEdge });
  });
  b += panel(30, 486, 840, 70, C.tealLight, C.tealDark) + T(54, 529, 'Always reserve time at the end to check agreement and script.', { size: 17, weight: 600 });
  add('06-accuracy',
    SV(584, 'Six features where accuracy marks are lost', b),
    'Six accuracy features: gender agreement, verb forms and consistent respect levels (tu, tum, aap), postpositions including the ergative ne, izafat and compounds, script accuracy with dots and diacritics, and Urdu punctuation.',
    'A small, predictable set of features: check every one before you finish.',
    '## Accuracy — where marks are lost');
}

// 07 Worked example: register
{
  let b = '';
  b += panel(30, 110, 840, 80, C.tealLight, C.tealDark) + T(54, 146, 'Task: a letter to the head teacher requesting permission for a trip', { size: 18, weight: 700 }) + T(54, 172, 'Formal register required', { size: 16, fill: C.tealDark, weight: 600 });
  const st = steps(210, [
    ['Respectful address and closing', 'Open and close as the reader\'s position requires.'],
    ['aap throughout, never tum', 'One respect level from start to finish.'],
    ['Formal vocabulary', 'Avoid colloquialisms.'],
    ['A clear, structured request', 'State what you are asking for and give reasons.'],
  ], { minH: 80, gap: 10 });
  let y = 210 + st.h + 18;
  b += st.s + panel(30, y, 840, 92, '#fbf1ea', C.rust) + T(54, y + 36, 'Common error: drifting into informal address partway through', { size: 18, weight: 700, fill: C.rust }) +
    T(54, y + 66, 'It breaks consistency and costs marks even if every sentence is correct on its own.', { size: 16, fill: C.muted });
  add('07-worked-example',
    SV(y + 120, 'Worked example: choosing the register', b),
    'For a letter to the head teacher asking permission for a trip: respectful address and closing, aap throughout and never tum, formal vocabulary, and a clear request with reasons. The common error is slipping into informal address partway through.',
    'Choose the register once and hold it to the last line.',
    '## Worked example');
}
