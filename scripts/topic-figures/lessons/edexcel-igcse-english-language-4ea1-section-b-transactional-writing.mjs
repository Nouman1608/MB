import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-english-language-4ea1-section-b-transactional-writing';
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

// 01 AO4 and AO5 split
{
  add('01-ao4-ao5-split',
    compose('Section B: 45 marks for one task', [
      (y) => {
        const x0 = 70, W = 760, u = W / 45;
        let s = `<rect x="${x0}" y="${y}" width="${27 * u}" height="70" rx="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 13.5 * u, y + 32, 'AO4: 27 marks', { size: 20, weight: 700, anchor: 'middle' }) + T(x0 + 13.5 * u, y + 56, 'form, tone and register for purpose and audience', { size: 15, anchor: 'middle' });
        s += `<rect x="${x0 + 27 * u}" y="${y}" width="${18 * u}" height="70" rx="10" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 36 * u, y + 32, 'AO5: 18 marks', { size: 20, weight: 700, anchor: 'middle' }) + T(x0 + 36 * u, y + 56, 'vocabulary, sentences, accuracy', { size: 15, anchor: 'middle', fill: C.tealDark });
        return { s, h: 70 };
      },
      (y) => row(y, [
        { kicker: 'CHOICE', title: 'One task from two prompts', body: 'Each gives an audience, form or purpose', fill: C.panel },
        { kicker: 'TIME', title: 'About 45 minutes', body: 'After about 1 hour 30 minutes on Section A, in a 2 hour 15 minute paper', fill: C.panel },
      ]),
      (y) => note(y, 'AO4 carries more marks, but AO5 is judged on every sentence.', 'A strong idea expressed carelessly still loses marks.', { align: 'middle' }),
    ]),
    'Section B is 45 marks for one task chosen from two prompts: 27 for AO4 (adapting form, tone and register for purpose and audience) and 18 for AO5 (vocabulary, sentences and accuracy). It has about 45 minutes, after Section A, in a 2 hour 15 minute paper.',
    'AO4 is 27 marks, but AO5 counts in every sentence.',
    '## What Section B covers');
}

