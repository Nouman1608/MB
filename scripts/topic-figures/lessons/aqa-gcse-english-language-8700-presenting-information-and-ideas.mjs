import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-language-8700-presenting-information-and-ideas';
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

// 01 Grade ladder for presenting
{
  const G = [
    ['Distinction', ['Sophisticated ideas with a sophisticated repertoire of vocabulary', 'An effective range of strategies to engage the audience', 'Achieves the purpose'], C.mustard, C.ink],
    ['Merit', ['Challenging ideas with a range of vocabulary', 'Clear, appropriate structure that meets the audience’s needs', 'Achieves the purpose'], C.cream, C.olive],
    ['Pass', ['Straightforward ideas, information or feelings', 'An attempt to organise and structure', 'An attempt to meet the audience’s needs'], C.tealLight, C.tealDark],
  ];
  add('01-presenting-grade-ladder',
    compose('How the presenting criteria step up', [
      (y) => {
        const cols = [{ w: 170, head: 'Grade' }, { w: 240, head: 'Ideas and vocabulary' }, { w: 220, head: 'Organisation' }, { w: 210, head: 'Audience and purpose' }];
        return table(y, cols, G.map(([g, cells, f, e]) => [{ text: g, fill: f, size: 20 }, ...cells.map((c) => ({ text: c, fill: g === 'Distinction' ? C.cream : C.panel }))]), { size: 17 });
      },
      (y) => {
        let s = panel(30, y, 840, 70, C.ink, C.ink) + T(450, y + 31, 'For any grade: be audible and use spoken Standard English', { size: 19, weight: 700, anchor: 'middle', fill: C.panel }) +
          T(450, y + 56, 'Competency basis: you must meet every criterion for a grade to be awarded it', { size: 16, anchor: 'middle', fill: C.teal });
        return { s, h: 70 };
      },
    ]),
    'A table of the three grades for presenting. Pass: straightforward ideas, an attempt to organise, an attempt to meet the audience’s needs. Merit: challenging ideas with a range of vocabulary, clear structure, achieves the purpose. Distinction: sophisticated ideas and vocabulary, an effective range of engagement strategies, achieves the purpose. Every grade needs audibility and spoken Standard English.',
    'Every criterion for a grade must be met; challenging and sophisticated ideas need depth.',
    '## What the criteria reward');
}

