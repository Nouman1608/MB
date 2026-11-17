import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-urdu-language-3247-paper-2-prose-essay';
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


// 01 The prescribed prose for 2027
{
  let b = '';
  const items = [
    ['Rishta Nata', 'Muhammad Hussain Azad'], ['Imtahaan', 'Mirza Farhatullah Baig'], ['Overcoat', 'Ghulam Abbas'], ['Shafarish', 'Ahmad Nadeem Qasmi'],
    ['Umeed kee Khushi', 'Sir Syed Ahmed Khan'], ['Ur ahna ghar mai murgiyoon kaa', 'Mushtaq Ahmed Yousafi'], ['Ahraam o Sakoon', 'Syed Imtiaz Ali Taj'],
  ];
  items.forEach(([w, a], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 84;
    b += `<rect x="${x}" y="${y}" width="410" height="72" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + T(x + 20, y + 31, w, { size: 18, weight: 700, italic: true }) + T(x + 20, y + 56, a, { size: 16, fill: C.muted });
  });
  const gy = 110 + 3 * 84;
  b += `<rect x="460" y="${gy}" width="410" height="72" rx="12" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2.5"/>` + T(480, gy + 31, 'Khatoot e Ghalib: two letters', { size: 18, weight: 700, italic: true }) + T(480, gy + 56, 'to Tafta (3 Nov 1858), to Majrooh (2 Dec 1859)', { size: 15, fill: C.olive });
  const y = gy + 120;
  b += T(450, y, 'Four forms on one list', { size: 20, weight: 700, anchor: 'middle' });
  [['افسانہ', 'short story'], ['مضمون', 'essay'], ['مزاح', 'humorous writing'], ['خط', 'personal letter']].forEach(([u, g], i) => {
    b += chip(30 + i * 213, y + 20, 201, u, g, { h: 110, us: 28, ub: 58, fill: C.tealLight, edge: C.tealDark });
  });
  b += T(450, y + 170, 'Note what kind of writing each text is, and what that form lets the writer do.', { size: 17, fill: C.muted, anchor: 'middle' });
  b += panel(30, y + 194, 840, 64) + T(450, y + 233, 'Study the entire work; set texts may not be taken into the exam.', { size: 18, weight: 700, anchor: 'middle' });
  add('01-prescribed-prose',
    SV(y + 286, 'The prescribed prose for 2027', b),
    'The eight prescribed prose items: seven pieces by Azad, Farhatullah Baig, Ghulam Abbas, Qasmi, Sir Syed Ahmed Khan, Yousafi and Imtiaz Ali Taj, plus two letters from Khatoot e Ghalib. They span four forms: short story (افسانہ), essay (مضمون), humorous writing (مزاح) and personal letter (خط).',
    'Eight items in four forms: know what each form lets its writer do.',
    '## The prescribed prose for 2027');
}

// 02 Four question shapes
{
  const tb = table(30, 110, [{ w: 150, head: 'Shape', bold: true }, { w: 420, head: 'Typical wording', ur: true }, { w: 270, head: 'What it needs' }], [
    ['Character', ['... کے کردار کے بارے میں', 'آپ کیا محسوس کرتے ہیں؟'], 'traits, shown through action, speech and the writer\'s description'],
    ['Theme or idea', 'مصنف نے ... کو کس طرح پیش کیا ہے؟', 'the idea traced through key moments, with method'],
    ['Writer\'s methods', ['مصنف نے مزاح / طنز / منظر نگاری', 'کس طرح پیدا کی ہے؟'], 'technique at the centre, with effects'],
    ['Empathic', ['آپ ... ہیں۔', '... کے بعد اپنے خیالات لکھیے۔'], 'a character\'s voice, faithful to the text'],
  ], { us: 24, hiRows: [3], size: 17 });
  add('02-question-shapes',
    SV(110 + tb.h + 30, 'Four shapes of prose question', tb.s),
    'Four common prose questions with their typical Urdu wording: character (... کے کردار کے بارے میں آپ کیا محسوس کرتے ہیں؟), theme (مصنف نے ... کو کس طرح پیش کیا ہے؟), writer\'s methods (مزاح / طنز / منظر نگاری) and the empathic task (آپ ... ہیں۔), each with what the answer needs.',
    'Recognise the shape from the wording, then give what that shape needs.',
    '## The question types');
}

// 03 Prose methods to discuss
{
  let b = '';
  const cards = [
    ['Narrator', 'راوی', 'First or third person? A first-person narrator in a humorous essay can make himself the joke.'],
    ['Structure', 'عروج', 'Opening, rising tension, ending. A surprise ending can change how the reader sees everything before it.'],
    ['Characterisation', 'کردار نگاری', 'What a character does and says, and what the narrator reveals that the character does not know.'],
    ['Irony and satire', 'طنز', 'The gap between appearance and reality, or between what is said and what is meant.'],
    ['Humour', 'مزاح', 'Exaggeration, unexpected comparisons, comic situations, and their purpose.'],
    ['Style in letters', 'خط', 'Direct, informal, talking to the reader as if in conversation.'],
  ];
  cards.forEach(([h, u, d], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 176;
    b += panel(x, y, 410, 162, i === 5 ? C.cream : C.panel, i === 5 ? C.mustard : C.panelEdge) + T(x + 20, y + 40, h, { size: 20, weight: 700 }) + U(x + 390, y + 52, u, { size: 27, fill: C.tealDark });
    if (i === 1) b += T(x + 280, y + 40, 'rising tension', { size: 15, fill: C.muted, anchor: 'end', italic: true });
    b += para(x + 20, y + 92, d, 370, { size: 16, fill: C.muted, lh: 21 }).s;
  });
  const y = 110 + 3 * 176 + 4;
  b += panel(30, y, 840, 140) + T(54, y + 38, 'Surprise ending', { size: 17, weight: 700 }) + U(410, y + 98, 'چونکا دینے والا انجام', { size: 26, fill: C.tealDark });
  b += `<line x1="430" y1="${y + 16}" x2="430" y2="${y + 124}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(454, y + 38, 'A letter that opens with questions', { size: 17, weight: 700 }) + U(846, y + 98, 'بھائی! کیا پوچھتے ہو؟ کیا لکھوں؟', { size: 26, fill: C.olive });
  add('03-prose-methods',
    SV(y + 168, 'Prose methods to discuss', b),
    'Six methods with their Urdu terms: narrator (راوی), structure and rising tension (عروج), characterisation (کردار نگاری), irony and satire (طنز), humour (مزاح) and the conversational style of letters, as in a letter opening بھائی! کیا پوچھتے ہو؟ کیا لکھوں؟. A surprise ending (چونکا دینے والا انجام) can change the whole reading.',
    'Name the method, then show its effect at a specific moment.',
    '## Prose methods to discuss');
}

// 04 Key moment paragraphs and the retelling test
{
  let b = '';
  b += T(450, 124, 'Each body paragraph is built on one key moment', { size: 19, weight: 700, anchor: 'middle' });
  const st = [['What happens', 'briefly'], ['Quotation', 'short, memorised'], ['What it reveals', 'about the focus'], ['Method', 'how the effect is made']];
  st.forEach(([h, d], i) => {
    const x = 30 + i * 213;
    b += `<rect x="${x}" y="144" width="195" height="96" rx="12" fill="${i === 0 ? C.panel : C.tealLight}" stroke="${i === 0 ? C.panelEdge : C.tealDark}" stroke-width="2.5"/>` + T(x + 97, 184, h, { size: 18, weight: 700, anchor: 'middle' }) + T(x + 97, 212, d, { size: 15, fill: C.muted, anchor: 'middle' });
    if (i < 3) b += harrow(x + 197, x + 211, 192, { w: 3 });
  });
  b += T(450, 286, 'The retelling test', { size: 21, weight: 700, anchor: 'middle' });
  b += panel(200, 304, 500, 92, C.cream, C.mustard) + T(450, 342, 'Delete your analysis from the paragraph.', { size: 18, weight: 700, anchor: 'middle' }) + T(450, 372, 'Would only plot remain?', { size: 18, anchor: 'middle' });
  b += path('M330,398 L200,440', { w: 3 }) + `<polygon points="196,428 190,446 208,442" fill="${C.ink}"/>` + path('M570,398 L700,440', { w: 3 }) + `<polygon points="692,442 710,446 704,428" fill="${C.ink}"/>`;
  b += card(30, 450, 400, 132, 'Yes', ['Mostly narrative: the paragraph sits at Level 2 or 3. Add the quotation, the meaning and the method.'], { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, tsize: 20 });
  b += card(470, 450, 400, 132, 'No', ['The analysis carries the paragraph: the moment is evidence for your answer to the focus.'], { fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark, tsize: 20 });
  add('04-key-moments',
    SV(610, 'Analyse key moments, do not retell', b),
    'A body paragraph moves from what happens, to a short quotation, to what it reveals about the focus, to the writer\'s method. The retelling test: delete the analysis, and if only plot remains, the paragraph is mostly narrative and sits at Level 2 or 3.',
    'Prose evidence is key moments; analysis, not plot, earns the marks.',
    '## Writing the analytical prose essay');
}

// 05 Empathic task: the voice ladder
{
  let b = '';
  const lv = [['Top level', '"sustaining an appropriate voice"', C.tealDark, C.teal], ['Level 4', '"suitable features of expression"', C.tealDark, C.tealLight], ['Level 3', '"beginning to assume a voice"', C.mustard, C.cream], ['Levels 1-2', 'a basic understanding "of character"', C.panelEdge, C.panel]];
  lv.forEach(([l, d, e, f], i) => {
    const x = 30 + (3 - i) * 70, w = 840 - (3 - i) * 70, y = 110 + i * 84;
    b += `<rect x="${x}" y="${y}" width="${w}" height="72" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(x + 22, y + 44, l, { size: 19, weight: 700 }) + T(x + 160, y + 44, d, { size: 18, fill: C.ink });
  });
  const y = 460;
  b += panel(30, y, 840, 96, C.cream, C.mustard) + T(54, y + 40, 'The task', { size: 19, weight: 700 }) + T(54, y + 70, 'Become a character at a particular moment and write their thoughts.', { size: 17, fill: C.muted });
  add('05-empathic-levels',
    SV(y + 124, 'The empathic task: how voice is rewarded', b),
    'Four bands for the empathic task: the top level is "sustaining an appropriate voice", Level 4 uses "suitable features of expression", Level 3 is "beginning to assume a voice", and Levels 1 and 2 show a basic understanding "of character".',
    'The higher the level, the more fully and steadily the character\'s voice is held.',
    '## The empathic task');
}

