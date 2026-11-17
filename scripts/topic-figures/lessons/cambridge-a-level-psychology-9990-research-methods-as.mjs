import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-research-methods-as';
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
  exp: '## Experiments',
  self: '## Self-reports',
  case: '## Case studies',
  cor: '## Correlations',
  lon: '## Longitudinal studies',
  plan: '## Worked planning example',
};

// 01 Lab v field
F('01-lab-v-field', 'Two types of experiment', 'Both manipulate an IV and measure a DV; the setting decides the type', [
  (y) => row(y, [
    { kicker: 'LABORATORY EXPERIMENT', title: 'Controlled setting set up by the researcher', body: ['*e.g. Andrade’s doodling study*', '+ Strong control: cause and effect more secure', '+ Easy to replicate (reliability)', '− Artificial setting: lower ecological validity', '− More demand characteristics'], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FIELD EXPERIMENT', kfill: C.olive, title: 'IV manipulated in the participants’ normal environment', body: ['*e.g. Piliavin et al. on the subway*', '+ Higher ecological validity', '+ Participants may not know they are studied', '− Weaker control', '− Ethical problems: no consent, no debrief'], fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, gap: 6 } }),
  lab('EXPERIMENTAL AND CONTROL CONDITIONS'),
  (y) => {
    const r = row(y, [
      { kicker: 'EXPERIMENTAL GROUP', title: 'Aggressive model', body: 'Bandura et al.', align: 'middle' },
      { kicker: 'CONTROL GROUP', title: 'No model', body: 'the baseline: aggression without a model', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    ], { gap: 120, card: { size: 16, tsize: 19 } });
    const mx = 450;
    return { s: r.s + T(mx, y + r.h / 2 - 4, 'compare', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) + `<line x1="${mx - 50}" y1="${y + r.h / 2 + 8}" x2="${mx + 50}" y2="${y + r.h / 2 + 8}" stroke="${C.olive}" stroke-width="3" marker-end="url(#ahO)" marker-start="url(#ahO)"/>`, h: r.h };
  },
  (y) => note(y, '', 'A control group does not make a study a laboratory experiment: **the setting decides**.', { align: 'middle', size: 17 }),
],
'Laboratory experiments, such as Andrade\'s doodling study, have strong control and are easy to replicate but are artificial with more demand characteristics. Field experiments, such as Piliavin et al. on the subway, have higher ecological validity but weaker control and ethical problems. A control group with no model gave Bandura et al. a baseline for comparison.',
'Laboratory or field depends on the setting, not on whether there is a control group.', H2.exp);

// 02 Self-reports
F('02-self-reports', 'Self-reports: questionnaires and interviews', 'Participants report their own thoughts, feelings or behaviour', [
  lab('QUESTIONNAIRES'),
  (y) => row(y, [
    { kicker: 'MODE', title: 'Paper and pencil or online', body: 'Online reaches large, scattered samples cheaply, but the researcher cannot check who completed it.' },
    { kicker: 'OPEN QUESTIONS', title: 'Own words', body: '→ qualitative data; detailed, more valid for complex experiences', fill: C.cream, edge: C.olive },
    { kicker: 'CLOSED QUESTIONS', title: 'Fixed set of answers', body: '→ quantitative data; easy to compare, reliable', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  10,
  lab('INTERVIEWS VARY IN TWO WAYS'),
  (y) => {
    let s = panel(30, y, 840, 150);
    s += T(54, y + 36, 'FORMAT', { size: 16, weight: 700, fill: C.tealDark });
    const xs = [70, 330, 590], ws = 240, names = ['Structured', 'Semi-structured', 'Unstructured'], subs = ['same questions, same order', 'set questions + follow-up', 'follows the conversation'];
    s += `<line x1="100" y1="${y + 76}" x2="800" y2="${y + 76}" stroke="${C.panelEdge}" stroke-width="5"/>`;
    xs.forEach((x, i) => { s += chip(x + ws / 2, y + 60, names[i], { anchor: 'middle', size: 17, fill: [C.tealLight, C.panel, C.cream][i], edge: [C.tealDark, C.ink, C.olive][i] }).s + T(x + ws / 2, y + 122, subs[i], { size: 16, anchor: 'middle', fill: C.muted }); });
    return { s, h: 150 };
  },
  (y) => row(y, [
    { kicker: 'TECHNIQUE', title: 'Face-to-face', body: 'Builds rapport; interviewer can read body language' },
    { kicker: 'TECHNIQUE', title: 'Telephone', body: 'Cheaper; may feel less intimidating for sensitive topics' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  (y) => note(y, 'Evaluate with', 'Social desirability bias · whether people can report accurately on themselves · closed versus open trade-off', { size: 17 }),
],
'Questionnaires can be paper or online and use open questions giving qualitative data or closed questions giving quantitative data. Interviews vary in format, from structured through semi-structured to unstructured, and in technique, face-to-face or telephone. Evaluation points are social desirability bias, accuracy of self-knowledge and the open versus closed trade-off.',
'Format and technique are two separate ways interviews differ.', H2.self);

// 03 Case studies
F('03-case-study', 'Case studies', 'A detailed investigation of a single participant or unit', [
  (y) => hub(y, ['One person,', 'family or', 'organisation'], [
    { title: 'Interviews' }, { title: 'Observation' },
  ], [
    { title: 'Questionnaires' },
  ], { cardW: 260, r: 96, csize: 19, card: { tsize: 18 } }),
  (y) => note(y, '', 'Techniques are combined so the findings can be **checked against each other**.', { align: 'middle', size: 17 }),
  (y) => note(y, 'Core example', 'Saavedra and Silverman: a boy with button phobia.', { size: 17, fill: C.panel, edge: C.panelEdge }),
  (y) => row(y, [
    { kicker: 'STRENGTHS', body: ['Rich, detailed, often qualitative data', 'Can study rare cases that could not be created experimentally'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'WEAKNESSES', kfill: C.rust, body: ['May not generalise from one case', 'Researcher may become subjective', 'Retrospective information depends on memory'], bullets: true },
  ], { gap: 14, vcenter: false, card: { size: 16, gap: 5 } }),
],
'A single person, family or organisation at the centre is studied with interviews, observation and questionnaires, whose findings are checked against each other; Saavedra and Silverman\'s boy with button phobia is the core example. Strengths are rich data and access to rare cases; weaknesses are limited generalisation, subjectivity and reliance on memory.',
'One case, several techniques: rich data that may not generalise.', H2.case);

// 04 Correlations
F('04-correlations', 'Correlations', 'Two co-variables, neither manipulated. Scatter graphs are illustrative', [
  (y) => {
    const plot = (x, title, pts, sub, fill, edge) => {
      let s = panel(x, y, 268, 290, fill, edge) + T(x + 134, y + 36, title, { size: 19, weight: 700, anchor: 'middle' });
      const ox = x + 40, oy = y + 230, w = 200, h = 160;
      s += `<line x1="${ox}" y1="${oy}" x2="${ox + w}" y2="${oy}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h}" stroke="${C.ink}" stroke-width="2.5"/>`;
      pts.forEach(([a, b]) => { s += `<circle cx="${ox + a * w}" cy="${oy - b * h}" r="6" fill="${C.tealDark}"/>`; });
      s += T(x + 134, y + 266, sub, { size: 16, anchor: 'middle', fill: C.muted });
      return s;
    };
    const pos = [[.1, .12], [.2, .2], [.28, .35], [.38, .32], [.45, .5], [.55, .48], [.62, .62], [.72, .7], [.8, .78], [.9, .88]];
    const neg = pos.map(([a, b]) => [a, 1 - b]);
    const none = [[.1, .6], [.2, .2], [.3, .8], [.4, .4], [.5, .7], [.6, .15], [.7, .55], [.8, .85], [.88, .3], [.35, .55]];
    return { s: plot(30, 'Positive', pos, 'both increase together', C.panel) + plot(316, 'Negative', neg, 'one up, the other down', C.cream, C.olive) + plot(602, 'No correlation', none, 'no pattern', C.panel), h: 290 };
  },
  (y) => P('**Strength**: how closely the points fit a line, from strong to weak to none.', { anchor: 'middle', size: 17, fill: C.ink })(y),
  (y) => note(y, 'Core example: Baron-Cohen et al.', 'Eyes test scores fell as Autism Spectrum Quotient scores rose: a **negative correlation**.', { size: 17 }),
  (y) => {
    const a = card(30, y + 20, 230, { title: 'Co-variable 1', align: 'middle', tsize: 18, minH: 60, vcenter: true });
    const b = card(640, y + 20, 230, { title: 'Co-variable 2', align: 'middle', tsize: 18, minH: 60, vcenter: true });
    const c = card(330, y + 110, 240, { title: 'Third variable?', align: 'middle', tsize: 18, fill: '#f6e3d8', edge: C.rust, minH: 60, vcenter: true });
    let s = a.s + b.s + c.s;
    s += `<line x1="268" y1="${y + 50}" x2="632" y2="${y + 50}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="8 6"/>` + T(450, y + 40, 'related, but no cause shown', { size: 16, anchor: 'middle', weight: 600 });
    s += arrow(340, y + 128, 200, y + 86, { color: C.rust, w: 3, marker: 'ahR' }) + arrow(560, y + 128, 700, y + 86, { color: C.rust, w: 3, marker: 'ahR' });
    return { s, h: 170 };
  },
  (y) => P('Operationally define co-variables: “hours of sleep the previous night, from a sleep diary”, not just “sleep”.', { anchor: 'middle', size: 16 })(y),
],
'Three illustrative scatter graphs show positive, negative and no correlation. Baron-Cohen et al. found Eyes test scores fell as Autism Spectrum Quotient scores rose, a negative correlation. A diagram shows two co-variables linked by a dashed line with a possible third variable affecting both, so no cause is shown.',
'A correlation shows a relationship, not a cause: a third variable may affect both.', H2.cor);

// 05 Longitudinal: Holzel
F('05-longitudinal', 'Longitudinal studies', 'The same participants measured more than once over time', [
  (y) => {
    let s = '';
    const lane = (yy, label, fill, edge, mid) => {
      s += T(40, yy + 38, label, { size: 18, weight: 700 });
      s += card(210, yy, 130, { title: 'Brain scan', body: 'before', align: 'middle', size: 15, tsize: 17, pad: 12, minH: 64, vcenter: true }).s;
      s += arrow(346, yy + 32, 396, yy + 32, { w: 3 });
      s += `<rect x="402" y="${yy + 12}" width="250" height="40" rx="20" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + T(527, yy + 38, mid, { size: 16, weight: 700, anchor: 'middle' });
      s += arrow(658, yy + 32, 708, yy + 32, { w: 3 });
      s += card(714, yy, 130, { title: 'Brain scan', body: 'after', align: 'middle', size: 15, tsize: 17, pad: 12, minH: 64, vcenter: true }).s;
    };
    lane(y, 'Mindfulness', C.tealLight, C.tealDark, 'eight-week programme');
    lane(y + 90, 'Control group', '#eef1f0', C.panelEdge, 'no programme');
    s += T(527, y + 186, 'Hölzel et al.: an experiment with a longitudinal design', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: 192 };
  },
  (y) => row(y, [
    { kicker: 'STRENGTH', title: 'Change tracked within the same people', body: 'Participant variables are controlled.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'WEAKNESSES', kfill: C.rust, title: 'Time, attrition, practice', body: ['They take a long time', 'Attrition (drop-out) may leave a biased sample', 'Repeated testing may cause practice effects'], bullets: true },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
],
'Two lanes: the mindfulness group has a brain scan, an eight-week programme and a second scan; the control group has the same scans with no programme, as in Hölzel et al. Longitudinal studies track change within the same people, controlling participant variables, but take a long time and suffer attrition and practice effects.',
'Measuring the same people twice tracks change, but some drop out.', H2.lon);

// 06 Planning frame
F('06-planning-frame', 'Planning a field experiment', 'Does background music in a school library affect how long students stay?', [
  (y) => lrows(y, [
    { label: 'IV', body: 'Quiet background music v no music, alternating by day across two weeks', lfill: C.mustard },
    { label: 'DV', body: 'Minutes per visit, from sign-in and sign-out times on the library’s existing log', lfill: C.mustard },
    { label: 'Location', body: 'The school library during normal opening hours', lfill: C.mustard },
    { label: 'Design', body: 'Independent measures; days allocated to conditions at random', lfill: C.mustard },
    { label: 'Controls', body: 'Same volume, playlist, opening hours and staffing; exam weeks excluded', lfill: C.mustard },
    { label: 'Reliability', body: 'Standardised playlist and timing records can be repeated exactly' },
    { label: 'Validity', body: 'Normal setting; students do not know music is the IV, reducing demand characteristics' },
    { label: 'Data', body: 'Quantitative (minutes per visit)' },
  ], { lw: 160, size: 16, minH: 50, gap: 8 }),
  (y) => {
    const a = chip(30, y, 'Field-experiment features', { size: 16, fill: C.mustard });
    const b = chip(30 + a.w + 12, y, 'General features', { size: 16, fill: C.teal });
    return { s: a.s + b.s + T(870, y + 21, 'Not required in Paper 2: aims, hypotheses, sampling, ethics', { size: 15, anchor: 'end', fill: C.rust, weight: 600 }), h: a.h };
  },
],
'A planning frame for a field experiment on background music in a school library: IV, DV, location, design, controls (the field-experiment features) and reliability, validity and data (general features). A note says aims, hypotheses, sampling and ethics are not required in a Paper 2 plan.',
'Cover the method’s own features plus procedure, validity, reliability and data.', H2.plan);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
