// Topic figures for oxfordaqa-a-level-geography-9635-unit-1b-coastal-systems
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

export const slug = 'oxfordaqa-a-level-geography-9635-unit-1b-coastal-systems';
const H = {
  en: '## Energy along a coastline',
  sed: '## Sediment cells and budgets in practice',
  lf: '## Writing landform sequences',
  man: '## Evaluating coastal management',
};

// 01 Tidal range and attack zone
{
  const sec = (x, title, low, high, platW) => {
    let s = panel(x, 0, 410, 300);
    const g = 250, cx = x + 300;
    s += `<rect x="${x + 2}" y="${high}" width="${cx - x - 2}" height="${g + 46 - high}" fill="${C.tealLight}"/>`;
    s += `<path d="M${cx},40 L${x + 408},40 L${x + 408},${g + 48} L${x + 2},${g + 48} L${x + 2},${g + 44} L${cx - platW},${g - 4} L${cx},${g - 10} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
    s += `<rect x="${cx - 6}" y="${low - (high === low ? 0 : 0)}" width="12" height="${0}" fill="none"/>`;
    s += `<line x1="${x + 2}" y1="${high}" x2="${cx}" y2="${high}" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="8 6"/>` + `<line x1="${x + 2}" y1="${low}" x2="${cx}" y2="${low}" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="8 6"/>`;
    s += T(x + 14, high - 8, 'high tide', { size: 15, fill: C.tealDark, weight: 600 }) + T(x + 14, low + 20, 'low tide', { size: 15, fill: C.tealDark, weight: 600 });
    s += `<rect x="${cx - 8}" y="${high}" width="16" height="${low - high}" fill="${C.rust}" opacity="0.75"/>`;
    s += T(x + 20, 30, title, { size: 19, weight: 700 });
    return s;
  };
  const blocks = [(y) => {
    const a = sec(30, 'Small tidal range', 170, 150, 40);
    const b = sec(460, 'Large tidal range', 220, 110, 180);
    let s = `<g transform="translate(0,${y})">${a}${b}</g>`;
    s += T(250, y + 125, 'attack focused:', { size: 15, weight: 700, fill: C.rust, anchor: 'end' }) + T(250, y + 143, 'a notch forms', { size: 15, weight: 700, fill: C.rust, anchor: 'end' });
    s += T(480, y + 175, 'attack spread over a wide zone:', { size: 15, weight: 700, fill: C.rust }) + T(480, y + 194, 'a broad wave-cut platform forms', { size: 15, weight: 700, fill: C.rust });
    s += `<path d="M${580},${y + 262} L${580},${y + 270} L${760},${y + 270} L${760},${y + 262}" fill="none" stroke="${C.olive}" stroke-width="2.5"/>` + T(670, y + 290, 'broad platform', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    s += `<path d="M${290},${y + 262} L${290},${y + 270} L${330},${y + 270} L${330},${y + 262}" fill="none" stroke="${C.olive}" stroke-width="2.5"/>` + T(250, y + 290, 'narrow platform', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    s += T(870, y + 318, 'Schematic, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: 322 };
  },
  (y) => row(y, [
    { title: 'Wave energy', body: 'Depends on wind speed, wind duration and fetch.', fill: C.tealLight, edge: C.tealDark },
    { title: 'Tides', body: 'Set the height at which waves attack.', fill: C.cream, edge: C.olive },
    { title: 'Currents', body: 'Longshore and rip currents move sediment once released.' },
  ], { card: { size: 16, tsize: 18 } })];
  F('01-tidal-range-attack', 'Tides set where waves attack', 'Small and large tidal ranges compared', blocks,
    'Two schematic cliff cross-sections. With a small tidal range, high and low tide lines are close together, wave attack is focused on a narrow band and a notch forms. With a large tidal range, attack is spread over a wide zone and a broad wave-cut platform forms. Below, wave energy depends on wind speed, duration and fetch, and currents move released sediment.',
    'A small tidal range focuses erosion into a notch; a large range spreads it into a platform.', H.en, { gap: 16 });
}

// 02 Sediment budget two scenarios
{
  const blocks = [(y) => {
    const k = 0.026, x0 = 300; let s = '';
    const bar = (yy, v, lab, f, x = x0) => `<rect x="${x}" y="${yy}" width="${v * k}" height="34" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + T(x + v * k / 2, yy + 23, lab, { size: 15, weight: 700, anchor: 'middle' });
    const scen = (yy, title, ins, outs, total, pos) => {
      let o = panel(30, yy, 840, 200, pos ? C.panel : C.panel, pos ? C.tealDark : C.rust) + T(50, yy + 34, title, { size: 19, weight: 700 });
      o += T(x0 - 14, yy + 82, 'Inputs', { size: 16, weight: 700, anchor: 'end' }) + T(x0 - 14, yy + 132, 'Outputs', { size: 16, weight: 700, anchor: 'end' });
      let x = x0; ins.forEach(([v, l, f]) => { o += bar(yy + 58, v, l, f, x); x += v * k; });
      x = x0; outs.forEach(([v, l, f]) => { o += bar(yy + 108, v, l, f, x); x += v * k; });
      o += T(50, yy + 184, total, { size: 18, weight: 700, fill: pos ? C.tealDark : C.rust });
      return o;
    };
    s += scen(y, 'Natural bay', [[12000, 'cliff 12,000', C.sand], [4000, 'river 4,000', C.teal]], [[9000, 'drift 9,000', C.cream], [2500, 'storms', C.panel]], '(12,000 + 4,000) - (9,000 + 2,500) = +4,500 m³ a year: the beach widens', true);
    s += scen(y + 220, 'After a sea wall stops cliff erosion', [[4000, 'river 4,000', C.teal]], [[9000, 'drift 9,000', C.cream], [2500, 'storms', C.panel]], '4,000 - 11,500 = -7,500 m³ a year: the beach narrows', false);
    s += T(870, y + 440, 'Bars to scale; storms = 2,500', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: 444 };
  },
  (y) => note(y, 'Evaluation point', 'Protecting a cliff can starve beaches within the same sediment cell.', { size: 16, align: 'middle' })];
  F('02-sediment-budget-sea-wall', 'A sediment budget, before and after a sea wall', 'Invented figures from the lesson (m³ a year)', blocks,
    'Two bar diagrams to scale. In the natural bay, inputs of 12,000 cubic metres from cliffs and 4,000 from a river exceed outputs of 9,000 by drift and 2,500 by storms, giving plus 4,500 a year. After a sea wall stops cliff erosion, inputs fall to 4,000 against the same outputs, giving minus 7,500 a year.',
    'Stopping cliff erosion turns a gaining beach into a losing one.', H.sed, { gap: 16 });
}

