import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-social-approach';
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
  ass: '## The assumptions',
  mil: '## Milgram (1963): obedience',
  per: '## Perry et al. (2015): personal space',
  pil: '## Piliavin et al. (1969): subway Samaritans',
};

// 01 Assumptions and presence
F('01-assumptions-presence', 'The social approach: two assumptions', '', [
  (y) => row(y, [
    { kicker: 'ASSUMPTION 1', title: 'Social contexts, environments and groups', body: 'influence behaviour, cognitions and emotions' },
    { kicker: 'ASSUMPTION 2', title: 'The actual, implied or imagined presence of others', body: 'influences behaviour, cognitions and emotions', fill: C.cream, edge: C.olive },
  ], { gap: 14, card: { size: 16, tsize: 19 } }),
  lab('THREE KINDS OF PRESENCE IN THE CORE STUDIES'),
  (y) => row(y, [
    { kicker: 'ACTUAL', title: 'Piliavin et al.', body: 'other passengers really are there', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PARTLY IMPLIED', kfill: C.olive, title: 'Milgram', body: 'experimenter actually present; learner next door, known only from sounds', fill: C.cream, edge: C.olive },
    { kicker: 'IMAGINED', kfill: C.blue, title: 'Perry et al.', body: 'distance judged from figures on a screen or in pictures', fill: '#e3eaf3', edge: C.blue },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19, align: 'middle', gap: 6 } }),
],
'Two assumptions: behaviour, cognitions and emotions are influenced by social contexts and groups, and by the actual, implied or imagined presence of others. Presence is actual in Piliavin et al. (other passengers), partly implied in Milgram (the learner known only from sounds) and imagined in Perry et al. (figures on a screen or in pictures).',
'Actual, implied and imagined presence: one core study for each.', H2.ass);

