import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-english-language-4ea1-assignment-a-poetry-and-prose-texts';
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

// 01 Requirements: marks, length, task
{
  add('01-assignment-a-at-a-glance',
    compose('Assignment A at a glance', [
      (y) => {
        const x0 = 70, W = 760, u = W / 30;
        let s = T(450, y + 20, '30 marks, best fit', { size: 20, weight: 700, anchor: 'middle' });
        s += `<rect x="${x0}" y="${y + 38}" width="${12 * u}" height="58" rx="8" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 6 * u, y + 63, 'AO1: 12 marks', { size: 19, weight: 700, anchor: 'middle' }) + T(x0 + 6 * u, y + 86, 'ideas, interpretation, references', { size: 15, anchor: 'middle', fill: C.tealDark });
        s += `<rect x="${x0 + 12 * u}" y="${y + 38}" width="${18 * u}" height="58" rx="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 21 * u, y + 63, 'AO2: 18 marks (60%)', { size: 19, weight: 700, anchor: 'middle' }) + T(x0 + 21 * u, y + 86, 'effects of language and structure', { size: 15, anchor: 'middle', fill: C.ink });
        return { s, h: 100 };
      },
      (y) => row(y, [
        { kicker: 'TEXTS', title: 'Three from Anthology Part 2', body: 'At least one poetry text and one prose text', fill: C.panel },
        { kicker: 'FOCUS', title: 'One focus across all three', body: 'Setting, character(s), event(s) or theme(s)', fill: C.panel },
        { kicker: 'LENGTH', title: 'About 1200 words', body: 'Advisory; no penalty for exceeding it', fill: C.panel },
      ], { gap: 15 }),
      (y) => {
        let s = panel(30, y, 840, 120, C.ink, C.ink) + T(54, y + 32, 'SUGGESTED TASK FORMAT', { size: 15, weight: 700, fill: C.teal });
        s += `<text x="54" y="${y + 68}" font-size="19" fill="${C.panel}" font-style="italic" xml:space="preserve">Discuss how the writers use language and structure to present <tspan fill="${C.mustard}" font-weight="700">[focus]</tspan></text>`;
        s += `<text x="54" y="${y + 98}" font-size="19" fill="${C.panel}" font-style="italic" xml:space="preserve">in <tspan fill="${C.mustard}" font-weight="700">[text 1]</tspan>, <tspan fill="${C.mustard}" font-weight="700">[text 2]</tspan> and <tspan fill="${C.mustard}" font-weight="700">[text 3]</tspan>.</text>`;
        return { s, h: 120 };
      },
    ]),
    'Assignment A is 30 marks: 12 for AO1 and 18 for AO2, which is 60%. It uses three Anthology Part 2 texts including at least one poem and one prose text, one focus such as setting, character, event or theme, and about 1200 words. The suggested task asks how the writers use language and structure to present the focus in the three texts.',
    'Three texts, one focus, about 1200 words; AO2 carries 60% of the marks.',
    '## What the specification requires');
}

// 02 Choosing a focus
{
  add('02-choosing-a-focus',
    compose('Test your focus', [
      (y) => steps(y, [
        { title: 'Is it central in each text?', body: 'At least two or three moments in every text where the focus matters' },
        { title: 'Do the writers present it differently?', body: 'Something to discuss beyond “all three show it”' },
        { title: 'Do the texts use different methods?', body: 'Form, viewpoint, structure: range for AO2' },
      ], { size: 17 }),
      (y) => table(y, [{ w: 230, head: 'Weak focus', hfill: C.rust }, { w: 250, head: 'Why' }, { w: 360, head: 'Stronger version', hfill: C.tealDark }], [
        [{ text: '“Feelings”', weight: 700 }, 'Too vague to argue', { text: '“Moments of private realisation”', fill: C.tealLight, weight: 700 }],
        [{ text: '“War”', weight: 700 }, 'Fits few texts', { text: '“Violence and its aftermath”', fill: C.tealLight, weight: 700 }],
        [{ text: '“Women”', weight: 700 }, 'Topic, not idea', { text: '“The pressure of other people’s expectations”', fill: C.tealLight, weight: 700 }],
      ], { size: 17, firstFill: false, minRow: 56 }),
      (y) => note(y, 'Narrow enough to argue, broad enough to fit all three texts.', '', { align: 'middle' }),
    ]),
    'Three tests for a focus: is it central in each text, do the writers present it differently, and do the texts use different methods? Weak focuses are improved: “Feelings” becomes “Moments of private realisation”, “War” becomes “Violence and its aftermath”, and “Women” becomes “The pressure of other people’s expectations”.',
    'A good focus is narrow enough to argue and broad enough for all three texts.',
    '## Choosing a trio and a focus');
}

