// Topic figures for aqa-gcse-world-history-8145-western-front-stalemate
import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

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

// Timeline helper: vertical, years on the left
function vtimeline(y, items, o = {}) {
  const LX = o.lx ?? 150, W = 870 - LX - 40, sz = o.size ?? 16, ts = o.tsize ?? 18;
  let s = '', cy = y;
  const mk = (it, yy) => card(LX + 40, yy, W, { title: it.title, body: it.body, size: sz, tsize: ts, pad: 13, fill: it.fill, edge: it.edge, tgap: 3 });
  const total = items.map((it) => mk(it, 0)).reduce((a, c) => a + c.h + 10, -10);
  s += `<line x1="${LX}" y1="${y + 8}" x2="${LX}" y2="${y + total - 8}" stroke="${C.ink}" stroke-width="4"/>`;
  items.forEach((it) => {
    const c = mk(it, cy);
    s += c.s + `<circle cx="${LX}" cy="${cy + c.h / 2}" r="${it.d ? 10 : 6}" fill="${it.dot || (it.d ? C.mustard : C.panel)}" stroke="${C.ink}" stroke-width="3"/>`;
    if (it.d) s += para(LX - 20, cy + c.h / 2 + 6 - (tw(it.d, 17, 700) > LX - 50 ? 10 : 0), it.d, LX - 40, { size: 17, weight: 700, anchor: 'end', fill: C.ink, lh: 20 }).s;
    cy += c.h + 10;
  });
  return { s, h: total };
}
// Horizontal arrow chain of cards (wraps to rows of `per`), returns {s,h}
function chain(y, items, o = {}) { return row(y, items, { arrows: true, ...o }); }
// Section label
const LBL = (s, o = {}) => (y) => ({ s: T(o.x ?? 30, y + 14, s, { size: 15, weight: 700, fill: o.fill || C.muted, anchor: o.anchor || 'start' }), h: 16 });
// Spectrum: horizontal axis with labelled positions. items [{pos 0..1, title, body, fill}], ends [left,right]
function spectrum(y, ends, items, o = {}) {
  const x0 = 60, x1 = 840, ay = y + 40;
  let s = `<line x1="${x0}" y1="${ay}" x2="${x1}" y2="${ay}" stroke="${C.ink}" stroke-width="4" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  s += T(x0 - 10, y + 12, ends[0], { size: 17, weight: 700, fill: C.tealDark }) + T(x1 + 10, y + 12, ends[1], { size: 17, weight: 700, anchor: 'end', fill: C.rust });
  const cw = o.cw ?? 250; let maxH = 0; const cards = [];
  items.forEach((it, i) => {
    const px = x0 + it.pos * (x1 - x0);
    const cx = Math.min(Math.max(px - cw / 2, 30), 870 - cw);
    const c = card(cx, ay + 40 + (it.lane || 0) * (o.laneH ?? 0), cw, { title: it.title, body: it.body, size: 16, tsize: 18, pad: 14, fill: it.fill || C.panel, edge: it.edge || C.panelEdge, align: 'middle' });
    cards.push(c); maxH = Math.max(maxH, (it.lane || 0) * (o.laneH ?? 0) + c.h);
    s += `<line x1="${px}" y1="${ay}" x2="${px}" y2="${ay + 40 + (it.lane || 0) * (o.laneH ?? 0)}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="5 5"/>` + `<circle cx="${px}" cy="${ay}" r="10" fill="${it.dot || C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += c.s;
  });
  return { s, h: 80 + maxH };
}
// ---- end of local helpers ----

export const slug = 'aqa-gcse-world-history-8145-western-front-stalemate';
const H = {
  sp: '## The Schlieffen Plan',
  tr: '## Trench warfare, tactics and technology',
  ver: '## Verdun, February-December 1916',
  som: '## The Somme, July-November 1916',
  pas: '## Passchendaele, July-November 1917',
  we: '## Worked example: question 3 account',
};

