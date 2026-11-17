import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-urdu-language-3248-exercise-5-writing-exercise';
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


const ex = (x, y, w, u, g, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${o.h ?? 92}" rx="10" fill="${o.fill || C.tealLight}"${o.edge ? ` stroke="${o.edge}" stroke-width="2"` : ''}/>` + U(x + w - 16, y + (o.ub ?? 48), u, { size: o.us ?? 24, fill: o.ufill || C.ink }) + (g ? T(x + w - 16, y + (o.h ?? 92) - 14, g, { size: 15, fill: o.gfill || C.tealDark, anchor: 'end', italic: true }) : '');

// 01 What is assessed
{
  let b = stat(30, 110, 268, 116, '14 marks', 'the most on the paper') + stat(316, 110, 268, 116, '~150 words', 'functional prose, e.g. an email') + stat(602, 110, 268, 116, 'W1 to W5', 'writing objectives only', C.cream, C.mustard);
  const tb = table(30, 250, [{ w: 90, head: '', bold: true }, { w: 380, head: 'Syllabus focus' }, { w: 370, head: 'In a 150-word email' }], [
    ['W1', 'communicate information, ideas, opinions clearly', 'every prompt answered, clearly'],
    ['W2', 'coherent paragraphs, a range of linking devices', 'short paragraphs, varied connectives'],
    ['W3', 'accurate grammar and vocabulary in context', 'tenses, agreement, a few richer structures'],
    ['W4', 'punctuation and spelling', 'Urdu full stop, comma and question mark; correct spelling'],
    ['W5', 'register and style/format for purpose and audience', 'the right greeting, address forms and closing'],
  ], { size: 17, minRow: 66 });
  b += tb.s;
  add('01-what-is-assessed',
    SV(250 + tb.h + 30, 'Exercise 5: what is assessed', b),
    'Exercise 5 is a piece of functional prose of about 150 words, such as an email, worth 14 marks, the most on the paper. It tests W1 to W5: every prompt answered, linked paragraphs, accurate grammar, Urdu punctuation and spelling, and the right register and format.',
    'Answer every prompt, in linked paragraphs, in the right register.',
    '## What is assessed');
}

// 02 Purpose, format, audience
{
  let b = '';
  const c = [
    ['مقصد', 'Purpose', ['inviting, thanking, apologising', 'informing, requesting', 'describing, recommending'], 'Many tasks combine two.'],
    ['طرزِ تحریر', 'Format', ['email: subject line, greeting', 'letter, short article', 'blog: title, personal voice'], 'Each format has a shape.'],
    ['مخاطب', 'Audience', ['friend, relative', 'teacher, principal', 'readers of a school website'], 'The audience decides the register.'],
  ];
  c.forEach(([u, h, ls, n], i) => {
    const x = 30 + i * 286;
    b += panel(x, 110, 268, 380, i === 2 ? C.cream : C.panel, i === 2 ? C.mustard : C.panelEdge) + badge(x + 36, 150, 20, String(i + 1), C.cream) + T(x + 66, 157, h, { size: 21, weight: 700 }) + U(x + 248, 216, u, { size: 28, fill: C.tealDark });
    ls.forEach((l, k) => { b += `<rect x="${x + 18}" y="${246 + k * 56}" width="232" height="44" rx="8" fill="${i === 2 ? C.panel : C.tealLight}"/>` + T(x + 134, 274 + k * 56, l, { size: 15, anchor: 'middle' }); });
    b += para(x + 134, 436, n, 230, { size: 16, weight: 600, fill: i === 2 ? C.olive : C.tealDark, anchor: 'middle', lh: 21 }).s;
  });
  b += panel(30, 512, 840, 70) + T(450, 554, 'Answer all three in the margin before you write a word.', { size: 18, weight: 700, anchor: 'middle' });
  add('02-purpose-format-audience',
    SV(610, 'Reading the brief', b),
    'Three questions before writing: purpose (مقصد), such as inviting, thanking or informing; format (طرزِ تحریر), such as an email with a subject line or a blog with a title; and audience (مخاطب), such as a friend or a principal, which decides the register.',
    'Purpose, format, audience: the audience decides the register.',
    '## Reading the brief: purpose, format, audience');
}

// 03 A 150-word budget
{
  let b = '';
  b += T(450, 124, 'About 150 words, usually three prompts', { size: 19, weight: 700, anchor: 'middle' });
  const seg = [['opening', 106, C.cream, C.mustard], ['prompt 1', 214, C.tealLight, C.tealDark], ['prompt 2', 214, C.tealLight, C.tealDark], ['prompt 3', 214, C.tealLight, C.tealDark], ['closing', 100, C.cream, C.mustard]];
  let x = 30;
  seg.forEach(([n, w, f, e]) => {
    b += `<rect x="${x}" y="142" width="${w - 6}" height="74" rx="10" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(x + (w - 6) / 2, 178, n, { size: w > 150 ? 18 : 16, weight: 700, anchor: 'middle' }) + (w > 150 ? T(x + (w - 6) / 2, 202, 'about 40 words', { size: 15, anchor: 'middle', fill: C.muted }) : T(x + (w - 6) / 2, 202, 'short', { size: 15, anchor: 'middle', fill: C.olive }));
    x += w;
  });
  
  b += card(30, 248, 410, 140, 'Each prompt = a paragraph', ['A missing prompt is a missing part of the message, which W1 cannot reward. The last prompt is the one most often rushed.'], { size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark });
  b += card(460, 248, 410, 140, 'Pictures are content', ['Describe, explain or give an opinion on what they show. Naming two or three details gives the writing substance.'], { size: 16, tsize: 19 });
  b += panel(30, 408, 840, 84, '#fbf1ea', C.rust) + T(54, 444, 'Far over the length?', { size: 18, weight: 700, fill: C.rust }) + T(54, 472, '250 words means more errors and less checking time.', { size: 17, fill: C.muted });
  add('03-word-budget',
    SV(520, 'Covering the prompts in 150 words', b),
    'A 150-word plan: a short opening, about 40 words for each of three prompts, and a short closing. Each prompt becomes a paragraph, pictures supply content to describe or comment on, and writing far beyond the length adds errors.',
    'About 40 words per prompt, each in its own paragraph.',
    '## Covering the prompts');
}

// 04 Register: two sets of tools
{
  const tb = table(30, 110, [{ w: 160, head: '', bold: true }, { w: 340, head: 'Informal (friend, cousin)', ur: true, fill: C.tealDark }, { w: 340, head: 'Formal (teacher, principal)', ur: true, fill: C.olive }], [
    ['Greeting', ['پیاری سارہ،', 'عزیز دوست احمد،'], ['محترمہ پرنسپل صاحبہ،', 'جناب ...']],
    ['Opening line', ['کیسی ہو؟', 'امید ہے سب خیریت سے ہو گا۔'], ['السلام علیکم۔', 'امید ہے آپ بخیریت ہوں گے۔']],
    ['Address', 'تم', 'آپ'],
    ['Verb forms', 'آؤ، بتاؤ، کرنا', 'تشریف لائیے، بتائیے، فرمائیے'],
    ['Closing', ['تمھاری دوست، عائشہ', 'جلد جواب دینا!'], ['والسلام، آپ کا شاگرد ...', 'شکریہ کے ساتھ']],
  ], { us: 23, size: 17, minRow: 70, hiRows: [2] });
  const y = 110 + tb.h + 20;
  const b = tb.s + panel(30, y, 840, 96, C.cream, C.mustard) + T(54, y + 38, 'Choose once and hold it.', { size: 19, weight: 700 }) +
    T(54, y + 70, 'Switching address form within one email is the most common register fault.', { size: 17, fill: C.muted });
  add('04-register',
    SV(y + 124, 'Register: two sets of tools', b),
    'Informal and formal forms side by side: greetings (پیاری سارہ، against محترمہ پرنسپل صاحبہ،), opening lines, address (تم against آپ), verb forms (آؤ، بتاؤ against تشریف لائیے، بتائیے) and closings (تمھاری دوست against والسلام، آپ کا شاگرد).',
    'Pick the register for your audience and keep it from greeting to closing.',
    '## Register: two sets of tools');
}

// 05 Linking devices
{
  let b = '', y = 110;
  const L = [
    ['To add', 'اس کے علاوہ، ساتھ ہی، یہی نہیں بلکہ'],
    ['To explain', 'کیونکہ، اس لیے کہ، اسی وجہ سے'],
    ['To contrast', 'لیکن، البتہ، تاہم'],
    ['To sequence', 'سب سے پہلے، اس کے بعد، آخر میں'],
    ['To conclude', 'بس یہی کہنا تھا، امید ہے'],
  ];
  L.forEach(([h, u], i) => {
    b += panel(30, y, 840, 84, i === 3 ? C.tealLight : C.panel, i === 3 ? C.tealDark : C.panelEdge) + T(54, y + 50, h, { size: 19, weight: 700 }) + U(846, y + 54, u, { size: 26 });
    y += 96;
  });
  b += T(450, y + 22, 'Two or three different connectives, used naturally, show range in a short piece.', { size: 17, fill: C.muted, anchor: 'middle' });
  add('05-linking-devices',
    SV(y + 52, 'Linking devices for 150 words', b),
    'Connectives grouped by job: adding (اس کے علاوہ، ساتھ ہی), explaining (کیونکہ، اس لیے کہ), contrasting (لیکن، البتہ، تاہم), sequencing (سب سے پہلے، اس کے بعد، آخر میں) and concluding (بس یہی کہنا تھا، امید ہے).',
    'A few varied connectives are enough: use them for real links.',
    '## Linking devices that fit 150 words');
}

// 06 The worked email, annotated
{
  let b = '';
  const page = (y, h) => `<rect x="300" y="${y}" width="570" height="${h}" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += page(110, 760);
  const lines = (y, n, w0 = 520) => Array.from({ length: n }, (_, k) => `<rect x="${846 - (k === n - 1 ? w0 * 0.55 : w0)}" y="${y + k * 22}" width="${k === n - 1 ? w0 * 0.55 : w0}" height="10" rx="5" fill="${C.teal}"/>`).join('');
  const notes = [];
  // subject
  b += U(846, 160, 'موضوع: اگلے ہفتے میلہ — ساتھ چلو گی؟', { size: 23, fill: C.tealDark }); notes.push([146, 'Subject line', 'an email format feature']);
  b += U(846, 222, 'پیاری مریم،', { size: 24 }); notes.push([214, 'Informal greeting', 'audience: a friend']);
  b += U(846, 282, 'کیسی ہو؟ امتحان ختم ہونے کی بہت مبارک ہو!', { size: 22 }); notes.push([274, 'Friendly opening', '']);
  b += `<rect x="318" y="306" width="540" height="96" rx="8" fill="${C.tealLight}"/>` + lines(320, 4); notes.push([352, 'Prompt 1: the festival', 'park, craftspeople, music, food']);
  b += `<rect x="318" y="414" width="540" height="96" rx="8" fill="${C.tealLight}"/>` + lines(430, 2) + U(846, 500, 'کیا تم ہفتے کی شام میرے ساتھ چلو گی؟', { size: 21, fill: C.tealDark }); notes.push([460, 'Prompt 2: the invitation', 'tum held throughout']);
  b += `<rect x="318" y="522" width="540" height="150" rx="8" fill="${C.tealLight}"/>` + U(846, 560, 'میں تو سب سے پہلے ...', { size: 21, fill: C.tealDark }) + lines(580, 2) + U(846, 652, 'اس کے بعد ... کیونکہ ... آخر میں ...', { size: 21, fill: C.olive }); notes.push([596, 'Prompt 3: plans', 'sequenced with connectives']);
  b += U(846, 714, 'جلدی جواب دینا۔', { size: 23 }) + U(846, 774, 'تمھاری دوست،', { size: 23 }) + U(846, 830, 'ثنا', { size: 23 }); notes.push([770, 'Informal closing', 'and signature']);
  notes.forEach(([yy, h, d]) => {
    b += T(30, yy, h, { size: 17, weight: 700 }) + (d ? T(30, yy + 22, d, { size: 15, fill: C.muted }) : '') + `<line x1="${h.length * 9.6 + 40}" y1="${yy - 6}" x2="296" y2="${yy - 6}" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="4 4"/>`;
  });
  b = b.replace('tum held throughout', 'one address form throughout');
  add('06-worked-email',
    SV(900, 'Worked example: an informal email', b),
    'The model email laid out with annotations: a subject line (موضوع: اگلے ہفتے میلہ — ساتھ چلو گی؟), the greeting پیاری مریم،, a friendly opening, one paragraph per prompt (the festival, the invitation کیا تم ہفتے کی شام میرے ساتھ چلو گی؟, and plans linked by سب سے پہلے، اس کے بعد، کیونکہ، آخر میں), and the closing تمھاری دوست، ثنا.',
    'Format features, one paragraph per prompt, and one register throughout.',
    '## Worked example');
}

// 07 Same purpose, formal audience
{
  let b = '';
  b += panel(30, 110, 840, 160, C.tealLight, C.tealDark) + T(54, 146, 'To a friend', { size: 19, weight: 700, fill: C.tealDark }) + T(54, 170, 'informal invitation', { size: 15, fill: C.muted });
  b += U(846, 224, 'کیا تم ہفتے کی شام میرے ساتھ چلو گی؟', { size: 27 });
  b += varrow(450, 274, 304);
  b += T(470, 296, 'same purpose, new audience', { size: 15, fill: C.muted, italic: true });
  b += panel(30, 310, 840, 262, C.cream, C.mustard) + T(54, 346, 'To the principal', { size: 19, weight: 700, fill: C.olive }) + T(54, 370, 'formal invitation', { size: 15, fill: C.muted });
  b += U(846, 420, 'ہماری خواہش ہے کہ آپ ہفتے کی شام تشریف لا کر', { size: 26 }) + U(846, 478, 'ہمارے اسٹال کا افتتاح فرمائیں۔', { size: 26 }) + U(846, 540, 'آپ کی آمد ہمارے لیے باعثِ عزت ہوگی۔', { size: 24, fill: C.olive });
  b += T(450, 608, 'Content is similar; vocabulary, verb forms and tone are entirely different.', { size: 17, weight: 600, anchor: 'middle' });
  b += T(450, 646, 'Exam technique', { size: 19, weight: 700, anchor: 'middle' });
  [['Greeting and closing first', 'so the register is fixed from the start'], ['Count paragraphs', 'against prompts before you finish'], ['Protect ~25 minutes', 'and keep 3-4 minutes to check agreement and punctuation']].forEach(([h, d], i) => {
    b += card(30 + i * 286, 664, 268, 122, h, [d], { size: 16, tsize: 18 });
  });
  add('07-formal-version',
    SV(814, 'Same purpose, formal audience', b),
    'The informal invitation کیا تم ہفتے کی شام میرے ساتھ چلو گی؟ rewritten for the principal: ہماری خواہش ہے کہ آپ ہفتے کی شام تشریف لا کر ہمارے اسٹال کا افتتاح فرمائیں۔ آپ کی آمد ہمارے لیے باعثِ عزت ہوگی۔ Exam tips: write the greeting and closing first, count paragraphs against prompts, and protect about 25 minutes.',
    'Change the audience and the whole register changes with it.',
    '## Worked example');
}