// 06 Literature, not creative writing
{
  let b = '';
  const r = [
    ['Faithful to the text', 'What the character knows, remembers and feels fits the work up to that moment. Inventing events loses relevance.'],
    ['Close reference, no quotation marks', 'Weave details and phrases from the text into the character\'s thoughts.'],
    ['The right voice', 'Vocabulary, tone and formality suit the character: an educated narrator, a poor clerk and a child do not sound alike.'],
    ['Thoughts and feelings, not a summary', 'The character reflects, regrets, hopes or justifies.'],
  ];
  r.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 156;
    b += card(x, y, 410, 142, h, [d], { tsize: 19, size: 16, fill: i === 2 ? C.tealLight : C.panel, edge: i === 2 ? C.tealDark : C.panelEdge });
  });
  const y = 446;
  b += T(450, y, 'Before writing, fix the moment', { size: 19, weight: 700, anchor: 'middle' });
  ['What has just happened?', 'What does the character know?', 'What do they fear or want?'].forEach((s, i) => {
    b += `<rect x="${30 + i * 286}" y="${y + 20}" width="268" height="62" rx="12" fill="${C.cream}" stroke="${C.mustard}" stroke-width="2.5"/>` + T(164 + i * 286, y + 58, s, { size: 16, weight: 600, anchor: 'middle' });
  });
  b += T(450, y + 120, 'Avoid: drifting from the text, added events, slipping into the third person, a modern casual voice.', { size: 16, fill: C.rust, anchor: 'middle' });
  add('06-empathic-rules',
    SV(y + 146, 'An empathic answer is still literature', b),
    'Four requirements for the empathic task: stay faithful to the text, weave in close reference without quotation marks, use a voice that suits the character, and write thoughts and feelings rather than a summary. Before writing, fix what has just happened, what the character knows and what they fear or want.',
    'Fix the moment, then speak as the character, using the text\'s own details.',
    '## The empathic task');
}