// 03 Cliff and wave-cut platform sequence
{
  const stage = (x, y, w, n, title, opts) => {
    let s = panel(x, y, w, 230);
    const top = y + 74, sea = y + 160, base = y + 214;
    const cf = x + w - 60 - opts.retreat, px = Math.max(x + 40, cf - opts.plat);
    s += `<rect x="${x + 2}" y="${sea}" width="${w - 4}" height="${y + 228 - sea}" fill="${C.tealLight}"/>`;
    let d = `M${x + 2},${y + 228} L${x + 2},${base} L${px - 30},${base} L${px},${sea + 30} L${cf},${sea + 8}`;
    if (opts.notch) d += ` L${cf},${sea - 4} L${cf + 18},${sea - 8} L${cf + 18},${sea - 24} L${cf},${sea - 28}`;
    d += ` L${cf},${top} L${x + w - 2},${top} L${x + w - 2},${y + 228} Z`;
    s += `<path d="${d}" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
    if (opts.overhang) s += `<path d="M${cf - 20},${sea - 28} L${cf},${sea - 28} L${cf},${top} L${cf - 20},${top} Z" fill="none" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="7 5"/>`;
    if (opts.debris) s += [0, 1, 2, 3].map((i) => `<circle cx="${cf - 14 - i * 15}" cy="${sea + 14 + i * 4}" r="7" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`).join('');
    if (opts.old) s += `<line x1="${x + w - 60}" y1="${top}" x2="${x + w - 60}" y2="${sea}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 5"/>`;
    s += `<line x1="${x + 2}" y1="${sea}" x2="${cf}" y2="${sea}" stroke="${C.tealDark}" stroke-width="2"/>`;
    s += badge(x + 24, y + 26, 16, n, C.cream) + T(x + 48, y + 32, title, { size: 16, weight: 700 });
    if (opts.lbl) s += T(x + 16, y + 58, opts.lbl, { size: 15, fill: C.muted });
    return s;
  };
  const blocks = [(y) => {
    const w = 270, g = 15;
    let s = '';
    s += stage(30, y, w, '1', 'Waves attack the base', { retreat: 0, plat: 20, lbl: 'between high and low tide' });
    s += stage(30 + w + g, y, w, '2', 'Notch is cut', { retreat: 0, plat: 20, notch: true, lbl: 'hydraulic action, quarrying, abrasion' });
    s += stage(30 + 2 * (w + g), y, w, '3', 'Overhang collapses', { retreat: 18, plat: 40, overhang: true, debris: true, lbl: 'mass movement' });
    s += stage(30, y + 245, w, '4', 'Debris removed', { retreat: 45, plat: 80, old: true, lbl: 'the cliff retreats inland' });
    s += stage(30 + w + g, y + 245, w, '5', 'Platform widens', { retreat: 85, plat: 120, old: true, lbl: 'smoothed by abrasion' });
    s += stage(30 + 2 * (w + g), y + 245, w, '6', 'Retreat slows', { retreat: 100, plat: 150, old: true, lbl: 'negative feedback' });
    s += T(870, y + 494, 'Schematic, not to scale; dashed line = original cliff', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: 500 };
  },
  (y) => note(y, 'Why retreat slows', 'As the platform widens, waves break further offshore and lose energy before reaching the cliff.', { size: 16, fill: C.tealLight, edge: C.tealDark })];
  F('03-cliff-and-platform', 'Cliff retreat and the wave-cut platform', 'Six linked steps', blocks,
    'Six schematic cross-sections: waves attack the cliff base between high and low tide; a notch is cut; the overhang collapses; debris is removed and the cliff retreats; a wave-cut platform widens; and retreat slows because waves break further offshore, a negative feedback.',
    'Notch, collapse, retreat: the platform that is left eventually slows the retreat.', H.lf, { gap: 16 });
}

// 04 Cliff profile and dip
{
  const blocks = [(y) => {
    let s = '';
    const sec = (x, title, dip) => {
      let o = panel(x, y, 410, 300) + T(x + 20, y + 32, title, { size: 18, weight: 700 });
      const sea = y + 240, id = `cp${dip}`;
      o += `<rect x="${x + 2}" y="${sea}" width="406" height="58" fill="${C.tealLight}"/>`;
      const poly = dip === 'sea' ? `M${x + 120},${sea + 56} L${x + 120},${sea} L${x + 300},${y + 80} L${x + 406},${y + 80} L${x + 406},${sea + 56} Z` : `M${x + 250},${sea + 56} L${x + 250},${y + 80} L${x + 406},${y + 80} L${x + 406},${sea + 56} Z`;
      o += `<clipPath id="${id}"><path d="${poly}"/></clipPath><path d="${poly}" fill="${C.rock}"/>`;
      let lines = '';
      if (dip === 'sea') for (let i = 0; i < 9; i++) lines += `<line x1="${x + 60 + i * 50}" y1="${sea + 60}" x2="${x + 300 + i * 50}" y2="${y + 20}" stroke="${C.rockDark}" stroke-width="2"/>`;
      else for (let i = -2; i < 7; i++) lines += `<line x1="${x + 250}" y1="${y + 80 + i * 35}" x2="${x + 406}" y2="${y + 110 + i * 35}" stroke="${C.rockDark}" stroke-width="2"/>`;
      o += `<g clip-path="url(#${id})">${lines}</g><path d="${poly}" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
      if (dip === 'sea') o += arrow(x + 262, y + 112, x + 205, y + 168, { w: 4, color: C.rust, marker: 'ahR' }) + T(x + 20, y + 64, 'blocks slide along bedding;', { size: 15, weight: 700, fill: C.rust }) + T(x + 20, y + 84, 'slope ≈ angle of dip', { size: 15, weight: 700, fill: C.rust });
      else o += T(x + 20, y + 64, 'steep cliff', { size: 15, weight: 700 });
      o += T(x + 400, y + 64, 'land', { size: 15, anchor: 'end', fill: C.muted }) + T(x + 30, sea + 30, 'sea', { size: 15, fill: C.tealDark });
      return o;
    };
    s += sec(30, 'Beds dip seawards', 'sea') + sec(460, 'Beds dip landwards', 'land');
    s += T(870, y + 318, 'Schematic, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: 322 };
  },
  (y) => row(y, [
    { title: 'Strong, well-jointed rock', body: 'High vertical faces, caves along joints.' },
    { title: 'Weak clays', body: 'Slump into rounded profiles.' },
    { title: 'Two sets of processes', body: 'Sub-aerial weathering and runoff lower the upper face; marine erosion steepens the base.', fill: C.cream, edge: C.olive },
  ], { card: { size: 16, tsize: 18 } })];
  F('04-cliff-profile-geology', 'Geology shapes the cliff profile', null, blocks,
    'Two schematic cross-sections. Where rock beds dip seawards, blocks slide along the bedding planes and the cliff slopes at about the angle of dip. Where beds dip landwards, the cliff is steep. Below, strong jointed rock forms high vertical faces, weak clays slump, and sub-aerial processes lower the top while marine erosion steepens the base.',
    'Dip, rock strength and the balance of sub-aerial and marine processes set a cliff\'s profile.', H.lf, { gap: 16 });
}

