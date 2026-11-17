import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-psychology-8182-development';
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
  brain: '## Early brain development',
  piaget: '## Piaget\'s stage theory',
  chall: '## Studies that challenge Piaget',
  dweck: '## Dweck\'s Mindset Theory',
  ls: '## Learning styles and Willingham\'s criticism',
  we1: '## Worked example 1: applying Piaget',
};

// 01 Brain develops bottom to top
F('01-brain-develops-bottom-up', 'The brain develops from the bottom up', 'Basic survival functions first, complex thinking last', [
  (y) => {
    const L = [
      ['Cortex', 'Thinking, language, memory, planning', 'Cognition; front parts keep maturing into adolescence', C.cream, C.olive],
      ['Cerebellum', 'Co-ordinates movement, balance, posture', 'Movement: sitting, crawling, walking', C.tealLight, C.tealDark],
      ['Thalamus', 'Relays information from the senses to the cortex', 'Sensory processing', C.tealLight, C.tealDark],
      ['Brain stem', 'Controls automatic body processes', 'Autonomic functions: breathing, heart rate, swallowing, needed from birth', C.teal, C.tealDark],
    ];
    let s = '', cy = y;
    L.forEach(([n, f, m, fill, e], i) => {
      const h = Math.max(card(110, cy, 300, { title: n, body: f, size: 16, tsize: 20, pad: 16 }).h, card(450, cy, 420, { kicker: 'MAKES POSSIBLE', body: m, size: 17, pad: 16 }).h);
      const a = card(110, cy, 300, { title: n, body: f, size: 16, tsize: 20, fill, edge: e, minH: h, vcenter: true, pad: 16 });
      const b = card(450, cy, 420, { kicker: 'MAKES POSSIBLE', body: m, size: 17, bfill: C.ink, minH: h, vcenter: true, pad: 16 });
      s += a.s + b.s + arrow(414, cy + h / 2, 444, cy + h / 2, { w: 3 }) + badge(60, cy + h / 2, 22, String(4 - i), i === 0 ? C.mustard : C.cream);
      cy += h + 12;
    });
    return { s: `<line x1="60" y1="${y + 30}" x2="60" y2="${cy - 40}" stroke="${C.panelEdge}" stroke-width="4"/>` + s, h: cy - 12 - y };
  },
  (y) => row(y, [
    { kicker: 'NATURE', title: 'Genes set the order', body: 'which is why the sequence is broadly the same in all children' },
    { kicker: 'NURTURE', title: 'Affects how well it develops', body: 'diet and health in pregnancy, avoiding alcohol; stimulation, play and interaction after birth' },
  ], { gap: 60, card: { size: 16, tsize: 19 } }),
  (y) => P('Best answer: brain development is an **interaction** of nature and nurture.', { anchor: 'middle', size: 18, fill: C.ink })(y),
],
'Four levels numbered from the bottom: the brain stem (autonomic functions such as breathing), the thalamus (sensory processing), the cerebellum (movement such as crawling and walking) and the cortex (cognition, with front parts maturing into adolescence). Genes set the order; nurture affects how well the brain develops.',
'Brain stem, thalamus, cerebellum, cortex: genes set the order, nurture shapes how well.', H2.brain);

// 02 Assimilation and accommodation
F('02-assimilation-accommodation', 'Assimilation and accommodation', 'How a child\'s schemas change', [
  (y) => {
    const top = card(300, y, 300, { title: 'New information', body: 'meets an existing schema', align: 'middle', size: 16, tsize: 20, fill: C.cream, edge: C.olive });
    const yy = y + top.h + 70;
    const r = row(yy, [
      { kicker: 'IT FITS', title: 'Assimilate', body: 'Add it to the existing schema', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'IT DOES NOT FIT', kfill: C.rust, title: 'Accommodate', body: 'Uncertainty, so change the schema or create a new one', fill: C.panel },
    ], { gap: 200, card: { size: 17, tsize: 21, align: 'middle' } });
    const a = path(`M400,${y + top.h + 4} C400,${yy - 30} 200,${yy - 40} 200,${yy - 6}`, { w: 3.5, extra: 'marker-end="url(#ah)"' }) + path(`M500,${y + top.h + 4} C500,${yy - 30} 700,${yy - 40} 700,${yy - 6}`, { w: 3.5, extra: 'marker-end="url(#ah)"' });
    return { s: top.s + a + r.s, h: yy + r.h - y };
  },
  (y) => P('Piaget saw children as **active learners** who build schemas: mental frameworks.', { anchor: 'middle', size: 17, fill: C.ink })(y),
],
'New information meets an existing schema. If it fits, the child assimilates it into the schema. If it does not fit, the child feels uncertain and accommodates, changing the schema or creating a new one.',
'Assimilate when it fits; accommodate when it does not.', H2.piaget);

