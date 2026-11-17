import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-urdu-language-3248-exercise-2-multiple-choice-cloze';
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


// Urdu example strip with optional English gloss.
const ex = (x, y, w, u, g, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${o.h ?? 92}" rx="10" fill="${o.fill || C.tealLight}"/>` + U(x + w - 16, y + (o.ub ?? 48), u, { size: o.us ?? 24, fill: o.ufill || C.ink }) + (g ? T(x + w - 16, y + (o.h ?? 92) - 14, g, { size: 15, fill: o.gfill || C.tealDark, anchor: 'end', italic: true }) : '');

// 01 How to approach every gap
{
  const st = steps(110, [
    ['Read the whole passage first', 'Ignore the gaps: know who is doing what, and when.'],
    ['Name the point being tested', 'Do the options differ in tense, gender, postposition, or meaning?'],
    ['Find the clue', 'A time word, the subject\'s gender, a postposition, a fixed expression.'],
    ['Eliminate, then reread', 'Read the full sentence with your choice in place.'],
  ], { minH: 88, gap: 10, hi: 2 });
  let b = st.s;
  // Clue chips (Urdu separate from English)
  let y = 110 + st.h + 24;
  b += T(450, y + 4, 'Clues to look for', { size: 19, weight: 700, anchor: 'middle' });
  [['نے', 'agreement'], ['سے', 'comparison'], ['کل', 'tense'], ['ایک / کوئی / کچھ', 'indefinite']].forEach(([u, g], i) => {
    b += chip(30 + i * 213, y + 22, 201, u, g, { h: 104, us: 27, ub: 54, fill: i === 1 ? C.cream : C.panel, edge: i === 1 ? C.mustard : C.panelEdge });
  });
  add('01-approach-every-gap',
    SV(y + 154, 'How to approach every gap', b),
    'Four steps for each gap: read the whole passage, name the grammar point the options test, find the clue in the sentence, then eliminate and reread. Typical clues include نے for agreement, سے for comparison, a time word such as کل for tense, and ایک / کوئی / کچھ.',
    'Name the point, find the clue, then check the whole sentence.',
    '## How to approach every gap');
}

// 02 Tense from the time clue
{
  const tb = table(30, 110, [{ w: 250, head: 'Clue in the sentence', ur: true }, { w: 190, head: 'Form', bold: true }, { w: 400, head: 'Example', ur: true, fill: C.tealDark }], [
    ['ہر روز، اکثر، عام طور پر', 'habitual present', 'وہ ہر روز اخبار پڑھتا ہے۔'],
    ['ابھی، اس وقت', 'continuous', 'وہ اس وقت اخبار پڑھ رہا ہے۔'],
    [{ u: 'کل، پچھلے سال', g: 'here: yesterday' }, 'simple past', 'اس نے کل اخبار پڑھا۔'],
    [{ u: 'کل، اگلے سال', g: 'here: tomorrow' }, 'future', 'وہ کل اخبار پڑھے گا۔'],
    ['بچپن میں، پہلے', 'habitual past', 'وہ بچپن میں کہانیاں پڑھتا تھا۔'],
    ['ابھی ابھی، پہلے ہی', 'perfect (completion)', 'وہ اخبار پڑھ چکا ہے۔'],
  ], { us: 24, size: 17, minRow: 76, hiRows: [2, 3] });
  const y = 110 + tb.h + 20;
  const b = tb.s + panel(30, y, 840, 86, C.cream, C.mustard) + U(846, y + 52, 'کل', { size: 30 }) +
    T(54, y + 38, 'means both "yesterday" and "tomorrow":', { size: 18, weight: 700 }) + T(54, y + 66, 'only the rest of the sentence or passage tells you which.', { size: 17, fill: C.muted });
  add('02-tense-clues',
    SV(y + 114, 'Let the time clue choose the tense', b),
    'Six time clues and the verb form each calls for, with examples: ہر روز for the habitual present, اس وقت for the continuous, کل or پچھلے سال for the past, کل or اگلے سال for the future, بچپن میں for the habitual past, and ابھی ابھی for the perfect with چکا. کل can mean yesterday or tomorrow.',
    'Find the time word first; کل needs the whole passage.',
    '## Verb conjugation: tense and aspect');
}

// 03 Agreement and ne
{
  let b = '', y = 110;
  const mk = (x, yy, u, ok) => `<rect x="${x}" y="${yy}" width="76" height="60" rx="10" fill="${ok ? C.tealLight : '#fbf1ea'}" stroke="${ok ? C.tealDark : C.rust}" stroke-width="2.5"/>` + U(x + 38, yy + 40, u, { size: 26, anchor: 'middle' }) + tick(x + 92, yy + 40, ok);
  const rows = [
    [[['نے', false]], 'Verb agrees with the SUBJECT', '', [['لڑکی خط لکھتی ہے۔', 'feminine subject, feminine verb'], ['لڑکے کھیل رہے ہیں۔', 'masculine plural subject and verb']], C.panel, C.panelEdge],
    [[['نے', true]], 'Verb agrees with the OBJECT', 'transitive verb, perfective tense', [['لڑکے نے کتاب پڑھی۔', 'feminine object, feminine verb'], ['لڑکی نے خط لکھا۔', 'masculine object, masculine verb']], C.tealLight, C.tealDark],
    [[['نے', true], ['کو', true]], 'Verb stays masculine singular', 'the object takes the object marker', [['اس نے لڑکیوں کو بلایا۔', 'object marked: masculine singular verb']], C.cream, C.mustard],
  ];
  rows.forEach(([chips, h, sub, exs, f, e]) => {
    const H = Math.max(30 + exs.length * 100, 170);
    b += panel(30, y, 840, H, C.panel, e);
    chips.forEach(([u, ok], k) => { b += mk(54 + k * 130, y + 22, u, ok); });
    b += T(54, y + 116, h, { size: 18, weight: 700, fill: e === C.panelEdge ? C.ink : e === C.mustard ? C.olive : C.tealDark });
    if (sub) b += T(54, y + 142, sub, { size: 15, fill: C.muted, italic: true });
    exs.forEach(([u, g], k) => { b += ex(450, y + 16 + k * 100, 404, u, g, { h: 90, ub: 46, fill: f === C.panel ? C.tealLight : f === C.cream ? C.cream : C.tealLight }); });
    y += H + 14;
  });
  b += panel(30, y, 840, 128) + T(54, y + 38, 'Respect plural: elders take plural verbs', { size: 19, weight: 700 });
  b += ex(54, y + 52, 380, 'دادی جان آ رہی ہیں۔', '', { h: 62, ub: 42 }) + ex(466, y + 52, 380, 'استاد صاحب کہتے ہیں۔', '', { h: 62, ub: 42 });
  y += 128;
  add('03-agreement-and-ne',
    SV(y + 28, 'Who does the verb agree with?', b),
    'Three cases. Without نے the verb agrees with the subject (لڑکی خط لکھتی ہے۔). With نے it agrees with the object (لڑکے نے کتاب پڑھی۔، لڑکی نے خط لکھا۔), unless the object takes کو, when it stays masculine singular (اس نے لڑکیوں کو بلایا۔). Elders take respect plurals: دادی جان آ رہی ہیں۔',
    'Look left for نے, then find the object: that decides پڑھا, پڑھی or پڑھے.',
    '## Subject/verb agreement and *نے*');
}

// 04 Nouns: plural and oblique
{
  let b = '';
  const pairs = [['لڑکا', 'لڑکے', 'boy → boys'], ['کمرہ', 'کمرے', 'room → rooms'], ['لڑکی', 'لڑکیاں', 'girl → girls'], ['کتاب', 'کتابیں', 'book → books']];
  b += T(235, 130, 'Masculine nouns', { size: 18, weight: 700, anchor: 'middle' }) + T(665, 130, 'Feminine nouns', { size: 18, weight: 700, anchor: 'middle' });
  pairs.forEach(([a, p, g], i) => {
    const x = 30 + Math.floor(i / 2) * 430, y = 148 + (i % 2) * 104;
    b += `<rect x="${x}" y="${y}" width="410" height="92" rx="12" fill="${i < 2 ? C.tealLight : C.cream}" stroke="${i < 2 ? C.tealDark : C.mustard}" stroke-width="2"/>`;
    b += U(x + 390, y + 50, a, { size: 27 }) + T(x + 205, y + 44, '←', { size: 24, weight: 700, anchor: 'middle' }) + U(x + 150, y + 50, p, { size: 27, fill: C.tealDark }) + T(x + 205, y + 80, g, { size: 15, fill: C.muted, anchor: 'middle', italic: true });
  });
  let y = 372;
  b += panel(30, y, 840, 162) + T(54, y + 38, 'Before a postposition: the oblique form', { size: 19, weight: 700 });
  [['لڑکوں کو', 'to the boys'], ['کمرے میں', 'in the room'], ['کتابوں سے', 'from the books']].forEach(([u, g], i) => {
    b += ex(54 + (2 - i) * 268, y + 54, 252, u, g, { h: 92, ub: 52 });
  });
  y += 180;
  b += panel(30, y, 840, 162) + T(54, y + 38, 'The possessed noun\'s gender and number choose the possessive', { size: 19, weight: 700 });
  [['احمد کا قلم', 'Ahmad\'s pen (m.)'], ['احمد کی کتاب', 'Ahmad\'s book (f.)'], ['احمد کے دوست', 'Ahmad\'s friends (pl.)']].forEach(([u, g], i) => {
    b += ex(54 + (2 - i) * 268, y + 54, 252, u, g, { h: 92, ub: 52, fill: i === 1 ? C.cream : C.tealLight, gfill: i === 1 ? C.olive : C.tealDark });
  });
  add('04-nouns-and-oblique',
    SV(y + 190, 'Nouns: plural and oblique forms', b),
    'Plurals: لڑکا becomes لڑکے and کمرہ becomes کمرے; لڑکی becomes لڑکیاں and کتاب becomes کتابیں. Before a postposition nouns take the oblique form: لڑکوں کو، کمرے میں، کتابوں سے. The possessed noun\'s gender chooses کا، کی or کے: احمد کا قلم، احمد کی کتاب، احمد کے دوست.',
    'Plural, oblique and possessive endings all follow gender and number.',
    '## Nouns: gender, number and the oblique form');
}

// 05 Comparatives and superlatives
{
  let b = '';
  const lv = [['comparative', 'یہ کمرہ اُس کمرے سے بڑا ہے', 'this room is bigger than that room', 'سے after the thing compared against'], ['superlative', 'یہ شہر کا سب سے بڑا باغ ہے۔', 'the biggest garden in the city', 'سب سے before the adjective']];
  lv.forEach(([k, u, g, n], i) => {
    const y = 110 + i * 132;
    b += panel(30, y, 840, 118, i ? C.tealLight : C.panel, i ? C.tealDark : C.panelEdge) + T(54, y + 40, k, { size: 19, weight: 700 });
    b += U(846, y + 54, u, { size: 27 }) + T(846, y + 98, g, { size: 15, fill: C.muted, anchor: 'end', italic: true });
  });
  b = b.replace(/>comparative</, '>Comparative<').replace(/>superlative</, '>Superlative<');
  b += T(54, 178, 'adjective unchanged', { size: 15, fill: C.muted });
  let y = 384;
  b += T(450, y, 'Persian forms carry their own degree', { size: 19, weight: 700, anchor: 'middle' });
  [['بہتر', 'better'], ['بہترین', 'best'], ['کم تر', 'lesser'], ['کم ترین', 'least']].forEach(([u, g], i) => {
    b += chip(30 + (3 - i) * 213, y + 20, 201, u, g, { h: 100, us: 27, ub: 52 });
  });
  y += 146;
  b += panel(30, y, 840, 112, '#fbf1ea', C.rust) + T(54, y + 40, 'The usual trap', { size: 19, weight: 700, fill: C.rust }) + T(54, y + 72, 'best + best: a doubled superlative', { size: 17, fill: C.muted });
  b += `<rect x="430" y="${y + 22}" width="230" height="70" rx="10" fill="${C.panel}" stroke="${C.rust}" stroke-width="2"/>` + U(640, y + 66, 'سب سے بہترین', { size: 26, fill: C.rust }) + tick(456, y + 66, false);
  b += `<rect x="676" y="${y + 22}" width="170" height="70" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + U(826, y + 66, 'بہترین', { size: 26, fill: C.tealDark }) + tick(702, y + 66, true);
  add('05-comparatives-superlatives',
    SV(y + 140, 'Comparatives and superlatives', b),
    'Urdu compares with سے after the thing compared against, leaving the adjective unchanged (یہ کمرہ اُس کمرے سے بڑا ہے), and forms the superlative with سب سے (یہ شہر کا سب سے بڑا باغ ہے۔). Persian بہتر and بہترین already carry degree, so سب سے بہترین is usually the trap.',
    'سے compares, سب سے makes a superlative; never add سب سے to بہترین.',
    '## Comparatives and superlatives');
}

// 06 Feminine plural and respect endings
{
  const tb = table(30, 110, [{ w: 200, head: 'Tense', bold: true }, { w: 220, head: 'Feminine plural', ur: true, uanchor: 'middle', fill: C.olive }, { w: 420, head: 'Example', ur: true }], [
    ['habitual', 'ـتی ہیں', 'لڑکیاں ہر روز کھیلتی ہیں۔'],
    ['continuous', 'رہی ہیں', 'لڑکیاں کھیل رہی ہیں۔'],
    ['past (intransitive)', 'ـئیں', 'لڑکیاں اسکول گئیں۔'],
    ['future', 'ـیں گی', 'لڑکیاں کل آئیں گی۔'],
  ], { us: 26, size: 17, minRow: 80 });
  let y = 110 + tb.h + 20;
  let b = tb.s + panel(30, y, 840, 150, C.cream, C.mustard) + T(54, y + 38, 'The same endings for one respected woman', { size: 19, weight: 700 });
  b += ex(54, y + 54, 380, 'امی کل آئیں گی۔', '', { h: 76, ub: 50, fill: C.panel }) + ex(466, y + 54, 380, 'استانی صاحبہ کلاس میں گئیں۔', '', { h: 76, ub: 50, fill: C.panel });
  y += 170;
  b += T(450, y + 10, 'Options differing only in their ending test gender, number or respect:', { size: 17, fill: C.muted, anchor: 'middle' });
  ['ـا', 'ـی', 'ـے', 'ـیں'].forEach((u, i) => { b += chip(180 + (3 - i) * 140, y + 28, 120, u, '', { h: 90, us: 28, ub: 52 }); });
  add('06-feminine-plural',
    SV(y + 148, 'Feminine plural and respect endings', b),
    'Feminine plural verb endings by tense: ـتی ہیں (لڑکیاں ہر روز کھیلتی ہیں۔), رہی ہیں, ـئیں (لڑکیاں اسکول گئیں۔) and ـیں گی (لڑکیاں کل آئیں گی۔). The same endings are used for one respected woman: امی کل آئیں گی۔',
    'When options differ only in ـا / ـی / ـے / ـیں, check gender, number and respect.',
    '## Feminine plural and respect forms');
}

// 07 Verbs with a fixed postposition
{
  let b = '';
  b += T(450, 124, 'Some verbs choose their postposition', { size: 19, weight: 700, anchor: 'middle' });
  const v = [['کسی سے ملنا', 'to meet someone', 'سے'], ['کسی سے ڈرنا', 'to fear someone', 'سے'], ['کسی کو یاد کرنا', 'to remember someone', 'کو'], ['کسی پر بھروسا کرنا', 'to trust someone', 'پر'], ['کسی کا انتظار کرنا', 'to wait for someone', 'کا']];
  v.forEach(([u, g, p], i) => {
    const y = 146 + i * 92;
    b += panel(30, y, 840, 80) + U(846, y + 48, u, { size: 26 }) + T(54, y + 46, g, { size: 17, fill: C.muted, italic: true });
    b += `<rect x="330" y="${y + 18}" width="64" height="44" rx="22" fill="${p === 'سے' ? C.cream : C.tealLight}" stroke="${p === 'سے' ? C.mustard : C.tealDark}" stroke-width="2"/>` + U(362, y + 48, p, { size: 22, anchor: 'middle' });
  });
  let y = 146 + 5 * 92 + 10;
  b += panel(30, y, 840, 86, C.cream, C.mustard) + T(54, y + 36, 'Favourite cloze items:', { size: 18, weight: 700 }) + T(54, y + 64, 'two postpositions often both look possible, so learn each verb with its own.', { size: 17, fill: C.muted });
  add('07-fixed-postpositions',
    SV(y + 114, 'Verbs with a fixed postposition', b),
    'Five verbs that take a fixed postposition: کسی سے ملنا (meet), کسی سے ڈرنا (fear), کسی کو یاد کرنا (remember), کسی پر بھروسا کرنا (trust) and کسی کا انتظار کرنا (wait for).',
    'Learn the verb and its postposition as one unit.',
    '## Postpositions and prepositions');
}

// 08 Worked example
{
  let b = '', y = 110;
  const items = [
    ['پچھلے اتوار ہم سب دادی جان کے گاؤں ______۔', ['جاتے ہیں', 'گئے', 'جائیں گے', 'گیا'], 1, ['the time clue is past and the subject is plural; D is singular', '']],
    ['وہاں کی صبح شہر کی صبح ______ کہیں زیادہ پُرسکون تھی۔', ['میں', 'کو', 'سے', 'پر'], 2, ['a comparison is made with', 'سے']],
    ['دادی جان نے ہمارے لیے مزے دار پراٹھے ______۔', ['بنایا', 'بنائے', 'بنائی', 'بناتے'], 1, ['after the ergative subject, the verb agrees with the plural object', 'پراٹھے']],
    ['واپسی پر ابو نے کہا کہ یہ اس سال کا ______ دن تھا۔', ['سب سے بہترین', 'بہترین', 'بہتر سے', 'اچھا ترین'], 1, ['this form already means "best"; A doubles it; C and D are not standard', '']],
  ];
  items.forEach(([s, opts, k, why], i) => {
    const H = 214;
    b += panel(30, y, 840, H) + badge(64, y + 40, 20, String(i + 1), C.cream) + U(846, y + 56, s, { size: 24 });
    opts.forEach((o, j) => {
      const x = 660 - j * 204, ok = j === k;
      b += `<rect x="${x}" y="${y + 84}" width="190" height="72" rx="10" fill="${ok ? C.tealLight : C.bg}" stroke="${ok ? C.tealDark : C.panelEdge}" stroke-width="${ok ? 3 : 2}"/>`;
      b += T(x + 18, y + 128, 'ABCD'[j], { size: 17, weight: 700, fill: ok ? C.tealDark : C.muted }) + U(x + 176, y + 130, o, { size: o.length > 8 ? 21 : 24, fill: ok ? C.ink : C.muted });
    });
    const eng = `${'ABCD'[k]}: ${why[0]}`;
    b += T(54, y + 192, eng, { size: 16, fill: C.tealDark, weight: 600 });
    if (why[1]) b += U(54 + eng.length * 8.4 + 14, y + 194, why[1], { size: 22, anchor: 'start', fill: C.tealDark });
    y += H + 12;
  });
  add('08-worked-example',
    SV(y + 16, 'Worked example: four gaps', b),
    'Four cloze gaps with their options and answers: گئے for the past plural, سے for comparison, بنائے agreeing with the masculine plural object پراٹھے after نے, and بہترین rather than the doubled سب سے بہترین.',
    'Each answer comes from a clue: time word, comparison, نے, or a fixed form.',
    '## Worked example');
}
