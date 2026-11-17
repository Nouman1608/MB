// Topic figures for oxfordaqa-a-level-geography-9635-section-a-living-with-hazards
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

export const slug = 'oxfordaqa-a-level-geography-9635-section-a-living-with-hazards';
const H = {
  resp: '## Why responses differ: the logic of 3.1.1.1',
  park: '## Using the Park model and the management cycle',
  pat: '## Describing hazard patterns in the specification\'s terms',
  cs: '## Building the required case studies',
  we: '## Worked example: an annotated paragraph',
};

// 01 Properties steer responses
F('01-properties-steer-responses', 'Why responses differ', 'Five hazard properties steer the choice among six human responses', [
  (y) => chips(y, ['fatalism', 'prediction', 'adjustment / adaptation', 'mitigation', 'management', 'risk-sharing'], { size: 16, fill: C.cream, edge: C.olive }),
  (y) => table(y, [{ w: 0.8, head: 'Property' }, { w: 2.2, head: 'How it steers the response' }], [
    ['Incidence (how often)', 'Frequent events justify permanent investment (building codes, drills); rare events encourage complacency or fatalism.'],
    ['Intensity (effects at a place)', 'High-intensity zones near a fault or vent need zoning or exclusion; low-intensity areas can adapt buildings.'],
    ['Magnitude (size of event)', 'Very large events can overwhelm any defence, so evacuation and risk-sharing matter more than engineering.'],
    ['Distribution (where)', 'Hazards in known belts (plate margins, storm tracks) can be mapped and zoned; scattered hazards such as wildfire are harder to plan for.'],
    ['Level of development', 'Wealth funds monitoring, insurance and engineering; poorer communities may rely on informal adaptation and aid, or have to accept the risk.'],
  ], { size: 16, hsize: 18 }),
], 'Six human responses (fatalism, prediction, adjustment, mitigation, management, risk-sharing) above a table explaining how incidence, intensity, magnitude, distribution and level of development each steer which response is chosen.',
'Link each response to a hazard property, not just a list.', H.resp, { gap: 16 });

