import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-urdu-language-p2-exercise-3-multiple-matching';
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
const uw = (s, size = 26) => s.length * size * 0.42;
const tick = (x, y, ok) => T(x, y, ok ? '✓' : '✗', { size: 26, weight: 700, fill: ok ? C.tealDark : C.rust, anchor: 'middle' });

// 01 At a glance
{
  let b = stat(30, 110, 268, 120, '6 speakers', 'six short extracts, 1 mark each') +
    stat(316, 110, 268, 120, 'L3 and L4', 'connections and implied meaning') +
    stat(602, 110, 268, 120, 'Heard twice', 'with pauses to read and write');
  b += T(450, 278, 'Same topic for everyone: attitude tells them apart', { size: 20, weight: 700, anchor: 'middle' });
  const sig = ['+', '−', '+/−', '→', '+', '−'];
  for (let i = 0; i < 6; i++) {
    const x = 30 + i * 142;
    b += `<rect x="${x}" y="298" width="128" height="110" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + T(x + 64, 334, 'Speaker ' + (i + 1), { size: 16, weight: 700, anchor: 'middle' }) +
      `<circle cx="${x + 64}" cy="374" r="27" fill="${[C.tealLight, '#fbf1ea', C.cream, C.cream, C.tealLight, '#fbf1ea'][i]}" stroke="${C.ink}" stroke-width="2"/>` + T(x + 64, 380, sig[i], { size: 17, weight: 700, anchor: 'middle' });
  }
  b += panel(30, 432, 840, 104, C.cream, C.mustard) + T(54, 468, 'How many options?', { size: 19, weight: 700 }) +
    T(54, 498, 'The syllabus does not say. Some papers give one per speaker; others add one or two', { size: 16, fill: C.muted }) +
    T(54, 520, 'extra. Practise both, and check the specimen paper for your series.', { size: 16, fill: C.muted });
  add('01-exercise-at-a-glance',
    SV(564, 'Paper 2 Exercise 3 at a glance', b),
    'Paper 2 Exercise 3: six short extracts, one mark per speaker, testing L3 and L4, heard twice. All six speakers usually discuss the same topic, so their attitude, for, against, mixed or changed, tells them apart. The number of printed options is not stated in the syllabus.',
    'Six speakers on one topic: match each by attitude, not subject.',
    '## What the syllabus says');
}

// 02 Facts versus attitudes
{
  let b = '';
  b += card(30, 110, 410, 214, 'Exercises 1 and 2', ['Catch a stated fact: a time, number, place or name.', 'L1 select information; L2 ideas and attitudes.'], { fill: C.panel, size: 17, gap: 12, kicker: 'WHAT IS SAID' });
  b += card(460, 110, 410, 214, 'Exercise 3', ['L3 connections: likes one thing but worries about another; agrees only up to a point.', 'L4 implied meaning: a rhetorical question, a complaint or regret.'], { fill: C.tealLight, edge: C.tealDark, size: 17, gap: 12, kicker: 'WHAT IS MEANT' });
  b += panel(30, 344, 840, 92, C.cream, C.mustard) + T(54, 380, 'The right option captures the whole connection', { size: 19, weight: 700 }) +
    T(54, 410, 'and states plainly what the speaker only implied.', { size: 17, fill: C.muted });
  add('02-facts-versus-attitudes',
    SV(464, 'Not facts, but connections and implications', b),
    'Exercises 1 and 2 test catching stated facts (L1, L2). Exercise 3 tests L3, connections such as liking one thing but worrying about another, and L4, meaning implied through a rhetorical question, complaint or regret.',
    'Exercise 3 asks what a speaker means, not only what they say.',
    '## Why this exercise is different');
}

// 03 Attitude signals
{
  const tb = table(30, 110, [{ w: 190, head: 'Signal', bold: true }, { w: 340, head: 'Urdu', ur: true }, { w: 310, head: 'What usually follows' }], [
    ['contrast', 'لیکن، مگر، پر، البتہ', "the speaker's real point or reservation"],
    ['concession', 'یہ ٹھیک ہے کہ ... لیکن', 'partial agreement, then disagreement'],
    ['change of mind', 'پہلے میں سمجھتا تھا ... اب', 'the current view: the one to match'],
    ['reported view', 'لوگ کہتے ہیں ... / سنا ہے ...', 'often a view the speaker then rejects'],
    ['doubt', 'شاید، پتا نہیں، مجھے نہیں لگتا', 'uncertainty, not a firm opinion'],
    ['regret or wish', 'کاش ...', 'something missed or wanted changed'],
    ['rhetorical question', 'کیا فائدہ اگر ...؟', 'an implied negative judgement'],
    ['emphasis', 'بالکل، ہرگز، واقعی', 'a strong, settled view'],
  ], { us: 24, hiRows: [0] });
  let y = 110 + tb.h + 22, b = tb.s;
  b += panel(30, y, 840, 110, C.tealLight, C.tealDark) + T(54, y + 34, 'The word after لیکن often decides the match'.replace(' لیکن', ' "but"'), { size: 18, weight: 700 }) +
    U(846, y + 84, 'آن لائن خریداری آسان تو ہے، لیکن ...', { size: 26 }) + T(54, y + 78, 'not simply "it is easy":', { size: 16, fill: C.muted }) + T(54, y + 98, 'a reservation is coming', { size: 16, fill: C.tealDark, weight: 600 });
  add('03-attitude-signals',
    SV(y + 138, 'Small words that carry the opinion', b),
    'A table of Urdu attitude signals: contrast (لیکن، مگر), concession (یہ ٹھیک ہے کہ ... لیکن), change of mind (پہلے ... اب), reported view (لوگ کہتے ہیں), doubt (شاید), regret (کاش), rhetorical question (کیا فائدہ اگر ...؟) and emphasis (بالکل، ہرگز). In آن لائن خریداری آسان تو ہے، لیکن ... a reservation is coming.',
    'Listen hardest to what follows لیکن, اب and لوگ کہتے ہیں.',
    '## How Urdu speakers signal attitude');
}

// 04 Paraphrase
{
  const tb = table(30, 110, [{ w: 440, head: 'Speaker says', ur: true }, { w: 400, head: 'Option might say', ur: true, fill: C.tealDark }], [
    [{ u: 'روز دو گھنٹے ٹریفک میں پھنسا رہتا ہوں', g: 'stuck in traffic two hours a day' }, { u: 'سفر میں بہت وقت ضائع ہوتا ہے', g: 'a lot of time is wasted travelling' }],
    [{ u: 'پیسے تو بہت لگتے ہیں', g: 'it costs a lot' }, { u: 'یہ مہنگا ہے', g: 'it is expensive' }],
    [{ u: ['پہلے مجھے اچھا نہیں لگتا تھا،', 'اب عادت ہو گئی ہے'], g: 'disliked it at first, used to it now' }, { u: 'رائے وقت کے ساتھ بدل گئی', g: 'opinion changed over time' }],
    [{ u: ['لوگ کہتے ہیں یہ خطرناک ہے،', 'مجھے تو کبھی کچھ نہیں ہوا'], g: 'people say it is dangerous; nothing happened to me' }, { u: 'ایک عام خیال سے متفق نہیں', g: 'disagrees with a common view' }],
    [{ u: 'کاش بچپن میں کسی نے سکھایا ہوتا', g: 'if only someone had taught me as a child' }, { u: 'افسوس ہے کہ یہ پہلے نہیں سیکھا', g: 'regrets not learning it earlier' }],
  ], { us: 24 });
  let y = 110 + tb.h + 22, b = tb.s;
  b += panel(30, y, 840, 70, C.cream, C.mustard) + T(54, y + 43, 'Summarise each speaker in 3-4 of your own words, then match the summary.', { size: 17 });
  add('04-options-paraphrase',
    SV(y + 98, 'The options summarise; they do not repeat', b),
    'Five pairs of what a speaker says and how an option summarises it, for example روز دو گھنٹے ٹریفک میں پھنسا رہتا ہوں becomes سفر میں بہت وقت ضائع ہوتا ہے, and کاش بچپن میں کسی نے سکھایا ہوتا becomes افسوس ہے کہ یہ پہلے نہیں سیکھا.',
    'Match the idea, expressed more generally, not the speaker\'s words.',
    '## Options paraphrase the speakers');
}

// 05 Routine with attitude signs
{
  const st = steps(110, [
    ['In the pause', 'Read every option; underline the word that makes each one different; notice pairs of options close in meaning.'],
    ['First hearing', 'For each speaker, note a 3-4 word summary plus an attitude sign.'],
    ['Second hearing', 'Confirm the summaries; listen again to any speaker whose match is uncertain.'],
    ['After', 'Match the confident ones first and cross those options off; decide the rest by elimination; fill every answer.'],
  ], { minH: 96, gap: 12 });
  let b = st.s, y = 110 + st.h + 22;
  b += panel(30, y, 840, 120, C.cream, C.mustard) + T(54, y + 36, 'Attitude signs for your notes', { size: 18, weight: 700 });
  [['+', 'for'], ['−', 'against'], ['+/−', 'mixed'], ['→', 'changed mind']].forEach(([s, g], i) => {
    const x = 70 + i * 200;
    b += `<circle cx="${x}" cy="${y + 82}" r="24" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x, y + 89, s, { size: 18, weight: 700, anchor: 'middle' }) + T(x + 36, y + 89, g, { size: 17 });
  });
  y += 140;
  b += panel(30, y, 840, 176) + T(54, y + 36, 'Words that make an option distinct: underline them', { size: 18, weight: 700 });
  const it = [['متفق نہیں', 'disagrees'], ['بدل گئی', 'changed'], ['شک', 'doubt'], ['افسوس', 'regret'], ['سب سے اہم', 'most important']];
  it.forEach(([u, g], i) => { b += chip(706 - i * 162, y + 54, 146, u, g, { h: 104, ub: 50, fill: C.cream, edge: C.mustard }); });
  add('05-two-hearings',
    SV(y + 204, 'A routine for the two hearings', b),
    'Four stages: read and underline the distinguishing word in every option, note a short summary and an attitude sign (+, −, +/−, →) for each speaker on the first hearing, confirm on the second, then match the clear cases and eliminate. Distinguishing words include متفق نہیں، بدل گئی، شک، افسوس، سب سے اہم.',
    'Summary plus sign for each speaker, then match the sure ones first.',
    '## A routine for the two hearings');
}

