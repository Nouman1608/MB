import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-urdu-language-3247-paper-2-poetry-essay';
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


const box = (x, y, w, h, fill, edge = C.ink, rx = 6) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="2"/>`;

// 01 Set poems for 2027
{
  let b = '';
  b += panel(30, 110, 840, 268, C.tealLight, C.tealDark) + T(54, 150, 'Ghazals: ten', { size: 22, weight: 700 }) + T(54, 178, 'two each by five poets', { size: 17, fill: C.muted }) + U(846, 166, 'غزلیں', { size: 30, fill: C.tealDark });
  ['Khwaja Haider Ali Aatish', 'Parveen Shakir', 'Momin Khan Momin', 'Allama Iqbal', 'Ahmed Faraz'].forEach((n, i) => {
    const x = 54 + (i % 3) * 268, y = 204 + Math.floor(i / 3) * 84;
    b += `<rect x="${x}" y="${y}" width="252" height="70" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(x + 126, y + 31, n, { size: 17, weight: 600, anchor: 'middle' }) + T(x + 126, y + 56, '2 ghazals', { size: 15, fill: C.tealDark, anchor: 'middle' });
  });
  b += panel(30, 398, 840, 214, C.cream, C.mustard) + T(54, 438, 'Nazms: three', { size: 22, weight: 700 }) + U(846, 458, 'نظمیں', { size: 30, fill: C.olive });
  [['Altaf Hussain Hali', 'Musadas Hali', 'seventeen selected stanzas'], ['Syed Zameer Jafree', 'Admee', ''], ['Mirza Mahmood Sarhadi', 'Qitaat', 'six short pieces']].forEach(([p, w, n], i) => {
    const x = 54 + i * 268;
    b += `<rect x="${x}" y="472" width="252" height="116" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(x + 126, 508, w, { size: 19, weight: 700, anchor: 'middle', italic: true }) + T(x + 126, 536, p, { size: 16, anchor: 'middle', fill: C.muted }) + (n ? T(x + 126, 566, n, { size: 15, anchor: 'middle', fill: C.olive, weight: 600 }) : '');
  });
  b += panel(30, 632, 840, 70) + T(450, 675, 'Set texts may not be taken into the exam: every quotation must be memorised.', { size: 18, weight: 700, anchor: 'middle' });
  add('01-set-poems',
    SV(730, 'The prescribed poems for 2027', b),
    'Ten ghazals (غزلیں), two each by Khwaja Haider Ali Aatish, Parveen Shakir, Momin Khan Momin, Allama Iqbal and Ahmed Faraz, and three nazms (نظمیں): Hali\'s Musadas Hali in seventeen stanzas, Syed Zameer Jafree\'s Admee and Mirza Mahmood Sarhadi\'s Qitaat in six short pieces.',
    'Thirteen poems, none allowed in the exam room: quotations must be memorised.',
    '## What the syllabus lists for 2027');
}

// 02 Mark scheme: the focus decides the level
{
  let b = '';
  b += panel(30, 110, 840, 266, C.tealLight, C.tealDark) + T(54, 150, 'Top level (13-15 of 15)', { size: 22, weight: 700 });
  const q = ['"shows a clear understanding of the text and its deeper implications"', '"makes a developed exploration of the way the writer achieves her/his effects"', '"supports with careful and relevant reference to the text"', '"fully addresses the focus of the question"'];
  q.forEach((s, i) => {
    const y = 172 + i * 48, hi = i === 3;
    b += `<rect x="54" y="${y}" width="792" height="40" rx="8" fill="${hi ? C.cream : C.panel}" stroke="${hi ? C.mustard : C.panelEdge}" stroke-width="2"/>` + T(72, y + 27, s, { size: 17, weight: hi ? 700 : 400 });
  });
  b += T(450, 416, 'How the focus strand falls away', { size: 19, weight: 700, anchor: 'middle' });
  [['Top level', '"fully addresses the focus of the question"', C.tealLight, C.tealDark, 840], ['Level 3', '"partly addresses the focus of the question"', C.cream, C.mustard, 640], ['Level 1', '"little relevance to the question"', '#fbf1ea', C.rust, 440]].forEach(([l, s, f, e, w], i) => {
    const y = 436 + i * 70;
    b += `<rect x="30" y="${y}" width="${w}" height="58" rx="10" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(52, y + 36, l, { size: 18, weight: 700 }) + T(170, y + 36, s, { size: 17, fill: C.muted });
  });
  b += panel(30, 656, 840, 84, C.panel) + T(54, 692, 'A fluent account of everything you know about a poem is not an answer', { size: 17, weight: 700 }) + T(54, 718, 'if the question asked about one feeling or one idea.', { size: 17, weight: 700 });
  add('02-mark-scheme-focus',
    SV(768, 'What the top level rewards', b),
    'The four top-level descriptors for the 15-mark essay: clear understanding of deeper implications, developed exploration of the writer\'s effects, careful reference to the text, and full attention to the focus. The focus strand drops from "fully addresses" at the top to "partly addresses" at Level 3 and "little relevance" at Level 1.',
    'Knowing the poem is not enough: the answer must stay on the question\'s focus.',
    '## What the mark scheme rewards');
}

