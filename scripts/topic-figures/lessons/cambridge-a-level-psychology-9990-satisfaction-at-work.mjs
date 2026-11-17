import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-satisfaction-at-work';
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
  herz: "## 4.5.1 Herzberg's two-factor theory",
  hack: "## 4.5.1 Hackman and Oldham's job characteristics theory",
  design: '## 4.5.1 Techniques of job design',
  meas: '## 4.5.2 Measuring job satisfaction',
  sab: '## 4.5.3 Workplace sabotage',
  blau: "## 4.5.3 Blau and Boal's model of absenteeism and commitment",
  ans: '## Annotated answer: a 4-mark application',
};

// 01 Herzberg two scales
F('01-herzberg-two-scales', 'Herzberg’s two-factor theory', 'Satisfaction and dissatisfaction are not opposite ends of one scale', [
  (y) => {
    const scale = (yy, kick, kf, title, items, left, right, fill, edge, lf, rf) => {
      const c = chips(yy + 80, items, { x: 54, w: 792, size: 16, align: 'start', fill: C.panel, edge: C.ink });
      const ly = yy + 80 + c.h + 40, H = ly - yy + 34;
      let s = panel(30, yy, 840, H, fill, edge) + T(54, yy + 36, kick, { size: 16, weight: 700, fill: kf }) + T(54, yy + 64, title, { size: 19, weight: 700 });
      s += c.s;
      s += `<line x1="200" y1="${ly}" x2="700" y2="${ly}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>`;
      s += chip(190, ly - 15, left, { anchor: 'end', size: 16, fill: lf, edge: C.ink }).s + chip(712, ly - 15, right, { size: 16, fill: rf, edge: C.ink }).s;
      return { s, H };
    };
    const A = scale(y, 'HYGIENE FACTORS: CONTEXT OF THE JOB', C.muted, 'Poor → dissatisfaction; good → only prevents it', ['pay', 'company policy', 'supervision', 'working conditions', 'relationships with colleagues', 'job security'], 'Dissatisfied', 'Not dissatisfied', '#eef1f0', C.panelEdge, '#f6e3d8', C.panel);
    const Bq = scale(y + A.H + 16, 'MOTIVATORS: CONTENT OF THE JOB', C.olive, 'Produce satisfaction and motivation', ['achievement', 'recognition', 'the work itself', 'responsibility', 'advancement'], 'Not satisfied', 'Satisfied', C.cream, C.olive, C.panel, C.teal);
    return { s: A.s + Bq.s, h: A.H + 16 + Bq.H };
  },
  (y) => note(y, 'Application', 'A pay rise may stop complaints but will not make a dull job satisfying; adding responsibility might.', { size: 17, fill: C.tealLight, edge: C.tealDark }),
  (y) => evalGrid(y, [
    { k: 'L', title: 'Biased method', body: 'People credit themselves for good events and blame others for bad ones, which alone gives the pattern.' },
    { k: 'L', title: 'Narrow sample', body: 'Professional men in one region; pay can motivate some workers.' },
  ]),
],
'Two separate scales. Hygiene factors (pay, company policy, supervision, working conditions, relationships, security) move a worker between dissatisfied and not dissatisfied. Motivators (achievement, recognition, the work itself, responsibility, advancement) move a worker from not satisfied to satisfied. Limitations are a self-serving bias in the method and a narrow sample.',
'Hygiene factors only remove dissatisfaction; motivators create satisfaction.', H2.herz);