// 01 Schlieffen Plan schematic
{
  const blocks = [(y) => {
    const o = y;
    const box = (x, yy, w, h, fill) => `<rect x="${x}" y="${yy + o}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
    let s = panel(30, y, 840, 420);
    s += box(60, 130, 480, 270, C.tealLight) + box(300, 30, 240, 82, C.cream) + box(570, 30, 170, 370, C.sand) + box(770, 30, 80, 370, C.panel);
    s += T(80, o + 164, 'FRANCE', { size: 20, weight: 700 }) + T(320, o + 62, 'BELGIUM', { size: 20, weight: 700 }) + T(320, o + 86, 'neutral', { size: 16, fill: C.muted }) + T(655, o + 64, 'GERMANY', { size: 20, weight: 700, anchor: 'middle' });
    s += `<text transform="translate(817,${o + 215}) rotate(-90)" text-anchor="middle" font-size="20" font-weight="700" fill="${C.ink}">RUSSIA</text>`;
    s += `<circle cx="250" cy="${o + 275}" r="11" fill="${C.ink}"/>` + T(250, o + 308, 'Paris', { size: 18, weight: 700, anchor: 'middle' });
    for (let i = 0; i < 4; i++) s += `<rect x="512" y="${o + 175 + i * 45}" width="14" height="14" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
    s += T(500, o + 385, 'border forts (avoided)', { size: 16, anchor: 'end', fill: C.muted });
    s += path(`M660,${o + 100} L470,${o + 100} C250,${o + 100} 120,${o + 180} 130,${o + 280} C140,${o + 370} 290,${o + 370} 360,${o + 300}`, { stroke: C.rust, w: 7, extra: 'marker-end="url(#ahR)"' });
    s += arrow(700, o + 300, 795, o + 300, { w: 4, dash: '9 7' }) + T(655, o + 350, 'then turn', { size: 16, weight: 600, anchor: 'middle' }) + T(655, o + 370, 'east', { size: 16, weight: 600, anchor: 'middle' });
    s += `<line x1="40" y1="${y + 448}" x2="100" y2="${y + 448}" stroke="${C.rust}" stroke-width="7" marker-end="url(#ahR)"/>` + T(112, y + 454, 'main German force: through Belgium, round Paris', { size: 17, weight: 600 });
    s += T(870, y + 454, 'Schematic, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: 462 };
  },
  LBL('THE TWO ASSUMPTIONS (1905)'),
  (y) => {
    let s = '';
    s += `<rect x="230" y="${y}" width="560" height="40" rx="8" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>` + T(30, y + 27, 'Russia', { size: 17, weight: 700 }) + T(510, y + 27, 'mobilises: about six weeks (vast size, poor railways)', { size: 16, anchor: 'middle' });
    s += `<rect x="230" y="${y + 52}" width="560" height="40" rx="8" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + T(30, y + 79, 'France', { size: 17, weight: 700 }) + T(510, y + 79, 'defeated in that time', { size: 16, anchor: 'middle' });
    return { s, h: 92 };
  }];
  F('01-schlieffen-plan', 'The Schlieffen Plan', 'Avoiding a war on two fronts', blocks,
    'Schematic, not to scale: the main German force sweeps from Germany through neutral Belgium, avoiding the French border forts, and swings round Paris before turning east to face Russia. Two bars show the assumptions: Russia would take about six weeks to mobilise and France could be beaten in that time.',
    'Beat France in six weeks through Belgium, then turn to face Russia.', H.sp, { gap: 16 });
}

// 02 Why the plan failed and stalemate followed
F('02-plan-fails-stalemate', 'From the failed plan to stalemate', '1914', [
  (y) => grid(y, [
    { title: 'Belgian resistance', body: 'At Liège and elsewhere: delay.' },
    { title: 'The BEF at Mons', body: '23 August 1914. Britain had guaranteed Belgian neutrality in 1839.' },
    { title: 'Russia mobilised faster', body: 'Troops moved east (Tannenberg); the western sweep weakened.' },
    { title: 'Moltke\'s changes', body: 'Left wing strengthened at the expense of the right.' },
  ], 4, { card: { size: 16, tsize: 18, pad: 15 } }),
  (y) => ({ s: arrow(450, y - 6, 450, y + 30, { w: 3.5 }), h: 26 }),
  (y) => steps(y, [
    { title: 'Battle of the Marne, September 1914', body: 'Germans swing east of Paris; French and British counter-attack into the gap between two German armies. Germans retreat to the River Aisne and dig in.', fill: C.cream },
    { title: 'The race to the sea', body: 'Each side tries to outflank the other to the north; First Battle of Ypres.' },
    { title: 'End of 1914: a line of trenches', body: 'From the Channel coast to the Swiss border. Neither side could go round, only try to break through.' },
  ], { highlight: 0, size: 16, tsize: 19 }),
], 'Four reasons the Schlieffen Plan failed (Belgian resistance, the BEF at Mons, faster Russian mobilisation and Moltke\'s changes) lead to the Battle of the Marne in September 1914, the race to the sea, and a line of trenches from the Channel to Switzerland by the end of 1914.',
'Trenches were the result of the plan\'s failure, not its cause.', H.sp, { gap: 14 });

// 03 Trench system (plan view schematic)
{
  const blocks = [(y) => {
    let s = panel(30, y, 840, 450);
    const zig = (yy, amp = 14) => { let d = `M60,${yy}`; for (let x = 60; x < 640; x += 60) d += ` L${x + 30},${yy + amp} L${x + 60},${yy}`; return d; };
    const trench = (yy, lab, col) => path(zig(yy), { stroke: C.rockDark, w: 14 }) + path(zig(yy), { stroke: col, w: 8 }) + T(675, yy + 13, lab, { size: 17, weight: 700 });
    // no man's land band
    s += `<rect x="32" y="${y + 2}" width="836" height="120" fill="${C.cream}"/>` + T(60, y + 36, 'NO MAN\'S LAND', { size: 18, weight: 700, fill: C.olive }) + T(60, y + 58, 'protected by barbed wire', { size: 16, fill: C.olive });
    let wire = ''; for (let x = 70; x < 830; x += 22) wire += `<path d="M${x},${y + 98} l11,-12 l11,12" fill="none" stroke="${C.ink}" stroke-width="2"/>`;
    s += wire;
    s += T(850, y + 36, '↑ towards enemy lines', { size: 16, anchor: 'end', fill: C.muted });
    s += trench(y + 160, 'Front-line trench', C.sand) + trench(y + 270, 'Support trench', C.sand) + trench(y + 380, 'Reserve trench', C.sand);
    [200, 470].forEach((x) => { s += path(`M${x},${y + 168} L${x + 20},${y + 215} L${x},${y + 245} L${x + 20},${y + 278} L${x},${y + 320} L${x + 20},${y + 355} L${x},${y + 388}`, { stroke: C.rockDark, w: 12 }) + path(`M${x},${y + 168} L${x + 20},${y + 215} L${x},${y + 245} L${x + 20},${y + 278} L${x},${y + 320} L${x + 20},${y + 355} L${x},${y + 388}`, { stroke: C.tealLight, w: 6 }); });
    s += T(240, y + 228, 'communication', { size: 16, weight: 600, fill: C.tealDark }) + T(240, y + 247, 'trench', { size: 16, weight: 600, fill: C.tealDark });
    s += T(860, y + 440, 'Plan view, schematic, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: 450 };
  },
  (y) => row(y, [
    { title: 'Why zigzag?', body: 'An enemy who got in could not fire along the whole line.', fill: C.tealLight, edge: C.tealDark },
    { title: 'Conditions', body: 'Mud, rats, lice, trench foot and constant shelling.', fill: C.panel },
  ], { card: { size: 17, tsize: 19 } })];
  F('03-trench-system', 'The trench system', null, blocks,
    'Plan view, not to scale: zigzag front-line, support and reserve trenches run parallel, linked by communication trenches, facing no man\'s land and barbed wire. Notes explain that zigzags stopped an enemy firing along the whole line and list conditions such as mud, rats, lice and trench foot.',
    'Zigzag lines of front, support and reserve trenches faced each other across no man\'s land.', H.tr);
}

// 04 Defence stronger than attack; new technology
F('04-defence-and-new-technology', 'Why defence was stronger than attack', null, [
  (y) => grid(y, [
    { kicker: 'MACHINE GUNS', title: 'Cut down infantry', body: 'Advancing troops fell in large numbers.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'BARBED WIRE', title: 'Slowed attackers', body: 'Held them in the open.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'ARTILLERY', title: 'Most casualties', body: 'But long bombardments warned the enemy and churned the ground into craters.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'RAILWAYS', title: 'Reserves rushed in', body: 'Faster than attackers could advance on foot.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], 2, { card: { size: 16, tsize: 18, pad: 15 }, vcenter: false }),
  LBL('ATTEMPTS TO BREAK THE DEADLOCK'),
  (y) => table(y, [{ w: 0.9, head: 'Development' }, { w: 2.2, head: 'Details' }], [
    ['Gas', 'German chlorine at the Second Battle of Ypres, April 1915; then phosgene and mustard gas; gas masks issued. Could blow back on attackers.'],
    ['Tanks', 'First used by the British on the Somme, September 1916; early models slow and unreliable.'],
    ['Aircraft', 'Reconnaissance and artillery spotting, then fighting.'],
    ['Tactics', 'Creeping barrage: infantry advanced close behind a line of shellfire; later combined artillery, infantry, tanks and aircraft.'],
  ], { size: 16, hsize: 18 }),
  (y) => note(y, 'Attrition', 'When breakthroughs failed, commanders tried to wear down the enemy\'s manpower and resources: enormous casualties for small gains.', { size: 17 }),
], 'Four reasons defence beat attack: machine guns, barbed wire, artillery and railways. A table lists attempts to break the deadlock: gas from April 1915, tanks from September 1916, aircraft and the creeping barrage. A note defines attrition.',
'Defence beat attack; new weapons were not instantly decisive, so commanders turned to attrition.', H.tr, { gap: 16 });

// 05 The three battles on a time line
{
  const blocks = [(y) => {
    const x0 = 200, x1 = 860, months = 24, mx = (m) => x0 + (m * (x1 - x0)) / months; // m: 0 = Jan 1916
    let s = '';
    for (let m = 0; m <= months; m += 1) s += `<line x1="${mx(m)}" y1="${y + 30}" x2="${mx(m)}" y2="${y + 300}" stroke="${m % 12 === 0 ? C.ink : C.panelEdge}" stroke-width="${m % 12 === 0 ? 2.5 : 1}"/>`;
    s += T(mx(6), y + 18, '1916', { size: 18, weight: 700, anchor: 'middle' }) + T(mx(18), y + 18, '1917', { size: 18, weight: 700, anchor: 'middle' });
    const bar = (row, a, b, label, sub, fill, edge) => {
      const yy = y + 50 + row * 82;
      return T(30, yy + 26, label, { size: 18, weight: 700 }) + T(30, yy + 48, sub, { size: 15, fill: C.muted }) +
        `<rect x="${mx(a)}" y="${yy}" width="${mx(b) - mx(a)}" height="54" rx="8" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
    };
    s += bar(0, 1.67, 12, 'Verdun', 'German attack', C.cream, C.olive) + T(mx(1.67) + 12, y + 83, '21 Feb - Dec 1916', { size: 16, weight: 600 });
    s += bar(1, 6, 11, 'Somme', 'British-led', C.tealLight, C.tealDark) + T(mx(6) + 12, y + 165, '1 Jul - Nov 1916', { size: 16, weight: 600 });
    s += bar(2, 5, 6, 'Messines', 'British', C.panel, C.ink);
    s += T(mx(6) + 10, y + 247, 'June 1917', { size: 16, weight: 600 });
    s += `<rect x="${mx(18.97)}" y="${y + 214}" width="${mx(23) - mx(18.97)}" height="54" rx="8" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(mx(18.97) + 10, y + 247, '31 Jul - Nov 1917', { size: 15, weight: 600 });
    s += T(mx(14.6), y + 247, 'Passchendaele →', { size: 16, weight: 700, anchor: 'middle' });
    // Messines bar was placed in 1916 row by index; redraw correctly at 1917 June
    return { s, h: 300 };
  }];
  // simpler, explicit version
  const blocks2 = [(y) => {
    const x0 = 210, x1 = 860, months = 24, mx = (m) => x0 + (m * (x1 - x0)) / months;
    let s = panel(30, y, 840, 330);
    for (let m = 0; m <= months; m += 1) s += `<line x1="${mx(m)}" y1="${y + 50}" x2="${mx(m)}" y2="${y + 310}" stroke="${m % 12 === 0 ? C.ink : C.panelEdge}" stroke-width="${m % 12 === 0 ? 2.5 : 1}"/>`;
    s += T(mx(6), y + 38, '1916', { size: 18, weight: 700, anchor: 'middle' }) + T(mx(18), y + 38, '1917', { size: 18, weight: 700, anchor: 'middle' });
    const rowY = (r) => y + 66 + r * 80;
    const lab = (r, a, b) => T(50, rowY(r) + 24, a, { size: 18, weight: 700 }) + T(50, rowY(r) + 46, b, { size: 15, fill: C.muted });
    const bar = (r, a, b, fill, edge) => `<rect x="${mx(a)}" y="${rowY(r)}" width="${mx(b) - mx(a)}" height="54" rx="8" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
    const bg = (x, yy, txt, anchor = 'start', size = 16) => { const w = tw(txt, size, 600), x0 = anchor === 'end' ? x - w : x; return `<rect x="${x0 - 4}" y="${yy - size}" width="${w + 8}" height="${size + 8}" fill="${C.panel}"/>` + T(x, yy, txt, { size, weight: 600, anchor }); };
    s += `<rect x="${mx(6)}" y="${y + 52}" width="${mx(11) - mx(6)}" height="${rowY(1) + 58 - y - 52}" fill="${C.mustard}" opacity="0.18"/>`;
    s += lab(0, 'Verdun', 'German attack') + bar(0, 1.7, 12, C.cream, C.olive) + T(mx(1.7) + 12, rowY(0) + 34, '21 February - December 1916', { size: 16, weight: 600 });
    s += lab(1, 'Somme', 'British-led attack') + bar(1, 6, 11, C.tealLight, C.tealDark) + bg(mx(11) + 10, rowY(1) + 34, '1 July - November 1916');
    s += lab(2, 'Passchendaele', 'Third Ypres') + bar(2, 18.97, 23, C.tealLight, C.tealDark) + T(mx(18.97) + 8, rowY(2) + 34, '31 Jul - Nov', { size: 15, weight: 600 });
    s += `<path d="M${mx(17.5)},${rowY(2) + 13} l14,14 l-14,14 l-14,-14 z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + bg(mx(17.5) - 20, rowY(2) + 34, 'Messines Ridge, June 1917', 'end');
    return { s, h: 330 };
  }];
  F('05-battles-timeline', 'The three great battles', 'Months of fighting, 1916-17', [...blocks2,
    (y) => note(y, 'Why the overlap matters', 'Pressure on the French at Verdun was a major reason for the timing of the British-led attack on the Somme.', { size: 17 }),
  ], 'Monthly time chart for 1916-17: Verdun from 21 February to December 1916, the Somme from 1 July to November 1916 overlapping with it, and Passchendaele from 31 July to November 1917 after Messines in June.',
  'The Somme was launched while Verdun was still being fought.', H.som);
}

// 06 Somme first day
F('06-somme-first-day', '1 July 1916: why the first day failed', null, [
  (y) => chain(y, [
    { kicker: 'PLAN', title: 'Week-long bombardment', body: 'Meant to destroy the German defences.' },
    { kicker: 'BUT', title: 'Defences survived', body: 'Many shells failed to explode; wire often left uncut; Germans sheltered in deep dugouts.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: '1 JULY', title: 'Advance at walking pace', body: 'Into machine-gun fire.', fill: C.panel, edge: C.rust, kfill: C.rust },
  ], { card: { size: 16, tsize: 19 } }),
  (y) => {
    const W = 840, sc = W / 57000, k = 20000 * sc;
    let s = T(30, y + 16, 'BRITISH CASUALTIES ON THE FIRST DAY (bar to scale)', { size: 15, weight: 700, fill: C.muted });
    s += `<rect x="30" y="${y + 30}" width="${W}" height="64" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="30" y="${y + 30}" width="${k}" height="64" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(30 + k / 2, y + 70, 'nearly 20,000 killed', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }) + T(30 + k + (W - k) / 2, y + 70, 'about 57,000 casualties in all', { size: 18, weight: 700, anchor: 'middle' });
    s += T(450, y + 124, 'The worst day in the history of the British army', { size: 18, weight: 700, anchor: 'middle' });
    return { s, h: 132 };
  },
  (y) => row(y, [
    { title: 'Critics', body: 'Allies advanced only a few miles; Haig called a "butcher".', fill: C.panel, edge: C.rust },
    { title: 'Defenders', body: 'Relieved Verdun; taught lessons used in 1918; heavy losses for a stretched German army.', fill: C.tealLight, edge: C.tealDark },
  ], { card: { size: 16, tsize: 19 } }),
], 'Chain: the week-long bombardment failed because of dud shells, uncut wire and deep dugouts, so troops advancing at walking pace on 1 July 1916 met machine-gun fire. A bar shows about 57,000 British casualties, nearly 20,000 killed. Below, critics and defenders of Haig.',
'Dud shells and deep dugouts left the defences intact for the worst day in British army history.', H.som, { gap: 18 });

