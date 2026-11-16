import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-urdu-language-p2-exercise-4-multiple-choice-questions';
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

// 01 At a glance
{
  let b = stat(30, 110, 268, 120, '8 marks', 'multiple-choice questions') +
    stat(316, 110, 268, 120, 'Two speakers', 'one discussion, heard twice') +
    stat(602, 110, 268, 120, 'L1 to L4', 'the only exercise testing all four', C.cream, C.mustard);
  const L = [['L1', 'select information'], ['L2', 'ideas, opinions, attitudes'], ['L3', 'connections between them'], ['L4', 'implied: gist, purpose, intention, feelings']];
  L.forEach(([k, d], i) => { b += card(30 + i * 215, 254, 195, 120, k, [d], { anchor: 'middle', tsize: 22, size: 15, pad: 14 }); });
  b += panel(30, 396, 840, 92) + T(54, 432, 'Number of questions and options: not stated in the syllabus', { size: 18, weight: 700 }) +
    T(54, 462, 'Practise with different numbers and check the specimen paper for your series.', { size: 16, fill: C.muted });
  add('01-exercise-at-a-glance',
    SV(516, 'Paper 2 Exercise 4 at a glance', b),
    'Paper 2 Exercise 4 is worth 8 marks: multiple-choice questions on one discussion between two speakers, heard twice. It is the only exercise that assesses all four listening objectives, L1 to L4.',
    'One two-speaker discussion, every listening objective.',
    '## What the syllabus says');
}

// 02 Question types
{
  const tb = table(30, 110, [{ w: 170, head: 'Objective', bold: true }, { w: 420, head: 'Typical stem', ur: true }, { w: 250, head: 'What you need' }], [
    ['L1 detail', 'سارہ کس دن ... ؟ / ... کہاں ہوگا؟', 'one stated fact'],
    ['L2 opinion', '... کے بارے میں حمزہ کی کیا رائے ہے؟', "one speaker's view"],
    ['L2 objection', '... کو کس بات پر اعتراض ہے؟', 'the reason for a view'],
    ['L3 connection', ['دونوں کس بات پر متفق ہوتے ہیں؟ /', 'آخر میں کیا طے پاتا ہے؟'], 'how the two views relate or end up'],
    ['L4 meaning', 'جب وہ کہتی ہے "..." تو اس کا کیا مطلب ہے؟', 'what a remark implies'],
    ['L4 feeling', 'گفتگو کے آخر میں ... کیسا محسوس کرتا ہے؟', 'an emotion not named directly'],
    ['L4 gist or purpose', 'اس گفتگو کا مقصد کیا ہے؟', 'the point of the whole exchange'],
  ], { us: 23 });
  let y = 110 + tb.h + 22, b = tb.s;
  b += panel(30, y, 840, 70, C.tealLight, C.tealDark) + T(54, y + 43, 'Questions follow the discussion in order; a gist or purpose question comes at the end.', { size: 17 });
  add('02-question-types',
    SV(y + 98, 'The stem tells you what kind of question it is', b),
    'A table of Exercise 4 question types with typical Urdu stems: L1 detail (کس دن، کہاں), L2 opinion (کی کیا رائے ہے؟) and objection (اعتراض), L3 connection (دونوں کس بات پر متفق ہوتے ہیں؟), and L4 meaning, feeling (کیسا محسوس کرتا ہے؟) and purpose (اس گفتگو کا مقصد کیا ہے؟).',
    'Read the stem to know whether you need a fact, a view, a link or an implication.',
    '## What the questions target');
}

