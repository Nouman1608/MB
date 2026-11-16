import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-psychology-8182-language-thought-communication';
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
  lt: '## Language and thought: two opposite claims',
  hac: '## Human and animal communication',
  nvc: '## Non-verbal communication',
  exp: '## Explanations of non-verbal behaviour',
};

// 01 Sapir-Whorf versions and evidence
F('01-sapir-whorf-evidence', 'Sapir-Whorf: strong or weak?', '', [
  (y) => row(y, [
    { kicker: 'STRONG VERSION', kfill: C.rust, title: 'Linguistic determinism', body: 'Language **determines** thought: you cannot think about something your language has no words for.', fill: C.panel },
    { kicker: 'WEAK VERSION', title: 'Linguistic relativity', body: 'Language **influences** thought, making some ideas easier to notice and remember.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 18, card: { size: 17, tsize: 20 } }),
  (y) => {
    let s = T(30, y + 16, 'EVIDENCE ON RECALL: CARMICHAEL AND COLLEAGUES (1932)', { size: 15, weight: 700, fill: C.muted });
    const cy = y + 110;
    const shape = (x) => `<circle cx="${x - 34}" cy="${cy}" r="22" fill="none" stroke="${C.ink}" stroke-width="4"/><circle cx="${x + 34}" cy="${cy}" r="22" fill="none" stroke="${C.ink}" stroke-width="4"/><line x1="${x - 12}" y1="${cy}" x2="${x + 12}" y2="${cy}" stroke="${C.ink}" stroke-width="4"/>`;
    s += panel(30, y + 30, 230, 160) + shape(145) + T(145, y + 176, 'ambiguous drawing', { size: 16, anchor: 'middle', fill: C.muted });
    // eyeglasses
    s += panel(330, y + 30, 250, 72, C.cream, C.olive) + T(345, y + 72, 'label: "eyeglasses"', { size: 16, weight: 700 });
    s += `<circle cx="520" cy="${y + 66}" r="11" fill="none" stroke="${C.ink}" stroke-width="3"/><circle cx="556" cy="${y + 66}" r="11" fill="none" stroke="${C.ink}" stroke-width="3"/><path d="M531,${y + 64} q7,-6 14,0" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
    s += panel(330, y + 118, 250, 72, C.tealLight, C.tealDark) + T(345, y + 160, 'label: "dumbbells"', { size: 16, weight: 700 });
    s += `<circle cx="520" cy="${y + 154}" r="10" fill="${C.ink}"/><circle cx="556" cy="${y + 154}" r="10" fill="${C.ink}"/><line x1="520" y1="${y + 154}" x2="556" y2="${y + 154}" stroke="${C.ink}" stroke-width="6"/>`;
    s += arrow(266, y + 90, 324, y + 66, { w: 3 }) + arrow(266, y + 130, 324, y + 154, { w: 3 });
    s += para(610, y + 64, 'Drawn from memory, the shape looked **more like the label** given: words shaped what was remembered.', 260, { size: 17, fill: C.ink }).s;
    return { s, h: 190 };
  },
  (y) => card(30, y, 840, { kicker: 'EVIDENCE ON COLOUR: THE BERINMO OF PAPUA NEW GUINEA', title: 'Colours on either side of a boundary in your own language are easier to distinguish and remember', body: 'Berinmo speakers showed this for their colour boundaries; English speakers for English boundaries. Supports the **weak** version.', size: 16, tsize: 18 }),
  (y) => note(y, 'Evaluation', 'The strong version is generally rejected: we can see shades we cannot name, and new words are invented for new ideas. The weak version has more support.', { size: 16 }),
],
'The strong version of Sapir-Whorf says language determines thought; the weak version says it influences thought. Carmichael\'s study: the same ambiguous drawing labelled eyeglasses or dumbbells was later drawn to look like its label. Berinmo and English speakers each found colours across their own language\'s boundaries easier to distinguish and remember, supporting the weak version.',
'Labels and colour words influence memory and recognition: evidence for the weak version.', H2.lt);

// 02 Animal vs human communication
F('02-animal-vs-human', 'Animal communication is limited to four functions', '', [
  (y) => grid(y, [
    { kicker: 'SURVIVAL', title: 'Vervet monkeys', body: 'different alarm calls for different predators' },
    { kicker: 'REPRODUCTION', title: 'Courtship', body: 'displays and calls' },
    { kicker: 'TERRITORY', title: 'Birdsong', body: 'warns rivals away' },
    { kicker: 'FOOD', title: 'Honeybee dance', body: 'where to find food', fill: C.cream, edge: C.olive },
  ], 4, { gap: 12, card: { size: 16, tsize: 18, align: 'middle' } }),
  (y) => P('**Human language** goes further:', { anchor: 'middle', size: 18, fill: C.ink })(y),
  (y) => row(y, [
    { kicker: 'DISPLACEMENT', title: 'Talk about what is not here', body: 'the past, the future, distant places, imaginary things', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CREATIVITY / PRODUCTIVITY', title: 'Unlimited new sentences', body: 'from a limited set of words', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'ABSTRACT IDEAS', title: 'Express ideas and plans', body: '', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 12, card: { size: 16, tsize: 18 } }),
  (y) => note(y, 'The subtlety', 'The bee dance refers to food that is not present, so it shows a limited form of displacement, but only about one thing.', { size: 16 }),
],
'Four cards give the functions of animal communication with examples: survival (vervet monkey alarm calls), reproduction (courtship), territory (birdsong) and food (the honeybee dance). Human language adds displacement, creativity or productivity and abstract ideas. A note says the bee dance shows only a limited form of displacement.',
'Animals communicate for survival, reproduction, territory and food; humans can talk about anything.', H2.hac);

// 03 Waggle dance
F('03-bee-dances', 'Von Frisch: how bees show where food is', '', [
  (y) => {
    let s = panel(30, y, 270, 300) + T(165, y + 34, 'Round dance', { size: 20, weight: 700, anchor: 'middle' }) + T(165, y + 58, 'food close to the hive', { size: 16, anchor: 'middle', fill: C.muted });
    s += path(`M165,${y + 110} C235,${y + 110} 235,${y + 230} 165,${y + 230} C95,${y + 230} 95,${y + 110} 162,${y + 110}`, { w: 4, stroke: C.olive, extra: 'marker-end="url(#ahO)"' });
    s += T(165, y + 272, 'search nearby', { size: 16, anchor: 'middle', fill: C.ink, weight: 600 });
    // waggle
    s += panel(320, y, 550, 300) + T(595, y + 34, 'Waggle dance: food further away', { size: 20, weight: 700, anchor: 'middle' });
    const cx = 470, cy = y + 170;
    s += `<line x1="${cx}" y1="${y + 60}" x2="${cx}" y2="${y + 280}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 6"/>` + T(cx, y + 292, 'vertical on the comb', { size: 15, anchor: 'middle', fill: C.muted });
    const ang = (40 * Math.PI) / 180, L = 95, ex = cx + L * Math.sin(ang), ey = cy - L * Math.cos(ang), sx = cx - L * Math.sin(ang) * 0.6, sy = cy + L * Math.cos(ang) * 0.6;
    let zig = `M${sx},${sy}`;
    for (let i = 1; i <= 10; i++) { const tt = i / 10, px = sx + (ex - sx) * tt, py = sy + (ey - sy) * tt, o = (i % 2 ? 7 : -7); zig += ` L${px + o * Math.cos(ang)},${py + o * Math.sin(ang)}`; }
    s += path(zig, { w: 3.5, stroke: C.rust });
    s += path(`M${ex},${ey} C${ex + 70},${ey + 10} ${sx + 60},${sy + 40} ${sx},${sy}`, { w: 2.5, stroke: C.ink, extra: 'stroke-dasharray="5 5" marker-end="url(#ah)"' });
    s += path(`M${cx},${cy - 60} A60,60 0 0 1 ${cx + 60 * Math.sin(ang)},${cy - 60 * Math.cos(ang)}`, { w: 3, stroke: C.olive });
    s += T(cx - 12, cy - 70, 'angle', { size: 15, weight: 700, fill: C.olive, anchor: 'end' });
    s += para(640, y + 90, '**Angle** of the waggle run from vertical = **direction** of food relative to the sun', 210, { size: 16, fill: C.ink }).s;
    s += para(640, y + 190, '**Length** of the waggle = **distance**', 210, { size: 16, fill: C.ink }).s;
    return { s, h: 300 };
  },
  (y) => row(y, [
    { kicker: 'PROCEDURE', body: 'Marked individual bees; feeding stations at different distances and directions; observed returning bees.' },
    { kicker: 'FINDING', body: 'Other bees then flew to the correct location.', fill: C.cream, edge: C.olive },
    { kicker: 'EVALUATION', body: 'Careful, repeated observation, later supported; but the dance only communicates where resources are.' },
  ], { gap: 12, vcenter: false, card: { size: 16, bfill: C.ink, pad: 16 } }),
],
'Left: the round dance, a looping path used when food is close, tells bees to search nearby. Right: the waggle dance for food further away; the angle of the waggle run from vertical on the comb shows the direction of food relative to the sun, and its length shows the distance.',
'Angle shows direction; length shows distance. The round dance means food is nearby.', H2.hac);

// 04 Personal space
F('04-personal-space', 'Personal space', 'The area around us that we feel is ours', [
  (y) => {
    const cx = 250, cy = y + 200;
    let s = '';
    [[190, C.tealLight], [140, C.teal], [90, C.cream], [30, C.mustard]].forEach(([r, f]) => { s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`; });
    s += `<circle cx="${cx}" cy="${cy - 10}" r="11" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${cx - 12}" y="${cy + 2}" width="24" height="22" rx="8" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(cx, cy - 58, 'intimate', { size: 15, weight: 700, anchor: 'middle' });
    s += T(cx, cy - 166, 'public', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const c = stack(y + 10, [
      { kicker: 'HALL\'S ZONES', title: 'From intimate to public distance', body: 'Intimate: close friends and family. Public: strangers, speakers.' },
      { kicker: 'VARIES WITH', title: 'Culture · status · gender', body: 'Some cultures stand closer when talking; people keep more distance from those of higher status.', fill: C.cream, edge: C.olive },
    ], { x: 490, w: 380, gap: 14, card: { size: 16, tsize: 19 } });
    return { s: s + c.s, h: 400 };
  },
  (y) => note(y, 'Applying it: Kai stands close; classmates step back', 'In Kai\'s home culture the normal conversational distance is smaller, so his classmates feel their personal space has been invaded and step back.', { size: 16, fill: C.panel, edge: C.panelEdge }),
],
'Concentric zones around a person run from intimate distance, for close friends and family, out to public distance, for strangers and speakers. Personal space varies with culture, status and gender. An application: Kai\'s classmates step back because his home culture\'s conversational distance is smaller.',
'Personal space runs from intimate to public, and its size depends on culture, status and gender.', H2.nvc);

// 05 Darwin vs learned
F('05-innate-or-learned', 'Non-verbal behaviour: innate or learned?', '', [
  (y) => row(y, [
    { kicker: 'DARWIN: EVOLVED AND INNATE', title: 'Expressions helped survival', body: ['A fear expression warns others; bared teeth signal threat', 'Babies show expressions very early', 'Children born blind produce similar expressions', 'Ekman: an isolated culture recognised the same basic expressions'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'LEARNED', kfill: C.olive, title: 'Culture shapes signals', body: ['Yuki: Japanese and American readings of faces differ', 'Personal space differs between cultures', 'The same hand sign can be friendly in one country, offensive in another'], bullets: true, fill: C.cream, edge: C.olive },
  ], { gap: 18, vcenter: false, card: { size: 16, tsize: 19, gap: 6 } }),
  (y) => {
    let s = T(30, y + 16, 'YUKI (2007): WHERE DO PEOPLE LOOK TO JUDGE HAPPY OR SAD?', { size: 15, weight: 700, fill: C.muted });
    const face = (cx, hiEyes) => {
      const cy = y + 110;
      let f = `<circle cx="${cx}" cy="${cy}" r="62" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>`;
      if (hiEyes) f += `<rect x="${cx - 50}" y="${cy - 36}" width="100" height="34" rx="12" fill="none" stroke="${C.rust}" stroke-width="3.5"/>`;
      else f += `<rect x="${cx - 40}" y="${cy + 6}" width="80" height="38" rx="12" fill="none" stroke="${C.rust}" stroke-width="3.5"/>`;
      f += `<path d="M${cx - 34},${cy - 14} q12,-12 24,0 M${cx + 10},${cy - 14} q12,-12 24,0" fill="none" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/><path d="M${cx - 24},${cy + 22} q24,14 48,0" fill="none" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/>`;
      return f;
    };
    s += face(170, true) + face(560, false);
    s += para(250, y + 90, '**Japanese** participants gave more weight to the **eyes**', 200, { size: 16, fill: C.ink }).s;
    s += para(640, y + 90, '**American** participants gave more weight to the **mouth**', 220, { size: 16, fill: C.ink }).s;
    s += para(450, y + 210, 'Yuki\'s link: in Japan, controlling emotional expression is valued, so people look to the eyes, which are harder to control.', 800, { size: 16, anchor: 'middle', fill: C.muted }).s;
    return { s, h: 250 };
  },
  (y) => note(y, '', 'Balanced conclusion: some basic expressions are **innate**, but **culture** shapes how and when they are displayed and read.', { align: 'middle', size: 17 }),
],
'Two columns of evidence. Innate (Darwin): expressions helped survival, babies and children born blind show them, and an isolated culture recognised the same basic expressions. Learned: Yuki\'s cultural difference, personal space and gestures. Two faces show Yuki\'s finding: Japanese participants weighted the eyes, American participants the mouth.',
'Some expressions are innate, but culture shapes how they are shown and read.', H2.exp);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
