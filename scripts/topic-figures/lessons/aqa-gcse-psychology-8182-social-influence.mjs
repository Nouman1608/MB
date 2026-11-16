import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-psychology-8182-social-influence';
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
  asch: '## Conformity: Asch in more detail',
  mil: '## Obedience: Milgram\'s Agency Theory',
  pil: '## Bystander behaviour: Piliavin\'s subway study',
};

// 01 Asch line task
F('01-asch-line-task', 'Asch: an easy task, a wrong majority', '', [
  (y) => {
    let s = panel(30, y, 840, 250);
    s += T(150, y + 30, 'Standard line', { size: 17, weight: 700, anchor: 'middle' }) + `<line x1="150" y1="${y + 70}" x2="150" y2="${y + 210}" stroke="${C.ink}" stroke-width="8"/>`;
    s += T(450, y + 30, 'Comparison lines', { size: 17, weight: 700, anchor: 'middle' });
    [[370, 100, 'A'], [450, 140, 'B'], [530, 160, 'C']].forEach(([x, h, l]) => { s += `<line x1="${x}" y1="${y + 210}" x2="${x}" y2="${y + 210 - h}" stroke="${l === 'B' ? C.tealDark : C.ink}" stroke-width="8"/>` + T(x, y + 238, l, { size: 20, weight: 700, anchor: 'middle', fill: l === 'B' ? C.tealDark : C.ink }); });
    s += T(450, y + 212 + 34, '', {});
    // group
    const person = (x, f, lab, sp) => `<circle cx="${x}" cy="${y + 120}" r="15" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${x - 17}" y="${y + 138}" width="34" height="40" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + (sp ? `<rect x="${x - 17}" y="${y + 66}" width="34" height="28" rx="8" fill="${C.panel}" stroke="${C.rust}" stroke-width="2"/>` + T(x, y + 87, lab, { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) : '');
    [640, 690, 740, 790].forEach((x) => { s += person(x, C.tealLight, 'C', true); });
    s += person(840 - 0, C.mustard, '?', true).replace(/fill="#b5602e"/g, `fill="${C.olive}"`);
    s += T(715, y + 206, 'confederates', { size: 15, anchor: 'middle', fill: C.muted }) + T(840, y + 206, 'real', { size: 15, anchor: 'end', fill: C.olive, weight: 700 }) + T(840, y + 224, 'participant', { size: 15, anchor: 'end', fill: C.olive, weight: 700 });
    return { s, h: 250 };
  },
  (y) => P('On **critical trials** every confederate gave the same wrong answer. Alone, people made almost no errors.', { anchor: 'middle', size: 17, fill: C.ink })(y),
  (y) => row(y, [
    { kicker: 'CRITICAL TRIALS', title: 'Roughly a third', body: 'conformed on' },
    { kicker: 'AT LEAST ONCE', title: 'About three-quarters', body: 'of participants conformed', fill: C.cream, edge: C.olive },
    { kicker: 'NEVER', title: 'About a quarter', body: 'of participants never conformed' },
  ], { gap: 14, card: { size: 16, tsize: 20, align: 'middle' } }),
  (y) => row(y, [
    { kicker: '+ STRENGTH', body: 'Standardised, tightly controlled: the effect of each factor can be isolated.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESSES', kfill: C.rust, body: 'Artificial task (ecological validity); only male American students in the 1950s; participants deceived.' },
  ], { gap: 14, card: { size: 16, bfill: C.ink } }),
],
'A standard line and three comparison lines labelled A, B and C, with B the match. Four confederates give the same wrong answer before the real participant. Results: conformity on roughly a third of critical trials, about three-quarters conformed at least once, about a quarter never did. Strength and weakness cards follow.',
'Even on an easy task, a unanimous wrong majority produced conformity on about a third of critical trials.', H2.asch);

// 02 Asch variations
F('02-asch-variations', 'What changed conformity in Asch\'s variations', 'Schematic directions, not data', [
  (y) => {
    const W = 270, H = 220;
    const axes = (x) => `<line x1="${x + 40}" y1="${y + 170}" x2="${x + 250}" y2="${y + 170}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${x + 40}" y1="${y + 170}" x2="${x + 40}" y2="${y + 40}" stroke="${C.ink}" stroke-width="2.5"/>` + `<text x="${x + 26}" y="${y + 106}" font-size="15" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 ${x + 26} ${y + 106})">conformity</text>`;
    let s = '';
    // group size
    s += panel(30, y, W, H + 70) + T(165, y + 28, 'Group size', { size: 19, weight: 700, anchor: 'middle' }) + axes(30);
    s += path(`M80,${y + 158} L120,${y + 150} C140,${y + 80} 160,${y + 70} 190,${y + 66} L270,${y + 64}`, { w: 4, stroke: C.tealDark });
    s += T(165, y + 194, 'confederates →', { size: 15, anchor: 'middle', fill: C.muted }) + para(165, y + 222, 'Very low with one; rises sharply with two and three; then levels off', 240, { size: 15, anchor: 'middle', fill: C.ink }).s;
    // anonymity
    const bars = (x, a, b, la, lb) => `<rect x="${x + 80}" y="${y + 170 - a}" width="60" height="${a}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/><rect x="${x + 170}" y="${y + 170 - b}" width="60" height="${b}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + T(x + 110, y + 190, la, { size: 15, anchor: 'middle', fill: C.muted }) + T(x + 200, y + 190, lb, { size: 15, anchor: 'middle', fill: C.muted });
    s += panel(315, y, W, H + 70) + T(450, y + 28, 'Anonymity', { size: 19, weight: 700, anchor: 'middle' }) + axes(315) + bars(315, 110, 45, 'aloud', 'written') + para(450, y + 222, 'Writing answers privately reduced conformity considerably', 240, { size: 15, anchor: 'middle', fill: C.ink }).s;
    s += panel(600, y, W, H + 70) + T(735, y + 28, 'Task difficulty', { size: 19, weight: 700, anchor: 'middle' }) + axes(600) + bars(600, 60, 115, 'easy', 'harder') + para(735, y + 222, 'More similar lines increased conformity: less sure, so look to others', 240, { size: 15, anchor: 'middle', fill: C.ink }).s;
    return { s, h: H + 70 };
  },
  (y) => row(y, [
    { kicker: 'DISPOSITIONAL: PERSONALITY', body: 'A strong need for social approval or low confidence → more likely to conform. Believing you control your own behaviour → more likely to resist.' },
    { kicker: 'DISPOSITIONAL: EXPERTISE', body: 'Someone who knows the task well, such as an architect judging lengths, has less reason to doubt their answer.' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'Three schematic panels. Group size: conformity is very low with one confederate, rises sharply with two and three, then levels off. Anonymity: writing answers privately lowered conformity compared with saying them aloud. Task difficulty: making the lines more similar raised conformity. Cards add personality and expertise as dispositional factors.',
'Bigger majorities (up to a point), public answers and harder tasks raise conformity.', H2.asch);

// 03 Milgram voltage scale
F('03-milgram-results', 'Milgram (1963): how far did the teachers go?', '40 male volunteers; shocks rising in 15-volt steps; no real shocks given', [
  (y) => {
    const x0 = 70, x1 = 830, sc = (v) => x0 + ((v - 15) / (450 - 15)) * (x1 - x0);
    let s = '';
    const n = 30;
    for (let i = 0; i < n; i++) { const v = 15 + i * 15, x = sc(v); s += `<rect x="${x - 10}" y="${y + 40}" width="20" height="50" rx="3" fill="${v >= 300 ? (v === 450 ? C.rust : C.mustard) : C.tealLight}" stroke="${C.ink}" stroke-width="1.5"/>`; }
    [15, 300, 450].forEach((v) => { s += T(sc(v), y + 116, `${v} V`, { size: 16, weight: 700, anchor: 'middle' }); });
    s += `<line x1="${sc(300) - 14}" y1="${y + 26}" x2="${sc(300) - 14}" y2="${y + 100}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="6 4"/>`;
    s += T(sc(300) - 22, y + 20, 'All 40 reached at least 300 V', { size: 17, weight: 700, anchor: 'end', fill: C.ink });
    s += T(x1 + 10, y + 20, '26 of 40 (65%) reached 450 V', { size: 17, weight: 700, anchor: 'end', fill: C.rust }).replace(`x="${x1 + 10}"`, `x="${x1 + 10}" dy="0"`);
    return { s: s.replace(T(x1 + 10, y + 20, '26 of 40 (65%) reached 450 V', { size: 17, weight: 700, anchor: 'end', fill: C.rust }), ''), h: 126 };
  },
  (y) => {
    const people = (n, f) => Array.from({ length: 40 }, (_, i) => { const col = i % 20, rw = Math.floor(i / 20), x = 70 + col * 38, yy = y + 30 + rw * 56; const fill = i < n ? f : C.panel; return `<circle cx="${x}" cy="${yy}" r="10" fill="${fill}" stroke="${C.ink}" stroke-width="2"/><rect x="${x - 12}" y="${yy + 12}" width="24" height="26" rx="8" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`; }).join('');
    let s = T(30, y + 10, 'EACH FIGURE IS ONE PARTICIPANT; COLOURED = WENT TO 450 VOLTS', { size: 15, weight: 700, fill: C.rust });
    s += people(26, C.rust);
    return { s, h: 30 + 2 * 56 };
  },
  (y) => P('Many showed obvious distress. The experimenter in a grey lab coat used prods such as "the experiment requires that you continue".', { anchor: 'middle', size: 16 })(y),
],
'A row of 30 switches from 15 to 450 volts. All 40 participants reached at least 300 volts. Below, 40 figures with 26 coloured show that 26 of 40, 65 percent, went to the maximum 450 volts, despite obvious distress.',
'Every participant reached 300 volts; 65% went all the way to 450.', H2.mil);

