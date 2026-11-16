import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-psychology-8182-memory';
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
  types: '## Processes and types of memory',
  murdock: '## Serial position: Murdock\'s study',
  bartlett: '## Memory as an active process: Bartlett',
  acc: '## Factors affecting the accuracy of memory',
  we1: '## Worked example 1: applying memory to a scenario',
  we2: '## Worked example 2: planning an extended answer',
};

// 01 Encoding and types
F('01-encoding-and-types', 'Encoding and types of memory', '', [
  (y) => { const s = T(30, y + 14, 'THREE PROCESSES', { size: 15, weight: 700, fill: C.muted }); const r = row(y + 26, [{ title: 'Encoding', body: 'input' }, { title: 'Storage', body: '' }, { title: 'Retrieval', body: 'output' }], { arrows: true, gap: 50, card: { size: 16, tsize: 19, align: 'middle', fill: C.tealLight, edge: C.tealDark } }); return { s: s + r.s, h: r.h + 26 }; },
  (y) => { const s = T(30, y + 14, 'ENCODING CAN BE', { size: 15, weight: 700, fill: C.muted }); const r = row(y + 26, [
    { title: 'Acoustic', body: 'by sound: repeating a phone number aloud' },
    { title: 'Visual', body: 'by image' },
    { title: 'Semantic', body: 'by meaning: the gist of a conversation, not the exact words' },
  ], { gap: 14, card: { size: 16, tsize: 19 } }); return { s: s + r.s, h: r.h + 26 }; },
  (y) => { const s = T(30, y + 14, 'THREE TYPES OF LONG-TERM MEMORY', { size: 15, weight: 700, fill: C.muted }); const r = row(y + 26, [
    { kicker: 'EPISODIC', title: 'Personal experiences', body: 'tied to a time and place: your last birthday party. Conscious, feels personal.', fill: C.cream, edge: C.olive },
    { kicker: 'SEMANTIC', title: 'Facts and meanings', body: 'without a personal context: a triangle has three sides. Conscious.' },
    { kicker: 'PROCEDURAL', title: 'Skills and actions', body: 'tying a shoelace. Hard to explain in words.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19 } }); return { s: s + r.s, h: r.h + 26 }; },
  (y) => note(y, 'Clive Wearing: evidence the types are separate', 'After brain damage he lost most of his **episodic** memory but could still play the piano, a **procedural** skill. Case studies are rich in detail but hard to generalise.', { size: 16 }),
],
'Encoding, storage and retrieval are linked. Encoding can be acoustic, visual or semantic. Long-term memory has three types: episodic (personal experiences), semantic (facts) and procedural (skills). Clive Wearing lost most episodic memory but kept the procedural skill of playing the piano.',
'Episodic, semantic and procedural memories are stored differently, and can be lost separately.', H2.types);

// 02 Serial position curve
F('02-serial-position-curve', 'Murdock\'s serial position curve', 'Free recall of a list of unrelated words. Illustrative shape', [
  (y) => {
    const x0 = 110, x1 = 820, yb = y + 300, yt = y + 30;
    let s = `<line x1="${x0}" y1="${yb}" x2="${x1}" y2="${yb}" stroke="${C.ink}" stroke-width="3"/><line x1="${x0}" y1="${yb}" x2="${x0}" y2="${yt}" stroke="${C.ink}" stroke-width="3"/>`;
    s += T(465, yb + 34, 'Position of the word in the list →', { size: 17, anchor: 'middle', weight: 600 }) + T(x0 - 14, yb + 22, 'first', { size: 15, anchor: 'middle', fill: C.muted }) + T(x1, yb + 22, 'last', { size: 15, anchor: 'middle', fill: C.muted });
    s += `<text x="${x0 - 24}" y="${(yb + yt) / 2}" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x0 - 24} ${(yb + yt) / 2})">Chance of recall →</text>`;
    s += `<rect x="${x0 + 4}" y="${yt}" width="150" height="${yb - yt}" fill="${C.cream}" opacity="0.7"/><rect x="${x1 - 150}" y="${yt}" width="150" height="${yb - yt}" fill="${C.tealLight}" opacity="0.8"/>`;
    s += path(`M${x0 + 20},${yt + 30} C${x0 + 120},${yt + 60} ${x0 + 160},${yb - 70} ${x0 + 260},${yb - 70} L${x1 - 250},${yb - 70} C${x1 - 150},${yb - 70} ${x1 - 110},${yt + 50} ${x1 - 10},${yt + 10}`, { w: 5, stroke: C.ink });
    s += T(x0 + 80, yb - 20, 'PRIMACY', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
    s += T(x1 - 75, yb - 20, 'RECENCY', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += T(465, yb - 90, 'middle words recalled worst', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: 350 };
  },
  (y) => row(y, [
    { kicker: 'PRIMACY: EARLY WORDS', title: 'Rehearsed into the long-term store', fill: C.cream, edge: C.olive },
    { kicker: 'MIDDLE WORDS', title: 'Pushed out of the short-term store before enough rehearsal' },
    { kicker: 'RECENCY: LAST WORDS', title: 'Still in the short-term store at recall', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 12, card: { size: 16, tsize: 17 } }),
  (y) => row(y, [
    { kicker: 'IV AND DV', body: 'IV: position of the word. DV: whether it was recalled.' },
    { kicker: 'CONCLUSION', body: 'Supports separate short-term and long-term stores.' },
    { kicker: 'EVALUATION', body: 'Controlled, easy to replicate; but unrelated word lists lack ecological validity.' },
  ], { gap: 12, vcenter: false, card: { size: 16, bfill: C.ink, pad: 15 } }),
],
'A U-shaped curve of chance of recall against position in a list. Early words show a primacy effect because they were rehearsed into the long-term store; the last words show a recency effect because they were still in the short-term store; middle words are recalled worst. Cards give the variables, conclusion and evaluation.',
'Primacy from long-term memory, recency from short-term memory: evidence for separate stores.', H2.murdock);

// 03 War of the Ghosts
F('03-war-of-the-ghosts', 'Bartlett: memory is rebuilt, not replayed', 'The War of the Ghosts: repeated reproductions of an unfamiliar folk tale', [
  (y) => {
    let s = '';
    const pages = [[60, 230, 'Original tale', 'strange to English readers'], [330, 180, 'Reproduction', 'details left out'], [580, 130, 'Later reproduction', 'shorter, more familiar']];
    pages.forEach(([x, h, a, b], i) => {
      const top = y + 240 - h;
      s += `<rect x="${x}" y="${top}" width="200" height="${h}" rx="6" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
      const n = Math.floor((h - 30) / 22);
      for (let k = 0; k < n; k++) {
        const lw = 160 - ((k * 37) % 50);
        const col = i > 0 && k === 1 ? C.mustard : C.panelEdge;
        s += `<line x1="${x + 20}" y1="${top + 26 + k * 22}" x2="${x + 20 + lw}" y2="${top + 26 + k * 22}" stroke="${col}" stroke-width="7" stroke-linecap="round"/>`;
      }
      s += T(x + 100, y + 268, a, { size: 17, weight: 700, anchor: 'middle' }) + T(x + 100, y + 292, b, { size: 16, anchor: 'middle', fill: C.muted });
      if (i < 2) s += arrow(x + 208, y + 180, pages[i + 1][0] - 10, y + 180, { w: 3.5 });
    });
    s += T(840, y + 120, '', {});
    return { s, h: 300 };
  },
  (y) => row(y, [
    { kicker: 'CHANGE 1', title: 'Shortened' },
    { kicker: 'CHANGE 2', title: 'Unfamiliar details omitted' },
    { kicker: 'CHANGE 3', title: 'Transformed into familiar forms', fill: C.cream, edge: C.olive },
  ], { gap: 14, card: { size: 16, tsize: 19, align: 'middle' } }),
  (y) => row(y, [
    { kicker: 'SCHEMAS', title: 'Fill the gaps', body: 'We store fragments and rebuild the memory at each recall using mental frameworks.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'EFFORT AFTER MEANING', title: 'Make it make sense', body: 'Unfamiliar information is changed to fit what we already know.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, card: { size: 16, tsize: 19 } }),
  (y) => note(y, 'Evaluation', 'Supports the role of culture and expectation (eyewitness testimony). But no standardised instructions or request to be accurate, and qualitative data were open to interpretation.', { size: 16 }),
],
'Three pages get shorter as an unfamiliar folk tale is reproduced again and again, with some lines changed. The changes: shortened, unfamiliar details omitted and details transformed into familiar forms. Schemas fill gaps and effort after meaning makes the story fit what we know. An evaluation note follows.',
'Each recall rebuilds the story to fit our schemas: shorter, simpler, more familiar.', H2.bartlett);

// 04 Factors affecting accuracy
F('04-accuracy-factors', 'Why memories can be inaccurate', '', [
  (y) => {
    let s = T(30, y + 16, 'INTERFERENCE: SIMILAR MEMORIES COMPETE', { size: 15, weight: 700, fill: C.muted });
    const rowI = (yy, lab, ex, dirFwd) => {
      let r = panel(30, yy, 840, 92) + T(50, yy + 36, lab, { size: 19, weight: 700 }) + T(50, yy + 64, ex, { size: 16, fill: C.muted });
      r += `<rect x="560" y="${yy + 24}" width="90" height="44" rx="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(605, yy + 52, 'old', { size: 17, weight: 700, anchor: 'middle' });
      r += `<rect x="760" y="${yy + 24}" width="90" height="44" rx="8" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(805, yy + 52, 'new', { size: 17, weight: 700, anchor: 'middle' });
      r += dirFwd ? arrow(656, yy + 46, 752, yy + 46, { w: 4, color: C.rust, marker: 'ahR' }) : arrow(754, yy + 46, 658, yy + 46, { w: 4, color: C.rust, marker: 'ahR' });
      return r;
    };
    s += rowI(y + 28, 'Proactive', 'old learning disrupts new: an old PIN keeps coming to mind', true);
    s += rowI(y + 132, 'Retroactive', 'new learning disrupts old: last term\'s timetable is lost', false);
    return { s, h: 224 };
  },
  (y) => row(y, [
    { kicker: 'CONTEXT', title: 'Matching settings act as a cue', body: 'Godden and Baddeley: divers recalled words better when tested in the same environment, underwater or on land, as where they learned them.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FALSE MEMORIES', kfill: C.rust, title: 'Sincere recall of what never happened', body: 'Loftus: suggestion led people to "remember" invented childhood events. Fits reconstructive theory.', fill: C.cream, edge: C.olive },
  ], { gap: 16, card: { size: 16, tsize: 18 } }),
],
'Two interference rows: proactive, where old learning disrupts new (an old PIN), and retroactive, where new learning disrupts old (last term\'s timetable). Cards cover context, where divers recalled better in the same environment as learning, and false memories, where suggestion produced recall of invented events.',
'Interference, a change of context and suggestion can all make recall inaccurate.', H2.acc);

// 05 Scenario answer structure
F('05-scenario-answer', 'Three marks for a scenario answer', 'Jamal keeps typing his old locker code, 4729, instead of 8153', [
  (y) => steps(y, [
    { title: 'Name the concept [1]', body: '"This is **proactive interference**…"' },
    { title: 'Explain it [1]', body: '"…where information learned earlier disrupts the recall of newer, similar information."' },
    { title: 'Link it to the scenario [1]', body: '"Jamal\'s old code is interfering with retrieval of his new code because both are four-digit numbers used for the same purpose."' },
  ], { highlight: [2], size: 17, tsize: 19, gap: 10, pad: 16 }),
  (y) => note(y, '', 'Without "Jamal" or the codes, the answer is only a definition: it loses the application mark.', { align: 'middle', size: 17 }),
],
'Three numbered steps for a three-mark scenario answer about Jamal\'s locker codes: name the concept (proactive interference), explain it, and link it to the scenario. The last step is highlighted because it earns the application mark.',
'Name it, explain it, then link it to the person in the question.', H2.we1);

// 06 Extended answer plan
F('06-extended-answer-plan', 'Planning "describe and evaluate"', 'Bartlett\'s Theory of Reconstructive Memory', [
  (y) => segbar(y, [{ label: 'Describe', sub: 'about half', frac: 1, fill: C.tealLight }, { label: 'Evaluate', sub: 'about half', frac: 1, fill: C.cream }, { label: 'Conclude', sub: 'one sentence', frac: 0.35, fill: C.mustard }], { h: 70 }),
  (y) => row(y, [
    { kicker: 'DESCRIBE', body: ['Memory is rebuilt at recall', 'Schemas fill gaps; effort after meaning', 'War of the Ghosts procedure', 'Shortening, omission, transformation to familiar'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'EVALUATE', kfill: C.olive, body: ['+ Explains why eyewitness accounts differ; false memory research supports it', '− Lack of control and standardised instructions', '− Qualitative data, subjective scoring'], fill: C.cream, edge: C.olive },
    { kicker: 'CONCLUDE', body: 'Influential, but the original evidence is not tightly controlled.' },
  ], { gap: 12, fr: [1.15, 1.15, 0.7], vcenter: false, card: { size: 16, bfill: C.ink, pad: 16, gap: 6 } }),
],
'A bar splits an extended answer into describe (about half), evaluate (about half) and a one-sentence conclusion. Below, the describe column lists reconstruction, schemas, effort after meaning and the War of the Ghosts changes; the evaluate column gives one strength and two weaknesses; the conclusion weighs them up.',
'Split the answer roughly half description, half evaluation, then weigh up.', H2.we2);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