// 03 Reading the question
{
  let b = '';
  b += panel(30, 110, 840, 160, C.cream, C.mustard) + T(54, 146, 'Illustrative question', { size: 16, weight: 700, fill: C.olive });
  b += U(846, 202, 'شاعر نے امید اور ناامیدی کی کشمکش کو کس طرح پیش کیا ہے؟', { size: 28 });
  b += T(450, 252, 'Mark the focus and the method word before you plan.', { size: 16, fill: C.muted, anchor: 'middle' });
  const marks = [
    ['1', 'The text', 'Which ghazal or nazm, or "one of" a group, which lets you choose.', null, null],
    ['2', 'The focus', 'The feeling, idea, character or attitude named.', 'امید اور ناامیدی کی کشمکش', 'the struggle between hope and despair'],
    ['3', 'The method word', 'Discuss language and technique, not only meaning.', 'کس طرح', 'how'],
  ];
  let y = 290;
  marks.forEach(([n, h, d, u, g]) => {
    const H = 108;
    b += panel(30, y, 840, H) + badge(70, y + H / 2, 22, n, n === '2' ? C.mustard : C.cream) + T(110, y + 44, h, { size: 20, weight: 700 }) + para(110, y + 72, d, u ? 330 : 700, { size: 16, fill: C.muted, lh: 21 }).s;
    if (u) b += `<rect x="470" y="${y + 12}" width="384" height="${H - 24}" rx="10" fill="${C.tealLight}"/>` + U(842, y + 54, u, { size: 25 }) + T(842, y + 86, g, { size: 15, fill: C.tealDark, anchor: 'end', italic: true });
    y += H + 12;
  });
  y += 22;
  b += T(450, y + 4, 'A personal response can be asked for in two ways', { size: 19, weight: 700, anchor: 'middle' });
  b += card(30, y + 22, 410, 212, 'Directly', ['"What do you think?"'], { fill: C.panel });
  b += U(420, y + 150, 'آپ کی کیا رائے ہے', { size: 24 }) + U(420, y + 204, 'آپ کیا محسوس کرتے ہیں', { size: 24 });
  b += card(460, y + 22, 410, 212, 'By implication', ['"Explore the ways in which ..."'], { fill: C.panel });
  b += U(850, y + 150, 'کن طریقوں سے', { size: 24 }) + U(850, y + 204, 'کس طرح', { size: 24 });
  add('03-reading-the-question',
    SV(y + 262, 'Reading the question', b),
    'An illustrative question, شاعر نے امید اور ناامیدی کی کشمکش کو کس طرح پیش کیا ہے؟, with three things to mark: the text, the focus (امید اور ناامیدی کی کشمکش) and the method word (کس طرح). Personal response is asked for directly (آپ کی کیا رائے ہے، آپ کیا محسوس کرتے ہیں) or by implication (کن طریقوں سے، کس طرح).',
    'Text, focus, method word: mark all three before planning.',
    '## Reading the question');
}

