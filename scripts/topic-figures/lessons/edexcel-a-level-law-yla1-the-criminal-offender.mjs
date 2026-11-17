import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-law-yla1-the-criminal-offender';
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
  caus: '## Actus reus: causation',
  mr: '## Mens rea',
  prop: '## Property offences',
  def: '## General defences',
  sent: '## Sentencing',
  we: '## Worked example: a burglary scenario',
};
const caseT = (s) => s; // case names are written in italics via *...* markup

// 01 Causation
F('01-causation-chain', 'Causation: two tests, then the chain', '', [
  (y) => row(y, [
    { kicker: '1 · FACTUAL CAUSATION', title: '"But for" the act, would the result have happened?', body: '*R v White* [1910]: the victim died of a heart attack before the poison worked, so White was not the cause (guilty of attempted murder).' },
    { kicker: '2 · LEGAL CAUSATION', title: 'An operating and substantial cause?', body: '*R v Smith* [1959]', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 50, fr: [1.3, 1], card: { size: 16, tsize: 18 } }),
  (y) => P('**Does an intervening act break the chain?**', { anchor: 'middle', size: 18, fill: C.ink })(y),
  (y) => grid(y, [
    { kicker: 'THIN SKULL RULE', title: 'Take the victim as you find them', body: '*R v Blaue* [1975]', fill: C.cream, edge: C.olive },
    { kicker: 'POOR MEDICAL TREATMENT', title: 'Rarely breaks the chain', body: 'Unless "palpably wrong" (*R v Jordan* [1956]) or so independent the original wound is insignificant (*R v Cheshire* [1991])' },
    { kicker: 'VICTIM ESCAPING', title: 'A reasonably foreseeable reaction does not break it', body: '*R v Roberts* [1971]', fill: C.cream, edge: C.olive },
  ], 3, { gap: 12, vcenter: false, card: { size: 16, tsize: 17 } }),
],
'Two tests in order: factual causation, the but for test (R v White, where the victim died before the poison worked), then legal causation, an operating and substantial cause (R v Smith). Three cards show when the chain is not broken: the thin skull rule (Blaue), poor medical treatment unless palpably wrong or the wound is insignificant (Jordan, Cheshire), and a foreseeable escape (Roberts).',
'Prove "but for" and an operating and substantial cause; the chain is rarely broken.', H2.caus);

// 02 Mens rea and OAPA
F('02-mens-rea-oapa', 'Mens rea separates similar offences', 'Offences Against the Person Act 1861', [
  (y) => {
    const rowsD = [
      ['s 47', 'Assault occasioning actual bodily harm', 'Mens rea for the assault only', C.panel, C.panelEdge],
      ['s 20', 'Unlawful wounding or inflicting grievous bodily harm', 'Foresight of some harm', C.tealLight, C.tealDark],
      ['s 18', 'Wounding or causing grievous bodily harm with intent', 'Intention', C.cream, C.olive],
    ];
    let s = T(150, y + 14, 'OFFENCE', { size: 15, weight: 700, fill: C.muted }) + T(600, y + 14, 'MENS REA NEEDED', { size: 15, weight: 700, fill: C.muted });
    let cy = y + 28;
    rowsD.forEach(([sec, name, mr, f, e], i) => {
      const a = card(110, cy, 440, { body: name, size: 17, bfill: C.ink, minH: 70, vcenter: true, pad: 16 });
      const b = card(600, cy, 270, { title: mr, size: 16, tsize: 18, minH: Math.max(70, a.h), vcenter: true, pad: 16, fill: f, edge: e });
      s += badge(62, cy + a.h / 2, 30, '', C.cream) + T(62, cy + a.h / 2 + 7, sec, { size: 18, weight: 700, anchor: 'middle' }) + a.s + b.s + arrow(556, cy + a.h / 2, 594, cy + a.h / 2, { w: 3 });
      cy += Math.max(a.h, b.h) + 12;
    });
    s += arrow(880, y + 40, 880, cy - 20, { w: 0 }).replace(/.*/, '');
    return { s, h: cy - 12 - y };
  },
  (y) => row(y, [
    { kicker: 'DIRECT INTENTION', title: 'Aim or purpose', body: '*R v Mohan* [1975]' },
    { kicker: 'OBLIQUE INTENTION', title: 'Virtual certainty, appreciated by D', body: '*R v Woollin* [1998], refining *Nedrick* [1986]' },
    { kicker: 'SUBJECTIVE RECKLESSNESS', title: 'D foresaw a risk and unreasonably took it', body: '*Cunningham* [1957]; *R v G* [2003]' },
  ], { gap: 12, vcenter: false, card: { size: 16, tsize: 17 } }),
  (y) => row(y, [
    { kicker: 'TRANSFERRED MALICE', title: 'Mens rea transfers to another victim', body: '*R v Latimer* [1886]', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'BUT NOT', kfill: C.rust, title: 'Between different kinds of offence', body: '*R v Pembliton* [1874]: intending to hit people, he broke a window' },
    { kicker: 'COINCIDENCE', title: 'AR and MR must coincide', body: 'A continuing act can satisfy this: *Fagan* [1969]' },
  ], { gap: 12, vcenter: false, card: { size: 16, tsize: 17 } }),
],
'Three OAPA 1861 offences with their mens rea: s 47 needs mens rea for the assault only, s 20 needs foresight of some harm and s 18 needs intention. Cards define direct intention (Mohan), oblique intention (Woollin) and subjective recklessness (Cunningham, R v G), then transferred malice (Latimer, but not Pembliton) and coincidence (Fagan).',
'Similar actus reus, different mens rea: s 47, s 20 and s 18 are separated by the mental element.', H2.mr);

// 03 Theft elements
F('03-theft-elements', 'Theft: five elements, Theft Act 1968', 'All five must be proved', [
  (y) => {
    const els = [
      ['s 2', 'Dishonestly', '*Ivey v Genting Casinos* [2017]: D\'s actual belief about the facts, then the standards of ordinary decent people. Not dishonest if D believes in a legal right, owner\'s consent, or owner cannot be found by reasonable steps'],
      ['s 3', 'Appropriates', 'Any assumption of the rights of an owner (*Morris* [1983]), even with consent (*Gomez* [1993])'],
      ['s 4', 'Property', 'Money and all other property, real or personal, including things in action'],
      ['s 5', 'Belonging to another', 'Includes possession or control; property got by another\'s mistake (s 5(4))'],
      ['s 6', 'Intention permanently to deprive', 'Treating the thing as one\'s own to dispose of; borrowing only if the "goodness" is gone (*Lloyd* [1985])'],
    ];
    let s = '', cy = y;
    els.forEach(([sec, name, d], i) => {
      const b = card(330, cy, 540, { body: d, size: 15, bfill: C.ink, pad: 14 });
      const h = Math.max(64, b.h);
      s += card(30, cy, 290, { title: name, size: 16, tsize: 19, minH: h, vcenter: true, pad: 14, fill: C.tealLight, edge: C.tealDark, indent: 56 }).s + chip(46, cy + h / 2 - 15, sec, { size: 15, fill: C.mustard }).s + card(330, cy, 540, { body: d, size: 15, bfill: C.ink, pad: 14, minH: h, vcenter: true }).s;
      cy += h + 10;
    });
    return { s, h: cy - 10 - y };
  },
  (y) => note(y, '', 'Theft is dishonestly appropriating property belonging to another with the intention of permanently depriving the other of it (s 1).', { align: 'middle', size: 17 }),
],
'Five rows give the elements of theft with their sections and cases: dishonestly (s 2, Ivey test and the s 2 exceptions), appropriates (s 3, Morris and Gomez), property (s 4), belonging to another (s 5, including s 5(4)) and intention permanently to deprive (s 6, Lloyd on borrowing).',
'Dishonesty, appropriation, property, belonging to another, intention to permanently deprive: ss 2 to 6.', H2.prop);

// 04 General defences
F('04-duress-intoxication', 'Duress and intoxication', '', [
  (y) => {
    let s = T(30, y + 14, 'DURESS OF THREATS: THE R v GRAHAM [1982] TEST', { size: 15, weight: 700, fill: C.tealDark });
    const st = steps(y + 28, [
      { kicker: 'THRESHOLD', title: 'A threat of death or serious injury' },
      { kicker: 'STAGE 1 (SUBJECTIVE)', title: 'Was D compelled by a reasonable belief in the threat?' },
      { kicker: 'STAGE 2 (OBJECTIVE)', title: 'Would a sober person of reasonable firmness have responded the same way?' },
    ], { x: 30, w: 520, size: 16, tsize: 17, gap: 10, pad: 14, highlight: [] });
    const lim = card(570, y + 28, 300, { kicker: 'NOT AVAILABLE', kfill: C.rust, body: ['Murder: *R v Howe* [1987]', 'Attempted murder: *R v Gotts* [1992]', 'Lost on voluntary association with criminals: *R v Hasan* [2005]'], bullets: true, size: 16, bfill: C.ink, fill: C.cream, edge: C.olive, gap: 6 });
    const circ = card(570, y + 28 + lim.h + 10, 300, { kicker: 'DURESS OF CIRCUMSTANCES', body: 'Same test, danger from a situation: *Willer* [1986]; *Martin* [1989]', size: 15, bfill: C.ink });
    return { s: s + st.s + lim.s + circ.s, h: 28 + Math.max(st.h, lim.h + 10 + circ.h) };
  },
  (y) => { const s = T(30, y + 14, 'INTOXICATION', { size: 15, weight: 700, fill: C.tealDark }); const r = row(y + 28, [
    { kicker: 'VOLUNTARY', title: 'No defence to basic-intent offences', body: '*DPP v Majewski* [1977]; can negate specific intent. "Dutch courage" defeats it: *A-G for NI v Gallagher* [1963].' },
    { kicker: 'INVOLUNTARY', title: 'Helps only if D did not form mens rea', body: 'An intoxicated intent is still intent (*Kingston* [1994]); a sedative with an unexpected effect may count (*Hardie* [1985]).', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 17 } }); return { s: s + r.s, h: r.h + 28 }; },
],
'Duress of threats: a threat of death or serious injury, then the two-stage Graham test, subjective then objective. It is not available for murder (Howe) or attempted murder (Gotts) and is lost on voluntary association with criminals (Hasan); duress of circumstances uses the same test. Intoxication: voluntary is no defence to basic intent (Majewski); involuntary helps only if mens rea was not formed (Kingston, Hardie).',
'Duress needs both Graham stages and never covers murder; intoxication rarely helps if intent was formed.', H2.def);

// 05 Sentencing
F('05-sentencing', 'Sentencing: four main types', 'Criminal Justice Act 2003 framework, now consolidated in the Sentencing Act 2020', [
  (y) => {
    const L = [
      ['Custody', 'Only where neither a fine nor a community sentence can be justified; may be suspended', C.rust, C.cream],
      ['Community orders', 'One or more requirements: unpaid work, curfew, rehabilitation activity', C.olive, C.cream],
      ['Fines', 'Set by the seriousness of the offence and the offender\'s means', C.tealDark, C.tealLight],
      ['Discharges', 'Conditional or absolute', C.tealDark, C.tealLight],
    ];
    let s = '', cy = y;
    L.forEach(([a, b, k, f], i) => {
      const w = 840 - i * 70, x = 30 + i * 35;
      const c = card(x, cy, w, { title: a, body: b, size: 16, tsize: 19, fill: f, edge: k, pad: 14, minH: 72, vcenter: true });
      s += c.s; cy += c.h + 10;
    });
    s += T(860, y - 8, '', {});
    return { s, h: cy - 10 - y };
  },
  (y) => P('Most severe at the top', { anchor: 'middle', size: 15, italic: true })(y),
  (y) => row(y, [
    { kicker: 'SERIOUSNESS', title: 'Culpability and harm' },
    { kicker: 'AGGRAVATING', kfill: C.rust, title: 'e.g. previous convictions; hostility based on race or religion' },
    { kicker: 'MITIGATING', title: 'Factors that reduce the sentence' },
    { kicker: 'GUILTY PLEA', title: 'Up to one third off for an early plea', fill: C.cream, edge: C.olive },
  ], { gap: 10, card: { size: 15, tsize: 16 } }),
],
'Four sentence types stacked from most to least severe: custody (only where nothing less can be justified, may be suspended), community orders with requirements, fines set by seriousness and means, and conditional or absolute discharges. Below, the court considers seriousness, aggravating and mitigating factors, and up to one third off for an early guilty plea.',
'Custody is the last resort; seriousness, aggravation, mitigation and plea set the level.', H2.sent);

// 06 Burglary worked example
F('06-burglary-scenario', 'Applying s 9 to a scenario', 'Owen enters a garage to take a bicycle, pushes the owner, takes nothing', [
  (y) => row(y, [
    { kicker: 's 9(1)(a)', title: 'Enters as a trespasser with intent', body: 'to steal, inflict GBH or do unlawful damage: complete on entry', fill: C.cream, edge: C.olive },
    { kicker: 's 9(1)(b)', title: 'Having entered as a trespasser…', body: 'steals or inflicts GBH, or attempts to' },
  ], { gap: 18, card: { size: 16, tsize: 18 } }),
  (y) => steps(y, [
    { title: 'Trespasser?', body: 'He had no permission: yes.' },
    { title: 'Building or part of one?', body: 'A garage is a building.' },
    { title: 'Intent on entry?', body: 'He intended to steal: s 9(1)(a) burglary is complete on entry.' },
    { title: 'Robbery?', body: 'No theft occurred, so no robbery (*Robinson*); consider an assault offence for the push.' },
  ], { highlight: [2], size: 16, tsize: 18, gap: 8, pad: 12 }),
  (y) => P('Entry must be "effective" (*Collins*; *Brown*), can be partial (*Ryan*); part of a building includes behind a shop counter (*Walkington*).', { anchor: 'middle', size: 16 })(y),
],
'The two routes to burglary: s 9(1)(a), entering as a trespasser with intent, complete on entry; and s 9(1)(b), committing an offence after entering as a trespasser. Four steps apply them to Owen: he is a trespasser, a garage is a building, he intended to steal so s 9(1)(a) is complete, and there is no robbery because nothing was stolen.',
'Intent at the moment of entry completes s 9(1)(a); no theft means no robbery.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
