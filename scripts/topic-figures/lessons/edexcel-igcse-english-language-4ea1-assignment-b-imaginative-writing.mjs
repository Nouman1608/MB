import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-english-language-4ea1-assignment-b-imaginative-writing';
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

// 01 At a glance
{
  add('01-assignment-b-at-a-glance',
    compose('Assignment B at a glance', [
      (y) => {
        const x0 = 70, W = 760, u = W / 30;
        let s = T(450, y + 20, '30 marks', { size: 20, weight: 700, anchor: 'middle' });
        s += `<rect x="${x0}" y="${y + 38}" width="${18 * u}" height="58" rx="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 9 * u, y + 63, 'AO4: 18 marks', { size: 19, weight: 700, anchor: 'middle' }) + T(x0 + 9 * u, y + 86, 'communication, form, tone, register', { size: 15, anchor: 'middle' });
        s += `<rect x="${x0 + 18 * u}" y="${y + 38}" width="${12 * u}" height="58" rx="8" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 24 * u, y + 63, 'AO5: 12 marks', { size: 19, weight: 700, anchor: 'middle' }) + T(x0 + 24 * u, y + 86, 'vocabulary, sentences, accuracy', { size: 15, anchor: 'middle', fill: C.tealDark });
        return { s, h: 100 };
      },
      (y) => row(y, [
        { kicker: 'TASK', title: 'Teacher-devised', body: 'Imaginative writing on a selected topic', fill: C.panel },
        { kicker: 'PURPOSE', title: 'Narrate, describe or entertain', body: 'About real or imagined experiences', fill: C.cream, edge: C.olive, kfill: C.olive },
        { kicker: 'LENGTH', title: 'About 700 words', body: 'Advisory; no penalty for exceeding it', fill: C.panel },
      ], { gap: 15 }),
    ]),
    'Assignment B is 30 marks: 18 for AO4 and 12 for AO5. It is a teacher-devised piece of imaginative writing on a selected topic, whose purpose is to narrate, describe or entertain, about real or imagined experiences, in about 700 words.',
    'One imaginative piece of about 700 words: AO4 18 marks, AO5 12.',
    '## What the specification requires');
}

