import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-urdu-language-exercise-4-summary';
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

// 01 The task in five facts
{
  let b = '';
  const facts = [['10 marks', 'one summary task'], ['≤ 100 words', 'a ceiling, not a target'], ['One paragraph', 'not a list or several paragraphs'], ['Named aspect(s)', 'of the Exercise 3 text only'], ['Own words', 'as far as possible']];
  facts.slice(0, 3).forEach(([h, d], i) => { b += stat(30 + i * 286, 110, 268, 116, h, d); });
  facts.slice(3).forEach(([h, d], i) => { b += stat(30 + i * 430, 240, 410, 116, h, d); });
  b += T(450, 406, 'Marked as reading and as writing', { size: 21, weight: 700, anchor: 'middle' });
  const obj = [['R2', 'ideas, opinions, attitudes'], ['R3', 'connections between them'], ['W1', 'clear and accurate'], ['W2', 'organised, linked'], ['W3', 'range of structures, vocabulary'], ['W4', 'punctuation, spelling'], ['W5', 'register and style']];
  obj.forEach(([k, d], i) => {
    const x = 30 + i * 122, R = i < 2;
    b += `<rect x="${x}" y="428" width="110" height="130" rx="12" fill="${R ? C.tealLight : C.cream}" stroke="${R ? C.tealDark : C.mustard}" stroke-width="2.5"/>`;
    b += T(x + 55, 464, k, { size: 22, weight: 700, anchor: 'middle' }) + para(x + 55, 494, d, 96, { size: 15, fill: C.muted, anchor: 'middle', lh: 19 }).s;
  });
  b += T(146, 584, 'reading', { size: 16, weight: 700, fill: C.tealDark, anchor: 'middle' }) + T(570, 584, 'writing: all five objectives', { size: 16, weight: 700, fill: C.olive, anchor: 'middle' });
  b += panel(30, 606, 840, 96) + T(54, 642, 'Working convention on this site: up to 5 content + up to 5 language', { size: 18, weight: 700 }) +
    T(54, 672, 'The syllabus does not publish how the 10 marks divide; this split is a practice convention.', { size: 16, fill: C.muted });
  add('01-task-in-five-facts',
    SV(730, 'The summary in five facts', b),
    'The summary is worth 10 marks: one paragraph of no more than 100 words on the named aspect or aspects of the Exercise 3 text, in your own words. It is marked against R2 and R3 and all five writing objectives, W1 to W5.',
    'A summary is marked as writing as well as reading.',
    '## What the syllabus says');
}

// 02 Five steps
{
  const st = steps(110, [
    ['Read the aspect, not the text', 'Write the named aspect(s) in two or three words each. Often there are two, and both must appear.'],
    ['Collect the points', 'Mark every sentence that answers the aspect; merge, generalise, drop quotations.'],
    ['Put them in your own words', 'Synonyms, word-class changes, generalising, active/passive, combining.'],
    ['Link into one paragraph', 'Connectives, neutral third-person register, no opinion.'],
    ['Check the count', 'No more than 100 words; cut if you are over.'],
  ], { minH: 90, gap: 10 });
  add('02-five-steps',
    SV(110 + st.h + 30, 'Five steps to a summary', st.s),
    'Five steps: read the aspect named in the question, collect the relevant points, put them in your own words, link them into one paragraph, and check the word count.',
    'Aspect first, then points, own words, links and the count.',
    '## Step 1: read the aspect, not the text');
}

