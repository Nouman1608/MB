// Topic figures for aqa-gcse-world-history-8145-health-revolution-in-medicine
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

export const slug = 'aqa-gcse-world-history-8145-health-revolution-in-medicine';
const H = {
  germ: '## Germ theory',
  surg: '## A revolution in surgery',
  ph: '## Improvements in public health',
  we: '## Worked example: question 2 (significance)',
};

// 01 Microbe hunters timeline
F('01-germ-theory-timeline', 'The microbe hunters, 1861-1909', 'France and Germany competed after the war of 1870-71', [
  (y) => vtimeline(y, [
    { d: '1861', title: 'Pasteur publishes germ theory', body: 'Microbes in the air cause decay; swan-necked flasks disprove spontaneous generation.', fill: C.tealLight, edge: C.tealDark },
    { d: '1876', title: 'Koch identifies the anthrax bacterium', body: 'Specific microbes cause specific diseases.', fill: C.cream, edge: C.olive },
    { d: '1879', title: 'Chamberland\'s forgotten culture', body: 'Weakened chicken cholera germs protect chickens.', fill: C.tealLight, edge: C.tealDark },
    { d: '1881', title: 'Pasteur\'s anthrax vaccine demonstrated', body: 'Named a vaccine in honour of Edward Jenner.', fill: C.tealLight, edge: C.tealDark },
    { d: '1882 · 1883', title: 'Koch: tuberculosis, then cholera', body: 'Staining with dyes and growing bacteria on solid nutrients.', fill: C.cream, edge: C.olive },
    { d: '1885', title: 'Rabies vaccine', body: 'First used on a boy, Joseph Meister.', fill: C.tealLight, edge: C.tealDark },
    { d: '1909', title: 'Ehrlich\'s team: Salvarsan (compound 606)', body: 'Cures syphilis: the first chemical cure, a "magic bullet".', fill: C.panel, edge: C.rust },
  ], { lx: 150 }),
  (y) => { const a = chip(30, y, 'Pasteur\'s team (France)', { fill: C.tealLight, edge: C.tealDark }), b = chip(30 + a.w + 12, y, 'Koch\'s team (Germany)', { fill: C.cream, edge: C.olive }), c = chip(30 + a.w + b.w + 24, y, 'Ehrlich, who had worked with Koch', { fill: C.panel, edge: C.rust }); return { s: a.s + b.s + c.s, h: a.h }; },
], 'Vertical timeline from 1861 to 1909: Pasteur\'s germ theory, Koch\'s identification of anthrax, tuberculosis and cholera bacteria, Pasteur\'s vaccines for chicken cholera, anthrax and rabies, and Ehrlich\'s Salvarsan in 1909, colour-coded by team.',
'Germ theory came first; the first chemical cure did not arrive until 1909.', H.germ, { gap: 16 });

