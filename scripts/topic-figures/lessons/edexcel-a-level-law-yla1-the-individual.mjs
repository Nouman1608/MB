import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-law-yla1-the-individual';
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
    if (o.kicker && tw(o.kicker, 15, 700) > iw) WARN.push(`kicker too wide: ${o.kicker}`);
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
// Study summary card: name band, then aim/procedure/findings/conclusion columns, then evaluation (+/-).
function study(y, o) {
  const band = `<rect x="30" y="${y}" width="840" height="52" rx="14" fill="${o.bandFill || C.tealDark}"/><rect x="30" y="${y + 30}" width="840" height="22" fill="${o.bandFill || C.tealDark}"/>` + T(50, y + 34, o.name, { size: 21, weight: 700, fill: '#ffffff' }) + (o.tag ? T(850, y + 34, o.tag, { size: 16, weight: 600, fill: '#ffffff', anchor: 'end' }) : '');
  const cols = o.cols || [['PROCEDURE', o.procedure], ['FINDINGS', o.findings], ['CONCLUSION', o.conclusion]].filter((c) => c[1]);
  const r = row(y + 52, cols.map(([k, b], i) => ({ kicker: k, body: b, fill: i === cols.length - 1 && o.hiLast !== false ? C.cream : C.panel, edge: i === cols.length - 1 && o.hiLast !== false ? C.olive : C.panelEdge })), { gap: 0, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, gap: 6 } });
  let s = band + r.s, h = 52 + r.h;
  if (o.plus || o.minus) {
    const e = row(y + h + 10, [
      ...(o.plus ? [{ kicker: '+ STRENGTH', body: o.plus, fill: C.tealLight, edge: C.tealDark }] : []),
      ...(o.minus ? [{ kicker: '− WEAKNESS', kfill: C.rust, body: o.minus, fill: C.panel }] : []),
    ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, gap: 6 } });
    s += e.s; h += 10 + e.h;
  }
  return { s, h };
}

const H2 = {
  art: '## Articles 10 and 11',
  ecthr: '## The European Court of Human Rights',
  priv: '## Privacy and confidentiality',
  ola: '## Occupiers\' liability',
  tres: '## Trespass to land',
  we: '## Worked example: occupiers\' liability',
};