// 04 Anatomy of a ghazal
{
  let b = '';
  // legend
  const leg = [['قافیہ', 'rhyme', C.teal], ['ردیف', 'refrain', C.mustard], ['تخلص', 'pen name', C.rust]];
  leg.forEach(([u, g, f], i) => {
    const x = 640 - i * 260;
    b += box(x + 160, 128, 40, 28, f) + U(x + 150, 152, u, { size: 24 }) + T(x + 150, 186, g, { size: 15, fill: C.muted, anchor: 'end', italic: true });
  });
  const cpl = [['مطلع', 'opening couplet', true, false], ['شعر', 'couplet', false, false], ['شعر', 'couplet', false, false], ['مقطع', 'closing couplet', false, true]];
  let y = 214;
  cpl.forEach(([u, g, both, pen], i) => {
    const H = 120;
    b += panel(30, y, 840, H, i === 0 || i === 3 ? C.panel : C.panel) + U(110, y + 62, u, { size: 26, anchor: 'middle' }) + T(110, y + 96, g, { size: 15, fill: C.muted, anchor: 'middle', italic: true });
    [0, 1].forEach((k) => {
      const ly = y + 26 + k * 44;
      const rhymed = both || k === 1;
      b += `<rect x="${rhymed ? 360 : 190}" y="${ly}" width="${rhymed ? 486 : 656}" height="26" rx="6" fill="${C.tealLight}"/>`;
      if (rhymed) b += box(272, ly, 80, 26, C.teal) + box(190, ly, 74, 26, C.mustard);
      if (pen && k === 1) b += box(560, ly, 90, 26, C.rust);
    });
    if (i === 2) b += T(450, y + H + 22, '⋮', { size: 22, anchor: 'middle', fill: C.muted });
    y += H + (i === 2 ? 30 : 14);
  });
  b += T(846, y + 10, 'Lines run right to left: rhyme and refrain close each rhyming line.', { size: 16, fill: C.muted, anchor: 'end' });
  y += 34;
  b += panel(30, y, 840, 108, C.cream, C.mustard) + T(54, y + 40, 'Each couplet is complete in itself', { size: 19, weight: 700 }) +
    T(54, y + 72, 'Select the couplets that serve the question\'s focus; do not go through the poem in order.', { size: 17, fill: C.muted });
  add('04-ghazal-anatomy',
    SV(y + 136, 'How a ghazal is built', b),
    'A schematic ghazal of independent couplets. In the opening couplet (مطلع) both lines end in the rhyme (قافیہ) and refrain (ردیف); in later couplets only the second line does. The closing couplet (مقطع) usually carries the poet\'s pen name (تخلص).',
    'Independent couplets: choose the ones that fit the question.',
    '## Form: what to know and why it matters');
}