// 02 Milgram procedure
F('02-milgram-procedure', 'Milgram (1963): the procedure', 'Yale University; 40 men aged 20 to 50, paid $4.50', [
  (y) => {
    let s = panel(30, y, 840, 200);
    s += `<line x1="590" y1="${y + 24}" x2="590" y2="${y + 156}" stroke="${C.ink}" stroke-width="5"/>` + T(600, y + 40, 'wall', { size: 15, fill: C.muted });
    const who = (x, l1, l2, f, e) => card(x, y + 44, 200, { title: l1, body: l2, align: 'middle', size: 15, tsize: 19, pad: 14, minH: 96, vcenter: true, fill: f, edge: e }).s;
    s += who(60, 'Experimenter', 'uses four prods', '#eef1f0', C.panelEdge) + who(320, 'Teacher', 'real participant at the generator', C.cream, C.olive) + who(640, 'Learner', 'confederate, electrode on wrist', C.panel, C.panelEdge);
    s += arrow(264, y + 92, 314, y + 92, { w: 3 }) + arrow(524, y + 92, 634, y + 92, { w: 3.5, color: C.rust, marker: 'ahR' });
    s += T(556, y + 78, 'shocks', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
    s += T(450, y + 182, 'Rigged draw: the participant was always the teacher. Real 45 V sample shock.', { size: 15, anchor: 'middle', fill: C.muted });
    return { s, h: 200 };
  },
  (y) => {
    let s = T(30, y + 16, 'THE GENERATOR: 30 SWITCHES, 15 TO 450 V IN 15 V STEPS', { size: 16, weight: 700, fill: C.tealDark });
    const x0 = 40, w = 26, g = 1.6, yy = y + 34;
    for (let i = 0; i < 30; i++) {
      const v = (i + 1) * 15, x = x0 + i * (w + g);
      const f = v >= 300 ? (v === 450 ? C.rust : C.mustard) : C.tealLight;
      s += `<rect x="${x}" y="${yy}" width="${w}" height="44" rx="4" fill="${f}" stroke="${C.ink}" stroke-width="1.8"/>`;
    }
    const xv = (v) => x0 + (v / 15 - 1) * (w + g) + w / 2;
    [[15, '15 V'], [300, '300 V'], [450, '450 V']].forEach(([v, l]) => { s += T(xv(v), yy + 68, l, { size: 16, weight: 700, anchor: 'middle' }); });
    s += T(xv(15) - 13, yy + 92, '“Slight Shock”', { size: 15, fill: C.muted });
    s += T(xv(450) + 13, yy + 92, '“XXX”', { size: 15, fill: C.muted, anchor: 'end' });
    s += T(xv(330), yy + 92, '“Danger: Severe Shock”', { size: 15, fill: C.muted, anchor: 'middle' });
    return { s, h: 34 + 100 };
  },
  (y) => row(y, [
    { kicker: '300 V', title: 'Learner pounds on the wall', body: 'and stops answering', fill: C.cream, edge: C.olive },
    { kicker: 'AFTER 315 V', title: 'Pounds again', body: 'then silence', fill: C.cream, edge: C.olive },
    { kicker: 'IF THE TEACHER HESITATES', title: 'Four prods in order', body: '“Please continue” … “You have no other choice, you must go on”' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  (y) => P('Observed through a one-way mirror; interviewed afterwards.', { anchor: 'middle', size: 16 })(y),
],
'The experimenter gives prods to the teacher (the real participant), who gives shocks to the learner, a confederate in the next room. The generator has 30 switches from 15 to 450 volts labelled from Slight Shock to Danger: Severe Shock and XXX. At 300 volts the learner pounded on the wall and stopped answering; after 315 he pounded again and went silent.',
'A rigged draw, a 30-switch generator and four standard prods.', H2.mil);

// 03 Milgram results and evaluation
F('03-milgram-results', 'Milgram (1963): results and evaluation', '', [
  (y) => {
    let s = T(30, y + 16, 'OUT OF 40 PARTICIPANTS', { size: 16, weight: 700, fill: C.tealDark });
    const icon = (x, yy, f) => `<circle cx="${x}" cy="${yy}" r="8" fill="${f}" stroke="${C.ink}" stroke-width="1.6"/><path d="M${x - 11},${yy + 26} Q${x - 11},${yy + 11} ${x},${yy + 11} Q${x + 11},${yy + 11} ${x + 11},${yy + 26} Z" fill="${f}" stroke="${C.ink}" stroke-width="1.6"/>`;
    for (let i = 0; i < 40; i++) { const r = Math.floor(i / 20), c = i % 20; s += icon(60 + c * 40, y + 44 + r * 46, i < 26 ? C.rust : C.mustard); }
    s += `<rect x="40" y="${y + 140}" width="16" height="16" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.6"/>` + T(64, y + 154, 'stopped between 300 and 450 V', { size: 16 });
    s += `<rect x="360" y="${y + 140}" width="16" height="16" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.6"/>` + T(384, y + 154, 'went to the maximum 450 V', { size: 16 });
    return { s, h: 160 };
  },
  (y) => hbars(y, [
    ['Reached 300 V', 40, C.mustard, '40 of 40 (all)'],
    ['Reached 450 V', 26, C.rust, '26 of 40 (65%)'],
    ['Predicted by students', 0.4, C.panelEdge, 'around 1%'],
  ], 40, { x0: 240, x1: 700, bh: 40, gap: 14 }),
  (y) => note(y, 'Conclusion', 'Ordinary people obey a legitimate authority to the point of apparently harming someone: the **situation** is more powerful than predicted from disposition alone.', { size: 16 }),
  (y) => evalGrid(y, [
    { k: 'S', title: 'Replicable; full picture', body: 'Standardised prods and scripted responses; quantitative voltage plus qualitative tension and interviews.' },
    { k: 'L', title: 'Sample; believability', body: 'American men only; some may have doubted the shocks were real.' },
    { k: 'ETHICS', title: 'Deception, distress, withdrawal', body: 'Sweating, trembling, three seizures; prods made withdrawal difficult.' },
    { k: 'DEFENCE', title: 'Debrief and follow-up', body: 'Reunion with the unharmed learner; most said they were glad to have taken part.' },
  ]),
],
'Forty participant icons, 26 coloured for those who went to 450 volts. Bars show all 40 reached 300 volts, 26 of 40 (65 percent) reached 450 volts, against a prediction by psychology students of around 1 percent. Conclusion: the situation produced obedience. Evaluation covers replicability, sample limits, ethics and Milgram\'s defence.',
'Every participant reached 300 volts and 65% went to 450, against a prediction of about 1%.', H2.mil);

// 04 Perry et al.
F('04-perry-oxytocin', 'Perry et al. (2015): oxytocin and personal space', 'Double-blind, placebo-controlled: oxytocin in one session, placebo in another', [
  (y) => row(y, [
    { kicker: 'EXPERIMENT 1', title: 'Comfortable Interpersonal Distance Scale (computerised)', body: 'Stand at the centre of a room; mark where an approaching figure becomes uncomfortable' },
    { kicker: 'EXPERIMENT 2', title: 'Pictures of rooms', body: 'Choose between rooms that place you at different distances from another person' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  (y) => {
    let s = panel(30, y, 840, 330);
    s += T(450, y + 34, 'Preferred distance from others. Illustrative pattern, not real data', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
    const ox = 210, oy = y + 270, W = 380, Hh = 190;
    s += `<line x1="${ox}" y1="${oy}" x2="${ox + W}" y2="${oy}" stroke="${C.ink}" stroke-width="3"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - Hh}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<text x="${ox - 22}" y="${oy - Hh / 2}" font-size="16" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${ox - 22} ${oy - Hh / 2})">distance →</text>`;
    const xa = ox + 80, xb = ox + W - 80;
    s += T(xa, oy + 28, 'Placebo', { size: 17, weight: 700, anchor: 'middle' }) + T(xb, oy + 28, 'Oxytocin', { size: 17, weight: 700, anchor: 'middle' });
    s += path(`M${xa},${oy - 95} L${xb},${oy - 40}`, { w: 5, stroke: C.tealDark }) + `<circle cx="${xa}" cy="${oy - 95}" r="8" fill="${C.tealDark}"/><circle cx="${xb}" cy="${oy - 40}" r="8" fill="${C.tealDark}"/>`;
    s += path(`M${xa},${oy - 105} L${xb},${oy - 165}`, { w: 5, stroke: C.rust, extra: 'stroke-dasharray="12 8"' }) + `<circle cx="${xa}" cy="${oy - 105}" r="8" fill="${C.rust}"/><circle cx="${xb}" cy="${oy - 165}" r="8" fill="${C.rust}"/>`;
    s += T(xb + 20, oy - 160, 'Low empathy:', { size: 17, weight: 700, fill: C.rust }) + T(xb + 20, oy - 138, 'further away', { size: 17, fill: C.rust });
    s += T(xb + 20, oy - 46, 'High empathy:', { size: 17, weight: 700, fill: C.tealDark }) + T(xb + 20, oy - 24, 'closer', { size: 17, fill: C.tealDark });
    return { s, h: 330 };
  },
  (y) => note(y, 'Conclusion', 'Oxytocin does not make everyone more sociable: its effect depends on **empathy**, an interaction of person and situation.', { size: 17 }),
  (y) => evalGrid(y, [
    { k: 'S', title: 'Controls and replication', body: 'Placebo and double-blind control expectations; two measures, same pattern.' },
    { k: 'L', title: 'Imagined distances', body: 'May not match real behaviour or crowded everyday settings.' },
  ]),
],
'Experiment 1 used a computerised Comfortable Interpersonal Distance Scale; Experiment 2 used pictures of rooms. An illustrative graph shows that under oxytocin, compared with placebo, high-empathy participants preferred to be closer and low-empathy participants preferred more distance. Conclusion: the effect depends on empathy.',
'Oxytocin moved high-empathy people closer and low-empathy people further away.', H2.per);

// 05 Piliavin procedure
F('05-piliavin-procedure', 'Piliavin et al. (1969): the procedure', 'A field experiment on a non-stop 7½-minute stretch of the New York subway', [
  (y) => {
    let s = '';
    const cx0 = 50, cw = 800, top = y + 20, ch = 220;
    s += `<rect x="${cx0}" y="${top}" width="${cw}" height="${ch}" rx="30" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>`;
    s += T(cx0 + cw - 24, top + ch - 18, 'Schematic: positions not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    s += `<circle cx="${cx0 + 40}" cy="${top + ch - 24}" r="10" fill="#eef1f0" stroke="${C.muted}" stroke-width="2"/>` + T(cx0 + 58, top + ch - 18, 'passengers', { size: 15, fill: C.muted });
    const person = (x, yy, f, l, sub) => `<circle cx="${x}" cy="${yy}" r="20" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x, yy + 44, l, { size: 16, weight: 700, anchor: 'middle' }) + (sub ? T(x, yy + 64, sub, { size: 15, anchor: 'middle', fill: C.muted }) : '');
    s += person(cx0 + 400, top + 100, C.rust, 'Victim', 'collapses after 70 s');
    s += person(cx0 + 590, top + 70, C.mustard, 'Model', 'helps at a set time');
    s += person(cx0 + 140, top + 80, C.teal, 'Observer 1', '') + person(cx0 + 730, top + 120, C.teal, 'Observer 2', '');
    [[cx0 + 250, top + 150], [cx0 + 300, top + 60], [cx0 + 680, top + 36], [cx0 + 480, top + 40], [cx0 + 520, top + 150]].forEach(([a, b]) => { s += `<circle cx="${a}" cy="${b}" r="12" fill="#eef1f0" stroke="${C.muted}" stroke-width="2"/>`; });
    return { s, h: ch + 20 };
  },
  (y) => row(y, [
    { kicker: 'CANE CONDITION', title: 'Appeared sober, carried a black cane', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DRUNK CONDITION', kfill: C.olive, title: 'Smelled of alcohol, bottle in a brown paper bag', fill: C.cream, edge: C.olive },
  ], { gap: 14, card: { size: 16, tsize: 18 } }),
  (y) => P('Weekdays 11 a.m. to 3 p.m.; about 4,450 passengers; 103 trials. Observers recorded race, sex and location of passengers, time to help and comments.', { anchor: 'middle', size: 16 })(y),
],
'A schematic subway carriage: the male victim collapses in the critical area 70 seconds after the train leaves, a male model helps at a set time if no one else does, and two female observers record passengers\' race, sex and location, time to help and comments. In the cane condition the victim appeared sober; in the drunk condition he smelled of alcohol and carried a bottle.',
'Four researchers per trial: victim, model and two observers.', H2.pil);

// 06 Piliavin results + model
F('06-piliavin-results-model', 'Piliavin et al. (1969): results and explanation', '', [
  (y) => {
    let s = T(30, y + 16, 'SPONTANEOUS HELP: TRIALS OUT OF THOSE RUN', { size: 16, weight: 700, fill: C.tealDark });
    const bar = (yy, l, n, d, f) => {
      const x0 = 190, W = 560, w = (W * n) / d;
      return T(x0 - 16, yy + 28, l, { size: 18, weight: 700, anchor: 'end' }) + `<rect x="${x0}" y="${yy}" width="${W}" height="42" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/><rect x="${x0}" y="${yy}" width="${w}" height="42" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + T(x0 + W + 12, yy + 28, `${n} of ${d}`, { size: 19, weight: 700 });
    };
    s += bar(y + 34, 'Cane', 62, 65, C.teal) + bar(y + 92, 'Drunk', 19, 38, C.mustard);
    s += T(190, y + 160, 'Each bar is the full number of trials for that condition', { size: 15, fill: C.muted });
    return { s, h: 166 };
  },
  (y) => chips(y, ['cane victim helped faster', 'most first helpers were men', 'slight same-race helping (mainly drunk)', 'larger groups did not help less'], { size: 16, fill: C.cream, edge: C.olive }),
  (y) => note(y, '', 'No **diffusion of responsibility** here: the victim was clearly visible and escape was impossible.', { align: 'middle', size: 17, fill: C.panel, edge: C.rust }),
  lab('AROUSAL: COST–REWARD MODEL'),
  (y) => row(y, [
    { title: 'See an emergency' },
    { title: 'Unpleasant arousal', fill: '#f6e3d8', edge: C.rust },
    { title: 'Reduce it by the response that costs least', body: 'help, leave, or decide help is not needed', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, fr: [1, 1, 1.6], card: { size: 16, tsize: 18, align: 'middle' } }),
  (y) => note(y, '', 'Helping a drunk costs more (disgust, possible harm) and not helping is less blameworthy.', { align: 'middle', size: 17 }),
  (y) => evalGrid(y, [
    { k: 'S', title: 'High ecological validity', body: 'Passengers did not know they were studied: no demand characteristics.' },
    { k: 'L', title: 'Ethics and unequal conditions', body: 'No consent, withdrawal or debrief; fewer drunk trials, one black victim.' },
  ]),
],
'Bars show spontaneous help on 62 of 65 cane trials and 19 of 38 drunk trials. Other findings: faster help for the cane victim, mostly male first helpers, slight same-race helping and no drop with larger groups, so no diffusion of responsibility. The arousal: cost-reward model runs from seeing an emergency to unpleasant arousal to the least costly response.',
'The cane victim was helped on 62 of 65 trials; helping a drunk seemed more costly.', H2.pil);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