// 02 Two routes for the task
{
  add('02-two-routes',
    compose('Two routes to a topic', [
      (y) => row(y, [
        { kicker: 'ROUTE 1', title: 'Suggested by an Anthology piece', body: ['A piece that begins or ends with a given line', 'The next episode in a character’s story after reading a Part 2 prose text'], bullets: true, fill: C.tealLight, edge: C.tealDark, gap: 8 },
        { kicker: 'ROUTE 2', title: 'Unrelated, perhaps from a set of images', body: ['A title such as “The visitor”', 'A frightening experience', 'An embarrassing moment'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive, gap: 8 },
      ], { gap: 24 }),
      (y) => {
        let s = panel(30, y, 840, 150);
        s += T(54, y + 38, 'Anthology text: a springboard, not a template', { size: 20, weight: 700 });
        s += chip(54, y + 60, 'match: voice and situation', { fill: C.tealLight, edge: C.tealDark, size: 17 }).s;
        const c2 = chip(54, y + 104, 'your own: writing, events and images', { fill: C.mustard, size: 17 });
        s += c2.s;
        s += para(480, y + 82, 'Close enough to be recognisable; never copy the original’s sentences.', 360, { size: 17, fill: C.muted }).s;
        return { s, h: 150 };
      },
    ]),
    'Route 1 takes a topic from an Anthology piece, such as a piece that begins or ends with a given line, or the next episode in a character’s story. Route 2 is unrelated, perhaps from images: a title such as “The visitor”, a frightening experience or an embarrassing moment. A continuation matches the voice and situation, but the writing, events and images are your own.',
    'Use an Anthology text as a springboard, not a template.',
    '## Kinds of task');
}

// 03 Grid levels
{
  add('03-grid-levels',
    compose('What the grids reward', [
      (y) => table(y, [{ w: 120, head: 'Level' }, { w: 390, head: 'AO4 (18 marks)', hfill: C.olive }, { w: 330, head: 'AO5 (12 marks)', hfill: C.tealDark }], [
        [{ text: 'Level 5', fill: C.mustard }, { text: ['“Communication is perceptive and subtle”; “sharply focused on purpose”; “sophisticated use of form, tone and register”', '16–18'], fill: C.cream }, { text: ['“Manipulates complex ideas”; “extensive vocabulary strategically”; punctuation “to aid emphasis and precision”', '11–12'], fill: C.cream }],
        [{ text: 'Level 4', fill: C.cream }, { text: ['“Communicates successfully”; “a secure realisation of the writing task”; “effective use of form, tone and register”', '12–15'] }, { text: ['“Wide, selective vocabulary”; “managing sentence structures for deliberate effect”', '8–10'] }],
        [{ text: 'Level 3', fill: C.tealLight }, { text: ['“Communicates clearly”; “appropriate use of form, tone and register”', '8–11'] }, { text: ['“Varied vocabulary”; “accurate and varied punctuation”', '5–7'] }],
      ], { size: 16 }),
      (y) => {
        let s = T(450, y + 20, 'Words that recur at the top levels', { size: 19, weight: 700, anchor: 'middle' });
        let x = 450 - (3 * 200 + 2 * 16) / 2;
        ['deliberate', 'strategically', 'selectively'].forEach((w) => { s += chip(x, y + 36, w, { w: 200, fill: C.mustard, size: 18, h: 40 }).s; x += 216; });
        s += T(450, y + 106, 'Choices you can make visible because you have time to revise.', { size: 17, anchor: 'middle', fill: C.muted });
        return { s, h: 112 };
      },
    ]),
    'A table of Levels 3 to 5. AO4 rises from “communicates clearly” (8–11) through “communicates successfully” (12–15) to “perceptive and subtle” communication “sharply focused on purpose” (16–18). AO5 rises from “varied vocabulary” (5–7) through “wide, selective vocabulary” (8–10) to “extensive vocabulary strategically” (11–12).',
    'Deliberate, strategic, selective choices mark the top levels.',
    '## What the grids reward');
}

// 04 Making 700 words count
{
  add('04-making-700-words-count',
    compose('Making 700 words count', [
      (y) => {
        const jobs = ['establishing', 'developing', 'developing', 'turning', 'resolving'];
        const w = 152, gap = 20, x0 = 30;
        let s = T(450, y + 20, 'About five or six paragraphs, each doing a job', { size: 19, weight: 700, anchor: 'middle' });
        jobs.forEach((j, i) => {
          const x = x0 + i * (w + gap);
          const f = j === 'turning' ? C.mustard : j === 'resolving' ? C.cream : j === 'establishing' ? C.tealLight : C.panel;
          s += `<rect x="${x}" y="${y + 40}" width="${w}" height="96" rx="10" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
          for (let k = 0; k < 3; k++) s += `<line x1="${x + 16}" y1="${y + 62 + k * 18}" x2="${x + w - 16 - (k === 2 ? 30 : 0)}" y2="${y + 62 + k * 18}" stroke="${C.ink}" stroke-opacity="0.25" stroke-width="5" stroke-linecap="round"/>`;
          s += T(x + w / 2, y + 160, j, { size: 17, weight: 700, anchor: 'middle' });
        });
        return { s, h: 170 };
      },
      (y) => row(y, [
        { title: 'One scene or a short sequence', body: 'not a whole life', align: 'middle', tsize: 18 },
        { title: 'A single viewpoint', body: 'held steadily', align: 'middle', tsize: 18 },
        { title: 'One situation, one change, one ending', body: 'and not much more', align: 'middle', tsize: 18 },
      ], { gap: 15 }),
      (y) => {
        let s = T(450, y + 20, 'Choose a clear shape', { size: 19, weight: 700, anchor: 'middle' });
        const w = 268, gap = 18;
        // zoom
        let x = 30;
        s += panel(x, y + 36, w, 170) + T(x + w / 2, y + 66, 'Zoom', { size: 18, weight: 700, anchor: 'middle' });
        s += `<path d="M${x + 40},${y + 86} L${x + w - 40},${y + 86} L${x + w / 2 + 14},${y + 160} L${x + w / 2 - 14},${y + 160} Z" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + T(x + w / 2, y + 190, 'setting → detail', { size: 16, anchor: 'middle', fill: C.muted });
        // present + memory
        x = 30 + w + gap;
        s += panel(x, y + 36, w, 170) + T(x + w / 2, y + 66, 'Present + one memory', { size: 18, weight: 700, anchor: 'middle' });
        s += `<rect x="${x + 30}" y="${y + 110}" width="${w - 60}" height="22" rx="6" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>`;
        s += `<rect x="${x + w / 2 - 34}" y="${y + 82}" width="68" height="22" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + path(`M${x + w / 2},${y + 104} L${x + w / 2},${y + 110}`, { w: 2 });
        s += T(x + w / 2, y + 160, 'present scene', { size: 15, anchor: 'middle', fill: C.tealDark }) + T(x + w / 2, y + 190, 'one memory dropped in', { size: 16, anchor: 'middle', fill: C.muted });
        // cyclical
        x = 30 + 2 * (w + gap);
        s += panel(x, y + 36, w, 170) + T(x + w / 2, y + 66, 'Cyclical ending', { size: 18, weight: 700, anchor: 'middle' });
        s += `<circle cx="${x + w / 2}" cy="${y + 124}" r="34" fill="none" stroke="${C.olive}" stroke-width="3" stroke-dasharray="150 64" marker-end="url(#ahO)"/>`;
        s += T(x + w / 2, y + 190, 'ends where it began', { size: 16, anchor: 'middle', fill: C.muted });
        return { s, h: 206 };
      },
    ]),
    'About five or six paragraphs, each with a job: establishing, developing, turning and resolving. The piece needs one scene or short sequence, a single viewpoint held steadily, and a clear shape such as a zoom from setting to detail, a present scene with one memory, or a cyclical ending.',
    'Seven hundred words fits one situation, one change and one well-crafted ending.',
    '## Making 700 words count');
}

// 05 Narrowing a stimulus
{
  add('05-narrowing-a-stimulus',
    compose('Narrow the stimulus quickly', [
      (y) => {
        const a = card(30, y, 405, { kicker: 'A TITLE', title: '“The visitor”', body: ['Who is the visitor?', 'To whom?', 'Why does the visit matter now?'], bullets: true, tsize: 22, fill: C.tealLight, edge: C.tealDark, gap: 6 });
        const b = card(465, y, 405, { kicker: 'ONE IMAGE FROM A SET', title: 'Ask about the moment', body: ['What happened five minutes before it was taken?', 'What can the person outside the frame see?'], bullets: true, tsize: 22, fill: C.tealLight, edge: C.tealDark, gap: 6, minH: a.h });
        const h = Math.max(a.h, b.h);
        const a2 = card(30, y, 405, { kicker: 'A TITLE', title: '“The visitor”', body: ['Who is the visitor?', 'To whom?', 'Why does the visit matter now?'], bullets: true, tsize: 22, fill: C.tealLight, edge: C.tealDark, gap: 6, minH: h });
        let s = a2.s + b.s + arrow(232, y + h + 6, 400, y + h + 50, { w: 3.5 }) + arrow(668, y + h + 6, 500, y + h + 50, { w: 3.5 });
        return { s, h: h + 50 };
      },
      (y) => {
        let s = T(450, y + 20, 'Specific answers give you', { size: 19, weight: 700, anchor: 'middle' });
        let x = 450 - (3 * 220 + 2 * 16) / 2;
        ['a situation', 'a viewpoint', 'a source of tension'].forEach((w) => { s += chip(x, y + 36, w, { w: 220, h: 42, fill: C.mustard, size: 18 }).s; x += 236; });
        return { s, h: 80 };
      },
      (y) => note(y, '“Sharply focused on purpose” (AO4)', 'Decide early whether the piece will mainly narrate or describe, and keep that purpose clear through every draft. The risk otherwise is a generic piece.'),
    ]),
    'Two ways to narrow a stimulus. For the title “The visitor”: who is the visitor, to whom, and why does the visit matter now? For one image from a set: what happened five minutes before, and what can the person outside the frame see? Specific answers give a situation, a viewpoint and a source of tension.',
    'Specific questions turn a stimulus into a situation with tension.',
    '## Using images or a title as a stimulus');
}

// 06 Drafting routine and rules
{
  add('06-drafting-routine',
    compose('A drafting routine, all before marking', [
      (y) => {
        const st = ['Draft', 'Feedback', 'Revise', 'Proofread', 'Submit'];
        const w = 150, gap = 22; let s = '';
        st.forEach((t1, i) => {
          const x = 30 + i * (w + gap);
          s += `<rect x="${x}" y="${y}" width="${w}" height="52" rx="26" fill="${i === 1 ? C.tealLight : i === 4 ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="2"/>` + T(x + w / 2, y + 32, t1, { size: 17, weight: 700, anchor: 'middle' });
          if (i < 4) s += arrow(x + w + 3, y + 26, x + w + gap - 3, y + 26, { w: 3 });
        });
        s += T(450, y + 82, 'The teacher may suggest general improvements; you make the corrections. No rewriting after marking.', { size: 16, anchor: 'middle', fill: C.muted });
        return { s, h: 90 };
      },
      (y) => steps(y, [
        { title: 'First draft', body: 'The whole shape, including the ending, without polishing' },
        { title: 'Structure pass', body: 'Does each paragraph earn its place? Cut or merge any that repeat.' },
        { title: 'Voice pass', body: 'Read aloud; mark any sentence where the voice slips.' },
        { title: 'Vocabulary pass', body: 'Replace “nice”, “scary”, “very”; cut adjectives a stronger noun or verb makes unnecessary.' },
        { title: 'Sentence pass', body: 'Variety, and short sentences placed at moments of emphasis' },
        { title: 'Accuracy pass', body: 'Spelling, punctuation (especially dialogue), paragraphing, tense' },
      ], { size: 16, tsize: 18, gap: 8, pad: 13 }),
    ], { gap: 18 }),
    'A timeline runs draft, general feedback, revise, proofread, submit, with all changes made before marking. Six passes follow: first draft of the whole shape, structure, voice read aloud, vocabulary (replacing words such as “nice” and “very”), sentence variety, and accuracy including dialogue punctuation.',
    'Revise in separate passes, and finish every change before the work is marked.',
    '## A drafting routine');
}

// 07 Worked redraft
{
  add('07-necklace-redraft',
    compose('Worked redraft: after “The Necklace”', [
      (y) => card(30, y, 840, { kicker: 'FIRST DRAFT: TELLS', title: '“Madame Forestier went home and thought about the necklace. She felt quite sad and guilty because Mathilde had worked so hard for ten years…”', tsize: 17, edge: C.rust, kfill: C.rust }),
      (y) => card(30, y, 840, { kicker: 'REDRAFT: SHOWS', title: '“…The case was where it had always been, at the back of the drawer… She had not even opened it, that day. She opened it now. The stones looked exactly as they always had, which was the worst of it…”', tsize: 17, fill: C.cream, edge: C.olive, kfill: C.olive }),
      (y) => row(y, [
        { kicker: 'AO4', title: 'Showing, not stating', body: ['Close third person gives her thoughts without naming emotions', 'The unopened case: a telling detail that turns into guilt', 'Two short sentences pivot from past to present', 'The ending keeps the original story’s irony'], bullets: true, fill: C.tealLight, edge: C.tealDark, size: 16, gap: 5 },
        { kicker: 'AO5', title: 'Deliberate technique', body: ['A precise verb: “gargling”', 'A semicolon and a colon used deliberately', 'Sentence lengths that slow down to the final admission'], bullets: true, fill: C.tealLight, edge: C.tealDark, size: 16, gap: 5 },
      ]),
      (y) => note(y, 'Faithful but original', 'It follows on from the story’s ending and the returned case, but invents its own images, voice and structure. Check every borrowed detail against the original.'),
    ], { gap: 18 }),
    'A first draft tells: Madame Forestier “felt quite sad and guilty”. The redraft shows: the unopened case at the back of the drawer, then “She had not even opened it, that day. She opened it now.” AO4 gains come from close third person, a telling detail, a pivot and irony; AO5 gains from “gargling”, a deliberate semicolon and colon, and varied sentence lengths.',
    'The redraft shows guilt through a detail instead of naming it.',
    '## Worked redraft');
}
