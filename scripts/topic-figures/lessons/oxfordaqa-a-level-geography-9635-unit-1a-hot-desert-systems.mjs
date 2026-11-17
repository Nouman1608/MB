// Topic figures for oxfordaqa-a-level-geography-9635-unit-1a-hot-desert-systems
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

export const slug = 'oxfordaqa-a-level-geography-9635-unit-1a-hot-desert-systems';
const H = {
  sys: '## Deserts as open systems',
  ai: '## Measuring dryness: the aridity index',
  cause: '## Applying the causes of aridity to real deserts',
  land: '## Explaining landforms as sequences',
  read: '## Reading desert landscapes',
  des: '## Desertification: from causes to futures',
};

// 01 Open system and sediment budget
F('01-dune-field-sediment-budget', 'A dune field as an open system', 'Worked sediment budget (invented figures)', [
  (y) => {
    let s = '';
    const k = 0.0016; // px per tonne for arrow width scale
    const store = card(330, y + 40, 240, { title: 'STORE', body: 'Dune field', align: 'middle', size: 18, tsize: 16, minH: 170, vcenter: true, fill: C.sand, edge: C.olive });
    s += store.s;
    const flow = (x1, y1, x2, y2, t, col) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${t * k}" stroke-linecap="butt"/>` + `<path d="M${x2},${y2 - t * k / 2 - 10} L${x2 + 24},${y2} L${x2},${y2 + t * k / 2 + 10} Z" fill="${col}"/>`;
    s += T(40, y + 40, 'INPUT: 40,000 t a year', { size: 16, weight: 700 }) + flow(40, y + 90, 300, y + 90, 40000, C.tealDark) + T(40, y + 145, 'blown in from a dry riverbed upwind', { size: 15, fill: C.muted });
    s += T(40, y + 180, 'INPUT: 5,000 t a year', { size: 16, weight: 700 }) + flow(40, y + 196, 300, y + 196, 5000, C.tealDark) + T(40, y + 222, 'weathering of nearby rock', { size: 15, fill: C.muted });
    s += T(860, y + 60, 'OUTPUT: 52,000 t a year', { size: 16, weight: 700, anchor: 'end' }) + flow(576, y + 125, 836, y + 125, 52000, C.rust) + T(860, y + 196, 'carried out downwind', { size: 15, fill: C.muted, anchor: 'end' });
    s += T(450, y + 262, 'Arrow widths to scale', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: 270 };
  },
  (y) => note(y, 'Budget = inputs - outputs = 45,000 - 52,000 = -7,000 tonnes a year', 'A negative budget: the store is shrinking, so dunes lower and migrate away. If irrigation upstream cut the river\'s sediment supply, the deficit would grow.', { size: 16, tsize: 19 }),
  LBL('ENERGY INPUTS'),
  (y) => row(y, [
    { title: 'Insolation', body: 'Intense under clear skies and a high sun; drives weathering and local convection winds.', fill: C.cream, edge: C.olive },
    { title: 'Wind', body: 'Kinetic energy that moves sand and dust.', fill: C.tealLight, edge: C.tealDark },
    { title: 'Runoff', body: 'Short bursts of very high energy in rare storms.', fill: C.tealLight, edge: C.tealDark },
  ], { card: { size: 15, tsize: 18 } }),
], 'A dune field store with sand inputs of 40,000 tonnes a year from a dry riverbed and 5,000 tonnes from weathering, and an output of 52,000 tonnes downwind, drawn with arrow widths to scale. The budget is minus 7,000 tonnes a year, so the store shrinks. Below, the three energy inputs: insolation, wind and runoff.',
'Outputs exceed inputs by 7,000 tonnes a year, so the dune field shrinks.', H.sys, { gap: 16 });

