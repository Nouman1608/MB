import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-language-8700-critical-reading-and-comprehension';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (house style only; kept in this file so shared files stay untouched) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
const cw = (size, weight = 400) => size * (weight >= 600 ? 0.565 : 0.515);
function wrap(s, width, size = 17, weight = 400) {
  const max = Math.max(4, Math.floor(width / cw(size, weight)));
  const out = []; let cur = '';
  for (const w of String(s).split(/\s+/).filter(Boolean)) {
    if (!cur) cur = w; else if ((cur + ' ' + w).length <= max) cur += ' ' + w; else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  return out;
}
// Wrapped text block; x is left edge (or centre with anchor middle). Returns {s,h}.
function para(x, y, s, width, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32), weight = o.weight || 400;
  if (o.bullet) {
    const ind = size * 0.95;
    const w1 = wrap(s, width - ind, size, weight);
    return { s: T(x, y, '•', { ...o, weight: 700 }) + w1.map((l, i) => T(x + ind, y + i * lh, l, o)).join(''), h: w1.length * lh };
  }
  const lines = wrap(s, width, size, weight);
  return { s: lines.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: lines.length * lh };
}
// Card: panel with optional kicker, title and body (string or array). Returns {s,h}.
function card(x, y, w, o = {}) {
  const pad = o.pad ?? 20, ts = o.tsize ?? 20, bs = o.size ?? 17, mid = o.align === 'middle';
  const tx = mid ? x + w / 2 : x + pad, anchor = mid ? 'middle' : 'start';
  const measure = (y0) => {
    let cy = y0 + pad, inner = '';
    if (o.kicker) { inner += T(tx, cy + 13, o.kicker, { size: 15, weight: 700, anchor, fill: o.kfill || C.tealDark }); cy += 24; }
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
// Row of n equal-height cards (optional arrows between). Returns {s,h}.
function row(y, items, o = {}) {
  const x0 = o.x ?? 30, W0 = o.w ?? 840, gap = o.gap ?? (o.arrows ? 46 : 18), n = items.length;
  const w = (W0 - gap * (n - 1)) / n;
  const h = Math.max(o.minH || 0, ...items.map((it) => card(0, y, w, { ...o.card, ...it }).h));
  let s = '';
  items.forEach((it, i) => {
    const x = x0 + i * (w + gap);
    s += card(x, y, w, { ...o.card, ...it, minH: h, vcenter: o.vcenter ?? false }).s;
    if (o.arrows && i < n - 1) s += arrow(x + w + 6, y + h / 2, x + w + gap - 6, y + h / 2, { w: 3.5 });
  });
  return { s, h };
}
// Vertical stack of full-width cards, optional down arrows. Returns {s,h}.
function stack(y, items, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? (o.arrows ? 44 : 14);
  let s = '', cy = y;
  items.forEach((it, i) => {
    const c = card(x, cy, w, { ...o.card, ...it }); s += c.s; cy += c.h;
    if (i < items.length - 1) { if (o.arrows) s += arrow(x + w / 2, cy + 5, x + w / 2, cy + gap - 5, { w: 3.5 }); cy += gap; }
  });
  return { s, h: cy - y };
}
// Numbered steps: badge + card. list: [{title, body, n?}]. Returns {s,h}.
function steps(y, list, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? 12; let s = '', cy = y;
  list.forEach((st, i) => {
    const hl = o.highlight === i || st.hl;
    const c = card(x + 78, cy, w - 78, { title: st.title, body: st.body, fill: hl ? C.cream : C.panel, edge: hl ? C.olive : C.panelEdge, size: o.size ?? 17, tsize: o.tsize ?? 20, minH: o.minH ?? 0, pad: o.pad ?? 18 });
    s += c.s + badge(x + 32, cy + c.h / 2, 24, st.n ?? String(i + 1), hl ? C.mustard : C.cream);
    cy += c.h + gap;
  });
  const line = `<line x1="${x + 32}" y1="${y + 20}" x2="${x + 32}" y2="${cy - gap - 20}" stroke="${C.panelEdge}" stroke-width="4"/>`;
  return { s: line + s, h: cy - y - gap };
}
// Pill label. Returns {s,w}.
function chip(x, y, label, o = {}) {
  const size = o.size ?? 16, weight = o.weight ?? 700, w = o.w ?? Math.round(label.length * size * (weight >= 600 ? 0.57 : 0.53) + 30), h = o.h ?? size + 16;
  const left = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w : x;
  return { s: `<rect x="${left}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.panel}" stroke="${o.edge || C.ink}" stroke-width="2"/>` + T(left + w / 2, y + h / 2 + size * 0.36, label, { size, weight, anchor: 'middle', fill: o.ink || C.ink, italic: o.italic }), w, h };
}
// Table: cols [{w, head, fill?}], rows [[cell,...]] (cell string or {text, fill, weight, ink, italic}). Returns {s,h}.
function table(y, cols, rows, o = {}) {
  const x0 = o.x ?? 30, size = o.size ?? 17, hsize = o.hsize ?? 18, pad = o.pad ?? 14, lh = Math.round(size * 1.32);
  let s = '', cy = y;
  if (cols.some((c) => c.head)) {
    let hh = 0; const heads = cols.map((c) => wrap(c.head || '', c.w - 2 * pad, hsize, 700)); hh = Math.max(...heads.map((h) => h.length)) * Math.round(hsize * 1.3) + 2 * pad - 4;
    let cx = x0;
    cols.forEach((c, i) => {
      s += `<rect x="${cx}" y="${cy}" width="${c.w}" height="${hh}" fill="${c.hfill || C.ink}"/>` + heads[i].map((l, k) => T(cx + c.w / 2, cy + pad + hsize * 0.85 + k * Math.round(hsize * 1.3), l, { size: hsize, weight: 700, anchor: 'middle', fill: c.hink || '#ffffff' })).join('');
      cx += c.w;
    });
    cy += hh;
  }
  rows.forEach((r, ri) => {
    const cells = r.map((c) => (typeof c === 'string' ? { text: c } : c));
    const IG = 8; // gap between items in one cell
    const lines = cells.map((c, i) => {
      const out = []; let dy = 0;
      [].concat(c.text).forEach((p, j) => {
        if (j > 0) dy += IG;
        wrap(p, cols[i].w - 2 * pad, c.size ?? size, c.weight ?? (i === 0 && o.firstBold !== false ? 700 : 400)).forEach((l) => { out.push({ l, dy }); dy += lh; });
      });
      out.H = dy; return out;
    });
    const rh = Math.max(o.minRow || 0, Math.max(...lines.map((l) => l.H)) + 2 * pad - 2);
    let cx = x0;
    cells.forEach((c, i) => {
      const fill = c.fill || (i === 0 && o.firstFill !== false ? C.tealLight : C.panel);
      s += `<rect x="${cx}" y="${cy}" width="${cols[i].w}" height="${rh}" fill="${fill}" stroke="${C.panelEdge}" stroke-width="2"/>`;
      const ty = cy + (rh - lines[i].H) / 2 + (c.size ?? size) * 0.82;
      const ax = c.anchor === 'middle' ? cx + cols[i].w / 2 : cx + pad;
      s += lines[i].map(({ l, dy }) => T(ax, ty + dy, l, { size: c.size ?? size, weight: c.weight ?? (i === 0 && o.firstBold !== false ? 700 : 400), fill: c.ink || C.ink, italic: c.italic, anchor: c.anchor || 'start' })).join('');
      cx += cols[i].w;
    });
    cy += rh;
  });
  const W = cols.reduce((a, c) => a + c.w, 0);
  s += `<rect x="${x0}" y="${y}" width="${W}" height="${cy - y}" rx="4" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  return { s, h: cy - y };
}
// Callout: cream box with bold first line and muted body. Returns {s,h}.
const note = (y, title, body, o = {}) => card(o.x ?? 30, y, o.w ?? 840, { title, body, fill: o.fill || C.cream, edge: o.edge || C.olive, tsize: o.tsize ?? 19, size: o.size ?? 17, pad: 18, align: o.align });
// Stack blocks vertically and wrap in the house svg. blocks: functions (y) => {s,h}. Returns svg text.
function compose(title, blocks, o = {}) {
  let y = o.top ?? (o.subtitle ? 122 : 100), s = '';
  for (const b of blocks) {
    if (typeof b === 'number') { y += b; continue; }
    const r = b(y); s += r.s; y += r.h + (o.gap ?? 22);
  }
  return svg(900, Math.round(y - (o.gap ?? 22) + 30), X(title), s, o.subtitle ? X(o.subtitle) : undefined);
}

// 01 Where critical reading is tested
{
  add('01-where-tested',
    compose('Where critical reading is tested', [
      (y) => table(y, [{ w: 250, head: 'Question' }, { w: 120, head: 'Marks' }, { w: 470, head: 'What critical reading looks like there' }], [
        ['Paper 1, Question 1', { text: '4', anchor: 'middle', weight: 700 }, 'Finding information in a named section of a fiction extract, precisely'],
        [{ text: 'Paper 1, Question 4', fill: C.cream }, { text: '20', anchor: 'middle', weight: 700, fill: C.cream }, { text: 'Testing a statement about the extract and reaching your own supported judgement (AO4)', fill: C.cream }],
        ['Paper 2, Question 1', { text: '4', anchor: 'middle', weight: 700 }, 'Deciding which statements about a non-fiction source are true'],
        ['Paper 2, Question 2', { text: '8', anchor: 'middle', weight: 700 }, 'Inferring from both sources to summarise a difference or similarity'],
      ], { size: 17 }),
      (y) => {
        const x0 = 230, unit = 26;
        let s = T(450, y + 20, 'Paper 1 Question 4 weighs as much as the other three Paper 1 reading questions together', { size: 18, weight: 700, anchor: 'middle' });
        s += T(x0 - 14, y + 66, 'Question 4', { size: 17, weight: 700, anchor: 'end' }) + `<rect x="${x0}" y="${y + 42}" width="${20 * unit}" height="36" rx="6" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 10 * unit, y + 66, '20 marks', { size: 17, weight: 700, anchor: 'middle' });
        s += T(x0 - 14, y + 116, 'Questions 1–3', { size: 17, weight: 700, anchor: 'end' }) +
          `<rect x="${x0}" y="${y + 92}" width="${4 * unit}" height="36" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 2 * unit, y + 116, 'Q1: 4', { size: 16, weight: 700, anchor: 'middle' }) +
          `<rect x="${x0 + 4 * unit}" y="${y + 92}" width="${16 * unit}" height="36" rx="6" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 12 * unit, y + 116, 'Q2 + Q3', { size: 16, weight: 700, anchor: 'middle' });
        return { s, h: 132 };
      },
      (y) => row(y, [
        { kicker: 'AO1', title: 'Identify and interpret', body: 'explicit and implicit information and ideas', fill: C.tealLight, edge: C.tealDark },
        { kicker: 'AO4', title: 'Evaluate critically', body: 'and support this with appropriate textual references', fill: C.cream, edge: C.olive, kfill: C.olive },
      ]),
    ]),
    'A table of the four questions that test critical reading: Paper 1 Question 1 (4 marks), Paper 1 Question 4 (20 marks), Paper 2 Question 1 (4 marks) and Paper 2 Question 2 (8 marks). A bar shows that Paper 1 Question 4 equals the other three Paper 1 reading questions together. AO1 and AO4 carry most of the skill.',
    'Paper 1 Question 4 is the heaviest single test of critical reading.',
    '## What the specification includes');
}

