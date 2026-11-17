import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-the-product';
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

// Tree node helper
const node = (cx, y, w, title, sub, o = {}) => {
  const c = card(cx - w / 2, y, w, { title, body: sub, align: 'middle', size: 16, tsize: 19, pad: 14, fill: o.fill || C.panel, edge: o.edge || C.panelEdge, minH: o.minH || 0, vcenter: true });
  return { ...c, cx, top: y, bot: y + c.h };
};
const link = (a, b) => path(`M${a.cx},${a.bot} L${a.cx},${(a.bot + b.top) / 2} L${b.cx},${(a.bot + b.top) / 2} L${b.cx},${b.top}`, { w: 2.5 });

// ---- end helpers ----

// ---- Extra helpers for this lesson ----
// Labelled rows: left tab with a label, body to the right. items [{label, body, fill, edge, lfill, bullets}]
function lrows(y, items, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, lw = o.lw ?? 180, gap = o.gap ?? 10, size = o.size ?? 17;
  let s = '', cy = y;
  items.forEach((it) => {
    const m = card(x + lw, cy, w - lw, { body: it.body, size, bfill: C.ink, bullets: it.bullets, gap: 4, pad: 16, nobox: true });
    const lp = wrapRich(it.label, lw - 28, o.lsize ?? 17, 700).length * Math.round((o.lsize ?? 17) * 1.25);
    const h = Math.max(m.h, lp + 28, o.minH ?? 56);
    const fill = it.fill || C.panel, edge = it.edge || C.panelEdge;
    s += `<rect x="${x}" y="${cy}" width="${w}" height="${h}" rx="14" fill="${fill}"/>`;
    s += `<path d="M${x + 14},${cy} H${x + lw} V${cy + h} H${x + 14} A14,14 0 0 1 ${x},${cy + h - 14} V${cy + 14} A14,14 0 0 1 ${x + 14},${cy} Z" fill="${it.lfill || C.teal}"/>`;
    s += `<rect x="${x}" y="${cy}" width="${w}" height="${h}" rx="14" fill="none" stroke="${edge}" stroke-width="2.5"/>`;
    s += para(x + 16, cy + h / 2 - lp / 2 + (o.lsize ?? 17) * 0.82, it.label, lw - 28, { size: o.lsize ?? 17, weight: 700, fill: it.link || C.ink, lh: Math.round((o.lsize ?? 17) * 1.25) }).s;
    s += card(x + lw, cy, w - lw, { body: it.body, size, bfill: C.ink, bullets: it.bullets, gap: 4, pad: 16, nobox: true, minH: h, vcenter: true }).s;
    cy += h + gap;
  });
  return { s, h: cy - y - gap };
}
// Study card: aim / procedure / results / conclusion rows (as the lesson states them).
const study = (y, rows, o = {}) => lrows(y, rows.map(([label, body, kind]) => ({ label, body, bullets: Array.isArray(body) && body.length > 1, lfill: kind === 'r' ? C.mustard : kind === 'c' ? C.tealDark : kind === 'a' ? C.cream : C.teal, link: kind === 'c' ? '#ffffff' : C.ink, fill: kind === 'r' ? '#fbf7e6' : C.panel, edge: kind === 'r' ? C.olive : C.panelEdge })), { lw: 170, ...o });
// Small section label.
const lab = (txt, o = {}) => (y) => ({ s: T(o.anchor === 'start' ? 30 : 450, y + 16, txt, { size: 16, weight: 700, anchor: o.anchor || 'middle', fill: o.fill || C.tealDark }), h: 16 });
// Strength / limitation evaluation grid. items [{k:'S'|'L', title, body}]
const evalGrid = (y, items, cols = 2, o = {}) => grid(y, items.map((it) => ({ kicker: it.k === 'S' ? 'STRENGTH' : it.k === 'L' ? 'LIMITATION' : it.k, kfill: it.k === 'L' ? C.rust : it.k === 'S' ? C.tealDark : C.olive, title: it.title, body: it.body, fill: it.fill, edge: it.edge })), cols, { gap: 14, vgap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 }, ...o });
// Horizontal bars. data [[label, value, fill, valueLabel]]
function hbars(y, data, max, o = {}) {
  const x0 = o.x0 ?? 250, x1 = o.x1 ?? 800, bh = o.bh ?? 44, gap = o.gap ?? 22; let s = '';
  data.forEach(([l, v, f, vl], i) => {
    const yy = y + i * (bh + gap), w = ((x1 - x0) * v) / max;
    s += T(x0 - 16, yy + bh / 2 + 6, l, { size: 17, anchor: 'end', weight: 600 });
    s += `<rect x="${x0}" y="${yy}" width="${w}" height="${bh}" fill="${f || C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
    s += T(x0 + w + 10, yy + bh / 2 + 7, vl ?? String(v), { size: 19, weight: 700 });
  });
  const H = data.length * (bh + gap) - gap;
  s += `<line x1="${x0}" y1="${y - 8}" x2="${x0}" y2="${y + H + 8}" stroke="${C.ink}" stroke-width="2.5"/>`;
  return { s, h: H };
}
// ---- end extra helpers ----

const H2 = {
  gift: '## 2.4.1 Gift-wrapping',
  becker: '## Key study: Becker et al. (2011)',
  shelf: '## Attention and shelf position',
  sell: '## 2.4.2 Selling the product',
  buy: '## 2.4.3 Buying the product',
};

// 01 Gift-wrapping
F('01-gift-wrapping', 'Gift-wrapping', 'Why we wrap, and why givers and recipients can disagree', [
  lab('WHY WRAP?'),
  (y) => row(y, [
    { title: 'Hides the gift', body: 'surprise and anticipation', align: 'middle' },
    { title: 'Marks it as a gift', body: 'not an ordinary purchase', align: 'middle' },
    { title: 'Signals effort', body: 'the thought of the giver', align: 'middle' },
  ], { gap: 14, card: { size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark } }),
  lab('RIXOM ET AL. (2020): A GIFT FROM A FRIEND'),
  (y) => {
    const r1 = row(y, [
      { kicker: 'NEATLY WRAPPED', title: 'Raises expectations', fill: C.cream, edge: C.olive },
      { title: 'Gift itself liked less', fill: '#f6e3d8', edge: C.rust },
    ], { arrows: true, card: { size: 16, tsize: 18, align: 'middle' } });
    const r2 = row(y + r1.h + 14, [
      { kicker: 'SLOPPILY WRAPPED', title: 'Sets low expectations' },
      { title: 'Gift exceeds them', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, card: { size: 16, tsize: 18, align: 'middle' } });
    return { s: r1.s + r2.s, h: r1.h + 14 + r2.h };
  },
  (y) => row(y, [
    { kicker: 'GIVERS BELIEVE', title: 'Careful, elaborate wrapping makes a gift more appreciated', fill: '#eef1f0' },
    { kicker: 'HOWARD (1992)', title: 'Wrapping puts the recipient in a positive mood', body: 'which biases their attitude to the item favourably', fill: '#eef1f0' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  lab('TYPES OF WRAPPING'),
  (y) => chips(y, ['none', 'gift bag', 'plain paper', 'decorative paper', 'ribbon', 'box', 'neat … untidy'], { size: 16, fill: C.cream, edge: C.olive }),
],
'Wrapping hides a gift, marks it as a gift and signals the giver\'s effort. Rixom et al. (2020) found a neatly wrapped gift from a friend raised expectations so the gift was liked less, while sloppy wrapping set low expectations that the gift exceeded. Givers believe elaborate wrapping increases appreciation; Howard (1992) proposed wrapping creates a positive mood. Types range from none to boxes, neat to untidy.',
'Neat wrapping can backfire by raising expectations the gift must meet.', H2.gift);

// 02 Becker et al.
F('02-becker-packaging', 'Key study: Becker et al. (2011)', 'Does the look of a yoghurt pot change how the yoghurt tastes?', [
  (y) => {
    let s = '';
    const pot = (cx, cy, angular, sat) => {
      const f = sat ? C.rust : '#f2d9c9';
      return angular
        ? `<path d="M${cx - 34},${cy - 40} L${cx + 34},${cy - 40} L${cx + 26},${cy + 40} L${cx - 26},${cy + 40} Z" fill="${f}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="miter"/>`
        : `<path d="M${cx - 34},${cy - 34} Q${cx - 34},${cy - 42} ${cx - 24},${cy - 42} L${cx + 24},${cy - 42} Q${cx + 34},${cy - 42} ${cx + 34},${cy - 34} Q${cx + 36},${cy + 40} ${cx},${cy + 42} Q${cx - 36},${cy + 40} ${cx - 34},${cy - 34} Z" fill="${f}" stroke="${C.ink}" stroke-width="3"/>`;
    };
    const gx = 300, gy = y + 40, cw = 270, ch = 130;
    [[0, 0, true, true], [1, 0, false, true], [0, 1, true, false], [1, 1, false, false]].forEach(([c, r, a, sat]) => {
      const x = gx + c * (cw + 12), yy = gy + r * (ch + 12), strong = a && sat;
      s += panel(x, yy, cw, ch, strong ? C.cream : C.panel, strong ? C.olive : C.panelEdge) + pot(x + 70, yy + ch / 2, a, sat);
      s += para(x + 120, yy + ch / 2 - 4, a && sat ? '**Most intense:** shape and colour' : !a && !sat ? '**Mildest** image' : a ? 'Shape adds intensity' : 'Colour adds intensity', 130, { size: 16, fill: C.ink }).s;
    });
    s += T(gx + cw / 2, gy - 12, 'Angular', { size: 18, weight: 700, anchor: 'middle' }) + T(gx + cw * 1.5 + 12, gy - 12, 'Rounded', { size: 18, weight: 700, anchor: 'middle' });
    s += T(gx - 16, gy + ch / 2 + 6, 'High saturation', { size: 17, weight: 700, anchor: 'end' }) + T(gx - 16, gy + ch * 1.5 + 18, 'Low saturation', { size: 17, weight: 700, anchor: 'end' });
    s += T(gx - 16, gy + 2 * ch + 12, 'Schematic of the 2 × 2 design', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: 40 + 2 * ch + 12 };
  },
  (y) => study(y, [
    ['Aim', 'Do package shape and colour saturation influence expected and rated taste intensity, especially for people who value visual design?', 'a'],
    ['Method', ['Controlled experiment: view yoghurt packages, rate expectations', 'Taste the yoghurt; rate taste intensity and other qualities', 'Sensitivity to visual design measured']],
    ['Results', ['Angular shape and high saturation → stronger, more intense taste', 'Effects strongest for people high in importance of visual design'], 'r'],
    ['Conclusion', 'Package design changes how a product is **experienced** (sensory transfer)', 'c'],
  ], { size: 16 }),
  (y) => P('It changed expected and rated **taste**, not sales. One product type; tasting in a research setting is less natural than at home.', { anchor: 'middle', size: 16 })(y),
],
'A two-by-two schematic of yoghurt pots: angular or rounded, high or low colour saturation, with angular and highly saturated giving the strongest expected taste. Study card: participants rated expectations, tasted yoghurt and rated intensity; angular shapes and saturated colours led to stronger taste ratings, most for those who value visual design.',
'Angular, strongly coloured pots made the yoghurt seem more intense.', H2.becker);

