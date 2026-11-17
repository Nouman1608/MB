import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-psychology-8182-psychological-problems';
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
  rates: '## Mental health and why rates change',
  dep: '## Clinical depression',
  add: '## Addiction',
};

// 01 Why recorded rates change
F('01-why-rates-change', 'Why recorded rates of mental health problems change', '', [
  (y) => row(y, [
    { kicker: 'INCREASED RECOGNITION', title: 'More problems identified and diagnosed', body: 'Better understanding of mental health' },
    { kicker: 'LESS STIGMA', title: 'More people seek help', body: 'As attitudes change, more cases are recorded' },
    { kicker: 'MODERN LIVING', kfill: C.rust, title: 'More people may be affected', body: 'Social isolation, pressure at work or school, financial insecurity', fill: C.cream, edge: C.olive },
  ], { gap: 14, card: { size: 16, tsize: 18 } }),
  (y) => {
    let s = path(`M175,${y} L175,${y + 26} L450,${y + 26} M590,${y} L590,${y + 26} L450,${y + 26} L450,${y + 52}`, { w: 3 }) + arrow(450, y + 40, 450, y + 58, { w: 3 });
    s += path(`M727,${y} L727,${y + 58}`, { w: 3, stroke: C.olive, extra: 'marker-end="url(#ahO)"' });
    const a = card(170, y + 64, 560, { title: 'More recorded cases', body: 'without necessarily more people being unwell', align: 'middle', size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark });
    const b = card(610, y + 64, 260, { title: 'A real increase', align: 'middle', size: 16, tsize: 19, fill: C.cream, edge: C.olive, minH: a.h, vcenter: true });
    const a2 = card(30, y + 64, 550, { title: 'More recorded cases', body: 'without necessarily more people being unwell', align: 'middle', size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark });
    s = path(`M175,${y} L175,${y + 26} L590,${y + 26} M590,${y} L590,${y + 26}`, { w: 3 }) + arrow(305, y + 26, 305, y + 58, { w: 3 }) + path(`M740,${y} L740,${y + 58}`, { w: 3, stroke: C.olive, extra: 'marker-end="url(#ahO)"' });
    return { s: s + a2.s + b.s, h: 64 + a.h };
  },
  (y) => note(y, 'Good mental health is more than the absence of illness', 'Coping with the normal stresses of life, working productively, forming positive relationships, contributing to the community. Beliefs about mental health problems vary between cultures.', { size: 16, fill: C.panel, edge: C.panelEdge }),
],
'Three reasons recorded rates change: increased recognition, less stigma and the challenges of modern living. The first two increase recorded cases without necessarily meaning more people are unwell; modern living suggests a real increase. A note defines good mental health.',
'Recognition and less stigma raise recorded cases; modern living may mean a real rise.', H2.rates);

// 02 Mood patterns
F('02-mood-patterns', 'Sadness, unipolar and bipolar depression', 'Schematic mood over time', [
  (y) => {
    const panelH = 130;
    const plot = (yy, title, sub, d, extra = '') => {
      let s = panel(30, yy, 840, panelH) + T(50, yy + 36, title, { size: 19, weight: 700 }) + para(50, yy + 62, sub, 230, { size: 15, fill: C.muted }).s;
      const mid = yy + panelH / 2;
      s += `<line x1="300" y1="${mid}" x2="850" y2="${mid}" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="6 5"/>` + T(300, mid - 8, 'usual mood', { size: 15, fill: C.muted });
      s += path(d(mid), { w: 4.5, stroke: C.tealDark }) + extra;
      return s;
    };
    let s = plot(y, 'Sadness', 'a normal, short-lived response to events such as a loss', (m) => `M300,${m} L430,${m} C460,${m} 470,${m + 40} 500,${m + 40} C530,${m + 40} 540,${m} 570,${m} L850,${m}`);
    s += plot(y + panelH + 12, 'Unipolar depression', 'persistent low mood, no mania', (m) => `M300,${m} L360,${m} C390,${m} 400,${m + 45} 430,${m + 45} L850,${m + 45}`);
    s += plot(y + 2 * (panelH + 12), 'Bipolar depression', 'depression alternating with mania', (m) => `M300,${m} C340,${m} 350,${m + 45} 390,${m + 45} C440,${m + 45} 450,${m - 30} 500,${m - 30} C550,${m - 30} 560,${m + 45} 610,${m + 45} C660,${m + 45} 670,${m - 30} 720,${m - 30} C770,${m - 30} 780,${m} 850,${m}`, T(500, y + 2 * (panelH + 12) + 22, 'mania', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }));
    return { s, h: 3 * panelH + 24 };
  },
  (y) => card(30, y, 840, { kicker: 'ICD DIAGNOSIS', title: 'Mild, moderate or severe, by the number and severity of symptoms', body: 'low mood · loss of interest and enjoyment · reduced energy · changes in sleep and appetite · decreased self-confidence', size: 16, tsize: 18, fill: C.cream, edge: C.olive }),
],
'Three schematic mood lines. Sadness dips briefly below usual mood and recovers. Unipolar depression drops and stays low. Bipolar depression swings between depression and mania. A card lists the ICD symptoms used to classify depressive episodes as mild, moderate or severe.',
'Sadness passes; unipolar depression persists; bipolar adds periods of mania.', H2.dep);

