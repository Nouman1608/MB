import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-english-language-4ea1-section-a-non-fiction-texts';
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

const doc = (x, y, w, h, fill) => `<path d="M${x},${y} h${w - 24} l24,24 v${h - 24} h-${w} z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` +
  [0, 1, 2, 3].map((i) => `<line x1="${x + 16}" y1="${y + 36 + i * 16}" x2="${x + w - 20}" y2="${y + 36 + i * 16}" stroke="${C.ink}" stroke-opacity="0.25" stroke-width="5" stroke-linecap="round"/>`).join('');

// 01 What Section A covers
{
  add('01-section-a-two-texts',
    compose('Section A: two texts, every question', [
      (y) => {
        let s = panel(30, y, 405, 190, C.tealLight, C.tealDark) + doc(54, y + 24, 100, 120, C.panel);
        s += para(176, y + 46, 'Non-fiction text from Anthology Part 1', 240, { size: 19, weight: 700 }).s + para(176, y + 116, 'printed in the exam; know it beforehand', 240, { size: 16, fill: C.tealDark }).s;
        s += panel(465, y, 405, 190, C.cream, C.olive) + doc(489, y + 24, 100, 120, C.panel) + T(539, y + 108, '?', { size: 40, weight: 700, anchor: 'middle', fill: C.olive });
        s += para(611, y + 46, 'One previously unseen extract', 240, { size: 19, weight: 700 }).s + para(611, y + 116, 'a sustained piece of writing', 240, { size: 16, fill: C.olive }).s;
        return { s, h: 190 };
      },
      (y) => {
        let s = T(450, y + 22, '45 marks · about 1 hour 30 minutes, including reading time', { size: 20, weight: 700, anchor: 'middle' });
        s += T(450, y + 50, 'A mixture of short- and long-answer questions; answer them all', { size: 17, anchor: 'middle', fill: C.muted });
        return { s, h: 58 };
      },
      (y) => {
        let s = panel(30, y, 840, 200);
        s += T(54, y + 36, 'Read widely', { size: 19, weight: 700, fill: C.tealDark });
        const kinds = ['articles', 'reviews', 'speeches', 'journals', 'reference books', 'autobiography', 'letters', 'obituaries', 'travel writing'];
        let x = 54, yy = y + 52;
        kinds.forEach((k) => { const c = chip(x, yy, k, { fill: C.tealLight, edge: C.tealDark, size: 16 }); if (x + c.w > 850) { x = 54; yy += 42; } s += chip(x, yy, k, { fill: C.tealLight, edge: C.tealDark, size: 16 }).s; x += c.w + 10; });
        s += T(54, y + 172, 'Not assessed:', { size: 18, weight: 700, fill: C.rust });
        x = 200; ['instant news feeds', 'advertisements'].forEach((k) => { const c = chip(x, y + 150, k, { edge: C.rust, ink: C.rust, size: 16 }); s += c.s; x += c.w + 10; });
        return { s, h: 200 };
      },
    ]),
    'Section A uses a non-fiction text from Part 1 of the Anthology, printed in the exam, and one previously unseen extract. It is worth 45 marks in about 1 hour 30 minutes including reading time. Students should read journalism, speeches, journals, reference books and literary non-fiction; transient texts such as instant news feeds and advertisements are not assessed.',
    'One known Anthology text, one unseen extract, 45 marks.',
    '## What Section A covers');
}

// 02 AO1 explicit, implicit, habits
{
  add('02-ao1-select-and-infer',
    compose('AO1: selecting and inferring', [
      (y) => row(y, [
        { kicker: 'EXPLICIT: THE WRITER TELLS YOU', title: '“The village had no road”', body: 'gives you a fact', tsize: 20 },
        { kicker: 'IMPLICIT: YOU WORK IT OUT', title: 'She “rationed the last of the batteries”', body: 'The journey had gone on longer than planned, and she felt anxious about it.', tsize: 20, fill: C.tealLight, edge: C.tealDark },
      ]),
      (y) => steps(y, [
        { title: 'Stay inside the line range', body: 'If a question names lines, evidence from elsewhere earns nothing.' },
        { title: 'One point per piece of evidence', body: 'Two separate, precise points are worth more than one long sentence.' },
        { title: 'Use your own words when told to', body: 'Copying a phrase shows you found it, not that you understood it.' },
      ], { size: 17 }),
    ]),
    'Explicit information is told: “The village had no road” gives a fact. Implicit information is worked out: she “rationed the last of the batteries” suggests the journey had gone on longer than planned and she felt anxious. Three habits: stay inside the line range, make one point per piece of evidence, and use your own words when told to.',
    'Select precisely, infer from evidence, one point at a time.',
    '## Skill 1: AO1, selecting and interpreting');
}

