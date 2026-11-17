import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-psychology-9685-research-methods-1';
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
  meth: '## Methods',
  sci: '## Scientific processes',
  eth: '## Ethics',
  data: '## Data handling and analysis',
  ex: '## Worked example: designing and analysing a study',
};

// 01 Three experiments
F('01-types-of-experiment', 'Three types of experiment', 'Who controls the IV, and where?', [
  (y) => row(y, [
    { kicker: 'LABORATORY', title: 'Controlled setting; researcher manipulates the IV', body: ['+ High control: cause and effect; easy to replicate', '− Artificial; demand characteristics'], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FIELD', kfill: C.olive, title: 'Natural setting; researcher still manipulates the IV', body: ['+ More natural behaviour', '− Less control; consent may be difficult'], fill: C.cream, edge: C.olive },
    { kicker: 'NATURAL', kfill: C.rust, title: 'The IV varies naturally, e.g. a new school policy', body: ['+ Variables that could not ethically be manipulated', '− No random allocation: groups may differ'], fill: '#f6e3d8', edge: C.rust },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 6 } }),
  (y) => {
    const x0 = 80, x1 = 820; let s = `<line x1="${x0}" y1="${y + 30}" x2="${x1}" y2="${y + 30}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)" marker-start="url(#ah)"/>`;
    s += T(x0, y + 62, 'more control', { size: 16, weight: 700, fill: C.tealDark }) + T(x1, y + 62, 'more natural', { size: 16, weight: 700, anchor: 'end', fill: C.rust });
    return { s, h: 66 };
  },
  lab('OTHER METHODS'),
  (y) => row(y, [
    { kicker: 'OBSERVATION', body: ['Naturalistic or controlled', 'Covert or overt', 'Participant or non-participant'], bullets: true },
    { kicker: 'SELF-REPORT', body: ['Questionnaires: quick, many people; social desirability', 'Structured interviews: easy to compare; unstructured: richer'], bullets: true },
    { kicker: 'CORRELATION', body: ['Two co-variables measured, not manipulated', 'Positive, negative or zero', 'No cause and effect'], bullets: true },
  ], { gap: 12, vcenter: false, card: { size: 15, gap: 4, pad: 16 } }),
],
'Laboratory experiments manipulate the IV in a controlled setting (cause and effect, but artificial); field experiments manipulate it in a natural setting (natural behaviour, less control); natural experiments use an IV that varies naturally (ethical, but no random allocation). An arrow runs from more control to more natural. Cards summarise observation, self-report and correlation.',
'Moving from laboratory to natural trades control for realism.', H2.meth);

