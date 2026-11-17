import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-language-8700-spoken-standard-english';
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

// 01 General criteria gate
{
  add('01-general-criteria-gate',
    compose('Spoken Standard English: the gate to every grade', [
      (y) => row(y, [
        { kicker: 'GENERAL CRITERION 1', title: 'Be intelligible', body: 'The audience can understand you: pace, clarity and audibility matter as well as grammar.', fill: C.tealLight, edge: C.tealDark },
        { kicker: 'GENERAL CRITERION 2', title: 'Generally use language appropriate to the formal setting', body: '“Generally”: overall control across the presentation, not a single slip.', fill: C.tealLight, edge: C.tealDark },
      ]),
      (y) => {
        let s = arrow(232, y, 232, y + 40, { w: 3.5 }) + arrow(668, y, 668, y + 40, { w: 3.5 });
        s += `<rect x="150" y="${y + 46}" width="600" height="58" rx="12" fill="${C.ink}"/>` + T(450, y + 82, 'Both met: the competency gate opens', { size: 20, weight: 700, anchor: 'middle', fill: C.panel });
        s += arrow(450, y + 108, 450, y + 146, { w: 3.5 });
        let x = 450 - (3 * 200 + 2 * 20) / 2;
        [['Pass', C.tealLight], ['Merit', C.cream], ['Distinction', C.mustard]].forEach(([g, f]) => { s += chip(x, y + 154, g, { w: 200, h: 44, fill: f, size: 19 }).s; x += 220; });
        return { s, h: 200 };
      },
      (y) => note(y, 'Assessed by AO9', 'Use spoken Standard English effectively in speeches and presentations, “whenever and wherever appropriate”.', { align: 'middle' }),
    ]),
    'Two general criteria, being intelligible and generally using language appropriate to the formal setting, must both be met before any of Pass, Merit or Distinction can be awarded. AO9 assesses using spoken Standard English effectively in speeches and presentations.',
    'Intelligibility and generally appropriate language are needed for any grade.',
    '## What the assessment requires');
}

