// Topic figures for oxfordaqa-a-level-geography-9635-resource-security
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

export const slug = 'oxfordaqa-a-level-geography-9635-resource-security';
const H = {
  what: '## What makes something a resource',
  stock: '## Evaluating stock resources',
  eia: '## Environmental impact assessment',
  phys: '## Physical geography and supply',
  sch: '## Major schemes and their impacts',
  we: '## Worked example: an annotated answer',
};

// 01 Stock and flow
F('01-stock-and-flow', 'Stock and flow resources', '"Resources are not, they become" (Zimmermann)', [
  (y) => {
    let s = '';
    // stock: tank draining
    s += panel(30, y, 410, 300, C.cream, C.olive) + T(50, y + 38, 'STOCK', { size: 15, weight: 700, fill: C.olive }) + T(50, y + 64, 'Finite on human timescales', { size: 20, weight: 700 });
    s += `<rect x="130" y="${y + 100}" width="200" height="130" rx="8" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/><rect x="133" y="${y + 170}" width="194" height="57" fill="${C.rockDark}"/>`;
    s += arrow(330, y + 210, 400, y + 210, { w: 5, color: C.rust, marker: 'ahR' }) + T(366, y + 196, 'use', { size: 16, weight: 600, anchor: 'middle', fill: C.rust });
    s += T(230, y + 156, 'no refill', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
    s += T(50, y + 266, 'Fossil fuels, uranium, fossil groundwater', { size: 16, fill: C.ink });
    // flow
    s += panel(460, y, 410, 300, C.tealLight, C.tealDark) + T(480, y + 38, 'FLOW', { size: 15, weight: 700, fill: C.tealDark }) + T(480, y + 64, 'Renewed continuously', { size: 20, weight: 700 });
    s += path(`M520,${y + 120} C580,${y + 90} 620,${y + 150} 680,${y + 120} C740,${y + 90} 780,${y + 150} 830,${y + 120}`, { stroke: C.blue, w: 6 });
    s += arrow(500, y + 170, 840, y + 170, { w: 5, color: C.tealDark, marker: 'ahT' }) + T(670, y + 200, 'always arriving, always passing', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
    s += T(480, y + 266, 'Sunlight, wind, river flow', { size: 16, fill: C.ink });
    return { s, h: 300 };
  },
  (y) => note(y, 'Flow can become stock-like', 'An aquifer pumped faster than it recharges behaves as a finite store.', { size: 17 }),
  (y) => row(y, [
    { title: 'Why "they become" matters', body: 'Oil was not a resource until technology and demand gave it value. So reserves grow, frontiers move, and a resource can lose value when a substitute appears.', fill: C.panel },
  ], { card: { size: 16, tsize: 18 } }),
], 'Two panels: stock resources such as fossil fuels, uranium and fossil groundwater are finite on human timescales, like a tank with no refill; flow resources such as sunlight, wind and river flow are renewed continuously. A note says an over-pumped aquifer becomes stock-like.',
'Stock resources run down; flow resources renew, unless used faster than they recharge.', H.what, { gap: 16 });

// 02 McKelvey box
{
  const blocks = [(y) => {
    const gx = 230, gy = y + 50, cw = 155, rh = 105;
    let s = '';
    const cats = ['Measured', 'Indicated', 'Inferred', 'Possible'];
    cats.forEach((c, i) => { s += T(gx + i * cw + cw / 2, gy - 14, c, { size: 17, weight: 700, anchor: 'middle' }); });
    s += arrow(gx, gy - 40, gx + 4 * cw, gy - 40, { w: 3 }) + T(gx, gy - 48, 'high', { size: 15, fill: C.muted }) + T(gx + 4 * cw - 22, gy - 48, 'low', { size: 15, fill: C.muted, anchor: 'end' }) + T(gx + 2 * cw, gy - 48, 'GEOLOGICAL CERTAINTY', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
    s += `<rect x="${gx}" y="${gy}" width="${2 * cw}" height="${rh}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + `<rect x="${gx + 2 * cw}" y="${gy}" width="${2 * cw}" height="${rh}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + `<rect x="${gx}" y="${gy + rh}" width="${4 * cw}" height="${rh}" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
    for (let c = 1; c < 4; c++) if (c !== 2) s += `<line x1="${gx + c * cw}" y1="${gy - 6}" x2="${gx + c * cw}" y2="${gy + 10}" stroke="${C.ink}" stroke-width="2"/>`;
    s += T(gx + cw, gy + rh / 2 - 2, 'RESERVES', { size: 20, weight: 700, anchor: 'middle' }) + T(gx + cw, gy + rh / 2 + 22, 'well known and economic', { size: 15, anchor: 'middle' });
    s += T(gx + 3 * cw, gy + rh / 2 - 2, 'Economic but less certain', { size: 16, anchor: 'middle', weight: 600 }) + T(gx + 3 * cw, gy + rh / 2 + 20, '(inferred and possible resources)', { size: 15, anchor: 'middle', fill: C.muted }) + T(gx + 2.4 * cw, gy + rh * 1.5 + 6, 'Not economic at current prices and technology', { size: 16, anchor: 'middle', fill: C.muted });
    s += para(210, gy + rh / 2 - 8, '**Economic**', 170, { size: 17, anchor: 'end', fill: C.ink }).s + para(210, gy + rh * 1.5 - 8, '**Not yet economic**', 170, { size: 17, anchor: 'end', fill: C.ink }).s;
    s += `<line x1="${gx - 6}" y1="${gy + rh}" x2="${gx + 4 * cw + 6}" y2="${gy + rh}" stroke="${C.rust}" stroke-width="5" stroke-dasharray="12 7"/>`;
    s += arrow(gx + cw * 0.6, gy + rh * 1.75, gx + cw * 0.6, gy + rh * 0.8, { w: 5, color: C.olive, marker: 'ahO' });
    s += T(gx + cw * 0.6 + 14, gy + rh * 1.85 + 4, '', {});
    return { s, h: 2 * rh + 50 };
  },
  (y) => row(y, [
    { title: 'Moving the boundary', body: 'When prices rise or technology improves, material crosses the economic boundary (dashed) and becomes a reserve, without any new discovery.', fill: C.cream, edge: C.olive },
    { title: 'Moving right to left', body: 'Exploration raises geological certainty: possible → inferred → indicated → measured.', fill: C.tealLight, edge: C.tealDark },
  ], { card: { size: 16, tsize: 18 } })];
  F('02-mckelvey-box', 'The McKelvey box', 'Classifying stock resources', blocks,
    'A McKelvey box with geological certainty across the top (measured, indicated, inferred, possible) and economic feasibility down the side. Only well-known, economic material in the top-left is a reserve. An arrow shows material crossing the dashed economic boundary when prices rise or technology improves.',
    'Reserves are only what is both well known and economic; the boundary moves with price and technology.', H.stock);
}

// 03 R/P ratio and development over time
F('03-reserves-to-production', 'Reserves-to-production: a snapshot, not a countdown', 'Invented figures from the lesson', [
  (y) => row(y, [
    { kicker: 'PROVEN RESERVES', title: '2,400 million barrels', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PRODUCTION', title: '120 million barrels a year', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'R/P RATIO', title: '2,400 / 120 = 20 years', align: 'middle', fill: C.mustard, edge: C.ink, kfill: C.ink },
  ], { arrows: true, gap: 40, card: { size: 16, tsize: 19 } }),
  (y) => row(y, [
    { title: 'Reserves are revised', body: 'As exploration continues and prices change.' },
    { title: 'Production changes', body: 'Output rates rise and fall.' },
    { title: 'So it is a snapshot', body: 'Of the present balance between known supply and output: the oil does not run out in 20 years.', fill: C.cream, edge: C.olive },
  ], { card: { size: 16, tsize: 18 } }),
  LBL('DEVELOPMENT OVER TIME: EXPLORATION → EXPLOITATION → DEVELOPMENT'),
  (y) => note(y, 'The resource frontier moves into harder places', 'Deep-water fields off Brazil, the Arctic, Canada\'s oil sands: as technology and prices allow.', { size: 16, fill: C.panel, edge: C.panelEdge }),
  (y) => {
    let s = panel(30, y, 840, 250);
    const x0 = 80, x1 = 840, base = y + 200;
    s += arrow(x0, base, x1, base, { w: 2.5 }) + arrow(x0, base, x0, y + 30, { w: 2.5 });
    s += T(x1, base + 26, 'time', { size: 15, anchor: 'end', fill: C.muted }) + `<text transform="translate(60,${y + 120}) rotate(-90)" text-anchor="middle" font-size="15" fill="${C.muted}">output</text>`;
    s += path(`M${x0 + 10},${base - 6} C${x0 + 200},${base - 10} ${x0 + 260},${y + 50} ${x0 + 380},${y + 50} C${x0 + 500},${y + 50} ${x0 + 560},${base - 40} ${x1 - 20},${base - 60}`, { stroke: C.tealDark, w: 5 });
    s += `<line x1="${x0 + 380}" y1="${y + 50}" x2="${x0 + 380}" y2="${base}" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="6 5"/>` + T(x0 + 390, y + 44, 'resource peak', { size: 16, weight: 700, fill: C.rust });
    s += T(x1 - 10, y + 26, 'Illustrative shape only', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    s += T(450, base + 40, 'The peak date depends as much on economics and demand as on geology', { size: 15, anchor: 'middle', fill: C.muted });
    return { s, h: 250 };
  },
], 'Worked ratio: 2,400 million barrels of reserves divided by 120 million barrels a year gives 20 years, but reserves are revised and production changes, so it is only a snapshot. Notes cover development over time and the moving resource frontier, and an illustrative curve shows output rising to a resource peak, then declining.',
'Twenty years of reserves at today\'s output is not twenty years until the oil runs out.', H.stock, { gap: 16 });

// 04 EIA stages
F('04-eia-stages', 'Environmental impact assessment', 'A process, not a single report', [
  (y) => steps(y, [
    { title: 'Screening', body: 'Does the project need a full assessment?' },
    { title: 'Scoping', body: 'Which impacts matter most, e.g. on water, ecosystems or communities?' },
    { title: 'Baseline study', body: 'Record conditions before the project.' },
    { title: 'Prediction', body: 'Estimate the size and duration of impacts.' },
    { title: 'Mitigation', body: 'Propose ways to avoid or reduce harm.' },
    { title: 'Consultation and decision', body: 'Involve the public and authorities before approval.', fill: C.tealLight },
    { title: 'Monitoring', body: 'Check impacts once the project runs.', fill: C.cream },
  ], { size: 15, tsize: 17, pad: 11, gap: 8 }),
  (y) => note(y, 'Evaluate it as a tool', 'EIA improves decisions only if it is independent, if consultation genuinely includes affected groups, and if monitoring is enforced.', { size: 16 }),
], 'Seven numbered stages of an environmental impact assessment in sequence: screening, scoping, baseline study, prediction, mitigation, consultation and decision, and monitoring. A note says it only improves decisions if independent, inclusive and enforced.',
'Seven stages from screening to monitoring; its value depends on independence and enforcement.', H.eia, { gap: 16 });

// 05 Physical controls cross-section
{
  const blocks = [(y) => {
    let s = panel(30, y, 840, 410, '#eef3f7');
    const g = y + 210;
    // terrain profile: mountains left, plain, volcano right
    const prof = `M32,${g - 120} L90,${g - 160} L150,${g - 110} L210,${g - 40} L330,${g} L560,${g} L660,${g - 30} L720,${g - 110} L745,${g - 115} L770,${g - 105} L868,${g - 20}`;
    s += `<path d="${prof} L868,${y + 408} L32,${y + 408} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
    // aquifer layer (permeable) under plain
    s += `<path d="M230,${g + 30} L600,${g + 30} L600,${g + 70} L230,${g + 70} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>` + `<path d="M230,${g + 70} L600,${g + 70} L600,${g + 90} L230,${g + 90} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
    s += T(415, g + 56, 'permeable rock: aquifer', { size: 15, weight: 700, anchor: 'middle' });
    // sedimentary basin with oil
    s += `<path d="M250,${g + 108} Q415,${g + 230} 580,${g + 108} Q415,${g + 150} 250,${g + 108} Z" fill="${C.ink}" opacity="0.85"/>` + T(240, g + 150, 'sedimentary basin:', { size: 15, weight: 700, anchor: 'end' }) + T(240, g + 168, 'oil, gas, coal', { size: 15, weight: 700, anchor: 'end' });
    // river steep in mountains
    s += path(`M120,${g - 132} L170,${g - 85} L205,${g - 46} L250,${g - 14}`, { stroke: C.blue, w: 6 });
    s += `<rect x="186" y="${g - 78}" width="12" height="30" fill="${C.ink}"/>`;
    // volcano heat
    s += `<path d="M745,${g - 112} L745,${y + 340}" stroke="${C.rust}" stroke-width="10" opacity="0.75"/>` + `<ellipse cx="745" cy="${y + 360}" rx="60" ry="26" fill="${C.rust}" opacity="0.75"/>` + T(745, y + 366, 'heat', { size: 15, weight: 700, anchor: 'middle', fill: '#ffffff' });
    // rain and sun
    s += path(`M70,${y + 30} q20,-14 40,0 q20,-14 40,0 q0,16 -40,16 q-40,0 -40,-16 z`, { fill: C.panel, stroke: C.ink, w: 2.5 }) + [80, 100, 120, 140].map((x) => `<line x1="${x}" y1="${y + 56}" x2="${x - 6}" y2="${y + 72}" stroke="${C.blue}" stroke-width="2.5"/>`).join('');
    s += `<circle cx="480" cy="${y + 50}" r="20" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
    // labels
    const lab = (x, yy, t1, t2, anchor = 'start') => T(x, yy, t1, { size: 15, weight: 700, anchor }) + (t2 ? T(x, yy + 18, t2, { size: 15, anchor, fill: C.ink }) : '');
    s += lab(170, y + 48, 'Climate: rainfall amount,', 'reliability, evaporation');
    s += lab(510, y + 46, 'Sunshine and wind:', 'renewable potential');
    s += lab(30 + 200, g - 104, 'Steep, high-discharge', 'river: hydro-electric potential');
    s += lab(860, g - 150, 'Heat close to the surface:', 'geothermal (e.g. Iceland)', 'end');
    s += T(60, y + 400, 'Schematic, not to scale', { size: 15, fill: C.ink, italic: true });
    return { s, h: 410 };
  },
  (y) => table(y, [{ w: 0.6, head: 'Control' }, { w: 1.3, head: 'Water supply', hfill: C.teal }, { w: 1.3, head: 'Energy supply', hfill: C.cream }], [
    ['Climate', 'Rainfall amount, reliability and evaporation', 'Sunshine, wind and river regimes; temperature shapes demand'],
    ['Geology', 'Permeable rocks form aquifers; impermeable rocks favour reservoirs', 'Sedimentary basins hold oil, gas and coal; geothermal needs heat near the surface'],
    ['Drainage', 'River basins collect water; define where transfers are needed', 'Steep, high-discharge rivers give hydro-electric potential'],
  ], { size: 15, hsize: 17, pad: 12 })];
  F('05-physical-controls', 'How physical geography controls supply', 'Climate, geology and drainage, for water and energy', blocks,
    'Schematic cross-section, not to scale: rain and sun above, a steep mountain river with hydro-electric potential, a permeable aquifer beneath a plain, a sedimentary basin holding oil, gas and coal, and a volcano with heat near the surface for geothermal energy. A table summarises climate, geology and drainage controls on water and energy supply.',
    'The same physical controls, climate, geology and drainage, set both water and energy supply.', H.phys, { gap: 16 });
}

// 06 Aswan
F('06-aswan-high-dam', 'The Aswan High Dam, Egypt (completed 1970)', 'Benefits and costs of a major water scheme', [
  (y) => {
    let s = panel(30, y, 840, 170, C.tealLight, C.tealDark);
    s += path(`M60,${y + 100} L380,${y + 100}`, { stroke: C.blue, w: 26 }) + T(220, y + 70, 'Lake Nasser (reservoir)', { size: 17, weight: 700, anchor: 'middle' });
    s += `<rect x="382" y="${y + 60}" width="26" height="80" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/>` + T(395, y + 158, 'dam', { size: 15, weight: 700, anchor: 'middle' });
    s += path(`M410,${y + 100} L620,${y + 100}`, { stroke: C.blue, w: 12 }) + T(515, y + 86, 'Nile below the dam', { size: 15, weight: 600, anchor: 'middle', fill: C.blue }) + `<path d="M620,${y + 100} L710,${y + 60} L710,${y + 140} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>` + T(675, y + 106, 'delta', { size: 16, weight: 700, anchor: 'middle' }) + T(724, y + 92, 'less sediment:', { size: 15, weight: 600, fill: C.rust }) + T(724, y + 110, 'coast erodes', { size: 15, weight: 600, fill: C.rust });
    for (let i = 0; i < 10; i++) s += `<circle cx="${320 + (i % 5) * 12}" cy="${y + 112 + Math.floor(i / 5) * 8}" r="3.5" fill="${C.olive}"/>`;
    s += T(370, y + 148, 'sediment trapped', { size: 15, weight: 600, anchor: 'end', fill: C.olive });
    s += arrow(80, y + 30, 360, y + 30, { w: 3, color: C.tealDark, marker: 'ahT' }) + T(80, y + 22, 'Nile flow', { size: 15, weight: 600, fill: C.tealDark });
    s += T(50, y + 162, 'Schematic, not to scale', { size: 15, fill: C.muted, italic: true });
    return { s, h: 170 };
  },
  (y) => row(y, [
    { kicker: 'BENEFITS', title: 'Stored water and power', body: ['Stores water across years', 'Irrigates farmland', 'Generates hydro-electricity'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'COSTS', title: 'Sediment and people', body: ['Traps the Nile\'s sediment: the delta loses its natural supply and parts of the coast erode', 'Farmers rely more on artificial fertiliser', 'Nubian communities displaced as the reservoir filled'], bullets: true, fill: C.panel, edge: C.rust, kfill: C.rust },
  ], { fr: [1, 1.5], card: { size: 16, tsize: 18 }, vcenter: false }),
], 'Schematic, not to scale: the Nile flows into Lake Nasser behind the Aswan High Dam, where sediment is trapped, so less reaches the delta. Below, benefits (water stored across years, irrigation, hydro-electricity) and costs (delta and coastal erosion, more fertiliser, displaced Nubian communities).',
'The dam secures water and power but starves the delta of sediment.', H.sch, { gap: 16 });

// 07 Assess answer
F('07-scarcity-and-conflict', 'Does water scarcity inevitably lead to conflict?', 'Structure of the annotated 9-mark answer', [
  (y) => steps(y, [
    { title: 'Evidence for', body: 'Grand Ethiopian Renaissance Dam on the Blue Nile: disputes with Egypt and Sudan over how fast the reservoir fills.', fill: C.panel },
    { title: 'Counter-evidence', body: 'Indus Waters Treaty (1960, brokered by the World Bank) has survived despite wider India-Pakistan hostility.', fill: C.tealLight },
    { title: 'Scale', body: 'Within countries, conflict is often local (farmers and growing cities), usually resolved by pricing or allocation rules.' },
    { title: 'Alternative outcome', body: 'Desalination and virtual water trade can reduce pressure.' },
    { title: 'Judgement', body: 'Scarcity raises the risk of conflict, but institutions and technology decide whether that risk becomes conflict.', fill: C.cream },
  ], { size: 16, tsize: 18, highlight: 4 }),
  (y) => note(y, 'Remember the energy link', 'Desalination needs large amounts of energy, so its price and carbon footprint depend on how that energy is produced.', { size: 16, fill: C.panel, edge: C.panelEdge }),
], 'Five steps of the model answer: evidence for (the Grand Ethiopian Renaissance Dam dispute), counter-evidence (the Indus Waters Treaty since 1960), scale (local disputes resolved by rules), alternative outcomes (desalination, virtual water) and a judgement that institutions and technology decide whether risk becomes conflict.',
'Weigh evidence both ways, consider scale and alternatives, then judge.', H.we, { gap: 16 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