// 03 Mark levels
{
  add('03-mark-levels',
    compose('How the levels step up', [
      (y) => table(y, [{ w: 120, head: 'Level' }, { w: 330, head: 'AO1 (12 marks)', hfill: C.tealDark }, { w: 390, head: 'AO2 (18 marks)', hfill: C.olive }], [
        [{ text: 'Level 5', fill: C.mustard }, { text: 'AO1 has four levels', italic: true, ink: C.muted, fill: C.panel }, { text: ['“Subtle and discriminating selection”; “perceptive analysis”', '15–18'], fill: C.cream }],
        [{ text: 'Level 4', fill: C.cream }, { text: ['“Detailed and persuasive selection”; “discriminating use of supporting quotations”; “perceptive interpretation”', '10–12'] }, { text: ['“Makes a detailed exploration of the effects”', '11–14'] }],
        [{ text: 'Level 3', fill: C.tealLight }, { text: ['“Clear and relevant selection”; “relevant interpretation”', '7–9'] }, { text: ['“Makes clear explanations of the effects of language and structure”', '7–10'] }],
      ], { size: 17 }),
      (y) => row(y, [
        { title: 'AO2 is 60% of the marks', body: 'Most of each paragraph should analyse methods.', fill: C.cream, edge: C.olive },
        { title: 'A textual reference can be a moment', body: 'A direct quotation, or a precise reference to a specific moment or event: useful for prose.', fill: C.tealLight, edge: C.tealDark },
      ]),
    ]),
    'A table of levels 3 to 5. AO1 runs from “clear and relevant selection” at Level 3 (7–9) to “perceptive interpretation” at Level 4 (10–12), its top level. AO2 runs from “clear explanations” at Level 3 (7–10) through “detailed exploration” at Level 4 (11–14) to “perceptive analysis” at Level 5 (15–18).',
    'The top levels reward perceptive interpretation and analysis.',
    '## How the marks work');
}

// 04 Two structures
{
  const blk = (x, y, w, lab, f) => `<rect x="${x}" y="${y}" width="${w}" height="34" rx="7" fill="${f}" stroke="${C.ink}" stroke-width="1.8"/>` + T(x + w / 2, y + 23, lab, { size: 15, weight: 700, anchor: 'middle' });
  const F = [C.cream, C.tealLight, C.teal];
  add('04-one-essay-two-structures',
    compose('One essay, not three', [
      (y) => {
        let s = panel(30, y, 405, 330, C.panel, C.tealDark) + T(54, y + 38, 'Integrated (by idea)', { size: 21, weight: 700 });
        ['Aspect 1', 'Aspect 2', 'Aspect 3'].forEach((a, i) => {
          const yy = y + 62 + i * 70;
          s += T(54, yy + 22, a, { size: 16, weight: 700, fill: C.muted });
          ['Text 1', 'Text 2', 'Text 3'].forEach((t2, k) => { s += blk(140 + k * 92, yy, 86, t2, F[k]); });
        });
        s += para(54, y + 290, 'Makes connections visible; suits clear similarities and contrasts.', 360, { size: 16, fill: C.muted }).s;
        s += panel(465, y, 405, 330, C.panel, C.olive) + T(489, y + 38, 'Sequenced with links', { size: 21, weight: 700 });
        ['Text 1', 'Text 2', 'Text 3'].forEach((t2, i) => {
          const yy = y + 62 + i * 70;
          s += blk(500, yy, 250, t2 + ' section', F[i]);
          if (i < 2) s += path(`M760,${yy + 17} C800,${yy + 17} 800,${yy + 87} 756,${yy + 87}`, { stroke: C.olive, w: 2.5, extra: 'marker-end="url(#ahO)"' });
        });
        s += T(812, y + 120, 'link', { size: 15, fill: C.olive, weight: 600 }) + T(812, y + 190, 'link', { size: 15, fill: C.olive, weight: 600 });
        s += para(489, y + 290, 'Each section links back and points forward; suits very different methods.', 360, { size: 16, fill: C.muted }).s;
        return { s, h: 330 };
      },
      (y) => row(y, [
        { kicker: 'OPEN WITH', title: 'A thesis', body: 'Name the focus and make a claim about how the writers present it.', fill: C.cream, edge: C.olive, kfill: C.olive },
        { kicker: 'CLOSE WITH', title: 'A judgement', body: 'What the three texts, taken together, suggest.', fill: C.cream, edge: C.olive, kfill: C.olive },
      ]),
    ]),
    'Two essay structures. Integrated by idea: each paragraph takes one aspect and discusses two or three texts within it. Sequenced with links: one section per text, each linking back to the previous one and pointing forward. Either opens with a thesis and closes with a judgement about what the three texts suggest together.',
    'Integrated or sequenced, the essay needs a thesis and links throughout.',
    '## Building a line of argument');
}