// 02 Designs
F('02-experimental-designs', 'Three experimental designs', 'Each has a strength and a weakness', [
  (y) => {
    let s = '';
    const person = (x, yy, f) => `<circle cx="${x}" cy="${yy}" r="11" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
    const rowD = (yy, title, draw, weak, fix, f, e, fl = 'FIX') => {
      let r = panel(30, yy, 840, 150, f, e) + T(54, yy + 34, title, { size: 20, weight: 700 });
      r += draw(yy);
      r += T(470, yy + 34, 'WEAKNESS', { size: 15, weight: 700, fill: C.rust }) + para(470, yy + 56, weak, 380, { size: 16 }).s;
      r += T(470, yy + 98, fl, { size: 15, weight: 700, fill: C.tealDark }) + para(470, yy + 120, fix, 380, { size: 16 }).s;
      return r;
    };
    s += rowD(y, 'Independent groups', (yy) => {
      let r = T(80, yy + 70, 'A', { size: 16, weight: 700 }) + T(80, yy + 116, 'B', { size: 16, weight: 700 });
      for (let i = 0; i < 6; i++) { r += person(110 + i * 32, yy + 64, C.cream) + person(110 + i * 32, yy + 110, C.teal); }
      return r;
    }, 'Participant variables may differ between groups', '**Random allocation**', C.panel, C.panelEdge);
    s += rowD(y + 164, 'Repeated measures', (yy) => {
      let r = T(80, yy + 70, 'A', { size: 16, weight: 700 }) + T(80, yy + 116, 'B', { size: 16, weight: 700 });
      for (let i = 0; i < 6; i++) { r += person(110 + i * 32, yy + 64, C.mustard) + person(110 + i * 32, yy + 110, C.mustard); }
      r += path(`M300,${yy + 70} q20,22 0,40`, { w: 2.5, extra: 'marker-end="url(#ah)"' });
      return r + T(320, yy + 96, 'same people', { size: 15, fill: C.muted });
    }, 'Order effects: practice, fatigue', '**Counterbalancing**: half A then B, half B then A', C.panel, C.panelEdge);
    s += rowD(y + 328, 'Matched pairs', (yy) => {
      let r = T(80, yy + 70, 'A', { size: 16, weight: 700 }) + T(80, yy + 116, 'B', { size: 16, weight: 700 });
      const cols = [C.cream, C.teal, C.mustard, C.tealLight, C.sand, C.rock];
      for (let i = 0; i < 6; i++) { r += `<line x1="${110 + i * 32}" y1="${yy + 75}" x2="${110 + i * 32}" y2="${yy + 99}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="4 3"/>` + person(110 + i * 32, yy + 64, cols[i]) + person(110 + i * 32, yy + 110, cols[i]); }
      return r + T(300, yy + 96, 'matched, e.g. on IQ', { size: 15, fill: C.muted });
    }, 'Time-consuming; matching never perfect', 'Reduces participant variables **without order effects**', C.panel, C.panelEdge, 'STRENGTH');
    return { s, h: 478 };
  },
],
'Three rows. Independent groups: different people in conditions A and B; weakness, participant variables may differ; fix, random allocation. Repeated measures: the same people do both; weakness, order effects; fix, counterbalancing. Matched pairs: pairs matched on a variable such as IQ are split across conditions; weakness, time-consuming and never perfect.',
'Each design solves one problem and creates another, with its own fix.', H2.sci);

// 03 Sampling
F('03-sampling', 'Random v opportunity sampling', 'Population: the group to be studied. Sample: those who take part', [
  (y) => {
    let s = '';
    const pop = (x, picks, title, f, e) => {
      let r = panel(x, y, 405, 270, f, e) + T(x + 202, y + 34, title, { size: 20, weight: 700, anchor: 'middle' });
      let k = 0;
      for (let rr = 0; rr < 5; rr++) for (let c = 0; c < 10; c++) {
        const cx = x + 40 + c * 36, cy = y + 70 + rr * 40, pick = picks.includes(k);
        r += `<circle cx="${cx}" cy="${cy}" r="12" fill="${pick ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="${pick ? 2.5 : 1.5}"/>`;
        k++;
      }
      return r;
    };
    s += pop(30, [3, 11, 17, 24, 28, 36, 42, 47], 'Random', C.tealLight, C.tealDark);
    s += pop(465, [0, 1, 2, 10, 11, 12, 20, 21], 'Opportunity', C.cream, C.olive);
    s += T(232, y + 290, 'spread across the population', { size: 15, anchor: 'middle', fill: C.muted, italic: true }) + T(668, y + 290, 'whoever is nearby and available', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: 296 };
  },
  (y) => row(y, [
    { kicker: 'RANDOM', body: ['Every member has an **equal chance**, e.g. names drawn from a list', '+ Avoids researcher bias', '− Needs a full list; may still be unrepresentative by chance'], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'OPPORTUNITY', kfill: C.olive, body: ['Whoever is **available at the time**', '+ Quick and easy', '− Likely biased, so findings may not **generalise**'], fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, gap: 5 } }),
  (y) => note(y, '', 'Random **sampling** chooses who takes part; random **allocation** decides which condition they go in.', { align: 'middle', size: 17, fill: C.panel, edge: C.rust }),
],
'Two schematic populations of 50: in random sampling the chosen people are spread across the population; in opportunity sampling they are clustered among whoever is available. Random sampling gives everyone an equal chance and avoids researcher bias but needs a full list; opportunity sampling is quick but likely biased. Random sampling differs from random allocation.',
'Random sampling avoids bias; opportunity sampling is quick but may not generalise.', H2.sci);

