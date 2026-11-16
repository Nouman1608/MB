import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-language-b-experiences';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (self-contained; house style from ../style.mjs only) ----
const GW = {
  r: '281,288,466,633,642,982,644,300,365,365,501,662,288,460,288,360,631,407,610,618,646,608,620,566,619,620,288,302,662,662,662,511,966,690,654,730,722,601,590,746,743,269,571,672,565,903,753,765,639,765,644,642,646,744,690,985,682,679,629,365,360,365,471,456,323,562,612,571,612,583,370,613,591,242,242,549,242,876,591,600,612,612,376,528,327,591,562,818,546,562,552,426,333,426,662',
  s: '252,321,523,644,650,1004,663,326,373,373,540,673,319,465,319,379,660,423,623,636,666,629,640,576,640,640,319,329,673,673,673,543,999,728,659,737,722,605,588,749,746,277,580,703,565,922,759,769,645,773,652,650,660,736,728,1020,720,713,652,373,379,373,481,469,351,574,624,583,624,591,389,625,612,262,262,569,262,900,612,609,624,624,397,549,353,612,587,839,569,588,566,455,359,455,673',
  b: '237,338,552,649,655,1016,672,339,377,377,559,679,334,468,334,388,674,431,630,646,676,639,649,582,651,649,334,343,679,679,679,560,1016,747,662,740,722,607,587,750,747,281,584,719,565,932,762,771,648,777,657,655,667,732,747,1038,738,731,664,377,388,377,487,476,365,581,630,588,630,596,398,632,623,271,271,580,271,913,623,613,630,630,407,560,366,623,600,850,580,602,573,469,372,469,679',
};
const GX = { '•': [562, 503, 474], '–': [500, 500, 500], '—': [1000, 1000, 1000], '’': [261, 294, 311], '‘': [261, 294, 311], '“': [440, 507, 540], '”': [440, 501, 532], '→': [954, 954, 954], '←': [954, 954, 954], '↔': [1341, 1341, 1341], '·': [288, 319, 334], '…': [864, 956, 1002], '×': [662, 673, 679], '✓': [884, 883, 882], '✗': [886, 884, 883] };
const GT = Object.fromEntries(Object.entries(GW).map(([k, v]) => [k, v.split(',').map(Number)]));
const wi = (weight) => (weight >= 700 ? 2 : weight >= 600 ? 1 : 0);
// Width in px of a plain string at a size and weight (Inter metrics).
function tw(s, size = 18, weight = 400) {
  const k = ['r', 's', 'b'][wi(weight)], tab = GT[k];
  let u = 0;
  for (const ch of String(s)) { const c = ch.codePointAt(0); u += c >= 32 && c < 127 ? tab[c - 32] : GX[ch] ? GX[ch][wi(weight)] : 600; }
  return (u * size) / 1000;
}
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
const WARN = [];
// Rich text: **bold** and *italic* markup. Returns tokens [{w: word, b, i}] with spaces between.
function toks(s, baseWeight) {
  const out = []; let b = false, it = false;
  for (const part of String(s).split(/(\*\*|\*)/)) {
    if (part === '**') { b = !b; continue; }
    if (part === '*') { it = !it; continue; }
    const words = part.split(/(\s+)/);
    for (const w of words) { if (w === '') continue; if (/^\s+$/.test(w)) out.push({ sp: true }); else out.push({ w, b: b || baseWeight >= 700 ? 700 : baseWeight, i: it }); }
  }
  return out;
}
// Wrap rich text into lines of token arrays.
function wrapRich(s, width, size, weight = 400) {
  const tk = toks(s, weight), lines = [[]]; let cur = 0, pendingSp = false;
  for (const k of tk) {
    if (k.sp) { pendingSp = true; continue; }
    const ww = tw(k.w, size, k.b), sp = lines[lines.length - 1].length && pendingSp ? tw(' ', size, weight) : 0;
    if (lines[lines.length - 1].length && cur + sp + ww > width) { lines.push([]); cur = 0; lines[lines.length - 1].push({ ...k, sp: false }); cur = ww; }
    else { lines[lines.length - 1].push({ ...k, sp: sp > 0 }); cur += sp + ww; }
    if (ww > width) WARN.push(`word too wide: "${k.w}" (${ww.toFixed(0)} > ${width.toFixed(0)})`);
    pendingSp = false;
  }
  return lines.filter((l) => l.length);
}
const lineW = (ln, size, weight) => ln.reduce((a, k) => a + tw(k.w, size, k.b) + (k.sp ? tw(' ', size, weight) : 0), 0);
function richLine(x, y, ln, o) {
  const { size = 18, weight = 400, fill = C.ink, anchor = 'start', italic = false } = o;
  const inner = ln.map((k) => {
    const txt = X(k.w), sp = k.sp ? ' ' : '';
    const attrs = (k.b !== weight ? ` font-weight="${k.b}"` : '') + (k.i && !italic ? ' font-style="italic"' : '') + (k.b > weight && o.bfill ? ` fill="${o.bfill}"` : '');
    return sp + (attrs ? `<tspan${attrs}>${txt}</tspan>` : txt);
  }).join('');
  return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}"${italic ? ' font-style="italic"' : ''}>${inner}</text>`;
}
// Paragraph: wrapped rich text. x = left (or centre if anchor middle, right if end). Returns {s,h,w}
function para(x, y, s, width, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32), weight = o.weight || 400;
  if (o.bullet) {
    const ind = size * 0.95, lines = wrapRich(s, width - ind, size, weight);
    return { s: T(x, y, o.bullet === true ? '•' : o.bullet, { size, weight: 700, fill: o.mfill || o.fill || C.ink }) + lines.map((l, i) => richLine(x + ind, y + i * lh, l, o)).join(''), h: lines.length * lh, w: width };
  }
  const lines = wrapRich(s, width, size, weight);
  return { s: lines.map((l, i) => richLine(x, y + i * lh, l, o)).join(''), h: lines.length * lh, w: Math.max(0, ...lines.map((l) => lineW(l, size, weight))) };
}
// Card: panel with optional kicker, title and body (string or array). Returns {s,h}
function card(x, y, w, o = {}) {
  const pad = o.pad ?? 20, ts = o.tsize ?? 20, bs = o.size ?? 17, mid = o.align === 'middle';
  const tx = mid ? x + w / 2 : x + pad + (o.indent || 0), anchor = mid ? 'middle' : 'start', iw = w - 2 * pad - (o.indent || 0);
  const measure = (y0) => {
    let cy = y0 + pad, inner = '';
    if (o.kicker) { inner += T(tx, cy + 12, o.kicker, { size: 15, weight: 700, anchor, fill: o.kfill || C.tealDark }); cy += 24; }
    if (o.title) { const p = para(tx, cy + ts * 0.78, o.title, iw, { size: ts, weight: 700, anchor, fill: o.tfill || C.ink, lh: Math.round(ts * 1.25) }); inner += p.s; cy += p.h; }
    if (o.body) {
      const items = Array.isArray(o.body) ? o.body : [o.body];
      if (o.title || o.kicker) cy += o.tgap ?? 7;
      items.forEach((it, i) => {
        const p = para(tx, cy + bs * 0.8, it, iw, { size: bs, anchor, fill: o.bfill || C.muted, bullet: o.bullets, weight: o.bweight, bfill: o.bbfill || C.ink, mfill: o.mfill });
        inner += p.s; cy += p.h + (i < items.length - 1 ? (o.gap ?? 5) : 0);
      });
    }
    return { inner, h: cy - y0 + pad - 4 };
  };
  let m = measure(y);
  const h = Math.max(o.minH || 0, m.h);
  if (o.vcenter && h > m.h) m = measure(y + (h - m.h) / 2);
  const box = o.nobox ? '' : panel(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge);
  return { s: box + (o.extra ? o.extra(x, y, w, h) : '') + m.inner, h };
}
// Row of n equal-height cards; optional arrows between. widths: optional array of fractions.
function row(y, items, o = {}) {
  const x0 = o.x ?? 30, W0 = o.w ?? 840, gap = o.gap ?? (o.arrows ? 46 : 18), n = items.length;
  const fr = o.fr || items.map(() => 1), tot = fr.reduce((a, b) => a + b, 0), avail = W0 - gap * (n - 1);
  const ws = fr.map((f) => (avail * f) / tot), xs = ws.map((_, i) => x0 + ws.slice(0, i).reduce((a, b) => a + b, 0) + gap * i);
  const h = Math.max(o.minH || 0, ...items.map((it, i) => card(xs[i], y, ws[i], { ...o.card, ...it }).h));
  let s = '';
  items.forEach((it, i) => {
    s += card(xs[i], y, ws[i], { ...o.card, ...it, minH: h, vcenter: o.vcenter ?? true }).s;
    if (o.arrows && i < n - 1) s += arrow(xs[i] + ws[i] + 6, y + h / 2, xs[i + 1] - 6, y + h / 2, { w: 3.5, color: o.acolor || C.ink, marker: o.amarker || 'ah' });
  });
  return { s, h, xs, ws };
}
// Grid: items laid out in rows of `cols` columns.
function grid(y, items, cols, o = {}) {
  let s = '', cy = y;
  for (let i = 0; i < items.length; i += cols) {
    const r = row(cy, items.slice(i, i + cols), { ...o, w: o.w ?? 840 });
    s += r.s; cy += r.h + (o.vgap ?? 18);
  }
  return { s, h: cy - y - (o.vgap ?? 18) };
}
// Vertical stack of full-width cards, optional arrows between.
function stack(y, items, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? (o.arrows ? 44 : 14);
  let s = '', cy = y;
  items.forEach((it, i) => {
    const c = card(x, cy, w, { ...o.card, ...it }); s += c.s; cy += c.h;
    if (i < items.length - 1) { if (o.arrows) s += arrow(x + w / 2, cy + 5, x + w / 2, cy + gap - 5, { w: 3.5, color: o.acolor || C.ink, marker: o.amarker || 'ah' }); cy += gap; }
  });
  return { s, h: cy - y };
}
// Numbered steps: badge + card. list: [{title, body, n}]
function steps(y, list, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? 12; let s = '', cy = y;
  list.forEach((st, i) => {
    const hl = (o.highlight ?? []).includes?.(i) || o.highlight === i;
    const c = card(x + 74, cy, w - 74, { title: st.title, body: st.body, kicker: st.kicker, fill: hl ? C.cream : st.fill || C.panel, edge: hl ? C.olive : C.panelEdge, size: o.size ?? 17, tsize: o.tsize ?? 20, minH: o.minH ?? 0, pad: o.pad ?? 18, bullets: st.bullets });
    s += c.s + badge(x + 30, cy + c.h / 2, 24, st.n ?? String(i + 1), hl ? C.mustard : C.cream);
    cy += c.h + gap;
  });
  const line = `<line x1="${x + 30}" y1="${y + 20}" x2="${x + 30}" y2="${cy - gap - 20}" stroke="${C.panelEdge}" stroke-width="4"/>`;
  return { s: line + s, h: cy - y - gap };
}
// Highlighted note box (cream with olive edge), full width by default.
const note = (y, title, body, o = {}) => card(o.x ?? 30, y, o.w ?? 840, { title, body, fill: o.fill || C.cream, edge: o.edge || C.olive, tsize: o.tsize ?? 19, size: o.size ?? 17, bfill: o.bfill || C.ink, tfill: o.tfill || C.ink, align: o.align, pad: o.pad ?? 20, bullets: o.bullets });
// Table: cols [{w (fraction), head, hfill, hink}], rows [[cell strings]], optional per-row fill.
function table(y, cols, rows, o = {}) {
  const x0 = o.x ?? 30, W0 = o.w ?? 840, size = o.size ?? 16, pad = o.pad ?? 14, hs = o.hsize ?? 17;
  const tot = cols.reduce((a, c) => a + (c.w || 1), 0), ws = cols.map((c) => (W0 * (c.w || 1)) / tot);
  const xs = ws.map((_, i) => x0 + ws.slice(0, i).reduce((a, b) => a + b, 0));
  let s = '', cy = y;
  const cellH = (txt, w, sz, wt) => (txt ? wrapRich(txt, w - 2 * pad, sz, wt).length * Math.round(sz * 1.3) : 0);
  const hh = Math.max(...cols.map((c, i) => cellH(c.head, ws[i], hs, 700))) + 2 * pad - 2;
  let head = '';
  cols.forEach((c, i) => {
    head += `<rect x="${xs[i]}" y="${cy}" width="${ws[i]}" height="${hh}" fill="${c.hfill || C.teal}"/>`;
    if (c.head) head += para(xs[i] + pad, cy + pad + hs * 0.8, c.head, ws[i] - 2 * pad, { size: hs, weight: 700, fill: c.hink || C.ink, lh: Math.round(hs * 1.3) }).s;
  });
  cy += hh;
  let body = '';
  rows.forEach((r, ri) => {
    const rh = Math.max(...r.map((txt, i) => cellH(txt, ws[i], size, i === 0 && o.firstBold !== false ? 700 : 400))) + 2 * pad - 2;
    r.forEach((txt, i) => {
      const fill = (o.cellFill && o.cellFill(ri, i)) || (i === 0 && o.firstFill !== false ? C.tealLight : ri % 2 ? '#f8faf9' : C.panel);
      body += `<rect x="${xs[i]}" y="${cy}" width="${ws[i]}" height="${rh}" fill="${fill}"/>`;
      if (txt) body += para(xs[i] + pad, cy + pad + size * 0.8, txt, ws[i] - 2 * pad, { size, weight: i === 0 && o.firstBold !== false ? 700 : 400, fill: i === 0 ? C.ink : o.ink || C.ink, lh: Math.round(size * 1.3) }).s;
    });
    if (ri < rows.length - 1) body += `<line x1="${x0}" y1="${cy + rh}" x2="${x0 + W0}" y2="${cy + rh}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    cy += rh;
  });
  const H = cy - y;
  const grid = xs.slice(1).map((xx) => `<line x1="${xx}" y1="${y}" x2="${xx}" y2="${y + H}" stroke="${C.panelEdge}" stroke-width="1.5"/>`).join('');
  return { s: `<clipPath id="tc${y}"><rect x="${x0}" y="${y}" width="${W0}" height="${H}" rx="14"/></clipPath><g clip-path="url(#tc${y})">${head + body}</g>` + grid + `<rect x="${x0}" y="${y}" width="${W0}" height="${H}" rx="14" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`, h: H };
}
// Small rounded label chip. Returns {s,w}
function chip(x, y, label, o = {}) {
  const size = o.size ?? 16, weight = o.weight ?? 700, pw = o.padX ?? 12, w = tw(label, size, weight) + pw * 2, h = size + 14;
  const cx = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w : x;
  return { s: `<rect x="${cx}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.ink}" stroke-width="2"/>` + T(cx + w / 2, y + h / 2 + size * 0.36, label, { size, weight, anchor: 'middle', fill: o.ink || C.ink }), w, h };
}
// Segmented proportion bar. segs [{label, sub, frac, fill}]
function segbar(y, segs, o = {}) {
  const x0 = o.x ?? 30, W0 = o.w ?? 840, h = o.h ?? 74; let s = '', x = x0;
  const tot = segs.reduce((a, g) => a + g.frac, 0);
  segs.forEach((g) => {
    const w = (W0 * g.frac) / tot;
    s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${g.fill || C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(x + w / 2, y + (g.sub ? h / 2 - 4 : h / 2 + 7), g.label, { size: o.size ?? 19, weight: 700, anchor: 'middle', fill: g.ink || C.ink });
    if (g.sub) s += T(x + w / 2, y + h / 2 + 20, g.sub, { size: 16, anchor: 'middle', fill: g.ink || C.ink });
    x += w;
  });
  return { s, h };
}
// Text block helper for flow layouts: returns a block fn.
const P = (s, o = {}) => (y) => { const p = para(o.anchor === 'middle' ? 450 : o.x ?? 30, y + (o.size || 17) * 0.8, s, o.w ?? 840, { fill: C.muted, ...o }); return { s: p.s, h: p.h }; };
// Build a figure from blocks (functions y => {s,h}) stacked top to bottom; numbers add extra space.
function F(name, title, sub, blocks, alt, caption, after, o = {}) {
  if (tw(title, 31, 700) > 860) WARN.push(`${name}: title too wide`);
  if (sub && tw(sub, 21) > 860) WARN.push(`${name}: subtitle too wide`);
  let y = sub ? (o.top ?? 124) : (o.top ?? 100), s = '';
  const gap = o.gap ?? 22;
  blocks.forEach((b, i) => {
    if (typeof b === 'number') { y += b; return; }
    if (typeof b === 'string') { s += b; return; }
    const r = b(y); s += r.s; y += r.h + (i < blocks.length - 1 ? gap : 0);
  });
  add(name, svg(900, Math.round(y + (o.bottom ?? 32)), title, s, sub), alt, caption, after);
}
const B = (fn) => (y) => fn(y); // identity wrapper for readability
// Hub: central circle with card columns left and right, joined by connector lines.
function hub(y, center, left, right, o = {}) {
  const cwid = o.cardW ?? 270, r = o.r ?? 92, gap = o.vgap ?? 14, cxx = 450;
  const col = (items, x) => { let cy = 0; const cs = items.map((it) => { const c = card(x, 0, cwid, { size: 16, tsize: 18, pad: 16, ...o.card, ...it }); const m = { it, top: cy, h: c.h }; cy += c.h + gap; return m; }); return { cs, h: cy - gap }; };
  const A = col(left, 30), Bc = col(right, 870 - cwid);
  const H = Math.max(A.h, Bc.h, r * 2 + 10), cy = y + H / 2;
  let lines = '', cards = '';
  const put = (Cc, x, side) => { const off = (H - Cc.h) / 2; Cc.cs.forEach((m) => { const yy = y + off + m.top; cards += card(x, yy, cwid, { size: 16, tsize: 18, pad: 16, ...o.card, ...m.it }).s; const ex = side < 0 ? x + cwid : x; lines += `<line x1="${ex}" y1="${yy + m.h / 2}" x2="${cxx + side * r * 0.5}" y2="${cy + (yy + m.h / 2 - cy) * 0.3}" stroke="${C.ink}" stroke-width="2.5"/>`; }); };
  put(A, 30, -1); put(Bc, 870 - cwid, 1);
  const cs = o.csize ?? 21, lh = cs * 1.22, L = Array.isArray(center) ? center : [center];
  const ctext = L.map((l, i) => T(cxx, cy - ((L.length - 1) * lh) / 2 + i * lh + cs * 0.35, l, { size: cs, weight: 700, anchor: 'middle' })).join('');
  return { s: lines + `<circle cx="${cxx}" cy="${cy}" r="${r}" fill="${o.cfill || C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + ctext + cards, h: H };
}
// IB Language B theme map: guiding principle, topics around the theme, possible questions as lenses.
function themeMap(theme, principle, topics, questions, o = {}) {
  const half = Math.ceil(topics.length / 2);
  return [
    (y) => note(y, '', `**Guiding principle:** "${principle}"`, { align: 'middle', size: 18 }),
    (y) => { const s = T(450, y + 14, (o.topicLabel || `${topics.length} OPTIONAL RECOMMENDED TOPICS (your teacher chooses)`), { size: 15, weight: 700, anchor: 'middle', fill: C.muted }); const h = hub(y + 30, theme, topics.slice(0, half), topics.slice(half), { cardW: o.cardW ?? 260, r: o.r ?? 96, card: { align: 'middle', vcenter: true, minH: o.minH ?? 64 } }); return { s: s + h.s, h: h.h + 30 }; },
    (y) => { const s = T(450, y + 14, 'POSSIBLE QUESTIONS: use them as lenses on any text', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }); const r = row(y + 30, questions.map((q) => ({ body: `"${q}"`, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, size: 18 })), { gap: 18 }); return { s: s + r.s, h: r.h + 30 }; },
  ];
}

const H2 = {
  theme: '## The theme as the brief states it',
  topics: '## The six recommended topics',
  lang: '## The language of experience: telling a story well',
  p1: '## Worked example: planning a Paper 1 answer',
  oral: '## The individual oral and Experiences',
};

// 01 Theme map
F('01-experiences-theme-map', 'Experiences: the theme at a glance', '', themeMap(['Experiences'],
  'Explore and tell the stories of the events, experiences and journeys that shape our lives.',
  [{ title: 'Leisure activities' }, { title: 'Holidays and travel' }, { title: 'Life stories' }, { title: 'Rites of passage' }, { title: 'Customs and traditions' }, { title: 'Migration' }],
  ['How does our past shape our present and our future?', 'How and why do different cultures mark important moments in life?']),
'The guiding principle of Experiences sits above a central circle surrounded by its six optional recommended topics: leisure activities, holidays and travel, life stories, rites of passage, customs and traditions, and migration. Below, the two possible questions are shown as lenses.',
'A prescribed theme, six optional topics and two questions to read any text through.', H2.theme);

// 02 Three vocabulary layers
F('02-three-vocabulary-layers', 'Build vocabulary in three layers', 'For each topic your class studies', [
  (y) => {
    const L = [
      ['1', 'Nouns', 'a ceremony, a suitcase', C.tealLight, C.panelEdge, 560],
      ['2', 'Verbs', 'to celebrate, to settle', C.teal, C.panelEdge, 700],
      ['3', 'Evaluative language', 'unforgettable, bittersweet', C.cream, C.olive, 840],
    ];
    let s = '';
    L.forEach(([n, a, b, f, e, w], i) => {
      const yy = y + (2 - i) * 96, x = 450 - w / 2;
      s += `<rect x="${x}" y="${yy}" width="${w}" height="84" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
      s += badge(x + 44, yy + 42, 22, n, i === 2 ? C.mustard : C.cream) + T(x + 82, yy + 36, a, { size: 21, weight: 700 }) + T(x + 82, yy + 64, b, { size: 18, fill: C.muted, italic: true });
    });
    s += T(846, y + 50, 'most often missing', { size: 17, weight: 700, fill: C.olive, anchor: 'end' });
    return { s, h: 3 * 96 - 12 };
  },
  (y) => {
    const r = row(y, [
      { title: 'Nouns and verbs only', body: 'A list of events: "There was a ceremony. There was a meal. It was good."' },
      { title: 'With evaluative language', body: 'An experience: the reader learns what the moment felt like and why it mattered.', fill: C.cream, edge: C.olive },
    ], { arrows: true, gap: 60, card: { size: 17, tsize: 19 } });
    return r;
  },
],
'Three stacked layers of vocabulary: nouns such as a ceremony or a suitcase, verbs such as to celebrate or to settle, and evaluative language such as unforgettable or bittersweet, marked as the layer most often missing. An arrow shows that adding evaluative language turns a list of events into an experience.',
'The third layer, evaluative language, turns a list of events into an experience.', H2.topics);

// 03 Controlling time in a story
F('03-story-timeline', 'Controlling time in a story', '', [
  (y) => {
    const y0 = y + 170;
    let s = panel(30, y, 840, 300);
    s += `<line x1="60" y1="${y0}" x2="720" y2="${y0}" stroke="${C.ink}" stroke-width="4"/>` + arrow(720, y0, 850, y0, { w: 4, dash: '10 7' });
    // segments labels
    const seg = [[125, 'EARLIER PAST', C.muted], [360, 'PAST', C.tealDark], [600, 'NOW', C.ink], [790, 'FUTURE', C.muted]];
    seg.forEach(([x, l, f]) => { s += T(x, y + 40, l, { size: 16, weight: 700, anchor: 'middle', fill: f }); });
    // earlier past
    s += `<circle cx="125" cy="${y0}" r="11" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>` + T(125, y0 + 40, 'had left,', { size: 16, anchor: 'middle', italic: true }) + T(125, y0 + 60, 'had worked', { size: 16, anchor: 'middle', italic: true });
    // background band
    s += `<rect x="220" y="${y0 - 16}" width="280" height="32" rx="16" fill="${C.teal}" opacity="0.85"/>`;
    s += T(360, y0 + 44, 'background / habit:', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark }) + T(360, y0 + 64, 'was raining, used to spend', { size: 16, anchor: 'middle', italic: true, fill: C.tealDark });
    [270, 360, 450].forEach((x) => { s += `<circle cx="${x}" cy="${y0}" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`; });
    s += T(360, y0 - 58, 'completed events:', { size: 16, anchor: 'middle', weight: 700, fill: C.olive });
    s += T(360, y0 - 34, 'arrived, walked on, ate', { size: 16, anchor: 'middle', italic: true, fill: C.olive });
    // bridge
    s += path(`M470,${y0 - 14} C510,${y0 - 90} 560,${y0 - 90} 594,${y0 - 18}`, { w: 3.5, stroke: C.rust, extra: 'marker-end="url(#ahR)"' });
    s += T(532, y0 - 92, 'since then', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    s += `<circle cx="600" cy="${y0}" r="13" fill="${C.ink}"/>` + T(600, y0 + 44, 'I have', { size: 16, anchor: 'middle', italic: true }) + T(600, y0 + 64, 'thought…', { size: 16, anchor: 'middle', italic: true });
    s += T(790, y0 + 44, 'one day', { size: 16, anchor: 'middle', italic: true }) + T(790, y0 + 64, 'I hope to…', { size: 16, anchor: 'middle', italic: true });
    return { s, h: 300 };
  },
  (y) => row(y, [
    { kicker: 'PAST MARKERS', title: 'Move the story on', body: 'at first · the next morning · two years later · by the time we arrived' },
    { kicker: 'BRIDGE MARKERS', kfill: C.rust, title: 'Link past to now', body: 'since then · ever since: these answer "how does our past shape our present?"', fill: C.cream, edge: C.olive },
    { kicker: 'PRESENT AND FUTURE', title: 'Say what it means now', body: 'now · these days · one day I hope to' },
  ], { gap: 16, card: { size: 16, tsize: 19 } }),
  (y) => note(y, 'Reflection turns narrative into meaning', '"Looking back, I realise that…" · "If I had not missed that train, I would never have met…": complex structures the brief expects at HL Paper 1.', { size: 17 }),
],
'A timeline runs from the earlier past (had left) through the past, where completed events (arrived, ate) are dots set against a band of background or habit (was raining, used to spend), to now and the future. A bridge arrow labelled since then links past to present. Cards list past, bridge and present or future time markers, and a note shows reflective and hypothetical structures.',
'Mark completed events against background, then build a bridge from the past to now.', H2.lang);

// 04 From a list to a story
F('04-list-to-story', 'From a list of events to an experience', '', [
  (y) => {
    const left = card(30, y, 270, { kicker: 'FLAT ACCOUNT', kfill: C.muted, body: ['I went to my cousin\'s graduation.', 'There was a ceremony.', 'There was a meal.', 'It was good.', 'I came home.'], size: 17, bfill: C.muted, gap: 8, fill: '#eef1f0' });
    const st = steps(y, [
      { title: 'Two kinds of past', body: 'Completed *walked on, ate* set against background *was crying*.' },
      { title: 'An earlier past', body: '*had left school, had worked* pull in the aunt\'s life story.' },
      { title: 'Evaluative detail', body: '*went quiet, was crying* show feeling instead of "it was good".' },
      { title: 'A bridge to the present', body: '*Since that day I have thought…* answers the first possible question.' },
      { title: 'Cultural meaning', body: '"It was his, but it was hers too" answers the second possible question.' },
    ], { x: 360, w: 510, size: 16, tsize: 18, gap: 10, pad: 14, highlight: [3, 4] });
    const lh = Math.max(left.h, 0);
    const ly = y + (st.h - lh) / 2;
    const L = card(30, ly, 270, { kicker: 'FLAT ACCOUNT', kfill: C.muted, body: ['I went to my cousin\'s graduation.', 'There was a ceremony.', 'There was a meal.', 'It was good.', 'I came home.'], size: 17, bfill: C.muted, gap: 8, fill: '#eef1f0' });
    return { s: L.s + arrow(306, y + st.h / 2, 352, y + st.h / 2, { w: 4 }) + st.s, h: st.h };
  },
],
'A flat account of a cousin\'s graduation in five short sentences is turned into a story by five steps: two kinds of past, an earlier past, evaluative detail, a bridge to the present and cultural meaning. The last two are highlighted because they answer the theme\'s two possible questions.',
'Same content, five changes: the last two answer the theme\'s possible questions.', H2.lang);

// 05 Planning a Paper 1 answer
F('05-paper-1-plan', 'Planning a Paper 1 answer on Experiences', 'Prompt: how one family member\'s move shaped your family', [
  (y) => row(y, [
    { kicker: 'STEP 1', title: 'Context, audience, purpose', body: 'School collection project · students, parents and teachers · inform and move the reader' },
    { kicker: 'STEP 2', title: 'Text type and register', body: 'Magazine article: headline, neutral but warm register, quotations from the family member' },
  ], { gap: 18, card: { size: 16, tsize: 19 } }),
  (y) => { const s = T(30, y + 14, 'STEP 3: PLAN IN TIME ORDER, THEN REFLECT', { size: 15, weight: 700, fill: C.tealDark }); const g = grid(y + 30, [
    { kicker: '1 · OPENING', title: 'A vivid moment', body: 'The day of arrival; a headline that names the person' },
    { kicker: '2 · BEFORE', title: 'Why they left', body: 'Background past forms' },
    { kicker: '3 · THE MOVE', title: 'Two or three events', body: 'Completed events in sequence, with time markers' },
    { kicker: '4 · SETTLING', title: 'One difficulty', body: 'A new language, work or homesickness, and how it was solved' },
    { kicker: '5 · NOW', kfill: C.rust, title: 'Bridge paragraph', body: '*since then*, *today*: the effect on the family', fill: C.cream, edge: C.olive },
    { kicker: '6 · CLOSE', kfill: C.rust, title: 'One sentence', body: 'Answer "how does our past shape our present?"', fill: C.cream, edge: C.olive },
  ], 3, { arrows: true, gap: 40, vgap: 18, card: { size: 16, tsize: 18, pad: 16 } }); return { s: s + g.s, h: g.h + 30 }; },
  (y) => note(y, 'At HL', 'Weigh the gains and losses of the move, or compare two generations\' views, rather than only recounting.', { size: 17 }),
],
'Step 1 sets context, audience and purpose; step 2 chooses a magazine article in a neutral but warm register. Step 3 plans six parts in time order: opening, before, the move, settling, now and close, with the last two highlighted as the bridge to the present. A note says HL answers weigh gains and losses or compare generations.',
'Tell it in time order, then bridge to now and reflect.', H2.p1);

// 06 Oral: past, present, future
F('06-oral-past-present-future', 'Reading an SL oral image through Experiences', '', [
  (y) => {
    const fy = y + 10, fw = 260, fh = 190, fx = 450 - fw / 2;
    let s = `<rect x="${fx}" y="${fy}" width="${fw}" height="${fh}" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>` +
      `<rect x="${fx + 14}" y="${fy + 14}" width="${fw - 28}" height="${fh - 28}" fill="${C.tealLight}"/>` +
      `<circle cx="${fx + 200}" cy="${fy + 52}" r="18" fill="${C.mustard}"/>` +
      `<path d="M${fx + 14},${fy + fh - 14} L${fx + 90},${fy + 90} L${fx + 140},${fy + 130} L${fx + 180},${fy + 100} L${fx + fw - 14},${fy + fh - 14} Z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
    s += T(450, fy + fh + 30, 'a festival · a station platform · a graduation', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
    const lc = card(30, y + 40, 230, { kicker: 'PAST', title: 'What came before it?', size: 16, tsize: 19, align: 'middle' });
    const rc = card(640, y + 40, 230, { kicker: 'FUTURE', title: 'What will it lead to?', size: 16, tsize: 19, align: 'middle' });
    s += lc.s + rc.s + arrow(fx - 10, y + 40 + lc.h / 2, 266, y + 40 + lc.h / 2, { w: 3.5 }) + arrow(fx + fw + 10, y + 40 + rc.h / 2, 634, y + 40 + rc.h / 2, { w: 3.5 });
    const top = chip(450, fy - 4 + fh + 46, 'PRESENT: what event is this?', { anchor: 'middle', size: 17, fill: C.mustard });
    s += top.s;
    return { s, h: fh + 46 + top.h + 6 };
  },
  (y) => row(y, [
    { kicker: 'SL STIMULUS', title: 'A visual image', body: 'Describe briefly, then ask what event it is, what came before it and what it will lead to.' },
    { kicker: 'HL STIMULUS', title: 'An excerpt from a literary work', body: 'Early in the course, note turning points, departures and ceremonies that shape a character\'s life.' },
  ], { gap: 18, card: { size: 16, tsize: 19 } }),
  (y) => P('The oral is internally assessed: 25% (30 marks).', { anchor: 'middle', size: 17 })(y),
],
'A framed image of a festival, station platform or graduation sits between two cards: what came before it, and what it will lead to, with the image labelled what event is this. Below, the SL stimulus is a visual image and the HL stimulus an excerpt from a literary work, where turning points, departures and ceremonies link to the theme.',
'Give the image the theme\'s past–present–future shape.', H2.oral);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
