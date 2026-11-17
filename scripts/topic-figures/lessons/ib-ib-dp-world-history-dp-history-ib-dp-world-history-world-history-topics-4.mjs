import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-ib-dp-world-history-dp-history-ib-dp-world-history-world-history-topics-4';
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
  t1: '## Theme 1: religious change',
  t2: '## Theme 2: intellectual and cultural change',
  t3: '## Theme 3: exploration and contact',
  t4: '## Theme 4: social and economic change',
  we: '## Worked example: a comparative essay plan',
  jp: '## A second region: Tokugawa Japan',
  int: '## Interpretations',
};
// Region block for schematics
const region = (x, y, w, h, label, fill = C.tealLight) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="40" fill="${fill}" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="10 6"/>` + T(x + w / 2, y + 34, label, { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
const nts = (y) => T(870, y, 'Schematic, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });

// 01 Themes and the meaning of transition
F('01-four-themes', 'Societies in transition: four themes', '', [
  (y) => grid(y, [
    { kicker: 'THEME 1', title: 'Religious change', body: 'Reform movements, responses of established authorities, effects of division' },
    { kicker: 'THEME 2', title: 'Intellectual and cultural change', body: 'Humanism, printing, the arts, new scientific thinking' },
    { kicker: 'THEME 3', title: 'Exploration and contact', body: 'Voyages, trade, conquest; exchange of goods, people, plants, diseases' },
    { kicker: 'THEME 4', title: 'Social and economic change', body: 'Population, trade, prices and money, social structures' },
  ], 2, { gap: 16, vgap: 16, vcenter: false, card: { size: 16, tsize: 19, pad: 16 } }),
  (y) => {
    const c = card(30, y, 840, { title: '"Transition": weigh change against continuity', size: 16, tsize: 20, pad: 20, fill: C.cream, edge: C.olive, minH: 118 });
    const ch = chips(y + 64, ['How far?', 'How fast?', 'For whom?', 'What stayed the same?'], { size: 17, fill: C.panel });
    return { s: c.s + ch.s, h: c.h };
  },
],
'Four theme cards: religious change, intellectual and cultural change, exploration and contact, and social and economic change. A banner says transition means weighing change against continuity, with four questions: how far, how fast, for whom, and what stayed the same.',
'Every answer weighs change against continuity.', H2.cov);

// 02 Reformation and Catholic renewal
F('02-reformation-timeline', 'Reformation and Catholic renewal', 'Religious change in the German lands and the Catholic response', [
  (y) => vtimeline(y, [
    { d: '1517', title: 'Luther\'s Ninety-five Theses', body: 'Challenge the sale of indulgences; grow into a rejection of papal authority. Printing spreads his ideas rapidly.', fill: C.tealLight, edge: C.tealDark },
    { d: '1521', title: 'Excommunicated; condemned at the Diet of Worms', body: 'Protected by the Elector of Saxony', fill: C.tealLight, edge: C.tealDark },
    { d: '1524-25', title: 'Peasants\' War', body: 'Religious ideas feed social revolt; Luther condemns the rebels', fill: C.tealLight, edge: C.tealDark },
    { d: '1540', title: 'Society of Jesus approved', body: 'Catholic renewal; missions overseas', fill: C.cream, edge: C.olive },
    { d: '1545-63', title: 'Council of Trent', body: 'Reaffirms Catholic doctrine; reforms clergy training', fill: C.cream, edge: C.olive },
    { d: '1555', title: 'Peace of Augsburg', body: 'Each prince chooses Lutheranism or Catholicism for his territory', fill: C.teal, edge: C.tealDark },
  ], { lx: 130 }),
  (y) => row(y, [
    { title: 'Lutheran reform', fill: C.tealLight, edge: C.tealDark },
    { title: 'Catholic renewal', fill: C.cream, edge: C.olive },
    { title: 'Settlement', fill: C.teal, edge: C.tealDark },
  ], { gap: 14, card: { size: 16, tsize: 17, pad: 12, align: 'middle' } }),
],
'A vertical timeline: Luther\'s Ninety-five Theses (1517); excommunication and the Diet of Worms (1521); the Peasants\' War (1524-25); the Jesuits approved (1540); the Council of Trent (1545-63); and the Peace of Augsburg (1555), which let each prince choose his territory\'s religion.',
'Reform, revolt, Catholic response and a settlement by princes.', H2.t1);

// 03 Columbian exchange
F('03-columbian-exchange', 'The Columbian exchange', 'Crosby\'s term for transfers between the Americas and Afro-Eurasia', [
  (y) => {
    const top = y, H = 420;
    let s = region(30, top, 210, H, 'The Americas') + region(660, top, 210, H, 'Afro-Eurasia');
    s += para(135, top + 80, 'Reached by Columbus across the Atlantic, 1492', 170, { size: 16, anchor: 'middle', fill: C.ink }).s;
    s += para(765, top + 80, 'Europe, Africa and Asia', 170, { size: 16, anchor: 'middle', fill: C.ink }).s;
    const flows = [
      [1, 'Maize and potatoes', 'spread to Europe, Africa and Asia', C.tealDark, 'ahT'],
      [-1, 'Horses, cattle and wheat', 'brought to the Americas', C.tealDark, 'ahT'],
      [-1, 'Smallpox', 'devastated American populations', C.rust, 'ahR'],
      [-1, 'Atlantic slave trade', 'forced transport of millions of Africans', C.rust, 'ahR'],
    ];
    flows.forEach(([dir, lab, sub, col, mk], i) => {
      const yy = top + 140 + i * 78;
      const [x1, x2] = dir > 0 ? [250, 650] : [650, 250];
      s += arrow(x1, yy, x2, yy, { color: col, w: 5, marker: mk });
      s += T(450, yy - 12, lab, { size: 18, weight: 700, anchor: 'middle', fill: col === C.rust ? C.rust : C.ink }) + T(450, yy + 26, sub, { size: 16, anchor: 'middle', fill: C.muted });
    });
    s += nts(top + H + 26);
    return { s, h: H + 30 };
  },
],
'A schematic, not to scale. Maize and potatoes flow from the Americas to Europe, Africa and Asia; horses, cattle and wheat flow to the Americas; smallpox flows to the Americas and devastates populations; and the Atlantic slave trade forcibly transports millions of Africans to the Americas.',
'Crops, animals, diseases and enslaved people crossed the Atlantic in both directions.', H2.t3);

// 04 Silver flows
F('04-silver-flows', 'Where American silver went', '', [
  (y) => {
    const top = y, H = 170;
    let s = region(30, top, 250, H, 'Ming China', C.cream) + region(325, top, 250, H, 'The Americas') + region(620, top, 250, H, 'Europe', C.cream);
    s += chip(155, top + 62, 'taxes paid in silver', { anchor: 'middle', size: 16, fill: C.panel }).s + chip(155, top + 106, 'Single Whip, 1570s', { anchor: 'middle', size: 16, fill: C.panel }).s;
    s += chip(745, top + 62, 'prices rise', { anchor: 'middle', size: 16, fill: C.panel }).s + chip(745, top + 106, '16th century', { anchor: 'middle', size: 16, fill: C.panel }).s;
    s += chip(450, top + 62, 'Potosí (from 1545)', { anchor: 'middle', size: 16, fill: C.panel }).s + chip(450, top + 106, 'Mexico', { anchor: 'middle', size: 16, fill: C.panel }).s;
    const oy = top + H + 55;
    s += path(`M420,${top + H + 4} L420,${oy} L155,${oy} L155,${top + H + 12}`, { stroke: C.olive, w: 6, extra: 'marker-end="url(#ahO)"' });
    s += path(`M480,${top + H + 4} L480,${oy} L745,${oy} L745,${top + H + 12}`, { stroke: C.olive, w: 6, extra: 'marker-end="url(#ahO)"' });
    s += T(287, oy + 30, 'silver via the Manila galleons', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) + T(287, oy + 52, '(from the 1570s)', { size: 16, anchor: 'middle', fill: C.olive });
    s += T(612, oy + 30, 'silver', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
    s += nts(oy + 52);
    const Hh = oy + 56 - top;
    return { s, h: Hh };
  },
  (y) => row(y, [
    { kicker: 'MING CHINA', title: 'Silver becomes the main medium for taxes and trade', body: 'The Single Whip reforms (1570s, associated with Zhang Juzheng) turn taxes and labour services into silver payments.', fill: C.cream, edge: C.olive },
    { kicker: 'EUROPE', title: 'The "price revolution"', body: 'Prices rise over the sixteenth century.', fill: C.cream, edge: C.olive },
  ], { gap: 20, vcenter: false, card: { size: 16, tsize: 19, pad: 18 } }),
],
'A schematic, not to scale. Silver from Potosí (from 1545) and Mexico flows east to Europe, where prices rise in the price revolution, and west through the Manila galleons (from the 1570s) to Ming China, where silver becomes the main medium for taxes and trade under the Single Whip reforms.',
'American silver tied Europe and China to the same flow of money.', H2.t4);

// 05 Printing and new science
F('05-ideas-timeline', 'Printing and new science, 1450-1700', 'Diamonds mark dates given in the lesson', [
  (y) => htimeline(y, 1400, 1700, [
    { label: 'Gutenberg Bible, 1450s', points: [1455], sub: 'Movable type at Mainz: cheaper, standard texts', fill: C.cream },
    { label: 'Copernicus, On the Revolutions, 1543', points: [1543], sub: 'The sun at the centre of the universe', fill: C.teal },
    { label: 'Galileo tried by the Inquisition, 1633', points: [1633], sub: 'Limits of intellectual freedom', fill: C.mustard },
    { label: 'Newton\'s Principia, 1687', points: [1687], sub: 'Laws of motion and universal gravitation', fill: C.teal },
  ], { laneH: 90, step: 50 }),
  (y) => note(y, 'Do not overstate literacy', 'Printing spread ideas mainly through the literate and through reading aloud. Assess the effect on a society, do not just list inventions.'),
],
'A timeline from 1400 to 1700 marks the Gutenberg Bible (1450s), Copernicus\'s On the Revolutions (1543), Galileo\'s trial by the Inquisition (1633) and Newton\'s Principia (1687). A note warns that printing spread ideas mainly through the literate and reading aloud.',
'Two centuries from the printed Bible to Newton\'s laws.', H2.t2);

// 06 Silver in Spain and China
F('06-silver-spain-china', 'One silver flow, opposite effects', 'Habsburg Spain (Europe) and Ming China (Asia and Oceania)', [
  (y) => table(y, [
    { w: 0.9, head: 'Theme' },
    { w: 1.5, head: 'Habsburg Spain', hfill: C.teal },
    { w: 1.5, head: 'Ming China', hfill: C.cream },
  ], [
    ['Money and prices', 'Rising prices; dependence on imported goods', 'Silver the main currency for trade and taxation'],
    ['State finance', 'Funded Philip II\'s wars, yet the crown repeatedly defaulted', 'Single Whip reforms tied the tax system to silver'],
    ['Society and economy', 'Wealth flowed to foreign creditors and suppliers; domestic industry struggled', 'Commercialisation of agriculture and crafts, especially in the south'],
    ['Vulnerability', 'Dependence on the treasure fleets', 'Silver imports fell in the 17th century: how far did this deepen the late Ming crisis?'],
  ], { size: 16, hsize: 18 }),
  (y) => row(y, [
    { title: 'Spain', body: 'Spent silver on war and could not keep it: it **masked weakness**.', fill: C.tealLight, edge: C.tealDark },
    { title: 'China', body: 'Absorbed silver into a commercial economy: it **strengthened commerce**, but created dependence.', fill: C.cream, edge: C.olive },
  ], { gap: 20, card: { size: 16, tsize: 19, pad: 18 } }),
],
'A grid compares the impact of American silver on Habsburg Spain and Ming China across money and prices, state finance, society and economy, and vulnerability. Below, the conclusion: silver masked Spanish weakness but strengthened Chinese commerce while creating dependence.',
'The same silver strengthened Chinese commerce and masked Spanish weakness.', H2.we);

// 07 Tokugawa Japan
F('07-tokugawa-tension', 'Tokugawa Japan: change against a fixed order', '', [
  (y) => htimeline(y, 1590, 1650, [
    { label: 'Sekigahara, 1600; shogun, 1603', points: [1600, 1603], sub: 'Tokugawa Ieyasu takes power', fill: C.mustard },
    { label: 'Foreign contact restricted, 1630s', start: 1630, end: 1639.5, sub: 'Japanese forbidden to travel abroad', fill: C.teal },
    { label: 'Dutch confined to Dejima, from 1641', points: [1641], sub: 'European trade limited to the Dutch, at Nagasaki', fill: C.mustard },
  ], { laneH: 88, step: 10 }),
  (y) => P('Christianity was first tolerated, then banned and persecuted from the early seventeenth century.', { size: 17, anchor: 'middle', fill: C.ink })(y),
  (y) => {
    const r = row(y, [
      { kicker: 'CHANGING', title: 'Economy and culture', body: ['Peace brings rapid urban growth: Edo, Osaka, Kyoto', 'Merchants grow rich', 'Printed books, theatre, woodblock prints'], bullets: true, fill: C.tealLight, edge: C.tealDark },
      { kicker: 'HELD STILL', title: 'Official status order', body: ['Warriors above peasants, artisans and merchants', 'The regime tried to freeze it'], bullets: true, fill: C.cream, edge: C.olive },
    ], { gap: 90, vcenter: false, card: { size: 16, tsize: 19, pad: 18, gap: 5 } });
    const mx = r.xs[0] + r.ws[0] + 45, my = y + r.h / 2;
    const s = r.s + arrow(mx - 36, my - 14, mx + 36, my - 14, { color: C.tealDark, marker: 'ahT', w: 4 }) + arrow(mx + 36, my + 14, mx - 36, my + 14, { color: C.olive, marker: 'ahO', w: 4 }) + T(mx, my - 30, 'tension', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
    return { s, h: r.h };
  },
],
'A timeline from 1590 to 1650: Sekigahara (1600) and Ieyasu as shogun (1603); foreign contact restricted in the 1630s, with the Dutch confined to Dejima from 1641; Christianity tolerated, then banned. Below, economic and cultural change (urban growth, rich merchants, printed books, theatre and prints) pulls against an official status order the regime tried to freeze.',
'Economic and cultural change ran ahead of a deliberately conservative order.', H2.jp);

// 08 Interpretations
F('08-interpretations', 'Debates on the extent of change', '', [
  (y) => spectrum(y, 'Sharp break with the Middle Ages', 'Continuity with medieval learning', [
    { pos: 0.08, title: 'The "Renaissance" as a break', body: 'Popularised in the 19th century, notably by Burckhardt\'s study of Renaissance Italy (1860).', fill: C.tealLight, edge: C.tealDark, dot: C.teal },
    { pos: 0.92, title: 'Many historians now', body: 'Stress continuity with medieval learning.', fill: C.cream, edge: C.olive },
  ]),
  LBL('WHAT DROVE THE REFORMATION? THREE EMPHASES'),
  (y) => row(y, [
    { title: 'Luther\'s theology', body: 'Luther\'s own ideas' },
    { title: 'Political interests', body: 'Of princes and towns' },
    { title: 'The role of print', body: 'Ideas spread rapidly' },
  ], { gap: 16, card: { size: 16, tsize: 19, pad: 16, align: 'middle' } }),
  (y) => P('Use these debates to frame your judgement on the extent of change.', { size: 17, anchor: 'middle', fill: C.ink })(y),
],
'A spectrum from the Renaissance as a sharp break (popularised by Burckhardt in 1860) to continuity with medieval learning, stressed by many historians now. Below, three emphases in explaining the Reformation: Luther\'s theology, the political interests of princes and towns, and the role of print.',
'Break or continuity: the debate is a judgement on the extent of change.', H2.int);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
