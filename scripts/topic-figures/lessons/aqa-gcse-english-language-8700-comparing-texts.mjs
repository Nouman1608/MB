import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-language-8700-comparing-texts';
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

// 01 Question 2 vs Question 4
{
  const col = (x, kick, title, lines, what, fill, edge) => (y) => {
    const c = card(x, y, 405, { kicker: kick, title, body: lines, bullets: true, size: 17, tsize: 22, minH: 236, fill, edge, kfill: edge === C.olive ? C.olive : C.tealDark });
    return c;
  };
  add('01-question-2-vs-question-4',
    compose('Paper 2: two questions that compare', [
      (y) => {
        const a = col(30, 'PAPER 2, QUESTION 2', '8 marks · AO1', ['What the sources show about a focus', 'Content only'], '', C.panel, C.panelEdge)(y);
        const b = col(465, 'PAPER 2, QUESTION 4', '16 marks · AO3', ['Writers’ perspectives', 'AND the methods that convey them', 'The whole of both sources'], '', C.cream, C.olive)(y);
        const h = Math.max(a.h, b.h);
        const ca = chip(232, y + h - 58, 'compares WHAT', { fill: C.tealLight, edge: C.tealDark, ink: C.tealDark, anchor: 'middle', size: 18 });
        const cb = chip(667, y + h - 58, 'compares WHAT + HOW', { fill: C.mustard, edge: C.ink, anchor: 'middle', size: 18 });
        return { s: a.s + b.s + ca.s + cb.s, h };
      },
      (y) => {
        const doc = (x, label, sub) => `<path d="M${x},${y} h120 l26,26 v104 h-146 z" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` +
          [0, 1, 2, 3].map((i) => `<line x1="${x + 18}" y1="${y + 44 + i * 18}" x2="${x + 126}" y2="${y + 44 + i * 18}" stroke="${C.panelEdge}" stroke-width="4"/>`).join('') +
          T(x + 73, y + 160, label, { size: 18, weight: 700, anchor: 'middle' }) + T(x + 73, y + 182, sub, { size: 16, anchor: 'middle', fill: C.muted });
        const s = doc(230, 'Source A', '19th century') + doc(524, 'Source B', '20th or 21st century') +
          arrow(400, y + 65, 500, y + 65, { w: 3.5 }) + arrow(500, y + 65, 400, y + 65, { w: 3.5 }) + T(450, y + 100, 'compare', { size: 16, anchor: 'middle', weight: 600, fill: C.tealDark });
        return { s, h: 190 };
      },
      (y) => note(y, 'Paper 1 has a single source and does not assess comparison.', 'AO3 belongs to Paper 2 only, about 10% of the GCSE.'),
    ]),
    'Paper 2 Question 2 is worth 8 marks for AO1 and compares only what the sources show about a focus. Question 4 is worth 16 marks for AO3 and compares the writers’ perspectives and the methods that convey them, across the whole of a 19th-century source and a 20th- or 21st-century source.',
    'Question 2 compares what; Question 4 compares what and how.',
    '## Where it is tested');
}

