import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-psychology-9685-social-psychology';
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
  types: '## Types of conformity',
  expl: '## Explanations: normative and informational influence',
  asch: "## Asch's research and its variables",
  obex: '## Explanations for obedience',
  mil: "## Milgram's research and situational variables",
  res: '## Resistance to social influence',
  ans: '## Worked example: an application answer',
};

// 01 Normative v informational
F('01-normative-informational', 'Why people conform', 'Deutsch and Gerard (1955): two motives', [
  (y) => {
    const col = (x, kick, kf, title, rows, out, f, e) => {
      const c = card(x, y, 405, { kicker: kick, kfill: kf, title, body: rows, bullets: true, size: 16, tsize: 19, gap: 6, fill: f, edge: e, minH: 220 });
      const o = card(x + 60, y + c.h + 40, 285, { kicker: 'USUALLY PRODUCES', title: out, align: 'middle', tsize: 20, fill: C.panel, edge: C.ink, minH: 70, vcenter: true });
      return { s: c.s + arrow(x + 202, y + c.h + 4, x + 202, y + c.h + 34, { w: 3.5 }) + o.s, h: c.h + 40 + o.h };
    };
    const a = col(30, 'NORMATIVE SOCIAL INFLUENCE', C.rust, 'To be liked and accepted', ['Avoid rejection', 'Asch participants who went along to avoid looking foolish', 'People high in need for affiliation seem more open to it'], 'Compliance', '#f6e3d8', C.rust);
    const b = col(465, 'INFORMATIONAL SOCIAL INFLUENCE', C.tealDark, 'Because others seem right', ['Especially when a situation is ambiguous', 'Jenness (1932): bean-jar estimates moved towards the group’s after discussion'], 'Internalisation', C.tealLight, C.tealDark);
    return { s: a.s + b.s, h: Math.max(a.h, b.h) };
  },
  (y) => note(y, '', 'Hard to separate in practice: a person may conform **both** to be right and to be liked.', { align: 'middle', size: 17 }),
],
'Normative social influence is conforming to be liked and avoid rejection, as with Asch participants who went along to avoid looking foolish; it usually produces compliance. Informational social influence is conforming because others seem right, especially in ambiguous situations, as in Jenness\'s bean-jar study; it usually produces internalisation. The two are hard to separate.',
'Conform to be liked: compliance. Conform to be right: internalisation.', H2.expl);

