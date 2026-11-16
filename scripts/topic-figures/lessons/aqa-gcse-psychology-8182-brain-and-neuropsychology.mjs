import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-psychology-8182-brain-and-neuropsychology';
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
    (y) => note(y, '', o.plabel ? `**${o.plabel}** ${principle}` : `**Guiding principle:** "${principle}"`, { align: 'middle', size: 18 }),
    (y) => { const s = T(450, y + 14, (o.topicLabel || `${topics.length} OPTIONAL RECOMMENDED TOPICS (your teacher chooses)`), { size: 15, weight: 700, anchor: 'middle', fill: C.muted }); const h = hub(y + 30, theme, topics.slice(0, half), topics.slice(half), { cardW: o.cardW ?? 260, r: o.r ?? 96, card: { align: 'middle', vcenter: true, minH: o.minH ?? 64 } }); return { s: s + h.s, h: h.h + 30 }; },
    (y) => { const s = T(450, y + 14, o.qLabel || 'POSSIBLE QUESTIONS: use them as lenses on any text', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }); const r = row(y + 30, questions.map((q) => ({ body: o.noQuote ? q : `"${q}"`, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, size: 18, align: questions.length === 1 ? 'middle' : 'start' })), { gap: 18 }); return { s: s + r.s, h: r.h + 30 }; },
  ];
}
// Language B assessment bar: the four 25% components.
const LB_ASSESS = (y, o = {}) => {
  const segs = [
    { label: 'Paper 1', sub: 'writing · 30 marks', frac: 1, fill: o.hi === 0 ? C.mustard : C.cream },
    { label: 'Paper 2 listening', sub: '25 marks', frac: 1, fill: o.hi === 1 ? C.mustard : C.teal },
    { label: 'Paper 2 reading', sub: '40 marks', frac: 1, fill: o.hi === 2 ? C.mustard : C.teal },
    { label: 'Individual oral', sub: 'internal · 30 marks', frac: 1, fill: o.hi === 3 ? C.mustard : C.tealLight },
  ];
  let s = '';
  [0, 1, 2, 3].forEach((i) => { s += T(30 + 210 * i + 105, y + 16, '25%', { size: 18, weight: 700, anchor: 'middle', fill: C.ink }); });
  const b = segbar(y + 28, segs, { size: 18 });
  return { s: s + b.s, h: b.h + 28 };
};
// Wrapped row(s) of chips, centred by default. Returns {s,h}
function chips(y, labels, o = {}) {
  const gap = o.gap ?? 10, W0 = o.w ?? 840, x0 = o.x ?? 30, lines = [[]]; let cur = 0;
  labels.forEach((l) => { const w = chip(0, 0, l, o).w; if (lines[lines.length - 1].length && cur + gap + w > W0) { lines.push([]); cur = 0; } lines[lines.length - 1].push([l, w]); cur += (cur ? gap : 0) + w; });
  let s = '', h = 0;
  const ch = (o.size ?? 16) + 14;
  lines.forEach((ln, i) => { const tot = ln.reduce((a, [, w]) => a + w, 0) + gap * (ln.length - 1); let x = o.align === 'start' ? x0 : x0 + (W0 - tot) / 2; const yy = y + i * (ch + 10); ln.forEach(([l, w]) => { s += chip(x, yy, l, o).s; x += w + gap; }); h = yy + ch - y; });
  return { s, h };
}
// Passage with highlighted segments. lines: arrays of [text, kind] (kind: '', 'hl' cream, 'key' teal, 'no' struck). Returns {s,h, marks:{id:{x,y,w}}}
function passage(x, y, lines, o = {}) {
  const size = o.size ?? 19, lh = o.lh ?? Math.round(size * 1.75);
  let s = '', marks = {};
  lines.forEach((ln, i) => {
    let cx = x; const by = y + size + i * lh;
    ln.forEach(([txt0, kind, id]) => {
      const lead = txt0.length - txt0.trimStart().length; cx += lead * tw(' ', size); const txt = txt0.trimStart();
      const w = tw(txt, size, kind === 'hl' || kind === 'key' ? 600 : 400);
      if (kind === 'hl') s += `<rect x="${cx - 3}" y="${by - size + 1}" width="${w + 6}" height="${size + 9}" rx="5" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
      if (kind === 'key') s += `<rect x="${cx - 3}" y="${by - size + 1}" width="${w + 6}" height="${size + 9}" rx="5" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>`;
      s += T(cx, by, txt, { size, weight: kind === 'hl' || kind === 'key' ? 600 : 400, fill: kind === 'no' ? C.muted : C.ink });
      if (kind === 'no') s += `<line x1="${cx}" y1="${by - size * 0.32}" x2="${cx + w}" y2="${by - size * 0.32}" stroke="${C.rust}" stroke-width="2.5"/>`;
      if (id) marks[id] = { x: cx, y: by, w, top: by - size + 1, bot: by + 10 };
      cx += w;
    });
  });
  return { s, h: lines.length * lh, marks };
}

const H2 = {
  ns: '## The nervous system',
  neu: '## Neurons and synaptic transmission',
  brain: '## Brain structure and localisation of function',
  scan: '## Neuropsychology and scanning',
};

// Tree node helper
const node = (cx, y, w, title, sub, o = {}) => {
  const c = card(cx - w / 2, y, w, { title, body: sub, align: 'middle', size: 16, tsize: 19, pad: 14, fill: o.fill || C.panel, edge: o.edge || C.panelEdge, minH: o.minH || 0, vcenter: true });
  return { ...c, cx, top: y, bot: y + c.h };
};
const link = (a, b) => path(`M${a.cx},${a.bot} L${a.cx},${(a.bot + b.top) / 2} L${b.cx},${(a.bot + b.top) / 2} L${b.cx},${b.top}`, { w: 2.5 });

// 01 Nervous system tree
F('01-nervous-system-divisions', 'Divisions of the nervous system', '', [
  (y) => {
    const ns = node(450, y, 300, 'Nervous system', '', { fill: C.mustard, edge: C.ink });
    const cns = node(220, y + 110, 340, 'Central nervous system', 'Brain and spinal cord: processes information and makes decisions', { fill: C.tealLight, edge: C.tealDark, minH: 110 });
    const pns = node(670, y + 110, 340, 'Peripheral nervous system', 'All other nerves: carries messages between the CNS and the body', { fill: C.tealLight, edge: C.tealDark, minH: 110 });
    const so = node(555, y + 290, 240, 'Somatic', 'Senses and voluntary movement (skeletal muscles)', { minH: 112 });
    const au = node(790, y + 290, 160, 'Autonomic', 'Involuntary: heart rate, breathing, digestion', { minH: 112 });
    const sy = node(690, y + 470, 200, 'Sympathetic', 'Fight or flight', { fill: C.cream, edge: C.olive, minH: 86 });
    const pa = node(470, y + 470, 210, 'Parasympathetic', 'Rest and digest', { fill: C.cream, edge: C.olive, minH: 86 });
    const s = link(ns, cns) + link(ns, pns) + link(pns, so) + link(pns, au) + link(au, sy) + link(au, pa) + [ns, cns, pns, so, au, sy, pa].map((n) => n.s).join('');
    return { s, h: 470 + pa.h };
  },
],
'A tree diagram. The nervous system divides into the central nervous system (brain and spinal cord) and the peripheral nervous system (all other nerves). The peripheral system divides into the somatic system (senses and voluntary movement) and the autonomic system (involuntary functions), which has sympathetic (fight or flight) and parasympathetic (rest and digest) branches.',
'CNS decides; PNS carries messages. The autonomic branch runs involuntary functions.', H2.ns);

// 02 Fight or flight
F('02-fight-or-flight', 'The fight-or-flight response', '', [
  (y) => row(y, [
    { kicker: '1', title: 'Threat perceived', body: 'A bear, or a modern stressor such as an exam' },
    { kicker: '2', title: 'Sympathetic branch activated', body: 'Part of the autonomic nervous system' },
    { kicker: '3', title: 'Adrenal glands release adrenaline', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 44, card: { size: 16, tsize: 19, align: 'middle', kfill: C.tealDark } }),
  (y) => {
    const a = arrow(740, y - 16, 740, y + 6, { w: 3.5 });
    const items = ['Heart rate ↑', 'Breathing rate ↑', 'Pupils dilate', 'Blood diverted to muscles', 'Digestion slows'];
    const c = card(30, y + 12, 840, { kicker: 'BODY READY TO FIGHT OR RUN', kfill: C.rust, body: items.join('   ·   '), size: 18, bfill: C.ink, fill: C.panel, edge: C.rust, align: 'middle' });
    return { s: a + c.s, h: c.h + 12 };
  },
  (y) => {
    const a = path(`M450,${y - 18} L450,${y + 8}`, { w: 3.5, extra: 'marker-end="url(#ahT)"', stroke: C.tealDark });
    const c = row(y + 14, [
      { kicker: 'THREAT PASSES', title: 'Parasympathetic branch', body: 'Returns the body to its resting state: "rest and digest"', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'EVALUATION', kfill: C.olive, title: 'Useful for ancestors facing physical danger', body: 'Unhelpful for modern stressors such as exams, where fighting or running does not help', fill: C.cream, edge: C.olive },
    ], { gap: 18, card: { size: 16, tsize: 18 } });
    return { s: a + c.s, h: c.h + 14 };
  },
],
'Three linked steps: a threat is perceived, the sympathetic branch is activated and the adrenal glands release adrenaline. The body changes: heart rate and breathing rise, pupils dilate, blood goes to the muscles and digestion slows. When the threat passes, the parasympathetic branch returns the body to rest.',
'Sympathetic activation and adrenaline prepare the body; the parasympathetic branch calms it.', H2.ns);

// 03 James-Lange
F('03-james-lange', 'The James-Lange theory of emotion', 'Which comes first: the feeling or the body\'s reaction?', [
  (y) => {
    const lab = (yy, l, f) => T(30, yy, l, { size: 16, weight: 700, fill: f });
    const r1 = row(y + 24, [{ title: 'See a bear' }, { title: 'Feel afraid' }, { title: 'Heart races' }], { arrows: true, gap: 50, card: { size: 16, tsize: 19, align: 'middle', fill: '#eef1f0' } });
    const y2 = y + 24 + r1.h + 46;
    const r2 = row(y2, [{ title: 'See a bear' }, { title: 'Body reacts', body: 'heart races', fill: C.cream, edge: C.olive }, { title: 'Interpret the change as fear', fill: C.tealLight, edge: C.tealDark }], { arrows: true, gap: 50, card: { size: 16, tsize: 19, align: 'middle' } });
    return { s: lab(y + 14, 'COMMON SENSE', C.muted) + r1.s + lab(y2 - 10, 'JAMES-LANGE: bodily change comes first', C.olive) + r2.s, h: y2 + r2.h - y };
  },
  (y) => P('The emotion **is** the perception of the physical change: no physical change, no emotion.', { anchor: 'middle', size: 18, fill: C.ink })(y),
  (y) => row(y, [
    { kicker: 'SUPPORTS', title: 'A jolt of panic', body: 'felt a moment after a near miss while driving', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CHALLENGES', kfill: C.rust, title: 'Similar bodily changes', body: 'a racing heart comes with fear, excitement or anger' },
    { kicker: 'CHALLENGES', kfill: C.rust, title: 'Spinal cord injuries', body: 'reduced bodily feedback, yet people still report emotions' },
  ], { gap: 14, card: { size: 16, tsize: 18 } }),
],
'Two rows of three steps. Common sense: see a bear, feel afraid, then the heart races. James-Lange: see a bear, the body reacts, then we interpret that change as fear. Evaluation cards: panic after a near miss supports the theory; similar bodily changes across emotions and emotions reported after spinal cord injury challenge it.',
'James-Lange reverses common sense: the body reacts first and the emotion is our interpretation.', H2.ns);

// 04 Synaptic transmission
F('04-synaptic-transmission', 'Synaptic transmission, step by step', 'Schematic, not to scale', [
  (y) => {
    let s = '';
    // presynaptic terminal
    s += `<path d="M30,${y + 90} L250,${y + 90} C340,${y + 90} 380,${y + 140} 380,${y + 200} C380,${y + 260} 340,${y + 310} 250,${y + 310} L30,${y + 310}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
    s += arrow(50, y + 200, 170, y + 200, { w: 6, color: C.rust, marker: 'ahR' }) + T(50, y + 180, 'electrical impulse', { size: 16, weight: 700, fill: C.rust });
    // vesicles
    [[250, 150], [300, 200], [250, 250], [200, 175]].forEach(([vx, vy]) => {
      s += `<circle cx="${vx}" cy="${y + vy}" r="24" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
      [[-8, -6], [7, -8], [0, 8], [-9, 9], [9, 6]].forEach(([dx, dy]) => { s += `<circle cx="${vx + dx}" cy="${y + vy + dy}" r="3.5" fill="${C.olive}"/>`; });
    });
    // released NT in gap
    [[410, 160], [425, 190], [405, 215], [430, 240], [415, 265], [440, 175]].forEach(([dx, dy]) => { s += `<circle cx="${dx}" cy="${y + dy}" r="4.5" fill="${C.olive}"/>`; });
    // postsynaptic
    s += `<path d="M480,${y + 70} L480,${y + 330} L870,${y + 330} L870,${y + 70} Z" fill="${C.panel}" stroke="none"/>`;
    s += `<path d="M480,${y + 70} L480,${y + 330}" stroke="${C.ink}" stroke-width="3"/>`;
    [140, 200, 260].forEach((ry) => { s += `<path d="M480,${y + ry - 14} l-14,0 l0,6 l8,0 l0,16 l-8,0 l0,6 l14,0 Z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>`; });
    s += T(458, y + 60, 'synapse', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    s += T(150, y + 340, 'presynaptic neuron (axon terminal)', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += T(680, y + 360, 'postsynaptic neuron', { size: 16, weight: 700, anchor: 'middle', fill: C.ink });
    s += `<line x1="494" y1="${y + 186}" x2="560" y2="${y + 160}" stroke="${C.ink}" stroke-width="1.5"/>` + T(566, y + 164, 'receptors', { size: 16, fill: C.ink });
    s += `<line x1="226" y1="${y + 150}" x2="160" y2="${y + 120}" stroke="${C.ink}" stroke-width="1.5"/>` + T(70, y + 116, 'vesicles', { size: 16, fill: C.ink });
    // badges
    s += badge(110, y + 230, 17, '1', C.cream) + badge(300, y + 145, 17, '2', C.cream) + badge(440, y + 300, 17, '3', C.cream);
    s += para(590, y + 226, '**4** Excitation makes the next neuron **more** likely to fire; inhibition makes it **less** likely.', 260, { size: 16, fill: C.ink }).s;
    return { s, h: 366 };
  },
  (y) => steps(y, [
    { title: 'An electrical impulse travels down the axon to the axon terminal' },
    { title: 'Neurotransmitters are released from vesicles into the synapse' },
    { title: 'They cross the gap and bind to receptors on the postsynaptic neuron' },
    { title: 'Excitation or inhibition', body: 'Whether the next neuron fires depends on the overall balance of signals it receives.' },
  ], { size: 16, tsize: 18, gap: 8, pad: 12 }),
],
'A presynaptic axon terminal with an electrical impulse and vesicles of neurotransmitter faces a postsynaptic neuron across a synapse. Neurotransmitter crosses the gap and binds to receptors. Four steps: impulse to the terminal, release from vesicles, binding to receptors, and excitation or inhibition of the next neuron.',
'The impulse is electrical along the neuron; a chemical neurotransmitter crosses the gap.', H2.neu);

// 05 Hebb
F('05-hebb-cell-assemblies', 'Hebb: neurons that fire together, wire together', '', [
  (y) => {
    const pair = (x, w, lab, sub, f) => {
      const n1 = `<circle cx="${x + 60}" cy="${y + 70}" r="26" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
      const n2 = `<circle cx="${x + 320}" cy="${y + 70}" r="26" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
      const l = `<line x1="${x + 88}" y1="${y + 70}" x2="${x + 292}" y2="${y + 70}" stroke="${f}" stroke-width="${w}" stroke-linecap="round"/>`;
      return panel(x, y, 380, 180) + l + n1 + n2 + T(x + 190, y + 130, lab, { size: 19, weight: 700, anchor: 'middle' }) + T(x + 190, y + 158, sub, { size: 16, anchor: 'middle', fill: C.muted });
    };
    let s = pair(30, 3, 'Rarely active together', 'a weak connection', C.panelEdge) + pair(490, 14, 'Repeatedly active together', 'a stronger connection', C.tealDark);
    s += arrow(418, y + 70, 482, y + 70, { w: 4 }) + T(450, y + 54, 'practice', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    return { s, h: 180 };
  },
  (y) => row(y, [
    { kicker: 'CELL ASSEMBLIES', title: 'Strengthened connections form groups', body: 'Learning a skill or a fact physically changes the brain.' },
    { kicker: 'WHY PRACTICE WORKS', title: 'Frequently used pathways become more efficient', body: 'The foundation for the idea of brain plasticity.', fill: C.cream, edge: C.olive },
  ], { gap: 18, card: { size: 16, tsize: 18 } }),
],
'Two pairs of neurons. Rarely active together, they share a thin, weak connection; after repeated activity together, a thick, stronger connection. Cards explain cell assemblies, that learning physically changes the brain, and that frequently used pathways become more efficient.',
'Repeated activity strengthens connections: learning physically changes the brain.', H2.neu);

// Brain schematic (side view, front on the left)
function brain(x0, y0, sc, o = {}) {
  const P2 = (pts) => pts.map(([a, b]) => `${x0 + a * sc},${y0 + b * sc}`).join(' ');
  const id = `bc${Math.round(x0)}${Math.round(y0)}`;
  const E = { cx: x0 + 260 * sc, cy: y0 + 165 * sc, rx: 250 * sc, ry: 165 * sc };
  const f = o.fills || {};
  let s = `<clipPath id="${id}"><ellipse cx="${E.cx}" cy="${E.cy}" rx="${E.rx}" ry="${E.ry}"/></clipPath><g clip-path="url(#${id})">`;
  s += `<polygon points="${P2([[0, 0], [290, 0], [262, 190], [70, 222], [0, 222]])}" fill="${f.frontal || C.tealLight}"/>`;
  s += `<polygon points="${P2([[290, 0], [440, 0], [418, 180], [262, 190]])}" fill="${f.parietal || C.cream}"/>`;
  s += `<polygon points="${P2([[440, 0], [520, 0], [520, 340], [400, 340], [418, 180]])}" fill="${f.occipital || '#e4e9f2'}"/>`;
  s += `<polygon points="${P2([[0, 222], [70, 222], [262, 190], [418, 180], [400, 340], [0, 340]])}" fill="${f.temporal || C.teal}"/>`;
  s += `<polyline points="${P2([[290, 0], [262, 190]])}" fill="none" stroke="${C.ink}" stroke-width="2.5"/><polyline points="${P2([[440, 0], [418, 180], [400, 340]])}" fill="none" stroke="${C.ink}" stroke-width="2.5"/><polyline points="${P2([[0, 222], [70, 222], [262, 190], [418, 180]])}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += (o.inner || '') + `</g><ellipse cx="${E.cx}" cy="${E.cy}" rx="${E.rx}" ry="${E.ry}" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
  if (o.cerebellum !== false) s += `<ellipse cx="${x0 + 420 * sc}" cy="${y0 + 320 * sc}" rx="${85 * sc}" ry="${40 * sc}" fill="${f.cerebellum || C.sand}" stroke="${C.ink}" stroke-width="3"/>`;
  return { s, pt: (a, b) => [x0 + a * sc, y0 + b * sc] };
}

// 06 Localisation of function
F('06-localisation-of-function', 'Localisation of function', 'Schematic side view, front on the left. Not to scale', [
  (y) => {
    const x0 = 40, sc = 1.05;
    const strip = (a0, b0, a1, b1, col) => `<line x1="${x0 + a0 * sc}" y1="${y + b0 * sc}" x2="${x0 + a1 * sc}" y2="${y + b1 * sc}" stroke="${col}" stroke-width="${13 * sc}" stroke-linecap="butt"/>`;
    const inner = strip(278, 8, 252, 186, C.tealDark) + strip(302, 8, 276, 186, C.olive) +
      `<ellipse cx="${x0 + 175 * sc}" cy="${y + 193 * sc}" rx="${34 * sc}" ry="${18 * sc}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` +
      `<ellipse cx="${x0 + 345 * sc}" cy="${y + 215 * sc}" rx="${34 * sc}" ry="${18 * sc}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` +
      `<ellipse cx="${x0 + 270 * sc}" cy="${y + 222 * sc}" rx="${36 * sc}" ry="${15 * sc}" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` +
      `<ellipse cx="${x0 + 478 * sc}" cy="${y + 165 * sc}" rx="${26 * sc}" ry="${40 * sc}" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
    const b = brain(x0, y, sc, { inner });
    let s = b.s;
    const lob = (a, bb, l) => T(x0 + a * sc, y + bb * sc, l, { size: 18, weight: 700, anchor: 'middle' });
    s += lob(140, 110, 'Frontal') + lob(365, 85, 'Parietal') + lob(470, 255, 'Occ.') + lob(200, 290, 'Temporal') + T(x0 + 420 * sc, y + 326 * sc, 'Cerebellum', { size: 16, weight: 700, anchor: 'middle' });
    // labels with leaders on the right / below
    const labs = [
      [[265, 60], 'Motor area', 'voluntary movement (frontal)', C.tealDark],
      [[290, 40], 'Somatosensory area', 'touch, temperature, pain (parietal)', C.olive],
      [[478, 150], 'Visual area', '(occipital)', C.ink],
      [[270, 222], 'Auditory area', '(temporal)', C.ink],
      [[345, 215], "Wernicke's area", 'understanding language (temporal, usually left)', C.olive],
      [[175, 193], "Broca's area", 'speech production (frontal, usually left)', C.olive],
    ];
    const LX = 600;
    labs.forEach(([[a, bb], t1, t2, col], i) => {
      const ly = y + 6 + i * 64, [px, py] = b.pt(a, bb);
      s += `<path d="M${px},${py} C${(px + LX) / 2 + 40},${py} ${LX - 60},${ly + 14} ${LX - 8},${ly + 14}" fill="none" stroke="${C.ink}" stroke-width="1.6"/><circle cx="${px}" cy="${py}" r="4" fill="${C.ink}"/>`;
      s += T(LX, ly + 18, t1, { size: 17, weight: 700, fill: col === C.ink ? C.ink : col }) + para(LX, ly + 40, t2, 270, { size: 15, fill: C.muted, lh: 18 }).s;
    });
    return { s, h: Math.max(400, 6 * 64) };
  },
  (y) => note(y, 'Each side controls the opposite side', 'The motor and somatosensory areas in one hemisphere control and receive sensation from the opposite side of the body. The cerebellum co-ordinates balance and movement.', { size: 17 }),
],
'A schematic side view of the brain with the frontal, parietal, occipital and temporal lobes and the cerebellum. Labels mark the motor area at the back of the frontal lobe, the somatosensory area at the front of the parietal lobe, the visual area in the occipital lobe, the auditory area and Wernicke\'s area in the temporal lobe, and Broca\'s area in the frontal lobe.',
'Particular areas carry out particular jobs; each side of the brain serves the opposite side of the body.', H2.brain);

// 07 Scans and Tulving
F('07-scans-and-tulving', 'Scanning the brain: structure or activity?', '', [
  (y) => table(y, [{ w: 0.6, head: 'Scan' }, { w: 1.4, head: 'How it works' }, { w: 0.8, head: 'Shows', hfill: C.cream }, { w: 1.6, head: 'Points to note' }], [
    ['CT', 'Many X-ray images combined', 'Structure', 'Quick; detects damage such as tumours or bleeding; uses radiation'],
    ['PET', 'A radioactive tracer is injected; active areas use more of it', 'Activity', 'Shows function; involves radioactivity'],
    ['fMRI', 'Detects changes in blood oxygen', 'Activity', 'No radiation; detailed images; lie still in a noisy scanner'],
  ], { size: 16, cellFill: (r, c) => (c === 2 ? (r === 0 ? C.tealLight : C.cream) : null) }),
  (y) => {
    let s = T(30, y + 18, "TULVING'S 'GOLD' MEMORY STUDY (1989)", { size: 16, weight: 700, fill: C.tealDark });
    const b = brain(40, y + 40, 0.62, { fills: { frontal: C.mustard, parietal: C.panel, occipital: C.teal, temporal: C.panel }, cerebellum: false });
    s += b.s + T(40 + 120 * 0.62, y + 40 + 120 * 0.62, 'episodic', { size: 16, weight: 700, anchor: 'middle' }) + T(40 + 450 * 0.62, y + 40 + 140 * 0.62, 'semantic', { size: 16, weight: 700, anchor: 'middle' });
    const c = card(380, y + 30, 490, { body: ['**Episodic** memories (personal experiences): more blood flow in the **frontal** cortex.', '**Semantic** memories (facts): more in the **back** of the cortex.', 'Different types of long-term memory are localised in different areas.'], size: 16, bfill: C.ink, gap: 8, pad: 16 });
    return { s: s + c.s, h: Math.max(30 + c.h, 40 + 330 * 0.62) };
  },
  (y) => note(y, 'Evaluation', 'Biological evidence that episodic and semantic memory differ. But the sample was tiny and included Tulving, who knew what was being tested; results were not consistent for every participant.', { size: 16 }),
],
'A table compares scans: CT combines X-rays to show structure; PET uses an injected radioactive tracer and fMRI detects blood oxygen changes to show activity. A brain schematic for Tulving\'s gold study shows episodic memories linked to the frontal cortex and semantic memories to the back of the cortex.',
'CT shows structure; PET and fMRI show activity. Tulving linked memory types to different areas.', H2.scan);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
