import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-urdu-language-3247-paper-2-unseen-passage';
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


// 01 What the levels reward
{
  let b = '';
  b += panel(30, 110, 840, 266, C.tealLight, C.tealDark) + T(54, 150, 'Top level (18-20 of 20)', { size: 22, weight: 700 });
  ['"Sustains a perceptive, convincing and relevant personal response."', '"shows a clear critical understanding of the text and its deeper implications"', '"responds sensitively and in detail to the way the writer achieves effects"', '"integrates much well-selected reference to the text."'].forEach((s, i) => {
    const y = 172 + i * 48;
    b += `<rect x="54" y="${y}" width="792" height="40" rx="8" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(72, y + 27, s, { size: 17 });
  });
  b += T(450, 412, 'Three ideas to aim for', { size: 19, weight: 700, anchor: 'middle' });
  [['Deeper implications', 'what the extract suggests, not only what happens'], ['Effects', 'how word choice, imagery and structure shape the reader\'s response'], ['Integrated reference', 'short quotations woven into your sentences']].forEach(([h, d], i) => {
    b += card(30 + i * 286, 430, 268, 128, h, [d], { fill: C.cream, edge: C.mustard, size: 16, tsize: 19 });
  });
  b += T(450, 598, 'Lower down, the response to language thins out', { size: 19, weight: 700, anchor: 'middle' });
  [['11-14', '"makes some response to the way the writer uses language"', C.cream, C.mustard, 840], ['Level below', '"makes a little reference to the language of the text"', '#fbf1ea', C.rust, 760], ['Level 2', 'a paraphrase: "a basic understanding of surface meaning"', '#fbf1ea', C.rust, 680]].forEach(([l, s, f, e, w], i) => {
    const y = 616 + i * 66;
    b += `<rect x="30" y="${y}" width="${w}" height="56" rx="10" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(52, y + 35, l, { size: 17, weight: 700 }) + T(180, y + 35, s, { size: 16, fill: C.muted });
  });
  add('01-what-the-levels-reward',
    SV(840, 'Part 1: what the levels reward', b),
    'The top level (18-20 of 20 marks) asks for a perceptive personal response, deeper implications, a detailed response to the writer\'s effects and integrated reference. Lower levels make "some response" or "a little reference" to language, and a paraphrase shows only surface meaning.',
    'The gap between middle and top is how much you say about how the writing works.',
    '## What the question tests');
}

// 02 The prompts are your plan
{
  let b = '';
  b += panel(30, 110, 840, 108, C.cream, C.mustard) + T(54, 140, 'Question', { size: 16, weight: 700, fill: C.olive }) +
    U(846, 186, 'اس اقتباس میں مصنف نے انتظار اور تنہائی کی کیفیت کس طرح پیدا کی ہے؟', { size: 26 });
  const pr = [['ماحول اور فطرت کی منظر کشی', 'setting and nature'], ['دادی کا رویّہ اور ان کے الفاظ', 'the grandmother\'s manner and words'], ['بچوں کی ہنسی اور گھر کی خاموشی کا تضاد', 'children\'s laughter against the silent house']];
  pr.forEach(([u, g], i) => {
    const y = 240 + i * 132;
    b += panel(30, y, 840, 120);
    b += `<rect x="340" y="${y + 12}" width="514" height="96" rx="10" fill="${C.tealLight}"/>` + T(356, y + 36, `Prompt ${i + 1}`, { size: 15, weight: 700, fill: C.tealDark });
    b += U(840, y + 56, u, { size: 25 }) + T(840, y + 94, g, { size: 15, fill: C.muted, anchor: 'end', italic: true });
    b += arrow(336, y + 60, 304, y + 60, { w: 3 });
    b += T(50, y + 34, 'One or two paragraphs', { size: 16, weight: 700 }) +
      [0, 1, 2].map((k) => `<rect x="50" y="${y + 46 + k * 22}" width="240" height="18" rx="4" fill="${k === 2 ? C.cream : C.teal}"/>` + T(170, y + 60 + k * 22, k === 2 ? 'link to the question' : `short quotation ${k + 1}`, { size: 15, anchor: 'middle', fill: k === 2 ? C.olive : C.tealDark, weight: 600 })).join('');
  });
  b += panel(30, 646, 840, 84) + T(54, 680, 'List two or three short quotations under each prompt before writing.', { size: 17, weight: 700 }) +
    T(54, 708, 'The prompts suggest; they do not limit. A good point outside them is still credited.', { size: 17, fill: C.muted });
  add('02-prompts-as-plan',
    SV(758, 'The prompts are your plan', b),
    'The worked question اس اقتباس میں مصنف نے انتظار اور تنہائی کی کیفیت کس طرح پیدا کی ہے؟ with its three prompts on setting and nature, the grandmother\'s manner and words, and the contrast of laughter and silence. Each prompt becomes one or two paragraphs with short quotations, ending with a link to the question.',
    'One prompt, one or two paragraphs, each tied back to the question.',
    '## Using the prompts');
}