// 02 Explicit, implicit and the inference chain
{
  add('02-inference-chain',
    compose('Explicit, implicit and the inference chain', [
      (y) => row(y, [
        { kicker: 'EXPLICIT: STATED', title: '“The kitchen was empty.”', body: 'The text says it outright.', tsize: 21 },
        { kicker: 'IMPLICIT: SUGGESTED', title: 'A kettle “still ticking as it cooled”', body: 'Implies someone left in a hurry.', tsize: 21, fill: C.tealLight, edge: C.tealDark },
      ]),
      (y) => {
        const r = row(y + 36, [
          { kicker: 'STEP 1', title: 'Detail', body: 'a short quotation', align: 'middle' },
          { kicker: 'STEP 2', title: 'What it suggests', body: 'the inference', align: 'middle' },
          { kicker: 'STEP 3', title: 'Why it matters', body: 'to the focus of the question', align: 'middle', fill: C.cream, edge: C.olive, kfill: C.olive },
        ], { arrows: true, gap: 50 });
        return { s: T(450, y + 20, 'Build every inference as a chain', { size: 21, weight: 700, anchor: 'middle' }) + r.s, h: r.h + 36 };
      },
      (y) => {
        let s = panel(30, y, 840, 150);
        s += `<defs><linearGradient id="gr" x1="0" x2="1"><stop offset="0" stop-color="${C.tealLight}"/><stop offset="1" stop-color="${C.mustard}"/></linearGradient></defs>`;
        s += `<rect x="60" y="${y + 62}" width="780" height="26" rx="13" fill="url(#gr)" stroke="${C.ink}" stroke-width="2"/>`;
        s += T(60, y + 40, 'weaker evidence: tentative verbs', { size: 17, weight: 700, fill: C.tealDark }) + T(840, y + 40, 'stated outright', { size: 17, weight: 700, fill: C.olive, anchor: 'end' });
        let x = 60; ['suggests', 'implies', 'hints', 'perhaps'].forEach((w) => { const c = chip(x, y + 102, w, { fill: C.panel, edge: C.tealDark, size: 17 }); s += c.s; x += c.w + 10; });
        x = 840; ['proves', 'shows'].forEach((w) => { const c = chip(x, y + 102, w, { fill: C.panel, edge: C.olive, size: 17, anchor: 'end' }); s += c.s; x -= c.w + 10; });
        return { s, h: 150 };
      },
      (y) => note(y, 'One detail can carry two readings.', 'Offering two possible readings of the same detail is one of the clearest signs of critical rather than literal reading.'),
    ]),
    'Explicit information is stated, as in “The kitchen was empty.” Implicit information is suggested: a kettle “still ticking as it cooled” implies someone left in a hurry. An inference chain runs from a detail, to what it suggests, to why it matters to the question. Tentative verbs such as suggests and implies suit weaker evidence; shows and proves are for what is stated.',
    'Detail, then what it suggests, then why it matters, with verbs matched to the evidence.',
    '## Key idea 1: explicit, implicit and the inference chain');
}