// 03 Collecting points
{
  let b = '';
  b += card(30, 110, 410, 124, 'Merge', ['The text may state one idea twice in different words: write it once.'], { size: 17 });
  b += card(460, 110, 410, 124, 'Drop', ['Introduction, background, examples, illustrative statistics and quotations. Keep a quotation\'s point if relevant.'], { size: 17 });
  b += panel(30, 254, 840, 170, C.cream, C.mustard) + T(54, 290, 'Generalise lists and examples', { size: 20, weight: 700 });
  b += U(850, 354, 'پودینہ، دھنیا اور ٹماٹر', { size: 28 }) + T(850, 394, 'mint, coriander and tomatoes', { size: 16, fill: C.muted, italic: true, anchor: 'end' });
  b += arrow(530, 349, 440, 349, { w: 4 });
  b += U(420, 354, 'جلدی اگنے والی سبزیاں', { size: 28, fill: C.tealDark }) + T(420, 394, 'fast-growing vegetables', { size: 16, fill: C.tealDark, italic: true, anchor: 'end' });
  b += panel(30, 444, 840, 92, C.tealLight, C.tealDark) + T(54, 480, 'Count', { size: 20, weight: 700 }) + T(54, 510, 'For a 100-word summary on two aspects, six to eight points is typical.', { size: 17, fill: C.muted });
  add('03-collecting-points',
    SV(564, 'Collecting the points', b),
    'Merge repeated points, drop background, examples and quotations, and generalise lists: پودینہ، دھنیا اور ٹماٹر becomes جلدی اگنے والی سبزیاں. Six to eight points is typical for a 100-word, two-aspect summary.',
    'Fewer, broader points: merge repeats and turn lists into one general idea.',
    '## Step 2: collect the points');
}

// 04 Own-words techniques
{
  const tb = table(30, 110, [{ w: 220, head: 'Technique', bold: true }, { w: 330, head: 'Text', ur: true }, { w: 290, head: 'Your version', ur: true, fill: C.tealDark }], [
    ['Synonym', 'پانی کی کمی ہے', 'پانی کی قلت ہے'],
    ['Change the word class', 'بچے پہلے سے کم کھیلتے ہیں', ['بچوں کے کھیل میں', 'کمی آ گئی ہے']],
    ['Generalise', 'سیب، آم اور کیلے', 'پھل'],
    ['Active to passive (or back)', 'انتظامیہ نے سڑکیں بند کیں', 'سڑکیں بند کی گئیں'],
    ['Combine with a connective', ['بارش بہت ہوئی۔', 'اسکول بند ہو گئے۔'], ['شدید بارش کے باعث', 'اسکول بند ہو گئے۔']],
  ], { us: 24, minRow: 72 });
  let y = 110 + tb.h + 22, b = tb.s;
  b += panel(30, y, 840, 70, C.cream, C.mustard) + T(54, y + 43, 'Combining saves words and shows W2 linking at the same time. Names and terms may stay.', { size: 17, fill: C.ink });
  add('04-own-words',
    SV(y + 98, 'Five ways to use your own words', b),
    'A table of five paraphrase techniques with Urdu examples: synonym (کمی to قلت), changing the word class, generalising (سیب، آم اور کیلے to پھل), active to passive, and combining two sentences with a connective (شدید بارش کے باعث).',
    'Own words means no lifted phrases, not replacing every single word.',
    '## Step 3: put the points in your own words');
}