// 02 Asch variables
F('02-asch-variables', 'Asch: how much people conformed', 'Line-judgement task; confederates gave a unanimous wrong answer on critical trials', [
  (y) => {
    let s = panel(30, y, 840, 140) + T(54, y + 34, 'BASELINE', { size: 16, weight: 700, fill: C.tealDark });
    const st = [['about 37%', 'of critical trials: conformed'], ['about 75%', 'conformed at least once'], ['about 25%', 'never conformed'], ['almost 0', 'errors when judging alone']];
    st.forEach(([a, b], i) => { const x = 54 + i * 204; s += T(x, y + 74, a, { size: 24, weight: 700, fill: i === 3 ? C.muted : C.ink }) + para(x, y + 100, b, 180, { size: 15, fill: C.muted }).s; });
    return { s, h: 140 };
  },
  (y) => {
    let s = panel(30, y, 840, 290) + T(54, y + 34, 'GROUP SIZE: CONFORMITY ON CRITICAL TRIALS', { size: 16, weight: 700, fill: C.tealDark });
    const ox = 110, oy = y + 240, Hh = 170, max = 40;
    s += `<line x1="${ox}" y1="${oy}" x2="${ox + 380}" y2="${oy}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - Hh}" stroke="${C.ink}" stroke-width="2.5"/>`;
    [0, 10, 20, 30, 40].forEach((v) => { const yy = oy - (Hh * v) / max; s += `<line x1="${ox - 6}" y1="${yy}" x2="${ox}" y2="${yy}" stroke="${C.ink}" stroke-width="2"/>` + T(ox - 10, yy + 5, `${v}%`, { size: 15, anchor: 'end', fill: C.muted }); });
    [[1, 3], [2, 13], [3, 32]].forEach(([n, v], i) => { const x = ox + 40 + i * 115, h = (Hh * v) / max; s += `<rect x="${x}" y="${oy - h}" width="80" height="${h}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(x + 40, oy - h - 8, `${v}%`, { size: 17, weight: 700, anchor: 'middle' }) + T(x + 40, oy + 24, String(n), { size: 17, weight: 700, anchor: 'middle' }); });
    s += T(ox + 190, oy + 46, 'number of confederates', { size: 15, anchor: 'middle', fill: C.muted });
    s += para(540, y + 100, 'More confederates beyond three added **little further increase**: a small majority is enough.', 300, { size: 17 }).s;
    return { s, h: 300 };
  },
  (y) => row(y, [
    { kicker: 'UNANIMITY', title: 'One confederate gives the right answer → about 5.5%', body: 'Even a different wrong answer reduced conformity: breaking unanimity matters', fill: C.cream, edge: C.olive },
    { kicker: 'TASK DIFFICULTY', title: 'Lines made more similar → conformity increased', body: 'More ambiguity, so more informational influence' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  (y) => evalGrid(y, [
    { k: 'L', title: 'Artificial, trivial task', body: 'No consequences; American male students; deception and stress.' },
    { k: 'BOND AND SMITH (1996)', title: '133 studies in 17 countries', body: 'Higher conformity in collectivist than individualist cultures.' },
  ]),
],
'Baseline: conformity on about 37 percent of critical trials, about 75 percent conformed at least once, about 25 percent never, and almost no errors alone. Bars show conformity rising from about 3 percent with one confederate to 13 with two and 32 with three, with little increase beyond. A correct dissenter cut conformity to about 5.5 percent; harder tasks raised it. Evaluation covers the artificial task and Bond and Smith\'s cross-cultural meta-analysis.',
'Three confederates are enough; one dissenter breaks the pressure.', H2.asch);

// 03 Agentic state and legitimacy
F('03-agentic-state', 'Explaining obedience', 'Obedience: following a direct order from a person in authority', [
  (y) => {
    let s = '';
    const a = card(30, y, 300, { kicker: 'AUTONOMOUS STATE', title: 'I am responsible for my actions', align: 'middle', size: 16, tsize: 18, minH: 100, vcenter: true });
    const b = card(570, y, 300, { kicker: 'AGENTIC STATE', kfill: C.rust, title: 'I act for another person, who is responsible', align: 'middle', size: 16, tsize: 18, minH: 100, vcenter: true, fill: '#f6e3d8', edge: C.rust });
    s += a.s + b.s + arrow(336, y + 50, 564, y + 50, { w: 4.5 }) + T(450, y + 38, 'agentic shift', { size: 17, weight: 700, anchor: 'middle' });
    const m = row(y + 130, [
      { kicker: 'MORAL STRAIN', title: 'Participants may feel distress at what they are doing' },
      { kicker: 'BINDING FACTORS', title: 'Keep them obeying', body: 'not wanting to break an agreement or appear rude', fill: C.cream, edge: C.olive },
    ], { gap: 14, vcenter: false, card: { size: 16, tsize: 17, gap: 4 } });
    s += m.s + T(450, y + 80, 'Milgram (1974)', { size: 15, anchor: 'middle', fill: C.muted });
    return { s, h: 130 + m.h };
  },
  10,
  (y) => {
    let s = panel(30, y, 840, 230) + T(54, y + 34, 'LEGITIMACY OF AUTHORITY', { size: 16, weight: 700, fill: C.tealDark });
    s += `<polygon points="450,${y + 52} 560,${y + 112} 340,${y + 112}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<rect x="250" y="${y + 120}" width="400" height="56" rx="8" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`;
    s += T(450, y + 104, 'authority', { size: 16, weight: 700, anchor: 'middle' });
    s += T(450, y + 154, 'socialised to accept their orders', { size: 16, weight: 600, anchor: 'middle' });
    s += para(54, y + 90, 'Societies are organised **hierarchically**', 150, { size: 16 }).s;
    s += para(706, y + 90, 'Status reduced → **obedience falls**', 150, { size: 16 }).s;
    s += T(450, y + 206, 'legitimate power, e.g. police officers, teachers, doctors', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: 230 };
  },
  (y) => evalGrid(y, [
    { k: 'S', title: 'Fit Milgram’s variations', body: 'Obedience fell when an ordinary member of the public gave orders.' },
    { k: 'L', title: 'A third refused', body: 'Agentic state does not explain them; many who obeyed were distressed, not calm.' },
  ]),
],
'The agentic shift moves a person from the autonomous state, feeling responsible, to the agentic state, acting for another who is responsible; moral strain is felt but binding factors keep them obeying. Legitimacy of authority: societies are hierarchical and people are socialised to obey legitimate figures such as police, teachers and doctors; when status is reduced, obedience falls.',
'Obedience follows a shift of responsibility to a legitimate authority.', H2.obex);

// 04 Milgram variations
F('04-milgram-variations', 'Milgram: situational variables', 'Percentage obeying to the maximum 450 volts', [
  (y) => {
    let s = '';
    const r = hbars(y, [
      ['Baseline (Yale)', 65, C.rust, '65%'],
      ['Learner in same room', 40, C.mustard, '40%'],
      ['Hand on shock plate', 30, C.mustard, '30%'],
      ['Orders by telephone', 20.5, C.mustard, '20.5%'],
      ['Run-down office, Bridgeport', 47.5, C.teal, '47.5%'],
      ['Two peers refuse', 10, C.tealDark, '10%'],
    ], 70, { x0: 300, x1: 780, bh: 40, gap: 14 });
    return { s: s + r.s, h: r.h };
  },
  (y) => {
    const items = [['baseline', C.rust], ['proximity', C.mustard], ['location', C.teal], ['social support', C.tealDark]];
    let s = '', x = 200;
    items.forEach(([l, c]) => { s += `<rect x="${x}" y="${y}" width="18" height="18" fill="${c}" stroke="${C.ink}" stroke-width="1.5"/>` + T(x + 26, y + 15, l, { size: 16 }); x += 40 + tw(l, 16) + 20; });
    return { s, h: 20 };
  },
  (y) => row(y, [
    { kicker: 'PROXIMITY', title: 'Victim closer: consequences harder to ignore', body: 'authority further away: easier to resist', fill: C.cream, edge: C.olive },
    { kicker: 'LOCATION', title: 'A prestigious setting lends legitimacy', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  (y) => evalGrid(y, [
    { k: 'HOFLING ET AL. (1966)', title: '21 of 22 nurses', body: 'Would give an excessive dose on a phone order from an unknown doctor.' },
    { k: 'BURGER (2009)', title: 'About 70% willing to go past 150 V', body: 'Partial replication, stopped at 150 V for ethics.' },
    { k: 'SHERIDAN AND KING (1972)', title: 'Real shocks to a puppy', body: 'Still high obedience, against the “not believed” criticism.' },
  ], 3),
],
'Bars of obedience to 450 volts: 65 percent at baseline, 40 with the learner in the same room, 30 with the hand on a shock plate, 20.5 with orders by telephone, 47.5 in a run-down Bridgeport office, and 10 when two peers refused. Proximity and location explain the falls. Supporting evidence: Hofling et al.\'s nurses, Burger\'s replication and Sheridan and King\'s real shocks.',
'Closeness to the victim, distance from authority and a lowly setting all cut obedience.', H2.mil);

// 05 Resistance
F('05-resistance', 'Resistance to social influence', '', [
  (y) => {
    const r = hbars(y + 54, [['Asch: unanimous majority', 37, C.panelEdge, 'about 37%'], ['Asch: one dissenter', 5.5, C.teal, 'about 5.5%'], ['Milgram: baseline', 65, C.panelEdge, '65%'], ['Milgram: two peers refuse', 10, C.teal, '10%']], 70, { x0: 290, x1: 740, bh: 32, gap: 10 });
    const s = panel(30, y, 840, r.h + 78) + T(54, y + 34, 'SOCIAL SUPPORT: AN ALLY BREAKS THE PRESSURE', { size: 16, weight: 700, fill: C.tealDark }) + T(846, y + 34, 'Asch: conformity; Milgram: obeyed to 450 V', { size: 15, anchor: 'end', fill: C.muted }) + r.s;
    return { s, h: r.h + 78 };
  },
  (y) => P('A dissenter shows resistance is **possible** and **shares the social cost** of disobeying.', { anchor: 'middle', size: 17, fill: C.ink })(y),
  (y) => {
    let s = panel(30, y, 840, 200) + T(54, y + 34, 'LOCUS OF CONTROL: ROTTER (1966)', { size: 16, weight: 700, fill: C.olive });
    const x0 = 90, x1 = 810, ly = y + 90;
    s += `<defs><linearGradient id="loc" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs><rect x="${x0}" y="${ly - 16}" width="${x1 - x0}" height="32" rx="16" fill="url(#loc)" stroke="${C.ink}" stroke-width="2"/>`;
    s += T(x0, ly + 46, 'INTERNAL', { size: 17, weight: 700, fill: C.tealDark }) + para(x0, ly + 70, 'outcomes result from my own actions → **more likely to resist**', 320, { size: 16 }).s;
    s += T(x1, ly + 46, 'EXTERNAL', { size: 17, weight: 700, fill: C.olive, anchor: 'end' }) + para(x1 - 300, ly + 70, 'outcomes controlled by luck or others', 300, { size: 16 }).s;
    return { s, h: 200 };
  },
  (y) => evalGrid(y, [
    { k: 'HOLLAND (1967)', title: 'Internals more likely to resist', body: 'In a repeat of Milgram’s procedure.' },
    { k: 'L', title: 'Mixed later support', body: 'Locus of control may matter less than situational factors.' },
  ]),
],
'Social support: Asch\'s conformity fell from about 37 percent to about 5.5 percent with one dissenter, and Milgram\'s obedience fell from 65 to 10 percent when two peers refused, because a dissenter shows resistance is possible and shares the cost. Locus of control runs from internal (more likely to resist) to external; Holland (1967) supported this but later research is mixed.',
'An ally and an internal locus of control both help people resist.', H2.res);

// 06 Football application
F('06-football-application', 'An application answer: the football club', 'Explain the players’ behaviour [6]', [
  (y) => lrows(y, [
    { label: 'Type and explanation', body: '**Compliance** from **normative** influence: they want acceptance, not because the rule is right', lfill: C.cream },
    { label: 'Precise distinction', body: 'The captain is a group member, not a legitimate authority: **conformity, not obedience**', lfill: C.cream },
    { label: 'Evidence', body: 'Asch: one dissenter cut conformity to about **5.5%**', lfill: C.tealLight },
    { label: 'Resistance applied', body: 'One refusal broke unanimity, giving the other two **social support**', lfill: C.tealLight },
    { label: 'Individual difference', body: 'Those who refused first may have an **internal locus of control**', lfill: C.tealLight },
    { label: 'Evaluation', body: 'Real consequences for belonging: normative pressure may be **stronger** than in Asch’s laboratory', lfill: C.mustard },
  ], { lw: 220, size: 16, minH: 54, gap: 8 }),
],
'Six rows: compliance driven by normative influence; conformity rather than obedience because the captain is not a legitimate authority; Asch\'s finding that one dissenter cut conformity to about 5.5 percent; the refusal giving the others social support; a possible internal locus of control; and an evaluation that real belonging may make normative pressure stronger than in the laboratory.',
'Name the type, cite the evidence, apply it, then evaluate in context.', H2.ans);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
