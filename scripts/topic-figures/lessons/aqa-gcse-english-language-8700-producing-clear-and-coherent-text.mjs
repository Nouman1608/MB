import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-language-8700-producing-clear-and-coherent-text';
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

// 01 Section B on both papers
{
  add('01-section-b-both-papers',
    compose('Section B writing on both papers', [
      (y) => row(y, [
        { kicker: 'PAPER 1, SECTION B', title: 'Narrative or descriptive writing', body: ['From a choice of scenario, prompt or image', 'Purposes most in play: describe, narrate'], bullets: true, fill: C.tealLight, edge: C.tealDark },
        { kicker: 'PAPER 2, SECTION B', title: 'A non-fiction text giving your viewpoint', body: ['Audience, purpose and form are specified', 'Purposes most in play: argue, explain, persuade, give and respond to information'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
      ]),
      (y) => {
        const x0 = 70, W = 760, u = W / 40;
        let s = T(450, y + 20, 'Each Section B is marked out of 40', { size: 20, weight: 700, anchor: 'middle' });
        s += `<rect x="${x0}" y="${y + 40}" width="${24 * u}" height="56" rx="8" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 12 * u, y + 63, '24 marks: content and organisation', { size: 18, weight: 700, anchor: 'middle' }) + T(x0 + 12 * u, y + 86, 'AO5', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 });
        s += `<rect x="${x0 + 24 * u}" y="${y + 40}" width="${16 * u}" height="56" rx="8" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 32 * u, y + 63, '16 marks: technical accuracy', { size: 18, weight: 700, anchor: 'middle' }) + T(x0 + 32 * u, y + 86, 'AO6', { size: 16, anchor: 'middle', fill: C.olive, weight: 700 });
        return { s, h: 100 };
      },
      (y) => note(y, 'AO5: communicate clearly, effectively and imaginatively', 'Select and adapt tone, style and register for form, purpose and audience; organise ideas with structural and grammatical features for coherence and cohesion.'),
    ]),
    'Paper 1 Section B is narrative or descriptive writing from a choice of scenario, prompt or image; Paper 2 Section B is a non-fiction viewpoint text with audience, purpose and form specified. On each paper, Section B gives 24 marks to content and organisation (AO5) and 16 to technical accuracy (AO6).',
    'Both papers end with a 40-mark writing task: 24 for AO5, 16 for AO6.',
    '## What the specification includes');
}

// 02 Purpose shapes everything
{
  add('02-purpose-choices',
    compose('Purpose shapes the writer’s choices', [
      (y) => table(y, [{ w: 250, head: 'Purpose' }, { w: 590, head: 'Typical choices' }], [
        ['Describe', 'Sensory detail, precise nouns and verbs, controlled focus, often present tense'],
        ['Narrate', 'A sequence of events, a viewpoint character, pace control, a clear shape'],
        ['Explain', 'Logical order, causal connectives (“because”, “as a result”), examples'],
        ['Instruct', 'Imperatives, numbered or ordered steps, second person'],
        ['Give and respond to information', 'Accurate facts, neutral or measured register, clear signposting'],
        ['Argue', 'A clear position, reasons and evidence, counter-argument and rebuttal'],
      ], { size: 17, minRow: 58 }),
    ]),
    'A table of six purposes and their typical choices: describe (sensory detail, precise nouns and verbs), narrate (sequence, viewpoint character, pace), explain (logical order, causal connectives), instruct (imperatives, ordered steps), give and respond to information (accurate facts, measured register) and argue (position, evidence, counter-argument and rebuttal).',
    'Each purpose pulls the writing towards different choices.',
    '## Purpose shapes everything');
}

// 03 Mixed purposes, one controlling purpose
{
  add('03-controlling-purpose',
    compose('One text, several purposes', [
      (y) => {
        let s = `<rect x="30" y="${y}" width="840" height="330" rx="18" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>`;
        s += T(60, y + 42, 'Controlling purpose: ARGUE', { size: 22, weight: 700, fill: C.olive });
        s += T(60, y + 70, 'An article arguing for a later school day', { size: 18, fill: C.ink, italic: true });
        const inner = [['Explain', 'the research'], ['Describe', 'a tired morning'], ['Narrate', 'a short anecdote']];
        inner.forEach(([p, d], i) => {
          const x = 60 + i * 268;
          s += card(x, y + 100, 244, { title: p, body: d, tsize: 21, size: 17, minH: 120, fill: C.panel, edge: C.tealDark, align: 'middle', vcenter: true }).s;
          s += arrow(x + 122, y + 226, x + 122, y + 270, { color: C.olive, marker: 'ahO', w: 3 });
        });
        s += `<rect x="60" y="${y + 274}" width="780" height="36" rx="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + T(450, y + 298, 'each one serves the argument', { size: 18, weight: 700, anchor: 'middle' });
        return { s, h: 330 };
      },
    ]),
    'A large box labelled “controlling purpose: argue” holds an article arguing for a later school day. Inside it, explaining research, describing a tired morning and narrating a short anecdote each feed the argument.',
    'A text can mix purposes, but one purpose stays in control.',
    '## Purpose shapes everything');
}

// 04 Register: two openings
{
  add('04-register-two-openings',
    compose('Same purpose, two registers', [
      (y) => {
        let s = `<defs><linearGradient id="rg" x1="0" x2="1"><stop offset="0" stop-color="${C.tealDark}"/><stop offset="1" stop-color="${C.mustard}"/></linearGradient></defs>`;
        s += `<rect x="60" y="${y + 30}" width="780" height="14" rx="7" fill="url(#rg)"/>`;
        s += T(60, y + 18, 'more formal', { size: 17, weight: 700, fill: C.tealDark }) + T(840, y + 18, 'less formal', { size: 17, weight: 700, fill: C.olive, anchor: 'end' });
        s += `<circle cx="160" cy="${y + 37}" r="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/><circle cx="740" cy="${y + 37}" r="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>`;
        const a = card(30, y + 70, 405, { kicker: 'LETTER TO A HEAD TEACHER', title: '“I am writing to ask you to reconsider the decision to close the library at lunchtime.”', tsize: 19, fill: C.tealLight, edge: C.tealDark, minH: 150 });
        const b = card(465, y + 70, 405, { kicker: 'SPEECH TO FELLOW STUDENTS', title: '“Raise your hand if the library has ever saved your lunchtime. Exactly.”', tsize: 19, fill: C.cream, edge: C.olive, kfill: C.olive, minH: 150 });
        s += path(`M160,${y + 50} L160,${y + 70}`, { w: 2.5 }) + path(`M740,${y + 50} L740,${y + 70}`, { w: 2.5 });
        return { s: s + a.s + b.s, h: 70 + Math.max(a.h, b.h) };
      },
      (y) => {
        let s = T(450, y + 20, 'Register is not only vocabulary. It also moves with:', { size: 19, weight: 700, anchor: 'middle' });
        const items = ['sentence length', 'contractions', 'pronouns: “you” or “one”', 'humour'];
        let tw = items.reduce((a, w) => a + Math.round(w.length * 17 * 0.6 + 32) + 12, -12), x = 450 - tw / 2;
        items.forEach((w) => { const c = chip(x, y + 38, w, { fill: C.panel, edge: C.tealDark, size: 17 }); s += c.s; x += c.w + 12; });
        return { s, h: 74 };
      },
      (y) => note(y, 'Both openings are appropriate; neither would suit the other audience.', 'Matching register to the reader is the clearest sign of control.', { align: 'middle' }),
    ]),
    'A formality scale with two openings. To a head teacher, a formal letter: “I am writing to ask you to reconsider the decision to close the library at lunchtime.” To fellow students, an informal speech: “Raise your hand if the library has ever saved your lunchtime. Exactly.” Register also moves with sentence length, contractions, pronouns and humour.',
    'Match the register to the reader named in the task.',
    '## Audience, form and register');
}

// 05 Coherence and cohesion
{
  add('05-coherence-cohesion',
    compose('Coherence and cohesion', [
      (y) => {
        return row(y, [
          { kicker: 'COHERENCE: THE LOGIC', title: 'Does the whole text make sense as a sequence?', body: 'Ideas in a logical order; the reader always knows why one paragraph follows another.', fill: C.tealLight, edge: C.tealDark },
          { kicker: 'COHESION: THE SIGNALS', title: 'Which devices bind sentences and paragraphs?', body: 'The language that shows how ideas connect.', fill: C.cream, edge: C.olive, kfill: C.olive },
        ], { gap: 30 });
      },
      (y) => table(y, [{ w: 260, head: 'Cohesive device' }, { w: 580, head: 'Example or job' }], [
        ['Topic sentences', 'Announce each paragraph’s idea'],
        ['Discourse markers', '“however”, “consequently”, “at first”, “meanwhile”'],
        ['Pronoun reference', '“this”, “they”: pointing back clearly, never ambiguously'],
        ['Lexical chains', 'storm, thunder, drenched: a thread of related words'],
        ['Deliberate repetition', 'A key word or image that ties the opening to the ending'],
      ], { size: 17 }),
      (y) => note(y, 'Cohesive but incoherent: every sentence linked with “furthermore”, ideas jumping randomly.', 'Plan the logic first, then signal it.'),
    ]),
    'Coherence is whether the whole text makes sense as a logical sequence; cohesion is the set of devices that bind it: topic sentences, discourse markers such as “however”, clear pronoun reference, lexical chains such as storm, thunder, drenched, and deliberate repetition. A text can be cohesive but incoherent.',
    'Plan the logic (coherence), then signal it (cohesion).',
    '## Coherence and cohesion');
}

// 06 Worked example: draft to revision
{
  add('06-uniform-draft-revision',
    compose('From a list of points to a coherent paragraph', [
      (y) => {
        const draft = ['School uniform should be scrapped.', 'My cousin’s school has no uniform.', 'Uniform is expensive.', 'Some people say it stops bullying.', 'Also it is uncomfortable.', 'Students would be happier.'];
        const fate = [['kept: topic', C.tealDark], ['cut: does no work', C.rust], ['kept: one idea', C.tealDark], ['kept: counter-argument', C.tealDark], ['saved for its own paragraph', C.olive], ['not in the revision', C.muted]];
        let s = panel(30, y, 840, 50 + draft.length * 40, C.panel, C.panelEdge) + T(54, y + 34, 'Draft: six disconnected sentences', { size: 19, weight: 700 });
        draft.forEach((d, i) => {
          const yy = y + 70 + i * 40;
          s += T(54, yy, d, { size: 17, italic: true }) + T(846, yy, fate[i][0], { size: 16, weight: 700, anchor: 'end', fill: fate[i][1] });
          if (i < draft.length - 1) s += `<line x1="54" y1="${yy + 13}" x2="846" y2="${yy + 13}" stroke="${C.panelEdge}" stroke-width="1.5" stroke-dasharray="4 4"/>`;
        });
        return { s, h: 50 + draft.length * 40 };
      },
      (y) => steps(y, [
        { title: 'Topic sentence', body: 'School uniform should be scrapped, and cost is the strongest reason.' },
        { title: 'Development of one idea', body: 'Branded items stretch a family’s budget as a child grows.' },
        { title: 'Counter-argument signposted', body: 'Supporters argue that uniform prevents bullying about clothes;' },
        { title: 'Rebuttal with a discourse marker', body: '“however”, pupils will find another target, from shoes to phones.' },
        { title: 'Final sentence links back to the topic', body: 'If uniform does not protect pupils, its cost is hard to justify.', hl: true },
      ], { size: 16, tsize: 18, gap: 8, pad: 13 }),
    ]),
    'The draft paragraph on school uniform is six disconnected sentences: the anecdote about a cousin is cut, the comfort point is saved for its own paragraph. The revision runs topic sentence, development of cost, signposted counter-argument about bullying, rebuttal with “however”, and a final sentence that links back to the topic.',
    'Group the ideas, signal the relationships, end where the topic sentence began.',
    '## Worked example: improving coherence');
}
