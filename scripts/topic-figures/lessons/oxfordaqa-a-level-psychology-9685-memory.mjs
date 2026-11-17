import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-psychology-9685-memory';
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
  msm: '## The multi-store model',
  wmm: '## The working memory model',
  ltm: '## Types of long-term memory',
  ewt: '## Eyewitness testimony',
  ci: '## The cognitive interview',
  ans: '## Worked example: an application answer',
};

// 01 MSM
F('01-multi-store-model', 'The multi-store model', 'Atkinson and Shiffrin (1968): three separate stores', [
  (y) => {
    let s = '';
    const W = 216, xs = [30, 342, 654], H = 270;
    const stores = [
      ['Sensory register', [['Coding', 'modality-specific (visual, auditory…)'], ['Capacity', 'very large'], ['Duration', 'very brief: under a second for visual']], C.panel, C.panelEdge],
      ['Short-term memory', [['Coding', 'mainly acoustic'], ['Capacity', 'about 7 ± 2 items'], ['Duration', 'about 18-30 s without rehearsal']], C.cream, C.olive],
      ['Long-term memory', [['Coding', 'mainly semantic'], ['Capacity', 'effectively unlimited'], ['Duration', 'potentially a lifetime']], C.tealLight, C.tealDark],
    ];
    stores.forEach(([name, rows, f, e], i) => {
      const x = xs[i];
      s += panel(x, y + 60, W, H, f, e) + T(x + W / 2, y + 96, name, { size: 19, weight: 700, anchor: 'middle' });
      let cy = y + 130;
      rows.forEach(([k, v]) => { s += T(x + 18, cy, k.toUpperCase(), { size: 15, weight: 700, fill: C.muted }); const p = para(x + 18, cy + 22, v, W - 36, { size: 16 }); s += p.s; cy += 30 + p.h; });
    });
    s += arrow(252, y + 160, 336, y + 160, { w: 4 }) + T(294, y + 148, 'attention', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += arrow(564, y + 150, 648, y + 150, { w: 4 }) + T(606, y + 138, 'transfer', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += arrow(648, y + 220, 564, y + 220, { w: 4 }) + T(606, y + 246, 'retrieval', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += path(`M410,${y + 60} C410,${y + 6} 490,${y + 6} 490,${y + 54}`, { w: 3.5, extra: 'marker-end="url(#ah)"' }) + T(450, y + 14, 'rehearsal', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    return { s, h: H + 60 };
  },
],
'Three stores in a row. The sensory register is modality-specific, very large and very brief; attention moves information into short-term memory, which is mainly acoustic, holds about 7 plus or minus 2 items and lasts about 18 to 30 seconds without rehearsal; a rehearsal loop keeps it there and transfers it to long-term memory, which is mainly semantic, effectively unlimited and potentially lifelong; retrieval brings it back.',
'Attention, rehearsal and retrieval move information between three stores.', H2.msm);

// 02 Evidence
F('02-msm-evidence', 'Evidence for each feature', '', [
  (y) => row(y, [
    { kicker: 'CAPACITY OF STM', title: 'Jacobs (1887): digit span', body: 'About 9 digits and about 7 letters. Miller (1956): 7 ± 2 chunks. Cowan (2001): nearer about 4 chunks.' },
    { kicker: 'CODING', title: 'Baddeley (1966)', body: 'Acoustically similar words harder to recall immediately (STM); semantically similar words harder after 20 minutes (LTM).' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  (y) => {
    let s = panel(30, y, 840, 250) + T(54, y + 34, 'DURATION OF STM: PETERSON AND PETERSON (1959)', { size: 16, weight: 700, fill: C.tealDark });
    s += para(54, y + 60, 'Consonant trigrams; counting backwards in threes prevents rehearsal.', 360, { size: 16, fill: C.muted }).s;
    const ox = 470, oy = y + 210, W = 360, Hh = 150;
    s += `<line x1="${ox}" y1="${oy}" x2="${ox + W}" y2="${oy}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - Hh}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const b = (x, v, l, vl, f) => `<rect x="${x}" y="${oy - Hh * v}" width="90" height="${Hh * v}" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + T(x + 45, oy + 24, l, { size: 16, weight: 700, anchor: 'middle' }) + T(x + 45, oy - Hh * v - 8, vl, { size: 16, weight: 700, anchor: 'middle' });
    s += b(ox + 40, 0.9, '3 s', 'about 90%', C.teal) + b(ox + 220, 0.1, '18 s', '≈10% or less', C.rust);
    s += T(ox - 10, oy - Hh + 6, 'recall', { size: 15, anchor: 'end', fill: C.muted });
    s += para(54, y + 120, 'Without rehearsal, short-term memories are lost within about **18 seconds**.', 360, { size: 17 }).s;
    return { s, h: 250 };
  },
  (y) => {
    let s = panel(30, y, 840, 140) + T(54, y + 34, 'DURATION OF LTM: BAHRICK ET AL. (1975), YEARBOOK PHOTOGRAPHS', { size: 16, weight: 700, fill: C.tealDark });
    const r = hbars(y + 54, [['within 15 years', 90, C.teal, 'about 90%'], ['after 48 years', 70, C.tealDark, 'about 70%']], 100, { x0: 230, x1: 700, bh: 30, gap: 12 });
    return { s: s + r.s, h: 140 };
  },
  (y) => evalGrid(y, [
    { k: 'S', title: 'HM (Scoville and Milner, 1957)', body: 'No new LTMs but normal immediate span: separate stores.' },
    { k: 'L', title: 'KF (Shallice and Warrington, 1970)', body: 'Poor verbal STM, better visual: STM is not one store.' },
    { k: 'L', title: 'Rehearsal over-emphasised', body: 'Levels of processing (Craik and Lockhart, 1972).' },
    { k: 'L', title: 'Artificial stimuli', body: 'Trigrams may not reflect everyday memory.' },
  ]),
],
'Evidence cards: Jacobs found spans of about 9 digits and 7 letters, Miller proposed 7 plus or minus 2 chunks and Cowan about 4; Baddeley (1966) found acoustic coding in STM and semantic in LTM. Bars show Peterson and Peterson\'s recall falling from about 90 percent at 3 seconds to about 10 percent or less at 18 seconds, and Bahrick et al.\'s recognition of classmates at about 90 percent within 15 years and 70 percent after 48. Evaluation uses HM, KF, levels of processing and artificial stimuli.',
'Each store’s capacity, duration and coding rests on a named study.', H2.msm);

// 03 WMM
F('03-working-memory-model', 'The working memory model', 'Baddeley and Hitch (1974): replaces the single short-term store', [
  (y) => {
    let s = '';
    const ce = card(220, y, 460, { title: 'Central executive', body: ['Directs attention; allocates resources', 'Very limited capacity; **does not store** information'], size: 16, tsize: 21, align: 'middle', fill: C.mustard, edge: C.ink, bfill: C.ink, gap: 3 });
    s += ce.s;
    const yy = y + ce.h + 60;
    const subs = row(yy, [
      { title: 'Phonological loop', body: ['**Coding:** acoustic', '**Parts:** phonological store (“inner ear”), articulatory process (“inner voice”)', '**Capacity:** about two seconds of speech'], fill: C.tealLight, edge: C.tealDark },
      { title: 'Episodic buffer', body: ['**Added:** Baddeley (2000)', '**Coding:** multi-modal; integrates components and LTM into episodes', '**Capacity:** a few chunks'], fill: C.panel },
      { title: 'Visuo-spatial sketchpad', body: ['**Coding:** visual and spatial', '**Example:** the layout of a room', '**Capacity:** a few objects at a time'], fill: C.cream, edge: C.olive },
    ], { gap: 14, vcenter: false, card: { size: 15, tsize: 18, gap: 5, pad: 16 } });
    subs.xs.forEach((x, i) => { const cx = x + subs.ws[i] / 2; s += arrow(450 + (i - 1) * 130, y + ce.h + 4, cx, yy - 6, { w: 3 }); });
    s += subs.s;
    return { s, h: yy + subs.h - y };
  },
  (y) => row(y, [
    { kicker: 'WORD LENGTH EFFECT', title: 'More short words recalled than long words', body: 'Baddeley, Thomson and Buchanan (1975): the loop holds about two seconds of speech', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DUAL-TASK STUDIES', title: 'Same component: interference', body: 'Different components (visual + verbal): little loss' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  (y) => evalGrid(y, [
    { k: 'S', title: 'Fits KF', body: 'Damaged phonological loop, intact sketchpad.' },
    { k: 'L', title: 'Central executive poorly specified', body: '“Controls attention” does not say how: hard to test.' },
  ]),
],
'The central executive directs attention, has very limited capacity and stores nothing. Below it: the phonological loop (acoustic; phonological store and articulatory process; about two seconds of speech), the episodic buffer (added in 2000; multi-modal; a few chunks) and the visuo-spatial sketchpad (visual and spatial; a few objects). The word length effect and dual-task studies support it; the central executive is poorly specified.',
'Each component has its own coding and its own limited capacity.', H2.wmm);

// 04 Types of LTM
F('04-types-of-ltm', 'Types of long-term memory', 'Tulving (1972): episodic and semantic; procedural added as a third type', [
  (y) => row(y, [
    { kicker: 'EPISODIC: EXPLICIT', title: 'Personal experiences, tied to time and place', body: '*Remembering your first day at school*', fill: C.cream, edge: C.olive },
    { kicker: 'SEMANTIC: EXPLICIT', title: 'Facts and general knowledge', body: '*Paris is the capital of France*', fill: C.cream, edge: C.olive },
    { kicker: 'PROCEDURAL: IMPLICIT', title: 'Skills and actions', body: '*Riding a bicycle*', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 6 } }),
  lab('EVIDENCE FROM BRAIN DAMAGE'),
  (y) => table(y, [{ w: 1.1, head: 'Case' }, { w: 1, head: 'Episodic', hfill: C.cream }, { w: 1, head: 'Semantic', hfill: C.cream }, { w: 1, head: 'Procedural', hfill: C.teal }], [
    ['Clive Wearing (viral brain infection)', '✗ lost most', '✓ knew many facts', '✓ could still play the piano'],
    ['HM', '✗ no memory of practising', '', '✓ learned mirror-drawing'],
  ], { size: 16, hsize: 17, cellFill: (r, c) => (c > 0 ? (r === 0 && c === 1) || (r === 1 && c === 1) ? '#f6e3d8' : c === 2 && r === 1 ? '#f8faf9' : '#eaf3ef' : null) }),
  (y) => note(y, '', 'The types seem stored at least partly separately, but **unusual individuals** are hard to generalise from.', { align: 'middle', size: 17 }),
],
'Three cards: episodic memory (personal experiences, explicit), semantic (facts, explicit) and procedural (skills, implicit). A table shows Clive Wearing lost most episodic memories but kept facts and could play the piano, and HM learned mirror-drawing without remembering practising. The types seem partly separate, but case studies are hard to generalise.',
'Amnesia can remove episodic memory while leaving skills intact.', H2.ltm);

// 05 Loftus and Palmer
F('05-loftus-palmer', 'Leading questions: Loftus and Palmer (1974)', 'Students watched films of car crashes', [
  (y) => {
    let s = T(30, y + 16, 'EXPERIMENT 1: MEAN SPEED ESTIMATE (MPH)', { size: 16, weight: 700, fill: C.tealDark });
    const r = hbars(y + 36, [['“smashed”', 40.5, C.rust, '40.5 mph'], ['“contacted”', 31.8, C.teal, '31.8 mph']], 45, { x0: 200, x1: 720, bh: 42, gap: 14 });
    return { s: s + r.s, h: 36 + r.h };
  },
  (y) => {
    let s = T(30, y + 16, 'EXPERIMENT 2, ONE WEEK LATER: FALSELY REPORTED BROKEN GLASS', { size: 16, weight: 700, fill: C.tealDark });
    const r = hbars(y + 36, [['“smashed”', 32, C.rust, '32%'], ['“hit”', 14, C.teal, '14%'], ['control', 12, C.panelEdge, '12%']], 45, { x0: 200, x1: 720, bh: 36, gap: 12 });
    return { s: s + r.s, h: 36 + r.h };
  },
  (y) => row(y, [
    { kicker: 'RESPONSE BIAS', title: 'Wording affects the answer, not the memory', fill: '#eef1f0' },
    { kicker: 'SUBSTITUTION', title: 'Wording alters the stored memory itself', body: 'supported by the broken-glass finding', fill: C.cream, edge: C.olive },
  ], { gap: 14, card: { size: 16, tsize: 18 } }),
],
'Bars: mean speed estimates of 40.5 mph with the verb smashed against 31.8 mph with contacted. A week later, 32 percent of the smashed group falsely reported broken glass, against 14 percent for hit and 12 percent for controls. The broken-glass finding supports substitution, where the memory itself is altered, over response bias.',
'“Smashed” raised speed estimates and created false memories of broken glass.', H2.ewt);

// 06 Gabbert and real-world evaluation
F('06-post-event-discussion', 'Post-event discussion: Gabbert et al. (2003)', 'Pairs saw different films of the same crime, then discussed it', [
  (y) => {
    let s = T(30, y + 16, 'REPORTED DETAILS THEY COULD ONLY HAVE LEARNED FROM THEIR PARTNER', { size: 16, weight: 700, fill: C.tealDark });
    const r = hbars(y + 36, [['Discussed', 71, C.rust, '71%'], ['Control', 0, C.panelEdge, '0%']], 100, { x0: 200, x1: 720, bh: 42, gap: 14 });
    return { s: s + r.s, h: 36 + r.h };
  },
  (y) => note(y, 'Memory conformity', 'A wish to agree, or genuine incorporation of the other witness’s details.', { size: 17 }),
  (y) => row(y, [
    { kicker: 'LIMITATION OF LAB STUDIES', kfill: C.rust, title: 'Films lack the emotional consequences of a real crime' },
    { kicker: 'YUILLE AND CUTSHALL (1986)', title: 'Real shooting: accounts highly accurate months later', body: 'misleading questions had little effect', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  (y) => P('Laboratory studies may **overstate** the problem.', { anchor: 'middle', size: 17, fill: C.ink })(y),
],
'Bars show 71 percent of participants who discussed the crime reported details only their partner could have seen, against 0 percent of controls: memory conformity. Laboratory films lack real emotional consequences; Yuille and Cutshall (1986) found witnesses to a real shooting stayed highly accurate months later, suggesting lab studies may overstate the problem.',
'Discussion led 71% to report details they never saw.', H2.ewt);

// 07 Cognitive interview
F('07-cognitive-interview', 'The cognitive interview', 'Fisher and Geiselman: four techniques, each with a rationale', [
  (y) => lrows(y, [
    { label: 'Report everything', body: 'Even trivial details may cue more important memories', lfill: C.cream },
    { label: 'Reinstate the context', body: 'Mentally returning to the scene uses environmental and emotional cues present at encoding', lfill: C.cream },
    { label: 'Reverse the order', body: 'Disrupts expectations and schemas that might fill gaps', lfill: C.cream },
    { label: 'Change perspective', body: 'Another person’s viewpoint reduces the influence of the witness’s own schemas', lfill: C.cream },
  ], { lw: 220, size: 17, minH: 62 }),
  (y) => evalGrid(y, [
    { k: 'S', title: 'More correct information', body: 'Köhnken et al. (1999) meta-analysis v standard interviews.' },
    { k: 'L', title: 'Costs', body: 'Small rise in incorrect details; slower; needs trained officers, so often only some techniques are used.' },
  ]),
],
'Four techniques with reasons: report everything (trivial details cue others), reinstate the context (cues from encoding), reverse the order (disrupts schemas that fill gaps) and change perspective (reduces the witness\'s own schemas). Köhnken et al. (1999) found more correct information, with a small rise in incorrect details, more time and a need for training.',
'Four techniques, each explained by how it cues or protects memory.', H2.ci);

// 08 Amira
F('08-amira-application', 'An application answer: Amira’s phone number', 'Use the multi-store model [4]', [
  (y) => steps(y, [
    { title: 'Attention', body: 'She paid attention, so the number passed from the sensory register into STM.' },
    { title: 'Rehearsal', body: 'Repeating it was maintenance rehearsal: it stayed in STM long enough to dial.' },
    { title: 'Capacity and duration', body: 'STM holds about 7 ± 2 items for up to about 30 s; once rehearsal stopped, it decayed.' },
    { title: 'Transfer', body: 'Brief rehearsal did not transfer it to LTM, so it could not be retrieved next day.' },
  ], { size: 16, tsize: 19, gap: 12 }),
  (y) => note(y, '', 'Each sentence pairs a **feature of the model** with a **detail from the scenario**: that link earns AO2 marks.', { align: 'middle', size: 17 }),
],
'Four steps applying the multi-store model to Amira: attention moved the number into STM, maintenance rehearsal kept it there long enough to dial, STM\'s limited duration meant it decayed once rehearsal stopped, and brief rehearsal did not transfer it to LTM.',
'Pair every feature of the model with a detail from the scenario.', H2.ans);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