// 03 AO2 devices table
{
  add('03-ao2-non-fiction-devices',
    compose('Non-fiction devices and their effects', [
      (y) => table(y, [{ w: 270, head: 'Device' }, { w: 570, head: 'Typical effect in non-fiction' }], [
        ['Anecdote', 'Makes an argument personal and believable'],
        ['Direct address (“you”)', 'Draws the reader in and makes them share responsibility'],
        ['Rhetorical question', 'Prompts the reader to reach the writer’s conclusion'],
        ['Contrast or juxtaposition', 'Sharpens a judgement by placing two ideas side by side'],
        ['Shift in register', 'Personal to formal, or humour to seriousness, to change the reader’s response'],
        ['Sentence length', 'Short: emphasis or shock. Long: detail or momentum'],
        [{ text: 'Structural shift', fill: C.cream }, { text: 'A change of time, place or focus that changes how the reader sees what came before', fill: C.cream }],
        [{ text: 'Ending that circles back', fill: C.cream }, { text: 'Returns to an opening image so the reader measures how far the writer has travelled', fill: C.cream }],
      ], { size: 17 }),
      (y) => note(y, 'Structure is the device most often left out.', 'How does it open? Where does the focus change? Chronological, or past and present? How does it end, and why there?'),
    ]),
    'A table of eight non-fiction devices and their typical effects, from anecdote and direct address to structural shifts and an ending that circles back to the opening image. Structural devices are highlighted because they are the ones most often left out.',
    'Cover structure as well as language in every AO2 answer.',
    '## Skill 2: AO2, analysing language and structure');
}

// 04 AO2 chain on the rescue passage
{
  add('04-ao2-chain-rescue',
    compose('AO2: method, evidence, effect, reason', [
      (y) => {
        const r = row(y, [
          { kicker: '1 METHOD', title: 'Name the choice', body: 'A short, flat opening sentence', tsize: 18, size: 16 },
          { kicker: '2 EVIDENCE', title: 'Quote a few words', body: '“The call came at 2 a.m., as they always do”', tsize: 18, size: 16 },
          { kicker: '3 EFFECT', title: 'On the reader', body: 'The emergency feels routine to her, not dramatic', tsize: 18, size: 16 },
          { kicker: '4 REASON', title: 'Why the writer wants it', body: 'The reader senses her long experience', tsize: 18, size: 16, fill: C.cream, edge: C.olive, kfill: C.olive },
        ], { arrows: true, gap: 30 });
        return r;
      },
      (y) => table(y, [{ w: 260, head: 'More methods in the passage' }, { w: 580, head: 'Effect and purpose' }], [
        ['Structure: omission', 'Jumps from the call to the dawn discovery, leaving out the search: focus on the walkers and her feelings, not heroism'],
        ['Precise detail', '“eleven times”: dry humour'],
        ['Blunt short sentence', '“I counted”: anger turned into amused sympathy, persuading the reader to share her tolerant view'],
      ], { size: 17 }),
    ]),
    'A four-step chain on the original rescue passage: method (a short, flat opening sentence), evidence (“The call came at 2 a.m., as they always do”), effect (the emergency feels routine) and reason (the reader senses her long experience). The passage also omits the search and ends with “eleven times” and “I counted” to turn anger into amused sympathy.',
    'Name the method, quote briefly, explain the effect and why the writer wants it.',
    '## Worked example on an original unseen extract');
}

