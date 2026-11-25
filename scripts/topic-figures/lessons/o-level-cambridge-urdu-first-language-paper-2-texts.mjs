import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-cambridge-urdu-first-language-paper-2-texts';
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

// 01 Paper 2 structure
{
  let b = '';
  const x0 = 60, W = 780, u = W / 50;
  const parts = [['Part 1', 'Unseen Passage', 20, C.cream, 'one passage-based question', 'answer it'], ['Part 2', 'Poetry', 15, C.tealLight, 'two essay questions', 'answer one'], ['Part 3', 'Prose', 15, C.teal, 'two essay questions', 'answer one']];
  let x = x0;
  parts.forEach(([p, n, m, f, q, a]) => {
    const w = m * u;
    b += `<rect x="${x}" y="120" width="${w}" height="100" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + T(x + w / 2, 162, p + ': ' + n, { size: 19, weight: 700, anchor: 'middle' }) + T(x + w / 2, 192, m + ' marks', { size: 18, anchor: 'middle' });
    x += w;
  });
  b += T(x0, 248, 'Paper 2 Texts: 50% of 3247', { size: 16, weight: 700 }) + T(x0 + W, 248, 'all three parts test AO3 Literature', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
  b += card(30, 276, 268, 190, 'Unseen extract', ['One passage-based question.', 'Poetry or prose not seen before; prompts guide you to how the writer achieves effects.'], { size: 16, fill: C.cream, edge: C.mustard, gap: 8 });
  b += card(316, 276, 268, 190, 'Prescribed poetry', ['Two essay questions: answer one.', 'Ten ghazals and three nazms.'], { size: 16, fill: C.tealLight, edge: C.tealDark });
  b += card(602, 276, 268, 190, 'Prescribed prose', ['Two essay questions: answer one.', 'Eight articles, including two of Ghalib\'s letters.'], { size: 16, fill: C.teal, edge: C.tealDark });
  b += panel(30, 486, 840, 70) + T(450, 529, 'Paper 1 (the other 50%) is Reading and Writing on a non-literary passage.', { size: 16, anchor: 'middle', fill: C.muted });
  add('01-paper-2-structure',
    SV(584, '3247 Paper 2 Texts at a glance', b),
    'Paper 2 Texts, 50% of 3247, has three parts: Part 1 Unseen Passage (20 marks, one passage-based question), Part 2 Poetry (15 marks, one of two essay questions on ten ghazals and three nazms) and Part 3 Prose (15 marks, one of two essay questions on eight articles). All test AO3 Literature.',
    'An unseen extract for 20 marks, then one poetry and one prose essay for 15 each.',
    '## Syllabus coverage');
}

// 02 Set texts
{
  let b = '';
  b += panel(30, 110, 840, 290, C.tealLight, C.tealDark) + T(54, 146, 'Part 2 Poetry', { size: 20, weight: 700 });
  b += T(54, 180, 'Ghazals: ten prescribed in total, by', { size: 16, weight: 700, fill: C.tealDark });
  ['Khwaja Haider Ali Aatish', 'Parveen Shakir', 'Momin Khan Momin', 'Allama Iqbal', 'Ahmed Faraz'].forEach((n, i) => { const x = 54 + (i % 3) * 270, y = 200 + Math.floor(i / 3) * 46; b += `<rect x="${x}" y="${y}" width="254" height="38" rx="8" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(x + 127, y + 25, n, { size: 15, anchor: 'middle' }); });
  b += T(54, 318, 'Nazms: three prescribed', { size: 16, weight: 700, fill: C.tealDark });
  [['Hali, Musadas Hali', '17 selected stanzas'], ['Syed Zameer Jafree', '"Admee"'], ['Mirza Mahmood Sarhadi', '"Qitaat"']].forEach(([n, d], i) => { const x = 54 + i * 270; b += `<rect x="${x}" y="332" width="254" height="58" rx="8" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(x + 127, 356, n, { size: 15, anchor: 'middle', weight: 600 }) + T(x + 127, 378, d, { size: 15, anchor: 'middle', fill: C.muted }); });
  b += panel(30, 420, 840, 236, C.cream, C.mustard) + T(54, 456, 'Part 3 Prose: eight prescribed articles, by', { size: 20, weight: 700 });
  ['Muhammad Hussain Azad', 'Mirza Farhatullah Baig', 'Ghulam Abbas', 'Ahmad Nadeem Qasmi', 'Sir Syed Ahmed Khan', 'Mushtaq Ahmed Yousafi', 'Syed Imtiaz Ali Taj', 'Mirza Ghalib: two letters'].forEach((n, i) => { const x = 54 + (i % 3) * 270, y = 476 + Math.floor(i / 3) * 56; b += `<rect x="${x}" y="${y}" width="254" height="44" rx="8" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(x + 127, y + 28, n, { size: 15, anchor: 'middle', weight: i === 7 ? 700 : 400 }); });
  add('02-set-texts-v2',
    SV(684, 'The prescribed set texts', b),
    'Part 2 Poetry: ten ghazals by Khwaja Haider Ali Aatish, Parveen Shakir, Momin Khan Momin, Allama Iqbal and Ahmed Faraz, and three nazms by Hali (Musadas Hali, 17 stanzas), Syed Zameer Jafree (Admee) and Mirza Mahmood Sarhadi (Qitaat). Part 3 Prose: eight articles, including two of Ghalib\'s letters.',
    'Know each prescribed text in depth, with quotations ready.',
    '## The set texts at a glance');
}