// 03 Three passes
{
  let b = '';
  const p = [
    ['First pass', 'What happens or what is said', ['Who is speaking or described?', 'Where and when? What situation?', 'Write a one-sentence summary in the margin.'], C.panel, C.panelEdge],
    ['Second pass', 'How it feels', ['What mood is created?', 'Does it change?', 'Mark the words that carry the feeling most strongly.'], C.tealLight, C.tealDark],
    ['Third pass', 'How it is done', ['For each marked word: what technique is at work?', 'What does it make you think or feel?'], C.cream, C.mustard],
  ];
  p.forEach(([k, h, ls, f, e], i) => {
    const x = 30 + i * 286;
    b += panel(x, 110, 268, 330, f, e) + badge(x + 134, 152, 24, String(i + 1), i === 2 ? C.mustard : C.cream);
    b += T(x + 134, 206, k, { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) + para(x + 134, 236, h, 230, { size: 19, weight: 700, anchor: 'middle', lh: 24 }).s;
    let y = 296;
    ls.forEach((l) => { const q = para(x + 22, y, l, 226, { size: 16, fill: C.ink, lh: 21 }); b += q.s; y += q.h + 10; });
    if (i < 2) b += harrow(x + 270, x + 284, 275, { w: 3 });
  });
  b += panel(30, 462, 840, 70) + T(450, 504, 'Read the question and prompts before the extract, so the first pass is already focused.', { size: 17, weight: 600, anchor: 'middle' });
  add('03-three-passes',
    SV(560, 'Reading an unseen extract in three passes', b),
    'Three readings: first, what happens or is said, with a one-sentence summary; second, how it feels, marking the words that carry the mood; third, how it is done, naming the technique behind each marked word and its effect.',
    'What, then how it feels, then how it is done.',
    '## Reading an unseen extract in three passes');
}

// 04 The toolkit
{
  const tb = table(30, 110, [{ w: 270, head: 'Urdu term', ur: true }, { w: 170, head: 'English', bold: true }, { w: 400, head: 'Ask yourself' }], [
    ['تشبیہ', 'simile', 'What two things are compared, and what does the comparison reveal?'],
    ['استعارہ', 'metaphor', 'What is one thing called, and why?'],
    ['پیکر تراشی / منظر نگاری', 'imagery, description', 'Which senses are used, and what atmosphere results?'],
    ['تضاد', 'contrast', 'Which two things are set against each other, and what does the gap show?'],
    ['تکرار', 'repetition', 'What is stressed by saying it again?'],
    ['علامت', 'symbol', 'Does an object stand for an idea or feeling?'],
    ['لہجہ', 'tone', 'Is the voice bitter, tender, ironic, resigned?'],
    ['کردار نگاری', 'characterisation', 'What do actions and speech reveal that is not stated?'],
    ['مکالمہ', 'dialogue', 'What is said, and what is left unsaid?'],
    ['طنز / مزاح', 'satire / humour', 'What is being mocked or gently laughed at?'],
  ], { us: 24, size: 16, minRow: 64 });
  const y = 110 + tb.h + 20;
  const b = tb.s + panel(30, y, 840, 120, C.cream, C.mustard) + T(54, y + 36, 'Poetry extract? Add form:', { size: 18, weight: 700 }) +
    T(54, y + 66, 'rhyme and refrain, stanza pattern, rhythm, line breaks.', { size: 16, fill: C.muted }) + T(54, y + 92, 'Name a feature only if you can say what it does.', { size: 16, fill: C.muted }) +
    U(810, y + 56, 'قافیہ', { size: 26, anchor: 'middle' }) + T(810, y + 96, 'rhyme', { size: 15, fill: C.muted, anchor: 'middle', italic: true }) +
    U(700, y + 56, 'ردیف', { size: 26, anchor: 'middle' }) + T(700, y + 96, 'refrain', { size: 15, fill: C.muted, anchor: 'middle', italic: true });
  add('04-toolkit',
    SV(y + 148, 'The toolkit: terms and what they do', b),
    'Ten Urdu critical terms with English equivalents and the question each prompts: تشبیہ simile, استعارہ metaphor, پیکر تراشی / منظر نگاری imagery, تضاد contrast, تکرار repetition, علامت symbol, لہجہ tone, کردار نگاری characterisation, مکالمہ dialogue and طنز / مزاح satire and humour. Poetry adds form, such as قافیہ and ردیف.',
    'Every term comes with a question about its effect.',
    '## The toolkit: terms and what they do');
}

// 05 Worked example: quotation, technique, effect
{
  const tb = table(30, 110, [{ w: 330, head: 'Quotation', ur: true, fill: C.tealDark }, { w: 150, head: 'Technique', bold: true }, { w: 360, head: 'Effect' }], [
    [['جیسے کوئی بوڑھا اپنی بات', 'ادھوری چھوڑ کر جا رہا ہو'], 'simile', 'the unfinished talk points to the grandmother\'s unfinished hope'],
    ['انتظار کرتے کرتے تھک', 'nature as a mirror', 'the neem tree shares her grief'],
    ['اس سال بھی', 'detail linked to detail', 'the waiting is not new but years old'],
    ['پتھر کی طرح', 'simile', 'laughter turned heavy and hurtful: others\' joy wounds a grieving house'],
    ['ہنسی / چپ', 'contrast', 'life outside against silence inside deepens her loneliness'],
  ], { us: 24, size: 16, minRow: 78 });
  let b = tb.s;
  const y = 110 + tb.h + 20;
  b += panel(30, y, 840, 120, C.cream, C.mustard) + T(54, y + 38, 'Earned personal response', { size: 19, weight: 700 }) + U(846, y + 50, 'مجھے ... لگا', { size: 26 }) +
    T(54, y + 70, 'The closing judgement grows out of the analysis before it,', { size: 17, fill: C.muted }) + T(54, y + 94, 'not added as decoration.', { size: 17, fill: C.muted });
  add('05-worked-analysis',
    SV(y + 148, 'Worked example: from quotation to effect', b),
    'Five short quotations from the worked extract with their technique and effect: the simile جیسے کوئی بوڑھا اپنی بات ادھوری چھوڑ کر جا رہا ہو, the tired neem tree, اس سال بھی showing years of waiting, the simile پتھر کی طرح, and the contrast of laughter and silence. The personal response مجھے ... لگا comes after the analysis.',
    'Short quotation, technique, effect: then a judgement the analysis has earned.',
    '## Worked example');
}

// 06 Timing and exam technique
{
  let b = '';
  b += T(450, 124, 'Paper 2: two hours, 50 marks', { size: 19, weight: 700, anchor: 'middle' });
  b += `<rect x="30" y="140" width="330" height="80" rx="10" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2.5"/>` + T(195, 174, 'Part 1 Unseen: 20 marks', { size: 18, weight: 700, anchor: 'middle' }) + T(195, 202, 'roughly 45-50 minutes, with reading', { size: 15, fill: C.muted, anchor: 'middle' });
  b += `<rect x="366" y="140" width="504" height="80" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(618, 174, 'Two essays: 15 + 15 marks', { size: 18, weight: 700, anchor: 'middle' }) + T(618, 202, 'the rest of the time', { size: 15, fill: C.muted, anchor: 'middle' });
  const st = steps(250, [
    ['Read the question and prompts first', 'So your first reading of the extract is already focused.'],
    ['Annotate', 'Underline key words; write the technique and a one-word effect in the margin.'],
    ['Open with a direct answer', 'Two or three sentences answering the question.'],
    ['One paragraph per prompt', 'Each with at least two integrated quotations.'],
    ['End with a short personal judgement', 'One that grows out of your analysis.'],
  ], { minH: 80, gap: 10, hi: 3 });
  b += st.s;
  const y = 250 + st.h + 20;
  b += card(30, y, 410, 112, 'Weak', ['"There is a simile in line 2." A device spotted, no effect.'], { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, size: 16, tsize: 19 });
  b += card(460, y, 410, 112, 'Strong', ['Say what the device makes the reader see or feel.'], { fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark, size: 16, tsize: 19 });
  add('06-exam-technique',
    SV(y + 140, 'Timing and exam technique', b),
    'Part 1 carries 20 of Paper 2\'s 50 marks, so roughly 45-50 minutes of the two hours, leaving time for two 15-mark essays. Five steps: read the question and prompts first, annotate, open with a direct answer, write a paragraph per prompt with integrated quotations, and end with an earned judgement.',
    'Spot a device only to say what it does to the reader.',
    '## Exam technique');
}