// 06 Worked example and keyword trap
{
  let b = '';
  const sp = (y, n, lines, en) => {
    const H = 30 + lines.length * 56 + 40;
    let s = panel(30, y, 840, H) + badge(70, y + 44, 20, String(n), C.cream) + T(54, y + H - 18, en, { size: 15, fill: C.muted, italic: true });
    lines.forEach((l, k) => { s += U(846, y + 60 + k * 56, l, { size: 25 }); });
    return { s, H };
  };
  let y = 110;
  b += T(54, y + 6, 'Speakers', { size: 17, weight: 700, fill: C.muted }); y += 18;
  let r = sp(y, 1, ['آن لائن خریداری آسان تو ہے، لیکن کپڑے کبھی ویسے', 'نہیں نکلتے جیسے تصویر میں دکھائی دیتے ہیں۔'], 'Speaker 1: easy, but clothes never look as they do in the picture'); b += r.s; y += r.H + 12;
  r = sp(y, 2, ['لوگ کہتے ہیں آن لائن چیزیں سستی ملتی ہیں۔ ڈیلیوری کا', 'خرچ ملا کر دیکھیں تو بازار ہی سستا پڑتا ہے۔'], 'Speaker 2: people say it is cheaper; add delivery and the market is cheaper'); b += r.s; y += r.H + 30;
  const opts = [['A', 'سہولت کو مانتا ہے، مگر معیار پر بھروسا نہیں کرتا۔', 'accepts convenience, but does not trust quality', 'Speaker 1', 'L3: both halves of the connection', C.tealLight, C.tealDark],
    ['B', 'آن لائن خریداری کو سستا سمجھنے والوں سے متفق نہیں۔', 'disagrees with those who think it cheap', 'Speaker 2', 'L4: the disagreement is implied, never stated', C.tealLight, C.tealDark],
    ['C', 'آن لائن خریداری سے وقت کی بچت ہوتی ہے۔', 'online shopping saves time', 'Not speaker 1', 'keyword trap: "easy" suggests it, but the point is quality', '#fbf1ea', C.rust]];
  b += T(54, y - 6, 'Options', { size: 17, weight: 700, fill: C.muted });
  opts.forEach(([L, u, g, m, why, f, e]) => {
    b += `<rect x="30" y="${y}" width="840" height="140" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
    b += badge(70, y + 44, 20, L, C.panel) + U(846, y + 58, u, { size: 25 });
    b += T(846, y + 92, g, { size: 15, fill: C.muted, italic: true, anchor: 'end' });
    b += T(54, y + 124, m + ' → ' + why, { size: 16, weight: 700, fill: e });
    y += 152;
  });
  add('06-worked-example',
    SV(y + 18, 'Worked example: two speakers on online shopping', b),
    'Speaker 1 says online shopping is easy, but clothes never match the picture: option A, accepting convenience but distrusting quality (L3). Speaker 2 reports that people call it cheaper, then shows the market is cheaper with delivery: option B, an implied disagreement (L4). Option C, saving time, is a keyword trap.',
    'Match the speaker\'s overall point, including what comes after لیکن.',
    '## Worked example');
}