// 02 Same issue, two voices
{
  add('02-same-issue-two-voices',
    compose('Same issue, different voice', [
      (y) => {
        let s = chip(450, y, 'Issue: school food', { anchor: 'middle', fill: C.mustard, size: 20, h: 44 }).s;
        s += path(`M400,${y + 44} C400,${y + 74} 232,${y + 64} 232,${y + 92}`, { w: 3, extra: 'marker-end="url(#ah)"' }) + path(`M500,${y + 44} C500,${y + 74} 668,${y + 64} 668,${y + 92}`, { w: 3, extra: 'marker-end="url(#ah)"' });
        const r = row(y + 100, [
          { kicker: 'SPEECH TO CLASSMATES', title: 'Lively and direct', body: ['Audience: classmates', 'Form: speech'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 22, size: 17 },
          { kicker: 'LETTER TO A COUNCIL', title: 'Formal and courteous', body: ['Audience: a council', 'Form: letter'], bullets: true, fill: C.tealLight, edge: C.tealDark, tsize: 22, size: 17 },
        ], { gap: 60 });
        return { s: s + r.s, h: r.h + 100 };
      },
      (y) => note(y, 'The content may overlap; the voice must not.', 'Underline purpose, audience and form in the prompt: together they decide your register.', { align: 'middle' }),
    ]),
    'One issue, school food, written two ways: a speech to classmates can be lively and direct, while a letter to a council needs a formal, courteous tone. Purpose, audience and form together decide the register.',
    'Purpose, audience and form decide the register.',
    '## Reading the prompt: purpose, audience, form');
}

// 03 Six forms and their conventions
{
  const forms = [
    ['Article', 'Headline; optional subheading or standfirst; a hooking opening; one point per paragraph; a closing thought', 'Lively for a student magazine, measured for a broadsheet'],
    ['Speech', 'Greeting; signposting (“First…”, “Finally…”); triples and questions; a memorable close and thanks', 'Spoken rhythm; direct address throughout'],
    ['Letter', 'Greeting and sign-off; reason for writing early; one issue per paragraph; a requested action at the end', 'Formal unless the prompt sets a personal relationship'],
    ['Guide', 'Title; clear sections or subheadings; practical advice, often in the second person; logical order', 'Helpful, confident, clear'],
    ['Review', 'Title naming what is reviewed; brief context; balanced judgement with evidence; a final verdict', 'Personal but informed'],
    ['Text of a leaflet', 'Title; subheadings; short paragraphs; direct address; a clear call to action or contact point', 'Concise; do not draw pictures or boxes: only words are marked'],
  ];
  add('03-six-forms',
    compose('Six forms and their conventions', [
      (y) => {
        const w = 410, gap = 20; let s = '', cy = y;
        for (let r = 0; r < 3; r++) {
          const pair = forms.slice(r * 2, r * 2 + 2);
          const hs = pair.map(([n, c, reg]) => card(0, 0, w, { title: n, body: [c, reg], size: 16, tsize: 20, gap: 8 }).h);
          const H = Math.max(...hs);
          pair.forEach(([n, c, reg], k) => {
            const x = 30 + k * (w + gap);
            s += card(x, cy, w, { title: n, body: c, size: 16, tsize: 20, minH: H }).s;
            const lines = wrap(reg, w - 40, 15, 600);
            s += lines.map((l, j) => T(x + 20, cy + H - 14 - (lines.length - 1 - j) * 19, l, { size: 15, weight: 600, fill: C.tealDark })).join('');
          });
          cy += H + 14;
        }
        return { s, h: cy - y - 14 };
      },
      (y) => note(y, 'Form features help only when they serve the purpose.', 'A headline and three subheadings do not rescue an article whose paragraphs do not develop an argument.'),
    ]),
    'Six cards, one per form: article, speech, letter, guide, review and text of a leaflet. Each lists the conventions examiners expect, such as a headline for an article, signposting for a speech and a requested action at the end of a letter, with a register note in teal.',
    'Use each form’s conventions, but only in service of the purpose.',
    '## The six forms and their conventions');
}

// 04 Five-minute plan
{
  add('04-five-minute-plan',
    compose('Planning in five minutes', [
      (y) => {
        let s = ''; let x = 30;
        ['persuade', 'Year 10 students', 'speech'].forEach((v, i) => { const c = chip(x, y, ['Purpose: ', 'Audience: ', 'Form: '][i] + v, { fill: C.tealLight, edge: C.tealDark, size: 16 }); s += c.s; x += c.w + 12; });
        return { s, h: 34 };
      },
      (y) => {
        const r = steps(y, [
          { n: 'O', title: 'Opening', body: 'A striking scene or question that connects with the audience', hl: true },
          { n: '1', title: 'Point 1', body: 'The main reason, with an example from school life' },
          { n: '2', title: 'Point 2', body: 'A second reason, with a contrast (before / after)' },
          { n: 'C', title: 'Counter', body: 'Acknowledge the objection, then answer it' },
          { n: '3', title: 'Point 3', body: 'What the audience can do' },
          { n: 'E', title: 'Close', body: 'Return to the opening image; a short, direct final line', hl: true },
        ], { size: 16, tsize: 18, gap: 8, pad: 12, x: 30, w: 720 });
        const s = path(`M752,${y + r.h - 30} C830,${y + r.h - 30} 830,${y + 30} 756,${y + 30}`, { stroke: C.olive, w: 3, extra: 'marker-end="url(#ahO)"' }) + T(860, y + r.h / 2 + 6, 'echo', { size: 15, weight: 700, fill: C.olive, anchor: 'middle' });
        return { s: r.s + s, h: r.h };
      },
      (y) => note(y, 'Plan the ending before you begin.', 'Running out of time without a conclusion loses AO4 marks for structure and purpose.'),
    ], { gap: 16 }),
    'A plan for a persuasive speech to Year 10 students: an opening scene or question, two reasons with an example and a contrast, a counter-argument answered, what the audience can do, and a close that returns to the opening image. The ending is planned before writing begins.',
    'Five to seven points, with the ending decided first.',
    '## Planning in five minutes');
}

// 05 Annotated model opening
{
  add('05-litter-speech-opening',
    compose('Annotated opening: a litter-picking speech', [
      (y) => {
        const parts = [
          ['“Good morning, everyone. Look at your shoes.”', 'Audience and form: a greeting and a direct instruction create a spoken, inclusive voice (AO4)', C.tealLight, C.tealDark],
          ['“…each of us decided it was someone else’s problem. I did too.”', 'Purpose: admitting shared guilt persuades without lecturing (AO4)', C.cream, C.olive],
          ['“This morning I want to ask for one hour a week from you, and I want to explain why…”', 'Structure: signposts the argument and sets a clear request (AO4)', C.tealLight, C.tealDark],
        ];
        let s = '', cy = y;
        parts.forEach(([q, n, f, e]) => {
          const a = card(30, cy, 420, { title: q, tsize: 17, pad: 14, italic: true });
          const b = card(480, cy, 390, { body: n, size: 16, pad: 14, fill: f, edge: e, bfill: C.ink });
          const H = Math.max(a.h, b.h);
          s += card(30, cy, 420, { title: q, tsize: 17, pad: 14, minH: H, vcenter: true }).s + card(480, cy, 390, { body: n, size: 16, pad: 14, fill: f, edge: e, bfill: C.ink, minH: H, vcenter: true }).s;
          s += `<line x1="450" y1="${cy + H / 2}" x2="480" y2="${cy + H / 2}" stroke="${C.ink}" stroke-width="2.5"/>`;
          cy += H + 12;
        });
        return { s, h: cy - y - 12 };
      },
      (y) => {
        let s = panel(30, y, 840, 120, C.panel, C.panelEdge) + T(54, y + 34, 'AO5: deliberate sentence variety', { size: 19, weight: 700 });
        let x = 54;
        [['a short imperative', 'Look at your shoes.'], ['a long cumulative sentence', 'Somewhere on the walk…'], ['a three-word sentence', 'I did too.']].forEach(([k, q]) => {
          const c = chip(x, y + 54, k, { fill: C.mustard, size: 16 });
          s += c.s + T(x + 4, y + 106, q, { size: 15, italic: true, fill: C.muted });
          x += Math.max(c.w, 230) + 26;
        });
        return { s, h: 120 };
      },
    ]),
    'Three parts of the litter-picking speech opening, each annotated: the greeting and “Look at your shoes” create a spoken, inclusive voice; “I did too” admits shared guilt and persuades without lecturing; the last sentence signposts the argument and sets a request. A short imperative, a long cumulative sentence and a three-word sentence give deliberate variety.',
    'Each sentence of the opening does a job for audience, purpose or structure.',
    '## Annotated model opening');
}

// 06 AO5 under time pressure
{
  add('06-ao5-under-pressure',
    compose('AO5 under time pressure', [
      (y) => table(y, [{ w: 230, head: 'Habit' }, { w: 610, head: 'How' }], [
        ['Vary sentences deliberately', 'A short sentence after two long ones creates emphasis: use it for your strongest point'],
        ['Precise vocabulary', '“Neglected” is more exact than “very bad”; “ubiquitous” is not better if it is used wrongly'],
        ['Paragraph for meaning', 'A new paragraph for each new point, time shift or change of speaker'],
        ['Punctuation with a job', 'Colons introduce explanations; semicolons balance related clauses; dashes mark an aside'],
        [{ text: 'Three minutes to proofread', fill: C.cream }, { text: 'Missing words, comma splices, homophones: their/there, affect/effect', fill: C.cream }],
      ], { size: 17 }),
      (y) => note(y, 'Accuracy matters more than variety.', 'Use a range of punctuation, but only where you can use it correctly.', { align: 'middle' }),
    ]),
    'Five AO5 habits: vary sentence lengths deliberately, choose precise rather than inflated vocabulary (“neglected” rather than “very bad”), paragraph for each new point, use colons, semicolons and dashes for their jobs, and keep three minutes to proofread for missing words, comma splices and homophones.',
    'Precise, accurate and deliberate beats long and showy.',
    '## Building AO5 under time pressure');
}