// 02 Standard English is not accent, not formality
{
  add('02-grammar-vs-register',
    compose('Standard English is grammar and vocabulary', [
      (y) => {
        const X0 = 210, Y0 = y + 66, W = 320, H = 150;
        let s = T(X0 + W, y + 22, 'Grammar', { size: 19, weight: 700, anchor: 'middle' });
        s += T(X0 + W / 2, y + 52, 'Standard', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(X0 + 1.5 * W, y + 52, 'Non-standard', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
        s += T(X0 - 16, Y0 + H / 2 + 6, 'Formal', { size: 17, weight: 700, anchor: 'end', fill: C.olive }) + T(X0 - 16, Y0 + 1.5 * H + 6, 'Informal', { size: 17, weight: 700, anchor: 'end', fill: C.muted });
        s += `<text x="70" y="${Y0 + H}" font-size="19" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 70 ${Y0 + H})">Register</text>`;
        const cell = (cx, cy, fill, edge, title, body) => `<rect x="${cx}" y="${cy}" width="${W - 10}" height="${H - 10}" rx="12" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` +
          para(cx + (W - 10) / 2, cy + 40, title, W - 40, { size: 19, weight: 700, anchor: 'middle' }).s + para(cx + (W - 10) / 2, cy + 96, body, W - 40, { size: 16, anchor: 'middle', fill: C.muted }).s;
        s += cell(X0, Y0, C.mustard, C.ink, 'What a formal presentation needs', 'Standard grammar and a suitably formal register');
        s += cell(X0 + W, Y0, C.panel, C.rust, '“We was invited”', 'non-standard, however formally it is delivered');
        s += cell(X0, Y0 + H, C.tealLight, C.tealDark, '“I’m knackered”', 'grammatically standard, but informal');
        s += cell(X0 + W, Y0 + H, C.panel, C.panelEdge, 'Dialect with friends', 'regional dialects have their own consistent grammar');
        return { s, h: 66 + 2 * H - 10 };
      },
      (y) => row(y, [
        { title: 'Not an accent', body: 'Standard English can be spoken in any accent, from Glasgow to Cornwall to Lagos.', fill: C.tealLight, edge: C.tealDark },
        { title: 'Not “better” English', body: 'Code-switching: choosing the variety the situation calls for.', fill: C.cream, edge: C.olive },
      ]),
    ]),
    'A grid with grammar (standard or non-standard) across and register (formal or informal) down. A formal presentation needs standard grammar and formal register. “I’m knackered” is standard but informal; “We was invited” is non-standard however formally it is delivered. Standard English can be spoken in any accent, and choosing the right variety is code-switching.',
    'A formal talk needs Standard English grammar and a formal register, in any accent.',
    '## What Standard English is, and is not');
}

// 03 Non-standard to Standard
{
  add('03-non-standard-to-standard',
    compose('Non-standard forms and Standard English', [
      (y) => table(y, [{ w: 230, head: 'Area' }, { w: 305, head: 'Non-standard', hfill: C.rust }, { w: 305, head: 'Standard English', hfill: C.tealDark }], [
        ['Past tense and participle', '“I seen it”, “we done the survey”', { text: '“I saw it”, “we did the survey”', fill: C.tealLight }],
        ['Subject-verb agreement', '“we was”, “he don’t”, “they was”', { text: '“we were”, “he doesn’t”, “they were”', fill: C.tealLight }],
        ['Progressive forms', '“I was sat at the back”, “she was stood there”', { text: '“I was sitting at the back”, “she was standing there”', fill: C.tealLight }],
        ['Negatives', '“it don’t make no difference”, “ain’t”', { text: '“it doesn’t make any difference”, “isn’t”, “hasn’t”', fill: C.tealLight }],
        ['Demonstratives', '“them results”', { text: '“those results”', fill: C.tealLight }],
        ['Pronouns', '“me and him went”, “hisself”, “theirselves”', { text: '“he and I went”, “himself”, “themselves”', fill: C.tealLight }],
        ['Adverbs', '“it went real quick”', { text: '“it went really quickly”', fill: C.tealLight }],
        ['Relative pronouns', '“the man what helped us”', { text: '“the man who helped us”', fill: C.tealLight }],
        ['Tag questions', '“It’s important, innit?”', { text: '“It’s important, isn’t it?”', fill: C.tealLight }],
      ], { size: 16, firstFill: false }),
    ]),
    'A table of nine areas with non-standard examples and Standard English equivalents, for example “we was” to “we were”, “I was sat” to “I was sitting”, “them results” to “those results”, “the man what helped us” to “the man who helped us” and “innit” to “isn’t it”.',
    'In a formal presentation, use the Standard English form.',
    '## Common non-standard forms in speech');
}

// 04 Hypercorrection
{
  add('04-hypercorrection',
    compose('Hypercorrection: trying too hard', [
      (y) => {
        const ex = [
          ['“between you and I”', '“between you and me”', 'after a preposition, use the object form'],
          ['“please send it to myself”', '“please send it to me”', '“myself” is reflexive or emphatic: “I did it myself”'],
          ['“whom is responsible?”', '“who is responsible?”', '“whom” is not used as a subject'],
        ];
        let s = T(195, y + 20, 'Overcorrected', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + T(620, y + 20, 'Standard English', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
        let cy = y + 36;
        ex.forEach(([a, b, why]) => {
          const rc = card(410, cy, 460, { title: b, body: why, tsize: 19, size: 16, minH: 92, fill: C.tealLight, edge: C.tealDark });
          s += card(30, cy, 330, { title: a, tsize: 19, minH: rc.h, vcenter: true, edge: C.rust, align: 'middle' }).s;
          s += arrow(366, cy + rc.h / 2, 404, cy + rc.h / 2, { w: 3.5 }) + rc.s;
          cy += rc.h + 14;
        });
        return { s, h: cy - y - 14 };
      },
      (y) => {
        let s = panel(30, y, 840, 150, C.cream, C.olive) + T(54, y + 38, 'Quick test: remove the other person', { size: 20, weight: 700 });
        const st = (yy, parts) => `<text x="54" y="${yy}" font-size="19" fill="${C.ink}" xml:space="preserve">${parts.map(([t2, cut]) => cut ? `<tspan fill="${C.rust}" text-decoration="line-through">${X(t2)}</tspan>` : X(t2)).join('')}</text>`;
        s += st(y + 80, [['between ', 0], ['you and', 1], [' me', 0]]) + arrow(250, y + 74, 300, y + 74, { w: 3 }) + T(316, y + 80, '“between… me” sounds natural', { size: 19, weight: 600, fill: C.tealDark });
        s += st(y + 124, [['he and', 1], [' I went', 0]]) + arrow(250, y + 118, 300, y + 118, { w: 3 }) + T(316, y + 124, '“I went” sounds natural', { size: 19, weight: 600, fill: C.tealDark });
        return { s, h: 150 };
      },
    ]),
    'Three overcorrections and their Standard English forms: “between you and I” becomes “between you and me”, “send it to myself” becomes “send it to me”, and “whom is responsible?” becomes “who is responsible?”. A quick test removes the other person: “between… me” and “I went” sound natural.',
    'Overcorrecting to sound formal produces errors too.',
    '## Hypercorrection: the opposite error');
}

// 05 Still speech: acceptable vs undermining
{
  add('05-still-speech',
    compose('Spoken Standard English is still speech', [
      (y) => row(y, [
        { kicker: 'ACCEPTABLE IN FORMAL SPEECH', title: 'Natural features', body: ['Contractions in moderation: “it’s”, “we’ll”', 'Discourse markers: “Right, let’s begin”, “Now, the second point”', 'Occasional self-correction: “the first, sorry, the second chart”'], bullets: true, fill: C.tealLight, edge: C.tealDark, size: 17, gap: 10 },
        { kicker: 'UNDERMINES AO9', title: 'Persistent problems', body: ['Persistent non-standard grammar', 'Heavy fillers that crowd the content: “like”, “basically”, “you know”', 'Slang that the formal setting does not suit'], bullets: true, fill: C.panel, edge: C.rust, kfill: C.rust, size: 17, gap: 10 },
      ], { gap: 24 }),
      (y) => {
        let s = T(450, y + 20, 'Keeping control under pressure, especially in the questions afterwards', { size: 18, weight: 700, anchor: 'middle' });
        const r = row(y + 36, [
          { title: 'Rehearse aloud', body: 'and record yourself', size: 16, tsize: 18, align: 'middle' },
          { title: 'Know your habits', body: 'practise “we were”', size: 16, tsize: 18, align: 'middle' },
          { title: 'Pause, don’t fill', body: 'silence sounds confident', size: 16, tsize: 18, align: 'middle' },
          { title: 'Slow down', body: 'when nervous', size: 16, tsize: 18, align: 'middle' },
        ], { gap: 14 });
        return { s: s + r.s, h: r.h + 36 };
      },
    ]),
    'Acceptable in formal speech: contractions in moderation, discourse markers such as “Right, let’s begin”, and occasional self-correction. Undermining AO9: persistent non-standard grammar, heavy fillers such as “like” and “basically”, and slang. To keep control: rehearse aloud, know your habits, pause instead of filling, and slow down.',
    'Sound like a confident speaker, not a textbook.',
    '## Spoken Standard English is still speech');
}

// 06 Worked example: revising a transcript
{
  add('06-revising-transcript',
    compose('Revising a spoken passage', [
      (y) => table(y, [{ w: 300, head: 'Original', hfill: C.rust }, { w: 300, head: 'Revised', hfill: C.tealDark }, { w: 240, head: 'What changed' }], [
        [{ text: '“me and Leah done”', weight: 400, italic: true }, { text: '“Leah and I carried out”', italic: true, fill: C.tealLight }, 'Pronoun order and form; standard past tense'],
        [{ text: '“we was”', weight: 400, italic: true }, { text: '“we were”', italic: true, fill: C.tealLight }, 'Agreement'],
        [{ text: '“don’t never… no more”', weight: 400, italic: true }, { text: '“no longer… at all”', italic: true, fill: C.tealLight }, 'Double negatives removed'],
        [{ text: '“Them benches is all broke”', weight: 400, italic: true }, { text: '“the benches are broken”', italic: true, fill: C.tealLight }, 'Demonstrative, agreement, past participle'],
        [{ text: '“basically”, “yeah”, “well”, “loads”, “innit”', weight: 400, italic: true }, { text: 'removed or replaced', fill: C.tealLight }, 'Fillers, slang and a tag question'],
      ], { size: 17, firstFill: false }),
      (y) => note(y, 'The speaker’s accent stays exactly as it was.', 'The transcript cannot show it, and nothing in the revision changes it.', { align: 'middle' }),
    ]),
    'A table of changes to the survey transcript: “me and Leah done” becomes “Leah and I carried out”, “we was” becomes “we were”, “don’t never… no more” becomes “no longer… at all”, “Them benches is all broke” becomes “the benches are broken”, and fillers, slang and “innit” are removed. The accent stays the same.',
    'Fix the grammar and vocabulary; keep the accent.',
    '## Worked example: revising a spoken passage');
}
