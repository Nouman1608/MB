import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-language-8700-writing-for-impact';
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

// 01 Select, organise, emphasise
{
  add('01-select-organise-emphasise',
    compose('Select, organise, emphasise', [
      (y) => {
        const w = 268, gap = 18, H = 380;
        let s = '';
        const x = (i) => 30 + i * (w + gap);
        // Select
        s += panel(x(0), y, w, H) + T(x(0) + 20, y + 38, '1  Select', { size: 22, weight: 700 });
        [0, 1, 2].forEach((k) => { s += `<rect x="${x(0) + 30}" y="${y + 66 + k * 34}" width="90" height="24" rx="5" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`; });
        [0, 1, 2, 3, 4, 5].forEach((k) => { s += `<rect x="${x(0) + 160}" y="${y + 64 + k * 17}" width="80" height="9" rx="4" fill="${C.panelEdge}"/>`; });
        s += T(x(0) + 75, y + 186, 'three strong', { size: 16, anchor: 'middle', weight: 700 }) + T(x(0) + 200, y + 186, 'six thin', { size: 16, anchor: 'middle', fill: C.muted }) + T(x(0) + 136, y + 120, '>', { size: 28, weight: 700, anchor: 'middle' });
        s += para(x(0) + 20, y + 230, 'Three strong, distinct ideas beat six thin ones.', w - 40, { size: 17 }).s + para(x(0) + 20, y + 300, 'Ask: “Would my reader care about this?”', w - 40, { size: 17, fill: C.tealDark, italic: true }).s;
        // Organise
        s += panel(x(1), y, w, H) + T(x(1) + 20, y + 38, '2  Organise', { size: 22, weight: 700 });
        const bars = (bx, by, hs, lab) => hs.map((h, k) => `<rect x="${bx + k * 24}" y="${by - h}" width="18" height="${h}" rx="3" fill="${h === Math.max(...hs) ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="1.5"/>`).join('') + T(bx + 45, by + 22, lab, { size: 15, anchor: 'middle', weight: 600 });
        s += bars(x(1) + 22, y + 160, [30, 50, 70, 95], 'climactic') + bars(x(1) + 156, y + 160, [95, 70, 50, 30], 'strongest first');
        s += para(x(1) + 20, y + 230, 'Climactic order saves the most powerful point for last; strongest first wins attention.', w - 40, { size: 17 }).s + para(x(1) + 20, y + 322, 'Either works if it is deliberate.', w - 40, { size: 17, fill: C.tealDark, italic: true }).s;
        // Emphasise
        s += panel(x(2), y, w, H, C.cream, C.olive) + T(x(2) + 20, y + 38, '3  Emphasise', { size: 22, weight: 700 });
        s += T(x(2) + 20, y + 70, 'Position is emphasis:', { size: 17, weight: 700, fill: C.olive });
        { let ey = y + 102; ['end of a sentence', 'end of a paragraph', 'a one-sentence paragraph', 'a short sentence after long ones', 'a repeated key word'].forEach((p) => { const r = para(x(2) + 20, ey, p, w - 40, { size: 17, bullet: true }); s += r.s; ey += r.h + 6; }); }
        s += para(x(2) + 20, y + 300, 'In Paper 1, choose the one image that carries the mood, and place it where the reader feels it most.', w - 40, { size: 16, fill: C.muted }).s;
        return { s, h: H };
      },
    ]),
    'Three panels. Select: three strong, distinct ideas beat six thin ones. Organise: a climactic order saves the most powerful point for last, while strongest first wins attention; either works if deliberate. Emphasise: the end of a sentence or paragraph, a one-sentence paragraph, a short sentence after long ones and a repeated key word all give weight.',
    'Impact starts with what you include and where you put it.',
    '## Selecting, organising and emphasising');
}