// 07 Three battles compared
F('07-three-battles-compared', 'Verdun, the Somme and Passchendaele', null, [
  (y) => table(y, [{ w: 0.7, head: '' }, { w: 1.2, head: 'Verdun, 1916', hfill: C.cream }, { w: 1.2, head: 'Somme, 1916', hfill: C.teal }, { w: 1.2, head: 'Passchendaele, 1917', hfill: C.teal }], [
    ['Commander', 'Falkenhayn (attack); Pétain (French defence)', 'Haig', 'Haig'],
    ['Aim', '"Bleed France white" at a symbolic fortress', 'Relieve Verdun; break through; wear down the Germans', 'Break out of the Ypres salient; reach U-boat bases; relieve the French army'],
    ['Key events', 'Voie Sacrée supply road; "They shall not pass"', 'Week-long bombardment; 1 July; tanks on 15 September', 'Messines mines (June); rain and deep mud; Canadians take the village'],
    ['Result', 'France held Verdun; army badly weakened', 'A few miles gained', 'A few miles gained'],
    ['Cost', 'Hundreds of thousands on both sides', 'About 57,000 British casualties on day one', 'Hundreds of thousands'],
  ], { size: 16, hsize: 18 }),
], 'Comparison table of Verdun (1916), the Somme (1916) and Passchendaele (1917) by commander, aim, key events, result and cost.',
'All three battles brought huge losses for little ground: the war of attrition.', H.pas);

