import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-law-yla1-the-sources-of-english-law-its-enforcement-and-administration';
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
  pa: '## The Parliament Acts and Royal Assent',
  inf: '## Influences on law reform',
  si: '## Statutory interpretation: the extra pieces',
  eq: '## Equity in contract',
  civ: '## Civil courts, tribunals and ADR',
  we: '## Worked example: advising on dispute resolution',
};

// 01 Parliament Acts
F('01-parliament-acts', 'The Parliament Acts: the Commons has the final say', '', [
  (y) => row(y, [
    { kicker: 'NORMALLY', title: 'A Bill must pass both Houses' },
    { kicker: 'PARLIAMENT ACT 1911', title: 'Lords lose the veto over most public Bills', body: 'leaving only a power to delay' },
    { kicker: 'PARLIAMENT ACT 1949', title: 'Delay cut to roughly one year', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 40, card: { size: 15, tsize: 17 } }),
  (y) => {
    const x0 = 90, x1 = 820, sc = (m) => x0 + (m / 12) * (x1 - x0);
    let s = T(30, y + 14, 'HOW LONG THE LORDS CAN HOLD A BILL UP', { size: 15, weight: 700, fill: C.muted });
    s += `<rect x="${sc(0)}" y="${y + 36}" width="${sc(12) - sc(0)}" height="38" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(sc(6), y + 61, 'most public Bills: roughly one year', { size: 16, weight: 700, anchor: 'middle' });
    s += `<rect x="${sc(0)}" y="${y + 86}" width="${sc(1) - sc(0)}" height="38" rx="6" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(sc(1) + 12, y + 111, 'money Bill: law without Lords\' consent after one month', { size: 16, weight: 700 });
    return { s, h: 128 };
  },
  (y) => row(y, [
    { kicker: 'USED RARELY', body: '*War Crimes Act 1991*; *Hunting Act 2004*' },
    { kicker: 'UPHELD', body: '*Jackson v Attorney General* [2005]: the 1949 Act is valid' },
    { kicker: 'ROYAL ASSENT ACT 1967', body: 'Assent can be notified to each House, not given in person' },
  ], { gap: 12, vcenter: false, card: { size: 16, bfill: C.ink, pad: 16 } }),
  (y) => note(y, '', 'Exam use: the elected House has the final say, which supports the democratic argument for Acts of Parliament.', { align: 'middle', size: 16 }),
],
'The Parliament Act 1911 removed the Lords\' veto over most public Bills, leaving a power to delay, which the 1949 Act cut to roughly one year; a money Bill can become law without the Lords after one month. The Acts were used for the War Crimes Act 1991 and Hunting Act 2004 and upheld in Jackson v Attorney General. The Royal Assent Act 1967 allows assent to be notified.',
'The Lords can delay most Bills for about a year, but the elected Commons has the final say.', H2.pa);

// 02 Influences on law reform
F('02-law-reform-influences', 'Five influences on law reform', '', [
  (y) => table(y, [{ w: 0.85, head: 'Influence' }, { w: 1.6, head: 'Example' }, { w: 1, head: 'Advantage', hfill: C.teal }, { w: 1.15, head: 'Disadvantage', hfill: C.cream }], [
    ['Political parties', 'Manifesto commitments carried out by a government with a majority', 'Democratic mandate', 'May follow party advantage; may be reversed'],
    ['Pressure groups', 'Snowdrop campaign after Dunblane → Firearms (Amendment) Act 1997', 'Raise issues politicians ignore', 'Small, well-funded groups can gain outsized influence'],
    ['Law Commission', 'Law Commissions Act 1965; work fed into the Fraud Act 2006', 'Expert, independent, research-based', 'Reports wait years for parliamentary time'],
    ['Judges', '*R v R* [1991] removed the marital rape exemption before Parliament legislated', 'Respond quickly to injustice', 'Unelected; only act when a case arises'],
    ['Media', 'Campaigning after the murder of Sarah Payne → "Sarah\'s Law"', 'Mobilises public opinion', 'Can push hurried, emotional law making'],
  ], { size: 15, hsize: 16 }),
],
'A table of five influences on law reform with an example, advantage and disadvantage for each: political parties, pressure groups (Snowdrop campaign and the Firearms (Amendment) Act 1997), the Law Commission (Fraud Act 2006), judges (R v R) and the media (Sarah\'s Law).',
'Each influence has a lesson example, a strength and a weakness.', H2.inf);

// 03 Interpretation extras
F('03-interpretation-aids', 'Statutory interpretation: the extra pieces', '', [
  (y) => {
    let s = card(30, y, 840, { kicker: 'EJUSDEM GENERIS: POWELL v KEMPTON PARK RACECOURSE [1899]', body: '', size: 16, minH: 150 }).s;
    const words = ['house', 'office', 'room'];
    words.forEach((w, i) => { s += chip(60 + i * 130, y + 56, w, { size: 18, fill: C.tealLight, edge: C.tealDark }).s; });
    s += chip(450, y + 56, 'or other place', { size: 18, fill: C.cream, edge: C.olive }).s;
    s += path(`M520,${y + 100} C520,${y + 128} 200,${y + 128} 200,${y + 102}`, { w: 2.5, stroke: C.olive, extra: 'marker-end="url(#ahO)"' });
    s += T(620, y + 80, '→ indoor places only', { size: 17, weight: 700, fill: C.ink }) + T(450, y + 140, 'General words after a list take their meaning from the list: an outdoor enclosure was not covered', { size: 16, anchor: 'middle', fill: C.muted });
    return { s, h: 150 };
  },
  (y) => grid(y, [
    { kicker: 'PRESUMPTIONS', body: 'Mens rea required unless Parliament clearly says otherwise (*Sweet v Parsley* [1970]); no retrospective effect.' },
    { kicker: 'INTRINSIC AIDS', body: 'Long title, definition sections, schedules.' },
    { kicker: 'EXTRINSIC AIDS', body: 'Dictionaries, Law Commission reports, *Hansard* since *Pepper v Hart* [1993].' },
    { kicker: 'INTERPRETATION ACT 1978', body: 'Unless the contrary appears: masculine includes feminine; singular includes plural.' },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 15, bfill: C.ink, pad: 16 } }),
  (y) => row(y, [
    { kicker: 'HRA 1998 s 3', title: 'Read compatibly "so far as it is possible"', body: '*Ghaidan v Godin-Mendoza* [2004]: "as his or her wife or husband" included a same-sex partner', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'IF IMPOSSIBLE: s 4', title: 'Declaration of incompatibility', body: 'by a higher court; it does not invalidate the Act', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 50, card: { size: 15, tsize: 17 } }),
],
'Ejusdem generis: in Powell v Kempton Park, the words house, office, room or other place were read as indoor places only, so an outdoor enclosure was not covered. Cards cover presumptions, intrinsic and extrinsic aids and the Interpretation Act 1978. Under the HRA, s 3 requires a compatible reading where possible (Ghaidan); if impossible, a s 4 declaration does not invalidate the Act.',
'General words take their meaning from the list; s 3 reads compatibly, s 4 declares.', H2.si);

// 04 Equity remedies
F('04-equitable-remedies', 'Equity in contract: discretionary remedies', 'Where damages would not be adequate', [
  (y) => row(y, [
    { kicker: 'SPECIFIC PERFORMANCE', title: 'Orders a party to carry out the contract', body: 'Typically for unique items such as land; ordered in *Beswick v Beswick* [1968]', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'RESCISSION', title: 'Sets the contract aside', body: 'Returns the parties to their original positions; can be lost through delay: *Leaf v International Galleries* [1950]', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 18, card: { size: 16, tsize: 18 } }),
  (y) => note(y, '"He who comes to equity must come with clean hands"', 'Because the remedies are discretionary, a claimant who has behaved unfairly may be refused them.', { align: 'middle', size: 16 }),
],
'Two equitable remedies: specific performance orders a party to carry out the contract, typically for unique items such as land (Beswick v Beswick); rescission sets the contract aside but can be lost through delay (Leaf v International Galleries). A note says the remedies are discretionary, so a claimant must come with clean hands.',
'Specific performance and rescission are discretionary: delay or unfairness can lose them.', H2.eq);

// 05 Civil courts and tracks
F('05-civil-courts-tracks', 'Civil courts and the CPR tracks', 'Civil Procedure Rules 1998, after Lord Woolf\'s review', [
  (y) => {
    const box = (cx, yy, w, t1, f, e) => card(cx - w / 2, yy, w, { title: t1, align: 'middle', size: 15, tsize: 18, fill: f, edge: e, minH: 56, vcenter: true });
    const sc = box(450, y, 300, 'Supreme Court', C.mustard, C.ink), ca = box(450, y + 90, 300, 'Court of Appeal', C.cream, C.olive);
    const cc = box(270, y + 180, 260, 'County Court', C.tealLight, C.tealDark), hc = box(630, y + 180, 260, 'High Court', C.tealLight, C.tealDark);
    let s = arrow(450, y + 88, 450, y + 60, { w: 3 }) + arrow(300, y + 178, 400, y + 150, { w: 3 }) + arrow(600, y + 178, 500, y + 150, { w: 3 });
    s += T(860, y + 120, 'appeals', { size: 15, anchor: 'end', fill: C.muted, italic: true }) + T(450, y + 262, 'most civil claims start here', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    return { s: s + sc.s + ca.s + cc.s + hc.s, h: 268 };
  },
  (y) => {
    const x0 = 60, x1 = 840, sc = (v) => x0 + (v / 40000) * (x1 - x0);
    let s = T(30, y + 14, 'TRACK BY VALUE AND COMPLEXITY (axis to scale up to £40,000; multi-track continues)', { size: 15, weight: 700, fill: C.muted });
    s += `<rect x="${sc(0)}" y="${y + 34}" width="${sc(10000) - sc(0)}" height="48" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + T(sc(5000), y + 64, 'small claims', { size: 16, weight: 700, anchor: 'middle' });
    s += `<rect x="${sc(10000)}" y="${y + 34}" width="${sc(25000) - sc(10000)}" height="48" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + T(sc(17500), y + 64, 'fast track', { size: 16, weight: 700, anchor: 'middle' });
    s += `<rect x="${sc(25000)}" y="${y + 34}" width="${sc(40000) - sc(25000)}" height="48" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(sc(32500), y + 56, 'multi-track; intermediate', { size: 15, weight: 700, anchor: 'middle' }) + T(sc(32500), y + 75, 'track (2023) for some claims', { size: 15, weight: 700, anchor: 'middle' });
    [[10000, '£10,000'], [25000, '£25,000']].forEach(([v, l]) => { s += T(sc(v), y + 104, l, { size: 15, weight: 700, anchor: 'middle' }); });
    s += T(sc(0), y + 104, '£0', { size: 15, anchor: 'middle', fill: C.muted });
    return { s, h: 110 };
  },
  (y) => row(y, [
    { kicker: 'OVERRIDING OBJECTIVE', body: 'Deal with cases justly and at proportionate cost.' },
    { kicker: 'TRIBUNALS (2007 ACT)', body: 'First-tier Tribunal in chambers → Upper Tribunal hears appeals.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, card: { size: 16, bfill: C.ink } }),
],
'Civil claims mostly start in the County Court or High Court, with appeals to the Court of Appeal and then the Supreme Court. A bar shows the tracks: small claims generally up to £10,000, fast track up to £25,000, and multi-track above, with an intermediate track added in 2023 for some claims above £25,000. Cards give the overriding objective and the two-tier tribunal structure.',
'Claims start in the County or High Court and are allocated to a track by value and complexity.', H2.civ);

// 06 ADR spectrum
F('06-adr-who-decides', 'ADR: who decides, and is it binding?', '', [
  (y) => {
    const L = [
      ['Negotiation', 'The parties themselves', 'Only if they agree', 'Direct settlement between solicitors'],
      ['Mediation', 'The parties, helped by a neutral mediator', 'Only if they agree', 'Family and neighbour disputes'],
      ['Conciliation', 'The parties; the conciliator may suggest terms', 'Only if they agree', 'ACAS in employment disputes'],
      ['Arbitration', 'An arbitrator', 'Yes, under the Arbitration Act 1996', 'Commercial and consumer scheme disputes'],
      ['Ombudsman', 'Investigates complaints', 'Depends on the scheme', 'Financial Ombudsman Service'],
    ];
    return table(y, [{ w: 0.8, head: 'Method' }, { w: 1.4, head: 'Who decides' }, { w: 1.1, head: 'Binding?', hfill: C.cream }, { w: 1.3, head: 'Example' }], L, { size: 16, cellFill: (r, c) => (c === 2 && r === 3 ? C.cream : null) });
  },
  (y) => {
    let s = arrow(80, y + 24, 820, y + 24, { w: 4, color: C.olive, marker: 'ahO' });
    s += T(80, y + 54, 'parties in control', { size: 15, fill: C.muted }) + T(820, y + 54, 'third party decides', { size: 15, fill: C.muted, anchor: 'end' });
    return { s, h: 60 };
  },
],
'A table of five ADR methods with who decides, whether the outcome is binding, and an example: negotiation, mediation and conciliation bind only if the parties agree; arbitration is binding under the Arbitration Act 1996; an ombudsman\'s decision depends on the scheme. An arrow runs from parties in control to a third party deciding.',
'Contrast ADR methods by who decides and whether the result binds.', H2.civ);

// 07 Amira
F('07-amira-dispute-route', 'Advising Amira: a £4,000 claim against her builder', '', [
  (y) => steps(y, [
    { title: 'Negotiation first', body: 'A letter before action is cheap and may settle it.' },
    { title: 'If not: mediation', body: 'Quick, private, keeps costs low.' },
    { title: 'Court: the small claims track', body: 'About £4,000 is within it; designed for litigants without lawyers; recoverable costs are limited.' },
    { title: 'Funding', body: 'Legal aid unlikely after LASPO 2012; check home insurance for legal expenses cover.' },
  ], { size: 16, tsize: 18, gap: 10, pad: 14 }),
  (y) => note(y, '', 'A strong answer **applies each method to Amira\'s facts**, not just describes it.', { align: 'middle', size: 17 }),
],
'Four numbered steps for Amira\'s £4,000 claim: negotiate first with a letter before action, then mediation, then the small claims track, and for funding legal aid is unlikely after LASPO 2012, so check home insurance for legal expenses cover.',
'Cheapest first: negotiate, mediate, then small claims, with funding checked.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
