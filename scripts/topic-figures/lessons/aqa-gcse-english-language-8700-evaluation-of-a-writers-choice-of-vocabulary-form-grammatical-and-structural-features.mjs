import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-language-8700-evaluation-of-a-writers-choice-of-vocabulary-form';
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

// 01 Where it is tested: marks to scale
{
  const qs = [
    ['Paper 1, Question 2', 8, 'Analyse language in a short section', C.teal],
    ['Paper 1, Question 3', 8, 'Analyse how the whole extract is structured', C.tealLight],
    ['Paper 1, Question 4', 20, 'Evaluate, using language and structure as evidence', C.mustard],
    ['Paper 2, Question 3', 12, 'Analyse language in one non-fiction source', C.teal],
  ];
  add('01-where-tested-marks',
    compose('Where the writer’s choices are tested', [
      (y) => {
        const x0 = 250, u = 24; let s = '';
        qs.forEach(([q, m, d, f], i) => {
          const yy = y + i * 92;
          s += T(x0 - 16, yy + 30, q, { size: 18, weight: 700, anchor: 'end' });
          s += `<rect x="${x0}" y="${yy + 6}" width="${m * u}" height="38" rx="6" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + m * u + 12, yy + 32, `${m} marks`, { size: 18, weight: 700 });
          s += T(x0, yy + 72, d, { size: 17, fill: C.muted });
        });
        return { s, h: 4 * 92 - 10 };
      },
      (y) => row(y, [
        { kicker: 'AO2', title: 'Explain, comment on and analyse', body: 'how writers use language and structure to achieve effects, using relevant subject terminology', fill: C.tealLight, edge: C.tealDark },
        { kicker: 'AO4', title: 'Judge', body: 'takes the step from explaining to evaluating', fill: C.cream, edge: C.olive, kfill: C.olive },
      ]),
    ]),
    'Bars to scale: Paper 1 Question 2 (8 marks, language), Paper 1 Question 3 (8 marks, structure), Paper 1 Question 4 (20 marks, evaluation) and Paper 2 Question 3 (12 marks, language). AO2 covers analysing language and structure; AO4 takes the step to judging.',
    'Four questions test the writer’s choices; the 20-mark evaluation is the largest.',
    '## Where it is tested');
}

// 02 Four areas of choice: zoom levels
{
  const items = [
    ['Vocabulary', 'single words', 'word class, connotation, semantic field, register, imagery', C.panel, C.panelEdge],
    ['Grammar', 'how words are arranged', 'sentence length, type and function, tense, pronouns, modal verbs, voice, word order', C.tealLight, C.tealDark],
    ['Form', 'the kind of text', 'diary, letter, newspaper article, first-person narrative: their conventions', C.cream, C.olive],
    ['Structure', 'the whole text as a sequence', 'openings, shifts in focus, time, patterning, paragraphing, endings', C.teal, C.tealDark],
  ];
  add('02-four-areas-of-choice',
    compose('The four areas of a writer’s choice', [
      (y) => {
        let s = ''; const H = 92, gap = 14;
        items.forEach(([n, scope, ex, fill, edge], i) => {
          const yy = y + i * (H + gap), indent = (3 - i) * 0;
          const bw = 170 + i * 50;
          s += panel(30, yy, 840, H, fill, edge);
          s += T(54, yy + 40, n, { size: 23, weight: 700 }) + T(54, yy + 68, scope, { size: 16, fill: C.muted, weight: 600 });
          s += para(300, yy + 38, ex, 545, { size: 17 }).s;
        });
        // scale arrow on the right side? use a left bracket
        return { s, h: 4 * H + 3 * gap };
      },
      (y) => note(y, 'Language or structure?', 'A comment that could be made about a single sentence in isolation is usually a language point, not a structural one.'),
    ]),
    'Four bands from smallest to largest unit: vocabulary (single words), grammar (how words are arranged), form (the kind of text and its conventions) and structure (the whole text as a sequence), each with the features to look for.',
    'Words, arrangement, kind of text, whole sequence: four places to look for choices.',
    '## The four areas of choice');
}

// 03 Grammar choices and their effects
{
  add('03-grammar-effects',
    compose('Grammar choices and their effects', [
      (y) => table(y, [{ w: 250, head: 'Choice' }, { w: 590, head: 'Effect it can create' }], [
        ['Simple sentence after complex ones', 'Isolates and emphasises an idea'],
        ['Long sentence of many clauses', 'Mimics breathlessness or a rush of thought'],
        ['Questions, commands, exclamations', 'Change the reader’s role'],
        ['Tense', 'Present tense creates immediacy; a sudden shift can signal memory'],
        ['Pronouns', '“we” builds community; “you” makes demands of the reader'],
        ['Modal verbs', '“must”, “should” sound certain; “might”, “could” sound tentative'],
        ['Passive voice', '“the window was broken” can hide who acted'],
        ['Word order', 'A key word at the end of a sentence gains emphasis'],
      ], { size: 17 }),
    ]),
    'A table pairs grammar choices with effects: a simple sentence after complex ones emphasises an idea; long sentences mimic breathlessness; questions and commands change the reader’s role; tense, pronouns, modal verbs, the passive voice and word order each shift meaning or emphasis.',
    'Grammar creates effects just as vocabulary does.',
    '### Grammar');
}

// 04 Structure: a map of the whole text
{
  const marks = [
    ['Opening', 'what the reader is shown first, and why'],
    ['Shifts in focus', 'wide setting to a single detail; outside to inside; one character to another'],
    ['Time', 'flashback, flash-forward, slowing pace at a key moment'],
    ['Repetition and patterning', 'a returning motif, or a cyclical shape'],
    ['Paragraphing', 'a one-line paragraph after long ones: a pause or a turn'],
    ['Ending', 'resolution, cliffhanger or an unanswered question'],
  ];
  add('04-structure-map',
    compose('Structure: tracking the text as a sequence', [
      (y) => {
        const n = marks.length, H = 78, top = y + 10;
        let s = `<rect x="60" y="${y}" width="150" height="${n * H + 10}" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
        // paragraph lines in the "text" column
        for (let i = 0; i < n; i++) {
          const yy = top + i * H;
          const lines = i === 4 ? 1 : 3;
          for (let k = 0; k < lines; k++) s += `<line x1="78" y1="${yy + 18 + k * 16}" x2="${k === lines - 1 ? 150 : 192}" y2="${yy + 18 + k * 16}" stroke="${C.panelEdge}" stroke-width="7" stroke-linecap="round"/>`;
        }
        // cyclical arrow
        s += path(`M60,${top + n * H - 30} C20,${top + n * H - 30} 20,${top + 30} 56,${top + 30}`, { stroke: C.olive, w: 2.5, extra: 'stroke-dasharray="6 5" marker-end="url(#ahO)"' });
        marks.forEach(([h, d], i) => {
          const yy = top + i * H;
          s += `<line x1="214" y1="${yy + 34}" x2="262" y2="${yy + 34}" stroke="${C.ink}" stroke-width="2.5"/><circle cx="214" cy="${yy + 34}" r="5" fill="${C.ink}"/>`;
          s += panel(262, yy + 2, 608, H - 12, i === 0 || i === n - 1 ? C.cream : C.panel, i === 0 || i === n - 1 ? C.olive : C.panelEdge);
          s += T(282, yy + 30, h, { size: 19, weight: 700 }) + T(282, yy + 54, d, { size: 16, fill: C.muted });
        });
        return { s, h: n * H + 10 };
      },
      (y) => {
        let s = T(450, y + 22, 'Track the whole extract with words such as', { size: 18, anchor: 'middle', fill: C.muted });
        let x = 450 - (180 + 180 + 180 + 24) / 2;
        ['initially', 'then shifts', 'by the end'].forEach((w) => { s += chip(x, y + 38, w, { w: 180, fill: C.tealLight, edge: C.tealDark, size: 17 }).s; x += 192; });
        return { s, h: 76 };
      },
    ]),
    'A text drawn as a column of paragraphs, with labels from top to bottom: opening, shifts in focus, time, repetition and patterning (a dashed arrow loops from the end back to the start), paragraphing (a one-line paragraph) and ending.',
    'Structure is the order and shape of the whole text, from opening to ending.',
    '### Structure');
}

// 05 From naming to evaluating
{
  add('05-name-explain-evaluate',
    compose('From naming a technique to evaluating it', [
      (y) => {
        const lv = [
          ['Accurate but inert', '“The writer uses a verb.”', 'names a term, goes nowhere', C.panel, C.panelEdge, 30],
          ['Explain and illustrate', '“The verb ‘clawed’ gives the wind the violence of an animal.”', 'the term opens up an effect', C.tealLight, C.tealDark, 100],
          ['Analyse and evaluate', 'Why it is the right choice at this moment, or how it shapes the response to the whole passage', 'judges how well it works', C.cream, C.olive, 170],
        ];
        let s = '', cy = y;
        lv.forEach(([k, q, tag, fill, edge, x], i) => {
          const w = 870 - x - 30 * 0;
          const c = card(x, cy, 840 - (x - 30), { kicker: k.toUpperCase(), title: q, body: tag, fill, edge, kfill: edge === C.panelEdge ? C.muted : edge, tsize: 19, size: 16 });
          s += c.s;
          if (i < 2) s += path(`M${x + 30},${cy + c.h} L${x + 30},${cy + c.h + 22} L${x + 64},${cy + c.h + 22}`, { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' });
          cy += c.h + 26;
        });
        return { s, h: cy - y - 26 };
      },
      (y) => {
        let s = T(450, y + 20, 'Evaluative phrases', { size: 19, weight: 700, anchor: 'middle' });
        const ph = ['particularly effective because', 'this is the turning point of the passage because', 'the impact is strengthened by'];
        ph.forEach((p, i) => { s += chip(450, y + 36 + i * 46, p, { anchor: 'middle', fill: C.mustard, size: 17, weight: 600 }).s; });
        return { s, h: 36 + 3 * 46 - 8 };
      },
      (y) => note(y, 'Never name a technique you cannot explain, and never mislabel.', 'Calling a simile a metaphor weakens an otherwise sound point.'),
    ]),
    'Three rising steps. “The writer uses a verb” is accurate but inert. “The verb ‘clawed’ gives the wind the violence of an animal” explains an effect. Evaluation judges why the choice is right at this moment or how it shapes the whole passage, with phrases such as “particularly effective because”.',
    'A term earns credit only when it leads to an effect, and then to a judgement.',
    '## From explaining to evaluating');
}

// 06 Worked example: language annotations
{
  add('06-ellis-language',
    compose('Worked example: language in the Ellis passage', [
      (y) => {
        let s = panel(30, y, 840, 150, C.panel, C.ink);
        const lines = [
          [['The flat was quiet. ', 0], ['Too quiet.', 1], [' Ellis stood in the doorway with his key still in the lock', 0]],
          [['and listened to the ', 0], ['refrigerator hum its one low note', 2], ['. Somewhere below, a car door', 0]],
          [['slammed; somewhere above, a child laughed and was hushed. On the table, where his', 0]],
          [['sister always left the post, there was nothing at all.', 0]],
        ];
        lines.forEach((ln, i) => {
          const yy = y + 38 + i * 29;
          const sp = ln.map(([txt, hl]) => `<tspan${hl ? ` font-weight="700" fill="${hl === 1 ? C.olive : C.tealDark}" font-style="normal"` : ''}>${X(txt)}</tspan>`).join('');
          s += `<text x="54" y="${yy}" font-size="18" font-style="italic" fill="${C.ink}" xml:space="preserve">${sp}</text>`;
        });
        return { s, h: 150 };
      },
      (y) => row(y, [
        { kicker: 'ACCURATE TERM + EFFECT', title: 'Minor sentence “Too quiet”', body: 'Straight after the plain “The flat was quiet”, it turns a neutral observation into a warning, as if Ellis is correcting himself.', fill: C.cream, edge: C.olive, kfill: C.olive },
        { kicker: 'EXPLAINS IMAGERY', title: 'Personified refrigerator', body: 'The only voice in the flat belongs to a machine, so the absence of human sound is made audible.', fill: C.tealLight, edge: C.tealDark },
      ]),
      (y) => note(y, 'Evaluates impact', '“Particularly effective because the reader senses that something is wrong before Ellis admits it.”'),
    ]),
    'The opening of the Ellis passage with two phrases highlighted. The minor sentence “Too quiet” turns a neutral observation into a warning. The personified refrigerator humming “its one low note” makes the absence of human sound audible. The paragraph ends by evaluating the impact: the reader senses something is wrong before Ellis admits it.',
    'Accurate term, precise effect, then a judgement of impact.',
    '## Worked example');
}

// 07 Worked example: structure (outward, inward, ending)
{
  add('07-ellis-structure',
    compose('Worked example: structure in the Ellis passage', [
      (y) => {
        const st = [
          ['Doorway', 'Ellis listens', 260, C.panel, C.panelEdge],
          ['Outward', 'sounds “below” and “above”: ordinary life all around the flat', 840, C.tealLight, C.tealDark],
          ['Inward: zoom', 'the table and the absence of post: one concrete detail confirms the unease', 600, C.cream, C.olive],
          ['Ending', 'final separate paragraph withholds “she had gone” until the last clause', 460, C.mustard, C.ink],
        ];
        let s = '', cy = y;
        st.forEach(([k, d, w, fill, edge], i) => {
          const x = 450 - w / 2;
          const lines = wrap(d, w - 40, 17);
          const H = 52 + lines.length * 22 + 6;
          s += `<rect x="${x}" y="${cy}" width="${w}" height="${H}" rx="14" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
          s += T(450, cy + 32, k, { size: 20, weight: 700, anchor: 'middle' }) + lines.map((l, j) => T(450, cy + 58 + j * 22, l, { size: 17, anchor: 'middle', fill: C.ink })).join('');
          if (i < st.length - 1) s += arrow(450, cy + H + 3, 450, cy + H + 25, { w: 3.5 });
          cy += H + 28;
        });
        return { s, h: cy - y - 28 };
      },
      (y) => note(y, 'The ending relates to the opening.', 'The passage ends on a certainty that has been building since the second sentence.', { align: 'middle' }),
    ]),
    'Four bands whose widths show the focus: the doorway, then outward to sounds below and above, then narrowing to the empty table, then a final separate paragraph that withholds “she had gone” until the last clause.',
    'The focus widens, narrows to one detail, then ends on a withheld certainty.',
    '## Worked example');
}