// 03 Turn-openers
{
  const tb = table(30, 110, [{ w: 220, head: 'Reaction', bold: true }, { w: 620, head: 'Urdu turn-openers', ur: true }], [
    ['full agreement', 'بالکل ٹھیک، میں آپ سے متفق ہوں، چلو یہی ٹھیک ہے'],
    ['partial agreement', ['یہ خیال برا نہیں، مگر ... /', 'آپ کی بات اپنی جگہ درست ہے، لیکن ...']],
    ['disagreement', 'میں ایسا نہیں سمجھتا، یہ ضروری تو نہیں'],
    ['hesitation', 'ہمم ... / پتا نہیں ... / دیکھو ...'],
    ['surprise', 'ارے! / واقعی؟'],
    ['admiration', 'واہ! / بہت خوب'],
    ['annoyance', 'اُف! / پھر وہی بات'],
  ], { us: 24, hiRows: [1] });
  let y = 110 + tb.h + 22, b = tb.s;
  b += panel(30, y, 840, 110, C.cream, C.mustard) + T(54, y + 40, 'A reservation, not agreement:', { size: 18, weight: 700 }) + U(846, y + 52, 'یہ خیال برا نہیں، مگر', { size: 26 }) +
    T(54, y + 88, 'The option saying they "agree with the idea" is a trap; the one about their reservation is likely right.', { size: 15, fill: C.muted });
  add('03-turn-openers',
    SV(y + 138, 'The first words of a reply show the reaction', b),
    'A table of Urdu turn-openers by reaction: full agreement (بالکل ٹھیک), partial agreement (یہ خیال برا نہیں، مگر ...), disagreement (میں ایسا نہیں سمجھتا), hesitation (ہمم، پتا نہیں), surprise (ارے!), admiration (واہ!) and annoyance (اُف!). Partial agreement signals a reservation.',
    'Track who says what: the reply after a suggestion shows the reaction.',
    '## Following two speakers');
}

// 04 Feeling words
{
  const tb = table(30, 110, [{ w: 170, head: 'Option word', ur: true }, { w: 220, head: 'Meaning', bold: true }, { w: 450, head: 'Evidence you might hear', ur: true }], [
    ['پُرجوش', 'excited', 'اب تو میں واقعی بے تاب ہوں'],
    ['مایوس', 'disappointed', 'میں نے اتنی امید لگائی تھی ...'],
    ['پریشان', 'worried', 'اگر وقت پر نہ ہوا تو ...؟'],
    ['حیران', 'surprised', 'ارے، مجھے تو پتا ہی نہیں تھا!'],
    ['متاثر', 'impressed', 'واہ، تم نے تو سب سوچ رکھا ہے!'],
    ['مطمئن', 'satisfied, reassured', 'چلو، اب کوئی فکر نہیں'],
    ['ناراض', 'annoyed, angry', 'تم نے مجھ سے پوچھا تک نہیں!'],
  ], { us: 24 });
  let y = 110 + tb.h + 22, b = tb.s;
  b += panel(30, y, 840, 70, C.tealLight, C.tealDark) + T(54, y + 43, 'Tone matters too: warm واہ is admiration; flat واہ after bad news may be sarcasm.'.replace(/واہ/g, '"wah"'), { size: 16 });
  add('04-feeling-words',
    SV(y + 98, 'Feelings the speaker shows but never names', b),
    'A table of feeling words that appear in options, with what a speaker might say instead: پُرجوش (excited), مایوس (disappointed), پریشان (worried), حیران (surprised), متاثر (impressed), مطمئن (satisfied) and ناراض (annoyed). Tone also carries meaning.',
    'The option names the feeling; the speaker only shows it.',
    '## Feelings and attitudes');
}

// 05 Four kinds of wrong option
{
  const st = steps(110, [
    ['Right words, wrong speaker', 'The option describes what the other person said or wanted.'],
    ['Suggested, then rejected', 'An idea raised and dropped is wrong when the question asks what was decided.'],
    ['True, but not the answer', 'Something said in the discussion, but it answers a different question.'],
    ['The reported view', 'What "people say" or what one speaker thinks the other thinks, then corrected.'],
  ], { minH: 92, gap: 12 });
  let b = st.s, y = 110 + st.h + 22;
  b += panel(30, y, 840, 70, C.tealLight, C.tealDark) + T(54, y + 43, 'If you can say which type every other option is, your choice is safe.', { size: 17, weight: 600 });
  add('05-wrong-option-types',
    SV(y + 98, 'Four kinds of wrong option', b),
    'Four types of distractor: right words but the wrong speaker, an idea suggested then rejected, a true statement that answers a different question, and a reported view that is then corrected.',
    'Eliminate by type: explain why each other option is wrong.',
    '## The four kinds of wrong option');
}

