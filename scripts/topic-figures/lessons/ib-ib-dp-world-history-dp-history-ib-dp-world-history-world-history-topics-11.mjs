import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-ib-dp-world-history-dp-history-ib-dp-world-history-world-history-topics-11';
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
  we: '## Worked example: an annotated paragraph on outcome',
  ex: '## Exam technique',
};

// 01 Three parts of the topic
F('01-three-parts', 'The three parts of the topic', 'Causes, practices and effects of 20th-century wars', [
  (y) => row(y, [
    { kicker: 'PART 1', title: 'Causes of war', body: ['Economic, ideological, political, territorial and other', 'Short-term and long-term'], bullets: true },
    { kicker: 'PART 2', title: 'Practices of war and impact on the outcome', body: ['Types of war', 'Technology and theatres: air, land, sea', 'Mobilization of resources', 'Foreign powers'], bullets: true, fill: C.cream, edge: C.olive },
    { kicker: 'PART 3', title: 'Effects of war', body: ['Peacemaking', 'Territorial change', 'Political repercussions', 'Economic, social, demographic', 'Role and status of women'], bullets: true },
  ], { arrows: true, gap: 40, vcenter: false, card: { size: 16, tsize: 19, pad: 16 } }),
  (y) => note(y, 'The most neglected part is Part 2', 'Impact on the outcome means explaining **why one side won**, not only describing how the fighting took place.'),
],
'Three linked cards: causes of war (by type and timescale), practices of war and their impact on the outcome (types of war, technology and theatres, mobilization, foreign powers) and effects of war (peacemaking, territory, politics, economy and society, women). A note stresses that Part 2 means explaining why one side won.',
'Causes, practices, effects: and Part 2 asks why one side won.', H2.cov);

// 02 Four case-study wars on one timeline
F('02-four-wars-timeline', 'Four case-study wars, to scale', 'Each bar runs from the start of the war to its end; the trigger is named below', [
  (y) => htimeline(y, 1910, 1990, [
    { label: 'First World War, 1914-18', start: 1914, end: 1918, sub: 'Trigger: assassination of Franz Ferdinand, 28 June 1914', fill: C.teal },
    { label: 'Spanish Civil War, 1936-39', start: 1936, end: 1939, sub: 'Trigger: military rising of 17-18 July 1936', fill: C.cream },
    { label: 'Iran-Iraq War, 1980-88', start: 1980, end: 1988, sub: 'Trigger: Iraqi invasion, 22 September 1980', fill: C.mustard },
    { label: 'Falklands War, 1982', start: 1982, end: 1982.4, sub: 'Trigger: Argentine invasion, 2 April 1982', fill: C.tealLight },
  ], { laneH: 96 }),
  (y) => note(y, 'Choose pairs from different regions', 'The First World War and the Spanish Civil War are both European, so pair one of them with a war from another region. Comparing a total war with a civil or limited war also helps.'),
],
'A timeline from 1910 to 1990 with four bars: the First World War (1914-18), the Spanish Civil War (1936-39), the Iran-Iraq War (1980-88) and the Falklands War (1982), each labelled with its trigger. A note warns that the first two are both European.',
'Four wars across the century; pick essay pairs from different regions.', H2.key);