// 07 Illustrative empathic opening, annotated
{
  let b = '';
  b += panel(30, 110, 840, 168, C.cream, C.mustard) + T(54, 144, 'Task (an original situation, not a set text)', { size: 16, weight: 700, fill: C.olive });
  b += U(846, 208, 'آپ مالی ہیں۔ آخری دن گھر لوٹتے ہوئے اپنے خیالات لکھیے۔', { size: 27 });
  b += T(846, 256, 'A gardener of thirty years; on his last day the garden is to be paved for parking.', { size: 16, fill: C.muted, anchor: 'end' });
  const rows = [
    ['Memory', 'تیس برس...', 'thirty years: the opening lingers on what is lost'],
    ['Specific detail', 'وہ گلاب کی کیاری ... کل سیمنٹ کے نیچے دب جائے گی۔', 'the rose bed he planted will be buried under cement'],
    ['Humble, tired voice', 'ہم جیسوں کا کہنا ہی کیا۔', 'the plain voice suits the character'],
    ['Feeling through gesture', 'امرود کے پیڑ کے تنے پر ہاتھ رکھا', 'a hand on the guava tree: shown, not announced'],
  ];
  let y = 298;
  rows.forEach(([h, u, g], i) => {
    const H = 112;
    b += panel(30, y, 840, H) + badge(66, y + 36, 18, String(i + 1), i === 2 ? C.mustard : C.cream) + T(98, y + 43, h, { size: 19, weight: 700 });
    b += U(846, y + 58, u, { size: 25, fill: C.tealDark }) + T(846, y + 96, g, { size: 16, fill: C.muted, anchor: 'end', italic: true });
    y += H + 12;
  });
  b += panel(30, y + 4, 840, 72, C.tealLight, C.tealDark) + T(450, y + 48, 'In the exam the details come from the set text, and the voice echoes the writer\'s.', { size: 17, weight: 600, anchor: 'middle' });
  add('07-empathic-example',
    SV(y + 104, 'Worked example: the gardener\'s thoughts', b),
    'The task آپ مالی ہیں۔ آخری دن گھر لوٹتے ہوئے اپنے خیالات لکھیے۔ and four features of the model opening: memory (تیس برس...), a specific detail about the rose bed under cement, a humble voice (ہم جیسوں کا کہنا ہی کیا۔) and feeling shown through a gesture at the guava tree.',
    'Plain voice, specific detail, feeling shown through memory and gesture.',
    '## The empathic task');
}