// 05 Nazm, musaddas and qita
{
  let b = '';
  const top = 110, H = 470;
  // Nazm
  b += panel(30, top, 268, H) + U(278, top + 50, 'نظم', { size: 28 }) + T(50, top + 42, 'Nazm', { size: 21, weight: 700 }) + T(50, top + 74, 'one subject', { size: 15, fill: C.muted });
  [['opens', C.tealLight], ['builds', C.teal], ['closes', C.cream]].forEach(([s, f], i) => {
    const y = top + 106 + i * 104;
    b += `<rect x="64" y="${y}" width="200" height="62" rx="10" fill="${f}" stroke="${C.tealDark}" stroke-width="2"/>` + T(164, y + 38, s, { size: 18, weight: 700, anchor: 'middle' });
    if (i < 2) b += varrow(164, y + 64, y + 100);
  });
  b += para(164, top + 432, 'Follow its movement.', 230, { size: 16, fill: C.tealDark, weight: 600, anchor: 'middle' }).s;
  // Musaddas
  const mx = 316;
  b += panel(mx, top, 268, H) + U(mx + 248, top + 50, 'مسدس', { size: 28 }) + T(mx + 20, top + 42, 'Musaddas', { size: 21, weight: 700 }) + T(mx + 20, top + 74, 'six-line stanzas', { size: 15, fill: C.muted });
  for (let i = 0; i < 6; i++) {
    const y = top + 100 + i * 42 + (i >= 4 ? 14 : 0), cpl = i >= 4;
    b += `<rect x="${mx + 74}" y="${y}" width="160" height="28" rx="6" fill="${C.tealLight}"/>` + box(mx + 32, y, 38, 28, cpl ? C.mustard : C.teal) + T(mx + 51, y + 20, cpl ? 'B' : 'A', { size: 15, weight: 700, anchor: 'middle' });
  }
  b += path(`M${mx + 244},${top + 100} l10,0 l0,154 l-10,0`, { w: 2.5, stroke: C.tealDark }) + path(`M${mx + 244},${top + 282} l10,0 l0,70 l-10,0`, { w: 2.5, stroke: C.olive });
  b += para(mx + 134, top + 392, 'Usually four rhyming lines, then a couplet on a new rhyme that often sharpens or turns the idea.', 230, { size: 16, fill: C.muted, anchor: 'middle', lh: 21 }).s;
  // Qita
  const qx = 602;
  b += panel(qx, top, 268, H) + U(qx + 248, top + 50, 'قطعہ', { size: 28 }) + T(qx + 20, top + 42, 'Qita', { size: 21, weight: 700 }) + T(qx + 20, top + 74, 'connected couplets', { size: 15, fill: C.muted });
  [0, 1, 2].forEach((i) => {
    const y = top + 100 + i * 78;
    b += `<rect x="${qx + 34}" y="${y}" width="200" height="62" rx="10" fill="${i === 2 ? C.cream : C.tealLight}" stroke="${i === 2 ? C.mustard : C.tealDark}" stroke-width="2"/>` +
      `<rect x="${qx + 50}" y="${y + 12}" width="168" height="14" rx="4" fill="${C.panel}"/><rect x="${qx + 50}" y="${y + 36}" width="168" height="14" rx="4" fill="${C.panel}"/>`;
    if (i < 2) b += varrow(qx + 134, y + 63, y + 76, { w: 3 });
  });
  b += T(qx + 134, top + 352, 'turn at the end', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += para(qx + 134, top + 392, 'Together the couplets make one point.', 230, { size: 16, fill: C.muted, anchor: 'middle', lh: 21 }).s;
  b += panel(30, top + H + 20, 840, 84, C.cream, C.mustard) + T(450, top + H + 56, 'Comment on form only when it helps answer the question,', { size: 18, weight: 700, anchor: 'middle' }) +
    T(450, top + H + 82, 'and say what it does, not just its name.', { size: 17, fill: C.muted, anchor: 'middle' });
  add('05-nazm-forms',
    SV(top + H + 132, 'Nazm, musaddas and qita', b),
    'Three forms side by side. A nazm develops one subject as it opens, builds and closes. A musaddas has six-line stanzas: four rhyming lines then a couplet on a new rhyme that often turns the idea. A qita joins short couplets into one point, often with a turn at the end.',
    'Follow a nazm\'s movement; watch the final couplet of a stanza or qita for the turn.',
    '## Form: what to know and why it matters');
}

// 06 Building the essay
{
  let b = '';
  b += card(30, 110, 840, 92, 'Introduction (two or three sentences)', ['Answer the question in your own words and name the methods you will discuss.'], { fill: C.cream, edge: C.mustard, tsize: 19 });
  b += varrow(450, 204, 228);
  b += panel(30, 232, 840, 286, C.tealLight, C.tealDark) + T(54, 268, 'Three or four body paragraphs, each on one couplet or stanza', { size: 19, weight: 700 });
  const pq = [['Point', 'linked to the focus'], ['Quotation', 'a few memorised words'], ['Meaning', 'what the words say'], ['Deeper meaning', 'beyond the literal'], ['Method', 'image, contrast, repetition, tone, form: its effect'], ['Link', 'back to the focus']];
  pq.forEach(([h, d], i) => {
    const x = 54 + (i % 3) * 268, y = 290 + Math.floor(i / 3) * 110;
    b += `<rect x="${x}" y="${y}" width="252" height="96" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + badge(x + 28, y + 30, 16, String(i + 1), i === 4 ? C.mustard : C.cream) +
      T(x + 54, y + 37, h, { size: 18, weight: 700 }) + para(x + 18, y + 66, d, 220, { size: 15, fill: C.muted, lh: 19 }).s;
  });
  b += varrow(450, 520, 544);
  b += card(30, 548, 840, 112, 'Conclusion', ['Your personal response, grown from the analysis: which couplet or stanza is most powerful, and why.'], { fill: C.cream, edge: C.mustard, tsize: 19 });
  b += T(450, 698, 'About 35 minutes in the exam, including a few minutes to plan.', { size: 17, fill: C.muted, anchor: 'middle' });
  add('06-essay-structure',
    SV(724, 'Building the poetry essay', b),
    'An essay plan: a short introduction that answers the question and names methods; three or four body paragraphs, each on one couplet or stanza, moving through point, quotation, meaning, deeper meaning, method and link; and a conclusion giving a personal response grown from the analysis.',
    'Each body paragraph: point, quotation, meaning, deeper meaning, method, link.',
    '## Building the essay');
}

// 07 Worked example: the moves of the model paragraph
{
  let b = '';
  b += panel(30, 110, 840, 150, C.cream, C.mustard) + T(54, 144, 'Illustrative lines', { size: 16, weight: 700, fill: C.olive }) + T(54, 166, '(written for the guide,', { size: 15, fill: C.muted }) + T(54, 186, 'not a set poem)', { size: 15, fill: C.muted });
  b += U(846, 172, 'دیا جلا کے رکھا ہے ہوا کے رستے میں', { size: 28 }) + U(846, 232, 'یہ ضد ہے دل کی کہ شاید وہ لوٹ آئے کبھی', { size: 28 });
  const st = [
    ['Image', '"ہوا کے رستے میں"', 'Hope is a fragile lamp, deliberately placed in the wind\'s path.'],
    ['Deeper meaning', '', 'The wind is the lamp\'s enemy: the hope is always in danger, yet the poet does not let it go out.'],
    ['Single word', '"ضد"', 'This hope is a decision of the heart, not of reason.'],
    ['Single words', '"شاید" "کبھی"', 'Weak, uncertain words stand against the stubbornness.'],
    ['Link to focus', 'کشمکش', 'One couplet holds the struggle between hope and despair.'],
  ];
  let y = 280;
  st.forEach(([h, u, d], i) => {
    const H = 104;
    b += panel(30, y, 840, H, i === 4 ? C.tealLight : C.panel, i === 4 ? C.tealDark : C.panelEdge) + badge(66, y + H / 2, 20, String(i + 1), C.cream);
    b += T(102, y + 38, h, { size: 19, weight: 700 }) + para(102, y + 68, d, u ? 520 : 720, { size: 16, fill: C.muted, lh: 21 }).s;
    if (u) b += U(846, y + 64, u, { size: 26, fill: C.tealDark });
    if (i < st.length - 1) b += varrow(450, y + H + 1, y + H + 13, { w: 3 });
    y += H + 14;
  });
  add('07-worked-paragraph',
    SV(y + 14, 'Worked example: image, word, link', b),
    'Two illustrative lines, دیا جلا کے رکھا ہے ہوا کے رستے میں and یہ ضد ہے دل کی کہ شاید وہ لوٹ آئے کبھی, analysed in five moves: the image of a lamp in the wind\'s path, its deeper meaning, the word "ضد", the uncertain words "شاید" and "کبھی", and a link back to the focus, کشمکش.',
    'Short quotations, each analysed, every sentence serving the focus.',
    '## Worked example of the method');
}

// 08 A one-page card per poem, and quotation rules
{
  let b = '';
  b += panel(30, 110, 840, 330) + T(54, 148, 'One-page poem card', { size: 21, weight: 700 });
  const rows = [['Central idea', 'one sentence, plus the tone'], ['Phrases', 'four to six memorised, each with its technique'], ['Ghazal', 'which couplets suit which likely focus'], ['Nazm', 'how it opens, develops and ends'], ['Judgement', 'one personal view you could defend']];
  rows.forEach(([h, d], i) => {
    const y = 168 + i * 52;
    b += `<rect x="54" y="${y}" width="792" height="44" rx="8" fill="${i % 2 ? C.panel : C.tealLight}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + T(72, y + 29, h, { size: 17, weight: 700 }) + T(230, y + 29, d, { size: 17, fill: C.muted });
  });
  b += T(450, 480, 'Using memorised quotation', { size: 19, weight: 700, anchor: 'middle' });
  b += card(30, 500, 268, 160, 'Short phrases', ['Two to five words: easier to recall exactly and to weave into your sentences.'], { fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 19 });
  b += card(316, 500, 268, 160, 'Memory fails?', ['Refer closely to the detail instead of inventing a quotation: close reference is credited.'], { fill: C.cream, edge: C.mustard, size: 16, tsize: 19 });
  b += card(602, 500, 268, 160, 'Garbled quotation', ['Not credited: it weakens "careful" reference.'], { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, size: 16, tsize: 19 });
  add('08-poem-card',
    SV(688, 'Preparing each poem', b),
    'A one-page card per poem with its central idea and tone, four to six memorised phrases with techniques, couplets matched to likely focuses or the nazm\'s movement, and one personal judgement. Quotations should be short phrases; if memory fails, close reference is credited but a garbled quotation is not.',
    'Learn short, exact phrases you can analyse.',
    '## Preparing each poem');
}