// 03 Falklands: sort, rank, link
F('03-falklands-causes', 'Sorting causes: the Falklands War', 'Sort by timescale and type, then rank and link', [
  (y) => {
    const tagT = (x, yy, lab, f) => chip(x, yy, lab, { size: 15, fill: f }).s;
    const r = row(y, [
      { kicker: 'LONG-TERM', title: 'Argentine claim to the islands', body: 'Long-standing', fill: C.tealLight, edge: C.tealDark, minH: 190 },
      { kicker: 'LONG-TERM', title: 'British reluctance to fund their defence', body: '', fill: C.tealLight, edge: C.tealDark, minH: 190 },
      { kicker: 'SHORT-TERM', title: 'Junta needs a popular cause', body: 'amid economic crisis', fill: C.cream, edge: C.olive, minH: 190 },
      { kicker: 'TRIGGER', title: 'Argentine invasion', body: '2 April 1982', fill: C.mustard, edge: C.ink, minH: 190, kfill: C.ink, bfill: C.ink },
    ], { gap: 14, fr: [1, 1, 1.25, 0.85], vcenter: false, card: { size: 16, tsize: 18, pad: 16 } });
    let s = r.s;
    s += tagT(r.xs[0] + 16, y + 140, 'territorial', C.panel);
    s += tagT(r.xs[2] + 16, y + 140, 'political', C.panel);
    s += tagT(r.xs[2] + 16 + chip(0, 0, 'political', { size: 15 }).w + 8, y + 140, 'economic', C.panel);
    // link arrow from claim to junta need
    const ax = r.xs[0] + r.ws[0] / 2, bx = r.xs[2] + r.ws[2] / 2, ly = y + r.h + 40;
    s += path(`M${ax},${y + r.h + 4} L${ax},${ly} L${bx},${ly}`, { stroke: C.olive, w: 3.5 }) + arrow(bx, ly, bx, y + r.h + 8, { color: C.olive, marker: 'ahO' });
    s += `<rect x="${(ax + bx) / 2 - 150}" y="${ly - 17}" width="300" height="34" rx="17" fill="${C.bg}"/>` + T((ax + bx) / 2, ly + 6, 'the claim served a political need', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
    return { s, h: r.h + 58 };
  },
  (y) => row(y, [
    { title: 'Sort', body: 'Label each cause by type (economic, ideological, political, territorial) and by timescale.', fill: C.tealLight, edge: C.tealDark },
    { title: 'Rank', body: 'Decide which cause mattered most and say why.', fill: C.cream, edge: C.olive },
    { title: 'Link', body: 'Show how categories overlap, as the territorial claim did here.', fill: C.panel },
  ], { arrows: true, gap: 40, card: { size: 16, tsize: 19, pad: 16 } }),
],
'The causes of the Falklands War sorted into long-term (the Argentine claim to the islands, tagged territorial; British reluctance to fund their defence), short-term (the junta\'s need for a popular cause amid economic crisis, tagged political and economic) and the trigger (the Argentine invasion of 2 April 1982). An arrow shows the territorial claim served a political need. Below: sort, rank, link.',
'Sort by type and timescale, rank, then show how the categories overlap.', H2.key);

// 04 Types of war: total versus limited
F('04-total-limited', 'Total war and limited war', 'Two of the four types of war in the guide', [
  (y) => chips(y, ['Civil war', 'Guerrilla war', 'Limited war', 'Total war'], { size: 17 }),
  (y) => row(y, [
    { kicker: 'TOTAL WAR', title: 'First World War', body: ['Conscription in Britain from 1916', 'State control through the Defence of the Realm Act (1914)', 'Economies turned over to war production'], bullets: true, fill: C.cream, edge: C.olive },
    { kicker: 'LIMITED WAR', title: 'Falklands War (1982)', body: ['Confined to the islands and the surrounding sea', 'Limited aims on both sides', 'Neither side tried to defeat the other completely'], bullets: true, fill: C.tealLight, edge: C.tealDark },
  ], { gap: 20, vcenter: false, card: { size: 17, tsize: 20, pad: 20, gap: 8 } }),
  (y) => note(y, 'Use the type to explain the outcome', 'Say why a war was total, limited, civil or guerrilla, and how that shaped who won.'),
],
'Four chips name the types of war in the guide: civil, guerrilla, limited and total. A table compares the First World War as a total war (conscription in Britain from 1916, the Defence of the Realm Act of 1914, economies turned to war production) with the Falklands as a limited war (confined to the islands and sea, limited aims on both sides).',
'Total war mobilizes whole societies; a limited war has limited area and aims.', H2.key);

// 05 Linking practices to the outcome
F('05-practices-outcome', 'Linking practices to the outcome', 'Each practice is evidence for why one side won', [
  LBL('FIRST WORLD WAR'),
  (y) => steps(y, [
    { title: 'Land: technology brings deadlock', body: 'Machine guns and artillery produce trench deadlock on the Western Front. Poison gas at Ypres (1915); tanks first at the Somme (September 1916).' },
    { title: 'Sea: submarine warfare', body: 'Unrestricted submarine warfare, resumed in February 1917, helps bring the USA into the war in April 1917.' },
    { title: 'Mobilization of resources', body: 'The Allies\' greater industrial and financial resources, especially after American entry ...' },
    { title: 'Outcome', body: '... wear down the Central Powers by 1918.' },
  ], { highlight: 3, size: 16, tsize: 19 }),
  10,
  LBL('FALKLANDS WAR'),
  (y) => row(y, [
    { title: 'Air power and submarines', body: 'A British submarine sinks the *General Belgrano* (2 May 1982).', fill: C.tealLight, edge: C.tealDark },
    { title: 'Effect on the outcome', body: 'The Argentine navy then stays in port.', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 50, card: { size: 16, tsize: 19, pad: 16 } }),
],
'First World War: machine guns and artillery cause trench deadlock; unrestricted submarine warfare from February 1917 helps bring the USA in by April 1917; the Allies\' greater resources wear down the Central Powers by 1918. Falklands: a British submarine sinks the General Belgrano on 2 May 1982 and the Argentine navy then stays in port.',
'Describe a practice only to explain why the winner won.', H2.key);

// 06 Effects hub
F('06-effects-of-war', 'Effects: wider than the peace treaty', '', [
  (y) => hub(y, ['Effects', 'of war'], [
    { title: 'Peacemaking', body: 'Paris settlement after 1918 (Versailles, 28 June 1919); League of Nations. Ended the war but left grievances, especially in Germany.' },
    { title: 'Territorial change', body: 'Break-up of the Austro-Hungarian, Ottoman and Russian empires; new states in central and eastern Europe.' },
    { title: 'Economic, social, demographic', body: 'Debts, inflation, mass casualties and refugees.' },
  ], [
    { title: 'Political repercussions', body: 'Revolution in Russia (1917); fall of the Argentine junta and civilian rule in 1983; Franco\'s dictatorship after 1939.' },
    { title: 'Women', body: 'Wartime work in munitions and services; in Britain, the 1918 Act gave the vote to women over 30 who met a property qualification. How far did change last?', fill: C.cream, edge: C.olive },
  ], { cardW: 310, r: 82 }),
],
'Five effects of war around a central circle: peacemaking (the Paris settlement and the League), territorial change (the break-up of three empires), economic, social and demographic impact, political repercussions (Russia 1917, Argentina 1983, Franco after 1939) and the changing role of women.',
'Effects cover peacemaking, territory, politics, society and women.', H2.key);

// 07 Anatomy of the worked paragraph
F('07-paragraph-anatomy', 'Anatomy of a strong paragraph', 'Examine the reasons for the Nationalist victory in the Spanish Civil War', [
  (y) => steps(y, [
    { kicker: 'ANSWER AND RANK', title: '"Foreign intervention was the most important reason ..."', body: 'The opening sentence answers the question and ranks a factor.' },
    { kicker: 'PRECISE EVIDENCE', title: 'Airlift of the Army of Africa; Condor Legion; Italian troops', body: 'Evidence is precise and in order where the argument needs it.' },
    { kicker: 'COUNTER-FACTOR, WEIGHED', title: '"Yet foreign aid alone does not explain the outcome ..."', body: 'Franco\'s unified command is set against Republican divisions.' },
    { kicker: 'LINKED JUDGEMENT', title: '"... their unity allowed them to use those means effectively."', body: 'The last sentence connects the two factors in a judgement.' },
  ], { highlight: 3, size: 16, tsize: 18 }),
],
'Four numbered steps of the model paragraph: answer the question and rank a factor; give precise, ordered evidence; introduce and weigh a counter-factor; end with a judgement linking the two factors.',
'Answer, evidence, counter-factor, linked judgement.', H2.we);

// 08 Weighing the Spanish Civil War outcome
F('08-spain-balance', 'Why the Nationalists won', 'The balance of resources and unity in the Spanish Civil War', [
  (y) => balance(y, 'Nationalists', 'Republic', -1, { lfill: C.cream, rfill: C.tealLight }),
  (y) => row(y, [
    { title: 'Nationalist advantages', body: ['German and Italian aircraft carry the Army of Africa across the Strait of Gibraltar', 'Condor Legion and tens of thousands of Italian troops', 'Franco\'s unified command'], bullets: true, fill: C.cream, edge: C.olive },
    { title: 'Republican weaknesses', body: ['Soviet aid, paid with the gold reserves: key at Madrid, less after 1937', 'Non-intervention by Britain and France: no legal arms from the democracies', 'Divisions: fighting in Barcelona, May 1937'], bullets: true, fill: C.tealLight, edge: C.tealDark },
  ], { gap: 20, vcenter: false, card: { size: 16, tsize: 19, pad: 18, gap: 8 } }),
  (y) => note(y, 'Judgement', 'Foreign intervention gave the Nationalists the **means** to win; their **unity** let them use those means effectively.', { align: 'middle' }),
],
'A balance tips towards the Nationalists. Their side lists the airlift of the Army of Africa by German and Italian aircraft, the Condor Legion and Italian troops, and Franco\'s unified command. The Republic\'s side lists Soviet aid that fell after 1937, non-intervention by Britain and France, and divisions shown in Barcelona in May 1937.',
'Foreign aid gave the means; unity let the Nationalists use them.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
