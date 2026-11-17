import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-the-psychological-environment';
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
  way: '### Wayfinding in shopping malls',
  move: '### Shopper movement',
  menu: '### Features of menu design',
  pos: '### Item position: primacy and recency',
  hall: "### Hall's four zones and the functions of personal space",
  queue: '### Defending a place in a queue',
};

// 01 Wayfinding
F('01-wayfinding', 'Wayfinding in shopping malls', 'Where am I, where do I want to go, and how do I get there?', [
  (y) => grid(y, [
    { kicker: 'SIGNS', title: 'Directional signs at decision points', body: 'junctions, escalators; identification signs on shops', fill: C.tealLight, edge: C.tealDark },
    { kicker: '“YOU ARE HERE” MAPS', kfill: C.olive, title: 'At entrances and junctions, aligned', body: '“up” on the map means “straight ahead”', fill: C.cream, edge: C.olive },
    { kicker: 'LANDMARKS AND LAYOUT', title: 'A fountain or atrium; a simple layout', body: 'make a mental map easier to form' },
    { kicker: 'FAMILIARITY', title: 'Regular visitors rely less on signs' },
  ], 2, { gap: 14, vgap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  (y) => {
    let s = panel(30, y, 840, 220);
    const map = (x, aligned) => {
      let r = `<rect x="${x}" y="${y + 40}" width="160" height="120" rx="6" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
      r += `<line x1="${x + 80}" y1="${y + 150}" x2="${x + 80}" y2="${y + 60}" stroke="${C.panelEdge}" stroke-width="12"/>`;
      r += `<circle cx="${x + 80}" cy="${y + 130}" r="9" fill="${C.rust}"/>`;
      r += aligned ? arrow(x + 80, y + 118, x + 80, y + 70, { w: 3, color: C.rust, marker: 'ahR' }) : arrow(x + 70, y + 130, x + 26, y + 130, { w: 3, color: C.rust, marker: 'ahR' });
      return r;
    };
    s += map(70, true) + map(500, false);
    s += T(260, y + 70, 'Aligned:', { size: 17, weight: 700, fill: C.tealDark }) + para(260, y + 96, '“up” on the map = straight ahead for the viewer', 200, { size: 16 }).s;
    s += T(690, y + 70, 'Not aligned:', { size: 17, weight: 700, fill: C.rust }) + para(690, y + 96, '“up” on the map is not straight ahead', 160, { size: 16 }).s;
    s += T(450, y + 200, 'Schematic “you are here” maps; red dot = viewer, arrow = the way they face', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: 220 };
  },
  (y) => note(y, 'Dogu and Erkip (2000)', 'Surveyed mall shoppers about signs, maps and layout, and how familiarity made a difference. Quick and many shoppers, but subjective; one mall in one country.', { size: 16, fill: C.panel, edge: C.panelEdge }),
],
'Four factors help wayfinding: directional and identification signs, aligned "you are here" maps at entrances and junctions, landmarks and a simple layout, and familiarity. A schematic contrasts an aligned map, where up means straight ahead, with one that is not aligned. Dogu and Erkip (2000) surveyed shoppers in one mall.',
'Signs, aligned maps, landmarks and familiarity all help shoppers find their way.', H2.way);

// 02 Trip types
F('02-trip-types', 'Shopper movement: four types of trip', 'Plan views of a store. Schematic routes', [
  (y) => {
    let s = '';
    const W = 196, Hh = 170;
    const plan = (x, name, sub, route) => {
      let r = panel(x, y, W, 250) + T(x + W / 2, y + 30, name, { size: 19, weight: 700, anchor: 'middle' });
      const ix = x + 18, iy = y + 46, iw = W - 36, ih = 140;
      r += `<rect x="${ix}" y="${iy}" width="${iw}" height="${ih}" fill="#eef1f0" stroke="${C.ink}" stroke-width="2.5"/>`;
      for (let k = 0; k < 4; k++) r += `<rect x="${ix + 22 + k * 32}" y="${iy + 28}" width="14" height="84" fill="${C.rock}" stroke="${C.ink}" stroke-width="1.2"/>`;
      r += `<rect x="${ix + iw / 2 - 16}" y="${iy + ih - 3}" width="32" height="6" fill="${C.panel}"/>`;
      r += route(ix, iy, iw, ih);
      r += para(x + W / 2, y + 214, sub, W - 20, { size: 15, anchor: 'middle', fill: C.muted }).s;
      return r;
    };
    const P2 = (d) => path(d, { stroke: C.tealDark, w: 3.5, extra: 'marker-end="url(#ahT)"' });
    s += plan(30, 'Short', 'enter, one area, leave quickly', (ix, iy, iw, ih) => P2(`M${ix + iw / 2},${iy + ih - 4} L${ix + iw / 2},${iy + ih - 20} L${ix + 12},${iy + ih - 20} L${ix + 12},${iy + 70}`));
    s += plan(244, 'Round', 'around the outer edge', (ix, iy, iw, ih) => P2(`M${ix + iw / 2 - 6},${iy + ih - 4} L${ix + iw / 2 - 6},${iy + ih - 12} L${ix + 9},${iy + ih - 12} L${ix + 9},${iy + 12} L${iw + ix - 9},${iy + 12} L${iw + ix - 9},${iy + ih - 12} L${ix + iw / 2 + 14},${iy + ih - 12}`));
    s += plan(458, 'Central', 'through the central aisles', (ix, iy, iw, ih) => P2(`M${ix + iw / 2},${iy + ih - 4} L${ix + iw / 2},${iy + 14}`));
    s += plan(672, 'Wave', 'zig-zag up and down the aisles', (ix, iy, iw, ih) => P2(`M${ix + 12},${iy + ih - 12} L${ix + 12},${iy + 16} L${ix + 44},${iy + 16} L${ix + 44},${iy + ih - 18} L${ix + 76},${iy + ih - 18} L${ix + 76},${iy + 16} L${ix + 108},${iy + 16} L${ix + 108},${iy + ih - 18} L${ix + 140},${iy + ih - 18} L${ix + 140},${iy + 20}`));
    return { s, h: 250 };
  },
  lab('FIVE SPATIAL BEHAVIOUR PATTERNS (A DIFFERENT IDEA FROM TRIP TYPES)'),
  (y) => {
    const x0 = 60, x1 = 840; let s = `<line x1="${x0}" y1="${y + 50}" x2="${x1}" y2="${y + 50}" stroke="${C.ink}" stroke-width="3"/>`;
    const groups = [[160, ['specialist', 'native'], 'focused, efficient visits to particular sections', C.tealLight, C.tealDark], [450, ['tourist', 'explorer'], 'broad, leisurely or exploratory routes', C.cream, C.olive], [740, ['raider'], 'fast, targeted visits', '#f6e3d8', C.rust]];
    groups.forEach(([cx, names, sub, f, e]) => {
      const c = chips(y + 34, names, { x: cx - 150, w: 300, size: 16, fill: f, edge: e });
      s += c.s + para(cx, y + 104, sub, 250, { size: 15, anchor: 'middle', fill: C.muted }).s;
    });
    return { s, h: 140 };
  },
  (y) => note(y, 'Gil et al. (2009): CCTV tracking', 'Objective, reliable routes, not memories. But it shows **where**, not **why**; privacy if shoppers did not agree; five patterns is reductionist.', { size: 16, fill: C.panel, edge: C.panelEdge }),
],
'Four schematic store plans: a short trip enters, visits one area and leaves; a round trip follows the outer edge; a central trip goes through the central aisles; a wave trip zig-zags up and down the aisles. Five spatial behaviour patterns range from focused specialist and native visits, through broad tourist and explorer routes, to fast raider visits. Gil et al. (2009) tracked routes by CCTV.',
'Trip types describe routes; spatial patterns describe styles of shopping.', H2.move);

// 03 Menu design
F('03-menu-design', 'Menu design: Pavesic (2005)', 'Features with positive and negative effects', [
  (y) => {
    let s = '';
    const menu = (x, good) => {
      let r = `<rect x="${x}" y="${y}" width="300" height="300" rx="8" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>`;
      r += T(x + 150, y + 34, 'MENU', { size: 18, weight: 700, anchor: 'middle' });
      if (good) {
        r += T(x + 24, y + 70, 'Starters', { size: 16, weight: 700, fill: C.tealDark });
        r += `<rect x="${x + 20}" y="${y + 84}" width="260" height="62" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
        r += `<line x1="${x + 34}" y1="${y + 108}" x2="${x + 200}" y2="${y + 108}" stroke="${C.olive}" stroke-width="7" stroke-linecap="round"/><line x1="${x + 34}" y1="${y + 128}" x2="${x + 240}" y2="${y + 128}" stroke="${C.panelEdge}" stroke-width="5" stroke-linecap="round"/>`;
        [0, 1].forEach((k) => { r += `<line x1="${x + 24}" y1="${y + 170 + k * 26}" x2="${x + 220}" y2="${y + 170 + k * 26}" stroke="${C.panelEdge}" stroke-width="6" stroke-linecap="round"/>`; });
        r += T(x + 24, y + 238, 'Mains', { size: 16, weight: 700, fill: C.tealDark });
        r += `<line x1="${x + 24}" y1="${y + 260}" x2="${x + 200}" y2="${y + 260}" stroke="${C.panelEdge}" stroke-width="6" stroke-linecap="round"/>`;
      } else {
        for (let k = 0; k < 9; k++) {
          r += `<line x1="${x + 24}" y1="${y + 64 + k * 26}" x2="${x + 190 - (k % 3) * 20}" y2="${y + 64 + k * 26}" stroke="${C.panelEdge}" stroke-width="5" stroke-linecap="round"/>`;
          r += T(x + 276, y + 69 + k * 26, '0.00', { size: 15, anchor: 'end', fill: C.rust, weight: 700 });
        }
        r += `<rect x="${x + 232}" y="${y + 50}" width="54" height="236" rx="6" fill="none" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="7 5"/>`;
      }
      return r;
    };
    s += menu(60, true) + menu(540, false);
    s += T(210, y + 330, 'Positive', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(690, y + 330, 'Negative', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
    s += para(380, y + 100, 'Highlighted item', 140, { size: 16, weight: 700, fill: C.olive }).s + arrow(374, y + 108, 286, y + 112, { w: 3, color: C.olive, marker: 'ahO' });
    s += para(380, y + 210, 'Prices in a neat column', 140, { size: 16, weight: 700, fill: C.rust }).s + arrow(500, y + 200, 764, y + 176, { w: 3, color: C.rust, marker: 'ahR' });
    return { s, h: 340 };
  },
  (y) => row(y, [
    { kicker: 'POSITIVE', body: ['Boxes, graphics or extra space for items the restaurant most wants to sell', 'Clear categories', 'Appealing, accurate descriptions', 'A readable font'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'NEGATIVE', kfill: C.rust, body: ['Prices in a neat column: invites choosing by price', 'Too many items: slow, stressful choosing', 'Cluttered layouts'], bullets: true, fill: '#f6e3d8', edge: C.rust },
  ], { gap: 14, vcenter: false, card: { size: 16, gap: 4 } }),
  (y) => note(y, '', '**Eye-tracking** tests these ideas objectively: where diners look first, for how long and in what order.', { align: 'middle', size: 17 }),
],
'Two schematic menus: a positive one with clear categories and a boxed, highlighted item, and a negative one with prices in a neat column that invites comparing by price. Lists of positive features (highlighting, clear categories, accurate descriptions, readable font) and negative features (price column, too many items, clutter) follow; eye-tracking can test them objectively.',
'Highlight what you want to sell; do not line prices up for comparison.', H2.menu);

// 04 Primacy and recency on a menu
F('04-menu-position', 'Item position on a menu', 'Dayan and Bar-Hillel (2011)', [
  (y) => {
    let s = panel(170, y, 560, 330);
    s += T(450, y + 36, 'One menu category', { size: 18, weight: 700, anchor: 'middle' });
    const items = ['first item', 'middle item', 'middle item', 'middle item', 'last item'];
    items.forEach((l, i) => {
      const yy = y + 56 + i * 52, edge = i === 0 || i === 4;
      s += `<rect x="210" y="${yy}" width="480" height="42" rx="8" fill="${edge ? (i === 0 ? C.cream : C.tealLight) : C.panel}" stroke="${edge ? (i === 0 ? C.olive : C.tealDark) : C.panelEdge}" stroke-width="2.5"/>`;
      s += T(230, yy + 27, l, { size: 17, weight: edge ? 700 : 400, fill: edge ? C.ink : C.muted });
      if (edge) s += T(670, yy + 27, 'chosen more often', { size: 16, weight: 700, anchor: 'end', fill: i === 0 ? C.olive : C.tealDark });
    });
    s += T(155, y + 83, 'PRIMACY', { size: 17, weight: 700, fill: C.olive, anchor: 'end' }) + T(745, y + 291, 'RECENCY', { size: 17, weight: 700, fill: C.tealDark });
    return { s, h: 330 };
  },
  (y) => note(y, '', 'Fits primacy and recency from memory research: first and last items get **more attention** and are **better remembered**.', { align: 'middle', size: 17 }),
  (y) => P('Real orders give more ecological validity than a hypothetical menu, but also depend on price, hunger and recommendations.', { anchor: 'middle', size: 16 })(y),
],
'A menu category of five items: the first and last are chosen more often than the same items in the middle, matching primacy and recency effects in which first and last items get more attention and are better remembered.',
'Put the dishes you want to sell first or last in a category.', H2.pos);

// 05 Functions of personal space
F('05-personal-space-functions', 'Three functions of personal space', '', [
  (y) => row(y, [
    { kicker: 'OVERLOAD', title: 'Too much close stimulation is overwhelming', body: 'so we keep distance to reduce it', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'AROUSAL', kfill: C.olive, title: 'Closeness raises arousal', body: 'pleasant with a partner, unpleasant with strangers', fill: C.cream, edge: C.olive },
    { kicker: 'BEHAVIOUR CONSTRAINT', kfill: C.rust, title: 'Others too close limit our freedom', body: 'to talk privately or to move', fill: '#f6e3d8', edge: C.rust },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 5 } }),
  lab('APPLIED TO CLOSE RESTAURANT TABLES (ROBSON ET AL., 2011)'),
  (y) => row(y, [
    { title: 'Overheard conversations', body: '= overload', align: 'middle' },
    { title: 'Limits on what diners feel able to say', body: '= behaviour constraint', align: 'middle' },
    { title: 'Romantic scenario most affected', align: 'middle', fill: C.mustard, edge: C.ink },
  ], { arrows: true, fr: [1, 1.2, 1], card: { size: 16, tsize: 17 } }),
],
'Three functions of personal space: overload (keeping distance reduces overwhelming stimulation), arousal (closeness is pleasant with a partner, unpleasant with strangers) and behaviour constraint (others too close limit freedom to talk or move). Applied to close restaurant tables, overheard conversations and limits on what diners say explain why the romantic scenario was most affected.',
'Distance protects us from overload, unwanted arousal and constraint.', H2.hall);

// 06 Queue intrusion
F('06-queue-intrusion', 'Milgram et al. (1986): defending a queue', 'Confederates pushed into real queues in New York', [
  (y) => {
    let s = panel(30, y, 840, 250);
    const qy = y + 110;
    s += `<rect x="60" y="${qy - 50}" width="70" height="100" rx="8" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(95, qy + 76, 'counter', { size: 15, anchor: 'middle', fill: C.muted });
    const person = (x, f, e = C.ink, dash = '') => `<circle cx="${x}" cy="${qy}" r="18" fill="${f}" stroke="${e}" stroke-width="2.5"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
    const xs = [180, 240, 300, 360, 470, 530, 590, 650, 710, 770];
    xs.forEach((x, i) => { s += person(x, i < 4 ? '#eef1f0' : i < 6 ? '#f6e3d8' : C.panel, i < 4 ? C.muted : C.ink); });
    s += `<circle cx="415" cy="${qy - 56}" r="18" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>` + arrow(415, qy - 34, 415, qy - 6, { w: 3.5, color: C.rust, marker: 'ahR' });
    s += T(445, qy - 60, 'intruder: neutral comment, no justification', { size: 16, weight: 700, fill: C.rust });
    s += T(270, qy + 52, 'in front: object less', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
    s += T(500, qy + 52, 'directly behind: object most', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 });
    s += `<line x1="455" y1="${qy + 28}" x2="545" y2="${qy + 28}" stroke="${C.rust}" stroke-width="3"/>`;
    s += T(450, y + 232, 'Schematic queue', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: 250 };
  },
  (y) => grid(y, [
    { kicker: 'NUMBER OF INTRUSIONS', title: 'Two intruders → more objection than one', body: 'the cost of tolerating it rose' },
    { kicker: 'BUFFERS', title: 'Passive confederates behind the intrusion → objection fell', body: 'responsibility to object shifted to them', fill: C.cream, edge: C.olive },
    { kicker: 'SOCIAL STRUCTURE', title: 'A queue is a social system with shared rules', body: 'those who lost their place objected more' },
    { kicker: 'RESPONSES', title: 'Mostly verbal objections', body: 'also looks and gestures; physical action rare' },
  ], 2, { gap: 14, vgap: 14, vcenter: false, card: { size: 16, tsize: 17, gap: 4 } }),
  (y) => evalGrid(y, [
    { k: 'S', title: 'Real queues', body: 'High ecological validity; quantitative and qualitative data.' },
    { k: 'L', title: 'Ethics and culture', body: 'Deception, no consent, irritation; queuing norms vary.' },
  ]),
],
'A schematic queue: an intruder steps in with a brief neutral comment; people directly behind the intrusion point object most, those in front less. Two intruders caused more objection than one; passive buffers behind the intruder reduced objection; responses were mostly verbal, physical action rare. Real queues give ecological validity but raise ethical and cultural issues.',
'People who lost their place objected most; buffers took the pressure off.', H2.queue);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