// 02 Perspective, viewpoint, attitude, tone
{
  add('02-perspective-viewpoint-attitude-tone',
    compose('Perspective, viewpoint, attitude, tone', [
      (y) => {
        const L = 30, W = 350, R = 870 - W;
        const a = card(L, y, W, { kicker: 'THE WIDER WAY OF SEEING', title: 'Perspective', body: ['Shaped by experience, time and values', '“a scientist who has watched animals pace their cages”'], minH: 210, fill: C.tealLight, edge: C.tealDark });
        const b = card(R, y, W, { kicker: 'THE POSITION TAKEN', title: 'Viewpoint', body: ['The writer’s position on an issue', '“zoos should close”'], minH: 210 });
        const y2 = y + 210 + 26;
        const c = card(L, y2, W, { kicker: 'THE FEELING', title: 'Attitude', body: ['How the writer feels towards the subject', 'admiring · scornful · anxious'], minH: 180, fill: C.cream, edge: C.olive, kfill: C.olive });
        const d = card(R, y2, W, { kicker: 'HOW IT SOUNDS ON THE PAGE', title: 'Tone', body: ['How the attitude sounds', 'ironic · solemn · urgent · playful'], minH: 180, kfill: C.olive });
        const s = a.s + b.s + c.s + d.s +
          arrow(L + W + 10, y + 105, R - 10, y + 105, { w: 3.5 }) + T(450, y + 92, 'produces', { size: 17, anchor: 'middle', fill: C.muted, weight: 600 }) +
          arrow(L + W + 10, y2 + 90, R - 10, y2 + 90, { w: 3.5 }) + T(450, y2 + 77, 'sounds as', { size: 17, anchor: 'middle', fill: C.muted, weight: 600 });
        return { s, h: y2 + 180 - y };
      },
      (y) => {
        const b = note(y, 'Same viewpoint, different perspective', 'Two writers both criticise a city’s poverty: one writes from pity, the other from anger.');
        return b;
      },
    ]),
    'Perspective, the wider way of seeing shaped by experience, time and values, produces a viewpoint, the position a writer takes, such as “zoos should close”. Attitude is the writer’s feeling, such as admiring or scornful, and tone is how that feeling sounds, such as ironic or urgent.',
    'Perspective produces the viewpoint; tone is how the attitude sounds.',
    '## Perspective, viewpoint, attitude, tone');
}

