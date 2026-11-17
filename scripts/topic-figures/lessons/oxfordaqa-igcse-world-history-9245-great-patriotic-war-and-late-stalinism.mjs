// Topic figures for oxfordaqa-igcse-world-history-9245-great-patriotic-war-and-late-stalinism
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

export const slug = 'oxfordaqa-igcse-world-history-9245-great-patriotic-war-and-late-stalinism';
const H = {
  eco: '## The impact of the war: economic problems',
  soc: '## Social problems',
  lead: '## Stalin\'s wartime leadership',
  wom: '## Women in the Great Patriotic War',
  rec: '## Post-war reconstruction',
  hs: '## High Stalinism',
  we: '## Worked example: a 6-mark answer',
};

// 01 Economic response to invasion
F('01-war-economy', 'A war economy', 'After the invasion of 22 June 1941 (Operation Barbarossa)', [
  (y) => note(y, 'The blow', 'Germany captured vast areas, including much of Ukraine (the richest farmland and an important industrial region). Leningrad was besieged from September 1941 to January 1944.', { fill: C.panel, edge: C.rust, size: 17 }),
  (y) => grid(y, [
    { kicker: 'RELOCATION', title: 'Factories moved east', body: 'Over 1,500 dismantled and moved by rail to the Urals, Siberia and Central Asia in 1941; rebuilt, often in the open air.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'TOTAL MOBILISATION', title: 'Everything for the war', body: 'Huge production of tanks, aircraft and guns; longer hours; tighter labour discipline.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FOOD', title: 'Strict rationing', body: 'Farmland occupied; men and horses taken by the army. Many survived on bread and what they could grow.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'ALLIED AID', title: 'Lend-Lease', body: 'From the USA and Britain, especially lorries, food and raw materials.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], 2, { card: { size: 16, tsize: 19 }, vcenter: false }),
  (y) => note(y, null, 'The industrial base built in the east during the Five-Year Plans proved vital.', { size: 17, align: 'middle' }),
], 'After the German invasion of June 1941 captured Ukraine and besieged Leningrad, the USSR responded by moving over 1,500 factories east, mobilising the whole economy, rationing food strictly and receiving Lend-Lease aid from the USA and Britain.',
'Moving industry east and total mobilisation kept the war effort going.', H.eco, { gap: 16 });

// 02 Social problems
F('02-human-cost', 'The human cost of the war', null, [
  (y) => note(y, 'Around 27 million Soviet citizens died', 'Soldiers and civilians: the greatest loss of any country in the war.', { fill: C.cream, edge: C.rust, tsize: 22, size: 17, align: 'middle' }),
  (y) => grid(y, [
    { title: 'Siege of Leningrad', body: 'Hundreds of thousands of civilians died, mostly of starvation and cold.' },
    { title: 'Occupation', body: 'Mass killings, including the murder of Soviet Jews; villages burned; deportation to Germany for forced labour.' },
    { title: 'Homes and families', body: 'Millions of homes destroyed; many children orphaned.' },
    { title: 'Deported nationalities', body: 'Accused of collaboration: Volga Germans (1941), Chechens and Ingush (1944), Crimean Tatars (1944). Many died.', fill: C.panel, edge: C.rust },
  ], 2, { card: { size: 16, tsize: 19 }, vcenter: false }),
], 'Around 27 million Soviet citizens died. Four further effects: civilian deaths in the siege of Leningrad, killings and deportations under occupation, millions of homes destroyed and children orphaned, and the deportation of whole nationalities in 1941 and 1944.',
'No country lost more people in the war than the USSR.', H.soc);

// 03 Stalin's leadership
F('03-stalin-war-leader', 'Stalin as war leader: a balance', null, [
  (y) => row(y, [
    { kicker: 'WEAKNESSES', title: 'Costly mistakes', body: ['Ignored warnings of the attack', 'Purges of 1937-38 removed experienced officers', '1941: holding ground led to huge encirclements, e.g. Kiev'], bullets: true, fill: C.panel, edge: C.rust, kfill: C.rust },
    { kicker: 'STRENGTHS', title: 'Leadership', body: ['Chaired the State Defence Committee', 'Stayed in Moscow, October 1941; 7 November parade', 'July 1941 speech: "brothers and sisters"', 'From 1942 relied on commanders such as Zhukov: Stalingrad (1942-43), Kursk (1943)'], bullets: true, fill: C.tealLight, edge: C.tealDark },
  ], { card: { size: 16, tsize: 19 }, vcenter: false }),
  (y) => row(y, [
    { kicker: 'HARSHNESS', title: 'Order No. 227, July 1942', body: '"Not one step back": retreat without orders was treason, enforced by penal battalions and NKVD units.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'CHANGING TONE', title: 'Motherland before communism', body: 'Propaganda stressed Russian history; in 1943 the Orthodox Church could elect a patriarch.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { card: { size: 16, tsize: 19 } }),
], 'Balance of Stalin\'s war leadership: weaknesses (ignored warnings, purged officers, encirclements in 1941) against strengths (State Defence Committee, staying in Moscow, patriotic appeals, reliance on Zhukov). Below, the harsh Order No. 227 and a changed propaganda tone.',
'Stalin\'s leadership was neither wholly good nor wholly bad.', H.lead);

// 04 Women in the war
F('04-women-in-the-war', 'Women and the Great Patriotic War', null, [
  (y) => row(y, [
    { kicker: 'HOME FRONT', title: 'Replaced men', body: 'Factories, mines, transport; most of the work on collective farms; dug city defences; civil defence.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'ARMED FORCES', title: 'Over 800,000 (common estimates)', body: 'Medics, signallers, anti-aircraft gunners, snipers, tank crew, pilots. 588th Night Bomber Regiment: the "Night Witches".', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'AFTER THE WAR', title: 'Back to motherhood', body: 'Most demobilised; the state again stressed motherhood; many veterans\' service little recognised for years.', fill: C.panel, edge: C.panelEdge },
  ], { card: { size: 16, tsize: 18 }, vcenter: false }),
  LBL('WOMEN IN PROPAGANDA'),
  (y) => row(y, [
    { title: '"The Motherland Calls!" (1941)', body: 'A woman as the symbol of the nation calling its people to fight.', fill: C.cream, edge: C.olive },
    { title: 'Lyudmila Pavlichenko', body: 'Sniper credited with 309 kills. Wounded 1942, sent on a tour of Allied countries (USA, Britain): to show Soviet heroism and equality, and to press for a second front.', fill: C.cream, edge: C.olive },
  ], { fr: [1, 1.5], card: { size: 16, tsize: 19 } }),
], 'Three stages for women: replacing men on the home front, serving in the armed forces (over 800,000 by common estimates, including the Night Witches), and demobilisation after the war. Below, women in propaganda: The Motherland Calls! poster and the tour of the sniper Lyudmila Pavlichenko.',
'Women were vital to the war effort and to its propaganda, but little recognised afterwards.', H.wom, { gap: 16 });

// 05 Post-war reconstruction
F('05-post-war-reconstruction', 'Reconstruction to 1953: uneven results', null, [
  (y) => row(y, [
    { kicker: 'INDUSTRY', title: 'Rebuilt', body: ['Fourth Five-Year Plan (1946-50): heavy industry first', 'Factories, mines, railways and the Dnieper dam rebuilt', 'Official claim: pre-war output overtaken by 1950', 'First atomic bomb tested, 1949'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'AGRICULTURE', title: 'Stagnated', body: ['Farms short of men, horses and machinery', '1946 drought + grain procurement: famine 1946-47', 'Private plots heavily taxed; little pay for collective work'], bullets: true, fill: C.panel, edge: C.rust, kfill: C.rust },
    { kicker: 'LIVING STANDARDS', title: 'Little better than 1940', body: ['Rationing ended Dec 1947; currency reform wiped out savings', 'Housing desperately short: shared rooms, barracks, dugouts', 'Consumer goods scarce'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { card: { size: 16, tsize: 19 }, vcenter: false }),
  (y) => note(y, null, 'Victory did not bring prosperity: heavy industry recovered, but farms and living standards did not.', { size: 17, align: 'middle' }),
], 'Three columns on reconstruction to 1953: industry was rebuilt under the Fourth Five-Year Plan and the atomic bomb tested in 1949; agriculture stagnated, with famine in 1946-47; and living standards were little better than in 1940.',
'Heavy industry recovered; farming and living standards did not.', H.rec);

// 06 High Stalinism timeline
F('06-high-stalinism', 'High Stalinism and the death of Stalin', '1946-1953', [
  (y) => vtimeline(y, [
    { d: 'From 1946', title: 'Zhdanov\'s cultural attacks', body: 'Writers and artists accused of Western influence, e.g. Akhmatova and Zoshchenko.' },
    { d: 'From 1948', title: 'Campaign against "cosmopolitans"', body: 'Targeted Jewish intellectuals in particular.' },
    { d: '1949-50', title: 'Leningrad Affair', body: 'Leading Leningrad party officials arrested and shot.', fill: C.panel, edge: C.rust },
    { d: 'Dec 1949', title: 'Stalin\'s seventieth birthday', body: 'The cult of personality at its height.', fill: C.cream, edge: C.olive },
    { d: 'Early 1950s', title: 'Gulag population peaks', body: 'Including returning prisoners of war suspected of disloyalty.' },
    { d: 'Jan 1953', title: 'Doctors\' Plot announced', body: 'Mostly Jewish doctors accused; fear of a new great purge.', fill: C.panel, edge: C.rust },
    { d: '5 Mar 1953', title: 'Stalin dies', body: 'After a stroke on 1 March; help delayed by fearful guards.', dot: C.ink },
    { d: 'Jun / Dec 1953', title: 'Beria arrested, then executed', body: 'NKVD head from 1938; Doctors\' Plot defendants soon released.' },
  ], { lx: 160 }),
], 'Timeline of High Stalinism: Zhdanov\'s attacks on culture from 1946, the anti-cosmopolitan campaign from 1948, the Leningrad Affair, Stalin\'s seventieth birthday in 1949, the Gulag peak, the Doctors\' Plot in January 1953, Stalin\'s death on 5 March 1953 and Beria\'s arrest and execution.',
'Terror and the cult grew again after 1945, until Stalin\'s death in March 1953.', H.hs);

// 07 6-mark answer
F('07-six-mark-answer', 'A 6-mark "explain one way" answer', 'How the war changed life in the countryside', [
  (y) => steps(y, [
    { title: 'Name the way', body: 'Villages were left with far fewer workers.' },
    { title: 'Support with detail', body: 'Millions of men and many horses and tractors were taken by the army; women, children and the elderly did almost all the farm work and still met grain demands.' },
    { title: 'Explain the effect', body: 'Longer hours and greater hardship: food went first to the army and the cities.' },
    { title: 'Show the change lasted', body: 'So many men died that the countryside stayed short of labour after 1945, helping explain post-war stagnation.' },
  ], { highlight: 0, size: 17, tsize: 19 }),
], 'Four steps of a model 6-mark answer: name one way (fewer workers in the villages), support it with detail, explain its effect on people, and show the change lasted beyond 1945.',
'One way, developed with detail, effect and lasting consequence.', H.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