// 02 Perception
F('02-hazard-perception', 'Perception sits behind every response', null, [
  (y) => hub(y, ['Hazard', 'perception'], [
    { kicker: 'ECONOMIC', title: 'Income', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'ECONOMIC', title: 'Insurance', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'ECONOMIC', title: 'Cost of moving', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], [
    { kicker: 'CULTURAL', title: 'Religious belief', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CULTURAL', title: 'Community memory of past events', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CULTURAL', title: 'Trust in authorities', fill: C.tealLight, edge: C.tealDark },
  ], { cardW: 280, r: 86, csize: 20 }),
  (y) => note(y, 'Example', 'A farmer on a fertile volcanic slope may see the volcano as a benefit as much as a threat, which explains why people return to hazardous land after an eruption.', { size: 16, fill: C.panel, edge: C.panelEdge }),
], 'Hazard perception in the centre, shaped by economic determinants (income, insurance, the cost of moving) and cultural determinants (religious belief, community memory, trust in authorities). A note gives the example of a farmer on a fertile volcanic slope.',
'Economic and cultural factors shape how people perceive, and so respond to, a hazard.', H.resp);

// 03 Park model annotated
{
  const blocks = [(y) => {
    let s = panel(30, y, 840, 430);
    const x0 = 100, x1 = 840, top = y + 40, base = y + 360, norm = y + 140;
    s += arrow(x0, base, x1, base, { w: 2.5 }) + arrow(x0, base, x0, top - 10, { w: 2.5 });
    s += T(x1, base + 26, 'time', { size: 16, anchor: 'end', fill: C.muted }) + `<text transform="translate(66,${(top + base) / 2}) rotate(-90)" text-anchor="middle" font-size="16" fill="${C.muted}">quality of life / normality</text>`;
    s += `<line x1="${x0}" y1="${norm}" x2="${x1}" y2="${norm}" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="8 6"/>` + T(x0 + 6, norm - 8, 'pre-event level', { size: 15, fill: C.muted });
    const ev = 240;
    const curve = `M${x0},${norm} L${ev - 50},${norm} C${ev - 30},${norm} ${ev - 25},${norm + 18} ${ev - 12},${norm + 18} L${ev},${norm + 14} L${ev + 4},${y + 320} C${ev + 40},${y + 330} ${ev + 80},${y + 330} ${ev + 110},${y + 318} C${ev + 220},${y + 250} ${ev + 330},${norm + 10} ${ev + 430},${norm - 26} L${x1 - 10},${norm - 34}`;
    s += path(curve, { stroke: C.tealDark, w: 5 });
    s += `<line x1="${ev + 2}" y1="${top}" x2="${ev + 2}" y2="${base}" stroke="${C.rust}" stroke-width="2.5"/>` + T(ev + 8, top + 6, 'hazard event', { size: 15, weight: 700, fill: C.rust });
    // phase brackets
    const br = (a, b, lab) => `<path d="M${a},${base - 14} L${a},${base - 6} L${b},${base - 6} L${b},${base - 14}" fill="none" stroke="${C.olive}" stroke-width="2.5"/>` + T((a + b) / 2, base - 20, lab, { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    s += br(ev + 4, ev + 120, 'relief') + br(ev + 124, ev + 330, 'rehabilitation') + br(ev + 334, x1 - 10, 'reconstruction');
    // numbered annotations
    s += badge(ev - 30, norm - 24, 14, '5', C.mustard) + badge(ev + 30, y + 240, 14, '1', C.mustard) + badge(ev + 60, y + 300, 14, '2', C.mustard) + badge(ev + 225, y + 238, 14, '3', C.mustard) + badge(x1 - 50, norm - 58, 14, '4', C.mustard);
    s += T(850, y + 420, 'Illustrative shape', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: 430 };
  },
  (y) => grid(y, [
    { kicker: '1 · DEPTH OF FALL', body: 'Vulnerability and event magnitude.' },
    { kicker: '2 · LENGTH OF RELIEF', body: 'Emergency capacity and access to the area.' },
    { kicker: '3 · SLOPE OF RECOVERY', body: 'Funding, governance and insurance.' },
    { kicker: '4 · END LEVEL', body: 'Above the line: better building or planning; below: long-term damage.' },
    { kicker: '5 · PRE-EVENT DIP', body: 'Preparedness actions and warnings (on some versions).' },
  ], 3, { card: { size: 15, pad: 13 }, vgap: 12 })];
  F('03-park-model', 'Reading the shape of the Park model', 'One community, one event', blocks,
    'An illustrative Park model curve of quality of life against time: a small pre-event dip, a steep fall at the hazard event, then relief, rehabilitation and reconstruction phases, ending above the pre-event level. Five numbered notes explain what the depth of the fall, length of relief, slope of recovery, end level and pre-event dip each show.',
    'Read the curve\'s depth, length, slope and end level, not just the phase names.', H.park, { gap: 16 });
}

// 04 Management cycle
{
  const blocks = [(y) => {
    const cx = 300, cy = y + 190, R = 140;
    let s = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${C.panelEdge}" stroke-width="10"/>`;
    const st = [['Preparedness', -90, C.tealLight, C.tealDark], ['Response', 0, C.cream, C.olive], ['Recovery', 90, C.cream, C.olive], ['Mitigation', 180, C.tealLight, C.tealDark]];
    for (let i = 0; i < 4; i++) {
      const a0 = (-90 + i * 90 + 22) * Math.PI / 180, a1 = (-90 + i * 90 + 68) * Math.PI / 180;
      s += path(`M${cx + R * Math.cos(a0)},${cy + R * Math.sin(a0)} A${R},${R} 0 0 1 ${cx + R * Math.cos(a1)},${cy + R * Math.sin(a1)}`, { w: 4, extra: 'marker-end="url(#ah)"' });
    }
    st.forEach(([lab, deg, f, e]) => { const a = deg * Math.PI / 180, x = cx + R * Math.cos(a), yy = cy + R * Math.sin(a); s += `<rect x="${x - 82}" y="${yy - 24}" width="164" height="48" rx="24" fill="${f}" stroke="${e}" stroke-width="3"/>` + T(x, yy + 7, lab, { size: 18, weight: 700, anchor: 'middle' }); });
    s += T(cx, cy - 6, 'lessons from one event', { size: 15, anchor: 'middle', fill: C.muted }) + T(cx, cy + 14, 'shape the next', { size: 15, anchor: 'middle', fill: C.muted });
    s += card(520, y + 10, 350, { title: 'Park model', body: 'What happens to one community after one event.', size: 16, tsize: 18, fill: C.panel }).s;
    s += card(520, y + 130, 350, { title: 'Management cycle', body: 'How management should improve between events.', size: 16, tsize: 18, fill: C.panel }).s;
    s += card(520, y + 250, 350, { title: '"Moved round the cycle"', body: 'E.g. rebuilding with new building codes is mitigation for the next event.', size: 16, tsize: 18, fill: C.cream, edge: C.olive }).s;
    return { s, h: 380 };
  }];
  F('04-management-cycle', 'The hazard management cycle', 'Preparedness, response, recovery, mitigation', blocks,
    'A cycle of four stages, preparedness, response, recovery and mitigation, with arrows running round. Beside it, the Park model describes one community after one event while the cycle describes improvement between events; rebuilding with new building codes counts as mitigation for the next event.',
    'The cycle turns recovery into preparation for the next event.', H.park);
}

// 05 Patterns table
F('05-describing-hazard-patterns', 'Describing hazard patterns', 'The specification\'s terms as a checklist', [
  (y) => table(y, [{ w: 0.85, head: '' }, { w: 1.25, head: 'Volcanic', hfill: C.cream }, { w: 1.25, head: 'Seismic', hfill: C.teal }, { w: 1.25, head: 'Tropical storms', hfill: C.tealLight }], [
    ['Spatial distribution', 'Plate margins and over magma plumes', 'Plate margins', 'Warm oceans about 5-30° latitude; track west, then poleward'],
    ['Magnitude', 'Volcanic Explosivity Index (VEI)', 'Moment magnitude: logarithmic', 'Saffir-Simpson scale'],
    ['Frequency and regularity', 'Some erupt almost continuously; others after centuries of dormancy', 'Small quakes far more frequent than large', 'A season: regular timing, not exact track'],
    ['Predictability', 'Measurable warnings', 'Timing random; location only as a probability', 'Tracks forecast days ahead'],
  ], { size: 15, hsize: 17, pad: 12 }),
  (y) => {
    let s = T(30, y + 14, 'MOMENT MAGNITUDE: EACH WHOLE NUMBER ≈ 32 TIMES MORE ENERGY', { size: 15, weight: 700, fill: C.muted });
    const xs = [60, 260, 460, 660, 820];
    ['M4', 'M5', 'M6', 'M7', 'M8'].forEach((m, i) => { s += `<circle cx="${xs[i]}" cy="${y + 64}" r="${16 + i * 4}" fill="${i === 4 ? C.mustard : C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + T(xs[i], y + 70, m, { size: 16, weight: 700, anchor: 'middle' }); if (i < 4) s += arrow(xs[i] + 22 + i * 4, y + 64, xs[i + 1] - 22 - (i + 1) * 4, y + 64, { w: 3 }) + T((xs[i] + xs[i + 1]) / 2, y + 52, 'x 32', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }); });
    s += T(450, y + 120, 'M8 is not "twice" M4: it is 32 x 32 x 32 x 32 times the energy', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    return { s, h: 128 };
  },
], 'Table describing volcanic, seismic and storm hazards by spatial distribution, magnitude scale, frequency and regularity, and predictability. Below, a chain from M4 to M8 shows each whole number of moment magnitude releases about 32 times more energy, so M8 is far more than twice M4.',
'Describe each hazard by distribution, magnitude, frequency, regularity and predictability.', H.pat, { gap: 18 });

// 06 Case studies table
F('06-case-study-bank', 'A bank of recent case studies', 'Organise each under the same headings so they can be compared', [
  (y) => chips(y, ['physical cause', 'primary and secondary impacts', 'short- and long-term responses', 'preparedness, mitigation, prevention, adaptation'], { size: 15, fill: C.cream, edge: C.olive }),
  (y) => table(y, [{ w: 0.95, head: 'Event' }, { w: 0.75, head: 'Deaths' }, { w: 2, head: 'Key points from the lesson' }], [
    ['Soufrière Hills, Montserrat (from 1995)', '19 (pyroclastic flows, June 1997)', 'Destructive margin; Plymouth abandoned and buried; southern exclusion zone; Montserrat Volcano Observatory sets hazard zones'],
    ['Christchurch, NZ (22 Feb 2011)', '185', 'Shallow earthquake; liquefaction in eastern suburbs; centre rebuilt to stricter standards'],
    ['Cyclone Nargis, Myanmar (May 2008)', 'Around 138,000 dead or missing', 'Storm surge across the low Irrawaddy delta; foreign aid at first restricted'],
    ['Hurricane Katrina, USA (2005)', 'More than 1,800', 'Levees failed in New Orleans; poorer residents could not evacuate'],
    ['Camp Fire, California (Nov 2018)', '85', 'Paradise largely destroyed; started by transmission equipment; dry fuel, strong winds'],
    ['Tōhoku, Japan (11 Mar 2011)', 'Around 18,000 dead or missing', 'Magnitude 9.0; tsunami; Fukushima Daiichi accident: multi-hazard setting'],
  ], { size: 15, hsize: 17, pad: 11 }),
], 'Table of six recent hazard case studies with dates, deaths and key points: Soufrière Hills (from 1995), Christchurch (2011), Cyclone Nargis (2008), Hurricane Katrina (2005), the Camp Fire (2018) and the Tōhoku earthquake and tsunami (2011). Chips list the common headings for organising each.',
'Use the same headings for every case study so they can be compared.', H.cs, { gap: 16 });

// 07 Assess paragraph
F('07-assess-development', 'An "assess" paragraph on tropical storms', 'How important is level of development in determining impacts?', [
  (y) => steps(y, [
    { title: 'Claim (links to risk)', body: 'Development shapes impacts because it determines vulnerability and capacity to cope.' },
    { title: 'Specific evidence: Nargis', body: 'Surge on a dense, low-lying delta; lightly built homes; warnings missed villages; delayed foreign aid lengthened relief.' },
    { title: 'Counter-evidence: Katrina', body: 'New Orleans largely below sea level; levees failed; residents without cars: over 1,800 deaths in a high-income country.', fill: C.panel },
    { title: 'Weighted judgement', body: 'Physical factors (surge height, coastal shape, track) set the scale of threat; development decides how much becomes disaster.', fill: C.cream },
  ], { size: 16, tsize: 19, highlight: 3 }),
], 'Four steps of the model "assess" paragraph: a claim linking development to vulnerability, evidence from Cyclone Nargis, counter-evidence from Hurricane Katrina, and a weighted judgement that physical factors set the threat while development decides how much becomes disaster.',
'Claim, named evidence, counter-case, then a weighted judgement.', H.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