// 05 Connectives
{
  const tb = table(30, 110, [{ w: 200, head: 'Function', bold: true }, { w: 640, head: 'Connectives', ur: true }], [
    ['Addition', { u: 'اس کے علاوہ، نیز، مزید یہ کہ', g: 'besides, also, moreover' }],
    ['Contrast', { u: 'تاہم، لیکن، اس کے باوجود', g: 'however, but, despite this' }],
    ['Cause', { u: 'کیونکہ، کی وجہ سے، کے باعث', g: 'because, because of, owing to' }],
    ['Result', { u: 'اس لیے، لہٰذا، چنانچہ', g: 'so, therefore, consequently' }],
    ['Sequence', { u: 'پہلے، پھر، آخر میں', g: 'first, then, finally' }],
  ], { us: 26, minRow: 70, hiRows: [1] });
  let y = 110 + tb.h + 22, b = tb.s;
  b += panel(30, y, 840, 156, C.tealLight, C.tealDark) + T(54, y + 38, 'Register', { size: 19, weight: 700 }) +
    T(54, y + 68, 'Neutral, impersonal, third person. No opinion, no addressing the reader, and no opening like:', { size: 16, fill: C.muted });
  b += U(850, y + 122, 'اس مضمون میں بتایا گیا ہے کہ', { size: 26, fill: C.rust }) + tick(520, y + 118, false) + T(54, y + 118, 'spends words on nothing', { size: 16, fill: C.rust, weight: 600 });
  add('05-connectives',
    SV(y + 184, 'Connectives that link the points', b),
    'Connectives grouped by function: addition (اس کے علاوہ، نیز), contrast (تاہم، لیکن), cause (کیونکہ، کے باعث), result (اس لیے، لہٰذا) and sequence (پہلے، پھر، آخر میں). Contrast is highlighted as the hinge for two-aspect questions. Write in neutral third person without an empty opener.',
    'تاہم is the natural hinge between the two halves of a two-aspect summary.',
    '## Step 4: link the points into one paragraph');
}

// 06 Over the limit: cutting order
{
  let b = '';
  const cuts = [['Repeated ideas', 'cut first'], ['Introductory phrases', ''], ['Examples', ''], ['The least important point', 'cut last']];
  cuts.forEach(([h, n], i) => {
    const w = 800 - i * 80, x = 450 - w / 2, y = 110 + i * 92;
    b += `<rect x="${x}" y="${y}" width="${w}" height="78" rx="12" fill="${i === 0 ? C.cream : C.panel}" stroke="${i === 0 ? C.mustard : C.panelEdge}" stroke-width="2.5"/>`;
    b += badge(x + 40, y + 39, 20, String(i + 1), i === 0 ? C.mustard : C.cream) + T(450, y + 46, h, { size: 20, weight: 700, anchor: 'middle' });
    if (n) b += T(x + w - 20, y + 46, n, { size: 15, fill: C.muted, anchor: 'end', italic: true });
  });
  const y = 110 + 4 * 92 + 16;
  b += panel(30, y, 840, 150, C.tealLight, C.tealDark) + T(54, y + 36, 'Why Urdu counts climb fast', { size: 19, weight: 700 }) +
    T(54, y + 66, 'Postpositions and helper verbs each add words:', { size: 17, fill: C.muted }) + U(850, y + 68, 'کے لیے، ہو گیا ہے', { size: 26 }) +
    T(54, y + 98, 'Compound verbs and noun phrases keep the count down.', { size: 17, fill: C.muted }) +
    T(54, y + 128, 'Quick count: count one handwritten line and multiply.', { size: 17, fill: C.tealDark, weight: 600 });
  add('06-cutting-order',
    SV(y + 178, 'Over 100 words? Cut in this order', b),
    'A narrowing list of what to cut when over the limit: repeated ideas first, then introductory phrases, then examples, and finally the least important point. Postpositions and helper verbs such as کے لیے and ہو گیا ہے add words quickly.',
    'Cut repetition and padding before you cut a point.',
    '## Step 5: check the count');
}

