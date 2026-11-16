import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- Local layout helpers for AP figures (self-contained; house style only) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
const cw = (size, weight = 400, italic = false) => size * (weight >= 600 ? 0.545 : italic ? 0.485 : 0.495);
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

export const slug = 'ap-english-literature-and-composition-6-2-choices-actions-speech-complexity-study-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 Complexity is a tension you can name
{
  let b = T(450, 118, 'A complex character...', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  const r1 = row(136, [
    { title: 'wants two things', body: 'that cannot both be had' },
    { title: 'says one thing', body: 'and does another' },
    { title: 'acts against stated beliefs', body: 'then has to live with it' },
  ], { card: { align: 'middle', tsize: 19, size: 17 } });
  b += r1.s;
  let y = 136 + r1.h + 50;
  b += T(450, y, 'Patterns of tension the reader can name', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  y += 22;
  b += panel(30, y, 840, 4 * 66 + 24);
  [['duty', 'desire'], ['loyalty', 'honesty'], ['pride', 'need'], ['ambition', 'conscience']].forEach(([a, c], i) => {
    const yy = y + 22 + i * 66;
    b += chip(80, yy, 220, 46, a, { fill: C.tealLight, edge: C.tealDark, size: 19 });
    b += chip(600, yy, 220, 46, c, { size: 19 });
    b += arrow(450, yy + 23, 312, yy + 23, { color: C.tealDark, marker: 'ahT', w: 4 });
    b += arrow(450, yy + 23, 588, yy + 23, { color: C.olive, marker: 'ahO', w: 4 });
    b += `<circle cx="450" cy="${yy + 23}" r="12" fill="${C.ink}"/>`;
  });
  y += 4 * 66 + 24 + 34;
  const r2 = row(y, [
    { title: 'Name the tension', body: 'in one phrase', fill: C.cream, edge: C.olive },
    { title: 'Say what the writer wants us to understand about people', body: 'This is a claim about function', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 60, card: { align: 'middle', tsize: 19, size: 17 } });
  b += r2.s;
  const H = y + r2.h + 30;
  add('01-tensions-you-can-name',
    svg(900, H, 'Complexity is a tension you can name', b),
    'Three ways a character shows complexity: wanting two things that cannot both be had, saying one thing and doing another, and acting against stated beliefs. Below, four tensions pull in opposite directions: duty against desire, loyalty against honesty, pride against need, ambition against conscience.',
    'Complexity is not randomness: it is a pattern of tension you can name and then explain.',
    '## What makes a character complex?');
}

// 02 Three channels of evidence
{
  let b = '';
  const r = row(110, [
    { kicker: 'CHANNEL 1', title: 'Speech', body: ['What is said, to whom, in what tone, with what words', 'Belief, or what they want others to believe?'] },
    { kicker: 'CHANNEL 2', title: 'Action', body: ['Choices under pressure, what is done and not done, gestures', 'Does it support or contradict the speech?'] },
    { kicker: 'CHANNEL 3', title: 'Private thought', body: ['Soliloquy, narrated thought, or details that let us infer it', 'What do they hide, and why?'] },
  ], { card: { size: 17, gap: 12 } });
  b += r.s;
  const yB = 110 + r.h + 80;
  r.xs.forEach((x) => { b += arrow(x + r.w / 2, 110 + r.h + 6, 450 + (x + r.w / 2 - 450) * 0.35, yB - 8, { w: 3.5 }); });
  const c = card(170, yB, 560, { title: 'Where the channels disagree', body: 'private thought against behaviour reveals tension between private and professed values', align: 'middle', fill: C.cream, edge: C.olive, tsize: 21 });
  b += c.s;
  b += T(450, yB + c.h + 40, 'Competing, conflicting or inconsistent choices add complexity to the text as well as the character', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('02-three-channels',
    svg(900, yB + c.h + 66, 'Three channels of evidence', b),
    'Speech, action and private thought are three channels for revealing character. Arrows from all three meet at one box: where the channels disagree, the gap between private thought and behaviour reveals tension between private and professed values.',
    'Compare what a character says, does and privately thinks; complexity shows where they disagree.',
    '## Three channels of evidence');
}

// 03 Map the tension: six steps
{
  let b = '';
  const r = row(110, [
    { kicker: 'STEP 1', title: 'Professed', body: 'What do they say they value or intend?' },
    { kicker: 'STEP 2', title: 'Actual', body: 'What do they do?' },
    { kicker: 'STEP 3', title: 'Private', body: 'What do narration, soliloquy, stage directions or details suggest they feel?' },
  ], { card: { size: 17 } });
  b += r.s;
  let y = 110 + r.h;
  const y2 = y + 60;
  r.xs.forEach((x) => { b += arrow(x + r.w / 2, y + 6, 450 + (x + r.w / 2 - 450) * 0.3, y2 - 8, { w: 3.5 }); });
  const s = stack(y2, [
    { kicker: 'STEP 4', title: 'Gap', body: 'Where do these differ? Name the tension in one phrase.', fill: C.cream, edge: C.olive },
    { kicker: 'STEP 5', title: 'Meaning', body: "What does the tension suggest about the character's values, fears or motives?" },
    { kicker: 'STEP 6', title: 'Function', body: 'What does it do for the work: suspense, irony, sympathy, a question about conscience, or a turn in the plot?', fill: C.tealLight, edge: C.tealDark },
  ], { x: 150, w: 600, gap: 36, card: { align: 'middle', size: 17 } });
  b += s.s;
  add('03-map-the-tension',
    svg(900, y2 + s.h + 30, 'A method: map the tension', b),
    'Six-step method. Professed values, actual actions and private feelings feed into step 4, the gap, named in one phrase. Step 5 says what the tension suggests about values, fears or motives; step 6 says what it does for the work.',
    'Gather three kinds of evidence, name the gap, then move from meaning to function.',
    '## A method: map the tension');
}

// 04 Public-domain examples
{
  const tb = table(30, 110, [
    { w: 160, head: 'Work' }, { w: 250, head: 'Says or thinks' }, { w: 200, head: 'Does' }, { w: 230, head: 'Tension' },
  ], [
    ['Macbeth', 'Doubts in private: "If it were done when \'tis done..."; Duncan is his guest and kinsman', 'Commits the murder', 'Doubt against act; appearance against intent: "Look like the innocent flower"'],
    ['Hamlet', '"Now might I do it pat, now he is praying"', 'Does not do it', 'Revenge against the fate of Claudius\'s soul; is his reason the whole truth?'],
    ['Jane Eyre', '"I am no bird; and no net ensnares me"', 'Leaves a man she loves', 'Feeling against principle: the choice costs her'],
  ], { size: 17, italicCols: [1] });
  add('04-examples-words-and-deeds',
    svg(900, 110 + tb.h + 30, 'Words against deeds in three classics', tb.s),
    'Table of three examples. Macbeth doubts the murder in private but commits it. Hamlet says he could kill Claudius at prayer but does not. Jane Eyre declares she is free and later leaves a man she loves to keep her self-respect. Each pairing names a tension.',
    'In each work the gap between what is said and what is done is where complexity lives.',
    '## Public-domain examples to learn from');
}

// 05 Miss Tarrant: a filled-in tension map
{
  let b = '';
  const r = row(110, [
    { kicker: 'PROFESSED', title: '"The school has never taken charity"', body: 'Hands folded, eyes lowered: propriety and humility' },
    { kicker: 'ACTUAL', title: 'Refuses the money', body: 'Waits until the carriage has crossed the bridge before she moves' },
    { kicker: 'PRIVATE', title: 'Counts what the school needs', body: 'panes, desks, and "the winter that was coming"' },
  ], { card: { size: 17, tsize: 19 } });
  b += r.s;
  const y = 110 + r.h, y2 = y + 56;
  r.xs.forEach((x) => { b += arrow(x + r.w / 2, y + 6, 450 + (x + r.w / 2 - 450) * 0.3, y2 - 8, { w: 3.5 }); });
  const s = stack(y2, [
    { kicker: 'GAP', title: 'Principle against need', fill: C.cream, edge: C.olive },
    { kicker: 'MEANING', title: 'Not mere hypocrisy, not mere pride', body: 'Her independence is held at a visible cost' },
    { kicker: 'FUNCTION', title: 'Sympathy and tension', body: 'Her later choices become the working-out of a real conflict', fill: C.tealLight, edge: C.tealDark },
  ], { x: 170, w: 560, gap: 36, card: { align: 'middle', size: 17 } });
  b += s.s;
  add('05-miss-tarrant-map',
    svg(900, y2 + s.h + 30, 'Worked example: Miss Tarrant', b),
    'Tension map for the practice passage. Professed: she says the school has never taken charity. Actual: she refuses the money and waits for the carriage to leave. Private: she counts the panes, desks and coming winter. The gap is principle against need, and its function is sympathy and tension.',
    'Her silent count of the school\'s needs shows that the refusal costs her.',
    '## Worked example 1: professed against private values');
}

// 06 Theodora: speech and action pull apart across the scene
{
  let b = '';
  const x0 = 200, colW = 172, beats = [
    ['"It is not mine to tear"', 'Closes the book gently'],
    ['"Go and see to the horses"', 'Does not move away from it'],
    ['"I said a great many things yesterday"', 'Opens it again'],
    ['', 'Reads the entry slowly, to the end'],
  ];
  const yS = 140, yA = 300, ch = 120;
  ['Refusal', 'Dismissal', 'Evasion', 'Reopening'].forEach((h, i) => { b += T(x0 + i * colW + (colW - 28) / 2, 126, h, { size: 17, weight: 700, anchor: 'middle', fill: C.muted }); });
  b += panel(30, yS, 840, ch, C.tealLight, C.tealDark) + panel(30, yA, 840, ch, C.cream, C.olive);
  b += T(50, yS + 52, 'SPEECH', { size: 18, weight: 700, fill: C.tealDark }) + T(50, yS + 76, 'refuses', { size: 16, fill: C.tealDark });
  b += T(50, yA + 52, 'ACTION', { size: 18, weight: 700, fill: C.olive }) + T(50, yA + 76, 'is drawn back', { size: 16, fill: C.olive });
  beats.forEach(([s1, a1], i) => {
    const x = x0 + i * colW;
    b += card(x, yS + 14, colW - 28, { body: s1 || '(silence)', italic: true, size: 16, bfill: s1 ? C.ink : C.muted, pad: 12, minH: ch - 28, vcenter: true }).s;
    b += card(x, yA + 14, colW - 28, { body: a1, size: 16, bfill: C.ink, pad: 12, minH: ch - 28, vcenter: true }).s;
    if (i < 3) b += arrow(x + colW - 26, yA + ch / 2, x + colW - 2, yA + ch / 2, { w: 3 });
  });
  b += T(450, yA + ch + 36, 'Two values pull against each other', { size: 20, weight: 700, anchor: 'middle' });
  const yb = yA + ch + 60;
  b += chip(90, yb, 260, 60, 'Integrity: not destroying a record', { fill: C.tealLight, edge: C.tealDark, size: 17 });
  b += chip(550, yb, 260, 60, 'Loyalty to family: "anything"', { size: 17 });
  b += arrow(450, yb + 30, 362, yb + 30, { color: C.tealDark, marker: 'ahT', w: 4 }) + arrow(450, yb + 30, 538, yb + 30, { color: C.olive, marker: 'ahO', w: 4 }) + `<circle cx="450" cy="${yb + 30}" r="12" fill="${C.ink}"/>`;
  const yc = yb + 90;
  b += card(130, yc, 640, { title: 'Outcome unresolved', body: 'Suspense: what is in the entry, and what will she do?', align: 'middle', tsize: 19 }).s;
  const H = yc + cardH(640, { title: 'Outcome unresolved', body: 'Suspense: what is in the entry, and what will she do?', tsize: 19 }) + 30;
  add('06-theodora-speech-action',
    svg(900, H, 'Worked example: Theodora at the register', b),
    'Two rows across the scene. Speech: she refuses, dismisses her brother and evades. Action: she closes the book gently, does not move away, opens it again and reads the entry to the end. Integrity and loyalty to family pull against each other, leaving the outcome unresolved.',
    'Her gestures undercut her refusal, so the scene stages a clash of values the audience cannot yet read.',
    '## Worked example 2: competing choices in a dramatic scene');
}

// 07 A label is not an analysis
{
  let b = '';
  const s = stack(110, [
    { kicker: '1  NAME', title: 'Name the tension', body: 'e.g. integrity against family loyalty' },
    { kicker: '2  MEANING', title: 'What the gap suggests', body: "about the character's values or fears" },
    { kicker: '3  FUNCTION', title: 'What it does for the work', body: 'irony, sympathy, suspense', fill: C.tealLight, edge: C.tealDark },
  ], { x: 380, w: 490, gap: 30, card: { size: 17 } });
  b += s.s;
  b += card(30, 110, 260, { kicker: 'LABEL ONLY', kfill: C.rust, title: '"Hypocrite"', body: 'The analysis stops here', align: 'middle', tsize: 24, minH: s.h, vcenter: true, edge: C.rust }).s;
  b += arrow(294, 168, 374, 168, { w: 3.5, dash: '8 6' }) + T(335, 155, 'go further', { size: 15, fill: C.muted, italic: true, anchor: 'middle' });
  add('07-label-not-analysis',
    svg(900, 110 + s.h + 30, 'A label is not an analysis', b),
    'Left: the label "hypocrite", where analysis stops. Right: three steps that go further: name the tension, say what the gap suggests about values or fears, and say what it does for the work, such as irony, sympathy or suspense.',
    'Replace a label with a named tension, its meaning and its function.',
    '## Common misconceptions');
}
