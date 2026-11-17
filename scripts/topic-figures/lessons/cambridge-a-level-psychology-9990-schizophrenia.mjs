import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-schizophrenia';
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
  diag: '## 1.1.1 Diagnosis',
  key: '## Key study: Freeman et al. (2003)',
  exp: '## 1.1.2 Explanations',
  treat: '## 1.1.3 Treatment and management',
  plan: '## Annotated 10-mark plan: evaluate treatments for schizophrenia',
};

// 01 Delusion types
F('01-types-of-delusion', 'Four types of delusion', 'A delusion is a fixed, false belief held despite clear evidence against it', [
  (y) => grid(y, [
    { kicker: 'PERSECUTORY', title: 'Others intend harm', body: '*“My neighbours are poisoning my water.”*', fill: '#f6e3d8', edge: C.rust, kfill: C.rust },
    { kicker: 'REFERENCE', title: 'Neutral events have special personal meaning', body: '*“The newsreader is sending me messages.”*', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'GRANDEUR', title: 'An inflated sense of importance or powers', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CONTROL', title: 'Thoughts or actions controlled by an outside force', fill: '#e3eaf3', edge: C.blue, kfill: C.blue },
  ], 2, { gap: 14, vgap: 14, card: { size: 17, tsize: 19, gap: 6, minH: 130 } }),
  (y) => row(y, [
    { kicker: 'DELUSION', title: 'A fixed, false belief', body: 'held despite clear evidence', align: 'middle', fill: C.cream, edge: C.olive },
    { kicker: 'HALLUCINATION', title: 'Hearing or “seeing things”', body: 'most often hearing voices', align: 'middle' },
  ], { gap: 14, card: { size: 16, tsize: 19 } }),
  (y) => note(y, '', 'A delusion is **not** “seeing things”: that is a hallucination.', { align: 'middle', size: 17, fill: C.panel, edge: C.rust }),
],
'Four cards: persecutory delusions (others intend harm, such as believing neighbours are poisoning the water), reference (neutral events have personal meaning, such as messages from a newsreader), grandeur (inflated importance or powers) and control (thoughts or actions controlled from outside). A delusion is a fixed false belief; a hallucination is hearing or seeing things, most often voices.',
'Persecution, reference, grandeur and control: four kinds of fixed false belief.', H2.diag);

// 02 Freeman study card
F('02-freeman-vr-study', 'Key study: Freeman et al. (2003)', 'Investigating persecutory ideation with virtual reality', [
  (y) => {
    const a = card(30, y, 400, { kicker: 'THE PROBLEM IN REAL LIFE', title: 'Someone might really be hostile', body: 'So we cannot tell whether a suspicious thought is unfounded.', size: 16, tsize: 18, fill: '#f6e3d8', edge: C.rust, kfill: C.rust, minH: 150 });
    const b = card(470, y, 400, { kicker: 'THE VR SOLUTION', title: 'Characters programmed to behave neutrally', body: 'Any persecutory interpretation must come from the participant.', size: 16, tsize: 18, fill: C.tealLight, edge: C.tealDark, minH: 150 });
    return { s: a.s + b.s + arrow(434, y + 75, 466, y + 75, { w: 3.5 }), h: Math.max(a.h, b.h) };
  },
  (y) => study(y, [
    ['Aim', 'To test whether VR can investigate persecutory ideation, and whether such thoughts link to other psychological characteristics', 'a'],
    ['Sample', 'Pilot study: **24 non-clinical participants**'],
    ['Procedure', ['Assessments of symptoms such as anxiety and interpersonal sensitivity', 'Short time in a VR library with neutral computer-generated people', 'Reported thoughts and feelings about the characters']],
    ['Results', ['Many: positive or neutral thoughts', 'Some: ideas of reference and persecutory thoughts', 'Persecutory thoughts linked to **higher interpersonal sensitivity and anxiety**'], 'r'],
    ['Conclusion', 'People attribute mental states to virtual characters; VR is a promising standardised method', 'c'],
  ], { size: 16 }),
  (y) => evalGrid(y, [
    { k: 'S', title: 'Validity', body: 'Neutral, identical setting: persecutory thoughts known to be unfounded.' },
    { k: 'L', title: 'Generalisation', body: 'Small non-clinical sample; not diagnosed schizophrenia.' },
  ]),
],
'Real-life suspicion cannot be checked because others might be hostile; VR characters behave neutrally, so persecutory interpretations come from the participant. Study card: 24 non-clinical participants spent time in a VR library; some had persecutory thoughts, linked to higher interpersonal sensitivity and anxiety. VR is a promising method, but the sample was small and non-clinical.',
'In a neutral virtual library, persecutory thoughts must come from the person.', H2.key);

// 03 Frith
F('03-frith-self-monitoring', 'Frith: faulty self-monitoring', 'The cognitive explanation', [
  (y) => row(y, [
    { kicker: '1', title: 'Inner speech or thought', body: 'generated by the person', align: 'middle' },
    { kicker: '2', title: 'Self-monitoring fails', body: 'not recognised as their own', align: 'middle', fill: '#f6e3d8', edge: C.rust, kfill: C.rust },
    { kicker: '3', title: 'Experienced as external', body: 'voices, or thoughts inserted by others', align: 'middle', fill: C.cream, edge: C.olive },
  ], { arrows: true, card: { size: 16, tsize: 19 } }),
  (y) => row(y, [
    { kicker: 'EXPLAINS WELL', title: 'Hallucinations and delusions of control', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'LIMITATION', kfill: C.rust, title: 'Describes a fault without explaining its cause' },
  ], { gap: 14, card: { size: 16, tsize: 18 } }),
],
'Three steps: a person generates inner speech or a thought, self-monitoring fails so it is not recognised as their own, and it is experienced as an external voice or inserted thought. This explains hallucinations and delusions of control but does not explain what causes the fault.',
'Unrecognised inner speech is experienced as voices from outside.', H2.exp);

// 04 Revised dopamine + diathesis-stress
F('04-dopamine-and-diathesis-stress', 'Bringing the explanations together', '', [
  lab('REVISED DOPAMINE HYPOTHESIS'),
  (y) => row(y, [
    { kicker: 'SUBCORTICAL PATHWAYS', title: 'Too much dopamine activity', body: '→ positive symptoms', align: 'middle', fill: C.cream, edge: C.olive },
    { kicker: 'PREFRONTAL CORTEX', title: 'Too little dopamine activity', body: '→ negative symptoms', align: 'middle', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, card: { size: 17, tsize: 19 } }),
  10,
  lab('DIATHESIS-STRESS'),
  (y) => {
    const r = row(y, [
      { kicker: 'NATURE', title: 'Inherited vulnerability', body: 'many genes each add a small risk' },
      { kicker: 'NURTURE', title: 'Stressful experience', body: 'acts as the trigger' },
    ], { gap: 120, card: { size: 16, tsize: 19, align: 'middle' } });
    let s = r.s + T(450, y + r.h / 2 + 12, '+', { size: 40, weight: 700, anchor: 'middle' });
    const c = card(250, y + r.h + 46, 400, { title: 'Schizophrenia may develop', align: 'middle', tsize: 20, fill: C.mustard, edge: C.ink, minH: 60, vcenter: true });
    s += arrow(450, y + r.h + 6, 450, y + r.h + 40, { w: 3.5 }) + c.s;
    return { s, h: r.h + 46 + c.h };
  },
  (y) => note(y, '', 'Fits the twin evidence: identical twins share all genes, yet concordance is only about 48%.', { align: 'middle', size: 17 }),
  (y) => {
    const x0 = 80, x1 = 820; let s = `<line x1="${x0}" y1="${y + 40}" x2="${x1}" y2="${y + 40}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)" marker-start="url(#ah)"/>`;
    s += T(x0, y + 16, 'More reductionist', { size: 16, weight: 700, fill: C.rust }) + T(x1, y + 16, 'More holistic', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
    s += chip(200, y + 54, 'genetic, dopamine', { anchor: 'middle', size: 16, fill: '#f6e3d8', edge: C.rust }).s + chip(450, y + 54, 'cognitive (one process)', { anchor: 'middle', size: 16 }).s + chip(700, y + 54, 'diathesis-stress', { anchor: 'middle', size: 16, fill: C.tealLight, edge: C.tealDark }).s;
    return { s, h: 90 };
  },
],
'The revised dopamine hypothesis: too much dopamine activity in subcortical pathways gives positive symptoms, too little in the prefrontal cortex gives negative symptoms. Diathesis-stress combines an inherited vulnerability with a stressful trigger, fitting twin concordance of about 48 percent. A scale places genetic and dopamine explanations as most reductionist, cognitive in the middle and diathesis-stress as most holistic.',
'Diathesis-stress brings nature and nurture together, fitting the twin evidence.', H2.exp);

// 05 Treatments
F('05-treatments', 'Treating schizophrenia', '', [
  (y) => table(y, [{ w: 1.1, head: 'Treatment' }, { w: 1.7, head: 'How it works' }, { w: 1.7, head: 'Points to evaluate' }], [
    ['Typical antipsychotics (chlorpromazine)', 'Block D2 receptors', 'Reduce positive symptoms; movement side effects, including tardive dyskinesia'],
    ['Atypical antipsychotics (clozapine)', 'Act on serotonin as well as dopamine receptors', 'Lower risk of movement side effects; may help some negative symptoms; clozapine needs blood tests'],
    ['ECT', 'Brief seizure under anaesthetic and a muscle relaxant', 'Reserved for when others fail or catatonia is present; memory loss'],
    ['CBT', 'Examine evidence for delusions; alternative explanations for voices; coping strategies', 'Tailored to the person; lasting benefit (Sensky et al.)'],
  ], { size: 16 }),
  lab('SENSKY ET AL. (2000): 90 PATIENTS WITH SYMPTOMS PERSISTING DESPITE MEDICATION'),
  (y) => {
    let s = '';
    const lane = (yy, l, f, e, after, afterFill) => {
      s += card(30, yy, 170, { title: l, align: 'middle', tsize: 18, minH: 60, vcenter: true, fill: f, edge: e }).s;
      s += `<rect x="215" y="${yy + 10}" width="300" height="40" rx="20" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + T(365, yy + 36, 'treatment: both improved', { size: 16, anchor: 'middle', weight: 600 });
      s += arrow(520, yy + 30, 580, yy + 30, { w: 3 });
      s += `<rect x="586" y="${yy + 10}" width="284" height="40" rx="20" fill="${afterFill}" stroke="${C.ink}" stroke-width="2"/>` + T(728, yy + 36, after, { size: 16, anchor: 'middle', weight: 700 });
    };
    lane(y, 'CBT', C.tealLight, C.tealDark, 'still improving', C.teal);
    lane(y + 76, 'Befriending', '#eef1f0', C.panelEdge, 'did not keep improving', C.panel);
    s += T(728, y + 160, 'nine-month follow-up', { size: 15, anchor: 'middle', fill: C.muted, weight: 600 });
    return { s, h: 166 };
  },
],
'A table compares typical antipsychotics (block D2, movement side effects), atypical antipsychotics (serotonin and dopamine, fewer movement effects, blood tests for clozapine), ECT (last resort, memory loss) and CBT (tailored, lasting benefit). In Sensky et al., CBT and befriending groups both improved during treatment, but only the CBT group kept improving at the nine-month follow-up.',
'Drugs control symptoms; CBT gave gains that continued after treatment ended.', H2.treat);

// 06 10-mark plan
F('06-ten-mark-plan', 'Planning a 10-mark evaluation', 'Evaluate treatments for schizophrenia', [
  (y) => steps(y, [
    { title: 'Effectiveness', body: 'Antipsychotics reduce positive symptoms for many; CBT adds lasting benefit (Sensky et al.).' },
    { title: 'Side effects and ethics', body: 'Movement disorders, clozapine blood monitoring, ECT memory loss; consent is hard if insight is poor.' },
    { title: 'Reductionism', body: 'Drugs treat a chemical, CBT the person’s thinking; a combination is more holistic.' },
    { title: 'Idiographic v nomothetic', body: 'Trials give average effects; CBT is tailored to the individual’s beliefs.' },
    { title: 'Conclusion: a judgement', body: 'Drugs for symptom control, CBT for lasting coping, ECT as a last resort.' },
  ], { size: 16, tsize: 19, gap: 12, highlight: 4 }),
],
'Five numbered steps: effectiveness, side effects and ethics, reductionism, idiographic versus nomothetic, and a concluding judgement that drugs control symptoms, CBT supports lasting coping and ECT is a last resort. The conclusion is highlighted.',
'Four evaluation issues, then finish with a judgement.', H2.plan);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