// 03 What the mark scheme rewards
{
  let b = '';
  const lv = [['Personal, informed response', 'to the text'], ['Beyond the literal', 'deeper implications, not surface meaning only'], ["The writer's craft", 'word choice, imagery, structure, tone'], ['Close, well-selected reference', 'to the text itself, not paraphrase alone']];
  lv.forEach(([h, d], i) => {
    const y = 470 - i * 96, w = 520 + i * 80, x = 450 - w / 2;
    b += `<rect x="${x}" y="${y}" width="${w}" height="82" rx="12" fill="${[C.panel, C.tealLight, C.teal, C.cream][i]}" stroke="${i === 3 ? C.mustard : C.tealDark}" stroke-width="2.5"/>` + T(450, y + 36, h, { size: 18, weight: 700, anchor: 'middle' }) + T(450, y + 62, d, { size: 15, anchor: 'middle', fill: C.muted });
  });
  b += T(450, 130, 'Top levels: sustained, perceptive engagement with the writer\'s craft', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += panel(30, 576, 840, 70) + T(450, 619, 'AO3 Literature: first-hand knowledge, literal and deeper meaning, effects, personal response', { size: 15, anchor: 'middle', fill: C.muted });
  add('03-mark-scheme-rewards',
    SV(674, 'What the mark schemes reward', b),
    'Four qualities rewarded in increasing depth: a personal, informed response; understanding beyond the literal; explicit engagement with the writer\'s craft (word choice, imagery, structure, tone); and close, well-selected reference to the text. The top levels need sustained, perceptive engagement with craft.',
    'Accurate comprehension is not enough: the top levels reward how the writer works.',
    '## What the mark schemes reward');
}

// 04 Two kinds of preparation
{
  let b = '';
  b += card(30, 110, 410, 260, 'Part 1: build a skill', ['You cannot memorise an unseen extract.', 'Practise unfamiliar Urdu poetry and prose and identify how the writer creates effect: word choice, imagery, structure.', 'Use past-question prompts as a model.'], { kicker: 'UNSEEN PASSAGE', fill: C.cream, edge: C.mustard, size: 16, gap: 10 });
  b += card(460, 110, 410, 260, 'Parts 2 and 3: know the texts', ['Close, memorised knowledge of the ghazals, nazms and prose pieces.', 'Essays need direct reference and quotation: fluent writing without it will not reach the top levels.'], { kicker: 'SET TEXTS', fill: C.tealLight, edge: C.tealDark, size: 16, gap: 10 });
  b += panel(30, 390, 840, 104) + T(54, 426, 'You choose one question from two in Parts 2 and 3', { size: 18, weight: 700 }) +
    T(54, 456, 'Cover enough of the prescribed list that you are never left with only one usable option.', { size: 16, fill: C.muted });
  add('04-two-kinds-of-preparation',
    SV(522, 'Prepare a skill and a body of knowledge', b),
    'Part 1 needs a skill: practise unseen Urdu poetry and prose, identifying word choice, imagery and structure. Parts 2 and 3 need close knowledge of the set texts with quotations, and enough coverage that both question choices remain open.',
    'Practise unseen analysis; memorise set texts with quotations.',
    '## How to approach it');
}

// 05 Worked example
{
  let b = '';
  b += panel(30, 110, 840, 80, C.tealLight, C.tealDark) + T(54, 146, 'Question: how does the poet convey a particular emotion or theme', { size: 18, weight: 700 }) + T(54, 172, 'in one of the prescribed ghazals?', { size: 18, weight: 700 });
  const st = [['Identify specific lines', 'quote the sher itself'], ['Explain the language', 'the imagery or word choice in those lines'], ['Connect to the question', 'link the language to the named emotion or theme']];
  st.forEach(([h, d], i) => {
    const x = 30 + i * 290;
    b += card(x, 214, 260, 170, h, [d], { size: 16, kicker: 'STEP ' + (i + 1), fill: C.panel });
    if (i < 2) b += harrow(x + 262, x + 288, 299);
  });
  b += `<rect x="30" y="404" width="840" height="84" rx="12" fill="#fbf1ea" stroke="${C.rust}" stroke-width="2"/>` + tick(62, 452, false) + T(90, 438, 'Weak answer', { size: 17, weight: 700, fill: C.rust }) + T(90, 466, 'summarises the poem\'s general subject without close reference to its wording', { size: 16, fill: C.muted });
  add('05-worked-example',
    SV(516, 'Worked example: a poetry essay', b),
    'A strong poetry answer identifies specific lines (sher), explains the imagery or word choice in them, and connects that language to the emotion or theme in the question. A weak answer summarises the poem\'s subject without close reference.',
    'Quote, explain the language, then tie it to the question.',
    '## Worked example');
}

// 06 Coverage targets
{
  let b = '';
  const row = (y, label, know, total, f) => {
    let s = T(54, y + 30, label, { size: 18, weight: 700 }) + T(54, y + 54, 'know at least ' + know + ' of ' + total + ' in close detail', { size: 15, fill: C.muted });
    for (let i = 0; i < total; i++) s += `<rect x="${380 + i * 48}" y="${y + 8}" width="40" height="52" rx="8" fill="${i < know ? f : C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
    return s;
  };
  b += panel(30, 110, 840, 330);
  b += row(130, 'Ghazals', 6, 10, C.teal) + row(230, 'Nazms', 2, 3, C.tealLight) + row(330, 'Prose articles', 5, 8, C.mustard);
  b += panel(30, 460, 840, 92, C.cream, C.mustard) + T(54, 496, 'Time each part in practice', { size: 18, weight: 700 }) + T(54, 526, 'Too long on Part 1 leaves too little for the two essays.', { size: 16, fill: C.muted });
  add('06-coverage-targets',
    SV(580, 'How much of the set texts to know', b),
    'The guide\'s revision targets: know at least six of the ten prescribed ghazals, two of the three nazms and five of the eight prose articles in close textual detail, and time each part so Part 1 does not crowd out the essays.',
    'Enough depth across the list to keep both questions open.',
    '## Quick revision checklist');
}
