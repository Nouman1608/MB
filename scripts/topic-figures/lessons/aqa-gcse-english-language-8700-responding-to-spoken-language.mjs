import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-language-8700-responding-to-spoken-language';
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
    let ci = 0; const cwid = cells.map((c) => { let w = 0; for (let k = 0; k < (c.span || 1); k++) w += cols[ci++].w; return w; });
    const IG = 8; // gap between items in one cell
    const lines = cells.map((c, i) => {
      const out = []; let dy = 0;
      [].concat(c.text).forEach((p, j) => {
        if (j > 0) dy += IG;
        wrap(p, cwid[i] - 2 * pad, c.size ?? size, c.weight ?? (i === 0 && o.firstBold !== false ? 700 : 400)).forEach((l) => { out.push({ l, dy }); dy += lh; });
      });
      out.H = dy; return out;
    });
    const rh = Math.max(o.minRow || 0, Math.max(...lines.map((l) => l.H)) + 2 * pad - 2);
    let cx = x0;
    cells.forEach((c, i) => {
      const fill = c.fill || (i === 0 && o.firstFill !== false ? C.tealLight : C.panel);
      s += `<rect x="${cx}" y="${cy}" width="${cwid[i]}" height="${rh}" fill="${fill}" stroke="${C.panelEdge}" stroke-width="2"/>`;
      const ty = cy + (rh - lines[i].H) / 2 + (c.size ?? size) * 0.82;
      const ax = c.anchor === 'middle' ? cx + cwid[i] / 2 : cx + pad;
      s += lines[i].map(({ l, dy }) => T(ax, ty + dy, l, { size: c.size ?? size, weight: c.weight ?? (i === 0 && o.firstBold !== false ? 700 : 400), fill: c.ink || C.ink, italic: c.italic, anchor: c.anchor || 'start' })).join('');
      cx += cwid[i];
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

// Staircase helper: steps rising left to right. items [{grade, text, key}]
function stairs(y, items, o = {}) {
  const n = items.length, w = (840 - (n - 1) * 14) / n, rise = o.rise ?? 40;
  const fills = [C.panel, C.tealLight, C.cream], edges = [C.panelEdge, C.tealDark, C.olive], chipF = [C.tealLight, C.teal, C.mustard];
  const hs = items.map((it) => card(0, 0, w, { title: it.grade, body: it.text, tsize: 22, size: 17 }).h + (it.key ? it.key.length * 40 + 8 : 0));
  const base = Math.max(...hs.map((h, i) => h + i * rise));
  let s = '';
  items.forEach((it, i) => {
    const x = 30 + i * (w + 14), top = y + (n - 1 - i) * rise, H = base - (n - 1 - i) * rise - (n - 1) * 0;
    const hh = y + base - top;
    s += card(x, top, w, { title: it.grade, body: it.text, tsize: 22, size: 17, minH: hh, fill: fills[i], edge: edges[i] }).s;
    if (it.key) {
      it.key.forEach((k, j) => { s += chip(x + 20, y + base - 18 - (it.key.length - j) * 40, k, { fill: chipF[i], edge: C.ink, size: 16 }).s; });
    }
  });
  return { s, h: base };
}

// 01 Grade ladder for responding
{
  add('01-responding-grade-ladder',
    compose('How the responding criterion steps up', [
      (y) => stairs(y, [
        { grade: 'Pass', text: 'Listens and gives an appropriate response in a straightforward manner', key: ['straightforward'] },
        { grade: 'Merit', text: 'Listens and responds formally and in some detail', key: ['formally', 'in some detail'] },
        { grade: 'Distinction', text: 'Listens, responds perceptively and, if appropriate, elaborates with further ideas and information', key: ['perceptively', 'elaborates'] },
      ]),
      (y) => table(y, [{ w: 220, head: 'Key word' }, { w: 620, head: 'What it means' }], [
        ['Formally', 'Keep the register of the presentation, even when it feels like a conversation'],
        ['In some detail', 'More than a one-line answer: a reason or an example'],
        ['Perceptively', 'See what lies behind a question, such as the doubt or assumption that prompted it, and answer that'],
        ['Elaborates', 'Add new ideas or information that the presentation did not include'],
      ], { size: 17 }),
    ]),
    'Three rising steps. Pass: listens and responds appropriately in a straightforward manner. Merit: responds formally and in some detail. Distinction: responds perceptively and elaborates with further ideas and information. A table explains formally, in some detail, perceptively and elaborates.',
    'Four words separate the grades: formally, in some detail, perceptively, elaborates.',
    '## What the criteria reward');
}

// 02 Kinds of questions
{
  add('02-kinds-of-questions',
    compose('Six kinds of question, six kinds of answer', [
      (y) => table(y, [{ w: 170, head: 'Type' }, { w: 370, head: 'Example (after a talk on a car ban)' }, { w: 300, head: 'What it needs' }], [
        ['Clarification', { text: '“What did you mean by a ‘trial period’?”', italic: true }, 'A clear, concise explanation'],
        ['Extension', { text: '“How would deliveries work?”', italic: true }, 'New detail beyond the talk'],
        [{ text: 'Challenge', fill: C.cream }, { text: '“Isn’t this unfair on people who can’t walk far?”', italic: true, fill: C.cream }, { text: 'Acknowledgement, then a reasoned reply', fill: C.cream }],
        ['Hypothetical', { text: '“What if shops lost money during the trial?”', italic: true }, 'A considered “if… then” answer'],
        ['Personal', { text: '“Would you shop there more yourself?”', italic: true }, 'An honest answer linked back to the argument'],
        ['Feedback', { text: '“Your second section was hard to follow.”', italic: true }, 'Thanks, reflection and a constructive response'],
      ], { size: 17 }),
    ]),
    'A table of six question types after a talk on banning cars from a high street: clarification, extension, challenge, hypothetical, personal and feedback, each with an example and what kind of answer it needs, from a concise explanation to thanks and a constructive response.',
    'Recognise the type of question to know what the answer needs.',
    '## Kinds of questions and feedback');
}

// 03 Active listening
{
  add('03-active-listening',
    compose('Active listening, step by step', [
      (y) => steps(y, [
        { title: 'Hear the whole question', body: 'before you start planning an answer' },
        { title: 'Identify its core', body: 'often one key word: “unfair”, “cost”, “evidence”' },
        { title: 'Check if it is unclear', body: 'Ask your own question to elicit clarification: “Do you mean the cost to shops or to the council?”', hl: true },
        { title: 'Watch the questioner', body: 'so you can tell whether your answer has satisfied them' },
      ], { size: 17 }),
      (y) => note(y, 'Asking for clarification shows control, not weakness.', 'It is exactly what the specification describes.', { align: 'middle' }),
    ]),
    'Four steps of active listening: hear the whole question, identify its core key word such as “unfair” or “cost”, check an unclear question by asking one back (“Do you mean the cost to shops or to the council?”), and watch the questioner to see if they are satisfied.',
    'Listen to the end, find the key word, and ask if it is unclear.',
    '## Active listening');
}

// 04 Shapes for good answers
{
  const shape = (y, title, parts, fill, edge) => {
    const n = parts.length, gap = 30, w = (840 - (n - 1) * gap) / n;
    let s = T(30, y + 22, title, { size: 20, weight: 700, fill: edge === C.panelEdge ? C.ink : edge });
    const hs = parts.map((p) => wrap(p, w - 24, 17).length);
    const H = Math.max(...hs) * 22 + 26;
    parts.forEach((p, i) => {
      const x = 30 + i * (w + gap);
      s += `<rect x="${x}" y="${y + 36}" width="${w}" height="${H}" rx="12" fill="${i === n - 1 ? fill : C.panel}" stroke="${edge === C.panelEdge ? C.tealDark : edge}" stroke-width="2.5"/>`;
      const ls = wrap(p, w - 24, 17);
      s += ls.map((l, k) => T(x + w / 2, y + 36 + (H - ls.length * 22) / 2 + 16 + k * 22, l, { size: 17, anchor: 'middle' })).join('');
      if (i < n - 1) s += arrow(x + w + 3, y + 36 + H / 2, x + w + gap - 3, y + 36 + H / 2, { w: 3 });
    });
    return { s, h: 36 + H };
  };
  add('04-answer-shapes',
    compose('Three shapes for a good answer', [
      (y) => shape(y, 'Straightforward or extension question', ['Direct answer', 'Reason or explanation', 'Example', 'Link back to the presentation’s point'], C.tealLight, C.tealDark),
      (y) => shape(y, 'Challenge', ['Acknowledge the point fairly', 'Concede what is true', 'Respond with reasoning or evidence', 'Restate your position'], C.cream, C.olive),
      (y) => shape(y, 'Feedback', ['Thank the speaker', 'Show you understand the comment', 'Respond: explain, accept or offer an improvement'], C.teal, C.ink),
      (y) => note(y, 'No one-word answers, no wandering speeches.', 'A shape keeps every answer developed and to the point.', { align: 'middle' }),
    ], { gap: 26 }),
    'Three flow rows. For a straightforward or extension question: direct answer, reason, example, link back. For a challenge: acknowledge fairly, concede what is true, respond with reasoning or evidence, restate your position. For feedback: thank the speaker, show you understand, then explain, accept or offer an improvement.',
    'Each kind of question has its own answer shape.',
    '## Shapes for good answers');
}

// 05 Three answers to one challenge
{
  add('05-three-answers-one-challenge',
    compose('Three answers to one challenge', [
      (y) => {
        const s = panel(30, y, 840, 74, C.ink, C.ink) + T(450, y + 31, '“Isn’t a car ban unfair on disabled people who need', { size: 19, weight: 700, anchor: 'middle', fill: C.panel }) + T(450, y + 57, 'to park close to the shops?”', { size: 19, weight: 700, anchor: 'middle', fill: C.panel });
        return { s, h: 74 };
      },
      (y) => {
        const A = [
          ['A', 'Straightforward', '“Yes, that’s a fair point. They could still come on other days.”', ['relevant and polite', 'brief, undeveloped'], C.tealLight, C.tealDark],
          ['B', 'Formal, in some detail', '“…the ban should include an exemption for blue-badge holders… Other towns have done something similar.”', ['formal', 'a reason', 'a proposed solution'], C.cream, C.olive],
          ['C', 'Perceptive, with elaboration', '“…the question isn’t only access by car, but access for everyone once they arrive.”', ['sees the principle: fairness and inclusion', 'concedes honestly', 'adds new information', 'reframes the issue'], C.mustard, C.ink],
        ];
        let s = '', cy = y;
        A.forEach(([l, g, q, adds, fill, edge], i) => {
          const c = card(110, cy, 760, { kicker: g.toUpperCase(), title: q, tsize: 18, fill: i === 2 ? C.cream : C.panel, edge, kfill: edge === C.ink ? C.olive : edge, pad: 16 });
          const pos = []; let cx = 126, rowN = 0;
          adds.forEach((a) => { const w = chip(0, 0, a, { size: 15 }).w; if (cx + w > 852) { cx = 126; rowN++; } pos.push([cx, rowN]); cx += w + 8; });
          const H = c.h + (rowN + 1) * 38 + 6;
          s += card(110, cy, 760, { kicker: g.toUpperCase(), title: q, tsize: 18, fill: i === 2 ? C.cream : C.panel, edge, kfill: edge === C.ink ? C.olive : edge, pad: 16, minH: H }).s;
          adds.forEach((a, k) => { s += chip(pos[k][0], cy + c.h - 4 + pos[k][1] * 38, a, { size: 15, fill, edge }).s; });
          s += badge(60, cy + H / 2, 26, l, fill);
          cy += H + 14;
        });
        return { s, h: cy - y - 14 };
      },
    ]),
    'A challenge about disabled people and parking gets three answers. A is relevant and polite but brief: a straightforward response. B is formal, gives a reason and proposes a blue-badge exemption: in some detail. C sees the principle of fairness and inclusion, concedes honestly, adds new information and reframes the issue as access for everyone: perceptive, with elaboration.',
    'Each answer adds something: detail, then insight and new information.',
    '## Worked example: three answers to one challenge');
}