// 02 Aridity index
F('02-aridity-index', 'The aridity index: P / PET', 'Three fictional stations on the UNEP bands', [
  (y) => {
    const x0 = 60, x1 = 840, X = (v) => x0 + (v / 0.5) * (x1 - x0);
    let s = panel(30, y, 840, 250);
    const band = (a, b, lab, f) => `<rect x="${X(a)}" y="${y + 60}" width="${X(b) - X(a)}" height="60" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + (lab ? T((X(a) + X(b)) / 2, y + 96, lab, { size: 17, weight: 700, anchor: 'middle' }) : '');
    s += band(0, 0.05, '', C.rust) + band(0.05, 0.2, 'Arid', C.mustard) + band(0.2, 0.5, 'Semi-arid', C.cream);
    s += T(X(0.025), y + 50, 'hyper-arid', { size: 15, weight: 600, anchor: 'middle', fill: C.rust });
    [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5].forEach((v) => { s += `<line x1="${X(v)}" y1="${y + 120}" x2="${X(v)}" y2="${y + 130}" stroke="${C.ink}" stroke-width="2"/>` + T(X(v), y + 150, String(v), { size: 15, anchor: 'middle', fill: C.muted }); });
    const st = [[0.017, 'Wadi Seer', 1], [0.067, 'Tarik Plain', 0], [0.3, 'Baran Hills', 0]];
    st.forEach(([v, n, lane]) => { const yy = y + 180 + lane * 34; s += `<line x1="${X(v)}" y1="${y + 158}" x2="${X(v)}" y2="${yy - 4}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="4 3"/>` + `<circle cx="${X(v)}" cy="${y + 120}" r="7" fill="${C.ink}"/>` + T(X(v) + 6, yy + 12, `${n} ${v}`, { size: 16, weight: 700 }); });
    return { s, h: 250 };
  },
  (y) => table(y, [{ w: 1.1, head: 'Station (fictional)' }, { w: 0.6, head: 'P (mm)' }, { w: 0.7, head: 'PET (mm)' }, { w: 0.7, head: 'P / PET' }, { w: 0.8, head: 'Class' }], [
    ['Wadi Seer', '40', '2,400', '0.017', 'Hyper-arid'],
    ['Tarik Plain', '120', '1,800', '0.067', 'Arid'],
    ['Baran Hills', '450', '1,500', '0.30', 'Semi-arid'],
  ], { size: 16, hsize: 17 }),
  (y) => note(y, 'Rainfall alone does not define a desert', 'Two places with the same rainfall can fall in different classes if one has higher PET. Where PET far exceeds P, soils have a moisture deficit for most of the year.', { size: 16 }),
], 'A scale of P/PET from 0 to 0.5 with bands: hyper-arid below 0.05, arid 0.05 to 0.20 and semi-arid 0.20 to 0.50. Three fictional stations are plotted: Wadi Seer at 0.017, Tarik Plain at 0.067 and Baran Hills at 0.30, with their rainfall and PET in a table.',
'Divide precipitation by potential evapotranspiration, then read the band.', H.ai, { gap: 16 });