// 05 Worked plan grid
{
  add('05-strangers-plan',
    compose('Worked plan: encounters with strangers', [
      (y) => {
        const s = panel(30, y, 840, 96, C.ink, C.ink) + T(54, y + 32, 'THESIS', { size: 15, weight: 700, fill: C.teal }) +
          para(54, y + 60, 'A brief meeting with a stranger becomes a moment of connection that the setting threatens; the writers differ in whether that connection lasts.', 790, { size: 17, fill: C.panel }).s;
        return { s, h: 96 };
      },
      (y) => table(y, [{ w: 150, head: 'Paragraph' }, { w: 230, head: '“The Bright Lights of Sarajevo” (poem)' }, { w: 230, head: '“Significant Cigarettes” (prose)' }, { w: 230, head: '“An Unknown Girl” (poem)' }], [
        ['1 Setting as threat', 'The besieged city at night', 'The long coach journey far from home', 'The crowded evening bazaar'],
        ['2 How the meeting is shaped', 'Darkness and light', 'Hesitant, awkward conversation in close third person', 'Present-tense physical closeness as the henna is applied'],
        ['3 Identity', { text: 'In all three: each stranger helps define the speaker or character', span: 3, anchor: 'middle', italic: true }],
        [{ text: '4 Endings', fill: C.cream }, { text: 'Hope', fill: C.cream }, { text: 'Uncertainty', fill: C.cream }, { text: 'Something that will fade', fill: C.cream }],
      ], { size: 16, hsize: 16 }),
      (y) => note(y, 'Conclusion: encounters with strangers as fragile but meaningful.', 'Paragraph 4 compares endings across all three texts (AO2) and interprets what each encounter means (AO1).'),
    ]),
    'A plan grid for the trio “The Bright Lights of Sarajevo”, “Significant Cigarettes” and “An Unknown Girl”. Paragraphs cover setting as threat, how the meeting is shaped, identity, and endings: hope in Harrison, uncertainty in Tremain and something that will fade in Alvi. The conclusion presents the encounters as fragile but meaningful.',
    'Plan by idea so every paragraph compares the three texts.',
    '## Worked example');
}

// 06 Drafting rules
{
  add('06-drafting-within-rules',
    compose('Drafting within the rules', [
      (y) => {
        const st = [['Draft', 'you write it independently', C.panel, C.panelEdge], ['Teacher', 'may suggest general improvements', C.tealLight, C.tealDark], ['You', 'make the corrections and update the work', C.cream, C.olive], ['Marked', 'must not be rewritten after marking', C.mustard, C.ink]];
        const w = 180, gap = 40; let s = '';
        st.forEach(([t1, d, f, e], i) => {
          const x = 30 + i * (w + gap);
          s += card(x, y, w, { title: t1, body: d, fill: f, edge: e, bfill: f === C.mustard ? C.ink : C.muted, align: 'middle', minH: 150, vcenter: true, tsize: 21, size: 16 }).s;
          if (i < 3) s += arrow(x + w + 5, y + 75, x + w + gap - 5, y + 75, { w: 3.5 });
        });
        return { s, h: 150 };
      },
      (y) => {
        const r = row(y + 36, [
          { kicker: 'JOB 1', title: 'Check the focus', body: 'Every paragraph answers it', tsize: 18, size: 16 },
          { kicker: 'JOB 2', title: 'Replace retelling', body: 'with analysis', tsize: 18, size: 16 },
          { kicker: 'JOB 3', title: 'Close reading in each text', body: 'At least one detailed moment per text', tsize: 18, size: 16 },
        ], { gap: 15 });
        return { s: T(450, y + 20, 'Use the draft stage for three jobs', { size: 20, weight: 700, anchor: 'middle' }) + r.s, h: r.h + 36 };
      },
      (y) => note(y, 'Work independently, acknowledge any sources and sign the authentication sheet.', 'Teachers are told to watch for essays derived from the internet or AI.'),
    ]),
    'Four stages: you write the draft independently, the teacher may suggest general improvements, you make the corrections, and once marked the work must not be rewritten. The draft stage has three jobs: check every paragraph answers the focus, replace retelling with analysis, and include close reading in each text.',
    'The teacher may advise; you make every change, before marking.',
    '## Drafting within the rules');
}
