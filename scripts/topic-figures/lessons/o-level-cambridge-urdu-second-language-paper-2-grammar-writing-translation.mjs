import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-cambridge-urdu-second-language-paper-2-grammar-writing-translation';
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

// 01 Paper structure
{
  let b = stat(30, 110, 268, 116, '1 h 30 min', 'written paper') + stat(316, 110, 268, 116, '50 marks', '50% of 3248') + stat(602, 110, 268, 116, 'All four', 'exercises: no choice');
  const ex = [['1', 'Sentence transformation', 5, 'five sentences, rewrite each to a prompt', 'Urdu → Urdu'], ['2', 'Multiple-choice cloze', 10, 'grammar in context in a short gapped text', 'Urdu → Urdu'], ['3', 'Extended writing', 20, 'about 200 words from short prompts', 'Urdu → Urdu'], ['4', 'Translation', 15, 'about 150 words from English into Urdu', 'English → Urdu']];
  ex.forEach(([n, name, m, d, dir], i) => {
    const y = 250 + i * 96;
    b += panel(30, y, 840, 84, i === 3 ? C.cream : C.panel, i === 3 ? C.mustard : C.panelEdge) + badge(70, y + 42, 22, n, C.cream) + T(108, y + 36, name, { size: 19, weight: 700 }) + T(108, y + 62, d, { size: 15, fill: C.muted });
    b += `<rect x="450" y="${y + 24}" width="${m * 8}" height="36" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(450 + m * 8 + 10, y + 48, m + ' marks', { size: 15, weight: 700 });
    b += T(850, y + 48, dir, { size: 15, weight: 700, fill: i === 3 ? C.olive : C.tealDark, anchor: 'end' });
  });
  b += T(450, 250 + 4 * 96 + 18, 'Direction shows the language of the question → the language of your answer.', { size: 15, fill: C.muted, anchor: 'middle' });
  add('01-paper-structure',
    SV(250 + 4 * 96 + 46, '3248 Paper 2 at a glance', b),
    '3248 Paper 2 lasts 1 hour 30 minutes for 50 marks, 50% of the qualification, with four compulsory exercises: sentence transformation (5 marks), multiple-choice cloze (10), extended writing of about 200 words (20) and translation of about 150 words from English into Urdu (15). Only Exercise 4 has its question in English.',
    'Four compulsory exercises; writing and translation carry most of the marks.',
    '## Syllabus coverage');
}

// 02 3247 vs 3248 Paper 2
{
  let b = '';
  b += card(30, 110, 410, 200, '3247 First Language', ['Paper 2 Texts', 'Literary set texts.'], { kicker: 'PAPER 2', fill: C.panel, size: 17, gap: 8 });
  b += card(460, 110, 410, 200, '3248 Second Language', ['Paper 2 Grammar, Writing and Translation', 'Applied language: grammar in context, extended writing, translation from English into Urdu.'], { kicker: 'PAPER 2', fill: C.tealLight, edge: C.tealDark, size: 17, gap: 8 });
  b += panel(30, 330, 840, 70, C.cream, C.mustard) + T(450, 373, 'One syllabus or the other, never both in the same series.', { size: 17, weight: 600, anchor: 'middle' });
  add('02-3247-versus-3248',
    SV(428, 'Two different second papers', b),
    '3247 First Language Urdu\'s Paper 2 tests literary set texts; 3248 Second Language Urdu\'s Paper 2 tests applied language: grammar in context, extended writing and translation from English into Urdu.',
    'This paper exists only in 3248: it tests applied language, not literature.',
    '## Where this fits in Cambridge O-Level Urdu');
}

// 03 Sentence transformation
{
  let b = '';
  const flow = [['Original sentence', 'one of five short sentences', C.panel, C.panelEdge], ['Apply the prompt', 'e.g. change the tense, the voice or the sentence type', C.cream, C.mustard], ['New sentence', 'new form, exactly the same meaning', C.tealLight, C.tealDark]];
  flow.forEach(([h, d, f, e], i) => {
    const x = 30 + i * 290;
    b += card(x, 110, 260, 120, h, [d], { fill: f, edge: e, size: 16 });
    if (i < 2) b += harrow(x + 262, x + 288, 170);
  });
  b += T(450, 280, 'Each sentence is worth a full mark: check', { size: 19, weight: 700, anchor: 'middle' });
  ['verb endings', 'postpositions', 'word order', 'meaning unchanged'].forEach((w, i) => { b += `<rect x="${30 + i * 215}" y="300" width="195" height="58" rx="10" fill="${i === 3 ? C.cream : C.panel}" stroke="${i === 3 ? C.mustard : C.panelEdge}" stroke-width="2.5"/>` + T(127 + i * 215, 336, w, { size: 17, weight: 600, anchor: 'middle' }); });
  add('03-sentence-transformation',
    SV(386, 'Exercise 1: change the form, keep the meaning', b),
    'Each of five sentences is rewritten according to a prompt, such as a change of tense, voice or sentence type, while keeping exactly the same meaning. With one mark per sentence, verb endings, postpositions, word order and unchanged meaning all need checking.',
    'Five marks, five sentences: precise grammar, identical meaning.',
    '## Exercise 1: Sentence transformation');
}

// 04 Cloze grammar checklist
{
  let b = '';
  b += T(450, 122, 'Grammar points the syllabus names for the cloze', { size: 19, weight: 700, anchor: 'middle' });
  const g = ['verb conjugation', 'subject/verb agreement', 'comparatives', 'superlatives', 'parts of speech', 'nouns', 'prepositions', 'postpositions', 'articles', 'vocabulary for the context'];
  g.forEach((w, i) => { const x = 30 + (i % 5) * 171, y = 142 + Math.floor(i / 5) * 70; b += `<rect x="${x}" y="${y}" width="156" height="58" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + para(x + 78, y + (w.length > 16 ? 25 : 35), w, 140, { size: 15, weight: 600, anchor: 'middle', lh: 19 }).s; });
  b += panel(30, 300, 840, 170, C.cream, C.mustard) + T(54, 336, 'Two tests for every option', { size: 19, weight: 700 });
  b += `<rect x="54" y="356" width="370" height="94" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(239, 394, 'Does it fit grammatically?', { size: 17, weight: 700, anchor: 'middle' }) + T(239, 422, 'agreement, form, postposition', { size: 15, anchor: 'middle', fill: C.muted });
  b += T(450, 410, '+', { size: 28, weight: 700, anchor: 'middle' });
  b += `<rect x="476" y="356" width="370" height="94" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(661, 394, 'Does it make sense here?', { size: 17, weight: 700, anchor: 'middle' }) + T(661, 422, 'read the full sentence around the gap', { size: 15, anchor: 'middle', fill: C.muted });
  add('04-cloze-checklist',
    SV(498, 'Exercise 2: grammar in context', b),
    'The ten grammar points the syllabus names for the cloze: verb conjugation, subject/verb agreement, comparatives, superlatives, parts of speech, nouns, prepositions, postpositions, articles and context vocabulary. Each option must fit grammatically and make sense in the passage.',
    'An option can be grammatical in isolation and still wrong for the passage.',
    '## Exercise 2: Multiple-choice cloze passage');
}