// 04 Variables and operationalisation
F('04-variables', 'Variables and operationalisation', '', [
  (y) => {
    let s = '';
    const iv = card(30, y + 20, 250, { kicker: 'IV: MANIPULATED', title: 'Music or silence', align: 'middle', tsize: 19, minH: 100, vcenter: true, fill: C.cream, edge: C.olive });
    const dv = card(620, y + 20, 250, { kicker: 'DV: MEASURED', title: 'Words recalled', align: 'middle', tsize: 19, minH: 100, vcenter: true, fill: C.tealLight, edge: C.tealDark });
    s += iv.s + dv.s + arrow(286, y + 70, 614, y + 70, { w: 4 }) + T(450, y + 58, 'effect?', { size: 16, weight: 700, anchor: 'middle' });
    const ev = card(300, y + 150, 300, { kicker: 'EXTRANEOUS VARIABLES', kfill: C.rust, title: 'Could also affect the DV', body: 'control: standardised instructions, same room, same time of day', align: 'middle', size: 15, tsize: 17, fill: '#f6e3d8', edge: C.rust });
    s += ev.s + arrow(500, y + 146, 640, y + 126, { w: 3, color: C.rust, marker: 'ahR', dash: '7 5' });
    return { s, h: 150 + ev.h };
  },
  (y) => {
    const a = card(30, y, 250, { title: '“Memory”', align: 'middle', tsize: 22, minH: 90, vcenter: true, fill: '#eef1f0' });
    const b = card(340, y, 530, { kicker: 'OPERATIONALISED', title: 'The number of words correctly recalled from a list of 20 within two minutes', size: 16, tsize: 18, minH: 90, vcenter: true, fill: C.mustard, edge: C.ink, kfill: C.ink });
    return { s: a.s + b.s + arrow(286, y + 45, 334, y + 45, { w: 4 }), h: Math.max(a.h, b.h) };
  },
  (y) => row(y, [
    { kicker: 'DEMAND CHARACTERISTICS', title: 'Cues that let participants guess the aim', body: 'Reduce: keep the aim until the debrief; independent groups so each sees one condition' },
    { kicker: 'BEHAVIOURAL CATEGORIES', title: '“Aggression” → hitting, pushing, shouting', body: 'Clearly defined, observable, not overlapping' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
],
'The IV (music or silence) is manipulated and its effect on the DV (words recalled) is measured, while extraneous variables are controlled with standardised instructions, the same room and the same time of day. Memory is operationalised as the number of words correctly recalled from a list of 20 within two minutes. Cards explain demand characteristics and behavioural categories.',
'Operationalising turns a vague idea into something you can count.', H2.sci);

// 05 Ethics
F('05-ethics', 'Seven ethical issues', 'Named in the specification', [
  (y) => grid(y, [
    { kicker: 'CONSENT', title: 'Agree, knowing what is involved', body: 'consent form; parental consent for children' },
    { kicker: 'DECEPTION', kfill: C.rust, title: 'Misleading about the aim', body: 'only when necessary; full debrief' },
    { kicker: 'DEBRIEF', title: 'Explain the true aim at the end', body: 'reassure; offer to withdraw data' },
    { kicker: 'RIGHT TO WITHDRAW', title: 'Leave at any time, no penalty', body: 'stated clearly at the start' },
    { kicker: 'PROTECTION FROM HARM', title: 'No more risk than everyday life', body: 'stop if distressed; offer support' },
    { kicker: 'CONFIDENTIALITY', title: 'Data secure, not identifiable', body: 'numbers instead of names' },
    { kicker: 'PRIVACY', title: 'Not where people expect privacy', body: 'observe only in public places' },
    { kicker: 'FOR EACH ISSUE, KNOW', kfill: C.olive, title: 'What it means', body: 'and how researchers deal with it', fill: C.cream, edge: C.olive },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 16, tsize: 18, gap: 4, pad: 16 } }),
],
'Seven cards: consent (consent form, parental consent), deception (only when necessary, full debrief), debrief (explain the aim, offer to withdraw data), right to withdraw (stated at the start), protection from harm (stop if distressed), confidentiality (numbers not names) and privacy (observe only in public). For each, know what it means and how researchers deal with it.',
'Every ethical issue has a matching way to deal with it.', H2.eth);

// 06 Distributions
F('06-distributions', 'Normal and skewed distributions', 'Illustrative curves: where the mean, median and mode fall', [
  (y) => {
    let s = '';
    const plot = (x, title, d, marks, f, e) => {
      let r = panel(x, y, 268, 300, f, e) + T(x + 134, y + 34, title, { size: 19, weight: 700, anchor: 'middle' });
      const ox = x + 24, oy = y + 220;
      r += `<line x1="${ox}" y1="${oy}" x2="${ox + 220}" y2="${oy}" stroke="${C.ink}" stroke-width="2.5"/>`;
      r += path(d(ox, oy), { w: 4, stroke: C.tealDark, fill: C.tealLight });
      marks.forEach(([dx, l, c], i) => { r += `<line x1="${ox + dx}" y1="${oy}" x2="${ox + dx}" y2="${oy - 150 + i * 6}" stroke="${c}" stroke-width="2.5" stroke-dasharray="6 4"/>`; });
      return r;
    };
    s += plot(30, 'Normal', (ox, oy) => `M${ox},${oy} C${ox + 60},${oy} ${ox + 80},${oy - 140} ${ox + 110},${oy - 140} C${ox + 140},${oy - 140} ${ox + 160},${oy} ${ox + 220},${oy} Z`, [[110, '', C.ink]], C.panel);
    s += T(30 + 134, y + 250, 'mean = median = mode', { size: 16, weight: 700, anchor: 'middle' }) + T(30 + 134, y + 274, 'symmetrical, bell-shaped', { size: 15, anchor: 'middle', fill: C.muted });
    s += plot(316, 'Positive skew', (ox, oy) => `M${ox},${oy} C${ox + 20},${oy} ${ox + 40},${oy - 140} ${ox + 60},${oy - 140} C${ox + 100},${oy - 140} ${ox + 130},${oy - 20} ${ox + 220},${oy} Z`, [[60, 'mode', C.olive], [82, 'median', C.ink], [104, 'mean', C.rust]], C.cream, C.olive);
    s += T(316 + 134, y + 250, 'tail of high scores (right)', { size: 16, weight: 700, anchor: 'middle' }) + T(316 + 134, y + 274, 'mean above the median', { size: 15, anchor: 'middle', fill: C.muted });
    s += plot(602, 'Negative skew', (ox, oy) => `M${ox},${oy} C${ox + 90},${oy - 20} ${ox + 120},${oy - 140} ${ox + 160},${oy - 140} C${ox + 180},${oy - 140} ${ox + 200},${oy} ${ox + 220},${oy} Z`, [[160, 'mode', C.olive], [138, 'median', C.ink], [116, 'mean', C.rust]], C.panel);
    s += T(602 + 134, y + 250, 'tail of low scores (left)', { size: 16, weight: 700, anchor: 'middle' }) + T(602 + 134, y + 274, 'mean below the median', { size: 15, anchor: 'middle', fill: C.muted });
    return { s, h: 300 };
  },
  (y) => {
    let s = '';
    [['mode', C.olive], ['median', C.ink], ['mean', C.rust]].forEach(([l, c], i) => { const x = 250 + i * 150; s += `<line x1="${x}" y1="${y + 12}" x2="${x + 34}" y2="${y + 12}" stroke="${c}" stroke-width="3" stroke-dasharray="6 4"/>` + T(x + 44, y + 18, l, { size: 16, weight: 600 }); });
    return { s, h: 24 };
  },
  (y) => table(y, [{ w: 1, head: 'Measure' }, { w: 1.6, head: 'What it is' }, { w: 1.6, head: 'Point to remember' }], [
    ['Mean', 'Total divided by number of scores', 'Uses all the data; distorted by extreme scores'],
    ['Median', 'Middle value when ordered', 'Unaffected by extreme scores'],
    ['Mode', 'Most frequent value', 'Suits categorical data; may not be unique'],
    ['Range', 'Highest minus lowest', 'Quick; distorted by extreme scores'],
    ['Standard deviation', 'Average spread around the mean', 'Larger value = scores more spread out'],
  ], { size: 16 }),
],
'Three illustrative curves: a symmetrical normal distribution with mean, median and mode equal; a positive skew with a tail of high scores pulling the mean above the median; and a negative skew with a tail of low scores pulling the mean below the median. A table defines the mean, median, mode, range and standard deviation with a key point for each.',
'The tail pulls the mean towards it; the mode stays at the peak.', H2.data);

// 07 Worked example
F('07-worked-example', 'Worked example: music and recall', 'The lesson’s invented results for 8 participants per group', [
  (y) => table(y, [{ w: 0.8, head: '' }, { w: 1.75, head: 'Scores' }, { w: 0.95, head: 'Mean' }, { w: 1.4, head: 'Median' }, { w: 0.6, head: 'Mode' }, { w: 0.95, head: 'Range' }], [
    ['Music', '7, 8, 9, 9, 10, 11, 12, 14', '80 / 8 = **10**', '(9 + 10) / 2 = **9.5**', '9', '14 − 7 = 7'],
    ['Silence', '11, 12, 13, 13, 14, 15, 16, 18', '112 / 8 = **14**', '(13 + 14) / 2 = **13.5**', '13', '18 − 11 = 7'],
  ], { size: 16, hsize: 17 }),
  (y) => {
    let s = panel(30, y, 840, 280) + T(54, y + 34, 'MEAN WORDS RECALLED (OUT OF 20)', { size: 16, weight: 700, fill: C.tealDark });
    const ox = 200, oy = y + 240, Hh = 170, max = 16;
    s += `<line x1="${ox}" y1="${oy}" x2="${ox + 420}" y2="${oy}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - Hh}" stroke="${C.ink}" stroke-width="2.5"/>`;
    [0, 4, 8, 12, 16].forEach((v) => { const yy = oy - (Hh * v) / max; s += `<line x1="${ox - 6}" y1="${yy}" x2="${ox}" y2="${yy}" stroke="${C.ink}" stroke-width="2"/>` + T(ox - 12, yy + 5, String(v), { size: 15, anchor: 'end', fill: C.muted }); });
    const bar = (x, v, l, f) => `<rect x="${x}" y="${oy - (Hh * v) / max}" width="110" height="${(Hh * v) / max}" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + T(x + 55, oy + 24, l, { size: 17, weight: 700, anchor: 'middle' }) + T(x + 55, oy - (Hh * v) / max - 8, String(v), { size: 18, weight: 700, anchor: 'middle' });
    s += bar(260, 10, 'Music', C.cream) + bar(450, 14, 'Silence', C.teal);
    s += para(650, y + 110, 'Bar chart: categories, so **gaps** between bars', 200, { size: 16 }).s;
    return { s, h: 280 };
  },
  (y) => row(y, [
    { kicker: 'DIFFERENCE', title: '4 words higher in silence', body: '4 / 10 × 100 = **40%** relative to music', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'SPREAD', title: 'Identical ranges (7)', body: 'similar spread of scores' },
    { kicker: 'CONCLUSION', kfill: C.olive, title: 'Consistent with the hypothesis', body: 'only an inferential test (A-level) shows significance', fill: C.cream, edge: C.olive },
  ], { gap: 12, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
],
'A table of the lesson\'s invented scores: music group mean 10, median 9.5, mode 9, range 7; silence group mean 14, median 13.5, mode 13, range 7. A bar chart shows mean recall of 10 with music and 14 in silence. The silence mean is 4 words, or 40 percent, higher with identical ranges; only an inferential test could show significance.',
'Silence beat music by 4 words on average, with the same spread.', H2.ex);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