// 02 Flat topic to topic with depth
{
  const pairs = [
    ['My favourite football club', 'Should football clubs be owned by their fans?'],
    ['Climate change', 'What can one town realistically do about climate change?'],
    ['Social media', 'Does social media make teenagers more or less lonely?'],
    ['My holiday in Italy', 'What I learned about my own town by living somewhere else for a month'],
  ];
  add('02-flat-topic-to-depth',
    compose('Turn a subject into a question or a claim', [
      (y) => {
        let s = T(175, y + 18, 'Flat topic: a list of facts', { size: 18, weight: 700, anchor: 'middle', fill: C.muted }) + T(620, y + 18, 'Topic with depth: something to weigh', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
        let cy = y + 36;
        pairs.forEach(([a, b]) => {
          const c2 = card(390, cy, 480, { title: b, tsize: 18, fill: C.cream, edge: C.olive, pad: 16 });
          const c1 = card(30, cy, 290, { title: a, tsize: 18, minH: c2.h, vcenter: true, pad: 16, tfill: C.muted });
          s += c1.s + c2.s + arrow(326, cy + c2.h / 2, 384, cy + c2.h / 2, { w: 3.5 });
          cy += c2.h + 14;
        });
        return { s, h: cy - y - 14 };
      },
      (y) => note(y, 'The second column gives you something to explain, weigh and argue.', 'That is where challenging ideas come from.', { align: 'middle' }),
    ]),
    'Four flat topics become topics with depth: my favourite football club becomes “Should football clubs be owned by their fans?”; climate change becomes what one town can realistically do; social media becomes whether it makes teenagers more or less lonely; a holiday in Italy becomes what living elsewhere taught me about my own town.',
    'A question or claim gives a topic room for challenging ideas.',
    '## Choosing a topic with room to grow');
}

// 03 Selecting information: three filters
{
  add('03-three-filters',
    compose('Research more than you need, then cut hard', [
      (y) => {
        let s = '';
        // funnel
        s += `<path d="M110,${y} L790,${y} L600,${y + 300} L300,${y + 300} Z" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5" stroke-linejoin="round"/>`;
        const qs = [['1', 'Does it serve my purpose?', 'inform, explain, argue or persuade'], ['2', 'Will my audience understand it', 'without a long explanation?'], ['3', 'Is it memorable when heard once?', 'listeners cannot reread']];
        qs.forEach(([n, q, d], i) => {
          const yy = y + 40 + i * 90;
          s += T(450, yy + 6, n + '. ' + q, { size: 18, weight: 700, anchor: 'middle' }) + T(450, yy + 30, d, { size: 16, fill: C.muted, anchor: 'middle' });
          if (i < 2) s += `<line x1="${150 + i * 74}" y1="${yy + 56}" x2="${750 - i * 74}" y2="${yy + 56}" stroke="${C.tealDark}" stroke-width="2" stroke-dasharray="7 6"/>`;
        });
        s += arrow(450, y + 304, 450, y + 346, { w: 4 });
        s += chip(450, y + 352, 'what goes into the talk', { anchor: 'middle', fill: C.mustard, size: 18 }).s;
        // cut items
        s += T(40, y + 150, 'cut', { size: 18, weight: 700, fill: C.rust }) + arrow(110, y + 156, 60, y + 175, { color: C.rust, marker: 'ahR', w: 3 });
        s += T(860, y + 150, 'cut', { size: 18, weight: 700, fill: C.rust, anchor: 'end' }) + arrow(790, y + 156, 840, y + 175, { color: C.rust, marker: 'ahR', w: 3 });
        return { s, h: 386 };
      },
      (y) => row(y, [
        { title: 'One vivid example often beats three statistics', body: 'when it is heard only once.', fill: C.cream, edge: C.olive },
        { title: 'Keep a note of your sources', body: 'so that you can answer questions about your information.' },
      ]),
    ]),
    'A funnel with three filters: does the information serve my purpose, will my audience understand it without a long explanation, and is it memorable when heard once? What passes goes into the talk; the rest is cut. One vivid example often beats three statistics, and sources are noted for questions.',
    'Keep only what serves the purpose, suits the audience and sticks when heard once.',
    '## Selecting information');
}

// 04 Organising for listeners
{
  add('04-organising-for-listeners',
    compose('Make the structure audible', [
      (y) => {
        const shapes = [
          ['Problem and solution', ['problem', 'solution']],
          ['Claim, reasons, counter-argument', ['claim', 'reasons', 'counter']],
          ['Past, present, future', ['past', 'present', 'future']],
          ['Two options compared', ['option A', 'option B']],
          ['Myth-busting', ['myth', 'correction']],
        ];
        let s = T(450, y + 20, '1. Choose a shape', { size: 21, weight: 700, anchor: 'middle' });
        const w = 156, gap = 15;
        shapes.forEach(([n, parts], i) => {
          const x = 30 + i * (w + gap), yy = y + 40;
          s += panel(x, yy, w, 210);
          s += para(x + w / 2, yy + 32, n, w - 20, { size: 16, weight: 700, anchor: 'middle' }).s;
          parts.forEach((p, k) => {
            const by = yy + 88 + k * 40;
            s += `<rect x="${x + 18}" y="${by}" width="${w - 36}" height="30" rx="6" fill="${k === parts.length - 1 ? C.cream : C.tealLight}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(x + w / 2, by + 21, p, { size: 15, anchor: 'middle' });
          });
        });
        return { s, h: 250 };
      },
      (y) => {
        const r = row(y + 36, [
          { title: 'Signpost aloud', body: ['“I want to look at three questions”', '“That brings me to the second”'], fill: C.tealLight, edge: C.tealDark },
          { title: 'Repeat key ideas', body: 'more than in writing: repetition aids memory when heard' },
          { title: 'Summarise before concluding', body: 'so latecomers to your argument can catch up', fill: C.cream, edge: C.olive },
        ], { gap: 15 });
        return { s: T(450, y + 20, '2. Keep the listener on track', { size: 21, weight: 700, anchor: 'middle' }) + r.s, h: r.h + 36 };
      },
      (y) => note(y, 'A reader can flick back; a listener cannot.', 'So spoken structure must be more visible than written structure.', { align: 'middle' }),
    ]),
    'Five shapes for a talk: problem and solution; claim, reasons and counter-argument; past, present and future; two options compared; and myth-busting. Then three ways to keep listeners on track: signpost aloud, such as “That brings me to the second”, repeat key ideas, and summarise before concluding.',
    'Listeners cannot reread, so choose a shape and signpost it aloud.',
    '## Organising for listeners');
}

// 05 Written vs spoken style
{
  add('05-written-vs-spoken',
    compose('Written style and spoken style', [
      (y) => table(y, [{ w: 420, head: 'Written', hfill: C.muted }, { w: 420, head: 'Spoken', hfill: C.tealDark }], [
        [{ text: 'Long sentences with several clauses', weight: 400 }, { text: 'Shorter sentences, one idea at a time', fill: C.tealLight }],
        [{ text: '“It could be argued that…”', weight: 400, italic: true }, { text: '“Some people say…”', fill: C.tealLight, italic: true }],
        [{ text: 'Parenthesis inside sentences', weight: 400 }, { text: 'Pauses and separate sentences', fill: C.tealLight }],
        [{ text: 'Headings and paragraphs show structure', weight: 400 }, { text: 'Signposting phrases show structure', fill: C.tealLight }],
      ], { size: 18, minRow: 62, firstFill: false }),
      (y) => note(y, 'Formal enough for the setting, but still sounding like speech', 'not like an essay being read aloud.', { align: 'middle' }),
    ]),
    'A two-column table. Written style uses long sentences with several clauses, phrases like “It could be argued that…”, parenthesis and headings. Spoken style uses shorter sentences with one idea at a time, “Some people say…”, pauses and separate sentences, and signposting phrases.',
    'Keep a formal register, but write for the ear, not the page.',
    '## Spoken style is different from written style');
}

// 06 Same topic, different audiences
{
  add('06-same-topic-different-audience',
    compose('One topic, two audiences', [
      (y) => {
        let s = chip(450, y, 'A talk on volunteering', { anchor: 'middle', fill: C.mustard, size: 20, h: 44 }).s;
        s += path(`M400,${y + 44} C400,${y + 74} 250,${y + 64} 250,${y + 94}`, { w: 3, extra: 'marker-end="url(#ah)"' }) + path(`M500,${y + 44} C500,${y + 74} 650,${y + 64} 650,${y + 94}`, { w: 3, extra: 'marker-end="url(#ah)"' });
        const r = row(y + 104, [
          { kicker: 'AUDIENCE', title: 'Year 7', body: ['Concrete examples', 'A clear invitation'], bullets: true, fill: C.tealLight, edge: C.tealDark, tsize: 22, size: 18 },
          { kicker: 'AUDIENCE', title: 'Governors', body: ['Evidence of benefit', 'A measured tone'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 22, size: 18 },
        ], { gap: 60 });
        return { s: s + r.s, h: r.h + 104 };
      },
      (y) => {
        let s = panel(30, y, 840, 130);
        s += T(54, y + 38, 'Only the teacher listening? Imagine a wider audience:', { size: 19, weight: 700 });
        let x = 54; ['a radio interview', 'a pitch to a panel', 'a speech to a named group'].forEach((w) => { const c = chip(x, y + 64, w, { fill: C.tealLight, edge: C.tealDark, size: 17 }); s += c.s; x += c.w + 14; });
        return { s, h: 130 };
      },
    ]),
    'The same talk on volunteering splits two ways. For Year 7 it needs concrete examples and a clear invitation; for governors it needs evidence of benefit and a measured tone. If only the teacher is listening, choose a form such as a radio interview, a pitch to a panel or a speech to a named group.',
    'The audience changes the examples, the evidence and the tone.',
    '## Planning for different purposes and audiences');
}

// 07 Worked plan: car ban talk
{
  add('07-car-ban-talk-plan',
    compose('Planning a talk that aims high', [
      (y) => {
        const s0 = panel(30, y, 840, 60, C.ink, C.ink) + T(450, y + 38, '“Should our town ban cars from the high street on Saturdays?”', { size: 19, weight: 700, anchor: 'middle', fill: C.panel });
        return { s: s0, h: 60 };
      },
      (y) => {
        const list = [
          ['Opening hook', 'The high street at noon on a Saturday from a pedestrian’s view, then the question', 'description + question'],
          ['Signpost', '“I’ll look at who gains, who loses, and what a fair compromise might be.”', 'signposting'],
          ['Who gains', 'Pedestrians, cafés with outdoor seating, families; one vivid example', 'vivid example'],
          ['Who loses', 'Disabled drivers, delivery firms, older residents who drive in: treated seriously', 'balanced argument'],
          ['Compromise', 'A ban with exemptions and a trial period that answers both sides', ''],
          ['Summary and close', 'Return to the opening image, reimagined, and state a clear view', 'returning image'],
        ];
        let s = '', cy = y; const x = 100, w = 560;
        list.forEach(([ti, d, tag], i) => {
          const c = card(x, cy, w, { title: ti, body: d, size: 16, tsize: 19, pad: 14, fill: i === 0 || i === 5 ? C.cream : C.panel, edge: i === 0 || i === 5 ? C.olive : C.panelEdge });
          s += c.s + badge(60, cy + c.h / 2, 20, String(i + 1), i === 0 || i === 5 ? C.mustard : C.cream);
          if (tag) s += chip(680, cy + c.h / 2 - 16, tag, { w: 190, fill: C.tealLight, edge: C.tealDark, size: 15 }).s;
          list[i].mid = cy + c.h / 2; cy += c.h + 10;
        });
        s = path(`M60,${list[0].mid + 22} L60,${list[5].mid - 22}`, { stroke: C.panelEdge, w: 4 }) + s;
        return { s, h: cy - y - 10 };
      },
      (y) => note(y, 'Why it aims high', 'It weighs competing interests rather than listing benefits, it is signposted, and its strategies vary. Notes: cue cards with keywords only.'),
    ]),
    'Six numbered steps for a talk on banning cars from the high street on Saturdays: an opening hook describing the street, a spoken signpost, who gains, who loses, a compromise with exemptions and a trial period, and a close that returns to the opening image. Most steps are tagged with the engagement strategy they use.',
    'Challenging ideas, a signposted structure and varied strategies.',
    '## Worked example: planning a Merit-to-Distinction talk');
}
