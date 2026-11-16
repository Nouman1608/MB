import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- Local layout helpers for AP figures (self-contained; house style only) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
const cw = (size, weight = 400, italic = false) => size * (weight >= 600 ? 0.56 : italic ? 0.5 : 0.51);
function wrap(s, width, size = 17, weight = 400, italic = false) {
  const max = Math.max(4, Math.floor(width / cw(size, weight, italic)));
  const out = []; let cur = '';
  for (const w of String(s).split(/\s+/).filter(Boolean)) {
    if (!cur) cur = w; else if ((cur + ' ' + w).length <= max) cur += ' ' + w; else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  return out;
}
// Wrapped text block; x is left edge (or centre with anchor middle). Returns {s, h}.
function para(x, y, s, width, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32), weight = o.weight || 400;
  if (o.bullet) {
    const ind = size * 0.95;
    const w1 = wrap(s, width - ind, size, weight, o.italic);
    return { s: T(x, y, '•', { ...o, weight: 700 }) + w1.map((l, i) => T(x + ind, y + i * lh, l, o)).join(''), h: w1.length * lh };
  }
  const lines = wrap(s, width, size, weight, o.italic);
  return { s: lines.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: lines.length * lh };
}
// Card: panel with optional kicker, title and body (string or array). Returns {s, h}.
function card(x, y, w, o = {}) {
  const pad = o.pad ?? 20, ts = o.tsize ?? 20, bs = o.size ?? 17, mid = o.align === 'middle';
  const tx = mid ? x + w / 2 : x + pad, anchor = mid ? 'middle' : 'start';
  const measure = (y0) => {
    let cy = y0 + pad, inner = '';
    if (o.kicker) { inner += T(tx, cy + 13, o.kicker, { size: 15, weight: 700, anchor, fill: o.kfill || C.tealDark }); cy += 25; }
    if (o.title) { const p = para(tx, cy + ts * 0.8, o.title, w - 2 * pad, { size: ts, weight: 700, anchor, fill: o.tfill || C.ink }); inner += p.s; cy += p.h; }
    if (o.body) {
      const items = Array.isArray(o.body) ? o.body : [o.body];
      if (o.title || o.kicker) cy += 6;
      items.forEach((it, i) => {
        const p = para(tx, cy + bs * 0.8, it, w - 2 * pad, { size: bs, anchor, fill: o.bfill || C.muted, bullet: o.bullets, weight: o.bweight, italic: o.italic });
        inner += p.s; cy += p.h + (i < items.length - 1 ? (o.gap ?? 5) : 0);
      });
    }
    return { inner, h: cy - y0 + pad - 4 };
  };
  let m = measure(y);
  const h = Math.max(o.minH || 0, m.h);
  if (o.vcenter && h > m.h) m = measure(y + (h - m.h) / 2);
  return { s: panel(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge) + m.inner, h };
}
const cardH = (w, o) => card(0, 0, w, o).h;
// A row of n equal-height cards, optional arrows between. Returns {s, h, xs, w}.
function row(y, items, o = {}) {
  const x0 = o.x ?? 30, W0 = o.w ?? 840, gap = o.gap ?? (o.arrows ? 46 : 18), n = items.length;
  const w = (W0 - gap * (n - 1)) / n;
  const h = Math.max(o.minH || 0, ...items.map((it) => cardH(w, { ...o.card, ...it })));
  let s = ''; const xs = [];
  items.forEach((it, i) => {
    const x = x0 + i * (w + gap); xs.push(x);
    s += card(x, y, w, { vcenter: !(it.kicker || o.card?.kicker), ...o.card, ...it, minH: h }).s;
    if (o.arrows && i < n - 1) s += arrow(x + w + 6, y + h / 2, x + w + gap - 6, y + h / 2, { w: 3.5 });
  });
  return { s, h, xs, w };
}
// Vertical stack of full-width cards with down arrows. Returns {s, h}.
function stack(y, items, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? 40; let s = '', cy = y;
  items.forEach((it, i) => {
    const c = card(x, cy, w, { ...o.card, ...it }); s += c.s; cy += c.h;
    if (i < items.length - 1) { if (o.arrows !== false) s += arrow(x + w / 2, cy + 4, x + w / 2, cy + gap - 6, { w: 3.5 }); cy += gap; }
  });
  return { s, h: cy - y };
}
// Table: cols [{w, head}], rows [[cell strings]]. First column bold by default. Returns {s, h}.
function table(x, y, cols, rows, o = {}) {
  const size = o.size ?? 17, pad = 14, lh = Math.round(size * 1.32), hh = o.headH ?? 50;
  let s = '', cy = y;
  const W = cols.reduce((a, c) => a + c.w, 0);
  s += `<rect x="${x}" y="${y}" width="${W}" height="${hh}" rx="10" fill="${C.ink}"/>`;
  let cx = x; cols.forEach((c) => { s += T(cx + pad, y + hh / 2 + 6, c.head, { size: o.hsize ?? 18, weight: 700, fill: '#ffffff' }); cx += c.w; });
  cy += hh;
  rows.forEach((r, ri) => {
    const cells = r.map((cell, ci) => wrap(cell, cols[ci].w - 2 * pad, size, ci === 0 && o.boldFirst !== false ? 700 : 400, o.italicCols?.includes(ci)));
    const rh = Math.max(...cells.map((l) => l.length)) * lh + 2 * pad - 2;
    s += `<rect x="${x}" y="${cy}" width="${W}" height="${rh}" fill="${o.rowFill?.[ri] || (ri % 2 ? C.panel : '#f8faf9')}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    let ccx = x;
    cells.forEach((lines, ci) => {
      const bold = ci === 0 && o.boldFirst !== false;
      lines.forEach((l, li) => { s += T(ccx + pad, cy + pad + size * 0.85 + li * lh, l, { size, weight: bold ? 700 : 400, fill: ci === 0 ? C.ink : (o.colFill?.[ci] || C.ink), italic: o.italicCols?.includes(ci) }); });
      if (ci > 0) s += `<line x1="${ccx}" y1="${cy}" x2="${ccx}" y2="${cy + rh}" stroke="${C.panelEdge}" stroke-width="2"/>`;
      ccx += cols[ci].w;
    });
    cy += rh;
  });
  return { s, h: cy - y };
}
// Numbered step rows inside one panel. steps: [[title, desc]]. Returns {s, h}.
function steps(x, y, w, items, o = {}) {
  const size = o.size ?? 17, lh = Math.round(size * 1.32), r = o.r ?? 20, gap = o.gap ?? 14;
  let s = '', cy = y;
  items.forEach(([title, desc, hi], i) => {
    const tx = x + 2 * r + 22;
    const tw = wrap(title, w - (tx - x) - 10, o.tsize ?? 19, 700);
    const dw = desc ? wrap(desc, w - (tx - x) - 10, size) : [];
    const h = Math.max(2 * r + 6, tw.length * 25 + dw.length * lh + 8);
    s += badge(x + r + 6, cy + r + 4, r, String(i + 1), hi ? C.mustard : C.cream);
    tw.forEach((l, li) => { s += T(tx, cy + 22 + li * 25, l, { size: o.tsize ?? 19, weight: 700 }); });
    dw.forEach((l, li) => { s += T(tx, cy + 22 + tw.length * 25 + 2 + li * lh, l, { size, fill: C.muted }); });
    cy += h + gap;
  });
  return { s, h: cy - y - gap };
}
// Highlighted chip (cream/olive by default).
const chip = (x, y, w, h, label, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2.5"/>` +
  para(x + w / 2, y + h / 2 + (o.size ?? 17) * 0.35 - ((wrap(label, w - 20, o.size ?? 17, o.weight ?? 700).length - 1) * Math.round((o.size ?? 17) * 1.32)) / 2, label, w - 20, { size: o.size ?? 17, weight: o.weight ?? 700, anchor: 'middle', fill: o.tfill || C.ink }).s;
const elbow = (pts, o = {}) => path('M' + pts.map((p) => p.join(',')).join(' L'), { stroke: o.color || C.ink, w: o.w ?? 3.5, extra: `marker-end="url(#${o.marker || 'ah'})"` + (o.dash ? ` stroke-dasharray="${o.dash}"` : '') });

export const slug = 'ap-english-literature-and-composition-6-7-evidence-composition-literary-argument-study-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 Six jobs of evidence around one claim
{
  let b = '';
  const jobs = [
    ['ILLUSTRATE', 'a concrete instance', 'She "poured the tea" as if nothing had happened'],
    ['CLARIFY', 'makes an abstract claim visible', 'Folding and laying the letter down make "composure" visible'],
    ['EXEMPLIFY', 'one typical case of many', '"a dull note from the agent": one of several deflections'],
    ['ASSOCIATE', 'links two details', 'Letter under the sugar bowl: domestic routine meets hidden crisis'],
    ['AMPLIFY', 'strengthens the claim', 'Held to the lamp "as if the flame might alter what was written"'],
    ['QUALIFY', 'complicates or limits it', 'Put back "exactly as before": the composure is partly real'],
  ];
  const cw0 = 290, ch = 150, gapY = 14;
  const cx = [30, 580];
  jobs.forEach(([k, what, ex], i) => {
    const col = i < 3 ? 0 : 1, r = i % 3;
    const x = cx[col], y = 110 + r * (ch + gapY);
    const f = i === 5 ? { fill: C.cream, edge: C.olive } : {};
    b += card(x, y, cw0, { kicker: k, title: what, body: ex, tsize: 17, size: 16, minH: ch, pad: 16, ...f }).s;
    const ax = col === 0 ? x + cw0 + 4 : x - 4, tx = col === 0 ? 352 : 548;
    b += arrow(ax, y + ch / 2, tx, y + ch / 2, { w: 3.5, color: C.tealDark, marker: 'ahT' });
  });
  const mid = 110 + (3 * ch + 2 * gapY) / 2;
  b += `<rect x="360" y="110" width="180" height="${3 * ch + 2 * gapY}" rx="16" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>`;
  b += T(450, mid - 58, 'CLAIM', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += tl(450, mid - 22, ['Lydia', 'hides her', 'distress'], { size: 22, weight: 700, anchor: 'middle' }, 30);
  const yE = 110 + 3 * ch + 2 * gapY;
  b += T(450, yE + 36, 'Several jobs in one paragraph build a case rather than list proof', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('01-six-jobs-of-evidence',
    svg(900, yE + 62, 'Six jobs evidence can do', b),
    'Six cards point at one claim, that Lydia hides her distress. Each shows a job evidence can do with an example: illustrate, clarify, exemplify, associate, amplify and qualify, where putting the letter back exactly as before complicates the claim.',
    'Evidence can illustrate, clarify, exemplify, associate, amplify or qualify a claim.',
    '## What evidence is for');
}

// 02 Relevant, effective, sufficient
{
  let b = '';
  const r = row(110, [
    { kicker: 'TEST 1', title: 'Relevant', body: ['Does it bear directly on the claim?', 'A vivid detail that does not support the point is a distraction.'] },
    { kicker: 'TEST 2', title: 'Effective', body: ['Does commentary explain the link to the claim?', 'Without it, the reader must guess why the quotation is there.'] },
    { kicker: 'TEST 3', title: 'Sufficient', body: ['Do quantity and quality support the line of reasoning?', 'A larger claim needs more than one quotation, from different places.'], fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 40, card: { size: 17, tsize: 22, gap: 12 } });
  b += r.s;
  const y = 110 + r.h + 30;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 40, 'Narrow point: one quotation may be enough.   Larger claim: more, from different places.', { size: 17, weight: 700, anchor: 'middle' });
  add('02-relevant-effective-sufficient',
    svg(900, y + 64 + 30, 'Three tests for evidence', b),
    'Three tests in sequence. Relevant: the evidence bears directly on the claim. Effective: commentary explains its link to the claim. Sufficient: its quantity and quality support the line of reasoning, so a larger claim needs evidence from more than one place.',
    'Good evidence is relevant, explained by commentary and sufficient for the size of the claim.',
    '## Relevant, effective and sufficient');
}

// 03 Recursive process
{
  let b = '';
  const yc = 230;
  b += card(60, yc - 70, 300, { title: 'Gather evidence', body: 'details from the text', align: 'middle', minH: 140, vcenter: true, tsize: 22 }).s;
  b += card(540, yc - 70, 300, { title: 'Form a line of reasoning', body: 'claims in sequence', align: 'middle', minH: 140, vcenter: true, tsize: 22, fill: C.tealLight, edge: C.tealDark }).s;
  b += path(`M370,${yc - 40} Q450,${yc - 110} 530,${yc - 40}`, { w: 3.5, extra: 'marker-end="url(#ah)"' });
  b += path(`M530,${yc + 40} Q450,${yc + 110} 370,${yc + 40}`, { w: 3.5, extra: 'marker-end="url(#ah)"' });
  b += T(450, yc - 92, 'sometimes this way', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  b += T(450, yc + 108, 'sometimes this way', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  b += T(450, yc + 6, 'often back', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 }) + T(450, yc + 26, 'and forth', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 });
  const y2 = yc + 150;
  b += card(150, y2, 600, { kicker: 'IF THE EVIDENCE DOES NOT SUPPORT THE CLAIM', title: 'Revise the claim', body: 'not only the quotation', align: 'middle', fill: C.cream, edge: C.olive, kfill: C.olive }).s;
  b += elbow([[690, yc + 72], [690, y2 - 6]], { w: 3, dash: '8 6' });
  add('03-recursive-process',
    svg(900, y2 + 140, 'Interpretation is recursive', b),
    'Two boxes, gather evidence and form a line of reasoning, joined by arrows in both directions: the process can start at either end and often moves back and forth. Below, if the evidence does not support the claim, the claim is revised.',
    'Move between evidence and reasoning, and revise the claim when the evidence will not support it.',
    '### A recursive process');
}

// 04 Dropped vs embedded quotation
{
  let b = '';
  b += panel(30, 110, 840, 250);
  b += T(50, 148, 'Dropped', { size: 22, weight: 700, fill: C.rust }) + T(160, 148, 'the quotation stands apart; the comment is vague', { size: 17, fill: C.muted });
  b += T(50, 192, 'Austen writes.', { size: 18 });
  b += `<rect x="50" y="208" width="800" height="76" rx="8" fill="#ffffff" stroke="${C.rust}" stroke-width="2" stroke-dasharray="7 5"/>`;
  b += para(66, 238, '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."', 770, { size: 18, italic: true }).s;
  b += T(50, 318, 'This shows irony.', { size: 18 }) + T(210, 318, '← what irony, and how?', { size: 16, fill: C.rust, weight: 600 });
  b += T(50, 346, 'quotation not connected to the sentence', { size: 15, fill: C.muted, italic: true });
  const y = 390;
  b += panel(30, y, 840, 236, C.tealLight, C.tealDark);
  b += T(50, y + 38, 'Embedded', { size: 22, weight: 700, fill: C.tealDark }) + T(178, y + 38, 'only the words that carry the point, built into the sentence', { size: 17, fill: C.muted });
  const L1 = y + 86, L2 = y + 118, L3 = y + 150;
  b += `<text x="50" y="${L1}" font-size="19" fill="${C.ink}">Austen's narrator announces as <tspan font-weight="700" font-style="italic" fill="${C.olive}">"a truth universally acknowledged"</tspan> an idea</text>`;
  b += `<text x="50" y="${L2}" font-size="19" fill="${C.ink}">that the opening chapters trace to one anxious mother, and the grand</text>`;
  b += `<text x="50" y="${L3}" font-size="19" fill="${C.ink}">phrase becomes ironic.</text>`;
  b += `<rect x="50" y="${y + 172}" width="800" height="46" rx="10" fill="#ffffff" stroke="${C.tealDark}" stroke-width="2"/>`;
  b += T(450, y + 201, 'Quote what you need: a verb, a simile, a repeated phrase. Then comment.', { size: 17, anchor: 'middle', weight: 600 });
  add('04-dropped-or-embedded',
    svg(900, y + 236 + 30, 'Dropping or embedding a quotation', b),
    'Two versions of a sentence about the opening of Pride and Prejudice. The dropped version sets the whole quotation apart and ends with the vague "This shows irony". The embedded version quotes only "a truth universally acknowledged" inside the writer\'s own sentence and explains the irony.',
    'Embed the few words that carry your point and follow them with commentary.',
    '## Integrating quotations');
}

// 05 Coordination vs subordination
{
  let b = '';
  const block = (y0, tilt, lText, rText, lSub, rSub, title, sub, sent, note) => {
    const H = 280, cx = 330, by = y0 + 100, half = 170;
    let s = panel(30, y0, 840, H, C.panel, tilt ? C.tealDark : C.panelEdge);
    s += `<path d="M${cx - 45},${by + 120} L${cx + 45},${by + 120} L${cx},${by + 4} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
    s += `<line x1="${cx - half}" y1="${by - tilt}" x2="${cx + half}" y2="${by + tilt}" stroke="${C.ink}" stroke-width="6" stroke-linecap="round"/><circle cx="${cx}" cy="${by}" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    [[cx - half, by - tilt, lText, lSub, C.panel, C.panelEdge], [cx + half, by + tilt, rText, rSub, tilt ? C.tealLight : C.panel, tilt ? C.tealDark : C.panelEdge]].forEach(([px, py, tx, sb, f, e]) => {
      s += `<line x1="${px}" y1="${py}" x2="${px}" y2="${py + 26}" stroke="${C.ink}" stroke-width="2.5"/>`;
      s += `<rect x="${px - 100}" y="${py + 26}" width="200" height="70" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
      const lines = wrap(tx, 180, 17, 700);
      s += tl(px, py + 54 - (lines.length - 1) * 10, lines, { size: 17, weight: 700, anchor: 'middle' }, 21) + T(px, py + 86, sb, { size: 15, anchor: 'middle', fill: C.muted });
    });
    s += T(560, y0 + 46, title, { size: 23, weight: 700 }) + para(560, y0 + 74, sub, 290, { size: 17, weight: 600, fill: C.tealDark }).s;
    s += para(560, y0 + 140, sent, 290, { size: 18, italic: true }).s;
    s += para(560, y0 + 222, note, 290, { size: 16, fill: C.muted }).s;
    return s;
  };
  b += block(110, 0, 'Lydia appears calm', 'her hands shake', 'idea 1', 'idea 2', 'Coordination', 'balance or equality', '"Lydia appears calm, and her hands shake."', 'Joining everything with "and" makes everything equally important.');
  b += block(410, 34, 'Although Lydia appears calm', 'her hands shake', 'subordinate clause', 'main clause', 'Subordination', 'imbalance: emphasis on the main clause', '"Although Lydia appears calm, her hands shake."', 'Use it if you read the calm as only a surface.');
  add('05-coordination-subordination',
    svg(900, 720, 'Coordination or subordination?', b),
    'Two balance scales. Coordination: "Lydia appears calm, and her hands shake" keeps the two ideas level. Subordination: "Although Lydia appears calm, her hands shake" tips the scale towards the main clause, so the shaking hands carry the emphasis.',
    'Choose the sentence structure that matches your interpretation.',
    '### Coordination and subordination');
}

// 06 Punctuation that shows relationships
{
  let b = '';
  const marks = [
    [', and', 'Two equal ideas', 'Lydia reads the letter twice, and she folds it along its old creases.'],
    [';', 'Two closely related independent clauses', 'She tells her sister it is a dull note; the lamp scene shows it is nothing of the kind.'],
    [':', 'What follows explains or illustrates what came before', 'The narrator reveals her distress through repetition: she reads the letter twice and returns it to the same place.'],
    ['—', 'A sharp pause or an emphatic addition', 'The flame cannot change the words—and Lydia knows it.'],
    ['Although ... ,', 'A dependent clause leading to the main idea', 'Although Lydia appears calm, her hands shake.'],
  ];
  let y = 110;
  marks.forEach(([m, rel, ex], i) => {
    const eh = para(0, 0, ex, 560, { size: 17, italic: true }).h;
    const h = Math.max(92, 52 + eh + 14);
    b += panel(30, y, 840, h);
    b += `<rect x="46" y="${y + 14}" width="170" height="${h - 28}" rx="10" fill="${i % 2 ? C.cream : C.tealLight}" stroke="${i % 2 ? C.olive : C.tealDark}" stroke-width="2"/>`;
    b += T(131, y + h / 2 + (m.length < 3 ? 14 : 8), m, { size: m.length < 3 ? 40 : 22, weight: 700, anchor: 'middle' });
    b += T(240, y + 38, rel, { size: 18, weight: 700 });
    b += para(240, y + 66, ex, 600, { size: 17, italic: true, fill: C.muted }).s;
    y += h + 12;
  });
  add('06-punctuation-relationships',
    svg(900, y + 18, 'Punctuation shows relationships', b),
    'Five marks and the relationships they signal, each with an example about Lydia: comma plus conjunction for two equal ideas, semicolon for closely related clauses, colon for an explanation, dash for an emphatic addition, and a comma after an introductory clause such as "Although Lydia appears calm".',
    'Each mark tells the reader how two ideas relate.',
    '### Punctuation that shows relationships');
}

// 07 Worked example 1: sorting evidence for a two-part claim
{
  let b = '';
  b += card(30, 110, 840, { kicker: 'CLAIM', title: 'The narrator shows Lydia concealing her distress behind routine', align: 'middle', tsize: 20, fill: C.cream, edge: C.olive, kfill: C.olive }).s;
  const yB = 230;
  b += arrow(300, 196, 250, yB - 8, { w: 3.5 }) + arrow(600, 196, 650, yB - 8, { w: 3.5 });
  const bucket = (x, w, title, sub, items, f, e) => {
    let s = '', cy = yB + 74;
    const parts = items.map(([lbl, q, job, tag]) => {
      const qh = para(0, 0, q, w - 150, { size: 16, italic: true }).h;
      const h = Math.max(70, qh + 32);
      const o = `<rect x="${x + 14}" y="${cy}" width="${w - 28}" height="${h}" rx="10" fill="#ffffff" stroke="${C.panelEdge}" stroke-width="2"/>` +
        badge(x + 40, cy + h / 2, 15, lbl, tag ? C.mustard : C.cream) +
        para(x + 66, cy + (h - qh) / 2 + 15, q, w - 160, { size: 16, italic: true }).s +
        T(x + w - 26, cy + h / 2 + 6, job, { size: 15, weight: 700, anchor: 'end', fill: C.tealDark });
      cy += h + 10; return o;
    });
    const H = cy - yB + 6;
    s += `<rect x="${x}" y="${yB}" width="${w}" height="${H}" rx="14" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
    s += T(x + 20, yB + 34, title, { size: 20, weight: 700 }) + T(x + 20, yB + 58, sub, { size: 16, fill: C.muted });
    return { s: s + parts.join(''), H };
  };
  const L = bucket(30, 411, 'Concealment', 'public behaviour', [['a', '"poured the tea"', 'illustrates', 0], ['b', '"A dull note from the agent"', 'exemplifies', 1]], C.panel, C.panelEdge);
  const R = bucket(459, 411, 'Distress', 'private behaviour', [['c', '"held it to the lamp, as if the flame might alter what was written"', 'amplifies', 1], ['d', '"exactly as before"', 'qualifies', 0]], C.tealLight, C.tealDark);
  b += L.s + R.s;
  let y = yB + Math.max(L.H, R.H) + 20;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="12" fill="#ffffff" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="7 5"/>`;
  b += badge(70, y + 32, 15, 'e', '#ffffff') + T(100, y + 38, '"folded it along its old creases": clarifies, but only weakly relevant', { size: 16, fill: C.muted });
  y += 64 + 20;
  const c = card(30, y, 840, { kicker: 'SUFFICIENT', body: 'Use (b) and (c), the two marked in gold, to cover both halves of the claim; add (a) as support and (d) as a complication. (a) alone would not show the distress beneath the routine.', size: 17, bfill: C.ink });
  b += c.s;
  add('07-sorting-the-evidence',
    svg(900, y + c.h + 30, 'Worked example: sorting the evidence', b),
    'The claim that Lydia conceals distress behind routine splits into two halves. Concealment is supported by (a) "poured the tea" and (b) "A dull note from the agent"; distress by (c) holding the letter to the lamp and (d) "exactly as before". Detail (e) is only weakly relevant. The best pair is (b) and (c).',
    'A two-part claim needs evidence for both parts: (b) for concealment, (c) for distress.',
    '## Worked example 1: choosing relevant and sufficient evidence');
}

// 08 Worked example 2: four revisions
{
  let b = '';
  const rows4 = [
    ['Subordination', '"Lydia is calm. She is anxious."', '"Although Lydia appears calm, she is anxious."', 'gives the calm less weight'],
    ['Colon', '"She read the letter twice and folded it and put it under the sugar bowl"', '"...through repetition: she reads the letter twice, folds it along its old creases and returns it to the same place."', 'announces an explanation'],
    ['Semicolon', '"...and the lamp scene shows it is not a dull note."', '"She tells her sister it is a dull note; the lamp scene..."', 'joins a statement and its contradiction'],
    ['Precise verb', '"shows"', '"betrays"', 'names the relationship between words and gesture'],
  ];
  b += T(320, 126, 'Draft', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + T(680, 126, 'Revision', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  let y = 142;
  rows4.forEach(([tool, before, after, why], i) => {
    const bh = para(0, 0, before, 270, { size: 16, italic: true }).h, ah = para(0, 0, after, 300, { size: 16, italic: true }).h;
    const h = Math.max(bh, ah, 44) + 52;
    b += panel(30, y, 840, h);
    b += badge(60, y + 34, 17, String(i + 1), C.mustard) + T(86, y + 40, tool, { size: 17, weight: 700 });
    b += para(86, y + 66, why, 110, { size: 15, fill: C.muted }).s;
    b += `<rect x="190" y="${y + 12}" width="268" height="${h - 24}" rx="10" fill="#ffffff" stroke="${C.rust}" stroke-width="2" stroke-dasharray="6 5"/>`;
    b += para(204, y + (h - bh) / 2 + 15, before, 240, { size: 16, italic: true }).s;
    b += arrow(462, y + h / 2, 498, y + h / 2, { w: 3.5 });
    b += `<rect x="502" y="${y + 12}" width="354" height="${h - 24}" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>`;
    b += para(516, y + (h - ah) / 2 + 15, after, 326, { size: 16, italic: true }).s;
    y += h + 12;
  });
  add('08-sentence-control-revisions',
    svg(900, y + 18, 'Worked example: four revisions', b),
    'Four revisions to a flat draft about Lydia: subordination turns two short sentences into "Although Lydia appears calm, she is anxious"; a colon introduces the repeated actions; a semicolon joins the dull note and the lamp scene; and the vague "shows" becomes "betrays".',
    'Subordination, a colon, a semicolon and a precise verb make the reasoning visible.',
    '## Worked example 2: improving sentence control');
}
