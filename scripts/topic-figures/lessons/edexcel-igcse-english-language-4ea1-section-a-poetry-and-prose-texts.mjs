import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-english-language-4ea1-section-a-poetry-and-prose-texts';
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

// 01 Where Section A sits in Component 2
{
  add('01-section-a-in-component-2',
    compose('Section A in Component 2', [
      (y) => {
        const x0 = 70, W = 760;
        let s = T(450, y + 20, 'Component 2: 1 hour 30 minutes, 60 marks', { size: 20, weight: 700, anchor: 'middle' });
        s += `<rect x="${x0}" y="${y + 40}" width="${W / 2}" height="70" rx="10" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + W / 4, y + 70, 'Section A: about 45 minutes', { size: 18, weight: 700, anchor: 'middle' }) + T(x0 + W / 4, y + 96, '30 marks: one essay', { size: 16, anchor: 'middle' });
        s += `<rect x="${x0 + W / 2}" y="${y + 40}" width="${W / 2}" height="70" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 3 * W / 4, y + 70, 'Section B: 45 minutes', { size: 18, weight: 700, anchor: 'middle', fill: C.muted }) + T(x0 + 3 * W / 4, y + 96, '30 marks', { size: 16, anchor: 'middle', fill: C.muted });
        // AO split under section A
        const u = (W / 2) / 30;
        s += `<rect x="${x0}" y="${y + 126}" width="${12 * u}" height="44" rx="8" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + T(x0 + 6 * u, y + 154, 'AO1: 12', { size: 17, weight: 700, anchor: 'middle' });
        s += `<rect x="${x0 + 12 * u}" y="${y + 126}" width="${18 * u}" height="44" rx="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + T(x0 + 21 * u, y + 154, 'AO2: 18', { size: 17, weight: 700, anchor: 'middle' });
        s += T(x0 + W / 2 + 24, y + 145, 'AO2 is 18 of 30: analysis of', { size: 16, fill: C.muted }) + T(x0 + W / 2 + 24, y + 166, 'methods drives every paragraph', { size: 16, fill: C.muted });
        return { s, h: 172 };
      },
      (y) => row(y, [
        { kicker: 'THE TEXT', title: 'One poem or prose text from Anthology Part 2', body: 'Ten possible texts, known in advance; the named text is printed in the exam.', fill: C.tealLight, edge: C.tealDark },
        { kicker: 'AO1 + AO2', title: 'Interpret and analyse', body: ['AO1: the ideas you select and the interpretation you build, not retelling', 'AO2: how linguistic and structural devices achieve effects'], fill: C.cream, edge: C.olive, kfill: C.olive, gap: 6 },
      ]),
    ]),
    'Component 2 lasts 1 hour 30 minutes for 60 marks. Section A takes about 45 minutes for one 30-mark essay, split 12 marks for AO1 and 18 for AO2, on one poem or prose text from Anthology Part 2 that is printed in the exam. Section B is the other 45 minutes and 30 marks.',
    'Section A is half of Component 2, and AO2 is most of Section A.',
    '## What Section A covers');
}

