import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-ib-dp-world-history-dp-history-ib-dp-world-history-world-history-topics-8';
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
      const fill = (o.cellFill && o.cellFill(ri, i)) || (i === 0 && o.firstFill !== false ? C.tealLight : ri % 2 ? C.panel : C.panel);
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
  const LX = o.lx ?? 150, W = 870 - LX - 40;
  let s = '', cy = y;
  const cards = items.map((it) => card(LX + 40, 0, W, { title: it.title, body: it.body, size: 16, tsize: 18, pad: 13, fill: it.fill, edge: it.edge, tgap: 3 }));
  const total = cards.reduce((a, c) => a + c.h + 10, -10);
  s += `<line x1="${LX}" y1="${y + 8}" x2="${LX}" y2="${y + total - 8}" stroke="${C.ink}" stroke-width="4"/>`;
  items.forEach((it, i) => {
    const c = card(LX + 40, cy, W, { title: it.title, body: it.body, size: 16, tsize: 18, pad: 13, fill: it.fill, edge: it.edge, tgap: 3 });
    s += c.s + `<circle cx="${LX}" cy="${cy + c.h / 2}" r="${it.d ? 10 : 6}" fill="${it.dot || (it.d ? C.mustard : C.panel)}" stroke="${C.ink}" stroke-width="3"/>`;
    if (it.d) s += T(LX - 20, cy + c.h / 2 + 6, it.d, { size: 17, weight: 700, anchor: 'end' });
    cy += c.h + 10;
  });
  return { s, h: total };
}