// 05 Extended writing
{
  let b = stat(30, 110, 268, 116, '20 marks', 'the highest-value exercise') + stat(316, 110, 268, 116, 'about 200 words', 'continuous prose') + stat(602, 110, 268, 116, 'Short prompts', 'as the stimulus');
  b += T(450, 274, 'Purpose, format and audience are specified', { size: 19, weight: 700, anchor: 'middle' });
  [['a letter', 30, 220], ['a diary entry', 268, 220], ['a description for a particular reader', 506, 364]].forEach(([w, x, ww]) => { b += `<rect x="${x}" y="292" width="${ww}" height="56" rx="10" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2"/>` + T(x + ww / 2, 326, w, { size: 16, weight: 600, anchor: 'middle' }); });
  b += T(450, 396, 'Prepare vocabulary and structures for every common purpose', { size: 19, weight: 700, anchor: 'middle' });
  ['narrative', 'descriptive', 'persuasive', 'informational'].forEach((w, i) => { b += `<rect x="${30 + i * 215}" y="414" width="195" height="56" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + T(127 + i * 215, 448, w, { size: 17, weight: 600, anchor: 'middle' }); });
  b += panel(30, 494, 840, 70, '#fbf1ea', C.rust) + T(54, 537, 'Ignoring the purpose, format or audience caps the mark, however accurate the Urdu.', { size: 16, weight: 600, fill: C.rust });
  add('05-extended-writing',
    SV(592, 'Exercise 3: extended writing', b),
    'Exercise 3 is worth 20 marks: about 200 words of continuous prose from short prompts, with purpose, format and audience specified, for example a letter, a diary entry or a description. Prepare for narrative, descriptive, persuasive and informational purposes.',
    'The biggest single exercise: practise every purpose, not just one.',
    '## Exercise 3: Extended writing');
}

// 06 Translation
{
  let b = '';
  b += card(30, 110, 300, 150, 'English passage', ['about 150 words; the question is in English'], { fill: C.panel, size: 16, anchor: 'middle' });
  b += harrow(336, 564, 185, { w: 5 }) + T(450, 172, 'translate', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  b += card(570, 110, 300, 150, 'Urdu', ['15 marks for a short passage, so precision matters'], { fill: C.tealLight, edge: C.tealDark, size: 16, anchor: 'middle' });
  b += `<rect x="30" y="290" width="410" height="150" rx="12" fill="#fbf1ea" stroke="${C.rust}" stroke-width="2"/>` + tick(62, 334, false) + T(90, 330, 'Word-for-word', { size: 18, weight: 700, fill: C.rust }) + para(54, 372, 'produces unnatural Urdu and is marked down', 370, { size: 16, fill: C.muted }).s;
  b += `<rect x="460" y="290" width="410" height="150" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + tick(492, 334, true) + T(520, 330, 'Accurate and natural', { size: 18, weight: 700, fill: C.tealDark }) + para(484, 372, 'keeps the original meaning and reads naturally in Urdu', 370, { size: 16, fill: C.muted }).s;
  add('06-translation',
    SV(468, 'Exercise 4: translation into Urdu', b),
    'An English passage of about 150 words is translated into Urdu for 15 marks. A word-for-word translation that gives unnatural Urdu is marked down; an accurate translation that reads naturally scores better.',
    'Keep the meaning exactly, but make the Urdu sound like Urdu.',
    '## Exercise 4: Translation');
}

// 07 Where the marks are
{
  let b = '';
  const segs = [['Ex. 1', 5, C.tealLight], ['Ex. 2', 10, C.tealLight], ['Ex. 3 Extended writing', 20, C.mustard], ['Ex. 4 Translation', 15, C.cream]];
  let x = 60; const u = 780 / 50;
  segs.forEach(([n, m, f]) => { const w = m * u; b += `<rect x="${x}" y="120" width="${w}" height="96" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + T(x + w / 2, 160, n, { size: m < 8 ? 15 : 17, weight: 700, anchor: 'middle' }) + T(x + w / 2, 190, m + '', { size: 18, anchor: 'middle' }); x += w; });
  b += path(`M${60 + 15 * u},236 L${60 + 15 * u},248 L840,248 L840,236`, { w: 3, stroke: C.olive }) + T(60 + 32.5 * u, 274, '35 of 50 marks', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  const st = steps(300, [
    ['Secure the grammar first', 'Build a checklist from the syllabus\'s named points and test yourself on each one.'],
    ['Then prioritise timed practice', 'Extended writing and translation together carry 35 of the 50 marks.'],
  ], { minH: 90, gap: 12 });
  b += st.s;
  add('07-where-the-marks-are',
    SV(300 + st.h + 30, 'Where the marks are', b),
    'Marks by exercise: 5 for sentence transformation, 10 for the cloze, 20 for extended writing and 15 for translation, so Exercises 3 and 4 carry 35 of the 50 marks. Secure the named grammar points, then prioritise timed writing and translation practice.',
    'Writing and translation carry 35 of 50 marks: weight revision accordingly.',
    '## How to approach it');
}
