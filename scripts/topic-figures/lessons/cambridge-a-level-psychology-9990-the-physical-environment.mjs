import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-the-physical-environment';
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
  ext: '### Exterior design',
  north: '### Key study: North et al. (2003)',
  noise: '### Background noise and taste',
  pad: '### The PAD model',
  odour: '### Odour',
  crowd: '### Crowding',
  apply: '## Applying the topic',
};

// 01 Exterior design
F('01-exterior-design', 'Exterior store design', 'Three features named in the syllabus', [
  (y) => {
    let s = panel(30, y, 840, 250);
    const gy = y + 200;
    s += `<rect x="40" y="${gy}" width="820" height="40" fill="#d8e3c6"/>`;
    // building
    s += `<rect x="250" y="${y + 50}" width="400" height="150" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<rect x="250" y="${y + 50}" width="400" height="44" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + T(450, y + 80, 'SIGNAGE', { size: 18, weight: 700, anchor: 'middle' });
    s += `<rect x="275" y="${y + 112}" width="140" height="88" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/><rect x="485" y="${y + 112}" width="140" height="88" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += `<rect x="425" y="${y + 120}" width="50" height="80" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
    [300, 330, 360].forEach((x, i) => { s += `<rect x="${x}" y="${y + 160 - i * 12}" width="22" height="${40 + i * 12}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`; });
    // trees
    const tree = (x) => `<rect x="${x - 5}" y="${y + 160}" width="10" height="40" fill="${C.rockDark}"/><circle cx="${x}" cy="${y + 145}" r="30" fill="${C.grass}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += tree(150) + tree(750) + `<ellipse cx="200" cy="${gy + 4}" rx="40" ry="12" fill="${C.grass}"/><ellipse cx="700" cy="${gy + 4}" rx="40" ry="12" fill="${C.grass}"/>`;
    // labels
    s += T(450, y + 34, 'Storefront: entrance, signage, materials, colours, lighting', { size: 16, weight: 600, anchor: 'middle' });
    s += chip(345, gy + 4, 'Window display', { anchor: 'middle', size: 15, fill: C.cream, edge: C.olive }).s;
    s += chip(150, y + 60, 'Landscaping', { anchor: 'middle', size: 15, fill: C.panel, edge: C.grass }).s;
    return { s, h: 250 };
  },
  (y) => row(y, [
    { kicker: 'STOREFRONT', title: 'Signals the kind of shop and the prices to expect' },
    { kicker: 'WINDOW DISPLAYS', kfill: C.olive, title: 'Attract attention and invite people in', body: 'new stock, a season or a lifestyle', fill: C.cream, edge: C.olive },
    { kicker: 'LANDSCAPING', kfill: C.grass, title: 'Plants, trees and flower beds', body: 'a more pleasant, inviting exterior' },
  ], { gap: 12, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  (y) => row(y, [
    { title: 'Landscaping and window displays', body: 'Mower et al. (2012)', align: 'middle' },
    { title: 'More liking for the store', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    { title: 'Intention to visit', align: 'middle', fill: C.mustard, edge: C.ink },
  ], { arrows: true, card: { size: 16, tsize: 18 } }),
  (y) => P('Rating images is controlled and quantitative, but not the same as walking past a real shop; preferences may differ between cultures.', { anchor: 'middle', size: 16 })(y),
],
'A schematic shop front with signage and lighting, window displays and landscaping. Storefronts signal the type of shop and prices; window displays attract attention; landscaping makes the exterior inviting. Mower et al. (2012) linked landscaping and window displays to greater liking, which is linked to intentions to visit.',
'An attractive exterior increases liking, which links to intentions to shop.', H2.ext);

// 02 North et al.
F('02-north-restaurant-music', 'Key study: North et al. (2003)', 'Does background music style affect how much diners spend?', [
  (y) => row(y, [
    { kicker: 'EARLIER: ARENI AND KIM (1993)', title: 'Classical music in a wine shop', body: '→ more expensive wine chosen' },
    { kicker: 'EARLIER: NORTH ET AL. (1999)', title: 'French v German music in a supermarket', body: '→ wine from the matching country outsold the other' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4, fill: '#eef1f0' } }),
  (y) => P('Music seems to **prime** ideas linked to its style.', { anchor: 'middle', size: 17, fill: C.ink })(y),
  (y) => study(y, [
    ['Aim', 'To investigate whether the style of background music in a restaurant affects how much diners spend', 'a'],
    ['Method', ['Field experiment in a restaurant; different evenings', 'IV: **classical, pop or no music**', 'DV: spend per head from the bills: starters, mains, desserts, coffee, drinks, total']],
    ['Results', 'Spending per head was **highest with classical music**, compared with pop and no music', 'r'],
    ['Conclusion', 'Classical music may create a sophisticated, upmarket atmosphere that primes diners to spend more', 'c'],
  ], { size: 16 }),
  (y) => evalGrid(y, [
    { k: 'S', title: 'High ecological validity', body: 'Real diners, real money; unaware of the study.' },
    { k: 'L', title: 'No random allocation', body: 'Weather, day or type of customer could confound.' },
    { k: 'L', title: 'Generalisation', body: 'One restaurant, one country; classical music may mean different things in other cultures.' },
    { k: 'ETHICS', title: 'No consent', body: 'But spending data were anonymous and the music harmless.' },
  ]),
],
'Earlier studies found classical music led to dearer wine and national music boosted that country\'s wine, suggesting priming. Study card for North et al. (2003): on different evenings a restaurant played classical, pop or no music; spend per head was highest with classical music. Evaluation covers ecological validity, lack of random allocation, generalisation and consent.',
'Classical music evenings brought the highest spending per head.', H2.north);

// 03 Noise and taste
F('03-noise-and-taste', 'Background noise and taste', 'Woods et al. (2011): loud background noise', [
  (y) => row(y, [
    { kicker: 'RATED WEAKER', kfill: C.rust, title: 'Sweet ↓   Salty ↓', align: 'middle', fill: '#f6e3d8', edge: C.rust },
    { kicker: 'RATED STRONGER', title: 'Crunchiness ↑', align: 'middle', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, card: { size: 16, tsize: 24 } }),
  lab('WHY? THREE SUGGESTED REASONS'),
  (y) => row(y, [
    { kicker: 'ATTENTION', title: 'Noise draws attention away from taste', body: 'so flavour seems weaker' },
    { kicker: 'AROUSAL OR DISCOMFORT', title: 'Loud noise may change mood', body: 'food less enjoyable' },
    { kicker: 'MASKING AND ENHANCING', title: 'Changes the sounds of eating', body: 'which contribute to crunchiness' },
  ], { gap: 12, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  (y) => row(y, [
    { kicker: 'APPLICATION', title: 'Aircraft cabins, noisy restaurants', body: 'food may need stronger seasoning', fill: C.cream, edge: C.olive },
    { kicker: 'EVALUATION', title: 'Laboratory with headphones', body: 'well controlled but artificial' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
],
'Woods et al. (2011) found loud background noise lowered ratings of sweetness and saltiness but raised ratings of crunchiness. Three suggested reasons are attention drawn away from taste, arousal or discomfort, and masking or enhancing the sounds of eating. Food in aircraft and noisy restaurants may need stronger seasoning; the laboratory method was controlled but artificial.',
'Noise weakens sweet and salty tastes but makes food seem crunchier.', H2.noise);

// 04 PAD
F('04-pad-model', 'The PAD model', 'Mehrabian and Russell', [
  (y) => {
    let s = '';
    const st = card(30, y + 70, 220, { kicker: 'STIMULI', title: 'Music, light, scent, crowding', align: 'middle', tsize: 18, minH: 150, vcenter: true });
    s += st.s;
    const em = [['Pleasure', 'how happy or satisfied'], ['Arousal', 'how stimulated or alert'], ['Dominance', 'how in control']];
    em.forEach(([a, b], i) => { s += card(320, y + i * 100, 260, { title: a, body: b, align: 'middle', size: 16, tsize: 19, pad: 12, minH: 86, vcenter: true, fill: C.cream, edge: C.olive }).s; s += arrow(256, y + 145, 314, y + 43 + i * 100, { w: 3 }); });
    s += card(650, y + 20, 220, { kicker: 'APPROACH', title: 'Stay longer, explore, spend, return', align: 'middle', size: 16, tsize: 18, fill: C.tealLight, edge: C.tealDark, minH: 120, vcenter: true }).s;
    s += card(650, y + 160, 220, { kicker: 'AVOIDANCE', kfill: C.rust, title: 'Leave, do not return', align: 'middle', size: 16, tsize: 18, fill: '#f6e3d8', edge: C.rust, minH: 120, vcenter: true }).s;
    s += arrow(586, y + 143, 644, y + 80, { w: 3 }) + arrow(586, y + 143, 644, y + 220, { w: 3 });
    s += T(140, y + 50, 'environment', { size: 15, anchor: 'middle', fill: C.muted }) + T(450, y + 316, 'emotional states', { size: 15, anchor: 'middle', fill: C.muted }) + T(760, y + 300, 'behaviour', { size: 15, anchor: 'middle', fill: C.muted });
    return { s, h: 320 };
  },
  (y) => note(y, '', 'Pleasant, moderately arousing and in control → **approach**.', { align: 'middle', size: 18 }),
],
'Environmental stimuli such as music, light, scent and crowding produce three emotional states: pleasure, arousal and dominance. These lead to approach behaviours (staying longer, exploring, spending, returning) or avoidance (leaving, not returning). A pleasant, moderately arousing environment where shoppers feel in control encourages approach.',
'Stimuli shape pleasure, arousal and dominance, which drive approach or avoidance.', H2.pad);

// 05 Odour
F('05-odour', 'Odour: Chebat and Michon (2003)', 'A pleasant ambient scent in a shopping mall; questionnaires with shoppers', [
  (y) => row(y, [
    { title: 'Pleasant scent', align: 'middle', fill: C.cream, edge: C.olive },
    { title: 'Better perceptions', body: 'of the mall environment and of product quality', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    { title: 'Linked to spending', align: 'middle', fill: C.mustard, edge: C.ink },
  ], { arrows: true, card: { size: 16, tsize: 19 } }),
  (y) => evalGrid(y, [
    { k: 'S', title: 'Real mall', body: 'Ecological validity.' },
    { k: 'L', title: 'Subjective; people differ', body: 'Self-report; a scent can attract some shoppers and put off others.' },
  ]),
],
'A pleasant scent improved shoppers\' perceptions of the mall and of product quality, which were linked to spending. The real mall gives ecological validity, but questionnaires are subjective and people differ in which scents they like.',
'Scent works through perceptions of the mall and its products.', H2.odour);

// 06 Crowding
F('06-crowding', 'Crowding: Machleit et al. (2000)', 'Perceived crowding lowers shopping satisfaction', [
  (y) => {
    const box = (x, title, sub, kind) => {
      let s = panel(x, y, 405, 230) + T(x + 24, y + 36, title, { size: 19, weight: 700 }) + T(x + 24, y + 60, sub, { size: 16, fill: C.muted });
      const ix = x + 40, iy = y + 84, iw = 325, ih = 120;
      s += `<rect x="${ix}" y="${iy}" width="${iw}" height="${ih}" rx="6" fill="#eef1f0" stroke="${C.ink}" stroke-width="2.5"/>`;
      if (kind === 'h') { for (let i = 0; i < 26; i++) { const a = ix + 20 + ((i * 53) % 290), b = iy + 18 + ((i * 37) % 86); s += `<circle cx="${a}" cy="${b}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`; } }
      else { for (let r = 0; r < 3; r++) s += `<rect x="${ix + 10}" y="${iy + 10 + r * 38}" width="${iw - 20}" height="24" fill="${C.rock}" stroke="${C.ink}" stroke-width="1.5"/>`; s += `<circle cx="${ix + 160}" cy="${iy + 44}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`; }
      return s;
    };
    return { s: box(30, 'Human crowding', 'too many people', 'h') + box(465, 'Spatial crowding', 'too much merchandise or too little space', 's'), h: 230 };
  },
  (y) => row(y, [
    { title: 'Crowding', align: 'middle' },
    { title: 'Less dominance', body: 'shoppers feel less in control', align: 'middle', fill: '#f6e3d8', edge: C.rust },
    { title: 'Lower satisfaction', align: 'middle', fill: '#f6e3d8', edge: C.rust },
  ], { arrows: true, card: { size: 16, tsize: 19 } }),
  (y) => note(y, 'But it depends on expectations and tolerance', 'A crowded market may be expected and enjoyed; the same crowd in a quiet boutique feels unpleasant.', { size: 17 }),
],
'Two schematic shop interiors: human crowding with too many people, and spatial crowding with too much merchandise or too little space. Crowding reduces dominance, so shoppers feel less in control and less satisfied, but the effect depends on expectations: a crowded market can be enjoyed while the same crowd in a boutique feels unpleasant.',
'Crowding lowers dominance, but expectations decide how much it matters.', H2.crowd);

// 07 Applying: bookshop
F('07-bookshop-application', 'Applying the topic: a bookshop', 'Goal: customers browse for longer', [
  (y) => lrows(y, [
    { label: 'Freeform layout with seating', body: 'Freeform encourages **browsing** and exploration', lfill: C.cream },
    { label: 'Slow, quiet music', body: 'Pleasure with moderate arousal → **approach** behaviour (PAD)', lfill: C.cream },
    { label: 'Subtle pleasant scent', body: 'Adds **pleasure** → approach behaviour', lfill: C.cream },
    { label: 'Uncluttered aisles', body: 'Avoids **spatial crowding**, so shoppers keep a sense of **dominance**', lfill: C.cream },
  ], { lw: 280, size: 17, minH: 64 }),
  (y) => note(y, '', 'Each suggestion earns credit only when it is **linked to a concept**.', { align: 'middle', size: 17, fill: C.tealLight, edge: C.tealDark }),
],
'Four suggestions for a bookshop, each linked to a concept: a freeform layout with seating for browsing, slow quiet music for pleasure and moderate arousal leading to approach, a subtle pleasant scent, and uncluttered aisles to avoid spatial crowding and keep a sense of dominance.',
'Link each design choice to the concept that predicts it will work.', H2.apply);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