// 02 Evidence, pertinently
{
  add('02-pertinent-evidence',
    compose('Making evidence pertinent', [
      (y) => table(y, [{ w: 170, head: 'Kind' }, { w: 350, head: 'Example' }, { w: 320, head: 'How to make it pertinent' }], [
        ['Example', { text: '“the bus that stopped running last spring”', italic: true }, 'Concrete and local, so the reader recognises it'],
        ['Anecdote', 'A short story of one person affected', 'Keep it brief, then draw the general point'],
        ['Expert view', { text: '“Doctors have long warned that…”', italic: true }, 'Use it to support, not replace, your argument'],
        ['Quotation', 'A well-known saying, or a phrase from the Paper 2 sources', 'Short, integrated, followed by your comment'],
      ], { size: 17, minRow: 66 }),
      (y) => {
        let s = panel(30, y, 840, 110, C.cream, C.olive);
        s += chip(54, y + 34, 'Paper 2 Section A sources', { fill: C.panel, edge: C.olive, size: 17 }).s;
        s += arrow(330, y + 51, 420, y + 51, { w: 3.5 }) + T(375, y + 38, 'shared theme', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
        s += chip(430, y + 34, 'your Section B argument', { fill: C.mustard, size: 17 }).s;
        s += T(54, y + 96, 'Use the sources as springboards, rephrased in your own words, not as copied passages.', { size: 16, fill: C.muted });
        return { s, h: 110 };
      },
    ]),
    'A table of four kinds of evidence: an example such as “the bus that stopped running last spring”, an anecdote, an expert view such as “Doctors have long warned that…”, and a quotation, each with how to make it pertinent. Ideas from the Paper 2 sources can feed the Section B argument because the sections share a theme.',
    'Evidence persuades when it is specific and its importance is explained.',
    '## Citing evidence and quotation pertinently');
}

// 03 Abstract to concrete
{
  add('03-abstract-to-concrete',
    compose('Make the abstract concrete', [
      (y) => {
        const a = card(30, y, 370, { kicker: 'INFORMS', title: '“Loneliness affects older people”', tsize: 20, minH: 130, vcenter: true });
        const b = card(500, y, 370, { kicker: 'MAKES THE READER FEEL', title: '“Mrs Patel has not spoken to anyone since Tuesday”', tsize: 20, minH: 130, vcenter: true, fill: C.cream, edge: C.olive, kfill: C.olive });
        return { s: a.s + b.s + arrow(410, y + 65, 490, y + 65, { w: 4 }), h: Math.max(a.h, b.h) };
      },
      (y) => table(y, [{ w: 300, head: 'Method' }, { w: 540, head: 'How it works' }], [
        ['Specific, human detail', 'Replaces a generalisation'],
        ['Emotive vocabulary', 'Chosen precisely rather than piled up'],
        ['Direct address', 'Makes the reader part of the situation: “Imagine you…”'],
        ['Shift in tone', 'From humour to seriousness, so the serious moment hits harder'],
        ['Restraint', 'Understatement can be more moving than exclamation marks'],
      ], { size: 17 }),
      (y) => row(y, [
        { title: 'Assembly speech', body: 'can be passionate', fill: C.cream, edge: C.olive, align: 'middle', tsize: 19 },
        { title: 'Letter to a council officer', body: 'more convincing when its feeling is controlled', fill: C.tealLight, edge: C.tealDark, align: 'middle', tsize: 19 },
      ]),
    ]),
    '“Loneliness affects older people” informs, but “Mrs Patel has not spoken to anyone since Tuesday” makes the reader feel. Five methods create emotional impact: a specific human detail, precise emotive vocabulary, direct address, a shift in tone and restraint. An assembly speech can be passionate; a letter to a council officer needs controlled feeling.',
    'A specific human detail moves a reader more than a generalisation.',
    '## Creating emotional impact');
}

// 04 Three named devices
{
  add('04-three-named-devices',
    compose('The three devices the specification names', [
      (y) => {
        const c = card(30, y, 840, { kicker: 'RHETORICAL QUESTION', title: '“Is a few minutes’ convenience really worth a lifetime of litter?”', body: 'Asked for effect; the answer is implied. Use one or two at moments of challenge, not one per paragraph.', tsize: 20, size: 17 });
        return c;
      },
      (y) => {
        let s = panel(30, y, 840, 196, C.tealLight, C.tealDark) + T(54, y + 34, 'ANTITHESIS', { size: 15, weight: 700, fill: C.tealDark });
        s += `<rect x="50" y="${y + 52}" width="390" height="56" rx="10" fill="${C.panel}" stroke="${C.tealDark}" stroke-width="2"/>` + T(245, y + 87, 'We built the roads for cars;', { size: 18, weight: 700, anchor: 'middle' });
        s += `<rect x="460" y="${y + 52}" width="390" height="56" rx="10" fill="${C.panel}" stroke="${C.tealDark}" stroke-width="2"/>` + T(655, y + 87, 'we must now rebuild them for people.', { size: 18, weight: 700, anchor: 'middle' });
        s += path(`M245,${y + 112} L245,${y + 128} L655,${y + 128} L655,${y + 112}`, { stroke: C.tealDark, w: 2.5 }) + `<path d="M450,${y + 128} l-14,18 h28 z" fill="${C.tealDark}"/>`;
        s += T(450, y + 176, 'Contrasting ideas in a balanced structure: memorable and quotable', { size: 17, anchor: 'middle', fill: C.muted });
        return { s, h: 196 };
      },
      (y) => {
        let s = panel(30, y, 840, 200, C.cream, C.olive) + T(54, y + 34, 'PARENTHESIS', { size: 15, weight: 700, fill: C.olive });
        s += `<text x="54" y="${y + 80}" font-size="18" fill="${C.ink}" xml:space="preserve">“The council’s plan,<tspan font-weight="700" fill="${C.olive}" text-decoration="underline"> announced without any public meeting,</tspan> will close the pool in June.”</text>`;
        s += T(54, y + 118, '↑ the inserted aside, marked off here by commas', { size: 16, fill: C.olive, weight: 600 });
        s += T(54, y + 162, 'Brackets, dashes or commas mark it off. It adds a pointed aside, a qualification', { size: 17, fill: C.muted });
        s += T(54, y + 186, 'or a note of irony without breaking the sentence.', { size: 17, fill: C.muted });
        return { s, h: 200 };
      },
    ], { gap: 18 }),
    'Three devices with examples. Rhetorical question: “Is a few minutes’ convenience really worth a lifetime of litter?” Antithesis: “We built the roads for cars; we must now rebuild them for people,” two contrasting halves in balance. Parenthesis: “announced without any public meeting” inserted between commas to add a pointed aside.',
    'Rhetorical question, antithesis and parenthesis: know each precisely.',
    '## Rhetorical devices');
}

// 05 Other devices
{
  add('05-other-devices',
    compose('Other devices for impact', [
      (y) => table(y, [{ w: 260, head: 'Device' }, { w: 580, head: 'Example' }], [
        ['Tricolon (rule of three)', { text: '“It is cheaper, cleaner and kinder.”', italic: true }],
        ['Anaphora', { text: '“We need trees. We need shade. We need somewhere to breathe.”', italic: true }],
        ['Hyperbole', { text: '“The queue stretched halfway to the coast.”', italic: true }],
        ['Irony', { text: '“What a triumph of planning: a cycle lane that ends in a wall.”', italic: true }],
        ['Imperative', { text: '“Picture it. Now picture it gone.”', italic: true }],
        ['Inclusive pronouns', { text: '“Together, we can keep it open.”', italic: true }],
      ], { size: 18, minRow: 56 }),
      (y) => note(y, 'Device-stuffing loses force.', 'Choose two or three devices in advance and decide where each will do most work.', { align: 'middle' }),
    ]),
    'A table of six more devices with examples: tricolon (“cheaper, cleaner and kinder”), anaphora (“We need trees. We need shade.”), hyperbole, irony, imperative (“Picture it. Now picture it gone.”) and inclusive pronouns (“Together, we can keep it open.”).',
    'Use a few devices, each once and for a reason.',
    '## Rhetorical devices');
}

// 06 Worked example: plain to powerful
{
  add('06-library-plain-to-powerful',
    compose('From plain to powerful: the library article', [
      (y) => card(30, y, 840, { kicker: 'PLAIN DRAFT', title: '“The library should stay open. It is useful for lots of people. Closing it would be bad. People need it.”', tsize: 18, edge: C.rust, kfill: C.rust }),
      (y) => {
        const list = [
          ['“Every weekday at nine, a queue forms outside Hartley Road Library.”', 'concrete detail'],
          ['“…not a queue for bargains… it is a queue for warmth, for help with a job application, for a quiet table…”', 'antithesis, tricolon'],
          ['The council calls the library “non-essential”.', 'quotes the opposing view'],
          ['“Ask the pensioner… Ask the boy whose home has no desk.”', 'anaphora, specific people'],
          ['“The building, which has stood for a hundred years, could be gone by spring.”', 'parenthesis; end focus on loss'],
          ['“Is that really a saving worth making?”', 'one rhetorical question'],
        ];
        let s = '', cy = y;
        list.forEach(([q, tag], i) => {
          const c = card(100, cy, 770, { kicker: tag.toUpperCase(), title: q, tsize: 17, pad: 13, fill: i === 5 ? C.cream : C.panel, edge: i === 5 ? C.olive : C.panelEdge, kfill: i === 5 ? C.olive : C.tealDark });
          s += c.s + badge(60, cy + c.h / 2, 19, String(i + 1), i === 5 ? C.mustard : C.cream);
          cy += c.h + 10;
        });
        return { s, h: cy - y - 10 };
      },
      (y) => note(y, 'Each named device is used once and for a reason.', 'A striking opening image, loss placed last for emphasis, and a register suitable for a public article.'),
    ], { gap: 18 }),
    'A plain draft (“The library should stay open… People need it.”) is rebuilt in six steps: a concrete opening detail, antithesis and tricolon, the council’s word “non-essential” quoted, anaphora with specific people, parenthesis with end focus on loss, and a single rhetorical question.',
    'Select a striking image, use each device once, and end on loss.',
    '## Worked example: from plain to powerful');
}

// 07 Plan the impact
{
  add('07-plan-the-impact',
    compose('Plan where the impact will land', [
      (y) => {
        const n = 5, w = 150, gap = 22, x0 = 450 - (n * w + (n - 1) * gap) / 2;
        let s = '';
        for (let i = 0; i < n; i++) {
          const x = x0 + i * (w + gap);
          s += `<rect x="${x}" y="${y + 70}" width="${w}" height="110" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
          for (let k = 0; k < 4; k++) s += `<line x1="${x + 16}" y1="${y + 94 + k * 20}" x2="${x + w - 16 - (k === 3 ? 40 : 0)}" y2="${y + 94 + k * 20}" stroke="${C.panelEdge}" stroke-width="6" stroke-linecap="round"/>`;
          s += T(x + w / 2, y + 204, `paragraph ${i + 1}`, { size: 15, anchor: 'middle', fill: C.muted });
        }
        const px = (i) => x0 + i * (w + gap) + w / 2;
        s += chip(px(0), y, 'first line', { anchor: 'middle', fill: C.tealLight, edge: C.tealDark, size: 16 }).s + arrow(px(0), y + 34, px(0), y + 66, { w: 3 });
        s += chip(px(2), y, 'most emotional moment', { anchor: 'middle', fill: C.cream, edge: C.olive, size: 16 }).s + arrow(px(2), y + 34, px(2), y + 66, { w: 3 });
        s += chip(px(4), y, 'strongest point', { anchor: 'middle', fill: C.mustard, size: 16 }).s + arrow(px(4), y + 34, px(4), y + 66, { w: 3 });
        s += path(`M${px(4)},${y + 214} C${px(4)},${y + 250} ${px(0)},${y + 250} ${px(0)},${y + 218}`, { stroke: C.olive, w: 2.5, extra: 'stroke-dasharray="7 6" marker-end="url(#ahO)"' });
        s += T(450, y + 268, 'the final line can echo the opening', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
        return { s, h: 276 };
      },
      (y) => row(y, [
        { title: 'Echo of the opening', align: 'middle', tsize: 18 },
        { title: 'Call to action', align: 'middle', tsize: 18 },
        { title: 'Resonant image', align: 'middle', tsize: 18 },
      ].map((o) => ({ ...o, fill: C.cream, edge: C.olive })), { gap: 16 }),
      (y) => note(y, 'Save something for the ending, so the piece lands instead of fading.', 'When checking, read the first and last sentences in your head: they carry the most impact.'),
    ]),
    'Five paragraph blocks with planned markers: the first line, the most emotional moment in the middle, and the strongest point at the end (one possible climactic plan). A dashed arrow shows the final line can echo the opening. Endings can be an echo of the opening, a call to action or a resonant image.',
    'Mark your strongest point and most emotional moment in the plan.',
    '## Exam technique');
}