// 03 Causes matrix
{
  const blocks = [(y) => {
    const causes = ['Subtropical high pressure', 'Winds from land', 'Continentality', 'Relief (rain shadow, mountains)', 'Cold ocean current'];
    const deserts = [
      ['Sahara and Arabian', [1, 1, 0, 0, 0], 'Sinking air at the Hadley cell edge; NE trades from land'],
      ['Atacama', [1, 0, 0, 1, 1], 'Humboldt (Peru) Current; rain shadow of the Andes'],
      ['Namib', [0, 0, 0, 0, 1], 'Benguela Current: coastal fog, very little rain'],
      ['Taklamakan', [0, 0, 1, 1, 0], 'Deep inside Asia; high mountains on three sides'],
    ];
    const x0 = 250, cw = 124, hh = 92, rh = 104;
    let s = '';
    causes.forEach((c, i) => { s += `<rect x="${x0 + i * cw}" y="${y}" width="${cw}" height="${hh}" fill="${C.teal}" stroke="${C.ink}" stroke-width="1.5"/>` + para(x0 + i * cw + cw / 2, y + 30, `**${c}**`, cw - 16, { size: 15, anchor: 'middle', fill: C.ink, lh: 18 }).s; });
    deserts.forEach(([n, m, note], r) => {
      const yy = y + hh + r * rh;
      s += `<rect x="30" y="${yy}" width="${x0 - 30}" height="${rh}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="1.5"/>` + T(44, yy + 32, n, { size: 17, weight: 700 }) + para(44, yy + 54, note, x0 - 60, { size: 15, fill: C.muted, lh: 18 }).s;
      m.forEach((v, i) => { s += `<rect x="${x0 + i * cw}" y="${yy}" width="${cw}" height="${rh}" fill="${v ? C.cream : C.panel}" stroke="${C.ink}" stroke-width="1.5"/>`; if (v) s += `<circle cx="${x0 + i * cw + cw / 2}" cy="${yy + rh / 2}" r="18" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + i * cw + cw / 2, yy + rh / 2 + 7, '✓', { size: 20, weight: 700, anchor: 'middle' }); });
    });
    return { s, h: hh + deserts.length * rh };
  }, (y) => note(y, null, 'Examiners reward answers that show several causes working together in one place.', { size: 16, align: 'middle' })];
  F('03-causes-of-aridity', 'Which causes make which desert?', 'Five causes named in the specification', blocks,
    'A matrix of four deserts against five causes of aridity. Sahara and Arabian: subtropical high pressure and winds from land. Atacama: high pressure, the Andes rain shadow and the cold Humboldt Current. Namib: the cold Benguela Current. Taklamakan: continentality and surrounding mountains.',
    'Most deserts are dry for more than one reason.', H.cause, { gap: 16 });
}

// 04 Barchan
{
  const blocks = [(y) => {
    let s = panel(30, y, 840, 320, C.sand, C.olive);
    // plan view crescent
    const cx = 260, cy = y + 160;
    s += `<path d="M${cx - 110},${cy - 90} C${cx + 10},${cy - 110} ${cx + 40},${cy - 30} ${cx + 40},${cy} C${cx + 40},${cy + 30} ${cx + 10},${cy + 110} ${cx - 110},${cy + 90} C${cx - 20},${cy + 70} ${cx - 10},${cy + 30} ${cx - 10},${cy} C${cx - 10},${cy - 30} ${cx - 20},${cy - 70} ${cx - 110},${cy - 90} Z" fill="#e6cf86" stroke="${C.ink}" stroke-width="3"/>`;
    // correct orientation: wind left to right, horns downwind (right). Draw crescent with convex side upwind (left)
    s = panel(30, y, 840, 320, C.sand, C.olive);
    s += `<path d="M${cx + 110},${cy - 95} C${cx - 10},${cy - 110} ${cx - 80},${cy - 50} ${cx - 80},${cy} C${cx - 80},${cy + 50} ${cx - 10},${cy + 110} ${cx + 110},${cy + 95} C${cx + 30},${cy + 70} ${cx + 10},${cy + 30} ${cx + 10},${cy} C${cx + 10},${cy - 30} ${cx + 30},${cy - 70} ${cx + 110},${cy - 95} Z" fill="#e6cf86" stroke="${C.ink}" stroke-width="3"/>`;
    s += T(cx - 40, cy + 6, 'windward', { size: 15, weight: 600, anchor: 'middle' }) + T(cx + 130, cy + 6, 'slip face', { size: 15, weight: 700, fill: C.olive }) + `<line x1="${cx + 126}" y1="${cy}" x2="${cx + 16}" y2="${cy}" stroke="${C.olive}" stroke-width="2.5"/>`;
    s += T(cx + 120, cy - 100, 'horn', { size: 15, weight: 700 }) + T(cx + 120, cy + 110, 'horn', { size: 15, weight: 700 });
    s += arrow(60, y + 40, 160, y + 40, { w: 5 }) + T(60, y + 28, 'wind', { size: 16, weight: 700 });
    s += T(cx, y + 306, 'PLAN VIEW', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
    // profile
    const px = 480, pb = y + 220;
    s += `<path d="M${px},${pb} L${px + 230},${pb - 80} L${px + 280},${pb} Z" fill="#e6cf86" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<line x1="${px - 20}" y1="${pb}" x2="${px + 330}" y2="${pb}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += path(`M${px + 40},${pb - 26} q20,-26 40,-14 q20,-26 40,-14 q20,-26 40,-14`, { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' });
    s += T(px + 60, pb - 120, 'saltation up the', { size: 15, weight: 600, fill: C.tealDark, anchor: 'middle' }) + T(px + 60, pb - 102, 'gentle windward slope', { size: 15, weight: 600, fill: C.tealDark, anchor: 'middle' });
    s += arrow(px + 240, pb - 66, px + 270, pb - 14, { w: 3, color: C.olive, marker: 'ahO' }) + T(px + 290, pb - 60, 'avalanche:', { size: 15, weight: 600, fill: C.olive }) + T(px + 290, pb - 42, 'slip face', { size: 15, weight: 600, fill: C.olive }) + T(px + 290, pb - 24, '30-34°', { size: 15, weight: 700, fill: C.olive });
    s += arrow(px + 60, pb + 40, px + 260, pb + 40, { w: 4 }) + T(px + 160, pb + 66, 'whole dune migrates downwind', { size: 15, weight: 600, anchor: 'middle' });
    s += T(px + 140, y + 306, 'PROFILE', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
    s += T(855, y + 26, 'Schematic, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: 320 };
  },
  (y) => steps(y, [
    { title: 'Sand accumulates', body: 'Around an obstacle, or where supply is limited on a hard surface.' },
    { title: 'Saltation up the windward slope', body: 'Wind pushes sand up the gentle slope.' },
    { title: 'Avalanching down the slip face', body: 'Settles at about 30 to 34 degrees.' },
    { title: 'Horns form', body: 'Lower edges have less sand, move faster than the centre and are drawn out downwind.' },
    { title: 'Migration in dynamic equilibrium', body: 'The dune moves downwind while keeping its shape.', fill: C.cream },
  ], { size: 15, tsize: 17, gap: 8, pad: 12, highlight: 4 })];
  F('04-barchan-dune', 'How a barchan dune forms', 'Wind from left to right', blocks,
    'Plan view and profile of a barchan, not to scale: a crescent with its gentle windward slope facing the wind and horns pointing downwind; in profile, sand saltates up the windward slope and avalanches down a slip face of about 30 to 34 degrees, and the dune migrates downwind. Five numbered steps explain the formation.',
    'Saltation up, avalanching down and faster-moving horns keep a barchan\'s shape as it migrates.', H.land, { gap: 16 });
}

// 05 Pediment and desert pavement sequences
{
  const blocks = [
    LBL('DESERT PAVEMENT'),
    (y) => {
      let s = '';
      const W = 265, gap = 22;
      const stones = [[22, 14], [70, 18], [124, 12], [172, 16], [214, 13]];
      for (let p = 0; p < 3; p++) {
        const x = 30 + p * (W + gap);
        s += panel(x, y, W, 220);
        const g = y + 150 - (p === 0 ? 0 : 22);
        s += `<rect x="${x + 2}" y="${g}" width="${W - 4}" height="${y + 218 - g}" fill="${C.sand}"/>`;
        // fines
        if (p === 0) for (let i = 0; i < 40; i++) s += `<circle cx="${x + 12 + (i * 37) % (W - 24)}" cy="${g + 8 + ((i * 13) % 50)}" r="2.2" fill="${C.olive}"/>`;
        if (p === 0) for (let i = 0; i < 12; i++) s += `<circle cx="${x + 20 + i * 20}" cy="${g - 26 - (i % 3) * 10}" r="2" fill="${C.olive}"/>`;
        stones.forEach(([sx, r], i) => { const yy = p === 0 ? g + 20 + (i % 2) * 22 : g - r + 4; s += `<ellipse cx="${x + sx + 10}" cy="${yy}" rx="${r + 4}" ry="${r}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`; });
        if (p === 2) for (let i = 0; i < 40; i++) s += `<circle cx="${x + 12 + (i * 37) % (W - 24)}" cy="${g + 26 + ((i * 13) % 40)}" r="2.2" fill="${C.olive}"/>`;
        const ttl = ['1 Deflation removes fines', '2 Stones left; settle together', '3 Armour protects fines below'][p];
        s += T(x + W / 2, y + 30, ttl, { size: 16, weight: 700, anchor: 'middle' });
        if (p === 0) s += arrow(x + 30, y + 60, x + W - 30, y + 60, { w: 3.5 }) + T(x + W / 2, y + 84, 'wind', { size: 15, anchor: 'middle', fill: C.muted });
        if (p === 1) s += T(x + W / 2, y + 66, 'sheet wash may help pack them', { size: 15, anchor: 'middle', fill: C.muted });
        if (p === 2) s += T(x + W / 2, y + 66, 'negative feedback: slows', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }) + T(x + W / 2, y + 86, 'further deflation', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
        if (p < 2) s += arrow(x + W + 2, y + 110, x + W + gap - 2, y + 110, { w: 3 });
      }
      return { s, h: 220 };
    },
    LBL('PEDIMENT AND INSELBERG'),
    (y) => {
      let s = panel(30, y, 840, 250);
      const g = y + 200;
      s += `<path d="M32,${g} L280,${g - 18} L330,${g - 20}" fill="none" stroke="${C.ink}" stroke-width="2"/>`;
      // older slope positions dashed, current mountain front right
      [0, 1, 2].forEach((i) => { const x = 420 + i * 120; s += `<path d="M${x},${g - 24 - i * 4} L${x + 60},${y + 50}" fill="none" stroke="${C.panelEdge}" stroke-width="3" stroke-dasharray="8 6"/>`; });
      s += `<path d="M32,${g} L330,${g - 20} L660,${g - 34} L720,${y + 50} L868,${y + 50} L868,${y + 248} L32,${y + 248} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
      s += `<path d="M160,${g - 9} Q175,${y + 90} 205,${y + 92} Q235,${y + 96} 245,${g - 14} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/>` + T(205, y + 80, 'inselberg', { size: 16, weight: 700, anchor: 'middle' });
      s += `<rect x="566" y="${y + 70}" width="112" height="22" fill="${C.panel}"/>` + T(622, y + 86, 'front retreats', { size: 15, weight: 600, anchor: 'middle' }) + arrow(575, y + 104, 668, y + 104, { w: 4 }) + T(450, g + 22, 'dashed lines: earlier positions of the front', { size: 15, fill: C.ink, anchor: 'middle' });
      s += T(470, g - 36, 'pediment: gently sloping rock surface', { size: 16, weight: 700, anchor: 'middle' });
      s += T(800, y + 40, 'mountain front', { size: 15, weight: 600, anchor: 'middle' });
      s += T(50, y + 30, 'Weathering and sheet flooding; very long timescales, partly in wetter past climates', { size: 15, fill: C.muted });
      s += T(855, y + 240, 'Schematic, not to scale', { size: 15, anchor: 'end', fill: C.ink, italic: true });
      return { s, h: 250 };
    },
  ];
  F('05-pavement-and-pediment', 'Two landforms as process sequences', null, blocks,
    'Three panels show a desert pavement forming: deflation removes fine material, larger stones settle together, and the armoured surface protects fines below. Below, a schematic cross-section shows a mountain front retreating parallel to itself, leaving a gently sloping pediment with an isolated inselberg of resistant rock.',
    'Explain landforms as numbered process steps, not labels.', H.land, { gap: 14 });
}

// 06 Mountain-front landscape
{
  const blocks = [(y) => {
    let s = panel(30, y, 840, 330, '#eef3f7');
    const g = y + 250;
    s += `<path d="M32,${y + 80} L120,${y + 60} L200,${y + 90} L260,${g - 60} L330,${g - 20} L470,${g - 4} L560,${g} L700,${g} L760,${g - 40} L790,${y + 150} L820,${g - 30} L868,${g - 6} L868,${y + 328} L32,${y + 328} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
    // wadi notch
    s += `<path d="M172,${y + 74} L186,${y + 98} L200,${y + 82}" fill="#eef3f7" stroke="${C.blue}" stroke-width="3.5"/>`;
    // alluvial fan
    s += `<path d="M250,${g - 56} Q330,${g - 30} 420,${g - 6} L470,${g - 4} L300,${g - 16} Z" fill="${C.sand}" stroke="${C.olive}" stroke-width="2"/>`;
    // playa
    s += `<path d="M560,${g} L700,${g}" stroke="#ffffff" stroke-width="7"/>`;
    // inselberg
    s += `<path d="M760,${g - 40} L790,${y + 150} L820,${g - 30}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/>`;
    const lab = (x, yy, t1, t2) => T(x, yy, t1, { size: 16, weight: 700, anchor: 'middle' }) + (t2 ? T(x, yy + 18, t2, { size: 15, anchor: 'middle', fill: C.ink }) : '');
    s += lab(300, y + 40, 'Mountains: wadis', 'cut by flash floods') + path(`M235,${y + 46} L190,${y + 80}`, { w: 2 });
    s += lab(470, g - 70, 'Alluvial fans', 'merge into a bahada');
    s += lab(630, g - 30, 'Playa', 'fine sediment');
    s += lab(790, y + 120, 'Inselberg', '');
    s += arrow(180, y + 104, 290, g - 50, { w: 3, color: C.tealDark, marker: 'ahT' }) + arrow(440, g + 18, 560, g + 18, { w: 3, color: C.tealDark, marker: 'ahT' });
    s += T(450, y + 296, 'sediment cascade: source → sink', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += T(855, y + 320, 'Schematic, not to scale', { size: 15, anchor: 'end', fill: C.ink, italic: true });
    return { s, h: 330 };
  },
  (y) => table(y, [{ w: 1, head: 'Landscape' }, { w: 1.2, head: 'Dominant processes' }, { w: 1.6, head: 'Landforms' }], [
    ['Sand sea (erg)', 'Wind transport and deposition', 'Barchans, seifs, large dune ridges'],
    ['Stony desert (reg)', 'Deflation and sheet wash', 'Desert pavements, ventifacts'],
    ['Rocky desert (hamada) and mountain front', 'Weathering and episodic water', 'Wadis, alluvial fans, bahadas, pediments, playas, inselbergs'],
  ], { size: 16, hsize: 17 }),
  (y) => note(y, 'Inherited landforms', 'Many wadis are larger than present-day floods could cut, suggesting they partly formed in wetter periods.', { size: 16 })];
  F('06-mountain-front-landscape', 'Reading a desert landscape', 'A mountain front: one sediment cascade from source to sink', blocks,
    'Schematic cross-section, not to scale, of a mountain-front landscape: wadis cut in the mountains, alluvial fans merging into a bahada at the mountain foot, a playa of fine sediment in the basin and an inselberg beyond. A table compares sand sea, stony desert and rocky desert landscapes by processes and landforms.',
    'Landforms combine into landscapes through one cascade of sediment.', H.read, { gap: 16 });
}

// 07 Desertification sequence and futures
{
  const blocks = [
    (y) => chain(y, [
      { kicker: '10,000 YEARS', title: 'Changing extent', body: 'Early-mid Holocene Sahara wetter: grassland, lakes', fill: C.panel },
      { kicker: 'CAUSES', title: 'Climate + people', body: 'Drought; overgrazing, over-cultivation, fuelwood, salinisation', fill: C.cream, edge: C.olive, kfill: C.olive },
      { kicker: 'AT RISK', title: 'Semi-arid margins', body: 'E.g. the Sahel: variable rain, high population pressure', fill: C.panel },
      { kicker: 'IMPACTS', title: 'Land and people', body: 'Gullying, dune advance, crusted soils; food insecurity, migration', fill: C.panel, edge: C.rust, kfill: C.rust },
    ], { gap: 30, card: { size: 15, tsize: 17, pad: 12 }, vcenter: false }),
    (y) => note(y, 'Feedback', 'Drought reduces plant cover, and grazing pressure prevents recovery: the causes reinforce each other.', { size: 16, fill: C.tealLight, edge: C.tealDark }),
    LBL('ALTERNATIVE FUTURES (WITH PREDICTED CLIMATE CHANGE)'),
    (y) => row(y, [
      { title: 'Continued degradation', body: 'And out-migration.', fill: C.panel, edge: C.rust },
      { title: 'Adaptation', body: 'Drought-resistant crops; water harvesting.', fill: C.cream, edge: C.olive },
      { title: 'Restoration', body: 'Parts of Niger: farmer-managed natural regeneration has re-greened large areas.', fill: C.tealLight, edge: C.tealDark },
    ], { card: { size: 16, tsize: 18 } }),
  ];
  F('07-desertification-sequence', 'Desertification: causes to futures', 'Follow the specification\'s sequence in long answers', blocks,
    'A chain following the specification: changing extent over 10,000 years, climatic and human causes, areas at risk such as the Sahel, and impacts on land and people. A note explains how drought and grazing reinforce each other. Three alternative futures: continued degradation, adaptation, or restoration as in parts of Niger.',
    'Causes reinforce each other, but the future depends on how land is managed.', H.des, { gap: 16 });
}

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