// 03 Policeman doll
F('03-policeman-doll', 'Hughes: the \'policeman doll\' study', '', [
  (y) => {
    const cx = 230, cy = y + 175, R = 140;
    let s = `<rect x="${cx - R}" y="${cy - R}" width="${2 * R}" height="${2 * R}" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    // sight areas: policeman A (left) sees left two sections, B (bottom) sees bottom two
    s += `<rect x="${cx - R}" y="${cy - R}" width="${R}" height="${2 * R}" fill="${C.rust}" fill-opacity="0.13"/>`;
    s += `<rect x="${cx - R}" y="${cy}" width="${2 * R}" height="${R}" fill="${C.rust}" fill-opacity="0.13"/>`;
    s += `<rect x="${cx}" y="${cy - R}" width="${R}" height="${R}" fill="${C.mustard}" fill-opacity="0.55"/>`;
    s += `<line x1="${cx - R}" y1="${cy}" x2="${cx + R}" y2="${cy}" stroke="${C.ink}" stroke-width="9"/><line x1="${cx}" y1="${cy - R}" x2="${cx}" y2="${cy + R}" stroke="${C.ink}" stroke-width="9"/>`;
    const fig = (x, yy, f) => `<circle cx="${x}" cy="${yy - 16}" r="10" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${x - 11}" y="${yy - 4}" width="22" height="26" rx="8" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += fig(cx - R - 40, cy - 10, C.blue) + T(cx - R - 40, cy + 44, 'police', { size: 15, anchor: 'middle', fill: C.blue, weight: 700 });
    s += fig(cx - 20, cy + R + 36, C.blue) + T(cx + 26, cy + R + 44, 'police', { size: 15, fill: C.blue, weight: 700 });
    s += fig(cx + R / 2, cy - R / 2, C.panel) + T(cx + R / 2, cy - R / 2 + 46, 'boy doll', { size: 15, anchor: 'middle', weight: 700 });
    s += T(cx, y + 6, 'View from above: two walls make four sections', { size: 15, anchor: 'middle', fill: C.muted });
    const c = stack(y + 10, [
      { kicker: 'PROCEDURE', body: 'After practising with one policeman, young children hid a boy doll from two policemen placed so only one section was hidden from both.' },
      { kicker: 'FINDINGS', body: 'Most children hid the boy correctly.' },
      { kicker: 'CONCLUSION', body: 'They can take another\'s point of view much earlier than Piaget\'s mountain task suggested: hiding made human sense.', fill: C.cream, edge: C.olive },
    ], { x: 460, w: 410, gap: 10, card: { size: 16, bfill: C.ink, pad: 14 } });
    return { s: s + c.s, h: Math.max(c.h + 10, 2 * R + 90) };
  },
  (y) => row(y, [
    { kicker: '+ STRENGTH', body: 'The task was meaningful to children, which may give a truer picture of their ability.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESS', kfill: C.rust, body: 'A hiding game may be easier than seeing exactly what another person sees: the tasks may not measure the same thing.' },
  ], { gap: 14, card: { size: 16, bfill: C.ink } }),
],
'A view from above of two crossing walls making four sections, with two policemen outside whose views cover three sections; the boy doll is hidden in the one section neither can see. Cards give the procedure, the finding that most children hid the boy correctly, the conclusion, and a strength and weakness.',
'A task that made human sense showed young children are less egocentric than Piaget claimed.', H2.chall);

