import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-psychology-8182-perception';
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
  sp: '## Sensation and perception',
  depth: '## Depth cues and constancy',
  gibson: '## Gibson\'s direct theory: the influence of nature',
  ill: '## Visual illusions explained',
  fac: '## Factors affecting perception',
};

// 01 Sensation vs perception
F('01-sensation-perception', 'Sensation and perception', '', [
  (y) => {
    let s = '';
    // tree icon upright
    const tree = (x, yy, flip) => { const g = `<rect x="-6" y="0" width="12" height="34" fill="${C.rockDark}"/><path d="M0,-58 L30,4 L-30,4 Z" fill="${C.grass}" stroke="${C.ink}" stroke-width="2.5"/>`; return `<g transform="translate(${x},${yy})${flip ? ' scale(1,-1)' : ''}">${g}</g>`; };
    s += panel(30, y, 250, 230) + tree(155, y + 120) + T(155, y + 210, 'the world: 3D, upright', { size: 16, anchor: 'middle', fill: C.muted });
    s += arrow(288, y + 115, 340, y + 115, { w: 4 });
    s += panel(348, y, 220, 230, C.tealLight, C.tealDark) + `<path d="M380,${y + 50} Q458,${y + 30} 536,${y + 50} L536,${y + 180} Q458,${y + 200} 380,${y + 180} Z" fill="${C.panel}" stroke="${C.tealDark}" stroke-width="2"/>` + tree(458, y + 95, true);
    s += T(458, y + 214, 'retina: flat, upside down', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
    s += arrow(576, y + 115, 628, y + 115, { w: 4 });
    s += panel(636, y, 234, 230, C.cream, C.olive) + tree(753, y + 120) + T(753, y + 210, 'what we see: 3D, upright', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
    return { s, h: 230 };
  },
  (y) => row(y, [
    { kicker: 'SENSATION', title: 'Detection of physical energy by the sense organs', body: 'light falling on the retina; sound waves reaching the ear', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PERCEPTION', kfill: C.olive, title: 'The brain organises and interprets it so it has meaning', body: 'adding what sensation alone does not contain', fill: C.cream, edge: C.olive },
  ], { gap: 18, card: { size: 16, tsize: 18 } }),
],
'An upright tree in the world forms a flat, upside-down image on the retina, yet we see a three-dimensional, upright tree. Sensation is the detection of physical energy by the sense organs; perception is the brain organising and interpreting it.',
'Sensation detects; perception interprets and adds what the retinal image lacks.', H2.sp);

// 02 Depth cues
F('02-depth-cues', 'Depth cues', 'How the brain judges distance from a flat retinal image', [
  (y) => {
    const W = 200, H = 170, g = 13.3;
    const box = (i, title, art) => { const x = 30 + i * (W + g); return panel(x, y + 26, W, H + 50) + `<g transform="translate(${x},${y + 26})">${art}</g>` + T(x + W / 2, y + 26 + H + 34, title, { size: 17, weight: 700, anchor: 'middle' }); };
    const boat = (x, yy, sc) => `<path d="M${x - 20 * sc},${yy} L${x + 20 * sc},${yy} L${x + 13 * sc},${yy + 9 * sc} L${x - 13 * sc},${yy + 9 * sc} Z" fill="${C.rust}"/><line x1="${x}" y1="${yy}" x2="${x}" y2="${yy - 18 * sc}" stroke="${C.ink}" stroke-width="2"/>`;
    const a1 = `<rect x="16" y="16" width="168" height="62" fill="${C.tealLight}"/><rect x="16" y="78" width="168" height="76" fill="${C.teal}"/>` + boat(70, 92, 0.7) + boat(130, 132, 1.2) + T(100, 70, 'horizon', { size: 15, anchor: 'middle', fill: C.muted });
    const car = (x, yy, sc) => `<rect x="${x - 26 * sc}" y="${yy - 14 * sc}" width="${52 * sc}" height="${16 * sc}" rx="${4 * sc}" fill="${C.blue}"/><circle cx="${x - 14 * sc}" cy="${yy + 3 * sc}" r="${6 * sc}" fill="${C.ink}"/><circle cx="${x + 14 * sc}" cy="${yy + 3 * sc}" r="${6 * sc}" fill="${C.ink}"/>`;
    const a2 = car(60, 110, 1.4) + car(145, 70, 0.6);
    const a3 = `<rect x="90" y="30" width="70" height="120" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/><circle cx="82" cy="62" r="16" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/><rect x="58" y="80" width="48" height="74" rx="14" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const a4 = `<path d="M40,154 L96,30 L104,30 L160,154" fill="none" stroke="${C.ink}" stroke-width="4"/>` + [150, 120, 95, 74, 57, 44].map((yy, i) => { const t = (154 - yy) / 124, hw = 60 * (1 - t) + 4; return `<line x1="${100 - hw}" y1="${yy}" x2="${100 + hw}" y2="${yy}" stroke="${C.rockDark}" stroke-width="${4 - i * 0.4}"/>`; }).join('');
    let s = T(30, y + 16, 'MONOCULAR (ONE EYE IS ENOUGH)', { size: 15, weight: 700, fill: C.tealDark });
    s += box(0, 'Height in plane', a1) + box(1, 'Relative size', a2) + box(2, 'Occlusion', a3) + box(3, 'Linear perspective', a4);
    return { s, h: 26 + H + 50 };
  },
  (y) => { const s = T(30, y + 16, 'BINOCULAR (BOTH EYES)', { size: 15, weight: 700, fill: C.olive }); const r = row(y + 28, [
    { title: 'Retinal disparity', body: 'Each eye gets a slightly different view; the difference is larger for near objects.', fill: C.cream, edge: C.olive },
    { title: 'Convergence', body: 'The eyes turn inwards to focus on something close; the muscle strain signals "near".', fill: C.cream, edge: C.olive },
  ], { gap: 18, card: { size: 16, tsize: 19 } }); return { s: s + r.s, h: r.h + 28 }; },
  (y) => note(y, 'Size constancy', 'A friend walking away does not seem to shrink, although the retinal image does. Usually helpful, but one reason illusions work.', { size: 16, fill: C.panel, edge: C.panelEdge }),
],
'Four monocular cues with small pictures: height in plane (a boat near the horizon looks further away), relative size (a smaller car seems further), occlusion (a person in front of a door hides part of it) and linear perspective (railway lines meeting in the distance). Two binocular cues: retinal disparity and convergence. A note explains size constancy.',
'Four monocular and two binocular cues let a flat image show depth.', H2.depth);

// 03 Motion parallax
F('03-motion-parallax', 'Motion parallax: Gibson\'s direct information', 'Looking out of a train window', [
  (y) => {
    let s = `<rect x="30" y="${y}" width="840" height="300" rx="14" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<path d="M32,${y + 170} Q150,${y + 90} 280,${y + 150} Q420,${y + 70} 560,${y + 140} Q700,${y + 80} 868,${y + 150} L868,${y + 230} L32,${y + 230} Z" fill="${C.grass}" opacity="0.55"/>`;
    s += `<rect x="32" y="${y + 230}" width="836" height="68" fill="#d8e3c6"/>`;
    for (let x = 50; x < 860; x += 48) s += `<rect x="${x}" y="${y + 214}" width="12" height="70" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.5"/>`;
    s += `<line x1="32" y1="${y + 232}" x2="868" y2="${y + 232}" stroke="${C.rockDark}" stroke-width="6"/>`;
    s += arrow(620, y + 262, 280, y + 262, { w: 9, color: C.rust, marker: 'ahR' }) + T(450, y + 296 - 6, '', {});
    s += arrow(520, y + 110, 470, y + 110, { w: 3, color: C.tealDark, marker: 'ahT' });
    s += `<rect x="560" y="${y + 18}" width="290" height="58" rx="10" fill="${C.panel}" stroke="${C.tealDark}" stroke-width="2"/>` + T(575, y + 42, 'Distant hills', { size: 17, weight: 700, fill: C.tealDark }) + T(575, y + 64, 'move slowly, seem to travel with you', { size: 15, fill: C.ink });
    return { s, h: 300 };
  },
  (y) => {
    const c = card(30, y, 840, { kicker: 'NEAR FENCE', kfill: C.rust, title: 'Flashes past quickly, in the opposite direction', body: 'The brain reads the difference in speed **directly** as distance: no inference from past experience needed.', size: 17, tsize: 19 });
    return c;
  },
  (y) => row(y, [
    { kicker: '+ STRENGTH', body: 'Explains fast, accurate perception in real, moving environments: catching a ball, landing a plane.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESS', kfill: C.rust, body: 'Cannot easily explain illusions. Reply: most illusions are flat, still drawings with much less information.' },
  ], { gap: 14, card: { size: 16, bfill: C.ink } }),
],
'A view from a train window. Fence posts close to the track flash past quickly in the opposite direction, shown by a thick arrow, while distant hills move slowly and seem to travel with you. Gibson argued the brain reads this difference in speed directly as distance. Strength and weakness cards follow.',
'Near objects race past, distant ones creep: the speed difference is direct information about distance.', H2.gibson);

// 04 Illusion explanations
F('04-illusion-explanations', 'Four explanations for illusions', '', [
  (y) => {
    const W = 270, H = 175;
    const pic = (x, art, name) => panel(x, y + 30, W, H) + `<g transform="translate(${x},${y + 30})">${art}</g>` + T(x + W / 2, y + 30 + H - 14, name, { size: 17, weight: 700, anchor: 'middle' });
    const necker = (() => { const a = [70, 20], o = 40, sz = 80; const f = (dx, dy) => `<rect x="${a[0] + dx}" y="${a[1] + dy}" width="${sz}" height="${sz}" fill="none" stroke="${C.ink}" stroke-width="3"/>`; let g = f(0, o) + f(o + 30, 0); [[0, o, o + 30, 0], [sz, o, sz + o + 30, 0], [0, o + sz, o + 30, sz], [sz, o + sz, sz + o + 30, sz]].forEach(([x1, y1, x2, y2]) => { g += `<line x1="${a[0] + x1}" y1="${a[1] + y1}" x2="${a[0] + x2}" y2="${a[1] + y2}" stroke="${C.ink}" stroke-width="3"/>`; }); return g; })();
    const kan = (() => { const pts = [[135, 36], [80, 122], [190, 122]], r = 22, cx0 = 135, cy0 = 93; let g = ''; pts.forEach(([px, py]) => { const tc = Math.atan2(cy0 - py, cx0 - px), d = Math.PI / 6; g += `<path d="M${px},${py} L${px + r * Math.cos(tc + d)},${py + r * Math.sin(tc + d)} A${r},${r} 0 1 1 ${px + r * Math.cos(tc - d)},${py + r * Math.sin(tc - d)} Z" fill="${C.ink}"/>`; }); return g; })();
    const vase = `<rect x="70" y="18" width="130" height="122" fill="${C.ink}"/><path d="M95,18 C95,40 125,48 125,62 C125,74 105,80 105,94 C105,110 120,116 120,140 L150,140 C150,116 165,110 165,94 C165,80 145,74 145,62 C145,48 175,40 175,18 Z" fill="${C.cream}"/>`;
    let s = T(30, y + 16, 'AMBIGUITY · FICTION', { size: 15, weight: 700, fill: C.muted });
    s += pic(30, vase, "Rubin's vase") + pic(315, necker, 'Necker cube') + pic(600, kan, 'Kanizsa triangle');
    return { s, h: 30 + H };
  },
  (y) => table(y, [{ w: 1, head: 'Explanation' }, { w: 1.3, head: 'Illusions' }, { w: 2, head: 'What the brain does' }], [
    ['Ambiguity', "Rubin's vase, Necker cube", 'One image supports two interpretations, so perception switches between them'],
    ['Fiction', 'Kanizsa triangle', 'Fills in edges that are not drawn'],
    ['Misinterpreted depth cues + size constancy', 'Ponzo, Müller-Lyer', 'Reads lines as depth, so the "further" line is scaled up and looks longer'],
    ['Misinterpreted depth cues', 'Ames Room', 'Assumes the distorted room is rectangular, so people in the corners look very different in size'],
  ], { size: 16 }),
],
'Three line drawings: Rubin\'s vase, which can be seen as a vase or two faces; the Necker cube, which flips orientation; and the Kanizsa triangle, whose edges the brain fills in. A table groups illusions by explanation: ambiguity, fiction, misinterpreted depth cues with size constancy (Ponzo, Müller-Lyer) and misinterpreted depth cues (Ames Room).',
'Illusions come from ambiguity, fiction, or depth cues and size constancy applied where they do not fit.', H2.ill);

// 05 Perceptual set
F('05-perceptual-set', 'Perceptual set: seeing what we expect', '', [
  (y) => {
    let s = T(30, y + 16, 'EXPECTATION: BRUNER AND MINTURN', { size: 15, weight: 700, fill: C.tealDark });
    const amb = (x, yy) => `<text x="${x}" y="${yy}" font-size="64" font-weight="700" fill="${C.rust}" text-anchor="middle" font-family="Inter, sans-serif" letter-spacing="-6">I3</text>`;
    const box2 = (x, a, b, lab, res, f, e) => panel(x, y + 30, 400, 190, f, e) + T(x + 70, y + 115, a, { size: 56, weight: 700, anchor: 'middle', fill: C.muted }) + amb(x + 200, y + 115) + T(x + 330, y + 115, b, { size: 56, weight: 700, anchor: 'middle', fill: C.muted }) + T(x + 200, y + 160, lab, { size: 16, anchor: 'middle', fill: C.muted }) + T(x + 200, y + 196, res, { size: 18, weight: 700, anchor: 'middle' });
    s += box2(30, 'A', 'C', 'shown among letters', 'reported: B', C.tealLight, C.tealDark) + box2(470, '12', '14', 'shown among numbers', 'reported: 13', C.cream, C.olive);
    return { s, h: 220 };
  },
  (y) => P('The same ambiguous figure: **context created an expectation** that shaped what was perceived.', { anchor: 'middle', size: 17, fill: C.ink })(y),
  (y) => grid(y, [
    { kicker: 'MOTIVATION: GILCHRIST AND NESBERG', body: 'Participants who had gone without food longer judged food pictures **brighter**: hunger made food stand out.' },
    { kicker: 'EMOTION', body: 'An anxious person may be quicker to notice possible threats.' },
    { kicker: 'CULTURE', body: 'People raised in a "carpentered" environment may be more affected by the Müller-Lyer illusion: support for Gregory.' },
    { kicker: 'EVALUATION', kfill: C.rust, body: 'Both studies used artificial tasks: easy to replicate, but low ecological validity.', fill: C.cream, edge: C.olive },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 16, bfill: C.ink, pad: 16 } }),
],
'Bruner and Minturn: an ambiguous figure shown between A and C was reported as B, and between 12 and 14 as 13. Cards cover motivation (hungry participants judged food pictures brighter), emotion, culture and the Müller-Lyer illusion, and an evaluation that both studies were artificial.',
'Expectation, motivation, emotion and culture create a readiness to perceive in a particular way.', H2.fac);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