// 01 Qualified rights
F('01-qualified-rights-test', 'Restricting Articles 10 and 11', 'Both are qualified rights: a restriction must pass all three tests', [
  (y) => row(y, [
    { kicker: 'TEST 1', title: 'Prescribed by law' },
    { kicker: 'TEST 2', title: 'A legitimate aim', body: 'national security, public safety, preventing disorder or crime, protecting the rights and reputation of others' },
    { kicker: 'TEST 3', title: 'Necessary in a democratic society', body: 'meaning proportionate', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 40, card: { size: 15, tsize: 18 } }),
  (y) => row(y, [
    { kicker: 'ARTICLE 10: EXPRESSION', body: ['Protects ideas that "offend, shock or disturb": *Handyside v UK* [1976]', 'Injunction on thalidomide articles breached Art 10: *Sunday Times v UK* [1979]'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'ARTICLE 11: PEACEFUL ASSEMBLY', body: ['Peaceful, non-obstructive assembly on the highway can be lawful: *DPP v Jones* [1999]', 'Obstructing a road: the court must weigh proportionality: *DPP v Ziegler* [2021]', 'Police conditions on processions and assemblies: Public Order Act 1986'], bullets: true, fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 15, bfill: C.ink, gap: 6 } }),
  (y) => row(y, [
    { kicker: 'HRA 1998 s 6', body: 'Public authorities must act compatibly' },
    { kicker: 's 3', body: 'Courts interpret legislation compatibly where possible' },
    { kicker: 's 4', body: 'Higher courts may declare incompatibility' },
  ], { gap: 12, card: { size: 15, bfill: C.ink, pad: 14 } }),
],
'Three tests a restriction on Article 10 or 11 must pass: prescribed by law, a legitimate aim such as public safety or protecting others\' rights, and necessary in a democratic society, meaning proportionate. Cards give the Article 10 cases (Handyside, Sunday Times) and Article 11 cases (DPP v Jones, DPP v Ziegler) and the Human Rights Act sections 6, 3 and 4.',
'Expression and assembly can be restricted only by law, for a legitimate aim, and proportionately.', H2.art);

// 02 ECtHR route
F('02-ecthr-route', 'Taking a case to Strasbourg', 'The European Court of Human Rights: Council of Europe, not the EU', [
  (y) => row(y, [
    { kicker: '1', title: 'Exhaust domestic remedies' },
    { kicker: '2', title: 'Apply within four months', body: 'of the final domestic decision' },
    { kicker: '3', title: 'Admissibility, then merits' },
    { kicker: '4', title: 'Just satisfaction', body: 'compensation if a violation' },
    { kicker: '5', title: 'Committee of Ministers', body: 'supervises the state', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 26, card: { size: 15, tsize: 16, align: 'middle', pad: 12, kfill: C.tealDark } }),
  (y) => note(y, 'A judgment binds the UK in international law but does not itself change UK law', '', { align: 'middle', size: 17 }),
  (y) => table(y, [{ w: 1.1, head: 'Judgment' }, { w: 1.4, head: 'Government response' }], [
    ['*Malone v UK* [1984], telephone tapping', 'Interception of Communications Act 1985'],
    ['*Sunday Times v UK* [1979]', 'Contempt of Court Act 1981'],
    ['*Goodwin v UK* [2002]', 'Gender Recognition Act 2004'],
    ['*Hirst v UK (No 2)* [2005], prisoners\' voting', 'Only a limited administrative change, many years later'],
  ], { size: 16, firstBold: false, cellFill: (r, c) => (r === 3 && c === 1 ? C.cream : null) }),
],
'Five steps to Strasbourg: exhaust domestic remedies, apply within four months, admissibility then merits, just satisfaction, and supervision by the Committee of Ministers. A judgment binds the UK internationally but does not change UK law. A table shows government responses: Malone led to the 1985 Act, Sunday Times to the 1981 Act, Goodwin to the 2004 Act, while Hirst brought only a limited change.',
'Strasbourg judgments do not change UK law themselves, but governments usually legislate in response.', H2.ecthr);

// 03 Privacy balance
F('03-privacy-balance', 'Article 8 against Article 10', 'Misuse of private information', [
  (y) => row(y, [
    { kicker: 'QUESTION 1', title: 'Did the claimant have a reasonable expectation of privacy?' },
    { kicker: 'QUESTION 2', title: 'Was publication justified?', body: 'Balance Article 8 against Article 10', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 50, card: { size: 16, tsize: 18 } }),
  (y) => row(y, [
    { kicker: 'CAMPBELL v MGN [2004]', body: 'Photographs of a model leaving a Narcotics Anonymous meeting: a misuse.' },
    { kicker: 'MOSLEY [2008] · PJS [2016]', body: 'Privacy can outweigh press freedom where there is no genuine public interest.' },
  ], { gap: 14, card: { size: 16, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'DATA PROTECTION ACT 2018', title: 'Processing personal data', body: 'With the UK GDPR. ss 43 and 45: data subject rights, including access. s 170: offence to knowingly or recklessly obtain or disclose personal data without consent.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FREEDOM OF INFORMATION ACT 2000', title: 'Information held by public authorities', body: 'A right to request recorded information; response generally within 20 working days, subject to exemptions. Own data: subject access route instead.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 15, tsize: 17 } }),
],
'Two questions for misuse of private information: did the claimant have a reasonable expectation of privacy, and was publication justified, balancing Article 8 against Article 10. Cases: Campbell v MGN, Mosley and PJS. Cards summarise the Data Protection Act 2018, including the s 170 offence, and the Freedom of Information Act 2000 with its 20 working day response.',
'Expectation of privacy first, then whether publication was justified.', H2.priv);

// 04 OLA 1957 special cases
F('04-ola-1957-special-cases', 'OLA 1957: adjusting the common duty of care', 's 2(2): the common duty of care owed to lawful visitors', [
  (y) => grid(y, [
    { kicker: 'CHILDREN · s 2(3)(a)', title: 'Expect them to be less careful', body: '*Glasgow Corporation v Taylor* [1922]: poisonous berries. But parents should supervise young children: *Phipps v Rochester* [1955].', fill: C.cream, edge: C.olive },
    { kicker: 'SKILLED VISITORS · s 2(3)(b)', title: 'Expected to guard against risks of their trade', body: '*Roles v Nathan* [1963]' },
    { kicker: 'WARNINGS · s 2(4)(a)', title: 'May discharge the duty', body: 'if enough to keep the visitor safe' },
    { kicker: 'INDEPENDENT CONTRACTORS · s 2(4)(b)', title: 'Occupier not liable if reasonable', body: 'in choosing and checking the contractor: *Haseldine v Daw* [1941]', fill: C.tealLight, edge: C.tealDark },
  ], 2, { gap: 14, vgap: 14, vcenter: false, card: { size: 16, tsize: 18 } }),
  (y) => note(y, 'The duty and the occupier', 'Take reasonable care to see the visitor is reasonably safe for the purposes of the visit. The occupier is whoever has control of the premises: *Wheat v E Lacon & Co* [1966].', { size: 16, fill: C.panel, edge: C.panelEdge }),
],
'Four cards adjust the common duty of care under the Occupiers\' Liability Act 1957: children (s 2(3)(a), Glasgow Corporation v Taylor, with parents expected to supervise, Phipps), skilled visitors (s 2(3)(b), Roles v Nathan), warnings (s 2(4)(a)) and independent contractors (s 2(4)(b), Haseldine v Daw). The occupier is whoever has control (Wheat v Lacon).',
'The duty rises for children, falls for skilled visitors, and can be met by warnings or a well-chosen contractor.', H2.ola);

// 05 Trespass to land
F('05-trespass-to-land', 'Trespass to land', 'Direct and intentional interference with land in another\'s possession', [
  (y) => {
    let s = `<rect x="30" y="${y}" width="840" height="300" rx="14" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/><rect x="32" y="${y + 230}" width="836" height="68" fill="#d8e3c6"/>`;
    s += `<line x1="450" y1="${y + 120}" x2="450" y2="${y + 296}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="8 6"/>` + T(440, y + 288, 'boundary', { size: 15, anchor: 'end', fill: C.muted });
    // claimant's building on right
    s += `<rect x="560" y="${y + 150}" width="150" height="80" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/><path d="M550,${y + 150} L635,${y + 110} L720,${y + 150} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>` + T(635, y + 200, 'claimant\'s land', { size: 15, anchor: 'middle', fill: C.ink, weight: 600 });
    // neighbour building with overhanging sign
    s += `<rect x="200" y="${y + 120}" width="150" height="110" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/><line x1="350" y1="${y + 140}" x2="520" y2="${y + 140}" stroke="${C.ink}" stroke-width="4"/><rect x="470" y="${y + 144}" width="70" height="32" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + T(505, y + 166, 'SIGN', { size: 15, weight: 700, anchor: 'middle' });
    s += `<line x1="430" y1="${y + 112}" x2="490" y2="${y + 144}" stroke="${C.olive}" stroke-width="2"/><rect x="250" y="${y + 80}" width="200" height="36" rx="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + T(350, y + 104, '✓ trespass: Kelsen', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    // plane high
    s += `<path d="M640,${y + 50} l70,0 l18,-12 l6,0 l-8,14 l20,0 l-8,8 l-98,0 Z" fill="${C.blue}"/>` + `<rect x="580" y="${y + 70}" width="270" height="40" rx="8" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(715, y + 96, '✗ not trespass: Bernstein', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
    s += T(50, y + 40, 'Airspace at the height needed for ordinary use', { size: 16, weight: 700 }) + T(50, y + 62, 'but not aircraft at a reasonable height', { size: 16, fill: C.muted });
    return { s, h: 300 };
  },
  (y) => grid(y, [
    { kicker: 'NO DAMAGE NEEDED', body: 'Actionable without proof of damage. ' + 'Entering (even by mistake about whose land it is), remaining after permission ends, placing things on land.' },
    { kicker: 'CONTINUING TRESPASS', body: 'Leaving an object on the land gives a fresh cause of action each day.' },
    { kicker: 'DEFENCES', body: 'Permission (licence) and lawful authority.', fill: C.cream, edge: C.olive },
  ], 3, { gap: 12, vcenter: false, card: { size: 15, bfill: C.ink, pad: 16 } }),
],
'A neighbour\'s sign overhangs the claimant\'s land at a low height, marked as trespass (Kelsen v Imperial Tobacco), while an aircraft flies high above, marked as not trespass (Bernstein v Skyviews). Cards note that trespass is actionable without proof of damage, that a continuing trespass gives a fresh cause of action each day, and the defences of permission and lawful authority.',
'Trespass needs no damage and reaches the airspace needed for ordinary use, but not high-flying aircraft.', H2.tres);

// 06 Zara worked example
F('06-zara-worked-example', 'Applying the 1984 Act to a child trespasser', 'Zara, 9, climbs through a gap in a fence into a disused quarry and falls from a ledge', [
  (y) => steps(y, [
    { title: 'Is she a visitor or a trespasser?', body: 'A **trespasser**, so the **1984 Act** applies.' },
    { title: 's 1(3)(a) and (b)', body: 'The owner knew of the danger and that children came in: both met.' },
    { title: 's 1(3)(c)', body: 'Risks to children from a quarry are ones the owner could reasonably be expected to guard against.' },
    { title: 'Breach and remedy', body: 'Mending the fence was cheap and practical, so breach is likely. Damages cover her **personal injury**.' },
  ], { highlight: [3], size: 16, tsize: 18, gap: 10, pad: 14 }),
  (y) => note(y, 'Remember', 'The 1984 Act covers personal injury only, not property (s 1(8)). *Tomlinson v Congleton BC* [2003]: no liability where the danger was obvious.', { size: 16 }),
],
'Four steps for Zara, a nine-year-old trespasser injured in a quarry: she is a trespasser so the 1984 Act applies; the owner knew of the danger and of children (s 1(3)(a) and (b)); the risk is one the owner should guard against (s 1(3)(c)); and a cheap fence repair means breach is likely, with damages for personal injury.',
'Trespasser → 1984 Act → s 1(3) conditions → breach → damages for personal injury.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