// 03 Central gaze cascade
F('03-central-gaze-cascade', 'The central gaze cascade effect', 'Atalay, Bodur and Rasolofoarison (2012), using eye-tracking. Illustrative display', [
  (y) => {
    let s = panel(30, y, 840, 270);
    s += `<rect x="90" y="${y + 40}" width="720" height="190" fill="#eef1f0" stroke="${C.ink}" stroke-width="3"/>`;
    for (let r = 0; r < 2; r++) s += `<line x1="90" y1="${y + 135 + r * 0}" x2="810" y2="${y + 135}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<ellipse cx="450" cy="${y + 135}" rx="150" ry="95" fill="${C.mustard}" opacity="0.35"/><ellipse cx="450" cy="${y + 135}" rx="80" ry="60" fill="${C.mustard}" opacity="0.5"/>`;
    for (let r = 0; r < 2; r++) for (let c = 0; c < 5; c++) {
      const x = 120 + c * 140, yy = y + 56 + r * 95, mid = c === 2;
      s += `<rect x="${x}" y="${yy}" width="100" height="64" rx="6" fill="${mid ? C.cream : C.panel}" stroke="${mid ? C.olive : C.ink}" stroke-width="${mid ? 3.5 : 2}"/>`;
    }
    s += T(450, y + 256, 'horizontal centre of the display', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    return { s, h: 270 };
  },
  (y) => row(y, [
    { title: 'Centre products get more visual attention' },
    { title: 'Attention to the centre rises just before choosing', fill: C.cream, edge: C.olive },
    { title: 'Central products chosen more often', fill: C.mustard, edge: C.ink },
  ], { arrows: true, card: { size: 16, tsize: 17, align: 'middle' } }),
  (y) => row(y, [
    { kicker: 'PLANOGRAM', title: 'A diagram of exactly where each product sits', body: 'keeps displays consistent; best positions for chosen products' },
    { kicker: 'LIMITATION', kfill: C.rust, title: 'Looking is not buying', body: 'a simulated display may not reflect a busy real shop' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  (y) => note(y, '', 'It is the **horizontal centre**, not “eye level”.', { align: 'middle', size: 17, fill: C.panel, edge: C.rust }),
],
'An illustrative shelf display with an attention hot spot over the horizontal centre. Centre products get more visual attention, attention to the centre rises just before the choice, and central products are chosen more often. Planograms fix where products sit; a limitation is that looking is not buying.',
'Attention drifts to the horizontal centre just before people choose.', H2.shelf);

// 04 Disrupt-then-reframe
F('04-disrupt-then-reframe', 'Disrupt-then-reframe', 'Davis and Knowles (1999): selling note cards', [
  (y) => row(y, [
    { kicker: 'DISRUPT', title: '“300 pennies”', body: 'an odd price briefly confuses', align: 'middle', fill: '#f6e3d8', edge: C.rust, kfill: C.rust },
    { kicker: 'REFRAME', title: '“That’s $3, it’s a bargain”', body: 'an easy way to resolve the confusion', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'RESULT', title: 'Sales increased', align: 'middle', fill: C.mustard, edge: C.ink, kfill: C.ink },
  ], { arrows: true, card: { size: 16, tsize: 19 } }),
  lab('KARDES ET AL. (2007): NEED FOR COGNITIVE CLOSURE'),
  (y) => {
    const a = card(30, y, 250, { kicker: 'SITUATION', title: 'Time pressure, fatigue, noise', align: 'middle', size: 16, tsize: 18, minH: 110, vcenter: true });
    const b = card(325, y, 250, { kicker: 'PERSON', title: 'High need for cognitive closure', body: 'wants a firm answer; dislikes ambiguity', align: 'middle', size: 15, tsize: 18, minH: 110, vcenter: true, fill: C.cream, edge: C.olive });
    const c = card(620, y, 250, { kicker: 'OUTCOME', title: 'Grabs the reframe', body: 'it ends the confusion', align: 'middle', size: 16, tsize: 18, minH: 110, vcenter: true, fill: C.mustard, edge: C.ink, kfill: C.ink });
    const h = Math.max(a.h, b.h, c.h);
    return { s: a.s + b.s + c.s + arrow(286, y + h / 2, 319, y + h / 2, { w: 3.5 }) + arrow(581, y + h / 2, 614, y + h / 2, { w: 3.5 }), h };
  },
  (y) => note(y, '', 'An interaction of an **individual difference** and **situational factors**: a busy, tired customer is more susceptible.', { align: 'middle', size: 17 }),
],
'Disrupt-then-reframe: an odd price of 300 pennies briefly confuses, the reframe "that\'s $3, it\'s a bargain" resolves it, and sales increased. Kardes et al. (2007) linked it to need for cognitive closure: time pressure, fatigue and noise raise the need, and people high in it grab the reframe because it ends the confusion.',
'Confuse, then offer an easy answer: it works best on tired, hurried buyers.', H2.sell);

// 05 Cialdini
F('05-cialdini-six', 'Cialdini’s six ways to close a sale', '', [
  (y) => grid(y, [
    { kicker: 'RECIPROCITY', title: 'A free sample creates a sense of obligation' },
    { kicker: 'COMMITMENT AND CONSISTENCY', title: 'A small agreement leads to a larger one' },
    { kicker: 'SOCIAL PROOF', title: 'Others are buying it' },
    { kicker: 'LIKING', title: 'We agree with people we like' },
    { kicker: 'AUTHORITY', title: 'An expert recommends it' },
    { kicker: 'SCARCITY', title: 'Only a few left' },
  ].map((it, i) => ({ ...it, fill: i % 2 ? C.panel : C.tealLight, edge: i % 2 ? C.panelEdge : C.tealDark })), 2, { gap: 14, vgap: 14, card: { size: 16, tsize: 19, minH: 96 } }),
  (y) => note(y, '', 'In an answer, show **how** each principle would close the sale, not just its name.', { align: 'middle', size: 17 }),
],
'Six cards: reciprocity (a free sample creates obligation), commitment and consistency (a small agreement leads to a larger one), social proof (others are buying it), liking (we agree with people we like), authority (an expert recommends it) and scarcity (only a few left).',
'Six principles, each a different reason to say yes.', H2.sell);

// 06 EKB and dissonance
F('06-ekb-dissonance', 'Buying: the EKB model and dissonance', 'Engel Kollat Blackwell: five stages', [
  (y) => row(y, [
    { kicker: '1', title: 'Problem recognition' },
    { kicker: '2', title: 'Information search' },
    { kicker: '3', title: 'Evaluation of alternatives' },
    { kicker: '4', title: 'Purchase' },
    { kicker: '5', title: 'Post-purchase outcomes', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 30, vcenter: true, card: { size: 15, tsize: 16, align: 'middle', pad: 12 } }),
  (y) => P('Search can be internal (memory) or external (reviews, friends). Useful for planned, high-involvement purchases; impulse buys skip stages.', { anchor: 'middle', size: 16 })(y),
  10,
  (y) => {
    let s = panel(30, y, 840, 176, C.cream, C.olive) + T(450, y + 36, 'POST-PURCHASE COGNITIVE DISSONANCE (FESTINGER)', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    s += card(80, y + 56, 300, { title: '“I chose this”', align: 'middle', tsize: 19, minH: 60, vcenter: true }).s;
    s += card(520, y + 56, 300, { title: '“The rejected option had good features”', align: 'middle', tsize: 17, minH: 60, vcenter: true }).s;
    s += `<path d="M392,${y + 86} l18,-14 l12,24 l12,-24 l12,24 l12,-24 l18,14" fill="none" stroke="${C.rust}" stroke-width="3.5" stroke-linejoin="round"/>`;
    s += T(450, y + 160, 'conflicting cognitions → discomfort after the decision', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
    return { s, h: 176 };
  },
  (y) => row(y, [
    { kicker: 'INCREASED WHEN', kfill: C.rust, body: ['Expensive', 'Important', 'Hard to reverse', 'Rejected alternatives were attractive'], bullets: true, fill: '#f6e3d8', edge: C.rust },
    { kicker: 'REDUCED BY', body: ['Seeking information that supports the choice', 'Playing down the rejected option', 'Returning the item'], bullets: true, fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, gap: 4 } }),
],
'The Engel Kollat Blackwell model runs through problem recognition, information search (internal or external), evaluation of alternatives, purchase and post-purchase outcomes. Post-purchase dissonance is the conflict between "I chose this" and "the rejected option had good features"; it is greater for expensive, important, hard-to-reverse purchases and attractive alternatives, and reduced by seeking supporting information, playing down the rejected option or returning the item.',
'Dissonance follows the purchase and is worst for costly, hard-to-reverse choices.', H2.buy);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
