import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-pain';
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
  types: '## 3.3.1 What pain is for, and types of pain',
  theory: '## Theories of pain',
  meas: '## 3.3.2 Measuring pain',
  key: '## Key study: Brudvik et al. (2016)',
  man: '## 3.3.3 Managing and controlling pain',
  ans: '## Annotated answer: a 4-mark compare question',
};

// 01 Functions, acute and chronic
F('01-functions-acute-chronic', 'What pain is for, and two types', '', [
  lab('PAIN IS PROTECTIVE: THREE FUNCTIONS'),
  (y) => row(y, [
    { kicker: '1', title: 'Warns', body: 'of tissue damage', align: 'middle' },
    { kicker: '2', title: 'Withdraw', body: 'from the cause', align: 'middle' },
    { kicker: '3', title: 'Rest', body: 'so that healing can happen', align: 'middle' },
  ], { gap: 14, card: { size: 16, tsize: 20, align: 'middle', fill: C.tealLight, edge: C.tealDark } }),
  (y) => note(y, '', 'People born unable to feel pain often injure themselves badly without noticing.', { align: 'middle', size: 17, fill: C.panel, edge: C.panelEdge }),
  10,
  (y) => {
    // timeline bar
    const x0 = 60, x1 = 840, mid = 420; let s = '';
    s += `<rect x="${x0}" y="${y + 30}" width="${mid - x0}" height="40" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += `<rect x="${mid}" y="${y + 30}" width="${x1 - mid}" height="40" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T((x0 + mid) / 2, y + 57, 'ACUTE', { size: 18, weight: 700, anchor: 'middle' }) + T((mid + x1) / 2, y + 57, 'CHRONIC', { size: 18, weight: 700, anchor: 'middle' });
    s += `<line x1="${mid}" y1="${y + 14}" x2="${mid}" y2="${y + 86}" stroke="${C.rust}" stroke-width="3.5"/>`;
    s += T(mid, y + 10, 'about three months', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    s += T(x0, y + 100, 'injury', { size: 15, fill: C.muted }) + T(x1, y + 100, 'time →', { size: 15, fill: C.muted, anchor: 'end' });
    return { s, h: 104 };
  },
  (y) => row(y, [
    { kicker: 'ACUTE PAIN', title: 'Short-term', body: ['Usually less than three months', 'Identifiable cause, e.g. a cut or a broken bone', 'Fades as the injury heals'], fill: C.tealLight, edge: C.tealDark, bullets: true },
    { kicker: 'CHRONIC PAIN', kfill: C.olive, title: 'Persists beyond normal healing', body: ['Usually more than three months', 'May have no clear ongoing damage', 'Linked to low mood, poor sleep, reduced activity: psychological treatments matter'], fill: C.cream, edge: C.olive, bullets: true },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, gap: 5 } }),
],
'Three functions of pain: it warns of tissue damage, makes us withdraw from the cause and encourages rest for healing. A time bar divides acute pain, usually under three months with an identifiable cause, from chronic pain, which persists beyond normal healing time and is linked to low mood, poor sleep and reduced activity.',
'Pain protects us; acute pain fades with healing, chronic pain outlasts it.', H2.types);