// 03 Attributional style
F('03-depressive-attributions', 'A depressive attributional style', 'How a person explains a negative event, such as failing a test', [
  (y) => row(y, [
    { kicker: 'INTERNAL', title: '"It\'s my fault"' },
    { kicker: 'STABLE', title: '"It will always be like this"' },
    { kicker: 'GLOBAL', title: '"It ruins everything"' },
  ], { gap: 14, card: { size: 16, tsize: 20, align: 'middle', fill: C.cream, edge: C.olive, kfill: C.olive } }),
  (y) => row(y, [
    { kicker: 'NEGATIVE SCHEMAS', title: 'Mental frameworks, often from early experiences', body: 'lead people to see themselves, the world and the future negatively' },
    { kicker: 'TREATMENT', title: 'CBT', body: 'Identify negative, irrational thoughts, challenge them, and replace unhelpful behaviour with positive activity', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 50, card: { size: 16, tsize: 18 } }),
  (y) => note(y, 'Evaluation', 'Leads directly to an effective therapy. But depression may cause negative thinking rather than the reverse, and the explanation can seem to blame the individual while overlooking life circumstances.', { size: 16 }),
],
'Three cards show a depressive attributional style: internal (it\'s my fault), stable (it will always be like this) and global (it ruins everything). Negative schemas lead to CBT, which challenges negative thoughts. An evaluation note follows.',
'Internal, stable, global: the depressive way of explaining bad events, which CBT targets.', H2.dep);

// 04 Wiles RCT
F('04-wiles-cbt-trial', 'Wiles (2013): a randomised controlled trial of CBT', '', [
  (y) => card(250, y, 400, { title: 'Patients in UK GP practices', body: 'depression had not responded to antidepressants', align: 'middle', size: 16, tsize: 19 }),
  (y) => { const c = chip(450, y + 8, 'random allocation', { anchor: 'middle', size: 16, fill: C.mustard }); return { s: arrow(380, y - 18, 230, y + 40, { w: 3 }) + arrow(520, y - 18, 670, y + 40, { w: 3 }) + c.s, h: 40 }; },
  (y) => row(y, [
    { kicker: 'CONTROL', title: 'Usual care', body: 'including medication' },
    { kicker: 'EXPERIMENTAL', title: 'Usual care + CBT', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 140, card: { size: 16, tsize: 19, align: 'middle' } }),
  (y) => P('Symptoms measured with the **Beck Depression Inventory**', { anchor: 'middle', size: 17, fill: C.ink })(y),
  (y) => note(y, 'Finding', 'The CBT group showed a greater reduction in symptoms at **six months**, and the benefit was still present at **twelve months**.', { align: 'middle', size: 17 }),
  (y) => row(y, [
    { kicker: '+ STRENGTH', body: 'Random allocation and a large sample make results trustworthy; supports combining treatments.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESS', kfill: C.rust, body: 'Patients knew which treatment they received; volunteers may have been more motivated than typical patients.' },
  ], { gap: 14, card: { size: 16, bfill: C.ink } }),
],
'Patients whose depression had not responded to antidepressants were randomly allocated to usual care or usual care plus CBT. Symptoms were measured with the Beck Depression Inventory. The CBT group improved more at six months, and the benefit lasted to twelve months. Strength and weakness cards follow.',
'Adding CBT to usual care reduced symptoms more, and the benefit lasted a year.', H2.dep);

// 05 ICD dependence
F('05-icd-dependence', 'ICD features of dependence', '', [
  (y) => hub(y, ['Dependence'], [
    { title: 'Strong desire', body: 'to take the substance' },
    { title: 'Difficulty controlling use' },
    { title: 'Withdrawal', body: 'a physiological state when use stops' },
  ], [
    { title: 'Tolerance', body: 'needing more for the same effect' },
    { title: 'Neglect of other pleasures', body: 'and interests' },
    { title: 'Persistent use', body: 'despite clear evidence of harm' },
  ], { cardW: 280, r: 86, card: { align: 'middle', minH: 74, vcenter: true } }),
  (y) => row(y, [
    { kicker: 'SUBSTANCE MISUSE', body: 'Harmful or unintended use, such as drinking too much on one occasion' },
    { kicker: 'SUBSTANCE ABUSE', body: 'A repeated pattern of harmful use, without necessarily being dependent' },
    { kicker: 'ADDICTION / DEPENDENCE', body: 'A compulsion to use despite harm, with physical and psychological features', fill: C.cream, edge: C.olive },
  ], { gap: 12, vcenter: false, card: { size: 16, bfill: C.ink, pad: 16 } }),
],
'Six ICD features of dependence surround a central circle: strong desire, difficulty controlling use, withdrawal, tolerance, neglect of other pleasures and persistent use despite harm. Below, substance misuse, substance abuse and addiction or dependence are distinguished.',
'Six ICD features mark dependence; misuse and abuse are not the same thing.', H2.add);

// 06 Kaij twin study
F('06-kaij-twin-study', 'Kaij (1960): a twin study of alcohol abuse', 'Male twin pairs in Sweden; at least one twin registered for alcohol abuse', [
  (y) => {
    let s = '';
    const pair = (x, lab, sub, f1, f2) => {
      let g = panel(x, y, 400, 220);
      const p = (cx, f) => `<circle cx="${cx}" cy="${y + 70}" r="22" fill="${f}" stroke="${C.ink}" stroke-width="3"/><rect x="${cx - 26}" y="${y + 96}" width="52" height="56" rx="18" fill="${f}" stroke="${C.ink}" stroke-width="3"/>`;
      g += p(x + 150, f1) + p(x + 250, f2) + T(x + 200, y + 186, lab, { size: 19, weight: 700, anchor: 'middle' }) + T(x + 200, y + 208, sub, { size: 15, anchor: 'middle', fill: C.muted });
      return g;
    };
    s += pair(30, 'Identical (monozygotic)', '', C.teal, C.teal) + pair(470, 'Non-identical (dizygotic)', '', C.teal, C.cream);
    return { s, h: 220 };
  },
  (y) => {
    let s = T(30, y + 16, 'CONCORDANCE FOR ALCOHOL ABUSE (illustrative heights, no figures given)', { size: 15, weight: 700, fill: C.muted });
    s += `<rect x="150" y="${y + 40}" width="460" height="44" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(140, y + 68, 'Identical', { size: 17, weight: 700, anchor: 'end' }) + T(622, y + 68, 'higher', { size: 17, weight: 700, fill: C.tealDark });
    s += `<rect x="150" y="${y + 96}" width="240" height="44" rx="6" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + T(140, y + 124, 'Non-identical', { size: 17, weight: 700, anchor: 'end' }) + T(402, y + 124, 'lower', { size: 17, weight: 700, fill: C.olive });
    return { s, h: 140 };
  },
  (y) => row(y, [
    { kicker: '+ SUPPORTS', body: 'A genetic contribution to addiction.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− NOT 100%', kfill: C.rust, body: 'Concordance was not 100%, so environment must matter too.' },
    { kicker: '− OTHER ISSUES', kfill: C.rust, body: 'Identical twins may share a more similar environment; older ways of judging twin type were less reliable.' },
  ], { gap: 12, vcenter: false, card: { size: 16, bfill: C.ink, pad: 16 } }),
],
'Two pairs of twins: identical (monozygotic) and non-identical (dizygotic). Kaij found higher concordance for alcohol abuse in identical than non-identical twins, shown as a longer bar with no figures. Evaluation: it supports a genetic contribution, but concordance was not 100 percent and twin environments may differ.',
'Higher concordance in identical twins suggests genes matter, but not 100% means environment does too.', H2.add);

// 07 Aversion therapy
F('07-aversion-therapy', 'Aversion therapy: classical conditioning', '', [
  (y) => {
    const box = (x, yy, w, t1, f, e) => card(x, yy, w, { title: t1, align: 'middle', size: 16, tsize: 19, fill: f, edge: e, minH: 66, vcenter: true });
    let s = T(30, y + 16, 'DURING THERAPY', { size: 15, weight: 700, fill: C.muted });
    s += box(30, y + 30, 220, 'Alcohol', C.panel, C.panelEdge).s + T(270, y + 72, '+', { size: 30, weight: 700, anchor: 'middle' }) + box(290, y + 30, 260, 'Drug that causes nausea', C.cream, C.olive).s + arrow(560, y + 63, 610, y + 63, { w: 3.5 }) + box(620, y + 30, 250, 'Feeling ill', C.cream, C.olive).s;
    s += T(30, y + 136, 'AFTER CONDITIONING', { size: 15, weight: 700, fill: C.muted });
    s += box(30, y + 150, 220, 'Alcohol', C.panel, C.panelEdge).s + arrow(260, y + 183, 610, y + 183, { w: 3.5, color: C.rust, marker: 'ahR' }) + T(435, y + 172, 'learned association', { size: 16, weight: 600, anchor: 'middle', fill: C.rust }) + box(620, y + 150, 250, 'Feeling ill', C.cream, C.olive).s;
    return { s, h: 216 };
  },
  (y) => row(y, [
    { kicker: 'AVERSION THERAPY − WEAKNESSES', kfill: C.rust, body: 'Unpleasant, raising ethical concerns; the effect may fade outside the clinic.' },
    { kicker: 'SELF-MANAGEMENT: TWELVE-STEP, SELF-HELP', body: '+ Free, widely available, a new supportive peer group. − High drop-out; depends on motivation; hard to evaluate.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink, pad: 16 } }),
],
'During therapy alcohol is paired with a drug that causes nausea, producing feeling ill. After conditioning, alcohol alone is associated with feeling ill. Cards evaluate aversion therapy and self-management programmes such as twelve-step groups.',
'Pairing alcohol with nausea teaches an association that puts the person off drinking.', H2.add);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