// 05 Management options and SMP
F('05-management-options', 'Evaluating coastal management', 'Judge effectiveness, cost, environmental impact and effects on the sediment cell', [
  (y) => row(y, [
    { kicker: 'TRADITIONAL', title: 'Hard engineering', body: ['Sea walls, groynes, rip-rap, revetments', '+ immediate, visible protection', '- costly to maintain; can reflect energy and lower beaches; interrupts sediment supply'], bullets: true, fill: C.panel, edge: C.rust, kfill: C.rust },
    { kicker: 'TRADITIONAL', title: 'Soft engineering', body: ['Beach nourishment, dune stabilisation, managed realignment', '+ works with natural processes', 'Sand Motor, Netherlands (2011): about 21.5 million m³ of sand spread by waves and currents'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { card: { size: 15, tsize: 19 }, vcenter: false }),
  LBL('SUSTAINABLE APPROACHES'),
  (y) => {
    const pol = [['Hold the line', C.panel], ['Advance the line', C.panel], ['Managed realignment', C.tealLight], ['No active intervention', C.tealLight]];
    let s = panel(30, y, 840, 150, C.panel, C.tealDark) + T(50, y + 32, 'Shoreline management plan: a policy for each stretch, based on the whole sediment cell', { size: 16, weight: 700 });
    pol.forEach(([p, f], i) => { s += `<rect x="${50 + i * 203}" y="${y + 56}" width="190" height="72" rx="10" fill="${f}" stroke="${C.tealDark}" stroke-width="2"/>` + para(50 + i * 203 + 95, y + (tw(p, 16, 700) > 170 ? 87 : 97), `**${p}**`, 170, { size: 16, anchor: 'middle', fill: C.ink, lh: 20 }).s; });
    return { s, h: 150 };
  },
  (y) => note(y, 'Integrated coastal zone management', 'Coordinates all users and agencies over a whole coastline, so decisions in one place do not damage another.', { size: 16, fill: C.tealLight, edge: C.tealDark }),
], 'Hard engineering (sea walls, groynes, rip-rap, revetments) gives immediate protection but costs more and interrupts sediment supply; soft engineering works with natural processes, as in the Netherlands Sand Motor of 2011. Below, the four shoreline management plan policies and integrated coastal zone management.',
'Judge each option by its effects on the whole sediment cell, not one town.', H.man, { gap: 16 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
