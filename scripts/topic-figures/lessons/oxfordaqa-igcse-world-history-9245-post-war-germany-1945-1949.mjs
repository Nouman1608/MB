// Topic figures for oxfordaqa-igcse-world-history-9245-post-war-germany-1945-1949
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

export const slug = 'oxfordaqa-igcse-world-history-9245-post-war-germany-1945-1949';
const H = {
  pp: '## People\'s problems',
  ac: '## Allied control and the division of Germany',
  dn: '## Denazification and the Nuremberg Trials',
  sz: '## Penalties on the Soviet zone',
  cw: '## The impact of the Cold War',
  we: '## Worked example: a 9-mark answer',
};

// 01 People's problems
F('01-peoples-problems', 'People\'s problems after "zero hour"', 'Unconditional surrender, 7-8 May 1945', [
  (y) => grid(y, [
    { kicker: 'LIVING CONDITIONS', title: 'Ruins and hunger', body: ['Very low rations; cellars and ruins', 'Black market; cigarettes as currency', 'Trümmerfrauen cleared rubble by hand', 'Bitter winter of 1946-47'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'REFUGEES AND EXPELLEES', title: 'Twelve million or more', body: ['**Refugees** fled west from East Prussia, Silesia, Pomerania (1944-45)', '**Expellees** forced out after the war: east of the Oder-Neisse line, Sudetenland, Hungary', 'Often resented on arrival'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FORCED LABOUR', title: 'Displaced persons', body: ['Millions of foreign forced labourers and prisoners', 'Cared for in Allied and relief camps until they could go home or emigrate'], bullets: true },
    { kicker: 'PRISONERS', title: 'Germans held abroad', body: ['Millions of German soldiers were POWs', 'Many held by the USSR used as forced labour for years'], bullets: true },
  ], 2, { card: { size: 16, tsize: 19 }, vcenter: false }),
], 'Four problems facing people in Germany after May 1945: ruins, hunger and the black market; refugees who fled and expellees forced out, twelve million or more; foreign forced labourers who became displaced persons; and German prisoners of war held abroad.',
'Ruined cities, hunger and millions of uprooted people defined 1945-47.', H.pp);

// 02 Four zones schematic
{
  const blocks = [(y) => {
    let s = panel(30, y, 840, 430);
    const zx = 60, zy = y + 50, zw = 500, zh = 330;
    const wz = (i, lab) => `<rect x="${zx}" y="${zy + i * (zh / 3)}" width="${zw * 0.55}" height="${zh / 3}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + T(zx + zw * 0.275, zy + i * (zh / 3) + zh / 6 + 7, lab, { size: 19, weight: 700, anchor: 'middle' });
    s += wz(0, 'British zone') + wz(1, 'American zone') + wz(2, 'French zone');
    const sx = zx + zw * 0.55, sw = zw * 0.45;
    s += `<rect x="${sx}" y="${zy}" width="${sw}" height="${zh}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + T(sx + sw / 2, zy + zh - 30, 'Soviet zone', { size: 19, weight: 700, anchor: 'middle' });
    s += T(zx + zw * 0.275, zy - 14, 'western zones', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(sx + sw / 2, zy - 14, 'east', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    // Berlin inset
    const bx = sx + sw / 2 - 60, by = zy + 70, bw = 120;
    s += `<rect x="${bx}" y="${by}" width="${bw / 2}" height="${bw / 2}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/><rect x="${bx}" y="${by + bw / 2}" width="${bw / 2}" height="${bw / 2}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/><rect x="${bx + bw / 2}" y="${by + bw / 2}" width="${bw / 2}" height="${bw / 2}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/><rect x="${bx + bw / 2}" y="${by}" width="${bw / 2}" height="${bw / 2}" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<rect x="${bx}" y="${by}" width="${bw}" height="${bw}" fill="none" stroke="${C.ink}" stroke-width="4"/>` + T(bx + bw / 2, by - 10, 'Berlin', { size: 18, weight: 700, anchor: 'middle' });
    s += T(bx + 15, by + 36, 'US', { size: 15, weight: 700, anchor: 'middle' }) + T(bx + bw / 2 + 30, by + 36, 'Sov.', { size: 15, weight: 700, anchor: 'middle' }) + T(bx + 30, by + 96, 'UK', { size: 15, weight: 700, anchor: 'middle' }) + T(bx + bw / 2 + 30, by + 96, 'Fr.', { size: 15, weight: 700, anchor: 'middle' });
    // right notes
    s += para(600, y + 70, '**Four zones** agreed at Yalta and Potsdam; **Berlin**, inside the Soviet zone, split into four sectors.', 250, { size: 16, fill: C.ink }).s;
    s += para(600, y + 190, '**Allied Control Council** meant to govern Germany as a whole, but each power ran its zone its own way.', 250, { size: 16, fill: C.ink }).s;
    s += para(600, y + 310, 'The western zones and the Soviet zone increasingly developed differently.', 250, { size: 16, fill: C.muted }).s;
    s += T(560, y + 414, 'Schematic: zone sizes and positions not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: 430 };
  },
  (y) => chips(y, ['Demilitarisation', 'Denazification', 'Democratisation', 'Decentralisation'], { fill: C.cream, edge: C.olive, size: 17 }),
  ];
  F('02-four-zones', 'Allied control: four zones', null, blocks,
    'Schematic, not to scale: Germany divided into British, American and French western zones and a Soviet zone in the east, with Berlin inside the Soviet zone split into four sectors. Notes describe the Allied Control Council, and four chips list the Potsdam aims: demilitarisation, denazification, democratisation and decentralisation.',
    'Four zones and four sectors of Berlin, run by four powers in four different ways.', H.ac, { gap: 16 });
}

// 03 Denazification and Nuremberg
F('03-denazification-nuremberg', 'Dealing with Nazism', null, [
  (y) => row(y, [
    { kicker: 'WESTERN ZONES (e.g. American)', title: 'Questionnaires and tribunals', body: ['Categories from major offenders to followers and the exonerated', 'Many teachers, judges and officials lost jobs, at least for a time', 'Slow and inconsistent; many reinstated as the Cold War grew'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'SOVIET ZONE', title: 'Removing the old elites', body: ['Denazification used against the old elites', 'Big estates broken up in the 1945 land reform'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { card: { size: 16, tsize: 19 }, vcenter: false }),
  (y) => note(y, 'Nuremberg: International Military Tribunal, November 1945 - October 1946', 'Leading Nazis, including Göring, tried for crimes against peace, war crimes and crimes against humanity. **Twelve** sentenced to death; **three** acquitted; Göring killed himself before execution. Further trials of doctors, industrialists and others followed.', { size: 16, fill: C.panel, edge: C.ink }),
  (y) => row(y, [
    { title: 'Impact 1', body: 'Following orders was no defence.', align: 'middle', fill: C.cream, edge: C.olive },
    { title: 'Impact 2', body: 'Evidence of the Holocaust made public.', align: 'middle', fill: C.cream, edge: C.olive },
  ], { card: { size: 17, tsize: 18 } }),
], 'Denazification compared: questionnaires and tribunals in the western zones, many later reversed, against the removal of old elites and land reform in the Soviet zone. Below, the Nuremberg Tribunal of 1945-46 and its two impacts.',
'Denazification differed by zone; Nuremberg set the principle that orders were no defence.', H.dn, { gap: 16 });

// 04 Soviet zone penalties
F('04-soviet-zone-penalties', 'Penalties on the Soviet zone', null, [
  (y) => chain(y, [
    { kicker: 'WHY', title: 'Enormous Soviet losses', body: 'The USSR demanded heavy reparations.' },
    { kicker: 'POTSDAM', title: 'Mainly from its own zone', body: 'Plus a share of industrial equipment from the western zones.' },
    { kicker: 'HOW', title: 'Dismantled and shipped east', body: 'Whole factories, railway lines, machinery; later current production.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'RESULT', title: 'Recovery held back', body: 'In the Soviet zone.', fill: C.panel, edge: C.rust, kfill: C.rust },
  ], { gap: 36, card: { size: 16, tsize: 18, pad: 14 } }),
  LBL('LIFE UNDER SOVIET RULE ALSO MEANT'),
  (y) => grid(y, [
    { title: 'Military rule', body: 'And widespread violence by Soviet soldiers, especially against women, in 1945.' },
    { title: 'Special camps', body: 'For suspected opponents.' },
    { title: 'SED, April 1946', body: 'Communists and Social Democrats forced to merge.' },
  ], 3, { card: { size: 16, tsize: 18 } }),
], 'Chain of reparations: enormous Soviet losses led to demands for reparations, taken mainly from the Soviet zone by dismantling factories, railways and machinery, which held back recovery. Below, Soviet military rule, special camps and the forced creation of the SED in April 1946.',
'Reparations stripped the Soviet zone and slowed its recovery.', H.sz, { gap: 16 });

// 05 Cold War timeline
F('05-cold-war-1947-49', 'The Cold War divides Germany, 1947-49', null, [
  (y) => vtimeline(y, [
    { d: 'Jun 1947', title: 'Marshall Plan announced', body: 'American aid for the western zones; the USSR refuses it for its zone.', fill: C.tealLight, edge: C.tealDark },
    { d: 'Jun 1948', title: 'Deutsche Mark introduced', body: 'Erhard lifts price controls; hoarded goods reappear; black market declines.', fill: C.tealLight, edge: C.tealDark },
    { d: 'Jun 1948', title: 'Berlin Blockade begins', body: 'Road, rail and canal routes to West Berlin cut; about two million West Berliners rely on the airlift.', fill: C.cream, edge: C.olive },
    { d: '1948-49', title: 'Life during the airlift', body: 'Rationed food, power cuts, little fuel; a new runway at Tegel; pilots dropped sweets.', fill: C.cream, edge: C.olive },
    { d: 'May 1949', title: 'Blockade ends; Basic Law', body: 'Federal Republic of Germany created, capital Bonn; Adenauer chancellor in September.', fill: C.tealLight, edge: C.tealDark },
    { d: 'Oct 1949', title: 'German Democratic Republic', body: 'One-party state dominated by the SED. Germany divided until 1990.', fill: C.cream, edge: C.olive },
  ], { lx: 140 }),
  (y) => { const a = chip(30, y, 'West', { fill: C.tealLight, edge: C.tealDark }), b = chip(30 + a.w + 12, y, 'East / Berlin crisis', { fill: C.cream, edge: C.olive }); return { s: a.s + b.s, h: a.h }; },
], 'Timeline from June 1947 to October 1949: the Marshall Plan, the Deutsche Mark, the Berlin Blockade and airlift, the end of the Blockade and creation of the Federal Republic in May 1949, and the GDR in October 1949.',
'A new currency in the west triggered the Blockade, and the crisis ended in two German states.', H.cw, { gap: 16 });

// 06 9-mark answer
F('06-nine-mark-answer', 'A 9-mark "explain two ways" answer', 'How the Cold War affected people in Germany, 1947-49', [
  (y) => row(y, [
    { kicker: 'WAY 1', title: 'Economic recovery in the western zones', body: ['Why: the USA wanted a strong Western Europe to resist communism', 'Marshall Aid; Deutsche Mark, June 1948', 'Effect: shops stocked; food and goods bought legally, not on the black market'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'WAY 2', title: 'Division of Berlin, then Germany', body: ['Stalin blockaded West Berlin in response to the new currency', 'Effect: almost a year of airlift supplies, rationing and power cuts', '1949: two states; east one-party, west democratic'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { card: { size: 16, tsize: 19 }, vcenter: false }),
  (y) => note(y, null, 'Each way: name it, explain the Cold War cause, then show the effect on people\'s lives.', { size: 17, align: 'middle' }),
], 'Two ways the Cold War affected Germans in 1947-49: economic recovery in the western zones through Marshall Aid and the Deutsche Mark, and the division of Berlin and then Germany through the Blockade and the two states of 1949.',
'Two ways, each with its Cold War cause and its effect on people.', H.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