// 04 Dweck
F('04-fixed-growth-mindset', 'Dweck\'s Mindset Theory', '', [
  (y) => row(y, [
    { kicker: 'FIXED MINDSET', kfill: C.rust, title: 'Ability is set and cannot change', body: ['Avoids challenge', 'Gives up after failure'], bullets: true },
    { kicker: 'GROWTH MINDSET', title: 'Ability can be developed', body: ['through effort, good strategies and help from others', 'Sees mistakes as part of learning'], bullets: true, fill: C.tealLight, edge: C.tealDark },
  ], { gap: 18, vcenter: false, card: { size: 17, tsize: 20 } }),
  (y) => row(y, [
    { kicker: 'PRAISING ABILITY', kfill: C.rust, title: '"You\'re so clever"', body: 'can encourage a fixed mindset' },
    { kicker: 'PRAISING EFFORT AND STRATEGY', title: '"You kept trying different methods"', body: 'encourages a growth mindset', fill: C.cream, edge: C.olive },
  ], { gap: 18, card: { size: 17, tsize: 19 } }),
  (y) => note(y, 'Self-efficacy', 'Belief in your ability to succeed at a particular task: pupils who believe effort will pay off are more likely to keep going.', { fill: C.panel, edge: C.panelEdge, size: 17 }),
  (y) => row(y, [
    { kicker: '+ STRENGTH', body: 'Clear practical uses in schools; simple changes for teachers to try.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESS', kfill: C.rust, body: 'Later research found smaller effects on grades; mindset cannot overcome poor teaching or lack of resources.' },
  ], { gap: 14, card: { size: 16, bfill: C.ink } }),
],
'Two columns contrast a fixed mindset (ability is set; avoids challenge, gives up after failure) with a growth mindset (ability can be developed; mistakes are part of learning). Praising ability can encourage a fixed mindset; praising effort and strategy encourages a growth mindset. Self-efficacy and an evaluation follow.',
'Praise effort and strategy, not ability, to encourage a growth mindset.', H2.dweck);

// 05 Learning styles vs Willingham
F('05-learning-styles-willingham', 'Learning styles and Willingham\'s criticism', '', [
  (y) => row(y, [
    { kicker: 'LEARNING STYLES CLAIM', title: 'Match teaching to the learner\'s preferred style', body: ['**Verbalisers** prefer words, spoken or written', '**Visualisers** prefer pictures, diagrams and charts'], bullets: true },
    { kicker: 'WILLINGHAM\'S CRITICISM', kfill: C.olive, title: 'Match the method to the content', body: ['Little evidence that matching a preferred style improves learning', 'A map is best learned visually by everyone', 'Much of what we remember is stored as **meaning**'], bullets: true, fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 54, vcenter: false, card: { size: 16, tsize: 19 } }),
  (y) => note(y, '', 'So teaching should help pupils **think about what the material means**. People may have preferences, but they matter less than the content.', { align: 'middle', size: 17, fill: C.tealLight, edge: C.tealDark }),
],
'Learning styles theory claims teaching should match a preferred style, verbaliser or visualiser. Willingham\'s criticism: there is little evidence this improves learning; the method should suit the content, such as learning a map visually; and much of what we remember is stored as meaning.',
'Willingham: suit the method to the content and help pupils think about meaning.', H2.ls);

// 06 Juice conservation
F('06-conservation-of-liquid', 'Ava and the juice', 'Applying Piaget: conservation of liquid', [
  (y) => {
    const glass = (x, w, h, lev) => `<rect x="${x}" y="${y + 230 - h * lev}" width="${w}" height="${h * lev}" fill="${C.mustard}" fill-opacity="0.85"/>` + `<path d="M${x},${y + 230 - h} L${x},${y + 230} L${x + w},${y + 230} L${x + w},${y + 230 - h}" fill="none" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>`;
    let s = glass(110, 150, 110, 0.6) + glass(450, 64, 230, 0.68);
    s += arrow(290, y + 150, 420, y + 150, { w: 4 }) + T(355, y + 136, 'poured', { size: 16, anchor: 'middle', fill: C.muted });
    s += T(185, y + 262, 'short, wide glass', { size: 16, anchor: 'middle', fill: C.muted }) + T(482, y + 262, 'tall, thin glass', { size: 16, anchor: 'middle', fill: C.muted });
    const sp = card(580, y + 30, 290, { title: '"There is more juice now!"', body: 'Ava, aged 5', size: 16, tsize: 19, fill: C.cream, edge: C.olive });
    s += sp.s + `<path d="M590,${y + 30 + sp.h - 10} L550,${y + 30 + sp.h + 30} L620,${y + 30 + sp.h}" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
    return { s, h: 270 };
  },
  (y) => stack(y, [
    { title: 'Ava is in the pre-operational stage (2–7)', body: '[1]' },
    { title: 'She cannot conserve', body: 'She does not understand that quantity stays the same when appearance changes. [1]' },
    { title: 'She focuses on the height and ignores the width', body: 'so she believes there is more. [1]', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 10, card: { size: 16, tsize: 18, pad: 14 } }),
],
'Juice is poured from a short, wide glass into a tall, thin glass and five-year-old Ava says there is more juice now. Three points explain it: she is in the pre-operational stage, she cannot conserve, and she focuses on height and ignores width.',
'Same amount, different look: a pre-operational child judges by height alone.', H2.we1);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