// 02 Revision card
{
  add('02-revision-card',
    compose('One revision card per text', [
      (y) => {
        let s = `<rect x="80" y="${y + 8}" width="760" height="420" rx="16" fill="${C.panelEdge}"/>`;
        s += `<rect x="60" y="${y}" width="760" height="420" rx="16" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
        s += `<rect x="60" y="${y}" width="760" height="56" rx="16" fill="${C.ink}"/><rect x="60" y="${y + 36}" width="760" height="20" fill="${C.ink}"/>` + T(84, y + 37, 'Text title', { size: 20, weight: 700, fill: C.panel }) + T(796, y + 37, 'poem or prose', { size: 16, fill: C.teal, anchor: 'end' });
        const H = [['Situation', 'who, where, what happens, in two sentences'], ['Viewpoint and voice', 'first person, third person, a speaker addressing someone'], ['Structure', 'how it opens, where it turns, how it ends, how time moves'], ['Three key methods', 'each with a short reference'], ['Ideas and perspectives', 'what the writer seems to suggest, plus one alternative reading']];
        H.forEach(([h, d], i) => {
          const yy = y + 74 + i * 70;
          s += badge(100, yy + 22, 18, String(i + 1), i === 3 ? C.mustard : C.cream) + T(132, yy + 18, h, { size: 19, weight: 700 }) + T(132, yy + 42, d, { size: 16, fill: C.muted });
          if (i < 4) s += `<line x1="84" y1="${yy + 60}" x2="796" y2="${yy + 60}" stroke="${C.panelEdge}" stroke-width="1.5" stroke-dasharray="5 5"/>`;
        });
        return { s, h: 430 };
      },
      (y) => note(y, 'No need to memorise long quotations: the text is printed.', 'But know where the key moments are, so you can find them quickly.', { align: 'middle' }),
    ]),
    'A revision card with five headings: situation in two sentences; viewpoint and voice; structure (opening, turn, ending, time); three key methods with short references; and ideas and perspectives with one alternative reading.',
    'Five headings per text, and know where the key moments are.',
    '## Preparing each text');
}

// 03 Poem and prose AO2 toolkits
{
  add('03-poem-prose-toolkits',
    compose('What to look for: poem and prose', [
      (y) => {
        const P = [['Form and stanza shape', 'regular: control; irregular: disorder'], ['Line breaks and enjambment', 'momentum, or a pause before a key word'], ['Caesura', 'a moment of shock or reflection'], ['Repetition and refrain', 'emphasis, insistence or defiance'], ['Rhyme and rhythm', 'confident beat or hesitant, broken rhythm'], ['Voice and address', 'who speaks, to whom; tone changes']];
        const Q = [['Narrative viewpoint', 'first person: intimacy, possible unreliability; third: distance or irony'], ['Pacing', 'short sentences slow a key moment; summary speeds past years'], ['Structure', 'time shift, delayed revelation, twist or open ending'], ['Dialogue', 'what characters say, and avoid saying'], ['Setting and symbolism', 'objects or places that carry meaning beyond themselves']];
        const col = (x, title, items, fill, edge) => {
          let s = '', cy = y + 56;
          items.forEach(([h, d]) => {
            const c = card(x, cy, 405, { title: h, body: d, tsize: 18, size: 16, pad: 14, fill: C.panel, edge });
            s += c.s; cy += c.h + 10;
          });
          return { s: `<rect x="${x}" y="${y}" width="405" height="44" rx="10" fill="${fill}"/>` + T(x + 202, y + 30, title, { size: 20, weight: 700, anchor: 'middle', fill: C.panel }) + s, h: cy - y - 10 };
        };
        const a = col(30, 'Poem', P, C.tealDark, C.tealDark), b = col(465, 'Prose', Q, C.olive, C.olive);
        return { s: a.s + b.s, h: Math.max(a.h, b.h) };
      },
    ]),
    'Two columns of AO2 features. For a poem: form and stanza shape, line breaks and enjambment, caesura, repetition and refrain, rhyme and rhythm, and voice and address. For prose: narrative viewpoint, pacing, structure, dialogue, and setting and symbolism, each with its typical effect.',
    'Poems and prose share methods, but each has its own toolkit.',
    '## Reading a poem for AO2');
}

// 04 The Necklace plan along the story
{
  add('04-necklace-plan',
    compose('Planning “The Necklace”: pride and its cost', [
      (y) => {
        const s0 = panel(30, y, 840, 104, C.ink, C.ink) + T(54, y + 32, 'THESIS', { size: 15, weight: 700, fill: C.teal }) +
          para(54, y + 60, 'Pride is a trap that costs Mathilde far more than the necklace was worth, and the structure makes the reader feel that cost.', 790, { size: 17, fill: C.panel }).s;
        return { s: s0, h: 104 };
      },
      (y) => steps(y, [
        { title: 'Opening portrait', body: 'Mathilde’s dreams set against her real home: contrast' },
        { title: 'The ball', body: 'Her moment of success; why choosing the diamond necklace matters' },
        { title: 'The loss, and the secret', body: 'Not telling Madame Forestier: pride over honesty' },
        { title: 'Ten years compressed into a few lines', body: 'Plain summary replaces dreamy detail; placed straight after the proud choice', hl: true },
        { title: 'The final revelation', body: 'Structure reframes everything that came before' },
      ], { size: 16, tsize: 18, gap: 8, pad: 13 }),
      (y) => note(y, 'Paragraph 4 earns credit for', 'an interpretation (AO1), analysis of pacing and placement, and a comment on narrative style (AO2), all linked to the focus.'),
    ], { gap: 18 }),
    'A five-paragraph plan that follows the story: the opening contrast between Mathilde’s dreams and her home, the ball, the loss and her secret, ten years compressed into plain summary straight after the proud choice, and the final revelation that reframes the story.',
    'Plan in story order so the essay tracks the structure to the ending.',
    '## Worked example: a prose question');
}

// 05 Disabled: now and then
{
  add('05-disabled-now-and-then',
    compose('“Disabled”: loss shown as a contrast', [
      (y) => {
        const top = y + 10, hi = y + 92, lo = y + 238, bot = y + 340;
        let s = `<rect x="30" y="${top}" width="840" height="120" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
        s += `<rect x="30" y="${top + 180}" width="840" height="150" rx="14" fill="${C.ink}"/>`;
        s += T(50, top + 30, 'REMEMBERED PAST: light, crowds and admiration', { size: 17, weight: 700, fill: C.olive });
        s += T(50, bot - 14, 'NOW: alone in a wheelchair, waiting for dark', { size: 17, weight: 700, fill: C.panel });
        const xs = [90, 270, 450, 630, 810];
        let d = `M${xs[0]},${lo}`;
        for (let i = 1; i < xs.length; i++) { const yy = i % 2 ? hi : lo; const py = i % 2 ? lo : hi; d += ` C${xs[i - 1] + 60},${py} ${xs[i] - 60},${yy} ${xs[i]},${yy}`; }
        s += path(d, { stroke: C.mustard, w: 6 });
        [1, 3].forEach((i) => { s += `<circle cx="${xs[i]}" cy="${hi}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`; });
        [0, 2, 4].forEach((i) => { s += `<circle cx="${xs[i]}" cy="${lo}" r="9" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`; });
        s += T(xs[2], lo + 32, 'fresh loss', { size: 15, anchor: 'middle', fill: C.teal, weight: 600 }) + T(xs[4] - 10, lo + 32, '“Why don’t they come?”', { size: 15, anchor: 'end', fill: C.mustard, weight: 700 }) + T(xs[3] - 40, lo + 32, '', {});
        s += T(xs[0], lo + 32, 'opening', { size: 15, anchor: 'middle', fill: C.teal, weight: 600 });
        return { s, h: 340 };
      },
      (y) => note(y, 'Ending: the repeated question “Why don’t they come?”', 'Helplessness rather than resolution: his dependence on others is the final form of what the war has taken.'),
    ]),
    'The poem moves between a dark present, where the man sits alone in a wheelchair waiting for dark, and a remembered past full of light, crowds and admiration. Each return to the present feels like a fresh loss, and the poem ends on the repeated question “Why don’t they come?”.',
    'Owen shows loss through the movement between now and then.',
    '## Worked example: a poetry paragraph');
}