// 02 Job characteristics model
F('02-job-characteristics', 'Hackman and Oldham’s job characteristics theory', 'Five core characteristics, three critical psychological states', [
  (y) => {
    let s = '';
    const cw = 270, sx = 360, sw = 260, ox = 680, ow = 190, RH = 80;
    const chars = [['Skill variety', 'range of skills'], ['Task identity', 'a whole piece of work'], ['Task significance', 'affects other people'], ['Autonomy', 'freedom to plan and decide'], ['Feedback', 'clear information on performance']];
    const ys = chars.map((_, i) => y + 30 + i * (RH + 12));
    chars.forEach(([a, b], i) => { s += card(30, ys[i], cw, { title: a, body: b, size: 15, tsize: 18, pad: 12, minH: RH, vcenter: true, fill: i < 3 ? C.panel : i === 3 ? C.cream : C.tealLight, edge: i < 3 ? C.panelEdge : i === 3 ? C.olive : C.tealDark }).s; });
    const st = [[ys[0], ys[2] + RH, 'Experienced meaningfulness', C.panel, C.panelEdge], [ys[3], ys[3] + RH, 'Experienced responsibility for outcomes', C.cream, C.olive], [ys[4], ys[4] + RH, 'Knowledge of results', C.tealLight, C.tealDark]];
    st.forEach(([a, b, l, f, e], i) => {
      s += card(sx, a, sw, { title: l, align: 'middle', tsize: 17, pad: 14, minH: b - a, vcenter: true, fill: f, edge: e }).s;
    });
    chars.forEach((_, i) => { const ty = ys[i] + RH / 2; s += arrow(30 + cw + 4, ty, sx - 6, i < 3 ? (ys[0] + ys[2] + RH) / 2 + (i - 1) * 50 : ty, { w: 3 }); });
    const oy = ys[0], oh = ys[4] + RH - ys[0];
    s += card(ox, oy, ow, { title: 'Outcomes', body: ['High internal motivation', 'Satisfaction', 'Quality of work'], bullets: true, size: 16, tsize: 19, minH: oh, vcenter: true, fill: C.mustard, edge: C.ink, bfill: C.ink }).s;
    st.forEach(([a, b]) => { s += arrow(sx + sw + 4, (a + b) / 2, ox - 6, (a + b) / 2, { w: 3 }); });
    s += T(155, y + 16, 'CORE CHARACTERISTICS', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(sx + sw / 2, y + 16, 'PSYCHOLOGICAL STATES', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(ox + ow / 2, y + 16, 'OUTCOMES', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    return { s, h: ys[4] + RH - y };
  },
  (y) => evalGrid(y, [
    { k: 'S', title: 'Specific and testable', body: 'Guides practical redesign of jobs.' },
    { k: 'L', title: 'Self-rated characteristics', body: 'Satisfied workers may rate their jobs more positively; people differ in how much growth they want.' },
  ]),
],
'Skill variety, task identity and task significance lead to experienced meaningfulness; autonomy leads to experienced responsibility for outcomes; feedback leads to knowledge of results. The three states lead to high internal motivation, satisfaction and quality of work. The model is testable but relies on job holders rating their own jobs.',
'Five job characteristics work through three psychological states.', H2.hack);

// 03 MPS
F('03-motivating-potential-score', 'Motivating potential score (MPS)', '', [
  (y) => {
    let s = panel(30, y, 840, 200);
    const add3 = card(60, y + 40, 330, { title: 'Skill variety + Task identity + Task significance', align: 'middle', tsize: 18, minH: 90, vcenter: true, fill: C.panel });
    s += add3.s + `<line x1="70" y1="${y + 150}" x2="380" y2="${y + 150}" stroke="${C.ink}" stroke-width="3"/>` + T(225, y + 180, '3', { size: 20, weight: 700, anchor: 'middle' });
    s += T(420, y + 95, '×', { size: 34, weight: 700, anchor: 'middle' });
    s += card(450, y + 50, 160, { title: 'Autonomy', align: 'middle', tsize: 19, minH: 70, vcenter: true, fill: C.cream, edge: C.olive }).s;
    s += T(640, y + 95, '×', { size: 34, weight: 700, anchor: 'middle' });
    s += card(670, y + 50, 170, { title: 'Feedback', align: 'middle', tsize: 19, minH: 70, vcenter: true, fill: C.tealLight, edge: C.tealDark }).s;
    s += T(225, y + 28, 'average of the three', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
    return { s, h: 200 };
  },
  (y) => row(y, [
    { kicker: 'VARIED JOB, SOME AUTONOMY AND FEEDBACK', title: 'Motivating potential above zero', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'VARIED JOB, NO AUTONOMY OR NO FEEDBACK', kfill: C.rust, title: 'Motivating potential = 0', fill: '#f6e3d8', edge: C.rust },
  ], { gap: 14, card: { size: 16, tsize: 19 } }),
  (y) => note(y, '', 'Autonomy and feedback **multiply**: a zero for either gives zero, however varied the job.', { align: 'middle', size: 17 }),
],
'The motivating potential score is the average of skill variety, task identity and task significance, multiplied by autonomy and by feedback. A varied job with no autonomy or no feedback has a motivating potential of zero.',
'Autonomy and feedback multiply, so either at zero gives a score of zero.', H2.hack);

// 04 Job design
F('04-job-design', 'Three techniques of job design', '', [
  (y) => {
    let s = '';
    const box = (x, yy, w, l, f = C.panel, e = C.panelEdge) => `<rect x="${x}" y="${yy}" width="${w}" height="40" rx="8" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(x + w / 2, yy + 26, l, { size: 15, weight: 600, anchor: 'middle' });
    // enrichment
    const col = (x, kick, kf, title) => panel(x, y, 268, 250) + T(x + 134, y + 34, kick, { size: 16, weight: 700, anchor: 'middle', fill: kf }) + T(x + 134, y + 60, title, { size: 16, anchor: 'middle', fill: C.muted });
    s += col(30, 'ENRICHMENT', C.olive, 'vertical loading');
    s += box(84, y + 180, 160, 'current job') + box(84, y + 130, 160, 'plan', C.cream, C.olive) + box(84, y + 80, 160, 'decide', C.cream, C.olive);
    s += arrow(264, y + 210, 264, y + 92, { w: 3.5, color: C.olive, marker: 'ahO' });
    s += col(316, 'ENLARGEMENT', C.tealDark, 'horizontal loading');
    s += box(334, y + 130, 74, 'task', C.panel) + box(412, y + 130, 74, 'task', C.tealLight, C.tealDark) + box(490, y + 130, 74, 'task', C.tealLight, C.tealDark);
    s += arrow(340, y + 205, 560, y + 205, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + T(450, y + 236, 'more tasks, same level', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
    s += col(602, 'ROTATION', C.blue, 'moving at intervals');
    const cx = 736, cy = y + 165, R = 52;
    s += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${C.blue}" stroke-width="3" stroke-dasharray="6 6"/>`;
    [['job A', -90], ['job B', 30], ['job C', 150]].forEach(([l, a]) => { const r = (a * Math.PI) / 180; s += chip(cx + R * Math.cos(r), cy + R * Math.sin(r) - 15, l, { anchor: 'middle', size: 15, fill: C.panel, edge: C.blue }).s; });
    return { s, h: 250 };
  },
  (y) => table(y, [{ w: 1, head: 'Technique' }, { w: 1.3, head: 'What changes' }, { w: 1.8, head: 'Example' }], [
    ['Enrichment', 'More responsibility, control and decision-making', 'A cleaner plans their own rota and orders supplies'],
    ['Enlargement', 'More tasks at the same level', 'A packer also labels and checks boxes'],
    ['Rotation', 'Moving between jobs at intervals', 'A shop assistant moves between till, stockroom and customer service'],
  ], { size: 16 }),
  (y) => row(y, [
    { body: 'Enrichment links to Herzberg’s **motivators** and to **autonomy** in Hackman and Oldham.', fill: C.cream, edge: C.olive },
    { body: 'Enlargement and rotation add variety; critics call enlargement “**more of the same**”.' },
  ], { gap: 14, card: { size: 16, bfill: C.ink } }),
],
'Enrichment loads a job vertically with planning and decisions, enlargement loads it horizontally with more tasks at the same level, and rotation moves a worker between jobs at intervals. A table gives examples: a cleaner planning the rota, a packer also labelling, a shop assistant moving between till, stockroom and customer service.',
'Enrichment adds responsibility; enlargement adds tasks; rotation adds movement.', H2.design);

// 05 JDI and QWL
F('05-jdi-and-qwl', 'Measuring job satisfaction', 'The job descriptive index and quality of working life', [
  (y) => {
    let s = panel(30, y, 840, 200, C.tealLight, C.tealDark) + T(54, y + 36, 'JOB DESCRIPTIVE INDEX (JDI): FIVE FACETS', { size: 16, weight: 700, fill: C.tealDark });
    s += chips(y + 52, ['work itself', 'pay', 'opportunities for promotion', 'supervision', 'co-workers'], { x: 54, w: 792, size: 16, align: 'start', fill: C.panel, edge: C.tealDark }).s;
    s += T(54, y + 124, 'Work itself:', { size: 17, weight: 700 }) + T(170, y + 124, '“routine”', { size: 17, italic: true }) + T(270, y + 124, '“fascinating”', { size: 17, italic: true });
    ['yes', 'no', '?'].forEach((l, i) => { s += chip(420 + i * 80, y + 103, l, { size: 16, fill: C.panel, edge: C.ink }).s; });
    s += T(660, y + 124, '? = cannot decide', { size: 15, fill: C.muted });
    s += para(54, y + 168, 'Quick, standardised, gives a **profile across facets**; self-report, so anonymity improves validity.', 792, { size: 16 }).s;
    return { s, h: 200 };
  },
  lab('WALTON’S QUALITY OF WORKING LIFE: EIGHT CONDITIONS'),
  (y) => grid(y, [
    { kicker: '1', title: 'Fair compensation' }, { kicker: '2', title: 'Safe, healthy conditions' }, { kicker: '3', title: 'Use and develop capacities' }, { kicker: '4', title: 'Growth and security' },
    { kicker: '5', title: 'Social integration' }, { kicker: '6', title: 'Constitutionalism: rights' }, { kicker: '7', title: 'Work and total life space', fill: C.cream, edge: C.olive }, { kicker: '8', title: 'Social relevance', fill: C.cream, edge: C.olive },
  ], 4, { gap: 12, vgap: 12, card: { size: 15, tsize: 17, align: 'middle', pad: 14 } }),
  (y) => note(y, '', 'A **QWL evaluation scale** rates how far each condition is met. QWL is broader than the JDI: it includes work–life balance (7) and social responsibility (8).', { size: 17, align: 'middle' }),
],
'The JDI measures five facets (work itself, pay, promotion opportunities, supervision, co-workers), with workers answering yes, no or ? to adjectives such as routine or fascinating. Walton\'s quality of working life lists eight conditions, rated on a QWL evaluation scale; it is broader than the JDI because it includes work-life balance and social relevance.',
'The JDI profiles five facets; QWL takes a broader view of working life.', H2.meas);

// 06 Giacalone and Rosenfeld
F('06-giacalone-rosenfeld', 'Key study: Giacalone and Rosenfeld (1987)', 'How do employees justify sabotage?', [
  (y) => study(y, [
    ['Aim', 'To investigate which reasons employees see as justifying sabotage, and which methods they see as justifiable', 'a'],
    ['Sample', 'Unionised factory workers'],
    ['Method', ['Questionnaire: rate how far a range of reasons would justify sabotage', 'Rate four methods: **slowdowns, destructiveness, dishonesty, causing chaos**']],
    ['Results', ['Accepting a wider range of reasons → more ready to justify every form of sabotage', 'Except **dishonesty**, which received little justification from anyone'], 'r'],
    ['Conclusion', 'Sabotage is often explained as a reasoned response to the situation: a sign of grievances management should address', 'c'],
  ], { size: 16 }),
  lab('EVALUATION'),
  (y) => evalGrid(y, [
    { k: 'L', title: 'Attitudes, not behaviour', body: 'Self-report about sabotage may not predict actual sabotage.' },
    { k: 'L', title: 'One workplace', body: 'One unionised workplace limits generalisation.' },
    { k: 'S', title: 'Less social desirability', body: 'Asking about justification, not personal sabotage.' },
    { k: 'SITUATIONAL', title: 'Links to situational explanations', body: 'Sabotage as a response to the work situation.' },
  ]),
],
'Study card for Giacalone and Rosenfeld (1987): unionised factory workers rated reasons that might justify sabotage and four methods (slowdowns, destructiveness, dishonesty, causing chaos). Those accepting more reasons justified every method except dishonesty. Conclusion: sabotage signals grievances. Evaluation covers attitudes versus behaviour, one workplace, reduced social desirability and situational explanations.',
'Workers who accepted more reasons justified more sabotage, except dishonesty.', H2.sab);

// 07 Blau and Boal
F('07-blau-boal', 'Blau and Boal: absence and commitment', 'Job involvement × organisational commitment', [
  (y) => {
    let s = '';
    const gx = 250, gy = y + 34, cw = 305, ch = 140;
    const cells = [
      [0, 0, 'Institutionalised stars', 'absent least, mainly involuntary (illness)', C.tealLight, C.tealDark],
      [1, 0, 'Lone wolves', 'identify with the job, not the organisation', C.panel, C.panelEdge],
      [0, 1, 'Corporate citizens', 'identify with the organisation, not the job', C.panel, C.panelEdge],
      [1, 1, 'Apathetic employees', 'absent most, often voluntary (by choice)', '#f6e3d8', C.rust],
    ];
    cells.forEach(([cx, cy, a, b, f, e]) => { s += card(gx + cx * (cw + 10), gy + cy * (ch + 10), cw, { title: a, body: b, align: 'middle', size: 16, tsize: 19, minH: ch, vcenter: true, fill: f, edge: e }).s; });
    s += T(gx + cw / 2, gy - 16, 'High commitment', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(gx + cw * 1.5 + 10, gy - 16, 'Low commitment', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
    s += T(gx - 20, gy + ch / 2 + 6, 'High involvement', { size: 17, weight: 700, anchor: 'end', fill: C.tealDark }) + T(gx - 20, gy + ch * 1.5 + 16, 'Low involvement', { size: 17, weight: 700, anchor: 'end', fill: C.rust });
    return { s, h: 2 * ch + 10 + 34 };
  },
  (y) => row(y, [
    { body: '**Job involvement**: how much a person identifies with their job', fill: '#eef1f0' },
    { body: '**Organisational commitment**: how much they identify with the organisation', fill: '#eef1f0' },
  ], { gap: 14, card: { size: 16, bfill: C.ink, pad: 14 } }),
  (y) => row(y, [
    { kicker: 'INVOLUNTARY ABSENCE', title: 'e.g. genuine illness', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'VOLUNTARY ABSENCE', kfill: C.rust, title: 'Choosing not to attend', fill: '#f6e3d8', edge: C.rust },
  ], { gap: 14, card: { size: 16, tsize: 18, align: 'middle' } }),
  (y) => note(y, '', 'The category predicts **how much** absence occurs and **why**.', { align: 'middle', size: 17 }),
],
'A two-by-two grid of job involvement against organisational commitment: institutionalised stars (high, high) are absent least and mainly involuntarily; lone wolves have high involvement and low commitment; corporate citizens have low involvement and high commitment; apathetic employees (low, low) are absent most, often voluntarily.',
'Low involvement and low commitment predict the most, and most voluntary, absence.', H2.blau);

// 08 Annotated answer
F('08-application-answer', 'A 4-mark application answer', 'Call centre: repetitive work, staff never see results', [
  (y) => {
    const r1 = row(y, [
      { kicker: 'CHANGE 1 (1 MARK)', title: 'Handle each customer’s problem start to finish', fill: C.panel },
      { kicker: 'LINK TO THEORY (1 MARK)', title: 'More task identity → experienced meaningfulness', fill: C.cream, edge: C.olive },
    ], { arrows: true, card: { size: 16, tsize: 18 } });
    const r2 = row(y + r1.h + 16, [
      { kicker: 'CHANGE 2 (1 MARK)', title: 'Weekly reports of customers helped and satisfaction ratings', fill: C.panel },
      { kicker: 'LINK TO THEORY (1 MARK)', title: 'Feedback → knowledge of results → satisfaction and motivation', fill: C.cream, edge: C.olive },
    ], { arrows: true, card: { size: 16, tsize: 18 } });
    return { s: r1.s + r2.s, h: r1.h + 16 + r2.h };
  },
  (y) => note(y, '', 'Each change earns a mark; naming the characteristic and its psychological state earns the second.', { align: 'middle', size: 17, fill: C.tealLight, edge: C.tealDark }),
],
'Two rows: increasing task identity by handling each problem start to finish, linked to experienced meaningfulness; and giving weekly feedback reports, linked to knowledge of results and so to satisfaction and motivation. Each change and each theory link earns one mark.',
'Change, then link it to the characteristic and the psychological state.', H2.ans);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