// 06 Routine
{
  const st = steps(110, [
    ['In the pause', "Read every stem; underline the names and the question word; skim the options if there is time; write both speakers' initials."],
    ['First hearing', 'Follow the order of the questions; mark a provisional choice; note who suggested, objected, agreed or changed their mind.'],
    ['Second hearing', 'Confirm each choice. Listen hardest to the turn after a suggestion and to the last lines, where views often settle.'],
    ['After', 'Check every question has one answer. Do not change a choice without a clear reason from the recording.'],
  ], { minH: 100, gap: 12 });
  add('06-two-hearings',
    SV(110 + st.h + 30, 'A routine for the two hearings', st.s),
    'Four stages: in the pause read the stems and note both speakers\' initials; on the first hearing mark provisional choices and who said what; on the second confirm, listening to replies and the final lines; then check one answer per question.',
    'Know who said what: initials in the margin, notes on every turn.',
    '## A routine for the two hearings');
}

// 07 Worked example
{
  let b = '';
  const lines = [['نادیہ', 'سنا ہے تم نے گٹار سیکھنا چھوڑ دیا؟', C.cream], ['بلال', 'چھوڑا نہیں، بس کچھ دن کا وقفہ لیا ہے۔ استاد صاحب دوسرے شہر چلے گئے ہیں۔', C.tealLight], ['نادیہ', 'آن لائن کلاسیں کیوں نہیں لیتے؟', C.cream], ['بلال', 'کوشش کی تھی، مگر انٹرنیٹ اتنا سست ہے کہ آدھی بات سمجھ ہی نہیں آتی تھی۔', C.tealLight]];
  let y = 110;
  lines.forEach(([n, l, f]) => {
    b += `<rect x="30" y="${y}" width="840" height="70" rx="12" fill="${f}" stroke="${C.panelEdge}" stroke-width="2"/>` + U(846, y + 46, n + ':', { size: 22, fill: C.tealDark }) + U(770, y + 46, l, { size: 22 });
    y += 80;
  });
  y += 12;
  const Q = [
    ['(a)', 'بلال نے گٹار کی کلاسیں کیوں روکی ہیں؟', 'Why has Bilal stopped his guitar lessons?', [['A', 'وہ گٹار سیکھنا نہیں چاہتا۔', 'reported view: Bilal corrects it (چھوڑا نہیں)'.replace(' (چھوڑا نہیں)', ''), false], ['B', 'اس کے استاد دوسرے شہر چلے گئے ہیں۔', 'stated reason (L1, L2)', true], ['C', 'اس کے پاس وقت نہیں۔', 'never mentioned', false]]],
    ['(b)', 'آن لائن کلاسوں کے بارے میں بلال کی کیا رائے ہے؟', "What is Bilal's view of online classes?", [['A', 'اس نے کبھی آن لائن کلاس لینے کی کوشش نہیں کی۔', 'ruled out: he says he tried', false], ['B', 'وہ آن لائن کلاسیں پسند کرتا ہے۔', 'contradicted by the "but" after his attempt', false], ['C', 'سست انٹرنیٹ کی وجہ سے آن لائن کلاسیں کارآمد نہیں رہیں۔', 'implied, never stated (L4)', true]]],
  ];
  Q.forEach(([L, q, qe, opts]) => {
    const H = 92 + opts.length * 64 + 10;
    b += panel(30, y, 840, H) + T(54, y + 40, L, { size: 19, weight: 700 }) + U(846, y + 48, q, { size: 25 }) + T(54, y + 74, qe, { size: 15, fill: C.muted, italic: true });
    opts.forEach(([k, u, why, ok], i) => {
      const yy = y + 92 + i * 64;
      b += `<rect x="46" y="${yy}" width="808" height="56" rx="10" fill="${ok ? C.tealLight : C.panel}" stroke="${ok ? C.tealDark : C.panelEdge}" stroke-width="2"/>`;
      b += tick(70, yy + 37, ok) + T(96, yy + 35, k + '  ' + why, { size: 15, fill: ok ? C.tealDark : C.rust, weight: 600 }) + U(838, yy + 40, u, { size: 22 });
    });
    y += H + 14;
  });
  add('07-worked-example',
    SV(y + 16, 'Worked example: Nadia and Bilal', b),
    'A four-line exchange in which Nadia has heard Bilal gave up guitar and Bilal explains his teacher moved away and online classes failed because of slow internet. Question (a) answer B: his teacher moved, while A is the reported view he corrects. Question (b) answer C: online classes were not useful, which is implied.',
    'Reject the reported view and the contradicted option; choose what the speaker means.',
    '## Worked example');
}