// 02 Swan-necked flask
{
  const art = (() => {
    const bx = 230, by = 520, r = 115;
    const neck = 'M230,410 L230,330 C230,250 330,250 340,320 C348,380 420,385 440,300 L455,230';
    const microbe = (x, yy) => `<circle cx="${x}" cy="${yy}" r="5" fill="${C.olive}" stroke="${C.ink}" stroke-width="1.5"/>`;
    return `<clipPath id="bulb"><circle cx="${bx}" cy="${by}" r="${r}"/></clipPath>` +
      `<circle cx="${bx}" cy="${by}" r="${r}" fill="${C.panel}"/>` +
      `<rect x="${bx - r}" y="${by - 10}" width="${2 * r}" height="${r + 20}" fill="${C.tealLight}" clip-path="url(#bulb)"/>` +
      `<line x1="${bx - r + 8}" y1="${by - 10}" x2="${bx + r - 8}" y2="${by - 10}" stroke="${C.tealDark}" stroke-width="2.5"/>` +
      path(neck, { stroke: C.ink, w: 30 }) + path(neck, { stroke: C.panel, w: 22 }) +
      `<circle cx="${bx}" cy="${by}" r="${r}" fill="none" stroke="${C.ink}" stroke-width="4"/>` +
      `<rect x="${bx - 12}" y="${by - r - 4}" width="24" height="14" fill="${C.panel}"/>` +
      [[470, 175], [500, 205], [430, 160], [520, 160], [480, 135]].map(([a, b]) => microbe(a, b)).join('') +
      [[378, 368], [392, 371], [405, 367]].map(([a, b]) => microbe(a, b)).join('') +
      T(bx, by + 50, 'broth stays sterile', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) +
      T(540, 150, 'microbes in the air', { size: 17, weight: 600 }) +
      path('M420,410 L398,382', { stroke: C.ink, w: 2.5 }) + T(390, 432, 'microbes caught', { size: 17, weight: 600 }) + T(390, 453, 'in the curved neck', { size: 17, weight: 600 }) +
      arrow(520, 240, 470, 290, { w: 3, dash: '7 6' });
  })();
  F('02-swan-necked-flask', 'Pasteur\'s swan-necked flask', 'How germ theory disproved spontaneous generation', [
    (y) => ({ s: `<g transform="translate(80,${y - 120})">` + art + '</g>', h: 540 }),
    (y) => row(y, [
      { kicker: 'OLD IDEA', title: 'Spontaneous generation', body: 'Decay produces microbes. (Miasma: disease spreads through bad air.)', fill: C.panel, edge: C.rust, kfill: C.rust },
      { kicker: 'PASTEUR, 1861', title: 'Germ theory', body: 'Microbes in the air cause decay. Liquids stay sterile when microbes cannot reach them.', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, card: { size: 17, tsize: 20 } }),
  ], 'A round flask of broth with a long S-shaped neck. Microbes from the air are caught in the curve of the neck and never reach the broth, which stays sterile. Below, the old idea of spontaneous generation is contrasted with Pasteur\'s germ theory of 1861.',
  'If microbes cannot reach the liquid, it does not decay: decay comes from germs in the air.', H.germ, { gap: 4 });
}

// 03 Three problems of surgery
F('03-three-problems-of-surgery', 'Three problems facing surgeons', 'And how the nineteenth century tackled them', [
  (y) => table(y, [{ w: 0.7, head: 'Problem' }, { w: 1.8, head: 'Solution and key individual', hfill: C.teal }, { w: 1.2, head: 'Difficulties', hfill: C.cream }], [
    ['Pain', '**Anaesthetics.** Liston used ether in London (1846); **Simpson** found chloroform\'s effects by testing it on himself and friends (1847).', 'Dosage hard to judge: Hannah Greener died (1848). Some said pain was God-given. Acceptance grew after Queen Victoria used it (1853).'],
    ['Infection', '**Antiseptics.** **Lister** used carbolic acid on a compound fracture (1865) and a spray in theatre; published 1867. **Aseptic** methods from the 1880s.', 'The spray was unpleasant, irritated hands and slowed operations; many still doubted germ theory.'],
    ['Blood loss', 'Not solved in this period.', 'Remained a problem until blood groups and storage were developed in the twentieth century.'],
  ], { size: 16, hsize: 18, cellFill: (r, c) => (r === 2 && c > 0 ? '#f6f3ea' : null) }),
], 'Table of the three problems of surgery. Pain was tackled by anaesthetics (ether 1846, Simpson\'s chloroform 1847); infection by Lister\'s antiseptics (1865) and later aseptic methods; blood loss remained unsolved until the twentieth century.',
'Pain and infection were solved in the nineteenth century; blood loss was not.', H.surg);

// 04 Black period and antiseptic to aseptic
F('04-black-period-to-aseptic', 'From the "black period" to aseptic surgery', null, [
  (y) => chain(y, [
    { kicker: '1840s-50s', title: 'Anaesthetics', body: 'Longer, more complex operations possible.' },
    { kicker: 'BLACK PERIOD', title: 'More infection', body: 'Infection not yet understood, so more patients died.', fill: C.panel, edge: C.rust, kfill: C.rust },
    { kicker: '1865-67', title: 'Lister\'s antiseptics', body: 'Deaths among his amputation patients fell sharply.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FROM 1880s', title: 'Aseptic surgery', body: 'Safe surgery inside the body.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 40, card: { size: 16, tsize: 18, pad: 15 } }),
  (y) => row(y, [
    { kicker: 'ANTISEPTIC', title: 'Kill germs during the operation', body: ['Carbolic acid on bandages', 'Carbolic spray in the theatre'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'ASEPTIC', title: 'Keep germs out altogether', body: ['Instruments sterilised with steam', 'Theatres scrubbed', 'Gowns and masks; rubber gloves from the 1890s'], bullets: true, fill: C.tealLight, edge: C.tealDark },
  ], { card: { size: 17, tsize: 19 }, vcenter: false }),
  (y) => note(y, '1902', 'Edward VII\'s coronation was postponed for an operation on his appendix abscess: a sign of how routine such surgery had become.', { size: 17 }),
], 'A chain from anaesthetics to the black period of infection, then Lister\'s antiseptics and aseptic surgery from the 1880s. Below, antiseptic methods kill germs during the operation, while aseptic methods keep them out altogether.',
'Antiseptic surgery kills germs; aseptic surgery keeps them out.', H.surg);

// 05 Snow and the Broad Street pump (schematic)
{
  const map = (y0) => {
    const x0 = 30, w = 470, h = 440, cx = x0 + 235, cy = y0 + 220;
    let s = panel(x0, y0, w, h);
    // schematic streets
    const st = (d) => path(d, { stroke: C.panelEdge, w: 16 });
    s += st(`M${x0 + 15},${cy} L${x0 + w - 15},${cy}`) + st(`M${cx - 120},${y0 + 15} L${cx - 120},${y0 + h - 15}`) + st(`M${cx + 110},${y0 + 15} L${cx + 110},${y0 + h - 15}`) + st(`M${x0 + 15},${y0 + 90} L${x0 + w - 15},${y0 + 90}`) + st(`M${x0 + 15},${y0 + h - 80} L${x0 + w - 15},${y0 + h - 80}`);
    // deaths: deterministic cluster
    let seed = 7; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let i = 0; i < 70; i++) {
      const a = rnd() * Math.PI * 2, d = 18 + Math.pow(rnd(), 1.8) * 190;
      const px = cx + Math.cos(a) * d, py = cy + Math.sin(a) * d * 0.95;
      if (px < x0 + 14 || px > x0 + w - 14 || py < y0 + 14 || py > y0 + h - 14) continue;
      s += `<rect x="${px - 4}" y="${py - 4}" width="8" height="8" fill="${C.ink}"/>`;
    }
    s += `<circle cx="${cx}" cy="${cy}" r="15" fill="${C.blue}" stroke="${C.ink}" stroke-width="3"/>`;
    s += chip(cx, cy + 24, 'Broad Street pump', { anchor: 'middle', size: 16, fill: C.cream, edge: C.olive }).s;
    s += `<rect x="${x0 + 18}" y="${y0 + h + 14}" width="8" height="8" fill="${C.ink}"/>` + T(x0 + 34, y0 + h + 23, '= a cholera death (illustrative)', { size: 16 });
    s += T(x0 + w, y0 + h + 23, 'Schematic, not to scale', { size: 16, anchor: 'end', fill: C.muted, italic: true });
    return s;
  };
  F('05-snow-broad-street', 'John Snow and the Broad Street pump', 'Soho, London, 1854', [
    (y) => {
      const st = steps(y, [
        { title: 'Map the deaths', body: 'Snow mapped cholera deaths in Soho.' },
        { title: 'Spot the cluster', body: 'Deaths clustered round the Broad Street pump.' },
        { title: 'Remove the handle', body: 'Cases fell.' },
        { title: 'Conclusion', body: 'Cholera spread through water, not air. He could not identify the germ.' },
      ], { x: 520, w: 350, size: 16, tsize: 18, highlight: 3, gap: 10, pad: 14 });
      return { s: map(y) + st.s, h: Math.max(470, st.h) };
    },
  ], 'A schematic street grid of Soho in 1854 with cholera deaths marked as small squares, densest around the Broad Street pump. Steps beside it: map the deaths, spot the cluster, remove the pump handle, and conclude that cholera spread through water.',
  'Snow linked cholera to water before the germ was identified.', H.ph);
}

// 06 Public Health Acts compared
F('06-public-health-acts', 'Public Health Acts: 1848 and 1875', 'From permissive to compulsory', [
  (y) => table(y, [{ w: 0.65, head: '' }, { w: 1.4, head: '1848 Act', hfill: C.cream }, { w: 1.4, head: '1875 Act', hfill: C.teal }], [
    ['Nature', '**Permissive:** towns *could* act', '**Compulsory:** councils *had* to act'],
    ['Main terms', 'General Board of Health; towns could set up local boards of health; compulsory only where the death rate exceeded 23 per 1,000', 'Councils had to provide clean water, drainage and sewage disposal, and appoint a Medical Officer of Health'],
    ['Context', 'Cholera of 1848; Chadwick\'s report (1842); belief in *laissez-faire*', 'Snow\'s findings, germ theory, the Great Stink (1858), and the 1867 Reform Act'],
    ['Limits', 'Many towns did nothing; the General Board was abolished in 1854', 'Enforcement varied, but it set national standards'],
  ], { size: 16, hsize: 19 }),
], 'Comparison table of the 1848 and 1875 Public Health Acts by nature, main terms, context and limits. The 1848 Act let towns act; the 1875 Act made councils provide clean water, drainage, sewage disposal and a Medical Officer of Health.',
'The 1848 Act allowed action; the 1875 Act required it.', H.ph);

// 07 Significance frame
F('07-significance-frame', 'Explaining significance', 'Question 2: the significance of Lister\'s work for surgery', [
  (y) => row(y, [
    { kicker: 'AT THE TIME', title: 'Tackled infection', body: ['Used Pasteur\'s germ theory; carbolic acid from 1865', 'Published 1867: far fewer patients died', 'Began to end the "black period"', 'But: limited at first, as many surgeons disliked the spray and doubted germ theory'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'OVER TIME', title: 'Changed surgeons\' thinking', body: ['Once germs were accepted as the cause of infection, surgeons moved to aseptic methods', 'Sterilised instruments, gowns and gloves', 'With anaesthetics, made safe internal surgery possible'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { arrows: true, gap: 50, card: { size: 17, tsize: 20 }, vcenter: false }),
  (y) => note(y, null, 'Significance means judging impact **at the time** and **over time**.', { align: 'middle', size: 18 }),
], 'Two linked columns for a significance answer on Lister: at the time he tackled infection with carbolic acid but met resistance; over time his ideas led to aseptic surgery and, with anaesthetics, safe internal surgery.',
'Judge significance at the time and over time.', H.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