// 03 Methods and like-with-like pairing
{
  add('03-methods-like-with-like',
    compose('What “methods” can mean', [
      (y) => {
        const items = [
          ['Vocabulary', 'emotive language, a semantic field, formal or informal register'],
          ['Grammar', 'sentence lengths, questions, imperatives, “we” or “you”, modal verbs'],
          ['Form', 'letter, diary, newspaper column, speech, travel writing'],
          ['Structure', 'how each text opens, turns and ends; order of anecdote and argument'],
          ['Evidence and voice', 'personal experience, statistics, expert opinion, humour, irony'],
        ];
        const w = 270, gap = 15;
        let s = '', h = 0;
        const cards = items.map(([ti, b], i) => {
          const r = i < 3 ? 0 : 1, c = i < 3 ? i : i - 3;
          const x = r === 0 ? 30 + c * (w + gap) : 30 + (w + gap) / 2 + c * (w + gap);
          return { x, r, ti, b };
        });
        const hs = cards.map((c) => card(c.x, 0, w, { title: c.ti, body: c.b, size: 16, tsize: 20 }).h);
        const H = Math.max(...hs);
        cards.forEach((c) => { s += card(c.x, y + c.r * (H + 16), w, { title: c.ti, body: c.b, size: 16, tsize: 20, minH: H }).s; });
        return { s, h: 2 * H + 16 };
      },
      (y) => {
        let s = T(450, y + 22, 'Compare like with like', { size: 22, weight: 700, anchor: 'middle' });
        s += T(270, y + 58, 'Source A', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(630, y + 58, 'Source B', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
        ['opening', 'ending', 'use of anecdote'].forEach((p, i) => {
          const yy = y + 76 + i * 58;
          s += chip(270, yy, p, { anchor: 'middle', fill: C.tealLight, edge: C.tealDark, w: 230, size: 17 }).s +
            chip(630, yy, p, { anchor: 'middle', fill: C.cream, edge: C.olive, w: 230, size: 17 }).s +
            arrow(392, yy + 17, 508, yy + 17, { w: 3 }) + arrow(508, yy + 17, 392, yy + 17, { w: 3 });
        });
        s += T(450, y + 268, 'Pairing methods of the same kind makes a difference visible rather than asserted.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
        return { s, h: 276 };
      },
    ]),
    'Five kinds of method: vocabulary, grammar, form, structure, and evidence and voice, each with examples. Below, Source A and Source B are paired opening with opening, ending with ending and anecdote with anecdote.',
    'Compare methods of the same kind so the difference is visible.',
    '## What "methods" can mean');
}

// 04 Comparing across time
{
  add('04-comparing-across-time',
    compose('Using the gap between centuries', [
      (y) => table(y, [{ w: 200, head: '' , hfill: C.ink }, { w: 320, head: '19th-century source' }, { w: 320, head: 'Modern source' }], [
        ['Audience', 'A letter may be written to one person', 'An article may be written to thousands of strangers'],
        ['Conventions', { text: 'Long, balanced sentences and formal address were normal' }, { text: 'Treat the older style as choices that shape tone, not as “old-fashioned language”', italic: true, fill: C.cream }],
        ['Assumptions', 'What one writer takes for granted…', '…the other may question'],
      ], { size: 18, minRow: 70 }),
      (y) => note(y, 'Assumptions are often the clearest evidence of perspective.', 'Keep context brief and tied to the text: one clause explaining why a writer might think as they do is enough.'),
    ]),
    'A table compares the 19th-century and modern sources by audience (one person against thousands of strangers), conventions (long, balanced sentences and formal address treated as choices that shape tone) and assumptions (what one writer takes for granted, the other may question).',
    'Audience, conventions and assumptions turn the time gap into evidence.',
    '## Comparing across time');
}

// 05 Three ways to structure
{
  const blk = (x, y, w, lab, kind) => {
    const fill = kind === 'A' ? C.teal : kind === 'B' ? C.cream : C.mustard, edge = kind === 'A' ? C.tealDark : C.olive;
    return `<rect x="${x}" y="${y}" width="${w}" height="38" rx="8" fill="${fill}" stroke="${edge}" stroke-width="2"/>` + T(x + w / 2, y + 25, lab, { size: 16, weight: 700, anchor: 'middle', fill: C.ink });
  };
  const strip = (y, title, verdict, good, paras) => {
    let s = panel(30, y, 840, 150, good ? C.panel : C.panel, good === 2 ? C.olive : C.panelEdge);
    s += T(54, y + 38, title, { size: 21, weight: 700 }) + T(846, y + 38, verdict, { size: 17, weight: 700, anchor: 'end', fill: good ? C.tealDark : C.rust });
    let x = 54;
    paras.forEach((p) => {
      const w = p.length * 62 + (p.length - 1) * 4;
      p.forEach((k, j) => { s += blk(x + j * 66, y + 72, 62, k === 'AB' ? 'A·B' : k, k === 'AB' ? 'AB' : k); });
      x += w + 22;
    });
    return s;
  };
  add('05-three-structures',
    compose('Three ways to organise a comparison', [
      (y) => ({ s: strip(y, 'Integrated (point by point)', 'comparison constant', 2, [['A', 'B'], ['A', 'B'], ['A', 'B'], ['A', 'B']]) + T(54, y + 136, 'Each paragraph takes one aspect and moves between both sources.', { size: 16, fill: C.muted }), h: 150 }),
      (y) => {
        let s = strip(y, 'Alternating blocks', 'can work', 1, [['A'], ['B'], ['A'], ['B']]);
        [0, 1].forEach((i) => { const bx = 54 + (2 * i + 1) * 84 + 31, ax = 54 + 2 * i * 84 + 31; s += path(`M${bx},${y + 70} C${bx},${y + 52} ${ax},${y + 52} ${ax},${y + 68}`, { stroke: C.tealDark, w: 2.5, extra: 'marker-end="url(#ahT)"' }); });
        s += T(54, y + 136, 'Works only if every Source B paragraph refers back to Source A.', { size: 16, fill: C.muted });
        return { s, h: 150 };
      },
      (y) => ({ s: strip(y, 'Two separate essays', 'tends to stay in lower levels', 0, [['A', 'A', 'A'], ['B', 'B', 'B'], ['AB']]) + T(54, y + 136, 'Describes one source in full, then the other, and compares only at the end.', { size: 16, fill: C.muted }), h: 150 }),
      (y) => note(y, 'Plan three or four aspects and give each a paragraph.', 'For example: overall perspective, tone and voice, use of evidence, and endings.'),
    ], { gap: 16 }),
    'Three strips of paragraph blocks. Integrated answers move between Source A and Source B in every paragraph. Alternating blocks put A then B, with each B paragraph linked back to A. Two separate essays describe A, then B, and compare only at the end, which tends to stay in the lower levels.',
    'Keep comparison constant: integrated paragraphs are safest.',
    '## Structuring a comparison');
}

// 06 Worked example grid
{
  add('06-worked-example-summit',
    compose('Worked example: two writers at a summit', [
      (y) => table(y, [{ w: 170, head: 'Aspect' }, { w: 335, head: 'Source A (19th-century letter)', hfill: C.tealDark }, { w: 335, head: 'Source B (modern column)', hfill: C.olive }], [
        ['Perspective', 'Reverent awe at the mountain', 'Summit spoiled by the crowd'],
        ['Method', { text: ['Silence: “could not speak”', 'Simile: “like the folds of some vast garment” makes the landscape seem immense'] }, { text: ['Short, deflating opening: “There was a queue at the summit”', 'Minor sentence “An actual queue”: exasperated disbelief'] }],
        ['Ending', { text: ['Looks upward to “the hand that made these heights”', 'A religious perspective many readers then shared'] }, { text: ['A question: what “we had all come up here to find”', 'Unsure the experience has any meaning left'] }],
      ], { size: 17 }),
      (y) => {
        let s = T(450, y + 22, 'Linked in the paragraph with', { size: 18, anchor: 'middle', fill: C.muted });
        let x = 450 - (3 * 150 + 2 * 14) / 2;
        ['whereas', 'in contrast', 'where'].forEach((w) => { s += chip(x, y + 38, w, { w: 150, fill: C.mustard, size: 17 }).s; x += 164; });
        return { s, h: 78 };
      },
    ]),
    'A grid compares the two summit extracts. Perspective: reverent awe in Source A against a summit spoiled by the crowd in Source B. Method: silence and the simile “like the folds of some vast garment” against the flat opening “There was a queue at the summit” and the minor sentence “An actual queue”. Ending: looking upward to “the hand that made these heights” against a question about what “we had all come up here to find”.',
    'Each method is paired with one of the same kind and linked to a perspective.',
    '## Worked example');
}

// 07 Plan in a grid + connectives
{
  add('07-plan-in-a-grid',
    compose('Plan in a grid before you write', [
      (y) => table(y, [{ w: 240, head: 'Aspect' }, { w: 300, head: 'Source A', hfill: C.tealDark }, { w: 300, head: 'Source B', hfill: C.olive }], [
        ['Overall perspective', '', ''], ['Tone and voice', '', ''], ['Use of evidence', '', ''], ['Endings', '', ''],
      ], { minRow: 52, size: 18 }),
      (y) => row(y, [
        { kicker: 'CHECKLIST', title: 'The question’s three reminders', body: ['Compare perspectives', 'Compare methods', 'Refer to both texts'], bullets: true },
        { kicker: 'EACH PARAGRAPH', title: 'Lead with perspective, follow with method', body: ['Open with a comparative judgement, then evidence it.'] },
      ], { gap: 20 }),
      (y) => {
        const w1 = 300;
        let s = panel(30, y, 840, 112);
        s += T(54, y + 38, 'Weak links:', { size: 18, weight: 700, fill: C.rust });
        let x = 230; ['also', 'and'].forEach((w) => { const c = chip(x, y + 16, w, { edge: C.rust, ink: C.rust, size: 17 }); s += c.s; x += c.w + 12; });
        s += T(54, y + 88, 'Comparing links:', { size: 18, weight: 700, fill: C.tealDark });
        x = 230; ['whereas', 'in contrast', 'similarly', 'unlike'].forEach((w) => { const c = chip(x, y + 66, w, { fill: C.tealLight, edge: C.tealDark, size: 17 }); s += c.s; x += c.w + 12; });
        return { s, h: 112 };
      },
    ]),
    'An empty planning grid lists four aspects (overall perspective, tone and voice, use of evidence, endings) down the side and Source A and Source B across the top. Below: compare perspectives, compare methods and refer to both texts; lead with perspective and follow with method; use whereas, in contrast, similarly or unlike rather than also or and.',
    'Fill the grid first, then write paragraphs that compare in every sentence.',
    '## Exam technique');
}