// 07 Worked example: from text to summary
{
  let b = '';
  b += T(240, 118, 'Advantages', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' }) + T(660, 118, 'Problems', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' });
  const adv = ['cheap (half the rickshaw fare)', 'frequent (every ten minutes)', 'air-conditioned: comfortable in summer', 'reserved seats for women'];
  const prob = ['main roads only: a rickshaw is still needed to reach the stop', 'overcrowded at rush hour'];
  adv.forEach((p, i) => { b += `<rect x="30" y="${134 + i * 58}" width="400" height="48" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + T(50, 164 + i * 58, (i + 1) + '. ' + p, { size: 16 }); });
  prob.forEach((p, i) => { const l = wrap(p, 360, 16); b += `<rect x="470" y="${134 + i * 92}" width="400" height="80" rx="10" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2"/>` + l.map((s, k) => T(490, 165 + i * 92 + k * 22, (k === 0 ? (i + 5) + '. ' : '    ') + s, { size: 16 })).join(''); });
  b += `<rect x="470" y="324" width="400" height="48" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(490, 354, 'hinge between the halves:', { size: 16, fill: C.muted }) + U(850, 358, 'تاہم', { size: 26 });
  // paraphrase mapping
  let y = 410;
  b += T(450, y, 'How the model summary rewords the text', { size: 20, weight: 700, anchor: 'middle' });
  y += 20;
  const map = [['کرایہ رکشے سے آدھا ہے', 'سستی'], ['ہر دس منٹ بعد', 'تھوڑے تھوڑے وقفے سے'], ['بڑی سڑکوں', 'مرکزی شاہراہوں'], ['رش کے وقت… جگہ نہیں ملتی', 'کھچا کھچ بھری']];
  b += T(650, y + 22, 'In the source text', { size: 16, weight: 700, fill: C.muted, anchor: 'middle' }) + T(230, y + 22, 'In the summary', { size: 16, weight: 700, fill: C.tealDark, anchor: 'middle' });
  y += 36;
  map.forEach(([src, sum], i) => {
    const yy = y + i * 92;
    b += `<rect x="470" y="${yy}" width="400" height="82" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + U(850, yy + 56, src, { size: 25 });
    b += arrow(462, yy + 41, 440, yy + 41, { w: 3.5 });
    b += `<rect x="30" y="${yy}" width="400" height="82" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + U(410, yy + 56, sum, { size: 25, fill: C.tealDark });
  });
  y += 4 * 92 + 6;
  b += panel(30, y, 840, 70, C.cream, C.mustard) + T(54, y + 43, 'Model summary: 66 words, one paragraph. The source\'s general opening claim is left out.', { size: 17 });
  add('07-worked-example',
    SV(y + 98, 'Worked example: the new bus service', b),
    'The six points of the bus-service summary sorted into four advantages and two problems, joined by تاہم. Below, four rewordings: کرایہ رکشے سے آدھا ہے becomes سستی, ہر دس منٹ بعد becomes تھوڑے تھوڑے وقفے سے, بڑی سڑکوں becomes مرکزی شاہراہوں, and the rush-hour crowding becomes کھچا کھچ بھری.',
    'Six points, two halves joined by تاہم, every phrase reworded.',
    '## Worked example');
}

// 08 Timing
{
  let b = '';
  const segs = [['Collect points', 4, C.tealLight], ['Write', 8, C.teal], ['Count and check', 3, C.cream]];
  let x = 60; const unit = 780 / 15;
  segs.forEach(([n, m, f]) => {
    const w = m * unit;
    b += `<rect x="${x}" y="120" width="${w}" height="96" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + T(x + w / 2, 160, m + ' min', { size: 22, weight: 700, anchor: 'middle' }) + T(x + w / 2, 190, n, { size: 17, anchor: 'middle' });
    x += w;
  });
  b += T(60, 244, '0', { size: 15, fill: C.muted }) + T(840, 244, 'about 15 minutes', { size: 15, fill: C.muted, anchor: 'end' });
  b += card(30, 270, 410, 165, 'Draft in your head', ['Or in brief notes. A full rough copy plus a fair copy rarely fits in the time.'], { size: 16 });
  b += card(460, 270, 410, 165, 'Check twice', ['Once for meaning: does every point answer the aspect?', 'Once for accuracy: agreement, نے, spelling.'.replace('نے, ', 'the ergative, ')], { size: 16, fill: C.cream, edge: C.mustard });
  add('08-timing',
    SV(465, 'About 15 minutes for the summary', b),
    'A 15-minute timeline: 4 minutes to collect points, 8 to write and 3 to count and check. Draft in your head or in brief notes, and check once for meaning and once for accuracy.',
    'You already know the text from Exercise 3, so most of the time goes on writing.',
    '## Exam technique and timing');
}