// 08 Account chain
F('08-somme-account-chain', 'Question 3: an account that links', 'How the Battle of the Somme developed in 1916', [
  (y) => {
    const items = [
      ['French under extreme pressure at Verdun', ''],
      ['Haig agrees to an offensive on the Somme', 'so'],
      ['Week-long bombardment; defences survive', 'this led to'],
      ['1 July: about 57,000 casualties', 'as a result'],
      ['Attrition through summer and autumn; tanks on 15 September', 'instead of breaking through'],
      ['November: a few miles gained, German army weakened', 'which meant'],
    ];
    let s = '', cy = y;
    items.forEach(([txt, conn], i) => {
      if (conn) { s += arrow(160, cy - 2, 160, cy + 34, { w: 3 }) + chip(185, cy + 2, conn, { fill: C.cream, edge: C.olive, size: 16 }).s; cy += 40; }
      const c = card(30, cy, 840, { title: txt, size: 16, tsize: 18, pad: 14, fill: i === 0 ? C.tealLight : C.panel, edge: i === 0 ? C.tealDark : C.panelEdge });
      s += c.s; cy += c.h;
    });
    return { s, h: cy - y };
  },
  (y) => note(y, null, 'Each step is joined by a cause or consequence: that is what a narrative account rewards.', { size: 17, align: 'middle' }),
], 'Six linked steps from pressure at Verdun to the end of the Somme in November 1916, each joined by a connective such as "so", "this led to" and "as a result".',
'Link every step of an account with a cause or consequence.', H.we, { gap: 18 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