// 06 Building the essay in 45 minutes
{
  add('06-building-the-essay',
    compose('Building a 45-minute essay', [
      (y) => {
        const parts = [
          ['Introduction', 'Two or three sentences: your thesis on the focus. No biography, no summary.', C.tealLight, C.tealDark],
          ['Body: three or four paragraphs', 'One method or one moment each, moving through the text: the opening, a turning point, the ending.', C.panel, C.panelEdge],
          ['Conclusion', 'What the text suggests overall, perhaps with an alternative reading.', C.tealLight, C.tealDark],
        ];
        return stack(y, parts.map(([t1, b, f, e]) => ({ title: t1, body: b, fill: f, edge: e, tsize: 19, size: 17 })), { arrows: true, gap: 34 });
      },
      (y) => {
        let s = T(450, y + 20, 'Every body paragraph', { size: 19, weight: 700, anchor: 'middle' });
        const p = ['Point on the focus', 'Short reference', 'Method', 'Effect on reader', 'Link to question'];
        const w = 150, gap = 22; let x = 30;
        p.forEach((t1, i) => {
          s += `<rect x="${x}" y="${y + 36}" width="${w}" height="60" rx="10" fill="${i === 2 ? C.mustard : C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
          s += para(x + w / 2, y + 62, t1, w - 20, { size: 16, weight: 700, anchor: 'middle' }).s;
          if (i < 4) s += arrow(x + w + 3, y + 66, x + w + gap - 3, y + 66, { w: 3 });
          x += w + gap;
        });
        return { s, h: 100 };
      },
      (y) => note(y, 'Before planning, reread the printed text.', 'Mark three or four moments that answer the focus and order them by position. Do not overrun: Section B needs its 45 minutes.'),
    ]),
    'An essay of an introduction with a thesis, three or four body paragraphs moving through the opening, a turning point and the ending, and a short conclusion. Every body paragraph runs: point on the focus, short reference, method, effect on the reader, link to the question.',
    'Track the text from opening to ending, one method or moment per paragraph.',
    '## Building the essay');
}