// ---- Extra helpers for comparative history figures ----
// Horizontal timeline to scale. lanes: [{label, start, end, sub, fill, edge}]. Returns {s,h}
function htimeline(y, from, to, lanes, o = {}) {
  const x0 = o.x0 ?? 70, x1 = o.x1 ?? 840, step = o.step ?? 10, laneH = o.laneH ?? 84;
  const X0 = (yr) => x0 + ((yr - from) * (x1 - x0)) / (to - from);
  let s = '';
  const top = y, axisY = y + lanes.length * laneH + 14;
  for (let yr = Math.ceil(from / step) * step; yr <= to; yr += step) {
    const xx = X0(yr);
    s += `<line x1="${xx}" y1="${top}" x2="${xx}" y2="${axisY}" stroke="${C.panelEdge}" stroke-width="1.5" stroke-dasharray="4 6"/>`;
    s += `<line x1="${xx}" y1="${axisY}" x2="${xx}" y2="${axisY + 10}" stroke="${C.ink}" stroke-width="2.5"/>` + T(xx, axisY + 32, String(yr), { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  }
  s += `<line x1="${x0 - 20}" y1="${axisY}" x2="${x1 + 20}" y2="${axisY}" stroke="${C.ink}" stroke-width="3"/>`;
  lanes.forEach((ln, i) => {
    const ly = top + i * laneH;
    let a, b;
    if (ln.points) {
      a = X0(ln.points[0]) - 12; b = X0(ln.points[ln.points.length - 1]) + 12;
      ln.points.forEach((p) => { const px = X0(p); s += `<path d="M${px},${ly + 24} L${px + 10},${ly + 37} L${px},${ly + 50} L${px - 10},${ly + 37} Z" fill="${ln.fill || C.mustard}" stroke="${ln.edge || C.ink}" stroke-width="2.5"/>`; });
    } else {
      a = X0(ln.start); b = Math.max(X0(ln.end), a + 10);
      s += `<rect x="${a}" y="${ly + 26}" width="${b - a}" height="24" rx="6" fill="${ln.fill || C.teal}" stroke="${ln.edge || C.ink}" stroke-width="2.5"/>`;
    }
    const lw = tw(ln.label, 18, 700), sw = ln.sub ? tw(ln.sub, 16) : 0, need = Math.max(lw, sw);
    const right = a + need <= 885; const ax = right ? a : b, anc = right ? 'start' : 'end';
    s += T(ax, ly + 18, ln.label, { size: 18, weight: 700, anchor: anc });
    if (ln.sub) s += T(ax, ly + 72, ln.sub, { size: 16, anchor: anc, fill: C.muted });
    if (!right && b - need < 15) WARN.push(`timeline label too wide: ${ln.label}`);
  });
  return { s, h: axisY + 40 - y };
}
// Spectrum (e.g. interpretations): arrowed bar with labelled ends, cards below linked to positions.
// marks: [{pos 0..1, title, body, fill, edge}]
function spectrum(y, leftLab, rightLab, marks, o = {}) {
  const x0 = 60, x1 = 840, by = y + 34;
  let s = `<defs><linearGradient id="spg${y}" x1="0" x2="1"><stop offset="0" stop-color="${C.tealLight}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  s += `<rect x="${x0}" y="${by}" width="${x1 - x0}" height="26" rx="13" fill="url(#spg${y})" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += T(x0, y + 20, leftLab, { size: 17, weight: 700, fill: C.tealDark }) + T(x1, y + 20, rightLab, { size: 17, weight: 700, fill: C.olive, anchor: 'end' });
  const n = marks.length, gap = 16, cw = (840 - gap * (n - 1)) / n, cy = by + 80;
  const cards = marks.map((m, i) => card(30 + i * (cw + gap), cy, cw, { title: m.title, body: m.body, size: 16, tsize: 18, pad: 14, fill: m.fill, edge: m.edge }));
  const h = Math.max(...cards.map((c) => c.h));
  marks.forEach((m, i) => {
    const mx = x0 + m.pos * (x1 - x0), cx = 30 + i * (cw + gap) + cw / 2;
    s += path(`M${mx},${by + 26} L${mx},${by + 50} L${cx},${by + 58} L${cx},${cy}`, { w: 2.5 });
    s += `<circle cx="${mx}" cy="${by + 13}" r="11" fill="${m.dot || C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += card(30 + i * (cw + gap), cy, cw, { title: m.title, body: m.body, size: 16, tsize: 18, pad: 14, fill: m.fill, edge: m.edge, minH: h }).s;
  });
  return { s, h: cy + h - y };
}
// Balance: beam tipped toward the heavier side (dir -1 = left lower). Returns {s,h}
function balance(y, leftLab, rightLab, dir = -1, o = {}) {
  const cx = 450, py = y + 40, L = 300, tilt = dir * 22;
  const lx = cx - L, rx = cx + L, ly = py - tilt, ry = py + tilt;
  let s = `<path d="M${cx - 50},${y + 170} L${cx + 50},${y + 170} L${cx},${py + 6} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<line x1="${lx}" y1="${ly}" x2="${rx}" y2="${ry}" stroke="${C.ink}" stroke-width="7" stroke-linecap="round"/><circle cx="${cx}" cy="${py}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  const pan = (x, yy, lab, fill) => `<line x1="${x}" y1="${yy}" x2="${x - 70}" y2="${yy + 60}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${x}" y1="${yy}" x2="${x + 70}" y2="${yy + 60}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<path d="M${x - 95},${yy + 60} L${x + 95},${yy + 60} Q${x + 80},${yy + 100} ${x},${yy + 100} Q${x - 80},${yy + 100} ${x - 95},${yy + 60} Z" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` +
    T(x, yy + 86, lab, { size: 18, weight: 700, anchor: 'middle' });
  s += pan(lx, ly, leftLab, o.lfill || C.cream) + pan(rx, ry, rightLab, o.rfill || C.tealLight);
  return { s, h: Math.max(ly, ry) + 100 - y };
}
// Simple cross / tick marks
const tick = (x, y, r = 14) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.tealDark}"/>` + path(`M${x - r * 0.45},${y} L${x - r * 0.1},${y + r * 0.38} L${x + r * 0.5},${y - r * 0.4}`, { stroke: C.panel, w: 3.5 });
const cross = (x, y, r = 14) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.rust}"/>` + path(`M${x - r * 0.38},${y - r * 0.38} L${x + r * 0.38},${y + r * 0.38} M${x + r * 0.38},${y - r * 0.38} L${x - r * 0.38},${y + r * 0.38}`, { stroke: C.panel, w: 3.5 });
// Section label (small caps style)
const LBL = (s, o = {}) => (y) => ({ s: T(o.x ?? 30, y + 14, s, { size: 15, weight: 700, fill: o.fill || C.muted, anchor: o.anchor }), h: 16 });

const H2 = {
  cov: '## What the topic covers',
  key: '## Key ideas',
  we: '## Worked example: an annotated model introduction',
};

// 01 Three stages
F('01-three-stages', 'Three stages of an independence movement', 'Questions target one stage, or the link between two', [
  (y) => row(y, [
    { kicker: 'STAGE 1', title: 'Origins and rise', body: ['Nationalism and national identity', 'Political, economic, social and religious grievances', 'Wars and external events weaken the ruler'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'STAGE 2', title: 'Methods and reasons for success', body: ['Violent and non-violent methods', 'Mass mobilization', 'Leaders', 'External factors: states, organizations, world wars, Cold War'], bullets: true, fill: C.cream, edge: C.olive },
    { kicker: 'STAGE 3', title: 'Challenges after independence', body: ['Political, economic, social', 'Ethnic, religious, territorial', 'How governments responded'], bullets: true, fill: C.panel },
  ], { arrows: true, gap: 34, vcenter: false, card: { size: 16, tsize: 19, pad: 15, gap: 5 } }),
  LBL('PAIRS FROM DIFFERENT REGIONS'),
  (y) => {
    let s = '';
    const items = [[false, 'Algeria and Ghana', 'both in Africa and the Middle East'], [true, 'India and Ghana', 'Asia and Oceania; Africa and the Middle East']];
    items.forEach(([ok, a, b], i) => {
      const x = 30 + i * 430;
      const c = card(x + 46, y, 364, { title: a, body: b, size: 16, tsize: 18, pad: 14, edge: ok ? C.panelEdge : C.rust, minH: 84, vcenter: true });
      s += c.s + (ok ? tick(x + 18, y + 42, 18) : cross(x + 18, y + 42, 18));
    });
    return { s, h: 84 };
  },
],
'Three linked stages: origins and rise (nationalism, grievances, weakening wars), methods and reasons for success (violent and non-violent methods, mobilization, leaders, external factors) and challenges after independence. Below, Algeria and Ghana fail as a pair because both are in Africa and the Middle East; India and Ghana pass.',
'Origins, methods, aftermath: and pairs from different regions.', H2.cov);

// 02 Independence timeline 1940-1965
F('02-independence-timeline', 'Four movements, 1940-1965', 'Diamonds mark dates given in the lesson', [
  (y) => htimeline(y, 1940, 1965, [
    { label: 'India: Quit India 1942; independence 15 August 1947', points: [1942, 1947], sub: 'Partition into India and Pakistan', fill: C.teal },
    { label: 'Vietnam: independence declared 2 September 1945', points: [1945, 1954], sub: 'Dien Bien Phu and the Geneva Accords, 1954', fill: C.mustard },
    { label: 'Ghana: CPP 1949; Positive Action 1950', points: [1949, 1950, 1957], sub: 'Independence 6 March 1957', fill: C.cream },
    { label: 'Algeria: FLN armed struggle from 1 November 1954', points: [1954, 1962], sub: 'Evian Accords March 1962; independence July 1962', fill: C.rust },
  ], { laneH: 94, step: 5 }),
  (y) => note(y, 'Earlier case: Latin America', 'Napoleon\'s invasion of Spain (1808) created a crisis of legitimacy in the Spanish empire that opened the way to the independence wars led by Bolívar and San Martín.'),
],
'A timeline from 1940 to 1965: India (Quit India 1942, independence 15 August 1947), Vietnam (independence declared 2 September 1945, Geneva Accords 1954), Ghana (Convention People\'s Party 1949, Positive Action 1950, independence 6 March 1957) and Algeria (armed struggle from 1 November 1954, independence July 1962). A note adds the Latin American wars after Napoleon\'s invasion of Spain in 1808.',
'Most of these movements reached their goal within twenty years of 1945.', H2.key);

// 03 War as an external factor
F('03-war-factor', 'War: the most powerful external factor', 'Wars weakened rulers\' economies and prestige and raised expectations', [
  (y) => {
    const rowsW = [
      ['INDIA', 'Second World War', 'Quit India (1942); Britain depends on Indian troops and resources', 'Labour wins in 1945, committed to withdrawal'],
      ['VIETNAM', 'Japanese occupation', 'French authority broken; independence declared 2 September 1945', 'French defeat at Dien Bien Phu (1954); Geneva Accords'],
      ['LATIN AMERICA', 'Napoleon invades Spain (1808)', 'A crisis of legitimacy in the Spanish empire', 'Independence wars led by Bolívar and San Martín'],
    ];
    let s = '', cy = y;
    rowsW.forEach(([k, a, b, c]) => {
      s += T(30, cy + 14, k, { size: 15, weight: 700, fill: C.muted });
      const r = row(cy + 24, [
        { title: a, fill: C.cream, edge: C.olive },
        { body: b },
        { body: c, fill: C.tealLight, edge: C.tealDark },
      ], { arrows: true, gap: 36, fr: [0.8, 1.2, 1.1], card: { size: 16, tsize: 18, pad: 14, bfill: C.ink } });
      s += r.s; cy += 24 + r.h + 18;
    });
    return { s, h: cy - y - 18 };
  },
],
'Three chains. India: the Second World War, Quit India and British dependence on Indian resources lead to Labour\'s 1945 commitment to withdraw. Vietnam: Japanese occupation breaks French authority, independence is declared in 1945, and French defeat in 1954 leads to Geneva. Latin America: Napoleon\'s invasion of Spain in 1808 creates a crisis of legitimacy and the independence wars.',
'War weakened the ruler and opened the door to independence.', H2.key);

// 04 Methods spectrum and the colonial response
F('04-methods-spectrum', 'Methods: a spectrum, not a choice', 'Few movements were purely violent or purely peaceful', [
  (y) => spectrum(y, 'Non-violent', 'Armed struggle', [
    { pos: 0.05, title: 'India', body: 'Non-cooperation (1920-22), Salt March (1930), Quit India (1942); elections, negotiation', fill: C.tealLight, edge: C.tealDark, dot: C.teal },
    { pos: 0.3, title: 'Ghana', body: 'Party organization (CPP, 1949); strikes and boycotts (1950); elections', fill: C.tealLight, edge: C.tealDark, dot: C.teal },
    { pos: 0.82, title: 'Algeria', body: 'FLN armed struggle from 1954; terrorism, guerrilla war; diplomacy', fill: C.cream, edge: C.olive },
    { pos: 0.95, title: 'Vietnam', body: 'Communist-led organization; guerrilla, then conventional, war', fill: C.cream, edge: C.olive },
  ]),
  LBL('EFFECTIVENESS DEPENDED ON THE COLONIAL POWER\'S RESPONSE'),
  (y) => row(y, [
    { title: 'Britain', body: 'Under Attlee, willing to leave India.', fill: C.tealLight, edge: C.tealDark },
    { title: 'France', body: 'Fought in Indochina and Algeria; Algeria was legally part of France and home to around a million European settlers.', fill: C.cream, edge: C.olive },
  ], { gap: 20, card: { size: 16, tsize: 19, pad: 16 } }),
],
'A spectrum from non-violent to armed struggle places India and Ghana near the non-violent end and Algeria and Vietnam near the armed end, each with its methods. Below, Britain under Attlee was willing to leave India, while France fought in Indochina and Algeria, which was legally part of France with around a million European settlers.',
'Methods sit on a spectrum, and the ruler\'s response shaped what worked.', H2.key);

// 05 Leaders: necessary or sufficient?
F('05-leaders', 'Leaders: necessary, sufficient, decisive?', 'The judgement from the model introduction', [
  (y) => {
    const rowsL = [
      ['Gandhi, India', 'Made Congress a mass movement after 1919; non-violent mass protest', true, false, 'Timing of 1947 owed more to Britain\'s post-war weakness and Attlee\'s decision to withdraw'],
      ['Nkrumah, Gold Coast', 'Founded the CPP (1949); won elections in 1951 while in prison; transfer of power by 1957', true, true, 'British willingness to decolonize met an organized mass party'],
    ];
    let s = '';
    const hx = [440, 530];
    s += T(hx[0], y + 16, 'Necessary', { size: 16, weight: 700, anchor: 'middle' }) + T(hx[1], y + 16, 'Decisive', { size: 16, weight: 700, anchor: 'middle' });
    let cy = y + 32;
    rowsL.forEach(([n, ev, a, b, why]) => {
      const c1 = card(30, cy, 360, { title: n, body: ev, size: 16, tsize: 19, pad: 16, minH: 124 });
      const h = c1.h;
      s += c1.s + (a ? tick(hx[0], cy + h / 2, 20) : cross(hx[0], cy + h / 2, 20)) + (b ? tick(hx[1], cy + h / 2, 20) : cross(hx[1], cy + h / 2, 20));
      s += card(590, cy, 280, { body: why, size: 16, pad: 14, minH: h, vcenter: true, fill: b ? C.tealLight : C.cream, edge: b ? C.tealDark : C.olive, bfill: C.ink }).s;
      cy += h + 16;
    });
    return { s, h: cy - y - 16 };
  },
  (y) => note(y, 'Ask two questions of any leader', 'Was he **necessary** to success? Was he **sufficient**, or did structure (the ruler\'s weakness and choices) decide the outcome?'),
],
'Two rows. Gandhi turned Congress into a mass movement and was necessary, but not decisive, because the timing of 1947 owed more to British weakness and Attlee\'s decision. Nkrumah founded the CPP, won the 1951 elections from prison and secured power by 1957: necessary and decisive.',
'Leadership was necessary in both cases, decisive only in the Gold Coast.', H2.key);

// 06 After independence
F('06-after-independence', 'After independence: the hardest stage', 'New states inherited borders, economies and institutions shaped by empire', [
  (y) => row(y, [
    { kicker: 'INDIA', title: 'Partition and integration', body: ['Partition violence and refugees', 'Kashmir conflict from 1947; Hyderabad absorbed (1948)', 'Constitution in force 26 January 1950', 'Linguistic states (1956)', 'Nehru\'s Five-Year Plans'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'GHANA', title: 'Economy and one-party rule', body: ['Volta River (Akosombo Dam) project', 'Falling cocoa prices', 'Preventive Detention Act (1958)', 'One-party state (1964)', 'Nkrumah overthrown in a coup (1966)'], bullets: true, fill: C.cream, edge: C.olive },
    { kicker: 'ALGERIA', title: 'Departure and division', body: ['Most European settlers leave in 1962, taking skills', 'Reprisals against the harkis', 'Ben Bella overthrown by Boumediene (1965)'], bullets: true, fill: C.panel },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 15, gap: 5 } }),
  (y) => note(y, 'Do not stop at independence day', 'Many questions ask about the challenges of the years that followed and how governments responded.'),
],
'Three columns of post-independence challenges. India: partition violence, Kashmir and Hyderabad, the 1950 constitution, linguistic states (1956) and Five-Year Plans. Ghana: the Volta River project, falling cocoa prices, preventive detention (1958), a one-party state (1964) and the 1966 coup. Algeria: the settlers\' departure in 1962, reprisals against the harkis and Boumediene\'s 1965 coup.',
'Independence brought new political, economic and territorial problems.', H2.key);

// 07 Anatomy of the model introduction
F('07-model-introduction', 'What makes the model introduction work', 'Evaluate the importance of leadership in two independence movements', [
  (y) => steps(y, [
    { kicker: 'DEFINES THE ISSUE', title: '"... leadership mattered in different ways."', body: 'Asks in what ways leaders mattered, rather than asserting they were important.' },
    { kicker: 'PRECISE EVIDENCE', title: 'Congress after 1919; the CPP in 1949; elections in 1951; 1957', body: 'Both cases are evidenced from the first paragraph.' },
    { kicker: 'COMPARATIVE THESIS', title: '"... necessary in both cases but decisive only in the Gold Coast"', body: 'A judgement of degree: necessary against decisive.' },
    { kicker: 'SIGNALS THE COUNTER-ARGUMENT', title: 'Britain\'s post-war weakness; Attlee\'s decision', body: 'Structural factors and British policy that the body will weigh.' },
  ], { highlight: 2, size: 16, tsize: 18 }),
],
'Four numbered features of the model introduction: it defines the issue, gives precise evidence for both cases, states a comparative thesis judging degree (necessary against decisive) and signals the counter-argument about British weakness and policy.',
'Define, evidence, judge by degree, and signal the counter-argument.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