// 03 Three ways of reading
{
  const eye = (cx, cy, mode) => {
    let s = '';
    for (let i = 0; i < 6; i++) s += `<line x1="${cx - 70}" y1="${cy - 50 + i * 20}" x2="${cx + 70}" y2="${cy - 50 + i * 20}" stroke="${C.panelEdge}" stroke-width="6" stroke-linecap="round"/>`;
    if (mode === 'scan') s += `<rect x="${cx - 78}" y="${cy - 18}" width="156" height="36" rx="6" fill="none" stroke="${C.rust}" stroke-width="3"/>` + `<line x1="${cx - 70}" y1="${cy}" x2="${cx + 70}" y2="${cy}" stroke="${C.rust}" stroke-width="6" stroke-linecap="round"/>`;
    if (mode === 'skim') s += path(`M${cx - 70},${cy - 50} L${cx + 60},${cy - 30} L${cx - 60},${cy - 10} L${cx + 60},${cy + 10} L${cx - 60},${cy + 30} L${cx + 70},${cy + 50}`, { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' });
    if (mode === 'close') for (let i = 1; i < 4; i++) s += `<line x1="${cx - 70}" y1="${cy - 50 + i * 20}" x2="${cx + 70}" y2="${cy - 50 + i * 20}" stroke="${C.olive}" stroke-width="6" stroke-linecap="round"/>`;
    return s;
  };
  add('03-three-ways-of-reading',
    compose('Read in different ways for different purposes', [
      (y) => {
        const items = [
          ['scan', 'Scanning', 'For a short question confined to particular lines: stay inside those lines and pick out exactly what is asked for.'],
          ['skim', 'Skimming', 'For overall sense on a first read, so you know the shape of the whole text before any question.'],
          ['close', 'Close reading', 'For evaluation: slow, line-by-line attention to one section, asking what each choice does to the reader.'],
        ];
        const w = 268, gap = 18;
        const hs = items.map((it) => card(0, 0, w, { title: it[1], body: it[2], size: 16 }).h);
        const H = Math.max(...hs) + 165;
        let s = '';
        items.forEach((it, i) => {
          const x = 30 + i * (w + gap);
          s += panel(x, y, w, H) + eye(x + w / 2, y + 80, it[0]);
          s += para(x + 20, y + 175, it[1], w - 40, { size: 21, weight: 700 }).s + para(x + 20, y + 205, it[2], w - 40, { size: 16, fill: C.muted }).s;
        });
        return { s, h: H };
      },
      (y) => note(y, 'Judge usefulness, relevance and presentation', 'A 19th-century travel letter may be vivid but tell a modern reader little that is reliable; a report may be accurate but so dry that it fails to persuade.'),
    ]),
    'Three panels. Scanning stays inside the named lines to pick out exactly what is asked. Skimming gives the overall shape of the text on a first read. Close reading gives slow, line-by-line attention to one section for evaluation.',
    'Scan for short questions, skim for shape, read closely to evaluate.',
    '## Key idea 2: reading in different ways for different purposes');
}

// 04 Testing a statement by splitting it
{
  add('04-split-the-statement',
    compose('Evaluate a statement by splitting it', [
      (y) => row(y, [
        { kicker: 'ANALYSIS ASKS', title: 'How?', body: 'How a method creates an effect' },
        { kicker: 'EVALUATION ASKS', title: 'How well? Is it fair?', body: 'How well the writer achieves what the statement claims', fill: C.cream, edge: C.olive, kfill: C.olive },
      ]),
      (y) => {
        let s = panel(30, y, 840, 74, C.ink, C.ink) + T(450, y + 46, 'Statement: the character is presented as “lonely and frightened”', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' });
        const bars = [['Claim 1: lonely', 'strong evidence', 0.9, C.tealDark], ['Claim 2: frightened', 'weaker evidence', 0.45, C.olive], ['Another reading', 'a hint of defiance', 0.25, C.rust]];
        const y1 = y + 104;
        s += arrow(330, y + 76, 330, y1 - 4, { w: 3 }) + arrow(570, y + 76, 570, y1 - 4, { w: 3 });
        bars.forEach(([lab, ev, f, col], i) => {
          const yy = y1 + i * 56;
          s += T(250, yy + 27, lab, { size: 18, weight: 700, anchor: 'end' });
          s += `<rect x="270" y="${yy + 6}" width="420" height="30" rx="6" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>`;
          s += `<rect x="270" y="${yy + 6}" width="${420 * f}" height="30" rx="6" fill="${i === 0 ? C.teal : i === 1 ? C.cream : C.sand}" stroke="${col}" stroke-width="2"/>`;
          s += T(705, yy + 28, ev, { size: 17, fill: col, weight: 600 });
        });
        return { s, h: 104 + 3 * 56 };
      },
      (y) => note(y, 'Judgement with a shape: mostly agree, with a qualification.', 'Test each part of the statement, then weigh the evidence you found for each.', { align: 'middle' }),
    ]),
    'Analysis asks how a method creates an effect; evaluation asks how well the writer achieves what a statement claims. The statement “lonely and frightened” is split into two claims: strong evidence for loneliness, weaker evidence for fear, and a hint of defiance, giving the judgement “mostly agree, with a qualification”.',
    'Split the statement into its claims and weigh the evidence for each.',
    '## Key idea 3: evaluating a statement');
}

// 05 Five warning signs
{
  add('05-unsupported-claims',
    compose('Five signs of a claim without support', [
      (y) => table(y, [{ w: 300, head: 'Warning sign' }, { w: 540, head: 'What it looks like' }], [
        ['Generalisation', 'From one example: “every teenager I meet is glued to a screen”'],
        ['Anecdote as proof', 'One story standing in for a pattern'],
        ['Loaded language', 'Judges before it informs: “so-called experts”'],
        ['Selective evidence', 'Only the facts that help the writer’s case are given'],
        ['Opinion as fact', 'No source or reason is given'],
      ], { size: 18, minRow: 58 }),
      (y) => note(y, 'Ask of every claim: what supports it?', 'Spotting bias is not dismissing the writer. Saying why a writer selected or slanted evidence is a strong critical point.'),
    ]),
    'Five warning signs: generalisation from one example, such as “every teenager I meet is glued to a screen”; anecdote presented as proof; loaded language such as “so-called experts”; selective evidence; and opinion stated as fact with no source or reason.',
    'Ask of every claim what supports it, then explain why it is slanted.',
    '## Key idea 4: bias, evidence and unsupported claims');
}

// 06 Worked example: Mara
{
  add('06-testing-helpless',
    compose('Testing “Mara is presented as helpless”', [
      (y) => steps(y, [
        { title: 'Judgement first: “I partly agree.”', body: 'A clear position in the first words.' },
        { title: 'Inference from evidence', body: 'She waits “long after the last bus had gone”: she has no other way home.' },
        { title: 'A second reading of one detail', body: 'Checking a timetable she “knew by heart” implies anxiety, but is also a small act of control.' },
        { title: 'Evaluate method and effect', body: 'The dead phone is withheld until the end of the sentence: the reader sees a confident gesture, then realises it is a bluff.' },
        { title: 'Sustained, qualified judgement', body: 'Vulnerable but resourceful: frightened rather than helpless.', hl: true },
      ], { size: 17, tsize: 19 }),
    ]),
    'Five steps of the model paragraph on Mara. It opens with the judgement “I partly agree”, infers she is stranded, gives two readings of the timetable detail, evaluates how the dead phone is withheld to reveal a bluff, and ends that she is frightened rather than helpless.',
    'Test the key word, read a detail two ways, and earn a qualified judgement.',
    '## Worked example: testing a statement');
}

// 07 Supported or unsupported
{
  const tag = (ok) => ok ? { text: 'Supported', weight: 700, ink: C.tealDark, fill: C.tealLight, anchor: 'middle' } : { text: 'Unsupported', weight: 700, ink: C.rust, fill: C.cream, anchor: 'middle' };
  add('07-supported-or-unsupported',
    compose('Supported or unsupported?', [
      (y) => table(y, [{ w: 330, head: 'Claim in the extract' }, { w: 180, head: 'Verdict' }, { w: 330, head: 'Why' }], [
        [{ text: '“Three shops… closed last year”', weight: 400, italic: true }, tag(true), 'A factual claim that could be checked'],
        [{ text: '“The council’s own survey found that footfall fell”', weight: 400, italic: true }, tag(true), 'Supported by a named source'],
        [{ text: '“Nobody under thirty shops locally any more”', weight: 400, italic: true }, tag(false), 'A sweeping generalisation with no evidence'],
        [{ text: '“Our town centre is dying”', weight: 400, italic: true }, tag(false), 'A conclusion from limited evidence; the metaphor sounds more certain than the facts allow'],
      ], { size: 17, firstFill: false, minRow: 70 }),
    ]),
    'Four claims from the town-centre extract are sorted. The closed shops and the council survey are supported, by checkable fact and a named source. “Nobody under thirty shops locally any more” is an unsupported generalisation, and “Our town centre is dying” is a metaphor that sounds more certain than the evidence allows.',
    'Facts and named sources support a claim; generalisations and metaphors may not.',
    '## Worked example: supported or unsupported?');
}
