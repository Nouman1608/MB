import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-english-language-4ea1-section-b-imaginative-writing';
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

// 01 What Section B covers
{
  add('01-section-b-overview',
    compose('Section B: one imaginative piece', [
      (y) => {
        let s = '';
        [0, 1, 2].forEach((i) => {
          const x = 130 + i * 230;
          s += `<rect x="${x}" y="${y}" width="180" height="60" rx="10" fill="${i === 1 ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="2"/>` + T(x + 90, y + 37, `Prompt ${i + 1}`, { size: 18, weight: 700, anchor: 'middle' });
        });
        s += arrow(450, y + 64, 450, y + 100, { w: 3.5 }) + T(470, y + 88, 'choose one', { size: 16, fill: C.muted, weight: 600 });
        s += `<rect x="250" y="${y + 104}" width="400" height="56" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(450, y + 139, 'About 45 minutes · 30 marks', { size: 19, weight: 700, anchor: 'middle' });
        return { s, h: 160 };
      },
      (y) => row(y, [
        { kicker: 'AO4 · 18 MARKS', title: 'Communicate effectively and imaginatively', body: 'Adapt form, tone and register for specific purposes and audiences.', fill: C.cream, edge: C.olive, kfill: C.olive },
        { kicker: 'AO5 · 12 MARKS', title: 'Write clearly and accurately', body: 'Range of vocabulary and sentence structures, paragraphing, accurate spelling, grammar and punctuation.', fill: C.tealLight, edge: C.tealDark },
      ]),
      (y) => note(y, 'Reading feeds writing', 'Use what you have learned about the writer’s craft in your reading of fiction to inspire and influence your own writing.', { align: 'middle' }),
    ]),
    'Choose one of three prompts and write one imaginative piece in about 45 minutes for 30 marks: 18 for AO4, communicating effectively and imaginatively, and 12 for AO5, writing clearly with a range of vocabulary and sentences and accurate technical skills.',
    'One prompt from three, 45 minutes, 30 marks: AO4 18, AO5 12.',
    '## What Section B covers');
}

// 02 Choosing a prompt
{
  add('02-choosing-a-prompt',
    compose('Take a minute to choose the prompt', [
      (y) => steps(y, [
        { title: 'A single, clear situation?', body: 'Can you picture it in under a minute?' },
        { title: 'A turning point and an ending?', body: 'Can you see where it changes and how it finishes?' },
        { title: 'A voice you write well in?', body: 'First-person reflection, close third person, or description' },
      ], { size: 17 }),
      (y) => row(y, [
        { title: 'Small situation, written with precision', body: 'usually scores higher', fill: C.tealLight, edge: C.tealDark, align: 'middle', tsize: 19 },
        { title: 'Large plot, rushed', body: 'the most dramatic prompt is often the hardest to control in 45 minutes', fill: C.panel, edge: C.rust, align: 'middle', tsize: 19 },
      ], { gap: 24 }),
      (y) => row(y, [
        { kicker: 'NARRATIVE', title: 'A character, a situation, a change', body: 'If it asks for a story, make sure something changes.', fill: C.panel },
        { kicker: 'DESCRIPTIVE', title: 'Place, moment or person through detail and mood', body: 'If it asks you to describe, keep plot minimal.', fill: C.panel },
      ]),
    ]),
    'Three tests for a prompt: can you picture a single clear situation, can you see a turning point and an ending, and does it suit a voice you write well in? A small situation written with precision usually beats a large plot rushed. Narrative needs a change; description keeps plot minimal.',
    'Choose the prompt you can control, not the most dramatic one.',
    '## Choosing your prompt');
}

// 03 Five shapes
{
  const mini = (x, y, kind) => {
    let s = '';
    const L = x + 20, R = x + 210;
    if (kind === 'zoom') s += `<path d="M${L},${y} L${R},${y} L${x + 125},${y + 70} L${x + 105},${y + 70} Z" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/><circle cx="${x + 115}" cy="${y + 78}" r="6" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
    if (kind === 'medias') s += `<line x1="${L}" y1="${y + 40}" x2="${R}" y2="${y + 40}" stroke="${C.panelEdge}" stroke-width="6" stroke-linecap="round"/><circle cx="${x + 115}" cy="${y + 40}" r="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + path(`M${x + 105},${y + 26} C${x + 80},${y + 6} ${x + 60},${y + 10} ${x + 50},${y + 28}`, { stroke: C.olive, w: 2.5, extra: 'marker-end="url(#ahO)"' }) + T(x + 115, y + 80, 'start here', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
    if (kind === 'cyclical') s += `<circle cx="${x + 115}" cy="${y + 40}" r="34" fill="none" stroke="${C.olive}" stroke-width="3" stroke-dasharray="160 54" marker-end="url(#ahO)"/><circle cx="${x + 115}" cy="${y + 6}" r="7" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
    if (kind === 'shift') s += `<rect x="${L}" y="${y + 40}" width="${R - L}" height="20" rx="6" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/><rect x="${x + 85}" y="${y + 6}" width="60" height="22" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + path(`M${x + 115},${y + 28} L${x + 115},${y + 40}`, { w: 2 }) + T(x + 115, y + 80, 'one memory', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
    if (kind === 'delay') { for (let k = 0; k < 5; k++) s += `<rect x="${L + k * 38}" y="${y + 30}" width="30" height="26" rx="5" fill="${k === 4 ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="2"/>`; s += T(L + 4 * 38 + 15, y + 49, '!', { size: 18, weight: 700, anchor: 'middle' }) + T(x + 115, y + 80, 'key fact withheld', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 }); }
    return s;
  };
  const shapes = [
    ['zoom', 'Single moment, zooming in', 'Wide, then one detail or decision', 'focus and a natural climax'],
    ['medias', 'In medias res', 'Start mid-action, then a little background', 'instant engagement'],
    ['cyclical', 'Cyclical', 'End with the opening image, changed in meaning', 'a satisfying, deliberate ending'],
    ['shift', 'Time shift', 'Present scene interrupted by one memory', 'depth without a long plot'],
    ['delay', 'Delayed revelation', 'Withhold one key fact until late', 'tension and a final shift'],
  ];
  add('03-five-shapes',
    compose('Shapes that work in 45 minutes', [
      (y) => {
        let s = ''; const w = 268, gap = 18, H = 268;
        shapes.forEach(([k, n, how, why], i) => {
          const r = i < 3 ? 0 : 1, c = i < 3 ? i : i - 3;
          const x = r === 0 ? 30 + c * (w + gap) : 30 + (w + gap) / 2 + c * (w + gap), yy = y + r * (H + 16);
          s += panel(x, yy, w, H) + T(x + 18, yy + 34, n, { size: 18, weight: 700 }) + mini(x + 20, yy + 56, k);
          s += para(x + 18, yy + 172, how, w - 36, { size: 16 }).s + para(x + 18, yy + 222, 'Helps: ' + why, w - 36, { size: 15, fill: C.tealDark, weight: 600 }).s;
        });
        return { s, h: 2 * H + 16 };
      },
      (y) => note(y, 'Four to six paragraphs, each with a job', 'Establish, develop, turn, then resolve or deliberately leave open.', { align: 'middle' }),
    ]),
    'Five structural shapes with small diagrams: a single moment zooming from wide to one detail; in medias res, starting mid-action; cyclical, ending with the opening image changed in meaning; a time shift with one memory; and delayed revelation, withholding one key fact until late. Each piece needs four to six paragraphs with clear jobs.',
    'Pick one shape that gives a focus, a turn and an ending.',
    '## Structure: shapes that work in 45 minutes');
}

// 04 Worked plan
{
  add('04-phone-story-plan',
    compose('Worked plan: a phone ringing in an empty house', [
      (y) => {
        let s = ''; let x = 30;
        [['Shape', 'delayed revelation + cyclical'], ['Voice', 'first person, past tense, teenage narrator']].forEach(([k, v]) => {
          const c = chip(x, y, `${k}: ${v}`, { fill: C.tealLight, edge: C.tealDark, size: 16, weight: 600 }); s += c.s; x += c.w + 14;
        });
        return { s, h: 34 };
      },
      (y) => steps(y, [
        { title: 'The phone ringing', body: 'The narrator outside, key in hand, hesitating' },
        { title: 'The house described through absence', body: 'A removal van has just left' },
        { title: 'Memory', body: 'The last call on this phone, years ago' },
        { title: 'She answers', body: 'Silence, then a wrong number; she laughs, then cries', hl: true },
        { title: 'The phone off the hook on the bare floor', body: 'The ending echoes the opening' },
      ], { size: 16, tsize: 18, gap: 8, pad: 13 }),
      (y) => {
        return note(y, 'Model opening: “Eleven rings. Twelve.”', 'Fragments build tension; personification of the phone and the door reflects the narrator’s mood; “Mum used to say” hints at loss without explaining it.');
      },
    ], { gap: 16 }),
    'A five-paragraph plan using delayed revelation and a cyclical shape, in first person past tense: the phone ringing while the narrator hesitates, the house described through absence, a memory of the last call, answering to a wrong number, and the phone left off the hook so the ending echoes the opening.',
    'Plan shape, voice and ending in about four minutes.',
    '## Worked example');
}

// 05 Before and after
{
  add('05-weak-paragraph-improved',
    compose('Improving a weak paragraph', [
      (y) => card(30, y, 840, { kicker: 'BEFORE: TELLS', title: '“It was a dark and scary night and I was very scared. I walked down the road and it was very quiet and I heard a noise and I was even more scared.”', tsize: 18, edge: C.rust, kfill: C.rust }),
      (y) => card(30, y, 840, { kicker: 'AFTER: SHOWS', title: '“The road was quiet in the way that makes you listen harder. My footsteps sounded borrowed. Somewhere behind the hedge, something shifted its weight, and I discovered that I had stopped breathing.”', tsize: 18, fill: C.cream, edge: C.olive, kfill: C.olive }),
      (y) => table(y, [{ w: 300, head: 'Change' }, { w: 540, head: 'Example' }], [
        ['Repetition removed', '“scared” and “very” are gone'],
        ['Telling replaced by physical detail', '“I had stopped breathing”'],
        ['Sentence length varied', 'A short sentence between two longer ones'],
        ['An unusual image', '“borrowed” does the work of three adjectives'],
      ], { size: 17 }),
    ], { gap: 18 }),
    'A weak paragraph repeats “scared” and “very” and tells the reader how the narrator feels. The revision removes the repetition, shows fear through physical detail (“I had stopped breathing”), varies sentence length and uses the unusual image “borrowed”.',
    'Show feeling through detail, and let one precise word replace several.',
    '## Improving a weak paragraph');
}

// 06 Slowing the key moment
{
  add('06-slow-the-key-moment',
    compose('Slow time at the moment that matters', [
      (y) => {
        let s = panel(30, y, 840, 100, C.panel, C.rust) + T(54, y + 34, 'FAST', { size: 15, weight: 700, fill: C.rust });
        s += T(54, y + 70, '“I opened the letter and it said I had failed.”', { size: 19, italic: true });
        return { s, h: 100 };
      },
      (y) => {
        const st = [['Small physical steps', 'break the action down'], ['One sensory detail', ''], ['One thought', ''], ['Then the outcome', 'only now revealed']];
        const w = 186, gap = 32; let s = '';
        st.forEach(([t1, d], i) => {
          const x = 30 + i * (w + gap);
          s += card(x, y, w, { title: t1, body: d || ' ', align: 'middle', minH: 110, vcenter: true, tsize: 18, size: 16, fill: i === 3 ? C.mustard : C.cream, edge: i === 3 ? C.ink : C.olive }).s;
          if (i < 3) s += arrow(x + w + 4, y + 55, x + w + gap - 4, y + 55, { w: 3.5 });
        });
        return { s, h: 110 };
      },
      (y) => {
        // pace strip
        const segs = [[140, 'faster'], [140, 'faster'], [420, 'key moment: slowed'], [140, 'faster']];
        let x = 30, s = T(450, y + 20, 'Where the words go across the piece', { size: 18, weight: 700, anchor: 'middle' });
        segs.forEach(([w, l], i) => {
          s += `<rect x="${x}" y="${y + 36}" width="${w - 6}" height="48" rx="8" fill="${i === 2 ? C.mustard : C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + T(x + (w - 6) / 2, y + 66, l, { size: 16, weight: 700, anchor: 'middle' });
          x += w;
        });
        return { s, h: 88 };
      },
      (y) => note(y, 'The contrast shows deliberate control of pace, which AO4 rewards.', 'The reader’s attention is held exactly where the tension is highest.'),
    ]),
    'A fast version, “I opened the letter and it said I had failed”, is slowed in four steps: small physical steps, one sensory detail, one thought, then the outcome. A pace strip shows the key moment taking far more space than the faster paragraphs around it.',
    'Spend the most words where the tension is highest.',
    '## Slowing down the key moment');
}

// 07 Exam timing
{
  add('07-exam-timing',
    compose('45 minutes, planned', [
      (y) => {
        const x0 = 40, W = 820, u = W / 45;
        const seg = [[1, '1', 'choose', C.cream], [4.5, '4–5', 'plan shape, voice, ending', C.tealLight], [35, 'about 35', 'write, checking the time at each paragraph', C.teal], [3, '3', 'proofread', C.mustard]];
        let x = x0, s = '';
        seg.forEach(([m, l, d, f], i) => {
          const w = m * u;
          s += `<rect x="${x}" y="${y + 40}" width="${w}" height="60" rx="6" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
          if (w > 120) s += T(x + w / 2, y + 67, l + ' min', { size: 18, weight: 700, anchor: 'middle' }) + T(x + w / 2, y + 90, d, { size: 15, anchor: 'middle' });
          x += w;
        });
        // labels for narrow segments
        s += T(x0, y + 26, '1 min: choose', { size: 15, weight: 600 }) + path(`M${x0 + 0.5 * u},${y + 31} L${x0 + 0.5 * u},${y + 40}`, { w: 2 });
        s += T(x0 + 3.25 * u - 10, y + 130, '4–5 min: plan shape, voice and ending', { size: 15, weight: 600 }) + path(`M${x0 + 3.25 * u},${y + 101} L${x0 + 3.25 * u},${y + 114}`, { w: 2 });
        s += T(x0 + W, y + 130, '3 min: proofread', { size: 15, weight: 600, anchor: 'end' }) + path(`M${x0 + W - 1.5 * u},${y + 101} L${x0 + W - 1.5 * u},${y + 114}`, { w: 2 });
        return { s, h: 140 };
      },
      (y) => row(y, [
        { kicker: 'USEFUL', title: 'A prepared bank of techniques', body: 'Two opening styles, a way of slowing a key moment, a cyclical ending', fill: C.tealLight, edge: C.tealDark },
        { kicker: 'RISKY', title: 'A prepared story', body: 'It may not fit the prompt you are given.', fill: C.panel, edge: C.rust, kfill: C.rust },
      ]),
    ]),
    'A 45-minute bar: one minute to choose the prompt, four or five minutes to plan shape, voice and ending, about 35 minutes writing while checking the time at each paragraph, and three minutes proofreading. A prepared bank of techniques is useful; a prepared story is risky.',
    'Plan briefly, write for about 35 minutes, and keep three minutes to proofread.',
    '## Exam technique');
}