// 02 Mirror treatment
F('02-mirror-treatment', 'Phantom limb pain and mirror treatment', 'Ramachandran’s mirror box, seen from above. Schematic', [
  (y) => {
    let s = panel(30, y, 840, 330);
    // box
    const bx = 260, by = y + 40;
    s += `<rect x="${bx}" y="${by}" width="380" height="200" rx="8" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
    // mirror
    s += `<line x1="450" y1="${by - 10}" x2="450" y2="${by + 210}" stroke="${C.blue}" stroke-width="9"/>`;
    s += T(450, by - 18, 'mirror', { size: 16, weight: 700, anchor: 'middle', fill: C.blue });
    // intact limb (right) - simple foot/leg shape
    s += `<rect x="520" y="${by + 60}" width="60" height="140" rx="26" fill="${C.sand}" stroke="${C.ink}" stroke-width="3"/>`;
    s += T(550, by + 248, 'intact limb moves', { size: 16, weight: 700, anchor: 'middle' });
    // reflection (left, dashed)
    s += `<rect x="320" y="${by + 60}" width="60" height="140" rx="26" fill="none" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="9 7"/>`;
    s += T(350, by + 248, 'seen where the', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }) + T(350, by + 268, 'missing limb would be', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
    // stump label
    s += para(56, by + 70, 'Missing limb’s side, hidden behind the mirror', 180, { size: 16, fill: C.muted }).s;
    s += arrow(206, by + 125, 312, by + 125, { w: 3 });
    s += para(668, by + 70, 'Patient watches the reflection in the mirror', 180, { size: 16, fill: C.muted }).s;
    s += path(`M690,${by + 145} Q600,${by + 30} 462,${by + 40}`, { w: 3, extra: 'marker-end="url(#ah)"' });
    return { s, h: 330 };
  },
  (y) => row(y, [
    { title: 'Visual feedback', body: 'The brain sees the missing limb moving' },
    { title: 'Pain can reduce', body: 'Phantom pain cannot come from the limb itself: it is not there', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, card: { size: 16, tsize: 19, align: 'middle' } }),
  (y) => row(y, [
    { kicker: 'MACLACHLAN ET AL. (2004)', title: 'Case study, lower limb', body: 'Mirror exercises practised over weeks; the patient reported reduced pain.', fill: C.cream, edge: C.olive },
    { kicker: 'LIMITATION', kfill: C.rust, title: 'One case, no control', body: 'Detailed evidence, but cannot show the treatment works for everyone.' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
],
'A mirror box seen from above: the patient moves the intact limb and its reflection appears where the amputated limb would be, giving visual feedback that the missing limb is moving, which can reduce phantom pain. MacLachlan et al. (2004) is a lower-limb case study with reduced pain after weeks of exercises, but it is one case with no control condition.',
'The mirror lets the brain see the missing limb move, which can ease phantom pain.', H2.types);

// 03 Specificity vs gate control
F('03-specificity-vs-gate', 'Two theories of pain', '', [
  (y) => {
    let s = panel(30, y, 840, 250);
    s += T(54, y + 38, 'SPECIFICITY THEORY (DESCARTES)', { size: 16, weight: 700, fill: C.tealDark });
    const bx = [60, 330, 600], lbl = ['Pain receptors', 'Dedicated pathway', 'Pain centre in brain'];
    bx.forEach((x, i) => {
      s += card(x, y + 62, 240, { title: lbl[i], align: 'middle', tsize: 18, minH: 64, vcenter: true, fill: i === 2 ? C.tealLight : C.panel, edge: i === 2 ? C.tealDark : C.panelEdge }).s;
      if (i < 2) s += arrow(x + 246, y + 94, bx[i + 1] - 6, y + 94, { w: 3.5 });
    });
    s += card(60, y + 150, 780, { body: 'Prediction: **pain is directly proportional to tissue damage**', align: 'middle', size: 18, bfill: C.ink, fill: C.cream, edge: C.olive, minH: 70, vcenter: true }).s;
    return { s, h: 250 };
  },
  lab('IT CANNOT EXPLAIN', { fill: C.rust }),
  (y) => row(y, [
    { title: 'Phantom limb pain', body: 'no limb to send signals' },
    { title: 'Injuries not felt at the time', body: 'soldiers or athletes who notice a wound only later' },
    { title: 'Psychological effects', body: 'attention, mood and expectation change pain' },
  ], { gap: 14, card: { size: 16, tsize: 18, edge: C.rust } }),
  10,
  (y) => {
    let s = '';
    s += T(54, y + 38, 'GATE CONTROL THEORY (MELZACK AND WALL, 1965)', { size: 16, weight: 700, fill: C.tealDark });
    s += para(54, y + 68, 'A neural “gate” in the dorsal horn of the spinal cord controls whether pain signals reach the brain.', 790, { size: 17 }).s;
    const r = row(y + 108, [
      { kicker: 'OPEN THE GATE', kfill: C.rust, body: ['Small-diameter fibres (pain signals)', 'Anxiety, focusing on pain'], bullets: true },
      { kicker: 'CLOSE THE GATE', body: ['Large-diameter fibres (touch, pressure): rubbing helps', 'Distraction, relaxation, positive mood'], bullets: true },
    ], { x: 54, w: 792, gap: 14, vcenter: false, card: { size: 16, gap: 4, pad: 16 } });
    const H = 108 + r.h + 24;
    return { s: panel(30, y, 840, H, C.tealLight, C.tealDark) + s + r.s, h: H };
  },
  (y) => row(y, [
    { kicker: 'STRENGTH', title: 'Holistic', body: 'Combines physiological and psychological factors; explains why psychological treatments work.' },
    { kicker: 'LIMITATION', kfill: C.rust, title: 'Hard to test directly', body: 'The gate is a functional idea, not a single structure that has been located.' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
],
'Specificity theory runs from pain receptors along a dedicated pathway to a pain centre, predicting that pain is proportional to tissue damage; it cannot explain phantom limb pain, injuries not felt at the time or psychological effects. Gate control theory places a gate in the dorsal horn: small fibres, anxiety and focusing open it; large fibres, distraction, relaxation and positive mood close it.',
'Specificity theory ties pain to damage alone; gate control adds the mind.', H2.theory);

// 04 Measures of pain
F('04-measuring-pain', 'Four ways to measure pain', '', [
  (y) => {
    // VAS line
    let s = panel(30, y, 840, 160);
    s += T(54, y + 34, 'VISUAL ANALOGUE SCALE: a straight line, typically 10 cm', { size: 16, weight: 700, fill: C.tealDark });
    const x0 = 140, x1 = 760, ly = y + 106;
    s += `<line x1="${x0}" y1="${ly}" x2="${x1}" y2="${ly}" stroke="${C.ink}" stroke-width="4"/>`;
    s += `<line x1="${x0}" y1="${ly - 14}" x2="${x0}" y2="${ly + 14}" stroke="${C.ink}" stroke-width="4"/><line x1="${x1}" y1="${ly - 14}" x2="${x1}" y2="${ly + 14}" stroke="${C.ink}" stroke-width="4"/>`;
    s += T(x0, ly + 38, 'no pain', { size: 16, anchor: 'middle', weight: 600 }) + T(x1, ly + 38, 'worst possible pain', { size: 16, anchor: 'middle', weight: 600 });
    const mx = 520;
    s += `<line x1="${mx}" y1="${ly - 20}" x2="${mx}" y2="${ly + 20}" stroke="${C.rust}" stroke-width="5"/>`;
    s += `<line x1="${x0}" y1="${ly - 30}" x2="${mx}" y2="${ly - 30}" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="6 5"/>`;
    s += T((x0 + mx) / 2, ly - 38, 'patient’s mark: distance measured', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 });
    return { s, h: 160 };
  },
  (y) => table(y, [
    { w: 1.05, head: 'Measure' }, { w: 1.6, head: 'What it involves' }, { w: 1.3, head: 'Strength' }, { w: 1.4, head: 'Weakness' },
  ], [
    ['Clinical interview', 'Practitioner asks about location, intensity, duration, quality and effect on daily life', 'Rich, individual information', 'Relies on the patient’s description and the practitioner’s interpretation'],
    ['McGill pain questionnaire', 'Patient chooses words: **sensory**, **affective**, **evaluative**; body diagram; present intensity', 'Detailed; distinguishes types of pain', 'Takes time; needs good language skills, so unsuitable for young children'],
    ['Visual analogue scale', 'Patient marks a line from “no pain” to “worst possible pain”', 'Quick; quantitative; tracks change over time', 'Reduces pain to one number; people use the scale differently'],
    ['UAB pain behaviour scale', 'Trained observer rates behaviours: complaints, grimaces, posture, mobility, supportive equipment', 'No self-report needed', 'Observers need training for inter-rater reliability; behaviour can be exaggerated or suppressed'],
  ], { size: 15, hsize: 17, pad: 12 }),
  (y) => chips(y, ['Self-report: interview, McGill, VAS', 'Observation: UAB scale'], { size: 16, fill: C.cream, edge: C.olive }),
],
'A visual analogue scale is drawn as a line from no pain to worst possible pain with the patient\'s mark measured from the start. A table compares the clinical interview, McGill pain questionnaire, visual analogue scale and UAB pain behaviour scale on what each involves, a strength and a weakness.',
'Self-report measures need the patient’s words; the UAB scale needs a trained observer.', H2.meas);

// 05 Brudvik study card
F('05-brudvik-study', 'Key study: Brudvik et al. (2016)', 'Who rates a child’s pain most accurately?', [
  (y) => study(y, [
    ['Aim', 'To compare pain assessment by physicians, parents and children in an outpatient emergency setting', 'a'],
    ['Setting and sample', 'Accident and emergency department in Bergen, Norway; **243 children aged 3 to 15**'],
    ['Procedure', ['Children rated their own pain on scales adapted to their age', 'Parents and physicians independently rated the child’s pain on a numeric rating scale']],
    ['Results', ['Mean ratings: **children 5.5, parents 4.8, physicians 3.2**', 'Child-parent agreement moderate; agreement with physicians low', 'Only about **42%** of children with severe pain received pain relief'], 'r'],
    ['Conclusion', 'Physicians should take children’s and parents’ ratings seriously; parents’ ratings help when a child cannot self-report', 'c'],
  ], { size: 16 }),
  lab('EVALUATION'),
  (y) => evalGrid(y, [
    { k: 'S', title: 'High ecological validity', body: 'Real clinical setting; independent ratings.' },
    { k: 'L', title: 'Generalisation', body: 'One emergency department in one country.' },
    { k: 'IDIOGRAPHIC V NOMOTHETIC', title: 'Numbers allow comparison', body: 'But a child’s number may not mean the same as an adult’s.' },
    { k: 'ETHICS', title: 'Children in research', body: 'Parental consent; care must not be delayed by the research.' },
  ]),
],
'Study card for Brudvik et al. (2016): aim, setting with 243 children aged 3 to 15 in Bergen, independent ratings by children, parents and physicians, results of mean ratings 5.5, 4.8 and 3.2 with only about 42 percent of severely hurt children given relief, and the conclusion. Evaluation covers ecological validity, generalisation, idiographic versus nomothetic and the use of children.',
'Physicians underestimated children’s pain; children’s and parents’ ratings deserve weight.', H2.key);

// 06 Managing pain via gate control
F('06-managing-pain', 'Managing pain: three groups of methods', 'Gate control theory links them', [
  (y) => row(y, [
    { kicker: 'BIOLOGICAL', title: 'Biochemical', body: ['Opiates such as morphine mimic endorphins at opioid receptors', 'Non-opioid painkillers reduce inflammation', '*Fast, effective; side effects; opiate dependence*'], bullets: true },
    { kicker: 'PSYCHOLOGICAL', title: 'Thinking strategies', body: ['Attention diversion', 'Non-pain imagery', 'Cognitive redefinition', '*Cheap; need practice and effort*'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'ALTERNATIVE', kfill: C.olive, title: 'Acupuncture, TENS', body: ['Acupuncture: fine needles at specific points; may partly be placebo', 'TENS: mild current through skin electrodes'], bullets: true, fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19, gap: 5 } }),
  (y) => {
    const xs = [165, 450, 735], labs = ['reduce signals', 'send descending signals', 'stimulate large fibres']; let s = '';
    const gy = y + 120;
    xs.forEach((x, i) => {
      s += chip(x, y + 4, labs[i], { anchor: 'middle', size: 16, fill: C.tealLight, edge: C.tealDark, ink: C.tealDark }).s;
      s += arrow(x, y + 40, 450 + (i - 1) * 120, gy - 6, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    });
    s += card(250, gy, 400, { title: 'The pain gate closes', align: 'middle', tsize: 21, fill: C.mustard, edge: C.ink, minH: 64, vcenter: true }).s;
    return { s, h: 120 + 64 };
  },
],
'Three columns of pain management: biological (opiates mimic endorphins, non-opioids reduce inflammation), psychological (attention diversion, non-pain imagery, cognitive redefinition) and alternative (acupuncture and TENS). Arrows show how each relates to gate control theory: drugs reduce signals, psychological strategies send descending signals and TENS stimulates large fibres, closing the gate.',
'Drugs, thinking strategies and TENS can all be explained by closing the pain gate.', H2.man);

// 07 Compare answer structure
F('07-compare-answer', 'Building a 4-mark compare answer', 'McGill pain questionnaire v UAB pain behaviour scale', [
  (y) => steps(y, [
    { title: 'A similarity', body: 'Both give quantified data that can be compared over time.' },
    { title: 'Difference: what the McGill involves', body: 'Self-report: the patient chooses words for sensory, affective and evaluative qualities.' },
    { title: 'Difference: what the UAB involves', body: 'Observation: a trained observer rates behaviours such as grimacing and mobility.' },
    { title: 'The consequence', body: 'McGill depends on language and honesty; UAB depends on observer reliability and works for patients who cannot describe pain.' },
  ], { size: 17, tsize: 19, gap: 12, highlight: 3 }),
  (y) => note(y, '', 'One mark each: a similarity, two differences tied to what each measure involves, and a consequence.', { align: 'middle', size: 17 }),
],
'Four numbered steps for a 4-mark answer comparing the McGill questionnaire and UAB scale: a similarity (both give quantified data), what McGill involves (self-report words), what UAB involves (observer-rated behaviours) and the consequence (language and honesty versus observer reliability). The consequence step is highlighted.',
'Similarity, two linked differences, then the consequence.', H2.ans);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
