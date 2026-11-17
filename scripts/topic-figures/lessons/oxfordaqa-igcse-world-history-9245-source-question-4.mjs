// Topic figures for oxfordaqa-igcse-world-history-9245-source-question-4
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

export const slug = 'oxfordaqa-igcse-world-history-9245-source-question-4';
const H = {
  diff: '## What makes Question 4 different',
  pre: '## Preparing the pre-release for Question 4',
  meth: '## A four-step method in the exam',
  link: '## Ways of linking sources',
  we: '## Worked example: Peacemaking and the League of Nations',
};
const SRC = (x, y, L, sub, pre) => `<rect x="${x}" y="${y}" width="140" height="84" rx="10" fill="${pre ? C.tealLight : C.cream}" stroke="${pre ? C.tealDark : C.olive}" stroke-width="2.5"/>` + T(x + 70, y + 36, `Source ${L}`, { size: 18, weight: 700, anchor: 'middle' }) + T(x + 70, y + 62, sub, { size: 15, weight: 600, anchor: 'middle', fill: pre ? C.tealDark : C.olive });

// 01 What Q4 rewards
F('01-question-4-at-a-glance', 'Question 4: the whole booklet', '12 marks, AO3: a judgement from a range of sources', [
  (y) => {
    let s = '';
    ['A', 'B', 'C', 'D', 'E'].forEach((L, i) => { s += SRC(55 + i * 162, y, L, i < 3 ? 'pre-released' : 'unseen', i < 3); s += arrow(125 + i * 162, y + 90, 450 + (125 + i * 162 - 450) * 0.3, y + 146, { w: 3 }); });
    const j = card(250, y + 152, 400, { title: 'Your judgement on the issue', body: 'Usually a statement ("The main reason... was...") or "how far"', align: 'middle', size: 16, tsize: 20, fill: C.mustard, edge: C.ink, bfill: C.ink });
    s += j.s;
    const k = card(690, y + 152, 180, { title: 'Own knowledge', align: 'middle', size: 16, tsize: 18, minH: j.h, vcenter: true });
    s += k.s + arrow(684, y + 152 + j.h / 2, 656, y + 152 + j.h / 2, { w: 3 });
    return { s, h: 152 + j.h };
  },
  LBL('WHAT IT REWARDS'),
  (y) => row(y, [
    { kicker: '1', title: 'Range', body: 'Several sources, both pre-released and unseen.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '2', title: 'Linking', body: 'How sources support, contradict or explain one another.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '3', title: 'Judgement', body: 'An overall conclusion, supported by sources and own knowledge.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { card: { size: 16, tsize: 20 } }),
], 'Five sources, three pre-released (A to C) and two unseen (D and E), plus own knowledge, feed into a judgement on the issue. Question 4 rewards range, linking and judgement.',
'Use the whole booklet: range, links and a judgement.', H.diff, { gap: 16 });

// 02 Pre-release preparation
F('02-preparing-the-pre-release', 'Preparing the pre-release', 'Released 1 February (May/June) or 1 July (October/November); no notes in the exam', [
  (y) => steps(y, [
    { title: 'List the issues each source could serve', body: 'A Corfu cartoon could serve the League\'s weaknesses, great-power behaviour or Mussolini\'s foreign policy.' },
    { title: 'Decide which side of likely debates it supports', body: 'E.g. support or challenge "the League succeeded in the 1920s"?' },
    { title: 'Learn the provenance and its consequences', body: 'Who made it, when, and what that makes it good evidence of.' },
    { title: 'Rehearse links', body: 'Which sources agree, which disagree, and why.' },
    { title: 'Learn knowledge that extends each source', body: 'One or two precise facts per source, ready to add.' },
  ], { size: 16, tsize: 19 }),
], 'Five preparation steps for the three pre-released sources: list the issues each could serve, decide which side of likely debates it supports, learn the provenance, rehearse links between sources, and learn one or two facts to extend each.',
'Know each pre-released source well enough to use it quickly on any issue.', H.pre);

// 03 Four-step method
F('03-four-step-method', 'Four steps in the exam', 'Suggested timings (bar widths to scale)', [
  (y) => segbar(y, [
    { label: '1', sub: '1 min', frac: 1, fill: C.tealLight },
    { label: '2 · Sort', sub: '3 min', frac: 3, fill: C.teal },
    { label: '3 · Write linked paragraphs', sub: 'about 12 minutes', frac: 12, fill: C.cream },
    { label: '4 · Judge', sub: '2 min', frac: 2, fill: C.mustard },
  ], { h: 80, size: 17 }),
  (y) => grid(y, [
    { kicker: 'STEP 1', title: 'Read the issue precisely', body: 'Underline key words ("main reason", "successful", "1920s"). What counts as agreeing or disagreeing?' },
    { kicker: 'STEP 2', title: 'Sort the sources', body: 'Quick grid: supports / challenges / either way, each with a one-word reason.' },
    { kicker: 'STEP 3', title: 'Organise by argument, not by source', body: 'Each paragraph: a point, two or more sources together, provenance where it matters, own knowledge.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'STEP 4', title: 'Judge', body: 'A clear answer: which evidence is weightier, and why.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], 2, { card: { size: 16, tsize: 19 } }),
], 'Time bar for the four steps: about 1 minute reading the issue, 3 sorting the sources, 12 writing linked paragraphs and 2 judging. Cards explain each step.',
'Spend most of the time writing paragraphs organised by argument.', H.meth, { gap: 16 });

// 04 Ways of linking
{
  const kinds = [
    ['Corroboration', 'A\'s claim supported by D, written from the opposite side.', 'eq'],
    ['Contradiction explained', 'B and E disagree because one is a public statement, the other a private letter.', 'x'],
    ['Cause and effect', 'C shows the decision; E shows its consequences two years later.', 'ce'],
    ['Scale or detail', 'A gives the overall policy; D shows how it worked in one case.', 'sc'],
    ['Context fills a gap', 'No source mentions something important; own knowledge supplies it.', 'gap'],
  ];
  const mini = (x, y, k) => {
    const b = (bx, lab, fill = C.tealLight) => `<rect x="${bx}" y="${y}" width="52" height="40" rx="7" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>` + T(bx + 26, y + 27, lab, { size: 17, weight: 700, anchor: 'middle' });
    if (k === 'eq') return b(x, 'A') + b(x + 112, 'D') + `<line x1="${x + 60}" y1="${y + 14}" x2="${x + 104}" y2="${y + 14}" stroke="${C.tealDark}" stroke-width="4"/><line x1="${x + 60}" y1="${y + 26}" x2="${x + 104}" y2="${y + 26}" stroke="${C.tealDark}" stroke-width="4"/>`;
    if (k === 'x') return b(x, 'B', C.cream) + b(x + 112, 'E', C.cream) + T(x + 82, y + 30, '≠', { size: 28, weight: 700, anchor: 'middle', fill: C.rust });
    if (k === 'ce') return b(x, 'C') + b(x + 112, 'E') + arrow(x + 58, y + 20, x + 106, y + 20, { w: 3.5 });
    if (k === 'sc') return `<rect x="${x}" y="${y - 6}" width="70" height="52" rx="7" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + T(x + 35, y + 27, 'A', { size: 17, weight: 700, anchor: 'middle' }) + `<rect x="${x + 130}" y="${y + 8}" width="34" height="26" rx="5" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + T(x + 147, y + 27, 'D', { size: 15, weight: 700, anchor: 'middle' }) + path(`M${x + 72},${y + 4} L${x + 128},${y + 12} M${x + 72},${y + 36} L${x + 128},${y + 30}`, { w: 2, stroke: C.muted });
    return b(x, 'A') + `<rect x="${x + 60}" y="${y}" width="52" height="40" rx="7" fill="${C.panel}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="6 4"/>` + T(x + 86, y + 27, '?', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }) + b(x + 120, 'B');
  };
  const blocks = [(y) => {
    let s = '', cy = y;
    kinds.forEach(([t0, b, k]) => {
      const c = card(250, cy, 620, { title: t0, body: b, size: 16, tsize: 19, pad: 14, minH: 78, vcenter: true });
      s += panel(30, cy, 205, c.h, C.panel) + mini(50, cy + c.h / 2 - 20, k) + c.s; cy += c.h + 12;
    });
    return { s, h: cy - y - 12 };
  }];
  F('04-ways-of-linking', 'Five ways to link sources', null, blocks,
    'Five link types, each with a small diagram: corroboration (two sources agree), contradiction explained by provenance, cause and effect, scale or detail (overall policy and one case), and context filling a gap the sources leave.',
    'Link sources by agreement, explained disagreement, cause, scale or a gap.', H.link);
}

// 05 Sorting the worked example
F('05-sorting-the-sources', 'Step 2 in action: sorting the sources', '"The League was successful in keeping peace in the 1920s" (invented sources)', [
  (y) => table(y, [{ w: 1, head: 'Supports the view', hfill: C.teal }, { w: 1, head: 'Challenges the view', hfill: C.cream }, { w: 1, head: 'Used both ways', hfill: C.sand }], [
    ['**A** · Aaland settled; Swedish paper shows Swedes accepting', '**B** · Corfu: Greece paid; "size of your navy"', '**D** · Bulgaria (1925) went well...'],
    ['**C** · health and refugee work (League official, would praise)', '**E** · Poland kept Vilna; League not even mentioned', '...but only "because both parties were small"'],
  ], { size: 16, hsize: 18, firstBold: false, firstFill: false }),
  LBL('USE PROVENANCE TO WEIGH'),
  (y) => row(y, [
    { title: 'Source A: strong', body: 'From the losing side, yet shows the decision accepted.', fill: C.tealLight, edge: C.tealDark },
    { title: 'Source C: check it', body: 'A League official would want to praise its work; own knowledge confirms the health work.', fill: C.cream, edge: C.olive },
    { title: 'Source D: weighty', body: 'A private letter by a diplomat with no reason to flatter the League.', fill: C.tealLight, edge: C.tealDark },
  ], { card: { size: 16, tsize: 18 } }),
], 'Sorting grid for the worked example: Sources A and C support the view that the League kept the peace, B and E challenge it, and D can be used both ways. Below, provenance makes A strong, C in need of checking and D weighty.',
'Sort first, then let provenance decide how much each source can bear.', H.we, { gap: 16 });

// 06 Answer structure
F('06-answer-structure', 'The worked answer, paragraph by paragraph', null, [
  (y) => stack(y, [
    { kicker: 'PARAGRAPH 1: REAL SUCCESSES', title: 'Sources A + D + C', body: 'Aaland Islands; Greek-Bulgarian dispute (1925); health and refugee work. Own knowledge: Upper Silesia plebiscite (1921).', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PARAGRAPH 2: THE LIMITS', title: 'Sources D + B + E', body: 'Success only when "both parties were small"; Corfu (1923); Poland kept Vilna. Own knowledge: Locarno (1925) and Kellogg-Briand (1928) outside the League; the USA never joined.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'JUDGEMENT', title: 'Largely disagree', body: 'Success in minor disputes between small powers; failure when a great power or a determined state used force.', fill: C.mustard, edge: C.ink, kfill: C.ink, bfill: C.ink },
  ], { arrows: true, gap: 40, card: { size: 16, tsize: 20 } }),
  (y) => chips(y, ['all five sources used', 'linked in each paragraph', 'provenance weighs A and D', 'own knowledge throughout', 'judgement says why'], { size: 15, fill: C.panel, edge: C.tealDark }),
], 'The model answer as three linked blocks: a paragraph on successes using Sources A, D and C, a paragraph on limits using D, B and E, each with own knowledge, and a judgement that largely disagrees. Chips list what the answer does.',
'Two argued paragraphs, each linking several sources, then a reasoned judgement.', H.we, { gap: 16 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