// 04 Agency theory and proximity
F('04-agency-theory', 'Agency Theory: from autonomous to agentic', '', [
  (y) => row(y, [
    { kicker: 'AUTONOMOUS STATE', title: 'Act on your own conscience', body: 'You feel responsible for what you do' },
    { kicker: 'AGENTIC STATE', kfill: C.olive, title: 'Carry out someone else\'s wishes', body: 'Responsibility is passed upward', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 70, card: { size: 16, tsize: 19 } }),
  (y) => grid(y, [
    { kicker: 'AGENCY', body: 'Many carried on once told the experimenter, not they, was responsible.' },
    { kicker: 'AUTHORITY', body: 'Moving from Yale to a run-down office building reduced obedience.' },
    { kicker: 'CULTURE', body: 'Replications in different countries found different levels of obedience.' },
    { kicker: 'PROXIMITY', body: 'Closer to the learner, or a more distant experimenter, reduced obedience.', fill: C.tealLight, edge: C.tealDark },
  ], 4, { gap: 10, vcenter: false, card: { size: 15, bfill: C.ink, pad: 14 } }),
  (y) => {
    let s = T(30, y + 14, 'PROXIMITY: OBEDIENCE FELL AS…', { size: 15, weight: 700, fill: C.tealDark });
    const r = row(y + 28, [
      { title: 'Teacher in the same room as the learner' },
      { title: 'Teacher pressed the learner\'s hand onto a shock plate' },
      { title: 'Experimenter gave orders by telephone', body: 'obedience fell to around a fifth', fill: C.cream, edge: C.olive },
    ], { arrows: true, gap: 40, card: { size: 15, tsize: 17, align: 'middle' } });
    return { s: s + r.s, h: r.h + 28 };
  },
],
'An arrow leads from the autonomous state, acting on your own conscience, to the agentic state, carrying out someone else\'s wishes. Cards give the four social factors: agency, authority, culture and proximity. A proximity sequence shows obedience falling with the learner in the same room, with hand-on-plate, and to around a fifth with orders by telephone.',
'In the agentic state responsibility passes upward; authority and proximity change how far people obey.', H2.mil);

// 05 Adorno
F('05-authoritarian-personality', 'Adorno: the Authoritarian Personality', 'The dispositional explanation of obedience', [
  (y) => row(y, [
    { kicker: 'CHILDHOOD', title: 'Harsh, strict discipline and conditional love' },
    { kicker: 'FEELINGS', title: 'Hostility that cannot be expressed towards parents' },
    { kicker: 'AS AN ADULT', title: 'Rigid, black-and-white thinking', body: 'respect for higher status, contempt for those seen as lower', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 40, card: { size: 15, tsize: 17 } }),
  (y) => card(250, y, 400, { kicker: 'MEASURED WITH', title: 'The F-scale questionnaire', align: 'middle', size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark }),
  (y) => row(y, [
    { kicker: '+ SUPPORT', body: 'Fully obedient participants in Milgram-type research tended to score higher on the F-scale.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESS', kfill: C.rust, body: 'Cannot explain why whole populations with very different upbringings obeyed in the same historical situation.' },
  ], { gap: 14, card: { size: 16, bfill: C.ink } }),
],
'Three linked stages: harsh, strict discipline and conditional love in childhood; hostility that cannot be expressed towards parents; and an adult with rigid thinking, respect for higher status and contempt for lower status. It is measured with the F-scale. Supporting evidence and a weakness follow.',
'A harsh upbringing produces an adult who defers to authority: measured by the F-scale.', H2.mil);

// 06 Piliavin cost-reward
F('06-piliavin-cost-reward', 'Piliavin: weighing the costs of helping', 'Field experiment on New York subway trains', [
  (y) => row(y, [
    { kicker: 'CANE VICTIM (APPEARED ILL)', title: 'Spontaneous help on the great majority of trials', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DRUNK VICTIM (BOTTLE, SMELL OF ALCOHOL)', kfill: C.rust, title: 'Help on about half of trials' },
  ], { gap: 18, card: { size: 16, tsize: 18 } }),
  (y) => {
    const by = y + 40, tilt = 20;
    let s = `<line x1="215" y1="${by - tilt}" x2="685" y2="${by + tilt}" stroke="${C.ink}" stroke-width="7" stroke-linecap="round"/><path d="M450,${by} L420,${by + 92} L480,${by + 92} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/><circle cx="450" cy="${by}" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    const pan = (x, yy, f) => `<line x1="${x}" y1="${yy}" x2="${x - 60}" y2="${yy + 50}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${x}" y1="${yy}" x2="${x + 60}" y2="${yy + 50}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${x - 90},${yy + 50} L${x + 90},${yy + 50} Q${x + 72},${yy + 80} ${x},${yy + 80} Q${x - 72},${yy + 80} ${x - 90},${yy + 50} Z" fill="${f}" stroke="${C.ink}" stroke-width="3"/>`;
    s += pan(215, by - tilt, C.teal) + pan(685, by + tilt, C.cream);
    const a = card(30, by + 110, 380, { title: 'Cost of not helping', body: 'guilt, blame', size: 17, tsize: 18, align: 'middle', bfill: C.ink, pad: 14, fill: C.tealLight, edge: C.tealDark });
    const b = card(490, by + 110, 380, { title: 'Cost of helping', body: 'effort, danger, embarrassment, disgust', size: 17, tsize: 18, align: 'middle', bfill: C.ink, pad: 14, fill: C.cream, edge: C.olive });
    return { s: s + a.s + b.s, h: 110 + 40 + a.h };
  },
  (y) => P('Helping a drunk person seems **more costly**, so people helped less. More bystanders did **not** lead to less helping here.', { anchor: 'middle', size: 17, fill: C.ink })(y),
  (y) => row(y, [
    { kicker: '+ STRENGTH', body: 'Natural setting: high ecological validity; many trials made findings reliable.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESS', kfill: C.rust, body: 'No consent or debrief for passengers; no control over who was in each carriage.' },
  ], { gap: 14, card: { size: 16, bfill: C.ink } }),
],
'The cane victim, who appeared ill, received spontaneous help on the great majority of trials; the drunk victim on about half. A balance weighs the cost of not helping (guilt, blame) against the cost of helping (effort, danger, embarrassment, disgust). Helping a drunk person seemed more costly. Strength and weakness cards follow.',
'Bystanders weigh the cost of helping against the cost of not helping.', H2.pil);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