// 05 AO3: two halves and perspectives
{
  add('05-ao3-perspectives',
    compose('AO3: ideas and perspectives, and how they are conveyed', [
      (y) => {
        let s = panel(30, y, 840, 96, C.ink, C.ink);
        s += T(240, y + 40, 'Ideas and perspectives', { size: 20, weight: 700, anchor: 'middle', fill: C.panel }) + T(240, y + 70, 'what each writer thinks', { size: 16, anchor: 'middle', fill: C.teal });
        s += T(450, y + 58, '+', { size: 34, weight: 700, anchor: 'middle', fill: C.mustard });
        s += T(660, y + 40, 'How these are conveyed', { size: 20, weight: 700, anchor: 'middle', fill: C.panel }) + T(660, y + 70, 'the methods each writer uses', { size: 16, anchor: 'middle', fill: C.teal });
        return { s, h: 96 };
      },
      (y) => {
        const pairs = [['insider', 'outsider'], ['participant', 'observer'], ['approving', 'critical'], ['certain', 'uncertain']];
        let s = T(450, y + 20, 'A perspective is the writer’s position', { size: 19, weight: 700, anchor: 'middle' });
        pairs.forEach(([a, b], i) => {
          const yy = y + 40 + i * 46;
          s += chip(330, yy, a, { anchor: 'end', w: 170, fill: C.tealLight, edge: C.tealDark, size: 17 }).s + chip(570, yy, b, { w: 170, fill: C.cream, edge: C.olive, size: 17 }).s;
          s += `<line x1="340" y1="${yy + 16}" x2="560" y2="${yy + 16}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="6 6"/>`;
        });
        return { s, h: 40 + 4 * 46 - 10 };
      },
      (y) => table(y, [{ w: 200, head: 'Compared' }, { w: 320, head: 'Morris’s article', hfill: C.olive }, { w: 320, head: 'The rescuer’s account', hfill: C.tealDark }], [
        ['Perspective', 'A journalist reporting on a rescue at public cost', 'Writes from inside the event'],
        ['Method', 'Headline choice between “explorers” and “boys messing about”; detached news report', 'First-person honesty about her “small anger”; a comic, affectionate detail'],
        ['Effect on reader', 'Invited to judge', 'Ends with sympathy rather than judgement'],
      ], { size: 16 }),
      (y) => {
        let s = T(160, y + 26, 'Connectives:', { size: 17, weight: 700, anchor: 'end' });
        let x = 176; ['whereas', 'similarly', 'by contrast', 'both writers'].forEach((w) => { const c = chip(x, y + 6, w, { fill: C.mustard, size: 17 }); s += c.s; x += c.w + 12; });
        return { s, h: 44 };
      },
    ], { gap: 20 }),
    'AO3 has two halves: links between ideas and perspectives, and how these are conveyed. Perspectives include insider or outsider, participant or observer, approving or critical, certain or uncertain. Morris’s article reports detachedly and invites judgement with its headline; the rescuer writes from inside the event with first-person honesty and ends with sympathy.',
    'Compare what the writers think and how they convey it, in every paragraph.',
    '## Skill 3: AO3, comparing ideas and perspectives');
}

// 06 Pacing and plan grid
{
  add('06-pacing-and-plan',
    compose('Pacing Section A', [
      (y) => {
        const x0 = 70, W = 760, u = W / 45;
        let s = T(450, y + 20, 'Time roughly in proportion to marks, after reading both texts with care', { size: 18, weight: 700, anchor: 'middle' });
        const seg = [[11, 'AO1: 11', C.tealLight, 'keep short answers brief'], [12, 'AO2: 12', C.teal, ''], [22, 'AO3 comparison: 22', C.mustard, 'protect the largest block of time']];
        let x = x0;
        seg.forEach(([m, l, f, n]) => {
          s += `<rect x="${x}" y="${y + 40}" width="${m * u}" height="54" rx="8" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + (m * u) / 2, y + 74, l, { size: 18, weight: 700, anchor: 'middle' });
          if (n) s += T(x + (m * u) / 2, y + 120, n, { size: 16, anchor: 'middle', fill: C.muted });
          x += m * u;
        });
        return { s, h: 128 };
      },
      (y) => {
        let s = T(450, y + 20, 'Plan the comparison in a three-row grid', { size: 19, weight: 700, anchor: 'middle' });
        const t = table(y + 36, [{ w: 300, head: '' }, { w: 540, head: 'Notes' }], [
          ['Shared idea', ''], ['Text 1: perspective and method', ''], ['Text 2: perspective and method', ''],
        ], { size: 17, minRow: 54 });
        return { s: s + t.s, h: t.h + 36 };
      },
      (y) => note(y, 'Anthology preparation', 'For each Part 1 text, know the writer’s perspective, the form (speech, article, memoir, travel writing) and two or three methods worth analysing.'),
    ]),
    'A bar of Section A’s 45 marks in proportion: AO1 11, AO2 12 and AO3 22, with the largest block of time protected for the comparison. Below, a three-row planning grid: shared idea, Text 1 perspective and method, Text 2 perspective and method.',
    'Give the 22-mark comparison the most time, and plan it in a grid.',
    '## Exam technique and command words');
}
