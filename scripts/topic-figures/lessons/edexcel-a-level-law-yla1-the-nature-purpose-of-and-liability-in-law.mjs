import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-law-yla1-the-nature-purpose-of-and-liability-in-law';
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
  rules: '## Rules and law',
  pers: '## Rights, duties and legal personality',
  civ: '## Civil and criminal liability compared',
  pun: '## Theories of punishment and sentencing',
  th: '## Legal theories of law and justice',
  mor: '## Law and morality',
  we1: '## Worked example 1: linking theory to a sentence',
};

// 01 Rule vs law
F('01-rule-or-law', 'When does a rule become law?', 'All three features together', [
  (y) => {
    const cols = ['Certainty', 'Enforcement', 'Sanctioned by the state'];
    const rows = [['A school rule', true, true, false], ['A legal rule', true, true, true]];
    return table(y, [{ w: 1.2, head: '' }, { w: 1, head: 'Certainty' }, { w: 1, head: 'Enforcement' }, { w: 1.2, head: 'Sanctioned by the state', hfill: C.cream }],
      rows.map(([n, a, b, c]) => [n, a ? '✓ ' + (n.startsWith('A school') ? 'written down' : 'recognised source') : '✗', b ? '✓ ' + (n.startsWith('A school') ? 'by a detention' : 'courts, police, prosecutors') : '✗', c ? '✓ fine, imprisonment, damages' : '✗ no state sanction']),
      { size: 17, cellFill: (r, c) => (r === 0 && c === 3 ? C.cream : null) });
  },
  (y) => row(y, [
    { kicker: 'CERTAINTY', body: 'Comes from a recognised source: an Act, delegated legislation or a binding judgment, so anyone can find out what it requires.' },
    { kicker: 'ENFORCEMENT', body: 'Through the courts and, in criminal matters, the police and prosecuting authorities.' },
    { kicker: 'SANCTIONED BY THE STATE', body: 'Breaking it can lead to a fine, imprisonment or an order to pay damages.', fill: C.cream, edge: C.olive },
  ], { gap: 12, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'A table compares a school rule with a legal rule. Both are certain and enforced, but only the legal rule is sanctioned by the state, through a fine, imprisonment or damages. Cards define certainty, enforcement and state sanction.',
'A school rule can be certain and enforced; only law is sanctioned by the state.', H2.rules);

// 02 Legal personality
F('02-legal-personality', 'Rights, duties and legal personality', '', [
  (y) => grid(y, [
    { kicker: 'RIGHTS', body: 'to own property, to be paid under a contract' },
    { kicker: 'DUTIES', body: 'to take reasonable care, not to steal' },
    { kicker: 'PRIVILEGES', body: 'what is said in Parliament or in court cannot found a defamation claim' },
    { kicker: 'LIABILITIES', body: 'exposure to a sanction or remedy when a duty is broken', fill: C.cream, edge: C.olive },
  ], 4, { gap: 10, vcenter: false, card: { size: 15, bfill: C.ink, pad: 14 } }),
  (y) => row(y, [
    { kicker: 'NATURAL PERSON', title: 'A human being' },
    { kicker: 'LEGAL (ARTIFICIAL) PERSON', title: 'A registered company', body: 'separate from its shareholders', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 18, card: { size: 16, tsize: 19, align: 'middle' } }),
  (y) => {
    let s = card(30, y, 840, { kicker: 'SALOMON v A SALOMON & CO LTD [1897]', body: '', size: 16, pad: 16, minH: 160 }).s;
    const box = (x, t1, f, e) => `<rect x="${x}" y="${y + 50}" width="230" height="64" rx="10" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(x + 115, y + 89, t1, { size: 18, weight: 700, anchor: 'middle' });
    s += box(60, 'Mr Salomon', C.panel, C.panelEdge) + box(335, 'The company', C.tealLight, C.tealDark) + box(610, 'Debts', C.cream, C.olive);
    s += arrow(845, y + 82, 845, y + 82, { w: 0 }).replace(/.*/, '') + arrow(605, y + 82, 571, y + 82, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    s += `<line x1="296" y1="${y + 60}" x2="296" y2="${y + 104}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="6 5"/>`;
    s += T(450, y + 146, "The company's debts were its own, not Mr Salomon's", { size: 17, anchor: 'middle', fill: C.ink, weight: 600 });
    return { s, h: 160 };
  },
],
'Four cards define rights, duties, privileges and liabilities. A natural person is a human being; a registered company is a legal person separate from its shareholders. In Salomon v Salomon the company\'s debts were its own, not Mr Salomon\'s.',
'A company is a separate legal person: its debts are its own.', H2.pers);

// 03 Civil vs criminal
F('03-civil-vs-criminal', 'Civil and criminal liability compared', '', [
  (y) => table(y, [{ w: 0.9, head: '' }, { w: 1.4, head: 'Civil law', hfill: C.teal }, { w: 1.4, head: 'Criminal law', hfill: C.cream }], [
    ['Purpose', 'Settle disputes between individuals or organisations', 'Punish wrongs against society'],
    ['Who brings it', 'The **claimant** sues the **defendant**', 'The state **prosecutes** the **defendant**, usually through the CPS'],
    ['Proof', 'Claimant, on the **balance of probabilities**', 'Prosecution, **beyond reasonable doubt** (*Woolmington v DPP* [1935])'],
    ['Outcome', '**Liable** or not liable', '**Guilty** or not guilty'],
    ['Response', 'Remedies: damages, injunction, specific performance', 'Sanctions: custody, community order, fine, discharge'],
  ], { size: 16 }),
  (y) => {
    const top = card(300, y, 300, { title: 'A customer punches a shopkeeper', align: 'middle', size: 16, tsize: 18, fill: C.mustard, edge: C.ink });
    const yy = y + top.h + 50;
    const r = row(yy, [
      { kicker: 'CRIMINAL', title: 'Prosecuted for assault', body: 'looks back at the wrong; serves society' },
      { kicker: 'CIVIL', title: 'Sued for damages in tort', body: 'looks at the loss; puts the claimant back where they were', fill: C.tealLight, edge: C.tealDark },
    ], { gap: 160, card: { size: 15, tsize: 18, align: 'middle' } });
    const a = arrow(400, y + top.h + 4, 210, yy - 6, { w: 3 }) + arrow(500, y + top.h + 4, 690, yy - 6, { w: 3 });
    return { s: top.s + a + r.s, h: yy + r.h - y };
  },
  (y) => P('Because the standards of proof differ, an acquittal does not stop a civil claim succeeding.', { anchor: 'middle', size: 17, fill: C.ink, weight: 700 })(y),
],
'A table compares civil and criminal law on purpose, who brings the case, burden and standard of proof, outcome and response. Below, one incident, a customer punching a shopkeeper, leads both to a prosecution for assault and to a civil claim for damages. An acquittal does not stop the civil claim.',
'Different parties, standards and outcomes; one incident can lead to both.', H2.civ);

// 04 Punishment theories
F('04-punishment-theories', 'Seven theories of punishment', 'And the sentences each points to', [
  (y) => {
    const L = [
      ['Revenge', "Society's wish to hit back", 'Long custody for shocking crimes; rarely openly endorsed'],
      ['Retribution', 'Just deserts, proportionate', 'Sentences graded by seriousness; mandatory life for murder'],
      ['Denunciation', 'Public condemnation', 'Exemplary sentences for crimes causing public outrage'],
      ['Deterrence', 'Individual and general', 'Custody; suspended sentences'],
      ['Rehabilitation', 'Reforming the offender', 'Community orders with drug rehabilitation or supervision'],
      ['Reparation', 'Making amends', 'Compensation orders; unpaid work'],
      ['Restoration', 'Repairing the offender–victim relationship', 'Restorative justice meetings'],
    ];
    const back = new Set([0, 1, 2]);
    return table(y, [{ w: 0.8, head: 'Theory' }, { w: 1.1, head: 'Looks at' }, { w: 1.5, head: 'Typical sentence link', hfill: C.cream }], L, { size: 16 });
  },
  (y) => note(y, 'Criminal Justice Act 2003, s 142: purposes the court must consider for an adult', 'Punishment · reduction of crime (including deterrence) · reform and rehabilitation · protection of the public · reparation. The Act does not rank them.', { size: 16 }),
],
'A table of seven theories of punishment, what each looks at, and the sentence it points to: revenge, retribution, denunciation, deterrence, rehabilitation, reparation and restoration. A note lists the purposes in s 142 of the Criminal Justice Act 2003, which are not ranked.',
'Each theory gives a different reason to punish and points to a different sentence.', H2.pun);

// 05 Legal theories and theorists
F('05-legal-theorists', 'Three legal theories and their theorists', '', [
  (y) => row(y, [
    { kicker: 'POSITIVISM', title: 'What law is and what it ought to be are separate', body: ['**Austin**: the command of a sovereign backed by a sanction', '**Hart**: primary and secondary rules, identified by a rule of recognition', '+ certainty · − a wicked law made correctly is still law'] },
    { kicker: 'NATURAL LAW', kfill: C.olive, title: 'Human laws are measured against a higher moral law', body: ['**Aquinas**: an unjust law is not truly law', '**Fuller**: law\'s "inner morality": public, clear, not retrospective'], fill: C.cream, edge: C.olive },
    { kicker: 'UTILITARIANISM', title: 'Judge a law by its consequences', body: ['**Bentham**, **Mill**: the greatest happiness of the greatest number', '**Mill\'s harm principle**: the state may only prevent harm to others'], fill: C.tealLight, edge: C.tealDark },
  ], { gap: 12, vcenter: false, card: { size: 15, tsize: 17, gap: 7 } }),
  (y) => note(y, 'The 1958 Hart–Fuller debate', 'The classic clash between positivism and natural law, partly about how post-war German courts should treat informers who had relied on Nazi laws.', { size: 16 }),
],
'Three columns. Positivism separates law from what it ought to be (Austin: command of a sovereign; Hart: primary and secondary rules and a rule of recognition). Natural law measures law against a higher moral law (Aquinas; Fuller\'s inner morality). Utilitarianism judges law by consequences (Bentham and Mill; Mill\'s harm principle). A note describes the Hart–Fuller debate.',
'Positivism, natural law and utilitarianism, each tied to its theorists.', H2.th);

// 06 Hart/Devlin and cases
F('06-hart-devlin-cases', 'Should the law enforce morality?', 'Triggered by the Wolfenden Report (1957)', [
  (y) => row(y, [
    { kicker: 'LORD DEVLIN', kfill: C.olive, title: 'Yes: a shared morality holds society together', fill: C.cream, edge: C.olive },
    { kicker: 'PROFESSOR HART (FOLLOWING MILL)', title: 'Only harm to others justifies legal intervention', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 18, card: { size: 16, tsize: 18 } }),
  (y) => grid(y, [
    { kicker: 'ENFORCING MORALITY', kfill: C.olive, body: ['*Shaw v DPP* [1962]: conspiracy to corrupt public morals', '*R v Brown* [1993]: consent no defence to ABH in private sadomasochistic activity'], bullets: true, fill: C.cream, edge: C.olive },
    { kicker: 'RESPECTING PRIVATE CHOICE', body: ['*R v Wilson* [1996]: branding at his wife\'s request was not guilty, distinguishing *Brown*'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CHANGING WITH SOCIAL ATTITUDES', body: ['*R v R* [1991]: marital rape', '*Gillick* [1985]: contraceptive advice to a competent under-16'], bullets: true },
    { kicker: 'LIFE AND DEATH', body: ['*Airedale NHS Trust v Bland* [1993]: withdrawing treatment', '*Re A (Conjoined Twins)* [2000]: separation causing one twin\'s death'], bullets: true },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 15, bfill: C.ink, gap: 5 } }),
],
'Devlin says a shared morality holds society together so law may enforce it; Hart, following Mill, says only harm to others justifies intervention. Cases are grouped: enforcing morality (Shaw, Brown), respecting private choice (Wilson), changing with social attitudes (R v R, Gillick) and life and death (Bland, Re A).',
'Devlin versus Hart, tested against cases that point each way.', H2.mor);

// 07 Dev worked example
F('07-dev-sentence-theories', 'Linking theory to a sentence', 'Dev, 19: community order with 80 hours of unpaid work cleaning the area he damaged', [
  (y) => {
    const L = [
      ['Reparation', 'Unpaid work repairs harm done to the community', C.tealLight, C.tealDark, '✓'],
      ['Rehabilitation', 'Structured work and supervision aim to change behaviour', C.tealLight, C.tealDark, '✓'],
      ['Deterrence (individual)', 'Breach of the order risks a harsher sentence', C.tealLight, C.tealDark, '✓'],
      ['Not retribution in its strongest form', 'No custody: the offence is at the lower end of seriousness', C.panel, C.panelEdge, '✗'],
    ];
    let s = '', cy = y;
    L.forEach(([a, b, f, e, m]) => {
      s += card(110, cy, 300, { title: a, size: 16, tsize: 18, fill: f, edge: e, minH: 70, vcenter: true, pad: 14 }).s + card(440, cy, 430, { body: b, size: 16, bfill: C.ink, minH: 70, vcenter: true, pad: 14 }).s;
      s += badge(62, cy + 35, 22, m, m === '✓' ? C.mustard : C.panel) + arrow(414, cy + 35, 436, cy + 35, { w: 3 });
      cy += 82;
    });
    return { s, h: cy - 12 - y };
  },
  (y) => note(y, '', 'Each theory is **defined, applied to Dev and tied to a feature of the sentence**, not just named.', { align: 'middle', size: 17 }),
],
'Four rows link Dev\'s community order with unpaid work to theories of punishment: reparation, rehabilitation and individual deterrence apply, each tied to a feature of the sentence; retribution in its strongest form does not, because there is no custody.',
'Name the theory, apply it to the offender, and tie it to a feature of the sentence.', H2.we1);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
